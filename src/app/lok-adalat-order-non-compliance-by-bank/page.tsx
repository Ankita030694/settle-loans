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
          "reviewBody": "I paid the full Lok Adalat compromise amount of ₹2.4 Lakhs to my private bank within the agreed 30 days. However, the branch manager sat on my file for 4 months, refused to issue the No Dues Certificate, and recovery agents started calling again. SettleLoans stepped in, filed an Execution Petition citing Section 21 of the LSA Act, and lodged an RBI Ombudsman complaint. The bank immediately handed over the NDC, closed the CIBIL account, and paid ₹25,000 in statutory delay compensation.",
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
          "reviewBody": "After getting a National Lok Adalat award for my personal loan, the bank continued reporting a ₹4.8 Lakh 'Written Off' balance on my CIBIL report, causing my home loan application to get rejected. SettleLoans served a formal advocate legal notice highlighting Section 21(2) finality and filed an expedited CICRA dispute. Within 3 weeks, CIBIL was updated to 'Settled' with ₹0 outstanding and my credit score jumped by 115 points.",
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
          "reviewBody": "A leading NBFC tried to claim that the Lok Adalat order signed before the judge was only a 'recommendation' and demanded an extra ₹65,000 for penal interest. SettleLoans advocates completely shut down their illegal demand by showing the Supreme Court precedent in the Jalour Singh judgment. The NBFC complied within 10 days and delivered the official stamped NDC.",
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
          "reviewBody": "Outstanding legal support! When the bank branch failed to process my Lok Adalat settlement award, SettleLoans drafted an unassailable notice to the Principal Nodal Officer and initiated civil court execution preparations. The bank resolved everything amicably without needing a prolonged court hearing.",
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
            "text": "Under Section 21(1) of the Legal Services Authorities (LSA) Act, 1987, every award passed by a Lok Adalat is deemed to be a decree of a Civil Court. Under Section 21(2), the award is final and binding on all parties, and no appeal lies to any court against the award."
          }
        },
        {
          "@type": "Question",
          "name": "What can I do if the bank refuses to follow the Lok Adalat settlement order?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If a bank fails to comply with a Lok Adalat order, you can file an Execution Petition under Order 21 of the Code of Civil Procedure (CPC) before the competent Civil Court having territorial jurisdiction. The court can execute the award as its own decree, attach the bank's accounts, or enforce mandatory compliance. Concurrently, you can escalate the non-compliance to the RBI Banking Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank demand additional interest or charges after a Lok Adalat settlement award is passed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Once a Lok Adalat award is signed by the presiding judicial officer and both parties, the original loan contract merges into the judicial award. The bank has zero legal authority to add unbilled interest, penal charges, or collection fees beyond the agreed compromise amount."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank appeal against a Lok Adalat award in a higher court?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No appeal lies against a Lok Adalat award under Section 21(2) of the LSA Act. The Supreme Court of India in State of Punjab v. Jalour Singh held that a Lok Adalat award can only be challenged under very narrow constitutional writ jurisdiction (Articles 226 or 227) on grounds of proven fraud or lack of consent, but not on factual or financial merits."
          }
        },
        {
          "@type": "Question",
          "name": "What is the RBI timeline for the bank to issue a No Dues Certificate after Lok Adalat payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, regulated lending institutions must release all original property documents and issue an official No Dues Certificate within 30 calendar days of receiving full settlement payment. Any failure to comply beyond 30 days incurs a mandatory compensation penalty of ₹5,000 for each day of delay payable directly to the borrower."
          }
        },
        {
          "@type": "Question",
          "name": "Why is my CIBIL score still showing 'Overdue' or 'Written Off' after Lok Adalat settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Credit reporting delays frequently occur because bank operations teams fail to transmit the updated settlement status to credit bureaus. Under the Credit Information Companies (Regulation) Act, 2005, lenders must update the bureau within 30 days to reflect the account as 'Settled' with a current outstanding balance of ₹0. If they fail, an advocate can file an official dispute on CIBIL and escalate to the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents contact me after a Lok Adalat settlement is executed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Any recovery call or visit following compliance with a Lok Adalat award constitutes illegal harassment, contempt of a deemed judicial decree, and a severe violation of the RBI Fair Practices Code. You can immediately serve an advocate cease-and-desist notice and initiate criminal proceedings for intimidation and extortion."
          }
        },
        {
          "@type": "Question",
          "name": "In which court should the Execution Petition for a Lok Adalat award be filed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Execution Petition should be filed before the Civil Court that referred the matter to the Lok Adalat, or before the Principal Civil Court of original jurisdiction in the district where the bank branch is situated or where the borrower resides."
          }
        },
        {
          "@type": "Question",
          "name": "What evidence is required to enforce a Lok Adalat settlement order?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You must preserve a certified copy of the Lok Adalat Award signed by the panel, bank payment receipts or bank account statement reflecting timely remittance into the designated loan account, copy of the formal settlement proposal, and postal delivery receipts of communications sent to the bank."
          }
        },
        {
          "@type": "Question",
          "name": "Can the Civil Court attach the bank's property or bank accounts if they disobey the Lok Adalat award?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under Order 21 Rules 30, 43, and 46 of the CPC, the executing Civil Court possesses wide powers to attach the bank's operating accounts, seize moveable office assets, or issue garnishee orders against the branch to enforce satisfaction of the decree."
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
                A Lok Adalat settlement award possesses the full legal status of a final Civil Court Decree under Section 21 of the Legal Services Authorities Act, 1987. If a bank defaults on issuing your NDC, continues debt collection, or misreports CIBIL, it commits civil disobedience. You can execute the award via Order 21 CPC, attach bank accounts, claim ₹5,000/day RBI delay penalties, and force total debt closure.
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
                  <span><strong>Statutory Force of a Civil Decree:</strong> Under Section 21(1) of the Legal Services Authorities (LSA) Act, 1987, an award passed by a National or Permanent Lok Adalat is legally deemed to be a decree of a Civil Court, carrying identical executable authority.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Absolute Finality &amp; No Appeal:</strong> Section 21(2) of the LSA Act guarantees that Lok Adalat awards are final and binding on both borrower and lender. The bank cannot unilaterally alter agreed sums, impose extra penal interest, or appeal the merits in higher courts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Judicial Execution Under Order 21 CPC:</strong> If the bank fails to issue the No Dues Certificate (NDC) or return collateral, the borrower can initiate an Execution Petition in Civil Court to attach bank accounts or enforce specific judicial performance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI ₹5,000/Day Statutory Penalty:</strong> Under RBI Circular RBI/2023-24/60, lenders must release property papers and deliver an official closure NDC within 30 days of full settlement. Unjustified bank delays mandate a ₹5,000 per day compensation payable to the borrower.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory CIBIL Rectification:</strong> Commercial lenders are statutorily required under the Credit Information Companies Act to update credit bureau records to &quot;Settled&quot; with a ₹0 balance within 30 days, eliminating wrongful overdue reporting.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Post-Settlement Breach Crisis */}
            <section id="lok-adalat-breach-crisis" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Post-Settlement Breach Crisis: When Commercial Lenders Disregard Lok Adalat Awards
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Appearing before a National or State Lok Adalat is widely considered the most conclusive and dignified mechanism for resolving distressed personal loans, credit card defaults, and small business credit facilities in India. After extensive negotiations facilitated by sitting or retired judges and legal aid conciliators, the borrower and the bank&apos;s authorized representative sign a mutually acceptable compromise settlement. The judicial bench formalizes this agreement into a binding Lok Adalat Award, directing the borrower to pay a predetermined reduced sum within a stipulated timeline, upon which the bank must extinguish all claims, issue a No Dues Certificate (NDC), and release any pledged collateral.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For thousands of diligent borrowers across India, however, completing the agreed compromise payment on time does not mark the end of their ordeal. A pervasive institutional breakdown frequently unfolds within bank operations desks: months after full remittance into the designated loan account, the branch manager fails to generate the formal No Dues Certificate, internal operational systems continue calculating compounding interest and penal levies on the waived portion, third-party recovery agencies resume aggressive phone calls, and credit bureaus such as CIBIL, Experian, and Equifax continue displaying an active &quot;Overdue&quot; or &quot;Written-Off&quot; status.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This administrative defiance occurs primarily because the bank&apos;s recovery officers present at the Lok Adalat rarely coordinate effectively with centralized loan processing hubs, asset recovery branches, and credit bureau reporting desks. When local branch personnel fail to upload the signed judicial award into the core banking system (CBS), the compromised ledger balance sits in an open accounting queue. Junior branch managers or outsourced recovery tele-callers treat the remaining waived balance as an ongoing default, misinforming the borrower that the Lok Adalat award was merely an &quot;interim arrangement&quot; or that internal zonal approval was rejected.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers must understand unequivocally that a bank has zero legal discretion to ignore, modify, or unilaterally cancel a settlement formalized before a Lok Adalat. Indian law establishes ironclad statutory protections that convert your Lok Adalat Award into an executable judicial decree, granting you the full power of the civil judiciary to compel immediate banking compliance and secure substantial regulatory compensation.
              </p>
            </section>

            {/* Section 2: Statutory Binding Nature: Section 21 of the Legal Services Authorities Act, 1987 */}
            <section id="section-21-lsa-act-binding-decree" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Supremacy: Section 21 of the Legal Services Authorities Act, 1987 &amp; Deemed Civil Court Decrees
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To understand your legal remedies when a bank fails to comply with a settlement order, one must examine the governing statutory framework established under the <strong>Legal Services Authorities (LSA) Act, 1987</strong>. The Lok Adalat is not an informal mediation panchayat or an advisory forum; it is a statutory judicial institution functioning under legislative mandate to deliver rapid, final, and unappealable dispute resolution.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The core statutory engine governing Lok Adalat settlements is codified under <strong>Section 21 of the Legal Services Authorities Act, 1987</strong>, which establishes two fundamental principles of law:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/60 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-blue-950 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 21(1): Deemed Civil Court Decree</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Section 21(1) enacts a statutory legal fiction stating that <em>&quot;every award of the Lok Adalat shall be deemed to be a decree of a Civil Court or, as the case may be, an order of any other court.&quot;</em> This means that once the award is signed by the panel and the parties, it ceases to be a mere private contract and instantly elevates into a full-fledged judicial decree possessing the identical force, dignity, and executability of a final judgment delivered by a Principal Civil Judge.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/60 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-indigo-950 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-indigo-600" />
                    <span>Section 21(2): Finality &amp; Total Bar on Appeals</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Section 21(2) explicitly provides that <em>&quot;every award made by a Lok Adalat shall be final and binding on all the parties to the dispute, and no appeal shall lie to any court against the award.&quot;</em> The legislative intent is crystal clear: to prevent financial institutions from dragging borrowers through endless appellate litigation after arriving at a mutually agreed compromise.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Landmark Supreme Court Jurisprudence on Lok Adalat Finality</span>
                </div>
                <p className="leading-relaxed text-slate-700">
                  The Supreme Court of India has repeatedly upheld the inviolable sanctity of Lok Adalat awards in landmark decisions:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-4">
                  <li><strong>State of Punjab &amp; Anr. v. Jalour Singh &amp; Ors. (2008) 2 SCC 660:</strong> A three-judge bench held that a Lok Adalat award is final and cannot be challenged by way of an appeal or revision before any court. It can only be questioned under extraordinary writ jurisdiction under Article 226/227 of the Constitution on limited grounds of proven fraud or lack of consensus.</li>
                  <li><strong>K.N. Govindan Kutty Menon v. C.D. Shaji (2012) 2 SCC 51:</strong> The Supreme Court ruled that even if a dispute originated under Section 138 of the Negotiable Instruments Act (cheque bounce) before a criminal magistrate court, when it is settled before a Lok Adalat, the resulting award is deemed to be a Civil Court Decree executable under the Code of Civil Procedure.</li>
                  <li><strong>P.T. Thomas v. Thomas Job (2005) 6 SCC 478:</strong> The Apex Court emphasized that awards passed by Lok Adalats have received the highest statutory recognition to foster finality in commercial and civil litigation, extinguishing all underlying causes of action.</li>
                </ul>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Therefore, when a bank branch manager claims that the Lok Adalat settlement cannot be honored due to internal accounting technicalities, head-office policy changes, or missed internal audit clearances, the bank is committing a direct violation of a binding judicial decree. The original debt agreement is completely superseded by the Lok Adalat Award.
              </p>
            </section>

            {/* Section 3: Civil Procedure Enforcement: Executing the Award Under Order 21 CPC */}
            <section id="order-21-cpc-civil-execution" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Civil Court Execution Proceedings: Enforcing the Award Under Order 21 CPC &amp; Attachment Powers
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because Section 21 of the LSA Act confers the status of a Civil Court Decree upon every Lok Adalat award, the enforcement of that award is governed by the standard execution machinery set forth in <strong>Order 21 of the Code of Civil Procedure (CPC), 1908</strong>. Many borrowers mistakenly believe that only lenders can file execution petitions. Under Indian civil jurisprudence, any decree-holder—including a borrower who has performed their obligations under a compromise decree—holds the full statutory right to initiate execution proceedings against a defaulting judgment-debtor bank.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a bank refuses to issue an official No Dues Certificate, fails to release mortgaged title deeds, or continues collecting unauthorized sums after receiving the agreed settlement amount, the borrower&apos;s advocate files an <strong>Execution Petition (EP)</strong> before the competent Civil Court of original jurisdiction. The legal mechanisms available under Order 21 CPC are exceptionally potent:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-blue-600" />
                    <span>Specific Performance of Mandatory Injunctions (Order 21 Rule 32 CPC)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Where the Lok Adalat Award directs the bank to issue a closure letter, return title documents, or update credit institutions, and the bank wilfully disobeys, the executing court can invoke Order 21 Rule 32 CPC. The court can order the attachment of bank branch assets, appoint a court commissioner to seize and deliver original title deeds, or even order the civil detention of responsible bank officers for deliberate contempt of the decree.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Landmark className="w-4 h-4 text-indigo-600" />
                    <span>Attachment of Bank Branch Operating Accounts (Order 21 Rule 43 &amp; 46 CPC)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank has illegally deducted excess funds from the borrower&apos;s savings account or failed to refund money collected after the Lok Adalat cutoff date, the Civil Court can issue a Garnishee Order under Order 21 Rule 46 CPC. This order directly attaches the bank branch&apos;s own clearing account maintained with the Reserve Bank of India or a designated state clearing house, freezing institutional funds until the decree is satisfied in full.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-purple-600" />
                    <span>Territorial Jurisdiction of the Executing Court</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 38 and 39 of the CPC, the Execution Petition is filed before the Civil Court that originally referred the dispute to the Lok Adalat, or before the Principal Senior Civil Judge within whose territorial jurisdiction the servicing bank branch is located or where the cause of action arose.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The moment an Execution Petition is served on the bank&apos;s legal cell along with a show-cause notice from the Civil Judge, the bank&apos;s internal legal counsel immediately directs the branch manager to comply. No commercial bank or NBFC wants its corporate accounts attached or its branch assets placed under court seal over an administrative delay in issuing a loan closure certificate.
              </p>
            </section>

            {/* Section 4: Bank Accounting Dynamics, Provisioning Reversals & The NPV Recovery Equation */}
            <section id="bank-accounting-npv-dynamics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Accounting Realities: NPA Provisioning Reversals &amp; The NPV Recovery Valuation Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To master post-settlement enforcement, one must look behind the legal curtain and analyze how Indian commercial banks account for Lok Adalat settlements on their balance sheets. When a loan is referred to a Lok Adalat, it has almost always crossed 90 to 180 days of non-payment and sits in the bank&apos;s books as a <strong>Non-Performing Asset (NPA)</strong>. Under RBI Prudential Norms on Income Recognition, Asset Classification, and Provisioning, lenders must lock up substantial risk capital against delinquent portfolios:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>NPA Classification Category</th>
                      <th>Overdue Aging Timeline</th>
                      <th>Mandatory RBI Capital Provision</th>
                      <th>Balance Sheet Impact Upon Lok Adalat Settlement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Sub-Standard NPA</td>
                      <td>91 to 365 Days Overdue</td>
                      <td>15% Secured / 25% Unsecured Provision</td>
                      <td>Capital released; provision written back to Profit &amp; Loss account</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful Asset 1 (D1)</td>
                      <td>1 to 2 Years as NPA</td>
                      <td>25% to 40% Secured / 100% Unsecured</td>
                      <td>Substantial capital adequacy recovery; NPA ledger resolved</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful Asset 2 / Loss Asset</td>
                      <td>2+ Years or Declared Loss</td>
                      <td>100% Full Provision / Technical Write-off</td>
                      <td>100% of collected Lok Adalat sum credited directly as Net Profit</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower pays the agreed Lok Adalat compromise amount, the bank immediately realizes immediate, liquid cash recovery. For accounts in doubtful or written-off buckets, every rupee recovered through the Lok Adalat flows straight into the bank&apos;s quarterly net recovery figures, while previously locked-up capital provisioning is released back into the bank&apos;s lending capacity.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The financial logic that motivated the bank to accept the compromise settlement in the first place is governed by the <strong>Net Present Value (NPV) of Recovery</strong> formula. Bank credit risk committees evaluate stressed loans by comparing the immediate certainty of a Lok Adalat cash settlement against the delayed, friction-heavy alternative of civil litigation:
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
                  Where C_t represents estimated recoverable cash flows over time period t, r is the institutional discount rate (cost of capital), while deductions account for 3 to 7 years of court friction, advocate retainers, regulatory risk from Ombudsman penalties, and capital locked in non-earning NPA provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because the bank has already pocketed the financial benefits of the settlement—reversing its NPA provisioning and boosting its capital metrics—failing to deliver the No Dues Certificate or update CIBIL represents bad faith accounting. Regulators and civil courts view this failure as an egregious operational defect, providing borrowers with undeniable leverage to enforce compliance.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="lok-adalat-enforcement-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Visual Judicial Roadmap: Post-Lok Adalat Award Enforcement Workflow
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below details the structured 5-stage institutional workflow deployed by seasoned banking litigation advocates to enforce Lok Adalat settlement orders, invoke Section 21 deemed civil decree powers, claim statutory RBI delay compensation, and rectify credit bureau records.
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
                  <span>Certified Lok Adalat Award signed under Section 21 LSA Act; timely payment proof documented; 30-day compliance window tracked.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Advocate Notice &amp; Execution</span>
                  <span>Serve statutory compliance notice on Principal Nodal Officer; initiate Order 21 CPC Execution Petition and RBI Ombudsman complaint.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: NDC Delivery &amp; CIBIL Zero</span>
                  <span>Bank releases official ₹0 No Dues Certificate; pays ₹5,000/day delay penalty; CIBIL bureau record updated to Settled/Closed.</span>
                </div>
              </div>
            </section>

            {/* Section 6: The 4-Stage Legal Protocol to Compel Bank Compliance */}
            <section id="emergency-4-stage-compliance-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. The 4-Stage Legal Protocol to Compel Immediate Bank Compliance
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a bank ignores a Lok Adalat order, repeated visits to the local branch or verbal pleading with desk officers will yield nothing but delays. Branch managers often hide behind slow back-office turnaround times. To break this bureaucratic inertia, banking litigation advocates deploy a methodical, 4-stage legal enforcement protocol:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 1: Forensic Verification of Compliance &amp; Certified Award Compilation</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Compile an unassailable evidentiary dossier consisting of: a certified copy of the Lok Adalat Award bearing the court seal and judge signatures, computerized bank counterfoil or NEFT/RTGS transaction reference confirming timely payment into the exact settlement loan account, and the bank&apos;s initial compromise sanction communication. This establishes complete, unblemished borrower compliance.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 2: Serving Advocate Legal Notice for Civil Decree Disobedience</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your advocate drafts and serves a formal Statutory Demand Notice addressed directly to the bank&apos;s Managing Director, Principal Nodal Officer (PNO), and Head of Stressed Assets. The notice cites Section 21 of the LSA Act, the Supreme Court <em>Jalour Singh</em> precedent, and RBI Circular RBI/2023-24/60, giving the bank <strong>15 business days</strong> to deliver the stamped No Dues Certificate, close the account in the Core Banking System, and update credit bureaus.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 3: Escalation to the RBI Integrated Banking Ombudsman</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank fails to rectify the breach within the notice window, an expedited complaint is lodged on the <strong>RBI CMS portal (cms.rbi.org.in)</strong> under the RBI Integrated Ombudsman Scheme, 2021 for &quot;Non-adherence to Lok Adalat Settlement / Deficiency in Service / Delay in Issuance of NDC&quot;. The Ombudsman possesses authority to mandate immediate closure and award substantial monetary compensation for mental harassment.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 4: Filing Execution Petition Under Order 21 CPC in Civil Court</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Concurrently with regulatory escalation, your counsel files an Execution Petition before the Principal Civil Court. The petition prays for a judicial warrant of attachment against the bank&apos;s local operating accounts under Order 21 Rule 46 CPC and directions for the physical delivery of documents under Order 21 Rule 32 CPC, completely dismantling the bank&apos;s resistance.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This multi-pronged legal strategy shifts the dispute from an ignored branch ticket to a high-priority legal emergency monitored by senior bank executives and regulatory oversight teams.
              </p>
            </section>

            {/* Section 7: Resolving CIBIL Bureau Violations */}
            <section id="cibil-bureau-rectification-ndc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Resolving CIBIL Bureau Violations: Enforcing RBI ₹0 Balance Reporting &amp; Score Rehabilitation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                One of the most damaging consequences of bank non-compliance following a Lok Adalat settlement is erroneous credit bureau reporting. Even after receiving full settlement funds, banks often leave the loan record un-updated, leading credit rating agencies like TransUnion CIBIL, Experian, Equifax, and CRIF High Mark to show the account as &quot;Overdue&quot;, &quot;Default&quot;, or &quot;Written-Off&quot; with substantial continuing balances.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the <strong>Credit Information Companies (Regulation) Act (CICRA), 2005</strong>, and RBI Master Directions on Credit Bureau Reporting, lenders are legally obligated to update credit bureau data every 30 days. When a loan is settled through Lok Adalat:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Mandatory &quot;Settled&quot; Status Remark</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The account status must transition from &quot;Default / SMA-2 / NPA&quot; to <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong>. While this reflects a compromise rather than 100% full closure, it legally closes the trade-line and stops further negative remarks.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Absolute Zero (₹0) Current Balance</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The &quot;Current Balance&quot; and &quot;Amount Overdue&quot; fields on your CIBIL report <strong>must strictly reflect ₹0</strong>. If the bank continues reporting the waived balance as overdue, it commits an actionable statutory violation under Section 21 of CICRA.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To rectify an erroneous CIBIL report, legal advocates initiate an official online dispute with CIBIL backed by the certified Lok Adalat Award and payment receipts. Under CICRA Section 21, the credit bureau must resolve the dispute within 30 days. If the bank fails to confirm the zero balance to the bureau within this window, the RBI Banking Ombudsman can award compensation for credit reputation damage.
              </p>
            </section>

            {/* Section 8: Sanction Forensics, Mandated Timelines & RBI Delay Penalties */}
            <section id="sanction-forensics-rbi-penalty" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Sanction Forensics, Mandated Timelines &amp; RBI ₹5,000/Day Delay Penalties
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers must understand the precise regulatory timelines governing post-settlement document return and closure certification in India. The Reserve Bank of India has issued decisive guidelines to curb unfair banking practices regarding loan closure delays.
              </p>
              
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Circular RBI/2023-24/60: 30-Day Mandatory Release &amp; ₹5,000/Day Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Under <strong>RBI Circular RBI/2023-24/60</strong> (Responsible Lending Conduct – Release of Movable/Immovable Property Documents on Repayment/Settlement of Personal Loans), all Commercial Banks, Co-operative Banks, NBFCs, and Housing Finance Companies (HFCs) are statutorily required to:
                </p>
                <ul className="space-y-1.5 text-xs text-emerald-900 list-disc pl-4">
                  <li>Release all original movable and immovable property documents within <strong>30 calendar days</strong> of receiving full repayment or settlement.</li>
                  <li>Issue an unambiguous, official <strong>No Dues Certificate (NDC) / Loan Closure Certificate</strong> confirming zero remaining liability.</li>
                  <li>Pay a mandatory compensation penalty of <strong>₹5,000 for each day of delay</strong> beyond 30 days directly to the borrower, in cases where the delay is attributable to the lender.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The 4 Forensic Checkpoints of an Authentic No Dues Certificate</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-800 list-disc pl-4">
                  <li><strong>Official Bank Letterhead &amp; Reference Number:</strong> Must be issued on registered institutional letterhead with an official reference number, corporate dispatch stamp, and verifiable branch contact details.</li>
                  <li><strong>Unambiguous Recital of Full Satisfaction:</strong> Must explicitly state that the loan account has been closed pursuant to the Lok Adalat Award and that no outstanding balance, interest, or legal claim remains.</li>
                  <li><strong>Authorized Signatory Seal:</strong> Must bear the physical or verified digital signature of an authorized bank manager (Scale-II or above) with their employee code and branch designation.</li>
                  <li><strong>Indemnity &amp; Collateral Release Clause:</strong> For secured loans, must confirm the complete discharge of mortgage charge and cancellation of all liens registered on CERSAI.</li>
                </ul>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If your bank has delayed issuing your No Dues Certificate beyond 30 days after your Lok Adalat payment, you are legally entitled to claim this ₹5,000 per day penalty. Our advocates routinely file formal claims before the Principal Nodal Officer and Banking Ombudsman to recover these statutory delay damages for affected borrowers.
              </p>
            </section>

            {/* Section 9: Comparative Judicial Remedies Matrix */}
            <section id="comparative-judicial-remedies-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Legal Matrix: Enforcement Pathways Against Non-Compliant Banks
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating the different legal channels available to borrowers allows you to select the most efficient strategy to force bank compliance and claim compensation:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Enforcement Channel</th>
                      <th>Governing Statutory Law</th>
                      <th>Procedural Complexity</th>
                      <th>Typical Resolution Timeline</th>
                      <th>Ultimate Remedy Delivered</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate Statutory Legal Notice</td>
                      <td>Section 21 LSA Act &amp; Contract Act</td>
                      <td>Direct advocate notice to PNO &amp; MD</td>
                      <td>7 to 15 Business Days</td>
                      <td>Immediate branch escalation, account closure &amp; NDC issuance</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Banking Ombudsman</td>
                      <td>RBI Integrated Ombudsman Scheme, 2021</td>
                      <td>Online portal grievance with award proof</td>
                      <td>30 to 45 Calendar Days</td>
                      <td>Regulatory order forcing NDC, CIBIL update &amp; compensation</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Execution (Order 21 CPC)</td>
                      <td>Order 21 Rules 30, 32 &amp; 46 CPC</td>
                      <td>Judicial execution petition before Civil Judge</td>
                      <td>2 to 4 Months</td>
                      <td>Court attachment of bank accounts, asset seizure &amp; decree execution</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Contempt Proceedings (High Court)</td>
                      <td>Contempt of Courts Act, 1971 / Art. 226</td>
                      <td>High Court writ for deliberate judicial disobedience</td>
                      <td>3 to 6 Months</td>
                      <td>Strict strictures against bank management &amp; exemplary damages</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Lok Adalat Award Enforcement &amp; Banking Litigation Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating bank non-compliance after a Lok Adalat settlement requires experienced banking litigation advocates who understand the exact interplay between Section 21 of the Legal Services Authorities Act, Civil Court execution mechanisms, RBI Master Directions, and Credit Information Companies regulations. SettleLoans provides complete, fearless legal representation for borrowers across India: serving formal statutory notices on bank managing directors and nodal officers, filing Execution Petitions under Order 21 CPC to attach non-compliant bank accounts, securing expedited RBI Banking Ombudsman orders with ₹5,000/day delay penalties, and ensuring 100% accurate ₹0 balance reporting on all credit bureau databases.
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
                  11. Frequently Asked Questions: Bank Non-Compliance with Lok Adalat Orders
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to critical questions regarding Lok Adalat awards, civil decree executions, No Dues Certificates, and credit bureau rectifications in India.
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
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior specialist in banking litigation defense, Lok Adalat award execution under Section 21 of the LSA Act, Order 21 CPC proceedings, RBI Ombudsman complaints, and institutional debt resolution across India.
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
              <h4 className="font-bold text-base text-white mb-2">Bank Delaying Your NDC or Misreporting CIBIL?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Enforce your Lok Adalat settlement order with seasoned banking advocates. We execute deemed civil court decrees, claim ₹5,000/day RBI penalties, and secure ₹0 closure.
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
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </h4>
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
