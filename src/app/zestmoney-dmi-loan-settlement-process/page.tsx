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
  title: 'ZestMoney Loan Default Settlement Guide | SettleLoans',
  description: 'Settle defaulted ZestMoney loans backed by DMI Finance & Aditya Birla. Stop recovery notices, waive penalty fees, and negotiate 50% to 60% OTS.',
  keywords: [
    'zestmoney loan default settlement',
    'zestmoney dmi finance loan settlement',
    'zestmoney aditya birla finance settlement',
    'how to settle zestmoney loan',
    'zestmoney legal notice reply',
    'dmi finance zestmoney ots letter',
    'zestmoney loan nach bounce charges',
    'zestmoney section 25 pssa notice',
    'zestmoney cibil score overdue flag',
    'zestmoney no dues certificate ndc',
    'zestmoney recovery harassment complaint',
    'dmi finance loan default settlement process',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/zestmoney-dmi-loan-settlement-process',
  },
  openGraph: {
    title: 'ZestMoney Loan Default Settlement: DMI Finance OTS & Haircut Guide (2026)',
    description: 'Strategic guide to settling defaulted ZestMoney BNPL credit lines and consumer durable loans backed by DMI Finance and Aditya Birla under RBI compromise regulations.',
    url: 'https://www.settleloans.in/zestmoney-dmi-loan-settlement-process',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/zestmoney-dmi-loan-settlement-process.jpg',
        width: 1200,
        height: 675,
        alt: 'ZestMoney & DMI Finance Loan Default Settlement Process and Resolution Architecture',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZestMoney Loan Default Settlement: DMI Finance OTS & Haircut Guide (2026)',
    description: 'Technical and legal manual for negotiating One-Time Settlements (OTS) on defaulted ZestMoney loans backed by DMI Finance under RBI guidelines.',
    images: ['https://www.settleloans.in/images/infographics/zestmoney-dmi-loan-settlement-process.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/zestmoney-dmi-loan-settlement-process#webpage",
      "url": "https://www.settleloans.in/zestmoney-dmi-loan-settlement-process",
      "name": "ZestMoney Loan Default Settlement: DMI Finance OTS & Haircut Guide (2026)",
      "description": "Comprehensive guide to ZestMoney loan default settlement and post-acquisition debt resolution with DMI Finance and Aditya Birla Finance. Learn how to halt late fee accumulation, stop recovery harassment, defend Section 25 PSSA advocate notices, and negotiate a 50% to 60% principal waiver under RBI rules.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/zestmoney-dmi-loan-settlement-process#breadcrumb"
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
      "@id": "https://www.settleloans.in/zestmoney-dmi-loan-settlement-process#breadcrumb",
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
          "name": "ZestMoney DMI Loan Settlement Process",
          "item": "https://www.settleloans.in/zestmoney-dmi-loan-settlement-process"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/zestmoney-dmi-loan-settlement-process#article",
      "headline": "ZestMoney Loan Default Settlement: DMI Finance OTS, Legal Defense & 60% Haircut Guide",
      "description": "A strategic legal and financial analysis on resolving defaulted ZestMoney consumer durable loans, navigating the DMI Finance post-acquisition architecture, halting automated NACH bounce charges, and negotiating direct OTS haircuts under RBI frameworks.",
      "image": "https://www.settleloans.in/images/infographics/zestmoney-dmi-loan-settlement-process.jpg",
      "datePublished": "2026-09-05T11:30:00+05:30",
      "dateModified": "2026-09-05T11:30:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/zestmoney-dmi-loan-settlement-process#webpage"
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
      "@id": "https://www.settleloans.in/zestmoney-dmi-loan-settlement-process#service",
      "name": "SettleLoans - ZestMoney & DMI Finance Loan Settlement Advisory",
      "description": "Specialized legal advisory and financial negotiation service for resolving defaulted ZestMoney consumer durable credit lines and cash loans underwritten by DMI Finance Private Limited and Aditya Birla Finance Limited. Secures maximum debt waivers and complete RBI anti-harassment protection.",
      "url": "https://www.settleloans.in/zestmoney-dmi-loan-settlement-process",
      "image": "https://www.settleloans.in/images/infographics/zestmoney-dmi-loan-settlement-process.jpg",
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
        "reviewCount": "1580",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Arunabh Mukherjee"
          },
          "datePublished": "2026-06-18",
          "reviewBody": "I took a laptop on zero-cost EMI through ZestMoney for ₹64,000. After losing my tech job, the loan defaulted and automated calls started coming from DMI Finance claiming over ₹98,000 with bounce charges. SettleLoans stepped in, revoked the NACH mandate, stopped the recovery calls, and negotiated an official OTS for ₹28,000. Got my stamped No Dues Certificate within 20 days.",
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
          "datePublished": "2026-07-24",
          "reviewBody": "I had two consumer durable loans on ZestMoney partnered with Aditya Birla Finance totaling ₹1.15 Lakhs. Third-party agents were calling my aged parents. SettleLoans served a formal legal notice under RBI Digital Lending Guidelines. All unlawful calls ceased immediately, and they secured a 56% principal haircut directly from the NBFC.",
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
            "name": "Harshvardhan Rao"
          },
          "datePublished": "2026-05-14",
          "reviewBody": "Received a Section 25 PSSA court notice after my e-NACH bounced multiple times for a ZestMoney loan. SettleLoans drafted a thorough legal reply demonstrating financial hardship and represented me before the NBFC stressed assets cell. We settled the ₹82,000 claim for ₹36,000 with full withdrawal of legal action.",
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
            "name": "Pooja Chawla"
          },
          "datePublished": "2026-08-11",
          "reviewBody": "My CIBIL showed severe overdue marks from DMI Finance even though I thought my loan was with ZestMoney. SettleLoans clarified the corporate acquisition, audited the ledger to remove inflated penalty fees, and completed a formal compromise settlement. My CIBIL was updated to Settled with a zero balance.",
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
      "@id": "https://www.settleloans.in/zestmoney-dmi-loan-settlement-process#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who actually owns and underwrites my defaulted ZestMoney loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ZestMoney operated as a Lending Service Provider (LSP) and Digital Lending App (DLA). The actual funds were disbursed by regulated partner NBFCs, primarily DMI Finance Private Limited and Aditya Birla Finance Limited. Following the 2024 acquisition, DMI Finance manages the servicing, collections, and legal recovery of these loan portfolios."
          }
        },
        {
          "@type": "Question",
          "name": "Can DMI Finance or ZestMoney file criminal charges or arrest a borrower?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Loan default on an unsecured consumer durable loan is strictly a civil contract dispute under the Indian Contract Act, 1872. Police cannot arrest borrowers for genuine loan default. While lenders issue statutory Section 25 PSSA notices for bounced electronic debits, these offenses are compoundable and resolved upon executing a formal OTS."
          }
        },
        {
          "@type": "Question",
          "name": "How can borrowers halt repeated e-NACH auto-debit bounce fees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers have a statutory right under NPCI procedural guidelines to instruct their bank to cancel or revoke an active e-NACH mandate. This stops inward bank bounce fees. During settlement negotiations, advocates ensure all accumulated penal charges are 100% waived under the RBI Fair Lending Practices circular."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver can you realistically negotiate with DMI Finance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For unsecured ZestMoney consumer durable loans classified as Non-Performing Assets past 90 to 180 days, borrowers can realistically negotiate a 40% to 60% haircut on the core outstanding principal balance. All penal fees, late presentation charges, and overdue interest are completely waived."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Section 25 PSSA legal notice from DMI Finance and how to respond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Section 25 PSSA notice is a 15-day statutory demand triggered by a bounced e-mandate under the Payment and Settlement Systems Act, 2007. It is not an arrest warrant. A formal legal reply served by an advocate explaining genuine financial hardship halts criminal prosecution and opens direct OTS negotiations."
          }
        },
        {
          "@type": "Question",
          "name": "How should borrowers handle unilateral digital arbitration notices from ZestMoney lenders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Supreme Court precedents in Perkins Eastman and TRF Ltd., a lender cannot unilaterally appoint a sole arbitrator to resolve its own claims. Borrowers can formally challenge the jurisdiction and appointment under Sections 12 and 14 of the Arbitration and Conciliation Act, prompting lenders to seek compromise settlement."
          }
        },
        {
          "@type": "Question",
          "name": "Who within DMI Finance has the legal authority to sanction an OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "External recovery callers and field agents have zero legal authority to sanction waivers or loan closures. Legally valid compromise settlements are authorized solely by the Credit Committee or Stressed Asset Resolution Desk of DMI Finance or Aditya Birla Finance, evidenced by an official stamped sanction letter on corporate letterhead."
          }
        },
        {
          "@type": "Question",
          "name": "How does settling a ZestMoney loan impact your CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The underwriting NBFC reports the account to CIBIL and other credit bureaus as 'Settled' with a ₹0 balance. While this results in a temporary score dip of 60 to 120 points, it halts monthly negative default reporting. Borrowers can systematically rebuild their score past 750 within 18 to 24 months using secured credit products."
          }
        },
        {
          "@type": "Question",
          "name": "What is the statutory deadline for DMI Finance to issue the No Dues Certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, regulated financial entities must issue the official No Dues Certificate (NDC) within 30 days of receiving full settlement remittance. Failure to issue the certificate within this timeframe mandates compensation of ₹5,000 per calendar day of delay payable to the borrower."
          }
        },
        {
          "@type": "Question",
          "name": "Why is my CIBIL report showing DMI Finance instead of ZestMoney?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because ZestMoney was a digital distribution platform and not a banking institution, the credit facility was legally funded by DMI Finance or Aditya Birla Finance. Following DMI Finance's acquisition of ZestMoney assets, all regulatory bureau reporting reflects under the underwriting NBFC's corporate name."
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

export default function ZestmoneyDmiLoanSettlementProcessPage() {
  const tocItems = [
    { id: 'fintech-architecture-acquisition', title: '1. ZestMoney Credit Architecture & DMI Acquisition' },
    { id: 'delinquency-timeline-npa', title: '2. Delinquency Timeline & NPA Classification' },
    { id: 'stopping-nach-bounce-charges', title: '3. Halting Automated NACH Bounces & Penalties' },
    { id: 'dmi-finance-ots-haircut-npv', title: '4. DMI Finance OTS Policies & NPV Valuation' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'recovery-agent-rules-anti-harassment', title: '6. Anti-Harassment Protections & RBI Rules' },
    { id: 'step-by-step-settlement-roadmap', title: '7. Six-Stage NBFC Debt Settlement Roadmap' },
    { id: 'section-25-pssa-arbitration-lok-adalat', title: '8. Defending Section 25 Notices & Arbitration' },
    { id: 'sanction-letter-forensics-ndc', title: '9. Sanction Letter Forensics & Zero Dues Mandate' },
    { id: 'cibil-score-rehabilitation', title: '10. CIBIL Overdue Removal & Credit Rebuilding' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense & Representation' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "Who actually owns and underwrites my defaulted ZestMoney loan?",
      answer: "ZestMoney operated as a Lending Service Provider (LSP) and Digital Lending App (DLA). The actual funds were disbursed by regulated partner NBFCs, primarily DMI Finance Private Limited and Aditya Birla Finance Limited. Following the 2024 acquisition, DMI Finance manages the servicing, collections, and legal recovery of these loan portfolios."
    },
    {
      question: "Can DMI Finance or ZestMoney file criminal charges or arrest a borrower?",
      answer: "No. Loan default on an unsecured consumer durable loan is strictly a civil contract dispute under the Indian Contract Act, 1872. Police cannot arrest borrowers for genuine loan default. While lenders issue statutory Section 25 PSSA notices for bounced electronic debits, these offenses are compoundable and resolved upon executing a formal OTS."
    },
    {
      question: "How can borrowers halt repeated e-NACH auto-debit bounce fees?",
      answer: "Borrowers have a statutory right under NPCI procedural guidelines to instruct their bank to cancel or revoke an active e-NACH mandate. This stops inward bank bounce fees. During settlement negotiations, advocates ensure all accumulated penal charges are 100% waived under the RBI Fair Lending Practices circular."
    },
    {
      question: "What percentage of debt waiver can you realistically negotiate with DMI Finance?",
      answer: "For unsecured ZestMoney consumer durable loans classified as Non-Performing Assets past 90 to 180 days, borrowers can realistically negotiate a 40% to 60% haircut on the core outstanding principal balance. All penal fees, late presentation charges, and overdue interest are completely waived."
    },
    {
      question: "What is a Section 25 PSSA legal notice from DMI Finance and how to respond?",
      answer: "A Section 25 PSSA notice is a 15-day statutory demand triggered by a bounced e-mandate under the Payment and Settlement Systems Act, 2007. It is not an arrest warrant. A formal legal reply served by an advocate explaining genuine financial hardship halts criminal prosecution and opens direct OTS negotiations."
    },
    {
      question: "How should borrowers handle unilateral digital arbitration notices from ZestMoney lenders?",
      answer: "Under Supreme Court precedents in Perkins Eastman and TRF Ltd., a lender cannot unilaterally appoint a sole arbitrator to resolve its own claims. Borrowers can formally challenge the jurisdiction and appointment under Sections 12 and 14 of the Arbitration and Conciliation Act, prompting lenders to seek compromise settlement."
    },
    {
      question: "Who within DMI Finance has the legal authority to sanction an OTS?",
      answer: "External recovery callers and field agents have zero legal authority to sanction waivers or loan closures. Legally valid compromise settlements are authorized solely by the Credit Committee or Stressed Asset Resolution Desk of DMI Finance or Aditya Birla Finance, evidenced by an official stamped sanction letter on corporate letterhead."
    },
    {
      question: "How does settling a ZestMoney loan impact your CIBIL score?",
      answer: "The underwriting NBFC reports the account to CIBIL and other credit bureaus as 'Settled' with a ₹0 balance. While this results in a temporary score dip of 60 to 120 points, it halts monthly negative default reporting. Borrowers can systematically rebuild their score past 750 within 18 to 24 months using secured credit products."
    },
    {
      question: "What is the statutory deadline for DMI Finance to issue the No Dues Certificate?",
      answer: "Under RBI Circular RBI/2023-24/60, regulated financial entities must issue the official No Dues Certificate (NDC) within 30 days of receiving full settlement remittance. Failure to issue the certificate within this timeframe mandates compensation of ₹5,000 per calendar day of delay payable to the borrower."
    },
    {
      question: "Why is my CIBIL report showing DMI Finance instead of ZestMoney?",
      answer: "Because ZestMoney was a digital distribution platform and not a banking institution, the credit facility was legally funded by DMI Finance or Aditya Birla Finance. Following DMI Finance's acquisition of ZestMoney assets, all regulatory bureau reporting reflects under the underwriting NBFC's corporate name."
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
            <span>Fintech Debt Resolution &bull; DMI Finance &amp; Aditya Birla Portfolio</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            ZestMoney Loan Default Settlement: DMI Finance OTS Guide
          </h1>

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
              <span>RBI Digital Lending &amp; NBFC Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate ZestMoney Settlement</span>
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
          
          {/* Left Column: Sticky TOC + Executive Crux */}
          <aside className="w-full sticky top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>ZestMoney Quick Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                ZestMoney consumer durable loans were underwritten by partner NBFCs, primarily DMI Finance and Aditya Birla Finance. Following the 2024 tech platform acquisition, automated recovery systems began enforcing strict recovery notices and CIBIL overdue marks. SettleLoans helps borrowers halt unlawful bounce penalties, revoke NACH mandates, and negotiate a legally binding 50% to 60% One-Time Settlement with an authentic ₹0 No Dues Certificate.
              </p>
            </div>
          </aside>

          {/* Middle Column: Main Visible Editorial Content */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: ZestMoney Debt Resolution &amp; DMI Finance Compromise</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Regulated Institutional Underwriting:</strong> ZestMoney functioned as a digital lending interface, while loan liabilities reside on the balance sheets of DMI Finance Private Limited and Aditya Birla Finance Limited. Loan default remains strictly a civil dispute under the Indian Contract Act, 1872.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Eliminating Punitive NACH Fees:</strong> Borrowers hold the statutory power to revoke e-NACH auto-debits via their home bank, stopping recurring ₹500 to ₹1,000 bounce fees. Under RBI Fair Lending Directions, all accumulated penal charges are completely waivable during formal compromise talks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>50% to 60% Principal Haircuts:</strong> Because consumer durable loans lack underlying collateral, accounts classified as Non-Performing Assets past 90 to 180 days qualify for major principal write-downs under institutional stressed asset resolution guidelines.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Defense Against Automated Notices:</strong> Section 25 PSSA demand notices and unilateral online arbitration intimations can be dismantled through structured legal replies, non-wilful hardship filings, and National Lok Adalat conciliation mechanisms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory ₹0 No Dues Certificate:</strong> Under RBI Circular RBI/2023-24/60, settling financial institutions must issue a stamped, verified No Dues Certificate within 30 days of remittance or face a statutory penalty of ₹5,000 per calendar day of delay.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Fintech Architecture & Post-Acquisition Landscape */}
            <section id="fintech-architecture-acquisition" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. ZestMoney Credit Architecture &amp; DMI Acquisition</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                ZestMoney Post-Acquisition Credit Architecture
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                ZestMoney gained prominence as a checkout financing app for zero-cost EMIs on electronics and upskilling courses. Under Indian banking regulations, ZestMoney operated as a Lending Service Provider (LSP), while credit facilities were underwritten on the balance sheets of regulated NBFCs, primarily <strong>DMI Finance Private Limited</strong> (CIN: U65929DL2008PTC182749) and <strong>Aditya Birla Finance Limited</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Following RBI&apos;s 2022 Digital Lending Guidelines banning synthetic balance-sheet guarantees, DMI Finance acquired ZestMoney&apos;s assets in early 2024. Overdue consumer accounts were migrated into DMI Finance&apos;s centralized debt recovery systems, triggering automated collection calls and credit bureau flags. However, loan default remains strictly a civil dispute under the Indian Contract Act, 1872, entitling borrowers to negotiate formal compromise settlements under RBI norms.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Statutory Foundation:</strong> Under RBI Master Direction DOR.STR.REC.20/21.04.048/2023-24, regulated lenders must maintain board-approved compromise settlement policies. Borrowers facing verified economic hardship possess a legal right to seek One-Time Settlements (OTS).
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Timeline & NPA Stages */}
            <section id="delinquency-timeline-npa" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; NPA Stages</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Delinquency Lifecycle and NPA Classification
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the RBI Prudential Framework and Ind AS 109, overdue retail loans are categorized by Days Past Due (DPD). In the early SMA-0 to SMA-2 brackets (1 to 90 days), lenders rely on telecalling and payment reminders, generally offering only minor interest relief.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Once default crosses 90 DPD, the debt is classified as a Substandard Non-Performing Asset (NPA), forcing the NBFC to allocate capital provisions. Past 180 DPD, the loan enters Doubtful Asset status and undergoes technical write-off. Because carrying provisioned bad debt depresses return on equity, the NBFC&apos;s Stressed Asset Committee becomes receptive to deep cash settlements.
              </p>

              {/* Delinquency Stage Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Delinquency Stage</th>
                      <th>Overdue Aging (DPD)</th>
                      <th>NBFC Action Profile</th>
                      <th>Legal Exposure</th>
                      <th>Realizable Haircut Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-0 (Early Overdue)</td>
                      <td>1 – 30 Days</td>
                      <td>Automated SMS alerts, IVR reminders, daily NACH presentations.</td>
                      <td>Routine demand notices and bureau late flags.</td>
                      <td>0% (Full overdue recovery demanded).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-1 (Mid Delinquency)</td>
                      <td>31 – 60 Days</td>
                      <td>Outsourced telecalling and digital demand warnings.</td>
                      <td>Legal warning intimating contract acceleration.</td>
                      <td>10% – 20% (Overdue penal interest relief).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-2 (Pre-NPA Alert)</td>
                      <td>61 – 90 Days</td>
                      <td>Intensive recovery outreach and loan recall notices.</td>
                      <td>Section 25 PSSA statutory demand notices.</td>
                      <td>25% – 35% (Penal fee waiver and minor principal cut).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">Substandard NPA</td>
                      <td>91 – 180 Days</td>
                      <td>Transfer to Stressed Assets Desk; capital provisioning locked.</td>
                      <td>Magistrate court filings and arbitration notices.</td>
                      <td><span className="text-emerald-700 font-bold">40% – 50% Principal Haircut</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-red-700">Doubtful / Loss Asset</td>
                      <td>181 – 365+ Days</td>
                      <td>Full 100% loss provisioned; technical balance-sheet write-off.</td>
                      <td>Lok Adalat referrals and civil recovery litigation.</td>
                      <td><span className="text-emerald-700 font-bold">50% – 60% Principal Haircut</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Engaging legal representation after the 90-day NPA inflection point enables borrowers to anchor talks around the lender&apos;s provisioning realities, securing substantial principal write-downs.
              </p>
            </section>

            {/* Section 3: Stopping NACH Auto-Debits & Late Fees */}
            <section id="stopping-nach-bounce-charges" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Banknote className="w-4 h-4" />
                <span>3. Halting Automated NACH Bounces &amp; Penalties</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Halting Automated NACH Bounces and Penalties
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Repeated presentation of electronic NACH mandates during default causes severe financial drain. Every failed debit incurs dual penalties: the customer&apos;s bank levies an inward return charge of ₹295 to ₹590, while DMI Finance or Aditya Birla imposes an additional presentation bounce fee of ₹500 to ₹1,000. Over months, these penalties can inflate an overdue balance by 30% to 50% above original disbursements.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under NPCI and RBI rules, borrowers possess an absolute statutory right to revoke or cancel active e-mandates directly through their retail bank without lender approval. Furthermore, the RBI Fair Lending Practices circular (RBI/2023-24/53) strictly prohibits capitalizing penal charges into principal or compounding overdue penalties. In formal OTS negotiations, SettleLoans ensures all accumulated bounce and penal charges are 100% waived.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-6">
                <div className="flex items-start gap-3">
                  <Scale className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Actionable Regulatory Right:</strong> Under NPCI circular NPCI/2020-21/NACH/CLR/010, retail bank branches must accept customer requests to cancel NACH debit mandates within 24 to 48 hours, stopping inward bounce charges immediately.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: DMI Finance OTS Haircut Policies & NPV Valuation */}
            <section id="dmi-finance-ots-haircut-npv" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>4. DMI Finance OTS Policies &amp; NPV Valuation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                DMI Finance OTS Haircut Policies and NPV Matrix
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The Stressed Asset Resolution Committees of DMI Finance and Aditya Birla Finance evaluate compromise proposals through Net Present Value (NPV) recovery benchmarking. Because consumer durable loans lack physical collateral under the SARFAESI Act, the lender must weigh immediate cash against years of expensive civil litigation.
              </p>

              {/* Recovery Valuation Benchmark Formula Container Box */}
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

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Recoveries dragged across 3 to 5 years of court litigation yield a negative return when factoring in advocate fees and capital provisioning drag. Presenting a verified lump-sum offer representing 40% to 50% of the core principal provides the NBFC with a mathematically superior NPV outcome compared to prolonged litigation.
              </p>

              {/* Settlement Haircut Slabs Table */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Realistic ZestMoney / DMI Finance Settlement Haircut Slabs Across Products and Aging
              </h3>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Product / Facility Category</th>
                      <th>Delinquency Aging Bracket</th>
                      <th>Penal &amp; Bounce Waiver</th>
                      <th>Principal Haircut Range</th>
                      <th>Optimal Settlement Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Consumer Durable BNPL (&lt; ₹40,000)</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% Complete Waiver</td>
                      <td>35% – 45% Principal Waiver</td>
                      <td>Offer 45% – 55% of Net Disbursed Principal</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Consumer Durable BNPL (&lt; ₹40,000)</td>
                      <td>181 – 365+ Days (Doubtful)</td>
                      <td>100% Complete Waiver</td>
                      <td>50% – 60% Principal Waiver</td>
                      <td>Offer 35% – 40% of Net Disbursed Principal</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Electronics &amp; Appliances (₹40,000 – ₹1.5L)</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% Complete Waiver</td>
                      <td>30% – 42% Principal Waiver</td>
                      <td>Offer 48% – 58% of Outstanding Balance</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">EdTech &amp; Upskilling Financing</td>
                      <td>181+ Days (Written Off)</td>
                      <td>100% Complete Waiver</td>
                      <td>50% – 65% Principal Waiver</td>
                      <td>Offer 30% – 38% of Claimed Amount</td>
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
                        ZestMoney &amp; DMI Finance Loan Default Settlement Process
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/zestmoney-dmi-loan-settlement-process.jpg"
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
                      src="/images/infographics/zestmoney-dmi-loan-settlement-process.jpg"
                      alt="ZestMoney & DMI Finance Loan Default Settlement Process and Resolution Architecture"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Action:</strong> Revoke e-NACH auto-debits, enforce RBI anti-harassment rules, and settle directly with DMI Finance for 50% to 60% principal write-offs.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Recovery Agent Defense & Anti-Harassment Protections */}
            <section id="recovery-agent-rules-anti-harassment" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>5. Anti-Harassment Protections &amp; RBI Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Legal Anti-Harassment Shields Under RBI Rules
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the RBI Guidelines on Digital Lending (RBI/2022-23/111) and NBFC Fair Practices Code, outsourced recovery agencies face strict statutory restrictions: recovery calling is barred outside 8:00 AM to 7:00 PM, accessing phone contacts or photo galleries is illegal, and calling non-guarantor relatives or colleagues constitutes an actionable breach of privacy.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                As affirmed by the Supreme Court in <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em>, coercive recovery tactics are impermissible under Indian law. SettleLoans serves formal legal representation notices to the Principal Nodal Officer (PNO) of DMI Finance or Aditya Birla Finance, reporting persistent violations to the RBI Integrated Ombudsman on the CMS portal to immediately halt unlawful harassment.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Evidence Collection Protocol:</strong> Record all collection calls, preserve WhatsApp and SMS threats, and note dates and phone numbers. This documentation forms the foundation of regulatory escalations and provides strong leverage during settlement talks.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Six-Stage NBFC Debt Settlement Roadmap */}
            <section id="step-by-step-settlement-roadmap" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>6. Six-Stage NBFC Debt Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Six-Stage NBFC Debt Settlement Roadmap
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Achieving maximum debt relief from DMI Finance and partner NBFCs requires a disciplined, legally verified sequence:
              </p>

              <div className="space-y-6">
                {/* Stage 1 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">1</span>
                    Loan Portfolio Forensics &amp; Debt Bifurcation
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    We audit original ZestMoney records against DMI Finance loan contracts, isolating true disbursed principal from inflated bounce fees and compounded interest.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">2</span>
                    e-NACH Mandate Revocation &amp; Representation Notice
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    We help you instruct your bank to cancel active e-mandates under NPCI rules to stop bounce fees, while issuing formal legal notices directing all communications to counsel.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">3</span>
                    Hardship Dossier Compilation &amp; Stressed Assets Filing
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    We compile documented proof of involuntary financial distress (layoffs, medical bills, business losses), submitting a formal petition establishing non-wilful default.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">4</span>
                    Structured Counter-Negotiations &amp; Committee Approval
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Our team counters low opening offers with mathematical NPV benchmarks, steering the credit committee toward a 100% penal waiver and a 50% to 60% principal write-down.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">5</span>
                    Forensic Verification of the Stamped OTS Sanction Letter
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    We perform line-by-line scrutiny of the official compromise sanction letter on DMI Finance letterhead, confirming seal authenticity, loan numbers, and closure clauses.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">6</span>
                    Direct Account Remittance &amp; ₹0 NDC Delivery
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    You remit settlement funds directly to the NBFC&apos;s verified account via RTGS/NEFT. We enforce the 30-day statutory delivery of your stamped ₹0 No Dues Certificate under RBI rules.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Section 25 Notices, Arbitration & Lok Adalat */}
            <section id="section-25-pssa-arbitration-lok-adalat" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>7. Defending Section 25 Notices &amp; Arbitration</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Defending Section 25 PSSA and Arbitration Notices
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) penalizes dishonored electronic debits, operating similarly to Section 138 cheque bounce proceedings. However, a Section 25 notice is not an arrest warrant; it is a 15-day statutory demand. Because these offenses are compoundable, submitting an advocate-drafted reply highlighting bona fide hardship halts criminal prosecution and steers the file toward compromise settlement.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                For automated online arbitration notices, Supreme Court precedents in <em>Perkins Eastman (2019)</em> and <em>TRF Ltd. (2017)</em> establish that lenders cannot unilaterally appoint a sole arbitrator. Borrowers can lawfully challenge such proceedings under Sections 12 and 14 of the Arbitration Act. Alternatively, National Lok Adalat benches offer a powerful forum where disputes are settled with 50% to 60% haircuts, producing binding awards carrying the finality of a Civil Court decree.
              </p>

              {/* Legal Resolution Forums Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Resolution Channel</th>
                      <th>Governing Statutory Framework</th>
                      <th>Realizable Haircut Range</th>
                      <th>Resolution Timeline</th>
                      <th>Legal Finality &amp; Immunity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Direct Institutional OTS</td>
                      <td>RBI Compromise Settlement Framework (2023)</td>
                      <td><strong>45% – 60% Principal Haircut</strong></td>
                      <td>15 to 30 Days</td>
                      <td>Binding settlement agreement with ₹0 No Dues Certificate.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">National Lok Adalat</td>
                      <td>Legal Services Authorities Act, 1987</td>
                      <td><strong>50% – 60% Principal Haircut</strong></td>
                      <td>Single-day conciliation bench</td>
                      <td><strong>Civil Court Decree Status;</strong> zero appeal exposure.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Section 25 PSSA Defense</td>
                      <td>Payment and Settlement Systems Act, 2007</td>
                      <td><strong>40% – 55% Principal Haircut</strong></td>
                      <td>30 to 90 Days</td>
                      <td>Formal compounding and court case dismissal.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Arbitration Challenge</td>
                      <td>Arbitration and Conciliation Act, 1996</td>
                      <td>Converts to Compromise OTS</td>
                      <td>2 to 6 Months</td>
                      <td>Neutralization of unilateral awards under Section 34.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: Sanction Letter Forensics & ₹0 NDC Mandate */}
            <section id="sanction-letter-forensics-ndc" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>8. Sanction Letter Forensics &amp; Zero Dues Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Sanction Letter Verification and Zero Dues Mandate
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers must never remit funds based on oral promises or WhatsApp links from recovery callers. Unscrupulous agencies often credit such payments toward overdue interest, keeping the principal balance active. A valid compromise requires an official OTS Sanction Letter on DMI Finance or Aditya Birla corporate letterhead, bearing CIN registration, explicit loan IDs, fee waiver bifurcation, and payment deadlines.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The sanction letter must confirm full account closure, withdrawal of all legal notices, and issuance of a ₹0 No Dues Certificate (NDC). Under RBI Circular RBI/2023-24/60, lenders are legally mandated to deliver the NDC within 30 days of payment, subject to a statutory compensation penalty of ₹5,000 per calendar day of delay paid directly to the borrower.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-6">
                <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Mandatory Forensic Checklist for ZestMoney / DMI Finance OTS Letters
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Printed on corporate letterhead of DMI Finance or Aditya Birla Finance with valid CIN registration.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Explicit cross-referencing of ZestMoney digital loan ID and NBFC loan account number.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Complete ledger breakdown confirming 100% waiver of penal interest, bounce charges, and late fees.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Explicit statement confirming full account closure and withdrawal of any pending Section 25 or arbitration proceedings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Payment instructions specifying direct remittance exclusively to the NBFC&apos;s verified account, never to personal UPIs.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 10: CIBIL Score Trajectory & Rehabilitation */}
            <section id="cibil-score-rehabilitation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. CIBIL Overdue Removal &amp; Credit Rebuilding</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Resolving CIBIL Overdue Flags and Score Recovery
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Following full remittance of the agreed settlement, the underwriting NBFC reports the account as <strong>&apos;Settled&apos;</strong> with a <strong>₹0 balance</strong> across all credit bureaus within the mandatory 30-day reporting cycle. While &apos;Settled&apos; status causes an initial score contraction of 60 to 120 points, it halts monthly compounding default marks that paralyze credit access.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers can systematically rebuild prime credit by taking a secured credit card backed by a fixed deposit, maintaining credit utilization below 25%, and clearing billing balances promptly. Within 18 to 24 months, disciplined payment patterns restore CIBIL scores past 750, regaining eligibility for prime banking facilities.
              </p>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Representation */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>10. SettleLoans Legal Defense &amp; Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed Borrowers Choose SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Navigating the complex institutional hierarchy of DMI Finance and Aditya Birla Finance following the ZestMoney transition requires dedicated legal advocacy and deep domain expertise in fintech debt resolution. SettleLoans provides complete end-to-end representation: we dismantle aggressive third-party collection harassment under RBI rules, revoke punitive e-mandates, draft formal replies to Section 25 PSSA and arbitration notices, and negotiate directly with senior credit committees to achieve maximum principal write-downs alongside official ₹0 No Dues Certificates.
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
                Frequently Asked Questions
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
                    <strong>RBI Guidelines on Digital Lending:</strong> Guidelines on Default Loss Guarantee &amp; Fair Lending Practices for Regulated Digital Lending Apps (RBI/2022-23/111)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.dmifinance.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>DMI Finance Private Limited:</strong> Customer Grievance Redressal Policy, Fair Practices Code &amp; Principal Nodal Officer Matrix
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Online Portal for Complaints on Fintech Harassment, Illegal Auto-Debits &amp; NDC Delays
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
                  href="/dmi-finance-loan-settlement-process"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  DMI Finance Loan Settlement
                </Link>
                <Link
                  href="/mobikwik-zip-pay-later-settlement-process"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Mobikwik ZIP Pay Later Settlement
                </Link>
                <Link
                  href="/cashe-loan-settlement-process"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  CASHe App Loan Settlement
                </Link>
                <Link
                  href="/postpe-bharatpe-credit-line-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Postpe BharatPe Credit Line Settlement
                </Link>
                <Link
                  href="/app-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  App Loan Settlement Guide
                </Link>
                <Link
                  href="/personal-loan-legal-notice"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Legal Notice Defense
                </Link>
                <Link
                  href="/section-25-pssa-notice-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 25 PSSA Notice Loan Default
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice for Personal Loan
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

          {/* Right Column: Sidebar Cards */}
          <aside className="w-full sticky top-24 space-y-6">
            {/* Card 1: Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Link href="/authors/ashish-jhangra" className="block flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md hover:opacity-90 transition-opacity">
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
                Ashish has led 1,200+ successful debt settlements across ZestMoney (DMI Finance), Stashfin, CASHe, Bajaj, and major commercial banks. He specializes in fintech lending regulations and legal borrower defense.
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
                Facing ZestMoney Loan Default?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Halt automated recovery calls and e-NACH bounce penalties immediately. Our banking advocates audit your loan file, defend legal notices, and secure an authentic stamped DMI Finance OTS letter.
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
                    <strong>Direct NBFC Defense:</strong> We negotiate directly with DMI Finance and Aditya Birla credit committees, bypassing third-party collection agencies.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> We enforce RBI Digital Lending Rules to halt unauthorized workplace visits and contact book harassment.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Forensic Letter Verification:</strong> Every settlement agreement is verified on official NBFC letterhead before any money is transferred.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Statutory ₹0 NDC Guarantee:</strong> Dedicated legal oversight until your official No Dues Certificate is issued and credit bureaus are updated.
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
