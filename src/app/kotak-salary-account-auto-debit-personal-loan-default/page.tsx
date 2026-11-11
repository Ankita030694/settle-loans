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
  title: 'Kotak Salary Account Auto-Debit Default | SettleLoans',
  description: 'Kotak salary account auto-debit or lien draining your pay on a personal loan default? Check ₹750 bounce rules, set-off limits, and settlement.',
  keywords: [
    'kotak salary account auto debit personal loan default',
    'kotak mahindra bank crn lien salary account loan',
    'kotak personal loan emi bounce charges 750',
    'stop kotak standing instruction personal loan salary account',
    'kotak platina everyday salary account set off',
    'change kotak salary account hr payroll loan default',
    'section 60 cpc kotak mahindra bank salary sweep',
    'kotak personal loan settlement for salaried people'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/kotak-salary-account-auto-debit-personal-loan-default',
  },
  openGraph: {
    title: 'Kotak Salary Account Auto-Debit Default | SettleLoans',
    description: 'Kotak salary account auto-debit or lien draining your pay on a personal loan default? Check ₹750 bounce rules, set-off limits, and settlement.',
    url: 'https://www.settleloans.in/kotak-salary-account-auto-debit-personal-loan-default',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/kotak-bank-personal-loan-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'Kotak Mahindra Bank Salary Account Auto-Debit and Personal Loan Default Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kotak Salary Account Auto-Debit Default | SettleLoans',
    description: 'Kotak salary account auto-debit or lien draining your pay on a personal loan default? Check ₹750 bounce rules, set-off limits, and settlement.',
    images: ['https://www.settleloans.in/images/infographics/kotak-bank-personal-loan-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.settleloans.in/kotak-salary-account-auto-debit-personal-loan-default#breadcrumb",
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
          "name": "Kotak Salary Account Auto-Debit & Loan Default",
          "item": "https://www.settleloans.in/kotak-salary-account-auto-debit-personal-loan-default"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/kotak-salary-account-auto-debit-personal-loan-default#article",
      "headline": "Kotak Salary Account Auto-Debit & Personal Loan Default",
      "description": "Comprehensive legal and banking handbook for salaried borrowers holding a Kotak Corporate Salary Account (Everyday, Ace, Platina, or upgraded Kotak811 Salary) and a Kotak Mahindra Bank Personal Loan. Covers CRN linkage, Rs. 750 bounce charges, 8% p.a. penal charges, Section 60 CPC subsistence limits, HR payroll transition, and One-Time Settlement.",
      "image": "https://www.settleloans.in/images/infographics/kotak-bank-personal-loan-settlement.jpg",
      "datePublished": "2026-11-11T10:45:00+05:30",
      "dateModified": "2026-11-11T10:45:00+05:30",
      "mainEntityOfPage": "https://www.settleloans.in/kotak-salary-account-auto-debit-personal-loan-default",
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
      "@id": "https://www.settleloans.in/kotak-salary-account-auto-debit-personal-loan-default#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does Kotak Mahindra Bank's CRN link my Corporate Salary Account to my overdue Personal Loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kotak Mahindra Bank assigns a single Customer Relationship Number (CRN) across your Corporate Salary Account (Everyday, Platina, Ace, or upgraded Kotak811) and your Personal Loan. When EMIs fall overdue, Kotak's core banking system can run internal Standing Instruction sweeps and mark automated Hold or Lien amounts against incoming payroll credits under that shared CRN."
          }
        },
        {
          "@type": "Question",
          "name": "What are Kotak Mahindra Bank's official EMI bounce and penal charges on personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "According to Kotak Mahindra Bank's official Personal Loan Fees and Charges schedule (checked on 11 November 2026), the EMI bounce or dishonour fee is Rs. 750 per instance (inclusive of applicable taxes) on failed NACH, ECS, Standing Instruction, or cheque presentations. Overdue instalments also attract non-capitalized penal charges of 8% per annum plus GST for the actual days of delay, alongside contractual interest on unpaid overdue amounts."
          }
        },
        {
          "@type": "Question",
          "name": "Why is Kotak Mahindra Bank's Rs. 750 bounce charge risky for salaried accounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Rs. 750 per failed presentation, Kotak levies one of the highest flat dishonour tariffs among major private banks. If multiple automated presentation attempts fail around salary week, thousands of rupees in fixed dishonour charges pile onto the overdue ledger within just two to three months."
          }
        },
        {
          "@type": "Question",
          "name": "Can I cancel a Kotak Personal Loan Standing Instruction inside the Kotak Mobile Banking app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Internal Standing Instructions mapped to an active Kotak Personal Loan cannot be deleted online by the borrower unless a replacement repayment instrument on another bank is approved while the loan is in regular status (subject to a Rs. 500 plus taxes swap fee)."
          }
        },
        {
          "@type": "Question",
          "name": "Does Section 60(1)(i) CPC restrict Kotak Bank from sweeping 100% of my monthly salary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 60(1)(i) of the Code of Civil Procedure, the first Rs. 1,000 plus two-thirds of the remaining salary is statutorily exempt from attachment even when a civil court executes a formal decree. Unannounced 100% salary sweeps leaving zero livelihood funds can therefore be challenged through Kotak's Principal Nodal Officer and the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "Is it legal to move my salary credit from Kotak Bank to another bank through my employer's HR portal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Private-sector salaried employees are legally free to update their payroll bank account with HR before monthly payroll cut-off so household rent, medical needs, and family sustenance remain protected while transparent restructuring or settlement negotiations take place."
          }
        },
        {
          "@type": "Question",
          "name": "What happens to my zero-balance Kotak Platina or Everyday Salary Account if salary stops for 90 days?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If regular corporate salary is not credited for 3 consecutive months (90 days), Kotak Mahindra Bank reclassifies the zero-balance corporate salary account into a normal savings account requiring an Average Monthly Balance (commonly Rs. 10,000 to Rs. 20,000 depending on variant), which attracts monthly non-maintenance fees if left open with stray credits."
          }
        },
        {
          "@type": "Question",
          "name": "Can Kotak Bank sweep my ActivMoney auto-sweep Fixed Deposit linked to my salary account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Many Kotak Platina and Everyday Salary Accounts carry an ActivMoney 2-way sweep facility that converts surplus savings into term deposits under the same CRN. Standard Kotak loan agreements contain cross-account lien and set-off clauses covering deposits held under the same CRN in the borrower's individual capacity."
          }
        },
        {
          "@type": "Question",
          "name": "Will Kotak Mahindra Bank negotiate a One-Time Settlement while I am still in a salaried job?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, once the personal loan enters NPA status (past 90 days overdue) and you establish genuine inability to pay full contractual EMIs due to salary reduction, medical expenditure, loss of variable pay, or multi-lender EMI obligations exceeding take-home capacity."
          }
        },
        {
          "@type": "Question",
          "name": "What realistic settlement range does Kotak Mahindra Bank accept on defaulted personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Settlement figures are never guaranteed and depend on NPA aging, loan vintage, and lump-sum readiness. In verified hardship cases aged past 90 to 180+ days overdue, negotiated Kotak personal loan settlements often close between 40% and 65% of total claimed dues, including full waiver of Rs. 750 bounce charges and 8% penal charges."
          }
        },
        {
          "@type": "Question",
          "name": "How should I remit my Kotak One-Time Settlement payment so the salary lien does not misapply it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Always remit the settlement amount directly into the specific Kotak Personal Loan account number specified in your official stamped OTS Sanction Letter from an external bank account, rather than depositing money into a lien-marked Kotak salary account."
          }
        },
        {
          "@type": "Question",
          "name": "How do I escalate an unnotified 100% salary sweep to Kotak Mahindra Bank's Nodal Officer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Raise a Level 1 grievance on kotak.com, escalate to the Nodal Officer, and then submit a formal escalation to Kotak Mahindra Bank's Principal Nodal Officer citing Section 60(1)(i) CPC and lack of prior written set-off notice. Unresolved grievances beyond 30 days can be filed on cms.rbi.org.in."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'kotak-crn-trap', title: '1. Kotak CRN Salary & Loan Linkage' },
  { id: 'kotak-si-vs-nach', title: '2. Internal CRN Sweeps vs External NACH' },
  { id: 'kotak-750-charges', title: '3. Official ₹750 Bounce & 8% Penal Tariff' },
  { id: 'kotak-setoff-cpc60', title: '4. Set-Off Rights vs Section 60 CPC' },
  { id: 'kotak-activmoney-holds', title: '5. App Hold Balance & ActivMoney Sweep Risk' },
  { id: 'hr-payroll-migration', title: '6. Lawful HR Payroll Account Update' },
  { id: 'kotak-90day-amb', title: '7. 90-Day Salary Non-Credit AMB Rule' },
  { id: 'kotak-nodal-rbi', title: '8. Kotak Nodal & RBI CMS Escalation' },
  { id: 'kotak-salaried-ots', title: '9. Kotak Salaried OTS Strategy (₹3L+)' },
  { id: 'kotak-ots-audit', title: '10. OTS Sanction & CRN Hold Release Check' },
  { id: 'company-resolution-section', title: '11. SettleLoans Salaried Legal Defense' },
  { id: 'faqs', title: '12. Frequently Asked Questions' },
];

export default function KotakSalaryAccountAutoDebitDefaultPage() {
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
            <span>Salaried Borrower Defense • Kotak Corporate Salary &amp; PL</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Kotak Salary Account Auto-Debit &amp; Personal Loan Default
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5">
            Understanding Kotak Mahindra Bank CRN-linked salary sweeps, ₹750 dishonour charges, ActivMoney deposit exposure, Section 60 CPC subsistence limits, lawful HR payroll migration, and ₹3L+ salaried settlement.
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
              <span>Official Tariff &amp; CPC Verified</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#settlement-assessment"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Evaluate ₹3L+ Salaried Settlement</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Urgent CRN Salary Hold Help
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
              <li className="font-bold text-slate-900" aria-current="page">Kotak Salary Account Auto-Debit &amp; Personal Loan Default</li>
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
                <span>Salaried Case Floor: ₹3,00,000</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                SettleLoans represents salaried borrowers carrying ₹3 Lakhs or more in combined unsecured obligations across Kotak personal loans, top-ups, credit cards, and app loans. Below ₹3L, apply the self-help HR migration and branch steps in Sections 6 and 8.
              </p>
            </div>
          </aside>

          {/* Main Content */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">

            {/* Key Takeaways */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Executive Summary: Kotak Salary Account &amp; Personal Loan Default</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CRN-Unified Sweeps:</strong> Kotak Everyday, Ace, Platina, and upgraded Kotak811 Corporate Salary Accounts share one Customer Relationship Number (CRN) with Kotak Personal Loans, enabling instant intra-bank Standing Instruction sweeps and Lien holds on payday.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Steep Verified Bounce Tariff (Checked 11 Nov 2026):</strong> Kotak charges <strong>Rs. 750 per bounce instance</strong> (inclusive of applicable taxes) plus <strong>8% p.a. + GST</strong> non-capitalized penal charges on overdue EMI amounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>ActivMoney Sweep Exposure:</strong> Salary accounts enabled with Kotak&apos;s 2-way ActivMoney auto-sweep FD create linked term deposits under the same CRN that face contractual set-off risk during default.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 60(1)(i) CPC Subsistence Limit:</strong> Unnotified 100% salary seizures conflict with India&apos;s civil attachment benchmark, which exempts the first Rs. 1,000 plus two-thirds of remaining wages.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Salaried Settlement Range:</strong> Once a Kotak personal loan ages past 90+ DPD into NPA with verified income stress, negotiated One-Time Settlements frequently land between 40% and 65% of total claimed dues, never guaranteed.</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="kotak-crn-trap" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. How Kotak&apos;s CRN Links Your Salary Account and Personal Loan
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Kotak Mahindra Bank has rapidly expanded its corporate payroll footprint across startups, mid-market IT firms, fintechs, logistics companies, and media agencies through its <strong>Everyday, Ace, Platina, and Kotak811-upgraded Corporate Salary Accounts</strong>. Because every Kotak relationship is anchored to a single 8-or-9-digit <strong>Customer Relationship Number (CRN)</strong>, employees logging into the Kotak Mobile Banking app regularly see instant &quot;Pre-Approved Personal Loan&quot; banners mapped directly to their salary CRN.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As long as career and household cash flows remain smooth, that single CRN feels seamless. The moment a startup layoff, delayed salary cycle, variable-pay freeze, or family medical crisis causes you to miss personal loan instalments, the shared CRN gives Kotak&apos;s internal recovery system immediate visibility and direct debit reach into your primary wage account. On salary credit day, borrowers frequently watch Rs. 45,000 or Rs. 80,000 get pulled or locked under a CRN Hold Balance before rent or grocery payments can clear.
              </p>
            </section>

            {/* Funnel Framing + Funnel */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                <Wallet className="w-4 h-4" />
                <span>Salaried Combined-Debt Assessment (₹3,00,000 Floor)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Because salaried borrowers typically hold multiple overlapping EMIs when defaults begin, enter your <strong>total combined unsecured debt</strong> across Kotak personal loans, top-ups, credit cards, and app loans below (representation starts at <strong>₹3 Lakhs total debt</strong>).
              </p>
            </div>

            <LoanSettlementAssessmentFunnel />

            {/* Section 2 */}
            <section id="kotak-si-vs-nach" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Kotak Intra-Bank Standing Instruction vs External NACH
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding why external e-NACH cancellation guides fail for Kotak salary-account borrowers comes down to how Kotak routes loan repayments internally versus externally:
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Operational Aspect</th>
                      <th>Kotak Intra-CRN Standing Instruction</th>
                      <th>External Bank NPCI NACH Mandate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Account Configuration</td>
                      <td>Kotak Corporate Salary Account + Kotak Personal Loan under one CRN.</td>
                      <td>Salary Account at HDFC/SBI/ICICI + Kotak Personal Loan.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Clearing Path</td>
                      <td>Direct internal Finacle/CBS sweep inside Kotak Mahindra Bank.</td>
                      <td>Inter-bank NACH batch presentation routed via NPCI.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Partial Balance Capture</td>
                      <td>Yes. CRN lien logic can freeze or sweep partial credits (reimbursements, small UPI inflows, partial pay) toward overdue arrears.</td>
                      <td>No. NACH presentations clear only if the full EMI amount is present; otherwise they return unpaid with a single Rs. 750 dishonour fee on Kotak&apos;s ledger.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Online Cancellation</td>
                      <td>Blocked for active Kotak retail loans unless replaced by an approved external mandate while regular (Rs. 500 + taxes swap fee).</td>
                      <td>Destination bank must process customer NACH revocation per RBI guidelines, though loan delinquency continues.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For cross-bank NACH revocation rules when your salary account sits outside Kotak, see our detailed <Link href="/salary-account-ecs-mandate-cancellation-rules" className="text-[#1F5EFF] font-semibold underline">ECS &amp; NACH Mandate Cancellation Guide</Link>.
              </p>
            </section>

            {/* Section 3 */}
            <section id="kotak-750-charges" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Verified Kotak ₹750 Bounce &amp; 8% Penal Charges Schedule
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Kotak Mahindra Bank&apos;s Personal Loan tariff has a critical number every salaried borrower must watch closely: <strong>Rs. 750 per dishonoured EMI presentation</strong>. Compared to SBI (Rs. 250 + GST) or Axis (Rs. 339 + GST on standard variants), repeated failed presentations on a Kotak Personal Loan escalate fixed fee arrears very rapidly.
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Charge Head</th>
                      <th>Official Kotak Mahindra Bank Tariff</th>
                      <th>Salaried Default Consequence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">EMI Bounce / Dishonour Charges</td>
                      <td><strong>Rs. 750 per bounce instance</strong> (inclusive of applicable taxes) on NACH / ECS / SI / cheque failure.</td>
                      <td>Every failed presentation adds Rs. 750 directly to overdue charges; 4 failed presentations across 2 months add Rs. 3,000 in flat bounce fees alone.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Penal Charges on Overdue Amount</td>
                      <td><strong>8% per annum + 18% GST</strong> charged on the overdue EMI amount for actual days delayed past due date.</td>
                      <td>Non-capitalized penal charge per RBI norms; overdue instalments also carry contractual loan interest for the delay period.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Repayment Mode / Instrument Swap</td>
                      <td><strong>Rs. 500 + applicable taxes</strong> per swap instance.</td>
                      <td>Permitted only on standard performing accounts prior to delinquency.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Corporate Salary Reclassification AMB</td>
                      <td>Conversion to standard savings variant (typically <strong>Rs. 10,000 to Rs. 20,000 AMB</strong>) after 90 days without corporate salary credit.</td>
                      <td>Generates monthly non-maintenance fees if stray credits enter the dormant Kotak account later.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                <strong>Source Verification:</strong> Kotak Mahindra Bank Official Personal Loan Fees and Charges (<a href="https://www.kotak.bank.in/en/personal-banking/loans/personal-loan/fees-and-charges.html" target="_blank" rel="noopener noreferrer" className="text-[#1F5EFF] underline">kotak.bank.in Personal Loan Fees &amp; Charges</a>). <strong>Checked on: 11 November 2026.</strong> Individual loan Key Fact Statements (KFS) govern specific sanction vintages.
              </p>
            </section>

            {/* Section 4 */}
            <section id="kotak-setoff-cpc60" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Kotak Set-Off Clauses vs Section 60(1)(i) CPC Protections
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When Kotak Mahindra Bank appropriates a borrower&apos;s salary credit toward overdue personal loan instalments, support emails frequently reference Section 171 of the Indian Contract Act alongside contractual set-off terms. Salaried borrowers and their advocates rely on three settled legal boundaries to contest arbitrary 100% paycheck sweeps:
              </p>
              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>1. Bailment Lien vs Cash Deposit Set-Off</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Section 171 Contract Act governs bailed physical securities and goods, whereas salary credited into a savings account creates a debtor-creditor deposit obligation subject to equitable set-off prerequisites (matured debt, mutuality, and advance notice).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1">
                  <h3 className="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-1.5">
                    <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                    <span>2. Section 60(1)(i) CPC Subsistence Exemption</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">
                    Under Section 60(1)(i) of the Code of Civil Procedure, the first <strong>Rs. 1,000 plus two-thirds of the remaining monthly salary</strong> cannot be attached even under a court decree. On a Rs. 73,000 net salary, Rs. 49,000 (Rs. 1,000 plus two-thirds of Rs. 72,000) represents protected subsistence livelihood.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Landmark className="w-4 h-4 text-indigo-600" />
                    <span>3. Joint Account &amp; Third-Party Funds Bar</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Kotak cannot lawfully apply set-off against a joint family account containing a non-borrowing spouse&apos;s or parent&apos;s funds due to absence of strict mutuality of capacity.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="kotak-activmoney-holds" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Kotak App Hold Balance &amp; ActivMoney Auto-Sweep Risk
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Kotak Corporate Salary Accounts (especially Platina and Ace) frequently come bundled with <strong>ActivMoney</strong>, an automatic 2-way sweep feature that converts savings balances above a threshold into 180-day Term Deposits earning FD interest. Many salaried borrowers forget ActivMoney is switched on until a personal loan default occurs.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a Kotak Personal Loan crosses 30 to 90 days overdue, two distinct things happen inside the Kotak Mobile Banking app: first, a <strong>Lien / Hold Balance</strong> locks your savings ledger so incoming credits show negative or zero withdrawable balance; second, any existing ActivMoney sweep FDs or standalone FDs sitting under your CRN face premature liquidation and contractual set-off against loan arrears. Never park emergency medical savings or family money inside an ActivMoney-linked Kotak CRN while a Kotak loan is stressed.
              </p>
            </section>

            {/* Section 6 */}
            <section id="hr-payroll-migration" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Shifting Salary Credit Legally Through HR Payroll Systems
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To keep rent, utilities, school fees, and food protected while structuring a resolution with Kotak Mahindra Bank, private-sector employees can lawfully update their salary bank details with HR:
              </p>
              <ol className="list-decimal pl-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Activate a Zero-Debt Bank Account:</strong> Use a bank where you hold zero personal loans, credit cards, or consumer durable loans.</li>
                <li><strong>Upload Cancelled Cheque Before Payroll Lock (15th to 20th):</strong> Update bank details on Darwinbox, Workday, Keka, GreytHR, or SAP well ahead of monthly payroll cut-off so the upcoming month&apos;s salary routes cleanly via NEFT/NACH to your new bank.</li>
                <li><strong>Update UPI Default &amp; Income Tax Portal:</strong> Switch your primary UPI receiving account on PhonePe/GPay and pre-validate your new bank on `incometax.gov.in` so tax refunds do not enter the Kotak CRN hold.</li>
                <li><strong>Send Formal Hardship Intimation to Kotak:</strong> Simultaneously write to Kotak customer care / collections documenting your pay cut, medical crisis, or multi-loan distress so your file reflects bona fide non-wilful hardship.</li>
              </ol>
            </section>

            {/* Section 7 */}
            <section id="kotak-90day-amb" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Kotak 90-Day Non-Salary Reclassification Watchout
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Kotak Mahindra Bank&apos;s Corporate Salary schedule, if corporate salary credits cease for <strong>90 consecutive days (3 months)</strong>, zero-balance privileges are withdrawn and the account converts into a regular Everyday / Ace / Platina savings variant requiring an Average Monthly Balance of Rs. 10,000 to Rs. 20,000+. Keep zero accidental credits flowing into that dormant account while negotiating your loan settlement, and close or regularise the linked savings account once your Personal Loan No Dues Certificate is issued.
              </p>
            </section>

            {/* Section 8 */}
            <section id="kotak-nodal-rbi" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Challenging Unnotified Sweeps: Kotak Nodal &amp; RBI CMS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If Kotak Mahindra Bank sweeps 100% of your monthly subsistence salary without prior written notice, freezes a joint family account, or if recovery callers harass workplace colleagues:
              </p>
              <ul className="list-disc pl-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Level 1 &amp; Level 2 Grievance:</strong> File a service ticket via `kotak.com` Customer Service and escalate unsatisfactory responses to Kotak&apos;s Nodal Officer with your CRN, loan number, and Section 60(1)(i) CPC objection.</li>
                <li><strong>Principal Nodal Officer (PNO) Escalation:</strong> Escalate to Kotak Mahindra Bank&apos;s Principal Nodal Officer (details published on Kotak&apos;s Grievance Redressal page). Cite RBI&apos;s Fair Practices Code, noting also that RBI&apos;s strengthened recovery conduct directions taking effect on <strong>1 January 2027</strong> strictly prohibit coercive recovery and workplace contact.</li>
                <li><strong>RBI Integrated Ombudsman (`cms.rbi.org.in`):</strong> Escalate unresolved complaints after 30 days on the official RBI portal. Read <Link href="/bank-freeze-salary-account-loan-default" className="text-[#1F5EFF] font-semibold underline">Salary Account Freeze Legal Remedies</Link> for step-by-step filing guidance.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="kotak-salaried-ots" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Negotiating a Kotak Personal Loan OTS While Employed
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once an unsecured Kotak Personal Loan crosses <strong>90 Days Past Due into NPA classification</strong>, Kotak&apos;s collections and stressed-asset recovery hierarchy evaluates One-Time Settlement proposals from salaried borrowers who prove genuine repayment incapacity, such as CIBIL reports showing multi-lender EMI obligations exceeding 70% to 100% of net monthly take-home pay, pay cuts, or severe medical expenses.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                While no waiver percentage is ever guaranteed, verified salaried compromise settlements on Kotak Personal Loans aged 90 to 180+ DPD realistically close in the range of <strong>40% to 65% of total claimed dues</strong> (starting with 100% waiver of accumulated Rs. 750 bounce charges and 8% penal charges, plus a negotiated haircut on remaining principal and interest), particularly when backed by a clean one-shot lump sum or tight 2-to-3-instalment schedule. Also consult our <Link href="/kotak-bank-personal-loan-settlement" className="text-[#1F5EFF] font-semibold underline">Kotak Bank Personal Loan Settlement Guide</Link>.
              </p>
            </section>

            {/* Section 10 */}
            <section id="kotak-ots-audit" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                10. Kotak OTS Sanction Letter &amp; CRN Hold Release Audit
              </h2>
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950 text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>5 Pre-Payment Checks on a Kotak OTS Letter</span>
                </div>
                <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <li><strong>Authentic Kotak Letterhead / Official Domain:</strong> Verify the letter originates from `@kotak.com` / `@kotak.bank.in` or a stamped Kotak branch/collections office bearing your exact CRN and Loan Account Number (`CSG...` / `PL...`).</li>
                  <li><strong>Complete Waiver of ₹750 Bounce &amp; 8% Penal Dues:</strong> Confirm full and final extinguishment of all residual principal, interest, bounce fees, and penal charges upon timely payment.</li>
                  <li><strong>CRN Hold Withdrawal &amp; Legal Closure:</strong> Confirm all linked CRN holds/liens on your Kotak savings/salary account and any Section 25 PSSA or arbitration notices stand withdrawn upon settlement closure.</li>
                  <li><strong>Direct Loan-Account Payment Only:</strong> Remit funds from your external bank directly to the Kotak Personal Loan account number, never via your held Kotak salary account.</li>
                  <li><strong>30-Day NDC &amp; Bureau Audit:</strong> Obtain your stamped No Dues Certificate within 30 days and verify `Rs. 0` balance on CIBIL after 45 to 60 days.</li>
                </ol>
              </div>
            </section>

            {/* Section 11 */}
            <section id="company-resolution-section" className="space-y-6 scroll-mt-24">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  11. SettleLoans Salaried Legal Defense for Kotak Borrowers
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Salaried professionals carrying <strong>₹3 Lakhs or more in combined unsecured debt</strong> across Kotak Mahindra Bank personal loans, cards, and other lenders rely on SettleLoans to audit CRN and ActivMoney lien exposure, guide lawful payroll protection, stop workplace recovery harassment, and negotiate verified One-Time Settlements backed by official bank sanction letters.
                </p>
              </div>

              <CompanySection />
            </section>

            {/* Section 12: FAQs */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8 scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  12. Frequently Asked Questions: Kotak Salary Auto-Debit &amp; Default
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                Practical answers on Kotak CRN holds, ₹750 bounce charges, ActivMoney sweep risk, HR bank updates, and salaried personal loan settlement.
              </p>

              <div className="space-y-3">
                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      1. How does Kotak Mahindra Bank&apos;s CRN link my Corporate Salary Account to my overdue Personal Loan?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Kotak Mahindra Bank assigns a single Customer Relationship Number (CRN) across your Corporate Salary Account (Everyday, Platina, Ace, or upgraded Kotak811) and your Personal Loan. When EMIs fall overdue, Kotak&apos;s core banking system can run internal Standing Instruction sweeps and mark automated Hold or Lien amounts against incoming payroll credits under that shared CRN.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      2. What are Kotak Mahindra Bank&apos;s official EMI bounce and penal charges on personal loans?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>According to Kotak Mahindra Bank&apos;s official Personal Loan Fees and Charges schedule (checked on 11 November 2026), the EMI bounce or dishonour fee is Rs. 750 per instance (inclusive of applicable taxes) on failed NACH, ECS, Standing Instruction, or cheque presentations. Overdue instalments also attract non-capitalized penal charges of 8% per annum plus GST for the actual days of delay, alongside contractual interest on unpaid overdue amounts.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      3. Why is Kotak Mahindra Bank&apos;s Rs. 750 bounce charge risky for salaried accounts?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>At Rs. 750 per failed presentation, Kotak levies one of the highest flat dishonour tariffs among major private banks. If multiple automated presentation attempts fail around salary week, thousands of rupees in fixed dishonour charges pile onto the overdue ledger within just two to three months.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      4. Can I cancel a Kotak Personal Loan Standing Instruction inside the Kotak Mobile Banking app?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>No. Internal Standing Instructions mapped to an active Kotak Personal Loan cannot be deleted online by the borrower unless a replacement repayment instrument on another bank is approved while the loan is in regular status (subject to a Rs. 500 plus taxes swap fee).</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      5. Does Section 60(1)(i) CPC restrict Kotak Bank from sweeping 100% of my monthly salary?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Under Section 60(1)(i) of the Code of Civil Procedure, the first Rs. 1,000 plus two-thirds of the remaining salary is statutorily exempt from attachment even when a civil court executes a formal decree. Unannounced 100% salary sweeps leaving zero livelihood funds can therefore be challenged through Kotak&apos;s Principal Nodal Officer and the RBI Ombudsman.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      6. Is it legal to move my salary credit from Kotak Bank to another bank through my employer&apos;s HR portal?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes. Private-sector salaried employees are legally free to update their payroll bank account with HR before monthly payroll cut-off so household rent, medical needs, and family sustenance remain protected while transparent restructuring or settlement negotiations take place.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      7. What happens to my zero-balance Kotak Platina or Everyday Salary Account if salary stops for 90 days?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>If regular corporate salary is not credited for 3 consecutive months (90 days), Kotak Mahindra Bank reclassifies the zero-balance corporate salary account into a normal savings account requiring an Average Monthly Balance (commonly Rs. 10,000 to Rs. 20,000 depending on variant), which attracts monthly non-maintenance fees if left open with stray credits.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      8. Can Kotak Bank sweep my ActivMoney auto-sweep Fixed Deposit linked to my salary account?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes. Many Kotak Platina and Everyday Salary Accounts carry an ActivMoney 2-way sweep facility that converts surplus savings into term deposits under the same CRN. Standard Kotak loan agreements contain cross-account lien and set-off clauses covering deposits held under the same CRN in the borrower&apos;s individual capacity.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      9. Will Kotak Mahindra Bank negotiate a One-Time Settlement while I am still in a salaried job?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes, once the personal loan enters NPA status (past 90 days overdue) and you establish genuine inability to pay full contractual EMIs due to salary reduction, medical expenditure, loss of variable pay, or multi-lender EMI obligations exceeding take-home capacity.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      10. What realistic settlement range does Kotak Mahindra Bank accept on defaulted personal loans?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Settlement figures are never guaranteed and depend on NPA aging, loan vintage, and lump-sum readiness. In verified hardship cases aged past 90 to 180+ days overdue, negotiated Kotak personal loan settlements often close between 40% and 65% of total claimed dues, including full waiver of Rs. 750 bounce charges and 8% penal charges.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      11. How should I remit my Kotak One-Time Settlement payment so the salary lien does not misapply it?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Always remit the settlement amount directly into the specific Kotak Personal Loan account number specified in your official stamped OTS Sanction Letter from an external bank account, rather than depositing money into a lien-marked Kotak salary account.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      12. How do I escalate an unnotified 100% salary sweep to Kotak Mahindra Bank&apos;s Nodal Officer?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Raise a Level 1 grievance on kotak.com, escalate to the Nodal Officer, and then submit a formal escalation to Kotak Mahindra Bank&apos;s Principal Nodal Officer citing Section 60(1)(i) CPC and lack of prior written set-off notice. Unresolved grievances beyond 30 days can be filed on cms.rbi.org.in.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* Official Sources */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Official Kotak Tariff &amp; Regulatory Sources (Checked 11 November 2026)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://www.kotak.bank.in/en/personal-banking/loans/personal-loan/fees-and-charges.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Kotak Mahindra Bank Official Personal Loan Fees &amp; Charges</span>
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
                Related Salaried Debt &amp; Kotak Settlement Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/bank-freeze-salary-account-loan-default" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Bank Freeze Salary Account Guide
                </Link>
                <Link href="/salary-account-ecs-mandate-cancellation-rules" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  ECS &amp; NACH Cancellation Rules
                </Link>
                <Link href="/kotak-bank-personal-loan-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Kotak Personal Loan Settlement
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
                <Link href="/axis-salary-account-auto-debit-personal-loan-default" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Axis Salary Account Auto-Debit
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
                Guides salaried borrowers on Kotak CRN hold defense, ActivMoney deposit exposure, Section 60 CPC protections, and multi-lender settlement.
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
                <span>Kotak Salaried Relief</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Kotak CRN Hold Draining Pay?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                If your combined unsecured debt across Kotak personal loans, cards, and other lenders is ₹3 Lakhs+, get a structured legal &amp; settlement evaluation today.
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
                  <span>CRN &amp; ActivMoney Exposure Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Strict Workplace Confidentiality</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Verified Kotak OTS Sanction Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Combined ₹3L+ Debt Resolution</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
