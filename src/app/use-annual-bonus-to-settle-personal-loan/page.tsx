import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import SidebarTOC from '@/components/SidebarTOC';
import LoanSettlementAssessmentFunnel from '@/components/LoanSettlementAssessmentFunnel';
import {
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Calendar,
  Award,
  PhoneCall,
  ExternalLink,
  Lock,
  ShieldAlert,
  CheckCircle2,
  Calculator,
  FileCheck,
  UserCheck,
  Wallet,
  BadgePercent
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Use Annual Bonus to Settle Personal Loan | SettleLoans',
  description: 'Receiving an annual bonus, variable pay, or retention payout? Structure post-TDS cash into one-shot ₹3L+ personal loan OTS without auto-debit.',
  keywords: [
    'use annual bonus to settle personal loan',
    'variable pay personal loan one time settlement',
    'protect performance bonus from bank loan auto debit',
    'post tds bonus calculation for loan settlement',
    'one shot lump sum personal loan settlement salaried',
    'prepay vs settle personal loan with annual bonus',
    'retention bonus debt settlement strategy india',
    'salaried lump sum ots personal loan'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/use-annual-bonus-to-settle-personal-loan',
  },
  openGraph: {
    title: 'Use Annual Bonus to Settle Personal Loan | SettleLoans',
    description: 'Receiving an annual bonus, variable pay, or retention payout? Structure post-TDS cash into one-shot ₹3L+ personal loan OTS without auto-debit.',
    url: 'https://www.settleloans.in/use-annual-bonus-to-settle-personal-loan',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg',
        width: 1200,
        height: 675,
        alt: 'Using Annual Performance Bonus or Variable Pay to Settle Personal Loans in India',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Use Annual Bonus to Settle Personal Loan | SettleLoans',
    description: 'Receiving an annual bonus, variable pay, or retention payout? Structure post-TDS cash into one-shot ₹3L+ personal loan OTS without auto-debit.',
    images: ['https://www.settleloans.in/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.settleloans.in/use-annual-bonus-to-settle-personal-loan#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.settleloans.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Salaried Loan Settlement",
          "item": "https://www.settleloans.in/loan-settlement-for-salaried-people"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Use Annual Bonus to Settle Personal Loan",
          "item": "https://www.settleloans.in/use-annual-bonus-to-settle-personal-loan"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/use-annual-bonus-to-settle-personal-loan#article",
      "headline": "How to Use Your Annual Bonus to Settle Personal Loans in India",
      "description": "Salaried execution playbook for structuring corporate performance bonuses, variable pay, retention payouts, and RSU cash-outs into one-shot personal loan One-Time Settlements without losing the payout to same-bank auto-debit sweeps or miscalculating Section 192 TDS.",
      "image": "https://www.settleloans.in/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg",
      "datePublished": "2026-11-11T12:15:00+05:30",
      "dateModified": "2026-11-11T12:15:00+05:30",
      "mainEntityOfPage": "https://www.settleloans.in/use-annual-bonus-to-settle-personal-loan",
      "author": {
        "@type": "Person",
        "name": "Ashish Jhangra",
        "url": "https://www.settleloans.in/authors/ashish-jhangra"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SettleLoans",
        "url": "https://www.settleloans.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.settleloans.in/logo/logo.svg"
        }
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.settleloans.in/use-annual-bonus-to-settle-personal-loan#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What happens if my annual performance bonus is credited into the same bank where my personal loan is overdue?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If your Corporate Salary Account and defaulted personal loan sit under the same bank Customer ID (such as HDFC, ICICI, Axis, Kotak, or SBI), the core banking system's Hold Balance or contractual right of set-off will automatically absorb your incoming bonus toward full contractual arrears, bounce fees, and penal charges with zero principal discount. Lawfully updating your payroll account with HR before the bonus payroll lock-in date prevents unilateral absorption."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I calculate Section 192 TDS before committing my bonus amount to a bank OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In India, corporate bonuses, variable pay, and retention payouts are fully taxable as salary income under Section 192 of the Income Tax Act at your marginal slab rate (commonly 20.8% or 31.2% including cess). A Rs. 3,00,000 gross bonus letter often results in only Rs. 2,06,400 to Rs. 2,37,600 hitting your bank account. Committing Rs. 2.8 Lakhs on an OTS letter before accounting for TDS risks breaching the settlement deadline and forfeiting your payment."
          }
        },
        {
          "@type": "Question",
          "name": "Should I use my annual bonus to part-prepay a regular personal loan or negotiate a One-Time Settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If your personal loan is Standard (0 DPD), your CIBIL is healthy, and part-prepaying or foreclosing brings your monthly EMIs comfortably under 45% of take-home pay, standard foreclosure or part-prepayment is best (watching out for 2% to 4% fixed-rate foreclosure fees). One-Time Settlement applies when combined unsecured debt exceeds ₹3 Lakhs, accounts are already in severe stress or 90+ DPD NPA status, and your bonus still covers only a fraction of total claimed balances."
          }
        },
        {
          "@type": "Question",
          "name": "Why do banks offer better waivers for a 7-day 'Single Bullet' bonus payment than a 6-month installment OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bank Zonal Credit Committees and NBFC recovery heads price settlements on Net Present Value (NPV) and certainty of closure. Around 30% of multi-month split settlements fail mid-way, whereas a verified 7-to-15-day single-bullet lump sum closes the NPA immediately on the current month's recovery sheet, often unlocking an extra 5% to 12% concession compared to 6-month payment plans (never guaranteed)."
          }
        },
        {
          "@type": "Question",
          "name": "Should I show my full bonus letter to a third-party collection caller?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Sharing an unredacted gross bonus letter with an external agency caller immediately anchors their demand to 100% of your gross payout without accounting for 30% TDS, overdue rent, medical bills, or two other defaulted lenders waiting in line. Negotiate strictly on net affordable lump-sum figures against an official bank OTS Sanction Letter."
          }
        },
        {
          "@type": "Question",
          "name": "Can one annual bonus be split to close two smaller defaulted personal loans at once?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, and that is often the smartest salaried waterfall move. For example, combining Rs. 1,85,000 of net post-tax bonus with Rs. 95,000 of accumulated monthly EMI savings creates a Rs. 2,80,000 pool capable of closing two separate Rs. 2.75 Lakh to Rs. 3.25 Lakh NPA loans simultaneously via verified single-shot OTS letters."
          }
        },
        {
          "@type": "Question",
          "name": "What if HR only pays 60% of my target variable pay instead of 100%?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Never sign an OTS commitment or transfer a non-refundable token tranche based on projected variable pay percentages. Wait until your actual payroll slip or net bonus credit lands in your unlinked savings account so your settlement offer matches exact cash in hand."
          }
        },
        {
          "@type": "Question",
          "name": "Do fixed-rate salaried personal loans charge foreclosure penalties if I close normally with a bonus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, on standard (non-NPA) fixed-rate personal loans, banks like HDFC, ICICI, Axis, and Kotak typically charge 2% to 4% + 18% GST on prepaid principal unless zero-foreclosure terms were negotiated at sanction (floating-rate non-business retail loans carry zero prepayment penalty under RBI rules). By contrast, in an NPA One-Time Settlement, foreclosure charges are completely inapplicable."
          }
        },
        {
          "@type": "Question",
          "name": "Can I combine RSU / ESOP vesting proceeds or a retention bonus with my performance bonus for OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, provided you account for perquisite TDS withheld at vesting, brokerage/FX wire settlement lag (typically T+3 to T+7 business days for overseas US parent brokerage wires), and route the inward remittance into an unlinked bank account rather than a defaulted salary bank."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I miss the due date printed on my OTS Sanction Letter because HR delayed bonus payout by 5 days?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OTS Sanction Letters carry strict validity cutoffs (for example, 25th or 28th of the month). Even a 2-day delay past the expiry date without a written bank extension voids the compromise sanction and allows the bank to appropriate any earlier part-payment toward regular interest! Always request a realistic validity date 7 to 10 days after your confirmed payroll credit date."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents call HR during bonus season to ask how much bonus I am getting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely not. RBI Fair Practices rules and RBI's updated recovery conduct directions effective 1 January 2027 strictly prohibit lenders and third-party agents from contacting your employer, HR department, or payroll desk, or calling outside 8:00 AM to 7:00 PM."
          }
        },
        {
          "@type": "Question",
          "name": "How do I pay the bank safely once my bonus arrives and my OTS Sanction Letter is verified?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Transfer the exact agreed lump sum via NEFT, RTGS, or official bank branch Demand Draft directly into your Personal Loan Account Number as instructed in the authenticated OTS Sanction Letter, save the UTR number, and collect your stamped No Dues Certificate within 21 to 30 days."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'salaried-bonus-cycles', title: '1. Corporate India Bonus & Variable Pay Windows' },
  { id: 'auto-debit-bonus-sweep', title: '2. Danger #1: Losing Your Bonus to Auto-Debit' },
  { id: 'section-192-tds-math', title: '3. Section 192 TDS Math: Gross vs Net Cash' },
  { id: 'prepay-vs-ots-fork', title: '4. Foreclosure vs Part-Pay vs ₹3L+ Settlement' },
  { id: 'single-bullet-leverage', title: '5. Why Single-Bullet Cash Wins Better OTS Terms' },
  { id: 'multi-loan-bonus-split', title: '6. Splitting One Bonus Across Multiple Loans' },
  { id: 'rsu-retention-nuances', title: '7. RSU Vesting, Retention & Clawback Rules' },
  { id: 'never-anchor-gross', title: '8. Why Never to Share Unredacted Bonus Letters' },
  { id: 'ots-deadline-alignment', title: '9. Aligning OTS Expiry Dates With Payroll Run' },
  { id: 'safe-remittance-ndc', title: '10. Safe Loan-Account Payment & NDC Collection' },
  { id: 'company-resolution-section', title: '11. SettleLoans Salaried Lump-Sum Advisory' },
  { id: 'faqs', title: '12. Frequently Asked Questions' },
];

export default function UseAnnualBonusToSettlePersonalLoanPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content table {
          width: 100%;
          border-collapse: separate !important;
          border-spacing: 0 !important;
          border: 1px solid #CBD5E1 !important;
          border-radius: 12px !important;
          overflow: hidden !important;
          margin: 1.75rem 0;
          font-size: 0.92em;
        }
        .blog-content th {
          background: #F8FAFC;
          padding: 0.85rem 1rem;
          text-align: left;
          font-weight: 700;
          border-bottom: 1px solid #CBD5E1;
          border-right: 1px solid #E2E8F0;
          color: #0F172A;
        }
        .blog-content th:last-child {
          border-right: none;
        }
        .blog-content td {
          padding: 0.85rem 1rem;
          border-bottom: 1px solid #E2E8F0;
          border-right: 1px solid #E2E8F0;
          color: #334155;
          vertical-align: top;
        }
        .blog-content td:last-child {
          border-right: none;
        }
        .blog-content tr:last-child td {
          border-bottom: none;
        }
      `}} />

      {/* Hero Section */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <BadgePercent className="w-3.5 h-3.5" />
            <span>Salaried Lump-Sum Strategy • Bonus, Variable Pay &amp; OTS</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            How to Use Your Annual Bonus to Settle Personal Loans in India
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5">
            Expecting an annual performance bonus, quarterly variable payout, retention bonus, or RSU vesting while carrying heavy personal loan debt? Learn how to shield that payout from same-bank auto-debit sweeps, calculate exact post-TDS cash, and deploy single-bullet OTS offers across ₹3L+ portfolios.
          </p>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Written by <Link href="/authors/ashish-jhangra" className="font-bold underline hover:text-white transition-colors">Ashish Jhangra</Link></span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Checked: 11 November 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Salaried Payroll &amp; TDS Verified</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#settlement-assessment"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Structure My ₹3L+ Bonus Settlement</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Protect Incoming Bonus Credit
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb Bar */}
      <div className="w-full bg-slate-50 border-b border-slate-200 overflow-x-auto whitespace-nowrap">
        <div className="max-w-[1720px] mx-auto px-4 md:px-8 py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs text-slate-600">
              <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
              <li><span className="text-slate-300">/</span></li>
              <li><Link href="/loan-settlement-for-salaried-people" className="hover:text-[#1F5EFF] transition-colors">Salaried Loan Settlement</Link></li>
              <li><span className="text-slate-300">/</span></li>
              <li className="font-bold text-slate-900" aria-current="page">Use Annual Bonus to Settle Personal Loan</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Stats Strip */}
      <StatsStrip />

      {/* 3-Column Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">

          {/* Left Sidebar (zero heading tags) */}
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Salaried Case Floor: ₹3,00,000</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                SettleLoans structures bonus-funded One-Time Settlements for salaried borrowers holding ₹3 Lakhs or more in combined unsecured debt. If your loan is Standard and under ₹3L, see Section 4 for standard bank part-prepayment rules.
              </p>
            </div>
          </aside>

          {/* Main Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">

            {/* Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>4 Golden Rules Before Your Bonus Hits Payroll</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Route Bonus Away From Linked Defaulted Banks:</strong> If your overdue Personal Loan sits at the same bank as your Corporate Salary Account, move your HR payroll bank account 15 to 20 days before bonus disbursement or internal holds will swallow 100% of the payout with zero waiver.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Size Offers Strictly on Post-TDS Cash:</strong> Under Section 192 of the Income Tax Act, HR deducts 20.8% to 31.2% slab tax upfront on annual bonuses. Never sign an OTS letter anchored to your gross bonus figure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Deploy Single-Bullet Leverage:</strong> Credit committees value a guaranteed 7-day single-shot payment far higher than fragile 6-month installment settlements, frequently unlocking cleaner principal haircuts on 90+ DPD NPA loans.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Keep Gross Bonus Letters Confidential:</strong> Never email an unredacted bonus letter to a third-party recovery agent; negotiate strictly against formal bank OTS Sanction Letters.</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="salaried-bonus-cycles" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Why Annual Bonus Windows Are a Salaried Borrower&apos;s Best Weapon
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For 11 months of the year, a debt-trapped salaried household has zero lump-sum liquidity. After paying rent, school fees, groceries, and parent medical expenses out of a fixed monthly paycheck, saving Rs. 2.5 Lakhs to close a defaulted Rs. 5.5 Lakh personal loan takes 7 to 9 months of disciplined austerity.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once a year, however, corporate compensation structures create a concentrated lump-sum event:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>January to March (US/EU MNC &amp; GCC Cycle):</strong> Global tech, consulting, investment-bank GCCs, and calendar-year multinationals disburse annual performance bonuses and Q4 variable payouts alongside February or March payroll.</li>
                <li><strong>April to June (Indian FY Corporate Cycle):</strong> Indian IT majors, domestic banks, pharma, manufacturing, and conglomerates release FY performance variable pay, statutory/performance bonuses, and retention tranches after March 31 closing.</li>
                <li><strong>Half-Yearly / RSU Cliff Windows:</strong> Mid-year retention milestones or RSU/ESOP vesting cash-outs that release 1.5x to 4x monthly net salary in a single shot.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Used strategically, a single net bonus payout can extinguish 1 or 2 entire defaulted personal loans permanently. Handled carelessly, that exact same bonus vanishes within 3 seconds of hitting your bank account without closing a single loan!
              </p>
            </section>

            {/* Salaried Combined-Debt Assessment Framing + Funnel */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                <Wallet className="w-4 h-4" />
                <span>Salaried Lump-Sum &amp; Multi-Loan Check (₹3,00,000 Minimum)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Want to map an upcoming variable payout or bonus plus monthly EMI savings across your debt stack? Enter your <strong>total combined unsecured debt</strong> across personal loans, top-ups, and credit cards below (structured OTS advisory starts from <strong>₹3 Lakhs and above</strong>).
              </p>
            </div>

            <LoanSettlementAssessmentFunnel />

            {/* Section 2 */}
            <section id="auto-debit-bonus-sweep" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Danger #1: Losing Your Entire Bonus to Same-Bank Auto-Debit
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Every March and April, hundreds of salaried employees experience the exact same heartbreak. Suppose you hold an overdue Rs. 7.2 Lakh personal loan at your payroll bank, with Rs. 1.65 Lakhs of accumulated overdue EMIs, bounce fees, and 24% p.a. penal charges sitting as a shadow Hold Balance on your Corporate Salary Account. On March 30, HR credits your Rs. 85,000 monthly salary plus a Rs. 1,40,000 net performance bonus (Rs. 2,25,000 total) into that account.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Within milliseconds, the bank&apos;s internal core banking sweep absorbs the entire Rs. 1,65,000 hold toward <strong>100% un-waived penal charges, bounce fees, GST, and overdue interest</strong>, leaving your remaining loan principal above Rs. 6.1 Lakhs, zero One-Time Settlement waiver, and next month&apos;s EMI still falling due on the 5th!
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>15-Day Pre-Bonus Payroll Cut-Off Rule</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  Corporate payroll systems lock bank account master data around the 15th to 20th of the payout month. If your personal loan is already stressed at your payroll bank, submit your lawful HR bank-account update ticket well before payroll lock-in so both your regular salary and annual bonus land safely in an <strong>unlinked savings account</strong> where you hold zero debt. Review bank-specific sweep rules for <Link href="/hdfc-salary-account-auto-debit-personal-loan-default" className="underline font-bold">HDFC Bank</Link>, <Link href="/icici-salary-account-auto-debit-personal-loan-default" className="underline font-bold">ICICI Bank</Link>, <Link href="/axis-salary-account-auto-debit-personal-loan-default" className="underline font-bold">Axis Bank</Link>, <Link href="/kotak-salary-account-auto-debit-personal-loan-default" className="underline font-bold">Kotak Bank</Link>, and <Link href="/sbi-salary-account-auto-debit-personal-loan-default" className="underline font-bold">SBI</Link>.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-192-tds-math" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Section 192 TDS Math: Never Anchor an OTS to Gross Bonus
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                There is no separate &quot;lower tax rate&quot; on corporate bonuses in India. Under <strong>Section 192 of the Income Tax Act, 1961</strong>, performance bonuses, variable pay, retention bonuses, and ex-gratia incentives are added straight on top of your annual taxable salary, meaning payroll software deducts TDS on the entire bonus at your <strong>highest marginal tax slab plus 4% Health &amp; Education Cess</strong> in the exact month of payout:
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Gross Bonus Announced on HR Letter</th>
                      <th>20% Slab + Cess (20.8% TDS)</th>
                      <th>30% Slab + Cess (31.2% TDS)</th>
                      <th>Safe Lump-Sum OTS Budget Ceiling (After 10% Emergency Buffer)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Rs. 1,50,000 Gross</strong></td>
                      <td>Rs. 1,18,800 Net</td>
                      <td>Rs. 1,03,200 Net</td>
                      <td><strong>Rs. 92,000 to Rs. 1,05,000</strong></td>
                    </tr>
                    <tr>
                      <td><strong>Rs. 3,00,000 Gross</strong></td>
                      <td>Rs. 2,37,600 Net</td>
                      <td>Rs. 2,06,400 Net</td>
                      <td><strong>Rs. 1,85,000 to Rs. 2,15,000</strong></td>
                    </tr>
                    <tr>
                      <td><strong>Rs. 5,00,000 Gross</strong></td>
                      <td>Rs. 3,96,000 Net</td>
                      <td>Rs. 3,44,000 Net</td>
                      <td><strong>Rs. 3,10,000 to Rs. 3,55,000</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If you commit Rs. 2,85,000 on an OTS Sanction Letter expecting a &quot;Rs. 3 Lakh bonus&quot;, and only Rs. 2,06,400 hits your account after 31.2% TDS, coming up Rs. 78,600 short on the OTS deadline voids your entire settlement letter! Always calculate post-TDS net cash first.
              </p>
            </section>

            {/* Section 4 */}
            <section id="prepay-vs-ots-fork" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Standard Foreclosure vs Part-Prepayment vs ₹3L+ NPA OTS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Depending on whether your loans are still Standard or already in deep distress, deploy your net bonus into the right legal bucket:
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Borrower Loan Profile</th>
                      <th>Best Bonus Deployment</th>
                      <th>Fee &amp; CIBIL Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Standard Account (0 DPD)</strong>; single high-interest loan &lt; ₹3L; manageable FOIR</td>
                      <td><strong>Full Foreclosure or Part-Prepayment</strong> directly via bank branch/portal</td>
                      <td>Preserves 750+ CIBIL cleanly; check for 2% to 4% + GST fixed-rate foreclosure fee after lock-in period.</td>
                    </tr>
                    <tr>
                      <td><strong>Early Stress (0 to 30 DPD)</strong>; temporary squeeze; bonus reduces balance enough to cut EMI</td>
                      <td><strong>Part-Prepayment + Tenure / EMI Recast</strong></td>
                      <td>Lowers future monthly EMI without triggering an NPA &quot;Settled&quot; remark.</td>
                    </tr>
                    <tr>
                      <td><strong>Severe Debt Trap (₹3L to ₹35L+ Stack, 90+ DPD NPA)</strong>; EMIs exceed 65%+ of pay</td>
                      <td><strong>Single-Bullet One-Time Settlement (OTS)</strong> closing 1 or 2 entire defaulted loans permanently</td>
                      <td>Extinguishes 100% of residual principal, interest, bounce &amp; penal charges; reports &quot;Settled&quot; with Rs. 0 Overdue.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5 */}
            <section id="single-bullet-leverage" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Why &quot;Single-Bullet&quot; Bonus Cash Unlocks Stronger Waivers
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Inside bank Zonal Credit Committees and NBFC settlement desks, compromise proposals are divided into two approval tiers: <strong>Single-Shot Settlements (payable within 7 to 15 days)</strong> and <strong>Split / Term Settlements (payable across 3 to 6 monthly tranches)</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because split settlements carry broken-promise risk across future accounting quarters, banks systematically reserve their deepest principal-and-interest waiver authority for <strong>immediate single-bullet closures</strong> that book cash within the current calendar month. While settlement rates are never guaranteed and depend on NPA vintage (90 to 180+ DPD) and lender policy, deploying verified post-TDS bonus cash as a single-shot offer on an aged NPA personal loan realistically achieves closures in the <strong>38% to 60% range of total claimed dues</strong>, which is substantially cleaner and safer than 6-month split plans.
              </p>
            </section>

            {/* Section 6 */}
            <section id="multi-loan-bonus-split" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Allocating One Bonus Across Multiple Defaulted Loans
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                What if you receive Rs. 2,40,000 net post-TDS bonus while holding three defaulted personal loans totaling Rs. 13 Lakhs? Follow our <Link href="/multiple-personal-loans-hdfc-icici-bajaj-which-to-settle-first" className="text-[#1F5EFF] font-semibold underline">Salaried Multi-Loan Priority Matrix</Link>:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Never divide Rs. 2.4 Lakhs into three Rs. 80,000 part-payments!</strong> That closes zero loans and leaves all three creditors pursuing you next month.</li>
                <li><strong>Strategy A (Double Small-Loan Knockout):</strong> If two of your three loans have claimed balances around Rs. 2.4 Lakhs and Rs. 2.8 Lakhs, pair your Rs. 2.4 Lakh bonus with Rs. 30,000 of monthly savings to execute <strong>two complete single-bullet OTS closures</strong> in the same month, permanently eliminating 2 out of 3 creditors!</li>
                <li><strong>Strategy B (Anchor NBFC / High-Penal Knockout):</strong> Use Rs. 2.1 Lakhs to completely extinguish your largest high-penal lender (such as a Rs. 4.8 Lakh Bajaj Finance or HDFC Bank NPA loan) against an official OTS Sanction Letter, and carry the remaining Rs. 30,000 straight into your Tranche 2 waterfall reserve.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="rsu-retention-nuances" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Special Caution: Retention Clawbacks &amp; RSU Wire Delays
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Two modern tech/GCC payout instruments carry unique traps if used blindly for loan settlement:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Joining / Retention Bonus Clawback Clauses:</strong> If HR pays you a Rs. 3 Lakh retention or joining bonus subject to a 12-to-24-month service lock-in, remember that resigning within the lock-in obligates you to repay the <em>gross</em> bonus amount during Full &amp; Final clearance. Only deploy a retention bonus into irreversible OTS payments if you are confident in staying past the clawback date.</li>
                <li><strong>Foreign Parent RSU / ESPP Sale Settlement Lag:</strong> Selling vested NASDAQ/NYSE shares via E*TRADE, Fidelity, Charles Schwab, or Morgan Stanley at Work typically takes T+1 trade settlement plus 3 to 6 Indian business days for SWIFT FIRC inward wire clearance into your resident bank account. Never accept a 48-hour OTS expiry deadline before those rupees have physically cleared in your Indian savings account!</li>
              </ol>
            </section>

            {/* Section 8 */}
            <section id="never-anchor-gross" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Why You Should Never Volunteer Your Gross Bonus Letter Early
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                During February, March, and April, experienced recovery tele-callers probe every salaried borrower with the exact same question: <em>&quot;Sir, March variable pay and bonus is coming, so send us your bonus letter and pay the full Rs. 4.2 Lakhs.&quot;</em>
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Keep your compensation negotiations disciplined. You are only required to submit standard historical hardship documents (such as payslips, medical bills, or CIBIL multi-debt burden; see our <Link href="/personal-loan-settlement-and-form-16-salary-slip-proof" className="text-[#1F5EFF] font-semibold underline">Form 16 &amp; Salary Slip OTS Proof Guide</Link>). When presenting a lump-sum offer, state clearly that you are arranging a one-time family/savings pool of Rs. X conditional upon an authenticated full-and-final bank OTS Sanction Letter.
              </p>
            </section>

            {/* Section 9 */}
            <section id="ots-deadline-alignment" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Aligning OTS Sanction Expiry Dates With Actual Payroll Credit
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Bank OTS Sanction Letters always print a hard payment validity deadline (often the 25th, 28th, or 30th of the month) along with an automatic forfeiture clause stating: <em>&quot;If the settlement amount is not credited on or before the due date, this OTS stands null and void.&quot;</em>
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If your company credits salary + annual bonus on the <strong>last working day (31st) or the 1st/5th of the next month</strong>, never accept an OTS letter expiring on the 25th! Either wait until the bonus physically lands in your unlinked account before generating the final OTS letter, or insist that the sanction letter&apos;s payment validity window extends at least 7 business days past your confirmed payroll credit date.
              </p>
            </section>

            {/* Section 10 */}
            <section id="safe-remittance-ndc" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                10. Safe Payment Execution, RBI Privacy &amp; NDC Collection
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once your bonus clears into your unlinked account and your OTS Sanction Letter is verified directly through the bank&apos;s official domain email or branch desk:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li>Remit the single-bullet OTS amount strictly via NEFT/RTGS or Demand Draft into your <strong>Personal Loan Account Number</strong> (never via personal UPI links or unverified third-party wallets).</li>
                <li>Collect your stamped <Link href="/no-dues-certificate-after-loan-settlement" className="text-[#1F5EFF] font-semibold underline">No Dues Certificate (NDC)</Link> within 21 to 30 days and verify CIBIL reflects <strong>Rs. 0 Overdue</strong>.</li>
                <li>Remember that throughout bonus and appraisal months, RBI Fair Practices rules and RBI&apos;s updated recovery conduct directions taking effect on <strong>1 January 2027</strong> strictly prohibit agents from calling your HR/payroll office or contacting you outside <strong>8:00 AM to 7:00 PM</strong>.</li>
              </ul>
            </section>

            {/* Section 11: Company Section */}
            <section id="company-resolution-section" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                11. SettleLoans Bonus-Tranche Structuring for Salaried Borrowers
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Holding ₹3 Lakhs or more in combined unsecured personal loans and expecting an upcoming variable payout or bonus? SettleLoans protects your incoming payout from premature bank sweeps, negotiates maximum single-bullet OTS waivers across your creditors, verifies every sanction letter, and secures permanent legal closure.
              </p>
              <CompanySection />
            </section>

            {/* Section 12: FAQs */}
            <section id="faqs" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                12. Frequently Asked Questions: Bonus &amp; Variable-Pay OTS
              </h2>

              <div className="space-y-3">
                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all" open>
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      1. What happens if my annual performance bonus is credited into the same bank where my personal loan is overdue?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>If your Corporate Salary Account and defaulted personal loan sit under the same bank Customer ID (such as HDFC, ICICI, Axis, Kotak, or SBI), the core banking system&apos;s Hold Balance or contractual right of set-off will automatically absorb your incoming bonus toward full contractual arrears, bounce fees, and penal charges with zero principal discount. Lawfully updating your payroll account with HR before the bonus payroll lock-in date prevents unilateral absorption.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      2. Why should I calculate Section 192 TDS before committing my bonus amount to a bank OTS?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>In India, corporate bonuses, variable pay, and retention payouts are fully taxable as salary income under Section 192 of the Income Tax Act at your marginal slab rate (commonly 20.8% or 31.2% including cess). A Rs. 3,00,000 gross bonus letter often results in only Rs. 2,06,400 to Rs. 2,37,600 hitting your bank account. Committing Rs. 2.8 Lakhs on an OTS letter before accounting for TDS risks breaching the settlement deadline and forfeiting your payment.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      3. Should I use my annual bonus to part-prepay a regular personal loan or negotiate a One-Time Settlement?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>If your personal loan is Standard (0 DPD), your CIBIL is healthy, and part-prepaying or foreclosing brings your monthly EMIs comfortably under 45% of take-home pay, standard foreclosure or part-prepayment is best (watching out for 2% to 4% fixed-rate foreclosure fees). One-Time Settlement applies when combined unsecured debt exceeds ₹3 Lakhs, accounts are already in severe stress or 90+ DPD NPA status, and your bonus still covers only a fraction of total claimed balances.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      4. Why do banks offer better waivers for a 7-day &apos;Single Bullet&apos; bonus payment than a 6-month installment OTS?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Bank Zonal Credit Committees and NBFC recovery heads price settlements on Net Present Value (NPV) and certainty of closure. Around 30% of multi-month split settlements fail mid-way, whereas a verified 7-to-15-day single-bullet lump sum closes the NPA immediately on the current month&apos;s recovery sheet, often unlocking an extra 5% to 12% concession compared to 6-month payment plans (never guaranteed).</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      5. Should I show my full bonus letter to a third-party collection caller?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>No. Sharing an unredacted gross bonus letter with an external agency caller immediately anchors their demand to 100% of your gross payout without accounting for 30% TDS, overdue rent, medical bills, or two other defaulted lenders waiting in line. Negotiate strictly on net affordable lump-sum figures against an official bank OTS Sanction Letter.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      6. Can one annual bonus be split to close two smaller defaulted personal loans at once?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes, and that is often the smartest salaried waterfall move. For example, combining Rs. 1,85,000 of net post-tax bonus with Rs. 95,000 of accumulated monthly EMI savings creates a Rs. 2,80,000 pool capable of closing two separate Rs. 2.75 Lakh to Rs. 3.25 Lakh NPA loans simultaneously via verified single-shot OTS letters.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      7. What if HR only pays 60% of my target variable pay instead of 100%?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Never sign an OTS commitment or transfer a non-refundable token tranche based on projected variable pay percentages. Wait until your actual payroll slip or net bonus credit lands in your unlinked savings account so your settlement offer matches exact cash in hand.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      8. Do fixed-rate salaried personal loans charge foreclosure penalties if I close normally with a bonus?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes, on standard (non-NPA) fixed-rate personal loans, banks like HDFC, ICICI, Axis, and Kotak typically charge 2% to 4% + 18% GST on prepaid principal unless zero-foreclosure terms were negotiated at sanction (floating-rate non-business retail loans carry zero prepayment penalty under RBI rules). By contrast, in an NPA One-Time Settlement, foreclosure charges are completely inapplicable.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      9. Can I combine RSU / ESOP vesting proceeds or a retention bonus with my performance bonus for OTS?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes, provided you account for perquisite TDS withheld at vesting, brokerage/FX wire settlement lag (typically T+3 to T+7 business days for overseas US parent brokerage wires), and route the inward remittance into an unlinked bank account rather than a defaulted salary bank.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      10. What happens if I miss the due date printed on my OTS Sanction Letter because HR delayed bonus payout by 5 days?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>OTS Sanction Letters carry strict validity cutoffs (for example, 25th or 28th of the month). Even a 2-day delay past the expiry date without a written bank extension voids the compromise sanction and allows the bank to appropriate any earlier part-payment toward regular interest! Always request a realistic validity date 7 to 10 days after your confirmed payroll credit date.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      11. Can recovery agents call HR during bonus season to ask how much bonus I am getting?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Absolutely not. RBI Fair Practices rules and RBI&apos;s updated recovery conduct directions effective 1 January 2027 strictly prohibit lenders and third-party agents from contacting your employer, HR department, or payroll desk, or calling outside 8:00 AM to 7:00 PM.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      12. How do I pay the bank safely once my bonus arrives and my OTS Sanction Letter is verified?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Transfer the exact agreed lump sum via NEFT, RTGS, or official bank branch Demand Draft directly into your Personal Loan Account Number as instructed in the authenticated OTS Sanction Letter, save the UTR number, and collect your stamped No Dues Certificate within 21 to 30 days.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* Statutory References */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Tax &amp; Banking References (Checked 11 November 2026)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Portal (cms.rbi.org.in)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                </a>
                <span className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700">
                  Income Tax Act, 1961: Section 192 Salary &amp; Bonus TDS Deduction
                </span>
                <span className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700">
                  RBI Framework for Compromise Settlements &amp; Technical Write-Offs
                </span>
                <span className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700">
                  Code of Civil Procedure, 1908: Section 60(1)(i) Subsistence Shield
                </span>
              </div>
            </section>

            {/* Related Salaried Guides */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Salaried Settlement &amp; Payroll Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/personal-loan-settlement-and-form-16-salary-slip-proof" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Form 16 &amp; Salary Slip Proof in OTS
                </Link>
                <Link href="/appraisal-or-increment-restructure-or-settle-personal-loan" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Appraisal Increment: Restructure vs OTS
                </Link>
                <Link href="/multiple-personal-loans-hdfc-icici-bajaj-which-to-settle-first" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Multiple Loans: Which to Settle First
                </Link>
                <Link href="/bank-freeze-salary-account-loan-default" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Salary Account Freeze &amp; Set-Off Guide
                </Link>
                <Link href="/no-dues-certificate-after-loan-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  No Dues Certificate Verification
                </Link>
                <Link href="/loan-settlement-for-salaried-people" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Loan Settlement for Salaried People
                </Link>
              </div>
            </section>

          </main>

          {/* Right Sidebar (zero heading tags) */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                    AJ
                  </div>
                </Link>
                <div>
                  <Link href="/authors/ashish-jhangra" className="font-bold text-slate-900 text-sm hover:text-[#1F5EFF] transition-colors block">
                    Ashish Jhangra
                  </Link>
                  <p className="text-xs text-slate-500">Salaried Lump-Sum OTS Strategist</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Helps salaried professionals convert annual bonuses, variable payouts, and monthly savings into verified single-bullet debt closures.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Author</span>
                </span>
                <Link href="/authors/ashish-jhangra" className="text-[#1F5EFF] hover:underline font-bold flex items-center gap-0.5">
                  <span>Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Bonus OTS Structuring</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Bonus Coming With ₹3L+ Loan Debt?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Protect your payout from auto-debit sweeps and lock in authenticated single-bullet bank OTS letters before payroll runs.
              </p>
              <a
                href="#settlement-assessment"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Check ₹3L+ Bonus OTS Plan
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Lump-Sum Safeguards
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Pre-Payout Salary Sweep Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Post-TDS Net Tranche Allocation</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>OTS Validity vs Payroll Date Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Zero HR / Payroll Office Contact</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
