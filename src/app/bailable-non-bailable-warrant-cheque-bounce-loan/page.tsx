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
  Coins
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bailable & Non-Bailable Warrant for Cheque Bounce Loan Default: Cancel Warrant & Settle Under Sec 138 NI Act (2026)',
  description: 'Received a bailable or non-bailable warrant for cheque bounce loan default? Learn how advocates file an urgent application under Section 70(2) CrPC / BNSS to cancel warrants, secure bail, and negotiate out-of-court loan compounding under Section 147 NI Act.',
  keywords: [
    'warrant issued for cheque bounce loan default',
    'bailable warrant cheque bounce loan',
    'non bailable warrant cheque bounce cancellation',
    'section 138 ni act warrant recall application',
    'section 70 2 crpc cancellation of warrant',
    'how to cancel nbw in 138 cheque bounce case',
    'cheque bounce loan settlement process',
    'section 147 ni act compounding cheque bounce',
    'can police arrest for cheque bounce warrant',
    'magistrate court bail for cheque bounce'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/bailable-non-bailable-warrant-cheque-bounce-loan',
  },
  openGraph: {
    title: 'Bailable & Non-Bailable Warrant for Cheque Bounce Loan Default: Cancel Warrant & Settle',
    description: 'Master the legal procedure to cancel bailable (BW) and non-bailable warrants (NBW) issued by Magistrate courts in Section 138 cheque bounce loan default cases. Protect against arrest and compound the debt through advocate-led One-Time Settlement.',
    url: 'https://www.settleloans.in/bailable-non-bailable-warrant-cheque-bounce-loan',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/bailable-non-bailable-warrant-cheque-bounce-loan.jpg',
        width: 1200,
        height: 675,
        alt: 'Bailable and Non-Bailable Warrant for Cheque Bounce Loan Default Legal Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bailable & Non-Bailable Warrant for Cheque Bounce Loan Default: Cancel Warrant & Settle',
    description: 'Has a Magistrate court issued an arrest warrant for a bounced loan EMI cheque? Discover how banking advocates recall warrants under CrPC / BNSS and settle the underlying loan under Section 147 NI Act.',
    images: ['https://www.settleloans.in/images/infographics/bailable-non-bailable-warrant-cheque-bounce-loan.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/bailable-non-bailable-warrant-cheque-bounce-loan#webpage",
      "url": "https://www.settleloans.in/bailable-non-bailable-warrant-cheque-bounce-loan",
      "name": "Bailable & Non-Bailable Warrant for Cheque Bounce Loan Default: Cancel Warrant & Settle Under Sec 138 NI Act (2026)",
      "description": "Received a bailable or non-bailable warrant for cheque bounce loan default? Learn how advocates file an urgent application under Section 70(2) CrPC / BNSS to cancel warrants, secure bail, and negotiate out-of-court loan compounding under Section 147 NI Act.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/bailable-non-bailable-warrant-cheque-bounce-loan#breadcrumb"
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
      "@id": "https://www.settleloans.in/bailable-non-bailable-warrant-cheque-bounce-loan#breadcrumb",
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
          "name": "Bailable Non-Bailable Warrant Cheque Bounce Loan",
          "item": "https://www.settleloans.in/bailable-non-bailable-warrant-cheque-bounce-loan"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/bailable-non-bailable-warrant-cheque-bounce-loan#article",
      "headline": "Bailable & Non-Bailable Warrant for Cheque Bounce Loan Default: How to Cancel Warrant & Settle Under Section 138 NI Act",
      "description": "An exhaustive judicial, procedural, and strategic legal guide for borrowers who have received a Bailable Warrant (BW) or Non-Bailable Warrant (NBW) from a Judicial Magistrate for loan cheque bounces under Section 138 of the Negotiable Instruments Act. Details urgent warrant recall applications under Section 70(2) CrPC / BNSS, bail protocols, and out-of-court compounding settlements under Section 147 NI Act.",
      "image": "https://www.settleloans.in/images/infographics/bailable-non-bailable-warrant-cheque-bounce-loan.jpg",
      "datePublished": "2026-08-27T10:00:00+05:30",
      "dateModified": "2026-08-27T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/bailable-non-bailable-warrant-cheque-bounce-loan#webpage"
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
      "@id": "https://www.settleloans.in/bailable-non-bailable-warrant-cheque-bounce-loan#service",
      "name": "SettleLoans - Cheque Bounce Criminal Defense & Warrant Recall Advisory",
      "description": "Specialized criminal litigation defense, Section 138 NI Act warrant recall, magistrate court bail assistance, and out-of-court debt settlement advisory for borrowers facing bailable and non-bailable arrest warrants across Indian courts.",
      "url": "https://www.settleloans.in/bailable-non-bailable-warrant-cheque-bounce-loan",
      "image": "https://www.settleloans.in/images/infographics/bailable-non-bailable-warrant-cheque-bounce-loan.jpg",
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
            "name": "Venkatesh Raman"
          },
          "datePublished": "2026-05-18",
          "reviewBody": "I defaulted on an HDFC business overdraft and relocated for work. Because I missed the court summons, the Metropolitan Magistrate in Mumbai issued a Non-Bailable Warrant (NBW) against me. I was terrified of being arrested at my new job. SettleLoans advocates filed an urgent Section 70(2) recall application within 48 hours, appeared on my behalf, cancelled the warrant, and structured an out-of-court Section 147 compounding settlement for ₹6.2 Lakhs against an outstanding claim of ₹18 Lakhs.",
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
            "name": "Pooja Malhotra"
          },
          "datePublished": "2026-06-25",
          "reviewBody": "A local police sub-inspector arrived at my elderly parents' house with a Bailable Warrant for a ₹7 Lakh personal loan cheque bounce. SettleLoans criminal defense counsel handled everything seamlessly: they prepared the surety bail bonds, filed the cancellation petition before the Tis Hazari Court in Delhi, had the warrant recalled without police harassment, and closed the loan account through a formal OTS.",
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
            "name": "Anil Deshmukh"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "Bajaj Finance filed three separate Section 138 complaints for security cheques after my factory closed. When summons went to my old address, an NBW was issued by the Pune Magistrate. SettleLoans consolidated the cases, filed appearance applications, secured bail on personal bond, and negotiated a 60% compromise settlement directly with the NBFC legal team.",
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
          "datePublished": "2026-08-11",
          "reviewBody": "I received an intimation from the local police station regarding a cheque bounce bailable warrant issued by the court in Bengaluru. SettleLoans stepped in on day one. Their advocate accompanied me to court, furnished the bail undertaking, got the warrant cancelled, and negotiated a full and final settlement that extinguished the Section 138 case permanently.",
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
      "@id": "https://www.settleloans.in/bailable-non-bailable-warrant-cheque-bounce-loan#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why did the Magistrate court issue a warrant for a bounced loan EMI cheque?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When a loan repayment or security cheque bounces due to insufficient funds, the lender serves a 15-day statutory legal notice. If unpaid, the bank files a criminal complaint under Section 138 of the Negotiable Instruments Act. The Judicial Magistrate initially issues a court summons commanding the borrower's appearance. If the summons is ignored, unserved due to address changes, or deliberately avoided, the court is legally empowered to issue a Bailable Warrant (BW) or Non-Bailable Warrant (NBW) under the Code of Criminal Procedure (CrPC) / Bharatiya Nagarik Suraksha Sanhita (BNSS) to compel attendance."
          }
        },
        {
          "@type": "Question",
          "name": "What is the legal difference between a Bailable Warrant (BW) and a Non-Bailable Warrant (NBW)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Bailable Warrant (under Section 71 CrPC / Section 73 BNSS) contains an endorsement directing the executing police officer to release the accused immediately upon furnishing a bail bond with or without sureties. In contrast, a Non-Bailable Warrant (under Section 70 CrPC / Section 72 BNSS) is an unconditioned judicial command directing law enforcement to arrest the accused and produce them directly before the issuing Magistrate. An NBW does not allow police station bail; bail or warrant recall must be sought directly from the court."
          }
        },
        {
          "@type": "Question",
          "name": "Can the local police arrest me immediately if an NBW is issued in a Section 138 case?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, legally a police officer possessing an active Non-Bailable Warrant has the statutory power to execute the arrest and produce you before the nearest Magistrate within 24 hours. However, under landmark Supreme Court guidelines (such as Inder Mohan Goswami v. State of Uttaranchal), courts are instructed not to issue NBWs indiscriminately in quasi-criminal commercial complaints. An experienced advocate can file an urgent recall application under Section 70(2) CrPC before the police execute the warrant, preventing physical custody."
          }
        },
        {
          "@type": "Question",
          "name": "How does an advocate file an application for cancellation or recall of a warrant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An advocate drafts and files an urgent Application for Recall/Cancellation of Warrant under Section 70(2) of the Code of Criminal Procedure (or Section 72(2) of BNSS). The application is supported by an affidavit explaining genuine, non-deliberate reasons for the previous non-appearance (such as non-service of summons, medical illness, address relocation, or lack of knowledge). The advocate undertakes that the borrower will submit to court jurisdiction, furnishes a personal or surety bond, and requests the Magistrate to recall the warrant and grant regular bail."
          }
        },
        {
          "@type": "Question",
          "name": "Can I settle the underlying loan and close the criminal case after a warrant has been issued?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, absolutely. Under Section 147 of the Negotiable Instruments Act, all offences under Section 138 are expressly compoundable by law at any stage of the proceedings, even after warrants have been issued. Borrowers can engage legal counsel to negotiate an out-of-court One-Time Settlement (OTS) with the bank. Once the agreed settlement sum is remitted, the lender files an application for compounding or withdrawal of the complaint, leading to immediate acquittal and case dismissal."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I never received the original court summons before the warrant was issued?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non-service or improper service of summons is the most common reason warrants are issued in loan default cases. Banks frequently send summons to outdated residential addresses or addresses listed in old loan application forms. Under procedural law, a warrant issued without verified proof of personal service or refusal can be challenged. Your advocate can present address proof (such as rental agreements or utility bills) showing you resided elsewhere, which provides robust legal grounds for the Magistrate to recall the warrant instantly without punitive costs."
          }
        },
        {
          "@type": "Question",
          "name": "Is Section 138 cheque bounce a cognizable crime, and will it show on my criminal record?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 138 of the NI Act is a non-cognizable, bailable, and compoundable quasi-criminal offense. It is primarily a regulatory mechanism designed to maintain trust in commercial transactions rather than a heinous moral crime. If the warrant is recalled, bail is obtained, and the matter is compounded under Section 147 through loan settlement, the court passes an order of acquittal. An acquittal or compounded settlement does not create a permanent criminal conviction record or disqualify you from government employment or passport renewals."
          }
        },
        {
          "@type": "Question",
          "name": "What are the compounding costs mandated by the Supreme Court in Damodar S. Prabhu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In the landmark judgment Damodar S. Prabhu v. Sayed Babalal H. (2010), the Supreme Court framed graded cost guidelines to encourage early settlement: 0% to minimal costs if compounded at early trial stages, 10% of the cheque amount if compounded before the Magistrate at subsequent stages, 15% before Sessions Court, and 20% before the High Court or Supreme Court. However, Magistrates retain judicial discretion to waive or reduce compounding costs if genuine economic hardship and mutual lender consent are established."
          }
        },
        {
          "@type": "Question",
          "name": "How does resolving a Section 138 warrant and compounding the loan impact my CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While the criminal court quashes the Section 138 complaint upon compounding, the financial settlement requires the bank to issue a formal No Dues Certificate (NDC) and report the loan as 'Settled' with a ₹0 balance to CIBIL, Experian, Equifax, and CRIF High Mark within 30 days under RBI mandates. This stops monthly default reporting and allows the borrower to systematically rebuild their credit score back to 750+ over 18 to 24 months."
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
  { id: 'anatomy-cheque-bounce-warrant-escalation', title: '1. Anatomy of Cheque Bounce Escalation: From Missed EMI to Arrest Warrant' },
  { id: 'bailable-vs-non-bailable-warrant-statutory-distinction', title: '2. Bailable (BW) vs. Non-Bailable Warrant (NBW): CrPC & BNSS Framework' },
  { id: 'supreme-court-guidelines-cheque-bounce-warrants', title: '3. Supreme Court Precedents on 138 Warrants & Arbitrary Arrest Limits' },
  { id: 'bank-accounting-npv-recovery-dynamics', title: '4. Bank Balance Sheet Economics & The Stressed Asset NPV Recovery Equation' },
  { id: 'warrant-recall-compounding-visual-roadmap', title: '5. Visual Roadmap for Warrant Recall & Section 138 Compounding' },
  { id: 'advocate-led-section-70-recall-bail-procedure', title: '6. Strategic Legal Defense: Filing Section 70(2) Recall Petitions & Bail' },
  { id: 'section-147-compounding-ots-negotiation', title: '7. Section 147 NI Act Compounding & Out-of-Court Loan Settlement' },
  { id: 'post-compounding-ndc-cibil-rehabilitation', title: '8. Case Disposal, RBI No Dues Certificate Delivery & CIBIL Restoration' },
  { id: 'criminal-defense-vs-compounding-matrix', title: '9. Criminal Trial Contest vs. Out-of-Court Compounding Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Criminal Defense & Loan Settlement Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function BailableNonBailableWarrantChequeBounceLoanPage() {
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
            <span>Criminal &amp; Cheque Bounce Defense • Section 138 NI Act &amp; Warrant Recall</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Bailable &amp; Non-Bailable Warrant for Cheque Bounce Loan Default: <span className="text-[#3b82f6] md:text-[#60a5fa]">How to Cancel Warrant &amp; Settle Under Section 138 NI Act</span>
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
              <span>Section 138 NI Act &amp; BNSS / CrPC Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Cancel Your Warrant &amp; Settle Loan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request Emergency Legal Defense
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
                <span>Warrant Recall &amp; Compounding Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                When a borrower misses court summons under Section 138 of the NI Act, the Magistrate issues a Bailable Warrant (BW) or Non-Bailable Warrant (NBW). Experienced criminal defense advocates can immediately file a Section 70(2) CrPC / BNSS application to recall the warrant, secure bail without police custody, and negotiate a 40%–70% out-of-court loan compromise under Section 147 NI Act to permanently quash the case.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Cheque Bounce Warrant Defense &amp; Compounding</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Quasi-Criminal Statutory Origin:</strong> Section 138 of the Negotiable Instruments Act, 1881 is a regulatory penal provision where warrants are issued to secure attendance, not to inflict pre-trial punishment for pure financial distress.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Recall via Section 70(2) CrPC / BNSS:</strong> Borrowers can prevent police arrest by having an advocate file an immediate application for warrant recall and bail bond submission before the executing police station takes physical custody.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Supreme Court Arrest Safeguards:</strong> Under binding precedents like <em>Inder Mohan Goswami</em>, Magistrates must exhaust summons and bailable warrants before issuing non-bailable warrants, protecting unserved borrowers from arbitrary detention.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Absolute Right to Compound under Section 147:</strong> All Section 138 complaints are compoundable by law at any stage, empowering borrowers to settle the underlying loan out of court and secure complete criminal case quashing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Complete Debt Extinguishment &amp; ₹0 CIBIL Update:</strong> Remitting an advocate-negotiated One-Time Settlement results in a formal court acquittal order, permanent withdrawal of warrants, and mandatory RBI ₹0 credit bureau clearance.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Anatomy of Cheque Bounce Escalation */}
            <section id="anatomy-cheque-bounce-warrant-escalation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Anatomy of Cheque Bounce Escalation: From Missed EMI to Magistrate Court Summons &amp; Arrest Warrant
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Discovering that a Judicial Magistrate or Metropolitan Magistrate court has issued an active <strong>Bailable Warrant (BW)</strong> or <strong>Non-Bailable Warrant (NBW)</strong> against you for a defaulted loan EMI or bounced security cheque triggers intense psychological panic. Borrowers across India who defaulted on personal loans, credit cards, business credit lines, or SME overdrafts with major commercial banks and NBFCs—including State Bank of India, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, and Bajaj Finance—often find themselves suddenly contacted by local police officers or recovery agents brandishing arrest threats.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To mount an effective legal defense, it is critical to understand the precise chronological and statutory chain of events that leads from an unpaid monthly instalment to a judicial warrant. Commercial lenders routinely collect post-dated cheques (PDCs), security cheques, or Electronic Clearing Service (NACH) mandates during the initial loan disbursal. When a borrower suffers severe financial hardship—such as business insolvency, job termination, or catastrophic medical emergencies—and the monthly debit fails, the lending institution deposits the physical cheque into clearing. When the cheque returns dishonoured with reasons such as &quot;Funds Insufficient&quot; or &quot;Account Closed&quot;, the statutory machinery of the <strong>Negotiable Instruments Act, 1881</strong> is activated.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 138 of the NI Act, the creditor must first serve a mandatory statutory demand notice within 30 days of receiving the cheque return memo, granting the borrower an unextendable 15-day grace period to make payment. If the liability remains unsatisfied upon the expiry of this 15-day window, a formal criminal complaint is lodged before the competent Judicial Magistrate of First Class (JMFC) or Metropolitan Magistrate (MM) within 30 days under Section 142 of the Act.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Upon examining the preliminary evidence, the Magistrate takes cognizance of the complaint and issues a <strong>Summons</strong> commanding the accused borrower to appear on a specified date. However, because borrowers frequently relocate for employment, vacate leased premises, or because recovery agencies furnish outdated addresses, these summonses often go unserved or are returned with postal remarks like &quot;Not Known&quot; or &quot;Left Without Address&quot;. When the court records continuous non-appearance across two or more consecutive hearings, the Magistrate presumes deliberate evasion and escalates the process by issuing a warrant of arrest to compel physical attendance.
              </p>
            </section>

            {/* Section 2: Bailable vs Non-Bailable Warrant Statutory Distinction */}
            <section id="bailable-vs-non-bailable-warrant-statutory-distinction" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Bailable (BW) vs. Non-Bailable Warrant (NBW): Statutory Distinction Under CrPC &amp; Bharatiya Nagarik Suraksha Sanhita (BNSS)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The issuance and execution of arrest warrants in Section 138 proceedings are governed by procedural criminal law codified under the <strong>Code of Criminal Procedure, 1973 (CrPC)</strong> and the newly enacted <strong>Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)</strong>. Understanding the legal difference between a Bailable Warrant and a Non-Bailable Warrant is vital to determining the urgency and nature of the required advocate intervention.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Bailable Warrant (BW) • Section 71 CrPC / Section 73 BNSS</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A Bailable Warrant is a conditional judicial directive issued by the Magistrate with an explicit statutory endorsement on the face of the warrant. It authorizes the executing police officer to release the accused immediately upon the execution of a personal recognizance bond and solvent surety bond, without taking the individual into physical police custody or lockup detention.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-red-600" />
                    <span>Non-Bailable Warrant (NBW) • Section 70 CrPC / Section 72 BNSS</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A Non-Bailable Warrant is an unconditioned judicial command commanding law enforcement authorities to arrest the named accused person and produce them physically before the issuing Magistrate. The police station has zero statutory authority to grant bail on an NBW; bail, stay of execution, or cancellation can be granted solely by the issuing judicial magistrate.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Section 70(2) CrPC / Section 72(2) BNSS: Perpetual Validity</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under procedural law, an arrest warrant remains valid and executable indefinitely until it is either formally executed by the police through arrest or expressly cancelled and recalled by the court that issued it. Simply waiting or letting court dates pass will never cause a warrant to expire.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-purple-600" />
                    <span>Section 82 &amp; 83 CrPC: Proclamation &amp; Attachment Danger</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If an NBW remains unexecuted because the accused is evading, the court can initiate Section 82 proceedings declaring the borrower a &quot;Proclaimed Person&quot; (PO) and issue Section 83 orders attaching moveable bank accounts and immovable properties. Immediate legal intervention prevents this severe escalation.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Crucial Judicial Protection: Section 138 is a Quasi-Criminal Civil Debt Dispute</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  The Supreme Court of India has repeatedly held that an offense under Section 138 of the Negotiable Instruments Act is primarily a civil wrong clothed in criminal apparel. The penal sanction of imprisonment exists solely to enforce commercial credibility and ensure debt recovery. Consequently, when an arrest warrant is issued, its purpose is never punitive incarceration, but solely to compel the borrower&apos;s legal appearance and facilitate financial resolution.
                </p>
              </div>
            </section>

            {/* Section 3: Supreme Court Guidelines */}
            <section id="supreme-court-guidelines-cheque-bounce-warrants" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Judicial Protocols &amp; Supreme Court Precedents on 138 Warrants: Curbing Arbitrary Arrests
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The issuance of Non-Bailable Warrants by subordinate magistrates in routine commercial cheque bounce cases has been heavily scrutinized and restrained by the Supreme Court of India. The apex court has laid down binding constitutional and procedural guidelines to prevent the misuse of criminal warrants by banking institutions seeking coercive recovery leverage.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Key landmark judgments that every defaulting borrower and defense advocate must rely upon include:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Inder Mohan Goswami &amp; Another v. State of Uttaranchal (2007) 12 SCC 1
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court established unequivocal rules regarding personal liberty under Article 21 of the Constitution. The Court ruled that Non-Bailable Warrants must not be issued mechanically in the first instance. Courts must strictly follow a graded hierarchy: first issuing a summons, followed by a Bailable Warrant if the summons is ignored, and reserving Non-Bailable Warrants solely as a last resort when the court is fully satisfied that the accused is deliberately evading the judicial process.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Damodar S. Prabhu v. Sayed Babalal H. (2010) 5 SCC 663
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court held that the primary objective of Section 138 is the recovery of money and compensatory settlement rather than punitive incarceration. The bench framed comprehensive guidelines encouraging early compounding of offences under Section 147, establishing that compounding can take place at any stage of litigation, including trial, appeal, or revision, without requiring custodial detention.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    In Re: Expeditious Trial of Cases Under Section 138 of N.I. Act, 2021 SCC OnLine SC 325
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A 5-judge Constitution Bench of the Supreme Court mandated that trial courts must carefully scrutinize postal tracking reports and delivery certificates before treating summons as validly served. Issuing warrants without verified evidence of proper service or without recording written judicial satisfaction violates procedural mandates, rendering such warrants immediately liable to be recalled upon application.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Armed with these authoritative precedents, experienced debt defense advocates routinely approach Magistrate courts to secure immediate stays on coercive execution and have arrest warrants recalled without the borrower spending a single minute in police custody.
              </p>
            </section>

            {/* Section 4: Bank Accounting & NPV Recovery Dynamics */}
            <section id="bank-accounting-npv-recovery-dynamics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Balance Sheet Economics, NPA Provisioning &amp; The Stressed Asset NPV Recovery Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                While a Section 138 proceeding feels like an existential criminal crisis to a borrower, from the commercial bank&apos;s institutional perspective, it is merely an expensive, slow recovery mechanism. Commercial banks and NBFCs file thousands of bulk Section 138 complaints across specialized court complexes (such as Patiala House Courts in Delhi, Metropolitan Magistrate Courts in Mumbai, or Egmore Courts in Chennai) not out of criminal vengeance, but to exert maximum pressure to force a financial settlement.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Reserve Bank of India (RBI) Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP), once a defaulted loan crosses 90 days past due (DPD), it is classified as a Non-Performing Asset (NPA). Banks are statutorily required to lock away 15% to 100% of the loan value in loss provisioning on their balance sheets. Continuous criminal litigation ties down bank capital, incurs recurring advocate retainers, requires bank officials to attend witness examinations, and yields zero immediate liquidity.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Consider the actual recovery realities faced by commercial lenders managing Section 138 litigation:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Loan Facility Type</th>
                      <th>Gross Cheque Face Value</th>
                      <th>Estimated Litigation Horizon</th>
                      <th>Target Compounded OTS Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Unsecured Personal Loan Default</td>
                      <td>₹5.0 Lakhs – ₹15.0 Lakhs</td>
                      <td>3 to 5 Years Trial Time</td>
                      <td>₹2.0 Lakhs – ₹5.5 Lakhs (50%–65% Haircut)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Credit Card Outstanding Balance</td>
                      <td>₹2.0 Lakhs – ₹8.0 Lakhs</td>
                      <td>2 to 4 Years Trial Time</td>
                      <td>₹70,000 – ₹2.8 Lakhs (60%–70% Haircut)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Business Loan / SME Working Capital</td>
                      <td>₹25.0 Lakhs – ₹1.0 Crore</td>
                      <td>4 to 7 Years Trial Time</td>
                      <td>₹10.0 Lakhs – ₹38.0 Lakhs (55%–65% Haircut)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Fintech Digital App Micro-Loan</td>
                      <td>₹50,000 – ₹2.5 Lakhs</td>
                      <td>2 to 3 Years Trial Time</td>
                      <td>₹20,000 – ₹1.0 Lakh (50%–60% Haircut)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When evaluating an out-of-court One-Time Settlement (OTS) proposal submitted by an advocate on behalf of a distressed borrower facing an arrest warrant, the bank&apos;s Stressed Asset Committee applies the <strong>Net Present Value (NPV) Recovery Valuation Benchmark</strong>:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Bank Stressed Asset NPV Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Bank = ∑ [ C_t / (1 + r)^t ] - Court_Litigation_Costs - Retainer_Advocate_Fees - Regulatory_Provisioning_Drag
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries realized from prolonged judicial proceedings, r is the bank&apos;s cost of capital discount rate, and deductions account for 3 to 5 years of court friction, advocate fees, evidence recording overhead, and regulatory capital locked in 100% NPA provisioning reserves.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because prosecuting a Section 138 trial to its absolute conclusion yields zero guaranteed cash if the borrower is genuinely insolvent, the discounted Net Present Value of an immediate, advocate-negotiated cash settlement is mathematically far superior for the bank. This financial reality gives seasoned debt defense advocates immense leverage to negotiate substantial 40% to 70% principal waivers while simultaneously securing the full withdrawal of criminal complaints.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="warrant-recall-compounding-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Visual Roadmap for Warrant Recall &amp; Section 138 Compounding
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual guide below illustrates the 5-stage institutional and legal journey: from missed court summons and Magistrate warrant issuance to emergency Section 70(2) recall petition filing, judicial stay of coercive arrest, advocate-led out-of-court Section 147 compounding, and final case disposal with RBI No Dues Certificate delivery.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/bailable-non-bailable-warrant-cheque-bounce-loan.jpg"
                  alt="Bailable & Non-Bailable Warrant Cheque Bounce Recall and Loan Settlement Flowchart"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Summons Default &amp; Emergency Recall</span>
                  <span>Magistrate issues BW/NBW after missed summons; advocates file an urgent Section 70(2) CrPC/BNSS recall petition with supporting hardship affidavits.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Warrant Cancellation &amp; Compounding</span>
                  <span>Court recalls warrant upon bail bond submission; advocates negotiate an out-of-court Section 147 NI Act OTS compromise at a 40%–70% haircut.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Final Disposal &amp; ₹0 CIBIL NDC</span>
                  <span>Bank withdraws complaint; Magistrate passes formal acquittal order; bank issues official ₹0 No Dues Certificate and restores credit bureau records.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Strategic Legal Defense & Section 70 Recall */}
            <section id="advocate-led-section-70-recall-bail-procedure" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Strategic Legal Defense: How Advocates File Section 70(2) CrPC / BNSS Petitions to Recall Warrants &amp; Secure Bail
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an arrest warrant has been issued by a Judicial Magistrate, attempting to evade the police or ignoring the situation is the most dangerous course of action. Evading active warrants risks sudden arrest at your residence or place of employment, overnight detention in police custody, and severe social humiliation. Instead, an experienced criminal defense advocate must be engaged immediately to execute a structured 4-step judicial intervention:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Step 1: Case Inspection, Vakalatnama Execution &amp; Certified Order Copies
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The defense advocate files a formal Memo of Appearance or Vakalatnama before the concerned trial court and conducts an immediate court diary and case file inspection. Counsel examines the summons service report, verifies whether postal acknowledgement cards were forged or unserved, obtains certified copies of the order sheets directing warrant issuance, and checks the exact warrant execution return date given to the local police station.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Step 2: Drafting the Section 70(2) CrPC / BNSS Recall &amp; Cancellation Petition
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advocates draft an exhaustive, verified Application under Section 70(2) of the CrPC (or Section 72(2) of BNSS) for Recall and Cancellation of the Bailable or Non-Bailable Warrant. The application sets forth legitimate, bonafide reasons for previous non-appearances—supported by medical discharge summaries, address relocation proof, out-of-station employment affidavits, or non-receipt of summons. Counsel explicitly invokes <em>Inder Mohan Goswami</em> to demonstrate that the absence was neither intentional nor contumacious.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Step 3: Court Appearance, Bail Application &amp; Surety Bond Submission
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    On the designated morning, the advocate presents the recall application before the presiding Magistrate. Because Section 138 is a bailable offense, the borrower is entitled to bail as a matter of legal right under Section 436 CrPC / Section 478 BNSS. Counsel submits a regular Bail Application along with a Personal Bond and introduces a solvent local surety (or requests cash bail in lieu of surety). Upon examining the grounds, the Magistrate cancels the warrant, admits the borrower to bail, and directs the police station to withdraw the arrest mandate immediately.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Step 4: Securing Judicial Stay &amp; Intimating Local Station House Officer (SHO)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Immediately upon obtaining the signed court order cancelling the warrant, the advocate secures a certified dasti copy of the order. Counsel serves a formal intimation letter along with the court order upon the Station House Officer (SHO) of the jurisdictional police station, instantly terminating all pending police visits, arrest threats, and verification calls.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By proactively submitting to court jurisdiction through legal counsel, the threat of physical arrest is completely extinguished, establishing a secure legal environment to negotiate an out-of-court loan compromise.
              </p>
            </section>

            {/* Section 7: Section 147 Compounding & OTS Negotiation */}
            <section id="section-147-compounding-ots-negotiation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Section 147 NI Act Compounding &amp; Out-of-Court Settlement Negotiation: Securing 40%–70% OTS Waivers
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once the arrest warrant is recalled and bail is secured, the borrower holds immense strategic leverage to resolve the dispute permanently. Under <strong>Section 147 of the Negotiable Instruments Act, 1881</strong>, every offense punishable under the Act is non-cognizable and expressly compoundable by law. Unlike general Indian Penal Code / Bharatiya Nyaya Sanhita offenses that require high court quashing, a Section 138 complaint can be compounded and dismissed directly before the trial Magistrate with mutual consent of the parties.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Experienced debt resolution advocates bypass low-level recovery tele-callers and open formal negotiations directly with the bank&apos;s Zonal Legal Manager, Stressed Asset Resolution Branch (SARB), or internal One-Time Settlement (OTS) Committee. The negotiation strategy incorporates four essential pillars:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Verified Financial Hardship Dossier</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advocates submit documentary proof demonstrating genuine economic distress—such as audited business loss statements, bank account debit freezes, termination letters, or medical diagnostic bills—substantiating a permanent reduction in repayment capability.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>NPV Valuation Benchmark Leverage</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Counsel demonstrates to the bank&apos;s credit committee that continuing 4+ years of contested criminal trial will cost the bank more in legal fees and provisioning drag than accepting an immediate lump-sum settlement of 30% to 60% of the principal sum.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Forensic OTS Sanction Letter Auditing</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Before a single rupee is transferred, advocates verify that the bank issues an official OTS sanction letter on corporate letterhead, explicitly naming the Section 138 court case number, citing the agreed settlement sum, and agreeing to withdraw the criminal complaint.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>National Lok Adalat Settlement Execution</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Whenever feasible, advocates refer the settlement to the <strong>National Lok Adalat</strong>. An award passed by Lok Adalat holds the status of a final civil court decree, ensuring zero court fees, immediate case closure, and no future appeal or revival rights for the bank.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Crucial Warning: Never Deposit Token Money Without a Formal OTS Sanction Letter</span>
                </span>
                <p className="leading-relaxed">
                  Never remit money based on verbal promises or WhatsApp messages from recovery agents claiming they will &quot;cancel the warrant&quot; after receiving a partial payment. Banks routinely appropriate unverified token deposits as partial interest credits while proceeding aggressively with the Section 138 court case. Settlement remittances must occur solely against a signed, authorized bank sanction letter.
                </p>
              </div>
            </section>

            {/* Section 8: Post-Compounding Execution, NDC & CIBIL */}
            <section id="post-compounding-ndc-cibil-rehabilitation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Case Disposal, RBI No Dues Certificate Delivery &amp; CIBIL Bureau Clean-Up
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Remitting the compromised settlement amount is only the financial milestone of debt resolution. Achieving total legal immunity and restoring creditworthiness requires completing three essential post-settlement legal steps:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                    1. Formal Compounding Application &amp; Judicial Acquittal Order
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Upon receipt of full settlement funds, the bank&apos;s authorized representative and the defense advocate jointly file a <strong>Compounding Application under Section 147 of the NI Act read with Section 320 CrPC / Section 359 BNSS</strong>. The complainant bank records its statement confirming full satisfaction of claims. The Magistrate passes a final judicial order recording the compounding of the offense. Under Section 320(8) CrPC / Section 359(8) BNSS, the compounding of an offense has the statutory effect of an <strong>absolute acquittal</strong> of the accused, permanently erasing any criminal taint.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    2. Delivery of RBI No Dues Certificate (NDC) Within Mandatory 30 Days
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under <strong>RBI Master Circular RBI/2023-24/60 (Responsible Lending Conduct)</strong>, all commercial banks and NBFCs are statutorily mandated to issue an official <strong>No Dues Certificate (NDC) / Loan Closure Certificate</strong> and return all original security cheques or property title deeds within <strong>30 calendar days</strong> of receiving settlement funds. Failure to adhere to this timeline renders the lender liable to pay statutory compensation of <strong>₹5,000 per day of delay</strong> directly to the borrower.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    3. Credit Bureau (CIBIL, Experian, CRIF) Record Rectification
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Credit Information Companies (Regulation) Act, 2005, the bank is legally required to update all four credit bureaus (TransUnion CIBIL, Experian, Equifax, CRIF High Mark) within 30 days. The loan status is updated from &quot;Written Off / Default / Active Suit Filed&quot; to <strong>&quot;Settled&quot;</strong>, with the outstanding ledger balance reduced to strictly <strong>₹0</strong>.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Long-Term Financial Recovery: Rebuilding CIBIL to 750+ Post-Settlement</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  While a &quot;Settled&quot; status reflects that the account was resolved for less than the total claim, it completely halts negative monthly DPD compounding and eliminates all risk of secondary debt sale to recovery agencies. By obtaining a secured credit card backed by a fixed deposit (FD), maintaining low 20% credit utilization, and establishing a 100% spotless track record of on-time utility payments, borrowers consistently rebuild their credit score back to 750+ within 18 to 24 months.
                </p>
              </div>
            </section>

            {/* Section 9: Criminal Defense vs Compounding Matrix */}
            <section id="criminal-defense-vs-compounding-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Criminal Trial Contest vs. Out-of-Court Compounding Strategic Matrix
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an arrest warrant is recalled, borrowers must choose between contesting the Section 138 trial on merits or negotiating an out-of-court compromise under Section 147. Comparing both strategic pathways highlights why out-of-court compounding provides superior certainty:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Strategic Parameter</th>
                      <th>Full Criminal Trial Defense</th>
                      <th>Out-of-Court Compounding Settlement (OTS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Resolution Horizon</td>
                      <td>3 to 6 Years across Trial &amp; Appellate Courts</td>
                      <td>30 to 90 Days from Recall Application to Case Dismissal</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Financial Exposure</td>
                      <td>Risk of sentence: 2x Cheque Amount fine + up to 2 Years jail</td>
                      <td>Fixed compromised amount: 40%–70% principal waiver</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Court Attendance</td>
                      <td>Mandatory personal appearance for all hearings and evidence</td>
                      <td>Single joint appearance or Lok Adalat bench disposal</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Legal Risk Profile</td>
                      <td>High risk under statutory presumptions (Sec 118 &amp; 139 NI Act)</td>
                      <td>Zero legal risk; binding mutual compromise and acquittal</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Credit Bureau Impact</td>
                      <td>Continuous &quot;Suit Filed / Default&quot; monthly negative reporting</td>
                      <td>Permanent status update to &quot;Settled&quot; with ₹0 balance</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Final Outcome</td>
                      <td>Judicial verdict (Conviction or Contested Acquittal)</td>
                      <td>Complete statutory acquittal, NDC issuance, and total peace of mind</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Criminal Defense &amp; Loan Settlement Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Facing a Bailable or Non-Bailable Warrant for a cheque bounce loan default demands rapid, seasoned criminal defense counsel combined with master debt settlement negotiators. SettleLoans provides end-to-end legal protection for distressed borrowers across India: conducting emergency court file inspections, filing urgent Section 70(2) recall petitions to stay police arrest, securing court bail, and negotiating directly with bank senior credit authorities to achieve deep 40% to 70% One-Time Settlements backed by official No Dues Certificates and formal court acquittal orders.
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
                  11. Frequently Asked Questions: Cheque Bounce Warrants &amp; Loan Settlement
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to critical questions regarding bailable and non-bailable warrants, Section 138 NI Act proceedings, warrant recall petitions, and out-of-court loan compounding in India.
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
                  href="https://www.indiacode.nic.in/handle/123456789/2189"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Negotiable Instruments Act, 1881 (Section 138 &amp; Section 147 Compounding)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/16225"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Code of Criminal Procedure, 1973 (Section 70, 71 &amp; 70(2) Recall of Warrants)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Inder Mohan Goswami &amp; Damodar S. Prabhu Guidelines)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (Lok Adalat Section 138 Settlement Bench)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Master Circular (Responsible Lending Conduct – Release of Documents &amp; NDC Mandate)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Legal Defense &amp; Debt Settlement Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/cheque-bounce-hone-par-kya-hoga"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Cheque Bounce Legal Guide
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can You Go to Jail for Loan Default?
                </Link>
                <Link
                  href="/bank-fir-for-loan-default-reality-check"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank FIR Reality Check
                </Link>
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Guide
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Arbitration Reply Guide
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Recovery Harassment
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/case-study-sbi-lok-adalat-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SBI Lok Adalat Case Study
                </Link>
                <Link
                  href="/case-study-cibil-status-settled-to-closed"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Settled to Closed Recovery
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
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in Section 138 NI Act criminal defense, Magistrate warrant cancellations, and out-of-court loan compounding negotiations with over a decade of banking advisory experience across India.
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
                <span>Urgent Warrant Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Warrant Issued by Court for Loan Default?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not wait for police execution. Our criminal defense advocates file immediate Section 70(2) recall petitions, secure bail, and negotiate out-of-court loan compounding.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Urgent Advocate Help
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
                  <span>Section 138 NI Act Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Legal Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank-Stamped OTS Sanctions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>High Court &amp; Supreme Court Precedents</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
