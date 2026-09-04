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
  MapPin
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement in Guwahati | SettleLoans',
  description: 'Learn how to settle personal loans legally in Guwahati. Stop recovery harassment and resolve bank debt with expert OTS via SettleLoans.',
  keywords: [
    'loan settlement company in guwahati assam',
    'personal loan settlement guwahati',
    'debt settlement lawyer in guwahati',
    'gauhati high court loan recovery defense',
    'sbi sarb guwahati loan settlement',
    'assam microfinance loan relief',
    'kamrup metro cjm court loan notice',
    'panbazar loan settlement advocate',
    'fancy bazar merchant loan settlement',
    'gs road debt settlement services',
    'assam money lenders act debt defense',
    'lok adalat guwahati loan settlement',
    'stop recovery agent harassment assam'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-guwahati',
  },
  openGraph: {
    title: 'Loan Settlement Company in Guwahati Assam: Legal Defense & OTS Guide',
    description: 'Premier legal debt defense and bank OTS settlement advisory for salaried professionals and merchants in Guwahati, Kamrup Metro, and Assam. Resolve defaults with 40%–70% waivers.',
    url: 'https://www.settleloans.in/personal-loan-settlement-guwahati',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-guwahati.jpg',
        width: 1200,
        height: 675,
        alt: 'Personal Loan Settlement Process in Guwahati and Assam Legal Defense Roadmap',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Company in Guwahati Assam: Legal Defense & OTS Guide',
    description: 'Expert advocate-led debt settlement in Guwahati & Assam. Protect against recovery harassment, Section 138 NI Act notices, and secure bank OTS waivers.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-guwahati.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-guwahati#webpage",
      "url": "https://www.settleloans.in/personal-loan-settlement-guwahati",
      "name": "Loan Settlement Company in Guwahati Assam: Legal Defense & OTS (2026)",
      "description": "Comprehensive legal and financial guide for personal loan settlement in Guwahati and Assam, navigating Gauhati High Court protections, CJM Kamrup Metro notices, PSU bank SARB branches, and 40%–70% OTS debt resolution.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-loan-settlement-guwahati#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-guwahati#breadcrumb",
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
          "name": "Guwahati Assam",
          "item": "https://www.settleloans.in/personal-loan-settlement-guwahati"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settlement-guwahati#article",
      "headline": "Loan Settlement Company in Guwahati Assam: Gauhati High Court Defense, SARB & 40%–70% OTS Resolution",
      "description": "An authoritative legal and financial guide for salaried individuals, merchants, and entrepreneurs in Guwahati and Assam managing severe loan defaults, PSU bank SARB recovery actions, and Kamrup Metro court proceedings.",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-guwahati.jpg",
      "datePublished": "2026-09-02T10:00:00+05:30",
      "dateModified": "2026-09-02T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-loan-settlement-guwahati#webpage"
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
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.settleloans.in/logo/logo.svg"
      },
      "sameAs": [
        "https://www.linkedin.com/company/settleloans",
        "https://twitter.com/settleloans",
        "https://www.facebook.com/settleloans"
      ]
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/personal-loan-settlement-guwahati#service",
      "name": "SettleLoans Guwahati - Legal Debt Relief & Bank OTS Advisory",
      "description": "Specialized legal representation, recovery agent anti-harassment defense, and bank OTS settlement negotiations for personal loans, business credit facilities, and credit cards across Guwahati and Assam.",
      "url": "https://www.settleloans.in/personal-loan-settlement-guwahati",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-guwahati.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "GS Road, Christian Basti",
        "addressLocality": "Guwahati",
        "addressRegion": "Assam",
        "postalCode": "781005",
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
            "name": "Bhaskar Jyoti Kalita"
          },
          "datePublished": "2026-05-18",
          "reviewBody": "Supply chain disruptions hit my trading unit in Panbazar. My SBI loan and card debt rose to ₹14.5 Lakhs. SettleLoans audited unfair penal fees. They negotiated with SBI SARB Guwahati. They closed my debt with an official OTS at ₹6.1 Lakhs.",
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
            "name": "Anamika Goswami"
          },
          "datePublished": "2026-06-27",
          "reviewBody": "A sudden medical emergency caused default on ₹18 Lakhs across HDFC and Axis Bank. SettleLoans sent formal legal notices. They stopped recovery visits in Beltola. They secured a compromise of ₹6.8 Lakhs in two installments.",
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
            "name": "Ratan Agarwal"
          },
          "datePublished": "2026-07-22",
          "reviewBody": "I am a Fancy Bazar merchant facing ₹26 Lakhs in overdraft debt. I got a Section 138 summons from Kamrup Metro Court. SettleLoans advocates secured bail. They settled the whole debt via ASLSA Lok Adalat for ₹9.2 Lakhs.",
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
            "name": "Pranjal Barman"
          },
          "datePublished": "2026-08-14",
          "reviewBody": "I work as an Assam government employee in Dispur. I had ₹9.8 Lakhs in NBFC and personal loans. SettleLoans used Section 60 CPC protections. They halted salary attachment threats and secured a 62% OTS waiver at ₹3.7 Lakhs.",
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-guwahati#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do borrowers in Guwahati and Assam require specialized loan settlement advocates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Guwahati is the financial hub of North-East India. It hosts Zonal Offices and SARB branches for SBI, UCO Bank, and PNB. Loan settlement requires local legal knowledge of Gauhati High Court and Kamrup Metro Court. Advocates stop agent harassment and negotiate 40% to 70% OTS waivers."
          }
        },
        {
          "@type": "Question",
          "name": "Can Guwahati Police or Assam Police arrest me for defaulting on an unsecured personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Loan default is a civil breach of contract under the Indian Contract Act, 1872. The Gauhati High Court has affirmed this. Police have no legal authority to file FIRs or arrest debtors for genuine loan defaults."
          }
        },
        {
          "@type": "Question",
          "name": "How does SettleLoans handle recovery agent harassment in residential areas of Guwahati?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We send a formal Notice of Representation under RBI rules and the Assam Micro Finance Institutions Act, 2020. This directs all bank talks through legal counsel. It bans doorstep visits, abusive calls. And third-party contact."
          }
        },
        {
          "@type": "Question",
          "name": "What legal steps are taken if I receive a Section 138 NI Act notice from Kamrup Metro Court?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Empanelled Guwahati advocates send a formal legal reply challenging illegal interest and fines. If a case is filed in Panbazar CJM Court, our counsel appears under a Vakalatnama. They secure bail and move the matter to National Lok Adalat for OTS."
          }
        },
        {
          "@type": "Question",
          "name": "How does SBI SARB Guwahati process One-Time Settlements for unsecured personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When an unsecured loan crosses 90 to 180 days overdue, SBI shifts the file to SARB Guwahati. SARB committees hold board powers to grant 40% to 70% waivers. Approvals depend on verified financial distress and asset status."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank freeze or attach my salary account in Assam for personal loan non-payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Banks cannot freeze salary accounts without a Civil Court order under Order XXI CPC. also, Section 60(1)(i) CPC protects basic allowances and two-thirds of salary from court execution."
          }
        },
        {
          "@type": "Question",
          "name": "What essential clauses must be verified in a Guwahati bank OTS sanction letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A valid OTS letter must be on official bank letterhead with an authorized manager's signature. It must state the loan account number, exact settlement sum, payment dates, full debt discharge, and 30-day NDC delivery."
          }
        },
        {
          "@type": "Question",
          "name": "How does personal loan settlement in Assam affect credit bureau reporting across CIBIL and CRIF?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Once you pay the settlement, the bank updates CIBIL, Experian, and CRIF to 'Settled' with a ₹0 balance. This stops monthly negative reporting. You can rebuild your credit score above 750 within 18 to 24 months."
          }
        },
        {
          "@type": "Question",
          "name": "How long does the personal loan settlement process take in Guwahati?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The settlement process usually takes 45 to 120 days. This covers liability audit, legal notices, hardship filing, SARB talks. And final sanction issuance."
          }
        },
        {
          "@type": "Question",
          "name": "Are microfinance loans and fintech app debts covered under debt settlement protections in Assam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Assam Micro Finance Institutions Act, 2020, and RBI Digital Lending Guidelines protect borrowers. They ban harsh recovery tactics and hidden fees, giving strong grounds for an OTS compromise."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'guwahati-debt-crisis-landscape', title: '1. The Guwahati Debt Landscape: Commercial Pressures & Default Dynamics' },
  { id: 'statutory-legal-protections-gauhati-hc', title: '2. Statutory Protections: Gauhati High Court Precedents & Assam Debt Laws' },
  { id: 'psu-bank-sarb-guwahati-mechanics', title: '3. PSU Bank SARB Mechanics in Guwahati: SBI, UCO Bank & Private NBFCs' },
  { id: 'bank-accounting-npv-recovery-formula', title: '4. Bank Economics & The Stressed Asset NPV Recovery Equation' },
  { id: 'guwahati-settlement-visual-roadmap', title: '5. Guwahati & Assam Loan Settlement Legal Roadmap' },
  { id: 'advocate-led-defense-kamrup-metro', title: '6. Legal Defense: Countering Kamrup Metro Summons & Harassment' },
  { id: 'forensic-verification-settlement-letters', title: '7. Forensic Checklist for Bank Settlement Sanction Letters' },
  { id: 'remittance-ndc-cibil-restoration', title: '8. Settlement Remittance, RBI No Dues Certificate & CIBIL Clean-Up' },
  { id: 'guwahati-settlement-vs-litigation-matrix', title: '9. Guwahati Banking Settlement vs. Court Litigation Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Advisory in Guwahati' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function PersonalLoanSettlementGuwahatiPage() {
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
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>North-East Debt Relief • Guwahati &amp; Assam Legal Loan Settlement</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Personal Loan Settlement in Guwahati: Legal OTS Guide</h1>

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
              <span>Gauhati HC &amp; RBI Fair Practices Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Settle Your Guwahati Loan Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request Free Guwahati Case Evaluation
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
                <span>Guwahati Case Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Guwahati borrowers facing loan default have strong legal rights. Gauhati High Court rulings and RBI policies protect you. Advocates stop agent visits in Kamrup Metro. They defend Panbazar court summons and secure 40%–70% OTS waivers.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Guwahati Loan Settlement &amp; Legal Rights</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Gauhati High Court Civil Precedents.</strong> Loan default is a civil dispute. Police and banks cannot make criminal arrests for unpaid debt.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct PSU SARB Talks.</strong> Defaulted SBI, UCO, and PNB loans move to SARB branches. Bank OTS policies offer 40% to 70% waivers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Kamrup Metro CJM Court Defense.</strong> Advocates handle Section 138/25 notices in Panbazar. They secure bail and resolve debt in Lok Adalats.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Assam Microfinance Legal Shield.</strong> State laws and RBI rules ban abusive recovery calls and doorstep harassment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI No Dues Certificate in 30 Days.</strong> Final settlement grants a ₹0 NDC within 30 days and updates credit bureaus to ₹0 balance.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Guwahati Debt Landscape */}
            <section id="guwahati-debt-crisis-landscape" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Guwahati Debt Landscape &amp; Realities</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Guwahati is the main trade and office hub of North-East India. Major markets operate in Fancy Bazar, Panbazar, Paltan Bazar, and GS Road. The city also houses government and office hubs in Dispur, Christian Basti, Bhangagarh, and Six Mile. These hubs employ thousands of salaried staff, executives. And doctors.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Recent business slowdowns, cash flow crunches. And rising living costs have hurt borrowers in Kamrup Metro. When EMIs remain unpaid for 90 days, banks tag loans as NPAs. Borrowers then face harsh calls and home visits across Zoo Road, Beltola, and Kahilipara.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Working with a skilled debt settlement team in Guwahati brings peace of mind. Our advocates stop agent harassment and audit loan contracts. We negotiate directly with bank committees to secure 40% to 70% OTS waivers.
              </p>
            </section>

            {/* Section 2: Statutory Legal Protections */}
            <section id="statutory-legal-protections-gauhati-hc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Statutory Protections for Assam Borrowers</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Debt resolution in Assam follows central laws, RBI rules, and Gauhati High Court orders. Under Section 73 of the Indian Contract Act, 1872, loans are civil agreements. Default due to distress or medical trouble is a civil matter. The Gauhati High Court has ruled that police cannot file FIRs or step into civil loan disputes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Gauhati High Court Writ Protections</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Article 226 of the Constitution of India, the High Court bans harsh recovery acts that harm personal dignity under Article 21.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    <span>Assam Micro Finance Institutions Act, 2020</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    This state law stops lenders from using abusive recovery agents, threats, or unfair interest compounding.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-purple-600" />
                    <span>Section 60(1) CPC Salary Protections</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For employees in Dispur and Guwahati, Section 60(1)(i) CPC exempts basic pay and two-thirds of salary from court attachment.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>RBI Fair Practices Code Mandates</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI rules ban collection calls outside 8:00 AM to 7:00 PM, family harassment, abusive words. And uninvited visits.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>SARFAESI Act Inapplicability on Unsecured Personal Loans</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  Under Section 13(2) of the SARFAESI Act, 2002, asset seizure applies only to secured mortgage loans. For personal loans and credit cards, banks cannot seize property or seal homes without a civil court trial.
                </p>
              </div>
            </section>

            {/* Section 3: PSU Bank SARB Mechanics in Guwahati */}
            <section id="psu-bank-sarb-guwahati-mechanics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. PSU Bank SARB Mechanics in Guwahati</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Guwahati hosts large PSU bank hubs. These include <strong>State Bank of India (LHO and SARB at Dispur)</strong>, <strong>UCO Bank (Panbazar)</strong>, and <strong>Punjab National Bank (GS Road)</strong>. It also hosts Canara Bank, AGVB, HDFC, ICICI, and NBFCs like Bajaj Finance.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an unsecured loan crosses 90 to 180 days unpaid, banks move files to <strong>Stressed Assets Recovery Branches (SARB)</strong>. Branch managers have limited powers. In contrast, SARB committees use board-approved OTS policies to settle bad debt.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When advocates submit verified hardship records, SARB teams can approve major waivers. They waive 100% of penal interest and reduce principal by 40% to 70% for full closure.
              </p>
            </section>

            {/* Section 4: Bank Accounting & NPV Formula */}
            <section id="bank-accounting-npv-recovery-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank Economics &amp; The Stressed Asset NPV Recovery Equation</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI IRAC norms, defaulted loans require mandatory NPA provisions. These range from 15% to 100%. Locked capital hurts bank profits. This encourages lenders to approve settlement offers.
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Distressed Debt Category.</th>
                      <th>Original Claim.</th>
                      <th>Bank Provisioning.</th>
                      <th>Target OTS Compromise.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Salaried Personal Loan (PSU Bank).</td>
                      <td>₹12.0 Lakhs.</td>
                      <td>100% Loss Provisioned.</td>
                      <td><span><strong>Target OTS.</strong> ₹4.5L to ₹5.5L (54%–62% Haircut).</span></td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Fancy Bazar MSME Credit Facility.</td>
                      <td>₹25.0 Lakhs.</td>
                      <td>100% Capital Locked.</td>
                      <td><span><strong>Target OTS.</strong> ₹8.0L to ₹10.5L (58%–68% Haircut).</span></td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Private Bank Credit Card Pool.</td>
                      <td>₹6.5 Lakhs.</td>
                      <td>100% Written Off in P&amp;L.</td>
                      <td><span><strong>Target OTS.</strong> ₹1.8L to ₹2.5L (61%–72% Haircut).</span></td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Digital Fintech App Loan Pool.</td>
                      <td>₹4.0 Lakhs.</td>
                      <td>100% Capital Impairment.</td>
                      <td><span><strong>Target OTS.</strong> ₹1.2L to ₹1.6L (60%–70% Haircut).</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When reviewing an OTS proposal, bank committees use the <strong>Net Present Value (NPV) recovery formula</strong>:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Stressed Asset NPV Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Court_Litigation_Costs - Agency_Commissions - Capital_Provisioning_Drag
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here C_t is estimated recovery. The letter r is the discount rate. Deductions cover court fees and locked capital funds.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Long court trials in Kamrup Metro bring high fees and slow returns. An upfront cash settlement yields much better value for the lender.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="guwahati-settlement-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Guwahati &amp; Assam Loan Settlement Legal Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The chart below shows the 5-step legal journey from loan default to SARB talks, OTS sanction. And full credit recovery.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/personal-loan-settlement-guwahati.jpg"
                  alt="Guwahati &amp; Assam Personal Loan Settlement Legal Roadmap Infographic"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Default &amp; Legal Shield.</span>
                  <span>90+ DPD NPA tagging. Advocates issue formal notices, stop agent visits, and defend Kamrup Metro court summons.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: SARB Hardship Audit &amp; 40%–70% OTS.</span>
                  <span>We submit verified hardship files to bank committees. We negotiate and secure formal OTS sanctions.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Remittance &amp; ₹0 NDC Delivery.</span>
                  <span>Direct payment into loan accounts. Delivery of RBI No Dues Certificate within 30 days and CIBIL clean-up.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Advocate-Led Settlement Defense */}
            <section id="advocate-led-defense-kamrup-metro" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Legal Defense: Countering Kamrup Metro Summons</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When NACH debits or cheques bounce, banks file cases under <strong>Section 138 NI Act</strong> or <strong>Section 25 PSSA</strong>. These cases go to the Panbazar CJM Court.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our advocates protect borrowers through a four-tier defense plan:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Tier 1: Notice of Legal Representation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advocates serve legal notices citing RBI rules. This routes all bank calls through counsel.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Tier 2: Representation in Kamrup Metro Courts</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Counsel files a Vakalatnama at Panbazar Court. They secure bail and contest notice defects.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Tier 3: Verified Hardship Dossier Submission</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lawyers present proof of income loss, business decline, or illness to bank committees.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Tier 4: National Lok Adalat Consent Decree</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 147 NI Act, we take the dispute to <strong>ASLSA Lok Adalat</strong> for final disposal.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Forensic Verification of Settlement Letters */}
            <section id="forensic-verification-settlement-letters" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Forensic Audit of Settlement Letters in Assam
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Avoid fake settlement letters from agents. Every genuine OTS sanction letter must meet four key checkpoints:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Bank Letterhead</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Must be on official bank letterhead with authorized officer signatures and seal.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Clear Account and Tranche Details</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Must state loan number, PAN, exact settlement sum. And payment dates.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Debt Extinguishment Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Must confirm that full payment closes all balance, interest. And fees.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Case Withdrawal Terms</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Must state that the bank will withdraw all court cases within 30 days.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Crucial Payment Rule: Bank Account Deposit Only</span>
                </span>
                <p className="leading-relaxed">
                  Never pay cash or send funds to personal UPI IDs. Pay directly into your loan account via RTGS, NEFT, or Demand Draft.
                </p>
              </div>
            </section>

            {/* Section 8: Remittance, NDC & CIBIL Recovery */}
            <section id="remittance-ndc-cibil-restoration" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Settlement Remittance &amp; ₹0 NDC in Assam</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under <strong>RBI Circular RBI/2023-24/60</strong>, banks must issue the <strong>No Dues Certificate (NDC)</strong> in 30 days. Lenders must pay <strong>₹5,000 per day of delay</strong> if they fail to issue it on time.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Statutory 30-Day NDC Mandate &amp; ₹5,000/Day Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Banks must return all pledged documents and deliver closure letters in 30 days.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Credit Bureau Rehabilitation Overview
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After settlement, banks update credit bureaus to <strong>&quot;Settled&quot;</strong> with a <strong>₹0</strong> balance. This stops negative marks. You can restore your score to 750+ within 18 to 24 months.
              </p>
            </section>

            {/* Section 9: Comparative Strategy Matrix */}
            <section id="guwahati-settlement-vs-litigation-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Guwahati Banking Settlement vs. Court Litigation Matrix
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Comparing bank OTS and court trials shows why settlement is the smarter choice:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Parameter.</th>
                      <th>Advocate-Negotiated Bank OTS.</th>
                      <th>Contested Court Litigation (Panbazar Courts).</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Financial Liability.</td>
                      <td><span><strong>Huge Savings.</strong> 40%–70% Principal Waiver. 100% Penal Waiver.</span></td>
                      <td><span><strong>Full Cost.</strong> Full Claim + 18%–24% Interest + Court Fees.</span></td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Resolution Time.</td>
                      <td><span><strong>Fast.</strong> 45 to 120 Days for Full Closure.</span></td>
                      <td><span><strong>Slow.</strong> 3 to 7 Years of Protracted Trials.</span></td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Harassment Protection.</td>
                      <td><span><strong>Protected.</strong> Complete Safety via Legal Notice.</span></td>
                      <td><span><strong>Exposed.</strong> Summons, Calls, and Court Friction.</span></td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Legal Finality.</td>
                      <td><span><strong>Final.</strong> Bank NDC and Lok Adalat Order.</span></td>
                      <td><span><strong>Uncertain.</strong> Warrants and Salary Attachment Risk.</span></td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">CIBIL Status.</td>
                      <td><span><strong>Rebuilt.</strong> ₹0 Balance. Rebuild in 18–24 Months.</span></td>
                      <td><span><strong>Damaged.</strong> Long Default Record.</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Advisory in Guwahati
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  SettleLoans provides expert debt defense in Guwahati and Assam. We stop agent harassment and defend court cases in Kamrup Metro. We negotiate with bank SARBs to secure 40% to 70% OTS debt waivers with formal No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Guwahati Assam</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Find clear legal answers about loan defaults, recovery rules, court notices, and OTS steps in Guwahati and Assam.
              </p>

              <div className="space-y-3">
                {((jsonLdGraph['@graph'].find((item: any) => item['@type'] === 'FAQPage') as any)?.mainEntity || []).map((faq: any, idx: number) => (
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
                  href="https://ghconline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Gauhati High Court (Official Judicial Portal &amp; Orders)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://aslsa.assam.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Assam State Legal Services Authority (National Lok Adalat)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Directions on Fair Practices Code</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2256"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Negotiable Instruments Act, 1881 (Section 138 &amp; Section 147)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Debt Relief &amp; Banking Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Guidelines
                </Link>
                <Link
                  href="/sbi-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SBI Loan Settlement Process
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Section 138 NI Act Defense
                </Link>
                <Link
                  href="/section-25-pssa-notice-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Section 25 PSSA Notice Defense
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Unsecured Loan Property Protections
                </Link>
                <Link
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Salary Account Freeze Protection
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/case-study-sbi-lok-adalat-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SBI Lok Adalat Case Study
                </Link>
                <Link
                  href="/stop-recovery-agent-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Recovery Harassment
                </Link>
                <Link
                  href="/case-study-cibil-status-settled-to-closed"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Settled to Closed Clean-Up
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
                Expert in PSU bank SARB talks, Gauhati High Court defenses. And loan compromise settlements with 10+ years of debt advisory work.
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
                <span>Guwahati Debt Defense Desk</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Facing Recovery Calls or CJM Court Notices in Assam?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not face recovery agents alone. Hire expert advocates to stop harassment and secure a 40%–70% OTS waiver.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Free Guwahati Case Evaluation
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
                  <span>Gauhati HC &amp; Civil Law Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Legal Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank-Stamped OTS Sanctions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>National Lok Adalat Settlement Decrees</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
