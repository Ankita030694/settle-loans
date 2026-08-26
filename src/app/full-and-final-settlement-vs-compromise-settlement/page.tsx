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
  BadgePercent,
  Coins,
  FileText,
  TrendingDown,
  Clock,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Full and Final Settlement vs Compromise Settlement: Complete Guide (2026)',
  description: 'Understand the technical financial difference between full and final loan closure, compromise settlement (OTS), and credit write-offs under RBI guidelines. Learn how to secure legally binding ₹0 liability documentation.',
  keywords: [
    'difference between full and final settlement and compromise settlement',
    'full and final loan settlement vs compromise settlement',
    'loan closure vs loan settlement difference',
    'one time settlement ots vs technical write off',
    'bank compromise settlement rbi guidelines',
    'loan write off vs loan settlement cibil impact',
    'how to get no dues certificate after settlement',
    'rbi compromise settlement circular 2023',
    'closed vs settled status in cibil report',
    'loan settlement legal implications india'
  ],
  alternates: {
    canonical: 'https://settleloans.in/full-and-final-settlement-vs-compromise-settlement',
  },
  openGraph: {
    title: 'Full and Final Settlement vs Compromise Settlement: Complete Guide',
    description: 'Demystify the critical differences between full closure, bank compromise settlement (OTS), and credit write-offs. Ensure complete legal debt discharge and ₹0 balance credit bureau reporting.',
    url: 'https://settleloans.in/full-and-final-settlement-vs-compromise-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://settleloans.in/images/infographics/full-and-final-settlement-vs-compromise-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'Full and Final Settlement vs Compromise Settlement vs Write-Off Comparison',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full and Final Settlement vs Compromise Settlement: Legal & Financial Breakdown',
    description: 'Explore the statutory and credit distinctions between 100% full closure, compromise OTS haircuts, and accounting write-offs under RBI regulations.',
    images: ['https://settleloans.in/images/infographics/full-and-final-settlement-vs-compromise-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://settleloans.in/full-and-final-settlement-vs-compromise-settlement#webpage",
      "url": "https://settleloans.in/full-and-final-settlement-vs-compromise-settlement",
      "name": "Full and Final Settlement vs Compromise Settlement: Complete Guide (2026)",
      "description": "Understand the technical financial difference between full and final loan closure, compromise settlement (OTS), and credit write-offs under RBI guidelines. Learn how to secure legally binding ₹0 liability documentation.",
      "breadcrumb": {
        "@id": "https://settleloans.in/full-and-final-settlement-vs-compromise-settlement#breadcrumb"
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
      "@id": "https://settleloans.in/full-and-final-settlement-vs-compromise-settlement#breadcrumb",
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
          "name": "Full and Final vs Compromise Settlement",
          "item": "https://settleloans.in/full-and-final-settlement-vs-compromise-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://settleloans.in/full-and-final-settlement-vs-compromise-settlement#article",
      "headline": "Difference Between Full and Final Settlement and Compromise Settlement: Regulatory, Legal, and Credit Forensics",
      "description": "An exhaustive analytical and legal comparison of 100% full loan closure, One-Time Compromise Settlement (OTS), and balance sheet technical write-offs under RBI Master Directions and the Indian Contract Act.",
      "image": "https://settleloans.in/images/infographics/full-and-final-settlement-vs-compromise-settlement.jpg",
      "datePublished": "2026-08-26T10:00:00+05:30",
      "dateModified": "2026-08-26T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://settleloans.in/full-and-final-settlement-vs-compromise-settlement#webpage"
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
      "@id": "https://settleloans.in/full-and-final-settlement-vs-compromise-settlement#service",
      "name": "SettleLoans - Compromise Debt Settlement & Legal Advisory",
      "description": "Premier legal defense, debt compromise negotiation, and banking resolution advisory helping borrowers achieve legally binding loan settlements and credit bureau rectification across India.",
      "url": "https://settleloans.in/full-and-final-settlement-vs-compromise-settlement",
      "image": "https://settleloans.in/images/infographics/full-and-final-settlement-vs-compromise-settlement.jpg",
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
        "reviewCount": "2180",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sanjay Verma"
          },
          "datePublished": "2026-04-12",
          "reviewBody": "I thought my bank had forgiven my loan when they marked it written-off, but recovery agents kept showing up. SettleLoans explained the crucial difference between an accounting write-off and a legal compromise settlement. They represented me in formal OTS talks with ICICI Bank, got a 65% haircut, and delivered a certified No Dues Certificate.",
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
          "datePublished": "2026-05-18",
          "reviewBody": "I was confused between full payment closure and a compromise settlement for my personal loans totalling ₹18 Lakhs across two banks. SettleLoans advocates helped me structure a formal OTS under the RBI Compromise Policy, saving me over ₹10.5 Lakhs while ensuring complete ₹0 balance reporting in CIBIL.",
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
            "name": "Karan Malhotra"
          },
          "datePublished": "2026-06-29",
          "reviewBody": "A recovery agency sent me a fake WhatsApp settlement letter demanding payment into a third-party account. SettleLoans advocates conducted forensic verification, rejected the fraudulent notice, and negotiated directly with the bank's zonal committee in Mumbai to secure a legitimate, stamped One-Time Settlement.",
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
            "name": "Ananya Roy"
          },
          "datePublished": "2026-07-24",
          "reviewBody": "The legal clarity provided by SettleLoans regarding Section 63 remission under the Indian Contract Act gave me confidence. Their team handled everything from legal notice responses to the final No Dues Certificate after my HDFC credit card settlement.",
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
      "@id": "https://settleloans.in/full-and-final-settlement-vs-compromise-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the core technical difference between full and final loan closure and a compromise settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Full and final loan closure occurs when a borrower pays 100% of the contractual principal, accrued interest, and valid charges, resulting in a clean 'Closed' status on credit bureau records. In contrast, a compromise settlement (One-Time Settlement or OTS) is a legally negotiated arrangement where the lender accepts a reduced lump sum (a financial haircut) to extinguish the total debt, which is reported to credit bureaus as 'Settled' with a ₹0 balance."
          }
        },
        {
          "@type": "Question",
          "name": "Does a bank credit write-off mean the borrower is legally relieved of the loan debt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A credit write-off (or technical/prudential write-off) is strictly an internal balance sheet accounting maneuver executed by banks to clean up gross Non-Performing Assets (NPAs) and optimize tax liabilities. It does NOT extinguish borrower liability. The bank or its assigned recovery agents retain 100% legal rights to file civil suits, issue DRT summons, or enforce recovery until a formal compromise settlement or full repayment takes place."
          }
        },
        {
          "@type": "Question",
          "name": "What statutory protections govern compromise settlements under RBI Master Directions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the RBI Master Direction on Compromise Settlements and Technical Write-offs dated June 8, 2023, all regulated entities (commercial banks, NBFCs, and cooperative banks) must maintain Board-approved policies for debt compromises. The framework mandates objective evaluation of borrower distress, transparent sanction processes, mandatory issuance of No Dues Certificates upon full settlement receipt, and cooling-off periods for future credit access."
          }
        },
        {
          "@type": "Question",
          "name": "How does the Indian Contract Act, 1872 protect a borrower who completes a compromise settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 63 of the Indian Contract Act, 1872, a creditor has the full legal power to dispense with or remit, wholly or in part, the performance of the contractual promise made to them. Once the lender formally accepts the reduced compromise amount via a signed sanction letter and issues a No Dues Certificate, the doctrine of accord and satisfaction applies, legally barring the lender from initiating future recovery claims for the waived balance."
          }
        },
        {
          "@type": "Question",
          "name": "What is the exact Net Present Value (NPV) recovery formula banks use to evaluate compromise proposals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Banks compare the immediate cash offered in an OTS against the Net Present Value of anticipated legal recoveries: NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden. If the upfront settlement offer exceeds the discounted recovery value expected over 3 to 5 years of legal proceedings in DRT or civil court, the bank's internal committee is financially incentivized to approve the compromise."
          }
        },
        {
          "@type": "Question",
          "name": "What essential clauses must be verified in a compromise settlement sanction letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A valid compromise sanction letter must be printed on official bank letterhead, signed by an authorized branch or zonal executive, specify exact loan account numbers, detail the agreed settlement sum and tranche payment deadlines, explicitly state that all remaining claims are permanently waived, guarantee the withdrawal of all civil, Section 138, and SARFAESI actions, and commit to issuing a formal No Dues Certificate within 30 days."
          }
        },
        {
          "@type": "Question",
          "name": "How does a compromise settlement impact my CIBIL score compared to a full closure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A full closure keeps or enhances your CIBIL score with an unblemished 'Closed' remark. A compromise settlement updates the account status to 'Settled' with an outstanding balance of ₹0. While this temporarily dampens the credit score by 50 to 100 points, it completely stops ongoing monthly negative default reporting, enabling structured credit rebuilding back to 750+ within 18 to 24 months through secured credit products."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank reopen a settled loan account or demand the waived amount years later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, provided the compromise settlement was executed with a genuine sanction letter from an authorized banking official, payments were deposited into the bank's designated loan account before the deadline, and an unconditional No Dues Certificate was obtained. Under the doctrine of promissory estoppel and contract remission, the bank cannot legally reopen the account or demand the waived shortfall."
          }
        },
        {
          "@type": "Question",
          "name": "Can a borrower later convert a 'Settled' CIBIL status to 'Closed' by paying the remaining haircut?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If a borrower achieves improved financial liquidity in the future and wishes to eliminate the 'Settled' remark, they can approach the lender, request a calculation of the previously waived shortfall balance, remit that amount, and obtain an updated No Dues Certificate. The lender will then submit an updated report to credit bureaus marking the account as 'Closed'."
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
  { id: 'demystifying-closure-vs-settlement-vs-write-off', title: '1. Demystifying Full Closure, Compromise Settlement (OTS) & Credit Write-Off' },
  { id: 'statutory-banking-framework-rbi-mandates', title: '2. Statutory Banking Framework & RBI Master Directions on Stressed Assets' },
  { id: 'bank-accounting-provisions-write-off-mechanics', title: '3. Bank Accounting Mechanics: NPA Provisioning, Write-Offs & Balance Sheet Cleansing' },
  { id: 'financial-mathematics-npv-recovery-calculation', title: '4. Financial Mathematics: NPV Recovery Equations & Bank Haircut Thresholds' },
  { id: 'settlement-vs-closure-infographic-roadmap', title: '5. Structural Comparison: Visual Roadmap of Banking Resolution Paths' },
  { id: 'legal-distinctions-liability-discharge', title: '6. Legal Distinctions: Full Closure vs. Compromise Settlement vs. Write-Off Liability' },
  { id: 'forensic-audit-compromise-sanction-letter', title: '7. Forensic Checklist for Watertight Compromise Settlement Letters' },
  { id: 'post-settlement-ndc-cibil-rectification', title: '8. Post-Resolution Execution: Securing ₹0 NDC & CIBIL Score Rehabilitation' },
  { id: 'comparative-matrix-settlement-options', title: '9. Comprehensive Comparative Matrix: 3 Resolution Mechanisms Compared' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Advisory: Securing Legally Binding Debt Extinguishment' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function FullAndFinalVsCompromiseSettlementPage() {
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
            <span>Technical Financial Distinction • Banking Resolution Analysis</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Full and Final Settlement vs Compromise Settlement: <span className="text-[#3b82f6] md:text-[#60a5fa]">Demystifying Loan Closure, OTS &amp; Credit Write-Offs</span>
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
              <span>RBI Master Directions &amp; ICA 1872 Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate a Legally Binding OTS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request Free Loan Assessment
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
                <span>Executive Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                While operational loan closure demands 100% contractual repayment and an accounting write-off leaves borrower liability fully active, a formal compromise settlement (OTS) under RBI Master Directions legally extinguishes all debt obligations at a negotiated haircut, delivering permanent ₹0 liability with an official No Dues Certificate.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">

            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Resolution Terminology &amp; Legal Rights</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Full Closure vs. Compromise Settlement:</strong> Full closure involves paying 100% of the loan with zero haircut, resulting in a spotless &quot;Closed&quot; status. A compromise settlement (OTS) grants a negotiated financial haircut (typically 40% to 75% relief) and reports as &quot;Settled&quot; with a ₹0 balance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>The Credit Write-Off Fallacy:</strong> A technical or prudential write-off is an internal bank accounting measure to remove bad debts from active balance sheets. It does NOT forgive borrower liability, and recovery actions continue until a formal settlement is signed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 63 Statutory Remission:</strong> Under Section 63 of the Indian Contract Act, 1872, once a lender formally remits a portion of the debt via an authorized settlement letter and accepts payment, they are legally barred from claiming the waived balance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Compromise Settlement Framework:</strong> Regulated by the RBI Master Direction of June 8, 2023, banks must follow transparent Board-approved policies for OTS approvals, mandatory No Dues Certificate issuance, and credit bureau reporting within 30 days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Total Debt Extinguishment via NDC:</strong> An official, bank-stamped No Dues Certificate (NDC) is the ultimate proof of ₹0 legal liability, protecting the borrower permanently from future collection calls, asset attachments, or assigned recovery agencies.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying Full Closure, Compromise Settlement & Write-Off */}
            <section id="demystifying-closure-vs-settlement-vs-write-off" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Demystifying Full Closure, Compromise Settlement (OTS) &amp; Credit Write-Off
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In Indian banking and retail credit terminology, borrowers frequently encounter three distinct phrases when dealing with overdue credit facilities: <strong>Full and Final Loan Closure</strong>, <strong>Compromise Settlement (One-Time Settlement or OTS)</strong>, and <strong>Credit Write-Off</strong>. Although these terms are often casually interchanged by collection executives, call center representatives, and stressed borrowers, they represent fundamentally different legal, accounting, and credit realities under Reserve Bank of India (RBI) regulations and the Indian Contract Act, 1872.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Failing to grasp these technical distinctions creates catastrophic financial traps. Thousands of distressed borrowers mistakenly assume that when a bank employee informs them their non-performing personal loan or credit card balance has been &quot;written off,&quot; their debt has been forgiven. Months later, they find themselves served with Section 138 Negotiable Instruments Act criminal summons, civil recovery suits under Order 37 of the Code of Civil Procedure (CPC), or relentless demands from third-party Asset Reconstruction Companies (ARCs) that purchased the debt portfolio.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To establish strategic control over personal finances, a borrower must understand that an operational <strong>Full Closure</strong> reflects 100% contractual fulfillment, a <strong>Compromise Settlement</strong> represents a mutually agreed legal discharge at a discounted sum, and a <strong>Write-Off</strong> is merely an internal accounting mechanism that preserves 100% of the creditor&apos;s legal recovery rights.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-6 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm uppercase tracking-wider">
                  <FileText className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Three Financial States at a Glance</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-bold text-xs">Full Closure</span>
                    <p className="text-xs text-slate-600 leading-relaxed">100% principal, interest, and charges paid. No haircut. Clean &quot;Closed&quot; CIBIL status. Complete release of collateral.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-bold text-xs">Compromise OTS</span>
                    <p className="text-xs text-slate-600 leading-relaxed">Negotiated lump-sum payment (30%–60% of total dues). Formal waiver of shortfall. Legally binding ₹0 liability &amp; NDC.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 font-bold text-xs">Technical Write-Off</span>
                    <p className="text-xs text-slate-600 leading-relaxed">Internal ledger adjustment by bank. Debt remains 100% legally collectible. Ongoing recovery pressure and legal action.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Statutory Banking Framework & RBI Mandates */}
            <section id="statutory-banking-framework-rbi-mandates" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Banking Framework &amp; RBI Master Directions on Stressed Assets
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The architecture governing loan compromises in India is anchored in strict statutory frameworks established by the Reserve Bank of India and codified under Indian contract jurisprudence. On June 8, 2023, the Reserve Bank of India issued its landmark <strong>Master Direction – Framework for Compromise Settlements and Technical Write-offs (RBI/2023-24/40 DOR.STR.REC.20/21.04.048/2023-24)</strong>, providing comprehensive regulatory legitimacy to compromise settlements across all Commercial Banks, Non-Banking Financial Companies (NBFCs), Primary (Urban) Co-operative Banks, and All-India Financial Institutions.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under this RBI mandate, every regulated lending entity must possess a comprehensive, Board-approved policy that lays down explicit delegation of powers for approving compromise settlements. The framework mandates that banks cannot arbitrarily deny compromise avenues to distressed borrowers who have experienced genuine economic distress, medical emergencies, business insolvencies, or structural job losses.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Crucially, the statutory framework harmonizes with the <strong>Indian Contract Act, 1872</strong>. Section 62 of the Act establishes the doctrine of contract novation, allowing parties to substitute a new agreement for an existing one. Furthermore, Section 63 explicitly empowers a promisee (the bank) to dispense with or remit, wholly or in part, the performance of the contractual promise made by the promisor (the borrower). When a bank formally sanctions a compromise settlement and accepts a reduced sum in full discharge of the debt, Section 63 operates as an absolute statutory bar against any future claim or litigation for the remaining balance.
              </p>

              <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-5 my-4">
                <h3 className="text-xs sm:text-sm font-bold text-blue-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Key Statutory Highlights of RBI June 8, 2023 Master Direction</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1F5EFF] flex-shrink-0 mt-2" />
                    <span><strong>Mandatory Board Governance:</strong> Compromise settlements must follow transparent, objective criteria rather than arbitrary discretion by individual branch managers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1F5EFF] flex-shrink-0 mt-2" />
                    <span><strong>Mandatory Time-Bound NDC Issuance:</strong> Upon receipt of the agreed compromise payment, lenders must promptly issue an unconditional No Dues Certificate and release all original security documents within 30 days.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1F5EFF] flex-shrink-0 mt-2" />
                    <span><strong>Cooling-Off Period Framework:</strong> Borrowers executing a compromise settlement are subject to a minimum cooling-off period (at least 12 months) before regulated lenders can consider fresh credit exposures.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3: Bank Accounting Mechanics: NPA Provisioning & Write-Offs */}
            <section id="bank-accounting-provisions-write-off-mechanics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Bank Accounting Mechanics: NPA Provisioning, Write-Offs &amp; Balance Sheet Cleansing
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To understand why banks agree to sacrifice large sums in compromise settlements, one must examine the internal balance sheet mechanics of commercial lending institutions. When an EMI remains unpaid for 90 consecutive days, the loan is classified as a <strong>Non-Performing Asset (NPA)</strong> under RBI prudential norms. Once an account enters NPA classification, the bank is strictly prohibited from recognizing interest income on that asset and must begin locking away its own capital in the form of <strong>Mandatory Loan Loss Provisions</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As a defaulted loan ages through various NPA categories—Sub-Standard (15% provisioning), Doubtful-1 (25% to 40% provisioning), Doubtful-2 (40% to 100% provisioning), Doubtful-3 (100% provisioning), and Loss Asset (100% write-off requirement)—the lending institution experiences immense balance sheet pressure. Capital that could otherwise be deployed into profitable, high-yielding advances remains sterile and locked in regulatory reserves.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a bank executes a <strong>Technical Write-Off</strong> (also referred to as a Prudential Write-Off), it removes the bad loan from its active balance sheet ledger and transfers it to an off-balance sheet &quot;Memorandum Account&quot; or &quot;Advance Under Collection Account (AUCA)&quot;. This reduces the bank&apos;s reported Gross NPA ratio and yields tax deductions under Section 36(1)(vii) of the Income Tax Act, 1961. However, the legal obligation of the borrower remains 100% active. The bank continues active recovery operations through internal collection wings, external recovery agencies, or legal courts.
              </p>
            </section>

            {/* Section 4: Financial Mathematics & NPV Recovery Equation */}
            <section id="financial-mathematics-npv-recovery-calculation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Financial Mathematics: NPV Recovery Equations &amp; Bank Haircut Thresholds
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A compromise settlement is never granted as an act of corporate benevolence; it is the calculated result of a rigorous mathematical valuation. When a borrower submits a formal compromise proposal through legal counsel, the bank&apos;s Stressed Asset Settlement Committee or Special Recovery Committee evaluates the offer against the <strong>Net Present Value (NPV) of Estimated Future Recoveries</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If the bank rejects an immediate compromise settlement, it must pursue protracted recovery through the Debt Recovery Tribunal (DRT), Civil Courts, or Lok Adalat. This legal pathway entails heavy litigation expenses, advocate retainers, court fee disbursements, process service expenses, and significant time value erosion over a 3 to 7 year litigation lifecycle. Furthermore, the bank incurs continuous opportunity costs by maintaining 100% capital provisioning against the defaulted asset.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated future cash recoveries in year t, r is the bank&apos;s internal discount rate or hurdle rate (typically 12% to 15%), and statutory deductions account for 3–5 years of court friction, advocate fees, execution expenses, and capital locked in regulatory NPA reserves.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an advocate presents a well-structured financial hardship dossier proving that the borrower lacks attachable unencumbered assets, the bank&apos;s mathematical model reveals that receiving a guaranteed lump-sum settlement of 35% to 50% today yields a superior Net Present Value compared to chasing an uncertain 100% through 5 years of contested court proceedings.
              </p>
            </section>

            {/* Section 5: Structural Comparison: Infographic Roadmap */}
            <section id="settlement-vs-closure-infographic-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Structural Comparison: Visual Roadmap of Banking Resolution Paths
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below illustrates the operational workflows, legal ramifications, and credit bureau outputs associated with the three distinct debt resolution paths in India: Full &amp; Final Closure, Compromise Settlement (OTS), and Technical Write-Off.
              </p>

              <div className="my-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/infographics/full-and-final-settlement-vs-compromise-settlement.jpg"
                    alt="Full and Final Settlement vs Compromise Settlement vs Technical Write-Off Infographic"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                    priority
                  />
                </div>
                <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 text-center">
                  <strong>Figure 1.1:</strong> Institutional architecture comparing contractual repayment closure, negotiated OTS compromise remission, and balance sheet write-off mechanics.
                </div>
              </div>
            </section>

            {/* Section 6: Legal Distinctions: Full Closure vs. Compromise vs. Write-Off */}
            <section id="legal-distinctions-liability-discharge" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Legal Distinctions: Full Closure vs. Compromise Settlement vs. Write-Off Liability
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The legal enforceability of creditor claims differs radically across these three financial states. Understanding the legal protections inherent in each pathway ensures that borrowers do not leave themselves vulnerable to renewed collection demands or secondary debt assignment actions.
              </p>

              <div className="space-y-4 my-6">
                <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-black">A</span>
                    <span>Full and Final Loan Closure (100% Repayment)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under a regular full closure, the borrower satisfies all primary contractual obligations under the original loan agreement. The bank issues an unconditional <strong>No Dues Certificate (NDC)</strong> or <strong>NOC</strong>, cancels all registered hypothecations or mortgages within 30 days pursuant to the RBI directive of September 13, 2023, returns all original property documents or vehicle title deeds, and updates credit bureaus (CIBIL, Experian, Equifax, CRIF) to reflect an unblemished &quot;Closed&quot; status.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-black">B</span>
                    <span>Compromise Settlement / OTS (Accord &amp; Satisfaction)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under a compromise settlement, the parties enter into a binding accord and satisfaction. The lender formally agrees to accept a discounted cash consideration in exchange for releasing the borrower from all further liabilities. Once the agreed compromise amount is credited to the bank&apos;s designated loan account, the original debt is legally extinguished. The bank must unconditionally withdraw all pending legal notices, arbitration claims, SARFAESI proceedings, and criminal complaints under Section 138 of the NI Act or Section 25 of the PSS Act.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center text-xs font-black">C</span>
                    <span>Credit Write-Off (Zero Legal Discharge)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A credit write-off does not alter the borrower&apos;s legal status in the slightest. The borrower remains fully liable for the entire outstanding principal, contractual interest, and penal charges. Banks often sell written-off debt portfolios to Asset Reconstruction Companies (ARCs) under Section 5 of the SARFAESI Act, 2002. If a borrower does not formally resolve a written-off loan through an OTS, they face ongoing enforcement actions and perpetual credit bureau impairment.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Forensic Checklist for Compromise Sanction Letters */}
            <section id="forensic-audit-compromise-sanction-letter" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Forensic Checklist for Watertight Compromise Settlement Letters
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                One of the most dangerous hazards in debt resolution is falling victim to unauthorized, fraudulent, or defective settlement arrangements. Unscrupulous recovery agents frequently issue fabricated settlement letters or demand cash payments into third-party accounts, falsely promising that the loan will be closed. To ensure complete legal immunity, every compromise settlement must undergo rigorous forensic verification against the following statutory checklist before any funds are disbursed:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-6">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span>The 7-Point Compromise Sanction Letter Forensic Audit</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Official Institutional Stationery:</strong> The letter must be printed on official bank/NBFC letterhead bearing the company&apos;s corporate identification number (CIN), registered office address, and official banking seal.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Authorized Delegation Authority:</strong> The document must be executed and signed by an authorized signatory (Branch Manager, Chief Manager, or Zonal Recovery Head) containing their name, designation, and employee code.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Explicit Loan Account Identifiers:</strong> Complete enumeration of all loan account numbers, credit card numbers, borrower names, and co-borrower/guarantor names being settled.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Exact Financial Tranches &amp; Deadlines:</strong> Clear breakdown of the total agreed settlement sum, exact installment amounts, and precise payment cutoff dates.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Unconditional Debt Extinguishment Clause:</strong> Express contractual stipulation confirming that upon realization of the settlement sum, the balance shortfall is permanently remitted, and no further claims will be raised.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Mandatory Legal Withdrawal Covenant:</strong> Clear commitment that the lender will formally withdraw all pending legal notices, DRT claims, Section 138 NI Act complaints, and SARFAESI actions within 30 days.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Direct Bank Account Remittance:</strong> All payments must be deposited directly into the borrower&apos;s official loan account via NEFT, RTGS, or crossed demand draft payable directly to the bank—never to an individual agent or agency.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Post-Settlement NDC & CIBIL Rectification */}
            <section id="post-settlement-ndc-cibil-rectification" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Post-Resolution Execution: Securing ₹0 NDC &amp; CIBIL Score Rehabilitation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Remitting the agreed settlement payment is not the final step in resolving defaulted debt. The post-settlement execution phase is critical to guarantee that the compromise agreement is accurately recorded in statutory credit repositories and banking archives.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following the full receipt of settlement tranches, the lender is legally required under the <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong> and RBI Master Directions to update all four authorized credit bureaus—TransUnion CIBIL, Experian, Equifax, and CRIF High Mark—within 30 days. The account status will transition from &quot;Default / Written Off&quot; to <strong>&quot;Settled&quot;</strong> (or &quot;Post-Settlement Closed&quot;) with the current balance and amount overdue updated strictly to <strong>₹0</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                While a &quot;Settled&quot; credit remark indicates that the lender absorbed a financial haircut, bringing the balance to ₹0 halts the destructive month-on-month default reporting that continually drags credit scores downward. Once the account reflects zero liability, borrowers can implement structured credit rehabilitation strategies—such as utilizing fixed-deposit-backed credit cards and maintaining flawless payment histories—to restore credit scores back to 750+ within 18 to 24 months.
              </p>
            </section>

            {/* Section 9: Comprehensive Comparative Matrix */}
            <section id="comparative-matrix-settlement-options" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comprehensive Comparative Matrix: 3 Resolution Mechanisms Compared
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The comparative table below outlines the core parameters, financial impacts, legal protections, and credit bureau consequences of Full Closure, Compromise Settlement (OTS), and Technical Write-Off:
              </p>

              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Comparative Parameter</th>
                      <th>Full &amp; Final Closure</th>
                      <th>Compromise Settlement (OTS)</th>
                      <th>Technical Write-Off</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Total Amount Paid</td>
                      <td>100% Principal + Accrued Interest</td>
                      <td>30%–60% of Total Outstanding (Negotiated)</td>
                      <td>₹0 (Unpaid Default State)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Financial Haircut Received</td>
                      <td>0% (No Waiver)</td>
                      <td>40%–70% Principal/Interest Waiver</td>
                      <td>None (Debt remains legally active)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Legal Debt Discharge</td>
                      <td>Complete Contractual Discharge</td>
                      <td>Complete Legal Discharge via Remission (ICA Sec 63)</td>
                      <td>Zero Discharge; Borrower remains 100% liable</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">No Dues Certificate (NDC)</td>
                      <td>Issued (Unconditional Closure)</td>
                      <td>Issued (Unconditional Settlement NDC)</td>
                      <td>Never Issued</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Credit Bureau Status</td>
                      <td>&quot;Closed&quot; (Positive Status)</td>
                      <td>&quot;Settled&quot; with ₹0 Balance</td>
                      <td>&quot;Written Off&quot; / Active Default</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">CIBIL Score Impact</td>
                      <td>Maintained / Enhanced (750+)</td>
                      <td>Initial drop; Recoverable to 750+ in 18–24 mo</td>
                      <td>Severe perpetual damage (Below 600)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Legal Recovery Action</td>
                      <td>Permanently Terminated</td>
                      <td>Withdrawn pursuant to Settlement Covenants</td>
                      <td>Active; DRT, Sec 138, and ARC assignment</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Release of Collateral/Papers</td>
                      <td>Released within 30 days (RBI Rule)</td>
                      <td>Released upon full OTS receipt</td>
                      <td>Retained by bank / Assigned to ARC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Advisory */}
            <section id="company-resolution-section" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                10. SettleLoans Legal Advisory: Securing Legally Binding Debt Extinguishment
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Navigating the complex institutional machinery of commercial banks, NBFCs, and Asset Reconstruction Companies requires specialized legal expertise and seasoned financial negotiation acumen. At <strong>SettleLoans</strong>, our senior debt defense advocates and banking specialists represent stressed borrowers across India to achieve decisive, legally binding compromise settlements.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                From serving formal Notices of Representation to halt collection agency harassment under the RBI Fair Practices Code, to compiling verified financial hardship dossiers and negotiating directly with Zonal Settlement Committees, SettleLoans ensures you receive the maximum legitimate haircut while safeguarding your legal rights and securing an unconditional No Dues Certificate.
              </p>

              {/* CompanySection Component */}
              <div className="pt-2">
                <CompanySection />
              </div>
            </section>

            {/* Section 11: FAQ Accordion */}
            <section id="faqs" className="space-y-6 pt-4">
              <div className="flex items-center gap-2 text-slate-900">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
                  11. Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {jsonLdGraph['@graph'][4].mainEntity.map((faq: any, idx: number) => (
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
                  href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12513&Mode=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Framework for Compromise Settlements &amp; Technical Write-offs (2023)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Indian Contract Act, 1872 (Section 62 Novation &amp; Section 63 Remission)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12534&Mode=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Circular – Release of Property Documents within 30 Days of Loan Settlement</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Credit Information Companies (Regulation) Act, 2005 (CICRA)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Grievance Redressal for Stressed Loans)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Loan Settlement &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/bank-sold-loan-to-arc-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Sold Loan to ARC Process
                </Link>
                <Link
                  href="/loan-penalty-waiver-request"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Penalty Waiver Guide
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
                  CIBIL Settled to Closed Transition
                </Link>
                <Link
                  href="/bank-delaying-original-property-documents-after-home-loan-settlement-rbi-rules"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Property Document Return Rules
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Unsecured Loan Property Protections
                </Link>
                <Link
                  href="/drt-loan-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  DRT Loan Settlement Process
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Recovery Harassment
                </Link>
                <Link
                  href="/SME-loan-dispute-resolution"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SME Loan Dispute Resolution
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
                Expert in RBI compromise settlement frameworks, loan foreclosure legalities, and debt extinguishment strategies with over a decade of banking advisory experience.
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
                <span>Debt Compromise Advisory</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">Struggling with Overdue Loans?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not pay unverified recovery agents or accept informal verbal promises. Get senior advocate representation to negotiate a legally binding OTS with an official No Dues Certificate.
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
                  <span>RBI June 2023 OTS Framework Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank-Stamped Sanctions</span>
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
