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
  AlertCircle,
  HeartPulse,
  DollarSign,
  FileSearch,
  ReceiptText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Unfair Bank Loan Agreement Terms | SettleLoans',
  description: 'Challenging unfair loan terms in bank agreements under Consumer Protection Act Section 2(46). Protect your borrower rights with SettleLoans.',
  keywords: [
    'unfair contract terms in loan agreement consumer protection act',
    'unilateral penalty clauses in loan agreements',
    'unfair contract section 2 46 consumer protection act',
    'declare loan agreement terms null and void',
    'hidden arbitrary rate hikes bank loan agreement',
    'abusive recovery clauses standard loan agreement',
    'challenge bank loan contract terms consumer court dcdrc',
    'standard form contracts adhesion bank loans india',
    'rbi fair practices code unilateral loan terms',
    'one sided arbitration clause bank loan invalid'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/unfair-contract-terms-in-bank-loan-agreements',
  },
  openGraph: {
    title: 'Unfair Contract Terms in Bank Loan Agreements: Consumer Protection Act Section 2(46) Legal Guide',
    description: 'Learn how borrowers can legally challenge one-sided loan covenants, arbitrary interest hikes, and predatory penal charges under Section 2(46) of CPA 2019 to secure fair debt settlement.',
    url: 'https://www.settleloans.in/unfair-contract-terms-in-bank-loan-agreements',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/unfair-contract-terms-in-bank-loan-agreements.jpg',
        width: 1200,
        height: 675,
        alt: 'Unfair Contract Terms in Bank Loan Agreements Consumer Protection Act Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unfair Contract Terms in Bank Loan Agreements: Section 2(46) CPA 2019 Legal Defense',
    description: 'Are your bank loan terms oppressive or one-sided? Discover how Consumer Protection Act Section 2(46) empowers borrowers to declare unfair terms null and void.',
    images: ['https://www.settleloans.in/images/infographics/unfair-contract-terms-in-bank-loan-agreements.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/unfair-contract-terms-in-bank-loan-agreements#webpage",
      "url": "https://www.settleloans.in/unfair-contract-terms-in-bank-loan-agreements",
      "name": "Unfair Contract Terms in Bank Loan Agreements | Consumer Protection Act Sec 2(46)",
      "description": "Subject to unilateral penalty clauses or arbitrary interest hikes? Learn how Section 2(46) of the Consumer Protection Act 2019 declares abusive loan terms null and void.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/unfair-contract-terms-in-bank-loan-agreements#breadcrumb"
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
      "@id": "https://www.settleloans.in/unfair-contract-terms-in-bank-loan-agreements#breadcrumb",
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
          "name": "Unfair Contract Terms in Loan Agreements",
          "item": "https://www.settleloans.in/unfair-contract-terms-in-bank-loan-agreements"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/unfair-contract-terms-in-bank-loan-agreements#article",
      "headline": "Unfair Contract Terms in Bank Loan Agreements: Statutory Legal Challenge Under Consumer Protection Act Section 2(46)",
      "description": "An exhaustive legal treatise examining standard form adhesion loan agreements, unilateral penal clauses, arbitrary rate adjustments, and statutory remedies under Section 2(46) of the Consumer Protection Act 2019 to invalidate unconscionable covenants and enforce equitable debt settlements.",
      "image": "https://www.settleloans.in/images/infographics/unfair-contract-terms-in-bank-loan-agreements.jpg",
      "datePublished": "2026-09-01T09:00:00+05:30",
      "dateModified": "2026-09-01T09:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/unfair-contract-terms-in-bank-loan-agreements#webpage"
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
      "@id": "https://www.settleloans.in/unfair-contract-terms-in-bank-loan-agreements#service",
      "name": "SettleLoans - Unfair Loan Contract Dispute & Statutory Resolution Advisory",
      "description": "Nationwide legal defense, forensic loan agreement audits, and advocate-led consumer dispute advocacy challenging unconscionable banking clauses, usurious penalties, and one-sided adhesion contracts.",
      "url": "https://www.settleloans.in/unfair-contract-terms-in-bank-loan-agreements",
      "image": "https://www.settleloans.in/images/infographics/unfair-contract-terms-in-bank-loan-agreements.jpg",
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
        "reviewCount": "2410",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Siddharth Vardhan"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "A bank raised my personal loan interest rate from 11.5% to 18.2% without clear notice. They also added heavy penalty charges after two missed payments. SettleLoans audited my loan contract. They filed a petition under Section 2(46) of the Consumer Protection Act in the District Consumer Commission. The bank waived all ₹1.8 Lakhs in penalty fees. They also sanctioned a structured One-Time Settlement with a large discount.",
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
            "name": "Meera Rajagopalan"
          },
          "datePublished": "2026-08-02",
          "reviewBody": "An NBFC added an unfair arbitration clause to appoint their own panel advocate. This clause barred my right to go to regular courts. SettleLoans cited Supreme Court rulings on one-sided contracts. They served a formal notice under CPA 2019. The lender stopped recovery action immediately. They settled my ₹6.5 Lakh loan balance for ₹2.4 Lakhs.",
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
            "name": "Rajiv Nambiar"
          },
          "datePublished": "2026-06-25",
          "reviewBody": "Digital loan apps make borrowers click 'I Agree' to long contracts with hidden penalty fees. SettleLoans showed that these digital click-wrap terms violate Section 2(46) of CPA 2019 and RBI Fair Lending Directives. Their legal team protected my rights. They stopped all harassment calls and closed my account on fair terms.",
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
            "name": "Pooja Singhania"
          },
          "datePublished": "2026-08-19",
          "reviewBody": "Ashish Jhangra and the SettleLoans legal team reviewed my business loan sanction letter. They found three unfair terms. This includes extra tenure and high penal fees. Their consumer court filing led the lender to agree to a compromise settlement under Section 89 CPC. This saved me over ₹8 Lakhs.",
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
      "@id": "https://www.settleloans.in/unfair-contract-terms-in-bank-loan-agreements#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What constitutes an 'unfair contract' under Section 2(46) of the Consumer Protection Act, 2019?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 2(46) of CPA 2019, an unfair contract harms consumer rights. It covers high security deposits and heavy penalty fees. It bans refusal of early loan pre-closure. Lenders cannot end contracts without cause. They cannot assign loans without consent. Any term creating unfair burdens is invalid."
          }
        },
        {
          "@type": "Question",
          "name": "Can a borrower challenge standard 'click-wrap' digital loan agreements in consumer court?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Digital standard loan terms give borrowers no bargaining power. These are adhesion contracts. The Supreme Court has ruled that unfair clauses in standard contracts are voidable. Consumer Commissions have clear powers under Section 39 and Section 47. They can declare such terms null and void."
          }
        },
        {
          "@type": "Question",
          "name": "Are banks permitted to capitalize penal interest into the principal balance under RBI guidelines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The RBI Master Direction on Fair Lending Practice bans penal interest. Banks cannot add default fines to principal. They may only charge fair penal fees for actual costs. Compounding penalty charges is strictly illegal."
          }
        },
        {
          "@type": "Question",
          "name": "Which consumer commission has the jurisdiction to declare unfair loan terms null and void?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 47 and Section 58 of CPA 2019, State and National Commissions can void unfair terms. District Consumer Commissions (DCDRC) also act under Section 39. They order banks to remove bad terms, refund illegal fees. And pay damages."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank enforce a unilateral arbitration clause that appoints their own sole arbitrator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The Supreme Court in Perkins Eastman and TRF Ltd ruled on this. A lender cannot pick a sole arbitrator alone. Such one-sided terms are invalid. You can challenge them in High Court under Section 11(6) or Section 14 of the Arbitration Act. You can also file a consumer complaint."
          }
        },
        {
          "@type": "Question",
          "name": "What is the statutory limitation period to challenge unfair terms in a loan agreement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 69 of CPA 2019, you have two years to file a case. The clock starts when the dispute arises. This happens when the bank adds illegal fees, raises rates unfairly, or sends a harsh demand notice."
          }
        },
        {
          "@type": "Question",
          "name": "How does challenging unfair loan clauses facilitate a 50% to 70% One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When you challenge unfair terms in court, banks face high legal risks. If the court voids bad terms, the bank loses claimed fines and interest. To avoid costly court fights, bank committees offer 50% to 70% One-Time Settlement (OTS) waivers."
          }
        },
        {
          "@type": "Question",
          "name": "Are unilateral interest rate hikes in floating-rate loans legally challengeable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Banks can adjust floating rates with external benchmarks like EBLR or MCLR. But RBI rules mandate prior written notice. Lenders must let borrowers switch to fixed rates, extend tenure, or exit penalty-free. Arbitrary rate hikes without KFS disclosure violate consumer law."
          }
        },
        {
          "@type": "Question",
          "name": "Can a borrower file a complaint online against unfair banking contract terms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can file online complaints via the Government portal 'e-Daakhil' at edaakhil.nic.in. Simply upload your loan letter, agreement, bank statements. And legal notices with small fees."
          }
        },
        {
          "@type": "Question",
          "name": "Does signing a loan agreement preclude a borrower from alleging unfair contract terms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The Supreme Court in Brojo Nath Ganguly and Pioneer Urban Land ruled on this. Standard contracts signed under unequal power do not bind consumers to unfair terms. The law protects you even if you signed the agreement."
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
  { id: 'demystifying-unfair-contracts', title: '1. Standard Adhesion Contracts & Banking Asymmetry' },
  { id: 'statutory-framework-cpa-sec-2-46', title: '2. Section 2(46) CPA 2019 & Judicial Precedents' },
  { id: 'anatomy-of-abusive-loan-clauses', title: '3. Anatomy of Oppressive Banking Clauses' },
  { id: 'bank-npa-accounting-npv-dynamics', title: '4. Bank NPA Accounting & Recovery NPV Dynamics' },
  { id: 'unfair-terms-statutory-roadmap', title: '5. Contractual Challenge & Resolution Roadmap' },
  { id: 'forensic-sanction-letter-audit', title: '6. Forensic Sanction Letter & KFS Audit Protocol' },
  { id: 'judicial-invalidation-null-void', title: '7. Declaring Unfair Clauses Null & Void in Court' },
  { id: 'converting-challenge-into-ots', title: '8. Strategic Leverage: Converting Invalidation to OTS' },
  { id: 'contractual-remedy-comparative-matrix', title: '9. Contractual Remedy Comparative Matrix' },
  { id: 'company-defense-section', title: '10. SettleLoans Contractual Defense Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function UnfairContractTermsLoanAgreementsPage() {
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
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <Scale className="w-3.5 h-3.5" />
            <span>Consumer Protection Act, 2019 • Section 2(46) Contractual Challenge</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Unfair Contract Terms in Bank Loan Agreements</h1>

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
              <span>CPA 2019 &amp; RBI Regulatory Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Challenge Unfair Loan Terms</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Evaluate Contractual Clauses &amp; OTS
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Table of Contents + Executive Crux */}
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Standard bank loan forms are adhesion contracts. Borrowers have very little bargaining power. Section 2(46) of the Consumer Protection Act, 2019 helps borrowers challenge these terms. You can void unfair rate hikes, heavy fines. And abusive terms. This gives you strong leverage for a 50% to 70% One-Time Settlement (OTS).
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Contractual Invalidation &amp; Consumer Protection</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Definition of Unfair Contract:</strong> Section 2(46) of CPA 2019 outlaws one-sided terms. It bans heavy fines. It bars sudden loan recalls. It stops secret rate hikes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Adhesion Contracts Are Not Inviolable:</strong> Standard loan forms cannot force unfair terms on you. The Supreme Court protects borrowers with low bargaining power.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict RBI Penal Interest Prohibition:</strong> The RBI Fair Lending rules ban penal interest. Banks cannot add default fees to your principal debt.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Judicial Power to Declare Terms Null &amp. Void:</strong> Consumer Courts can strike down bad terms under Sections 39, 47, and 58. They can order refunds and grant damages.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Leverage into 50%–70% OTS Waivers:</strong> Challenging unfair terms stops compounding fees. It pushes lenders to grant a 50% to 70% OTS debt waiver.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Standard Adhesion Contracts & Banking Asymmetry */}
            <section id="demystifying-unfair-contracts" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Demystifying Standard Form Adhesion Contracts</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers often receive standard loan forms. These are adhesion contracts. Banks draft them for their own safety. Borrowers cannot change individual terms.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers need fast loans. They face large banks with unequal power. On loan apps, users tap &apos;I Agree&apos. to long terms. Most do not see hidden rate hikes or extra fee clauses.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Indian law protects you from bad loan terms. CPA 2019 gives you strong legal tools. You can challenge, void. And strike out unfair terms.
              </p>

              <div className="bg-slate-50 border-l-4 border-[#1F5EFF] p-4 rounded-r-xl my-4">
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Legal Reality of Adhesion Contracts in Banking</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A standard contract is void if it hurts consumers with zero power. Courts can strike out bad terms while keeping your settlement valid.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Framework CPA Sec 2(46) & Precedents */}
            <section id="statutory-framework-cpa-sec-2-46" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Statutory Laws Against Unfair Loan Terms</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before 2019, borrowers used Section 23 of the Indian Contract Act, 1872. This led to slow civil trials. The <strong>Consumer Protection Act, 2019 (CPA 2019)</strong> fixed this via <strong>Section 2(46)</strong>. This section defines an &apos;unfair contract&apos. in clear words.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 2(46), an unfair term changes consumer rights. The law bans six key types of terms:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="blog-content">
                  <thead>
                    <tr>
                      <th>Statutory Sub-Clause.</th>
                      <th>Prohibited Contractual Practice.</th>
                      <th>Manifestation in Bank Loan Contracts.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 2(46)(i).</td>
                      <td>Demanding excessive security deposits for performance.</td>
                      <td>Demanding big cash margins or fixed deposit liens far beyond loan risk.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 2(46)(ii).</td>
                      <td>Imposing disproportionate fines for contract breach.</td>
                      <td>Compounding penal fees, high late charges (24%–36% p.a.). And repeated bounce costs.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 2(46)(iii).</td>
                      <td>Refusing early repayment or imposing unreasonable conditions.</td>
                      <td>Levying illegal foreclosure fees on floating rate retail loans against RBI rules.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 2(46)(iv).</td>
                      <td>Permitting one-sided termination without reasonable cause.</td>
                      <td>Recalling a loan or freezing credit lines without a default or formal notice.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 2(46)(v).</td>
                      <td>Permitting one-sided assignment to consumer&apos;s detriment.</td>
                      <td>Selling overdue loans to recovery agents without prior notice.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 2(46)(vi).</td>
                      <td>Imposing unreasonable charges, duties, or conditions.</td>
                      <td>Hiking interest spreads without notice and enforcing biased arbitration clauses.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Supreme Court protects borrowers from one-sided terms. In <em>Central Inland Water Transport Corporation Ltd. v. Brojo Nath Ganguly (1986) 3 SCC 156</em>, the Court held that unfair terms signed under unequal power are void.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This was reaffirmed in <em>Pioneer Urban Land and Infrastructure Ltd. v. Govindan Raghavan (2019) 5 SCC 725</em>. The Apex Court held that one-sided terms are unfair trade practices. Borrowers are not bound by bad terms.
              </p>
            </section>

            {/* Section 3: Anatomy of Oppressive Banking Clauses */}
            <section id="anatomy-of-abusive-loan-clauses" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Anatomy of Oppressive Banking Clauses</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Personal loans, credit cards. And business credit lines often contain bad terms. Lenders rely on four main types of abusive clauses:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                    <BadgePercent className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Compounding Penal Interest &amp; Fee Pyramids</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Clauses letting banks charge 24%–36% penal fees. Adding fines to principal violates Section 2(46)(ii) and RBI Master Directions.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                    <ReceiptText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Unilateral Benchmark Escalation &amp; Reset Covenants</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Clauses letting banks raise loan spreads without notice. Under Section 2(46)(vi), borrowers must get a fair exit choice.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                    <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Unilateral Sole Arbitrator Appointment Clauses</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Clauses letting banks pick a sole arbitrator in distant cities. The Supreme Court in <em>Perkins Eastman</em> and <em>TRF Limited</em> held these clauses invalid.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                    <ShieldX className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Unilateral Acceleration &amp; Third-Party Disclosure</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Clauses letting banks recall a loan for minor issues. Sharing borrower data with recovery agents also breaches privacy norms.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In April 2024, the RBI issued clear rules to all banks and NBFCs. Lenders cannot treat penal fees as interest rates. They cannot compound default fees. Enforcing old penalty clauses breaches both CPA 2019 and RBI rules.
              </p>
            </section>

            {/* Section 4: Bank NPA Accounting, Unfair Terms Provisioning & Recovery NPV Dynamics */}
            <section id="bank-npa-accounting-npv-dynamics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank NPA Accounting &amp; NPV Dynamics</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks follow RBI rules on loan defaults. They apply the RBI <em>Prudential Norms on IRACP</em>. These rules give borrowers leverage in loan settlement talks.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Loans past 90 days become NPAs. Banks must set aside cash reserves for bad debts:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="blog-content">
                  <thead>
                    <tr>
                      <th>Classification Stage.</th>
                      <th>default Duration.</th>
                      <th>Mandatory RBI Capital Provision.</th>
                      <th>Legal Vulnerability &amp. Settlement Stance.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-1 / SMA-2.</td>
                      <td>31 to 90 Days Overdue.</td>
                      <td>5% General Capital Provisioning.</td>
                      <td>Penalty waiver requests. restructuring available.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA.</td>
                      <td>91 to 365 Days Overdue.</td>
                      <td>25% Unsecured Provisioning Allocation.</td>
                      <td>Bank waives 100% penal interest. 35% OTS ready.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 1 (D1).</td>
                      <td>1 to 2 Years Delinquent.</td>
                      <td>100% Unsecured Capital Provisioning.</td>
                      <td>High urgency. 45%–60% principal discount.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful 2 / Loss Asset.</td>
                      <td>2+ Years / Written-Off.</td>
                      <td>100% Balance Sheet Write-Off.</td>
                      <td>Maximum flexibility. 60%–75% full debt haircut.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you challenge unfair loan terms under Section 2(46), banks check their recovery costs. They face court delays, fee cuts. And high legal bills:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Unfair Contract Risk &amp; Recovery NPV Formula</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Contractual Risk - Penal Deductions - Legal Costs
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  C_t is future cash. r is capital cost. Deductions cover court fee cuts and lost fines.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Fighting loan contracts in consumer court brings public risk. Courts often strike out bad fees. Thus, banks prefer deep OTS discounts for fast cash closure.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="unfair-terms-statutory-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Statutory Contractual Challenge</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This 5-stage roadmap shows how to challenge unfair terms. You can audit clauses, file under CPA Section 2(46). And secure an OTS.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/unfair-contract-terms-in-bank-loan-agreements.jpg"
                  alt="Unfair Contract Terms in Bank Loan Agreements Statutory Challenge and Resolution Roadmap"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Clause Audit &amp; Discovery</span>
                  <span>Audit your loan contract. Spot illegal rate hikes, compound fees, and void clauses.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Section 2(46) Legal Action</span>
                  <span>Issue a legal notice. File a petition in Consumer Court to void unfair terms.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Equitable OTS &amp; Full Discharge</span>
                  <span>Waive all penalties with court leverage. Secure a 50%–70% OTS with a No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Forensic Sanction Letter & Digital Loan Agreement Audit Protocol */}
            <section id="forensic-sanction-letter-audit" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Forensic Sanction Letter</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Audit your loan papers before filing a case:
              </p>

              <div className="space-y-3 my-6">
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1.5">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">1</span>
                    <span>Verification of the Mandatory Key Fact Statement (KFS)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    RBI rules mandate a Key Fact Statement (KFS). It must state the APR and all fees upfront. Without a KFS, hidden fees are void.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1.5">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">2</span>
                    <span>Forensic Dissection of Unilateral Interest Spread Clauses</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    Check if the bank raised interest rates without notice. Look for rate hikes without benchmark changes.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1.5">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">3</span>
                    <span>Isolating Capitalized Penal Interest &amp; Illegal Compounding</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    Check if late fees were added to principal debt. This violates RBI rules and CPA Section 2(46)(ii).
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1.5">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">4</span>
                    <span>Challenging One-Sided Dispute Resolution &amp; Jurisdiction Clauses</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    Check if clauses force arbitration in far cities. Under Section 34 of CPA 2019, you can file cases locally.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Judicial Invalidation & Declaring Clauses Null & Void in Court */}
            <section id="judicial-invalidation-null-void" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Judicial Invalidation</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Consumer Protection Act, 2019 gives courts power to void unfair terms. State and National Commissions act under <strong>Section 47(1)(a)(ii)</strong> and <strong>Section 58(1)(a)(ii)</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                District Consumer Commissions (DCDRC) give swift relief under <strong>Section 39(1)</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Direction to Remove Deficiencies &amp; Abusive Clauses</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 39(1)(b), courts strike out unfair terms. They fix your loan balance.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <ReceiptText className="w-4 h-4 text-blue-500" />
                    <span>Restitution &amp; Complete Refund of Unauthorized Levies</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 39(1)(c), courts order refunds of all illegal fees and extra interest.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <HeartPulse className="w-4 h-4 text-rose-500" />
                    <span>Monetary Compensation for Mental Agony &amp; Distress</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 39(1)(d), courts award payout for mental agony from harsh debt collection.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Gavel className="w-4 h-4 text-amber-500" />
                    <span>Cease-and-Desist Orders Against Unfair Trade Practices</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 39(1)(g), courts stop banks from using unfair recovery tactics.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Converting Invalidation to 50%-70% OTS */}
            <section id="converting-challenge-into-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Strategic Leverage</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Challenging bad contract terms gives you strong leverage. Normal recovery agents demand full payments with heavy fees.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When your lawyer sends a notice under CPA Section 2(46), your file moves to the bank Stressed Assets team. Lenders want to avoid court losses:
              </p>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3 my-6">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>The Dual-Track Strategic Resolution Framework</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Track 1: Active Judicial &amp; Regulatory Pressure</strong>
                    <span>Keep legal pressure in Consumer Court or RBI Ombudsman. Seek stay orders.</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Track 2: Advocate-Led Compromise Negotiation</strong>
                    <span>Negotiate with the bank settlement team. Win a 50% to 70% OTS principal waiver with zero penal charges.</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The bank issues an OTS sanction letter. Pay the agreed sum to get a ₹0 <strong>No Dues Certificate (NDC)</strong>. The bank then updates CIBIL, Experian, CRIF High Mark, and Equifax.
              </p>
            </section>

            {/* Section 9: Contractual Remedy Comparative Matrix */}
            <section id="contractual-remedy-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Contractual Dispute Redressal Comparative Matrix
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers facing unfair terms have several legal paths. The table below compares forums, timelines, costs. And settlement leverage:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="blog-content">
                  <thead>
                    <tr>
                      <th>Redressal Forum / Channel.</th>
                      <th>Governing Statutory Act.</th>
                      <th>Power to Invalidate Clauses.</th>
                      <th>Resolution Timeline.</th>
                      <th>Settlement Leverage.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Consumer Court (DCDRC / SCDRC).</td>
                      <td>Section 2(46), 39, 47 Consumer Protection Act 2019.</td>
                      <td>Full power to declare unfair terms null &amp. void.</td>
                      <td>6 to 18 Months.</td>
                      <td>Very High (Legal risk prompts 50%–70% OTS).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Integrated Ombudsman.</td>
                      <td>Reserve Bank Integrated Ombudsman Scheme, 2021.</td>
                      <td>Orders refund of illegal fees and charges.</td>
                      <td>3 to 6 Months.</td>
                      <td>High (Direct regulatory pressure on bank officers).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Declaratory Suit.</td>
                      <td>Section 34 Specific Relief Act &amp. Sec 23 Contract Act.</td>
                      <td>Can declare terms void through full trial.</td>
                      <td>3 to 7 Years.</td>
                      <td>Moderate (Long court timelines delay settlements).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Commercial Arbitration Defense.</td>
                      <td>Arbitration &amp. Conciliation Act, 1996 (Sec 11/14/34).</td>
                      <td>Can challenge biased sole arbitrator appointments.</td>
                      <td>12 to 24 Months.</td>
                      <td>Moderate (Higher advocate and tribunal costs).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led Direct OTS Compromise.</td>
                      <td>Hardship Representation &amp. Statutory Legal Notice.</td>
                      <td>Uses unfair terms as leverage for major discounts.</td>
                      <td>30 to 60 Days.</td>
                      <td>Maximum (Quickest route to full debt relief and ₹0 NDC).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10 & Company Section */}
            <section id="company-defense-section" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Contractual Defense</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Facing unfair bank loan terms needs expert legal help. At <strong>SettleLoans</strong>, our banking lawyers protect borrowers across India.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                We audit loan contracts and issue legal notices. We file consumer cases and negotiate 50% to 70% OTS waivers. We help you clear your debt with ease.
              </p>

              <CompanySection />
            </section>

            {/* Section 11: FAQ Accordion */}
            <section id="faqs" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Unfair Contract Terms in Loan Agreements</h2>
              <div className="space-y-3">
                {((jsonLdGraph["@graph"].find((item: any) => item["@type"] === "FAQPage") as any)?.mainEntity || []).map((faq: any, index: number) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-2xl bg-white p-4 sm:p-5 transition-all duration-200 open:shadow-sm open:border-blue-200"
                  >
                    <summary className="flex justify-between items-center font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none select-none">
                      <span className="pr-4">{faq.name}</span>
                      <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform duration-200 flex-shrink-0" />
                    </summary>
                    <div className="pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-3">
                      {faq.acceptedAnswer.text}
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
                  href="https://edaakhil.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">e-Daakhil Consumer Court Online Filing Portal (Government of India)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/15256"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Consumer Protection Act, 2019 (Section 2(46) Full Text &amp; Sections)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Fair Lending Practice &amp; Penal Charges in Loan Accounts</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Portal (Complaint Management System)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Landmark Precedents on Unconscionable Adhesion Contracts)</span>
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
                  href="/consumer-court-complaint-against-bank-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Consumer Court Bank Harassment
                </Link>
                <Link
                  href="/loan-penalty-waiver-request"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Penalty Waiver Request
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Arbitration Notice Reply
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Recovery Harassment
                </Link>
                <Link
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Salary Account Freeze Defense
                </Link>
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Default &amp; Jail Rights
                </Link>
                <Link
                  href="/bank-sold-loan-to-arc-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  ARC Debt Settlement Process
                </Link>
                <Link
                  href="/cibil-dispute-wrong-overdue-entry"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Overdue Dispute Guide
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
          <aside className="w-full lg:sticky lg:top-24 space-y-6">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                    AJ
                  </div>
                </Link>
                <div>
                  <Link href="/authors/ashish-jhangra" className="font-bold text-slate-900 text-sm hover:text-[#1F5EFF] transition-colors block">
                    Ashish Jhangra
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior advocate specializing in loan dispute defense, banking litigation, RBI Ombudsman complaints. And debt compromise settlements across India.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Legal Author</span>
                </span>
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-[#1F5EFF] hover:underline font-bold flex items-center gap-0.5"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>Emergency Contractual Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Trapped in Unfair Loan Clauses?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let banks charge unfair compound interest or arbitrary fees. Hire seasoned advocates to challenge bad terms and negotiate a 50%–70% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Contract Audit &amp; Advisory
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>CPA 2019 Section 2(46) Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Legal Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>e-Daakhil Digital Litigation Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Compromise Settlements</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
