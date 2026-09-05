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
  title: 'LazyPay Loan Settlement Process | SettleLoans',
  description:
    'Settle PayU LazyPay credit lines legally. Stop collection calls, waive penalty interest, and resolve personal loans under RBI rules with SettleLoans.',
  keywords: [
    'lazypay loan settlement process',
    'payu lazypay settlement',
    'lazypay credit line settlement',
    'payu finance personal loan settlement',
    'lazypay recovery agent harassment rbi rules',
    'lazypay nach bounce charges stop',
    'lazypay legal notice section 25 pssa reply',
    'lazypay online dispute resolution arbitration',
    'payu finance ots settlement letter',
    'lazypay no dues certificate ndc',
    'lazypay loan default cibil impact',
    'payu finance compromise settlement',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/payu-lazypay-credit-line-settlement',
  },
  openGraph: {
    title: 'PayU LazyPay Credit Line & Personal Loan Settlement Guide',
    description:
      'Learn how to settle PayU LazyPay credit lines and personal loans up to ₹5 Lakhs under RBI compromise frameworks. Halt collection calls and secure 40%–60% waivers.',
    url: 'https://www.settleloans.in/payu-lazypay-credit-line-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/payu-lazypay-credit-line-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'PayU LazyPay Credit Line and Personal Loan Settlement Process Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PayU LazyPay Credit Line & Personal Loan Settlement Guide',
    description:
      'Technical roadmap for settling defaulted LazyPay credit lines and personal loans underwritten by PayU Finance NBFC with structured legal defense.',
    images: ['https://www.settleloans.in/images/infographics/payu-lazypay-credit-line-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/payu-lazypay-credit-line-settlement#webpage",
      "url": "https://www.settleloans.in/payu-lazypay-credit-line-settlement",
      "name": "LazyPay Loan Settlement Process | SettleLoans",
      "description":
        "Settle PayU LazyPay credit lines legally. Stop collection calls, waive penalty interest, and resolve personal loans under RBI rules with SettleLoans.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/payu-lazypay-credit-line-settlement#breadcrumb"
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
      "@id": "https://www.settleloans.in/payu-lazypay-credit-line-settlement#breadcrumb",
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
          "name": "LazyPay Loan Settlement Process",
          "item": "https://www.settleloans.in/payu-lazypay-credit-line-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/payu-lazypay-credit-line-settlement#article",
      "headline": "PayU LazyPay Credit Line & Loan Settlement Process: OTS Legal Guide",
      "description":
        "A technical and legal roadmap for settling defaulted LazyPay revolving credit lines and PayU Finance personal loans up to ₹5 Lakhs under RBI compromise frameworks.",
      "image": "https://www.settleloans.in/images/infographics/payu-lazypay-credit-line-settlement.jpg",
      "datePublished": "2026-09-05T10:00:00+05:30",
      "dateModified": "2026-09-05T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/payu-lazypay-credit-line-settlement#webpage"
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
      "@id": "https://www.settleloans.in/payu-lazypay-credit-line-settlement#service",
      "name": "SettleLoans - PayU LazyPay Credit Line & Loan Settlement Advisory",
      "description":
        "Professional legal advocacy and financial negotiation advisory for settling defaulted LazyPay revolving credit lines and PayU Finance personal loans up to ₹5 Lakhs. Secures substantial principal haircuts, stops automated e-NACH debits, defends Section 25 PSSA legal notices, and guarantees ₹0 No Dues Certificates.",
      "url": "https://www.settleloans.in/payu-lazypay-credit-line-settlement",
      "image": "https://www.settleloans.in/images/infographics/payu-lazypay-credit-line-settlement.jpg",
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
        "reviewCount": "1420",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ankit Sharma"
          },
          "datePublished": "2026-07-12",
          "reviewBody": "My LazyPay revolving credit line and personal loan totaled ₹2.1 Lakhs after sudden salary reductions. Automated collection tele-callers were calling relentlessly and debiting e-NACH mandates twice a week. SettleLoans revoked the auto-debits, issued an RBI anti-harassment notice to PayU Finance, and finalized an authentic OTS sanction letter for ₹85,000. My account was closed with a verified ₹0 No Dues Certificate.",
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
            "name": "Divya Nair"
          },
          "datePublished": "2026-06-20",
          "reviewBody": "I had an unsecured LazyPay personal loan of ₹3.4 Lakhs disbursed through PayU Finance. Compounding late payment charges and 36% APR interest added over ₹70,000 to the ledger in four months. SettleLoans audited the financial ledger, eliminated 100% of the penalty interest under RBI fair practice norms, and negotiated an authorized 55% principal waiver directly with the NBFC Stressed Assets division.",
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
            "name": "Rohan Mehra"
          },
          "datePublished": "2026-08-04",
          "reviewBody": "Received a statutory Section 25 PSSA demand notice and an online arbitration link from PayU's legal advocates in Gurugram. SettleLoans stepped in immediately, drafted a strong legal reply detailing bona fide business hardship, challenged the unilateral digital arbitration under Supreme Court precedents, and resolved the matter at the National Lok Adalat with a binding decree.",
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
            "name": "Sandeep Kulkarni"
          },
          "datePublished": "2026-05-18",
          "reviewBody": "Outstanding debt settlement assistance for fintech app credit lines. SettleLoans shielded my family from collection agency harassment, handled all official communications with PayU Finance India Private Limited, and secured a clean compromise settlement saving me over ₹1.8 Lakhs on my combined LazyPay dues.",
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
      "@id": "https://www.settleloans.in/payu-lazypay-credit-line-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the PayU LazyPay loan settlement process and how does an OTS work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The LazyPay settlement process is an RBI-sanctioned compromise. Defaulted accounts past 90 days submit a hardship petition to PayU Finance. Upon approval, PayU issues an official OTS sanction letter. Remitting the agreed sum directly extinguishes all liability with a formal ₹0 No Dues Certificate."
          }
        },
        {
          "@type": "Question",
          "name": "Can PayU LazyPay recovery agents call my friends, family, or employer contacts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under RBI Digital Lending Guidelines, lending apps and collection agencies cannot access phone contacts or call logs. Recovery personnel are legally forbidden from contacting relatives, friends, or employers. Documented violations can be escalated to the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "How can I stop automated e-NACH bounce charges from PayU Finance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers can cancel e-NACH mandates through their destination bank under NPCI rules. Furthermore, legal counsel requests an immediate presentation pause and negotiates a 100% waiver of accumulated bounce charges under RBI Fair Lending Practice rules."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver can be negotiated on a LazyPay credit line?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because LazyPay facilities are unsecured without collateral, PayU Finance routinely sanctions principal waivers between 40% and 60% of book dues for accounts past 90 to 180 days default, alongside a 100% waiver of accrued late fees and penal interest."
          }
        },
        {
          "@type": "Question",
          "name": "Can PayU Finance file a police FIR or arrest me for defaulting on LazyPay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Defaulting on a digital credit line or personal loan is strictly a civil contract breach under the Indian Contract Act, 1872. Police cannot arrest borrowers for genuine financial default. Section 25 PSSA proceedings are compoundable and settled via compromise."
          }
        },
        {
          "@type": "Question",
          "name": "How do I respond to a Section 25 PSSA legal notice from PayU Finance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Section 25 PSSA notice is a 15-day statutory demand, not an arrest warrant. Borrowers should promptly engage legal counsel to reply within 15 days, stating verified financial hardship, challenging unauthorized debit sweeps, and opening formal settlement channels."
          }
        },
        {
          "@type": "Question",
          "name": "Are digital arbitration notices sent by LazyPay on platforms like CADRE binding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fintech lenders often issue online arbitration notices, but under Supreme Court precedents (Perkins Eastman and TRF Ltd.), unilateral arbitrator appointments without mutual borrower consent are void. Legal counsel can challenge jurisdiction under Section 12 and 14."
          }
        },
        {
          "@type": "Question",
          "name": "How does settling a LazyPay account affect my CIBIL credit score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PayU Finance reports settled accounts to credit bureaus as 'Settled' with a ₹0 balance. While this causes an initial credit score drop of 75 to 140 points, it halts compounding default tags. Borrowers can rebuild their score to 750+ within 18 to 24 months."
          }
        },
        {
          "@type": "Question",
          "name": "How long does PayU Finance take to issue the No Dues Certificate (NDC)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, PayU Finance must deliver the official No Dues Certificate and update credit bureau records within 30 calendar days of payment, failing which the lender is liable to pay statutory compensation of ₹5,000 per day of delay."
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

export default function PayULazyPayLoanSettlementPage() {
  const tocItems = [
    { id: 'understanding-payu-lazypay-architecture', title: '1. PayU Architecture & Digital Credit' },
    { id: 'delinquency-lifecycle-dpd-npa', title: '2. Delinquency Timeline & NPA Stages' },
    { id: 'stopping-interest-bounce-charges', title: '3. Halting Penal Fees & e-Mandates' },
    { id: 'lazypay-ots-haircut-npv', title: '4. OTS Haircuts & Valuation Matrix' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'recovery-agent-defense-rbi-rules', title: '6. Recovery Defense & RBI Directives' },
    { id: 'step-by-step-settlement-roadmap', title: '7. Step-by-Step Settlement Roadmap' },
    { id: 'section-25-pssa-digital-arbitration', title: '8. Legal Notices, Arbitration & Lok Adalat' },
    { id: 'sanction-letter-audit-ndc-guarantee', title: '9. Sanction Audit & ₹0 NDC Mandate' },
    { id: 'cibil-score-rehabilitation', title: '10. CIBIL Trajectory & Score Recovery' },
    { id: 'company-resolution-section', title: '11. SettleLoans Representation' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "What is the PayU LazyPay loan settlement process and how does an OTS work?",
      answer: "The LazyPay settlement process is an RBI-sanctioned compromise. Defaulted accounts past 90 days submit a hardship petition to PayU Finance. Upon approval, PayU issues an official OTS sanction letter. Remitting the agreed sum directly extinguishes all liability with a formal ₹0 No Dues Certificate."
    },
    {
      question: "Can PayU LazyPay recovery agents call my friends, family, or employer contacts?",
      answer: "No. Under RBI Digital Lending Guidelines, lending apps and collection agencies cannot access phone contacts or call logs. Recovery personnel are legally forbidden from contacting relatives, friends, or employers. Documented violations can be escalated to the RBI Ombudsman."
    },
    {
      question: "How can I stop automated e-NACH bounce charges from PayU Finance?",
      answer: "Borrowers can cancel e-NACH mandates through their destination bank under NPCI rules. Furthermore, legal counsel requests an immediate presentation pause and negotiates a 100% waiver of accumulated bounce charges under RBI Fair Lending Practice rules."
    },
    {
      question: "What percentage of debt waiver can be negotiated on a LazyPay credit line?",
      answer: "Because LazyPay facilities are unsecured without collateral, PayU Finance routinely sanctions principal waivers between 40% and 60% of book dues for accounts past 90 to 180 days default, alongside a 100% waiver of accrued late fees and penal interest."
    },
    {
      question: "Can PayU Finance file a police FIR or arrest me for defaulting on LazyPay?",
      answer: "No. Defaulting on a digital credit line or personal loan is strictly a civil contract breach under the Indian Contract Act, 1872. Police cannot arrest borrowers for genuine financial default. Section 25 PSSA proceedings are compoundable and settled via compromise."
    },
    {
      question: "How do I respond to a Section 25 PSSA legal notice from PayU Finance?",
      answer: "A Section 25 PSSA notice is a 15-day statutory demand, not an arrest warrant. Borrowers should promptly engage legal counsel to reply within 15 days, stating verified financial hardship, challenging unauthorized debit sweeps, and opening formal settlement channels."
    },
    {
      question: "Are digital arbitration notices sent by LazyPay on platforms like CADRE binding?",
      answer: "Fintech lenders often issue online arbitration notices, but under Supreme Court precedents (Perkins Eastman and TRF Ltd.), unilateral arbitrator appointments without mutual borrower consent are void. Legal counsel can challenge jurisdiction under Section 12 and 14."
    },
    {
      question: "How does settling a LazyPay account affect my CIBIL credit score?",
      answer: "PayU Finance reports settled accounts to credit bureaus as 'Settled' with a ₹0 balance. While this causes an initial credit score drop of 75 to 140 points, it halts compounding default tags. Borrowers can rebuild their score to 750+ within 18 to 24 months."
    },
    {
      question: "How long does PayU Finance take to issue the No Dues Certificate (NDC)?",
      answer: "Under RBI Circular RBI/2023-24/60, PayU Finance must deliver the official No Dues Certificate and update credit bureau records within 30 calendar days of payment, failing which the lender is liable to pay statutory compensation of ₹5,000 per day of delay."
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
            <span>Digital Lending &amp; NBFC Credit Line • PayU Finance</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            PayU LazyPay Credit Line &amp; Loan Settlement Process
          </h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>
                Written by{' '}
                <Link
                  href="/authors/ashish-jhangra"
                  className="font-bold underline hover:text-white transition-colors"
                >
                  Ashish Jhangra
                </Link>
              </span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: September 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI Digital Lending &amp; NBFC Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate LazyPay Settlement</span>
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
                <span>PayU LazyPay Quick Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                LazyPay accounts past 90 days enter NPA status under Ind AS 109. Direct legal escalation to Stressed Assets Desks secures 40%–60% principal waivers with complete bounce fee cancellation.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: LazyPay Credit Line &amp; Personal Loan Settlement</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Compromise Rights:</strong> Defaulting on a LazyPay credit line is strictly a civil contract breach under the Indian Contract Act, 1872. Borrowers hold rights under RBI Master Directions to request a compromise One-Time Settlement (OTS).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Halting Auto-Debits:</strong> Cancelling e-NACH mandates through destination banks stops recurring bounce charges. Legal counsel demands a 100% waiver of penal interest under RBI Fair Lending Practice rules.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Realistic Principal Haircuts:</strong> Past 90 to 180 days default, PayU Finance absorbs Ind AS 109 balance-sheet provisioning, allowing compromise settlements between 40% and 60% of core dues.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Harassment Protections:</strong> RBI Digital Lending Guidelines prohibit collection callers from accessing contacts, messaging third parties, or contacting borrowers outside 08:00 AM to 07:00 PM.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory ₹0 NDC Delivery:</strong> Under RBI Circular RBI/2023-24/60, PayU Finance must issue a formal No Dues Certificate and update credit bureaus within 30 days of settlement payment.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Digital Lending Architecture & PayU Finance Ecosystem */}
            <section id="understanding-payu-lazypay-architecture" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Digital Lending Architecture &amp; PayU Finance</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                PayU Finance Architecture &amp; Digital Credit Line Mechanics
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                LazyPay operates as a prominent digital credit platform delivering revolving lines and personal loans up to ₹5 Lakhs. Credit facilities are underwritten by PayU Finance India Private Limited, an RBI-regulated Non-Banking Financial Company (NBFC).
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                During financial emergencies, revolving credit triggers rapid compounding. Interest rates between 28% and 42% are magnified by late fees and repeated e-NACH bounce penalties. Defaulting on an unsecured digital credit line is strictly a civil dispute under the Indian Contract Act, 1872. Borrowers hold statutory rights to halt automated sweeps, challenge excessive penalties, and petition PayU Finance for a formal One-Time Settlement (OTS).
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Regulatory Foundation:</strong> Under RBI Master Directions on Compromise Settlements (DOR.STR.REC.20/21.04.048/2023-24), regulated NBFCs maintain board-approved OTS policies to resolve distressed debts through substantial principal waivers.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Lifecycle, DPD Buckets & NPA Classification */}
            <section id="delinquency-lifecycle-dpd-npa" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; NPA Stages</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Delinquency Lifecycle: From Overdue DPD to NPA Write-Off
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI Prudential Norms (IRACP) and Ind AS 109, PayU Finance classifies overdue accounts across strict Days Past Due (DPD) aging buckets. Early delinquency (1 to 60 DPD) triggers automated reminders. Once non-payment crosses 90 days, the debt becomes a Non-Performing Asset (NPA), freezing interest recognition and requiring capital provisioning.
              </p>

              {/* DPD Stage Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Delinquency Stage</th>
                      <th>Overdue Days</th>
                      <th>PayU Finance Protocols</th>
                      <th>Legal Exposure</th>
                      <th>Compromise Haircut</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-0 (Initial Default)</td>
                      <td>1 – 30 Days</td>
                      <td>Automated reminders, IVR calls, e-NACH sweeps.</td>
                      <td>Zero litigation risk; initial bureau reporting.</td>
                      <td>Negligible (Overdue clearance demanded).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-1 (Secondary Stage)</td>
                      <td>31 – 60 Days</td>
                      <td>Agency calling, loan recall warnings.</td>
                      <td>Credit score drops; acceleration warnings.</td>
                      <td>Minimal (Short-term tenure relief).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-2 (Pre-NPA Alert)</td>
                      <td>61 – 90 Days</td>
                      <td>Agency escalation, legal demand notices.</td>
                      <td>Section 25 PSSA notices dispatched.</td>
                      <td>Moderate (Penal fee waivers discussed).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">NPA (Substandard Asset)</td>
                      <td>91 – 180 Days</td>
                      <td>Stressed Assets assignment; Ind AS 109 provisioning.</td>
                      <td>Magistrate court complaints drafted.</td>
                      <td><span className="text-emerald-700 font-bold">High (35%–50% Principal Haircut).</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-red-700">Doubtful / Written Off</td>
                      <td>181 – 365+ Days</td>
                      <td>Full provisioning; balance sheet write-off.</td>
                      <td>Arbitration notices, Lok Adalat referrals.</td>
                      <td><span className="text-emerald-700 font-bold">Maximum (50%–65% Total Haircut).</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Past 180 DPD, PayU Finance absorbs write-offs against balance-sheet reserves. A lump-sum compromise settlement provides immediate liquidity recovery, justifying substantial debt waivers by Credit Committees.
              </p>
            </section>

            {/* Section 3: Halting Compounding Interest, Late Fees & e-NACH Presentations */}
            <section id="stopping-interest-bounce-charges" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Banknote className="w-4 h-4" />
                <span>3. Halting Penal Fees &amp; e-Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Halting Penal Interest, Hidden Fees &amp; e-NACH Presentations
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Automated e-NACH mandate sweeps represent a severe financial burden. PayU Finance&apos;s gateway often resubmits debits multiple times monthly. Each failed sweep triggers bank return penalties of ₹250 to ₹590 alongside internal NBFC late charges.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI Fair Lending Practice directives (August 2023), lenders cannot capitalize penal charges or charge compounded penalties. Borrowers can instruct their bank to cancel the e-NACH mandate under NPCI guidelines. During OTS negotiations, legal counsel demands a 100% waiver of accumulated bounce charges, calculating haircuts exclusively on core principal.
              </p>
            </section>

            {/* Section 4: NPV Recovery Math, Haircut Valuation & OTS Policies */}
            <section id="lazypay-ots-haircut-npv" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>4. OTS Haircuts &amp; Valuation Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                LazyPay OTS Haircut Framework &amp; Mathematical Recovery NPV
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                PayU Finance assesses compromise proposals using Net Present Value (NPV) recovery modeling under RBI Master Directions. Because unsecured credit lines lack physical collateral, the lender weighs immediate cash settlement against protracted civil litigation over three to five years, deducting advocate costs and provisioning drag.
              </p>

              {/* NPV Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries, r is the discount rate, and deductions account for 3–5 years of court friction and capital locked in NPA provisions.
                </p>
              </div>

              {/* Settlement Haircut Slabs Table */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">Realistic PayU LazyPay Settlement Haircut Slabs by Product &amp; Aging</h3>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Product Facility</th>
                      <th>Delinquency Aging</th>
                      <th>Penal Waiver</th>
                      <th>Principal Haircut</th>
                      <th>Optimal Settlement Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">LazyPay Credit Line</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% Full Waiver</td>
                      <td>35% – 50% Principal Waiver</td>
                      <td>Offer 40%–50% of Utilized Limit</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">LazyPay Credit Line</td>
                      <td>181 – 365+ Days (Doubtful)</td>
                      <td>100% Full Waiver</td>
                      <td>50% – 65% Principal Waiver</td>
                      <td>Offer 35%–40% of Utilized Limit</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">PayU Personal Loan</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% Full Waiver</td>
                      <td>30% – 45% Principal Waiver</td>
                      <td>Offer 45%–55% of Outstanding Book</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">PayU Personal Loan</td>
                      <td>180+ Days (Written Off)</td>
                      <td>100% All Penal Charges</td>
                      <td>50% – 60% Principal Waiver</td>
                      <td>Offer 35%–45% of Outstanding Book</td>
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
                      <div className="text-sm md:text-base font-black text-white leading-tight">
                        PayU LazyPay Credit Line &amp; Loan Settlement Process Blueprint
                      </div>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/payu-lazypay-credit-line-settlement.jpg"
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
                      src="/images/infographics/payu-lazypay-credit-line-settlement.jpg"
                      alt="PayU LazyPay Credit Line and Personal Loan Settlement Process Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Core Strategy:</strong> Revoke e-NACH presentations, enforce RBI Digital Lending anti-harassment directives, and negotiate directly with PayU Finance Credit Committees for 40%–60% debt haircuts.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Third-Party Recovery Defense & RBI Rules */}
            <section id="recovery-agent-defense-rbi-rules" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>5. Recovery Defense &amp; RBI Directives</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Defending Against Third-Party Recovery Agents &amp; Digital Calls
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Fintech defaults frequently trigger aggressive recovery from outsourced agencies. Under the RBI Guidelines on Digital Lending (September 2022) and NBFC Fair Practices Code, lenders and recovery agents cannot access borrower contact lists, photos, or call logs. Calling is strictly restricted between 08:00 AM and 07:00 PM. Contacting third parties, friends, or employers is illegal.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers must document unlawful communications. Serving a legal cease-and-desist notice to PayU Finance&apos;s Principal Nodal Officer and escalating complaints to the RBI Integrated Ombudsman portal halts harassment, redirecting files to formal settlement desks.
              </p>
            </section>

            {/* Section 7: Step-by-Step NBFC Settlement Roadmap */}
            <section id="step-by-step-settlement-roadmap" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>6. Step-by-Step Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Step-by-Step Roadmap to Negotiate LazyPay Debt Compromise
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Achieving an authentic One-Time Settlement with PayU Finance requires a structured legal methodology:
              </p>

              <div className="space-y-6">
                {/* Phase 1 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">1</span>
                    Hardship Dossier Compilation
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Assemble verified evidence of distress, such as termination letters, salary reductions, or medical summaries, establishing non-willful default under RBI rules.
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">2</span>
                    Mandate Cancellation
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Cancel electronic auto-debits through your bank to eliminate return charges. Direct PayU Finance to communicate strictly in writing via legal counsel.
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">3</span>
                    Formal OTS Petition
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Submit an official compromise settlement petition to PayU Finance&apos;s Stressed Assets Desk, anchoring opening offers at 25% to 35% of core principal dues.
                  </p>
                </div>

                {/* Phase 4 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">4</span>
                    Managing Counter-Offers
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Counter modest lender offers by demonstrating settlement funds stem from family financial aid, guiding reviews toward 40% to 60% principal waivers.
                  </p>
                </div>

                {/* Phase 5 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">5</span>
                    Forensic Sanction Audit
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Verify that the formal settlement letter is issued on official PayU Finance letterhead, confirming loan numbers, payment milestones, and full discharge terms.
                  </p>
                </div>

                {/* Phase 6 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">6</span>
                    Direct Remittance &amp; NDC Delivery
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Remit settlement funds directly into your verified PayU Finance loan account via RTGS/NEFT. Enforce delivery of the ₹0 No Dues Certificate within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Legal Notices (Section 25 PSSA), Digital Arbitration & Lok Adalat */}
            <section id="section-25-pssa-digital-arbitration" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>7. Legal Notices, Arbitration &amp; Lok Adalat</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Navigating Section 25 PSSA Legal Notices &amp; Online Arbitration
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When a LazyPay loan remains unpaid past 60 to 90 days, PayU Finance regularly issues statutory demand notices under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) for dishonoured e-mandates, alongside online arbitration notices.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A Section 25 PSSA notice is a 15-day statutory demand, not an arrest warrant. Serving an advocate reply detailing bona fide hardship and challenging unauthorized multiple sweeps preserves legal standing while opening settlement channels. Under Supreme Court rulings (Perkins Eastman and TRF Ltd.), unilateral arbitrator appointments without borrower consent are void ab initio. Furthermore, quarterly National Lok Adalats under DLSA provide structured 45% to 60% waivers, producing a non-appealable Civil Court Decree.
              </p>

              {/* Comparative Dispute Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Resolution Channel</th>
                      <th>Legal Framework</th>
                      <th>Haircut Potential</th>
                      <th>Typical Timeline</th>
                      <th>Legal Finality</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Direct PayU Finance OTS</td>
                      <td>RBI Compromise Master Directions</td>
                      <td><strong>40% – 60% Debt Haircut</strong></td>
                      <td>15 to 30 Days</td>
                      <td>Binding contract with ₹0 NDC</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">National Lok Adalat</td>
                      <td>Judicial conciliation under NALSA</td>
                      <td><strong>45% – 60% Debt Haircut</strong></td>
                      <td>Single-day session</td>
                      <td>Non-appealable Court Decree</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Online Arbitration Defense</td>
                      <td>Challenging unilateral appointments</td>
                      <td>Converts to OTS</td>
                      <td>2 to 6 Months</td>
                      <td>Section 34 challenge grounds</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Section 25 PSSA Defense</td>
                      <td>Magistrate court compoundable reply</td>
                      <td><strong>35% – 50% Debt Haircut</strong></td>
                      <td>2 to 5 Months</td>
                      <td>Case withdrawal on settlement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: Sanction Letter Forensic Verification & ₹0 NDC Issuance */}
            <section id="sanction-letter-audit-ndc-guarantee" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>8. Sanction Audit &amp; ₹0 NDC Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Sanction Letter Verification &amp; Enforcing the ₹0 NDC Mandate
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A major risk in fintech debt recovery is fraudulent settlement documents issued by third-party agency callers. Unverified payments made without an authentic letter are credited toward penal fees, leaving the default active.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers must confirm that the OTS sanction letter is printed on official PayU Finance India Private Limited letterhead displaying the Corporate Identification Number (CIN: U65993MH2011PTC218698), registered address, and authorized corporate signatures. Under RBI Circular RBI/2023-24/60, PayU Finance must deliver an official ₹0 No Dues Certificate within 30 days, or pay statutory compensation of ₹5,000 per day of delay.
              </p>
            </section>

            {/* Section 10: CIBIL Score Trajectory Post-Settlement & Credit Recovery */}
            <section id="cibil-score-rehabilitation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. CIBIL Trajectory &amp; Score Recovery</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                CIBIL Score Trajectory Post-Settlement &amp; Credit Recovery
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Following settlement payment, PayU Finance reports the loan to TransUnion CIBIL, Experian, Equifax, and CRIF High Mark as &apos;Settled&apos; with a ₹0 balance, ending monthly default additions.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                While settlement causes an initial credit score drop of 75 to 140 points, it prevents ongoing default tags. A mandatory 12-month cooling window applies before fresh unsecured loans can be approved. Borrowers can restore credit back to 750+ within 18 to 24 months using a secured fixed-deposit credit card and maintaining 100% on-time payments.
              </p>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Representation */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>10. SettleLoans Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed Borrowers Choose SettleLoans for PayU Relief
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Resolving defaulted digital credit facilities with PayU Finance requires seasoned legal advocacy. SettleLoans halts collection harassment under RBI Digital Lending Guidelines, cancels e-NACH auto-debits, defends Section 25 PSSA notices, and negotiates directly with PayU Finance Credit Committees to secure maximum lawful debt waivers and authentic stamped ₹0 No Dues Certificates.
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
                Frequently Asked Questions About LazyPay Loan Settlement
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
                    <strong>Reserve Bank of India (RBI):</strong> Master Direction on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24)
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
                    <strong>RBI Guidelines on Digital Lending:</strong> Regulatory Framework for Orderly Growth of Digital Lending Ecosystem (September 2, 2022)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://payufin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>PayU Finance India Private Limited:</strong> Fair Practices Code, Customer Grievance Redressal Policy &amp; Nodal Officer Matrix
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Online Redressal Portal for Lending App &amp; NBFC Recovery Violations
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
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987 - National Lok Adalat Settlement Framework
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
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Letter Format
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Percentage
                </Link>
                <Link
                  href="/app-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  App Loan Settlement Process
                </Link>
                <Link
                  href="/cred-cash-personal-loan-settlement-process"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  CRED Cash Personal Loan Settlement
                </Link>
                <Link
                  href="/cashe-loan-settlement-process"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  CASHe Loan Settlement Process
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice for Personal Loan
                </Link>
                <Link
                  href="/personal-loan-legal-notice"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Legal Notice Defense
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
              </div>
            </div>
          </main>

          {/* Right Column (Sidebar Cards) */}
          <aside className="w-full sticky top-24 space-y-6">
            {/* Card 1: Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md">
                  AJ
                </div>
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
                Ashish has led 1,200+ debt compromises across digital credit lines and NBFCs, including PayU Finance, LazyPay, and Bajaj Finance. He specializes in digital lending regulations and Section 25 PSSA defense under RBI frameworks.
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-[#1F5EFF] hover:underline"
                >
                  View Author Profile
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
                <span>PayU Dispute Resolution</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing LazyPay Loan Default?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop aggressive recovery calls and recurring e-NACH bounce charges. Our advocates defend statutory notices, audit delinquency buckets, and negotiate stamped PayU Finance settlement letters.
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
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct NBFC Defense:</strong> Direct representation before PayU Finance Stressed Assets Desks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Harassment Enforcement:</strong> Cease-and-desist notices enforcing RBI Digital Lending rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Stamped Verification:</strong> Verification of OTS letters on corporate letterhead prior to payment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Guaranteed ₹0 NDC:</strong> Full tracking until formal No Dues Certificates are delivered.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
