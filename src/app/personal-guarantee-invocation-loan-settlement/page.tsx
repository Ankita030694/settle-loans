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
          "reviewBody": "Our manufacturing company suffered severe liquidity distress, defaulting on a ₹6.8 Crore working capital facility with a leading PSU bank. The bank immediately invoked my personal guarantee under Section 128 and filed an Original Application in DRT-II Delhi. SettleLoans conducted a forensic audit of the loan ledger, proved unauthorized margin enhancements without my consent under Section 133 of the Contract Act, and negotiated a structured 54% OTS. The Deed of Guarantee was officially canceled and my residential property title was released.",
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
          "reviewBody": "As an MSME founder, a private bank invoked my personal guarantee for a ₹2.4 Crore term loan default after a major buyer went into insolvency. SettleLoans advocates represented me, halted personal asset attachment in DRT, established genuine commercial failure, and closed the entire exposure via a One-Time Settlement of ₹1.1 Crore with a comprehensive ₹0 No Dues Certificate.",
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
          "reviewBody": "A private lender filed Section 95 IBC proceedings against me as a personal guarantor for a ₹4.2 Crore business line. The legal team at SettleLoans navigated the interim moratorium under Section 96, challenged the creditor's calculations, and structured a negotiated settlement before NCLT Mumbai that fully discharged my personal liability without entering personal bankruptcy.",
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
          "reviewBody": "Outstanding commercial debt advocacy. When a consortium of lenders invoked personal guarantees totaling ₹11.5 Crores across two partner directors, SettleLoans coordinated the joint defense, exposed the bank's negligent dissipation of hypothecated plant machinery under Section 139, and secured a global compromise settlement saving our family heritage assets.",
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
            "text": "Personal guarantee invocation is a formal legal demand issued by a lending bank or financial institution under Section 128 of the Indian Contract Act, 1872, requiring an individual guarantor (usually a company director, promoter, or partner) to personally satisfy the unpaid debts of a defaulted business entity. Under Indian law, the guarantor's liability is co-extensive with the principal borrower, meaning the lender can proceed directly against the guarantor's personal assets without exhausting remedies against the corporate entity first, unless the guarantee deed provides otherwise."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank seize a promoter's personal assets when a company defaults?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A bank cannot arbitrarily seize personal assets overnight. To attach or liquidate personal property, the bank must follow statutory legal procedures: issuing a formal Demand Notice under Section 128 of the Contract Act, filing a Section 19 Original Application before the Debt Recovery Tribunal (DRT) for claims exceeding ₹20 Lakhs, or initiating Section 95 insolvency proceedings before the National Company Law Tribunal (NCLT). In DRT proceedings, banks must obtain formal attachment orders, which promoters can contest with strong legal defenses under Sections 133 to 141 of the Contract Act."
          }
        },
        {
          "@type": "Question",
          "name": "What are the legal defenses available to a personal guarantor under the Indian Contract Act?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Promoters possess powerful statutory defenses to establish complete or partial discharge: (1) Section 133: Discharge by variance in loan terms (e.g., enhanced credit limits, altered interest rates, or rescheduled tenures without the guarantor's express consent); (2) Section 134: Discharge by release of the principal debtor; (3) Section 135: Discharge when the creditor compounds with or gives time to the principal debtor without guarantor concurrence; (4) Section 139: Discharge when the creditor's act or omission impairs the guarantor's eventual remedy; and (5) Section 141: Loss of security held by the creditor, discharging the surety to the extent of the lost security value."
          }
        },
        {
          "@type": "Question",
          "name": "How does the Supreme Court ruling in Lalit Kumar Jain v. Union of India affect personal guarantors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In the landmark judgment Lalit Kumar Jain v. Union of India (2021), the Supreme Court held that the approval of a Resolution Plan for a corporate debtor under the Insolvency and Bankruptcy Code (IBC) does not automatically discharge personal guarantors from their independent contractual liabilities. Creditors retain the legal right to pursue personal guarantors simultaneously before the NCLT under Section 95 of the IBC or before the DRT, making proactive advocate-led compromise settlements essential to secure an explicit individual discharge."
          }
        },
        {
          "@type": "Question",
          "name": "Can an invoked personal guarantee be settled through a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Banks and NBFCs actively entertain One-Time Settlements (OTS) for personal guarantors under the Reserve Bank of India Master Directions on Compromise Settlements. Because protracted litigation in DRT and NCLT often spans 5 to 8 years with uncertain recovery and mounting provisioning requirements, lenders frequently agree to settle high-value commercial defaults with 45% to 65% principal haircuts when presented with a robust hardship proposal backed by legal defense."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between Corporate Moratorium (Section 14) and Personal Moratorium (Section 96)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 14 of the IBC imposes a moratorium strictly protecting the corporate debtor, staying suits and asset enforcement against company property but leaving personal guarantors exposed. In contrast, Section 96 of the IBC triggers an immediate 'interim moratorium' on the filing of an insolvency application against the personal guarantor, staying all ongoing legal proceedings and debt enforcement actions against the individual's personal assets until the application is admitted or rejected."
          }
        },
        {
          "@type": "Question",
          "name": "What essential clauses must be included in a personal guarantee OTS Sanction Letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A legally watertight OTS sanction letter must contain: (1) Explicit naming of the personal guarantor and clear language discharging the Deed of Guarantee unconditionally upon payment; (2) Commitment to physically return and cancel the original guarantee deed and release all personal title deeds; (3) Mandatory timeline for the withdrawal of all pending DRT Section 19 OAs, NCLT Section 95 petitions, and Section 138 NI Act cases; (4) Absolute waiver of all penal interest and residual claims; and (5) Strict prohibition against assigning residual debt to Asset Reconstruction Companies (ARCs)."
          }
        },
        {
          "@type": "Question",
          "name": "How does personal guarantee settlement impact commercial and individual CIBIL scores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upon fulfillment of the OTS terms, the bank reports the account to credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) as 'Settled' with an outstanding balance of ₹0. While this causes a temporary credit score dip of 75 to 150 points, it halts compounding default status, removes suit-filed flags, and enables credit rebuilding above 750 within 18 to 24 months through disciplined secured credit management."
          }
        },
        {
          "@type": "Question",
          "name": "What is the statutory penalty if a bank delays releasing personal property documents after settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, banks and regulated lending entities are legally mandated to return all original movable and immovable property documents, cancel registered charges, and deliver a formal No Dues Certificate within 30 calendar days of receiving full settlement payment. Any unjustified delay beyond 30 days makes the bank liable to pay statutory compensation of ₹5,000 per day of delay directly to the borrower or guarantor."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank declare a personal guarantor a Wilful Defaulter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Master Circulars on Wilful Defaulters, a personal guarantor can only be declared a wilful defaulter if the lender proves intentional siphoning of funds, fraudulent asset transfers, or refusal to pay despite possessing demonstrable financial capacity. A guarantor cannot be declared a wilful defaulter simply due to genuine commercial enterprise failure. In case of arbitrary show-cause notices, legal counsel can challenge the Identification Committee's findings before the Review Committee and High Court."
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
                Section 128 makes guarantor liability co-extensive with the company, but Sections 133–141 of the Contract Act provide complete statutory discharge when banks alter credit terms or mismanage primary securities. Professional advocacy severs individual liability and secures a 45%–65% OTS.
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
                  <span><strong>Co-Extensive Liability Reality:</strong> Under Section 128 of the Indian Contract Act, 1872, banks can pursue personal guarantors simultaneously alongside the borrowing company without exhausting corporate remedies first.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Surety Discharge:</strong> Lenders frequently forfeit guarantee enforceability under Section 133 and Section 139 by altering interest rates, restructuring limits, or neglecting pledged primary hypothecated assets without express guarantor consent.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Supreme Court Precedent Nuance:</strong> While *Lalit Kumar Jain v. UOI* established that corporate CIRP approval does not automatically release guarantors, it affirmed that independent compromise agreements and OTS sanctions legally extinguish individual liability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Banking Provisioning Pressure:</strong> Commercial banks holding Non-Performing Assets (NPAs) face up to 100% balance-sheet provisioning under RBI Prudential Frameworks, driving credit committees to accept 45% to 65% OTS principal waivers.</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="understanding-personal-guarantee-invocation" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <Building2 className="w-6 h-6 text-[#1F5EFF]" />
                <span>1. The Mechanics of Personal Guarantee Invocation in Commercial Lending</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In Indian corporate finance and MSME lending, financial institutions rarely advance substantial credit facilities—such as cash credit (CC) limits, working capital term loans (WCTL), overdrafts (OD), or bank guarantees (BG)—based solely on corporate balance sheets. Lenders routinely insist on continuing, joint, and several personal guarantees executed by managing directors, promoter directors, and key partners. When an enterprise defaults due to severe macroeconomic downturns, supply chain disruptions, or cancelled commercial contracts, the lender initiates a multi-stage enforcement pipeline, culminating in the formal invocation of the personal guarantee.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The foundational statutory principle governing guarantee enforceability is Section 128 of the Indian Contract Act, 1872, which stipulates that the liability of the surety is co-extensive with that of the principal debtor, unless it is otherwise provided by the contract. This co-extensive doctrine has been interpreted by the Supreme Court of India in landmark decisions, including <em>Bank of Bihar Ltd. v. Damodar Prasad (1969)</em> and <em>State Bank of India v. Indexport Registered (1992)</em>, establishing that a lending bank is under no legal obligation to first exhaust its remedies against the principal corporate debtor or liquidate the primary hypothecated assets before initiating legal recovery against the personal guarantor.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Invocation is formally triggered when the borrowing company fails to regularize overdues within 90 days, causing the account to transition into Non-Performing Asset (NPA) status. The bank issues a composite Loan Recall Notice alongside an Invocation Notice demanding the immediate repayment of the entire outstanding debt from the guarantor within 15 to 60 days. Receiving this notice places the promoter in severe financial jeopardy, exposing personal bank accounts, residential properties, equity holdings, and ancestral real estate to judicial attachment. However, an invocation notice is not a final court decree, but rather the commencement of a formal legal contest where precise contractual defenses can be deployed.
              </p>
            </section>

            {/* Section 2 */}
            <section id="statutory-protections-surety-discharge" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <Scale className="w-6 h-6 text-[#1F5EFF]" />
                <span>2. Statutory Protections &amp; Surety Discharge Defenses Under the Indian Contract Act</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Although banks draft extensive standard-form guarantee agreements containing aggressive waiver clauses, the statutory protections enshrined in Chapter VIII of the Indian Contract Act, 1872, provide robust substantive defenses. Commercial lenders frequently commit procedural and contractual lapses during the lifecycle of a corporate loan that legally discharge the guarantor from liability. When advocates scrutinize the sanction files and correspondence history, they frequently identify statutory triggers that invalidate the lender's claim under Sections 133 through 141.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 133 of the Act, any variance made without the surety's express consent in the terms of the contract between the principal debtor and the creditor discharges the surety as to transactions subsequent to the variance. In commercial banking practice, lenders frequently enhance interest rate spreads, alter drawing power margins, convert working capital interest into funded interest term loans (FITL), or extend loan repayment tenures during internal restructurings without executing fresh tripartite deeds with the individual guarantor. Such unilateral modifications alter the surety's risk exposure and provide a complete defense to extinguish personal liability.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Furthermore, Section 134 provides that the surety is discharged by any contract between the creditor and the principal debtor by which the principal debtor is released, or by any act or omission of the creditor the legal consequence of which is the discharge of the principal debtor. Closely tied to this is Section 135, which discharges the surety if the creditor makes a composition with, or promises to give time to, or promises not to sue, the principal debtor without the surety's formal assent. When banks enter bilateral moratorium arrangements or restructure facilities with the company management without joining the guarantor in their individual capacity, the guarantee's enforceability is severely compromised.
              </p>

              <div className="bg-slate-50 border-l-4 border-[#1F5EFF] rounded-r-xl p-5 my-4">
                <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Section 139 &amp; 141: Loss of Creditor Securities as an Absolute Bar</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Section 139 dictates that if the creditor does any act which is inconsistent with the rights of the surety, or omits to do any act which his duty to the surety requires him to do, and the eventual remedy of the surety himself against the principal debtor is thereby impaired, the surety is discharged. Under Section 141, a surety is entitled to the benefit of every security held by the creditor at the time the contract of suretyship is entered into; if the creditor loses or parts with such security without the surety's consent, the surety is discharged to the extent of the value of the security. If a bank fails to inspect, renew insurance on, or properly seize pledged inventory and plant machinery, allowing them to deteriorate or be pilfered, the personal guarantor is legally entitled to a pro-rata or full discharge of their personal guarantee.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="tribunal-jurisdictions-drt-ibc-crosswinds" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <Landmark className="w-6 h-6 text-[#1F5EFF]" />
                <span>3. Tribunal Jurisdictions &amp; Judicial Crosswinds: DRT, NCLT, and Personal Insolvency under IBC</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When lenders invoke a personal guarantee, recovery actions are pursued across distinct judicial forums depending on the exposure magnitude and legal strategy. For claims exceeding ₹20 Lakhs, commercial banks and notified NBFCs file Original Applications (OAs) under Section 19 of the Recovery of Debts and Bankruptcy Act, 1993 (RDBA) before the jurisdictional Debt Recovery Tribunal (DRT). Concurrently, lenders holding registered equitable mortgages over personal real estate invoke Section 13(2) and Section 13(4) of the SARFAESI Act, 2002, attempting to take physical possession of residential or commercial properties without prior court intervention.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The legal landscape surrounding personal guarantors underwent a seismic shift with the enactment and progressive notification of Part III of the Insolvency and Bankruptcy Code (IBC), 2016. In the landmark Supreme Court ruling <em>Lalit Kumar Jain v. Union of India (2021)</em>, a three-judge bench upheld the central government's notification allowing financial creditors to initiate simultaneous personal insolvency proceedings against promoters under Section 95 of the IBC before the National Company Law Tribunal (NCLT). The court ruled that the approval of a Corporate Insolvency Resolution Process (CIRP) resolution plan for the corporate debtor does not automatically absolve or discharge the personal guarantor from remaining shortfalls.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                However, personal guarantors possess critical statutory procedural protections under the IBC. Unlike the corporate moratorium under Section 14 (which protects solely the corporate entity and its assets), filing an application under Section 94 or Section 95 triggers an immediate <strong>Interim Moratorium</strong> under Section 96 of the IBC. This interim moratorium statutorily stays all pending legal proceedings, DRT recovery suits, and execution actions against the personal guarantor's estate, prohibiting lenders from alienating or attaching personal assets until the Resolution Professional submits their formal recommendation and the NCLT adjudicates on admission under Section 100.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Navigating these multi-jurisdictional proceedings requires strategic litigation coordination. By contesting SARFAESI measures through Securitisation Applications (SA) under Section 17 before the DRT, filing robust Written Statements disputing inflated interest calculations in Section 19 OAs, and engaging in pre-admission conciliation under the IBC, legal counsel creates substantive procedural friction that compels the lender to consider a realistic One-Time Settlement (OTS).
              </p>
            </section>

            {/* Section 4 */}
            <section id="bank-accounting-npv-haircut-valuation" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <Calculator className="w-6 h-6 text-[#1F5EFF]" />
                <span>4. Bank Accounting, Prudential NPA Provisioning &amp; The Haircut Formula</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding the internal balance-sheet mechanics of commercial lending institutions is critical to structuring an effective guarantee settlement. Under the Reserve Bank of India (Prudential Framework for Resolution of Stressed Assets) Directions, 2019 and Master Directions on Compromise Settlements (2023), banks cannot maintain unpaid commercial defaults on their balance sheets indefinitely. When an account defaults, the bank must allocate significant portions of its operating profit into bad-debt provisioning reserves, locking up regulatory capital and depressing return-on-equity metrics.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As a delinquent loan ages through provisioning classifications—from Sub-Standard (15% provisioning) to Doubtful-1 (25% secured / 100% unsecured), Doubtful-2 (40% secured / 100% unsecured), Doubtful-3 (100% provisioning), and Loss Asset (100% written off)—the bank's financial recovery desk faces immense internal pressure to resolve the exposure. Protracted litigation before DRT, DRAT, High Courts, and NCLT typically spans 5 to 8 years, during which asset values depreciate, legal fees accumulate, and the net present value (NPV) of future recovery decays dramatically.
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
                  Where Realizable_Value represents the distressed auction price of attached assets, r is the bank's internal cost of capital (hurdle rate), and deductions account for 5–7 years of court friction, receiver expenses, and locked provisioning capital.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a personal guarantor presents an immediate, upfront liquidity offer via an advocate-led compromise proposal, the bank's Zonal Stressed Assets Resolution Branch (SARB) and Credit Committee evaluate the proposal against the discounted Net Present Value of litigation. If the immediate settlement figure matches or exceeds the projected NPV of prolonged recovery, the Credit Committee possesses full regulatory authorization under RBI guidelines to sanction a 45% to 65% debt haircut and execute a complete release of the personal guarantee.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="personal-guarantee-resolution-roadmap" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <BookOpen className="w-6 h-6 text-[#1F5EFF]" />
                <span>5. Visual Resolution Blueprint: Personal Guarantee Invocation &amp; Settlement Roadmap</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Navigating personal guarantee defense requires a structured, multi-phase progression from initial statutory notice analysis to advocate-led DRT defense, financial hardship documentation, Credit Committee negotiation, and final sanction execution. The visual roadmap below details the complete strategic workflow that protects promoter assets and delivers an absolute debt discharge.
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
                Figure 1.0: End-to-end statutory defense and One-Time Settlement workflow for invoked personal guarantees under Section 128 of the Indian Contract Act and RBI Compromise Directions.
              </p>
            </section>

            {/* Section 6 */}
            <section id="advocate-negotiation-ringfencing-assets" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <ShieldCheck className="w-6 h-6 text-[#1F5EFF]" />
                <span>6. Strategic Advocate Negotiation: Severing Promoter Liability from Corporate Default</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Attempting to negotiate a multi-crore personal guarantee invocation without specialized legal counsel is extremely hazardous. Bank recovery officers and stressed asset managers are trained to exploit personal anxiety, demanding immediate personal checks, post-dated cheques, or third-party collateral pledges that only compromise the guarantor's legal standing. Professional debt defense advocates decouple the promoter's personal financial destiny from the insolvent corporate entity through structured legal advocacy.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The negotiation begins with the formulation of a Comprehensive Compromise Dossier (CCD). Legal counsel establishes that the business failure was a bona fide commercial catastrophe—resulting from market contractions, regulatory policy changes, or client insolvencies—rather than an intentional or fraudulent diversion of capital. This distinction is critical under RBI Master Circulars on Wilful Defaulters, as establishing genuine hardship insulates the promoter from adverse identification committee proceedings and criminal references under Sections 406/420 of the Indian Penal Code.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Simultaneously, advocates conduct an asset ring-fencing audit. Under Section 60 of the Code of Civil Procedure, 1908 (CPC), specific personal assets—including basic residential tools of trade, essential household furniture, life insurance policies held under the Married Women's Property Act (MWPA), and family properties where the guarantor holds only an undivided coparcenary interest—are statutorily exempt or highly restricted from judicial attachment. Demonstrating to the bank that the guarantor possesses limited unencumbered personal assets shatters the bank's leverage and forces realistic settlement dialogue.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                During bilateral settlement conferences with the bank's Zonal Committee, advocates leverage procedural flaws in the loan documentation—such as unexecuted revival letters, expired limitation periods under the Limitation Act, 1963 (Article 55 / Article 113), or unauthorized limit variations under Section 133—to demonstrate that full recovery in court is unattainable. This legal leverage enables counsel to negotiate an agreed settlement sum, structured either as a discounted lump-sum payment or a staggered 3 to 6-month tranche schedule.
              </p>
            </section>

            {/* Section 7 */}
            <section id="sanction-letter-forensics-tripartite-deed" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <FileCheck className="w-6 h-6 text-[#1F5EFF]" />
                <span>7. Sanction Letter Forensics &amp; The Tripartite Compromise Agreement</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A One-Time Settlement is only as secure as the contractual wording contained in the bank's official Sanction Letter. Promoters must never remit settlement funds based on verbal promises, email communications from branch managers, or non-binding draft notes. A legally defective OTS letter can allow the bank to credit the paid amount against accumulated penal interest while keeping the original guarantee alive and selling the remaining loan balance to an Asset Reconstruction Company (ARC) under SARFAESI Section 5.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A legally watertight OTS Sanction Letter must be issued on the bank's official corporate letterhead, signed by an authorized signatory possessing delegated financial power under the bank's internal delegation matrix, and contain the following mandatory statutory clauses:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Explicit Guarantor Discharge Clause</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">The letter must explicitly name the individual guarantor and declare that upon receipt of the agreed settlement sum, the Deed of Guarantee executed on [Date] stands permanently canceled, void, and extinguished in its entirety.</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Mandatory Legal Withdrawal Undertaking</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">The lender must undertake to file formal withdrawal applications for all pending Original Applications (OAs) in DRT under Section 19, insolvency petitions under Section 95 IBC before NCLT, and Section 138 NI Act complaints within 15 to 30 days of full payment.</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs sm:text-sm">Release of Title Deeds &amp; Charge Satisfaction</h5>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">A binding commitment to hand over all physical original title deeds, share certificates, and personal securities deposited by the guarantor, alongside filing Form CHG-4 with the Registrar of Companies (ROC) and satisfaction of charge with CERSAI.</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs sm:text-sm">Prohibition of Debt Assignment to ARCs</h5>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">An absolute covenant prohibiting the bank from assigning, transferring, or selling any residual, unrecovered, or written-off debt balance to any Asset Reconstruction Company (ARC) or third-party debt recovery agency.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Prior to disbursing the first settlement installment, legal counsel reviews every paragraph of the sanction letter to ensure the complete absence of restrictive "clawback clauses" (which state that any minor administrative delay revives the entire multi-crore claim) and ensures that all terms comply with RBI master directives.
              </p>
            </section>

            {/* Section 8 */}
            <section id="remittance-rbi-ndc-mandate-credit-rehabilitation" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <CreditCard className="w-6 h-6 text-[#1F5EFF]" />
                <span>8. Remittance Protocols, RBI No Dues Certificate &amp; Commercial Credit Repair</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Execution of the settlement must adhere to strict banking protocols. Remittances must be executed strictly through verified institutional banking channels (RTGS, NEFT, or designated Bank Demand Drafts) directly into the specific Stressed Asset Loan Account number specified in the sanction letter. Promoters must never transfer funds to recovery agency accounts, personal accounts of bank officials, or unverified collection escrow entities.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following the final settlement remittance, the lender is bound by statutory timelines to deliver a formal, unconditional <strong>No Dues Certificate (NDC)</strong> or Closure Letter. Under Reserve Bank of India Circular <em>RBI/2023-24/60 (Fair Practices Code - Release of Movable/Immovable Property Documents)</em>, all commercial banks, NBFCs, and ARCs are legally mandated to release all original title deeds, cancel registered mortgages, and deliver the NDC within strictly <strong>30 calendar days</strong> of receiving full settlement consideration. If a bank fails to deliver the documents within 30 days without lawful cause, it is statutorily liable to pay compensation of <strong>₹5,000 per day of delay</strong> directly to the borrower or guarantor.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The final phase of resolution addresses credit bureau rehabilitation. Following the settlement, the lender updates commercial and retail credit rating agencies (CIBIL, Experian Commercial, Equifax, and CRIF High Mark). The account status transitions from "Suit Filed / Wilful Default" to "Settled" with an outstanding ledger balance of ₹0. While a settled tag produces a temporary reduction in the promoter's credit score (typically 75 to 150 points), it permanently eliminates compounding default flags, unfreezes commercial credit channels, and enables the promoter to restore a prime credit score (750+) within 18 to 24 months through prudent credit management.
              </p>
            </section>

            {/* Section 9: Comparative Matrix */}
            <section id="guarantee-defense-comparative-matrix" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <Layers className="w-6 h-6 text-[#1F5EFF]" />
                <span>9. Comparative Matrix: Personal Guarantee Defense vs Alternative Resolution Pathways</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When confronting an invoked personal guarantee, promoters have several legal and procedural pathways. Understanding the strategic trade-offs between continuous litigation, insolvency petitions, and advocate-led compromise settlements is vital to protecting personal capital and long-term business mobility.
              </p>

              <div className="overflow-x-auto my-4">
                <table className="w-full text-xs sm:text-sm text-slate-700 border border-slate-300 rounded-xl">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-300">
                      <th className="p-3 border-r border-slate-200">Resolution Pathway</th>
                      <th className="p-3 border-r border-slate-200">Applicable Law / Forum</th>
                      <th className="p-3 border-r border-slate-200">Legal Timeline</th>
                      <th className="p-3 border-r border-slate-200">Promoter Asset Risk</th>
                      <th className="p-3">Haircut / Waiver Potential</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">DRT Litigation Defense</td>
                      <td className="p-3 border-r border-slate-200">Section 19 RDBA / DRT</td>
                      <td className="p-3 border-r border-slate-200">4 to 7 Years</td>
                      <td className="p-3 border-r border-slate-200">High (Attachment / Auction Orders)</td>
                      <td className="p-3">None (Court decrees 100% + interest)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Personal Insolvency</td>
                      <td className="p-3 border-r border-slate-200">Section 95 IBC / NCLT</td>
                      <td className="p-3 border-r border-slate-200">2 to 4 Years</td>
                      <td className="p-3 border-r border-slate-200">Severe (Estate vested with RP)</td>
                      <td className="p-3">Determined by Creditors Committee</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">SARFAESI Securitisation Application</td>
                      <td className="p-3 border-r border-slate-200">Section 17 SARFAESI / DRT</td>
                      <td className="p-3 border-r border-slate-200">2 to 5 Years</td>
                      <td className="p-3 border-r border-slate-200">Critical (Physical Property Eviction)</td>
                      <td className="p-3">Procedural stay only; no debt waiver</td>
                    </tr>
                    <tr className="bg-blue-50/50">
                      <td className="p-3 font-bold text-[#1F5EFF] border-r border-slate-200">Advocate-Led OTS Compromise</td>
                      <td className="p-3 border-r border-slate-200">RBI Master Directions / Contract Act</td>
                      <td className="p-3 border-r border-slate-200">3 to 6 Months</td>
                      <td className="p-3 border-r border-slate-200">Zero (Full Release &amp; Title Return)</td>
                      <td className="p-3 font-bold text-emerald-600">45% to 65% Principal Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As the comparative matrix illustrates, while litigation before tribunals provides critical tactical breathing space and stays against attachment, only a structured, bilateral One-Time Settlement (OTS) delivers a conclusive, permanent discharge of personal guarantee liabilities with substantial financial haircuts and total asset security.
              </p>
            </section>

            {/* Section 10 */}
            <section id="company-resolution-section" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <Briefcase className="w-6 h-6 text-[#1F5EFF]" />
                <span>10. SettleLoans Legal Defense &amp; Commercial Debt Advisory</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                SettleLoans is India's premier legal advocacy and institutional debt resolution platform, specializing in shielding company promoters, startup founders, MSME directors, and high-net-worth individual guarantors from catastrophic commercial exposure. When commercial lenders invoke multi-crore personal guarantees under Section 128, our specialized banking litigation advocates take charge of your legal representation.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our commercial defense protocol incorporates comprehensive forensic sanction audits, identifying unconsented limit modifications under Section 133, failure of security supervision under Section 139, and procedural defects in DRT Original Applications. We coordinate multi-forum litigation defense across DRT, NCLT, and High Courts to prevent coercive property attachments, while simultaneously negotiating directly with bank Zonal Stressed Asset Committees and Chief Risk Officers under RBI compromise frameworks.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By combining formidable litigation defense with rigorous financial modeling, SettleLoans severs individual promoter liability from failed business entities, achieving authorized 45% to 65% debt haircuts and securing complete, unconditional cancellations of personal deeds of guarantee alongside the safe return of all deposited title deeds.
              </p>
            </section>

            {/* CompanySection Component rendered directly before FAQs */}
            <CompanySection />

            {/* Section 11: FAQ Accordion */}
            <section id="faqs" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-3">
                <HelpCircle className="w-6 h-6 text-[#1F5EFF]" />
                <span>11. Frequently Asked Questions: Personal Guarantee Invocation &amp; Settlement</span>
              </h2>

              <div className="space-y-3 my-6">
                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>What is personal guarantee invocation for a business loan in India?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    Personal guarantee invocation is a formal legal demand issued by a lending bank or financial institution under Section 128 of the Indian Contract Act, 1872, requiring an individual guarantor (usually a company director, promoter, or partner) to personally satisfy the unpaid debts of a defaulted business entity. Under Indian law, the guarantor's liability is co-extensive with the principal borrower, meaning the lender can proceed directly against the guarantor's personal assets without exhausting remedies against the corporate entity first, unless the guarantee deed provides otherwise.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>Can a bank seize a promoter's personal assets when a company defaults?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    A bank cannot arbitrarily seize personal assets overnight. To attach or liquidate personal property, the bank must follow statutory legal procedures: issuing a formal Demand Notice under Section 128 of the Contract Act, filing a Section 19 Original Application before the Debt Recovery Tribunal (DRT) for claims exceeding ₹20 Lakhs, or initiating Section 95 insolvency proceedings before the National Company Law Tribunal (NCLT). In DRT proceedings, banks must obtain formal attachment orders, which promoters can contest with strong legal defenses under Sections 133 to 141 of the Contract Act.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>What are the legal defenses available to a personal guarantor under the Indian Contract Act?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    Promoters possess powerful statutory defenses to establish complete or partial discharge: (1) Section 133: Discharge by variance in loan terms (e.g., enhanced credit limits, altered interest rates, or rescheduled tenures without the guarantor's express consent); (2) Section 134: Discharge by release of the principal debtor; (3) Section 135: Discharge when the creditor compounds with or gives time to the principal debtor without guarantor concurrence; (4) Section 139: Discharge when the creditor's act or omission impairs the guarantor's eventual remedy; and (5) Section 141: Loss of security held by the creditor, discharging the surety to the extent of the lost security value.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>How does the Supreme Court ruling in Lalit Kumar Jain v. Union of India affect personal guarantors?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    In the landmark judgment <em>Lalit Kumar Jain v. Union of India (2021)</em>, the Supreme Court held that the approval of a Resolution Plan for a corporate debtor under the Insolvency and Bankruptcy Code (IBC) does not automatically discharge personal guarantors from their independent contractual liabilities. Creditors retain the legal right to pursue personal guarantors simultaneously before the NCLT under Section 95 of the IBC or before the DRT, making proactive advocate-led compromise settlements essential to secure an explicit individual discharge.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>Can an invoked personal guarantee be settled through a One-Time Settlement (OTS)?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    Yes. Banks and NBFCs actively entertain One-Time Settlements (OTS) for personal guarantors under the Reserve Bank of India Master Directions on Compromise Settlements. Because protracted litigation in DRT and NCLT often spans 5 to 8 years with uncertain recovery and mounting provisioning requirements, lenders frequently agree to settle high-value commercial defaults with 45% to 65% principal haircuts when presented with a robust hardship proposal backed by legal defense.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>What is the difference between Corporate Moratorium (Section 14) and Personal Moratorium (Section 96)?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    Section 14 of the IBC imposes a moratorium strictly protecting the corporate debtor, staying suits and asset enforcement against company property but leaving personal guarantors exposed. In contrast, Section 96 of the IBC triggers an immediate "interim moratorium" on the filing of an insolvency application against the personal guarantor, staying all ongoing legal proceedings and debt enforcement actions against the individual's personal assets until the application is admitted or rejected.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>What essential clauses must be included in a personal guarantee OTS Sanction Letter?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    A legally watertight OTS sanction letter must contain: (1) Explicit naming of the personal guarantor and clear language discharging the Deed of Guarantee unconditionally upon payment; (2) Commitment to physically return and cancel the original guarantee deed and release all personal title deeds; (3) Mandatory timeline for the withdrawal of all pending DRT Section 19 OAs, NCLT Section 95 petitions, and Section 138 NI Act cases; (4) Absolute waiver of all penal interest and residual claims; and (5) Strict prohibition against assigning residual debt to Asset Reconstruction Companies (ARCs).
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>How does personal guarantee settlement impact commercial and individual CIBIL scores?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    Upon fulfillment of the OTS terms, the bank reports the account to credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) as 'Settled' with an outstanding balance of ₹0. While this causes a temporary credit score dip of 75 to 150 points, it halts compounding default status, removes suit-filed flags, and enables credit rebuilding above 750 within 18 to 24 months through disciplined secured credit management.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>What is the statutory penalty if a bank delays releasing personal property documents after settlement?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    Under RBI Circular RBI/2023-24/60, banks and regulated lending entities are legally mandated to return all original movable and immovable property documents, cancel registered charges, and deliver a formal No Dues Certificate within 30 calendar days of receiving full settlement payment. Any unjustified delay beyond 30 days makes the bank liable to pay statutory compensation of ₹5,000 per day of delay directly to the borrower or guarantor.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50/40 open:border-blue-200">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base">
                    <span>Can a bank declare a personal guarantor a Wilful Defaulter?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    Under RBI Master Circulars on Wilful Defaulters, a personal guarantor can only be declared a wilful defaulter if the lender proves intentional siphoning of funds, fraudulent asset transfers, or refusal to pay despite possessing demonstrable financial capacity. A guarantor cannot be declared a wilful defaulter simply due to genuine commercial enterprise failure. In case of arbitrary show-cause notices, legal counsel can challenge the Identification Committee's findings before the Review Committee and High Court.
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
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior advocate and financial strategist specializing in commercial debt litigation, Section 128 personal guarantee defenses, DRT proceedings, and RBI compromise settlement frameworks with over 12 years of banking dispute resolution experience.
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
                Do not risk your personal real estate and bank accounts. Engage senior debt defense advocates to challenge DRT notices, invoke Section 133–141 Contract Act discharge defenses, and negotiate a 45%–65% OTS.
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
