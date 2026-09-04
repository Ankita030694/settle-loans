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
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'LenDenClub P2P Loan Settlement | SettleLoans',
  description: 'Learn how to settle LenDenClub P2P loans legally. Stop collection notices, handle partner NBFCs, and settle debt with SettleLoans.',
  keywords: [
    'lendenclub loan settlement process',
    'lendenclub p2p loan settlement',
    'lendenclub loan default legal action',
    'finstree loan settlement process',
    'innofin solutions p2p loan recovery',
    'lendenclub nach bounce charges stop',
    'lendenclub section 25 pssa notice reply',
    'p2p loan settlement rbi master directions',
    'lendenclub one time settlement haircut',
    'lendenclub cibil settled status',
    'lendenclub no dues certificate ndc',
    'how to settle p2p loan in india',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/lendenclub-p2p-loan-settlement-process',
  },
  openGraph: {
    title: 'LenDenClub Loan Settlement Process: Stop Recovery Harassment & Settle (2026)',
    description: 'Expert legal and financial manual for resolving defaulted LenDenClub and Finstree P2P personal loans. Stop recovery calls, challenge digital arbitration, and negotiate direct OTS waivers under RBI compromise norms.',
    url: 'https://www.settleloans.in/lendenclub-p2p-loan-settlement-process',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/lendenclub-p2p-loan-settlement-process.jpg',
        width: 1200,
        height: 675,
        alt: 'LenDenClub P2P Loan Settlement Process Architecture and Legal Resolution Blueprint',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LenDenClub Loan Settlement Process: Stop Recovery Harassment & Settle (2026)',
    description: 'Definitive guide for borrowers facing LenDenClub and Finstree P2P loan default. Discover how to halt recovery harassment, defend Section 25 PSSA summons, and secure 40% to 65% OTS principal waivers.',
    images: ['https://www.settleloans.in/images/infographics/lendenclub-p2p-loan-settlement-process.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/lendenclub-p2p-loan-settlement-process#webpage",
      "url": "https://www.settleloans.in/lendenclub-p2p-loan-settlement-process",
      "name": "LenDenClub Loan Settlement Process: Stop Recovery Harassment & Settle (2026)",
      "description": "Comprehensive legal guide to the LenDenClub loan settlement process. Learn how to settle defaulted P2P personal loans with Innofin Solutions and Finstree under RBI Master Directions, stop recovery agent harassment, defend Section 25 PSSA notices, and negotiate a 40% to 65% OTS haircut with an official No Dues Certificate.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/lendenclub-p2p-loan-settlement-process#breadcrumb"
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
      "@id": "https://www.settleloans.in/lendenclub-p2p-loan-settlement-process#breadcrumb",
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
          "name": "LenDenClub P2P Loan Settlement Process",
          "item": "https://www.settleloans.in/lendenclub-p2p-loan-settlement-process"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/lendenclub-p2p-loan-settlement-process#article",
      "headline": "LenDenClub Loan Settlement Process: Stop Recovery Harassment, Legal Notices & Settle Dues",
      "description": "A comprehensive strategic analysis on navigating defaulted LenDenClub and Finstree P2P loans, understanding Innofin Solutions regulatory parameters, mitigating e-NACH bounce penalties, asserting statutory anti-harassment rights, and securing authorized One-Time Settlements.",
      "image": "https://www.settleloans.in/images/infographics/lendenclub-p2p-loan-settlement-process.jpg",
      "datePublished": "2026-09-03T12:00:00+05:30",
      "dateModified": "2026-09-03T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/lendenclub-p2p-loan-settlement-process#webpage"
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
      "@id": "https://www.settleloans.in/lendenclub-p2p-loan-settlement-process#service",
      "name": "SettleLoans - LenDenClub P2P Loan Settlement & Legal Defense",
      "description": "Specialized legal advisory and financial negotiation service for retail borrowers facing delinquency on LenDenClub and Finstree P2P credit facilities. Halts recovery agency overreach, defends statutory notices, and secures maximum compromise waivers.",
      "url": "https://www.settleloans.in/lendenclub-p2p-loan-settlement-process",
      "image": "https://www.settleloans.in/images/infographics/lendenclub-p2p-loan-settlement-process.jpg",
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
        "reviewCount": "1640",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Vivek Nair"
          },
          "datePublished": "2026-07-18",
          "reviewBody": "I had a ₹4.8 Lakh loan on LenDenClub. I missed 4 EMIs after job loss. Recovery agents called my family and sent threats. SettleLoans sent a legal notice under RBI rules. They negotiated with Innofin Solutions. We closed the debt for ₹2.3 Lakh with zero late fees. I got my ₹0 NDC in 3 weeks.",
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
            "name": "Sunita Sharma"
          },
          "datePublished": "2026-08-09",
          "reviewBody": "My LenDenClub loan had ₹38,000 in bounce fees after business slowdowns. SettleLoans stopped the auto-debit at my bank under NPCI rules. They got all unfair charges removed from my ledger. We settled the debt with a stamped letter at a 48% discount.",
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
            "name": "Amit Singhal"
          },
          "datePublished": "2026-06-22",
          "reviewBody": "I got a Section 25 PSSA notice for a bounced auto-debit on LenDenClub. SettleLoans replied quickly with proof of my medical distress. They settled the case in National Lok Adalat. We closed the loan with a 50% principal waiver and a binding court decree.",
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
            "name": "Pradeep Tiwari"
          },
          "datePublished": "2026-08-25",
          "reviewBody": "Recovery agents phoned my workplace and threatened home visits. SettleLoans sent a formal complaint to Innofin Solutions and the RBI Ombudsman. The calls stopped the same day. Within a month, we settled the full loan with a stamped letter.",
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
      "@id": "https://www.settleloans.in/lendenclub-p2p-loan-settlement-process#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I negotiate and settle a LenDenClub loan directly through the LenDenClub mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The app cannot grant debt waivers. In-app bots and phone callers lack power to settle debt. To get an OTS waiver, your advocate must negotiate with Innofin Solutions directly."
          }
        },
        {
          "@type": "Question",
          "name": "What is the legal entity behind LenDenClub and how does Finstree relate to my loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LenDenClub is run by Innofin Solutions Private Limited, an RBI-registered NBFC-P2P. Finstree is a sourcing partner. All loan contracts and official settlement letters come from Innofin Solutions."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver or haircut can be negotiated on a defaulted LenDenClub P2P loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LenDenClub loans are unsecured personal debts. After 90 to 180 days of default, you can negotiate a 40% to 65% principal waiver. All late fees and bounce charges are 100% waived under RBI rules."
          }
        },
        {
          "@type": "Question",
          "name": "How do I stop LenDenClub recovery agents from calling my relatives, friends, and colleagues?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI rules, recovery agents cannot call third parties. They cannot contact relatives, friends, or coworkers. A legal notice to Innofin Solutions stops all harassment quickly."
          }
        },
        {
          "@type": "Question",
          "name": "Can LenDenClub or its individual retail lenders file an FIR or get me arrested for defaulting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Loan default is a civil matter under the Indian Contract Act, 1872. Police cannot file an FIR. They cannot arrest you for unpaid debt. Threats of police action are unlawful."
          }
        },
        {
          "@type": "Question",
          "name": "What legal steps should I take if I receive a Section 25 PSSA notice for bounced e-NACH on LenDenClub?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Section 25 PSSA notice is a 15-day demand notice after a failed auto-debit. It is not an arrest warrant. A legal reply stating financial hardship stops litigation and opens OTS talks."
          }
        },
        {
          "@type": "Question",
          "name": "Is online digital arbitration initiated by LenDenClub legally binding on the borrower?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unilateral digital arbitration without mutual consent is invalid. The Supreme Court established this in Perkins Eastman and TRF Ltd. An advocate can file objections under Section 12 and Section 14 of the Arbitration Act to halt proceedings."
          }
        },
        {
          "@type": "Question",
          "name": "How does settling a LenDenClub loan reflect on my CIBIL credit report and score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Innofin Solutions reports the account as 'Settled' with a ₹0 balance in CIBIL. Your score may drop 75 to 120 points temporarily. You can rebuild it back to 750+ in 18 to 24 months with a secured credit card."
          }
        },
        {
          "@type": "Question",
          "name": "How can I ensure a LenDenClub settlement sanction letter is 100% genuine before making payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A genuine OTS letter must be on official Innofin Solutions letterhead. It must include corporate CIN and RBI registration details. It must specify your loan number and settlement amount. Pay only into the official escrow account."
          }
        },
        {
          "@type": "Question",
          "name": "What is the statutory time frame for LenDenClub to deliver my No Dues Certificate (NDC)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, lenders must deliver your No Dues Certificate within 30 days. Delays beyond 30 days carry a penalty of ₹5,000 per day payable to the borrower."
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

export default function LenDenClubP2PLoanSettlementPage() {
  const tocItems = [
    { id: 'p2p-platform-architecture', title: '1. LenDenClub & P2P Platform Architecture' },
    { id: 'delinquency-timeline-npa', title: '2. Delinquency Timeline & P2P Portfolio Stress' },
    { id: 'stopping-nach-penalties', title: '3. Stopping e-NACH Bounces & Penal Accumulation' },
    { id: 'npv-recovery-haircut-models', title: '4. OTS Haircut Policies & NPV Valuation' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'rbi-anti-harassment-protections', title: '6. Anti-Harassment Defense & RBI Regulations' },
    { id: 'step-by-step-settlement-roadmap', title: '7. Step-by-Step P2P Settlement Roadmap' },
    { id: 'section-25-pssa-arbitration-defense', title: '8. Defending Legal Notices & Digital Arbitration' },
    { id: 'sanction-letter-audit-ndc', title: '9. Sanction Letter Forensics & ₹0 NDC Mandate' },
    { id: 'cibil-score-trajectory-restoration', title: '10. CIBIL Bureau Reporting & Credit Rebuilding' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Advocacy & Representation' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "Can I negotiate and settle a LenDenClub loan directly through the LenDenClub mobile app?",
      answer: "No. The app cannot grant debt waivers. In-app bots and phone callers lack power to settle debt. To get an OTS waiver, your advocate must negotiate with Innofin Solutions directly."
    },
    {
      question: "What is the legal entity behind LenDenClub and how does Finstree relate to my loan?",
      answer: "LenDenClub is run by Innofin Solutions Private Limited, an RBI-registered NBFC-P2P. Finstree is a sourcing partner. All loan contracts and official settlement letters come from Innofin Solutions."
    },
    {
      question: "What percentage of debt waiver or haircut can be negotiated on a defaulted LenDenClub P2P loan?",
      answer: "LenDenClub loans are unsecured personal debts. After 90 to 180 days of default, you can negotiate a 40% to 65% principal waiver. All late fees and bounce charges are 100% waived under RBI rules."
    },
    {
      question: "How do I stop LenDenClub recovery agents from calling my relatives, friends, and colleagues?",
      answer: "Under RBI rules, recovery agents cannot call third parties. They cannot contact relatives, friends, or coworkers. A legal notice to Innofin Solutions stops all harassment quickly."
    },
    {
      question: "Can LenDenClub or its individual retail lenders file an FIR or get me arrested for defaulting?",
      answer: "No. Loan default is a civil matter under the Indian Contract Act, 1872. Police cannot file an FIR. They cannot arrest you for unpaid debt. Threats of police action are unlawful."
    },
    {
      question: "What legal steps should I take if I receive a Section 25 PSSA notice for bounced e-NACH on LenDenClub?",
      answer: "A Section 25 PSSA notice is a 15-day demand notice after a failed auto-debit. It is not an arrest warrant. A legal reply stating financial hardship stops litigation and opens OTS talks."
    },
    {
      question: "Is online digital arbitration initiated by LenDenClub legally binding on the borrower?",
      answer: "Unilateral digital arbitration without mutual consent is invalid. The Supreme Court established this in Perkins Eastman and TRF Ltd. An advocate can file objections under Section 12 and Section 14 of the Arbitration Act to halt proceedings."
    },
    {
      question: "How does settling a LenDenClub loan reflect on my CIBIL credit report and score?",
      answer: "Innofin Solutions reports the account as 'Settled' with a ₹0 balance in CIBIL. Your score may drop 75 to 120 points temporarily. You can rebuild it back to 750+ in 18 to 24 months with a secured credit card."
    },
    {
      question: "How can I ensure a LenDenClub settlement sanction letter is 100% genuine before making payment?",
      answer: "A genuine OTS letter must be on official Innofin Solutions letterhead. It must include corporate CIN and RBI registration details. It must specify your loan number and settlement amount. Pay only into the official escrow account."
    },
    {
      question: "What is the statutory time frame for LenDenClub to deliver my No Dues Certificate (NDC)?",
      answer: "Under RBI Circular RBI/2023-24/60, lenders must deliver your No Dues Certificate within 30 days. Delays beyond 30 days carry a penalty of ₹5,000 per day payable to the borrower."
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
            <Users className="w-3.5 h-3.5" />
            <span>P2P Credit Dispute Resolution. Retail Borrowers.</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">LenDenClub P2P Loan Settlement Process & OTS Rules</h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Written by <Link href="/authors/ashish-jhangra" className="font-bold underline hover:text-white transition-colors">Ashish Jhangra</Link>.</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: September 2026.</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI P2P Master Directions Compliant.</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate LenDenClub Settlement.</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Case Evaluation.
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
                <span>LenDenClub Case Crux.</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                LenDenClub runs on Innofin Solutions NBFC-P2P. Loans come from small lenders. We talk direct to the platform desk. You can get 40% to 65% OTS waivers under RBI rules.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: LenDenClub P2P Loan Default Resolution.</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>P2P Platform Setup.</strong> Innofin Solutions runs LenDenClub. App bots cannot waive debt. Real OTS deals are done with the desk.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Stop e-NACH Charges.</strong> Stop auto-debit at your bank under NPCI rules. This stops extra fees and bank bounce costs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>40% to 65% Waivers.</strong> Loans are unsecured. Debts over 90 days past due get 40% to 65% principal cuts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Shield From Agent Calls.</strong> RBI rules ban calls to family or work. Breaking rules brings RBI action.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Get ₹0 NDC.</strong> Under RBI Circular RBI/2023-24/60, you get your No Dues Certificate within 30 days of payment.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: LenDenClub & P2P Platform Architecture */}
            <section id="p2p-platform-architecture" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. LenDenClub &amp; P2P Platform Architecture.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Deconstructing LenDenClub</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                LenDenClub runs under Innofin Solutions. It is an RBI-registered NBFC-P2P platform. It links small lenders with retail borrowers. Loan funds sit in a Trustee Escrow Account. In loans from Finstree, small lenders carry risk. Innofin Solutions handles loan collections.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                If you miss EMIs, the app sends alerts and automated calls. App chatbots have no power to waive debt. To get an OTS deal, you must talk directly to the settlement desk at Innofin Solutions.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>RBI Rules.</strong> Under RBI P2P Master Directions, platforms cannot give credit guarantees. But Innofin Solutions has legal power to settle bad loans for lenders.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Timeline & P2P Portfolio Stress */}
            <section id="delinquency-timeline-npa" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; P2P Portfolio Stress.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">P2P Loan Delinquency Lifecycle</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When you miss an EMI, the loan moves through set stages. It turns into an NPA after 90 days of default. The platform sends automated notices and runs auto-debits. Past 90 days, loss write-downs begin. This opens the door for OTS talks.
              </p>

              {/* Comprehensive Stage Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Delinquency Bucket.</th>
                      <th>Aging (Days Past Due).</th>
                      <th>Platform &amp; Agency Action.</th>
                      <th>Legal Exposure.</th>
                      <th>Settlement Haircut Window.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-0 (Incipient Default).</td>
                      <td>1 – 30 Days.</td>
                      <td>Automated SMS, push alerts, and IVR calls.</td>
                      <td>Nil legal action. Initial credit bureau report.</td>
                      <td>Negligible. Full payment demanded.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-1 (Mid-Stage Delinquency).</td>
                      <td>31 – 60 Days.</td>
                      <td>Outsourced tele-callers contact borrower.</td>
                      <td>Draft warning notices sent. CIBIL score drops.</td>
                      <td>Low. Loan tenure restructuring only.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-2 (Pre-NPA Escalation).</td>
                      <td>61 – 90 Days.</td>
                      <td>Field recovery agents assigned.</td>
                      <td>Section 25 PSSA demand notices dispatched.</td>
                      <td>Moderate. 100% waiver of late fees possible.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">Substandard Asset (NPA).</td>
                      <td>91 – 180 Days.</td>
                      <td>Stressed Asset team takes over recovery.</td>
                      <td>Magistrate summons or digital arbitration.</td>
                      <td><span className="text-emerald-700 font-bold">High (35%–50% Principal Haircut).</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-red-700">Doubtful / Loss Asset.</td>
                      <td>181 – 365+ Days.</td>
                      <td>Technical write-off on internal ledgers.</td>
                      <td>Lok Adalat notices or permanent debt write-down.</td>
                      <td><span className="text-emerald-700 font-bold">Maximum (50%–65% Total Haircut).</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Past 180 days, legal fees cost more than the loan is worth. Innofin Solutions prefers quick cash recovery via an OTS. This lets borrowers get the highest possible debt waivers.
              </p>
            </section>

            {/* Section 3: Stopping e-NACH Bounces & Penal Accumulation */}
            <section id="stopping-nach-penalties" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Banknote className="w-4 h-4" />
                <span>3. Stopping e-NACH Bounces &amp; Penal Accumulation.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Stopping Predatory e-NACH &amp; Penal Interest</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Auto-debit systems run bank sweeps up to 4 times a month. Each failed attempt adds two fees. Your bank charges ₹295 to ₹590 per bounce. The platform adds late fees of 24% to 36% per year. This makes the total debt grow fast.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                You can stop these fees easily. File a mandate stop form at your bank branch under NPCI rules. Under RBI rules on fair lending, lenders cannot compound penal charges. SettleLoans gets a 100% waiver on all bounce fees and penal interest during OTS talks.
              </p>
            </section>

            {/* Section 4: OTS Haircut Policies & NPV Valuation */}
            <section id="npv-recovery-haircut-models" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>4. OTS Haircut Policies &amp; NPV Valuation.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">P2P Stressed Asset Valuation</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                P2P personal loans are unsecured civil debts. They do not fall under the SARFAESI Act. To collect, lenders must go to civil court. LenDenClub uses an NPV model. They weigh quick cash today against years of slow court action.
              </p>

              {/* Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>P2P Stressed Asset Valuation Benchmark.</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Platform Recovery Friction.
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  C_t is expected recovery. r is the discount rate. Deductions include 3–5 years of court delay, legal retainers, and servicing costs.
                </p>
              </div>

              {/* Settlement Haircut Slabs Table */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">Realistic LenDenClub Settlement Haircut Slabs by Aging &amp; Hardship Tier</h3>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Platform Facility Tier.</th>
                      <th>Delinquency Category.</th>
                      <th>Penal &amp; Bounce Waiver.</th>
                      <th>Principal Haircut Range.</th>
                      <th>Target Settlement Benchmark.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">LenDenClub Retail Personal Loan.</td>
                      <td>90 – 180 Days (NPA).</td>
                      <td>100% Full Waiver.</td>
                      <td>30% – 45% Principal Waiver.</td>
                      <td>Pay 55%–70% of Core Principal.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">LenDenClub / Finstree Co-Lending.</td>
                      <td>181 – 365 Days (Doubtful).</td>
                      <td>100% Full Waiver.</td>
                      <td>45% – 60% Principal Waiver.</td>
                      <td>Pay 40%–55% of Core Principal.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Written-Off P2P Portfolio.</td>
                      <td>365+ Days (Loss Asset).</td>
                      <td>100% Full Waiver.</td>
                      <td>55% – 65% Principal Waiver.</td>
                      <td>Pay 35%–45% of Core Disbursed Sum.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Critical Medical / Hardship Case.</td>
                      <td>Any Stage (Post-NPA).</td>
                      <td>100% Full Waiver.</td>
                      <td>50% – 65% Total Haircut.</td>
                      <td>Pay 35%–50% in Single Tranche.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Lenders lose yields on bad loans. Getting 40% to 55% of core principal back lets them reinvest. This makes OTS deals good for Innofin Solutions once hardship is shown.
              </p>
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
                        Legal Defense &amp; Action Blueprint.
                      </span>
                      <h3 className="text-sm md:text-base font-black text-white leading-tight">
                        LenDenClub P2P Loan Settlement &amp; Debt Resolution Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/lendenclub-p2p-loan-settlement-process.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1F5EFF] hover:text-blue-300 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span className="hidden sm:inline">Open Full Size.</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 16:9 Landscape Infographic Image */}
                <div className="p-3 md:p-4 bg-slate-50">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img
                      src="/images/infographics/lendenclub-p2p-loan-settlement-process.jpg"
                      alt="LenDenClub P2P Loan Settlement Process Architecture and Legal Resolution Blueprint"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Core Strategy.</strong> Stop recovery calls. Revoke e-NACH debits. Reply to Section 25 notices. Settle directly with Innofin Solutions for a 40% to 65% OTS waiver.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Anti-Harassment Defense & RBI Regulations */}
            <section id="rbi-anti-harassment-protections" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>5. Statutory Protections &amp; Anti-Harassment Law.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Statutory Protections Against P2P Recovery Harassment</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers face harsh agent tactics after default. These include non-stop calls. Callers may phone workplaces or reach out to family. Under RBI Master Directions, these acts are illegal. Agents can only call between 8:00 AM and 7:00 PM. Third-party disclosure is banned. Apps cannot read your contacts or photos.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                If agents break these rules, SettleLoans sends a legal notice. We serve the Nodal Officer of Innofin Solutions. We also file a complaint on the RBI Ombudsman portal (CMS). This stops calls within 48 hours. It gives you strong ground for OTS talks.
              </p>
            </section>

            {/* Section 7: Step-by-Step P2P Settlement Roadmap */}
            <section id="step-by-step-settlement-roadmap" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>6. Step-by-Step P2P Settlement Roadmap.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Step-by-Step LenDenClub Settlement Roadmap</h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Settling an NBFC-P2P loan needs a clear legal strategy. This prevents fake agent deals and clears your debt for good.
              </p>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">1</span>
                    Forensic Ledger Audit &amp; Entity Identification
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Audit your loan agreement and CIBIL file. Separate pure principal from bounce fees and late interest under Innofin Solutions.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">2</span>
                    Revocation of e-NACH Mandates &amp; Communication Routing
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Stop auto-debits at your bank under NPCI rules. This prevents repeat fees. Tell the lender in writing to route calls to your advocate.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">3</span>
                    Submission of Involuntary Hardship Dossier
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Gather proof of hardship. Examples include job loss slips, hospital bills, or wage cuts. Submit an OTS plea to the settlement desk.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">4</span>
                    Multi-Round Financial Negotiation
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Counter low waiver offers with hardship proof. Guide the committee toward a 40% to 65% principal waiver.
                  </p>
                </div>

                {/* Step 5 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">5</span>
                    Forensic Verification of the Stamped OTS Sanction Letter
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Check the letter on official Innofin Solutions letterhead. Verify your loan number, payment terms, and ₹0 balance clauses.
                  </p>
                </div>

                {/* Step 6 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">6</span>
                    Dedicated Escrow Remittance &amp; Enforcement of ₹0 NDC Delivery
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Pay funds directly to the Trustee Escrow Account via RTGS or NEFT. Track delivery of your ₹0 No Dues Certificate within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Defending Legal Notices & Digital Arbitration */}
            <section id="section-25-pssa-arbitration-defense" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>7. Defending Legal Notices &amp; Digital Arbitration.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Defending LenDenClub Sec 25 PSSA &amp; Arbitration</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                After 60 to 90 days of default, lenders send notices under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA). This notice is for failed e-NACH debits. It is not an arrest warrant. The offense is fully compoundable in court. An advocate reply showing distress disproves bad intent. It moves the case to an amicable settlement path.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Unilateral arbitration without mutual consent is invalid. The Supreme Court confirmed this in Perkins Eastman and TRF Ltd rulings. Filing objections under Section 12(5) and Section 14 of the Arbitration Act halts proceedings. It moves the case to National Lok Adalat, where deals carry the status of a final Civil Court Decree.
              </p>

              {/* Comparative Matrix Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Resolution Channel.</th>
                      <th>Legal Mechanism.</th>
                      <th>Haircut Potential.</th>
                      <th>Timeline.</th>
                      <th>Enforceability.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Direct Platform OTS.</td>
                      <td>Bilateral settlement under RBI rules.</td>
                      <td>40% to 60% Haircut.</td>
                      <td>15-30 Days.</td>
                      <td>Binding contract with NDC.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">National Lok Adalat.</td>
                      <td>Judicial conciliation before DLSA bench.</td>
                      <td>45% to 65% Haircut.</td>
                      <td>Single session.</td>
                      <td>Civil Court Decree (Final).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Arbitration Defense.</td>
                      <td>Contesting unilateral digital arbitrations.</td>
                      <td>Converts to OTS.</td>
                      <td>3-8 Months.</td>
                      <td>Section 34 / 14 challenge.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Section 25 PSSA Defense.</td>
                      <td>Magistrate court compoundable defense.</td>
                      <td>35% to 55% Haircut.</td>
                      <td>2-6 Months.</td>
                      <td>Formal criminal withdrawal.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                National Lok Adalats organized by NALSA offer the best venue for borrowers. Held quarterly across district courts, Lok Adalat benches grant broad compromise write-offs. Settlements carry the force of a final Civil Court Decree. This protects borrowers from future claims.
              </p>
            </section>

            {/* Section 9: Sanction Letter Forensics & ₹0 NDC Mandate */}
            <section id="sanction-letter-audit-ndc" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>8. Sanction Letter Forensics &amp; NDC Mandate.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Authenticating the OTS Sanction Letter</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Never pay money without a verified settlement letter. The letter must be on official Innofin Solutions letterhead. It must show a CIN, office address, loan number, and manager signature. Pay only into the official escrow account. Never send funds to personal UPI IDs or third-party accounts.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                After you pay, RBI Circular RBI/2023-24/60 requires the lender to act. They must issue your No Dues Certificate within 30 days. They must also update credit bureaus. Lenders face a penalty of ₹5,000 per day paid to the borrower for delays beyond 30 days.
              </p>
            </section>

            {/* Section 10: CIBIL Bureau Reporting & Credit Rebuilding */}
            <section id="cibil-score-trajectory-restoration" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. CIBIL Bureau Reporting &amp; Credit Rebuilding.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">LenDenClub CIBIL Bureau Reporting &amp; Score Trajectory</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                After settlement, Innofin Solutions marks the loan as <strong>&apos;Settled&apos;</strong> in CIBIL with a <strong>₹0</strong> balance. Your credit score may drop by 75 to 120 points at first. But it stops monthly default marks. It also removes all risk of legal action.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                You can rebuild your score back to 750+ in 18 to 24 months. Get an FD-backed credit card. Keep card usage below 25%. Pay bills on time to restore prime credit status.
              </p>
            </section>

            {/* Section 11: SettleLoans Legal Advocacy & Representation */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>10. Legal Defense &amp; Representation.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed LenDenClub Borrowers Trust SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Settling a defaulted P2P loan takes skilled legal help. SettleLoans gives full legal representation for borrowers in distress. We issue legal notices to stop recovery calls. We cancel bank e-NACH mandates to stop bounce fees. We draft legal replies to Section 25 PSSA notices. We challenge one-sided arbitration cases. Our team negotiates directly with Innofin Solutions to secure top debt waivers and ₹0 No Dues Certificates.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">FAQs: LenDenClub Loan Settlement</h2>

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
                    <strong>Reserve Bank of India (RBI):</strong> Master Directions – Non-Banking Financial Company - Peer to Peer Lending Platform (Reserve Bank) Directions, 2017 (Updated August 2024).
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
                    <strong>RBI Master Direction:</strong> Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24).
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
                    <strong>RBI Circular:</strong> Fair Lending Practice - Penal Charges in Loan Accounts &amp; Release of Property Documents (RBI/2023-24/60).
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Statutory Grievance Redressal for P2P Collection Harassment &amp; Excessive NACH Levies.
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
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987 – National Lok Adalat Pre-Litigation Conciliation.
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
                  href="/faircent-p2p-loan-settlement-process"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Faircent P2P Loan Settlement.
                </Link>
                <Link
                  href="/app-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  App Loan Settlement Guide.
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank OTS Policy Guide.
                </Link>
                <Link
                  href="/section-25-pssa-notice-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 25 PSSA Notice Defense.
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Percentage.
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement CIBIL Impact.
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate (NDC) Guide.
                </Link>
                <Link
                  href="/recovery-agent-calling-late-night-rbi-violation"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Late Night Recovery Calls RBI Rules.
                </Link>
                <Link
                  href="/can-recovery-agents-freeze-family-bank-accounts"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Can Recovery Agents Freeze Family Accounts.
                </Link>
                <Link
                  href="/top-10-rbi-rules-for-loan-defaulters-rights"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Top 10 RBI Rules for Defaulters Rights.
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
                      Ashish Jhangra.
                    </Link>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Lead Banking Legal &amp; Debt Settlement Strategist.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has led over 1,500+ successful debt settlement cases. He handles disputes across LenDenClub, Faircent, and IDFC FIRST Bank. He focuses on P2P lending rules, Section 25 PSSA defense, and borrower legal rights under RBI directions.
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
                  LinkedIn.
                </a>
              </div>
            </div>

            {/* Card 2: Emergency Advocate Assistance CTA */}
            <div className="bg-gradient-to-br from-[#1F5EFF] to-blue-700 text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 text-blue-100 text-xs font-bold uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>P2P Dispute Resolution.</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing LenDenClub P2P Default?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop daily recovery calls and heavy e-NACH bounce fees. Let our senior banking advocates audit your loan ledger. We defend against Section 25 PSSA notices and challenge unilateral digital arbitration. We secure an authentic stamped settlement letter directly from Innofin Solutions.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to a Settlement Advocate &rarr;
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans.</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Negotiation.</strong> We bypass collection agencies. We negotiate directly with the Stressed Assets Cell of Innofin Solutions Private Limited.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Defense.</strong> We issue swift legal cease-and-desist notices. This stops workplace calls and third-party harassment under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Stamped Verification.</strong> We verify every settlement on official corporate letterhead before you make any payment.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>₹0 NDC Delivery.</strong> We track your case until the formal No Dues Certificate arrives and credit bureaus update your file.
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
