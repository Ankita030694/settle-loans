import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import SidebarTOC from '@/components/SidebarTOC';
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
  Scale,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  ShieldAlert,
  UserCheck,
  BadgePercent,
  TrendingUp,
  Clock,
  RefreshCw
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'RBI Debt Resolution Framework vs Loan Settlement: Restructuring vs OTS Compared (2026)',
  description: 'Understand the critical difference between loan restructuring under the RBI Debt Resolution Framework and One Time Settlement (OTS). Compare tenure extensions, moratoriums, CIBIL reporting, NPV haircut formulas, and legal finality.',
  keywords: [
    'difference between loan restructuring and loan settlement',
    'rbi debt resolution framework vs loan settlement',
    'loan restructuring vs one time settlement ots',
    'rbi restructuring guidelines 2026',
    'loan restructuring cibil score impact',
    'when to choose loan restructuring over settlement',
    'moratorium vs haircut loan settlement',
    'rbi master directions resolution of stressed assets',
    'debt resolution framework eligibility',
    'bank loan restructuring tenure extension',
    'ots haircut calculation formula npv',
    'cibil report restructured vs settled status'
  ],
  alternates: {
    canonical: 'https://settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement',
  },
  openGraph: {
    title: 'RBI Debt Resolution Framework vs Loan Settlement: Restructuring vs OTS Compared',
    description: 'Master the strategic choice between loan restructuring under RBI Master Directions and a definitive One Time Settlement (OTS) haircut. Learn how banking regulations, CIBIL scoring, and NPV recovery economics dictate the right debt relief path.',
    url: 'https://settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://settleloans.in/images/infographics/rbi-debt-resolution-framework-vs-loan-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'RBI Debt Resolution Framework vs Loan Settlement Comparison Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RBI Debt Resolution Framework vs Loan Settlement: Restructuring vs OTS Compared',
    description: 'Facing loan default in India? Discover whether you should apply for tenure extension and moratorium under the RBI Resolution Framework or negotiate a 50%–75% OTS haircut settlement.',
    images: ['https://settleloans.in/images/infographics/rbi-debt-resolution-framework-vs-loan-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement#webpage",
      "url": "https://settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement",
      "name": "RBI Debt Resolution Framework vs Loan Settlement: Restructuring vs OTS Compared (2026)",
      "description": "Understand the critical difference between loan restructuring under the RBI Debt Resolution Framework and One Time Settlement (OTS). Compare tenure extensions, moratoriums, CIBIL reporting, NPV haircut formulas, and legal finality.",
      "breadcrumb": {
        "@id": "https://settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement#breadcrumb"
      },
      "inLanguage": "en-IN",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://settleloans.in/#website",
        "name": "SettleLoans",
        "url": "https://settleloans.in"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://settleloans.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "RBI Debt Resolution Framework vs Loan Settlement",
          "item": "https://settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement#article",
      "headline": "RBI Debt Resolution Framework vs Loan Settlement: Strategic Restructuring vs OTS Haircut Analysis",
      "description": "A comprehensive regulatory, financial, and legal comparison between loan restructuring under RBI Master Directions on Resolution of Stressed Assets and One-Time Settlement (OTS) debt compromise. Details eligibility criteria, tenure modifications, moratoriums, CIBIL credit score impact, bank provisioning economics, and Net Present Value recovery formulas.",
      "image": "https://settleloans.in/images/infographics/rbi-debt-resolution-framework-vs-loan-settlement.jpg",
      "datePublished": "2026-08-28T10:00:00+05:30",
      "dateModified": "2026-08-28T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement#webpage"
      },
      "author": {
        "@type": "Person",
        "name": "Ashish Jhangra",
        "url": "https://settleloans.in/authors/ashish-jhangra"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://settleloans.in/#organization",
        "name": "SettleLoans",
        "url": "https://settleloans.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://settleloans.in/logo/logo.svg"
        }
      }
    },
    {
      "@type": "FinancialService",
      "@id": "https://settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement#service",
      "name": "SettleLoans - RBI Debt Resolution & Loan Settlement Legal Advisory",
      "description": "Specialized legal representation and financial debt defense advisory helping retail, SME, and corporate borrowers navigate the RBI Prudential Resolution Framework, loan restructuring, and high-haircut One-Time Settlements across India.",
      "url": "https://settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement",
      "image": "https://settleloans.in/images/infographics/rbi-debt-resolution-framework-vs-loan-settlement.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Barakhamba Road, Connaught Place",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110001",
        "addressCountry": "IN"
      },
      "provider": {
        "@type": "Organization",
        "@id": "https://settleloans.in/#organization",
        "name": "SettleLoans",
        "url": "https://settleloans.in"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2580",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Virendra Singhania"
          },
          "datePublished": "2026-05-18",
          "reviewBody": "Our manufacturing SME had ₹65 Lakhs in working capital loans with State Bank of India. When raw material supply chain disruptions hit our cash flow, the bank threatened NPA classification. SettleLoans evaluated our financials, established that our revenue drop was temporary, and structured an RBI Resolution Framework restructuring with an 18-month tenure extension and a 6-month interest moratorium. Our account remained standard and our business survived.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ananya Kulkarni"
          },
          "datePublished": "2026-06-25",
          "reviewBody": "After facing sudden severe health issues and permanent income loss, servicing my ₹18 Lakh personal loan and credit cards across HDFC and ICICI was impossible. SettleLoans advised me against restructuring, explaining that extending the loan would only multiply interest on an income I no longer had. Their legal advocates negotiated an OTS compromise settlement with a 68% principal haircut and complete debt extinguishment.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Karthik Subramanian"
          },
          "datePublished": "2026-07-22",
          "reviewBody": "I was totally confused between applying for restructuring or going for a one-time settlement on my Axis Bank business loan of ₹32 Lakhs. The SettleLoans advisory team ran the Net Present Value recovery numbers, audited the sanction terms, and represented me before the bank's zonal committee. We secured an official OTS sanction letter for ₹9.5 Lakhs with all legal notices withdrawn within 30 days.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Gurpreet Singh Gill"
          },
          "datePublished": "2026-08-11",
          "reviewBody": "Punjab National Bank issued a SARFAESI demand notice on my commercial property loan of ₹80 Lakhs. SettleLoans legal advocates halted the recovery proceedings, conducted a viability study, and negotiated an RBI-compliant debt restructuring plan that converted overdue interest into a funded interest term loan (FITL) while protecting my asset from auction.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the primary difference between loan restructuring and loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The primary difference lies in the ultimate repayment obligation and legal continuity of the debt contract. Loan restructuring under the RBI Prudential Framework modifies the terms of the existing loan—such as extending the repayment tenure, reducing monthly EMI amounts, granting a temporary moratorium, or converting unpaid interest into a funded term loan—with the contractual obligation that the borrower will ultimately repay 100% of the principal and accrued interest. In contrast, a Loan Settlement or One-Time Settlement (OTS) is a definitive debt compromise where the bank accepts a discounted lump sum (typically 30% to 50% of the outstanding balance) to permanently write off the remaining debt and extinguish all borrower liabilities."
          }
        },
        {
          "@type": "Question",
          "name": "When should a borrower choose loan restructuring over loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A borrower should choose loan restructuring when their financial distress is temporary, their underlying business or employment remains viable, and they anticipate predictable future cash flows capable of servicing reduced monthly EMIs over an extended timeline. Restructuring is ideal for borrowers who need immediate liquidity breathing room (via tenure extension or moratorium) while preserving their long-term institutional credit standing and avoiding permanent legal default."
          }
        },
        {
          "@type": "Question",
          "name": "When is a One-Time Settlement (OTS) the only practical option?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A One-Time Settlement (OTS) is the optimal path when a borrower suffers permanent or irreversible financial insolvency—such as complete business closure, catastrophic medical disability, permanent job loss, or structural unviability—where servicing even modified monthly EMIs is mathematically impossible. In such scenarios, attempting restructuring only delays the inevitable default while accumulating compounded interest. An OTS enables the borrower to secure a 50% to 75% haircut, permanently extinguish the debt, and secure an official RBI No Dues Certificate."
          }
        },
        {
          "@type": "Question",
          "name": "How does loan restructuring affect CIBIL and credit bureau scores compared to settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both resolution mechanisms impact credit bureau records, but in distinctly different ways. Under RBI Master Directions, restructured accounts are reported to CIBIL, Experian, Equifax, and CRIF High Mark with the specific tag 'Restructured' or 'Restructured due to Stress'. While this causes a moderate temporary dip in credit score (typically 30 to 70 points), the account remains active and 'Standard' or upgraded, allowing for complete credit rehabilitation once regular payments resume. Conversely, a loan settlement results in a 'Settled' or 'Post-Write Off Settled' status with a zero balance, which causes a steeper credit score reduction (70 to 150 points) and requires 18 to 24 months of deliberate credit repair to rebuild borrowing eligibility."
          }
        },
        {
          "@type": "Question",
          "name": "Can a borrower get a loan settlement after their loan has already been restructured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If a borrower enters an RBI loan restructuring plan but subsequently experiences a secondary financial shock or permanent cash flow collapse that prevents them from honoring the restructured EMI schedule, the account will slip into Non-Performing Asset (NPA) status. At that juncture, the borrower can initiate formal One-Time Settlement (OTS) negotiations with the bank's stressed asset committee or debt recovery tribunal, leveraging their verified insolvency to negotiate a final haircut compromise."
          }
        },
        {
          "@type": "Question",
          "name": "Does loan restructuring involve any principal or interest waiver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard retail and SME loan restructuring under the RBI Prudential Framework generally does not write off or forgive principal debt. Instead, banks may reduce the interest rate margin, waive past penal late charges, or convert unpaid accrued interest into a Funded Interest Term Loan (FITL) repayable over an extended horizon. Complete waivers and principal debt forgiveness (haircuts) are exclusively available under compromise One-Time Settlements (OTS) or corporate resolution plans approved by the Joint Lenders' Forum (JLF) and NCLT under the Insolvency and Bankruptcy Code (IBC)."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Net Present Value (NPV) test used by banks during debt resolution?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Master Directions on Resolution of Stressed Assets, banks evaluating restructuring plans or compromise settlements must conduct an NPV test. For restructuring, the bank calculates the discounted present value of all future restructured cash flows and compares it to the original contractual value, maintaining mandatory provisioning on the NPV diminution. For OTS settlements, the bank's credit committee compares the cash settlement offer against the NPV of pursuing coercive litigation (DRT, SARFAESI, civil suits) over 3 to 6 years after deducting legal fees, court delays, asset depreciation, and regulatory provisioning drag."
          }
        },
        {
          "@type": "Question",
          "name": "How does advocate representation assist borrowers during restructuring vs settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Specialized debt defense advocates provide crucial strategic and legal protection. In restructuring, advocates audit the bank's eligibility criteria, draft comprehensive cash flow viability dossiers, negotiate interest rate recalibrations, and ensure addendum contracts do not impose onerous personal guarantees or penal covenants. In OTS settlements, advocates issue formal notices of representation to halt recovery harassment, conduct forensic debt audits to remove illegal compounded penalties, and negotiate directly with zonal stressed asset committees to secure legally binding OTS sanction letters with complete legal discharge and official RBI No Dues Certificates."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank initiate SARFAESI or Section 138 proceedings during the RBI restructuring evaluation window?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Prudential Framework guidelines, when a lender formally admits a borrower's stressed asset resolution proposal and executes an Inter-Creditor Agreement (ICA) or internal review process, a review period is triggered. During this active restructuring evaluation, lenders typically hold coercive recovery actions in abeyance. However, if the restructuring plan fails to be implemented within statutory timelines or if the borrower defaults on the restructured schedule, the bank immediately regains full statutory authority to issue Section 13(2) SARFAESI demand notices, file Section 138 NI Act cheque bounce complaints, or institute DRT recovery applications."
          }
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://settleloans.in/#organization",
      "name": "SettleLoans",
      "url": "https://settleloans.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://settleloans.in/logo/logo.svg"
      },
      "sameAs": [
        "https://www.linkedin.com/company/settleloans",
        "https://twitter.com/settleloans",
        "https://www.facebook.com/settleloans"
      ]
    }
  ]
};

const tocItems = [
  { id: 'core-dilemma-restructuring-vs-settlement', title: '1. The Core Strategic Dilemma: Restructuring vs. OTS Settlement' },
  { id: 'statutory-framework-rbi-prudential-directions', title: '2. RBI Prudential Framework vs. Civil Debt Compromise' },
  { id: 'anatomy-of-restructuring-tenure-moratorium', title: '3. Anatomy of Restructuring: Tenure, Moratorium & Cash Flow' },
  { id: 'bank-accounting-economics-npv-formula', title: '4. Bank Balance Sheet Economics & The NPV Recovery Equation' },
  { id: 'strategic-roadmap-infographic', title: '5. RBI Restructuring vs. Loan Settlement Visual Roadmap' },
  { id: 'strategic-decision-matrix-when-to-choose', title: '6. Strategic Decision Framework: When to Restructure vs. Settle' },
  { id: 'forensic-verification-addendums-and-sanctions', title: '7. Forensic Checklist for Restructuring Addendums & OTS Letters' },
  { id: 'cibil-bureau-dynamics-and-credit-recovery', title: '8. CIBIL Bureau Dynamics, Restructured Tags & Credit Rehabilitation' },
  { id: 'comprehensive-comparative-matrix', title: '9. Restructuring vs. Loan Settlement Strategy Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Strategic Debt Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function RbiDebtResolutionFrameworkVsLoanSettlementPage() {
  return (
    <div
      className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white"
      style={{ fontFamily: 'var(--font-satoshi), Satoshi, -apple-system, BlinkMacSystemFont, sans-serif' }}
    >
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
          margin: 2rem 0;
          font-size: 0.95em;
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
        }
        .blog-content td:last-child {
          border-right: none;
        }
        .blog-content tr:last-child td {
          border-bottom: none;
        }
      `}} />

      {/* 1. Charcoal Navy Hero Section */}
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
            <Building2 className="w-3.5 h-3.5" />
            <span>Distressed Asset Strategy • RBI Regulatory Framework vs. Debt Compromise</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            RBI Debt Resolution Framework vs Loan Settlement: <span className="text-[#3b82f6] md:text-[#60a5fa]">Strategic Restructuring vs. OTS Haircut Analysis</span>
          </h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Written by <Link href="/authors/ashish-jhangra" className="font-bold underline hover:text-white transition-colors">Ashish Jhangra</Link></span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: August 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI Prudential Framework &amp; Master Directions Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Evaluate Your Debt Strategy</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request Free Hardship Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Sticky Table of Contents + Executive Crux */}
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Strategic Decision Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Loan restructuring preserves 100% principal obligation through tenure extensions and moratoriums for viable borrowers facing temporary cash flow disruptions. A One-Time Settlement (OTS) delivers an immediate 50%–75% principal haircut for borrowers facing irreversible financial insolvency, permanently extinguishing all debt liabilities.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: RBI Restructuring vs. One-Time Settlement (OTS)</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Different Legal Mechanisms:</strong> Restructuring modifies existing loan contracts under the RBI Prudential Framework while requiring full 100% repayment; settlement executes a debt compromise that extinguishes the loan at a discounted haircut.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Viability vs. Structural Insolvency:</strong> Opt for restructuring when temporary liquidity constraints are backed by verifiable future cash flows; choose an OTS when income loss is permanent and debt servicing is mathematically unviable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Bank Provisioning &amp; NPV Calculations:</strong> Banks evaluate restructuring through the diminution of Net Present Value (NPV) and mandatory 5%–15% provisions, whereas OTS decisions benchmark immediate cash recovery against 3–6 years of DRT and SARFAESI court friction.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Bureau Reporting Variations:</strong> Restructuring marks the credit bureau record as &quot;Restructured&quot; with account continuity, whereas an OTS reports the account as &quot;Settled&quot; with a ₹0 balance, each requiring distinct credit rehabilitation timelines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Absolute Legal Finality with OTS:</strong> While a defaulted restructured loan risks immediate SARFAESI and Section 138 NI Act litigation, an executed OTS backed by an official RBI No Dues Certificate provides permanent legal immunity and releases all collateral liens.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Core Dilemma */}
            <section id="core-dilemma-restructuring-vs-settlement" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Core Strategic Dilemma: Loan Restructuring under RBI Framework vs. Loan Settlement (OTS)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower in India experiences acute financial distress—whether managing unsecured personal loans, high-limit credit cards, SME working capital facilities, or mortgage loans across institutions like State Bank of India, HDFC Bank, ICICI Bank, Axis Bank, Bank of Baroda, or Punjab National Bank—the impending threat of default forces a crucial crossroads. Borrowers are confronted with two fundamentally divergent institutional pathways: applying for structured loan modification under the <strong>Reserve Bank of India (RBI) Prudential Framework for Resolution of Stressed Assets</strong>, or executing a definitive debt compromise through a <strong>One-Time Settlement (OTS)</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Misunderstanding the structural, legal, and financial difference between loan restructuring and loan settlement is among the most catastrophic errors a distressed debtor can make. Retail borrowers and business promoters frequently treat these two options as interchangeable relief mechanisms. In reality, they represent opposing financial philosophies governed by distinct regulatory directives, balance sheet provisioning rules, and long-term credit consequences.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Loan restructuring is an operational re-engineering of the credit contract designed for a viable borrower experiencing temporary liquidity strain. The lending institution modifies the repayment structure—extending the loan tenure, granting an interest moratorium, lowering the monthly Equated Monthly Installment (EMI), or converting accumulated interest into a funded term loan—under the ironclad statutory premise that the borrower will ultimately repay 100% of the disbursed principal and accrued interest. The loan contract survives, collateral remains encumbered, and the debt obligation continues for an extended horizon.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Conversely, a One-Time Settlement is a legal and financial exit strategy designed for structural insolvency. When a borrower suffers permanent financial disruption, the bank acknowledges that full recovery is mathematically impossible. Through an advocate-led compromise, the lender accepts a discounted lump sum—often waiving 50% to 75% of the total outstanding claim—to permanently write off the balance, terminate the loan contract, release all mortgage or hypothecation liens, and deliver an official RBI No Dues Certificate. Choosing the wrong mechanism can trap a borrower in compounding interest liabilities or trigger premature credit destruction.
              </p>
            </section>

            {/* Section 2: Statutory & Regulatory Framework */}
            <section id="statutory-framework-rbi-prudential-directions" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory &amp; Regulatory Framework: RBI Prudential Directions vs. Civil Debt Compromise
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The architecture governing stressed asset resolution in India is codified under distinct statutory instruments and central bank Master Directions. Lenders cannot arbitrarily restructure loans or grant compromise settlements without adhering to the precise regulatory mandates established by the Reserve Bank of India and federal commercial laws.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The primary regulatory umbrella governing loan modification is the <strong>RBI Prudential Framework for Resolution of Stressed Assets (June 7, 2019 Master Directions, updated through 2026)</strong>. Under these directives, commercial banks, All-India Financial Institutions, and Non-Banking Financial Companies (NBFCs) are required to recognize incipient financial stress immediately upon an account slipping into Special Mention Account status (SMA-0, SMA-1, SMA-2). The framework establishes a mandatory 30-day review period during which lenders evaluate the feasibility of a Resolution Plan (RP), including restructuring, debt conversion, or change in ownership.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>RBI Resolution Framework: Statutory Pillars</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Governed by RBI Master Directions on Stressed Assets. Requires formal Techno-Economic Viability (TEV) studies, Inter-Creditor Agreements (ICAs) for consortium debts, mandatory credit committee approvals, and strict post-restructuring monitoring windows.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    <span>Civil Compromise: Contract Act &amp; Section 138/DRT</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Governed by Section 63 of the Indian Contract Act, 1872 (remission of performance), RBI Master Circulars on One-Time Settlement Schemes, and compromise consent decrees recorded before the National Lok Adalat or Debt Recovery Tribunals (DRT).
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-purple-600" />
                    <span>Asset Classification Rules Post-Restructuring</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI rules, standard accounts restructured under stress are downgraded to Non-Performing Assets (Sub-Standard), or if already NPA, retain their classification. An account can be upgraded back to Standard only after demonstrating a satisfactory performance track record over a specified monitoring period.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>Compromise Settlement Discretion &amp; Recovery Rules</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI Board-Approved Settlement Policies authorize bank managing committees to sacrifice unrecovered principal and interest where the recovery cost, time friction, and collateral deficit render legal recovery less beneficial than an immediate cash compromise.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Judicial Protection: Prohibition of Coercive Recovery during Formal Evaluation</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  The Supreme Court of India and various High Courts have affirmed that when a borrower submits a bona fide restructuring or OTS proposal under RBI Master Directions, the lending institution must evaluate the application objectively in accordance with its non-discriminatory, board-approved recovery policy. Arbitrary rejections without financial justification or simultaneous aggressive harassment by third-party recovery agencies violate the RBI Fair Practices Code.
                </p>
              </div>
            </section>

            {/* Section 3: Anatomy of Restructuring */}
            <section id="anatomy-of-restructuring-tenure-moratorium" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Anatomy of Restructuring: Tenure Extension, Moratorium, Rate Recalibration &amp; Future Cash Flow Viability
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a bank sanctions an RBI Debt Resolution Framework restructuring plan, it utilizes a combination of financial levers tailored to realign the borrower&apos;s debt servicing burden with their projected cash flows. Restructuring is neither a debt waiver nor a loan forgiveness program; it is a financial engineering mechanism that reschedules obligations across time.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The core structural mechanisms deployed in standard commercial and retail restructuring packages include:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">1. Repayment Tenure Extension &amp; EMI Recalibration</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank extends the remaining maturity of the loan contract (for instance, extending a 5-year personal loan or a 15-year mortgage by an additional 2 to 5 years). By spreading the outstanding principal over a significantly longer timeframe, the monthly EMI requirement is reduced by 25% to 45%, providing immediate breathing room for monthly household or business budgets.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-indigo-600" />
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">2. Principal and Interest Payment Moratorium</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the resolution framework, the lender may grant a payment holiday (moratorium) ranging from 3 to 12 months (or up to 24 months in extraordinary economic disruption frameworks). During this period, the borrower is exempt from paying EMIs. However, interest continues to accrue on the outstanding principal balance throughout the moratorium, which is subsequently capitalized into the total loan liability.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">3. Conversion of Accrued Interest into Funded Interest Term Loans (FITL)</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Where unpaid accrued interest has accumulated during default, the bank bifurcates the liability. The unpaid interest component is converted into a separate zero-interest or concessional Funded Interest Term Loan (FITL), while the principal is restructured into a standard Working Capital Term Loan (WCTL), allowing the borrower to resume operations without being crushed by past overdue interest.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <div className="flex items-center gap-2">
                    <BadgePercent className="w-4 h-4 text-amber-600" />
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">4. Interest Rate Margin Concessions &amp; Penal Charge Reversal</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    As part of the package, the credit committee may temporarily reduce the spread over the benchmark lending rate (MCLR/EBLR) and completely reverse accumulated penal interest and bounce charges, lowering the effective compounding drag on the restructured balance.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The non-negotiable prerequisite for restructuring approval is <strong>demonstrable cash flow viability</strong>. The borrower must provide audited financial statements, GST returns, or verified salary credits proving that their financial disruption was transitory and that their future income trajectory can sustainably service the modified repayment schedule. If the cash flow forecast fails the bank&apos;s Debt Service Coverage Ratio (DSCR) benchmark, the restructuring application will be rejected.
              </p>
            </section>

            {/* Section 4: Bank Accounting Economics & NPV Formula */}
            <section id="bank-accounting-economics-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Balance Sheet Economics, Provisioning Burdens &amp; The Net Present Value (NPV) Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To understand why banks agree to deep One-Time Settlement haircuts or why they hesitate on aggressive restructuring, one must analyze the institutional accounting constraints governing commercial lenders. Under RBI prudential norms, banks are not merely focused on recovering face amounts; they are ruthlessly managed according to <strong>regulatory provisioning drag</strong>, <strong>capital adequacy ratios (CAR)</strong>, and the <strong>Net Present Value (NPV) of recovery cash flows</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an account defaults and is classified as a Non-Performing Asset (NPA), the bank must set aside 15% to 100% of the loan value from its operating profits as mandatory provisioning. If a bank agrees to restructure a stressed loan, it must maintain a regulatory provision of at least <strong>5% to 15% on standard restructured assets</strong>, plus calculate the <strong>diminution in fair value (NPV loss)</strong> resulting from interest rate concessions or tenure extensions.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In contrast, when evaluating a One-Time Settlement proposal, the bank&apos;s stressed asset management committee benchmarks the immediate cash settlement offer against the discounted Net Present Value of pursuing multi-year litigation before the Debt Recovery Tribunal (DRT), Civil Courts, or SARFAESI auctions:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Pathway</th>
                      <th>Gross Face Claim</th>
                      <th>Institutional Friction &amp; Timeline</th>
                      <th>Net Present Value (Realized Recovery)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Litigation &amp; SARFAESI Enforcement</td>
                      <td>₹40.0 Lakhs Claim</td>
                      <td>4–7 Years Court Delays, DRT Stay Appeals, 100% Capital Provisioning Drag</td>
                      <td>₹16.2 Lakhs (Heavy NPV Diminution)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Framework Restructuring</td>
                      <td>₹40.0 Lakhs Full Debt</td>
                      <td>Tenure Extended by 4 Years, 10% Diminution Provision, Risk of Re-Default</td>
                      <td>₹32.5 Lakhs (NPV Discounted at 12%)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Negotiated OTS Settlement</td>
                      <td>₹40.0 Lakhs Gross Claim</td>
                      <td>Immediate Lump Sum Cash within 30–60 Days, Zero Future Provisioning</td>
                      <td>₹18.0 Lakhs (Immediate 100% Liquid Capital)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To mathematically decide whether to sanction an advocate&apos;s OTS compromise offer or force protracted recovery, the bank&apos;s stressed asset committee applies the <strong>Stressed Asset Net Present Value Recovery Valuation Formula</strong>:
              </p>

              {/* JSX Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Stressed Asset Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation_Costs - Provisioning_Burden - Collateral_Depreciation
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated net cash realized from future recovery in year t, r is the bank&apos;s cost of capital discount rate, and deductions account for 3 to 6 years of DRT court delays, advocate litigation retainers, auction realization haircuts, and capital locked in non-earning NPA provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because litigation across Indian civil jurisdictions and DRTs is notoriously slow and expensive, the discounted Net Present Value of future coercive recovery is frequently lower than an immediate, advocate-negotiated cash settlement. This mathematical reality empowers debt defense advocates to secure massive 50% to 75% principal haircut settlements for insolvent borrowers.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="strategic-roadmap-infographic" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. RBI Restructuring vs. Loan Settlement Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below details the structural comparison between navigating the RBI Debt Resolution Framework versus executing a One-Time Settlement (OTS), illustrating the key differences across eligibility requirements, payment structures, CIBIL reporting impacts, and ultimate legal finality.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/rbi-debt-resolution-framework-vs-loan-settlement.jpg"
                  alt="RBI Debt Resolution Framework Restructuring vs One Time Settlement OTS Infographic Banner"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Path A: RBI Restructuring</span>
                  <span>Tenure extension and moratorium for viable borrowers; requires 100% repayment; account continuity with &quot;Restructured&quot; credit bureau reporting tag.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Path B: Loan Settlement (OTS)</span>
                  <span>Compromise haircut of 50%–75% for structurally insolvent borrowers; immediate debt extinguishment with official RBI No Dues Certificate.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Post-Resolution Outcome</span>
                  <span>Restructured accounts recover through regular EMI servicing; settled accounts achieve immediate freedom from liability and execute 18–24 month credit rebuilding.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Strategic Decision Matrix */}
            <section id="strategic-decision-matrix-when-to-choose" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Strategic Decision Framework: When to Choose Restructuring vs. When to Settle
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Determining whether to pursue an RBI loan restructuring application or initiate One-Time Settlement negotiations is an institutional calculation that depends on three foundational parameters: <strong>permanence of income loss</strong>, <strong>collateral exposure</strong>, and <strong>long-term credit necessity</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Below is the authoritative strategic decision framework utilized by banking advocates to guide distressed debtors toward the correct resolution path:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-5 rounded-2xl border-2 border-blue-200 bg-blue-50/40 space-y-3">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">When to Opt for RBI Restructuring</h3>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Temporary Cash Flow Disruption:</strong> You experienced a verifiable short-term income shock (e.g., job transition, delayed business receivables, temporary medical hospitalization) that is projected to stabilize within 6 to 12 months.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Viable Underlying Business / Employment:</strong> Your commercial enterprise retains active contracts, client orders, or verifiable salary credentials capable of sustaining reduced EMIs over an extended maturity.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Asset Protection on Secured Mortgages:</strong> You hold substantial home equity or commercial property mortgaged to the bank and wish to prevent SARFAESI Section 13(4) possession notices and public auctions.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Long-Term Corporate Directorships:</strong> You serve as a key promoter or corporate director where maintaining an uncompromised credit profile is essential for business governance.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl border-2 border-emerald-200 bg-emerald-50/40 space-y-3">
                  <div className="flex items-center gap-2">
                    <BadgePercent className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">When to Opt for One-Time Settlement (OTS)</h3>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Permanent / Structural Insolvency:</strong> You experienced irreversible financial collapse (e.g., total business shutdown, catastrophic health disability, permanent loss of primary income) making ongoing debt servicing impossible.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Mathematical Inability to Service EMIs:</strong> Even with a 50% EMI reduction via tenure extension, your projected cash flows cannot meet the modified schedule, making restructuring a guaranteed failure.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>High-Interest Unsecured Debt Overload:</strong> Multiple credit cards and personal loans have spiraled with compound interest, where taking an immediate 50%–75% haircut is the only path to financial survival.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Permanent Debt Closure &amp; Clean Exit:</strong> You have access to a one-time pool of funds (via family assistance, asset sale, or third-party support) and require complete, immediate legal release from all creditor claims.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Applying for restructuring when you have zero realistic expectation of future cash flow is a dangerous pitfall. It merely postpones the default date while allowing the bank to accrue compounded interest on the enlarged balance. If debt servicing is mathematically untenable, initiating a structured OTS compromise is the only rational course of action.
              </p>
            </section>

            {/* Section 7: Forensic Verification Checklist */}
            <section id="forensic-verification-addendums-and-sanctions" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Forensic Checklist for Restructuring Addendums vs. OTS Sanction Letters
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Whether executing an RBI restructuring addendum agreement or an OTS settlement sanction letter, borrowers face substantial legal risks if the underlying documentation is flawed. Banks and recovery desks frequently incorporate restrictive covenants, ambiguous terms, or one-sided indemnity clauses that leave the borrower exposed to future litigation.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our banking advocates subject every resolution agreement to four mandatory forensic validation checkpoints:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Restructuring Addendum: Recalibrated Schedule &amp; Rate Cap</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Verify that the Supplementary Agreement or Addendum explicitly states the revised loan tenure, the exact new EMI quantum, the specific moratorium dates, the capitalization basis of accrued interest, and a strict prohibition on retrospective penal rate hikes.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-[#1F5EFF]" />
                    <span>OTS Letter: Explicit Debt Extinguishment Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ensure the OTS sanction letter is issued on official bank stationery by an authorized signatory (Chief Manager or AGM), explicitly stating that upon payment of the agreed settlement sum, the entire balance is irrevocably written off and extinguished.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-purple-600" />
                    <span>Mandatory Legal Proceedings Withdrawal Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The document must legally bind the lender to unconditionally withdraw all pending legal notices, Section 138 NI Act criminal cheque bounce complaints, Section 25 PSS Act actions, DRT Original Applications, and SARFAESI possession notices within 30 days of settlement.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>Collateral Release &amp; 30-Day NDC Delivery Mandate</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Master Circular RBI/2023-24/60, the sanction agreement must commit the lender to release all original property title deeds, personal guarantee discharges, and deliver the final No Dues Certificate within 30 calendar days of final payment.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Critical Warning: Never Deposit Settlement Funds on Verbal Assurances</span>
                </span>
                <p className="leading-relaxed">
                  Never deposit token funds into your loan account or transfer money based on verbal promises from recovery executives or collection agencies. Without a formally signed, stamped OTS sanction letter issued by the bank&apos;s competent authority, any deposited money will be appropriated as a routine part-payment toward accumulated interest and penal charges, leaving your loan active and open to ongoing recovery litigation.
                </p>
              </div>
            </section>

            {/* Section 8: CIBIL Bureau Dynamics */}
            <section id="cibil-bureau-dynamics-and-credit-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Long-Term CIBIL Credit Bureau Impact &amp; Post-Resolution Financial Rehabilitation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding how the credit rating bureaus—TransUnion CIBIL, Experian, Equifax, and CRIF High Mark—record debt resolution is essential for managing your future financial life. Under the Credit Information Companies (Regulation) Act, 2005 and RBI Master Directions, lenders are legally mandated to report the exact technical resolution code for every restructured or settled credit facility.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The credit bureau implications of the two resolution mechanisms diverge substantially:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-blue-600" />
                    <span>1. Loan Restructuring Credit Bureau Reporting: &quot;Restructured&quot; Tag</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank updates the account status in CIBIL with the remark <strong>&quot;Restructured&quot;</strong> or <strong>&quot;Restructured due to Natural Calamity / Stress&quot;</strong>. The outstanding balance reflects the full modified principal. The credit score experiences a moderate dip of 30 to 70 points. However, because the loan contract remains active and ongoing EMIs are paid on time, the account builds positive repayment history. Once the restructured loan is fully repaid across its modified tenure, the status converts to &quot;Closed&quot;, fully restoring standard creditworthiness.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>2. Loan Settlement Credit Bureau Reporting: &quot;Settled&quot; / ₹0 Balance Tag</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Following remittance of the OTS amount, the bank marks the account as <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write Off Settled&quot;</strong> and strictly reduces the current balance to <strong>₹0</strong>. This causes a steeper initial score drop (70 to 150 points). Crucially, however, the &quot;Settled&quot; tag immediately terminates continuous monthly 90+ DPD default reporting and removes legal risk. The borrower can initiate active credit rehabilitation protocols to rebuild their score back to 750+ within 18 to 24 months.
                  </p>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                The 18-to-24 Month Credit Score Rehabilitation Roadmap
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Whether recovering from a restructured facility or a settled account, borrowers can systematically restore prime credit eligibility by adhering to a structured 4-step financial protocol:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Step 1: Secure a Fixed-Deposit-Backed Credit Card:</strong> Open a fixed deposit (e.g., ₹25,000 to ₹50,000) with a scheduled commercial bank and obtain a secured credit card to initiate fresh, positive monthly bureau reporting cycles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Step 2: Maintain Strict Credit Utilization Below 30%:</strong> Restrict monthly card utilization strictly below 30% of the allocated credit limit to demonstrate low credit reliance and prudent spending discipline.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Step 3: Flawless On-Time Payment Discipline:</strong> Ensure 100% automated full payment of monthly billing statements at least 5 business days before the due date with zero delayed payments or minimum due rollovers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Step 4: Bureau Audit &amp; ₹0 Balance Dispute Resolution:</strong> Conduct quarterly audits across all four bureaus (CIBIL, Experian, Equifax, CRIF) to verify that all settled accounts reflect ₹0 outstanding balance and lodge formal online disputes for any lingering reporting errors.</span>
                </li>
              </ul>
            </section>

            {/* Section 9: Comprehensive Comparative Matrix */}
            <section id="comprehensive-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. RBI Debt Restructuring vs. Loan Settlement Comprehensive Comparative Matrix
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The side-by-side comparative matrix below encapsulates the essential strategic, legal, financial, and credit differences between restructuring under the RBI Prudential Framework and executing a compromise One-Time Settlement (OTS):
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Strategic Parameter</th>
                      <th>RBI Debt Restructuring Framework</th>
                      <th>One-Time Settlement (OTS Compromise)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Core Objective</td>
                      <td>Tenure modification &amp; EMI relief for viable borrowers</td>
                      <td>Permanent debt extinguishment &amp; exit for insolvent debtors</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Principal Repayment Obligation</td>
                      <td>100% of principal disbursed must be repaid</td>
                      <td>50% to 75% Principal Haircut waiver sanctioned</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Contractual Continuity</td>
                      <td>Loan contract survives via Supplementary Addendum</td>
                      <td>Loan contract permanently terminated &amp; extinguished</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Prerequisite Condition</td>
                      <td>Demonstrable future cash flows &amp; DSCR viability</td>
                      <td>Verifiable financial insolvency &amp; permanent hardship</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Payment Timeline</td>
                      <td>Extended monthly EMIs across 2 to 5 additional years</td>
                      <td>Lump sum or 2–4 tranches payable within 30–90 days</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Credit Bureau Status</td>
                      <td>Reported as &quot;Restructured&quot; with active balance</td>
                      <td>Reported as &quot;Settled&quot; with strict ₹0 balance</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">CIBIL Score Impact</td>
                      <td>Moderate temporary dip (30 to 70 points)</td>
                      <td>Initial drop (70 to 150 points); 18–24 month recovery</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Collateral / Lien Release</td>
                      <td>Security remains pledged until final restructured EMI</td>
                      <td>Complete lien release &amp; title deeds returned within 30 days</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Legal Risk of Re-Default</td>
                      <td>High; secondary default triggers immediate SARFAESI/DRT</td>
                      <td>Zero; absolute judicial finality backed by RBI NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Strategic Debt Resolution Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating the complex boundary between RBI debt restructuring and a high-haircut One-Time Settlement requires seasoned debt defense advocates who understand banking jurisprudence, credit committee guidelines, and recovery economics. SettleLoans represents individual borrowers and business promoters across India: evaluating financial viability, halting third-party recovery harassment under RBI Fair Practices Codes, auditing loan contracts for illegal compounded levies, and negotiating directly with bank zonal committees to secure the most advantageous resolution—whether structuring a viable RBI restructuring plan or executing a deep 50% to 75% OTS haircut backed by an official, legally binding No Dues Certificate.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  11. Frequently Asked Questions: RBI Restructuring vs. Loan Settlement
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to critical questions regarding the RBI Debt Resolution Framework, loan restructuring guidelines, One-Time Settlements, and borrower legal protections in India.
              </p>

              <div className="space-y-3">
                {(jsonLdGraph['@graph'][4] as any).mainEntity.map((faq: any, idx: number) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                  >
                    <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                      <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.name}
                      </span>
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </summary>
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                      <p>{faq.acceptedAnswer.text}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* 5 Official Regulatory Links */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Official Statutory &amp; Regulatory References
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Prudential Framework for Resolution of Stressed Assets (June 7, 2019)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Circular RBI/2023-24/60 (Responsible Lending Conduct &amp; Release of Property Documents)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Indian Contract Act, 1872 (Section 63 – Remission of Contract Performance)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (Lok Adalat Settlement Awards &amp; Decrees)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Grievance Redressal for Unfair Recovery &amp; Disputes)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Distressed Asset &amp; Loan Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/drt-loan-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  DRT Loan Settlement Process
                </Link>
                <Link
                  href="/auction-notice-challenge"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SARFAESI Auction Challenge
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Unsecured Loan Property Rights
                </Link>
                <Link
                  href="/bank-overdraft-facility-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Overdraft Settlement Guide
                </Link>
                <Link
                  href="/loan-penalty-waiver-request"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Penalty Waiver Guide
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/case-study-cibil-status-settled-to-closed"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Settled to Closed Recovery
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Recovery Harassment
                </Link>
                <Link
                  href="/SME-loan-dispute-resolution"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SME Loan Dispute Resolution
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                    AJ
                  </div>
                </Link>
                <div>
                  <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                    <h4 className="font-bold text-slate-900 text-sm">Ashish Jhangra</h4>
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in RBI Stressed Asset Resolution Frameworks, loan restructuring negotiations, SARFAESI defenses, and One-Time Settlement compromises with over a decade of banking legal advisory experience.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="text-xs text-[#1F5EFF] hover:underline flex items-center gap-1 font-semibold">
                  <span>View Profile</span>
                  <span>→</span>
                </Link>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Author</span>
                </div>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Debt Resolution Defense</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">Struggling with Restructuring vs. Settlement?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let the bank push you into unviable restructured terms or inflated claims. Consult our senior banking advocates to determine the right financial and legal relief strategy.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Free Case Evaluation
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </h4>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>RBI Prudential Framework Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank-Stamped OTS Sanctions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Direct Negotiation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
