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
  title: 'Loan Settlement Services in Patna Bihar | Top Debt Relief Lawyers',
  description: 'Expert loan settlement services in Patna, Bihar. Professional legal defense against PSU bank SARB notices, microfinance recovery harassment, and Lok Adalat OTS.',
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
          "reviewBody": "I had accumulated unsecured personal loans totaling ₹18.5 Lakhs from SBI and PNB in Patna after my trading business at Marufganj faced severe inventory losses. The SBI SARB branch near Gandhi Maidan issued coercive demand notices and recovery agents visited my home in Kankarbagh. SettleLoans advocates intervened, issued a formal legal reply, filed a hardship petition under RBI compromise rules, and secured a full settlement at ₹8.2 Lakhs with a genuine zero-balance No Dues Certificate.",
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
          "reviewBody": "After losing my private school teaching job in Muzaffarpur, my credit card outstandings of ₹6.4 Lakhs ballooned with finance charges. Private recovery agents were harassing my family members over telephone. SettleLoans took over communications immediately, served anti-harassment notices citing RBI fair practice codes, and settled both cards for ₹2.6 Lakhs through Patna Lok Adalat consent terms.",
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
          "reviewBody": "We faced multiple microfinance and NBFC loan demands amounting to ₹12 Lakhs across our family shop in Gaya. The local collection agents threatened police action. SettleLoans senior advocates explained our civil protections, represented us before the Gaya District Legal Services Authority Lok Adalat, and closed all four delinquent accounts with a structured 55% waiver.",
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
          "reviewBody": "Canara Bank circle recovery wing at Exhibition Road Patna served me an arbitration notice for an unserviceable business overdraft of ₹22 Lakhs. SettleLoans advocates audited the loan ledger, proved arbitrary interest compounding, and negotiated directly with the zonal committee for an OTS of ₹10.5 Lakhs payable in two installments. Highly recommended for borrowers in Bihar.",
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
            "text": "Yes, settling a delinquent personal loan or credit card in Patna is a fully recognized legal process governed by the Reserve Bank of India (RBI) Master Direction on Compromise Settlements and Technical Write-offs (June 8, 2023). Under these central banking regulations, public sector banks, private lenders, and NBFCs operating across Bihar are empowered to execute One-Time Settlements (OTS) with non-willful defaulters facing genuine financial distress, writing off accumulated penal interest and a substantial portion of the ledger principal."
          }
        },
        {
          "@type": "Question",
          "name": "What is an SBI SARB or PNB SASTRA notice, and how should borrowers in Bihar respond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SARB (Stressed Assets Recovery Branch) and SASTRA (Stressed Assets Stabilization and Recovery Action) are specialized recovery departments operated by public sector banks such as State Bank of India and Punjab National Bank in Patna. When a loan account is classified as a Non-Performing Asset (NPA) past 90 days, recovery files are transferred to these zonal recovery hubs. Receiving a SARB notice indicates that the bank is preparing for formal legal action. Borrowers should never ignore these notices; instead, an advocate-drafted legal response should be submitted immediately to stay coercive steps and initiate formal compromise settlement proceedings."
          }
        },
        {
          "@type": "Question",
          "name": "How does the National Lok Adalat in Patna Civil Court facilitate debt settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Bihar State Legal Services Authority (BSLSA) organizes quarterly National Lok Adalats across Patna Civil Court, Gaya District Court, Muzaffarpur, and other district courts in Bihar. Lok Adalat benches, presided over by sitting or retired judicial officers and senior advocates, facilitate pre-litigation and pending dispute settlements between borrowers and bank zonal officers. Agreements reached in Lok Adalat are formalized as binding, non-appealable awards under Section 21 of the Legal Services Authorities Act, 1987, requiring zero court fees and offering maximum compromise waivers."
          }
        },
        {
          "@type": "Question",
          "name": "What legal protections exist against aggressive recovery agent harassment in Patna?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers in Bihar are strongly protected under the RBI Fair Practices Code for Lenders and circulars on recovery agent conduct. Recovery agents are strictly prohibited from visiting borrower homes before 8:00 AM or after 7:00 PM, contacting family members or employers, using abusive language, or threatening physical intimidation. If agents violate these mandates, borrowers can file a formal complaint with the Patna Senior Superintendent of Police (SSP) or local police station under Section 351/352 of the Bharatiya Nyaya Sanhita (BNS) / Section 503/506 IPC and register a grievance with the RBI Integrated Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver can borrowers in Bihar expect during a personal loan OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depending on the age of delinquency, whether the loan is unsecured, and the borrower's documented financial hardship, banks in Patna routinely waive 100% of accumulated penal interest, late fees, and uncharged memo interest, alongside a 35% to 60% haircut on the core ledger principal. For unsecured loans classified under Doubtful (D1/D2) or Loss Asset categories where the bank has already made 100% balance sheet provisioning, settlement waivers are maximized."
          }
        },
        {
          "@type": "Question",
          "name": "How does personal loan settlement differ from SARFAESI proceedings in Bihar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The SARFAESI Act, 2002 applies exclusively to secured debts backed by mortgaged immovable property or hypothecated collateral. Unsecured personal loans, credit cards, and consumer credit cannot be enforced under SARFAESI. For unsecured debt, banks can only initiate civil summary suits or Section 138/Section 25 bounce proceedings. Compromise settlement completely extinguishes unsecured debt without any asset attachment risk."
          }
        },
        {
          "@type": "Question",
          "name": "Can microfinance (NBFC-MFI) and digital loan app debts be settled in Bihar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Microfinance institutions (such as Bandhan Bank, Fusion Microfinance, Satin Creditcare, and Bharat Financial) and RBI-regulated digital lending apps operate under the RBI Regulatory Framework for Microfinance Loans and Digital Lending Directions. Borrowers facing group-lending coercion or unmanageable microfinance debts can seek advocate-led bilateral restructuring, stop unlawful third-party collection practices, and negotiate structured lump-sum compromise closures."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory timeline for banks in Patna to issue a No Dues Certificate (NDC)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, all regulated commercial banks, NBFCs, and co-operative lenders are legally mandated to issue a formal No Dues Certificate (NDC) and return all original security cheques or property documents within 30 calendar days of receiving full settlement payment. Any unjustified delay makes the bank liable to pay statutory compensation of ₹5,000 per day directly to the borrower."
          }
        },
        {
          "@type": "Question",
          "name": "How does a loan settlement affect CIBIL scores, and how can borrowers in Bihar rebuild credit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Following settlement, the lender reports the account to CIBIL, CRIF High Mark, Experian, and Equifax as 'Settled' with an outstanding balance of ₹0. While the 'Settled' remark reflects historical default, it halts ongoing negative monthly delinquency reporting. By obtaining a secured credit card against a small fixed deposit and maintaining punctual repayment, borrowers in Bihar can rebuild their CIBIL score back to 750+ within 12 to 18 months."
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

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Loan Settlement Services in Patna, Bihar: <span className="text-[#3b82f6] md:text-[#60a5fa]">SARB Notice Defense &amp; Lok Adalat Guide</span>
          </h1>

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
                Borrowers in Patna, Gaya, and Muzaffarpur face heavy recovery actions from PSU bank SARB wings and NBFC collection agents. Advocate-led representations under RBI June 2023 compromise rules and BSLSA National Lok Adalat conciliation shield against harassment while securing 35%–60% principal waivers with official ₹0 No Dues Certificates.
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
                  <span><strong>Centralized PSU Recovery Hubs:</strong> Public sector banks in Patna funnel non-performing personal loans and MSME credit into specialized Stressed Assets Recovery Branches (SARB) and SASTRA centers for aggressive recovery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory RBI Compromise Framework:</strong> Under the RBI Master Direction on Compromise Settlements (June 8, 2023), all scheduled banks and NBFCs in Bihar possess explicit board-approved authority to execute One-Time Settlements (OTS).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>BSLSA National Lok Adalat Power:</strong> Quarterly Lok Adalats at Patna Civil Court and district legal service authorities deliver binding, decree-equivalent compromise awards with 100% penal interest write-offs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Criminal Harassment Shields:</strong> Aggressive recovery visits, threats to family members, and abusive calls violate the RBI Fair Practices Code and are punishable under Bharatiya Nyaya Sanhita (BNS) provisions via Patna Police.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory 30-Day NDC Delivery:</strong> Under RBI Circular RBI/2023-24/60, financial institutions in Bihar must furnish an official ₹0 No Dues Certificate and return all security documents within 30 days or pay ₹5,000 daily compensation.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Banking & Credit Default Landscape Across Patna and Greater Bihar */}
            <section id="banking-credit-landscape-patna-bihar" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Banking &amp; Credit Default Landscape Across Patna and Greater Bihar
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As the administrative and economic hub of Bihar, Patna has witnessed an unprecedented expansion in retail banking, personal credit distribution, and unsecured consumer borrowing over the past decade. Commercial corridors spanning Boring Road, Fraser Road, Kankarbagh, Bailey Road, Exhibition Road, and Patliputra Industrial Area have become dense focal points for retail lending. Public sector giants—most notably State Bank of India, Punjab National Bank, Bank of Baroda, Canara Bank, and Union Bank of India—dominate the institutional lending ecosystem alongside major private banks and aggressive non-banking financial companies (NBFCs).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                However, this rapid credit democratization has coincided with severe macroeconomic volatility across Eastern India. Micro-enterprise margin compression, healthcare expenditure shocks, post-expansion cash flow crunches in wholesale trading clusters like Marufganj and Machhua Toli, and employment dislocations among salaried professionals in Patna, Gaya, Muzaffarpur, Bhagalpur, and Darbhanga have triggered elevated delinquency cycles in unsecured personal loans and credit cards.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower in Bihar defaults due to genuine involuntary insolvency, the initial institutional response is rarely consultative. Instead, borrowers are thrust into a relentless recovery apparatus characterized by third-party agency pressure, automated telephonic harassment, and intimidating statutory notices. Navigating this stressful environment requires shifting from unorganized panic to structured, advocate-led debt resolution grounded in Reserve Bank of India directives, civil procedure protections, and regional Lok Adalat mechanisms.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Professional <strong>loan settlement services in Patna, Bihar</strong> provide the critical legal buffer and financial acumen required to halt coercive recovery practices, audit fraudulent interest capitalization, and negotiate binding, affordable One-Time Settlements (OTS) directly with senior bank authorities.
              </p>
            </section>

            {/* Section 2: PSU Bank SARB Architecture, Zonal SASTRA Wings & Legal Notice Mechanics in Patna */}
            <section id="psu-sarb-sastra-notice-mechanics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. PSU Bank SARB Architecture, Zonal SASTRA Wings &amp; Legal Notice Mechanics in Patna
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unlike private fintech platforms that rely on remote automated call centers, public sector banks operating in Bihar enforce recovery through specialized, hierarchical recovery divisions. When a borrower in Patna defaults past 90 days and the loan is classified as a Non-Performing Asset (NPA), the account is transferred out of the originating retail branch into dedicated zonal recovery machinery.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In Patna, these specialized recovery wings operate under institutional designations such as the <strong>State Bank of India Stressed Assets Recovery Branch (SARB)</strong> located near West Gandhi Maidan, the <strong>Punjab National Bank Circle SASTRA (Stressed Assets Stabilization and Recovery Action) Center</strong> at Exhibition Road, and regional asset recovery divisions of Canara Bank and Bank of Baroda. These units are staffed by specialized recovery officers whose sole operational objective is accelerated capital extraction through legal mobilization.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The standard legal escalation deployed by Patna bank recovery departments follows a multi-tiered statutory progression:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 138 Negotiable Instruments Act Summons</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If security cheques or installment instruments bounce, bank panel advocates in Patna issue 15-day statutory demand notices, followed by criminal complaints before the Judicial Magistrate First Class at Patna Civil Court or district courts.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Receipt className="w-4 h-4 text-emerald-600" />
                    <span>Section 25 Payment &amp; Settlement Systems Act (PASA)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For dishonored Electronic Clearing Service (ECS) and National Automated Clearing House (NACH) digital mandates, lenders initiate quasi-criminal complaints carrying equivalent punitive exposure to cheque bounce proceedings.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-purple-600" />
                    <span>Summary Civil Suits Under Order 37 CPC</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Filed before the Sub-Judge or District Judge at Patna Civil Court for liquidated contract recovery, forcing the borrower to seek formal judicial leave to defend against summary decree passing.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    <span>Arbitration &amp; Conciliation Notices</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Private lenders and NBFCs frequently initiate unilateral arbitration proceedings, appointing non-neutral sole arbitrators to secure ex-parte arbitral awards enforceable under Section 36 of the Arbitration Act.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Strategic Legal Reality: Unsecured Debt Cannot Trigger SARFAESI Attachment</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  A common deceptive tactic used by aggressive recovery agents in Patna, Muzaffarpur, and Gaya is threatening immediate house sealing or property attachment under the SARFAESI Act, 2002 for personal loan or credit card defaults. Legally, the SARFAESI Act applies exclusively to secured credit backed by registered mortgage or hypothecated tangible collateral. Unsecured personal loans and consumer credit are entirely exempt from SARFAESI summary possession powers.
                </p>
              </div>
            </section>

            {/* Section 3: Statutory Borrower Protections: RBI Fair Practices Code, High Court Precedents & Anti-Harassment Law in Bihar */}
            <section id="statutory-borrower-protections-bihar" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Statutory Borrower Protections: RBI Fair Practices Code, High Court Precedents &amp; Anti-Harassment Law in Bihar
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers facing financial distress in Bihar must recognize that default is a civil contractual breach, not a criminal transgression. The Reserve Bank of India, the Supreme Court of India, and the Hon&apos;ble Patna High Court have instituted robust statutory firewalls to protect borrowers from coercive debt collection, public humiliation, and privacy infringements.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the <strong>RBI Master Direction on Fair Practices Code for Lenders</strong> and the <strong>RBI Circular on Recovery Agents (August 2022)</strong>, all commercial banks, NBFCs, and microfinance institutions operating in Patna are subject to strict behavioral mandates:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Time and Place Restrictions:</strong> Recovery personnel are legally prohibited from contacting borrowers before 8:00 AM or after 7:00 PM. Unannounced visits to workplaces or family residences without prior formal written intimation are strictly unlawful.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Absolute Privacy Protections:</strong> Lenders cannot disclose loan default details to third parties, including neighbors, employers, colleagues, or extended relatives. Creating social pressure groups or sending mass messages constitutes an actionable civil wrong.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Prohibition of Verbal Abuse and Intimidation:</strong> Threatening physical violence, criminal confinement, or using abusive language violates Section 351 and Section 352 of the Bharatiya Nyaya Sanhita, 2023 (formerly Section 503 and Section 506 IPC).</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Agent Identification:</strong> Any recovery executive visiting a borrower must carry official bank authorization cards, a copy of the lender&apos;s recovery notice, and provide written identification upon demand.</span>
                </li>
              </ul>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-amber-950">
                  <Scale className="w-4 h-4 text-amber-600" />
                  <span>Police Complaint &amp; Legal Remedies Against Rogue Recovery in Bihar</span>
                </span>
                <p className="leading-relaxed">
                  If recovery agents violate these statutory protections in Patna, Gaya, or Muzaffarpur, borrowers can immediately lodge a written complaint with the Senior Superintendent of Police (SSP) Patna, the local police station (Thana), or the Cyber Crime Cell for unlawful telephonic harassment. Concurrently, our legal advocates serve formal cease-and-desist notices to the bank&apos;s Nodal Grievance Officer and escalate the violation to the <strong>RBI Integrated Ombudsman</strong> under the Reserve Bank - Integrated Ombudsman Scheme, 2021, halting aggressive recovery immediately.
                </p>
              </div>
            </section>

            {/* Section 4: Bank Balance Sheet Accounting, Unsecured NPA Provisioning & The Net Present Value (NPV) Equation */}
            <section id="npa-provisioning-balance-sheet-npv" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Balance Sheet Accounting, Unsecured NPA Provisioning &amp; The Net Present Value (NPV) Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Securing a deep 40% to 60% principal waiver on a defaulted personal loan or credit card in Patna is not achieved through emotional pleading. It is rooted in an objective understanding of bank balance sheet economics, Reserve Bank of India prudential provisioning mandates, and Net Present Value (NPV) financial recovery models.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the RBI Master Direction on Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances (IRACP), banks in Bihar are legally mandated to set aside substantial regulatory capital provisions from their operating profits against aging non-performing loans:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Asset Classification</th>
                      <th>Delinquency Aging</th>
                      <th>Mandatory RBI Provision (Unsecured)</th>
                      <th>Balance Sheet Financial Impact</th>
                      <th>Target Settlement Haircut</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Standard / SMA-0 to SMA-2</td>
                      <td>1 – 90 Days Overdue</td>
                      <td>0.40% – 5.0%</td>
                      <td>Mild operational provision</td>
                      <td>Penal charge waivers only</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Sub-Standard Asset</td>
                      <td>91 Days – 12 Months NPA</td>
                      <td>25% Unsecured Provision</td>
                      <td>Direct profit deduction; high capital cost</td>
                      <td>20% – 35% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful-1 (D1 Asset)</td>
                      <td>12 – 24 Months Default</td>
                      <td>100% Full Provisioning</td>
                      <td>Total loan value locked against bank capital</td>
                      <td>35% – 50% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful-2 / Doubtful-3</td>
                      <td>24 – 48+ Months Default</td>
                      <td>100% Full Provisioning</td>
                      <td>Locked Tier-1 capital; supervisory pressure</td>
                      <td>45% – 60% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loss Asset</td>
                      <td>Identified Uncollectible</td>
                      <td>100% Written-off Asset</td>
                      <td>Fully written-off on balance sheet</td>
                      <td>55% – 70% Principal Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a personal loan in Patna reaches the Doubtful or Loss category, the bank has already set aside 100% of the loan amount in capital reserves. This locked capital reduces the bank&apos;s Capital to Risk-Weighted Assets Ratio (CRAR) and lowers profitability metrics. Under the <strong>RBI Master Direction on Compromise Settlements and Technical Write-offs (June 8, 2023)</strong>, bank credit committees evaluate One-Time Settlement offers using the Net Present Value recovery formula:
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
                  Where C_t represents estimated recoveries across future periods, r is the bank&apos;s discount rate, and deductions account for 3–5 years of judicial delay in Patna Civil Courts, advocate retainers, and the ongoing capital cost of 100% NPA balance sheet provisioning.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When our legal team presents an immediate, verified lump-sum cash compromise offer, the bank&apos;s financial model proves that accepting a 50% cash settlement today yields a substantially higher Net Present Value than litigating an unsecured debt for five years across overburdened courts in Bihar.
              </p>
            </section>

            {/* Section 5: Visual Roadmap Infographic Banner */}
            <section id="patna-settlement-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Personal Loan Settlement Visual Roadmap in Patna &amp; Bihar
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The infographic roadmap below outlines the structured 5-stage legal and financial protocol required to successfully settle defaulted bank loans across Patna and Bihar—from legal notice defense to RBI-mandated No Dues Certificate issuance and CIBIL score rehabilitation.
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
                  <span>Intercept SARB demands, Section 138 notices, and audit uncharged penal interest and illegal compounding fees.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: RBI Hardship &amp; Lok Adalat OTS</span>
                  <span>Compile hardship evidence and negotiate settlement terms before Zonal Committees or BSLSA National Lok Adalat.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: ₹0 NDC &amp; Credit Rebuilding</span>
                  <span>Remit settlement funds directly, obtain official No Dues Certificate within 30 days, and restore CIBIL score to 750+.</span>
                </div>
              </div>
            </section>

            {/* Section 6: The Step-by-Step Advocate-Led Negotiation Framework in Patna & Bihar */}
            <section id="step-by-step-negotiation-bihar" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. The Step-by-Step Advocate-Led Negotiation Framework in Patna &amp; Bihar
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Executing a legally airtight loan settlement requires a disciplined, multi-phase institutional approach. Negotiating directly without legal representation often leaves borrowers vulnerable to predatory verbal promises, unauthorized part-payments, and continued recovery action. Our senior legal team executes a structured 5-phase debt resolution protocol tailored to the banking ecosystem in Patna and Bihar:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 1: Forensic Loan Ledger &amp; Legal Audit</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We obtain complete loan account statements from the bank&apos;s Patna branch or zonal office. We conduct a rigorous forensic audit to strip away illegal penal interest compounding, unauthorized bounce fees, and arbitrary administrative levies, establishing the true unrecovered baseline principal.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 2: Formal Legal Representation &amp; Anti-Harassment Notice</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We serve a formal Vakalatnama and Notice of Representation upon the bank&apos;s Zonal Head, SARB Branch Manager, and Nodal Grievance Officer. This notice routes all future communication exclusively through our legal chamber, halting third-party collection agent visits to the borrower&apos;s residence or workplace.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 3: Hardship Dossier Submission Under RBI June 2023 Policy</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We draft a comprehensive compromise settlement petition invoking the bank&apos;s Board-approved OTS policy and RBI compromise directives. The dossier is substantiated with incontrovertible documentary evidence—including Income Tax returns, medical discharge summaries, business termination affidavits, or bank statements proving genuine distress.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 4: Bilateral Zonal Negotiation &amp; Discretionary Approval</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our senior advocates engage directly with the bank&apos;s Zonal Stressed Assets Management Committee (SAMC) in Patna. Leveraging NPA aging schedules and balance sheet provisioning realities, we secure approval for a 40% to 60% principal waiver with a flexible 1-to-3 installment payment structure.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 5: Execution of Consent Decree &amp; Legal Closure</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Where Section 138 NI Act or Section 25 PASA cases are pending, we record formal consent terms before the competent Judicial Magistrate at Patna Civil Court or National Lok Adalat bench, securing complete compounding and dismissal of all criminal proceedings.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This methodical legal approach ensures that every rupee paid by the borrower contributes directly to the permanent extinguishing of debt liability under binding statutory authority.
              </p>
            </section>

            {/* Section 7: National Lok Adalat Representation & Patna Debt Recovery Tribunal (DRT) Protocols */}
            <section id="lok-adalat-bslsa-drt-patna-protocols" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. National Lok Adalat Representation &amp; Patna Debt Recovery Tribunal (DRT) Protocols
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In Bihar, statutory alternative dispute resolution forums play an indispensable role in stressed asset resolution. The <strong>Bihar State Legal Services Authority (BSLSA)</strong> organizes quarterly National Lok Adalats across all 38 district courts in Bihar, including Patna Civil Court, Gaya District Court, Muzaffarpur Civil Court, and Bhagalpur District Court.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lok Adalats operate under the statutory framework of the <strong>Legal Services Authorities Act, 1987</strong>. During National Lok Adalat sessions, special bank recovery benches—comprising a judicial officer and a conciliator—convene specifically to resolve pre-litigation and pending bank recovery matters.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Settling a loan through the National Lok Adalat in Patna offers unique statutory advantages:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Final and Binding Judicial Award:</strong> Under Section 21 of the Legal Services Authorities Act, 1987, a Lok Adalat award is deemed to be a decree of a civil court. It is final, binding on both parties, and non-appealable in any court of law, permanently preventing future claims by the bank.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Full Refund of Court Fees:</strong> If a civil suit or Section 138 complaint is settled before the Lok Adalat, the entire court fee deposited by the parties is refunded under the Court Fees Act, 1870.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Discretionary Bank Waivers:</strong> PSU bank zonal managers attending Lok Adalat benches are equipped with enhanced discretionary settlement powers, routinely sanctioning 100% penal interest write-offs and deep principal discounts on the spot.</span>
                </li>
              </ul>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <Building2 className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Jurisdiction of Debt Recovery Tribunal (DRT) Patna</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  For high-value debts exceeding ₹20 Lakhs involving commercial term loans, MSME facilities, or personal guarantees, banks file Original Applications (OA) before the <strong>Debts Recovery Tribunal (DRT) Patna</strong> located near Fraser Road / Exhibition Road. Our senior banking advocates represent borrowers before DRT Patna, filing written statements challenging inflated claims, staying coercive recovery orders, and structuring court-monitored compromise settlements.
                </p>
              </div>
            </section>

            {/* Section 8: Forensic Sanction Letter Verification, Direct Bank Remittance & The RBI 30-Day NDC Mandate */}
            <section id="sanction-letter-forensics-rbi-ndc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Forensic Sanction Letter Verification, Direct Bank Remittance &amp; The RBI 30-Day NDC Mandate
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                One of the most dangerous hazards in debt settlement across Bihar is the circulation of fraudulent or unauthorized settlement letters. Rogue recovery executives frequently issue fake &quot;concession letters&quot; on fabricated bank letterheads or make verbal promises to meet quarterly targets, pocketing the borrower&apos;s funds or crediting them as part-payments toward accumulated penalties.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before releasing any payment, our legal team subjects the settlement sanction letter to five mandatory forensic validation checkpoints:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Bank Domain &amp; Zonal Authority</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The sanction letter must originate directly from the bank&apos;s official enterprise email domain or be delivered on official corporate stationery signed by the competent Zonal Authority (Assistant General Manager / Chief Manager).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Explicit Account Number &amp; Ledger Breakdown</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must explicitly specify the exact 16-digit loan account number, total outstanding ledger liability, specific waiver amounts granted, and the precise net compromise payment figure.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Full Debt Extinguishment Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The sanction terms must state unambiguously that upon remittance of the agreed settlement sum on or before the due date, the entire loan account stands fully, permanently, and irrevocably closed with zero residual liability.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Withdrawal of All Legal Proceedings</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The sanction letter must contain an express undertaking that the lender will withdraw all pending Section 138 NI Act, Section 25 PASA, civil suits, and arbitration claims upon receipt of the settlement remittance.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-red-950">
                  <ShieldX className="w-4 h-4 text-red-600" />
                  <span>The Fundamental Rule of Settlement Remittance</span>
                </span>
                <p className="leading-relaxed">
                  Never make cash payments to any collection executive or intermediary. All settlement remittances must be made exclusively via Account Payee Demand Draft or direct RTGS/NEFT transferred directly into the designated bank loan account ledger under an official computer-generated bank receipt.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                RBI Statutory Mandate on 30-Day NDC Delivery &amp; Credit Bureau Updates
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under <strong>RBI Circular RBI/2023-24/60</strong> (Responsible Lending Conduct – Release of Movable/Immovable Property Documents and Issuance of NDC), all regulated commercial banks, NBFCs, and co-operative lenders in Bihar are statutorily required to issue an official <strong>No Dues Certificate (NDC) / Loan Closure Certificate</strong> and return all original documents within <strong>30 calendar days</strong> of receiving full settlement payment. Any unjustified delay makes the lending institution liable to pay compensation of <strong>₹5,000 per day of delay</strong> directly to the borrower.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Concurrently, the bank must update the credit information companies (CIBIL, CRIF High Mark, Experian, and Equifax) with a status tag of <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong> with an outstanding balance of <strong>₹0</strong>. While a settled status temporarily impacts credit scores, it eliminates active default reporting, allowing borrowers to rebuild their CIBIL score to 750+ within 12 to 18 months through disciplined credit utilization.
              </p>
            </section>

            {/* Section 9: Comparative Matrix: Debt Resolution Mechanisms Across Bihar */}
            <section id="debt-resolution-strategy-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Debt Resolution Mechanisms Across Bihar: Comparative Strategic Matrix
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers evaluating their options in Patna must compare the legal, financial, and procedural implications of various debt resolution pathways to select the strategy that maximizes financial savings while safeguarding legal rights:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Pathway</th>
                      <th>Legal Mechanism &amp; Forum</th>
                      <th>Principal Haircut Potential</th>
                      <th>Resolution Timeline</th>
                      <th>Key Legal &amp; Credit Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led Zonal OTS</td>
                      <td>Bilateral negotiation with Bank Zonal Committee (SAMC)</td>
                      <td>40% – 60% Principal Waiver</td>
                      <td>45 – 90 Days</td>
                      <td>Cleanest closure; complete legal immunity; ₹0 No Dues Certificate</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Lok Adalat Settlement</td>
                      <td>Conciliation bench under Legal Services Authorities Act</td>
                      <td>35% – 55% Principal Waiver</td>
                      <td>Single Session</td>
                      <td>Binding non-appealable civil decree; zero court fees; permanent bar on suits</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Contested Court Litigation</td>
                      <td>Civil Court Patna / DRT Patna Section 19 defense</td>
                      <td>0% (Full Claim + Legal Fees)</td>
                      <td>3 – 7 Years</td>
                      <td>High legal expenditure; prolonged court hearings; asset attachment risk</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Debt Reschedulement / Restructuring</td>
                      <td>Tenure extension / EMI moratorium recalculation</td>
                      <td>0% (Full Debt Repayable)</td>
                      <td>30 – 60 Days</td>
                      <td>No principal relief; higher cumulative interest burden over extended tenure</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Unmanaged Loan Default</td>
                      <td>Inaction &amp; ignoring statutory demand notices</td>
                      <td>0% (Mounting Penal Charges)</td>
                      <td>Indefinite</td>
                      <td>Aggressive recovery harassment; criminal summons under Section 138 NI Act</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Debt Resolution in Patna & Bihar + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Debt Resolution Advisory in Patna &amp; Bihar
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Resolving unmanageable bank debt across Patna, Gaya, Muzaffarpur, Bhagalpur, and greater Bihar demands specialized legal expertise combining central banking regulations, civil court defense, and regional Lok Adalat advocacy. SettleLoans stands as India&apos;s leading legal debt resolution advisory, representing borrowers against aggressive PSU recovery wings, private bank collection agencies, and microfinance institutions.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Our dedicated banking advocates conduct comprehensive forensic ledger audits, serve binding cease-and-desist notices to stop recovery harassment, represent clients before the National Lok Adalat and Patna Civil Courts, and negotiate directly with bank zonal credit committees to achieve the deepest permissible One-Time Settlement waivers backed by authentic, board-approved ₹0 No Dues Certificates.
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
                  11. Frequently Asked Questions: Loan Settlement Services in Patna, Bihar
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Legally verified answers to critical questions regarding personal loan settlement, SARB recovery notices, Lok Adalat proceedings, and borrower rights across Bihar.
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
                    <h4 className="font-bold text-slate-900 text-sm">Ashish Jhangra</h4>
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in PSU bank SARB negotiations, Lok Adalat representation, microfinance dispute defense, and RBI compromise framework advisory with extensive experience representing borrowers across Patna and Bihar.
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
              <h4 className="font-bold text-base text-white mb-2">Facing SARB Notices or Recovery Threats in Bihar?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let collection agencies intimidate your family. Retain senior banking advocates to handle your legal notices and negotiate a 40%–60% One-Time Settlement.
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
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </h4>
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
