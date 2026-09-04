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
  ShieldAlert,
  UserCheck,
  BadgePercent,
  Coins,
  TrendingUp,
  Factory,
  Wrench
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'MSME Samadhaan Loan Default Guide | SettleLoans',
  description: 'Learn how to settle MSME business loan defaults legally under Udyam and RBI frameworks. Protect collateral and plant machinery with SettleLoans.',
  keywords: [
    'msme loan settlement scheme in india',
    'msme samadhaan loan default settlement process',
    'msme debt restructuring rbi guidelines',
    'settle business loan without losing machinery',
    'msme one time settlement ots scheme 2026',
    'udyam loan default recovery protection',
    'msme working capital loan settlement',
    'msefc delayed payment vs bank loan recovery',
    'sarfaesi plant and machinery protection msme',
    'rbi framework for revival and rehabilitation of msmes',
    'cibil commercial msme loan settlement no dues certificate'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/msme-samadhaan-loan-default-settlement-process',
  },
  openGraph: {
    title: 'MSME Loan Settlement Scheme in India: Resolve Business Debt & Protect Machinery',
    description: 'A comprehensive regulatory and legal roadmap for Indian MSMEs to resolve stressed Cash Credit, Overdraft, and term loans. Discover how to leverage Udyam registration, MSEFC Samadhaan, and RBI OTS policies to protect manufacturing assets.',
    url: 'https://www.settleloans.in/msme-samadhaan-loan-default-settlement-process',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/msme-samadhaan-loan-default-settlement-process.jpg',
        width: 1200,
        height: 675,
        alt: 'MSME Loan Settlement Scheme in India & Asset Protection Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSME Loan Settlement Scheme in India: Resolve Business Debt & Protect Machinery',
    description: 'Facing bank recovery on MSME working capital loans? Master RBI stressed asset restructuring, MSME Samadhaan delayed payment recovery, and advocate-led OTS settlement strategies.',
    images: ['https://www.settleloans.in/images/infographics/msme-samadhaan-loan-default-settlement-process.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/msme-samadhaan-loan-default-settlement-process#webpage",
      "url": "https://www.settleloans.in/msme-samadhaan-loan-default-settlement-process",
      "name": "MSME Loan Settlement Scheme in India: Resolve Business Debt & Protect Machinery (2026)",
      "description": "Struggling with stressed MSME working capital loans, CC/OD limits, or SARFAESI notices? Learn how Udyam-registered businesses leverage MSME Samadhaan, RBI's Prudential Framework, and OTS schemes to settle bank debt without losing plant and machinery.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/msme-samadhaan-loan-default-settlement-process#breadcrumb"
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
      "@id": "https://www.settleloans.in/msme-samadhaan-loan-default-settlement-process#breadcrumb",
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
          "name": "MSME Loan Settlement Process",
          "item": "https://www.settleloans.in/msme-samadhaan-loan-default-settlement-process"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/msme-samadhaan-loan-default-settlement-process#article",
      "headline": "MSME Loan Settlement Scheme in India: How to Settle Business Debt & Protect Plant and Machinery",
      "description": "An exhaustive statutory, financial, and legal analysis explaining how micro, small, and medium enterprises registered under Udyam can navigate working capital distress, leverage the MSMED Act and MSEFC Samadhaan portal, enforce RBI Prudential Restructuring Frameworks, and secure deep One-Time Settlements without forfeiting essential plant and machinery.",
      "image": "https://www.settleloans.in/images/infographics/msme-samadhaan-loan-default-settlement-process.jpg",
      "datePublished": "2026-09-01T10:00:00+05:30",
      "dateModified": "2026-09-01T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/msme-samadhaan-loan-default-settlement-process#webpage"
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
      "@id": "https://www.settleloans.in/msme-samadhaan-loan-default-settlement-process#service",
      "name": "SettleLoans - MSME Business Debt Resolution & SARFAESI Legal Advisory",
      "description": "Specialized legal representation and financial resolution advisory for Indian MSME enterprises, sole proprietorships, partnerships, and private limited companies managing non-performing working capital, Cash Credit/Overdraft limits, machinery term loans, and SARFAESI recovery proceedings.",
      "url": "https://www.settleloans.in/msme-samadhaan-loan-default-settlement-process",
      "image": "https://www.settleloans.in/images/infographics/msme-samadhaan-loan-default-settlement-process.jpg",
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
          "author": {
            "@type": "Person",
            "name": "Virender Singhal"
          },
          "datePublished": "2026-05-18",
          "reviewBody": "Our Pune auto parts unit faced tight cash due to late buyer payments. Punjab National Bank marked our ₹85 Lakhs Cash Credit limit as NPA. They sent a Section 13(2) SARFAESI notice to seize our CNC machines. SettleLoans lawyers acted fast. They filed an MSEFC claim. They challenged the bank under RBI rules. They settled the debt for ₹36 Lakhs. We kept all our machines.",
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
            "name": "Dharmesh Patel"
          },
          "datePublished": "2026-06-29",
          "reviewBody": "Our Surat textile mill had ₹1.4 Crores in loans with Bank of Baroda. Supply delays caused us to default. SettleLoans audited our loan account. They removed ₹28 Lakhs in unfair penal fees. Then they met the Zonal Committee. They secured an OTS of ₹58 Lakhs in three parts. We saved our looms and got our No Dues Certificate.",
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
            "name": "Sandeep Ahluwalia"
          },
          "datePublished": "2026-07-22",
          "reviewBody": "Our Manesar unit had a ₹65 Lakhs loan with HDFC Bank. Export orders were cancelled suddenly. The bank threatened to auction our plant under SARFAESI. SettleLoans filed a Section 13(3A) reply and cited tools-of-trade rules. The bank stopped the auction. We settled for ₹27 Lakhs and kept working.",
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
            "name": "Kavitha Nambiar"
          },
          "datePublished": "2026-08-14",
          "reviewBody": "Our Hyderabad firm had a ₹1.1 Crore overdraft NPA with SBI. SettleLoans lawyers gave a clear settlement plan to the Stressed Asset branch. They showed why an OTS was better than slow auctions. SBI approved an OTS for ₹44 Lakhs. Our commercial CIBIL showed a ₹0 balance in 40 days.",
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
      "@id": "https://www.settleloans.in/msme-samadhaan-loan-default-settlement-process#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between MSME Samadhaan delayed payment recovery and bank loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MSME Samadhaan is a government portal under Section 18 of the MSMED Act, 2006. It helps small suppliers recover unpaid bills. Buyers must clear dues after 45 days. In contrast, bank loan settlement is a direct deal with your lender. Under RBI OTS policies, you settle bad business debt at a discount."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank seize my factory plant and machinery under SARFAESI if my MSME is registered on Udyam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Banks cannot seize machines without following strict rules. SARFAESI gives lenders recovery rights. But they must follow legal steps. They must send a Section 13(2) notice. They must reply to your Section 13(3A) objections. RBI rules also require banks to try debt recast first."
          }
        },
        {
          "@type": "Question",
          "name": "How does the RBI Prudential Framework protect stressed MSME borrowers from immediate NPA classification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI rules, banks must track early loan stress. They monitor SMA-0, SMA-1. and SMA-2 stages. Lenders must test if the business is viable. They should extend loan tenors or restructure interest before declaring an NPA."
          }
        },
        {
          "@type": "Question",
          "name": "Can an MSME promoter settle a defaulted working capital loan or Cash Credit (CC) limit through an OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. When a Cash Credit or Overdraft turns into an NPA, banks look at settlement settlements. Unsecured debt and old stocks lose value fast. Lenders routinely accept 40% to 60% settlements. They also waive all penal interest."
          }
        },
        {
          "@type": "Question",
          "name": "What legal options exist if a bank rejects an MSME restructuring proposal and issues a Section 13(2) demand notice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You get 60 days to file objections under Section 13(3A) of SARFAESI. Point out ledger errors, late buyer payments. and RBI rule breaches. The bank must reply within 15 days. If they break rules, you can move the DRT under Section 17."
          }
        },
        {
          "@type": "Question",
          "name": "Does an MSME borrower qualify for exemptions under Section 31 of the SARFAESI Act for operational machinery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Section 31 of SARFAESI protects specific assets. It covers farm land and claims under ₹1 Lakh. It also protects key tools of trade under Section 60 of the CPC. Lawyers use these rules to shield factory machines."
          }
        },
        {
          "@type": "Question",
          "name": "How does an MSME One-Time Settlement impact Commercial CIBIL and Company Credit Reports?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After you pay the OTS amount, the bank gives you a No Dues Certificate. Credit bureaus update your status to 'Settled' with a ₹0 balance. This stops negative marks. You can rebuild your business credit score over time."
          }
        },
        {
          "@type": "Question",
          "name": "Can an MSME promoter participate in insolvency resolution or OTS under Section 240A of the IBC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Section 240A of the IBC, 2016 gives relief to registered MSME owners. It exempts them from Section 29A curbs. This allows owners to submit revival plans and keep control of their company."
          }
        },
        {
          "@type": "Question",
          "name": "What forensic grounds can MSME borrowers use to dispute excessive compound interest and penal charges?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can challenge bank claims with compound penal interest. RBI rules ban adding penal charges to principal debt. You can also case missing interest subsidies and sudden rate hikes."
          }
        },
        {
          "@type": "Question",
          "name": "How does SettleLoans help MSME business owners negotiate debt settlements directly with bank zonal committees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SettleLoans provides full legal defense for stressed MSMEs. We audit loan statements to cut illegal penal charges. We reply to SARFAESI notices. Our lawyers settle with bank Zonal Committees for 40% to 60% debt waivers."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'msme-debt-crisis-working-capital-strain', title: '1. MSME Debt Crisis: Working Capital & NPA Traps' },
  { id: 'statutory-interlock-msmed-act-samadhaan', title: '2. MSMED Act, Samadhaan & SARFAESI Interplay' },
  { id: 'rbi-prudential-framework-msme-restructuring', title: '3. RBI Prudential Framework for MSME Restructuring' },
  { id: 'bank-accounting-economics-npa-provisioning', title: '4. Bank Accounting Economics & Haircut Realities' },
  { id: 'infographic-roadmap', title: '5. MSME Loan Resolution Visual Roadmap' },
  { id: 'shielding-plant-machinery-hypothecated-assets', title: '6. Shielding Plant, Machinery & Business Assets' },
  { id: 'strategic-bank-ots-negotiation-npv', title: '7. Strategic Bank OTS Negotiation & NPV Models' },
  { id: 'forensic-audit-sanctions-penal-interest', title: '8. Forensic Audit of Sanctions & Penal Charges' },
  { id: 'no-dues-certificate-cibil-commercial-recovery', title: '9. No Dues Certificate & Commercial CIBIL Repair' },
  { id: 'company-resolution-section', title: '10. SettleLoans MSME Legal Defense & Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' }
];

export default function MSMESamadhaanLoanDefaultSettlementPage() {
  return (
    <div className="w-full bg-white text-slate-800 antialiased selection:bg-[#1F5EFF] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
          border: 1px solid #E2E8F0;
          border-radius: 0.75rem;
          overflow: hidden;
        }
        .blog-content th {
          background-color: #F8FAFC;
          padding: 0.75rem 1rem;
          text-align: left;
          font-weight: 700;
          color: #1E293B;
          border-bottom: 1px solid #E2E8F0;
          border-right: 1px solid #E2E8F0;
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
        className="w-full border-b border-slate-700/80 pt-28 pb-8 md:pt-36 md:pb-10 lg:pt-36 lg:pb-12 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <Factory className="w-3.5 h-3.5" />
            <span>MSME Financial Distress • Udyam Hardship, Working Capital Settlement &amp; Asset Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">MSME Business Loan Settlement & Restructuring Guide</h1>

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
              <span>RBI MSME Prudential Framework &amp; MSMED Act Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Settle Your MSME Debt Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request Free MSME Case Evaluation
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
                <span>MSME Settlement Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">Small businesses facing cash crunches have clear legal protections. Udyam registration, RBI recast rules. and Section 31 of SARFAESI help stop auctions. Owners can protect vital factory machines and settle 40% to 60% One-Time Settlements.</p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: MSME Loan Default &amp; Settlement Scheme in India</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>Udyam & MSMED Act Protections:</strong> Udyam registration gives legal backing under the MSMED Act, 2006. It helps firms case premature NPA tags and file MSEFC claims for delayed buyer dues.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>Mandatory RBI Recast Rules:</strong> Under RBI Master Directions, banks must explore viable debt recast at SMA-0, SMA-1. and SMA-2 stages before taking forceful steps.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>Shielding Plant & System:</strong> Section 31 of SARFAESI and Section 60 of the CPC protect key work tools and core system from sudden distress auctions.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>40% to 60% Principal Waivers:</strong> Banks face heavy 100% reserves rules on bad bank loans. This encourages zonal committees to approve settlement OTS settlements with deep waivers.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>Full Debt Discharge & Clean CIBIL:</strong> An official OTS agreement and a stamped No Dues Certificate release personal owner bonds and update credit bureau dues to ₹0.</span></li>
              </ul>
            </div>

            {/* Section 1: The MSME Debt Crisis */}
            <section id="msme-debt-crisis-working-capital-strain" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The MSME Debt Crisis in India</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Micro, Small. and Medium Firms power India&apos. s economic growth. They contribute over 30% of GDP and nearly 45% of factory output. Yet, small businesses face severe cash flow risks. When large corporate buyers delay invoice payments, small suppliers struggle to pay their monthly bank EMIs.</p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Most small firms rely on Cash Credit limits, Overdraft facilities. And system term loans. When buyers delay payments beyond 45 days under Section 15 of the MSMED Act, working cash dries up. Business owners must balance paying staff wages, buying raw materials. And servicing bank debt.</p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Banks track late payments automatically. If interest remains unpaid for over 30 days, the account is flagged. At 61 to 90 days (SMA-2), banks issue stern demand letters. At day 91, the loan turns into a defaulted Asset (NPA). The bank freezes credit limits, adds penal interest. And starts SARFAESI recovery actions.</p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">An NPA tag threatens business survival. Trade suppliers stop credit and banks initiate recovery steps. Navigating this challenge requires a disciplined legal strategy under Indian MSME laws.</p>
            </section>

            {/* Section 2: Statutory Interlock */}
            <section id="statutory-interlock-msmed-act-samadhaan" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Statutory Interlock</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Small business owners must understand how the MSMED Act, 2006, the SARFAESI Act, 2002. And the MSME Samadhaan portal work together. Knowing your legal rights prevents costly formal mistakes.</p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Filing on the MSME Samadhaan portal does not grant an automatic stay against bank loan recovery. MSME Samadhaan operates under Section 18 of the MSMED Act. It helps small suppliers recover unpaid dues from buyers through settlement and arbitration with compound interest.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>MSMED Act Sec 15–18: Delayed Receivables Recovery</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">Mandates buyer payment within 45 days. Enables MSEFC arbitration with compound interest. It provides official proof that loan defaults stem from delayed customer payments.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-emerald-600" />
                    <span>SARFAESI Act Sec 13(2) &amp; 13(4): Secured Debt Enforcement</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">Allows secured lenders to issue 60-day demand notices. However, banks must formally consider and reply to debtor objections under Section 13(3A) before seizing any assets.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldAlert className="w-4 h-4 text-purple-600" />
                    <span>Supreme Court Jurisprudence on Statutory Priority</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">In <em>Kotak Mahindra Bank v. Girnar Fibres</em>, the Supreme Court upheld secured creditor priority. However, banks must still follow strict legal rules before taking hold.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    <span>IBC Sec 240A: MSME Promoter Bidding Exemption</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">Exempts registered MSME owners from Section 29A bars during debt case. This allows business owners to submit solution plans and retain team control.</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">An MSEFC filing provides vital proof during bank settlement talks. It proves that default happened. frozen market dues, not fund diversion. This encourages bank committees to approve structured One-Time Settlements.</p>
            </section>

            {/* Section 3: RBI Prudential Framework */}
            <section id="rbi-prudential-framework-msme-restructuring" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. RBI&apos;s Prudential Framework for MSME Revival</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">The Reserve Bank of India requires bank banks to follow a structured revival plan for stressed small firms. Key rules include the <strong>RBI Framework for Revival and recovery of Micro, Small and Medium Firms</strong> and the <strong>Prudential Framework for Solution of Stressed Assets</strong>.</p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Under these RBI rules, banks cannot jump straight to harsh recovery steps. Lenders must set up a dedicated <strong>Committee for Stressed Micro, Small and Medium Firms</strong> at zonal offices. Banks must track early stress across three mandatory stages:</p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-3">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <TrendingUp className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory RBI Special Mention Account (SMA) Staging &amp; Restructuring Protocol</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-sm">
                    <div className="font-bold text-blue-900 text-xs uppercase tracking-wider mb-1">SMA-0 Stage</div>
                    <p className="text-xs text-slate-600 leading-relaxed">Principal or interest overdue for 1 to 30 days. Banks must begin early talks to understand cash flow delays.</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-sm">
                    <div className="font-bold text-blue-900 text-xs uppercase tracking-wider mb-1">SMA-1 Stage</div>
                    <p className="text-xs text-slate-600 leading-relaxed">Overdue for 31 to 60 days. Banks must assess unit viability and explore loan realignment.</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-sm">
                    <div className="font-bold text-blue-900 text-xs uppercase tracking-wider mb-1">SMA-2 Stage</div>
                    <p className="text-xs text-slate-600 leading-relaxed">Overdue for 61 to 90 days. Mandatory referral to the MSME Committee to draft a formal Corrective Action Plan (CAP).</p>
                  </div>
                </div>
                <p className="text-xs text-blue-800 leading-relaxed pt-1">The Corrective Action Plan must explore loan loan fix, tenure extension. or interest recast before recommending legal recovery.</p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">If a bank ignores these rules and sends SARFAESI notices without committee review, it commits a serious regulatory breach. Lawyers can challenge this formal flaw in the DRT to obtain stays and settle fair settlements.</p>
            </section>

            {/* Section 4: Bank Accounting Economics */}
            <section id="bank-accounting-economics-npa-provisioning" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank NPA Accounting &amp; MSME Samadhaan Economics</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">To settle business debt, owners must understand bank accounting. An unresolved bad loan is not just unpaid money. It drains bank capital. mandatory RBI reserves rules.</p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Under RBI IRAC norms. When a loan turns into an NPA, the bank must set aside reserves. Over three years, this reaches up to <strong>100% reserves</strong> against bad debt. The bank locks its own cash reserves in reserves accounts. This hurts the bank&apos. s profits and capital ratios.</p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Banks face strong pressure to clean up bad loans before quarter ends. Contested court cases in DRTs cost banks heavy lawyer retainers, court fees. And security expenses. These costs push bank recovery committees to accept upfront cash settlements.</p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Because the bank has already provisioned for the bad loan, receiving 40% to 50% in cash brings an immediate write-back to profits. This balance sheet math makes 40% to 60% principal waivers attractive to bank managers.</p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-roadmap" className="space-y-4">
              <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 p-2 sm:p-4 shadow-sm">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-inner">
                  <Image
                    src="/images/infographics/msme-samadhaan-loan-default-settlement-process.jpg"
                    alt="MSME Loan Resolution Roadmap: 5-Step Scheme for Debt Settlement and Asset Protection"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                    priority
                  />
                </div>
                <div className="pt-3 px-2 text-center">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                    Figure 1: 5-Step MSME Loan Resolution &amp; Asset Protection Roadmap
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1 max-w-2xl mx-auto">A clear roadmap showing the transition from Udyam hardship filing to RBI recast, system protection. And final bank OTS execution.</p>
                </div>
              </div>
            </section>

            {/* Section 6: Shielding Plant & Machinery */}
            <section id="shielding-plant-machinery-hypothecated-assets" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Shielding Operational Plant, Machinery</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Factory machines, tooling. And plant sheds are vital for business operations. If a bank seizes system, work stops and bank contracts fail. Preserving machine hold is key for MSME debt defense.</p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">When a bank issues Section 13(4) notices or approaches the magistrate under Section 14 to seize assets, owners have clear legal shields:</p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="font-bold text-xs sm:text-sm text-slate-900">Section 31(j) SARFAESI &amp; Section 60 CPC Protections for Tools of Trade</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">Under Section 31(j) of SARFAESI read with Section 60(1)(b) of the CPC, tools of trade and livelihood instruments cannot be seized. For small business owners, customized work machines qualify for protection against summary attachment.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <Factory className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900">Disproportionate Asset Value vs. Outstanding Claim Challenge</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">A bank cannot seize a ₹5 Crore factory to recover a ₹60 Lakhs loan. Debt defense lawyers challenge this over-attachment in the DRT. Banks must limit action to proportionate security.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900">Hypothecated Movable Stock Valuation &amp; Section 13(3A) Procedural Vices</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">Banks often skip proper physical stock audits before issuing demand notices. Filing formal Section 13(3A) objections highlights these formal errors and stops one-sided physical hold.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Keeping the factory running protects business cash flow during settlement talks. The bank realizes that physical seizure will cause long DRT court delays. This motivates the lender to accept a swift OTS settlement.</p>
            </section>

            {/* Section 7: Strategic Bank OTS Negotiation & NPV Models */}
            <section id="strategic-bank-ots-negotiation-npv" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Strategic Bank OTS Negotiation</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Securing a One-Time Settlement requires clear money justification. Bank committees approve settlement settlements only when an OTS offer yields higher Net Present Value (NPV) than forced auctions.</p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Banks compare an upfront cash offer against the slow outcome of SARFAESI auctions. Plant auctions often fail for lack of buyers. Reserve prices must be cut by 10% to 20%. and DRT court case can last 3 to 7 years.</p>

              {/* Recovery Valuation Benchmark Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">Expected future auction recovery is discounted against court costs, lawyer fees. And locked capital reserves.</p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">When our lawyers show that a 45% cash OTS gives better net recovery than 5 years in court, the bank&apos. s Zonal Committee has full regulatory justification to approve the settlement.</p>
            </section>

            {/* Section 8: Forensic Audit of Sanctions */}
            <section id="forensic-audit-sanctions-penal-interest" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Forensic Audit of Business Loan Sanctions, Penal Interest</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Our legal team conducts a forensic audit of your loan statements and sanction letters. Banks often add illegal ledger charges and excessive risk premiums that inflate debt balances by 25% to 40%.</p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Under the landmark <strong>RBI Circular on Fair Lending Practice – Penal Charges in Loan Accounts</strong>, banks cannot capitalize penal charges into principal debt. adding penal interest is strictly prohibited.</p>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2 my-4">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Essential Forensic Audit Checkpoints for Stressed MSME Facilities</span>
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2"><span className="text-[#1F5EFF] font-bold">•</span> <span><strong>Unnotified Rate Markups:</strong> unfair hikes in lending rates without contractual notice.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#1F5EFF] font-bold">•</span> <span><strong>Unapplied Interest Stacking:</strong> adding of unapplied interest accrued after the NPA status date.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#1F5EFF] font-bold">•</span> <span><strong>Missing Subsidy Credits:</strong> Failure to credit government interest subsidies under TUFS, CLCSS. or ECLGS schemes.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#1F5EFF] font-bold">•</span> <span><strong>Excessive Inspection Fees:</strong> Unjustified debits for unverified factory inspections and legal fees.</span></li>
                </ul>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Documenting these accounting errors in a legal reply gives you strong bargaining power. It removes the lender&apos. s leverage and leads to formal OTS sanctions with full penalty waivers.</p>
            </section>

            {/* Section 9: Securing Clean No Dues Certificates & CIBIL */}
            <section id="no-dues-certificate-cibil-commercial-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Securing Clean No Dues Certificates (NDC)</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Paying the settlement sum is not the final step. Complete solution requires getting a stamped <strong>No Dues Certificate (NDC)</strong>, releasing company asset charges with the ROC. And repairing credit bureau records.</p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">The settlement agreement must mandate four steps: . (1) Full discharge of debtor and backers, . (2) Return of original property title deeds within 30 days, . (3) Filing Form CHG-4 with the ROC to remove charges. and . (4) Updating CIBIL bank to reflect a ₹0 balance.</p>

              {/* Comparative Matrix Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th className="font-bold text-slate-900">Solution Area.</th>
                      <th className="font-bold text-slate-900">Unresolved Loan Default.</th>
                      <th className="font-bold text-slate-900">Hostile SARFAESI Auction.</th>
                      <th className="font-bold text-slate-900">Structured MSME OTS Settlement.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Plant & System Status.</td>
                      <td>At risk of sudden seizure.</td>
                      <td>Seized & auctioned at distress value.</td>
                      <td>Fully protected & working.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Total Money Outflow.</td>
                      <td>100% principal + compound interest.</td>
                      <td>Shortfall claim after distress auction.</td>
                      <td>40% to 60% negotiated principal payout.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Owner Personal Bonds.</td>
                      <td>Enforceable via DRT & Civil Courts.</td>
                      <td>Personal assets attached for shortfall.</td>
                      <td>Permanently discharged & cleared.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Court Case Duration.</td>
                      <td>3 to 7 years of court battles.</td>
                      <td>Prolonged DRT challenges & appeals.</td>
                      <td>Complete closure in 60 to 90 days.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">bank Credit Status.</td>
                      <td>Willful Defaulter risk & frozen CIBIL.</td>
                      <td>Suit Filed / Written Off stigma.</td>
                      <td>Settled / ₹0 Balance (Path to credit repair).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">ROC / MCA Charge Status.</td>
                      <td>Active lien restricting new funds.</td>
                      <td>Hostile receiver control over assets.</td>
                      <td>Form CHG-4 filed & clean title restored.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">A &quot. Settled&quot. tag reflects past money stress. However, a certified ₹0 balance ends legal risk and stops adding interest. Your business can rebuild its bank CIBIL rank over time.</p>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans MSME Legal Defense</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Resolving business debt against harsh banks requires legal and money expertise. SettleLoans halts recovery abuse and asserts Section 31 SARFAESI exemptions. We audit loan ledgers to remove compound penal interest. Our lawyers represent you before bank Stressed Asset branches (SAMB) to secure binding 40% to 60% settlements with clean No Dues Certificates.</p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: MSME Loan Default &amp; Settlement Process</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">Clear answers to key questions regarding MSME working capital defaults, MSMED Act protections, system defense. And bank OTS schemes in India.</p>

              <div className="space-y-3">
                {(jsonLdGraph['@graph'][4] as any).mainEntity.map((faq: any, idx: number) => (
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
                  href="https://samadhaan.msme.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">MSME Samadhaan Portal (Ministry of MSME - Delayed Payment Redressal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://udyamregistration.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Udyam Registration Portal (Ministry of MSME, Government of India)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Prudential Framework for Stressed Assets Resolution</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">SARFAESI Act, 2002 (Securitisation &amp; Security Interest Enforcement)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Micro, Small and Medium Enterprises Development (MSMED) Act, 2006</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related MSME &amp; Stressed Asset Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/bank-overdraft-facility-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Overdraft Facility Settlement
                </Link>
                <Link
                  href="/auction-notice-challenge"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SARFAESI Auction Challenge
                </Link>
                <Link
                  href="/drt-loan-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  DRT Debt Defense Guide
                </Link>
                <Link
                  href="/SME-loan-dispute-resolution"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SME Loan Dispute Resolution
                </Link>
                <Link
                  href="/bank-sold-loan-to-arc-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Sold Loan to ARC
                </Link>
                <Link
                  href="/loan-penalty-waiver-request"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Penalty Waiver Rules
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate Guide
                </Link>
                <Link
                  href="/case-study-cibil-status-settled-to-closed"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Commercial CIBIL Rectification
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Recovery Harassment
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
                  <p className="text-xs text-slate-500">Chief Banking & Debt Solution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">Ashish specializes in MSME debt recast, SARFAESI defense, Cash Credit settlements. And asset protection. He brings extensive legal advisory experience.</p>
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
                <span>MSME Emergency Debt Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Facing Bank SARFAESI or Machinery Seizure?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">Protect your factory system and plant operations from auction. Speak with debt defense lawyers. Enforce RBI recast rules and settle a 40% to 60% OTS.</p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Free MSME Case Evaluation
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
                  <span>RBI MSME Framework Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Client Confidentiality</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank-Stamped OTS Sanctions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Zonal Negotiations</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
