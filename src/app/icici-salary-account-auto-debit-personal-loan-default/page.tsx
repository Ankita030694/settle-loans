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
  title: 'ICICI Salary Account Auto-Debit Default | SettleLoans',
  description: 'ICICI salary account auto-debit sweeping your pay for a personal loan default? Know set-off limits, iMobile lien rules, HR shift, and settlement.',
  keywords: [
    'icici salary account auto debit personal loan default',
    'icici bank lien amount salary account personal loan',
    'icici personal loan auto debit bounce charges',
    'icici non maintenance of mode of payment nmmp 800',
    'stop icici direct debit personal loan salary account',
    'shift icici salary account during personal loan overdue',
    'section 60 cpc icici bank salary sweep',
    'icici personal loan settlement for salaried employees'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/icici-salary-account-auto-debit-personal-loan-default',
  },
  openGraph: {
    title: 'ICICI Salary Account Auto-Debit Default | SettleLoans',
    description: 'ICICI salary account auto-debit sweeping your pay for a personal loan default? Know set-off limits, iMobile lien rules, HR shift, and settlement.',
    url: 'https://www.settleloans.in/icici-salary-account-auto-debit-personal-loan-default',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/icici-personal-loan-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'ICICI Salary Account Auto-Debit and Personal Loan Default Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICICI Salary Account Auto-Debit Default | SettleLoans',
    description: 'ICICI salary account auto-debit sweeping your pay for a personal loan default? Know set-off limits, iMobile lien rules, HR shift, and settlement.',
    images: ['https://www.settleloans.in/images/infographics/icici-personal-loan-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.settleloans.in/icici-salary-account-auto-debit-personal-loan-default#breadcrumb",
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
          "name": "ICICI Salary Account Auto-Debit & Loan Default",
          "item": "https://www.settleloans.in/icici-salary-account-auto-debit-personal-loan-default"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/icici-salary-account-auto-debit-personal-loan-default#article",
      "headline": "ICICI Salary Account Auto-Debit & Personal Loan Default",
      "description": "In-depth guide for salaried professionals with an ICICI Bank Salary Account (Silver, Gold, Titanium, or Defence) and an overdue ICICI Personal Loan. Covers iMobile Lien Amount mechanics, Rs. 500 bounce and Rs. 800 NMMP fees, Section 60 CPC wage limits, HR payroll transition, and salaried One-Time Settlement.",
      "image": "https://www.settleloans.in/images/infographics/icici-personal-loan-settlement.jpg",
      "datePublished": "2026-11-11T10:15:00+05:30",
      "dateModified": "2026-11-11T10:15:00+05:30",
      "mainEntityOfPage": "https://www.settleloans.in/icici-salary-account-auto-debit-personal-loan-default",
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
      "@id": "https://www.settleloans.in/icici-salary-account-auto-debit-personal-loan-default#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why does iMobile Pay show a Lien Amount on my ICICI Salary Account after missing a personal loan EMI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When your ICICI Salary Account and ICICI Personal Loan share the same User ID and UCIC (Unique Customer Identification Code), missed instalments trigger an automated recovery lien in ICICI's core banking system. iMobile Pay displays this under Account Details as a Lien or Hold Amount, freezing incoming credits up to the overdue figure."
          }
        },
        {
          "@type": "Question",
          "name": "What are ICICI Bank's official EMI bounce, penal, and NMMP charges on personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Per ICICI Bank's official Personal Loan Service Charges schedule (checked on 11 November 2026), Cheque/Auto-Debit/ECS/NACH bounce charges are Rs. 500 per dishonour instance plus 18% GST. Late payments attract non-capitalized penal charges of 5% per annum plus GST on the overdue EMI amount. Additionally, ICICI levies a Non-Maintenance of Mode of Payment (NMMP) fee of Rs. 800 plus GST if the designated repayment mandate is disrupted."
          }
        },
        {
          "@type": "Question",
          "name": "What is ICICI Bank's Rs. 800 Non-Maintenance of Mode of Payment (NMMP) charge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NMMP is a specific service fee in ICICI Bank's retail loan schedule applied when a borrower revokes, disables, or fails to maintain a valid automated repayment instrument (Direct Debit, ECS, or NACH) without replacing it with another approved mandate. During One-Time Settlement negotiations, borrowers should verify that accumulated NMMP and bounce charges are waived in full."
          }
        },
        {
          "@type": "Question",
          "name": "Can ICICI Bank legally sweep 100% of my salary credit under Banker's Right of Set-Off?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While ICICI loan contracts contain set-off clauses allowing adjustment across same-capacity accounts, sweeping 100% of subsistence salary without prior written notice is legally vulnerable. Section 60(1)(i) of the Code of Civil Procedure exempts the first Rs. 1,000 plus two-thirds of the remaining salary even in formal court decree executions, providing strong statutory grounds to contest total paycheck starvation."
          }
        },
        {
          "@type": "Question",
          "name": "Why did cancelling e-NACH not stop ICICI Bank from debiting my ICICI Salary Account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When both accounts are inside ICICI Bank, EMI deductions run through an internal Direct Debit / Standing Instruction rather than external NPCI e-NACH clearing. External NACH cancellation tools have no effect on intra-bank ICICI Direct Debit instructions."
          }
        },
        {
          "@type": "Question",
          "name": "Can I legally move my monthly salary credit from ICICI Bank to another bank via HR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Private-sector salaried employees are legally entitled to designate an alternate bank account with their employer's payroll team so essential household expenses like rent, groceries, and school fees remain protected while loan restructuring or settlement is negotiated transparently."
          }
        },
        {
          "@type": "Question",
          "name": "What happens to my zero-balance ICICI Silver or Titanium Salary Account if salary stops coming for 3 months?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under ICICI Bank Salary Account terms, if corporate salary is not credited for 3 consecutive months, the zero-balance benefit ceases and the account converts into a regular savings variant requiring a Monthly Average Balance (commonly Rs. 10,000 in metro and urban locations), attracting monthly MAB shortfall fees if left unattended."
          }
        },
        {
          "@type": "Question",
          "name": "Can ICICI Bank place a hold on a joint account I hold with my spouse for my individual personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lawful exercise of a banker's right of set-off requires strict mutuality of parties and identical legal capacity. An individual unsecured personal loan taken solely by one spouse lacks legal mutuality with a joint account containing third-party or spousal funds, giving strong grounds for Nodal Officer and RBI Ombudsman escalation."
          }
        },
        {
          "@type": "Question",
          "name": "Does ICICI Bank settle personal loans for salaried employees who are still working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, once the loan enters NPA status (beyond 90 days past due) and the borrower demonstrates genuine repayment incapacity, such as severe pay reduction, medical emergency expenses, or multi-lender EMI obligations consuming most of take-home salary."
          }
        },
        {
          "@type": "Question",
          "name": "What settlement waiver range is realistic on an ICICI Bank salaried personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no fixed or guaranteed settlement percentage. Depending on NPA age (90 to 180+ days), verifiable hardship proof, and one-shot payment capability, realistic ICICI Bank personal loan compromise settlements often close in the range of 40% to 65% of total claimed dues, including full waiver of penal charges, bounce fees, and NMMP fees."
          }
        },
        {
          "@type": "Question",
          "name": "Should I deposit my ICICI One-Time Settlement amount into my ICICI Salary Account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Never deposit OTS funds into a linked ICICI savings or salary account that has an active Lien Amount, because automated holds can appropriate part of the transfer toward unwaived charges before the OTS is posted. Always remit the settlement payment directly into the specific ICICI Personal Loan account number named in the official OTS letter."
          }
        },
        {
          "@type": "Question",
          "name": "How do I escalate an unnotified 100% salary sweep to ICICI Bank's Principal Nodal Officer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "First lodge a Level 1 service request on icicibank.com, escalate unresolved responses to the Nodal Officer, and then write to ICICI Bank's Principal Nodal Officer with your SR reference, salary statement, and Section 60(1)(i) CPC objection. Unresolved complaints after 30 days can be escalated to the RBI Ombudsman at cms.rbi.org.in."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'icici-ucic-linkage', title: '1. ICICI UCIC Salary & Loan Linkage' },
  { id: 'direct-debit-vs-nach', title: '2. Direct Debit vs External e-NACH' },
  { id: 'icici-verified-fees', title: '3. Official Bounce, 5% Penal & ₹800 NMMP' },
  { id: 'setoff-vs-cpc60', title: '4. Set-Off Clause vs Section 60 CPC' },
  { id: 'imobile-lien-mechanics', title: '5. iMobile Pay Lien & Partial Sweeps' },
  { id: 'hr-payroll-diversion', title: '6. Lawful HR Payroll Account Change' },
  { id: 'mab-conversion-risk', title: '7. 90-Day Salary Non-Credit MAB Rule' },
  { id: 'pno-rbi-escalation', title: '8. ICICI PNO & RBI CMS Escalation' },
  { id: 'salaried-ots-icici', title: '9. ICICI Salaried Settlement Path (₹3L+)' },
  { id: 'icici-ots-verification', title: '10. ICICI OTS Letter & Lien Release Audit' },
  { id: 'company-resolution-section', title: '11. SettleLoans Salaried Legal Defense' },
  { id: 'faqs', title: '12. Frequently Asked Questions' },
];

export default function IciciSalaryAccountAutoDebitDefaultPage() {
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
            <Briefcase className="w-3.5 h-3.5" />
            <span>Salaried Borrower Defense • ICICI Salary Account &amp; PL</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            ICICI Salary Account Auto-Debit &amp; Personal Loan Default
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5">
            How ICICI Bank&apos;s internal Direct Debit sweeps, iMobile Lien Amounts, and ₹800 NMMP fees affect salaried employees during personal loan stress, plus Section 60 CPC limits, lawful HR salary shift, and ₹3L+ compromise settlement.
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
              Speak With Salaried Debt Counsel
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
              <li className="font-bold text-slate-900" aria-current="page">ICICI Salary Account Auto-Debit &amp; Personal Loan Default</li>
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
                <span>Minimum Portfolio: ₹3,00,000</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                SettleLoans represents salaried borrowers with ₹3 Lakhs or more in combined unsecured obligations across ICICI personal loans, top-ups, credit cards, and app loans. Below ₹3L, apply the self-help HR migration and ICICI grievance steps in Sections 6 and 8.
              </p>
            </div>
          </aside>

          {/* Main Editorial Column */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">

            {/* Key Takeaways */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: ICICI Salary Account &amp; Personal Loan Default</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>UCIC-Level Integration:</strong> Instant pre-approved ICICI Personal Loans disbursed via iMobile Pay link directly to your Silver, Gold, or Titanium Salary Account through ICICI&apos;s Unique Customer Identification Code (UCIC).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified ICICI Tariff (Checked 11 Nov 2026):</strong> Rs. 500 + 18% GST per bounce, 5% p.a. + GST non-capitalized penal charges on overdue EMIs, plus a unique <strong>Rs. 800 + GST Non-Maintenance of Mode of Payment (NMMP)</strong> fee if auto-debit is disrupted.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Subsistence Protection Benchmark:</strong> Unnotified 100% salary set-offs conflict with the statutory floor under Section 60(1)(i) CPC, which shields the first Rs. 1,000 plus two-thirds of remaining wages even under court attachment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>90-Day MAB Watchout:</strong> Diverting corporate salary via HR protects living cash flow, but after 3 consecutive months without salary credits, ICICI converts zero-balance salary accounts into MAB-bearing savings accounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Salaried Compromise Path:</strong> After 90+ days past due (NPA) with documented hardship, realistic ICICI personal loan settlements frequently settle between 40% and 65% of total claimed dues, never guaranteed.</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="icici-ucic-linkage" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. How ICICI UCIC Links Your Salary Account and Personal Loan
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Across Bengaluru, Hyderabad, Gurugram, Mumbai, Pune, and Chennai, ICICI Bank powers millions of corporate payroll relationships under its Silver, Gold, Titanium, Wealth, and Defence Salary Account programs. Through the iMobile Pay app and ICICI Infinity NetBanking, salaried employees with steady monthly credits receive instant pre-qualified personal loan and top-up loan offers that disburse in minutes with zero physical paperwork.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Behind that frictionless experience lies a tight core-banking bond: both your ICICI Salary Account (`LP...` or `00...` savings account) and your ICICI Personal Loan (`LP...` loan account) sit under one <strong>Unique Customer Identification Code (UCIC)</strong> and one Internet Banking User ID. When an EMI date arrives, typically the 5th or 10th of the month, ICICI does not need to wait for inter-bank clearing. Its internal Direct Debit engine checks your salary account balance directly and pulls the instalment.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When job turbulence, a steep pay cut, family hospitalisation, or multi-loan EMI stacking pushes your household budget over the edge, this UCIC linkage turns hazardous. Instead of a simple missed EMI followed by negotiation, ICICI&apos;s automated recovery engine can mark a <strong>Lien Amount</strong> on your salary account equal to all overdue EMIs, bounce fees, and late charges, capturing your entire paycheck the instant your employer runs payroll.
              </p>
            </section>

            {/* Salaried Debt Framing + Funnel */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                <Wallet className="w-4 h-4" />
                <span>Salaried Total-Debt Assessment (₹3,00,000 Case Floor)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Effective salaried debt resolution covers your entire unsecured exposure so one aggressive lender cannot derail closure with another. Select your <strong>combined total debt</strong> across ICICI personal loans, top-ups, credit cards, and app loans below (representation starts at <strong>₹3 Lakhs total debt</strong>).
              </p>
            </div>

            <LoanSettlementAssessmentFunnel />

            {/* Section 2 */}
            <section id="direct-debit-vs-nach" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. ICICI Internal Direct Debit vs External NPCI e-NACH
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Salaried borrowers frequently search iMobile Pay under <em>Services &rarr; Check / Manage Mandates</em> expecting to cancel their personal loan auto-debit before payday, only to discover either that the loan does not appear under external NACH mandates or that modifying it triggers an error message requiring branch loan-servicing approval. That happens because ICICI uses two completely different debit mechanisms depending on where your salary account is hosted.
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>ICICI Intra-Bank Direct Debit (Same-Bank Salary)</th>
                      <th>External e-NACH / ECS Mandate (Other-Bank Salary)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Account Setup</td>
                      <td>ICICI Salary Account + ICICI Personal Loan under one UCIC.</td>
                      <td>Non-ICICI Salary Account + ICICI Personal Loan.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Execution Rail</td>
                      <td>Internal Finacle CBS standing debit + automated overdue Lien sweep.</td>
                      <td>NPCI NACH clearing batches routed to your external destination bank.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Partial Recovery Sweep</td>
                      <td>Yes. Even if your account holds Rs. 9,200 against a Rs. 27,000 EMI, overdue lien logic can sweep Rs. 9,200 and hold the remaining Rs. 17,800 against future credits.</td>
                      <td>No. NACH debits either clear 100% of the presented EMI or return unpaid with a single dishonour code.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Fee Consequence if Mandate Disrupted</td>
                      <td>Cannot be switched off online without replacement mandate; overdue unpaid triggers Rs. 500 + GST bounce and Lien marking.</td>
                      <td>Stopping NACH at external bank stops debit sweeps, but ICICI levies Rs. 800 + GST NMMP charge alongside contractual overdue consequences.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Notice the crucial takeaway: if your salary still lands in ICICI Bank, trying to revoke auto-debit inside iMobile Pay will not shield next month&apos;s salary. Conversely, if your salary lands in an external bank and you cancel NACH, you must account for ICICI&apos;s specific NMMP fee discussed below. Compare general mandate rules in our <Link href="/salary-account-ecs-mandate-cancellation-rules" className="text-[#1F5EFF] font-semibold underline">ECS &amp; NACH Mandate Cancellation Guide</Link>.
              </p>
            </section>

            {/* Section 3 */}
            <section id="icici-verified-fees" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Official ICICI Bounce, 5% Penal &amp; ₹800 NMMP Charges
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                ICICI Bank&apos;s Personal Loan Schedule of Service Charges has two distinct structural features compared to several peers: a relatively moderate annualised penal charge rate (5% p.a. on the overdue EMI amount rather than 24% to 36% p.a.), paired with a dedicated <strong>Non-Maintenance of Mode of Payment (NMMP)</strong> charge that surprises many salaried borrowers.
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Charge Head</th>
                      <th>Verified ICICI Bank Fee / Rate</th>
                      <th>Practical Impact During Salaried Default</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Cheque / Auto-Debit / ECS / NACH Bounce Fee</td>
                      <td><strong>Rs. 500 per transaction + 18% GST (Rs. 590)</strong> per failed presentation.</td>
                      <td>Charged on each dishonoured presentation attempt; added to overdue receivable bucket.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Penal Charges for Late Payment</td>
                      <td><strong>5% per annum + 18% GST</strong> on the overdue EMI amount from due date until actual payment.</td>
                      <td>Non-capitalized per RBI Penal Charges norms (does not compound into principal balance). Contractual interest on unpaid principal continues separately.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Non-Maintenance of Mode of Payment (NMMP)</td>
                      <td><strong>Rs. 800 + 18% GST (Rs. 944)</strong> when repayment mandate/mode is disrupted or not maintained.</td>
                      <td>Unique ICICI fee triggered if a borrower cancels an external mandate or closes a linked debit mode without an approved swap.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Repayment Mode Swap Charge</td>
                      <td><strong>Rs. 500 + 18% GST (Rs. 590)</strong> per approved swap transaction.</td>
                      <td>Allowed only when loan is regular (0 DPD) and replacement bank NACH is verified.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                <strong>Source Verification:</strong> ICICI Bank Official Personal Loan Service Charges (<a href="https://www.icici.bank.in/personal-banking/loans/personal-loan/service-charges" target="_blank" rel="noopener noreferrer" className="text-[#1F5EFF] underline">icici.bank.in/personal-banking/loans/personal-loan/service-charges</a>). <strong>Checked on: 11 November 2026.</strong> Always cross-check the Key Fact Statement (KFS) issued with your specific loan agreement for sanction-vintage variations.
              </p>
            </section>

            {/* Section 4 */}
            <section id="setoff-vs-cpc60" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. ICICI Set-Off Clauses vs Section 60(1)(i) CPC Wage Limits
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Standard ICICI Personal Loan terms include a broad contractual lien and set-off clause empowering ICICI Bank to combine accounts and appropriate credit balances standing in any ICICI savings, salary, or deposit account toward unpaid loan dues. Collection managers routinely rely on this clause to justify sweeping an employee&apos;s entire salary credit on the 30th or 1st of the month.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Yet contractual boilerplate does not operate in a statutory vacuum. Three legal principles strictly bound how any commercial bank in India may exercise set-off against earned wages:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 171 Contract Act Scope</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 171 applies to physical goods and securities held in bailment. Cash deposited in a salary savings account is a debt owed by the bank to the customer, governed by set-off equity rather than bailment lien.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1.5">
                  <h3 className="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-1.5">
                    <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 60(1)(i) CPC Formula</span>
                  </h3>
                  <p className="text-xs text-blue-900 leading-relaxed">
                    In civil money-decree execution, the first Rs. 1,000 plus two-thirds of the remaining salary is statutorily exempt from attachment so a salaried worker&apos;s family is never starved into destitution.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Landmark className="w-4 h-4 text-indigo-600" />
                    <span>Prior Notice &amp; Mutuality</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Set-off requires advance written notice specifying crystallized arrears and strict mutuality of ownership, barring unilateral sweeps on joint accounts funded by a non-borrowing spouse or parent.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Take a concrete illustration: suppose a Hyderabad software test lead receives <strong>Rs. 67,000 net monthly pay</strong> in an ICICI Titanium Salary Account and has two overdue personal loan EMIs totalling Rs. 54,000. Even if ICICI sued in civil court, obtained a decree after years of trial, and sought salary attachment under Section 60(1)(i) CPC, the first Rs. 1,000 plus two-thirds of Rs. 66,000 (Rs. 44,000) = <strong>Rs. 45,000 would remain statutorily exempt</strong>, capping monthly attachment at Rs. 22,000. Sweeping Rs. 54,000 unannounced via an internal lien leaves Rs. 13,000 for rent and survival, creating strong grounds for Principal Nodal Officer and Ombudsman intervention.
              </p>
            </section>

            {/* Section 5 */}
            <section id="imobile-lien-mechanics" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. How iMobile Pay &quot;Lien Amount&quot; &amp; Partial Sweeps Operate
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Inside iMobile Pay, tap <em>View Statement / Account Details &rarr; More Details</em> on your salary account. When an ICICI Personal Loan crosses its due date and initial auto-debit fails, you will typically observe two stages of account capture:
              </p>
              <ul className="list-disc pl-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Days 1 to 15 Past Due (Repeated Batch Sweeps):</strong> Automated recovery jobs retry pulling the overdue EMI across multiple morning and evening batch windows, particularly between the 28th and 10th of the month.</li>
                <li><strong>Days 15 to 90+ Past Due (Active Lien Marking):</strong> Collections marks a specific <em>Lien Amount</em> (for example, Rs. 48,350) on the savings account. Your <em>Total Balance</em> may show Rs. 12,000, while <em>Effective Available Balance</em> shows Rs. 0 (with Rs. 36,350 remaining unrecovered lien). Every reimbursement, friend&apos;s UPI transfer, dividend, or salary credit hitting that account is locked and swept toward the loan ledger until the entire Rs. 48,350 lien is satisfied.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Important Linked-FD Warning:</strong> Many ICICI Salary Accounts come with &quot;Money Multiplier&quot; auto-sweep Fixed Deposits linked to the savings account. If you hold linked FDs or standalone FDs under the same ICICI UCIC, ICICI&apos;s loan contract also contains cross-collateral set-off wording over term deposits. Evaluate your entire ICICI relationship holistically before missing instalments.
              </p>
            </section>

            {/* Section 6 */}
            <section id="hr-payroll-diversion" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Lawful HR Payroll Migration Before Monthly Cut-Off
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When your household survival budget is threatened by an active or imminent ICICI salary sweep, shifting future salary credits to an unlinked bank account through your employer&apos;s HR/payroll system is a lawful financial-triage step for private-sector salaried employees. Doing so does not erase your loan liability, so pair it immediately with transparent written communication to ICICI Bank regarding restructuring or settlement.
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-[#1F5EFF] bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">1. Pick a Clean Zero-Exposure Bank</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Choose a scheduled bank where you have zero active loans, credit cards, or BNPL lines so no cross-product set-off risk exists. Download an official cancelled cheque leaf or bank verification letter with IFSC and MICR visible.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">2. Submit Before Payroll Freeze (15th to 20th)</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Upload the updated bank account on your employer&apos;s ESS/HRMS portal (Workday, Darwinbox, PeopleStrong, SAP, Keka, GreytHR) before the 18th of the month, and verify that finance/payroll approves the maker-checker workflow before salary processing runs around the 24th to 27th.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">3. De-Link UPI Primary Account &amp; Tax Refund Account</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Change your default "Receive Money" primary bank account on Google Pay, PhonePe, and Paytm from ICICI to your new bank so incoming transfers from family or colleagues do not land inside the ICICI lien. Update your primary refund account on the Income Tax portal as well.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="mab-conversion-risk" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. ICICI 90-Day Salary Non-Credit &amp; MAB Conversion Rule
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under ICICI Bank&apos;s Corporate Salary Account schedule, zero-balance privileges remain active only while monthly salary credits arrive from a registered corporate employer. Once <strong>3 consecutive calendar months</strong> pass with zero corporate salary credits, ICICI Bank automatically reclassifies the account into a standard savings account requiring a Monthly Average Balance (typically <strong>Rs. 10,000 in metro and urban branches</strong>).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If the account already carries a personal loan Lien Amount, ICICI branches will generally refuse to close the savings account until the loan overdue or settlement is resolved. While RBI rules prevent banks from turning a zero-balance account negative purely from MAB non-maintenance fees, any stray credit entering that ICICI account later will face pending service fee deductions. Keep the account at zero activity during settlement talks and request formal lien removal plus account closure/regularisation immediately after receiving your loan No Dues Certificate.
              </p>
            </section>

            {/* Section 8 */}
            <section id="pno-rbi-escalation" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Escalating Unlawful Sweeps: ICICI PNO &amp; RBI Ombudsman
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If ICICI Bank has placed a sudden 100% debit freeze on your active salary account without prior notice, swept a joint spousal account, or if third-party recovery agents threaten to visit your office or email HR, use ICICI Bank&apos;s documented grievance escalation path:
              </p>
              <ol className="list-decimal pl-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Level 1 Customer Care Complaint:</strong> Submit a written complaint via `icicibank.com` Customer Care / Complaint Form citing your Loan Account Number, Savings Account Number, and the exact unnotified sweep date, requesting subsistence release under the Section 60(1)(i) CPC benchmark.</li>
                <li><strong>Level 2 Nodal Officer &amp; Level 3 Principal Nodal Officer (PNO):</strong> Escalate with your Level 1 SR number to ICICI Bank&apos;s Nodal Officer and Principal Nodal Officer (`pno@icicibank.com` / official PNO web form on `icicibank.com`, verified against ICICI&apos;s published Grievance Redressal Policy). Document any breach of RBI&apos;s Fair Practices Code, and note that RBI&apos;s strengthened recovery agent conduct directions take effect on <strong>1 January 2027</strong>, strictly holding banks liable for agent intimidation or workplace privacy violations.</li>
                <li><strong>RBI Integrated Ombudsman (`cms.rbi.org.in`):</strong> Escalate unresolved grievances after 30 days (or immediately via legal counsel where arbitrary freezes block essential livelihood funds). See <Link href="/bank-freeze-salary-account-loan-default" className="text-[#1F5EFF] font-semibold underline">Salary Account Freeze Legal Remedies</Link> for full documentation templates.</li>
              </ol>
            </section>

            {/* Section 9 */}
            <section id="salaried-ots-icici" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Negotiating an ICICI Personal Loan OTS as a Salaried Employee
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Can you settle an ICICI Bank Personal Loan when you still receive a monthly salary? Yes, provided your case is built on verifiable cash-flow insolvency rather than mere unwillingness to pay. During the first 60 days of delinquency, ICICI&apos;s automated and early-bucket collection teams push strictly for full EMI regularisation. Meaningful One-Time Settlement authority opens once the loan crosses <strong>90 Days Past Due (NPA classification)</strong> and moves to ICICI Bank&apos;s Regional Collections / Debt Service Manager hierarchy.
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Borrower Hardship Scenario</th>
                      <th>Proofs ICICI Credit Committees Scrutinise</th>
                      <th>Indicative Settlement Outcome Range (With Caveats)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Active Job + Severe Multi-PL Trap (FOIR &gt; 75%)</td>
                      <td>Latest 3 salary slips, 6-month bank statement, full CIBIL report showing total EMI load exceeding net salary.</td>
                      <td>Often 45% to 65% of total claimed dues in 1 to 3 tranches (100% waiver of penal, bounce &amp; NMMP fees + partial principal haircut).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Salary Cut / Variable Pay Loss / Demotion</td>
                      <td>HR compensation revision letter, before-and-after payslips, Form 16 / AIS drop proof.</td>
                      <td>Often 40% to 60% of total claimed dues once account ages 120 to 180+ DPD.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Layoff / Medical Crisis With Family Lump Sum</td>
                      <td>Relieving/termination letter or hospital discharge &amp; bills, zero-salary bank statements.</td>
                      <td>Often 35% to 55% of total claimed dues on verified one-shot lump-sum closure, strictly subject to vintage and approval.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                <strong>Important Caveat:</strong> Settlement percentages are never guaranteed by law or RBI rules. Every ICICI OTS depends on unpaid principal vs interest ratio, loan vintage (how many EMIs you paid before default), NPA aging bucket, and quarter-end provisioning targets. For broader ICICI bank settlement mechanics, also review our <Link href="/icici-personal-loan-settlement" className="text-[#1F5EFF] font-semibold underline">ICICI Personal Loan Settlement Guide</Link>.
              </p>
            </section>

            {/* Section 10 */}
            <section id="icici-ots-verification" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                10. ICICI OTS Sanction Letter &amp; Lien Release Verification
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before remitting any settlement tranche to ICICI Bank, protect yourself with five strict verification steps specific to linked salary-account borrowers:
              </p>

              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950 text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>ICICI Salaried OTS Pre-Payment Audit</span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <li><strong>Verify Official Domain &amp; Reference Number:</strong> Authentic ICICI settlement letters originate from `@icicibank.com` or authorized ICICI branch/collections desks with a verifiable settlement reference ID, never pay on third-party agency letterheads.</li>
                  <li><strong>Confirm Waiver of Bounce, 5% Penal &amp; ₹800 NMMP Charges:</strong> Ensure the letter states the exact settled sum as full and final satisfaction of the entire loan ledger, waiving all residual principal, interest, bounce fees, penal charges, and NMMP charges.</li>
                  <li><strong>Remit Directly to the `LP...` Loan Account:</strong> Transfer settlement funds from your external bank account directly to the ICICI Personal Loan account number (or official ICICI loan payment link), never via your lien-marked ICICI salary account.</li>
                  <li><strong>Confirm Savings Lien Removal &amp; Legal Withdrawal:</strong> Ensure linked UCIC holds on your ICICI savings/salary account are cleared upon closure and any Section 25 PSSA / arbitration notices are formally withdrawn.</li>
                  <li><strong>Collect NDC Within 30 Days:</strong> Obtain your stamped No Dues Certificate within 30 days and verify `Rs. 0` balance reporting on CIBIL after 45 to 60 days.</li>
                </ul>
              </div>
            </section>

            {/* Section 11 */}
            <section id="company-resolution-section" className="space-y-6 scroll-mt-24">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  11. SettleLoans Salaried Defense for ICICI Borrowers (₹3L+)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If an ICICI Personal Loan default is threatening your monthly salary credit and your total unsecured debt across ICICI and other lenders is <strong>₹3 Lakhs or higher</strong>, SettleLoans provides dedicated legal and negotiation support: auditing UCIC lien exposure, guiding lawful payroll safeguarding, escalating coercive recovery practices, and negotiating verified One-Time Settlements across your entire unsecured loan portfolio.
                </p>
              </div>

              <CompanySection />
            </section>

            {/* Section 12: FAQs */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8 scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  12. Frequently Asked Questions: ICICI Salary Auto-Debit &amp; Default
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                Clear answers on iMobile Lien Amounts, ₹800 NMMP charges, Section 60 CPC salary exemptions, HR payroll updates, and ICICI salaried personal loan settlement.
              </p>

              <div className="space-y-3">
                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      1. Why does iMobile Pay show a Lien Amount on my ICICI Salary Account after missing a personal loan EMI?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>When your ICICI Salary Account and ICICI Personal Loan share the same User ID and UCIC (Unique Customer Identification Code), missed instalments trigger an automated recovery lien in ICICI&apos;s core banking system. iMobile Pay displays this under Account Details as a Lien or Hold Amount, freezing incoming credits up to the overdue figure.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      2. What are ICICI Bank&apos;s official EMI bounce, penal, and NMMP charges on personal loans?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Per ICICI Bank&apos;s official Personal Loan Service Charges schedule (checked on 11 November 2026), Cheque/Auto-Debit/ECS/NACH bounce charges are Rs. 500 per dishonour instance plus 18% GST. Late payments attract non-capitalized penal charges of 5% per annum plus GST on the overdue EMI amount. Additionally, ICICI levies a Non-Maintenance of Mode of Payment (NMMP) fee of Rs. 800 plus GST if the designated repayment mandate is disrupted.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      3. What is ICICI Bank&apos;s Rs. 800 Non-Maintenance of Mode of Payment (NMMP) charge?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>NMMP is a specific service fee in ICICI Bank&apos;s retail loan schedule applied when a borrower revokes, disables, or fails to maintain a valid automated repayment instrument (Direct Debit, ECS, or NACH) without replacing it with another approved mandate. During One-Time Settlement negotiations, borrowers should verify that accumulated NMMP and bounce charges are waived in full.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      4. Can ICICI Bank legally sweep 100% of my salary credit under Banker&apos;s Right of Set-Off?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>While ICICI loan contracts contain set-off clauses allowing adjustment across same-capacity accounts, sweeping 100% of subsistence salary without prior written notice is legally vulnerable. Section 60(1)(i) of the Code of Civil Procedure exempts the first Rs. 1,000 plus two-thirds of the remaining salary even in formal court decree executions, providing strong statutory grounds to contest total paycheck starvation.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      5. Why did cancelling e-NACH not stop ICICI Bank from debiting my ICICI Salary Account?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>When both accounts are inside ICICI Bank, EMI deductions run through an internal Direct Debit / Standing Instruction rather than external NPCI e-NACH clearing. External NACH cancellation tools have no effect on intra-bank ICICI Direct Debit instructions.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      6. Can I legally move my monthly salary credit from ICICI Bank to another bank via HR?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes. Private-sector salaried employees are legally entitled to designate an alternate bank account with their employer&apos;s payroll team so essential household expenses like rent, groceries, and school fees remain protected while loan restructuring or settlement is negotiated transparently.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      7. What happens to my zero-balance ICICI Silver or Titanium Salary Account if salary stops coming for 3 months?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Under ICICI Bank Salary Account terms, if corporate salary is not credited for 3 consecutive months, the zero-balance benefit ceases and the account converts into a regular savings variant requiring a Monthly Average Balance (commonly Rs. 10,000 in metro and urban locations), attracting monthly MAB shortfall fees if left unattended.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      8. Can ICICI Bank place a hold on a joint account I hold with my spouse for my individual personal loan?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Lawful exercise of a banker&apos;s right of set-off requires strict mutuality of parties and identical legal capacity. An individual unsecured personal loan taken solely by one spouse lacks legal mutuality with a joint account containing third-party or spousal funds, giving strong grounds for Nodal Officer and RBI Ombudsman escalation.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      9. Does ICICI Bank settle personal loans for salaried employees who are still working?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes, once the loan enters NPA status (beyond 90 days past due) and the borrower demonstrates genuine repayment incapacity, such as severe pay reduction, medical emergency expenses, or multi-lender EMI obligations consuming most of take-home salary.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      10. What settlement waiver range is realistic on an ICICI Bank salaried personal loan?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>There is no fixed or guaranteed settlement percentage. Depending on NPA age (90 to 180+ days), verifiable hardship proof, and one-shot payment capability, realistic ICICI Bank personal loan compromise settlements often close in the range of 40% to 65% of total claimed dues, including full waiver of penal charges, bounce fees, and NMMP fees.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      11. Should I deposit my ICICI One-Time Settlement amount into my ICICI Salary Account?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Never deposit OTS funds into a linked ICICI savings or salary account that has an active Lien Amount, because automated holds can appropriate part of the transfer toward unwaived charges before the OTS is posted. Always remit the settlement payment directly into the specific ICICI Personal Loan account number named in the official OTS letter.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      12. How do I escalate an unnotified 100% salary sweep to ICICI Bank&apos;s Principal Nodal Officer?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>First lodge a Level 1 service request on icicibank.com, escalate unresolved responses to the Nodal Officer, and then write to ICICI Bank&apos;s Principal Nodal Officer with your SR reference, salary statement, and Section 60(1)(i) CPC objection. Unresolved complaints after 30 days can be escalated to the RBI Ombudsman at cms.rbi.org.in.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* Official Sources */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Official ICICI Bank Tariff &amp; Regulatory Sources (Checked 11 November 2026)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://www.icici.bank.in/personal-banking/loans/personal-loan/service-charges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">ICICI Bank Official Personal Loan Service Charges</span>
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
                  Indian Contract Act, 1872: Section 171 Banker&apos;s Lien Scope
                </span>
              </div>
            </section>

            {/* Related Guides */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Salaried Debt &amp; ICICI Settlement Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/bank-freeze-salary-account-loan-default" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Bank Freeze Salary Account Guide
                </Link>
                <Link href="/salary-account-ecs-mandate-cancellation-rules" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  ECS &amp; NACH Cancellation Rules
                </Link>
                <Link href="/icici-personal-loan-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  ICICI Personal Loan Settlement
                </Link>
                <Link href="/loan-settlement-for-salaried-people" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Loan Settlement for Salaried People
                </Link>
                <Link href="/personal-loan-emi-bounce-charges" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Personal Loan EMI Bounce Charges
                </Link>
                <Link href="/multiple-personal-loan-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Multiple Personal Loan Settlement
                </Link>
                <Link href="/hdfc-salary-account-auto-debit-personal-loan-default" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  HDFC Salary Account Auto-Debit Guide
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
                Advises corporate professionals on UCIC salary lien defense, Section 60 CPC wage protections, and multi-lender personal loan settlement structuring.
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
                <span>ICICI Salaried Relief</span>
              </div>
              <div className="font-bold text-base text-white mb-2">iMobile Showing a Salary Lien?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                If your combined unsecured debt across ICICI personal loans, cards, and other lenders is ₹3 Lakhs+, get a structured legal &amp; settlement plan before your next payday.
              </p>
              <a
                href="#settlement-assessment"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Check ₹3L+ Settlement Eligibility
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Salaried Safeguards
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>UCIC Lien &amp; NMMP Fee Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Strict Workplace Confidentiality</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Verified ICICI OTS Sanction Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Multi-Loan Waterfall Planning</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
