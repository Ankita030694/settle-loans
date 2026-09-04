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
  Truck,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Can Agents Take Furniture or Gold? | SettleLoans',
  description: 'Can recovery agents seize your household furniture or gold? Learn Section 60 CPC movable property seizure exemptions with SettleLoans.',
  keywords: [
    'can recovery agent seize household items for personal loan',
    'can bank recovery agent take furniture',
    'can recovery agent seize gold for personal loan',
    'recovery agent threatening to take household items',
    'can bank seize household items for credit card debt',
    'section 60 cpc exempt property from attachment',
    'rbi guidelines on recovery agent seizing property',
    'can recovery agents enter house to take belongings',
    'personal loan default property seizure rules india',
    'how to stop recovery agents threatening asset seizure'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/can-recovery-agents-take-household-furniture-or-gold',
  },
  openGraph: {
    title: 'Can Recovery Agents Seize Household Furniture or Gold? Legal Rights & RBI Rules',
    description: 'Definitive legal analysis on property seizure threats by loan recovery agents in India. Learn why recovery agents have zero legal authority to touch household items or personal jewelry, Section 60 CPC exemptions, and RBI fair practice protections.',
    url: 'https://www.settleloans.in/can-recovery-agents-take-household-furniture-or-gold',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/can-recovery-agents-take-household-furniture-or-gold.jpg',
        width: 1200,
        height: 675,
        alt: 'Can Recovery Agents Seize Household Furniture or Gold Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can Recovery Agents Seize Household Items or Gold for Personal Loan Default?',
    description: 'Agents threatening to bring a truck to seize TV, fridge, furniture, or gold jewelry? Understand your absolute statutory protections under Indian civil law and how advocates stop illegal recovery intimidation.',
    images: ['https://www.settleloans.in/images/infographics/can-recovery-agents-take-household-furniture-or-gold.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/can-recovery-agents-take-household-furniture-or-gold#webpage",
      "url": "https://www.settleloans.in/can-recovery-agents-take-household-furniture-or-gold",
      "name": "Can Recovery Agents Seize Household Furniture or Gold? Legal Rights & RBI Rules",
      "description": "Exhaustive legal guide on borrower protections against illegal property seizure by recovery agents for personal loans and credit card defaults in India. Covers Section 60 CPC, SARFAESI limitations, RBI Master Directions, and debt settlement strategies.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/can-recovery-agents-take-household-furniture-or-gold#breadcrumb"
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
      "@id": "https://www.settleloans.in/can-recovery-agents-take-household-furniture-or-gold#breadcrumb",
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
          "name": "Can Recovery Agents Take Household Furniture or Gold",
          "item": "https://www.settleloans.in/can-recovery-agents-take-household-furniture-or-gold"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/can-recovery-agents-take-household-furniture-or-gold#article",
      "headline": "Can Recovery Agents Seize Household Furniture or Gold? Legal Rights & RBI Rules",
      "description": "An exhaustive analytical examination of Indian civil and banking jurisprudence regarding movable property seizure for unsecured personal loan and credit card defaults. Details Section 60 of the Code of Civil Procedure, SARFAESI Act boundaries, RBI Fair Practices Code, and advocate-led debt resolution protocols.",
      "image": "https://www.settleloans.in/images/infographics/can-recovery-agents-take-household-furniture-or-gold.jpg",
      "datePublished": "2026-08-31T10:00:00+05:30",
      "dateModified": "2026-08-31T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/can-recovery-agents-take-household-furniture-or-gold#webpage"
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
      "@id": "https://www.settleloans.in/can-recovery-agents-take-household-furniture-or-gold#service",
      "name": "SettleLoans - Borrower Protection & Debt Resolution Services",
      "description": "Comprehensive legal defense against unlawful recovery agent harassment, illegal asset seizure threats, and extortion, combined with structured One-Time Settlement (OTS) negotiation across India.",
      "url": "https://www.settleloans.in/can-recovery-agents-take-household-furniture-or-gold",
      "image": "https://www.settleloans.in/images/infographics/can-recovery-agents-take-household-furniture-or-gold.jpg",
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
            "name": "Suresh Nambiar"
          },
          "datePublished": "2026-07-18",
          "reviewBody": "Recovery agents visited my home. They shouted and threatened to bring a truck. They said they would take my sofa, fridge, and gold for an unpaid loan. SettleLoans advocates sent an urgent legal notice. The bank withdrew the agency. We settled the debt at a 55% waiver.",
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
            "name": "Pooja Deshmukh"
          },
          "datePublished": "2026-08-02",
          "reviewBody": "An NBFC agent threatened to enter my flat and take appliances. SettleLoans explained Section 60 CPC exemptions. They filed complaints with the Banking Ombudsman. Within three days, threatening calls stopped. The bank issued a formal settlement letter.",
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
            "name": "Harish Vardhan"
          },
          "datePublished": "2026-06-11",
          "reviewBody": "I feared agents barging in and humiliating my family. Ashish Jhangra and the SettleLoans legal team provided strong defense. They stopped illegal home visits. They helped us negotiate an official bank settlement.",
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
            "name": "Gurpreet Singh"
          },
          "datePublished": "2026-08-15",
          "reviewBody": "The legal guidance was very clear. They showed us how third-party agencies make fake seizure notices. Their legal representation restored our peace of mind.",
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
      "@id": "https://www.settleloans.in/can-recovery-agents-take-household-furniture-or-gold#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a bank recovery agent legally enter my house and seize furniture or electronics for an unpaid personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Bank recovery agents have zero legal power to seize movable items. They cannot enter your home without your permission. Personal loans and credit cards are unsecured debts under civil contract law. Entering without permission is criminal trespass under Section 329 BNS (Section 441 IPC). Forcible removal of goods is theft or robbery."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents take my wife's gold jewelry or Mangalsutra to recover credit card dues?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Recovery agents have no legal power to touch or take personal jewelry. Under Section 60(1)(a) CPC, even courts cannot attach personal ornaments like a Mangalsutra or religious jewelry. Strihidhan is the personal property of a woman. It cannot be taken for her husband's or family debts."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if a recovery agent threatens to bring a truck to repossess household goods?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Save all phone recordings, messages, and videos as proof. Tell the agent that loan default is a civil matter. Threats of extra-judicial seizure are criminal intimidation under Section 351 BNS (Section 506 IPC) and extortion under Section 308 BNS (Section 383 IPC). Contact an advocate, notify the bank, and file police and RBI complaints."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank attach my household goods through a court order for personal loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A bank can only seek property attachment after winning a civil recovery suit and getting a court decree. Attachment must be done by an official Court Bailiff with a sealed court warrant, never by recovery agents. Moreover, Section 60 CPC exempts basic bedding, clothing, utensils, tools of trade, and basic furniture."
          }
        },
        {
          "@type": "Question",
          "name": "Does the SARFAESI Act allow banks to take household items for unsecured loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The SARFAESI Act, 2002 applies only to secured loans where specific property is mortgaged or hypothecated, like home or car loans. Personal loans and credit cards have no collateral. Banks cannot use SARFAESI Section 13(2) or 13(4) repossession against unsecured loans."
          }
        },
        {
          "@type": "Question",
          "name": "What items are completely exempt from seizure under Section 60 of the Code of Civil Procedure (CPC)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 60(1) CPC exempts clothes, cooking pots, beds, and bedding. It also protects sacred ornaments like Mangalsutras, artisan tools, farm equipment, farm produce, account books, and homes of farmers or laborers. Basic household furniture is legally safe."
          }
        },
        {
          "@type": "Question",
          "name": "What are the permissible hours and rules for recovery agent visits under RBI guidelines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI rules and Fair Practices Codes, agents can only visit or call between 8:00 AM and 7:00 PM. Agents must not use physical force, shouting, abusive words, or threats. They cannot harass family or create scenes in your neighborhood."
          }
        },
        {
          "@type": "Question",
          "name": "How does hiring a debt settlement advocate stop illegal property confiscation threats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A debt settlement advocate files a Vakalatnama and sends a Cease-and-Desist notice. Under RBI rules, lenders must route all communications through the lawyer once hired. If agents harass you, the lawyer files criminal and RBI Ombudsman complaints while securing a 40% to 65% OTS."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'the-property-confiscation-myth', title: '1. The Property Seizure Myth' },
  { id: 'statutory-framework-cpc-section-60', title: '2. Section 60 CPC Protections' },
  { id: 'sarfaesi-act-unsecured-debt-limits', title: '3. SARFAESI Act & Unsecured Limits' },
  { id: 'bank-npa-accounting-npv-formula', title: '4. Bank Accounting & NPV Model' },
  { id: 'infographic-asset-seizure-rules', title: '5. Asset Seizure Infographic' },
  { id: 'criminal-countermeasures-illegal-threats', title: '6. Criminal Penalties for Agents' },
  { id: 'civil-court-execution-reality', title: '7. Civil Court Execution Reality' },
  { id: 'settlement-negotiation-ndc-cibil', title: '8. Settlement, NDC & CIBIL' },
  { id: 'asset-protection-comparative-matrix', title: '9. Comparative Protection Matrix' },
  { id: 'settleloans-legal-defense-framework', title: '10. SettleLoans Legal Defense' },
  { id: 'faqs', title: '11. Frequently Asked Questions' }
];

export default function CanRecoveryAgentsTakeHouseholdFurnitureOrGoldPage() {
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
            <span>Borrower Property Rights • Section 60 CPC &amp; RBI Directives</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Can Recovery Agents Seize Furniture or Gold?</h1>

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
              <span>RBI Fair Practices &amp; High Court Precedent Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Stop Illegal Seizure Threats Now</span>
            </Link>
            <Link
              href="#statutory-framework-cpc-section-60"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>View Protected Property Rules</span>
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
                <span>Executive Legal Crux</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Third-party recovery agents have zero power to seize property. They cannot enter your home without your consent. Unsecured personal loans and credit cards carry no asset charge. Threatening to take furniture, appliances, or gold is criminal trespass and extortion under Indian penal law.
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
                <span>Essential Borrower Property Rights &amp; Statutory Truths</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Repossession Power:</strong> Bank recovery agents have no right or court warrant to seize household furniture, appliances, or personal goods.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 60 CPC Statutory Shield:</strong> Civil law strictly protects basic household items, beds, cooking pots, and women&apos;s ornaments like Mangalsutras from court attachment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>No SARFAESI for Unsecured Debt:</strong> The SARFAESI Act applies only to secured loans. Personal loans are unsecured debts with no claim on home goods.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Actionable Criminal Offenses:</strong> Entering without consent or threatening to take goods is criminal trespass (Section 329 BNS), extortion (Section 308 BNS), and intimidation (Section 351 BNS).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Advocate-Led Resolution:</strong> Hiring a lawyer stops coercive visits at once. It redirects talks toward a structured One-Time Settlement (OTS) with 40% to 65% waivers.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Property Confiscation Myth */}
            <section id="the-property-confiscation-myth" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Property Confiscation Myth</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Financial distress can strike through job loss, medical costs, or inflation. Borrowers with overdue personal loans often face harsh collection tactics. Many recovery agencies make false threats of property seizure. They call or visit homes, threatening to bring trucks for sofas, TVs, fridges, and gold.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To protect your rights, know how debt collection works. Collection agents are private workers hired by banks. They hold zero police or court powers. They are not court bailiffs. They hold no attachment warrants. They cannot enter your home without permission. Their threats to take goods are empty bluffs to create fear.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Foundational Legal Precept</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  No agency, bank manager, or agent can take movable goods for unsecured debt without a stamped court warrant.
                </p>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Personal loans and cards are unsecured under the Indian Contract Act, 1872. When taking a personal loan, you do not mortgage your goods. Unpaid debt is a civil matter. The lender can only file a court suit. They have no legal claim over items in your home.
              </p>
            </section>

            {/* Section 2: Statutory Framework & Section 60 CPC */}
            <section id="statutory-framework-cpc-section-60" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Section 60 CPC Property Protections</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Even if a bank wins a court lawsuit, Indian law protects families. The key shield is Section 60 of the Code of Civil Procedure, 1908 (CPC). This section governs property attachment during court execution.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Section 60 CPC is rooted in human dignity. Parliament ensures no court process leaves a family without basic goods. Section 60(1) provisos list items that are strictly safe from attachment:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Statutory Exemptions Under Section 60(1) Provisos (Code of Civil Procedure, 1908)</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Proviso (a): Wearing Apparel, Cooking Utensils &amp; Bedding</p>
                    <p className="text-slate-600 mt-1">
                      Clothes, cooking pots, beds, and bedding for the family. It protects Mangalsutras.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Proviso (b): Tools of Artisans &amp; Implements of Husbandry</p>
                    <p className="text-slate-600 mt-1">
                      Tools of trade, farm tools, cattle, and seed grain.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Proviso (c): Houses of Agriculturists &amp; Domestic Servants</p>
                    <p className="text-slate-600 mt-1">
                      Homes belonging to farmers, workers, or laborers.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Proviso (g) &amp; (k): Pensions, Gratuity &amp; Provident Funds</p>
                    <p className="text-slate-600 mt-1">
                      Pensions, family funds, and savings in PPF and EPF.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Indian law protects wedding ornaments and Strihidhan. Under Indian law, Strihidhan belongs solely to a married woman. Even if her husband defaults on a loan, no one can attach her gold. Demanding a woman&apos;s jewelry for family debt is illegal.
              </p>
            </section>

            {/* Section 3: SARFAESI Act vs Unsecured Debt Limits */}
            <section id="sarfaesi-act-unsecured-debt-limits" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. The SARFAESI Act vs. Unsecured Debt</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Recovery agents often use confusing terms to scare borrowers. They show letters quoting the SARFAESI Act, 2002. Agents claim that under SARFAESI rules, the bank can take your home and auction furniture without a court order.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This claim is false. The SARFAESI Act applies only to secured loans. It covers home loans or mortgage loans backed by property. Under Section 13(2) and 13(4) SARFAESI, lenders can only repossess assets pledged as security.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Personal loans and cards are unsecured. The bank holds no charge over household items. Using SARFAESI notices for unsecured debt is illegal. Agents making such threats break banking rules.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4">
                <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <ShieldX className="w-4 h-4 text-red-500" />
                  <span>Key Distinctions: Secured Repossession vs. Unsecured Recovery</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 mt-3">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Secured Loans (Home / Auto Loans)</p>
                    <p className="text-slate-600">The home or car is pledged security. Lenders can repossess that asset under SARFAESI. But they cannot touch general household items.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Unsecured Loans (Personal / Credit Cards)</p>
                    <p className="text-slate-600">Zero collateral is pledged. The lender has no claim over furniture or gold. Recovery is limited to civil suits.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Bank Balance Sheet Accounting & The NPV Recovery Formula */}
            <section id="bank-npa-accounting-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank NPA Accounting &amp; Seizure Economics</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Why do recovery agencies make false threats instead of going to court? The answer lies in bank balance sheets. Under RBI rules, unpaid loans turn into Non-Performing Assets (NPAs) after 90 days.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an account turns into an NPA, the bank cannot book interest as profit. It must lock away funds as provisions:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Substandard Assets (Up to 12 Months NPA):</strong> 15% provisioning on unsecured loans.</li>
                <li><strong>Doubtful Assets - Category 1 (12 to 24 Months NPA):</strong> 100% provisioning on unsecured loans.</li>
                <li><strong>Loss Assets / Written-Off Portfolio:</strong> 100% full balance sheet write-off against reserves.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                Filing a court suit for ₹5 Lakhs takes 3 to 5 years. It costs heavy legal fees. Household goods have zero auction value. They are protected under Section 60 CPC. Thus, court suits yield poor returns. Banks judge recovery via Net Present Value (NPV):
              </p>

              {/* Recovery Valuation Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here, C_t is the expected cash recovery. The letter r is the bank discount rate. Deductions cover legal fees and locked funds.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Court cases yield low returns. Thus, banks prefer a fast One-Time Settlement (OTS). A 40% to 65% waiver gives the bank quick cash. It frees locked funds. Threats of trucks are cheap scare tactics before settlement talks begin.
              </p>
            </section>

            {/* Section 5: Dedicated 16:9 Infographic Banner */}
            <section id="infographic-asset-seizure-rules" className="my-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/can-recovery-agents-take-household-furniture-or-gold.jpg"
                  alt="Can Recovery Agents Seize Household Furniture or Gold Infographic: Legal Realities of Debt Collection & Property Rights in India"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 text-slate-300 text-xs flex items-center justify-between">
                  <span className="font-semibold text-blue-400">Fig 1: Statutory Framework — Recovery Agent Limitations vs. Civil Court Protections in India</span>
                  <span className="text-slate-400 hidden sm:inline">Source: SettleLoans Legal &amp; Regulatory Analysis</span>
                </div>
              </div>
            </section>

            {/* Section 6: Criminal Penalties for Illegal Recovery Agent Actions */}
            <section id="criminal-countermeasures-illegal-threats" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Criminal Countermeasures &amp; Penal Remedies</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Entering a home without consent or threatening to take goods is a crime. Under the Bharatiya Nyaya Sanhita (BNS) and IPC, such acts trigger criminal charges:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 329 BNS (Section 441 IPC: Trespass)</h3>
                  <p className="text-xs text-slate-600">Entering without consent to threaten or insult is criminal trespass. It carries jail time.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 308 BNS (Section 383 IPC: Extortion)</h4>
                  <p className="text-xs text-slate-600">Using fear of public shame or loss of goods to force payment is extortion.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 351 BNS (Section 503 IPC: Intimidation)</h4>
                  <p className="text-xs text-slate-600">Threats to your person, name, or home to force payment constitute intimidation.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">RBI Master Directions on Outsourcing</h4>
                  <p className="text-xs text-slate-600">The RBI holds banks liable for agent actions. The Ombudsman can order compensation up to ₹20 Lakhs.</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In <em>ICICI Bank Ltd. v. Prakash Kaur &amp; Ors. (2007) 2 SCC 711</em>, the Supreme Court banned musclemen for debt collection. The court ordered banks to follow civil steps.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When our legal team steps in, we save call records and video clips. We send a Cease-and-Desist notice to bank leaders and nodal officers. This halts home visits at once. It starts peaceful settlement talks.
              </p>
            </section>

            {/* Section 7: Civil Court Execution Realities */}
            <section id="civil-court-execution-reality" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Civil Court Execution Realities for Assets</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                How does a real court attachment work in India? A bank cannot get a property attachment order overnight. The process under the Code of Civil Procedure, 1908 involves 5 slow stages:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <Scale className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The 5-Stage Judicial Pipeline for Debt Recovery</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 1: Filing of Civil Suit / Order 37 Summary Suit</p>
                    <p className="text-slate-600 mt-1">The bank files a case in court. Summons are sent to the borrower. You can file a reply and defend yourself.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 2: Adjudication &amp; Trial</p>
                    <p className="text-slate-600 mt-1">Both sides show evidence. They argue disputed fees over 2 to 4 years.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 3: Passing of Money Decree</p>
                    <p className="text-slate-600 mt-1">If the court rules for the bank, it passes a money decree.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 4: Execution Petition Under Order XXI CPC</p>
                    <p className="text-slate-600 mt-1">The bank files an execution plea under Order 21 CPC to find non-exempt assets.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 5: Official Execution by Court Bailiff</p>
                    <p className="text-slate-600 mt-1">Any attachment is done only by a Court Bailiff with a court warrant. They must follow Section 60 CPC exemptions.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This shows agent threats are empty bluffs. Banks rarely file court execution cases for small personal loans. A negotiated settlement is best for both sides.
              </p>
            </section>

            {/* Section 8: Direct OTS Settlement Protocols */}
            <section id="settlement-negotiation-ndc-cibil" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. OTS Settlement &amp; NDC for Unsecured Debt</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Never make cash or UPI payments to agents. Agents may say, &quot;Pay ₹30,000 today and we will not bring the truck.&quot; But cash is often lost. The bank marks it as penal interest. Harassment resumes next month.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To settle personal loans or credit cards safely, follow three clear rules:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory Three-Pillar Settlement Verification Protocol</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Official Sanction Letter</p>
                    <p className="text-slate-600">Get an OTS letter on bank letterhead. It must show the waiver sum.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Direct Bank Remittance</p>
                    <p className="text-slate-600">Pay into your loan account via NEFT or RTGS.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Stamped NDC &amp; CIBIL Update</p>
                    <p className="text-slate-600">Get a stamped No Dues Certificate. Check credit bureau updates.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Credit bureaus update your file to &apos;Settled&apos;. This ends legal risk. It stops all agent visits for good.
              </p>
            </section>

            {/* Section 9: Comparative Legal Matrix */}
            <section id="asset-protection-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Asset Seizure &amp; Property Protection Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The comparative matrix below details legal limits, authority, and borrower protections across recovery channels in India:
              </p>
              
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Recovery Channel</th>
                      <th>Legal Authority</th>
                      <th>Power to Seize Household Items</th>
                      <th>Power to Seize Gold / Jewelry</th>
                      <th>Applicable Legal Remedies</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Third-Party Recovery Agents</td>
                      <td>Private Agency Contract (Zero Judicial Authority)</td>
                      <td><strong>Zero</strong>. Seizure is illegal and criminal trespass.</td>
                      <td><strong>Zero</strong>. Taking gold is extortion under Section 308 BNS.</td>
                      <td>Section 329 BNS complaint. RBI Ombudsman. Cease-and-Desist notice.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Execution (Order 21 CPC)</td>
                      <td>Judicial Warrant executed by Official Court Bailiff</td>
                      <td><strong>Strictly Limited</strong>. Section 60 CPC protects beds, clothes, and basic furniture.</td>
                      <td><strong>Zero</strong> for Strihidhan / Mangalsutra. Bullion only if decreed.</td>
                      <td>Order XXI Rule 58 CPC plea. Section 60 CPC exemptions.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SARFAESI Act Proceedings</td>
                      <td>Authorized Officer under SARFAESI Act, 2002</td>
                      <td><strong>Zero</strong> for unsecured loans. Only pledged collateral for secured debt.</td>
                      <td><strong>Zero</strong> unless pledged under a formal gold loan.</td>
                      <td>Section 17 plea before DRT.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Lok Adalat Settlement</td>
                      <td>Statutory Conciliation under Legal Services Authorities Act</td>
                      <td><strong>None</strong>. Voluntary mutual compromise forum.</td>
                      <td><strong>None</strong>. Consensual settlement with 40%–65% waiver.</td>
                      <td>Final consent award with no court cases.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 138 NI Act (Cheque Bounce)</td>
                      <td>Metropolitan / Judicial Magistrate Court</td>
                      <td><strong>Zero</strong>. Quasi-criminal case with no asset seizure.</td>
                      <td><strong>Zero</strong>. Bailable process focusing on loan resolution.</td>
                      <td>Bail plea. Legal defense. Compounding via OTS.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense Framework */}
            <section id="settleloans-legal-defense-framework" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Asset Seizure Defense</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Living in fear of debt agents is stressful. At SettleLoans, our team defends borrowers across India. We enforce rights under Section 60 CPC and RBI rules. We send Cease-and-Desist notices to stop harassment. We then negotiate 40% to 65% OTS waivers and No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Can Agents Take Household Goods or Gold?</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear answers on recovery agent limits, property attachment rules, Section 60 CPC exemptions, and borrower defense.
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
                  <span className="font-semibold text-slate-800">Code of Civil Procedure, 1908 (Section 60 Property Exemptions)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction on Outsourcing &amp; Conduct</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (ICICI Bank v. Prakash Kaur)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Grievance Portal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Indian Penal Code (Sections 441 Trespass &amp; 383 Extortion)</span>
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
                  href="/bank-fir-for-loan-default-reality-check"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank FIR for Loan Default Reality Check
                </Link>
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply Guide
                </Link>
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Defense
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Arbitration Notice Reply
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
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
                Expert in banking law, asset protection under Section 60 CPC, criminal defense against debt harassment, and RBI settlement frameworks.
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
                <span>Immediate Legal Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Threatened With Asset Confiscation?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let recovery agents intimidate your family with illegal seizure threats. Our advocates send legal notices, stop doorstep visits, and secure 40% to 65% OTS waivers.
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
                Institutional Protections
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Section 60 CPC Statutory Immunity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank-Stamped Settlement Letters</span>
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
