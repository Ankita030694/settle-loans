import { Metadata } from 'next';
import Link from 'next/link';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import SidebarTOC from '@/components/SidebarTOC';
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
  PhoneCall,
  ExternalLink,
  Building2,
  Landmark,
  Check,
  BookOpen,
  ShieldAlert,
  Scale,
  HelpCircle,
  Calculator,
  Layers,
  Gavel,
  FileCheck,
  UserCheck,
  AlertCircle,
  Banknote,
  Award,
  CheckCircle2,
  Smartphone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'CRED Cash Loan Settlement Guide | SettleLoans',
  description: 'Learn how to settle CRED Cash loans legally. Negotiate a single-shot compromise with partner banks and stop collection calls with SettleLoans.',
  keywords: [
    'cred cash loan default settlement',
    'cred cash settlement process',
    'cred loan default one time settlement',
    'idfc first bank cred cash settlement',
    'newtap finance loan settlement',
    'l&t finance cred cash ots',
    'how to settle cred cash personal loan',
    'cred loan recovery agent harassment rbi rules',
    'cred loan nach bounce charges stop',
    'cred cash legal notice section 25 pssa reply',
    'cred loan no dues certificate ndc',
    'cred cash cibil score settlement impact',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/cred-cash-personal-loan-settlement-process',
  },
  openGraph: {
    title: 'CRED Cash Loan Default Settlement: Settle Partner Bank Dues (2026)',
    description: 'Expert legal and financial guide for resolving defaulted CRED Cash personal loan lines. Discover how to negotiate One-Time Settlements (OTS) directly with IDFC FIRST Bank, Newtap Finance, and L&T Finance.',
    url: 'https://www.settleloans.in/cred-cash-personal-loan-settlement-process',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/cred-cash-personal-loan-settlement-process.jpg',
        width: 1200,
        height: 675,
        alt: 'CRED Cash Personal Loan Settlement and Partner Bank Resolution Architecture',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRED Cash Loan Default Settlement: Settle Partner Bank Dues (2026)',
    description: 'Technical manual for prime borrowers to settle defaulted CRED Cash credit lines directly with underwriting partner banks and NBFCs under RBI compromise guidelines.',
    images: ['https://www.settleloans.in/images/infographics/cred-cash-personal-loan-settlement-process.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/cred-cash-personal-loan-settlement-process#webpage",
      "url": "https://www.settleloans.in/cred-cash-personal-loan-settlement-process",
      "name": "CRED Cash Loan Default Settlement: Settle Partner Bank Dues (2026)",
      "description": "Comprehensive guide to CRED Cash loan default settlement. Learn how to settle instant credit lines underwritten by IDFC FIRST Bank, Newtap Finance, and L&T Finance. Stop recovery harassment, revoke e-NACH bounce charges, defend Section 25 PSSA notices, and negotiate a 40% to 60% OTS haircut under RBI compromise rules.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/cred-cash-personal-loan-settlement-process#breadcrumb"
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
      "@id": "https://www.settleloans.in/cred-cash-personal-loan-settlement-process#breadcrumb",
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
          "name": "CRED Cash Loan Default Settlement",
          "item": "https://www.settleloans.in/cred-cash-personal-loan-settlement-process"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/cred-cash-personal-loan-settlement-process#article",
      "headline": "CRED Cash Loan Default Settlement: Settle Partner Bank Dues & NBFC Credit Lines",
      "description": "A strategic legal and financial analysis on resolving defaulted CRED Cash credit lines, navigating the tripartite Lending Service Provider (LSP) framework, halting recovery harassment, and negotiating direct OTS haircuts with underwriting partner banks.",
      "image": "https://www.settleloans.in/images/infographics/cred-cash-personal-loan-settlement-process.jpg",
      "datePublished": "2026-09-03T12:00:00+05:30",
      "dateModified": "2026-09-03T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/cred-cash-personal-loan-settlement-process#webpage"
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
      "@id": "https://www.settleloans.in/cred-cash-personal-loan-settlement-process#service",
      "name": "SettleLoans - CRED Cash Loan Settlement & Legal Defense",
      "description": "Specialized legal advisory and financial negotiation service for prime borrowers defaulting on CRED Cash personal loan lines underwritten by IDFC FIRST Bank, Newtap Finance, and L&T Finance. Secures maximum debt waivers and complete RBI anti-harassment protection.",
      "url": "https://www.settleloans.in/cred-cash-personal-loan-settlement-process",
      "image": "https://www.settleloans.in/images/infographics/cred-cash-personal-loan-settlement-process.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Connaught Place",
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
        "reviewCount": "1840",
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
          "datePublished": "2026-07-12",
          "reviewBody": "I had a ₹8.5 Lakh CRED Cash loan from IDFC FIRST Bank. After losing my tech job in Bengaluru, I missed 5 EMIs. Recovery agents called my office contacts and sent threats on WhatsApp. SettleLoans stepped in right away. They sent legal notices under RBI Digital Lending rules. Then they spoke directly with the bank's stressed asset desk. They closed my loan for ₹3.9 Lakhs and waived all extra charges. I received my zero dues certificate in 25 days.",
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
            "name": "Ananya Sengupta"
          },
          "datePublished": "2026-08-04",
          "reviewBody": "My Newtap Finance CRED Cash loan had ₹65,000 in bounce fees. My consulting business had slow cash flow. The CRED app gave no help or relief options. SettleLoans helped cancel my bank auto-debit. They removed all unfair penalties from the bill. They settled the whole loan at a 54% discount with an official letter from Newtap.",
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
            "name": "Karthik Ramanathan"
          },
          "datePublished": "2026-06-28",
          "reviewBody": "I got a Section 25 PSSA notice from L&T Finance for my ₹6 Lakh CRED loan. SettleLoans gave me quick legal support. Their lawyers replied with proof of my financial issues. They moved my case to the National Lok Adalat. I settled the loan with a 50% waiver.",
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
            "name": "Varun Malhotra"
          },
          "datePublished": "2026-08-19",
          "reviewBody": "Recovery agents visited my home society and created trouble. SettleLoans stopped the harassment quickly. They reported the privacy breach to the bank's Principal Nodal Officer and RBI Ombudsman. The calls stopped at once. We got a formal compromise letter on official letterhead.",
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
      "@id": "https://www.settleloans.in/cred-cash-personal-loan-settlement-process#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I settle a CRED Cash personal loan directly inside the CRED mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. CRED is only a digital loan platform (LSP). It does not lend its own funds. You must settle directly with the partner bank or NBFC. This includes lenders like IDFC FIRST Bank, Newtap Finance, or L&T Finance."
          }
        },
        {
          "@type": "Question",
          "name": "Who are the primary lending partners underwriting CRED Cash loans in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RBI-regulated lenders provide all CRED Cash loans. Main partners are IDFC FIRST Bank, Newtap Finance, L&T Finance, and KrazyBee Services. Your sanction letter and CIBIL report name your exact lender."
          }
        },
        {
          "@type": "Question",
          "name": "How can borrowers stop continuous e-NACH auto-debit bounce fees on CRED Cash defaults?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ask your bank to cancel the e-NACH auto-debit mandate under NPCI rules. Send a written notice to the lender as well. During settlement talks, ask for a 100% waiver on bounce fees under RBI rules."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver or haircut can be negotiated on a defaulted CRED Cash loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Loans overdue by more than 90 to 180 days can get a 40% to 60% principal waiver. Lenders also drop 100% of unpaid late fees and penal interest."
          }
        },
        {
          "@type": "Question",
          "name": "How do you defend against recovery agents calling workplace colleagues or visiting home for CRED Cash dues?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RBI rules bar agents from calling coworkers, friends, or family. Agents cannot call outside 8 AM to 7 PM. Send a cease-and-desist letter to the bank's Nodal Officer and complain to the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "Can the partner bank file a police FIR or arrest me for defaulting on a CRED Cash loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Default on an unsecured personal loan is a civil matter. The police cannot file an FIR or arrest you for loan defaults due to money problems."
          }
        },
        {
          "@type": "Question",
          "name": "What should you do upon receiving a Section 25 PSSA notice for a bounced CRED Cash payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Section 25 PSSA notice gives you 15 days to act. Hire an advocate to send a formal legal reply. State your genuine money hardship and request a mutual settlement or Lok Adalat session."
          }
        },
        {
          "@type": "Question",
          "name": "How does settling a CRED Cash loan impact your CIBIL score and credit history?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The lender marks the loan as 'Settled' with a ₹0 balance. Your score drops at first. But you can rebuild your score past 750 in 18 to 24 months with a secured credit card."
          }
        },
        {
          "@type": "Question",
          "name": "How do you verify if a CRED Cash settlement sanction letter is genuine and authentic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Make sure the letter is on the official letterhead of the partner bank or NBFC. Check for company CIN, correct loan number, agreed settlement amount, payment dates, and full debt release terms."
          }
        },
        {
          "@type": "Question",
          "name": "What is the statutory timeline for receiving the No Dues Certificate (NDC) after settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, lenders must give you the No Dues Certificate within 30 days. They must also update credit bureaus. Late delays carry a penalty of ₹5,000 per day payable to you."
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

export default function CredCashPersonalLoanSettlementPage() {
  const tocItems = [
    { id: 'fintech-underwriting-architecture', title: '1. CRED Architecture & Partner Underwriting' },
    { id: 'cred-delinquency-timeline-npa', title: '2. Delinquency Timeline & NPA Milestones' },
    { id: 'halting-nach-bounce-penal-charges', title: '3. Stopping NACH Bounces & Penalty Fees' },
    { id: 'npv-recovery-valuation-haircut', title: '4. OTS Haircut Policies & Valuation Models' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'anti-harassment-rbi-protections', title: '6. Recovery Practices & Anti-Harassment Rights' },
    { id: 'step-by-step-settlement-roadmap', title: '7. Step-by-Step Resolution Roadmap' },
    { id: 'section-25-pssa-arbitration-defense', title: '8. Legal Notices, Section 25 & Arbitration' },
    { id: 'sanction-letter-audit-ndc-closure', title: '9. Sanction Letter Audit & ₹0 NDC Mandate' },
    { id: 'cibil-recovery-rehabilitation-plan', title: '10. CIBIL Trajectory & Credit Restoration' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Advocacy & Representation' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "Can I settle a CRED Cash personal loan directly inside the CRED mobile app?",
      answer: "No. CRED is only a digital loan platform (LSP). It does not lend its own funds. You must settle directly with the partner bank or NBFC. This includes lenders like IDFC FIRST Bank, Newtap Finance, or L&T Finance."
    },
    {
      question: "Who are the primary lending partners underwriting CRED Cash loans in India?",
      answer: "RBI-regulated lenders provide all CRED Cash loans. Main partners are IDFC FIRST Bank, Newtap Finance, L&T Finance, and KrazyBee Services. Your sanction letter and CIBIL report name your exact lender."
    },
    {
      question: "How can borrowers stop continuous e-NACH auto-debit bounce fees on CRED Cash defaults?",
      answer: "Ask your bank to cancel the e-NACH auto-debit mandate under NPCI rules. Send a written notice to the lender as well. During settlement talks, ask for a 100% waiver on bounce fees under RBI rules."
    },
    {
      question: "What percentage of debt waiver or haircut can be negotiated on a defaulted CRED Cash loan?",
      answer: "Loans overdue by more than 90 to 180 days can get a 40% to 60% principal waiver. Lenders also drop 100% of unpaid late fees and penal interest."
    },
    {
      question: "How do you defend against recovery agents calling workplace colleagues or visiting home for CRED Cash dues?",
      answer: "RBI rules bar agents from calling coworkers, friends, or family. Agents cannot call outside 8 AM to 7 PM. Send a cease-and-desist letter to the bank's Nodal Officer and complain to the RBI Ombudsman."
    },
    {
      question: "Can the partner bank file a police FIR or arrest me for defaulting on a CRED Cash loan?",
      answer: "No. Default on an unsecured personal loan is a civil matter. The police cannot file an FIR or arrest you for loan defaults due to money problems."
    },
    {
      question: "What should you do upon receiving a Section 25 PSSA notice for a bounced CRED Cash payment?",
      answer: "A Section 25 PSSA notice gives you 15 days to act. Hire an advocate to send a formal legal reply. State your genuine money hardship and request a mutual settlement or Lok Adalat session."
    },
    {
      question: "How does settling a CRED Cash loan impact your CIBIL score and credit history?",
      answer: "The lender marks the loan as 'Settled' with a ₹0 balance. Your score drops at first. But you can rebuild your score past 750 in 18 to 24 months with a secured credit card."
    },
    {
      question: "How do you verify if a CRED Cash settlement sanction letter is genuine and authentic?",
      answer: "Make sure the letter is on the official letterhead of the partner bank or NBFC. Check for company CIN, correct loan number, agreed settlement amount, payment dates, and full debt release terms."
    },
    {
      question: "What is the statutory timeline for receiving the No Dues Certificate (NDC) after settlement?",
      answer: "Under RBI Circular RBI/2023-24/60, lenders must give you the No Dues Certificate within 30 days. They must also update credit bureaus. Late delays carry a penalty of ₹5,000 per day payable to you."
    }
  ];

  return (
    <div
      className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white"
      style={{ fontFamily: 'var(--font-satoshi), Satoshi, -apple-system, BlinkMacSystemFont, sans-serif' }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
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
      `,
        }}
      />

      {/* 1. Charcoal Navy Hero Section */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-blue-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Fintech Credit Dispute Resolution • Prime Borrowers</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">CRED Cash Personal Loan Settlement: OTS Defense Guide</h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Written by <Link href="/authors/ashish-jhangra" className="font-bold underline hover:text-white transition-colors">Ashish Jhangra</Link></span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: September 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI Digital Lending Guidelines Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate CRED Cash Settlement</span>
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
          
          {/* Left Column (Sticky Table of Contents + Executive Crux) */}
          <aside className="w-full sticky top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>CRED Cash Case Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                CRED acts only as a loan app (LSP). It does not hold loans on its books. Your loan belongs to partner lenders like IDFC FIRST Bank, Newtap Finance, or L&amp;T Finance. Direct legal talks can get you a 40% to 60% principal cut under RBI rules.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: CRED Cash Loan Default Resolution</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>LSP Platform Setup:</strong> CRED is not a bank. You cannot settle in the app. You must talk directly to IDFC FIRST, Newtap, or L&amp;T Finance.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Stop Extra Fees:</strong> Cancel your e-NACH mandate at your bank to stop bounce charges. Legal steps remove 100% of penal interest under RBI rules.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Big 40% to 60% Waivers:</strong> After 90 days of default (NPA), banks prefer quick cash settlement over slow court recovery.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Anti-Harassment Rules:</strong> Agents cannot call your office coworkers, friends, or family. They cannot call before 8 AM or after 7 PM.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Guaranteed ₹0 NDC Delivery:</strong> Under RBI Circular RBI/2023-24/60, lenders must give your No Dues Certificate within 30 days of full payment.</span>
                </li>
              </ul>
            </div>
            
            {/* Section 1: Fintech Architecture & Tripartite Underwriting */}
            <section id="fintech-underwriting-architecture" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Fintech Architecture &amp; Partner Underwriting</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Deconstructing CRED Cash</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                CRED Cash offers quick personal credit lines to borrowers with CIBIL scores over 750. But CRED does not lend its own money. Under RBI Digital Lending Guidelines (2022), CRED is only a digital loan agent (LSP).
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The actual funds come from regulated partner institutions:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                <strong>1. IDFC FIRST Bank Limited:</strong> Provides large personal loans to salaried corporate staff.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                <strong>2. Newtap Finance Private Limited:</strong> CRED&apos;s own NBFC unit that manages credit lines.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                <strong>3. L&amp;T Finance Limited &amp; Partner NBFCs:</strong> Financial partners like KrazyBee Services and LiquiLoans that co-lend credit.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                If you miss payments, the CRED app cannot help you settle. App chat systems only ask for full dues. To get a true One-Time Settlement (OTS) with deep fee cuts, you must speak directly to the actual lender.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Regulatory Principle:</strong> Under the RBI Master Direction on Compromise Settlements (2023), only the bank&apos;s Stressed Asset Committee can approve waivers. Messages on the app have no legal value.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Timeline & NPA Stages */}
            <section id="cred-delinquency-timeline-npa" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; NPA Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">CRED Cash Delinquency Lifecycle</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Defaulted CRED Cash loans move through set stages under RBI IRACP rules and Ind AS 109 norms. Early default brings automated alerts. Once overdue past 90 days, the loan becomes a Non-Performing Asset (NPA). At that point, the bank shifts from simple collection to loss recovery.
              </p>

              {/* Comprehensive Stage Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Delinquency Bucket</th>
                      <th>Days Past Due (DPD)</th>
                      <th>Lender &amp; Platform Actions</th>
                      <th>Legal &amp; Judicial Exposure</th>
                      <th>Settlement Haircut Window</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-0 (Initial Default)</td>
                      <td>1 – 30 Days</td>
                      <td>App alerts, automated phone calls, and daily e-NACH debit tries.</td>
                      <td>No legal action yet. Initial 30-DPD mark on credit file.</td>
                      <td>Low. Bank asks for full EMI payment.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-1 (Mid Delinquency)</td>
                      <td>31 – 60 Days</td>
                      <td>Handed to call centers. Constant SMS and WhatsApp messages.</td>
                      <td>Formal warning notices sent. CIBIL score drops 50 to 90 points.</td>
                      <td>Low. Bank may offer small tenure changes.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-2 (Pre-NPA Escalation)</td>
                      <td>61 – 90 Days</td>
                      <td>Field recovery team assigned. Home and office visits planned.</td>
                      <td>Legal 15-day demand notice under Section 25 PSSA.</td>
                      <td>Medium. Discussions on penal interest waivers begin.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">NPA (Substandard Asset)</td>
                      <td>91 – 180 Days</td>
                      <td>Moved to Stressed Assets team. Bank sets aside 15% to 25% capital.</td>
                      <td>Court summons under Section 25 PSSA or Lok Adalat notices.</td>
                      <td><span className="text-emerald-700 font-bold">High (35% to 50% Principal Haircut).</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-red-700">Doubtful / Loss Asset</td>
                      <td>181 – 365+ Days</td>
                      <td>Technical write-off under Ind AS 109 rules. 50% to 100% loss booked.</td>
                      <td>Arbitration notices and civil suits filed.</td>
                      <td><span className="text-emerald-700 font-bold">Maximum (50% to 60% Total Haircut).</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                After 180 days, the lender books the loss on its balance sheet. A single cash payment helps them recover money fast. This allows them to offer large principal cuts.
              </p>
            </section>

            {/* Section 3: Stopping NACH Bounce Charges & Penal Fees */}
            <section id="halting-nach-bounce-penal-charges" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Banknote className="w-4 h-4" />
                <span>3. Halting NACH Bounce Charges &amp; Penal Fees</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Stopping Predatory e-NACH Presentations</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When you miss a CRED Cash EMI, automated systems present your e-NACH mandate up to 4 times a month. Each failed debit brings heavy double fees. Your bank charges ₹250 to ₹500 plus GST. The lender also adds ₹500 to ₹1,000 plus GST in bounce fines. Penal interest of 24% to 36% per year gets added on top.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI Fair Lending Practices rules (2023), lenders cannot add extra interest on penalty charges. You can stop these charges in two simple steps:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                First, tell your bank in writing or online to cancel the e-NACH mandate under NPCI rules. Second, during formal OTS talks, have your advocate demand a 100% waiver of all bounce fees and penal interest.
              </p>
            </section>

            {/* Section 4: OTS Haircut Policies & NPV Valuation */}
            <section id="npv-recovery-valuation-haircut" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>4. OTS Haircut Policies &amp; Valuation Models</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Partner Bank OTS Haircut Valuation</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI compromise rules, partner banks assess settlement offers using Net Present Value (NPV) recovery math. Personal credit lines have no physical collateral. So lenders compare quick settlement cash against long court battles, lawyer costs, and bad-loan provisioning loss.
              </p>

              {/* Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here C_t is future money recovered and r is the discount rate. Deductions cover court delays, legal fees, and locked capital.
                </p>
              </div>

              {/* Settlement Haircut Slabs Table */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">Realistic CRED Cash Settlement Haircut Slabs by Partner Entity &amp; Aging</h3>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Underwriting Partner Entity</th>
                      <th>Delinquency Aging Category</th>
                      <th>Penal &amp; Bounce Waiver</th>
                      <th>Principal Haircut Range</th>
                      <th>Target Settlement Benchmark</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">IDFC FIRST Bank (CRED Cash)</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% Full Waiver</td>
                      <td>30% – 45% Principal Waiver</td>
                      <td>Pay 45%–55% of Core Principal</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">IDFC FIRST Bank (CRED Cash)</td>
                      <td>181 – 365+ Days (Written Off)</td>
                      <td>100% Full Waiver</td>
                      <td>45% – 60% Principal Waiver</td>
                      <td>Pay 35%–40% of Core Principal</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Newtap Finance (Captive NBFC)</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% Full Waiver</td>
                      <td>35% – 50% Principal Waiver</td>
                      <td>Pay 40%–50% of Core Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Newtap Finance (Captive NBFC)</td>
                      <td>180+ Days (Doubtful Asset)</td>
                      <td>100% Full Waiver</td>
                      <td>50% – 65% Principal Waiver</td>
                      <td>Pay 30%–35% of Total Book Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">L&amp;T Finance / KrazyBee</td>
                      <td>120+ Days (Substandard/NPA)</td>
                      <td>100% Full Waiver</td>
                      <td>40% – 55% Principal Waiver</td>
                      <td>Pay 35%–45% of Utilized Principal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: High-Impact Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-12">
              <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-6 text-slate-800">
                <div className="bg-[#0A2540] text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-[#1F5EFF]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] flex items-center justify-center text-white text-xs shadow-sm">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block">
                        Legal Defense &amp; Action Blueprint
                      </span>
                      <h3 className="text-sm md:text-base font-black text-white leading-tight">
                        CRED Cash Personal Loan Settlement &amp; Partner Bank Resolution Architecture
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/cred-cash-personal-loan-settlement-process.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1F5EFF] hover:text-blue-300 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span className="hidden sm:inline">Open Full Size</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 16:9 Landscape Infographic Image */}
                <div className="p-3 md:p-4 bg-slate-50">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img
                      src="/images/infographics/cred-cash-personal-loan-settlement-process.jpg"
                      alt="CRED Cash Personal Loan Settlement and Partner Bank Resolution Blueprint Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Core Strategy:</strong> Stop recovery harassment, cancel auto-debits, and settle directly with bank credit heads for 40% to 60% waivers.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Third-Party Recovery Defense & RBI Rules */}
            <section id="anti-harassment-rbi-protections" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>5. Recovery Practices &amp; Anti-Harassment Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Halting CRED Cash Harassment Under RBI Directives</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Many collection agencies use harsh pressure tactics. They call your office phone, contact coworkers on social networks, and threaten home visits.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                RBI rules strictly ban these actions: (a) Agents cannot contact employers or references; (b) Calls are allowed only between 8:00 AM and 7:00 PM; (c) Threats, abuse, and fake police claims are strict regulatory offenses.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Sending a legal cease-and-desist letter to the bank&apos;s Nodal Officer stops agency calls quickly. You can also file a complaint on the RBI Ombudsman portal (CMS).
              </p>
            </section>

            {/* Section 7: Step-by-Step NBFC Settlement Roadmap */}
            <section id="step-by-step-settlement-roadmap" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>6. Step-by-Step Resolution Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Step-by-Step Guide to CRED Cash Settlement</h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Follow these clear legal steps to settle your CRED Cash loan safely:
              </p>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">1</span>
                    Identify the Underwriting Regulated Entity &amp; Loan Number
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Check your loan letter or credit report. Find whether your loan is with IDFC FIRST Bank, Newtap Finance, or L&amp;T Finance. Note down your loan account number.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">2</span>
                    Revoke e-NACH Mandates &amp; Formalize Communication
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Stop auto-debit payments at your bank to avoid extra bounce fees. Inform the lender in writing to route all notices through your legal counsel.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">3</span>
                    Submit Formal Hardship Petition to Stressed Assets Desk
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Gather proof of hardship like job loss letters, salary cuts, or hospital bills. Send an OTS request directly to the partner bank&apos;s stressed asset desk.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">4</span>
                    Negotiate Committee-Level Principal Haircut
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Reject initial low-discount offers with proof of low income. Negotiate directly with credit managers for a 40% to 60% principal waiver.
                  </p>
                </div>

                {/* Step 5 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">5</span>
                    Forensic Verification of the OTS Sanction Letter
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Review the settlement letter carefully. Ensure it is on the partner bank&apos;s official letterhead with loan details, amount, due date, and debt release terms.
                  </p>
                </div>

                {/* Step 6 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">6</span>
                    Direct Account Remittance &amp; Secure ₹0 NDC
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Pay the agreed settlement amount directly to the bank via RTGS or NEFT. The lender must issue your No Dues Certificate within 30 days under RBI rules.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Section 25 Notices, Arbitration & Lok Adalat */}
            <section id="section-25-pssa-arbitration-defense" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>7. Legal Notices, Section 25 &amp; Arbitration</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Sec 25 PSSA &amp; Lok Adalat Defense for CRED Cash</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                After 60 to 90 days of default, lenders may send 15-day statutory notices under Section 25 of the Payment and Settlement Systems Act (PSSA) for bounced auto-debits. They may also start sole arbitration in distant cities.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A Section 25 PSSA notice is only a demand notice, not a police warrant. A quick legal reply showing financial hardship keeps you safe and opens settlement talks. Under Supreme Court rulings in <em>Perkins Eastman</em> and <em>TRF Ltd</em>, unilateral arbitrator appointments are invalid under Sections 12 and 14 of the Arbitration Act.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Lenders also settle cases at the National Lok Adalat under the Legal Services Authorities Act, 1987. An award passed in Lok Adalat has the force of a final Civil Court Decree. No one can appeal it.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Dispute Resolution Channel</th>
                      <th>Governing Legal Mechanism</th>
                      <th>Haircut Potential</th>
                      <th>Resolution Timeline</th>
                      <th>Judicial Finality</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Direct Partner Bank OTS</td>
                      <td>Compromise pact under RBI Master Directions.</td>
                      <td><strong>40% to 60% Debt Haircut</strong></td>
                      <td>15 to 30 Days</td>
                      <td>Private deal with ₹0 NDC.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">National Lok Adalat</td>
                      <td>Judicial talks before a sitting judge and bench.</td>
                      <td><strong>45% to 60% Debt Haircut</strong></td>
                      <td>Single-day session</td>
                      <td><strong>Civil Court Decree</strong> (No appeals).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Arbitration Challenge</td>
                      <td>Challenging unfair sole-arbitrator choice.</td>
                      <td>Variable (Leads to OTS)</td>
                      <td>3 to 8 Months</td>
                      <td>Stayed under Perkins Eastman rule.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Section 25 PSSA Defense</td>
                      <td>Magistrate court compoundable legal defense.</td>
                      <td><strong>35% to 50% Debt Haircut</strong></td>
                      <td>2 to 6 Months</td>
                      <td>Case closed upon settlement payment.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: Sanction Letter Audit & ₹0 NDC Mandate */}
            <section id="sanction-letter-audit-ndc-closure" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>8. Sanction Letter Audit &amp; ₹0 NDC Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Authenticating CRED Cash OTS Sanction Letters</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Never pay money based on phone calls or WhatsApp chats from recovery agents. An authentic OTS letter must come on the lender&apos;s official corporate letterhead (such as IDFC FIRST Bank, Newtap Finance, or L&amp;T Finance). It must list the company CIN, office address, exact loan number, agreed amount, and full debt release terms.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI Circular RBI/2023-24/60, the lender must issue the No Dues Certificate and update credit bureaus within 30 days. If they delay, they must pay you ₹5,000 for each day of delay.
              </p>
            </section>

            {/* Section 10: CIBIL Score Trajectory & Rehabilitation */}
            <section id="cibil-recovery-rehabilitation-plan" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. CIBIL Trajectory &amp; Credit Restoration</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Post-Settlement CIBIL Recovery for CRED Cash</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Settling your loan marks the account as <strong>&apos;Settled&apos;</strong> with an outstanding balance of <strong>₹0</strong>. This causes a short-term drop in your score. But it permanently stops ongoing default remarks and legal risks.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                You can raise your score back above 750 in 18 to 24 months. Use a secured fixed-deposit credit card (FD card), keep card use below 25%, and make all payments on time.
              </p>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Representation */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>10. Legal Defense &amp; Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed CRED Cash Borrowers Trust SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                SettleLoans stops collection harassment through legal notices. We handle Section 25 PSSA notices and challenge unfair arbitration. We negotiate directly with IDFC FIRST Bank, Newtap Finance, and L&amp;T Finance to secure large debt cuts and genuine No Dues Certificates.
              </p>

              {/* Placement of Reusable CompanySection */}
              <div className="my-8">
                <CompanySection />
              </div>
            </section>

            {/* Section 12: Frequently Asked Questions (FAQ Accordion) */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>11. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                FAQs on CRED Cash Loan Settlement &amp; RBI Rules
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    name="faq-accordion"
                    className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-slate-300 open:border-[#1F5EFF]/30 open:shadow-md"
                  >
                    <summary className="w-full p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-4">
                      <span className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-all duration-300">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </summary>
                    <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Regulatory References & Official Sources Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                Official Regulatory References &amp; Statutory Circulars
              </h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank of India (RBI):</strong> Guidelines on Digital Lending (DOR.CRE.REC.66/21.07.001/2022-23) — Lending Service Providers (LSP) &amp; Digital Lending Apps (DLA)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>RBI Master Direction:</strong> Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>RBI Circular:</strong> Fair Lending Practice - Penal Charges in Loan Accounts &amp; Release of Movable/Immovable Property Documents (RBI/2023-24/60)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Online Grievance Redressal Mechanism for Unlawful Recovery Harassment &amp; Excessive NACH Penalties
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987 — National Lok Adalat Pre-Litigation Conciliation Framework
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Guides & Resources Strip (10 Topic Badges) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1F5EFF]" />
                Explore Related Banking &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/idfc-first-bank-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  IDFC FIRST Bank Loan Settlement
                </Link>
                <Link
                  href="/lt-finance-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  L&amp;T Finance Loan Settlement
                </Link>
                <Link
                  href="/krazybee-services-nbfc-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  KrazyBee Services NBFC Settlement
                </Link>
                <Link
                  href="/app-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  App Loan Settlement Guide
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank OTS Policy Guide
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Percentage
                </Link>
                <Link
                  href="/section-25-pssa-notice-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 25 PSSA Notice Defense
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Recovery Agent Workplace Visit Rules
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column (Sidebar Cards) */}
          <aside className="w-full sticky top-24 space-y-6">
            {/* Card 1: Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Link href="/authors/ashish-jhangra" className="block flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md hover:ring-2 hover:ring-[#1F5EFF] transition-all">
                    AJ
                  </div>
                </Link>
                <div>
                  <div className="font-bold text-slate-900 text-base leading-tight">
                    <Link
                      href="/authors/ashish-jhangra"
                      className="hover:text-[#1F5EFF] transition-colors"
                    >
                      Ashish Jhangra
                    </Link>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Lead Banking Legal &amp; Debt Settlement Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has led over 1,500 debt settlement cases across top lenders. He handles negotiations with IDFC FIRST Bank, Newtap Finance, L&amp;T Finance, and Bajaj Finance. He specializes in digital loan disputes, Section 25 PSSA legal replies, and borrower rights under RBI rules.
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-[#1F5EFF] hover:underline"
                >
                  View Profile &rarr;
                </Link>
                <a
                  href="https://www.linkedin.com/company/settleloans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-[#1F5EFF]"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Card 2: Emergency Advocate Assistance CTA */}
            <div className="bg-gradient-to-br from-[#1F5EFF] to-blue-700 text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 text-blue-100 text-xs font-bold uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Fintech Dispute Resolution</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing CRED Cash Loan Default?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop aggressive recovery calls and daily auto-debit bounce fees. Our banking advocates review your loan, reply to legal notices, submit your hardship petition, and secure an official settlement letter from your partner bank.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to a Settlement Advocate
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Talks:</strong> We bypass app bots and speak straight to the Stressed Assets team at your bank or NBFC.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Harassment:</strong> We send legal cease-and-desist notices to stop workplace calls under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Official Verification:</strong> We review all settlement letters on bank letterhead before you pay any money.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC:</strong> We track your case until your No Dues Certificate arrives and credit bureaus update.
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
