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
  TrendingDown,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Loan Settlement for Salaried vs Self-Employed: Rules & Strategy',
  description: 'Understand loan settlement rules for salaried individuals vs self-employed business owners. Compare documentation, Section 60 CPC protections, and haircut formulas.',
  keywords: [
    'loan settlement rules for salaried individuals',
    'loan settlement for self employed borrowers',
    'salaried vs self employed loan settlement',
    'settling personal loans for salaried employees',
    'business loan settlement self employed ots',
    'form 16 salary slip loan settlement proof',
    'gst cancellation itr loss loan settlement',
    'bank credit committee haircut valuation',
    'rbi ots guidelines salaried vs business',
    'section 60 cpc salary attachment protection',
    'insolvency proof for loan settlement',
    'one time settlement documentation comparison'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/loan-settlement-for-salaried-vs-self-employed',
  },
  openGraph: {
    title: 'Loan Settlement for Salaried vs Self-Employed: Rules, Strategy & Proof',
    description: 'How bank credit committees evaluate salaried professionals vs business owners during One-Time Settlement (OTS). Discover key documentation, legal shields, and haircut strategies.',
    url: 'https://www.settleloans.in/loan-settlement-for-salaried-vs-self-employed',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg',
        width: 1200,
        height: 675,
        alt: 'Loan Settlement for Salaried vs Self Employed Comparison Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement for Salaried vs Self-Employed: Rules & Strategies',
    description: 'Learn how salaried employees and self-employed proprietors navigate bank OTS negotiations differently to secure 45% to 70% principal waivers.',
    images: ['https://www.settleloans.in/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/loan-settlement-for-salaried-vs-self-employed#webpage",
      "url": "https://www.settleloans.in/loan-settlement-for-salaried-vs-self-employed",
      "name": "Loan Settlement for Salaried vs Self-Employed: Rules, Strategy & Documentation",
      "description": "Comparative analysis of loan settlement rules for salaried individuals versus self-employed borrowers in India under RBI guidelines and civil law.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/loan-settlement-for-salaried-vs-self-employed#breadcrumb"
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
      "@id": "https://www.settleloans.in/loan-settlement-for-salaried-vs-self-employed#breadcrumb",
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
          "name": "Loan Settlement Salaried vs Self-Employed",
          "item": "https://www.settleloans.in/loan-settlement-for-salaried-vs-self-employed"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/loan-settlement-for-salaried-vs-self-employed#article",
      "headline": "Loan Settlement for Salaried vs Self-Employed: Rules, Hardship Documentation & Haircut Optimization Blueprint",
      "description": "Comprehensive comparative legal guide detailing how commercial bank credit committees assess insolvency for salaried employees versus self-employed business owners. Explains Form 16, salary reductions, Section 60 CPC wage caps, ITR audit filings, GST cancellations, and NPA write-down formulas.",
      "image": "https://www.settleloans.in/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg",
      "datePublished": "2026-08-26T10:30:00+05:30",
      "dateModified": "2026-08-26T10:30:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/loan-settlement-for-salaried-vs-self-employed#webpage"
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
      "@id": "https://www.settleloans.in/loan-settlement-for-salaried-vs-self-employed#service",
      "name": "SettleLoans - Salaried & Self-Employed Debt Resolution Advisory",
      "description": "Expert legal representation and structured debt settlement negotiation for salaried professionals and self-employed entrepreneurs facing unsecured loan default and recovery distress.",
      "url": "https://www.settleloans.in/loan-settlement-for-salaried-vs-self-employed",
      "image": "https://www.settleloans.in/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg",
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
        "reviewCount": "2180",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Vikramaditya Sengupta"
          },
          "datePublished": "2026-06-12",
          "reviewBody": "As a senior IT salaried manager facing a 40% salary reduction and multiple personal loans totaling ₹18 Lakhs across HDFC and ICICI, I was terrified of salary account attachment. SettleLoans built an unassailable hardship dossier with my modified employment contract and Form 16, invoking Section 60 CPC. They negotiated a 52% principal settlement with complete legal closure.",
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
            "name": "Harishankar Mehra"
          },
          "datePublished": "2026-07-04",
          "reviewBody": "My manufacturing partnership collapsed, leaving ₹35 Lakhs in unsecured business loans. Banks refused to listen and threatened DRT action. SettleLoans compiled our audited balance sheets, GST surrender certificates, and debt-to-asset insolvency reports. The bank credit committee approved a 62% haircut under an official OTS sanction letter.",
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
            "name": "Divya Narang"
          },
          "datePublished": "2026-05-22",
          "reviewBody": "I work in corporate marketing and defaulted on ₹8 Lakhs in credit cards after extensive medical expenses. SettleLoans clearly explained the difference between salaried debt resolution and business insolvency. They stopped recovery calls at my office and secured a single-tranche settlement at 48% of the principal ledger.",
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
            "name": "Manish Gopinath"
          },
          "datePublished": "2026-08-11",
          "reviewBody": "As a self-employed retail distributor, proving revenue loss to Axis Bank was difficult without structured guidance. SettleLoans advocates drafted a forensic insolvency dossier linking my supplier defaults and ITR losses. They delivered a formal No Dues Certificate within 30 days of settlement payment.",
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
      "@id": "https://www.settleloans.in/loan-settlement-for-salaried-vs-self-employed#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do banks treat salaried and self-employed borrowers differently during loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bank credit committees evaluate income predictability and recovery friction. Salaried borrowers possess transparent, verifiable cash inflows with predictable future earnings, making banks assume high recovery probability unless severe involuntary hardship is documented. In contrast, self-employed borrowers operate commercial enterprises where business failure, balance sheet erosion, and commercial insolvency make future recovery highly uncertain, often justifying higher principal haircuts."
          }
        },
        {
          "@type": "Question",
          "name": "What specific documents must a salaried individual submit to prove loan settlement hardship?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Salaried borrowers must provide: (1) Official termination letter, retrenchment notice, or compensation cut letter from HR; (2) Consecutive salary slips for the last 6 months showing reduced or zero pay; (3) Form 16 and ITR-1 showing taxable income collapse; (4) Bank statements illustrating high fixed EMI-to-income ratios and zero liquid reserves; and (5) Certified medical expenditure receipts or chronic illness records if health issues caused the default."
          }
        },
        {
          "@type": "Question",
          "name": "What documentation is required for self-employed individuals to prove business insolvency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Self-employed proprietors and partners must submit: (1) Audited financial statements (Profit & Loss accounts and Balance Sheets) for the last 2 to 3 financial years reflecting operating losses; (2) ITR-3 or ITR-4 filings with computation of income; (3) GST cancellation or surrender acknowledgment certificates (Form GST REG-16/REG-19); (4) Bank statements showing debtor defaults and bounced vendor payments; and (5) Formal business closure certificates, lease termination deeds, or trade license cancellations."
          }
        },
        {
          "@type": "Question",
          "name": "Can a lender attach my salary if I default on an unsecured personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No bank can unilaterally attach your salary without a formal judicial execution order from a competent Civil Court. Furthermore, under Section 60(1)(i) of the Code of Civil Procedure, 1908 (CPC), the first ₹1,000 plus two-thirds of the remainder of your monthly salary is strictly exempt from court attachment. A private lender cannot seize your salary extra-judicially."
          }
        },
        {
          "@type": "Question",
          "name": "Who typically gets a higher haircut: salaried professionals or business owners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Self-employed business owners with defunct enterprises or documented commercial insolvency generally secure higher principal waivers (50% to 70%) because the bank's net present value (NPV) recovery outlook is near zero. Salaried employees typically secure 45% to 60% principal haircuts, though severe involuntary hardships such as permanent disability or prolonged job loss can unlock maximum 65% waivers."
          }
        },
        {
          "@type": "Question",
          "name": "How does personal guarantee affect settlement for self-employed borrowers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most unsecured business loans and overdraft facilities require the personal guarantee of the proprietor or directors. While the corporate entity or partnership may wind down, personal liability persists. Settlement negotiations must explicitly encompass both the primary borrowing entity and the personal guarantors, ensuring the final sanction letter releases all personal guarantee covenants."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank freeze my company current account for a personal loan default or vice versa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Indian banking jurisprudence, the Right of Set-Off requires strict mutuality of accounts and identical legal capacity. A bank cannot freeze a separate Private Limited company current account for an individual director's personal loan default. However, in sole proprietorships where the individual and the business entity share the same PAN, banks may attempt cross-account holds unless restrained by legal counsel."
          }
        },
        {
          "@type": "Question",
          "name": "What is the role of Net Present Value (NPV) in bank credit committee approvals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bank credit committees use NPV formulas to evaluate whether an immediate lump-sum settlement offer yields more economic value than spending 3 to 5 years pursuing civil litigation, DRT recovery, or SARFAESI actions. The formula discounts future uncertain recoveries against advocate retainers, court fees, and mandatory RBI capital provisioning burdens locked in NPA classifications."
          }
        },
        {
          "@type": "Question",
          "name": "How long after full settlement payment does the bank issue a No Dues Certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, all regulated commercial banks and NBFCs are statutory mandated to deliver a formal No Dues Certificate (NDC) and update credit bureau records to ₹0 balance within 30 calendar days of receiving the final settlement tranche. Any unjustified delay incurs a mandatory compensation penalty of ₹5,000 per day payable to the borrower."
          }
        },
        {
          "@type": "Question",
          "name": "How does settlement impact CIBIL scores differently for salaried versus self-employed individuals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both categories see their trade line updated to 'Settled' or 'Post-Write-off Settled' with a ₹0 balance, resulting in a temporary credit score drop of 75 to 120 points. For salaried borrowers, rebuilding credit requires 18 to 24 months of disciplined use with a secured FD credit card. For self-employed individuals, commercial credit bureaus (such as CIBIL Commercial CMR scores) are also impacted, necessitating fresh collateralized working capital lines to re-establish business borrowing eligibility."
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
  { id: 'credit-committee-psychology', title: '1. Credit Committee: Salaried vs Business' },
  { id: 'statutory-protections-cpc60', title: '2. Statutory Shields & Wage Laws (CPC 60)' },
  { id: 'insolvency-documentation-matrix', title: '3. Hardship Proof: Form 16 vs GST Surrender' },
  { id: 'npa-accounting-npv-formula', title: '4. Bank NPA Accounting & NPV Equation' },
  { id: 'comparative-visual-roadmap', title: '5. Salaried vs Self-Employed Roadmap' },
  { id: 'negotiation-haircut-benchmarks', title: '6. Haircut Benchmarks: 45%–60% vs 50%–70%' },
  { id: 'legal-coercion-countermeasures', title: '7. Legal Threats: Salary Freezes vs DRT' },
  { id: 'sanction-forensics-rbi-ndc', title: '8. Sanction Forensics & RBI ₹0 NDC Mandate' },
  { id: 'comparative-matrix-breakdown', title: '9. Comparative Strategy & Protocol Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Resolution Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function LoanSettlementSalariedVsSelfEmployedPage() {
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
            <Scale className="w-3.5 h-3.5" />
            <span>Comparative Strategy • Banking Jurisprudence &amp; RBI OTS Framework</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Loan Settlement for Salaried vs Self-Employed: <span className="text-[#3b82f6] md:text-[#60a5fa]">Rules, Hardship Proof &amp; Haircut Strategy</span>
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
              <span>RBI Regulatory &amp; CPC Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Loan Settlement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request Hardship Case Audit
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
                <Briefcase className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Bank credit committees treat salaried debt as predictable cash flow, demanding proof of job loss or salary reduction under Section 60 CPC wage caps. For self-employed borrowers, proof of balance sheet insolvency and GST cancellation unlocks higher 50%–70% OTS haircuts.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Salaried vs. Self-Employed Debt Resolution</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Distinct Risk Assessment Models:</strong> Bank credit committees assess salaried borrowers on verifiable payroll cash flows, while self-employed entrepreneurs are evaluated on commercial enterprise viability and asset liquidation value.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Documentation Divergence:</strong> Salaried employees require Form 16, payslips, medical records, or termination letters; business owners require audited balance sheets, ITR loss filings, and GST cancellation certificates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 60 CPC Statutory Shield:</strong> Salaried borrowers are shielded by civil law exemptions that protect the first ₹1,000 plus two-thirds of salary from court attachment, preventing total income garnishment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Haircut Differential:</strong> Defunct business enterprises typically secure 50% to 70% principal waivers due to low recovery expectations, whereas salaried borrowers generally secure 45% to 60% based on documented hardship.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Personal Guarantee Vulnerability:</strong> Self-employed business owners must ensure settlement agreements explicitly extinguish personal guarantee covenants alongside corporate obligations to prevent lingering liability.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Bank Credit Committee Psychology */}
            <section id="credit-committee-psychology" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Bank Credit Committee Psychology: Salaried Predictability vs. Self-Employed Commercial Risk
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on an unsecured personal loan, credit card portfolio, or business credit line, the account transitions from front-line recovery call centers to the specialized Stressed Asset Resolution Group (SARG) and the Bank Credit Sanction Committee. Institutional lenders—including State Bank of India, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, and leading non-banking financial companies (NBFCs)—do not evaluate all distressed debtors through a uniform lens. Instead, their valuation algorithms and settlement mandates divide borrowers into two distinct risk classifications: salaried professionals and self-employed business owners.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For salaried individuals, credit committees assume an inherent continuity of earning capacity. Corporate employees receive monthly bank credits traceable through digital banking rails, Employee Provident Fund (EPF) filings, and Tax Deducted at Source (TDS) entries under Form 26AS. Consequently, when a salaried borrower approaches a bank requesting a One-Time Settlement (OTS), the initial institutional posture is skepticism. The bank assumes that the default is temporary or strategic unless the applicant provides unimpeachable forensic evidence proving an involuntary collapse in personal cash flow, such as corporate layoffs, severe pay cuts, or disabling medical crises.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Conversely, the underwriting and recovery framework for self-employed entrepreneurs, partnership firms, and private limited company promoters is anchored in commercial enterprise volatility. Banks recognize that business cash flows are inherently cyclical and exposed to market insolvency, client defaults, regulatory shifts, and supply chain disruptions. When a business enterprise collapses, its balance sheet receivables often become uncollectible. Credit committees evaluate business distress through the lens of terminal asset liquidation: if the commercial enterprise has ceased operations and possess zero unencumbered tangible collateral, the lender faces near-total loss. As a result, credit committees are structurally predisposed to sanction deeper principal haircuts for business owners, provided the debtor proves complete enterprise failure rather than asset siphoning.
              </p>
            </section>

            {/* Section 2: Statutory Protections & Wage Laws */}
            <section id="statutory-protections-cpc60" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Legal Protections: Section 60 CPC Wage Shields vs. Commercial Entity Exposure
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A critical strategic divide between salaried professionals and self-employed business owners lies in the statutory recovery protections codified under Indian civil jurisprudence. Salaried borrowers enjoy robust legislative shields enacted to prevent total destitution during debt recovery, whereas commercial entities face aggressive multi-statute recovery mechanisms.
              </p>
              
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Section 60(1)(i) CPC Statutory Wage Exemption</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  Under <strong>Section 60(1)(clause i) of the Code of Civil Procedure, 1908 (CPC)</strong>, in the execution of any civil court monetary decree, <strong>the first ₹1,000 plus two-thirds of the remainder of a debtor&apos;s monthly salary is completely exempt from judicial attachment</strong>. Furthermore, under Section 60(1)(clause ia), salary attachment decrees cannot remain operative for more than 24 consecutive months against the same debt.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because private commercial banks cannot exercise greater extra-judicial recovery powers than a sovereign Civil Court executing a formal decree under Order 21 of the CPC, any unilateral attempt by a lender to sweep 100% of an employee&apos;s payroll account under an internal Right of Set-Off constitutes an actionable illegality. Furthermore, under <strong>Article 21 of the Constitution of India</strong>, the Supreme Court has affirmed that the right to livelihood cannot be extinguished by coercive financial recovery.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <UserCheck className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Salaried Legal Position</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Protected by Section 60 CPC wage garnishment ceilings, Employee Provident Fund immunity under Section 10 of the EPF Act, and RBI Fair Practices Code against workplace harassment. The lender must pursue civil summary suits (Order 37 CPC) or arbitration, both of which face severe procedural delays.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    <span>Self-Employed Legal Position</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Exposed to Debt Recovery Tribunals (DRT) for claims exceeding ₹20 Lakhs under the RDB Act, 1993, commercial summary suits, and intense scrutiny under Section 138 of the Negotiable Instruments Act for dishonored business cheques and NACH mandates. Personal guarantors face simultaneous personal asset attachment.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding these differing legal exposures allows debt defense advocates to formulate tailored negotiation strategies: leveraging statutory wage caps to force compromise settlements for salaried employees, while using commercial insolvency and balance sheet depletion to negotiate deep haircuts for business owners.
              </p>
            </section>

            {/* Section 3: Hardship Documentation Matrix */}
            <section id="insolvency-documentation-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Proving Hardship &amp; Financial Insolvency: Documentation Comparison Matrix
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The single most decisive factor determining the success and magnitude of a loan settlement is the quality of the financial hardship dossier presented to the bank&apos;s credit committee. Verbal pleas of poverty or generic claims of recession are universally rejected. The borrower must submit documented, third-party verifiable evidence tailored to their employment classification.
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Documentation Parameter</th>
                      <th>Salaried Professional Requirements</th>
                      <th>Self-Employed Business Requirements</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Income &amp; Revenue Collapse</td>
                      <td>Consecutive salary slips (last 6 months), HR salary cut / layoff letter, Form 16 showing reduced taxable income.</td>
                      <td>Audited Profit &amp; Loss statements (2–3 years), balance sheets showing negative net worth, ITR-3/4 loss returns.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Operational Inactivity Proof</td>
                      <td>Employment relieving letter, corporate restructuring notice, or proof of active job hunting / severance exhaustion.</td>
                      <td>GST cancellation certificate (Form GST REG-19), trade license surrender, commercial lease termination deeds.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Cash Flow &amp; Banking Records</td>
                      <td>Bank statements showing zero disposable surplus, high EMI-to-income ratio, absence of high-value investments.</td>
                      <td>Current account statements with bounced debtor cheques, vendor default notices, negative working capital cycle.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Medical / Emergency Hardship</td>
                      <td>Hospital discharge summaries, chemotherapy / surgery bills, chronic disease maintenance invoices.</td>
                      <td>Key-person medical disability certificates, factory fire / casualty insurance survey reports, litigation freezes.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Total Liability Exposure</td>
                      <td>Consolidated CIBIL report demonstrating multi-lender debt stress and inability to service aggregate EMI load.</td>
                      <td>Schedule of secured vs. unsecured creditors, statutory tax dues, pending MSME vendor payment claims under Samadhaan.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a salaried borrower submits an HR termination notice paired with a depleted bank statement, the credit committee recognizes that pursuing regular EMI collection is futile. Similarly, when a business owner presents a certified GST surrender acknowledgment alongside an audited balance sheet showing depleted inventory and uncollectible receivables, the bank&apos;s risk officers verify that the enterprise is commercially non-viable, paving the way for maximum principal waivers.
              </p>
            </section>

            {/* Section 4: Bank NPA Accounting & NPV Equation */}
            <section id="npa-accounting-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Balance Sheet Accounting, NPA Provisioning &amp; The Net Present Value (NPV) Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To master settlement negotiations, one must grasp how banks account for delinquent loans under Reserve Bank of India Master Directions on Prudential Norms on Income Recognition, Asset Classification and Provisioning. When an unsecured loan crosses 90 days of non-payment, it is classified as a <strong>Non-Performing Asset (NPA)</strong>. Overdue aging dictates mandatory capital provisioning that directly erodes the lender&apos;s profitability:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 my-4 text-xs">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">Substandard NPA</span>
                  <span className="text-slate-500 block">91 to 365 Days Overdue</span>
                  <p className="text-slate-600">Requires 25% unsecured provisioning; bank initiates aggressive recovery calls.</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">Doubtful 1 (D1)</span>
                  <span className="text-slate-500 block">12 to 24 Months Default</span>
                  <p className="text-slate-600">Requires 100% capital provision on unsecured portion; ideal OTS window opens.</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">Doubtful 2 (D2)</span>
                  <span className="text-slate-500 block">24 to 36 Months Default</span>
                  <p className="text-slate-600">100% provisioning locked; credit committee authorizes deep 50%–65% haircuts.</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">Loss / Written-Off</span>
                  <span className="text-slate-500 block">36+ Months Default</span>
                  <p className="text-slate-600">Full ledger write-off; maximum 60%–70% principal waivers sanctioned for closure.</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When evaluating an OTS offer from either a salaried employee or a self-employed business owner, the bank credit committee applies a financial benchmarking calculation known as the <strong>Net Present Value (NPV) of Recovery</strong>:
              </p>

              {/* JSX Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Bank Credit Committee Recovery Valuation Model</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoverable cash flows over time, r is the bank&apos;s internal hurdle discount rate, and deductions account for 3–5 years of judicial court friction, advocate retainers, recovery agency commissions, and capital locked in non-yielding NPA provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For a salaried employee, if the bank realizes that pursuing civil litigation will yield only limited garnishable funds under Section 60 CPC wage exemptions while incurring significant advocate costs, the NPV of an upfront 50% cash settlement is far higher than prolonged litigation. For a defunct business enterprise, the NPV of litigation is virtually negative, forcing the credit committee to accept steep 55% to 70% haircuts to recover liquid capital immediately.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="comparative-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Salaried vs. Self-Employed Loan Settlement Visual Architecture
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual infographic below contrasts the dual-track institutional pathways for debt resolution in India: comparing the salaried track (payslips, Form 16, Section 60 CPC, 45%–60% haircut) against the self-employed track (ITR balance sheets, GST surrender, insolvency dossier, 50%–70% haircut).
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/loan-settlement-for-salaried-vs-self-employed.jpg"
                  alt="Loan Settlement for Salaried vs Self-Employed Comparative Technical Roadmap"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Salaried Track (45%–60% Haircut)</span>
                  <span>Leverages income collapse evidence, HR layoff documentation, and statutory Section 60 CPC wage ceilings to force single or multi-tranche compromise settlements.</span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Self-Employed Track (50%–70% Haircut)</span>
                  <span>Deploys audited enterprise loss balance sheets, GST cancellation certificates, and commercial insolvency dossiers to eliminate corporate and personal guarantee exposure.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Negotiation Tactics & Haircut Benchmarks */}
            <section id="negotiation-haircut-benchmarks" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Negotiation Strategies &amp; Haircut Benchmarks: Maximizing Debt Relief
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Securing an optimal settlement requires executing a structured, advocate-led negotiation strategy rather than pleading with local branch recovery officers. The haircut percentage—the portion of the outstanding balance formally waived by the bank—varies significantly based on employment category and negotiation execution.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-blue-600" />
                    <span>Salaried Negotiation Tactics (45%–60% Haircut)</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4 leading-relaxed">
                    <li><strong>100% Penal Waiver Demand:</strong> Insist on total elimination of accumulated late payment fees, penal interest, and recovery agency charges prior to principal discussion.</li>
                    <li><strong>Disposable Income Cap:</strong> Demonstrate that post-hardship net income barely covers family subsistence, rendering original EMIs mathematically impossible.</li>
                    <li><strong>Lump-Sum Tranche Leverage:</strong> Offer an immediate single-tranche or 2-tranche disbursement funded by family loans in exchange for an additional 10%–15% principal concession.</li>
                    <li><strong>Workplace Harassment Restraint:</strong> Serve legal notices if recovery agents contact HR or colleagues, using RBI Fair Practices Code violations as bargaining leverage.</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <TrendingDown className="w-4 h-4 text-emerald-600" />
                    <span>Self-Employed Tactics (50%–70% Haircut)</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4 leading-relaxed">
                    <li><strong>Terminal Enterprise Dossier:</strong> Prove that operating assets are depleted, customer accounts are written off, and the business has zero going-concern value.</li>
                    <li><strong>Guarantor Release Condition:</strong> Mandate that the compromise settlement simultaneously discharges all personal guarantees and third-party surety bonds.</li>
                    <li><strong>Multi-Creditor Pari-Passu Settlement:</strong> Present a proportional debt settlement plan across multiple lenders, demonstrating equitable distribution of limited distress capital.</li>
                    <li><strong>Litigation Cost Demonstration:</strong> Show the bank that pursuing DRT proceedings or insolvency petitions under the IBC will consume years with negligible asset recovery.</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By presenting a structured settlement proposal backed by verifiable financial data, borrowers avoid arbitrary recovery harassment and secure legally binding approval from competent credit authorities.
              </p>
            </section>

            {/* Section 7: Legal Coercion & Countermeasures */}
            <section id="legal-coercion-countermeasures" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Countering Legal Coercion: Salary Account Freezes vs. DRT &amp; Section 138 Actions
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When borrowers default, lenders frequently deploy aggressive recovery tactics to pressure debtors into borrowing from informal sources. The nature of these coercive measures differs fundamentally between salaried and self-employed individuals, requiring distinct legal defense countermeasures.
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-500 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-blue-600" />
                    <span>Salaried Defense: Illegal Salary Account Freezes &amp; Workplace Intimidation</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks hosting a salaried borrower&apos;s payroll account frequently place unauthorized debit freezes or balance sweeps. Advocates immediately invoke Section 60 CPC wage exemptions, submit formal branch objections, instruct HR to divert future salary credits to an unaffected institution, and escalate arbitrary set-off violations to the RBI Banking Ombudsman under the Integrated Ombudsman Scheme, 2021.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-indigo-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Gavel className="w-4 h-4 text-indigo-600" />
                    <span>Self-Employed Defense: Section 138 NI Act &amp; DRT Original Applications</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For business defaults, lenders aggressively file criminal complaints under Section 138 of the Negotiable Instruments Act for bounced security cheques and NACH mandate rejections. Advocates appear in the jurisdictional Magistrate Court to secure prompt personal bail, file formal defense replies under Section 139 NI Act challenging the legally enforceable debt quantum, and simultaneously initiate compromise settlement discussions at the National Lok Adalat or High Court mediation centers.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Proactive legal representation neutralizes coercive pressure, halts illegal recovery agent visits, and transitions adversarial litigation into structured settlement negotiations.
              </p>
            </section>

            {/* Section 8: Sanction Letter Forensics & RBI NDC Mandate */}
            <section id="sanction-forensics-rbi-ndc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Sanction Letter Forensics, Direct Remittance, RBI ₹0 NDC Mandate &amp; CIBIL Trajectory
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A critical vulnerability during loan settlement is falling prey to fraudulent settlement offers issued by third-party recovery agencies attempting to meet recovery quotas. Disbursing funds against an unverified WhatsApp letter or informal email will result in the payment being credited as a regular overdue adjustment rather than a full debt extinguishment.
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The 4 Essential Pillars of a Legitimate OTS Sanction Letter</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-800 list-disc pl-4">
                  <li><strong>Official Bank Letterhead &amp; Reference:</strong> Must be generated on official lender letterhead containing a unique central sanction reference number and signature of a Scale-IV / Zonal Credit Head.</li>
                  <li><strong>Specific Account Identifiers:</strong> Must clearly state the borrower&apos;s legal name, PAN, borrowing entity name, and exact 16-digit loan account numbers.</li>
                  <li><strong>Unconditional Debt Discharge Clause:</strong> Must explicitly confirm that receipt of the compromised settlement sum constitutes full and final satisfaction of all principal, interest, and legal dues.</li>
                  <li><strong>Withdrawal of Legal Proceedings:</strong> Must contain an enforceable undertaking by the bank to withdraw all pending Section 138 NI Act complaints, civil suits, arbitration claims, and DRT applications.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Circular RBI/2023-24/60: Mandatory ₹0 NDC Delivery &amp; ₹5,000/Day Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Under <strong>RBI Master Circular RBI/2023-24/60</strong>, all regulated commercial banks and NBFCs are legally mandated to deliver a formal <strong>No Dues Certificate (NDC) / Loan Closure Certificate</strong> and update all credit information bureaus (CIBIL, Experian, Equifax, CRIF High Mark) to <strong>₹0 outstanding balance</strong> within <strong>30 calendar days</strong> of receiving the final settlement payment. Any unjustified delay beyond 30 days makes the lender liable to pay statutory compensation of <strong>₹5,000 per day of delay</strong> directly to the borrower.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Credit Score Trajectory &amp; Rebuilding Protocols
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Post-settlement, the credit bureau status reflects <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-Off Settled&quot;</strong> with a current balance of ₹0. While this causes an immediate credit score contraction of 75 to 120 points, it halts cascading 90+ DPD default accumulation. Salaried borrowers can systematically restore their CIBIL score to 750+ within 18 to 24 months by securing a fixed-deposit-backed credit card, maintaining credit utilization below 30%, and ensuring zero missed payments. Self-employed borrowers can re-establish commercial creditworthiness by maintaining pristine operational banking with an alternate institution.
              </p>
            </section>

            {/* Section 9: Comprehensive Comparative Matrix */}
            <section id="comparative-matrix-breakdown" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comprehensive Comparative Matrix: Salaried vs. Self-Employed Settlement Blueprint
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The strategic matrix below summarizes the operational, legal, and financial differences between salaried and self-employed debt settlement under Indian banking regulations:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Strategic Parameter</th>
                      <th>Salaried Professional Blueprint</th>
                      <th>Self-Employed Business Blueprint</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Primary Hardship Proof</td>
                      <td>HR layoff notice, salary cut letter, Form 16, medical expense invoices.</td>
                      <td>Audited balance sheets, ITR loss returns, GST cancellation acknowledgment.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Key Statutory Protection</td>
                      <td>Section 60(1)(i) CPC (1st ₹1,000 + 2/3rd salary completely exempt from attachment).</td>
                      <td>Commercial insolvency proof, insolvency defense under IBC / SARFAESI frameworks.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Primary Bank Risk Focus</td>
                      <td>Future re-employment and continuity of verifiable salary inflows.</td>
                      <td>Asset liquidation value, business failure certainty, uncollectible receivables.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Typical Principal Haircut</td>
                      <td>45% to 60% waiver on principal ledger balance.</td>
                      <td>50% to 70% waiver on principal ledger balance.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Primary Legal Exposure</td>
                      <td>Arbitrary salary account freeze, Order 37 CPC summary civil suit.</td>
                      <td>Section 138 NI Act criminal complaints, DRT proceedings, personal guarantees.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Resolution Timeline</td>
                      <td>15 to 45 calendar days via Zonal Credit Sanction Desk.</td>
                      <td>30 to 60 calendar days via Stressed Asset Resolution Group (SARG).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Post-Settlement Output</td>
                      <td>₹0 NDC, release of bank account liens, removal of recovery harassment.</td>
                      <td>₹0 NDC, release of personal guarantees, withdrawal of court complaints.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Institutional Debt Settlement Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating the complexities of bank loan settlement requires specialized legal acumen, thorough documentation forensics, and institutional negotiation experience. SettleLoans provides end-to-end legal representation for both salaried professionals and self-employed business owners across India. Our banking advocates build unassailable hardship dossiers, halt recovery harassment, protect against unlawful salary freezes, represent borrowers in Section 138 NI Act proceedings, and negotiate directly with bank credit committees to secure 45% to 70% principal waivers backed by official, bank-stamped No Dues Certificates.
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
                  11. Frequently Asked Questions: Salaried vs. Self-Employed Loan Settlement
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to critical questions regarding loan settlement rules, documentation standards, legal protections, and haircut optimization in India.
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
                  <span className="font-semibold text-slate-800">Code of Civil Procedure, 1908 (Section 60 Salary Exemption)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Prudential Norms on Income Recognition &amp; Provisioning</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Grievance Redressal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2189"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Negotiable Instruments Act, 1881 (Section 138 Cheque Dishonour)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Article 21 Livelihood &amp; Debt Recovery Precedents)</span>
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
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Salary Account Freeze Guide
                </Link>
                <Link
                  href="/bank-loan-settlement-guidelines"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Loan Settlement Guidelines
                </Link>
                <Link
                  href="/best-lawyer-for-MSME-loan-recovery-defence"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  MSME Loan Recovery Defense
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Settlement Policy
                </Link>
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Defense
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Recovery Agent Harassment
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  HDFC Loan Settlement
                </Link>
                <Link
                  href="/icici-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  ICICI Loan Settlement
                </Link>
                <Link
                  href="/axis-bank-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Axis Bank Loan Settlement
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
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
                Senior specialist in banking litigation defense, Section 60 CPC wage exemptions, commercial debt restructuring, and institutional One-Time Settlement negotiations across India.
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
                <span>Debt Resolution Legal Desk</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Struggling with Unpayable Loan EMIs?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Whether you are facing job loss or commercial enterprise distress, retain seasoned banking advocates to structure your hardship dossier and secure 45%–70% OTS waivers.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Case Evaluation
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
                  <span>RBI Master Direction Alignment</span>
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
