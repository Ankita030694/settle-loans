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
  title: 'SBI Salary Account Auto-Debit Default | SettleLoans',
  description: 'SBI Salary Package account SI hold or auto-debit taking your pay on an Xpress Credit loan default? Learn set-off limits and salaried settlement.',
  keywords: [
    'sbi salary account auto debit personal loan default',
    'sbi yono hold amount xpress credit overdue',
    'sbi salary package account lien removal personal loan',
    'sbi xpress credit si bounce charges 250',
    'stop sbi standing instruction salary package account',
    'section 60 cpc sbi salary hold government corporate',
    'sbi xpress credit personal loan settlement salaried',
    'sbi mod balance sweep personal loan default'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/sbi-salary-account-auto-debit-personal-loan-default',
  },
  openGraph: {
    title: 'SBI Salary Account Auto-Debit Default | SettleLoans',
    description: 'SBI Salary Package account SI hold or auto-debit taking your pay on an Xpress Credit loan default? Learn set-off limits and salaried settlement.',
    url: 'https://www.settleloans.in/sbi-salary-account-auto-debit-personal-loan-default',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/sbi-personal-loan-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'SBI Salary Package Account Auto-Debit and Xpress Credit Personal Loan Default Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SBI Salary Account Auto-Debit Default | SettleLoans',
    description: 'SBI Salary Package account SI hold or auto-debit taking your pay on an Xpress Credit loan default? Learn set-off limits and salaried settlement.',
    images: ['https://www.settleloans.in/images/infographics/sbi-personal-loan-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.settleloans.in/sbi-salary-account-auto-debit-personal-loan-default#breadcrumb",
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
          "name": "SBI Salary Account Auto-Debit & Loan Default",
          "item": "https://www.settleloans.in/sbi-salary-account-auto-debit-personal-loan-default"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/sbi-salary-account-auto-debit-personal-loan-default#article",
      "headline": "SBI Salary Account Auto-Debit & Personal Loan Default",
      "description": "Exhaustive legal and operational guide for corporate, PSU, and government employees holding an SBI Salary Package Account (CSP, CGSP, SGSP, DSP, RSP) and an overdue SBI Xpress Credit Personal Loan. Explains CIF Hold mechanics in YONO/OnlineSBI, Rs. 250 SI failure and 2.40% to 5% penal charges, Check-Off vs Non-Check-Off rules, Section 60 CPC and Article 226 remedies, and SARB/RACPC compromise settlement.",
      "image": "https://www.settleloans.in/images/infographics/sbi-personal-loan-settlement.jpg",
      "datePublished": "2026-11-11T11:00:00+05:30",
      "dateModified": "2026-11-11T11:00:00+05:30",
      "mainEntityOfPage": "https://www.settleloans.in/sbi-salary-account-auto-debit-personal-loan-default",
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
      "@id": "https://www.settleloans.in/sbi-salary-account-auto-debit-personal-loan-default#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why does YONO SBI show a Hold or Lien Amount equal to my entire Xpress Credit arrears on my salary account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both your SBI Salary Package Account (CSP, CGSP, SGSP, DSP, or RSP) and your SBI Xpress Credit Personal Loan sit under the same CIF (Customer Information File) in SBI's core banking system. When instalments turn irregular, the home branch or RACPC places a CIF-level Hold on your savings account, reducing Available Balance to zero and sweeping incoming salary credits toward the overdue loan."
          }
        },
        {
          "@type": "Question",
          "name": "What are State Bank of India's official SI failure and penal charges on Xpress Credit personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "According to SBI's official Personal Loan schemes schedule (checked on 11 November 2026), Standing Instruction, NACH, or ECS failure charges are Rs. 250 per failed instance plus 18% GST. Penal charges on the irregular/overdue EMI portion are 2.40% per annum for irregularity up to 60 days, scaling to 5.00% per annum for continuous irregularity beyond 60 days, tracked without capitalization."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between Check-Off and Non-Check-Off SBI Xpress Credit loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In a Check-Off Xpress Credit variant (common in government departments, PSUs, defence, or select corporates), the employer's Drawing and Disbursing Officer (DDO) or payroll unit signs an irrevocable salary undertaking or deducts EMIs at source. In a Non-Check-Off corporate variant (including Real-Time Xpress Credit on YONO), the employer has signed no guarantee and repayment happens solely via bank-level Standing Instructions on your SBI Salary Package Account."
          }
        },
        {
          "@type": "Question",
          "name": "Can a private-sector Corporate Salary Package (CSP) holder shift salary credit away from SBI during hardship?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if your SBI loan is a Non-Check-Off personal loan without a tripartite employer undertaking, private-sector corporate employees can lawfully update their bank account on their employer's HR portal before monthly payroll lock-in. By contrast, government or PSU employees who signed an irrevocable DDO salary undertaking must check service conduct rules carefully before attempting any payroll bank change."
          }
        },
        {
          "@type": "Question",
          "name": "Can an SBI branch manager place a 100% Hold on a salaried or pension-linked account leaving Rs. 0 for living?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Indian High Courts have repeatedly struck down 100% holds on salary and subsistence accounts placed by public sector banks without judicial attachment orders. Under Section 60(1)(i) of the Code of Civil Procedure, the first Rs. 1,000 plus two-thirds of remaining monthly salary is exempt even from civil decree attachment, and because SBI is a 'State' instrumentality under Article 12 of the Constitution, arbitrary 100% salary holds are also vulnerable to Article 226 High Court writ scrutiny."
          }
        },
        {
          "@type": "Question",
          "name": "Does SBI sweep Multi-Option Deposit (MOD) auto-sweep balances attached to my Salary Package Account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Many SBI Diamond, Platinum, Gold, and Silver Salary Package Accounts enable Auto-Sweep into Multi-Option Deposits (MODs). Because MODs sit under the same CIF in the borrower's individual capacity, SBI loan terms permit set-off against MOD balances when Xpress Credit instalments remain unpaid."
          }
        },
        {
          "@type": "Question",
          "name": "What happens to my zero-balance SBI Salary Package Account if salary is not credited for 3 consecutive months?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If monthly salary is not credited for 3 consecutive months, SBI withdraws Salary Package concessions (such as free unlimited ATM usage, locker discounts, and insurance add-ons) and reclassifies the account into a normal SBI Savings Account. Note that SBI currently maintains zero minimum balance penalties on regular savings accounts, though Salary Package perks cease."
          }
        },
        {
          "@type": "Question",
          "name": "Which SBI department handles Compromise Settlement once an Xpress Credit loan turns NPA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While early irregularities are monitored by your home branch and Retail Assets Central Processing Centre (RACPC), loans that cross 90 days past due into NPA (especially higher-ticket salaried exposures) are typically migrated to SBI's Stressed Assets Recovery Branch (SARB) or RACC stressed desk, which holds formal committee authority to approve individual compromise settlements."
          }
        },
        {
          "@type": "Question",
          "name": "Can a salaried employee still in service negotiate an individual compromise settlement with SBI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, particularly for private-sector salaried borrowers who suffered job loss, severe pay reduction, critical family medical costs, or unsustainable multi-lender debt loads. Note that active government/PSU employees with steady Check-Off salaries face much stricter scrutiny from SBI committees and are more often steered toward tenure restructuring unless acute hardship or service cessation exists."
          }
        },
        {
          "@type": "Question",
          "name": "What realistic settlement range does SBI consider on defaulted corporate salaried personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SBI never guarantees fixed waiver percentages, and public sector bank recovery audits are strict on principal preservation where salary continues. Depending on NPA age (substandard vs doubtful asset), unpaid principal vs accrued interest, and verifiable hardship, negotiated compromise closures often range from full penal/interest waivers up to 40% to 60% of total claimed dues in aged stressed accounts."
          }
        },
        {
          "@type": "Question",
          "name": "How do I prevent an SBI branch Hold from swallowing my compromise settlement payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Obtain a formal written Compromise Sanction Letter from SBI RACPC or SARB specifying the exact Xpress Credit loan account number and deadline, remit funds directly into the 11-digit loan account (never into your held savings account), and obtain written confirmation of CIF Hold removal plus your No Dues Certificate within 30 days."
          }
        },
        {
          "@type": "Question",
          "name": "Where do I escalate if an SBI home branch refuses to release subsistence salary from a 100% CIF Hold?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Submit a written objection to the Branch Manager and Regional Manager (RBO), log a formal ticket on SBI's CRC portal (crcf.sbi.co.in), escalate to the Nodal Officer at the Local Head Office (LHO) citing Section 60(1)(i) CPC, and escalate unresolved holds after 30 days to the RBI Ombudsman on cms.rbi.org.in."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'sbi-smp-xpress-credit', title: '1. SBI Salary Package (SMP) & Xpress Credit' },
  { id: 'checkoff-vs-noncheckoff', title: '2. Check-Off (Govt/PSU) vs Corporate Rules' },
  { id: 'sbi-verified-charges', title: '3. Official ₹250 SI & 2.4% to 5% Penal Tariff' },
  { id: 'yono-cif-hold-mechanics', title: '4. CIF Hold Balance & MOD Sweep Mechanics' },
  { id: 'cpc60-article226-sbi', title: '5. Section 60 CPC & High Court Protections' },
  { id: 'sbi-hr-payroll-rules', title: '6. HR Payroll Shift: Corporate vs Govt Rules' },
  { id: 'sbi-smp-reclassification', title: '7. 3-Month SMP Package Conversion Impact' },
  { id: 'sbi-lho-rbi-escalation', title: '8. RBO, LHO Nodal & RBI CMS Escalation' },
  { id: 'sbi-sarb-salaried-settlement', title: '9. RACPC / SARB Salaried Settlement (₹3L+)' },
  { id: 'sbi-sanction-hold-audit', title: '10. Sanction Verification & CIF Hold Lift' },
  { id: 'company-resolution-section', title: '11. SettleLoans Salaried Legal Advisory' },
  { id: 'faqs', title: '12. Frequently Asked Questions' },
];

export default function SbiSalaryAccountAutoDebitDefaultPage() {
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
            <span>Salaried Borrower Defense • SBI Salary Package &amp; Xpress Credit</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            SBI Salary Account Auto-Debit &amp; Personal Loan Default
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5">
            How State Bank of India CIF Holds, Standing Instructions, and Check-Off rules work across Corporate (CSP) and Government (CGSP/SGSP/DSP) Salary Package accounts when an Xpress Credit Personal Loan defaults, plus Section 60 CPC limits and SARB settlement.
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
              <span>Section 60 CPC &amp; SBI Tariff Verified</span>
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
              Emergency SBI CIF Hold Help
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
              <li className="font-bold text-slate-900" aria-current="page">SBI Salary Account Auto-Debit &amp; Personal Loan Default</li>
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
                SettleLoans assists salaried borrowers with ₹3 Lakhs or more in combined unsecured obligations across SBI Xpress Credit loans, other bank/NBFC PLs, credit cards, and app loans. Below ₹3L, apply the branch and RBO steps in Sections 6 and 8.
              </p>
            </div>
          </aside>

          {/* Main Content */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">

            {/* Key Takeaways */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Executive Summary: SBI Salary Package &amp; Xpress Credit Default</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIF-Level Hold Mechanics:</strong> SBI&apos;s flagship <strong>Xpress Credit</strong> (and Real-Time Xpress Credit on YONO) is issued exclusively against SBI Salary Package (SMP) accounts under one CIF, enabling branch/system Holds equal to full irregular arrears.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified SBI Tariff (Checked 11 Nov 2026):</strong> Rs. 250 + 18% GST per failed SI/NACH return, plus non-capitalized penal charges of <strong>2.40% p.a.</strong> (up to 60 days overdue) scaling to <strong>5.00% p.a.</strong> (beyond 60 days) on the irregular portion.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Critical Corporate vs Govt Distinction:</strong> Private-sector Corporate Salary Package (CSP) Non-Check-Off borrowers can legally change payroll banks via HR; government/PSU employees who signed an irrevocable DDO undertaking face strict service-rule constraints.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 60 CPC &amp; Article 226 Leverage:</strong> Because SBI is a public-sector &quot;State&quot; entity under Article 12, High Courts scrutinise 100% salary starvation holds strictly against Section 60(1)(i) CPC exemptions and Article 21 livelihood rights.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>SARB Compromise Path:</strong> Once migrated to SBI&apos;s Stressed Assets Recovery Branch (SARB) after NPA classification with verified hardship, structured individual compromise closures become negotiable on realistic, non-guaranteed terms.</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="sbi-smp-xpress-credit" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. SBI Salary Package (SMP) Accounts &amp; Xpress Credit Linkage
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                State Bank of India operates India&apos;s largest salaried banking ecosystem through specialised <strong>Salary Package (SMP)</strong> variants: Corporate Salary Package (CSP) for private companies, Central Government (CGSP), State Government (SGSP), Defence/Paramilitary/Police (DSP/PMSP/PSP), and Railway Salary Package (RSP), tiered into Silver, Gold, Diamond, and Platinum slabs by net monthly salary.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Almost every unsecured personal loan issued to an SMP holder is an <strong>SBI Xpress Credit</strong> or YONO <strong>Real-Time Xpress Credit (RTXC)</strong> loan up to Rs. 20 Lakhs to Rs. 35 Lakhs. Because an SBI Salary Package Account is a mandatory eligibility pre-condition for Xpress Credit, your savings account and your 11-digit loan account always share the exact same <strong>Customer Information File (CIF)</strong> inside SBI&apos;s BaNCS core banking system. When an EMI fails on salary date, SBI does not rely on external NACH clearing, its internal Standing Instruction (SI) and branch Hold tools act directly on your salary ledger.
              </p>
            </section>

            {/* Funnel Framing + Funnel */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                <Wallet className="w-4 h-4" />
                <span>Salaried Total-Debt Eligibility Check (₹3,00,000 Minimum)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Most SBI Xpress Credit borrowers in distress also juggle private-bank personal loans or cards. Enter your <strong>total combined unsecured debt</strong> across SBI, private banks, NBFCs, cards, and apps below (full representation starts at <strong>₹3 Lakhs combined debt</strong>).
              </p>
            </div>

            <LoanSettlementAssessmentFunnel />

            {/* Section 2 */}
            <section id="checkoff-vs-noncheckoff" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Check-Off vs Non-Check-Off SBI Xpress Credit Explained
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before taking a single step on an SBI salary account default, you must verify which of the two Xpress Credit legal structures you signed at sanction. Mixing these up can create avoidable workplace trouble for government/PSU staff or unnecessary panic for private-sector employees:
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Non-Check-Off Xpress Credit (Private Corporate / YONO RTXC)</th>
                      <th>Check-Off / Undertaking Xpress Credit (Govt / PSU / Select Bodies)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Typical Borrower Group</td>
                      <td>IT, private corporate, MNC, hospital, and private institution employees under Corporate Salary Package (CSP).</td>
                      <td>Central/State Govt, Railways, Defence, Police, or PSU employees where DDO/HR countersigned loan annexures.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Employer Role</td>
                      <td>Zero employer involvement or guarantee; loan sanctioned digitally on YONO or at branch solely on salary slips.</td>
                      <td>DDO / Pay &amp; Accounts Office either deducts EMI at source (Check-Off) or signed an Irrevocable Letter of Authority to route salary only to SBI until NOC.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Can Employee Shift Payroll Bank via HR?</td>
                      <td>Yes. Private-sector employer has no obligation to lock payroll in SBI; employee can update HRMS bank account lawfully.</td>
                      <td>Restricted. DDO normally requires an SBI No Objection Certificate before shifting salary account if an irrevocable undertaking is on file.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 */}
            <section id="sbi-verified-charges" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Official SBI ₹250 SI Bounce &amp; 2.40% to 5% Penal Charges
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Compared to private-sector banks and NBFCs, State Bank of India levies markedly lower statutory bounce and penal tariffs, an advantage that keeps total ledger bloat slower while you organise your defence or settlement capital:
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Charge Category</th>
                      <th>Verified SBI Personal Loan Tariff</th>
                      <th>Operational Behaviour on Irregular Accounts</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SI / NACH / ECS Failure Fee</td>
                      <td><strong>Rs. 250 per failed instance + 18% GST (Rs. 295)</strong>.</td>
                      <td>Charged when scheduled Standing Instruction or clearing fails due to insufficient clear balance.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Penal Charges (1 to 60 Days Overdue)</td>
                      <td><strong>2.40% per annum</strong> on the irregular/overdue EMI portion for the period of default.</td>
                      <td>Calculated strictly on the overdue instalment portion (not the entire principal) and non-capitalized per RBI Penal Charges norms.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Penal Charges (Beyond 60 Days Overdue)</td>
                      <td><strong>5.00% per annum</strong> on the irregular/overdue portion for continuous irregularity past 60 days.</td>
                      <td>Replaces compounding penal interest; normal contractual interest on unpaid principal continues until NPA interest-reversal rules apply.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Savings Minimum Balance Post-Shift</td>
                      <td><strong>Rs. 0 AMB non-maintenance penalty</strong> on standard SBI Savings Accounts (SMP perks cease after 3 months without salary).</td>
                      <td>Unlike private banks, SBI does not pile Rs. 600/month AMB shortfall fees onto a dormant salary account after payroll shifts.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                <strong>Source Verification:</strong> State Bank of India Official Personal Loan Schemes Interest Rates &amp; Penal Charges (<a href="https://sbi.bank.in/web/interest-rates/interest-rates/loan-schemes-interest-rates/personal-loans-schemes" target="_blank" rel="noopener noreferrer" className="text-[#1F5EFF] underline">sbi.bank.in Personal Loans Schemes Schedule</a>). <strong>Checked on: 11 November 2026.</strong> Individual Xpress Credit KFS and sanction letters govern scheme-specific concessions.
              </p>
            </section>

            {/* Section 4 */}
            <section id="yono-cif-hold-mechanics" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. How SBI YONO &quot;Lien / Hold Amount&quot; &amp; MOD Sweeps Work
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                While SBI&apos;s bounce fee is modest, its core-banking <strong>Hold</strong> mechanism is unusually persistent. When you open YONO SBI or OnlineSBI and inspect your Salary Package savings account after missing two Xpress Credit instalments, you will typically see two numbers:
              </p>
              <ul className="list-disc pl-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Book / Uncleared / Total Balance vs Available Balance:</strong> Home branch officers or automated SMA-1/SMA-2 scripts place a manual or system <strong>Hold (Stop)</strong> for the entire irregular arrears (or, post-NPA recall, the entire recalled loan balance). Even when your employer credits Rs. 68,000 salary, YONO shows <em>Lien Amount: Rs. 92,000 | Available Balance: Rs. 0.00</em>, blocking ATM withdrawals, UPI transfers, and rent cheques instantly.</li>
                <li><strong>Multi-Option Deposit (MOD) Auto-Sweep Appropriation:</strong> SBI Diamond, Platinum, and Gold Salary Package accounts frequently activate Auto-Sweep, turning surplus funds above Rs. 35,000 into liquid MOD term deposits. Because MODs sit under the exact same CIF in your sole name, branch officers routinely break and appropriate MOD balances against overdue Xpress Credit arrears under SBI&apos;s general set-off clause.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="cpc60-article226-sbi" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Section 60(1)(i) CPC &amp; Article 226 Protections Against SBI Holds
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Salaried borrowers actually hold <em>stronger</em> constitutional remedies against an arbitrary 100% salary freeze at State Bank of India than at private lenders, for two distinct statutory reasons:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1.5">
                  <h3 className="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-1.5">
                    <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 60(1)(i) CPC Statutory Floor</span>
                  </h3>
                  <p className="text-xs text-blue-900 leading-relaxed">
                    Under Section 60(1)(i) of the Code of Civil Procedure, the first <strong>Rs. 1,000 plus two-thirds of the remainder of monthly salary</strong> is strictly exempt from civil debt attachment. Even if a Check-Off or Non-Check-Off government/corporate employee cannot shift their salary account, an administrative branch Hold seizing 100% of monthly pay violates the statutory subsistence ceiling established by Parliament. Read more on <Link href="/section-60-cpc-salary-property-attachment-exemptions" className="text-[#1F5EFF] font-semibold underline">Section 60 CPC Salary Attachment Exemptions</Link>.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-indigo-600" />
                    <span>Article 12 &quot;State&quot; Duty &amp; Article 226 Writs</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    As a statutory public-sector bank created under the State Bank of India Act, 1955, SBI qualifies as &quot;State&quot; under Article 12 of the Constitution of India. High Courts (including Kerala, Madras, Allahabad, and Patna High Courts) have repeatedly entertained Writ Petitions under Article 226 directing public-sector bank branches to lift blanket 100% holds on active salary and pension accounts that deprive families of Article 21 livelihood without a court attachment order.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="sbi-hr-payroll-rules" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Lawful Payroll Account Rules: Corporate vs Government Staff
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Choose the right operational path based on your employer category:
              </p>
              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-[#1F5EFF] bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Path A: Private-Sector Corporate Salary Package (CSP) Employees</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you work in IT, healthcare, manufacturing, BPO, or private services and took a digital YONO Real-Time Xpress Credit or Non-Check-Off loan without employer counter-signature, update your payroll bank account on your employer&apos;s HRMS portal before the 15th to 20th cut-off to an unlinked bank where you carry zero debt. Keep SBI informed in writing of your hardship and resolution plan.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Path B: Government / PSU / Defence Employees With Irrevocable Undertaking</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If your DDO signed an irrevocable salary routing undertaking at sanction, attempting to move salary without an SBI NOC will usually be declined by your accounts section. Instead, serve a formal written representation on the SBI Branch Manager and Regional Business Office (RBO) invoking <strong>Section 60(1)(i) CPC</strong> to restrict monthly recovery holds so at least two-thirds plus Rs. 1,000 of net salary remains accessible for household subsistence while tenure restructuring or SARB compromise talks proceed.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="sbi-smp-reclassification" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. What Happens When Salary Stops Hitting SBI SMP for 3 Months
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When corporate salary credits do not arrive in an SBI Salary Package account for <strong>3 consecutive calendar months</strong>, SBI&apos;s quarterly review batch removes the SMP package code (CSP/CGSP/DSP) and converts the account into a Regular SBI Savings Account. Complimentary SMP benefits, such as bundled personal accident cover, zero-charge NEFT/RTGS slabs, and locker concessions, terminate upon conversion. However, because SBI waived Average Monthly Balance shortfall charges on standard savings accounts, you do not suffer the Rs. 600/month AMB fee spiral seen at private banks. Still, remember to update your Income Tax e-Filing refund account so tax refunds do not land inside an active CIF Hold.
              </p>
            </section>

            {/* Section 8 */}
            <section id="sbi-lho-rbi-escalation" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Escalating Arbitrary 100% CIF Holds: RBO, LHO &amp; RBI CMS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Local SBI home branches often place blanket 100% CIF Holds mechanically without consulting legal departments. Follow SBI&apos;s institutional hierarchy to challenge unlawful 100% paycheck blocks:
              </p>
              <ol className="list-decimal pl-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Written Objection to Home Branch &amp; Regional Manager (RBO):</strong> Submit a stamped written representation citing lack of prior set-off notice and the Section 60(1)(i) CPC two-thirds wage exemption, attaching salary slips and essential living/medical proofs.</li>
                <li><strong>SBI Customer Request &amp; Complaint Form (`crcf.sbi.co.in`) &amp; LHO Nodal Officer:</strong> Register an official complaint online and escalate to the General Manager (Network) / Principal Nodal Officer at your circle&apos;s Local Head Office (LHO). Also remember that RBI&apos;s Fair Practices Code, and RBI&apos;s updated recovery conduct directions effective <strong>1 January 2027</strong>, bar unauthorized workplace intimidation or recovery harassment.</li>
                <li><strong>RBI Ombudsman (`cms.rbi.org.in`) &amp; High Court Writ Relief:</strong> Escalate unresolved 100% subsistence freezes to the RBI Integrated Ombudsman after 30 days, or consult legal counsel regarding urgent Article 226 relief in acute starvation freezes. See <Link href="/bank-freeze-salary-account-loan-default" className="text-[#1F5EFF] font-semibold underline">Bank Freeze Salary Account Legal Remedies</Link>.</li>
              </ol>
            </section>

            {/* Section 9 */}
            <section id="sbi-sarb-salaried-settlement" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Negotiating Salaried Compromise Settlement With SBI RACPC / SARB
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                How does individual personal loan settlement work at a public-sector bank like SBI compared to private lenders? Home branch managers rarely have discretionary authority to grant principal haircuts on standard accounts. Once an unsecured Xpress Credit loan crosses <strong>90 Days Past Due into NPA</strong>, file control moves from the branch/RACPC to SBI&apos;s <strong>Stressed Assets Recovery Branch (SARB)</strong> or RACC stressed resolution committee.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Here is the honest salaried reality at SBI:
              </p>
              <ul className="list-disc pl-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Private Corporate Borrowers With Job Loss, Pay Cut, or Multi-Debt Insolvency:</strong> When documented through termination letters, reduced salary slips, medical bills, and CIBIL reports showing severe multi-lender over-leverage, SARB/RACC committees evaluate board-approved individual Compromise Settlements based on Net Present Value of recovery vs multi-year civil litigation costs. Realistic outcomes vary widely, from 100% waiver of penal/unapplied interest plus modest principal concessions on newer NPAs, down to <strong>40% to 65% of total claimed dues</strong> on aged Doubtful/Written-Off unsecured accounts (strictly case-specific, never guaranteed).</li>
                <li><strong>Active Govt / PSU Check-Off Employees:</strong> Where permanent government salary continues uninterrupted through DDO check-off, SBI rarely grants deep principal waivers; resolution typically focuses on lifting excessive CIF holds above the Section 60 CPC limit, re-phasing overdue arrears, or clearing outside high-interest NBFC/private loans first so the low-rate SBI loan becomes serviceable. Read our broader <Link href="/sbi-personal-loan-settlement" className="text-[#1F5EFF] font-semibold underline">SBI Personal Loan Settlement Guide</Link> for committee hierarchies.</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section id="sbi-sanction-hold-audit" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                10. SBI Compromise Sanction Verification &amp; CIF Hold Removal
              </h2>
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950 text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>5 Mandatory Checks Before Paying an SBI Compromise Settlement</span>
                </div>
                <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <li><strong>Signed SARB / RACPC / Branch Sanction Letter:</strong> Never deposit lump-sum funds on a verbal assurance from a recovery agent or branch clerk. Obtain a formal signed Compromise Sanction Letter on SBI letterhead stating the exact 11-digit Xpress Credit account number, compromise amount, upfront deposit, and final tranche deadline.</li>
                  <li><strong>Remit Directly to the 11-Digit Loan Account:</strong> Transfer NEFT/RTGS or deposit via voucher strictly into the Xpress Credit loan account (or dedicated SARB no-lien account if instructed in writing), never into your CIF-held SBI savings account.</li>
                  <li><strong>Written Removal of All CIF Holds &amp; Stops:</strong> Ensure the branch/SARB removes all BaNCS Hold/Stop flags on your linked SBI savings account upon settlement closure.</li>
                  <li><strong>Withdrawal of Lok Adalat / Civil / Section 25 Notices:</strong> Confirm withdrawal of any pending legal or pre-litigation notices upon full payment.</li>
                  <li><strong>30-Day No Dues Certificate &amp; CIBIL Audit:</strong> Collect your physical stamped <Link href="/no-dues-certificate-after-loan-settlement" className="text-[#1F5EFF] font-semibold underline">No Dues Certificate</Link> within 30 days and verify `Rs. 0` balance reporting on CIBIL after 45 to 60 days.</li>
                </ol>
              </div>
            </section>

            {/* Section 11 */}
            <section id="company-resolution-section" className="space-y-6 scroll-mt-24">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  11. SettleLoans Salaried Legal Support for SBI Borrowers (₹3L+)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Whether an SBI Xpress Credit CIF Hold has frozen your monthly household budget or you are juggling an SBI loan alongside high-cost private bank and NBFC EMIs totalling <strong>₹3 Lakhs or more</strong>, SettleLoans provides disciplined legal and financial representation: auditing Check-Off vs Non-Check-Off obligations, challenging unlawful 100% salary holds under Section 60 CPC, prioritising multi-lender settlements, and negotiating formal SARB/RACPC closures.
                </p>
              </div>

              <CompanySection />
            </section>

            {/* Section 12: FAQs */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8 scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  12. Frequently Asked Questions: SBI Salary Account &amp; Xpress Credit
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                Detailed answers for CSP, CGSP, SGSP, and DSP salary package holders dealing with YONO CIF holds, MOD sweeps, and Xpress Credit resolution.
              </p>

              <div className="space-y-3">
                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      1. Why does YONO SBI show a Hold or Lien Amount equal to my entire Xpress Credit arrears on my salary account?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Both your SBI Salary Package Account (CSP, CGSP, SGSP, DSP, or RSP) and your SBI Xpress Credit Personal Loan sit under the same CIF (Customer Information File) in SBI&apos;s core banking system. When instalments turn irregular, the home branch or RACPC places a CIF-level Hold on your savings account, reducing Available Balance to zero and sweeping incoming salary credits toward the overdue loan.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      2. What are State Bank of India&apos;s official SI failure and penal charges on Xpress Credit personal loans?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>According to SBI&apos;s official Personal Loan schemes schedule (checked on 11 November 2026), Standing Instruction, NACH, or ECS failure charges are Rs. 250 per failed instance plus 18% GST. Penal charges on the irregular/overdue EMI portion are 2.40% per annum for irregularity up to 60 days, scaling to 5.00% per annum for continuous irregularity beyond 60 days, tracked without capitalization.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      3. What is the difference between Check-Off and Non-Check-Off SBI Xpress Credit loans?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>In a Check-Off Xpress Credit variant (common in government departments, PSUs, defence, or select corporates), the employer&apos;s Drawing and Disbursing Officer (DDO) or payroll unit signs an irrevocable salary undertaking or deducts EMIs at source. In a Non-Check-Off corporate variant (including Real-Time Xpress Credit on YONO), the employer has signed no guarantee and repayment happens solely via bank-level Standing Instructions on your SBI Salary Package Account.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      4. Can a private-sector Corporate Salary Package (CSP) holder shift salary credit away from SBI during hardship?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes, if your SBI loan is a Non-Check-Off personal loan without a tripartite employer undertaking, private-sector corporate employees can lawfully update their bank account on their employer&apos;s HR portal before monthly payroll lock-in. By contrast, government or PSU employees who signed an irrevocable DDO salary undertaking must check service conduct rules carefully before attempting any payroll bank change.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      5. Can an SBI branch manager place a 100% Hold on a salaried or pension-linked account leaving Rs. 0 for living?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Indian High Courts have repeatedly struck down 100% holds on salary and subsistence accounts placed by public sector banks without judicial attachment orders. Under Section 60(1)(i) of the Code of Civil Procedure, the first Rs. 1,000 plus two-thirds of remaining monthly salary is exempt even from civil decree attachment, and because SBI is a &apos;State&apos; instrumentality under Article 12 of the Constitution, arbitrary 100% salary holds are also vulnerable to Article 226 High Court writ scrutiny.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      6. Does SBI sweep Multi-Option Deposit (MOD) auto-sweep balances attached to my Salary Package Account?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes. Many SBI Diamond, Platinum, Gold, and Silver Salary Package Accounts enable Auto-Sweep into Multi-Option Deposits (MODs). Because MODs sit under the same CIF in the borrower&apos;s individual capacity, SBI loan terms permit set-off against MOD balances when Xpress Credit instalments remain unpaid.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      7. What happens to my zero-balance SBI Salary Package Account if salary is not credited for 3 consecutive months?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>If monthly salary is not credited for 3 consecutive months, SBI withdraws Salary Package concessions (such as free unlimited ATM usage, locker discounts, and insurance add-ons) and reclassifies the account into a normal SBI Savings Account. Note that SBI currently maintains zero minimum balance penalties on regular savings accounts, though Salary Package perks cease.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      8. Which SBI department handles Compromise Settlement once an Xpress Credit loan turns NPA?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>While early irregularities are monitored by your home branch and Retail Assets Central Processing Centre (RACPC), loans that cross 90 days past due into NPA (especially higher-ticket salaried exposures) are typically migrated to SBI&apos;s Stressed Assets Recovery Branch (SARB) or RACC stressed desk, which holds formal committee authority to approve individual compromise settlements.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      9. Can a salaried employee still in service negotiate an individual compromise settlement with SBI?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes, particularly for private-sector salaried borrowers who suffered job loss, severe pay reduction, critical family medical costs, or unsustainable multi-lender debt loads. Note that active government/PSU employees with steady Check-Off salaries face much stricter scrutiny from SBI committees and are more often steered toward tenure restructuring unless acute hardship or service cessation exists.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      10. What realistic settlement range does SBI consider on defaulted corporate salaried personal loans?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>SBI never guarantees fixed waiver percentages, and public sector bank recovery audits are strict on principal preservation where salary continues. Depending on NPA age (substandard vs doubtful asset), unpaid principal vs accrued interest, and verifiable hardship, negotiated compromise closures often range from full penal/interest waivers up to 40% to 60% of total claimed dues in aged stressed accounts.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      11. How do I prevent an SBI branch Hold from swallowing my compromise settlement payment?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Obtain a formal written Compromise Sanction Letter from SBI RACPC or SARB specifying the exact Xpress Credit loan account number and deadline, remit funds directly into the 11-digit loan account (never into your held savings account), and obtain written confirmation of CIF Hold removal plus your No Dues Certificate within 30 days.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      12. Where do I escalate if an SBI home branch refuses to release subsistence salary from a 100% CIF Hold?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Submit a written objection to the Branch Manager and Regional Manager (RBO), log a formal ticket on SBI&apos;s CRC portal (crcf.sbi.co.in), escalate to the Nodal Officer at the Local Head Office (LHO) citing Section 60(1)(i) CPC, and escalate unresolved holds after 30 days to the RBI Ombudsman on cms.rbi.org.in.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* Official Sources */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Official SBI Tariff &amp; Statutory Sources (Checked 11 November 2026)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://sbi.bank.in/web/interest-rates/interest-rates/loan-schemes-interest-rates/personal-loans-schemes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">SBI Official Personal Loan Schemes &amp; Penal Charges</span>
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
                  Constitution of India: Articles 12, 21 &amp; 226 Public Bank Accountability
                </span>
              </div>
            </section>

            {/* Related Guides */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Salaried Debt &amp; SBI Settlement Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/bank-freeze-salary-account-loan-default" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Bank Freeze Salary Account Guide
                </Link>
                <Link href="/salary-account-ecs-mandate-cancellation-rules" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  ECS &amp; NACH Cancellation Rules
                </Link>
                <Link href="/sbi-personal-loan-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  SBI Personal Loan Settlement
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
                <Link href="/kotak-salary-account-auto-debit-personal-loan-default" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Kotak Salary Account Auto-Debit
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
                Advises corporate, PSU, and salaried borrowers on SBI CIF hold challenges, Section 60 CPC protections, and SARB personal loan compromise negotiations.
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
                <span>SBI Salaried Relief</span>
              </div>
              <div className="font-bold text-base text-white mb-2">YONO Showing a CIF Salary Hold?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                If your combined unsecured debt across SBI Xpress Credit, private banks, and cards is ₹3 Lakhs+, get a structured legal &amp; settlement assessment now.
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
                  <span>Check-Off vs Non-Check-Off Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Zero Employer Contact Protocol</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official SARB / RACPC Sanction Check</span>
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
