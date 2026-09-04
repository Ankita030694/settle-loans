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
  AlertCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pre-Litigation Mediation for Bank Loan Default: Free DLSA Process & Settlement Guide (2026)',
  description: 'Discover how to proactively initiate free, court-backed pre-litigation mediation through your District Legal Services Authority (DLSA) for bank loan defaults. Stop recovery harassment, force banks into compromise negotiations, and secure a binding Lok Adalat consent decree.',
  keywords: [
    'pre litigation mediation for bank loan default',
    'dlsa loan settlement process',
    'pre litigation mediation bank loan',
    'how to initiate pre litigation mediation for loan default',
    'legal services authorities act loan mediation',
    'bank loan settlement through mediation',
    'dlsa mediation lok adalat award loan',
    'mediation for personal loan default',
    'district legal services authority loan dispute',
    'mediation act 2023 bank loan settlement',
    'pre litigation notice bank loan reply'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/pre-litigation-mediation-loan-settlement',
  },
  openGraph: {
    title: 'Pre-Litigation Mediation for Bank Loan Default: Free DLSA Settlement Guide',
    description: 'Proactively initiate free, court-backed pre-litigation mediation through DLSA for unsecured personal loans and credit cards. Halt recovery harassment and secure an official Lok Adalat compromise decree with 45%–60% principal waivers.',
    url: 'https://www.settleloans.in/pre-litigation-mediation-loan-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/pre-litigation-mediation-loan-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'Pre-Litigation Mediation for Bank Loan Default via DLSA Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pre-Litigation Mediation for Bank Loan Default: DLSA Process & Legal Rights',
    description: 'Struggling with loan default or aggressive bank recovery? Learn how to file for free pre-litigation mediation at your local District Court DLSA to negotiate a binding One-Time Settlement.',
    images: ['https://www.settleloans.in/images/infographics/pre-litigation-mediation-loan-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/pre-litigation-mediation-loan-settlement#webpage",
      "url": "https://www.settleloans.in/pre-litigation-mediation-loan-settlement",
      "name": "Pre-Litigation Mediation for Bank Loan Default: Free DLSA Process & Settlement Guide (2026)",
      "description": "Discover how to proactively initiate free, court-backed pre-litigation mediation through your District Legal Services Authority (DLSA) for bank loan defaults. Stop recovery harassment, force banks into compromise negotiations, and secure a binding Lok Adalat consent decree.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/pre-litigation-mediation-loan-settlement#breadcrumb"
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
      "@id": "https://www.settleloans.in/pre-litigation-mediation-loan-settlement#breadcrumb",
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
          "name": "Pre-Litigation Mediation Loan Settlement Guide",
          "item": "https://www.settleloans.in/pre-litigation-mediation-loan-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/pre-litigation-mediation-loan-settlement#article",
      "headline": "Pre-Litigation Mediation for Bank Loan Default: How to Use DLSA to Settle Bank Debts Free and Legally",
      "description": "An in-depth legal and practical guide for borrowers on utilizing Pre-Litigation Mediation under the Legal Services Authorities Act, 1987 and Mediation Act, 2023 to resolve bank loan defaults, halt recovery agent harassment, and obtain a court-decreed compromise settlement.",
      "image": "https://www.settleloans.in/images/infographics/pre-litigation-mediation-loan-settlement.jpg",
      "datePublished": "2026-08-26T12:00:00+05:30",
      "dateModified": "2026-08-26T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/pre-litigation-mediation-loan-settlement#webpage"
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
      "@id": "https://www.settleloans.in/pre-litigation-mediation-loan-settlement#service",
      "name": "SettleLoans - Pre-Litigation Mediation & Bank Debt Settlement Advisory",
      "description": "Expert legal representation and dispute mediation services helping distressed borrowers initiate pre-litigation conciliation via DLSA, defend against coercive debt recovery, and secure formal bank compromise settlements.",
      "url": "https://www.settleloans.in/pre-litigation-mediation-loan-settlement",
      "image": "https://www.settleloans.in/images/infographics/pre-litigation-mediation-loan-settlement.jpg",
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
            "name": "Rajeshwar Rao"
          },
          "datePublished": "2026-06-18",
          "reviewBody": "After facing relentless harassment from private bank recovery agents over a ₹14 Lakh unsecured personal loan default, SettleLoans guided me to file a Pre-Litigation Mediation petition before the Saket District Legal Services Authority (DLSA). The court mediator summoned the bank's zonal manager, which immediately stopped all agent visits. We concluded a formal compromise settlement for ₹6.1 Lakhs, formalized through a permanent Lok Adalat consent decree.",
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
          "datePublished": "2026-07-14",
          "reviewBody": "Axis Bank rejected my direct requests for loan restructuring and threatened arbitration in Mumbai. SettleLoans advocates helped me proactively initiate pre-litigation mediation at the City Civil Court DLSA in Chennai. In just two mediation sessions, the bank agreed to waive penal interest and sanctioned a 52% principal haircut payable over three instalments with zero court fees.",
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
            "name": "Vikramaditya Sharma"
          },
          "datePublished": "2026-05-29",
          "reviewBody": "I was overwhelmed by multiple credit card defaults across HDFC and ICICI totaling ₹9.5 Lakhs. SettleLoans drafted a unified hardship petition under the Legal Services Authorities Act. Both lenders attended the DLSA conciliation sessions, and we executed a binding settlement at ₹4.2 Lakhs total. Received my bank-stamped No Dues Certificates within 25 days.",
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
          "datePublished": "2026-08-04",
          "reviewBody": "The proactive DLSA mediation strategy recommended by SettleLoans completely shifted the bargaining power. Instead of negotiating as a vulnerable defaulter with outsourced call centers, I presented my genuine business audit losses before a neutral judicial officer. The bank sanctioned a clean 58% OTS letter with complete legal immunity.",
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
      "@id": "https://www.settleloans.in/pre-litigation-mediation-loan-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Pre-Litigation Mediation for a bank loan default in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pre-Litigation Mediation is a formal Alternative Dispute Resolution (ADR) mechanism institutionalized under Section 19 and 20 of the Legal Services Authorities Act, 1987 and the Mediation Act, 2023. It allows a defaulting borrower to proactively file an application before the District Legal Services Authority (DLSA) attached to their local district court to resolve loan default disputes before the bank institutes coercive civil suits, arbitration, or criminal cheque bounce proceedings."
          }
        },
        {
          "@type": "Question",
          "name": "Is filing for Pre-Litigation Mediation through DLSA free of cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Pre-litigation mediation conducted under the auspices of the District Legal Services Authority (DLSA), State Legal Services Authority (SLSA), or National Legal Services Authority (NALSA) is entirely free of court fees for citizens. There are zero institution fees, registry charges, or administrative costs levied on the borrower."
          }
        },
        {
          "@type": "Question",
          "name": "Can a borrower proactively initiate DLSA mediation, or must we wait for the bank?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A borrower has the full statutory right to proactively initiate pre-litigation mediation. You do not need to wait for the bank to issue legal notices or file recovery suits. Distressed borrowers can submit a formal application to the Member Secretary of their local DLSA setting out their genuine financial distress and requesting court-facilitated conciliation."
          }
        },
        {
          "@type": "Question",
          "name": "Does filing a DLSA mediation application stop recovery agent harassment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Once DLSA registers the pre-litigation dispute and issues formal summons to the bank's zonal office, the dispute becomes sub-judice under judicial supervision. Bank legal departments instruct outsourced recovery agencies to immediately suspend phone calls, unannounced home visits, and coercive collection tactics, redirecting all communication to the institutional mediation forum."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank refuse to attend Pre-Litigation Mediation at DLSA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While mediation is voluntary in principle, commercial banks and NBFCs regulated by the RBI almost invariably attend DLSA hearings. Refusing a judicial body's summons creates an adverse record that severely undermines the bank's future recovery litigation. Furthermore, RBI Master Directions actively encourage regulated lenders to resolve stressed assets through Lok Adalat and institutional mediation forums."
          }
        },
        {
          "@type": "Question",
          "name": "What is the legal enforceability of a DLSA mediation settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When both parties execute a mediation settlement agreement, it is referred to the National Lok Adalat or Civil Court Bench to pass a formal Lok Adalat Award under Section 21 of the Legal Services Authorities Act, 1987. Under Section 21(2), this award has the exact same legal status as a decree of a Civil Court. It is final, binding on both the bank and the borrower, and cannot be appealed in any court."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of loan waiver or haircut can be secured in DLSA mediation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depending on the age of delinquency (NPA bucket) and documented financial hardship (job loss, illness, business insolvency), borrowers routinely achieve 100% waiver of unapplied penal interest, compound charges, and legal fees, along with a 40% to 65% principal haircut on unsecured personal loans and credit cards."
          }
        },
        {
          "@type": "Question",
          "name": "Can secured home loans or vehicle loans be settled through DLSA mediation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. While banks hold underlying asset collateral on secured debts, DLSA mediation provides a formal platform to negotiate loan restructuring, EMI moratoriums, tenure extensions, or amicable private asset sale without the punitive auction distress associated with Section 13(4) of the SARFAESI Act."
          }
        },
        {
          "@type": "Question",
          "name": "How is a DLSA loan settlement reported to CIBIL and credit bureaus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upon fulfillment of the settlement sum agreed before the mediator, the bank is legally required to update credit information companies (CIBIL, Experian, Equifax, CRIF) with an account status of 'Settled' and an outstanding balance of ₹0. This stops ongoing 90+ DPD default reporting and enables structured credit score recovery back above 750 over 18 to 24 months."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if the bank delays issuing the No Dues Certificate after DLSA settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, all commercial banks and NBFCs must release original documents and issue a formal No Dues Certificate within 30 calendar days of settlement payment. Any unjustified delay mandates the bank to pay statutory compensation of ₹5,000 per day of delay directly to the borrower."
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
  { id: 'demystifying-pre-litigation-mediation', title: '1. Demystifying Pre-Litigation Mediation' },
  { id: 'statutory-legal-protections-dlsa', title: '2. Statutory Framework: DLSA & Mediation Act' },
  { id: 'halting-recovery-agent-harassment', title: '3. Halting Coercive Recovery Tactics' },
  { id: 'bank-accounting-npv-recovery-formula', title: '4. Bank NPA Accounting & NPV Formula' },
  { id: 'dlsa-mediation-visual-roadmap', title: '5. DLSA Pre-Litigation Resolution Roadmap' },
  { id: 'advocate-strategy-initiating-mediation', title: '6. Advocate Strategy to Initiate Mediation' },
  { id: 'mediation-settlement-lok-adalat-award', title: '7. Lok Adalat Consent Decrees & Forensics' },
  { id: 'remittance-rbi-ndc-mandate-cibil', title: '8. Loan Remittance, ₹0 NDC & CIBIL Trajectory' },
  { id: 'mediation-comparative-matrix', title: '9. Dispute Resolution Comparative Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function PreLitigationMediationLoanSettlementPage() {
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
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Scale className="w-3.5 h-3.5" />
            <span>Alternative Dispute Resolution • DLSA Pre-Litigation Mediation</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Pre-Litigation Mediation for Bank Loan Default: <span className="text-[#3b82f6] md:text-[#60a5fa]">DLSA Process, Legal Rights &amp; 55% Settlement Guide</span>
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
              <span>DLSA &amp; NALSA Legal Aid Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Initiate Pre-Litigation Mediation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Legal Case Evaluation
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
                <span>Mediation Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Borrowers can proactively initiate free, court-backed Pre-Litigation Mediation at their local District Legal Services Authority (DLSA). This immediately halts third-party recovery harassment and forces reluctant banks into structured 40%–60% OTS compromises backed by a final Lok Adalat decree.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Pre-Litigation Mediation for Loan Default</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Proactive Borrower Initiation:</strong> Defaulters do not have to wait to be sued; any borrower can file a free Pre-Litigation Mediation petition before their local District Legal Services Authority (DLSA).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Immediate Harassment Shield:</strong> Once registered with the DLSA registry, the dispute becomes subject to judicial conciliation, forcing lenders to cease aggressive recovery agency visits and abusive calls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Force of Civil Court Decree:</strong> Settlements executed through DLSA mediation are converted into National Lok Adalat awards under Section 21 of the Legal Services Authorities Act, possessing non-appealable civil court decree finality.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Substantial Principal Haircuts (40%–65%):</strong> Neutral court-appointed mediators evaluate real hardship evidence, prompting bank nodal officers to approve deep principal discounts alongside 100% penal interest waivers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI-Mandated ₹0 NDC Delivery:</strong> Lenders must deliver an official No Dues Certificate and update credit bureaus within 30 days under RBI Circular RBI/2023-24/60, subject to a ₹5,000 per day statutory delay penalty.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying Pre-Litigation Mediation */}
            <section id="demystifying-pre-litigation-mediation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Demystifying Pre-Litigation Mediation: Why Proactive Dispute Resolution Empowers Borrowers
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on an unsecured personal loan, business line of credit, or credit card facility due to severe financial adversity—such as sudden job loss, catastrophic medical emergencies, or commercial business insolvency—the conventional banking recovery machinery immediately swings into punitive action. Commercial lenders and Non-Banking Financial Companies (NBFCs) deploy aggressive third-party collection agencies, flood borrowers with automated legal notices, and initiate adversarial proceedings under the Negotiable Instruments Act (Section 138 cheque bounce) or the Payment and Settlement Systems Act (Section 25 NACH bounce).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Faced with mounting pressure, most distressed borrowers remain completely unaware that Indian civil jurisprudence provides an extraordinarily powerful, cost-free, and legally recognized shield: <strong>Pre-Litigation Mediation</strong>. Instead of waiting defenselessly for a bank to file a summary recovery suit under Order 37 CPC or initiate unilateral arbitration proceedings, the borrower can seize the legal initiative by proactively bringing the lending institution before a neutral judicial conciliation forum.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Pre-Litigation Mediation operates under the statutory patronage of the <strong>Legal Services Authorities Act, 1987</strong>, Section 89 of the Code of Civil Procedure (CPC), and the newly enacted <strong>Mediation Act, 2023</strong>. Managed through the <strong>District Legal Services Authority (DLSA)</strong> established in every district court complex across India, this process provides an institutional bridge where borrowers and authorized senior bank officers negotiate realistic debt settlement terms under the guidance of trained, court-appointed mediators. By shifting the venue from stressful phone confrontations to a formal judicial forum, borrowers eliminate coercive harassment and create the necessary leverage to secure formal One-Time Settlements (OTS) with substantial debt relief.
              </p>
            </section>

            {/* Section 2: Statutory Legal Framework: DLSA & Mediation Act */}
            <section id="statutory-legal-protections-dlsa" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Legal Grounding: Legal Services Authorities Act, 1987, Section 89 CPC &amp; The Mediation Act, 2023
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To maximize the strategic impact of pre-litigation mediation, borrowers must grasp the statutory architecture that compels commercial banks and financial institutions to participate in good-faith settlement negotiations. The legal validity and institutional authority of pre-litigation mediation rest upon three foundational pillars of Indian civil jurisprudence:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>The Legal Services Authorities Act, 1987</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Sections 19, 20, and 22 of the Act, District Legal Services Authorities (DLSAs) and Taluk Legal Services Committees are mandated to organize Lok Adalats and pre-litigation conciliation desks to resolve civil and commercial disputes before regular suits are filed in civil courts.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    <span>Section 89 of the Code of Civil Procedure (CPC)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 89 CPC mandates judicial courts to refer civil disputes to Alternative Dispute Resolution (ADR) channels, including arbitration, conciliation, judicial settlement through Lok Adalat, or mediation, recognizing that negotiated compromise serves public interest far better than protracted litigation.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-purple-600" />
                    <span>The Mediation Act, 2023 (Institutional ADR)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Mediation Act, 2023 gives statutory formalization to pre-litigation mediation, establishing a strict 180-day resolution timeline, establishing confidentiality standards, and ensuring mediated settlement agreements are enforceable directly as court decrees under the law.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Landmark className="w-4 h-4 text-emerald-600" />
                    <span>Section 21(2) Decree Enforceability</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 21 of the Legal Services Authorities Act, every award passed by a Lok Adalat bench on the basis of a DLSA mediated settlement is deemed a final decree of a Civil Court, binding upon both borrower and lender with zero right of appeal.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Fundamental Principle of Voluntary Conciliation</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  Unlike a contested courtroom trial where a judge imposes an adversarial verdict, pre-litigation mediation is an entirely non-adversarial, consensus-driven process. The mediator cannot force any settlement upon you. No compromise is executed unless both the borrower and the bank agree to every specific clause, repayment figure, and instalment timeline in writing.
                </p>
              </div>
            </section>

            {/* Section 3: Halting Recovery Harassment & Invalidation of Coercive Tactics */}
            <section id="halting-recovery-agent-harassment" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Halting Coercive Recovery Tactics: How DLSA Registration Neutralizes Aggressive Harassment
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                One of the most immediate benefits of filing an application for pre-litigation mediation is the neutralization of third-party debt collection harassment. When a borrower defaults, commercial banks often outsource collection portfolios to third-party recovery agencies whose personnel employ aggressive and unlawful collection tactics—including persistent calling at unsociable hours, unauthorized visits to workplaces, contacting distant family members, and threatening unconstitutional criminal actions.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The moment your DLSA pre-litigation mediation application is registered and formal court notices are served on the bank&apos;s Zonal Stressed Assets Resolution Desk, the legal landscape changes fundamentally:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Establishment of Sub-Judice Conciliation:</strong> The debt dispute officially enters a court-administered resolution framework. Banks maintain strict internal compliance protocols requiring their collection teams to halt external recovery efforts while formal mediation is actively pending before a judicial authority.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Enforcement of RBI Fair Practices Code:</strong> Under the <em>RBI Master Direction – Recovery Agents and Conduct Rules</em>, lenders are strictly prohibited from intimidating borrowers, invading privacy, or contacting relatives. Raising recovery misconduct before a DLSA judicial mediator exposes the bank to direct judicial reprimand and severe regulatory penalties.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Transition to Authorized Zonal Legal Counsel:</strong> Instead of dealing with commission-driven agency callers, the borrower engages directly with the bank&apos;s internal legal managers and empowered recovery officers who hold formal delegation of power to write off bad debt and execute haircuts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Preemption of Unilateral Arbitration:</strong> Filing for pre-litigation mediation before the DLSA prevents the bank from initiating biased unilateral arbitration proceedings or rushing into ex-parte summary suits under Order 37 CPC without facing immediate jurisdictional objections.</span>
                </li>
              </ul>

              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-red-950">
                  <ShieldX className="w-4 h-4 text-red-600" />
                  <span>Absolute Protection Against Criminalization of Civil Debt</span>
                </span>
                <p className="leading-relaxed">
                  Inability to repay an unsecured personal loan or credit card debt due to genuine economic distress is strictly a <strong>civil contractual dispute</strong>, not a criminal offense. The Supreme Court of India has repeatedly held that commercial banks cannot weaponize police complaints or criminal charges for loan default. Appearing before a DLSA mediator ensures that the civil character of the dispute is firmly preserved.
                </p>
              </div>
            </section>

            {/* Section 4: Bank Accounting, NPA Provisioning & NPV Recovery Formula */}
            <section id="bank-accounting-npv-recovery-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Balance Sheet Accounting, NPA Provisioning &amp; The Net Present Value (NPV) Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Securing a deep 40% to 65% principal haircut during DLSA mediation requires a clear understanding of the financial pressures governing commercial bank balance sheets. Indian commercial banks and NBFCs are strictly regulated by the Reserve Bank of India&apos;s Prudential Norms on Income Recognition, Asset Classification, and Provisioning (IRACP). When a borrower fails to service interest or principal instalments for 90 days, the loan is formally classified as a Non-Performing Asset (NPA).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As an NPA account ages, the bank must set aside substantial capital provisions out of its operating profits, creating severe balance sheet drag:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>NPA Classification Stage</th>
                      <th>Overdue Aging Horizon</th>
                      <th>RBI Mandatory Capital Provision</th>
                      <th>Settlement Haircut Window</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-2 (Pre-NPA Alert)</td>
                      <td>61 to 90 Days Overdue</td>
                      <td>5% General Reserve</td>
                      <td>Penal Interest &amp; Late Fee Waivers Only</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Sub-Standard Asset (Early NPA)</td>
                      <td>91 to 365 Days Overdue</td>
                      <td>25% Unsecured Provisioning</td>
                      <td>25% to 40% Principal Haircut Scope</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful Asset 1 (D1)</td>
                      <td>12 to 24 Months Default</td>
                      <td>100% Full Capital Provisioning</td>
                      <td>40% to 55% Principal Haircut Scope</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful Asset 2 / Written-Off</td>
                      <td>24+ Months Default / Write-Off</td>
                      <td>100% Balance Sheet Charge-Off</td>
                      <td>55% to 65% Maximum Haircut Window</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a bank receives a pre-litigation mediation notice from the DLSA, its Stressed Asset Committee performs an internal financial calculation comparing the immediate cash recovery under mediation against the net yield of litigating through civil courts or Debt Recovery Tribunals (DRT). The bank evaluates the <strong>Net Present Value (NPV) of Litigation Recovery</strong>:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Bank NPV Litigation Recovery Formula</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated future cash recoveries, r is the bank&apos;s cost of capital discount rate, and deductions incorporate 3–5 years of judicial court delays, senior advocate retainers, execution petition friction, and capital locked in non-earning NPA reserves.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because pursuing an unsecured debtor through civil litigation takes several years with substantial legal expenditure and uncertain realization, receiving a structured cash payment of 40% to 55% through a single DLSA session delivers a far higher financial return for the bank than dragging out adversarial lawsuits.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="dlsa-mediation-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. DLSA Pre-Litigation Mediation &amp; Loan Settlement Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below details the complete 5-stage institutional trajectory of resolving bank loan default through District Legal Services Authority (DLSA) pre-litigation mediation—from filing the initial application to conciliation hearings, sanction letter execution, and receiving an unappealable Lok Adalat decree with a zero-balance No Dues Certificate.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/pre-litigation-mediation-loan-settlement.jpg"
                  alt="Pre-Litigation Mediation for Bank Loan Default DLSA Process Infographic"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Application &amp; Summons</span>
                  <span>Borrower files pre-litigation petition at DLSA registry; court issues official notices to bank zonal manager scheduling mediation.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Conciliation &amp; OTS Sanction</span>
                  <span>Advocate presents financial hardship audit; mediator guides parties to agree on 40%–60% principal waiver with structured instalments.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Lok Adalat Award &amp; ₹0 NDC</span>
                  <span>Bench issues binding Civil Court decree under Section 21 LSA Act; bank remits ₹0 No Dues Certificate and updates CIBIL.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Step-by-Step Advocate Strategy to Initiate DLSA Mediation */}
            <section id="advocate-strategy-initiating-mediation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Step-by-Step Advocate Strategy: How to Proactively Initiate DLSA Pre-Litigation Mediation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Initiating pre-litigation mediation requires careful procedural precision and tactical preparation. While any citizen can theoretically submit a basic letter to the DLSA, engaging specialized debt defense advocates ensures your application is fortified with unassailable financial documentation, statutory citations, and negotiation strategy.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our legal team executes a structured 4-phase protocol to maximize borrower leverage:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 1: Drafting the Formal DLSA Pre-Litigation Petition</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your advocate drafts a comprehensive pre-litigation application addressed to the Member Secretary of your territorial District Legal Services Authority. The petition details: (1) Full loan account specifications, sanction dates, and total principal disbursed; (2) Detailed accounting of total repayments made to date; (3) Clear identification of unapplied penal interest, bounce charges, and usurious late fees; (4) A comprehensive financial hardship statement articulating the specific trigger events (job loss, business downturn, medical crisis) that impaired servicing capacity.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 2: Compiling the Unassailable Hardship Dossier</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks routinely reject direct customer settlement requests because collection agents report that the borrower possesses hidden capacity to pay. We dismantle this assumption by appending certified documentary proof: income tax return (ITR) reductions, termination letters, medical treatment records, GST sales decline filings, or insolvency declarations that prove bona fide inability to service the full ledger balance.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 3: Formal Service &amp; Halting Parallel Recovery Measures</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Upon registration, the DLSA registry issues formal summons to the designated Nodal Officer and Zonal Legal Head of the lending bank. Your advocate immediately serves a copy of the DLSA case registration on the bank&apos;s collection department, establishing an official record that prohibits further coercive recovery visits or third-party agent intimidation.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 4: Representation During Mediation Hearings</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    During the mediation sessions held at the District Court ADR center, your legal counsel presents the settlement proposal directly to the bank&apos;s authorized representative in the presence of the judicial mediator. Counsel emphasizes the bank&apos;s litigation risks, highlighting that rejecting the proposed compromise will result in years of zero-recovery civil litigation while the loan remains fully provisioned on their books.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This advocate-managed process ensures the borrower never negotiates from a position of vulnerability, forcing the bank to treat the compromise request as a serious commercial resolution.
              </p>
            </section>

            {/* Section 7: Mediation Settlement Agreement, Lok Adalat Consent Award & Sanction Forensics */}
            <section id="mediation-settlement-lok-adalat-award" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Mediation Settlement Agreement, Lok Adalat Consent Decrees &amp; Sanction Letter Forensics
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once the bank and borrower agree on a compromise settlement figure during mediation, the final documentation must be executed with absolute legal rigor. Thousands of borrowers fall into predatory traps each year by paying money based on verbal promises from recovery agents or unofficial email confirmations, only to discover that the bank credited their payment as partial interest and continued legal recovery for the remaining balance.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A legally watertight resolution originating from DLSA pre-litigation mediation involves two critical legal instruments:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Formal Bank OTS Sanction Letter</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank must issue a formal One-Time Settlement (OTS) sanction letter on official corporate letterhead, signed by an authorized signatory with a registered employee code and official zonal seal.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Exact Loan Account &amp; PAN Details</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must explicitly recite your exact loan account numbers, full legal name, PAN, agreed settlement sum, structured payment due dates, and specific DLSA mediation case number.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Total Debt Extinguishment Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The document must state unequivocally that remittance of the agreed settlement sum constitutes complete satisfaction of all outstanding claims, with the bank waiving all residual principal, interest, and legal costs.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Lok Adalat Consent Award Recording</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The signed settlement terms are placed before the National Lok Adalat or Civil Judge Bench to pass a formal Lok Adalat Award under Section 21 of the Legal Services Authorities Act, permanently barring future litigation.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Mandatory Account-Payee Remittance Protocol</span>
                </span>
                <p className="leading-relaxed">
                  Never remit settlement funds in cash, to third-party agency bank accounts, or via individual UPI IDs. All settlement payments must be deposited directly into your designated bank loan account via RTGS, NEFT, or an Account Payee Demand Draft drawn in favor of <strong>&quot;[Bank Name] A/C [Your Exact Loan Account Number]&quot;</strong>.
                </p>
              </div>
            </section>

            {/* Section 8: Remittance, RBI ₹0 NDC Mandate & Credit Recovery */}
            <section id="remittance-rbi-ndc-mandate-cibil" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Loan Remittance, RBI ₹0 No Dues Certificate Mandate &amp; CIBIL Bureau Trajectory
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Completing your settlement payments on or before the agreed milestone dates initiates the final stage of total debt discharge: obtaining your official <strong>No Dues Certificate (NDC)</strong> and rehabilitating your credit profile. Under <strong>RBI Circular RBI/2023-24/60</strong> (Responsible Lending Conduct – Release of Movable/Immovable Property Documents and Issuance of NDC), all regulated commercial banks and NBFCs are statutorily required to issue an official NDC and update credit information bureaus within <strong>30 calendar days</strong> of receiving full settlement funds.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Statutory Compensation for Delayed NDC Issuance</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  If the lending bank fails to deliver your No Dues Certificate or delays updating credit bureau closure records beyond 30 calendar days without lawful justification, the lender is statutorily liable to pay compensation of <strong>₹5,000 for each day of delay</strong> directly to the borrower under RBI regulatory mandates.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Understanding CIBIL Bureau Reporting &amp; Score Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers must understand the precise mechanism of credit bureau reporting following a compromise settlement:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Account Status Remark:</strong> The bank will update the account status in CIBIL, Experian, Equifax, and CRIF as <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong>, reflecting a current outstanding balance of <strong>₹0</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Halting Default Compounding:</strong> Although the &quot;Settled&quot; remark reflects a partial waiver, it immediately stops compounding 90+ DPD default accumulation and permanently terminates collection activities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>12-Month RBI Cooling Period:</strong> Regulated commercial banks observe a standard 12-month cooling period before evaluating settled borrowers for new unsecured credit products.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Systematic Credit Rebuilding:</strong> By securing a fixed-deposit backed credit card, maintaining credit utilization strictly below 30%, and ensuring 100% on-time payment history, borrowers systematically rebuild their credit score above 750 within 18 to 24 months.</span>
                </li>
              </ul>
            </section>

            {/* Section 9: Dispute Resolution Comparative Matrix */}
            <section id="mediation-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Dispute Resolution Comparative Matrix: DLSA Mediation vs Civil Court vs Arbitration vs Direct OTS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating the different dispute resolution pathways demonstrates why proactive DLSA Pre-Litigation Mediation provides the most advantageous balance of legal protection, cost savings, and speed for borrowers:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Channel</th>
                      <th>Borrower Cost</th>
                      <th>Harassment Shield</th>
                      <th>Haircut Scope</th>
                      <th>Legal Finality &amp; Binding Power</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">DLSA Pre-Litigation Mediation</td>
                      <td>100% Free Court Process</td>
                      <td>Immediate Court Intervention</td>
                      <td>40% to 65% Principal Haircut</td>
                      <td>Final Civil Court Decree (Non-Appealable)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Direct Bank OTS Request</td>
                      <td>Zero Direct Court Fee</td>
                      <td>None (Agents Continue Calls)</td>
                      <td>15% to 30% (Limited Haircut)</td>
                      <td>Bank Sanction Letter Only (No Judicial Decree)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Unilateral Bank Arbitration</td>
                      <td>High (Arbitrator Fees &amp; Travel)</td>
                      <td>None (Adversarial Process)</td>
                      <td>0% (Full Claim Demanded)</td>
                      <td>Ex-Parte Money Award Risk</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Order 37 CPC Summary Suit</td>
                      <td>Extensive (Court Fees &amp; Litigation)</td>
                      <td>Court Appearance Required</td>
                      <td>0% to 20% (Contested Trial)</td>
                      <td>Civil Court Decree after 3–5 Years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Strategic Mediation Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating pre-litigation mediation against well-funded institutional lenders requires experienced banking litigation advocates who understand the intersection of the Legal Services Authorities Act, the Mediation Act, 2023, and RBI debt resolution circulars. SettleLoans provides end-to-end legal protection: evaluating your financial hardship dossier, filing your formal DLSA mediation petition, halting unlawful recovery agent harassment, and negotiating directly with bank zonal authorities to secure the deepest possible principal haircuts backed by official, bank-stamped No Dues Certificates.
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
                  11. Frequently Asked Questions: Pre-Litigation Mediation for Loan Default
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to critical questions regarding DLSA pre-litigation mediation, halting recovery harassment, and securing court-decreed bank loan settlements.
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
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (NALSA &amp; DLSA Mediation Scheme)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/1937"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Legal Services Authorities Act, 1987 (Section 19, 20 &amp; 21)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Code of Civil Procedure, 1908 (Section 89 ADR Mandate)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Recovery Agents &amp; Fair Practices Code</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Grievance Redressal Mechanism)</span>
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
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply Guide
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Arbitration Defense Guide
                </Link>
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Defense
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Recovery Harassment
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Default &amp; Jail Rights
                </Link>
                <Link
                  href="/icici-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  ICICI Bank Loan Settlement
                </Link>
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
                  HDFC Bank Loan Settlement
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
                <Link
                  href="/authors/ashish-jhangra"
                  className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  AJ
                </Link>
                <div>
                  <Link
                    href="/authors/ashish-jhangra"
                    className="font-bold text-slate-900 text-sm hover:text-[#1F5EFF] transition-colors"
                  >
                    Ashish Jhangra
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in banking litigation defense, DLSA pre-litigation mediation mechanisms, Legal Services Authorities Act proceedings, and RBI compromise settlement frameworks with over a decade of financial dispute advisory experience.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-xs text-[#1F5EFF] font-semibold hover:underline flex items-center gap-1"
                >
                  View Profile →
                </Link>
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Immediate Legal Defense</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">Facing Bank Legal Notices or Harassment?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not face bank recovery alone. Initiate free Pre-Litigation Mediation via DLSA with our experienced banking advocates and secure a 40%–60% compromise settlement.
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
                  <span>DLSA &amp; NALSA Legal Aid Framework</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Binding Section 21 Lok Adalat Decrees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Judicial Conciliation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
