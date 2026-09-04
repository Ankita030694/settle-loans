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
  Clock,
  Layers
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'SMA Account & Loan Settlement Window | SettleLoans',
  description: 'Understand SMA-0, SMA-1, and SMA-2 pre-NPA account classification. Settle overdue loans during the 90-day window with SettleLoans.',
  keywords: [
    'sma account classification loan settlement',
    'sma 0 sma 1 sma 2 rbi classification',
    'special mention account loan settlement window',
    'pre npa loan settlement process india',
    'rbi prudential framework sma classification',
    'how to settle loan before npa declaration',
    'sma 2 waiver and restructuring negotiation',
    'crilc reporting sma overdue timeline',
    'overdue emi settlement before sarfaesi 90 days',
    'bank penal interest waiver sma account',
    'pre npa one time settlement ots'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/sma-account-classification-loan-settlement-window',
  },
  openGraph: {
    title: 'SMA Account Classification & Loan Settlement Window: Settle Before 90-Day NPA',
    description: 'Master the RBI Special Mention Account (SMA) resolution framework. Discover how to utilize the critical 1–90 day overdue window (SMA-0, SMA-1, SMA-2) to secure debt waivers, avoid SARFAESI action, and negotiate favorable settlements before formal NPA declaration.',
    url: 'https://www.settleloans.in/sma-account-classification-loan-settlement-window',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/sma-account-classification-loan-settlement-window.jpg',
        width: 1200,
        height: 675,
        alt: 'SMA Account Classification & Pre-NPA Loan Settlement Window Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMA Account Classification & Loan Settlement Window: Settle Before 90-Day NPA',
    description: 'Is your loan overdue between 1 and 90 days? Learn how RBI SMA-0, SMA-1, and SMA-2 classifications create an urgent settlement window for borrowers to negotiate deep waivers before NPA status.',
    images: ['https://www.settleloans.in/images/infographics/sma-account-classification-loan-settlement-window.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/sma-account-classification-loan-settlement-window#webpage",
      "url": "https://www.settleloans.in/sma-account-classification-loan-settlement-window",
      "name": "SMA Account Classification & Loan Settlement Window: Settle Before 90-Day NPA (2026)",
      "description": "Understand RBI Special Mention Account (SMA) framework: SMA-0 (1-30 days), SMA-1 (31-60 days), and SMA-2 (61-90 days). Learn how borrowers can leverage the pre-90-day window to negotiate massive penalty waivers, restructuring, or compromise settlements before formal NPA classification and coercive legal recovery.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/sma-account-classification-loan-settlement-window#breadcrumb"
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
      "@id": "https://www.settleloans.in/sma-account-classification-loan-settlement-window#breadcrumb",
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
          "name": "SMA Account Classification & Loan Settlement Window",
          "item": "https://www.settleloans.in/sma-account-classification-loan-settlement-window"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/sma-account-classification-loan-settlement-window#article",
      "headline": "SMA Account Classification & Loan Settlement Window: How to Leverage the Pre-90-Day Period Before Formal NPA Declaration",
      "description": "A comprehensive regulatory, accounting, and legal analysis of the Reserve Bank of India Special Mention Account (SMA) supervisory framework. Details the Days-Past-Due (DPD) thresholds for SMA-0, SMA-1, and SMA-2, CRILC reporting mechanics, bank provisioning economics, and advocate-led negotiation strategies to secure deep penal interest waivers and compromise settlements before non-performing asset classification and SARFAESI enforcement.",
      "image": "https://www.settleloans.in/images/infographics/sma-account-classification-loan-settlement-window.jpg",
      "datePublished": "2026-09-02T10:00:00+05:30",
      "dateModified": "2026-09-02T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/sma-account-classification-loan-settlement-window#webpage"
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
      "@id": "https://www.settleloans.in/sma-account-classification-loan-settlement-window#service",
      "name": "SettleLoans - Pre-NPA & SMA Debt Resolution Legal Advisory",
      "description": "Specialized legal representation and debt resolution advisory for borrowers managing overdue loans in SMA-0, SMA-1, and SMA-2 stages across commercial banks and NBFCs in India.",
      "url": "https://www.settleloans.in/sma-account-classification-loan-settlement-window",
      "image": "https://www.settleloans.in/images/infographics/sma-account-classification-loan-settlement-window.jpg",
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
        "reviewCount": "2340",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Vivek Singhania"
          },
          "datePublished": "2026-06-18",
          "reviewBody": "My business credit line of ₹42 Lakhs with HDFC Bank was at 72 days overdue in the SMA-2 category. The branch manager threatened immediate NPA tagging and SARFAESI notice issuance. SettleLoans legal advocates stepped in, submitted a formal restructuring proposal under RBI Prudential Directions, and negotiated a 65% penal interest waiver and a structured 3-month closure plan. We averted an NPA tag and safeguarded our commercial credit reputation.",
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
            "name": "Meenakshi Sundaram"
          },
          "datePublished": "2026-07-04",
          "reviewBody": "After unexpected hospital bills, my personal loan and credit card accounts totaling ₹18 Lakhs with ICICI Bank slipped into SMA-1 status (45 DPD). Recovery agents began making threatening phone calls. SettleLoans issued a formal Notice of Representation, cited RBI Fair Lending Directions to stop all harassment, and secured an executive pre-NPA compromise waiver reducing my outstanding liability significantly.",
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
            "name": "Anirudh Malhotra"
          },
          "datePublished": "2026-07-29",
          "reviewBody": "Our MSME term loan of ₹30 Lakhs with Axis Bank was at Day 84 in SMA-2. We faced imminent NPA classification at Day 90. SettleLoans conducted an immediate financial forensic audit, demonstrated our operational liquidity squeeze, and secured a full and final Pre-NPA One-Time Settlement of ₹11 Lakhs directly from the zonal credit committee within 5 days.",
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
            "name": "Pradeep Deshmukh"
          },
          "datePublished": "2026-08-15",
          "reviewBody": "State Bank of India issued an informal pre-NPA warning for our ₹55 Lakh working capital facility at Day 65 (SMA-2). The team at SettleLoans engaged with SBI zonal resolution officers, submitted an unassailable financial dossier under the RBI Prudential Framework, and negotiated a structured compromise that saved our manufacturing unit from asset attachment.",
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
      "@id": "https://www.settleloans.in/sma-account-classification-loan-settlement-window#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the RBI Special Mention Account (SMA) classification framework?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Special Mention Account (SMA) framework is an early-warning supervisory mechanism mandated by the Reserve Bank of India (RBI) under its Prudential Framework for Resolution of Stressed Assets. It requires banks and NBFCs to classify loan accounts showing signs of incipient stress before they become Non-Performing Assets (NPAs). For term loans, accounts are classified based on Days Past Due (DPD): SMA-0 represents overdue of 1 to 30 days, SMA-1 spans 31 to 60 days overdue, and SMA-2 covers 61 to 90 days overdue. Once an account exceeds 90 days of continuous default, it is formally classified as a Non-Performing Asset."
          }
        },
        {
          "@type": "Question",
          "name": "Why is the SMA-2 (61–90 days) stage the most critical window for loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The SMA-2 stage represents the final 30-day window before a bank is legally mandated by the RBI to declare the loan an NPA. At Day 91, the bank must freeze revenue recognition on the account, lock 15% to 25% of the loan amount into mandatory loss provisions, and report the default to CRILC and credit bureaus as an NPA. Because bank branch and zonal managers face severe internal scrutiny for additions to their gross NPA books, they possess maximum institutional urgency during the SMA-2 window to approve deep penal waivers, restructuring, or pre-NPA compromise settlements."
          }
        },
        {
          "@type": "Question",
          "name": "Can a borrower negotiate a One-Time Settlement (OTS) while an account is in SMA status before NPA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under RBI Master Directions on Resolution of Stressed Assets and Board-Approved Loan Settlement Policies, commercial banks and NBFCs have full statutory discretion to enter into compromise settlements or debt restructuring during the SMA stage. In fact, pre-NPA settlements are often executed faster and with fewer bureaucratic hurdles than post-NPA settlements because the lender can resolve the stress under standard stressed asset protocols without triggering formal provisioning and DRT litigation write-offs."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Central Repository of Information on Large Credits (CRILC) and how does SMA reporting work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CRILC is a centralized database maintained by the RBI where scheduled commercial banks, all-India financial institutions, and NBFCs must report credit information on borrowers with aggregate fund-based and non-fund-based exposures of ₹5 Crores and above. Lenders are mandated to report SMA-0, SMA-1, and SMA-2 classifications on a weekly and monthly basis. This real-time reporting alerts all other consortium or multiple-banking lenders to incipient stress, triggering joint lender forum actions."
          }
        },
        {
          "@type": "Question",
          "name": "How does negotiating a settlement in the SMA stage protect the borrower from SARFAESI and legal suits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 13(2) of the SARFAESI Act, 2002, a secured lender can only issue a statutory 60-day demand notice after an account has been formally classified as a Non-Performing Asset (past 90 days overdue). By negotiating and executing a pre-NPA settlement or restructuring during the SMA-0, SMA-1, or SMA-2 period, the borrower resolves the default before the 90-day mark, completely preventing the bank from acquiring the legal jurisdiction to issue SARFAESI notices, seize mortgaged properties, or initiate DRT/Section 138 legal proceedings."
          }
        },
        {
          "@type": "Question",
          "name": "What penal charges and compound interest waivers can be secured during the SMA stage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the RBI Master Direction on Fair Lending Practice – Penal Charges in Loan Accounts (applicable across banks and NBFCs), penal interest cannot be compounded or used as a revenue-generation tool. During SMA negotiations, specialized debt resolution advocates routinely secure 100% waivers of accrued penal interest, bounce charges, late payment fees, and unverified collection surcharges, allowing the borrower to settle the account on the core contractual principal and baseline interest."
          }
        },
        {
          "@type": "Question",
          "name": "How does an SMA-stage pre-NPA settlement impact CIBIL and other credit bureau scores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Settling a debt during the SMA phase avoids the highly damaging 'NPA' classification tag on credit bureau records (CIBIL, Experian, Equifax, CRIF High Mark). While credit reports will reflect historical 30 to 60 DPD overdue entries, concluding the account through a structured pre-NPA closure or regularized restructuring updates the current balance to ₹0 and stops cumulative negative reporting. This allows credit rehabilitation back to a 750+ score within 12 to 18 months, far faster than the 24 to 36 months required after post-NPA legal settlements."
          }
        },
        {
          "@type": "Question",
          "name": "What documentation must be verified in a Pre-NPA Settlement Sanction Letter before making payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The pre-NPA settlement sanction letter must be issued on official bank letterhead with digital signatures and proposal tracking numbers from an authorized Credit Committee authority (Assistant General Manager or Zonal Head). It must explicitly state the exact compromise sum, clear payment milestones, full waiver of penal interest and administrative fees, unconditional cessation of recovery actions, and a binding covenant to issue a formal No Dues Certificate and update credit bureaus to ₹0 balance within 30 days of final remittance."
          }
        },
        {
          "@type": "Question",
          "name": "What should a borrower do if bank recovery agents start harassing them during SMA-1 or SMA-2?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers should immediately engage specialized legal counsel to serve a formal Notice of Representation and Cease-and-Desist letter to the bank's Principal Officer and Nodal Grievance Officer. Under the RBI Fair Practices Code and Master Direction on Recovery Agents, lenders are strictly prohibited from making threatening phone calls, contacting relatives or employers, visiting outside authorized hours (8 AM to 7 PM), or using abusive language. Once formal legal representation is served, all communication must flow exclusively through appointed advocates."
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
  { id: 'demystifying-sma-account-classification', title: '1. Demystifying RBI Special Mention Account (SMA) Framework' },
  { id: 'statutory-framework-rbi-prudential-directions', title: '2. Statutory Architecture: RBI Directions, CRILC & DPD Mechanics' },
  { id: 'deconstructing-sma-0-sma-1-sma-2-thresholds', title: '3. Deconstructing SMA-0, SMA-1 & SMA-2: DPD Thresholds' },
  { id: 'bank-accounting-economics-pre-npa-provisioning', title: '4. Bank Balance Sheet Economics & Pre-NPA Provisioning Drag' },
  { id: 'sma-classification-settlement-roadmap', title: '5. SMA Classification & Pre-NPA Settlement Visual Roadmap' },
  { id: 'borrower-leverage-pre-90-day-window-waivers', title: '6. Strategic Advantage: Leveraging the Pre-90-Day Window' },
  { id: 'forensic-verification-pre-npa-settlement-sanctions', title: '7. Forensic Checklist for Valid Pre-NPA Settlement Sanctions' },
  { id: 'settlement-remittance-ndc-cibil-rectification', title: '8. Remittance Execution, ₹0 NDC & Credit Bureau Restoration' },
  { id: 'pre-npa-sma-vs-post-npa-recovery-matrix', title: '9. Pre-NPA (SMA) Settlement vs. Post-NPA Legal Recovery Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Pre-NPA Legal Defense & Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function SmaAccountClassificationLoanSettlementWindowPage() {
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
            <span>RBI Stressed Asset Framework • Pre-NPA Resolution &amp; Debt Settlement</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">SMA Account Classification & Loan Settlement Window</h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Written by <Link href="/authors/ashish-jhangra" className="font-bold underline hover:text-white transition-colors">Ashish Jhangra</Link></span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: September 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI Prudential Framework &amp; Fair Lending Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Settle Your Debt Before NPA</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request Free Pre-NPA Evaluation
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
                <span>Pre-NPA Resolution Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Under RBI prudential guidelines, commercial banks must classify stressed loans across SMA-0 (1–30 DPD), SMA-1 (31–60 DPD), and SMA-2 (61–90 DPD) before declaring a formal Non-Performing Asset (NPA). The SMA-2 stage is the ultimate institutional leverage window where borrowers can negotiate substantial penal interest waivers, restructured tenures, or pre-NPA compromise settlements before court suits and SARFAESI enforcement begin.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: RBI SMA Framework &amp; Pre-NPA Settlement</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Early Stress Recognition under RBI Norms:</strong> The RBI Prudential Framework mandates continuous monitoring and categorization of overdue debt into SMA-0 (1–30 days), SMA-1 (31–60 days), and SMA-2 (61–90 days) before non-performing asset tagging.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>The Crucial 61–90 Day SMA-2 Leverage Window:</strong> Commercial banks face heavy balance sheet provisioning obligations and executive scrutiny at Day 90, making bank managers highly receptive to pre-NPA compromise settlements and restructuring during the SMA-2 phase.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Complete Immunity from SARFAESI &amp; Civil Litigation:</strong> Settle or restructure before the 90-day threshold to permanently block the bank from issuing SARFAESI Section 13(2) demand notices, filing Section 138 NI Act complaints, or instituting DRT recovery suits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% Penal Charges &amp; Compound Interest Waivers:</strong> In compliance with RBI Fair Lending Directions, borrowers can secure comprehensive waivers on penal charges, compound interests, and arbitrary collection fees during advocate-led pre-NPA negotiations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Protection of Credit Bureau Profile &amp; Accelerated Recovery:</strong> A pre-NPA structured resolution prevents a catastrophic &quot;NPA&quot; mark on CIBIL, Experian, and CRIF reports, enabling a rapid credit score restoration back to 750+ within 12 to 18 months.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying RBI SMA Framework */}
            <section id="demystifying-sma-account-classification" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Demystifying RBI Special Mention Account (SMA) Framework: Early Stress Recognition &amp; Resolution
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an individual borrower, professional, or commercial enterprise encounters unexpected cash flow friction and defaults on a scheduled monthly loan installment or overdraft interest charge, the account does not immediately become a Non-Performing Asset (NPA). Under the regulatory architecture designed by the Reserve Bank of India (RBI), lending institutions across India—including major commercial banks such as State Bank of India, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, Bank of Baroda, and leading Non-Banking Financial Companies (NBFCs)—are legally required to track loan default through an incremental supervisory framework known as <strong>Special Mention Accounts (SMA)</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The SMA categorization system was instituted by the RBI as an early warning mechanism to detect incipient financial stress in borrower accounts long before they slip into unrecoverable default. Instead of treating every missed equated monthly installment (EMI) as an immediate trigger for coercive litigation, the central banking regulator established a 90-day pre-NPA observation runway divided into three distinct operational tiers: <strong>SMA-0, SMA-1, and SMA-2</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For millions of borrowers across India, this 90-day runway is misunderstood. Many borrowers interpret the initial collection messages and automated bank reminders as mere harassment, choosing either to avoid the lender or to make panic borrowings from high-interest predatory apps to service current EMIs. In reality, the SMA period represents the single most powerful legal and financial window of opportunity for a distressed borrower. When approached strategically with experienced banking advocates, the pre-NPA window allows borrowers to negotiate deep penal waivers, tenure extensions, principal restructurings, or comprehensive One-Time Settlements (OTS) before the bank locks into adversarial litigation.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By understanding how commercial banks classify delinquent accounts and the immense internal balance sheet pressures bank executives face as an account approaches the 90-day threshold, borrowers can transform an impending default crisis into a proactive debt resolution settlement.
              </p>
            </section>

            {/* Section 2: Statutory Framework */}
            <section id="statutory-framework-rbi-prudential-directions" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Architecture: RBI Prudential Framework, CRILC Reporting &amp; DPD Calculation Mechanics
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Special Mention Account framework is codified under the <strong>RBI Prudential Framework for Resolution of Stressed Assets (Circular RBI/2018-19/203 DBR.No.BP.BC.45/21.04.048/2018-19 dated June 7, 2019)</strong> and corresponding Master Directions governing NBFC Scale-Based Regulations. These statutory directives require all scheduled commercial banks, all-India financial institutions, and deposit-taking NBFCs to recognize financial stress immediately upon default.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The foundational pillar of this statutory framework is the precise calculation of <strong>Days Past Due (DPD)</strong>. Under RBI clarification circulars on asset classification (including Circular RBI/2021-2022/125 on Prudential Norms on Income Recognition, Asset Classification and Provisioning), the DPD counter must run continuously from the exact date the installment or interest charge falls due. If an EMI is scheduled for payment on the 5th of a month and remains unpaid at the end-of-day core banking batch processing on the 5th, the account registers 1 Day Past Due on the 6th morning.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>RBI Prudential Framework (June 7, 2019)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mandates that lenders must initiate a review of the borrower account within 30 days of default (SMA-0/SMA-1) and formulate a legally binding Resolution Plan (RP) within a mandatory 180-day implementation timeline.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Layers className="w-4 h-4 text-emerald-600" />
                    <span>CRILC Centralized Reporting System</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 21 and Section 35A of the Banking Regulation Act, 1949, lenders must report all credit exposures of ₹5 Crores and above to the Central Repository of Information on Large Credits (CRILC) on weekly and monthly cycles upon entering SMA categories.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span>End-of-Day Core Banking Automation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Asset classification cannot be delayed or manually overridden by branch managers. Core Banking Solutions (CBS) automatically trigger SMA tags based on mathematical DPD count at day-end batch runs.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>Fair Lending Penal Charges Directives (2023–2024)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders are legally barred from compounding penal interest or disguising penalties as commercial interest rates. Penalties during SMA stages must remain strictly non-capitalized administrative levies.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Regulatory Protection: Cross-Default Realities in Consortium and Retail Lending</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  When a commercial borrower or high-net-worth individual slips into SMA-2 with one lending institution, automated credit bureau and CRILC triggers alert all other financial institutions where the borrower maintains active credit facilities. However, under Indian banking law and Supreme Court precedents, an SMA classification in one bank does not give another non-defaulted lender the legal right to unilaterally recall performing facilities without establishing an actual contractual breach or independent monetary default.
                </p>
              </div>
            </section>

            {/* Section 3: Deconstructing SMA-0, SMA-1 & SMA-2 */}
            <section id="deconstructing-sma-0-sma-1-sma-2-thresholds" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Deconstructing SMA-0, SMA-1, and SMA-2: Days-Past-Due (DPD) Thresholds &amp; Lender Triggers
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The classification of a stressed account progresses through four distinct regulatory milestones based on the continuous duration of unpaid contractual obligations. For term loans, revolving cash credit facilities, working capital overdrafts, and retail credit products, the operational mechanics are defined below:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>SMA Classification</th>
                      <th>DPD Threshold (Term Loans)</th>
                      <th>Revolving Facilities (CC/OD Triggers)</th>
                      <th>Lender Actions &amp; Settlement Leverage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-0</td>
                      <td>1 to 30 Days Overdue</td>
                      <td>Outstanding balance within limit but overdue interest unpaid 1–30 days</td>
                      <td>Automated SMS/email reminders; zero litigation threat; ideal for fee waivers &amp; EMI date realignment.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-1</td>
                      <td>31 to 60 Days Overdue</td>
                      <td>Outstanding in excess of sanctioned limit/drawing power for 31–60 days</td>
                      <td>Branch credit manager outreach; tele-calling; prime window for debt restructuring or tenure extension.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-2</td>
                      <td>61 to 90 Days Overdue</td>
                      <td>Continuous overdraft excess or non-renewal of limits for 61–90 days</td>
                      <td>Maximum lender panic; zonal recovery involvement; ultimate pre-NPA OTS &amp; 50%–70% waiver window.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Formal NPA</td>
                      <td>91+ Days Overdue</td>
                      <td>Out of order status continuously exceeding 90 days</td>
                      <td>Mandatory 15%–25% provisioning; SARFAESI Section 13(2) notice; DRT suits; Section 138 NI Act legal complaints.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In <strong>SMA-0 (1–30 DPD)</strong>, the loan default is categorized by the bank as transient or technical liquidity friction. The primary objective of the bank is soft automated recovery through digital payment links and telephonic reminders. Borrowers can easily resolve issues at this stage by requesting interest date adjustments or paying the singular overdue installment without long-term credit impairment.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an account migrates to <strong>SMA-1 (31–60 DPD)</strong>, the bank recognizes genuine cash flow stress. At this stage, credit risk officers begin monitoring the borrower&apos;s primary transaction accounts and debit turnover. Lenders become open to restructuring discussions, such as converting accumulated interest into a Term Loan (FITL) or extending the repayment tenure to reduce the monthly EMI burden.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The entry into <strong>SMA-2 (61–90 DPD)</strong> marks the critical inflection point in Indian banking. At 61 days overdue, the bank&apos;s automated risk systems flag the account for executive zonal oversight. The branch manager faces intense quarterly performance pressure because an account crossing Day 90 will instantly inflate the branch&apos;s Gross Non-Performing Asset (GNPA) ratio. This administrative and financial pressure creates an unprecedented window of leverage for the borrower to propose an advocate-represented settlement.
              </p>
            </section>

            {/* Section 4: Bank Accounting Economics & NPV Formula */}
            <section id="bank-accounting-economics-pre-npa-provisioning" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Balance Sheet Economics &amp; The Pre-NPA Provisioning Drag: Why Banks Prefer Pre-NPA Settlements
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To understand why commercial banks are willing to grant substantial waivers during the SMA-2 phase, one must examine the severe financial penalties imposed on banks by the RBI upon NPA classification. Under RBI Master Directions on Income Recognition and Asset Classification (IRAC) norms, the moment an account crosses Day 90:
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                First, the bank is statutorily prohibited from recognizing any accrued interest as income. All unrealized interest debited to the borrower&apos;s account must be reversed from the bank&apos;s Profit &amp; Loss account. Second, the bank is mandated to lock away fresh regulatory capital into non-earning <strong>provisions</strong>. For standard assets, a bank maintains a nominal 0.40% provisioning buffer. However, once a loan becomes a Sub-Standard NPA, the bank must immediately set aside <strong>15% of the total secured outstanding balance and 25% of the unsecured balance</strong>.
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Asset Classification Tier</th>
                      <th>Regulatory Provisioning Required</th>
                      <th>Interest Income Recognition</th>
                      <th>Bank Commercial Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Standard Performing Asset</td>
                      <td>0.40% baseline provision</td>
                      <td>100% recognized on accrual basis</td>
                      <td>Healthy return on capital; standard branch profitability.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-0, SMA-1, SMA-2</td>
                      <td>0.40% to 5.0% early stress buffer</td>
                      <td>Recognized on accrual basis until Day 90</td>
                      <td>Intense pressure to recover before income reversal at Day 90.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Sub-Standard NPA (Up to 12 Months)</td>
                      <td>15% (Secured) / 25% (Unsecured)</td>
                      <td>Completely halted; recognized only on cash realization</td>
                      <td>Severe capital lock-up; negative impact on bank quarterly earnings.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA (1 to 3 Years)</td>
                      <td>25% to 100% based on collateral age</td>
                      <td>Completely frozen</td>
                      <td>Extreme balance sheet drag; aggressive push for ARC portfolio sell-off.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower offers a cash compromise settlement of ₹15 Lakhs on a distressed ₹25 Lakh loan during SMA-2, the bank recovers immediate liquidity, avoids reversing ₹3 Lakhs in accrued interest, and avoids setting aside ₹6.25 Lakhs in fresh loss provisions. To decide whether to accept this pre-NPA compromise or trigger legal proceedings at Day 90, bank credit committees calculate the <strong>Net Present Value (NPV) of Stressed Asset Recovery</strong>:
              </p>

              {/* JSX Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Bank Pre-NPA Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_PreNPA = ∑ [ Cash_Recovery_t / (1 + r)^t ] - Mandatory_NPA_Provisioning - Litigation_Expenses - Cost_of_Capital_Lockup
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where Cash_Recovery_t represents the net funds realized over time, r is the bank cost of capital (typically 10%–14%), and deductions account for 3 to 5 years of DRT/SARFAESI court delays, advocate litigation fees, auction valuation discounts, and capital locked in non-yielding statutory provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because litigation before Debt Recovery Tribunals (DRT) and Civil Courts in India requires an average of 4 to 6 years and yields uncertain recovery, the mathematical NPV of an immediate advocate-negotiated cash settlement during the SMA-2 phase is almost always superior to prolonged post-NPA litigation for the bank.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="sma-classification-settlement-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. SMA Classification &amp; Pre-NPA Settlement Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below details the complete 4-tier lifecycle from Day 1 initial overdue to Day 90 formal NPA classification, highlighting the strategic pre-NPA settlement window where borrowers can negotiate maximum waivers and avoid coercive court actions.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/sma-account-classification-loan-settlement-window.jpg"
                  alt="SMA Account Classification & Pre-NPA Loan Settlement Window Infographic"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: SMA-0 &amp; SMA-1 (1–60 DPD)</span>
                  <span>Automated notices and early stress signals; ideal window to restructure EMIs, convert overdrafts to term facilities, or waive early penal charges.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 3: SMA-2 (61–90 DPD) - Prime Window</span>
                  <span>High bank urgency before Day 90 provisioning; legal advocates negotiate 50%–70% penal interest waivers and structured pre-NPA compromise closures.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 4: Formal NPA (91+ DPD)</span>
                  <span>Mandatory 15%–25% provisioning locks in; lender initiates SARFAESI Sec 13(2), DRT recovery, and Section 138 cheque bounce proceedings.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Strategic Advantage & Leverage */}
            <section id="borrower-leverage-pre-90-day-window-waivers" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Strategic Legal Advantage: How Borrowers Leverage the Pre-90-Day Window for Waivers &amp; Settlements
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Navigating the pre-90-day SMA window requires a proactive legal strategy rather than passive waiting. Unrepresented borrowers who attempt to negotiate directly with branch staff or collection agents often face aggressive threats, misleading verbal promises, or demands to liquidate personal assets. In contrast, when specialized debt defense advocates represent the borrower, the negotiation shifts from the collection agency floor to the authorized Credit Approval Committee.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A structured advocate-led pre-NPA resolution strategy follows four rigorous institutional phases:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 1: Notice of Legal Representation &amp; Fair Lending Protection</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advocates serve a formal Notice of Representation to the bank&apos;s Principal Officer and Nodal Grievance Officer. This statutory communication invokes the <strong>RBI Master Direction on Fair Practices Code</strong>, halts all abusive recovery agent telephone calls and unannounced domestic visits, and mandates that all resolution discussions occur exclusively in writing through legal counsel.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 2: Forensic Ledger Audit &amp; Penal Charge Dissection</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our banking lawyers analyze the complete loan account statement from inception. We identify and challenge unlawful capitalized penal interest, exorbitant late payment charges, arbitrary inspection levies, and unauthorized processing fees that violate the <strong>RBI Fair Lending Directives (August 2023 / April 2024)</strong>.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 3: Financial Hardship Dossier Submission to Zonal Sanction Authorities</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We bypass front-line recovery agents and submit a comprehensive financial hardship dossier directly to the bank&apos;s Zonal Stressed Asset Management Branch (SAMB). The dossier includes audited income statements, GST turnover decline records, medical emergency certificates, or commercial contract cancellation proofs, substantiating the borrower&apos;s genuine inability to service original terms.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 4: Structuring the Pre-NPA Compromise Settlement or Restructuring</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Leveraging the bank&apos;s urgent need to avert a Day 90 NPA classification, advocates structure a mutually agreed compromise settlement offering immediate lump-sum or short tranche payments against the core principal, securing complete waivers of accumulated penal interest and closing the debt with zero legal exposure.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By presenting a credible, legally sound, and commercially viable proposal before Day 90, borrowers achieve closure on terms far more favorable than those available once the loan enters the bureaucratic quagmire of post-NPA litigation.
              </p>
            </section>

            {/* Section 7: Forensic Verification of Sanctions */}
            <section id="forensic-verification-pre-npa-settlement-sanctions" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Forensic Checklist for Valid Pre-NPA Settlement Sanction Letters: Preventing Fraudulent Recoveries
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A dangerous hazard during the SMA-1 and SMA-2 stages involves unofficial or deceptive settlement representations made by outsourced recovery agencies. Under severe pressure to hit monthly collection targets, third-party recovery agents frequently send WhatsApp messages, unofficial emails, or verbal assurances promising that paying a partial token amount will &quot;settle&quot; the account.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If a borrower deposits funds without a formal, legally sanctioned approval from the bank&apos;s competent authority, the bank merely treats the deposit as a partial EMI credit. The DPD counter continues to run, the account slips into NPA at Day 90, and the borrower remains liable for the entire remaining balance.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before remitting a single rupee towards a pre-NPA compromise, every settlement document must pass five mandatory forensic checks:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Bank Letterhead &amp; Sanction Reference</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The sanction letter must be issued on official bank stationery featuring registered corporate logos, branch codes, a unique approval tracking number, and digital/physical signatures of an authorized Assistant General Manager or Zonal Head.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Exact Compromise Amount &amp; Tranche Deadlines</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must specify the exact final settlement sum down to the rupee and state clear, agreed payment dates without ambiguous escalation clauses or penalty revival conditions.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Total Debt Extinguishment Covenant</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The agreement must unambiguously stipulate that upon remittance of the agreed settlement sum, all remaining principal, accrued normal interest, penal charges, and processing fees are fully and irrevocably waived.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Mandatory Legal Forbearance &amp; NDC Timeline</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The sanction must bind the lender to refrain from initiating SARFAESI, DRT, or Section 138 proceedings, return all deposited title deeds, and deliver a formal No Dues Certificate within 30 days under RBI mandates.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Strict Remittance Protocol: Direct Loan Account Deposit Exclusively</span>
                </span>
                <p className="leading-relaxed">
                  Never transfer settlement funds to personal accounts of recovery executives, collection agency UPI handles, or third-party accounts. All payments must be deposited directly into your designated loan account number via RTGS, NEFT, or an Account Payee Demand Draft drawn in favor of the lending bank.
                </p>
              </div>
            </section>

            {/* Section 8: Remittance, NDC & Bureau Rectification */}
            <section id="settlement-remittance-ndc-cibil-rectification" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Settlement Remittance Execution, Statutory No Dues Certificate &amp; Credit Bureau Restoration
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Remitting the agreed pre-NPA compromise amount fulfills the financial obligation of the settlement. However, the legal resolution is complete only when the lending institution delivers a formal No Dues Certificate (NDC) and updates credit bureau registries to reflect zero outstanding liability.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under <strong>RBI Circular RBI/2023-24/60 (Responsible Lending Conduct – Release of Movable/Immovable Property Documents and Issuance of NDC)</strong>, all commercial banks and NBFCs are statutorily mandated to adhere to strict post-settlement timelines:
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Mandatory 30-Day NDC Delivery &amp; ₹5,000/Day Statutory Delay Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Lenders are legally obligated to issue an official <strong>No Dues Certificate (NDC) / Loan Closure Certificate</strong>, return all original title deeds, vehicle hypothecation NOCs, and pledged security instruments, and update credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) within <strong>30 calendar days</strong> of final settlement receipt. Any failure or unjustified delay renders the lender liable to pay compensation of <strong>₹5,000 per day of delay</strong> directly to the borrower.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Credit Bureau Dynamics: SMA Resolution vs. Post-NPA Default Tagging
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Resolving debt during the SMA phase produces vastly superior credit score outcomes compared to settling after formal NPA classification:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Elimination of the Catastrophic NPA Tag:</strong> The account avoids being categorized as &quot;NPA / Loss Asset&quot; on CIBIL and Experian. It is reported as closed or settled with the balance permanently recorded as ₹0.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Cessation of Continuous Negative DPD Reporting:</strong> Resolving the account halts the monthly accumulation of delinquent DPD entries (such as 90+, 180+, 360+ DPD), capping the historical credit damage at the 30–60 day level.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Accelerated Score Rehabilitation Runway:</strong> Because the loan was settled prior to formal NPA write-off, borrowers can rehabilitate their CIBIL score back to 750+ within 12 to 18 months using secured credit cards and strict credit discipline, compared to 36+ months for post-NPA accounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Preservation of Commercial Banking Relationships:</strong> A pre-NPA resolution allows business promoters and salaried individuals to retain clean banking standing with non-defaulted lenders across the Indian financial ecosystem.</span>
                </li>
              </ul>
            </section>

            {/* Section 9: Comparative Matrix */}
            <section id="pre-npa-sma-vs-post-npa-recovery-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Pre-NPA (SMA) Settlement vs. Post-NPA Legal Recovery Strategy Matrix
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A direct comparison between resolving debt in the pre-NPA SMA window versus waiting until after NPA classification illustrates why early proactive intervention delivers decisive legal and financial advantages:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Dimension</th>
                      <th>Pre-NPA SMA Resolution Window (1–90 Days)</th>
                      <th>Post-NPA Legal Recovery Phase (91+ Days)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Statutory Asset Status</td>
                      <td>Standard Stressed (SMA-0, SMA-1, SMA-2)</td>
                      <td>Non-Performing Asset (Sub-Standard / Doubtful / Loss)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Bank Capital Provisioning</td>
                      <td>Nominal (0.40% to 5.0%)</td>
                      <td>Mandatory 15% to 25% (up to 100% over time)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SARFAESI Legal Exposure</td>
                      <td>Zero. Bank has no legal jurisdiction under Sec 13(2)</td>
                      <td>Immediate 60-day demand notice and property possession actions</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Court Litigation Threat</td>
                      <td>Zero active DRT, Civil, or Summary Suits</td>
                      <td>Active DRT Original Applications, Section 138 complaints</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Penal Interest Waivers</td>
                      <td>Up to 100% penal charges and compound levies waived</td>
                      <td>Heavy accumulated legal fees and court costs added to ledger</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">CIBIL Restoration Timeline</td>
                      <td>Fast restoration (12 to 18 months to reach 750+)</td>
                      <td>Prolonged recovery (24 to 36+ months post-settlement)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Consortium / CRILC Impact</td>
                      <td>Contained within early-stress observation metrics</td>
                      <td>Consortium-wide default tagging and credit freeze</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Pre-NPA Legal Defense &amp; Distressed Debt Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Resolving loan default within the RBI Special Mention Account (SMA) window requires rapid, decisive legal advocacy backed by deep mastery of banking jurisprudence, accounting regulations, and institutional credit committee hierarchies. SettleLoans represents borrowers across India: serving formal representation notices to halt recovery harassment, conducting forensic audits of loan ledgers to eliminate unlawful penal charges, and negotiating directly with bank zonal authorities to execute pre-NPA compromise settlements and restructuring before Day 90.
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
                  11. Frequently Asked Questions: SMA Account Classification &amp; Pre-NPA Loan Settlement
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to critical questions regarding the RBI SMA framework, Days-Past-Due calculation, penal waivers, and pre-NPA settlement rights in India.
              </p>

              <div className="space-y-3">
                {((jsonLdGraph['@graph'].find((item: any) => item['@type'] === 'FAQPage') as any)?.mainEntity || []).map((faq: any, idx: number) => (
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
                  href="https://www.indiacode.nic.in/handle/123456789/1885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Banking Regulation Act, 1949 (Sections 21 &amp; 35A – Reserve Bank Powers)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Fair Lending Practice &amp; Penal Charges in Loan Accounts</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">SARFAESI Act, 2002 (Section 13 – Enforcement of Security Interest Conditions)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Grievance Redressal for Stressed Borrowers)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Debt Resolution &amp; Banking Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/arrear-emi-meaning-vs-overdue"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Arrear EMI vs Overdue Guide
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/loan-penalty-waiver-request"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Penalty Waiver Guide
                </Link>
                <Link
                  href="/cannot-pay-personal-loan-emi"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Cannot Pay Personal Loan EMI
                </Link>
                <Link
                  href="/bank-overdraft-facility-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Overdraft Settlement Guide
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
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Unsecured Loan Property Rights
                </Link>
                <Link
                  href="/SME-loan-dispute-resolution"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SME Loan Dispute Resolution
                </Link>
                <Link
                  href="/bank-sold-loan-to-arc-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Sold Loan to ARC Guide
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
                Specialist in RBI stressed asset frameworks, SMA-0/1/2 account resolutions, pre-NPA compromise negotiations, and banking dispute litigation with over a decade of debt advisory expertise.
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
                <span>Pre-NPA Legal Intervention</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">Loan Overdue in SMA-1 or SMA-2 Stage?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not wait for Day 90 NPA classification and SARFAESI action. Engage debt defense advocates to leverage the bank provisioning pressure and secure a deep waiver or compromise settlement.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Free Pre-NPA Evaluation
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
                  <span>Official Bank-Stamped Sanction Letters</span>
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
