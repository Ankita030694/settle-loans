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
  UserCheck,
  BadgePercent,
  TrendingDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Insolvency and Bankruptcy Process in India: IBC Debt Discharge & DRT Guide (2026)',
  description: 'Exhaustive legal manual on the personal insolvency process in India under Part III of the IBC 2016. Learn how Section 94 debtor petitions, Section 96 interim moratoriums, DRT insolvency filings, Fresh Start processes, and Section 138 discharge orders permanently eliminate unsecured debt.',
  keywords: [
    'personal insolvency process in india',
    'personal bankruptcy process india',
    'insolvency and bankruptcy code personal loan',
    'fresh start process ibc india',
    'drt personal insolvency petition',
    'debt discharge under ibc',
    'personal guarantor insolvency process',
    'ibc section 94 debtor application',
    'interim moratorium section 96 ibc',
    'resolution professional personal bankruptcy',
    'bankruptcy discharge order india',
    'individual insolvency resolution process drt'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-insolvency-and-bankruptcy-process-india',
  },
  openGraph: {
    title: 'Personal Insolvency and Bankruptcy Process in India: IBC Debt Discharge & DRT Guide',
    description: 'Seeking a statutory debt exit in India? Explore how Part III of the Insolvency and Bankruptcy Code (IBC) 2016, DRT insolvency petitions, Section 96 interim moratoriums, and Section 138 discharge orders provide comprehensive debt relief.',
    url: 'https://www.settleloans.in/personal-insolvency-and-bankruptcy-process-india',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-insolvency-and-bankruptcy-process-india.jpg',
        width: 1200,
        height: 675,
        alt: 'Personal Insolvency and Bankruptcy Process in India - Statutory IBC and DRT Roadmap',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Insolvency and Bankruptcy Process in India: IBC & DRT Legal Guide',
    description: 'Expert advocate analysis of individual debt discharge, Fresh Start rules, Section 94 petitions, DRT insolvency trials, and personal guarantor liability in India.',
    images: ['https://www.settleloans.in/images/infographics/personal-insolvency-and-bankruptcy-process-india.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-insolvency-and-bankruptcy-process-india#webpage",
      "url": "https://www.settleloans.in/personal-insolvency-and-bankruptcy-process-india",
      "name": "Personal Insolvency and Bankruptcy Process in India: IBC Debt Discharge & DRT Guide (2026)",
      "description": "Exhaustive legal manual on the personal insolvency process in India under Part III of the IBC 2016. Learn how Section 94 debtor petitions, Section 96 interim moratoriums, DRT insolvency filings, Fresh Start processes, and Section 138 discharge orders permanently eliminate unsecured debt.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-insolvency-and-bankruptcy-process-india#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-insolvency-and-bankruptcy-process-india#breadcrumb",
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
          "name": "Personal Insolvency and Bankruptcy Process India",
          "item": "https://www.settleloans.in/personal-insolvency-and-bankruptcy-process-india"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-insolvency-and-bankruptcy-process-india#article",
      "headline": "Personal Insolvency and Bankruptcy Process in India: IBC Debt Discharge & DRT Legal Guide",
      "description": "A definitive procedural and statutory guide examining Part III of the Insolvency and Bankruptcy Code (IBC) 2016, DRT individual insolvency petitions, Chapter II Fresh Start provisions, Section 96 statutory interim moratoriums, Resolution Professional repayment plans, and judicial debt discharge orders under Indian law.",
      "image": "https://www.settleloans.in/images/infographics/personal-insolvency-and-bankruptcy-process-india.jpg",
      "datePublished": "2026-08-26T12:00:00+05:30",
      "dateModified": "2026-08-26T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-insolvency-and-bankruptcy-process-india#webpage"
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
      "@id": "https://www.settleloans.in/personal-insolvency-and-bankruptcy-process-india#service",
      "name": "SettleLoans - Personal Insolvency, DRT Defense & Debt Discharge Advisory",
      "description": "Specialized legal representation, insolvency petition drafting, and institutional debt negotiation services for individual borrowers, personal guarantors, and stressed professionals seeking statutory relief under IBC 2016 and RBI compromise frameworks.",
      "url": "https://www.settleloans.in/personal-insolvency-and-bankruptcy-process-india",
      "image": "https://www.settleloans.in/images/infographics/personal-insolvency-and-bankruptcy-process-india.jpg",
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
            "name": "Anil K. Shrivastava"
          },
          "datePublished": "2026-06-12",
          "reviewBody": "I was facing multiple recovery suits totaling ₹42 Lakhs across three private banks after my consultancy firm collapsed. The recovery harassment had become unlivable. SettleLoans advocates analyzed my financial liabilities under Part III of the IBC and represented me before the Debt Recovery Tribunal. By invoking the statutory interim moratorium protections under Section 96, they immediately halted all creditor court actions and structured a comprehensive compromise resolution with a 54% debt haircut. Exceptional legal mastery.",
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
          "datePublished": "2026-07-09",
          "reviewBody": "As a personal guarantor to an MSME enterprise loan of ₹1.1 Crore, I received insolvency demand notices under Section 95 from a public sector bank. SettleLoans stepped in, filed a detailed defense disputing the unverified penal interest compounding, and conducted forensic reconciliation of the loan ledger. Their insolvency advocates negotiated a full and final One-Time Settlement approved by the bank credit committee, vacating all personal guarantee covenants.",
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
            "name": "Devendra Pratap Chauhan"
          },
          "datePublished": "2026-05-18",
          "reviewBody": "I accumulated ₹18 Lakhs in unsecured personal loans and credit cards during severe family medical crises. I was on the verge of bankruptcy. SettleLoans explained the exact legal distinctions between formal DRT insolvency petitions and RBI-governed compromise settlements. They represented me in structured negotiations with all four lenders, stopping recovery agent visits and securing authentic zero-balance No Dues Certificates with an aggregate 48% waiver.",
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
            "name": "Pooja Venkatesh"
          },
          "datePublished": "2026-08-01",
          "reviewBody": "The legal team at SettleLoans is unmatched in banking jurisprudence and IBC personal insolvency laws. They provided complete clarity on the Fresh Start process, shielded my salary accounts from unlawful set-off attachments, and finalized a binding tripartite compromise order. I have reclaimed my financial freedom without losing my ancestral residence.",
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
      "@id": "https://www.settleloans.in/personal-insolvency-and-bankruptcy-process-india#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the statutory framework governing personal insolvency and bankruptcy in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Personal insolvency and individual bankruptcy in India are governed by Part III of the Insolvency and Bankruptcy Code, 2016 (IBC). Part III provides for three distinct statutory mechanisms: the Fresh Start Process (Sections 79–93) for low-income qualifying debtors, the Individual Insolvency Resolution Process (Sections 94–120) for restructuring liabilities via repayment plans, and formal Bankruptcy (Sections 121–148) for liquidating assets and issuing judicial debt discharge orders."
          }
        },
        {
          "@type": "Question",
          "name": "Which judicial forum has jurisdiction over personal insolvency petitions in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 179 of the IBC, the Debt Recovery Tribunal (DRT) is the designated Adjudicating Authority for individual debtors, proprietorships, and partnership firms. However, under Section 60(2) of the IBC, if an individual is a Personal Guarantor to a Corporate Debtor undergoing Corporate Insolvency Resolution Process (CIRP) or liquidation, the National Company Law Tribunal (NCLT) holds exclusive territorial jurisdiction over that guarantor's insolvency proceedings."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Section 96 Interim Moratorium and how does it protect debtors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 96 of the IBC, the moment an application for personal insolvency is filed under Section 94 (by the debtor) or Section 95 (by a creditor), an automatic statutory 'Interim Moratorium' immediately commences. This interim moratorium statutorily stays all ongoing legal proceedings in respect of any debt, prohibits creditors from initiating fresh recovery suits, and halts coercive recovery agent contact until the petition is formally admitted or rejected by the Adjudicating Authority."
          }
        },
        {
          "@type": "Question",
          "name": "What is the 'Fresh Start' process under Chapter II of the IBC and who is eligible?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Fresh Start Process under Sections 79 to 93 of the IBC is a statutory debt-relief mechanism designed for economically vulnerable individuals. To qualify, an applicant must have a gross annual income not exceeding ₹60,000, aggregate qualifying debts not exceeding ₹35,000, total unencumbered assets not exceeding ₹20,000, and must not own a dwelling unit. If approved, the DRT issues an unconditional discharge order wiping out 100% of the qualifying liabilities."
          }
        },
        {
          "@type": "Question",
          "name": "What is the role of a Resolution Professional (RP) in individual insolvency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Resolution Professional (RP) is an independent insolvency practitioner registered with the Insolvency and Bankruptcy Board of India (IBBI). In personal insolvency, the RP examines the debtor's application, submits a recommendation report to the DRT under Section 99, facilitates the preparation of a structured Repayment Plan under Section 105, convenes the meeting of creditors, supervises voting, and monitors plan implementation."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of creditor voting is required to approve a personal repayment plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 111 of the IBC, a repayment plan submitted in an individual insolvency proceeding must be approved by a majority of more than three-fourths (75% or higher) in value of the creditors present and voting. If approved and sanctioned by the DRT under Section 114, the repayment plan becomes legally binding on the debtor and all listed creditors."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if an individual insolvency resolution process fails?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If creditors reject the repayment plan or if the debtor defaults on the sanctioned plan terms, the Resolution Professional or any creditor can file a report before the DRT. The debtor or creditor may then file an application for formal Bankruptcy under Section 121 of the IBC. The DRT appoints a Bankruptcy Trustee to take possession of the bankrupt's estate, liquidate non-exempt assets, distribute proceeds, and subsequently issue a formal Discharge Order under Section 138."
          }
        },
        {
          "@type": "Question",
          "name": "Can an individual file for personal insolvency for credit card and personal loan debts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While Part III of the IBC has been officially notified and operationalized by the Ministry of Corporate Affairs for Personal Guarantors to Corporate Debtors, individual insolvency provisions for non-guarantor retail individuals (pure credit card and personal loan borrowers) await final phased central notification. In the interim, retail borrowers facing unmanageable unsecured debt resolve their liabilities through advocate-led RBI Compromise One-Time Settlements (OTS) or Lok Adalat conciliation."
          }
        },
        {
          "@type": "Question",
          "name": "What are the legal disqualifications imposed on an undischarged bankrupt individual in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 141 of the IBC, an undischarged bankrupt is disqualified from being appointed or acting as a director of any company, being elected to public office (including Parliament or State Legislatures), acting as a trustee of a trust, and from obtaining fresh credit exceeding statutory limits without disclosing their undischarged bankruptcy status to prospective lenders."
          }
        },
        {
          "@type": "Question",
          "name": "How does a formal discharge order or OTS settlement impact future CIBIL bureau scores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upon receiving a judicial discharge order under Section 138 of the IBC or executing a bank OTS settlement, the lender updates credit bureaus with a status remark of 'Discharged' or 'Settled' with an outstanding balance of ₹0. While this temporarily impacts credit scores, it halts delinquent interest compounding. Borrowers can systematically rebuild their CIBIL score to 750+ within 18 to 24 months using secured credit cards backed by fixed deposits."
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
  { id: 'demystifying-personal-insolvency-india', title: '1. Demystifying Personal Insolvency & Bankruptcy' },
  { id: 'statutory-ibc-architecture-section-94-96', title: '2. IBC Part III Architecture & Section 96 Moratorium' },
  { id: 'fresh-start-process-eligibility-limits', title: '3. The Fresh Start Process (Sections 79–93)' },
  { id: 'drt-individual-insolvency-repayment-plan', title: '4. DRT Insolvency Process & Repayment Plan (IIRP)' },
  { id: 'personal-insolvency-visual-roadmap', title: '5. Personal Insolvency Statutory Visual Roadmap' },
  { id: 'bankruptcy-order-liquidation-discharge', title: '6. Bankruptcy Order, Asset Liquidation & Discharge' },
  { id: 'personal-guarantors-corporate-debtors', title: '7. Personal Guarantors & Supreme Court Jurisprudence' },
  { id: 'remittance-rbi-ndc-cibil-recovery', title: '8. Remittance, ₹0 NDC & Credit Rehabilitation' },
  { id: 'insolvency-comparative-resolution-matrix', title: '9. Dispute Resolution Comparative Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Insolvency Defense & Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function PersonalInsolvencyAndBankruptcyProcessIndiaPage() {
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
        className="w-full border-b border-slate-700/80 pt-10 pb-8 md:pt-14 md:pb-10 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <Scale className="w-3.5 h-3.5" />
            <span>Statutory Debt Relief • Part III IBC 2016 &amp; DRT Insolvency Framework</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Personal Insolvency and Bankruptcy Process in India: <span className="text-[#3b82f6] md:text-[#60a5fa]">IBC Debt Discharge &amp; DRT Legal Guide</span>
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
              <span>IBC 2016, DRT &amp; RBI Prudential Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-7 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Consult an Insolvency &amp; Debt Advocate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Free Insolvency Eligibility Check
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
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Insolvency Case Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Part III of the Insolvency and Bankruptcy Code (IBC) 2016 establishes statutory mechanisms for individual debt discharge. Invoking Section 94 petitions triggers an immediate Section 96 interim moratorium that freezes creditor lawsuits and halts aggressive recovery harassment, paving the way for DRT-supervised repayment restructuring or a binding Section 138 judicial discharge order.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Personal Insolvency &amp; Debt Discharge in India</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory IBC Architecture (Part III):</strong> The Insolvency and Bankruptcy Code, 2016 codified individual debt relief under Part III, replacing obsolete colonial bankruptcy statutes with modern, court-supervised restructuring.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Automatic Section 96 Interim Moratorium:</strong> Filing an application under Section 94 (by the debtor) or Section 95 (by a creditor) grants an instant statutory stay on all pending court cases, execution petitions, and recovery agent visits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>The Chapter II Fresh Start Window:</strong> Low-income individuals with gross annual income up to ₹60,000, qualifying unsecured debt up to ₹35,000, and minimal assets can obtain a complete 100% debt write-off via DRT discharge orders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>75% Majority Creditor Repayment Plan:</strong> Under Section 105 and Section 111, the Resolution Professional tables a structured repayment plan which, when approved by a 75% creditor majority, legally binds all lenders to deep principal waivers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Personal Guarantor Liability &amp; Supreme Court Precedent:</strong> Following the landmark <em>Lalit Kumar Jain</em> ruling, personal guarantors to corporate entities face simultaneous insolvency proceedings before the NCLT or DRT, making advocate-led settlements indispensable.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying Personal Insolvency & Bankruptcy */}
            <section id="demystifying-personal-insolvency-india" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Demystifying Personal Insolvency &amp; Bankruptcy in India: Historical Context vs Modern IBC Framework
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For over a century, personal debt distress in India was governed by antiquated colonial legislation: the <strong>Presidency Towns Insolvency Act, 1909</strong> (applicable to Mumbai, Kolkata, and Chennai) and the <strong>Provincial Insolvency Act, 1920</strong> (applicable across the rest of India). These historical statutes were inherently punitive, cumbersome, and rarely offered honest but unfortunate borrowers a viable economic restart. Debtors who suffered severe business loss, debilitating medical emergencies, or systemic economic crises faced lifelong civil litigation, continuous asset attachment, and acute societal stigmatization without ever achieving legal debt finality.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The enactment of the <strong>Insolvency and Bankruptcy Code, 2016 (IBC)</strong> fundamentally transformed Indian insolvency jurisprudence. By enacting <strong>Part III (Insolvency Resolution and Bankruptcy for Individuals and Partnerships)</strong>, the Indian Parliament established an institutional, time-bound, and rehabilitative statutory framework. The modern philosophy shifts the objective of the law from punitive retribution to economic rehabilitation, offering stressed individuals, commercial proprietors, and personal guarantors an orderly, transparent legal exit from unsustainable debt traps.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In legal terminology, a vital distinction exists between <em>insolvency</em> and <em>bankruptcy</em>. <strong>Insolvency</strong> is a financial condition where an individual&apos;s liquid assets and cash flows are insufficient to discharge outstanding financial obligations as they fall due. In contrast, <strong>bankruptcy</strong> is a formal judicial declaration pronounced by a competent Adjudicating Authority (the Debt Recovery Tribunal or National Company Law Tribunal) establishing that the individual is legally insolvent and directing the liquidation of non-exempt assets followed by a binding <strong>Discharge Order</strong>.
              </p>
            </section>

            {/* Section 2: Statutory Legal Grounding: IBC Part III Architecture & Section 96 Moratorium */}
            <section id="statutory-ibc-architecture-section-94-96" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Architecture of IBC Part III: Section 94 Debtor Petitions &amp; The Section 96 Statutory Interim Moratorium
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Part III of the IBC operates through an organized statutory hierarchy designed to protect the debtor while balancing legitimate creditor rights under constitutional law. The procedural mechanics begin when an eligible debtor or creditor initiates legal proceedings before the designated Adjudicating Authority:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 94 Debtor Application</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A debtor who has defaulted on qualifying debts can voluntarily file an application for initiating an Individual Insolvency Resolution Process (IIRP). The petition includes full disclosures of financial statements, list of creditors, encumbered properties, and proposed repayment structures.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    <span>Section 95 Creditor Application</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A financial or operational creditor can file a petition against a defaulting individual or personal guarantor after serving a mandatory 14-day statutory demand notice in Form B, establishing the existence of unpaid debt exceeding the threshold limit.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Section 96 Statutory Interim Moratorium</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Operating as an immediate statutory shield, the interim moratorium takes effect automatically on the exact date of filing. All pending legal actions, civil suits, arbitration claims, and coercive recovery measures in respect of the debtor&apos;s liabilities are instantly stayed.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-purple-600" />
                    <span>Section 101 Full Moratorium</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Upon formal admission of the insolvency petition under Section 100, the DRT issues a full Moratorium order under Section 101 lasting for 180 days, completely prohibiting creditors from initiating any security enforcement, asset sale, or transfer during plan negotiations.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <ShieldX className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Protective Power of the Section 96 Shield</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  The automatic inception of the Section 96 interim moratorium provides unprecedented legal relief for distressed individuals. Unscrupulous recovery agencies, continuous telephonic intimidation, and multiple parallel recovery litigations are legally rendered non-executable during the pendency of the petition. Any creditor taking coercive action during this statutory freeze is subject to contempt proceedings before the tribunal.
                </p>
              </div>
            </section>

            {/* Section 3: The Fresh Start Process */}
            <section id="fresh-start-process-eligibility-limits" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. The &quot;Fresh Start&quot; Process (Chapter II, Sections 79–93): Eligibility, Limitations &amp; Realities
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Chapter II of Part III of the IBC (Sections 79 through 93), the legislature introduced the revolutionary <strong>Fresh Start Process</strong>. This unique statutory instrument is specifically designed as a social welfare mechanism to relieve impoverished, low-income citizens from unpayable micro-debts without the heavy administrative costs of full-blown insolvency litigation.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To prevent misuse and ensure that only genuinely destitute debtors access this route, Section 80 imposes strict cumulative qualifying criteria:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Statutory Parameter</th>
                      <th>IBC Section 80 Legal Threshold</th>
                      <th>Legal Impact on Debtor Eligibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Gross Annual Income</td>
                      <td>Must not exceed ₹60,000 per annum</td>
                      <td>Average monthly earning must be under ₹5,000</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Aggregate Qualifying Debt</td>
                      <td>Must not exceed ₹35,000 in total</td>
                      <td>Calculated across all unsecured micro-loans &amp; hand loans</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Total Unencumbered Assets</td>
                      <td>Must not exceed ₹20,000 in total value</td>
                      <td>Excludes basic tools of trade, essential clothing &amp; utensils</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Dwelling Ownership</td>
                      <td>Applicant must NOT own a dwelling unit</td>
                      <td>Cannot possess legal title to any residential house or land</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Prior Insolvency History</td>
                      <td>No fresh start or bankruptcy in last 12 months</td>
                      <td>Must have clean bona fide record with no pending fraud cases</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Upon application by the debtor, the Adjudicating Authority appoints a Resolution Professional (RP) to examine the claim under Section 83. If the RP verifies compliance, the DRT issues an unconditional <strong>Fresh Start Order under Section 92</strong>. This order operates as a complete legal discharge: the debtor is permanently absolved from all listed qualifying debts, and all civil liabilities are expunged from creditor ledgers without any remaining financial obligation.
              </p>
            </section>

            {/* Section 4: Individual Insolvency Resolution Process (IIRP) in DRT */}
            <section id="drt-individual-insolvency-repayment-plan" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Individual Insolvency Resolution Process (IIRP) in the DRT: Resolution Professionals, Repayment Plans &amp; NPV Valuation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For mid-to-high ticket individual borrowers, business entrepreneurs, and personal guarantors whose financial liabilities exceed the Fresh Start thresholds, the statutory route is the <strong>Individual Insolvency Resolution Process (IIRP)</strong> under Chapter III (Sections 94–120).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The primary objective of the IIRP is not to liquidate the individual, but to formulate a consensual, legally binding <strong>Repayment Plan under Section 105</strong>. The process follows a structured statutory timeline:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 1: Appointment &amp; Report of the Resolution Professional (Section 97 &amp; 99)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The DRT directs the IBBI to nominate an independent Resolution Professional (RP). The RP audits the debtor&apos;s financial records, verifies default authenticity, and submits a comprehensive Section 99 report recommending admission or rejection of the insolvency petition.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 2: Formulation of the Section 105 Repayment Plan</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The debtor, assisted by specialized debt defense advocates and the RP, prepares a comprehensive Repayment Plan. The plan outlines restructuring terms, proposed debt haircuts (35%–60%), liquidation of non-core secondary assets, and a realistic tranche repayment schedule over 12 to 36 months.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 3: Creditor Voting &amp; The 75% Majority Requirement (Section 111)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The RP convenes a formal meeting of all participating creditors. Under Section 111, for the repayment plan to succeed, it must secure approval by a majority of more than <strong>75% in total value of the voting creditors</strong>.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 4: DRT Judicial Sanction Order (Section 114)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Upon approval by the requisite creditor majority, the Presiding Officer of the DRT passes a judicial sanction order under Section 114, making the compromise plan legally binding on the debtor, all secured and unsecured creditors, and guarantors.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To evaluate the economic feasibility of a repayment plan versus protracted litigation, bank credit committees and Resolution Professionals utilize the <strong>Net Present Value (NPV) Recovery Benchmark</strong>:
              </p>

              {/* JSX Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Insolvency Resolution Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Resolution = ∑ [ R_t / (1 + k)^t ] - Liquidation Friction - Regulatory NPA Provisions
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where R_t represents scheduled recovery installments under the repayment plan, k is the bank&apos;s discount rate, and deductions account for 3–5 years of judicial execution delays, auction shortfalls, advocate fees, and capital tied in 100% NPA provisioning.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When advocates demonstrate that a structured repayment plan provides higher present-value economic recovery than distress asset liquidation, institutional creditors routinely vote to approve substantial principal write-downs.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="personal-insolvency-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Personal Insolvency &amp; Bankruptcy Process: Statutory Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below details the complete 5-stage statutory lifecycle under the Insolvency and Bankruptcy Code (IBC) and Debt Recovery Tribunal (DRT): from initial default and Section 94/95 filings to the Section 96 interim moratorium shield, Resolution Professional investigation, creditor voting, and full judicial debt discharge.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/personal-insolvency-and-bankruptcy-process-india.jpg"
                  alt="Personal Insolvency and Bankruptcy Process in India Visual Roadmap under IBC and DRT"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Petition &amp; Interim Moratorium</span>
                  <span>Filing under Section 94/95 triggers immediate Section 96 statutory interim moratorium, halting all lawsuits, civil claims, and recovery harassment.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: RP Audit &amp; 75% Creditor Voting</span>
                  <span>Resolution Professional audits liabilities, prepares Section 105 Repayment Plan, and secures 75% creditor majority approval before the DRT.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Plan Execution &amp; Section 138 Discharge</span>
                  <span>Completing the repayment terms grants a final judicial Discharge Order under Section 138, expunging residual debt with an official ₹0 No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Section 121–148 Bankruptcy Order */}
            <section id="bankruptcy-order-liquidation-discharge" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Chapter IV Formal Bankruptcy: Asset Liquidation, Section 138 Discharge Orders &amp; Disqualifications
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an Individual Insolvency Resolution Process fails—either because creditors reject the proposed repayment plan or the debtor is genuinely unable to offer any settlement terms—the statutory machinery shifts into <strong>Chapter IV (Bankruptcy for Individuals and Partnership Firms, Sections 121–148)</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Upon application by the debtor or creditor, the DRT passes a formal <strong>Bankruptcy Order under Section 126</strong>. Key legal consequences unfold:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-red-600" />
                    <span>Appointment of Bankruptcy Trustee (Section 125)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The tribunal appoints an IBBI-registered Bankruptcy Trustee. The entire divisible estate of the bankrupt vests in the trustee, who is empowered to take custody, administer, and liquidate non-exempt assets.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Protection of Excluded Assets (Section 79(14))</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The law strictly protects essential personal assets: basic household tools of trade, essential wearing apparel, furniture, utensils, and personal pension funds are statutorily exempt from seizure and liquidation.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <TrendingDown className="w-4 h-4 text-amber-600" />
                    <span>Statutory Disqualifications (Section 141)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    An undischarged bankrupt is legally disqualified from acting as a director of any company, standing for parliamentary/assembly election, serving as a trustee, or taking fresh credit without disclosing their bankruptcy status.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span>Section 138 Final Discharge Order</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Upon completion of the liquidation and distribution process, the DRT issues a definitive <strong>Discharge Order under Section 138</strong>. The debtor is completely freed from all bankruptcy debts, permanently lifting all statutory disqualifications.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Non-Dischargeable Excluded Debts</span>
                </div>
                <p className="leading-relaxed">
                  Under Section 79(15) of the IBC, a bankruptcy discharge order does NOT extinguish court-mandated criminal fines, maintenance/alimony payments ordered by family courts, personal liability for fraud or breach of trust, or unliquidated damages for negligence causing bodily harm.
                </p>
              </div>
            </section>

            {/* Section 7: Personal Guarantors & Supreme Court Precedents */}
            <section id="personal-guarantors-corporate-debtors" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Personal Guarantors to Corporate Debtors: Supreme Court Precedents &amp; Parallel DRT / NCLT Jurisdictions
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The most litigated and commercially active dimension of Part III of the IBC in India involves <strong>Personal Guarantors to Corporate Debtors</strong>. By a landmark central government notification dated November 15, 2019, the Ministry of Corporate Affairs operationalized the personal insolvency provisions specifically for personal guarantors.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In the historic ruling of <strong><em>Lalit Kumar Jain v. Union of India (2021) 9 SCC 321</em></strong>, the Supreme Court of India unanimously upheld the constitutional validity of this framework, laying down critical legal doctrines:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Scale className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Co-Extensive Liability under Indian Contract Act:</strong> Under Section 128 of the Indian Contract Act, 1872, the liability of a personal guarantor is co-extensive with that of the principal corporate debtor. Lenders are not obligated to exhaust remedies against the corporate entity before proceeding against personal guarantors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Scale className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>No Automatic Discharge via Corporate Resolution:</strong> The Supreme Court clarified that approval of a Corporate Insolvency Resolution Plan (CIRP) under Section 31 does NOT automatically discharge personal guarantors, unless explicitly stipulated and accepted by the Committee of Creditors (CoC).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Scale className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Forum Jurisdiction Rule (Section 60(2)):</strong> If a Corporate Debtor is already undergoing CIRP or liquidation before the National Company Law Tribunal (NCLT), all insolvency applications against its personal guarantors must be filed before the same NCLT bench, rather than the DRT.</span>
                </li>
              </ul>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For personal guarantors facing high-exposure insolvency demand notices, engaging specialized banking advocates to challenge Section 95 filings, expose unverified interest compounding, and structure tripartite compromise settlements is essential to safeguard personal estates from attachment.
              </p>
            </section>

            {/* Section 8: Remittance, ₹0 NDC & Credit Recovery */}
            <section id="remittance-rbi-ndc-cibil-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Loan Remittance, RBI ₹0 No Dues Certificate Mandate &amp; Long-Term Credit Bureau Rehabilitation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Whether a borrower achieves debt resolution through a judicially confirmed IBC Repayment Plan (Section 114), a formal Discharge Order (Section 138), or an advocate-negotiated Bank One-Time Settlement (OTS), securing unassailable closure documentation is vital.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under <strong>RBI Circular RBI/2023-24/60</strong> (Responsible Lending Conduct – Release of Movable/Immovable Property Documents and Issuance of NDC), all commercial banks and NBFCs are bound by strict post-settlement regulatory obligations:
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Mandatory 30-Day Document Release &amp; ₹5,000/Day Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Lenders must return all original movable and immovable property title deeds, vacate registry charge liens, and issue an unambiguous zero-balance <strong>No Dues Certificate (NDC)</strong> within <strong>30 calendar days</strong> of receiving the full settlement remittance. Any unjustified delay mandates the lender to pay compensation at <strong>₹5,000 per calendar day</strong> of default to the borrower.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Credit Information Bureau (CIBIL) Trajectory &amp; Score Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers must understand the precise mechanism of credit bureau reporting after resolving insolvency or debt default:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Bureau Status Reporting:</strong> Following discharge or OTS remittance, the bank updates credit bureaus (CIBIL, Experian, Equifax, CRIF) with the official status remark <strong>&quot;Discharged&quot;</strong>, <strong>&quot;Settled&quot;</strong>, or <strong>&quot;Post-Write-off Settled&quot;</strong>, reflecting a current outstanding balance of <strong>₹0</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Cessation of Delinquency Compounding:</strong> While a settled remark triggers a temporary credit score drop, it permanently terminates compounding default records (90+ DPD) and eliminates legal litigation flags.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>12-Month Institutional Cooling Period:</strong> Under RBI guidelines, commercial lenders observe a 12-month cooling window before considering fresh unsecured commercial credit lines for settled individuals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Rebuilding a 750+ CIBIL Score:</strong> By utilizing secured credit cards backed by fixed deposits, maintaining credit utilization below 25%, and recording immaculate monthly payment discipline, settled debtors systematically restore their credit score above 750 within 18 to 24 months.</span>
                </li>
              </ul>
            </section>

            {/* Section 9: Dispute Resolution Comparative Matrix */}
            <section id="insolvency-comparative-resolution-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Dispute Resolution Comparative Matrix: IBC Personal Insolvency vs DRT OA vs Bank OTS vs Civil Suit
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating the strategic parameters across major Indian debt resolution mechanisms illustrates the comparative advantages of judicial discharge, tribunal defense, and advocate-led compromise settlements:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Mechanism</th>
                      <th>Statutory Governing Law</th>
                      <th>Typical Haircut Potential</th>
                      <th>Resolution Timeline</th>
                      <th>Key Legal Benefit &amp; Debtor Shield</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">IBC Personal Insolvency (IIRP)</td>
                      <td>IBC 2016 (Part III, Sections 94–120)</td>
                      <td>40% – 70% Restructuring Waiver</td>
                      <td>6 – 12 Months</td>
                      <td>Instant Section 96 interim moratorium; binding 75% creditor sanction</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">IBC Fresh Start Process</td>
                      <td>IBC 2016 (Chapter II, Sections 79–93)</td>
                      <td>100% Complete Write-Off</td>
                      <td>3 – 6 Months</td>
                      <td>Unconditional statutory debt discharge for low-income debtors</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Bank Compromise OTS Settlement</td>
                      <td>RBI Compromise Settlement Framework</td>
                      <td>35% – 60% Principal Haircut</td>
                      <td>2 – 4 Months</td>
                      <td>Fast out-of-court closure; zero court attendance; official ₹0 NDC</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">DRT Section 19 OA Defense</td>
                      <td>RDB Act, 1993</td>
                      <td>30% – 50% Compromise Haircut</td>
                      <td>18 – 36 Months</td>
                      <td>Defends claims &gt; ₹20L; prevents ex-parte Recovery Certificates</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Recovery Suit</td>
                      <td>Code of Civil Procedure, 1908</td>
                      <td>15% – 30% Waiver</td>
                      <td>4 – 7 Years</td>
                      <td>Lengthy trial; heavy court fees; defended via Leave to Defend</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Personal Insolvency Defense &amp; Institutional Debt Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating personal insolvency petitions, Debt Recovery Tribunal litigation, and complex bank compromise negotiations requires seasoned legal advocates who possess deep mastery of the Insolvency and Bankruptcy Code, banking regulations, and civil recovery laws. SettleLoans provides comprehensive legal defense for borrowers, corporate guarantors, and stressed individuals across India: invoking Section 96 interim moratoriums, auditing loan ledgers for illegal penal interest, representing clients before the DRT, and negotiating directly with bank Zonal Committees to deliver massive principal haircuts backed by authentic No Dues Certificates.
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
                  11. Frequently Asked Questions: Personal Insolvency &amp; Bankruptcy in India
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to critical questions regarding personal insolvency petitions, Section 96 interim moratoriums, DRT procedures, Fresh Start eligibility, and debt discharge orders in India.
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
                  href="https://www.indiacode.nic.in/handle/123456789/2154"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Insolvency and Bankruptcy Code, 2016 (Part III - Individual Insolvency)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://ibbi.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Insolvency and Bankruptcy Board of India (IBBI Official Portal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://drt.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Debt Recovery Tribunal (e-DRT Portal &amp; Insolvency Cause Lists)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in/supremecourt/2020/19086/19086_2020_33_1501_27993_Judgement_21-May-2021.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Supreme Court Ruling: Lalit Kumar Jain v. Union of India (Guarantor Insolvency)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Circular RBI/2023-24/60 (Responsible Lending &amp; 30-Day NDC Release Mandate)</span>
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
                  href="/drt-loan-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  DRT Loan Settlement Process
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/guarantor-liability-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Guarantor Liability Defense
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Bank Seize Property for Loan
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go to Jail for Loan Default
                </Link>
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Defense
                </Link>
                <Link
                  href="/auction-notice-challenge"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SARFAESI Auction Challenge
                </Link>
                <Link
                  href="/50-lakhs-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  50 Lakhs Loan Settlement Guide
                </Link>
                <Link
                  href="/1-crore-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  1 Crore Loan Settlement Guide
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
                <Link href="/authors/ashish-jhangra" className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                  AJ
                </Link>
                <div>
                  <Link href="/authors/ashish-jhangra" className="font-bold text-slate-900 text-sm hover:text-[#1F5EFF] transition-colors block">
                    Ashish Jhangra
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in IBC Part III personal insolvency defense, DRT litigation, corporate guarantor relief, banking NPA restructuring, and high-value debt compromise advisory with over a decade of commercial practice.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="font-semibold text-[#1F5EFF] hover:underline flex items-center gap-1">
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Urgent Insolvency Defense</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">Facing Insolvency Notices or Overwhelming Debt?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Trigger the Section 96 interim moratorium to freeze creditor lawsuits, halt recovery harassment, and negotiate a structured 40%–60% debt resolution.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Insolvency Consultation
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
                  <span>IBC 2016 &amp; DRT Procedure Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Legal Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Judicially Binding Discharge Orders</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Institutional OTS Negotiation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
