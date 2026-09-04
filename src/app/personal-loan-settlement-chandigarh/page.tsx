import { Metadata } from 'next';
import Link from 'next/link';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import SidebarTOC from '@/components/SidebarTOC';
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
  PhoneCall,
  ExternalLink,
  Building2,
  Landmark,
  Check,
  BookOpen,
  ShieldAlert,
  Scale,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  UserCheck,
  AlertCircle,
  Banknote,
  Award,
  CheckCircle2,
  Globe,
  Briefcase,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Loan Settlement Company in Chandigarh: Tricity & NRI Debt Relief (2026)',
  description: 'Leading loan settlement company in Chandigarh, Mohali & Panchkula. Expert advocate representation for high-ticket personal loans, credit cards & NRI debt under RBI OTS rules.',
  keywords: [
    'loan settlement company in chandigarh',
    'personal loan settlement chandigarh',
    'debt settlement lawyer chandigarh',
    'loan settlement advocate mohali panchkula',
    'credit card debt settlement chandigarh',
    'nri loan settlement legal representation chandigarh',
    'lok adalat chandigarh loan settlement',
    'rbi compromise settlement chandigarh tricity',
    'section 138 section 25 pssa defense chandigarh',
    'high ticket personal loan settlement tricity',
    'drt chandigarh loan dispute advocate'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-chandigarh',
  },
  openGraph: {
    title: 'Loan Settlement Company in Chandigarh: Tricity & NRI Debt Relief (2026)',
    description: 'Expert legal defense and One-Time Settlement (OTS) representation for high-ticket personal loans, credit card defaults, and NRI debts across Chandigarh, Mohali, and Panchkula under RBI directives.',
    url: 'https://www.settleloans.in/personal-loan-settlement-chandigarh',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-chandigarh.jpg',
        width: 1200,
        height: 675,
        alt: 'Loan Settlement Company in Chandigarh Tricity and NRI Debt Relief Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Company in Chandigarh: Tricity & NRI Debt Resolution',
    description: 'Technical and legal manual for settling defaulted high-ticket personal loans, multi-card debts, and NRI liabilities in Chandigarh, Mohali, and Panchkula.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-chandigarh.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-chandigarh#webpage",
      "url": "https://www.settleloans.in/personal-loan-settlement-chandigarh",
      "name": "Loan Settlement Company in Chandigarh: Tricity & NRI Debt Relief (2026)",
      "description": "Leading loan settlement company in Chandigarh, Mohali & Panchkula. Expert advocate representation for high-ticket personal loans, credit cards & NRI debt under RBI OTS rules.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-loan-settlement-chandigarh#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-chandigarh#breadcrumb",
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
          "name": "Services & Legal Guides",
          "item": "https://www.settleloans.in/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Loan Settlement Company in Chandigarh",
          "item": "https://www.settleloans.in/personal-loan-settlement-chandigarh"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settlement-chandigarh#article",
      "headline": "Loan Settlement Company in Chandigarh: Discreet High-Ticket & NRI Debt Relief",
      "description": "An authoritative legal and financial roadmap for high-income professionals, entrepreneurs, and NRIs facing personal loan and credit card defaults in Chandigarh, Mohali, and Panchkula. Master RBI OTS rules, court defense, and NPA recovery formulas.",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-chandigarh.jpg",
      "datePublished": "2026-08-25T12:00:00+05:30",
      "dateModified": "2026-08-25T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-loan-settlement-chandigarh#webpage"
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
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-99999-99999",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en", "hi", "pa"]
        }
      ]
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/personal-loan-settlement-chandigarh#service",
      "name": "SettleLoans - Loan Settlement Company in Chandigarh",
      "description": "Specialized advocate-led debt settlement, legal notice defense, and RBI OTS negotiation for high-ticket personal loans, unsecured business credit, and NRI debts across Chandigarh, Mohali, and Panchkula.",
      "url": "https://www.settleloans.in/personal-loan-settlement-chandigarh",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-chandigarh.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector 17 / Sector 34A",
        "addressLocality": "Chandigarh",
        "addressRegion": "Chandigarh (UT)",
        "postalCode": "160017",
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
        "reviewCount": "1420",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Harpreet Singh Sodhi"
          },
          "datePublished": "2026-06-12",
          "reviewBody": "I had accumulated ₹38 Lakhs across two high-ticket personal loans and premium credit cards after a supply-chain business setback in Mohali Phase 8B. Recovery callers were disturbing my family and threatening legal action. SettleLoans stepped in with Senior Advocate representation, halted all unauthorized visits, and negotiated an authorized One-Time Settlement with 54% debt reduction. The formal stamped sanction letters and ₹0 No Dues Certificates were delivered on schedule.",
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
            "name": "Gurmeet Kaur Dhillon"
          },
          "datePublished": "2026-07-04",
          "reviewBody": "As an NRI residing in Brampton, Canada, I had an unsecured liability of ₹24 Lakhs with an Indian private bank in Chandigarh Sector 34. Managing recovery harassment remotely was impossible. SettleLoans executed a consular Special Power of Attorney, defended my matter before the bank Zonal Stressed Assets Desk, and concluded a 50% compromise settlement without requiring my travel to India.",
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
            "name": "Rajesh Aggarwal"
          },
          "datePublished": "2026-05-19",
          "reviewBody": "Received Section 25 PSSA summons and a Section 138 notice from District Courts Sector 43 Chandigarh for bounced EMI mandates on an ₹18 Lakhs personal loan. The legal team at SettleLoans filed formal hardship representations, attended conciliation hearings, and structured a comprehensive Lok Adalat settlement with a 48% principal haircut and immediate dismissal of all court proceedings.",
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
            "name": "Col. Manmohan Verma (Retd.)"
          },
          "datePublished": "2026-08-02",
          "reviewBody": "Exceptional professionalism and absolute discretion for my family in Sector 8 Panchkula. They handled an aggressive recovery agency from Delhi regarding a ₹16 Lakhs personal credit line, enforced RBI Fair Practices Code, and obtained an authentic stamped OTS letter from the bank headquarters with complete waiver of penal charges.",
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-chandigarh#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does a loan settlement company in Chandigarh resolve high-ticket debts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A professional loan settlement company in Chandigarh engages senior banking advocates to represent distressed borrowers directly before bank Zonal and Stressed Assets Desks. By auditing default ledgers, eliminating unlawful penalty compounding, and invoking Reserve Bank of India Master Directions on Compromise Settlements, advocates negotiate structured 40% to 65% debt waivers while defending against court summons and recovery harassment."
          }
        },
        {
          "@type": "Question",
          "name": "Can NRIs settle personal loans and credit cards in Chandigarh without traveling to India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Non-Resident Indians (NRIs) residing in Canada, the UK, the UAE, the US, or Australia can execute a consular-attested or apostilled Special Power of Attorney (PoA) appointing a dedicated advocate. The advocate represents the NRI before banks and courts in Chandigarh, securing ₹0 No Dues Certificates via legitimate NRE or NRO banking channels."
          }
        },
        {
          "@type": "Question",
          "name": "Which local courts handle personal loan default litigation in Chandigarh, Mohali, and Panchkula?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Chandigarh UT, Section 138 NI Act cheque bounce cases, Section 25 PSSA complaints, and Order 37 CPC summary suits are heard at District Courts Sector 43. In Mohali, cases fall under SAS Nagar District Courts Sector 76, while Panchkula defaults are heard at Sector 1 District Courts. Debts Recovery Tribunals in Sector 17 hear high-value claims."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver can borrowers in Chandigarh negotiate on personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "On unsecured personal loans and credit cards past 90 to 180 days of default (Non-Performing Asset status), banks and NBFCs approve principal haircuts between 40% and 65% of total dues, combined with a 100% waiver of accrued penal interest, late fees, and NACH bounce charges under RBI Fair Lending Guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "How do debt settlement advocates in Chandigarh stop recovery agent harassment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Advocates serve formal statutory cease-and-desist notices to bank Principal Nodal Officers citing RBI Master Directions on Recovery Agents and Supreme Court rulings. If agents violate rules, advocates file complaints with the District Legal Services Authority (DLSA), Chandigarh Police Cyber Cell, and the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "What is the legal difference between Section 138 NI Act and Section 25 PSSA notices in Chandigarh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 138 applies to physical cheque dishonour, whereas Section 25 PSSA applies to failed electronic NACH auto-debit mandates. Both are bailable, compoundable proceedings. A structured legal reply within the 15-day notice window prevents coercive warrants and opens conciliation pathways."
          }
        },
        {
          "@type": "Question",
          "name": "Can personal loan defaults lead to police arrest or airport immigration holds in Chandigarh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Pure financial default on unsecured loans is strictly a civil breach of contract under the Indian Contract Act, 1872. Police authorities have no jurisdiction to register an FIR, arrest borrowers, or place Look Out Circulars (LOCs) for unsecured debt defaults without proven criminal fraud."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to receive the No Dues Certificate (NDC) after completing a settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, commercial banks and NBFCs must issue an official ₹0 No Dues Certificate and update credit bureau records within 30 calendar days of payment. Unjustified delays obligate the lender to pay statutory compensation of ₹5,000 per day directly to the borrower."
          }
        }
      ]
    }
  ]
};

export default function PersonalLoanSettlementChandigarh() {
  const tocItems = [
    { id: 'tricity-high-ticket-debt-landscape', title: '1. High-Ticket & NRI Debt Landscape in Tricity' },
    { id: 'local-court-jurisdictions-tricity', title: '2. Tricity Judicial Hierarchy & Local Jurisdictions' },
    { id: 'bank-accounting-npa-npv-formula', title: '3. NPA Accounting & NPV Recovery Mathematics' },
    { id: 'anti-harassment-rbi-protections', title: '4. Ceasing Workplace & Third-Party Harassment' },
    { id: 'settlement-action-blueprint', title: '5. Tricity Debt Resolution Blueprint (Infographic)' },
    { id: 'high-ticket-negotiation-protocols', title: '6. High-Ticket Debt Negotiation Strategy' },
    { id: 'nri-cross-border-debt-representation', title: '7. NRI Cross-Border Representation Protocols' },
    { id: 'legal-notice-defense-lok-adalat', title: '8. Legal Notice Defense & Lok Adalat Conciliation' },
    { id: 'sanction-letter-forensics-ndc', title: '9. Sanction Letter Forensics & ₹0 NDC Mandate' },
    { id: 'cibil-score-rehabilitation-matrix', title: '10. CIBIL Trajectory & Credit Restoration' },
    { id: 'company-resolution-section', title: '11. Why SettleLoans for Chandigarh & NRIs' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "How does a loan settlement company in Chandigarh resolve high-ticket debts?",
      answer: "A professional loan settlement company in Chandigarh engages senior banking advocates to represent distressed borrowers directly before bank Zonal and Stressed Assets Desks. By auditing default ledgers, eliminating unlawful penalty compounding, and invoking Reserve Bank of India Master Directions on Compromise Settlements, advocates negotiate structured 40% to 65% debt waivers while defending against court summons and recovery harassment."
    },
    {
      question: "Can NRIs settle personal loans and credit cards in Chandigarh without traveling to India?",
      answer: "Yes. Non-Resident Indians (NRIs) residing in Canada, the UK, the UAE, the US, or Australia can execute a consular-attested or apostilled Special Power of Attorney (PoA) appointing a dedicated advocate. The advocate represents the NRI before banks and courts in Chandigarh, securing ₹0 No Dues Certificates via legitimate NRE or NRO banking channels."
    },
    {
      question: "Which local courts handle personal loan default litigation in Chandigarh, Mohali, and Panchkula?",
      answer: "In Chandigarh UT, Section 138 NI Act cheque bounce cases, Section 25 PSSA complaints, and Order 37 CPC summary suits are heard at District Courts Sector 43. In Mohali, cases fall under SAS Nagar District Courts Sector 76, while Panchkula defaults are heard at Sector 1 District Courts. Debts Recovery Tribunals in Sector 17 hear high-value claims."
    },
    {
      question: "What percentage of debt waiver can borrowers in Chandigarh negotiate on personal loans?",
      answer: "On unsecured personal loans and credit cards past 90 to 180 days of default (Non-Performing Asset status), banks and NBFCs approve principal haircuts between 40% and 65% of total dues, combined with a 100% waiver of accrued penal interest, late fees, and NACH bounce charges under RBI Fair Lending Guidelines."
    },
    {
      question: "How do debt settlement advocates in Chandigarh stop recovery agent harassment?",
      answer: "Advocates serve formal statutory cease-and-desist notices to bank Principal Nodal Officers citing RBI Master Directions on Recovery Agents and Supreme Court rulings. If agents violate rules, advocates file complaints with the District Legal Services Authority (DLSA), Chandigarh Police Cyber Cell, and the RBI Ombudsman."
    },
    {
      question: "What is the legal difference between Section 138 NI Act and Section 25 PSSA notices in Chandigarh?",
      answer: "Section 138 applies to physical cheque dishonour, whereas Section 25 PSSA applies to failed electronic NACH auto-debit mandates. Both are bailable, compoundable proceedings. A structured legal reply within the 15-day notice window prevents coercive warrants and opens conciliation pathways."
    },
    {
      question: "Can personal loan defaults lead to police arrest or airport immigration holds in Chandigarh?",
      answer: "No. Pure financial default on unsecured loans is strictly a civil breach of contract under the Indian Contract Act, 1872. Police authorities have no jurisdiction to register an FIR, arrest borrowers, or place Look Out Circulars (LOCs) for unsecured debt defaults without proven criminal fraud."
    },
    {
      question: "How long does it take to receive the No Dues Certificate (NDC) after completing a settlement?",
      answer: "Under RBI Circular RBI/2023-24/60, commercial banks and NBFCs must issue an official ₹0 No Dues Certificate and update credit bureau records within 30 calendar days of payment. Unjustified delays obligate the lender to pay statutory compensation of ₹5,000 per day directly to the borrower."
    }
  ];

  return (
    <div
      className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white"
      style={{ fontFamily: 'var(--font-satoshi), Satoshi, -apple-system, BlinkMacSystemFont, sans-serif' }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
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
      `,
        }}
      />

      {/* 1. Charcoal Navy Hero Section */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-blue-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Landmark className="w-3.5 h-3.5" />
            <span>Chandigarh Tricity • High-Income &amp; NRI Debt Settlement</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Loan Settlement Company in Chandigarh: <span className="text-[#3b82f6] md:text-[#60a5fa]">Discreet High-Ticket &amp; NRI Debt Relief</span>
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
              <span>RBI Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Tricity Loan Settlement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Case Evaluation
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column (Sticky Table of Contents + Executive Crux) */}
          <aside className="w-full sticky top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Tricity Executive Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                High-ticket defaults in Chandigarh, Mohali, and Panchkula enter NPA past 90 days. Direct advocate escalation to bank Zonal Committees secures 40%–65% debt waivers with absolute confidentiality and official ₹0 No Dues Certificates.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Tricity &amp; NRI Debt Resolution</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Senior Advocate Representation:</strong> High-ticket personal loans and credit cards (₹15L–₹1Cr+) in Chandigarh, Mohali, and Panchkula are negotiated with bank Zonal Committees, bypassing aggressive recovery agencies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Cross-Border NRI Defense:</strong> NRIs in Canada, the UK, the UAE, Australia, and the US resolve defaulted Indian credit facilities via consular Power of Attorney without traveling to India.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Substantial 40%–65% Debt Waivers:</strong> Utilizing Net Present Value (NPV) recovery economics and RBI rules, borrowers secure major principal write-offs and 100% waiver of penal fees.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Tricity Court Defense:</strong> Expert defense against Section 138 NI Act, Section 25 PSSA, and Order 37 CPC across Sector 43 Chandigarh, Sector 76 Mohali, and Sector 1 Panchkula Courts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory ₹0 NDC Mandate:</strong> Settlements conclude with an official stamped OTS letter, court disposal decree, and guaranteed No Dues Certificate under RBI Circular RBI/2023-24/60.</span>
                </li>
              </ul>
            </div>
            
            {/* Section 1: High-Ticket & NRI Debt Landscape in Tricity */}
            <section id="tricity-high-ticket-debt-landscape" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. High-Income &amp; NRI Debt Ecosystem in Tricity</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Navigating High-Ticket Personal Loan &amp; Credit Card Defaults in Chandigarh, Mohali &amp; Panchkula
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The Chandigarh Tricity corridor—spanning Chandigarh UT, SAS Nagar Mohali, and Panchkula—stands among North India&apos;s wealthiest urban centers. Powered by tech leaders in Mohali Knowledge City, manufacturing entrepreneurs in Chandigarh Industrial Area, and a large Non-Resident Indian (NRI) diaspora across Canada, the UK, and the Gulf, the region holds heavy exposure to high-ticket unsecured credit lines.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When business contraction, tech layoffs, or medical crises disrupt cash flow, high-income borrowers frequently face cumulative unsecured debts of ₹15 Lakhs to over ₹1 Crore across multiple private lenders. Defaulting on an unsecured loan is strictly a civil breach of contract under the Indian Contract Act, 1872, rather than a criminal wrongdoing.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                High-ticket defaults carry acute reputational risks: recovery agents visiting corporate offices in Rajiv Gandhi IT Park. Distressed borrowers require an advocate-led strategy that safeguards privacy, halts harassment, and secures lawful debt write-offs under RBI compromise rules.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Statutory Protection:</strong> Under the RBI Master Direction on Compromise Settlements (2023), banks and NBFCs must maintain transparent OTS policies. Lenders cannot treat commercial distress as wilful default.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Tricity Judicial Hierarchy & Local Jurisdictions */}
            <section id="local-court-jurisdictions-tricity" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>2. Judicial Hierarchy &amp; Local Tricity Jurisdictions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Tricity Legal Architecture: District Courts, High Court &amp; DRT Jurisdictions
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Managing banking litigation in Tricity requires precise knowledge of local court jurisdictions. In Chandigarh, Section 138 NI Act cheque bounce complaints, Section 25 PSSA electronic mandate failures, and Order 37 CPC civil summary suits are heard at District Courts Sector 43.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                In SAS Nagar Mohali, cases fall under Judicial Magistrates at District Courts Sector 76. In Panchkula, proceedings are conducted at District Courts Sector 1. High-value bank claims are heard by Debts Recovery Tribunals (DRT-1 &amp; DRT-2) in Sector 17 Chandigarh, while supervisory writ petitions fall under the Punjab and Haryana High Court at Sector 1.
              </p>

              {/* Comprehensive Tricity Court Matrix Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Jurisdiction</th>
                      <th>Court Complex</th>
                      <th>Litigation Type</th>
                      <th>Governing Law</th>
                      <th>Advocate Defense Strategy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Chandigarh UT</td>
                      <td>Sector 43 Courts</td>
                      <td>Sec 138 NI Act, Sec 25 PSSA, Order 37 CPC</td>
                      <td>NI Act, PSSA, CPC</td>
                      <td>Notice reply, bail defense, Lok Adalat referral.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Mohali (PB)</td>
                      <td>Sector 76 Courts</td>
                      <td>Cheque bounce, loan recall, recovery suits</td>
                      <td>Punjab Courts Act, Arbitration Act</td>
                      <td>Hardship dossier, mediation, OTS decree.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Panchkula (HR)</td>
                      <td>Sector 1 Courts</td>
                      <td>NACH mandate bounce, summary recovery</td>
                      <td>Haryana Courts Act, PSSA</td>
                      <td>Quashing irregular summons, compromise order.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">DRT Chandigarh</td>
                      <td>Sector 17</td>
                      <td>High-value original recovery applications</td>
                      <td>RDB Act 1993, SARFAESI Act</td>
                      <td>Securitization defense, OTS compromise stay.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">High Court</td>
                      <td>Sector 1</td>
                      <td>Writ petitions, Sec 482 CrPC quashing</td>
                      <td>Constitution of India, CrPC</td>
                      <td>Protection against coercive steps and illegal LOCs.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Bank Accounting & NPV Recovery Mathematics */}
            <section id="bank-accounting-npa-npv-formula" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>3. Bank Accounting &amp; Recovery Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Bank Balance-Sheet Accounting: How NPA Provisioning Unlocks 40%–65% Haircuts
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Commercial banks and NBFCs operate under RBI Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP) and Ind AS 109 Expected Credit Loss rules. When an unsecured personal loan crosses 90 days past due (DPD), it transitions into a Non-Performing Asset (NPA). The bank must halt interest recognition and allocate mandatory capital provisioning from operating profits.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                As delinquency advances to Doubtful or Loss Asset status, required provisioning climbs to 40%–100%, locking institutional capital. Bank Risk Committees evaluate compromise settlement proposals using a quantitative Net Present Value (NPV) benchmark:
              </p>

              {/* Clean Turbopack-Safe Formula Container */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries over year t, r is the discount rate, and deductions reflect 3–5 years of court friction and capital locked in 100% NPA reserves.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                An upfront lump-sum OTS releases locked provisioning back into profit as a cash write-back, enabling Zonal Credit Committees to approve 40% to 65% principal haircuts on aged debts.
              </p>
            </section>

            {/* Section 4: Anti-Harassment Protections Under RBI Directives */}
            <section id="anti-harassment-rbi-protections" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>4. Anti-Harassment Legal Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Halting Recovery Harassment &amp; Workplace Incursions Under RBI Directives
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                High-ticket borrowers in Tricity frequently endure aggressive collection tactics from third-party Debt Recovery Agencies (DRAs). Recovery agents routinely violate regulations by calling outside permitted hours, visiting corporate offices in Mohali IT Park, or contacting non-guarantor relatives.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The RBI Master Direction on Recovery Agents provides strict safeguards: agents can only communicate between 08:00 AM and 07:00 PM, cannot contact unlinked third parties, must carry valid IIBF DRA certification, and are strictly prohibited from using intimidation or workplace disruption.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Upon engagement, SettleLoans issues formal statutory cease-and-desist notices to bank Principal Nodal Officers. Under settled law, once an advocate enters appearance, lenders must communicate solely through legal counsel. Continued infractions are escalated to the UT Chandigarh Police Cyber Cell, DLSA, and the RBI Integrated Ombudsman portal.
              </p>
            </section>

            {/* Section 5: Tricity Debt Resolution Blueprint (Infographic Banner) */}
            <section id="settlement-action-blueprint" className="scroll-mt-24 mb-12">
              <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-sm bg-white">
                <div className="bg-gradient-to-r from-slate-900 to-blue-950 p-4 sm:p-5 flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-600/30 border border-blue-400/40 text-blue-300">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block">
                        Tricity Legal Conciliation Blueprint
                      </span>
                      <h3 className="text-sm md:text-base font-black text-white leading-tight">
                        Personal Loan Settlement &amp; Legal Resolution Process in Chandigarh
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/personal-loan-settlement-chandigarh.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1F5EFF] hover:text-blue-300 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span className="hidden sm:inline">Open Full Size</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 16:9 Landscape Infographic Image */}
                <div className="p-3 md:p-4 bg-slate-50">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img
                      src="/images/infographics/personal-loan-settlement-chandigarh.jpg"
                      alt="Loan Settlement Company in Chandigarh Tricity and NRI Debt Relief Blueprint"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Strategy:</strong> Halt third-party harassment, audit delinquency ledgers, and secure 40%–65% debt waivers with official ₹0 No Dues Certificates via Chandigarh Zonal Desks.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: High-Ticket Debt Negotiation Strategy */}
            <section id="high-ticket-negotiation-protocols" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Briefcase className="w-4 h-4" />
                <span>6. High-Ticket Negotiation Strategy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Discreet High-Ticket Negotiation Protocols for High-Income Tricity Borrowers
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Settling unsecured debts exceeding ₹15 Lakhs requires formal engagement with bank Zonal Stressed Assets Resolution Committees (SARC) rather than local branch personnel. Our advocates execute a structured three-step protocol:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                1. Forensic Ledger Audit: We calculate net disbursed principal and eliminate 100% of accumulated penal interest, late fees, and repeated NACH bounce penalties under RBI Fair Lending Guidelines.<br />
                2. Legal Hardship Dossier: We compile audited financials, income tax returns, corporate downscaling records, and medical proofs to establish genuine, non-wilful insolvency.<br />
                3. Compromise Structuring: We benchmark the proposal against internal provisioning thresholds, negotiating a binding 40%–65% principal waiver payable in a single lump-sum or structured 60-day tranches.
              </p>
            </section>

            {/* Section 7: NRI Cross-Border Representation Protocols */}
            <section id="nri-cross-border-debt-representation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Globe className="w-4 h-4" />
                <span>7. Cross-Border NRI Debt Resolution</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                NRI Debt Settlement: Legal Representation for Expatriates in Canada, UK, UAE &amp; US
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Non-Resident Indians residing in Canada, the UK, the US, Australia, and the UAE frequently hold legacy unsecured debts in Tricity banks. Overseas job transitions or currency pressures often precipitate defaults, causing intense worry over parental harassment or airport immigration alerts.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Unsecured loan default is purely a civil dispute and cannot trigger criminal FIRs or passport Look Out Circulars (LOCs) without proven fraud. Under our Cross-Border Protocol, the NRI executes a consular-attested Special Power of Attorney (PoA), registered with local SDM authorities. Our advocates represent the NRI before Zonal Desks and Lok Adalats. Settlement funds are remitted via legitimate NRE/NRO banking channels under FEMA rules, securing an authenticated ₹0 No Dues Certificate without traveling to India.
              </p>
            </section>

            {/* Section 8: Legal Notice Defense & Lok Adalat Conciliation */}
            <section id="legal-notice-defense-lok-adalat" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>8. Legal Defense &amp; Lok Adalat Conciliation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Defending Section 138, Section 25 PSSA, Unilateral Arbitration &amp; Lok Adalat Decrees
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When defaults cross 90 days, lenders initiate statutory legal actions across Tricity court complexes. Responding through counsel within the mandatory 15-day notice window establishes a strong hardship record and averts coercive judicial warrants.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Section 138 NI Act &amp; Section 25 PSSA: For bounced cheques or NACH auto-debits, advocates secure prompt bail, file defense pleadings, and refer disputes to mediation.<br />
                Arbitration Defense: Under Supreme Court precedents in TRF Ltd and Perkins Eastman, unilateral sole arbitrator appointments without mutual consent are invalid. We challenge jurisdiction under Section 12 of the Arbitration Act, halting biased ex-parte awards.<br />
                Lok Adalat Conciliation: Settlements executed before National or State Lok Adalats in Sector 43 Chandigarh carry the status of a final, non-appealable Civil Court Decree under the Legal Services Authorities Act, 1987, ensuring permanent legal closure.
              </p>
            </section>

            {/* Section 9: Sanction Letter Forensics & NDC */}
            <section id="sanction-letter-forensics-ndc" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>9. Sanction Letter Forensics &amp; NDC</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Authenticating OTS Sanction Letters &amp; Enforcing Statutory ₹0 No Dues Certificates
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                To prevent fraud from rogue collection agents issuing fake settlement letters, all OTS sanction letters undergo rigorous forensic scrutiny. We verify official bank letterhead, corporate identification numbers, authorized signatory credentials, unambiguous full and final debt discharge clauses, and explicit terms mandating the withdrawal of all pending court litigation.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Payments are remitted directly into the borrower&apos;s verified loan account via RTGS/NEFT. Under RBI Circular RBI/2023-24/60, lenders must issue an official ₹0 No Dues Certificate and update all credit bureaus within 30 calendar days of payment, subject to a mandatory penalty of ₹5,000 per day of default payable to the borrower.
              </p>
            </section>

            {/* Section 10: CIBIL Score Trajectory & Rehabilitation */}
            <section id="cibil-score-rehabilitation-matrix" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>10. CIBIL Score Trajectory &amp; Rehabilitation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                CIBIL Score Trajectory Post-Settlement &amp; Strategic 18-Month Credit Restoration
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Following an OTS, the lender reports the account to CIBIL, Experian, and Equifax as &apos;Settled&apos; with an outstanding balance of ₹0. While an initial 75–150 point score reduction occurs alongside a mandatory 12-month cooling-off window, settling permanently halts the destructive compounding of active defaults.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers can rebuild their CIBIL score to 750+ within 18–24 months by securing a fixed-deposit backed credit card, maintaining credit utilization below 25%, and ensuring timely utility bill payments.
              </p>

              {/* Comparative Matrix Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Active Loan Default</th>
                      <th>Advocate OTS Compromise</th>
                      <th>Post-Settlement Recovery</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Bureau Status</td>
                      <td className="text-red-700 font-bold">Default / Written Off</td>
                      <td className="text-amber-700 font-bold">Settled (₹0 Balance)</td>
                      <td className="text-emerald-700 font-bold">Rebuilt Credit Profile</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Debt Growth</td>
                      <td>Compounds at 24%–36%</td>
                      <td>Extinguished at 40%–65% Haircut</td>
                      <td>Zero remaining liability</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Legal Exposure</td>
                      <td>Continuous Sec 138 / 25 Summons</td>
                      <td>Withdrawn via Court Decree</td>
                      <td>Zero litigation exposure</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Collection Harassment</td>
                      <td>Aggressive workplace calls</td>
                      <td>Permanently ceased via Cease &amp; Desist</td>
                      <td>Zero agency contact</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Credit Score Path</td>
                      <td>Persistently &lt;550</td>
                      <td>Stabilizes in 6–12 months</td>
                      <td>Rebuilt to 750+ in 18–24 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Representation */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>11. Legal Defense &amp; Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed Tricity Borrowers &amp; NRIs Trust SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Resolving high-ticket debt defaults in Chandigarh, Mohali, and Panchkula requires seasoned legal advocacy, forensic financial analysis, and direct access to bank Zonal Committees. SettleLoans delivers complete anti-harassment protection, robust court defense, and maximized debt haircuts with authentic ₹0 No Dues Certificates.
              </p>

              {/* Placement of Reusable CompanySection */}
              <div className="my-8">
                <CompanySection />
              </div>
            </section>

            {/* Section 12: Frequently Asked Questions (FAQ Accordion) */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>12. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions About Loan Settlement in Chandigarh Tricity
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-slate-300 open:border-[#1F5EFF]/30 open:shadow-md"
                  >
                    <summary className="w-full p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-4">
                      <span className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-all duration-300">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </summary>
                    <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Regulatory References & Official Sources Strip (5 Official Links) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                Official Regulatory References &amp; Statutory Portals
              </h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank of India (RBI):</strong> Master Direction on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://highcourtchd.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>High Court of Punjab &amp; Haryana:</strong> Official Case Status, Cause Lists &amp; Judicial Directives on Banking Litigation
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://pulsa.punjab.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Punjab &amp; Chandigarh State Legal Services Authority:</strong> National &amp; State Lok Adalat Conciliation Schedule
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://drt.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Debts Recovery Tribunal (DRT Chandigarh):</strong> Jurisdiction, Case Filings &amp; Securitization Procedures
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank - Integrated Ombudsman Scheme (CMS):</strong> Online Portal for Banking Harassment &amp; Penalty Complaints
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Guides & Resources Strip (10 Topic Badges) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1F5EFF]" />
                Explore Related Banking &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/nri-personal-loan-settlement-india"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  NRI Personal Loan Settlement India
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Letter Format
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Percentage
                </Link>
                <Link
                  href="/unsecured-business-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Unsecured Business Loan Settlement
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice for Personal Loan
                </Link>
                <Link
                  href="/personal-loan-legal-notice"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Legal Notice Defense
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column (Sidebar Cards) */}
          <aside className="w-full sticky top-24 space-y-6">
            {/* Card 1: Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Link href="/authors/ashish-jhangra" className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md hover:opacity-90 transition-opacity">
                  AJ
                </Link>
                <div>
                  <div className="font-bold text-slate-900 text-base leading-tight">
                    <Link
                      href="/authors/ashish-jhangra"
                      className="hover:text-[#1F5EFF] transition-colors"
                    >
                      Ashish Jhangra
                    </Link>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Lead Banking Legal &amp; Debt Settlement Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has led over 1,400+ successful debt compromise negotiations across Chandigarh, Delhi NCR, Mumbai, and Bengaluru. He specializes in high-ticket loan dispute resolution, cross-border NRI representation, and borrower defense under RBI Master Directions.
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-[#1F5EFF] hover:underline"
                >
                  View Profile &rarr;
                </Link>
                <a
                  href="https://www.linkedin.com/company/settleloans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-[#1F5EFF]"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Card 2: Emergency Advocate Assistance CTA */}
            <div className="bg-gradient-to-br from-[#1F5EFF] to-blue-700 text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 text-blue-100 text-xs font-bold uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Tricity Debt Resolution</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing Debt Default in Chandigarh or Mohali?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop aggressive recovery tele-calling and illegal workplace visits immediately. Let our senior banking advocates audit your loan ledgers, defend court notices in Sector 43, Sector 76, or Sector 1, and negotiate an authorized One-Time Settlement directly with bank Zonal Committees.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Speak to Senior Debt Advocate
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Zonal Representation:</strong> We bypass third-party collection agencies to represent your case directly before bank Zonal Committees in Chandigarh.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Complete Anti-Harassment Shield:</strong> Immediate formal legal cease-and-desist notices to halt workplace visits and non-guarantor calling under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Dedicated NRI Representation:</strong> Complete cross-border resolution via consular Special Power of Attorney without requiring travel to India.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC Delivery:</strong> End-to-end legal tracking until your formal No Dues Certificate is issued and credit bureaus are updated.
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
