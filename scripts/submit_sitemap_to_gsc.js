const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// 1. Parse .env / .env.local in settleloans root (allowing process.env overrides)
const rootDir = path.resolve(__dirname, '..');
const envVars = {};

for (const fileName of ['.env', '.env.local']) {
  const filePath = path.join(rootDir, fileName);
  if (fs.existsSync(filePath)) {
    fs.readFileSync(filePath, 'utf8').split('\n').forEach(line => {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        let val = match[2].trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        envVars[key] = val.replace(/\\n/g, '\n');
      }
    });
  }
}

const clientEmailFromEnv =
  process.env.SEARCH_CONSOLE_CLIENT_EMAIL ||
  process.env.FIREBASE_CLIENT_EMAIL ||
  envVars.SEARCH_CONSOLE_CLIENT_EMAIL ||
  envVars.FIREBASE_CLIENT_EMAIL;

let privateKeyFromEnv =
  process.env.SEARCH_CONSOLE_PRIVATE_KEY ||
  process.env.FIREBASE_PRIVATE_KEY ||
  process.env.FIREBASE_SERVICE_ACCOUNT ||
  envVars.SEARCH_CONSOLE_PRIVATE_KEY ||
  envVars.FIREBASE_PRIVATE_KEY ||
  envVars.FIREBASE_SERVICE_ACCOUNT;

// Fallback to local sibling ../service-account.json or GOOGLE_APPLICATION_CREDENTIALS if .env lacks keys
let saJson = null;
const candidateJsonPaths = [
  process.env.GOOGLE_APPLICATION_CREDENTIALS,
  path.resolve(rootDir, '..', 'service-account.json')
].filter(Boolean);

if (!clientEmailFromEnv || !privateKeyFromEnv) {
  for (const jp of candidateJsonPaths) {
    if (fs.existsSync(jp)) {
      try {
        saJson = JSON.parse(fs.readFileSync(jp, 'utf8'));
        break;
      } catch (_) {}
    }
  }
}

const clientEmail = clientEmailFromEnv || (saJson && saJson.client_email);
let privateKey = privateKeyFromEnv || (saJson && saJson.private_key);

if (!clientEmail || !privateKey) {
  console.error(
    '❌ Missing GSC / Firebase service-account credentials.\n' +
    '   Add FIREBASE_CLIENT_EMAIL + FIREBASE_PRIVATE_KEY (or SEARCH_CONSOLE_CLIENT_EMAIL + SEARCH_CONSOLE_PRIVATE_KEY) to .env,\n' +
    '   grant that service-account email Owner/Full User access to sc-domain:settleloans.in (or https://www.settleloans.in/) in Google Search Console,\n' +
    '   and re-run: node scripts/submit_sitemap_to_gsc.js'
  );
  process.exit(1);
}

privateKey = privateKey.replace(/"/g, '').replace(/\\n/g, '\n');

function base64url(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/webmasters',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  };

  const unsignedJwt = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(payload))}`;
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(unsignedJwt);
  const signature = signer
    .sign(privateKey, 'base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  const assertion = `${unsignedJwt}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion
    })
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`OAuth token exchange failed (${res.status}): ${errText}`);
  }
  const data = await res.json();
  return data.access_token;
}

async function resolvePropertyUrl(token) {
  if (process.env.GSC_SITE_URL || envVars.GSC_SITE_URL) {
    return process.env.GSC_SITE_URL || envVars.GSC_SITE_URL;
  }

  const sitesRes = await fetch('https://www.googleapis.com/webmasters/v3/sites', {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (sitesRes.ok) {
    const sitesData = await sitesRes.json();
    const entries = (sitesData.siteEntry || []).map(s => s.siteUrl);
    if (entries.includes('sc-domain:settleloans.in')) return 'sc-domain:settleloans.in';
    if (entries.includes('https://www.settleloans.in/')) return 'https://www.settleloans.in/';
  }

  return 'sc-domain:settleloans.in';
}

async function submitSettleLoansSitemap() {
  try {
    console.log(`🔐 Authenticating as service account: ${clientEmail}`);
    const token = await getAccessToken();
    const candidateSites = ['sc-domain:settleloans.in', 'https://www.settleloans.in/'];
    const preferredSite = await resolvePropertyUrl(token);
    const orderedSites = [preferredSite, ...candidateSites.filter(s => s !== preferredSite)];

    // Strictly submit ONLY the canonical www sitemap (never non-www)
    const feedpath = 'https://www.settleloans.in/sitemap.xml';
    let activeSiteUrl = null;
    let lastErrorStatus = null;
    let lastErrorBody = '';

    for (const siteUrl of orderedSites) {
      console.log(`📡 Submitting ${feedpath} to Google Search Console property "${siteUrl}"...`);
      const apiEndpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(feedpath)}`;
      const res = await fetch(apiEndpoint, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Length': '0'
        }
      });

      if (res.ok || res.status === 204) {
        console.log(`✅ Successfully submitted: ${feedpath} on ${siteUrl} (HTTP ${res.status})`);
        activeSiteUrl = siteUrl;
        break;
      } else {
        lastErrorStatus = res.status;
        lastErrorBody = await res.text();
        console.error(`⚠️ Attempt on ${siteUrl} returned HTTP ${res.status}: ${lastErrorBody}`);
      }
    }

    if (!activeSiteUrl) {
      if (lastErrorStatus === 403) {
        console.error(
          `\n❌ GSC Permission Denied (HTTP 403): Add "${clientEmail}" as an Owner or Full User on ` +
          `"sc-domain:settleloans.in" (or "https://www.settleloans.in/") in Google Search Console -> Settings -> Users and permissions.`
        );
      }
      process.exit(1);
    }

    const listEndpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(activeSiteUrl)}/sitemaps`;
    const listRes = await fetch(listEndpoint, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (listRes.ok) {
      const listData = await listRes.json();
      if (listData.sitemap) {
        console.log(`\n📊 Current Sitemap Status in Google Search Console (${activeSiteUrl}):`);
        listData.sitemap.forEach(sm => {
          console.log(`  - ${sm.path}`);
          console.log(`    Last Submitted: ${sm.lastSubmitted || 'N/A'} | Pending: ${sm.isPending} | Errors: ${sm.errors} | Warnings: ${sm.warnings}`);
        });
      }
    }
  } catch (error) {
    console.error('❌ Error submitting sitemap to Search Console API:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  submitSettleLoansSitemap();
}

module.exports = { submitSettleLoansSitemap };
