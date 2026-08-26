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
  ShieldX,
  ShieldAlert,
  UserCheck,
  BadgePercent,
  AlertCircle,
  Receipt
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Settle Bank Overdraft Loan: Unsecured & Dropline OD OTS Guide (2026)',
  description: 'Learn how to settle bank overdraft loans, unsecured OD limits, and dropline credit facilities in India. Discover how to freeze compounding interest, convert irregular OD accounts into a formal One-Time Settlement (OTS), negotiate 45%–65% principal haircuts, and obtain a zero-balance No Dues Certificate.',
  keywords: [
    'how to settle bank overdraft loan',
    'unsecured overdraft settlement',
    'dropline overdraft loan settlement',
    'irregular OD account one time settlement',
    'bank OD recovery settlement process',
    'overdraft interest compounding default',
    'overdraft loan OTS process',
    'convert OD account to settlement',
    'bank overdraft legal notice reply',
    'overdraft NPA provisioning RBI',
    'overdraft settlement CIBIL score',
    'close frozen overdraft account'
  ],
  alternates: {
    canonical: 'https://settleloans.in/bank-overdraft-facility-settlement-process',
  },
  openGraph: {
    title: 'How to Settle Bank Overdraft Loan: Unsecured & Dropline OD OTS Guide',
    description: 'Master the legal and financial roadmap to settle defaulted bank overdraft accounts and dropline facilities. Learn how advocate representation halts compounding interest, resolves banker lien freezes, and secures a 45%–65% One-Time Settlement.',
    url: 'https://settleloans.in/bank-overdraft-facility-settlement-process',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://settleloans.in/images/infographics/bank-overdraft-facility-settlement-process.jpg',
        width: 1200,
        height: 675,
        alt: 'Bank Overdraft Facility Settlement Process & Legal Resolution Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Settle Bank Overdraft Loan: Unsecured & Dropline OD Guide',
    description: 'Stuck with a frozen bank overdraft account accumulating daily compounding interest? Discover the statutory OTS process to convert irregular OD limits into a compromised debt settlement.',
    images: ['https://settleloans.in/images/infographics/bank-overdraft-facility-settlement-process.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://settleloans.in/bank-overdraft-facility-settlement-process#webpage",
      "url": "https://settleloans.in/bank-overdraft-facility-settlement-process",
      "name": "How to Settle Bank Overdraft Loan: Unsecured & Dropline OD OTS Guide (2026)",
      "description": "Learn how to settle bank overdraft loans, unsecured OD limits, and dropline credit facilities in India. Discover how to freeze compounding interest, convert irregular OD accounts into a formal One-Time Settlement (OTS), negotiate 45%–65% principal haircuts, and obtain a zero-balance No Dues Certificate.",
      "breadcrumb": {
        "@id": "https://settleloans.in/bank-overdraft-facility-settlement-process#breadcrumb"
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
      "@id": "https://settleloans.in/bank-overdraft-facility-settlement-process#breadcrumb",
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
          "name": "Bank Overdraft Settlement Process",
          "item": "https://settleloans.in/bank-overdraft-facility-settlement-process"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://settleloans.in/bank-overdraft-facility-settlement-process#article",
      "headline": "Bank Overdraft Facility Settlement Process: How to Settle Unsecured & Dropline OD Loans",
      "description": "A comprehensive regulatory and financial guide to settling bank overdraft accounts, dropline lines of credit, and irregular working capital limits in India. Covers RBI IRACP prudential guidelines, banker lien protections under Section 171 of the Contract Act, Net Present Value recovery formulations, and debt compromise procedures.",
      "image": "https://settleloans.in/images/infographics/bank-overdraft-facility-settlement-process.jpg",
      "datePublished": "2026-08-26T10:00:00+05:30",
      "dateModified": "2026-08-26T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://settleloans.in/bank-overdraft-facility-settlement-process#webpage"
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
      "@id": "https://settleloans.in/bank-overdraft-facility-settlement-process#service",
      "name": "SettleLoans - Bank Overdraft Settlement & Stressed Working Capital Advisory",
      "description": "Specialized legal representation and debt resolution advisory for business owners and salaried individuals managing delinquent bank overdraft facilities, dropline credit lines, and irregular business accounts across Indian commercial banks.",
      "url": "https://settleloans.in/bank-overdraft-facility-settlement-process",
      "image": "https://settleloans.in/images/infographics/bank-overdraft-facility-settlement-process.jpg",
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
        "reviewCount": "2380",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Vikramaditya Singhal"
          },
          "datePublished": "2026-06-18",
          "reviewBody": "My manufacturing firm had an unsecured business overdraft facility of ₹24 Lakhs with HDFC Bank. When cash flows stalled, the bank froze our linked current account and compounding penal interest drove the claim to ₹31 Lakhs. SettleLoans advocates intervened, challenged the arbitrary penal compounding under RBI guidelines, and negotiated a direct OTS of ₹13.5 Lakhs with an official No Dues Certificate.",
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
          "datePublished": "2026-07-04",
          "reviewBody": "I had a personal dropline overdraft limit of ₹8.5 Lakhs with ICICI Bank. After a medical emergency, the drawing power dropped faster than my repayments, making the account out-of-order. SettleLoans represented me before the zonal stressed asset branch, halted recovery agent harassment at my clinic, and structured an OTS for ₹3.8 Lakhs payable over two installments.",
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
            "name": "Gurpreet Singh Bhasin"
          },
          "datePublished": "2026-05-29",
          "reviewBody": "Axis Bank issued a legal recovery demand for our commercial OD limit claiming ₹18 Lakhs. The legal team at SettleLoans conducted a forensic audit of the OD ledger, discovered excessive penal charges, and submitted a comprehensive hardship dossier. We closed the entire OD liability for ₹8 Lakhs and secured our CIBIL ₹0 balance update within 30 days.",
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
            "name": "Naveen Chawla"
          },
          "datePublished": "2026-08-11",
          "reviewBody": "Kotak Mahindra Bank placed a banker lien on my savings account due to an irregular business line of credit. SettleLoans served a formal statutory representation challenging the improper exercise of lien under Section 171 of the Contract Act. The bank released the frozen operational funds and agreed to an OTS waiver of 54% on the OD principal.",
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
      "@id": "https://settleloans.in/bank-overdraft-facility-settlement-process#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can an unsecured bank overdraft (OD) facility be settled through a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Unsecured bank overdrafts, business credit lines, and dropline overdraft facilities can be formally settled through a One-Time Settlement (OTS). Once an OD account remains out-of-order past 90 days and is classified as a Non-Performing Asset (NPA), banks are required under RBI prudential guidelines to allocate substantial provisioning capital. To mitigate recovery costs and balance sheet drag, banks routinely approve OTS compromise settlements with 45% to 65% principal haircuts."
          }
        },
        {
          "@type": "Question",
          "name": "What makes an overdraft account 'irregular' or 'out-of-order' under RBI guidelines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the RBI Master Direction on Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP), an overdraft or cash credit facility is treated as 'out-of-order' if the outstanding balance continuously exceeds the sanctioned limit or drawing power (DP) for 90 days, or if the credits in the account are insufficient to cover the interest debited during the preceding 90-day period."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank freeze other savings or current accounts for an overdue overdraft facility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Banks frequently attempt to freeze linked accounts by invoking the 'Right of General Lien' under Section 171 of the Indian Contract Act, 1872. However, this right is subject to strict judicial limits. Banks cannot freeze third-party partnership accounts, distinct legal entity funds, or salary accounts without prior statutory notice. Advocates can challenge unauthorized freezes under the RBI Fair Practices Code and Banking Ombudsman directives."
          }
        },
        {
          "@type": "Question",
          "name": "How does a dropline overdraft differ from a regular revolving OD in settlement negotiations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard revolving OD maintains a fixed sanctioned limit where interest is charged on daily utilization, whereas a dropline overdraft systematically reduces the drawing power on a monthly or quarterly basis akin to principal amortization. In dropline defaults, borrowers often face dual stress: shrinking liquidity limits combined with compounding interest. Settlement negotiations for dropline ODs focus on the actual principal drawn rather than inflated phantom balances created by accelerated limit drops."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank initiate SARFAESI proceedings on an unsecured overdraft limit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The SARFAESI Act, 2002 applies exclusively to secured loans backed by registered mortgages or hypothecated tangible collateral. If your overdraft facility is clean or unsecured (such as collateral-free business ODs or salaried personal ODs), the bank has zero authority to issue Section 13(2) demand notices or seize physical property under SARFAESI. The bank's legal recourse is limited strictly to civil suits, arbitration, or Lok Adalat conciliation."
          }
        },
        {
          "@type": "Question",
          "name": "How do banks calculate the settlement amount for a defaulted overdraft facility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bank settlement committees evaluate the Net Present Value (NPV) of recovery against the cost and duration of civil litigation. The benchmark starts with the ledger principal outstanding at the date of NPA classification. The bank typically waives 100% of accumulated penal interest, late renewal fees, and uncharged memo interest, and negotiates a 45% to 65% haircut on the core principal depending on the borrower's verified financial distress."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are required to prove financial hardship for an OD settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To substantiate a genuine inability to service an OD limit, borrowers must submit a comprehensive financial hardship dossier. This includes audited balance sheets showing business losses, GST turnover drop records, bank statements showing dried-up receivables, cancellation of client contracts, debtor default statements, or personal medical documentation demonstrating severe economic distress."
          }
        },
        {
          "@type": "Question",
          "name": "What is the timeline for receiving a No Dues Certificate (NDC) after paying the OD settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, commercial banks and NBFCs are legally mandated to deliver a formal No Dues Certificate / Loan Closure Letter and update credit bureau records within 30 calendar days of receiving the full settlement remittance. Failure to comply makes the lender liable to pay compensation of ₹5,000 per day of delay directly to the borrower."
          }
        },
        {
          "@type": "Question",
          "name": "How does settling an overdraft facility impact the business and personal CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Following an OTS, the lender reports the account to credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) as 'Settled' or 'Post-Write-Off Settled' with an outstanding balance of ₹0. While this causes a temporary credit score drop, it immediately terminates the compounding 90+ DPD default status. Through systematic credit rebuilding protocols, borrowers can restore their credit score above 750 within 18 to 24 months."
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
  { id: 'demystifying-bank-overdraft-facilities', title: '1. Demystifying Bank Overdraft Facilities & The Irregularity Trap' },
  { id: 'statutory-regulatory-framework-rbi-norms', title: '2. RBI IRACP Norms, SARFAESI Limits & Banker Lien Protections' },
  { id: 'danger-of-compounding-penalties-frozen-accounts', title: '3. Compounding Interest, Account Freezes & Recovery Risks' },
  { id: 'bank-accounting-npa-provisioning-npv-formula', title: '4. Balance Sheet NPA Provisioning & NPV Recovery Formula' },
  { id: 'overdraft-settlement-visual-roadmap', title: '5. Overdraft Facility Settlement Visual Roadmap' },
  { id: 'advocate-led-negotiation-strategy-ots', title: '6. Strategic Legal Defense & Converting Irregular OD to OTS' },
  { id: 'sanction-letter-forensics-legal-finality', title: '7. Forensic Checklist for Watertight OD Sanction Letters' },
  { id: 'remittance-rbi-ndc-mandate-cibil-recovery', title: '8. Settlement Remittance, RBI ₹0 NDC Mandate & CIBIL Recovery' },
  { id: 'overdraft-resolution-comparative-matrix', title: '9. Overdraft Resolution Comparative Strategy Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Overdraft Resolution' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function BankOverdraftFacilitySettlementPage() {
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
            <Building2 className="w-3.5 h-3.5" />
            <span>Commercial Banking • Stressed Working Capital Resolution</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Bank Overdraft Facility Settlement Process: <span className="text-[#3b82f6] md:text-[#60a5fa]">How to Settle Unsecured &amp; Dropline OD Loans</span>
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
              <span>RBI IRACP &amp; Fair Lending Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Settle Your OD Facility Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request Free Overdraft Evaluation
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
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Overdraft Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Irregular unsecured and dropline OD accounts rapidly compound penal interest once drawing power drops. Converting the facility into a formal One-Time Settlement (OTS) freezes compounding debits and enables a 45%–65% principal compromise under RBI prudential guidelines.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Bank Overdraft Facility Settlement</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Halting Compounding Debt:</strong> Defaulting on an overdraft facility triggers daily compounding penal interest and account freezing; a structured OTS permanently caps and closes the compounding ledger.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero SARFAESI Exposure for Clean ODs:</strong> Unsecured business overdrafts and personal lines of credit without registered mortgages are exempt from SARFAESI property attachments under Indian banking law.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>45% to 65% Principal Compromise:</strong> Driven by 100% unsecured NPA provisioning mandates under RBI IRACP rules, bank stressed asset committees routinely approve substantial principal haircuts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Restricting Banker Lien Overreach:</strong> Indiscriminate debit freezes on unrelated bank accounts can be legally challenged and released under Section 171 of the Indian Contract Act.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory RBI ₹0 NDC Delivery:</strong> Lenders must issue an official No Dues Certificate within 30 days of settlement remittance under penalty of ₹5,000 per day of delay.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying Bank Overdraft Facilities & The Irregularity Trap */}
            <section id="demystifying-bank-overdraft-facilities" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Demystifying Bank Overdraft Facilities: Unsecured ODs, Dropline Credit &amp; The Trap of Account Irregularity
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Bank Overdraft (OD) facilities and Dropline Overdraft lines of credit represent some of the most dynamic yet hazardous financing structures utilized by micro, small, and medium enterprises (MSMEs), self-employed professionals, and salaried individuals across India. Unlike standard term loans where a fixed principal is amortized through predictable monthly Equated Monthly Installments (EMIs), an overdraft facility functions as a flexible revolving credit window linked directly to an operational current or savings account.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under standard commercial banking agreements executed with major lenders—including State Bank of India, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, and Punjab National Bank—borrowers are granted a sanctioned credit limit. Interest is calculated on a daily product basis on the actual utilized balance and debited to the account at the end of each calendar month. In a <strong>Dropline Overdraft</strong>, the sanctioned limit or drawing power does not remain static; instead, the bank systematically reduces the authorized threshold on a monthly or quarterly basis over an agreed tenure of 3 to 10 years, simulating principal reduction without enforcing fixed EMI structures.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The fundamental danger of an overdraft facility emerges when business revenue decelerates, client receivables stall, or personal financial crises occur. In a standard term loan, missing an installment creates a distinct EMI overdue entry. In an overdraft facility, when credits deposited into the account fall short of the monthly interest debits or when the outstanding balance breaches the progressively contracting drawing power, the entire account enters an <strong>&quot;irregular&quot;</strong> or <strong>&quot;out-of-order&quot;</strong> status.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once an OD account becomes irregular, banks initiate automatic debit blocks, preventing further operational withdrawals. Deprived of liquidity, the borrower is unable to deposit fresh operational funds because any incoming capital is instantly swallowed by accumulated interest debits, penal charges, and processing penalties. This mechanical debt spiral rapidly converts a manageable short-term cash flow crunch into an insurmountable financial default, leaving formal debt settlement as the only viable exit strategy.
              </p>
            </section>

            {/* Section 2: Statutory & Regulatory Framework */}
            <section id="statutory-regulatory-framework-rbi-norms" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory &amp; Regulatory Grounding: RBI IRACP Master Directions, SARFAESI Distinctions &amp; Contractual Protections
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Navigating an overdraft default requires an acute understanding of Indian banking jurisprudence, regulatory circulars issued by the Reserve Bank of India, and statutory civil safeguards. Commercial lenders frequently exploit borrower unfamiliarity with banking regulations to deploy aggressive recovery tactics. However, Indian statutory frameworks provide robust legal protections that govern delinquent overdraft credit facilities.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the <strong>RBI Master Direction on Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances (IRACP)</strong>, an overdraft or cash credit account is classified as Non-Performing when it remains continuously &quot;out of order.&quot; The regulatory parameters defining this classification are unambiguous:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>RBI 90-Day Out-of-Order Definition</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    An OD account is treated as out of order if the outstanding balance remains continuously in excess of the sanctioned limit/drawing power for 90 days, or if there are no credits continuously for 90 days, or if credits are insufficient to cover interest debited during the same period.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>SARFAESI Act Non-Applicability</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 13(2) of the SARFAESI Act, 2002, coercive asset seizure powers apply solely to debts secured by registered mortgages or tangible collateral. Unsecured business ODs and personal lines of credit are completely immune from SARFAESI attachment.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-purple-600" />
                    <span>Section 171 Banker Lien Restrictions</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 171 of the Indian Contract Act, 1872, a bank&apos;s right of general lien cannot be exercised arbitrarily over unrelated third-party accounts, distinct corporate entities, or salary accounts without formal prior notice and judicial justification.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Receipt className="w-4 h-4 text-amber-600" />
                    <span>RBI Fair Lending &amp; Penal Charges Norms</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Directives on Fair Lending Conduct (effective April 2024), banks are strictly prohibited from levying penal interest on a compounding basis. Penalties for OD default must be charged solely as reasonable &apos;penal charges&apos; without capitalization into the principal ledger.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Judicial Protection Against Coercive Extra-Judicial Attachment</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  In a litany of landmark High Court rulings, Indian courts have firmly established that commercial banks cannot engage in self-help recovery or forcibly seize business machinery, vehicles, or inventory for clean unsecured credit facilities without securing a formal civil court decree or arbitral execution order. Any extra-judicial property interference violates Article 300A of the Constitution of India.
                </p>
              </div>
            </section>

            {/* Section 3: Danger of Default & Compounding Penalties */}
            <section id="danger-of-compounding-penalties-frozen-accounts" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. The Compounding Penal Trap: Frozen Accounts, Lien Invocations &amp; Legal Escalation Risks
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower ignores an irregular overdraft account or attempts to manage the default by making sporadic, insufficient token payments, the compounding mechanics of the banking ledger create severe operational paralysis. Because overdrafts do not have fixed EMI dates, interest continues to accrue daily against the peak ledger balance.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Left unaddressed, the institutional default triggers a predictable escalation sequence across five critical risk dimensions:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Operational Current Account Freezing:</strong> The lending bank applies a total debit freeze on the OD current account. Business transactions, vendor payouts, and payroll transfers are abruptly halted, paralyzing ongoing commercial enterprise.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Negotiable Instruments Act (Section 138) Exposure:</strong> If post-dated security cheques or automated National Automated Clearing House (NACH) mandates bounce due to account freezing or insufficient balance, the bank may initiate criminal proceedings under Section 138 of the NI Act or Section 25 of the Payment and Settlement Systems Act.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Cross-Account Banker Lien Exercise:</strong> The bank searches internal systems and freezes other savings accounts, fixed deposits, or sister-concern current accounts maintained within the same banking institution under a purported claim of banker lien.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Recovery Litigation via DRT or Civil Courts:</strong> If the aggregate exposure exceeds ₹20 Lakhs, the bank initiates formal recovery proceedings before the Debt Recovery Tribunal (DRT) under the Recovery of Debts and Bankruptcy (RDB) Act, 1993, or files an Order 37 summary suit in Civil Court for claims below ₹20 Lakhs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Severe Commercial &amp; Personal CIBIL Degradation:</strong> Commercial CIBIL (CMR ranking) and personal credit scores plummet by 150 to 250 points, registering 90+ Days Past Due (DPD) tags that freeze all access to institutional finance across India.</span>
                </li>
              </ul>

              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-red-950">
                  <ShieldX className="w-4 h-4 text-red-600" />
                  <span>The Token Deposit Trap in Delinquent Overdrafts</span>
                </span>
                <p className="leading-relaxed">
                  Borrowers frequently make small token deposits of ₹20,000 to ₹50,000 into a frozen OD account under pressure from recovery tele-callers. This is a critical financial error. In an irregular OD account, token payments are instantly appropriated toward uncharged memo interest and overdue late penalties without reducing the principal loan balance by a single rupee. Settlement negotiations must precede any further capital remittance.
                </p>
              </div>
            </section>

            {/* Section 4: Bank Accounting, NPA Provisioning & NPV Recovery Formula */}
            <section id="bank-accounting-npa-provisioning-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Balance Sheet Accounting, NPA Provisioning &amp; The Net Present Value (NPV) Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Securing a deep 45% to 65% principal haircut on an overdraft facility requires understanding the economic motivations of commercial bank credit committees. Indian commercial banks do not view delinquent debt through emotional lenses; their decisions are strictly governed by RBI balance sheet provisioning mandates and mathematical recovery models.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an overdraft facility remains irregular beyond 90 days, the bank must derecognize all accrued uncollected interest from its profit and loss statement and allocate substantial capital reserves against the advance:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>NPA Classification Stage</th>
                      <th>Overdue Aging Timeline</th>
                      <th>RBI Mandatory Capital Provision</th>
                      <th>Target OTS Haircut Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-0 / SMA-1 / SMA-2</td>
                      <td>1 – 90 Days Irregularity</td>
                      <td>0.40% – 5.0% General Provision</td>
                      <td>0% – 15% (Penal Waivers Only)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard (Unsecured OD)</td>
                      <td>91 – 365 Days Default</td>
                      <td>25% Core Capital Provision</td>
                      <td>30% – 45% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful 1 (D1 Asset)</td>
                      <td>12 – 24 Months Default</td>
                      <td>100% Full Provision on Unsecured Portion</td>
                      <td>45% – 55% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful 2 / Loss Asset</td>
                      <td>24+ Months / Written-Off</td>
                      <td>100% Balance Sheet Write-Off</td>
                      <td>55% – 65% Principal Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because clean unsecured overdrafts require an aggressive <strong>100% capital provisioning</strong> once classified in the Doubtful category, every month the account remains unrecovered drains bank capital. When deciding whether to litigate through DRT/Civil Courts or sanction a compromise One-Time Settlement, the bank&apos;s Stressed Asset Management Group (SAMG) applies the <strong>Net Present Value (NPV) Valuation Formula</strong>:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Stressed Overdraft Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoverable cash flows over time, r is the bank&apos;s cost of capital discount rate, and deductions account for 3 to 5 years of DRT/civil court delays, advocate retainers, court fees, execution friction, and 100% capital locked in idle NPA provisioning.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When experienced debt settlement advocates present an immediate cash settlement backed by an audited hardship dossier, the bank&apos;s financial model proves that recovering 40% to 55% of the principal ledger today yields a substantially higher Net Present Value than chasing an unsecured borrower through 4 years of contested civil litigation.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="overdraft-settlement-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Bank Overdraft Facility Settlement Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below illustrates the structured 5-stage institutional progression from initial OD account irregularity and interest freezing to forensic balance sheet auditing, advocate-led zonal negotiations, official OTS sanction letter issuance, and final RBI No Dues Certificate delivery with credit bureau restoration.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/bank-overdraft-facility-settlement-process.jpg"
                  alt="Bank Overdraft Facility Settlement Process Roadmap Infographic"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Irregularity &amp; Hardship Audit</span>
                  <span>OD account enters irregular status; legal advocates audit financial accounts, freeze uncharged memo interest, and compile verified hardship evidence.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Zonal Talks &amp; Sanction</span>
                  <span>Bypass recovery tele-callers to negotiate directly with Bank Stressed Asset desks; secure formal, bank-stamped OTS Sanction Letter.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Remittance &amp; ₹0 NDC</span>
                  <span>Direct loan ledger remittance; obtain official No Dues Certificate within 30 days under RBI mandates; restore CIBIL to ₹0 balance.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Advocate-Led Negotiation Strategy */}
            <section id="advocate-led-negotiation-strategy-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Strategic Legal Defense: How Advocates Convert an Irregular OD Account into a Structured OTS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Attempting to negotiate an overdraft settlement independently often results in frustration. Branch managers lack the discretionary authority to sanction significant principal haircuts, while outsourced recovery agencies earn commissions based on maximum collection, intentionally keeping borrowers trapped in cycles of token payments.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Professional debt resolution advocates execute a structured 4-phase institutional strategy designed to bypass lower-level resistance and secure executive approval:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 1: Legal Representation &amp; Cease-and-Desist Defense</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advocates serve a formal Notice of Representation on the bank&apos;s Zonal Head and Legal Recovery Cell. This notice invokes the <strong>RBI Fair Practices Code</strong>, halts unlawful recovery agent harassment at your commercial premises or residence, challenges illegal banker lien freezes, and establishes a formal legal channel for all future communications.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 2: Forensic Ledger Audit &amp; Penal Charge Dissection</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our financial experts conduct a thorough audit of the overdraft statement of account from inception. We isolate the core drawn principal, dispute unauthorized commitment charges, penal compounding, and renewal inspection fees, establishing the true baseline debt figure for settlement discussions.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 3: Hardship Dossier Submission to Stressed Asset Desks</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We bypass local branch personnel to engage the bank&apos;s <strong>Stressed Assets Resolution Branch (SARB/SAMB)</strong> or Zonal Settlement Committee. We present an unassailable hardship dossier—including audited profit and loss statements, GST return dips, business closure affidavits, or medical proofs—substantiating a permanent diminution in debt-servicing capacity.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 4: Compromise Terms Structuring &amp; Lok Adalat Conciliation</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advocates structure an aggressive OTS proposal offering 35% to 55% of the verified principal, payable in a lump sum or structured across 2 to 4 monthly tranches. Where appropriate, we refer the compromise agreement to the <strong>National Lok Adalat</strong>, obtaining a formal decree that completely shields the borrower against future litigation.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By shifting the negotiation forum from high-pressure recovery calls to senior bank credit committees, borrowers secure substantial financial relief while maintaining complete legal protection.
              </p>
            </section>

            {/* Section 7: Sanction Letter Forensics */}
            <section id="sanction-letter-forensics-legal-finality" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Forensic Checklist for Watertight OD Sanction Letters: Safeguarding Legal Finality
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A critical phase in the overdraft settlement process is the forensic verification of the One-Time Settlement Sanction Letter. Delinquent borrowers are frequently targeted by rogue recovery agents who issue fabricated &quot;settlement approval emails&quot; or verbal promises to extract partial payments. Remitting funds without a genuine, bank-authorized sanction letter leaves your overdraft facility open and accumulating interest.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before disbursing a single rupee, our legal team subjects the settlement sanction letter to five mandatory forensic validation checkpoints:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Bank Stationery &amp; Digital Validation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The sanction letter must be issued on official bank letterhead containing registered zonal office addresses, unique alphanumeric proposal reference codes, and verifiable digital or physical signatures of authorized Scale-IV/V bank officers.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Account Specifics &amp; Limit Cancellation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The document must explicitly cite your exact 16-digit overdraft account number, customer identification file (CIF), business entity name, PAN, and clearly state the permanent revocation and closure of the credit limit.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Comprehensive Debt Extinguishment Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The terms must state without ambiguity that upon payment of the agreed compromised sum, all remaining principal, uncharged interest, penal charges, and legal expenses stand fully and irrevocably waived.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Release of Lien &amp; Legal Withdrawal</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The sanction letter must mandate the immediate lifting of all debit freezes/liens on linked accounts and require the bank to withdraw all pending legal notices, DRT claims, or Section 138 NI Act complaints upon payment.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Direct Account Remittance Rule</span>
                </span>
                <p className="leading-relaxed">
                  Never remit settlement funds to an individual recovery agent&apos;s account, a collection agency UPI QR code, or an unverified escrow account. Settlement funds must be deposited directly into your designated bank overdraft loan account via RTGS/NEFT or an Account Payee Demand Draft drawn in favor of <strong>&quot;[Bank Name] A/C [Your OD Account Number]&quot;</strong>.
                </p>
              </div>
            </section>

            {/* Section 8: Remittance, RBI NDC Mandate & CIBIL Recovery */}
            <section id="remittance-rbi-ndc-mandate-cibil-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Settlement Remittance, RBI ₹0 No Dues Certificate Mandate &amp; CIBIL Bureau Restoration
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Executing the financial settlement by remitting the agreed compromised amount represents a major victory, but the debt resolution process is complete only when the account is legally closed and credit bureau records reflect zero outstanding liability.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under <strong>RBI Circular RBI/2023-24/60</strong> (Responsible Lending Conduct – Release of Movable/Immovable Property Documents and Issuance of NDC), all commercial banks, urban cooperative banks, and NBFCs are statutorily bound by strict timelines:
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Statutory Mandate on 30-Day NDC Delivery &amp; Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  The lending bank is statutorily required to deliver an official <strong>No Dues Certificate (NDC) / Loan Closure Letter</strong>, return all unencumbered original documents or security cheques, and update all credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) within <strong>30 calendar days</strong> of receiving full settlement remittance. Any unjustified delay makes the bank liable to pay statutory compensation of <strong>₹5,000 per day of delay</strong> directly to the borrower.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Navigating Credit Bureau Reporting &amp; Score Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding how an overdraft settlement is reflected across credit bureaus is crucial for future financial planning:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Account Status Tag:</strong> In credit bureau records, the overdraft facility status is updated from &quot;Active / Default / 90+ DPD&quot; to <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong>, with current outstanding balance shown as <strong>₹0</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Termination of Daily Penal Accrual:</strong> The &quot;Settled&quot; remark permanently halts the accumulation of monthly negative payment remarks and prevents the bank from ever selling the unrecovered balance to asset reconstruction companies (ARCs).</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>12-Month Institutional Cooling Window:</strong> Regulated commercial lenders enforce a standard 12-month cooling window before considering new unsecured credit applications from settled borrowers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Strategic Credit Rebuilding Protocol:</strong> By subscribing to a secured credit card backed by a modest fixed deposit, maintaining credit utilization below 30%, and ensuring flawless on-time utility and credit payments, borrowers consistently restore their CIBIL score above 750 within 18 to 24 months.</span>
                </li>
              </ul>
            </section>

            {/* Section 9: Overdraft Resolution Comparative Matrix */}
            <section id="overdraft-resolution-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Overdraft Resolution Comparative Strategy Matrix
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating the key institutional pathways available to resolve a delinquent bank overdraft facility enables borrowers and business owners to select the most financially prudent strategy:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Pathway</th>
                      <th>Legal Mechanism &amp; Forum</th>
                      <th>Principal Haircut Scope</th>
                      <th>Resolution Timeline</th>
                      <th>Financial &amp; Legal Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led One-Time Settlement (OTS)</td>
                      <td>Zonal Stressed Asset desk negotiation; structured compromise</td>
                      <td>45% – 65% Principal Waiver</td>
                      <td>30 – 60 Days</td>
                      <td>Lowest risk; absolute legal closure with ₹0 No Dues Certificate</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Lok Adalat Settlement</td>
                      <td>Statutory conciliation under Legal Services Authorities Act</td>
                      <td>40% – 60% Principal Waiver</td>
                      <td>Single Session</td>
                      <td>Non-appealable civil court decree equivalent; zero court fees</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Working Capital Restructuring / WCTL</td>
                      <td>Conversion of irregular OD into 3–5 year Term Loan</td>
                      <td>0% (Full Principal + Interest Repayable)</td>
                      <td>60 – 90 Days</td>
                      <td>High recurring EMI burden; requires strict collateral &amp; cash flows</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Contested DRT / Civil Court Litigation</td>
                      <td>Adjudication under RDB Act (DRT) or Order 37 CPC (Civil Court)</td>
                      <td>0% – 20% (Subject to trial decree)</td>
                      <td>3 – 5 Years</td>
                      <td>Substantial legal expenses, compounding interest decrees, asset attachment risk</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Overdraft Debt Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Resolving a delinquent bank overdraft facility requires specialized legal advocates who understand commercial banking operations, RBI prudential directives, and stressed asset resolution protocols. SettleLoans represents business owners and individual borrowers across India: issuing formal representation notices, releasing unlawful banker liens on operational accounts, conducting forensic ledger audits, and negotiating directly with bank zonal authorities to secure the deepest lawful principal haircuts backed by official, bank-stamped No Dues Certificates.
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
                  11. Frequently Asked Questions: Bank Overdraft Facility Settlement
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to essential questions regarding bank overdraft loan settlements, dropline facility closures, and borrower protections in India.
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
                  <span className="font-semibold text-slate-800">RBI Master Direction – Income Recognition &amp; Asset Classification (IRACP)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Indian Contract Act, 1872 (Section 171 – Banker Lien Protections)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Circular on Fair Lending Practice – Penal Charges in Loan Accounts</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (Lok Adalat Dispute Settlement)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Account Freeze &amp; Unfair Practice Redressal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Working Capital &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/case-study-axis-bank-business-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Axis Bank Business Loan Case Study
                </Link>
                <Link
                  href="/SME-loan-dispute-resolution"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SME Loan Dispute Resolution
                </Link>
                <Link
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Freeze Account Rights
                </Link>
                <Link
                  href="/drt-loan-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  DRT Loan Settlement Guide
                </Link>
                <Link
                  href="/loan-penalty-waiver-request"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Penalty Waiver Guide
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Unsecured Loan Property Rights
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/case-study-cibil-status-settled-to-closed"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Settled to Closed Recovery
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Recovery Harassment
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
                    <h4 className="font-bold text-slate-900 text-sm">Ashish Jhangra</h4>
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in stressed working capital resolution, bank overdraft settlements, and RBI compromise policy negotiations with over a decade of banking litigation advisory experience.
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
                <span>Stressed Overdraft Defense</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">Frozen OD Account or Mounting Penal Interest?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let the bank compound daily interest on your irregular overdraft limit. Hire expert debt defense advocates to challenge banker liens and negotiate a 45%–65% OTS.
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
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </h4>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>RBI IRACP Norms Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank-Stamped OTS Sanctions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Direct Negotiation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
