# Project Instructions

## Lead Differentiation Lane (owner decision, 2026-11-11)
- **Read `issues/LEAD_DIFFERENTIATION_PLAN_2026-11.md` before creating any page.** It holds the lane, backlog, roadmap and weekly KPI definitions. Also follow `SEO_AND_SECURITY_COMPLIANCE.md`.
- SettleLoans' lane: **bank & NBFC personal loans for salaried borrowers, entered through salaried sub-intents per lender**: EMI/ECS/NACH bounce charges (1st), salary-account auto-debit/set-off (2nd), job situation (3rd), top-up/multiple PLs (4th), bonus/appraisal timing (Wave 3).
- Do not create pages in AMA's lane (Lok Adalat, RBI recovery rules, Section 25/138/cheque bounce, harassment/legal-notice-first, DRT/SARFAESI/"best lawyer", payday, vehicle, "maximum waiver 2027", "best time/March", head terms like "<bank> personal loan settlement/percentage/process/letter") or CredSettle's lane (credit cards, OTS/scheme/samadhan, small app lenders).
- **Existing pages are frozen**: no rewrites, redirects, noindex or pruning. Allowed: new pages, links from existing pages to new pages, appending new entries to `src/app/sitemap.ts` (real lastModified). Footer links always go at the END of the relevant array.
- Minimum case size ₹3L; funnels on new pages ask for total debt across PL, cards and app loans.
- New pages: real lender data with source + "checked on" date, no AggregateRating/Product review schema, no fake review counts. One page per commit, logged in `issues/seo_change_log.md`.
