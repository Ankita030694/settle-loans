# SettleLoans SEO Change Log

Owner rules (`AGENTS.md` & `issues/LEAD_DIFFERENTIATION_PLAN_2026-11.md`):
- Existing pages are frozen against content rewrites, redirects, `noindex`, or pruning.
- Allowed changes: brand-new pages in SettleLoans' salaried personal-loan lane, contextual internal `<Link>`s from existing hubs to new pages, appending new URLs to `src/app/sitemap.ts` (real `lastModified`), and appending new links at the absolute end of the relevant array in `src/components/Footer.tsx`.
- One page = one micro-commit. Every shipped URL and structural SEO change is recorded below with a 14-day review gate.

> [!NOTE]
> **Baseline & Credential Status (2026-11-11):** Local `.env` currently contains only reCAPTCHA keys (`NEXT_PUBLIC_RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY`) and lacks `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`, and `FIREBASE_PROJECT_ID`. Additionally, the AMA Legal Solutions and CredSettle Google service accounts do not yet have user permissions on the `sc-domain:settleloans.in` Google Search Console property. Once the owner adds `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`, and `FIREBASE_PROJECT_ID` to `.env` (or runs `vercel env pull`) and grants the service account access to `settleloans.in` in GSC, run `node scripts/weekly_lane_report.js --baseline` to capture the 90-day query/page baseline into `issues/`.

| Date | URL / file | Change | Reason | Baseline | Review date | Result |
|---|---|---|---|---|---|---|
| 2026-11-11 | `AGENTS.md`, `issues/LEAD_DIFFERENTIATION_PLAN_2026-11.md` | Added SettleLoans salaried personal-loan lane rules, backlog, and non-overlap guardrails | Prevent keyword cannibalization against AMA Legal Solutions and CredSettle ahead of Dec–Mar settlement season | N/A (policy docs) | 2026-11-25 | Committed (`7fa2906`) |
| 2026-11-11 | `public/robots.txt` | Created `robots.txt` (`Allow: /`, `Disallow: /api/`, `Sitemap: https://www.settleloans.in/sitemap.xml`) | Fix live 404 on `https://www.settleloans.in/robots.txt` and point crawlers to `www` XML sitemap | `/robots.txt` returned HTTP 404 | 2026-11-25 | Committed (`d9fffdc`) |
| 2026-11-11 | `scripts/verify_page_loc.py` | Added `--no-fake-ratings` flag enforcing strict title/meta/canonical/heading/FAQ checks while forbidding `Product`/`AggregateRating` fake review schema | Align new differentiation-lane pages with Google review-snippet spam compliance without touching frozen pages | N/A (tooling) | 2026-11-25 | Committed (`1fb8e97`) |
