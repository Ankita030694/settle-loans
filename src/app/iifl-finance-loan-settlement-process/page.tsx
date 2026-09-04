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
  Coins,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'IIFL Finance Loan Settlement Guide | SettleLoans',
  description: 'Learn how to settle IIFL Finance personal loans and gold loan shortfalls legally. Stop legal notices and resolve debt with SettleLoans.',
  keywords: [
    'iifl personal loan settlement',
    'iifl personal loan settlement process',
    'iifl finance loan settlement',
    'iifl business loan settlement',
    'iifl gold loan auction shortfall notice',
    'iifl finance ots policy',
    'iifl loan settlement discount structure',
    'how to settle iifl loan',
    'iifl recovery agent harassment complaint',
    'iifl finance section 25 pssa legal notice',
    'iifl loan no dues certificate',
    'iifl finance nodal officer escalation',
    'iifl finance arbitration notice reply',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/iifl-finance-loan-settlement-process',
  },
  openGraph: {
    title: 'IIFL Finance Loan Settlement: OTS Process, Gold Auction Shortfall & Haircut (2026)',
    description: 'Learn how to settle an IIFL Finance personal or business loan, handle post-gold-auction residual shortfall demands, defend legal notices, and negotiate 40% to 60% OTS waivers under RBI compromise frameworks.',
    url: 'https://www.settleloans.in/iifl-finance-loan-settlement-process',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/iifl-finance-loan-settlement-process.jpg',
        width: 1200,
        height: 675,
        alt: 'IIFL Finance Loan Settlement Process, Gold Loan Shortfall Defense and OTS Haircut Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IIFL Finance Loan Settlement: OTS Rules, Gold Auction Shortfall & Legal Defense',
    description: 'Strategic and legal manual for resolving defaulted IIFL personal loans, MSME credit lines, and gold auction deficit notices under RBI compromise frameworks.',
    images: ['https://www.settleloans.in/images/infographics/iifl-finance-loan-settlement-process.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/iifl-finance-loan-settlement-process#webpage",
      "url": "https://www.settleloans.in/iifl-finance-loan-settlement-process",
      "name": "IIFL Finance Loan Settlement: OTS Process, Gold Auction Shortfall & Haircut (2026)",
      "description": "Comprehensive guide to IIFL Finance loan settlement. Learn how to settle personal and business loans, resolve gold loan auction shortfall notices, stop recovery harassment, defend Section 25 PSSA summons, and negotiate up to 60% OTS haircut under RBI rules.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/iifl-finance-loan-settlement-process#breadcrumb"
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
      "@id": "https://www.settleloans.in/iifl-finance-loan-settlement-process#breadcrumb",
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
          "name": "IIFL Finance Loan Settlement",
          "item": "https://www.settleloans.in/iifl-finance-loan-settlement-process"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/iifl-finance-loan-settlement-process#article",
      "headline": "IIFL Finance Loan Settlement: OTS Process, Gold Auction Shortfall & Haircut Guide",
      "description": "A comprehensive strategic guide on negotiating One-Time Settlements (OTS) with IIFL Finance Limited, resolving post-gold-auction residual shortfall demand notices, navigating internal provisioning policies, and safeguarding against recovery harassment.",
      "image": "https://www.settleloans.in/images/infographics/iifl-finance-loan-settlement-process.jpg",
      "datePublished": "2026-09-02T12:00:00+05:30",
      "dateModified": "2026-09-02T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/iifl-finance-loan-settlement-process#webpage"
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
      "@id": "https://www.settleloans.in/iifl-finance-loan-settlement-process#service",
      "name": "SettleLoans - IIFL Finance Loan Settlement & Legal Defense",
      "description": "Specialized legal and financial negotiation advisory for settling defaulted IIFL Finance personal loans, business loans, and gold loan auction shortfall claims under RBI compromise frameworks with maximum debt waivers and complete harassment protection.",
      "url": "https://www.settleloans.in/iifl-finance-loan-settlement-process",
      "image": "https://www.settleloans.in/images/infographics/iifl-finance-loan-settlement-process.jpg",
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
        "reviewCount": "1540",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rajeshwari Iyer"
          },
          "datePublished": "2026-06-12",
          "reviewBody": "After my gold ornaments were auctioned by IIFL Finance during my business crisis, I received a demand notice claiming a residual shortfall of ₹4.8 Lakhs with high penal charges. SettleLoans audited the auction ledger under Section 176 of the Indian Contract Act and negotiated a formal OTS for ₹1.2 Lakhs directly with IIFL Zonal Office. Stamped ₹0 NDC was delivered in 25 days.",
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
            "name": "Manoj Kulshrestha"
          },
          "datePublished": "2026-07-08",
          "reviewBody": "Defaulted on an IIFL digital personal loan of ₹6.5 Lakhs after sudden job loss. SettleLoans issued a statutory cease-and-desist notice to stop recovery harassment, revoked NACH mandate presentations, and secured a 55% OTS haircut. Settled the entire debt for ₹2.9 Lakhs.",
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
            "name": "Harpreet Singh Bedi"
          },
          "datePublished": "2026-05-19",
          "reviewBody": "I had an IIFL unsecured MSME loan of ₹18 Lakhs. Received Section 25 PSSA and arbitration notices in Mumbai. SettleLoans challenged the unilateral appointment, represented me in conciliation, and secured a Lok Adalat compromise decree for ₹8 Lakhs with all legal claims disposed.",
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
            "name": "Sunita Patil"
          },
          "datePublished": "2026-08-14",
          "reviewBody": "SettleLoans eliminated 100% of accumulated bounce penalties and penal interest on my IIFL loan ledger, ensured the sanction letter came directly from IIFL corporate headquarters, and verified our ₹0 No Dues Certificate.",
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
      "@id": "https://www.settleloans.in/iifl-finance-loan-settlement-process#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the IIFL Finance loan settlement process and how does an NBFC compromise work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IIFL Finance loan settlement process is a legal debt relief option under RBI rules. If you cannot pay your loan for over 90 days, your account becomes an NPA. You can then submit a hardship letter to IIFL. The bank team reviews your case and offers an OTS deal. Once you pay the agreed amount, IIFL closes your loan. You then get an official No Dues Certificate (NDC)."
          }
        },
        {
          "@type": "Question",
          "name": "How should borrowers handle IIFL gold loan auction shortfall residual balance demand notices?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If auctioned gold does not cover your loan, IIFL demands the leftover balance. This balance is an unsecured debt. You can challenge this under Section 176 of the Indian Contract Act. Ask IIFL for auction records, gold weight proofs, and base price details. You can settle this residual debt through an OTS with a 50% to 75% waiver."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver or OTS haircut can you realistically negotiate with IIFL Finance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For personal and MSME loans, IIFL often gives 40% to 60% debt waivers. They also waive 100% of unpaid bounce fees and penal interest. If your loan is over 180 days past due, waivers can reach 50% to 75%."
          }
        },
        {
          "@type": "Question",
          "name": "How can borrowers stop IIFL Finance repeated NACH bounce penalties and auto-debit sweeps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can stop auto-debit bounce fees right away. Ask your bank to cancel your e-NACH mandate under NPCI rules. Tell IIFL to stop auto-debit sweeps. During settlement, ask for a full waiver of all bounce charges under RBI rules."
          }
        },
        {
          "@type": "Question",
          "name": "How do you protect against aggressive IIFL Finance recovery agents and collection harassment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RBI rules protect borrowers from recovery agent abuse. Agents can only call between 8 AM and 7 PM. They cannot call your family, boss, or friends. If agents harass you, send a legal notice to the IIFL Nodal Officer. You can also file a complaint on the RBI CMS portal."
          }
        },
        {
          "@type": "Question",
          "name": "Can IIFL Finance file a criminal police case or arrest a borrower for loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A loan default is a civil dispute under the Indian Contract Act, 1872. Police cannot arrest you for genuine financial default. Section 25 PSSA notices for bounced mandates go to court. You can easily settle these cases with legal help."
          }
        },
        {
          "@type": "Question",
          "name": "How should borrowers handle unilateral arbitration notices issued by IIFL Finance in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Supreme Court ruled that lenders cannot pick sole arbitrators on their own. This was decided in the Perkins Eastman and TRF Ltd cases. Your lawyer can challenge the arbitrator under Section 12 and Section 14 of the Arbitration Act, 1996. This moves the case to an OTS."
          }
        },
        {
          "@type": "Question",
          "name": "Who within IIFL Finance holds the authorized delegation of powers to approve an OTS proposal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recovery agents and call center staff cannot approve debt discounts. Only IIFL Zonal Credit teams and Risk Officers can approve an OTS. Always demand a formal settlement letter on official IIFL letterhead."
          }
        },
        {
          "@type": "Question",
          "name": "How does settling an IIFL loan affect your CIBIL score and credit bureau history?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IIFL will mark your loan as 'Settled' with a zero balance on your CIBIL report. Your credit score may drop by 75 to 150 points at first. But all negative marks stop. You can rebuild your score back to 750+ within 18 to 24 months using secured credit cards."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory timeline for IIFL Finance to issue the No Dues Certificate (NDC) post-settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, IIFL must issue your NDC within 30 days of full payment. They must also update your credit report. If they delay, they must pay you ₹5,000 for each day of delay."
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

export default function IIFLFinanceLoanSettlementPage() {
  const tocItems = [
    { id: 'understanding-iifl-defaults', title: '1. IIFL Multi-Product NBFC Risk Engine' },
    { id: 'iifl-delinquency-timeline-npa', title: '2. Delinquency Timeline & NPA Stages' },
    { id: 'stopping-iifl-bounce-charges-nach', title: '3. Halting NACH Bounce Charges & Penal Fees' },
    { id: 'gold-loan-auction-shortfall-defense', title: '4. Gold Auction Shortfall & Residual Dues' },
    { id: 'iifl-ots-haircut-policy-npv', title: '5. OTS Haircut Policies & Valuation Framework' },
    { id: 'infographic-resolution-blueprint', title: '6. Visual Resolution Blueprint' },
    { id: 'recovery-agent-rules-anti-harassment', title: '7. Recovery Practices & RBI Harassment Defense' },
    { id: 'step-by-step-iifl-settlement', title: '8. Step-by-Step NBFC Settlement Roadmap' },
    { id: 'section-25-pssa-arbitration-lok-adalat', title: '9. Section 25 Notices, Arbitration & Lok Adalat' },
    { id: 'sanction-letter-audit-ndc-verification', title: '10. Sanction Letter Audit & ₹0 NDC Mandate' },
    { id: 'cibil-impact-credit-rehabilitation', title: '11. CIBIL Score Trajectory & Rehabilitation' },
    { id: 'company-resolution-section', title: '12. SettleLoans Legal Defense & Advisory' },
    { id: 'faqs', title: '13. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "What is the IIFL Finance loan settlement process and how does an NBFC compromise work?",
      answer: "The IIFL Finance loan settlement process is a legal debt relief option under RBI rules. If you cannot pay your loan for over 90 days, your account becomes an NPA. You can then submit a hardship letter to IIFL. The bank team reviews your case and offers an OTS deal. Once you pay the agreed amount, IIFL closes your loan. You then get an official No Dues Certificate (NDC)."
    },
    {
      question: "How should borrowers handle IIFL gold loan auction shortfall residual balance demand notices?",
      answer: "If auctioned gold does not cover your loan, IIFL demands the leftover balance. This balance is an unsecured debt. You can challenge this under Section 176 of the Indian Contract Act. Ask IIFL for auction records, gold weight proofs, and base price details. You can settle this residual debt through an OTS with a 50% to 75% waiver."
    },
    {
      question: "What percentage of debt waiver or OTS haircut can you realistically negotiate with IIFL Finance?",
      answer: "For personal and MSME loans, IIFL often gives 40% to 60% debt waivers. They also waive 100% of unpaid bounce fees and penal interest. If your loan is over 180 days past due, waivers can reach 50% to 75%."
    },
    {
      question: "How can borrowers stop IIFL Finance repeated NACH bounce penalties and auto-debit sweeps?",
      answer: "You can stop auto-debit bounce fees right away. Ask your bank to cancel your e-NACH mandate under NPCI rules. Tell IIFL to stop auto-debit sweeps. During settlement, ask for a full waiver of all bounce charges under RBI rules."
    },
    {
      question: "How do you protect against aggressive IIFL Finance recovery agents and collection harassment?",
      answer: "RBI rules protect borrowers from recovery agent abuse. Agents can only call between 8 AM and 7 PM. They cannot call your family, boss, or friends. If agents harass you, send a legal notice to the IIFL Nodal Officer. You can also file a complaint on the RBI CMS portal."
    },
    {
      question: "Can IIFL Finance file a criminal police case or arrest a borrower for loan default?",
      answer: "No. A loan default is a civil dispute under the Indian Contract Act, 1872. Police cannot arrest you for genuine financial default. Section 25 PSSA notices for bounced mandates go to court. You can easily settle these cases with legal help."
    },
    {
      question: "How should borrowers handle unilateral arbitration notices issued by IIFL Finance in Mumbai?",
      answer: "The Supreme Court ruled that lenders cannot pick sole arbitrators on their own. This was decided in the Perkins Eastman and TRF Ltd cases. Your lawyer can challenge the arbitrator under Section 12 and Section 14 of the Arbitration Act, 1996. This moves the case to an OTS."
    },
    {
      question: "Who within IIFL Finance holds the authorized delegation of powers to approve an OTS proposal?",
      answer: "Recovery agents and call center staff cannot approve debt discounts. Only IIFL Zonal Credit teams and Risk Officers can approve an OTS. Always demand a formal settlement letter on official IIFL letterhead."
    },
    {
      question: "How does settling an IIFL loan affect your CIBIL score and credit bureau history?",
      answer: "IIFL will mark your loan as 'Settled' with a zero balance on your CIBIL report. Your credit score may drop by 75 to 150 points at first. But all negative marks stop. You can rebuild your score back to 750+ within 18 to 24 months using secured credit cards."
    },
    {
      question: "What is the mandatory timeline for IIFL Finance to issue the No Dues Certificate (NDC) post-settlement?",
      answer: "Under RBI Circular RBI/2023-24/60, IIFL must issue your NDC within 30 days of full payment. They must also update your credit report. If they delay, they must pay you ₹5,000 for each day of delay."
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
            <Landmark className="w-3.5 h-3.5" />
            <span>Corporate NBFC Dispute Resolution • IIFL Finance</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">IIFL Finance Personal Loan Settlement & OTS Guide</h1>

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
              <span>RBI NBFC Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate IIFL Settlement</span>
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
                <span>IIFL Resolution Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Loans past 90 days turn into NPA. Speak to the Zonal Stressed Assets Desk. You can get 40% to 60% debt waivers. You can also get 50% to 75% off on gold shortfall claims.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: IIFL Finance Loan Settlement</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Compromise Rights:</strong> Defaulting on an IIFL loan is a civil matter. Borrowers have the right to seek a legal One-Time Settlement (OTS) under RBI Master Directions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Gold Auction Shortfall Defense:</strong> If sold gold leaves an unpaid balance, it becomes an unsecured debt. You can settle it with a 50% to 75% waiver under Section 176 of the Indian Contract Act.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Halting Compounding Penalties:</strong> Cancel your e-NACH mandate via your bank under NPCI rules. This stops extra fees. You can seek a 100% waiver on bounce charges under RBI rules.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Defending Legal Notices:</strong> You can contest Section 25 PSSA notices and sole arbitrator notices in Mumbai. Resolve them through conciliation or Lok Adalat orders.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory ₹0 NDC Guarantee:</strong> Under RBI Circular RBI/2023-24/60, IIFL must give you a No Dues Certificate within 30 days. They must pay ₹5,000 per day if they delay.</span>
                </li>
              </ul>
            </div>
            
            {/* Section 1: Multi-Product NBFC Risk Engine & Architecture */}
            <section id="understanding-iifl-defaults" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Multi-Product NBFC Architecture &amp; Risk Engine</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Understanding IIFL Finance&apos;s Multi-Product Architecture</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                IIFL Finance is an NBFC regulated by the RBI. It gives personal loans, MSME business loans, and gold loans. When you face job loss, income cuts, or medical bills, you may miss EMIs. IIFL then starts recovery steps. These include repeat NACH debit attempts, bounce fees, and extra interest.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Missing loan EMIs is purely a civil matter under the Indian Contract Act, 1872. Police cannot file criminal cases for genuine loan defaults. Under RBI Master Directions, you have the right to stop harassment. You can also waive penalty charges and settle your debt with the IIFL team.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Statutory Principle:</strong> Under the RBI Master Direction on Compromise Settlements (2023), NBFCs must have board-approved settlement rules. Lenders must review genuine hardship cases. They cannot treat honest borrowers as wilful defaulters.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Lifecycle & NPA Stages */}
            <section id="iifl-delinquency-timeline-npa" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; NPA Stages</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">IIFL Finance Delinquency Lifecycle</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                IIFL Finance tracks overdue loans using RBI IRACP norms and Ind AS 109 rules. When a loan is unpaid for 90 days, it turns into an NPA. IIFL must then set aside funds for bad debt. The lender then shifts focus from routine EMI calls to one-time debt settlements.
              </p>

              {/* Comprehensive Stage Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Loan Stage</th>
                      <th>Overdue Days (DPD)</th>
                      <th>IIFL Action</th>
                      <th>Legal Steps</th>
                      <th>Settlement Waiver</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-0 (Early Default)</td>
                      <td>1 – 30 Days</td>
                      <td>Automated reminder calls, text alerts, and repeat NACH debits.</td>
                      <td>No court action. Credit score tracking starts.</td>
                      <td>Low. IIFL asks for full EMI payment.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-1 (Mid Default)</td>
                      <td>31 – 60 Days</td>
                      <td>Frequent recovery calls and loan recall warning letters.</td>
                      <td>Legal warning notices sent. CIBIL score falls.</td>
                      <td>Low. Loan tenure change or EMI pause may be offered.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-2 (Pre-NPA Stage)</td>
                      <td>61 – 90 Days</td>
                      <td>Home visits by agents and loan recall notices.</td>
                      <td>Notices under Section 25 PSSA or Section 138 NI Act issued.</td>
                      <td>Fair. Lenders may agree to drop penalty fees.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">NPA (Substandard Asset)</td>
                      <td>91 – 180 Days</td>
                      <td>Case moves to the Zonal Stressed Assets Desk under Ind AS 109.</td>
                      <td>Magistrate Court summons under Sec 25 PSSA or conciliation letter.</td>
                      <td><span className="text-emerald-700 font-bold">High. 35% to 50% waiver possible.</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-red-700">Doubtful / Loss Asset</td>
                      <td>181 – 365+ Days</td>
                      <td>Full funds set aside. Loan ready for bad debt write-off.</td>
                      <td>Arbitration notices, Order 37 CPC suits, or Lok Adalat summons.</td>
                      <td><span className="text-emerald-700 font-bold">Best. 50% to 60% waiver possible.</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When a loan is 180+ DPD, IIFL writes off the debt. An OTS payment gives them quick cash. This helps credit teams grant large loan waivers.
              </p>
            </section>

            {/* Section 3: Halting NACH Bounce Charges & Penal Levies */}
            <section id="stopping-iifl-bounce-charges-nach" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Banknote className="w-4 h-4" />
                <span>3. Stopping NACH Bounce Charges &amp; Penal Fees</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">How to Stop IIFL Finance Bounce Charges</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers face heavy bank fees when IIFL presents NACH debits again and again. Each bounce causes bank charges and penalty fees. Under RBI Fair Lending Practice rules (2023), lenders cannot add extra charges to your principal debt.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                You can stop these fees easily. Ask your bank to stop the e-NACH mandate under NPCI rules. During OTS talks, ask for a 100% waiver of all bounce fees. This ensures your discount applies straight to your main loan balance.
              </p>
            </section>

            {/* Section 4: Gold Loan Auction Shortfall Defense & Residual Dues */}
            <section id="gold-loan-auction-shortfall-defense" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Coins className="w-4 h-4" />
                <span>4. Gold Loan Auction Shortfall &amp; Residual Dues Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Resolving IIFL Gold Loan Auction Shortfall Notices</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                If you miss gold loan EMIs, IIFL sells the pledged gold in an auction. If the sale does not clear the full debt, IIFL sends demand letters. They claim this unpaid gap as an <strong>unsecured shortfall</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                You have legal rights under Section 176 of the Indian Contract Act, 1872. The lender must give you clear notice before any auction. They must check gold purity and set fair market prices. If IIFL sold your gold too cheap, you can legally challenge the gap claim.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Since no gold remains, this shortfall is an unsecured debt. IIFL teams often settle these claims through an OTS. They approve <strong>50% to 75% debt waivers</strong> with an official ₹0 No Dues Certificate.
              </p>
            </section>

            {/* Section 5: OTS Haircut Policies & NPV Valuation */}
            <section id="iifl-ots-haircut-policy-npv" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>5. OTS Haircut Policies &amp; Valuation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">IIFL Finance One-Time Settlement (OTS)</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI Master Directions on Compromise Settlements (2023), IIFL tests OTS offers using Net Present Value (NPV). They compare fast cash today against slow, costly court cases.
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
                  Here C_t is the expected recovery money, r is the discount rate, and deductions cover court fees and locked NPA funds.
                </p>
              </div>

              {/* Settlement Haircut Slabs Table */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">Realistic IIFL Finance Settlement Haircut Slabs by Product &amp; Aging</h3>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Loan Type</th>
                      <th>Overdue Time</th>
                      <th>Fee Waiver</th>
                      <th>Principal Discount</th>
                      <th>Best Target Offer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">IIFL Personal Loan</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% Full Waiver</td>
                      <td>30% – 45% Waiver</td>
                      <td>Offer 40%–50% of Total Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">IIFL Personal Loan</td>
                      <td>181 – 365+ Days (Doubtful)</td>
                      <td>100% Full Waiver</td>
                      <td>45% – 60% Waiver</td>
                      <td>Offer 35%–40% of Total Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">IIFL MSME Business Loan</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% Full Waiver</td>
                      <td>30% – 45% Waiver</td>
                      <td>Offer 45%–55% of Total Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">IIFL MSME Business Loan</td>
                      <td>180+ Days (Written Off)</td>
                      <td>100% All Penalty Charges</td>
                      <td>50% – 65% Waiver</td>
                      <td>Offer 30%–35% of Total Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">IIFL Gold Auction Shortfall</td>
                      <td>Post-Auction Leftover Dues</td>
                      <td>100% Penalty Waiver</td>
                      <td>50% – 75% Waiver</td>
                      <td>Offer 25%–35% of Balance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: High-Impact Resolution Blueprint (Infographic Banner) */}
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
                        IIFL Finance Loan Settlement &amp; Legal Defense Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/iifl-finance-loan-settlement-process.jpg"
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
                      src="/images/infographics/iifl-finance-loan-settlement-process.jpg"
                      alt="IIFL Finance Loan Settlement Process and OTS Haircut Guide"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Strategy:</strong> Stop NACH presentations. Challenge gold auction residual shortfalls under Section 176. Negotiate directly with IIFL Stressed Assets Desks for 40%–60% debt waivers.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 7: Third-Party Recovery Defense & RBI Rules */}
            <section id="recovery-agent-rules-anti-harassment" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>6. Recovery Practices &amp; RBI Harassment Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Defending Against Aggressive IIFL Recovery Tactics Under RBI</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                IIFL Finance hires third-party recovery agencies. These agents often push hard to meet monthly targets. But RBI Master Directions and Fair Practice Codes set clear rules. Agents can only call between 8:00 AM and 7:00 PM. They cannot call your family, boss, or friends. Workplace visits and threats are illegal.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Always save call recordings and abusive messages. Send a formal legal notice to the IIFL Principal Nodal Officer. You can also file a complaint on the RBI Integrated Ombudsman portal (CMS). This forces IIFL to resolve your loan through legal settlement talks.
              </p>
            </section>

            {/* Section 8: Step-by-Step NBFC Settlement Roadmap */}
            <section id="step-by-step-iifl-settlement" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>7. Step-by-Step NBFC Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Step-by-Step IIFL Finance Settlement Roadmap</h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Follow these 6 simple steps to settle your IIFL loan:
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">1</span>
                    Hardship Dossier Compilation &amp; Ledger Audit
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Collect proof of your financial crisis. Gather salary cut letters, medical bills, or business loss statements. This proves non-wilful default under RBI rules.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">2</span>
                    Revoking NACH Mandates &amp; Formalizing Communication
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Cancel the e-NACH auto-debit with your bank to stop bounce charges. Shift all loan talks to written emails or your lawyer.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">3</span>
                    Submitting Hardship Proposal to Stressed Assets Desk
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Send a formal OTS letter to the IIFL Zonal Stressed Assets Desk. Cite RBI Master Directions and start with an offer of 25% to 35% of dues.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">4</span>
                    Managing Counter-Offers &amp; Credit Committee Approval
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Handle counter-offers by showing limited family funds. Guide the Credit Committee to agree to a 40% to 60% principal waiver.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">5</span>
                    Forensic Audit of the Official Sanction Letter
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Check the settlement letter carefully. It must be on official IIFL letterhead with full loan details, agreed amount, and legal closure terms.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">6</span>
                    Account Remittance &amp; ₹0 NDC Enforcement
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Pay the agreed amount directly to your IIFL loan account. Collect your official ₹0 No Dues Certificate within 30 days under RBI rules.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Section 25 Notices, Arbitration & Lok Adalat */}
            <section id="section-25-pssa-arbitration-lok-adalat" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>8. Section 25 Notices, Arbitration &amp; Lok Adalat</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Navigating IIFL Sec 25 PSSA, Arbitration &amp; Lok Adalat</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                After 60 to 90 days of default, IIFL may send legal notices under Section 25 of the Payment and Settlement Systems Act (PSSA). They may also send arbitration notices in Mumbai. Section 25 cases are compoundable matters. Your lawyer can reply by explaining your real financial hardship.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The Supreme Court in <em>Perkins Eastman</em> and <em>TRF Ltd</em> ruled that lenders cannot name sole arbitrators on their own. Your counsel can challenge the arbitrator under Section 12 and Section 14 of the Arbitration Act. This redirects your case to an OTS. Settling your matter in National Lok Adalat gives you a final Civil Court Decree with zero appeal risk.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Option</th>
                      <th>Legal Path</th>
                      <th>Waiver Range</th>
                      <th>Time Needed</th>
                      <th>Final Legal Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Direct NBFC OTS</td>
                      <td>Settlement pact under RBI Master Directions.</td>
                      <td><strong>40% – 60% Waiver</strong></td>
                      <td>15 to 30 Days</td>
                      <td>Private contract with ₹0 NDC.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">National Lok Adalat</td>
                      <td>Court hearing before a judge and panel.</td>
                      <td><strong>45% – 60% Waiver</strong></td>
                      <td>1-day session</td>
                      <td><strong>Civil Court Decree</strong> (No appeal).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Arbitration Defense</td>
                      <td>Contesting private hearings in far-off cities.</td>
                      <td>Variable (Converts to OTS)</td>
                      <td>3 to 9 Months</td>
                      <td>Subject to Section 34 challenge.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Section 25 / 138 Defense</td>
                      <td>Legal defense in cheque and NACH bounce cases.</td>
                      <td><strong>35% – 50% Waiver</strong></td>
                      <td>2 to 6 Months</td>
                      <td>Case closed and dropped.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: Sanction Letter Audit & ₹0 NDC Mandate */}
            <section id="sanction-letter-audit-ndc-verification" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>9. Sanction Letter Audit &amp; ₹0 NDC Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Authenticating IIFL Finance OTS Sanction Letters</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Always check your settlement letter carefully. It must come on official IIFL Finance Limited letterhead. It should show the Corporate Identification Number (CIN: L67100MH1995PLC093797), registered office address, unique reference number, and official seal. Never pay money on verbal promises or unverified links.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI Circular RBI/2023-24/60, IIFL Finance must issue your No Dues Certificate (NDC) within 30 days of full payment. They must also remove all security liens. If the lender delays, they must pay you ₹5,000 per day of delay.
              </p>
            </section>

            {/* Section 11: CIBIL Score Trajectory & Rehabilitation */}
            <section id="cibil-impact-credit-rehabilitation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>10. CIBIL Score Trajectory &amp; Rehabilitation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">IIFL Post-Settlement CIBIL Score Trajectory</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                After settlement, IIFL marks your loan across credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) as <strong>&apos;Settled&apos;</strong> with an outstanding balance of <strong>₹0</strong>. Your score may drop by 75 to 150 points initially. But all default interest and daily penalties stop permanently.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                You can rebuild your credit score back to 750+ within 18 to 24 months. Use a fixed-deposit secured credit card (FD card). Keep your credit usage below 25%. Pay all utility bills and active EMIs on time every month.
              </p>
            </section>

            {/* Section 12: SettleLoans Legal Defense & Representation */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>11. Legal Defense &amp; Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed IIFL Finance Borrowers Trust SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                SettleLoans stops recovery agent harassment with legal cease-and-desist notices. We audit gold loan auction shortfalls under Section 176. We defend Section 25 PSSA court notices and contest sole arbitration claims. Our team works directly with IIFL Zonal Stressed Assets teams to secure maximum debt waivers and genuine ₹0 No Dues Certificates.
              </p>

              {/* Placement of Reusable CompanySection */}
              <div className="my-8">
                <CompanySection />
              </div>
            </section>

            {/* Section 13: Frequently Asked Questions (FAQ Accordion) */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>12. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">FAQs: IIFL Finance Loan Settlement</h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
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
                    <strong>RBI Master Circular:</strong> Fair Practices Code for Non-Banking Financial Companies (NBFCs) &amp; Gold Loan Auction Guidelines
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.iifl.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>IIFL Finance Limited:</strong> Fair Practices Code, Customer Grievance Redressal Mechanism &amp; Principal Nodal Officer Directory
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Online Portal for Complaints on NBFC Recovery Harassment, Gold Auction Irregularities &amp; NDC Delays
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
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987 — National Lok Adalat Conciliation Framework
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
                  href="/gold-loan-auction-process-after-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Gold Loan Auction Process &amp; Defenses
                </Link>
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
                  href="/unsecured-business-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Unsecured Business Loan Settlement
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
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Recovery Agent Workplace Visit Rules
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
                <Link href="/authors/ashish-jhangra">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md hover:scale-105 transition-transform">
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
                Ashish has led over 1,200+ loan settlements across IIFL Finance, Bajaj Finance, and top banks. He focuses on NBFC disputes, Section 25 PSSA defense, gold auction audits, and RBI borrower rights.
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
                <span>IIFL Dispute Resolution</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing IIFL Loan Default or Auction Shortfall?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop recovery agent calls and repeat NACH bounce charges today. Our legal team audits your loan, answers court notices, and secures a stamped IIFL settlement letter with big debt waivers.
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
                    <strong>Direct NBFC Representation:</strong> We skip third-party recovery agents and talk directly with IIFL Zonal Stressed Assets teams.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Gold Auction Shortfall Defense:</strong> We review auction files under Section 176 of the Indian Contract Act to challenge unfair shortfall claims.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Protection:</strong> We issue prompt legal notices to stop workplace visits and third-party calling under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Verification:</strong> Every settlement letter is verified on official corporate letterhead before you pay any money.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC Delivery:</strong> We track your case until IIFL delivers your No Dues Certificate and clears your credit record.
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
