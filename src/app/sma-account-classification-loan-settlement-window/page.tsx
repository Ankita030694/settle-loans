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
          "reviewBody": "My business credit line of ₹42 Lakhs with HDFC Bank was 72 days overdue in SMA-2. The branch manager threatened an immediate NPA tag and SARFAESI action. SettleLoans stepped in. They sent a formal restructuring plan under RBI rules. They secured a 65% penal interest waiver and a 3-month closure plan. We stopped the NPA tag and saved our credit standing.",
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
          "reviewBody": "After hospital bills, my loans of ₹18 Lakhs with ICICI Bank slipped into SMA-1 at 45 DPD. Recovery agents began calling with threats. SettleLoans sent a formal Notice of Representation. They cited RBI Fair Lending rules to stop the calls. They also secured a pre-NPA waiver that cut my total debt.",
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
          "reviewBody": "Our MSME term loan of ₹30 Lakhs with Axis Bank was at Day 84 in SMA-2. We faced an NPA tag at Day 90. SettleLoans ran a fast financial audit. They proved our cash flow crunch. They secured a pre-NPA One-Time Settlement of ₹11 Lakhs from the zonal committee in 5 days.",
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
          "reviewBody": "State Bank of India sent a pre-NPA warning for our ₹55 Lakh facility at Day 65 in SMA-2. The SettleLoans team met SBI zonal officers. They filed a strong dossier under RBI rules. They negotiated a structured deal that saved our factory from asset seizure.",
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
            "text": "The SMA framework is an early-warning system from the Reserve Bank of India (RBI). It helps banks track loan stress before an account becomes a Non-Performing Asset (NPA). Term loans are tracked by Days Past Due (DPD). SMA-0 covers 1 to 30 days overdue. SMA-1 spans 31 to 60 days. SMA-2 covers 61 to 90 days. After 90 days of default, the loan becomes an NPA."
          }
        },
        {
          "@type": "Question",
          "name": "Why is the SMA-2 (61–90 days) stage the most critical window for loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SMA-2 is the final 30-day window before an account turns into an NPA at Day 91. At that point, banks must freeze income and set aside 15% to 25% in cash provisions. Branch managers face strict scrutiny for rising NPA numbers. This gives borrowers strong leverage to negotiate fee waivers, loan restructuring, or a pre-NPA settlement."
          }
        },
        {
          "@type": "Question",
          "name": "Can a borrower negotiate a One-Time Settlement (OTS) while an account is in SMA status before NPA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under RBI Master Directions on Stressed Assets, banks and NBFCs can agree to compromise settlements or loan restructuring during SMA stages. Pre-NPA settlements are often faster than post-NPA deals because lenders resolve the debt before mandatory court action starts."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Central Repository of Information on Large Credits (CRILC) and how does SMA reporting work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CRILC is an RBI database. Banks and NBFCs must report borrower loans of ₹5 Crores and above to CRILC. Lenders report SMA-0, SMA-1, and SMA-2 tags on weekly and monthly cycles. This real-time reporting alerts all consortium lenders about emerging loan stress."
          }
        },
        {
          "@type": "Question",
          "name": "How does negotiating a settlement in the SMA stage protect the borrower from SARFAESI and legal suits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 13(2) of the SARFAESI Act, 2002, a bank can only issue a 60-day demand notice after declaring an NPA. Settling during the SMA window clears the debt before Day 90. This prevents the bank from issuing SARFAESI notices, seizing property, or filing DRT cases."
          }
        },
        {
          "@type": "Question",
          "name": "What penal charges and compound interest waivers can be secured during the SMA stage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI rules on Fair Lending Practices, banks cannot compound penal interest. During SMA talks, legal advocates often secure 100% waivers on penal interest, bounce fees. And late charges. This lets you settle based on core principal and regular interest."
          }
        },
        {
          "@type": "Question",
          "name": "How does an SMA-stage pre-NPA settlement impact CIBIL and other credit bureau scores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Settling during the SMA stage keeps the damaging 'NPA' tag off your credit report. While reports show past 30 to 60 DPD entries, closing the account sets the active balance to ₹0. This allows your credit score to recover to 750+ within 12 to 18 months."
          }
        },
        {
          "@type": "Question",
          "name": "What documentation must be verified in a Pre-NPA Settlement Sanction Letter before making payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The sanction letter must be on official bank letterhead with digital signatures and approval reference numbers from a senior credit officer. It must state the exact settlement amount, payment dates, full waiver of penal fees. And an agreement to issue a ₹0 No Dues Certificate within 30 days."
          }
        },
        {
          "@type": "Question",
          "name": "What should a borrower do if bank recovery agents start harassing them during SMA-1 or SMA-2?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers should hire legal counsel to send a formal Notice of Representation to the bank Nodal Officer. Under RBI Fair Practice Codes, agents cannot make threatening calls or visit outside 8 AM to 7 PM. Once legal notice is served, the bank must talk only through your lawyer."
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
                Under RBI rules, banks track overdue debt across SMA-0 (1–30 DPD), SMA-1 (31–60 DPD), and SMA-2 (61–90 DPD) before declaring an NPA. The SMA-2 stage offers the best settlement window. Borrowers can secure penal fee waivers, tenure extensions, or a pre-NPA compromise before court action starts.
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
                  <span><strong>Early Stress Recognition under RBI Norms:</strong> The RBI Prudential Framework tracks overdue loans across SMA-0 (1–30 days), SMA-1 (31–60 days), and SMA-2 (61–90 days) before NPA tagging.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>The Crucial 61–90 Day SMA-2 Leverage Window:</strong> Banks face heavy cash provision rules and audits at Day 90. This makes managers eager to approve pre-NPA settlements in SMA-2.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Complete Immunity from SARFAESI &amp. Civil Litigation:</strong> Settling before Day 90 stops the bank from issuing SARFAESI Section 13(2) notices, Section 138 NI Act pleas, or DRT claims.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% Penal Charges &amp. Compound Interest Waivers:</strong> Under RBI Fair Lending rules, borrowers can secure full waivers on penal interest, compound fees. And bounce charges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Protection of Credit Bureau Profile &amp. Accelerated Recovery:</strong> A pre-NPA settlement prevents an NPA tag on CIBIL and helps rebuild your score to 750+ within 12 to 18 months.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying RBI SMA Framework */}
            <section id="demystifying-sma-account-classification" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Demystifying RBI Special Mention Account (SMA) Framework</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you miss a loan payment, your account does not turn into an NPA overnight. Under Reserve Bank of India (RBI) rules, banks and NBFCs must track late payments through an early stage called <strong>Special Mention Accounts (SMA)</strong>. Major lenders like SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak, and Bank of Baroda follow this rule.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The RBI created the SMA system as an early-warning tool. It flags debt stress before default becomes permanent. Instead of suing right away, banks use a 90-day review period split into three levels: <strong>SMA-0, SMA-1, and SMA-2</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many borrowers misunderstand this 90-day window. Some panic and borrow from costly apps. Others avoid bank calls. In truth, the SMA window is your best chance to settle. With the help of debt advocates, you can secure fee waivers, longer loan terms, or a One-Time Settlement (OTS) before court action starts.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Knowing how banks classify debt gives you leverage. You can turn early default stress into an affordable settlement.
              </p>
            </section>

            {/* Section 2: Statutory Framework */}
            <section id="statutory-framework-rbi-prudential-directions" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Statutory Architecture</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The SMA system is set under the <strong>RBI Prudential Framework for Resolution of Stressed Assets (Circular RBI/2018-19/203 dated June 7, 2019)</strong>. It requires all banks and NBFCs to spot loan stress as soon as an EMI is missed.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The core metric is <strong>Days Past Due (DPD)</strong>. Under RBI Circular RBI/2021-2022/125 on IRACP norms, the DPD counter runs from the exact due date. If an EMI is due on the 5th and unpaid by day-end processing, the loan registers 1 DPD on the 6th morning.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>RBI Prudential Framework (June 7, 2019)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks must review stressed accounts within 30 days of default. They must frame a viable Resolution Plan within 180 days.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Layers className="w-4 h-4 text-emerald-600" />
                    <span>CRILC Centralized Reporting System</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 21 and Section 35A of the Banking Regulation Act, 1949, lenders report loans of ₹5 Crores and above to CRILC on weekly and monthly cycles.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span>End-of-Day Core Banking Automation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Branch staff cannot delay or change SMA tags. Core banking software assigns DPD tags automatically during night batch runs.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>Fair Lending Penal Charges Directives (2023–2024)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders cannot compound penal interest or add extra rates. fines during SMA stages must remain strictly non-interest fees.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Regulatory Protection: Cross-Default Realities in Consortium and Retail Lending</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  When a loan enters SMA-2, CRILC and bureau alerts notify your other lenders. However, under Indian banking law, an SMA tag in one bank does not let another bank recall performing loans without a direct contract breach.
                </p>
              </div>
            </section>

            {/* Section 3: Deconstructing SMA-0, SMA-1 & SMA-2 */}
            <section id="deconstructing-sma-0-sma-1-sma-2-thresholds" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Deconstructing SMA-0, SMA-1, and SMA-2</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Loan stress moves through four stages based on how long payments are overdue. Here is how term loans, credit lines. And overdrafts are classified:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>SMA Classification.</th>
                      <th>DPD Threshold (Term Loans).</th>
                      <th>Revolving Facilities (CC/OD Triggers).</th>
                      <th>Lender Actions &amp. Settlement Leverage.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-0.</td>
                      <td>1 to 30 Days Overdue.</td>
                      <td>Balance within limit. But interest unpaid for 1–30 days.</td>
                      <td>Automated SMS and email reminders. zero legal threat. easy fee waivers.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-1.</td>
                      <td>31 to 60 Days Overdue.</td>
                      <td>Balance exceeds sanctioned limit for 31–60 days.</td>
                      <td>Credit officer calls. great window for restructuring or tenure extension.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-2.</td>
                      <td>61 to 90 Days Overdue.</td>
                      <td>Overdraft excess or unrenewed limits for 61–90 days.</td>
                      <td>High bank urgency. zonal review. best window for 50%–70% OTS waivers.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Formal NPA.</td>
                      <td>91+ Days Overdue.</td>
                      <td>Account out of order for more than 90 days.</td>
                      <td>Mandatory 15%–25% provisioning. SARFAESI Section 13(2) notices. DRT suits.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In <strong>SMA-0 (1–30 DPD)</strong>, the bank sees default as short-term cash friction. The bank sends digital payment links and reminders. You can clear the single due EMI or adjust payment dates without harming your credit profile.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In <strong>SMA-1 (31–60 DPD)</strong>, the bank sees real cash flow stress. Credit officers track account turnover. Lenders become open to restructuring. For example, funding unpaid interest into a term loan or extending tenure.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Entry into <strong>SMA-2 (61–90 DPD)</strong> is the turning point. At 61 days overdue, risk teams flag the account. Branch managers face quarterly pressure to avoid new NPAs. This urgency gives you massive leverage to negotiate a compromise OTS.
              </p>
            </section>

            {/* Section 4: Bank Accounting Economics & NPV Formula */}
            <section id="bank-accounting-economics-pre-npa-provisioning" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank SMA Accounting &amp; Balance Sheet Economics</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks offer large waivers in SMA-2 because NPA rules are costly. Under RBI Income Recognition and Asset Classification (IRAC) norms, crossing Day 90 triggers two fines:
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                First, the bank must stop recording interest as income. It must reverse unpaid interest from its books. Second, it must lock cash in <strong>loss provisions</strong>. Standard loans require just 0.40% provisioning. But a Sub-Standard NPA requires <strong>15% for secured loans and 25% for unsecured loans</strong>.
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Asset Classification Tier.</th>
                      <th>Regulatory Provisioning Required.</th>
                      <th>Interest Income Recognition.</th>
                      <th>Bank Commercial Impact.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Standard Performing Asset.</td>
                      <td>0.40% baseline provision.</td>
                      <td>100% recognized on accrual basis.</td>
                      <td>Normal return on capital. regular branch earnings.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-0, SMA-1, SMA-2.</td>
                      <td>0.40% to 5.0% early stress buffer.</td>
                      <td>Recognized on accrual basis until Day 90.</td>
                      <td>High pressure to collect before income reversal at Day 90.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Sub-Standard NPA (Up to 12 Months).</td>
                      <td>15% (Secured) / 25% (Unsecured).</td>
                      <td>Halted. recognized only on cash receipt.</td>
                      <td>Heavy capital lock-up. hits quarterly bank profit.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA (1 to 3 Years).</td>
                      <td>25% to 100% based on asset age.</td>
                      <td>Completely frozen.</td>
                      <td>High drag on balance sheet. pushes loan sale to ARCs.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If you offer a cash settlement in SMA-2, the bank gets instant recovery. It avoids interest reversals and loss provisioning. Bank credit committees evaluate settlements using the <strong>Net Present Value (NPV) Recovery Benchmark</strong>:
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
                  Cash_Recovery_t is estimated cash flow. r is cost of capital. Deductions include legal fees and capital locked in RBI provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Court battles in DRT take 4 to 6 years with uncertain outcomes. That is why an immediate cash settlement during SMA-2 is mathematically better for the bank.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="sma-classification-settlement-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. SMA Classification &amp; Pre-NPA Settlement Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below shows the full path from Day 1 overdue to Day 90 NPA tagging. It highlights the pre-NPA window where you can secure maximum waivers and avoid court action.
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
                  <span>Automated alerts; prime time to adjust EMIs, convert credit lines, or waive fees.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 3: SMA-2 (61–90 DPD) - Prime Window</span>
                  <span>Bank urgency peaks before Day 90; advocates secure 50%–70% waivers and structured OTS deals.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 4: Formal NPA (91+ DPD)</span>
                  <span>Mandatory 15%–25% provisioning starts; bank files SARFAESI Sec 13(2), DRT, and Sec 138 pleas.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Strategic Advantage & Leverage */}
            <section id="borrower-leverage-pre-90-day-window-waivers" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Strategic Legal Advantage</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Handling the pre-90-day SMA window needs proactive legal steps. Borrowers who negotiate alone often face threats from collection agents or demands to sell assets. With legal representation, talks move from recovery agents to the bank credit committee.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A structured legal strategy follows four clear phases:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 1: Notice of Legal Representation &amp; Fair Lending Protection</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advocates serve a formal notice to the bank Nodal Officer. This invokes the <strong>RBI Fair Practices Code</strong>, halts agent calls and home visits. And requires all talks to be in writing through legal counsel.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 2: Forensic Ledger Audit &amp; Penal Charge Dissection</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our lawyers review loan account statements from start to finish. We dispute unlawful compound interest and late fees under <strong>RBI Fair Lending Directives (August 2023 / April 2024)</strong>.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 3: Financial Hardship Dossier Submission to Zonal Sanction Authorities</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We bypass front-line recovery staff. We submit a complete financial hardship dossier directly to the bank Zonal Stressed Asset branch. The file includes income drops, tax files, or medical records to prove genuine distress.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 4: Structuring the Pre-NPA Compromise Settlement or Restructuring</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Using the bank need to prevent an NPA tag at Day 90, advocates structure a compromise settlement. This secures full waivers of penal interest and closes the debt with zero court risk.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By presenting a clear legal settlement before Day 90, you get far better terms than after an account goes to court.
              </p>
            </section>

            {/* Section 7: Forensic Verification of Sanctions */}
            <section id="forensic-verification-pre-npa-settlement-sanctions" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. SMA Settlement Forensic Sanction Checklist</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A big risk in SMA-1 and SMA-2 is fake settlement offers from third-party recovery agents. Under pressure to hit monthly targets, agents send unofficial messages promising to settle debt for a small token sum.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If you pay without a formal approval letter from the bank, the bank treats the cash as a normal partial payment. The DPD clock keeps ticking, the loan turns into an NPA at Day 90. And you still owe the full balance.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before paying any settlement sum, check these five essential safety points:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Bank Letterhead &amp; Sanction Reference</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The sanction letter must be on official bank letterhead with bank logos, approval tracking numbers. And authorized bank signatures.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Exact Compromise Amount &amp; Tranche Deadlines</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must state the exact final settlement sum in rupees, with clear payment dates and no hidden penalty terms.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Total Debt Extinguishment Covenant</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The agreement must confirm that once you pay the settlement sum, all remaining principal, interest. And penal fees are fully waived.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Mandatory Legal Forbearance &amp; NDC Timeline</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The sanction must stop SARFAESI or Section 138 actions, return original title deeds. And promise a No Dues Certificate within 30 days under RBI rules.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Strict Remittance Protocol: Direct Loan Account Deposit Exclusively</span>
                </span>
                <p className="leading-relaxed">
                  Never pay into personal accounts or agent UPI handles. Always deposit settlement funds directly into your loan account via RTGS, NEFT, or an Account Payee Demand Draft drawn in favor of the bank.
                </p>
              </div>
            </section>

            {/* Section 8: Remittance, NDC & Bureau Rectification */}
            <section id="settlement-remittance-ndc-cibil-rectification" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Settlement Remittance Execution, Statutory No Dues</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Paying the agreed settlement sum fulfills your financial duty. But the legal process ends only when the bank issues a formal No Dues Certificate (NDC) and updates credit bureaus to ₹0 balance.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under <strong>RBI Circular RBI/2023-24/60 (Responsible Lending Conduct)</strong>, all banks and NBFCs must follow strict settlement timelines:
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Mandatory 30-Day NDC Delivery &amp; ₹5,000/Day Statutory Delay Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Lenders must issue a <strong>No Dues Certificate (NDC)</strong>, return all original property deeds or vehicle NOCs. And update credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) within <strong>30 calendar days</strong>. If the bank delays without cause, it must pay payout of <strong>₹5,000 per day of delay</strong> directly to the borrower.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Credit Bureau Dynamics: SMA Resolution vs. Post-NPA Default Tagging
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Settling debt during the SMA stage gives you much better credit results than waiting for an NPA tag:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>No NPA Tag on Credit Bureau:</strong> The loan avoids the &quot;NPA / Loss Asset&quot. mark on CIBIL and Experian. The active balance is set to ₹0.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Stops Negative DPD Accumulation:</strong> Closing the account halts late DPD tracking (such as 90+ or 180+ DPD), limiting credit damage to the 30–60 day mark.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Faster Credit Score Recovery:</strong> Because the loan settled before NPA write-off, you can rebuild your CIBIL score to 750+ within 12 to 18 months, instead of 36+ months.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Preserves Banking Relationships:</strong> A clean pre-NPA closure helps you keep good banking ties with other non-defaulted lenders across India.</span>
                </li>
              </ul>
            </section>

            {/* Section 9: Comparative Matrix */}
            <section id="pre-npa-sma-vs-post-npa-recovery-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Pre-NPA (SMA) Settlement vs. Post-NPA Legal Recovery</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Comparing pre-NPA settlement with post-NPA litigation shows why acting early protects your rights and finances:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Dimension.</th>
                      <th>Pre-NPA SMA Resolution Window (1–90 Days).</th>
                      <th>Post-NPA Legal Recovery Phase (91+ Days).</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Statutory Asset Status.</td>
                      <td>Standard Stressed (SMA-0, SMA-1, SMA-2).</td>
                      <td>Non-Performing Asset (Sub-Standard / Doubtful / Loss).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Bank Capital Provisioning.</td>
                      <td>Nominal (0.40% to 5.0%).</td>
                      <td>Mandatory 15% to 25% (up to 100% over time).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SARFAESI Legal Exposure.</td>
                      <td>Zero. Bank has no power under Sec 13(2).</td>
                      <td>60-day demand notice and property auction actions.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Court Litigation Threat.</td>
                      <td>Zero active DRT or Summary Suits.</td>
                      <td>Active DRT suits and Section 138 complaints.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Penal Interest Waivers.</td>
                      <td>Up to 100% penal charges and compound fees waived.</td>
                      <td>Heavy court fees and legal charges added to debt.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">CIBIL Restoration Timeline.</td>
                      <td>Fast recovery (12 to 18 months to reach 750+).</td>
                      <td>Slow recovery (24 to 36+ months post-settlement).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Consortium / CRILC Impact.</td>
                      <td>Kept within early-stress tracking metrics.</td>
                      <td>Consortium-wide default alert and credit freeze.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Pre-NPA Legal Defense</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Resolving debt during the SMA window requires prompt legal action. SettleLoans helps borrowers across India. We serve formal notices to stop recovery agent calls. We review loan ledgers to remove illegal penal fees. Finally, we negotiate directly with bank zonal authorities to secure pre-NPA compromise settlements and restructuring before Day 90.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: SMA Account Classification</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to critical questions regarding the RBI SMA framework, Days-Past-Due calculation, penal waivers. And pre-NPA settlement rights in India.
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
                    <div className="font-bold text-slate-900 text-sm">Ashish Jhangra</div>
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Expert in RBI stressed asset rules, SMA-0/1/2 account resolutions, pre-NPA settlements. And banking disputes with over 10 years of experience.
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
              <div className="font-bold text-base text-white mb-2">Loan Overdue in SMA-1 or SMA-2 Stage?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not wait for Day 90 NPA tagging or SARFAESI action. Hire debt defense advocates to leverage bank provisioning urgency and secure a deep settlement.
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
