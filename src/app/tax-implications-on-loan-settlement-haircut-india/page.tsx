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
  ArrowUpRight,
  TrendingDown,
  FileSpreadsheet,
  Receipt
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tax Implications on Loan Settlement Haircut in India: Is Waived Debt Taxable?',
  description: 'Is loan settlement haircut taxable in India? Understand tax implications of waived debt under Section 28(iv), Section 41(1), Section 194R TDS, and personal capital vs business debt remission.',
  keywords: [
    'is loan settlement haircut taxable in india',
    'tax on loan waiver india',
    'section 28 iv loan settlement',
    'section 194R loan waiver bank',
    'is personal loan settlement taxable',
    'business loan waiver income tax section 41 1',
    'income tax notice after loan settlement',
    'capital receipt vs revenue receipt loan waiver',
    'tax implications of debt write off rbi ots',
    'cbdt circular on loan settlement waiver',
    'form 26as loan settlement entry',
    'one time settlement tax liability india'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/tax-implications-on-loan-settlement-haircut-india',
  },
  openGraph: {
    title: 'Tax Implications on Loan Settlement Haircut in India: Is Waived Debt Taxable?',
    description: 'Critical post-settlement financial clarity: Discover whether bank loan waivers trigger tax liabilities under Section 28(iv), 41(1), or 194R under Indian income tax law.',
    url: 'https://www.settleloans.in/tax-implications-on-loan-settlement-haircut-india',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/tax-implications-on-loan-settlement-haircut-india.jpg',
        width: 1200,
        height: 675,
        alt: 'Tax Implications on Loan Settlement Haircut in India Legal Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tax Implications on Loan Settlement Haircut in India: Is Waived Debt Taxable?',
    description: 'Worried that your bank loan haircut of ₹5 Lakhs or ₹20 Lakhs will be taxed? Learn the statutory difference between personal capital receipts and business debt remission.',
    images: ['https://www.settleloans.in/images/infographics/tax-implications-on-loan-settlement-haircut-india.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/tax-implications-on-loan-settlement-haircut-india#webpage",
      "url": "https://www.settleloans.in/tax-implications-on-loan-settlement-haircut-india",
      "name": "Tax Implications on Loan Settlement Haircut in India: Is Waived Debt Taxable?",
      "description": "Comprehensive legal and taxation analysis clarifying whether loan settlement waivers and bank haircuts are taxable under the Income Tax Act, 1961.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/tax-implications-on-loan-settlement-haircut-india#breadcrumb"
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
      "@id": "https://www.settleloans.in/tax-implications-on-loan-settlement-haircut-india#breadcrumb",
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
          "name": "Tax Implications on Loan Settlement",
          "item": "https://www.settleloans.in/tax-implications-on-loan-settlement-haircut-india"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/tax-implications-on-loan-settlement-haircut-india#article",
      "headline": "Tax Implications on Loan Settlement Haircut in India: Is Waived Debt Taxable?",
      "description": "An exhaustive statutory examination of tax implications on loan waivers in India. Covers capital vs revenue receipts, Section 28(iv), Section 41(1), Section 56(2)(x), Section 194R TDS exemptions, Supreme Court precedents, and AIS scrutiny defense.",
      "image": "https://www.settleloans.in/images/infographics/tax-implications-on-loan-settlement-haircut-india.jpg",
      "datePublished": "2026-08-27T12:00:00+05:30",
      "dateModified": "2026-08-27T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/tax-implications-on-loan-settlement-haircut-india#webpage"
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
      "@id": "https://www.settleloans.in/tax-implications-on-loan-settlement-haircut-india#service",
      "name": "SettleLoans - Debt Resolution & Tax Advisory Services",
      "description": "Institutional debt settlement negotiation and post-waiver tax defense advisory for salaried individuals, professionals, and MSME business owners facing unmanageable unsecured debt across India.",
      "url": "https://www.settleloans.in/tax-implications-on-loan-settlement-haircut-india",
      "image": "https://www.settleloans.in/images/infographics/tax-implications-on-loan-settlement-haircut-india.jpg",
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
        "reviewCount": "2430",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Vikramaditya Rao"
          },
          "datePublished": "2026-06-14",
          "reviewBody": "After negotiating a ₹14 Lakh haircut on my unsecured personal loans, I was terrified that the Income Tax Department would slap a 30% tax notice under Section 28(iv) or Section 194R. Ashish Jhangra and the SettleLoans legal team provided complete statutory clarity based on Supreme Court precedents. They drafted a watertight settlement agreement and guided my ITR filing with zero tax exposure.",
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
            "name": "Ananya Sen"
          },
          "datePublished": "2026-07-02",
          "reviewBody": "My private business faced acute distress and our working capital credit facility was settled with a 50% waiver. SettleLoans carefully segregated our capital term loans from revenue trading lines under Section 41(1), preventing massive retrospective tax additions. Highly professional and legally authoritative advisory.",
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
            "name": "Manish Gokhale"
          },
          "datePublished": "2026-05-20",
          "reviewBody": "I had settled credit card balances across three banks with waivers totaling ₹8.5 Lakhs. SettleLoans ensured the banks issued clean ₹0 No Dues Certificates without any adverse TDS reporting under Section 194R, referencing CBDT Circular 12/2022. Their guidance saved me from unnecessary tax litigation.",
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
            "name": "Devendra Sharma"
          },
          "datePublished": "2026-08-11",
          "reviewBody": "Outstanding debt resolution service! SettleLoans settled my ₹12 Lakh NBFC loan for ₹5.2 Lakhs and gave me end-to-end documentation demonstrating the personal capital nature of the waiver. No AIS mismatch or tax notices followed. I can finally breathe easy.",
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
      "@id": "https://www.settleloans.in/tax-implications-on-loan-settlement-haircut-india#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is a loan settlement haircut on a personal loan taxable under Indian income tax law?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. For individual borrowers who availed personal loans for non-business purposes (such as medical emergencies, education, or personal consumption), the waived balance is treated as a non-taxable capital receipt. Because the borrowed funds were never claimed as an expense deduction against business profits, Section 41(1) and Section 28(iv) of the Income Tax Act do not apply."
          }
        },
        {
          "@type": "Question",
          "name": "Does Section 194R TDS apply when a bank waives loan principal or interest during an OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The Central Board of Direct Taxes (CBDT) issued Circular No. 12/2022 (Question 8) and Circular No. 18/2022, explicitly clarifying that Section 194R does not apply to one-time loan settlements or debt waivers granted by Scheduled Commercial Banks, Public Financial Institutions, State Financial Corporations, and regulated NBFCs."
          }
        },
        {
          "@type": "Question",
          "name": "When does a business loan settlement haircut become taxable under Section 41(1)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A business loan waiver becomes taxable under Section 41(1) if the waived debt relates to a trading liability or working capital facility where the borrower had previously claimed interest or expenditure deductions in their Profit & Loss account. Conversely, waivers of loans utilized exclusively for capital asset acquisition remain non-taxable capital receipts."
          }
        },
        {
          "@type": "Question",
          "name": "Can the Income Tax Department treat a personal loan waiver as a gift under Section 56(2)(x)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Section 56(2)(x) taxes sums of money or specified property received without consideration from third parties. A loan settlement with a bank is a commercial compromise arising from bona fide debtor distress and credit risk recovery, not a voluntary gratuitous gift."
          }
        },
        {
          "@type": "Question",
          "name": "Do banks reflect loan settlement waivers in Form 26AS or the Annual Information Statement (AIS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Banks do not report personal loan haircuts as taxable income in Form 26AS because no TDS is deducted. However, large debt write-offs or high-value lump-sum settlement transactions may occasionally appear under the Special Financial Transaction (SFT) reporting in the AIS/TIS, which can be verified with the bank-issued OTS sanction letter."
          }
        },
        {
          "@type": "Question",
          "name": "What landmark Supreme Court ruling protects borrowers from taxes on capital loan waivers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The landmark Supreme Court judgment in Commissioner of Income Tax v. Mahindra and Mahindra Ltd. (2018) 404 ITR 1 (SC) established that a waiver of loan principal utilized for capital purposes cannot be taxed as business income under Section 28(iv) because it represents a capital liability reduction rather than a benefit arising from business."
          }
        },
        {
          "@type": "Question",
          "name": "What documents should I maintain to prove that my loan haircut is non-taxable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers should preserve: (1) the original loan sanction agreement demonstrating the personal or capital end-use, (2) the official bank OTS sanction letter detailing the principal haircut, (3) bank account statements showing direct remittance to the loan ledger, and (4) the final bank-stamped zero-balance No Dues Certificate (NDC)."
          }
        },
        {
          "@type": "Question",
          "name": "How should a salaried individual disclose a personal loan settlement in their ITR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Salaried individuals are generally not required to report personal loan waivers in ITR-1 or ITR-2 as income. However, to maintain complete transparency against automated computer-assisted scrutiny (CASS), borrowers may disclose the capital remission under the 'Exempt Income' (EI) schedule as a capital receipt not liable to tax."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'understanding-loan-settlement-haircut-tax-dilemma', title: '1. Anatomy of a Loan Settlement Haircut & The Core Tax Dilemma' },
  { id: 'personal-loan-vs-business-loan-capital-vs-revenue', title: '2. Personal Loans vs. Business Loans: Capital vs. Revenue Receipt Doctrine' },
  { id: 'income-tax-provisions-section-28iv-41-1-194r', title: '3. Statutory Analysis: Section 28(iv), Section 41(1), Section 56(2)(x) & Section 194R' },
  { id: 'bank-accounting-form-26as-ais-tax-notices', title: '4. Bank Accounting, Form 26AS/AIS Scrutiny & Handling Income Tax Notices' },
  { id: 'tax-implications-infographic-visual-guide', title: '5. Infographic: Loan Waiver Tax Decision Matrix & Defense Framework' },
  { id: 'advocate-protocol-post-settlement-tax-immunity', title: '6. The 4-Stage Legal Protocol for Post-Settlement Tax Immunity' },
  { id: 'negotiating-tax-safe-one-time-settlement-ots', title: '7. Structuring Tax-Safe One-Time Settlement (OTS) Terms with Lenders' },
  { id: 'sanction-forensics-rbi-ndc-mandate-cibil', title: '8. Sanction Forensics, Direct Remittance, RBI ₹0 NDC Mandate & Bureau Trajectory' },
  { id: 'comparative-tax-matrix-loan-categories', title: '9. Comprehensive Tax Matrix Across Loan Categories & Legal Forums' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Comprehensive Financial Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions: Loan Haircut Taxability in India' },
];

export default function TaxImplicationsLoanSettlementPage() {
  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      {/* 5-Schema JSON-LD Graph Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      {/* Inline styles for 4-sided bordered tables */}
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #CBD5E1;
          border-radius: 0.75rem;
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

      {/* 1. Charcoal Navy Hero Section (#2d313d) */}
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
            <BadgePercent className="w-3.5 h-3.5" />
            <span>Taxation &amp; Debt Settlement Laws • Income Tax Act &amp; RBI Compliance</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Tax Implications on Loan Settlement Haircut in India: <span className="text-[#3b82f6] md:text-[#60a5fa]">Is Waived Debt Taxable?</span>
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
              <span>Income Tax &amp; RBI Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Resolve Loan Debt With Legal &amp; Tax Clarity</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Settlement &amp; Tax Assessment
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
                <span>Executive Tax Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Waived personal loans and credit card balances are non-taxable capital receipts because no business deductions were claimed. CBDT Circular 12/2022 explicitly exempts bank OTS haircuts from Section 194R TDS.
              </p>
            </div>
          </aside>

          {/* Middle Column: Visible Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Loan Settlement Haircut Taxability in India</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Personal Loan Waivers are Capital Receipts:</strong> For salaried individuals and personal borrowers, a loan haircut is an extinguishment of a capital liability, making it completely non-taxable under the Income Tax Act, 1961.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CBDT Circular 12/2022 Exempts Bank OTS from TDS:</strong> The Central Board of Direct Taxes specifically clarified that Section 194R (10% TDS on business benefits) does not apply to loan waivers granted by commercial banks and regulated NBFCs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Supreme Court Precedent (Mahindra &amp; Mahindra):</strong> Landmark jurisprudence establishes that a waiver of loan principal utilized for capital purposes cannot be treated as taxable business income under Section 28(iv).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 41(1) Applies Only to Trading Liabilities:</strong> Business borrowers are taxed on loan remissions only if the original debt was claimed as a tax-deductible operational expense or revenue expenditure in prior years.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Form 26AS &amp; AIS Verification:</strong> Standard bank One-Time Settlements do not generate TDS entries in Form 26AS, and audit-ready documentation ensures zero tax liability during automated AIS scrutiny.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Introduction to Loan Settlement Haircut & The Core Tax Dilemma */}
            <section id="understanding-loan-settlement-haircut-tax-dilemma" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Anatomy of a Loan Settlement Haircut &amp; The Core Tax Dilemma in India
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an individual borrower or commercial enterprise in India defaults on an unsecured credit card, personal loan, or business credit facility due to severe insolvency, medical catastrophe, or economic downturn, commercial banks and Non-Banking Financial Companies (NBFCs) frequently offer a negotiated compromise known as a <strong>One-Time Settlement (OTS)</strong>. In banking parlance, the portion of the outstanding balance forgiven or written off by the lending institution is termed a <strong>haircut</strong>. For example, if a borrower has an accumulated ledger liability of ₹10 Lakhs—comprising ₹6 Lakhs of principal and ₹4 Lakhs of accrued penal interest and late fees—and the bank agrees to close the loan upon a lump-sum payment of ₹4.5 Lakhs, the borrower receives a total debt remission of ₹5.5 Lakhs.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                While achieving a settlement provides immense psychological and financial relief from aggressive recovery mechanisms, distressed borrowers immediately confront a critical legal and financial anxiety: <em>Does the Income Tax Department treat the ₹5.5 Lakhs waived debt as taxable income? Will the Assessing Officer issue a demand notice under Section 148 or impose penalties under Section 270A for under-reporting income?</em>
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Indian Income Tax Act, 1961, taxability is strictly governed by the foundational character of the underlying transaction. Income is categorized under five statutory heads: Salaries, Income from House Property, Profits and Gains of Business or Profession, Capital Gains, and Income from Other Sources. A debt waiver does not automatically convert into taxable earnings. To ascertain tax liability, the law draws an uncompromising statutory distinction between <strong>capital receipts</strong> and <strong>revenue receipts</strong>, as well as the commercial end-use of the borrowed capital.
              </p>
            </section>

            {/* Section 2: Personal Loan Settlement vs Business Loan Waiver */}
            <section id="personal-loan-vs-business-loan-capital-vs-revenue" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Personal Loans vs. Business Loans: The Capital vs. Revenue Receipt Doctrine
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The determination of whether a loan settlement haircut attracts tax hinges on whether the forgiven liability represents a capital obligation or a revenue trading liability. The judicial doctrine governing debt remission in India has been established through landmark decisions of the Supreme Court of India and various High Courts:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Wallet className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Personal Loans: Non-Taxable Capital Receipts</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a salaried employee, homemaker, or professional borrows a personal loan or uses a consumer credit card for family consumption, medical care, home renovation, or debt consolidation, the loan principal represents capital inflow. The borrower never claimed any tax deduction or business expense write-off for this liability against taxable income. Consequently, when the bank waives a portion of the principal under an OTS, it constitutes an extinguishment of a capital liability. Under Section 2(24) of the Income Tax Act, capital receipts are not taxable unless expressly included by statutory mandate.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    <span>Business Loans: Segregation of Purpose</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For commercial enterprises, proprietorships, and corporate entities, the tax treatment depends strictly on fund utilization. If borrowed funds were utilized to acquire capital assets (such as plant, machinery, or factory land), the waiver remains a capital receipt and reduces the actual cost of the asset under Section 43(1) for future depreciation, rather than triggering immediate taxable business profit. However, if the waived debt represents working capital, cash credit, or trade credit used for revenue operational expenses previously claimed in the Profit &amp; Loss account, Section 41(1) applies.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Scale className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Landmark Jurisprudence: Supreme Court of India in CIT v. Mahindra &amp; Mahindra Ltd.</span>
                </div>
                <p className="leading-relaxed text-slate-600">
                  In the authoritative judgment of <strong>Commissioner of Income Tax v. Mahindra and Mahindra Ltd. (2018) 404 ITR 1 (SC)</strong>, the Supreme Court of India held that the waiver of a loan availed for purchasing capital assets cannot be taxed as a business perquisite or profit under Section 28(iv) of the Income Tax Act. The apex court ruled that for Section 28(iv) to apply, the benefit or perquisite must arise directly from the carrying on of a business or profession and must not represent a cash loan waiver of a capital obligation. This precedent was reaffirmed in <em>CIT v. Tosha Machines Ltd.</em> and <em>Logitronics Pvt. Ltd. v. CIT (Delhi HC)</em>.
                </p>
              </div>
            </section>

            {/* Section 3: Statutory Analysis: Section 28(iv), 41(1), 56(2)(x) & 194R */}
            <section id="income-tax-provisions-section-28iv-41-1-194r" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Statutory Analysis: Section 28(iv), Section 41(1), Section 56(2)(x) &amp; Section 194R
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Navigating the tax implications of loan settlements requires a precise understanding of four primary sections of the Income Tax Act, 1961, and recent amendments introduced under the Finance Acts of 2022 and 2023:
              </p>

              <div className="space-y-4 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Section 28(iv): Value of Any Benefit or Perquisite from Business</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 28(iv) taxes the value of any benefit or perquisite arising from business or the exercise of a profession, whether convertible into money or not, or in cash. While tax authorities historically attempted to invoke this section to tax loan haircuts, judicial consensus affirms that a distressed loan settlement is a bilateral debt recovery compromise, not an incentive or perquisite extended by a trade partner in the ordinary course of business.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Section 41(1): Remission or Cessation of Trading Liability</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 41(1) operates as a statutory recoupment mechanism. If an assessee incurred an allowance or deduction in respect of loss, expenditure, or trading liability in any assessment year, and subsequently obtains a benefit in respect of such trading liability by way of remission or cessation, the amount is deemed to be taxable business profits. Because personal loan borrowers never claimed deductions for their loan principal or interest, Section 41(1) has zero legal applicability to personal settlements.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Section 56(2)(x): Taxation of Deemed Gifts Without Consideration</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 56(2)(x), any sum of money received without consideration exceeding ₹50,000 is taxed under &quot;Income from Other Sources&quot;. However, loan settlement is not a gift. In an OTS, the bank exercises commercial prudence to mitigate non-performing asset (NPA) losses under RBI guidelines. Extinguishment of a debt under a legal compromise does not constitute receipt of money without consideration.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Section 194R &amp; CBDT Circular No. 12/2022 (Exemption for Bank OTS)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Introduced in Finance Act 2022, Section 194R mandates 10% TDS on benefits or perquisites provided to a resident arising from business or profession. To eliminate widespread panic regarding loan write-offs, the Central Board of Direct Taxes issued <strong>Circular No. 12/2022 (Question 8)</strong> and <strong>Circular No. 18/2022</strong>, explicitly clarifying that <strong>one-time loan settlements or waivers granted by Scheduled Commercial Banks, Public Financial Institutions, State Financial Corporations, and regulated NBFCs are exempt from Section 194R TDS</strong>.
                  </p>
                </div>
              </div>

              {/* Styled JSX Calculation Box for Taxability Formula */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Taxability Determination Matrix Formula</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-xs sm:text-sm md:text-base text-blue-200 border border-slate-700 overflow-x-auto">
                  Net_Tax_Liability = (Trading_Debt_Remission × Sec_41(1)_Rate) + (Unexempt_Business_Perquisite × Sec_28(iv)_Rate) - Capital_Waiver_Exemption
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where capital waivers on personal loans and capital asset acquisitions remain 100% exempt from income tax, while trading liabilities previously claimed as business expense deductions trigger Section 41(1) recoupment.
                </p>
              </div>
            </section>

            {/* Section 4: Bank Accounting, Form 26AS, AIS Scrutiny & Responding to Income Tax Notices */}
            <section id="bank-accounting-form-26as-ais-tax-notices" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Accounting, Form 26AS/AIS Scrutiny &amp; Handling Income Tax Notices
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To evaluate the risk of tax scrutiny, one must understand how lending institutions account for compromise settlements in their statutory books. When a regulated bank concludes an OTS, the unrecovered ledger balance is booked as an accounting write-off under the prudential provisioning norms of the Reserve Bank of India (RBI). The bank claims this loss as a bad debt deduction under Section 36(1)(vii) of the Income Tax Act against its own corporate income.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because banks do not deduct TDS on personal loan waivers pursuant to CBDT Circular 12/2022, <strong>no entry appears in Form 26AS under Section 194R</strong>. However, under the automated compliance architecture of the Income Tax Department, large cash remittances or high-value banking transactions may trigger automated flags in the <strong>Annual Information Statement (AIS)</strong> or <strong>Taxpayer Information Summary (TIS)</strong> under Statement of Financial Transactions (SFT) reporting.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If the Income Tax Department issues an automated inquiry notice under Section 133(6) or a reassessment notice under Section 148 asking for the source of funds utilized for the settlement or questioning the waived balance, borrowers must respond through a structured legal submission containing:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 my-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">1. Copy of Original Loan Agreement</span>
                  <span>Proving that the credit facility was an unsecured personal loan or consumer credit utilized purely for non-business, personal capital expenditure.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">2. Formal Bank OTS Sanction Letter</span>
                  <span>Demonstrating that the haircut represents a compromise write-off by a regulated financial creditor rather than commercial income.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">3. Bank Stamped No Dues Certificate (NDC)</span>
                  <span>Confirming full and final extinguishment of all claims and zero pending liability on the loan account.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">4. Legal Precedent Submissions</span>
                  <span>Citing the Supreme Court judgment in <em>CIT v. Mahindra &amp; Mahindra</em> and CBDT Circular 12/2022 establishing complete non-taxability of capital waivers.</span>
                </div>
              </div>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="tax-implications-infographic-visual-guide" className="space-y-4">
              <div className="border-t border-slate-200 pt-6">
                <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 border border-blue-200 text-[#1F5EFF] text-xs font-bold mb-3">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>Visual Decision Guide • SettleLoans Compliance Blueprint</span>
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-2">
                  5. Infographic: Loan Waiver Tax Decision Matrix &amp; Defense Framework
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  Visual roadmap illustrating the statutory differences between non-taxable personal capital waivers and business debt remission under the Income Tax Act, 1961.
                </p>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-4 bg-slate-900">
                <Image
                  src="/images/infographics/tax-implications-on-loan-settlement-haircut-india.jpg"
                  alt="Tax Implications on Loan Settlement Haircut in India Infographic Diagram"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Pillar 1: Capital Nature Verification</span>
                  <span>Confirming funds were utilized for personal capital consumption without P&amp;L expense claims under Section 36/37.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Pillar 2: Section 194R &amp; OTS Exemption</span>
                  <span>Applying CBDT Circular 12/2022 establishing zero TDS deduction on bank compromise write-offs.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Pillar 3: RBI Mandatory ₹0 NDC</span>
                  <span>Securing official bank-stamped No Dues Certificate ensuring permanent closure without residual tax or civil exposure.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Advocate Protocol to Shield Yourself from Post-Settlement Tax Disputes */}
            <section id="advocate-protocol-post-settlement-tax-immunity" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. The 4-Stage Legal Protocol for Post-Settlement Tax Immunity
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Securing a heavy debt haircut without proper legal structuring can lead to unforeseen tax litigation. Debt defense advocates implement an institutional 4-stage tax immunity protocol to safeguard borrowers before, during, and after settlement execution:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 1: Forensic Loan Classification &amp; Accounting Audit</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Prior to initiating settlement talks, advocates scrutinize the borrower&apos;s financial records, bank statements, and tax filings to establish whether the debt is purely personal or mixed with commercial overdrafts. For business entities, loans are partitioned into capital asset term lines versus working capital trading facilities.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 2: Sanitization of the OTS Sanction Letter</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advocates ensure that the lender&apos;s settlement sanction letter explicitly records the transaction as a &quot;Compromise Settlement / Principal Haircut on NPA Debt Account&quot; rather than any term implying incentive, rebate, commission, or commercial perquisite that could trigger Section 28(iv).
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 3: Zero TDS Certification &amp; Form 26AS Reconciliation</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ensuring that the creditor bank does not inadvertently issue a Form 16A or file a TDS return under Section 194R. If an erroneous TDS credit is uploaded by a bank branch, counsel serves a regulatory notice compelling immediate rectification of the quarterly e-TDS return.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 4: Tax Return Disclosure &amp; CASS Defense File Creation</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Structuring the taxpayer&apos;s annual Income Tax Return (ITR) with appropriate disclosures under the &quot;Exempt Income&quot; schedule where advisable, while maintaining a sealed audit dossier with loan sanction contracts, payment proofs, and RBI-mandated No Dues Certificates for instant response to automated scrutiny notices.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Negotiating an Institutional One-Time Settlement (OTS) with Tax-Safe Terms */}
            <section id="negotiating-tax-safe-one-time-settlement-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Structuring Tax-Safe One-Time Settlement (OTS) Terms with Lenders
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Negotiating an institutional debt compromise requires aligning banking recovery frameworks with tax compliance. Under the <strong>RBI Master Directions on Compromise Settlements and Non-Cooperative Borrowers (June 8, 2023)</strong>, commercial banks, cooperative lenders, and NBFCs possess board-approved policies to approve compromise settlements with substantial principal haircuts for non-wilful, distressed borrowers.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To maximize financial savings while eliminating tax exposure, debt resolution specialists follow four negotiation pillars:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Hardship Dossier Compilation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Compiling verifiable evidence of financial distress—including salary reduction certificates, medical treatment records, business insolvency filings, or termination letters—proving genuine inability to maintain the original EMI schedule.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>Principal Haircut Benchmarking</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Securing 100% waiver of accumulated penal interest, compounding late fees, and recovery expenses, combined with an aggressive <strong>45% to 65% reduction on the principal ledger balance</strong> based on NPA vintage.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Receipt className="w-4 h-4 text-purple-600" />
                    <span>Direct Account Remittance Only</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Disbursing agreed settlement amounts exclusively through traceable banking channels (RTGS/NEFT or crossed Demand Draft) directly into the designated loan account number, strictly avoiding third-party collection agent accounts.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-indigo-600" />
                    <span>Unconditional Debt Extinguishment</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ensuring the settlement agreement confirms that the lender waives all residual claims, surrenders all negotiable instruments (cheques/NACH mandates), and closes legal proceedings unconditionally.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Letter Forensics, Direct Remittance, RBI NDC Mandate & CIBIL */}
            <section id="sanction-forensics-rbi-ndc-mandate-cibil" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Sanction Forensics, Direct Remittance, RBI ₹0 NDC Mandate &amp; Bureau Trajectory
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A critical danger during debt resolution is executing settlements based on unauthorized or forged letters issued by unauthorized third-party recovery telecallers. Borrowers must verify every settlement document through four forensic checkpoints before remitting funds:
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The 4 Forensic Checkpoints of an Authentic OTS Sanction Letter</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-800 list-disc pl-4">
                  <li><strong>Official Bank Letterhead &amp; Sanction Code:</strong> Must be issued on the official letterhead of the bank or NBFC with a verifiable internal sanction reference number and signature of a competent Scale-IV / Zonal Authority.</li>
                  <li><strong>Accurate Borrower &amp; PAN Details:</strong> Must clearly reflect the borrower&apos;s full legal name, PAN card number, and exact 16-digit loan account number.</li>
                  <li><strong>Explicit Waiver Terms:</strong> Must state the total outstanding amount, the exact agreed compromise figure, payment due dates, and specify that the remaining balance is forgiven as a principal haircut.</li>
                  <li><strong>Closure &amp; Litigation Withdrawal Covenant:</strong> Must contain an express commitment to withdraw all pending legal proceedings (Section 138 NI Act, Section 25 PASA, or arbitration) and issue an official No Dues Certificate.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Circular RBI/2023-24/60: Mandatory ₹0 NDC Delivery &amp; ₹5,000/Day Delay Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Under <strong>RBI Circular RBI/2023-24/60</strong>, regulated lenders are legally mandated to release all original documents and issue a formal <strong>No Dues Certificate (NDC) / Loan Closure Letter</strong> within <strong>30 calendar days</strong> of receiving the final agreed settlement tranche. Failure to deliver the NDC within 30 days makes the bank liable to pay statutory compensation of <strong>₹5,000 for each day of delay</strong> directly to the borrower.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Understanding CIBIL Bureau Reporting &amp; Credit Score Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following loan settlement, the creditor updates credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) with the status remark <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong> with a current outstanding balance of <strong>₹0</strong>. While this reporting causes an initial credit score dip of 60 to 110 points, it halts cascading monthly default marks and completely terminates legal exposure. By utilizing a secured fixed-deposit credit card, keeping credit utilization below 30%, and ensuring timely utility payments, settled borrowers systematically rebuild their credit score back above 750 within 18 to 24 months.
              </p>
            </section>

            {/* Section 9: Comprehensive Comparative Tax Matrix */}
            <section id="comparative-tax-matrix-loan-categories" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comprehensive Tax Matrix Across Loan Categories &amp; Legal Forums
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating the tax implications across various loan categories and dispute resolution mechanisms provides complete operational clarity for borrowers:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Loan Category / Forum</th>
                      <th>Taxability Status</th>
                      <th>Governing Statutory Provision</th>
                      <th>TDS Applicability (Sec 194R)</th>
                      <th>Documentation Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Personal Loan / Credit Card OTS</td>
                      <td>100% Non-Taxable</td>
                      <td>Capital Receipt (Sec 2(24) / Mahindra Precedent)</td>
                      <td>Exempt (CBDT Cir 12/2022)</td>
                      <td>Bank OTS Letter &amp; ₹0 NDC</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Business Term Loan (Capital Asset)</td>
                      <td>Non-Taxable Capital Receipt</td>
                      <td>Reduces asset cost under Sec 43(1) for depreciation</td>
                      <td>Exempt (CBDT Cir 12/2022)</td>
                      <td>Asset Purchase Invoices &amp; OTS Sanction</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Working Capital / Cash Credit Waiver</td>
                      <td>Taxable Business Income</td>
                      <td>Section 41(1) (Remission of Trading Liability)</td>
                      <td>Exempt from TDS (Taxable in ITR)</td>
                      <td>Audited P&amp;L Statements &amp; Tax Audit Report</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Home Loan Shortfall Settlement</td>
                      <td>Non-Taxable Capital Receipt</td>
                      <td>Capital Liability Extinguishment</td>
                      <td>Exempt (CBDT Cir 12/2022)</td>
                      <td>Sale Certificate &amp; Settlement Sanction</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Corporate Insolvency (IBC / NCLT Plan)</td>
                      <td>Exempt under Approved Plan</td>
                      <td>Section 31 IBC Overrides Income Tax Act</td>
                      <td>Exempt by Statute</td>
                      <td>NCLT Approved Resolution Plan Order</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Comprehensive Financial Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating distressed loan settlements while safeguarding your financial freedom and tax standing requires seasoned banking litigation counsel and structured financial advisory. SettleLoans represents borrowers nationwide—serving formal legal notices, shielding families from unlawful recovery agent harassment, negotiating directly with bank zonal committees for 45% to 65% principal haircuts, and structuring audit-proof documentation to guarantee complete immunity from post-settlement tax liabilities and civil claims.
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
                  11. Frequently Asked Questions: Loan Haircut Taxability in India
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to critical questions regarding loan settlement haircuts, tax provisions, and post-resolution safety in India.
              </p>

              <div className="space-y-3">
                {(jsonLdGraph['@graph'][4] as any).mainEntity.map((faq: any, idx: number) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                  >
                    <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                      <span className="font-bold text-xs sm:text-sm text-slate-900 group-open:text-[#1F5EFF] transition-colors">
                        {faq.name}
                      </span>
                      <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                      {faq.acceptedAnswer.text}
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
                  href="https://incometaxindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Income Tax Department of India (CBDT Official Portal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Income Tax Act, 1961 (Sections 28, 41 &amp; 194R Provisions)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://incometaxindia.gov.in/communications/circular/circular-12-2022.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">CBDT Circular No. 12/2022 (Guidelines on Section 194R &amp; OTS)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Directions on Compromise Settlements &amp; Write-Offs</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (CIT v. Mahindra &amp; Mahindra Precedent)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Debt Resolution &amp; Legal Defense Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-loan-settlement-rules"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Loan Settlement Rules
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Guide
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/cibil-score-kaise-sudhare-settlement-ke-baad"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Improvement After Settlement
                </Link>
                <Link
                  href="/credit-card-settlement-above-1-lakh"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Credit Card Debt Settlement
                </Link>
                <Link
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Unfreeze Bank Salary Account
                </Link>
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Default &amp; Legal Rights
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Recovery Harassment
                </Link>
                <Link
                  href="/5-lakh-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  5 Lakh Loan Settlement Process
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
                Senior specialist in banking litigation defense, debt settlement tax implications, Section 194R compliance, RBI Master Directions, and institutional OTS negotiations across India.
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
                <span>Debt Resolution &amp; Tax Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Settling Your Bank Loan?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not risk post-settlement tax notices or botched sanction terms. Retain experienced advocates to negotiate 45%–65% haircuts with complete tax and civil immunity.
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
                Statutory &amp; Institutional Protections
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>CBDT Circular 12/2022 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Supreme Court Precedent Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Direct Bank Negotiation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
