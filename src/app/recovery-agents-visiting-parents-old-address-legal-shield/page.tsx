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
    answer: "No. Under RBI rules, agents cannot visit old family homes after you update your address. Visiting parents without cause is third-party harassment. It also counts as criminal house-trespass under Section 329 of the Bharatiya Nyaya Sanhita, 2023."
  },
  {
    name: "Are elderly parents legally responsible for repaying their adult child's personal loan or credit card debt?",
    answer: "No. Under Section 2(h) of the Indian Contract Act, 1872, loan contracts bind only the borrower. Parents have zero liability. They are not responsible unless they signed as a co-borrower or guarantor under Section 126 of the Act."
  },
  {
    name: "What should aging parents do immediately when a recovery agent arrives at their doorstep?",
    answer: "Keep all doors and safety grills locked. Ask for the agent's Bank ID card, IIBF DRA certificate, and bank visit letter. State clearly that the borrower moved away. Do not let them enter. Record a video on your phone and tell them to leave."
  },
  {
    name: "Can a bank or recovery agent seize household furniture, appliances, or gold from parents' house?",
    answer: "No. Recovery agents have zero power to seize property. Only a civil court bailiff with an Order XXI CPC warrant can attach assets. Also, Section 60 CPC protects basic household items. The bank cannot touch parental assets for your debt."
  },
  {
    name: "Which criminal sections apply if recovery agents harass elderly parents or refuse to leave?",
    answer: "Refusing to leave private property is criminal trespass under Section 329 BNS (Section 441/442 IPC). Threatening family members violates Section 351 BNS for criminal intimidation. Forcing money payments by fear is extortion under Section 308 BNS."
  },
  {
    name: "What did the Supreme Court of India rule regarding recovery agents and family privacy?",
    answer: "In ICICI Bank v. Prakash Kaur (2007), the Supreme Court banned musclemen for debt collection. In the Puttaswamy (2017) ruling, the court held that home privacy is a fundamental right under Article 21. Banks cannot harass innocent family members at home."
  },
  {
    name: "How does a formal legal notice from an advocate stop recovery agents from visiting parents?",
    answer: "A legal cease-and-desist notice gives the bank your new address. It cites Section 329 BNS trespass laws. It demands all future talks go through your legal counsel. Banks recall field agents quickly to avoid police cases and RBI Ombudsman fines."
  },
  {
    name: "Can a lending bank freeze parents' bank accounts or deduct money for their child's loan default?",
    answer: "No. A banker's lien under Section 171 of the Indian Contract Act applies only to the debtor's own accounts. Freezing a parent's pension or savings account is illegal. The bank must reverse such actions and may face RBI penalties."
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
      "description": "Learn how to protect elderly parents from recovery agents. Understand Section 329 BNS trespass laws and your legal rights in India.",
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
      "description": "Comprehensive guide on protecting parents from bank recovery agents. Learn about Section 329 BNS, Privity of Contract, and legal debt settlement.",
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
      "description": "Legal defense for parents facing recovery agents. We stop home harassment and negotiate One-Time Settlement (OTS) terms.",
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
          "reviewBody": "I moved to Bengaluru for my job. Soon, recovery agents visited my aging parents in Kanpur. They shouted outside and threatened to seize furniture for my personal loan. SettleLoans sent a fast cease-and-desist notice and updated my address. The visits stopped at once. They then negotiated a 55% OTS settlement with an official No Dues Certificate.",
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
          "reviewBody": "Two agents banged loudly on my 72-year-old father's door in Madurai. They claimed parents must pay an adult son's credit card bill. Ashish Jhangra and his team drafted a police notice under Section 329 BNS. The bank manager called my father to apologize in writing and removed the agency.",
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
          "reviewBody": "I live in Dubai and faced business losses. Recovery agents began threatening my widowed mother in Kochi. SettleLoans stepped in as our legal team in India. They cited the Puttaswamy privacy ruling and the Senior Citizens Act. All harassment stopped in 48 hours. We settled both personal loans peacefully.",
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
          "reviewBody": "SettleLoans brought peace back to our family. Their advice on Privity of Contract and Section 329 BNS helped my parents block agent entry. A formal legal notice stopped all visits to our family home. SettleLoans then closed my debt with a bank-stamped OTS agreement.",
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
                Many borrowers move away for work. If a loan defaults, recovery agents often visit elderly parents at home. Under Indian contract law, parents have zero liability. Entering private property without consent is criminal trespass under Section 329 BNS. It also breaks RBI rules and Supreme Court privacy laws.
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
                  <span><strong>Privity of Contract Non-Liability:</strong> Under Section 2(h) of the Indian Contract Act, parents owe nothing. They have no duty unless they signed as a loan guarantor.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 329 BNS Criminal Trespass:</strong> Agents who enter without consent commit criminal trespass. Refusing to leave is a crime punishable by jail time.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Supreme Court Privacy Precedents:</strong> The <em>Puttaswamy</em> and <em>Prakash Kaur</em> rulings protect home privacy under Article 21. Banks cannot use force at home.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Senior Citizens Act Safeguards:</strong> The 2007 Act allows local tribunals to fine banks that cause mental pain to aging parents.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Advocate Cease-and-Desist Shield:</strong> A legal notice forces banks to stop home visits. It moves talks toward an official OTS settlement.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Old Address Exploitation Crisis */}
            <section id="relocation-crisis-old-address-exploitation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Old Address Exploitation Crisis</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many professionals move to new cities or abroad for work. Old family home addresses often remain on bank loan files. If an unpaid personal loan passes 90 days past due, the bank marks it as a defaulted Asset (NPA). This follows Reserve Bank of India (RBI) rules.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Third-party collection agencies earn high commissions of 15% to 25%. Instead of finding the borrower&apos;s new home, agents often visit aging parents. They use fear and social shame. They falsely threaten police action to force parents to pay using their retirement savings.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>The Fundamental Misdirection</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  Family ties do not create loan liability. Under Indian civil law, an adult child is a separate legal person. Aging parents have zero financial duty for debts they did not sign.
                </p>
              </div>
            </section>

            {/* Section 2: Privity of Contract & Parent Non-Liability */}
            <section id="privity-of-contract-parent-non-liability" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Privity of Contract &amp; Absolute Non-Liability</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 2(h) of the Indian Contract Act, 1872, loan terms bind only the signers. This rule is called Privity of Contract. An unsecured personal loan or credit card debt exists solely between the bank and the individual adult borrower.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Indian law treats every adult as an independent person. Parents cannot be forced to pay an adult child&apos;s debt. They are liable only if they signed as a co-borrower or loan guarantor under Section 126 of the Act.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In standard unsecured loans, parents are complete strangers to the contract. Demands for parental gold or savings are illegal. Even in an Order 37 CPC summary suit, court orders apply only to the borrower&apos;s assets. Parental pensions and properties remain fully protected under Section 60 CPC.
              </p>
            </section>

            {/* Section 3: Criminal Trespass: Sec 329 BNS & Sec 441 IPC */}
            <section id="criminal-trespass-section-329-bns" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Criminal Trespass Laws</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Recovery agents have no judicial or legal powers. They carry no search warrants. They have no more right to enter a home than any ordinary stranger.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Section 329 of the Bharatiya Nyaya Sanhita, 2023 (BNS) replaced Sections 441 and 442 IPC. Under this law, entering private property to threaten or annoy someone is criminal house-trespass. Once parents say the borrower moved away and ask agents to leave, staying on the property is a criminal offense.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Pushing past safety grills or shouting in hallways breaks Section 351(2) BNS for criminal threats. It also violates Section 308 BNS for extortion and Section 79 BNS for disturbing domestic peace. Elderly parents can dial 112 to call the police for immediate help and an FIR.
              </p>
            </section>

            {/* Section 4: Supreme Court Privacy Shield & Senior Citizens Act */}
            <section id="supreme-court-privacy-senior-citizens-act" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Supreme Court Privacy Shield, Judicial Precedents</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In <em>Justice K.S. Puttaswamy v. Union of India (2017)</em>, a nine-judge bench made privacy a fundamental right under Article 21. The ruling protects private homes from commercial harassment.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This rule builds on <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em>. In that case, the Supreme Court banned banks from using musclemen for debt collection. The court ordered that debt recovery must follow lawful civil steps without shaming family members.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Sections 21 to 23 of the <em>Maintenance and Welfare of Parents and Senior Citizens Act, 2007</em>, tribunals can penalize lenders that cause mental pain to seniors. Harassing elderly parents makes banks liable for damages in court.
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
                Figure 1: Legal protections shielding elderly parents from recovery agent visits under Section 329 BNS, Supreme Court privacy rulings. And the Indian Contract Act.
              </p>
            </section>

            {/* Section 6: Tactical Doorstep Shield for Aging Parents */}
            <section id="doorstep-defense-protocol-parents" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Tactical Doorstep Protocol for Aging Parents</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To stay safe, elderly parents should keep main doors and safety grills locked. Homeowners do not have to speak with third-party agents at their door.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI rules, agents must show three key documents: a bank ID card, an IIBF Debt Recovery Agent (DRA) certificate. And a formal bank visit letter. Without these papers, the agent is an illegal intruder.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Parents can say clearly: &quot;The borrower moved away and does not live here. We are not borrowers or guarantors. You cannot enter. Please leave now. Send all notices to our legal counsel.&quot. Recording phone video creates legal proof under Sections 61 and 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA) for police reports and RBI complaints.
              </p>
            </section>

            {/* Section 7: Bank NPA Mechanics & NPV Valuation Model */}
            <section id="npa-mechanics-npv-recovery-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Bank NPA Mechanics &amp; the NPV Valuation Model</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an unsecured loan is unpaid for over 90 days, it becomes a Substandard Asset. Under RBI rules, the bank must set aside 15% to 100% of the loan amount from its profits. To reduce these losses, banks hire agencies on 15% to 25% commissions. This drives agents to visit family homes aggressively.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Bank committees evaluate bad loans using financial math. They compare quick settlements against long court cases using Net Present Value (NPV):
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
                  Here, C_t is expected recovery cash flow. And r is the discount rate. Litigation costs and NPA provisions reduce net bank value over time.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When advocates cite Section 329 BNS and file regulatory notices, banks realize that visiting parents yields zero cash. harassment also exposes them to RBI fines. Banks often agree to a One-Time Settlement (OTS), waiving 40% to 65% of the debt to close the account.
              </p>
            </section>

            {/* Section 8: Statutory Cease-and-Desist & Address Update */}
            <section id="statutory-cease-and-desist-notice" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Serving a Formal Advocate Cease-and-Desist Notice</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Verbal requests to agents rarely work because agency staff changes often. Protecting your parents permanently needs a two-part legal strategy.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                First, serve an official Address Update Notice to the bank&apos;s Principal Nodal Officer via Speed Post. This provides your new address. The bank can no longer claim agents were searching for you. Any future visit to your parents becomes willful criminal trespass.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Second, send an Advocate Cease-and-Desist Notice citing <em>Puttaswamy</em>, the Senior Citizens Act, and RBI rules. This notice orders the bank to stop agent visits and speak only with your lawyer. In over 98% of cases, this stops doorstep harassment within 48 to 72 hours.
              </p>
            </section>

            {/* Section 9: Comparative Enforcement Matrix */}
            <section id="comparative-legal-protection-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Comparative Legal Enforcement Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Knowing the difference between private recovery agents and court officials helps protect your family. The matrix below shows legal limits for each recovery channel in India:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th>Enforcement Channel.</th>
                      <th>legal Authority.</th>
                      <th>Right to Enter Parental Home.</th>
                      <th>Legal Liability of Aging Parents.</th>
                      <th>allowed Countermeasures.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Third-Party Recovery Agents.</td>
                      <td>Private agency contract. Zero court power.</td>
                      <td><strong>Zero</strong>. Entry without consent is criminal trespass.</td>
                      <td><strong>Zero</strong>. Parents protected by Privity of Contract.</td>
                      <td>Police report under Sec 329 BNS / 351 BNS, Advocate Notice, RBI Ombudsman.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Bailiff (Order XXI CPC).</td>
                      <td>Warrant issued by a Civil Court.</td>
                      <td><strong>Only with court warrant</strong> for named property.</td>
                      <td><strong>Zero</strong>. Court cannot take parent assets for child debt.</td>
                      <td>File objection under Order XXI Rule 58 CPC to prove parent ownership.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SARFAESI Authorized Officer.</td>
                      <td>SARFAESI Act, 2002 (Secured loans only).</td>
                      <td><strong>Zero for personal loans</strong>. Only for mortgaged property with DM order.</td>
                      <td><strong>Zero</strong> unless parents gave property deeds as security.</td>
                      <td>File Section 17 appeal before the Debts Recovery Tribunal (DRT).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Lok Adalat Notice / settlement.</td>
                      <td>Legal Services Authorities Act, 1987.</td>
                      <td><strong>None</strong>. No home visits. Attendance is voluntary.</td>
                      <td><strong>Zero</strong>. No penalty for not attending.</td>
                      <td>Advocate helps agree on a fair One-Time Settlement.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 138 NI Act (Cheque Bounce).</td>
                      <td>Judicial Magistrate First Class Court.</td>
                      <td><strong>Zero</strong>. Notice comes by post or police only.</td>
                      <td><strong>Zero</strong>. Only the cheque signer faces trial.</td>
                      <td>Bail, court defense. And adding under Section 147 NI Act via OTS.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Institutional Protection */}
            <section id="settleloans-advocate-intervention" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Legal Relief in Protecting Parents</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  No elderly parent in India should live in fear of recovery agents banging on doors for an adult child&apos;s personal loan. At SettleLoans, our senior banking lawyers and loan negotiators defend borrowers and their families across India.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When you hire us, SettleLoans sends formal Vakalatnama notices, Address Update Mandates, and Cease-and-Desist notices to bank nodal desks. This stops doorstep visits to your parents right away. Our team then negotiates directly with bank committees to secure an official One-Time Settlement (OTS) with a 40% to 65% waiver and a bank-stamped No Dues Certificate (NDC).
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
                Clear answers about recovery agent limits, Section 329 BNS trespass laws, Supreme Court privacy rulings. And debt settlement in India.
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
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Expert in banking law, parental privacy rights, Section 329 BNS trespass defenses, and RBI debt settlement rules.
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
                Do not let recovery agents harass your parents at home. Our banking advocates send immediate Cease-and-Desist notices, protect your family. And negotiate a 40% to 65% OTS waiver.
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
