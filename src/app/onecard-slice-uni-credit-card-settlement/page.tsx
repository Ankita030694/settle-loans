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
  Layers,
  Gavel,
  FileCheck,
  UserCheck,
  AlertCircle,
  Banknote,
  Award,
  CheckCircle2,
  CreditCard,
  FileText,
  AlertTriangle,
  Smartphone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'OneCard, Slice & Uni Card Settlement | SettleLoans',
  description: 'Learn how to settle OneCard, Slice, and Uni credit card debt legally. Stop late charges and negotiate partner bank OTS with SettleLoans.',
  keywords: [
    'onecard credit card settlement process',
    'onecard settlement with federal bank',
    'slice credit card loan settlement',
    'uni card debt settlement process',
    'fintech credit card one time settlement ots',
    'onecard sbm bank legal notice reply',
    'how to settle slice card default',
    'bob financial onecard settlement',
    'fintech card no dues certificate cibil',
    'rbi digital lending guidelines recovery harassment',
    'onecard section 25 pssa notice defense',
    'fintech credit card debt haircut percentage',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/onecard-slice-uni-credit-card-settlement',
  },
  openGraph: {
    title: 'OneCard, Slice & Uni Credit Card Settlement: Partner Bank OTS Rules & Legal Defense (2026)',
    description: 'Struggling with OneCard, Slice, or Uni card debt in India? Discover how to negotiate One-Time Settlements with partner banks (Federal, SBM, BOB Financial, NESFB), halt compounding interest, stop collection harassment, and secure ₹0 No Dues Certificates.',
    url: 'https://www.settleloans.in/onecard-slice-uni-credit-card-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/onecard-slice-uni-credit-card-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'OneCard, Slice and Uni Fintech Credit Card Settlement and Partner Bank Resolution Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneCard, Slice & Uni Credit Card Settlement: Partner Bank OTS Rules & Legal Defense',
    description: 'Strategic guide for settling defaulted OneCard, Slice, and Uni co-branded credit cards in India under RBI Master Directions with maximum debt haircuts.',
    images: ['https://www.settleloans.in/images/infographics/onecard-slice-uni-credit-card-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/onecard-slice-uni-credit-card-settlement#webpage",
      "url": "https://www.settleloans.in/onecard-slice-uni-credit-card-settlement",
      "name": "OneCard, Slice & Uni Credit Card Settlement: Partner Bank OTS Rules & Legal Defense (2026)",
      "description": "Comprehensive guide to OneCard, Slice, and Uni credit card settlement in India. Learn how to settle co-branded fintech cards backed by Federal Bank, SBM Bank, BOB Financial, and NESFB, halt 36%-48% APR compounding, defend recovery harassment under RBI Digital Lending rules, and negotiate up to 60% OTS debt haircuts.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/onecard-slice-uni-credit-card-settlement#breadcrumb"
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
      "@id": "https://www.settleloans.in/onecard-slice-uni-credit-card-settlement#breadcrumb",
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
          "name": "Fintech Card Settlement",
          "item": "https://www.settleloans.in/onecard-slice-uni-credit-card-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/onecard-slice-uni-credit-card-settlement#article",
      "headline": "OneCard, Slice & Uni Credit Card Settlement: Partner Bank OTS Rules, Legal Defense & ₹0 NDC Guide",
      "description": "An exhaustive technical and legal manual for settling defaulted OneCard, Slice, and Uni co-branded credit cards in India. Explores the tripartite fintech banking architecture, partner bank balance sheet provisioning, RBI Digital Lending directives, Section 25 PSSA defense, and structured OTS negotiations.",
      "image": "https://www.settleloans.in/images/infographics/onecard-slice-uni-credit-card-settlement.jpg",
      "datePublished": "2026-09-03T10:00:00+05:30",
      "dateModified": "2026-09-03T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/onecard-slice-uni-credit-card-settlement#webpage"
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
      "@id": "https://www.settleloans.in/onecard-slice-uni-credit-card-settlement#service",
      "name": "SettleLoans - Fintech Credit Card Settlement & Legal Defense",
      "description": "Specialized legal and financial negotiation advisory for settling defaulted OneCard, Slice, and Uni credit card obligations directly with underlying partner banks under RBI compromise settlement frameworks.",
      "url": "https://www.settleloans.in/onecard-slice-uni-credit-card-settlement",
      "image": "https://www.settleloans.in/images/infographics/onecard-slice-uni-credit-card-settlement.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "DLF Cyber City",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "postalCode": "122002",
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
        "reviewCount": "1280",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Tanmay Deshmukh"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "My OneCard backed by Federal Bank rose to ₹4.2 Lakhs due to high interest after job loss in Bengaluru. Third-party collection agents sent threatening WhatsApp messages. SettleLoans invoked RBI Digital Lending rules and stopped the harassment in 48 hours. They negotiated an official OTS letter directly from Federal Bank for ₹1.85 Lakhs with a ₹0 NDC.",
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
            "name": "Kritika Varma"
          },
          "datePublished": "2026-08-02",
          "reviewBody": "I had multiple fintech card debts across Slice and Uni Card totaling ₹6.8 Lakhs. The 42% APR interest drained my savings. SettleLoans audited my statements and proved financial hardship. They settled both accounts with partner NBFCs at a 55% waiver and stopped all auto-debit mandates.",
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
            "name": "Rohan Bhattacharya"
          },
          "datePublished": "2026-06-25",
          "reviewBody": "I received a Section 25 PSSA legal notice from SBM Bank India for my defaulted OneCard. SettleLoans filed a strong legal reply against inflated charges and represented me in Lok Adalat. My ₹3.5 Lakhs balance was settled for ₹1.4 Lakhs in one payment. The case was closed cleanly.",
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
            "name": "Deepika Nair"
          },
          "datePublished": "2026-08-19",
          "reviewBody": "I received great legal protection against recovery harassment. SettleLoans sent a formal cease-and-desist notice to the bank Nodal Officer. They negotiated an approved compromise on my BOB Financial OneCard. I got my official ₹0 No Dues Certificate in 25 days with CIBIL updated to zero.",
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
      "@id": "https://www.settleloans.in/onecard-slice-uni-credit-card-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the OneCard, Slice, and Uni credit card settlement process in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fintech card settlement is a formal debt compromise process under RBI rules. Apps like OneCard, Slice, and Uni partner with banks such as Federal Bank, SBM Bank India, and BOB Financial. Settlements must be approved directly by the partner bank's Credit Committee. When an account passes 90 days of default, the cardholder submits a hardship petition. The partner bank evaluates net recovery value. It then issues an official stamped OTS letter granting a 40% to 65% debt waiver. After payment, the bank issues a ₹0 No Dues Certificate."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the actual legal lender behind OneCard, Slice, and Uni cards?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fintech companies do not hold banking licenses. Under RBI rules, the legal lenders are partner banks and NBFCs. OneCard is issued by Federal Bank, SBM Bank India, BOB Financial, CSB Bank, and South Indian Bank. Slice partners with NBFCs and North East Small Finance Bank (NESFB). Uni Card partners with RBL Bank, PayU Finance, and LiquiLoans. All legal notices and settlements come from these regulated lenders."
          }
        },
        {
          "@type": "Question",
          "name": "How much debt waiver or haircut can you negotiate on defaulted fintech cards?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Partner banks usually grant debt waivers between 40% and 65% of the total ledger balance. For accounts overdue past 180 to 365 days, high 36% to 48% APR interest forms most of the debt. These accounts often settle at a 55% to 65% waiver. The cardholder pays only a portion of the original used amount."
          }
        },
        {
          "@type": "Question",
          "name": "Can fintech apps like OneCard or Slice file a criminal police complaint (FIR) for non-payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Defaulting on a credit card or fintech credit line is a civil contract issue under the Indian Contract Act, 1872. Police cannot file an FIR or make an arrest for genuine financial default. Partner banks may issue Section 25 PSSA notices for bounced auto-debits. These are bailable magistrate court matters that are resolved through compromise settlements."
          }
        },
        {
          "@type": "Question",
          "name": "How should cardholders respond to legal notices and Section 25 PSSA summons from fintech partner banks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cardholders should never ignore formal legal notices or court summons. Hire banking legal counsel to send a formal reply. The reply explains your financial hardship, disputes excessive interest. And requests settlement through Lok Adalat or an RBI compromise framework."
          }
        },
        {
          "@type": "Question",
          "name": "Can fintech lenders enforce digital arbitration or Online Dispute Resolution (ODR) awards without mutual consent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under Supreme Court rulings in Perkins Eastman and TRF Ltd., lenders cannot choose a sole arbitrator alone. Your advocate can challenge one-sided appointments under Sections 12 and 14 of the Arbitration Act. This makes any one-sided virtual award legally void."
          }
        },
        {
          "@type": "Question",
          "name": "How do you stop aggressive WhatsApp spamming and recovery agent harassment from fintech collection agencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Digital Lending Guidelines, collection agents cannot call before 08:00 AM or after 07:00 PM. They cannot access your contact list, message employers, or use abusive words. Sending a cease-and-desist notice to the bank Nodal Officer and filing an RBI CMS complaint stops harassment fast."
          }
        },
        {
          "@type": "Question",
          "name": "Why is paying the fintech app directly risky during an ongoing settlement negotiation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paying through the app during default is risky. The system uses your money to clear penalty fees first. Never pay until you receive an official stamped OTS letter from the partner bank. Always pay directly into the verified card account."
          }
        },
        {
          "@type": "Question",
          "name": "What must be verified on a partner bank OTS Sanction Letter before paying the settlement amount?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An official OTS letter must contain: (1) Partner bank or NBFC letterhead and logo. (2) Full name and 16-digit card or account number matching CIBIL. (3) Clear full and final settlement clause. (4) Breakdown of the debt waiver. (5) Payment deadline and bank account details. (6) Signature and stamp of an authorized Credit Officer."
          }
        },
        {
          "@type": "Question",
          "name": "How long does the partner bank take to issue the ₹0 No Dues Certificate (NDC) and update CIBIL?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, partner banks must issue a ₹0 No Dues Certificate and update credit bureaus within 30 calendar days of payment. If the bank delays beyond 30 days, it must pay payout of ₹5,000 per day to the borrower."
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

export default function OneCardSliceUniCreditCardSettlementPage() {
  const tocItems = [
    { id: 'fintech-card-tripartite-architecture', title: '1. Fintech Co-Branding & Partner Bank Architecture' },
    { id: 'genz-millennial-debt-trap-apr', title: '2. The 36%–48% APR Trap & Ledger Inflation' },
    { id: 'delinquency-timeline-npa-stages', title: '3. Delinquency Timeline: DPD 1–90 to NPA' },
    { id: 'npv-recovery-valuation-haircut-matrix', title: '4. Bank Accounting, NPV & Haircut Matrix' },
    { id: 'infographic-fintech-settlement-blueprint', title: '5. Fintech Card Settlement Blueprint' },
    { id: 'digital-recovery-harassment-rbi-defense', title: '6. Digital Recovery Defense & RBI Protections' },
    { id: 'enach-odr-arbitration-legal-notices', title: '7. e-NACH PSSA Notices, ODR & Civil Suits' },
    { id: 'step-by-step-fintech-settlement-process', title: '8. Step-by-Step Fintech Card OTS Roadmap' },
    { id: 'partner-bank-sanction-letter-ndc-audit', title: '9. Partner Bank Sanction Letter & ₹0 NDC' },
    { id: 'cibil-restoration-after-fintech-settlement', title: '10. CIBIL Trajectory & Score Rehabilitation' },
    { id: 'company-resolution-section', title: '11. SettleLoans Fintech Debt Resolution' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "What is the OneCard, Slice, and Uni credit card settlement process in India?",
      answer: "Fintech card settlement is a formal debt compromise process under RBI rules. Apps like OneCard, Slice, and Uni partner with banks such as Federal Bank, SBM Bank India, and BOB Financial. Settlements must be approved directly by the partner bank's Credit Committee. When an account passes 90 days of default, the cardholder submits a hardship petition. The partner bank evaluates net recovery value. It then issues an official stamped OTS letter granting a 40% to 65% debt waiver. After payment, the bank issues a ₹0 No Dues Certificate."
    },
    {
      question: "Who is the actual legal lender behind OneCard, Slice, and Uni cards?",
      answer: "Fintech companies do not hold banking licenses. Under RBI rules, the legal lenders are partner banks and NBFCs. OneCard is issued by Federal Bank, SBM Bank India, BOB Financial, CSB Bank, and South Indian Bank. Slice partners with NBFCs and North East Small Finance Bank (NESFB). Uni Card partners with RBL Bank, PayU Finance, and LiquiLoans. All legal notices and settlements come from these regulated lenders."
    },
    {
      question: "How much debt waiver or haircut can you negotiate on defaulted fintech cards?",
      answer: "Partner banks usually grant debt waivers between 40% and 65% of the total ledger balance. For accounts overdue past 180 to 365 days, high 36% to 48% APR interest forms most of the debt. These accounts often settle at a 55% to 65% waiver. The cardholder pays only a portion of the original utilized amount."
    },
    {
      question: "Can fintech apps like OneCard or Slice file a criminal police complaint (FIR) for non-payment?",
      answer: "No. Defaulting on a credit card or fintech credit line is a civil contract issue under the Indian Contract Act, 1872. Police cannot file an FIR or make an arrest for genuine financial default. Partner banks may issue Section 25 PSSA notices for bounced auto-debits. These are bailable magistrate court matters that are resolved through compromise settlements."
    },
    {
      question: "How should cardholders respond to legal notices and Section 25 PSSA summons from fintech partner banks?",
      answer: "Cardholders should never ignore formal legal notices or court summons. Hire banking legal counsel to send a formal reply. The reply explains your financial hardship, disputes excessive interest, and requests settlement through Lok Adalat or an RBI compromise framework."
    },
    {
      question: "Can fintech lenders enforce digital arbitration or Online Dispute Resolution (ODR) awards without mutual consent?",
      answer: "No. Under Supreme Court rulings in Perkins Eastman and TRF Ltd., lenders cannot choose a sole arbitrator alone. Your advocate can challenge unilateral appointments under Sections 12 and 14 of the Arbitration Act. This makes any one-sided virtual award legally void."
    },
    {
      question: "How do you stop aggressive WhatsApp spamming and recovery agent harassment from fintech collection agencies?",
      answer: "Under RBI Digital Lending Guidelines, collection agents cannot call before 08:00 AM or after 07:00 PM. They cannot access your contact list, message employers, or use abusive words. Sending a cease-and-desist notice to the bank Nodal Officer and filing an RBI CMS complaint stops harassment fast."
    },
    {
      question: "Why is paying the fintech app directly risky during an ongoing settlement negotiation?",
      answer: "Paying through the app during default is risky. The system uses your money to clear penalty fees first. Never pay until you receive an official stamped OTS letter from the partner bank. Always pay directly into the verified card account."
    },
    {
      question: "What must be verified on a partner bank OTS Sanction Letter before paying the settlement amount?",
      answer: "An official OTS letter must contain: (1) Partner bank or NBFC letterhead and logo. (2) Full name and 16-digit card or account number matching CIBIL. (3) Clear full and final settlement clause. (4) Breakdown of the debt waiver. (5) Payment deadline and bank account details. (6) Signature and stamp of an authorized Credit Officer."
    },
    {
      question: "How long does the partner bank take to issue the ₹0 No Dues Certificate (NDC) and update CIBIL?",
      answer: "Under RBI Circular RBI/2023-24/60, partner banks must issue a ₹0 No Dues Certificate and update credit bureaus within 30 calendar days of payment. If the bank delays beyond 30 days, it must pay compensation of ₹5,000 per day to the borrower."
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
            <Smartphone className="w-3.5 h-3.5" />
            <span>Fintech Credit Card Dispute Resolution • OneCard, Slice &amp; Uni India</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">OneCard, Slice & Uni Credit Card Settlement Guide</h1>

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
              <span>RBI Digital Lending &amp; Credit Card Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Fintech Card Settlement</span>
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
                <span>Fintech Settlement Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Fintech card debts are legally owed to partner banks like Federal Bank, SBM Bank, and BOB Financial. Settling after 90 days stops high interest adding. It secures 40% to 65% debt waivers directly through partner bank credit committees with official ₹0 NDCs.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: OneCard, Slice &amp; Uni Fintech Card Settlement</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Partner Bank Reality:</strong> Fintech cards are backed by banks like Federal Bank, SBM Bank India, BOB Financial, and NESFB. Settlements must happen with the partner bank.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Freeze High 36%–48% APR:</strong> Annual interest charges, late fees, and 18% GST can be frozen and 100% waived during formal talks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Substantial 40%–65% OTS Haircuts:</strong> Overdue accounts past 90 days create heavy bank reserves burdens. This opens room for large principal cuts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Anti-Harassment Protections:</strong> RBI rules stop agents from contacting your phonebook, messaging your workplace, or sending abusive WhatsApp threats.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory ₹0 NDC Delivery:</strong> Under RBI Circular RBI/2023-24/60, partner banks must issue a formal ₹0 No Dues Certificate within 30 days of payment.</span>
                </li>
              </ul>
            </div>
            
            {/* Section 1: Fintech Co-Branding & Partner Bank Architecture */}
            <section id="fintech-card-tripartite-architecture" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Tripartite Fintech Architecture &amp; Regulated Entities</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Co-Branded Card Architecture &amp; Risks</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Fintech credit cards like OneCard, Slice, and Uni Card are widely used. They offer sleek metal cards and instant app signups. However, they follow RBI rules on Digital Lending and Credit Cards.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Fintech apps work as Digital Lending Apps (DLAs). The actual lenders are partner banks and NBFCs. OneCard partners with Federal Bank, SBM Bank India, and BOB Financial. Slice works with NESFB. Uni Card partners with RBL Bank and PayU Finance.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When you default, your legal debt is owed to the partner bank. The partner bank reports your default to CIBIL and Experian. Therefore, any valid settlement, debt waiver, and ₹0 No Dues Certificate must come directly from the partner bank&apos;s Credit Committee.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Critical Settlement Rule:</strong> Never accept informal settlements over WhatsApp from collection tele-callers. All genuine One-Time Settlements must be approved by the partner bank and issued on official bank letterhead.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Gen-Z & Millennial Debt Trap & 36%-48% APR Compounding */}
            <section id="genz-millennial-debt-trap-apr" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>2. The 36%–48% APR Trap &amp; Ledger Inflation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Anatomy of Fintech Card Default &amp; Charges</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Fintech cards offer instant credit limits from ₹50,000 to over ₹5,00,000. Job loss or medical costs can make full payments hard. If you pay only the Minimum Amount Due, the bank removes the interest-free grace period on all purchases.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Interest rates of 36% to 48% APR compound daily. Combined with 18% GST and monthly late fees, card balances rise fast. An initial debt of ₹2,00,000 can grow past ₹3,40,000 in one year.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-6">
                <h3 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <Banknote className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Fintech Card Ledger Inflation Mechanics (Example: ₹2,00,000 Default)</span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white text-xs sm:text-sm">
                    <thead>
                      <tr>
                        <th>Default Timeline.</th>
                        <th>Core Principal.</th>
                        <th>Accrued 42% APR + GST.</th>
                        <th>Late &amp. Return Fees.</th>
                        <th>Total Claimed Ledger.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">Month 1 (Due Date Missed).</td>
                        <td>₹2,00,000.</td>
                        <td>₹8,260.</td>
                        <td>₹1,180.</td>
                        <td>₹2,09,440.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Month 3 (60 DPD / SMA-2).</td>
                        <td>₹2,00,000.</td>
                        <td>₹26,180.</td>
                        <td>₹3,540.</td>
                        <td>₹2,29,720.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Month 6 (150 DPD / Substandard).</td>
                        <td>₹2,00,000.</td>
                        <td>₹58,400.</td>
                        <td>₹7,080.</td>
                        <td>₹2,65,480.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Month 12 (365 DPD / Loss Asset).</td>
                        <td>₹2,00,000.</td>
                        <td>₹1,28,600.</td>
                        <td>₹14,160.</td>
                        <td>₹3,42,760.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 3: Delinquency Timeline & NPA Provisioning */}
            <section id="delinquency-timeline-npa-stages" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>3. Delinquency Timeline: DPD 1–90 to NPA</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Chronology of Default: DPD to NPA</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI IRACP rules, overdue credit card accounts move through clearly defined stages:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                <strong>SMA-0 to SMA-2 (Days 1 to 90):</strong> Automated app alerts turn into collection agency calls. Your credit card limit is blocked. And pre-NPA notices are sent.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                <strong>NPA status &amp. reserves (Day 91+):</strong> On day 91, the partner bank marks the card as a defaulted Asset (NPA). The bank stops adding interest to income and locks 15% to 25% capital in loss reserves. After 12 months, the account becomes a Doubtful or Loss Asset. This creates the best time to negotiate a One-Time Settlement (OTS).
              </p>
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>default Stage.</th>
                      <th>DPD Window.</th>
                      <th>RBI Asset status.</th>
                      <th>Partner Bank reserves.</th>
                      <th>OTS Negotiation Feasibility.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-0.</td>
                      <td>1 – 30 Days.</td>
                      <td>Standard Performing Asset.</td>
                      <td>0.40% Standard Provision.</td>
                      <td>Low. Restructuring or EMI conversion offered.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-1 / SMA-2.</td>
                      <td>31 – 90 Days.</td>
                      <td>Special Mention Account.</td>
                      <td>0.40% Standard Provision.</td>
                      <td>Moderate. Penal interest waivers considered.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Substandard NPA.</td>
                      <td>91 – 180 Days.</td>
                      <td>defaulted Asset.</td>
                      <td>15% to 25% Capital Provision.</td>
                      <td>High. 35% to 50% debt haircut possible.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Doubtful / Loss.</td>
                      <td>181 – 365+ Days.</td>
                      <td>Doubtful or Written-Off Asset.</td>
                      <td>40% to 100% Capital Provision.</td>
                      <td>Optimal. 50% to 65% principal haircut possible.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Bank Accounting & NPV Recovery Valuation Math */}
            <section id="npv-recovery-valuation-haircut-matrix" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>4. Bank Accounting &amp; NPV Recovery Valuation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Net Present Value (NPV) Recovery Math</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Fintech cards are unsecured debts. Filing civil suits under Order 37 CPC for ₹1 Lakh to ₹5 Lakhs is costly for partner banks. Court cases take 3 to 5 years and bring high lawyer fees. Instead, banks use Net Present Value (NPV) models to evaluate settlement offers.
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Fintech Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here, C_t is the expected recovery and r is the discount rate. Deductions include litigation costs and locked capital reserves.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When you prove financial hardship, the NPV model shows that accepting a 40% to 55% settlement gives the bank higher recovery than waiting years in court. This allows large principal waivers.
              </p>
            </section>

            {/* Section 5: High-Impact Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-fintech-settlement-blueprint" className="scroll-mt-24 mb-12">
              <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-6 text-slate-800">
                <div className="bg-[#0A2540] text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-[#1F5EFF]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] flex items-center justify-center text-white text-xs shadow-sm">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block">
                        Fintech Resolution Architecture
                      </span>
                      <h3 className="text-sm md:text-base font-black text-white leading-tight">
                        OneCard, Slice &amp; Uni Fintech Card Settlement &amp; Legal Resolution Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/onecard-slice-uni-credit-card-settlement.jpg"
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
                      src="/images/infographics/onecard-slice-uni-credit-card-settlement.jpg"
                      alt="OneCard Slice Uni Fintech Credit Card Settlement and Partner Bank Resolution Blueprint Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Strategy:</strong> Stop WhatsApp recovery threats, freeze 36%–48% APR interest, and negotiate 40%–65% OTS debt waivers directly with partner banks.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Digital Recovery Agency Harassment & RBI Protections */}
            <section id="digital-recovery-harassment-rbi-defense" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>6. Digital Recovery Defense &amp; RBI Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Combatting Digital Recovery Harassment</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Defaulted borrowers often face aggressive collection tactics. These include continuous phone calls, threatening WhatsApp messages. And contact with employers. Under RBI Digital Lending Guidelines and Credit Card rules, these actions are illegal:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-2 text-sm text-slate-700">
                <p><strong>1. Contact Scraping Prohibited:</strong> Lenders cannot access your mobile contacts or call your friends and family.</p>
                <p><strong>2. Calling Window Mandate:</strong> Agents may only call between 08:00 AM and 07:00 PM. Calls outside this time are illegal.</p>
                <p><strong>3. Workplace Harassment Ban:</strong> Visiting your workplace or revealing your debt to coworkers is strictly prohibited.</p>
                <p><strong>4. Fake Legal Notices Barred:</strong> Sending fake police notices or arrest threats violates the IT Act and IPC.</p>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Sending a formal legal notice to the bank Principal Nodal Officer stops harassment. You can also file a complaint on the RBI CMS portal.
              </p>
            </section>

            {/* Section 7: e-NACH PSSA Notices, ODR & Civil Suits */}
            <section id="enach-odr-arbitration-legal-notices" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>7. e-NACH PSSA Notices, ODR &amp; Civil Suits</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Defending Sec 25 PSSA &amp; Arbitration</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When card accounts pass 90 to 120 days overdue, partner banks may start legal actions:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                <strong>Section 25 PSSA Notices:</strong> Failed e-NACH auto-debits trigger notices under Section 25 of the Payment and Settlement Systems Act, 2007. This is a bailable magistrate court proceeding. A prompt legal reply showing financial hardship resolves the case in Lok Adalat.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                <strong>one-sided Digital Arbitration (ODR):</strong> Under Supreme Court rulings in Perkins Eastman and TRF Ltd., lenders cannot pick sole arbitrators alone. Filing legal objections under Sections 12 and 14 of the Arbitration Act halts unfair digital actions.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                <strong>National Lok Adalat:</strong> Partner banks often refer card disputes to Lok Adalat. This provides a court-backed platform to finalize 40% to 60% debt waivers with a binding decree.
              </p>
            </section>

            {/* Section 8: Step-by-Step Fintech Card OTS Roadmap */}
            <section id="step-by-step-fintech-settlement-process" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>8. Step-by-Step Fintech Card OTS Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">5-Step Strategic Settlement Framework</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Follow these five steps to settle your fintech credit card debt safely:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-2.5 text-sm text-slate-700">
                <p><strong>Step 1: Statement Ledger Audit:</strong> Remove penalty fees, late charges, and GST surcharges to find your true borrowed balance.</p>
                <p><strong>Step 2: Hardship Proof Compilation:</strong> Collect job termination letters, bank records, or medical bills to prove financial distress.</p>
                <p><strong>Step 3: Direct Partner Bank Escalation:</strong> Send your settlement petition directly to the partner bank Stressed Assets team.</p>
                <p><strong>Step 4: Structured Haircut Negotiation:</strong> Use recovery math to negotiate a binding 40% to 65% debt waiver.</p>
                <p><strong>Step 5: Verified Payment Execution:</strong> Pay the settlement amount directly into your card account after verifying the official sanction letter.</p>
              </div>
            </section>

            {/* Section 9: Partner Bank Sanction Letter & ₹0 NDC Audit */}
            <section id="partner-bank-sanction-letter-ndc-audit" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>9. Partner Bank Sanction Letter &amp; ₹0 NDC</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Sanction Letter Audit &amp; ₹0 NDC Mandate</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Never pay money on informal messages or phone calls. A genuine OTS letter must meet six key points:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-2 text-sm text-slate-700">
                <p><strong>1. Partner Bank Letterhead:</strong> Must be issued on official letterhead of Federal Bank, SBM Bank, or BOB Financial.</p>
                <p><strong>2. Account &amp. PAN Matching:</strong> Must display your full name, PAN. And exact 16-digit card account number.</p>
                <p><strong>3. Full &amp. Final Clause:</strong> Must state that the payment clears all current and future card liabilities.</p>
                <p><strong>4. Clear Waiver Breakdown:</strong> Must list the exact waiver on principal, interest. And penalty charges.</p>
                <p><strong>5. Payment Deadlines:</strong> Must specify clear payment dates and verified bank payment channels.</p>
                <p><strong>6. Officer Authorization:</strong> Must include the signature, employee code. And official stamp of an authorized Credit Officer.</p>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI Circular RBI/2023-24/60, partner banks must issue the ₹0 No Dues Certificate within 30 days. Delays require the bank to pay ₹5,000 per day to the borrower.
              </p>
            </section>

            {/* Section 10: CIBIL Trajectory & Score Rehabilitation */}
            <section id="cibil-restoration-after-fintech-settlement" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>10. CIBIL Trajectory &amp; Score Rehabilitation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Fintech Card CIBIL Recovery &amp; Credit Rebuilding</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                After settlement, the bank reports the card as &quot;Settled&quot. with a balance of ₹0. Your score may drop by 75 to 120 points at first. However, this stops new default marks and ends legal threats. You can rebuild your score to 750+ within 18 to 24 months:
              </p>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>recovery Phase.</th>
                      <th>Target Timeline.</th>
                      <th>Primary Action Item.</th>
                      <th>Expected CIBIL Trajectory.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Phase 1: Zero Balance Audit.</td>
                      <td>Month 1 – 2.</td>
                      <td>Verify ₹0 balance reporting across CIBIL, Experian, and Equifax.</td>
                      <td>Score stabilizes around 580–620.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Phase 2: Secured Credit Inception.</td>
                      <td>Month 3 – 6.</td>
                      <td>Open a fixed-deposit (FD) backed secured credit card.</td>
                      <td>Score climbs to 650–680.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Phase 3: Utilization Discipline.</td>
                      <td>Month 7 – 12.</td>
                      <td>Maintain credit utilization strictly below 25% of secured limit.</td>
                      <td>Score crosses 700–720.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Phase 4: Prime Credit Restoration.</td>
                      <td>Month 13 – 24.</td>
                      <td>Pay all utility bills and secured EMIs on time without missing dates.</td>
                      <td>Score reaches prime 750–780+.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 11 & CompanySection */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <CompanySection />
            </section>

            {/* Section 12: Frequently Asked Questions (Accordion) */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>12. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">OneCard, Slice &amp; Uni Fintech Card Settlement</h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    name="faq-accordion"
                    className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 open:bg-white open:shadow-md transition-all duration-200"
                  >
                    <summary className="font-bold text-slate-900 text-base md:text-lg cursor-pointer flex items-center justify-between list-none">
                      <span>{faq.question}</span>
                      <ChevronDown className="w-5 h-5 text-[#1F5EFF] group-open:rotate-180 transition-transform duration-200 flex-shrink-0 ml-3" />
                    </summary>
                    <div className="mt-4 pt-4 border-t border-slate-100 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Official Statutory & Regulatory Reference Strip (5 Links) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#1F5EFF]" />
                Official Statutory &amp; Regulatory References
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank of India (RBI):</strong> Guidelines on Digital Lending – Regulated Entities, DLAs &amp. LSPs (2022 / Updated 2026).
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>RBI Master Direction:</strong> Credit Card and Debit Card – Issuance and Conduct Directions, 2022 (Updated 2026).
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>RBI Circular RBI/2023-24/60:</strong> Responsible Lending Conduct – Release of Movable/Immovable Property Documents &amp. ₹0 NDC 30-Day Mandate.
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Online Complaint Management System (CMS) for Recovery Harassment &amp. Excessive Levies.
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987. National Lok Adalat settlement Framework.
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Guides & Resources Strip (10 Topic Badges) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1F5EFF]" />
                Explore Related Credit Card &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/american-express-amex-credit-card-settlement-india"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  American Express Credit Card Settlement
                </Link>
                <Link
                  href="/credit-card-settlement-above-1-lakh"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Credit Card Settlement Above ₹1 Lakh
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/app-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Instant App Loan Settlement
                </Link>
                <Link
                  href="/bank-ka-legal-notice-aane-par-kya-kare"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank Legal Notice Reply &amp; Defense
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Dispute Settlement
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/recovery-agent-threatening-me"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Halting Recovery Harassment &amp; RBI Rules
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank Arbitration Notice Response
                </Link>
                <Link
                  href="/cibil-score-kaise-sudhare-settlement-ke-baad"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  CIBIL Score Recovery After Settlement
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column (Sidebar Cards) */}
          <aside className="w-full sticky top-24 space-y-6">
            {/* Card 1: Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Link href="/authors/ashish-jhangra" className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md hover:opacity-90 transition-opacity">
                    AJ
                  </div>
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
                    Lead Banking Legal &amp. Debt Settlement Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has led over 1,200 successful credit card and corporate debt settlements across Federal Bank, SBM Bank, BOB Financial, HDFC Bank, ICICI Bank, and American Express. He specializes in fintech card disputes, Section 25 PSSA defense. And borrower advocacy under RBI rules.
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
                <span>Fintech Dispute Resolution</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing OneCard, Slice or Uni Default?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop aggressive WhatsApp recovery threats and high APR interest today. Our banking advocates defend partner bank legal notices, audit your statements. And negotiate an official stamped OTS settlement letter.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to a Settlement Advocate
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
                    <strong>Direct Partner Bank help:</strong> We bypass collection tele-callers to represent your case directly before partner bank Stressed Assets Committees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> We issue prompt legal notices to halt workplace calling and WhatsApp threats under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Verification:</strong> We verify every settlement on official partner bank letterhead before you make any payment.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC Delivery:</strong> We track your case until your formal No Dues Certificate is delivered and CIBIL balance is updated to zero.
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
