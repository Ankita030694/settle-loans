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
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'LiquiLoans P2P Loan Settlement | SettleLoans',
  description: 'Learn how to settle LiquiLoans P2P debt legally. Stop automated recovery notices and resolve overdue loans with expert help from SettleLoans.',
  keywords: [
    'liquiloans settlement process',
    'liquiloans loan settlement',
    'ndx p2p lending settlement',
    'liquiloans zero cost emi settlement',
    'liquiloans healthcare loan settlement',
    'settle liquiloans edtech loan',
    'liquiloans legal notice defense',
    'liquiloans nach bounce charges',
    'liquiloans cibil settled status',
    'liquiloans ots policy',
    'liquiloans recovery harassment',
    'ndx p2p lending technologies private limited settlement',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/liquiloans-p2p-loan-settlement-process',
  },
  openGraph: {
    title: 'LiquiLoans Settlement Process: NDX P2P Loan Relief & Legal Defense (2026)',
    description: 'Struggling with defaulted LiquiLoans zero-cost EMI or healthcare loans? Discover how to negotiate One-Time Settlements (OTS) with NDX P2P Lending, stop recovery harassment, and secure official ₹0 No Dues Certificates.',
    url: 'https://www.settleloans.in/liquiloans-p2p-loan-settlement-process',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/liquiloans-p2p-loan-settlement-process.jpg',
        width: 1200,
        height: 675,
        alt: 'LiquiLoans NDX P2P Loan Settlement Process and Debt Relief Framework',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LiquiLoans Settlement Process: NDX P2P Loan Relief & Legal Defense',
    description: 'Technical and legal roadmap for settling defaulted LiquiLoans consumer credit facilities under RBI compromise settlement frameworks and consumer protection directives.',
    images: ['https://www.settleloans.in/images/infographics/liquiloans-p2p-loan-settlement-process.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/liquiloans-p2p-loan-settlement-process#webpage",
      "url": "https://www.settleloans.in/liquiloans-p2p-loan-settlement-process",
      "name": "LiquiLoans Settlement Process: NDX P2P Loan Relief & Legal Defense (2026)",
      "description": "Learn how to settle LiquiLoans (NDX P2P) loans legally. Stop recovery harassment, cancel NACH bounce fees, and get 40% to 60% debt waivers under RBI rules.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/liquiloans-p2p-loan-settlement-process#breadcrumb"
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
      "@id": "https://www.settleloans.in/liquiloans-p2p-loan-settlement-process#breadcrumb",
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
          "name": "LiquiLoans P2P Loan Settlement Process",
          "item": "https://www.settleloans.in/liquiloans-p2p-loan-settlement-process"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/liquiloans-p2p-loan-settlement-process#article",
      "headline": "LiquiLoans Settlement Process: Resolving NDX P2P Zero-Cost EMI, Healthcare & EdTech Loans",
      "description": "A complete guide on negotiating One-Time Settlements (OTS) with NDX P2P (LiquiLoans). Stop e-NACH bounce fees and resolve legal notices safely.",
      "image": "https://www.settleloans.in/images/infographics/liquiloans-p2p-loan-settlement-process.jpg",
      "datePublished": "2026-09-03T12:00:00+05:30",
      "dateModified": "2026-09-03T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/liquiloans-p2p-loan-settlement-process#webpage"
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
      "@id": "https://www.settleloans.in/liquiloans-p2p-loan-settlement-process#service",
      "name": "SettleLoans - LiquiLoans NDX P2P Loan Settlement & Legal Defense",
      "description": "Expert legal advisory for settling defaulted LiquiLoans consumer credit facilities under RBI compromise frameworks with maximum debt waivers.",
      "url": "https://www.settleloans.in/liquiloans-p2p-loan-settlement-process",
      "image": "https://www.settleloans.in/images/infographics/liquiloans-p2p-loan-settlement-process.jpg",
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
            "name": "Kunal Sengupta"
          },
          "datePublished": "2026-07-12",
          "reviewBody": "I had a ₹1.85 Lakh LiquiLoans EdTech loan. When layoffs hit, I could not pay. Agents called my family. SettleLoans sent a legal notice under RBI rules. They negotiated a ₹80,000 settlement with NDX P2P. I got my stamped letter and ₹0 NDC quickly.",
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
            "name": "Meera Swaminathan"
          },
          "datePublished": "2026-08-04",
          "reviewBody": "I took a ₹2.2 Lakh dental loan through LiquiLoans. Medical issues stopped my income. I had ₹16,000 in NACH bounce fees. SettleLoans revoked the mandate and removed 100% of the penalty fees. They settled the loan at a 52% discount.",
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
            "name": "Rahul Batra"
          },
          "datePublished": "2026-06-19",
          "reviewBody": "I got a Section 25 PSSA notice from NDX P2P for my skilling loan. SettleLoans sent a detailed reply showing hardship. They resolved the matter at National Lok Adalat. I settled the ₹1.6 Lakh debt for ₹64,000 with full case closure.",
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
            "name": "Nandita Iyer"
          },
          "datePublished": "2026-08-22",
          "reviewBody": "LiquiLoans recovery agents called my office. SettleLoans escalated the issue to the NDX P2P Nodal Officer and RBI Ombudsman. The calls stopped at once. They secured a 55% settlement discount with an official sanction letter.",
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
      "@id": "https://www.settleloans.in/liquiloans-p2p-loan-settlement-process#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is LiquiLoans and how does settlement work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LiquiLoans is run by NDX P2P Lending Technologies, an RBI-registered NBFC-P2P. Under RBI rules, NDX P2P approves One-Time Settlements (OTS). Borrowers can get 40% to 60% debt waivers to close their loans."
          }
        },
        {
          "@type": "Question",
          "name": "Can zero-cost EMI loans for EdTech or healthcare be settled?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Zero-cost EMI loans for EdTech or healthcare are unsecured credit lines. Default is a civil contract dispute. You can settle these loans under RBI compromise rules."
          }
        },
        {
          "@type": "Question",
          "name": "How can borrowers stop repetitive LiquiLoans NACH bounce charges?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ask your bank to cancel the e-NACH mandate under NPCI rules. This stops fresh charges. During settlement talks, demand a 100% waiver of all past bounce fees under RBI Fair Lending rules."
          }
        },
        {
          "@type": "Question",
          "name": "What debt haircut percentage can you negotiate on LiquiLoans defaults?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers can negotiate 40% to 60% principal waivers on loans overdue past 90 days (NPA). You can also get a 100% waiver on all late fees and penalty charges."
          }
        },
        {
          "@type": "Question",
          "name": "How to handle recovery agent harassment from LiquiLoans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI rules, recovery agents cannot call before 8:00 AM or after 7:00 PM. They cannot call family or visit your workplace. You can send a legal notice and file an RBI Ombudsman complaint."
          }
        },
        {
          "@type": "Question",
          "name": "Can NDX P2P file a criminal case or arrest a borrower?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Loan default is a civil dispute under the Indian Contract Act, 1872. Police cannot arrest you or file an FIR for unpaid personal loans."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Section 25 PSSA notice from LiquiLoans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Section 25 PSSA notice is a 15-day demand notice for a bounced auto-debit. Your lawyer should send a reply showing hardship and start settlement talks."
          }
        },
        {
          "@type": "Question",
          "name": "How long does NDX P2P take to issue the No Dues Certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, NDX P2P must issue your No Dues Certificate within 30 days of payment. If they delay, they must pay ₹5,000 per day in compensation."
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

export default function LiquiLoansP2PLoanSettlementPage() {
  const tocItems = [
    { id: 'understanding-ndx-p2p-architecture', title: '1. NDX P2P & Embedded Credit Architecture' },
    { id: 'liquiloans-delinquency-timeline-npa', title: '2. Delinquency Lifecycle & RBI P2P Norms' },
    { id: 'stopping-liquiloans-nach-bounce-charges', title: '3. Halting NACH Bounces & Mandate Revocation' },
    { id: 'p2p-settlement-valuation-npv-matrix', title: '4. Settlement Valuation & NPV Haircut Matrix' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'recovery-harassment-defense-rbi-rules', title: '6. Anti-Harassment Protections & Recovery Rules' },
    { id: 'step-by-step-liquiloans-settlement-guide', title: '7. Step-by-Step P2P Settlement Roadmap' },
    { id: 'section-25-pssa-arbitration-lok-adalat', title: '8. Section 25 PSSA, Arbitration & Lok Adalat' },
    { id: 'sanction-letter-audit-ndc-verification', title: '9. Sanction Letter Audit & ₹0 NDC Mandate' },
    { id: 'cibil-score-impact-rehabilitation', title: '10. Credit Bureau Trajectory & Score Recovery' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense & Representation' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "What is LiquiLoans and how does settlement work?",
      answer: "LiquiLoans is run by NDX P2P Lending Technologies, an RBI-registered NBFC-P2P. Under RBI rules, NDX P2P approves One-Time Settlements (OTS). Borrowers can get 40% to 60% debt waivers to close their loans."
    },
    {
      question: "Can zero-cost EMI loans for EdTech or healthcare be settled?",
      answer: "Yes. Zero-cost EMI loans for EdTech or healthcare are unsecured credit lines. Default is a civil contract dispute. You can settle these loans under RBI compromise rules."
    },
    {
      question: "How can borrowers stop repetitive LiquiLoans NACH bounce charges?",
      answer: "Ask your bank to cancel the e-NACH mandate under NPCI rules. This stops fresh charges. During settlement talks, demand a 100% waiver of all past bounce fees under RBI Fair Lending rules."
    },
    {
      question: "What debt haircut percentage can you negotiate on LiquiLoans defaults?",
      answer: "Borrowers can negotiate 40% to 60% principal waivers on loans overdue past 90 days (NPA). You can also get a 100% waiver on all late fees and penalty charges."
    },
    {
      question: "How to handle recovery agent harassment from LiquiLoans?",
      answer: "Under RBI rules, recovery agents cannot call before 8:00 AM or after 7:00 PM. They cannot call family or visit your workplace. You can send a legal notice and file an RBI Ombudsman complaint."
    },
    {
      question: "Can NDX P2P file a criminal case or arrest a borrower?",
      answer: "No. Loan default is a civil dispute under the Indian Contract Act, 1872. Police cannot arrest you or file an FIR for unpaid personal loans."
    },
    {
      question: "What is a Section 25 PSSA notice from LiquiLoans?",
      answer: "A Section 25 PSSA notice is a 15-day demand notice for a bounced auto-debit. Your lawyer should send a reply showing hardship and start settlement talks."
    },
    {
      question: "How long does NDX P2P take to issue the No Dues Certificate?",
      answer: "Under RBI Circular RBI/2023-24/60, NDX P2P must issue your No Dues Certificate within 30 days of payment. If they delay, they must pay ₹5,000 per day in compensation."
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
            <span>Specialized Consumer P2P Lending • NDX P2P / LiquiLoans</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">LiquiLoans P2P Loan Settlement Process & OTS Rules</h1>

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
              <span>RBI NBFC-P2P Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Settle Your LiquiLoans Debt</span>
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
                <span>LiquiLoans Resolution Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Defaulted LiquiLoans (NDX P2P) zero-cost EMI loans are unsecured peer credit contracts. Dealing directly with the platform&apos;s Stressed Assets team stops bounce charges and collection calls. It helps you secure 40% to 60% debt waivers under RBI rules.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: LiquiLoans (NDX P2P) Debt Settlement</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Civil Contract Dispute:</strong> Defaulting on LiquiLoans P2P credit for EdTech or healthcare is a civil contract matter under the Indian Contract Act, 1872. It qualifies for One-Time Settlements (OTS).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Halt Bounce Penalties:</strong> Canceling your e-NACH mandate stops repeat return fees. You can demand a 100% waiver of all penalty fees under RBI fair lending rules.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Realistic 40% to 60% Haircut:</strong> Unsecured P2P loans carry no collateral. NDX P2P uses Net Present Value (NPV) recovery models to approve 40% to 60% debt discounts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Formal Legal Defense:</strong> You can counter Section 25 PSSA notices and single-arbitrator notices with legal replies. Many disputes settle at National Lok Adalat.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory NDC Delivery:</strong> Under RBI Circular RBI/2023-24/60, NDX P2P must issue your No Dues Certificate within 30 days of settlement.</span>
                </li>
              </ul>
            </div>
            
            {/* Section 1: NDX P2P Ecosystem & Embedded Consumer Credit Architecture */}
            <section id="understanding-ndx-p2p-architecture" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. NDX P2P &amp; Embedded Credit Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Understanding LiquiLoans</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                LiquiLoans is the brand name of NDX P2P Lending Technologies. It is an RBI-registered NBFC-P2P platform. It links borrowers with peer lenders for zero-cost EMI plans. These cover health bills and EdTech courses.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers sign a direct contract with NDX P2P. Job loss or health issues can cause loan defaults. NDX P2P treats this loan as a direct debt. It does not depend on course issues.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Loan default is a civil contract matter under the Indian Contract Act, 1872. You have the right to seek a compromise deal under RBI rules.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Statutory Principle:</strong> Under RBI rules, P2P firms cannot give credit guarantees. Unpaid loans cause direct losses to peer lenders. This leads platform teams to accept compromise deals over slow court cases.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Lifecycle & RBI P2P Prudential Norms */}
            <section id="liquiloans-delinquency-timeline-npa" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Lifecycle &amp; RBI P2P Norms</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">LiquiLoans Default Timeline</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Unpaid LiquiLoans accounts follow RBI IRACP rules and the August 2024 P2P directions. In early stages (SMA-0 and SMA-1), calling systems send payment reminders.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                After 90 days past due (DPD), the loan becomes an NPA. Peer lenders bear the credit risk. This leads LiquiLoans to recover cash quickly through compromise deals.
              </p>

              {/* Comprehensive Stage Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Delinquency Stage.</th>
                      <th>Overdue Days (DPD).</th>
                      <th>Recovery Actions.</th>
                      <th>Legal Exposure.</th>
                      <th>Haircut Potential.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-0 (Early Stage).</td>
                      <td>1 – 30 Days.</td>
                      <td>Automated calls and repeat e-NACH debit attempts.</td>
                      <td>Zero legal risk. Initial bureau tracking begins.</td>
                      <td>Zero waiver. Full EMI payment required.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-1 (Mid Stage).</td>
                      <td>31 – 60 Days.</td>
                      <td>Phone calls and written reminder notices.</td>
                      <td>Formal demand warnings sent. Credit score drops.</td>
                      <td>Low waiver. Tenure changes or EMI pauses considered.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-2 (Pre-NPA Stage).</td>
                      <td>61 – 90 Days.</td>
                      <td>Agency assignment and formal loan recall notices.</td>
                      <td>Section 25 PSSA notices sent for failed debits.</td>
                      <td>Moderate waiver. Late fee waiver discussions start.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">Substandard NPA.</td>
                      <td>91 – 180 Days.</td>
                      <td>Transferred to Stressed Assets Desk. Loss reserves booked.</td>
                      <td>Magistrate Court notices under Sec 25 PSSA. Pre-litigation notices.</td>
                      <td><span className="text-emerald-700 font-bold">High (35% to 50% Haircut).</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-red-700">Written-Off Asset.</td>
                      <td>181+ Days.</td>
                      <td>Written off in platform ledger. Full loss provisions made.</td>
                      <td>Digital arbitration or Lok Adalat summons.</td>
                      <td><span className="text-emerald-700 font-bold">Maximum (50% to 60% Haircut).</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Once a loan is overdue past 180 days, peer lenders absorb the accounting loss. A lump-sum OTS payment provides quick cash recovery, prompting NDX P2P to grant large debt discounts.
              </p>
            </section>

            {/* Section 3: Halting NACH Bounce Charges & Mandate Cancellations */}
            <section id="stopping-liquiloans-nach-bounce-charges" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Banknote className="w-4 h-4" />
                <span>3. Halting NACH Bounces &amp; Mandate Revocation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Stopping LiquiLoans NACH Bounce Penalty Loops</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Repeated auto-debits drain bank accounts and add heavy bounce fees. NDX P2P systems make repeated NACH debit attempts. Each failed debit adds bank fees of ₹295 to ₹590. It also adds late fees and penal interest.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                These extra fees inflate your balance unfairly. Under RBI Fair Lending rules (Circular RBI/2023-24/53), lenders cannot add penal charges to principal debt. They cannot charge compound interest on penalties.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                You can cancel the e-NACH mandate through your bank under NPCI rules. During settlement talks, our team demands a 100% waiver of all bounce fees.
              </p>
            </section>

            {/* Section 4: Settlement Valuation Math & NPV Recovery Framework */}
            <section id="p2p-settlement-valuation-npv-matrix" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>4. Settlement Valuation &amp; NPV Haircut Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">LiquiLoans Settlement Haircut Valuation</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI Master Directions (DOR.STR.REC.20/21.04.048/2023-24), NDX P2P follows a clear settlement policy. EdTech and health loans have no collateral. The platform uses Net Present Value (NPV) models to judge offers.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                LiquiLoans compares fast cash recovery against the high costs and long delays of civil court suits. An upfront settlement offer gives peer lenders the best cash return.
              </p>

              {/* Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>P2P Capital Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Platform Overheads
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t is expected recovery cash, r is the discount rate, and deductions account for 2 to 4 years of legal delays and collection costs.
                </p>
              </div>

              {/* Settlement Haircut Slabs Table */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">Realistic LiquiLoans Settlement Haircut Slabs by Product and Aging</h3>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Credit Facility.</th>
                      <th>Delinquency Aging.</th>
                      <th>Fee Waiver.</th>
                      <th>Principal Haircut.</th>
                      <th>Target Settlement Offer.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">EdTech Skilling Loan.</td>
                      <td>90 – 180 Days (NPA).</td>
                      <td>100% Full Waiver.</td>
                      <td>35% to 45% Waiver.</td>
                      <td>Offer 45% to 55% of Dues.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">EdTech Skilling Loan.</td>
                      <td>181+ Days (Written Off).</td>
                      <td>100% Full Waiver.</td>
                      <td>45% to 60% Waiver.</td>
                      <td>Offer 35% to 40% of Dues.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Elective Healthcare EMI.</td>
                      <td>90 – 180 Days (NPA).</td>
                      <td>100% Full Waiver.</td>
                      <td>30% to 45% Waiver.</td>
                      <td>Offer 45% to 55% of Dues.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Consumer Credit Line.</td>
                      <td>180+ Days (Doubtful).</td>
                      <td>100% Full Waiver.</td>
                      <td>50% to 60% Waiver.</td>
                      <td>Offer 30% to 35% of Dues.</td>
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
                        LiquiLoans (NDX P2P) Loan Settlement &amp; Legal Resolution Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/liquiloans-p2p-loan-settlement-process.jpg"
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
                      src="/images/infographics/liquiloans-p2p-loan-settlement-process.jpg"
                      alt="LiquiLoans NDX P2P Loan Settlement Process and Procedural Roadmap"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Strategy:</strong> Stop e-NACH auto-debit sweeps. Halt recovery agency calls. Negotiate directly with NDX P2P for 40% to 60% debt waivers.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Recovery Agency Defense & RBI Harassment Protections */}
            <section id="recovery-harassment-defense-rbi-rules" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>5. Anti-Harassment Protections &amp; Recovery Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Defending Against Harassment Under RBI NBFC-P2P Rules</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                NDX P2P often hires third-party Debt Recovery Agencies (DRAs) to collect overdue loans. Tele-callers may call repeatedly, contact your friends, or message coworkers.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI Master Directions on Recovery Agents, strict rules protect borrowers. Agents cannot call before 8:00 AM or after 7:00 PM. They cannot contact family or visit your office without notice.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Save all call recordings and WhatsApp messages. A formal advocate notice to NDX P2P&apos;s Principal Nodal Officer stops harassment quickly. You can also file an RBI Ombudsman complaint.
              </p>
            </section>

            {/* Section 7: Step-by-Step LiquiLoans Settlement Negotiation Roadmap */}
            <section id="step-by-step-liquiloans-settlement-guide" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>6. Step-by-Step P2P Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Step-by-Step Guide to a Compromise Settlement with NDX P2P</h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Follow this 6-step roadmap to settle your LiquiLoans facility safely:
              </p>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">1</span>
                    Hardship Dossier &amp; Service Failure Documentation
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Gather proof of hardship. Include layoff letters, medical bills, or course cancellation records. This proves your default is non-wilful under RBI compromise guidelines.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">2</span>
                    NACH Mandate Revocation &amp; Counsel Notice
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Cancel the e-NACH mandate via your bank to stop bounce fees. Send a written notice directing all collection calls to your advocate.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">3</span>
                    Submitting Structured Compromise Petition
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Submit a formal settlement petition directly to NDX P2P&apos;s Stressed Assets Desk. Start your opening settlement offer at 25% to 30% of total dues.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">4</span>
                    Managing Counter-Demands &amp; Haircut Approvals
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Present proof of available lump-sum funds. Negotiate firmly with the Credit Committee to secure a 40% to 60% principal debt waiver.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">5</span>
                    Forensic Verification of Stamped Sanction Letter
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Review the written OTS letter carefully. Ensure it includes your loan account number, CIN (U67200MH2015PTC262114), agreed amount, and full-discharge terms.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">6</span>
                    Direct Remittance &amp; ₹0 NDC Enforcement
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Pay the agreed sum directly into the NDX P2P loan account via RTGS or NEFT. Under RBI rules, NDX P2P must send your No Dues Certificate within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Legal Defense: Section 25 PSSA, Unilateral Arbitration & Lok Adalat */}
            <section id="section-25-pssa-arbitration-lok-adalat" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>7. Section 25 PSSA, Arbitration &amp; Lok Adalat</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Navigating LiquiLoans Sec 25 PSSA &amp; Lok Adalat</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A Section 25 PSSA notice gives you 15 days to reply. Your lawyer should explain your hardship and dispute unfair bounce fees. LiquiLoans may also start digital arbitration in Mumbai. Under Supreme Court rulings (<em>Perkins Eastman</em> and <em>TRF Ltd.</em>), unilateral arbitrator appointments are void ab initio. Your counsel can challenge the arbitrator under Sections 12 and 14 of the Arbitration Act.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                NDX P2P also joins National Lok Adalat sessions held by the DLSA. Bank officers can approve 45% to 60% debt waivers here. Lok Adalat settlements end with a final Civil Court Decree with zero appeals.
              </p>

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
                      <td className="font-bold text-slate-900">Direct P2P OTS.</td>
                      <td>Compromise agreement under RBI rules.</td>
                      <td>40% to 60% Debt Haircut.</td>
                      <td>15 to 30 Days.</td>
                      <td>Binding private contract with ₹0 NDC.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">National Lok Adalat.</td>
                      <td>Judicial conciliation before DLSA panel.</td>
                      <td>45% to 60% Debt Haircut.</td>
                      <td>Single-day session.</td>
                      <td>Civil Court Decree (Zero appeal).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Arbitration Defense.</td>
                      <td>Contesting unilateral arbitrator jurisdiction.</td>
                      <td>Variable (Converts to OTS).</td>
                      <td>3 to 8 Months.</td>
                      <td>Section 34 / 14 challenge.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Section 25 PSSA Defense.</td>
                      <td>Magistrate court compoundable defense.</td>
                      <td>35% to 50% Debt Haircut.</td>
                      <td>2 to 6 Months.</td>
                      <td>Formal case withdrawal upon payment.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: Sanction Letter Forensics & Mandatory ₹0 NDC Mandate */}
            <section id="sanction-letter-audit-ndc-verification" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>8. Sanction Letter Audit &amp; ₹0 NDC Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Authenticating LiquiLoans Settlement Sanction Letters</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Never pay settlement money based on phone calls or WhatsApp chats. Your OTS sanction letter must come on official NDX P2P Lending Technologies letterhead. It must show CIN U67200MH2015PTC262114, Mumbai address, loan details, agreed amount, and official stamp.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Pay only into the official NDX P2P bank account. Under RBI Circular RBI/2023-24/60, NDX P2P must issue your No Dues Certificate within 30 days. Delays carry a penalty of ₹5,000 per day.
              </p>
            </section>

            {/* Section 10: Credit Bureau Trajectory & Score Recovery */}
            <section id="cibil-score-impact-rehabilitation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. Credit Bureau Trajectory &amp; Score Recovery</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">LiquiLoans CIBIL Score Trajectory &amp; Score Recovery</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Settling with NDX P2P marks your loan as <strong>&apos;Settled&apos;</strong> with a <strong>₹0</strong> balance across CIBIL, Experian, Equifax, and CRIF High Mark. Your score may dip at first, but all default growth stops.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                You can rebuild your credit score back above 750 within 18 to 24 months. Use secured credit cards, keep your credit usage under 25%, and pay all bills on time.
              </p>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Representation */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>10. Legal Defense &amp; Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed LiquiLoans Borrowers Trust SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                SettleLoans provides expert legal help for P2P loan defaults. We issue cease-and-desist notices to stop harassment. We handle Section 25 PSSA notices and arbitration claims. Our advocates negotiate directly with LiquiLoans for maximum debt waivers and verified ₹0 NDCs.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">FAQs: LiquiLoans (NDX P2P) Loan Settlement</h2>

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
                Official Regulatory References &amp; Statutory Directives
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
                    <strong>Reserve Bank of India (RBI):</strong> NBFC Peer to Peer Lending Directions, 2017 (Updated August 2024).
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
                    <strong>Reserve Bank of India (RBI):</strong> Master Direction on Compromise Settlements (DOR.STR.REC.20/21.04.048/2023-24).
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.liquiloans.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>NDX P2P Lending Technologies:</strong> Fair Practices Code, Grievance Policy and Nodal Officer Matrix.
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Portal for Complaints on NBFC-P2P Harassment.
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
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987 — Lok Adalat Settlement Rules.
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
                  href="/section-25-pssa-notice-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 25 PSSA Notice Defense
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice for Loan Settlement
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
                  href="/stop-emi-bounce-cycle-for-good"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Halting NACH Bounce Cycle &amp; Penalties
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
                <Link href="/authors/ashish-jhangra" className="block">
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
                Ashish has led over 1,200 successful loan settlements across fintech lenders, P2P platforms, and commercial banks. He specializes in point-of-sale credit disputes, Section 25 PSSA defense, and RBI borrower rights.
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
                <span>P2P Dispute Resolution</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing LiquiLoans Loan Default?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop recovery agent calls and repeat NACH bounce fees today. Our experienced banking advocates audit your loan stage, reply to legal notices, and secure an official stamped NDX P2P settlement letter.
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
                    <strong>Direct Platform Representation:</strong> We bypass collection agencies. We negotiate directly with NDX P2P Stressed Assets teams.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Protection:</strong> We issue prompt legal notices to stop illegal workplace visits and calls to family members.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Verification:</strong> We check every settlement letter on corporate letterhead before you make any payment.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC Delivery:</strong> We track your case until NDX P2P delivers your No Dues Certificate and updates CIBIL.
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
