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
  Briefcase,
  Mail,
  UserX,
  ArrowUpRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Lok Adalat Order Non-Compliance by Bank | SettleLoans',
  description: 'Bank refusing to honor Lok Adalat settlement order? Learn how to enforce Section 21 decree execution and obtain your NDC with SettleLoans.',
  keywords: [
    'what to do if bank does not follow lok adalat settlement',
    'lok adalat award execution section 21 lsa act',
    'bank not giving ndc after lok adalat payment',
    'cibil overdue after lok adalat settlement',
    'order 21 cpc execution of lok adalat award',
    'section 21 legal services authorities act decree',
    'bank recovery agent calling after lok adalat settlement',
    'rbi 5000 per day penalty ndc delay lok adalat',
    'how to force bank to close loan after lok adalat order',
    'lok adalat award final and binding section 21',
    'contempt or execution petition against bank for lok adalat order',
    'rbi banking ombudsman complaint lok adalat non compliance'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/lok-adalat-order-non-compliance-by-bank',
  },
  openGraph: {
    title: 'What to Do If Bank Does Not Follow Lok Adalat Settlement? Execution & Legal Remedies',
    description: 'Enforce your Lok Adalat settlement order against non-compliant banks. Understand Section 21 LSA Act deemed civil court decrees, Order 21 CPC execution petitions, RBI ₹5,000/day NDC delay penalties, and CIBIL correction.',
    url: 'https://www.settleloans.in/lok-adalat-order-non-compliance-by-bank',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/lok-adalat-order-non-compliance-by-bank.jpg',
        width: 1200,
        height: 675,
        alt: 'What to Do If Bank Does Not Follow Lok Adalat Settlement Order Infographic Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Do If Bank Does Not Follow Lok Adalat Settlement Order? Legal Execution Guide',
    description: 'Paid your agreed Lok Adalat settlement but the bank delayed your NDC or continues reporting overdue on CIBIL? Discover your statutory enforcement rights under Section 21 LSA Act.',
    images: ['https://www.settleloans.in/images/infographics/lok-adalat-order-non-compliance-by-bank.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/lok-adalat-order-non-compliance-by-bank#webpage",
      "url": "https://www.settleloans.in/lok-adalat-order-non-compliance-by-bank",
      "name": "What to Do If Bank Does Not Follow Lok Adalat Settlement Order? Section 21 LSA Act Execution Guide",
      "description": "Comprehensive legal and procedural guide for borrowers when a bank fails to comply with a Lok Adalat settlement award, delays the No Dues Certificate, or misreports credit status to CIBIL.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/lok-adalat-order-non-compliance-by-bank#breadcrumb"
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
      "@id": "https://www.settleloans.in/lok-adalat-order-non-compliance-by-bank#breadcrumb",
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
          "name": "Lok Adalat Non-Compliance Defense",
          "item": "https://www.settleloans.in/lok-adalat-order-non-compliance-by-bank"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/lok-adalat-order-non-compliance-by-bank#article",
      "headline": "What to Do If Bank Does Not Follow Lok Adalat Settlement Order: Section 21 LSA Act Execution, NDC Issuance & CIBIL Dispute Resolution",
      "description": "An exhaustive analytical and statutory examination of borrower legal remedies when commercial lenders or NBFCs fail to honor Lok Adalat settlement awards. Explains Section 21 of the Legal Services Authorities Act, Civil Court Execution under Order 21 CPC, RBI Circular RBI/2023-24/60 penalty mandates, and CIBIL rectification protocols.",
      "image": "https://www.settleloans.in/images/infographics/lok-adalat-order-non-compliance-by-bank.jpg",
      "datePublished": "2026-09-01T10:00:00+05:30",
      "dateModified": "2026-09-01T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/lok-adalat-order-non-compliance-by-bank#webpage"
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
      "@id": "https://www.settleloans.in/lok-adalat-order-non-compliance-by-bank#service",
      "name": "SettleLoans - Lok Adalat Award Enforcement & Banking Dispute Resolution",
      "description": "Specialized banking litigation advocacy and post-settlement legal enforcement. Representing borrowers in executing Lok Adalat decrees under Order 21 CPC, compelling bank NDC issuance, securing RBI delay compensation, and correcting credit bureau records.",
      "url": "https://www.settleloans.in/lok-adalat-order-non-compliance-by-bank",
      "image": "https://www.settleloans.in/images/infographics/lok-adalat-order-non-compliance-by-bank.jpg",
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
        "reviewCount": "2410",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Devendra Rathore"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "I paid the ₹2.4 Lakhs Lok Adalat settlement on time. But the bank delayed my NDC for 4 months. Recovery calls started again. SettleLoans stepped in fast. They filed an Execution Petition under Section 21 LSA Act. They also alerted the RBI Ombudsman. The bank issued my NDC and paid ₹25,000 in delay payout.",
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
          "datePublished": "2026-06-20",
          "reviewBody": "After a Lok Adalat award, the bank still showed ₹4.8 Lakhs overdue on CIBIL. My loan was rejected. SettleLoans sent a legal notice under Section 21(2). They filed a CICRA dispute. In 3 weeks, CIBIL showed 'Settled' with ₹0 balance.",
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
            "name": "Prateek Mukherjee"
          },
          "datePublished": "2026-08-08",
          "reviewBody": "An NBFC claimed the Lok Adalat order was just advice. They asked for ₹65,000 extra. SettleLoans cited the Supreme Court Jalour Singh ruling. The lender dropped the demand. They issued my NDC in 10 days.",
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
            "name": "Harpreet Kaur"
          },
          "datePublished": "2026-05-11",
          "reviewBody": "Great legal help! When the bank delayed my Lok Adalat award, SettleLoans sent a notice to the Nodal Officer. They drafted a civil execution plea. The bank resolved everything quickly.",
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
      "@id": "https://www.settleloans.in/lok-adalat-order-non-compliance-by-bank#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the legal status of a Lok Adalat settlement award under Indian law?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 21(1) LSA Act, 1987, a Lok Adalat award is a Civil Court decree. Under Section 21(2), it is final and binding. No appeal lies against it."
          }
        },
        {
          "@type": "Question",
          "name": "What can I do if the bank refuses to follow the Lok Adalat settlement order?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "File an Execution Petition under Order 21 CPC in Civil Court. The court can attach bank accounts. You can also file a complaint with the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank demand additional interest or charges after a Lok Adalat settlement award is passed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The loan merges into the court award once signed. The bank cannot demand extra interest, penal fees, or dues."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank appeal against a Lok Adalat award in a higher court?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No appeal lies against it under Section 21(2) LSA Act. In Jalour Singh, the Supreme Court held awards can only be challenged on proof of fraud."
          }
        },
        {
          "@type": "Question",
          "name": "What is the RBI timeline for the bank to issue a No Dues Certificate after Lok Adalat payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, banks must return papers and issue an NDC within 30 days. Delays carry a ₹5,000 per day fine."
          }
        },
        {
          "@type": "Question",
          "name": "Why is my CIBIL score still showing 'Overdue' or 'Written Off' after Lok Adalat settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Banks often delay credit updates. Under CICRA 2005, lenders must update records to 'Settled' with ₹0 balance within 30 days. You can file a CIBIL dispute and complain to the RBI."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents contact me after a Lok Adalat settlement is executed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Recovery calls after settlement breach the court award and RBI rules. You can send a legal notice and file a police complaint."
          }
        },
        {
          "@type": "Question",
          "name": "In which court should the Execution Petition for a Lok Adalat award be filed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "File the Execution Petition in the Civil Court that referred the case. Or file where the bank branch operates."
          }
        },
        {
          "@type": "Question",
          "name": "What evidence is required to enforce a Lok Adalat settlement order?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You need a certified Lok Adalat Award copy with court stamps. You also need payment receipts, bank statements. And the settlement letter."
          }
        },
        {
          "@type": "Question",
          "name": "Can the Civil Court attach the bank's property or bank accounts if they disobey the Lok Adalat award?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under Order 21 Rules 30, 43, and 46 CPC, the Civil Court can attach bank accounts. It can seize assets to enforce the decree."
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
  { id: 'lok-adalat-breach-crisis', title: '1. The Post-Settlement Breach Crisis' },
  { id: 'section-21-lsa-act-binding-decree', title: '2. Section 21 LSA Act: Deemed Civil Decree' },
  { id: 'order-21-cpc-civil-execution', title: '3. Executing Award Under Order 21 CPC' },
  { id: 'bank-accounting-npv-dynamics', title: '4. Bank Accounting & NPV Recovery Equation' },
  { id: 'lok-adalat-enforcement-roadmap', title: '5. Visual Judicial Enforcement Roadmap' },
  { id: 'emergency-4-stage-compliance-protocol', title: '6. The 4-Stage Compliance Legal Protocol' },
  { id: 'cibil-bureau-rectification-ndc', title: '7. CIBIL Bureau Repair & ₹0 Balance Rectification' },
  { id: 'sanction-forensics-rbi-penalty', title: '8. Sanction Forensics & RBI ₹5,000/Day Delay Penalty' },
  { id: 'comparative-judicial-remedies-matrix', title: '9. Comparative Enforcement Remedies Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Lok Adalat Enforcement Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function LokAdalatOrderNonCompliancePage() {
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
            <Gavel className="w-3.5 h-3.5" />
            <span>Lok Adalat Judicial Enforcement • Section 21 LSA Act &amp; Civil Decree Execution</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Bank Non-Compliance with Lok Adalat Order: Remedies</h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
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
              <span>Legal Services Authorities Act &amp; RBI Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Enforce Lok Adalat Order Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Consult Banking Litigation Advocate
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
                A Lok Adalat award is a civil decree under Section 21 LSA Act. If a bank delays your NDC, it breaks the law. You can execute the decree under Order 21 CPC. You can also claim ₹5,000 daily RBI fines.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Enforcing Lok Adalat Awards Against Non-Compliant Banks</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Civil Decree:</strong> Under Section 21(1) LSA Act, 1987, a Lok Adalat award is a Civil Court decree. It has full legal force.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Absolute Finality:</strong> Section 21(2) makes every award final. Banks cannot add fees or file appeals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Order 21 CPC Execution:</strong> If the bank delays your NDC, file an Execution Petition. The court can attach bank accounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI ₹5,000 Daily Penalty:</strong> Under RBI Circular RBI/2023-24/60, banks must return papers in 30 days. Delays mandate ₹5,000 daily fines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory CIBIL Update:</strong> Lenders must update credit records to &apos;Settled&apos. with a ₹0 balance within 30 days under CICRA rules.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Post-Settlement Breach Crisis */}
            <section id="lok-adalat-breach-crisis" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Post-Settlement Breach Crisis</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lok Adalats resolve loan disputes quickly in India. Borrowers and banks sign a settlement before a judge. The bench passes a binding Lok Adalat Award. The borrower pays the agreed sum on time. In return, the bank closes the loan. It must issue a No Dues Certificate (NDC) and return property papers.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Yet many borrowers face delays after paying. Bank branches often fail to issue the NDC. Core banking systems keep adding interest. Recovery agents call again. Credit bureaus like CIBIL still show the loan as overdue or written off.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This happens when branch staff fail to update central teams. They do not upload the judicial award. The system then treats the waived sum as bad debt. Callers claim the award was only temporary.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lenders cannot alter or cancel a Lok Adalat award. The law gives your award the force of a civil decree. You can use court powers to force bank action and claim fines.
              </p>
            </section>

            {/* Section 2: Statutory Binding Nature: Section 21 of the Legal Services Authorities Act, 1987 */}
            <section id="section-21-lsa-act-binding-decree" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Statutory Supremacy</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To enforce a settlement, you must know the Legal Services Authorities (LSA) Act, 1987. A Lok Adalat is not just a mediation panel. It is a statutory judicial body set up by Parliament.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Section 21 of the LSA Act, 1987 sets two core legal rules:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/60 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-blue-950 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 21(1): Deemed Civil Court Decree</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Section 21(1) states every Lok Adalat award is a Civil Court decree. Once signed, it holds full executable power like a regular court order.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/60 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-indigo-950 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-indigo-600" />
                    <span>Section 21(2): Finality &amp; Total Bar on Appeals</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Section 21(2) makes every award final and binding on all parties. No appeal lies in any court. This stops banks from reopening cases.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Landmark Supreme Court Jurisprudence on Lok Adalat Finality</span>
                </div>
                <p className="leading-relaxed text-slate-700">
                  The Supreme Court has confirmed the power of Lok Adalat awards in key rulings:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-4">
                  <li><strong>State of Punjab &amp. Anr. v. Jalour Singh &amp. Ors. (2008) 2 SCC 660:</strong> The Supreme Court ruled that awards are final. No appeal lies against them. They can only be challenged under Article 226/227 on proof of fraud.</li>
                  <li><strong>K.N. Govindan Kutty Menon v. C.D. Shaji (2012) 2 SCC 51:</strong> The Supreme Court held that cheque bounce cases settled in Lok Adalat become civil decrees executable under the CPC.</li>
                  <li><strong>P.T. Thomas v. Thomas Job (2005) 6 SCC 478:</strong> The court held that Lok Adalat awards have statutory finality and close all original claims.</li>
                </ul>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a bank manager delays compliance, the bank breaches a court decree. The court award replaces the old loan contract.
              </p>
            </section>

            {/* Section 3: Civil Procedure Enforcement: Executing the Award Under Order 21 CPC */}
            <section id="order-21-cpc-civil-execution" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Civil Court Execution Proceedings</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A Lok Adalat award is a civil decree. You can enforce it under Order 21 of the Code of Civil Procedure (CPC), 1908. Borrowers who pay on time have the right to file execution petitions against non-compliant banks.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a bank withholds an NDC, your lawyer files an Execution Petition in Civil Court. Order 21 CPC provides strong tools:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-blue-600" />
                    <span>Specific Performance of Mandatory Injunctions (Order 21 Rule 32 CPC)</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank refuses to issue an NDC, the court acts under Rule 32. It can attach bank assets or seize original property deeds.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Landmark className="w-4 h-4 text-indigo-600" />
                    <span>Attachment of Bank Branch Operating Accounts (Order 21 Rule 43 &amp; 46 CPC)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a bank took extra money, the court issues a Garnishee Order. This freezes the bank branch&apos;s RBI account until the decree is paid.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-purple-600" />
                    <span>Territorial Jurisdiction of the Executing Court</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Sections 38 and 39 CPC, file the petition where the case started. Or file where the bank branch is located.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Filing an Execution Petition brings fast results. Banks do not want their accounts attached over simple closure delays.
              </p>
            </section>

            {/* Section 4: Bank Accounting Dynamics, Provisioning Reversals & The NPV Recovery Equation */}
            <section id="bank-accounting-npv-dynamics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank Accounting Realities in Lok Adalat Awards</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Bank accounting rules show why settlements happen. Loans in Lok Adalat are Non-Performing Assets (NPAs) past 90 days. Under RBI rules, banks must set aside cash reserves:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>NPA Classification Category.</th>
                      <th>Overdue Aging Timeline.</th>
                      <th>Mandatory RBI Capital Provision.</th>
                      <th>Balance Sheet Impact Upon Lok Adalat Settlement.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Sub-Standard NPA.</td>
                      <td>91 to 365 Days Overdue.</td>
                      <td>15% Secured / 25% Unsecured.</td>
                      <td>Bank frees locked capital and adds it back to profits.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful Asset 1 (D1).</td>
                      <td>1 to 2 Years as NPA.</td>
                      <td>25% to 40% Secured / 100% Unsecured.</td>
                      <td>Bank recovers capital and clears bad debt.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful Asset 2 / Loss Asset.</td>
                      <td>2+ Years or Declared Loss.</td>
                      <td>100% Full Provision / Technical Write-off.</td>
                      <td>Every rupee collected counts directly as net profit.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you pay, the bank gains instant cash. It reverses bad debt reserves right away.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks use the Net Present Value (NPV) formula. They compare quick cash with slow court trials:
              </p>

              {/* JSX Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here C_t is expected cash flow. Rate r is the bank&apos;s cost of capital. Deductions cover court fees, delays, locked funds, and RBI fines.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The bank has already booked its balance sheet gains. Withholding your NDC or harming your CIBIL score is illegal. Courts and the RBI treat this delay as a major failure.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="lok-adalat-enforcement-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Visual Judicial Roadmap</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This roadmap shows how to enforce your Lok Adalat award. Follow these legal steps to get your NDC, fix CIBIL records. And claim RBI delay fines.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/lok-adalat-order-non-compliance-by-bank.jpg"
                  alt="What to Do If Bank Does Not Follow Lok Adalat Settlement Order Legal Execution Roadmap"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Award &amp; Breach Tracking</span>
                  <span>Get your certified Lok Adalat Award under Section 21 LSA Act. Pay on time and track the 30-day window.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Advocate Notice &amp; Execution</span>
                  <span>Send a legal notice to the Nodal Officer. File an Order 21 CPC petition and an RBI Ombudsman plea.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: NDC Delivery &amp; CIBIL Zero</span>
                  <span>Receive your No Dues Certificate. Collect ₹5,000 per day delay fines. Update CIBIL to Settled.</span>
                </div>
              </div>
            </section>

            {/* Section 6: The 4-Stage Legal Protocol to Compel Bank Compliance */}
            <section id="emergency-4-stage-compliance-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. The 4-Stage Legal Protocol to Compel Immediate Bank</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Visiting the branch rarely solves delays. Advocates use a 4-stage legal plan to force compliance:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 1: Forensic Verification of Compliance &amp; Certified Award Compilation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Gather your proof: certified Lok Adalat Award with court seals, payment receipts. And settlement letter.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 2: Serving Advocate Legal Notice for Civil Decree Disobedience</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your lawyer sends a notice to the bank MD and Nodal Officer. It cites Section 21 LSA Act and gives <strong>15 business days</strong> to act.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 3: Escalation to the RBI Integrated Banking Ombudsman</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank ignores the notice, lodge a complaint on the <strong>RBI CMS portal (cms.rbi.org.in)</strong>. The Ombudsman can order fast loan closure and damages.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 4: Filing Execution Petition Under Order 21 CPC in Civil Court</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your counsel files an Execution Petition under Order 21 CPC. The Civil Court can attach bank branch accounts and order property return.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This legal plan forces senior bank officers to act without delay.
              </p>
            </section>

            {/* Section 7: Resolving CIBIL Bureau Violations */}
            <section id="cibil-bureau-rectification-ndc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Resolving CIBIL Bureau Violations</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Bank delays can hurt your credit score. Lenders often fail to update credit bureaus. CIBIL, Experian, and Equifax may still show overdue debt.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the <strong>Credit Information Companies (Regulation) Act (CICRA), 2005</strong>, lenders must update credit bureaus every 30 days:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Mandatory &quot;Settled&quot; Status Remark</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The account status must change to <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong>. This closes the trade-line and stops negative remarks.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Absolute Zero (₹0) Current Balance</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The current balance and overdue amount <strong>must show ₹0</strong>. Showing overdue sums violates Section 21 of CICRA.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lawyers file CIBIL disputes with the Lok Adalat award attached. Under CICRA Section 21, bureaus must fix records within 30 days. If the bank delays, the RBI Ombudsman awards payout.
              </p>
            </section>

            {/* Section 8: Sanction Forensics, Mandated Timelines & RBI Delay Penalties */}
            <section id="sanction-forensics-rbi-penalty" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Sanction Forensics, Mandated Timelines</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                You must know your legal timelines. The Reserve Bank of India sets strict rules against bank delays.
              </p>
              
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Circular RBI/2023-24/60: 30-Day Mandatory Release &amp; ₹5,000/Day Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Under <strong>RBI Circular RBI/2023-24/60</strong>, all banks, NBFCs, and HFCs must:
                </p>
                <ul className="space-y-1.5 text-xs text-emerald-900 list-disc pl-4">
                  <li>Release all original property documents within <strong>30 calendar days</strong> of full settlement.</li>
                  <li>Issue an official <strong>No Dues Certificate (NDC)</strong> confirming zero remaining liability.</li>
                  <li>Pay payout of <strong>₹5,000 per day of delay</strong> beyond 30 days directly to the borrower.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The 4 Forensic Checkpoints of an Authentic No Dues Certificate</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-800 list-disc pl-4">
                  <li><strong>Official Bank Letterhead &amp. Reference Number:</strong> Must have registered letterhead, official reference numbers. And branch contact details.</li>
                  <li><strong>Unambiguous Recital of Full Satisfaction:</strong> Must state the loan is closed under the Lok Adalat award with zero remaining dues.</li>
                  <li><strong>Authorized Signatory Seal:</strong> Must carry the seal and signature of an authorized bank manager with employee code.</li>
                  <li><strong>Indemnity &amp. Collateral Release Clause:</strong> Must confirm the removal of mortgage charges and satisfaction on CERSAI.</li>
                </ul>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If your bank delays your NDC beyond 30 days, claim your ₹5,000 daily penalty. Advocates help recover these funds through nodal officers and the Ombudsman.
              </p>
            </section>

            {/* Section 9: Comparative Judicial Remedies Matrix */}
            <section id="comparative-judicial-remedies-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Lok Adalat Non-Compliance Defense Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Compare available legal routes to enforce your Lok Adalat settlement:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Enforcement Channel.</th>
                      <th>Governing Statutory Law.</th>
                      <th>Procedural Complexity.</th>
                      <th>Typical Resolution Timeline.</th>
                      <th>Ultimate Remedy Delivered.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate Statutory Legal Notice.</td>
                      <td>Section 21 LSA Act &amp. Contract Act.</td>
                      <td>Direct notice to PNO &amp. MD.</td>
                      <td>7 to 15 Business Days.</td>
                      <td>Fast branch action, loan closure, and NDC issuance.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Banking Ombudsman.</td>
                      <td>RBI Integrated Ombudsman Scheme, 2021.</td>
                      <td>Online portal grievance with award proof.</td>
                      <td>30 to 45 Calendar Days.</td>
                      <td>RBI order forcing NDC, CIBIL fix. And delay fines.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Execution (Order 21 CPC).</td>
                      <td>Order 21 Rules 30, 32 &amp. 46 CPC.</td>
                      <td>Execution petition before Civil Judge.</td>
                      <td>2 to 4 Months.</td>
                      <td>Court attaches bank accounts and executes the decree.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Contempt actions (High Court).</td>
                      <td>Contempt of Courts Act, 1971 / Art. 226.</td>
                      <td>High Court writ for judicial disobedience.</td>
                      <td>3 to 6 Months.</td>
                      <td>Court fines against bank management and damages.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Lok Adalat Award Enforcement</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Enforcing a Lok Adalat order takes skilled legal help. SettleLoans protects borrowers across India. We serve notices on bank executives. We file execution petitions under Order 21 CPC. We win ₹5,000 daily delay fines from the RBI. We also update CIBIL records to a ₹0 balance.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Bank Non-Compliance with Lok Adalat Orders</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to critical questions regarding Lok Adalat awards, civil decree executions, No Dues Certificates. And credit bureau rectifications in India.
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
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (NALSA) – Lok Adalat Regulations</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/1942"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Legal Services Authorities Act, 1987 (Section 19, 20 &amp; 21 Statutory Text)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Non-Compliance &amp; Delay Grievances)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in/Scripts/BS_CircularIndexDisplay.aspx?Id=12534"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Circular RBI/2023-24/60 (Release of Property Documents &amp; ₹5,000/Day Penalty)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Jalour Singh &amp; Govindan Kutty Menon Precedents)</span>
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
                  href="/case-study-sbi-lok-adalat-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SBI Lok Adalat Settlement Case Study
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/bank-delaying-original-property-documents-after-home-loan-settlement-rbi-rules"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  RBI ₹5,000/Day Property Delay Penalty
                </Link>
                <Link
                  href="/cibil-dispute-wrong-overdue-entry"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Wrong Overdue Dispute Guide
                </Link>
                <Link
                  href="/case-study-cibil-status-settled-to-closed"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Settled to Closed Case Study
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Arbitration Notice Reply
                </Link>
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Defense
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Recovery Harassment
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go to Jail for Loan Default?
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy &amp; Haircut Rules
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
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Ashish Jhangra is a senior banking litigation strategist. He specializes in Lok Adalat award execution under Section 21 LSA Act, Order 21 CPC actions, and RBI Ombudsman complaints.
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
                <Gavel className="w-4 h-4" />
                <span>Lok Adalat Order Enforcement</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Bank Delaying Your NDC or Misreporting CIBIL?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Enforce your Lok Adalat settlement with senior banking advocates. We execute civil court decrees, claim ₹5,000 per day RBI fines. And secure ₹0 loan closure.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Enforce Lok Adalat Decree Now
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Section 21 LSA Act Deemed Decree</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gavel className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Order 21 CPC Civil Execution</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>RBI ₹5,000/Day Delay Penalty Claims</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>CIBIL Bureau ₹0 Rectification</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
