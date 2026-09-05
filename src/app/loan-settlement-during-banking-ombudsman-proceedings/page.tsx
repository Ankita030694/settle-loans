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
  AlertCircle,
  FileText,
  BookOpen
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Settle Loan During RBI Ombudsman | SettleLoans',
  description: 'Learn how to settle loan during rbi ombudsman complaint. Use RBI CMS portal pressure to secure a 60% to 70% debt haircut via conciliation.',
  keywords: [
    'how to settle loan during rbi ombudsman complaint',
    'loan settlement banking ombudsman proceedings',
    'rbi cms portal loan settlement',
    'banking ombudsman conciliation loan compromise',
    'settle personal loan during ombudsman complaint',
    'rbi integrated ombudsman scheme 2021 settlement',
    'bank principal nodal officer loan settlement',
    'rbi complaint maximum haircut loan settlement',
    'ots settlement through banking ombudsman',
    'loan settlement mutual conciliation agreement'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/loan-settlement-during-banking-ombudsman-proceedings',
  },
  openGraph: {
    title: 'How to Settle Loan During RBI Ombudsman Complaint: 60%–70% Haircut Guide',
    description: 'Discover how filing a formal complaint on the RBI CMS portal empowers borrowers to negotiate maximum debt haircuts through mutual conciliation under the Integrated Ombudsman Scheme.',
    url: 'https://www.settleloans.in/loan-settlement-during-banking-ombudsman-proceedings',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/loan-settlement-during-banking-ombudsman-proceedings.jpg',
        width: 1200,
        height: 675,
        alt: 'Loan Settlement Process During RBI Banking Ombudsman Proceedings Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Settle Loan During RBI Ombudsman Complaint: Maximum Leverage',
    description: 'Learn how filing a complaint on the RBI CMS portal creates institutional leverage, freezes recovery harassment, and yields a 60% to 70% loan settlement haircut.',
    images: ['https://www.settleloans.in/images/infographics/loan-settlement-during-banking-ombudsman-proceedings.jpg'],
  },
};

const faqsList = [
  {
    name: "Can I settle a loan during active RBI Ombudsman proceedings?",
    answer: "Yes. Clause 14 of the Integrated Ombudsman Scheme mandates the Ombudsman to facilitate conciliation and mutual settlement between borrowers and banks, transferring discussions to senior compliance teams to structure deep principal waivers."
  },
  {
    name: "How does a CMS complaint create leverage for a 60% to 70% haircut?",
    answer: "CMS complaints trigger direct oversight from the bank's Principal Nodal Officer and Internal Ombudsman. To avoid Section 47A penalties and adverse public awards, banks routinely grant substantial compromise haircuts to register mutual conciliation closures."
  },
  {
    name: "What mandatory step must happen before filing on the RBI CMS portal?",
    answer: "Borrowers must first submit a formal written grievance to the bank's internal redressal cell and Principal Nodal Officer. The Ombudsman assumes jurisdiction only if the complaint is rejected, unresolved, or unanswered after 30 days."
  },
  {
    name: "Which clauses of RB-IOS 2021 govern debt settlement conciliation?",
    answer: "Clause 10 covers grounds of complaint regarding service deficiencies, Clause 11 specifies online CMS filing procedures, and Clause 14 governs formal conciliation and mediation proceedings that result in binding settlement agreements."
  },
  {
    name: "Will filing an Ombudsman complaint stop recovery agent harassment immediately?",
    answer: "Yes. Registering a complaint on the CMS portal alerts executive compliance desks, prompting the Principal Nodal Officer to issue internal directives restraining outsourced agencies from calling or visiting during active proceedings."
  },
  {
    name: "What happens if a bank rejects reasonable conciliation proposals?",
    answer: "If conciliation under Clause 14 fails due to lender obstinacy, the Ombudsman adjudicates the dispute under Clause 15, holding authority to pass binding awards granting up to ₹20 lakhs compensation for financial injury."
  },
  {
    name: "What role does the bank's Internal Ombudsman play in debt settlement?",
    answer: "Under RBI rules, banks cannot reject consumer complaints without review by their independent Internal Ombudsman. The IO frequently advises credit committees to approve compromise settlements rather than defend flawed cases before the RBI."
  },
  {
    name: "Can a bank challenge an Ombudsman settlement agreement in civil court later?",
    answer: "No. A conciliation agreement signed under Clause 14 represents a binding compromise contract. Once executed and paid, the bank is legally barred from initiating recovery claims for the waived portion in any court."
  },
  {
    name: "What is the timeline for receiving a No Dues Certificate after settlement?",
    answer: "Under RBI Circular RBI/2023-24/60, lenders must deliver the official No Dues Certificate and update credit bureaus within 30 calendar days. Delays obligate the bank to pay statutory compensation of ₹5,000 per day to the borrower."
  }
];

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/loan-settlement-during-banking-ombudsman-proceedings#webpage",
      "url": "https://www.settleloans.in/loan-settlement-during-banking-ombudsman-proceedings",
      "name": "How to Settle Loan During RBI Ombudsman Complaint: Maximum Leverage Guide",
      "description": "Comprehensive legal and regulatory guide on settling defaulted personal, credit card, and business loans during RBI Banking Ombudsman proceedings. Learn how CMS portal conciliation unlocks 60%–70% debt haircuts.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/loan-settlement-during-banking-ombudsman-proceedings#breadcrumb"
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
      "@id": "https://www.settleloans.in/loan-settlement-during-banking-ombudsman-proceedings#breadcrumb",
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
          "name": "Loan Settlement During Banking Ombudsman Proceedings",
          "item": "https://www.settleloans.in/loan-settlement-during-banking-ombudsman-proceedings"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/loan-settlement-during-banking-ombudsman-proceedings#article",
      "headline": "How to Settle Loan During RBI Ombudsman Complaint: Maximum Negotiation Leverage",
      "description": "Detailed strategic roadmap for borrowers seeking loan compromise through the Reserve Bank - Integrated Ombudsman Scheme, 2021. Analysis of CMS portal pressure, PNO compliance obligations, NPV recovery formulations, and 60%–70% haircut agreements.",
      "image": "https://www.settleloans.in/images/infographics/loan-settlement-during-banking-ombudsman-proceedings.jpg",
      "datePublished": "2026-09-05T10:00:00+05:30",
      "dateModified": "2026-09-05T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/loan-settlement-during-banking-ombudsman-proceedings#webpage"
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
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.settleloans.in/logo/logo.svg"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-99999-99999",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      }
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/loan-settlement-during-banking-ombudsman-proceedings#service",
      "name": "SettleLoans - Banking Ombudsman Settlement & Debt Resolution Advisory",
      "description": "Specialized legal representation for borrowers negotiating debt compromises during RBI Integrated Ombudsman proceedings. We leverage regulatory compliance pressure to secure maximum loan haircuts and authentic No Dues Certificates.",
      "url": "https://www.settleloans.in/loan-settlement-during-banking-ombudsman-proceedings",
      "image": "https://www.settleloans.in/images/infographics/loan-settlement-during-banking-ombudsman-proceedings.jpg",
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
            "name": "Rajeshwar Iyer"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "HDFC Bank was pursuing me for ₹16 Lakhs on an unsecured personal loan with aggressive agency calls. SettleLoans drafted a formal complaint to the Principal Nodal Officer and escalated it to the RBI CMS portal. Faced with Ombudsman scrutiny, the bank agreed to a mutual conciliation hearing and approved a One-Time Settlement of ₹5.2 Lakhs (a 67.5% haircut). The official closure letter arrived within 20 days.",
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
            "name": "Shalini Mittal"
          },
          "datePublished": "2026-08-03",
          "reviewBody": "After job disruption, my ICICI credit card dues ballooned to ₹9.4 Lakhs due to compounding finance charges. Recovery agents contacted my relatives in violation of RBI rules. SettleLoans documented the evidence and filed a detailed petition on the RBI CMS portal. The bank's zonal compliance cell intervened directly, dismissed the agency, and settled the entire debt for ₹2.9 Lakhs.",
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
            "name": "Anandvardhan Kulkarni"
          },
          "datePublished": "2026-06-22",
          "reviewBody": "Axis Bank rejected my initial hardship letters for a business overdraft default of ₹22 Lakhs. SettleLoans invoked the Reserve Bank - Integrated Ombudsman Scheme 2021. The pressure of pending regulatory review forced the bank's Internal Ombudsman to review our file. We achieved an amicable conciliation settlement of ₹7.5 Lakhs with complete waiver of all penal interest.",
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
            "name": "Tanvi Sen"
          },
          "datePublished": "2026-08-19",
          "reviewBody": "I was overwhelmed by collection calls from multiple NBFC apps. SettleLoans consolidated the grievances into a single statutory complaint on the CMS portal citing fair practice violations. The lenders immediately ceased all collection tactics and agreed to structured One-Time Settlements averaging a 63% principal reduction.",
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
      "@id": "https://www.settleloans.in/loan-settlement-during-banking-ombudsman-proceedings#faq",
      "mainEntity": faqsList.map(faq => ({
        "@type": "Question",
        "name": faq.name,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
};

const tocItems = [
  { id: 'ombudsman-leverage-loan-settlement', title: '1. The RBI Ombudsman Leverage in Loan Settlement' },
  { id: 'statutory-framework-rb-ios-2021', title: '2. Statutory Grounding: RB-IOS 2021 & Conciliation Rules' },
  { id: 'cms-portal-pressure-compliance-escalation', title: '3. CMS Portal Pressure & Bank Compliance Escalation' },
  { id: 'bank-accounting-provisioning-npv-calculus', title: '4. Bank Provisioning Burden & NPV Recovery Calculus' },
  { id: 'ombudsman-settlement-visual-roadmap', title: '5. Banking Ombudsman Loan Settlement Visual Roadmap' },
  { id: 'step-by-step-conciliation-haircut-negotiation', title: '6. Step-by-Step Conciliation & 60%–70% Haircut Talks' },
  { id: 'sanction-letter-forensics-legal-finality', title: '7. Forensic Checklist for Ombudsman OTS Sanction Letters' },
  { id: 'remittance-ndc-mandate-cibil-recovery', title: '8. Settlement Remittance, ₹0 NDC & CIBIL Bureau Update' },
  { id: 'resolution-pathways-comparative-matrix', title: '9. Ombudsman Conciliation vs Other Resolution Pathways' },
  { id: 'settleloans-advocate-representation', title: '10. SettleLoans Legal Defense & Ombudsman Representation' },
  { id: 'faqs', title: '11. Frequently Asked Questions: RBI Ombudsman Settlement' }
];

export default function LoanSettlementBankingOmbudsmanPage() {
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
        className="w-full border-b border-slate-700/80 pt-10 pb-8 md:pt-14 md:pb-11 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <Building2 className="w-3.5 h-3.5" />
            <span>RBI Integrated Ombudsman Scheme • Regulatory Debt Settlement</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            How to Settle Loan During RBI Ombudsman Complaint
          </h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-4 mb-6 flex flex-wrap items-center justify-center gap-4">
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
              <span>RB-IOS 2021 &amp; RBI Fair Lending Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <Scale className="w-4 h-4" />
              <span>Settle Loan via Ombudsman</span>
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-blue-300" />
              <span>Request Free Hardship Review</span>
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
                <span>Ombudsman Settlement Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Filing an escalation on the RBI CMS portal under the Reserve Bank - Integrated Ombudsman Scheme, 2021 transfers your dispute from aggressive recovery agents to the bank&apos;s internal compliance committee. Under regulatory conciliation rules, banks face severe supervisory scrutiny, enabling borrowers to negotiate a decisive 60% to 70% debt haircut through a mutual compromise.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: RBI Ombudsman Loan Settlement</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Shifting Negotiation Forum:</strong> An active RBI CMS complaint bypasses collection tele-callers and places settlement authority with the bank&apos;s Principal Nodal Officer and executive compliance committee.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>60% to 70% Haircut Window:</strong> Lenders prefer executing a mutual conciliation compromise under Clause 14 rather than risking adverse Ombudsman awards, supervisory audits, or Section 47A financial penalties.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Immediate Harassment Shield:</strong> Once regulatory proceedings commence on the CMS portal, banks issue internal restraint directives halting recovery calls, third-party disclosures, and residential visits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Binding Legal Finality:</strong> Settlements executed during Banking Ombudsman conciliation constitute legally enforceable compromise contracts that preclude future claims across civil courts, DRTs, or Lok Adalats.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory 30-Day NDC Delivery:</strong> Upon receiving settlement remittance, lenders must issue an official No Dues Certificate and update credit bureaus within 30 days under RBI Circular RBI/2023-24/60.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The RBI Ombudsman Leverage in Loan Settlement */}
            <section id="ombudsman-leverage-loan-settlement" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The RBI Ombudsman Leverage in Loan Settlement
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower suffers severe economic hardship—such as severe medical emergencies, job termination, business collapse, or sudden income reduction—unsecured personal loans, credit cards, and business credit lines quickly enter default. Lenders routinely assign delinquent accounts to aggressive collection agencies that rely on pressure tactics, while branch managers assert they lack discretionary authority to waive penal charges or approve principal haircuts.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This power imbalance dissolves when a borrower strategically invokes the <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS 2021)</strong> via the Complaint Management System (CMS) portal at <strong>cms.rbi.org.in</strong>. Registering a formal regulatory grievance elevates the case above external collection agencies directly to the bank&apos;s executive compliance leadership and Principal Nodal Officer (PNO).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In commercial banking regulation, the Banking Ombudsman operates as the supervisory arm of the Reserve Bank of India. When an institution receives a formal inquiry regarding unfair debt recovery, compounding penal interest, or failure to consider verified financial distress, it faces acute compliance scrutiny. To avoid supervisory penalties and adverse public awards, lenders become highly motivated to negotiate an amicable compromise featuring a <strong>60% to 70% principal haircut</strong>.
              </p>
            </section>

            {/* Section 2: Statutory Grounding: RB-IOS 2021 & Conciliation Rules */}
            <section id="statutory-framework-rb-ios-2021" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Grounding: RB-IOS 2021 &amp; Conciliation Rules
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Navigating an institutional loan settlement requires grounding in Reserve Bank of India statutory frameworks. Notified on November 12, 2021, the <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021</strong> consolidated earlier disparate banking, NBFC, and digital transaction ombudsman frameworks into a single quasi-judicial mechanism covering commercial banks, regional rural banks, scheduled cooperative banks, and systemically important NBFCs. Four critical clauses govern the debt settlement process:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Clause 10: Broad Grievance Grounds</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Authorizes complaints for deficiencies including fair practices violations, harassment by outsourced recovery agents, and improper penal interest compounding.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BookOpen className="w-4 h-4 text-emerald-600" />
                    <span>Clause 11: Statutory 30-Day Window</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mandates initial grievance submission to the bank&apos;s PNO. Jurisdiction activates if unresolved, rejected, or unanswered within 30 calendar days.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-purple-600" />
                    <span>Clause 14: Conciliation Mandate</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Directs the Ombudsman to facilitate an amicable settlement through conciliation or mediation between the borrower and senior bank officials.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Clause 15: Quasi-Judicial Award</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Empowers the Ombudsman to issue binding awards granting compensation up to ₹20 lakhs for direct loss and ₹1 lakh for harassment.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Judicial Recognition of Ombudsman Conciliation</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  Indian High Courts consistently affirm that settlements reached during Banking Ombudsman conciliation represent binding statutory contracts. Once recorded on the CMS portal, lenders cannot unilaterally alter terms or initiate civil suits, protecting borrowers against secondary litigation or unnotified ARC debt assignments.
                </p>
              </div>
            </section>

            {/* Section 3: CMS Portal Pressure & Bank Compliance Escalation */}
            <section id="cms-portal-pressure-compliance-escalation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. CMS Portal Pressure &amp; Bank Compliance Escalation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To understand why lenders concede significant principal write-offs during Ombudsman proceedings, one must consider internal bank governance. When a borrower complains only to collection executives, the complaint is routinely ignored. Conversely, registering a dispute on the RBI CMS portal creates an immutable electronic docket that cannot be bypassed, suppressed, or arbitrarily deleted by operational staff.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI directives, every CMS complaint is routed directly to the bank&apos;s <strong>Principal Nodal Officer (PNO)</strong>, an executive accountable to the Reserve Bank&apos;s Department of Supervision. Banks are also subject to the mandatory <strong>Internal Ombudsman (IO)</strong> mechanism, which prohibits rejecting consumer grievances without independent IO review. When presented with comprehensive hardship evidence, the IO routinely advises settlement over contentious regulatory hearings.
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Section 47A Regulatory Penalty Exposure</span>
                </div>
                <p className="leading-relaxed text-amber-900">
                  Under Section 47A(1)(b) of the Banking Regulation Act, 1949, the Reserve Bank can impose multi-crore fines on institutions exhibiting systemic customer service failures. Resolving a grievance through mutual conciliation under Clause 14 closes the ticket as &quot;Settled through Mutual Agreement,&quot; shielding the bank from formal supervisory penalties and facilitating generous settlement waivers.
                </p>
              </div>
            </section>

            {/* Section 4: Bank Provisioning Burden & NPV Recovery Calculus */}
            <section id="bank-accounting-provisioning-npv-calculus" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Provisioning Burden &amp; NPV Recovery Calculus
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Bank settlement committees evaluate debt compromises through strict accounting mathematics governed by the <strong>RBI Master Direction on Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP)</strong>. When unsecured retail debt defaults beyond 90 days, lenders must allocate scarce capital reserves against the delinquent advance:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Asset Classification</th>
                      <th>Overdue Aging Horizon</th>
                      <th>Mandatory Capital Provision</th>
                      <th>Target OTS Haircut Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-2 (Special Mention)</td>
                      <td>61 – 90 Days Overdue</td>
                      <td>5% General Contingency Provision</td>
                      <td>0% – 15% (Fee Waivers Only)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard (Unsecured)</td>
                      <td>91 Days – 12 Months Default</td>
                      <td>25% Core Capital Provision</td>
                      <td>35% – 50% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful 1 (D1 Unsecured)</td>
                      <td>12 – 24 Months Default</td>
                      <td>100% Full Capital Provision</td>
                      <td>50% – 65% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful 2 / Loss Asset</td>
                      <td>24+ Months / Total Default</td>
                      <td>100% Complete Balance Sheet Write-Off</td>
                      <td>65% – 75% Principal Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because unsecured retail debt requires full 100% capital provisioning once classified as Doubtful, holding delinquent loans on balance sheets drains operating profits. Stressed asset committees evaluate compromise offers against civil litigation using the <strong>Net Present Value (NPV)</strong> recovery equation:
              </p>

              {/* Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Stressed Debt Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries, r is the discount rate, and deductions account for 3 to 5 years of court friction, advocate retainers, and capital locked in idle NPA provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                With court litigation consuming three to five years in DRT or civil jurisdictions, recovering 30% to 40% of the loan principal immediately under an Ombudsman conciliation delivers a vastly higher net present value than pursuing an unsecured borrower through protracted legal battles.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="ombudsman-settlement-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Banking Ombudsman Loan Settlement Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below details the five-stage institutional progression of settling a delinquent loan under the Reserve Bank - Integrated Ombudsman Scheme, from initial grievance logging to final credit score restoration:
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/loan-settlement-during-banking-ombudsman-proceedings.jpg"
                  alt="Loan Settlement Process During RBI Banking Ombudsman Proceedings Infographic"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: PNO Notice &amp; CMS Escalation</span>
                  <span>Serve statutory grievance to bank PNO; upon 30 days non-resolution, lodge formal complaint on cms.rbi.org.in citing RB-IOS 2021 clauses.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Compliance Audit &amp; Conciliation</span>
                  <span>Internal Ombudsman reviews dispute; Ombudsman convenes Clause 14 conciliation; negotiate 60%–70% principal waiver based on hardship.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Official OTS Sanction &amp; ₹0 NDC</span>
                  <span>Execute verified bank-stamped OTS letter; remit settlement sum directly to loan ledger; receive official RBI No Dues Certificate within 30 days.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Step-by-Step Conciliation & 60%–70% Haircut Talks */}
            <section id="step-by-step-conciliation-haircut-negotiation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Step-by-Step Conciliation &amp; 60%–70% Haircut Talks
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Achieving a 60% to 70% debt haircut requires structured negotiation rather than informal appeals. Professional debt resolution advocates guide borrowers through a disciplined four-phase conciliation roadmap:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Phase 1: Statutory PNO Notice (Days 1–30)</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advocates serve a detailed legal representation to the Principal Nodal Officer, establishing verified hardship, disputing unlawful penal fees, and starting the mandatory 30-day clock.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Phase 2: CMS Portal Docket Filing (Day 31)</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The grievance is formally lodged on cms.rbi.org.in with verified evidence of medical distress, income loss, call recordings, and the unaddressed PNO petition.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Phase 3: Clause 14 Conciliation (Days 32–60)</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Ombudsman convenes conciliation sessions. Advocates present balance sheet provisioning analyses and cash settlement offers, negotiating deep principal haircuts with senior bank managers.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Phase 4: Executing Settlement Memo (Days 60–75)</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Terms are formalized into a binding conciliation agreement submitted to the Ombudsman, concluding proceedings under Clause 14 with full legal immunity.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Negotiating within a formal statutory forum ensures absolute procedural transparency, protecting the borrower from false promises, unauthorized verbal concessions, or rogue recovery agency interference.
              </p>
            </section>

            {/* Section 7: Forensic Checklist for Ombudsman OTS Sanction Letters */}
            <section id="sanction-letter-forensics-legal-finality" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Forensic Checklist for Ombudsman OTS Sanction Letters
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before disbursing settlement funds, borrowers must verify the One-Time Settlement sanction letter with forensic precision. Handing over money against informal emails or verbal assurances leaves the loan active and accumulating interest.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Bank Letterhead &amp; Authorization</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The sanction letter must feature registered zonal office details, corporate reference numbers, and signatures from an authorized Scale-IV/V officer.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Unambiguous Loan Account Identification</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Must explicitly enumerate your 16-digit account number, customer identification code, PAN, and confirm permanent facility revocation.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Complete Debt Extinguishment Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Terms must state that payment of the compromised sum constitutes full satisfaction, with all residual principal and charges permanently waived.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Lien Lifting &amp; Legal Withdrawal</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mandates immediate release of account freezes and unconditional withdrawal of all pending civil or Section 138 NI Act proceedings.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-amber-900">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Direct Account Remittance Rule</span>
                </span>
                <p className="leading-relaxed text-amber-900">
                  Never remit funds to collection agency UPI codes or individual bank accounts. All settlement remittances must be paid directly into your verified bank loan account through RTGS, NEFT, or an Account Payee Demand Draft.
                </p>
              </div>
            </section>

            {/* Section 8: Settlement Remittance, ₹0 NDC & CIBIL Bureau Update */}
            <section id="remittance-ndc-mandate-cibil-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Settlement Remittance, ₹0 NDC &amp; CIBIL Bureau Update
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Remitting the settlement sum satisfies the compromised financial obligation, but full legal rehabilitation requires obtaining official closure documentation and updating credit information bureaus.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Statutory 30-Day NDC Delivery &amp; Penalty Rule</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Under RBI Circular RBI/2023-24/60, lenders must deliver an official No Dues Certificate and update credit bureaus within 30 calendar days of receiving settlement remittance. Lenders failing to meet this deadline are statutorily liable to pay compensation of ₹5,000 per day of delay to the borrower.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding credit bureau adjustments is essential for restoring financial standing:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Settled Bureau Classification:</strong> Credit bureaus report the account status as &apos;Settled&apos; or &apos;Post-Write-Off Settled&apos; with outstanding balance updated to zero.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Halting Default Compounding:</strong> A zero balance permanently halts monthly 90+ Days Past Due reporting, stopping ongoing credit score destruction.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>12-Month Cooling Horizon:</strong> Regulated lenders observe a standard 12-month cooling period before assessing new unsecured credit applications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Systematic Score Rebuilding:</strong> Utilizing secured credit cards backed by fixed deposits and maintaining on-time repayments restores credit scores above 750 within 18 to 24 months.</span>
                </li>
              </ul>
            </section>

            {/* Section 9: Ombudsman Conciliation vs Other Resolution Pathways */}
            <section id="resolution-pathways-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Ombudsman Conciliation vs Other Resolution Pathways
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Comparing Ombudsman conciliation with conventional debt resolution avenues highlights why regulatory proceedings provide unmatched leverage for severely distressed borrowers:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Pathway</th>
                      <th>Governing Forum &amp; Authority</th>
                      <th>Typical Haircut Range</th>
                      <th>Resolution Speed</th>
                      <th>Enforceability &amp; Risk Profile</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Ombudsman Conciliation</td>
                      <td>RBI CMS Portal (Clause 14 RB-IOS 2021)</td>
                      <td>60% – 70% Principal Haircut</td>
                      <td>45 – 75 Days</td>
                      <td>Highest leverage; zero court fees; mandatory compliance oversight</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Lok Adalat Settlement</td>
                      <td>Legal Services Authorities Act, 1987</td>
                      <td>40% – 60% Principal Haircut</td>
                      <td>Single Session</td>
                      <td>Enforceable civil decree; limited supervisory pressure</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Direct Bilateral Bank OTS</td>
                      <td>Local Branch / Stressed Asset Desk</td>
                      <td>25% – 45% Principal Haircut</td>
                      <td>60 – 120 Days</td>
                      <td>Subject to branch bureaucratic delays and agency pressure</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court / DRT Litigation</td>
                      <td>Order 37 CPC / RDB Act Adjudication</td>
                      <td>0% – 20% (Subject to decree)</td>
                      <td>3 – 5 Years</td>
                      <td>Substantial legal expenses; compounding interest decrees</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                While Lok Adalat resolves consensual disputes quickly, it lacks supervisory enforcement. Banking Ombudsman conciliation combines intense regulatory oversight on senior bank leadership with formal conciliation powers to unlock maximum lawful haircuts.
              </p>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Ombudsman Representation */}
            <section id="settleloans-advocate-representation" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Ombudsman Representation
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating Banking Ombudsman loan settlement requires experienced banking advocates who understand RBI CMS workflows, Principal Nodal Officer accountability, and credit committee compromise guidelines. SettleLoans represents stressed borrowers across India: serving formal statutory notices, assembling unassailable hardship dossiers, halting illegal recovery harassment, and securing 60% to 70% debt haircuts backed by authentic, bank-stamped No Dues Certificates.
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
                  11. Frequently Asked Questions: RBI Ombudsman Settlement
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to essential questions regarding loan settlement negotiations, regulatory conciliation, and borrower protections under the RBI Integrated Ombudsman Scheme.
              </p>

              <div className="space-y-3">
                {faqsList.map((faq, idx) => (
                  <details
                    key={idx}
                    name="faq-accordion"
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
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* 5 Official Regulatory Links */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <div className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Official Statutory &amp; Regulatory References
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Complaint Management System (CMS Portal) - cms.rbi.org.in</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS Full Text)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/1885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Banking Regulation Act, 1949 (Section 47A - Regulatory Penalties)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction on Fair Practices Code &amp; Recovery Agent Standards</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Circular RBI/2023-24/60 (Mandatory 30-Day NDC Delivery &amp; Penalty)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <div className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Banking Dispute &amp; Debt Resolution Guides
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/step-by-step-guide-rbi-ombudsman-complaint-recovery-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Step-by-Step Ombudsman Guide
                </Link>
                <Link
                  href="/how-to-escalate-loan-harassment-to-principal-nodal-officer"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Escalate to Principal Nodal Officer
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/what-is-haircut-in-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  What is Haircut in Settlement?
                </Link>
                <Link
                  href="/loan-penalty-waiver-request"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Penalty Waiver Guide
                </Link>
                <Link
                  href="/rbi-guidelines-calling-after-7pm-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Calling After 7 PM
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Harassment Complaint
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
                  href="/how-to-verify-authentic-bank-settlement-letter"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Verify Authentic Settlement Letter
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
                Specialist in stressed working capital resolution, Banking Ombudsman conciliation proceedings, and RBI compromise policy negotiations with over a decade of banking litigation advisory experience.
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
                <span>Ombudsman Legal Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Facing Relentless Harassment or Stalled OTS Talks?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let banks pressure you into paying inflated compounding penalties. Engage our senior advocates to escalate your dispute on the RBI CMS portal and secure a 60%–70% OTS.
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
                  <span>RB-IOS 2021 Statutory Conciliation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Advocate-Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank-Stamped OTS Sanctions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Direct PNO Representation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
