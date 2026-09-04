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
  ShieldX,
  ShieldAlert,
  UserCheck,
  BadgePercent,
  AlertCircle,
  Receipt,
  Landmark,
  MapPin
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement in Madurai | SettleLoans',
  description: 'Learn how to settle personal loans legally in Madurai. Stop recovery harassment and resolve unsecured debt with expert OTS via SettleLoans.',
  keywords: [
    'debt settlement advocates in madurai',
    'personal loan settlement in madurai',
    'loan settlement lawyers madurai',
    'sarb notice legal reply madurai',
    'microfinance loan dispute settlement tamil nadu',
    'dindigul virudhunagar loan default legal help',
    'ots policy private banks madurai',
    'madurai district court lok adalat loan settlement',
    'section 138 ni act advocate madurai',
    'debt recovery tribunal madurai advocate',
    'rbi compromise settlement madurai'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-madurai',
  },
  openGraph: {
    title: 'Debt Settlement Advocates in Madurai: Personal Loan & SARB OTS Legal Guide (2026)',
    description: 'Specialized legal defense and loan settlement advisory for traders, entrepreneurs, and professionals in Madurai, Dindigul, and Virudhunagar facing private bank SARB notices and microfinance disputes.',
    url: 'https://www.settleloans.in/personal-loan-settlement-madurai',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-madurai.jpg',
        width: 1200,
        height: 675,
        alt: 'Personal Loan & Debt Settlement in Madurai and Southern Tamil Nadu Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt Settlement Advocates in Madurai: Personal Loan & SARB OTS Guide',
    description: 'Facing loan default notices, Section 138 summons, or recovery agent harassment in Madurai or Southern Tamil Nadu? Learn how advocate-led OTS achieves 40%–60% debt reduction under RBI directives.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-madurai.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-madurai#webpage",
      "url": "https://www.settleloans.in/personal-loan-settlement-madurai",
      "name": "Debt Settlement Advocates in Madurai: Personal Loan & SARB OTS Legal Guide (2026)",
      "description": "Comprehensive legal and financial manual for settling personal loans, credit card debts, and microfinance disputes across Madurai, Dindigul, and Virudhunagar under Reserve Bank of India compromise settlement regulations.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-loan-settlement-madurai#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-madurai#breadcrumb",
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
          "name": "Personal Loan Settlement Madurai",
          "item": "https://www.settleloans.in/personal-loan-settlement-madurai"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settlement-madurai#article",
      "headline": "Debt Settlement Advocates in Madurai: Personal Loan & Bank SARB OTS Legal Guide",
      "description": "An exhaustive guide on navigating personal loan defaults, private bank Stressed Assets Recovery Branch (SARB) notices, microfinance disputes, and Lok Adalat compromise settlements in Madurai, Dindigul, and Virudhunagar.",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-madurai.jpg",
      "datePublished": "2026-08-28T10:00:00+05:30",
      "dateModified": "2026-08-28T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-loan-settlement-madurai#webpage"
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
        "availableLanguage": ["English", "Tamil", "Hindi"]
      }
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/personal-loan-settlement-madurai#service",
      "name": "SettleLoans - Debt Settlement Advocates & Legal Defense Madurai",
      "description": "Specialized legal representation and debt resolution advisory for borrowers managing delinquent personal loans, private bank SARB notices, and microfinance claims across Madurai, Dindigul, and Virudhunagar.",
      "url": "https://www.settleloans.in/personal-loan-settlement-madurai",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-madurai.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "KK Nagar Commercial Complex, Madurai Main Road",
        "addressLocality": "Madurai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "625020",
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
        "reviewCount": "1940",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "S. Meenakshisundaram"
          },
          "datePublished": "2026-06-14",
          "reviewBody": "I run a textile shop in South Masi Street, Madurai. Cash flow issues hurt my business. Several private banks sent legal notices. Recovery agents also visited my shop. SettleLoans advocates stepped in with legal notices under RBI rules. They stopped all harassment immediately. Then they got an official SARB One-Time Settlement on ₹18.5 Lakhs of loans for ₹7.4 Lakhs. I got stamped No Dues Certificates within 30 days.",
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
            "name": "K. Soundararajan"
          },
          "datePublished": "2026-07-18",
          "reviewBody": "My agro business in Dindigul had ₹12.8 Lakhs in personal and card debt across two banks. The lenders filed Section 138 cheque bounce cases in Dindigul court. SettleLoans advocates represented me before the National Lok Adalat. They secured a 56% principal waiver and got a court order closing all cases.",
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
            "name": "M. Vigneswaran"
          },
          "datePublished": "2026-05-22",
          "reviewBody": "Our printing business in Virudhunagar faced cash flow trouble. Private bank SARB teams sent loan recall notices for ₹21 Lakhs. SettleLoans audited the loan ledger and found unfair penal charges. They spoke with the Zonal Committee in Chennai and closed a settlement for ₹9.2 Lakhs paid in two parts.",
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
            "name": "Dr. Anitha Ramanathan"
          },
          "datePublished": "2026-08-04",
          "reviewBody": "After clinic costs in Madurai rose, my personal loans grew to ₹15 Lakhs. SettleLoans protected my medical practice from aggressive recovery agents. They built my hardship file and secured a bank-stamped OTS at ₹6.5 Lakhs. My credit profile is now clean.",
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-madurai#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the legal process for personal loan settlement in Madurai and Southern Tamil Nadu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Loan settlement in Madurai follows the RBI Master Direction on Compromise Settlements (June 8, 2023). When an unsecured loan is unpaid past 90 days, it becomes an NPA. Debt advocates submit a hardship file to the bank SARB or Zonal Committee. The bank reviews your case and issues an OTS letter with a 40% to 60% waiver. You pay directly into your loan account and get an official No Dues Certificate."
          }
        },
        {
          "@type": "Question",
          "name": "How do debt settlement advocates in Madurai handle private bank SARB notices and loan recall demands?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When a bank's Stressed Assets Recovery Branch (SARB) sends a demand notice, advocates send a formal legal reply. This reply challenges illegal penal interest under RBI rules. It documents your financial hardship and directs all bank calls to your lawyer. This stops recovery agent visits at once."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver or haircut can borrowers in Madurai expect on personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Waivers depend on loan delay and verified financial hardship. Banks and NBFCs in Tamil Nadu routinely approve 40% to 65% waivers on total dues. Lenders waive 100% of penal charges and late fees, along with a large discount on the core principal."
          }
        },
        {
          "@type": "Question",
          "name": "How are microfinance loan disputes and fintech app harassment legally resolved in Tamil Nadu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Microfinance lenders and loan apps in Tamil Nadu must follow RBI digital lending rules. If agents harass you, advocates file complaints with the District Magistrate under the Tamil Nadu Money Lenders Act. We also file grievances with the RBI Integrated Ombudsman to stop abuse and reach a fair settlement."
          }
        },
        {
          "@type": "Question",
          "name": "Can private banks file police complaints or arrest borrowers for personal loan default in Madurai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Loan default is strictly a civil contract matter under the Indian Contract Act, 1872. The Madurai Bench of the Madras High Court has ruled that police cannot intervene in civil loan disputes. Cheque bounce cases under Section 138 NI Act or Section 25 PSSA are bailable matters that can be settled in Lok Adalat."
          }
        },
        {
          "@type": "Question",
          "name": "How does the National Lok Adalat at the Madurai District Court handle loan settlements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The National Lok Adalat at Madurai District Court offers a safe space for settlement. Bank officers attend with pre-approved discount powers. The Lok Adalat award acts as a final civil court decree. It closes all Section 138 cases with zero court fees."
          }
        },
        {
          "@type": "Question",
          "name": "What is the role of the Madurai Bench of the Madras High Court in protecting loan defaulters?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Madurai Bench has jurisdiction across southern Tamil Nadu. The court has ruled against recovery agent harassment and police interference in loan defaults. It strictly enforces RBI Fair Practice Codes."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank in Madurai freeze my salary account or attach property for unsecured personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 171 of the Indian Contract Act, 1872 (Banker's General Lien), a bank can only set off funds from accounts in its own branches under the same CIF. It cannot freeze accounts in other banks or seize property for unsecured loans without a court decree."
          }
        },
        {
          "@type": "Question",
          "name": "What forensic checks must be conducted on an OTS sanction letter before making payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check that the OTS letter is on official bank letterhead with a reference number. It must list the exact settlement amount and waiver details. It must state that the loan is closed in full and that all court cases will be withdrawn."
          }
        },
        {
          "@type": "Question",
          "name": "What is the statutory timeline for receiving the No Dues Certificate (NDC) under RBI rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, lenders must issue a No Dues Certificate within 30 days of full settlement payment. If the bank delays without cause, it must pay the borrower ₹5,000 for each day of delay."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'demystifying-debt-settlement-madurai', title: '1. Debt Settlement in Madurai & Southern TN' },
  { id: 'regional-debt-landscape-sarb-microfinance', title: '2. Regional Debt Landscape & SARB Notices' },
  { id: 'statutory-protections-madurai-bench-rbi', title: '3. Statutory Protections & Judicial Framework' },
  { id: 'bank-balance-sheet-accounting-npv-madurai', title: '4. NPA Provisioning & The NPV Recovery Equation' },
  { id: 'madurai-debt-settlement-visual-roadmap', title: '5. Madurai Debt Settlement Visual Roadmap' },
  { id: 'advocate-negotiation-protocol-sarb', title: '6. Advocate Negotiation Protocol with SARBs' },
  { id: 'forensic-sanction-letter-verification', title: '7. Forensic Checklist for Watertight OTS Letters' },
  { id: 'remittance-rbi-ndc-cibil-restoration', title: '8. Remittance, RBI 30-Day NDC & CIBIL Bureau' },
  { id: 'madurai-debt-resolution-strategy-matrix', title: '9. Debt Resolution Strategy Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense in Tamil Nadu' },
  { id: 'faqs', title: '11. Frequently Asked Questions' }
];

export default function PersonalLoanSettlementMaduraiPage() {
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
        className="w-full border-b border-slate-700/80 pt-28 pb-8 md:pt-36 md:pb-12 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Southern Tamil Nadu Commercial Gateway • Madurai • Dindigul • Virudhunagar</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Personal Loan Settlement in Madurai: Legal OTS Guide</h1>

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
              <span>RBI &amp; Madras High Court Jurisdiction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Settle Your Debt in Madurai</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request Free Legal Evaluation
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
                <span>Southern Tamil Nadu Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Borrowers in Madurai, Dindigul, and Virudhunagar can resolve unpaid debt through legal One-Time Settlements (OTS). Under RBI compromise rules, advocates help you secure a 40% to 60% principal waiver. This process ends collection calls and closes court cases with official No Dues Certificates.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Madurai Debt Settlement &amp; Legal Protection</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Southern Tamil Nadu Protection.</strong> Legal help for traders and salaried staff in Madurai, Dindigul, and Virudhunagar facing loan default.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>SARB &amp. Loan App Defense.</strong> Stop recovery agent harassment, bank demand notices. And loan app threats with formal legal replies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Lok Adalat Settlement.</strong> Resolve Section 138 NI Act and Section 25 PSSA summons at Madurai District Court through binding civil compromise awards.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>40% to 60% Debt Waivers.</strong> Use RBI compromise rules and NPA bad loan rules to negotiate the lowest settlement amount.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official No Dues Certificate.</strong> Enforce RBI rules to get your physical NDC in 30 days and update CIBIL to a zero balance.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying Debt Settlement in Madurai & Southern Tamil Nadu */}
            <section id="demystifying-debt-settlement-madurai" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Debt Settlement Landscape in Madurai</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Madurai is the trade hub of Southern Tamil Nadu. It links textile markets in South Masi Street, agro-units in Dindigul. And printing firms in Virudhunagar. Rising costs and slow business have forced many local traders and workers to take high-interest personal loans and credit cards.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When monthly income drops, paying 18% to 36% interest becomes very hard. Missed payments lead to calls from bank recovery branches (SARBs), third-party agents. And microfinance staff. But unsecured loan default is strictly a civil dispute under the Indian Contract Act, 1872. Legal advocates in Madurai step in to stop harassment and negotiate a formal One-Time Settlement (OTS) with up to 60% debt waiver under RBI rules.
              </p>
            </section>

            {/* Section 2: Regional Debt Landscape: SARB & Microfinance */}
            <section id="regional-debt-landscape-sarb-microfinance" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Southern Tamil Nadu Debt Landscape &amp; Realities</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Trade in Southern Tamil Nadu runs on seasonal cash flows. When banks set up automated NACH debits, missed payments trigger fast recovery action across four main areas:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Private Bank SARB Notices</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks send 90-day overdue accounts to recovery branches in Madurai and Chennai. These units issue loan recall notices and file Section 138 cheque bounce cases.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>NBFC &amp; Microfinance Pressure</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders in Dindigul and Virudhunagar often send field agents during shop hours. This practice violates RBI fair practice codes.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Receipt className="w-4 h-4 text-purple-600" />
                    <span>Instant Loan Apps</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Many workers face illegal loan apps that charge high fees and send messages to contact lists.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Landmark className="w-4 h-4 text-emerald-600" />
                    <span>Co-operative Society Demands</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Local credit societies often add high penal interest on overdue loans without proper notice.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Paying small token amounts to agents does not clear your loan. It only goes toward extra fees. Legal representation protects your rights and moves banks directly into formal OTS talks.
              </p>
            </section>

            {/* Section 3: Statutory Protections & Judicial Framework */}
            <section id="statutory-protections-madurai-bench-rbi" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Statutory Protections in Madurai</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers in Southern Tamil Nadu enjoy strong legal rights. The Madurai Bench of the Madras High Court has ruled that banks cannot use private muscle men or police to collect loans. Pure loan default is strictly a civil matter.
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-amber-950">
                  <Scale className="w-4 h-4 text-amber-600" />
                  <span>Civil Default vs. Criminal Action</span>
                </div>
                <p className="leading-relaxed text-amber-800">
                  Defaulting on a personal loan is not a crime under the Indian Penal Code or Bharatiya Nyaya Sanhita. Lenders cannot file an FIR or arrest you for genuine financial distress.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Defending Section 138 NI Act &amp; Section 25 PSSA Summons
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When NACH auto-debits or cheques bounce, lenders file complaints under Section 138 of the Negotiable Instruments Act or Section 25 of the PSSA in Madurai courts. Defense advocates represent you, challenge false interest claims. And move the matter to the <strong>National Lok Adalat</strong>. Under Section 147 of the NI Act, all court cases are closed permanently once you settle.
              </p>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                RBI Anti-Harassment Rules
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI Fair Practice Codes, recovery agents can only call between 8:00 AM and 7:00 PM. They cannot call your relatives or friends. They cannot visit your workplace or use harsh words.
              </p>
            </section>

            {/* Section 4: Bank Balance Sheet Accounting, NPA Provisioning & NPV Equation */}
            <section id="bank-balance-sheet-accounting-npv-madurai" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. NPA Accounting &amp; NPV Models in Madurai</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Debt waivers are built on RBI accounting rules. When an unsecured personal loan stays unpaid past 90 days, it becomes a Non-Performing Asset (NPA). For doubtful loans, banks must set aside <strong>100% of the loan amount as capital provision</strong> from their profits.
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Asset Class.</th>
                      <th>Overdue Days.</th>
                      <th>Bank Provision.</th>
                      <th>Target OTS Waiver.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Standard (SMA-0 to 2).</td>
                      <td>1 to 90 Days.</td>
                      <td>0.40% to 5.0% Buffer.</td>
                      <td>Penal fee waiver only.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Sub-Standard Asset.</td>
                      <td>91 Days to 12 Months.</td>
                      <td>25% Capital Provision.</td>
                      <td>25% to 40% Waiver.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful-1 Asset.</td>
                      <td>12 to 24 Months.</td>
                      <td>100% Capital Provision.</td>
                      <td>40% to 50% Waiver.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful-2 / Doubtful-3.</td>
                      <td>24 to 48+ Months.</td>
                      <td>100% Full Provision.</td>
                      <td>50% to 60% Waiver.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loss / Written-Off.</td>
                      <td>Bad Debt / Unpaid.</td>
                      <td>100% Book Write-off.</td>
                      <td>55% to 65% Waiver.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Civil suits and DRT Madurai cases take 4 to 7 years to finish. Banks spend huge legal fees on slow court cases. Because of this, bank credit committees use the <strong>Net Present Value (NPV) recovery rule</strong> to approve cash settlements:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Bank NPV Recovery Valuation Rule</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Court Costs - Legal Fees - Locked NPA Capital
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t is expected cash, r is the bank cost of funds. And deductions include court delay and locked NPA reserves.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An immediate cash settlement of 40% to 50% releases 100% of the locked capital back into bank profits. This gives banks a strong reason to grant large debt discounts.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="madurai-debt-settlement-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Loan Settlement Roadmap in Madurai</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This simple roadmap explains the 5 key stages to settle delinquent personal loans, stop SARB notices. And get your No Dues Certificate across Southern Tamil Nadu.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/personal-loan-settlement-madurai.jpg"
                  alt="Personal Loan & Debt Settlement in Madurai and Southern Tamil Nadu Infographic Roadmap"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Notice Audit &amp; Legal Reply</span>
                  <span>Review SARB demand letters. Issue formal notices under RBI rules to stop harassment at home or work.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Hardship File &amp; Lok Adalat Terms</span>
                  <span>Remove unfair charges. Submit proof of income loss. Record final settlement terms before Madurai Lok Adalat.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Settlement Payment &amp; NDC Delivery</span>
                  <span>Pay agreed amount directly to the bank. Get your stamped No Dues Certificate within 30 days under RBI rules.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Advocate Negotiation Protocol with Bank SARBs */}
            <section id="advocate-negotiation-protocol-sarb" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Legal Settlement Protocol in Madurai</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Settling defaulted personal loans with major banks (HDFC, ICICI, Axis, Kotak, SBI) or NBFCs follows five proven steps:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 1: Loan Statement Audit</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advocates audit your loan statement. We remove unfair late fees, bounce charges. And penal interest that violate RBI guidelines.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 2: Legal Representation Notice</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We serve formal legal notices on the bank nodal officer and SARB manager. This directs all calls to counsel and stops visits to your workplace.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 3: Financial Hardship Dossier</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We assemble verified proof of income loss, medical bills, or business setbacks. This proves your reduced capacity to pay under RBI rules.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 4: Credit Committee Negotiations</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Counsel negotiates directly with bank credit committees. We secure a 40% to 60% principal waiver paid in easy parts.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 5: Lok Adalat Case Closure</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If Section 138 or Section 25 court cases exist, counsel presents the settlement before the National Lok Adalat to dismiss all cases for good.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Forensic Verification of Sanction Letters */}
            <section id="forensic-sanction-letter-verification" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Sanction Letter Checklist in Madurai</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers must watch out for fake settlement letters issued by rogue recovery agents. Before paying any money, our advocates check four vital points on your OTS letter:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Bank Letterhead</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must have the bank logo, branch address, reference code. And official signature.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Clear Waiver Breakdown</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must state total dues, the exact waiver amount. And the final net payment.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Full Account Discharge</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must state that this payment closes the loan account in full with zero balance remaining.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Case Withdrawal Terms</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank must promise in writing to withdraw all Section 138 NI Act and Section 25 PSSA cases.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-red-950">
                  <ShieldX className="w-4 h-4 text-red-600" />
                  <span>The Remittance Rule</span>
                </span>
                <p className="leading-relaxed">
                  Never pay settlement funds in cash or to personal accounts. Always pay directly into your loan account via RTGS, NEFT, or Demand Draft drawn in favor of the lending bank.
                </p>
              </div>
            </section>

            {/* Section 8: Remittance Protocols, RBI 30-Day NDC Mandate & CIBIL Bureau Rehabilitation */}
            <section id="remittance-rbi-ndc-cibil-restoration" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Settlement Remittance &amp; NDC in Madurai</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under <strong>RBI Circular RBI/2023-24/60</strong>, lenders must issue your official <strong>No Dues Certificate (NDC)</strong>, return security cheques. And update credit records within <strong>30 days</strong> of full payment. If the bank delays without reason, it must pay you a penalty of <strong>₹5,000 per day of delay</strong>.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>CIBIL Credit Score Recovery</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  After payment, the bank updates credit bureaus (CIBIL, Experian, CRIF) to mark the loan as <strong>&quot;Settled&quot;</strong> with an outstanding balance of <strong>₹0</strong>. This stops active default notices. You can rebuild your credit score above 750 within 12 to 18 months using a small secured card with prompt monthly payments.
                </p>
              </div>
            </section>

            {/* Section 9: Comparative Debt Resolution Strategy Matrix */}
            <section id="madurai-debt-resolution-strategy-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Debt Resolution Matrix in Madurai</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Compare debt options for Madurai, Dindigul, and Virudhunagar borrowers to pick the best path forward:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Path.</th>
                      <th>Legal Forum.</th>
                      <th>Target Waiver.</th>
                      <th>Time Taken.</th>
                      <th>Legal Result.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate Bank OTS.</td>
                      <td>Bank Committee &amp. RBI Rules.</td>
                      <td>40% to 60% Waiver.</td>
                      <td>45 to 90 Days.</td>
                      <td>Full legal immunity. Closes Section 138 cases. Official ₹0 NDC issued.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Lok Adalat.</td>
                      <td>Madurai DLSA Legal Forum.</td>
                      <td>35% to 55% Waiver.</td>
                      <td>Single Hearing Day.</td>
                      <td>Final court decree. Zero court fees. Permanent closure of disputes.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Contested Court Trial.</td>
                      <td>Trial under Section 138 NI Act.</td>
                      <td>0% (Full Dues + Fees).</td>
                      <td>3 to 6 Years.</td>
                      <td>High legal stress. Risk of warrants and money decrees.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Informal Deals with Agents.</td>
                      <td>Verbal deals with field staff.</td>
                      <td>No legal proof.</td>
                      <td>Uncertain.</td>
                      <td>Risk of fraud. Harassment continues unabated.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loan Restructuring.</td>
                      <td>Tenure elongation.</td>
                      <td>0% (No reduction).</td>
                      <td>30 to 60 Days.</td>
                      <td>No principal cut. Increases total interest over time.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Legal Relief in Southern Tamil Nadu</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  SettleLoans provides full debt defense across Madurai, Dindigul, and Virudhunagar. We issue legal cease-and-desist notices, defend Section 138 court summons, remove unfair penal fees. And negotiate directly with bank credit committees for maximum OTS waivers backed by stamped ₹0 No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Loan Settlement in Madurai</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear answers to common questions about personal loan settlements, SARB notices, Lok Adalat hearings. And borrower rights across Southern Tamil Nadu.
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
                  <span className="font-semibold text-slate-800">RBI Master Direction – Compromise Settlements &amp; Technical Write-offs</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://hcmadras.tn.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Madras High Court – Madurai Bench Official Portal &amp; Orders</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (NALSA) – Lok Adalat Compromise Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction on Recovery Agents &amp; Fair Practices Code</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Grievance Redressal &amp; Fair Lending Enforcement)</span>
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
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Guide
                </Link>
                <Link
                  href="/drt-loan-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  DRT Loan Settlement Guide
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Recovery Harassment
                </Link>
                <Link
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Freeze Account Rights
                </Link>
                <Link
                  href="/SME-loan-dispute-resolution"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SME Loan Dispute Resolution
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Unsecured Loan Property Rights
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
                  href="/bailable-non-bailable-warrant-cheque-bounce-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Cheque Bounce Warrant Defense
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
                Expert in Southern Tamil Nadu banking disputes, SARB notices, Section 138 compounding, and RBI compromise settlements across Madurai, Dindigul, and Virudhunagar.
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
                <span>Madurai Debt Legal Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Facing SARB Notices or Recovery Harassment?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not face bank pressure alone. Speak with debt defense advocates in Madurai to stop harassment and negotiate a 40% to 60% bank OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Free Legal Evaluation
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
                  <span>RBI Compromise Framework Compliant</span>
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
                  <span>Advocate-Led Direct Representation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
