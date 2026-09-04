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
  AlertCircle,
  Smartphone,
  Database,
  EyeOff,
  ServerCrash,
  FileWarning
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'DPDP Act Complaint Against Loan Apps | SettleLoans',
  description: 'Loan apps accessing your phone contacts illegally? File a Data Protection Board complaint under the DPDP Act 2023 with SettleLoans.',
  keywords: [
    'loan app accessing contacts complaint dpdp act',
    'digital personal data protection act loan app contact scraping',
    'how to file complaint data protection board of india dpdp loan app',
    'loan app photo gallery contact access illegal rbi guidelines',
    'predatory loan app cyber privacy violation section 6 dpdp act',
    'data fiduciary penalty loan apps dpdp act 250 crore',
    'loan app blackmailing contacts legal notice data breach',
    'rbi digital lending guidelines contact permission prohibition',
    'data protection board complaint format loan app harassment',
    'illegal contact harvesting fintech loan app cert in complaint'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/dpdp-act-violation-complaint-against-loan-apps',
  },
  openGraph: {
    title: 'DPDP Act Violation Complaint Against Loan Apps Accessing Contacts: Legal Guide',
    description: 'Statutory breakdown on filing complaints under the Digital Personal Data Protection Act, 2023 against predatory loan apps harvesting contacts, photos, and private data.',
    url: 'https://www.settleloans.in/dpdp-act-violation-complaint-against-loan-apps',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/dpdp-act-violation-complaint-against-loan-apps.jpg',
        width: 1200,
        height: 675,
        alt: 'DPDP Act Violation Complaint Against Loan Apps Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DPDP Act Violation Complaint Against Loan Apps Accessing Contacts: Legal Guide',
    description: 'Predatory loan apps scraped your phonebook or photos? Discover how to invoke the DPDP Act 2023, file with the Data Protection Board, and halt cyber harassment.',
    images: ['https://www.settleloans.in/images/infographics/dpdp-act-violation-complaint-against-loan-apps.jpg'],
  },
};

const faqsList = [
  {
    name: "Can a digital loan app legally access or download my phone contacts list in India?",
    answer: "No. The RBI Digital Lending Guidelines strictly ban this practice. Section 6 of the DPDP Act 2023 also forbids it. Digital loan apps cannot access your phonebook, call logs, or media gallery. Any loan app demanding contact access violates Indian law."
  },
  {
    name: "What penalties can the Data Protection Board of India impose on loan apps violating the DPDP Act?",
    answer: "The Data Protection Board of India holds strong penal powers. It can levy fines up to ₹250 Crores for personal data breaches. It can also impose fines up to ₹200 Crores for failing user consent rules."
  },
  {
    name: "What immediate legal steps should I take if a loan app messages my phone contacts or relatives?",
    answer: "First, save all evidence like chat screenshots, call logs, and app links. Next, send a legal Cease-and-Desist notice to the lender. Then, file a complaint with the Data Protection Board. You can also report cyber harassment at cybercrime.gov.in."
  },
  {
    name: "Does giving app permission during installation count as lawful consent under the DPDP Act, 2023?",
    answer: "No. Section 6 of the DPDP Act requires free and specific consent. Forced permissions are not lawful consent. If an app blocks loans unless you share contacts, the agreement is legally void."
  },
  {
    name: "Can I file an FIR with local police against a loan app for creating WhatsApp groups with my contacts?",
    answer: "Yes. Creating shaming groups or sending morphed photos is a crime. You can file an FIR under Section 308 and Section 351 of the BNS. You can also cite Sections 66E and 67 of the IT Act."
  },
  {
    name: "How does the DPDP Act 2023 affect regulated NBFC partners funding predatory loan apps?",
    answer: "Regulated NBFC partners act as Data Fiduciaries under the law. The fintech app acts as a Data Processor. Under Section 8, the NBFC is fully liable for data leaks and illegal contact harvesting."
  },
  {
    name: "What is the procedure for filing a complaint with the Data Protection Board of India (DPBI)?",
    answer: "First, send a grievance notice to the lender. If they fail to fix the issue, lodge a complaint on the DPBI portal. List the violated sections, attach evidence, and request statutory action."
  },
  {
    name: "How does a debt settlement advocate help when dealing with an abusive fintech loan app?",
    answer: "A debt advocate serves legal notices under the DPDP Act and RBI rules. This stops recovery agent harassment immediately. The advocate then helps negotiate a legal One-Time Settlement with full data deletion."
  }
];

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/dpdp-act-violation-complaint-against-loan-apps#webpage",
      "url": "https://www.settleloans.in/dpdp-act-violation-complaint-against-loan-apps",
      "name": "DPDP Act Violation Complaint Against Loan Apps Accessing Contacts: Legal Guide",
      "description": "Comprehensive legal framework and operational guide for filing complaints against digital loan apps that unlawfully scraped phone contacts, photos, or personal data under the DPDP Act 2023 and RBI guidelines.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/dpdp-act-violation-complaint-against-loan-apps#breadcrumb"
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
      "@id": "https://www.settleloans.in/dpdp-act-violation-complaint-against-loan-apps#breadcrumb",
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
          "name": "DPDP Act Violation Loan Apps Complaint",
          "item": "https://www.settleloans.in/dpdp-act-violation-complaint-against-loan-apps"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/dpdp-act-violation-complaint-against-loan-apps#article",
      "headline": "DPDP Act Violation Complaint Against Loan Apps Accessing Contacts: Legal Guide",
      "description": "An exhaustive statutory analysis of borrower data privacy rights against illegal phonebook access by fintech applications in India. Explains DPDP Act 2023 compliance, Data Protection Board procedures, RBI digital lending mandates, and cybercrime defense.",
      "image": "https://www.settleloans.in/images/infographics/dpdp-act-violation-complaint-against-loan-apps.jpg",
      "datePublished": "2026-09-01T10:00:00+05:30",
      "dateModified": "2026-09-01T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/dpdp-act-violation-complaint-against-loan-apps#webpage"
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
        "https://twitter.com/settleloans",
        "https://www.linkedin.com/company/settleloans"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-99999-99999",
        "contactType": "customer support",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      }
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/dpdp-act-violation-complaint-against-loan-apps#service",
      "name": "SettleLoans - Fintech Cyber Harassment Defense & DPDP Act Resolution",
      "description": "Specialized cyber privacy defense and statutory debt resolution for borrowers subjected to illegal contact scraping, photo defamation, and predatory collection by digital lending applications across India.",
      "url": "https://www.settleloans.in/dpdp-act-violation-complaint-against-loan-apps",
      "image": "https://www.settleloans.in/images/infographics/dpdp-act-violation-complaint-against-loan-apps.jpg",
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
        "reviewCount": "2740",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Vikramaditya Sharma"
          },
          "datePublished": "2026-07-15",
          "reviewBody": "An instant loan app accessed my contacts and made WhatsApp groups to threaten me. SettleLoans advocates served a swift legal notice under the DPDP Act 2023. The harassment stopped at once and my data was erased.",
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
            "name": "Pooja Venkatesh"
          },
          "datePublished": "2026-08-03",
          "reviewBody": "Multiple apps harassed my contacts with illegal demands. SettleLoans stepped in and alerted the partner NBFC fiduciaries under RBI and DPDP rules. They settled my debts cleanly without privacy breaches.",
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
            "name": "Arjun Singhal"
          },
          "datePublished": "2026-06-28",
          "reviewBody": "Ashish Jhangra and his legal team gave stellar counsel when an app harassed my office. Their swift action under the DPDP Act and IT Act forced the lender to halt collection agents.",
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
            "name": "Deepak Chawla"
          },
          "datePublished": "2026-08-20",
          "reviewBody": "The legal notice from SettleLoans cited DPDP Section 6 and Section 8 violations. The NBFC nodal officer apologized for their agency's conduct and approved a fair compromise settlement.",
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
      "@id": "https://www.settleloans.in/dpdp-act-violation-complaint-against-loan-apps#faq",
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
  { id: 'predatory-contact-harvesting-mechanics', title: '1. Contact Scraping & Digital Coercion' },
  { id: 'dpdp-act-2023-statutory-framework', title: '2. DPDP Act 2023 Statutory Architecture' },
  { id: 'rbi-digital-lending-guidelines-permissions', title: '3. RBI Digital Lending Directives' },
  { id: 'criminal-penal-liabilities-bns-it-act', title: '4. Penal Liabilities: BNS & IT Act' },
  { id: 'infographic-dpdp-enforcement-workflow', title: '5. DPDP Enforcement Infographic' },
  { id: 'data-protection-board-complaint-procedure', title: '6. Data Protection Board Filing Procedure' },
  { id: 'fintech-accounting-data-penalties-npv', title: '7. Fintech Accounting & NPV Recovery Calculus' },
  { id: 'cease-desist-evidence-preservation-ots', title: '8. Cease & Desist, Evidence & OTS' },
  { id: 'comparative-statutory-protection-matrix', title: '9. Comparative Enforcement Matrix' },
  { id: 'settleloans-cyber-legal-defense', title: '10. SettleLoans Cyber-Legal Defense' },
  { id: 'faqs', title: '11. Frequently Asked Questions' }
];

export default function DpdpActViolationComplaintAgainstLoanAppsPage() {
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
            <Lock className="w-3.5 h-3.5" />
            <span>Cyber Privacy &amp; Data Protection • Statutory Borrower Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">DPDP Act Complaint Against Loan App Data Misuse</h1>

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
              <span>DPDP Act 2023 &amp; RBI Digital Lending Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>File DPDP Cyber Privacy Complaint</span>
            </Link>
            <Link
              href="#dpdp-act-2023-statutory-framework"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>View DPDP Statutory Penalties</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. Main 3-Column Content Layout */}
      <div className="w-full max-w-[1700px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)_290px] xl:grid-cols-[270px_minmax(0,1fr)_310px] 2xl:grid-cols-[290px_minmax(0,1fr)_330px] gap-6 xl:gap-8 items-start">
          
          {/* Left Column: Sticky Table of Contents */}
          <aside className="hidden lg:block w-full lg:sticky lg:top-24 space-y-4 h-fit self-start max-h-[calc(100vh-110px)] overflow-y-auto pr-1">
            <SidebarTOC items={tocItems} />
          </aside>

          {/* Middle Column: Main Editorial Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm uppercase tracking-wider mb-4">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Core Statutory Protections &amp; DPDP Enforcement Takeaways</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Total Prohibition on Contact Harvesting.</strong> RBI lending rules ban this practice. The DPDP Act also forbids reading phonebooks or photo galleries.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Invalidity of Forced Consent.</strong> Forced app permissions fail legal standards. Section 6 of the DPDP Act treats them as void.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Massive DPBI Financial Sanctions.</strong> The Data Protection Board can act swiftly. It can levy fines up to ₹250 Crores on lenders.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Cognizable Criminal Offenses.</strong> Messaging contacts or creating shaming groups is a crime. It is punishable under Section 308 BNS and Section 66E IT Act.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Advocate Intervention.</strong> A legal Cease-and-Desist notice stops harassment at once. It also opens official bank settlement channels.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Predatory Ecosystem */}
            <section id="predatory-contact-harvesting-mechanics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Predatory Ecosystem</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Instant loan apps in India pose serious privacy risks. Many apps use tracking kits during installation. They demand phone permissions under false fraud checks. The app then copies contact lists, call logs. And photos to remote servers.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower faces financial delay, rogue lenders exploit this data. Recovery agents send abusive texts, morphed photos. And fake notices to relatives. This tactic uses social stigma to extort money quickly.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>The Fundamental Cyber Jurisprudence Principle</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  People in your phonebook never gave consent. Stealing their data violates their right to privacy. This makes phonebook harvesting both illegal and criminal.
                </p>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many borrowers think clicking &quot;Allow&quot. waives all rights. That is not true. Under the DPDP Act 2023, forced consent cannot make data theft legal.
              </p>
            </section>

            {/* Section 2: DPDP Act 2023 Statutory Architecture */}
            <section id="dpdp-act-2023-statutory-framework" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. The DPDP Act 2023 Statutory Architecture</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The DPDP Act 2023 protects loan borrowers across India. The law calls the borrower a &quot;Data Principal&quot;. It calls the lender a &quot;Data Fiduciary&quot;. The Act sets strict rules on collecting, using. And deleting data.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Section 4 requires lawful consent for data processing. Section 5 mandates clear notice before taking any data. The notice must state what data is collected. It must explain user rights and DPBI complaint steps.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Key DPDP Act 2023 Statutory Provisions Governing Loan Apps</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 6: Forced and Bundled Consent is Void.</p>
                    <p className="text-slate-600 mt-1">
                      Consent must be free, specific. And clear. Forcing contact access for loan approval is illegal. Borrowers can withdraw consent at any time.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 8: Duties and Full Liability of Lenders.</p>
                    <p className="text-slate-600 mt-1">
                      Lenders must safeguard user data. Data Fiduciaries remain liable for unlawful acts by recovery agents and third-party vendors.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 12 &amp. 13: Right to Data Deletion and Grievance Desk.</p>
                    <p className="text-slate-600 mt-1">
                      Data Principals have a legal right to erase personal data. Lenders must provide a grievance desk and answer queries on time.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 33 &amp. Schedule: Heavy fines for Non-Compliance.</p>
                    <p className="text-slate-600 mt-1">
                      The DPBI can levy heavy fines. It can penalize breaches up to ₹250 Crores. It can fine consent failures up to ₹200 Crores.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Scraping an address book breaks Section 6 and Section 8. The people in the list never gave consent. Thus, the lender has no right to hold or call those numbers.
              </p>
            </section>

            {/* Section 3: RBI Digital Lending Directives */}
            <section id="rbi-digital-lending-guidelines-permissions" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. RBI Digital Lending Directives vs. Predatory Mobile App</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The DPDP Act aligns with Reserve Bank of India rules. On September 2, 2022, the RBI issued its Digital Lending Guidelines (Circular RBI/2022-23/111 DOR.CRE.REC.66/21.07.001/2022-23). These rules apply to all banks, NBFCs. And lending apps.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The RBI rules set firm restrictions on app access:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4">
                <h3 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory RBI Digital Lending Standards</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Strict Ban on Access to Contacts and Media.</p>
                    <p className="text-slate-600">Loan apps cannot access contacts, call logs, or media files. Only one-time camera and microphone access for KYC is allowed.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Direct Fund Transfer and Loan Repayments.</p>
                    <p className="text-slate-600">Funds must move directly between bank accounts. Regulated lenders and borrowers cannot use third-party pool accounts.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Key Fact Statement (KFS) Rules.</p>
                    <p className="text-slate-600">Lenders must provide a clear KFS before signing. It must state total APR, recovery rules. And grievance contacts.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Local Data Storage and Deletion Rules.</p>
                    <p className="text-slate-600">All borrower data must stay on servers in India. Users can revoke consent and demand full data deletion.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The RBI holds licensed NBFCs strictly responsible. If a partner app abuses contacts, the NBFC faces steep fines and license cancel.
              </p>
            </section>

            {/* Section 4: Penal Liabilities, Blackmail & Cyber Crime Sanctions */}
            <section id="criminal-penal-liabilities-bns-it-act" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Penal Liabilities, Blackmail &amp; Cyber Crime Sanctions</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Threatening borrowers or sharing morphed pictures is a crime. Such conduct triggers immediate criminal liability.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Bharatiya Nyaya Sanhita, 2023 (BNS) and the IT Act 2000, borrowers have strong legal remedies against rogue agents:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-3">
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 308 BNS / Section 383 IPC: Extortion.</p>
                    <p className="text-slate-600 mt-1">
                      Demanding money by threatening family or work reputation is extortion. It carries heavy prison terms.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 351 BNS / Section 503 &amp. 506 IPC: Criminal threats.</p>
                    <p className="text-slate-600 mt-1">
                      Threatening a person&apos;s reputation or safety to cause fear is punishable with up to two years in jail.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 356 BNS / Section 499 &amp. 500 IPC: Criminal Defamation.</p>
                    <p className="text-slate-600 mt-1">
                      Sending false statements about a borrower to relatives or coworkers is criminal defamation.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 66E, 67 &amp. 72A Information Technology Act, 2000.</p>
                    <p className="text-slate-600 mt-1">
                      Section 66E bans privacy breaches. Section 67 penalizes obscene media. Section 72A punishes illegal data sharing with up to 3 years in jail.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) 10 SCC 1, the Supreme Court ruled privacy is a fundamental right under Article 21. Stealing contact lists directly violates this constitutional right.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-dpdp-enforcement-workflow" className="my-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/dpdp-act-violation-complaint-against-loan-apps.jpg"
                  alt="DPDP Act Violation Complaint Against Loan Apps Infographic: Data Protection Board of India Architecture, RBI Guidelines, and Grievance Redressal Workflow"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 text-slate-300 text-xs flex items-center justify-between">
                  <span className="font-semibold text-blue-400">Fig 1: Statutory Enforcement Architecture — DPDP Act 2023, DPBI Inquiry Powers &amp; RBI Compliance</span>
                  <span className="text-slate-400 hidden sm:inline">Source: SettleLoans Cyber Privacy &amp; Banking Legal Analysis</span>
                </div>
              </div>
            </section>

            {/* Section 6: Data Protection Board of India Filing Procedure */}
            <section id="data-protection-board-complaint-procedure" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Step-by-Step Legal Procedure</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers must follow a clear legal path under the DPDP Act. A structured four-stage plan ensures swift action:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The 4-Stage DPDP Grievance Redressal &amp; Enforcement Protocol</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 1: Digital Proof &amp. Evidence Collection.</p>
                    <p className="text-slate-600 mt-1">
                      Save screenshots of permissions, threats, call logs. And receipts. Keep all agent phone numbers and message headers.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 2: Legal Notice to Data Protection Officer.</p>
                    <p className="text-slate-600 mt-1">
                      Send a formal legal notice to the lender and partner NBFC. Demand an immediate halt to harassment and full data deletion under Section 12.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 3: Online Petition to the Data Protection Board.</p>
                    <p className="text-slate-600 mt-1">
                      If the lender fails to respond, lodge an online complaint on the DPBI portal. List violated sections and attach proof.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 4: Reporting to RBI CMS &amp. Cyber Portal.</p>
                    <p className="text-slate-600 mt-1">
                      File a complaint on the RBI portal (cms.rbi.org.in). Report criminal threats at cybercrime.gov.in or call 1930.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This legal approach shifts pressure to the lender. Facing DPBI fines and RBI scrutiny, regulated NBFCs stop recovery harassment quickly.
              </p>
            </section>

            {/* Section 7: Fintech Accounting & NPV Recovery Calculus */}
            <section id="fintech-accounting-data-penalties-npv" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Fintech NPA Accounting Realities</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Apps use aggressive collection because micro-loans are unsecured. Unlike home loans, digital loans carry no collateral.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI rules, overdue loans turn into Non-Performing Assets (NPAs) after 90 days. Lenders then face strict provisioning rules:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Substandard Assets (Up to 12 Months Overdue):</strong> Mandatory 15% provisioning on unsecured debt.</li>
                <li><strong>Doubtful Assets (12 to 24 Months Overdue):</strong> Mandatory 100% provisioning against overdue balances.</li>
                <li><strong>Loss Portfolios / Complete Write-Offs:</strong> 100% loss deducted directly from net quarterly profits.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                Civil suits are too slow and costly for small loans. Court fees and litigation delay profits. Lenders therefore evaluate recovery with this formula:
              </p>

              {/* Recovery Valuation Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Fintech Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - DPDP Penalty Exposure - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here C_t is expected cash recovery. And r is the discount rate. Deductions include legal fees, loan provisioning, and DPDP fines up to ₹250 Crores.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A DPDP legal notice alters the risk balance. The threat of a ₹250 Crore fine exceeds the loan balance. Lenders agree to a One-Time Settlement (OTS) with 40% to 70% waivers and data deletion.
              </p>
            </section>

            {/* Section 8: Direct OTS Negotiation, Cease-and-Desist Notices & NDC */}
            <section id="cease-desist-evidence-preservation-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Cease-and-Desist Notices, Evidence Preservation</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Never pay cash or UPI sums without official papers. Rogue agents pocket the money, leaving the loan active.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers should resolve their debt using a three-pillar legal plan:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileText className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Three-Pillar Legal Settlement Steps</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. legal Cease-and-Desist.</p>
                    <p className="text-slate-600">Send a legal notice citing DPDP Sections 6 and 8, RBI rules, and BNS provisions to stop harassment calls immediately.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Formal Sanction Letter.</p>
                    <p className="text-slate-600">Secure an official OTS letter on NBFC letterhead with clear waiver terms and data erasure terms.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Stamped NDC &amp. CIBIL Update.</p>
                    <p className="text-slate-600">Pay directly into the lender&apos;s bank account. Obtain a stamped No Dues Certificate and verify bureau closure.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After issuing the No Dues Certificate, the lender must delete all stored device data and contact records under DPDP rules.
              </p>
            </section>

            {/* Section 9: Comparative Enforcement Matrix */}
            <section id="comparative-statutory-protection-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Comparative DPDP Enforcement &amp; Debt Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The table below outlines legal mandates and fines under Indian digital lending laws:
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>legal Framework.</th>
                      <th>Governing Authority.</th>
                      <th>Contact Scraping Legality.</th>
                      <th>allowed Data Scope.</th>
                      <th>fines &amp. Legal Remedies.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">DPDP Act, 2023 (Sec 4, 6, 8, 33).</td>
                      <td>Data Protection Board of India (DPBI).</td>
                      <td><strong>Strictly Illegal.</strong> (Void without specific consent).</td>
                      <td>Minimal data strictly needed for the loan.</td>
                      <td>Fines up to ₹250 Crores per breach. Mandatory data deletion orders.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Digital Lending Guidelines (2022).</td>
                      <td>Reserve Bank of India.</td>
                      <td><strong>Explicitly Barred.</strong> (No access to contacts or gallery).</td>
                      <td>One-time camera and mic access for KYC only.</td>
                      <td>cancel of NBFC license. App store delisting.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Information Technology Act, 2000.</td>
                      <td>Cyber Crime Police &amp. Adjudicating Officers.</td>
                      <td><strong>Punishable Offense.</strong> (Sec 66E, 72A privacy breach).</td>
                      <td>Strict duty to protect personal data.</td>
                      <td>Up to 3 years prison. Civil damages and corporate fines.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Bharatiya Nyaya Sanhita, 2023.</td>
                      <td>Criminal Judicial Courts &amp. State Police.</td>
                      <td><strong>Cognizable Crime.</strong> (Sec 308 Extortion, Sec 351 threats).</td>
                      <td>Zero legal right to harass third-party contacts.</td>
                      <td>Criminal warrants, police arrest. And asset seizure.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Consumer Protection Act, 2019.</td>
                      <td>District &amp. State Consumer Commissions.</td>
                      <td><strong>Unfair Trade Practice.</strong> &amp. service defect.</td>
                      <td>Fair, transparent. And balanced loan terms.</td>
                      <td>Substantial payout for harassment and distress.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Cyber-Legal Defense Framework */}
            <section id="settleloans-cyber-legal-defense" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Cyber-Legal Defense Framework</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  No borrower should face cyber threats, phonebook theft, or family harassment from loan apps. SettleLoans provides swift legal defense against predatory lenders across India. Our legal team serves Cease-and-Desist notices under the DPDP Act and RBI rules. We file complaints with the DPBI and cyber police. We negotiate 40% to 70% One-Time Settlements with official No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: DPDP Act &amp; Predatory Loan App Complaints</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Verified legal answers regarding the Digital Personal Data Protection Act 2023, Data Protection Board complaints, contact scraping prohibitions. And debt resolution.
              </p>

              <div className="space-y-3">
                {faqsList.map((faq, idx) => (
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
                      <p>{faq.answer}</p>
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
                  href="https://www.meity.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Ministry of Electronics and Information Technology (DPDP Act, 2023)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Reserve Bank of India (Guidelines on Digital Lending Circular)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Justice K.S. Puttaswamy Right to Privacy)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Cyber Crime Reporting Portal (MHA Cyber Helpline 1930)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Digital Lending Complaint Redressal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Cyber Legal Defense &amp; Loan Settlement Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/cyber-crime-complaint-illegal-loan-apps-blackmail"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Cyber Crime Complaint Illegal Loan Apps
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Recovery Harassment Complaint
                </Link>
                <Link
                  href="/bank-recovery-agent-threatening-me"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Recovery Agent Threatening Me
                </Link>
                <Link
                  href="/can-recovery-agents-enter-house-without-permission"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Recovery Agents Enter House Without Permission?
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go to Jail for Loan Default?
                </Link>
                <Link
                  href="/bank-fir-for-loan-default-reality-check"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank FIR for Loan Default Reality Check
                </Link>
                <Link
                  href="/cashe-loan-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CASHe Loan Settlement Process
                </Link>
                <Link
                  href="/dmi-finance-loan-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  DMI Finance Loan Settlement Process
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/cibil-score-kaise-sudhare-settlement-ke-baad"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Score Repair After Settlement
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6 h-fit self-start">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                  AJ
                </Link>
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                      Ashish Jhangra
                    </Link>
                  </div>
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Expert in fintech cyber law, DPDP Act compliance, and RBI lending rules. He defends borrowers against illegal recovery harassment nationwide.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="text-[#1F5EFF] font-semibold hover:underline flex items-center gap-1">
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <div className="flex items-center gap-1 text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Author</span>
                </div>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Immediate Cyber Legal Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Loan Apps Harassing Your Contacts or Gallery?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not endure contact scraping or cyber extortion. Let our senior advocates issue DPDP notices, file cyber complaints. And secure a 40%–70% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Cyber Advocate Consultation
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Privacy Protections
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>DPDP Act 2023 Statutory Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Legal Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official NBFC No Dues Certificates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>RBI Digital Lending Code Enforcement</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
