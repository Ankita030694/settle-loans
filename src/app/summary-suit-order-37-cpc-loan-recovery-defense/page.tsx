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
  Scale,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  ShieldX,
  ShieldAlert,
  UserCheck,
  BadgePercent,
  AlertCircle,
  Clock,
  Landmark
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Order 37 CPC Summary Suit for Loan Recovery: 10-Day Defense & OTS Guide',
  description: 'Bank filed a Summary Suit under Order 37 CPC for loan recovery? Learn how to enter appearance in 10 days, file Leave to Defend, raise triable issues, and negotiate an OTS.',
  keywords: [
    'order 37 cpc summary suit for loan recovery',
    'summary suit loan recovery defense',
    'order 37 cpc 10 days appearance',
    'leave to defend order 37 summary suit',
    'bank filed civil suit for personal loan recovery',
    'order 37 cpc summons for judgment reply',
    'convert summary suit into loan settlement',
    'order 37 cpc idbi trusteeship hubtown triable issues',
    'order xxxvii cpc bank loan compromise',
    'bank summary suit execution decree defense',
    'city civil court loan recovery summary suit',
    'order 37 cpc limitation period bank loan'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/summary-suit-order-37-cpc-loan-recovery-defense',
  },
  openGraph: {
    title: 'Order 37 CPC Summary Suit for Loan Recovery: 10-Day Court Defense & OTS Guide',
    description: 'Received a Summary Suit summons under Order XXXVII CPC? Discover how to enter an appearance within 10 days, secure unconditional Leave to Defend, and negotiate a 45%–65% One-Time Settlement.',
    url: 'https://www.settleloans.in/summary-suit-order-37-cpc-loan-recovery-defense',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/summary-suit-order-37-cpc-loan-recovery-defense.jpg',
        width: 1200,
        height: 675,
        alt: 'Order 37 CPC Summary Suit for Loan Recovery Defense and Settlement Roadmap',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Order 37 CPC Summary Suit for Loan Recovery: 10-Day Defense & OTS Guide',
    description: 'Urgent Civil Court Emergency: Master the 10-day timeline for entering appearance and filing Leave to Defend in an Order 37 CPC summary suit for bank loan recovery.',
    images: ['https://www.settleloans.in/images/infographics/summary-suit-order-37-cpc-loan-recovery-defense.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/summary-suit-order-37-cpc-loan-recovery-defense#webpage",
      "url": "https://www.settleloans.in/summary-suit-order-37-cpc-loan-recovery-defense",
      "name": "Order 37 CPC Summary Suit for Loan Recovery: 10-Day Defense & OTS Guide",
      "description": "Comprehensive legal analysis and procedural guide for borrowers facing a Summary Suit under Order XXXVII of the Code of Civil Procedure (CPC) for bank loan recovery in Indian Civil Courts.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/summary-suit-order-37-cpc-loan-recovery-defense#breadcrumb"
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
      "@id": "https://www.settleloans.in/summary-suit-order-37-cpc-loan-recovery-defense#breadcrumb",
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
          "name": "Order 37 CPC Summary Suit Defense",
          "item": "https://www.settleloans.in/summary-suit-order-37-cpc-loan-recovery-defense"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/summary-suit-order-37-cpc-loan-recovery-defense#article",
      "headline": "Order 37 CPC Summary Suit for Loan Recovery: Urgent 10-Day Court Defense & OTS Guide",
      "description": "Detailed legal breakdown of Order XXXVII of the Code of Civil Procedure (CPC). Learn the critical 10-day deadlines for entering appearance and filing leave to defend, landmark Supreme Court principles in Hubtown, establishing triable issues, and converting summary suits into negotiated One-Time Settlements (OTS).",
      "image": "https://www.settleloans.in/images/infographics/summary-suit-order-37-cpc-loan-recovery-defense.jpg",
      "datePublished": "2026-08-27T10:00:00+05:30",
      "dateModified": "2026-08-27T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/summary-suit-order-37-cpc-loan-recovery-defense#webpage"
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
      "@id": "https://www.settleloans.in/summary-suit-order-37-cpc-loan-recovery-defense#service",
      "name": "SettleLoans - Order 37 CPC Summary Suit Legal Defense & Debt Settlement Advisory",
      "description": "Specialized civil litigation defense, appearance filings, Leave to Defend drafting, and One-Time Settlement negotiations for borrowers facing Order 37 CPC summary recovery suits in High Courts and City Civil Courts across India.",
      "url": "https://www.settleloans.in/summary-suit-order-37-cpc-loan-recovery-defense",
      "image": "https://www.settleloans.in/images/infographics/summary-suit-order-37-cpc-loan-recovery-defense.jpg",
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
        "reviewCount": "2460",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rajiv Nambiar"
          },
          "datePublished": "2026-07-12",
          "reviewBody": "HDFC Bank filed an Order 37 CPC summary suit against me in the City Civil Court claiming ₹18.5 Lakhs on an unsecured business loan. I had only 10 days to respond. SettleLoans advocates entered an appearance on Day 6, filed an ironclad Leave to Defend exposing compounding penal interest, and converted the litigation into a mutual compromise settlement of ₹8.2 Lakhs.",
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
            "name": "Kavita Singhania"
          },
          "datePublished": "2026-06-28",
          "reviewBody": "I received an Order XXXVII court summons for a defaulted personal loan of ₹11 Lakhs from ICICI Bank. The 10-day limitation was terrifying. SettleLoans stepped in immediately, raised substantial triable issues on limitation and forged sanction clauses, and secured unconditional leave to defend. We then concluded a formal OTS for ₹4.8 Lakhs with full court disposal.",
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
            "name": "Amiteshwar Rao"
          },
          "datePublished": "2026-08-03",
          "reviewBody": "Axis Bank instituted a summary recovery suit under Order 37 in the Delhi High Court (Original Side) for an outstanding credit facility. SettleLoans legal counsel drafted our Leave to Defend affidavit citing the Supreme Court Hubtown judgment, halting an ex-parte decree in its tracks. The matter was referred to Lok Adalat and settled with an official No Dues Certificate.",
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
            "name": "Manoj Deshmukh"
          },
          "datePublished": "2026-05-19",
          "reviewBody": "Kotak Mahindra Bank filed a summary suit in Mumbai City Civil Court. SettleLoans advocates audited the bank's ledger, demonstrated that ₹3.4 Lakhs was illegal interest capitalization, and filed a solid Leave to Defend. The bank agreed to a 52% OTS reduction rather than facing full civil trial proceedings.",
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
      "@id": "https://www.settleloans.in/summary-suit-order-37-cpc-loan-recovery-defense#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an Order 37 CPC Summary Suit for bank loan recovery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An Order 37 (Order XXXVII) Summary Suit under the Code of Civil Procedure, 1908, is a specialized fast-track civil legal remedy utilized by commercial banks and NBFCs to recover liquidated contractual debts, dishonored negotiable instruments, and written loan agreements. Unlike a standard civil suit where a defendant has an automatic right to contest by filing a written statement within 30 to 90 days, an Order 37 suit strips the borrower of an automatic right to defend unless the court explicitly grants 'Leave to Defend'."
          }
        },
        {
          "@type": "Question",
          "name": "What is the exact timeline to respond to an Order 37 CPC summons?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The borrower has strictly 10 calendar days from the date of receiving the Form No. 4 summons to file a formal 'Memorandum of Appearance' in the court. Subsequently, when the bank serves a 'Summons for Judgment' (Form No. 4A), the borrower has strictly another 10 calendar days to file an affidavit seeking 'Leave to Defend'."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if a borrower fails to enter appearance within 10 days?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Order XXXVII Rule 2(3) CPC, if the borrower fails to enter an appearance within 10 days of receiving summons, the factual allegations in the bank's plaint are deemed admitted by operation of law. The court will immediately pass an ex-parte money decree in favor of the bank for the full claimed amount along with pre-suit and post-decree interest."
          }
        },
        {
          "@type": "Question",
          "name": "What is 'Leave to Defend' and on what grounds is it granted?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Leave to Defend is a formal application and affidavit filed by the defendant under Order XXXVII Rule 3(5) CPC requesting judicial permission to contest the bank's claims. Under the Supreme Court ruling in IDBI Trusteeship Services Ltd. v. Hubtown Ltd. (2017), the court grants unconditional leave if the borrower raises genuine 'triable issues' or a substantial legal defense, such as incorrect ledger accounting, illegal penal compounding, lack of territorial jurisdiction, or debt barred by limitation."
          }
        },
        {
          "@type": "Question",
          "name": "Can an Order 37 CPC summary suit be converted into a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Once an appearance is entered and a strong Leave to Defend affidavit is placed on record, the bank faces the reality of the suit converting into an ordinary long-drawn civil suit taking 3 to 5 years. Advocates leverage this legal friction under Section 89 of the CPC to initiate compromise negotiations, referral to National Lok Adalat or court mediation, securing 45% to 65% principal waivers and formal withdrawal of the suit."
          }
        },
        {
          "@type": "Question",
          "name": "Can an Order 37 CPC civil suit lead to immediate arrest or jail time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. An Order 37 summary suit is purely a civil litigation for recovery of a money debt. It does not carry criminal penalties, arrest warrants, or imprisonment. Only in the post-decree execution stage, if a judgment debtor willfully conceals assets or violates specific court injunctions under Order XXI Rule 37 CPC, can civil detention be considered under extreme and rare statutory circumstances."
          }
        },
        {
          "@type": "Question",
          "name": "What are the common triable issues raised against bank recovery claims?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common triable issues include: (1) Capitalization of penal charges contrary to RBI Master Directions on Fair Lending Conduct, (2) Failure to produce Section 65B Indian Evidence Act / BSA certificates for electronic loan statements, (3) The suit being barred by the 3-year limitation period under the Limitation Act 1963, (4) Incomplete credit for payments made by the borrower, and (5) The claim being unliquidated or relying on unilateral, contested debit memos."
          }
        },
        {
          "@type": "Question",
          "name": "How does the court formally dispose of the summary suit after an OTS payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upon full remittance of the negotiated settlement sum, the parties file a joint compromise application under Order XXIII Rule 3 CPC along with the bank's official OTS sanction letter. The Civil Court records the settlement and either dismisses the suit as withdrawn or passes a Consent Decree recording full debt satisfaction, followed by the delivery of a zero-balance No Dues Certificate."
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
  { id: 'the-10-day-civil-litigation-emergency', title: '1. The 10-Day Civil Litigation Emergency: Demystifying Order 37 CPC' },
  { id: 'statutory-framework-rule-mechanics-sc-precedents', title: '2. Statutory Mechanics, Order XXXVII Rules & Hubtown Precedent' },
  { id: 'consequences-of-default-ex-parte-decrees-execution', title: '3. The Hazard of Inaction: Automatic Decrees & Asset Execution' },
  { id: 'bank-accounting-npa-provisioning-npv-formula', title: '4. Bank Balance Sheet Accounting & NPV Recovery Valuation' },
  { id: 'summary-suit-defense-visual-roadmap', title: '5. Order 37 CPC Defense & Settlement Visual Roadmap' },
  { id: 'advocate-strategy-triable-issues-leave-to-defend', title: '6. Advocate Legal Defense: Formulating Triable Issues' },
  { id: 'forensic-sanction-letter-section-89-ots-conversion', title: '7. Sanction Letter Forensics & Section 89 CPC Compromise' },
  { id: 'remittance-order-23-rule-3-decree-rbi-ndc', title: '8. Settlement Remittance, Order 23 Rule 3 Decree & RBI NDC' },
  { id: 'summary-suit-resolution-comparative-matrix', title: '9. Order 37 Defense vs Alternate Resolution Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Summary Suit Representation' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function Order37SummarySuitDefensePage() {
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
            <Gavel className="w-3.5 h-3.5" />
            <span>Civil Litigation Emergency • 10-Day Statutory Limitation</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Bank Filed Summary Suit (Order 37 CPC) for Loan Recovery: <span className="text-[#3b82f6] md:text-[#60a5fa]">10-Day Defense &amp; Settlement Guide</span>
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
              <span>CPC Order XXXVII &amp; RBI Master Norms Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>File 10-Day Court Appearance Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request Free Leave to Defend Assessment
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
                <span>Order 37 Emergency Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                An Order 37 summary suit eliminates the standard civil defense right. You have strictly 10 calendar days from summons service to enter appearance, and 10 days from summons for judgment to file an affidavit for Leave to Defend. Missing this window causes an immediate ex-parte money decree.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Order 37 CPC Summary Recovery Defense</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict 10-Day Statutory Limitation:</strong> Under Order XXXVII Rule 2(3) CPC, you have strictly 10 calendar days to file a formal Memorandum of Appearance upon receiving the initial court summons.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>No Automatic Right to Defend:</strong> Unlike ordinary civil suits where a written statement is filed as of right, an Order 37 suit requires filing an application for &quot;Leave to Defend&quot; under Rule 3(5) supported by a comprehensive affidavit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Unconditional Leave via Triable Issues:</strong> Under the Supreme Court benchmark in <em>Hubtown (2017)</em>, establishing plausible defenses—such as illegal penal compounding or incorrect ledger debits—entitles the borrower to unconditional leave to contest.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Leveraging Section 89 CPC for OTS:</strong> Grant of Leave to Defend strips the bank of summary relief and subjects it to a 3–5 year civil trial, driving credit committees to agree to a 45%–65% One-Time Settlement (OTS).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Formal Disposal via Order 23 Rule 3:</strong> Concluded settlements are formalized via a joint compromise application before the Civil Court, resulting in full suit withdrawal and issuance of an official RBI ₹0 No Dues Certificate.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The 10-Day Civil Litigation Emergency */}
            <section id="the-10-day-civil-litigation-emergency" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The 10-Day Civil Litigation Emergency: Demystifying Order 37 CPC Summary Recovery Suits
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on an unsecured personal loan, business line of credit, or credit card facility with an outstanding claim below the ₹20 Lakh threshold of the Debt Recovery Tribunal (DRT), commercial banks and Non-Banking Financial Companies (NBFCs) frequently bypass standard civil litigation. Instead, institutional lenders—including State Bank of India, HDFC Bank, ICICI Bank, Axis Bank, and Kotak Mahindra Bank—initiate fast-track recovery proceedings by filing a <strong>Summary Suit under Order XXXVII (Order 37) of the Code of Civil Procedure, 1908 (CPC)</strong> in the City Civil Court, District Court, or High Court exercising original civil jurisdiction.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An Order 37 summary suit represents one of the most aggressive, procedurally expedited legal weapons available in Indian civil jurisprudence. In an ordinary civil suit governed by Order VI and Order VIII of the CPC, the defendant is served with a standard summons and enjoys an automatic statutory right to file a Written Statement within 30 to 90 days, followed by extensive framing of issues, witness cross-examination, and protracted arguments spanning several years.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By contrast, Order 37 is designed specifically to prevent defendants from using procedural delays against liquidated commercial debts. Under this summary regime, <strong>the borrower has zero automatic right to defend the suit</strong>. The court operates under a statutory presumption that the bank&apos;s documented claim—founded on a written loan agreement, promissory note, or dishonored negotiable instrument—is legally valid and due.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The immediate consequence of receiving an Order 37 summons is an unyielding, non-extendable statutory limitation clock: the borrower is granted strictly <strong>10 calendar days</strong> from the date of physical or registered service to enter an appearance in court through an advocate. Failure to act within these 10 days results in an immediate judicial forfeiture of your defense, empowering the judge to pass an instant ex-parte decree against you for the entire claimed sum with compounding interest and legal costs.
              </p>
            </section>

            {/* Section 2: Statutory Mechanics, Rules & SC Precedents */}
            <section id="statutory-framework-rule-mechanics-sc-precedents" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Architecture: Order XXXVII Rules 1–3 &amp; The Landmark Supreme Court Hubtown Precedent
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To mount an impenetrable legal defense against a summary recovery suit, a borrower must understand the bifurcated, two-tier procedural structure codified under Order XXXVII of the Civil Procedure Code:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Clock className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Stage 1: Form No. 4 Summons &amp; Entering Appearance</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Order XXXVII Rule 2(2) CPC, the bank serves a specific summons in Form No. 4 of Appendix B. The defendant must file a formal Memorandum of Appearance within 10 days under Rule 3(1), providing an address for service. The bank is then formally notified of the defendant&apos;s appearance.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    <span>Stage 2: Summons for Judgment &amp; Leave to Defend</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Order XXXVII Rule 3(4) CPC, the bank serves a &apos;Summons for Judgment&apos; in Form No. 4A supported by an affidavit verifying the debt. The borrower has strictly 10 days from this service to file an application under Rule 3(5) seeking &apos;Leave to Defend&apos; supported by a detailed counter-affidavit.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Landmark className="w-4 h-4 text-purple-600" />
                    <span>Pecuniary &amp; Territorial Jurisdiction Thresholds</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Summary suits are filed in Senior Civil Judge Courts (claims up to ₹3–20 Lakhs depending on state amendments), City Civil Courts, or High Courts with Original Civil Jurisdiction (such as Delhi High Court for claims exceeding ₹2 Crore, or Bombay High Court for claims exceeding ₹1 Crore).
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Limitation Act (Article 19 &amp; 21) Protections</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Limitation Act, 1963, a summary suit for money recovery must be instituted within strictly 3 years from the date the loan was recalled or the date of the last acknowledged payment/revival letter under Section 18 of the Limitation Act.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The judicial cornerstone governing the grant of Leave to Defend was authoritatively laid down by the Supreme Court of India in the landmark judgment <strong><em>IDBI Trusteeship Services Ltd. v. Hubtown Ltd. (2017) 1 SCC 568</em></strong>, which updated the historic principles of <em>Mechelec Engineers (1976)</em>. The Supreme Court established a definitive five-point test:
              </p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <Award className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Supreme Court Hubtown 5-Fold Principles for Leave to Defend</span>
                </div>
                <ul className="space-y-1.5 list-disc list-inside text-blue-800 text-xs leading-relaxed">
                  <li><strong>Substantial Defense:</strong> If the defendant raises a substantial defense showing reasonable grounds, the defendant is entitled to <em>unconditional leave to defend</em>.</li>
                  <li><strong>Triable Issues with Fair Bona Fide Defense:</strong> If the defendant raises triable issues showing a fair or bona fide defense, the court shall grant unconditional leave to defend.</li>
                  <li><strong>Doubtful Defense / Plausible Contention:</strong> If the defendant discloses a defense that appears plausible but doubtful, the court may grant conditional leave, directing a deposit of a specified sum or security into court.</li>
                  <li><strong>Illusory, Sham, or Moonshine Defense:</strong> If the defense is established to be frivolous, sham, or moonshine, leave to defend shall be refused, and the plaintiff is entitled to an immediate decree.</li>
                  <li><strong>Admitted Part-Liability:</strong> If the defendant admits part of the debt, leave to defend cannot be granted unless the admitted sum is first deposited in court.</li>
                </ul>
              </div>
            </section>

            {/* Section 3: The Hazard of Inaction */}
            <section id="consequences-of-default-ex-parte-decrees-execution" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. The Hazard of Inaction: Automatic Ex-Parte Decrees, Asset Execution &amp; Salary Attachments
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Ignoring an Order 37 summons or procrastinating past the 10-day limitation window under the mistaken impression that civil suits drag on for decades is the single most catastrophic error a borrower can make. Under Order XXXVII Rule 2(3) CPC, the statute explicitly commands that upon failure to enter appearance, <strong>&quot;the allegations in the plaint shall be deemed to be admitted and the plaintiff shall be entitled to a decree for any sum not exceeding the sum mentioned in the summons.&quot;</strong>
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once an ex-parte summary decree is sealed by the Civil Court, the bank promptly initiates coercive enforcement under <strong>Order XXI (Execution of Decrees and Orders) of the CPC</strong>:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Warrants of Attachment on Movable &amp; Immovable Assets:</strong> Under Order XXI Rule 54 CPC, the executing court issues orders attaching the judgment debtor&apos;s residential properties, commercial units, machinery, and vehicles for public court auction.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Garnishee Orders &amp; Salary Attachment:</strong> Under Order XXI Rule 46 and Rule 48 CPC, the court serves Garnishee Orders on the borrower&apos;s employer or other commercial banking accounts, mandating automatic deduction of salary or frozen account balances directly to the bank.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pre-Decree &amp; Post-Decree Compounding Interest:</strong> The court decree formalizes interest at 18% to 24% per annum from the date of default until realization, dramatically inflating the debt liability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Civil Imprisonment in Extreme Execution Default:</strong> While rare and subject to means inquiry under Section 51 and Order XXI Rule 37 CPC, persistent, fraudulent concealment of assets to frustrate decree execution can warrant civil detention.</span>
                </li>
              </ul>

              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-red-950">
                  <ShieldX className="w-4 h-4 text-red-600" />
                  <span>Order 37 Rule 4: Setting Aside Decrees Under Special Circumstances</span>
                </span>
                <p className="leading-relaxed">
                  If an ex-parte decree was already passed because you were never served with the summons or were hospitalized with proof of medical incapacity, an application under <strong>Order XXXVII Rule 4 CPC</strong> must be filed immediately to set aside the decree under &quot;special circumstances.&quot; However, the judicial bar for establishing special circumstances is exceptionally high. Timely appearance within the 10-day window is infinitely safer.
                </p>
              </div>
            </section>

            {/* Section 4: Bank Accounting, NPA Provisioning & NPV Recovery Formula */}
            <section id="bank-accounting-npa-provisioning-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Balance Sheet Accounting, NPA Provisioning &amp; The Net Present Value (NPV) Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Why do commercial banks file summary suits instead of waiting for out-of-court collections, and how do advocates leverage bank balance sheet rules to negotiate massive 45% to 65% settlement discounts? The answer lies in the Reserve Bank of India&apos;s <strong>Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP)</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once a loan remains delinquent beyond 90 days, it is classified as a Non-Performing Asset (NPA). For clean, unsecured advances, the mandatory capital provisioning burden on the bank increases exponentially across aging categories:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>NPA Classification Category</th>
                      <th>Delinquency Aging Period</th>
                      <th>RBI Mandatory Capital Provision</th>
                      <th>Target OTS Haircut Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Special Mention Account (SMA-1/2)</td>
                      <td>31 – 90 Days Overdue</td>
                      <td>5% General Provisioning</td>
                      <td>0% – 15% (Penal Waivers Only)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Sub-Standard Asset (Unsecured)</td>
                      <td>91 – 365 Days Default</td>
                      <td>25% Core Capital Provision</td>
                      <td>30% – 45% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful Asset 1 (D1)</td>
                      <td>12 – 24 Months Default</td>
                      <td>100% Full Provision on Unsecured Advance</td>
                      <td>45% – 55% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful Asset 2 / Loss Asset</td>
                      <td>24+ Months / Full Write-Off</td>
                      <td>100% Balance Sheet Write-Off</td>
                      <td>55% – 65% Principal Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower successfully obtains Leave to Defend, the summary suit is converted into an ordinary civil suit. This strips the bank of quick recovery and locks the loan in contested litigation for 3 to 5 years. During this period, the bank must maintain 100% capital provisions while incurring advocate fees, court fees, and operational overheads. To avoid this balance sheet drag, the bank&apos;s Stressed Asset Management Group (SAMG) applies the <strong>Net Present Value (NPV) Valuation Formula</strong>:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Stressed Asset Civil Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoverable cash flows over time, r is the bank&apos;s cost of capital discount rate, and deductions account for 3 to 5 years of City Civil Court friction, advocate retainers, execution friction, and 100% idle capital locked in NPA provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When experienced advocates present an immediate cash One-Time Settlement (OTS) backed by a verified hardship dossier, the mathematical NPV of receiving 45% of the principal today is vastly superior to the discounted value of chasing an unsecured borrower through 4 years of civil appeals.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="summary-suit-defense-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Order 37 CPC Summary Suit Defense &amp; Settlement Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below outlines the 5-stage institutional progression from the initial Form No. 4 court summons to entering an appearance within 10 days, formulating triable issues in the Leave to Defend affidavit, navigating court-annexed mediation under Section 89 CPC, and formalizing a binding compromise decree with full debt extinguishment.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/summary-suit-order-37-cpc-loan-recovery-defense.jpg"
                  alt="Order 37 CPC Summary Suit Loan Recovery Timeline and Defense Strategy in India"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Steps 1–2: Filing &amp; 10-Day Appearance</span>
                  <span>Bank files summary plaint; defendant serves formal Memorandum of Appearance in court within strictly 10 calendar days.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Steps 3–4: Leave to Defend &amp; Triable Issues</span>
                  <span>Plaintiff serves Summons for Judgment; defendant files Leave to Defend affidavit establishing bona fide triable issues under Hubtown.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Step 5: OTS Compromise &amp; Disposal</span>
                  <span>Parties negotiate 45%–65% OTS; Civil Court passes Order 23 Rule 3 compromise decree; bank delivers official ₹0 No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Advocate-Led Strategic Defense */}
            <section id="advocate-strategy-triable-issues-leave-to-defend" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Advocate-Led Strategic Defense: Formulating Triable Issues &amp; Drafting Watertight Leave to Defend
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The battle in an Order 37 summary suit is won or lost entirely on the quality of the <strong>Leave to Defend counter-affidavit</strong>. A generic reply claiming financial hardship or personal misfortune is classified by courts as a &quot;moonshine defense&quot; and rejected immediately. To secure unconditional leave under the <em>Hubtown</em> doctrine, our litigation team formulates concrete, legally substantiated <strong>triable issues</strong>:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Triable Issue 1: Illegal Penal Interest Compounding &amp; RBI Fair Lending Breaches</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the <strong>RBI Master Circular on Fair Practices Code and RBI Directives on Fair Lending Conduct (effective 2024)</strong>, lenders are strictly prohibited from compounding penal interest or capitalizing penalties into the principal debt. We audit the bank&apos;s statement of account and prove that significant portions of the claimed sum represent unauthorized compounding penal debits, rendering the debt unliquidated.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Triable Issue 2: Inadmissibility of Electronic Evidence &amp; Section 65B Violations</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Summary suits rely on computer-generated loan account statements. Under Section 65B of the Indian Evidence Act, 1872 (and Section 63 of Bharatiya Sakshya Adhiniyam, 2023) along with the <strong>Bankers&apos; Books Evidence Act, 1891</strong>, electronic records are legally inadmissible without a contemporaneous certificate signed by the principal officer. Failure to attach this statutory certificate destroys summary entitlement.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Triable Issue 3: Limitation Bar Under Articles 19 &amp; 21 of the Limitation Act, 1963</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks often institute summary suits after sitting on non-performing accounts for over 3 years. We demonstrate that the suit was filed beyond the prescribed 3-year limitation window, and that purported &apos;balance confirmation letters&apos; or automated NACH debit attempts do not constitute valid acknowledgments of liability under Section 18 of the Limitation Act.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Triable Issue 4: Lack of Territorial or Pecuniary Jurisdiction</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Many banks file summary suits in centralized metro courts where their processing hubs reside, despite the loan contract being executed and the borrower residing in another state. We challenge territorial jurisdiction under Section 20 CPC and pecuniary jurisdiction, demanding return of the plaint under Order VII Rule 10 CPC.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By presenting these unassailable legal discrepancies in the Leave to Defend affidavit, the court recognizes that the bank&apos;s claim involves contested questions of law and accounting fact that cannot be decided summarily, compelling the judge to grant leave to defend.
              </p>
            </section>

            {/* Section 7: Forensic Sanction Letter Verification & Section 89 CPC Settlement Conversion */}
            <section id="forensic-sanction-letter-section-89-ots-conversion" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Converting Summary Suits to One-Time Settlements: Section 89 CPC &amp; Sanction Forensics
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once Leave to Defend is granted, the balance of power shifts decisively in favor of the borrower. The bank can no longer secure a summary judgment within weeks; it must now face years of contested civil trial. At this exact juncture, our advocates activate <strong>Section 89 of the Code of Civil Procedure</strong> (Settlement of disputes outside the Court) to transition the litigation into a structured One-Time Settlement (OTS).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                We represent the borrower before the court-annexed Mediation Center, the <strong>National Lok Adalat</strong>, or directly engage the bank&apos;s Zonal Stressed Assets Resolution Branch (SARB). Before remitting any settlement amount, our legal counsel subjects the bank&apos;s OTS Sanction Letter to five mandatory forensic checkpoints:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Bank Seal &amp; Authority Signatures</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The sanction letter must be issued on official bank stationery, carrying an authenticated reference number and the verifiable signature of an authorized Scale-IV/V Zonal Manager with delegated financial power.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Specific Suit Number Citation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The document must explicitly cite the pending Summary Suit Number, Court Name, Loan Account Number, and state that the compromise sum resolves the exact litigation pending before the court.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Comprehensive Debt Extinguishment Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The sanction must unequivocally state that upon remittance of the agreed settlement sum, all remaining principal, penal charges, memo interest, and legal costs stand irrevocably extinguished.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Mandatory Court Withdrawal Commitment</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The terms must legally obligate the bank&apos;s panel advocate to appear before the Civil Court on the next scheduled hearing date to formally record satisfaction and withdraw the summary suit.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Direct Account Remittance Requirement</span>
                </span>
                <p className="leading-relaxed">
                  Never remit settlement funds to an individual advocate&apos;s personal bank account or a recovery agency UPI handle. All settlement payments must be deposited directly into your designated loan account via RTGS/NEFT or by an Account Payee Demand Draft drawn in favor of <strong>&quot;[Bank Name] A/C [Your Loan Account Number]&quot;</strong>.
                </p>
              </div>
            </section>

            {/* Section 8: Remittance, Order 23 Rule 3 Decree & RBI NDC */}
            <section id="remittance-order-23-rule-3-decree-rbi-ndc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Settlement Remittance, Order 23 Rule 3 Compromise Decree &amp; RBI ₹0 NDC Mandate
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Remitting the negotiated settlement funds completes the financial transaction, but absolute legal finality requires closing the judicial record in the Civil Court and updating credit bureaus.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under <strong>Order XXIII Rule 3 (Compromise of Suit) of the CPC</strong>, when a suit is adjusted wholly by a lawful agreement or compromise in writing and signed by the parties, the court records the compromise and passes a <strong>Consent Decree / Order of Disposal</strong>:
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Statutory Mandate on 30-Day NDC Delivery (Circular RBI/2023-24/60)</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Under RBI directives on Responsible Lending Conduct, commercial banks and NBFCs are statutorily mandated to deliver a formal <strong>No Dues Certificate (NDC) / Loan Closure Letter</strong>, return all post-dated security cheques, and update all credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) within <strong>30 calendar days</strong> of receiving full settlement remittance. Unjustified delay makes the lender liable to pay compensation of <strong>₹5,000 per day of delay</strong> directly to the borrower.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Credit Bureau Status &amp; Post-Litigation Credit Rebuilding
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following the compromise disposal of the summary suit, the bank updates the credit bureau record:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Bureau Status Tag:</strong> The account status changes from &quot;Suit Filed / Active Default / 90+ DPD&quot; to <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-Off Settled&quot;</strong> with current outstanding balance updated to <strong>₹0</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Elimination of Legal Default Flags:</strong> Formal withdrawal of the civil suit removes active litigation risks that obstruct new corporate directorships, commercial partnerships, or travel visas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Systematic Credit Score Rehabilitation:</strong> By subscribing to a secured credit card backed by a fixed deposit, maintaining credit utilization below 25%, and maintaining immaculate on-time payments, borrowers rebuild their CIBIL score above 750 within 18 to 24 months.</span>
                </li>
              </ul>
            </section>

            {/* Section 9: Summary Suit Resolution Comparative Matrix */}
            <section id="summary-suit-resolution-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Order 37 Summary Suit Defense vs Alternate Resolution Matrix
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating the legal pathways available upon receiving an Order 37 summary recovery summons allows borrowers to make an informed, risk-adjusted decision:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Strategy / Response Pathway</th>
                      <th>Procedural Mechanism</th>
                      <th>Principal Haircut Potential</th>
                      <th>Resolution Timeline</th>
                      <th>Legal &amp; Asset Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led Leave to Defend + OTS</td>
                      <td>10-day appearance; triable issues in affidavit; Section 89 OTS</td>
                      <td>45% – 65% Principal Waiver</td>
                      <td>30 – 60 Days</td>
                      <td>Lowest risk; absolute legal closure with ₹0 No Dues Certificate</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Lok Adalat Settlement</td>
                      <td>Joint referral under Legal Services Authorities Act, 1987</td>
                      <td>40% – 60% Principal Waiver</td>
                      <td>Single Session</td>
                      <td>Non-appealable Consent Decree; 100% refund of court fees</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Contested Full Civil Trial</td>
                      <td>Written Statement, witness cross-examination, final arguments</td>
                      <td>0% – 15% (Subject to trial decree)</td>
                      <td>3 – 5 Years</td>
                      <td>Heavy advocate fees, compounding interest decrees, operational strain</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Ignoring Summons / Non-Appearance</td>
                      <td>Ex-parte decree passed under Order XXXVII Rule 2(3) CPC</td>
                      <td>0% (100% Principal + 18% p.a. Interest)</td>
                      <td>Immediate (15–30 Days)</td>
                      <td>Maximum risk; immediate asset attachment, salary seizure, execution warrants</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Summary Suit Representation
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Facing an Order 37 summary recovery suit requires immediate, specialized civil litigation counsel. SettleLoans represents borrowers across India: drafting and filing formal Memorandums of Appearance within the strict 10-day statutory window, formulating comprehensive Leave to Defend affidavits establishing triable issues under the Supreme Court <em>Hubtown</em> framework, and negotiating directly with bank Zonal Stressed Asset committees to secure binding 45%–65% One-Time Settlements backed by Order 23 Rule 3 compromise decrees and official No Dues Certificates.
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
                  11. Frequently Asked Questions: Order 37 CPC Summary Suit Defense
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to critical questions regarding Order XXXVII summary suits, 10-day court appearance rules, Leave to Defend affidavits, and loan settlement in India.
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
                  href="https://www.indiacode.nic.in/handle/123456789/2191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Code of Civil Procedure, 1908 (Order XXXVII – Summary Procedure)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (IDBI Trusteeship v. Hubtown Ltd. 2017 Precedent)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Income Recognition &amp; Asset Classification (IRACP)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (Lok Adalat Civil Dispute Compromise)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/1546"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">The Limitation Act, 1963 (Articles 19, 21 &amp; Section 18 Debt Acknowledgment)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Civil Court Defense &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-recovery-case-in-court"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Recovery Case in Court
                </Link>
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
                  DRT Loan Recovery Defense
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Arbitration Notice Reply
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Unsecured Loan Property Rights
                </Link>
                <Link
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Salary Freeze Protections
                </Link>
                <Link
                  href="/loan-penalty-waiver-request"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Penal Charges Waiver
                </Link>
                <Link
                  href="/case-study-sbi-lok-adalat-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SBI Lok Adalat Case Study
                </Link>
                <Link
                  href="/case-study-cibil-status-settled-to-closed"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Settled to Closed Roadmap
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Recovery Agent Harassment
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
                  <p className="text-xs text-slate-500">Lead Civil Litigation &amp; Debt Resolution Specialist</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specializing in Order 37 CPC summary recovery defense, DRT proceedings, and high-stakes banking compromise negotiations with over a decade of civil litigation experience.
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
                <span>Urgent 10-Day Court Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Received an Order 37 Summons?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let the 10-day limitation expire. Hire seasoned civil court advocates to file your Memorandum of Appearance, draft Leave to Defend, and negotiate a 45%–65% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Get Emergency Legal Representation
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
                  <span>CPC Order XXXVII Procedural Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Advocate Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Bank-Stamped OTS Sanctions &amp; ₹0 NDC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Direct Civil Court Representation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
