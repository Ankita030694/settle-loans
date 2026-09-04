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
  title: 'Personal Loan Settlement in Ranchi | SettleLoans',
  description: 'Learn how to settle personal loans legally in Ranchi. Stop bank recovery agent calls and resolve debt with up to 60% OTS waiver via SettleLoans.',
  keywords: [
    'personal loan settlement company in ranchi jharkhand',
    'personal loan settlement ranchi',
    'loan settlement lawyer in ranchi jharkhand',
    'sbi sarb ranchi loan settlement',
    'bank loan ots jharkhand lok adalat',
    'loan recovery harassment ranchi police complaint',
    'debt relief services jamshedpur dhanbad jharkhand',
    'jhalsa national lok adalat loan settlement ranchi',
    'psu employee loan default salary attachment jharkhand',
    'mining contractor debt settlement jharkhand',
    'drt ranchi loan recovery defense'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-ranchi',
  },
  openGraph: {
    title: 'Personal Loan Settlement in Ranchi, Jharkhand: Advocate Defense & Bank OTS Guide',
    description: 'Struggling with unmanageable personal loans or credit card debt in Ranchi, Jamshedpur, or Dhanbad? Learn how advocate-led OTS negotiations, SARB notice legal defense, and JHALSA Lok Adalat settlements can reduce your debt by 40% to 60%.',
    url: 'https://www.settleloans.in/personal-loan-settlement-ranchi',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-ranchi.jpg',
        width: 1200,
        height: 675,
        alt: 'Personal Loan Settlement Company in Ranchi Jharkhand Legal Resolution Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Loan Settlement in Ranchi Jharkhand: Legal OTS & Lok Adalat Representation',
    description: 'Facing SARB recovery notices, Section 138 summons, or collection pressure in Jharkhand? Settle personal loans and credit card debt legally with advocate-led bank negotiations.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-ranchi.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-ranchi#webpage",
      "url": "https://www.settleloans.in/personal-loan-settlement-ranchi",
      "name": "Personal Loan Settlement Company in Ranchi Jharkhand | Top Debt Relief Lawyers",
      "description": "Leading personal loan settlement company in Ranchi, Jharkhand. Expert legal defense against PSU bank SARB notices, mining debt distress, JHALSA Lok Adalat OTS & bank harassment.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-loan-settlement-ranchi#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-ranchi#breadcrumb",
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
          "name": "Ranchi Jharkhand Loan Settlement",
          "item": "https://www.settleloans.in/personal-loan-settlement-ranchi"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settlement-ranchi#article",
      "headline": "Personal Loan Settlement Company in Ranchi, Jharkhand: Advocate Defense & Bank OTS Guide",
      "description": "An exhaustive statutory and legal analysis of personal loan and unsecured debt settlement across Ranchi, Jamshedpur, Dhanbad, and Jharkhand. Explains PSU bank SARB procedures, Section 138 defense, JHALSA Lok Adalat awards, and RBI compromise settlement mandates.",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-ranchi.jpg",
      "datePublished": "2026-08-28T10:00:00+05:30",
      "dateModified": "2026-08-28T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-loan-settlement-ranchi#webpage"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-ranchi#service",
      "name": "SettleLoans - Ranchi & Jharkhand Debt Resolution & Loan Settlement Advisory",
      "description": "Premier legal representation and debt settlement advisory for borrowers facing delinquent personal loans, credit card debt, PSU bank SARB notices, and mining contractor debt disputes across Ranchi, Jamshedpur, Dhanbad, Bokaro, and Jharkhand.",
      "url": "https://www.settleloans.in/personal-loan-settlement-ranchi",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-ranchi.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Main Road, Near Overbridge, Kuldip Complex",
        "addressLocality": "Ranchi",
        "addressRegion": "Jharkhand",
        "postalCode": "834001",
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
        "reviewCount": "1620",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sanjay Kumar Mahto"
          },
          "datePublished": "2026-05-14",
          "reviewBody": "I work as a mining logistics contractor in Ranchi and Ramgarh. Delayed coal bills hurt my cash flow. I defaulted on ₹21 Lakhs across SBI and Bank of India. The SBI SARB branch near Kutchery sent aggressive notices. SettleLoans lawyers stepped in. They proved my cash flow issues and got an OTS at ₹9.4 Lakhs. I received a full waiver on penal fees and an official No Dues Certificate.",
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
            "name": "Ananya Mukherjee"
          },
          "datePublished": "2026-06-20",
          "reviewBody": "I faced medical emergencies while working in Jamshedpur. My credit card dues grew to ₹7.8 Lakhs with high interest. Recovery agents tried calling my office and family. SettleLoans sent legal notices under RBI fair practice codes. They represented me before the JHALSA National Lok Adalat bench. We settled both cards for ₹3.1 Lakhs.",
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
            "name": "Rajeshwar Pandey"
          },
          "datePublished": "2026-07-08",
          "reviewBody": "I am a retired PSU employee living in Dhanbad. I co-signed personal loans for a family venture that failed. Recovery agents visited my home and created stress. SettleLoans advocates intervened. They protected my pension under Section 60 CPC. Then they closed an OTS with Canara Bank at a 55% waiver.",
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
            "name": "Binod Bihari Singh"
          },
          "datePublished": "2026-08-02",
          "reviewBody": "PNB Circle SASTRA in Ranchi sent an arbitration notice for my ₹16.5 Lakhs business loan in Bokaro. SettleLoans advocates audited my loan ledger. They showed unfair interest charges. They spoke with the zonal committee and secured an OTS for ₹7.6 Lakhs paid in two parts. I highly recommend them.",
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-ranchi#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I legally settle an unsecured personal loan or credit card debt in Ranchi, Jharkhand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Settling a personal loan or credit card in Ranchi is fully legal. The process follows the RBI Master Direction on Compromise Settlements (June 8, 2023). Public sector banks, private banks, and NBFCs across Jharkhand can approve One-Time Settlements (OTS) for borrowers in genuine financial distress. The bank waives penal interest, extra fees. And a large share of the principal."
          }
        },
        {
          "@type": "Question",
          "name": "What is an SBI SARB or PNB SASTRA notice, and how should borrowers in Jharkhand respond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SARB (Stressed Assets Recovery Branch) and SASTRA are special recovery wings run by PSU banks like SBI and PNB in Ranchi. When a loan is overdue for over 90 days, the branch sends the file to SARB. A SARB notice means the bank is ready for legal action. Never ignore this notice. Send an advocate-drafted reply right away to stop recovery pressure and start OTS talks."
          }
        },
        {
          "@type": "Question",
          "name": "How does the JHALSA National Lok Adalat in Ranchi Civil Court facilitate debt settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Jharkhand State Legal Services Authority (JHALSA) holds quarterly National Lok Adalats in Ranchi Civil Court, Jamshedpur, Dhanbad, and Bokaro. Sitting judges and senior lawyers preside over these benches. They help borrowers and bank officials reach a fair compromise. Under Section 21 of the Legal Services Authorities Act, 1987, a Lok Adalat award is final and legally binding. There are no court fees. And banks offer maximum fee waivers."
          }
        },
        {
          "@type": "Question",
          "name": "Are PSU and government employees in Jharkhand protected against unlawful salary attachment for personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Section 60 of the Code of Civil Procedure (CPC), 1908 protects staff of CCL, BCCL, CMPDI, SAIL, HEC, railways. And state offices. The law bans the attachment of the first thousand rupees and two-thirds of the rest of your salary. Also, Provident Fund (PF), gratuity. And pensions are fully safe from attachment."
          }
        },
        {
          "@type": "Question",
          "name": "What legal protections exist against aggressive recovery agent harassment in Ranchi and the mining belt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers in Jharkhand are protected under the RBI Fair Practices Code. Recovery agents cannot call or visit before 8:00 AM or after 7:00 PM. They cannot call your family, visit your workplace, or enter PSU housing colonies without consent. For violations, file a complaint with the Senior Superintendent of Police (SSP) Ranchi under Section 351/352 of Bharatiya Nyaya Sanhita (BNS) and raise a grievance with the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver can borrowers in Jharkhand expect during a personal loan OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Waivers depend on loan delay, hardship proof. And whether the debt is unsecured. Banks in Ranchi routinely waive 100% of penal charges and late fees. They also offer a 35% to 60% waiver on the principal balance. When a loan reaches Doubtful (D1/D2) or Loss asset status, the bank has already provisioned for the loss. This allows deeper discounts."
          }
        },
        {
          "@type": "Question",
          "name": "Can mining contractors and MSME suppliers in Jharkhand settle unsecured business loans and personal credit lines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Mining contractors, vendors. And small business owners in Ranchi, Ramgarh, Dhanbad, and Jamshedpur can settle unpaid credit lines. If you face cash flow issues from delayed client bills, our lawyers draft compromise requests with bank records, tax returns. And contract proof."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory timeline for banks in Ranchi to issue a No Dues Certificate (NDC)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, all banks and NBFCs must issue a No Dues Certificate (NDC) and return original papers within 30 days of receiving full settlement payment. If the lender delays without cause, it must pay the borrower ₹5,000 for each day of delay."
          }
        },
        {
          "@type": "Question",
          "name": "How does personal loan settlement affect CIBIL scores, and how can borrowers in Jharkhand rebuild credit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After settlement, the bank reports the account to CIBIL and CRIF High Mark as 'Settled' with a ₹0 balance. This stops negative monthly reporting. Borrowers can rebuild their score above 750 within 12 to 18 months by taking a secured credit card against a fixed deposit and paying on time."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'regional-credit-landscape-ranchi-jharkhand', title: '1. Banking Landscape & Debt Stresses Across Jharkhand' },
  { id: 'psu-sarb-sastra-notices-ranchi', title: '2. PSU Bank SARB Wings & Legal Notice Mechanics in Ranchi' },
  { id: 'statutory-borrower-protections-jharkhand', title: '3. Statutory Protections & Anti-Harassment Law' },
  { id: 'npa-accounting-npv-settlement-formula', title: '4. Bank NPA Accounting & NPV Settlement Formula' },
  { id: 'ranchi-settlement-visual-roadmap', title: '5. Visual Settlement Roadmap & Infographic' },
  { id: 'advocate-negotiation-framework-jharkhand', title: '6. Five-Phase Advocate Negotiation Framework' },
  { id: 'jhalsa-lok-adalat-drt-ranchi-protocols', title: '7. JHALSA Lok Adalat & DRT Ranchi Protocols' },
  { id: 'sanction-letter-forensics-rbi-ndc', title: '8. Sanction Letter Forensics & 30-Day NDC Mandate' },
  { id: 'jharkhand-debt-resolution-matrix', title: '9. Comparative Debt Resolution Strategic Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' }
];

export default function PersonalLoanSettlementRanchiPage() {
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
            <span>Ranchi &amp; Jharkhand Mining Belt • Legal Debt Relief &amp; Bank OTS Advisory</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Personal Loan Settlement in Ranchi: Legal OTS Guide</h1>

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
              <span>RBI &amp; JHALSA Lok Adalat Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Settle Your Loan in Ranchi</span>
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
                <span>Ranchi Stressed Debt Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Borrowers in Ranchi, Jamshedpur, Dhanbad, and Bokaro often face harsh recovery steps from PSU bank SARB teams and private agents. Legal support under RBI June 2023 rules and JHALSA Lok Adalat benches stops harassment. It also secures 35% to 60% principal waivers with official ₹0 No Dues Certificates.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Debt Relief &amp; Loan Settlement in Ranchi &amp; Jharkhand</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Centralized PSU Recovery Teams.</strong> Public sector banks in Ranchi send bad retail and personal loans to SARB and SASTRA cells for legal recovery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory RBI Compromise Rules.</strong> Under the RBI Master Direction on Compromise Settlements (June 8, 2023), banks and NBFCs in Jharkhand can approve One-Time Settlements (OTS).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>JHALSA National Lok Adalat.</strong> Regular Lok Adalats at Ranchi Civil Court grant binding settlement orders with full penal fee waivers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Protection from Harassment.</strong> Home visits, office threats. And abuse violate the RBI Fair Practices Code. They are punishable under Bharatiya Nyaya Sanhita (BNS) with Ranchi Police.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory 30-Day NDC Delivery.</strong> Under RBI Circular RBI/2023-24/60, lenders must issue a ₹0 No Dues Certificate within 30 days or pay a ₹5,000 daily penalty.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Banking & Credit Default Landscape Across Ranchi and Jharkhand's Industrial-Mining Corridor */}
            <section id="regional-credit-landscape-ranchi-jharkhand" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Banking &amp; Default Landscape in Ranchi</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Ranchi is the capital of Jharkhand. It hosts mining firms, steel offices. And transport hubs. Main Road, Doranda, Lalpur, Ashok Nagar, Morabadi, Hinoo, Namkum, Kanke Road, and Harmu have seen rapid growth in personal loans. Major banks like SBI, PNB, Bank of India, and Canara Bank operate here alongside private lenders and digital NBFCs.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Jharkhand relies heavily on industry. Many borrowers work for public sector units like CCL Ranchi, BCCL Dhanbad, CMPDI, SAIL Bokaro, MECON, and HEC Ranchi. Local vendors, coal truckers. And contractors also use personal loans to fund their work.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When payments stop due to slow bills or illness, loan default happens. Personal loans and credit cards become hard to pay. After 90 days of missed EMIs, banks mark accounts as Non-Performing Assets (NPAs) and start recovery.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Handling banks alone can lead to agent harassment and costly legal notices. A trusted <strong>personal loan settlement company in Ranchi, Jharkhand</strong> protects your rights. Our advocates help you get a formal One-Time Settlement (OTS) directly with bank zonal heads.
              </p>
            </section>

            {/* Section 2: PSU Bank SARB Architecture, Zonal SASTRA Wings & Legal Notice Mechanics in Ranchi */}
            <section id="psu-sarb-sastra-notices-ranchi" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. PSU Bank SARB Structure in Ranchi</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Public sector banks in Jharkhand handle bad loans through centralized recovery hubs. When an unsecured personal loan defaults past 90 days, the branch transfers the file to a specialized stressed asset recovery wing.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In Ranchi, key recovery hubs include the <strong>State Bank of India Stressed Assets Recovery Branch (SARB)</strong> near Kutchery and Main Road. Another major center is the <strong>Punjab National Bank Circle SASTRA</strong> office. Bank of India and Canara Bank also run regional recovery cells at Club Road. These teams manage bad loan recovery across Ranchi, Khunti, Ramgarh, Gumla, and Lohardaga.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Bank recovery units in Jharkhand follow a set legal path to recover money:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 138 Negotiable Instruments Act Summons</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When cheques bounce, bank lawyers send a 15-day notice. If unpaid, they file criminal cases in Ranchi Civil Court or district courts across Jharkhand.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Receipt className="w-4 h-4 text-emerald-600" />
                    <span>Section 25 Payment &amp; Settlement Systems Act (PASA)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For dishonored NACH or auto-debit payments, lenders file cases that carry the same legal weight as cheque bounce cases.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-purple-600" />
                    <span>Summary Civil Suits Under Order 37 CPC</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks file these suits before Ranchi Civil Court judges for fast debt decrees. Borrowers must apply for court leave to defend.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    <span>Unilateral Arbitration Notices</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Private lenders and NBFCs often start arbitration on their own. They appoint sole arbitrators to get fast awards under Section 36 of the Arbitration and Conciliation Act.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Strategic Legal Reality: Unsecured Debt Cannot Trigger SARFAESI Attachment</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  Recovery agents in Ranchi, Dhanbad, and Jamshedpur often threaten home seizure under the SARFAESI Act, 2002 for personal loans. In law, SARFAESI applies only to secured loans backed by a registered mortgage. Unsecured personal loans are fully exempt from SARFAESI property takeovers.
                </p>
              </div>
            </section>

            {/* Section 3: Statutory Borrower Protections: RBI Fair Practices Code, High Court Precedents & Anti-Harassment Law in Jharkhand */}
            <section id="statutory-borrower-protections-jharkhand" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Borrower Legal Protections in Ranchi</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Loan default is a civil matter, not a crime. The RBI, the Supreme Court of India. And the High Court of Jharkhand at Ranchi hold that banks cannot use force against borrowers.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks and NBFCs in Ranchi, Jamshedpur, Bokaro, and Dhanbad must follow clear rules. These are set by the <strong>RBI Master Direction on Fair Practices Code for Lenders</strong> and the <strong>RBI Guidelines on Recovery Agents (August 2022)</strong>:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Time and Place Limits.</strong> Agents cannot call or visit before 8:00 AM or after 7:00 PM. Unannounced visits to your home or office are unlawful.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Workplace Privacy.</strong> Lenders cannot share loan details with bosses, coworkers, or family. They cannot contact neighbors in CCL, BCCL, or SAIL townships.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>No Threats or Abuse.</strong> Agents cannot threaten arrest or police action. Using abusive words violates Section 351 and Section 352 of Bharatiya Nyaya Sanhita, 2023 (formerly Sections 503 and 506 IPC).</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Agent ID Proof.</strong> Every recovery agent must carry a bank ID card. They must show the bank authorization letter when asked.</span>
                </li>
              </ul>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Salaried staff in Jharkhand have strong legal protection under <strong>Section 60 of the Code of Civil Procedure (CPC), 1908</strong>. Under Section 60(1)(i), the first one thousand rupees and two-thirds of the remaining salary are exempt from civil court attachment. Under Section 60(1)(k), Provident Fund (PF), Gratuity. And pensions cannot be attached by any court or lender.
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-amber-950">
                  <Scale className="w-4 h-4 text-amber-600" />
                  <span>Police Grievance &amp; Legal Remedies Against Rogue Recovery in Jharkhand</span>
                </span>
                <p className="leading-relaxed">
                  If agents break these rules in Ranchi, Jamshedpur, or Dhanbad, file a complaint. You can report them to the Senior Superintendent of Police (SSP) Ranchi, your local Thana, or the Cyber Cell. Our lawyers also send legal notices to bank nodal officers. We file formal complaints with the <strong>RBI Integrated Ombudsman</strong> under the 2021 scheme.
                </p>
              </div>
            </section>

            {/* Section 4: Bank Balance Sheet Accounting, Unsecured NPA Provisioning & The Net Present Value (NPV) Equation */}
            <section id="npa-accounting-npv-settlement-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. NPA Balance Sheet Accounting in Ranchi</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Securing a 40% to 60% principal waiver in Ranchi is not about emotional appeals. It rests on bank accounting rules, RBI provisioning rules, and Net Present Value (NPV) recovery math.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the RBI Master Direction on Prudential Norms (IRACP), banks in Jharkhand must set aside capital from their profits for bad loans:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Asset Classification.</th>
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
                      <td>Mild operational provision.</td>
                      <td>Penal fee waivers only.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Sub-Standard Asset.</td>
                      <td>91 Days – 12 Months NPA.</td>
                      <td>25% Unsecured Provision.</td>
                      <td>Direct profit deduction. capital cost.</td>
                      <td>20% – 35% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful-1 (D1 Asset).</td>
                      <td>12 – 24 Months Default.</td>
                      <td>100% Full Provisioning.</td>
                      <td>Total loan value locked.</td>
                      <td>35% – 50% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful-2 / Doubtful-3.</td>
                      <td>24 – 48+ Months Default.</td>
                      <td>100% Full Provisioning.</td>
                      <td>Locked Tier-1 capital. audit pressure.</td>
                      <td>45% – 60% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loss Asset.</td>
                      <td>Identified Uncollectible.</td>
                      <td>100% Written-off Asset.</td>
                      <td>Fully written off on balance sheet.</td>
                      <td>55% – 70% Principal Haircut.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an unsecured personal loan in Ranchi becomes a Doubtful or Loss asset, the bank has already set aside 100% of the funds in reserve. This locked capital hurts the bank&apos;s Capital to Risk-Weighted Assets Ratio (CRAR). Bank credit committees review OTS offers using the Net Present Value formula. This follows the <strong>RBI Master Direction on Compromise Settlements and Technical Write-offs (June 8, 2023)</strong>:
              </p>

              {/* Clean JSX Container for NPV Formula */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Bank Stressed Asset Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Ranchi Court Litigation Costs - Provisioning Drag
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here, C_t is the expected future cash recovery. The letter r is the bank discount rate. Deductions cover 3 to 5 years of court delay in Ranchi Civil Courts, lawyer fees. And balance sheet drag.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our lawyers present a verified cash settlement offer. The bank&apos;s math shows that accepting 50% cash today gives more value. It beats fighting an unsecured claim for five years in Jharkhand courts.
              </p>
            </section>

            {/* Section 5: Visual Roadmap Infographic Banner */}
            <section id="ranchi-settlement-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Loan Settlement Roadmap in Ranchi</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The roadmap below shows the 5-step legal process to settle bank loans in Ranchi, Jamshedpur, Dhanbad, and Jharkhand. It covers notice defense, Lok Adalat talks, No Dues Certificate delivery, and CIBIL score repair.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/personal-loan-settlement-ranchi.jpg"
                  alt="Personal Loan Settlement Process in Ranchi & Jharkhand Infographic Roadmap"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Notice Defense &amp; Ledger Audit</span>
                  <span>Stop SARB demands and Section 138 notices. Audit the account to remove illegal penal interest and extra charges.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: RBI Hardship &amp; Lok Adalat OTS</span>
                  <span>Prepare hardship proof. Negotiate settlement terms with Zonal Committees or JHALSA Lok Adalat benches.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: ₹0 NDC &amp; Credit Rebuilding</span>
                  <span>Pay the agreed settlement directly to the bank. Receive your No Dues Certificate within 30 days and rebuild your credit score.</span>
                </div>
              </div>
            </section>

            {/* Section 6: The Step-by-Step Advocate-Led Negotiation Framework in Ranchi & Jharkhand */}
            <section id="advocate-negotiation-framework-jharkhand" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Advocate-Led Settlement Framework in Ranchi &amp; Jharkhand</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A good loan settlement requires a clear legal strategy. Dealing with banks without a lawyer leaves borrowers open to agent pressure and broken verbal deals. Our legal team follows a proven 5-phase debt settlement process in Ranchi and Jharkhand:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 1: Forensic Loan Ledger &amp; Legal Audit</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We obtain complete account statements from the bank&apos;s Ranchi branch or SARB cell. We audit the ledger to strip away illegal penal interest and extra fees to find the real baseline principal.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 2: Formal Legal Representation &amp; Anti-Harassment Notice</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We serve a formal Vakalatnama and legal notice to the bank&apos;s Zonal Head and Nodal Officer. This directs all future calls to our legal team and stops recovery agent visits.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 3: Hardship Dossier Submission Under RBI June 2023 Policy</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We draft an OTS petition under the bank&apos;s board policy and RBI rules. We attach strong proof like income tax returns, medical bills, business losses, or bank statements.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 4: Bilateral Zonal Negotiation &amp; Discretionary Approval</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our lawyers meet directly with the bank&apos;s Zonal Stressed Assets Management Committee (SAMC) in Ranchi. Using NPA aging rules, we seek a 40% to 60% principal waiver with easy installments.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 5: Execution of Consent Decree &amp; Legal Closure</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For active Section 138 NI Act or Section 25 PASA cases, we file consent terms in Ranchi Civil Court or Lok Adalat. This closes all court cases.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This legal process ensures that every rupee you pay goes toward closing your loan under clear statutory rules.
              </p>
            </section>

            {/* Section 7: National Lok Adalat Representation & Ranchi Debt Recovery Tribunal (DRT) Protocols */}
            <section id="jhalsa-lok-adalat-drt-ranchi-protocols" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Lok Adalat Settlements in Ranchi</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lok Adalat is a helpful legal forum for debt resolution in Jharkhand. The <strong>Jharkhand State Legal Services Authority (JHALSA)</strong> holds quarterly National Lok Adalats in all 24 districts. These include Ranchi Civil Court, Jamshedpur, Dhanbad, and Bokaro.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lok Adalats function under the <strong>Legal Services Authorities Act, 1987</strong>. Benches with a judge and an advocate conciliator help resolve bank loan disputes.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Settling a loan through Lok Adalat in Ranchi has key advantages:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Binding Court Decree.</strong> Under Section 21 of the Legal Services Authorities Act, 1987, a Lok Adalat award is equal to a civil court decree. It is final and cannot be challenged in any court.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Full Refund of Court Fees.</strong> When a civil suit or Section 138 case settles in Lok Adalat, court fees are refunded under the Court Fees Act, 1870.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>High Fee Waivers.</strong> PSU bank zonal managers at Lok Adalat hold high waiver powers. They can grant 100% penal interest waivers and large principal discounts on the spot.</span>
                </li>
              </ul>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <Building2 className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Jurisdiction of Debt Recovery Tribunal (DRT) Ranchi</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  For debts above ₹20 Lakhs with commercial loans or guarantees, banks file cases before the <strong>Debts Recovery Tribunal (DRT) Ranchi</strong> near Kutchery. Our lawyers represent borrowers before DRT Ranchi. We file replies, halt coercive steps. And structure fair settlements.
                </p>
              </div>
            </section>

            {/* Section 8: Forensic Sanction Letter Verification, Direct Bank Remittance & The RBI 30-Day NDC Mandate */}
            <section id="sanction-letter-forensics-rbi-ndc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Sanction Letter Audit &amp; NDC in Ranchi</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A major risk in debt settlement across Jharkhand is fake settlement letters. Rogue recovery agents often share fake letters on duplicate bank letterheads or make false verbal promises to collect money for themselves.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before you pay any money, our legal team verifies the settlement letter against five strict checks:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Bank Domain &amp; Zonal Authority</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The sanction letter must come from the bank&apos;s official email domain. It must be signed by the Zonal Head (AGM or Chief Manager).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Explicit Account Number &amp; Ledger Breakdown</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must list your 16-digit loan account number, total ledger dues, waiver amount. And final settlement sum.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Full Debt Extinguishment Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The terms must state that paying the agreed sum closes the loan in full with zero balance left.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Withdrawal of All Legal Proceedings</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must state that the bank will drop all Section 138 NI Act, Section 25 PASA. And arbitration cases.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-red-950">
                  <ShieldX className="w-4 h-4 text-red-600" />
                  <span>The Fundamental Rule of Settlement Remittance</span>
                </span>
                <p className="leading-relaxed">
                  Never pay cash to any collection agent or third party. Always pay by Account Payee Demand Draft or direct RTGS/NEFT into your loan account against an official bank receipt.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                RBI Statutory Mandate on 30-Day NDC Delivery &amp; Credit Bureau Updates
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under <strong>RBI Circular RBI/2023-24/60</strong>, all commercial banks and NBFCs in Jharkhand must issue an official <strong>No Dues Certificate (NDC)</strong>. They must also return original papers within <strong>30 calendar days</strong> of receiving full settlement payment. If the lender delays without valid cause, it must pay the borrower payout of <strong>₹5,000 per day of delay</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The bank must also update credit bureaus (CIBIL, CRIF High Mark, Experian, and Equifax) with a status of <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong> with an outstanding balance of <strong>₹0</strong>. While this temporarily impacts credit scores, it stops ongoing default marks. Borrowers can rebuild their CIBIL score to 750+ within 12 to 18 months through careful credit card use.
              </p>
            </section>

            {/* Section 9: Comparative Matrix: Debt Resolution Mechanisms Across Jharkhand */}
            <section id="jharkhand-debt-resolution-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Debt Resolution Matrix in Ranchi</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers in Ranchi should compare their debt relief choices to find the best balance of cost savings and legal protection:
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
                      <td>Cleanest closure. complete legal immunity. ₹0 No Dues Certificate.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">JHALSA Lok Adalat Settlement.</td>
                      <td>Conciliation bench under Legal Services Authorities Act.</td>
                      <td>35% – 55% Principal Waiver.</td>
                      <td>Single Session.</td>
                      <td>Binding civil decree. zero court fees. permanent bar on suits.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Contested Court Litigation.</td>
                      <td>Civil Court Ranchi / DRT Ranchi Section 19 defense.</td>
                      <td>0% (Full Claim + Legal Fees).</td>
                      <td>3 – 7 Years.</td>
                      <td>High legal costs. long court delays. asset attachment risk.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Debt Reschedulement / Restructuring.</td>
                      <td>Tenure extension / EMI moratorium recalculation.</td>
                      <td>0% (Full Debt Repaid).</td>
                      <td>30 – 60 Days.</td>
                      <td>No principal relief. higher total interest over longer term.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Unmanaged Loan Default.</td>
                      <td>Inaction and ignoring statutory demand notices.</td>
                      <td>0% (Rising Penal Charges).</td>
                      <td>Indefinite.</td>
                      <td>Harsh recovery visits. criminal cases under Section 138 NI Act.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Debt Resolution in Ranchi & Jharkhand + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Legal Relief in Ranchi &amp; Jharkhand</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Resolving heavy bank debt in Ranchi, Jamshedpur, Dhanbad, and Bokaro needs skilled legal support. SettleLoans is a top debt relief advisory in Jharkhand. We defend borrowers against aggressive PSU recovery teams and private collection agents.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Our banking advocates review loan files and send legal notices to stop harassment. We represent clients at Ranchi Civil Court and JHALSA Lok Adalat benches. We negotiate directly with bank zonal committees to secure large OTS waivers and official ₹0 No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Loan Settlement in Ranchi</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Here are clear answers about loan settlement, SARB notices, JHALSA Lok Adalat. And borrower rights in Jharkhand.
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
                  href="https://jhalsa.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Jharkhand State Legal Services Authority (JHALSA) – National Lok Adalat Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://jharkhandhighcourt.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">High Court of Jharkhand at Ranchi – Legal Services Committee &amp; Case Status</span>
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
                  href="/government-employee-loan-default-salary-attachment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Govt &amp; PSU Employee Salary Protections
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
                Ashish helps borrowers in Ranchi and Jharkhand settle bank debt. He handles PSU bank SARB talks, JHALSA Lok Adalat cases. And mining loan disputes under RBI rules.
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
                <span>Ranchi &amp; Jharkhand Debt Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Facing SARB Notices or Recovery Threats in Jharkhand?</div>
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
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>RBI &amp; JHALSA Lok Adalat Compliant</span>
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
