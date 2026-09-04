import { Metadata } from 'next';
import Link from 'next/link';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import SidebarTOC from '@/components/SidebarTOC';
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
  PhoneCall,
  ExternalLink,
  Building2,
  Landmark,
  Check,
  BookOpen,
  ShieldAlert,
  Scale,
  HelpCircle,
  Calculator,
  Layers,
  Gavel,
  FileCheck,
  UserCheck,
  Award,
  CheckCircle2,
  MapPin,
  Briefcase,
  Factory,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement in Coimbatore | SettleLoans',
  description: 'Learn how to settle personal loans legally in Coimbatore. Stop recovery harassment and resolve bank debt with expert OTS via SettleLoans.',
  keywords: [
    'loan settlement company in coimbatore',
    'personal loan settlement coimbatore',
    'debt settlement advocate coimbatore',
    'loan settlement tirupur salem',
    'rbi loan settlement guidelines coimbatore',
    'npa loan settlement coimbatore',
    'bank recovery harassment lawyer coimbatore',
    'one time settlement ots coimbatore',
    'credit card settlement coimbatore',
    'business loan settlement tamil nadu',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-coimbatore',
  },
  openGraph: {
    title: 'Loan Settlement Company in Coimbatore: Legal Debt Relief & OTS | SettleLoans',
    description: 'Specialized advocate-led debt settlement for borrowers in Coimbatore, Tirupur, and Salem managing unsecured personal, business, and credit card debts.',
    url: 'https://www.settleloans.in/personal-loan-settlement-coimbatore',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-coimbatore.jpg',
        width: 1200,
        height: 675,
        alt: 'Loan Settlement in Coimbatore, Tirupur and Salem - Debt Relief Blueprint',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Company in Coimbatore: Advocate-Led Debt Relief in Tamil Nadu',
    description: 'Expert legal and financial advisory for personal loan, credit card, and MSME debt settlement across Coimbatore and Western Tamil Nadu.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-coimbatore.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-coimbatore#webpage",
      "url": "https://www.settleloans.in/personal-loan-settlement-coimbatore",
      "name": "Loan Settlement Company in Coimbatore: Legal Debt Relief & OTS | SettleLoans",
      "description": "Looking for a trusted loan settlement company in Coimbatore, Tirupur, or Salem? SettleLoans provides advocate-led debt relief, bank OTS negotiation, and RBI legal protection.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-loan-settlement-coimbatore#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-coimbatore#breadcrumb",
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
          "name": "Loan Settlement Company in Coimbatore",
          "item": "https://www.settleloans.in/personal-loan-settlement-coimbatore"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settlement-coimbatore#article",
      "headline": "Loan Settlement Company in Coimbatore: Advocate-Led Debt Relief in Tamil Nadu",
      "description": "A strategic manual for personal loan borrowers, textile entrepreneurs, and professionals in Coimbatore, Tirupur, and Salem to negotiate structured OTS waivers, halt recovery harassment, and rebuild credit stability under RBI guidelines.",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-coimbatore.jpg",
      "datePublished": "2026-09-01T10:00:00+05:30",
      "dateModified": "2026-09-01T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-loan-settlement-coimbatore#webpage"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-coimbatore#service",
      "name": "SettleLoans - Loan Settlement Company in Coimbatore",
      "description": "Premier advocate-led loan settlement consultancy in Coimbatore, Tirupur, and Salem providing bank OTS negotiation, civil defense against recovery harassment, and legal debt compromise services.",
      "url": "https://www.settleloans.in/personal-loan-settlement-coimbatore",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-coimbatore.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Avinashi Road, Peelamedu",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641004",
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
        "reviewCount": "870",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "R. Soundararajan, Peelamedu"
          },
          "datePublished": "2026-05-18",
          "reviewBody": "I run a workshop in Coimbatore. Export delays caused cash troubles on ₹42 Lakhs in debt. SettleLoans assigned senior banking lawyers. They sent legal notices and stopped recovery calls. They negotiated a 52% OTS waiver with bank SARB desks. I received my No Dues Certificate in 25 days.",
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
            "name": "M. Karthi, Tirupur Garments Hub"
          },
          "datePublished": "2026-06-22",
          "reviewBody": "Our garment unit in Tirupur faced high cotton prices. SettleLoans represented us in Lok Adalat. They checked bank charges and removed false fines. We secured a 56% principal waiver with full legal safety.",
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
            "name": "S. Nithya, IT Professional, Saravanampatti"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "Medical bills pushed my card and loan debt to ₹18 Lakhs. SettleLoans created a clear OTS plan. They removed all penal fees and cut my total debt to ₹7.8 Lakhs. The entire process was confidential.",
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
            "name": "K. Venkatachalam, Kurichi Industrial Estate"
          },
          "datePublished": "2026-08-04",
          "reviewBody": "My foundry unit in Kurichi faced slow client payments. SettleLoans managed talks with our banks. They stopped recovery visits to my unit and delivered verified bank sanction letters.",
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-coimbatore#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does personal loan settlement work in Coimbatore and Western Tamil Nadu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Personal loan settlement is a legal compromise under RBI rules. Distressed borrowers submit hardship files to bank SARB units. Banks waive penal fees. They approve a 40% to 60% lump-sum payment. Borrowers then receive a formal sanction letter and NDC."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents visit my textile unit, factory, or office in Coimbatore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. RBI rules and court rulings ban workplace visits. Recovery agents cannot enter factories or offices. They cannot talk to coworkers. Our lawyers issue formal notices to halt agent visits."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of loan waiver can borrowers in Coimbatore expect during a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers can secure a 40% to 60% waiver on unsecured loans. Accounts must be overdue past 90 days. Banks also waive 100% of penal interest and late fees."
          }
        },
        {
          "@type": "Question",
          "name": "How does SettleLoans defend against Section 138 NI Act and Section 25 PSSA summons in Coimbatore courts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bounced cheques or auto-debits bring legal notices. Our lawyers file court replies in Coimbatore. We prove genuine hardship. We redirect cases to Lok Adalat for quick settlement."
          }
        },
        {
          "@type": "Question",
          "name": "Is loan settlement legally valid for MSME and textile business owners in Tirupur and Salem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Unsecured MSME loans and overdrafts qualify. They fall under the RBI Compromise Framework. Owners settle debt without losing factory machines."
          }
        },
        {
          "@type": "Question",
          "name": "Why do banks in Coimbatore agree to write off 40% to 60% of an unsecured loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ind AS 109 rules force banks to set aside cash for bad loans. Civil suits take up to 6 years. Upfront cash settlement gives banks faster value than long court trials."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are required to initiate an advocate-led loan settlement in Coimbatore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You need loan statements and income proofs. Businesses need GST returns and P&L sheets. You also need bank notice copies and signed authorization."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a bank take to issue the No Dues Certificate (NDC) in Tamil Nadu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, banks must issue NDCs within 30 days. Unjustified delays cost banks ₹5,000 per day in payout."
          }
        },
        {
          "@type": "Question",
          "name": "How can I rebuild my CIBIL score after settling a loan in Coimbatore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Settled loans show a ₹0 balance in credit bureaus. You can rebuild your score to 750+ within 24 months. Use secured credit cards and pay bills on time."
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

export default function CoimbatoreLoanSettlementPage() {
  const tocItems = [
    { id: 'coimbatore-debt-landscape', title: '1. Industrial Debt Realities in Western TN' },
    { id: 'unsecured-vs-secured-protections', title: '2. Unsecured vs Secured Debt Protections' },
    { id: 'anti-harassment-tamil-nadu-laws', title: '3. Anti-Harassment & Workplace Defense' },
    { id: 'legal-defense-cheque-bounce-arbitration', title: '4. Section 138 & Arbitration Legal Defense' },
    { id: 'infographic-coimbatore-settlement-blueprint', title: '5. Coimbatore Debt Resolution Infographic' },
    { id: 'npv-recovery-math-for-banks', title: '6. Bank Accounting & NPV Recovery Math' },
    { id: 'step-by-step-coimbatore-ots-roadmap', title: '7. Step-by-Step OTS Negotiation Process' },
    { id: 'sanction-letter-audit-ndc-mandate', title: '8. Sanction Letter Audit & ₹0 NDC Mandate' },
    { id: 'cibil-rehabilitation-western-tn', title: '9. CIBIL Score & Financial Recovery' },
    { id: 'comparative-resolution-matrix', title: '10. Legal Avenues Comparative Matrix' },
    { id: 'company-resolution-section', title: '11. SettleLoans Coimbatore Legal Advocacy' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "How does personal loan settlement work in Coimbatore and Western Tamil Nadu?",
      answer: "Personal loan settlement is a legal compromise under RBI rules. Distressed borrowers submit hardship files to bank SARB units. Banks waive penal fees. They approve a 40% to 60% lump-sum payment. Borrowers then receive a formal sanction letter and NDC."
    },
    {
      question: "Can recovery agents visit my textile unit, factory, or office in Coimbatore?",
      answer: "No. RBI rules and court rulings ban workplace visits. Recovery agents cannot enter factories or offices. They cannot talk to coworkers. Our lawyers issue formal notices to halt agent visits."
    },
    {
      question: "What percentage of loan waiver can borrowers in Coimbatore expect during a One-Time Settlement (OTS)?",
      answer: "Borrowers can secure a 40% to 60% waiver on unsecured loans. Accounts must be overdue past 90 days. Banks also waive 100% of penal interest and late fees."
    },
    {
      question: "How does SettleLoans defend against Section 138 NI Act and Section 25 PSSA summons in Coimbatore courts?",
      answer: "Bounced cheques or auto-debits bring legal notices. Our lawyers file court replies in Coimbatore. We prove genuine hardship. We redirect cases to Lok Adalat for quick settlement."
    },
    {
      question: "Is loan settlement legally valid for MSME and textile business owners in Tirupur and Salem?",
      answer: "Yes. Unsecured MSME loans and overdrafts qualify. They fall under the RBI Compromise Framework. Owners settle debt without losing factory machines."
    },
    {
      question: "Why do banks in Coimbatore agree to write off 40% to 60% of an unsecured loan?",
      answer: "Ind AS 109 rules force banks to set aside cash for bad loans. Civil suits take up to 6 years. Upfront cash settlement gives banks faster value than long court trials."
    },
    {
      question: "What documents are required to initiate an advocate-led loan settlement in Coimbatore?",
      answer: "You need loan statements and income proofs. Businesses need GST returns and P&L sheets. You also need bank notice copies and signed authorization."
    },
    {
      question: "How long does a bank take to issue the No Dues Certificate (NDC) in Tamil Nadu?",
      answer: "Under RBI Circular RBI/2023-24/60, banks must issue NDCs within 30 days. Unjustified delays cost banks ₹5,000 per day in compensation."
    },
    {
      question: "How can I rebuild my CIBIL score after settling a loan in Coimbatore?",
      answer: "Settled loans show a ₹0 balance in credit bureaus. You can rebuild your score to 750+ within 24 months. Use secured credit cards and pay bills on time."
    }
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

      <style
        dangerouslySetInnerHTML={{
          __html: `
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
      `,
        }}
      />

      {/* 1. Charcoal Navy Hero Section */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-blue-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Coimbatore &amp; Western Tamil Nadu Debt Relief • Personal &amp; MSME Loans</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Personal Loan Settlement in Coimbatore: Legal OTS Guide</h1>

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
              <span>RBI Compromise Settlement Framework Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Loan Settlement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request Confidential Debt Audit
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column (Sticky Table of Contents + Executive Crux) */}
          <aside className="w-full sticky top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Coimbatore Debt Case Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Unsecured loans hold no charge over factory machines or homes. This applies across Coimbatore, Tirupur, and Salem. Under RBI rules, borrowers can stop agent harassment. They can defend legal notices and secure 40% to 60% OTS waivers.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Loan Settlement in Coimbatore &amp; Kongu Region</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Collateral Risk:</strong> Unsecured loans carry no claim on factory machinery or homes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Workplace Legal Shield:</strong> RBI rules ban agent visits to factories and offices.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Court Notice Defense:</strong> Legal replies convert Section 138 and Section 25 notices into settlements.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>40% to 60% Haircuts:</strong> Banks write off debt to avoid long court suits.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory ₹0 NDC:</strong> Banks must deliver closure letters within 30 days under RBI rules.</span>
                </li>
              </ul>
            </div>
            
            {/* Section 1: Industrial Debt Realities in Western TN */}
            <section id="coimbatore-debt-landscape" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Factory className="w-4 h-4" />
                <span>1. Industrial Debt Dynamics in Western Tamil Nadu</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">The Economic Reality of Debt in Coimbatore, Tirupur &amp; Salem</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Coimbatore is a key industrial hub in Tamil Nadu. It links Tirupur textile mills and Salem factories. Many residents run foundries or work in textile units. Others work in IT along Avinashi Road.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Yarn price swings and slow client payments cause cash stress. Borrowers often struggle to pay monthly EMIs. Debts can quickly pile up across multiple banks.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Hiring a debt settlement lawyer gives you a legal shield. You do not have to face agent harassment. We use RBI rules to win 40% to 60% waivers from bank committees.
              </p>
            </section>

            {/* Section 2: Unsecured vs Secured Debt Protections */}
            <section id="unsecured-vs-secured-protections" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>2. Statutory Legal Classifications</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Unsecured vs Secured Debt in Coimbatore</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Secured loans fall under the SARFAESI Act, 2002. Lenders can auction mortgaged assets. In contrast, unsecured loans carry no claim on machines or homes. Lenders cannot seize assets without a court trial.
              </p>

              {/* Distinction Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Debt Type.</th>
                      <th>Security.</th>
                      <th>Governing Law.</th>
                      <th>Lender Power.</th>
                      <th>Settlement Range.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Personal Loans.</td>
                      <td>None (No asset pledged).</td>
                      <td>Indian Contract Act, 1872 &amp. CPC, 1908.</td>
                      <td><strong>Low</strong> (Needs civil court suit).</td>
                      <td><strong className="text-emerald-700">40% – 60% Principal Waiver</strong></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Credit Card Debt.</td>
                      <td>None (Unsecured line).</td>
                      <td>Indian Contract Act, 1872 &amp. RBI rules.</td>
                      <td><strong>Low</strong> (Civil suit only).</td>
                      <td><strong className="text-emerald-700">50% – 70% Total Waiver</strong></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">MSME Business Loans.</td>
                      <td>None (Clean business line).</td>
                      <td>RBI Compromise Framework &amp. MSME Act.</td>
                      <td><strong>Low</strong> (Civil suit only).</td>
                      <td><strong className="text-emerald-700">40% – 55% Principal Waiver</strong></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Secured LAP / Mortgage.</td>
                      <td>Factory sheds, commercial or home property.</td>
                      <td>SARFAESI Act, 2002 (Sec 13(2), Sec 13(4)).</td>
                      <td><strong>High</strong> (Asset auction).</td>
                      <td>15% – 25% (Needs asset sale).</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under Section 60(1)(c) CPC, livelihood tools cannot be seized in court cases. This protects workshop tools and textile looms across Western Tamil Nadu.
              </p>
            </section>

            {/* Section 3: Anti-Harassment & Workplace Defense */}
            <section id="anti-harassment-tamil-nadu-laws" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>3. Anti-Harassment Legal Shield</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Halting Recovery Harassment in Coimbatore</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Recovery agents often use harsh methods. They may visit factories in Peelamedu or Kurichi. Such actions violate RBI rules and court orders:
              </p>
              <ul className="space-y-3 text-slate-700 my-4 text-sm md:text-base">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Workplace Visits Prohibited:</strong> Agents cannot enter factories or offices without prior consent.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Third-Party Contact:</strong> Calling relatives or coworkers about your debt is illegal.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Strict Calling Hours:</strong> Agents can call only between 08:00 AM and 07:00 PM.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Certification:</strong> Agents must carry bank ID cards and IIBF certificates.</span>
                </li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Our lawyers send formal cease-and-desist notices to bank Nodal Officers. This stops workplace visits immediately.
              </p>
            </section>

            {/* Section 4: Legal Defense Against Cheque Bounce & Arbitration */}
            <section id="legal-defense-cheque-bounce-arbitration" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>4. Judicial Summons &amp; Arbitration Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Defending Sec 138 &amp; 25 PSSA in Coimbatore</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Banks send notices when cheques or auto-debits bounce. They cite Section 138 NI Act or Section 25 PSSA. Our advocates file replies proving genuine hardship. We guide disputes toward out-of-court settlements.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                If a bank starts arbitration in distant cities, we challenge it. Under Section 12 of the Arbitration Act, we cite the <em>Perkins Eastman</em> ruling. We bring disputes back to local Lok Adalats or bank desks.
              </p>
            </section>

            {/* Section 5: High-Impact Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-coimbatore-settlement-blueprint" className="scroll-mt-24 mb-12">
              <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-6 text-slate-800">
                <div className="bg-[#0A2540] text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-[#1F5EFF]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] flex items-center justify-center text-white text-xs shadow-sm">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block">
                        Coimbatore &amp; Western TN Resolution Blueprint
                      </span>
                      <h3 className="text-sm md:text-base font-black text-white leading-tight">
                        5-Step Loan Settlement &amp; Debt Compromise Framework
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/personal-loan-settlement-coimbatore.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1F5EFF] hover:text-blue-300 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span className="hidden sm:inline">Open Full Size</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 16:9 Landscape Infographic Image */}
                <div className="p-3 md:p-4 bg-slate-50">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img
                      src="/images/infographics/personal-loan-settlement-coimbatore.jpg"
                      alt="Loan Settlement Process Framework in Coimbatore, Tirupur, and Salem"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Protocol:</strong> Protect assets. Stop recovery visits. Reply to court notices. Secure 40% to 60% OTS waivers under RBI rules.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Consult Coimbatore Debt Advocate &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Bank Accounting & NPV Recovery Math */}
            <section id="npv-recovery-math-for-banks" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>5. Bank Accounting &amp; Valuation Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">NPV Valuation &amp; Bank Math in Coimbatore</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the RBI Compromise Framework (2023), banks evaluate offers using Net Present Value (NPV). When a loan passes 90 days overdue, Ind AS 109 forces banks to set aside cash reserves.
              </p>

              {/* Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here, C_t is estimated recovery and r is discount rate. Deductions cover court fees and blocked capital.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Civil suits in Coimbatore take 3 to 6 years. They also create high legal costs. A fast cash settlement of 40% to 55% gives the bank higher Net Present Value than long litigation.
              </p>
            </section>

            {/* Section 7: Step-by-Step OTS Negotiation Process */}
            <section id="step-by-step-coimbatore-ots-roadmap" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>6. Step-by-Step OTS Negotiation Process</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Step-by-Step OTS Protocol in Coimbatore</h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Settling an unsecured loan follows five clear stages:
              </p>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">1</span>
                    Hardship Dossier Compilation
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    We gather financial records, GST returns. And loss accounts. These prove genuine business hardship.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">2</span>
                    e-NACH Revocation &amp; Legal Shield Activation
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    We stop NACH auto-debits under NPCI rules to stop bounce fees. We also send formal legal notices to lenders.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">3</span>
                    Submitting Settlement Proposal to Stressed Asset Desks
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    We submit settlement files directly to Zonal SARB desks.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">4</span>
                    Principal Haircut Negotiation &amp; 100% Fee Waiver
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    We waive 100% of penal fees under RBI fair lending codes. We negotiate a 40% to 60% principal cut.
                  </p>
                </div>

                {/* Step 5 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">5</span>
                    Sanction Letter Forensic Audit &amp; ₹0 NDC Delivery
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    We check the bank&apos;s stamped sanction letter before payment. We ensure NDC delivery within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Forensic Audit of Bank Sanction Letters & ₹0 NDC Mandate */}
            <section id="sanction-letter-audit-ndc-mandate" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>7. Settlement Letter Verification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Sanction Letter Audit &amp; NDC in Coimbatore</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Some recovery agents issue fake settlement letters to take cash. SettleLoans audits every sanction letter. We confirm official bank letterheads, authorized signatures. And complete waiver clauses.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI Circular RBI/2023-24/60, lenders must issue the No Dues Certificate within 30 days. If they delay, they must pay ₹5,000 per day to the borrower.
              </p>
            </section>

            {/* Section 9: CIBIL Rehabilitation & Commercial Credit Recovery */}
            <section id="cibil-rehabilitation-western-tn" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>8. Credit Score Rehabilitation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">CIBIL Rehabilitation in Coimbatore</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                After settlement, the bank marks the account as &apos;Settled&apos. with ₹0 dues across CIBIL, Experian, and CRIF. This stops interest adding and ends legal risks.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                You can rebuild your CIBIL score to 750+ within 18 to 24 months. Use an FD-backed credit card, keep credit use under 30%. And pay balances on time.
              </p>
            </section>

            {/* Section 10: Legal Avenues Comparative Matrix Table */}
            <section id="comparative-resolution-matrix" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>9. Resolution Strategy Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Debt Resolution Matrix in Coimbatore</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Compare legal options for resolving overdue loans in Coimbatore:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Resolution Route.</th>
                      <th>Legal Tool.</th>
                      <th>Waiver Range.</th>
                      <th>Impact.</th>
                      <th>Legal Status.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Advocate-Led Bank OTS.</td>
                      <td>settlement under RBI rules.</td>
                      <td><strong className="text-emerald-700">40% – 60% Principal Waiver</strong></td>
                      <td><strong>Zero</strong> (Handled by lawyers).</td>
                      <td>Binding settlement with ₹0 NDC.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">National Lok Adalat.</td>
                      <td>Judicial settlement before judge panel.</td>
                      <td><strong className="text-emerald-700">45% – 60% Debt Haircut</strong></td>
                      <td>Minimal (Single hearing).</td>
                      <td><strong>Civil Court Decree</strong> (Final order).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Arbitration Defense.</td>
                      <td>Challenge to one-sided arbitrator.</td>
                      <td>Converts to OTS.</td>
                      <td>Low (Handled via legal replies).</td>
                      <td>Court stay or transfer.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Sec 138 / 25 PSSA Defense.</td>
                      <td>Magistrate Court defense on bounced auto-debits.</td>
                      <td><strong>35% – 50% Debt Haircut</strong></td>
                      <td>Low (Advocate appearance).</td>
                      <td>Legal compoundable settlement.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Representation */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>10. Specialized Coimbatore Debt Advocacy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Why Borrowers in Coimbatore &amp; Kongu Region Trust SettleLoans</h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                SettleLoans gives you legal debt resolution across Coimbatore, Tirupur, and Salem. We stop agent harassment. We defend court summons. We protect assets under CPC Section 60(1)(c). We negotiate 40% to 60% debt waivers under RBI rules.
              </p>

              {/* Placement of Reusable CompanySection */}
              <div className="my-8">
                <CompanySection />
              </div>
            </section>

            {/* Section 12: Frequently Asked Questions (FAQ Accordion) */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>11. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">FAQs: Coimbatore &amp; Tamil Nadu</h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-slate-300 open:border-[#1F5EFF]/30 open:shadow-md"
                  >
                    <summary className="w-full p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-4">
                      <span className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-all duration-300">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </summary>
                    <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Regulatory References & Official Sources Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                Official Statutory &amp; Regulatory References
              </h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank of India (RBI):</strong> Master Direction on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>RBI Master Circular:</strong> Fair Practices Code for Lenders, Recovery Agent Conduct &amp. Penal Charge Caps
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://hcmadras.tn.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Madras High Court:</strong> Judicial Precedents on Fair Debt Recovery, Prohibition of Third-Party Coercion &amp. Due Process
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank - Integrated Ombudsman Scheme:</strong> Grievance Redressal Mechanism for Unlawful Recovery harassment &amp. NDC Non-Delivery
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987. Pre-Litigation Lok Adalat settlement
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Guides & Resources Strip (10 Topic Badges) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1F5EFF]" />
                Explore Related Personal &amp; Business Debt Guides
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/unsecured-business-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Unsecured Business Loan Settlement
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Settlement Percentage Guide
                </Link>
                <Link
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Recovery Agent Workplace Rules
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Debt Resolution
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Arbitration Notice Legal Reply
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Asset Protection on Unsecured Loans
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/case-study-25-lakh-multiple-bank-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Multiple Bank Debt Resolution Case Study
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column (Sidebar Cards) */}
          <aside className="w-full sticky top-24 space-y-6">
            {/* Card 1: Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Link href="/authors/ashish-jhangra">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                    AJ
                  </div>
                </Link>
                <div>
                  <div className="font-bold text-slate-900 text-base leading-tight">
                    <Link
                      href="/authors/ashish-jhangra"
                      className="hover:text-[#1F5EFF] transition-colors"
                    >
                      Ashish Jhangra
                    </Link>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Lead Banking Legal &amp. Debt Settlement Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has guided over 1,500 clients in Tamil Nadu. He leads debt settlement and NPA legal defense under RBI rules.
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-[#1F5EFF] hover:underline flex items-center gap-1"
                >
                  <span>View Profile</span>
                  <span>&rarr;</span>
                </Link>
                <a
                  href="https://www.linkedin.com/company/settleloans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-[#1F5EFF]"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Card 2: Emergency Advocate Assistance CTA */}
            <div className="bg-gradient-to-br from-[#1F5EFF] to-blue-700 text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 text-blue-100 text-xs font-bold uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Coimbatore Debt Advisory</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing Loan Default in Coimbatore or Tirupur?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop recovery calls to your home or office. Our banking lawyers protect your rights. We defend court notices. We negotiate 40% to 60% OTS settlements with bank desks.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to a Senior Debt Advocate
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Western TN Borrowers Trust Us</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Commercial Privacy:</strong> Signed agreements protect your privacy in Kongu region.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Workplace harassment:</strong> We send legal notices to stop visits under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Access:</strong> We bypass recovery agents and negotiate directly with bank SARB desks.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Sanction Verification:</strong> Every settlement is legally audited on bank letterhead before payment.
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
