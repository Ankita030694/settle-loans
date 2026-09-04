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
  Briefcase,
  Layers,
  ArrowUpRight,
  TrendingDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Guarantee Invocation Rules | SettleLoans',
  description: 'Personal guarantee invoked for business loan default? Understand Section 128 Indian Contract Act defenses and settle debt with SettleLoans.',
  keywords: [
    'personal guarantee invocation for business loan settlement',
    'personal guarantee business loan default',
    'section 128 indian contract act personal guarantee',
    'discharge of surety section 133 contract act',
    'promoter personal guarantee settlement',
    'director personal guarantee release bank',
    'bank invoked personal guarantee what to do',
    'msme loan default personal guarantee defense',
    'drt personal guarantee recovery stay',
    'ots for personal guarantor business loan',
    'personal insolvency ibc personal guarantee settlement',
    'commercial loan default personal assets protection'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-guarantee-invocation-loan-settlement',
  },
  openGraph: {
    title: 'Personal Guarantee Invocation for Business Loan Settlement: Legal Defenses & Promoter OTS Blueprint',
    description: 'Master the legal defense against bank personal guarantee invocation. Understand Section 128 co-extensive liability, Section 133–141 surety discharge, DRT litigation defense, and advocate-led One-Time Settlements (OTS).',
    url: 'https://www.settleloans.in/personal-guarantee-invocation-loan-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-guarantee-invocation-loan-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'Personal Guarantee Invocation and Business Loan Settlement Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Guarantee Invocation for Business Loan Settlement: Legal Defenses & Promoter OTS',
    description: 'Bank invoked your personal guarantee for a defaulted corporate or MSME loan? Learn how to defend personal assets, challenge illegal notices, and negotiate an advocate-led OTS settlement.',
    images: ['https://www.settleloans.in/images/infographics/personal-guarantee-invocation-loan-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-guarantee-invocation-loan-settlement#webpage",
      "url": "https://www.settleloans.in/personal-guarantee-invocation-loan-settlement",
      "name": "Personal Guarantee Invocation for Business Loan Settlement: Legal Defenses & Promoter OTS Guide (2026)",
      "description": "Facing personal guarantee invocation for a defaulted business loan? Learn Section 128 Indian Contract Act defenses, Section 133-139 surety discharge rules, DRT & IBC strategies, and advocate-led OTS blueprints to protect promoter personal assets.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-guarantee-invocation-loan-settlement#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-guarantee-invocation-loan-settlement#breadcrumb",
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
          "name": "Personal Guarantee Invocation Settlement Guide",
          "item": "https://www.settleloans.in/personal-guarantee-invocation-loan-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-guarantee-invocation-loan-settlement#article",
      "headline": "Personal Guarantee Invocation for Business Loan Settlement: Legal Defenses, Section 128 Contract Act & Promoter OTS Blueprint",
      "description": "An exhaustive legal and financial analysis of personal guarantee invocation in India. Explains co-extensive liability under Section 128 of the Indian Contract Act, statutory surety discharge mechanisms under Sections 133 to 141, DRT Section 19 defense, Lalit Kumar Jain Supreme Court precedent under IBC, and strategic advocate negotiations to secure a binding One-Time Settlement (OTS) with full release of personal assets.",
      "image": "https://www.settleloans.in/images/infographics/personal-guarantee-invocation-loan-settlement.jpg",
      "datePublished": "2026-08-28T10:00:00+05:30",
      "dateModified": "2026-08-28T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-guarantee-invocation-loan-settlement#webpage"
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
      "@id": "https://www.settleloans.in/personal-guarantee-invocation-loan-settlement#service",
      "name": "SettleLoans - Commercial Debt & Personal Guarantee Defense Advisory",
      "description": "Specialized legal defense and financial negotiation advisory for company directors, MSME founders, and individual guarantors facing personal guarantee invocation, DRT recovery proceedings, and IBC personal insolvency claims.",
      "url": "https://www.settleloans.in/personal-guarantee-invocation-loan-settlement",
      "image": "https://www.settleloans.in/images/infographics/personal-guarantee-invocation-loan-settlement.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹₹",
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
        "reviewCount": "1890",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rajiv Singhania"
          },
          "datePublished": "2026-06-15",
          "reviewBody": "Our firm had a cash crunch on a ₹6.8 Crore loan. The bank invoked my guarantee under Section 128. They filed in DRT Delhi. SettleLoans audited the ledger. They proved unapproved interest hikes under Section 133. They negotiated a 54% OTS. My home deed was returned.",
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
            "name": "Deepak Mehta"
          },
          "datePublished": "2026-07-20",
          "reviewBody": "A bank invoked my guarantee for ₹2.4 Crores after a buyer failed. SettleLoans advocates represented me in DRT. They stopped property attachment. They proved genuine business failure. They closed the loan with an OTS of ₹1.1 Crore and got my NDC.",
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
            "name": "Ananya Kulkarni"
          },
          "datePublished": "2026-05-18",
          "reviewBody": "A lender filed Section 95 IBC actions against me for ₹4.2 Crores. SettleLoans secured a stay under Section 96. They disputed bank sums. They negotiated a compromise in NCLT. This cleared my debt without bankruptcy.",
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
            "name": "Vikramaditya Rao"
          },
          "datePublished": "2026-08-04",
          "reviewBody": "Lenders invoked guarantees of ₹11.5 Crores on two directors. SettleLoans led our defense. They proved lost security under Section 139. They secured a compromise and protected our property.",
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
      "@id": "https://www.settleloans.in/personal-guarantee-invocation-loan-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is personal guarantee invocation for a business loan in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Personal guarantee invocation is a formal legal demand under Section 128 of the Indian Contract Act, 1872. It asks a guarantor to pay company debt. Guarantor liability is co-extensive with the borrower. The bank can pursue personal assets directly."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank seize a promoter's personal assets when a company defaults?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A bank cannot seize assets overnight. It must follow legal steps. It sends a notice under Section 128. Above ₹20 Lakhs, it files in DRT under Section 19. Or it files in NCLT under Section 95. Promoters can fight back using defenses under Sections 133 to 141."
          }
        },
        {
          "@type": "Question",
          "name": "What are the legal defenses available to a personal guarantor under the Indian Contract Act?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Guarantors have strong statutory defenses. Section 133 discharges liability if loan terms change without consent. Section 134 discharges the surety if the debtor is released. Section 135 gives discharge if the bank grants extra time. Section 139 applies if the lender harms legal remedies. Section 141 gives discharge if security is lost."
          }
        },
        {
          "@type": "Question",
          "name": "How does the Supreme Court ruling in Lalit Kumar Jain v. Union of India affect personal guarantors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Lalit Kumar Jain v. Union of India (2021), the Supreme Court ruled on guarantees. It held that corporate CIRP does not clear personal guarantors. Lenders can still sue under Section 95 IBC or in DRT. Negotiating an OTS is vital to secure an individual release."
          }
        },
        {
          "@type": "Question",
          "name": "Can an invoked personal guarantee be settled through a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Banks settle guarantees through One-Time Settlement (OTS) under RBI rules. DRT and NCLT cases take 5 to 8 years. Because recovery is slow, lenders accept settlement deals with 45% to 65% debt waivers."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between Corporate Moratorium (Section 14) and Personal Moratorium (Section 96)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 14 IBC protects only company assets. But Section 96 IBC gives an interim stay for personal guarantors. It pauses all ongoing lawsuits and debt collection against personal assets."
          }
        },
        {
          "@type": "Question",
          "name": "What essential clauses must be included in a personal guarantee OTS Sanction Letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A valid OTS letter must have key terms: (1) Full discharge of the guarantor. (2) Return of original title deeds and guarantee papers. (3) Withdrawal of DRT Section 19, NCLT Section 95, and Section 138 NI Act cases. (4) Total waiver of penal interest. (5) A ban on selling debt to ARCs."
          }
        },
        {
          "@type": "Question",
          "name": "How does personal guarantee settlement impact commercial and individual CIBIL scores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After full OTS payment, the bank marks the account as 'Settled' with a ₹0 balance in CIBIL. Your score drops briefly by 75 to 150 points. But it clears court tags and lets you rebuild a 750+ score in 18 to 24 months."
          }
        },
        {
          "@type": "Question",
          "name": "What is the statutory penalty if a bank delays releasing personal property documents after settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, lenders must return all original property deeds and issue an NDC within 30 days. If the bank delays beyond 30 days, it must pay payout of ₹5,000 per day of delay."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank declare a personal guarantor a Wilful Defaulter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI rules, a bank cannot declare a guarantor a wilful defaulter for simple business failure. It must prove intentional fraud or fund diversion. If a lender sends an unfair notice, counsel can challenge it before the High Court."
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
  { id: 'understanding-personal-guarantee-invocation', title: '1. Commercial Guarantees & Section 128 Mechanics' },
  { id: 'statutory-protections-surety-discharge', title: '2. Surety Discharge Defenses (Sections 133–141)' },
  { id: 'tribunal-jurisdictions-drt-ibc-crosswinds', title: '3. DRT Litigation, IBC Part III & Court Jurisdictions' },
  { id: 'bank-accounting-npv-haircut-valuation', title: '4. Prudential NPA Provisioning & Haircut Math' },
  { id: 'personal-guarantee-resolution-roadmap', title: '5. Guarantee Resolution Visual Blueprint' },
  { id: 'advocate-negotiation-ringfencing-assets', title: '6. Advocate Negotiation & Asset Ring-Fencing' },
  { id: 'sanction-letter-forensics-tripartite-deed', title: '7. Sanction Letter Forensics & Guarantee Discharge' },
  { id: 'remittance-rbi-ndc-mandate-credit-rehabilitation', title: '8. Remittance, ₹0 NDC & Commercial Credit Repair' },
  { id: 'guarantee-defense-comparative-matrix', title: '9. Resolution Pathways Comparative Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Commercial Defense & Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function PersonalGuaranteeInvocationLoanSettlementPage() {
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
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-blue-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Gavel className="w-3.5 h-3.5" />
            <span>Corporate &amp; MSME Debt Defense • Section 128 Indian Contract Act</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Personal Guarantee Invocation: Legal Defenses & OTS</h1>

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
              <span>RBI Compromise Settlement &amp; DRT Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Defend Personal Guarantee</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Case Assessment
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
          <aside className="w-full sticky top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Section 128 makes guarantor liability co-extensive with the borrower. But Sections 133 to 141 grant full surety discharge if loan terms change. Legal defense stops personal liability. It secures a 45% to 65% OTS.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Personal Guarantee Defense &amp; Commercial Resolution</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Co-Extensive Liability:</strong> Under Section 128 of the Indian Contract Act, 1872, banks can sue personal guarantors directly. They do not need to finish corporate recovery first.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Surety Discharge:</strong> Lenders lose claims under Section 133 and Section 139. This happens if they alter loan terms. It also applies if they lose pledged assets without consent.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Supreme Court Precedent:</strong> In *Lalit Kumar Jain v. UOI*, the court held that corporate CIRP does not release guarantors. But independent OTS deals fully clear personal liability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Bank Provisioning Rules:</strong> Lenders face up to 100% provisioning on bad loans under RBI rules. This balance sheet pressure helps bank committees approve 45% to 65% OTS waivers.</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="understanding-personal-guarantee-invocation" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <Building2 className="w-6 h-6 text-[#1F5EFF]" />
                <span>1. The Mechanics of Personal Guarantee Invocation</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In India, banks rarely lend on company balance sheets alone. This applies to cash credit (CC) and term loans (WCTL). It also includes overdrafts (OD) and bank guarantees. Lenders routinely demand personal guarantees from directors and partners. When a business defaults, the bank invokes the guarantee.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The main rule is Section 128 of the Indian Contract Act, 1872. Surety liability is co-extensive with the borrower. The Supreme Court upheld this in <em>Bank of Bihar Ltd. v. Damodar Prasad (1969)</em>. It reaffirmed it in <em>State Bank of India v. Indexport Registered (1992)</em>. The bank can sue the guarantor before selling company assets.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Invocation begins after 90 days of missed payments. The account becomes an NPA. The bank then issues a Loan Recall Notice. It also sends an Invocation Notice. It demands full payment within 15 to 60 days. This puts personal bank accounts and family property at risk. But an invocation notice is not a court decree. You can challenge it with strong legal defenses.
              </p>
            </section>

            {/* Section 2 */}
            <section id="statutory-protections-surety-discharge" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <Scale className="w-6 h-6 text-[#1F5EFF]" />
                <span>2. Statutory Protections for Personal Guarantors</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks use standard guarantee forms with broad waiver terms. But Chapter VIII of the Indian Contract Act, 1872 provides strong protections. Lenders often make procedural errors during the loan term. These errors discharge the guarantor under Sections 133 to 141.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 133, contract changes made without consent discharge the surety. In practice, banks raise interest rates without consent. They also alter credit limits without approval. They often extend loan tenures without new guarantee deeds. These changes void personal liability.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Section 134 discharges the surety if the lender frees the borrower. Section 135 discharges the surety if the bank gives extra time. When banks make internal relief deals without formal consent, guarantees lose legal force.
              </p>

              <div className="bg-slate-50 border-l-4 border-[#1F5EFF] rounded-r-xl p-5 my-4">
                <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Section 139 &amp; 141: Loss of Creditor Securities as an Absolute Bar</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Section 139 discharges the surety if the lender hurts legal remedies. Under Section 141, a surety holds rights to all creditor security. If the bank loses or neglects pledged assets, the guarantor gets a full or partial discharge.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="tribunal-jurisdictions-drt-ibc-crosswinds" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <Landmark className="w-6 h-6 text-[#1F5EFF]" />
                <span>3. Tribunal Jurisdictions &amp; Judicial Crosswinds</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When lenders invoke a guarantee, they act across multiple courts. For claims over ₹20 Lakhs, banks file Section 19 claims in the DRT. If they hold mortgages, they issue Section 13(2) and 13(4) notices under the SARFAESI Act, 2002.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Insolvency and Bankruptcy Code (IBC), 2016 set new rules for guarantors. In <em>Lalit Kumar Jain v. Union of India (2021)</em>, the Supreme Court upheld Section 95 insolvency against promoters. The court held that company CIRP does not clear individual debt.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Guarantors gain vital legal shields under the IBC. Filing under Section 94 or Section 95 triggers an interim moratorium under Section 96. This pauses all DRT suits and asset attachments.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Managing these court actions requires coordinated defense. By filing Section 17 pleas in DRT, your lawyer fights inflated bank claims. This pressure drives the bank toward a realistic One-Time Settlement (OTS).
              </p>
            </section>

            {/* Section 4 */}
            <section id="bank-accounting-npv-haircut-valuation" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <Calculator className="w-6 h-6 text-[#1F5EFF]" />
                <span>4. Bank NPA Provisioning &amp; The Haircut Formula</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding bank balance sheets helps in settlement talks. Under RBI Prudential Framework rules and Master Directions (2023), banks cannot hold bad debt forever. They must allocate profits to provisioning reserves. This locks up capital.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As bad loans age from Sub-Standard (15% provision) to Doubtful or Loss Asset (100% provision), bank balance sheet pressure grows. Court cases in DRT and NCLT take 5 to 8 years. Over time, asset values drop, legal costs rise. And recovery values fall.
              </p>

              {/* Clean JSX Container for Formula */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Bank Stressed Asset Valuation &amp; Settlement Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  OTS_Target = NPV_Litigation = ∑ [ Realizable_Value_t / (1 + r)^t ] - Cumulative_Litigation_Cost - Provisioning_Carrying_Cost
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here, Realizable_Value is the distressed auction price of attached assets. The rate r is the bank&apos;s cost of capital. Deductions cover court delays, legal costs. And locked capital.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a guarantor makes an upfront cash settlement offer through counsel, the bank evaluates it against prolonged litigation costs. If the cash offer beats court recovery, the bank approves a 45% to 65% debt haircut under RBI rules.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="personal-guarantee-resolution-roadmap" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <BookOpen className="w-6 h-6 text-[#1F5EFF]" />
                <span>5. Visual Resolution Blueprint</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Defending a personal guarantee follows clear steps. It moves from notice audit to DRT defense, hardship proof, and OTS closing. The graphic below illustrates the complete roadmap to protect personal wealth and clear business debt.
              </p>

              <div className="my-6 rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
                <Image
                  src="/images/infographics/personal-guarantee-invocation-loan-settlement.jpg"
                  alt="Navigating Personal Guarantee Invocation and Business Loan Settlement in India"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />
              </div>

              <p className="text-xs text-slate-500 italic text-center">
                Figure 1.0: Statutory defense and One-Time Settlement workflow for invoked personal guarantees under Section 128 and RBI directions.
              </p>
            </section>

            {/* Section 6 */}
            <section id="advocate-negotiation-ringfencing-assets" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <ShieldCheck className="w-6 h-6 text-[#1F5EFF]" />
                <span>6. Strategic Advocate Negotiation</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Negotiating a personal guarantee alone is risky. Recovery agents often exploit distress. They demand cheques that harm your legal defense. Experienced debt defense advocates protect personal assets through structured legal counsel.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                talks begin with a formal compromise dossier. Your advocate shows the default was genuine business loss. This is crucial under RBI Wilful Defaulter rules. It protects promoters from criminal complaints under Sections 406 and 420 IPC.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Next, counsel uses statutory asset protections. Under Section 60 CPC, specific personal assets are exempt from attachment. These include basic tools and MWPA policies. Showing banks that recovery is limited reduces their leverage.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                During committee talks, advocates point out legal flaws. These include expired limitation periods and unapproved terms under Section 133. This helps secure a deep discount or a flexible payment plan.
              </p>
            </section>

            {/* Section 7 */}
            <section id="sanction-letter-forensics-tripartite-deed" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <FileCheck className="w-6 h-6 text-[#1F5EFF]" />
                <span>7. Sanction Letter Forensics</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An OTS is only as safe as the sanction letter. Never pay money on verbal assurances or emails. Flawed letters let banks credit funds to interest while keeping guarantees active or assigning debt to ARCs.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A valid OTS letter must be on bank letterhead. It must have proper signatures and four mandatory terms:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Explicit Guarantor Discharge Clause</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">The letter must name the guarantor. It must confirm that full payment cancels the Deed of Guarantee.</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Mandatory Case Withdrawal Undertaking</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">The lender must withdraw all Section 19 DRT claims, Section 95 IBC cases, and Section 138 NI Act complaints within 15 to 30 days.</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs sm:text-sm">Release of Title Deeds &amp; Charge Satisfaction</h5>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">The bank must return original deeds and file Form CHG-4 with ROC and CERSAI.</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs sm:text-sm">Ban on Debt Assignment to ARCs</h5>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">The letter must bar the bank from assigning written-off debt to an ARC.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before paying the first installment, legal counsel checks the letter to remove clawback terms. This ensures full compliance with RBI master directives.
              </p>
            </section>

            {/* Section 8 */}
            <section id="remittance-rbi-ndc-mandate-credit-rehabilitation" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <CreditCard className="w-6 h-6 text-[#1F5EFF]" />
                <span>8. Payment Protocols &amp; No Dues Certificate</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Always pay settlement amounts through official banking channels. Use RTGS, NEFT, or Demand Drafts directly into the loan account. Never pay unverified third parties.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After final payment, the lender must provide a No Dues Certificate (NDC). Under RBI Circular <em>RBI/2023-24/60</em>, lenders must return all original documents within <strong>30 calendar days</strong>. Delays beyond 30 days carry a fine of <strong>₹5,000 per day</strong> paid to the guarantor.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Finally, the lender updates credit bureaus like CIBIL to &quot;Settled&quot. with a ₹0 balance. This causes a brief score dip of 75 to 150 points. But it clears bad remarks so you can rebuild a 750+ score.
              </p>
            </section>

            {/* Section 9: Comparative Matrix */}
            <section id="guarantee-defense-comparative-matrix" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <Layers className="w-6 h-6 text-[#1F5EFF]" />
                <span>9. Personal Guarantee Resolution Matrix</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Promoters face several legal routes. Comparing tribunal defense, insolvency, and OTS helps protect your wealth and business.
              </p>

              <div className="overflow-x-auto my-4">
                <table className="w-full text-xs sm:text-sm text-slate-700 border border-slate-300 rounded-xl">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-300">
                      <th className="p-3 border-r border-slate-200">Resolution Pathway.</th>
                      <th className="p-3 border-r border-slate-200">Applicable Law / Forum.</th>
                      <th className="p-3 border-r border-slate-200">Legal Timeline.</th>
                      <th className="p-3 border-r border-slate-200">Promoter Asset Risk.</th>
                      <th className="p-3">Haircut / Waiver Potential.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">DRT Litigation Defense.</td>
                      <td className="p-3 border-r border-slate-200">Section 19 RDBA / DRT.</td>
                      <td className="p-3 border-r border-slate-200">4 to 7 Years.</td>
                      <td className="p-3 border-r border-slate-200">High (Attachment / Auction Orders).</td>
                      <td className="p-3">None (Court decrees 100% + interest).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Personal Insolvency.</td>
                      <td className="p-3 border-r border-slate-200">Section 95 IBC / NCLT.</td>
                      <td className="p-3 border-r border-slate-200">2 to 4 Years.</td>
                      <td className="p-3 border-r border-slate-200">Severe (Estate controlled by RP).</td>
                      <td className="p-3">Decided by Creditors Committee.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">SARFAESI Securitisation Application.</td>
                      <td className="p-3 border-r border-slate-200">Section 17 SARFAESI / DRT.</td>
                      <td className="p-3 border-r border-slate-200">2 to 5 Years.</td>
                      <td className="p-3 border-r border-slate-200">Critical (Physical Property Eviction).</td>
                      <td className="p-3">Procedural stay only. no debt waiver.</td>
                    </tr>
                    <tr className="bg-blue-50/50">
                      <td className="p-3 font-bold text-[#1F5EFF] border-r border-slate-200">Advocate-Led OTS Compromise.</td>
                      <td className="p-3 border-r border-slate-200">RBI Master Directions / Contract Act.</td>
                      <td className="p-3 border-r border-slate-200">3 to 6 Months.</td>
                      <td className="p-3 border-r border-slate-200">Zero (Full Release &amp. Title Return).</td>
                      <td className="p-3 font-bold text-emerald-600">45% to 65% Principal Haircut.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Court cases bring delay. Only an advocate-led OTS settlement gives total freedom with high debt waivers.
              </p>
            </section>

            {/* Section 10 */}
            <section id="company-resolution-section" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <Briefcase className="w-6 h-6 text-[#1F5EFF]" />
                <span>10. SettleLoans Legal Defense &amp; Commercial Debt Advisory</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                SettleLoans helps promoters, MSME directors. And guarantors resolve commercial debt. When lenders invoke guarantees under Section 128, our advocates lead your defense.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                We review loan files for illegal changes under Section 133 and lapses under Section 139. We coordinate multi-court defense in DRT, NCLT, and High Courts. We also negotiate directly with bank zonal committees under RBI rules.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                We combine legal defense with smart negotiation. SettleLoans helps promoters clear debt, secure 45% to 65% waivers. And cancel personal guarantee deeds.
              </p>
            </section>

            {/* CompanySection Component rendered directly before FAQs */}
            <CompanySection />

            {/* Section 11: FAQ Accordion */}
            <section id="faqs" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <HelpCircle className="w-6 h-6 text-[#1F5EFF]" />
                <span>11. FAQs: Personal Guarantee Invocation &amp; Settlement</span>
              </h2>

              <div className="space-y-3 my-6">
                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>What is personal guarantee invocation for a business loan in India?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    Personal guarantee invocation is a formal legal demand under Section 128 of the Indian Contract Act, 1872. It asks a guarantor to pay company debt. Guarantor liability is co-extensive with the borrower. The bank can pursue personal assets directly.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>Can a bank seize a promoter's personal assets when a company defaults?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    A bank cannot seize assets overnight. It must follow legal steps. It sends a notice under Section 128. Above ₹20 Lakhs, it files in DRT under Section 19. Or it files in NCLT under Section 95. Promoters can fight back using defenses under Sections 133 to 141.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>What are the legal defenses available to a personal guarantor under the Indian Contract Act?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    Guarantors have strong statutory defenses. Section 133 discharges liability if loan terms change without consent. Section 134 discharges the surety if the debtor is released. Section 135 gives discharge if the bank grants extra time. Section 139 applies if the lender harms legal remedies. Section 141 gives discharge if security is lost.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>How does the Supreme Court ruling in Lalit Kumar Jain v. Union of India affect personal guarantors?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    In <em>Lalit Kumar Jain v. Union of India (2021)</em>, the Supreme Court ruled on guarantees. It held that corporate CIRP does not clear personal guarantors. Lenders can still sue under Section 95 IBC or in DRT. Negotiating an OTS is vital to secure an individual release.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>Can an invoked personal guarantee be settled through a One-Time Settlement (OTS)?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    Yes. Banks settle guarantees through One-Time Settlement (OTS) under RBI rules. DRT and NCLT cases take 5 to 8 years. Because recovery is slow, lenders accept settlement deals with 45% to 65% debt waivers.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>What is the difference between Corporate Moratorium (Section 14) and Personal Moratorium (Section 96)?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    Section 14 IBC protects only company assets. But Section 96 IBC gives an interim stay for personal guarantors. It pauses all ongoing lawsuits and debt collection against personal assets.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>What essential clauses must be included in a personal guarantee OTS Sanction Letter?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    A valid OTS letter must have key terms: (1) Full discharge of the guarantor. (2) Return of original title deeds and guarantee papers. (3) Withdrawal of DRT Section 19, NCLT Section 95, and Section 138 NI Act cases. (4) Total waiver of penal interest. (5) A ban on selling debt to ARCs.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>How does personal guarantee settlement impact commercial and individual CIBIL scores?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    After full OTS payment, the bank marks the account as &apos;Settled&apos. with a ₹0 balance in CIBIL. Your score drops briefly by 75 to 150 points. But it clears court tags and lets you rebuild a 750+ score in 18 to 24 months.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>What is the statutory penalty if a bank delays releasing personal property documents after settlement?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    Under RBI Circular RBI/2023-24/60, lenders must return all original property deeds and issue an NDC within 30 days. If the bank delays beyond 30 days, it must pay payout of ₹5,000 per day of delay.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>Can a bank declare a personal guarantor a Wilful Defaulter?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    Under RBI rules, a bank cannot declare a guarantor a wilful defaulter for simple business failure. It must prove intentional fraud or fund diversion. If a lender sends an unfair notice, counsel can challenge it before the High Court.
                  </p>
                </details>
              </div>
            </section>

            {/* 5 Official Regulatory Links */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Official Statutory &amp; Regulatory References
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Indian Contract Act, 1872 (Sections 128–141 Surety Provisions)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Lalit Kumar Jain v. UOI Landmark IBC Ruling)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Directions – Framework on Compromise Settlements (2023)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://ibbi.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Insolvency and Bankruptcy Board of India (IBBI Personal Guarantors Regulations)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://drt.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Debts Recovery Tribunal (DRT &amp; DRAT Section 19 Jurisdiction Portal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Commercial Defense &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/unsecured-business-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Unsecured Business Loan Settlement
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/10-crore-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  10 Crore Corporate Debt Settlement
                </Link>
                <Link
                  href="/5-crore-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  5 Crore Business Debt Settlement
                </Link>
                <Link
                  href="/1-crore-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  1 Crore MSME Loan Settlement
                </Link>
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Defense
                </Link>
                <Link
                  href="/sarfaesi-act-rules-personal-loan-exemption"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SARFAESI Act Rules &amp; Property Defense
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
                <Link
                  href="/wilful-defaulter-notice-reply-and-settlement-defense"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Wilful Defaulter Notice Reply Guide
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Protocol
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full sticky top-24 space-y-6">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                  AJ
                </Link>
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                      Ashish Jhangra
                    </Link>
                  </div>
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Ashish Jhangra is a senior advocate and debt resolution strategist. He specializes in commercial debt disputes, Section 128 guarantee defense, DRT cases, and RBI settlement frameworks with over 12 years of experience.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="font-semibold text-[#1F5EFF] hover:underline flex items-center gap-1">
                  <span>View Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Commercial Legal Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Bank Invoked Your Personal Guarantee?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not put your personal assets and bank accounts at risk. Work with senior debt defense advocates to challenge DRT notices. Use Section 133–141 Contract Act discharge defenses and negotiate a 45%–65% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Commercial Case Review
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Legal Safeguards
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Supreme Court Precedent Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Attorney Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Stamped OTS Sanction Letters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>DRT, NCLT &amp; High Court Representation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
