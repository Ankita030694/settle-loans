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
  FileText,
  CheckCircle2,
  Calculator,
  FileCheck,
  UserCheck,
  Wallet
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Form 16 & Payslip Proof in Loan OTS | SettleLoans',
  description: 'What income and hardship documents do banks verify in a salaried personal loan settlement? Master Form 16, salary slips, bank statements, and FOIR.',
  keywords: [
    'personal loan settlement and form 16 salary slip proof',
    'documents required for personal loan settlement salaried',
    'do banks ask for salary slip in loan settlement',
    'form 16 verification in one time settlement',
    'bank statement check during personal loan settlement',
    'hardship proof for salaried loan settlement india',
    'can bank verify epfo or form 16 during settlement',
    'salaried ots documentation checklist'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-and-form-16-salary-slip-proof',
  },
  openGraph: {
    title: 'Form 16 & Payslip Proof in Loan OTS | SettleLoans',
    description: 'What income and hardship documents do banks verify in a salaried personal loan settlement? Master Form 16, salary slips, bank statements, and FOIR.',
    url: 'https://www.settleloans.in/personal-loan-settlement-and-form-16-salary-slip-proof',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg',
        width: 1200,
        height: 675,
        alt: 'Form 16 Salary Slips and Hardship Proof Checklist for Salaried Personal Loan Settlement',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form 16 & Payslip Proof in Loan OTS | SettleLoans',
    description: 'What income and hardship documents do banks verify in a salaried personal loan settlement? Master Form 16, salary slips, bank statements, and FOIR.',
    images: ['https://www.settleloans.in/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.settleloans.in/personal-loan-settlement-and-form-16-salary-slip-proof#breadcrumb",
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
          "name": "Form 16 & Salary Slip Proof in OTS",
          "item": "https://www.settleloans.in/personal-loan-settlement-and-form-16-salary-slip-proof"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settlement-and-form-16-salary-slip-proof#article",
      "headline": "Form 16, Salary Slips & Hardship Proofs in Personal Loan OTS",
      "description": "Authoritative underwriting guide explaining exactly what income, tax, and financial-hardship documents Indian banks and NBFCs demand from salaried employees during Personal Loan One-Time Settlement (OTS), including Form 16 Part A/B, payslips, 6-month bank statements, and medical or FOIR proofs.",
      "image": "https://www.settleloans.in/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg",
      "datePublished": "2026-11-11T12:30:00+05:30",
      "dateModified": "2026-11-11T12:30:00+05:30",
      "mainEntityOfPage": "https://www.settleloans.in/personal-loan-settlement-and-form-16-salary-slip-proof",
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-and-form-16-salary-slip-proof#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do banks ask for Form 16 and latest salary slips before approving a salaried personal loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI's Framework for Compromise Settlements, bank Zonal Credit Committees must record objective evidence in their audit file proving that waiving 35% to 60% of a loan is commercially justified due to the borrower's genuine inability to service full dues. For salaried borrowers, payslips and Form 16 verify compressed net income, pay cuts, or unsustainable Fixed Obligation to Income Ratios (FOIR)."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank pull my Form 16, ITR, or 26AS from the Income Tax portal without my consent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Banks cannot secretly log into your Income Tax e-filing portal or download TRACES Form 16 / AIS without your credentials or explicit Account Aggregator / OTP consent. However, for exception-level OTS waivers on larger ₹5 Lakh+ loans, the credit committee can make voluntary submission of Form 16 or bank statements a precondition for approving a deeper principal haircut."
          }
        },
        {
          "@type": "Question",
          "name": "What exactly do credit analysts look for on a salaried employee's payslip during OTS review?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Analysts separate headline CTC from real Net Take-Home Pay. They check: (1) loss-of-pay (LOP) days or bench-allowance removals, (2) statutory TDS and PF deductions, (3) voluntary inflated deductions like high VPF that artificially hide cash, and (4) how much net salary actually remains after comparing against your multi-lender EMI obligations on CIBIL."
          }
        },
        {
          "@type": "Question",
          "name": "Why do banks ask for Form 16 Part A and Part B specifically between May and July?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Employers issue TRACES-generated Form 16 by June 15 each year covering the completed financial year. Part A carries a unique TRACES certificate number proving exact employer TDS remitted under Section 192, confirming whether you had an undisclosed job gap, lower annual earnings than sanction year, or zero annual bonus."
          }
        },
        {
          "@type": "Question",
          "name": "What red flags in a 6-month salary bank statement can hurt my One-Time Settlement request?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Credit officers flag high-value discretionary spending during months you missed EMIs, such as online gaming/betting/F&O trading debits, luxury travel, large unexplained transfers to family accounts right after payday, or secret secondary salary credits. Conversely, rent debits, hospital pharmacy bills, school fees, and bounced EMI trails strongly support genuine hardship."
          }
        },
        {
          "@type": "Question",
          "name": "Is it ever compulsory to submit payslips if my loan is already 240+ days past due in a camp offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not always. For smaller balances or aged post-write-off accounts (180 to 360+ DPD), banks frequently run pre-approved system-grid settlement campaigns where standard grid waivers require only KYC and lump-sum payment. Income and hardship documents become mandatory primarily when seeking a customized 'Deviation / Exception Approval' below the standard system floor on larger ₹3L to ₹25L+ loans."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if someone submits an edited PDF payslip or altered bank statement to get a lower settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Never submit an altered document under any circumstances. Banks run automated PDF forensic software (checking font layers, creation metadata, running balance arithmetic, and TRACES certificate hashes). Submitting a forged payslip or bank statement converts an ordinary civil loan default into criminal forgery and cheating exposure while permanently blacklisting your settlement request."
          }
        },
        {
          "@type": "Question",
          "name": "Should I send my salary slips and Form 16 on WhatsApp to a third-party collection agent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Never hand sensitive tax, PAN, employer, and salary documents over personal WhatsApp numbers to unverified field callers, as rogue callers may misuse employer details to intimidate you. Submit hardship proofs strictly via email to the lender's official corporate domain (e.g., @hdfcbank.com, @icicibank.com, @axisbank.com, @bajajfinserv.in) or authorized portal."
          }
        },
        {
          "@type": "Question",
          "name": "If my salary did not drop, how can I still prove genuine salaried hardship with Form 16 and payslips?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Even if your net salary remained flat at Rs. 85,000, pairing your payslips with (1) a full CIBIL report showing Rs. 72,000/month in combined multi-lender EMIs (85% FOIR) plus (2) dependent parent hospitalisation bills, rent agreement, or spouse job-loss proof objectively demonstrates mathematical insolvency."
          }
        },
        {
          "@type": "Question",
          "name": "What documents replace current salary slips if I was laid off 4 months ago?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For unemployed former salaried borrowers, submit your HR termination/relieving letter, final month's payslip, Full & Final (F&F) settlement sheet, and an updated 4-to-6-month savings bank statement proving zero incoming salary credits since your Last Working Day."
          }
        },
        {
          "@type": "Question",
          "name": "Can the bank call my employer listed on Form 16 Part A to cross-check my salary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. RBI Fair Practices guidelines and the consolidated RBI recovery conduct directions taking effect on 1 January 2027 strictly forbid lenders and recovery agents from contacting your HR department, payroll team, or colleagues regarding a defaulted loan."
          }
        },
        {
          "@type": "Question",
          "name": "Does a waived personal loan amount appear on my Form 16 from my employer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Form 16 only reports salary, perquisites, and Section 192 TDS processed by your employer; your employer is never notified by the bank or Income Tax Department about a personal retail loan settlement."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'why-banks-verify-salaried', title: '1. Why Banks Audit Salaried Hardship Proofs' },
  { id: 'complete-document-matrix', title: '2. Complete Salaried OTS Document Checklist' },
  { id: 'salary-slip-forensics', title: '3. What Credit Teams Check on Salary Slips' },
  { id: 'form-16-part-a-b', title: '4. How Form 16 Part A & B Support Your OTS' },
  { id: 'bank-statement-scrutiny', title: '5. 6-Month Bank Statement Audit: Dos & Red Flags' },
  { id: 'grid-vs-exception-ots', title: '6. Grid OTS (No Docs) vs Deviation OTS (Full Docs)' },
  { id: 'flat-salary-high-foir', title: '7. Proving Hardship When Salary Has Not Dropped' },
  { id: 'zero-tolerance-altered-pdfs', title: '8. Strict Warning: Never Submit Altered PDFs' },
  { id: 'safe-submission-privacy', title: '9. Safe Domain Submission & Workplace Privacy' },
  { id: 'form16-tax-myth', title: '10. Does Settled Debt Show Up on Employer Form 16?' },
  { id: 'company-resolution-section', title: '11. SettleLoans Salaried Dossier Preparation' },
  { id: 'faqs', title: '12. Frequently Asked Questions' },
];

export default function PersonalLoanSettlementForm16SalarySlipProofPage() {
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
            <FileText className="w-3.5 h-3.5" />
            <span>Salaried OTS Underwriting • Form 16, Payslips &amp; Bank Trails</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Form 16, Salary Slips &amp; Hardship Proofs in Personal Loan OTS
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5">
            Wondering why a bank settlement officer asked for your latest 3 salary slips, Form 16, or 6-month bank statement? Discover exactly how credit committees verify salaried repayment capacity, when documents unlock deeper exception waivers on ₹3L+ loans, and how to submit proofs safely without risking employer privacy.
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
              <span>Credit Underwriting Verified</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#settlement-assessment"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Build My ₹3L+ Salaried Hardship Dossier</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Confidential Document Audit
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
              <li className="font-bold text-slate-900" aria-current="page">Form 16 &amp; Salary Slip Proof in OTS</li>
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
                SettleLoans compiles institutional hardship dossiers and negotiates exception-level OTS approvals for salaried borrowers holding ₹3 Lakhs or more in combined unsecured debt.
              </p>
            </div>
          </aside>

          {/* Main Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">

            {/* Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Executive Summary: Salaried OTS Documentation</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Why Banks Ask:</strong> Under RBI&apos;s Compromise Settlement Framework, Zonal Credit Officers need paper evidence proving genuine cash-flow distress so internal auditors do not flag your principal waiver as an unjustified giveaway to a solvent borrower.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Grid vs Deviation Split:</strong> Standard system-grid OTS offers (typically 55% to 70% of dues) often require zero income proofs, whereas deeper <strong>Deviation / Exception Waivers</strong> on ₹3L to ₹25L+ loans require payslips, Form 16, bank statements, and medical/FOIR proofs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Tolerance on Edited PDFs:</strong> Never alter a payslip, Form 16, or bank statement. Automated metadata and TRACES checks flag doctored PDFs immediately, creating criminal forgery risk.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Submit Only to Official Bank Domains:</strong> Never WhatsApp your Form 16 or employer payslip to third-party tele-callers; transmit strictly to verified bank email domains.</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="why-banks-verify-salaried" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Why Banks Audit Salaried Borrowers Differently in OTS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a small cash-based shopkeeper closes down and defaults on an unsecured loan, there is rarely an audited trail of monthly earnings. When a <strong>salaried IT engineer, corporate manager, banker, or pharma executive</strong> defaults on ₹6 Lakhs or ₹18 Lakhs of personal loans, the bank knows from original sanction underwriting that you operate inside India&apos;s formal payroll ecosystem: monthly NEFT salary credits, Section 192 TDS filings on TRACES, and EPFO UAN contributions.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Reserve Bank of India&apos;s <em>Framework for Compromise Settlements and Technical Write-Offs</em>, every bank and NBFC must follow a board-approved policy with clear delegation of waiver powers (Branch Manager, Regional Credit Manager, Zonal Committee, Head Office Committee). Before a Zonal Manager signs off on waiving ₹4.5 Lakhs of principal and accrued interest on a salaried file, their internal audit checklist asks one core question: <strong>&quot;Is this borrower genuinely unable to service full EMIs, or are they a high-earning willful defaulter hiding surplus cash?&quot;</strong>
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Clean, honest salaried documentation turns that suspicion into an open-and-shut approval memo!
              </p>
            </section>

            {/* Salaried Combined-Debt Assessment Framing + Funnel */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                <Wallet className="w-4 h-4" />
                <span>Salaried Hardship &amp; Portfolio Check (₹3,00,000 Minimum)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Need help packaging your FOIR, medical, pay-cut, or job-gap proofs across multiple creditors? Enter your <strong>total combined unsecured debt</strong> across personal loans, top-ups, and cards below (cases from <strong>₹3 Lakhs and above</strong> qualify for full legal &amp; underwriting representation).
              </p>
            </div>

            <LoanSettlementAssessmentFunnel />

            {/* Section 2 */}
            <section id="complete-document-matrix" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Complete Salaried Hardship &amp; Income Proof Matrix
              </h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Salaried Hardship Category</th>
                      <th>Primary Income / Tax Proofs</th>
                      <th>Corroborating Hardship Proofs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Pay Cut / Bench / Variable Loss</strong></td>
                      <td>3 pre-cut payslips + 3 post-cut payslips; 6-month salary bank statement; latest Form 16 (if Y-o-Y drop).</td>
                      <td>HR compensation revision letter, bench policy circular, or lower-CTC new offer letter.</td>
                    </tr>
                    <tr>
                      <td><strong>Multi-Loan Debt Trap (Flat Salary, 70%+ FOIR)</strong></td>
                      <td>Latest 3 salary slips; 6-month bank statement showing net take-home vs fixed debits.</td>
                      <td>Full CIBIL report listing all active personal loans/cards + house rent agreement + school/parent dependency proofs.</td>
                    </tr>
                    <tr>
                      <td><strong>Medical Crisis in Family</strong></td>
                      <td>Latest 3 salary slips; bank statement showing out-of-pocket hospital/pharmacy payments.</td>
                      <td>Hospital discharge summaries, oncology/ICU/surgery invoices, insurance shortfall settlement letters.</td>
                    </tr>
                    <tr>
                      <td><strong>Recent Layoff / Career Gap</strong></td>
                      <td>Final payslip; Full &amp; Final (F&amp;F) sheet; Form 16 showing mid-year TDS stop; 6m bank statement with Rs. 0 salary.</td>
                      <td>HR termination / redundancy / relieving letter + severance exhaustion trail.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 */}
            <section id="salary-slip-forensics" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Line-by-Line: What Credit Analysts Check on Salary Slips
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you submit your last 3 months&apos; salary slips to a bank&apos;s central settlement team, the analyst does not stop at the bottom-right &quot;Net Pay&quot; figure. They audit four specific components:
              </p>
              <ol className="list-decimal pl-5 space-y-2.5 text-sm sm:text-base text-slate-700">
                <li><strong>Gross Earnings vs Mandatory Statutory Deductions:</strong> Analysts subtract mandatory Employee EPF (12% of basic), Professional Tax (Rs. 200), and Section 192 Income Tax TDS to compute your <em>true disposable net salary</em>.</li>
                <li><strong>Voluntary Provident Fund (VPF) &amp; ESPP Deductions:</strong> If your gross pay is Rs. 1,40,000, but you voluntarily set VPF to Rs. 35,000/month and ESPP stock purchase to Rs. 20,000/month so your net payslip looks like Rs. 62,000, the credit analyst immediately adds Rs. 55,000 back into your repayment capacity because VPF/ESPP are voluntary wealth-building choices!</li>
                <li><strong>Loss of Pay (LOP) &amp; Missing Shift/Project Allowances:</strong> Unpaid medical leave days or removed US/UK shift allowances directly validate genuine temporary or structural distress.</li>
                <li><strong>Internal Employer Salary Advance / Loan Recoveries:</strong> Deductions toward employer medical advances or tax arrears help explain why less cash reaches your bank account.</li>
              </ol>
            </section>

            {/* Section 4 */}
            <section id="form-16-part-a-b" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. How Form 16 (Part A &amp; Part B) Is Used in OTS Approvals
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Especially between <strong>May and September</strong> (right after employers release annual tax certificates for the preceding financial year), Zonal Settlement Committees on larger personal loans (₹6 Lakhs to ₹30 Lakhs+) frequently request your latest <strong>Form 16</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Form 16 Part A (TRACES Certified):</strong> Generated directly from the Income Tax Department&apos;s TRACES portal with a unique 7-alphabet certificate number, Part A shows quarter-by-quarter summary of amount paid/credited and tax deducted at source. If you were unemployed for Q3 and Q4, or suffered a mid-year pay cut, Part A&apos;s quarterly table proves that income drop with 100% government-backed credibility!</li>
                <li><strong>Form 16 Part B (Annexure Breakup):</strong> Details gross salary under Section 17(1), perquisites, exempt HRA, and total taxable income. Comparing your sanction-year Form 16 (say Rs. 21 Lakhs gross) against your latest Form 16 (say Rs. 13.5 Lakhs gross after losing variable bonuses or switching roles) gives the bank&apos;s credit head irrefutable audit cover to approve a steeper exception waiver.</li>
                <li><strong>Form 26AS &amp; Annual Information Statement (AIS) Context:</strong> Occasionally, on high-value settlements exceeding ₹12 Lakhs to ₹20 Lakhs, credit officers ask whether you hold undisclosed freelance, consultancy (Section 194J), or fixed-deposit interest income (Section 194A) outside your salaried paycheck. Voluntary submission of your TRACES Form 26AS confirming zero parallel business or investment income eliminates internal speculation that you are sitting on hidden fixed deposits at rival banks.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Practical seasonal tip for salaried employees negotiating between January and May: if the bank asks for Form 16 of the current financial year before your employer generates it in June, formally submit your latest March year-to-date (YTD) payslip alongside last year&apos;s Form 16 so your file does not stall in the Zonal approval queue waiting for June payroll tax certificates.
              </p>
            </section>

            {/* Section 5 */}
            <section id="bank-statement-scrutiny" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. 6-Month Bank Statement Audit: Supporting Trails vs Red Flags
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Alongside salary slips, banks normally ask for a <strong>3-to-6-month PDF bank statement</strong> of the account where your salary is credited. Know what helps your proposal and what sabotages it:
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Entries That Strongly Support OTS Approval</th>
                      <th>Entries That Trigger Rejection or Higher OTS Demands</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Monthly house rent NEFTs, electricity/society bills, school fee receipts, and pharmacy/hospital charges eating up net pay.</td>
                      <td>Recurring debits to fantasy gaming, offshore betting, crypto exchanges, or high-frequency F&amp;O stockbroker margin calls.</td>
                    </tr>
                    <tr>
                      <td>Visible history of struggled EMI payments and NACH bounce charges before cash completely ran out.</td>
                      <td>Sweeping Rs. 60,000 on the 1st of every month to a spouse&apos;s or broker&apos;s account while claiming zero capacity (unless explained as documented household/medical support or transparent OTS reserve).</td>
                    </tr>
                    <tr>
                      <td>Single transparent salary stream matching your submitted payslips.</td>
                      <td>Undisclosed second moonlighting/consulting income streams hitting the same bank statement.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6 */}
            <section id="grid-vs-exception-ots" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. System-Grid OTS (Zero Docs) vs Deviation OTS (Full Dossier)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many salaried borrowers ask: <em>&quot;What if I prefer not to share my current salary slip or Form 16 at all?&quot;</em> Understanding internal bank approval tiers answers this clearly:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Tier A: Pre-Approved System Grid / Camp OTS (Minimal or Zero Income Docs):</strong> Once an unsecured personal loan ages past 150 to 270+ DPD (or enters technical write-off), banks pre-load a standard algorithmic settlement floor in their collection CRM (for instance, 55% to 68% of total dues). At that standard grid rate, the system often generates an official OTS Sanction Letter requiring <strong>only KYC + settlement request letter</strong> without asking for Form 16 or current payslips!</li>
                <li><strong>Tier B: Exception / Deviation OTS (Hardship Dossier Mandatory):</strong> When you need a <strong>deeper waiver below the standard CRM floor</strong> (for example, aiming for 38% to 48% on a ₹10 Lakh claim due to severe multi-loan insolvency or medical trauma, never guaranteed), the settlement officer must escalate your file to the Zonal Credit Committee or National Recovery Head. That committee <em>requires</em> objective income/hardship proofs (payslips, Form 16, medical bills, or CIBIL FOIR sheet) to justify overriding the standard grid!</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="flat-salary-high-foir" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. How to Prove Hardship When Your Salary Did Not Drop
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Thousands of salaried borrowers earn a steady Rs. 95,000 net every month with zero pay cut, yet are completely insolvent because medical emergencies or past refinancing left them holding Rs. 22 Lakhs across four lenders with Rs. 78,000 in combined monthly EMIs (<strong>82% FOIR</strong>).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Do not hide a flat Rs. 95,000 payslip! Instead, pair that exact Rs. 95,000 payslip with a <strong>1-Page Salaried Cash-Flow &amp; FOIR Schedule</strong> backed by your full CIBIL report:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-slate-700">
                <li>Net Verified Monthly Salary: <strong>Rs. 95,000</strong></li>
                <li>Less Essential Household Rent, Food, School &amp; Parent Medical: <strong>Rs. 52,000</strong> (leaving Rs. 43,000 maximum debt-servicing surplus across ALL lenders combined)</li>
                <li>Contractual EMIs Across 4 Unsecured Lenders on CIBIL: <strong>Rs. 78,000/month</strong> (a permanent <strong>Rs. 35,000/month deficit</strong>)</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a Zonal Credit Manager sees verified CIBIL proof that three rival banks are competing for the same Rs. 43,000 surplus, approving a realistic lump-sum One-Time Settlement becomes the bank&apos;s most rational commercial decision.
              </p>
            </section>

            {/* Section 8 */}
            <section id="zero-tolerance-altered-pdfs" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Absolute Red Line: Never Submit Doctored Payslips or PDFs
              </h2>
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-rose-950 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <span>Criminal Forgery &amp; Fraud Blacklist Warning</span>
                </div>
                <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                  Unscrupulous local middlemen sometimes offer to &quot;edit your PDF payslip or bank statement to show half salary&quot; to win a cheaper settlement. <strong>Refuse immediately.</strong> Indian banks and NBFCs run automated document tampering detectors (Perfios / FinBox PDF metadata layer checks, running-balance checksums, and TRACES certificate hash validation). Submitting a forged financial document to obtain a bank pecuniary concession exposes you to criminal complaints for forgery and cheating under the Bharatiya Nyaya Sanhita (BNS) and permanently kills your OTS eligibility. Honest FOIR math and real medical/debt proofs win legitimate settlements cleanly without risking your freedom or career.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="safe-submission-privacy" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Safe Submission Channels &amp; Protecting Employer Privacy
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Salaried borrowers rightly hesitate to hand over documents displaying their current employer&apos;s name out of fear that an aggressive field agent will show up at their tech park reception. Follow three strict hygiene rules:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Email Only to Official Bank Domains:</strong> Never send payslips, Form 16, or bank statements over personal WhatsApp to third-party agency callers. Email your hardship packet directly to the bank&apos;s official settlement/nodal domain (such as `@hdfcbank.com`, `@icicibank.com`, `@axisbank.com`, `@kotak.com`, `@sbi.co.in`, or `@bajajfinserv.in`) with a watermark reading: <em>&quot;Confidential: Submitted Solely for Loan Account [XXXX] OTS Evaluation.&quot;</em></li>
                <li><strong>Enforce Statutory Workplace Privacy:</strong> Under RBI&apos;s Fair Practices Code and RBI&apos;s updated recovery conduct directions effective <strong>1 January 2027</strong>, lenders are strictly prohibited from using employer information on your payslip or Form 16 to contact HR, managers, or colleagues, and all legitimate communications must stay within <strong>8:00 AM to 7:00 PM</strong>.</li>
                <li><strong>Keep New Payroll Account Unlinked:</strong> If your current salary arrives at an unlinked bank (say IDFC FIRST while settling HDFC), submitting that bank statement shows HDFC where you bank, which is completely safe because HDFC cannot debit an external bank without an active NACH mandate or a final court attachment decree!</li>
              </ol>
            </section>

            {/* Section 10 */}
            <section id="form16-tax-myth" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                10. Does Settling a Personal Loan Affect Future Employer Form 16?
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                No. A persistent salaried myth claims that if a bank waives Rs. 3 Lakhs in a personal loan One-Time Settlement, the bank reports that Rs. 3 Lakhs to your employer&apos;s HR team on next year&apos;s Form 16. That never happens. Form 16 strictly reflects employment compensation and Section 192 salary TDS handled by your company. (For general tax treatment nuances of waived retail vs business debt in India, read our dedicated analysis on <Link href="/what-are-the-income-tax-implications-of-a-settled-debt-amount" className="text-[#1F5EFF] font-semibold underline">Income Tax Implications of a Settled Debt Amount</Link>.)
              </p>
            </section>

            {/* Section 11: Company Section */}
            <section id="company-resolution-section" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                11. SettleLoans Salaried Underwriting &amp; Dossier Representation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For salaried professionals carrying ₹3 Lakhs or more in combined unsecured loans, SettleLoans structures institutional-grade FOIR and hardship dossiers, routes sensitive income documents exclusively through authorized bank nodal and Zonal channels, shields your employer privacy, and verifies every OTS Sanction Letter and No Dues Certificate.
              </p>
              <CompanySection />
            </section>

            {/* Section 12: FAQs */}
            <section id="faqs" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                12. Frequently Asked Questions: Form 16 &amp; Payslip Proofs
              </h2>

              <div className="space-y-3">
                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all" open>
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      1. Why do banks ask for Form 16 and latest salary slips before approving a salaried personal loan settlement?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Under RBI&apos;s Framework for Compromise Settlements, bank Zonal Credit Committees must record objective evidence in their audit file proving that waiving 35% to 60% of a loan is commercially justified due to the borrower&apos;s genuine inability to service full dues. For salaried borrowers, payslips and Form 16 verify compressed net income, pay cuts, or unsustainable Fixed Obligation to Income Ratios (FOIR).</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      2. Can a bank pull my Form 16, ITR, or 26AS from the Income Tax portal without my consent?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>No. Banks cannot secretly log into your Income Tax e-filing portal or download TRACES Form 16 / AIS without your credentials or explicit Account Aggregator / OTP consent. However, for exception-level OTS waivers on larger ₹5 Lakh+ loans, the credit committee can make voluntary submission of Form 16 or bank statements a precondition for approving a deeper principal haircut.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      3. What exactly do credit analysts look for on a salaried employee&apos;s payslip during OTS review?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Analysts separate headline CTC from real Net Take-Home Pay. They check: (1) loss-of-pay (LOP) days or bench-allowance removals, (2) statutory TDS and PF deductions, (3) voluntary inflated deductions like high VPF that artificially hide cash, and (4) how much net salary actually remains after comparing against your multi-lender EMI obligations on CIBIL.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      4. Why do banks ask for Form 16 Part A and Part B specifically between May and July?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Employers issue TRACES-generated Form 16 by June 15 each year covering the completed financial year. Part A carries a unique TRACES certificate number proving exact employer TDS remitted under Section 192, confirming whether you had an undisclosed job gap, lower annual earnings than sanction year, or zero annual bonus.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      5. What red flags in a 6-month salary bank statement can hurt my One-Time Settlement request?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Credit officers flag high-value discretionary spending during months you missed EMIs, such as online gaming/betting/F&amp;O trading debits, luxury travel, large unexplained transfers to family accounts right after payday, or secret secondary salary credits. Conversely, rent debits, hospital pharmacy bills, school fees, and bounced EMI trails strongly support genuine hardship.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      6. Is it ever compulsory to submit payslips if my loan is already 240+ days past due in a camp offer?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Not always. For smaller balances or aged post-write-off accounts (180 to 360+ DPD), banks frequently run pre-approved system-grid settlement campaigns where standard grid waivers require only KYC and lump-sum payment. Income and hardship documents become mandatory primarily when seeking a customized &apos;Deviation / Exception Approval&apos; below the standard system floor on larger ₹3L to ₹25L+ loans.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      7. What happens if someone submits an edited PDF payslip or altered bank statement to get a lower settlement?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Never submit an altered document under any circumstances. Banks run automated PDF forensic software (checking font layers, creation metadata, running balance arithmetic, and TRACES certificate hashes). Submitting a forged payslip or bank statement converts an ordinary civil loan default into criminal forgery and cheating exposure while permanently blacklisting your settlement request.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      8. Should I send my salary slips and Form 16 on WhatsApp to a third-party collection agent?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>No. Never hand sensitive tax, PAN, employer, and salary documents over personal WhatsApp numbers to unverified field callers, as rogue callers may misuse employer details to intimidate you. Submit hardship proofs strictly via email to the lender&apos;s official corporate domain (e.g., @hdfcbank.com, @icicibank.com, @axisbank.com, @bajajfinserv.in) or authorized portal.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      9. If my salary did not drop, how can I still prove genuine salaried hardship with Form 16 and payslips?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Even if your net salary remained flat at Rs. 85,000, pairing your payslips with (1) a full CIBIL report showing Rs. 72,000/month in combined multi-lender EMIs (85% FOIR) plus (2) dependent parent hospitalisation bills, rent agreement, or spouse job-loss proof objectively demonstrates mathematical insolvency.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      10. What documents replace current salary slips if I was laid off 4 months ago?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>For unemployed former salaried borrowers, submit your HR termination/relieving letter, final month&apos;s payslip, Full &amp; Final (F&amp;F) settlement sheet, and an updated 4-to-6-month savings bank statement proving zero incoming salary credits since your Last Working Day.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      11. Can the bank call my employer listed on Form 16 Part A to cross-check my salary?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>No. RBI Fair Practices guidelines and the consolidated RBI recovery conduct directions taking effect on 1 January 2027 strictly forbid lenders and recovery agents from contacting your HR department, payroll team, or colleagues regarding a defaulted loan.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      12. Does a waived personal loan amount appear on my Form 16 from my employer?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>No. Form 16 only reports salary, perquisites, and Section 192 TDS processed by your employer; your employer is never notified by the bank or Income Tax Department about a personal retail loan settlement.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* Statutory References */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Regulatory &amp; Underwriting References (Checked 11 November 2026)
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
                  RBI Framework for Compromise Settlements &amp; Technical Write-Offs
                </span>
                <span className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700">
                  Income Tax Act, 1961: Section 203 &amp; Rule 31 TRACES Form 16 Certificate
                </span>
                <span className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700">
                  RBI Fair Practices Code: Borrower &amp; Workplace Confidentiality Rules
                </span>
              </div>
            </section>

            {/* Related Guides */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Salaried Settlement &amp; Income Proof Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/loan-settlement-for-salaried-people" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Loan Settlement for Salaried People
                </Link>
                <Link href="/use-annual-bonus-to-settle-personal-loan" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Use Annual Bonus to Settle Loans
                </Link>
                <Link href="/appraisal-or-increment-restructure-or-settle-personal-loan" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Appraisal Increment: Restructure vs OTS
                </Link>
                <Link href="/salary-cut-personal-loan-emi-restructuring-vs-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Salary Cut: Restructuring vs OTS
                </Link>
                <Link href="/what-are-the-income-tax-implications-of-a-settled-debt-amount" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Income Tax Implications of Settled Debt
                </Link>
                <Link href="/no-dues-certificate-after-loan-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  No Dues Certificate Checklist
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
                  <p className="text-xs text-slate-500">Salaried OTS Underwriting &amp; Dossier Specialist</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Prepares Zonal Credit Committee hardship packages using honest FOIR, medical, and pay-cut documentation for salaried borrowers.
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
                <span>Salaried OTS Dossier Desk</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Bank Demanding Salary Proof on ₹3L+ Debt?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Present your FOIR and hardship evidence safely through official bank channels without exposing your employer privacy.
              </p>
              <a
                href="#settlement-assessment"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Start ₹3L+ Dossier Review
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Dossier Safeguards
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>100% Authentic FOIR &amp; Hardship Framing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Official Bank Domain Submission Only</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Strict Employer Privacy Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Zonal Deviation Waiver Structuring</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
