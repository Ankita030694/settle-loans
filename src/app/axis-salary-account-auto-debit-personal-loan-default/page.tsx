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
  Landmark,
  ShieldAlert,
  Scale,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  UserCheck,
  Wallet,
  Briefcase
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Axis Salary Account Auto-Debit Default | SettleLoans',
  description: 'Axis Bank sweeping your salary account for an overdue personal loan? Understand SI bounce fees, set-off rights, payroll change, and settlement.',
  keywords: [
    'axis salary account auto debit personal loan default',
    'axis bank lien on salary account personal loan overdue',
    'axis personal loan emi bounce charges 339',
    'stop axis standing instruction personal loan salary account',
    'axis priority burgundy salary account set off loan',
    'shift axis salary account hr payroll loan default',
    'section 60 cpc axis bank salary freeze',
    'axis bank personal loan settlement salaried'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/axis-salary-account-auto-debit-personal-loan-default',
  },
  openGraph: {
    title: 'Axis Salary Account Auto-Debit Default | SettleLoans',
    description: 'Axis Bank sweeping your salary account for an overdue personal loan? Understand SI bounce fees, set-off rights, payroll change, and settlement.',
    url: 'https://www.settleloans.in/axis-salary-account-auto-debit-personal-loan-default',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/axis-bank-personal-loan-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'Axis Bank Salary Account Auto-Debit and Personal Loan Default Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axis Salary Account Auto-Debit Default | SettleLoans',
    description: 'Axis Bank sweeping your salary account for an overdue personal loan? Understand SI bounce fees, set-off rights, payroll change, and settlement.',
    images: ['https://www.settleloans.in/images/infographics/axis-bank-personal-loan-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.settleloans.in/axis-salary-account-auto-debit-personal-loan-default#breadcrumb",
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
          "name": "Salary Account Freeze Guide",
          "item": "https://www.settleloans.in/bank-freeze-salary-account-loan-default"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Axis Salary Account Auto-Debit & Loan Default",
          "item": "https://www.settleloans.in/axis-salary-account-auto-debit-personal-loan-default"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/axis-salary-account-auto-debit-personal-loan-default#article",
      "headline": "Axis Bank Salary Account Auto-Debit on Loan Default",
      "description": "Complete banking and legal manual for salaried borrowers holding an Axis Bank Salary Account (Easy Access, Prime, Priority, Liberty, Burgundy, or Citi-migrated Suvidha) alongside an Axis Personal Loan. Details Rs. 339 to Rs. 500 bounce tariffs, 8% p.a. penal charges, Section 60 CPC limits, HR payroll shift, and salaried One-Time Settlement.",
      "image": "https://www.settleloans.in/images/infographics/axis-bank-personal-loan-settlement.jpg",
      "datePublished": "2026-11-11T10:30:00+05:30",
      "dateModified": "2026-11-11T10:30:00+05:30",
      "mainEntityOfPage": "https://www.settleloans.in/axis-salary-account-auto-debit-personal-loan-default",
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
      "@id": "https://www.settleloans.in/axis-salary-account-auto-debit-personal-loan-default#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why did Axis Bank sweep my salary account on payday for an overdue personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When your Axis Bank Salary Account (Easy Access, Prime, Priority, Burgundy, or migrated Citi Suvidha) shares a Customer ID with an Axis Personal Loan, overdue EMIs trigger internal Standing Instruction sweeps and Lien Amounts in the Axis Mobile 'open' app. However, unnotified 100% sweeps of subsistence salary conflict with Section 60(1)(i) CPC wage exemptions and fair banking standards."
          }
        },
        {
          "@type": "Question",
          "name": "What are Axis Bank's official EMI bounce and penal charges on personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "According to Axis Bank's official Personal Loan Interest Rates and Charges schedule (checked on 11 November 2026), Standing Instruction, ECS, or NACH dishonour charges are Rs. 339 to Rs. 500 per bounce instance plus 18% GST depending on the personal loan variant and Key Fact Statement. Delayed instalments attract non-capitalized penal charges of 8% per annum plus GST on the overdue EMI amount."
          }
        },
        {
          "@type": "Question",
          "name": "Does a Citibank Suvidha Salary Account migrated to Axis Bank face the same auto-debit set-off?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Following the full integration of Citibank India's retail and Suvidha corporate salary portfolio into Axis Bank, migrated Suvidha salary accounts and personal loans operate under unified Axis Customer IDs, exposing linked salary accounts to internal Axis Standing Instructions and overdue lien sweeps."
          }
        },
        {
          "@type": "Question",
          "name": "Can I stop an internal Axis Bank Standing Instruction through the Axis 'open' mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. While external merchant e-mandates can be managed online, Axis Bank locks internal Standing Instructions linked to active Axis Personal Loans unless a verified alternate bank NACH mandate is approved on a performing loan (attracting a Rs. 500 + GST swap fee)."
          }
        },
        {
          "@type": "Question",
          "name": "How does Section 60(1)(i) CPC protect salaried borrowers against 100% Axis Bank sweeps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 60(1)(i) of the Code of Civil Procedure exempts the first Rs. 1,000 plus two-thirds of the remaining salary from civil debt attachment. Even a formal civil court decree cannot seize that subsistence portion, giving salaried employees strong legal grounds to contest unilateral 100% salary appropriations before Axis Bank's Principal Nodal Officer and the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "Is shifting my corporate payroll from Axis Bank to another bank through HR lawful?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Private-sector employees have the lawful right to update their payroll bank account on their employer's HRMS portal before monthly payroll lock-in so essential living expenses remain funded while loan restructuring or One-Time Settlement talks proceed transparently."
          }
        },
        {
          "@type": "Question",
          "name": "What happens to my Axis Priority or Easy Access Salary Account after 3 months without salary credits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If corporate salary credits do not arrive for 3 consecutive months, Axis Bank withdraws zero-balance salary benefits and converts the account into a regular savings category subject to Average Monthly Balance requirements (Rs. 12,000 to Rs. 25,000+ depending on tier), generating monthly shortfall fees if left unmanaged."
          }
        },
        {
          "@type": "Question",
          "name": "Can Axis Bank freeze or debit my new salary account at SBI or HDFC without a court order?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Axis Bank has no administrative power to debit or freeze an account at another bank unless you registered an NPCI NACH mandate on that account or Axis obtains a judicial attachment order from a competent court or tribunal."
          }
        },
        {
          "@type": "Question",
          "name": "Will Axis Bank negotiate a personal loan One-Time Settlement if I am still employed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, once the loan crosses 90+ days past due into NPA classification and you present verifiable hardship documentation showing that net take-home pay cannot service total debt obligations across all loans and cards."
          }
        },
        {
          "@type": "Question",
          "name": "What settlement range does Axis Bank realistically consider on defaulted salaried personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Outcomes are never fixed or guaranteed. For unsecured Axis personal loans aged past 90 to 180+ days in NPA with documented cash-flow distress, negotiated One-Time Settlements commonly range between 40% and 65% of total claimed dues, starting with full waiver of 8% penal charges and bounce fees."
          }
        },
        {
          "@type": "Question",
          "name": "How do I ensure Axis Bank lifts the Lien Amount on my savings account after OTS payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Insist on an official Axis Bank OTS Sanction Letter confirming full extinguishment of loan claims and removal of linked Customer ID liens, remit the agreed settlement directly into the Personal Loan account number (never via the held salary account), and collect your No Dues Certificate within 30 days."
          }
        },
        {
          "@type": "Question",
          "name": "Where do I escalate if Axis Bank sweeps 100% of my salary without prior notice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Submit a Level 1 grievance on axisbank.com, escalate to the Circle Nodal Officer, and then to Axis Bank's Principal Nodal Officer citing Section 60(1)(i) CPC and lack of prior set-off notice. If unresolved after 30 days, file a complaint on the RBI CMS portal at cms.rbi.org.in."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'axis-salary-pl-nexus', title: '1. Axis Salary Tiers & Citi Suvidha Linkage' },
  { id: 'axis-si-vs-nach', title: '2. Internal SI Sweeps vs External NACH' },
  { id: 'axis-official-charges', title: '3. Official ₹339 Bounce & 8% Penal Tariff' },
  { id: 'axis-setoff-cpc60', title: '4. Right of Set-Off vs Section 60 CPC' },
  { id: 'open-app-lien-holds', title: '5. Axis "open" App Lien & Hold Mechanics' },
  { id: 'hr-payroll-change', title: '6. Lawful HR Payroll Account Switch' },
  { id: 'axis-amb-conversion', title: '7. 3-Month Salary Non-Credit AMB Trap' },
  { id: 'axis-pno-escalation', title: '8. Axis Nodal & RBI CMS Escalation' },
  { id: 'axis-salaried-ots', title: '9. Axis Salaried Settlement Roadmap (₹3L+)' },
  { id: 'axis-ots-checklist', title: '10. OTS Verification & Lien Lift Audit' },
  { id: 'company-resolution-section', title: '11. SettleLoans Salaried Legal Support' },
  { id: 'faqs', title: '12. Frequently Asked Questions' },
];

export default function AxisSalaryAccountAutoDebitDefaultPage() {
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

      {/* Hero */}
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
            <Briefcase className="w-3.5 h-3.5" />
            <span>Salaried Borrower Defense • Axis Salary &amp; Citi-Migrated PL</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Axis Bank Salary Account Auto-Debit on Loan Default
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5">
            How Axis Bank internal Standing Instructions, `open` app Lien holds, and ₹339 to ₹500 bounce charges affect Easy Access, Priority, Burgundy, and migrated Citi Suvidha salary accounts, and how salaried borrowers protect wages and settle ₹3L+ debt.
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
              <span>Section 60 CPC &amp; Tariff Verified</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#settlement-assessment"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Check ₹3L+ Salaried Settlement Options</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Urgent Salary Hold Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="w-full bg-slate-50 border-b border-slate-200 overflow-x-auto whitespace-nowrap">
        <div className="max-w-[1720px] mx-auto px-4 md:px-8 py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs text-slate-600">
              <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
              <li><span className="text-slate-300">/</span></li>
              <li><Link href="/bank-freeze-salary-account-loan-default" className="hover:text-[#1F5EFF] transition-colors">Salary Account Freeze Guide</Link></li>
              <li><span className="text-slate-300">/</span></li>
              <li className="font-bold text-slate-900" aria-current="page">Axis Salary Account Auto-Debit on Loan Default</li>
            </ol>
          </nav>
        </div>
      </div>

      <StatsStrip />

      {/* 3-Column Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">

          {/* Left Sidebar */}
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Salaried Portfolio Floor: ₹3L</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                SettleLoans takes on salaried borrowers whose combined unsecured debt across Axis personal loans, top-ups, credit cards, and app loans is ₹3,00,000 or higher. Below ₹3L, follow the self-help HR migration and branch steps in Sections 6 and 8.
              </p>
            </div>
          </aside>

          {/* Main Editorial Column */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">

            {/* Key Takeaways */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Executive Summary: Axis Bank Salary Auto-Debit &amp; Default</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Axis + Migrated Citi Suvidha Exposure:</strong> Whether you opened an Axis Easy Access, Prime, Priority, or Burgundy Salary Account directly or migrated from Citibank Suvidha, a single Axis Customer ID links your salary ledger to your Axis Personal Loan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified Axis Tariff (Checked 11 Nov 2026):</strong> Rs. 339 to Rs. 500 + 18% GST per bounce depending on variant/KFS, plus 8% p.a. + GST non-capitalized penal charges on overdue EMI amounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 60(1)(i) CPC Wage Shield:</strong> Sweeping 100% of monthly subsistence wages without prior set-off notice ignores the statutory civil benchmark exempting the first Rs. 1,000 plus two-thirds of remaining salary.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>High-Tier AMB Conversion Watchout:</strong> Priority and Prime salary accounts carry steep regular AMB slabs (Rs. 12,000 to Rs. 25,000+) once corporate salary credits stop for 3 consecutive months.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Salaried OTS Window:</strong> After 90+ days past due (NPA) backed by verifiable income-to-EMI stress, realistic Axis personal loan settlements commonly close between 40% and 65% of total claimed dues, never guaranteed.</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="axis-salary-pl-nexus" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Axis Salary Tiers, Citi Suvidha &amp; Personal Loan Linkage
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Axis Bank occupies a major share of mid-to-senior corporate payroll accounts in India across Easy Access, Liberty, Prime, Priority, and Burgundy Salary tiers, augmented substantially after Citibank India&apos;s iconic <strong>Suvidha Salary Account</strong> and Ready Credit / Personal Loan base migrated onto Axis Bank&apos;s platform. Through the Axis Mobile `open` app, pre-approved &quot;24x7 Express Personal Loans&quot; and top-up loans are aggressively cross-sold against monthly payroll inflows.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For former Citi Suvidha customers in particular, this integration changed recovery behaviour overnight: loans and salary accounts that once operated on legacy Citi systems now sit under unified Axis Bank Customer IDs. Whenever two or more personal loan instalments remain unpaid, Axis Bank&apos;s core banking engine can execute internal Standing Instruction sweeps and place automated <strong>Lien / Freeze Amounts</strong> directly on the salary account, absorbing incoming payroll, variable bonuses, and expense reimbursements before a single bill can be paid.
              </p>
            </section>

            {/* Funnel Framing + Funnel */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                <Wallet className="w-4 h-4" />
                <span>Salaried Combined-Debt Check (₹3,00,000 Minimum)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                A salaried borrower cannot resolve one loan in isolation while other lenders trigger parallel notices. Select your <strong>total combined unsecured debt</strong> across Axis personal loans, top-ups, credit cards, and app loans below (representation requires <strong>₹3 Lakhs+ combined debt</strong>).
              </p>
            </div>

            <LoanSettlementAssessmentFunnel />

            {/* Section 2 */}
            <section id="axis-si-vs-nach" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Axis Internal Standing Instruction vs External NACH
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When your Axis Personal Loan is repaid from your Axis Salary Account, deductions happen via an intra-bank <strong>Standing Instruction (SI) / Direct Debit</strong> rather than an inter-bank NPCI NACH clearing file. That architectural difference dictates what happens when your balance falls short on the 4th, 5th, or 10th of the month:
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Dimension</th>
                      <th>Axis Internal SI (Salary Account at Axis)</th>
                      <th>External NPCI NACH (Salary Account Outside Axis)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Debit Processing</td>
                      <td>Internal core-banking transfer under shared Axis Customer ID.</td>
                      <td>External clearing request sent through NPCI NACH to your other bank.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Partial Balance Capture</td>
                      <td>Yes. Overdue lien sweeps can capture partial available balances and hold negative shadow balances against upcoming payroll.</td>
                      <td>No. NACH debits succeed only if 100% of the EMI is available; otherwise the instruction returns unpaid.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Online Mandate Cancellation</td>
                      <td>Locked inside `open` app / Internet Banking for active Axis retail loans unless an alternate bank mandate swap is approved while regular.</td>
                      <td>Destination bank can process mandate revocation per RBI circulars, though Axis loan arrears continue accruing.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because online SI deletion is blocked on delinquent intra-bank loans, salaried borrowers facing genuine insolvency must combine lawful HR payroll separation with formal written hardship representation rather than hoping an app toggle will stop payday deductions. For cross-bank mandate mechanics, review <Link href="/salary-account-ecs-mandate-cancellation-rules" className="text-[#1F5EFF] font-semibold underline">Salary Account ECS Mandate Cancellation Rules</Link>.
              </p>
            </section>

            {/* Section 3 */}
            <section id="axis-official-charges" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Verified Axis ₹339 to ₹500 Bounce &amp; 8% Penal Tariff
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Knowing Axis Bank&apos;s exact fee structure helps you audit your loan statement before restructuring or settlement talks and spot inflated recovery demands immediately.
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Fee Component</th>
                      <th>Official Axis Bank Charge / Rate</th>
                      <th>How It Accumulates on Salaried Defaults</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SI / ECS / NACH Dishonour Fee</td>
                      <td><strong>Rs. 339 to Rs. 500 per bounce instance + 18% GST</strong> (Rs. 400.02 to Rs. 590 incl. GST, depending on loan variant and KFS).</td>
                      <td>Levied per failed presentation due to insufficient funds or account restriction; multiple monthly presentations multiply fixed fees.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Penal Charges on Overdue EMI</td>
                      <td><strong>8% per annum + 18% GST</strong> over and above contractual interest on the overdue instalment amount for the delayed period.</td>
                      <td>Tracked as non-capitalized penal charges per RBI Penal Charges guidelines (never compounded into loan principal).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Mandate / Instrument Swap Fee</td>
                      <td><strong>Rs. 500 + 18% GST (Rs. 590)</strong> per approved swap occasion.</td>
                      <td>Available only while loan is current (0 DPD); rejected once overdue buckets trigger.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Salary Account Reclassification AMB</td>
                      <td>Conversion to regular Easy Access / Prime / Priority savings slab after <strong>3 consecutive months</strong> without corporate salary credit.</td>
                      <td>High-tier Prime (Rs. 25,000 AMB) and Priority (Rs. 2,00,000 TRV / AMB) accounts can accrue steep monthly shortfall fees if not downgraded or closed post-OTS.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                <strong>Source Verification:</strong> Axis Bank Official Personal Loan Interest Rates &amp; Charges (<a href="https://www.axis.bank.in/loans/personal-loan/interest-rates-charges" target="_blank" rel="noopener noreferrer" className="text-[#1F5EFF] underline">axis.bank.in/loans/personal-loan/interest-rates-charges</a>). <strong>Checked on: 11 November 2026.</strong> Refer to your individual Loan Agreement and Key Fact Statement (KFS) for exact variant slab.
              </p>
            </section>

            {/* Section 4 */}
            <section id="axis-setoff-cpc60" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Axis Set-Off Clauses vs Section 60(1)(i) CPC Wage Floor
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Axis Bank personal loan agreements include standard contractual right-of-set-off clauses allowing combination of accounts held in the borrower&apos;s name. Yet Indian statutory law draws a sharp boundary between commercial set-off and leaving a salaried family with zero sustenance:
              </p>
              <ul className="list-disc pl-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Section 171 Contract Act Misapplication:</strong> Branch letters frequently cite Section 171 Banker&apos;s General Lien, which legally governs bailed goods and securities rather than debtor-creditor cash wage credits.</li>
                <li><strong>Section 60(1)(i) CPC Statutory Exemption:</strong> Even when a civil court executes a formal money decree, the first <strong>Rs. 1,000 plus two-thirds of the remainder of monthly salary</strong> is strictly immune from attachment. For an Axis Priority salary holder earning Rs. 1,06,000 net monthly pay, Rs. 71,000 (Rs. 1,000 + two-thirds of Rs. 1,05,000) is exempt even under judicial execution, making an unnotified 100% administrative sweep by a private lender highly contestable.</li>
                <li><strong>Joint Account Mutuality Protection:</strong> If your Axis salary or family savings account is held jointly with a spouse whose independent salary also enters that account, Axis lacks strict mutuality of debts to sweep spousal earnings toward your individual personal loan.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="open-app-lien-holds" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Reading Lien &amp; Hold Balances Inside the Axis `open` App
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Inside the Axis Mobile `open` app, open your savings/salary account summary and expand <em>Account Details</em> to compare <strong>Clear / Total Balance</strong> against <strong>Lien / Freeze Amount</strong> and <strong>Available Balance</strong>:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Overdue Amount Lien (Partial Lock)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Axis Collections marks a specific Rupee hold matching overdue EMIs plus Rs. 339+GST bounce and 8% penal charges. If your salary is Rs. 75,000 and the Lien Amount is Rs. 46,000, Rs. 46,000 is instantly locked/swept on payday while Rs. 29,000 remains spendable, until the next month&apos;s EMI adds another hold.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Accelerated NPA Hold / Total Debit Block</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Once a loan crosses 90+ days into NPA or receives a loan-recall notice, the Lien Amount may jump to the <em>entire recalled loan balance</em> (e.g., Rs. 5,80,000), absorbing 100% of every incoming salary credit until payroll is legally diverted or an OTS lifts the lien.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="hr-payroll-change" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Updating Your Payroll Bank With HR Cleanly &amp; Legally
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before a full loan-recall Lien locks 100% of your household budget, private-sector salaried employees can legally migrate future salary credits through their employer&apos;s payroll portal:
              </p>
              <ol className="list-decimal pl-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Select an Unlinked Bank:</strong> Open or use an existing savings/salary account at a bank where you hold zero personal loans, credit cards, or PayLater facilities.</li>
                <li><strong>Complete HRMS Update Before the 18th:</strong> Upload your new cancelled cheque on Workday, Darwinbox, SAP, Keka, or ADP before monthly payroll cut-off (15th to 20th) and confirm approval on your employee profile.</li>
                <li><strong>Check Separate Reimbursement &amp; Tax Portals:</strong> Update expense reimbursement accounts (Concur/Zoho Expense) and Income Tax e-Filing pre-validated bank accounts so reimbursements and tax refunds do not land in the held Axis account.</li>
                <li><strong>Keep Contact Channels Open With Axis Bank:</strong> Never block all communication or change residential details secretly; send a written hardship email to Axis Bank explaining your financial distress so your conduct clearly reflects non-wilful hardship rather than evasion.</li>
              </ol>
            </section>

            {/* Section 7 */}
            <section id="axis-amb-conversion" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Special Watchout: Axis Priority &amp; Prime AMB Reclassification
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Axis Bank&apos;s tiered salary accounts carry a particularly important post-shift quirk. While an entry-level Easy Access account converts to a Rs. 10,000 to Rs. 12,000 metro AMB requirement after <strong>3 consecutive months without corporate salary credits</strong>, higher tiers such as <strong>Axis Prime Salary</strong> (Rs. 25,000 AMB equivalent) and <strong>Axis Priority Salary</strong> (Rs. 2,00,000 Average Quarterly/Monthly relationship threshold) carry significantly steeper regular tariff structures once salary status drops!
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If you hold a Prime, Priority, or Burgundy Salary Account and divert your payroll, either submit a written request to downgrade the savings variant to a basic/Easy tier (if the branch permits while a loan is active) or ensure zero stray inflows enter that Axis savings account until you close the personal loan via OTS and formally close the linked savings account alongside your NDC.
              </p>
            </section>

            {/* Section 8 */}
            <section id="axis-pno-escalation" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Axis Bank Nodal &amp; RBI Ombudsman Escalation Protocol
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When Axis Bank sweeps 100% of a paycheck without prior set-off notice, locks a joint account, or allows third-party collection agencies to make threatening workplace calls:
              </p>
              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Step 1: Axis Level 1 Grievance &amp; Circle Nodal Officer</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Log a formal written complaint via `axisbank.com/support` obtaining a reference ID, then escalate unsatisfactory replies to the Circle Nodal Officer citing Section 60(1)(i) CPC subsistence exemptions and lack of advance set-off notice.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Step 2: Axis Principal Nodal Officer (PNO) &amp; Recovery Conduct Rules</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Escalate to Axis Bank&apos;s Principal Nodal Officer (`pno@axisbank.com` / official Axis Grievance Redressal portal). Cite RBI&apos;s Fair Practices Code, and note that RBI&apos;s strengthened recovery agent directions effective <strong>1 January 2027</strong> reinforce strict bank liability for workplace harassment, odd-hour calls, or unauthorized third-party disclosure.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Step 3: RBI CMS (`cms.rbi.org.in`)</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    File on the RBI Integrated Ombudsman portal if Axis fails to resolve an arbitrary debit freeze or coercive recovery violation within 30 days. See <Link href="/bank-freeze-salary-account-loan-default" className="text-[#1F5EFF] font-semibold underline">Bank Freeze Salary Account Legal Remedies</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="axis-salaried-ots" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Negotiating an Axis Personal Loan OTS While Salaried
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Axis Bank&apos;s retail collections and stressed-assets desks evaluate salaried One-Time Settlement proposals pragmatically once an unsecured personal loan crosses <strong>90+ Days Past Due (NPA)</strong>. If you are still salaried, the negotiation hinges on proving <em>structural cash-flow deficit</em>: showing through salary slips, bank statements, medical/family proofs, and your credit bureau report that servicing 100% contractual EMIs across all lenders is mathematically impossible on your current net salary.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Depending on NPA aging (90 to 180+ days), how many EMIs were serviced prior to default, and whether you can arrange a clean one-shot lump sum (or short 2-to-3-tranche plan) via family support, realistic Axis Bank personal loan settlements frequently land between <strong>40% and 65% of total claimed dues</strong>, beginning with 100% waiver of accumulated 8% penal charges and Rs. 339 to Rs. 500 bounce fees, plus a negotiated haircut on remaining dues. Outcomes are strictly case-by-case and never guaranteed. Also review our <Link href="/axis-bank-personal-loan-settlement" className="text-[#1F5EFF] font-semibold underline">Axis Bank Personal Loan Settlement Guide</Link> for sanction committee stages.
              </p>
            </section>

            {/* Section 10 */}
            <section id="axis-ots-checklist" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                10. Axis OTS Sanction Verification &amp; Lien-Removal Checklist
              </h2>
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950 text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>5 Mandatory Checks Before Paying Axis Bank OTS</span>
                </div>
                <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <li><strong>Official Axis Bank Domain / Stamped Letter:</strong> Verify that the OTS letter comes from an official `@axisbank.com` / `@axis.bank.in` email or stamped branch/collections desk with reference number, exact Personal Loan Account Number (`PPR...` / `PHR...`), and exact tranche deadlines.</li>
                  <li><strong>Full Waiver &amp; Zero Residual Liability Clause:</strong> Confirm permanent waiver of residual principal, interest, 8% penal charges, and bounce charges upon payment.</li>
                  <li><strong>Linked Savings Lien Removal Confirmation:</strong> Ensure all Customer ID Lien/Freeze holds on your linked Axis salary/savings account and any pending Section 25 PSSA / arbitration proceedings stand withdrawn upon settlement completion.</li>
                  <li><strong>Direct Loan-Account Remittance Only:</strong> Pay directly into the Axis Personal Loan account, never transfer lump-sum settlement money into your lien-marked Axis salary account!</li>
                  <li><strong>30-Day NDC &amp; Bureau Check:</strong> Collect your official No Dues Certificate within 30 days and verify `Rs. 0` balance on CIBIL after 45 to 60 days.</li>
                </ol>
              </div>
            </section>

            {/* Section 11 */}
            <section id="company-resolution-section" className="space-y-6 scroll-mt-24">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  11. SettleLoans Salaried Legal Advisory for Axis Borrowers
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For salaried employees holding <strong>₹3 Lakhs or more in combined unsecured debt</strong> across Axis Bank (including migrated Citi Suvidha loans), credit cards, and other lenders, SettleLoans manages end-to-end defense: reviewing Customer ID lien risk, protecting household payroll lawfully, stopping workplace harassment, and negotiating verified One-Time Settlements with official bank sanction letters.
                </p>
              </div>

              <CompanySection />
            </section>

            {/* Section 12: FAQs */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8 scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  12. Frequently Asked Questions: Axis Salary Account &amp; Loan Default
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                Verified answers on Axis `open` app liens, Citi Suvidha migration, ₹339 bounce fees, HR payroll updates, and salaried personal loan settlement.
              </p>

              <div className="space-y-3">
                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      1. Why did Axis Bank sweep my salary account on payday for an overdue personal loan?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>When your Axis Bank Salary Account (Easy Access, Prime, Priority, Burgundy, or migrated Citi Suvidha) shares a Customer ID with an Axis Personal Loan, overdue EMIs trigger internal Standing Instruction sweeps and Lien Amounts in the Axis Mobile &apos;open&apos; app. However, unnotified 100% sweeps of subsistence salary conflict with Section 60(1)(i) CPC wage exemptions and fair banking standards.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      2. What are Axis Bank&apos;s official EMI bounce and penal charges on personal loans?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>According to Axis Bank&apos;s official Personal Loan Interest Rates and Charges schedule (checked on 11 November 2026), Standing Instruction, ECS, or NACH dishonour charges are Rs. 339 to Rs. 500 per bounce instance plus 18% GST depending on the personal loan variant and Key Fact Statement. Delayed instalments attract non-capitalized penal charges of 8% per annum plus GST on the overdue EMI amount.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      3. Does a Citibank Suvidha Salary Account migrated to Axis Bank face the same auto-debit set-off?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes. Following the full integration of Citibank India&apos;s retail and Suvidha corporate salary portfolio into Axis Bank, migrated Suvidha salary accounts and personal loans operate under unified Axis Customer IDs, exposing linked salary accounts to internal Axis Standing Instructions and overdue lien sweeps.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      4. Can I stop an internal Axis Bank Standing Instruction through the Axis &apos;open&apos; mobile app?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>No. While external merchant e-mandates can be managed online, Axis Bank locks internal Standing Instructions linked to active Axis Personal Loans unless a verified alternate bank NACH mandate is approved on a performing loan (attracting a Rs. 500 + GST swap fee).</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      5. How does Section 60(1)(i) CPC protect salaried borrowers against 100% Axis Bank sweeps?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Section 60(1)(i) of the Code of Civil Procedure exempts the first Rs. 1,000 plus two-thirds of the remaining salary from civil debt attachment. Even a formal civil court decree cannot seize that subsistence portion, giving salaried employees strong legal grounds to contest unilateral 100% salary appropriations before Axis Bank&apos;s Principal Nodal Officer and the RBI Ombudsman.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      6. Is shifting my corporate payroll from Axis Bank to another bank through HR lawful?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes. Private-sector employees have the lawful right to update their payroll bank account on their employer&apos;s HRMS portal before monthly payroll lock-in so essential living expenses remain funded while loan restructuring or One-Time Settlement talks proceed transparently.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      7. What happens to my Axis Priority or Easy Access Salary Account after 3 months without salary credits?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>If corporate salary credits do not arrive for 3 consecutive months, Axis Bank withdraws zero-balance salary benefits and converts the account into a regular savings category subject to Average Monthly Balance requirements (Rs. 12,000 to Rs. 25,000+ depending on tier), generating monthly shortfall fees if left unmanaged.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      8. Can Axis Bank freeze or debit my new salary account at SBI or HDFC without a court order?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>No. Axis Bank has no administrative power to debit or freeze an account at another bank unless you registered an NPCI NACH mandate on that account or Axis obtains a judicial attachment order from a competent court or tribunal.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      9. Will Axis Bank negotiate a personal loan One-Time Settlement if I am still employed?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes, once the loan crosses 90+ days past due into NPA classification and you present verifiable hardship documentation showing that net take-home pay cannot service total debt obligations across all loans and cards.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      10. What settlement range does Axis Bank realistically consider on defaulted salaried personal loans?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Outcomes are never fixed or guaranteed. For unsecured Axis personal loans aged past 90 to 180+ days in NPA with documented cash-flow distress, negotiated One-Time Settlements commonly range between 40% and 65% of total claimed dues, starting with full waiver of 8% penal charges and bounce fees.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      11. How do I ensure Axis Bank lifts the Lien Amount on my savings account after OTS payment?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Insist on an official Axis Bank OTS Sanction Letter confirming full extinguishment of loan claims and removal of linked Customer ID liens, remit the agreed settlement directly into the Personal Loan account number (never via the held salary account), and collect your No Dues Certificate within 30 days.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      12. Where do I escalate if Axis Bank sweeps 100% of my salary without prior notice?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Submit a Level 1 grievance on axisbank.com, escalate to the Circle Nodal Officer, and then to Axis Bank&apos;s Principal Nodal Officer citing Section 60(1)(i) CPC and lack of prior set-off notice. If unresolved after 30 days, file a complaint on the RBI CMS portal at cms.rbi.org.in.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* Official Sources */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Official Axis Bank Tariff &amp; Regulatory Sources (Checked 11 November 2026)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://www.axis.bank.in/loans/personal-loan/interest-rates-charges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Axis Bank Official Personal Loan Rates &amp; Charges</span>
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
                <span className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700">
                  Code of Civil Procedure, 1908: Section 60(1)(i) Salary Exemption
                </span>
                <span className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700">
                  Indian Contract Act, 1872: Section 171 General Lien Limits
                </span>
              </div>
            </section>

            {/* Related Guides */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Salaried Debt &amp; Axis Settlement Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/bank-freeze-salary-account-loan-default" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Bank Freeze Salary Account Guide
                </Link>
                <Link href="/salary-account-ecs-mandate-cancellation-rules" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  ECS &amp; NACH Cancellation Rules
                </Link>
                <Link href="/axis-bank-personal-loan-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Axis Bank Personal Loan Settlement
                </Link>
                <Link href="/loan-settlement-for-salaried-people" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Loan Settlement for Salaried People
                </Link>
                <Link href="/personal-loan-emi-bounce-charges" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Personal Loan EMI Bounce Charges
                </Link>
                <Link href="/hdfc-salary-account-auto-debit-personal-loan-default" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  HDFC Salary Account Auto-Debit
                </Link>
                <Link href="/icici-salary-account-auto-debit-personal-loan-default" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  ICICI Salary Account Auto-Debit
                </Link>
                <Link href="/no-dues-certificate-after-loan-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  No Dues Certificate Checklist
                </Link>
              </div>
            </section>

          </main>

          {/* Right Sidebar */}
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
                  <p className="text-xs text-slate-500">Salaried Debt &amp; Banking Defense Specialist</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialises in Axis and Citi-migrated salary account lien defense, Section 60 CPC subsistence protections, and multi-lender personal loan settlements.
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
                <span>Axis Salaried Relief</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Axis `open` App Showing Lien Hold?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                If your combined unsecured debt across Axis personal loans, cards, and other lenders is ₹3 Lakhs+, get a structured legal &amp; settlement assessment before payday.
              </p>
              <a
                href="#settlement-assessment"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Check ₹3L+ Settlement Plan
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Salaried Safeguards
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Citi Suvidha &amp; Axis Lien Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Zero Employer Contact Protocol</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Axis OTS Sanction Check</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Combined ₹3L+ Debt Structuring</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
