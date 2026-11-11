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
  Scale,
  CheckCircle2,
  Calculator,
  FileCheck,
  UserCheck,
  Wallet,
  Briefcase
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Salary Cut: Loan Restructuring vs OTS | SettleLoans',
  description: 'Facing a salary cut, bench pay drop, or lower-CTC switch? Compare RBI personal loan restructuring vs ₹3L+ One-Time Settlement using FOIR math.',
  keywords: [
    'salary cut personal loan emi restructuring vs settlement',
    'unable to pay personal loan emi after salary cut',
    'personal loan tenure extension after pay cut india',
    'bench pay reduction personal loan default it employee',
    'foir calculation personal loan restructuring vs settlement',
    'lower ctc job switch personal loan settlement',
    'rbi loan restructuring for salaried employees',
    'personal loan one time settlement after pay cut'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/salary-cut-personal-loan-emi-restructuring-vs-settlement',
  },
  openGraph: {
    title: 'Salary Cut: Loan Restructuring vs OTS | SettleLoans',
    description: 'Facing a salary cut, bench pay drop, or lower-CTC switch? Compare RBI personal loan restructuring vs ₹3L+ One-Time Settlement using FOIR math.',
    url: 'https://www.settleloans.in/salary-cut-personal-loan-emi-restructuring-vs-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg',
        width: 1200,
        height: 675,
        alt: 'Salary Cut Personal Loan Restructuring vs Settlement Decision Matrix',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salary Cut: Loan Restructuring vs OTS | SettleLoans',
    description: 'Facing a salary cut, bench pay drop, or lower-CTC switch? Compare RBI personal loan restructuring vs ₹3L+ One-Time Settlement using FOIR math.',
    images: ['https://www.settleloans.in/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.settleloans.in/salary-cut-personal-loan-emi-restructuring-vs-settlement#breadcrumb",
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
          "name": "Salary Cut: Restructuring vs Settlement",
          "item": "https://www.settleloans.in/salary-cut-personal-loan-emi-restructuring-vs-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/salary-cut-personal-loan-emi-restructuring-vs-settlement#article",
      "headline": "Salary Cut Personal Loan EMI: Restructuring vs Settlement Guide",
      "description": "Quantitative financial and legal guide for Indian salaried employees hit by a pay cut, bench allowance drop, variable-pay freeze, or lower-CTC job switch. Uses FOIR cash-flow models to compare RBI tenure restructuring against ₹3L+ One-Time Settlement.",
      "image": "https://www.settleloans.in/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg",
      "datePublished": "2026-11-11T11:15:00+05:30",
      "dateModified": "2026-11-11T11:15:00+05:30",
      "mainEntityOfPage": "https://www.settleloans.in/salary-cut-personal-loan-emi-restructuring-vs-settlement",
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
      "@id": "https://www.settleloans.in/salary-cut-personal-loan-emi-restructuring-vs-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I restructure my personal loan EMI if my company cuts my monthly salary or variable pay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, subject to your lender's board-approved stressed asset policy under RBI guidelines. You must apply while your loan is still a Standard Account (typically 0 to 30 days past due) and submit your official CTC revision letter, before-and-after payslips, and salary bank statement. However, banks rarely reduce the interest rate; they usually extend tenure by 12 to 24 months, which lowers monthly EMIs by only 12% to 22%."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate whether a tenure extension will actually solve my salary cut?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Calculate your post-cut Fixed Obligation to Income Ratio (FOIR): divide your total monthly EMIs across all loans and credit cards by your new net monthly take-home salary. If extending loan tenure drops your FOIR below 45% to 50% while leaving adequate funds for rent, groceries, and medical expenses, restructuring works. If your post-restructuring FOIR still exceeds 65% to 75%, restructuring merely delays default while adding extra interest."
          }
        },
        {
          "@type": "Question",
          "name": "Will a bank approve a One-Time Settlement if I am still employed and receiving a reduced salary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You do not need to be completely unemployed to qualify for an unsecured personal loan settlement. When documented pay cuts, bench-pay reductions, loss of overseas/shift allowances, or a lower-CTC job switch push your monthly obligations beyond subsistence capacity and the loan crosses 90 days past due into NPA status, bank credit committees evaluate One-Time Settlement offers based on verified income compression."
          }
        },
        {
          "@type": "Question",
          "name": "Why did my bank reject my request to extend my personal loan tenure from 48 months to 84 months?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Indian private banks and NBFCs cap maximum unsecured personal loan tenure at 60 to 72 months (or until age 58 to 60 at retirement). If you already took a 60-month personal loan 12 months ago, the lender may only have 12 to 24 months of policy headroom left to extend, producing minimal monthly EMI relief."
          }
        },
        {
          "@type": "Question",
          "name": "Does personal loan restructuring hurt my CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, though less severely than a settlement. Under RBI credit bureau reporting rules, a modified loan caused by borrower financial stress is flagged as 'Restructured' on CIBIL, Experian, Equifax, and CRIF High Mark, typically lowering scores by 40 to 75 points and making fresh unsecured borrowing difficult for 12 to 24 months of clean repayment."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I restructure my personal loan after a salary cut and then miss two revised EMIs later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Missing instalments on an already restructured loan is dangerous. Under restructuring covenants, default triggers immediate revocation of concessions, reinstatement of original interest and penal schedules, and rapid NPA classification, meaning any extra interest paid during the restructured months is lost without reducing your principal."
          }
        },
        {
          "@type": "Question",
          "name": "What if my reduced salary is credited into the same bank where I hold the personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you transition from failed restructuring discussions into NPA settlement negotiations while your salary still hits the same bank (such as HDFC, ICICI, Axis, Kotak, or SBI), the bank's internal Standing Instruction or Hold Balance system can sweep up to 100% of your already-reduced paycheck. Lawfully shifting payroll credit through HR to an unlinked bank account protects household sustenance during settlement structuring."
          }
        },
        {
          "@type": "Question",
          "name": "What documents prove a genuine salaried pay cut to a bank's settlement or restructuring committee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lenders verify: (1) HR compensation revision letter, bench-policy deduction notice, or new employer offer letter showing lower CTC, (2) 3 months of pre-cut salary slips alongside 3 months of post-cut salary slips, (3) 6-month salary bank statement reflecting lower net credits, and (4) full CIBIL report showing total multi-lender EMI burden."
          }
        },
        {
          "@type": "Question",
          "name": "Is taking a debt consolidation loan better than restructuring or settling after a pay cut?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A lower-rate consolidation loan or top-up only works if your CIBIL score is still 730+ and your post-cut FOIR qualifies under bank underwriting norms (usually <= 50% to 55%). Once a pay cut pushes your FOIR above 65%, prime banks reject consolidation applications, and borrowing from high-interest NBFCs or fintech apps at 28% to 36% p.a. worsens the trap."
          }
        },
        {
          "@type": "Question",
          "name": "What realistic settlement haircut can a salaried borrower with a 30% pay cut expect?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Settlement percentages are never guaranteed and depend on lender policy, NPA aging (90 to 180+ DPD), and lump-sum availability. Because you still earn a reduced salary, banks scrutinize cash flow closely, yet realistic One-Time Settlement closures on ₹3L+ unsecured portfolios commonly land between 40% and 65% of total claimed dues, including full waiver of penal and bounce charges."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents contact my HR department to verify whether my salary was actually cut?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Collection agents have zero legal authority to call your HR manager, payroll team, or reporting supervisor. Income verification is conducted strictly through documents you submit directly to the bank's authorized credit or settlement desk. RBI's updated recovery conduct directions effective 1 January 2027 strictly reinforce workplace privacy and 8:00 AM to 7:00 PM contact rules."
          }
        },
        {
          "@type": "Question",
          "name": "Should I pause my SIPs and liquidate mutual funds to close a loan instead of settling after a pay cut?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If pausing discretionary equity SIPs or redeeming non-retirement liquid investments lets you foreclose high-interest debt in full while keeping 4 to 6 months of emergency rent and medical reserves intact, full foreclosure preserves your CIBIL score cleanly. However, if liquidating every rupee still leaves Rs. 6 Lakhs to Rs. 15 Lakhs of unserviceable debt, preserve that lump sum to fund formal One-Time Settlements."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'salaried-paycut-shock', title: '1. How Corporate Pay Cuts Break Salaried FOIR' },
  { id: 'worked-foir-math', title: '2. Worked Cash-Flow Math: 30% CTC Drop' },
  { id: 'rbi-restructuring-mechanics', title: '3. How RBI Salaried Restructuring Works' },
  { id: 'why-tenure-extension-fails', title: '4. Why Tenure Extension Fails Multi-PL Stacks' },
  { id: 'head-to-head-matrix', title: '5. Matrix: Restructuring vs ₹3L+ Settlement' },
  { id: 'same-bank-payroll-risk', title: '6. Same-Bank Salary Sweep Risk During Cuts' },
  { id: 'paycut-hardship-dossier', title: '7. Proving Pay-Cut Hardship to Credit Committees' },
  { id: 'consolidation-trap', title: '8. Avoiding the 30% APR Fintech Refinance Trap' },
  { id: 'cibil-future-credit', title: '9. CIBIL Impact: Restructured vs Settled Status' },
  { id: 'step-by-step-execution', title: '10. 5-Step Execution Roadmap for Borrowers' },
  { id: 'company-resolution-section', title: '11. SettleLoans Salaried Resolution Advisory' },
  { id: 'faqs', title: '12. Frequently Asked Questions' },
];

export default function SalaryCutRestructuringVsSettlementPage() {
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
            <Calculator className="w-3.5 h-3.5" />
            <span>Salaried FOIR Decision Matrix • Pay Cut &amp; Lower-CTC Triage</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Salary Cut Personal Loan EMI: Restructuring vs Settlement Guide
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5">
            Hit by a corporate pay cut, IT bench allowance drop, variable-pay freeze, or lower-CTC job switch while locked into fixed personal loan EMIs? Use real FOIR cash-flow math to decide between pre-NPA RBI tenure restructuring and a ₹3L+ One-Time Settlement.
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
              <span>RBI Prudential Norms Verified</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#settlement-assessment"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Check ₹3L+ Pay-Cut Relief Options</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Speak With a Debt Specialist
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
              <li className="font-bold text-slate-900" aria-current="page">Salary Cut: Restructuring vs Settlement</li>
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
                SettleLoans structures debt resolution for salaried borrowers whose combined unsecured debt across personal loans, top-ups, credit cards, and app loans is ₹3 Lakhs or higher. Below ₹3L, apply directly for bank tenure restructuring using Section 3.
              </p>
            </div>
          </aside>

          {/* Main Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">

            {/* Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Executive Summary: Pay Cut vs Fixed EMIs</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>The 50% FOIR Threshold:</strong> If extending your personal loan tenure brings total monthly EMIs below 50% of your reduced net salary, pre-NPA RBI restructuring preserves repayment continuity without NPA default.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Why Tenure Extensions Under-Deliver:</strong> Extending a 14.5% personal loan by 24 months typically trims monthly EMI outflow by only 14% to 21% while adding 25% to 35% in extra lifetime interest. It cannot cure a 30% to 40% salary drop on a multi-loan stack.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Active Employees Can Settle:</strong> Complete unemployment is not required for One-Time Settlement. Documented CTC reductions, bench-pay cuts, or lower-pay job switches that push FOIR past 70%+ qualify for post-90-DPD compromise evaluation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Protect Reduced Take-Home First:</strong> Never enter NPA settlement talks while your reduced salary still hits the same bank holding your personal loan; shift payroll legally via HR first.</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="salaried-paycut-shock" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. How Corporate Pay Cuts Break Salaried FOIR Overnight
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When banks underwrite unsecured salaried personal loans in India, their credit engines approve borrowing limits based on your peak historical payslips. If you earned Rs. 1,15,000 net per month during a strong tech, BFSI, pharmaceutical, or consulting cycle, banks routinely sanctioned personal loans and top-ups up to a <strong>50% to 60% Fixed Obligation to Income Ratio (FOIR)</strong>, locking you into Rs. 58,000 to Rs. 65,000 of rigid monthly EMIs for 48 to 60 months.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unlike home loans where property collateral gives banks multi-decade flexibility, unsecured personal loans leave zero margin when corporate compensation compresses. Across Indian metros, salaried income drops commonly arrive in five forms without making headlines as formal layoffs:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>IT Bench &amp; Project Allowance Removal:</strong> Moving off an onsite-linked, UK/US shift, or billable client deployment onto internal bench strips Rs. 18,000 to Rs. 35,000 of monthly project and shift allowances overnight.</li>
                <li><strong>Startup &amp; Mid-Market Across-the-Board Pay Cuts:</strong> Runway-extension restructurings where leadership cuts cash base pay by 20% to 30% in exchange for illiquid ESOPs.</li>
                <li><strong>Sales, EdTech, Logistics &amp; Real Estate Variable Collapse:</strong> Roles structured as 65% fixed and 35% monthly/quarterly incentives where territory realignment drops monthly take-home by a third.</li>
                <li><strong>Forced Lower-CTC Re-Employment:</strong> Accepting an Rs. 11 LPA role after losing an Rs. 17 LPA role simply to restart monthly cash flow after a 4-month layoff.</li>
                <li><strong>Unpaid Medical / Maternity / Eldercare Sabbaticals:</strong> Temporary loss of half-pay or full-pay bandwidth due to acute family hospitalisation.</li>
              </ul>
            </section>

            {/* Salaried Combined-Debt Assessment Framing + Funnel */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                <Wallet className="w-4 h-4" />
                <span>Pay-Cut Debt Diagnostic (₹3,00,000 Combined Minimum)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Evaluating restructuring or settlement one lender at a time fails when multiple EMIs compete for a smaller paycheck. Enter your <strong>total combined unsecured debt</strong> across all personal loans, top-ups, credit cards, and fintech loans below (full legal and settlement structuring applies from <strong>₹3 Lakhs and above</strong>).
              </p>
            </div>

            <LoanSettlementAssessmentFunnel />

            {/* Section 2 */}
            <section id="worked-foir-math" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Worked Cash-Flow Math: Why a 30% Pay Cut Causes an 80% Trap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Most salaried borrowers underestimate how violently a 28% to 32% net pay drop distorts household solvency because house rent, school fees, utilities, and loan EMIs are 100% fixed. Examine this realistic Bengaluru / Pune / Hyderabad salaried profile carrying Rs. 14.5 Lakhs in combined unsecured personal loans (HDFC PL + ICICI Top-Up + Bajaj Finance PL):
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Monthly Household Line Item</th>
                      <th>Before Pay Cut (Peak CTC)</th>
                      <th>After 31% Net Pay Drop</th>
                      <th>With Bank Tenure Restructuring (+24m)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Net Monthly Salary Credited</strong></td>
                      <td>Rs. 1,12,000</td>
                      <td><strong>Rs. 77,000</strong></td>
                      <td><strong>Rs. 77,000</strong></td>
                    </tr>
                    <tr>
                      <td><strong>Combined Personal Loan EMIs</strong></td>
                      <td>Rs. 54,000 (48.2% FOIR)</td>
                      <td>Rs. 54,000 (<strong>70.1% FOIR</strong>)</td>
                      <td>Rs. 44,200 (<strong>57.4% FOIR</strong>)</td>
                    </tr>
                    <tr>
                      <td><strong>Essential Rent, Food, School &amp; Medical</strong></td>
                      <td>Rs. 43,000</td>
                      <td>Rs. 39,000 (trimmed to bare minimum)</td>
                      <td>Rs. 39,000</td>
                    </tr>
                    <tr>
                      <td><strong>Monthly Surplus / (Deficit)</strong></td>
                      <td>+ Rs. 15,000 surplus</td>
                      <td><strong>- Rs. 16,000 monthly deficit</strong></td>
                      <td><strong>- Rs. 6,200 monthly deficit</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Look closely at Column 4. Even if every single lender agrees to extend loan tenure by 24 months (which rarely happens across three competing institutions simultaneously), the borrower&apos;s monthly EMI drops by only Rs. 9,800, leaving a <strong>structural deficit of Rs. 6,200 every single month</strong> while adding over Rs. 2.8 Lakhs in extra compound interest! Borrowers who sign unviable restructuring plans routinely fund that Rs. 6,200 gap using credit card cash withdrawals or instant loan apps until the entire stack collapses 6 months later.
              </p>
            </section>

            {/* Section 3 */}
            <section id="rbi-restructuring-mechanics" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. How RBI Personal Loan Restructuring Works for Salaried Staff
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For a general conceptual overview of credit scores across modification options, you can also review our <Link href="/personal-loan-settlement-vs-restructuring" className="text-[#1F5EFF] font-semibold underline">foundational settlement vs restructuring comparison</Link>. Specifically for <strong>salaried pay-cut cases</strong>, banks operate under the Reserve Bank of India&apos;s <em>Prudential Framework for Resolution of Stressed Assets</em>. Three strict operational rules govern whether a bank will restructure your personal loan:
              </p>
              <ol className="list-decimal pl-5 space-y-2.5 text-sm sm:text-base text-slate-700">
                <li><strong>You Must Apply Before Deep Delinquency (0 to 30 DPD):</strong> Retail loan restructuring desks only entertain tenure extensions or step-up EMI schedules while your account is classified as Standard or early SMA-0. Once you miss three EMIs and cross 90 DPD into Non-Performing Asset (NPA) status, retail restructuring portals lock out and only recovery or compromise settlement options remain.</li>
                <li><strong>Maximum Age &amp; Policy Tenure Caps Apply:</strong> Unsecured personal loans almost universally carry an absolute tenure ceiling of 60 months (occasionally 72 months for CAT-A corporate employees) or borrower age 58/60 at maturity. If your original loan was already booked for 60 months, the bank&apos;s system often has <strong>zero remaining tenure</strong> to extend!</li>
                <li><strong>No Principal Haircut &amp; Higher Total Outgo:</strong> Restructuring never forgives Rs. 1 of principal. Any 3-month principal moratorium simply capitalizes or defers interest over the remaining instalments, raising your total lifetime repayment to 120% to 138% of your current outstanding balance.</li>
              </ol>
            </section>

            {/* Section 4 */}
            <section id="why-tenure-extension-fails" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. When Restructuring Works vs When It Becomes a Sunk-Cost Trap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Restructuring is the <strong>right choice</strong> when all four of the following conditions hold true:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li>Your pay cut or allowance loss is mild (10% to 18%) or temporary (e.g., 4-month bench rotation with confirmed client onboarding ahead).</li>
                <li>You hold only 1 or 2 loans with at least 24 months of unutilized tenure headroom remaining under the bank&apos;s 60-month policy cap.</li>
                <li>The revised monthly EMI brings your all-in FOIR cleanly below <strong>48% of net reduced salary</strong>, leaving a genuine Rs. 5,000+ monthly emergency buffer.</li>
                <li>You plan to apply for a prime home loan or education loan within the next 18 months and want to avoid an NPA &quot;Settled&quot; bureau status at all costs.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Conversely, restructuring becomes a <strong>dangerous sunk-cost trap</strong> when your CTC has permanently reset 25% to 45% lower, your combined unsecured debt exceeds ₹3 Lakhs to ₹25 Lakhs across multiple banks and NBFCs, or your current personal loans were already taken for 5-year tenures. Signing a partial step-down agreement that you still cannot afford after Month 4 wastes precious savings and triggers an immediate breach-of-restructuring recall notice.
              </p>
            </section>

            {/* Section 5 */}
            <section id="head-to-head-matrix" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Salaried Pay-Cut Matrix: Tenure Restructuring vs ₹3L+ OTS
              </h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Salaried Decision Dimension</th>
                      <th>RBI Tenure Restructuring / Step-Up EMI</th>
                      <th>One-Time Settlement (OTS) on ₹3L+ Debt</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Severity of Net Pay Drop</strong></td>
                      <td>10% to 20% temporary dip; post-revision FOIR stays under 50%.</td>
                      <td>25% to 50%+ permanent CTC drop or multi-loan stack pushing FOIR above 65% to 90%.</td>
                    </tr>
                    <tr>
                      <td><strong>Principal &amp; Charge Relief</strong></td>
                      <td>0% principal waiver; lifetime interest outflow increases significantly.</td>
                      <td>100% waiver of penal/bounce fees plus negotiated principal/interest haircut (realistic closures often 40% to 65% of total dues, never guaranteed).</td>
                    </tr>
                    <tr>
                      <td><strong>Account Stage Required</strong></td>
                      <td>Standard / SMA-0 (before 30 DPD).</td>
                      <td>NPA stage (typically 90 to 180+ DPD) with documented pay-cut dossier.</td>
                    </tr>
                    <tr>
                      <td><strong>Same-Bank Salary Account Risk</strong></td>
                      <td>Low if revised SI mandate is honoured every month.</td>
                      <td>High unless salary credit is shifted via HR to an unlinked bank before default.</td>
                    </tr>
                    <tr>
                      <td><strong>Time to Debt Freedom</strong></td>
                      <td>Stretches 4 to 6 more years of continuous monthly deductions.</td>
                      <td>Permanent debt closure in 3 to 9 months via lump-sum or 2-to-3 tranche OTS letters.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6 */}
            <section id="same-bank-payroll-risk" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Critical Warning: Same-Bank Salary Account Set-Off After Pay Cuts
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an unemployed borrower defaults, Rs. 0 salary hits their bank account each month. When an <strong>employed borrower with a 35% pay cut</strong> defaults on a personal loan held at their <strong>own salary bank</strong>, Rs. 65,000 or Rs. 75,000 still hits that Corporate Salary Account on the last working day of every month!
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If your reduced salary continues arriving at the same bank where your personal loan enters default, internal Standing Instructions (SI) and automated Hold Balance liens will deduct the full original EMI plus Rs. 450 to Rs. 750 bounce fees and penal charges right out of your shrunken paycheck, leaving you unable to pay rent. Furthermore, while your bank can sweep your paycheck effortlessly every month, its recovery committee has zero incentive to approve a discounted One-Time Settlement.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before allowing an unserviceable same-bank loan to enter settlement structuring, lawfully update your HR payroll bank account to an unlinked institution. Check exact bank-level mechanics in our guides for <Link href="/hdfc-salary-account-auto-debit-personal-loan-default" className="text-[#1F5EFF] font-semibold underline">HDFC Bank</Link>, <Link href="/icici-salary-account-auto-debit-personal-loan-default" className="text-[#1F5EFF] font-semibold underline">ICICI Bank</Link>, <Link href="/axis-salary-account-auto-debit-personal-loan-default" className="text-[#1F5EFF] font-semibold underline">Axis Bank</Link>, <Link href="/kotak-salary-account-auto-debit-personal-loan-default" className="text-[#1F5EFF] font-semibold underline">Kotak Mahindra Bank</Link>, and <Link href="/sbi-salary-account-auto-debit-personal-loan-default" className="text-[#1F5EFF] font-semibold underline">SBI salary accounts</Link>.
              </p>
            </section>

            {/* Section 7 */}
            <section id="paycut-hardship-dossier" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Building Your Salaried Pay-Cut Hardship Dossier
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because your CIBIL employment segment and EPFO/bank trails show that you are still employed, bank credit officers scrutinize active-salaried settlement requests far more rigorously than layoff cases to filter out strategic defaulters. A credible salaried pay-cut dossier compiles objective, verifiable paper trails:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Before-and-After Payslip Pairings:</strong> 3 consecutive payslips prior to the compensation cut alongside your latest 3 payslips highlighting reduced basic pay, zeroed project/shift allowance, or withheld variable pay.</li>
                <li><strong>HR Revision Letter or New Appointment Letter:</strong> Official HR circular/letter confirming compensation revision, bench policy deduction, or your new employer&apos;s offer letter demonstrating a lower CTC package.</li>
                <li><strong>Form 16 / AIS Comparison (Where Applicable):</strong> Useful when variable bonuses or commissions dropped sharply year-on-year (see our detailed <Link href="/personal-loan-settlement-and-form-16-salary-slip-proof" className="text-[#1F5EFF] font-semibold underline">Form 16 &amp; Salary Slip Settlement Proof Guide</Link>).</li>
                <li><strong>Household Subsistence &amp; Multi-Lender Obligation Sheet:</strong> Registered rent agreement, dependent medical/school receipts, and complete CIBIL bureau extract proving that combined EMIs exceed 70%+ of net pay.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="consolidation-trap" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Avoiding the 28% to 36% APR Instant App &amp; Refinance Trap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In the first 60 days after a salary cut, targeted digital ads tempt stressed employees with &quot;Instant Salaried Overdraft&quot; or &quot;Debt Consolidation Loans for Low CIBIL&quot;. Prime banks (charging 10.75% to 14% p.a.) automatically decline consolidation applications once your post-cut FOIR crosses 55%. The only lenders approving fresh credit at 70% FOIR are high-yield NBFCs and digital lending apps charging <strong>26% to 36% APR plus 3% to 5% upfront processing fees</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowing Rs. 2 Lakhs at 32% APR simply to pay 3 months of 13% bank EMIs multiplies your debt velocity and introduces aggressive short-cycle collection calls. Never take high-interest bridge debt to disguise a structural income reduction.
              </p>
            </section>

            {/* Section 9 */}
            <section id="cibil-future-credit" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. CIBIL Impact &amp; Career Mobility: Restructured vs Settled
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Salaried professionals naturally worry about two downstream consequences: future credit eligibility and corporate background verification (BGV) when switching back to a higher-paying job later.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Credit Bureau Recovery:</strong> A &quot;Restructured&quot; account dips your score moderately (40 to 75 points) and ages cleanly if you never miss a revised EMI over the next 4 to 5 years. A &quot;Settled&quot; account drops CIBIL by 75 to 130 points initially, sets Balance Overdue to <strong>Rs. 0</strong>, stops monthly DPD decay permanently, and allows disciplined salaried borrowers to rebuild scores toward 720+ over 18 to 36 months using FD-backed secured cards.</li>
                <li><strong>Corporate Job Switches:</strong> Standard IT, engineering, pharma, consulting, and operations BGVs verify education, employment history, and criminal records, not CIBIL scores. Even for BFSI roles where credit screening applies, a closed &quot;Settled&quot; loan backed by a No Dues Certificate is viewed far more favourably than active unpaid defaults (read <Link href="/new-job-background-verification-after-loan-settlement" className="text-[#1F5EFF] font-semibold underline">New Job BGV After Loan Settlement</Link>).</li>
                <li><strong>Strict Workplace Privacy:</strong> Under RBI Fair Practices norms and the updated RBI recovery conduct rules effective <strong>1 January 2027</strong>, recovery agents cannot visit your office floor without consent, contact HR/colleagues, or call outside <strong>8:00 AM to 7:00 PM</strong>.</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section id="step-by-step-execution" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                10. Five-Step Action Plan After a Salaried Pay Cut
              </h2>
              <ol className="list-decimal pl-5 space-y-2.5 text-sm sm:text-base text-slate-700">
                <li><strong>Run Exact Post-Cut FOIR Today:</strong> Divide all fixed monthly loan and card EMIs by your actual reduced net monthly credit.</li>
                <li><strong>If Post-Extension FOIR &lt; 48%:</strong> Apply in writing to your lender&apos;s customer service desk before missing any EMI, attaching payslips and HR revision proof to request a formal tenure extension.</li>
                <li><strong>If FOIR Exceeds 65%+ on ₹3L+ Debt:</strong> Stop taking fresh bridge loans, protect incoming reduced salary by updating HR payroll to an unlinked savings account, and stop multi-presentment NACH bounce drains lawfully.</li>
                <li><strong>Build Dedicated Settlement Reserves:</strong> Channel the Rs. 25,000 to Rs. 45,000 you save each month from stopped unviable EMIs into a dedicated, unlinked savings corpus over 3 to 6 months.</li>
                <li><strong>Close Loans Sequentially via Verified OTS Letters:</strong> Once accounts enter NPA compromise windows, settle lenders one by one (starting with aggressive NBFCs or high-penal lenders; see <Link href="/multiple-personal-loans-hdfc-icici-bajaj-which-to-settle-first" className="text-[#1F5EFF] font-semibold underline">Multiple Loans: Which to Settle First</Link>) strictly against authenticated bank OTS Sanction Letters and No Dues Certificates.</li>
              </ol>
            </section>

            {/* Section 11: Company Section */}
            <section id="company-resolution-section" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                11. SettleLoans Advisory for Salaried Pay-Cut Borrowers
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When your combined unsecured debt is ₹3 Lakhs or higher and a salary cut makes standard EMIs mathematically impossible, SettleLoans structures your entire multi-bank settlement calendar around your real monthly savings capacity while shielding your workplace privacy and handling creditor communications end-to-end.
              </p>
              <CompanySection />
            </section>

            {/* Section 12: FAQs */}
            <section id="faqs" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                12. Frequently Asked Questions: Salary Cut Loan Relief
              </h2>

              <div className="space-y-3">
                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all" open>
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      1. Can I restructure my personal loan EMI if my company cuts my monthly salary or variable pay?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes, subject to your lender&apos;s board-approved stressed asset policy under RBI guidelines. You must apply while your loan is still a Standard Account (typically 0 to 30 days past due) and submit your official CTC revision letter, before-and-after payslips, and salary bank statement. However, banks rarely reduce the interest rate; they usually extend tenure by 12 to 24 months, which lowers monthly EMIs by only 12% to 22%.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      2. How do I calculate whether a tenure extension will actually solve my salary cut?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Calculate your post-cut Fixed Obligation to Income Ratio (FOIR): divide your total monthly EMIs across all loans and credit cards by your new net monthly take-home salary. If extending loan tenure drops your FOIR below 45% to 50% while leaving adequate funds for rent, groceries, and medical expenses, restructuring works. If your post-restructuring FOIR still exceeds 65% to 75%, restructuring merely delays default while adding extra interest.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      3. Will a bank approve a One-Time Settlement if I am still employed and receiving a reduced salary?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes. You do not need to be completely unemployed to qualify for an unsecured personal loan settlement. When documented pay cuts, bench-pay reductions, loss of overseas/shift allowances, or a lower-CTC job switch push your monthly obligations beyond subsistence capacity and the loan crosses 90 days past due into NPA status, bank credit committees evaluate One-Time Settlement offers based on verified income compression.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      4. Why did my bank reject my request to extend my personal loan tenure from 48 months to 84 months?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Most Indian private banks and NBFCs cap maximum unsecured personal loan tenure at 60 to 72 months (or until age 58 to 60 at retirement). If you already took a 60-month personal loan 12 months ago, the lender may only have 12 to 24 months of policy headroom left to extend, producing minimal monthly EMI relief.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      5. Does personal loan restructuring hurt my CIBIL score?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes, though less severely than a settlement. Under RBI credit bureau reporting rules, a modified loan caused by borrower financial stress is flagged as &apos;Restructured&apos; on CIBIL, Experian, Equifax, and CRIF High Mark, typically lowering scores by 40 to 75 points and making fresh unsecured borrowing difficult for 12 to 24 months of clean repayment.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      6. What happens if I restructure my personal loan after a salary cut and then miss two revised EMIs later?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Missing instalments on an already restructured loan is dangerous. Under restructuring covenants, default triggers immediate revocation of concessions, reinstatement of original interest and penal schedules, and rapid NPA classification, meaning any extra interest paid during the restructured months is lost without reducing your principal.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      7. What if my reduced salary is credited into the same bank where I hold the personal loan?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>If you transition from failed restructuring discussions into NPA settlement negotiations while your salary still hits the same bank (such as HDFC, ICICI, Axis, Kotak, or SBI), the bank&apos;s internal Standing Instruction or Hold Balance system can sweep up to 100% of your already-reduced paycheck. Lawfully shifting payroll credit through HR to an unlinked bank account protects household sustenance during settlement structuring.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      8. What documents prove a genuine salaried pay cut to a bank&apos;s settlement or restructuring committee?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Lenders verify: (1) HR compensation revision letter, bench-policy deduction notice, or new employer offer letter showing lower CTC, (2) 3 months of pre-cut salary slips alongside 3 months of post-cut salary slips, (3) 6-month salary bank statement reflecting lower net credits, and (4) full CIBIL report showing total multi-lender EMI burden.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      9. Is taking a debt consolidation loan better than restructuring or settling after a pay cut?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>A lower-rate consolidation loan or top-up only works if your CIBIL score is still 730+ and your post-cut FOIR qualifies under bank underwriting norms (usually &lt;= 50% to 55%). Once a pay cut pushes your FOIR above 65%, prime banks reject consolidation applications, and borrowing from high-interest NBFCs or fintech apps at 28% to 36% p.a. worsens the trap.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      10. What realistic settlement haircut can a salaried borrower with a 30% pay cut expect?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Settlement percentages are never guaranteed and depend on lender policy, NPA aging (90 to 180+ DPD), and lump-sum availability. Because you still earn a reduced salary, banks scrutinize cash flow closely, yet realistic One-Time Settlement closures on ₹3L+ unsecured portfolios commonly land between 40% and 65% of total claimed dues, including full waiver of penal and bounce charges.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      11. Can recovery agents contact my HR department to verify whether my salary was actually cut?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>No. Collection agents have zero legal authority to call your HR manager, payroll team, or reporting supervisor. Income verification is conducted strictly through documents you submit directly to the bank&apos;s authorized credit or settlement desk. RBI&apos;s updated recovery conduct directions effective 1 January 2027 strictly reinforce workplace privacy and 8:00 AM to 7:00 PM contact rules.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      12. Should I pause my SIPs and liquidate mutual funds to close a loan instead of settling after a pay cut?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>If pausing discretionary equity SIPs or redeeming non-retirement liquid investments lets you foreclose high-interest debt in full while keeping 4 to 6 months of emergency rent and medical reserves intact, full foreclosure preserves your CIBIL score cleanly. However, if liquidating every rupee still leaves Rs. 6 Lakhs to Rs. 15 Lakhs of unserviceable debt, preserve that lump sum to fund formal One-Time Settlements.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* Statutory & Regulatory References */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Regulatory &amp; Banking References (Checked 11 November 2026)
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
                  RBI Framework for Compromise Settlements &amp; Technical Write-Offs
                </span>
                <span className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700">
                  Code of Civil Procedure, 1908: Section 60(1)(i) Salary Exemption
                </span>
              </div>
            </section>

            {/* Related Salaried Guides */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Salaried Personal Loan &amp; Restructuring Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/personal-loan-settlement-vs-restructuring" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Settlement vs Restructuring Overview
                </Link>
                <Link href="/loan-settlement-for-salaried-people" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Loan Settlement for Salaried People
                </Link>
                <Link href="/unable-to-pay-personal-loan-emi-due-to-job-loss" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  90-Day Job-Loss EMI Plan
                </Link>
                <Link href="/bank-freeze-salary-account-loan-default" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Salary Account Freeze Guide
                </Link>
                <Link href="/multiple-personal-loans-hdfc-icici-bajaj-which-to-settle-first" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Multiple Loans: Which to Settle First
                </Link>
                <Link href="/new-job-background-verification-after-loan-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  New Job BGV After Settlement
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
                  <p className="text-xs text-slate-500">Salaried Debt &amp; FOIR Restructuring Analyst</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Helps salaried employees evaluate FOIR viability after pay cuts, bench transitions, and lower-CTC job switches across private banks and NBFCs.
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
                <span>Pay-Cut Debt Diagnostic</span>
              </div>
              <div className="font-bold text-base text-white mb-2">EMIs Taking 65%+ of Your Reduced Pay?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                If your combined unsecured debt is ₹3 Lakhs or higher, get an honest mathematical comparison between tenure restructuring and lump-sum OTS.
              </p>
              <a
                href="#settlement-assessment"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Run ₹3L+ Eligibility Check
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Salaried Safeguards
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Post-Cut FOIR Cash-Flow Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Strict Workplace &amp; HR Privacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Pay-Cut Hardship Dossier Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Authenticated Bank OTS Sanction Verification</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
