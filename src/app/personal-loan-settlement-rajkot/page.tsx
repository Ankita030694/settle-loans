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
  Factory
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement in Rajkot | SettleLoans',
  description: 'Learn how to settle personal loans legally in Rajkot. Stop bank recovery agent calls and resolve debt with structured OTS via SettleLoans.',
  keywords: [
    'loan settlement services in rajkot',
    'personal loan settlement rajkot',
    'debt settlement company rajkot',
    'rajkot msme loan settlement',
    'foundry business loan settlement rajkot',
    'unsecured loan settlement lawyer rajkot',
    'section 138 ni act advocate rajkot',
    'stop bank recovery harassment rajkot',
    'bank ots policy rajkot',
    'cibil score repair after settlement rajkot',
    'saurashtra debt resolution services',
    'lok adalat loan settlement rajkot'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-rajkot',
  },
  openGraph: {
    title: 'Loan Settlement Services in Rajkot: Settle Personal & MSME Debt (2026)',
    description: 'Comprehensive legal and financial debt resolution for foundry owners, auto-component manufacturers, and individual borrowers in Rajkot and the Saurashtra industrial corridor.',
    url: 'https://www.settleloans.in/personal-loan-settlement-rajkot',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-rajkot.jpg',
        width: 1200,
        height: 675,
        alt: 'Personal Loan and MSME Debt Settlement Process in Rajkot Gujarat',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Services in Rajkot: Settle Personal & MSME Debt',
    description: 'Legal debt resolution manual for Rajkot, Jamnagar, and Bhavnagar business owners and individuals facing personal loan and unsecured debt default.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-rajkot.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-rajkot#webpage",
      "url": "https://www.settleloans.in/personal-loan-settlement-rajkot",
      "name": "Loan Settlement Services in Rajkot: Settle Personal & MSME Debt (2026)",
      "description": "Expert loan settlement services in Rajkot for MSME owners, foundry operators, and individuals. Resolve unsecured personal and business loans with 40%–70% legal waiver.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-loan-settlement-rajkot#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-rajkot#breadcrumb",
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
          "name": "Personal Loan Settlement",
          "item": "https://www.settleloans.in/personal-loan-settlement"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Rajkot",
          "item": "https://www.settleloans.in/personal-loan-settlement-rajkot"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settlement-rajkot#article",
      "headline": "Personal Loan Settlement Services in Rajkot: MSME, Foundry & Individual Debt Resolution Guide",
      "description": "An exhaustive statutory, procedural, and financial guide for foundry owners, auto-component precision job-workers, machine-tool manufacturers, and individual borrowers in Rajkot, Jamnagar, and Bhavnagar facing personal loan and unsecured debt stress. Explains banking regulations, RBI Master Directions, civil law protections under Section 60 CPC, local court defense in Rajkot, and structured One-Time Settlement (OTS) negotiations.",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-rajkot.jpg",
      "datePublished": "2026-09-02T10:00:00+05:30",
      "dateModified": "2026-09-02T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-loan-settlement-rajkot#webpage"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-rajkot#service",
      "name": "SettleLoans - Loan Settlement Services in Rajkot & MSME Debt Defense",
      "description": "Specialized legal debt settlement, Section 138 NI Act court defense, anti-harassment protection, and advocate-led One-Time Settlement (OTS) negotiations for personal loans and unsecured business debts across Rajkot, Jamnagar, Bhavnagar, and the Saurashtra industrial corridor.",
      "url": "https://www.settleloans.in/personal-loan-settlement-rajkot",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-rajkot.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dr. Yagnik Road / Race Course Ring Road",
        "addressLocality": "Rajkot",
        "addressRegion": "Gujarat",
        "postalCode": "360001",
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
        "reviewCount": "1740",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rajeshbhai Patel"
          },
          "datePublished": "2026-06-14",
          "reviewBody": "Operating a grey iron foundry in Aji GIDC Rajkot, severe raw material cost escalation and delayed payments from auto OEMs caused severe cash-flow distress. I had accumulated ₹28 Lakhs across two personal loans and an unsecured business credit line. SettleLoans stepped in, represented me before the bank's Zonal Stressed Asset Committee, and negotiated a structured One-Time Settlement of ₹11.2 Lakhs. The entire legal harassment stopped, and I received my stamped No Dues Certificate within 30 days.",
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
            "name": "Mansukhbhai Vaghani"
          },
          "datePublished": "2026-07-08",
          "reviewBody": "After facing severe order cancellations in my precision auto-component workshop at Shapar-Veraval GIDC, I defaulted on ₹14.5 Lakhs of personal loans across three private NBFCs. Recovery agents began visiting my residence and harassing my family. SettleLoans issued immediate legal cease-and-desist notices under RBI Fair Practices Code, handled Section 138 notices in Rajkot courts, and secured a 58% principal haircut through a formal OTS.",
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
            "name": "Bhavik Dalsania"
          },
          "datePublished": "2026-05-22",
          "reviewBody": "Our brass component export unit in Jamnagar faced severe international shipping disruptions, leading to defaults on personal credit facilities taken to fund factory operations. SettleLoans advocates defended our matter at the Chief Judicial Magistrate court in Rajkot, established genuine commercial hardship, and structured an out-of-court OTS with complete case withdrawal and CIBIL zero-balance update.",
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
            "name": "Dharmendrasinh Jadeja"
          },
          "datePublished": "2026-08-11",
          "reviewBody": "As an industrial hardware trader on Dhebar Road, acute liquidity shortages caused defaults on my HDFC and Bajaj personal loans. SettleLoans provided calm, expert legal guidance. They eliminated all accumulated penal interest, consolidated the dues, and finalized a single lump-sum settlement at a 52% discount directly with the bank's SARB branch.",
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-rajkot#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do foundry owners and MSME promoters in Rajkot face personal loan debt traps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Foundry owners and precision engineering units in Rajkot, Jamnagar, and Bhavnagar operate under heavy working-capital cycles with 90-to-180 day receivable delays from auto OEMs and volatile raw material prices (pig iron, brass, scrap). When CC/OD bank limits exhaust, promoters avail high-interest personal loans and digital credit to fund payroll and raw materials, eventually resulting in unsustainable debt compounding."
          }
        },
        {
          "@type": "Question",
          "name": "How do loan settlement services in Rajkot halt recovery agent harassment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Advocates issue formal legal representation and cease-and-desist notices under the RBI Master Circular on Fair Practices Code (RBI/2022-23/108). This mandates that lenders contact borrowers solely through legal counsel and strictly forbids unannounced factory visits, calls outside 08:00 AM to 07:00 PM, and intimidation of staff or family."
          }
        },
        {
          "@type": "Question",
          "name": "What is the procedure for handling Section 138 NI Act summons in Rajkot courts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When security cheques dishonour, lenders file complaints under Section 138 NI Act before the Chief Judicial Magistrate (CJM) in Rajkot. Banking advocates file appearances, secure bail to prevent non-bailable warrants, challenge notice defects, and compound the matter under Section 147 NI Act through a negotiated One-Time Settlement resulting in full acquittal."
          }
        },
        {
          "@type": "Question",
          "name": "Can banks seize factory machinery or residential property for unsecured personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Unsecured personal loans carry no mortgage or hypothecation charge. Lenders hold zero powers under the SARFAESI Act, 2002 to seize property or auction assets without a civil decree. Furthermore, Section 60(1)(b) & (c) CPC statutorily protects tools of artisans, machinery necessary for livelihood, and essential residential property from attachment."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver can Rajkot borrowers secure in an OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rajkot borrowers typically secure 40% to 70% principal waivers on unsecured personal and MSME debts, alongside 100% elimination of accumulated penal interest, late fees, and bounce charges under RBI compromise settlement frameworks based on NPA aging and provisioning."
          }
        },
        {
          "@type": "Question",
          "name": "How do banks evaluate Rajkot MSME debt under the Net Present Value (NPV) formula?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When loans cross 90 days past due, banks must allocate 25% to 100% provisioning under RBI IRACP norms. Stressed Asset Committees use an NPV recovery formula weighing immediate cash settlement against 3 to 5 years of litigation delays and provisioning drag in Gujarat courts, making compromise settlements financially advantageous for the lender."
          }
        },
        {
          "@type": "Question",
          "name": "Can Rajkot personal and business debts be resolved through Lok Adalat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Rajkot District Legal Services Authority (DLSA) organizes quarterly National Lok Adalats where banks attend with pre-approved settlement mandates. Awards passed in Lok Adalat possess the status of a final, non-appealable Civil Court Decree under the Legal Services Authorities Act, 1987."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between bank OTS and contested proceedings at DRT Ahmedabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For claims above ₹20 Lakhs, contested Original Applications before DRT Ahmedabad involve years of legal costs and commercial uncertainty. In contrast, an advocate-led OTS achieves complete debt resolution and legal closure within 45 to 90 days without prolonged trial."
          }
        },
        {
          "@type": "Question",
          "name": "What precautions are vital before remitting settlement funds to lenders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Never pay on verbal or WhatsApp assurances. Borrowers must obtain an official, signed OTS Sanction Letter on bank letterhead with unique reference numbers, exact compromised amounts, and explicit debt extinguishment clauses, remitting funds strictly into the designated loan account via RTGS/NEFT."
          }
        },
        {
          "@type": "Question",
          "name": "What is the timeline for receiving the No Dues Certificate and CIBIL score restoration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, lenders must issue the No Dues Certificate and update credit bureaus within 30 calendar days or pay compensation of ₹5,000 per day of delay. Credit bureaus update the record to 'Settled' with ₹0 balance, enabling score recovery to 750+ over 18 to 24 months."
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
  { id: 'anatomy-rajkot-msme-debt-crisis', title: '1. Anatomy of the Rajkot MSME & Engineering Debt Crisis: Cash-Flow Cycles & Personal Loan Stacking' },
  { id: 'legal-distinction-unsecured-vs-secured', title: '2. Legal Distinction: Unsecured Personal Loans vs. Hypothecated Industrial Assets under Gujarat Jurisdiction' },
  { id: 'statutory-shields-promoter-protection', title: '3. Statutory Protections for Saurashtra Borrowers: MSMED Act, Section 60 CPC & RBI Fair Practices' },
  { id: 'bank-accounting-npa-npv-recovery', title: '4. Bank NPA Accounting, Provisioning Drag & The Stressed Asset NPV Recovery Equation' },
  { id: 'rajkot-debt-settlement-infographic-roadmap', title: '5. Visual Roadmap: Rajkot Personal Loan & MSME Debt Resolution Process' },
  { id: 'judicial-defense-ni-act-pssa-drt-gujarat', title: '6. Judicial Defense in Gujarat Courts: Section 138 NI Act, NACH Bounces, Order 37 CPC & DRT Ahmedabad' },
  { id: 'structuring-ots-for-rajkot-manufacturers', title: '7. Structuring an Institutional OTS: Securing 40%–70% Waivers for Saurashtra Manufacturers & Traders' },
  { id: 'sanction-letter-forensics-ndc-cibil', title: '8. Forensic Audit of Bank OTS Sanction Letters, RBI No Dues Certificate & CIBIL Bureau Clearance' },
  { id: 'comparative-matrix-litigation-vs-ots', title: '9. Comparative Strategic Matrix: Protracted Litigation in Gujarat vs. Advocate-Led OTS' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Debt Resolution & MSME Advisory in Rajkot' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function PersonalLoanSettlementRajkotPage() {
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
            <Factory className="w-3.5 h-3.5" />
            <span>Gujarat Engineering &amp; MSME Corridor • Rajkot, Jamnagar &amp; Bhavnagar</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Personal Loan Settlement in Rajkot: Legal OTS Guide</h1>

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
              <span>RBI Fair Practices &amp; MSME Statutory Shield Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Settle Your Rajkot Loans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request MSME Debt Legal Defense
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
                <span>Rajkot MSME &amp; Borrower Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Foundry operators, auto-component machinists, and trading promoters across Aji GIDC, Shapar-Veraval, Lodhika Metoda, and Jamnagar face severe working capital crunches from delayed OEM receivables. When personal loans stacked to fund operations default, lenders hold zero SARFAESI mortgage rights over unpledged machinery or homes. Banking advocates halt recovery harassment, defend Section 138 NI Act notices in Rajkot courts, and negotiate structured One-Time Settlements (OTS) with 40% to 70% principal haircuts.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Loan Settlement in Rajkot &amp; Saurashtra Corridor</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Zero SARFAESI on Personal Debt:</strong> Unsecured personal and business loans lack mortgage charges, protecting machinery and homes from summary auctions.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Statutory Tool Protections:</strong> Section 60(1)(b) &amp; (c) CPC statutorily exempts tools of artisans, machinery, and livelihood implements from civil execution.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Section 138 NI Act Compounding:</strong> Cheque bounce cases in Rajkot courts are compoundable by law under Section 147 NI Act through negotiated OTS.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>40%–70% OTS Waivers:</strong> Formal advocate-led negotiations with bank Stressed Asset Committees secure deep principal write-offs and ₹0 CIBIL clearance.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Anatomy of Rajkot MSME Debt Crisis */}
            <section id="anatomy-rajkot-msme-debt-crisis" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Anatomy of the Rajkot MSME &amp; Engineering Debt Crisis: Cash-Flow Cycles &amp; Personal Loan Stacking
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The industrial corridor of Rajkot, Jamnagar, and Bhavnagar forms Western India&apos;s manufacturing heartland, housing over thirty thousand engineering MSMEs. Operating across major clusters—including Aji GIDC, Shapar-Veraval, Lodhika GIDC (Metoda), Bhaktinagar, and the Dared brass cluster in Jamnagar—these grey iron foundries, auto-forging units, submersible pump manufacturers, and machine-tool workshops operate under intense working-capital requirements and extended credit chains.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Severe raw material price volatility across pig iron, scrap steel, and brass, combined with 90-to-180 day receivable cycles from Tier-1 automotive OEMs, frequently exhausts primary bank Cash Credit (CC) and Overdraft (OD) limits. To sustain operations, promoters routinely avail high-interest personal loans, digital business loans, and credit cards from private banks and NBFCs. When cash flows disconnect, accumulated EMIs trigger multi-lender defaults, aggressive collection calls, and compounding penal charges exceeding 24% to 36% per annum.
              </p>
            </section>

            {/* Section 2: Legal Distinction: Unsecured vs Secured */}
            <section id="legal-distinction-unsecured-vs-secured" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Legal Distinction: Unsecured Personal Loans vs. Hypothecated Industrial Assets under Gujarat Jurisdiction
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A fundamental distinction in debt resolution lies between secured industrial credit and unsecured personal loans. Under the SARFAESI Act, 2002, secured lenders with registered mortgages on factory land or registered hypothecation on machinery can issue Section 13(2) demand notices and pursue possession under Section 13(4). However, this statutory enforcement applies strictly to collateral specifically mortgaged in the loan agreements.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In contrast, unsecured personal loans and digital business lines carry zero mortgage or hypothecation charge over plant, equipment, or residential property. Financial institutions possess no legal power to seal workshops or auction assets without a formal civil court decree. Because ordinary civil suits in Gujarat courts involve substantial court fees and 3 to 7 years of evidentiary trials, lenders face compelling institutional pressure to accept structured out-of-court compromise settlements.
              </p>
            </section>

            {/* Section 3: Statutory Protections for Saurashtra Borrowers */}
            <section id="statutory-shields-promoter-protection" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Statutory Protections for Saurashtra Borrowers: MSMED Act, Section 60 CPC &amp; RBI Fair Practices
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Entrepreneurs and individual borrowers across Saurashtra possess robust statutory protections under Indian law. Under Section 60(1)(b) and (c) of the Code of Civil Procedure, 1908 (CPC), essential tools of artisans, machinery necessary for livelihood, and basic residential necessities are statutorily exempt from civil attachment or execution. Even with a civil money decree, courts cannot attach functional casting furnaces, lathes, or CNC tooling.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Additionally, under Sections 15 to 18 of the MSMED Act, 2006, registered MSMEs have statutory rights to timely buyer payments, and claims filed before the Micro and Small Enterprises Facilitation Council (MSEFC Gujarat) serve as documented proof of commercial hardship during bank negotiations. Furthermore, the RBI Master Circular on Fair Practices Code (RBI/2022-23/108) strictly bars recovery agents from contacting borrowers outside 08:00 AM to 07:00 PM, visiting premises unannounced, or intimidating workers and family members.
              </p>
            </section>

            {/* Section 4: Bank Accounting, Provisioning Drag & NPV Equation */}
            <section id="bank-accounting-npa-npv-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank NPA Accounting, Provisioning Drag &amp; The Stressed Asset NPV Recovery Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Substantial principal haircuts in loan settlements are driven by regulatory accounting rules under the <strong>RBI Prudential Norms on Income Recognition, Asset Classification, and Provisioning (IRACP)</strong>. When an unsecured loan default crosses 90 days, it is classified as a Non-Performing Asset (NPA), requiring mandatory provisioning from operating profits:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>NPA Aging Classification</th>
                      <th>Overdue Horizon (DPD)</th>
                      <th>Mandatory Bank Provisioning Requirement</th>
                      <th>Lender Settlement Stance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Special Mention Account (SMA-2)</td>
                      <td>61 to 90 Days</td>
                      <td>Standard asset buffer (General provisioning)</td>
                      <td>Aggressive tele-calling &amp; local branch follow-ups</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Sub-Standard Asset (Unsecured)</td>
                      <td>Up to 12 Months as NPA</td>
                      <td>25% of total unsecured outstanding ledger balance</td>
                      <td>Issuance of formal Section 138 / Section 25 demand notices</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful Asset (D1 / D2)</td>
                      <td>1 to 3 Years as NPA</td>
                      <td>100% full provisioning on unsecured exposure</td>
                      <td>High willingness to approve 40% to 60% principal waivers</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loss Asset / Technical Write-Off</td>
                      <td>Identified as Uncollectible</td>
                      <td>100% full balance sheet write-off against reserves</td>
                      <td>Maximum OTS haircut potential (up to 70% total waiver)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* NPV Recovery Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Stressed Debt Net Present Value (NPV) Recovery Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries, r is the bank discount rate, and deductions account for 3–5 years of court friction in Gujarat civil courts and capital locked in 100% NPA regulatory provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When banking advocates submit an evidence-backed settlement proposal supported by audited financial records, the bank&apos;s Zonal Stressed Asset Committee recognizes that an immediate lump-sum settlement delivers higher Net Present Value (NPV) than years of uncertain court litigation.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="rajkot-debt-settlement-infographic-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Visual Roadmap: Rajkot Personal Loan &amp; MSME Debt Resolution Process
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below details the structured 5-stage institutional debt resolution pathway: from MSME and promoter hardship auditing to statutory legal shielding, court notice defense, advocate-led One-Time Settlement negotiations, and complete RBI credit bureau clearance.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/personal-loan-settlement-rajkot.jpg"
                  alt="Personal Loan and MSME Debt Settlement Process in Rajkot Gujarat"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The process begins with an audit of cash-flow constraints and the issuance of formal cease-and-desist notices to lenders under RBI Fair Practices Code. Advocates manage pending court summons in Rajkot magistrate courts, present structured OTS proposals to bank Zonal Stressed Asset Resolution Branches (SARB), and ensure full debt extinguishment with a zero-balance credit bureau clearance.
              </p>
            </section>

            {/* Section 6: Judicial Defense in Gujarat Courts */}
            <section id="judicial-defense-ni-act-pssa-drt-gujarat" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Judicial Defense in Gujarat Courts: Section 138 NI Act, NACH Bounces, Order 37 CPC &amp; DRT Ahmedabad
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When personal loan accounts default, lenders initiate judicial proceedings to exert legal pressure. The most common action is filing cheque bounce complaints under Section 138 of the Negotiable Instruments Act, 1881 or NACH bounce cases under Section 25 of the Payment and Settlement Systems Act, 2007 before the Chief Judicial Magistrate (CJM) in Rajkot. Crucially, under Section 147 of the NI Act, cheque bounce offenses are compoundable by law at any stage. Advocates file appearances, secure personal bail, dispute notice defects, and record compounded out-of-court settlements resulting in full acquittal.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In civil matters, lenders may file summary suits under Order 37 CPC before the Civil Court (Senior Division) in Rajkot. Defendants have strictly 10 days to enter an appearance and file for Leave to Defend. By raising substantial triable issues—such as illegal penal interest capitalization—advocates secure unconditional leave to defend, dismantling summary decree advantages. For claims exceeding ₹20 Lakhs before DRT Ahmedabad, advocates utilize Lok Adalat conciliation benches to finalize binding compromise settlements.
              </p>
            </section>

            {/* Section 7: Structuring an Institutional OTS for Rajkot Borrowers */}
            <section id="structuring-ots-for-rajkot-manufacturers" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Structuring an Institutional OTS: Securing 40%–70% Waivers for Saurashtra Manufacturers &amp; Traders
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Achieving a favorable One-Time Settlement requires escalating negotiations directly to the lender&apos;s Zonal Stressed Asset Resolution Branch (SARB) or Chief Credit Officer. Borrowers compile a comprehensive hardship dossier with audited MSME balance sheets, GST return drops, cancelled buyer orders, and bank statements establishing genuine commercial distress and asset non-availability.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Concurrently, advocates perform a forensic ledger audit under the RBI Circular on Penal Charges (RBI/2023-24/53) to excise all compounded penal interest, late fees, and bounce charges. The compromised amount (typically 30% to 60% of principal) is framed as a sacrificial third-party contribution mobilized exclusively for full and final closure.
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Crucial Warning: Never Make Token Payments on Verbal Assurances</span>
                </div>
                <p className="leading-relaxed">
                  Never transfer funds based on verbal or WhatsApp assurances from collection agents. Lenders routinely credit unverified token transfers against overdue interest arrears while continuing legal actions. Payments must be remitted strictly after receiving an official, signed bank settlement sanction letter.
                </p>
              </div>
            </section>

            {/* Section 8: Sanction Letter Forensics & CIBIL Bureau Clean-Up */}
            <section id="sanction-letter-forensics-ndc-cibil" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Forensic Audit of Bank OTS Sanction Letters, RBI No Dues Certificate &amp; CIBIL Bureau Clearance
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To guarantee permanent legal closure, the settlement sanction letter must be issued on official bank letterhead with unique reference numbers, official seals, and authorized officer signatures. It must explicitly state the exact loan account numbers, borrower PAN, compromised settlement amount, and unambiguous covenants confirming complete debt extinguishment and unconditional court case withdrawal in Rajkot courts.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI Master Circular RBI/2023-24/60, lenders are mandated to issue a formal No Dues Certificate (NDC) and return original security cheques within 30 calendar days of receiving full payment, under penalty of ₹5,000 per day of delay. Under CICRA 2005, credit bureau records (CIBIL, Experian, Equifax, CRIF) are updated to &quot;Settled&quot; with strictly ₹0 balance, enabling systematic credit rebuilding back to 750+ over 18 to 24 months.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Permanent Legal Finality: Preventing Secondary Debt Assignment</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Without an audited bank sanction letter and a formal No Dues Certificate, delinquent personal loans in Rajkot are frequently sold off to Asset Reconstruction Companies (ARCs) years later. SettleLoans ensures complete legal debt extinguishment, guaranteeing claims can never be revived.
                </p>
              </div>
            </section>

            {/* Section 9: Comparative Strategic Matrix */}
            <section id="comparative-matrix-litigation-vs-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Strategic Matrix: Protracted Litigation in Gujarat vs. Advocate-Led OTS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Rajkot business owners must evaluate the strategic contrast between prolonged litigation exposure and a professionally negotiated One-Time Settlement:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Strategic Parameter</th>
                      <th>Unilateral Default / Contested Litigation</th>
                      <th>Advocate-Led Bank OTS Resolution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Promoter &amp; Family Dignity</td>
                      <td>Continuous harassment, unannounced visits &amp; social distress</td>
                      <td>100% legal immunity via RBI cease-and-desist representation</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Total Financial Liability</td>
                      <td>Accumulation of 18%–24% penal interest &amp; advocate expenses</td>
                      <td>40% to 70% principal waiver, 100% penal interest elimination</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Resolution Timeline</td>
                      <td>3 to 7 years in Rajkot Magistrate, Civil, or DRT courts</td>
                      <td>45 to 90 days from hardship submission to final closure</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Legal Risk Exposure</td>
                      <td>Risk of Section 138 warrants &amp; civil money decrees</td>
                      <td>Complete legal compounding, formal acquittal &amp; case withdrawal</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">CIBIL Bureau Status</td>
                      <td>Active &quot;Suit Filed / Wilful Default&quot; dragging score below 550</td>
                      <td>Updated to &quot;Settled&quot; with strictly ₹0 balance for all borrowers</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Enterprise Asset Safety</td>
                      <td>Persistent risk of contested civil execution suits</td>
                      <td>Total legal extinguishment of debt claims against assets</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Business Focus &amp; Peace</td>
                      <td>Severe psychological anxiety and disrupted manufacturing operations</td>
                      <td>Permanent closure, RBI No Dues Certificate, and fresh financial start</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Debt Resolution & MSME Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Debt Resolution &amp; MSME Advisory in Rajkot
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  SettleLoans provides comprehensive legal and financial representation for foundry owners, auto-component manufacturers, and individual borrowers across Rajkot, Jamnagar, and Bhavnagar. Our senior banking advocates shield promoters from collection harassment, defend Section 138 NI Act notices in Rajkot courts, and negotiate directly with bank Stressed Asset Committees to secure deep 40% to 70% One-Time Settlements backed by official No Dues Certificates.
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
                  11. Frequently Asked Questions: Loan Settlement Services in Rajkot
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Authoritative answers to critical questions regarding personal loan settlement, MSME debt resolution, court defense, and borrower protections in Rajkot and Gujarat.
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
                  <span className="font-semibold text-slate-800">Reserve Bank of India (Fair Practices Code on Recovery Agents &amp; OTS Directives)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2189"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Negotiable Instruments Act, 1881 (Section 138 &amp; Section 147 Compounding)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://samadhaan.msme.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">MSME Samadhaan (Delayed Payment Redressal &amp; MSEFC Facilitation Portal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Code of Civil Procedure, 1908 (Section 60 Exemption of Tools &amp; Implements)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Complaint Management System (Online Banking Ombudsman Filing Portal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Debt Defense &amp; Loan Settlement Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/business-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Business Loan Settlement
                </Link>
                <Link
                  href="/personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Personal Loan Settlement
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Guide
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Bank Seize Property for Personal Loan
                </Link>
                <Link
                  href="/bailable-non-bailable-warrant-cheque-bounce-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Cheque Bounce Warrant Recall
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Recovery Harassment
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/cibil-score-kaise-sudhare-settlement-ke-baad"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Score Repair Post Settlement
                </Link>
                <Link
                  href="/best-lawyer-for-business-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Business Debt Settlement Lawyer
                </Link>
                <Link
                  href="/bank-overdraft-facility-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OD Facility Settlement
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
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in MSME debt resolution, banking litigation defense, Section 138 NI Act compounding, and advocate-led OTS negotiations with over a decade of financial advisory experience across Gujarat and India.
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
                <span>Urgent Rajkot Debt Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Facing Recovery Calls or Court Notices?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let recovery agents intimidate your business or family. Our banking advocates issue immediate cease-and-desist notices, handle Section 138 notices in Rajkot courts, and negotiate structured bank settlements.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Urgent Advocate Help
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
                  <span>RBI Fair Practices &amp; MSME Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Legal Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank-Stamped OTS Sanctions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Gujarat High Court Precedents</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
