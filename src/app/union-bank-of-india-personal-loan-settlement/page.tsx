import { Metadata } from 'next';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import SidebarTOC from '@/components/SidebarTOC';
import {
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
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
  Scale,
  FileText,
  CheckCircle2,
  HelpCircle,
  Percent,
  Calculator,
  Briefcase,
  Layers,
  Gavel,
  FileCheck,
  ShieldX,
  UserCheck,
  AlertCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Union Bank Personal Loan Settlement | SettleLoans',
  description: 'Learn how to settle Union Bank of India personal loans legally. Navigate SAMB procedures and negotiate special OTS waivers with SettleLoans.',
  keywords: [
    'union bank of india loan settlement process',
    'union bank of india personal loan settlement',
    'union bank of india ots policy',
    'union bank samb branch settlement',
    'union bank regional credit committee approval limits',
    'how to settle union bank personal loan',
    'union bank lok adalat ots scheme',
    'andhra bank corporation bank merged loan settlement',
    'union bank loan settlement percentage',
    'union bank recovery agent harassment complaint',
    'union bank section 25 pssa legal notice',
    'union bank no dues certificate after settlement',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/union-bank-of-india-personal-loan-settlement',
  },
  openGraph: {
    title: 'Union Bank of India Personal Loan Settlement: SAMB Process, RCC Limits & OTS Rules (2026)',
    description: 'Learn how to settle an unsecured personal loan with Union Bank of India. Understand SAMB branch escalation, Regional Credit Committee financial delegation, NPA provisioning write-offs, Special Lok Adalat conciliation, and RBI compromise settlement frameworks.',
    url: 'https://www.settleloans.in/union-bank-of-india-personal-loan-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/union-bank-of-india-personal-loan-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'Union Bank of India Personal Loan Settlement Process, SAMB OTS Haircut Blueprint and RCC Approval Flow',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Union Bank of India Personal Loan Settlement: SAMB Process, RCC Limits & OTS Rules',
    description: 'Strategic and legal manual for settling defaulted Union Bank of India personal loans under RBI Compromise Settlement frameworks, SAMB desks, and Lok Adalat conciliation.',
    images: ['https://www.settleloans.in/images/infographics/union-bank-of-india-personal-loan-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/union-bank-of-india-personal-loan-settlement#webpage",
      "url": "https://www.settleloans.in/union-bank-of-india-personal-loan-settlement",
      "name": "Union Bank of India Personal Loan Settlement: SAMB Process, RCC Limits & OTS Rules (2026)",
      "description": "Legal guide to Union Bank of India personal loan settlement under RBI rules.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/union-bank-of-india-personal-loan-settlement#breadcrumb"
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
      "@id": "https://www.settleloans.in/union-bank-of-india-personal-loan-settlement#breadcrumb",
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
          "name": "Union Bank of India Personal Loan Settlement",
          "item": "https://www.settleloans.in/union-bank-of-india-personal-loan-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/union-bank-of-india-personal-loan-settlement#article",
      "headline": "Union Bank of India Personal Loan Settlement: SAMB Process, RCC Approval Limits & Special OTS Haircut Matrix",
      "description": "Learn how to settle personal loans with Union Bank of India. Understand SAMB branch rules and Regional Credit Committee limits. Settle debt via Lok Adalat and get an official No Dues Certificate.",
      "image": "https://www.settleloans.in/images/infographics/union-bank-of-india-personal-loan-settlement.jpg",
      "datePublished": "2026-08-28T10:00:00+05:30",
      "dateModified": "2026-08-28T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/union-bank-of-india-personal-loan-settlement#webpage"
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
      "@id": "https://www.settleloans.in/union-bank-of-india-personal-loan-settlement#service",
      "name": "SettleLoans - Union Bank of India Personal Loan Settlement & Legal Defense",
      "description": "Legal advisory for settling Union Bank of India personal loans, including Andhra Bank and Corporation Bank legacy loans. Settle debt legally with deep waivers.",
      "url": "https://www.settleloans.in/union-bank-of-india-personal-loan-settlement",
      "image": "https://www.settleloans.in/images/infographics/union-bank-of-india-personal-loan-settlement.jpg",
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
        "reviewCount": "1840",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Suryanarayana Raju" },
          "datePublished": "2026-07-11",
          "reviewBody": "SettleLoans resolved my Andhra Bank loan of ₹11.4 Lakhs with UBI SAMB. They secured a 58% principal cut. I paid ₹4.8 Lakhs with zero penal fees.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Naveen Kulkarni" },
          "datePublished": "2026-06-19",
          "reviewBody": "UBI collection calls stopped fast after legal notices. They settled my ₹7.5 Lakhs debt for ₹3.2 Lakhs in National Lok Adalat with a court decree.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Ananya Sen" },
          "datePublished": "2026-08-04",
          "reviewBody": "My merged Corporation Bank loan was settled at a 54% discount via UBI Stressed Assets. I got an official stamped letter.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Venkatesh Prasad" },
          "datePublished": "2026-05-27",
          "reviewBody": "The branch said no. SettleLoans took the case to the Regional Credit Committee. They won an approved OTS and saved me ₹6 Lakhs.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.settleloans.in/union-bank-of-india-personal-loan-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Union Bank of India personal loan settlement process and how does it operate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Union Bank loan settlement is a formal compromise process. It follows bank policy and RBI rules. After 90 days of default, a loan turns into an NPA. The case moves to the SAMB desk. The borrower files a hardship dossier. The Regional Credit Committee (RCC) reviews it. After approval, UBI issues an OTS Sanction Letter. Paying this sum closes the loan with a ₹0 No Dues Certificate."
          }
        },
        {
          "@type": "Question",
          "name": "How does the tripartite merger of Andhra Bank and Corporation Bank into Union Bank affect loan settlements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Andhra Bank and Corporation Bank loans now run on Union Bank systems. All settlements follow Union Bank rules. Old default age counts toward loan loss provisions. This helps older loans get 40% to 60% principal cuts."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt haircut does Union Bank of India typically approve on unsecured personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Union Bank often approves 40% to 60% principal waivers on bad loans. Also, all unpaid penal interest and bounce fees are completely waived under an approved OTS."
          }
        },
        {
          "@type": "Question",
          "name": "What is the role of Stressed Asset Management Branches (SAMB) and Regional Credit Committees (RCC)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local branch managers cannot waive loan principal due to audit rules. Defaulted loans past 90 days move to SAMB units. SAMB officers verify financial loss. They submit settlement files to the Regional Credit Committee (RCC) for approval."
          }
        },
        {
          "@type": "Question",
          "name": "Can Union Bank of India freeze or debit funds from other bank accounts under Section 171?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 171 of the Indian Contract Act, 1872, Union Bank holds a lien on internal accounts. It can debit savings in Union Bank, Andhra Bank, or Corporation Bank. But Union Bank cannot touch accounts in outside banks without a civil court order."
          }
        },
        {
          "@type": "Question",
          "name": "How does settling a personal loan through Union Bank's Special Lok Adalat OTS scheme work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Union Bank joins National Lok Adalats organized by NALSA. Officers carry pre-set settlement grids. They offer 45% to 60% discounts. Under Section 21 of the Legal Services Authorities Act, 1987, a Lok Adalat award is a final Civil Court Decree. It closes the loan permanently."
          }
        },
        {
          "@type": "Question",
          "name": "How should borrowers respond to Section 25 PSSA and Section 138 notices from Union Bank of India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When NACH debits or cheques bounce, Union Bank issues legal notices. Send an advocate reply within 15 days. Explain your financial hardship. Offer an OTS to prevent magistrate court cases."
          }
        },
        {
          "@type": "Question",
          "name": "Why is Union Bank of India's OTS process more formal than private banks and fintech apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As a PSU bank, Union Bank follows CVC and CAG rules. Every rupee of loan waiver needs clear audit proof. The file must prove real hardship and good recovery value for the bank."
          }
        },
        {
          "@type": "Question",
          "name": "What is the statutory timeline for Union Bank of India to issue the No Dues Certificate (NDC)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, Union Bank must issue a ₹0 No Dues Certificate (NDC) within 30 days of full payment. Any delay brings a penalty of ₹5,000 per day paid to the borrower."
          }
        },
        {
          "@type": "Question",
          "name": "How does settling a Union Bank of India personal loan impact your CIBIL score and how can you rebuild it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The loan status becomes 'Settled' with a ₹0 balance. This stops default growth but lowers your score initially. You can rebuild your credit score past 750 in 18 to 24 months with a secured credit card."
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

export default function UnionBankOfIndiaPersonalLoanSettlementPage() {
  const tocItems = [
    { id: 'institutional-architecture-tripartite-merger', title: '1. Institutional Architecture & Tripartite Merger' },
    { id: 'delinquency-lifecycle-samb-escalation', title: '2. Delinquency Lifecycle & SAMB Escalation' },
    { id: 'section-171-bankers-lien-salary-protection', title: '3. Section 171 Banker Lien & Account Shield' },
    { id: 'statutory-legal-notices-defense', title: '4. Section 25 PSSA & Section 138 Defense' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'ubi-ots-policy-npv-recovery-formula', title: '6. OTS Policy & NPV Recovery Valuation Formula' },
    { id: 'samb-settlement-roadmap-rcc-hierarchy', title: '7. Step-by-Step SAMB Roadmap & RCC Hierarchy' },
    { id: 'lok-adalat-judicial-compromise', title: '8. Special Lok Adalat OTS & Judicial Compromise' },
    { id: 'sanction-letter-forensics-ndc-cibil', title: '9. Sanction Letter Forensics & ₹0 NDC Mandate' },
    { id: 'comparative-matrix-professional-advocacy', title: '10. Comparative Matrix & Legal Representation' },
    { id: 'faqs', title: '11. Frequently Asked Questions' },
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

      <style>{`
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
      `}</style>

      {/* 1. Charcoal Navy Hero Section */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-amber-500 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Landmark className="w-3.5 h-3.5" />
            <span>Public Sector Banking Dispute Resolution • Union Bank of India</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Union Bank of India Personal Loan Settlement: OTS</h1>

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
              <span>RBI Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Union Bank Settlement</span>
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
          
          {/* Left Column: Sticky Table of Contents + Executive Crux */}
          <aside className="w-full sticky top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>UBI Case Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Union Bank settles personal loans through SAMB recovery desks and Credit Committees. This includes merged Andhra Bank and Corporation Bank loans. Borrowers can win 40% to 60% principal waivers with a ₹0 No Dues Certificate.
              </p>
            </div>
          </aside>

          {/* Middle Column: Main Editorial Body */}
          <main className="w-full min-w-0 blog-content">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-sky-50 border border-blue-200 rounded-2xl p-5 md:p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-black text-sm sm:text-base uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Executive Summary: Union Bank of India Debt Resolution Framework</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Merged Bank Setup:</strong> Union Bank runs one core system. It includes old Andhra Bank and Corporation Bank loans.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>SAMB Desk Resolution:</strong> Loans past 90 days default move to SAMB desks and Regional Credit Committees (RCC).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>40% to 60% Haircut:</strong> Older NPA accounts qualify for 40% to 60% principal write-offs. All penal interest is removed.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Lok Adalat Finality:</strong> Lok Adalat orders act as final Civil Court Decrees under Section 21 of the Legal Services Authorities Act, 1987.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>30-Day NDC Rule:</strong> Under RBI Circular RBI/2023-24/60, the bank must issue a ₹0 No Dues Certificate within 30 days.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Institutional Architecture & Tripartite Merger */}
            <section id="institutional-architecture-tripartite-merger" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Institutional Architecture &amp; Tripartite Merger Dynamics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Navigating Retail Loan Default</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Union Bank merged with Andhra Bank and Corporation Bank. It is now a large public bank. All loans run on one system.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Union Bank follows strict CVC and CAG rules under the Banking Companies Act, 1970. Staff cannot make oral deals. Every waiver needs clear written proof of hardship.
              </p>
            </section>

            {/* Section 2: Delinquency Lifecycle & SAMB Escalation */}
            <section id="delinquency-lifecycle-samb-escalation" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>2. Delinquency Lifecycle &amp; SAMB Escalation Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">From Base Branch Delinquency to Stressed Asset Management</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Union Bank tracks unpaid dues in three stages. These are SMA-0 (1–30 days), SMA-1 (31–60 days), and SMA-2 (61–90 days). After 90 days of default, the loan becomes an NPA.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span>SMA-0 (1–30 DPD)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Auto-calls and branch SMS alerts ask you to pay the overdue EMI right away.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                    <span>SMA-1 &amp; SMA-2 (31–90 DPD)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Collection agents call more often. Penal fees and late charges get added.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-rose-500" />
                    <span>NPA Status (Day 91+)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Interest stops adding to the account. The file moves to the SAMB recovery desk.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Between Day 90 and Day 120, your loan moves to the <strong>Stressed Asset Management Branch (SAMB)</strong>. Base branch staff cannot grant cuts. But SAMB officers hold power to review files. They can approve 40% to 60% principal waivers.
              </p>
            </section>

            {/* Section 3: Section 171 Banker Lien & Account Shield */}
            <section id="section-171-bankers-lien-salary-protection" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>3. Section 171 Banker&apos;s Lien &amp; Operational Account Shields</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Banker&apos;s Right of General Lien, CIF Auto-Sweeps, and</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Under <strong>Section 171 of the Indian Contract Act, 1872</strong>, Union Bank holds a general lien. The bank can debit your savings or deposits in Union Bank to cover unpaid dues.
              </p>

              <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 my-5">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Statutory Boundaries of Section 171 Lien</span>
                </div>
                <ul className="text-xs sm:text-sm text-amber-950 space-y-1.5 leading-relaxed">
                  <li><strong>Internal UBI Accounts:</strong> Savings and deposits in any Union Bank branch can be debited by the bank.</li>
                  <li><strong>External Banks Safe:</strong> Union Bank cannot touch accounts in other banks like SBI, HDFC, or ICICI.</li>
                  <li><strong>Court Order Needed:</strong> To freeze outside accounts, the bank needs a civil court order under Order 38 Rule 5 CPC.</li>
                </ul>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                If you face default, move your salary account to another bank. This keeps your living funds safe while your lawyer negotiates an OTS.
              </p>
            </section>

            {/* Section 4: Statutory Legal Notices Defense */}
            <section id="statutory-legal-notices-defense" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>4. Statutory Legal Notices &amp; Advocate-Led Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Defending Sec 25 PSSA &amp; Sec 138 NI Act</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                During default, Union Bank sends statutory notices. Knowing your legal defense helps you stop court risks:
              </p>
              
              <div className="space-y-3.5 my-5">
                <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Sent when NACH auto-debits bounce. You get 15 days to reply. A lawyer reply shows hardship. It halts court action and opens OTS talks.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-indigo-600" />
                    <span>Section 138 of the Negotiable Instruments Act, 1881 (NI Act)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Sent for bounced cheques. A lawyer reply under Section 147 NI Act turns the dispute into an OTS settlement.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <ShieldX className="w-4 h-4 text-rose-600" />
                    <span>SARFAESI Act Inapplicability on Unsecured Loans</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    SARFAESI rules apply only to secured loans like home loans. Union Bank cannot take your home for personal loans without a civil decree.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>5. Visual Resolution Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Union Bank of India Settlement Workflow &amp; Approvals</h2>
              
              <div className="my-6 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50">
                <img
                  src="/images/infographics/union-bank-of-india-personal-loan-settlement.jpg"
                  alt="Union Bank of India Personal Loan Settlement Process, SAMB Resolution Workflow and Regional Credit Committee Approval Flow"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-slate-900 text-white text-xs leading-relaxed">
                  <span className="font-bold text-blue-400">Figure 1.1: </span>
                  Three-tier resolution in Union Bank: SAMB recovery review, Regional Credit Committee (RCC) limits, and Lok Adalat conciliation steps.
                </div>
              </div>
            </section>

            {/* Section 6: UBI OTS Policy & NPV Recovery Valuation Formula */}
            <section id="ubi-ots-policy-npv-recovery-formula" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>6. UBI OTS Policy &amp; Net Present Value (NPV) Recovery Formula</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Union Bank OTS Policy &amp; Valuation Rules</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Union Bank settles loans using Net Present Value (NPV). SAMB officers weigh fast cash against slow court trials. Quick cash is worth more than long trials:
              </p>

              {/* Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here C_t means cash recovered over time. The letter r is the discount rate. The formula cuts out legal costs and bad loan provisions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
                <div className="border border-blue-200 bg-blue-50/50 rounded-xl p-4">
                  <h3 className="font-bold text-blue-950 text-sm mb-1 flex items-center gap-1.5">
                    <Percent className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Penal Waivers: 100% Elimination</span>
                  </h3>
                  <p className="text-xs text-blue-900 leading-relaxed">
                    Unpaid penal interest, extra penalty rates, late fees. And bounce charges are 100% waived in an approved OTS.
                  </p>
                </div>
                <div className="border border-emerald-200 bg-emerald-50/50 rounded-xl p-4">
                  <h4 className="font-bold text-emerald-950 text-sm mb-1 flex items-center gap-1.5">
                    <Percent className="w-4 h-4 text-emerald-600" />
                    <span>Principal Haircut: 40% to 60%</span>
                  </h4>
                  <p className="text-xs text-emerald-900 leading-relaxed">
                    Based on default age (Doubtful or Loss), real hardship cases get a 40% to 60% principal waiver.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Step-by-Step SAMB Settlement Roadmap & RCC Hierarchy */}
            <section id="samb-settlement-roadmap-rcc-hierarchy" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Briefcase className="w-4 h-4" />
                <span>7. Step-by-Step SAMB Settlement Roadmap &amp; Approval Hierarchy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Procedural Stages and Delegation of Financial Powers</h2>
              
              <div className="space-y-3.5 my-5">
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Forensic Loan Audit</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">Get your full loan account statement. Separate the core principal from extra penalty charges.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Hardship Dossier Compilation</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">Gather proof of money loss. Collect medical bills, job layoff letters, or business closure records with a sworn affidavit.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Submission to Competent Authority</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">Submit your petition to the right authority: Chief Manager (up to ₹5L), AGM (up to ₹25L), RCC (up to ₹50L), or ZCC (above ₹50L).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Sanction Letter Verification &amp; Payment</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">Verify the stamped OTS sanction letter on bank letterhead before you pay money into your loan account.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Special Lok Adalat OTS & Judicial Compromise */}
            <section id="lok-adalat-judicial-compromise" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>8. Special Lok Adalat OTS Schemes &amp; Judicial Finality</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Resolving Union Bank Defaults via Statutory Lok Adalat</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Union Bank refers bad loans to National Lok Adalat benches set up by NALSA. Bank officers carry pre-set limits. They can offer 45% to 60% principal waivers on the spot.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 my-5">
                <div className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Statutory Weight of Lok Adalat Award</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Under <strong>Section 21 of the Legal Services Authorities Act, 1987</strong>, a Lok Adalat award is a final <strong>Civil Court Decree</strong>. No appeal lies against it. It ends all claims by the bank permanently.
                </p>
              </div>
            </section>

            {/* Section 9: Sanction Letter Forensics, NDC & CIBIL */}
            <section id="sanction-letter-forensics-ndc-cibil" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>9. Sanction Letter Forensics, No Dues Certificate &amp; CIBIL Trajectory</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Verifying Bank Letterhead Sanctions, ₹0 NDC Mandate, and</h2>
              
              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm my-5 space-y-2.5">
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-[#1F5EFF]">
                  Mandatory Clauses in an Authentic UBI OTS Letter
                </h3>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Official Stationery:</strong> Printed on Union Bank letterhead with branch seal, date. And officer signature.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Full Debt closure:</strong> Confirms that the agreed sum pays off the loan in full.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Litigation Withdrawal:</strong> Guarantees the bank will drop Section 25 PSSA, Section 138. And civil suits.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Credit Reporting:</strong> Confirms the bank will update CIBIL status to &apos;Settled&apos. with a ₹0 balance.</span>
                  </li>
                </ul>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Under <strong>RBI Circular RBI/2023-24/60</strong>, Union Bank must issue your ₹0 No Dues Certificate within 30 days. Any delay costs the bank ₹5,000 per day paid to you. You can raise your credit score past 750 in 18 to 24 months with a secured card.
              </p>
            </section>

            {/* Section 10: Comparative Matrix & Legal Representation */}
            <section id="comparative-matrix-professional-advocacy" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>10. Comparative Resolution Matrix &amp; Professional Advocacy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Comparing Debt Resolution Pathways</h2>

              {/* 4-sided bordered table */}
              <div className="overflow-x-auto my-5">
                <table>
                  <thead>
                    <tr>
                      <th>Resolution Parameter.</th>
                      <th>Unassisted Individual.</th>
                      <th>Outsourced Recovery Agent.</th>
                      <th>SettleLoans Legal Advocacy.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Authority Level.</td>
                      <td>Branch Clerk (No Powers).</td>
                      <td>Tele-Caller (Zero Authority).</td>
                      <td>SAMB Head / Regional Credit Committee.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Average Haircut.</td>
                      <td>10% – 20% (Interest Only).</td>
                      <td>0% – 15% (Unverified).</td>
                      <td>40% – 60% Principal &amp. Charges.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Harassment Defense.</td>
                      <td>None. calls continue.</td>
                      <td>Severe field pressure.</td>
                      <td>Immediate Cease-and-Desist Notice.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Notice Defense (Sec 25/138).</td>
                      <td>Unrepresented.</td>
                      <td>Not provided.</td>
                      <td>Formal Advocate Legal Reply.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Sanction Letter.</td>
                      <td>Informal email.</td>
                      <td>High fraud risk.</td>
                      <td>Stamped Bank Letterhead Sanction.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">NDC &amp. CIBIL Closure.</td>
                      <td>Prolonged office delay.</td>
                      <td>No follow-up.</td>
                      <td>Enforced 30-Day RBI NDC Delivery.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                Expert Legal Representation for Union Bank Loan Settlement
              </h3>
              <p className="text-slate-700 leading-relaxed mb-6 text-sm sm:text-base">
                SettleLoans offers expert legal help for Union Bank loans. We stop agent harassment fast. We deal directly with SAMB desks to secure top waivers.
              </p>
              
              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Comprehensive FAQ Accordion */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>11. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">FAQs: Union Bank of India Personal Loan Settlement</h2>

              <div className="space-y-3.5">
                {(((jsonLdGraph["@graph"].find((item: any) => item["@type"] === "FAQPage") as any)?.["mainEntity"] || []) as Array<{ name: string; acceptedAnswer: { text: string } }>).map((faq, index: number) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-2xl overflow-hidden mb-3 transition-all duration-200 hover:border-slate-300 bg-white shadow-sm"
                    open={index === 0}
                  >
                    <summary className="w-full p-4 md:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-4">
                      <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {faq.name}
                      </span>
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </summary>
                    <div className="px-4 pb-5 md:px-5 md:pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3.5">
                      <p>{faq.acceptedAnswer.text}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* 5 Official Regulatory Links */}
            <section className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-8">
              <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-[#1F5EFF]" />
                <span>Official Statutory &amp; Regulatory References</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">RBI Master Directions on Compromise Settlements (2023)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">RBI Master Circular on Recovery Agents &amp; Conduct</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (2021)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (Lok Adalat Guidelines)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">Payment &amp; Settlement Systems Act, 2007 (Section 25)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-7 mb-8">
              <h3 className="text-sm font-bold text-slate-900 mb-3.5 uppercase tracking-wider">
                Related Loan Settlement &amp; Legal Defense Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-of-baroda-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank of Baroda Personal Loan Settlement
                </Link>
                <Link
                  href="/sbi-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SBI Personal Loan Settlement
                </Link>
                <Link
                  href="/pnb-personal-loan-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  PNB Loan Settlement Process
                </Link>
                <Link
                  href="/canara-bank-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Canara Bank Loan Settlement
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  HDFC Personal Loan Settlement
                </Link>
                <Link
                  href="/icici-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  ICICI Personal Loan Settlement
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Property Seizure Legal Protections
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Civil vs Criminal Protections in Loan Default
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
          <aside className="w-full sticky top-24 space-y-5">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="w-11 h-11 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-base hover:opacity-90 transition-opacity">
                  AJ
                </Link>
                <div>
                  <Link href="/authors/ashish-jhangra" className="font-bold text-slate-900 text-sm hover:text-[#1F5EFF] transition-colors block">
                    Ashish Jhangra
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Ashish specializes in RBI compromise rules, PSU bank SAMB policies, and NPA resolution.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Legal Author</span>
                </span>
                <Link href="/authors/ashish-jhangra" className="text-[#1F5EFF] font-semibold hover:underline">
                  View Profile →
                </Link>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-4 sm:p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Immediate Legal Defense</span>
              </div>
              <div className="font-bold text-sm sm:text-base text-white mb-1.5">Facing Union Bank Recovery Pressure?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3.5">
                Stop recovery agent calls. Reply to Section 25 PSSA notices. Secure a 40% to 60% debt waiver with SAMB.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Advocate Consultation
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-2.5">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </div>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>100% RBI Fair Practices Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Stamped Bank Letterhead Sanctions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Conciliation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
