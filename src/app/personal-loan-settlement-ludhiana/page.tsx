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
  title: 'Personal Loan Settlement in Ludhiana | SettleLoans',
  description: 'Learn how to settle personal loans legally in Ludhiana. Stop bank recovery harassment and resolve debt with up to 60% OTS via SettleLoans.',
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
    answer: "Textile and hosiery manufacturers in Ludhiana often take fresh loans to cover cash shortfalls. This increases overall debt. A legal One-Time Settlement (OTS) stops penal interest. It halts factory visits by recovery agents. Borrowers can settle unsecured debt at a 40% to 65% waiver based on audited cash flows."
  },
  {
    name: "Can banks in Ludhiana seize factory machinery or ancestral land for an unsecured personal loan?",
    answer: "No. Unsecured personal and business loans have no mortgage on machines or land. Under Section 60 CPC, tools of artisans, machinery, and primary homes cannot be seized without a civil decree."
  },
  {
    name: "What legal protection does the Punjab Relief of Indebtedness Act offer distressed borrowers?",
    answer: "The Punjab Relief of Indebtedness Act, 1934 protects borrowers from high interest rates. It limits harsh recovery methods. Combined with RBI rules, our advocates use this law to remove inflated penal charges during settlement talks."
  },
  {
    name: "How do debt settlement advocates handle Section 138 NI Act summons at Ludhiana Courts?",
    answer: "When security cheques bounce, banks file Section 138 NI Act cases in Ludhiana Courts. Our advocates appear in court and secure bail. Under Section 147 NI Act, we compound and close the case once the OTS is paid."
  },
  {
    name: "How does a debt settlement advocate stop recovery agents from visiting factory premises in Focal Point or Sundar Nagar?",
    answer: "After signing a Vakalatnama, our advocates send legal notices to bank Nodal Officers. Under RBI rules, lenders must direct all calls to your lawyer. This stops doorstep factory visits immediately."
  },
  {
    name: "What is the typical waiver percentage achievable in Ludhiana bank loan settlements?",
    answer: "Borrowers in Punjab typically secure 40% to 60% waivers on unsecured personal loans, business loans, and credit cards. Banks also grant a 100% waiver on penal interest and late fees."
  },
  {
    name: "How does Chandigarh DRT jurisdiction apply to loan disputes for Ludhiana business owners?",
    answer: "Debts Recovery Tribunals in Chandigarh handle Punjab bank recovery claims above ₹20 Lakhs. For loans under ₹20 Lakhs, banks file in Ludhiana Civil Courts. Long court timelines encourage banks to accept out-of-court OTS settlements."
  },
  {
    name: "What happens to CIBIL and Commercial CMR scores after completing a settlement in Punjab?",
    answer: "After you pay the agreed settlement, the lender issues a No Dues Certificate (NDC) within 30 days under RBI rules. The bank marks the account as 'Settled' with ₹0 dues in credit bureaus. You can rebuild your credit score over 12 to 24 months."
  },
  {
    name: "Can private fintech apps or NBFCs initiate arbitration in Mumbai or Delhi against Ludhiana residents?",
    answer: "Digital lenders often send arbitration notices in distant cities. Our advocates challenge these notices under Supreme Court rulings in Perkins Eastman and TRF Ltd. We move negotiations back to local Punjab courts."
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
          "reviewBody": "Our textile unit in Focal Point faced loan defaults of ₹42 Lakhs. SettleLoans stepped in. They stopped recovery visits to our factory gates. They appeared for cheque bounce summons. They secured an OTS at a 52% waiver.",
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
          "reviewBody": "I had ₹18 Lakhs in personal loans and credit cards in Ludhiana. Agents threatened to visit my office. SettleLoans sent a legal notice under RBI rules. They settled all three accounts at a 55% waiver with genuine NDCs.",
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
          "reviewBody": "Our auto unit in Industrial Area B faced cash flow issues. We received arbitration notices from a Mumbai NBFC. Ashish Jhangra and his legal team challenged authority in Ludhiana courts. They secured a settlement saving our business ₹26 Lakhs.",
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
          "reviewBody": "SettleLoans provides strong legal help in Punjab. They stopped recovery agents from visiting my family in Model Town, Ludhiana. Their advocates handled bank talks. They closed my personal loan under RBI OTS rules.",
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

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Personal Loan Settlement in Ludhiana: Legal OTS Guide</h1>

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
                We handle court defense across Ludhiana District Courts. We cover Focal Point hubs, Jalandhar units, Amritsar markets, and Chandigarh DRT benches.
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
                  <span><strong>Industrial Debt Relief:</strong> Factory owners can settle unsecured debt with 40% to 65% OTS waivers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Factory Gate Defense:</strong> Legal notices stop agent visits under RBI rules.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Court Protection:</strong> Advocates appear in Ludhiana Courts. We challenge arbitration and close cheque bounce cases.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>legal Asset Immunity:</strong> Section 60 CPC protects machines and homes from seizure.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Legal Closure:</strong> Settlements end with official NDCs under RBI rules.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Industrial & Salaried Debt Crisis in Ludhiana & Punjab */}
            <section id="industrial-debt-crisis-ludhiana-punjab" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Industrial &amp; Salaried Debt Crisis in Ludhiana</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Ludhiana is a major manufacturing hub in Northern India. It has textile mills in Focal Point. It has hosiery units in Sundar Nagar. It has bicycle units in Industrial Area B. It has auto parts foundries along GT Road. Local manufacturers face cash flow issues. Long buyer credit cycles and raw material price swings cause cash deficits.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When credit limits max out, owners take unsecured loans. Over time, debt servicing exceeds profits. Borrowers get stuck taking fresh loans to pay older EMIs.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>The Punjab Industrial Reality</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  Most loan defaults in Punjab stem from client payment delays. Taking new loans worsens the problem. Engaging debt settlement advocates enables legal compromise under RBI rules.
                </p>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Salaried workers face pressure from medical bills or job loss. When defaults occur, recovery agents call and visit. Loan default is a civil matter. Strong laws protect you from agent harassment.
              </p>
            </section>

            {/* Section 2: Statutory Protections & Legal Defences against Bank Harassment in Punjab */}
            <section id="statutory-protections-punjab-relief-rbi" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Statutory Protections &amp; Punjab Indebtedness Laws</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers in Punjab have legal protections under state and central laws. The <em>Punjab Relief of Indebtedness Act, 1934</em> limits high interest rates. It stops lenders from adding arbitrary fines.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Banking Regulation Act, the RBI enforces fair collection rules. These directives prohibit abusive collection tactics:
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
                      Agents cannot visit factories or homes without prior notice. Calls must happen between 8:00 AM and 7:00 PM.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">2. Penal Protections under Bharatiya Nyaya Sanhita, 2023 (BNS)</p>
                    <p className="text-slate-600 mt-1">
                      Trespassing into commercial sheds or homes violates Section 329 BNS. Threats of arrest or abuse violate Section 351 BNS. Coercive cash demands violate Section 308 BNS.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">3. Asset Exemptions under Section 60 CPC</p>
                    <p className="text-slate-600 mt-1">
                      Under Section 60 CPC, tools of trade cannot be seized. Essential factory machines and primary homes stay safe from unsecured debt.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">4. Supreme Court Rulings on Recovery Decency</p>
                    <p className="text-slate-600 mt-1">
                      In <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em>, the Supreme Court banned musclemen in loan recovery.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If agencies break rules, we file complaints with the Banking Ombudsman and local magistrates.
              </p>
            </section>

            {/* Section 3: Civil Court & DRT Jurisdictions in Punjab */}
            <section id="civil-court-drt-jurisdiction-ludhiana" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Judicial Architecture in Ludhiana</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lenders in Punjab must choose courts based on debt amount.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For unsecured personal loans, banks file in <strong>Judicial Courts Complex in Ludhiana</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <li>
                  <strong>Summary Suits under Order 37 CPC:</strong> Lenders file suits in Civil Court. Our advocates file Leave to Defend. We dispute extra charges and move cases to regular trials.
                </li>
                <li>
                  <strong>Section 138 NI Act:</strong> Banks deposit security cheques to file court complaints. Advocates secure bail. We compound cases under Section 147 NI Act upon settlement.
                </li>
                <li>
                  <strong>DRT Chandigarh:</strong> Claims over ₹20 Lakhs go to DRT Chandigarh. Unsecured claims need detailed trial scrutiny.
                </li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-2">
                Fintech lenders often issue arbitration notices in distant cities. Under Supreme Court rulings in <em>Perkins Eastman (2020)</em> and <em>TRF Ltd. (2017)</em>, one-sided arbitrator appointments are void. Our advocates invalidate these claims.
              </p>
            </section>

            {/* Section 4: Bank NPA Accounting Realities & The NPV Recovery Valuation Formula */}
            <section id="bank-npa-accounting-npv-recovery-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank NPA Accounting in Ludhiana</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks agree to OTS waivers due to mandatory RBI reserves rules. Under RBI rules, loans become NPAs after 90 days of non-payment.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once an account becomes an NPA, lenders face strict capital reserves:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Substandard NPA (Up to 12 Months):</strong> 15% mandatory reserves on unsecured exposure.</li>
                <li><strong>Doubtful NPA (12 to 24 Months):</strong> 100% reserves on unsecured balances.</li>
                <li><strong>Loss Assets:</strong> 100% write-off against reserves.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                Civil suits in Ludhiana take 3 to 5 years. They also cost high legal fees. Banks have no assets to seize. Bank committees evaluate settlement offers using Net Present Value math:
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
                  Here, C_t is expected recovery and r is discount rate. Deductions cover court delays and locked cash.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An upfront OTS payment gives the bank faster cash value. It beats multi-year court trials. It also releases locked provisions back to profits.
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
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Tactical Settlement Protocol in Ludhiana</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Direct agent payments often go to penal fees instead of principal. SettleLoans follows a 5-step legal process:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <Briefcase className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The 5-Stage Legal Resolution Workflow in Punjab</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 1: Financial Audit</p>
                    <p className="text-slate-600 mt-1">We review sanction letters and statements to find true principal debt.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 2: Cease-and-Desist Notices</p>
                    <p className="text-slate-600 mt-1">We send legal notices to bank Nodal Officers. Lenders must route calls to our lawyers.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 3: Court Protection</p>
                    <p className="text-slate-600 mt-1">We appear in court for Section 138 NI Act cases. We secure bail and prevent ex-parte orders.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 4: Hardship Submission</p>
                    <p className="text-slate-600 mt-1">We submit hardship files to bank committees to win 40% to 65% waivers.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 5: Sanction Verification &amp. Closure</p>
                    <p className="text-slate-600 mt-1">We verify bank sanction letters. You pay directly to the bank and receive your NDC.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Sanction Letter Forensics & Verification */}
            <section id="sanction-letter-forensics-waivers" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Sanction Letter Forensics in Ludhiana</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Some recovery agents make fake settlement letters. Paying on fake receipts leaves your loan active.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our advocates check every settlement letter before you pay:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4">
                <h3 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Checklist for Authentic Bank OTS Sanction Letters</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Official Bank Letterhead</p>
                    <p className="text-slate-600">The letter must come from the bank with a valid reference number.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Account Details</p>
                    <p className="text-slate-600">The letter must list your PAN and loan numbers.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Clear Waiver Terms</p>
                    <p className="text-slate-600">The letter must state the agreed sum and waiver terms.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">4. NDC &amp. Case Closure</p>
                    <p className="text-slate-600">The letter must promise an NDC and close all court cases.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Pay settlement funds directly to the bank. Never pay cash to recovery agents.
              </p>
            </section>

            {/* Section 8: Post-Settlement No Dues Certificate (NDC) & CIBIL Commercial / Retail Credit Rectification */}
            <section id="ndc-cibil-commercial-credit-repair" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. ₹0 NDC &amp; Credit Rebuilding in Ludhiana</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI Circular <em>RBI/2023-24/60</em>, lenders must issue an NDC within 30 days of payment.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The bank marks the account as &quot;Settled&quot. with ₹0 dues in credit bureaus. This ends civil liability and stops recovery actions. You can rebuild your credit score step by step:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Secured Credit Cards:</strong> Use secured credit cards. Keep usage under 30%.</li>
                <li><strong>On-Time Payments:</strong> Pay monthly utility bills on time.</li>
                <li><strong>Credit Audits:</strong> Check CIBIL reports every 3 months. Dispute false overdue remarks.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-2">
                Within 18 to 24 months, borrowers rebuild scores to 750+.
              </p>
            </section>

            {/* Section 9: Comparative Matrix Table */}
            <section id="comparative-ludhiana-debt-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Protection Matrix for Punjab Borrowers
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Here is a comparison of legal rights and settlement options in Punjab:
              </p>
              
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Debt Type.</th>
                      <th>Court Forum.</th>
                      <th>Lender Action.</th>
                      <th>Legal Shield.</th>
                      <th>Settlement &amp. Timeline.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Personal Loans.</td>
                      <td>Ludhiana Civil Courts.</td>
                      <td>Order 37 suit or Section 138 notice.</td>
                      <td>Section 60 CPC asset protection, RBI rules.</td>
                      <td><strong>45% to 65% Waiver</strong><br /><span className="text-xs text-slate-500">2 to 5 Months</span></td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">MSME Business Loans.</td>
                      <td>Ludhiana Courts / Chandigarh DRT.</td>
                      <td>Civil suit or DRT claim.</td>
                      <td>Section 60 CPC protection, MSME rules.</td>
                      <td><strong>40% to 60% Waiver</strong><br /><span className="text-xs text-slate-500">3 to 6 Months</span></td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Cash Credit / Overdraft Shortfalls.</td>
                      <td>Chandigarh DRT / District Courts.</td>
                      <td>Civil suit for balance dues.</td>
                      <td>Punjab Indebtedness Act protection.</td>
                      <td><strong>35% to 55% Waiver</strong><br /><span className="text-xs text-slate-500">4 to 8 Months</span></td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Fintech &amp. NBFC Digital App Loans.</td>
                      <td>Distant Arbitration / Local Courts.</td>
                      <td>One-sided arbitration notices.</td>
                      <td>Supreme Court ruling in Perkins Eastman.</td>
                      <td><strong>50% to 70% Waiver</strong><br /><span className="text-xs text-slate-500">1 to 3 Months</span></td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Credit Card Balances.</td>
                      <td>District Courts / Lok Adalat.</td>
                      <td>Civil suit or Lok Adalat notice.</td>
                      <td>High interest waiver under RBI rules.</td>
                      <td><strong>50% to 65% Waiver</strong><br /><span className="text-xs text-slate-500">1 to 4 Months</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense Framework */}
            <section id="settleloans-punjab-legal-framework" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Legal Defense in Ludhiana</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Running a factory with high debt needs legal help. SettleLoans provides full debt defense in Punjab. We stop recovery harassment with legal notices. We defend court cases in Ludhiana. We represent you in DRT Chandigarh. We negotiate 40% to 65% OTS waivers with bank desks. We secure authentic NDCs for every client.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Ludhiana &amp; Punjab</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear answers on loan settlement, borrower rights. And court rules across Punjab.
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
                  <div className="font-bold text-slate-900 text-sm">
                    <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                      Ashish Jhangra
                    </Link>
                  </div>
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Ashish is an expert in banking law and debt defense. He has led hundreds of RBI settlements across Punjab.
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
              <div className="font-bold text-base text-white mb-2">Facing Loan Default in Ludhiana or Punjab?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let recovery agents disturb your factory or home. Our banking lawyers issue legal notices. We negotiate 40% to 65% OTS waivers with bank desks.
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
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Legal Protections
              </div>
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
