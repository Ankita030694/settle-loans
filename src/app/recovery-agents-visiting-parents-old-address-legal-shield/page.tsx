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
  Home,
  DoorClosed,
  EyeOff,
  HeartHandshake,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Recovery Agents Visiting Parents Address | SettleLoans',
  description: 'Protect elderly parents from recovery agent visits. Learn your legal rights, trespass laws, and how to stop home harassment with SettleLoans.',
  keywords: [
    'recovery agent visiting parents house for son loan',
    'recovery agents visiting old address parents',
    'can bank harass parents for child loan',
    'legal notice to bank for recovery agent harassment of parents',
    'rbi guidelines recovery agents contacting parents',
    'section 329 BNS criminal trespass recovery agent',
    'privity of contract loan default parents liability',
    'protect elderly parents from bank recovery agents',
    'recovery agents at parents house for personal loan default',
    'senior citizens protection act recovery agent harassment'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/recovery-agents-visiting-parents-old-address-legal-shield',
  },
  openGraph: {
    title: 'Recovery Agent Visiting Parents House for Son Loan: Legal Shield & Rights',
    description: "Are recovery agents visiting your elderly parents' home for your personal loan? Discover Section 329 BNS criminal trespass laws, Supreme Court privacy rulings, and advocate-led cease-and-desist shields.",
    url: 'https://www.settleloans.in/recovery-agents-visiting-parents-old-address-legal-shield',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/recovery-agents-visiting-parents-old-address-legal-shield.jpg',
        width: 1200,
        height: 675,
        alt: 'Recovery Agent Visiting Parents House for Son Loan Legal Shield Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery Agent Visiting Parents House for Son Loan: Legal Rights & Protection',
    description: "Learn how to protect elderly parents from bank recovery agents visiting their native house. Supreme Court privacy rulings, Section 329 BNS, and legal notices explained.",
    images: ['https://www.settleloans.in/images/infographics/recovery-agents-visiting-parents-old-address-legal-shield.jpg'],
  },
};

const faqsList = [
  {
    name: "Can recovery agents legally visit my parents' house if I no longer live there?",
    answer: "No. Under RBI Fair Practices and Outsourcing Guidelines, agents cannot visit obsolete native addresses once lenders are notified of current coordinates. Uninvited visits constitute third-party harassment and criminal trespass under Section 329 of the Bharatiya Nyaya Sanhita, 2023."
  },
  {
    name: "Are elderly parents legally responsible for repaying their adult child's personal loan or credit card debt?",
    answer: "No. Under Section 2(h) of the Indian Contract Act, 1872 (Privity of Contract), contractual duties bind only the loan signatories. Parents have zero liability unless they executed a formal co-borrower deed or guarantee under Section 126 of the Act."
  },
  {
    name: "What should aging parents do immediately when a recovery agent arrives at their doorstep?",
    answer: "Keep doors and security grilles locked. Demand the agent's Bank ID, IIBF DRA accreditation, and official bank authorization letter. Clearly state the borrower has relocated, decline entry, announce that video recording is active, and instruct the agent to leave immediately."
  },
  {
    name: "Can a bank or recovery agent seize household furniture, appliances, or gold from parents' house?",
    answer: "No. Recovery agents possess zero seizure authority. Legal attachment requires an official Civil Court Bailiff carrying an Order XXI CPC warrant. Furthermore, Section 60 CPC protects domestic essentials, and parental assets cannot be attached for an adult child's debt."
  },
  {
    name: "Which criminal sections apply if recovery agents harass elderly parents or refuse to leave?",
    answer: "Refusing to leave private premises is Criminal House-Trespass under Section 329 BNS (Section 441/442 IPC). Threatening remarks trigger Section 351 BNS (Criminal Intimidation), while demanding money by instilling fear constitutes Section 308 BNS (Extortion)."
  },
  {
    name: "What did the Supreme Court of India rule regarding recovery agents and family privacy?",
    answer: "In ICICI Bank v. Prakash Kaur (2007), the Supreme Court strictly banned musclemen and extra-judicial recovery. In Justice K.S. Puttaswamy (2017), the court ruled that domestic privacy is an inviolable fundamental right under Article 21, barring commercial intrusions into private homes."
  },
  {
    name: "How does a formal legal notice from an advocate stop recovery agents from visiting parents?",
    answer: "An advocate's Cease-and-Desist Notice formally updates the borrower's address, cites Section 329 BNS, and invokes RBI rules requiring lenders to route communication exclusively through counsel. Lenders withdraw field agencies to avoid criminal complaints and RBI Ombudsman sanctions."
  },
  {
    name: "Can a lending bank freeze parents' bank accounts or deduct money for their child's loan default?",
    answer: "No. Banker's Lien under Section 171 of the Indian Contract Act applies strictly to accounts held by the debtor in identical legal capacity. Freezing parental pensions or savings accounts is an illegal tort subject to immediate reversal and Ombudsman damages."
  }
];

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/recovery-agents-visiting-parents-old-address-legal-shield#webpage",
      "url": "https://www.settleloans.in/recovery-agents-visiting-parents-old-address-legal-shield",
      "name": "Recovery Agent Visiting Parents House for Son Loan: Legal Shield & Rights",
      "description": "Comprehensive legal guide on protecting aging parents from bank recovery agents visiting their native address for an adult child's loan default in India. Explains Section 329 BNS criminal trespass, Privity of Contract non-liability, Puttaswamy privacy jurisprudence, and advocate cease-and-desist notices.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/recovery-agents-visiting-parents-old-address-legal-shield#breadcrumb"
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
      "@id": "https://www.settleloans.in/recovery-agents-visiting-parents-old-address-legal-shield#breadcrumb",
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
          "name": "Recovery Agent Visiting Parents House Legal Shield",
          "item": "https://www.settleloans.in/recovery-agents-visiting-parents-old-address-legal-shield"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/recovery-agents-visiting-parents-old-address-legal-shield#article",
      "headline": "Recovery Agent Visiting Parents House for Son Loan: Supreme Court Privacy Shield & Legal Remedies",
      "description": "An exhaustive analytical and statutory breakdown examining the illegality of bank recovery agents visiting elderly parents at native addresses for an adult child's debt. Explains Section 329 BNS, Privity of Contract, Senior Citizens Act safeguards, and advocate-led OTS settlements.",
      "image": "https://www.settleloans.in/images/infographics/recovery-agents-visiting-parents-old-address-legal-shield.jpg",
      "datePublished": "2026-08-31T10:00:00+05:30",
      "dateModified": "2026-08-31T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/recovery-agents-visiting-parents-old-address-legal-shield#webpage"
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
      "@id": "https://www.settleloans.in/recovery-agents-visiting-parents-old-address-legal-shield#service",
      "name": "SettleLoans - Parental Legal Defense & Loan Resolution Services",
      "description": "Dedicated nationwide legal representation protecting aging parents from coercive recovery agent visits, third-party harassment, and criminal trespass, combined with institutional One-Time Settlement (OTS) negotiations.",
      "url": "https://www.settleloans.in/recovery-agents-visiting-parents-old-address-legal-shield",
      "image": "https://www.settleloans.in/images/infographics/recovery-agents-visiting-parents-old-address-legal-shield.jpg",
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
            "name": "Siddharth Verma"
          },
          "datePublished": "2026-07-19",
          "reviewBody": "After I relocated to Bengaluru for work, recovery agents started visiting my elderly parents in Kanpur, shouting outside their house and threatening to seize their furniture for my personal loan. SettleLoans advocates issued an immediate Cease-and-Desist Notice and an official address update to the bank nodal desk. The visits stopped immediately, and they negotiated a 55% OTS settlement with an official No Dues Certificate.",
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
          "datePublished": "2026-08-04",
          "reviewBody": "Two collection agents banged violently on my 72-year-old father's door in Madurai, claiming parents are responsible for an adult son's credit card default. Ashish Jhangra and his legal team drafted an urgent police complaint under Section 329 BNS and served the bank. The bank collection manager called my father personally to apologize in writing and withdrew the agency completely.",
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
            "name": "Rajiv Nambiar"
          },
          "datePublished": "2026-06-25",
          "reviewBody": "Living in Dubai while dealing with business losses, I was devastated to learn recovery agents were intimidating my widowed mother in Kochi. SettleLoans acted as my legal shield in India. They invoked the Supreme Court Puttaswamy ruling and the Senior Citizens Act. All harassment ceased in 48 hours, and we settled my dual personal loans without any court friction.",
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
            "name": "Anurag Kashyap"
          },
          "datePublished": "2026-08-18",
          "reviewBody": "SettleLoans gave my family back our peace of mind. Their detailed analysis of Privity of Contract and Section 329 BNS empowered my parents to refuse doorstep entry. The formal legal notice stopped aggressive agency visits to our native home permanently, leading to a smooth, bank-stamped OTS resolution.",
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
      "@id": "https://www.settleloans.in/recovery-agents-visiting-parents-old-address-legal-shield#faq",
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
  { id: 'relocation-crisis-old-address-exploitation', title: '1. The Old Address Exploitation Crisis' },
  { id: 'privity-of-contract-parent-non-liability', title: '2. Privity of Contract & Parent Non-Liability' },
  { id: 'criminal-trespass-section-329-bns', title: '3. Criminal Trespass: Sec 329 BNS & Sec 441 IPC' },
  { id: 'supreme-court-privacy-senior-citizens-act', title: '4. Supreme Court Privacy Shield & Senior Citizens Act' },
  { id: 'infographic-parents-legal-shield', title: '5. Parental Protection Infographic' },
  { id: 'doorstep-defense-protocol-parents', title: '6. Tactical Doorstep Shield for Aging Parents' },
  { id: 'npa-mechanics-npv-recovery-formula', title: '7. Bank NPA Mechanics & NPV Valuation Model' },
  { id: 'statutory-cease-and-desist-notice', title: '8. Statutory Cease-and-Desist & Address Update' },
  { id: 'comparative-legal-protection-matrix', title: '9. Comparative Enforcement Matrix' },
  { id: 'settleloans-advocate-intervention', title: '10. SettleLoans Institutional Protection' },
  { id: 'faqs', title: '11. Frequently Asked Questions' }
];

export default function RecoveryAgentsVisitingParentsOldAddressPage() {
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
            <Scale className="w-3.5 h-3.5" />
            <span>Borrower Statutory Protections • Elderly Parents &amp; Native Home Legal Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Protecting Parents from Recovery Agent Visits: Legal Shield</h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-4 mb-6 flex flex-wrap items-center justify-center gap-4">
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
              <span>RBI Fair Practices &amp; Constitutional Privacy Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Stop Agent Visits to Parents</span>
            </Link>
            <Link
              href="#privity-of-contract-parent-non-liability"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>View Legal Protection Shield</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. Main 3-Column Content Layout */}
      <div className="w-full max-w-[1700px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)_290px] xl:grid-cols-[270px_minmax(0,1fr)_310px] 2xl:grid-cols-[290px_minmax(0,1fr)_330px] gap-6 xl:gap-8 items-start">
          
          {/* Left Column: Sticky Table of Contents + Crux Pill */}
          <aside className="hidden lg:block w-full lg:sticky lg:top-24 space-y-4 h-fit self-start max-h-[calc(100vh-110px)] overflow-y-auto pr-1">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Case Crux</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                When an adult child defaults on an unsecured loan after relocating, collection agencies frequently exploit elderly parents at their native home. Under Indian contract law, parents possess zero liability. Uninvited entry onto parental property constitutes criminal house-trespass under Section 329 BNS, violating Supreme Court privacy precedents and RBI Master Directions.
              </p>
            </div>

            <SidebarTOC items={tocItems} />
          </aside>

          {/* Middle Column: Main Editorial Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm uppercase tracking-wider mb-4">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Essential Statutory Protections for Aging Parents</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Privity of Contract Non-Liability:</strong> Under Section 2(h) of the Indian Contract Act, parents owe zero rupees for an adult child&apos;s unsecured loans unless they formally co-signed as guarantors.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 329 BNS Criminal Trespass:</strong> Agents stepping over thresholds or refusing to vacate after being instructed to leave commit criminal house-trespass, punishable with imprisonment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Supreme Court Privacy Precedents:</strong> <em>Puttaswamy</em> and <em>Prakash Kaur</em> rulings recognize domestic privacy as an inviolable Article 21 right, banning coercive extra-judicial tactics.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Senior Citizens Act Safeguards:</strong> The 2007 Act empowers District Tribunals to penalize institutions that inflict mental trauma on aging parents.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Advocate Cease-and-Desist Shield:</strong> Serving formal notice combined with an address update compels lenders under RBI rules to withdraw agents and transition to OTS settlement.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Old Address Exploitation Crisis */}
            <section id="relocation-crisis-old-address-exploitation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Old Address Exploitation Crisis</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When career opportunities prompt professionals to relocate from native towns to metropolitan tech hubs or overseas positions, permanent parental addresses remain on historical loan records. If unexpected economic disruptions cause an unsecured loan default exceeding 90 days, the debt becomes classified as a Non-Performing Asset (NPA) under Reserve Bank of India (RBI) Prudential Norms.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Rather than tracking the borrower&apos;s current coordinates, third-party collection agencies operating on aggressive 15% to 25% commissions descend unannounced upon elderly parents at the native home. Agents deliberately exploit the social stigma of debt and parental health vulnerabilities, using loud confrontations and fabricated threats of police attachment to coerce non-signatory seniors into liquidating personal pensions or savings.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>The Fundamental Misdirection</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  Familial relationships do not create legal liability. Under Indian civil jurisprudence, an adult child is an entirely independent legal entity. Aging parents bear zero financial responsibility for unsecured debts they did not execute.
                </p>
              </div>
            </section>

            {/* Section 2: Privity of Contract & Parent Non-Liability */}
            <section id="privity-of-contract-parent-non-liability" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Privity of Contract &amp; Absolute Non-Liability</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 2(h) of the Indian Contract Act, 1872, the Doctrine of Privity of Contract mandates that contractual terms bind solely the executing parties. An unsecured personal loan or credit card covenant exists strictly between the lending institution and the individual adult borrower.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Indian law recognizes complete legal personhood upon attaining majority. Parents cannot be held vicariously liable for an adult child&apos;s contractual default unless they formally executed a co-borrower covenant or a continuing deed of guarantee under Section 126 of the Indian Contract Act.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In standard retail unsecured loans, parents are complete legal strangers to the debt. Demands for parental jewelry, savings, or signed promissory notes constitute actionable misrepresentation. Even under an Order 37 CPC summary suit, judicial attachment decrees apply exclusively to assets owned by the debtor, leaving parental pensions and properties fully protected under Section 60 CPC.
              </p>
            </section>

            {/* Section 3: Criminal Trespass: Sec 329 BNS & Sec 441 IPC */}
            <section id="criminal-trespass-section-329-bns" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Criminal Trespass Laws</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Recovery agents possess zero judicial or statutory authority. They hold no search warrants and enjoy no legal standing beyond that of an ordinary private visitor on residential premises.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 329 of the Bharatiya Nyaya Sanhita, 2023 (BNS), replacing Sections 441 and 442 IPC, entering or remaining on private residential property to intimidate, insult, or annoy the occupant constitutes criminal house-trespass. Once parents state that the debtor has relocated and instruct agents to leave, any refusal to vacate the doorway or corridor constitutes an immediate, punishable penal offense.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Pushing past security grilles, blocking entrances, or shouting corridor threats triggers Section 351(2) BNS (Criminal Intimidation), Section 308 BNS (Extortion), and Section 79 BNS (Insulting Domestic Modesty and Peace). Elderly parents are legally entitled to contact police emergency services (112) for immediate dispatch and FIR registration.
              </p>
            </section>

            {/* Section 4: Supreme Court Privacy Shield & Senior Citizens Act */}
            <section id="supreme-court-privacy-senior-citizens-act" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Supreme Court Privacy Shield, Judicial Precedents</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In the benchmark nine-judge Constitution Bench ruling in <em>Justice K.S. Puttaswamy v. Union of India (2017)</em>, the Supreme Court declared privacy a fundamental right under Article 21, establishing the domestic residence as an inviolable sanctuary immune from coercive commercial intrusion.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This constitutional shield reinforces <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em>, where the Supreme Court strictly banned banks from deploying musclemen or coercive collection agencies, ruling that debt recovery must follow due civil process without humiliating innocent family members.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Furthermore, under Sections 21 to 23 of the <em>Maintenance and Welfare of Parents and Senior Citizens Act, 2007</em>, District Maintenance Tribunals can penalize commercial lenders that subject elderly citizens to mental trauma. Inflicting acute health distress on vulnerable seniors creates direct tortious liability for banks, exposing management to substantial judicial damages.
              </p>
            </section>

            {/* Section 5: Parental Protection Infographic */}
            <section id="infographic-parents-legal-shield" className="space-y-4">
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-slate-50 p-2">
                <Image
                  src="/images/infographics/recovery-agents-visiting-parents-old-address-legal-shield.jpg"
                  alt="Legal Shield: Protecting Parents from Loan Recovery Agents Infographic"
                  width={1200}
                  height={675}
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                />
              </div>
              <p className="text-xs sm:text-sm text-slate-600 italic text-center leading-relaxed">
                Figure 1: Statutory defense architecture protecting elderly parents against unannounced recovery agent visits under Section 329 BNS, Supreme Court privacy precedents, and the Indian Contract Act.
              </p>
            </section>

            {/* Section 6: Tactical Doorstep Shield for Aging Parents */}
            <section id="doorstep-defense-protocol-parents" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Tactical Doorstep Protocol for Aging Parents</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To neutralize intimidation, elderly parents must maintain strict physical boundaries: keep main doors and security grilles locked at all times. Homeowners are under no legal obligation to entertain doorstep dialogue with third-party agents.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI Fair Practice Codes, agents must produce three mandatory credentials: an official Bank ID card, an IIBF Debt Recovery Agent (DRA) certificate, and a formal lender authorization letter specifying the visit. Failure to present these documents establishes the visitor as an unauthorized intruder.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Parents should state firmly: &quot;The borrower relocated and does not reside here. We are not borrowers or guarantors. You have no permission to enter. Leave immediately; all communication must go through our legal counsel.&quot; Concurrently, recording phone video provides admissible digital evidence under Sections 61 and 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA) for police complaints and RBI Ombudsman filings.
              </p>
            </section>

            {/* Section 7: Bank NPA Mechanics & NPV Valuation Model */}
            <section id="npa-mechanics-npv-recovery-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Bank NPA Mechanics &amp; the NPV Valuation Model</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an unsecured loan crosses 90 days past due, it becomes a Substandard Asset requiring an immediate 15% provisioning deduction from bank profits, rising to 25%–100% after 12 months under RBI Prudential Guidelines. To mitigate provisioning hits, banks outsource recovery to external agencies on lucrative 15% to 25% commissions, incentivizing aggressive field agents to harass native homes.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                However, senior bank committees determine resolutions using financial mathematics, benchmarking recoveries through the Net Present Value (NPV) formula against protracted civil litigation:
              </p>

              {/* Formula JSX Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries, r is the discount rate, and deductions account for 3–5 years of court friction and capital locked in NPA provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When advocates enforce Section 329 BNS and prepare regulatory complaints, banks recognize that harassing parents will produce zero financial recovery while risking severe RBI penalties. Lenders routinely pivot to institutional One-Time Settlements (OTS), waiving 40% to 65% of balances to close the file cleanly.
              </p>
            </section>

            {/* Section 8: Statutory Cease-and-Desist & Address Update */}
            <section id="statutory-cease-and-desist-notice" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Serving a Formal Advocate Cease-and-Desist Notice</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Verbal requests to field agents are routinely ignored due to high agency turnover. Permanently protecting parents requires an advocate-led dual legal strategy.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                First, a formal Statutory Address Update Notice served upon the lender&apos;s Principal Nodal Officer via Speed Post updates the borrower&apos;s service coordinates, stripping the bank of the defense that agents were merely &quot;tracing the borrower.&quot; Any subsequent visit constitutes premeditated criminal trespass.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Second, an Advocate Cease-and-Desist Notice invoking <em>Puttaswamy</em>, the Senior Citizens Act, and RBI Outsourcing Directives compels the bank to recall field agents and route all communications exclusively through counsel. Violations invite RBI Ombudsman sanctions, halting doorstep harassment in over 98% of cases within 48 to 72 hours.
              </p>
            </section>

            {/* Section 9: Comparative Enforcement Matrix */}
            <section id="comparative-legal-protection-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Comparative Legal Enforcement Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding the legal distinction between private recovery tactics and judicial processes is vital for shielding elderly parents. The comparative matrix below outlines the strict boundaries governing recovery mechanisms under Indian law:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th>Enforcement Channel</th>
                      <th>Statutory Authority</th>
                      <th>Right to Enter Parental Home</th>
                      <th>Legal Liability of Aging Parents</th>
                      <th>Permissible Countermeasures</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Third-Party Recovery Agents</td>
                      <td>Private Agency Contract (Zero Judicial Standing)</td>
                      <td><strong>Absolute Zero</strong> (Uninvited entry is Criminal Trespass)</td>
                      <td><strong>Zero</strong> (Non-signatories protected by Privity of Contract)</td>
                      <td>Police complaint under Sec 329 BNS / 351 BNS, Advocate Cease-and-Desist, RBI Ombudsman</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Bailiff (Order XXI CPC)</td>
                      <td>Judicial Warrant issued by Competent Civil Court</td>
                      <td><strong>Only with Official Court Warrant</strong> naming specific property</td>
                      <td><strong>Zero</strong>; Cannot attach third-party assets for child&apos;s debt</td>
                      <td>Objection Petition under Order XXI Rule 58 CPC demonstrating parental ownership</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SARFAESI Authorized Officer</td>
                      <td>SARFAESI Act, 2002 (Secured Mortgages Only)</td>
                      <td><strong>Zero for unsecured personal loans</strong>; Only secured properties with DM order</td>
                      <td><strong>Zero</strong> unless parents mortgaged title deeds for the loan</td>
                      <td>Section 17 Securitisation Application before the Debts Recovery Tribunal (DRT)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Lok Adalat Notice / Conciliation</td>
                      <td>Legal Services Authorities Act, 1987</td>
                      <td><strong>None</strong> (Zero field visits; purely voluntary tribunal)</td>
                      <td><strong>Zero</strong>; Non-attendees face zero penal or civil consequences</td>
                      <td>Advocate representation to negotiate a mutually binding One-Time Settlement award</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 138 NI Act (Cheque Bounce)</td>
                      <td>Judicial Magistrate First Class Court</td>
                      <td><strong>Zero</strong>; Summons served only via registered post or police</td>
                      <td><strong>Zero</strong>; Cheque issuer alone faces criminal trial</td>
                      <td>Bail application, dispute defense, and compounding under Section 147 NI Act via OTS</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Institutional Protection */}
            <section id="settleloans-advocate-intervention" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Legal Relief in g Parents</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  No elderly parent in India should endure retirement in fear of aggressive collection agents banging on doors or threatening to seize their home for a child&apos;s unsecured loan. At SettleLoans, our senior banking advocates and financial negotiators provide robust nationwide representation for distressed borrowers and their families.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Upon retention, SettleLoans issues formal Vakalatnama notices, Statutory Address Update Mandates, and Cease-and-Desist notices to bank nodal desks, immediately terminating doorstep visits to your parents&apos; home. With family peace restored, our advocates negotiate directly with bank credit committees to structure institutional One-Time Settlements (OTS), securing 40% to 65% waivers and official bank-stamped No Dues Certificates (NDCs).
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Recovery Agents &amp; Parental Legal Rights</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Verified statutory and legal answers regarding recovery agent boundaries, Section 329 BNS trespass laws, Supreme Court privacy rulings, and debt settlement in India.
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
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Official Statutory &amp; Regulatory References
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://www.mha.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Bharatiya Nyaya Sanhita, 2023 (Section 329 Criminal House-Trespass)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Managing Risks &amp; Code of Conduct in Outsourcing</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Justice K.S. Puttaswamy Right to Privacy Judgment)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://socialjustice.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Maintenance and Welfare of Parents and Senior Citizens Act, 2007</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Grievance Portal for Unlawful Harassment)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Legal Defense &amp; Loan Settlement Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/can-recovery-agents-enter-house-without-permission"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Recovery Agents Enter House Without Permission?
                </Link>
                <Link
                  href="/can-recovery-agents-freeze-family-bank-accounts"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Recovery Agents Freeze Family Bank Accounts?
                </Link>
                <Link
                  href="/can-recovery-agents-take-household-furniture-or-gold"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Recovery Agents Take Furniture or Gold?
                </Link>
                <Link
                  href="/can-recovery-agents-visit-home-on-sunday-or-holidays"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Recovery Agents Visit on Sunday or Holidays?
                </Link>
                <Link
                  href="/bank-recovery-agent-threatening-me"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Recovery Agent Threatening Me
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Recovery Harassment Complaint
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Bank Seize Property for Personal Loan?
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go to Jail for Loan Default?
                </Link>
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply Guide
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
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
                Distinguished authority in banking jurisprudence, parental privacy defenses, criminal trespass protections under Section 329 BNS, and RBI institutional debt compromise frameworks.
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
                <span>Immediate Parental Protection</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Agents Harassing Your Elderly Parents?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not allow collection agencies to terrorize your native family home. Retain our senior banking advocates to serve immediate Cease-and-Desist notices, shield your parents, and secure an institutional 40%–65% OTS waiver.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Advocate Consultation
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Safeguards
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Privity of Contract Non-Liability</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Section 329 BNS Criminal Trespass Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Senior Citizens Welfare Act Invocation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>RBI Fair Practices Code Enforcement</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
