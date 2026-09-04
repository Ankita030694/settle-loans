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
    answer: "No. Under the Reserve Bank of India (RBI) Digital Lending Guidelines issued in September 2022 and Section 6 of the Digital Personal Data Protection (DPDP) Act, 2023, digital lending apps are categorically barred from accessing mobile phonebooks, call logs, media storage, contact lists, and camera galleries. Any loan application requiring access to contacts as a condition of credit disbursal is operating in direct statutory violation."
  },
  {
    name: "What penalties can the Data Protection Board of India impose on loan apps violating the DPDP Act?",
    answer: "Under the DPDP Act, 2023, the Data Protection Board of India (DPBI) possesses statutory powers to conduct judicial inquiries and impose monetary penalties of up to ₹250 Crores per violation for failing to implement reasonable security safeguards against personal data breaches, and up to ₹200 Crores for non-compliance with data fiduciary obligations concerning user consent and notice."
  },
  {
    name: "What immediate legal steps should I take if a loan app messages my phone contacts or relatives?",
    answer: "First, preserve unedited evidence including screenshots, WhatsApp chat exports, call recordings, APK download logs, and phone numbers used by recovery agents. Second, issue a formal statutory Cease-and-Desist notice under the DPDP Act to the lending company's Nodal Grievance Officer and Data Protection Officer. Third, submit a formal complaint to the Data Protection Board of India and register a complaint on the National Cyber Crime Reporting Portal (cybercrime.gov.in)."
  },
  {
    name: "Does giving app permission during installation count as lawful consent under the DPDP Act, 2023?",
    answer: "No. Section 6 of the DPDP Act establishes that consent must be free, specific, informed, unconditional, and unambiguous with a clear affirmative action. 'Forced bundling' or 'dark pattern' click-through agreements—where an app refuses to function unless broad access to contacts and photos is granted—fail the statutory requirement of valid consent and are legally void ab initio."
  },
  {
    name: "Can I file an FIR with local police against a loan app for creating WhatsApp groups with my contacts?",
    answer: "Yes. Scraping your phone contacts and broadcasting morphed images or defamatory messages in WhatsApp groups constitutes cognizable criminal offenses under Section 308 (Extortion) and Section 351 (Criminal Intimidation) of the Bharatiya Nyaya Sanhita (BNS), 2023, alongside Section 66E (Privacy Violation) and Section 67 (Obscenity) of the Information Technology Act, 2000."
  },
  {
    name: "How does the DPDP Act 2023 affect regulated NBFC partners funding predatory loan apps?",
    answer: "Under the DPDP Act, regulated NBFCs and banks partnering with digital loan apps are classified as Data Fiduciaries, while the fintech app operates as a Data Processor. Section 8 of the DPDP Act holds the Data Fiduciary directly and vicariously liable for all personal data breaches, illegal harvesting, and processing failures committed by its appointed processors or collection agencies."
  },
  {
    name: "What is the procedure for filing a complaint with the Data Protection Board of India (DPBI)?",
    answer: "You must first exhaust the internal grievance redressal mechanism of the Data Fiduciary by issuing a formal notice. If the lender fails to remediate the violation within the prescribed timeframe or provides an unsatisfactory reply, you submit a digital complaint before the DPBI outlining the factual timeline, specific DPDP sections breached, technical evidence of data exfiltration, and request for statutory inquiry and penal action."
  },
  {
    name: "How does a debt settlement advocate help when dealing with an abusive fintech loan app?",
    answer: "A debt settlement advocate serves comprehensive legal notices citing DPDP Act violations, RBI Digital Lending directives, and BNS penal provisions to the board of directors and compliance heads of the lending entity. This legal intervention compels the immediate shutdown of contact harassment, facilitates the deletion of harvested data, and opens institutional channels for structured debt resolution or One-Time Settlement."
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
          "reviewBody": "An unauthorized instant loan app extracted my entire phonebook and created a WhatsApp group containing my colleagues and family members to extort money. SettleLoans advocates served an urgent legal notice under the DPDP Act 2023 and filed a complaint with the Data Protection Board and cyber cell. The harassment ceased immediately and all harvested data was purged.",
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
          "reviewBody": "I was trapped in a cycle of multiple fintech apps demanding exorbitant processing charges and threatening my contacts. SettleLoans stepped in, identified the underlying NBFC data fiduciaries, cited RBI Digital Lending Guidelines and DPDP non-compliance, and settled my dues legally without further contact privacy breaches.",
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
          "reviewBody": "Ashish Jhangra and his legal team provided top-tier counsel when an offshore loan app began harassing my workplace. Their expertise in the Digital Personal Data Protection Act and IT Act forced the lender to withdraw its illegal recovery agents immediately.",
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
          "reviewBody": "The legal notice drafted by SettleLoans highlighted Section 6 and Section 8 DPDP violations so thoroughly that the NBFC's nodal officer personally intervened, apologized for their third-party agency's contact scraping, and approved a structured compromise settlement.",
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
                  <span><strong>Total Prohibition on Contact Harvesting:</strong> The RBI Digital Lending Directives and the DPDP Act strictly prohibit digital loan applications from accessing mobile address books, file directories, and media galleries.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Invalidity of Forced Consent:</strong> Pre-ticked permissions, dark patterns, or blanket permission prompts during app onboarding fail the statutory test of free, informed, and specific consent under Section 6 of the DPDP Act.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Massive DPBI Financial Sanctions:</strong> The Data Protection Board of India holds statutory authority to levy penalties of up to ₹250 Crores on non-compliant fintech data fiduciaries and their regulated NBFC partners.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Cognizable Criminal Offenses:</strong> Messaging extracted phone contacts, creating WhatsApp shaming groups, or threatening photo manipulation constitutes extortion under Section 308 BNS and Section 66E of the IT Act.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Advocate Intervention:</strong> Serving a statutory Cease-and-Desist notice supported by technical evidence halts cyber harassment immediately and initiates structured debt resolution under formal banking channels.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Predatory Ecosystem */}
            <section id="predatory-contact-harvesting-mechanics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Predatory Ecosystem</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The proliferation of instant mobile loan applications in India has introduced a severe cyber security and human rights vulnerability for retail borrowers. Predatory fintech applications frequently deploy malicious software development kits (SDKs) engineered to execute automated data exfiltration upon installation. Under the guise of calculating creditworthiness, evaluating fraud risk, or verifying user identity, these mobile applications demand comprehensive device permissions. In an instant, the borrower&apos;s complete contact repository, call history, SMS database, camera gallery, and real-time geolocation telemetry are transmitted to remote cloud servers, frequently situated outside sovereign Indian data jurisdiction.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower experiences a liquidity crunch or disputes unlawful hidden processing deductions, these digital lenders do not resort to civil recovery channels. Instead, they weaponize the exfiltrated personal data through automated social shaming and psychological warfare. Rogue collection outfits deploy automated bots and call centers to blast defamatory text messages, doctored images, and fabricated legal warnings to the borrower&apos;s parents, siblings, employers, professional peers, and distant acquaintances. This aggressive tactic exploits social stigma to coerce immediate debt repayment, often forcing individuals into taking additional high-interest loans from sister applications.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>The Fundamental Cyber Jurisprudence Principle</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  Third parties whose phone numbers and names reside in your device address book have never interacted with the lending platform, nor have they provided consent for data processing. Harvesting their personal data is a direct violation of their independent constitutional right to privacy, transforming the loan application&apos;s data harvesting into an unlawful and actionable civil and criminal wrong.
                </p>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers trapped in this cycle frequently believe that because they tapped &quot;Allow&quot; on their mobile screen during app onboarding, they have surrendered all legal rights. This is a profound legal misconception. Indian data protection jurisprudence, fortified by the Digital Personal Data Protection Act, 2023, establishes that private consent clauses cannot validate illegal data harvesting or indemnify lenders against statutory privacy breaches.
              </p>
            </section>

            {/* Section 2: DPDP Act 2023 Statutory Architecture */}
            <section id="dpdp-act-2023-statutory-framework" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. The DPDP Act 2023 Statutory Architecture</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The enactment of the Digital Personal Data Protection Act, 2023 (DPDP Act) fundamentally dismantled the exploitative business model of predatory lending apps. Under the DPDP framework, the borrower is legally recognized as a &quot;Data Principal,&quot; while the lending entity and its technology platform operate as &quot;Data Fiduciaries&quot; or &quot;Data Processors.&quot; The Act introduces rigorous statutory obligations regarding how personal data must be sourced, processed, stored, and deleted across India.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Section 4 of the DPDP Act mandates that personal data can only be processed for a lawful purpose for which the Data Principal has given explicit consent or for certain legitimate uses recognized by law. Section 5 imposes a mandatory obligation on the Data Fiduciary to issue an itemized, clear, and plain-language notice prior to or at the time of seeking consent. This notice must explicitly describe the exact categories of personal data being collected, the specific purpose of processing, the manner in which the Data Principal may exercise rights of correction or erasure, and the procedure for filing a complaint with the Data Protection Board of India.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Key DPDP Act 2023 Statutory Provisions Governing Loan Apps</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 6: Invalidation of Forced, Bundled &amp; Deceptive Consent</p>
                    <p className="text-slate-600 mt-1">
                      Consent must be free, specific, informed, unconditional, and unambiguous with a clear affirmative action. Any consent obtained by making the provision of a loan conditional upon surrendering unrelated device permissions (such as contacts and media) is statutorily invalid. The borrower retains an absolute right to withdraw consent at any time.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 8: General Obligations &amp; Vicarious Liability of Data Fiduciaries</p>
                    <p className="text-slate-600 mt-1">
                      Lending institutions must implement technical and organizational measures to ensure compliance. Data Fiduciaries remain directly liable for the illegal processing, scraping, and harassment committed by their third-party technical vendors, recovery agencies, or call center partners.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 12 &amp; 13: Right to Correction, Erasure &amp; Grievance Redressal</p>
                    <p className="text-slate-600 mt-1">
                      Data Principals have a statutory right to demand the immediate deletion of unlawfully collected contact lists and personal data. Data Fiduciaries are obligated to provide a robust grievance redressal mechanism and respond to user complaints within prescribed regulatory timelines.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 33 &amp; Schedule: Astronomical Penalties for Non-Compliance</p>
                    <p className="text-slate-600 mt-1">
                      The Data Protection Board of India is empowered to impose severe financial penalties: up to ₹250 Crores for failing to prevent personal data breaches, and up to ₹200 Crores for breaching statutory obligations concerning consent and processing limits.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a loan application scrapes an entire mobile phonebook containing hundreds of unconsented third parties, it commits an egregious, mass-scale data privacy violation under Section 6 and Section 8. Because the individuals listed in the phonebook never provided consent to the Data Fiduciary, the lender has zero lawful grounds to hold, process, or contact those numbers under the DPDP Act.
              </p>
            </section>

            {/* Section 3: RBI Digital Lending Directives */}
            <section id="rbi-digital-lending-guidelines-permissions" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. RBI Digital Lending Directives vs. Predatory Mobile App</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The statutory mandate under the DPDP Act is reinforced by specific sector-level regulations issued by the Reserve Bank of India. On September 2, 2022, the RBI issued the landmark <em>Guidelines on Digital Lending</em> (Circular RBI/2022-23/111 DOR.CRE.REC.66/21.07.001/2022-23), which are legally binding on all Commercial Banks, Non-Banking Financial Companies (NBFCs), Primary Co-operative Banks, and their Lending Service Providers (LSPs).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The RBI Digital Lending Guidelines establish explicit, non-negotiable boundaries concerning mobile application permissions and borrower data access:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4">
                <h3 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory RBI Digital Lending App Governance Standards</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Strict Prohibition on Accessing Media &amp; Contacts</p>
                    <p className="text-slate-600">Digital lending apps are strictly prohibited from accessing mobile device storage, contact lists, call logs, and photo galleries. Only one-time access for camera and microphone during KYC is permitted.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Direct Disbursal &amp; Repayment Architecture</p>
                    <p className="text-slate-600">All loan disbursals and repayments must execute directly between the bank account of the Regulated Entity (RE) and the borrower, completely bypassing third-party pool accounts.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Mandatory Key Fact Statement (KFS)</p>
                    <p className="text-slate-600">Lenders must provide a standardized KFS detailing the true Annual Percentage Rate (APR), recovery mechanisms, and grievance redressal officer details before loan execution.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Data Localization &amp; Deletion Mandates</p>
                    <p className="text-slate-600">All financial and personal data must reside on secure servers located within India. Borrowers have an unconditional right to revoke consent and demand data deletion from app servers.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The RBI has repeatedly warned that Regulated Entities cannot escape regulatory penalties by blaming third-party fintech applications or outsourced collection agencies. If a partner app scrapes contacts or initiates abusive collection calls, the partner NBFC faces immediate regulatory sanction, suspension of digital lending operations, and heavy financial fines from the Reserve Bank of India.
              </p>
            </section>

            {/* Section 4: Penal Liabilities, Blackmail & Cyber Crime Sanctions */}
            <section id="criminal-penal-liabilities-bns-it-act" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Penal Liabilities, Blackmail &amp; Cyber Crime Sanctions</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When predatory collection agencies move beyond unauthorized data harvesting to active cyber blackmail—such as threatening to blast defamatory messages, creating WhatsApp shaming groups, or distributing manipulated photographs—their conduct escalates from regulatory non-compliance into serious, cognizable penal offenses under Indian criminal jurisprudence.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Bharatiya Nyaya Sanhita, 2023 (BNS), replacing the Indian Penal Code, and the Information Technology Act, 2000, victims of fintech harassment possess powerful statutory remedies to hold both individual recovery operators and corporate executives criminally liable:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-3">
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 308 BNS / Section 383 IPC: Extortion</p>
                    <p className="text-slate-600 mt-1">
                      Coercing a borrower to pay unverified penalty charges or immediate sums under the threat of contacting their family, ruining their professional reputation, or leaking private photographs constitutes the cognizable offense of extortion, carrying severe imprisonment terms.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 351 BNS / Section 503 &amp; 506 IPC: Criminal Intimidation</p>
                    <p className="text-slate-600 mt-1">
                      Threatening a person with injury to their reputation or property, or threatening their family members with intent to cause alarm, is punishable with up to two years of rigorous imprisonment.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 356 BNS / Section 499 &amp; 500 IPC: Criminal Defamation</p>
                    <p className="text-slate-600 mt-1">
                      Sending false statements alleging that a borrower is a criminal defaulter or absconder to their workplace colleagues or family contacts constitutes intentional criminal defamation.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 66E, 67 &amp; 72A Information Technology Act, 2000</p>
                    <p className="text-slate-600 mt-1">
                      Section 66E penalizes intentional privacy violations and capturing images without consent; Section 67 penalizes transmitting obscene material; and Section 72A punishes disclosure of personal information in breach of lawful contract with up to 3 years imprisonment and statutory fines.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Furthermore, in the landmark judgment <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) 10 SCC 1</em>, the 9-judge Constitution Bench of the Supreme Court affirmed that informational privacy and data autonomy are fundamental rights guaranteed under Article 21 of the Constitution of India. Unlawful digital surveillance and coercive exploitation of private phone records represent a direct violation of constitutional liberty.
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
                Navigating the statutory dispute resolution process under the DPDP Act requires strict adherence to procedural protocols. To ensure that the Data Protection Board of India (DPBI) takes immediate cognisance of your complaint, you must follow a structured four-stage escalation framework:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The 4-Stage DPDP Grievance Redressal &amp; Enforcement Protocol</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 1: Comprehensive Digital Forensics &amp; Evidence Preservation</p>
                    <p className="text-slate-600 mt-1">
                      Collect unedited screenshots of app permissions, WhatsApp threats, call logs, SMS headers, UPI transaction IDs, and APK download links. Export chat transcripts with timestamps and compile contact numbers used by harassment agents.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 2: Statutory Notice to Data Protection Officer (DPO) &amp; Nodal Officer</p>
                    <p className="text-slate-600 mt-1">
                      Serve a formal legal notice upon the Data Fiduciary (the lending entity and its partner NBFC) demanding immediate cessation of contact harvesting, complete erasure of exfiltrated data under Section 12 DPDP Act, and a written explanation within statutory deadlines.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 3: Formal Digital Petition Before the Data Protection Board of India</p>
                    <p className="text-slate-600 mt-1">
                      Upon expiry of the notice period or upon receiving an unsatisfactory response, file an electronic complaint on the official DPBI portal. Outline the specific sections breached (Sections 4, 5, 6, 8, 9), attach forensic logs, and request an inquiry and imposition of statutory penalties.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 4: Parallel Escalation to RBI CMS &amp; National Cyber Crime Portal</p>
                    <p className="text-slate-600 mt-1">
                      File a simultaneous regulatory complaint on the RBI Integrated Ombudsman portal (cms.rbi.org.in) citing Digital Lending Guidelines violations, and lodge a cyber extortion complaint on cybercrime.gov.in (or call 1930) for criminal tracking.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By executing this structured legal escalation, you transform a vulnerable situation into an overwhelming compliance liability for the lending company. Regulated NBFCs faced with formal DPBI and RBI filings immediately order their third-party collection vendors to cease operations and withdraw all unauthorized agents to avoid catastrophic institutional sanctions.
              </p>
            </section>

            {/* Section 7: Fintech Accounting & NPV Recovery Calculus */}
            <section id="fintech-accounting-data-penalties-npv" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Fintech NPA Accounting Realities</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To understand why predatory fintech lenders deploy aggressive contact harassment instead of pursuing legitimate civil court recovery, one must examine the balance sheet economics of digital lending portfolios in India. Unlike secured home loans backed by immovable real estate, digital micro-loans are entirely unsecured, high-velocity assets.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Reserve Bank of India Prudential Norms on Income Recognition, Asset Classification and Provisioning, delinquent unsecured loans must be classified as Non-Performing Assets (NPAs) after 90 days of continuous default. Once classified, the lending institution is hit with heavy mandatory provisioning burdens:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Substandard Assets (Up to 12 Months Overdue):</strong> Mandatory 15% provisioning on total unsecured exposure.</li>
                <li><strong>Doubtful Assets (12 to 24 Months Overdue):</strong> Mandatory 100% total provisioning against unsecured balances.</li>
                <li><strong>Loss Portfolios / Complete Write-Offs:</strong> 100% deduction directly from the lending institution&apos;s quarterly net profits.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                If an NBFC initiates civil recovery suits in a Civil Court or Small Causes Court to recover micro-loans of ₹10,000 to ₹1,00,000, it faces prohibitive legal costs, court filing fees, and 2 to 4 years of litigation delays. Furthermore, because predatory apps frequently operate with non-compliant loan sanction agreements, their documentation fails judicial scrutiny. Institutional risk committees evaluate recovery viability using a Net Present Value (NPV) recovery formula:
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
                  Where C_t represents estimated recoveries across time periods t, r is the institution&apos;s cost of capital discount rate, and deductions account for legal friction, mandatory NPA provisioning, and statutory exposure to DPDP Act penalties (up to ₹250 Crores).
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower is supported by legal counsel who issues a formal DPDP Act violation notice, the lender&apos;s risk calculus shifts drastically. The potential liability of facing a ₹250 Crore penalty from the Data Protection Board of India and cancellation of NBFC registration by the RBI completely dwarfs the nominal loan balance. Consequently, lenders are highly incentivized to agree to an immediate One-Time Settlement (OTS) with deep principal waivers (often 40% to 70%), purge all exfiltrated data, and issue an official No Dues Certificate.
              </p>
            </section>

            {/* Section 8: Direct OTS Negotiation, Cease-and-Desist Notices & NDC */}
            <section id="cease-desist-evidence-preservation-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Cease-and-Desist Notices, Evidence Preservation</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A critical mistake made by distressed borrowers subjected to contact harassment is paying informal extortion amounts to collection agents over UPI or payment links without official documentation. Such payments are routinely pocketed by rogue recovery agents or categorized as &quot;penal interest charges,&quot; leaving the original principal balance delinquent and inviting fresh extortion within days.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To permanently eliminate cyber harassment, legally close the debt, and restore peace of mind, borrowers must execute a structured three-pillar legal settlement protocol:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileText className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Three-Pillar Legal Resolution Architecture</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Statutory Cease-and-Desist</p>
                    <p className="text-slate-600">A comprehensive legal demand served on the lender citing DPDP Act Sections 6 &amp; 8, RBI Digital Lending directives, and BNS extortion provisions, compelling the immediate cessation of third-party contact.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Formal Sanction Letter</p>
                    <p className="text-slate-600">Negotiation of an institutional One-Time Settlement (OTS) documented on official NBFC letterhead, detailing the negotiated waiver amount, payment terms, and data deletion confirmation.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Stamped NDC &amp; CIBIL Update</p>
                    <p className="text-slate-600">Direct payment into the lender&apos;s official loan account followed by receipt of a stamped No Dues Certificate and formal closure reporting to credit bureaus (CIBIL, Experian, CRIF, Equifax).</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once the No Dues Certificate is issued, the lender is legally required under RBI guidelines and DPDP data erasure rules to completely wipe all cached device data, contact records, and metadata from its production and backup servers, permanently safeguarding the borrower and their family.
              </p>
            </section>

            {/* Section 9: Comparative Enforcement Matrix */}
            <section id="comparative-statutory-protection-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Comparative DPDP Enforcement &amp; Debt Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The comparative matrix below outlines the statutory mandates, data access restrictions, and penal liabilities across different regulatory frameworks governing digital lending in India:
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Statutory Framework</th>
                      <th>Governing Authority</th>
                      <th>Contact Scraping Legality</th>
                      <th>Permissible Data Scope</th>
                      <th>Penalties &amp; Legal Remedies</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">DPDP Act, 2023 (Sec 4, 6, 8, 33)</td>
                      <td>Data Protection Board of India (DPBI)</td>
                      <td><strong>Strictly Illegal</strong> (Void ab initio without specific consent)</td>
                      <td>Minimal data strictly necessary for stated loan purpose</td>
                      <td>Penalties up to ₹250 Crores per violation; mandatory data erasure orders</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Digital Lending Guidelines (2022)</td>
                      <td>Reserve Bank of India</td>
                      <td><strong>Explicitly Barred</strong> (Total prohibition on contacts &amp; gallery)</td>
                      <td>One-time camera/mic access only for direct KYC verification</td>
                      <td>Cancellation of NBFC license; removal of app from Google Play / Apple App Store</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Information Technology Act, 2000</td>
                      <td>Cyber Crime Police &amp; Adjudicating Officers</td>
                      <td><strong>Punishable Offense</strong> (Sec 66E, 72A data breach)</td>
                      <td>Strict adherence to reasonable cybersecurity safeguards</td>
                      <td>Up to 3 years imprisonment, civil compensation, and corporate liability</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Bharatiya Nyaya Sanhita, 2023</td>
                      <td>Criminal Judicial Courts &amp; State Police</td>
                      <td><strong>Cognizable Crime</strong> (Sec 308 Extortion, Sec 351 Intimidation)</td>
                      <td>Zero right to intimidate or defame third-party contacts</td>
                      <td>Non-bailable criminal warrants, police arrest, and confiscation of assets</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Consumer Protection Act, 2019</td>
                      <td>District &amp; State Consumer Commissions</td>
                      <td><strong>Unfair Trade Practice</strong> &amp; Deficiency of Service</td>
                      <td>Fair, transparent, and non-coercive contractual terms</td>
                      <td>Substantial punitive compensation for mental agony and harassment</td>
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
                  No borrower should have to endure cyber terrorism, phonebook scraping, defamation of relatives, or abusive WhatsApp messages from predatory digital lenders. At SettleLoans, our senior banking advocates, cyber privacy attorneys, and financial negotiators provide immediate, aggressive defense against illegal fintech collection practices across India. We serve statutory Cease-and-Desist notices invoking the DPDP Act 2023 and RBI Digital Lending directives, file formal complaints before the Data Protection Board of India and cyber cells, and negotiate structured 40% to 70% One-Time Settlements backed by official No Dues Certificates.
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
                Verified legal answers regarding the Digital Personal Data Protection Act 2023, Data Protection Board complaints, contact scraping prohibitions, and debt resolution.
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
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Authoritative specialist in fintech cyber jurisprudence, Digital Personal Data Protection Act compliance, RBI Digital Lending directives, and nationwide legal defense against predatory collection harassment.
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
                Do not endure unconsented contact scraping or cyber extortion. Retain our senior advocates to issue immediate DPDP Cease-and-Desist notices, file DPBI &amp; cyber complaints, and negotiate a 40%–70% OTS.
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
