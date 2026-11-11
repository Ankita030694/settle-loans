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
  Layers
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Multiple Loans: Which to Settle First | SettleLoans',
  description: 'Holding personal loans across HDFC, ICICI, and Bajaj Finance? Use our salaried priority matrix, fee comparison, and lump-sum waterfall OTS plan.',
  keywords: [
    'multiple personal loans hdfc icici bajaj which to settle first',
    'which personal loan to settle first bank or nbfc',
    'bajaj finance vs hdfc vs icici loan settlement order',
    'settle multiple personal loans salaried india',
    'waterfall plan for multiple loan settlement',
    'bajaj flexi loan vs hdfc personal loan settlement priority',
    'multiple emi default salaried strategy',
    '3 lakh plus multiple loan settlement india'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/multiple-personal-loans-hdfc-icici-bajaj-which-to-settle-first',
  },
  openGraph: {
    title: 'Multiple Loans: Which to Settle First | SettleLoans',
    description: 'Holding personal loans across HDFC, ICICI, and Bajaj Finance? Use our salaried priority matrix, fee comparison, and lump-sum waterfall OTS plan.',
    url: 'https://www.settleloans.in/multiple-personal-loans-hdfc-icici-bajaj-which-to-settle-first',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/case-study-25-lakh-multiple-bank-settlement-settleloans.jpg',
        width: 1200,
        height: 675,
        alt: 'Multiple Personal Loans HDFC ICICI Bajaj Settlement Priority Matrix for Salaried Borrowers',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multiple Loans: Which to Settle First | SettleLoans',
    description: 'Holding personal loans across HDFC, ICICI, and Bajaj Finance? Use our salaried priority matrix, fee comparison, and lump-sum waterfall OTS plan.',
    images: ['https://www.settleloans.in/images/infographics/case-study-25-lakh-multiple-bank-settlement-settleloans.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.settleloans.in/multiple-personal-loans-hdfc-icici-bajaj-which-to-settle-first#breadcrumb",
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
          "name": "Multiple Personal Loan Settlement",
          "item": "https://www.settleloans.in/multiple-personal-loan-settlement"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "HDFC, ICICI & Bajaj: Which to Settle First",
          "item": "https://www.settleloans.in/multiple-personal-loans-hdfc-icici-bajaj-which-to-settle-first"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/multiple-personal-loans-hdfc-icici-bajaj-which-to-settle-first#article",
      "headline": "Multiple Personal Loans (HDFC, ICICI, Bajaj): Settlement Order",
      "description": "Salaried prioritization playbook for borrowers holding simultaneous unsecured personal loans across HDFC Bank, ICICI Bank, and Bajaj Finance. Compares verified bounce/penal tariffs, salary-account set-off risks, NBFC vs bank escalation velocity, and 9-month lump-sum waterfall settlement sequencing.",
      "image": "https://www.settleloans.in/images/infographics/case-study-25-lakh-multiple-bank-settlement-settleloans.jpg",
      "datePublished": "2026-11-11T12:00:00+05:30",
      "dateModified": "2026-11-11T12:00:00+05:30",
      "mainEntityOfPage": "https://www.settleloans.in/multiple-personal-loans-hdfc-icici-bajaj-which-to-settle-first",
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
      "@id": "https://www.settleloans.in/multiple-personal-loans-hdfc-icici-bajaj-which-to-settle-first#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "If I hold personal loans at HDFC Bank, ICICI Bank, and Bajaj Finance, which lender should I settle first?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "First, neutralize any same-bank salary account sweep by lawfully moving HR payroll to an unlinked bank. Once your paycheck is safe, most salaried borrowers settle Bajaj Finance (or high-velocity NBFCs) first because Bajaj levies up to 36% p.a. penal charges, Rs. 700 to Rs. 1,200 bounce fees, and faster early-stage field/arbitration notices, followed by HDFC Bank (24% p.a. penal) and ICICI Bank (5% p.a. penal), unless HDFC or ICICI also holds your car/home loan collateral."
          }
        },
        {
          "@type": "Question",
          "name": "Should I settle my salary-account bank loan first so it stops deducting my paycheck?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You do not need to rush an unfavourable early settlement solely to save your paycheck. Instead, update your Corporate Salary Account with HR to a clean bank where you owe zero debt before default deepens. Once salary set-off is neutralized, your old payroll bank becomes an ordinary unsecured lender that you can sequence rationally based on lump-sum readiness and discount quality."
          }
        },
        {
          "@type": "Question",
          "name": "How do official bounce and penal charges compare across HDFC Bank, ICICI Bank, and Bajaj Finance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Per official fee schedules checked on 11 November 2026: Bajaj Finance charges Rs. 700 to Rs. 1,200 per bounce (incl. taxes) and penal charges up to 36% p.a. (~0.10%/day) on overdue instalments; HDFC Bank charges Rs. 450 to Rs. 550 + 18% GST per bounce and up to 24% p.a. (2% p.m.) + GST penal charges; ICICI Bank charges Rs. 500 + 18% GST per bounce (plus Rs. 800 + GST NMMP if mandate disrupted) and 5% p.a. + GST penal charges."
          }
        },
        {
          "@type": "Question",
          "name": "Why is it dangerous to pay partial token amounts of Rs. 5,000 to all three lenders every month?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Spreading Rs. 15,000 across three lenders as Rs. 5,000 token payments satisfies none of your full EMIs, does NOT stop NPA progression or CIBIL damage, gets eaten up by bounce and penal charges, and prevents you from accumulating the Rs. 1.5 Lakh to Rs. 3 Lakh lump sum needed to extinguish one entire loan permanently via One-Time Settlement."
          }
        },
        {
          "@type": "Question",
          "name": "When does HDFC Bank or ICICI Bank jump ahead of Bajaj Finance to Priority #1?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A private bank moves immediately to Priority #1 if: (1) you hold a Home Loan, Car Loan, or large Fixed Deposit under the same Customer ID at HDFC or ICICI (due to RBI UCIC borrower-wise NPA tagging and NOC lien holds), or (2) your public/corporate employer strictly refuses to change your salary account away from that bank."
          }
        },
        {
          "@type": "Question",
          "name": "How does a Bajaj Finance Flexi Hybrid Loan behave differently from an HDFC or ICICI term loan during settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In a Bajaj Finance Flexi Hybrid or Flexi Term loan, borrowers often paid interest-only EMIs for the initial 12 to 24 months without reducing Rs. 1 of drawn principal. When it defaults, the full utilized drawdown limit remains intact as principal, and Bajaj moves rapidly on tele-calling and arbitration notices, making early lump-sum readiness essential."
          }
        },
        {
          "@type": "Question",
          "name": "Do all three lenders need to be settled in the exact same month?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Salaried borrowers rarely possess Rs. 7 Lakhs in idle cash on Day 1 to close three loans simultaneously. A Waterfall Lump-Sum Plan accumulates monthly EMI savings in an unlinked bank account to close Loan #1 in Month 3 or 4, Loan #2 in Month 6 or 7, and Loan #3 in Month 9 or 10 (often boosted by annual bonus or tax-refund tranches)."
          }
        },
        {
          "@type": "Question",
          "name": "Will settling Bajaj Finance first make HDFC Bank or ICICI Bank refuse to settle later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. In fact, when HDFC or ICICI pulls a bureau refresh at 150 to 180+ DPD and sees that you are resolving distressed debt systematically under severe FOIR hardship rather than taking fresh loans, their NPA recovery committees routinely process their own compromise offers based on your remaining cash capacity."
          }
        },
        {
          "@type": "Question",
          "name": "How do I stop triple NACH bounce charges when defaulting across HDFC, ICICI, and Bajaj simultaneously?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If three external NACH mandates hit an underfunded savings account 2 to 3 times each per month, you can lose Rs. 4,000 to Rs. 7,000 monthly solely in bank inward return charges plus lender bounce fees. Lawfully pausing or cancelling NACH mandates via your destination bank portal while sending written hardship notices stops futile fee leakage."
          }
        },
        {
          "@type": "Question",
          "name": "What realistic settlement ranges apply across Bajaj Finance, HDFC Bank, and ICICI Bank?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Settlement outcomes are never guaranteed and depend on NPA aging, principal vs interest mix, and one-shot payment speed. Across ₹3L+ salaried multi-loan portfolios past 90 to 180+ DPD, realistic One-Time Settlement closures commonly range between 40% and 65% of total claimed dues (including 100% waiver of penal and bounce fees), subject to each lender's credit grid."
          }
        },
        {
          "@type": "Question",
          "name": "Can agents from three different lenders visit my office or call HR at the same time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under RBI Fair Practices norms and the updated RBI recovery conduct directions taking effect on 1 January 2027, both banks (HDFC, ICICI) and NBFCs (Bajaj Finance) are strictly prohibited from calling outside 8:00 AM to 7:00 PM, contacting HR or colleagues, or harassing you at your workplace."
          }
        },
        {
          "@type": "Question",
          "name": "What if I also hold an HDFC Credit Card alongside my HDFC Personal Loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because HDFC Bank maps both your Personal Loan and Credit Card to one Customer ID (UCIC), plan to negotiate and close both HDFC unsecured tradelines together in the same settlement tranche so your entire HDFC Customer ID exits NPA cleanly with twin No Dues Certificates."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'classic-salaried-stack', title: '1. Why Salaried Staff Hold HDFC + ICICI + Bajaj' },
  { id: 'verified-lender-comparison', title: '2. Official Fee & Recovery Velocity Comparison' },
  { id: 'step-zero-payroll-shield', title: '3. Step 0: Neutralize Same-Bank Salary Sweeps' },
  { id: 'four-tier-priority-matrix', title: '4. The 4-Tier Salaried Settlement Priority Order' },
  { id: 'when-bank-jumps-first', title: '5. Exceptions: When HDFC or ICICI Goes First' },
  { id: 'bajaj-flexi-nuance', title: '6. Bajaj Finance Flexi vs Bank Term Loan Math' },
  { id: 'token-payment-trap', title: '7. Why Token Payments to All 3 Lenders Fail' },
  { id: 'worked-waterfall-plan', title: '8. Worked 9-Month Waterfall Plan (₹16.5L Debt)' },
  { id: 'triple-nach-defense', title: '9. Stopping Triple NACH & Legal Escalations' },
  { id: 'closure-documentation', title: '10. Sequencing OTS Letters & NDCs Cleanly' },
  { id: 'company-resolution-section', title: '11. SettleLoans Multi-Creditor Desk' },
  { id: 'faqs', title: '12. Frequently Asked Questions' },
];

export default function MultiplePersonalLoansWhichToSettleFirstPage() {
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
            <Layers className="w-3.5 h-3.5" />
            <span>Salaried Multi-PL Sequencing • HDFC • ICICI • Bajaj Finance</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Multiple Personal Loans (HDFC, ICICI, Bajaj): Settlement Order
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5">
            Juggling overlapping personal loans across HDFC Bank, ICICI Bank, and Bajaj Finance on a stretched monthly salary? Use verified bounce/penal fee math, salary-account set-off defence, and our 9-month waterfall lump-sum matrix to settle each lender in the smartest legal order.
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
              <span>Official Lender Tariffs Verified</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#settlement-assessment"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Build My ₹3L+ Multi-Loan Waterfall Plan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Sequence My Creditors Now
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
              <li><Link href="/multiple-personal-loan-settlement" className="hover:text-[#1F5EFF] transition-colors">Multiple Personal Loan Settlement</Link></li>
              <li><span className="text-slate-300">/</span></li>
              <li className="font-bold text-slate-900" aria-current="page">HDFC, ICICI &amp; Bajaj: Which to Settle First</li>
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
                SettleLoans represents salaried borrowers holding ₹3 Lakhs to ₹50 Lakhs+ in combined unsecured debt across HDFC, ICICI, Bajaj Finance, Axis, Kotak, SBI, credit cards, and app lenders.
              </p>
            </div>
          </aside>

          {/* Main Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">

            {/* Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Executive Priority Rules: HDFC vs ICICI vs Bajaj Finance</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Step 0 (Before Any Settlement):</strong> If your monthly paycheck hits HDFC or ICICI where you also hold a personal loan, shift your HR payroll credit to an unlinked bank account first so 100% salary sweeps do not hijack your cash flow.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Tranche 1 Priority (Bajaj Finance):</strong> Once salary set-off is neutralized (and assuming zero home/car collateral overlap), prioritize <strong>Bajaj Finance</strong> first due to steeper bounce fees (Rs. 700 to Rs. 1,200), daily penal charges up to <strong>36% p.a.</strong>, and faster early-stage field/arbitration velocity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Tranche 2 &amp; 3 Priority (HDFC Bank then ICICI Bank):</strong> Sequence <strong>HDFC Bank</strong> (up to 24% p.a. penal charges) in Tranche 2 once past 120 to 180 DPD, followed by <strong>ICICI Bank</strong> (5% p.a. penal charges) in Tranche 3.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Never Pay Token Rs. 5,000 Dribbles:</strong> Partial token payments across 3 lenders stop zero defaults and starve your lump-sum settlement fund. Accumulate cash cleanly for full lender-by-lender closures.</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="classic-salaried-stack" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Why India&apos;s Classic Salaried Debt Stack Is HDFC + ICICI + Bajaj
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Across Bengaluru, Hyderabad, Pune, Chennai, Gurugram, Noida, and Mumbai, nearly 60% of multi-loan salaried files reviewed by debt advisors share the exact same three-lender fingerprint: a Corporate Salary Account personal loan at <strong>HDFC Bank</strong> or <strong>ICICI Bank</strong>, a parallel unsecured personal loan at the rival private bank, and a high-limit Term or Flexi Hybrid Loan from <strong>Bajaj Finance</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Each lender approved you using different underwriting triggers during good years, pushing your total EMIs to Rs. 60,000 or Rs. 95,000 per month. When a family hospitalisation, pay cut, variable-pay wipeout, or temporary layoff hits, all three loans turn unserviceable simultaneously, yet you only have enough monthly savings to build <strong>one lump sum every 3 to 4 months</strong>. Deciding <em>which creditor gets settled first, second, and third</em> determines how fast collection pressure drops and how much total cash you save. (For broader multi-creditor concepts across all lender categories, see our <Link href="/multiple-personal-loan-settlement" className="text-[#1F5EFF] font-semibold underline">Multiple Personal Loan Settlement Hub</Link>.)
              </p>
            </section>

            {/* Salaried Combined-Debt Assessment Framing + Funnel */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                <Wallet className="w-4 h-4" />
                <span>Multi-Lender Salaried Portfolio Check (₹3,00,000 Minimum)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Add up your <strong>total combined unsecured balances</strong> across HDFC Bank, ICICI Bank, Bajaj Finance, other personal loans, and credit cards below. Portfolios of <strong>₹3 Lakhs and above</strong> qualify for coordinated multi-lender representation and waterfall OTS scheduling.
              </p>
            </div>

            <LoanSettlementAssessmentFunnel />

            {/* Section 2 */}
            <section id="verified-lender-comparison" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Verified Charges &amp; Recovery Behaviour: HDFC vs ICICI vs Bajaj
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before ranking your settlement order, compare the official servicing tariffs (verified on <strong>11 November 2026</strong> from each institution&apos;s published schedule of charges) alongside real-world collection mechanics:
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Comparison Metric</th>
                      <th>Bajaj Finance (NBFC)</th>
                      <th>HDFC Bank (Private Bank)</th>
                      <th>ICICI Bank (Private Bank)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Official EMI Bounce Fee</strong></td>
                      <td><strong>Rs. 700 to Rs. 1,200</strong> per bounce instance (incl. taxes per KFS)</td>
                      <td><strong>Rs. 450 to Rs. 550 + 18% GST</strong> (tiered 1st/2nd/3rd in month)</td>
                      <td><strong>Rs. 500 + 18% GST</strong> (+ Rs. 800 + GST NMMP if mandate disrupted)</td>
                    </tr>
                    <tr>
                      <td><strong>Overdue Penal Charge</strong></td>
                      <td>Up to <strong>36% p.a.</strong> (~0.10%/day / 3% p.m.) non-capitalized on overdue EMI</td>
                      <td>Up to <strong>24% p.a.</strong> (2% p.m.) + GST non-capitalized on overdue EMI</td>
                      <td><strong>5% p.a. + GST</strong> non-capitalized on overdue instalment</td>
                    </tr>
                    <tr>
                      <td><strong>Salary Account Set-Off Risk</strong></td>
                      <td>None directly (NBFC holds no savings accounts; relies on external NACH)</td>
                      <td><strong>Severe</strong> if HDFC is your Corporate Salary Account (instant SI / Hold sweep)</td>
                      <td><strong>Severe</strong> if ICICI is your Corporate Salary Account (Customer-ID lien)</td>
                    </tr>
                    <tr>
                      <td><strong>Early-Bucket Escalation Speed (1 to 90 DPD)</strong></td>
                      <td><strong>Fastest:</strong> Intensive daily calls, frequent NACH re-runs, early field visits &amp; Sec 25 / arbitration notices</td>
                      <td><strong>Moderate-High:</strong> Structured tele-buckets, Sec 25 notices, Zonal NPA handoff post-90 DPD</td>
                      <td><strong>Moderate:</strong> Institutional bucket progression, predictable quarter-end compromise drives</td>
                    </tr>
                    <tr>
                      <td><strong>Typical OTS Sweet Spot</strong></td>
                      <td>Often opens pragmatic settlement discussions around <strong>90 to 150 DPD</strong> to stop agency cost</td>
                      <td>Zonal Credit Committee grids mature around <strong>120 to 180+ DPD</strong></td>
                      <td>Institutional OTS grids mature around <strong>120 to 180+ DPD</strong> (strong in Mar/Jun/Sep/Dec)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 */}
            <section id="step-zero-payroll-shield" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Step 0: Decouple Your Salary Account Before Ranking Lenders
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Beginners make a fatal sequencing mistake: if their Corporate Salary Account sits at HDFC Bank, they let HDFC dictate 100% of their budget out of fear that HDFC will freeze next month&apos;s paycheck, paying HDFC full EMIs while Bajaj Finance explodes at 36% p.a. penal charges and sends field agents to their apartment gate.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Solve the salary-sweep problem administratively <strong>before</strong> starting your settlement waterfall: submit a lawful payroll bank change request to your HR portal moving future salary credits to a clean bank where you owe zero loans or credit cards (for example, SBI, Kotak, IDFC FIRST, or Bank of Baroda if unlinked). Once your monthly salary lands safely outside both <Link href="/hdfc-salary-account-auto-debit-personal-loan-default" className="text-[#1F5EFF] font-semibold underline">HDFC Bank&apos;s internal SI hold</Link> and <Link href="/icici-salary-account-auto-debit-personal-loan-default" className="text-[#1F5EFF] font-semibold underline">ICICI Bank&apos;s Customer-ID set-off</Link>, all three lenders stand on a level unsecured playing field!
              </p>
            </section>

            {/* Section 4 */}
            <section id="four-tier-priority-matrix" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. The 4-Tier Salaried Settlement Priority Order
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once your paycheck is safely routed to an unlinked bank account and you are accumulating monthly EMI savings into your Settlement Reserve Fund, rank your lenders using this battle-tested four-tier hierarchy:
              </p>
              <ol className="list-decimal pl-5 space-y-3 text-sm sm:text-base text-slate-700">
                <li>
                  <strong>Tier 1 (First Lump Sum, Months 3 to 4): Bajaj Finance (or Smallest Quick-Kill NBFC Balance)</strong>
                  <br />
                  Why first? Bajaj Finance compounds overdue stress fastest: up to 36% p.a. penal charges, Rs. 700 to Rs. 1,200 bounce fees, high call/visit intensity, and rapid online arbitration notices. Simultaneously, NBFCs often entertain pragmatic one-shot OTS closures earlier in the 90 to 150 DPD window than commercial banks. Eliminating your <Link href="/bajaj-finance-personal-loan-settlement" className="text-[#1F5EFF] font-semibold underline">Bajaj Finance personal loan</Link> first immediately cuts 60% of daily collection noise!
                </li>
                <li>
                  <strong>Tier 2 (Second Lump Sum, Months 6 to 7): HDFC Bank Personal Loan (+ Any Linked HDFC Card)</strong>
                  <br />
                  Why second? Between HDFC Bank and ICICI Bank, <Link href="/hdfc-personal-loan-settlement" className="text-[#1F5EFF] font-semibold underline">HDFC Bank</Link> levies substantially steeper penal charges on overdue instalments (up to 24% p.a. vs ICICI&apos;s 5% p.a.) and actively initiates Section 25 PASSA / conciliation camps around 120 to 180 DPD. Remember: if you also hold an HDFC Credit Card or Top-Up under the same Customer ID, settle them together in one HDFC UCIC package.
                </li>
                <li>
                  <strong>Tier 3 (Third Lump Sum, Months 8 to 10): ICICI Bank Personal Loan (+ Any Linked ICICI Card)</strong>
                  <br />
                  Why third? <Link href="/icici-personal-loan-settlement" className="text-[#1F5EFF] font-semibold underline">ICICI Bank</Link> carries a comparatively lower 5% p.a. overdue penal tariff, making the 6-to-9-month wait mathematically cheaper while its institutional NPA compromise grid matures toward deeper principal waivers around quarter-end drives.
                </li>
                <li>
                  <strong>Bonus Rule (The &quot;Sub-Rs. 80,000 Snowball Exception&quot;):</strong>
                  <br />
                  If one of your three loans has a tiny residual balance (for instance, only Rs. 75,000 remaining on ICICI while Bajaj is Rs. 6.5 Lakhs and HDFC is Rs. 7 Lakhs), knocking out that tiny Rs. 75,000 tradeline first for Rs. 35,000 to Rs. 45,000 permanently eliminates an entire creditor&apos;s legal notices in Month 2 before focusing 100% of firepower on Bajaj Finance!
                </li>
              </ol>
            </section>

            {/* Section 5 */}
            <section id="when-bank-jumps-first" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Crucial Exceptions: When HDFC or ICICI Must Jump to #1
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Reverse the NBFC-first rule and prioritize HDFC Bank or ICICI Bank <strong>ahead of Bajaj Finance</strong> if either of these two structural traps applies to your household:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Cross-Collateral on a Car Loan or Home Loan:</strong> If you have an active Auto Loan or Home Loan at HDFC Bank or ICICI Bank, RBI&apos;s borrower-wise UCIC rule means a 91-DPD personal loan default tags your secured loan NPA at that bank and blocks your car/property NOC at maturity (see <Link href="/personal-loan-top-up-default-same-bank" className="text-[#1F5EFF] font-semibold underline">Same-Bank Cross-Default &amp; UCIC Rules</Link>). Resolve or protect the secured-linked bank first!</li>
                <li><strong>Mandatory Employer Payroll Bank Lock-In:</strong> If you work for a specific institution (or are an employee of a corporate with a rigid single-bank payroll mandate that refuses account changes), settling that payroll bank&apos;s loan first restores clean monthly wage access.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="bajaj-flexi-nuance" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Bajaj Finance Flexi Hybrid Loan vs Bank Term Loan Math
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Salaried borrowers are often shocked when checking their Bajaj Finance statement after two years of regular payments. Unlike standard amortizing HDFC or ICICI personal loans where every EMI reduces principal from Month 1, <strong>Bajaj Finance Flexi Hybrid Loans</strong> charge <em>interest-only EMIs</em> during the initial 12 to 24 months on your drawn limit. That means even after paying Rs. 1.8 Lakhs over two years on a Rs. 5 Lakh Flexi limit, your unpaid principal is still <strong>Rs. 5,00,000</strong>!
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because zero principal has amortized on Flexi Hybrid accounts, letting them sit neglected for 12 months at up to 36% p.a. penal charges balloons the claimed ledger balance rapidly. Prioritizing Bajaj Flexi in Tranche 1 caps that runaway claim early.
              </p>
            </section>

            {/* Section 7 */}
            <section id="token-payment-trap" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Never Pay &quot;Rs. 5,000 Token Amounts&quot; Across Three Lenders
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When three agencies call on the same Tuesday, each caller begs for a &quot;good-faith part payment of Rs. 5,000 or 1 single EMI to stop field visits this week&quot;. If you hand Rs. 6,000 to Bajaj, Rs. 7,000 to HDFC, and Rs. 6,000 to ICICI every month:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li>You burn <strong>Rs. 19,000 every month (Rs. 1,14,000 in 6 months)</strong>.</li>
                <li>Every single rupee is appropriated first toward bounce fees, GST, penal charges, and overdue interest, reducing principal by almost zero.</li>
                <li>All three loans still progress into NPA or stay delinquent on CIBIL, and after 6 months you have <strong>Rs. 0 saved</strong> to execute an actual One-Time Settlement!</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Golden rule of multi-loan salaried resolution: <strong>Zero unapproved part-payments.</strong> Every rupee saved after household rent and groceries goes strictly into your unlinked Settlement Reserve Account until you hold enough cash to demand a stamped, full-and-final OTS Sanction Letter closing Lender #1 completely.
              </p>
            </section>

            {/* Section 8 */}
            <section id="worked-waterfall-plan" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Worked 9-Month Salaried Waterfall Plan (Rs. 16.5L Stack)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                See how a salaried IT/corporate manager earning Rs. 88,000 net (after a pay cut from Rs. 1.25L), needing Rs. 48,000/month for household survival and saving <strong>Rs. 40,000/month</strong> (plus a Rs. 1.1L net annual bonus in Month 6), systematically clears Rs. 16.5 Lakhs of unsecured debt (illustrative non-guaranteed range):
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Timeline Phase</th>
                      <th>Reserve Saved</th>
                      <th>Target Lender &amp; Claimed Dues</th>
                      <th>Illustrative OTS Closure Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Month 1</strong></td>
                      <td>Rs. 40,000</td>
                      <td>All 3 Lenders (SMA-0)</td>
                      <td>Shift HR salary to unlinked bank; stop 3x NACH bounce loops; send written hardship notices.</td>
                    </tr>
                    <tr>
                      <td><strong>Month 4 (Tranche 1)</strong></td>
                      <td>Rs. 1,60,000 (+ Rs. 40k family buffer = Rs. 2.0L)</td>
                      <td><strong>#1: Bajaj Finance PL</strong> (Rs. 4.4L claimed at 105 DPD)</td>
                      <td>Negotiate one-shot OTS around <strong>Rs. 1.95L to Rs. 2.15L</strong>; verify Bajaj OTS letter &amp; close Tranche 1 permanently.</td>
                    </tr>
                    <tr>
                      <td><strong>Month 7 (Tranche 2)</strong></td>
                      <td>3m savings (Rs. 1.2L) + Annual Bonus (Rs. 1.1L) = <strong>Rs. 2.3L+</strong></td>
                      <td><strong>#2: HDFC Bank PL</strong> (Rs. 6.6L claimed at 180+ DPD)</td>
                      <td>Negotiate Zonal OTS around <strong>Rs. 2.65L to Rs. 3.10L</strong> (1-shot or 60-day 2-split); collect HDFC NDC.</td>
                    </tr>
                    <tr>
                      <td><strong>Month 10 (Tranche 3)</strong></td>
                      <td>Next 3 to 4m savings = <strong>Rs. 1.6L to Rs. 2.2L+</strong></td>
                      <td><strong>#3: ICICI Bank PL</strong> (Rs. 5.5L claimed at 240+ DPD)</td>
                      <td>Close final lender during quarter-end OTS drive around <strong>Rs. 2.20L to Rs. 2.60L</strong>; 100% debt-free in 10 months!</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 italic">
                Disclaimer: Figures above illustrate waterfall cash-flow sequencing only. Actual OTS approvals are never guaranteed and vary by lender policy, vintage, and verified borrower capacity.
              </p>
            </section>

            {/* Section 9 */}
            <section id="triple-nach-defense" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Managing Triple NACH Bounces, Legal Notices &amp; RBI Rules
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                While Tranches 2 and 3 wait their turn in Months 4 through 9, keep legal and operational friction tightly controlled:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Eliminate Triple Inward Return Drains:</strong> Cancel or pause active e-NACH mandates lawfully via your bank portal (see <Link href="/salary-account-ecs-mandate-cancellation-rules" className="text-[#1F5EFF] font-semibold underline">ECS &amp; NACH Cancellation Rules</Link>) while notifying each lender in writing of your multi-creditor hardship.</li>
                <li><strong>Respond Promptly to Sec 25 PASSA &amp; Conciliation Notices:</strong> Never ignore a lawyer&apos;s notice or online arbitration link from Bajaj, HDFC, or ICICI. Written advocate replies placing your documented FOIR crisis on record prevent one-sided ex-parte awards while you accumulate that lender&apos;s tranche.</li>
                <li><strong>Enforce RBI Call &amp; Privacy Boundaries:</strong> Under RBI&apos;s Fair Practices Code and the updated recovery conduct rules effective <strong>1 January 2027</strong>, all three regulated entities must strictly observe <strong>8:00 AM to 7:00 PM</strong> calling limits and zero employer/family harassment.</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section id="closure-documentation" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                10. Verifying Each OTS Letter &amp; Tracking Three Clean NDCs
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As each lender reaches the front of your waterfall queue, enforce strict documentary discipline: verify the official domain email and letterhead OTS Sanction Letter directly with the bank or NBFC branch/portal, pay strictly into your Loan Account Number (never an agent UPI link), collect your stamped <Link href="/no-dues-certificate-after-loan-settlement" className="text-[#1F5EFF] font-semibold underline">No Dues Certificate</Link> within 30 days, and audit CIBIL 45 days after Tranche 3 closes to confirm all three tradelines display <strong>Rs. 0 Amount Overdue</strong>.
              </p>
            </section>

            {/* Section 11: Company Section */}
            <section id="company-resolution-section" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                11. SettleLoans Multi-Creditor Coordination for Salaried Staff
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Handling simultaneous calls, Section 25 notices, and settlement windows across HDFC Bank, ICICI Bank, and Bajaj Finance while performing at a full-time corporate job is exhausting. For salaried portfolios of ₹3 Lakhs and above, SettleLoans builds your custom month-by-month waterfall schedule, handles all three creditors&apos; recovery desks, replies to legal notices, and closes every loan cleanly in sequence.
              </p>
              <CompanySection />
            </section>

            {/* Section 12: FAQs */}
            <section id="faqs" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                12. Frequently Asked Questions: HDFC, ICICI &amp; Bajaj Priority
              </h2>

              <div className="space-y-3">
                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all" open>
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      1. If I hold personal loans at HDFC Bank, ICICI Bank, and Bajaj Finance, which lender should I settle first?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>First, neutralize any same-bank salary account sweep by lawfully moving HR payroll to an unlinked bank. Once your paycheck is safe, most salaried borrowers settle Bajaj Finance (or high-velocity NBFCs) first because Bajaj levies up to 36% p.a. penal charges, Rs. 700 to Rs. 1,200 bounce fees, and faster early-stage field/arbitration notices, followed by HDFC Bank (24% p.a. penal) and ICICI Bank (5% p.a. penal), unless HDFC or ICICI also holds your car/home loan collateral.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      2. Should I settle my salary-account bank loan first so it stops deducting my paycheck?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>You do not need to rush an unfavourable early settlement solely to save your paycheck. Instead, update your Corporate Salary Account with HR to a clean bank where you owe zero debt before default deepens. Once salary set-off is neutralized, your old payroll bank becomes an ordinary unsecured lender that you can sequence rationally based on lump-sum readiness and discount quality.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      3. How do official bounce and penal charges compare across HDFC Bank, ICICI Bank, and Bajaj Finance?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Per official fee schedules checked on 11 November 2026: Bajaj Finance charges Rs. 700 to Rs. 1,200 per bounce (incl. taxes) and penal charges up to 36% p.a. (~0.10%/day) on overdue instalments; HDFC Bank charges Rs. 450 to Rs. 550 + 18% GST per bounce and up to 24% p.a. (2% p.m.) + GST penal charges; ICICI Bank charges Rs. 500 + 18% GST per bounce (plus Rs. 800 + GST NMMP if mandate disrupted) and 5% p.a. + GST penal charges.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      4. Why is it dangerous to pay partial token amounts of Rs. 5,000 to all three lenders every month?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Spreading Rs. 15,000 across three lenders as Rs. 5,000 token payments satisfies none of your full EMIs, does NOT stop NPA progression or CIBIL damage, gets eaten up by bounce and penal charges, and prevents you from accumulating the Rs. 1.5 Lakh to Rs. 3 Lakh lump sum needed to extinguish one entire loan permanently via One-Time Settlement.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      5. When does HDFC Bank or ICICI Bank jump ahead of Bajaj Finance to Priority #1?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>A private bank moves immediately to Priority #1 if: (1) you hold a Home Loan, Car Loan, or large Fixed Deposit under the same Customer ID at HDFC or ICICI (due to RBI UCIC borrower-wise NPA tagging and NOC lien holds), or (2) your public/corporate employer strictly refuses to change your salary account away from that bank.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      6. How does a Bajaj Finance Flexi Hybrid Loan behave differently from an HDFC or ICICI term loan during settlement?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>In a Bajaj Finance Flexi Hybrid or Flexi Term loan, borrowers often paid interest-only EMIs for the initial 12 to 24 months without reducing Rs. 1 of drawn principal. When it defaults, the full utilized drawdown limit remains intact as principal, and Bajaj moves rapidly on tele-calling and arbitration notices, making early lump-sum readiness essential.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      7. Do all three lenders need to be settled in the exact same month?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>No. Salaried borrowers rarely possess Rs. 7 Lakhs in idle cash on Day 1 to close three loans simultaneously. A Waterfall Lump-Sum Plan accumulates monthly EMI savings in an unlinked bank account to close Loan #1 in Month 3 or 4, Loan #2 in Month 6 or 7, and Loan #3 in Month 9 or 10 (often boosted by annual bonus or tax-refund tranches).</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      8. Will settling Bajaj Finance first make HDFC Bank or ICICI Bank refuse to settle later?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>No. In fact, when HDFC or ICICI pulls a bureau refresh at 150 to 180+ DPD and sees that you are resolving distressed debt systematically under severe FOIR hardship rather than taking fresh loans, their NPA recovery committees routinely process their own compromise offers based on your remaining cash capacity.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      9. How do I stop triple NACH bounce charges when defaulting across HDFC, ICICI, and Bajaj simultaneously?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>If three external NACH mandates hit an underfunded savings account 2 to 3 times each per month, you can lose Rs. 4,000 to Rs. 7,000 monthly solely in bank inward return charges plus lender bounce fees. Lawfully pausing or cancelling NACH mandates via your destination bank portal while sending written hardship notices stops futile fee leakage.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      10. What realistic settlement ranges apply across Bajaj Finance, HDFC Bank, and ICICI Bank?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Settlement outcomes are never guaranteed and depend on NPA aging, principal vs interest mix, and one-shot payment speed. Across ₹3L+ salaried multi-loan portfolios past 90 to 180+ DPD, realistic One-Time Settlement closures commonly range between 40% and 65% of total claimed dues (including 100% waiver of penal and bounce fees), subject to each lender&apos;s credit grid.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      11. Can agents from three different lenders visit my office or call HR at the same time?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>No. Under RBI Fair Practices norms and the updated RBI recovery conduct directions taking effect on 1 January 2027, both banks (HDFC, ICICI) and NBFCs (Bajaj Finance) are strictly prohibited from calling outside 8:00 AM to 7:00 PM, contacting HR or colleagues, or harassing you at your workplace.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      12. What if I also hold an HDFC Credit Card alongside my HDFC Personal Loan?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Because HDFC Bank maps both your Personal Loan and Credit Card to one Customer ID (UCIC), plan to negotiate and close both HDFC unsecured tradelines together in the same settlement tranche so your entire HDFC Customer ID exits NPA cleanly with twin No Dues Certificates.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* Official Lender Schedule References */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Official Lender Fee Schedules &amp; RBI Sources (Checked 11 November 2026)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://www.bajajfinserv.in/all-fees-and-charges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Bajaj Finance Official All Fees &amp; Charges Schedule</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                </a>
                <a
                  href="https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/pdf/notice-board/loan-servicing-centre-related-notices/tat-and-charges-of-standard-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">HDFC Bank Standard Retail Loan Servicing Charges PDF</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                </a>
                <a
                  href="https://www.icici.bank.in/personal-banking/loans/personal-loan/service-charges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">ICICI Bank Personal Loan Service Charges Schedule</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Portal (cms.rbi.org.in)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                </a>
              </div>
            </section>

            {/* Related Guides */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Multi-Loan &amp; Salaried Settlement Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/multiple-personal-loan-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Multiple Personal Loan Settlement Hub
                </Link>
                <Link href="/bajaj-finance-personal-loan-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Bajaj Finance Loan Settlement
                </Link>
                <Link href="/hdfc-personal-loan-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  HDFC Personal Loan Settlement
                </Link>
                <Link href="/icici-personal-loan-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  ICICI Personal Loan Settlement
                </Link>
                <Link href="/personal-loan-top-up-default-same-bank" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Same-Bank Top-Up Default Rules
                </Link>
                <Link href="/use-annual-bonus-to-settle-personal-loan" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Use Annual Bonus to Settle Loans
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
                  <p className="text-xs text-slate-500">Multi-Lender Salaried Waterfall Strategist</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Designs sequential multi-creditor settlement calendars across HDFC, ICICI, Bajaj Finance, Axis, Kotak, and SBI for salaried households.
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
                <span>Multi-Lender Debt Desk</span>
              </div>
              <div className="font-bold text-base text-white mb-2">3+ Personal Loans Exceeding ₹3L?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Stop wasting cash on scattered token payments. Get a customized lender-by-lender lump-sum settlement sequence built around your salary.
              </p>
              <a
                href="#settlement-assessment"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Start ₹3L+ Waterfall Plan
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Portfolio Safeguards
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Custom Tranche Waterfall Sequencing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Multi-Agency Workplace Call Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Sec 25 &amp; Arbitration Reply Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Lender-by-Lender NDC Verification</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
