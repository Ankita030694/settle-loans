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
  TrendingUp,
  CheckCircle2,
  Calculator,
  FileCheck,
  UserCheck,
  Wallet
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Appraisal Increment: Restructure vs OTS | SettleLoans',
  description: 'Counting on a March-April appraisal increment to fix personal loan EMIs? Run real post-tax hike math to compare loan restructuring vs ₹3L+ OTS.',
  keywords: [
    'appraisal or increment restructure or settle personal loan',
    'salary increment vs personal loan settlement',
    'step up emi restructuring after appraisal india',
    'will 10 percent salary hike fix personal loan debt',
    'settle personal loan before or after appraisal cycle',
    'march april salaried appraisal loan restructuring',
    'foir math after annual increment personal loan',
    'arrears payout personal loan settlement'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/appraisal-or-increment-restructure-or-settle-personal-loan',
  },
  openGraph: {
    title: 'Appraisal Increment: Restructure vs OTS | SettleLoans',
    description: 'Counting on a March-April appraisal increment to fix personal loan EMIs? Run real post-tax hike math to compare loan restructuring vs ₹3L+ OTS.',
    url: 'https://www.settleloans.in/appraisal-or-increment-restructure-or-settle-personal-loan',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg',
        width: 1200,
        height: 675,
        alt: 'Salaried Appraisal and Increment Math Comparing Personal Loan Restructuring vs Settlement',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Appraisal Increment: Restructure vs OTS | SettleLoans',
    description: 'Counting on a March-April appraisal increment to fix personal loan EMIs? Run real post-tax hike math to compare loan restructuring vs ₹3L+ OTS.',
    images: ['https://www.settleloans.in/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.settleloans.in/appraisal-or-increment-restructure-or-settle-personal-loan#breadcrumb",
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
          "name": "Appraisal Increment: Restructure vs Settle",
          "item": "https://www.settleloans.in/appraisal-or-increment-restructure-or-settle-personal-loan"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/appraisal-or-increment-restructure-or-settle-personal-loan#article",
      "headline": "Appraisal or Increment Ahead: Restructure or Settle Your Loan?",
      "description": "Quantitative corporate compensation and debt guide for Indian salaried employees ahead of March to June appraisal cycles. Calculates exact net post-tax and post-PF take-home gains from 7% to 25% CTC hikes to decide objectively between pre-NPA personal loan restructuring and ₹3L+ One-Time Settlement.",
      "image": "https://www.settleloans.in/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg",
      "datePublished": "2026-11-11T12:45:00+05:30",
      "dateModified": "2026-11-11T12:45:00+05:30",
      "mainEntityOfPage": "https://www.settleloans.in/appraisal-or-increment-restructure-or-settle-personal-loan",
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
      "@id": "https://www.settleloans.in/appraisal-or-increment-restructure-or-settle-personal-loan#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Will a normal 8% to 12% corporate appraisal increment rescue a multi-personal-loan debt trap?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rarely on high-FOIR debt stacks. On a Rs. 15 LPA CTC package, a 10% appraisal increment adds Rs. 12,500/month to headline CTC, but after Employer/Employee PF deductions, deferred variable-pay allocation, and 20.8% to 31.2% marginal tax, monthly net take-home increases by only Rs. 6,200 to Rs. 7,400. Once April rent and school-fee inflation absorb Rs. 3,500, less than Rs. 3,500 remains, which cannot bridge a Rs. 25,000 monthly EMI deficit."
          }
        },
        {
          "@type": "Question",
          "name": "When does an upcoming promotion or increment make loan restructuring better than settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pre-NPA tenure extension or step-up restructuring works well when: (1) your loan is still Standard (0 to 30 DPD), (2) you have a confirmed 20% to 35% promotion or external offer jump, and (3) combining the net take-home increase with a 12-to-24-month tenure extension brings your all-in Fixed Obligation to Income Ratio (FOIR) cleanly below 48%."
          }
        },
        {
          "@type": "Question",
          "name": "Should I borrow from loan apps in January and February just to survive until my April increment arrives?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Never. Taking 30% to 36% APR short-term bridge loans in Q4 hoping an uncertain April appraisal will bail you out is one of the fastest ways salaried professionals double their debt. Many companies defer appraisal payouts to June or award single-digit hikes, leaving you trapped with both legacy bank EMIs and aggressive app-loan repayments."
          }
        },
        {
          "@type": "Question",
          "name": "Does negotiating a One-Time Settlement before my increment reflects on payslips make a difference?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if your loan is already in 90+ DPD NPA status and even your post-hike salary will remain insolvent (e.g., 70% FOIR). When Zonal Credit Committees evaluate exception waivers using your last 3 salary slips, a higher post-appraisal payslip can prompt collection officers to demand a higher settlement figure even though your real household deficit remains unserviceable."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Step-Up EMI restructuring plan for salaried employees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI's stressed asset resolution framework, select banks offer standard-account borrowers a temporary lower EMI for the initial 6 to 9 months that steps up by 15% to 25% later to match documented career progression or confirmed promotion increments, without forgiving principal."
          }
        },
        {
          "@type": "Question",
          "name": "What happens to retroactive appraisal arrears paid in May or June if my salary bank loan is overdue?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many Indian IT and corporate employers announce April increments in May or June and credit 2 to 3 months of back-dated increment arrears together with June salary. If your personal loan at that same bank is overdue, internal Hold Balance sweeps will absorb 100% of your arrears + salary toward penal fees and interest unless you lawfully shifted HR payroll to an unlinked bank earlier."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use my retroactive appraisal arrears + performance bonus to fund a lump-sum OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Combining 2 to 3 months of retroactive increment arrears, annual variable pay, and saved monthly EMI reserves in an unlinked bank account often creates a strong single-bullet fund to settle an aged NPA personal loan permanently against an official OTS Sanction Letter."
          }
        },
        {
          "@type": "Question",
          "name": "What if my company freezes increments or awards a 0% hike in April while my loans are already overdue?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 0% increment freeze alongside 6% to 8% urban rent and medical inflation effectively acts as a real-income pay cut. If your combined unsecured debt is ₹3 Lakhs or higher and FOIR exceeds 60%+, abandoning wishful restructuring plans and transitioning to a structured multi-loan One-Time Settlement waterfall protects household solvency."
          }
        },
        {
          "@type": "Question",
          "name": "Can a defaulted personal loan block my internal corporate promotion or appraisal rating?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In standard IT, engineering, pharma, consulting, and corporate companies, internal annual appraisals and promotions evaluate workplace KPIs and project delivery, never your personal CIBIL report. Even in banking/BFSI employers, existing employees rarely undergo annual credit pulls unless moving into specialized regulated fiduciary seats."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents call my reporting manager during appraisal review month to pressure me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Calling your manager, HR business partner, or colleagues is a severe breach of RBI Fair Practices norms and RBI's updated recovery conduct directions effective 1 January 2027, which strictly enforce borrower confidentiality and 8:00 AM to 7:00 PM calling hours."
          }
        },
        {
          "@type": "Question",
          "name": "If I get a 35% hike by switching companies, should I foreclose, restructure, or still settle my NPA loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Run exact numbers on your new net take-home pay. If your loans are already 150+ DPD NPA with massive accumulated penal/interest claims, settling them cleanly via One-Time Settlement (and later upgrading 'Settled' to 'Closed' once savings rebuild, if desired) is often far more practical than trying to cure 6 months of recalled principal arrears overnight."
          }
        },
        {
          "@type": "Question",
          "name": "What realistic OTS range applies if my loans are already NPA ahead of appraisal season?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Settlement outcomes are never guaranteed and depend on lender policy, NPA aging (90 to 180+ DPD), and single-shot cash availability. Across ₹3L+ unsecured salaried loans, realistic One-Time Settlement closures commonly land between 40% and 65% of total claimed dues, including full waiver of penal and bounce fees."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'april-appraisal-illusion', title: '1. The Salaried Wait-for-April-Appraisal Trap' },
  { id: 'real-post-tax-hike-math', title: '2. Hard Payroll Math: CTC Hike vs Net Cash' },
  { id: 'april-rent-school-inflation', title: '3. How April Rent & Fee Renewals Eat Your Hike' },
  { id: 'quantitative-decision-fork', title: '4. Decision Formula: Restructure vs ₹3L+ OTS' },
  { id: 'step-up-emi-restructuring', title: '5. Pre-NPA Step-Up Restructuring Mechanics' },
  { id: 'payslip-timing-ots', title: '6. Timing Risk: Pre-Hike vs Post-Hike Payslips' },
  { id: 'arrears-sweep-protection', title: '7. Protecting May-June Retroactive Arrears' },
  { id: 'zero-hike-freeze-playbook', title: '8. What to Do When HR Announces a 0% Hike Freeze' },
  { id: 'internal-promotion-privacy', title: '9. Does Loan Default Affect Internal Promotions?' },
  { id: 'big-job-switch-hike', title: '10. Strategy After a 30%+ External Job-Switch Hike' },
  { id: 'company-resolution-section', title: '11. SettleLoans Salaried Appraisal Debt Audit' },
  { id: 'faqs', title: '12. Frequently Asked Questions' },
];

export default function AppraisalIncrementRestructureOrSettlePage() {
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
            <TrendingUp className="w-3.5 h-3.5" />
            <span>March-April Appraisal Debt Math • Increment vs Restructuring vs OTS</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Appraisal or Increment Ahead: Restructure or Settle Your Loan?
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5">
            Holding on by a thread until your March, April, or May corporate appraisal letter arrives? Run the real post-tax and post-PF take-home calculation on an 8% to 25% CTC hike to see whether loan restructuring will genuinely rescue your EMIs or whether a ₹3L+ One-Time Settlement is the smarter exit.
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
              <span>Salaried Payroll &amp; FOIR Verified</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#settlement-assessment"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Test My ₹3L+ Post-Appraisal Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Run Custom FOIR vs OTS Check
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
              <li className="font-bold text-slate-900" aria-current="page">Appraisal Increment: Restructure vs Settle</li>
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
                SettleLoans represents salaried professionals holding ₹3 Lakhs or more in combined unsecured personal loans, top-ups, and cards where upcoming increments still leave EMIs unserviceable.
              </p>
            </div>
          </aside>

          {/* Main Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">

            {/* Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Executive Summary: Appraisal Math vs Loan Relief</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Headline CTC Hikes Overstate Net Cash:</strong> A standard 9% corporate appraisal on Rs. 15 LPA adds only ~Rs. 5,900 to Rs. 6,800 per month to net take-home pay after PF, variable-pay allocation, and Section 192 slab tax.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Never Borrow Bridge Loans Waiting for April:</strong> Swiping credit cards or taking 32% APR app loans in Jan-Mar hoping an April increment will rescue a Rs. 25,000/month deficit deepens insolvency when single-digit hikes land in May/June.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>When Restructuring Wins:</strong> A 20% to 35% promotion or switch hike paired with pre-NPA tenure extension cleanly fixes mild stress when post-hike FOIR drops below 48%.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>When ₹3L+ Settlement Wins:</strong> If even after your increment your combined unsecured EMIs exceed 65%+ of net pay, structuring One-Time Settlements (and shielding June arrears from salary sweeps) permanently resets your balance sheet.</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="april-appraisal-illusion" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Salaried &quot;Wait Until April Appraisal&quot; Debt Trap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Between December and March every year, salaried professionals across India&apos;s IT parks, GCCs, pharmaceutical hubs, and corporate offices cling to one psychological anchor: the upcoming annual performance appraisal. Even when combined personal loan and credit card EMIs are swallowing 72% of monthly take-home pay, stressed employees routinely borrow from colleagues, rotate credit card balances through utility apps, or take high-interest instant loans just to survive three more months until HR releases April increment letters.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Then May or June payroll arrives, and reality hits like cold water:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li>Across Indian IT services and mid-market corporates, average merit increments for &quot;Meets Expectations&quot; ratings frequently average <strong>5% to 9% of CTC</strong> (with delayed effective dates in July or October during tight margin cycles).</li>
                <li>After statutory PF increases, variable-pay carve-outs, and marginal income tax, a 9% CTC hike increases monthly bank credit by barely <strong>Rs. 4,500 to Rs. 7,000</strong>.</li>
                <li>Meanwhile, three months of bridge borrowing added <strong>Rs. 9,500/month in brand-new EMIs</strong>, leaving the employee deeper underwater in June than they were in January!</li>
              </ul>
            </section>

            {/* Salaried Combined-Debt Assessment Framing + Funnel */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                <Wallet className="w-4 h-4" />
                <span>Pre-Appraisal Salaried Solvency Check (₹3,00,000 Minimum)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Before taking another bridge loan waiting for appraisal letters, check whether your debt stack is structurally recoverable or needs formal settlement. Enter your <strong>total combined unsecured debt</strong> across personal loans, top-ups, and cards below (portfolios from <strong>₹3 Lakhs and above</strong> qualify for full legal &amp; settlement advisory).
              </p>
            </div>

            <LoanSettlementAssessmentFunnel />

            {/* Section 2 */}
            <section id="real-post-tax-hike-math" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Hard Payroll Math: How Much Cash a CTC Hike Really Adds
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Never evaluate loan affordability using gross CTC percentages. Corporate India&apos;s Cost-to-Company (CTC) bundles Employer PF (12% of basic), Gratuity provisioning (4.81% of basic), group insurance, and 10% to 20% annual variable pay that does <em>not</em> hit your monthly bank account. Examine how much <strong>real monthly net cash</strong> lands in your savings account after PF and New Tax Regime Section 192 TDS across typical appraisal scenarios:
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Current CTC &amp; Appraisal Scenario</th>
                      <th>Headline Gross Monthly Increase</th>
                      <th>Less PF, Variable Split &amp; Slab TDS</th>
                      <th>Actual Extra Monthly Cash in Bank</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Rs. 10.0 LPA + 8% Merit Hike</strong> (to Rs. 10.8 LPA)</td>
                      <td>+ Rs. 6,667 / month CTC</td>
                      <td>- Rs. 2,150 (PF + variable + tax)</td>
                      <td><strong>+ Rs. 4,517 / month net</strong></td>
                    </tr>
                    <tr>
                      <td><strong>Rs. 15.0 LPA + 9% Merit Hike</strong> (to Rs. 16.35 LPA)</td>
                      <td>+ Rs. 11,250 / month CTC</td>
                      <td>- Rs. 4,650 (PF + 15% variable + 20.8% tax)</td>
                      <td><strong>+ Rs. 6,600 / month net</strong></td>
                    </tr>
                    <tr>
                      <td><strong>Rs. 22.0 LPA + 10% Merit Hike</strong> (to Rs. 24.2 LPA)</td>
                      <td>+ Rs. 18,333 / month CTC</td>
                      <td>- Rs. 8,550 (PF + 20% variable + 31.2% tax)</td>
                      <td><strong>+ Rs. 9,783 / month net</strong></td>
                    </tr>
                    <tr>
                      <td><strong>Rs. 15.0 LPA + 28% Promotion / Switch</strong> (to Rs. 19.2 LPA)</td>
                      <td>+ Rs. 35,000 / month CTC</td>
                      <td>- Rs. 13,200 (PF + variable + slab tax)</td>
                      <td><strong>+ Rs. 21,800 / month net</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Notice the stark divide between Rows 1-3 and Row 4. Only a substantial <strong>25% to 35% promotion band jump or external job switch</strong> generates Rs. 20,000+ in fresh monthly net cash. Standard single-digit merit appraisals add under Rs. 7,000/month!
              </p>
            </section>

            {/* Section 3 */}
            <section id="april-rent-school-inflation" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Don&apos;t Forget April-June Household Inflation Offsets
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Why does even that Rs. 6,600/month net April increment vanish by June? Because India&apos;s urban household cost resets occur in the exact same April-to-June quarter as corporate appraisals:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Annual 11-Month Rent Renewal Escalation:</strong> Metro landlords in Bengaluru, Hyderabad, Pune, Mumbai, and NCR routinely enforce 5% to 8% annual rent step-ups (+Rs. 1,500 to Rs. 3,000/month).</li>
                <li><strong>New Academic Year School Fees &amp; Transport:</strong> April and May bring annual school re-admission fees, books, and 8% to 10% tuition increases (+Rs. 1,500 to Rs. 3,500/month amortized).</li>
                <li><strong>Health Insurance Premium Renewals:</strong> Parent and family floater premiums step up sharply with age bands.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Subtracting Rs. 3,500 to Rs. 5,000 of mandatory April household inflation from a Rs. 6,600 net appraisal increment leaves barely <strong>Rs. 1,600 to Rs. 3,100 per month</strong> in net new debt-servicing power!
              </p>
            </section>

            {/* Section 4 */}
            <section id="quantitative-decision-fork" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Quantitative Formula: Restructuring vs ₹3L+ Settlement
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Use this exact four-row decision test 60 days ahead of your appraisal cycle (building on our <Link href="/personal-loan-settlement-vs-restructuring" className="text-[#1F5EFF] font-semibold underline">core restructuring vs settlement comparison</Link>):
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Your Household Debt &amp; Hike Profile</th>
                      <th>Post-Hike FOIR</th>
                      <th>Optimal Strategic Path</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Confirmed 20% to 35% promotion/switch hike; loans currently <strong>0 DPD Standard</strong>; mild Rs. 8k-12k monthly squeeze.</td>
                      <td>Drops <strong>&lt;= 45% to 48%</strong></td>
                      <td><strong>Keep Paying / Request Pre-NPA Step-Up or Tenure Restructuring:</strong> Avoids NPA default and preserves long-term prime credit.</td>
                    </tr>
                    <tr>
                      <td>8% to 12% routine hike + 1-time annual bonus; single high-EMI loan pushing FOIR to 55%.</td>
                      <td>Drops to <strong>~46%</strong> after bonus part-pay</td>
                      <td><strong>Part-Prepay Highest-Rate Loan With Bonus + Restructure Tenure</strong> (see <Link href="/use-annual-bonus-to-settle-personal-loan" className="text-[#1F5EFF] underline font-semibold">Annual Bonus Playbook</Link>).</td>
                    </tr>
                    <tr>
                      <td>6% to 10% merit hike (or 0% freeze); <strong>₹3L to ₹30L+ multi-loan stack</strong>; Rs. 22,000 to Rs. 45,000 monthly EMI deficit.</td>
                      <td>Stays stuck at <strong>65% to 90%+</strong></td>
                      <td><strong>Structured One-Time Settlement (OTS) Waterfall:</strong> Restructuring adds interest without curing insolvency; preserve cash for lump-sum OTS closures.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5 */}
            <section id="step-up-emi-restructuring" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. How Pre-NPA Step-Up Restructuring Works Ahead of Promotions
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Suppose you fall cleanly into Row 1: your total debt is manageable, you hold written HR confirmation of an upcoming promotion band revision or onsite deployment starting in 90 days, and your personal loan is still <strong>Standard (0 to 25 DPD)</strong>. Approach your bank&apos;s retail loan servicing desk proactively in writing to request:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Remaining Tenure Extension (Up to 60/72-Month Cap):</strong> Stretching 28 remaining instalments out to 48 instalments permanently lowers monthly EMI outflow by ~28% at the cost of higher cumulative interest.</li>
                <li><strong>Step-Up Repayment Modification:</strong> Where supported under the lender&apos;s RBI stressed-asset policy, early-year EMIs are trimmed for 6 months and stepped back up once your promoted salary takes effect. Remember: banks report stress-driven modifications as &quot;Restructured&quot; on CIBIL, and zero principal is waived, so sign this <em>only</em> if your post-promotion cash flow comfortably covers the stepped-up EMI!</li>
                <li><strong>Maximum Age &amp; Policy Tenure Ceilings:</strong> Keep in mind that most private banks cap total unsecured personal loan tenure at 60 to 72 months or age 58 to 60 at maturity. If your original sanction was already booked for 60 months, ask the branch relationship manager upfront how many months of residual extension headroom actually exist under your employer&apos;s corporate category before counting on an EMI reduction.</li>
              </ol>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Always stress-test any proposed restructured EMI against a 10% emergency medical buffer: if paying the revised EMI still leaves less than Rs. 7,500 per month in household contingency savings after your increment lands, a single unexpected car repair or parental medical bill will break the restructured schedule and trigger immediate loan recall.
              </p>
            </section>

            {/* Section 6 */}
            <section id="payslip-timing-ots" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. OTS Underwriting Nuance: Pre-Hike vs Post-Hike Payslips
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                What if your personal loans are <strong>already 90 to 150+ DPD NPA</strong> in February or March, and even a 12% April increment will leave your Rs. 14 Lakh multi-loan stack completely unpayable? Waiting needlessly until June to negotiate your first OTS carries a subtle underwriting downside:
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As explained in our <Link href="/personal-loan-settlement-and-form-16-salary-slip-proof" className="text-[#1F5EFF] font-semibold underline">Form 16 &amp; Salary Slip OTS Proof Guide</Link>, Zonal Credit Committees evaluate exception waivers using your <strong>latest 3 salary slips</strong>. Negotiating and locking your OTS Sanction Letter while your current pre-increment payslips reflect your lower baseline pay avoids unproductive arguments with collection officers who point at a freshly printed May increment slip and demand Rs. 45,000 more, ignoring that April rent and two other lenders already consumed the difference!
              </p>
            </section>

            {/* Section 7 */}
            <section id="arrears-sweep-protection" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Shielding May-June Retroactive Increment Arrears From Set-Off
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In Indian IT majors and large corporates, increments effective April 1 are frequently finalized in late May and paid out in the <strong>May 31 or June 30 payroll along with 2 to 3 months of lump-sum retroactive arrears</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If your Corporate Salary Account sits at the exact same bank where your personal loan is overdue (<Link href="/hdfc-salary-account-auto-debit-personal-loan-default" className="text-[#1F5EFF] font-semibold underline">HDFC</Link>, <Link href="/icici-salary-account-auto-debit-personal-loan-default" className="text-[#1F5EFF] font-semibold underline">ICICI</Link>, <Link href="/axis-salary-account-auto-debit-personal-loan-default" className="text-[#1F5EFF] font-semibold underline">Axis</Link>, <Link href="/kotak-salary-account-auto-debit-personal-loan-default" className="text-[#1F5EFF] font-semibold underline">Kotak</Link>, or <Link href="/sbi-salary-account-auto-debit-personal-loan-default" className="text-[#1F5EFF] font-semibold underline">SBI</Link>), that June salary + arrears lump sum will be swept automatically by internal Hold Balances toward un-waived penal charges. Shift your HR payroll bank account to an unlinked institution well before appraisal arrears hit, then use that protected arrears pool toward an official single-bullet OTS!
              </p>
            </section>

            {/* Section 8 */}
            <section id="zero-hike-freeze-playbook" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Action Plan If HR Announces a 0% Increment Freeze or Deferral
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When global tech demand softens or company margins tighten, employers routinely defer April increments to October or announce a flat 0% merit freeze across mid-to-senior bands. If you were barely surviving at 62% FOIR hoping for an April hike, a 0% freeze combined with 7% household inflation is mathematically identical to a <Link href="/salary-cut-personal-loan-emi-restructuring-vs-settlement" className="text-[#1F5EFF] font-semibold underline">salaried pay cut</Link>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Act decisively on Day 1 of a hike freeze: stop draining credit cards to pay unserviceable personal loan EMIs, decouple your salary bank account via HR, halt multi-presentment NACH bounce fees lawfully, and channel saved monthly cash into a structured lender-by-lender OTS waterfall (see <Link href="/multiple-personal-loans-hdfc-icici-bajaj-which-to-settle-first" className="text-[#1F5EFF] font-semibold underline">Multiple Loans: Which to Settle First</Link>).
              </p>
            </section>

            {/* Section 9 */}
            <section id="internal-promotion-privacy" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Can Personal Loan Default Block Your Internal Promotion?
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Collection callers love weaponizing appraisal season with fake threats: <em>&quot;We will send a defaulter notice to your HR head and stop your April promotion.&quot;</em> Know your statutory rights:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Internal Appraisals Never Pull CIBIL:</strong> Corporate promotion committees evaluate billability, code/sales delivery, and leadership metrics, never personal retail credit reports.</li>
                <li><strong>Strict RBI Workplace Confidentiality:</strong> Under RBI&apos;s Fair Practices Code and RBI&apos;s consolidated recovery conduct directions taking effect on <strong>1 January 2027</strong>, lenders and recovery agents are strictly barred from contacting your manager, HR department, or colleagues, and all borrower contact is restricted to <strong>8:00 AM to 7:00 PM</strong>.</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section id="big-job-switch-hike" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                10. What If You Land a 35% Hike via an External Job Switch?
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Often the real April-May income breakthrough comes not from an internal 7% appraisal, but from switching employers for a 30% to 45% CTC jump. If your loans have already crossed 90+ DPD into NPA status by the time you land that offer:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li>Use your increased monthly savings bandwidth at the new employer to rapidly fund verified One-Time Settlements across every open NPA loan within 3 to 6 months, obtaining clean <Link href="/no-dues-certificate-after-loan-settlement" className="text-[#1F5EFF] font-semibold underline">No Dues Certificates</Link> for your <Link href="/new-job-background-verification-after-loan-settlement" className="text-[#1F5EFF] font-semibold underline">New Job BGV folder</Link>.</li>
                <li>Select an unlinked Corporate Salary Account bank on Day 1 at your new company so active legacy defaults cannot sweep your new paycheck.</li>
                <li>Once all debts are extinguished and emergency reserves are rebuilt a year later, you always retain the option to upgrade any tradeline from <Link href="/can-i-convert-settled-to-closed-later" className="text-[#1F5EFF] font-semibold underline">&quot;Settled&quot; to &quot;Closed&quot;</Link> if you plan a future prime home loan!</li>
              </ol>
            </section>

            {/* Section 11: Company Section */}
            <section id="company-resolution-section" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                11. SettleLoans Salaried Appraisal &amp; Debt Structuring Advisory
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Carrying ₹3 Lakhs or more in unsecured personal loans and unsure whether your upcoming appraisal increment makes restructuring viable or calls for One-Time Settlement? SettleLoans runs an honest post-tax FOIR diagnostic on your portfolio and manages end-to-end creditor negotiations, legal notice replies, and verified OTS closures while protecting your workplace privacy.
              </p>
              <CompanySection />
            </section>

            {/* Section 12: FAQs */}
            <section id="faqs" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                12. Frequently Asked Questions: Appraisal Increment vs Loan OTS
              </h2>

              <div className="space-y-3">
                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all" open>
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      1. Will a normal 8% to 12% corporate appraisal increment rescue a multi-personal-loan debt trap?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Rarely on high-FOIR debt stacks. On a Rs. 15 LPA CTC package, a 10% appraisal increment adds Rs. 12,500/month to headline CTC, but after Employer/Employee PF deductions, deferred variable-pay allocation, and 20.8% to 31.2% marginal tax, monthly net take-home increases by only Rs. 6,200 to Rs. 7,400. Once April rent and school-fee inflation absorb Rs. 3,500, less than Rs. 3,500 remains, which cannot bridge a Rs. 25,000 monthly EMI deficit.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      2. When does an upcoming promotion or increment make loan restructuring better than settlement?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Pre-NPA tenure extension or step-up restructuring works well when: (1) your loan is still Standard (0 to 30 DPD), (2) you have a confirmed 20% to 35% promotion or external offer jump, and (3) combining the net take-home increase with a 12-to-24-month tenure extension brings your all-in Fixed Obligation to Income Ratio (FOIR) cleanly below 48%.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      3. Should I borrow from loan apps in January and February just to survive until my April increment arrives?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Never. Taking 30% to 36% APR short-term bridge loans in Q4 hoping an uncertain April appraisal will bail you out is one of the fastest ways salaried professionals double their debt. Many companies defer appraisal payouts to June or award single-digit hikes, leaving you trapped with both legacy bank EMIs and aggressive app-loan repayments.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      4. Does negotiating a One-Time Settlement before my increment reflects on payslips make a difference?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes, if your loan is already in 90+ DPD NPA status and even your post-hike salary will remain insolvent (e.g., 70% FOIR). When Zonal Credit Committees evaluate exception waivers using your last 3 salary slips, a higher post-appraisal payslip can prompt collection officers to demand a higher settlement figure even though your real household deficit remains unserviceable.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      5. What is a Step-Up EMI restructuring plan for salaried employees?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Under RBI&apos;s stressed asset resolution framework, select banks offer standard-account borrowers a temporary lower EMI for the initial 6 to 9 months that steps up by 15% to 25% later to match documented career progression or confirmed promotion increments, without forgiving principal.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      6. What happens to retroactive appraisal arrears paid in May or June if my salary bank loan is overdue?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Many Indian IT and corporate employers announce April increments in May or June and credit 2 to 3 months of back-dated increment arrears together with June salary. If your personal loan at that same bank is overdue, internal Hold Balance sweeps will absorb 100% of your arrears + salary toward penal fees and interest unless you lawfully shifted HR payroll to an unlinked bank earlier.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      7. Can I use my retroactive appraisal arrears + performance bonus to fund a lump-sum OTS?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes. Combining 2 to 3 months of retroactive increment arrears, annual variable pay, and saved monthly EMI reserves in an unlinked bank account often creates a strong single-bullet fund to settle an aged NPA personal loan permanently against an official OTS Sanction Letter.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      8. What if my company freezes increments or awards a 0% hike in April while my loans are already overdue?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>A 0% increment freeze alongside 6% to 8% urban rent and medical inflation effectively acts as a real-income pay cut. If your combined unsecured debt is ₹3 Lakhs or higher and FOIR exceeds 60%+, abandoning wishful restructuring plans and transitioning to a structured multi-loan One-Time Settlement waterfall protects household solvency.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      9. Can a defaulted personal loan block my internal corporate promotion or appraisal rating?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>In standard IT, engineering, pharma, consulting, and corporate companies, internal annual appraisals and promotions evaluate workplace KPIs and project delivery, never your personal CIBIL report. Even in banking/BFSI employers, existing employees rarely undergo annual credit pulls unless moving into specialized regulated fiduciary seats.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      10. Can recovery agents call my reporting manager during appraisal review month to pressure me?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>No. Calling your manager, HR business partner, or colleagues is a severe breach of RBI Fair Practices norms and RBI&apos;s updated recovery conduct directions effective 1 January 2027, which strictly enforce borrower confidentiality and 8:00 AM to 7:00 PM calling hours.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      11. If I get a 35% hike by switching companies, should I foreclose, restructure, or still settle my NPA loans?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Run exact numbers on your new net take-home pay. If your loans are already 150+ DPD NPA with massive accumulated penal/interest claims, settling them cleanly via One-Time Settlement (and later upgrading &apos;Settled&apos; to &apos;Closed&apos; once savings rebuild, if desired) is often far more practical than trying to cure 6 months of recalled principal arrears overnight.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      12. What realistic OTS range applies if my loans are already NPA ahead of appraisal season?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Settlement outcomes are never guaranteed and depend on lender policy, NPA aging (90 to 180+ DPD), and single-shot cash availability. Across ₹3L+ unsecured salaried loans, realistic One-Time Settlement closures commonly land between 40% and 65% of total claimed dues, including full waiver of penal and bounce fees.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* Statutory References */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Regulatory &amp; Payroll Tax References (Checked 11 November 2026)
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
                  RBI Prudential Framework for Resolution of Stressed Assets
                </span>
                <span className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700">
                  Income Tax Act, 1961: Section 192 Marginal Slab &amp; Arrears TDS
                </span>
                <span className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700">
                  RBI Fair Practices Code: Workplace &amp; Appraisal Privacy Protections
                </span>
              </div>
            </section>

            {/* Related Salaried Guides */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Salaried Compensation, Restructuring &amp; OTS Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/use-annual-bonus-to-settle-personal-loan" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Use Annual Bonus to Settle Loans
                </Link>
                <Link href="/personal-loan-settlement-and-form-16-salary-slip-proof" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Form 16 &amp; Salary Slip Proof in OTS
                </Link>
                <Link href="/salary-cut-personal-loan-emi-restructuring-vs-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Salary Cut: Restructuring vs OTS
                </Link>
                <Link href="/personal-loan-settlement-vs-restructuring" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Settlement vs Restructuring Overview
                </Link>
                <Link href="/new-job-background-verification-after-loan-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  New Job BGV After Loan Settlement
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
                  <p className="text-xs text-slate-500">Salaried Compensation &amp; FOIR Analyst</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Models post-tax appraisal increments, step-up restructuring viability, and multi-loan One-Time Settlements for salaried professionals.
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
                <span>Appraisal Cycle Debt Audit</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Will Your Hike Really Cover ₹3L+ Loans?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Test your real post-tax increment against your loan stack before taking expensive Q4 bridge loans.
              </p>
              <a
                href="#settlement-assessment"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Check ₹3L+ Solvency Options
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Salaried Safeguards
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Post-Tax &amp; Post-PF FOIR Modeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Retroactive Arrears Sweep Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Strict Workplace &amp; Manager Privacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Verified Bank OTS &amp; NDC Closure</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
