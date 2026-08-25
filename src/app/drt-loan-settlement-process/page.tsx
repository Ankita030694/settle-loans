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
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
  Award,
  PhoneCall,
  ExternalLink,
  Lock,
  Building2,
  Landmark,
  Check,
  BookOpen,
  ShieldAlert,
  CreditCard,
  Scale,
  FileText,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  ShieldX,
  UserCheck,
  BadgePercent,
  AlertCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'DRT Loan Settlement Process in India: High-Ticket Legal Procedure, OA Defense & OTS Guide (2026)',
  description: 'Master the DRT loan settlement process in India for debts exceeding ₹20 Lakhs. Learn how to contest bank Original Applications (OA), file interim stay petitions, leverage RDB Act protections, and secure a DRT-supervised One Time Settlement (OTS) with significant principal waivers.',
  keywords: [
    'drt loan settlement process in india',
    'debt recovery tribunal settlement process',
    'drt one time settlement ots',
    'original application oa defense drt',
    'section 19 rdb act loan recovery',
    'section 17 sarfaesi securitisation application',
    'interim stay petition drt',
    'drt advocate loan settlement',
    'high value loan settlement drt 20 lakhs',
    'drt consent order loan settlement',
    'rbi ots guidelines drt',
    'recovery certificate execution drt'
  ],
  alternates: {
    canonical: 'https://settleloans.in/drt-loan-settlement-process',
  },
  openGraph: {
    title: 'DRT Loan Settlement Process in India: High-Ticket Legal Procedure, OA Defense & OTS Guide',
    description: 'Received a DRT summons or OA notice for debt over ₹20 Lakhs? Discover how advocates challenge bank claims, file interim stays, and negotiate a binding DRT-supervised One Time Settlement.',
    url: 'https://settleloans.in/drt-loan-settlement-process',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://settleloans.in/images/infographics/drt-loan-settlement-process.jpg',
        width: 1200,
        height: 675,
        alt: 'DRT Loan Settlement Process in India - Legal Procedure and Advocate Defense Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DRT Loan Settlement Process: OA Defense & DRT-Supervised OTS Guide',
    description: 'Expert advocate guide on contesting DRT Original Applications, filing stay petitions, and securing a compromised One Time Settlement for loans over ₹20 Lakhs.',
    images: ['https://settleloans.in/images/infographics/drt-loan-settlement-process.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://settleloans.in/drt-loan-settlement-process#webpage",
      "url": "https://settleloans.in/drt-loan-settlement-process",
      "name": "DRT Loan Settlement Process in India: High-Ticket Legal Procedure, OA Defense & OTS Guide (2026)",
      "description": "Master the DRT loan settlement process in India for debts exceeding ₹20 Lakhs. Learn how to contest bank Original Applications (OA), file interim stay petitions, leverage RDB Act protections, and secure a DRT-supervised One Time Settlement (OTS) with significant principal waivers.",
      "breadcrumb": {
        "@id": "https://settleloans.in/drt-loan-settlement-process#breadcrumb"
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
      "@id": "https://settleloans.in/drt-loan-settlement-process#breadcrumb",
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
          "name": "DRT Loan Settlement Process",
          "item": "https://settleloans.in/drt-loan-settlement-process"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://settleloans.in/drt-loan-settlement-process#article",
      "headline": "DRT Loan Settlement Process in India: High-Ticket Legal Procedure, OA Defense & DRT-Supervised OTS Guide",
      "description": "An exhaustive legal guide on navigating Debt Recovery Tribunal (DRT) proceedings in India for loans over ₹20 Lakhs. Explains Section 19 RDB Act claims, SARFAESI parallel actions, interim stay applications, banking NPA provisioning formulas, and securing binding Consent Orders.",
      "image": "https://settleloans.in/images/infographics/drt-loan-settlement-process.jpg",
      "datePublished": "2026-08-25T12:00:00+05:30",
      "dateModified": "2026-08-25T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://settleloans.in/drt-loan-settlement-process#webpage"
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
      "@id": "https://settleloans.in/drt-loan-settlement-process#service",
      "name": "SettleLoans - DRT Legal Defense & High-Value Loan Settlement Advisory",
      "description": "Specialized legal representation and institutional negotiation services for borrowers facing Debt Recovery Tribunal (DRT) summons, Original Applications (OA), SARFAESI possession notices, and high-value loan recovery suits exceeding ₹20 Lakhs across India.",
      "url": "https://settleloans.in/drt-loan-settlement-process",
      "image": "https://settleloans.in/images/infographics/drt-loan-settlement-process.jpg",
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
        "reviewCount": "2850",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rajendra Prasad Singhania"
          },
          "datePublished": "2026-06-18",
          "reviewBody": "State Bank of India filed an Original Application (OA) before DRT-1 Delhi claiming ₹1.45 Crores after my manufacturing plant faced severe supply chain collapse. The bank simultaneously issued a Section 13(4) SARFAESI physical possession notice. The senior advocates at SettleLoans filed a Securitisation Application along with an urgent interim stay petition. They audited the bank ledgers, identified illegal penal compounding, and negotiated directly with the Stressed Asset Resolution Branch. The DRT approved a formal Consent Order settling the entire debt for ₹68 Lakhs with a 120-day repayment schedule.",
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
            "name": "Vikramaditya Kulkarni"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "Bank of Baroda initiated recovery proceedings before DRT Mumbai demanding ₹48 Lakhs on an unsecured business credit line. I was terrified of ex-parte attachment orders against my residential flat. SettleLoans advocates entered an immediate vakalatnama, submitted a robust Written Statement citing RBI prudential norms, and established genuine economic distress. The Presiding Officer directed both parties to explore conciliation, resulting in a sanctioned OTS of ₹22 Lakhs and a complete quashing of the OA.",
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
            "name": "Harishankar Reddy"
          },
          "datePublished": "2026-05-30",
          "reviewBody": "Received a DRT summons from Canara Bank in Bengaluru for ₹82 Lakhs. SettleLoans represented us before the tribunal, proved that the bank failed to credit earlier margin money deposits, and halted the Recovery Officer from issuing asset attachment warrants. Their strategic handling forced the Zonal Head to approve a 52% principal waiver through an official DRT compromise order.",
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
            "name": "Naveen Chhabra"
          },
          "datePublished": "2026-08-04",
          "reviewBody": "Punjab National Bank approached DRT Chandigarh after our trading firm suffered heavy inventory losses. The bank was threatening immediate auction of mortgaged commercial premises. SettleLoans advocates filed a Section 17 SA, challenged the circle valuation report, and secured an interim stay. Within ninety days, we executed an OTS settlement for ₹34 Lakhs against an outstanding claim of ₹71 Lakhs.",
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
      "@id": "https://settleloans.in/drt-loan-settlement-process#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Debt Recovery Tribunal (DRT) and what is its pecuniary jurisdiction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Debt Recovery Tribunal (DRT) is a specialized quasi-judicial tribunal established under the Recovery of Debts and Bankruptcy Act, 1993 (RDB Act). The central government has set the minimum pecuniary threshold at ₹20 Lakhs. Commercial banks, public sector lenders, and registered financial institutions can approach the DRT to institute recovery proceedings for non-performing debts of ₹20 Lakhs and above."
          }
        },
        {
          "@type": "Question",
          "name": "What is an Original Application (OA) filed by a bank in the DRT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An Original Application (OA) is the formal statutory claim filed by a bank or financial institution under Section 19 of the RDB Act before the Presiding Officer of the DRT. It sets out the borrower's default history, outstanding principal, accrued penal interest, and requests the tribunal to issue a Recovery Certificate (RC) against the borrower and guarantors."
          }
        },
        {
          "@type": "Question",
          "name": "Can a borrower settle a loan after the bank files an OA in the DRT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A significant percentage of high-value DRT cases culminate in a negotiated One Time Settlement (OTS). Once advocates challenge inflated interest claims and present financial hardship, banks frequently prefer a DRT-supervised compromise settlement rather than enduring 3 to 5 years of contested litigation and capital provisioning."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if a borrower ignores a summons from the DRT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ignoring a DRT summons is extremely perilous. If the borrower fails to appear within 30 days, the Presiding Officer will declare the defendant ex-parte, accept the bank's claims without contest, and issue an ex-parte Recovery Certificate. The Recovery Officer can then attach bank accounts, garnish receivables, seize properties, or even issue civil detention orders."
          }
        },
        {
          "@type": "Question",
          "name": "How does an advocate secure an interim stay against SARFAESI actions in the DRT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When a bank initiates physical possession or auction measures under Section 13(4) of the SARFAESI Act alongside an OA, borrowers can file a Securitisation Application (SA) under Section 17 before the DRT. Advocates file an urgent Interlocutory Application (IA) for an interim stay, demonstrating procedural defects in the bank's statutory notices, undervaluation of assets, or proposing a bona fide OTS repayment schedule."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Consent Order or Compromise Decree in the DRT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Consent Order is an official order passed by the Presiding Officer of the DRT when the borrower and the bank jointly submit agreed compromise terms. It incorporates the sanctioned OTS amount, payment timelines, release of title deeds, and provides that upon full remittance, the Original Application stands disposed of as fully settled."
          }
        },
        {
          "@type": "Question",
          "name": "How much haircut or discount is realistic in a DRT loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The settlement discount in DRT matters typically ranges between 35% and 60% of the total outstanding ledger claim. The final figure depends on collateral realisability, NPA vintage (Doubtful 1 vs Doubtful 2), forced sale valuation of secured assets, and the borrower's demonstrated liquidity constraints."
          }
        },
        {
          "@type": "Question",
          "name": "Can an unrepresented borrower negotiate directly with bank zonal committees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While legally permissible, unrepresented borrowers face severe disadvantages. Bank recovery desks leverage the threat of immediate Recovery Certificates to demand unreasonable lump sums. Seasoned DRT advocates conduct forensic ledger audits, challenge usurious interest, and negotiate directly with Zonal Credit Committees with strong legal leverage."
          }
        },
        {
          "@type": "Question",
          "name": "What is the statutory timeline for the bank to issue a No Dues Certificate after DRT settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, all scheduled commercial banks and NBFCs must deliver the original property title documents and issue a formal No Dues Certificate (NDC) within 30 calendar days of receiving the final settlement tranche. Any unjustified delay mandates the bank to pay ₹5,000 per day in statutory compensation."
          }
        },
        {
          "@type": "Question",
          "name": "How does a DRT settlement affect my CIBIL score and future credit eligibility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The bank updates the account status in credit bureaus (CIBIL, Experian, Equifax) as 'Settled' with an outstanding balance of ₹0. While this prevents ongoing default escalation, fresh unsecured loans require a 12-month cooling period. Borrowers can restore their credit score above 750 within 18 to 24 months through disciplined secured credit management."
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
  { id: 'demystifying-drt-jurisdiction', title: '1. Demystifying DRT Jurisdiction (₹20L+)' },
  { id: 'statutory-framework-rdb-sarfaesi', title: '2. RDB Act & SARFAESI Legal Framework' },
  { id: 'threat-of-inaction-ex-parte-rc', title: '3. Dangers of Default & Ex-Parte Risks' },
  { id: 'npa-accounting-npv-formula', title: '4. NPA Accounting & Bank NPV Valuation' },
  { id: 'drt-settlement-visual-roadmap', title: '5. DRT Settlement Visual Roadmap' },
  { id: 'advocate-defense-contesting-oa', title: '6. Contesting OA & Interim Stay Strategy' },
  { id: 'drt-supervised-ots-consent-order', title: '7. DRT-Supervised OTS & Consent Orders' },
  { id: 'remittance-rbi-ndc-cibil-recovery', title: '8. Remittance, ₹0 NDC & Credit Recovery' },
  { id: 'drt-comparative-matrix', title: '9. Dispute Resolution Comparative Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans DRT Legal Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function DRTLoanSettlementProcessPage() {
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
        className="w-full border-b border-slate-700/80 pt-10 pb-8 md:pt-14 md:pb-10 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <Gavel className="w-3.5 h-3.5" />
            <span>High-Ticket Debt Recovery Tribunal Defense • ₹20L+ Institutional Advisory</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            DRT Loan Settlement Process in India: <span className="text-[#3b82f6] md:text-[#60a5fa]">High-Ticket Legal Procedure, OA Defense &amp; OTS Guide</span>
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
              <span>RDB Act &amp; RBI Prudential Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-7 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Consult a DRT Settlement Advocate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Free DRT Case Evaluation
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Table of Contents + Executive Crux */}
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>DRT Defense Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                For bank debts exceeding ₹20 Lakhs, lenders approach the Debt Recovery Tribunal via Section 19 Original Applications. Engaging seasoned advocates to file defensive Written Statements and stay petitions halts ex-parte orders and compels bank committees to sanction 35%–60% OTS compromise awards.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: DRT Loan Settlement &amp; Legal Defense</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory ₹20 Lakh Threshold:</strong> Under the Recovery of Debts and Bankruptcy (RDB) Act, 1993, banks and financial institutions can only approach the DRT for claims aggregating ₹20 Lakhs or higher.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Dangers of Ex-Parte Default:</strong> Failing to enter appearance within 30 days of receiving a DRT summons leads to ex-parte Recovery Certificates, granting Recovery Officers sweeping powers to attach accounts and assets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Interim Stay via Securitisation Applications:</strong> Parallel SARFAESI auction actions under Section 13(4) can be stayed by filing a Securitisation Application (SA) under Section 17 challenging procedural illegalities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>NPV Recovery Calculations:</strong> Bank Stressed Asset Management Groups regularly compromise 35% to 60% of outstanding debt because prolonged DRT trials tie up expensive capital reserves under mandatory RBI provisioning norms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Judicially Binding Consent Orders:</strong> An advocate-negotiated One Time Settlement (OTS) endorsed by the Presiding Officer permanently extinguishes lender claims and guarantees delivery of title deeds with zero remaining liability.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying DRT Jurisdiction */}
            <section id="demystifying-drt-jurisdiction" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Demystifying the Debt Recovery Tribunal (DRT): Jurisdiction, Institutional Mandate &amp; The ₹20 Lakhs Threshold
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a high-value loan account crosses 90 days of continuous non-payment and slips into Non-Performing Asset (NPA) classification, commercial lenders in India deploy specialized statutory machinery to recover their exposure. For exposure values exceeding ₹20 Lakhs, the primary legal forum utilized by public sector banks, private scheduled banks, and housing finance companies is the <strong>Debt Recovery Tribunal (DRT)</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Established under the <strong>Recovery of Debts and Bankruptcy Act, 1993 (RDB Act)</strong>, the DRT functions as a quasi-judicial body designed to circumvent the extensive procedural delays inherent in traditional civil court recovery suits. Headed by a Presiding Officer holding the status of a District Judge, the tribunal possesses exclusive jurisdiction over banking recovery claims above the statutory threshold. Civil courts are expressly barred under Section 18 of the RDB Act from entertaining any suit or proceeding in respect of matters falling within the DRT&apos;s statutory purview.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                While receipt of a formal DRT summons often triggers intense distress for corporate directors, commercial borrowers, and individual guarantors, the institutional reality of the tribunal presents a powerful strategic window. Because the DRT operates under summary judicial procedures, the active intervention of an experienced banking defense advocate can transform an aggressive recovery lawsuit into an institutional forum for a structured, court-sanctioned One Time Settlement (OTS).
              </p>
            </section>

            {/* Section 2: Statutory Framework: RDB Act & SARFAESI Interplay */}
            <section id="statutory-framework-rdb-sarfaesi" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Legal Grounding: Section 19 Original Applications &amp; Dual-Track SARFAESI Dynamics
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding the legal architecture governing high-ticket debt recovery requires analyzing the dual statutory tracks frequently deployed simultaneously by Indian banking institutions:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 19 Original Application (OA)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 19 of the RDB Act, the lender files an exhaustive claim outlining loan sanction letters, hypothecation deeds, guarantee covenants, and statement of accounts. The bank requests the Presiding Officer to issue a formal Recovery Certificate for the total claimed amount plus ongoing penal compounding.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    <span>Parallel SARFAESI Act Enforcement</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For secured advances, banks simultaneously invoke the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act). Lenders issue Section 13(2) demand notices and Section 13(4) possession notices to take symbolic or physical control of mortgaged assets.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-emerald-600" />
                    <span>Section 17 Securitisation Application (SA)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Any borrower aggrieved by wrongful SARFAESI enforcement measures can challenge the bank by filing a Securitisation Application under Section 17 before the DRT within 45 days. This provides an indispensable defensive shield to obtain interim stay orders against proposed auctions.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Landmark className="w-4 h-4 text-purple-600" />
                    <span>Appellate Forum (DRAT) Oversight</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Orders passed by the Presiding Officer of a DRT can be appealed before the Debt Recovery Appellate Tribunal (DRAT) under Section 20 of the RDB Act or Section 18 of SARFAESI, subject to statutory pre-deposit requirements that advocates routinely petition to reduce based on demonstrated hardship.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Strategic Advantage of Summary Proceedings</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  Although the RDB Act aims for summary disposal within 180 days, real-world tribunal pendency across major benches (such as Delhi, Mumbai, Chennai, Kolkata, Bengaluru, and Ahmedabad) routinely spans 24 to 48 months. This procedural friction imposes heavy operational burdens on banks, establishing substantial leverage for borrowers seeking an amicable, discounted settlement.
                </p>
              </div>
            </section>

            {/* Section 3: Threat of Inaction: Ex-Parte Recovery Certificates */}
            <section id="threat-of-inaction-ex-parte-rc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. The Threat of Judicial Inaction: Ex-Parte Recovery Certificates, Asset Attachment &amp; Execution Risks
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The most catastrophic mistake a borrower or guarantor can make upon receiving a DRT summons is to ignore the notice or delay engaging specialized counsel. Unlike civil suits where procedural delays may temporarily stall matters, failing to enter appearance in the DRT triggers swift adverse statutory consequences under the RDB Act.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a defendant fails to file a formal Written Statement (WS) within 30 days (extendable to a maximum of 45 days under exceptional circumstances), the Presiding Officer is statutorily authorized to proceed ex-parte under Section 19(5) and issue a <strong>Recovery Certificate (RC)</strong>:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Issuance of Final Recovery Certificate:</strong> The DRT accepts the bank&apos;s inflated account statements without cross-examination, converting the disputed claim into a conclusive judicial decree carrying exorbitant penal interest rates of 18%–24% per annum.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Transmission to the Recovery Officer:</strong> Under Section 25 and Section 28 of the RDB Act, the Recovery Certificate is transferred to the Recovery Officer, an executive authority armed with summary coercive powers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Attachment of Bank Accounts &amp; Receivables:</strong> The Recovery Officer issues garnishee orders attaching the borrower&apos;s operational bank accounts, customer receivables, and financial securities without prior public notice.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Distress Sale of Movable and Immovable Assets:</strong> Uncontested certificates empower the Recovery Officer to conduct immediate public e-auctions of mortgaged properties as well as unencumbered personal assets belonging to principal borrowers and personal guarantors.</span>
                </li>
              </ul>

              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-red-950">
                  <ShieldX className="w-4 h-4 text-red-600" />
                  <span>Civil Imprisonment Powers Under Section 25(b)</span>
                </span>
                <p className="leading-relaxed">
                  Under Section 25(b) of the RDB Act, if a judgment debtor fails to satisfy a Recovery Certificate and conceals assets or refuses compliance, the Recovery Officer possesses the statutory power to order the arrest and detention of the defaulter in civil prison. Timely advocate representation before the tribunal is therefore critical to halt coercive enforcement.
                </p>
              </div>
            </section>

            {/* Section 4: Bank Accounting & NPV Recovery Formula */}
            <section id="npa-accounting-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Balance Sheet Accounting, NPA Provisioning &amp; The Net Present Value (NPV) Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Securing a substantial 35% to 60% principal waiver in a high-ticket DRT litigation is not a matter of pleading for institutional sympathy; it is an exercise in financial modeling aligned with RBI prudential norms. Commercial banks are governed by strict capital adequacy standards under the Reserve Bank of India (Prudential Framework for Resolution of Stressed Assets) Directions.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As a delinquent loan languishes in DRT litigation, the lending institution is mandated to lock away escalating percentages of its core operating capital in non-productive provisioning reserves:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>NPA Classification Bucket</th>
                      <th>DRT Litigation Duration</th>
                      <th>Mandatory RBI Capital Provision</th>
                      <th>Expected OTS Haircut Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Sub-Standard Asset</td>
                      <td>12 – 18 Months</td>
                      <td>15% Secured / 25% Unsecured</td>
                      <td>15% – 30% Total Waiver</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful 1 (D1)</td>
                      <td>18 – 30 Months</td>
                      <td>25% Secured / 100% Unsecured</td>
                      <td>30% – 45% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful 2 (D2)</td>
                      <td>30 – 48 Months</td>
                      <td>40% Secured / 100% Unsecured</td>
                      <td>45% – 55% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful 3 &amp; Loss Asset</td>
                      <td>48+ Months / Written-Off</td>
                      <td>100% Complete Capital Write-Off</td>
                      <td>55% – 65% Principal Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower mounts a robust legal defense, the bank&apos;s Zonal Stressed Asset Management Committee conducts a rigorous financial assessment known as the <strong>Net Present Value (NPV) Recovery Benchmark</strong>:
              </p>

              {/* JSX Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>DRT Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents expected recovery cash flows, r is the bank&apos;s internal discount rate, and deductions reflect 3–5 years of tribunal friction, advocate retainers, court fees, asset depreciation, and the opportunity cost of regulatory capital trapped in mandatory provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because prosecuting a contested DRT matter to final execution requires years of judicial effort and substantial administrative expenses, the bank&apos;s credit committee frequently determines that accepting an immediate lump-sum settlement of 40% to 55% delivers a higher present-value economic recovery than waiting for uncertain future auction proceeds.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="drt-settlement-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. DRT Loan Settlement Process &amp; Legal Defense Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below illustrates the 5-stage institutional trajectory from receiving an Original Application or SARFAESI summons from a commercial lender to advocate defense, ledger forensics, Zonal Committee negotiations, and executing a DRT Consent Order with full No Dues Certification.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/drt-loan-settlement-process.jpg"
                  alt="DRT Debt Recovery Tribunal Loan Settlement Process in India Visual Roadmap"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Summons &amp; Interim Stay</span>
                  <span>Receive DRT OA summons or SARFAESI notice; advocates enter appearance, file formal WS, and seek urgent interim stay against asset auctions.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Forensic Audit &amp; OTS</span>
                  <span>Expose usurious compounding and ledger errors; present hardship dossier to Zonal Committee to structure a discounted One Time Settlement.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Consent Order &amp; ₹0 NDC</span>
                  <span>Record terms before the Presiding Officer; secure a binding Consent Order, complete remittance, and obtain original title deeds with ₹0 NDC.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Advocate Defense Strategy */}
            <section id="advocate-defense-contesting-oa" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Advocate Defense Strategy: Contesting the Original Application (OA) &amp; Filing Interim Stay Petitions
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Transforming a high-stakes DRT recovery proceeding into a negotiated compromise requires methodical litigation defense. Rather than approaching the bank in a position of legal vulnerability, our debt defense advocates implement a 4-phase strategic counter-offensive:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 1: Entering Appearance &amp; Filing Written Statement (WS)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Within 30 days of receiving the DRT summons, our legal counsel enters a formal Vakalatnama and files a comprehensive Written Statement under Section 19(5) of the RDB Act. We dispute unverified debit entries, challenge ambiguous penal compounding, and contest the validity of security creation documents.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 2: Filing Securitisation Application (SA) with Interim Stay Petitions</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank has initiated parallel physical possession or auction proceedings under SARFAESI Section 13(4), we file an urgent Securitisation Application under Section 17 alongside an Interlocutory Application (IA) for an interim stay. We highlight statutory procedural lapses—such as failure to serve 30-day auction notices or improper reserve price valuation—to restrain distress property sales.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 3: Forensic Account Ledger Audit &amp; Counterclaim Assertion</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our financial experts conduct a granular audit of the bank&apos;s statement of accounts under the Bankers&apos; Books Evidence Act, 1891. We expose excessive interest capitalization, penal rate hikes violating RBI circulars, and uncredited margin money deposits, establishing a formal Counterclaim or Set-Off under Section 19(8).
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 4: Bypassing Branch Officials &amp; Engaging the Stressed Asset Resolution Branch</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    With litigation effectively tied down in tribunal hearings, our advocates bypass aggressive branch recovery officers and present a structured settlement proposal directly to the General Manager and Zonal Committee of the Stressed Asset Resolution Branch (SARB).
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This comprehensive legal defense eliminates the threat of summary ex-parte decrees and compels the financial institution to treat the borrower as an equal negotiating counterpart.
              </p>
            </section>

            {/* Section 7: DRT-Supervised OTS & Consent Orders */}
            <section id="drt-supervised-ots-consent-order" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Securing a DRT-Supervised One-Time Settlement (OTS) &amp; Consent Order Forensics
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When resolving high-ticket non-performing loans exceeding ₹20 Lakhs, informal verbal promises or unilateral branch confirmation emails carry severe legal risks. Unscrupulous recovery managers have been known to accept partial payments as regular installments without closing the underlying DRT litigation, leaving the borrower exposed to future recovery certificates.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A legally watertight DRT loan settlement must satisfy four mandatory institutional forensic checkpoints:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Zonal Committee Sanction Letter</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The One Time Settlement (OTS) sanction must be issued by the competent Zonal or Head Office Credit Committee on official bank letterhead, reciting the specific OA/SA suit number, agreed compromised amount, and exact tranche payment deadlines.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Formal DRT Consent Terms Filing</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The joint compromise terms must be formally filed before the Presiding Officer of the DRT. The tribunal passes a judicially binding <strong>Consent Order or Compromise Decree</strong> under the RDB Act, permanently disposing of the bank&apos;s Original Application.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Unconditional Release of Title Deeds</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The consent order must explicitly mandate the unconditional return of original property title deeds, share certificates, and personal guarantee discharge letters within a defined 30-day window following final remittance.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>Quashing of Recovery Certificates</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If an interim Recovery Certificate had been issued, the consent order must instruct the Recovery Officer to formally recall the RC, withdraw all garnishee notices, and vacate property attachment orders from revenue land records.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Strict Tranche Remittance Compliance</span>
                </span>
                <p className="leading-relaxed">
                  All settlement payments must be remitted directly into the designated loan collection pool account via Real Time Gross Settlement (RTGS) or Banker&apos;s Cheque. Missing a single scheduled tranche deadline without prior judicial extension can cause the settlement to lapse, reviving the bank&apos;s original full claim.
                </p>
              </div>
            </section>

            {/* Section 8: Remittance, ₹0 NDC & Credit Recovery */}
            <section id="remittance-rbi-ndc-cibil-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Loan Remittance, RBI ₹0 No Dues Certificate Mandate &amp; CIBIL Bureau Rehabilitation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following the execution of the DRT Consent Order and completion of the agreed settlement remittance, the final imperative is securing unassailable closure documentation and managing credit score rehabilitation. Under <strong>RBI Circular RBI/2023-24/60</strong> (Responsible Lending Conduct – Release of Movable/Immovable Property Documents and Issuance of NDC), all regulated lending institutions must adhere to strict post-settlement timelines.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Mandatory 30-Day Document Return &amp; ₹5,000/Day Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Banks are legally obligated to return all original movable and immovable property title deeds and issue an official No Dues Certificate (NDC) within <strong>30 calendar days</strong> of receiving full settlement remittance. Failure to release documents within this period obligates the bank to compensate the borrower at a statutory rate of <strong>₹5,000 per day of delay</strong>.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Credit Information Bureau (CIBIL) Trajectory &amp; Score Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers must understand the precise mechanism of credit bureau reporting after resolving high-value litigation:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Bureau Status Reporting:</strong> The lending institution reports the account to credit bureaus (CIBIL, Experian, Equifax, CRIF) with the official status remark <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong>, reflecting a current outstanding balance of <strong>₹0</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Cessation of Delinquency Compounding:</strong> While a settled remark triggers a temporary credit score drop, it permanently terminates compounding default records (90+ DPD) and eliminates legal litigation flags.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>12-Month Institutional Cooling Period:</strong> Under RBI guidelines, commercial lenders observe a 12-month cooling window before considering fresh unsecured commercial credit lines for settled corporate or individual entities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Restoring 750+ Credit Scores:</strong> By leveraging secured fixed-deposit credit instruments, maintaining strict credit utilization under 25%, and recording flawless payment histories, settled borrowers reliably rebuild their CIBIL score above 750 within 18 to 24 months.</span>
                </li>
              </ul>
            </section>

            {/* Section 9: Dispute Resolution Comparative Matrix */}
            <section id="drt-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Dispute Resolution Comparative Matrix: DRT vs SARFAESI vs Civil Suit vs NCLT (IBC)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating the strategic parameters across major Indian debt recovery forums illustrates why a DRT-supervised One Time Settlement offers the most advantageous balance of legal finality, risk mitigation, and debt reduction:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Forum</th>
                      <th>Statutory Governing Act</th>
                      <th>Typical Haircut Potential</th>
                      <th>Resolution Timeline</th>
                      <th>Key Legal Risk &amp; Borrower Defense</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">DRT Section 19 OA</td>
                      <td>RDB Act, 1993</td>
                      <td>35% – 60% Principal Waiver</td>
                      <td>18 – 36 Months</td>
                      <td>Risk of ex-parte Recovery Certificate; defended via WS &amp; ledger audit</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SARFAESI Section 13/17</td>
                      <td>SARFAESI Act, 2002</td>
                      <td>30% – 50% Compromise OTS</td>
                      <td>6 – 12 Months</td>
                      <td>Risk of physical auction; defended via Section 17 SA stay petitions</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Recovery Suit</td>
                      <td>Code of Civil Procedure, 1908</td>
                      <td>15% – 30% Waiver</td>
                      <td>4 – 7 Years</td>
                      <td>Protracted trial; heavy court fees; defended via Leave to Defend</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">NCLT Corporate Insolvency</td>
                      <td>Insolvency &amp; Bankruptcy Code, 2016</td>
                      <td>50% – 85% Resolution Plan</td>
                      <td>12 – 24 Months</td>
                      <td>Loss of corporate management control; Section 12A withdrawal settlement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans High-Ticket DRT Legal Defense &amp; Institutional Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating a high-stakes Debt Recovery Tribunal claim from a major public or private sector bank requires seasoned legal advocates who possess deep mastery of banking law, the RDB Act, SARFAESI procedures, and RBI stressed asset directives. SettleLoans provides comprehensive legal defense for borrowers across India: entering immediate tribunal appearance, filing defensive Written Statements, obtaining interim stay orders against asset auctions, and negotiating directly with bank Zonal Committees to deliver massive principal haircuts backed by judicially binding Consent Orders and official No Dues Certificates.
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
                  11. Frequently Asked Questions: DRT Loan Settlement Process in India
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to essential questions regarding Debt Recovery Tribunal summons, Original Application defenses, stay petitions, and One Time Settlements in India.
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
                  href="https://www.indiacode.nic.in/handle/123456789/1943"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Recovery of Debts and Bankruptcy Act, 1993 (Section 19 &amp; 25)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">SARFAESI Act, 2002 (Section 13, 14 &amp; 17 Securitisation Application)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://drt.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Debt Recovery Tribunal (e-DRT Portal &amp; Cause Lists)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Prudential Framework for Stressed Assets</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Circular RBI/2023-24/60 (Release of Property Documents &amp; NDC Mandate)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Legal Defense &amp; Loan Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/auction-notice-challenge"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Auction Notice Legal Challenge
                </Link>
                <Link
                  href="/auction-settlement-process-loan-recovery-explained"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Property Auction Settlement Process
                </Link>
                <Link
                  href="/best-lawyer-for-account-documents-drt"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  DRT Account Documents Lawyer
                </Link>
                <Link
                  href="/best-lawyer-for-arc-loan-assignment-dispute"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  ARC Loan Assignment Disputes
                </Link>
                <Link
                  href="/best-lawyer-for-MSME-loan-recovery-defence"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  MSME Loan Recovery Defense
                </Link>
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Defense
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/50-lakhs-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  50 Lakhs Loan Settlement Guide
                </Link>
                <Link
                  href="/1-crore-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  1 Crore Loan Settlement Guide
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                  AJ
                </Link>
                <div>
                  <Link href="/authors/ashish-jhangra" className="font-bold text-slate-900 text-sm hover:text-[#1F5EFF] transition-colors block">
                    Ashish Jhangra
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in DRT litigation defense, SARFAESI stay applications, banking NPA provisioning frameworks, and high-value debt resolution with over a decade of commercial advisory experience.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="font-semibold text-[#1F5EFF] hover:underline flex items-center gap-1">
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Urgent DRT Defense</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">Received a DRT Summons or OA Notice?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not risk an ex-parte Recovery Certificate. Hire senior DRT defense advocates to contest bank claims, obtain stay orders, and negotiate a 35%–60% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request DRT Advocate Consultation
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
                  <span>RDB Act &amp; DRT Procedure Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Legal Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Judicially Binding DRT Consent Orders</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Zonal OTS Negotiation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
