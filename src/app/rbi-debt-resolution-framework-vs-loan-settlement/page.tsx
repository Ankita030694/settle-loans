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
  title: 'RBI Debt Resolution vs Loan Settlement | SettleLoans',
  description: 'Compare RBI Debt Resolution Framework restructuring with one-time loan settlement. Choose the right debt relief path with SettleLoans.',
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
    canonical: 'https://www.settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement',
  },
  openGraph: {
    title: 'RBI Debt Resolution Framework vs Loan Settlement: Restructuring vs OTS Compared',
    description: 'Master the strategic choice between loan restructuring under RBI Master Directions and a definitive One Time Settlement (OTS) haircut. Learn how banking regulations, CIBIL scoring, and NPV recovery economics dictate the right debt relief path.',
    url: 'https://www.settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/rbi-debt-resolution-framework-vs-loan-settlement.jpg',
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
    images: ['https://www.settleloans.in/images/infographics/rbi-debt-resolution-framework-vs-loan-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement#webpage",
      "url": "https://www.settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement",
      "name": "RBI Debt Resolution Framework vs Loan Settlement: Restructuring vs OTS Compared (2026)",
      "description": "Understand the critical difference between loan restructuring under the RBI Debt Resolution Framework and One Time Settlement (OTS). Compare tenure extensions, moratoriums, CIBIL reporting, NPV haircut formulas, and legal finality.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement#breadcrumb"
      },
      "inLanguage": "en-IN",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.settleloans.in/#website",
        "name": "SettleLoans",
        "url": "https://www.settleloans.in"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement#breadcrumb",
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
          "name": "RBI Debt Resolution Framework vs Loan Settlement",
          "item": "https://www.settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement#article",
      "headline": "RBI Debt Resolution Framework vs Loan Settlement: Strategic Restructuring vs OTS Haircut Analysis",
      "description": "A comprehensive regulatory, financial, and legal comparison between loan restructuring under RBI Master Directions on Resolution of Stressed Assets and One-Time Settlement (OTS) debt compromise. Details eligibility criteria, tenure modifications, moratoriums, CIBIL credit score impact, bank provisioning economics, and Net Present Value recovery formulas.",
      "image": "https://www.settleloans.in/images/infographics/rbi-debt-resolution-framework-vs-loan-settlement.jpg",
      "datePublished": "2026-08-28T10:00:00+05:30",
      "dateModified": "2026-08-28T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement#webpage"
      },
      "author": {
        "@type": "Person",
        "name": "Ashish Jhangra",
        "url": "https://www.settleloans.in/authors/ashish-jhangra"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://www.settleloans.in/#organization",
        "name": "SettleLoans",
        "url": "https://www.settleloans.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.settleloans.in/logo/logo.svg"
        }
      }
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement#service",
      "name": "SettleLoans - RBI Debt Resolution & Loan Settlement Legal Advisory",
      "description": "Specialized legal representation and financial debt defense advisory helping retail, SME, and corporate borrowers navigate the RBI Prudential Resolution Framework, loan restructuring, and high-haircut One-Time Settlements across India.",
      "url": "https://www.settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement",
      "image": "https://www.settleloans.in/images/infographics/rbi-debt-resolution-framework-vs-loan-settlement.jpg",
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
        "@id": "https://www.settleloans.in/#organization",
        "name": "SettleLoans",
        "url": "https://www.settleloans.in"
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
          "reviewBody": "Our firm had ₹65 Lakhs in working capital loans with State Bank of India. Supply chain delays hit our cash flow. The bank threatened NPA classification. SettleLoans reviewed our books. They proved our revenue drop was short term. They set up an RBI Resolution Framework restructuring. We got an 18-month tenure extension and a 6-month interest pause. Our account stayed standard. Our business survived.",
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
          "reviewBody": "Severe illness caused permanent income loss. I could not pay my ₹18 Lakh personal loan and cards across HDFC and ICICI. SettleLoans advised against restructuring. They showed that loan extension adds heavy interest on lost income. Their legal team negotiated an OTS settlement. I got a 68% principal waiver and total debt freedom.",
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
          "reviewBody": "I was unsure between loan restructuring and an OTS settlement on my Axis Bank business loan of ₹32 Lakhs. SettleLoans calculated the Net Present Value recovery numbers. They audited the loan terms. They spoke to the bank zonal committee. We got an official OTS sanction letter for ₹9.5 Lakhs. The bank dropped all legal notices in 30 days.",
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
          "reviewBody": "Punjab National Bank sent a SARFAESI demand notice on my commercial loan of ₹80 Lakhs. SettleLoans halted recovery action. They ran a business viability study. They set up an RBI restructuring plan. This converted overdue interest into a funded loan (FITL). It fully saved my property from auction.",
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
      "@id": "https://www.settleloans.in/rbi-debt-resolution-framework-vs-loan-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the primary difference between loan restructuring and loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The main difference is the repayment duty and loan life. Under the RBI Prudential Framework, restructuring changes loan terms. It can extend tenure, cut monthly EMIs, or give an interest pause. But you must repay 100% of the loan and interest. In contrast, a One-Time Settlement (OTS) is a debt compromise. The bank takes a lump sum, often 30% to 50% of the balance. The bank writes off the rest. It closes your debt forever."
          }
        },
        {
          "@type": "Question",
          "name": "When should a borrower choose loan restructuring over loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose loan restructuring when your cash trouble is short term. Your job or business must remain steady. You must have clear future income to pay smaller EMIs over extra time. Restructuring gives quick cash relief through longer tenure or an EMI pause. It keeps your credit active and avoids legal default."
          }
        },
        {
          "@type": "Question",
          "name": "When is a One-Time Settlement (OTS) the only practical option?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An OTS is best when you suffer permanent income loss. This includes job loss, business closure, or serious illness. Paying even reduced EMIs is impossible. Restructuring will only delay default and add heavy interest. An OTS allows a 50% to 75% waiver. It clears the debt forever with an official RBI No Dues Certificate."
          }
        },
        {
          "@type": "Question",
          "name": "How does loan restructuring affect CIBIL and credit bureau scores compared to settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both options affect credit bureau records differently under RBI rules. Restructured accounts get a 'Restructured' tag in CIBIL, Experian, Equifax, and CRIF High Mark. Your credit score drops 30 to 70 points. But the account stays active and standard. Scores recover as you pay on time. A settled loan gets a 'Settled' tag with zero balance. The score drops 70 to 150 points. You need 18 to 24 months of steady credit steps to rebuild."
          }
        },
        {
          "@type": "Question",
          "name": "Can a borrower get a loan settlement after their loan has already been restructured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If you enter an RBI restructuring plan and face a new financial shock, you may miss new EMIs. The loan then becomes a Non-Performing Asset (NPA). At that stage, you can start fresh OTS talks with the bank or Debt Recovery Tribunal. You can use your verified hardship to get a final settlement waiver."
          }
        },
        {
          "@type": "Question",
          "name": "Does loan restructuring involve any principal or interest waiver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard retail and SME loan restructuring under RBI rules does not waive principal debt. Banks may lower the interest rate or drop late fees. They may convert unpaid interest into a Funded Interest Term Loan (FITL). Full debt waivers and principal cuts happen only through One-Time Settlements (OTS) or NCLT plans under the Insolvency and Bankruptcy Code (IBC)."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Net Present Value (NPV) test used by banks during debt resolution?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Master Directions, banks must run an NPV test for debt resolution. In restructuring, the bank calculates the present value of future cash flows. It compares this against the original loan value. In an OTS, the credit committee compares the cash offer with the net value of long legal recovery under DRT or SARFAESI. They deduct legal fees, court delays. And capital provisioning costs."
          }
        },
        {
          "@type": "Question",
          "name": "How does advocate representation assist borrowers during restructuring vs settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Specialist debt defense lawyers protect your rights. In restructuring, lawyers check bank rules, prepare cash flow reports. And negotiate lower rates. They ensure addendum terms do not add unfair personal guarantees. In an OTS, lawyers issue notices to stop recovery harassment. They audit loans to remove illegal fees. They negotiate with zonal committees to get formal OTS sanction letters and RBI No Dues Certificates."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank initiate SARFAESI or Section 138 proceedings during the RBI restructuring evaluation window?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Prudential Framework rules. When a lender reviews a stressed asset plan, a review period begins. During this evaluation window, lenders usually pause recovery actions. But if restructuring fails or you miss restructured payments, the bank can act. It can issue Section 13(2) SARFAESI notices, file Section 138 NI Act cheque bounce cases, or start DRT claims."
          }
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.settleloans.in/#organization",
      "name": "SettleLoans",
      "url": "https://www.settleloans.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.settleloans.in/logo/logo.svg"
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

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">RBI Debt Resolution Framework vs Loan Settlement</h1>

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
                Loan restructuring keeps 100% principal repayment. It uses tenure extensions and EMI pauses for viable borrowers with temporary cash drops. A One-Time Settlement (OTS) gives a 50% to 75% principal waiver. It is meant for borrowers facing permanent financial collapse. It closes all debt liabilities forever.
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
                  <span><strong>Different Legal Rules:</strong> Restructuring modifies loan terms under the RBI Prudential Framework and requires 100% repayment. Settlement executes a debt compromise that wipes out remaining debt at a discount.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Viability vs Permanent Hardship:</strong> Pick restructuring when your cash shortage is temporary and future earnings are steady. Pick an OTS when income loss is permanent and debt payments are impossible.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Bank Provisioning and NPV Math:</strong> Banks assess restructuring using Net Present Value (NPV) and set aside 5% to 15% provisions. For OTS decisions, banks compare instant cash against 3 to 6 years of DRT and SARFAESI court delays.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Bureau Reporting Differences:</strong> Restructuring gives a &quot;Restructured&quot. tag in credit bureaus while keeping the loan active. An OTS gives a &quot;Settled&quot. tag with a ₹0 balance. Both require distinct credit repair steps.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Complete Legal Safety with OTS:</strong> If a borrower misses restructured EMIs, banks can start SARFAESI or Section 138 NI Act cases. An OTS backed by an official RBI No Dues Certificate ends all legal risk and frees property.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Core Dilemma */}
            <section id="core-dilemma-restructuring-vs-settlement" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Core Strategic Dilemma</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower faces cash trouble, default risks rise fast. This affects personal loans, credit cards, SME credit. And home loans across banks. Major banks include SBI, HDFC, ICICI, Axis, and PNB. Borrowers have two choices. They can apply for loan restructuring under the <strong>Reserve Bank of India (RBI) Prudential Framework for Resolution of Stressed Assets</strong>. Or they can seek a <strong>One-Time Settlement (OTS)</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many borrowers mix up loan restructuring and loan settlement. That mistake is costly. Borrowers often think both are the same. In reality, they work differently. They follow different RBI rules, accounting norms. And credit score effects.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Loan restructuring updates your loan terms. It fits viable borrowers with short-term cash gaps. The bank can extend loan tenure or pause monthly EMIs. It can lower EMI amounts or turn unpaid interest into a term loan. But you must pay 100% of the principal and interest. Your loan continues. And the bank keeps your pledged assets.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A One-Time Settlement is an exit plan for deep financial distress. When income stops, full loan repayment is not possible. Through lawyer talks, the bank takes a lower lump sum. The bank often waives 50% to 75% of the total debt. It closes the loan contract, frees property liens. And gives an official RBI No Dues Certificate. Choosing the wrong path can trap you in rising debt.
              </p>
            </section>

            {/* Section 2: Statutory & Regulatory Framework */}
            <section id="statutory-framework-rbi-prudential-directions" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Statutory &amp; Regulatory Framework</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Stressed debt resolution in India follows clear statutory laws and RBI Master Directions. Banks cannot change loan terms or grant OTS settlements on a whim. They must follow strict regulatory rules set by the Reserve Bank of India and commercial statutes.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The main rulebook is the <strong>RBI Prudential Framework for Resolution of Stressed Assets (June 7, 2019 Master Directions, updated through 2026)</strong>. Under these rules, banks and NBFCs must track early stress. They classify accounts into Special Mention Account stages (SMA-0, SMA-1, SMA-2). Lenders get a 30-day review period to evaluate a Resolution Plan (RP). For example, loan restructuring or ownership change.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>RBI Resolution Framework: Statutory Pillars</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Governed by RBI Master Directions on Stressed Assets. Requires formal viability studies, Inter-Creditor Agreements (ICAs) for joint loans, credit committee sanctions. And post-restructuring checks.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    <span>Civil Compromise: Contract Act &amp; Section 138/DRT</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Governed by Section 63 of the Indian Contract Act, 1872 (remission of performance), RBI OTS circulars. And consent orders before National Lok Adalats or Debt Recovery Tribunals (DRT).
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-purple-600" />
                    <span>Asset Classification Rules Post-Restructuring</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI rules, stressed standard accounts that are restructured move to Non-Performing Assets (Sub-Standard). If already NPA, they keep that status. They upgrade to Standard only after a clean repayment record over a set monitoring period.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>Compromise Settlement Discretion &amp; Recovery Rules</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI Board-Approved Settlement Policies allow bank committees to waive unrecovered debt. This happens when legal recovery costs, court delays. And security shortfalls make an instant cash compromise the better financial choice.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Judicial Protection: Prohibition of Coercive Recovery during Formal Evaluation</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  The Supreme Court of India and High Courts protect borrower rights. When you file a restructuring or OTS request under RBI Master Directions, banks must review it fairly. They must follow their board policy. Lenders cannot reject claims without clear reasons. Using recovery agents to harass borrowers violates the RBI Fair Practices Code.
                </p>
              </div>
            </section>

            {/* Section 3: Anatomy of Restructuring */}
            <section id="anatomy-of-restructuring-tenure-moratorium" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Anatomy of Restructuring</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a bank approves an RBI Debt Resolution Framework restructuring plan, it adjusts key loan terms. This aligns debt payments with your expected cash flow. Restructuring is not a debt waiver. It is a financial adjustment that reschedules your debt over more time.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Standard commercial and retail restructuring plans use several main tools:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">1. Repayment Tenure Extension &amp; EMI Recalibration</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank extends the loan tenure by 2 to 5 years. Spreading the principal across more years cuts your monthly EMI by 25% to 45%. This provides immediate relief for household or business budgets.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-indigo-600" />
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">2. Principal and Interest Payment Moratorium</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The lender may grant an EMI payment pause of 3 to 12 months. In severe economic crises, this can last up to 24 months. You do not pay EMIs during this window. However, interest still accrues and gets added to your total loan balance.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">3. Conversion of Accrued Interest into Funded Interest Term Loans (FITL)</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When unpaid interest builds up during default, the bank splits the debt. It moves the unpaid interest into a separate Funded Interest Term Loan (FITL). The principal becomes a standard term loan. This lets you resume regular operations without instant penalty pressure.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <div className="flex items-center gap-2">
                    <BadgePercent className="w-4 h-4 text-amber-600" />
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">4. Interest Rate Margin Concessions &amp; Penal Charge Reversal</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank committee may lower the interest margin over benchmark rates (MCLR/EBLR). It can also waive past penal interest and bounce fees. This cuts down compound interest growth on your balance.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To qualify for restructuring, you must show verifiable cash flow viability. You need audited accounts, GST filings, or salary slips. These records must prove your income drop is temporary and you can service revised EMIs. If your cash flow fails the bank&apos;s Debt Service Coverage Ratio (DSCR) rules, the bank will reject your application.
              </p>
            </section>

            {/* Section 4: Bank Accounting Economics & NPV Formula */}
            <section id="bank-accounting-economics-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank Balance Sheet Economics, Provisioning Burdens</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks review debt relief under clear accounting rules. Under RBI prudential norms, lenders do not look only at loan balance. They track provisioning rules, capital ratios. And the Net Present Value (NPV) of cash flow.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a loan becomes an NPA, the bank sets aside 15% to 100% funds as provisioning. Restructuring a stressed loan needs a 5% to 15% provision. The bank also takes a fair value loss (NPV loss) from lower rates or longer loan life.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In an OTS review, the bank compares upfront cash against the NPV of long litigation. This includes DRT suits, civil court claims, and SARFAESI property auctions:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Pathway.</th>
                      <th>Gross Face Claim.</th>
                      <th>Institutional Friction &amp. Timeline.</th>
                      <th>Net Present Value (Realized Recovery).</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Litigation &amp. SARFAESI Enforcement.</td>
                      <td>₹40.0 Lakhs Claim.</td>
                      <td>4–7 Years Court Delays, DRT Stay Appeals, 100% Capital Provisioning Drag.</td>
                      <td>₹16.2 Lakhs (Heavy NPV Diminution).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Framework Restructuring.</td>
                      <td>₹40.0 Lakhs Full Debt.</td>
                      <td>Tenure Extended by 4 Years, 10% Diminution Provision, Risk of Re-Default.</td>
                      <td>₹32.5 Lakhs (NPV Discounted at 12%).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Negotiated OTS Settlement.</td>
                      <td>₹40.0 Lakhs Gross Claim.</td>
                      <td>Immediate Cash within 30–60 Days, Zero Future Provisioning.</td>
                      <td>₹18.0 Lakhs (Immediate Liquid Capital).</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To decide whether to accept an OTS offer or proceed with recovery, the bank calculates recovery value using the NPV formula:
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
                  Here, C_t is estimated cash recovered in year t. The discount rate r reflects the bank&apos;s cost of funds. Deductions include 3 to 6 years of DRT court delays, lawyer fees, auction price cuts. And frozen capital in NPA provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Court litigation in Indian tribunals is slow and expensive. Therefore, the present value of future legal recovery is often lower than an immediate cash settlement. This mathematical rule allows lawyers to secure 50% to 75% principal haircuts for insolvent borrowers.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="strategic-roadmap-infographic" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. RBI Restructuring vs. Loan Settlement Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The graphic below outlines the path between the RBI Debt Resolution Framework and a One-Time Settlement (OTS). It highlights differences in eligibility, payment terms, credit reporting. And legal finality.
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
                  <span>Tenure extension and moratorium for viable borrowers. Requires 100% repayment. Account continues with a &quot;Restructured&quot; credit tag.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Path B: Loan Settlement (OTS)</span>
                  <span>Compromise waiver of 50% to 75% for insolvent borrowers. Closes debt immediately with an official RBI No Dues Certificate.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Post-Resolution Outcome</span>
                  <span>Restructured loans recover through regular EMI payments. Settled accounts end legal liability and rebuild credit over 18 to 24 months.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Strategic Decision Matrix */}
            <section id="strategic-decision-matrix-when-to-choose" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Strategic Decision Framework</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Choosing between RBI loan restructuring and a One-Time Settlement depends on three factors: permanence of income loss, pledged assets. And long-term credit needs.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Here is the strategic framework used by banking advocates to guide distressed borrowers:
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
                      <span><strong>Temporary Cash Flow Drop:</strong> You faced a short-term income shock (job switch, delayed payments, or illness) that should clear within 6 to 12 months.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Viable Business or Job:</strong> Your firm has active client orders, or you have salary credentials to pay smaller EMIs over extra time.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Secured Mortgage Protection:</strong> You have valuable property pledged to the bank and want to avoid SARFAESI Section 13(4) possession notices and auctions.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Corporate Directorships:</strong> You hold corporate roles where keeping an active, non-default credit profile is vital.</span>
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
                      <span><strong>Permanent Financial Hardship:</strong> You suffered total business shutdown, serious illness, or permanent job loss, making regular payments impossible.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Inability to Pay EMIs:</strong> Even with a 50% EMI cut through tenure extension, your income cannot meet the revised schedule.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>High-Interest Unsecured Debt:</strong> Credit card balances and personal loans have spiraled with interest. Where a 50% to 75% waiver is essential.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Clean Debt Exit:</strong> You have access to one-time family or third-party funds and need immediate legal release from all creditor claims.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Applying for restructuring without steady cash flow is risky. It only delays default while adding compounded interest to your loan. If servicing debt is impossible, a structured OTS compromise is the sensible choice.
              </p>
            </section>

            {/* Section 7: Forensic Verification Checklist */}
            <section id="forensic-verification-addendums-and-sanctions" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. RBI Compromise Sanction Forensic Checklist</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Signing a restructuring addendum or an OTS sanction letter carries real legal risks if the paperwork has errors. Banks and recovery teams often include strict clauses or vague terms that leave you exposed to future court claims.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our banking advocates examine every settlement agreement against four mandatory legal checks:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Restructuring Addendum: Revised Terms and Rate Caps</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Check that the addendum clearly states the revised tenure, new EMI amount, exact moratorium dates. And interest capitalization rules. It must bar retroactive penal interest hikes.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-[#1F5EFF]" />
                    <span>OTS Letter: Explicit Debt Extinguishment Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ensure the OTS letter comes on official bank letterhead. It must be signed by an authorized manager (Chief Manager or AGM). It must state that your debt is fully cleared upon payment.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-purple-600" />
                    <span>Mandatory Case Withdrawal Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must bind the bank to withdraw all pending legal notices. This includes Section 138 NI Act cheque bounce cases, Section 25 PSS Act complaints, DRT claims, and SARFAESI actions within 30 days.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>Collateral Release and 30-Day NDC Delivery</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Circular RBI/2023-24/60, the bank must return all original property title deeds and guarantee discharges. It must deliver your No Dues Certificate within 30 days of final payment.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Critical Warning: Never Pay Settlement Money on Verbal Promises</span>
                </span>
                <p className="leading-relaxed">
                  Never deposit token money into your account based on verbal promises from recovery agents. Without an official signed and stamped OTS letter from the bank, any paid funds go toward interest and penal fees. Your loan stays open to legal action.
                </p>
              </div>
            </section>

            {/* Section 8: CIBIL Bureau Dynamics */}
            <section id="cibil-bureau-dynamics-and-credit-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Long-Term CIBIL Credit Bureau Impact</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Credit bureaus track how loans are closed under the Credit Information Companies (Regulation) Act, 2005 and RBI Master Directions. Lenders must report exact resolution codes to CIBIL, Experian, Equifax, and CRIF High Mark.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The credit impact of each option works differently:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-blue-600" />
                    <span>1. Restructuring Credit Bureau Reporting: &quot;Restructured&quot; Tag</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank marks the account in CIBIL as <strong>&quot;Restructured&quot;</strong>. Your balance reflects the modified loan amount. Your score drops 30 to 70 points. Because the loan stays open and you pay on time, your score rebuilds steadily. Once the loan ends, the status changes to &quot;Closed&quot;.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>2. Loan Settlement Credit Bureau Reporting: &quot;Settled&quot; / ₹0 Balance Tag</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    After you pay the OTS amount, the bank marks the account as <strong>&quot;Settled&quot;</strong> with a <strong>₹0</strong> balance. This brings a sharp score drop of 70 to 150 points. However, it stops monthly overdue default tags and ends legal risk. You can rebuild your score back to 750+ over 18 to 24 months.
                  </p>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                The 18-to-24 Month Credit Score Rehabilitation Roadmap
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                You can restore your credit eligibility by following four clear steps:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Step 1: Get a Fixed-Deposit Credit Card:</strong> Open a fixed deposit (₹25,000 to ₹50,000) with a bank and get a secured card. This starts fresh, positive monthly credit reporting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Step 2: Keep Credit Use Below 30%:</strong> Spend under 30% of your total credit limit each month to show good financial control.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Step 3: Pay Bills on Time in Full:</strong> Set up auto-pay for all monthly card statements at least 5 days before the due date. Avoid late payments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Step 4: Audit Bureau Records and Dispute Errors:</strong> Check all four bureaus (CIBIL, Experian, Equifax, CRIF) quarterly. Verify that settled accounts show a ₹0 balance. Raise online disputes for any errors.</span>
                </li>
              </ul>
            </section>

            {/* Section 9: Comprehensive Comparative Matrix */}
            <section id="comprehensive-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. RBI Debt Restructuring vs. Loan Settlement Comprehensive</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The table below highlights key differences between RBI Debt Restructuring and a One-Time Settlement (OTS):
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Strategic Parameter.</th>
                      <th>RBI Debt Restructuring Framework.</th>
                      <th>One-Time Settlement (OTS Compromise).</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Core Objective.</td>
                      <td>Tenure modification &amp. EMI relief for viable borrowers.</td>
                      <td>Permanent debt clearance and exit for insolvent borrowers.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Principal Repayment Obligation.</td>
                      <td>100% of loan principal must be repaid.</td>
                      <td>50% to 75% Principal Haircut waiver sanctioned.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Contractual Continuity.</td>
                      <td>Loan contract continues via written addendum.</td>
                      <td>Loan contract ends and is fully cancelled.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Prerequisite Condition.</td>
                      <td>Demonstrable future cash flows &amp. DSCR viability.</td>
                      <td>Verifiable financial hardship and permanent income loss.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Payment Timeline.</td>
                      <td>Monthly EMIs spread across 2 to 5 extra years.</td>
                      <td>Lump sum or 2–4 parts paid within 30–90 days.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Credit Bureau Status.</td>
                      <td>Reported as &quot;Restructured&quot. with active balance.</td>
                      <td>Reported as &quot;Settled&quot. with strict ₹0 balance.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">CIBIL Score Impact.</td>
                      <td>Moderate drop (30 to 70 points).</td>
                      <td>Initial drop (70 to 150 points). 18–24 month recovery.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Collateral / Lien Release.</td>
                      <td>Security stays pledged until final EMI payment.</td>
                      <td>Full lien release &amp. title deeds returned in 30 days.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Legal Risk of Re-Default.</td>
                      <td>High. missed payments trigger fresh SARFAESI/DRT claims.</td>
                      <td>Zero. absolute judicial finality backed by RBI NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Resolution Defense &amp; Advisory</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Picking between loan restructuring and an OTS settlement needs sound legal help. SettleLoans assists borrowers across India. We check your repayment ability. We stop illegal recovery calls under RBI rules. We audit loan statements to remove wrongful charges. Our legal team negotiates directly with bank committees. We help you get an RBI loan restructuring plan or a 50% to 75% OTS waiver with an official No Dues Certificate.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: RBI Restructuring vs. Loan Settlement</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Here are clear legal answers to common questions on RBI loan restructuring, One-Time Settlements. And borrower rights in India.
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
                    <div className="font-bold text-slate-900 text-sm">Ashish Jhangra</div>
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Ashish specializes in RBI stressed asset frameworks, loan restructuring, SARFAESI defense, and OTS settlements. He has over 10 years of banking law experience.
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
              <div className="font-bold text-base text-white mb-2">Struggling with Restructuring vs. Settlement?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let your bank force bad loan terms or unfair fees. Speak with our debt defense lawyers to find the right settlement plan.
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
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </div>
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
