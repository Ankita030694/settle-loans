import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import SidebarTOC from '@/components/SidebarTOC';
import {
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  Calendar,
  Award,
  PhoneCall,
  ExternalLink,
  Lock,
  Building2,
  Scale,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  ShieldX,
  ShieldAlert,
  UserCheck,
  AlertCircle,
  Receipt
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement in Patna | SettleLoans',
  description: 'Learn how to settle personal loans legally in Patna Bihar. Stop recovery harassment and resolve bank debt with expert OTS via SettleLoans.',
  keywords: [
    'loan settlement services in patna bihar',
    'personal loan settlement patna',
    'loan settlement lawyer in patna bihar',
    'sbi sarb patna loan settlement',
    'bank loan ots bihar lok adalat',
    'loan recovery harassment patna police complaint',
    'debt relief services gaya muzaffarpur bihar',
    'nbfc loan settlement patna high court',
    'lok adalat loan settlement patna 2026',
    'microfinance loan settlement bihar',
    'psu bank loan settlement patna gandhi maidan'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-patna',
  },
  openGraph: {
    title: 'Loan Settlement Services in Patna, Bihar: SARB Notice Defense & Lok Adalat Guide',
    description: 'Struggling with unpaid personal loans or credit cards in Patna, Gaya, or Muzaffarpur? Learn how advocate-led OTS negotiations, SARB notice legal defense, and National Lok Adalat settlements can reduce your debt by 40% to 60%.',
    url: 'https://www.settleloans.in/personal-loan-settlement-patna',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-patna.jpg',
        width: 1200,
        height: 675,
        alt: 'Loan Settlement Services in Patna Bihar Legal Resolution Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Services in Patna Bihar: Legal OTS & Lok Adalat Representation',
    description: 'Facing SARB recovery notices, Section 138 summons, or collection pressure in Bihar? Settle personal loans and credit card debt legally with advocate-led bank negotiations.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-patna.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-patna#webpage",
      "url": "https://www.settleloans.in/personal-loan-settlement-patna",
      "name": "Loan Settlement Services in Patna Bihar | Top Debt Relief Lawyers",
      "description": "Expert loan settlement services in Patna, Bihar. Professional legal defense against PSU bank SARB notices, microfinance recovery harassment, and Lok Adalat OTS.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-loan-settlement-patna#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-patna#breadcrumb",
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
          "name": "Loan Settlement",
          "item": "https://www.settleloans.in/loan-settlement"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Patna Bihar Loan Settlement",
          "item": "https://www.settleloans.in/personal-loan-settlement-patna"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settlement-patna#article",
      "headline": "Loan Settlement Services in Patna, Bihar: SARB Notice Defense, Lok Adalat & Bank OTS Guide",
      "description": "An exhaustive statutory and legal analysis of personal loan and unsecured debt settlement across Patna and Bihar. Explains PSU bank SARB procedures, Section 138 defense, BSLSA Lok Adalat awards, and RBI compromise settlement mandates.",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-patna.jpg",
      "datePublished": "2026-08-28T10:00:00+05:30",
      "dateModified": "2026-08-28T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-loan-settlement-patna#webpage"
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
      "@type": "Organization",
      "@id": "https://www.settleloans.in/#organization",
      "name": "SettleLoans",
      "url": "https://www.settleloans.in",
      "logo": "https://www.settleloans.in/logo/logo.svg",
      "sameAs": [
        "https://www.facebook.com/settleloans",
        "https://www.linkedin.com/company/settleloans",
        "https://twitter.com/settleloans"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-99999-99999",
        "contactType": "customer support",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/personal-loan-settlement-patna#service",
      "name": "SettleLoans - Patna & Bihar Debt Resolution & Loan Settlement Advisory",
      "description": "Premier legal representation and debt settlement advisory for borrowers facing delinquent personal loans, credit card debt, PSU bank SARB notices, and microfinance recovery disputes across Patna, Gaya, Muzaffarpur, and Bihar.",
      "url": "https://www.settleloans.in/personal-loan-settlement-patna",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-patna.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Fraser Road, Near Dak Bungalow Crossing",
        "addressLocality": "Patna",
        "addressRegion": "Bihar",
        "postalCode": "800001",
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
            "name": "Alok Kumar Sinha"
          },
          "datePublished": "2026-05-18",
          "reviewBody": "My business in Marufganj suffered severe losses. I owed ₹18.5 Lakhs to SBI and PNB. SBI SARB sent recovery notices. Agents also visited my Kankarbagh home. SettleLoans advocates intervened promptly. They sent a strong legal reply. They filed an RBI hardship petition. Finally, they settled all dues for ₹8.2 Lakhs. I received my No Dues Certificate quickly.",
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
            "name": "Priyanka Kumari"
          },
          "datePublished": "2026-06-24",
          "reviewBody": "I lost my teaching job in Muzaffarpur. My credit card debt grew to ₹6.4 Lakhs. Recovery agents called my family daily. SettleLoans stepped in immediately. They stopped all harassment calls. They cited RBI fair practice rules. Then, they settled both cards for ₹2.6 Lakhs. We closed everything through Patna Lok Adalat.",
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
            "name": "Md. Tariq Anwar"
          },
          "datePublished": "2026-07-11",
          "reviewBody": "Our family shop in Gaya faced ₹12 Lakhs in NBFC debt. Collection agents threatened police action. SettleLoans advocates guided us on borrower rights. They represented us at Gaya Lok Adalat. They closed all four accounts with a 55% waiver. The entire process was smooth.",
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
            "name": "Ravi Shankar Prasad"
          },
          "datePublished": "2026-08-05",
          "reviewBody": "Canara Bank sent an arbitration notice for ₹22 Lakhs. SettleLoans advocates audited my loan statement. They removed unfair interest charges. Then, they negotiated with the zonal committee. We agreed on an OTS of ₹10.5 Lakhs. I paid in two easy parts. I strongly recommend their legal team.",
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-patna#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I legally settle an unsecured personal loan or credit card debt in Patna, Bihar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Debt settlement is completely legal in Patna. It follows the RBI Master Direction of June 8, 2023. This rule covers banks and NBFCs across Bihar. Borrowers with genuine hardship can apply for an OTS. Lenders can waive penal interest. They also discount the core principal balance."
          }
        },
        {
          "@type": "Question",
          "name": "What is an SBI SARB or PNB SASTRA notice, and how should borrowers in Bihar respond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SARB and SASTRA are PSU bank recovery wings. When loans stay unpaid past 90 days, accounts move here. A SARB notice means the bank plans legal action. Never ignore these formal notices. An advocate must send a prompt reply. This stops harassment and starts compromise talks."
          }
        },
        {
          "@type": "Question",
          "name": "How does the National Lok Adalat in Patna Civil Court facilitate debt settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bihar State Legal Services Authority organizes regular Lok Adalats. Benches sit at Patna Civil Court and district courts. Judges and senior advocates guide the talks. Lenders offer deep compromise discounts here. Agreements become binding court awards under Section 21. There are zero court fees and no future appeals."
          }
        },
        {
          "@type": "Question",
          "name": "What legal protections exist against aggressive recovery agent harassment in Patna?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers have strong protections under RBI rules. Agents cannot call before 8 AM or after 7 PM. They cannot contact friends or relatives. Abusive language and threats are strictly banned. Violations break Section 351 of Bharatiya Nyaya Sanhita. You can file a police complaint in Patna. You can also alert the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver can borrowers in Bihar expect during a personal loan OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Banks in Patna evaluate loan age and borrower distress. They routinely waive 100% of penal interest. They also waive unpaid late fees. On core principal, waivers range from 35% to 60%. Unsecured loans in Doubtful or Loss stages get the highest discounts."
          }
        },
        {
          "@type": "Question",
          "name": "How does personal loan settlement differ from SARFAESI proceedings in Bihar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SARFAESI Act applies only to secured loans with mortgaged property. It never applies to unsecured personal loans or credit cards. For unsecured debt, banks cannot seize your home. They can only file civil suits or cheque bounce cases. An OTS settles unsecured debt safely."
          }
        },
        {
          "@type": "Question",
          "name": "Can microfinance (NBFC-MFI) and digital loan app debts be settled in Bihar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Microfinance lenders and digital loan apps follow RBI guidelines. Lenders cannot use coercive group recovery tactics. SettleLoans advocates stop illegal collection agent calls. We negotiate lump-sum compromise closures directly with lender management."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory timeline for banks in Patna to issue a No Dues Certificate (NDC)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, banks must issue an NDC in 30 days. They must return security cheques. Any delay costs ₹5,000 per day in borrower payout."
          }
        },
        {
          "@type": "Question",
          "name": "How does a loan settlement affect CIBIL scores, and how can borrowers in Bihar rebuild credit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Credit bureaus mark settled accounts with ₹0 balance. This stops negative default marks. Rebuild credit with a secured card. Pay on time. Regain a 750+ score in 12 to 18 months."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'banking-credit-landscape-patna-bihar', title: '1. Regional Banking & Credit Defaults in Bihar' },
  { id: 'psu-sarb-sastra-notice-mechanics', title: '2. PSU Bank SARB & SASTRA Legal Notice Architecture' },
  { id: 'statutory-borrower-protections-bihar', title: '3. Statutory Protections & Anti-Harassment Law' },
  { id: 'npa-provisioning-balance-sheet-npv', title: '4. Bank NPA Accounting & NPV Settlement Formula' },
  { id: 'patna-settlement-visual-roadmap', title: '5. Visual Settlement Roadmap & Flowchart' },
  { id: 'step-by-step-negotiation-bihar', title: '6. Five-Phase Advocate Negotiation Framework' },
  { id: 'lok-adalat-bslsa-drt-patna-protocols', title: '7. Lok Adalat BSLSA & DRT Patna Protocols' },
  { id: 'sanction-letter-forensics-rbi-ndc', title: '8. Sanction Letter Forensics & 30-Day NDC Mandate' },
  { id: 'debt-resolution-strategy-matrix', title: '9. Bihar Debt Resolution Comparative Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' }
];

export default function PersonalLoanSettlementPatnaPage() {
  return (
    <div
      className="min-h-screen bg-white text-slate-900"
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
            <Building2 className="w-3.5 h-3.5" />
            <span>Patna &amp; Eastern Region • Legal Debt Relief &amp; Bank Negotiation</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Personal Loan Settlement in Patna: Legal OTS Guide</h1>

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
              <span>RBI &amp; BSLSA Lok Adalat Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Settle Your Loan in Patna</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request Free Case Evaluation
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
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Patna Stressed Debt Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Borrowers in Patna, Gaya, and Muzaffarpur face active bank recovery steps. PSU bank SARB wings and NBFC agents issue legal notices. Our advocates represent you under RBI June 2023 rules. We protect your family from harassment. We secure 35% to 60% loan principal waivers. You receive an official ₹0 No Dues Certificate.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Debt Relief &amp; Loan Settlement in Patna &amp; Bihar</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Centralized PSU Recovery Hubs.</strong> PSU banks in Patna transfer unpaid personal loans to SARB and SASTRA centers. These units handle aggressive recovery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>legal RBI Compromise Framework.</strong> The RBI Master Direction of June 8, 2023 allows compromise settlements. All banks and NBFCs in Bihar can offer OTS terms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>BSLSA National Lok Adalat Power.</strong> Quarterly Lok Adalats at Patna Civil Court provide binding settlement awards. Borrowers get 100% penal fee waivers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Criminal Harassment Shields.</strong> Abusive recovery calls and home threats violate RBI fair practice rules. Borrowers can report rogue agents to Patna Police.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory 30-Day NDC Delivery.</strong> Lenders must issue a No Dues Certificate within 30 days. Delays require ₹5,000 daily payout under RBI rules.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Banking & Credit Default Landscape Across Patna and Greater Bihar */}
            <section id="banking-credit-landscape-patna-bihar" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Banking &amp; Default Landscape in Patna and Greater Bihar</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Patna is Bihar's economic hub. Retail credit has grown fast. Major bank branches line Boring Road, Fraser Road, and Kankarbagh. PSU lenders dominate the market. SBI, PNB, Bank of Baroda, and Canara Bank lead retail loans. Private banks and NBFCs issue loans too.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many local families face financial stress. Wholesale traders in Marufganj face cash flow drops. Salaried workers suffer job cuts and high medical bills. These hardships lead to loan defaults.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When defaults happen, banks rarely offer easy options. Instead, recovery agents call often and send harsh notices. Panicking makes things worse. You need structured legal defense.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our <strong>loan settlement services in Patna, Bihar</strong> protect your rights. We stop recovery harassment. We audit improper interest charges. We negotiate affordable OTS terms directly with bank managers.
              </p>
            </section>

            {/* Section 2: PSU Bank SARB Architecture, Zonal SASTRA Wings & Legal Notice Mechanics in Patna */}
            <section id="psu-sarb-sastra-notice-mechanics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. PSU Bank SARB Architecture &amp; Legal Paths</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                PSU banks in Bihar use dedicated recovery units. When a loan is unpaid for 90 days, it becomes an NPA. The account moves to zonal recovery hubs.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In Patna, SBI runs its <strong>SARB</strong> near Gandhi Maidan. PNB operates its <strong>SASTRA Center</strong> at Exhibition Road. Canara Bank and Bank of Baroda run recovery offices too. They focus on recovery through legal notices.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks in Patna follow a clear legal path:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 138 Negotiable Instruments Act Summons</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a cheque bounces, the bank sends a 15-day notice. Bank advocates then file criminal cases. They appear before the Judicial Magistrate at Patna Civil Court.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Receipt className="w-4 h-4 text-emerald-600" />
                    <span>Section 25 Payment &amp; Settlement Systems Act (PASA)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When NACH or ECS auto-debits bounce, lenders file Section 25 cases. These carry quasi-criminal liability.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-purple-600" />
                    <span>Summary Civil Suits Under Order 37 CPC</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders file summary suits at Patna Civil Court. The borrower must apply for court leave to defend the claim.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    <span>Arbitration &amp; Conciliation Notices</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Private lenders often start one-sided arbitration. They seek ex-parte awards under Section 36 of the Arbitration Act.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Strategic Legal Reality: Unsecured Debt Cannot Trigger SARFAESI Attachment</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  Agents often threaten property seizure under SARFAESI Act, 2002. This is false. SARFAESI applies only to secured loans. Unsecured personal loans and cards cannot trigger SARFAESI action.
                </p>
              </div>
            </section>

            {/* Section 3: Statutory Borrower Protections: RBI Fair Practices Code, High Court Precedents & Anti-Harassment Law in Bihar */}
            <section id="statutory-borrower-protections-bihar" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Borrower Legal Protections in Patna</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Loan default is a civil matter, not a crime. RBI rules protect honest borrowers from abuse. The Supreme Court and Patna High Court uphold your rights.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lenders in Patna must obey the <strong>RBI Fair Practices Code</strong>. They must follow recovery agent guidelines:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Time and Place Restrictions.</strong> Agents can call only between 8:00 AM and 7:00 PM. Unannounced visits without prior notice are illegal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Absolute Privacy Protections.</strong> Lenders cannot share loan details with neighbors, bosses, or relatives. Creating social pressure groups is illegal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Prohibition of Verbal Abuse and threats.</strong> Threats and abuse break the law. They violate Section 351 and Section 352 of BNS, 2023.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Agent Identification.</strong> Recovery agents must show bank ID cards. They must carry formal authorization letters.</span>
                </li>
              </ul>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-amber-950">
                  <Scale className="w-4 h-4 text-amber-600" />
                  <span>Police Complaint &amp; Legal Remedies Against Rogue Recovery in Bihar</span>
                </span>
                <p className="leading-relaxed">
                  Facing recovery abuse in Bihar? File a police complaint in Patna, Gaya, or Muzaffarpur. Alert the Patna SSP or local police. Our advocates send legal notices to bank nodal officers. We report violations to the <strong>RBI Integrated Ombudsman</strong>.
                </p>
              </div>
            </section>

            {/* Section 4: Bank Balance Sheet Accounting, Unsecured NPA Provisioning & The Net Present Value (NPV) Equation */}
            <section id="npa-provisioning-balance-sheet-npv" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. NPA Balance Sheet Accounting in Patna</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A 40% to 60% waiver needs financial logic, not emotions. Banks use RBI reserves rules and Net Present Value (NPV) models.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks follow RBI IRACP norms. They must reserve capital against bad loans:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Asset status.</th>
                      <th>default Aging.</th>
                      <th>Mandatory RBI Provision (Unsecured).</th>
                      <th>Balance Sheet Financial Impact.</th>
                      <th>Target Settlement Haircut.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Standard / SMA-0 to SMA-2.</td>
                      <td>1 – 90 Days Overdue.</td>
                      <td>0.40% – 5.0%.</td>
                      <td>Normal operational provision.</td>
                      <td>Penal charge waivers only.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Sub-Standard Asset.</td>
                      <td>91 Days – 12 Months NPA.</td>
                      <td>25% Unsecured Provision.</td>
                      <td>Direct profit deduction.</td>
                      <td>20% – 35% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful-1 (D1 Asset).</td>
                      <td>12 – 24 Months Default.</td>
                      <td>100% Full reserves.</td>
                      <td>Full loan amount locked.</td>
                      <td>35% – 50% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful-2 / Doubtful-3.</td>
                      <td>24 – 48+ Months Default.</td>
                      <td>100% Full reserves.</td>
                      <td>High balance sheet drag.</td>
                      <td>45% – 60% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loss Asset.</td>
                      <td>Identified Uncollectible.</td>
                      <td>100% Written-off Asset.</td>
                      <td>Fully written off in books.</td>
                      <td>55% – 70% Principal Haircut.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an unsecured loan turns Doubtful or Loss, the bank locks 100% capital. This hurts bank profits. Under the <strong>RBI Master Direction of June 8, 2023</strong>, bank committees use this formula:
              </p>

              {/* Clean JSX Container for NPV Formula */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Bank Stressed Asset Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Patna Court Litigation Costs - Provisioning Drag
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here, C_t is future recovery. The letter r is the discount rate. Deductions cover court delays, legal fees. And capital costs.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When our team presents a lump-sum cash offer, the bank saves legal costs. A 50% settlement today gives more value than five years of court cases.
              </p>
            </section>

            {/* Section 5: Visual Roadmap Infographic Banner */}
            <section id="patna-settlement-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Settlement Process Roadmap in Patna</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The roadmap below shows 5 key steps to settle bank loans in Patna. Learn to defend against notices. Secure an OTS waiver. Rebuild your credit score.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/personal-loan-settlement-patna.jpg"
                  alt="Personal Loan Settlement Process in Patna & Bihar Infographic Roadmap"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Notice Defense &amp; Ledger Audit</span>
                  <span>Intercept SARB demand letters. Audit uncharged penal fees and illegal compound interest.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: RBI Hardship &amp; Lok Adalat OTS</span>
                  <span>Compile financial hardship evidence. Negotiate terms before Bank Committees or Patna Lok Adalat.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: ₹0 NDC &amp; Credit Rebuilding</span>
                  <span>Pay settlement funds directly to the bank. Obtain a ₹0 No Dues Certificate within 30 days.</span>
                </div>
              </div>
            </section>

            {/* Section 6: The Step-by-Step Advocate-Led Negotiation Framework in Patna & Bihar */}
            <section id="step-by-step-negotiation-bihar" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Advocate-Led Settlement Framework in Patna &amp; Bihar</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Settling bank debt requires a clear legal strategy. Negotiating alone brings risks. Agents make false verbal promises. Our legal team uses a proven 5-phase framework:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 1: Forensic Loan Ledger &amp; Legal Audit</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We collect full loan statements from the bank. We review the account in detail. We remove illegal penal fees and compound interest. This gives us the true principal baseline.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 2: Formal Legal Representation &amp; Anti-Harassment Notice</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We submit a formal Vakalatnama to the bank zonal head. This moves all messages to our legal office. It stops agents from visiting your home or workplace.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 3: Hardship Dossier Submission Under RBI June 2023 Policy</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We draft a compromise petition under RBI rules. We attach proof of financial hardship. This includes income tax returns, medical records, or business loss proofs.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 4: Bilateral Zonal Negotiation &amp; Discretionary Approval</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our advocates negotiate directly with the Bank Zonal Committee in Patna. We use NPA reserves rules. We secure 40% to 60% principal waivers. We also structure a 1-to-3 installment payment plan.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 5: Execution of Consent Decree &amp; Legal Closure</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Are Section 138 or Section 25 cases pending? We record consent terms at Patna Civil Court or Lok Adalat. All court cases get dismissed.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This structured approach makes your settlement permanent and legally binding.
              </p>
            </section>

            {/* Section 7: National Lok Adalat Representation & Patna Debt Recovery Tribunal (DRT) Protocols */}
            <section id="lok-adalat-bslsa-drt-patna-protocols" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Patna DLSA Lok Adalat Representation</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lok Adalats are key forums for debt settlement in Bihar. The <strong>BSLSA</strong> organizes quarterly National Lok Adalats. Benches sit at Patna Civil Court, Gaya, Muzaffarpur, and Bhagalpur.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lok Adalats run under the <strong>Legal Services Authorities Act, 1987</strong>. Special benches resolve bank recovery cases quickly.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Settling in Patna Lok Adalat offers key legal benefits:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Final and Binding Judicial Award.</strong> Under Section 21, a Lok Adalat award acts as a civil decree. It is final. No party can appeal it.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Full Refund of Court Fees.</strong> Lok Adalat settlements refund court fees in full. This follows the Court Fees Act, 1870.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>optional Bank Waivers.</strong> Bank zonal heads at Lok Adalat hold high approval powers. They can waive 100% penal interest and grant deep principal discounts.</span>
                </li>
              </ul>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <Building2 className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Jurisdiction of Debt Recovery Tribunal (DRT) Patna</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  For debts above ₹20 Lakhs, banks approach <strong>DRT Patna</strong> near Exhibition Road. Our advocates defend borrowers at DRT Patna. We challenge inflated claims. We secure court-approved settlements.
                </p>
              </div>
            </section>

            {/* Section 8: Forensic Sanction Letter Verification, Direct Bank Remittance & The RBI 30-Day NDC Mandate */}
            <section id="sanction-letter-forensics-rbi-ndc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Sanction Letter Audit &amp; NDC in Patna</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Rogue agents in Bihar sometimes issue fake settlement letters. They make false verbal promises to collect money. Never pay without a verified sanction letter.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before paying, our advocates check five key points:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Bank Domain &amp; Zonal Authority</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must come from the bank&apos;s corporate email. Or it must bear the Zonal Manager&apos;s signed letterhead.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Explicit Account Number &amp; Ledger Breakdown</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must show your 16-digit account number. It must list total debt, waiver amount. And net payable sum.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Full Debt Extinguishment Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must confirm full closure upon payment. Your balance must become ₹0.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Withdrawal of All Legal Proceedings</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must promise to withdraw all court cases. This includes Section 138 and Section 25 suits.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-red-950">
                  <ShieldX className="w-4 h-4 text-red-600" />
                  <span>The Fundamental Rule of Settlement Remittance</span>
                </span>
                <p className="leading-relaxed">
                  Never pay cash to recovery agents. Pay via Demand Draft or NEFT/RTGS into your official loan account. Always collect a bank receipt.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                RBI Statutory Mandate on 30-Day NDC Delivery &amp; Credit Bureau Updates
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under <strong>RBI Circular RBI/2023-24/60</strong>, banks in Bihar must issue an <strong>NDC</strong> in <strong>30 days</strong>. They must return security cheques. Any delay costs the bank <strong>₹5,000 per day</strong> in borrower payout.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The bank reports the account to credit bureaus. CIBIL, CRIF, Experian, and Equifax show the loan as <strong>&quot;Settled&quot;</strong>. The balance becomes <strong>₹0</strong>. This stops negative default marks. You can rebuild credit to 750+ in 12 to 18 months with a secured card.
              </p>
            </section>

            {/* Section 9: Comparative Matrix: Debt Resolution Mechanisms Across Bihar */}
            <section id="debt-resolution-strategy-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Debt Resolution Matrix for Patna Borrowers</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Compare debt relief choices in Patna. Find the best balance of savings and safety:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Pathway.</th>
                      <th>Legal Mechanism &amp. Forum.</th>
                      <th>Principal Haircut Potential.</th>
                      <th>Resolution Timeline.</th>
                      <th>Key Legal &amp. Credit Impact.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led Zonal OTS.</td>
                      <td>Direct talks with Bank Zonal Committee (SAMC).</td>
                      <td>40% – 60% Principal Waiver.</td>
                      <td>45 – 90 Days.</td>
                      <td>Full legal closure. zero liability. ₹0 No Dues Certificate.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Lok Adalat Settlement.</td>
                      <td>settlement bench under Legal Services Act.</td>
                      <td>35% – 55% Principal Waiver.</td>
                      <td>Single Session.</td>
                      <td>Binding civil decree. court fee refund. no future appeals.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Contested Court Litigation.</td>
                      <td>Civil Court / DRT Patna legal defense.</td>
                      <td>0% (Full Claim + Legal Fees).</td>
                      <td>3 – 7 Years.</td>
                      <td>High legal costs. long delays. risk of asset attachment.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Debt Reschedulement / Restructuring.</td>
                      <td>Loan tenure extension / EMI moratorium.</td>
                      <td>0% (Full Debt Repayable).</td>
                      <td>30 – 60 Days.</td>
                      <td>No principal relief. higher total interest cost over time.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Unmanaged Loan Default.</td>
                      <td>Inaction &amp. ignoring legal notices.</td>
                      <td>0% (Rising Penal Charges).</td>
                      <td>Indefinite.</td>
                      <td>Severe recovery harassment. Section 138 criminal summons.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Debt Resolution in Patna & Bihar + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Legal Relief in Patna &amp; Bihar</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Facing heavy debt in Bihar? You need skilled legal help. SettleLoans helps borrowers resolve bank, NBFC. And microfinance debt.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Our banking advocates audit loan statements. We stop recovery harassment with legal notices. We represent you at Patna Lok Adalat and courts. We secure high OTS waivers with ₹0 No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Patna, Bihar</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Find clear legal answers for Patna. Learn about SARB notices, Lok Adalat terms. And borrower rights.
              </p>

              <div className="space-y-3">
                {(jsonLdGraph['@graph'].find((item: any) => item['@type'] === 'FAQPage') as any)?.mainEntity.map((faq: any, idx: number) => (
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
                      <p>{faq.acceptedAnswer.text}</p>
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
                  href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12513&Mode=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Framework for Compromise Settlements &amp; Technical Write-offs</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://bslsa.bihar.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Bihar State Legal Services Authority (BSLSA) – National Lok Adalat Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://patnahighcourt.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">High Court of Judicature at Patna – Legal Services Committee &amp; Case Status</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12514"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Fair Practices Code &amp; Recovery Agent Regulatory Norms</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme – Online Banking Grievance Redressal Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Banking &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/case-study-sbi-lok-adalat-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SBI Lok Adalat Case Study
                </Link>
                <Link
                  href="/drt-loan-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  DRT Loan Settlement Guide
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Personal Loan Property Rights
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Recovery Harassment
                </Link>
                <Link
                  href="/cheque-bounce-hone-par-kya-hoga"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/case-study-cibil-status-settled-to-closed"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Settled to Closed Recovery
                </Link>
                <Link
                  href="/best-microfinance-loan-settlement-lawyer"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Microfinance Loan Settlement Lawyer
                </Link>
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Guide
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
                  <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                    <div className="font-bold text-slate-900 text-sm">Ashish Jhangra</div>
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Expert in PSU bank SARB talks and Lok Adalat cases. Defends microfinance disputes under RBI compromise rules in Bihar.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="text-xs text-[#1F5EFF] hover:underline flex items-center gap-1 font-semibold">
                  <span>View Profile</span>
                  <span>→</span>
                </Link>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Author</span>
                </div>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Patna &amp; Bihar Debt Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Facing SARB Notices or Recovery Threats in Bihar?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Stop recovery harassment today. Hire senior banking advocates to answer notices and secure a 40% to 60% settlement.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Free Case Evaluation
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
                  <span>RBI &amp; BSLSA Lok Adalat Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank-Stamped OTS Sanctions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Legal Representation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
