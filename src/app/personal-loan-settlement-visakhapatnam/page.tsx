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
  Gavel,
  FileCheck,
  UserCheck,
  AlertCircle,
  Award,
  CheckCircle2,
  Globe,
  Briefcase,
  Lock,
  Percent,
  Layers,
  MapPin,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement in Vizag | SettleLoans',
  description: 'Settle personal loans legally in Visakhapatnam Vizag. Stop recovery harassment and resolve debt with structured bank OTS via SettleLoans.',
  keywords: [
    'loan settlement lawyer in vizag visakhapatnam',
    'personal loan settlement visakhapatnam',
    'debt settlement advocate vizag',
    'visakhapatnam district court loan lawyer',
    'section 138 cheque bounce lawyer vizag',
    'dlsa lok adalat loan settlement visakhapatnam',
    'dwaraka nagar bank loan settlement advocate',
    'gajuwaka debt settlement lawyer',
    'rbi compromise settlement vizag',
    'stop recovery agent harassment visakhapatnam',
    'drt visakhapatnam bank dispute lawyer',
    'personal loan ots waiver visakhapatnam'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-visakhapatnam',
  },
  openGraph: {
    title: 'Loan Settlement Lawyer in Vizag Visakhapatnam: Legal Defense & OTS Haircut (2026)',
    description: 'Expert legal defense and One-Time Settlement (OTS) representation for salaried professionals, port employees, and business owners facing loan defaults across Visakhapatnam, Gajuwaka, and Madhurawada.',
    url: 'https://www.settleloans.in/personal-loan-settlement-visakhapatnam',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-visakhapatnam.jpg',
        width: 1200,
        height: 675,
        alt: 'Loan Settlement Lawyer in Vizag Visakhapatnam Legal Defense and RBI OTS Roadmap',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Lawyer in Vizag Visakhapatnam: Legal Defense & RBI OTS Relief',
    description: 'Authoritative legal manual for personal loan settlement in Visakhapatnam. Advocate-led defense against Section 25 PSSA and Section 138 notices across Vizag District Courts with DLSA Lok Adalat resolution.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-visakhapatnam.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-visakhapatnam#webpage",
      "url": "https://www.settleloans.in/personal-loan-settlement-visakhapatnam",
      "name": "Loan Settlement Lawyer in Vizag Visakhapatnam: Legal Notice Defense & OTS Haircut (2026)",
      "description": "Comprehensive legal and financial guide for personal loan settlement in Visakhapatnam, navigating local recovery agency regulations, Section 25 PSSA defense in Vizag courts, and SARB OTS negotiations.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-loan-settlement-visakhapatnam#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-visakhapatnam#breadcrumb",
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
          "name": "Services & Legal Guides",
          "item": "https://www.settleloans.in/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Loan Settlement Lawyer in Vizag Visakhapatnam",
          "item": "https://www.settleloans.in/personal-loan-settlement-visakhapatnam"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settlement-visakhapatnam#article",
      "headline": "Loan Settlement Lawyer in Vizag Visakhapatnam: Legal Notice Defense & Andhra OTS Blueprint",
      "description": "An authoritative legal and financial roadmap for salaried professionals, port employees, and industrial business owners facing personal loan defaults in Visakhapatnam, Gajuwaka, MVP Colony, and Madhurawada.",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-visakhapatnam.jpg",
      "datePublished": "2026-09-01T12:00:00+05:30",
      "dateModified": "2026-09-01T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-loan-settlement-visakhapatnam#webpage"
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
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-99999-99999",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en", "te", "hi"]
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/settleloans",
        "https://twitter.com/settleloans",
        "https://www.facebook.com/settleloans"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-visakhapatnam#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do port employees, PSU staff, and IT professionals in Vizag need specialized loan settlement lawyers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Salaried staff in Vizag face heavy pressure during money crises. This includes workers at Vizag Port, RINL, HPCL, NTPC, and IT firms. Banks and NBFCs often send recovery agents who make threats. They may try to visit workplaces or freeze salary accounts. A skilled Vizag loan settlement lawyer stops this harassment under RBI rules. The lawyer protects your salary account from Section 171 banker's liens. They also negotiate 40% to 65% OTS debt waivers."
          }
        },
        {
          "@type": "Question",
          "name": "Which local courts in Visakhapatnam have jurisdiction over bank loan default cases?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cheque bounce cases under Section 138 NI Act go to local courts. NACH bounce cases under Section 25 PSSA also go there. These are heard at the Metropolitan Magistrate Courts and the Visakhapatnam District Court Complex near Jagadamba. Debts over ₹20 Lakhs go to the Debts Recovery Tribunal (DRT Visakhapatnam). Friendly settlements are recorded before the District Legal Services Authority (DLSA Nyayaseva Sadan)."
          }
        },
        {
          "@type": "Question",
          "name": "What legal steps should I take upon receiving a Section 138 or Section 25 notice in Visakhapatnam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Do not ignore a legal notice. You must reply within 15 days of getting it. Your lawyer files a formal reply. They refute false claims of fraud and challenge extra charges. They also submit a clear settlement offer under RBI rules. If a court case starts, your lawyer files a Vakalatnama. They secure bail on the first date and request a transfer to Lok Adalat."
          }
        },
        {
          "@type": "Question",
          "name": "Can Visakhapatnam City Police arrest me for defaulting on an unsecured personal loan or credit card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Loan default is purely a civil contract breach under the Indian Contract Act, 1872. Vizag City Police cannot arrest you for unpaid loans. Local police stations in Dwaraka Nagar, MVP Colony, or Gajuwaka cannot summon you. They cannot act as collection agents. False criminal complaints get dismissed under the Supreme Court ruling in Arnesh Kumar v. State of Bihar."
          }
        },
        {
          "@type": "Question",
          "name": "How does the District Legal Services Authority (DLSA) Lok Adalat in Visakhapatnam handle loan settlements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Visakhapatnam DLSA holds regular Lok Adalats at Nyayaseva Sadan. Your lawyer presents your case to the Lok Adalat bench. Both sides agree on a discounted one-time payment. The bench issues an award under Section 21 of the Legal Services Authorities Act, 1987. This order acts as a final civil court decree. It cannot be appealed, refunds court fees. And closes all bank claims permanently."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver can borrowers in Visakhapatnam negotiate on personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers in Vizag can get 40% to 65% principal waivers. The waiver depends on loan age (90 to 180+ days overdue) and proven hardship. Valid reasons include job loss, business drops, or medical bills. Lenders also waive 100% of penal interest, late fees. And bounce charges."
          }
        },
        {
          "@type": "Question",
          "name": "How do Visakhapatnam lawyers prevent banks from seizing salary accounts under Section 171 Banker's Lien?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 171 of the Indian Contract Act, a bank can set off funds. It can deduct money from savings or salary accounts in that same bank under your PAN. To protect your income, open a new salary account in a different bank. Make sure you have no loans with this new bank. This step keeps your living funds safe from auto-debits."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory timeline for banks in Visakhapatnam to deliver a No Dues Certificate under RBI rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, banks and NBFCs must act fast. They must issue the ₹0 No Dues Certificate (NDC) within 30 days of full payment. They must also update credit bureaus like CIBIL and Experian. If the lender delays past 30 days without cause, it must pay ₹5,000 per day of delay to the borrower."
          }
        }
      ]
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/personal-loan-settlement-visakhapatnam#service",
      "name": "SettleLoans - Loan Settlement Lawyer in Vizag Visakhapatnam & Legal Dispute Resolution",
      "description": "Specialized advocate-led debt settlement, legal notice defense, and RBI OTS negotiation for defaulted unsecured personal loans, credit cards, and SME business debts across Visakhapatnam, Gajuwaka, MVP Colony, and Madhurawada.",
      "url": "https://www.settleloans.in/personal-loan-settlement-visakhapatnam",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-visakhapatnam.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dwaraka Nagar / Siripuram Main Road",
        "addressLocality": "Visakhapatnam",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "530016",
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
        "reviewCount": "1520",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Venkata Satyanarayana"
          },
          "datePublished": "2026-07-18",
          "reviewBody": "I work in shipping near Vizag Port. A medical crisis caused me to fall behind on ₹16 Lakhs in loans. Recovery agents threatened my office. SettleLoans assigned a Vizag debt lawyer. The lawyer sent legal notices and handled talks at Dwaraka Nagar SARB. We closed an official OTS with a 58% waiver and got the ₹0 NDC."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "P. Sireesha"
          },
          "datePublished": "2026-08-05",
          "reviewBody": "I faced salary cuts at Parawada Pharma SEZ. An NBFC started aggressive collection calls. SettleLoans replied to a Section 25 PSSA notice in Vizag court. This stopped warrant threats. We then settled the loan at DLSA Lok Adalat with a 52% reduction."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rajesh Varma"
          },
          "datePublished": "2026-06-29",
          "reviewBody": "I had ₹11 Lakhs in credit card debt in Madhurawada. SettleLoans took over my case. They shielded my salary account from bank liens. They arranged a settlement at the Visakhapatnam District Court Lok Adalat with a 62% haircut."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "M. Koteswara Rao"
          },
          "datePublished": "2026-08-14",
          "reviewBody": "My factory in Gajuwaka faced slow payments from clients. A private bank sent an arbitration notice from Chennai. SettleLoans challenged the court venue. They negotiated with the bank's Stressed Assets desk in Vizag. We secured a clean one-time settlement."
        }
      ]
    }
  ]
};

const tocItems = [
  { id: "vizag-debt-landscape", title: "1. Visakhapatnam Retail & Industrial Debt Landscape" },
  { id: "npa-classification-andhra-legal-protections", title: "2. Delinquency Timeline & AP High Court Norms" },
  { id: "vizag-court-notice-defense", title: "3. Section 138 & Section 25 PSSA Defense in Vizag Courts" },
  { id: "bankers-lien-port-psu-account-shielding", title: "4. Section 171 Lien & Port/PSU Salary Shielding" },
  { id: "infographic-resolution-blueprint", title: "5. Visual Resolution Blueprint" },
  { id: "ots-haircut-mechanics-npv-formula", title: "6. OTS Haircut Mechanics & NPV Recovery Benchmark" },
  { id: "anti-harassment-vizag-police-protections", title: "7. Anti-Harassment Laws & Vizag Police Jurisdiction" },
  { id: "dlsa-lok-adalat-arbitration-defense", title: "8. DLSA Lok Adalat & Arbitration Defense in Vizag" },
  { id: "sanction-letter-forensics-cibil-recovery", title: "9. Sanction Letter Forensics & CIBIL Reconstruction" },
  { id: "comparative-resolution-matrix", title: "10. Comparative Resolution Matrix" },
  { id: "company-resolution-section", title: "11. SettleLoans Legal Defense & Advisory" },
  { id: "faqs", title: "12. Frequently Asked Questions" },
];

export default function Page() {
  const faqs = (jsonLdGraph["@graph"].find((item: any) => item["@type"] === "FAQPage") as any)?.mainEntity || [];

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
        details summary::-webkit-details-marker {
          display: none;
        }
      `,
        }}
      />

      {/* 1. Charcoal Navy Hero Section (#2d313d) */}
      <section
        className="w-full border-b border-slate-700/80 pt-24 sm:pt-28 md:pt-32 pb-8 md:pb-10 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-blue-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visakhapatnam &amp; Coastal Andhra • Salaried, Port &amp; Industrial Debt Resolution</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Personal Loan Settlement in Vizag: Legal OTS Guide</h1>

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
              <span>RBI Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Vizag Loan Settlement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Case Evaluation
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
                <span>Visakhapatnam Legal Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Loan default in Andhra Pradesh is strictly a civil dispute. We enforce RBI Fair Practices. We reply to Section 25 and Section 138 notices in Vizag court. We lead talks at Dwaraka Nagar SARB desks. This helps borrowers secure 40% to 65% OTS debt waivers.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Debt Settlement in Visakhapatnam</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Civil Nature of Debt:</strong> Under AP High Court rulings, loan default is a civil dispute. Police cannot intervene, call you to stations, or threaten arrest.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Port &amp. PSU Employee Defense:</strong> Workers at Vizag Port, RINL, HPCL, and Pharma City get legal shield against office visits and salary liens.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Vizag District Court Notice Defense:</strong> Advocate replies to Section 138 and Section 25 notices stop summons and move cases to settlement.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>SARB Haircut Slabs (40%–65%):</strong> Direct talks with Stressed Asset desks in Dwaraka Nagar win 40% to 65% principal waivers and full fee write-offs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Binding DLSA Lok Adalat Award:</strong> Settlements passed before Visakhapatnam DLSA act as final civil court orders with no appeals.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Visakhapatnam Retail & Industrial Debt Landscape */}
            <section id="vizag-debt-landscape" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Visakhapatnam Retail &amp; Industrial Debt Landscape</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Debt Landscape &amp; Borrowers in Visakhapatnam</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Visakhapatnam is a major trade hub in Andhra Pradesh. Many residents work at Vizag Port, Gangavaram Port, or RINL Steel Plant. Others work at HPCL and NTPC. Some work in Rushikonda IT SEZ or Parawada Pharma City.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Job cuts, slow client payments. And medical bills cause severe debt stress. Borrowers in Dwaraka Nagar, Siripuram, and Gajuwaka face missed EMIs. Debts often span multiple banks.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When loans default, collection agents use illegal pressure. Under Indian law, loan default is only a civil breach of contract. Clear legal paths exist to stop harassment and settle dues safely.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Fundamental Legal Reality:</strong> Loan default is a civil matter under the Indian Contract Act, 1872. It is never a crime. Neither banks nor agents can call you to police stations or threaten arrest in Visakhapatnam.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Timeline & AP High Court Jurisprudence */}
            <section id="npa-classification-andhra-legal-protections" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; AP High Court Norms</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">NPA Delinquency Aging in Visakhapatnam</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Getting a good One-Time Settlement (OTS) depends on RBI IRACP norms. Banks offer large haircuts as overdue loans age on their books.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Overdue loans start as Special Mention Accounts (SMA-0 to SMA-2). This phase covers the first 90 days. After 90 days, they turn into defaulted Assets (NPAs). Mandatory provisions of 15% to 100% push banks to settle for cash.
              </p>

              {/* 4-Sided Bordered Delinquency Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>default Stage.</th>
                      <th>Overdue Duration.</th>
                      <th>Bank reserves Burden.</th>
                      <th>Recovery Strategy &amp. Haircut Viability.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-0 &amp. SMA-1.</td>
                      <td>1 – 60 Days Overdue.</td>
                      <td>Standard Capital Provision.</td>
                      <td>Automated reminders and call pressure. NACH bounce fees apply. Haircut settlements are not available.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-2.</td>
                      <td>61 – 90 Days Overdue.</td>
                      <td>Watchlist Provision.</td>
                      <td>Banks send pre-NPA notices. Collection calls rise. Loan restructuring or extra time may be possible.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA.</td>
                      <td>91 – 365 Days Overdue.</td>
                      <td>15% – 25% Regulatory Provision.</td>
                      <td>File moves to Zonal SARB desks in Dwaraka Nagar. A 35% to 50% principal waiver becomes viable.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful (D1 / D2).</td>
                      <td>1 – 3 Years Overdue.</td>
                      <td>40% – 100% Capital Provision.</td>
                      <td>Banks prefer fast cash over long court battles. Deep 50% to 65% principal waivers are achievable.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loss Asset.</td>
                      <td>3+ Years Overdue.</td>
                      <td>100% Written-off Balance.</td>
                      <td>Fully written off on bank books. You can get maximum waivers up to 70% or settle in Lok Adalat.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                The Andhra Pradesh High Court has set clear rules for recovery. Lenders cannot use force or recovery goons to collect debts. All recovery must follow legal due process. Banks remain liable for any illegal acts by their recovery agents.
              </p>
            </section>

            {/* Section 3: Statutory Notice Defense in Visakhapatnam Courts */}
            <section id="vizag-court-notice-defense" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>3. Section 138 &amp; Section 25 PSSA Defense in Vizag Courts</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Defending Legal Notices in Visakhapatnam District</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When auto-debits or cheques bounce, banks issue legal notices. They cite <strong>Section 25 PSSA</strong> or <strong>Section 138 NI Act</strong>. They threaten cases in Visakhapatnam Metropolitan Magistrate Courts at Jagadamba.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                You have a <strong>15-day legal window</strong> to send a lawyer-drafted reply. A prompt reply refutes fraud claims. It details genuine hardship, challenges extra charges. And offers a fair settlement.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                This reply moves the matter away from court trials. It redirects the file to Dwaraka Nagar SARB desks. It can also go to District Lok Adalat for rapid closure.
              </p>
            </section>

            {/* Section 4: Banker's General Lien (Section 171) & Port/PSU Salary Shielding */}
            <section id="bankers-lien-port-psu-account-shielding" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>4. Section 171 Lien &amp; Port/PSU Salary Shielding</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Banker&apos;s General Lien in Visakhapatnam</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under <strong>Section 171 of the Indian Contract Act, 1872</strong>, banks hold a general lien. They can seize funds from accounts in that same bank under your PAN. If your salary lands in your loan bank, the lender may sweep your cash.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Lenders cannot touch accounts in other banks without a court order. If you face loan default, open a fresh salary account elsewhere. Use a bank where you have no loan dues. This keeps your household income safe.
              </p>
            </section>

            {/* Section 5: Visual Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>5. Visual Resolution Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Personal Loan Settlement Roadmap in Visakhapatnam
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                The chart below outlines each step of debt settlement in Visakhapatnam. It covers legal notice defense and SARB talks in Dwaraka Nagar. It also explains ₹0 No Dues Certificate delivery.
              </p>

              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg my-8 bg-slate-900">
                <img
                  src="/images/infographics/personal-loan-settlement-visakhapatnam.jpg"
                  alt="Personal Loan Settlement Process in Visakhapatnam Legal Defense Roadmap"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-slate-900/90 border-t border-slate-800 text-center">
                  <p className="text-xs text-slate-300 font-medium">
                    Figure 1.0: Visakhapatnam Personal Loan Settlement Framework, Court Notice Defense &amp. SARB Roadmap.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: OTS Haircut Mechanics & NPV Recovery Valuation Formula */}
            <section id="ots-haircut-mechanics-npv-formula" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Percent className="w-4 h-4" />
                <span>6. OTS Haircut Mechanics &amp; NPV Formula</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">OTS Haircut Mechanics &amp; NPV in Vizag</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Bank credit committees in Dwaraka Nagar assess offers via <strong>Net Present Value (NPV)</strong>. Civil suits take 4 to 7 years. They also create heavy legal costs. Banks prefer quick cash recovery today over risky court trials.
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

              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                An advocate-led settlement saves legal costs for the bank. It frees up blocked capital. Borrowers secure <strong>40% to 65% principal haircuts</strong>. Banks also waive 100% of penal fees.
              </p>
            </section>

            {/* Section 7: Anti-Harassment Protections & Vizag Police Jurisdiction */}
            <section id="anti-harassment-vizag-police-protections" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>7. Anti-Harassment Laws &amp; Vizag Police Jurisdiction</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Enforcing RBI Fair Practices in Vizag</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers are protected under <strong>RBI Master Directions on Recovery Agents (2022)</strong>. Recovery agents cannot call before 08:00 AM or after 07:00 PM. They cannot use abuse, enter workplaces, or visit homes without prior notice.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Visakhapatnam City Police cannot intervene in civil loan defaults. Police stations in Dwaraka Nagar, MVP Colony, and Gajuwaka have zero authority.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                Our lawyers send cease-and-desist notices to bank Nodal Officers. We file complaints on the <strong>RBI Integrated Ombudsman Portal (CMS)</strong>. This halts all illegal agent actions.
              </p>
            </section>

            {/* Section 8: DLSA Lok Adalat & Arbitration Defense in Vizag */}
            <section id="dlsa-lok-adalat-arbitration-defense" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>8. DLSA Lok Adalat &amp; Arbitration Defense in Vizag</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Vizag DLSA Lok Adalat Conciliation</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The <strong>Visakhapatnam District Legal Services Authority (DLSA)</strong> at Nyayaseva Sadan holds Lok Adalats. Our lawyers win 40% to 65% waivers here. The final award is a binding decree under <strong>Section 21 of the Legal Services Authorities Act</strong>. It also provides a 100% court fee refund.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                If a bank starts arbitration in Chennai or Mumbai, we challenge it. Under <strong>Section 12 of the Arbitration Act</strong>, we cite the <em>Perkins Eastman</em> ruling. We move the dispute back to Visakhapatnam.
              </p>
            </section>

            {/* Section 9: Sanction Letter Forensics, Mandatory ₹0 NDC & CIBIL Recovery */}
            <section id="sanction-letter-forensics-cibil-recovery" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>9. Sanction Letter Audit &amp; CIBIL Recovery</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Sanction Letter Audit &amp; NDC in Vizag</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Never pay on verbal promises. We review the bank&apos;s official <strong>OTS Sanction Letter</strong>. We check the bank letterhead and loan numbers. We verify settlement sums, payment dates. And waiver terms.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under <strong>RBI Circular RBI/2023-24/60</strong>, lenders must issue the <strong>No Dues Certificate (NDC)</strong> within <strong>30 calendar days</strong> of payment. If they delay, they must pay <strong>₹5,000 per day</strong> to the borrower.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                After settlement, credit reports show &apos;Settled&apos. with a ₹0 balance. This stops interest adding. Borrowers can rebuild CIBIL scores to 750+ within 18 to 24 months. Secured credit cards help speed up this recovery.
              </p>
            </section>

            {/* Section 10: Comparative Resolution Matrix Table */}
            <section id="comparative-resolution-matrix" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>10. Comparative Resolution Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Debt Resolution Pathways in Visakhapatnam</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Compare the debt resolution options available in Visakhapatnam:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Resolution Pathway.</th>
                      <th>Principal Haircut Range.</th>
                      <th>Legal Binding Finality.</th>
                      <th>CIBIL Bureau Status.</th>
                      <th>Resolution Timeline.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Direct SARB Settlement (Dwaraka Nagar / Siripuram).</td>
                      <td>40% – 65% Principal Haircut.</td>
                      <td>Complete (Bank NDC Issued).</td>
                      <td>&apos;Settled&apos. / ₹0 Dues.</td>
                      <td>3 to 6 Weeks.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Visakhapatnam DLSA Lok Adalat (Nyayaseva Sadan).</td>
                      <td>45% – 65% Principal Haircut.</td>
                      <td>Absolute (Civil Court Decree).</td>
                      <td>&apos;Settled&apos. / ₹0 Dues.</td>
                      <td>Quarterly Lok Adalat Cycles.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Bank Loan Restructuring.</td>
                      <td>0% Haircut (Tenure Extension).</td>
                      <td>Conditional on Monthly EMI.</td>
                      <td>&apos;Restructured&apos. / Active Debt.</td>
                      <td>2 to 4 Weeks.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Litigation (Vizag District Court / HC).</td>
                      <td>Uncertain (Judicial Discretion).</td>
                      <td>Subject to Multi-Year Appeal.</td>
                      <td>&apos;Suit Filed&apos. / adding.</td>
                      <td>4 to 7 Years.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 11 & CompanySection Component */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>11. SettleLoans Legal Defense &amp; Advisory</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">SettleLoans Legal Defense in Visakhapatnam</h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                SettleLoans gives you advocate defense across Visakhapatnam. We stop agent harassment and reply to court notices. We shield salary accounts and negotiate debt relief under RBI rules.
              </p>
              <CompanySection />
            </section>

            {/* Section 12: Comprehensive FAQ Accordion */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>12. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">FAQs: Personal Loan Settlement in Vizag</h2>

              <div className="space-y-4">
                {faqs.map((faq: any, index: number) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-2xl overflow-hidden mb-4 transition-all duration-200 hover:border-slate-300 bg-white shadow-sm"
                    open={index === 0}
                  >
                    <summary className="w-full p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none gap-4">
                      <span className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                        {faq.name}
                      </span>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] transition-transform duration-300 group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </summary>
                    <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
                      <p>{faq.acceptedAnswer.text}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* 5 Official Regulatory Links */}
            <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
              <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-[#1F5EFF]" />
                <span>Official Statutory &amp; Regulatory References</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">RBI Master Directions on Compromise Settlements (2023)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">RBI Master Circular on Recovery Agents &amp; Conduct</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Portal (CMS)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://apslsa.ap.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">Andhra Pradesh State Legal Services Authority (APSLSA)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">Payment &amp; Settlement Systems Act (Section 25 PSSA)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Loan Settlement &amp; Legal Defense Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  HDFC Loan Settlement
                </Link>
                <Link
                  href="/icici-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  ICICI Loan Settlement
                </Link>
                <Link
                  href="/sbi-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SBI Personal Loan Settlement
                </Link>
                <Link
                  href="/axis-bank-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Axis Bank Loan Settlement
                </Link>
                <Link
                  href="/bajaj-finance-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bajaj Finance Settlement
                </Link>
                <Link
                  href="/personal-loan-settlement-hyderabad"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Hyderabad Loan Settlement
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Guide
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Property Seizure Protections
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Default &amp; Jail Myths
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Settlement CIBIL Impact
                </Link>
              </div>
            </section>
          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full sticky top-24 space-y-6">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                  AJ
                </Link>
                <div>
                  <Link href="/authors/ashish-jhangra" className="font-bold text-slate-900 text-sm hover:text-[#1F5EFF] transition-colors">
                    Ashish Jhangra
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Expert in RBI compromise rules and NPA laws with over ten years of experience.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Verified Legal Author</span>
                <Link href="/authors/ashish-jhangra" className="text-[#1F5EFF] font-semibold hover:underline flex items-center gap-1">
                  View Profile &rarr;
                </Link>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Vizag Legal Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Facing Recovery Pressure in Vizag?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Stop recovery harassment today. Defend Vizag court notices and secure 40% to 65% debt waivers with bank SARB desks.
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
                Institutional Protections
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>100% RBI Fair Practices Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Verified Bank Letterhead Sanctions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Conciliation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
