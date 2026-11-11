#!/usr/bin/env node
/**
 * SettleLoans Weekly Lane Differentiation KPI Reporter
 *
 * Implements Section 6 (Phase 0) & Section 7 of issues/LEAD_DIFFERENTIATION_PLAN_2026-11.md:
 *   (a) Unique >= ₹3L ContactPageForm leads this week whose phone was not already in
 *       AMA `form` or CredSettle `Form` (or earlier SettleLoans submissions) before that date.
 *       Derives brand strictly from URL fields (`Full URL` / `submissionUrl`) with ZERO schema changes.
 *   (b) GSC organic clicks on newly shipped differentiation-lane pages split by AMA top-10 presence.
 *   (c) Converted clients count (from CRM status fields if present on lead docs or external export).
 *
 * Usage:
 *   node scripts/weekly_lane_report.js               # Print 7-day weekly KPI report
 *   node scripts/weekly_lane_report.js --days=14     # Custom window
 *   node scripts/weekly_lane_report.js --baseline    # Pull 90-day GSC query+page baseline into issues/
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const REPO_ROOT = path.resolve(__dirname, '..');

function parseEnvFile(filePath) {
  const vars = {};
  if (!fs.existsSync(filePath)) return vars;
  const content = fs.readFileSync(filePath, 'utf8');
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eqIdx = line.indexOf('=');
    if (eqIdx === -1) continue;
    const key = line.slice(0, eqIdx).trim();
    let val = line.slice(eqIdx + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    vars[key] = val;
  }
  return vars;
}

function loadEnvironment() {
  const localEnv = {
    ...parseEnvFile(path.join(REPO_ROOT, '.env')),
    ...parseEnvFile(path.join(REPO_ROOT, '.env.local')),
    ...process.env,
  };
  return localEnv;
}

function normalizePhone10(raw) {
  if (!raw) return '';
  const digits = String(raw).replace(/\D/g, '');
  if (digits.length >= 10) {
    return digits.slice(-10);
  }
  return '';
}

function deriveBrandFromUrl(rawUrl, fallbackBrand) {
  const u = String(rawUrl || '').toLowerCase();
  if (u.includes('settleloans.in')) return 'SettleLoans';
  if (u.includes('amalegalsolutions.com')) return 'AMA';
  if (u.includes('credsettle.com')) return 'CredSettle';
  return fallbackBrand || 'Unknown';
}

function isAtLeastThreeLakhs(doc) {
  const combined = [
    doc['Total personal loan amount'],
    doc['Total credit card dues'],
    doc['Queries'],
    doc['Message'],
  ]
    .filter(Boolean)
    .join(' | ');

  if (!combined) return false;

  // Match LoanSettlementAssessmentFunnel brackets (all start at >= ₹3L)
  if (
    /₹\s*3\s*Lakhs?\s*to\s*₹?\s*15\s*Lakhs?/i.test(combined) ||
    /₹\s*15\s*Lakhs?\s*to\s*₹?\s*30\s*Lakhs?/i.test(combined) ||
    /₹\s*30\s*Lakhs?\s*to\s*₹?\s*50\s*Lakhs?/i.test(combined) ||
    /Above\s*₹?\s*50\s*Lakhs?/i.test(combined) ||
    /\b(?:3_to_15_lakh|15_to_30_lakh|30_to_50_lakh|above_50_lakh)\b/i.test(combined)
  ) {
    return true;
  }

  // Match explicit lakh/crore mentions (e.g. "4.5 lakh", "12L", "1 crore")
  const croreMatch = combined.match(/(\d+(?:\.\d+)?)\s*(?:cr|crore|crores)\b/i);
  if (croreMatch && parseFloat(croreMatch[1]) >= 0.03) {
    return true;
  }
  const lakhMatches = [...combined.matchAll(/(\d+(?:\.\d+)?)\s*(?:lakh|lakhs|lac|lacs|l)\b/gi)];
  for (const m of lakhMatches) {
    if (parseFloat(m[1]) >= 3) return true;
  }

  // Match raw rupee amounts >= 300000 (e.g., ₹3,50,000 or 350000)
  const rawRupees = [...combined.matchAll(/(?:₹|rs\.?|inr)?\s*([\d,]{6,})/gi)];
  for (const m of rawRupees) {
    const num = parseInt(m[1].replace(/,/g, ''), 10);
    // Ignore 10-digit phone numbers or timestamps
    if (!Number.isNaN(num) && num >= 300000 && num < 1000000000) {
      return true;
    }
  }

  return false;
}

function parseTimestampMs(val) {
  if (!val) return 0;
  if (typeof val === 'number') {
    return val < 1e11 ? val * 1000 : val;
  }
  if (typeof val === 'object') {
    if (typeof val.toMillis === 'function') return val.toMillis();
    if (typeof val._seconds === 'number') return val._seconds * 1000;
    if (typeof val.seconds === 'number') return val.seconds * 1000;
  }
  const parsed = Date.parse(String(val));
  return Number.isNaN(parsed) ? 0 : parsed;
}

function discoverShippedNewPages() {
  const sitemapPath = path.join(REPO_ROOT, 'src', 'app', 'sitemap.ts');
  const urls = new Set();
  if (fs.existsSync(sitemapPath)) {
    const content = fs.readFileSync(sitemapPath, 'utf8');
    const entryRegex = /\{\s*url:\s*`\$\{baseUrl\}(\/[^`]+)`\s*,\s*lastModified:\s*['"](\d{4}-\d{2}-\d{2})['"]/g;
    let match;
    while ((match = entryRegex.exec(content)) !== null) {
      const slug = match[1];
      const lastMod = match[2];
      if (lastMod >= '2026-11-11') {
        urls.add(`https://www.settleloans.in${slug}`);
      }
    }
  }
  return [...urls];
}

function httpsJsonRequest(urlStr, { method = 'GET', headers = {}, body = null } = {}) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(urlStr);
    const payload = body ? (typeof body === 'string' ? body : JSON.stringify(body)) : null;
    const reqHeaders = { ...headers };
    if (payload && !reqHeaders['Content-Length']) {
      reqHeaders['Content-Length'] = Buffer.byteLength(payload);
    }
    const req = https.request(
      {
        hostname: urlObj.hostname,
        path: urlObj.pathname + urlObj.search,
        method,
        headers: reqHeaders,
      },
      (res) => {
        let raw = '';
        res.on('data', (chunk) => {
          raw += chunk;
        });
        res.on('end', () => {
          try {
            const parsed = JSON.parse(raw);
            if (res.statusCode >= 400) {
              reject(
                new Error(
                  `HTTP ${res.statusCode} from ${urlObj.pathname}: ${
                    parsed.error?.message || parsed.error_description || raw
                  }`
                )
              );
              return;
            }
            resolve(parsed);
          } catch (err) {
            reject(new Error(`Non-JSON response (${res.statusCode}): ${raw.slice(0, 200)}`));
          }
        });
      }
    );
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

async function getGoogleAccessToken(clientEmail, privateKey, scope) {
  const nowSec = Math.floor(Date.now() / 1000);
  const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
  const claim = Buffer.from(
    JSON.stringify({
      iss: clientEmail,
      scope,
      aud: 'https://oauth2.googleapis.com/token',
      iat: nowSec,
      exp: nowSec + 3600,
    })
  ).toString('base64url');

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(`${header}.${claim}`);
  const signature = signer.sign(privateKey, 'base64url');
  const jwt = `${header}.${claim}.${signature}`;

  const formBody = new URLSearchParams({
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    assertion: jwt,
  }).toString();

  const tokenRes = await httpsJsonRequest('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formBody,
  });
  return tokenRes.access_token;
}

async function queryGsc(accessToken, siteUrl, requestBody) {
  const encodedSite = encodeURIComponent(siteUrl);
  return httpsJsonRequest(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodedSite}/searchAnalytics/query`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: requestBody,
    }
  );
}

function initFirebaseApp(admin, name, projectId, clientEmail, privateKey) {
  if (!clientEmail || !privateKey) return null;
  const existing = admin.apps.find((a) => a && a.name === name);
  if (existing) return existing.firestore();
  const app = admin.initializeApp(
    {
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey: privateKey.replace(/\\n/g, '\n'),
      }),
    },
    name
  );
  return app.firestore();
}

function printMissingCredentialsHelp(env) {
  const hasRecaptcha = Boolean(
    env.RECAPTCHA_SECRET_KEY || env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  );
  console.log('====================================================================');
  console.log('SettleLoans Weekly Lane Differentiation Report — Setup Required');
  console.log('====================================================================');
  console.log(
    `Status: FIREBASE_CLIENT_EMAIL / FIREBASE_PRIVATE_KEY not found in .env${
      hasRecaptcha ? ' (only reCAPTCHA keys are currently present locally).' : '.'
    }`
  );
  console.log('\nTo activate weekly KPI reporting and 90-day GSC baseline pulls:');
  console.log('  1. Pull production env vars from Vercel or add to settleloans/.env:');
  console.log('       FIREBASE_PROJECT_ID=settle-loan');
  console.log('       FIREBASE_CLIENT_EMAIL=<service-account>@settle-loan.iam.gserviceaccount.com');
  console.log('       FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n"');
  console.log('  2. In Google Search Console (sc-domain:settleloans.in -> Settings -> Users),');
  console.log('     grant Restricted/Full read access to FIREBASE_CLIENT_EMAIL (or set');
  console.log('     SEARCH_CONSOLE_CLIENT_EMAIL / SEARCH_CONSOLE_PRIVATE_KEY).');
  console.log('  3. (Optional cross-brand Firestore phone dedup if separate Firebase projects):');
  console.log('     Add AMA_FIREBASE_PROJECT_ID / AMA_FIREBASE_CLIENT_EMAIL / AMA_FIREBASE_PRIVATE_KEY');
  console.log('     and CREDSETTLE_FIREBASE_PROJECT_ID / CREDSETTLE_FIREBASE_CLIENT_EMAIL / CREDSETTLE_FIREBASE_PRIVATE_KEY');
  console.log('     (automatically falls back to sibling AMA/CredSettle .env files if present).');
  console.log('  4. Run baseline & weekly report:');
  console.log('       node scripts/weekly_lane_report.js --baseline');
  console.log('       node scripts/weekly_lane_report.js');
  console.log('====================================================================');
}

async function run() {
  const args = process.argv.slice(2);
  const isBaseline = args.includes('--baseline');
  const daysArg = args.find((a) => a.startsWith('--days='));
  const windowDays = daysArg ? Math.max(1, parseInt(daysArg.split('=')[1], 10) || 7) : 7;

  const env = loadEnvironment();
  const slClientEmail = env.FIREBASE_CLIENT_EMAIL;
  const slPrivateKey = env.FIREBASE_PRIVATE_KEY;
  const slProjectId = env.FIREBASE_PROJECT_ID || env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'settle-loan';

  if (!slClientEmail || !slPrivateKey) {
    printMissingCredentialsHelp(env);
    process.exit(0);
  }

  const admin = require('firebase-admin');
  const slDb = initFirebaseApp(admin, 'settleloans', slProjectId, slClientEmail, slPrivateKey);

  // Load AMA & CredSettle credentials from explicit env vars or sibling workspace .env files
  const amaSiblingEnv = parseEnvFile(path.resolve(REPO_ROOT, '../../AMA/ama/.env'));
  const csSiblingEnv = parseEnvFile(path.resolve(REPO_ROOT, '../../credsettlefigma/credsettle/.env'));

  const amaDb = initFirebaseApp(
    admin,
    'ama',
    env.AMA_FIREBASE_PROJECT_ID || amaSiblingEnv.FIREBASE_ADMIN_PROJECT_ID || amaSiblingEnv.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    env.AMA_FIREBASE_CLIENT_EMAIL || amaSiblingEnv.FIREBASE_ADMIN_CLIENT_EMAIL,
    env.AMA_FIREBASE_PRIVATE_KEY || amaSiblingEnv.FIREBASE_ADMIN_PRIVATE_KEY
  );

  const csDb = initFirebaseApp(
    admin,
    'credsettle',
    env.CREDSETTLE_FIREBASE_PROJECT_ID || csSiblingEnv.FIREBASE_PROJECT_ID || csSiblingEnv.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    env.CREDSETTLE_FIREBASE_CLIENT_EMAIL || csSiblingEnv.FIREBASE_CLIENT_EMAIL,
    env.CREDSETTLE_FIREBASE_PRIVATE_KEY || csSiblingEnv.FIREBASE_PRIVATE_KEY
  );

  const gscEmail = env.SEARCH_CONSOLE_CLIENT_EMAIL || slClientEmail;
  const gscKey = (env.SEARCH_CONSOLE_PRIVATE_KEY || slPrivateKey).replace(/\\n/g, '\n');

  if (isBaseline) {
    const now = new Date();
    const endStr = new Date(now.getTime() - 3 * 86400000).toISOString().split('T')[0];
    const startStr = new Date(now.getTime() - 93 * 86400000).toISOString().split('T')[0];
    const token = await getGoogleAccessToken(
      gscEmail,
      gscKey,
      'https://www.googleapis.com/auth/webmasters.readonly'
    );
    const [pagesRes, queriesRes] = await Promise.all([
      queryGsc(token, 'sc-domain:settleloans.in', {
        startDate: startStr,
        endDate: endStr,
        dimensions: ['page'],
        rowLimit: 5000,
      }),
      queryGsc(token, 'sc-domain:settleloans.in', {
        startDate: startStr,
        endDate: endStr,
        dimensions: ['query', 'page'],
        rowLimit: 10000,
      }),
    ]);
    const outPath = path.join(REPO_ROOT, 'issues', `gsc_baseline_90d_${endStr}.json`);
    fs.writeFileSync(
      outPath,
      JSON.stringify(
        {
          generatedAt: now.toISOString(),
          property: 'sc-domain:settleloans.in',
          startDate: startStr,
          endDate: endStr,
          pages: pagesRes.rows || [],
          queryPages: queriesRes.rows || [],
        },
        null,
        2
      )
    );
    console.log(`Saved 90-day SettleLoans GSC baseline to ${path.relative(REPO_ROOT, outPath)}`);
    process.exit(0);
  }

  // --- KPI (a) & (c): Unique >= ₹3L SettleLoans leads deduplicated by phone ---
  const nowMs = Date.now();
  const weekStartMs = nowMs - windowDays * 86400000;
  const prevWeekStartMs = nowMs - windowDays * 2 * 86400000;

  // Build earliest-seen phone map from AMA `form` and CredSettle `Form`
  const otherBrandEarliestByPhone = new Map();
  const recordOtherBrandPhone = (phone, tsMs) => {
    if (!phone || !tsMs) return;
    const prev = otherBrandEarliestByPhone.get(phone);
    if (!prev || tsMs < prev) {
      otherBrandEarliestByPhone.set(phone, tsMs);
    }
  };

  if (amaDb) {
    const amaSnap = await amaDb.collection('form').get();
    amaSnap.forEach((docSnap) => {
      const d = docSnap.data();
      const brand = deriveBrandFromUrl(d.submissionUrl, 'AMA');
      if (brand !== 'SettleLoans') {
        recordOtherBrandPhone(normalizePhone10(d.phone), parseTimestampMs(d.timestamp));
      }
    });
  }

  if (csDb) {
    const csSnap = await csDb.collection('Form').get();
    csSnap.forEach((docSnap) => {
      const d = docSnap.data();
      const brand = deriveBrandFromUrl(d.submissionUrl, 'CredSettle');
      if (brand !== 'SettleLoans') {
        recordOtherBrandPhone(normalizePhone10(d.number), parseTimestampMs(d.created));
      }
    });
  }

  const slSnap = await slDb
    .collection('ContactPageForm')
    .where('created', '>=', prevWeekStartMs)
    .get();

  const allSlDocs = [];
  slSnap.forEach((docSnap) => allSlDocs.push({ id: docSnap.id, ...docSnap.data() }));
  allSlDocs.sort((a, b) => (a.created || 0) - (b.created || 0));

  const countUniqueQualifyingLeads = (startMs, endMs) => {
    const seenInWindow = new Set();
    let uniqueCount = 0;
    let convertedCount = 0;

    for (const d of allSlDocs) {
      const ts = parseTimestampMs(d.created);
      if (ts < startMs || ts >= endMs) continue;
      const brand = deriveBrandFromUrl(d['Full URL'], 'SettleLoans');
      if (brand !== 'SettleLoans') continue;
      if (!isAtLeastThreeLakhs(d)) continue;

      const phone = normalizePhone10(d['Mobile Number']);
      if (!phone || seenInWindow.has(phone)) continue;

      const otherTs = otherBrandEarliestByPhone.get(phone);
      if (otherTs && otherTs < ts) continue;

      seenInWindow.add(phone);
      uniqueCount += 1;

      const statusStr = String(d.status || d.stage || d.leadStatus || '').toLowerCase();
      if (['converted', 'client', 'paid', 'enrolled', 'closed_won'].includes(statusStr)) {
        convertedCount += 1;
      }
    }
    return { uniqueCount, convertedCount };
  };

  const thisWeek = countUniqueQualifyingLeads(weekStartMs, nowMs + 1000);
  const lastWeek = countUniqueQualifyingLeads(prevWeekStartMs, weekStartMs);
  const deltaLeads = thisWeek.uniqueCount - lastWeek.uniqueCount;
  const deltaSign = deltaLeads >= 0 ? `+${deltaLeads}` : `${deltaLeads}`;

  // --- KPI (b): GSC clicks on new pages split by AMA top-10 presence ---
  const shippedUrls = discoverShippedNewPages();
  let nonAmaTop10Clicks = 'N/A (GSC access pending)';
  let overlapPctStr = 'N/A';
  let indexedCountStr = `0/${shippedUrls.length}`;

  try {
    const token = await getGoogleAccessToken(
      gscEmail,
      gscKey,
      'https://www.googleapis.com/auth/webmasters.readonly'
    );
    const endDate = new Date(nowMs - 2 * 86400000).toISOString().split('T')[0];
    const startDate = new Date(nowMs - (windowDays + 2) * 86400000).toISOString().split('T')[0];

    // Load AMA top-10 queries from GSC (or fallback to local AMA query snapshot if present)
    const amaTop10Queries = new Set();
    try {
      const amaGscEmail = amaSiblingEnv.FIREBASE_ADMIN_CLIENT_EMAIL || gscEmail;
      const amaGscKey = (amaSiblingEnv.FIREBASE_ADMIN_PRIVATE_KEY || gscKey).replace(/\\n/g, '\n');
      const amaToken = await getGoogleAccessToken(
        amaGscEmail,
        amaGscKey,
        'https://www.googleapis.com/auth/webmasters.readonly'
      );
      const amaRes = await queryGsc(amaToken, 'sc-domain:amalegalsolutions.com', {
        startDate,
        endDate,
        dimensions: ['query'],
        rowLimit: 10000,
      });
      for (const row of amaRes.rows || []) {
        if (row.position <= 10.0 && row.keys?.[0]) {
          amaTop10Queries.add(row.keys[0].toLowerCase().trim());
        }
      }
    } catch (_) {
      const localAmaQueriesPath = path.resolve(REPO_ROOT, '../../AMA/ama/scripts/all_gsc_queries.json');
      if (fs.existsSync(localAmaQueriesPath)) {
        const rawAma = JSON.parse(fs.readFileSync(localAmaQueriesPath, 'utf8'));
        const rows = Array.isArray(rawAma) ? rawAma : rawAma.rows || [];
        for (const r of rows) {
          const q = (r.query || r.keys?.[0] || '').toLowerCase().trim();
          const pos = typeof r.position === 'number' ? r.position : 99;
          if (q && pos <= 10.0) amaTop10Queries.add(q);
        }
      }
    }

    const slRes = await queryGsc(token, 'sc-domain:settleloans.in', {
      startDate,
      endDate,
      dimensions: ['page', 'query'],
      rowLimit: 10000,
    });

    const shippedSet = new Set(shippedUrls);
    const pagesWithImpressions = new Set();
    let totalNewPageClicks = 0;
    let nonOverlapClicks = 0;
    let overlapClicks = 0;

    for (const row of slRes.rows || []) {
      const pageUrl = row.keys?.[0] || '';
      const queryStr = (row.keys?.[1] || '').toLowerCase().trim();
      if (!shippedSet.has(pageUrl)) continue;
      if ((row.impressions || 0) > 0) pagesWithImpressions.add(pageUrl);
      const clicks = row.clicks || 0;
      totalNewPageClicks += clicks;
      if (amaTop10Queries.has(queryStr)) {
        overlapClicks += clicks;
      } else {
        nonOverlapClicks += clicks;
      }
    }

    indexedCountStr = `${pagesWithImpressions.size}/${shippedUrls.length}`;
    nonAmaTop10Clicks = String(nonOverlapClicks);
    overlapPctStr =
      totalNewPageClicks > 0
        ? `${((overlapClicks / totalNewPageClicks) * 100).toFixed(1)}%`
        : '0.0%';
  } catch (gscErr) {
    nonAmaTop10Clicks = `GSC unavailable (${gscErr.message.slice(0, 80)})`;
  }

  const weekOfStr = new Date(weekStartMs).toISOString().split('T')[0];
  const slugPreview =
    shippedUrls.length > 0
      ? shippedUrls.map((u) => u.replace('https://www.settleloans.in', '')).join(', ')
      : 'none yet';

  console.log(`Week of ${weekOfStr} | SettleLoans`);
  console.log(
    `New pages shipped: ${shippedUrls.length} (${slugPreview})      Indexed: ${indexedCountStr}`
  );
  console.log(
    `(a) Unique ₹3L+ leads not in CRM from other brands: ${thisWeek.uniqueCount} (${deltaSign} vs last week: ${lastWeek.uniqueCount})`
  );
  console.log(`(b) Clicks on new pages from non-AMA-top-10 queries: ${nonAmaTop10Clicks}`);
  console.log(`(c) Converted clients: ${thisWeek.convertedCount}`);
  console.log(
    `Overlap check: % of new-page clicks from queries where AMA is top-10: ${overlapPctStr} (target < 20%)`
  );
}

run().catch((err) => {
  console.error('Weekly lane report error:', err.message);
  process.exit(1);
});
