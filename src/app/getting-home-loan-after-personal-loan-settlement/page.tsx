import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
  Home,
  Percent,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home Loan After Personal Loan Settlement | SettleLoans',
  description: 'Can you get a home loan after settling personal loans? Discover the credit score rebuilding roadmap and lender approval rules via SettleLoans.',
  keywords: [
    'can i get home loan after loan settlement',
    'getting home loan after personal loan settlement',
    'home loan after loan settlement cibil',
    'how to get home loan after settlement',
    'home loan after one time settlement ots',
    'nbfc home loan after settled status',
    'convert settled to closed cibil',
    'housing loan eligibility after personal loan settlement',
    'co applicant home loan after loan settlement',
    'cibil score required for home loan after settlement',
    'rbi guidelines for home loan after debt settlement',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/getting-home-loan-after-personal-loan-settlement',
  },
  openGraph: {
    title: 'Can I Get Home Loan After Loan Settlement? Step-by-Step Approval Guide (2026)',
    description: 'Learn how to secure a home loan after settling an unsecured personal loan. Comprehensive analysis of credit bureau flags, converting Settled to Closed, and NBFC manual underwriting.',
    url: 'https://www.settleloans.in/getting-home-loan-after-personal-loan-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/getting-home-loan-after-personal-loan-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'Home Loan Approval Roadmap After Personal Loan Settlement in India',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Getting a Home Loan After Personal Loan Settlement: Eligibility & Roadmap',
    description: 'Technical and legal blueprint for securing a mortgage after loan settlement. Master credit score repair, status conversion, and specialized housing finance approvals.',
    images: ['https://www.settleloans.in/images/infographics/getting-home-loan-after-personal-loan-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/getting-home-loan-after-personal-loan-settlement#webpage",
      "url": "https://www.settleloans.in/getting-home-loan-after-personal-loan-settlement",
      "name": "Can I Get Home Loan After Loan Settlement? Step-by-Step Approval Guide (2026)",
      "description": "Comprehensive guide on obtaining a home loan after personal loan settlement. Learn about credit bureau reporting, converting Settled to Closed, and NBFC mortgage eligibility.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/getting-home-loan-after-personal-loan-settlement#breadcrumb"
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
      "@id": "https://www.settleloans.in/getting-home-loan-after-personal-loan-settlement#breadcrumb",
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
          "name": "Home Loan After Settlement",
          "item": "https://www.settleloans.in/getting-home-loan-after-personal-loan-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/getting-home-loan-after-personal-loan-settlement#article",
      "headline": "Can I Get Home Loan After Loan Settlement? The Ultimate Roadmap & CIBIL Rebuilding Guide",
      "description": "An exhaustive editorial and legal guide explaining how borrowers can overcome 'Settled' marks on their credit reports to secure a residential home loan through NBFCs, HFCs, and credit conversion.",
      "image": "https://www.settleloans.in/images/infographics/getting-home-loan-after-personal-loan-settlement.jpg",
      "datePublished": "2026-09-02T12:00:00+05:30",
      "dateModified": "2026-09-02T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/getting-home-loan-after-personal-loan-settlement#webpage"
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
      "@id": "https://www.settleloans.in/getting-home-loan-after-personal-loan-settlement#service",
      "name": "SettleLoans - Post-Settlement Credit Rehabilitation & Mortgage Advisory",
      "description": "Specialized advisory and legal assistance for credit score rehabilitation, status conversion from Settled to Closed, and structuring home loan applications following loan settlements.",
      "url": "https://www.settleloans.in/getting-home-loan-after-personal-loan-settlement",
      "image": "https://www.settleloans.in/images/infographics/getting-home-loan-after-personal-loan-settlement.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Connaught Place",
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
        "reviewCount": "1940",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rohan Mehra"
          },
          "datePublished": "2026-07-15",
          "reviewBody": "After settling a ₹6 Lakh personal loan during a job transition, Tier-1 banks instantly rejected my home loan applications. SettleLoans guided me through a 24-month credit rebuilding plan with FD-backed cards and helped me approach an HFC with manual underwriting. I secured a ₹42 Lakh housing loan sanction smoothly.",
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
            "name": "Ananya Mukherjee"
          },
          "datePublished": "2026-06-28",
          "reviewBody": "My credit report had a 'Settled' remark from 2024 that blocked all mortgage avenues. SettleLoans helped negotiate with the original bank to pay off the balance differential, converted the account status to 'Closed', updated CIBIL records, and cleared the path for our dream apartment purchase.",
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
            "name": "Karthik Subramanian"
          },
          "datePublished": "2026-08-04",
          "reviewBody": "The forensic breakdown of FOIR and LTV ratios made all the difference. When standard retail branches gave vague answers, SettleLoans explained how Housing Finance Companies view collateralized loans differently from past unsecured defaults. Got our joint home loan approved in Pune.",
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
          "datePublished": "2026-08-22",
          "reviewBody": "Highly professional guidance on post-settlement mortgage approvals. They prevented multiple hard credit inquiries that would have further damaged my score and connected me with an NBFC lender willing to evaluate my current stable business cash flows.",
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
      "@id": "https://www.settleloans.in/getting-home-loan-after-personal-loan-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I get a home loan in India after settling a personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. While prime banks decline immediate applications, Non-Banking Financial Companies (NBFCs) and Housing Finance Companies (HFCs) approve mortgages after 24–36 months of clean repayments or upon converting 'Settled' to 'Closed' status."
          }
        },
        {
          "@type": "Question",
          "name": "Why do Tier-1 banks like SBI, HDFC, and ICICI reject home loans after settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tier-1 banks use automated Straight-Through Processing (STP) filters that instantly disqualify any profile containing 'Settled' or 'Written Off' remarks, bypassing manual review."
          }
        },
        {
          "@type": "Question",
          "name": "How long should I wait after a loan settlement before applying for a home loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A cooling period of 24 to 36 months is recommended to establish a flawless on-time payment track record on secured credit instruments before applying."
          }
        },
        {
          "@type": "Question",
          "name": "Can I convert my CIBIL status from 'Settled' to 'Closed' to qualify for a home loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Paying the differential haircut amount to the original lender allows them to issue an updated No Dues Certificate and update credit bureaus to 'Closed' within 30 days."
          }
        },
        {
          "@type": "Question",
          "name": "Which financial institutions offer home loans to applicants with past settled loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HFCs and NBFCs such as Piramal, PNB Housing, Aadhar Housing, Tata Capital, Home First, and Shriram Housing operate manual underwriting desks for qualifying borrowers."
          }
        },
        {
          "@type": "Question",
          "name": "How does having a credit-healthy co-applicant help in getting a home loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Adding a co-applicant with a 750+ CIBIL score enables combined household FOIR evaluation and significantly improves loan approval probability and interest terms."
          }
        },
        {
          "@type": "Question",
          "name": "What minimum CIBIL score is required for a home loan after loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Specialized HFCs consider CIBIL scores between 650 and 720 when supported by higher margin money (25%–35%) and verifiable income stability."
          }
        },
        {
          "@type": "Question",
          "name": "Does a home loan lender have lower risk because the property is mortgaged?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Residential home loans are secured under the SARFAESI Act, 2002, granting lenders statutory collateral recovery rights that reduce credit risk compared to unsecured loans."
          }
        },
        {
          "@type": "Question",
          "name": "What is the impact of multiple home loan rejections on my credit score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simultaneous applications generate hard inquiries that drop credit scores. Pre-screening through specialized housing advisors prevents adverse inquiry accumulation."
          }
        },
        {
          "@type": "Question",
          "name": "What documentation is vital when applying for a mortgage post-settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Key documents include the original Settlement Letter and NDC, 24–36 months of clean bank statements, 3 years of ITRs/Form 16, and a formal credit hardship explanation."
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

export default function GettingHomeLoanAfterPersonalLoanSettlementPage() {
  const tocItems = [
    { id: 'prime-bank-rejection-reality', title: '1. Prime Bank Rejection Reality & STP Algorithms' },
    { id: 'cibil-forensics-settled-vs-closed', title: '2. Credit Bureau Encoding: Settled vs. Closed' },
    { id: 'statutory-mortgage-protections-rbi', title: '3. SARFAESI & Secured Housing Risk Dynamics' },
    { id: 'credit-rebuilding-protocol-24-36-months', title: '4. 24–36 Month Credit Rehabilitation Protocol' },
    { id: 'infographic-mortgage-roadmap', title: '5. Visual Home Loan Roadmap' },
    { id: 'converting-settled-to-closed-cibil', title: '6. Converting "Settled" to "Closed" Status' },
    { id: 'nbfc-hfc-manual-underwriting', title: '7. NBFC & HFC Manual Underwriting Desks' },
    { id: 'foir-ltv-solvency-mathematics', title: '8. FOIR, LTV & Solvency Forensic Calculations' },
    { id: 'comparative-lender-matrix-table', title: '9. Comparative Mortgage Approval Matrix' },
    { id: 'strategic-home-loan-execution-plan', title: '10. Strategic Sanction Execution Plan' },
    { id: 'faqs', title: '11. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "Can I get a home loan in India after settling a personal loan?",
      answer: "Yes. While prime banks decline immediate applications, Non-Banking Financial Companies (NBFCs) and Housing Finance Companies (HFCs) approve mortgages after 24–36 months of clean repayments or upon converting 'Settled' to 'Closed' status."
    },
    {
      question: "Why do Tier-1 banks like SBI, HDFC, and ICICI reject home loans after settlement?",
      answer: "Tier-1 banks use automated Straight-Through Processing (STP) filters that instantly disqualify any profile containing 'Settled' or 'Written Off' remarks, bypassing manual review."
    },
    {
      question: "How long should I wait after a loan settlement before applying for a home loan?",
      answer: "A cooling period of 24 to 36 months is recommended to establish a flawless on-time payment track record on secured credit instruments before applying."
    },
    {
      question: "Can I convert my CIBIL status from 'Settled' to 'Closed' to qualify for a home loan?",
      answer: "Yes. Paying the differential haircut amount to the original lender allows them to issue an updated No Dues Certificate and update credit bureaus to 'Closed' within 30 days."
    },
    {
      question: "Which financial institutions offer home loans to applicants with past settled loans?",
      answer: "HFCs and NBFCs such as Piramal, PNB Housing, Aadhar Housing, Tata Capital, Home First, and Shriram Housing operate manual underwriting desks for qualifying borrowers."
    },
    {
      question: "How does having a credit-healthy co-applicant help in getting a home loan?",
      answer: "Adding a co-applicant with a 750+ CIBIL score enables combined household FOIR evaluation and significantly improves loan approval probability and interest terms."
    },
    {
      question: "What minimum CIBIL score is required for a home loan after loan settlement?",
      answer: "Specialized HFCs consider CIBIL scores between 650 and 720 when supported by higher margin money (25%–35%) and verifiable income stability."
    },
    {
      question: "Does a home loan lender have lower risk because the property is mortgaged?",
      answer: "Yes. Residential home loans are secured under the SARFAESI Act, 2002, granting lenders statutory collateral recovery rights that reduce credit risk compared to unsecured loans."
    },
    {
      question: "What is the impact of multiple home loan rejections on my credit score?",
      answer: "Simultaneous applications generate hard inquiries that drop credit scores. Pre-screening through specialized housing advisors prevents adverse inquiry accumulation."
    },
    {
      question: "What documentation is vital when applying for a mortgage post-settlement?",
      answer: "Key documents include the original Settlement Letter and NDC, 24–36 months of clean bank statements, 3 years of ITRs/Form 16, and a formal credit hardship explanation."
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
            <Home className="w-3.5 h-3.5" />
            <span>Post-Settlement Mortgage Advisory • Housing Finance &amp; Credit Rebuilding</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Getting a Home Loan After Personal Loan Settlement</h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>
                Written by{' '}
                <Link
                  href="/authors/ashish-jhangra"
                  className="font-bold underline hover:text-white transition-colors"
                >
                  Ashish Jhangra
                </Link>
              </span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: September 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI &amp; NHB Underwriting Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Check Home Loan Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Book Expert Consultation
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
                <span>Executive Crux: Post-Settlement Mortgages</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                While prime commercial banks deploy automated STP scorecard rejection filters against any &apos;Settled&apos; CIBIL record, specialized NBFCs and Housing Finance Companies (HFCs) regularly sanction mortgages after 24–36 months of disciplined credit rehabilitation or status conversion to &apos;Closed&apos;.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Home Loan Approval After Loan Settlement</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Prime Bank Automated Filters:</strong> Tier-1 retail banks deploy Straight-Through Processing models that decline applicants with &apos;Settled&apos; or &apos;Post-Write-off Settled&apos; remarks automatically.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>The HFC Approval Channel:</strong> Non-Banking Financial Companies and Housing Finance Companies operate manual underwriting desks capable of evaluating compensating factors and SARFAESI property collateral.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>24–36 Month Cooling Window:</strong> Borrowers must establish an uninterrupted 24 to 36 month track record of on-time payments using secured credit cards before applying for long-term mortgage financing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Status Conversion to &apos;Closed&apos;:</strong> Clearing the historical haircut balance with the original lender unlocks an updated No Dues Certificate and flips CIBIL status to &apos;Closed&apos;.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Application Structuring:</strong> Adding a credit-healthy co-applicant, increasing margin money to 25%–35%, and maintaining FOIR below 45% maximizes mortgage approval certainty.</span>
                </li>
              </ul>
            </div>
            
            {/* Section 1: Prime Bank Rejection Reality & STP Algorithms */}
            <section id="prime-bank-rejection-reality" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Prime Bank Underwriting Reality &amp; STP Algorithms</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Tier-1 Commercial Banks Instantly Reject Post-Settlement Mortgage Applications
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The most urgent aspiration of individuals who have resolved debt through a compromise is securing a residential home. However, approaching major retail lenders such as the State Bank of India (SBI), HDFC Bank, ICICI Bank, or Axis Bank within twelve to twenty-four months of a settlement almost invariably results in automated rejection. Prime commercial institutions process vast retail volumes using Straight-Through Processing (STP) credit engines that ingest data from CIBIL, Experian, Equifax, and CRIF High Mark. When negative taxonomy flags such as &apos;Settled&apos;, &apos;Written Off&apos;, or severe Days Past Due (DPD) are identified, the application is terminated before a human credit manager ever reviews the file.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Tier-1 retail bank credit policies view past compromise settlements as evidence of loss crystallization under Reserve Bank of India provisioning guidelines. To these lenders, the prior haircut signifies elevated institutional risk, categorizing the borrower as high-risk for multi-decade mortgage products regardless of current salary stability or substantial savings. Overcoming this hurdle requires understanding alternative institutional lending frameworks.
              </p>
            </section>

            {/* Section 2: Credit Bureau Encoding: Settled vs. Closed */}
            <section id="cibil-forensics-settled-vs-closed" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>2. Credit Bureau Mechanics &amp; Taxonomy Forensics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                How Credit Information Companies Record Compromise Settlements in Your Credit History
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), resolved debt is not marked as &apos;Closed&apos; unless all contractual obligations are satisfied in full. In a One-Time Settlement (OTS), the lender reports the account status as &apos;Settled&apos; or &apos;Post-Write-off Settled&apos;. While &apos;Closed&apos; denotes full contractual fulfillment, &apos;Settled&apos; indicates that the lender absorbed an unrecovered balance, which remains explicitly detailed in the credit trade-line segment.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Delinquency trade-lines and settlement remarks can remain visible on bureau reports for up to seven years. Although the three-digit CIBIL score can recover over twenty-four to thirty-six months through disciplined management, the qualitative &apos;Settled&apos; flag continues to trigger automated underwriting filters, making targeted credit rehabilitation and manual underwriting essential.
              </p>
            </section>

            {/* Section 3: SARFAESI & Secured Housing Risk Dynamics */}
            <section id="statutory-mortgage-protections-rbi" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>3. Statutory Protections &amp; Secured Collateral Dynamics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Secured Residential Mortgages Present Lower Risk Profiles Than Past Unsecured Defaults
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The crucial advantage for post-settlement home loan applicants lies in the distinction between unsecured debt and collateralized mortgages. Personal loans and credit cards lack underlying assets, leaving lenders reliant on civil litigation during default. Conversely, residential home loans are secured transactions governed by the SARFAESI Act, 2002, granting lenders statutory powers under Section 13 to enforce security interests and auction mortgaged real estate without prolonged civil court proceedings.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Backed by conservative Loan-to-Value (LTV) ratios of 65% to 75%, institutional loss-given-default (LGD) on residential property is markedly lower than unsecured facilities. Specialized Housing Finance Companies leverage this tangible security framework to approve mortgages for settled borrowers who demonstrate reliable ongoing cash flows.
              </p>
            </section>

            {/* Section 4: 24–36 Month Credit Rehabilitation Protocol */}
            <section id="credit-rebuilding-protocol-24-36-months" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>4. 24–36 Month Credit Rehabilitation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The Rigorous Two-Year Discipline Roadmap to Rebuild Your Credit Score Above 750
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Following a loan settlement, CIBIL scores typically drop into the 550 to 650 range. Applying immediately triggers hard inquiries that worsen the profile. Instead, borrowers must execute a structured 24-to-36-month rehabilitation protocol. Opening a fixed deposit of ₹50,000 to ₹1,00,000 enables obtaining a secured credit card. Keeping monthly credit utilization below 25% and clearing balances in full prior to due dates steadily rebuilds positive trade-line momentum.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers should avoid high-interest fintech micro-loans and BNPL facilities during this phase. Twenty-four consecutive months of zero-DPD repayment history demonstrates renewed financial discipline, successfully lifting credit scores back into the 720 to 760 tier.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-mortgage-roadmap" className="scroll-mt-24 my-12">
              <div className="bg-slate-900 rounded-3xl p-4 sm:p-6 md:p-8 text-white shadow-xl border border-slate-800">
                <div className="flex items-center gap-2.5 text-blue-400 font-bold text-xs uppercase tracking-wider mb-3">
                  <Layers className="w-4 h-4" />
                  <span>5. Comprehensive Mortgage Transition Framework</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-4 leading-snug">
                  Visual Roadmap: From Unsecured Loan Settlement to Residential Mortgage Sanction
                </h3>
                <div className="relative w-full overflow-hidden rounded-2xl border border-slate-700/80 shadow-2xl bg-slate-950">
                  <Image
                    src="/images/infographics/getting-home-loan-after-personal-loan-settlement.jpg"
                    alt="Home Loan Approval Roadmap After Personal Loan Settlement in India"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300"
                    priority={false}
                  />
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4">
                  The visual roadmap illustrates the key transition phases: managing prime bank STP realities, completing structured credit repair, executing status conversion from &apos;Settled&apos; to &apos;Closed&apos;, and securing HFC mortgage sanction.
                </p>
              </div>
            </section>

            {/* Section 6: Converting "Settled" to "Closed" Status */}
            <section id="converting-settled-to-closed-cibil" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>6. Legal &amp; Commercial Status Conversion</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                How to Convert Your CIBIL Status from &apos;Settled&apos; to &apos;Closed&apos; via Haircut Buyout
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                To qualify for prime bank home loans at competitive repo-linked rates (8.35%–8.75%), converting &apos;Settled&apos; remarks to &apos;Closed&apos; is the most definitive solution. Banking guidelines permit borrowers to reopen past compromise accounts and clear the waived haircut differential.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The borrower petitions the original lender&apos;s Stressed Assets Desk for a formal computation of the haircut balance. Upon payment through official channels, the lender issues a revised No Dues Certificate and updates CIBIL, Experian, Equifax, and CRIF High Mark to &apos;Closed&apos; under Section 21 of CICRA within 30 to 45 days, restoring prime mortgage eligibility.
              </p>
            </section>

            {/* Section 7: NBFC & HFC Manual Underwriting Desks */}
            <section id="nbfc-hfc-manual-underwriting" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Landmark className="w-4 h-4" />
                <span>7. Specialized Housing Finance Underwriting</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Navigating NBFC and Housing Finance Company (HFC) Manual Underwriting Desks
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When paying the historical haircut is unfeasible, specialized NBFCs and Housing Finance Companies (such as Piramal, PNB Housing, Aadhar, Tata Capital, Home First, and Shriram Housing) offer viable mortgage avenues. Their credit underwriters conduct case-by-case qualitative assessments of current cash flows, 12–24 months of bank credits, and collateral legal title.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                While initial HFC interest rates are priced 150–300 bps higher (10.25%–12.50%), maintaining 36 months of prompt EMI payments elevates credit scores above 780, enabling refinancing to prime banks at reduced rates.
              </p>
            </section>

            {/* Section 8: FOIR, LTV & Solvency Forensic Calculations */}
            <section id="foir-ltv-solvency-mathematics" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>8. Underwriting Solvency &amp; Mortgage Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Forensic Solvency Math: Calculating Your FOIR, LTV Ratios, and Loan Eligibility
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Housing finance credit committees evaluate post-settlement profiles against conservative debt-to-income benchmarks. The Fixed Obligation to Income Ratio (FOIR) is strictly capped at 40% to 45% of net verifiable income.
              </p>

              {/* JSX Container Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Mortgage Underwriting Solvency &amp; Eligibility Formulas</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  FOIR = ( Total Existing Monthly EMIs + Proposed Home Loan EMI ) / Net Monthly Verifiable Income &lt;= 0.45
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  Max Permissible Loan = Property Market Valuation * Maximum Sanctioned LTV (65% to 75%)
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where income is verified via audited tax filings, proposed EMI is stress-tested, and LTV requires 25%–35% applicant margin money.
                </p>
              </div>
            </section>

            {/* Section 9: Comparative Mortgage Approval Matrix */}
            <section id="comparative-lender-matrix-table" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>9. Comparative Institutional Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Comparative Analysis: Prime Banks vs. NBFCs vs. HFCs vs. Co-Applicant Channels
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Key underwriting benchmarks across primary Indian lending channels:
              </p>

              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Lending Channel</th>
                      <th>Approval Feasibility</th>
                      <th>Mandatory Cooling Period</th>
                      <th>Minimum CIBIL Score</th>
                      <th>Permissible LTV Cap</th>
                      <th>Indicative Interest Spread</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Prime Commercial Banks</strong> (SBI, HDFC, ICICI, Axis)</td>
                      <td>Very Low (&lt; 5%) unless converted to &apos;Closed&apos;</td>
                      <td>48 to 60 Months (or post-conversion)</td>
                      <td>750+ (Unblemished Trade-lines)</td>
                      <td>Up to 80%–85%</td>
                      <td>8.35% – 8.85% p.a. (Repo Linked)</td>
                    </tr>
                    <tr>
                      <td><strong>Upper-Layer Corporate NBFCs</strong> (Tata Capital, Bajaj, Aditya Birla)</td>
                      <td>Moderate to High (55%–70%) via manual review</td>
                      <td>24 to 36 Months of clean history</td>
                      <td>680 – 730</td>
                      <td>Up to 75%</td>
                      <td>9.50% – 11.00% p.a.</td>
                    </tr>
                    <tr>
                      <td><strong>Specialized Affordable HFCs</strong> (Piramal, PNB Housing, Aadhar)</td>
                      <td>High (75%–85%) with documented cash flows</td>
                      <td>18 to 24 Months</td>
                      <td>630 – 680 (Manual Underwriting)</td>
                      <td>65% – 75%</td>
                      <td>10.50% – 12.50% p.a.</td>
                    </tr>
                    <tr>
                      <td><strong>Joint Co-Applicant Route</strong> (Credit-healthy primary co-borrower)</td>
                      <td>Very High (85%–95%) across institutions</td>
                      <td>Immediate to 12 Months</td>
                      <td>760+ (Primary Co-Applicant)</td>
                      <td>Up to 80%</td>
                      <td>8.50% – 9.50% p.a.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Applying jointly with an unblemished earning co-applicant remains the fastest method to secure competitive interest terms.
              </p>
            </section>

            {/* Section 10: Strategic Sanction Execution Plan */}
            <section id="strategic-home-loan-execution-plan" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>10. Execution Plan &amp; Application Checklist</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Step-by-Step Strategic Blueprint for Submitting a Successful Mortgage Application
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Before applying, assemble an airtight documentation package: original Settlement Agreement and No Dues Certificate, 24 months of return-free bank statements, 3 years of audited ITRs/Form 16, and evidence of recent clean repayment. Avoid multiple digital aggregators to prevent hard credit inquiries, and route applications through experienced debt strategists directly to manual underwriting desks.
              </p>
            </section>

            {/* Company Section Component */}
            <CompanySection />

            {/* Section 11: Frequently Asked Questions (FAQ Accordion) */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>11. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions About Getting a Home Loan After Loan Settlement
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

            {/* Regulatory References & Official Sources Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                Official Regulatory References &amp; Statutory Circulars
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
                    href="https://nhb.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>National Housing Bank (NHB):</strong> Housing Finance Companies (HFCs) Regulatory Framework and Fair Practices Guidelines
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Data Reporting, Account Status Rectification &amp; Dispute Redressal Standards
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Redressal of Credit Information Reporting Delays &amp; No Dues Certificate Violations
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
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987 — Compoundable Conciliation Framework
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
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/remove-settled-status-from-cibil"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Remove Settled Status from CIBIL
                </Link>
                <Link
                  href="/cibil-score-kaise-sudhare-settlement-ke-baad"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  CIBIL Score Kaise Sudhare Settlement Ke Baad
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/loan-against-property-lap-shortfall-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Against Property (LAP) Settlement
                </Link>
                <Link
                  href="/bank-delaying-original-property-documents-after-home-loan-settlement-rbi-rules"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank Delaying Original Property Documents RBI Rules
                </Link>
                <Link
                  href="/unsecured-business-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Unsecured Business Loan Settlement
                </Link>
                <Link
                  href="/minimum-cibil-score-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Minimum CIBIL Score Requirements
                </Link>
                <Link
                  href="/full-and-final-settlement-vs-compromise-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Full &amp; Final vs Compromise Settlement
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column (Sidebar Cards) */}
          <aside className="w-full sticky top-24 space-y-6">
            {/* Card 1: Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Link
                  href="/authors/ashish-jhangra"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md hover:opacity-90 transition-opacity flex-shrink-0"
                >
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
                Ashish has advised over 1,500+ borrowers on debt compromise resolutions, credit bureau rehabilitation, and post-settlement housing finance approvals across leading public banks, private lenders, and Housing Finance Companies in India.
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
                <span>Post-Settlement Mortgage Advisory</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Planning to Buy a Home Post-Settlement?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Do not let automated bank rejections damage your credit further. Let our specialized debt strategists audit your credit report, structure your CIBIL rehabilitation roadmap, convert historical settlements to &apos;Closed&apos;, and secure manual HFC mortgage underwriting.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Schedule Mortgage Assessment
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
                    <strong>Institutional Direct Access:</strong> Direct liaison with Zonal Credit Committees and specialized HFC manual underwriting desks.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>CIBIL Status Rectification:</strong> End-to-end legal support to negotiate haircut buyouts and transition records from &apos;Settled&apos; to &apos;Closed&apos;.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Hard Inquiry Shield:</strong> Comprehensive pre-qualification to eliminate multiple hard credit pulls that degrade your credit score.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Statutory Compliance:</strong> Full adherence to RBI Master Directions and National Housing Bank regulatory guidelines.
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
