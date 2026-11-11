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
  Wallet,
  Briefcase
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'New Job BGV After Loan Settlement | SettleLoans',
  description: 'Worried about CIBIL checks in a new job BGV after loan settlement? See how IT, GCC, and BFSI employers screen Settled vs active defaults in India.',
  keywords: [
    'new job background verification after loan settlement',
    'does bgv check cibil score in india',
    'loan settled status impact on it company bgv',
    'bfsi job background check cibil settled vs written off',
    'first advantage authbridge hireright credit check india',
    'joining bank job after personal loan settlement',
    'ecourts check in bgv section 25 passa section 138',
    'no dues certificate for hr background verification'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/new-job-background-verification-after-loan-settlement',
  },
  openGraph: {
    title: 'New Job BGV After Loan Settlement | SettleLoans',
    description: 'Worried about CIBIL checks in a new job BGV after loan settlement? See how IT, GCC, and BFSI employers screen Settled vs active defaults in India.',
    url: 'https://www.settleloans.in/new-job-background-verification-after-loan-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg',
        width: 1200,
        height: 675,
        alt: 'New Job Background Verification After Personal Loan Settlement in India',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Job BGV After Loan Settlement | SettleLoans',
    description: 'Worried about CIBIL checks in a new job BGV after loan settlement? See how IT, GCC, and BFSI employers screen Settled vs active defaults in India.',
    images: ['https://www.settleloans.in/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.settleloans.in/new-job-background-verification-after-loan-settlement#breadcrumb",
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
          "name": "New Job BGV After Loan Settlement",
          "item": "https://www.settleloans.in/new-job-background-verification-after-loan-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/new-job-background-verification-after-loan-settlement#article",
      "headline": "New Job Background Verification (BGV) After Loan Settlement",
      "description": "Comprehensive Indian employment compliance guide explaining how corporate background verification (BGV) agencies screen candidates across IT services, product startups, non-financial MNCs, and BFSI/investment banking GCCs after a personal loan One-Time Settlement.",
      "image": "https://www.settleloans.in/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg",
      "datePublished": "2026-11-11T11:30:00+05:30",
      "dateModified": "2026-11-11T11:30:00+05:30",
      "mainEntityOfPage": "https://www.settleloans.in/new-job-background-verification-after-loan-settlement",
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
      "@id": "https://www.settleloans.in/new-job-background-verification-after-loan-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do standard IT, pharma, engineering, and startup companies check CIBIL scores during new job BGV in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In the vast majority of standard software engineering, product, pharma, manufacturing, sales, and operations roles, corporate BGV checks focus on UAN/EPFO employment history, education degree authenticity, identity, address, and criminal court records. Credit bureau reports are generally not pulled unless you are joining a banking/financial client's dedicated offshore development centre (ODC) or handling corporate treasury and finance."
          }
        },
        {
          "@type": "Question",
          "name": "Which Indian employers routinely include a CIBIL or Experian credit check in background verification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commercial banks, NBFCs, insurance companies, mutual fund houses, SEBI/RBI-regulated fintech firms, global investment bank GCCs (such as Wall Street or European bank tech/ops centres in Bengaluru, Mumbai, Pune, Hyderabad, and Gurugram), and senior CFO/finance-controller roles routinely conduct financial integrity screening."
          }
        },
        {
          "@type": "Question",
          "name": "Will a 'Settled' personal loan on my CIBIL report cause my BFSI or bank GCC job offer to be revoked?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically in most compliance frameworks, provided there is zero active overdue debt and zero undisclosed litigation. Compliance teams distinguish sharply between an open, unresolved default ('Written-Off' or '90+ DPD' with active unpaid balances) and a formally closed 'Settled' loan backed by an official bank No Dues Certificate (NDC) and documented past hardship such as medical crisis or prior layoff."
          }
        },
        {
          "@type": "Question",
          "name": "Why is an active unpaid default much riskier in a BFSI background check than a Settled loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Financial institutions assess ongoing employee vulnerability to bribery, insider fraud, or regulatory distraction. An active Rs. 8 Lakh unpaid default with mounting collection pressure signals current financial distress, whereas a closed One-Time Settlement showing Rs. 0 current overdue and a signed No Dues Certificate proves the liability has been legally extinguished."
          }
        },
        {
          "@type": "Question",
          "name": "Can a prospective employer check my CIBIL score secretly without my permission?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under Credit Information Companies regulations and Indian data-protection norms, third-party BGV vendors (such as First Advantage, AuthBridge, HireRight, Sterling, or SpringVerify) can only pull a candidate credit check if the BGV authorization form you sign explicitly lists a credit or financial integrity check."
          }
        },
        {
          "@type": "Question",
          "name": "Does a personal loan default or settlement show up as a criminal record during police or court BGV?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unsecured personal loan default and One-Time Settlement are civil commercial matters, not IPC/BNS crimes like theft or fraud, and never appear in police station criminal records. However, if a lender previously filed a magistrate complaint under Section 138 of the Negotiable Instruments Act (cheque bounce) or Section 25 of PASSA (e-mandate dishonour), that filing can appear in automated e-Courts database searches unless formally withdrawn upon settlement."
          }
        },
        {
          "@type": "Question",
          "name": "What if my new IT services employer assigns me to a US or UK banking client project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tier-1 IT services firms normally do not check credit at initial company joining, but onboarding onto a regulated US/UK banking client's Offshore Development Centre (ODC) often triggers a secondary client-specific BGV that includes an Experian or CIBIL check. Keeping your OTS Sanction Letter and No Dues Certificate ready allows HR compliance to clear an 'Amber' flag smoothly."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my new employer asks me to open a salary account in the same bank where I settled or defaulted?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you already completed a One-Time Settlement and hold an official No Dues Certificate, the debt is extinguished and the bank cannot deduct anything from a new salary account (though it will decline new pre-approved credit cards). However, if your loan at that bank is still in active unpaid default, opening a salary account under the same Customer ID exposes your new paycheck to immediate set-off; ask HR for their secondary tie-up payroll bank instead."
          }
        },
        {
          "@type": "Question",
          "name": "How long after paying a One-Time Settlement does CIBIL update Balance Overdue to zero for BGV?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI credit reporting timelines, lenders must transmit updated account status within 15 to 30 days of closure. If your new job BGV runs before the bureau refreshes, submitting your official bank OTS Sanction Letter, NEFT/RTGS payment receipt, and No Dues Certificate directly answers any BGV vendor discrepancy query."
          }
        },
        {
          "@type": "Question",
          "name": "Should I proactively disclose a past settled loan during a bank or fintech HR compliance check?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the BGV form specifically asks 'Do you have any past loan settlements, write-offs, or overdue credit accounts?', always answer truthfully and attach your No Dues Certificate with a brief 3-line explanation of the historical hardship. Hiding a settled loan when explicitly asked on a BFSI compliance declaration is treated as misrepresentation, which is a far more common ground for offer withdrawal than the settled loan itself."
          }
        },
        {
          "@type": "Question",
          "name": "Can I convert a 'Settled' status to 'Closed' later if I join a strict investment bank?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If a specific senior banking compliance policy requires zero 'Settled' tradelines, a borrower can approach the original lender later, pay the previously waived differential (settled-to-closed balance), obtain a full-closure NOC, and have CIBIL updated from 'Settled' to 'Closed'."
          }
        },
        {
          "@type": "Question",
          "name": "Can debt collection agents contact my new employer's HR department once I update LinkedIn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. RBI Fair Practices norms and the updated recovery conduct rules effective 1 January 2027 strictly prohibit lenders and recovery agents from contacting your new employer, HR team, or colleagues. During active settlement talks, wait until your OTS closure is finalized before publicly updating your new employer on LinkedIn."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'bgv-reality-india', title: '1. What Indian Corporate BGVs Actually Screen' },
  { id: 'industry-bgv-matrix', title: '2. Sector Matrix: IT, GCCs, Startups & BFSI' },
  { id: 'settled-vs-active-default', title: '3. Settled + NDC vs Active Default in BFSI' },
  { id: 'odc-banking-client-check', title: '4. IT Services Banking-Client ODC Checks' },
  { id: 'ecourts-litigation-nuance', title: '5. Criminal Check vs e-Courts Sec 138 / 25' },
  { id: 'consent-cicra-rules', title: '6. Candidate Consent & Soft Credit Pull Rules' },
  { id: 'handling-amber-flags', title: '7. Clearing an Amber Flag With HR Compliance' },
  { id: 'new-employer-salary-bank', title: '8. New Employer Payroll Bank Collision Risk' },
  { id: 'settled-to-closed-upgrade', title: '9. Settled-to-Closed Option for Strict Banks' },
  { id: 'pre-joining-checklist', title: '10. Pre-Joining BGV Document Readiness Kit' },
  { id: 'company-resolution-section', title: '11. SettleLoans Pre-Joining Debt Closure' },
  { id: 'faqs', title: '12. Frequently Asked Questions' },
];

export default function NewJobBgvAfterLoanSettlementPage() {
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
            <span>Salaried Career &amp; HR Compliance • IT, GCC &amp; BFSI Screening</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            New Job Background Verification (BGV) After Loan Settlement
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5">
            Switching jobs after settling a personal loan or holding overdue EMIs? Understand exactly what First Advantage, AuthBridge, HireRight, and Sterling verify across IT services, product startups, and BFSI GCCs, and why a closed &quot;Settled&quot; loan with an NDC beats an active default every time.
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
              <span>Corporate BGV &amp; CICRA Verified</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#settlement-assessment"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Close ₹3L+ Active Defaults Before Joining</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Confidential BGV Debt Review
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
              <li className="font-bold text-slate-900" aria-current="page">New Job BGV After Loan Settlement</li>
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
                Interviewing for a BFSI, fintech, or global GCC role with ₹3 Lakhs+ in active overdue personal loans? SettleLoans structures formal OTS closures and No Dues Certificates so you clear financial-integrity BGVs cleanly.
              </p>
            </div>
          </aside>

          {/* Main Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">

            {/* Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Executive Summary: Loan Settlement &amp; Corporate BGV</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Standard Non-BFSI Roles Do Not Check CIBIL:</strong> Over 80% of IT product, general engineering, pharma, manufacturing, e-commerce, and consulting BGVs verify identity, education, UAN/EPFO history, and criminal records, not credit bureau scores.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Where Credit Screening Happens:</strong> Banks, NBFCs, insurers, SEBI/RBI fintechs, investment bank GCCs, IT banking-client ODCs, and senior treasury/finance roles explicitly run CIBIL or Experian financial-integrity checks with signed candidate consent.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Settled + NDC Beats Active Default:</strong> Even in strict BFSI compliance, an open 90+ DPD / &quot;Written-Off&quot; unpaid debt triggers major risk flags, whereas a formally settled loan showing <strong>Rs. 0 Balance Overdue</strong> plus an official bank No Dues Certificate proves historical resolution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Beware Collection Lies:</strong> Recovery agents routinely lie that &quot;settling a loan puts your PAN on a NASSCOM / NSR blacklist&quot;. Neither NASSCOM&apos;s National Skills Registry nor EPFO tracks civil retail loan settlements.</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="bgv-reality-india" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. What Corporate BGV Vendors Actually Check in India
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Few threats terrify a salaried professional more than a collection caller saying: <em>&quot;If you settle this personal loan or miss another EMI, you will fail every future background check in IT and banking for 7 years.&quot;</em> That statement is deliberately engineered to make stressed employees liquidate retirement funds or borrow from predatory apps rather than exercise lawful debt resolution.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To separate collection fiction from real HR compliance practice, understand how India&apos;s top enterprise screening agencies (First Advantage, AuthBridge, HireRight, Sterling, SpringVerify, and IDfy) actually package background checks. Corporate HR teams purchase modular BGV packages priced per component:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Standard Corporate BGV Package (Used in ~80%+ of Non-Financial Hiring):</strong> PAN/Aadhaar identity verification, highest university degree verification, last 2 to 3 employers&apos; relieving/experience check, EPFO UAN service-history overlap check (to catch moonlighting or fabricated companies), current/permanent address check, and district court / police criminal database screening. <strong>Zero credit bureau report is ordered in this standard tier.</strong></li>
                <li><strong>Enhanced Financial Integrity Package (Used in BFSI, Fintech &amp; Fiduciary Roles):</strong> Includes everything above <em>plus</em> a candidate-authorized credit bureau pull (typically Experian or TransUnion CIBIL) and regulatory/sanctions watchlists.</li>
              </ul>
            </section>

            {/* Salaried Combined-Debt Assessment Framing + Funnel */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                <Wallet className="w-4 h-4" />
                <span>Interviewing With ₹3L+ Active Overdue Debt?</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Entering a BFSI or global banking GCC background check with open, unresolved 90+ DPD defaults creates avoidable onboarding delays. Enter your <strong>total combined unsecured debt</strong> across personal loans, top-ups, and cards below (cases from <strong>₹3 Lakhs and above</strong> qualify for structured OTS closure and No Dues Certificate tracking).
              </p>
            </div>

            <LoanSettlementAssessmentFunnel />

            {/* Section 2 */}
            <section id="industry-bgv-matrix" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Sector BGV Matrix: Where CIBIL Matters &amp; Where It Does Not
              </h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Employer Sector &amp; Role Type</th>
                      <th>Credit / CIBIL Check Run?</th>
                      <th>Impact of Closed &quot;Settled&quot; Loan (With NDC)</th>
                      <th>Impact of Active Unpaid Default (90+ DPD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Product Tech, SaaS, E-Commerce, Pharma, Auto &amp; Manufacturing</strong> (Engineering, Product, Sales, HR, Ops)</td>
                      <td><strong>Rarely / No</strong> (Standard UAN, Education, Criminal only)</td>
                      <td><strong>Zero impact</strong> on offer or onboarding.</td>
                      <td>No bureau pull, though active court summons (Sec 138/25) should still be resolved.</td>
                    </tr>
                    <tr>
                      <td><strong>IT Services Majors</strong> (TCS, Infosys, Wipro, HCL, Cognizant, Accenture, Capgemini general pool)</td>
                      <td><strong>No at entry</strong>; <strong>Yes</strong> if mapped to a US/UK/EU Bank ODC</td>
                      <td>General pool: zero impact. Banking ODC: usually cleared when <strong>Rs. 0 overdue + Bank NDC</strong> are submitted.</td>
                      <td>Can block client-level ODC badge clearance until overdue balance is settled or resolved.</td>
                    </tr>
                    <tr>
                      <td><strong>Global Investment Bank &amp; Financial GCCs</strong> (Wall Street / European / Australian bank tech &amp; ops centres)</td>
                      <td><strong>Yes (Mandatory)</strong></td>
                      <td>Typically flagged &quot;Amber / Info&quot;; cleared by HR Compliance upon reviewing NDC, Rs. 0 overdue proof, and truthful disclosure.</td>
                      <td><strong>High Risk (&quot;Red&quot;):</strong> Large open defaults or active recovery suits often stall onboarding until settled.</td>
                    </tr>
                    <tr>
                      <td><strong>Indian Commercial Banks, NBFCs, Insurance &amp; Mutual Funds</strong> (Front-line, Credit, Branch, Tech)</td>
                      <td><strong>Yes (Mandatory)</strong>; many banks enforce minimum CIBIL or zero-active-default rules</td>
                      <td>Evaluated case-by-case with NDC; never join the <em>exact same bank</em> where you recently caused a write-off without prior HR clarity.</td>
                      <td><strong>Severe Risk:</strong> Active defaults frequently hold back appointment letters under RBI/internal staff-conduct norms.</td>
                    </tr>
                    <tr>
                      <td><strong>Corporate Finance, CFO Office, Treasury, Payroll &amp; Procurement Heads</strong> (Any Industry)</td>
                      <td><strong>Frequently Yes</strong> (Fiduciary cash-handling role)</td>
                      <td>Manageable with transparent disclosure, No Dues Certificate, and documented medical/layoff reason.</td>
                      <td>Viewed as ongoing financial-pressure risk in payment-approving seats.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 */}
            <section id="settled-vs-active-default" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Why HR Compliance Prefers &quot;Settled + NDC&quot; Over Active Default
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many salaried candidates make the mistake of leaving three defaulted personal loans open in &quot;Written-Off&quot; or &quot;180+ DPD&quot; status out of fear that settling them will print the word &quot;Settled&quot; on their CIBIL report before a job switch. In regulated financial-sector hiring, that logic is completely backwards.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a bank or fintech compliance officer reviews a candidate&apos;s financial integrity report, they are <strong>not</strong> underwriting you for a new unsecured loan; they are screening for <strong>active financial coercion risk</strong>. An employee who currently owes Rs. 11 Lakhs in active overdue debt, faces daily recovery calls, and has zero legal closure represents an ongoing operational risk in environments handling customer accounts or sensitive financial systems.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By contrast, completing a formal One-Time Settlement transforms your profile across three decisive compliance metrics:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Current Overdue Balance Drops to Rs. 0:</strong> Your bureau report reflects zero active creditor claims against you today.</li>
                <li><strong>Stamped Bank No Dues Certificate (NDC):</strong> You possess an institutional legal certificate confirming that the bank has zero remaining financial or legal claim on the facility.</li>
                <li><strong>End of Active Collection &amp; Litigation Risk:</strong> No recovery agency or advocate will send notices while you are sitting in your new probation period.</li>
              </ol>
            </section>

            {/* Section 4 */}
            <section id="odc-banking-client-check" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Navigating IT Services &quot;Banking Client ODC&quot; Secondary Checks
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Suppose you are a Java architect, cloud DevOps engineer, QA lead, or business analyst joining a large IT services company. Your initial onboarding BGV finishes smoothly in two weeks with zero credit check. Three weeks later, resource management allocates you to an Offshore Development Centre (ODC) serving a major US or UK retail bank, triggering a <strong>Client-Specific Annex BGV</strong> that includes an Experian or CIBIL screen.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Do not panic if you have a past settled personal loan:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li>Most Western banking client vendor-screening matrices specifically flag <strong>unsatisfied County Court Judgments / active bankruptcies / open delinquent balances above a threshold (e.g., $5,000 / Rs. 4 Lakhs+ unpaid)</strong>.</li>
                <li>When a closed Indian loan shows &quot;Settled&quot; with Rs. 0 Current Balance and Rs. 0 Amount Overdue, the BGV vendor either passes it directly or raises an &quot;Insufficiency / Clarification Request&quot; asking for closure proof.</li>
                <li>Uploading your official bank <strong>OTS Sanction Letter + No Dues Certificate</strong> within 24 hours resolves the ticket cleanly in the vast majority of ODC allocations. And in the rare case where a specific trading-desk ODC enforces an inflexible credit-score floor, your IT services employer simply reallocates you to a healthcare, telecom, retail, or manufacturing client account rather than terminating your employment!</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="ecourts-litigation-nuance" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Criminal Screening vs e-Courts Sec 138 &amp; Sec 25 Filings
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Every corporate BGV in India runs a court and criminal record check across automated e-Courts district/magistrate databases. Here is the exact legal boundary every salaried borrower must know:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Defaulting on or settling a personal loan is purely civil:</strong> It never generates an FIR, police chargesheet, or IPC / Bharatiya Nyaya Sanhita (BNS) criminal conviction.</li>
                <li><strong>Quasi-Criminal Instrument Filings (Sec 138 NI Act &amp; Sec 25 PASSA):</strong> If a lender previously filed a magistrate complaint for a dishonoured security cheque (Section 138, Negotiable Instruments Act) or a failed e-NACH auto-debit (Section 25, Payment and Settlement Systems Act), that case number is indexed on public e-Courts portals by party name and address.</li>
                <li><strong>Mandatory Settlement Safeguard:</strong> Whenever you settle a loan where a Section 138, Section 25, or arbitration proceeding was initiated, ensure your OTS Sanction Letter explicitly obligates the lender to <strong>withdraw all pending judicial and quasi-judicial complaints unconditionally</strong> upon receipt of the settlement amount, and save the certified court withdrawal / compounding order alongside your NDC for future BGVs!</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="consent-cicra-rules" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Candidate Consent Rules &amp; Soft vs Hard Credit Inquiries
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Credit Information Companies (Regulation) Act, 2005 (CICRA) and modern Indian privacy safeguards, no employer or BGV agency can legally pull your credit report behind your back. Read your onboarding digital consent form carefully:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li>If the BGV consent checklist only mentions <em>Identity, Education, Employment, Reference, Address, and Criminal/Court Verification</em>, no CIBIL check is being conducted.</li>
                <li>If the consent form includes <em>Credit Check / Financial Regulatory Check / CIBIL or Experian Verification</em>, it is processed as an <strong>employment / background soft inquiry</strong>, so it does <strong>not</strong> deduct points from your CIBIL score like a loan application hard inquiry does.</li>
                <li>Never falsify or edit a PDF CIBIL report or bank No Dues Certificate if asked by HR. Submitting an altered document is instant grounds for termination with a permanent integrity blacklist, whereas disclosing a genuine past settlement with authentic bank closure proof is routinely accepted.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="handling-amber-flags" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. How to Respond If HR Compliance Raises an &quot;Amber&quot; Credit Query
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                BGV vendors classify reports into <strong>Green (Clear)</strong>, <strong>Amber (Attention / Review Required)</strong>, and <strong>Red (Major Discrepancy / Fake Document / Active Criminal Issue)</strong>. In BFSI hiring, a past settled loan typically generates an <strong>Amber</strong> note rather than an automatic Red rejection, prompting HR Compliance to ask you for comments. Respond within 24 hours with a calm, professional three-part packet:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Brief Factual Context (4 to 5 sentences):</strong> State clearly that during a documented historical hardship (e.g., family hospitalisation, 2024-2025 tech layoff, or compensation cut), an unsecured personal loan was formally resolved directly with the lending institution via an authorized One-Time Settlement.</li>
                <li><strong>Official Closure Proof PDF:</strong> Attach the bank&apos;s stamped <strong>OTS Sanction Letter</strong>, payment confirmation, and <strong>No Dues Certificate (NDC)</strong> (see our <Link href="/no-dues-certificate-after-loan-settlement" className="text-[#1F5EFF] font-semibold underline">No Dues Certificate Verification Guide</Link>).</li>
                <li><strong>Zero Ongoing Liability Confirmation:</strong> Point to your latest CIBIL extract showing <strong>Rs. 0 Amount Overdue</strong> and zero active recovery proceedings.</li>
              </ol>
            </section>

            {/* Section 8 */}
            <section id="new-employer-salary-bank" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Watch Out for New Employer Corporate Salary Account Tie-Ups
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                On Day 1 of onboarding at a new company, HR hands you a list of 2 to 4 partner banks to open your new Corporate Salary Account. Check this carefully against your loan history:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Scenario A (Loan Already Settled With NDC):</strong> If you settled an HDFC loan two years ago and hold an official HDFC No Dues Certificate, your debt is legally dead. Opening a new HDFC salary account will not trigger deductions, though the bank&apos;s internal negative list will deny you new HDFC credit cards or overdrafts.</li>
                <li><strong>Scenario B (Loan Still in Active Unpaid Default):</strong> If you have an <em>unpaid, unsettled</em> overdue personal loan at ICICI Bank and you allow your new employer to map your new salary to an ICICI Corporate Salary Account, ICICI&apos;s Customer ID linkage will detect your PAN/KYC and sweep your very first paycheck at the new company! Always choose an alternative tie-up bank from HR&apos;s list where you owe zero debt (see our <Link href="/bank-freeze-salary-account-loan-default" className="text-[#1F5EFF] font-semibold underline">Salary Account Freeze &amp; Set-Off Guide</Link>).</li>
                <li><strong>Scenario C (Joining the Exact Bank Where You Defaulted as an Employee):</strong> If your new employer <em>is itself</em> HDFC Bank, ICICI Bank, Axis Bank, or Bajaj Finance and you hold an unresolved default with that exact institution, internal staff compliance will flag your PAN during employee onboarding. Always settle and obtain a clean NDC before joining a lender where you previously held a stressed facility.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="settled-to-closed-upgrade" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Upgrading &quot;Settled&quot; to &quot;Closed&quot; Later for Senior Banking Roles
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                What if three years after surviving a financial crisis via One-Time Settlement, your career rebounds strongly and you land a VP or Director offer at a regulated bank whose global compliance policy demands zero &quot;Settled&quot; tradelines? You are never permanently locked out. Indian banks allow borrowers to execute a <strong>Settled-to-Closed upgrade</strong> by paying the historical waived principal/interest differential directly to the bank, receiving an updated Full Closure Certificate, and updating CIBIL from &quot;Settled&quot; to &quot;Closed&quot;. Read the exact procedure in <Link href="/can-i-convert-settled-to-closed-later" className="text-[#1F5EFF] font-semibold underline">Can I Convert Settled Status to Closed Later?</Link>
              </p>
            </section>

            {/* Section 10 */}
            <section id="pre-joining-checklist" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                10. Pre-Joining BGV Readiness Checklist for Salaried Candidates
              </h2>
              <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Pull Your Own CIBIL &amp; Experian Reports 30 Days Before Switching:</strong> Verify that every previously settled loan displays <strong>Rs. 0 Overdue</strong> and zero erroneous &quot;Suit Filed&quot; or open DPD tags. If a settled bank forgot to update CIBIL within 30 days, raise an immediate bureau dispute citing RBI&apos;s Rs. 100/day compensation mandate for delayed credit reporting updates.</li>
                <li><strong>Assemble a Single Digital &quot;Closure Folder&quot;:</strong> Keep high-resolution PDFs of every OTS Sanction Letter, NEFT/RTGS UTR proof, No Dues Certificate, and any Section 138/25 court withdrawal order ready.</li>
                <li><strong>Select an Unlinked Payroll Bank on Day 1:</strong> Pick a partner salary bank on your new HR portal where you have zero active unpaid facilities.</li>
                <li><strong>Delay Public LinkedIn Announcements If Active OTS Negotiations Are Ongoing:</strong> Remember that under RBI Fair Practices rules and the updated recovery directions effective <strong>1 January 2027</strong>, agents are strictly barred from contacting your employer or calling outside 8:00 AM to 7:00 PM, yet waiting until your OTS letter is signed before broadcasting a job promotion keeps negotiations smooth.</li>
              </ol>
            </section>

            {/* Section 11: Company Section */}
            <section id="company-resolution-section" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                11. SettleLoans Pre-Joining Resolution for Salaried Candidates
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Preparing for a career jump in IT, consulting, or BFSI while carrying ₹3 Lakhs or more in defaulted personal loans? SettleLoans negotiates formal One-Time Settlements, verifies authentic bank OTS letters, tracks mandatory No Dues Certificates, and audits post-settlement CIBIL updates so you step into your next role with clean legal closure.
              </p>
              <CompanySection />
            </section>

            {/* Section 12: FAQs */}
            <section id="faqs" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                12. Frequently Asked Questions: New Job BGV &amp; Loan Settlement
              </h2>

              <div className="space-y-3">
                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all" open>
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      1. Do standard IT, pharma, engineering, and startup companies check CIBIL scores during new job BGV in India?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>In the vast majority of standard software engineering, product, pharma, manufacturing, sales, and operations roles, corporate BGV checks focus on UAN/EPFO employment history, education degree authenticity, identity, address, and criminal court records. Credit bureau reports are generally not pulled unless you are joining a banking/financial client&apos;s dedicated offshore development centre (ODC) or handling corporate treasury and finance.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      2. Which Indian employers routinely include a CIBIL or Experian credit check in background verification?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Commercial banks, NBFCs, insurance companies, mutual fund houses, SEBI/RBI-regulated fintech firms, global investment bank GCCs (such as Wall Street or European bank tech/ops centres in Bengaluru, Mumbai, Pune, Hyderabad, and Gurugram), and senior CFO/finance-controller roles routinely conduct financial integrity screening.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      3. Will a &apos;Settled&apos; personal loan on my CIBIL report cause my BFSI or bank GCC job offer to be revoked?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Not automatically in most compliance frameworks, provided there is zero active overdue debt and zero undisclosed litigation. Compliance teams distinguish sharply between an open, unresolved default (&apos;Written-Off&apos; or &apos;90+ DPD&apos; with active unpaid balances) and a formally closed &apos;Settled&apos; loan backed by an official bank No Dues Certificate (NDC) and documented past hardship such as medical crisis or prior layoff.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      4. Why is an active unpaid default much riskier in a BFSI background check than a Settled loan?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Financial institutions assess ongoing employee vulnerability to bribery, insider fraud, or regulatory distraction. An active Rs. 8 Lakh unpaid default with mounting collection pressure signals current financial distress, whereas a closed One-Time Settlement showing Rs. 0 current overdue and a signed No Dues Certificate proves the liability has been legally extinguished.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      5. Can a prospective employer check my CIBIL score secretly without my permission?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>No. Under Credit Information Companies regulations and Indian data-protection norms, third-party BGV vendors (such as First Advantage, AuthBridge, HireRight, Sterling, or SpringVerify) can only pull a candidate credit check if the BGV authorization form you sign explicitly lists a credit or financial integrity check.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      6. Does a personal loan default or settlement show up as a criminal record during police or court BGV?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Unsecured personal loan default and One-Time Settlement are civil commercial matters, not IPC/BNS crimes like theft or fraud, and never appear in police station criminal records. However, if a lender previously filed a magistrate complaint under Section 138 of the Negotiable Instruments Act (cheque bounce) or Section 25 of PASSA (e-mandate dishonour), that filing can appear in automated e-Courts database searches unless formally withdrawn upon settlement.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      7. What if my new IT services employer assigns me to a US or UK banking client project?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Tier-1 IT services firms normally do not check credit at initial company joining, but onboarding onto a regulated US/UK banking client&apos;s Offshore Development Centre (ODC) often triggers a secondary client-specific BGV that includes an Experian or CIBIL check. Keeping your OTS Sanction Letter and No Dues Certificate ready allows HR compliance to clear an &apos;Amber&apos; flag smoothly.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      8. What happens if my new employer asks me to open a salary account in the same bank where I settled or defaulted?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>If you already completed a One-Time Settlement and hold an official No Dues Certificate, the debt is extinguished and the bank cannot deduct anything from a new salary account (though it will decline new pre-approved credit cards). However, if your loan at that bank is still in active unpaid default, opening a salary account under the same Customer ID exposes your new paycheck to immediate set-off; ask HR for their secondary tie-up payroll bank instead.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      9. How long after paying a One-Time Settlement does CIBIL update Balance Overdue to zero for BGV?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Under RBI credit reporting timelines, lenders must transmit updated account status within 15 to 30 days of closure. If your new job BGV runs before the bureau refreshes, submitting your official bank OTS Sanction Letter, NEFT/RTGS payment receipt, and No Dues Certificate directly answers any BGV vendor discrepancy query.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      10. Should I proactively disclose a past settled loan during a bank or fintech HR compliance check?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>If the BGV form specifically asks &apos;Do you have any past loan settlements, write-offs, or overdue credit accounts?&apos;, always answer truthfully and attach your No Dues Certificate with a brief 3-line explanation of the historical hardship. Hiding a settled loan when explicitly asked on a BFSI compliance declaration is treated as misrepresentation, which is a far more common ground for offer withdrawal than the settled loan itself.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      11. Can I convert a &apos;Settled&apos; status to &apos;Closed&apos; later if I join a strict investment bank?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes. If a specific senior banking compliance policy requires zero &apos;Settled&apos; tradelines, a borrower can approach the original lender later, pay the previously waived differential (settled-to-closed balance), obtain a full-closure NOC, and have CIBIL updated from &apos;Settled&apos; to &apos;Closed&apos;.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      12. Can debt collection agents contact my new employer&apos;s HR department once I update LinkedIn?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>No. RBI Fair Practices norms and the updated recovery conduct rules effective 1 January 2027 strictly prohibit lenders and recovery agents from contacting your new employer, HR team, or colleagues. During active settlement talks, wait until your OTS closure is finalized before publicly updating your new employer on LinkedIn.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* Statutory References */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Statutory &amp; Credit Reporting References (Checked 11 November 2026)
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
                  Credit Information Companies (Regulation) Act, 2005 (CICRA)
                </span>
                <span className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700">
                  RBI Compensation Framework for Delayed Credit Reporting Updates
                </span>
                <span className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700">
                  Digital Personal Data Protection (DPDP) Candidate Consent Principles
                </span>
              </div>
            </section>

            {/* Related Salaried Guides */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Career, CIBIL &amp; Salaried Settlement Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/no-dues-certificate-after-loan-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  No Dues Certificate Checklist
                </Link>
                <Link href="/can-i-convert-settled-to-closed-later" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Convert Settled to Closed Later
                </Link>
                <Link href="/personal-loan-settlement-cibil-impact" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link href="/unable-to-pay-personal-loan-emi-due-to-job-loss" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  90-Day Job-Loss EMI Plan
                </Link>
                <Link href="/bank-freeze-salary-account-loan-default" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Salary Account Freeze Guide
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
                  <p className="text-xs text-slate-500">Salaried Debt &amp; BGV Compliance Specialist</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Advises IT, GCC, and BFSI candidates on clearing active loan defaults, securing No Dues Certificates, and navigating financial-integrity BGVs.
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
                <span>Pre-BGV Debt Resolution</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Joining a New Role With ₹3L+ Overdues?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Turn open defaults into formally closed accounts backed by official bank OTS letters and No Dues Certificates before your next career jump.
              </p>
              <a
                href="#settlement-assessment"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Start ₹3L+ Settlement Plan
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Career &amp; BGV Safeguards
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Official Bank NDC &amp; OTS Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Strict Workplace Confidentiality</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Sec 138 / Sec 25 Withdrawal Clause Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Post-OTS CIBIL Zero-Overdue Tracking</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
