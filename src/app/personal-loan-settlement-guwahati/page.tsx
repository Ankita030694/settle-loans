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
          "reviewBody": "After supply chain disruptions hit my distributor business in Panbazar, my SBI personal loan and cards rose to ₹14.5 Lakhs. SettleLoans audited unjustified penal interest, engaged with SBI SARB Guwahati, and closed the debt with an official OTS at ₹6.1 Lakhs.",
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
          "reviewBody": "An acute medical emergency caused default on ₹18 Lakhs across HDFC and Axis Bank. SettleLoans issued legal representation notices, stopped collection agent visits in Beltola, and negotiated a structured compromise of ₹6.8 Lakhs across two tranches.",
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
          "reviewBody": "As a Fancy Bazar merchant facing ₹26 Lakhs in business overdraft dues and Section 138 summons at Kamrup Metro CJM Court, SettleLoans advocates secured bail and settled the entire liability via ASLSA Lok Adalat for ₹9.2 Lakhs.",
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
          "reviewBody": "As an Assam government employee in Dispur dealing with ₹9.8 Lakhs in NBFC and personal loans, SettleLoans invoked Section 60 CPC protections, halted salary attachment threats, and secured a 62% waiver OTS at ₹3.7 Lakhs.",
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
            "text": "Guwahati is the financial hub of North-East India, hosting regional offices and Stressed Assets Recovery Branches (SARB) for major PSU banks (SBI, UCO, PNB) and private lenders. Debt resolution requires specialized understanding of local courts—including Gauhati High Court, Kamrup Metro District Court, and Panbazar CJM Court. Advocates enforce statutory debt protections, halt agent harassment, and negotiate structured 40% to 70% One-Time Settlements."
          }
        },
        {
          "@type": "Question",
          "name": "Can Guwahati Police or Assam Police arrest me for defaulting on an unsecured personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under Indian civil jurisprudence and Gauhati High Court rulings, involuntary loan default is strictly a civil breach of contract under the Indian Contract Act, 1872. Police authorities have zero legal jurisdiction to register FIRs or detain borrowers for genuine commercial loan defaults."
          }
        },
        {
          "@type": "Question",
          "name": "How does SettleLoans handle recovery agent harassment in residential areas of Guwahati?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We issue a formal Notice of Legal Representation citing RBI Fair Practices Code and the Assam Micro Finance Institutions Act, 2020. This legally routes all creditor communications through counsel, prohibiting unauthorized doorstep visits, abusive calls, and third-party disclosures."
          }
        },
        {
          "@type": "Question",
          "name": "What legal steps are taken if I receive a Section 138 NI Act notice from Kamrup Metro Court?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Empanelled Guwahati advocates draft a formal legal reply challenging inflated compounding interest and penal levies. If a complaint is filed before the CJM Court Panbazar, counsel enters appearance under a Vakalatnama, secures bail, and refers the dispute to the National Lok Adalat for an agreed OTS compromise."
          }
        },
        {
          "@type": "Question",
          "name": "How does SBI SARB Guwahati process One-Time Settlements for unsecured personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When an unsecured loan crosses 90–180 DPD, SBI transfers the account to SARB Guwahati. SARB committees operate under board-approved OTS policies empowering them to sanction 40% to 70% waivers based on verified borrower financial hardship and unencumbered asset status."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank freeze or attach my salary account in Assam for personal loan non-payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Banks cannot arbitrarily freeze salary accounts without a formal civil court attachment decree under Order XXI CPC. Furthermore, Section 60(1)(i) CPC strictly exempts essential salary allowances and the first two-thirds of attachable salary from court execution."
          }
        },
        {
          "@type": "Question",
          "name": "What essential clauses must be verified in a Guwahati bank OTS sanction letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An authentic OTS letter must be on official bank stationery signed by an authorized manager. It must specify the loan account number, agreed settlement figure, payment tranches, and an explicit clause confirming full debt extinguishment, litigation withdrawal, and NDC delivery within 30 days."
          }
        },
        {
          "@type": "Question",
          "name": "How does personal loan settlement in Assam affect credit bureau reporting across CIBIL and CRIF?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upon full remittance, the bank updates credit bureaus (CIBIL, Experian, Equifax, CRIF) to 'Settled' with a ₹0 balance. This stops continuous monthly negative DPD updates, allowing borrowers to rebuild their credit score back to 750+ over 18 to 24 months."
          }
        },
        {
          "@type": "Question",
          "name": "How long does the personal loan settlement process take in Guwahati?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The entire legal settlement process typically takes 45 to 120 days, spanning initial audit, legal notice issuance, financial hardship submission, SARB committee negotiation, and final sanction issuance."
          }
        },
        {
          "@type": "Question",
          "name": "Are microfinance loans and fintech app debts covered under debt settlement protections in Assam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Assam Micro Finance Institutions (Regulation of Money Lending) Act, 2020 and RBI Digital Lending Guidelines prohibit coercive recovery methods, contact scraping, and usurious compounding, providing strong legal grounds for compromise settlement."
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
                Borrowers in Guwahati facing NPA classifications across PSU bank SARBs (SBI, UCO, PNB) or NBFCs are shielded by Gauhati High Court civil rulings and RBI resolution policies. Legal representation halts collection visits in Kamrup Metro, defends CJM Panbazar summons, and secures 40%–70% OTS waivers.
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
                  <span><strong>Gauhati High Court Civil Precedents:</strong> Involuntary personal loan default is purely a civil breach of contract; neither police nor lenders can initiate criminal arrests.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct PSU SARB Negotiations:</strong> Defaulted accounts with SBI, UCO Bank, and PNB in Assam are transferred to SARB branches where board-approved OTS policies yield 40%–70% waivers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Kamrup Metro CJM Court Representation:</strong> Advocates handle Section 138/25 notices in Panbazar, secure regular bail, and refer disputes to Lok Adalats for permanent disposal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Assam Microfinance &amp; Fair Lending Shield:</strong> Rigorous state legislation and RBI guidelines strictly outlaw abusive recovery tactics and doorstep intimidation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI No Dues Certificate &amp; Credit Clean-Up:</strong> Direct settlement remittance secures official No Dues Certificates within 30 days and updates credit bureaus to ₹0 balance.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Guwahati Debt Landscape */}
            <section id="guwahati-debt-crisis-landscape" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Guwahati Debt Landscape: Commercial Pressures &amp; Default Dynamics
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As the primary commercial, logistical, and administrative gateway to North-East India, Guwahati houses major trading centers across Fancy Bazar, Panbazar, Paltan Bazar, Machkhowa, and GS Road. Alongside these commercial markets, administrative and employment hubs in Dispur, Christian Basti, Bhangagarh, Six Mile, and Jalukbari support thousands of salaried government personnel, corporate executives, and healthcare professionals.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Over recent years, economic disruptions, localized wholesale credit squeezes, and rising living expenses have led to acute liquidity constraints across Kamrup Metropolitan district. When business proprietors or salaried employees default on unsecured EMIs for 90 consecutive days, loans are classified as Non-Performing Assets (NPAs). Borrowers then face aggressive recovery agency tactics—including persistent automated calls and intrusive visits across Zoo Road, Beltola, and Kahilipara.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Retaining an experienced loan settlement company in Guwahati Assam replaces this stress with a structured legal defense. Debt defense advocates protect borrowers from coercive recovery practices, audit loan agreements for regulatory violations, and negotiate directly with bank credit committees to secure 40% to 70% principal waivers via formal One-Time Settlements (OTS).
              </p>
            </section>

            {/* Section 2: Statutory Legal Protections */}
            <section id="statutory-legal-protections-gauhati-hc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Protections: Gauhati High Court Precedents &amp; Assam Debt Laws
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Debt resolution in Assam operates under federal statutes, RBI master directions, and authoritative jurisprudence from the Hon&apos;ble Gauhati High Court. Under Section 73 of the Indian Contract Act, 1872, unsecured personal loans and credit cards are civil contracts. Involuntary default due to financial hardship or medical crisis is purely a civil dispute. The Gauhati High Court has repeatedly held that police authorities lack jurisdiction to register criminal FIRs or intervene in civil loan recovery disputes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Gauhati High Court Writ Protections</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Article 226 of the Constitution of India, the High Court prohibits public sector and commercial banks from coercive recovery practices violating borrower dignity under Article 21.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    <span>Assam Micro Finance Institutions Act, 2020</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    This state statute prohibits microfinance institutions and NBFCs from using abusive field agents, intimidatory tactics, or predatory interest rate compounding.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-purple-600" />
                    <span>Section 60(1) CPC Salary Protections</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For salaried employees in Dispur and Guwahati, Section 60(1)(i) CPC exempts basic allowances and the first two-thirds of attachable salary from court execution.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>RBI Fair Practices Code Mandates</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI rules strictly forbid collection calls outside 8:00 AM to 7:00 PM, harassment of family members, abusive language, or visits without prior appointment.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>SARFAESI Act Inapplicability on Unsecured Personal Loans</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  Under Section 13(2) of the SARFAESI Act, 2002, summary asset attachment powers apply strictly to secured loans backed by registered mortgages. For clean personal loans and credit cards, banks possess zero statutory authority to seize property or seal homes without a contested civil trial.
                </p>
              </div>
            </section>

            {/* Section 3: PSU Bank SARB Mechanics in Guwahati */}
            <section id="psu-bank-sarb-guwahati-mechanics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. PSU Bank SARB Mechanics in Guwahati: SBI, UCO Bank &amp; Private NBFCs
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The banking landscape in Guwahati is anchored by major public sector networks including <strong>State Bank of India (Local Head Office &amp; SARB Guwahati at Dispur / Bhangagarh)</strong>, <strong>UCO Bank (Panbazar Zonal Office)</strong>, <strong>Punjab National Bank (GS Road)</strong>, <strong>Canara Bank</strong>, <strong>Assam Gramin Vikash Bank (AGVB)</strong>, alongside major private lenders like HDFC Bank, ICICI Bank, Axis Bank, and NBFCs such as Bajaj Finance and Tata Capital.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an unsecured loan defaults past 90–180 days, PSU banks transfer the file from local branches to specialized <strong>Stressed Assets Recovery Branches (SARB)</strong>. Unlike branch managers constrained by low discretionary limits, SARB settlement committees operate under board-approved One-Time Settlement policies designed to liquidate bad debts.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When legal counsel submits a verified financial hardship dossier demonstrating insolvency, SARB committees possess full authority to sanction substantial compromises—waiving 100% of accrued penal interest and discounting 40% to 70% of the principal balance for immediate, full-and-final recovery.
              </p>
            </section>

            {/* Section 4: Bank Accounting & NPV Formula */}
            <section id="bank-accounting-npv-recovery-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Economics &amp; The Stressed Asset NPV Recovery Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI Prudential Norms on Asset Classification and Provisioning (IRAC), a defaulted loan forces the bank to lock regulatory capital into mandatory NPA provisioning—progressing from 15% (Sub-Standard) to 100% (Loss Asset). Capital locked in provisions impairs operating profits, incentivizing banks to settle.
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Distressed Debt Category</th>
                      <th>Original Claim</th>
                      <th>Bank Provisioning</th>
                      <th>Target OTS Compromise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Salaried Personal Loan (PSU Bank)</td>
                      <td>₹12.0 Lakhs</td>
                      <td>100% Loss Provisioned</td>
                      <td>₹4.5L – ₹5.5L (54%–62% Haircut)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Fancy Bazar MSME Credit Facility</td>
                      <td>₹25.0 Lakhs</td>
                      <td>100% Capital Locked</td>
                      <td>₹8.0L – ₹10.5L (58%–68% Haircut)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Private Bank Credit Card Pool</td>
                      <td>₹6.5 Lakhs</td>
                      <td>100% Written Off in P&amp;L</td>
                      <td>₹1.8L – ₹2.5L (61%–72% Haircut)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Digital Fintech App Loan Pool</td>
                      <td>₹4.0 Lakhs</td>
                      <td>100% Capital Impairment</td>
                      <td>₹1.2L – ₹1.6L (60%–70% Haircut)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When evaluating an advocate-submitted settlement proposal versus pursuing court litigation, bank credit committees apply the <strong>Stressed Asset Net Present Value (NPV) Recovery Valuation Benchmark</strong>:
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
                  Where C_t is estimated future recovery, r is the discount rate, and deductions reflect 3–7 years of court delays in Kamrup Metro, advocate fees, and capital locked in non-earning provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because prolonged litigation in local courts involves high costs and uncertain recoveries, the discounted NPV of future litigation is substantially lower than an immediate, advocate-negotiated cash settlement.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="guwahati-settlement-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Guwahati &amp; Assam Loan Settlement Legal Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below illustrates the structured 5-stage legal journey from NPA classification to SARB negotiations, OTS sanction issuance, and ultimate credit restoration.
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
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Default &amp; Legal Shield</span>
                  <span>90+ DPD NPA tagging; advocates issue Notice of Representation, halting agent visits and defending Kamrup Metro court notices.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: SARB Hardship Audit &amp; 40%–70% OTS</span>
                  <span>Submission of audited financial hardship dossier to bank recovery committees; securing formal OTS compromise sanction.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Remittance &amp; ₹0 NDC Delivery</span>
                  <span>Direct loan account remittance; delivery of official RBI No Dues Certificate within 30 days and CIBIL updated to ₹0 balance.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Advocate-Led Settlement Defense */}
            <section id="advocate-led-defense-kamrup-metro" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Legal Defense: Countering Kamrup Metro Summons &amp; Harassment
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When NACH electronic debits or repayment cheques bounce, banks often file complaints under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> or <strong>Section 25 of the Payment and Settlement Systems Act, 2007</strong> before the Chief Judicial Magistrate (CJM) Kamrup Metropolitan in Panbazar.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Empanelled debt settlement advocates protect borrowers through a structured 4-tier defense framework:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Tier 1: Notice of Legal Representation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advocates serve statutory notices upon the lender, invoking RBI Fair Practices Code protections and directing that all communications be routed exclusively through legal counsel.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Tier 2: Representation in Kamrup Metro Courts</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Counsel files a Vakalatnama at the Panbazar Court Complex, enters appearance, secures bail without detention, and challenges procedural defects in statutory demand notices.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Tier 3: Verified Hardship Dossier Submission</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lawyers compile verified documentation—trading turnover declines, job losses, or medical records—to establish genuine financial distress before bank committees.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Tier 4: National Lok Adalat Consent Decree</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 147 NI Act, the dispute is referred to the <strong>Assam State Legal Services Authority (ASLSA) Lok Adalat</strong>, obtaining a binding decree that permanently ends litigation.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Forensic Verification of Settlement Letters */}
            <section id="forensic-verification-settlement-letters" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Forensic Checklist for Bank Settlement Sanction Letters
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To prevent fraud by recovery agents issuing fake settlement emails to extract token payments, every settlement sanction letter must satisfy four critical validation checkpoints:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Bank Letterhead &amp; Signatures</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Must be on official stationery with registered office details and signatures of an authorized Assistant General Manager or Chief Manager.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Explicit Account &amp; Tranche Details</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Must clearly state the exact loan account number, borrower PAN, total settlement amount, and milestone payment dates.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Debt Extinguishment Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Must affirm that upon receiving the agreed amount, all remaining principal, interest, and penal charges stand perpetually extinguished.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Legal Case Withdrawal Mandate</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Must legally bind the bank to withdraw all Section 138/25 proceedings and issue a No Dues Certificate within 30 days.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Crucial Payment Rule: Official Bank Account Deposit Only</span>
                </span>
                <p className="leading-relaxed">
                  Never pay cash or transfer funds to personal UPI IDs. All remittances must be made directly into your designated bank loan account via RTGS, NEFT, or an Account Payee Demand Draft.
                </p>
              </div>
            </section>

            {/* Section 8: Remittance, NDC & CIBIL Recovery */}
            <section id="remittance-ndc-cibil-restoration" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Settlement Remittance, RBI No Dues Certificate &amp; CIBIL Clean-Up
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under <strong>RBI Circular RBI/2023-24/60</strong>, regulated lending institutions are statutorily mandated to deliver a formal <strong>No Dues Certificate (NDC)</strong> and update credit bureau databases within <strong>30 calendar days</strong> of receiving the final settlement payment. Any unjustified delay makes the bank liable to pay compensation of <strong>₹5,000 per day of delay</strong> directly to the borrower.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Statutory 30-Day NDC Mandate &amp; ₹5,000/Day Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  The bank must release all held documents and deliver an official loan closure certificate within 30 days of full settlement remittance, ensuring complete legal freedom.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Credit Bureau Rehabilitation Overview
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following settlement, the bank updates credit bureaus (CIBIL, Experian, Equifax, CRIF) to <strong>&quot;Settled&quot;</strong> with a <strong>₹0</strong> balance. This stops monthly negative DPD reporting, and by adopting a secured credit rebuilding plan, borrowers consistently restore their score back to 750+ within 18 to 24 months.
              </p>
            </section>

            {/* Section 9: Comparative Strategy Matrix */}
            <section id="guwahati-settlement-vs-litigation-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Guwahati Banking Settlement vs. Court Litigation Matrix
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Comparing an advocate-negotiated bank OTS against protracted court litigation highlights why structured settlement is the superior resolution pathway:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Parameter</th>
                      <th>Advocate-Negotiated Bank OTS</th>
                      <th>Contested Court Litigation (Panbazar Courts)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Financial Liability</td>
                      <td>40%–70% Principal Waiver; 100% Penal Waiver</td>
                      <td>Full Claim + 18%–24% Interest + Court Fees</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Resolution Time</td>
                      <td>45 to 120 Days for Complete Finality</td>
                      <td>3 to 7 Years of Protracted Litigation</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Harassment Protection</td>
                      <td>Complete Protection via Representation Notice</td>
                      <td>Incessant Summons, Calls &amp; Court Friction</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Legal Finality</td>
                      <td>Official Bank NDC &amp; Lok Adalat Consent Decree</td>
                      <td>Execution Warrants &amp; Salary Attachment Risk</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">CIBIL Status</td>
                      <td>₹0 Balance; Score Rebuild in 18–24 Months</td>
                      <td>Perpetual &quot;Written Off / Wilful Default&quot; Record</td>
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
                  SettleLoans provides specialized debt defense advisory across Guwahati and Assam. Our team serves legal representation notices, terminates recovery agent harassment, defends court proceedings in Kamrup Metro, and negotiates directly with PSU SARBs and private lenders to achieve 40% to 70% OTS debt settlements backed by legally binding No Dues Certificates.
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
                  11. Frequently Asked Questions: Personal Loan Settlement in Guwahati Assam
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to essential questions regarding personal loan defaults, recovery agent restrictions, court notices in Kamrup Metro, and bank OTS settlement procedures in Guwahati and Assam.
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
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in PSU bank SARB debt negotiations, Gauhati High Court legal defenses, and bank compromise settlements across North-East India with over a decade of financial dispute experience.
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
                Do not face recovery agents or bank SARBs alone. Retain expert debt defense advocates to protect your rights, stop harassment, and secure a 40%–70% OTS waiver.
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
