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
  Layers
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Loan Top-Up Default Same Bank | SettleLoans',
  description: 'Defaulting on both a base personal loan and top-up at the same bank? Understand RBI UCIC cross-default NPA rules and combined ₹3L+ OTS negotiation.',
  keywords: [
    'personal loan top up default same bank',
    'can i settle top up loan and keep base personal loan active',
    'rbi borrower wise npa rule personal loan top up',
    'cross default clause personal loan india',
    'hdfc icici personal loan and top up settlement together',
    'two personal loans in same bank default',
    'ucic customer id npa classification personal loan',
    'combined one time settlement multiple loans same bank'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-top-up-default-same-bank',
  },
  openGraph: {
    title: 'Personal Loan Top-Up Default Same Bank | SettleLoans',
    description: 'Defaulting on both a base personal loan and top-up at the same bank? Understand RBI UCIC cross-default NPA rules and combined ₹3L+ OTS negotiation.',
    url: 'https://www.settleloans.in/personal-loan-top-up-default-same-bank',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/case-study-25-lakh-multiple-bank-settlement-settleloans.jpg',
        width: 1200,
        height: 675,
        alt: 'Personal Loan and Top-Up Default at the Same Bank Cross-Default and Settlement Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Loan Top-Up Default Same Bank | SettleLoans',
    description: 'Defaulting on both a base personal loan and top-up at the same bank? Understand RBI UCIC cross-default NPA rules and combined ₹3L+ OTS negotiation.',
    images: ['https://www.settleloans.in/images/infographics/case-study-25-lakh-multiple-bank-settlement-settleloans.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.settleloans.in/personal-loan-top-up-default-same-bank#breadcrumb",
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
          "name": "Personal Loan & Top-Up Default at Same Bank",
          "item": "https://www.settleloans.in/personal-loan-top-up-default-same-bank"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-top-up-default-same-bank#article",
      "headline": "Personal Loan & Top-Up Default at the Same Bank: Salaried Guide",
      "description": "In-depth legal and banking guide for Indian salaried borrowers holding both a base Personal Loan and a Top-Up Personal Loan (or parallel pre-approved loans) at the same bank. Explains RBI UCIC borrower-wise NPA classification, contractual cross-default clauses, secured collateral NOC risks, and combined ₹3L+ One-Time Settlement structuring.",
      "image": "https://www.settleloans.in/images/infographics/case-study-25-lakh-multiple-bank-settlement-settleloans.jpg",
      "datePublished": "2026-11-11T11:45:00+05:30",
      "dateModified": "2026-11-11T11:45:00+05:30",
      "mainEntityOfPage": "https://www.settleloans.in/personal-loan-top-up-default-same-bank",
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
      "@id": "https://www.settleloans.in/personal-loan-top-up-default-same-bank#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I keep paying my base personal loan EMI and only settle my top-up personal loan at the same bank?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Practically no. Under RBI's mandatory borrower-wise Asset Classification (IRACP) norms, NPA tagging operates across your Unique Customer Identification Code (UCIC / Customer ID), not facility-by-facility. The moment your top-up loan crosses 90 days past due into NPA status, your base personal loan and credit cards at that exact same bank are automatically classified as NPA even if you paid their EMIs on time."
          }
        },
        {
          "@type": "Question",
          "name": "Why do I have two separate EMIs and two Loan Account Numbers after taking a personal loan top-up?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Banks structure salaried top-ups in two ways: either as a Balance Merger (where the new loan forecloses the old LAN and leaves one larger EMI) or as a Parallel / Split Disbursal (where your original loan continues under LAN-1 and the top-up is booked as a separate parallel LAN-2 under the same Customer ID). Parallel LANs trigger double bounce charges if both dishonour in the same month."
          }
        },
        {
          "@type": "Question",
          "name": "What is a cross-default clause in a salaried personal loan agreement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A cross-default clause stipulates that an Event of Default on any one loan, overdraft, or credit card held by you with that bank (or its group entities) automatically constitutes a default on every other facility you hold with that bank, empowering the bank to recall all facilities together and block credit card limits immediately."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I also have a Car Loan or Home Loan at the exact same bank where my Personal Loan and Top-Up default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This requires extreme caution. First, under RBI UCIC rules, an NPA on your unsecured personal loan forces borrower-level NPA tagging on your home or car loan at that same bank. Second, banks frequently invoke general lien / cross-collateral covenants to withhold your vehicle Hypothecation Removal NOC or property title deeds even after you finish paying the car or home loan until the unsecured personal loan is settled!"
          }
        },
        {
          "@type": "Question",
          "name": "Do banks charge separate bounce fees on both the base loan and the top-up loan every month?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if they sit under two separate Loan Account Numbers (LANs) with two separate SI/NACH instructions. For example, two bounced LANs at HDFC Bank (Rs. 450 to Rs. 550 + GST each), ICICI Bank (Rs. 500 + GST each), or Kotak (Rs. 750 each) double your monthly dishonour fees plus destination bank inward return charges."
          }
        },
        {
          "@type": "Question",
          "name": "Can a recovery agent force me to settle only one LAN now and leave the second LAN open for next year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Beware of partial single-LAN pitches from target-driven collection callers. Settling LAN-1 while leaving LAN-2 in active NPA at the same bank keeps your UCIC flagged as an active defaulter, risks internal hold sweeps, and sometimes delays final No Dues clearance. Always negotiate a consolidated or simultaneous Customer-ID-level OTS covering all unsecured LANs at that lender."
          }
        },
        {
          "@type": "Question",
          "name": "What if I also hold an Insta Loan or Jumbo Loan on an HDFC or ICICI credit card alongside my Personal Loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Card-linked loans (like HDFC Insta Jumbo Loan or ICICI Personal Loan on Credit Card) share your bank UCIC. When negotiating a same-bank settlement, list the base PL LAN, Top-Up LAN, Credit Card account number, and Jumbo Loan account number together so the bank's Zonal Credit Committee approves a comprehensive Customer-ID compromise."
          }
        },
        {
          "@type": "Question",
          "name": "Does RBI borrower-wise NPA tagging at HDFC Bank automatically turn my regular loan at Axis Bank into an NPA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. RBI's automatic UCIC borrower-wise NPA rule applies within the same regulated lending institution. Defaulting on an HDFC base + top-up loan turns all your HDFC facilities NPA, and lowers your CIBIL score, but your Axis Bank loan remains Standard as long as you pay Axis EMIs on schedule."
          }
        },
        {
          "@type": "Question",
          "name": "How does same-bank salary account set-off behave when both a base PL and top-up PL are overdue?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When two LANs are overdue under the same Customer ID as your Corporate Salary Account, the core banking system aggregates the overdue instalments and charges of both LANs into a combined Hold Balance, absorbing incoming salary credits twice as fast. Lawfully shifting payroll via HR to an unlinked bank is essential before entering NPA settlement talks."
          }
        },
        {
          "@type": "Question",
          "name": "What realistic combined settlement percentage do banks accept on dual base + top-up personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Outcomes are never guaranteed and depend on combined principal, NPA vintage (90 to 180+ DPD), and documented salaried hardship. When structured as a single Customer-ID lump-sum settlement across ₹3L+ combined unsecured dues, realistic closures commonly fall between 40% and 65% of total claimed balances across both LANs, including 100% waiver of penal and bounce fees."
          }
        },
        {
          "@type": "Question",
          "name": "What must I verify on the OTS Sanction Letter when settling both a base loan and a top-up loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Verify that EVERY exact Loan Account Number (both Base LAN and Top-Up LAN) is printed on the bank's official letterhead OTS Sanction Letter (or two simultaneous cross-referenced OTS letters issued on the same date), with exact settlement allocation per LAN, full waiver of residual dues on both accounts, and Separate No Dues Certificates upon payment."
          }
        },
        {
          "@type": "Question",
          "name": "How will CIBIL display a combined settlement of a base personal loan and a top-up loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because each Loan Account Number is reported as an individual tradeline on CIBIL, Experian, Equifax, and CRIF High Mark, both LANs will update separately to 'Settled' with Rs. 0 Current Balance and Rs. 0 Amount Overdue within 30 days of final tranche clearance."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'how-salaried-topups-stack', title: '1. Merged vs Parallel Salaried Top-Up LANs' },
  { id: 'rbi-ucic-npa-rule', title: '2. RBI UCIC Rule: Why One NPA Infects All' },
  { id: 'cross-default-clause', title: '3. Contractual Cross-Default Clauses Decoded' },
  { id: 'myth-of-partial-save', title: '4. Why Paying One LAN & Defaulting One Fails' },
  { id: 'double-bounce-penal', title: '5. Double Bounce & Penal Fee Multiplication' },
  { id: 'secured-loan-trap', title: '6. Home Loan, Car Loan & FD Lien Exposure' },
  { id: 'salary-account-double-hold', title: '7. Same-Bank Corporate Salary Sweep Risk' },
  { id: 'combined-ots-strategy', title: '8. Combined Multi-LAN ₹3L+ OTS Strategy' },
  { id: 'multi-lan-ots-checklist', title: '9. Multi-LAN OTS Letter & NDC Audit Rules' },
  { id: 'cibil-reporting-dual', title: '10. Dual Tradeline CIBIL Reporting & Recovery' },
  { id: 'company-resolution-section', title: '11. SettleLoans Multi-LAN Negotiation Desk' },
  { id: 'faqs', title: '12. Frequently Asked Questions' },
];

export default function PersonalLoanTopUpDefaultSameBankPage() {
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
            <span>Same-Bank Multi-LAN Defense • RBI UCIC &amp; Cross-Default Rules</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Personal Loan &amp; Top-Up Default at the Same Bank: Salaried Guide
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5">
            Struggling to service both a Base Personal Loan and a pre-approved Top-Up Loan at HDFC, ICICI, Axis, SBI, or Kotak? Learn why RBI&apos;s UCIC borrower-wise NPA rule makes &quot;paying one and defaulting on the other&quot; impossible, how cross-default impacts linked cards or car loans, and how to negotiate a unified ₹3L+ settlement.
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
              <span>RBI IRACP Norms Verified</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#settlement-assessment"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Evaluate Combined ₹3L+ OTS Package</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Audit My Same-Bank Exposure
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
              <li className="font-bold text-slate-900" aria-current="page">Personal Loan &amp; Top-Up Default at Same Bank</li>
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
                SettleLoans negotiates unified Customer-ID settlements where your combined unsecured debt across your base loan, top-up loan, credit cards, and external lenders is ₹3 Lakhs or higher.
              </p>
            </div>
          </aside>

          {/* Main Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">

            {/* Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Critical Rules for Base + Top-Up Borrowers</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Borrower-Wise NPA Mandate:</strong> Under RBI IRACP prudential rules, NPA classification is mapped to your <strong>Unique Customer Identification Code (UCIC)</strong>. If your Top-Up Loan hits 91 DPD, your Base Loan and Credit Card at that same bank automatically become NPA even if paid on time!</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Never Burn Cash Paying Only Half of a Same-Bank Pair:</strong> Continuing to pay Rs. 12,000/month on LAN-1 while defaulting on Rs. 22,000/month LAN-2 at the same bank will NOT save LAN-1 from NPA downgrade or preserve your credit card.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Check Secured Collateral Overlaps Immediately:</strong> If you also hold a Car Loan, Home Loan, or Fixed Deposit at that exact same bank, cross-collateral and general lien clauses can block vehicle NOCs or sweep FDs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Unified Multi-LAN Settlement:</strong> Always negotiate a consolidated Customer-ID settlement covering every unsecured LAN at that lender simultaneously, backed by explicit LAN-wise OTS letters and No Dues Certificates.</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="how-salaried-topups-stack" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. How Banks Book Salaried Top-Up Loans: Merged vs Parallel LANs
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Twelve months into repaying a Rs. 5 Lakh salaried personal loan cleanly, nearly every private and public bank in India bombards your mobile banking app with one-click &quot;Pre-Approved Personal Loan Top-Up&quot; offers. Salaried employees facing medical bills, wedding costs, or credit card balances tap accept, expecting one manageable loan. Only when financial stress hits do borrowers discover how the bank actually booked the debt under the hood:
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Top-Up Architecture</th>
                      <th>How Core Banking Records It</th>
                      <th>Impact When Salaried Cash Flow Breaks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Structure A: Merged / Consolidated Top-Up</strong></td>
                      <td>New sanction (e.g., Rs. 10L) internally forecloses old Base LAN (Rs. 3.8L balance) and disburses net Rs. 6.2L under <strong>1 single new LAN</strong>.</td>
                      <td>Single monthly EMI, single bounce charge on dishonour, and single tradeline to negotiate in OTS.</td>
                    </tr>
                    <tr>
                      <td><strong>Structure B: Parallel / Split Top-Up LANs</strong></td>
                      <td>Base PL continues running under <strong>LAN-1</strong> (e.g., EMI on 5th) while Top-Up PL is booked as a separate parallel <strong>LAN-2</strong> (e.g., EMI on 7th or 10th), plus optional Credit Card Insta/Jumbo <strong>LAN-3</strong>.</td>
                      <td><strong>Double or triple monthly bounce charges</strong>, staggered recovery calls from different bucket teams, and dangerous temptation to pay the smaller EMI while skipping the larger one.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Salaried Combined-Debt Assessment Framing + Funnel */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                <Wallet className="w-4 h-4" />
                <span>Combined Same-Bank &amp; Multi-Loan Assessment (₹3,00,000 Floor)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When you hold a Base Personal Loan plus a Top-Up Loan (and linked cards or external loans), credit committees look at your <strong>entire Customer-ID exposure</strong>. Enter your <strong>total combined unsecured debt</strong> across all loans and cards below (cases from <strong>₹3 Lakhs and above</strong> qualify for full multi-LAN settlement structuring).
              </p>
            </div>

            <LoanSettlementAssessmentFunnel />

            {/* Section 2 */}
            <section id="rbi-ucic-npa-rule" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. RBI&apos;s UCIC Rule: Why One Default Turns Every Same-Bank Loan NPA
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Every retail bank and NBFC regulated by the Reserve Bank of India assigns each customer a single <strong>Unique Customer Identification Code (UCIC)</strong> (called Customer ID at HDFC and ICICI, CIF at SBI, and CRN at Kotak). Under RBI&apos;s Master Circular on <em>Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP)</em>, asset classification is strictly <strong>borrower-wise and NEVER facility-wise</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                What does borrower-wise classification mean in plain rupee terms for a salaried employee?
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li>Suppose you hold <strong>Base PL (LAN-1, EMI Rs. 9,500)</strong>, <strong>Top-Up PL (LAN-2, EMI Rs. 21,500)</strong>, and a <strong>Credit Card</strong> all at ICICI Bank or HDFC Bank.</li>
                <li>After a salary cut or medical crisis, you only have Rs. 10,000 spare. Thinking you will &quot;keep at least one loan clean&quot;, you religiously pay the Rs. 9,500 Base PL EMI for 3 months while letting the Rs. 21,500 Top-Up PL go unpaid.</li>
                <li>On <strong>Day 91</strong>, when LAN-2 (Top-Up) crosses 90 DPD and becomes a Non-Performing Asset, RBI&apos;s automated daily NPA stamping engine downgrades <strong>your entire UCIC</strong> at that bank to NPA! Your regularly paid Base PL (LAN-1) is classified as a linked NPA, your credit card is permanently blocked, and the Rs. 28,500 you spent trying to keep LAN-1 &quot;standard&quot; bought you zero protection!</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="cross-default-clause" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Contractual Cross-Default &amp; Whole-Debt Recall Clauses
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Alongside RBI&apos;s statutory accounting rule, every standard Indian personal loan sanction agreement contains an explicit <strong>Cross-Default &amp; Acceleration Clause</strong>. This clause states that if the borrower defaults on any instalment, interest, or covenant under <em>any</em> credit agreement executed with the bank, the bank is contractually entitled to:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li>Treat all other loans, top-ups, credit card EMI plans, and overdrafts under your Customer ID as simultaneously in default.</li>
                <li>Issue a consolidated or twin <strong>Loan Recall Notice</strong> accelerating the entire unexpired principal of both your Base PL and Top-Up PL.</li>
                <li>Withhold issuance of a No Objection / No Dues Certificate on a finished loan until all defaulted sister facilities at that bank are resolved.</li>
              </ol>
            </section>

            {/* Section 4 */}
            <section id="myth-of-partial-save" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Why Settling One LAN &amp; Leaving the Other Open Backfires
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Around quarter-end (March, June, September, or December), external collection agencies assigned to only <em>one</em> of your two LANs (because banks often allocate LAN-1 to Agency X and LAN-2 to Agency Y!) will push you aggressively to &quot;just settle my smaller Rs. 2.2 Lakh base loan for Rs. 95,000 today and deal with the Rs. 6 Lakh top-up later&quot;.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Be extremely careful before parting with your lump-sum cash on a single split LAN at the same bank unless you have a clear funding timeline for the second LAN:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Your Customer ID Remains NPA:</strong> Even after settling LAN-1, your UCIC at that bank remains stamped NPA because LAN-2 is still unpaid.</li>
                <li><strong>Loss of Bargaining Leverage on LAN-2:</strong> Once the bank sees you were able to arrange Rs. 95,000 effortlessly in March, the agency handling LAN-2 immediately demands a steeper percentage in April, knowing you want full Customer-ID closure.</li>
                <li><strong>Combined Package Advantage:</strong> Presenting a single unified hardship dossier to the bank&apos;s Regional / Zonal Settlement Officer covering <strong>both LAN-1 + LAN-2 together</strong> lets the credit committee evaluate your total capacity holistically and issue aligned closure terms across your entire UCIC.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="double-bounce-penal" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Double Bounce &amp; Penal Fee Multiplication on Split Top-Ups
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When your Base PL and Top-Up PL run as separate LANs with separate auto-debit mandates, every month of delinquency multiplies fixed dishonour fees across both loan accounts (verified against official lender schedules checked on 11 November 2026):
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Lender</th>
                      <th>Per-LAN Bounce Charge</th>
                      <th>2 Parallel LANs (Base + Top-Up) Monthly Bounce</th>
                      <th>Penal Charge on Overdue EMIs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>HDFC Bank</strong></td>
                      <td>Rs. 450 to Rs. 550 + 18% GST</td>
                      <td>Rs. 1,062 to Rs. 1,298/month (more if re-presented)</td>
                      <td>Up to 2% p.m. (24% p.a.) + GST on both overdue EMIs</td>
                    </tr>
                    <tr>
                      <td><strong>ICICI Bank</strong></td>
                      <td>Rs. 500 + 18% GST (+ Rs. 800 NMMP if mandate fails)</td>
                      <td>Rs. 1,180+/month across 2 LANs</td>
                      <td>5% p.a. + GST on overdue instalments</td>
                    </tr>
                    <tr>
                      <td><strong>Axis Bank</strong></td>
                      <td>Rs. 339 to Rs. 500 + 18% GST</td>
                      <td>Rs. 800 to Rs. 1,180/month across 2 LANs</td>
                      <td>8% p.a. + GST on overdue amounts</td>
                    </tr>
                    <tr>
                      <td><strong>Kotak Mahindra Bank</strong></td>
                      <td>Rs. 750 per bounce (incl. taxes)</td>
                      <td>Rs. 1,500/month across 2 LANs</td>
                      <td>8% p.a. + GST on overdue EMIs</td>
                    </tr>
                    <tr>
                      <td><strong>State Bank of India</strong></td>
                      <td>Rs. 250 + 18% GST</td>
                      <td>Rs. 590/month across 2 LANs</td>
                      <td>2.40% p.a. (&lt;=60d) to 5% p.a. (&gt;60d)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                And if those two mandates are hitting an external savings account with insufficient balance, your savings bank also deducts <strong>two separate inward NACH return fees</strong> every month! See <Link href="/salary-account-ecs-mandate-cancellation-rules" className="text-[#1F5EFF] font-semibold underline">ECS &amp; NACH Mandate Cancellation Rules</Link> to stop futile multi-LAN bounce drains while preparing your hardship submission.
              </p>
            </section>

            {/* Section 6 */}
            <section id="secured-loan-trap" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Danger Zone: Holding a Car Loan, Home Loan, or FD at the Same Bank
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before allowing a Base Personal Loan + Top-Up Loan to enter NPA status for settlement, audit whether you hold <strong>any secured loan or deposit</strong> under the same Customer ID at that bank:
              </p>
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 space-y-2.5">
                <div className="flex items-center gap-2 text-rose-950 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <span>Cross-Collateral &amp; General Lien Audit Before Defaulting</span>
                </div>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-rose-900 leading-relaxed">
                  <li><strong>Fixed Deposits &amp; Recurring Deposits:</strong> Any FD or RD held under the same Customer ID will be prematurely liquidated or lien-marked by the bank against overdue personal loan + top-up balances under contractual set-off terms.</li>
                  <li><strong>Auto / Car Loans at the Same Bank:</strong> Even if you pay every single Car Loan EMI on time, if your Personal Loan + Top-Up at that same bank are in unpaid default, the bank will refuse to release your <strong>Form 35 / Hypothecation Termination NOC</strong> when the car loan finishes until the unsecured loans are settled!</li>
                  <li><strong>Home Loans at the Same Bank:</strong> Under RBI UCIC norms, a 91-DPD Personal Loan default forces technical NPA classification across your Home Loan at that exact same bank and risks withholding of original property title deeds at closure. Where borrowers hold a Home Loan at Bank A and unsecured loans at Bank A + Bank B, protecting or balance-transferring the Home Loan before unsecured stress escalates is critical.</li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section id="salary-account-double-hold" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Corporate Salary Account Double-Hold Mechanics
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Most salaried top-up loans are sold precisely to Corporate Salary Account holders. When both LAN-1 and LAN-2 fall overdue at your payroll bank, internal Standing Instructions place additive shadow holds on your savings ledger (e.g., Rs. 14,000 hold for LAN-1 + Rs. 24,000 hold for LAN-2 = Rs. 38,000 instant absorption per paycheck). Before entering NPA settlement discussions, lawfully migrate your monthly salary credit through HR to an unlinked bank account. Review bank-specific procedures in our guides for <Link href="/hdfc-salary-account-auto-debit-personal-loan-default" className="text-[#1F5EFF] font-semibold underline">HDFC Bank</Link>, <Link href="/icici-salary-account-auto-debit-personal-loan-default" className="text-[#1F5EFF] font-semibold underline">ICICI Bank</Link>, <Link href="/axis-salary-account-auto-debit-personal-loan-default" className="text-[#1F5EFF] font-semibold underline">Axis Bank</Link>, <Link href="/kotak-salary-account-auto-debit-personal-loan-default" className="text-[#1F5EFF] font-semibold underline">Kotak Bank</Link>, and <Link href="/sbi-salary-account-auto-debit-personal-loan-default" className="text-[#1F5EFF] font-semibold underline">SBI</Link>.
              </p>
            </section>

            {/* Section 8 */}
            <section id="combined-ots-strategy" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Structuring a Combined ₹3L+ Multi-LAN One-Time Settlement
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once both your Base Personal Loan and Top-Up Loan cross 90 to 180 days past due into the bank&apos;s NPA recovery pool, request that the bank&apos;s central settlement officer map all unsecured facilities under your UCIC to a <strong>single consolidated compromise review</strong>:
              </p>
              <ol className="list-decimal pl-5 space-y-2.5 text-sm sm:text-base text-slate-700">
                <li><strong>List Every Unsecured Account Number Together:</strong> Include Base PL (LAN-1), Top-Up PL (LAN-2), any second mini-top-up (LAN-3), and any same-bank Credit Card / Jumbo Loan in one written settlement proposal.</li>
                <li><strong>Anchor Negotiations to Combined Principal Disbursed vs Repaid:</strong> On older base loans where you already paid 24 to 36 EMIs before taking a top-up, highlight that substantial interest has already been recovered by the bank on LAN-1.</li>
                <li><strong>Realistic Combined Settlement Ranges:</strong> While settlement percentages are never guaranteed and depend on Zonal Credit Committee grids, NPA vintage, and lump-sum speed, combined multi-LAN salaried settlements on ₹3L+ exposures realistically close between <strong>40% and 65% of aggregate claimed dues</strong> (starting with 100% waiver of doubled bounce and penal fees).</li>
              </ol>
            </section>

            {/* Section 9 */}
            <section id="multi-lan-ots-checklist" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Mandatory Multi-LAN OTS Sanction Letter Verification Rules
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The #1 trap in dual-loan settlements is paying Rs. 3,80,000 thinking it closes &quot;everything at HDFC or ICICI&quot;, only to discover 60 days later that the OTS letter only listed LAN-2 and credited zero toward LAN-1! Before transferring a single rupee, verify:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Exact Enumeration of Every LAN:</strong> Either one combined Customer-ID OTS Sanction Letter explicitly tabulating <em>both</em> LAN-1 and LAN-2 with their exact split settlement amounts, OR two simultaneous official OTS letters issued on the same date adding up to your agreed lump sum.</li>
                <li><strong>Explicit Payment Routing Instructions:</strong> Banks typically require you to remit the exact allocated settlement figure separately into LAN-1&apos;s loan account and LAN-2&apos;s loan account (do not dump the combined sum into one LAN unless the sanction letter explicitly directs a pool/suspense appropriation!).</li>
                <li><strong>Separate No Dues Certificates for Every LAN:</strong> Within 21 to 30 days of payment, collect an individual stamped <Link href="/no-dues-certificate-after-loan-settlement" className="text-[#1F5EFF] font-semibold underline">No Dues Certificate</Link> for LAN-1 and a second No Dues Certificate for LAN-2, plus written confirmation that all Customer-ID salary holds and legal notices stand withdrawn.</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section id="cibil-reporting-dual" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                10. CIBIL Bureau Reporting &amp; RBI Privacy Protections
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When two parallel LANs are settled together, CIBIL, Experian, Equifax, and CRIF High Mark update both individual tradelines to &quot;Settled&quot; with <strong>Rs. 0 Current Balance and Rs. 0 Amount Overdue</strong>. Audit both tradelines 35 days post-payment to ensure neither LAN was accidentally left open. Throughout your negotiation window, remember that RBI Fair Practices rules and the consolidated recovery conduct rules effective <strong>1 January 2027</strong> strictly prohibit dual agencies assigned to LAN-1 and LAN-2 from harassing your workplace, calling outside 8:00 AM to 7:00 PM, or contacting colleagues and relatives.
              </p>
            </section>

            {/* Section 11: Company Section */}
            <section id="company-resolution-section" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                11. SettleLoans Multi-LAN &amp; Cross-Default Resolution Desk
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When multiple Loan Account Numbers at the same bank (plus external NBFC or card loans) exceed ₹3 Lakhs in combined unsecured debt, SettleLoans consolidates split agency negotiations under one unified legal strategy, verifies multi-LAN OTS letters line-by-line, and ensures zero orphaned LANs remain behind.
              </p>
              <CompanySection />
            </section>

            {/* Section 12: FAQs */}
            <section id="faqs" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                12. Frequently Asked Questions: Base + Top-Up Loan Default
              </h2>

              <div className="space-y-3">
                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all" open>
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      1. Can I keep paying my base personal loan EMI and only settle my top-up personal loan at the same bank?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Practically no. Under RBI&apos;s mandatory borrower-wise Asset Classification (IRACP) norms, NPA tagging operates across your Unique Customer Identification Code (UCIC / Customer ID), not facility-by-facility. The moment your top-up loan crosses 90 days past due into NPA status, your base personal loan and credit cards at that exact same bank are automatically classified as NPA even if you paid their EMIs on time.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      2. Why do I have two separate EMIs and two Loan Account Numbers after taking a personal loan top-up?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Banks structure salaried top-ups in two ways: either as a Balance Merger (where the new loan forecloses the old LAN and leaves one larger EMI) or as a Parallel / Split Disbursal (where your original loan continues under LAN-1 and the top-up is booked as a separate parallel LAN-2 under the same Customer ID). Parallel LANs trigger double bounce charges if both dishonour in the same month.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      3. What is a cross-default clause in a salaried personal loan agreement?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>A cross-default clause stipulates that an Event of Default on any one loan, overdraft, or credit card held by you with that bank (or its group entities) automatically constitutes a default on every other facility you hold with that bank, empowering the bank to recall all facilities together and block credit card limits immediately.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      4. What happens if I also have a Car Loan or Home Loan at the exact same bank where my Personal Loan and Top-Up default?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>This requires extreme caution. First, under RBI UCIC rules, an NPA on your unsecured personal loan forces borrower-level NPA tagging on your home or car loan at that same bank. Second, banks frequently invoke general lien / cross-collateral covenants to withhold your vehicle Hypothecation Removal NOC or property title deeds even after you finish paying the car or home loan until the unsecured personal loan is settled!</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      5. Do banks charge separate bounce fees on both the base loan and the top-up loan every month?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes, if they sit under two separate Loan Account Numbers (LANs) with two separate SI/NACH instructions. For example, two bounced LANs at HDFC Bank (Rs. 450 to Rs. 550 + GST each), ICICI Bank (Rs. 500 + GST each), or Kotak (Rs. 750 each) double your monthly dishonour fees plus destination bank inward return charges.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      6. Can a recovery agent force me to settle only one LAN now and leave the second LAN open for next year?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Beware of partial single-LAN pitches from target-driven collection callers. Settling LAN-1 while leaving LAN-2 in active NPA at the same bank keeps your UCIC flagged as an active defaulter, risks internal hold sweeps, and sometimes delays final No Dues clearance. Always negotiate a consolidated or simultaneous Customer-ID-level OTS covering all unsecured LANs at that lender.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      7. What if I also hold an Insta Loan or Jumbo Loan on an HDFC or ICICI credit card alongside my Personal Loan?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Card-linked loans (like HDFC Insta Jumbo Loan or ICICI Personal Loan on Credit Card) share your bank UCIC. When negotiating a same-bank settlement, list the base PL LAN, Top-Up LAN, Credit Card account number, and Jumbo Loan account number together so the bank&apos;s Zonal Credit Committee approves a comprehensive Customer-ID compromise.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      8. Does RBI borrower-wise NPA tagging at HDFC Bank automatically turn my regular loan at Axis Bank into an NPA?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>No. RBI&apos;s automatic UCIC borrower-wise NPA rule applies within the same regulated lending institution. Defaulting on an HDFC base + top-up loan turns all your HDFC facilities NPA, and lowers your CIBIL score, but your Axis Bank loan remains Standard as long as you pay Axis EMIs on schedule.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      9. How does same-bank salary account set-off behave when both a base PL and top-up PL are overdue?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>When two LANs are overdue under the same Customer ID as your Corporate Salary Account, the core banking system aggregates the overdue instalments and charges of both LANs into a combined Hold Balance, absorbing incoming salary credits twice as fast. Lawfully shifting payroll via HR to an unlinked bank is essential before entering NPA settlement talks.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      10. What realistic combined settlement percentage do banks accept on dual base + top-up personal loans?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Outcomes are never guaranteed and depend on combined principal, NPA vintage (90 to 180+ DPD), and documented salaried hardship. When structured as a single Customer-ID lump-sum settlement across ₹3L+ combined unsecured dues, realistic closures commonly fall between 40% and 65% of total claimed balances across both LANs, including 100% waiver of penal and bounce fees.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      11. What must I verify on the OTS Sanction Letter when settling both a base loan and a top-up loan?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Verify that EVERY exact Loan Account Number (both Base LAN and Top-Up LAN) is printed on the bank&apos;s official letterhead OTS Sanction Letter (or two simultaneous cross-referenced OTS letters issued on the same date), with exact settlement allocation per LAN, full waiver of residual dues on both accounts, and Separate No Dues Certificates upon payment.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      12. How will CIBIL display a combined settlement of a base personal loan and a top-up loan?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Because each Loan Account Number is reported as an individual tradeline on CIBIL, Experian, Equifax, and CRIF High Mark, both LANs will update separately to &apos;Settled&apos; with Rs. 0 Current Balance and Rs. 0 Amount Overdue within 30 days of final tranche clearance.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* Official Regulatory & Tariff Sources */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Official Bank Tariff &amp; RBI IRACP References (Checked 11 November 2026)
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
                  href="https://www.icici.bank.in/personal-banking/loans/personal-loan/service-charges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">ICICI Bank Personal Loan Service Charges Schedule</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                </a>
                <span className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700">
                  RBI Master Circular on IRACP: Borrower-Wise UCIC NPA Classification
                </span>
                <span className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700">
                  RBI Framework for Compromise Settlements &amp; Technical Write-Offs
                </span>
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
                <Link href="/multiple-personal-loans-hdfc-icici-bajaj-which-to-settle-first" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  HDFC, ICICI &amp; Bajaj: Which to Settle First
                </Link>
                <Link href="/hdfc-salary-account-auto-debit-personal-loan-default" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  HDFC Salary Account Auto-Debit Guide
                </Link>
                <Link href="/icici-salary-account-auto-debit-personal-loan-default" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  ICICI Salary Account Auto-Debit Guide
                </Link>
                <Link href="/no-dues-certificate-after-loan-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  No Dues Certificate Verification
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
                  <p className="text-xs text-slate-500">Multi-LAN &amp; UCIC Settlement Specialist</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Structures consolidated Customer-ID settlements for salaried borrowers holding overlapping base loans, top-ups, and card-linked facilities.
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
                <span>Unified Multi-LAN Relief</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Holding Base + Top-Up Debt ≥ ₹3L?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Avoid orphaned LAN traps and cross-default surprises. Get a single Customer-ID settlement plan covering every unsecured facility together.
              </p>
              <a
                href="#settlement-assessment"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Check ₹3L+ Multi-LAN Eligibility
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Multi-LAN Safeguards
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Full UCIC &amp; Collateral Lien Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>LAN-by-LAN OTS Letter Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Zero Employer Contact Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Separate NDC Tracking per Loan Account</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
