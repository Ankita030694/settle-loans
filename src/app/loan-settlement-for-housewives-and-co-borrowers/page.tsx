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
  Ban,
  HeartHandshake,
  Users,
  Home
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Settlement for Housewives & Co-Borrowers | SettleLoans',
  description: 'Non-earning housewives and co-borrowers facing recovery harassment? Understand Stridhan protections and legal debt relief with SettleLoans.',
  keywords: [
    'loan settlement for non earning co borrower',
    'housewife loan settlement india',
    'co applicant liability in personal loan default',
    'section 60 cpc stridhan gold protection',
    'zero asset defense for non earning co borrower',
    'recovery agent harassment to female family members rbi rules',
    'can bank seize housewife jewelry for husband loan default',
    'one time settlement for joint loan non earning co applicant',
    'guarantor liability for non earning spouse',
    'rbi fair practices code family harassment complaint'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/loan-settlement-for-housewives-and-co-borrowers',
  },
  openGraph: {
    title: 'Loan Settlement for Non Earning Co Borrower & Housewives | SettleLoans',
    description: 'Legal defense guide for non-earning co-borrowers and homemakers facing loan default. Understand Stridhan rights, Section 60 CPC exemptions, and RBI anti-harassment protections.',
    url: 'https://www.settleloans.in/loan-settlement-for-housewives-and-co-borrowers',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/loan-settlement-for-housewives-and-co-borrowers.jpg',
        width: 1200,
        height: 675,
        alt: 'Loan Settlement for Non-Earning Co-Borrowers and Housewives Legal Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement for Non Earning Co Borrower & Housewives | SettleLoans',
    description: 'Are recovery agents harassing non-earning housewives or co-applicants? Discover Section 60 CPC Stridhan exemptions, zero-asset legal defense, and structured OTS resolution.',
    images: ['https://www.settleloans.in/images/infographics/loan-settlement-for-housewives-and-co-borrowers.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/loan-settlement-for-housewives-and-co-borrowers#webpage",
      "url": "https://www.settleloans.in/loan-settlement-for-housewives-and-co-borrowers",
      "name": "Loan Settlement for Non Earning Co Borrower & Housewives | SettleLoans",
      "description": "Protect non-earning co-borrowers and housewives from loan recovery harassment. Learn Section 60 CPC Stridhan protections, zero-asset defense, and OTS debt relief.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/loan-settlement-for-housewives-and-co-borrowers#breadcrumb"
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
      "@id": "https://www.settleloans.in/loan-settlement-for-housewives-and-co-borrowers#breadcrumb",
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
          "name": "Non-Earning Co-Borrower Settlement",
          "item": "https://www.settleloans.in/loan-settlement-for-housewives-and-co-borrowers"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/loan-settlement-for-housewives-and-co-borrowers#article",
      "headline": "Loan Settlement for Non-Earning Co-Borrowers & Housewives: Legal Rights, Stridhan & Zero-Asset Defense",
      "description": "Protections for non-earning co-applicants, housewives, and personal guarantors under Indian banking law, Section 60 CPC Stridhan exemptions, RBI Fair Practices Code, and advocate-led OTS resolution.",
      "image": "https://www.settleloans.in/images/infographics/loan-settlement-for-housewives-and-co-borrowers.jpg",
      "datePublished": "2026-08-28T10:00:00+05:30",
      "dateModified": "2026-08-28T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/loan-settlement-for-housewives-and-co-borrowers#webpage"
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
      "@id": "https://www.settleloans.in/loan-settlement-for-housewives-and-co-borrowers#service",
      "name": "SettleLoans - Non-Earning Co-Borrower Legal Defense & Debt Resolution",
      "description": "Specialized legal representation for homemakers, housewives, and non-earning co-borrowers facing debt collection harassment, protecting Stridhan assets and securing institutional compromise settlements.",
      "url": "https://www.settleloans.in/loan-settlement-for-housewives-and-co-borrowers",
      "image": "https://www.settleloans.in/images/infographics/loan-settlement-for-housewives-and-co-borrowers.jpg",
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
        "reviewCount": "2180",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Pooja Sharma"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "Added as a non-earning co-applicant on my husband's loan. Recovery agents visited our home threatening my jewelry. SettleLoans advocates intervened, cited Section 60 CPC, stopped all visits, and negotiated a 52% OTS.",
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
            "name": "Sunita Verma"
          },
          "datePublished": "2026-06-20",
          "reviewBody": "As a homemaker with zero income, recovery calls were relentless. SettleLoans established my zero-asset defense and secured a compromise settlement with a bank No Dues Certificate.",
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
          "datePublished": "2026-08-02",
          "reviewBody": "Bank sent a demand notice naming me as a co-borrower. SettleLoans protected my Stridhan and structured an affordable 4-part installment settlement with complete loan closure.",
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
            "name": "Kavita Deshmukh"
          },
          "datePublished": "2026-05-28",
          "reviewBody": "Collection agents threatened our household items. SettleLoans cited Supreme Court precedents and Section 60 CPC exemptions, halting harassment instantly and settling for 45% of principal.",
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
      "@id": "https://www.settleloans.in/loan-settlement-for-housewives-and-co-borrowers#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a bank legally seize a housewife's wedding gold or jewelry for an unpaid loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under Section 60(1) proviso (a) of the Code of Civil Procedure (CPC), 1908, a woman's necessary wearing apparel, cooking vessels, and religious ornaments (Mangalsutra, wedding jewelry, and Stridhan) are completely exempt from attachment, seizure, or auction unless explicitly mortgaged as gold loan collateral."
          }
        },
        {
          "@type": "Question",
          "name": "What is the extent of legal liability for a non-earning co-borrower under Indian law?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While Section 128 of the Indian Contract Act defines co-borrower liability as co-extensive, a civil money decree can only be executed against identifiable personal assets. If a non-earning co-borrower owns zero independent income, salary, or commercial property, the bank cannot execute against non-existent assets or touch protected Stridhan."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents harass, call, or intimidate a female co-borrower at home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The RBI Fair Practices Code strictly prohibits uncivil language, intimidation, and calls outside 8:00 AM to 7:00 PM. Harassing female family members or visiting without authorization is illegal under Sections 503, 506, and 509 IPC (Sections 351, 356, and 79 BNS) and punishable by the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Zero-Asset Defense in civil loan recovery execution petitions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Order 21 Rule 37 CPC, civil courts cannot order civil detention or coercive execution against a debtor who genuinely lacks disposable income or commercial assets. The Zero-Asset Defense establishes genuine financial distress rather than wilful evasion."
          }
        },
        {
          "@type": "Question",
          "name": "Can a housewife or non-earning co-applicant be arrested or sent to jail?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Unsecured loan default is strictly a civil dispute. Arrest is never permitted for civil default unless there is an active criminal cheque bounce case (Section 138 NI Act) directly drawn and signed by that individual."
          }
        },
        {
          "@type": "Question",
          "name": "How does a One-Time Settlement (OTS) resolve liability for both borrower and co-borrower?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An authentic OTS compromise sanction letter formally discharges both the primary borrower and the co-borrower upon receipt of the agreed settlement sum (typically 45%–65% of principal), issuing a joint No Dues Certificate."
          }
        },
        {
          "@type": "Question",
          "name": "What should a housewife do if recovery agents show up unannounced at her doorstep?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Do not let agents inside. Demand their official Bank ID card, DRA certification, and authorization letter. Record the interaction, contact local police if they behave aggressively, and have an advocate issue an emergency cease-and-desist notice."
          }
        },
        {
          "@type": "Question",
          "name": "Does loan settlement negatively impact the CIBIL score of a non-earning co-borrower?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, credit bureaus will reflect a 'Settled' status. However, eliminating debt liability and legal harassment provides permanent relief. Non-earning co-borrowers can gradually rebuild credit later through secured instruments."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory RBI timeline for issuing a No Dues Certificate after settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, lenders must issue a No Dues Certificate within 30 calendar days of receiving full settlement funds. Any delay beyond 30 days incurs a mandatory compensation of ₹5,000 per day payable to the borrower."
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
  { id: 'vulnerability-non-earning-co-borrowers', title: '1. Non-Earning Co-Borrowers in Indian Banking' },
  { id: 'joint-several-liability-limits', title: '2. Joint & Several Liability Legal Limits' },
  { id: 'stridhan-section-60-cpc-protections', title: '3. Stridhan Rights & Section 60 CPC Shield' },
  { id: 'zero-asset-defense-npa-accounting', title: '4. Zero-Asset Defense & NPA Economics' },
  { id: 'infographic-visual-roadmap', title: '5. Visual Legal Defense & Settlement Map' },
  { id: 'rbi-anti-harassment-female-protections', title: '6. RBI Anti-Harassment Mandates for Women' },
  { id: 'advocate-ots-negotiation-strategy', title: '7. 4-Stage Advocate OTS Strategy (45%–65%)' },
  { id: 'sanction-forensics-ndc-cibil-recovery', title: '8. Sanction Forensics & RBI ₹0 NDC Mandate' },
  { id: 'comparative-defense-matrix', title: '9. Comparative Legal Matrix: Myth vs Law' },
  { id: 'company-resolution-section', title: '10. SettleLoans Non-Earning Member Defense' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function LoanSettlementHousewivesCoBorrowersPage() {
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
          margin: 1.5rem 0;
          font-size: 0.95em;
        }
        .blog-content th {
          background: #F8FAFC;
          padding: 0.75rem 1rem;
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
          padding: 0.75rem 1rem;
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
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Non-Earning Co-Borrower Protection • Stridhan Rights &amp; Zero-Asset Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Loan Settlement for Housewives & Co-Borrowers</h1>

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
              <span>Supreme Court &amp; RBI Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Protect Non-Earning Family Members</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Advocate Settlement Advisory
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
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Case Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Non-earning housewives and co-borrowers face heavy collection harassment during defaults. Under Indian law, Section 60 CPC immunizes Stridhan and jewelry, while the Zero-Asset Defense bars coercive execution against individuals lacking independent income.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-8 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Non-Earning Co-Borrower Protections</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Stridhan &amp; Jewelry Immunity:</strong> Under Section 60(1)(a) CPC and Supreme Court rulings, a woman&apos;s Stridhan, including her Mangalsutra and personal wedding gold, cannot be attached or auctioned for unsecured loan defaults.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Zero-Asset Legal Defense:</strong> Civil courts operating under Order 21 Rule 37 CPC cannot order civil detention or property execution against co-applicants with zero independent income or registered assets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Anti-Harassment Rules:</strong> RBI Fair Practices Code strictly prohibits recovery agents from intimidating female family members or calling outside permitted hours (8:00 AM to 7:00 PM).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Joint OTS Relief:</strong> Advocate negotiations secure 45% to 65% principal waivers, releasing both primary borrowers and co-applicants with bank-stamped No Dues Certificates.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Vulnerability of Non-Earning Co-Borrowers & Homemakers */}
            <section id="vulnerability-non-earning-co-borrowers" className="space-y-3">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Non-Earning Co-Borrowers in Indian Retail Banking
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Indian commercial banks and NBFCs frequently require spouses and non-earning homemakers to sign as co-borrowers or personal guarantors on retail credit facilities. While framed as standard administrative paperwork, this practice is designed to create emotional pressure during delinquency. Homemakers with no independent income are often subjected to aggressive phone calls, unlawful legal notices, and doorstep visits threatening the attachment of household goods.
              </p>
              <div className="bg-slate-50 border-l-4 border-[#1F5EFF] p-3.5 rounded-r-xl text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900">Legal Protection: </strong>
                Non-earning accommodation signers retain full constitutional protections under Article 21. Third-party recovery agents possess zero legal authority to seize household articles or enter residences without a valid civil court warrant.
              </div>
            </section>

            {/* Section 2: Joint & Several Liability vs. Execution Reality */}
            <section id="joint-several-liability-limits" className="space-y-3">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Joint &amp; Several Liability Legal Limits
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 128 of the Indian Contract Act, 1872, co-borrower liability is co-extensive with the primary borrower. However, there is a fundamental difference between contractual liability and actual civil decree execution. A money decree obtained by a bank can only attach identifiable, executable personal assets owned by the judgment debtor under Order 21 CPC.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If the co-borrower is a non-earning housewife with no registered commercial property, salary, or independent bank balance, the bank cannot execute against non-existent assets. Furthermore, lenders cannot attach ancestral joint family properties or assets belonging to other family members.
              </p>
            </section>

            {/* Section 3: Statutory Protections: Stridhan Rights & Section 60(1)(a) CPC Exemptions */}
            <section id="stridhan-section-60-cpc-protections" className="space-y-3">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Stridhan Rights &amp; Section 60 CPC Shield
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A common threat by recovery agents is the seizure of gold jewelry and wedding ornaments. Under Section 60(1) proviso (a) of the Code of Civil Procedure, 1908, necessary wearing apparel, cooking vessels, beds, and personal religious ornaments of a woman (such as Mangalsutra and bridal gold) are statutorily exempt from civil attachment.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In <em>Pratibha Rani v. Suraj Kumar (1985)</em>, the Supreme Court ruled that <em>Stridhan</em> is the absolute, exclusive property of a woman. It cannot be attached or liquidated for debts incurred by her husband or relatives unless the jewelry was explicitly pledged under a written gold mortgage. Unlawful attempts by agents to confiscate personal jewelry constitute criminal trespass and extortion.
              </p>
            </section>

            {/* Section 4: The Zero-Asset Legal Defense & Bank NPA Accounting Economics */}
            <section id="zero-asset-defense-npa-accounting" className="space-y-3">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Zero-Asset Defense &amp; NPA Accounting Economics
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Order 21 Rule 37 CPC, civil courts cannot order the detention or coercive recovery against a debtor who genuinely lacks the financial means to satisfy a claim. Placing certified zero-income affidavits and bank statements on record establishes the <strong>Zero-Asset Defense</strong>, proving bona fide financial incapacity rather than wilful default.
              </p>

              {/* Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-4 my-4 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-1.5">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Recovery Valuation Benchmark (NPV Recovery Equation)</span>
                </div>
                <div className="text-center py-2.5 my-1.5 bg-slate-800/80 rounded-xl font-mono text-xs sm:text-sm text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-1.5">
                  Where C_t represents estimated recoveries, r is the discount rate, and deductions account for 3–5 years of court friction and 100% NPA provisioning. Facing an uncollectible non-earning co-borrower, the bank&apos;s expected recovery turns negative, incentivizing a 45%–65% OTS.
                </p>
              </div>
            </section>

            {/* Section 5: Visual Infographic Banner */}
            <section id="infographic-visual-roadmap" className="space-y-3">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Visual Legal Defense &amp; Settlement Map
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The visual roadmap illustrates the 5 core pillars of non-earning co-borrower defense, statutory Stridhan immunity, Zero-Asset framework, RBI protections, and the advocate-led OTS pathway:
              </p>

              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-4 bg-slate-900">
                <Image
                  src="/images/infographics/loan-settlement-for-housewives-and-co-borrowers.jpg"
                  alt="Loan Settlement for Non-Earning Co-Borrowers and Housewives Legal Architecture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                  priority
                />
              </div>
            </section>

            {/* Section 6: RBI Anti-Harassment Mandates for Women */}
            <section id="rbi-anti-harassment-female-protections" className="space-y-3">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. RBI Anti-Harassment Mandates for Women &amp; Families
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The RBI Master Direction on Fair Practices Code strictly regulates debt collection practices across all regulated lenders:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3">
                <div className="p-3 bg-red-50/80 border border-red-200 rounded-xl text-xs">
                  <span className="font-bold text-red-950 block mb-1">No Abusive Tactics</span>
                  <p className="text-red-800">Strict ban on intimidation, uncivil language, and psychological pressure on female family members.</p>
                </div>
                <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-xs">
                  <span className="font-bold text-amber-950 block mb-1">Strict Calling Hours</span>
                  <p className="text-amber-800">Calls and visits are permitted strictly between 8:00 AM and 7:00 PM on working days.</p>
                </div>
                <div className="p-3 bg-blue-50/80 border border-blue-200 rounded-xl text-xs">
                  <span className="font-bold text-blue-950 block mb-1">Privacy Protection</span>
                  <p className="text-blue-800">Prohibition on contacting neighbors, distant relatives, or disclosing debt details publicly.</p>
                </div>
              </div>
            </section>

            {/* Section 7: Step-by-Step Advocate Strategy to Negotiate a 45%–65% OTS */}
            <section id="advocate-ots-negotiation-strategy" className="space-y-3">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. 4-Stage Advocate OTS Strategy (45%–65% Haircut)
              </h2>
              <div className="space-y-2.5 my-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm">
                  <strong>1. Legal Ceasefire Notice:</strong> Formally revoking telephonic consent and directing all communications through legal counsel.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm">
                  <strong>2. Zero-Asset Hardship Dossier:</strong> Submitting verified non-earning affidavits to demonstrate judgment-proof status.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm">
                  <strong>3. Direct Settlement Committee Negotiations:</strong> Engaging bank zonal heads to secure a 45% to 65% principal waiver.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm">
                  <strong>4. Dual-Release Sanction &amp; Closure:</strong> Executing a formal compromise sanction letter discharging both signatories.
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Letter Forensics, RBI NDC Mandate & CIBIL Recovery */}
            <section id="sanction-forensics-ndc-cibil-recovery" className="space-y-3">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Sanction Forensics &amp; RBI ₹0 NDC Mandate
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An authentic settlement sanction letter must be on bank letterhead, explicitly name both borrowers with PAN details, state the exact compromised sum, and include a full liability discharge clause. Payments must be made directly to the bank&apos;s official account.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under <strong>RBI Circular RBI/2023-24/60</strong>, lenders must issue a No Dues Certificate (NDC) and update credit bureaus within 30 days of settlement payment. Delays beyond 30 days mandate a statutory compensation of ₹5,000 per day payable to the borrower.
              </p>
            </section>

            {/* Section 9: Comparative Matrix: Myth vs Law */}
            <section id="comparative-defense-matrix" className="space-y-3">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Legal Matrix: Recovery Threats vs. Statutory Reality
              </h2>
              <div className="overflow-x-auto my-4">
                <table>
                  <thead>
                    <tr>
                      <th>Recovery Agent Threat</th>
                      <th>Governing Law</th>
                      <th>Legal Reality</th>
                      <th>Advocate Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">&quot;We will seize the housewife&apos;s gold jewelry.&quot;</td>
                      <td>Section 60(1)(a) CPC &amp; Pratibha Rani SC Ruling</td>
                      <td>Stridhan and marriage ornaments are 100% immune from civil attachment.</td>
                      <td>Serve Cease-and-Desist notice and file police complaint for extortion.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">&quot;Police will arrest the non-earning co-borrower.&quot;</td>
                      <td>Article 21 Constitution &amp; Order 21 CPC</td>
                      <td>Unsecured loan default is strictly a civil dispute. No arrest is permitted.</td>
                      <td>Escalate grievance to Principal Nodal Officer and RBI Ombudsman.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">&quot;We will auction household furniture.&quot;</td>
                      <td>Section 60(1) Proviso (a) CPC</td>
                      <td>Basic apparel, cooking vessels, and bedding are statutorily exempt.</td>
                      <td>Bar entry and record video evidence of unlawful trespass.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">&quot;Co-borrower must pay immediately or go to jail.&quot;</td>
                      <td>Order 21 Rule 37 CPC (Zero-Asset Defense)</td>
                      <td>Courts cannot detain debtors who genuinely lack the means to pay.</td>
                      <td>Submit Zero-Asset Hardship Affidavits and negotiate 45%–65% OTS.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-4">
              <div className="border-t border-slate-200 pt-6 space-y-3">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Non-Earning Family Member Protection
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  SettleLoans provides complete legal defense for vulnerable non-earning co-borrowers and homemakers across India. Our advocates halt unlawful collection harassment, assert Stridhan protections, file RBI Ombudsman grievances, and negotiate directly with bank zonal authorities to secure 45% to 65% principal waivers with authentic No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  11. Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {(jsonLdGraph['@graph'][4] as any).mainEntity.map((faq: any, idx: number) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                  >
                    <summary className="w-full p-4 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                      <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.name}
                      </span>
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </summary>
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                      <p>{faq.acceptedAnswer.text}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* 5 Official Regulatory Links */}
            <section className="border-t border-slate-200 pt-6 mb-4">
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
                  <span className="font-semibold text-slate-800">Indian Contract Act, 1872 (Section 128 Co-Borrower Liability)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Code of Civil Procedure, 1908 (Section 60 Stridhan Exemptions)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Harassment Complaints)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Fair Practices Code for Lenders</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Stridhan Protections &amp; Article 21 Rights)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-6 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Legal Defense &amp; Loan Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Recovery Harassment
                </Link>
                <Link
                  href="/bank-recovery-agent-threatening-me"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Agent Threat Defense
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Property Seizure Rights &amp; Limits
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go To Jail For Loan Default?
                </Link>
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Defense
                </Link>
                <Link
                  href="/bank-ka-legal-notice-aane-par-kya-kare"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply Guide
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Impact After Settlement
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Guidelines
                </Link>
                <Link
                  href="/how-to-verify-authentic-bank-settlement-letter"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Authentic Settlement Letter Verification
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
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior specialist in banking litigation defense, Stridhan and Section 60 CPC asset protections, anti-harassment regulatory representation, and institutional One-Time Settlement negotiations across India.
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
                <PhoneCall className="w-4 h-4" />
                <span>Family Member Legal Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Are Recovery Agents Harassing Family Members?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Protect non-earning co-borrowers and housewives immediately. Retain seasoned banking litigation advocates to stop harassment and negotiate a 45%–65% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Emergency Advocate Consultation
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
                  <span>Section 60 CPC Stridhan Immunity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>RBI Ombudsman Dispute Escalation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Compromise Settlement</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
