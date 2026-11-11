# SettleLoans: Lead Differentiation Plan (Nov 2026 – Mar 2027)

Owner decisions captured on 2026-11-11 (20-question intake run from the AMA workspace). Read this file fully before creating any page.

## 1. Why this plan exists

The company runs three lead sites with the **same service, same team and same CRM (CRMAMA)**: AMA Legal Solutions (flagship), CredSettle and SettleLoans. They capture the same people and rank for the same keywords.

SettleLoans has been following the same playbook as AMA:
- Oct 27: bank-hub consolidation and sitemap pruning.
- Nov 9: a bank hub funnel.
- Sep 30: vehicle pillar pages built directly from **AMA's** GSC queries.

Topic overlap with AMA is high on bank hubs (HDFC/SBI/ICICI/Axis + ~129 dynamic lenders) and on harassment (~56 pages). It is medium on Section 25/138, Lok Adalat, RBI recovery rules and Hinglish.

> [!WARNING]
> There is **no SettleLoans GSC data** available locally. `.env` only holds reCAPTCHA keys, so the service account (`FIREBASE_CLIENT_EMAIL` / `FIREBASE_PRIVATE_KEY`, used by `src/lib/firebase-admin`) is not present. The only query CSV in this repo (`vehicle_auto_car_movable_assets_queries.csv`) is AMA's data. Phase 0 fixes this.

## 2. Owner rules (non-negotiable)

1. **Everything already live stays intact.** No content rewrites, redirects, noindex or pruning of existing pages.
2. **Allowed:**
   - brand-new pages;
   - adding links *from* existing pages *to* new pages;
   - appending new URLs to `src/app/sitemap.ts` (append only, real `lastModified`) and to the Footer/HTML sitemap.
   - When adding Footer links, ALWAYS add them at the END of the relevant array.
3. **Minimum case size stays ₹3L.** A borrower hands *all* debts to one firm, so the lane only sets the *search entry point*. The funnel must still capture total debt (PL + cards + app loans).
4. AMA stays the broad flagship. SettleLoans goes **deeper** in its lane rather than wider.
5. No language/geo split. Topic + search intent are the only separators.
6. Pace: get ready for the Dec → Mar settlement season as fast as possible.
7. KPIs reported **weekly**:
   - (a) unique ₹3L+ leads not already in the CRM from another brand;
   - (b) organic clicks on new pages from queries where AMA is not in the top 10;
   - (c) converted clients.

## 3. SettleLoans' lane: "The salaried personal-loan site"

SettleLoans owns **bank and NBFC personal loans for salaried borrowers**, entered through **salaried-specific sub-intents per lender**. It does not compete on head terms like "HDFC personal loan settlement". AMA already holds those, and CredSettle currently ranks for some of them, e.g. "hdfc personal loan settlement percentage" (CS 6.1 vs AMA 10.4) and "poonawalla personal loan settlement percentage" (CS 3.4).

| Sub-intent | Priority | Demand evidence (Google autocomplete, India) | Existing SettleLoans hub to link from |
|---|---|---|---|
| **EMI / ECS / NACH bounce charges by lender** | 1st | Strong: "personal loan emi bounce charges icici / axis / hdfc / sbi", "kotak…", "bajaj finance emi bounce charges per day / per month / calculator", "tata capital emi bounce charges calculator", "hdfc personal loan ecs bounce charges / emi return charges" | `/personal-loan-emi-bounce-charges`, `/loan-overdue-nach-bounce-immediate-steps`, `/stop-emi-bounce-cycle-for-good`, `/reminder-calls-after-emi-bounce` |
| **Salary account auto-debit / set-off / freeze by bank** | 2nd | Moderate (generic demand; bank-specific is thin), so use only banks where salary accounts + PL are common (HDFC, ICICI, Axis, Kotak, SBI) | `/bank-freeze-salary-account-loan-default`, `/salary-account-ecs-mandate-cancellation-rules` |
| **Job situation for salaried borrowers** (job loss, salary cut, new job/BGV after settlement, notice period) | 3rd | GSC gap: "unable to pay personal loan emi due to job loss" 209 imps, AMA pos 17, CS absent. Other angles have low demand, so build only a few strong pages | `/job-loss-loan-settlement-process`, `/loan-settlement-during-job-loss`, `/loan-settlement-for-salaried-people` |
| **Multiple / top-up PLs from the same lender** | 4th | "personal loan top up hdfc / icici / sbi" is product intent (low lead intent), so frame it as *default on top-up* and use sparingly | `/multiple-personal-loan-settlement` |
| **Seasonal salaried timing**: bonus, appraisal, Form 16, job-switch season | Wave 3 | Low autocomplete demand, but it fills the Feb–Mar window without touching AMA's "settle in March" pages | `/loan-settlement-for-salaried-people` |

### Do NOT create on SettleLoans (owned by AMA or CredSettle)
- **AMA lane:**
  - Lok Adalat; RBI recovery rules 2026/2027.
  - "maximum waiver 2027" and "best time / March to settle".
  - Section 25 PSSA / Section 138 / cheque bounce; harassment- and legal-notice-first topics.
  - DRT/SARFAESI/arbitration/"best lawyer for…"; payday loans; vehicle loans.
  - Head terms: "<bank> personal loan settlement / percentage / process / letter".
- **CredSettle lane:**
  - Anything with "credit card".
  - OTS / scheme / samadhan pages.
  - Small app lenders (mPokket, KreditBee, Branch, Navi, Kissht, Moneyview, Fibe…).
- **Keyword rule:** the page's primary query must contain a salaried sub-intent (bounce/ECS/NACH charges, salary account, auto-debit, employer/job, top-up default, bonus). A bare "<lender> personal loan settlement" query is not enough.

## 4. New-page standards (on top of `SEO_AND_SECURITY_COMPLIANCE.md`)
- **Before creating a slug:** `ls src/app | grep <keyword>` and grep `src/app/sitemap.ts` + `next.config.ts` redirects. If an existing page covers the intent, add a link instead of a near-duplicate.
- **Real lender data, not templates.** Every lender spoke must use that lender's current schedule of charges / MITC with a source link and a "checked on" date.
  - It must also cover the lender-specific NACH/ECS re-presentation cycle and the salaried-specific settlement path.
  - If you cannot source a lender's charges, do not create the page. Thin bank × intent templates are what the crawl audit flagged (1,843 "Duplicate Content" issues).
- **No `AggregateRating` / Product review schema and no fake review counts on new pages.** AMA removed this pattern as a spam signal. Use Article + FAQPage + BreadcrumbList.
  - `scripts/verify_page_loc.py` currently *requires* Product + aggregateRating, so new pages must be exempted (see Open decisions).
- Settlement outcomes as ranges with caveats, never promises. No em dashes (existing rule).
- **Funnel:** embed `LoanSettlementAssessmentFunnel` near the hero. Copy should address salaried borrowers and ask for *total* debt across PL, cards and app loans (brackets start at ₹3L).
- **Internal links (allowed):** each new page gets ≥3 contextual links *from* the existing hubs in the table above and from the matching `/<lender>-personal-loan-settlement` page. Also append it to `sitemap.ts`.
- **One page = one commit**, conventional commits (`feat(seo): …`, `seo(internal-links): …`). Log every page in `issues/seo_change_log.md` (create it with AMA's columns: Date | URL | Change | Reason | Baseline | Review date | Result).

## 5. Signature tool (recommended)
**Personal Loan EMI Bounce Charges Calculator (by lender)** at `/tools/personal-loan-emi-bounce-charges-calculator`.
- **Demand:** "bajaj finserv emi bounce charges calculator" and "tata capital emi bounce charges calculator" appear in autocomplete, and AMA and CredSettle have no equivalent.
- **Inputs:** lender, EMI amount, number of bounces / months overdue, other lenders.
- **Output:** bounce + penal charges + interest accrued so far, a 3/6-month projection, and when settlement becomes worth discussing.
- **Lead handoff only when total debt ≥ ₹3L**; below that, show self-help steps (restructuring request, NACH re-presentation tips). Prefill the funnel with the computed total.

## 6. Roadmap & backlog
Pace: **8 new pages per week** (≈2/day Mon–Thu; the tool counts as 2). Links + sitemap entry ship in the same week.

### Phase 0: setup (Nov 11–15)
- [ ] **GSC + Firestore access:**
  - Add the service-account vars (`FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`, `FIREBASE_PROJECT_ID`) to local `.env` (owner, or `vercel env pull`).
  - Confirm that service account is a user on the `settleloans.in` GSC property.
  - Then pull a 90-day query+page baseline into `issues/`.
- [ ] Create `issues/seo_change_log.md`.
- [ ] Weekly KPI script `scripts/weekly_lane_report.js`:
  - (a) `ContactPageForm` docs this week with debt ≥ ₹3L whose phone is not in AMA `form` or CredSettle `Form` before that date. Derive brand from `Full URL`; **no schema change**.
  - (b) GSC clicks on new-page URLs split by AMA top-10 presence.
  - (c) converted clients from CRMAMA.
- [ ] Lender charge sources collected for the Wave 1 lenders (spreadsheet in `issues/lender_charges_sources.csv`).

### Wave 1: EMI bounce by lender (Nov 16 – Dec 6)
| # | Proposed slug | Notes |
|---|---|---|
| 1–2 | `/tools/personal-loan-emi-bounce-charges-calculator` | signature tool |
| 3 | `/hdfc-personal-loan-emi-bounce-charges` | also covers "ecs bounce / emi return charges" |
| 4 | `/icici-personal-loan-emi-bounce-charges` | |
| 5 | `/axis-bank-personal-loan-emi-bounce-charges` | |
| 6 | `/sbi-personal-loan-emi-bounce-charges` | |
| 7 | `/kotak-personal-loan-emi-bounce-charges` | |
| 8 | `/bajaj-finance-emi-bounce-charges` | "per day / per month / message" variants as sections |
| 9 | `/tata-capital-personal-loan-emi-bounce-charges` | |
| 10 | `/idfc-first-personal-loan-emi-bounce-charges` | |
| 11 | `/indusind-personal-loan-emi-bounce-charges` | |
| 12 | `/unable-to-pay-personal-loan-emi-due-to-job-loss` | GSC gap 209 imps. **Check first** whether `/loan-settlement-during-job-loss` already targets it; if so, skip and add links |
| 13–16 | Poonawalla, Aditya Birla, SMFG, Hero FinCorp EMI bounce charges | only where charges can be sourced |

### Wave 2: Salary account & employment (Dec 7 – Jan 10)
- `/hdfc-salary-account-auto-debit-personal-loan-default`, `/icici-…`, `/axis-…`, `/kotak-…`, `/sbi-…` (set-off rights, what they can and cannot debit, how to respond, settlement path).
- `/salary-cut-personal-loan-emi-restructuring-vs-settlement`.
- `/new-job-background-verification-after-loan-settlement` (Jan–Apr job-switch season).
- `/personal-loan-top-up-default-same-bank`.
- `/multiple-personal-loans-hdfc-icici-bajaj-which-to-settle-first` (salaried multi-lender prioritisation).

### Wave 3: Feb–Mar salaried timing (Jan 11 – Feb 7)
Pages must be live ≥6 weeks before the March peak.
- `/use-annual-bonus-to-settle-personal-loan`.
- `/personal-loan-settlement-and-form-16-salary-slip-proof`: income documents lenders ask for during settlement.
- `/appraisal-or-increment-restructure-or-settle-personal-loan`.
- Remaining lender × sub-intent gaps from the weekly GSC report.

### Run phase (Feb 8 – Mar 31)
4 new pages/week from report gaps + links to winners + weekly KPI report.

## 7. Weekly report format
```
Week of <date> | SettleLoans
New pages shipped: n (list)      Indexed: n/n
(a) Unique ₹3L+ leads not in CRM from other brands: n (vs last week)
(b) Clicks on new pages from non-AMA-top-10 queries: n
(c) Converted clients: n
Overlap check: % of new-page clicks from queries where AMA is top-10 (target < 20%)
```

## 8. Open decisions for the owner
1. **Exempt new pages from the aggregateRating requirement** in `scripts/verify_page_loc.py` (existing pages untouched)?
2. **Missing robots.txt:** `https://www.settleloans.in/robots.txt` returns a 404 page. Adding one (allow all + sitemap line) is a new file, not a content rewrite. Approve?
3. **Placeholder phone in schema:** the Organization schema on every page shows the phone as `+91-XXXXXXXXXX`. Fixing it touches the shared layout. Approve, or leave frozen?
4. **Shared phone number:** `+91 8800226635` is also CredSettle's main number. A dedicated SettleLoans number on new pages would make call leads attributable.
5. **Firestore access for KPI (a):** OK to read AMA and CredSettle Firestore for duplicate-phone checks?
