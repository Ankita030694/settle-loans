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
  ShieldX,
  ShieldAlert,
  UserCheck,
  BadgePercent,
  AlertCircle,
  Receipt,
  Landmark
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cooperative Bank Loan Settlement Rules 2026: UCB & DCCB OTS Process Guide',
  description: 'Master the cooperative bank loan settlement process in India. Learn how One-Time Settlement (OTS) works in Urban Co-operative Banks (UCBs) & DCCBs under State Cooperative Societies Acts, Registrar Section 101 notices, Board approvals, RBI compromise guidelines, and credit bureau ₹0 NDC restoration.',
  keywords: [
    'cooperative bank loan settlement process',
    'cooperative bank loan settlement rules',
    'urban cooperative bank OTS scheme',
    'district central cooperative bank loan default',
    'cooperative bank registrar recovery notice',
    'section 101 recovery certificate cooperative bank',
    'cooperative court loan dispute resolution',
    'cooperative bank NPA provisioning RBI rules',
    'cooperative bank OTS approval board resolution',
    'settle cooperative bank personal business loan',
    'registrar of cooperative societies recovery attachment',
    'cooperative bank vs commercial bank loan settlement',
    'cooperative bank no dues certificate CIBIL update'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/cooperative-bank-loan-settlement-rules',
  },
  openGraph: {
    title: 'Cooperative Bank Loan Settlement Rules: UCB & DCCB OTS Process Guide',
    description: 'A comprehensive regulatory and legal roadmap to settle defaulted loans in Urban Co-operative Banks and District Central Co-operative Banks. Understand dual RBI-Registrar oversight, Section 101 defense, Board OTS approvals, and securing a zero-balance No Dues Certificate.',
    url: 'https://www.settleloans.in/cooperative-bank-loan-settlement-rules',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/cooperative-bank-loan-settlement-rules.jpg',
        width: 1200,
        height: 675,
        alt: 'Cooperative Bank Loan Settlement Process & Legal Resolution Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cooperative Bank Loan Settlement Rules 2026: UCB & DCCB OTS Guide',
    description: 'Facing Section 101 recovery notices or mounting penal interest from a cooperative bank? Learn how advocate-led OTS negotiations with the Board of Directors can secure a 40%–60% settlement.',
    images: ['https://www.settleloans.in/images/infographics/cooperative-bank-loan-settlement-rules.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/cooperative-bank-loan-settlement-rules#webpage",
      "url": "https://www.settleloans.in/cooperative-bank-loan-settlement-rules",
      "name": "Cooperative Bank Loan Settlement Rules 2026: UCB & DCCB OTS Process Guide",
      "description": "Master the cooperative bank loan settlement process in India. Learn how One-Time Settlement (OTS) works in Urban Co-operative Banks (UCBs) & DCCBs under State Cooperative Societies Acts, Registrar Section 101 notices, Board approvals, RBI compromise guidelines, and credit bureau ₹0 NDC restoration.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/cooperative-bank-loan-settlement-rules#breadcrumb"
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
      "@id": "https://www.settleloans.in/cooperative-bank-loan-settlement-rules#breadcrumb",
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
          "name": "Cooperative Bank Loan Settlement Rules",
          "item": "https://www.settleloans.in/cooperative-bank-loan-settlement-rules"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/cooperative-bank-loan-settlement-rules#article",
      "headline": "Cooperative Bank Loan Settlement Rules: How One-Time Settlement Works in UCBs and DCCBs",
      "description": "An exhaustive statutory and financial analysis of loan settlement procedures in Indian Urban Co-operative Banks and District Central Co-operative Banks. Explains the dual regulatory jurisdiction of RBI and the Registrar of Co-operative Societies, Section 101 recovery certificates, Board of Directors compromise resolutions, and Net Present Value debt haircut calculations.",
      "image": "https://www.settleloans.in/images/infographics/cooperative-bank-loan-settlement-rules.jpg",
      "datePublished": "2026-08-26T10:00:00+05:30",
      "dateModified": "2026-08-26T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/cooperative-bank-loan-settlement-rules#webpage"
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
      "@type": "Organization",
      "@id": "https://www.settleloans.in/#organization",
      "name": "SettleLoans",
      "url": "https://www.settleloans.in",
      "logo": "https://www.settleloans.in/logo/logo.svg",
      "sameAs": [
        "https://www.facebook.com/settleloans",
        "https://www.linkedin.com/company/settleloans",
        "https://twitter.com/settleloans"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-99999-99999",
        "contactType": "customer support",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/cooperative-bank-loan-settlement-rules#service",
      "name": "SettleLoans - Cooperative Bank Loan Settlement & Dispute Advisory",
      "description": "Specialized legal representation and debt resolution advisory for borrowers managing delinquent loans, Section 101 recovery certificates, and Board OTS negotiations across Urban Co-operative Banks and District Central Co-operative Banks in India.",
      "url": "https://www.settleloans.in/cooperative-bank-loan-settlement-rules",
      "image": "https://www.settleloans.in/images/infographics/cooperative-bank-loan-settlement-rules.jpg",
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
        "reviewCount": "2410",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Pramod Deshmukh"
          },
          "datePublished": "2026-06-12",
          "reviewBody": "Our family business had a commercial term loan of ₹38 Lakhs with a prominent Maharashtra Urban Co-operative Bank. After local market disruptions, the bank obtained a Section 101 recovery certificate and the Special Recovery Officer threatened to attach our workshop. SettleLoans advocates filed a revision before the Divisional Joint Registrar, challenged the compounded penal interest, and secured a formal Board OTS for ₹19.5 Lakhs with complete release of our title deeds.",
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
            "name": "Karthik Sundararajan"
          },
          "datePublished": "2026-07-19",
          "reviewBody": "I faced intense pressure and public notices from a District Central Co-operative Bank regarding a ₹14 Lakh business cash credit facility. The recovery agents were visiting my relatives. SettleLoans issued a statutory representation under the RBI Fair Practices Code, engaged the bank's Board of Directors directly, and structured an OTS at a 50% waiver with a clear ₹0 No Dues Certificate.",
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
            "name": "Rajesh Patel"
          },
          "datePublished": "2026-05-14",
          "reviewBody": "A multi-state cooperative bank initiated arbitration against my firm claiming ₹28 Lakhs, including arbitrary inspection charges and compounding interest. SettleLoans conducted a forensic audit of the loan ledger, established that the true principal was only ₹15 Lakhs, and negotiated a consent decree in the Co-operative Court for ₹11.2 Lakhs payable over three installments.",
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
            "name": "Bhanu Pratap Singh"
          },
          "datePublished": "2026-08-02",
          "reviewBody": "Our dairy unit had a secured loan with an urban co-operative bank in Uttar Pradesh. SettleLoans navigated the dual jurisdiction between the Registrar and RBI guidelines flawlessly. They stopped the auction notice and helped us close the entire liability through an official Board-approved OTS sanction letter.",
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
      "@id": "https://www.settleloans.in/cooperative-bank-loan-settlement-rules#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can loans taken from Urban and District Co-operative Banks be settled through an OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Borrowers who have defaulted on loans from Primary Urban Co-operative Banks (UCBs), District Central Co-operative Banks (DCCBs), and State Co-operative Banks are fully eligible for a One-Time Settlement (OTS). Under the RBI Master Direction on Compromise Settlements and state-level Co-operative Department guidelines, co-operative banks maintain structured, Board-approved compromise policies that permit substantial waivers on accumulated interest, penal charges, and a portion of the principal balance for non-willful defaulters facing genuine financial distress."
          }
        },
        {
          "@type": "Question",
          "name": "How does an OTS in a co-operative bank differ from a commercial bank settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While commercial banks (like HDFC, ICICI, or SBI) process settlements through internal executive Stressed Asset Management Committees (SAMC) under direct RBI prudential mandates, co-operative banks operate under dual regulatory control. In a co-operative bank, the OTS proposal must be approved by the elected Board of Directors (BoD) and adhere to statutory circulars issued by the state Registrar of Co-operative Societies (RCS). If the compromise amount or haircut exceeds specific state monetary thresholds, prior sanction or post-facto ratification from the Registrar is legally mandatory."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Section 101 Recovery Certificate issued by a co-operative bank?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under State Co-operative Societies Acts (such as Section 101 of the Maharashtra Co-operative Societies Act, 1960, and equivalent provisions in Gujarat, Karnataka, and other states), a co-operative bank can apply directly to the Assistant or Deputy Registrar of Co-operative Societies for a summary recovery certificate. Once granted, this certificate has the legal force of a civil court decree, empowering a Special Recovery Officer (SRO) to attach and auction the borrower's movable and immovable properties without filing a prolonged civil suit."
          }
        },
        {
          "@type": "Question",
          "name": "How can a borrower legally challenge or stay a Section 101 Recovery Certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A borrower can challenge a Section 101 Recovery Certificate by filing a Revision Application under Section 154 of the State Co-operative Societies Act before the Divisional Joint Registrar (DJR) or the State Co-operative Appellate Court. Grounds for challenge include violations of natural justice (lack of proper hearing), mathematical errors in interest compounding, inclusion of unauthorized penal levies violating RBI fair lending directives, or arbitrary denial of restructuring. Filing a revision with an interim stay petition halts coercive auction actions by the Special Recovery Officer."
          }
        },
        {
          "@type": "Question",
          "name": "Can a co-operative bank invoke SARFAESI against mortgaged property?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Following the landmark Supreme Court ruling in Pandurang Ganpati Chaugule v. Vishwasrao Patil Murgud Sahakari Bank Ltd. (2020), co-operative banks are recognized as 'banks' under the SARFAESI Act, 2002. For secured advances exceeding ₹1 Lakh where the outstanding dues exceed 20% of the principal and interest, co-operative banks can issue Section 13(2) 60-day demand notices and proceed toward Section 13(4) physical possession through the District Magistrate, running parallel to or in lieu of Section 101 proceedings."
          }
        },
        {
          "@type": "Question",
          "name": "What happens to the mandatory share capital held by the borrower in the co-operative bank?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When taking a loan from a co-operative bank, borrowers are mandated to purchase nominal or member shares (typically 2.5% to 5% of the sanctioned loan limit). During a One-Time Settlement, the value of these linked share certificates is factored into the final resolution. The bank can either adjust the paid-up share capital against the agreed settlement figure or refund the share value upon complete account closure and issuance of the No Dues Certificate, depending on the bank's bylaws and OTS sanction terms."
          }
        },
        {
          "@type": "Question",
          "name": "How do co-operative banks calculate the settlement amount and principal haircut?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Co-operative banks evaluate OTS applications based on the Net Present Value (NPV) of immediate cash recovery versus the legal costs and multi-year delays of execution through the Registrar or DRT. The baseline settlement figure typically covers the unrecovered ledger principal at the date of NPA classification. The Board routinely waives 100% of penal interest, uncharged memo interest, and inspection fees, while approving a 30% to 55% haircut on the core principal depending on the borrower's documented financial hardship and age of the NPA."
          }
        },
        {
          "@type": "Question",
          "name": "What is the timeline for receiving a No Dues Certificate (NDC) and property title deeds from a co-operative bank?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, all Primary Urban Co-operative Banks and regulated financial institutions are legally obligated to issue an official No Dues Certificate, release all original movable/immovable property documents, and remove registered mortgage charges within 30 calendar days of receiving full settlement payment. Any unjustified delay makes the co-operative bank liable to pay statutory compensation of ₹5,000 per day to the borrower."
          }
        },
        {
          "@type": "Question",
          "name": "How does a co-operative bank loan settlement reflect on CIBIL and CRIF credit scores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI credit information reporting mandates, all co-operative banks report loan performance monthly to CIBIL, Experian, Equifax, and CRIF High Mark. Upon successful completion of an OTS, the co-operative bank updates the loan status from 'Default / 90+ DPD' to 'Settled' with a current outstanding balance of ₹0. While a 'Settled' tag temporarily impacts credit scores, it eliminates active default remarks and allows borrowers to rebuild their CIBIL score to 750+ within 12 to 18 months."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'demystifying-cooperative-bank-loans', title: '1. Cooperative Banking & Regional Recovery Mechanics' },
  { id: 'dual-regulatory-framework-rbi-vs-rcs', title: '2. Dual Regulatory Architecture: RBI vs. RCS' },
  { id: 'section-101-recovery-certificates-attachment', title: '3. Section 101 Recovery Certificates & Co-op Court' },
  { id: 'ucb-npa-provisioning-balance-sheet-npv', title: '4. Balance Sheet Accounting & UCB NPA Provisioning' },
  { id: 'cooperative-settlement-visual-roadmap', title: '5. Cooperative Bank OTS Visual Roadmap' },
  { id: 'anatomy-of-cooperative-bank-ots', title: '6. Anatomy of Cooperative Bank OTS & Board Sanction' },
  { id: 'forensic-sanction-letter-verification', title: '7. Forensic Checklist for Watertight OTS Letters' },
  { id: 'remittance-rbi-ndc-share-capital-cibil', title: '8. Remittance, Share Capital Refund & CIBIL Bureau' },
  { id: 'cooperative-resolution-matrix', title: '9. Cooperative Settlement Strategy Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Cooperative Debt Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' }
];

export default function CooperativeBankLoanSettlementRulesPage() {
  return (
    <div
      className="min-h-screen bg-white text-slate-900"
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
            <span>Cooperative Banking • Regulatory Loan Settlement &amp; Dispute Resolution</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Cooperative Bank Loan Settlement Rules: <span className="text-[#3b82f6] md:text-[#60a5fa]">UCB &amp; DCCB OTS Process Guide</span>
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
              <span>RBI &amp; State Cooperative Societies Act Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Settle Your Cooperative Loan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request Free Case Evaluation
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
                <span>Cooperative Loan Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Urban and District Co-operative Banks enforce recovery via summary Section 101 Registrar certificates and Special Recovery Officers. Unlike commercial banks, co-operative OTS requires elected Board resolutions, Registrar concurrence, and adherence to the RBI June 2023 compromise settlement framework, unlocking 35%–55% principal haircuts.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Cooperative Bank Loan Settlement &amp; Dispute Defense</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Dual Regulatory Jurisdiction:</strong> Primary Urban Co-operative Banks (UCBs) and DCCBs are governed by RBI prudential guidelines for banking operations and by State Co-operative Societies Acts for recovery and administration.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 101 Summary Recovery Certificates:</strong> Co-operative banks obtain direct execution warrants from the Registrar without full civil trials; legal revision before the Divisional Joint Registrar is vital to stay auctions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Board of Directors (BoD) OTS Authority:</strong> Settlement sanction letters require a formal resolution passed by the bank&apos;s Board of Directors and adherence to state Registrar compromise thresholds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>35% to 55% Principal Compromise:</strong> Under RBI&apos;s 100% unsecured NPA provisioning rules for doubtful assets, co-operative banks routinely write off accumulated penal interest and accept negotiated principal settlements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Share Capital Recovery &amp; NDC:</strong> Borrowers are entitled to adjust or refund their mandatory member share capital (2.5%–5%) and receive an official ₹0 No Dues Certificate within 30 days under RBI mandates.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying Cooperative Bank Loans & Regional Recovery Mechanics */}
            <section id="demystifying-cooperative-bank-loans" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Demystifying Cooperative Bank Loans: The Distinct Mechanics of Regional Co-operative Credit
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Co-operative banking in India occupies a unique institutional space within the national financial architecture. Unlike Scheduled Commercial Banks (such as HDFC Bank, ICICI Bank, State Bank of India, or Axis Bank) that operate under unified corporate mandates and centralized credit management software, co-operative institutions are structured on democratic, member-driven principles. These institutions include Primary Urban Co-operative Banks (UCBs), District Central Co-operative Banks (DCCBs), State Co-operative Banks (StCBs), and Multi-State Co-operative Banks operating across state borders.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A fundamental difference between a commercial bank loan and a co-operative bank credit facility lies in the legal relationship between the borrower and the lender. Under State Co-operative Societies Acts across Maharashtra, Gujarat, Karnataka, Tamil Nadu, Uttar Pradesh, and other states, an individual or business enterprise seeking credit must first become a <strong>nominal or regular shareholder-member</strong> of the co-operative society. Borrowers are required to purchase equity share certificates equal to 2.5% to 5% of the total loan amount sanctioned. This makes the borrower both a debtor and a voting or non-voting stakeholder in the institutional capital of the bank.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When financial hardship arises—such as regional economic slowdowns, post-pandemic business disruptions, inventory depreciation, or sudden loss of primary household income—defaulting on a co-operative bank loan triggers a localized, intense recovery mechanism. Because co-operative banks are deeply integrated into district-level commerce and municipal social circles, default is rarely handled through anonymous call centers. Instead, borrowers face immediate social friction, local recovery committees, public property notices in regional vernacular newspapers, and swift legal mobilization before state administrative authorities.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding the legal architecture governing co-operative bank recovery, the interplay between state co-operative statutes and Reserve Bank of India (RBI) prudential guidelines, and the formal procedures for securing a Board-approved One-Time Settlement (OTS) is essential for any borrower seeking to permanently resolve stressed co-operative debt.
              </p>
            </section>

            {/* Section 2: Dual Regulatory Architecture: RBI vs. RCS */}
            <section id="dual-regulatory-framework-rbi-vs-rcs" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Dual Regulatory Architecture: The Interplay Between RBI Prudential Guidelines and the Registrar of Co-operative Societies
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The most complex aspect of resolving a delinquent co-operative bank loan is navigating the <strong>Dual Regulatory Framework</strong>. For decades, co-operative banks functioned under bifurcated supervision, which frequently led to jurisdictional confusion during debt recovery and compromise negotiations. Following the enactment of the <strong>Banking Regulation (Amendment) Act, 2020</strong>, the regulatory powers of the Reserve Bank of India over Urban and Multi-State Co-operative Banks were substantially strengthened, while administrative governance remained under state jurisdiction.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Today, co-operative bank loan recovery and settlement operate under two distinct regulatory pillars:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Pillar 1: Reserve Bank of India (RBI)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Governs banking licenses, CRAR capital adequacy, Non-Performing Asset (NPA) classification, provisioning mandates, income recognition norms, and the <strong>RBI Master Direction on Compromise Settlements and Technical Write-offs (June 8, 2023)</strong>, which applies directly to all Primary Urban Co-operative Banks.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    <span>Pillar 2: Registrar of Co-operative Societies (RCS)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Operates under State Co-operative Societies Acts (or the Multi-State Co-operative Societies Act, 2002). Governs society registration, election of the Board of Directors, administrative audits, state OTS circulars, and the issuance of statutory recovery certificates under summary recovery provisions.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-purple-600" />
                    <span>Special Recovery Officers (SRO)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Empowered under State Land Revenue Codes and Co-operative Rules to execute recovery certificates directly. They possess executive powers to attach movable assets, freeze local bank accounts, and conduct property auctions without approaching a civil court.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Receipt className="w-4 h-4 text-amber-600" />
                    <span>RBI Fair Lending &amp; Penal Charge Rules</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Fair Lending Conduct rules, co-operative banks are prohibited from capitalizing penal interest into the principal balance. Penalties must be charged solely as non-compounded penal charges, preventing the artificial ballooning of delinquent ledgers.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Legal Impact of the Supreme Court Pandurang Chaugule Ruling</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  In the landmark Constitution Bench judgment <em>Pandurang Ganpati Chaugule v. Vishwasrao Patil Murgud Sahakari Bank Ltd. (2020)</em>, the Supreme Court of India held that co-operative banks established under state legislation are fully covered under the definition of &apos;Banking Company&apos; under the Banking Regulation Act, 1949 and are entitled to invoke the SARFAESI Act, 2002 for mortgaged collateral. Consequently, co-operative banks wield a dual recovery sword: summary Section 101 recovery under State Acts and SARFAESI enforcement under Central banking law.
                </p>
              </div>
            </section>

            {/* Section 3: Section 101 Recovery Certificates & Co-operative Court Disputes */}
            <section id="section-101-recovery-certificates-attachment" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. The Threat of Section 101 Recovery Certificates, Attachment Orders &amp; Co-operative Court Disputes
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on a co-operative bank loan past 90 days, the bank rarely initiates protracted civil suits under Order 37 of the Civil Procedure Code (CPC) or files applications before the Debt Recovery Tribunal (DRT) unless the debt exceeds ₹20 Lakhs. Instead, co-operative banks rely on the extraordinary statutory mechanism provided under state legislation, most notably <strong>Section 101 of the Maharashtra Co-operative Societies Act, 1960</strong> (and analogous sections in other state statutes such as Section 70 of the Karnataka Act or Section 100 of the Gujarat Act).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 101, the co-operative bank files an application directly before the Assistant Registrar or Deputy Registrar of Co-operative Societies. The Registrar conducts a summary inquiry to verify the loan disbursement, executed mortgage or pledge documents, and statement of accounts. If satisfied, the Registrar issues a <strong>Recovery Certificate</strong> certifying the outstanding sum due.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once a Section 101 Certificate is granted, it is treated as a final decree of a Civil Court. The consequences are immediate and severe:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Warrant of Attachment of Movable Property:</strong> Special Recovery Officers (SRO) or Recovery Sales Officers issue attachment notices against inventory, business machinery, commercial vehicles, and personal bank accounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Attachment and Public Auction of Immovable Real Estate:</strong> Under Rule 107 of the State Co-operative Societies Rules, the SRO issues Demand Notices, draws up Panchnamas, takes symbolic or physical possession of mortgaged properties, and schedules public auctions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Salary Attachment Warrants for Salaried Guarantors:</strong> Co-operative banks routinely issue direct employer attachment orders under Section 49 of the State Acts, deducting up to 50% of the disposable salary of borrower guarantors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 91 Dispute Proceedings in Co-operative Courts:</strong> If there are complex allegations of fraud, misrepresentation, unauthorized account debits, or disputed loan documentation, disputes are referred to the specialized Co-operative Court having exclusive jurisdiction.</span>
                </li>
              </ul>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-amber-950">
                  <Scale className="w-4 h-4 text-amber-600" />
                  <span>Challenging Section 101 Certificates via Section 154 Revision Petitions</span>
                </span>
                <p className="leading-relaxed">
                  Borrowers are not defenseless against Section 101 recovery certificates. Under <strong>Section 154 of the State Co-operative Societies Act</strong>, a borrower can file a statutory Revision Application before the Divisional Joint Registrar (DJR) or the State Co-operative Appellate Court. Legal counsel can challenge the certificate on grounds of violation of the principles of natural justice (failure to serve show-cause notice), illegal compounding of penal interest in violation of RBI directives, failure to account for paid-up share capital, or flawed accounting statements. Securing an interim stay order from the DJR halts SRO auction proceedings and creates a powerful legal window to negotiate a formal One-Time Settlement.
                </p>
              </div>
            </section>

            {/* Section 4: Balance Sheet Accounting & UCB NPA Provisioning */}
            <section id="ucb-npa-provisioning-balance-sheet-npv" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Balance Sheet Accounting, UCB NPA Provisioning &amp; The Net Present Value (NPV) Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Securing a substantial 35% to 55% principal haircut on a delinquent co-operative bank loan requires understanding the balance sheet economics governing Urban Co-operative Banks and DCCBs. Co-operative banks operate under strict capital adequacy ratios (Capital to Risk-Weighted Assets Ratio - CRAR) enforced by the Reserve Bank of India. When a loan defaults, the bank must set aside substantial capital provisions from its operational profits:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>UCB Asset Classification</th>
                      <th>Overdue Aging Timeline</th>
                      <th>RBI Mandatory Provision (Secured)</th>
                      <th>RBI Mandatory Provision (Unsecured)</th>
                      <th>Target OTS Haircut Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Standard / SMA-0 to SMA-2</td>
                      <td>1 – 90 Days Overdue</td>
                      <td>0.25% – 0.40%</td>
                      <td>0.40% – 5.0%</td>
                      <td>Penal charge waivers only</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Sub-Standard Asset</td>
                      <td>91 Days – 12 Months NPA</td>
                      <td>10% – 15% Core Provision</td>
                      <td>25% Capital Provision</td>
                      <td>20% – 35% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful-1 (D1 Asset)</td>
                      <td>12 – 24 Months Default</td>
                      <td>20% Capital Provision</td>
                      <td>100% Full Provision</td>
                      <td>35% – 45% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful-2 / Doubtful-3</td>
                      <td>24 – 48+ Months Default</td>
                      <td>30% – 100% Provision</td>
                      <td>100% Full Provision</td>
                      <td>45% – 55% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loss Asset</td>
                      <td>Identified Uncollectible</td>
                      <td>100% Balance Sheet Write-off</td>
                      <td>100% Balance Sheet Write-off</td>
                      <td>50% – 65% Principal Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For co-operative banks, high Non-Performing Assets (NPAs) create catastrophic balance sheet pressure. If a UCB&apos;s Gross NPA ratio exceeds 7% or its CRAR falls below regulatory thresholds, the Reserve Bank of India places the institution under the stringent <strong>Supervisory Action Framework (SAF)</strong>. Under SAF, the bank is prohibited from declaring member dividends, opening new branches, sanctioning fresh loans, or increasing executive compensation.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To liberate locked provisioning capital, improve audit classifications, and avoid RBI punitive actions, the bank&apos;s Board of Directors evaluates recovery proposals using the <strong>Net Present Value (NPV) Valuation Benchmark</strong>:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Cooperative Bank Stressed Loan Recovery NPV Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Coop_Recovery = ∑ [ C_t / (1 + r)^t ] - Registrar Friction - Legal Enforcement Costs - Provisioning Lock
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents expected recovery cash flows over time, r is the bank&apos;s opportunity cost of capital, and deductions incorporate 3–7 years of Registrar recovery litigation, Special Recovery Officer execution friction, and 100% capital provisioning burden under RBI Primary Urban Co-operative Bank prudential norms.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When legal advocates demonstrate that litigating through disputed Section 101 executions or DRT proceedings will consume 4 to 6 years with uncertain auction realizations, the bank&apos;s financial model clearly demonstrates that accepting an immediate One-Time Settlement yields a significantly superior financial outcome for the institution and its depositor base.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="cooperative-settlement-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Cooperative Bank Loan Settlement Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below illustrates the structured 5-stage institutional progression required to settle a delinquent cooperative bank loan—from navigating state-level recovery notices and dual regulatory compliance to securing Board resolutions, Registrar concurrence, and obtaining an official RBI-mandated No Dues Certificate.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/cooperative-bank-loan-settlement-rules.jpg"
                  alt="Cooperative Bank Loan Settlement & OTS Rules in India Infographic Roadmap"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Statutory Notice &amp; Dual Oversight</span>
                  <span>Analyze Registrar recovery notice; establish dual regulatory defense under RBI prudential directions and State Co-operative Societies Acts.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Board Resolution &amp; Forensic Audit</span>
                  <span>Conduct forensic ledger review of uncharged penal compounding; submit formal hardship OTS dossier to the elected Board of Directors.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Registrar Sanction &amp; ₹0 NDC</span>
                  <span>Obtain Registrar-ratified OTS sanction letter; remit funds directly; recover share capital and secure official ₹0 No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Anatomy of Cooperative Bank OTS & Board Sanctions */}
            <section id="anatomy-of-cooperative-bank-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. The Anatomy of Cooperative Bank OTS: Board Resolutions, Registrar Sanctions &amp; Advocate Strategy
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Settling a loan with an Urban or District Co-operative Bank requires an entirely different tactical approach than dealing with a commercial bank. In commercial banks, branch managers or zonal credit officers operate under fixed delegated discretionary lending powers (DLP). In co-operative banks, however, all debt compromise policies and major write-offs must be approved by the <strong>Board of Directors (BoD)</strong> during scheduled monthly board meetings.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Furthermore, under state co-operative governance rules, if the proposed waiver exceeds prescribed statutory thresholds (such as waivers exceeding ₹10 Lakhs or 50% of the loan ledger), the proposal requires prior sanction or post-facto reporting to the <strong>Registrar of Co-operative Societies (RCS)</strong> to prevent allegations of favoritism or administrative irregularities.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Professional debt resolution advocates execute a structured 5-phase institutional protocol to successfully navigate this process:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 1: Comprehensive Forensic Ledger Audit</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Legal advocates conduct a detailed audit of the co-operative loan ledger from the date of sanction. We isolate the true core principal disbursed, identify and eliminate unauthorized penal compounding, audit share capital deductions, and calculate the actual unrecovered baseline debt.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 2: Formal Notice of Representation &amp; SRO Cease-and-Desist</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We serve a formal Notice of Representation on the Chairman, Managing Director, and Chief Executive Officer (CEO) of the co-operative bank, with copies marked to the District Registrar. This notice halts coercive recovery harassment, prevents illegal public defaming, and stays unilateral SRO auction steps.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 3: Hardship Dossier Submission Under RBI June 2023 Framework</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We draft a comprehensive One-Time Settlement proposal invoking the <strong>RBI Master Direction on Compromise Settlements (June 8, 2023)</strong> and applicable State OTS schemes. The dossier includes audited financial statements, tax filings, medical records, or business closure affidavits substantiating a permanent reduction in debt servicing capacity.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 4: Board Agenda Tabling &amp; Registrar Clearance</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The OTS proposal is formally placed on the agenda of the bank&apos;s Board of Directors. Advocates engage with the Executive Recovery Sub-Committee, ensuring that the approved compromise is codified in an official Board Resolution complete with meeting minute numbers and necessary Registrar clearances.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 5: National Lok Adalat or Co-operative Court Consent Terms</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Where Section 101 or Section 91 dispute proceedings are pending, advocates record the compromise terms before the <strong>National Lok Adalat</strong> or Co-operative Court. This converts the OTS agreement into a binding, non-appealable judicial award that permanently extinguishes the lender&apos;s claims.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By grounding negotiations in RBI compliance and institutional balance sheet needs rather than emotional appeals, borrowers secure the maximum permissible legal waiver while maintaining full statutory protection.
              </p>
            </section>

            {/* Section 7: Forensic Verification of Sanction Letters */}
            <section id="forensic-sanction-letter-verification" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Forensic Checklist for Watertight Cooperative Bank OTS Sanction Letters
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A common and dangerous pitfall in co-operative bank debt resolution is relying on informal verbal assurances from local bank directors, branch managers, or recovery agents. In co-operative institutions, informal promises carry zero legal validity. If a borrower deposits settlement funds without an authentic, Board-ratified sanction letter, the bank can appropriate the money toward accumulated penal interest and continue recovery for the remaining balance.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before remitting a single rupee, our legal team subjects the settlement sanction letter to five mandatory forensic validation checkpoints:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Board Resolution &amp; Meeting Minute Reference</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The sanction letter must be issued on official bank stationery and explicitly cite the specific Board Meeting Number, Resolution Date, and agenda approval item authorizing the debt compromise.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Itemized Ledger &amp; Waiver Breakdown</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must explicitly detail the total outstanding claim, the specific sum waived (penal interest, uncharged interest, principal haircut), and the exact net agreed compromise settlement amount.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Full Debt Extinguishment &amp; Discharge Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The terms must state unambiguously that upon remittance of the agreed settlement sum within the stipulated timeframe, the entire loan account stands fully, permanently, and irrevocably closed.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Withdrawal of Section 101 &amp; Court Proceedings</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The sanction letter must contain a binding commitment by the bank to withdraw all Section 101 recovery certificates, cancel SRO execution warrants, and file joint compromise petitions before Co-operative Courts or the DRT.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-red-950">
                  <ShieldX className="w-4 h-4 text-red-600" />
                  <span>The Golden Rule of Settlement Remittance</span>
                </span>
                <p className="leading-relaxed">
                  Never pay settlement funds in cash to any bank director, recovery agent, or society office-bearer. All settlement remittances must be made exclusively via Account Payee Demand Draft or RTGS/NEFT transferred directly into the designated co-operative bank loan account ledger under formal bank receipt.
                </p>
              </div>
            </section>

            {/* Section 8: Remittance, RBI NDC Mandate, Share Capital Refund & CIBIL */}
            <section id="remittance-rbi-ndc-share-capital-cibil" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Settlement Remittance, Share Capital Adjustment, RBI 30-Day NDC Mandate &amp; CIBIL Bureau Restoration
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Remitting the agreed compromise amount is the penultimate step in loan resolution. The process is concluded only when the co-operative bank fulfills its statutory obligations regarding document release, share capital accounting, and credit bureau updating.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under <strong>RBI Circular RBI/2023-24/60</strong> (Responsible Lending Conduct – Release of Movable/Immovable Property Documents and Issuance of NDC), all regulated lending entities, including Primary Urban Co-operative Banks, are bound by strict statutory timelines:
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Statutory Mandate on 30-Day NDC Delivery &amp; ₹5,000/Day Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  The co-operative bank is statutorily required to issue an official <strong>No Dues Certificate (NDC) / Loan Closure Certificate</strong>, return all original property title deeds, share certificates, and security cheques, and execute a formal Deed of Reconveyance or satisfaction of mortgage within <strong>30 calendar days</strong> of receiving full settlement payment. Any unjustified delay makes the bank liable to pay compensation of <strong>₹5,000 per day of delay</strong> directly to the borrower.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Handling Co-operative Share Capital &amp; Credit Bureau Rebuilding
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers must also ensure two critical post-settlement actions are executed properly:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Adjustment or Refund of Member Share Capital:</strong> The nominal or regular share capital held by the borrower (typically 2.5% to 5% of the original loan limit) must either be set off against the final settlement figure or refunded to the borrower upon account closure as per society bylaws.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Credit Bureau ₹0 Balance Update:</strong> The co-operative bank must report the account to CIBIL, Experian, Equifax, and CRIF High Mark as <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong> with current outstanding balance updated to <strong>₹0</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Score Rehabilitation:</strong> While a &quot;Settled&quot; status temporarily reduces credit scores, it halts ongoing default reporting. By obtaining a secured credit card backed by a small fixed deposit and maintaining disciplined repayment, borrowers successfully rebuild their credit score above 750 within 12 to 18 months.</span>
                </li>
              </ul>
            </section>

            {/* Section 9: Cooperative Settlement Strategy Matrix */}
            <section id="cooperative-resolution-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Cooperative Bank Debt Resolution Comparative Matrix
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating the primary institutional pathways available to resolve a delinquent cooperative bank loan empowers borrowers to choose the most legally secure and financially advantageous route:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Pathway</th>
                      <th>Legal Mechanism &amp; Forum</th>
                      <th>Principal Haircut Scope</th>
                      <th>Resolution Timeline</th>
                      <th>Legal &amp; Financial Implications</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led Board OTS</td>
                      <td>Formal Board Resolution + RBI June 2023 Framework</td>
                      <td>35% – 55% Principal Waiver</td>
                      <td>45 – 90 Days</td>
                      <td>Absolute legal closure; full release of property &amp; ₹0 No Dues Certificate</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Lok Adalat Settlement</td>
                      <td>Conciliation under Legal Services Authorities Act</td>
                      <td>30% – 50% Principal Waiver</td>
                      <td>Single Session</td>
                      <td>Non-appealable civil decree equivalent; zero court fees; permanent dispute bar</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 154 Revision Petition</td>
                      <td>Revision before Divisional Joint Registrar (DJR)</td>
                      <td>Interim stay on execution</td>
                      <td>3 – 9 Months</td>
                      <td>Halts SRO property auctions; exposes illegal interest; forces bank to OTS table</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Contested Section 101 / SRO Auction</td>
                      <td>Summary execution via Land Revenue Code / Rule 107</td>
                      <td>0% (Full Claim + Penalties)</td>
                      <td>6 – 18 Months</td>
                      <td>Severe asset loss; distress public auction below fair market value</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loan Reschedulement / Restructuring</td>
                      <td>Tenure extension / EMI recalculation</td>
                      <td>0% (Full Principal + Interest Repayable)</td>
                      <td>30 – 60 Days</td>
                      <td>No debt reduction; monthly cash flow commitment resumes immediately</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Cooperative Stressed Debt Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Resolving a defaulted loan with an Urban Co-operative Bank or District Central Co-operative Bank requires specialized legal knowledge spanning state co-operative acts, Registrar procedures, and RBI banking directives. SettleLoans represents borrowers across India: issuing formal legal representations, challenging Section 101 recovery certificates before the Divisional Joint Registrar, halting unlawful Special Recovery Officer property attachments, conducting forensic ledger audits to remove penal compounding, and negotiating directly with bank Boards of Directors to secure the deepest lawful OTS haircuts backed by official ₹0 No Dues Certificates.
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
                  11. Frequently Asked Questions: Cooperative Bank Loan Settlement Rules
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Legally verified answers to essential questions regarding Urban Co-operative Bank loan settlements, Section 101 notices, Board approvals, and borrower rights in India.
              </p>

              <div className="space-y-3">
                {(jsonLdGraph['@graph'].find((item: any) => item['@type'] === 'FAQPage') as any)?.mainEntity.map((faq: any, idx: number) => (
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
                  <span className="font-semibold text-slate-800">RBI Master Direction – Prudential Norms for Primary Urban Co-operative Banks</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/1922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Multi-State Co-operative Societies Act, 2002 (Official Legislative Portal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12513&Mode=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Circular – Framework for Compromise Settlements &amp; Technical Write-offs</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://sahakarayukta.maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Maharashtra Co-operative Societies Act (Section 101 &amp; Rule 107 Recovery Provisions)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (UCB Grievance Redressal &amp; Fair Practice Enforcement)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Banking &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Guide
                </Link>
                <Link
                  href="/drt-loan-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  DRT Loan Settlement Guide
                </Link>
                <Link
                  href="/bank-delaying-original-property-documents-after-home-loan-settlement-rbi-rules"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Original Property Documents Release Rules
                </Link>
                <Link
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Freeze Account Rights
                </Link>
                <Link
                  href="/SME-loan-dispute-resolution"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SME Loan Dispute Resolution
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Unsecured Loan Property Rights
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
                Specialist in co-operative bank debt settlement, Section 101 defense, Board OTS negotiations, and RBI compromise framework advisory with over a decade of banking dispute experience.
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
                <span>Cooperative Loan Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Section 101 Notice or Property Auction Threatened?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let a co-operative bank execute summary attachment. Hire senior debt defense advocates to challenge Registrar certificates and negotiate a 35%–55% Board OTS.
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
                  <span>RBI &amp; State Co-op Acts Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Board-Stamped OTS Sanctions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Direct Representation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
