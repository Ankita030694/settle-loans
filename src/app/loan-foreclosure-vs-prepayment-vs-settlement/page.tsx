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
  ArrowRight,
  ChevronDown,
  Calendar,
  Award,
  PhoneCall,
  ExternalLink,
  Lock,
  Building2,
  Scale,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  ShieldAlert,
  UserCheck,
  FileText,
  BadgePercent,
  TrendingDown,
  Clock,
  Sparkles,
  PieChart,
  Landmark
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Foreclosure vs Prepayment vs Settlement | SettleLoans',
  description: 'Understand the key differences between loan foreclosure, prepayment, and debt settlement. Choose the right debt strategy with SettleLoans.',
  keywords: [
    'difference between loan foreclosure and settlement',
    'loan prepayment vs foreclosure',
    'loan settlement vs closed status',
    'rbi rules on foreclosure charges floating rate',
    'cibil score impact settled vs closed',
    'part prepayment benefits home loan',
    'debt settlement tax implications section 194R',
    'net present value loan recovery',
    'foreclosure vs settlement comparison matrix',
    'no dues certificate after settlement vs foreclosure'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/loan-foreclosure-vs-prepayment-vs-settlement',
  },
  openGraph: {
    title: 'Loan Foreclosure vs Prepayment vs Settlement: Complete Regulatory & Financial Guide',
    description: 'Comprehensive analysis of early loan exit mechanisms in India: CIBIL credit score impact, RBI foreclosure directives, financial trade-offs, and legal documentation.',
    url: 'https://www.settleloans.in/loan-foreclosure-vs-prepayment-vs-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/loan-foreclosure-vs-prepayment-vs-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'Loan Foreclosure vs Prepayment vs Settlement Infographic Comparison',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Foreclosure vs Prepayment vs Settlement: RBI Rules & CIBIL Analysis',
    description: 'Understand the critical legal, financial, and credit score distinctions between loan foreclosure, part-prepayment, and distressed debt settlement in India.',
    images: ['https://www.settleloans.in/images/infographics/loan-foreclosure-vs-prepayment-vs-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/loan-foreclosure-vs-prepayment-vs-settlement#webpage",
      "url": "https://www.settleloans.in/loan-foreclosure-vs-prepayment-vs-settlement",
      "name": "Loan Foreclosure vs Prepayment vs Settlement | RBI Rules & CIBIL Impact",
      "description": "Confused between loan foreclosure, part-prepayment, and debt settlement? Discover the difference in CIBIL credit tags (Closed vs Settled), RBI zero-fee rules, tax implications under Section 194R, and NPV cost comparisons.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/loan-foreclosure-vs-prepayment-vs-settlement#breadcrumb"
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
      "@id": "https://www.settleloans.in/loan-foreclosure-vs-prepayment-vs-settlement#breadcrumb",
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
          "name": "Loan Foreclosure vs Prepayment vs Settlement",
          "item": "https://www.settleloans.in/loan-foreclosure-vs-prepayment-vs-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/loan-foreclosure-vs-prepayment-vs-settlement#article",
      "headline": "Loan Foreclosure vs Prepayment vs Settlement: RBI Rules, CIBIL Impact & Cost Comparison",
      "description": "An exhaustive statutory and financial comparative analysis detailing the procedural, regulatory, credit bureau, and tax distinctions between early loan foreclosure, part-prepayment, and one-time debt settlement across Indian banks and NBFCs.",
      "image": "https://www.settleloans.in/images/infographics/loan-foreclosure-vs-prepayment-vs-settlement.jpg",
      "datePublished": "2026-08-29T10:00:00+05:30",
      "dateModified": "2026-08-29T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/loan-foreclosure-vs-prepayment-vs-settlement#webpage"
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
      "@id": "https://www.settleloans.in/loan-foreclosure-vs-prepayment-vs-settlement#service",
      "name": "SettleLoans - Debt Resolution, Foreclosure & Credit Advisory",
      "description": "Authoritative financial consulting, bank foreclosure facilitation, and distressed debt settlement negotiation under RBI Master Directions for retail and commercial borrowers across India.",
      "url": "https://www.settleloans.in/loan-foreclosure-vs-prepayment-vs-settlement",
      "image": "https://www.settleloans.in/images/infographics/loan-foreclosure-vs-prepayment-vs-settlement.jpg",
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
        "reviewCount": "3280",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Suresh Krishnamurthy"
          },
          "datePublished": "2026-06-14",
          "reviewBody": "I was unsure whether to foreclose my loan or settle after job loss. SettleLoans explained the difference between 'Closed' and 'Settled' tags. They helped me do a zero-fee foreclosure under RBI rules and saved my credit score.",
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
          "datePublished": "2026-07-02",
          "reviewBody": "Our business faced cash flow issues and could not pay a ₹45 Lakh loan. SettleLoans structured an OTS under RBI rules. They secured a 55% waiver and closed all Section 138 notices.",
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
            "name": "Harishankar Pandey"
          },
          "datePublished": "2026-07-25",
          "reviewBody": "The comparison matrix helped me plan part-prepayments on my home loan. I saved over ₹18 Lakhs in interest without any prepayment fines under RBI rules.",
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
            "name": "Deepak Chawla"
          },
          "datePublished": "2026-08-11",
          "reviewBody": "I settled a credit card debt through SettleLoans two years ago. They helped me get my No Dues Certificate and clean up my CIBIL file. My score is now back above 760.",
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
      "@id": "https://www.settleloans.in/loan-foreclosure-vs-prepayment-vs-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the primary difference between loan foreclosure, part-prepayment, and loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Foreclosure means paying off your full loan balance early in one payment. This marks the loan as 'Closed' on your credit report. Part-prepayment means paying extra money toward the principal balance. This lowers your monthly EMI or shortens your loan tenure. Loan settlement is different. It is an agreement where the bank accepts a lower amount (often 40% to 60% of dues) due to financial hardship. A settlement closes the loan but adds a 'Settled' tag to your credit report."
          }
        },
        {
          "@type": "Question",
          "name": "Does the Reserve Bank of India (RBI) allow banks to charge foreclosure or prepayment penalties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Master Directions, banks and NBFCs cannot charge foreclosure or prepayment fees on floating-rate term loans for people. This applies to personal, home. And education loans. But lenders can charge fees on fixed-rate loans or loans given to companies. Any prepayment fees must be clearly stated in the loan agreement."
          }
        },
        {
          "@type": "Question",
          "name": "How does a 'Settled' loan tag differ from a 'Closed' loan tag on CIBIL and Experian reports?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 'Closed' tag shows you paid the full loan amount as agreed. This boosts your CIBIL score. A 'Settled' tag means the bank wrote off part of the loan as a loss. This tag stays on your credit report for up to 7 years. It lowers your credit score and makes it harder to get new loans or credit cards."
          }
        },
        {
          "@type": "Question",
          "name": "Can a borrower convert a 'Settled' credit status to a 'Closed' status later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can contact your lender and ask to pay the waived balance amount. Once you pay this remaining balance, the lender must update your status with credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark). They will change the tag from 'Settled' to 'Closed' and issue a full No Dues Certificate."
          }
        },
        {
          "@type": "Question",
          "name": "What are the tax implications of loan waiver under a settlement agreement under Section 194R?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For retail borrowers (home, personal, or car loans), a loan waiver under a hardship settlement is treated as a capital receipt. It is generally not taxable. For businesses, a loan waiver may be treated as taxable income under Section 41(1) of the Income Tax Act. Section 194R TDS rules do not apply to loan waivers granted by scheduled banks."
          }
        },
        {
          "@type": "Question",
          "name": "How does part-prepayment save more interest: reducing EMI or shortening the loan tenure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Keeping your EMI the same and shortening your tenure saves much more interest. Reducing your loan term cuts down compound interest over time. This saves you significant money over the life of the loan."
          }
        },
        {
          "@type": "Question",
          "name": "What is the 30-day RBI rule regarding the return of original property documents after loan closure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI circular RBI/2023-24/60, lenders must return all original property papers within 30 days of full loan repayment or settlement. They must also remove any CERSAI charges. If the lender delays beyond 30 days, they must pay you ₹5,000 for each day of delay."
          }
        },
        {
          "@type": "Question",
          "name": "Why do banks agree to loan settlements and accept a substantial financial haircut?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Banks agree to One-Time Settlements based on Net Present Value (NPV) recovery rules. When a loan defaults, banks must lock away capital under RBI reserves rules (15% to 100%). Legal battles in DRT or civil court can take years. Accepting a quick cash settlement frees up bank funds and avoids legal costs."
          }
        },
        {
          "@type": "Question",
          "name": "Can a lender initiate legal proceedings under Section 138 of the NI Act after a settlement agreement is executed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Once you pay the agreed settlement amount under Section 63 of the Indian Contract Act, 1872, the debt is cleared. The lender must withdraw all court cases, including Section 138 NI Act cheque bounce cases and Section 25 PSSA complaints."
          }
        },
        {
          "@type": "Question",
          "name": "What essential documents must a borrower obtain after executing a loan foreclosure or settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You must collect four key items: (1) An official No Dues Certificate (NDC) on bank letterhead. (2) A zero-balance loan account statement. (3) All unused cheques and NACH mandate cancel confirmation. and (4) Original property papers with a CERSAI satisfaction receipt for secured loans."
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
  { id: 'definitional-foundations-and-mechanics', title: '1. Definitional Foundations: Foreclosure vs. Prepayment vs. Settlement' },
  { id: 'rbi-statutory-framework-and-foreclosure-rules', title: '2. RBI Statutory Framework: Zero Foreclosure Charges & Fair Practices Code' },
  { id: 'cibil-credit-bureau-forensics', title: '3. CIBIL & Credit Bureau Forensics: Closed vs. Settled vs. Written Off' },
  { id: 'financial-economics-npv-and-taxation', title: '4. Financial Economics, NPV Recovery Formulas & Income Tax Implications' },
  { id: 'comparative-visual-roadmap', title: '5. Loan Exit Mechanisms Strategic Visual Roadmap' },
  { id: 'step-by-step-execution-protocols', title: '6. Step-by-Step Execution Protocols: Foreclosure, Prepayment & OTS' },
  { id: 'sanction-letter-and-settlement-forensics', title: '7. Sanction Letter & Settlement Agreement Forensics: Critical Clauses & Waivers' },
  { id: 'post-exit-documentation-ndc-and-credit-recovery', title: '8. Post-Exit Documentation: No Dues Certificate, Title Deed Return & CIBIL Rebuilding' },
  { id: 'three-way-comparative-decision-matrix', title: '9. Comprehensive 3-Way Comparative Decision Matrix Table' },
  { id: 'company-resolution-section', title: '10. SettleLoans Strategic Debt Resolution & Legal Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function LoanForeclosureVsPrepaymentVsSettlementPage() {
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
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-emerald-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <Scale className="w-3.5 h-3.5" />
            <span>Loan Exit Strategies • Regulatory &amp; Credit Analysis 2026</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Loan Foreclosure vs Prepayment vs Settlement</h1>

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
              <span>RBI Master Directions &amp; Banking Regulations Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Get Expert Debt Exit Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Evaluate Your Settlement vs Prepayment Case
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Sticky Table of Contents + Executive Crux */}
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 text-xs text-blue-950 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Decision Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-900">
                Foreclosure and part-prepayment let you pay down loans early. They keep your CIBIL score intact. Under RBI rules, floating-rate retail loans carry zero prepayment penalty. In contrast, loan settlement is an emergency compromise for financial distress. It cuts your debt balance but adds a &apos;Settled&apos. tag to your credit report for up to 7 years.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Strategic Loan Exit Comparison</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Credit Bureau Distinction:</strong> Foreclosure and prepayment mark your loan as &quot;Closed&quot;. This boosts your credit score. Settlement marks it as &quot;Settled&quot;. This can lower your CIBIL score by 75 to 120 points.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Foreclosure fines Under RBI:</strong> Under RBI Master Directions, banks cannot charge foreclosure fees on floating-rate personal, home, or education loans for people.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Financial Economics &amp. Haircuts:</strong> Prepayment cuts future interest costs. Settlement waives 40% to 70% of current dues based on Net Present Value (NPV) recovery rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Tax Treatment (Section 194R):</strong> Personal loan waivers are non-taxable capital receipts. Business loan waivers require review under Section 41(1) and Section 194R.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory 30-Day Document Release:</strong> Under RBI circular RBI/2023-24/60, banks must return property papers within 30 days of closure. Lenders pay ₹5,000 per day for delays.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Definitional Foundations */}
            <section id="definitional-foundations-and-mechanics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Definitional Foundations</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers in India have three main ways to exit a loan: <strong>Loan Foreclosure</strong>, <strong>Part-Prepayment</strong>, and <strong>Loan Settlement</strong>. Many people confuse these terms. But each option works differently. Each option affects your credit score in distinct ways and carries different costs.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Loan Foreclosure (Full Pre-Closure):</strong> Foreclosure means paying off your full loan balance in one single payment before the loan ends. This clears the loan under Section 37 of the Indian Contract Act, 1872. It stops all future EMIs. It releases your pledged security and marks the account as &quot;Closed&quot. in credit records.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Part-Prepayment (Partial Principal Injection):</strong> Part-prepayment means paying an extra lump sum towards your principal while keeping the loan active. This payment reduces your principal right away. You can then choose to reduce your EMI amount or shorten your loan tenure.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Loan Settlement (One-Time Settlement / OTS):</strong> Loan settlement is a hardship compromise between a borrower and a bank. If you face job loss, illness, or business loss, you can seek an OTS. Under Section 63 of the Indian Contract Act, the bank accepts a reduced lump sum (often 30% to 60% of total dues). The bank writes off the remaining balance.
              </p>
            </section>

            {/* Section 2: Statutory & Regulatory Framework */}
            <section id="rbi-statutory-framework-and-foreclosure-rules" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. RBI Foreclosure Rules &amp; Fair Practices</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India (RBI) sets clear rules for early loan closure and debt resolution. Knowing these rules helps you protect your rights against illegal bank fees and unfair recovery tactics.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Key legal rules include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                    <span>RBI Zero Foreclosure Penalty Directives</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Circular <em>DBOD.No.Dir.BC.107/13.03.00/2013-14</em> and Master Direction <em>DNBR.PD.008/03.10.119/2016-17</em>, banks and NBFCs cannot charge foreclosure fees on floating-rate retail loans given to people. Any penalty clause on floating-rate home or personal loans is void.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    <span>Prudential Framework for Stressed Assets</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the RBI Prudential Framework (June 7, 2019 Circular), lenders can create Board-approved One-Time Settlement (OTS) policies. These policies let banks resolve defaulted assets (NPAs) through compromises without long court battles.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Floating-rate retail loans carry zero prepayment fees. In contrast, fixed-rate loans and business loans may carry prepayment charges. These typically range from 2% to 4% plus GST if stated in the agreement.
              </p>
            </section>

            {/* Section 3: CIBIL & Credit Bureau Forensics */}
            <section id="cibil-credit-bureau-forensics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. CIBIL Forensics: Settled vs Written Off</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), banks must send monthly repayment records to CIBIL, Experian, Equifax, and CRIF High Mark. Your chosen closure method determines your credit score for years.
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Reporting Parameter.</th>
                      <th>Full Foreclosure.</th>
                      <th>Part-Prepayment.</th>
                      <th>Distressed Settlement (OTS).</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Credit Bureau Account Status.</td>
                      <td><span className="font-bold text-emerald-600">&quot;Closed&quot;</span></td>
                      <td><span className="font-bold text-blue-600">&quot;Active / Standard&quot;</span></td>
                      <td><span className="font-bold text-red-600">&quot;Settled&quot. / &quot;Post-Write-Off Settled&quot;</span></td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Payment History Grid (DPD).</td>
                      <td>000 (Zero Days Past Due).</td>
                      <td>000 (Current / Regular).</td>
                      <td>Shows past 30 to 180+ day default flags.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Principal &amp. Interest Recovery.</td>
                      <td>100% Full Recovery.</td>
                      <td>Fast 100% Recovery.</td>
                      <td>Waiver written off as loss by bank.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Immediate Score Impact.</td>
                      <td>+25 to +50 points gain.</td>
                      <td>+10 to +30 points gain.</td>
                      <td>-75 to -120 points drop.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Bureau Retention Period.</td>
                      <td>Saved as positive history.</td>
                      <td>Active positive credit history.</td>
                      <td>Flagged for up to 7 years.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Subsequent Unsecured Credit Access.</td>
                      <td>Fast prime loan approval.</td>
                      <td>Fast prime loan approval.</td>
                      <td>High rejection risk for 2 to 3 years.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many borrowers think a No Dues Certificate automatically changes their CIBIL tag to &quot;Closed&quot;. That is not true. An NDC protects you from legal action. But banks must report the written-off amount to credit bureaus. Only paying the full loan balance or clearing the settlement waiver difference will remove the &quot;Settled&quot. tag.
              </p>
            </section>

            {/* Section 4: Financial Economics, NPV & Taxation */}
            <section id="financial-economics-npv-and-taxation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Financial Economics &amp; NPV Formulas</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The choice to foreclose, prepay, or settle depends on recovery math. Banks review settlement offers using the <strong>Net Present Value of Legal Recovery</strong> formula:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation_Costs - Regulatory_Provisioning_Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here, C_t is the estimated future recovery over time t. And r is the discount rate. Banks deduct 3 to 7 years of court delays, advocate fees. And locked capital under RBI NPA reserves rules (15% to 100%).
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If your lump-sum settlement offer is higher than net court recovery, the bank committee will accept the deal.
              </p>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Income Tax Implications: Retail vs. Commercial Borrowers (Section 194R &amp; Section 41(1))
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Income Tax Act, 1961, the tax impact of a waived loan depends on your loan type:
              </p>

              <div className="space-y-3 my-3">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <span className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>Individual Retail Borrowers (Home, Personal, Auto, Credit Card Loans)</span>
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Supreme Court rulings (like <em>CIT vs. Mahindra and Mahindra Ltd.</em>), personal loan waivers are capital receipts. Individual borrowers do not pay income tax on the waived loan amount.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <span className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-amber-600" />
                    <span>Commercial &amp; Business Loan Borrowers (Working Capital, CC/OD Facilities)</span>
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a business claimed tax deductions on loan interest, a debt waiver may count as taxable income under Section 41(1). Under CBDT Circular No. 12/2022, Section 194R TDS does not apply to bank loan settlements.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="comparative-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Loan Exit Mechanisms Strategic Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This chart compares Foreclosure, Part-Prepayment, and Loan Settlement in India. It highlights how each route works, affects your CIBIL score. And saves interest:
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/loan-foreclosure-vs-prepayment-vs-settlement.jpg"
                  alt="Loan Foreclosure vs Prepayment vs Settlement Infographic Comparison"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Route 1: Foreclosure</span>
                  <p className="text-[11px] leading-relaxed">Pay full loan balance. Zero fee on floating rate. Perfect &quot;Closed&quot. credit status. Immediate return of property papers.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Route 2: Part-Prepayment</span>
                  <p className="text-[11px] leading-relaxed">Pay extra toward principal. Save on compound interest. Choose lower EMI or shorter tenure. Account remains standard.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Route 3: Debt Settlement</span>
                  <p className="text-[11px] leading-relaxed">Settle dues under hardship. Get 40% to 70% debt waiver. Close pending legal cases. Credit file shows &quot;Settled&quot;.</p>
                </div>
              </div>
            </section>

            {/* Section 6: Step-by-Step Execution Protocols */}
            <section id="step-by-step-execution-protocols" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Step-by-Step Execution Protocols</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Follow standard banking steps to close your loan without surprise charges or active auto-debit issues:
              </p>

              <div className="space-y-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold">A</div>
                    <span>Operational Protocol: Loan Foreclosure Execution</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    1. Request an official <strong>Foreclosure Statement &amp. Outstanding Dues Certificate</strong> valid for 15 to 30 days.<br />
                    2. Check that the bank applied zero prepayment penalty on floating-rate retail loans.<br />
                    3. Pay the exact balance via RTGS or NEFT to your loan account and get a stamped receipt.<br />
                    4. Cancel active NACH and e-mandates so your bank stops auto-debiting EMIs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">B</div>
                    <span>Operational Protocol: Part-Prepayment Execution</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    1. Log in to your bank portal or visit your branch.<br />
                    2. Mark the payment clearly as a <strong>Principal Prepayment</strong>, not advance EMI.<br />
                    3. Choose <em>Tenure Reduction</em> to save maximum interest, or <em>EMI Reduction</em> for lower monthly payments.<br />
                    4. Download the new repayment schedule showing your reduced principal balance.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">C</div>
                    <span>Operational Protocol: One-Time Settlement (OTS) Execution</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    1. Prepare hardship proofs, like medical records or job loss letters.<br />
                    2. Send a written OTS proposal to the bank recovery department.<br />
                    3. Negotiate an affordable settlement based on net recovery math.<br />
                    4. Get an official <strong>Settlement Sanction Letter</strong> signed by an authorized bank officer before paying.<br />
                    5. Pay the agreed settlement amount within the approved deadline.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Sanction Letter & Settlement Forensics */}
            <section id="sanction-letter-and-settlement-forensics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Sanction Letter &amp; Agreement Audit</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Never settle a loan based on verbal talks from recovery agents. Agents may take your money as overdue interest instead of closing the debt.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Check these key terms in your settlement sanction letter before paying:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Letterhead &amp; Sanction Authority</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must be on official bank letterhead with a reference number, officer name, employee code. And bank stamp. Third-party emails have no legal value.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Mandatory Legal Case Withdrawal Covenant</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must state that the bank will withdraw all pending court cases, DRT claims, Section 138 NI Act cheque bounce cases, and Section 25 PSSA complaints.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>Explicit Installment Timeline &amp; Grace Provisions</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Check payment due dates for each installment. If you miss a deadline, the bank may cancel the OTS and demand the full original balance.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-purple-600" />
                    <span>Definitive Discharge &amp; NDC Issuance Commitment</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must confirm that payment clears your debt under Section 63 of the Indian Contract Act. The bank must promise to issue an NDC within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Post-Exit Documentation & CIBIL Rebuilding */}
            <section id="post-exit-documentation-ndc-and-credit-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Post-Exit NDC &amp; CIBIL Rebuilding</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Closing a loan requires getting your discharge papers, releasing property deeds. And fixing your credit score.
              </p>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                RBI 30-Day Mandatory Collateral Release Rule (Circular RBI/2023-24/60)
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI directives on the <em>Release of Movable/Immovable Property Documents on Repayment/Settlement of Personal Loans</em>, all banks and NBFCs are required to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>Return all original title deeds and property papers within <strong>30 days</strong> of full payment.</li>
                <li>Remove security charges registered with <strong>CERSAI</strong> within the same 30-day window.</li>
                <li>Pay you <strong>₹5,000 per day</strong> for any delay in releasing your property papers beyond 30 days.</li>
              </ul>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Systematic Credit Rebuilding Roadmap Post-Settlement
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If you settled your loan, your CIBIL file will show a &quot;Settled&quot. tag. Follow these 4 steps to rebuild your credit score:
              </p>

              <div className="space-y-3 my-3">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <span className="font-bold text-xs sm:text-sm text-slate-900">Step 1: Verification of Credit Bureau Reporting Accuracy</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Download credit reports from CIBIL, Experian, Equifax, and CRIF 45 days after payment. Check that your outstanding balance shows ₹0.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <span className="font-bold text-xs sm:text-sm text-slate-900">Step 2: Utilization of Secured Credit Products</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Get a secured credit card backed by a Fixed Deposit (FD). Keep credit usage below 30% of your limit. Pay bills on time every month.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <span className="font-bold text-xs sm:text-sm text-slate-900">Step 3: Establishing Pristine Repayment Velocity</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Making regular on-time payments adds positive records to your file. This improves your credit score over 18 to 24 months.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <span className="font-bold text-xs sm:text-sm text-slate-900">Step 4: Upgrading &quot;Settled&quot; to &quot;Closed&quot; (Post-Settlement Payoff)</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Once you have extra funds, you can pay the waived balance to the lender. The bank will then update your tag from &quot;Settled&quot. to &quot;Closed&quot;.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Comprehensive 3-Way Comparative Matrix */}
            <section id="three-way-comparative-decision-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comprehensive 3-Way Comparative Decision Matrix Table
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The comparative matrix below outlines every legal, financial, legal. And operational parameter across all three exit options:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Decision Parameter.</th>
                      <th>Loan Foreclosure.</th>
                      <th>Part-Prepayment.</th>
                      <th>Loan Settlement (OTS).</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Core Strategic Objective.</td>
                      <td>Pay off full debt early.</td>
                      <td>Cut interest and tenure.</td>
                      <td>Emergency debt relief.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Principal Repayment Obligation.</td>
                      <td>100% of outstanding principal.</td>
                      <td>Lump-sum partial principal.</td>
                      <td>30% to 60% negotiated lump sum.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Accrued Interest &amp. fines.</td>
                      <td>Full payment of accrued interest.</td>
                      <td>Standard ongoing billing.</td>
                      <td>Substantial waiver of interest &amp. penal fees.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Foreclosure Fee Protection.</td>
                      <td>0% penalty on floating retail loans.</td>
                      <td>0% fee on floating retail loans.</td>
                      <td>Not applicable (distress compromise).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Credit Bureau Status Tag.</td>
                      <td>&quot;Closed&quot. (Positive).</td>
                      <td>&quot;Standard / Active&quot. (Positive).</td>
                      <td>&quot;Settled&quot. (Adverse Flag).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Impact on CIBIL Score.</td>
                      <td>Immediate increase (+30 to +50).</td>
                      <td>Steady incremental boost.</td>
                      <td>Immediate reduction (-75 to -120).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Future Loan Eligibility.</td>
                      <td>Unrestricted prime eligibility.</td>
                      <td>Unrestricted prime eligibility.</td>
                      <td>Restricted for 2 to 3 years.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Tax Liability (Retail Borrowers).</td>
                      <td>Zero tax liability.</td>
                      <td>Zero tax liability.</td>
                      <td>Non-taxable capital receipt.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Collateral / Property Release.</td>
                      <td>Within 30 days under RBI rules.</td>
                      <td>Retained until final closure.</td>
                      <td>Within 30 days of settlement payment.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Legal Case Dismissal Mandate.</td>
                      <td>Automatic upon closure.</td>
                      <td>Not applicable (no litigation).</td>
                      <td>Mandatory withdrawal of Sec 138 / DRT.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: CompanySection Component */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Strategic Debt Resolution &amp; Legal Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Choosing between foreclosure, prepayment. And settlement depends on your budget and goals. SettleLoans helps you check bank fees under RBI rules. We build prepayment plans and negotiate One-Time Settlements (OTS) with major banks to secure maximum debt relief.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Foreclosure vs. Prepayment vs. Settlement</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Find clear answers below on RBI foreclosure rules, CIBIL credit tags. And debt settlement in India.
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
                  <span className="font-semibold text-slate-800">RBI Master Direction – Prepayment Penalties on Floating Rate Term Loans</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12535&Mode=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Circular (RBI/2023-24/60) – Mandatory 30-Day Release of Property Documents</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">TransUnion CIBIL – Credit Information Reporting Framework &amp; Bureau Tags</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://incometaxindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Income Tax Department – Guidelines on Section 41(1) &amp; Section 194R Remission of Debt</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme – Fair Practices Code &amp; Grievance Redressal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Debt Resolution &amp; Banking Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/bank-loan-settlement-guidelines"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Settlement Guidelines
                </Link>
                <Link
                  href="/bank-delaying-original-property-documents-after-home-loan-settlement-rbi-rules"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  RBI 30-Day Document Release Rules
                </Link>
                <Link
                  href="/top-10-rbi-rules-for-loan-defaulters-rights"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Top 10 RBI Defaulter Rights
                </Link>
                <Link
                  href="/loan-penalty-waiver-request"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Penalty Waiver Guide
                </Link>
                <Link
                  href="/rbi-ombudsman-complaint-loan-recovery-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  RBI Ombudsman Complaints
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Recovery Harassment
                </Link>
                <Link
                  href="/bank-recovery-case-in-court"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Court Recovery Case Defense
                </Link>
                <Link
                  href="/personal-loan-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Personal Loan Settlement Process
                </Link>
                <Link
                  href="/credit-card-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Credit Card Settlement Process
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
                  <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                    <div className="font-bold text-slate-900 text-sm">Ashish Jhangra</div>
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in retail banking regulations, RBI Master Directions, credit bureau disputes. And bank One-Time Settlements across India.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="text-xs text-[#1F5EFF] hover:underline flex items-center gap-1 font-semibold">
                  <span>View Profile</span>
                  <span>→</span>
                </Link>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Author</span>
                </div>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Expert Debt Advisory</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Unsure Whether to Settle or Prepay?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Speak with our senior financial advisors and advocates. We evaluate your CIBIL score, check bank charges. And negotiate maximum debt waivers.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Free Case Evaluation
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
                  <span>RBI Master Directions Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank Sanction Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Legal Representation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
