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
  Factory,
  Briefcase,
  Layers,
  MapPin,
  TrendingDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement in Ludhiana | Debt Settlement Advocates Punjab',
  description: 'Facing debt distress in Ludhiana, Jalandhar, or Amritsar? Consult top debt settlement advocates in Ludhiana Punjab for factory owners, MSMEs, and salaried professionals to secure 40%–65% bank OTS waivers.',
  keywords: [
    'debt settlement advocates in ludhiana punjab',
    'personal loan settlement ludhiana',
    'business loan settlement punjab',
    'loan settlement lawyer ludhiana',
    'MSME debt resolution focal point ludhiana',
    'unsecured loan compromise ots punjab',
    'bank recovery harassment lawyer ludhiana',
    'cheque bounce advocate judicial courts ludhiana',
    'textile factory loan settlement punjab',
    'rbi debt settlement guidelines punjab'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-ludhiana',
  },
  openGraph: {
    title: 'Personal Loan Settlement in Ludhiana | Debt Settlement Advocates Punjab',
    description: 'Strategic legal defense and bank loan settlement for factory owners, textile manufacturers, and salaried borrowers across Ludhiana and Punjab. Stop harassment, challenge illegal notices, and negotiate institutional OTS compromises.',
    url: 'https://www.settleloans.in/personal-loan-settlement-ludhiana',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-ludhiana.jpg',
        width: 1200,
        height: 675,
        alt: 'Personal Loan and Business Debt Settlement in Ludhiana Punjab Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Loan Settlement in Ludhiana | Debt Settlement Advocates Punjab',
    description: 'Expert debt settlement advocates in Ludhiana Punjab for industrial manufacturers, MSMEs, and salaried workers. Secure 40%–65% bank OTS waivers and complete legal immunity.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-ludhiana.jpg'],
  },
};

const faqsList = [
  {
    name: "Why should industrial manufacturers in Ludhiana choose legal debt settlement over rolling credit?",
    answer: "Industrialists in Ludhiana's textile, hosiery, and auto-parts sectors often take fresh unsecured personal or business loans to service working capital shortfalls. A legally structured One-Time Settlement (OTS) halts penal interest accrual, stops coercive recovery agency visits to factory premises, and allows business owners to resolve unsecured obligations at a 40% to 65% principal waiver based on audited cash flow realities."
  },
  {
    name: "Can banks in Ludhiana seize factory machinery or ancestral land for an unsecured personal loan?",
    answer: "No. Unsecured personal and collateral-free business loans carry no hypothecation or equitable mortgage over industrial machinery or commercial property. Under Section 60 of the Code of Civil Procedure (CPC), tools of artisans, essential machinery, and primary residential dwellings are statutorily exempt from direct attachment without a full civil decree."
  },
  {
    name: "What legal protection does the Punjab Relief of Indebtedness Act offer distressed borrowers?",
    answer: "The Punjab Relief of Indebtedness Act, 1934, alongside state usury laws, protects borrowers from exploitative interest rates and regulates coercive recovery practices. Combined with Reserve Bank of India Master Directions, it empowers advocates to challenge inflated ledger balances containing compounded penal charges during compromise negotiations."
  },
  {
    name: "How do debt settlement advocates handle Section 138 NI Act summons at Ludhiana Courts?",
    answer: "When lenders deposit undated security cheques resulting in a bounce, they file criminal complaints under Section 138 of the Negotiable Instruments Act at the Judicial Courts Complex in Ludhiana. Experienced advocates enter appearance, secure personal bail, dispute the claimed liability, and leverage Section 147 of the NI Act to compound and quash the case upon OTS execution."
  },
  {
    name: "How does a debt settlement advocate stop recovery agents from visiting factory premises in Focal Point or Sundar Nagar?",
    answer: "Upon executing a formal Vakalatnama, our advocates issue statutory Cease-and-Desist notices to the bank's Zonal Manager and Nodal Officer. Under RBI Master Directions on Outsourcing, lenders are legally mandated to route all debt communications exclusively through appointed legal counsel, immediately halting unauthorized doorstep visits."
  },
  {
    name: "What is the typical waiver percentage achievable in Ludhiana bank loan settlements?",
    answer: "Depending on delinquency vintage, documented financial hardship, and the bank's NPA provisioning category, unsecured personal loans, business loans, and credit card debts in Punjab typically settle between 40% and 60% of the total ledger balance, with complete waiver of accumulated penal interest."
  },
  {
    name: "How does Chandigarh DRT jurisdiction apply to loan disputes for Ludhiana business owners?",
    answer: "Debts Recovery Tribunal (DRT-1 and DRT-2) in Chandigarh holds jurisdiction over recovery matters in Punjab exceeding ₹20 Lakhs. For unsecured personal and business loans below ₹20 Lakhs, banks must approach Ludhiana District Civil Courts, where prolonged trial timelines incentivize lenders to accept an out-of-court OTS compromise."
  },
  {
    name: "What happens to CIBIL and Commercial CMR scores after completing a settlement in Punjab?",
    answer: "Upon remittance of the agreed settlement amount, the lender issues an official No Dues Certificate (NDC) within 30 days under RBI Circular RBI/2023-24/60 and updates credit bureaus with the status marked as 'Settled'. This extinguishes all civil liability, allowing borrowers to rebuild their credit profile over 12 to 24 months."
  },
  {
    name: "Can private fintech apps or NBFCs initiate arbitration in Mumbai or Delhi against Ludhiana residents?",
    answer: "Digital lenders often issue unilateral arbitration notices designating distant seats like Delhi or Mumbai. Our advocates challenge these proceedings under Supreme Court precedents (Perkins Eastman and TRF Ltd), compelling lenders to negotiate at local Punjab jurisdictions or withdraw frivolous claims."
  }
];

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-ludhiana#webpage",
      "url": "https://www.settleloans.in/personal-loan-settlement-ludhiana",
      "name": "Personal Loan Settlement in Ludhiana | Debt Settlement Advocates Punjab",
      "description": "Comprehensive legal and financial guide for personal and business loan settlement in Ludhiana, Jalandhar, and Amritsar. Learn how factory owners, MSMEs, and salaried workers resolve unsecured bank debts with expert legal advocacy under RBI Master Directions.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-loan-settlement-ludhiana#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-ludhiana#breadcrumb",
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
          "name": "Personal Loan Settlement Ludhiana",
          "item": "https://www.settleloans.in/personal-loan-settlement-ludhiana"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settlement-ludhiana#article",
      "headline": "Personal Loan Settlement in Ludhiana: Legal Rights, Industrial Defaults & Advocate-Led Bank OTS in Punjab",
      "description": "In-depth statutory breakdown of personal and MSME business debt resolution in Ludhiana, Punjab. Explains bank NPA provisioning rules, NPV recovery formulas, Section 138 NI Act defense, and institutional compromise procedures.",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-ludhiana.jpg",
      "datePublished": "2026-09-01T10:00:00+05:30",
      "dateModified": "2026-09-01T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-loan-settlement-ludhiana#webpage"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-ludhiana#service",
      "name": "SettleLoans Ludhiana & Punjab Debt Resolution Services",
      "description": "Premier legal defense and loan compromise advisory for industrial factory owners, MSME proprietors, and salaried employees facing personal loan defaults and recovery harassment in Ludhiana, Jalandhar, and Amritsar.",
      "url": "https://www.settleloans.in/personal-loan-settlement-ludhiana",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-ludhiana.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Feroze Gandhi Market, Near Judicial Courts Complex",
        "addressLocality": "Ludhiana",
        "addressRegion": "Punjab",
        "postalCode": "141001",
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
          "author": {
            "@type": "Person",
            "name": "Harpreet Singh Grewal"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "Our textile processing unit in Focal Point Ludhiana suffered export payment delays, leading to defaults on three unsecured business loans totaling ₹42 Lakhs. SettleLoans advocates intervened, halted recovery visits to our factory gates, appeared for a cheque bounce summons, and negotiated a structured OTS at a 52% waiver.",
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
            "name": "Raman Duggal"
          },
          "datePublished": "2026-08-02",
          "reviewBody": "As a sales manager in Ludhiana, I had accumulated ₹18 Lakhs across personal loans and credit cards. Collection agents were threatening to visit my office. SettleLoans served a Cease-and-Desist notice under RBI guidelines and settled all three accounts at a 55% discount with genuine No Dues Certificates.",
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
            "name": "Gurmeet Singh Bhatia"
          },
          "datePublished": "2026-06-19",
          "reviewBody": "Running an auto-component unit in Industrial Area B, our cash flows collapsed due to raw material inflation. We received arbitration notices from a Mumbai NBFC. Ashish Jhangra and his legal team challenged jurisdiction, defended us in Ludhiana courts, and secured an official compromise letter saving our business ₹26 Lakhs.",
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
            "name": "Simranjeet Kaur"
          },
          "datePublished": "2026-08-25",
          "reviewBody": "SettleLoans provides exceptional legal backing in Punjab. They stopped aggressive private recovery personnel who were harassing my family in Model Town, Ludhiana. Their advocates handled all banking correspondence and got my personal loan closed smoothly under official RBI OTS norms.",
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-ludhiana#faq",
      "mainEntity": faqsList.map((faq) => ({
        "@type": "Question",
        "name": faq.name,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
};

const tocItems = [
  { id: 'industrial-debt-crisis-ludhiana-punjab', title: '1. Industrial & Salaried Debt Crisis in Ludhiana' },
  { id: 'statutory-protections-punjab-relief-rbi', title: '2. Statutory Protections & Punjab Indebtedness Laws' },
  { id: 'civil-court-drt-jurisdiction-ludhiana', title: '3. Civil Courts & DRT Jurisdictions in Punjab' },
  { id: 'bank-npa-accounting-npv-recovery-formula', title: '4. Bank NPA Accounting & NPV Recovery Benchmark' },
  { id: 'infographic-ludhiana-debt-settlement', title: '5. Punjab Debt Settlement Framework Infographic' },
  { id: 'advocate-defense-negotiation-protocol', title: '6. Advocate-Led Tactical Defense Protocol' },
  { id: 'sanction-letter-forensics-waivers', title: '7. Sanction Letter Forensics & Bank Waivers' },
  { id: 'ndc-cibil-commercial-credit-repair', title: '8. NDC Issuance & CIBIL Commercial Repair' },
  { id: 'comparative-ludhiana-debt-matrix', title: '9. Comparative Protection Matrix for Punjab' },
  { id: 'settleloans-punjab-legal-framework', title: '10. SettleLoans Legal Defense Framework' },
  { id: 'faqs', title: '11. Frequently Asked Questions' }
];

export default function PersonalLoanSettlementLudhianaPage() {
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
        className="w-full border-b border-slate-700/80 pt-10 pb-8 md:pt-14 md:pb-11 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <Scale className="w-3.5 h-3.5" />
            <span>Debt Settlement Advocates • Ludhiana &amp; Punjab Industrial Belt</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Personal Loan Settlement in Ludhiana: <span className="text-[#3b82f6] md:text-[#60a5fa]">Top Debt Settlement Advocates in Punjab for Industrialists &amp; Salaried Borrowers</span>
          </h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-4 mb-6 flex flex-wrap items-center justify-center gap-4">
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
              <span>RBI Compromise Settlement &amp; Punjab Civil Law Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Consult Ludhiana Debt Advocates</span>
            </Link>
            <Link
              href="#industrial-debt-crisis-ludhiana-punjab"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Explore Settlement Process</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. Main 3-Column Content Layout */}
      <div className="w-full max-w-[1700px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)_290px] xl:grid-cols-[270px_minmax(0,1fr)_310px] 2xl:grid-cols-[290px_minmax(0,1fr)_330px] gap-6 xl:gap-8 items-start">
          
          {/* Left Column: Sticky Table of Contents */}
          <aside className="hidden lg:block w-full lg:sticky lg:top-24 space-y-4 h-fit self-start max-h-[calc(100vh-110px)] overflow-y-auto pr-1">
            <SidebarTOC items={tocItems} />
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#1F5EFF]" />
                <span>Punjab Jurisdiction Focus</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Covering legal defenses across Ludhiana District Courts, Focal Point industrial hubs, Jalandhar manufacturing units, Amritsar trade markets, and Chandigarh DRT benches.
              </p>
            </div>
          </aside>

          {/* Middle Column: Main Editorial Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm uppercase tracking-wider mb-4">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Debt Settlement in Ludhiana &amp; Punjab</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Industrial Manufacturing Debt Relief:</strong> Factory owners and textile entrepreneurs in Focal Point and Sundar Nagar can settle unsecured business and personal debts via 40% to 65% OTS waivers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Factory Gate Harassment Defense:</strong> Serving Cease-and-Desist notices halts unauthorized recovery agent visits to commercial sheds and residences under RBI Fair Practice codes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 138 NI Act Court Protection:</strong> Advocates enter appearance at Ludhiana Judicial Courts Complex, challenge ex-parte arbitration, and compound cheque bounce cases upon OTS execution.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Asset Immunity:</strong> Unsecured loans cannot trigger arbitrary seizure of factory machinery, tools of trade, or residential property under Section 60 of the Code of Civil Procedure (CPC).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Conclusive Legal Closure:</strong> Settlements conclude with authentic bank-stamped No Dues Certificates issued under RBI Master Directions, permanently extinguishing civil liability.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Industrial & Salaried Debt Crisis in Ludhiana & Punjab */}
            <section id="industrial-debt-crisis-ludhiana-punjab" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Industrial &amp; Salaried Debt Crisis in Ludhiana: Manufacturing Cycles &amp; Cash Flow Deficits
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Ludhiana serves as the manufacturing hub of Northern India, renowned for its textile mills in Focal Point, hosiery clusters in Sundar Nagar, bicycle manufacturing in Industrial Area B, and auto-parts foundries along the GT Road corridor. However, local manufacturers face extreme cash flow volatility. Extended 90-to-180-day buyer credit cycles, cancelled export consignments, and fluctuating raw material prices frequently trap MSMEs in severe working capital deficits.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When institutional cash credit (CC) and overdraft facilities reach their upper limits, factory proprietors routinely avail high-interest unsecured personal and business loans to meet immediate payroll and vendor obligations. Over time, debt servicing exceeds operational margins, creating a compounding trap where borrowers take fresh loans to pay older EMIs.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>The Punjab Industrial Reality</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  Most unsecured personal and business loan defaults in Ludhiana and Jalandhar stem from downstream corporate payment delays rather than willful default. Rolling fresh loans to sustain factory cash flow compounds liabilities; engaging debt settlement advocates enables structured compromise under RBI guidelines.
                </p>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Salaried professionals in Ludhiana and Jalandhar face comparable pressures due to sudden medical crises or corporate restructuring. When defaults happen, third-party recovery agencies initiate aggressive calls and unannounced visits. Borrowers must understand that loan default is strictly a civil contract matter, and established statutory protections exist under Indian and Punjab laws to prevent coercion.
              </p>
            </section>

            {/* Section 2: Statutory Protections & Legal Defences against Bank Harassment in Punjab */}
            <section id="statutory-protections-punjab-relief-rbi" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Protections &amp; Punjab Indebtedness Laws: Safeguards Against Coercive Recovery
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers in Punjab are safeguarded by both central banking regulations and state-specific statutory protections. The <em>Punjab Relief of Indebtedness Act, 1934</em> curbs usurious interest rates, limits penal compounding, and regulates debt enforcement, preventing lenders from inflating dues with arbitrary penalties.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 21 and Section 35A of the Banking Regulation Act, 1949, the RBI enforces mandatory codes of conduct through its <em>Master Direction on Outsourcing of Financial Services</em> and <em>Fair Practices Code</em>. These directives prohibit abusive collection tactics:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-3">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Key Statutory Safeguards Enforceable in Punjab</span>
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">1. Doorstep Visit Restrictions</p>
                    <p className="text-slate-600 mt-1">
                      Recovery agents cannot visit factories or residences without prior notice and authorization. Interactions are restricted between 8:00 AM and 7:00 PM and are barred during festivals or bereavement.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">2. Penal Protections under Bharatiya Nyaya Sanhita, 2023 (BNS)</p>
                    <p className="text-slate-600 mt-1">
                      Trespassing into commercial sheds or homes violates Section 329 BNS. Verbal abuse or threats of arrest constitute criminal intimidation under Section 351 BNS, and coercive cash demands constitute extortion under Section 308 BNS.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">3. Asset Exemptions under Section 60 CPC</p>
                    <p className="text-slate-600 mt-1">
                      Under Section 60 of the Code of Civil Procedure, 1908, the tools of artisans, essential industrial machinery, and primary residential properties are exempt from attachment for unsecured debt decrees.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">4. Supreme Court Rulings on Recovery Decency</p>
                    <p className="text-slate-600 mt-1">
                      In <em>ICICI Bank Ltd. v. Prakash Kaur (2007) 2 SCC 711</em>, the Supreme Court held that banks cannot deploy musclemen or intimidate borrowers, mandating adherence to formal civil procedure.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When agencies violate these norms, debt settlement advocates document infractions, petition the Banking Ombudsman, and initiate magistrate complaints, neutralizing creditor aggression.
              </p>
            </section>

            {/* Section 3: Civil Court & DRT Jurisdictions in Punjab */}
            <section id="civil-court-drt-jurisdiction-ludhiana" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Judicial Architecture: Civil Courts in Ludhiana &amp; Chandigarh DRT Jurisdictions
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lenders pursuing unsecured debts in Punjab must approach competent civil and criminal courts depending on the claim quantum and instruments involved.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For unsecured personal loans and credit cards, the primary forum is the <strong>Judicial Courts Complex in Ludhiana</strong>, where lenders utilize specific procedures:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <li>
                  <strong>Summary Suits under Order 37 CPC:</strong> Lenders file summary suits before the Civil Judge Senior Division (CJSD). Our advocates file Leave to Defend applications challenging inflated interest rates, converting summary claims into regular civil trials lasting several years.
                </li>
                <li>
                  <strong>Section 138 NI Act (Cheque Bounce Cases):</strong> Lenders deposit security cheques to initiate criminal complaints before the Judicial Magistrate First Class (JMFC). Advocates secure bail, dispute the debt quantum, and compound the offense under Section 147 NI Act once an OTS is executed.
                </li>
                <li>
                  <strong>Debts Recovery Tribunal (DRT Chandigarh):</strong> For claims of ₹20 Lakhs or higher under the RDB Act, banks approach DRT-1 or DRT-2 Chandigarh. Unsecured claims in DRT require detailed trial scrutiny.
                </li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-2">
                Additionally, fintech lenders often issue unilateral arbitration notices in distant cities. Following Supreme Court rulings in <em>Perkins Eastman (2020)</em> and <em>TRF Ltd. (2017)</em>, unilateral sole arbitrator appointments are void ab initio, and our advocates readily invalidate such proceedings.
              </p>
            </section>

            {/* Section 4: Bank NPA Accounting Realities & The NPV Recovery Valuation Formula */}
            <section id="bank-npa-accounting-npv-recovery-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank NPA Accounting &amp; The NPV Recovery Valuation Benchmark
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks agree to substantial OTS waivers due to mandatory RBI provisioning norms. Under RBI Prudential Norms (IRACP), unsecured loans are classified as Non-Performing Assets (NPAs) after 90 days of non-payment.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once an account becomes an NPA, lenders face strict capital provisioning:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Substandard NPA (Up to 12 Months):</strong> 15% mandatory provisioning on unsecured exposure.</li>
                <li><strong>Doubtful NPA Category 1 (12 to 24 Months):</strong> 100% provisioning on unsecured balances.</li>
                <li><strong>Loss Assets:</strong> 100% balance sheet write-off against reserves.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                Litigating unsecured debts of ₹5 Lakhs to ₹30 Lakhs in Ludhiana courts requires mandatory court fees, advocate fees, and years of court delay with no asset collateral to seize. Credit committees evaluate settlement proposals using an actuarial Net Present Value (NPV) formula:
              </p>

              {/* Recovery Valuation Benchmark Box */}
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

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An immediate OTS lump-sum settlement of 45% to 50% yields a higher Net Present Value for the bank than protracted litigation, releasing locked provisions back into operating profits.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-ludhiana-debt-settlement" className="my-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/personal-loan-settlement-ludhiana.jpg"
                  alt="Personal Loan and Business Debt Settlement in Ludhiana Punjab Infographic: Legal Defense, RBI Fair Practice Guidelines, Bank OTS Compromise, and No Dues Certificate Protocol"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 text-slate-300 text-xs flex items-center justify-between">
                  <span className="font-semibold text-blue-400">Fig 1: Institutional Debt Resolution Framework for Borrowers in Punjab</span>
                  <span className="text-slate-400 hidden sm:inline">Source: SettleLoans Legal Analysis</span>
                </div>
              </div>
            </section>

            {/* Section 6: Tactical Step-by-Step Defense & Advocate-Led Settlement Protocol */}
            <section id="advocate-defense-negotiation-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Advocate-Led Tactical Defense &amp; Debt Settlement Protocol
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Negotiating directly with branch managers or recovery agents often leads to partial token payments being credited to penal charges rather than settling principal debt. A conclusive compromise requires a structured 5-stage legal protocol:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <Briefcase className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The 5-Stage Legal Resolution Workflow in Punjab</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 1: Financial Audit &amp; Liability Mapping</p>
                    <p className="text-slate-600 mt-1">Analyzing sanction letters, repayment history, and CIBIL records to establish genuine principal liability and strip away unauthorized penalties.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 2: Issuance of Statutory Cease-and-Desist Notices</p>
                    <p className="text-slate-600 mt-1">Serving formal legal notices on Nodal Officers, requiring lenders to route all communications through appointed counsel under RBI rules.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 3: Court Representation &amp; Litigation Shielding</p>
                    <p className="text-slate-600 mt-1">Appearing for Section 138 NI Act or summary suits in Ludhiana Courts, securing bail, and preventing adverse ex-parte orders.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 4: Institutional Hardship Submission &amp; OTS Negotiation</p>
                    <p className="text-slate-600 mt-1">Presenting audited hardship dossiers directly to Zonal Stressed Asset Committees to secure 40% to 65% waivers.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 5: Sanction Verification, Direct Remittance &amp; Legal Closure</p>
                    <p className="text-slate-600 mt-1">Verifying official OTS sanction letters, remitting payment directly to loan accounts, securing NDCs, and closing court matters.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Sanction Letter Forensics & Verification */}
            <section id="sanction-letter-forensics-waivers" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Sanction Letter Forensics: Verifying Waivers &amp; Eliminating Fraud
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Distressed borrowers often fall prey to fake settlement letters fabricated by rogue collection agents. Paying funds against unofficial receipts leaves the loan active and subject to fresh demand notices.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our advocates verify every compromise document against mandatory legal benchmarks before advising payment:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4">
                <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Checklist for Authentic Bank OTS Sanction Letters</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Official Bank Letterhead &amp; Ref Number</p>
                    <p className="text-slate-600">The sanction letter must originate from the bank&apos;s registered domain or regional office with an authentic reference number.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Complete Account &amp; Borrower Identification</p>
                    <p className="text-slate-600">The letter must record the borrower&apos;s PAN, registered loan account numbers, and the precise pre-settlement balance.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Clear Waiver &amp; Installment Terms</p>
                    <p className="text-slate-600">The document must explicitly state the net agreed sum, penal interest waiver, and payment schedule.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">4. Covenant for NDC &amp; Case Withdrawal</p>
                    <p className="text-slate-600">The letter must obligate the bank to issue an NDC and withdraw pending Section 138 NI Act or civil cases upon payment.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                All settlement remittances must be made via RTGS, NEFT, or demand drafts directly into the lending bank&apos;s loan account, never to third-party collection agencies.
              </p>
            </section>

            {/* Section 8: Post-Settlement No Dues Certificate (NDC) & CIBIL Commercial / Retail Credit Rectification */}
            <section id="ndc-cibil-commercial-credit-repair" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Post-Settlement Closure: No Dues Certificate &amp; Credit Rebuilding
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI Circular <em>RBI/2023-24/60</em>, lenders must issue an official No Dues Certificate (NDC) and release documents within 30 days of settlement payment.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The bank updates credit bureaus (CIBIL, Experian, CRIF, Equifax) reflecting the status as &quot;Settled&quot;. This extinguishes civil liability and ends recovery action. Borrowers can restore credit scores through disciplined steps:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Secured Credit Cards:</strong> Opening a fixed-deposit-backed credit card and maintaining low utilization (&lt;30%).</li>
                <li><strong>Timely Payments:</strong> Ensuring all utility, operational, and new credit bills are paid on schedule.</li>
                <li><strong>Credit Audits:</strong> Reviewing CIBIL records quarterly and filing CICRA disputes against erroneous overdue reporting.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-2">
                Within 18 to 24 months of financial discipline, borrowers routinely rebuild CIBIL scores above 750, regaining access to institutional credit.
              </p>
            </section>

            {/* Section 9: Comparative Matrix Table */}
            <section id="comparative-ludhiana-debt-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Protection Matrix for Punjab Borrowers
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The table below outlines legal recourse, jurisdictions, typical OTS waivers, and resolution timelines across credit facilities:
              </p>
              
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Debt Category</th>
                      <th>Primary Punjab Court Jurisdiction</th>
                      <th>Creditor Legal Recourse</th>
                      <th>Borrower Statutory Shield</th>
                      <th>Typical OTS Waiver &amp; Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Unsecured Personal Loans</td>
                      <td>Ludhiana CJSD / Commercial Courts</td>
                      <td>Order 37 CPC summary suit, Section 138 NI Act (cheque bounce)</td>
                      <td>Section 60 CPC asset immunity, RBI FPC harassment protection</td>
                      <td><strong>45% to 65% Waiver</strong><br /><span className="text-xs text-slate-500">2 to 5 Months</span></td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">MSME Business Loans</td>
                      <td>Ludhiana Civil Courts / Chandigarh DRT</td>
                      <td>Civil recovery suit, DRT original application under RDB Act</td>
                      <td>MSME dispute defense, Section 60 CPC artisan protection</td>
                      <td><strong>40% to 60% Waiver</strong><br /><span className="text-xs text-slate-500">3 to 6 Months</span></td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Cash Credit / Overdraft Shortfalls</td>
                      <td>Chandigarh DRT / District Courts</td>
                      <td>SARFAESI (if secured), civil money suit for unsecured portion</td>
                      <td>Punjab Relief of Indebtedness Act, interest audit objection</td>
                      <td><strong>35% to 55% Waiver</strong><br /><span className="text-xs text-slate-500">4 to 8 Months</span></td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Fintech &amp; NBFC Digital App Loans</td>
                      <td>Distant Arbitration (Delhi / Mumbai) / Local JMFC</td>
                      <td>Unilateral arbitration, digital recovery messages</td>
                      <td>Challenge arbitration under Perkins Eastman Supreme Court ruling</td>
                      <td><strong>50% to 70% Waiver</strong><br /><span className="text-xs text-slate-500">1 to 3 Months</span></td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Credit Card Balances</td>
                      <td>Ludhiana District Courts / Lok Adalat</td>
                      <td>Civil money suit, Lok Adalat summons</td>
                      <td>Reversal of 42%+ APR interest compounding, RBI Ombudsman</td>
                      <td><strong>50% to 65% Waiver</strong><br /><span className="text-xs text-slate-500">1 to 4 Months</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense Framework */}
            <section id="settleloans-punjab-legal-framework" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense Framework: Protecting Punjab Borrowers
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Managing debt distress while operating a factory in Focal Point or maintaining a salaried career in Ludhiana requires expert advocacy. SettleLoans provides complete legal defense across Punjab. We stop recovery harassment through statutory Cease-and-Desist notices, represent borrowers before Ludhiana Courts and Chandigarh DRT, and negotiate directly with bank committees to secure 40% to 65% One-Time Settlements with official No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  11. Frequently Asked Questions: Debt Settlement in Ludhiana &amp; Punjab
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Verified legal answers regarding personal loan settlement, business debt compromise, court proceedings, and borrower rights across Ludhiana, Jalandhar, and Amritsar.
              </p>

              <div className="space-y-3">
                {faqsList.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                  >
                    <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                      <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.name}
                      </span>
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </summary>
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                      <p>{faq.answer}</p>
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
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Reserve Bank of India (Master Directions on Fair Practices &amp; Loan Resolution)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://highcourtchd.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">High Court of Punjab and Haryana (Commercial Appellate &amp; Writ Jurisprudence)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://districts.ecourts.gov.in/ludhiana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">District &amp; Sessions Court Ludhiana (Judicial Courts Complex e-Services)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://samadhaan.msme.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Ministry of MSME Samadhaan Portal (Delayed Payment Facilitation Council)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Portal (Complaint Redressal against Unlawful Recovery)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Legal Defense &amp; Loan Settlement Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/best-lawyer-for-MSME-loan-recovery-defence"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Best Lawyer for MSME Loan Recovery Defence
                </Link>
                <Link
                  href="/business-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Business Loan Settlement Guide
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank One-Time Settlement OTS Policy
                </Link>
                <Link
                  href="/bailable-non-bailable-warrant-cheque-bounce-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Cheque Bounce Warrant Legal Defense
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Recovery Harassment Complaint
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Bank Seize Property for Personal Loan?
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Arbitration Notice Reply
                </Link>
                <Link
                  href="/cibil-score-kaise-sudhare-settlement-ke-baad"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Score Improvement After Settlement
                </Link>
                <Link
                  href="/case-study-axis-bank-business-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Case Study: Business Loan Settlement
                </Link>
                <Link
                  href="/drt-loan-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  DRT Loan Settlement Process
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6 h-fit self-start">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                  AJ
                </Link>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                      Ashish Jhangra
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Distinguished authority in banking jurisprudence, MSME debt restructuring, borrower civil rights under Section 60 CPC, and RBI compromise settlement frameworks across Punjab and Northern India.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="text-[#1F5EFF] font-semibold hover:underline flex items-center gap-1">
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <div className="flex items-center gap-1 text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Author</span>
                </div>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Punjab Legal Defense</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">Facing Loan Default in Ludhiana or Punjab?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not allow recovery agents to disrupt your factory or distress your family. Retain our senior banking advocates to issue statutory Cease-and-Desist notices and negotiate 40%–65% OTS waivers.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Advocate Consultation
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Legal Protections
              </h4>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Section 60 CPC Statutory Asset Immunity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Legal Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank-Stamped Settlement Letters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>RBI Fair Practices Code Enforcement</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
