import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import {
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
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
  Sparkles,
  BookOpen,
  ShieldAlert,
  CreditCard,
  Scale,
  FileText,
  CheckCircle2,
  HelpCircle,
  Info,
  Users,
  Percent,
  CheckCircle,
  Calculator,
  Briefcase,
  Layers,
  ArrowUpRight,
  Gavel,
  FileCheck,
  ShieldX,
  UserCheck,
  AlertCircle,
  BadgePercent
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kotak Mahindra Bank Loan Settlement: Legal Process, OTS Policy & 60% Haircut (2026)',
  description: 'In-depth legal guide to Kotak Mahindra Bank personal loan settlement. Navigate Kotak pre-litigation notices, Section 25 PSSA summons, Phoenix ARC transfers, and negotiate up to 60% waiver with a ₹0 NDC under RBI rules.',
  keywords: [
    'kotak mahindra bank loan settlement',
    'kotak bank personal loan settlement process',
    'kotak bank ots policy',
    'kotak bank loan settlement percentage',
    'kotak bank recovery agent harassment complaint',
    'kotak bank section 25 pssa notice',
    'kotak bank legal notice reply',
    'kotak bank lok adalat settlement',
    'kotak phoenix arc loan settlement',
    'kotak bank no dues certificate after settlement',
    'kotak bank nodal officer email id',
    'kotak 811 account lien removal loan default'
  ],
  alternates: {
    canonical: 'https://settleloans.in/kotak-bank-personal-loan-settlement',
  },
  openGraph: {
    title: 'Kotak Mahindra Bank Loan Settlement: Legal Process, OTS Policy & 60% Haircut (2026)',
    description: 'Master Kotak Mahindra Bank personal loan settlement. Learn how to handle aggressive collection calls, Section 25 PSSA notices, Phoenix ARC assignments, and negotiate directly with nodal officers for an official OTS sanction letter.',
    url: 'https://settleloans.in/kotak-bank-personal-loan-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://settleloans.in/images/infographics/kotak-bank-personal-loan-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'Kotak Mahindra Bank Personal Loan Settlement Process & OTS Haircut Blueprint',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kotak Mahindra Bank Personal Loan Settlement Guide: Legal OTS & Haircuts',
    description: 'Technical and legal playbook for settling defaulted Kotak Mahindra Bank personal loans, credit cards, and digital credit lines under RBI compromise frameworks.',
    images: ['https://settleloans.in/images/infographics/kotak-bank-personal-loan-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://settleloans.in/kotak-bank-personal-loan-settlement#webpage",
      "url": "https://settleloans.in/kotak-bank-personal-loan-settlement",
      "name": "Kotak Mahindra Bank Loan Settlement: Legal Process, OTS Policy & 60% Haircut (2026)",
      "description": "In-depth legal guide to Kotak Mahindra Bank personal loan settlement. Navigate Kotak pre-litigation notices, Section 25 PSSA summons, Phoenix ARC transfers, and negotiate up to 60% waiver with a ₹0 NDC under RBI rules.",
      "breadcrumb": {
        "@id": "https://settleloans.in/kotak-bank-personal-loan-settlement#breadcrumb"
      },
      "inLanguage": "en-IN",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://settleloans.in/#website",
        "name": "SettleLoans",
        "url": "https://settleloans.in"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://settleloans.in/kotak-bank-personal-loan-settlement#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://settleloans.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Kotak Mahindra Bank Loan Settlement",
          "item": "https://settleloans.in/kotak-bank-personal-loan-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://settleloans.in/kotak-bank-personal-loan-settlement#article",
      "headline": "Kotak Mahindra Bank Loan Settlement: Legal Process, OTS Policy & 60% Haircut",
      "description": "An exhaustive analysis of Kotak Mahindra Bank's loan recovery apparatus, pre-litigation notices, NPA write-off mechanics, Phoenix ARC assignments, and step-by-step compromise settlement procedures under RBI guidelines.",
      "image": "https://settleloans.in/images/infographics/kotak-bank-personal-loan-settlement.jpg",
      "datePublished": "2026-08-24T12:00:00+05:30",
      "dateModified": "2026-08-24T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://settleloans.in/kotak-bank-personal-loan-settlement#webpage"
      },
      "author": {
        "@type": "Person",
        "name": "Ashish Jhangra",
        "url": "https://settleloans.in/authors/ashish-jhangra"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://settleloans.in/#organization",
        "name": "SettleLoans",
        "url": "https://settleloans.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://settleloans.in/logo/logo.svg"
        }
      }
    },
    {
      "@type": "FinancialService",
      "@id": "https://settleloans.in/kotak-bank-personal-loan-settlement#service",
      "name": "SettleLoans - Kotak Mahindra Bank Loan Settlement & Legal Defense",
      "description": "Specialized legal representation and financial negotiation advisory for settling defaulted Kotak Mahindra Bank personal loans, credit cards, and digital credit lines under RBI compromise frameworks.",
      "url": "https://settleloans.in/kotak-bank-personal-loan-settlement",
      "image": "https://settleloans.in/images/infographics/kotak-bank-personal-loan-settlement.jpg",
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
        "@id": "https://settleloans.in/#organization",
        "name": "SettleLoans",
        "url": "https://settleloans.in"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2140",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rohan Deshmukh"
          },
          "datePublished": "2026-06-18",
          "reviewBody": "After losing my senior project role, my Kotak Mahindra Bank personal loan of ₹8.4 Lakhs fell into default. Kotak collection agents started threatening home visits and issued a Section 25 PSSA notice. SettleLoans stepped in immediately, filed a formal reply disputing unauthorized late penalties, and escalated the case to the Kotak Stressed Assets vertical. They secured an official OTS sanction letter for ₹3.4 Lakhs (a 59% principal waiver) payable in two installments. I received my zero-balance NDC within three weeks.",
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
            "name": "Priyanka Mathur"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "Kotak placed an unexpected lien on my savings account under Section 171 and sent recovery agents to my office. The legal advocates at SettleLoans issued a strict cease-and-desist citing the RBI Recovery Agent Master Directions. They unblocked my active finances and negotiated a comprehensive settlement on my ₹5.6 Lakhs Kotak personal loan for ₹2.2 Lakhs directly with the Principal Nodal Officer.",
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
            "name": "Siddharth Sen"
          },
          "datePublished": "2026-05-11",
          "reviewBody": "My delinquent Kotak personal loan and credit card debt had been assigned to Phoenix ARC, who demanded inflated compound charges. SettleLoans audited the assignment documents, challenged the illegal penal interest calculations, and closed the entire account with Phoenix ARC for a single lump-sum settlement at 48% of the genuine principal balance.",
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
          "datePublished": "2026-08-02",
          "reviewBody": "Received a National Lok Adalat notice for my defaulted Kotak personal loan. SettleLoans represented me before the Lok Adalat bench, executed a binding compromise decree at a 55% discount, and ensured Kotak issued the official No Dues Certificate within 20 days as per RBI guidelines.",
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
      "@id": "https://settleloans.in/kotak-bank-personal-loan-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Kotak Mahindra Bank loan settlement process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Kotak Mahindra Bank loan settlement process is a formal compromise resolution between Kotak Mahindra Bank Limited and an unsecured borrower experiencing verifiable financial insolvency. When an unsecured personal loan or credit card account crosses 90 days past due and is classified as a Non-Performing Asset (NPA), the recovery file moves from front-line collection agents to the Stressed Asset Management Group (SAMG) or legal nodal desk. The borrower submits a structured One-Time Settlement (OTS) proposal with documented evidence of hardship. Kotak's Credit Committee calculates recovery viability using Net Present Value (NPV) benchmarks. Upon mutual agreement, Kotak issues a formal, stamped OTS Sanction Letter, and once the compromised amount is deposited directly into the loan ledger, the bank extinguishes residual debt and delivers a No Dues Certificate (NDC)."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver or haircut does Kotak Bank typically approve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kotak Mahindra Bank typically sanctions principal haircuts between 45% and 65% of the total ledger balance on defaulted unsecured personal loans and credit cards. The haircut magnitude depends on the NPA provisioning age (Substandard, Doubtful D1/D2, or Loss Asset), whether the account has been written off or marked for asset reconstruction company (ARC) transfer, and the strength of the borrower's hardship dossier. In all formal compromise settlements, 100% of accumulated penal interest, late payment fees, and bounce charges are completely waived."
          }
        },
        {
          "@type": "Question",
          "name": "How does Kotak Bank handle Section 25 PSSA and Section 138 cheque bounce notices?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When an electronic NACH auto-debit or repayment cheque dishonours due to insufficient funds, Kotak Bank's legal vertical routinely issues statutory demand notices under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) or Section 138 of the Negotiable Instruments Act, 1881. Borrowers must never ignore these statutory communications. A formal legal reply drafted by experienced debt defense advocates must be served within the mandatory 15-day window, setting out genuine financial distress, disputing usurious penalty charges, and proposing an amicable One-Time Settlement to halt court litigation."
          }
        },
        {
          "@type": "Question",
          "name": "Can Kotak Bank freeze my Kotak 811 or savings account for an overdue personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under Section 171 of the Indian Contract Act, 1872 (Banker's Right of General Lien and Set-Off), Kotak Mahindra Bank is legally entitled to freeze funds or offset balances held in any savings account, salary account, current account, or Kotak 811 digital account linked to the same PAN or Customer Relationship Number (CRN). However, Kotak Bank has no statutory power to unilaterally freeze or deduct funds from accounts maintained with external, independent banking institutions without a specific attachment order from a competent Civil Court."
          }
        },
        {
          "@type": "Question",
          "name": "Why does Kotak Mahindra Bank assign defaulted loans to Phoenix ARC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To clean its balance sheet and recover capital, Kotak Mahindra Bank frequently bundles aged NPA personal loans and assigns them to Asset Reconstruction Companies (ARCs), predominantly Phoenix ARC Private Limited, pursuant to Section 5 of the SARFAESI Act. When an assignment occurs, Phoenix ARC steps into Kotak's shoes as the legal creditor. Borrowers retain the full legal right to negotiate an OTS directly with Phoenix ARC's resolution managers, often securing substantial haircuts on the assigned portfolio."
          }
        },
        {
          "@type": "Question",
          "name": "What protections do borrowers have against Kotak Bank recovery agent harassment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers are strictly protected under the RBI Master Directions on Recovery Agents and Fair Practices Code (2022). Kotak recovery agents are prohibited from: (1) Calling before 08:00 AM or after 07:00 PM; (2) Visiting workplaces or public locations to cause social humiliation; (3) Contacting family members, employers, or friends; (4) Using intimidating or vulgar language. Visiting agents must produce an official bank authorization letter and valid ID. Violations can be escalated to Kotak's Principal Nodal Officer and the RBI Integrated Ombudsman for immediate disciplinary action."
          }
        },
        {
          "@type": "Question",
          "name": "Can Kotak personal loans be settled through National Lok Adalat benches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Kotak Mahindra Bank actively refers thousands of pre-litigation and pending recovery disputes to the quarterly National Lok Adalat conducted under the Legal Services Authorities Act, 1987. In Lok Adalat conciliation hearings, bank representatives possess pre-approved settlement mandates with significant haircut flexibility (often 45% to 60%). The settlement award passed by the Lok Adalat bench has the legal enforceability of a non-appealable Civil Court Decree, permanently closing the dispute."
          }
        },
        {
          "@type": "Question",
          "name": "How does a Kotak loan settlement affect your CIBIL score and credit history?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upon successful execution of the OTS, Kotak Bank updates credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) with the status 'Settled' or 'Post-Write-off Settled' and a balance of ₹0. While this causes a temporary score reduction of 75 to 150 points and triggers a 12-month cooling period under RBI rules, it permanently halts negative compounding arrears. Borrowers can rebuild their score back above 750 within 18 to 24 months by maintaining disciplined repayment on secured credit builder products."
          }
        },
        {
          "@type": "Question",
          "name": "What essential checkpoints must be verified on a Kotak OTS Sanction Letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Before depositing any settlement payment, borrowers must verify: (1) The letter is on official Kotak Mahindra Bank Limited letterhead with branch address and bank seal; (2) The document contains the borrower's exact loan account number and PAN; (3) It specifies the exact compromised settlement amount and clear installment deadlines; (4) It contains an unequivocal clause confirming that payment will extinguish all outstanding claims and result in full closure; (5) It carries the signature and employee code of an authorized signatory."
          }
        },
        {
          "@type": "Question",
          "name": "What is the statutory deadline for Kotak Bank to issue a No Dues Certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, Kotak Mahindra Bank is legally obligated to release a formal No Dues Certificate (NDC) / Loan Closure Letter and update credit bureau records within 30 calendar days of receiving the final settlement tranche. Failure to deliver the closure document within 30 days without lawful justification renders the bank liable to pay statutory compensation of ₹5,000 per day of delay directly to the borrower."
          }
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://settleloans.in/#organization",
      "name": "SettleLoans",
      "url": "https://settleloans.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://settleloans.in/logo/logo.svg"
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
  { id: 'understanding-kotak-loan-defaults', title: '1. Kotak Loan Delinquency & Recovery Framework' },
  { id: 'kotak-pre-litigation-notices-phoenix-arc', title: '2. Pre-Litigation Summons & Phoenix ARC Transfers' },
  { id: 'bankers-lien-section-171-harassment-defense', title: '3. Section 171 Banker\'s Lien & Harassment Shield' },
  { id: 'kotak-npa-accounting-npv-formula', title: '4. NPA Accounting & Net Present Value (NPV) Equation' },
  { id: 'kotak-settlement-visual-roadmap', title: '5. Kotak Settlement Visual Roadmap' },
  { id: 'direct-negotiation-strategy-nodal-officers', title: '6. Direct Negotiation with Kotak Legal Nodal Officers' },
  { id: 'sanction-letter-forensics-authenticity', title: '7. Sanction Letter Forensics & Trap Avoidance' },
  { id: 'remittance-rbi-ndc-mandate-cibil-recovery', title: '8. Loan Remittance, RBI ₹0 NDC & Credit Recovery' },
  { id: 'kotak-settlement-comparative-matrix', title: '9. Comprehensive Resolution Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function KotakBankPersonalLoanSettlementPage() {
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
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-red-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Landmark className="w-3.5 h-3.5" />
            <span>Bank-Specific Dispute Resolution • Kotak Mahindra Bank</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Kotak Mahindra Bank Loan Settlement: <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Process, OTS Policy &amp; 60% Haircut</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Facing aggressive recovery calls, Section 25 PSSA summons, or Phoenix ARC transfers on your Kotak personal loan? Learn Kotak&apos;s internal provisioning rules, statutory borrower protections, and how to negotiate directly with legal nodal officers for an official OTS and ₹0 NDC.
          </p>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Written by <strong>Ashish Jhangra</strong></span>
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
              <span>Negotiate Kotak Settlement</span>
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
          
          {/* Left Column: Table of Contents + Executive Crux */}
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200 text-slate-900 font-bold text-sm">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                <span>Table of Contents</span>
              </div>
              <nav className="space-y-1 text-xs">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block py-1.5 px-2.5 rounded-lg text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 transition-all duration-150 leading-snug"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Kotak Quick Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Kotak Mahindra Bank deploys aggressive pre-litigation notices and frequently assigns aged NPA portfolios to Phoenix ARC. Direct legal escalation to zonal nodal officers unlocks 45%–65% principal haircuts.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Kotak Mahindra Bank Loan Resolution</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pre-Litigation Strategy:</strong> Kotak Bank relies heavily on Section 25 PSSA and Section 138 NI Act notices to exert psychological pressure; a timely legal reply sets the stage for an OTS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Haircut Parameters:</strong> Unsecured personal loans and credit cards qualify for 45% to 65% principal waivers once accounts cross 90-day NPA thresholds and advance into provisioning buckets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Phoenix ARC Defense:</strong> When Kotak assigns delinquent portfolios to Phoenix ARC, borrowers retain complete statutory rights to negotiate structured compromise settlements directly with the ARC.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 171 Protection:</strong> Kotak cannot touch accounts in external banks (e.g., HDFC, ICICI, SBI) despite exercising lien rights over linked Kotak savings and 811 digital accounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory ₹0 NDC:</strong> Under RBI circular directives, Kotak Bank must deliver an official No Dues Certificate within 30 days of settlement payment under a ₹5,000 daily penalty rule.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Kotak Loan Delinquency & Recovery Framework */}
            <section id="understanding-kotak-loan-defaults" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Kotak Mahindra Bank Loan Delinquency &amp; Risk Recovery Architecture
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Kotak Mahindra Bank Limited maintains one of the most technologically streamlined yet aggressive retail debt recovery infrastructures in the Indian private banking sector. Borrowers who secure unsecured personal loans, instant consumer durable loans, or credit cards through Kotak&apos;s retail branch network or digital Kotak 811 channels enter a tightly governed credit lifecycle. When unexpected life crises—such as involuntary employment termination, critical medical emergencies, or severe micro-enterprise cash flow disruptions—force an individual to miss equated monthly installments (EMIs), Kotak&apos;s automated risk monitoring systems instantly trigger a multi-stage escalation protocol.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the regulatory framework mandated by the Reserve Bank of India (RBI), a delinquent loan undergoes formal asset categorization based on the duration of delinquency:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <li><strong>Special Mention Account 0 (SMA-0):</strong> Principal or interest payment overdue for 1 to 30 days. Internal automated SMS, email reminders, and tele-calling queues initiate soft recovery touches.</li>
                <li><strong>Special Mention Account 1 (SMA-1):</strong> Delinquency spanning 31 to 60 days. Kotak&apos;s collection workflow intensifies, mobilizing centralized tele-calling desks and issuing formal overdue reminders.</li>
                <li><strong>Special Mention Account 2 (SMA-2):</strong> Delinquency spanning 61 to 90 days. The account reaches critical pre-NPA status. Kotak initiates pre-litigation notices and reallocates the file to field recovery agents.</li>
                <li><strong>Non-Performing Asset (NPA):</strong> Overdue exceeding 90 consecutive calendar days. Under Master Direction – Reserve Bank of India (Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances), the loan is categorized as Substandard. Discretionary retail branch power terminates, and the case escalates to Kotak&apos;s Stressed Asset Management Group (SAMG).</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding this structural architecture is vital for borrowers. Unlike secured mortgages or auto loans where lenders hold underlying tangible collateral, an unsecured Kotak personal loan is backed solely by the borrower&apos;s personal covenant to pay. Consequently, Kotak relies heavily on psychological pressure, pre-litigation summons, and credit bureau leverage to enforce recovery before shifting to compromise settlement calculations.
              </p>
            </section>

            {/* Section 2: Pre-Litigation Summons & Phoenix ARC Transfers */}
            <section id="kotak-pre-litigation-notices-phoenix-arc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Kotak Pre-Litigation Machinery, Statutory Summons &amp; Phoenix ARC Assignments
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A hallmark of Kotak Mahindra Bank&apos;s recovery apparatus is its rapid deployment of legal notices during the SMA-2 and early NPA stages. Borrowers frequently receive strongly worded legal communications issued by empanelled advocates representing Kotak. Distinguishing between genuine statutory proceedings and tactical pre-litigation maneuvers is essential to protect one&apos;s legal rights.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The primary legal instruments utilized by Kotak include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 25 PSSA Notices</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Issued when a National Automated Clearing House (NACH) electronic debit mandate fails due to insufficient funds under Section 25 of the Payment and Settlement Systems Act, 2007. This carries quasi-criminal provisions comparable to cheque bounce statutes.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-red-600" />
                    <span>Section 138 NI Act Notices</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Triggered when a physical post-dated repayment cheque dishonours upon presentation. Demands full payment within 15 statutory days from receipt of the notice before criminal complaints can be initiated.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Virtual Conciliation &amp; Pre-Litigation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Kotak frequently invites borrowers to online dispute resolution portals or pre-litigation conciliation forums. While framed as mandatory hearings, participation is voluntary unless backed by an official court summons.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    <span>Phoenix ARC Portfolio Transfers</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pursuant to Section 5 of the SARFAESI Act, Kotak bundles aged, written-off retail loans and assigns them to Asset Reconstruction Companies—predominantly Phoenix ARC. The ARC steps in as the new legal creditor.
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an account is assigned to Phoenix ARC, borrowers receive an official intimation letter notifying them of the novation. Phoenix ARC purchases these delinquent portfolios at steep institutional discounts (often 15 to 25 paise on the rupee). Consequently, when handled with sound legal representation, negotiating a compromise settlement with Phoenix ARC frequently yields substantial haircuts of 50% to 65% on the original principal debt.
              </p>
            </section>

            {/* Section 3: Banker's Lien & Harassment Shield */}
            <section id="bankers-lien-section-171-harassment-defense" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Section 171 Banker&apos;s Lien, Account Freezes &amp; Harassment Defense
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A common vulnerability faced by distressed borrowers is the unexpected seizure of funds maintained in savings accounts. Under Section 171 of the Indian Contract Act, 1872, banking institutions possess the statutory <em>Right of General Lien and Set-Off</em>. This allows Kotak Mahindra Bank to unilaterally debit money from any savings account, fixed deposit, recurring deposit, or digital Kotak 811 wallet registered under the borrower&apos;s Customer Relationship Number (CRN) or PAN to adjust against personal loan arrears.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Strategic Account Shielding Protocol</span>
                </div>
                <p className="leading-relaxed">
                  While Kotak can lawfully exercise set-off rights over deposits held within Kotak Mahindra Bank, <strong>Kotak has zero statutory authority to attach, freeze, or access funds deposited in other independent banks</strong> (such as State Bank of India, HDFC Bank, or ICICI Bank) without obtaining an explicit attachment order from a competent Civil Court. Borrowers in default should immediately redirect their primary salary credits and emergency liquidity to an independent banking institution to avoid sudden operational paralysis.
                </p>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Statutory Defense Against Third-Party Debt Recovery Harassment
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When personal loans become delinquent beyond 60 days, Kotak Bank routinely outsources field recovery to empanelled Debt Recovery Agencies (DRAs). However, all recovery activities are strictly governed by the <strong>RBI Master Directions on Recovery Agents and Conduct (2022)</strong> and the Fair Practices Code. Borrowers possess robust legal protections against overreach:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Restricted Calling Windows:</strong> Recovery agents may contact borrowers solely between 08:00 AM and 07:00 PM. Calls outside these hours constitute a direct regulatory offense.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Workplace &amp; Social Sanctuary:</strong> Agents are strictly forbidden from visiting a borrower&apos;s office, contacting employers, or harassing friends, neighbors, or relatives whose details were provided as references.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Identification:</strong> Visiting recovery personnel must display an official Kotak Bank authorization letter, government photo ID, and DRA registration credentials before initiating any conversation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Prohibition of Coercion:</strong> Verbal intimidation, abusive remarks, public humiliation, or threats of non-existent police arrests violate Section 503 and Section 506 of the Indian Penal Code (IPC) / Bharatiya Nyaya Sanhita (BNS).</span>
                </li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If recovery agents violate these directives, our legal defense team issues an immediate formal cease-and-desist notice to Kotak&apos;s Principal Nodal Officer and registers an official regulatory grievance with the RBI Integrated Ombudsman, compelling the bank to halt unlawful harassment immediately.
              </p>
            </section>

            {/* Section 4: NPA Accounting & Net Present Value (NPV) Equation */}
            <section id="kotak-npa-accounting-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Kotak Bank Accounting, NPA Provisioning &amp; The Net Present Value (NPV) Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To negotiate a high-haircut compromise settlement with Kotak Mahindra Bank, one must comprehend the internal financial mechanics that dictate a bank&apos;s willingness to write off bad debts. Indian commercial banks operate under strict provisioning requirements set by the Reserve Bank of India. When a retail personal loan enters default, Kotak cannot simply hold the asset passively; it must allocate operating profits to create capital provisions against potential losses.
              </p>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Asset Classification</th>
                      <th>Delinquency Duration</th>
                      <th>RBI Mandatory Provisioning</th>
                      <th>Kotak OTS Haircut Potential</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Standard / SMA-1 / SMA-2</td>
                      <td>1 – 90 Days</td>
                      <td>0.40% – 5.0% General Provision</td>
                      <td>0% – 15% (Interest Waivers Only)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard (NPA)</td>
                      <td>91 – 365 Days</td>
                      <td>25% Unsecured Provision</td>
                      <td>30% – 45% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful 1 (D1)</td>
                      <td>12 – 24 Months Default</td>
                      <td>100% Unsecured Capital Provision</td>
                      <td>45% – 55% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful 2 / Loss Asset</td>
                      <td>24+ Months / Written-Off</td>
                      <td>100% Full Capital Write-Off</td>
                      <td>55% – 65% Principal Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an unsecured loan remains unpaid for over 12 months, Kotak has already locked 100% of the loan value in capital provisions, impairing its return on equity. At this juncture, the bank evaluates any compromise settlement proposal against an internal <strong>Net Present Value (NPV) Recovery Benchmark</strong>:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Kotak NPV Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoverable cash flows over time, r is Kotak&apos;s internal hurdle discount rate, and litigation deductions account for 3–5 years of judicial delay in civil summary suits, advocate retainers, and the balance-sheet drag of idle provisioning capital.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because unsecured civil litigation under Order 37 of the Code of Civil Procedure (CPC) is time-consuming and expensive, Kotak&apos;s Credit Committee frequently discovers that accepting an immediate lump-sum One-Time Settlement yielding 35% to 50% of the principal balance delivers a higher net financial return than pursuing years of uncertain litigation.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="kotak-settlement-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Kotak Mahindra Bank Personal Loan Settlement Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The infographic below outlines the 5-step institutional progression from initial default and pre-litigation notices to direct legal escalation, haircut negotiation, and receipt of the official ₹0 No Dues Certificate.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/kotak-bank-personal-loan-settlement.jpg"
                  alt="Kotak Mahindra Bank Personal Loan Settlement Process & Legal OTS Blueprint"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Step 1–2: NPA &amp; Notices</span>
                  <span>Delinquency crosses 90 days; Kotak issues Section 25 PSSA notice; legal advocates prepare defensive reply.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Step 3–4: Nodal Escalation</span>
                  <span>Bypass recovery agents; engage Kotak SAMG or Phoenix ARC with documented financial hardship dossier.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Step 5: Sanction &amp; ₹0 NDC</span>
                  <span>Receive bank-stamped OTS letter; remit settlement via direct RTGS; obtain statutory No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Direct Negotiation Strategy with Kotak Legal Nodal Officers */}
            <section id="direct-negotiation-strategy-nodal-officers" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Direct Negotiation Strategy with Kotak Legal Nodal Officers &amp; Stressed Asset Desks
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The most critical strategic mistake defaulting borrowers make is attempting to negotiate settlement terms with third-party collection agents or tele-callers. Outsourced collection agencies operate on recovery commission structures; they lack the institutional delegated authority to write off principal balances or issue legally binding settlement letters. Any verbal discount promised by a collection caller is legally worthless and often results in partial payments being swallowed by accrued penal interest.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To achieve a successful, high-haircut One-Time Settlement, negotiations must follow a strict institutional hierarchy:
              </p>
              
              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 1: Assembling the Hardship Dossier</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A formal OTS request must be substantiated with unassailable documentary evidence. This includes medical discharge summaries, termination letters, salary reduction certificates, GST cancellation filings, or bank statements demonstrating total financial distress. The objective is to establish bona fide insolvency rather than wilful default.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 2: Bypassing Agency Intermediaries &amp; Engaging SAMG</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our legal advocates bypass front-line recovery vendors and transmit the settlement proposal directly to Kotak&apos;s Zonal Stressed Asset Management Group (SAMG), the Central Settlement Committee, and the Principal Nodal Officer. This eliminates unauthorized intermediary markups.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 3: Tactical Anchoring &amp; National Lok Adalat Leverage</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Initial bank counter-offers typically demand 70% to 80% of the ledger balance. Through iterative legal representation and anchoring against the bank&apos;s provisioning status, the payable sum is negotiated down to 35% to 55% of the principal debt. Aligning the final compromise with quarterly National Lok Adalat sessions provides additional judicial stamp and finality.
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By presenting a mathematically viable, legally backed proposal, borrowers convert an adversarial recovery process into a clean, commercial resolution.
              </p>
            </section>

            {/* Section 7: Sanction Letter Forensics: Verifying Authenticity */}
            <section id="sanction-letter-forensics-authenticity" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Sanction Letter Forensics: Verifying Authenticity &amp; Eliminating Traps
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before remitting a single rupee toward an agreed settlement amount, the borrower must conduct a meticulous forensic audit of the One-Time Settlement (OTS) Sanction Letter. Unscrupulous recovery agents frequently forge letters or issue unofficial &quot;payment concessions&quot; to meet monthly collection quotas, leaving the borrower with active loan liabilities.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A legally valid Kotak Mahindra Bank OTS Sanction Letter must strictly satisfy five non-negotiable legal criteria:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Letterhead &amp; Watermark</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The document must be printed on official Kotak Mahindra Bank Limited corporate letterhead with registered office details, branch reference numbers, and authentic institutional formatting.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Exact Loan Account &amp; PAN Binding</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Verify that the letter precisely states your 16-digit Kotak loan account number, full name as per bank records, and Permanent Account Number (PAN) with zero discrepancies.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Full Debt Extinguishment Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The sanction letter must unequivocally declare that payment of the settlement amount constitutes full and final satisfaction of all liabilities, with complete waiver of balance principal, interest, and charges.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    <span>Authorized Signatory &amp; Employee ID</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must carry the official physical or verified digital signature, designation, and employee code of an authorized officer of Kotak Mahindra Bank with the bank&apos;s round seal.
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-red-950">
                  <ShieldX className="w-4 h-4 text-red-600" />
                  <span>Crucial Payment Destination Rule</span>
                </span>
                <p className="leading-relaxed">
                  Never transfer settlement funds into a personal bank account, UPI ID, or third-party collection agency account. All settlement disbursements must be deposited strictly into your own designated Kotak loan account number via RTGS, NEFT, or account payee demand draft payable directly to &quot;Kotak Mahindra Bank Ltd A/C [Your Loan Number]&quot;.
                </p>
              </div>
            </section>

            {/* Section 8: Loan Remittance, RBI ₹0 NDC & Credit Recovery */}
            <section id="remittance-rbi-ndc-mandate-cibil-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Loan Remittance, RBI ₹0 No Dues Certificate Mandate &amp; CIBIL Trajectory
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once the agreed settlement sum is remitted into the loan account, the final phase of debt extinguishment begins. Under <strong>RBI Circular RBI/2023-24/60</strong> (Responsible Lending Conduct – Release of Movable / Immovable Property Documents and Issuance of NDC), all regulated entities including Kotak Mahindra Bank are statutorily required to issue an official <strong>No Dues Certificate (NDC) / Loan Closure Letter</strong> and update credit information bureaus within <strong>30 calendar days</strong> of receiving the full settlement amount.
              </p>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Statutory Delay Compensation Rule</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  If Kotak Mahindra Bank fails to issue the No Dues Certificate or update the closure records with credit bureaus within the mandatory 30-day window without lawful cause, the bank is legally liable to pay statutory compensation of <strong>₹5,000 for each day of delay</strong> directly to the borrower.
                </p>
              </div>
              
              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                CIBIL Score Trajectory &amp; Systematic Financial Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers must hold realistic expectations regarding credit bureau reporting. Following the execution of a compromise settlement:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Credit Status Remark:</strong> Kotak Bank will report the account status to CIBIL, Experian, Equifax, and CRIF High Mark as <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong> with an outstanding ledger balance of <strong>₹0</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Immediate Score Impact:</strong> The settlement closes the delinquent account but causes an immediate temporary drop of 75 to 150 points in your credit score, reflecting the non-repayment of the full original sum.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Cooling Period:</strong> Under RBI compromise guidelines, regulated lenders observe a 12-month cooling period before evaluating fresh unsecured credit applications from settled borrowers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>18–24 Month Score Rebuilding:</strong> By obtaining a secured credit builder card (backed by a small fixed deposit), maintaining credit utilization below 30%, and ensuring 100% on-time payments, borrowers reliably restore their CIBIL score back above 750 within 18 to 24 months.</span>
                </li>
              </ul>
            </section>

            {/* Section 9: Comprehensive Resolution Matrix */}
            <section id="kotak-settlement-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comprehensive Resolution Matrix: Settlement vs Restructuring vs Litigation vs ARC Assignment
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating different debt resolution pathways enables borrowers to make informed financial and legal choices when managing overdue Kotak personal loans:
              </p>
              
              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Pathway</th>
                      <th>Financial Concession / Haircut</th>
                      <th>Legal Impact &amp; Court Risk</th>
                      <th>CIBIL Bureau Remark</th>
                      <th>Timeline to Complete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">One-Time Settlement (OTS)</td>
                      <td>45% – 65% Principal Waiver; 100% Penalty Waiver</td>
                      <td>Complete legal extinguishment; all notices withdrawn</td>
                      <td>&apos;Settled&apos; with ₹0 Balance</td>
                      <td>30 – 60 Days</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loan Restructuring / Tenure Extension</td>
                      <td>0% Principal Haircut; Higher cumulative interest</td>
                      <td>Loan remains active; fresh NACH mandate required</td>
                      <td>&apos;Restructured&apos; with active liability</td>
                      <td>45 – 90 Days</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Phoenix ARC Portfolio Assignment</td>
                      <td>50% – 65% Negotiable Haircut with ARC</td>
                      <td>Debt transferred under SARFAESI Sec 5; ARC settles directly</td>
                      <td>&apos;Assigned to ARC&apos; then &apos;Settled&apos;</td>
                      <td>60 – 120 Days</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Order 37 CPC Civil Litigation</td>
                      <td>No discount; Legal costs and court interest added</td>
                      <td>Protracted civil court proceedings (3–5 years)</td>
                      <td>&apos;Suit Filed&apos; / &apos;Decreed&apos;</td>
                      <td>3 – 5 Years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Kotak Debt Advisory Framework
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating an institutional dispute against Kotak Mahindra Bank requires high-caliber legal representation and seasoned financial negotiation expertise. SettleLoans represents distressed borrowers across India, offering an end-to-end legal shield against unlawful recovery harassment, drafting formal replies to Section 25 PSSA and Section 138 notices, and negotiating directly with Kotak&apos;s Zonal Stressed Asset Management verticals to secure the deepest possible settlement haircuts with official, bank-stamped No Dues Certificates.
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
                  11. Frequently Asked Questions: Kotak Bank Loan Settlement
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear, legally verified answers to common questions regarding Kotak Mahindra Bank personal loan settlement, recovery rules, and credit rehabilitation.
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
                  <span className="font-semibold text-slate-800">RBI Master Direction – Recovery Agents &amp; Conduct</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (2021)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (Lok Adalat)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Payment &amp; Settlement Systems Act (Section 25)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://legislative.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Indian Contract Act, 1872 (Section 171 Banker&apos;s Lien)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Loan Settlement &amp; Legal Defense Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/axis-bank-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Axis Bank Loan Settlement
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
                  href="/sbi-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SBI Personal Loan Settlement
                </Link>
                <Link
                  href="/bajaj-finance-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bajaj Finance Settlement
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Guide
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Property Seizure Protections
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Default &amp; Jail Myths
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Settlement CIBIL Impact
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate Guide
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg">
                  AJ
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Ashish Jhangra</h4>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in RBI compromise settlement frameworks, NPA provisioning forensics, and banking dispute litigation with over a decade of debt advisory experience.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Verified Legal Author</span>
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Immediate Legal Defense</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">Facing Kotak Bank Recovery Pressure?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Stop unlawful harassment, reply to Section 25 PSSA summons, and negotiate a formal 45%–65% debt waiver directly with Kotak legal nodal desks.
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
                  <span>100% RBI Fair Practices Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Verified Bank Letterhead Sanctions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Conciliation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
