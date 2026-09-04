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
  title: 'Can Bank File FIR for Personal Loan Default? Section 420 IPC Myth vs Reality & Legal Protections',
  description: 'Can a bank file an FIR for loan default? Uncover the truth behind Section 420 & 406 IPC threats by collection agencies, Supreme Court precedents prohibiting criminal color on civil defaults, and your legal rights.',
  keywords: [
    'can bank file fir for personal loan default',
    'loan default fir section 420 ipc',
    'can police arrest for personal loan default',
    'section 406 ipc loan default',
    'fake police notice for loan recovery',
    'supreme court ruling on loan default criminal case',
    'bank harassment section 420 threat',
    'is loan default a civil or criminal case',
    'how to handle fake fir notice from bank',
    'personal loan settlement legal rights'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/bank-fir-for-loan-default-reality-check',
  },
  openGraph: {
    title: 'Can Bank File FIR for Loan Default? Section 420 IPC Myth vs Reality',
    description: 'Definitive legal analysis on loan default and criminal law in India. Understand why banks cannot lodge an FIR under Section 420/406 IPC for genuine defaults, Supreme Court protections, and how advocates stop recovery harassment.',
    url: 'https://www.settleloans.in/bank-fir-for-loan-default-reality-check',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/bank-fir-for-loan-default-reality-check.jpg',
        width: 1200,
        height: 675,
        alt: 'Bank FIR for Loan Default Reality Check Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can Bank File FIR for Personal Loan Default? Legal Reality Check',
    description: 'Collection agents threatening an FIR under Section 420 IPC? Discover landmark Supreme Court rulings that protect honest borrowers from criminal intimidation and how to settle safely.',
    images: ['https://www.settleloans.in/images/infographics/bank-fir-for-loan-default-reality-check.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/bank-fir-for-loan-default-reality-check#webpage",
      "url": "https://www.settleloans.in/bank-fir-for-loan-default-reality-check",
      "name": "Can Bank File FIR for Personal Loan Default? Section 420 IPC Myth vs Reality & Legal Protections",
      "description": "Exhaustive legal reality check on bank FIR threats for personal loan defaults in India. Explains Section 420 & 406 IPC abuse, landmark Supreme Court quashing precedents, RBI Fair Practices Code, and debt settlement strategies.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/bank-fir-for-loan-default-reality-check#breadcrumb"
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
      "@id": "https://www.settleloans.in/bank-fir-for-loan-default-reality-check#breadcrumb",
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
          "name": "Bank FIR for Loan Default Reality Check",
          "item": "https://www.settleloans.in/bank-fir-for-loan-default-reality-check"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/bank-fir-for-loan-default-reality-check#article",
      "headline": "Can Bank File FIR for Personal Loan Default? Section 420 IPC Myth vs Reality & Legal Protections",
      "description": "An in-depth legal analysis examining whether banks can file an FIR for loan default in India. Features comprehensive statutory breakdowns of Section 420 & 406 IPC, Supreme Court quashing rulings, RBI Fair Practices Code against recovery agent intimidation, and advocate-led debt settlement protocols.",
      "image": "https://www.settleloans.in/images/infographics/bank-fir-for-loan-default-reality-check.jpg",
      "datePublished": "2026-08-25T10:00:00+05:30",
      "dateModified": "2026-08-25T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/bank-fir-for-loan-default-reality-check#webpage"
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
      "@id": "https://www.settleloans.in/bank-fir-for-loan-default-reality-check#service",
      "name": "SettleLoans - Legal Defense & Loan Default Resolution Advisory",
      "description": "Expert legal protection against illegal criminal intimidation, fraudulent Section 420 police complaints, and recovery agent harassment, paired with structured One-Time Settlement (OTS) negotiation across India.",
      "url": "https://www.settleloans.in/bank-fir-for-loan-default-reality-check",
      "image": "https://www.settleloans.in/images/infographics/bank-fir-for-loan-default-reality-check.jpg",
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
            "name": "Vikramaditya Rao"
          },
          "datePublished": "2026-06-14",
          "reviewBody": "A private bank recovery agency sent me a bogus police summons claiming an FIR was registered under Section 420 IPC for an unpaid ₹6.5 Lakhs personal loan. SettleLoans advocates immediately intervened, served a formal legal notice for criminal intimidation under Section 506 IPC against the agency, and forced the bank into an official 55% OTS settlement.",
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
          "reviewBody": "Recovery agents visited my elderly parents threatening immediate arrest by local police. SettleLoans stepped in, filed complaints with the RBI Ombudsman and local cyber cell, and stopped the harassment overnight. Their legal team negotiated an official closure with a bank-stamped No Dues Certificate.",
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
            "name": "Rohit Pathak"
          },
          "datePublished": "2026-05-19",
          "reviewBody": "I was terrified after receiving a WhatsApp message with a fake FIR copy from an NBFC agent. Ashish Jhangra and his legal team explained the Supreme Court protections against criminalizing civil debts. We settled the total outstanding of ₹9.2 Lakhs for ₹3.8 Lakhs with zero legal exposure.",
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
          "datePublished": "2026-08-04",
          "reviewBody": "Outstanding legal support. They dismantled the bank false criminal claims by citing the Dalip Kaur Supreme Court judgment. The bank dropped all coercive tactics and sanctioned a structured 3-month installment settlement.",
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
      "@id": "https://www.settleloans.in/bank-fir-for-loan-default-reality-check#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a bank legally file an FIR for personal loan or credit card default in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Inability to repay an unsecured personal loan or credit card debt is purely a civil breach of contract, not a cognizable criminal offense. The Supreme Court of India has repeatedly ruled that police cannot register an FIR under Section 420 (cheating) or Section 406 (criminal breach of trust) for mere financial default unless the bank proves fraudulent intention, forged documents, or impersonation existing at the exact moment the loan was originally disbursed."
          }
        },
        {
          "@type": "Question",
          "name": "Why do recovery agents send fake police notices and FIR warnings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Third-party collection agencies rely on psychological intimidation because civil recovery suits take 3 to 5 years in Indian courts and require heavy upfront court fees. By forging police letterheads or invoking Section 420 IPC over WhatsApp and phone calls, agents exploit borrowers fear of social stigma and arrest to force immediate payments, even though doing so constitutes criminal intimidation under Section 503 and 506 of the IPC."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between Section 420 cheating and genuine financial default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To establish an offense under Section 420 IPC, the prosecution must demonstrate mens rea (fraudulent and dishonest intention) at the very inception of the loan transaction. If a borrower applied with genuine KYC documents, made several regular EMI payments, and later defaulted due to job loss, illness, or business failure, it is a bona fide commercial default where Section 420 is legally inapplicable."
          }
        },
        {
          "@type": "Question",
          "name": "What landmark Supreme Court rulings prohibit criminal cases on civil loan defaults?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Landmark Supreme Court judgments including Hridaya Ranjan Prasad Verma v. State of Bihar, Dalip Kaur v. Jagnar Singh, and Prof. R.K. Vijayasarathy v. Sudha Seetharam explicitly establish that every breach of contract does not constitute cheating. The apex court held that converting purely civil disputes into criminal proceedings is an abuse of judicial process liable to be quashed under Section 482 of the CrPC."
          }
        },
        {
          "@type": "Question",
          "name": "Can local police summon or arrest me for an unpaid personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Police officers have no statutory authority to act as debt collection agents or summon borrowers to police stations for civil defaults. If a malicious complaint is submitted, police must conduct a preliminary inquiry, and the Supreme Court in Arnesh Kumar v. State of Bihar mandated that no mechanical arrests can be made without judicial scrutiny."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if I receive a fake FIR notice on WhatsApp or email?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Do not panic or transfer money under coercion. Preserve complete digital evidence including screenshots, phone recordings, and sender contact numbers. Verify the authenticity on the state police CCTNS portal. Immediately consult a debt defense advocate to serve a legal notice on the bank and lodge complaints with the RBI Ombudsman, the Cyber Crime portal, and the local Magistrate."
          }
        },
        {
          "@type": "Question",
          "name": "What legal remedies do banks actually have for loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Banks have strictly civil and statutory remedies: filing a summary recovery suit under Order 37 of the Civil Procedure Code (CPC), initiating civil arbitration under the Arbitration and Conciliation Act 1996, approaching the Debt Recovery Tribunal (DRT) for claims exceeding ₹20 Lakhs, referring to Lok Adalat for conciliation, or negotiating a mutually agreed One-Time Settlement (OTS)."
          }
        },
        {
          "@type": "Question",
          "name": "Can a Section 138 cheque bounce case lead to an FIR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Section 138 of the Negotiable Instruments Act is a quasi-criminal private complaint filed directly before a Judicial Magistrate, not an FIR registered with the police. It is a bailable offense where the court issues a summons, and it is routinely settled through compromise payments or Lok Adalat without custodial arrest."
          }
        },
        {
          "@type": "Question",
          "name": "How does advocate representation stop criminal threats and secure an OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When a specialized debt settlement advocate issues a formal response citing Supreme Court precedents and RBI Master Directions, the bank recovery department immediately pulls the file from abusive third-party agencies. The bank legal officers transition the account from hostile coercion to structured commercial negotiations, enabling a 45% to 65% principal waiver and an official No Dues Certificate."
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
  { id: 'demystifying-bank-fir-threats', title: '1. Bank FIR Threats & Civil Default Reality' },
  { id: 'statutory-protections-section-420-406', title: '2. Section 420 & 406 IPC Debunked' },
  { id: 'fake-police-notices-recovery-tactics', title: '3. Fake Police Summons & Extortion Tactics' },
  { id: 'bank-accounting-npv-recovery-formula', title: '4. Bank NPA Accounting & NPV Strategy' },
  { id: 'infographic-loan-default-fir-reality', title: '5. Visual Guide: Civil Default vs FIR' },
  { id: 'advocate-intervention-stopping-harassment', title: '6. How Advocates Neutralize Intimidation' },
  { id: 'section-482-crpc-quashing-precedents', title: '7. Section 482 CrPC Quashing Precedents' },
  { id: 'remittance-rbi-ndc-credit-reconstruction', title: '8. Remittance, Stamped NDC & CIBIL Care' },
  { id: 'recovery-mechanism-comparative-matrix', title: '9. Dispute Resolution Comparative Matrix' },
  { id: 'settleloans-legal-defense-framework', title: '10. SettleLoans Legal Defense & Resolution' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function BankFirForLoanDefaultRealityCheckPage() {
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
        className="w-full border-b border-slate-700/80 pt-10 pb-8 md:pt-14 md:pb-11 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <Gavel className="w-3.5 h-3.5" />
            <span>Criminal Law vs Civil Default • IPC &amp; CrPC Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Can Bank File FIR for Loan Default? <span className="text-[#3b82f6] md:text-[#60a5fa]">Section 420 IPC Myth vs Reality &amp; Legal Protections</span>
          </h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-4 mb-6 flex flex-wrap items-center justify-center gap-4">
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
              <span>Supreme Court Precedent Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Stop Fake FIR Harassment Now</span>
            </Link>
            <Link
              href="#statutory-protections-section-420-406"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Explore Supreme Court Rulings</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. Main 3-Column Content Layout */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Sticky Table of Contents + Crux Pill */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider mb-2">
                  <Scale className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Executive Legal Crux</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Defaulting on a personal loan or credit card in India is solely a civil contractual dispute. Supreme Court jurisprudence establishes that invoking Section 420 IPC without initial fraudulent inducement is unlawful and constitutes actionable criminal intimidation under Section 506 IPC.
                </p>
              </div>

              <SidebarTOC items={tocItems} />
            </div>
          </aside>

          {/* Middle Column: Main Editorial Body */}
          <main className="lg:col-span-6 blog-content space-y-10">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm uppercase tracking-wider mb-4">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Legal Realities &amp; Borrower Safeguards</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Civil Nature of Debt:</strong> An inability to pay loan installments due to genuine financial distress does not constitute a cognizable criminal offense under Indian law.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 420 &amp; 406 IPC Debunked:</strong> Cheating requires proven fraudulent intention at the exact time of loan disbursement; post-disbursement default does not satisfy criminal ingredients.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Apex Court Shield:</strong> Supreme Court rulings explicitly bar police stations and magistrates from converting commercial defaults into criminal trials.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Actionable Intimidation:</strong> Fake police summons, morphed legal drafts, or threats of imminent arrest by recovery agents violate RBI directives and IPC Sections 383, 503, and 506.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Compromise Route:</strong> Engaging professional legal advocates shifts institutional aggression toward structured One-Time Settlement (OTS) with significant principal waivers.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying Bank FIR Threats */}
            <section id="demystifying-bank-fir-threats" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Demystifying Bank FIR Threats: The Boundary Between Civil Default and Crime
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower faces unanticipated financial catastrophe—whether triggered by sudden employment termination, catastrophic medical expenditure, severe business insolvency, or macroeconomic downturns—the inability to maintain scheduled equated monthly installments (EMIs) frequently triggers aggressive institutional recovery maneuvers. Within weeks of an unsecured personal loan or credit card portfolio slipping past the standard 90-day overdue threshold into Non-Performing Asset (NPA) classification, borrowers routinely receive alarming digital messages, simulated legal drafts, or urgent phone calls alleging that a First Information Report (FIR) has been lodged against them at a local police station.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To understand the substantive legal reality, one must analyze the foundational distinction between civil law and criminal jurisprudence under the Indian legal architecture. A personal loan agreement executed between an individual and a scheduled commercial bank or Non-Banking Financial Company (NBFC) represents a bilateral commercial contract governed strictly by the Indian Contract Act, 1872. A failure to honor scheduled repayments represents a civil breach of contract, conferring upon the lender specific monetary remedies such as civil recovery suits, summary proceedings under Order 37 of the Code of Civil Procedure (CPC), or statutory arbitration. Under no provision of Indian commercial law does an honest financial default automatically transform into a penal offense.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Foundational Legal Principle</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  The Indian Constitution and the Code of Criminal Procedure strictly prohibit the deployment of the state police apparatus for commercial debt recovery. Defaulting on debt is not an arrestable offense in the absence of established, pre-planned fraud.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Protections: Section 420 & 406 IPC Debunked */}
            <section id="statutory-protections-section-420-406" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Legal Protections: Section 420 &amp; 406 IPC Debunked
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Collection agencies and misinformed recovery personnel frequently invoke Section 420 (Cheating and dishonestly inducing delivery of property) and Section 406 (Punishment for criminal breach of trust) of the Indian Penal Code (IPC), now corresponding to the relevant clauses of the Bharatiya Nyaya Sanhita (BNS). Understanding why these provisions cannot be applied to genuine loan default requires examining their essential legal ingredients.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For an offense under Section 420 IPC to stand, the prosecution or complainant must prove beyond reasonable doubt that the accused possessed dishonest and fraudulent intention (<em>mens rea</em>) at the very inception of the transaction. In a standard unsecured personal loan, the borrower provides legitimate Know Your Customer (KYC) documentation, bank statements, and salary certificates, and frequently services the loan faithfully for months or years prior to the default. The subsequent failure to repay due to adverse circumstances is merely a commercial inability, entirely devoid of initial deceit.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-3">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Landmark Supreme Court Jurisprudence</span>
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Hridaya Ranjan Prasad Verma v. State of Bihar (2000) 4 SCC 168</p>
                    <p className="text-slate-600 mt-1">The Supreme Court drew a clear boundary: mere failure to keep a promise cannot give rise to criminal liability for cheating unless fraudulent intention is demonstrated from the inception of the contract.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Dalip Kaur &amp; Ors. v. Jagnar Singh &amp; Anr. (2009) 14 SCC 696</p>
                    <p className="text-slate-600 mt-1">The apex court unequivocally affirmed that a pure dispute arising out of breach of contract cannot be allowed to be converted into a criminal prosecution to exert pressure.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Prof. R.K. Vijayasarathy v. Sudha Seetharam (2019) 16 SCC 739</p>
                    <p className="text-slate-600 mt-1">The Supreme Court held that filing a criminal complaint for an essentially civil commercial claim is a clear abuse of judicial process liable to be quashed under Section 482 of the CrPC.</p>
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Similarly, Section 406 IPC requires the entrustment of property in a fiduciary capacity. When a bank disburses a personal loan, the legal ownership of the money passes unconditionally to the borrower, creating a creditor-debtor relationship rather than a trustee-beneficiary arrangement. Consequently, criminal breach of trust cannot legally arise from the non-repayment of a personal loan.
              </p>
            </section>

            {/* Section 3: Fake Police Notices & Recovery Agent Tactics */}
            <section id="fake-police-notices-recovery-tactics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. The Danger of Intimidation: Fake Police Summons &amp; Recovery Agent Extortion
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because institutional civil recovery in Indian courts is time-consuming and expensive, third-party recovery agencies frequently deploy psychological pressure to extract immediate payments. Unregulated agents routinely forge formal-looking police summons, craft digital documents bearing fictitious crime branch seals, and issue fabricated "Warrant Notice" alerts through messaging applications like WhatsApp.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                These aggressive tactics violate not only ethical standards but substantive criminal statutes. When a recovery agent threatens a borrower with police custody, communicates with relatives or workplace superiors without authorization, uses abusive language, or visits residences outside permitted hours, the agent commits cognizable offenses:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 383 &amp; 384 IPC (Extortion)</h4>
                  <p className="text-xs text-slate-600">Intentionally putting any person in fear of injury or social disgrace to dishonestly induce payment of money constitutes criminal extortion.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 503 &amp; 506 IPC (Intimidation)</h4>
                  <p className="text-xs text-slate-600">Threatening bodily harm, reputation destruction, or illegal police detention constitutes criminal intimidation punishable by imprisonment.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 465 &amp; 468 IPC (Forgery)</h4>
                  <p className="text-xs text-slate-600">Fabricating fake court seals, simulated police summons, or counterfeit magistrate notices amounts to non-bailable criminal forgery.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">RBI Fair Practices Code</h4>
                  <p className="text-xs text-slate-600">RBI Master Directions strictly forbid contacting borrowers before 8:00 AM or after 7:00 PM, contacting workplace HR, or issuing false legal claims.</p>
                </div>
              </div>
            </section>

            {/* Section 4: Bank Accounting & NPV Recovery Formula */}
            <section id="bank-accounting-npv-recovery-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Accounting Realities: NPA Provisioning &amp; The NPV Recovery Formula
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To understand why banks permit recovery agencies to utilize aggressive bluffs rather than filing legitimate court cases, one must examine commercial banking balance sheet mechanics. When a borrower misses three consecutive monthly installments (90 days), the Reserve Bank of India mandates that the loan be classified as a Non-Performing Asset (NPA). Under RBI Master Directions on Prudential Norms on Income Recognition, Asset Classification and Provisioning, the bank must set aside substantial capital reserves:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Substandard NPA (Up to 12 months):</strong> Mandatory 15% provisioning on total outstanding exposure.</li>
                <li><strong>Doubtful-1 NPA (12 to 24 months):</strong> 25% provisioning for secured portions and 100% for unsecured balances.</li>
                <li><strong>Doubtful-2 &amp; Loss Assets:</strong> 100% full provisioning write-down against quarterly bank profits.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                When a bank initiates a formal civil lawsuit in a district commercial court, it must deposit 1% to 3% upfront ad-valorem court fees, retain external litigation counsel, and face a 36 to 60-month procedural trajectory with low probability of real recovery on unsecured debt. Consequently, institutional risk committees evaluate recovery using a Net Present Value (NPV) financial model:
              </p>

              {/* NPV Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries across time periods t, r represents the institutional cost of capital discount rate, and deductions account for protracted civil litigation costs and locked regulatory provisioning capital.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because protracted litigation yields a deeply negative Net Present Value on unsecured retail debt, banks possess an immense commercial incentive to execute a negotiated One-Time Settlement (OTS), waiving 45% to 65% of the ledger balance to immediately release locked regulatory provisions and recover upfront liquidity.
              </p>
            </section>

            {/* Section 5: Dedicated 16:9 Infographic Banner */}
            <section id="infographic-loan-default-fir-reality" className="my-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/bank-fir-for-loan-default-reality-check.jpg"
                  alt="Bank FIR for Loan Default Reality Check Infographic: Civil Default vs Criminal Offense, Section 420 Debunked, Supreme Court Guidelines"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 text-slate-300 text-xs flex items-center justify-between">
                  <span className="font-semibold text-blue-400">Fig 1: Statutory Comparison — Civil Default vs Criminal Fraud Jurisprudence in India</span>
                  <span className="text-slate-400 hidden sm:inline">Source: SettleLoans Legal &amp; Regulatory Analysis</span>
                </div>
              </div>
            </section>

            {/* Section 6: How Advocates Defang Criminal Threats & Force OTS */}
            <section id="advocate-intervention-stopping-harassment" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. How Legal Representation Defangs Criminal Threats &amp; Forces OTS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an individual borrower attempts to explain financial hardship directly to recovery representatives, the agency often doubles down on aggressive psychological intimidation. However, the operational dynamic changes entirely when a specialized debt defense advocate steps in with formal legal representation.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Upon being retained, our legal team executes a multi-pronged intervention protocol:
              </p>
              <div className="space-y-3 my-4">
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Formal Cease-and-Desist &amp; Vakalatnama Service</h4>
                    <p className="text-xs text-slate-600 mt-1">Advocates serve formal notices to the bank collection head and nodal grievance officer, establishing that all communications must occur through legal counsel. Third-party calling stops immediately.</p>
                  </div>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Criminal Counter-Notices for Coercion (Sections 506 &amp; 383 IPC)</h4>
                    <p className="text-xs text-slate-600 mt-1">If agents sent forged summons or issued threats of arrest, our advocates document the electronic evidence and file formal complaints with the State Cyber Crime Police and local District Magistrate.</p>
                  </div>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-start gap-3">
                  <Landmark className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Escalation to RBI Integrated Ombudsman</h4>
                    <p className="text-xs text-slate-600 mt-1">Under the Reserve Bank - Integrated Ombudsman Scheme, 2021, banks face severe institutional penalties and compensation liabilities up to ₹20 Lakhs for recovery agent violations.</p>
                  </div>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-start gap-3">
                  <BadgePercent className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Direct Institutional Compromise Negotiation</h4>
                    <p className="text-xs text-slate-600 mt-1">With harassment neutralized, advocates submit a documented financial hardship dossier directly to bank zonal settlement committees, negotiating a 50% to 70% principal waiver.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Sanction Letter Forensics & Section 482 CrPC Quashing */}
            <section id="section-482-crpc-quashing-precedents" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Sanction Letter Forensics &amp; Section 482 CrPC Quashing Precedents
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In exceedingly rare instances where an overzealous lender attempts to lodge a private criminal complaint under Section 156(3) or Section 200 of the CrPC before a local Magistrate alleging cheating, experienced defense advocates utilize high court quashing petitions under Section 482 CrPC (Section 528 of the Bharatiya Nagarik Suraksha Sanhita, BNSS).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                High Courts across Indian jurisdictions routinely quash such malicious proceedings at the admission stage itself by performing forensic examination of the original sanction documents:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <li><strong>Absence of Deceptive Inducement:</strong> Demonstrating that the borrower identity, income proof, and residential verification were vetted and approved through the bank own credit underwriting algorithms.</li>
                <li><strong>History of Genuine Part-Performance:</strong> Proving that the borrower serviced initial EMIs, conclusively negating any fraudulent intent at inception.</li>
                <li><strong>Standard Commercial Dispute Character:</strong> Establishing that the dispute revolves solely around unsettled balances, compound interest accruals, or unfair penal charges.</li>
                <li><strong>Abuse of Criminal Process:</strong> Citing Supreme Court directives in <em>State of Haryana v. Bhajan Lal</em> to establish that the criminal complaint was instituted with an ulterior motive for wreaking vengeance or exerting extra-judicial pressure.</li>
              </ul>
            </section>

            {/* Section 8: Remittance, RBI Mandated Zero-Dues Certificate & Credit Reconstruction */}
            <section id="remittance-rbi-ndc-credit-reconstruction" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Remittance Protocols, RBI-Mandated Zero-Dues Certificate &amp; Credit Reconstruction
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A critical danger for unrepresented borrowers is making informal cash or transfer payments to recovery agents based on verbal settlement assurances. Such payments are invariably credited as partial interest installments, leaving the loan account active, compounding penalties, and subjecting the borrower to continued legal exposure.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under professional legal supervision, every settlement must strictly adhere to statutory protocols:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory Settlement Verification Protocol</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Official Sanction Letter</p>
                    <p className="text-slate-600">Settlement letter generated directly on official bank letterhead with unique reference number, specific agreed waiver amount, and explicit payment schedule.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Direct Account Remittance</p>
                    <p className="text-slate-600">Payment made solely via RTGS, NEFT, or demand draft payable directly to the bank loan account, never to third-party collection agents.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Stamped NDC &amp; CIBIL Update</p>
                    <p className="text-slate-600">Delivery of formal No Dues Certificate within 30 days under RBI Circular RBI/2023-24/60, with updated CIBIL status reflecting settled closure.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Dispute Resolution Comparative Matrix Table */}
            <section id="recovery-mechanism-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Dispute Resolution Comparative Matrix: Recovery Mechanisms in India
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The following comparative table illustrates the jurisdictional boundaries, procedural timelines, and realistic borrower exposure across various dispute resolution avenues in Indian banking practice:
              </p>
              
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Recovery Mechanism</th>
                      <th>Legal Forum / Authority</th>
                      <th>Statutory Basis</th>
                      <th>Criminal Exposure</th>
                      <th>Typical Settlement Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">FIR Police Complaint</td>
                      <td>Local Police Station / CCTNS</td>
                      <td>Section 420 / 406 IPC</td>
                      <td><strong>Zero</strong> (Rejected for genuine defaults)</td>
                      <td>Quashed or closed as purely civil dispute</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Summary Recovery Suit</td>
                      <td>City Civil / Commercial Court</td>
                      <td>Order 37, CPC 1908</td>
                      <td>None (Purely Monetary)</td>
                      <td>Compromise decree or installment order</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Institutional Arbitration</td>
                      <td>Sole Arbitrator / Arbitral Tribunal</td>
                      <td>Arbitration Act, 1996</td>
                      <td>None (Civil Award)</td>
                      <td>Section 30 Consent Award (45%–60% OTS)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 138 NI Act</td>
                      <td>Metropolitan / Judicial Magistrate</td>
                      <td>Negotiable Instruments Act</td>
                      <td>Quasi-criminal (Bailable)</td>
                      <td>Compounding of offense via negotiated payment</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Lok Adalat Conciliation</td>
                      <td>District Legal Services Authority (DLSA)</td>
                      <td>Legal Services Authorities Act</td>
                      <td>None (Voluntary Conciliation)</td>
                      <td>Final non-appealable award with 50%–70% waiver</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="settleloans-legal-defense-framework" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense Framework: Protecting Borrowers Across India
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating institutional recovery intimidation, fabricated police summons, and unlawful debt collection harassment requires experienced legal counsel who specialize in banking litigation, the Code of Criminal Procedure, and RBI fair practice frameworks. SettleLoans provides comprehensive legal defense for borrowers nationwide: serving cease-and-desist notices to stop unlawful harassment, holding abusive collection agencies accountable under criminal and consumer laws, and negotiating directly with bank zonal authorities to secure maximum principal haircuts backed by official, bank-stamped No Dues Certificates.
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
                  11. Frequently Asked Questions: Bank FIR for Loan Default Reality Check
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear, legally verified answers to common questions regarding bank FIR threats, Section 420 IPC allegations, and borrower protections in India.
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
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Dalip Kaur &amp; Hridaya Ranjan Precedents)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Fair Practices Code for Lenders &amp; Recovery</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Indian Penal Code, 1860 (Sections 420, 406, 506 &amp; 383)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Harassment Grievance Redressal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (Lok Adalat Settlement Guidelines)</span>
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
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go to Jail for Loan Default?
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Recovery Harassment Complaint
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Arbitration Notice Reply
                </Link>
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Defense
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/icici-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  ICICI Bank Loan Settlement
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  HDFC Bank Loan Settlement
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
          <aside className="w-full lg:col-span-3 lg:sticky lg:top-24 space-y-6 h-fit">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                  AJ
                </Link>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                      Ashish Jhangra
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Pioneering advocate in banking jurisprudence, criminal law defense against debt recovery intimidation, and RBI compromise settlement frameworks with over 10+ years of institutional advisory experience.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="text-[#1F5EFF] font-semibold hover:underline flex items-center gap-1">
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <div className="flex items-center gap-1 text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Author</span>
                </div>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Immediate Legal Defense</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">Facing Fake FIR or Police Threats?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let recovery agents intimidate you with false criminal claims. Engage our senior banking advocates to issue legal notices, halt harassment, and negotiate a 50%–65% OTS.
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
                  <span>Supreme Court Precedent Protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank-Stamped Settlement Letters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>RBI Fair Practices Code Enforcement</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
