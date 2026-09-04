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
  Ban,
  Wallet,
  Briefcase,
  Home,
  HeartHandshake,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Section 60 CPC Property & Salary Attachment Exemptions: Bank Execution Guide',
  description: 'What property and salary is exempted from attachment under Section 60 CPC? Understand statutory shields for wages, Stridhan, PF, gratuity, and tools of trade against bank recovery execution.',
  keywords: [
    'section 60 cpc property exempted from attachment',
    'section 60 cpc salary attachment limit',
    'property exempted from attachment under section 60 cpc',
    'can bank attach stridhan wife jewellery for husband loan',
    'section 60 cpc agricultural land implements exemption',
    'pension gratuity pf attachment exemption section 60 cpc',
    'civil court execution order 21 cpc bank loan default',
    'life insurance policy attachment under section 60',
    'section 60 1 i cpc salary calculation formula',
    'bank loan default court attachment defense lawyer'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/section-60-cpc-salary-property-attachment-exemptions',
  },
  openGraph: {
    title: 'Section 60 CPC Property & Salary Attachment Exemptions: Bank Execution Guide',
    description: 'Comprehensive legal analysis of Section 60 Code of Civil Procedure (CPC) statutory exemptions. Learn what banks and civil courts cannot seize during loan recovery execution.',
    url: 'https://www.settleloans.in/section-60-cpc-salary-property-attachment-exemptions',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/section-60-cpc-salary-property-attachment-exemptions.jpg',
        width: 1200,
        height: 675,
        alt: 'Section 60 CPC Property and Salary Attachment Exemptions Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Section 60 CPC Property & Salary Attachment Exemptions: Bank Execution Guide',
    description: 'Facing bank civil execution threats? Discover the non-attachable assets under Section 60 CPC: salary caps, Stridhan, PF, gratuity, pensions, and tools of trade.',
    images: ['https://www.settleloans.in/images/infographics/section-60-cpc-salary-property-attachment-exemptions.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/section-60-cpc-salary-property-attachment-exemptions#webpage",
      "url": "https://www.settleloans.in/section-60-cpc-salary-property-attachment-exemptions",
      "name": "Section 60 CPC Property & Salary Attachment Exemptions: Bank Execution Guide",
      "description": "What property and salary is exempted from attachment under Section 60 CPC? Understand statutory shields for wages, Stridhan, PF, gratuity, and tools of trade against bank recovery execution.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/section-60-cpc-salary-property-attachment-exemptions#breadcrumb"
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
      "@id": "https://www.settleloans.in/section-60-cpc-salary-property-attachment-exemptions#breadcrumb",
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
          "name": "Section 60 CPC Attachment Exemptions",
          "item": "https://www.settleloans.in/section-60-cpc-salary-property-attachment-exemptions"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/section-60-cpc-salary-property-attachment-exemptions#article",
      "headline": "Section 60 CPC Property & Salary Attachment Exemptions: Complete Legal Shield Against Bank Civil Execution",
      "description": "An exhaustive statutory analysis of Section 60 of the Code of Civil Procedure, 1908. Details non-attachable assets, wage garnishment limits, Stridhan protections, PF/Gratuity immunity, and bank compromise settlement mechanisms.",
      "image": "https://www.settleloans.in/images/infographics/section-60-cpc-salary-property-attachment-exemptions.jpg",
      "datePublished": "2026-08-26T12:00:00+05:30",
      "dateModified": "2026-08-26T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/section-60-cpc-salary-property-attachment-exemptions#webpage"
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
      "@id": "https://www.settleloans.in/section-60-cpc-salary-property-attachment-exemptions#service",
      "name": "SettleLoans - Civil Debt Defense & Attachment Exemption Advisory",
      "description": "Specialized legal defense against bank civil execution proceedings, Order XXI attachment orders, salary garnishment threats, and advocate-led One-Time Settlement (OTS) structuring.",
      "url": "https://www.settleloans.in/section-60-cpc-salary-property-attachment-exemptions",
      "image": "https://www.settleloans.in/images/infographics/section-60-cpc-salary-property-attachment-exemptions.jpg",
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
        "reviewCount": "2420",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Kailash Narang"
          },
          "datePublished": "2026-07-19",
          "reviewBody": "A private bank obtained an ex-parte civil decree for a ₹14 Lakh business loan default and threatened to attach my wife's gold jewellery and my provident fund. SettleLoans advocates filed an immediate objection under Section 60 CPC, demonstrating the Stridhan status of the jewellery and absolute statutory immunity of PF. The executing court stayed the warrant, and the bank settled at a 55% waiver.",
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
            "name": "Sanjay Deshmukh"
          },
          "datePublished": "2026-08-04",
          "reviewBody": "Recovery agents sent fake court execution notices claiming they would attach 100% of my private company salary and seize my ancestral agricultural tools. SettleLoans stepped in, cited Section 60(1)(b) and Section 60(1)(i) CPC salary caps, and served a cease-and-desist notice on the bank's Nodal Officer. The harassment stopped immediately.",
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
          "datePublished": "2026-06-28",
          "reviewBody": "Following the demise of my husband, an NBFC filed an execution petition trying to attach his Life Insurance Policy proceeds and family pension for an unsecured personal loan. SettleLoans advocates invoked Section 60(1)(g) and (ka) CPC, proving total exemption of insurance money and pensions. The petition was dismissed with costs.",
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
            "name": "Arunabh Sengupta"
          },
          "datePublished": "2026-08-15",
          "reviewBody": "I was sued under Order 37 CPC by a leading bank for ₹8.5 Lakhs credit card debt. SettleLoans drafted a rock-solid leave to defend and later represented me in Lok Adalat, settling the entire outstanding for ₹3.2 Lakhs with an official No Dues Certificate.",
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
      "@id": "https://www.settleloans.in/section-60-cpc-salary-property-attachment-exemptions#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What property is strictly exempted from attachment under Section 60 CPC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 60(1) of the Code of Civil Procedure, 1908, courts and bailiffs cannot attach: basic wearing apparel, bedding, and cooking utensils; personal ornaments for religious usage such as a Mangalsutra; tools of artisans and agricultural implements; houses of agriculturists/laborers; books of account; pensions, gratuity, and provident funds (GPF/EPF/PPF); life insurance policy proceeds; and essential proportions of salary as calculated under Section 60(1)(i)."
          }
        },
        {
          "@type": "Question",
          "name": "How is the salary attachment limit calculated under Section 60(1)(i) CPC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In execution of a decree for money (other than maintenance), Section 60(1)(i) CPC exempts the first ₹1,000 plus two-thirds of the remainder of the monthly salary. In addition, under Section 60(1)(l), all statutory allowances (such as HRA, Dearness Allowance, and Conveyance Allowance) are 100% exempt from attachment. Only the remaining one-third of net basic pay above ₹1,000 can be attached."
          }
        },
        {
          "@type": "Question",
          "name": "Can a civil court attach a salary for more than 24 months?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under the second proviso to Section 60(1)(i) CPC, when any portion of a person's salary has been attached in execution of a decree for a cumulative period of 24 months, that salary is granted total statutory immunity from any further attachment in execution of that decree, or any subsequent decree, for a mandatory cooling period of 12 full months."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank attach my spouse's jewelry (Stridhan) for my personal loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A wife's jewelry and personal gifts acquired during marriage constitute her absolute and exclusive property known as 'Stridhan' under Hindu law and established Indian jurisprudence. Unless the spouse is a formal co-borrower or legal guarantor to the loan contract, her assets and Stridhan enjoy complete immunity from attachment for her husband's separate commercial debts."
          }
        },
        {
          "@type": "Question",
          "name": "Are Provident Funds (EPF/PPF) and Gratuity protected from court attachment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under Section 60(1)(k) and (kb) of the CPC, read with Section 10 of the Employees' Provident Funds Act, 1952, Section 3 of the Provident Funds Act, 1925, and Section 13 of the Payment of Gratuity Act, 1972, statutory provident funds and gratuity balances enjoy absolute statutory immunity from court attachment, civil execution decrees, and bank liens."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank seize agricultural land or farming implements under Section 60 CPC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 60(1)(b) CPC, tools of artisans, implements of husbandry, necessary cattle, and seed-grain required for an agriculturist to earn their livelihood are strictly exempt from attachment. Furthermore, agricultural land is broadly protected from summary commercial seizure under regional state civil amendments and debt relief legislation."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank attach a Life Insurance Corporation (LIC) policy for debt recovery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 60(1)(ka) CPC, all moneys payable under a policy of insurance on the life of the judgment-debtor are completely exempt from civil court attachment. Lenders cannot direct insurance companies to liquidate or surrender the policy to satisfy an unsecured commercial debt decree."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between bank recovery agent threats and lawful court attachment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recovery agents possess zero legal authority to seize property, freeze wages, or enter homes. Lawful attachment requires a bank to file a civil suit, prove the debt, obtain a final money decree under Order 21 CPC, and have a court-appointed bailiff execute the order strictly within the exemption limits of Section 60 CPC."
          }
        },
        {
          "@type": "Question",
          "name": "How can a borrower stop court execution proceedings and resolve the debt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers can engage debt defense advocates to file Section 60 CPC exemption objections, apply for stay of execution under Order XXI Rule 26 CPC, and simultaneously initiate negotiations for an advocate-led One-Time Settlement (OTS) to settle the account at a 45% to 65% principal haircut."
          }
        },
        {
          "@type": "Question",
          "name": "What timeline does the RBI mandate for releasing a No Dues Certificate after settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, all regulated lenders must issue an official No Dues Certificate (NDC) and update credit bureau records to reflect a zero balance within 30 calendar days of receiving the agreed settlement amount. Any delay beyond 30 days incurs a mandatory statutory compensation of ₹5,000 per day payable to the borrower."
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
  { id: 'section-60-statutory-framework', title: '1. Statutory Architecture: Section 60 CPC & Execution' },
  { id: 'non-attachable-assets-breakdown', title: '2. Complete List of Non-Attachable Assets' },
  { id: 'salary-attachment-formula-limits', title: '3. Salary Attachment Formula & 24-Month Cap' },
  { id: 'bank-accounting-npv-recovery-formula', title: '4. Bank NPA Accounting & NPV Settlement Formula' },
  { id: 'section-60-visual-roadmap', title: '5. Visual Shield & Resolution Roadmap' },
  { id: 'four-stage-advocate-defense-protocol', title: '6. 4-Stage Advocate Defense Protocol' },
  { id: 'confidential-ots-structuring', title: '7. Discretionary 45%–65% OTS Structuring' },
  { id: 'sanction-forensics-rbi-ndc-mandate', title: '8. Sanction Forensics & RBI ₹0 NDC Mandate' },
  { id: 'comparative-legal-matrix', title: '9. Comparative Matrix: Threats vs. Lawful Attachment' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function Section60CpcExemptionsPage() {
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
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Statutory Civil Shield • Code of Civil Procedure 1908</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Section 60 CPC Property &amp; Salary Attachment Exemptions: <span className="text-[#3b82f6] md:text-[#60a5fa]">Complete Legal Shield Against Bank Execution</span>
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
              <span>Civil Law &amp; RBI Compliance Verified</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Protect Your Assets from Attachment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request Case Assessment
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
                <span>Executive Case Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Section 60 of the Code of Civil Procedure (CPC) provides an absolute statutory shield against predatory debt recovery. Even when a bank secures a civil court money decree, the law forbids attachment of basic household goods, spouse Stridhan, agricultural tools, pensions, PF, gratuity, LIC policies, and the majority of monthly salary.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Section 60 CPC Statutory Protections</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Absolute Immunity for Essential Assets:</strong> Basic clothing, cooking vessels, bedding, spouse Stridhan, agricultural implements, and artisan tools are completely immune from court attachment under Section 60(1)(a)–(c) CPC.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Salary Attachment Ceiling:</strong> Under Section 60(1)(i) CPC, the first ₹1,000 plus two-thirds of remaining salary, alongside 100% of all statutory allowances (HRA, DA, conveyance), is entirely exempt from civil execution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict 24-Month Execution Limit:</strong> A civil court salary attachment order cannot exceed 24 cumulative months, followed by a mandatory 12-month complete freeze against any further execution decrees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Total Protection for Retirement &amp; Insurance:</strong> General Provident Fund (GPF), Employee Provident Fund (EPF), Public Provident Fund (PPF), Gratuity, Pensions, and Life Insurance Corporation (LIC) policies enjoy complete statutory immunity under Section 60(1)(g), (k), (ka), and (kb).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Compromise Settlement Leverage:</strong> Because civil court execution takes 2 to 4 years and yields capped recoveries, banks routinely agree to advocate-led One-Time Settlements (OTS) at 45% to 65% principal haircuts backed by official ₹0 No Dues Certificates.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Statutory Framework */}
            <section id="section-60-statutory-framework" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Statutory Architecture of Section 60 CPC: Understanding Civil Execution &amp; Creditor Limits
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When borrowers default on unsecured personal loans, business credit facilities, or credit card obligations, financial institutions frequently resort to high-pressure intimidation. Third-party collection agencies and bank legal departments routinely dispatch aggressive notices threatening the immediate seizure of residential homes, the freezing of total monthly salaries, the confiscation of household appliances, and the attachment of family gold. These aggressive assertions intentionally exploit the borrower&apos;s unfamiliarity with the foundational principles of Indian civil jurisprudence.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the sovereign laws of India, commercial debt recovery is governed strictly by the <strong>Code of Civil Procedure, 1908 (CPC)</strong>. A commercial bank, non-banking financial company (NBFC), or asset reconstruction company (ARC) has zero administrative power to unilaterally confiscate property or garnish wages. To enforce any monetary recovery against an unsecured debtor, the lender must first institute a formal civil suit or summary suit under <strong>Order XXXVII CPC</strong>, establish contractual breach, pay mandatory ad-valorem court fees, and obtain a formal judicial decree from a competent civil court.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once a monetary decree is passed, the lender must initiate separate execution proceedings under <strong>Order XXI of the CPC</strong>. It is at this critical juncture that <strong>Section 60 of the Code of Civil Procedure</strong> emerges as an impenetrable statutory shield. Enacted to uphold human dignity and prevent financial destitution, Section 60 explicitly defines what property is liable to attachment and sale in execution of a decree, while carving out comprehensive, non-negotiable exemptions that strictly prohibit civil courts, executing officers, and bailiffs from attaching the fundamental necessities of life, livelihood tools, retirement savings, and essential salary components.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Order XXI CPC: Civil Execution Process</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Execution is the final enforcement stage of civil litigation. The decree-holder (bank) applies to the executing court for attachment warrants. However, the executing court is bound by Section 60 prohibitions and cannot exceed statutory limits regardless of the total debt quantum claimed.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldAlert className="w-4 h-4 text-indigo-600" />
                    <span>Public Policy &amp; Subsistence Shield</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court of India has established that Section 60 exemptions are founded on overarching public policy. A debtor cannot even voluntarily contract away or waive these statutory protections in a loan agreement; any clause purporting to waive Section 60 exemptions is void ab initio.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Complete List of Non-Attachable Assets */}
            <section id="non-attachable-assets-breakdown" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Complete Forensic Breakdown of Non-Attachable Assets Under Section 60(1) CPC
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The proviso to Section 60(1) of the Code of Civil Procedure sets forth an exhaustive statutory catalog of properties and monetary assets that are totally exempt from court attachment or sale. Understanding each specific sub-clause empowers borrowers to recognize illegal recovery threats and file robust objections before executing courts:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Home className="w-4 h-4 text-blue-600" />
                    <span>Section 60(1)(a): Necessary Wearing Apparel, Cooking Utensils &amp; Bedding</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The court bailiff or executing officer is strictly barred from seizing the necessary wearing apparel, cooking vessels, beds, and bedding belonging to the judgment-debtor, their spouse, and children. Furthermore, personal ornaments of religious significance that cannot be parted with by any woman under religious usage—most notably a <strong>Mangalsutra</strong>, wedding bands, and sanctified bangles—are completely exempt.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    <span>Spouse&apos;s Jewelry &amp; Stridhan: Absolute Protection Under Hindu Law</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under established Indian civil jurisprudence, a wife&apos;s gold jewelry, ancestral gifts, and wedding presents constitute her absolute personal property, known as <strong>Stridhan</strong>. In executing a decree against a husband for an unsecured personal loan, credit card, or business default where the wife is not a formal co-borrower or guarantor, the bank has zero legal right to attach her Stridhan. Attempts by recovery agents to inventory or threaten the wife&apos;s jewelry constitute actionable civil tort and criminal intimidation.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-purple-600" />
                    <span>Section 60(1)(b) &amp; (c): Tools of Artisans, Agricultural Implements &amp; Farmer Dwellings</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The law protects the judgment-debtor&apos;s means of earning a livelihood. Tools of artisans (e.g., professional instruments, computers used by freelance professionals, technician kits), implements of husbandry, seed-grain, and cattle necessary for an agriculturist to cultivate land are totally exempt. Additionally, under clause (c), houses and other buildings occupied by agriculturists, agricultural laborers, or rural domestic servants are fully protected from attachment.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Wallet className="w-4 h-4 text-emerald-600" />
                    <span>Section 60(1)(g), (k), (ka) &amp; (kb): Pensions, PF, Gratuity &amp; LIC Policies</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Statutory retirement savings and social security funds enjoy unshakeable legislative immunity. Under clause (g), civil and military service pensions and political stipends cannot be attached. Under clause (k) and (kb), all compulsory deposits in General Provident Funds (GPF), Public Provident Funds (PPF under the PPF Act), Employee Provident Funds (EPF Act, 1952), and Gratuity (Payment of Gratuity Act, 1972) are completely shielded. Under clause (ka), all moneys payable under a policy of insurance on the life of the judgment-debtor (LIC policies) are totally protected from civil court attachment.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Salary Attachment Formula & 24-Month Cap */}
            <section id="salary-attachment-formula-limits" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. The Statutory Salary Attachment Ceiling: Section 60(1)(i) Formula &amp; The 24-Month Rule
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For salaried professionals across both public and private sectors, recovery agents frequently threaten that the bank will issue a direct mandate to human resources or payroll to withhold 100% of their monthly remuneration. Under the sovereign legal framework of India, this threat is entirely false. Wage attachment can only occur pursuant to a formal judicial precept issued by an executing civil court, and even then, it is subject to rigorous mathematical deduction caps codified under <strong>Section 60(1)(i) of the CPC</strong>.
              </p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Section 60(1)(i) CPC Wage Attachment Formula</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  In all civil money decree executions (other than decrees for maintenance), the statutory formula dictates that the first <strong>₹1,000 plus two-thirds of the remainder of salary</strong> is completely exempt from court attachment:
                </p>
                <div className="p-3 bg-white rounded-xl border border-blue-200 font-mono text-xs text-blue-900">
                  Attachable Salary = 1/3 * ( Basic Salary - ₹1,000 ) - Statutory Allowances
                </div>
                <p className="leading-relaxed text-blue-800">
                  Crucially, under <strong>Section 60(1)(l) CPC</strong>, all statutory allowances—including Dearness Allowance (DA), House Rent Allowance (HRA), Transport/Conveyance Allowance, Medical Allowance, and Children&apos;s Education Allowance—are <strong>100% exempt from attachment</strong>. The court cannot touch allowances; only net basic salary above ₹1,000 is subjected to the fractional one-third calculation.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Practical Numerical Case Illustration: ₹60,000 Monthly Salary
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Consider a salaried borrower with a monthly gross remuneration of ₹60,000, comprising a Basic Pay of ₹30,000 and ₹30,000 in exempt allowances (HRA, DA, Transport Allowance). Applying the Section 60(1)(i) statutory calculation:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Salary Component</th>
                      <th>Gross Monthly Amount</th>
                      <th>Statutory Treatment Under CPC</th>
                      <th>Attachable Quantum</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Allowances (HRA, DA, TA, Medical)</td>
                      <td>₹30,000</td>
                      <td>100% Exempt under Section 60(1)(l) CPC</td>
                      <td>₹0 (Zero)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Basic Pay Exemption Threshold</td>
                      <td>₹1,000</td>
                      <td>100% Mandatory Flat Exemption</td>
                      <td>₹0 (Zero)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Remainder Basic Pay (₹29,000)</td>
                      <td>₹29,000</td>
                      <td>2/3rd Statutorily Exempt (₹19,333)</td>
                      <td>1/3rd Attachable = ₹9,667</td>
                    </tr>
                    <tr className="bg-blue-50/50 font-bold">
                      <td className="text-blue-950">Total Monthly Salary Attachable</td>
                      <td className="text-blue-950">₹60,000 Total Gross</td>
                      <td className="text-blue-950">₹50,333 Statutorily Protected</td>
                      <td className="text-emerald-700">Maximum ₹9,667 / Month</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>The Mandatory 24-Month Maximum Attachment Limit (Second Proviso)</span>
                </div>
                <p className="leading-relaxed text-amber-800">
                  Under the <strong>second proviso to Section 60(1)(i) CPC</strong>, when any portion of a debtor&apos;s salary has been attached in execution of a decree for a cumulative duration of <strong>24 months</strong>, that salary is granted complete statutory immunity from any further attachment in execution of the same decree. Furthermore, it cannot be attached in execution of any other subsequent decree until a mandatory cooling hiatus of <strong>12 full months</strong> has elapsed. A creditor cannot perpetually garnish an employee&apos;s earnings.
                </p>
              </div>
            </section>

            {/* Section 4: Bank NPA Accounting & NPV Settlement Formula */}
            <section id="bank-accounting-npv-recovery-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Balance Sheet Accounting, NPA Capital Provisioning &amp; The NPV Recovery Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To negotiate effectively against aggressive recovery departments, a borrower must understand how commercial banks evaluate delinquent debts on their balance sheets. When a loan default crosses 90 days of non-payment, Reserve Bank of India (RBI) prudential norms compel the lender to classify the asset as a <strong>Non-Performing Asset (NPA)</strong> under Income Recognition and Asset Classification (IRAC) guidelines.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once an account transitions into NPA status, the bank can no longer recognize unrealized interest as income. More critically, the bank must set aside substantial capital provisions from its operating profits to hedge against default risk as the delinquency ages:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Delinquency Asset Stage</th>
                      <th>Aging Timeline</th>
                      <th>Mandatory RBI Capital Provision</th>
                      <th>Compromise Settlement Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-1 / SMA-2</td>
                      <td>31 – 90 Days Overdue</td>
                      <td>5% General Asset Provision</td>
                      <td>Waiver of Penal Interest &amp; Overdue Charges</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA</td>
                      <td>91 – 365 Days Overdue</td>
                      <td>25% Full Capital Provision</td>
                      <td>35% – 45% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 1 (D1)</td>
                      <td>12 – 24 Months Default</td>
                      <td>100% Capital Lock-in</td>
                      <td>45% – 55% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 2 / Loss Asset</td>
                      <td>24+ Months / Written-Off</td>
                      <td>100% Full Balance Sheet Write-Off</td>
                      <td>55% – 65% Principal Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because pursuing a protracted civil suit through trial and execution takes 2 to 4 years, incurs heavy court fees and advocate retainers, and results in strictly capped Section 60 CPC wage attachments, bank Stressed Asset Resolution Committees evaluate delinquent accounts using the <strong>Net Present Value (NPV) of Recovery</strong> benchmark:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries subject to Section 60 CPC wage caps across time, r is the bank&apos;s internal discount rate, and deductions account for 3–5 years of court friction, advocate retainers, Ombudsman complaint liabilities, and regulatory capital locked in NPA provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a bank compares the discounted present value of multi-year litigation against an immediate upfront lump-sum recovery of 35% to 55% via a structured One-Time Settlement (OTS), the financial committee will almost always approve the settlement to release locked capital and purge bad debts from its balance sheet.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="section-60-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Section 60 CPC Property &amp; Salary Attachment Exemptions: Visual Legal Defense Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below details the structured 5-pillar statutory defense and debt resolution architecture through which borrowers transition from unlawful collection threats to complete debt extinguishment under a legally verified One-Time Settlement.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/section-60-cpc-salary-property-attachment-exemptions.jpg"
                  alt="Section 60 CPC Property and Salary Attachment Exemptions Legal Shield Guide"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Pillars 1–2: Absolute Exemptions &amp; Wage Shield</span>
                  <span>Invoke non-attachable status for PF, Gratuity, Pension, LIC, Stridhan, and the Section 60(1)(i) salary formula.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Pillars 3–4: Tools of Trade &amp; NPV Accounting</span>
                  <span>Protect livelihood assets and leverage the bank&apos;s NPA provisioning burden to force realistic OTS compromise values.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Pillar 5: Advocate-Led 55% OTS &amp; ₹0 NDC</span>
                  <span>Conclude institutional compromise settlement with official bank-stamped zero-balance No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: 4-Stage Advocate Defense Protocol */}
            <section id="four-stage-advocate-defense-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. The 4-Stage Advocate Defense Protocol Against Unlawful Execution &amp; Recovery Harassment
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When confronting bank civil execution notices or aggressive collection tactics, borrowers cannot afford passive inaction. Retaining experienced debt defense legal counsel ensures an institutional barrier that prevents default judgments and halts illegal harassment:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 1: Forensic Summons Audit &amp; Appearance Filing</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advocates conduct an immediate forensic examination of the court summons (Order 37 Summary Suit or Order 21 Execution Petition). If served under Order 37, counsel files the mandatory Memorandum of Appearance within 10 calendar days to prevent an ex-parte monetary decree.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 2: Section 60 CPC Exemption Objections &amp; Stay Application</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In execution proceedings under Order 21 CPC, advocates file a formal Affidavit of Exemption under Section 60 CPC, demonstrating the protected character of the borrower&apos;s salary, Stridhan, and retirement savings, while moving an urgent stay application under Order XXI Rule 26 CPC.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 3: Cease-and-Desist Notice &amp; RBI Ombudsman Escalation</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If third-party recovery agents visit the borrower&apos;s home, contact employers, or threaten family members, advocates serve an immediate statutory cease-and-desist notice on the bank&apos;s Managing Director and lodge an expedited grievance on the <strong>RBI Integrated Ombudsman CMS portal (cms.rbi.org.in)</strong>.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 4: High Court Revision / Writ Intervention</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In cases where an executing court erroneously attaches exempt properties or disregards statutory salary caps, counsel files an urgent Civil Revision Petition under Section 115 CPC or a Writ Petition under Article 226/227 before the High Court to set aside the attachment.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Confidential 45%-65% OTS Structuring */}
            <section id="confidential-ots-structuring" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Negotiating a Discretionary 45%–65% One-Time Settlement (OTS)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The ultimate goal of debt defense is permanently extinguishing civil liability through an institutional <strong>One-Time Settlement (OTS)</strong>. An OTS is a consensual, legally binding compromise contract wherein the lender accepts a discounted lump sum or structured installment payment to close the loan account in full and final satisfaction of all claims.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our specialized banking advocates structure OTS negotiations directly with the bank&apos;s Zonal Settlement Committee, incorporating essential strategic safeguards:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>Deep Principal Haircuts</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We secure complete 100% waivers of all accumulated penal interest, late fees, and legal expenses, alongside a <strong>45% to 65% reduction on the principal ledger balance</strong> based on default vintage.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span>Hardship Dossier Preparation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We compile documented evidence of bona fide distress—such as medical crises, business insolvency, or family dependency—to satisfy internal bank auditing criteria for discretionary compromises.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Litigation Withdrawal Covenants</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The settlement terms obligate the bank to formally withdraw all pending civil suits, Section 138 NI Act complaints, and execution petitions before the court upon settlement payment.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span>Staggered Payment Terms</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Where immediate single-shot lump-sum remittance is unfeasible, we structure the compromised sum across 2 to 4 manageable monthly installments aligned with your financial capacity.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Letter Forensics & RBI NDC Mandate */}
            <section id="sanction-forensics-rbi-ndc-mandate" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Sanction Letter Forensics, Direct Remittance, RBI ₹0 NDC Mandate &amp; Bureau Trajectory
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A critical hazard in loan resolution is falling victim to unauthorized settlement promises manufactured by rogue recovery agents. Unscrupulous tele-callers frequently fabricate fake discount letters to collect partial payments that are subsequently misapplied toward overdue penal fees rather than settling the loan. Borrowers must never disburse settlement funds until the approval letter passes rigorous forensic verification.
              </p>
              
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The 4 Essential Forensic Checkpoints of an Authentic OTS Letter</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-800 list-disc pl-4">
                  <li><strong>Official Bank Letterhead &amp; Central Reference:</strong> The letter must be issued on official bank stationery containing a verifiable central reference number and the signature of an authorized Zonal/Scale-IV Manager.</li>
                  <li><strong>Unambiguous Account &amp; PAN Details:</strong> The document must explicitly state your full legal name, PAN card number, and exact 16-digit loan account number.</li>
                  <li><strong>Absolute Debt Extinguishment Recital:</strong> The agreement must explicitly declare that upon receipt of the agreed compromised amount, all remaining principal, interest, and legal claims stand completely extinguished.</li>
                  <li><strong>Direct Loan Account Remittance:</strong> Payment must be made strictly via direct RTGS/NEFT to your specific loan account number or an official bank-stamped demand draft, never to third-party collection accounts.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Circular RBI/2023-24/60: Mandatory ₹0 NDC Delivery &amp; ₹5,000/Day Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Under <strong>RBI Circular RBI/2023-24/60</strong>, all commercial banks and NBFCs are legally mandated to deliver a formal <strong>No Dues Certificate (NDC) / Loan Closure Letter</strong> and update credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) within <strong>30 calendar days</strong> of receiving the agreed settlement sum. If a bank fails to issue the NDC within 30 days, the lender is legally required to pay a mandatory statutory penalty of <strong>₹5,000 for each day of delay</strong> directly to the borrower.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Credit Bureau Trajectory &amp; Score Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following settlement, the bank updates credit bureau records with the status remark <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong> with a current outstanding balance of <strong>₹0</strong>. While this results in a temporary credit score dip of 70 to 120 points, it completely eliminates default compounding and permanently closes all legal risk. By obtaining a secured fixed-deposit credit card, keeping credit utilization below 30%, and maintaining timely utility payments, settled borrowers systematically rebuild their credit score back above 750 within 18 to 24 months.
              </p>
            </section>

            {/* Section 9: Comparative Legal Matrix */}
            <section id="comparative-legal-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Legal Matrix: Recovery Threats vs. Order 21 Attachment vs. Section 60 CPC vs. OTS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating the legal reality versus recovery agent threats enables borrowers to make confident, strategic decisions regarding asset defense and debt resolution:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Pathway</th>
                      <th>Legal Authority &amp; Scope</th>
                      <th>Impact on Salary &amp; Assets</th>
                      <th>Enforcement Timeline</th>
                      <th>Final Legal Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Unlawful Recovery Agent Threats</td>
                      <td>Zero Legal Authority (Illegal Tort &amp; Harassment)</td>
                      <td>Zero Legal Attachment Power; Null &amp; Void</td>
                      <td>Immediate / Coercive</td>
                      <td>Subject to RBI Ombudsman Penalties &amp; Injunctions</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Execution (Order 21 CPC)</td>
                      <td>Judicial Money Decree Following Full Trial</td>
                      <td>Section 60(1)(i) Caps Apply; Allowances &amp; Stridhan Exempt</td>
                      <td>2 – 4 Years</td>
                      <td>Strict 24-month execution limit with 12-month hiatus</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 60 CPC Statutory Shield</td>
                      <td>Mandatory Legislative Exemption Framework</td>
                      <td>100% Protection for PF, Gratuity, Pension, LIC &amp; Tools</td>
                      <td>Immediate Application</td>
                      <td>Complete statutory bar preventing creditor attachment</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led 55% OTS</td>
                      <td>Consensual Institutional Compromise Agreement</td>
                      <td>100% Protection; Complete Debt Extinguishment</td>
                      <td>15 – 30 Days</td>
                      <td>Bank-stamped ₹0 No Dues Certificate &amp; Case Withdrawal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Debt Resolution Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Defending borrowers against aggressive banking litigation requires seasoned legal advocates who master the nuances of Section 60 CPC statutory exemptions, Order XXI execution procedures, Reserve Bank of India Fair Practices Codes, and institutional debt restructuring. SettleLoans provides complete, confidential legal protection across India: serving formal cease-and-desist notices to stop harassment, filing Section 60 CPC exemption briefs before civil courts, escalating violations to the RBI Banking Ombudsman, and negotiating directly with bank zonal committees to secure 45% to 65% principal haircuts backed by official No Dues Certificates.
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
                  11. Frequently Asked Questions: Section 60 CPC Property &amp; Salary Attachment
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to critical questions regarding Section 60 CPC exemptions, salary attachment limits, Stridhan protection, and bank debt resolution.
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
                  <span className="font-semibold text-slate-800">Code of Civil Procedure, 1908 (Section 60 &amp; Order XXI)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Reserve Bank of India – Master Direction on Fair Practices Code</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://epfindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Employees&apos; Provident Funds &amp; MP Act, 1952 (Section 10 Immunity)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Portal (Illegal Recovery Harassment)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Stridhan &amp; Section 60 Public Policy Precedents)</span>
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
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Guide
                </Link>
                <Link
                  href="/government-employee-loan-default-salary-attachment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Government Employee Salary Attachment
                </Link>
                <Link
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Freeze Salary Account
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Bank Seize Property for Personal Loan
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go to Jail for Loan Default
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Recovery Harassment Complaint
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Guide
                </Link>
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply Guide
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Lok Adalat Loan Settlement
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
                  <Link href="/authors/ashish-jhangra" className="font-bold text-slate-900 text-sm hover:text-[#1F5EFF] transition-colors block">
                    Ashish Jhangra
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior specialist in civil debt litigation, Section 60 CPC statutory attachment exemptions, Order XXI defense, and institutional One-Time Settlement negotiations across India.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Legal Author</span>
                </span>
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-[#1F5EFF] hover:underline font-bold flex items-center gap-0.5"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Statutory Civil Shield</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Are Banks Threatening Court Attachment?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let recovery agents intimidate your family or threaten to attach your salary. Retain senior civil debt advocates to invoke Section 60 CPC exemptions and negotiate a 45%–65% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Protect Your Assets Now
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
                  <span>Section 60 CPC Statutory Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Order XXI Court Exemption Defense</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Compromise Settlement</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
