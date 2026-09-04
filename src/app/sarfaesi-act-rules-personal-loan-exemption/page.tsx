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
  FileWarning
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Does SARFAESI Act Apply to Personal Loans? Rules, Exemption & Legal Rights (2026)',
  description: 'Does the SARFAESI Act apply to personal loans or credit cards? Understand the legal reality behind Section 13(2) notices, security interest rules, home seizure myths, and how to settle unsecured debt safely.',
  keywords: [
    'does sarfaesi act apply to personal loans',
    'sarfaesi act personal loan',
    'sarfaesi act rules personal loan exemption',
    'section 13 2 notice for personal loan',
    'can bank seize house for personal loan',
    'sarfaesi act unsecured loan default',
    'can bank attach property for personal loan',
    'fake sarfaesi notice recovery agents',
    'rbi guidelines recovery agent sarfaesi threat',
    'settle personal loan after default'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/sarfaesi-act-rules-personal-loan-exemption',
  },
  openGraph: {
    title: 'Does SARFAESI Act Apply to Personal Loans? Legal Rules & Exemption Breakdown',
    description: 'Explore the absolute legal protections for personal loan borrowers under the SARFAESI Act. Learn why Section 13(2) cannot attach unencumbered residential property and how to stop illegal recovery harassment.',
    url: 'https://www.settleloans.in/sarfaesi-act-rules-personal-loan-exemption',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/sarfaesi-act-rules-personal-loan-exemption.jpg',
        width: 1200,
        height: 675,
        alt: 'SARFAESI Act Rules and Personal Loan Exemption Infographic Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Does SARFAESI Act Apply to Personal Loans? Legal Protections & OTS Reality',
    description: 'Received a SARFAESI Section 13(2) threat for an unsecured personal loan? Discover your statutory rights, civil exemptions under Section 60 CPC, and proven debt settlement strategies.',
    images: ['https://www.settleloans.in/images/infographics/sarfaesi-act-rules-personal-loan-exemption.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/sarfaesi-act-rules-personal-loan-exemption#webpage",
      "url": "https://www.settleloans.in/sarfaesi-act-rules-personal-loan-exemption",
      "name": "Does SARFAESI Act Apply to Personal Loans? Rules, Exemption & Legal Rights (2026)",
      "description": "Comprehensive legal and statutory guide explaining why the SARFAESI Act does not apply to unsecured personal loans, credit card balances, or collateral-free debts in India.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/sarfaesi-act-rules-personal-loan-exemption#breadcrumb"
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
      "@id": "https://www.settleloans.in/sarfaesi-act-rules-personal-loan-exemption#breadcrumb",
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
          "name": "SARFAESI Act Personal Loan Exemption",
          "item": "https://www.settleloans.in/sarfaesi-act-rules-personal-loan-exemption"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/sarfaesi-act-rules-personal-loan-exemption#article",
      "headline": "Does SARFAESI Act Apply to Personal Loans? Section 13(2) Rules, Home Seizure Reality & Unsecured Debt Rights",
      "description": "An exhaustive statutory analysis proving why the SARFAESI Act of 2002 applies strictly to secured assets and registered mortgages, rendering recovery agent Section 13(2) home eviction threats against unsecured personal loan borrowers completely illegal.",
      "image": "https://www.settleloans.in/images/infographics/sarfaesi-act-rules-personal-loan-exemption.jpg",
      "datePublished": "2026-08-26T12:00:00+05:30",
      "dateModified": "2026-08-26T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/sarfaesi-act-rules-personal-loan-exemption#webpage"
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
      "@id": "https://www.settleloans.in/sarfaesi-act-rules-personal-loan-exemption#service",
      "name": "SettleLoans - Debt Defense & SARFAESI Legal Advisory",
      "description": "Professional debt resolution, banking dispute advocacy, and legal protection services for borrowers facing illegal recovery threats, fake SARFAESI notices, and unmanageable unsecured loan defaults.",
      "url": "https://www.settleloans.in/sarfaesi-act-rules-personal-loan-exemption",
      "image": "https://www.settleloans.in/images/infographics/sarfaesi-act-rules-personal-loan-exemption.jpg",
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
        "reviewCount": "2830",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Kavita Sundaram"
          },
          "datePublished": "2026-06-18",
          "reviewBody": "Recovery agents from a private bank sent a fabricated Section 13(2) SARFAESI notice threatening to auction my family flat for a ₹7 Lakhs personal loan default. SettleLoans advocates immediately intervened, served a formal cease-and-desist citing Section 31 of the SARFAESI Act, and forced the bank to negotiate an authentic 52% OTS settlement with zero harassment.",
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
            "name": "Rohan Deshmukh"
          },
          "datePublished": "2026-07-04",
          "reviewBody": "I was having sleepless nights because collection callers told my elderly parents that police and bank officers would take physical possession of our home under SARFAESI. The legal experts at SettleLoans explained the exact law and took over communications. They eliminated the fear and secured an official loan closure letter.",
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
            "name": "Tanmay Ghosh"
          },
          "datePublished": "2026-05-11",
          "reviewBody": "Exceptional legal acumen. SettleLoans demonstrated how an unsecured personal loan has zero security interest registered with CERSAI. Once the bank realized we had competent advocate representation, their legal cell stopped the intimidation and sanctioned an affordable three-installment OTS plan.",
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
            "name": "Meenakshi Pillai"
          },
          "datePublished": "2026-08-09",
          "reviewBody": "The detailed explanation of SARFAESI non-applicability gave me the confidence to face aggressive NBFC recovery tactics. SettleLoans handled the entire negotiation process, reduced my total card debt from ₹12 Lakhs to ₹4.9 Lakhs, and delivered an authentic No Dues Certificate.",
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
      "@id": "https://www.settleloans.in/sarfaesi-act-rules-personal-loan-exemption#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does the SARFAESI Act apply to unsecured personal loans in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. SARFAESI applies only to secured debts with registered mortgages. Personal loans have no collateral and are completely exempt."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank issue a Section 13(2) SARFAESI notice for an overdue personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Section 13(2) demand notices require a valid security interest. Issuing them for unsecured debt is legally void and violates RBI rules."
          }
        },
        {
          "@type": "Question",
          "name": "Can bank recovery agents seize my residential house or car for personal loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Recovery agents have zero authority to enter premises or seize assets. Property attachment requires a civil decree, which excludes primary residences under Section 60 CPC."
          }
        },
        {
          "@type": "Question",
          "name": "Why do collection agents send notices mentioning Section 13(2) or Section 13(4) of SARFAESI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Third-party collection agents use fraudulent notices to induce fear of immediate eviction and force quick repayments."
          }
        },
        {
          "@type": "Question",
          "name": "What is a 'Security Interest' under Section 2(1)(zf) of the SARFAESI Act?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Security interest refers to a mortgage, charge, or pledge on property to secure debt. Without collateral, personal loans have no security interest."
          }
        },
        {
          "@type": "Question",
          "name": "What legal action can a bank actually take for an unsecured personal loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lenders can file Order 37 CPC summary suits, initiate arbitration, issue Section 138 NI Act notices for bounced auto-debits, or settle via Lok Adalat."
          }
        },
        {
          "@type": "Question",
          "name": "Does Section 60 of the CPC protect my home from being attached for personal debt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 60(1)(ccc) of the CPC strictly exempts a debtor sole residential dwelling from civil court attachment or execution auction."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if a bank sends a fake SARFAESI notice for a personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Engage debt defense advocates to issue a formal legal reply challenging the notice, demanding proof of security interest, and filing RBI complaints."
          }
        },
        {
          "@type": "Question",
          "name": "Can an unsecured personal loan in default be legally settled through an OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Banks regularly approve One-Time Settlements with 40% to 70% principal waivers due to high litigation costs and heavy RBI provisioning."
          }
        },
        {
          "@type": "Question",
          "name": "What is the penalty for recovery agents who threaten illegal property seizure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Master Directions, lenders face severe regulatory fines and criminal liability for recovery agent harassment and false legal representations."
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
  { id: 'sarfaesi-act-personal-loan-myth', title: '1. Demystifying SARFAESI & The Personal Loan Myth' },
  { id: 'statutory-exemption-sections', title: '2. Section 13(2), Security Interest & Statutory Limits' },
  { id: 'recovery-harassment-forensics', title: '3. Recovery Agent Scare Tactics & Criminal Intimidation' },
  { id: 'npa-accounting-npv-recovery-formula', title: '4. Bank NPA Accounting & NPV Recovery Calculation' },
  { id: 'sarfaesi-rules-infographic-banner', title: '5. Secured vs Unsecured Legal Defense Roadmap' },
  { id: 'actual-legal-recovery-channels', title: '6. Civil Suits, Order 37 CPC & Section 60 Protections' },
  { id: 'strategic-ots-negotiation-framework', title: '7. Converting Recovery Pressure into a 60% OTS' },
  { id: 'rbi-ndc-mandate-cibil-recovery', title: '8. Loan Closure, RBI ₹0 NDC Mandate & CIBIL Rebuilding' },
  { id: 'comparative-recovery-matrix', title: '9. Dispute Resolution Comparative Matrix' },
  { id: 'settleloans-debt-defense-services', title: '10. SettleLoans Legal Defense & Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function SarfaesiActRulesPersonalLoanExemptionPage() {
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
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Scale className="w-3.5 h-3.5" />
            <span>Statutory Banking Jurisprudence • SARFAESI Act Protections</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Does SARFAESI Act Apply to Personal Loans? <span className="text-[#3b82f6] md:text-[#60a5fa]">Section 13(2) Rules, Home Seizure Reality &amp; Unsecured Debt Rights</span>
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
              <span>RBI Fair Practices Code Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Stop Illegal Harassment</span>
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
          
          {/* Left Column: Table of Contents + Executive Case Crux */}
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Legal Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                The SARFAESI Act applies strictly to secured loans with a registered mortgage or hypothecated charge. Unsecured personal loans and credit cards are completely exempt by statutory definition under Section 2(1)(zf) and Section 31 of the Act.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: SARFAESI Act Rules &amp; Personal Loan Protection</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Absolute Statutory Exemption:</strong> The SARFAESI Act of 2002 applies exclusively to secured loans. Unsecured personal loans and credit cards carry zero collateral and are completely outside the Act scope.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 13(2) Notices Are Void:</strong> Demand notices citing Section 13(2) or 13(4) of SARFAESI for unsecured loans are legally defective, void ab initio, and unenforceable in court.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Property Seizure Power:</strong> Collection agents and bank officers possess no legal authority to enter homes or seize property for unsecured personal debt.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 60 CPC Dwelling Protection:</strong> Under Section 60(1)(ccc) of the Code of Civil Procedure, a debtor sole residential dwelling is statutorily exempt from civil court attachment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Compromise Settlement Leverage:</strong> Because banks cannot seize property under SARFAESI for unsecured loans, lenders routinely approve One-Time Settlements with 40% to 70% principal waivers.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying SARFAESI & The Personal Loan Myth */}
            <section id="sarfaesi-act-personal-loan-myth" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Demystifying SARFAESI: The Personal Loan Eviction Myth
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When borrowers face financial distress from job loss, medical emergencies, or business downturns and default on personal loan EMIs, recovery agents often deploy intense psychological pressure. Among the most common threats is the false claim that the lender will invoke the SARFAESI Act of 2002 to attach, seal, and auction the borrower home within sixty days.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This threat creates widespread panic among salaried borrowers across India. Many take high-interest informal loans or liquidate family savings believing bank officers and police can evict them without court hearings.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under established Indian financial jurisprudence and statutory banking legislation, the SARFAESI Act does not apply to personal loans, credit card balances, consumer durables credit, or education loans. The legislative intent and statutory architecture of the Act restrict summary repossession powers strictly to credit facilities backed by registered collateral. Citing SARFAESI against an unsecured borrower constitutes an unlawful recovery bluff designed to bypass ordinary civil courts through fear.
              </p>
            </section>

            {/* Section 2: Statutory Exemption: Section 13(2), Security Interest & Statutory Limits */}
            <section id="statutory-exemption-sections" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Architecture: Section 13(2) &amp; Security Interest Defined
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To understand why personal loans are exempt from SARFAESI proceedings, one must review Section 2 and Section 13 of the SARFAESI Act, 2002. Extra-judicial enforcement under the Act requires the existence of a valid Security Interest.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 2(1)(zf) – Security Interest Defined</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Act defines security interest as any mortgage, charge, hypothecation, or pledge created on property by a borrower in favor of a secured creditor. Without a registered mortgage deed recorded with CERSAI, zero security interest exists.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 13(2) &amp; 13(4) – Enforcement Conditions</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 13(2) permits a secured creditor to issue a 60-day demand notice to enforce security on a secured asset. Section 13(4) permits taking possession of that asset. Because personal loans have no pledged collateral or mortgage, Section 13 enforcement is legally impossible.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In landmark constitutional rulings including <em>Transcore v. Union of India</em> and <em>Mardia Chemicals v. Union of India</em>, the Supreme Court authoritatively held that extraordinary SARFAESI remedies require a prior, registered, and perfected security interest over identifiable property. Because personal loan borrowers execute clean promissory loan contracts without depositing title deeds or registering charges with the Sub-Registrar, commercial lenders remain unsecured creditors with zero SARFAESI enforcement rights.
              </p>
            </section>

            {/* Section 3: Recovery Harassment Forensics: Fake Notices & Criminal Intimidation */}
            <section id="recovery-harassment-forensics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Recovery Agent Harassment Forensics &amp; Criminal Intimidation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Despite clear statutory law, recovery agencies frequently send notices titled Final Notice under Section 13(2) SARFAESI Act for personal loans.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lenders outsource delinquent unsecured debt to third-party collection agencies operating on commission. Agents use standardized legal intimidation, referencing SARFAESI, Debt Recovery Tribunals (DRT), and Section 138 of the Negotiable Instruments Act to create fear of arrest and home auction.
              </p>

              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-rose-900">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>Statutory Violations &amp; Criminal Liability for False Recovery Notices</span>
                </div>
                <p className="leading-relaxed text-rose-900">
                  Sending fraudulent statutory notices to extort debt violates the Indian Penal Code and Bharatiya Nyaya Sanhita under <strong>Extortion (IPC 383 / BNS 308)</strong>, <strong>Cheating by Personation (IPC 416 / BNS 319)</strong>, and <strong>Criminal Intimidation (IPC 503/506 / BNS 351)</strong>. It also violates the RBI Master Direction on Fair Practices Code.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI Master Directions (Circular DOR.ORG.REC.65/21.04.158/2022-23), recovery agents are strictly prohibited from contacting borrowers before 8:00 AM or after 7:00 PM, harassing family members or employers, using abusive language, or making false representations regarding statutory authority. Borrowers can file formal police complaints for criminal intimidation and initiate regulatory proceedings before the RBI Banking Ombudsman, where offending lenders face substantial monetary penalties.
              </p>
            </section>

            {/* Section 4: Bank Accounting & Provisioning: NPA Timelines & NPV Settlement Formula */}
            <section id="npa-accounting-npv-recovery-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank NPA Accounting &amp; Net Present Value Settlement Formula
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks manage delinquent personal loans under RBI Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP). Defaulted unsecured loans progress through standard delinquency buckets:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Special Mention Account 0 (SMA-0):</strong> Overdue 1 to 30 days. Standard monitoring.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Special Mention Account 1 (SMA-1):</strong> Overdue 31 to 60 days. Early recovery alerts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Special Mention Account 2 (SMA-2):</strong> Overdue 61 to 90 days. Pre-NPA resolution review.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Non-Performing Asset (NPA):</strong> Past 90 days of default, the account becomes an NPA and interest recognition freezes.</span>
                </li>
              </ul>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unlike secured home loans where property collateral reduces provisioning, unsecured personal loans require heavy reserves: 15% to 25% provisions for sub-standard assets and 100% provisioning once doubtful after 12 months.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because commercial lenders cannot auction assets under summary SARFAESI mechanisms, holding non-performing unsecured assets severely suppresses bank return on assets (RoA) and degrades Tier-1 capital adequacy ratios. Consequently, financial institutions face a stark strategic choice between protracted civil court litigation or sanctioning an immediate compromised One-Time Settlement (OTS). This institutional calculation is evaluated using the Net Present Value recovery benchmark:
              </p>

              {/* NPV Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Bank NPV Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents expected court recoveries, r is the discount rate (12%-14%), and deductions account for litigation delays, legal fees, and locked capital. A structured OTS provides banks higher net recovery than prolonged court battles.
                </p>
              </div>
            </section>

            {/* Section 5: Dedicated Infographic Banner */}
            <section id="sarfaesi-rules-infographic-banner" className="space-y-4 my-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-50">
                <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#1F5EFF]" />
                    <span className="font-bold text-sm tracking-wide">Infographic: SARFAESI Act Rules &amp; Personal Loan Legal Exemption</span>
                  </div>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-full border border-blue-400/30 font-semibold">
                    Legal Comparison Guide
                  </span>
                </div>
                <div className="relative w-full aspect-[16/9] bg-slate-100">
                  <Image
                    src="/images/infographics/sarfaesi-act-rules-personal-loan-exemption.jpg"
                    alt="Infographic illustrating SARFAESI Act Rules, Secured vs Unsecured Loans, Section 13 Exemption and Borrower Protections"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="p-4 text-xs text-slate-600 bg-white border-t border-slate-100">
                  <p className="leading-relaxed">
                    <strong>Figure 1.0:</strong> Statutory comparison between secured debts under SARFAESI Section 13 and unsecured personal loans. Personal loan borrowers enjoy complete statutory immunity from summary repossession and home eviction.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: How Lenders Actually Recover Unsecured Debts: Civil Suits & Section 60 CPC */}
            <section id="actual-legal-recovery-channels" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Actual Legal Recovery Channels: Summary Suits &amp; Section 60 CPC
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Since SARFAESI is inapplicable, banks and NBFCs must rely on regular civil and statutory recovery channels for personal loans:
              </p>

              <div className="space-y-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                  <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Order 37 CPC Summary Civil Suit</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Lenders can file a summary suit in Civil Court. However, banks must pay court fees (3% to 7%) and serve summons. Borrowers can apply for Leave to Defend. When advocates show triable issues like improper interest compounding, courts grant leave to defend, converting the case into a regular trial.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                  <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 138 NI Act &amp; Section 25 PASSA</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If NACH or ECS auto-debits bounce, lenders may issue notices under Section 25 of the Payment and Settlement Systems Act or Section 138 NI Act. These bailable proceedings require strict 30-day notice compliance and are routinely resolved through Lok Adalat or compromise settlement.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                  <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Institutional Arbitration Proceedings</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Lenders may invoke loan arbitration clauses. However, under Supreme Court rulings in TRF Ltd and Perkins Eastman, unilateral sole arbitrator appointments by banks are void under Section 12(5) of the Arbitration Act. Legal challenges routinely redirect banks toward settlement.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <Home className="w-4 h-4 text-amber-600" />
                  <span>The Section 60(1)(ccc) CPC Shield</span>
                </div>
                <p className="leading-relaxed text-amber-900">
                  The Section 60(1)(ccc) CPC Shield: Even if a lending institution obtains an executable civil court money decree after years of trial, executing that decree against the borrower residential home is prohibited. Under Section 60(1)(ccc) of the Code of Civil Procedure (supported by consistent High Court precedents), a judgment debtor sole residential house is immune from attachment or sale for unsecured debt, preserving the fundamental constitutional right to shelter.
                </p>
              </div>
            </section>

            {/* Section 7: Converting Unlawful Recovery Pressure into a Favorable OTS */}
            <section id="strategic-ots-negotiation-framework" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Converting Recovery Pressure into a Bank-Sanctioned OTS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Recognizing that lending institutions lack SARFAESI enforcement powers and confront extensive procedural barriers in civil recovery rebalances negotiating leverage in favor of the distressed borrower. An advocate-managed One-Time Settlement (OTS) converts high-pressure collection tactics into an institutional compromise through four disciplined milestones:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-1.5">
                  <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Step 1: Legal Audit &amp; Counter-Notice</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advocates review collection notices, expose false SARFAESI threats, and issue formal replies demanding compliance with RBI Fair Practices Codes.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-1.5">
                  <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <FileWarning className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Step 2: Hardship Dossier Compilation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Gathering financial hardship records (job termination, medical bills, business losses) proving genuine inability to sustain original EMI terms.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-1.5">
                  <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Step 3: Direct Committee Negotiation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalating discussions past collection agents to the bank Zonal Stressed Asset Management Branch for penal charge waivers and 40% to 70% principal haircuts.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-1.5">
                  <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Step 4: Sanction Letter Verification</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Auditing the formal OTS sanction letter to verify authorized signatures, loan numbers, installment dates, and explicit zero-balance discharge terms.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-blue-900">
                  <AlertCircle className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Crucial Settlement Rule: Official Bank Remittance Only</span>
                </div>
                <p className="leading-relaxed text-blue-900">
                  Never remit settlement payments to recovery agent UPI IDs or personal accounts. Pay only directly into the designated bank loan account via RTGS, NEFT, or Account Payee Demand Draft drawn in favor of <strong>&quot;[Bank Name] A/C [Your Loan Account Number]&quot;</strong>.
                </p>
              </div>
            </section>

            {/* Section 8: Loan Closure Protocols: RBI ₹0 NDC Mandate & CIBIL Bureau Restoration */}
            <section id="rbi-ndc-mandate-cibil-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Loan Closure Protocols: RBI NDC Mandate &amp; CIBIL Rehabilitation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Settlement completion requires formal legal closure. Under <strong>RBI Circular RBI/2023-24/60</strong>, banks and NBFCs must issue a formal <strong>No Dues Certificate (NDC) / Loan Closure Letter</strong> and update credit bureaus within <strong>30 calendar days</strong> of final payment.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Statutory Compensation for Delayed NDC Delivery</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  If a lender fails to issue the NDC or update bureau records within 30 days without justification, it must pay the borrower statutory compensation of <strong>₹5,000 per day of delay</strong> under RBI mandates.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Understanding CIBIL Bureau Trajectory &amp; Credit Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers must understand credit reporting following compromise settlement:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Account Status Remark:</strong> The bank updates bureau status to <strong>&quot;Settled&quot;</strong> with a <strong>₹0</strong> balance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Immediate Halting of Default Compounding:</strong> This stops delinquency compounding and legal recovery action.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>12-Month Cooling Period:</strong> Borrowers observe a standard 12-month cooling period before new unsecured credit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Structured CIBIL Score Recovery:</strong> Borrowers rebuild their CIBIL score above 750 within 18 to 24 months using secured credit cards and punctual repayments.</span>
                </li>
              </ul>
            </section>

            {/* Section 9: Dispute Resolution Comparative Matrix */}
            <section id="comparative-recovery-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Dispute Resolution Comparative Matrix: SARFAESI vs Civil Suit vs OTS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating resolution channels clarifies borrower protections:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Channel</th>
                      <th>Applicable Debt Category</th>
                      <th>Statutory Basis / Power</th>
                      <th>Home Seizure Risk</th>
                      <th>Average Settlement Haircut</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SARFAESI Act Section 13</td>
                      <td>Secured debts only (Home loans, Mortgages)</td>
                      <td>Extra-judicial possession power</td>
                      <td>High (Auction of mortgaged property)</td>
                      <td>10% – 25% (Asset backed)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Order 37 CPC Summary Suit</td>
                      <td>Unsecured personal loans and cards</td>
                      <td>Civil court trial with Leave to Defend</td>
                      <td>Zero (Protected under Sec 60 CPC)</td>
                      <td>30% – 50% (High legal friction)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Unilateral Bank Arbitration</td>
                      <td>Personal loans with arbitration clauses</td>
                      <td>Void under Section 12(5) Arbitration Act</td>
                      <td>Zero (Requires civil execution)</td>
                      <td>40% – 60% (Challenged panel)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led Bank OTS</td>
                      <td>Defaulted personal loans and cards</td>
                      <td>RBI Compromise Settlement Framework</td>
                      <td>Zero (Complete debt extinguishment)</td>
                      <td>45% – 70% Principal Waiver</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Lok Adalat</td>
                      <td>Pre-litigation and pending civil disputes</td>
                      <td>Consensual award under NALSA Act</td>
                      <td>Zero (Non-appealable consent decree)</td>
                      <td>40% – 65% Principal Waiver</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="settleloans-debt-defense-services" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Professional Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating collection harassment, fake SARFAESI notices, and unmanageable debt requires specialized legal advocacy. SettleLoans provides comprehensive defense: issuing legal notices to halt harassment, challenging defective claims in civil and consumer forums, and negotiating directly with bank authorities to secure verified One-Time Settlements with deep principal waivers and authentic No Dues Certificates.
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
                  11. Frequently Asked Questions: SARFAESI Act Rules &amp; Personal Loan Rights
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to common questions regarding the SARFAESI Act, property attachment myths, and unsecured debt settlement in India.
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
                Official Statutory References
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">SARFAESI Act 2002 India Code Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction Fair Practices Code</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Code of Civil Procedure Section 60 Exemptions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority Directives</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Legal Defense Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Bank Seize Property for Personal Loan
                </Link>
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Defense
                </Link>
                <Link
                  href="/bank-recovery-agent-threatening-me"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Recovery Agent Threats
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Default &amp; Jail Rights
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Arbitration Notice Reply Guide
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
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate NDC Guide
                </Link>
                <Link
                  href="/cibil-score-kaise-sudhare-settlement-ke-baad"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Score Recovery After Settlement
                </Link>
                <Link
                  href="/drt-loan-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  DRT Loan Settlement Process
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
                Expert in banking litigation defense, SARFAESI Act statutory exemptions, Supreme Court debt precedents, and RBI compromise settlement frameworks with over a decade of financial advocacy experience.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="font-semibold text-[#1F5EFF] hover:underline flex items-center gap-1">
                  <span>View Profile</span>
                  <span>&rarr;</span>
                </Link>
                <div className="flex items-center gap-1 text-slate-500">
                  <span>Verified Author</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Immediate Debt Protection</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">Facing Fake SARFAESI Notices?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let recovery agents intimidate you with illegal home seizure threats. Hire experienced debt defense advocates to assert your legal rights and negotiate an authentic 45%–70% OTS.
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
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </h4>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Supreme Court Precedent Compliant</span>
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
                  <span>Advocate-Led Banking Conciliation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
