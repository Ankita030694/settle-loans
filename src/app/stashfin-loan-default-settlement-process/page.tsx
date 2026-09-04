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
  title: 'Stashfin Loan Default Settlement Guide | SettleLoans',
  description: 'Learn how to settle Stashfin loan defaults legally. Handle Akara Capital NBFC notices and negotiate structured compromise OTS with SettleLoans.',
  keywords: [
    'stashfin loan settlement',
    'stashfin loan default settlement process',
    'akara capital loan settlement',
    'stashfin loan settlement discount percentage',
    'stashfin credit card settlement',
    'how to settle stashfin loan',
    'stashfin legal notice reply',
    'akara capital advisors private limited ots',
    'stashfin recovery harassment complaint',
    'stashfin section 25 pssa notice',
    'stashfin no dues certificate',
    'stashfin loan settlement cibil impact',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/stashfin-loan-default-settlement-process',
  },
  openGraph: {
    title: 'Stashfin Loan Default Settlement Process: Akara Capital OTS & 60% Haircut (2026)',
    description: 'Master the step-by-step roadmap to settle defaulted Stashfin card credit lines and personal loans directly with Akara Capital. Defend legal notices, stop recovery calls, and secure up to 60% principal waivers under RBI compromise guidelines.',
    url: 'https://www.settleloans.in/stashfin-loan-default-settlement-process',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/stashfin-loan-default-settlement-process.jpg',
        width: 1200,
        height: 675,
        alt: 'Stashfin Loan Default Settlement Process and Akara Capital Debt Resolution Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stashfin Loan Default Settlement Process: Akara Capital OTS & 60% Haircut',
    description: 'Technical and legal manual for negotiating One-Time Settlements (OTS) on defaulted Stashfin credit lines and personal loans with Akara Capital Advisors under RBI rules.',
    images: ['https://www.settleloans.in/images/infographics/stashfin-loan-default-settlement-process.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/stashfin-loan-default-settlement-process#webpage",
      "url": "https://www.settleloans.in/stashfin-loan-default-settlement-process",
      "name": "Stashfin Loan Default Settlement Process: Akara Capital OTS & 60% Haircut (2026)",
      "description": "Comprehensive guide to Stashfin loan settlement and Akara Capital debt resolution. Learn how to halt late fee accumulation, stop recovery harassment, defend Section 25 PSSA advocate notices, and negotiate a 50% to 60% principal waiver under RBI rules.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/stashfin-loan-default-settlement-process#breadcrumb"
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
      "@id": "https://www.settleloans.in/stashfin-loan-default-settlement-process#breadcrumb",
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
          "name": "Stashfin Loan Settlement Process",
          "item": "https://www.settleloans.in/stashfin-loan-default-settlement-process"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/stashfin-loan-default-settlement-process#article",
      "headline": "Stashfin Loan Default Settlement Process: Akara Capital OTS, Legal Defense & 60% Haircut Guide",
      "description": "A comprehensive strategic guide on negotiating One-Time Settlements (OTS) with Akara Capital Advisors Private Limited (Stashfin), navigating digital lending regulations, halting NACH bounce fees, and safeguarding against recovery harassment.",
      "image": "https://www.settleloans.in/images/infographics/stashfin-loan-default-settlement-process.jpg",
      "datePublished": "2026-08-29T12:00:00+05:30",
      "dateModified": "2026-08-29T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/stashfin-loan-default-settlement-process#webpage"
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
      "@id": "https://www.settleloans.in/stashfin-loan-default-settlement-process#service",
      "name": "SettleLoans - Stashfin Loan Settlement & Akara Capital Legal Defense",
      "description": "Specialized legal and financial negotiation advisory for settling defaulted Stashfin credit lines, card dues, and personal loans directly with Akara Capital under RBI compromise frameworks with maximum debt waivers and complete harassment protection.",
      "url": "https://www.settleloans.in/stashfin-loan-default-settlement-process",
      "image": "https://www.settleloans.in/images/infographics/stashfin-loan-default-settlement-process.jpg",
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
            "name": "Rahul Verma"
          },
          "datePublished": "2026-06-12",
          "reviewBody": "I had a Stashfin loan of ₹2.8 Lakhs with Akara Capital. My business hit a rough patch. Callers made 20 calls a day. SettleLoans stepped in fast. They sent a legal notice under RBI Digital Lending rules. They settled the loan for ₹1.15 Lakhs with an official OTS letter. I got my ₹0 NDC in 25 days.",
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
            "name": "Kavita Nair"
          },
          "datePublished": "2026-07-08",
          "reviewBody": "My Stashfin loan of ₹1.9 Lakhs had ₹48,000 in late fees after job loss. SettleLoans audited my file. They got 100% of penalty fees waived under RBI Fair Lending rules. They won a 56% principal cut. I paid Akara Capital directly.",
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
            "name": "Siddharth Malhotra"
          },
          "datePublished": "2026-05-19",
          "reviewBody": "I got a Section 25 PSSA notice from Akara Capital for a bounced debit. SettleLoans sent a legal reply showing hardship. They settled the debt for ₹95,000 against a claim of ₹2.4 Lakhs. All court cases were closed.",
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
            "name": "Deepak Joshi"
          },
          "datePublished": "2026-08-04",
          "reviewBody": "Great legal defense against collection callers. SettleLoans escalated the issue to the Akara Capital Nodal Officer. They enforced RBI rules. They helped me settle my Stashfin card with a 54% discount.",
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
      "@id": "https://www.settleloans.in/stashfin-loan-default-settlement-process#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Stashfin loan settlement process and who is the NBFC lender?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stashfin is a digital lending app. Its RBI-registered NBFC is Akara Capital Advisors Private Limited. When a loan passes 90 days default, it becomes an NPA. You can file for hardship with Akara Capital. Under RBI rules, you can get a 50% to 60% principal cut."
          }
        },
        {
          "@type": "Question",
          "name": "Can Stashfin or Akara Capital access my phone contacts or harass family members?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Lenders cannot view your phone contacts under RBI Digital Lending rules (2022). Recovery agents cannot call family or your boss. Illegal calls lead to RBI Ombudsman complaints."
          }
        },
        {
          "@type": "Question",
          "name": "How can borrowers halt repeated Stashfin NACH auto-debit bounce fees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can ask your bank to cancel the e-NACH mandate under NPCI rules. Lawyers secure a 100% waiver of penalty fees under RBI Fair Lending rules during OTS talks."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver can you realistically negotiate with Akara Capital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers often get 40% to 60% principal waivers on bad loans. Overdue loans past 180 days get top discounts. All penal fees are fully cancelled."
          }
        },
        {
          "@type": "Question",
          "name": "Can Stashfin or Akara Capital file a criminal police case or arrest a borrower?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Loan default is a civil dispute under the Indian Contract Act, 1872. The police cannot arrest you for debt default. Section 25 PSSA notices are settled via OTS."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Section 25 PSSA legal notice from Akara Capital and how to respond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Section 25 PSSA notice is a 15-day notice for a bounced debit. It is not an arrest warrant. A lawyer reply explains hardship and proposes an OTS."
          }
        },
        {
          "@type": "Question",
          "name": "How should borrowers handle unilateral arbitration notices from Akara Capital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Supreme Court rules, one-sided arbitrator choices are invalid. A lawyer can challenge the venue under Section 12 and 14 of the Arbitration Act."
          }
        },
        {
          "@type": "Question",
          "name": "Who within Akara Capital has the legal authority to sanction an OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recovery agents and callers cannot approve discounts. Valid OTS approvals come only from Akara Capital's Credit Committee. You must get a stamped sanction letter on letterhead."
          }
        },
        {
          "@type": "Question",
          "name": "How does settling a Stashfin loan impact your CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Akara Capital reports settled loans as 'Settled' with a ₹0 balance. This causes a short-term score drop but stops further default marks. You can rebuild your score past 750 in 18 to 24 months with a secured card."
          }
        },
        {
          "@type": "Question",
          "name": "How long does Akara Capital take to issue the No Dues Certificate (NDC)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, Akara Capital must issue the No Dues Certificate in 30 days. Delays cost the bank ₹5,000 per day paid to you."
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

export default function StashfinLoanDefaultSettlementProcessPage() {
  const tocItems = [
    { id: 'fintech-credit-architecture', title: '1. Fintech Credit Engine & Akara Capital' },
    { id: 'delinquency-timeline-npa', title: '2. Delinquency Timeline & NPA Stages' },
    { id: 'stopping-nach-bounce-charges', title: '3. Halting NACH Auto-Debits & Late Fees' },
    { id: 'akara-capital-ots-haircut-npv', title: '4. OTS Haircut Policies & NPV Valuation' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'recovery-agent-rules-anti-harassment', title: '6. Anti-Harassment Protections & RBI Rules' },
    { id: 'step-by-step-settlement-roadmap', title: '7. Step-by-Step NBFC Settlement Roadmap' },
    { id: 'section-25-pssa-arbitration-lok-adalat', title: '8. Section 25 Notices, Arbitration & Lok Adalat' },
    { id: 'sanction-letter-forensics-ndc', title: '9. Sanction Letter Forensics & ₹0 NDC Mandate' },
    { id: 'cibil-score-rehabilitation', title: '10. CIBIL Trajectory & 18-Month Credit Recovery' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense & Representation' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "What is the Stashfin loan settlement process and who is the NBFC lender?",
      answer: "Stashfin is a digital lending app. Its RBI-registered NBFC is Akara Capital Advisors Private Limited. When a loan passes 90 days default, it becomes an NPA. You can file for hardship with Akara Capital. Under RBI rules, you can get a 50% to 60% principal cut."
    },
    {
      question: "Can Stashfin or Akara Capital access my phone contacts or harass family members?",
      answer: "No. Lenders cannot view your phone contacts under RBI Digital Lending rules (2022). Recovery agents cannot call family or your boss. Illegal calls lead to RBI Ombudsman complaints."
    },
    {
      question: "How can borrowers halt repeated Stashfin NACH auto-debit bounce fees?",
      answer: "You can ask your bank to cancel the e-NACH mandate under NPCI rules. Lawyers secure a 100% waiver of penalty fees under RBI Fair Lending rules during OTS talks."
    },
    {
      question: "What percentage of debt waiver can you realistically negotiate with Akara Capital?",
      answer: "Borrowers often get 40% to 60% principal waivers on bad loans. Overdue loans past 180 days get top discounts. All penal fees are fully cancelled."
    },
    {
      question: "Can Stashfin or Akara Capital file a criminal police case or arrest a borrower?",
      answer: "No. Loan default is a civil dispute under the Indian Contract Act, 1872. The police cannot arrest you for debt default. Section 25 PSSA notices are settled via OTS."
    },
    {
      question: "What is a Section 25 PSSA legal notice from Akara Capital and how to respond?",
      answer: "A Section 25 PSSA notice is a 15-day notice for a bounced debit. It is not an arrest warrant. A lawyer reply explains hardship and proposes an OTS."
    },
    {
      question: "How should borrowers handle unilateral arbitration notices from Akara Capital?",
      answer: "Under Supreme Court rules, one-sided arbitrator choices are invalid. A lawyer can challenge the venue under Section 12 and 14 of the Arbitration Act."
    },
    {
      question: "Who within Akara Capital has the legal authority to sanction an OTS?",
      answer: "Recovery agents and callers cannot approve discounts. Valid OTS approvals come only from Akara Capital's Credit Committee. You must get a stamped sanction letter on letterhead."
    },
    {
      question: "How does settling a Stashfin loan impact your CIBIL score?",
      answer: "Akara Capital reports settled loans as 'Settled' with a ₹0 balance. This causes a short-term score drop but stops further default marks. You can rebuild your score past 750 in 18 to 24 months with a secured card."
    },
    {
      question: "How long does Akara Capital take to issue the No Dues Certificate (NDC)?",
      answer: "Under RBI Circular RBI/2023-24/60, Akara Capital must issue the No Dues Certificate in 30 days. Delays cost the bank ₹5,000 per day paid to you."
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
            <span>Fintech Credit Line &amp; NBFC Dispute Resolution • Akara Capital</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Stashfin Loan Default Settlement & OTS Guide</h1>

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
              <span>RBI Digital Lending &amp; NBFC Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Stashfin Settlement</span>
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
                <span>Stashfin Quick Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Stashfin credit lines run on Akara Capital Advisors Private Limited (an RBI NBFC). After 90 days of default, loans become NPAs. Our lawyers take your case straight to Akara Capital committees. We stop agent harassment, waive penalty fees. And win 50% to 60% principal cuts with an official ₹0 No Dues Certificate.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Stashfin Loan Default Settlement &amp; Akara Capital OTS</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>legal Compromise Rights:</strong> Stashfin runs under Akara Capital Advisors Private Limited. Default is a civil dispute under the Indian Contract Act, 1872. You have a legal right to request an OTS.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Halting e-NACH Bounce Fees:</strong> You can stop NACH auto-debits at your bank under NPCI rules. You can also demand a 100% waiver of penalty fees under RBI Fair Lending rules.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>50% to 60% Principal Haircut:</strong> Accounts in NPA or Doubtful status past 90 to 180 days qualify for large principal waivers under Ind AS 109 rules.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Defending Section 25 Notices &amp. Arbitration:</strong> You can defend Section 25 PSSA notices and unfair single-sided arbitration through advocate replies and Lok Adalat.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory ₹0 NDC Guarantee:</strong> Under RBI Circular RBI/2023-24/60, Akara Capital must issue a stamped ₹0 No Dues Certificate within 30 days of payment.</span>
                </li>
              </ul>
            </div>
            
            {/* Section 1: Fintech Credit Engine & Akara Capital Architecture */}
            <section id="fintech-credit-architecture" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Fintech Credit Engine &amp; Akara Capital Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Understanding Stashfin&apos;s Credit Architecture</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Stashfin offers credit lines, instant cash loans. And card credit. The app is just an interface. The actual lender is its RBI-registered NBFC, <strong>Akara Capital Advisors Private Limited</strong> (CIN: U67190DL2016PTC291583).
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                If you miss an EMI, systems add late fees, bounce charges of ₹500 to ₹1,000. And high interest. But loan default is strictly a civil dispute under the Indian Contract Act, 1872. Under RBI compromise rules, you have the right to stop collection pressure and negotiate a formal OTS directly with Akara Capital.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Regulatory Principle:</strong> Under RBI Master Directions on Compromise Settlements (DOR.STR.REC.20/21.04.048/2023-24), NBFCs must have board-approved policies to settle bad loans fairly.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Stashfin Delinquency Lifecycle</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI rules and Ind AS 109, Akara Capital tracks default across DPD buckets. Timing your settlement with these stages helps you get the highest discount.
              </p>

              {/* Comprehensive Delinquency Stage Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>default Stage.</th>
                      <th>Overdue Days (DPD).</th>
                      <th>Stashfin / Akara Capital Actions.</th>
                      <th>Legal Notice Exposure.</th>
                      <th>Settlement Haircut Potential.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-0 (Early Overdue).</td>
                      <td>1 – 30 Days.</td>
                      <td>Auto IVR calls, SMS alerts. And daily NACH presentation.</td>
                      <td>Payment reminders and initial bureau tracking.</td>
                      <td>Zero (Full overdue payment required).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-1 (Mid default).</td>
                      <td>31 – 60 Days.</td>
                      <td>Collection agency calls and digital demand alerts.</td>
                      <td>Warning notices via email and WhatsApp.</td>
                      <td>Low (Tenure changes or small fee relief).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-2 (Pre-NPA Escalation).</td>
                      <td>61 – 90 Days.</td>
                      <td>Field visits and final loan recall notices.</td>
                      <td>Section 25 PSSA legal demand notices sent.</td>
                      <td>Moderate (Penal fee waivers open for discussion).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">NPA (Substandard Asset).</td>
                      <td>91 – 180 Days.</td>
                      <td>Case moves to Stressed Assets Desk under Ind AS 109.</td>
                      <td>Magistrate Court summons under Sec 25 PSSA.</td>
                      <td><span className="text-emerald-700 font-bold">High (40%–50% Principal Haircut).</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-red-700">Doubtful / Loss Asset.</td>
                      <td>181 – 365+ Days.</td>
                      <td>Full loss provisioned with internal technical write-off.</td>
                      <td>Arbitration notices and Lok Adalat referrals.</td>
                      <td><span className="text-emerald-700 font-bold">Maximum (50%–60% Principal Haircut).</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When an account crosses 180 DPD, Akara Capital writes it off internally. A one-time cash settlement lets the bank recover money quickly. This allows the Credit Committee to grant 50% to 60% principal cuts.
              </p>
            </section>

            {/* Section 3: Stopping NACH Auto-Debits & Late Fees */}
            <section id="stopping-nach-bounce-charges" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Banknote className="w-4 h-4" />
                <span>3. Halting NACH Auto-Debits &amp; Late Fees</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">How to Stop Stashfin NACH Bounce Penalties</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When auto-debits bounce, banks charge ₹250 to ₹500, and Stashfin adds ₹500 to ₹1,000. These fees add up fast. Under RBI Fair Lending Practice rules (2023), lenders cannot add penalty fees to principal or compound them.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                You can instruct your bank to stop the e-NACH mandate under NPCI rules. During settlement talks, lawyers secure a 100% waiver of all late fees and calculate cuts only on core principal.
              </p>
            </section>

            {/* Section 4: Akara Capital OTS Haircut Policy & NPV Valuation */}
            <section id="akara-capital-ots-haircut-npv" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>4. OTS Haircut Policies &amp; NPV Valuation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Akara Capital One-Time Settlement (OTS) Policies</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI rules, Akara Capital uses Net Present Value (NPV) to evaluate settlements. Since Stashfin loans are unsecured, the lender prefers fast cash over years of slow court action.
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
                  Here C_t is the cash recovered over time. The letter r is the discount rate. Deductions remove legal costs and bad debt provisions.
                </p>
              </div>

              {/* Settlement Haircut Slabs Table */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">Realistic Stashfin Settlement Haircut Slabs Across Products &amp; Aging</h3>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Stashfin Facility Type.</th>
                      <th>Aging Bracket.</th>
                      <th>Penal &amp. Bounce Waiver.</th>
                      <th>Principal Haircut Range.</th>
                      <th>Target Settlement Offer.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Revolving Card Credit Line.</td>
                      <td>90 – 180 Days (NPA).</td>
                      <td>100% Full Waiver.</td>
                      <td>35% – 45% Principal Waiver.</td>
                      <td>Offer 40%–50% of Core Principal.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Revolving Card Credit Line.</td>
                      <td>181 – 365+ Days (Doubtful).</td>
                      <td>100% Full Waiver.</td>
                      <td>50% – 60% Principal Waiver.</td>
                      <td>Offer 35%–40% of Core Principal.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Personal Term Loan.</td>
                      <td>90 – 180 Days (NPA).</td>
                      <td>100% Full Waiver.</td>
                      <td>30% – 45% Principal Waiver.</td>
                      <td>Offer 45%–55% of Principal Balance.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Personal Term Loan.</td>
                      <td>181+ Days (Written Off).</td>
                      <td>100% All Penal Charges.</td>
                      <td>50% – 65% Principal Waiver.</td>
                      <td>Offer 30%–35% of Total Claim.</td>
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
                        Stashfin Loan Default Settlement &amp; Akara Capital OTS Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/stashfin-loan-default-settlement-process.jpg"
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
                      src="/images/infographics/stashfin-loan-default-settlement-process.jpg"
                      alt="Stashfin Loan Default Settlement Process and Akara Capital Resolution Blueprint"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Action:</strong> Revoke NACH auto-debits. Stop collection pressure under RBI rules. Settle directly with Akara Capital for 50% to 60% debt waivers.</span>
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Defending Against Harassment Under RBI Digital Lending Rules</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI Digital Lending Rules (RBI/2022-23/111) and NBFC Fair Practices Code, borrowers have clear protections: (a) Agents may only call between 8 AM and 7 PM. (b) Accessing your phone contacts or photos is illegal. (c) Calling non-guarantor family or your boss is barred. (d) Abusive language or visits to your workplace are unlawful.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Save all call recordings and WhatsApp chats. Send a legal notice to Akara Capital&apos;s Principal Nodal Officer (PNO) and report violations on the RBI CMS portal to stop harassment fast.
              </p>
            </section>

            {/* Section 7: Step-by-Step NBFC Settlement Roadmap */}
            <section id="step-by-step-settlement-roadmap" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>6. Step-by-Step NBFC Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Step-by-Step Stashfin Settlement Roadmap</h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Follow these six steps to settle your Stashfin loan with Akara Capital:
              </p>

              <div className="space-y-6">
                {/* Phase 1 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">1</span>
                    Hardship Dossier Compilation
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Gather proof of financial loss. Collect medical bills, job layoff letters, or business loss records to prove non-wilful default.
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">2</span>
                    NACH Revocation &amp; Formal Communications
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Ask your bank to stop the e-NACH auto-debit mandate to avoid bounce fees. Route all calls to your lawyer to keep a clean record.
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">3</span>
                    Submitting Hardship Petition to Stressed Assets Desk
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Send a formal hardship petition to Akara Capital&apos;s Stressed Assets team. Start your opening offer at 25% to 30% of total dues.
                  </p>
                </div>

                {/* Phase 4 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">4</span>
                    Structured Counter-Negotiations &amp; Committee Approval
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Counter low discount offers by showing proof of limited funds. Guide the committee toward a 50% to 60% principal waiver.
                  </p>
                </div>

                {/* Phase 5 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">5</span>
                    Forensic Audit of the Stamped OTS Sanction Letter
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Check that Akara Capital issues an official sanction letter on company letterhead with full waiver terms and payment dates.
                  </p>
                </div>

                {/* Phase 6 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">6</span>
                    Direct Remittance &amp; ₹0 NDC Delivery
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Pay the agreed sum directly to your Akara Capital loan account via RTGS or NEFT. Under RBI Circular RBI/2023-24/60, get your ₹0 No Dues Certificate within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Section 25 Notices, Arbitration & Lok Adalat */}
            <section id="section-25-pssa-arbitration-lok-adalat" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>7. Section 25 Notices, Arbitration &amp; Lok Adalat</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Navigating Stashfin Sec 25 PSSA &amp; Lok Adalat</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A Section 25 PSSA notice for a bounced debit is a formal legal step before court cases. It is not an arrest warrant. A lawyer reply within 15 days explains your hardship and opens settlement talks.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under Supreme Court rulings (<em>Perkins Eastman</em> and <em>TRF Ltd.</em>), single-sided arbitrator appointments are invalid. You can challenge them under Section 12 and 14 of the Arbitration Act. National Lok Adalats also grant 50% to 60% haircuts with the power of a Civil Court Decree.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Resolution Avenue.</th>
                      <th>Legal Mechanism.</th>
                      <th>Haircut Potential.</th>
                      <th>Typical Timeline.</th>
                      <th>Judicial Finality.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Direct Akara Capital OTS.</td>
                      <td>Compromise terms under RBI Master Directions.</td>
                      <td><strong>45% – 60% Debt Haircut</strong></td>
                      <td>15 to 30 Days.</td>
                      <td>Binding private contract with ₹0 NDC.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">National Lok Adalat.</td>
                      <td>Judicial bench settlement before a judge.</td>
                      <td><strong>50% – 60% Debt Haircut</strong></td>
                      <td>Single-day session.</td>
                      <td><strong>Civil Court Decree</strong> (Zero appeal).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Arbitration Defense.</td>
                      <td>Contesting single-sided arbitration venues.</td>
                      <td>Variable (Converts to OTS).</td>
                      <td>3 to 9 Months.</td>
                      <td>Subject to Section 34 challenge.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Section 25 PSSA Defense.</td>
                      <td>Magistrate court compoundable case defense.</td>
                      <td><strong>40% – 55% Debt Haircut</strong></td>
                      <td>2 to 6 Months.</td>
                      <td>Formal withdrawal and case disposal.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: Sanction Letter Forensics & ₹0 NDC Mandate */}
            <section id="sanction-letter-forensics-ndc" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>8. Sanction Letter Forensics &amp; ₹0 NDC Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Authenticating Stashfin Settlement Letters</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Never pay on oral promises or WhatsApp messages. Ensure the OTS letter is on Akara Capital Advisors Private Limited letterhead. It must show its CIN (U67190DL2016PTC291583), registered office. And authorized signature.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI Circular RBI/2023-24/60, Akara Capital must issue your ₹0 No Dues Certificate within 30 days of payment. Any delay costs the NBFC ₹5,000 per day paid to you.
              </p>
            </section>

            {/* Section 10: CIBIL Score Trajectory & Rehabilitation */}
            <section id="cibil-score-rehabilitation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. CIBIL Trajectory &amp; 18-Month Credit Recovery</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Stashfin Post-Settlement CIBIL Score Recovery</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Settling a Stashfin loan updates credit records to <strong>&apos;Settled&apos;</strong> with a <strong>₹0 balance</strong>. This causes a short-term score drop of 70 to 130 points. But it stops monthly default marks.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                You can rebuild your credit score past 750 in 18 to 24 months. Use a secured credit card, keep card usage under 25%. And pay every bill on time.
              </p>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Representation */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>10. SettleLoans Legal Defense &amp; Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed Stashfin Borrowers Trust SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                SettleLoans stops collection harassment fast. We reply to Section 25 PSSA notices, fight one-sided arbitration. And negotiate directly with Akara Capital for top waivers and ₹0 NDCs.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">FAQs: Stashfin Loan Default Settlement</h2>

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
                    <strong>RBI Guidelines on Digital Lending:</strong> Guidelines on Default Loss Guarantee &amp. Fair Lending Practices for Regulated Digital Lending Apps (RBI/2022-23/111)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.stashfin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Akara Capital Advisors Private Limited / Stashfin:</strong> Customer Grievance Redressal Policy, Fair Practices Code &amp. Principal Nodal Officer Matrix
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Online Portal for Complaints on Fintech harassment, illegal Auto-Debits &amp. NDC Delays
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
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987. National Lok Adalat settlement Framework
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
                  href="/cashe-loan-settlement-process"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  CASHe App Loan Settlement
                </Link>
                <Link
                  href="/dmi-finance-loan-settlement-process"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  DMI Finance Loan Settlement
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
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Percentage
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
                    Lead Banking Legal &amp. Debt Settlement Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has led 1,200+ successful debt settlements across Stashfin (Akara Capital), CASHe, DMI Finance, Bajaj. And major banks. He specializes in fintech rules and borrower defense.
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
                Facing Stashfin Loan Default?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop collection calls and NACH bounce fees right away. Our banking lawyers audit your loan, defend legal notices. And secure an official stamped Akara Capital OTS letter.
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
                    <strong>Direct NBFC Defense:</strong> We deal directly with Akara Capital committees, bypassing third-party agencies.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-harassment Action:</strong> We send legal notices to stop illegal calls and contact-list harassment under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Stamped Letter Check:</strong> Every settlement is verified on official Akara Capital letterhead before you pay.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC:</strong> Full legal support until your ₹0 No Dues Certificate is issued and CIBIL is updated.
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
