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
  Building2,
  Landmark,
  ShieldAlert,
  Scale,
  FileText,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  UserCheck,
  BadgePercent,
  AlertCircle,
  Wallet,
  Briefcase
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'HDFC Salary Account Auto-Debit Default | SettleLoans',
  description: 'Facing HDFC salary account auto-debit or set-off on a personal loan default? Learn Section 60 CPC limits, HR payroll shift, and ₹3L+ settlement.',
  keywords: [
    'hdfc salary account auto debit personal loan default',
    'hdfc bank hold balance personal loan overdue',
    'hdfc corporate salary account set off personal loan',
    'stop hdfc standing instruction personal loan salary account',
    'hdfc personal loan si bounce charges salary account',
    'change hdfc salary account during personal loan default',
    'section 171 contract act vs section 60 cpc hdfc salary',
    'hdfc personal loan settlement for salaried employees'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/hdfc-salary-account-auto-debit-personal-loan-default',
  },
  openGraph: {
    title: 'HDFC Salary Account Auto-Debit Default | SettleLoans',
    description: 'Facing HDFC salary account auto-debit or set-off on a personal loan default? Learn Section 60 CPC limits, HR payroll shift, and ₹3L+ settlement.',
    url: 'https://www.settleloans.in/hdfc-salary-account-auto-debit-personal-loan-default',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/hdfc-personal-loan-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'HDFC Salary Account Auto-Debit and Personal Loan Default Guide for Salaried Borrowers',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HDFC Salary Account Auto-Debit Default | SettleLoans',
    description: 'Facing HDFC salary account auto-debit or set-off on a personal loan default? Learn Section 60 CPC limits, HR payroll shift, and ₹3L+ settlement.',
    images: ['https://www.settleloans.in/images/infographics/hdfc-personal-loan-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.settleloans.in/hdfc-salary-account-auto-debit-personal-loan-default#breadcrumb",
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
          "name": "HDFC Salary Account Auto-Debit & Loan Default",
          "item": "https://www.settleloans.in/hdfc-salary-account-auto-debit-personal-loan-default"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/hdfc-salary-account-auto-debit-personal-loan-default#article",
      "headline": "HDFC Salary Account Auto-Debit & Personal Loan Default Guide",
      "description": "Comprehensive legal and banking guide for salaried employees holding both an HDFC Corporate Salary Account and an HDFC Bank Personal Loan. Covers Standing Instruction sweeps, Hold Balance liens, Section 171 Contract Act vs Section 60 CPC protections, lawful HR payroll migration, and structured One-Time Settlement.",
      "image": "https://www.settleloans.in/images/infographics/hdfc-personal-loan-settlement.jpg",
      "datePublished": "2026-11-11T10:00:00+05:30",
      "dateModified": "2026-11-11T10:00:00+05:30",
      "mainEntityOfPage": "https://www.settleloans.in/hdfc-salary-account-auto-debit-personal-loan-default",
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
      "@id": "https://www.settleloans.in/hdfc-salary-account-auto-debit-personal-loan-default#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why did HDFC Bank deduct my entire monthly salary when only one personal loan EMI was overdue?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When both your Corporate Salary Account and Personal Loan sit under the same HDFC Bank Customer ID, the bank's core banking system links your deposit ledger with your loan ledger. If multiple EMIs or bounce charges remain unpaid, HDFC often places an automated Hold Balance or exercises an internal contractual set-off the moment payroll hits. However, sweeping 100% of subsistence wages without prior written notice conflicts with Section 60(1)(i) of the Code of Civil Procedure and RBI fair lending standards."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between an HDFC Standing Instruction (SI) and an NPCI NACH auto-debit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An NPCI NACH mandate operates across two different banks through the National Payments Corporation of India clearing house. An HDFC Standing Instruction (SI) or internal Direct Debit is an intra-bank instruction executed directly inside HDFC Bank's core banking software. Because an internal SI does not pass through external NPCI rails, cancelling e-NACH on third-party portals will not stop an internal HDFC salary account auto-debit."
          }
        },
        {
          "@type": "Question",
          "name": "What are HDFC Bank's official EMI return and penal charges on a defaulted personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "According to HDFC Bank's official schedule of standard retail loan servicing charges (checked on 11 November 2026), EMI return or SI/ECS/NACH bounce fees range from Rs. 450 to Rs. 550 per dishonour instance plus 18% GST (tiered across 1st, 2nd, and 3rd returns in a month). Overdue EMIs attract non-capitalized penal charges up to 2% per month (24% per annum) plus GST for the actual days of delay."
          }
        },
        {
          "@type": "Question",
          "name": "Does Section 171 of the Indian Contract Act allow HDFC Bank to freeze my Corporate Salary Account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 171 of the Indian Contract Act, 1872 grants bankers a general lien over physical goods, share certificates, gold, or securities bailed with the bank. Indian High Courts have repeatedly clarified that money credited into a savings or salary account creates a debtor-creditor relationship rather than a bailment of goods. What banks actually invoke on cash balances is the equitable or contractual Right of Set-Off, which strictly requires debt maturity, mutuality of capacity, and advance notice."
          }
        },
        {
          "@type": "Question",
          "name": "How much of my salary is protected under Section 60(1)(i) of the Code of Civil Procedure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 60(1)(i) of the CPC, in execution of a civil money decree, the first Rs. 1,000 plus two-thirds of the remaining salary is statutorily exempt from attachment. For a salaried employee earning Rs. 76,000 net per month, Rs. 51,000 (Rs. 1,000 plus two-thirds of Rs. 75,000) is exempt even from a court attachment order. Advocates cite this statutory benchmark to challenge unilateral 100% salary sweeps by private banks."
          }
        },
        {
          "@type": "Question",
          "name": "Is it legal to ask my HR department to move my salary credit to a non-HDFC bank account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, in almost all private-sector corporate employment contracts, choosing the bank account where you receive earned wages is your lawful right unless you signed a rare employer-guaranteed tripartite check-off undertaking. Shifting future payroll to an unlinked bank account protects household rent, groceries, and medical sustenance while you engage HDFC Bank transparently for restructuring or One-Time Settlement."
          }
        },
        {
          "@type": "Question",
          "name": "What happens to my zero-balance HDFC Corporate Salary Account after I stop receiving salary in it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under HDFC Bank Corporate Salary Account terms, if regular corporate salary credits do not hit the account for 3 to 6 consecutive months, the bank reclassifies the zero-balance salary account into a Regular Savings Account requiring an Average Monthly Balance (typically Rs. 10,000 in metro and urban branches). Non-maintenance charges can then accumulate alongside existing loan holds unless addressed during account closure or loan settlement."
          }
        },
        {
          "@type": "Question",
          "name": "Why does HDFC NetBanking show a negative Available Balance or Hold Balance on my salary account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When an HDFC Personal Loan misses scheduled instalments, the collection system places a shadow hold or lien equal to the overdue EMI plus accumulated bounce and penal charges. NetBanking subtracts this Hold Amount from your ledger balance, displaying a negative Available Balance. Any fresh UPI transfer, reimbursement, or salary credit entering the account is automatically absorbed up to that hold figure."
          }
        },
        {
          "@type": "Question",
          "name": "Can HDFC Bank auto-debit my new salary account in SBI, Axis, or ICICI without a fresh mandate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. HDFC Bank has zero administrative access to debit a savings or salary account maintained at another bank unless you personally registered an active NPCI NACH mandate on that external account or HDFC obtains a formal court/DRT attachment order after full judicial proceedings."
          }
        },
        {
          "@type": "Question",
          "name": "Can I negotiate a One-Time Settlement with HDFC Bank while still employed in a salaried job?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, provided there is documented financial hardship showing that your net monthly salary cannot service your total debt obligations. Examples include severe pay cuts, variable pay loss, medical emergencies in the family, supporting dependent parents, or multiple overlapping personal loans exceeding 65% to 80% of take-home pay. HDFC Bank evaluates salaried compromise proposals after NPA classification (90+ days past due) based on verifiable income-to-obligation stress."
          }
        },
        {
          "@type": "Question",
          "name": "What realistic settlement range does HDFC Bank accept on defaulted salaried personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Settlement outcomes are never guaranteed and depend on NPA aging, salary continuity, and lump-sum readiness. In practice, once an unsecured HDFC personal loan crosses 90 to 180+ days overdue, realistic One-Time Settlement closures often fall between 40% and 65% of total claimed dues (starting with 100% waiver of penal charges and bounce fees, plus a negotiated haircut on principal and accrued interest), subject to Zonal Credit Committee approval."
          }
        },
        {
          "@type": "Question",
          "name": "Will HDFC Bank remove the salary account hold after I pay the One-Time Settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if structured properly. Before remitting a single rupee under an OTS, you must verify that HDFC Bank's official stamped OTS Sanction Letter explicitly confirms full extinguishment of the loan, withdrawal of all Customer ID holds/liens on linked savings accounts, and issuance of a No Dues Certificate within 30 days."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'same-bank-trap', title: '1. The HDFC Salary & Loan Linkage Trap' },
  { id: 'si-vs-nach-mechanics', title: '2. Internal SI Sweeps vs NPCI NACH' },
  { id: 'verified-hdfc-charges', title: '3. Official HDFC Bounce & Penal Charges' },
  { id: 'lien-setoff-cpc60', title: '4. Section 171 Lien vs Section 60 CPC' },
  { id: 'hold-balance-decoded', title: '5. Negative Balance & Hold Liens Decoded' },
  { id: 'hr-payroll-shift', title: '6. Lawful HR Salary Account Migration' },
  { id: 'zero-balance-reclassification', title: '7. The Corporate Salary AMB Conversion Trap' },
  { id: 'escalation-ombudsman', title: '8. Nodal Escalation & RBI Redressal' },
  { id: 'salaried-ots-blueprint', title: '9. Salaried OTS Strategy (₹3L+ Debt)' },
  { id: 'ots-letter-forensics', title: '10. OTS Sanction & Hold-Release Checklist' },
  { id: 'company-resolution-section', title: '11. SettleLoans Salaried Legal Advisory' },
  { id: 'faqs', title: '12. Frequently Asked Questions' },
];

export default function HdfcSalaryAccountAutoDebitDefaultPage() {
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
            <span>Salaried Borrower Defense • HDFC Corporate Salary &amp; PL</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            HDFC Salary Account Auto-Debit &amp; Personal Loan Default Guide
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5">
            What happens when your HDFC Corporate Salary Account and defaulted HDFC Personal Loan share one Customer ID: internal SI sweeps, Hold Balance liens, Section 60 CPC wage exemptions, lawful HR payroll migration, and structured ₹3L+ settlement.
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
              <span>Section 60 CPC &amp; RBI Verified</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#settlement-assessment"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Check ₹3L+ Salaried Settlement Plan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Emergency Salary Hold Support
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
              <li><Link href="/bank-freeze-salary-account-loan-default" className="hover:text-[#1F5EFF] transition-colors">Salary Account Freeze Guide</Link></li>
              <li><span className="text-slate-300">/</span></li>
              <li className="font-bold text-slate-900" aria-current="page">HDFC Salary Account Auto-Debit &amp; Personal Loan Default</li>
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
                SettleLoans handles salaried debt resolution where your combined unsecured debt across HDFC personal loans, top-up loans, credit cards, and app loans is ₹3 Lakhs or higher. Below ₹3L, use the self-help HR shift and branch restructuring steps in Sections 6 and 8.
              </p>
            </div>
          </aside>

          {/* Main Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">

            {/* Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Executive Summary for HDFC Salaried Borrowers</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Same-Customer-ID Exposure:</strong> Pre-approved &quot;10-Second Personal Loans&quot; issued on HDFC Corporate Salary Accounts use internal Standing Instructions (SI), allowing automated balance sweeps and shadow Hold Balances the instant salary arrives.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified HDFC Charges (Checked 11 Nov 2026):</strong> EMI / SI return charges run Rs. 450 to Rs. 550 per bounce plus 18% GST, while delayed instalments attract non-capitalized penal charges up to 2% per month (24% p.a.) plus GST.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 171 vs Section 60(1)(i) CPC:</strong> Section 171 Contract Act covers bailed goods and securities, not cash wage credits. Even under a court decree, Section 60(1)(i) CPC exempts the first Rs. 1,000 plus two-thirds of remaining monthly salary from attachment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Lawful HR Payroll Shift:</strong> Private-sector employees can lawfully update their salary bank account on HR portals before monthly payroll lock-in, while accounting for HDFC&apos;s 3-to-6-month non-salary AMB conversion rule.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Salaried Settlement Reality:</strong> Once an unsecured HDFC loan crosses 90+ days into NPA and genuine income hardship is documented, realistic One-Time Settlement closures often fall between 40% and 65% of total dues, never guaranteed.</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="same-bank-trap" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Why Holding an HDFC Salary Account and PL Creates a Trap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                HDFC Bank is one of India&apos;s largest corporate payroll bankers for IT services, GCCs, pharmaceuticals, manufacturing, and consulting firms. Within months of onboarding onto an HDFC Classic, Preferred, Imperia, or Standard Corporate Salary Account, salaried employees routinely receive NetBanking and mobile app banners offering pre-approved &quot;Xpressway&quot; or &quot;10-Second Disbursal&quot; unsecured personal loans. Because HDFC already sees exact monthly salary credits, employer category, and net take-home trends, underwriting takes minutes and repayment is automatically mapped to the very same HDFC salary account.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                That convenience becomes a severe liquidity trap the moment a financial shock strikes. Whether you suffer a 25% variable-pay cut, an unscheduled hospitalisation in the family, a temporary bench period without project allowances, or mounting EMIs across three other lenders, your HDFC salary account and your HDFC Personal Loan share a single <strong>Customer ID</strong> inside HDFC Bank&apos;s core banking architecture.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unlike an external NBFC loan that can only present an electronic debit once or twice on fixed dates through NPCI clearing, an intra-bank lender sits directly inside the vault where your employer deposits your livelihood. When two or three instalments fall overdue, salaried borrowers frequently wake up on the last working day or the 1st of the month to find that Rs. 55,000 or Rs. 85,000 of incoming salary has been absorbed within seconds of credit, leaving zero funds for house rent, school fees, groceries, or utility bills.
              </p>
            </section>

            {/* Salaried Combined-Debt Assessment Framing + Funnel */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                <Wallet className="w-4 h-4" />
                <span>Salaried Total-Debt Eligibility Check (₹3,00,000 Minimum)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When a salaried borrower resolves debt, handing only one loan to a negotiator while leaving other cards or EMIs exposed rarely works. Enter your <strong>total combined unsecured debt</strong> across your HDFC personal loan, top-up loans, credit cards, and fintech app loans below (cases starting from <strong>₹3 Lakhs and above</strong> qualify for full legal representation and settlement structuring).
              </p>
            </div>

            <LoanSettlementAssessmentFunnel />

            {/* Section 2 */}
            <section id="si-vs-nach-mechanics" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Internal Standing Instruction (SI) vs NPCI NACH Auto-Debit
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The single biggest mistake salaried HDFC borrowers make during early delinquency is assuming that all auto-debits work like e-NACH mandates. Many employees read generic online advice about cancelling NACH mandates on NPCI&apos;s portal and are shocked when HDFC still deducts their EMI on the 5th or 7th of the month. Understanding the two distinct clearing rails is essential before taking defensive steps.
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Operational Parameter</th>
                      <th>HDFC Internal Standing Instruction (SI / Direct Debit)</th>
                      <th>External NPCI e-NACH / ECS Mandate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">When It Applies</td>
                      <td>Both Salary Account and Personal Loan are with HDFC Bank under the same Customer ID.</td>
                      <td>Personal Loan is with HDFC Bank, while Salary Account is at SBI, ICICI, Axis, or another bank.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Clearing Infrastructure</td>
                      <td>Internal core-banking ledger transfer (no external NPCI clearing house involved).</td>
                      <td>Batch files routed via NPCI National Automated Clearing House (NACH) to destination bank.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Partial Sweep Risk</td>
                      <td>High. If EMI is Rs. 24,000 and balance is Rs. 14,500, system hold can sweep Rs. 14,500 immediately and capture the remaining Rs. 9,500 on next credit.</td>
                      <td>Low. NACH presentations are strictly all-or-nothing for the exact presented amount; partial balance cannot be swept via NACH.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Payday Timing Behaviour</td>
                      <td>Can execute near real-time sweeps or freeze amounts via Hold Balance before you can transfer via UPI/IMPS.</td>
                      <td>Presented during scheduled morning/afternoon clearing windows on or shortly after EMI due date.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Can Customer Cancel Unilaterally?</td>
                      <td>NetBanking disables online SI deletion for active retail loans; requires loan closure, account swap approval, or payroll diversion.</td>
                      <td>Destination bank must honour customer mandate stop/cancellation requests per RBI e-mandate circulars, though loan default still accrues.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because HDFC NetBanking intentionally greys out the &quot;Delete Standing Instruction&quot; button for linked retail loan accounts unless you register and get bank approval for an alternate repayment mandate (which charges a swap fee and is routinely declined once an account enters SMA-1 or SMA-2 overdue status), relying on online mandate cancellation will not protect an incoming paycheck. For general cross-bank mandate rules, see our companion guide on <Link href="/salary-account-ecs-mandate-cancellation-rules" className="text-[#1F5EFF] font-semibold underline">Salary Account ECS &amp; NACH Mandate Cancellation Rules</Link>.
              </p>
            </section>

            {/* Section 3 */}
            <section id="verified-hdfc-charges" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Verified HDFC Bounce, SI Return &amp; Penal Charges Schedule
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before deciding whether to restructure, swap mandates, or prepare for a compromise settlement, salaried borrowers need exact numbers rather than guesswork. Every missed auto-debit on an HDFC Personal Loan triggers two separate fee streams: fixed return fees per presentation attempt and daily-accruing penal charges on the unpaid instalment.
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Charge Category</th>
                      <th>Official HDFC Bank Tariff / Rule</th>
                      <th>Impact on Salaried Account &amp; Loan Ledger</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">EMI / SI / ECS / NACH Return Charges</td>
                      <td><strong>Rs. 450 to Rs. 550 per bounce instance + 18% GST</strong> (tiered retail return: Rs. 450 on 1st return, Rs. 500 on 2nd, Rs. 550 from 3rd return in a month; Rs. 531 to Rs. 649 incl. GST).</td>
                      <td>Added to the loan&apos;s overdue charges bucket; repeated re-presentations in the same month rapidly inflate recoverable arrears.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Late Payment / Penal Charges</td>
                      <td><strong>Up to 2% per month (24% per annum) + 18% GST</strong> calculated on the overdue EMI amount for actual days of delay.</td>
                      <td>Tracked separately as non-capitalized penal charges per RBI Fair Lending Practice (Penal Charges in Loan Accounts) norms; does not compound into principal.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Mandate / Repayment Mode Swap Fee</td>
                      <td><strong>Rs. 500 + 18% GST (Rs. 590)</strong> per approved swap instruction.</td>
                      <td>Permitted only on standard performing accounts; HDFC generally rejects swap requests once EMIs are already overdue.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Corporate Salary Non-Maintenance (Post-Shift)</td>
                      <td>Reclassification to Regular Savings Account (typically <strong>Rs. 10,000 AMB</strong> metro/urban) after 3 to 6 months without salary credit; non-maintenance up to 6% of shortfall (capped at Rs. 600 + GST/month).</td>
                      <td>Creates a secondary negative or hold balance on the dormant salary account if left open without awareness.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                <strong>Source Verification:</strong> HDFC Bank Official Schedule of Standard Retail Loan Servicing Charges (<a href="https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/pdf/notice-board/loan-servicing-centre-related-notices/tat-and-charges-of-standard-services.pdf" target="_blank" rel="noopener noreferrer" className="text-[#1F5EFF] underline">hdfc.bank.in Standard Loan Servicing Charges PDF</a>) and standard Personal Loan Agreement Key Fact Statement terms. <strong>Checked on: 11 November 2026.</strong> Individual loan vintage KFS schedules govern exact per-account slabs.
              </p>
            </section>

            {/* Section 4 */}
            <section id="lien-setoff-cpc60" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Section 171 Banker&apos;s Lien vs Section 60 CPC Salary Rights
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you visit an HDFC branch or email customer support asking why your entire monthly pay was pulled toward an overdue personal loan, branch staff almost always reply with a standard one-line explanation: <em>&quot;The bank has exercised Banker&apos;s General Lien under Section 171 of the Indian Contract Act as agreed in your loan terms.&quot;</em> Knowing the exact statutory distinction between a banker&apos;s lien, contractual set-off, and subsistence wage protection gives you real leverage in written escalations.
              </p>

              <div className="space-y-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Why Section 171 Contract Act Does Not Strictly Cover Cash Salary Deposits</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Section 171 of the Indian Contract Act, 1872 grants bankers a general lien to retain <strong>goods and securities bailed to them</strong> (such as pledged gold ornaments, physical share certificates, or endorsed instruments) until a general balance of account is cleared. Once your employer transfers salary via NEFT or NACH into your savings account, that money merges with the bank&apos;s general funds, making HDFC Bank a <em>debtor</em> to you for your deposit balance rather than a bailee holding physical goods. A bank cannot technically hold a &quot;bailment lien&quot; over its own debt to a depositor.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-indigo-600" />
                    <span>What HDFC Actually Uses: Contractual Right of Set-Off &amp; Its Legal Limits</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Standard HDFC Personal Loan agreements contain an explicit cross-account set-off clause authorising the bank to combine accounts held in the same name and capacity to adjust crystallised, matured loan dues. However, Indian banking jurisprudence imposes three strict guardrails on set-off: (1) the debt must be ascertained and presently due, not an unnotified future acceleration; (2) accounts must share strict mutuality (an individual HDFC Personal Loan cannot lawfully sweep a joint account funded by a spouse&apos;s independent income); and (3) prior written intimation must be served before stripping an operational livelihood account.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/70 space-y-1.5">
                  <h3 className="font-bold text-blue-950 text-sm flex items-center gap-2">
                    <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                    <span>The Section 60(1)(i) CPC Statutory Subsistence Benchmark</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">
                    Under <strong>Section 60(1)(i) of the Code of Civil Procedure, 1908</strong>, even when a creditor wins a full civil court decree and approaches an executing court to attach a salaried employee&apos;s wages, <strong>the first Rs. 1,000 and two-thirds of the remainder of the salary are completely exempt from attachment</strong>. Read our detailed statutory breakdown on <Link href="/section-60-cpc-salary-property-attachment-exemptions" className="text-[#1F5EFF] font-semibold underline">Section 60 CPC Salary Attachment Exemptions</Link>. Multiple High Courts have held that a commercial bank exercising private set-off cannot place a borrower in worse destitution than a sovereign civil court decree, reinforcing Article 21 livelihood protections against unnotified 100% paycheck seizures.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Consider a practical salary calculation: suppose a Pune IT project lead earns a net take-home salary of <strong>Rs. 91,000 per month</strong> credited to an HDFC Corporate Salary Account, and has defaulted on three EMIs totalling Rs. 78,000. Under the Section 60(1)(i) CPC benchmark, the first Rs. 1,000 plus two-thirds of the remaining Rs. 90,000 (Rs. 60,000) equals <strong>Rs. 61,000 protected for basic family subsistence</strong>, leaving at most Rs. 30,000 attachable even under judicial execution. When HDFC&apos;s automated hold sweeps Rs. 78,000 in one morning and leaves Rs. 13,000 for rent, EMIs, and child nutrition, an advocate-drafted notice citing Section 60(1)(i) CPC and RBI fair-practice norms carries immediate regulatory weight.
              </p>
            </section>

            {/* Section 5 */}
            <section id="hold-balance-decoded" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Decoding HDFC NetBanking &quot;Hold Balance&quot; &amp; Negative Balance
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Salaried borrowers often panic when they log into HDFC NetBanking or the HDFC Bank MobileBanking app and see something like: <em>Account Balance: Rs. 8,400 | Hold Amount: Rs. 52,600 | Available Balance: -Rs. 44,200</em>. Many assume their savings account has been hacked or hit by a police cyber-cell freeze. Knowing how to diagnose the exact nature of the restriction in under five minutes prevents costly mistakes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">1. Shadow Hold (Loan Lien)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Account remains active for credits, and UPI/NEFT only fails because Available Balance is negative. Placed by HDFC Retail Collections against overdue EMIs plus bounce charges. Every Rupee credited reduces the Hold Amount dollar-for-dollar until cleared.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">2. Total Debit Freeze (Code Block)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Available Balance may still look positive, yet every debit card swipe, ATM withdrawal, or UPI transfer fails with &quot;Account Blocked / Contact Branch&quot;. Triggered either by KYC expiry, aggressive branch set-off freeze, or external statutory order.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">3. Intraday Re-Presentation Sweep</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    No permanent hold is visible mid-month, yet automated recovery batch jobs run at midnight, 06:00 AM, 11:00 AM, and 04:00 PM around common corporate payday windows (28th to 7th) to capture salary before you can transfer it out.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Never attempt to &quot;beat the auto-debit clock&quot; on payday morning.</strong> Thousands of salaried borrowers stay awake at 05:30 AM on salary day hoping to transfer their salary via IMPS the second the SMS arrives. Once HDFC places an automated Hold Amount on the savings ledger, the hold attaches <em>simultaneously</em> with the credit entry in the core banking database, before any SMS reaches your phone and before UPI can initiate an outbound debit. Worse, asking friends or relatives to send emergency cash to that HDFC UPI ID feeds their money straight into the bank&apos;s loan hold.
              </p>
            </section>

            {/* Section 6 */}
            <section id="hr-payroll-shift" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Shifting Salary Credit Legally Through HR &amp; Payroll Portals
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Protecting household survival expenses while resolving overwhelming debt is neither fraud nor absconding, provided you keep your residential address, mobile number, and email active with HDFC Bank and communicate your hardship transparently in writing. In Indian private-sector employment, your employer pays wages for services rendered; HR is not a collection agent for your personal banker.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Follow this clean, compliant operational sequence to separate your monthly livelihood account from your stressed loan ledger:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-[#1F5EFF] bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Step 1: Open or Activate an Unlinked Savings/Salary Account</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Use a bank where you hold <strong>zero personal loans, zero credit cards, and zero overdraft lines</strong>. If you carry debt with HDFC and ICICI, use SBI, Bank of Baroda, IDFC FIRST, or Federal Bank (wherever you have zero credit exposure). Ensure full Video KYC is completed and obtain a cancelled cheque or official PDF passbook header showing your name, account number, and IFSC.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Step 2: Beat Your Employer&apos;s Monthly Payroll Cut-Off Window</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Corporate payroll engines (Workday, Darwinbox, SAP SuccessFactors, Keka, ADP, Zoho Payroll) lock bank details between the <strong>15th and 20th of each calendar month</strong>. Submitting a bank change request on the 26th almost guarantees that the upcoming month&apos;s salary will still land in your old HDFC account. Upload the new cancelled cheque well before mid-month lock-in.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Step 3: If HR Says &quot;We Only Tie Up With HDFC/ICICI&quot;</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Many mid-sized companies prefer preferred corporate salary banks for bulk file uploads, yet modern corporate NEFT/NACH salary disbursement files support any IFSC in India. Politely request payroll support for an &quot;Other Bank NEFT Salary Credit&quot; citing technical operational holds on your existing account, without oversharing sensitive personal debt details at work.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Step 4: Also Update Reimbursement, Expense &amp; Variable-Pay Portals</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Large IT and consulting firms often maintain a separate vendor/concur bank master for travel reimbursements, LTA, medical claims, or client per-diems. Update both the core payroll master and the expense reimbursement master so travel reimbursements do not accidentally hit the held HDFC account.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="zero-balance-reclassification" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Hidden Trap: HDFC Zero-Balance Salary Account Reclassification
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Almost no generic debt blog warns salaried borrowers about what happens to their old HDFC Corporate Salary Account 90 to 180 days after they move their payroll elsewhere. Under HDFC Bank&apos;s Corporate Salary Account terms and conditions, the zero-balance waiver is strictly conditional on continuous monthly corporate salary credit via employer bulk payroll codes.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once salary credits stop for <strong>3 consecutive months</strong> (up to 6 months on select corporate tie-up codes), HDFC Bank&apos;s automated batch review strips the Corporate Salary tag and reclassifies the account into a <strong>Regular Savings Account</strong> requiring a Rs. 10,000 Average Monthly Balance (metro/urban) or Rs. 5,000 (semi-urban). Because you are not keeping Rs. 10,000 in an account that already carries a loan hold, monthly non-maintenance charges plus 18% GST start accumulating.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Wait: under RBI&apos;s savings account guidelines on minimum balance penalties, banks cannot push a savings account balance below zero solely due to non-maintenance charges, <em>but</em> the moment you later deposit settlement funds or accidentally receive an income-tax refund (check your Income Tax e-Filing pre-validated bank account!) into that HDFC account, accumulated non-maintenance charges can be deducted. Two essential hygiene steps protect you:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <li><strong>Update Your Income Tax Portal &amp; EPFO Bank Account Immediately:</strong> Log into `incometax.gov.in` and the EPFO Unified Member Portal and set your new unlinked bank account as the primary refund/claim destination so an ITR refund is never swallowed by an HDFC loan hold.</li>
                <li><strong>Include Savings Account Hold Removal &amp; Closure in Final OTS:</strong> When closing your HDFC Personal Loan via One-Time Settlement, always pay directly into the <strong>16-digit Loan Account Number</strong> (never through the held savings account!) and subsequently close or regularise the linked savings account once the loan NDC is issued.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="escalation-ombudsman" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Challenging 100% Salary Sweeps: HDFC Nodal &amp; RBI Escalation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                What if your current month&apos;s salary has <em>already</em> been swept 100% by HDFC Bank today, leaving you unable to pay rent or buy medicines this week? Arguing verbally with collection tele-callers or relationship managers rarely reverses an automated sweep. Instead, follow HDFC Bank&apos;s structured three-tier regulatory grievance ladder alongside statutory protections:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Tier 1: Written Grievance &amp; Hardship Representation</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Lodge a formal ticket via HDFC Bank&apos;s official Grievance Redressal portal on `hdfcbank.com` (keep the Service Request number). State clearly that sweeping 100% of subsistence wages without prior written set-off notice leaves zero funds for basic living expenses, attach rent/medical/EMI proofs, and request partial release of subsistence wages under the Section 60(1)(i) CPC benchmark while offering structured resolution talks.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Tier 2: Regional Nodal Officer &amp; Principal Nodal Officer (PNO)</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If Tier 1 sends a template rejection or does not resolve within 7 to 10 working days, escalate to HDFC Bank&apos;s Regional Nodal Officer and Principal Nodal Officer (published on HDFC Bank&apos;s Grievance Redressal page). Also note that under RBI&apos;s Fair Practices Code, and reinforced further by RBI&apos;s updated recovery conduct directions taking effect on <strong>1 January 2027</strong>, coercive recovery tactics, workplace humiliation, or contacting HR/colleagues are strictly prohibited.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Tier 3: RBI Integrated Ombudsman Scheme (cms.rbi.org.in)</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If an unnotified debit freeze, joint-account sweep lacking mutuality, or third-party harassment remains unresolved after 30 days (or immediately via advocate representation if constitutional livelihood rights are infringed), file a formal complaint on `cms.rbi.org.in` attaching your SR numbers, salary statement showing 100% sweep, and loan ledger. Read our broader legal defense guide on <Link href="/bank-freeze-salary-account-loan-default" className="text-[#1F5EFF] font-semibold underline">Can Bank Freeze Salary Account for Loan Default?</Link> for full procedural remedies.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="salaried-ots-blueprint" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Negotiating an HDFC Personal Loan OTS While Still Salaried
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A common myth circulated by aggressive recovery agents is: <em>&quot;Banks never give settlement to salaried people who still have an active PF and monthly salary; settlement is only for unemployed borrowers.&quot;</em> That statement is factually false. While HDFC Bank will understandably refuse a settlement to a salaried employee earning Rs. 1,50,000 a month whose only debt is a single Rs. 12,000 EMI, HDFC&apos;s Stressed Asset and Zonal Collections teams routinely approve Compromise / One-Time Settlements for active salaried employees when <strong>total debt service exceeds sustainable repayment capacity</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Here is how HDFC Bank&apos;s internal credit committee evaluates a salaried borrower&apos;s settlement file across delinquency stages:
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Delinquency Stage</th>
                      <th>Days Past Due (DPD)</th>
                      <th>HDFC Internal Action on Salaried Borrower</th>
                      <th>Realistic Resolution / Settlement Posture</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-0 / SMA-1</td>
                      <td>1 to 60 Days</td>
                      <td>Automated SI sweeps, reminder calls, bounce charges (Rs. 450 to Rs. 550 + GST).</td>
                      <td>Restructuring/tenure inquiry if temporary stress; OTS haircuts are generally NOT approved before NPA.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-2</td>
                      <td>61 to 90 Days</td>
                      <td>Customer ID Hold Balance on HDFC salary account; pre-NPA field/tele-collection push; Section 25 PSSA warning notices.</td>
                      <td>Early settlement feelers begin only in severe layoff/medical cases; focus on protecting subsistence payroll and documenting hardship.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA</td>
                      <td>91 to 180+ Days</td>
                      <td>Account classified as NPA; transferred to Zonal Collections / Stressed Assets desk; provisioning cost hits bank books.</td>
                      <td>Primary salaried OTS window opens: 100% waiver of penal/bounce charges plus realistic principal-plus-interest compromise ranges.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful / Written-Off Pool</td>
                      <td>180 to 365+ Days</td>
                      <td>Higher balance-sheet provisioning; quarter-end (Sep/Dec/Mar) settlement drives; conciliation notices.</td>
                      <td>Deepest realistic lump-sum settlements typically negotiated (often 40% to 60% of total claimed dues, strictly case-dependent and never guaranteed).</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Four Hardship Pillars That Convince HDFC&apos;s Credit Committee When You Still Have a Job
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <li><strong>Severe Debt-to-Income (FOIR) Distortion:</strong> Demonstrating via your CIBIL report and salary slips that combined scheduled EMIs across HDFC, other banks, NBFCs, and cards consume 70% to 110%+ of your net monthly take-home pay, making full contractual repayment mathematically impossible without starvation.</li>
                <li><strong>Documented Income Drop or Variable Pay Wipeout:</strong> Showing previous vs current salary slips or HR letters proving a pay cut, loss of onsite/shift allowance, or switch to a lower-paying survival job after a layoff.</li>
                <li><strong>Verifiable Medical or Family Dependency Drain:</strong> Hospital bills, chronic care invoices for parents/spouse, or single-earner household budgets that absorb essential cash flow.</li>
                <li><strong>Clean One-Shot Third-Party Lump-Sum Source:</strong> Explaining clearly that the settlement lump sum (say Rs. 3.1 Lakhs against Rs. 6.4 Lakhs claimed) is being raised as a one-time family assistance loan from parents, gold liquidation, or annual bonus, and will vanish if not closed promptly. For bank-wide OTS nuances, also compare our <Link href="/hdfc-personal-loan-settlement" className="text-[#1F5EFF] font-semibold underline">HDFC Personal Loan Settlement Guide</Link> and <Link href="/loan-settlement-for-salaried-people" className="text-[#1F5EFF] font-semibold underline">Loan Settlement for Salaried People</Link>.</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section id="ots-letter-forensics" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                10. Mandatory HDFC OTS Sanction &amp; Hold-Release Checklist
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When your HDFC Personal Loan and HDFC Corporate Salary Account are linked, closing a settlement requires two extra forensic checks beyond a normal personal loan OTS. Never transfer money based on a WhatsApp message, a verbal promise from an agency caller, or an unsigned email calculation table.
              </p>

              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-2.5 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950 text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>6 Non-Negotiable Checks Before Paying Your HDFC OTS</span>
                </div>
                <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <li><strong>Official HDFC Bank Settlement Letter Verification:</strong> Ensure the sanction letter comes from an official `@hdfcbank.com` / `@hdfc.bank.in` domain or stamped branch/collections desk letterhead bearing your exact Loan Account Number, Customer ID, total outstanding, approved compromise amount, and exact payment deadline dates.</li>
                  <li><strong>Explicit Waiver of All Residual Dues, Bounce &amp; Penal Charges:</strong> The letter must state that upon timely payment of the agreed settlement amount, the entire residual principal, interest, SI bounce fees, and penal charges stand permanently waived.</li>
                  <li><strong>Customer ID Hold / Lien Withdrawal Clause:</strong> Confirm that all holds, liens, and internal Standing Instructions mapped to your linked HDFC savings/salary account for that loan will be lifted upon settlement closure, and any pending Section 25 PSSA / Section 138 / conciliation proceedings will be withdrawn.</li>
                  <li><strong>Pay Directly Into the Loan Account Number Only:</strong> Remit NEFT/RTGS/branch deposit directly to the HDFC Personal Loan account, never route the lump sum through your held HDFC salary account, where automated system holds could misappropriate part of the funds toward unwaived charges before OTS posting!</li>
                  <li><strong>30-Day No Dues Certificate (NDC) Mandate:</strong> Under RBI compromise and account-closure timelines, collect your formal <Link href="/no-dues-certificate-after-loan-settlement" className="text-[#1F5EFF] font-semibold underline">No Dues Certificate</Link> within 30 days of final tranche payment.</li>
                  <li><strong>Credit Bureau Update Audit (Day 45 to 60):</strong> Pull your CIBIL and Experian reports 45 to 60 days post-payment to verify that the HDFC Personal Loan shows <em>Current Balance: Rs. 0</em> and <em>Amount Overdue: Rs. 0</em> (with status <em>Settled</em>), rather than an erroneous active overdue figure.</li>
                </ol>
              </div>
            </section>

            {/* Section 11 */}
            <section id="company-resolution-section" className="space-y-6 scroll-mt-24">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  11. How SettleLoans Protects HDFC Salaried Borrowers (₹3L+)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating a default when your lender is also your salary banker requires calm legal precision rather than panic. For salaried professionals carrying <strong>₹3 Lakhs or more in total unsecured debt</strong> across HDFC personal loans, top-up loans, credit cards, and other lenders, SettleLoans provides structured end-to-end representation: auditing your Customer ID exposure, guiding lawful payroll protection, stopping workplace or third-party recovery harassment, challenging unlawful 100% subsistence sweeps under Section 60 CPC, and negotiating verified One-Time Settlements backed by authentic bank sanction letters.
                </p>
              </div>

              <CompanySection />
            </section>

            {/* Section 12: FAQs with <details name="faq-accordion"> */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8 scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  12. Frequently Asked Questions: HDFC Salary Account &amp; Loan Default
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                Detailed answers for salaried employees dealing with HDFC Corporate Salary Account auto-debits, Hold Balance liens, HR payroll updates, and personal loan settlement.
              </p>

              <div className="space-y-3">
                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      1. Why did HDFC Bank deduct my entire monthly salary when only one personal loan EMI was overdue?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>When both your Corporate Salary Account and Personal Loan sit under the same HDFC Bank Customer ID, the bank&apos;s core banking system links your deposit ledger with your loan ledger. If multiple EMIs or bounce charges remain unpaid, HDFC often places an automated Hold Balance or exercises an internal contractual set-off the moment payroll hits. However, sweeping 100% of subsistence wages without prior written notice conflicts with Section 60(1)(i) of the Code of Civil Procedure and RBI fair lending standards.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      2. What is the difference between an HDFC Standing Instruction (SI) and an NPCI NACH auto-debit?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>An NPCI NACH mandate operates across two different banks through the National Payments Corporation of India clearing house. An HDFC Standing Instruction (SI) or internal Direct Debit is an intra-bank instruction executed directly inside HDFC Bank&apos;s core banking software. Because an internal SI does not pass through external NPCI rails, cancelling e-NACH on third-party portals will not stop an internal HDFC salary account auto-debit.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      3. What are HDFC Bank&apos;s official EMI return and penal charges on a defaulted personal loan?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>According to HDFC Bank&apos;s official schedule of standard retail loan servicing charges (checked on 11 November 2026), EMI return or SI/ECS/NACH bounce fees range from Rs. 450 to Rs. 550 per dishonour instance plus 18% GST (tiered across 1st, 2nd, and 3rd returns in a month). Overdue EMIs attract non-capitalized penal charges up to 2% per month (24% per annum) plus GST for the actual days of delay.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      4. Does Section 171 of the Indian Contract Act allow HDFC Bank to freeze my Corporate Salary Account?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Section 171 of the Indian Contract Act, 1872 grants bankers a general lien over physical goods, share certificates, gold, or securities bailed with the bank. Indian High Courts have repeatedly clarified that money credited into a savings or salary account creates a debtor-creditor relationship rather than a bailment of goods. What banks actually invoke on cash balances is the equitable or contractual Right of Set-Off, which strictly requires debt maturity, mutuality of capacity, and advance notice.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      5. How much of my salary is protected under Section 60(1)(i) of the Code of Civil Procedure?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Under Section 60(1)(i) of the CPC, in execution of a civil money decree, the first Rs. 1,000 plus two-thirds of the remaining salary is statutorily exempt from attachment. For a salaried employee earning Rs. 76,000 net per month, Rs. 51,000 (Rs. 1,000 plus two-thirds of Rs. 75,000) is exempt even from a court attachment order. Advocates cite this statutory benchmark to challenge unilateral 100% salary sweeps by private banks.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      6. Is it legal to ask my HR department to move my salary credit to a non-HDFC bank account?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes, in almost all private-sector corporate employment contracts, choosing the bank account where you receive earned wages is your lawful right unless you signed a rare employer-guaranteed tripartite check-off undertaking. Shifting future payroll to an unlinked bank account protects household rent, groceries, and medical sustenance while you engage HDFC Bank transparently for restructuring or One-Time Settlement.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      7. What happens to my zero-balance HDFC Corporate Salary Account after I stop receiving salary in it?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Under HDFC Bank Corporate Salary Account terms, if regular corporate salary credits do not hit the account for 3 to 6 consecutive months, the bank reclassifies the zero-balance salary account into a Regular Savings Account requiring an Average Monthly Balance (typically Rs. 10,000 in metro and urban branches). Non-maintenance charges can then accumulate alongside existing loan holds unless addressed during account closure or loan settlement.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      8. Why does HDFC NetBanking show a negative Available Balance or Hold Balance on my salary account?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>When an HDFC Personal Loan misses scheduled instalments, the collection system places a shadow hold or lien equal to the overdue EMI plus accumulated bounce and penal charges. NetBanking subtracts this Hold Amount from your ledger balance, displaying a negative Available Balance. Any fresh UPI transfer, reimbursement, or salary credit entering the account is automatically absorbed up to that hold figure.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      9. Can HDFC Bank auto-debit my new salary account in SBI, Axis, or ICICI without a fresh mandate?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>No. HDFC Bank has zero administrative access to debit a savings or salary account maintained at another bank unless you personally registered an active NPCI NACH mandate on that external account or HDFC obtains a formal court/DRT attachment order after full judicial proceedings.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      10. Can I negotiate a One-Time Settlement with HDFC Bank while still employed in a salaried job?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes, provided there is documented financial hardship showing that your net monthly salary cannot service your total debt obligations. Examples include severe pay cuts, variable pay loss, medical emergencies in the family, supporting dependent parents, or multiple overlapping personal loans exceeding 65% to 80% of take-home pay. HDFC Bank evaluates salaried compromise proposals after NPA classification (90+ days past due) based on verifiable income-to-obligation stress.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      11. What realistic settlement range does HDFC Bank accept on defaulted salaried personal loans?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Settlement outcomes are never guaranteed and depend on NPA aging, salary continuity, and lump-sum readiness. In practice, once an unsecured HDFC personal loan crosses 90 to 180+ days overdue, realistic One-Time Settlement closures often fall between 40% and 65% of total claimed dues (starting with 100% waiver of penal charges and bounce fees, plus a negotiated haircut on principal and accrued interest), subject to Zonal Credit Committee approval.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      12. Will HDFC Bank remove the salary account hold after I pay the One-Time Settlement?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes, if structured properly. Before remitting a single rupee under an OTS, you must verify that HDFC Bank&apos;s official stamped OTS Sanction Letter explicitly confirms full extinguishment of the loan, withdrawal of all Customer ID holds/liens on linked savings accounts, and issuance of a No Dues Certificate within 30 days.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* Official Regulatory & Source References */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Official HDFC Tariff &amp; Statutory References (Checked 11 November 2026)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
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
                  Indian Contract Act, 1872: Section 171 General Lien Scope
                </span>
              </div>
            </section>

            {/* Related Salaried & HDFC Guides */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Salaried Personal Loan &amp; Salary Account Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/bank-freeze-salary-account-loan-default" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Bank Freeze Salary Account Guide
                </Link>
                <Link href="/salary-account-ecs-mandate-cancellation-rules" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  ECS &amp; NACH Cancellation Rules
                </Link>
                <Link href="/hdfc-personal-loan-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  HDFC Personal Loan Settlement
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
                <Link href="/section-60-cpc-salary-property-attachment-exemptions" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Section 60 CPC Salary Exemptions
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
                  <p className="text-xs text-slate-500">Salaried Debt &amp; Banking Defense Specialist</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Advises corporate and salaried borrowers on same-bank salary set-off defense, Section 60 CPC subsistence protections, and multi-lender personal loan settlements.
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
                <span>HDFC Salaried Debt Relief</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Paycheck Stuck in HDFC Hold Balance?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                If your total unsecured debt across HDFC personal loans, cards, and other lenders is ₹3 Lakhs or above, get a confidential legal &amp; settlement roadmap before your next payroll date.
              </p>
              <a
                href="#settlement-assessment"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Start ₹3L+ Eligibility Check
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Salaried Safeguards
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Section 60(1)(i) CPC Subsistence Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Zero Employer / HR Contact Policy</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank OTS Letter Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Multi-Lender Portfolio Structuring</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
