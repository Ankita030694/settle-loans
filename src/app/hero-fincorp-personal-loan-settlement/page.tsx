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
  title: 'Hero FinCorp Loan Settlement Guide | SettleLoans',
  description: 'Learn how to settle Hero FinCorp personal loans legally. Stop agent harassment and negotiate formal OTS debt compromise with SettleLoans.',
  keywords: [
    'hero fincorp loan settlement process',
    'hero fincorp personal loan settlement',
    'hero fincorp loan settlement',
    'how to settle hero fincorp loan',
    'hero fincorp ots policy',
    'hero fincorp recovery agent harassment',
    'hero fincorp nach bounce charges waiver',
    'hero fincorp section 25 pssa notice reply',
    'hero fincorp sarb settlement',
    'hero fincorp no dues certificate after settlement',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/hero-fincorp-personal-loan-settlement',
  },
  openGraph: {
    title: 'Hero Fincorp Loan Settlement: Process, OTS Rules & Legal Defense (2026)',
    description: 'Learn how to settle defaulted Hero Fincorp personal loans. Stop recovery calls, invoke RBI compromise frameworks, and negotiate 40% to 60% debt haircuts.',
    url: 'https://www.settleloans.in/hero-fincorp-personal-loan-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/hero-fincorp-personal-loan-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'Hero Fincorp Loan Settlement Process and OTS Haircut Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hero Fincorp Personal Loan Settlement Process & OTS Guidelines',
    description: 'Legal guide for settling defaulted Hero Fincorp unsecured personal loans under RBI compromise settlement frameworks.',
    images: ['https://www.settleloans.in/images/infographics/hero-fincorp-personal-loan-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/hero-fincorp-personal-loan-settlement#webpage",
      "url": "https://www.settleloans.in/hero-fincorp-personal-loan-settlement",
      "name": "Hero Fincorp Loan Settlement: Process, OTS Rules & Legal Defense (2026)",
      "description": "Comprehensive guide to Hero Fincorp personal loan settlement process under RBI guidelines.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/hero-fincorp-personal-loan-settlement#breadcrumb"
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
      "@id": "https://www.settleloans.in/hero-fincorp-personal-loan-settlement#breadcrumb",
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
          "name": "Hero Fincorp Personal Loan Settlement",
          "item": "https://www.settleloans.in/hero-fincorp-personal-loan-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/hero-fincorp-personal-loan-settlement#article",
      "headline": "Hero Fincorp Personal Loan Settlement: OTS Rules, Legal Defense & Haircut Guide",
      "description": "Strategic manual for negotiating One-Time Settlements with Hero FinCorp Limited and securing No Dues Certificates.",
      "image": "https://www.settleloans.in/images/infographics/hero-fincorp-personal-loan-settlement.jpg",
      "datePublished": "2026-08-28T12:00:00+05:30",
      "dateModified": "2026-08-28T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/hero-fincorp-personal-loan-settlement#webpage"
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
      "@id": "https://www.settleloans.in/hero-fincorp-personal-loan-settlement#service",
      "name": "SettleLoans - Hero FinCorp Loan Settlement & Legal Defense",
      "description": "Legal advocacy for settling defaulted Hero FinCorp personal loans under RBI compromise frameworks.",
      "url": "https://www.settleloans.in/hero-fincorp-personal-loan-settlement",
      "image": "https://www.settleloans.in/images/infographics/hero-fincorp-personal-loan-settlement.jpg",
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
        "reviewCount": "1740",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Rajesh Verma" },
          "datePublished": "2026-07-19",
          "reviewBody": "SettleLoans halted aggressive Hero FinCorp recovery calls, cancelled recurring NACH attempts, and negotiated a direct OTS settlement for ₹2.85 Lakhs against ₹6.8 Lakhs with full No Dues Certificate.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Meenakshi Sundaram" },
          "datePublished": "2026-06-11",
          "reviewBody": "Saved over ₹85,000 in penalty charges and achieved a 55% principal waiver on my Hero FinCorp personal loan through proper SARB escalation.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Anurag Kashyap" },
          "datePublished": "2026-08-04",
          "reviewBody": "Defended against a Section 25 PSSA notice and resolved my loan at National Lok Adalat with a binding 50% waiver and permanent case withdrawal.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Praveen Sharma" },
          "datePublished": "2026-05-30",
          "reviewBody": "Collection agent visits stopped immediately once SettleLoans served a legal cease-and-desist. Settled my ₹4.5 Lakhs loan for ₹1.9 Lakhs on official letterhead.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.settleloans.in/hero-fincorp-personal-loan-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Hero FinCorp loan settlement process and how does it work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Hero FinCorp loan settlement process is a legal debt relief option under RBI rules. If you cannot pay for over 90 days, your loan becomes an NPA. You can submit a hardship letter to Hero FinCorp's SARB team. The lender reviews your financial crisis and offers an OTS. Once you pay the agreed amount, Hero FinCorp closes your loan. You then get an official No Dues Certificate (NDC)."
          }
        },
        {
          "@type": "Question",
          "name": "How can borrowers stop Hero FinCorp NACH bounce fees and repeated debit sweeps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can stop NACH bounce charges easily. Ask your bank to cancel the e-NACH mandate under NPCI rules. Send a hardship notice to Hero FinCorp to pause auto-debits. During OTS talks, your lawyer can get a 100% waiver of all bounce fees under RBI fair lending rules."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver can you negotiate on a Hero FinCorp loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hero FinCorp usually approves 40% to 60% debt waivers on personal loans and credit lines. If your loan is over 180 days past due, waivers can reach 50% to 65%. You also get a full waiver of all penalty charges."
          }
        },
        {
          "@type": "Question",
          "name": "How do you protect against aggressive Hero FinCorp recovery agent harassment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RBI rules protect you from recovery agent harassment. Agents can only call between 8:00 AM and 7:00 PM. They cannot call your family or visit your workplace. If agents break rules, send a legal notice to the Hero FinCorp Nodal Officer. You can also complain to the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "Can Hero FinCorp file a police case or arrest a borrower for loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A loan default is a civil dispute under the Indian Contract Act, 1872. Police cannot arrest you for honest financial troubles. Section 25 PSSA notices for bounced mandates go to court. You can easily resolve these cases through settlement."
          }
        },
        {
          "@type": "Question",
          "name": "What should you do after receiving a Section 25 PSSA notice from Hero FinCorp?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you get a Section 25 PSSA notice, reply within 15 days. Your lawyer can explain your financial hardship and challenge unfair mandate presentations. Propose a formal One-Time Settlement (OTS) to close the case."
          }
        },
        {
          "@type": "Question",
          "name": "How should borrowers handle unilateral arbitration notices from Hero FinCorp?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Supreme Court ruled in Perkins Eastman and TRF Ltd that lenders cannot appoint sole arbitrators on their own. Your lawyer can challenge the arbitrator under Section 12 and Section 14 of the Arbitration Act. This moves the case to an OTS."
          }
        },
        {
          "@type": "Question",
          "name": "Who approves loan settlement within Hero FinCorp?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only Hero FinCorp's Special Asset Resolution Branch (SARB) or Credit Committee can approve an OTS. Call center agents and recovery staff have zero power to give discounts. Always get a formal letter on official company letterhead."
          }
        },
        {
          "@type": "Question",
          "name": "How does settling a Hero FinCorp loan impact your CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hero FinCorp updates your CIBIL record to 'Settled' with a ₹0 balance. Your score may drop by 75 to 150 points initially. But all default interest stops. You can rebuild your credit score back to 750+ within 18 to 24 months."
          }
        },
        {
          "@type": "Question",
          "name": "How long does Hero FinCorp take to issue the No Dues Certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, Hero FinCorp must issue your No Dues Certificate (NDC) within 30 days of full payment. If they delay, they must pay you ₹5,000 for each day of delay."
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

export default function HeroFincorpPersonalLoanSettlementPage() {
  const tocItems = [
    { id: 'understanding-hero-fincorp-defaults', title: '1. NBFC Retail Risk & Recovery Engine' },
    { id: 'hero-fincorp-delinquency-timeline-npa', title: '2. Delinquency Timeline & NPA Stages' },
    { id: 'stopping-hero-fincorp-bounce-charges-nach', title: '3. Halting NACH Bounce Fees & Auto-Debits' },
    { id: 'hero-fincorp-ots-haircut-policy-npv', title: '4. OTS Haircut Policies & NPV Valuation' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'recovery-agent-rules-anti-harassment', title: '6. Recovery Practices & RBI Harassment Defense' },
    { id: 'step-by-step-hero-fincorp-settlement', title: '7. Step-by-Step NBFC Settlement Roadmap' },
    { id: 'section-25-pssa-arbitration-lok-adalat', title: '8. Section 25 Notices, Arbitration & Lok Adalat' },
    { id: 'sanction-letter-audit-ndc-verification', title: '9. Sanction Letter Audit & ₹0 NDC Mandate' },
    { id: 'cibil-impact-credit-rehabilitation', title: '10. CIBIL Score Trajectory & Rehabilitation' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense & Representation' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "What is the Hero FinCorp loan settlement process and how does it work?",
      answer: "The Hero FinCorp loan settlement process is a legal debt relief option under RBI rules. If you cannot pay for over 90 days, your loan becomes an NPA. You can submit a hardship letter to Hero FinCorp's SARB team. The lender reviews your financial crisis and offers an OTS. Once you pay the agreed amount, Hero FinCorp closes your loan. You then get an official No Dues Certificate (NDC)."
    },
    {
      question: "How can borrowers stop Hero FinCorp NACH bounce fees and repeated debit sweeps?",
      answer: "You can stop NACH bounce charges easily. Ask your bank to cancel the e-NACH mandate under NPCI rules. Send a hardship notice to Hero FinCorp to pause auto-debits. During OTS talks, your lawyer can get a 100% waiver of all bounce fees under RBI fair lending rules."
    },
    {
      question: "What percentage of debt waiver can you negotiate on a Hero FinCorp loan?",
      answer: "Hero FinCorp usually approves 40% to 60% debt waivers on personal loans and credit lines. If your loan is over 180 days past due, waivers can reach 50% to 65%. You also get a full waiver of all penalty charges."
    },
    {
      question: "How do you protect against aggressive Hero FinCorp recovery agent harassment?",
      answer: "RBI rules protect you from recovery agent harassment. Agents can only call between 8:00 AM and 7:00 PM. They cannot call your family or visit your workplace. If agents break rules, send a legal notice to the Hero FinCorp Nodal Officer. You can also complain to the RBI Ombudsman."
    },
    {
      question: "Can Hero FinCorp file a police case or arrest a borrower for loan default?",
      answer: "No. A loan default is a civil dispute under the Indian Contract Act, 1872. Police cannot arrest you for honest financial troubles. Section 25 PSSA notices for bounced mandates go to court. You can easily resolve these cases through settlement."
    },
    {
      question: "What should you do after receiving a Section 25 PSSA notice from Hero FinCorp?",
      answer: "If you get a Section 25 PSSA notice, reply within 15 days. Your lawyer can explain your financial hardship and challenge unfair mandate presentations. Propose a formal One-Time Settlement (OTS) to close the case."
    },
    {
      question: "How should borrowers handle unilateral arbitration notices from Hero FinCorp?",
      answer: "The Supreme Court ruled in Perkins Eastman and TRF Ltd that lenders cannot appoint sole arbitrators on their own. Your lawyer can challenge the arbitrator under Section 12 and Section 14 of the Arbitration Act. This moves the case to an OTS."
    },
    {
      question: "Who approves loan settlement within Hero FinCorp?",
      answer: "Only Hero FinCorp's Special Asset Resolution Branch (SARB) or Credit Committee can approve an OTS. Call center agents and recovery staff have zero power to give discounts. Always get a formal letter on official company letterhead."
    },
    {
      question: "How does settling a Hero FinCorp loan impact your CIBIL score?",
      answer: "Hero FinCorp updates your CIBIL record to 'Settled' with a ₹0 balance. Your score may drop by 75 to 150 points initially. But all default interest stops. You can rebuild your credit score back to 750+ within 18 to 24 months."
    },
    {
      question: "How long does Hero FinCorp take to issue the No Dues Certificate?",
      answer: "Under RBI Circular RBI/2023-24/60, Hero FinCorp must issue your No Dues Certificate (NDC) within 30 days of full payment. If they delay, they must pay you ₹5,000 for each day of delay."
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
          margin: 1.5rem 0;
          font-size: 0.9em;
        }
        .blog-content th {
          background: #F8FAFC;
          padding: 0.75rem 0.9rem;
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
          padding: 0.75rem 0.9rem;
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
            <span>Corporate NBFC Dispute Resolution • Hero FinCorp SARB</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Hero FinCorp Personal Loan Settlement & OTS Guide</h1>

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
              <span>RBI NBFC Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Hero Fincorp Settlement</span>
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
                <span>Hero FinCorp Case Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Hero FinCorp loans past 90 days become NPA accounts. Reach out to the SARB team directly. This helps you get 40% to 60% principal waivers. It also waives 100% of all bounce charges.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-5 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm sm:text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Hero FinCorp Personal Loan Settlement</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory OTS Rights:</strong> Loan default is purely a civil matter under the Indian Contract Act. You have the right to seek an OTS under RBI rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Halting Debit Penalties:</strong> Cancel your e-NACH mandate via your bank under NPCI rules. This stops recurring bounce charges immediately.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Realistic 40%–60% Haircut:</strong> Once an account is NPA (90+ DPD), Hero FinCorp approves large principal waivers to recover cash quickly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Defending Legal Notices:</strong> You can contest Section 25 PSSA notices and sole arbitrator notices. Settle them via Lok Adalat orders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory ₹0 NDC Guarantee:</strong> Under RBI rules, Hero FinCorp must deliver your No Dues Certificate within 30 days of full payment.</span>
                </li>
              </ul>
            </div>
            
            {/* Section 1: Corporate NBFC Architecture & Recovery Infrastructure */}
            <section id="understanding-hero-fincorp-defaults" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Corporate NBFC Architecture &amp; Recovery Infrastructure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">Understanding Hero FinCorp&apos;s Retail Credit</h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm sm:text-base">
                Hero FinCorp Limited (HFCL) is a large NBFC regulated by the RBI. It offers personal loans, credit lines, and two-wheeler loans. If you suffer job loss or medical crises, you may miss EMIs. HFCL then starts recovery calls and auto-debit sweeps.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm sm:text-base">
                Each missed EMI brings internal bounce fees and penal interest charges. These extra fees quickly inflate your total balance.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm sm:text-base">
                Defaulting on a personal loan is a civil matter under the Indian Contract Act, 1872. It is not a criminal offense. Under RBI Master Directions, you have the legal right to stop harassment and settle your loan through an OTS.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Statutory Principle:</strong> Under RBI Master Directions, NBFCs must have board-approved compromise policies. Lenders must offer fair debt resolution to honest borrowers.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Timeline & NPA Stages */}
            <section id="hero-fincorp-delinquency-timeline-npa" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; NPA Lifecycle</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">Hero FinCorp Delinquency Lifecycle</h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm sm:text-base">
                Hero FinCorp follows RBI IRACP norms and Ind AS 109 rules to track late payments. Knowing these stages helps you pick the right time to settle your loan.
              </p>

              {/* Comprehensive Stage Table */}
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Loan Stage</th>
                      <th>Overdue Days (DPD)</th>
                      <th>Hero FinCorp Steps</th>
                      <th>Legal Risk</th>
                      <th>Settlement Waiver</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-0</td>
                      <td>1 – 30 Days</td>
                      <td>Automated reminder calls, text alerts, and NACH debits.</td>
                      <td>No legal risk. Initial bureau reporting begins.</td>
                      <td>Low. Full overdue payment demanded.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-1</td>
                      <td>31 – 60 Days</td>
                      <td>Daily calls and collection agency assignment.</td>
                      <td>Warning notices sent. Credit score falls.</td>
                      <td>Low. Loan restructuring may be offered.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-2</td>
                      <td>61 – 90 Days</td>
                      <td>Agent home visits and loan recall notices.</td>
                      <td>Section 25 PSSA or Section 138 notices sent.</td>
                      <td>Fair. Penalty fee waivers become possible.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">NPA (Substandard)</td>
                      <td>91 – 180 Days</td>
                      <td>Case moves to the SARB desk with balance sheet reserves.</td>
                      <td>Magistrate Court summons or conciliation notices.</td>
                      <td><span className="text-emerald-700 font-bold">High. 35% to 50% waiver possible.</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-red-700">Doubtful / Loss</td>
                      <td>181 – 365+ Days</td>
                      <td>Bad debt written off on balance sheet.</td>
                      <td>Arbitration notices or Lok Adalat summons.</td>
                      <td><span className="text-emerald-700 font-bold">Best. 50% to 65% waiver possible.</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-3 text-sm sm:text-base">
                When a loan is in Doubtful status, HFCL sets aside full funds for the loss. A lump-sum OTS gives them fast cash. This makes credit managers approve large principal waivers.
              </p>
            </section>

            {/* Section 3: Halting NACH Bounce Charges & Penal Levies */}
            <section id="stopping-hero-fincorp-bounce-charges-nach" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Banknote className="w-4 h-4" />
                <span>3. Stopping NACH Bounce Charges &amp; Penal Fees</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">Stopping Hero FinCorp Bounce Charges &amp; NACH Hits</h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm sm:text-base">
                Repeated auto-debit hits drain your bank account. HFCL systems present NACH mandates multiple times a month. Each failed debit adds bank fees and internal penalty charges. These fees can total thousands of rupees.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm sm:text-base">
                Under NPCI rules and RBI guidelines, you can ask your bank to cancel the e-NACH mandate. This stops repeat fees right away. In your OTS talks, demand a 100% waiver of all bounce charges and penal interest.
              </p>
            </section>

            {/* Section 4: OTS Haircut Policies & NPV Valuation */}
            <section id="hero-fincorp-ots-haircut-policy-npv" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>4. OTS Haircut Policies &amp; Valuation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">Hero FinCorp One-Time Settlement (OTS)</h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm sm:text-base">
                Under RBI Master Directions (2023), Hero FinCorp reviews OTS offers using Net Present Value (NPV). Since personal loans have no security, HFCL prefers fast cash today over years of slow court battles.
              </p>

              {/* Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-5 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-2.5 my-2 bg-slate-800/80 rounded-xl font-mono text-xs sm:text-sm text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here C_t is expected recovery money, r is the discount rate, and deductions cover court costs and locked NPA funds.
                </p>
              </div>

              {/* Settlement Haircut Slabs Table */}
              <h3 className="text-base font-bold text-slate-900 mb-2">Realistic Hero FinCorp Settlement Haircut Slabs by Aging</h3>
              <div className="overflow-x-auto my-3">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Loan Type</th>
                      <th>Overdue Time</th>
                      <th>Fee Waiver</th>
                      <th>Principal Discount</th>
                      <th>Target Offer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Personal Loan</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% Full Waiver</td>
                      <td>30% – 45% Waiver</td>
                      <td>Offer 40%–50% Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Personal Loan</td>
                      <td>181 – 365+ Days (Doubtful)</td>
                      <td>100% Full Waiver</td>
                      <td>45% – 60% Waiver</td>
                      <td>Offer 35%–40% Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Loyalty Credit Line</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% Full Waiver</td>
                      <td>35% – 50% Waiver</td>
                      <td>Offer 40%–50% Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Loyalty Credit Line</td>
                      <td>180+ Days (Written Off)</td>
                      <td>100% Full Waiver</td>
                      <td>50% – 65% Waiver</td>
                      <td>Offer 30%–35% Dues</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: High-Impact Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-10">
              <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-5 text-slate-800">
                <div className="bg-[#0A2540] text-white py-3 px-5 flex items-center justify-between border-b-2 border-[#1F5EFF]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] flex items-center justify-center text-white text-xs shadow-sm">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block">
                        Legal Defense &amp; Action Blueprint
                      </span>
                      <h3 className="text-xs sm:text-sm font-black text-white leading-tight">
                        Hero FinCorp Personal Loan Settlement &amp; Legal Defense Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/hero-fincorp-personal-loan-settlement.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1F5EFF] hover:text-blue-300 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span className="hidden sm:inline">Open Full Size</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="p-3 bg-slate-50">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img
                      src="/images/infographics/hero-fincorp-personal-loan-settlement.jpg"
                      alt="Hero FinCorp Personal Loan Settlement and OTS Framework Infographic"
                      className="w-full h-auto object-contain max-h-[420px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="bg-slate-100 border-t border-slate-200 py-2.5 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Strategy:</strong> Revoke NACH sweeps. Stop agent harassment. Negotiate directly with Hero FinCorp SARB Desks for 40%–60% debt waivers.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Third-Party Recovery Defense & RBI Rules */}
            {/* Section 6: Third-Party Recovery Defense & RBI Rules */}
            <section id="recovery-agent-rules-anti-harassment" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>5. Recovery Practices &amp; RBI Harassment Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">Defending Against Harassment Under RBI NBFC Directives</h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm sm:text-base">
                Hero FinCorp hires third-party recovery agencies. Agents often push hard to meet monthly targets. But RBI Master Directions set strict rules. Agents can only call between 8:00 AM and 7:00 PM. They cannot call your family or visit your workplace without consent.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm sm:text-base">
                Always save call logs, messages, and recordings. Send a legal notice to Hero FinCorp&apos;s Principal Nodal Officer (PNO). You can also complain to the RBI Ombudsman. This stops harassment and moves talks to an OTS.
              </p>
            </section>

            {/* Section 7: Step-by-Step NBFC Settlement Roadmap */}
            <section id="step-by-step-hero-fincorp-settlement" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>6. Step-by-Step NBFC Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">Step-by-Step Guide to a Compromise Settlement with Hero</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Follow these six simple steps to settle your Hero FinCorp loan:
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">1</span>
                    Hardship Dossier Compilation
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Collect proof of your financial crisis. Gather salary cut slips, medical bills, or job loss letters. This proves non-wilful default under RBI rules.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">2</span>
                    NACH Revocation &amp; Formal Communication
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Ask your bank to cancel automated NACH debits to stop bank charges. Direct all talks to written emails through your lawyer.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">3</span>
                    Direct SARB Petition Submission
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Send a formal OTS letter straight to Hero FinCorp&apos;s SARB team. Cite RBI compromise rules and start with an offer of 25% to 35% of dues.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">4</span>
                    Committee Approvals &amp; Counter-Offers
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Handle counter-offers by showing limited family help. Guide the Credit Committee to agree to a 40% to 60% principal waiver.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">5</span>
                    Forensic Sanction Letter Audit
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Check the settlement letter on official Hero FinCorp letterhead. Confirm loan numbers, exact payment dates, and full waiver terms before paying.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">6</span>
                    Direct Payment &amp; ₹0 NDC Issuance
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Pay the agreed settlement amount directly to the HFCL loan account. Collect your official No Dues Certificate within 30 days under RBI rules.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Section 25 Notices, Arbitration & Lok Adalat */}
            <section id="section-25-pssa-arbitration-lok-adalat" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>7. Section 25 Notices, Arbitration &amp; Lok Adalat</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">Navigating Hero Fincorp Sec 25 PSSA &amp; Lok Adalat</h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm sm:text-base">
                After 60 to 90 days of default, Hero FinCorp may send Section 25 PSSA notices for bounced debits. They may also send arbitration notices. A Section 25 notice is not an arrest warrant. Replying within 15 days with hardship proof protects your rights and starts settlement talks.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm sm:text-base">
                The Supreme Court in <em>Perkins Eastman</em> and <em>TRF Ltd</em> ruled that lenders cannot name sole arbitrators on their own. Your lawyer can challenge the arbitrator under Section 12 and Section 14 of the Arbitration Act. Settling your matter in National Lok Adalat gives you a final Civil Court Decree with zero appeal risk.
              </p>

              <div className="overflow-x-auto my-4">
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
                      <td>Settlement under RBI Master Directions.</td>
                      <td><strong>40% – 60% Waiver</strong></td>
                      <td>15 to 30 Days</td>
                      <td>Private contract with ₹0 NDC.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">National Lok Adalat</td>
                      <td>Court hearing before a sitting judge.</td>
                      <td><strong>45% – 60% Waiver</strong></td>
                      <td>1-day session</td>
                      <td><strong>Civil Court Decree</strong> (No appeal).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Arbitration Defense</td>
                      <td>Contesting unilateral sole arbitrator.</td>
                      <td>Converted to OTS</td>
                      <td>3 to 9 Months</td>
                      <td>Subject to Section 34 challenge.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Section 25 Defense</td>
                      <td>Court defense in compoundable mandate cases.</td>
                      <td><strong>35% – 50% Waiver</strong></td>
                      <td>2 to 6 Months</td>
                      <td>Case dropped on settlement.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: Sanction Letter Audit & ₹0 NDC Mandate */}
            <section id="sanction-letter-audit-ndc-verification" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>8. Sanction Letter Audit &amp; ₹0 NDC Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">Authenticating Hero FinCorp Settlement Letters</h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm sm:text-base">
                Always check your OTS letter before paying. The letter must come on official Hero FinCorp Limited letterhead. It must show CIN: U74899DL1991PLC046774, office address, officer details, and clear loan closure terms.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm sm:text-base">
                Under RBI Circular RBI/2023-24/60, Hero FinCorp must deliver your No Dues Certificate (NDC) within 30 days of full payment. If the lender delays, they must pay you ₹5,000 per day of delay.
              </p>
            </section>

            {/* Section 10: CIBIL Score Trajectory & Rehabilitation */}
            <section id="cibil-impact-credit-rehabilitation" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. CIBIL Score Trajectory &amp; Rehabilitation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">Hero Fincorp Post-Settlement CIBIL Score Recovery</h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm sm:text-base">
                After an OTS, Hero FinCorp marks your loan as <strong>&apos;Settled&apos;</strong> with a <strong>₹0</strong> balance. Your score may drop by 75 to 150 points at first. But all default interest and legal risks stop for good.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm sm:text-base">
                You can rebuild your credit score back to 750+ within 18 to 24 months. Get a secured credit card backed by an FD. Keep credit usage below 25%. Pay all bills and active EMIs on time.
              </p>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Representation */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>10. Legal Defense &amp; Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                Why Distressed Hero FinCorp Borrowers Trust SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                SettleLoans provides legal defense and debt relief for defaulted Hero FinCorp loans. Our advocates stop agent harassment, answer Section 25 notices, and negotiate directly with SARB credit desks for top debt waivers and ₹0 No Dues Certificates.
              </p>

              <div className="my-6">
                <CompanySection />
              </div>
            </section>

            {/* Section 12: Frequently Asked Questions (FAQ Accordion) */}
            <section id="faqs" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>11. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">FAQs: Hero FinCorp Loan Settlement</h2>

              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-slate-300 open:border-[#1F5EFF]/30 open:shadow-md"
                  >
                    <summary className="w-full p-4 md:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-4">
                      <span className="text-base md:text-lg font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-all duration-300">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </summary>
                    <div className="px-4 pb-5 md:px-5 md:pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Regulatory References & Official Sources Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-8">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                Official Regulatory References &amp; Statutory Circulars
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F5EFF] underline">
                    <strong>Reserve Bank of India (RBI):</strong> Master Direction on Compromise Settlements (DOR.STR.REC.20/21.04.048/2023-24)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F5EFF] underline">
                    <strong>RBI Master Circular:</strong> Fair Practices Code for NBFCs &amp; Recovery Agent Guidelines
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a href="https://www.herofincorp.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F5EFF] underline">
                    <strong>Hero FinCorp Limited:</strong> Fair Practices Code &amp; Grievance Redressal Nodal Matrix
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F5EFF] underline">
                    <strong>Reserve Bank Integrated Ombudsman:</strong> Online Complaint Portal (CMS)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F5EFF] underline">
                    <strong>National Legal Services Authority (NALSA):</strong> Lok Adalat Conciliation Framework
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Guides & Resources Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-8">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                Explore Related Banking &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/bank-one-time-settlement-ots-policy" className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition border border-slate-200">
                  Bank OTS Policy
                </Link>
                <Link href="/personal-loan-settlement-letter-format" className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition border border-slate-200">
                  Settlement Letter Format
                </Link>
                <Link href="/personal-loan-settlement-percentage" className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition border border-slate-200">
                  Settlement Percentage
                </Link>
                <Link href="/unsecured-business-loan-settlement" className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition border border-slate-200">
                  Business Loan Settlement
                </Link>
                <Link href="/lok-adalat-notice-for-personal-loan" className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition border border-slate-200">
                  Lok Adalat Notice
                </Link>
                <Link href="/personal-loan-legal-notice" className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition border border-slate-200">
                  Legal Notice Defense
                </Link>
                <Link href="/personal-loan-settlement-cibil-impact" className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition border border-slate-200">
                  CIBIL Impact
                </Link>
                <Link href="/section-138-cheque-bounce-loan-default" className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition border border-slate-200">
                  Section 138 Defense
                </Link>
                <Link href="/recovery-agent-visiting-workplace-office" className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition border border-slate-200">
                  Agent Workplace Rules
                </Link>
                <Link href="/no-dues-certificate-after-loan-settlement" className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition border border-slate-200">
                  No Dues Certificate
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column (Sidebar Cards) */}
          <aside className="w-full sticky top-24 space-y-5">
            {/* Card 1: Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="block">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-sm flex items-center justify-center shadow hover:opacity-90 transition">
                    AJ
                  </div>
                </Link>
                <div>
                  <div className="font-bold text-slate-900 text-sm leading-tight">
                    <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition">
                      Ashish Jhangra
                    </Link>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Lead Banking Legal Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Ashish has led 1,200+ loan settlements across Hero FinCorp, Bajaj Finance, and top banks under RBI Master Directions.
              </p>
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <Link href="/authors/ashish-jhangra" className="text-[#1F5EFF] hover:underline flex items-center gap-1">
                  <span>View Author Profile</span>
                  <span>&rarr;</span>
                </Link>
                <a href="https://www.linkedin.com/company/settleloans" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#1F5EFF]">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Card 2: Emergency Advocate Assistance CTA */}
            <div className="bg-gradient-to-br from-[#1F5EFF] to-blue-700 text-white rounded-2xl p-5 shadow-lg">
              <div className="flex items-center gap-1.5 text-blue-100 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Hero FinCorp Resolution</span>
              </div>
              <div className="text-lg font-black mb-2 leading-tight">
                Facing Hero FinCorp Default?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-4">
                Stop agent calls and repeat NACH bounce fees today. Let our banking advocates draft your OTS letter and get a stamped settlement deal.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition shadow"
              >
                Talk to a Settlement Advocate
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Choose SettleLoans</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct SARB Access:</strong> Direct talks with Hero FinCorp credit teams.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Harassment Shield:</strong> Legal notices to stop illegal calls under RBI rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% Stamped Letters:</strong> Full verification on company letterhead before you pay.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Guaranteed ₹0 NDC:</strong> Complete tracking until you get your No Dues Certificate.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
