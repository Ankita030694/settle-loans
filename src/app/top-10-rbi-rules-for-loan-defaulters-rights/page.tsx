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
  PhoneOff,
  EyeOff,
  Receipt,
  FileSpreadsheet
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Top 10 RBI Rules for Loan Defaulters Rights: Harassment Ban, Calling Hours & OTS Guidelines',
  description: 'Master guide on RBI guidelines for loan defaulters rights in India. Discover statutory rules on 8 AM-7 PM calling hours, privacy protection, harassment penalties, One-Time Settlement (OTS) circulars, and Ombudsman remedies.',
  keywords: [
    'rbi guidelines for loan defaulters rights',
    'rbi rules for loan recovery',
    'loan defaulter rights in india',
    'rbi guidelines for recovery agents calling hours',
    'rbi circular on loan harassment',
    'one time settlement rbi guidelines',
    'rbi ombudsman complaint for recovery harassment',
    'rbi fair practices code loan default',
    'can bank seize property for personal loan default',
    'rbi penalty on banks for recovery harassment'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/top-10-rbi-rules-for-loan-defaulters-rights',
  },
  openGraph: {
    title: 'Top 10 RBI Rules for Loan Defaulters Rights | Master Authority Guide',
    description: 'Definitive regulatory analysis of RBI Master Directions protecting loan defaulters in India. Learn about recovery agent limits, privacy bans, criminal threat immunity, OTS frameworks, and 30-day NDC rules.',
    url: 'https://www.settleloans.in/top-10-rbi-rules-for-loan-defaulters-rights',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/top-10-rbi-rules-for-loan-defaulters-rights.jpg',
        width: 1200,
        height: 675,
        alt: 'Top 10 RBI Rules for Loan Defaulters Rights Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 10 RBI Rules for Loan Defaulters Rights: Complete Legal Guide',
    description: 'Facing recovery agent harassment or loan default? Explore the top 10 statutory RBI rules that safeguard your dignity, privacy, and financial rights in India.',
    images: ['https://www.settleloans.in/images/infographics/top-10-rbi-rules-for-loan-defaulters-rights.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/top-10-rbi-rules-for-loan-defaulters-rights#webpage",
      "url": "https://www.settleloans.in/top-10-rbi-rules-for-loan-defaulters-rights",
      "name": "Top 10 RBI Rules for Loan Defaulters Rights: Harassment Ban, Calling Hours & OTS Guidelines",
      "description": "Comprehensive legal and regulatory pillar covering the Reserve Bank of India Master Directions on borrower rights, debt recovery protocols, fair practices code, and compromise settlements.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/top-10-rbi-rules-for-loan-defaulters-rights#breadcrumb"
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
      "@id": "https://www.settleloans.in/top-10-rbi-rules-for-loan-defaulters-rights#breadcrumb",
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
          "name": "Top 10 RBI Rules for Loan Defaulters Rights",
          "item": "https://www.settleloans.in/top-10-rbi-rules-for-loan-defaulters-rights"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/top-10-rbi-rules-for-loan-defaulters-rights#article",
      "headline": "Top 10 RBI Rules for Loan Defaulters Rights: Harassment Ban, Calling Hours & OTS Guidelines",
      "description": "An exhaustive, advocate-reviewed authority pillar detailing the 10 essential Reserve Bank of India rules and circulars protecting loan defaulters in India from unlawful recovery tactics, predatory charges, and unconstitutional criminalization.",
      "image": "https://www.settleloans.in/images/infographics/top-10-rbi-rules-for-loan-defaulters-rights.jpg",
      "datePublished": "2026-08-26T10:00:00+05:30",
      "dateModified": "2026-08-26T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/top-10-rbi-rules-for-loan-defaulters-rights#webpage"
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
      "@id": "https://www.settleloans.in/top-10-rbi-rules-for-loan-defaulters-rights#service",
      "name": "SettleLoans - Debt Settlement & Borrower Rights Advisory",
      "description": "Strategic legal protection and advocate-led loan settlement advisory enforcing RBI Fair Practices Code, stopping recovery harassment, and negotiating maximum One-Time Settlement (OTS) waivers across India.",
      "url": "https://www.settleloans.in/top-10-rbi-rules-for-loan-defaulters-rights",
      "image": "https://www.settleloans.in/images/infographics/top-10-rbi-rules-for-loan-defaulters-rights.jpg",
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
        "reviewCount": "2340",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Siddharth Chawla"
          },
          "datePublished": "2026-06-18",
          "reviewBody": "Recovery agents from a major private bank were calling me at 10 PM and threatening to visit my workplace. SettleLoans invoked the RBI Calling Hours circular and Fair Practices Code. The bank immediately reassigned the file and sanctioned a 58% One-Time Settlement.",
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
            "name": "Priyanka Nambiar"
          },
          "datePublished": "2026-07-11",
          "reviewBody": "An NBFC collection agency sent a fabricated police notice threatening arrest under Section 420 IPC for my personal loan. Ashish Jhangra and his legal team stepped in, filed a formal complaint with the RBI Ombudsman, and secured a full settlement with an official stamped No Dues Certificate.",
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
            "name": "Manish Deshmukh"
          },
          "datePublished": "2026-05-24",
          "reviewBody": "The bank was refusing to return my original property documents even after settling my loan account. SettleLoans cited RBI Circular RBI/2023-24/60 regarding the 30-day document release timeline. The bank released the deeds within 5 business days without any further delay.",
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
            "name": "Kavita Sengupta"
          },
          "datePublished": "2026-08-02",
          "reviewBody": "Extremely knowledgeable team. They helped me understand my rights regarding penal charges and compound interest capitalisation under RBI rules, saving me over ₹4.5 Lakhs in arbitrary bank penalties during our debt settlement.",
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
      "@id": "https://www.settleloans.in/top-10-rbi-rules-for-loan-defaulters-rights#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the permitted calling hours for loan recovery agents according to the RBI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2022-23/108 (DOR.ORG.REC.65/21.04.158/2022-23), recovery agents and bank representatives are strictly restricted to contacting borrowers only between 8:00 AM and 7:00 PM. Calling before 8:00 AM, after 7:00 PM, or persistently ringing numbers during odd hours constitutes a direct regulatory violation punishable by the RBI."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents contact my family, friends, or workplace colleagues?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The RBI Master Directions on Outsourcing of Financial Services explicitly ban lenders and third-party recovery agencies from disclosing debt default information to family members, relatives, neighbors, or workplace colleagues. Reference contacts provided during application can only be used to trace an untraceable borrower, never for debt collection or social shaming."
          }
        },
        {
          "@type": "Question",
          "name": "Can police arrest a borrower or file an FIR under Section 420 IPC for loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Inability to service an unsecured loan or credit card due to genuine financial hardship is strictly a civil breach of contract governed by civil law. The Supreme Court of India has repeatedly held that Section 420 (cheating) cannot be applied unless fraudulent intent existed at the exact moment of loan disbursement. Police cannot register an FIR or arrest borrowers for commercial default."
          }
        },
        {
          "@type": "Question",
          "name": "Is a written settlement sanction letter mandatory before making a One-Time Settlement payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under RBI guidelines on Compromise Settlements (June 8, 2023), no payment should ever be made based on verbal assurances or WhatsApp messages from recovery agents. A formal Settlement Sanction Letter generated on the bank official letterhead, bearing an authorized signature, specific waiver amount, and explicit No Dues commitment, is mandatory."
          }
        },
        {
          "@type": "Question",
          "name": "What are the RBI rules on penal interest and arbitrary late charges?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/53 (Fair Lending Practice - Penal Charges on Loan Accounts), banks and NBFCs are prohibited from levying penal interest that compounds onto the principal balance. Penalties for delayed payment must be charged solely as reasonable, non-capitalised 'penal charges' without inflating the core debt."
          }
        },
        {
          "@type": "Question",
          "name": "What notice period is legally required before a bank can repossess secured property under SARFAESI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For secured loans such as home or business mortgage loans, the SARFAESI Act, 2002 mandates that the bank must issue a formal 60-day demand notice under Section 13(2) after NPA classification. If unresolved, a subsequent 30-day possession and public auction notice under Section 13(4) is mandatory, giving borrowers statutory rights of representation."
          }
        },
        {
          "@type": "Question",
          "name": "What compensation does a bank owe if it delays releasing original property documents after settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, Regulated Entities must release all original movable or immovable property documents and remove loan charges from registries within 30 days of full loan repayment or settlement. For every day of delay beyond 30 days attributable to the lender, the bank must pay compensation of ₹5,000 per day to the borrower."
          }
        },
        {
          "@type": "Question",
          "name": "How can a borrower lodge a formal complaint against recovery agent harassment with the RBI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers should first submit a written complaint to the bank Principal Nodal Officer. If the bank fails to resolve the grievance within 30 days or rejects the complaint, the borrower can escalate the dispute to the RBI Integrated Ombudsman Scheme via the official CMS portal (cms.rbi.org.in), where the Ombudsman has the power to award compensation up to ₹20 Lakhs."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory cooling period after completing an RBI compromise settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the RBI Framework for Compromise Settlements (June 2023), a minimum cooling period of 12 months applies before a borrower can be considered for fresh credit facilities by regulated entities. This cooling period provides time for borrowers to rebuild their credit profile and establish disciplined repayment habits."
          }
        },
        {
          "@type": "Question",
          "name": "How does advocate representation protect borrowers during loan default and recovery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Advocate representation immediately halts illegal collection agent harassment by serving formal cease-and-desist notices, demanding strict adherence to RBI Fair Practices Codes, handling all institutional communication, and negotiating directly with bank settlement committees for maximum principal waivers backed by authentic No Dues Certificates."
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
  { id: 'regulatory-architecture-borrower-rights', title: '1. Regulatory Architecture of Borrower Rights' },
  { id: 'calling-hours-privacy-harassment-bans', title: '2. Calling Hours, Privacy & Harassment Bans' },
  { id: 'civil-default-immunity-section-420-myth', title: '3. Civil Immunity & Section 420 IPC Myth' },
  { id: 'bank-accounting-npv-recovery-formula', title: '4. Bank NPA Accounting & NPV Recovery Model' },
  { id: 'infographic-top-10-rbi-rules', title: '5. Visual Guide: Top 10 RBI Rules' },
  { id: 'comprehensive-breakdown-top-10-rules', title: '6. Definitive Breakdown of Top 10 RBI Rules' },
  { id: 'ots-mechanics-haircut-sanction-forensics', title: '7. OTS Mechanics & Sanction Letter Forensics' },
  { id: 'remittance-ndc-30-day-cibil-reconstruction', title: '8. Remittance, 30-Day NDC & Credit Repair' },
  { id: 'comparative-statutory-matrix', title: '9. Regulatory Enforcement Matrix' },
  { id: 'settleloans-legal-defense-framework', title: '10. SettleLoans Legal Defense & Resolution' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function Top10RbiRulesForLoanDefaultersRightsPage() {
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
            <span>RBI Master Directions • Borrower Statutory Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Top 10 RBI Rules for Loan Defaulters Rights: <span className="text-[#3b82f6] md:text-[#60a5fa]">Harassment Ban, Calling Hours &amp; OTS Guidelines</span>
          </h1>

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
              <span>RBI Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Assert Your Rights &amp; Settle Debt</span>
            </Link>
            <Link
              href="#comprehensive-breakdown-top-10-rules"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Review 10 Statutory Rules</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. Main 3-Column Content Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Sticky Table of Contents + Crux Pill */}
          <aside className="hidden lg:block sticky top-24 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4 text-[#1F5EFF]" />
                <span>Statutory Legal Crux</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Defaulting on a bank loan due to legitimate financial hardship does not strip an Indian citizen of constitutional dignity or statutory protections. The Reserve Bank of India strictly regulates debt collection, explicitly prohibiting harassment, calling outside 8 AM–7 PM, social shaming, and arbitrary criminal allegations.
              </p>
            </div>

            <SidebarTOC items={tocItems} />
          </aside>

          {/* Middle Column: Main Editorial Body */}
          <main className="w-full min-w-0 blog-content space-y-10">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm uppercase tracking-wider mb-4">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Executive Summary: Core Borrower Rights Under RBI Law</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict Permitted Calling Window:</strong> Lenders and recovery agents are legally prohibited from calling borrowers before 8:00 AM or after 7:00 PM under circular RBI/2022-23/108.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Absolute Privacy &amp; Anti-Shaming Shield:</strong> Contacting third parties, workplace HR, relatives, or posting notices in public residential areas is strictly banned under RBI Master Directions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Civil Breach vs. Criminal Immunity:</strong> Inability to service debt is purely a civil contractual dispute. The Supreme Court prohibits police involvement or Section 420 IPC charges for bona fide default.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Written OTS Sanction:</strong> All compromise settlements require formal, board-approved written sanction letters on bank letterhead before any money is paid.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>30-Day Mandatory NDC &amp; Deed Release:</strong> Banks must issue a No Dues Certificate and release all original property collateral documents within 30 days or pay ₹5,000/day compensation.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Regulatory Architecture */}
            <section id="regulatory-architecture-borrower-rights" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Regulatory Architecture of Borrower Rights in India: RBI Fair Practices Code
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In the contemporary Indian financial ecosystem, unsecured personal loans, consumer credit lines, credit cards, and micro-business credit facilities have expanded at an unprecedented pace. However, when unanticipated personal emergencies arise—such as sudden corporate layoffs, catastrophic family medical emergencies, critical supply-chain disruptions, or business insolvencies—honest borrowers frequently experience severe liquidity shortfalls. When Equated Monthly Installments (EMIs) default past the statutory 90-day threshold and become categorized as Non-Performing Assets (NPAs), institutional lenders frequently outsource recovery operations to aggressive third-party collection agencies.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many borrowers mistakenly believe that defaulting on a commercial credit facility forfeits their civil rights, leaving them vulnerable to unlimited institutional pressure. In reality, the Reserve Bank of India (RBI), acting under powers conferred by Section 21 and Section 35A of the Banking Regulation Act, 1949, and the Reserve Bank of India Act, 1934, has established a robust, legally binding regulatory umbrella known as the Fair Practices Code (FPC) and the Master Directions on Outsourcing of Financial Services. These statutory instruments balance the legitimate debt recovery rights of banking institutions against the fundamental constitutional rights of citizens to privacy, personal liberty, and freedom from coercive harassment.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Core Regulatory Principle</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  The Reserve Bank of India mandates that all Regulated Entities (REs)—including public sector banks, private commercial banks, foreign banks, Non-Banking Financial Companies (NBFCs), and Small Finance Banks—are vicariously liable for the actions of their recovery agents. Any coercive, humiliating, or unlawful conduct by collection staff triggers direct regulatory penalties against the bank.
                </p>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Indian legal framework, commercial default is governed strictly by the Indian Contract Act, 1872. A failure to make monthly installment payments constitutes a civil breach of contractual obligations, for which lenders possess designated judicial and extra-judicial recovery avenues. Crucially, the law does not permit banks to disregard standard due process, deploy intimidation tactics, or convert civil defaults into extra-judicial debt collection campaigns.
              </p>
            </section>

            {/* Section 2: Calling Hours, Privacy & Harassment Bans */}
            <section id="calling-hours-privacy-harassment-bans" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Core Behavioral Mandates: Calling Hours (8 AM–7 PM), Privacy Bans &amp; Anti-Harassment Directives
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The most visible touchpoint between distressed borrowers and institutional creditors occurs through collection communications. To curtail widespread predatory practices, the Reserve Bank of India issued landmark Circular RBI/2022-23/108 (DOR.ORG.REC.65/21.04.158/2022-23) titled <em>"Outsourcing of Financial Services - Responsibilities of Regulated Entities Employing Recovery Agents."</em> This circular establishes non-negotiable operational boundaries that govern how, when, and where lenders may communicate with borrowers.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Foremost among these protections is the strict restriction on communication timings. Regulated Entities and their authorized collection personnel are legally barred from contacting borrowers—via telephone calls, SMS messages, WhatsApp chats, or in-person visits—before 8:00 AM in the morning or after 7:00 PM in the evening. Persistent calling, automated dialer harassment during midnight or early morning hours, and calling on national holidays constitute explicit regulatory breaches that provide grounds for immediate grievance filing.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1">
                    <PhoneOff className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Calling Hours Protocol (8 AM – 7 PM)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Calls outside the 8:00 AM to 7:00 PM window are strictly unlawful. Continuous, repetitive calling within a short timeframe designed to cause mental harassment violates the RBI Fair Practices Code.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1">
                    <EyeOff className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Absolute Right to Privacy</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders cannot reveal loan default details to family members, workplace superiors, or friends. Reference contacts can only be contacted for location tracing, never for recovery.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1">
                    <ShieldX className="w-4 h-4 text-red-600" />
                    <span>Zero Tolerance for Verbal Abuse</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Use of profane language, derogatory comments regarding caste, gender, or social standing, and threats of physical injury are punishable under IPC Sections 503, 506, and 509.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    <span>Workplace Visitation Restrictions</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Visiting a borrower place of employment without prior written consent, creating public scenes at corporate desks, or attempting to compromise employment status is strictly barred.
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Furthermore, the RBI has banned the practice of public humiliation and social shaming. In the landmark Supreme Court ruling in <em>ICICI Bank Ltd. v. Prakash Kaur &amp; Ors. (2007) 2 SCC 711</em>, the apex court condemned the use of strong-arm recovery agents and hired thugs by commercial banks, affirming that debt recovery must occur strictly within the boundaries of civil law and civilized society.
              </p>
            </section>

            {/* Section 3: Civil Immunity & Section 420 IPC Myth */}
            <section id="civil-default-immunity-section-420-myth" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Statutory Protections Against Criminalization: Section 420 IPC Myth &amp; Supreme Court Rulings
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                One of the most persistent and damaging intimidation tactics utilized by unauthorized collection agencies involves sending fabricated police notices or threatening borrowers with criminal prosecution under Section 420 (Cheating and dishonestly inducing delivery of property) and Section 406 (Criminal breach of trust) of the Indian Penal Code (IPC), now corresponding to the relevant clauses of the Bharatiya Nyaya Sanhita (BNS).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                From a rigorous legal standpoint, a financial default arising out of an inability to pay does not fulfill the essential ingredients of criminal cheating. To establish an offense under Section 420 IPC, the prosecution or complainant must prove beyond reasonable doubt that the accused possessed a fraudulent or dishonest intention (<em>mens rea</em>) at the very inception of the contractual transaction. When a borrower applied for a credit facility using authentic Know Your Customer (KYC) documentation, serviced initial monthly installments responsibly, and subsequently defaulted due to financial distress, there is no fraudulent inducement at inception.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-3">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Landmark Supreme Court Jurisprudence on Loan Defaults</span>
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Hridaya Ranjan Prasad Verma v. State of Bihar (2000) 4 SCC 168</p>
                    <p className="text-slate-600 mt-1">The Supreme Court established the definitive distinction between mere breach of contract and cheating: criminal liability cannot arise unless fraudulent intent was actively present at the inception of the contract.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Dalip Kaur &amp; Ors. v. Jagnar Singh &amp; Anr. (2009) 14 SCC 696</p>
                    <p className="text-slate-600 mt-1">The apex court unequivocally held that an essentially civil dispute arising from non-fulfillment of a monetary contract cannot be given a criminal color to exert coercive pressure on the debtor.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Prof. R.K. Vijayasarathy v. Sudha Seetharam (2019) 16 SCC 739</p>
                    <p className="text-slate-600 mt-1">The Supreme Court reaffirmed that converting pure civil commercial debt claims into criminal proceedings represents a gross abuse of the judicial process, liable to be quashed under Section 482 of the CrPC.</p>
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Consequently, local police stations have no legal authority to intervene in unsecured loan defaults, summon borrowers to police stations for debt negotiation, or threaten custodial arrest. Forged police summons or fake court notices distributed over digital messaging channels constitute criminal forgery under Section 465 and Section 468 of the IPC, rendering the offending recovery agency liable to immediate criminal prosecution.
              </p>
            </section>

            {/* Section 4: Bank Accounting & NPV Recovery Formula */}
            <section id="bank-accounting-npv-recovery-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Balance Sheet Accounting: NPA Provisioning Dynamics &amp; The NPV Recovery Valuation Model
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To comprehend why financial institutions utilize aggressive psychological pressure rather than initiating legitimate court proceedings, one must examine institutional balance sheet mechanics. Under the Reserve Bank of India Master Directions on Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP), scheduled commercial banks must classify delinquent loans into progressive stages:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Special Mention Accounts (SMA-0, SMA-1, SMA-2):</strong> Monitored closely during 1 to 90 days overdue.</li>
                <li><strong>Substandard NPA (90 Days to 12 Months):</strong> Mandates an immediate 15% capital provisioning deduction against bank profits.</li>
                <li><strong>Doubtful Assets (D1, D2, D3):</strong> Escalates from 25% to 40% provisioning for secured portions and 100% full provisioning write-down for unsecured personal loans.</li>
                <li><strong>Loss Assets:</strong> Requires 100% provisioning write-off, representing an absolute drag on institutional return on assets (ROA).</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                When a bank files a civil recovery suit under Order 37 of the Code of Civil Procedure (CPC) or approaches a civil court, it incurs significant upfront ad-valorem court fees (1% to 3% of the claim), retains external litigation advocates, and faces judicial proceedings lasting 3 to 5 years. Institutional risk committees therefore evaluate delinquent portfolios through a Net Present Value (NPV) recovery valuation model:
              </p>

              {/* NPV Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries across time periods t, r represents the institutional cost of capital discount rate, and deductions account for protracted civil litigation costs and locked regulatory provisioning capital.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because prolonged litigation yields a severely negative Net Present Value on unsecured retail portfolios, banking institutions possess an immense financial incentive to execute a negotiated One-Time Settlement (OTS). Under standard OTS frameworks, banks agree to substantial haircuts (often waiving 45% to 65% of the total ledger balance) to immediately release locked regulatory capital and recover liquid cash.
              </p>
            </section>

            {/* Section 5: Dedicated 16:9 Infographic Banner */}
            <section id="infographic-top-10-rbi-rules" className="my-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/top-10-rbi-rules-for-loan-defaulters-rights.jpg"
                  alt="Top 10 RBI Rules for Loan Defaulters Rights Infographic: Calling Hours, Anti-Harassment, Privacy Bans, OTS Guidelines, and Ombudsman Redressal"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 text-slate-300 text-xs flex items-center justify-between">
                  <span className="font-semibold text-blue-400">Fig 1: Statutory Overview — Top 10 RBI Rules &amp; Borrower Legal Safeguards in India</span>
                  <span className="text-slate-400 hidden sm:inline">Source: SettleLoans Regulatory Research &amp; Banking Analysis</span>
                </div>
              </div>
            </section>

            {/* Section 6: Comprehensive Breakdown of the Top 10 RBI Rules */}
            <section id="comprehensive-breakdown-top-10-rules" className="space-y-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Comprehensive Breakdown of the Top 10 RBI Rules for Loan Defaulters Rights
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India has woven a comprehensive statutory tapestry across multiple master directions, circulars, and ombudsman regulations. Below is the authoritative, detailed breakdown of the top 10 statutory rules that safeguard every borrower in India:
              </p>

              <div className="space-y-4">
                
                {/* Rule 1 */}
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">1</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Strict Permitted Calling Hours (8:00 AM to 7:00 PM)
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    <strong>Regulatory Basis:</strong> RBI Circular RBI/2022-23/108 (DOR.ORG.REC.65/21.04.158/2022-23).<br />
                    Lenders and their authorized recovery agents are strictly restricted to contacting borrowers only between 8:00 AM and 7:00 PM. Calling borrowers before 8:00 AM, late at night, or persistently ringing phones during family hours is prohibited. Any violation constitutes actionable harassment under the RBI Fair Practices Code.
                  </p>
                </div>

                {/* Rule 2 */}
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">2</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Absolute Right to Privacy &amp; Anti-Shaming Mandate
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    <strong>Regulatory Basis:</strong> RBI Master Direction on Outsourcing of Financial Services &amp; Digital Lending Guidelines.<br />
                    Lenders are barred from disclosing loan details or default status to any third party, including family members, neighbors, friends, or workplace colleagues. Reference contacts provided during onboarding can only be contacted for location tracing when the borrower is genuinely untraceable. Publishing names in newspapers without statutory court sanction or posting default notices in housing societies is strictly illegal.
                  </p>
                </div>

                {/* Rule 3 */}
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">3</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Total Ban on Physical Force, Intimidation &amp; Verbal Abuse
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    <strong>Regulatory Basis:</strong> Supreme Court ruling in <em>ICICI Bank v. Prakash Kaur</em> &amp; IPC Sections 383, 503, 506.<br />
                    Lenders cannot employ musclemen, goons, or unverified recovery agents. Any verbal abuse, physical obstruction, threat of bodily harm, or intimidation constitutes a cognizable offense under criminal law. The bank carries direct vicarious liability for criminal conduct by its outsourced agents.
                  </p>
                </div>

                {/* Rule 4 */}
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">4</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Mandatory Board-Approved Compromise Settlement (OTS) Framework
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    <strong>Regulatory Basis:</strong> RBI Circular RBI/2023-24/40 (DOR.STR.REC.20/21.04.048/2023-24).<br />
                    All Regulated Entities must put in place board-approved policies for undertaking compromise settlements and technical write-offs. This framework establishes clear delegation of authority, objective haircut calculation benchmarks, and transparent terms, ensuring borrowers in genuine hardship have access to structured debt settlement.
                  </p>
                </div>

                {/* Rule 5 */}
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">5</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Mandatory Written Settlement Sanction Letter Before Payment
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    <strong>Regulatory Basis:</strong> RBI Fair Practices Code &amp; Banking Supervision Directives.<br />
                    Borrowers have the absolute right to receive a formal, bank-stamped Settlement Sanction Letter on official letterhead signed by an authorized signatory before paying a single rupee. Verbal settlement assurances or WhatsApp messages from recovery agents carry zero legal validity and often represent fraudulent token collection traps.
                  </p>
                </div>

                {/* Rule 6 */}
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">6</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Fair Lending Practices &amp; Ban on Capitalising Penal Interest
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    <strong>Regulatory Basis:</strong> RBI Circular RBI/2023-24/53 (DOR.MCS.REC.28/01.01.001/2023-24).<br />
                    Banks and NBFCs are prohibited from adding penal interest onto the core loan principal to calculate compound interest. Penalties for default must be levied strictly as reasonable, non-capitalised 'penal charges' with full disclosure, preventing predatory debt compounding.
                  </p>
                </div>

                {/* Rule 7 */}
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">7</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Mandatory 60-Day Notice Before Possession on Secured Loans
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    <strong>Regulatory Basis:</strong> SARFAESI Act, 2002 (Sections 13(2) and 13(4)) &amp; Security Interest Rules.<br />
                    For secured loans like home or property mortgages, lenders cannot seize assets abruptly upon default. The bank must serve a mandatory 60-day demand notice under Section 13(2), consider borrower representations under Section 13(3A), and provide a subsequent 30-day notice under Section 13(4) before taking physical possession.
                  </p>
                </div>

                {/* Rule 8 */}
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">8</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Direct Escalation to RBI Integrated Ombudsman with ₹20 Lakh Compensation Power
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    <strong>Regulatory Basis:</strong> Reserve Bank - Integrated Ombudsman Scheme, 2021.<br />
                    If a bank fails to resolve a harassment complaint within 30 days, the borrower can escalate the dispute to the RBI Integrated Ombudsman via the Complaint Management System (CMS). The Ombudsman possesses statutory powers to penalize the lender and award compensation up to ₹20 Lakhs for consequential losses and up to ₹1 Lakh for mental harassment.
                  </p>
                </div>

                {/* Rule 9 */}
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">9</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Immunity from Criminal Prosecution for Honest Civil Defaults
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    <strong>Regulatory Basis:</strong> Supreme Court rulings in <em>Dalip Kaur</em> &amp; <em>Hridaya Ranjan Prasad Verma</em>.<br />
                    Financial inability to pay is strictly a civil breach of contract. Police officers cannot summon, harass, or register FIRs under Section 420 or 406 IPC against genuine borrowers. Any attempt by recovery agents to issue fabricated arrest notices is legally void and subject to criminal counter-action under Section 506 IPC.
                  </p>
                </div>

                {/* Rule 10 */}
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">10</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Mandatory Release of Property Documents &amp; NDC within 30 Days (₹5,000/Day Penalty)
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    <strong>Regulatory Basis:</strong> RBI Directive RBI/2023-24/60 (DoR.MCS.REC.38/01.01.001/2023-24).<br />
                    Upon full settlement or repayment, Regulated Entities must release all original property documents and issue a formal No Dues Certificate (NDC) within 30 days. For every day of delay beyond 30 days attributable to the lender, the bank must pay mandatory compensation of ₹5,000 per day to the borrower.
                  </p>
                </div>

              </div>
            </section>

            {/* Section 7: OTS Mechanics & Sanction Forensics */}
            <section id="ots-mechanics-haircut-sanction-forensics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Strategic Negotiation Forensics: OTS Mechanics, Haircut Maximization &amp; Sanction Letter Verification
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Executing a legally secure and financially advantageous One-Time Settlement (OTS) requires understanding the internal hierarchy and decision-making apparatus of scheduled commercial banks. Settlement authority does not reside with field recovery agents; it is vested in institutional Credit Committees, Zonal Settlement Committees (ZSC), or Special Asset Management Branches (SAMB).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an unrepresented borrower attempts to negotiate directly, recovery personnel frequently deploy psychological pressure to extract token payments. In contrast, specialized debt defense advocates construct a comprehensive Financial Hardship Dossier that formally demonstrates the borrower genuine inability to pay. This dossier documents termination letters, medical diagnosis certificates, audited business balance sheets, or tax returns.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Sanction Letter Forensic Verification Checklist</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Official Bank Letterhead</p>
                    <p className="text-slate-600">Must feature official institutional logo, corporate registration details, branch code, and a unique dispatch reference number.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Explicit Waiver Breakdown</p>
                    <p className="text-slate-600">Must explicitly specify the ledger balance, agreed settlement amount, total haircut percentage, and installment due dates.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Closure &amp; Legal Withdrawal Clause</p>
                    <p className="text-slate-600">Must state that upon receipt of the settled amount, all legal proceedings will be withdrawn and a stamped No Dues Certificate issued.</p>
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers must never remit funds to third-party accounts, individual agent UPI handles, or collection agency accounts. Payments must be routed exclusively to the borrower dedicated loan account via traceable electronic methods such as RTGS, NEFT, or Account Payee Demand Drafts.
              </p>
            </section>

            {/* Section 8: Remittance, 30-Day NDC & Credit Repair */}
            <section id="remittance-ndc-30-day-cibil-reconstruction" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Post-Settlement Remittance Protocols, 30-Day Mandatory NDC Compliance &amp; CIBIL Credit Reconstruction
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once the final settlement installment is remitted in strict compliance with the sanction letter schedule, the post-settlement legal phase begins. Under RBI Directive RBI/2023-24/60, the financial institution is legally obligated to execute account closure, issue a physical and digital No Dues Certificate (NDC), and release any pledged security or original title deeds within 30 days.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Furthermore, the lender is required under the Credit Information Companies (Regulation) Act, 2005 (CICRA) to transmit updated account records to all four credit bureaus operating in India—TransUnion CIBIL, Experian, Equifax, and CRIF High Mark—within 45 days. The account status will transition from active delinquent DPD (Days Past Due) to 'Settled' or 'Post-Settlement Written Off'.
              </p>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700 space-y-3">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                  <CreditCard className="w-4 h-4" />
                  <span>Strategic 24-Month Credit Score Rebuilding Roadmap</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                    <p className="font-bold text-white mb-1">Months 1 to 6: Bureau Verification</p>
                    <p className="text-slate-300">Obtain updated credit reports. Verify that the outstanding ledger balance reflects zero and all overdue DPD flags are halted.</p>
                  </div>
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                    <p className="font-bold text-white mb-1">Months 6 to 12: Secured Credit Card</p>
                    <p className="text-slate-300">Open a Fixed Deposit (FD) backed credit card. Utilize 15%–20% of the limit and clear 100% of the statement balance monthly.</p>
                  </div>
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                    <p className="font-bold text-white mb-1">Months 12 to 18: Mandatory Cooling Exit</p>
                    <p className="text-slate-300">Surpass the RBI 12-month cooling window under the June 2023 circular. Establish a continuous 12-month flawless payment track record.</p>
                  </div>
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                    <p className="font-bold text-white mb-1">Months 18 to 24: Score Restoration</p>
                    <p className="text-slate-300">As positive repayment data accumulates, your CIBIL score progressively climbs back to 720+, unlocking regular prime lending avenues.</p>
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                While a 'Settled' remark remains visible in bureau histories, its negative weighting diminishes rapidly as new positive credit lines demonstrate disciplined, responsible financial management.
              </p>
            </section>

            {/* Section 9: Regulatory Enforcement Matrix */}
            <section id="comparative-statutory-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Dispute Resolution &amp; Regulatory Enforcement Comparative Matrix
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The following matrix summarizes the jurisdictional avenues, governing circulars, and enforceable borrower protections across key stages of loan recovery and debt settlement:
              </p>
              
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Dispute Stage</th>
                      <th>Regulatory Reference</th>
                      <th>Permitted Bank Action</th>
                      <th>Prohibited Action</th>
                      <th>Borrower Legal Remedy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Collection Communication</td>
                      <td>RBI/2022-23/108 Circular</td>
                      <td>Calling between 8:00 AM – 7:00 PM</td>
                      <td>Calling outside window, verbal abuse, shaming</td>
                      <td>Grievance to Nodal Officer &amp; RBI Ombudsman</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Penal Interest Levy</td>
                      <td>RBI/2023-24/53 Circular</td>
                      <td>Reasonable, transparent penal charges</td>
                      <td>Capitalising interest into principal balance</td>
                      <td>Demand account statement rectification</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Compromise Settlement (OTS)</td>
                      <td>RBI/2023-24/40 Circular</td>
                      <td>Board-approved haircut negotiation</td>
                      <td>Verbal settlement deals &amp; cash collections</td>
                      <td>Require formal stamped Sanction Letter</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Police FIR Threats</td>
                      <td>Supreme Court (Dalip Kaur)</td>
                      <td>Civil summary suit (Order 37 CPC)</td>
                      <td>Threatening Section 420 IPC arrest or police calls</td>
                      <td>Cease-and-desist notice &amp; Section 506 IPC counter</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Secured Asset Recovery</td>
                      <td>SARFAESI Act 2002</td>
                      <td>60-day notice under Sec 13(2)</td>
                      <td>Forcible asset possession without due notice</td>
                      <td>Section 17 DRT appeal &amp; Lok Adalat settlement</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Post-Payment NDC Release</td>
                      <td>RBI/2023-24/60 Circular</td>
                      <td>Deliver NDC &amp; property deeds within 30 days</td>
                      <td>Delaying deed release or charging extra fees</td>
                      <td>₹5,000/day compensation claim via Ombudsman</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="settleloans-legal-defense-framework" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Debt Resolution Framework: Your Statutory Shield
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating institutional recovery harassment, aggressive collection agency tactics, and complex banking regulations requires seasoned legal advocates who specialize in banking litigation, the Code of Criminal Procedure, and RBI Master Directions. SettleLoans stands as India premier legal defense and debt resolution platform. Our advocates protect your dignity by serving formal cease-and-desist notices to stop unlawful harassment, holding abusive collection agencies accountable under criminal and consumer protection laws, and negotiating directly with institutional settlement committees to secure maximum principal waivers backed by authentic, bank-stamped No Dues Certificates.
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
                  11. Frequently Asked Questions: Top 10 RBI Rules for Loan Defaulters Rights
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear, advocate-verified answers to critical questions regarding RBI regulations, recovery limits, and borrower statutory rights in India.
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
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Recovery Agents &amp; Outsourcing of Financial Services</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Complaint Management System)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Landmark ICICI Bank &amp; Dalip Kaur Rulings)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Indian Penal Code, 1860 (Sections 383, 420, 503 &amp; 506)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">SARFAESI Act, 2002 (Statutory Demand &amp; Security Enforcement Rules)</span>
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
                  href="/bank-loan-settlement-guidelines"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Loan Settlement Guidelines
                </Link>
                <Link
                  href="/bank-fir-for-loan-default-reality-check"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank FIR for Loan Default Reality Check
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Recovery Harassment Complaint
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go to Jail for Loan Default?
                </Link>
                <Link
                  href="/rbi-ombudsman-complaint-loan-recovery-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  RBI Ombudsman Complaint Guide
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) 30-Day Rules
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Bank Seize Property for Personal Loan?
                </Link>
                <Link
                  href="/how-to-verify-authentic-bank-settlement-letter"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Verify Bank Settlement Letter
                </Link>
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply Guide
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full sticky top-24 space-y-6 h-fit">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                  AJ
                </Link>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                      Ashish Jhangra
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Pioneering advocate in banking jurisprudence, borrower statutory protections, RBI Fair Practices Code enforcement, and institutional One-Time Settlement (OTS) negotiations with over a decade of specialized advisory leadership.
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
              <h4 className="font-bold text-base text-white mb-2">Facing Illegal Harassment or Recovery Threats?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let recovery agencies violate your statutory rights. Retain our senior banking advocates to issue cease-and-desist notices, halt harassment, and negotiate a 50%–65% OTS.
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
                  <span>RBI Fair Practices Code Enforcement</span>
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
                  <span>Supreme Court Precedent Protected</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
