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
  AlertTriangle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'KrazyBee NBFC Loan Settlement | SettleLoans',
  description: 'Learn how to settle KrazyBee and KreditBee NBFC loans legally. Stop legal notice harassment and negotiate structured OTS with SettleLoans.',
  keywords: [
    'krazybee services legal notice settlement',
    'krazybee loan settlement process',
    'kreditbee loan legal notice reply',
    'krazybee services private limited notice',
    'krazybee nbfc one time settlement ots',
    'krazybee section 25 pssa notice',
    'kreditbee recovery agent harassment complaint rbi',
    'krazybee loan settlement percentage haircut',
    'krazybee no dues certificate ndc',
    'krazybee arbitration notice online dispute',
    'krazybee nodal officer escalation',
    'kreditbee default legal notice lawyer',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/krazybee-services-nbfc-loan-settlement',
  },
  openGraph: {
    title: 'KrazyBee Services NBFC Loan Settlement: Legal Notice Defense & OTS Guide (2026)',
    description: 'Learn how to settle defaulted KrazyBee / KreditBee personal loans. Discover how to defend Section 25 PSSA and arbitration notices, stop illegal digital collection harassment, and secure an authentic 40%–60% OTS settlement letter under RBI guidelines.',
    url: 'https://www.settleloans.in/krazybee-services-nbfc-loan-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/krazybee-services-nbfc-loan-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'KrazyBee Services NBFC Loan Settlement Process and Legal Notice Defense Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KrazyBee Services NBFC Loan Settlement: Legal Notice Defense & OTS Guide',
    description: 'Strategic guide on resolving defaulted KrazyBee Services (KreditBee) personal loans, deconstructing statutory legal notices, eliminating bounce penalties, and negotiating verified One-Time Settlements.',
    images: ['https://www.settleloans.in/images/infographics/krazybee-services-nbfc-loan-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/krazybee-services-nbfc-loan-settlement#webpage",
      "url": "https://www.settleloans.in/krazybee-services-nbfc-loan-settlement",
      "name": "KrazyBee Services NBFC Loan Settlement: Legal Notice Defense & OTS Guide (2026)",
      "description": "Comprehensive legal and financial guide to KrazyBee Services NBFC loan settlement. Learn how to settle KreditBee personal loans, respond to Section 25 PSSA legal notices and arbitration summons, halt digital recovery harassment, and negotiate a 40% to 60% OTS debt haircut under RBI rules.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/krazybee-services-nbfc-loan-settlement#breadcrumb"
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
      "@id": "https://www.settleloans.in/krazybee-services-nbfc-loan-settlement#breadcrumb",
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
          "name": "KrazyBee Services Loan Settlement",
          "item": "https://www.settleloans.in/krazybee-services-nbfc-loan-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/krazybee-services-nbfc-loan-settlement#article",
      "headline": "KrazyBee Services NBFC Loan Settlement: Legal Notice Defense & OTS Haircut Guide",
      "description": "An exhaustive manual for navigating KrazyBee Services Private Limited (KreditBee) debt resolution, deconstructing statutory notices under Section 25 PSSA and arbitration acts, halting collection agency harassment, and securing a formal OTS sanction letter under RBI guidelines.",
      "image": "https://www.settleloans.in/images/infographics/krazybee-services-nbfc-loan-settlement.jpg",
      "datePublished": "2026-09-02T12:00:00+05:30",
      "dateModified": "2026-09-02T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/krazybee-services-nbfc-loan-settlement#webpage"
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
      "@id": "https://www.settleloans.in/krazybee-services-nbfc-loan-settlement#service",
      "name": "SettleLoans - KrazyBee Services NBFC Loan Settlement & Legal Notice Defense",
      "description": "Specialized legal representation and debt negotiation advisory for resolving defaulted KrazyBee Services Private Limited (KreditBee) loans under RBI compromise frameworks, stopping unlawful recovery harassment, defending court notices, and securing verified OTS letters.",
      "url": "https://www.settleloans.in/krazybee-services-nbfc-loan-settlement",
      "image": "https://www.settleloans.in/images/infographics/krazybee-services-nbfc-loan-settlement.jpg",
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
            "name": "Rohit Verma"
          },
          "datePublished": "2026-07-19",
          "reviewBody": "I had a ₹1.8 Lakh loan from KreditBee funded by KrazyBee. I lost my job in an IT layoff. Agents called my phone contacts. They sent a Section 25 PSSA notice. SettleLoans sent a strong legal reply. They spoke directly to KrazyBee. We closed the loan for ₹76,000. I got a verified OTS letter and a ₹0 NDC.",
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
            "name": "Meera Srinivasan"
          },
          "datePublished": "2026-08-04",
          "reviewBody": "KrazyBee added ₹38,000 in bounce fees and penal interest on my loan. SettleLoans checked my loan ledger. They got a 100% waiver on all penal fees under RBI rules. Then they settled the loan with a 54% discount on principal. Their legal defense gave me total peace of mind.",
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
            "name": "Karthik Nair"
          },
          "datePublished": "2026-06-28",
          "reviewBody": "KrazyBee sent an online arbitration notice with their own chosen arbitrator. SettleLoans lawyers filed objections citing Supreme Court rulings like Perkins and TRF Ltd. This shifted the case to settlement talks. We resolved the debt peacefully without going to court.",
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
          "datePublished": "2026-08-22",
          "reviewBody": "Recovery callers sent WhatsApp threats and called my friends daily. The calls stopped within 24 hours after SettleLoans sent a legal notice to KrazyBee's Nodal Officer. They got me an official stamped OTS letter on KrazyBee letterhead. I also received my clean No Dues Certificate.",
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
      "@id": "https://www.settleloans.in/krazybee-services-nbfc-loan-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the relationship between KrazyBee Services Private Limited and KreditBee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "KrazyBee Services Private Limited is an RBI-registered NBFC (Registration No. N-02.00262). KreditBee is a digital app run by Finnov Private Limited. Users apply for loans through the app. But KrazyBee lends the money. KrazyBee also issues legal notices and approves One-Time Settlements (OTS)."
          }
        },
        {
          "@type": "Question",
          "name": "How should I respond to a Section 25 PSSA legal notice issued by KrazyBee Services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Section 25 PSSA notice gives you 15 days to reply. It is not an arrest warrant. It is not a court order. Do not panic. Hire a lawyer to send a formal reply within 15 days. The reply explains your money hardship and opens direct settlement talks."
          }
        },
        {
          "@type": "Question",
          "name": "Can KrazyBee recovery agents call my family, friends, or employer for loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under RBI Digital Lending rules, agents cannot call third parties. They cannot scrape your contacts. They cannot call office staff or relatives. Calling third parties breaks Section 72A of the IT Act. You can file a police and RBI complaint."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver or haircut can you negotiate on a defaulted KrazyBee loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unsecured loans turn into NPAs after 90 days unpaid. KrazyBee then offers 40% to 60% debt waivers. Your lawyer also gets a 100% waiver on all bounce fees. All penal charges get waived under RBI Fair Lending rules."
          }
        },
        {
          "@type": "Question",
          "name": "Can KrazyBee or KreditBee file a police complaint (FIR) or have me arrested for loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Loan default is a civil breach of contract under the Indian Contract Act, 1872. Police cannot file an FIR. They cannot arrest you for inability to pay. Fake police threats and bogus arrest warrants violate RBI rules."
          }
        },
        {
          "@type": "Question",
          "name": "How should I handle unilateral online arbitration notices sent by KrazyBee legal counsel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Supreme Court ruled in Perkins Eastman and TRF Ltd. One-sided arbitrator choices are illegal. Your lawyer files objections under Section 12 and Section 14 of the Arbitration Act. This halts biased hearings and starts settlement talks."
          }
        },
        {
          "@type": "Question",
          "name": "How can I verify that a KrazyBee settlement letter is genuine and authentic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A real OTS letter uses KrazyBee Services Private Limited letterhead. It lists the CIN and RBI Reg No. N-02.00262. It shows your name, loan account number, settlement sum, and due date. Always pay into KrazyBee's official bank account. Never pay a personal UPI handle."
          }
        },
        {
          "@type": "Question",
          "name": "How long does KrazyBee take to issue the No Dues Certificate (NDC) and update CIBIL?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, KrazyBee must issue the NDC within 30 days. They must also update credit bureaus in 30 days. If KrazyBee delays past 30 days, they must pay you ₹5,000 per day of delay."
          }
        },
        {
          "@type": "Question",
          "name": "How does settling a KrazyBee loan affect my CIBIL score and credit history?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "KrazyBee reports the loan as 'Settled' with a ₹0 balance to CIBIL. Your score may drop 75 to 150 points at first. But this ends default marks and legal notices. You can rebuild your score to 750+ within 18 to 24 months using a secured card."
          }
        },
        {
          "@type": "Question",
          "name": "Who has the authority at KrazyBee Services to sanction a One-Time Settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recovery callers have zero power to approve loan discounts. Real waivers of 40% to 60% come from KrazyBee's Credit Committee. Always demand an official stamped sanction letter before paying."
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

export default function KrazyBeeServicesNBFCLoanSettlementPage() {
  const tocItems = [
    { id: 'krazybee-entity-architecture', title: '1. Corporate Architecture: KrazyBee vs. KreditBee' },
    { id: 'delinquency-timeline-npa-stages', title: '2. Delinquency Timeline & Ind AS 109 Provisioning' },
    { id: 'legal-notice-deconstruction-defense', title: '3. Legal Notice Deconstruction & Statutory Protections' },
    { id: 'npv-recovery-model-haircut-math', title: '4. NPV Recovery Valuation & Haircut Mathematics' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'digital-recovery-harassment-defense', title: '6. Halting Recovery Harassment & RBI Protections' },
    { id: 'step-by-step-krazybee-settlement', title: '7. Step-by-Step NBFC Settlement Roadmap' },
    { id: 'sanction-letter-forensics-verification', title: '8. Forensic Sanction Letter Audit & NDC Issuance' },
    { id: 'cibil-recovery-credit-rehabilitation', title: '9. Credit Score Rehabilitation & Resolution Matrix' },
    { id: 'settleloans-advocacy-representation', title: '10. SettleLoans Legal Defense & Advisory' },
    { id: 'faqs', title: '11. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "What is the relationship between KrazyBee Services Private Limited and KreditBee?",
      answer: "KrazyBee Services Private Limited is an RBI-registered NBFC (Registration No. N-02.00262). KreditBee is a digital app run by Finnov Private Limited. Users apply for loans through the app. But KrazyBee lends the money. KrazyBee also issues legal notices and approves One-Time Settlements (OTS)."
    },
    {
      question: "How should I respond to a Section 25 PSSA legal notice issued by KrazyBee Services?",
      answer: "A Section 25 PSSA notice gives you 15 days to reply. It is not an arrest warrant. It is not a court order. Do not panic. Hire a lawyer to send a formal reply within 15 days. The reply explains your money hardship and opens direct settlement talks."
    },
    {
      question: "Can KrazyBee recovery agents call my family, friends, or employer for loan default?",
      answer: "No. Under RBI Digital Lending rules, agents cannot call third parties. They cannot scrape your contacts. They cannot call office staff or relatives. Calling third parties breaks Section 72A of the IT Act. You can file a police and RBI complaint."
    },
    {
      question: "What percentage of debt waiver or haircut can you negotiate on a defaulted KrazyBee loan?",
      answer: "Unsecured loans turn into NPAs after 90 days unpaid. KrazyBee then offers 40% to 60% debt waivers. Your lawyer also gets a 100% waiver on all bounce fees. All penal charges get waived under RBI Fair Lending rules."
    },
    {
      question: "Can KrazyBee or KreditBee file a police complaint (FIR) or have me arrested for loan default?",
      answer: "No. Loan default is a civil breach of contract under the Indian Contract Act, 1872. Police cannot file an FIR. They cannot arrest you for inability to pay. Fake police threats and bogus arrest warrants violate RBI rules."
    },
    {
      question: "How should I handle unilateral online arbitration notices sent by KrazyBee legal counsel?",
      answer: "The Supreme Court ruled in Perkins Eastman and TRF Ltd. One-sided arbitrator choices are illegal. Your lawyer files objections under Section 12 and Section 14 of the Arbitration Act. This halts biased hearings and starts settlement talks."
    },
    {
      question: "How can I verify that a KrazyBee settlement letter is genuine and authentic?",
      answer: "A real OTS letter uses KrazyBee Services Private Limited letterhead. It lists the CIN and RBI Reg No. N-02.00262. It shows your name, loan account number, settlement sum, and due date. Always pay into KrazyBee's official bank account. Never pay a personal UPI handle."
    },
    {
      question: "How long does KrazyBee take to issue the No Dues Certificate (NDC) and update CIBIL?",
      answer: "Under RBI Circular RBI/2023-24/60, KrazyBee must issue the NDC within 30 days. They must also update credit bureaus in 30 days. If KrazyBee delays past 30 days, they must pay you ₹5,000 per day of delay."
    },
    {
      question: "How does settling a KrazyBee loan affect my CIBIL score and credit history?",
      answer: "KrazyBee reports the loan as 'Settled' with a ₹0 balance to CIBIL. Your score may drop 75 to 150 points at first. But this ends default marks and legal notices. You can rebuild your score to 750+ within 18 to 24 months using a secured card."
    },
    {
      question: "Who has the authority at KrazyBee Services to sanction a One-Time Settlement?",
      answer: "Recovery callers have zero power to approve loan discounts. Real waivers of 40% to 60% come from KrazyBee's Credit Committee. Always demand an official stamped sanction letter before paying."
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
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <Smartphone className="w-3.5 h-3.5 text-blue-400" />
            <span>Fintech NBFC Dispute Resolution. KrazyBee Services Private Limited.</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">KrazyBee NBFC Loan Settlement: Legal Defense & OTS</h1>

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
              <span>RBI NBFC Master Direction Compliant.</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate KrazyBee Settlement.</span>
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
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>KrazyBee Case Crux.</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                KrazyBee Services Private Limited is the parent NBFC for KreditBee. Replying to Section 25 PSSA and arbitration notices stops collection calls. It unlocks 40% to 60% OTS waivers with ₹0 No Dues Certificates.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: KrazyBee Services NBFC Loan Settlement.</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Regulated NBFC Entity.</strong> You may borrow via the KreditBee app. KrazyBee Services Private Limited provides the loan. It also issues all legal notices.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Section 25 PSSA &amp; Arbitration Defense.</strong> Section 25 PSSA notices arrive for failed auto-debits. Online arbitration notices may also arrive. A lawyer can answer both notices easily.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Ban on Third-Party Harassment.</strong> Scraping phone contacts breaks RBI rules. Calling relatives or sending WhatsApp threats is illegal under the IT Act.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>40% to 60% Haircut Approval.</strong> When loans pass 90 days unpaid, KrazyBee can settle. The Credit Committee approves 40% to 60% discounts. All penal fees get wiped out.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Corporate Entity Architecture */}
            <section id="krazybee-entity-architecture" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Corporate Entity Architecture.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">Corporate Entity Architecture</h2>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Borrowers must know who owns their debt. Millions borrow through the KreditBee app. But KreditBee is only a software app run by Finnov Private Limited. The actual loan and legal risk belong to <strong>KrazyBee Services Private Limited</strong>. It is an RBI-registered NBFC (Registration No. N-02.00262) based in Bengaluru.
              </p>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Under RBI Digital Lending rules, all norms apply to KrazyBee Services. In some cases, KrazyBee co-lends with other NBFCs. These partners include InCred, Vivriti Capital, Northern Arc, and Piramal Finance. Still, all legal notices and OTS deals come from KrazyBee Services.
              </p>

              <p className="text-base text-slate-700 leading-relaxed mb-6">
                Do not negotiate with app chatbots. Do not deal with recovery tele-callers. These agents have no power to give waivers or issue a No Dues Certificate (NDC). Real debt relief requires direct talks with KrazyBee&apos;s Stressed Assets team.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6">
                <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                  Statutory Entity Profile: KrazyBee Services Private Limited
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div><strong>Legal Name:</strong> KrazyBee Services Private Limited.</div>
                  <div><strong>RBI Registration No:</strong> N-02.00262 (NBFC-ND-SI).</div>
                  <div><strong>Operating Platform:</strong> KreditBee (Finnov Private Limited).</div>
                  <div><strong>Corporate Headquarters:</strong> Bengaluru, Karnataka, India.</div>
                  <div><strong>Regulatory Framework:</strong> RBI Master Directions &amp; Digital Lending Guidelines.</div>
                  <div><strong>Settlement Authority:</strong> Zonal Stressed Assets &amp; Credit Risk Committee.</div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Timeline & NPA Stages */}
            <section id="delinquency-timeline-npa-stages" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; NPA Stages.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">Delinquency Progression &amp; NPA Provisioning</h2>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                When you miss an EMI, KrazyBee tracks the debt across set stages. As the loan grows older, KrazyBee offers bigger principal waivers.
              </p>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                In the first 30 days (SMA-0), you get automated SMS and app alerts. Between 31 and 60 days (SMA-1), agents call your phone. KrazyBee also runs repeated e-NACH auto-debits. This causes heavy bank bounce fees.
              </p>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Between 61 and 90 days (SMA-2), collection pressure rises. At <strong>90 days of non-payment</strong>, the loan turns into a <strong>Non-Performing Asset (NPA)</strong>.
              </p>

              <p className="text-base text-slate-700 leading-relaxed mb-6">
                Under Ind AS 109 rules, an NPA forces KrazyBee to set aside cash reserves. The loan moves to Sub-Standard (90–180 DPD) and Loss Asset (180+ DPD). Provisions rise up to 100%. Holding bad debt hurts their balance sheet. This leads KrazyBee&apos;s Credit Committee to accept compromise settlements with large haircuts.
              </p>

              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Delinquency Stage.</th>
                      <th>Days Past Due (DPD).</th>
                      <th>NBFC Accounting &amp; Provisioning.</th>
                      <th>Recovery Tactics &amp; Settlement Window.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>SMA-0.</strong></td>
                      <td>1 – 30 Days.</td>
                      <td>Stage 1 Performing Asset (0.4%–1% ECL).</td>
                      <td>Automated SMS, push alerts, and gentle calls. Full recovery sought.</td>
                    </tr>
                    <tr>
                      <td><strong>SMA-1.</strong></td>
                      <td>31 – 60 Days.</td>
                      <td>Stage 2 Significant Increase in Credit Risk.</td>
                      <td>Repeated e-NACH sweeps, bounce fees added, and agency allocation.</td>
                    </tr>
                    <tr>
                      <td><strong>SMA-2.</strong></td>
                      <td>61 – 90 Days.</td>
                      <td>Stage 2 Pre-NPA Warning Threshold.</td>
                      <td>Intense telecalling, pre-litigation notices, and restructuring window.</td>
                    </tr>
                    <tr>
                      <td><strong>NPA (Sub-Standard).</strong></td>
                      <td>91 – 180 Days.</td>
                      <td>Stage 3 Default Asset (25%–40% Provisioning).</td>
                      <td>Section 25 PSSA legal notices sent. Optimal for 35% to 45% OTS haircut.</td>
                    </tr>
                    <tr>
                      <td><strong>NPA (Doubtful / Loss).</strong></td>
                      <td>181 – 365+ Days.</td>
                      <td>Stage 3 Loss Asset (70%–100% Full Write-off).</td>
                      <td>Digital arbitration and Lok Adalat notices. Best 50% to 60% OTS haircut window.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Legal Notice Deconstruction & Statutory Protections */}
            <section id="legal-notice-deconstruction-defense" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>3. Legal Notice Deconstruction &amp; Defense.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">KrazyBee Legal Notices &amp; Sec 25 PSSA</h2>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                When an account defaults, KrazyBee sends legal notices. These formal letters can look alarming. But they are standard pre-court notices used to start settlement talks.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                Section 25 Payment and Settlement Systems Act (PSSA), 2007
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                The most common notice falls under <strong>Section 25 of the Payment and Settlement Systems Act, 2007</strong>. When an e-NACH mandate bounces for low balance, Section 25 applies. This works just like Section 138 cheque bounce rules.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                The lender must give you 15 days to reply. A Section 25 notice is not an arrest warrant. It is not a court order. It is a compoundable notice. A lawyer can send a reply showing financial hardship. This stops court complaints and opens One-Time Settlement talks.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#1F5EFF]" />
                Unilateral Digital Arbitration &amp; Online Dispute Resolution (ODR)
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                KrazyBee often sends online arbitration notices. They use private dispute portals. They pick a sole arbitrator in Bengaluru or Delhi without your consent.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                The Supreme Court ruled in <em>Perkins Eastman</em> and <em>TRF Ltd</em> on this issue. One-sided arbitrator choices are illegal. Your lawyer can file objections under Section 12, 13, and 16 of the Arbitration Act. This halts biased proceedings and brings lenders to the negotiation table.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Civil Contract Law vs. Fake Criminal Allegations (Section 420 / 406 IPC)
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-6">
                Recovery callers sometimes threaten FIRs under Section 420 and Section 406 of the IPC (or Sections 316 and 318 BNS). The Supreme Court clarified this in <em>Satishchandra Ratanlal Shah</em> and <em>Dalip Kaur</em>. Loan default is purely a civil dispute. It falls under the Indian Contract Act, 1872. The police cannot step into civil loan recovery.
              </p>
            </section>

            {/* Section 4: NPV Recovery Valuation Model & Haircut Mathematics */}
            <section id="npv-recovery-model-haircut-math" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>4. NPV Recovery Valuation &amp; Haircuts.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">Net Present Value (NPV) Recovery Valuation</h2>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                To get big loan waivers, you must know how lenders value bad loans. KrazyBee evaluates debts using a Net Present Value (NPV) recovery formula.
              </p>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Under RBI Master Directions on Compromise Settlements (2023), lenders weigh cash offers against slow court cases. Civil suits and Order 37 CPC summary claims take years to resolve.
              </p>

              {/* NPV Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>KrazyBee Recovery Valuation Benchmark.</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - 100% Provisioning Burden.
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  C_t is expected recovery. r is the cost of funds. Deductions include court delays, legal fees, agency costs, and locked capital.
                </p>
              </div>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                App loans range from ₹10,000 to ₹4,00,000. Taking thousands of borrowers to court costs too much money. Court fees quickly exceed the total debt.
              </p>

              <p className="text-base text-slate-700 leading-relaxed mb-6">
                Under <strong>RBI Fair Lending rules (2024)</strong>, NBFCs cannot compound penal charges. Our lawyers audit your loan ledger. We wipe out all bounce fees and penal interest. By showing genuine hardship, borrowers can secure 40% to 60% principal waivers from KrazyBee.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-12">
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-slate-900 text-white p-4 md:p-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider block">
                        5. Strategic Settlement Workflow
                      </span>
                      <h3 className="text-sm md:text-base font-black text-white leading-tight">
                        KrazyBee Services NBFC Loan Settlement &amp; Legal Defense Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/krazybee-services-nbfc-loan-settlement.jpg"
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
                      src="/images/infographics/krazybee-services-nbfc-loan-settlement.jpg"
                      alt="KrazyBee Services NBFC Loan Settlement and Legal Notice Defense Blueprint"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Strategy:</strong> Stop collection agent harassment with legal notices. Remove unfair bounce charges. Settle directly with KrazyBee for 40% to 60% waivers.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Halting Digital Recovery Harassment & RBI Protections */}
            <section id="digital-recovery-harassment-defense" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>6. Anti-Harassment Defense &amp; RBI Rules.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">Halting Digital Recovery Harassment</h2>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Defaulting on an app loan often triggers aggressive recovery calls. Borrowers face continuous phone calls, threats to family, and workplace visits. These tactics violate RBI guidelines and Indian law.
              </p>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Under the <strong>RBI Master Directions on Recovery Agents</strong> and <strong>Digital Lending Guidelines (2022)</strong>, clear rules protect borrowers:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Strict Calling Hours (08:00 AM to 07:00 PM Only)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Recovery agents cannot call before 8:00 AM. They cannot call after 7:00 PM. Late-night WhatsApp messages and auto-dialer robocalls are strictly illegal.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Absolute Prohibition of Third-Party Contacting &amp; Data Scraping
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Scraping phone contacts breaks RBI rules. Calling friends or employers violates Section 72A of the IT Act, 2000.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Ban on Physical Intimidation, Abusive Language &amp; Impersonation
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Abusive language is a crime. Threatening physical visits is illegal. Posing as police officers breaks Sections 419, 503, and 506 IPC (Sections 319 and 351 BNS).
                  </p>
                </div>
              </div>

              <p className="text-base text-slate-700 leading-relaxed mb-6">
                When agents break the law, our team acts immediately. First, we send a <strong>Cease-and-Desist Notice</strong> to KrazyBee&apos;s Nodal Officer. Next, we file a complaint on the <strong>RBI CMS Portal</strong>. For severe abuse, we file on the Cyber Crime Portal (cybercrime.gov.in). This stops harassment right away.
              </p>
            </section>

            {/* Section 7: Step-by-Step NBFC Settlement Roadmap */}
            <section id="step-by-step-krazybee-settlement" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>7. Step-by-Step Settlement Roadmap.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">Step-by-Step NBFC Settlement Roadmap with KrazyBee Services</h2>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Follow this six-step roadmap to settle your KrazyBee loan safely:
              </p>

              <div className="space-y-4 my-6">
                <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm">
                  <div className="flex items-center gap-2.5 text-[#1F5EFF] font-bold text-sm mb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs">1</span>
                    <span>Legal Notice Audit &amp; Mandate Revocation.</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We inspect your Section 25 PSSA notice and arbitration summons. We help you cancel the e-NACH mandate at your bank to stop bounce charges.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm">
                  <div className="flex items-center gap-2.5 text-[#1F5EFF] font-bold text-sm mb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs">2</span>
                    <span>Hardship File &amp; Direct Escalation.</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We compile proof of your financial hardship. This includes job loss letters, medical bills, or bank records. We send your file directly to KrazyBee&apos;s Stressed Assets desk in Bengaluru.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm">
                  <div className="flex items-center gap-2.5 text-[#1F5EFF] font-bold text-sm mb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs">3</span>
                    <span>Ledger Audit &amp; Penalty Waiver.</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We examine your full loan ledger. We remove all unlawful bounce fees, penalty interest, and late charges under RBI rules.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm">
                  <div className="flex items-center gap-2.5 text-[#1F5EFF] font-bold text-sm mb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs">4</span>
                    <span>Negotiation &amp; Credit Committee Approval.</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our team negotiates with KrazyBee&apos;s Credit Committee. We use bad-debt rules to secure a 40% to 60% principal waiver.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm">
                  <div className="flex items-center gap-2.5 text-[#1F5EFF] font-bold text-sm mb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs">5</span>
                    <span>Sanction Letter Audit &amp; Verified Payment.</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our lawyers verify the OTS letter on official KrazyBee letterhead. You pay the settlement sum directly to KrazyBee&apos;s verified bank account.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm">
                  <div className="flex items-center gap-2.5 text-[#1F5EFF] font-bold text-sm mb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs">6</span>
                    <span>No Dues Certificate (NDC) &amp; Bureau Closure.</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    KrazyBee must issue your ₹0 No Dues Certificate within 30 days under RBI Circular RBI/2023-24/60. They mark the loan &apos;Settled&apos; on CIBIL.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Forensic Sanction Letter Audit & NDC Verification */}
            <section id="sanction-letter-forensics-verification" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>8. Sanction Letter Audit &amp; NDC Mandate.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">KrazyBee Sanction Audit &amp; NDC Mandate</h2>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Beware of fake settlement offers from collection telecallers. Rogue agents often send fake WhatsApp receipts. They ask for UPI payments. Paying without a verified letter means your money goes to interest. This leaves your loan unpaid.
              </p>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Every genuine KrazyBee OTS letter must meet strict standards:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6 space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                  <span><strong>Official Corporate Letterhead.</strong> The letter must come on official letterhead. It must show CIN U65100KA2016PTC086990. It must display RBI Reg No. N-02.00262.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                  <span><strong>Precise Borrower Identification.</strong> The letter must state your name and PAN. It must show your mobile number and Loan Account Number (LAN).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                  <span><strong>Explicit Financial Breakdown.</strong> The letter must list total dues. It shows the waiver amount. It must give the net payable sum and due dates.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                  <span><strong>Binding Closure &amp; Legal Withdrawal Covenant.</strong> The letter must confirm legal withdrawal. It closes all Section 25 PSSA and arbitration cases. The balance must show ₹0.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                  <span><strong>Official Banking Destination.</strong> Payment must go to KrazyBee&apos;s bank account. You can also use their app gateway. Never pay a personal UPI handle.</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                RBI Circular RBI/2023-24/60: 30-Day NDC Mandate &amp; ₹5,000/Day Penalty
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-6">
                Under <strong>RBI Circular RBI/2023-24/60</strong>, lenders must issue your NDC fast. They get <strong>30 calendar days</strong> from full payment. If KrazyBee delays past 30 days, they must pay you <strong>₹5,000 per day of delay</strong>.
              </p>
            </section>

            {/* Section 9: Credit Score Rehabilitation & Resolution Matrix */}
            <section id="cibil-recovery-credit-rehabilitation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. CIBIL Recovery &amp; Resolution Matrix.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">CIBIL Score Trajectory, Credit Rehabilitation</h2>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                After settlement, KrazyBee reports the loan as <strong>&apos;Settled&apos;</strong>. The balance shows ₹0 on CIBIL and Experian. It also updates on Equifax and CRIF High Mark.
              </p>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                A &apos;Settled&apos; mark may drop your score by 75 to 150 points at first. But this ends default marks and legal notices. Follow this credit repair plan:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                  <div className="font-bold text-slate-900 text-sm mb-1 text-[#1F5EFF]">Months 1 – 3.</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Check ₹0 balance reporting across all four bureaus. Dispute any errors using your stamped NDC.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                  <div className="font-bold text-slate-900 text-sm mb-1 text-[#1F5EFF]">Months 4 – 12.</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Get a secured credit card backed by a Fixed Deposit (FD). Use under 25% of the limit and pay on time every month.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                  <div className="font-bold text-slate-900 text-sm mb-1 text-[#1F5EFF]">Months 13 – 24.</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Keep a clean 12-month on-time payment track record. Your credit score will climb back to 750+.
                  </p>
                </div>
              </div>

              {/* Comparative Matrix Table */}
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#1F5EFF]" />
                Comparative Resolution Matrix: Default vs. Agency vs. Legal OTS
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                The table below compares unmanaged loan default, agency collection pressure, and legal representation via SettleLoans:
              </p>

              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Key Evaluation Parameter.</th>
                      <th>Unilateral Default / Inaction.</th>
                      <th>Dealing with Recovery Telecallers.</th>
                      <th>SettleLoans Legal NBFC Settlement.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Legal Protection.</strong></td>
                      <td>Zero. Risk of court summons. Risk of arbitration awards.</td>
                      <td>Zero. Verbal promises. Fake police threats.</td>
                      <td>Full legal protection. Lawyer replies. Cease-and-desist notices. Full defense.</td>
                    </tr>
                    <tr>
                      <td><strong>Collection Harassment.</strong></td>
                      <td>Daily phone calls. Contact list spam. Office visits.</td>
                      <td>WhatsApp threats. Untraceable calls. Daily stress.</td>
                      <td>Complete stop. Direct escalation to KrazyBee Nodal Officer. Complaint to RBI Ombudsman.</td>
                    </tr>
                    <tr>
                      <td><strong>Penal Charge Waiver.</strong></td>
                      <td>0%. Bounce fees compound. Late interest grows.</td>
                      <td>Minimal. Small verbal discount. High agency fees.</td>
                      <td>100% full waiver. Zero bounce fees. Zero late interest.</td>
                    </tr>
                    <tr>
                      <td><strong>Principal Debt Haircut.</strong></td>
                      <td>None. Total debt keeps rising.</td>
                      <td>0% to 15%. Rarely given in writing.</td>
                      <td>40% to 60% debt waiver. Approved by Credit Committee.</td>
                    </tr>
                    <tr>
                      <td><strong>Sanction Verification.</strong></td>
                      <td>No written letter.</td>
                      <td>Fake WhatsApp receipts. Rogue UPI payment risk.</td>
                      <td>Stamped OTS letter on official KrazyBee letterhead.</td>
                    </tr>
                    <tr>
                      <td><strong>Closure &amp; CIBIL Update.</strong></td>
                      <td>90+ DPD default marks damage your credit score.</td>
                      <td>Leftover dues keep loan active on CIBIL.</td>
                      <td>Clean ₹0 No Dues Certificate within 30 days under RBI rules.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory */}
            <section id="settleloans-advocacy-representation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>10. SettleLoans Legal Advocacy.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">Why Borrowers in Distressed Borrowers Choose SettleLoans</h2>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                SettleLoans is India&apos;s leading legal debt resolution advisory. We protect borrowers against aggressive fintech collection practices. We negotiate institutional settlements.
              </p>

              <p className="text-base text-slate-700 leading-relaxed mb-6">
                We handle all creditor talks. We audit your loan ledger. We reply to Section 25 PSSA and arbitration notices. Our team negotiates directly with KrazyBee in Bengaluru. We ensure complete transparency until your verified ₹0 No Dues Certificate arrives.
              </p>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions (FAQ Accordion) */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>11. Frequently Asked Questions.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">FAQs: KrazyBee NBFC Loan Settlement</h2>

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
                    <strong>Reserve Bank of India (RBI):</strong> Master Direction on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24).
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
                    <strong>RBI Regulatory Framework for Digital Lending:</strong> Guidelines on Digital Lending &amp; Loan Service Providers (LSPs) (2022).
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
                    <strong>RBI Master Circular:</strong> Fair Practices Code for Non-Banking Financial Companies (NBFCs) &amp; Recovery Agent Governance.
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Online Redressal Portal for Complaints on NBFC Harassment &amp; Excessive Penalties.
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
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987 — National Lok Adalat Conciliation Framework.
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
                  href="/app-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  App Loan Settlement Guide.
                </Link>
                <Link
                  href="/ring-app-loan-default-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Ring App Loan Default Settlement.
                </Link>
                <Link
                  href="/stashfin-loan-default-settlement-process"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  StashFin Loan Settlement Process.
                </Link>
                <Link
                  href="/section-25-pssa-notice-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 25 PSSA Notice Defense.
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Letter Format.
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Settlement Percentage Guide.
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank Arbitration Notice Reply.
                </Link>
                <Link
                  href="/recovery-agents-calling-relatives-friends"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Recovery Agents Calling Relatives Rules.
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate (NDC) Guide.
                </Link>
                <Link
                  href="/remove-settled-status-from-cibil"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Remove Settled Status from CIBIL.
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column (Sidebar Cards) */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6">
            {/* Card 1: Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Link href="/authors/ashish-jhangra">
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
                    Lead Banking Legal &amp; Debt Settlement Strategist.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has guided over 1,200 loan settlements. He handles KrazyBee, KreditBee, Ring App, and StashFin. He specializes in Section 25 PSSA defense and borrower legal rights.
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
                <span>KrazyBee Legal Notice Defense.</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Received a KrazyBee Legal Notice?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop recovery calls and repeated e-NACH bounce fees now. Our banking lawyers review your loan stage. We reply to Section 25 PSSA notices. We draft your hardship file. We get you an official KrazyBee settlement letter.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to a Settlement Advocate.
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
                    <strong>Direct NBFC Representation.</strong> We bypass recovery agencies. We deal directly with KrazyBee Stressed Assets Desks.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Protection.</strong> We send legal cease-and-desist notices. This stops contact scraping and WhatsApp threats under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Verification.</strong> We check every settlement letter on official company letterhead before you pay.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC Delivery.</strong> We track your file closely. KrazyBee must issue your No Dues Certificate and update credit bureaus.
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
