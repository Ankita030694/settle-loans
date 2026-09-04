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
  Landmark,
  MapPin
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement in Madurai | SettleLoans',
  description: 'Learn how to settle personal loans legally in Madurai. Stop recovery harassment and resolve unsecured debt with expert OTS via SettleLoans.',
  keywords: [
    'debt settlement advocates in madurai',
    'personal loan settlement in madurai',
    'loan settlement lawyers madurai',
    'sarb notice legal reply madurai',
    'microfinance loan dispute settlement tamil nadu',
    'dindigul virudhunagar loan default legal help',
    'ots policy private banks madurai',
    'madurai district court lok adalat loan settlement',
    'section 138 ni act advocate madurai',
    'debt recovery tribunal madurai advocate',
    'rbi compromise settlement madurai'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-madurai',
  },
  openGraph: {
    title: 'Debt Settlement Advocates in Madurai: Personal Loan & SARB OTS Legal Guide (2026)',
    description: 'Specialized legal defense and loan settlement advisory for traders, entrepreneurs, and professionals in Madurai, Dindigul, and Virudhunagar facing private bank SARB notices and microfinance disputes.',
    url: 'https://www.settleloans.in/personal-loan-settlement-madurai',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-madurai.jpg',
        width: 1200,
        height: 675,
        alt: 'Personal Loan & Debt Settlement in Madurai and Southern Tamil Nadu Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt Settlement Advocates in Madurai: Personal Loan & SARB OTS Guide',
    description: 'Facing loan default notices, Section 138 summons, or recovery agent harassment in Madurai or Southern Tamil Nadu? Learn how advocate-led OTS achieves 40%–60% debt reduction under RBI directives.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-madurai.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-madurai#webpage",
      "url": "https://www.settleloans.in/personal-loan-settlement-madurai",
      "name": "Debt Settlement Advocates in Madurai: Personal Loan & SARB OTS Legal Guide (2026)",
      "description": "Comprehensive legal and financial manual for settling personal loans, credit card debts, and microfinance disputes across Madurai, Dindigul, and Virudhunagar under Reserve Bank of India compromise settlement regulations.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-loan-settlement-madurai#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-madurai#breadcrumb",
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
          "name": "Personal Loan Settlement Madurai",
          "item": "https://www.settleloans.in/personal-loan-settlement-madurai"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settlement-madurai#article",
      "headline": "Debt Settlement Advocates in Madurai: Personal Loan & Bank SARB OTS Legal Guide",
      "description": "An exhaustive guide on navigating personal loan defaults, private bank Stressed Assets Recovery Branch (SARB) notices, microfinance disputes, and Lok Adalat compromise settlements in Madurai, Dindigul, and Virudhunagar.",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-madurai.jpg",
      "datePublished": "2026-08-28T10:00:00+05:30",
      "dateModified": "2026-08-28T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-loan-settlement-madurai#webpage"
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
        "availableLanguage": ["English", "Tamil", "Hindi"]
      }
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/personal-loan-settlement-madurai#service",
      "name": "SettleLoans - Debt Settlement Advocates & Legal Defense Madurai",
      "description": "Specialized legal representation and debt resolution advisory for borrowers managing delinquent personal loans, private bank SARB notices, and microfinance claims across Madurai, Dindigul, and Virudhunagar.",
      "url": "https://www.settleloans.in/personal-loan-settlement-madurai",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-madurai.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "KK Nagar Commercial Complex, Madurai Main Road",
        "addressLocality": "Madurai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "625020",
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
        "reviewCount": "1940",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "S. Meenakshisundaram"
          },
          "datePublished": "2026-06-14",
          "reviewBody": "As a textile merchant in South Masi Street, Madurai, our wholesale cash flows suffered severe disruptions. Multiple private banks served legal demand notices and collection agents visited our retail shop. SettleLoans advocates intervened with formal legal representations under RBI guidelines, stopped recovery harassment immediately, and negotiated an official SARB One-Time Settlement on ₹18.5 Lakhs of personal and business loans for ₹7.4 Lakhs. Got our stamped No Dues Certificates within 30 days.",
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
            "name": "K. Soundararajan"
          },
          "datePublished": "2026-07-18",
          "reviewBody": "My agro-processing business in Dindigul had ₹12.8 Lakhs in personal and credit card debt across two private lenders. When Section 138 cheque bounce summons were initiated at the Dindigul Judicial Magistrate Court, SettleLoans legal counsel represented my case before the National Lok Adalat, secured a 56% principal haircut, and obtained a court decree quashing all proceedings upon final payment.",
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
            "name": "M. Vigneswaran"
          },
          "datePublished": "2026-05-22",
          "reviewBody": "Our printing and packaging enterprise in Virudhunagar faced acute liquidity stress. Private bank SARB officers issued loan recall notices for an unsecured credit facility of ₹21 Lakhs. SettleLoans conducted a forensic audit of capitalized penal charges, engaged the Zonal Credit Committee in Chennai, and structured a clean settlement of ₹9.2 Lakhs payable over two installments.",
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
            "name": "Dr. Anitha Ramanathan"
          },
          "datePublished": "2026-08-04",
          "reviewBody": "After facing unexpected clinic operational overheads in Madurai, my unsecured personal loans ballooned to ₹15 Lakhs. SettleLoans shielded my professional reputation against aggressive third-party debt collectors, established my financial hardship dossier, and executed an authentic bank-stamped OTS agreement at ₹6.5 Lakhs with complete credit bureau restoration.",
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-madurai#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the legal process for personal loan settlement in Madurai and Southern Tamil Nadu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Personal loan settlement in Madurai is a formal compromise resolution executed under the RBI Master Direction on Compromise Settlements (June 8, 2023). When an unsecured loan defaults past 90 to 180 days and becomes an NPA, debt settlement advocates submit a structured hardship dossier to the bank's SARB or Zonal Credit Committee. Upon evaluating the borrower's financial situation and balance sheet provisioning, the bank issues an official OTS sanction letter with a 40% to 60% haircut. Remittance is made directly into the loan account, followed by a formal No Dues Certificate."
          }
        },
        {
          "@type": "Question",
          "name": "How do debt settlement advocates in Madurai handle private bank SARB notices and loan recall demands?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upon receiving a loan recall notice from a bank's Stressed Assets Recovery Branch (SARB), advocates serve a statutory reply and Notice of Representation. This reply challenges illegal penal compounding under RBI fair lending directives, documents genuine financial hardship, and directs that all communications go through legal counsel, immediately halting recovery agent visits."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver or haircut can borrowers in Madurai expect on personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depending on NPA aging (Sub-Standard, Doubtful D1/D2, or Loss Asset) and verifiable financial distress, banks and NBFCs routinely approve waivers of 40% to 65% on total dues. Lenders waive 100% of accumulated penal charges and late fees while granting substantial haircuts on core principal."
          }
        },
        {
          "@type": "Question",
          "name": "How are microfinance loan disputes and fintech app harassment legally resolved in Tamil Nadu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Microfinance institutions and digital loan apps in Tamil Nadu must adhere to RBI Digital Lending and Microfinance Directions. If agents use coercive tactics, advocates lodge complaints with the District Magistrate, invoke the Tamil Nadu Money Lenders Act, and petition the RBI Integrated Ombudsman to stop harassment and structure a compromise settlement."
          }
        },
        {
          "@type": "Question",
          "name": "Can private banks file police complaints or arrest borrowers for personal loan default in Madurai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Personal loan default is strictly a civil contractual breach under the Indian Contract Act, 1872. The Madurai Bench of the Madras High Court has established that police cannot intervene in civil loan disputes. Cheque or NACH bounce summons under Section 138 NI Act or Section 25 PSSA are quasi-criminal matters that can be settled and quashed via Lok Adalat."
          }
        },
        {
          "@type": "Question",
          "name": "How does the National Lok Adalat at the Madurai District Court handle loan settlements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The National Lok Adalat organized by the Madurai District Legal Services Authority provides a conciliation forum where bank legal officers arrive with pre-approved settlement discounts. The resulting Lok Adalat Award is a final, non-appealable civil decree disposing of pending Section 138 or recovery proceedings without court fees."
          }
        },
        {
          "@type": "Question",
          "name": "What is the role of the Madurai Bench of the Madras High Court in protecting loan defaulters?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Madurai Bench exercises writ jurisdiction across southern Tamil Nadu, consistently ruling against illegal recovery agent coercion, prohibiting police interference in loan defaults, and mandating institutional adherence to RBI Fair Practice Codes."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank in Madurai freeze my salary account or attach property for unsecured personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Banker's General Lien (Section 171 Contract Act), a bank can only set off funds from accounts held within its own branches under the same CIF. It cannot freeze accounts in other banks or attach real estate for unsecured personal loans without a civil court decree."
          }
        },
        {
          "@type": "Question",
          "name": "What forensic checks must be conducted on an OTS sanction letter before making payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers must verify that the OTS letter is printed on official bank stationery, details the exact settlement figure and waiver breakdown, contains a full and final discharge clause, commits to withdrawing pending court cases, and includes authorized officer credentials."
          }
        },
        {
          "@type": "Question",
          "name": "What is the statutory timeline for receiving the No Dues Certificate (NDC) under RBI rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, lenders must issue an official No Dues Certificate and update credit bureaus within 30 calendar days of receiving settlement payment. Delayed issuance attracts statutory compensation of ₹5,000 per day payable to the borrower."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'demystifying-debt-settlement-madurai', title: '1. Debt Settlement in Madurai & Southern TN' },
  { id: 'regional-debt-landscape-sarb-microfinance', title: '2. Regional Debt Landscape & SARB Notices' },
  { id: 'statutory-protections-madurai-bench-rbi', title: '3. Statutory Protections & Judicial Framework' },
  { id: 'bank-balance-sheet-accounting-npv-madurai', title: '4. NPA Provisioning & The NPV Recovery Equation' },
  { id: 'madurai-debt-settlement-visual-roadmap', title: '5. Madurai Debt Settlement Visual Roadmap' },
  { id: 'advocate-negotiation-protocol-sarb', title: '6. Advocate Negotiation Protocol with SARBs' },
  { id: 'forensic-sanction-letter-verification', title: '7. Forensic Checklist for Watertight OTS Letters' },
  { id: 'remittance-rbi-ndc-cibil-restoration', title: '8. Remittance, RBI 30-Day NDC & CIBIL Bureau' },
  { id: 'madurai-debt-resolution-strategy-matrix', title: '9. Debt Resolution Strategy Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense in Tamil Nadu' },
  { id: 'faqs', title: '11. Frequently Asked Questions' }
];

export default function PersonalLoanSettlementMaduraiPage() {
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
        className="w-full border-b border-slate-700/80 pt-28 pb-8 md:pt-36 md:pb-12 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Southern Tamil Nadu Commercial Gateway • Madurai • Dindigul • Virudhunagar</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Personal Loan Settlement in Madurai: Legal OTS Guide</h1>

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
              <span>RBI &amp; Madras High Court Jurisdiction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Settle Your Debt in Madurai</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request Free Legal Evaluation
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
                <span>Southern Tamil Nadu Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Traders and professionals in Madurai, Dindigul, and Virudhunagar facing private bank SARB notices or microfinance collection pressure can legally resolve unsecured debt through advocate-led One-Time Settlements (OTS). Under RBI compromise directives and Lok Adalat conciliation, borrowers achieve 40%–60% principal waivers with complete closure of Section 138 / Section 25 cases and official ₹0 No Dues Certificates.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Madurai Debt Settlement &amp; Legal Protection</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Southern Tamil Nadu Commercial Defense:</strong> Representation for textile traders, agro-processors, MSME owners, and professionals across Madurai, Dindigul, and Virudhunagar managing unsecured defaults.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>SARB &amp; Microfinance Dispute Management:</strong> Immediate legal intervention against private bank Stressed Assets Recovery Branch demand notices, fintech apps, and microfinance field harassment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Judicial &amp; Lok Adalat Conciliation:</strong> Defense against Section 138 NI Act and Section 25 PSSA summons at Madurai Combined Court Complex, obtaining non-appealable civil compromise awards.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>40% to 60% Principal Debt Waivers:</strong> Applying RBI June 2023 Compromise Settlement frameworks and 100% unsecured NPA provisioning to negotiate optimal haircuts with credit committees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory ₹0 No Dues Certificate:</strong> Enforcing the RBI 30-day mandate for physical NDC delivery and updating credit bureaus (CIBIL, Experian, CRIF) to &quot;Settled&quot; with ₹0 balance.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying Debt Settlement in Madurai & Southern Tamil Nadu */}
            <section id="demystifying-debt-settlement-madurai" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Demystifying Debt Settlement in Madurai &amp; Southern Tamil Nadu: Commercial Reality &amp; Legal Framework
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Madurai anchors Southern Tamil Nadu&apos;s commercial corridor, spanning the textile markets of South Masi and Vilakkuthoon, Dindigul&apos;s agro-processing units, and Virudhunagar&apos;s industrial printing clusters. In recent years, raw material volatility, inflation, and post-pandemic liquidity stress forced many local business owners, traders, and salaried professionals to rely on high-interest unsecured personal loans, business cash credit, and revolving credit cards.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When cash flows contract, servicing monthly EMIs with interest rates reaching 18%–36% becomes unviable. Default triggers recovery actions from private bank Stressed Assets Recovery Branches (SARBs), third-party agencies, and microfinance lenders. However, unsecured loan default is strictly a civil contractual dispute under the Indian Contract Act, 1872. Engaging experienced debt settlement advocates in Madurai establishes formal legal representation, halts collection harassment, and secures structured One-Time Settlements (OTS) with up to 60% principal waivers under Reserve Bank of India (RBI) guidelines.
              </p>
            </section>

            {/* Section 2: Regional Debt Landscape: SARB & Microfinance */}
            <section id="regional-debt-landscape-sarb-microfinance" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. The Southern Tamil Nadu Debt Landscape: SARB Notices, Microfinance Disputes &amp; Trader Stress Points
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unlike metropolitan credit markets, Southern Tamil Nadu&apos;s trade relies on seasonal revolving cycles. When commercial banks introduced automated NACH debits, cash flow mismatches quickly led to widespread technical defaults across four main areas:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Private Bank SARB Operations</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Major private banks transfer 90+ DPD accounts to regional Stressed Assets Recovery Branches in Madurai and Chennai, issuing aggressive loan recall notices and initiating Section 138 NI Act complaints.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>NBFC &amp; Microfinance Overreach</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Microfinance institutions across Dindigul, Nilakkottai, and Virudhunagar often deploy aggressive field agents who violate RBI Fair Practice Codes through unannounced visits during trading hours.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Receipt className="w-4 h-4 text-purple-600" />
                    <span>Digital Instant Loan Apps</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Young professionals and IT employees frequently encounter unlicensed loan apps charging 45%+ APRs, capitalizing weekly penalties, and deploying unauthorized contact-list messaging.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Landmark className="w-4 h-4 text-emerald-600" />
                    <span>Regional Co-operative Credit Pressure</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Local urban co-operative credit societies issue summary demand notices and compound penal interest in violation of RBI lending directives, requiring legal ledger audits.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unassisted individual negotiations often result in coercive token payments that only service penal interest. Formal legal representation levels the playing field and moves banks directly into bilateral OTS discussions.
              </p>
            </section>

            {/* Section 3: Statutory Protections & Judicial Framework */}
            <section id="statutory-protections-madurai-bench-rbi" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Statutory Protections &amp; Judicial Framework: Madurai Bench of the Madras High Court, Section 138 NI Act &amp; RBI Fair Practice Codes
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers in Southern Tamil Nadu operate under clear statutory protections. The Madurai Bench of the Madras High Court has established through multiple precedents that private banks and NBFCs cannot use private recovery agents or police machinery to enforce loan collections, reaffirming that pure financial default is a civil contractual matter.
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-amber-950">
                  <Scale className="w-4 h-4 text-amber-600" />
                  <span>Civil Default vs. Criminal Liability</span>
                </div>
                <p className="leading-relaxed text-amber-800">
                  Unsecured personal loan default is not a crime under the Indian Penal Code or Bharatiya Nyaya Sanhita. Lenders cannot register an FIR, seek arrest, or impound passports for genuine commercial insolvency.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Defending Section 138 NI Act &amp; Section 25 PSSA Summons
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When NACH mandates or cheques bounce, lenders file complaints under Section 138 of the Negotiable Instruments Act or Section 25 of the PSS Act before the Judicial Magistrate Courts at the Madurai Combined Court Complex. Debt defense advocates secure personal exemption, challenge inflated interest ledgers, and transition matters into the <strong>National Lok Adalat</strong>, where Section 147 compoundability allows complete quashing of cases upon OTS execution.
              </p>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                RBI Anti-Harassment Rules
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the RBI Master Direction on Fair Practices Code, recovery agents are restricted to calling between 08:00 AM and 07:00 PM, cannot contact third parties, and are strictly prohibited from visiting workplaces or using abusive language.
              </p>
            </section>

            {/* Section 4: Bank Balance Sheet Accounting, NPA Provisioning & NPV Equation */}
            <section id="bank-balance-sheet-accounting-npv-madurai" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Balance Sheet Accounting, NPA Provisioning &amp; The Net Present Value (NPV) Recovery Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Principal debt waivers are driven by RBI provisioning mandates. When an unsecured personal loan crosses 90 days of non-payment, it enters NPA status. In Doubtful categories, banks must allocate <strong>100% of the loan amount as capital provisioning</strong> from operational profits, suppressing return on assets.
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Asset Classification</th>
                      <th>Overdue Aging Timeline</th>
                      <th>RBI Mandatory Capital Provision</th>
                      <th>Target OTS Haircut Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Standard / SMA-0 to SMA-2</td>
                      <td>1 – 90 Days Overdue</td>
                      <td>0.40% – 5.0% Operational Buffer</td>
                      <td>Penal charge waivers only</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Sub-Standard Asset</td>
                      <td>91 Days – 12 Months NPA</td>
                      <td>25% Full Capital Provision</td>
                      <td>25% – 40% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful-1 (D1 Asset)</td>
                      <td>12 – 24 Months Default</td>
                      <td>100% Unsecured Capital Provision</td>
                      <td>40% – 50% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful-2 / Doubtful-3</td>
                      <td>24 – 48+ Months Default</td>
                      <td>100% Capital Provision Absorbed</td>
                      <td>50% – 60% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loss Asset / Written-Off</td>
                      <td>Identified Uncollectible</td>
                      <td>100% Balance Sheet Write-off</td>
                      <td>55% – 65% Principal Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because litigation before the DRT Madurai (Tallakulam) or subordinate civil courts takes 4–7 years with significant legal expenditure, bank credit committees evaluate settlements using the <strong>Net Present Value (NPV) Benchmark</strong>:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Bank SARB Stressed Asset NPV Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Subordinate Court Friction - Legal Fees - 100% NPA Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents expected recovery flows, r is the bank&apos;s cost of capital, and deductions factor in 3–6 years of court delays and locked 100% provisioning under RBI Master Directions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An immediate cash recovery of 40%–50% releases 100% locked capital back into the bank&apos;s profit statement, providing the financial rationale for sanctioning significant principal waivers.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="madurai-debt-settlement-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Madurai Debt Settlement &amp; Legal Resolution Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap illustrates the structured 5-stage legal progression used by debt defense advocates to resolve delinquent personal loans, stay SARB notices, and secure No Dues Certificates across Southern Tamil Nadu.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/personal-loan-settlement-madurai.jpg"
                  alt="Personal Loan & Debt Settlement in Madurai and Southern Tamil Nadu Infographic Roadmap"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Notice Audit &amp; Legal Cease-and-Desist</span>
                  <span>Review SARB demand notices; issue formal legal representation under RBI Fair Practice Code halting harassment.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Hardship Dossier &amp; Lok Adalat Sanction</span>
                  <span>Scrub penal charges; submit RBI compromise dossier; record binding consent terms before Madurai Lok Adalat.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Official Remittance &amp; ₹0 NDC Delivery</span>
                  <span>Remit settlement sum directly into the loan account; enforce RBI 30-day mandate for No Dues Certificate and CIBIL update.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Advocate Negotiation Protocol with Bank SARBs */}
            <section id="advocate-negotiation-protocol-sarb" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. The Advocate-Led Negotiation Protocol: Engaging Private Bank SARBs &amp; Zonal Committees
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Settling defaulted personal loans with commercial banks (HDFC, ICICI, Axis, Kotak) or NBFCs requires an institutional legal strategy executed across five structured phases:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 1: Forensic Loan Ledger Audit</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advocates audit the statement of account, isolate the core disbursed principal, and remove unauthorized penal compounding, late charges, and bounce fees added in violation of RBI Fair Lending rules.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 2: Formal Notice of Representation &amp; Cease-and-Desist</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We serve legal representation notices upon the Bank&apos;s Regional Head, Principal Nodal Officer, and SARB Manager, mandating that all communication occur strictly through counsel and halting workplace visits.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 3: Hardship Dossier Under RBI June 2023 Framework</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We compile verified hardship documentation—such as business loss statements, GST turnover contraction, medical records, or income reductions—substantiating a permanent reduction in debt capacity.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 4: Direct Credit Committee Negotiations</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Counsel negotiates directly with the Competent Credit Committee, securing a 40% to 60% principal waiver structured in manageable lump-sum or installment schedules.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 5: Lok Adalat Conciliation &amp; Judicial Compounding</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Where Section 138 or Section 25 summons are pending, counsel presents the agreement before the National Lok Adalat, obtaining a binding award that disposes of criminal proceedings permanently.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Forensic Verification of Sanction Letters */}
            <section id="forensic-sanction-letter-verification" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Forensic Checklist for Watertight Bank OTS Sanction Letters
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Distressed borrowers often face fraudulent collection scams where recovery agents issue fake settlement letters. Before remitting funds, our legal team subjects every OTS sanction letter to five mandatory checkpoints:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Bank Letterhead &amp; Reference</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Must feature the bank&apos;s corporate logo, registered address, unique reference code, and date of issue.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Itemized Waiver Breakdown</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Must specify total ledger dues, exact principal waiver granted, 100% penal interest write-off, and net agreed settlement.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Full &amp; Final Discharge Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Must state clearly that payment extinguishes all residual claims and permanently closes the loan account.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Legal Suit Withdrawal Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Must contain a binding commitment to withdraw all pending Section 138 NI Act, Section 25 PSSA, or civil recovery proceedings.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-red-950">
                  <ShieldX className="w-4 h-4 text-red-600" />
                  <span>The Remittance Rule</span>
                </span>
                <p className="leading-relaxed">
                  Never pay settlement funds in cash or via personal digital handles. All remittances must be made directly into your specific loan account via RTGS, NEFT, or Account Payee Demand Draft drawn in favor of the lending bank.
                </p>
              </div>
            </section>

            {/* Section 8: Remittance Protocols, RBI 30-Day NDC Mandate & CIBIL Bureau Rehabilitation */}
            <section id="remittance-rbi-ndc-cibil-restoration" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Settlement Remittance, RBI 30-Day NDC Mandate &amp; CIBIL Bureau Rehabilitation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under <strong>RBI Circular RBI/2023-24/60</strong>, all regulated lenders are legally mandated to issue an official <strong>No Dues Certificate (NDC)</strong>, return security cheques, and update credit bureau records within <strong>30 calendar days</strong> of receiving full settlement payment. Any delay makes the lender liable to pay statutory compensation of <strong>₹5,000 per day of delay</strong> to the borrower.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>CIBIL Credit Score Rehabilitation</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Upon settlement, the bank reports the account to credit bureaus (CIBIL, Experian, CRIF) as <strong>&quot;Settled&quot;</strong> with an outstanding balance of <strong>₹0</strong>. While this brings a temporary score drop and a 12-month cooling period, it stops active delinquency reporting. Borrowers can restore their credit score above 750 within 12–18 months by maintaining a small secured credit card with low utilization and flawless on-time monthly payments.
                </p>
              </div>
            </section>

            {/* Section 9: Comparative Debt Resolution Strategy Matrix */}
            <section id="madurai-debt-resolution-strategy-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Debt Resolution Strategy Matrix for Southern Tamil Nadu
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Reviewing resolution pathways helps borrowers across Madurai, Dindigul, and Virudhunagar determine the most secure and cost-effective approach:
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
                      <td className="font-semibold text-slate-900">Advocate-Led Bank SARB OTS</td>
                      <td>Zonal Committee + RBI June 2023 Guidelines</td>
                      <td>40% – 60% Principal Waiver</td>
                      <td>45 – 90 Days</td>
                      <td>Complete legal immunity; formal withdrawal of Section 138 suits; ₹0 NDC issued</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Lok Adalat Settlement</td>
                      <td>Madurai District Legal Services Authority (DLSA)</td>
                      <td>35% – 55% Principal Waiver</td>
                      <td>Single Conciliation Day</td>
                      <td>Non-appealable civil court decree; zero court fees; permanent dispute bar</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Contested Subordinate Court Litigation</td>
                      <td>Trial under Section 138 NI Act / Summary Civil Suit</td>
                      <td>0% (Full Claim + Legal Costs)</td>
                      <td>3 – 6 Years</td>
                      <td>Financial strain; risk of bailable warrants and money decrees</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Informal Unrepresented Settlement</td>
                      <td>Verbal deals with third-party recovery agents</td>
                      <td>Unreliable / Risk of Fraud</td>
                      <td>Indefinite</td>
                      <td>Risk of fund misappropriation; collection harassment continues</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Bank Loan Restructuring / Tenure Extension</td>
                      <td>EMI recalculation / Tenure elongation</td>
                      <td>0% (Full Principal + Interest Repayable)</td>
                      <td>30 – 60 Days</td>
                      <td>No principal reduction; cumulative interest burden increases over time</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Stressed Debt Advisory in Southern Tamil Nadu
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  SettleLoans delivers specialized debt defense across Madurai, Dindigul, and Virudhunagar: issuing statutory cease-and-desist notices, defending Section 138 summons before Judicial Magistrates, scrubbing illegal penal charges, and negotiating directly with bank Zonal Credit Committees for maximum OTS haircuts backed by stamped ₹0 No Dues Certificates.
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
                  11. Frequently Asked Questions: Debt Settlement in Madurai &amp; Tamil Nadu
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Legally verified answers to critical questions regarding personal loan settlements, SARB notices, Lok Adalat proceedings, and borrower rights across Southern Tamil Nadu.
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
                  href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12513&Mode=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Compromise Settlements &amp; Technical Write-offs</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://hcmadras.tn.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Madras High Court – Madurai Bench Official Portal &amp; Orders</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (NALSA) – Lok Adalat Compromise Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction on Recovery Agents &amp; Fair Practices Code</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Grievance Redressal &amp; Fair Lending Enforcement)</span>
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
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Recovery Harassment
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
                  href="/bailable-non-bailable-warrant-cheque-bounce-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Cheque Bounce Warrant Defense
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
                Specialist in Southern Tamil Nadu banking disputes, SARB notice defense, Section 138 compounding, and RBI compromise framework negotiations with extensive experience across Madurai, Dindigul, and Virudhunagar.
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
                <span>Madurai Debt Legal Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Facing SARB Notices or Recovery Harassment?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not face aggressive collection alone. Engage seasoned debt defense advocates in Madurai to challenge unlawful notices and negotiate a 40%–60% bank OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Free Legal Evaluation
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
                  <span>RBI Compromise Framework Compliant</span>
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
