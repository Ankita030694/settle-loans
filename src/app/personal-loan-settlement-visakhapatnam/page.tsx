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
            "text": "Salaried executives across Visakhapatnam Port Authority, RINL Steel Plant, HPCL, NTPC, Eastern Naval Command civilian wings, and Rushikonda IT SEZ face aggressive collection tactics when sudden financial emergencies occur. Private banks and NBFCs frequently deploy recovery panels who issue unlawful workplace visitation threats or attempt salary account freezes. A seasoned Visakhapatnam loan settlement lawyer leverages RBI Master Directions, balance sheet provisioning rules, and local court procedures to halt harassment, protect salary accounts from Section 171 banker's liens, and negotiate 40% to 65% OTS debt waivers."
          }
        },
        {
          "@type": "Question",
          "name": "Which local courts in Visakhapatnam have jurisdiction over bank loan default cases?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Visakhapatnam, summary civil suits and cheque bounce matters under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act are adjudicated before the Metropolitan Magistrate Courts and the Visakhapatnam District Court Complex near Jagadamba / Old Jail Road. Higher-value commercial debt recovery disputes exceeding ₹20 Lakhs fall under the Debts Recovery Tribunal (DRT Visakhapatnam). Amicable settlements are formalized through the District Legal Services Authority (DLSA Nyayaseva Sadan)."
          }
        },
        {
          "@type": "Question",
          "name": "What legal steps should I take upon receiving a Section 138 or Section 25 notice in Visakhapatnam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Never ignore a formal statutory notice. You have a strict 15-day window from receipt to deliver an advocate-drafted reply. Your lawyer enters an appearance, counters false allegations of fraudulent intent, challenges inflated penal charges, and submits a bona fide proposal for compromise settlement under RBI norms. If a complaint is filed before the Visakhapatnam Metropolitan Magistrate, your advocate files a Vakalatnama, secures bail on first appearance without detention, and seeks referral to Lok Adalat."
          }
        },
        {
          "@type": "Question",
          "name": "Can Visakhapatnam City Police arrest me for defaulting on an unsecured personal loan or credit card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Personal loan default is strictly a civil contractual breach governed by the Indian Contract Act, 1872. Neither the Visakhapatnam City Police Commissionerate nor local station house officers (SHOs) in areas like Dwaraka, MVP Colony, or Gajuwaka have legal authority to summon borrowers, mediate debt payments, or threaten arrest for financial non-payment. Any attempt by recovery agents to file false criminal complaints is dismissible under Supreme Court rulings in Arnesh Kumar v. State of Bihar."
          }
        },
        {
          "@type": "Question",
          "name": "How does the District Legal Services Authority (DLSA) Lok Adalat in Visakhapatnam handle loan settlements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Visakhapatnam District Legal Services Authority (DLSA) conducts regular National and State Lok Adalats at the Nyayaseva Sadan within the District Court Complex. When your advocate places your debt dispute before the Lok Adalat bench, both parties negotiate a discounted one-time lump-sum settlement. An award passed under Section 21 of the Legal Services Authorities Act, 1987, operates as a final, non-appealable Civil Court decree, ensuring 100% court fee refund and extinguishing all bank claims permanently."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver can borrowers in Visakhapatnam negotiate on personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depending on delinquency aging (typically 90 to 180+ days past due), verified involuntary hardship (job loss, business cash flow contraction, or medical illness), and asset classification (Substandard, Doubtful, or Loss NPA), Visakhapatnam borrowers typically achieve 40% to 65% waivers on the total outstanding principal book debt, along with a complete 100% waiver of penal interest, late fees, and bounce charges."
          }
        },
        {
          "@type": "Question",
          "name": "How do Visakhapatnam lawyers prevent banks from seizing salary accounts under Section 171 Banker's Lien?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 171 of the Indian Contract Act, a lending bank can set off balances in savings or salary accounts maintained within that exact same banking institution under the same PAN. To protect essential livelihood, lawyers advise distressed borrowers to immediately open an operational account with an independent scheduled commercial bank where no loan liabilities exist, ring-fencing subsistence funds from unilateral debit sweeps."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory timeline for banks in Visakhapatnam to deliver a No Dues Certificate under RBI rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, all regulated commercial banks and NBFCs must release the official ₹0 No Dues Certificate (NDC) / Loan Closure Certificate and update credit bureau records across CIBIL, Experian, Equifax, and CRIF High Mark within 30 calendar days of receiving full settlement payment. If a lender fails to issue the NDC within 30 days without valid justification, it must pay mandatory statutory compensation of ₹5,000 per day of delay directly to the borrower."
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
          "reviewBody": "Working in the maritime logistics sector near Visakhapatnam Port, an unexpected family medical crisis caused me to fall behind on two personal loans totaling ₹16 Lakhs. Recovery callers started threatening my workplace. SettleLoans assigned a senior Visakhapatnam debt advocate who issued cease-and-desist notices, represented me at the Dwaraka Nagar SARB branch, and concluded an official OTS with a 58% principal waiver and ₹0 NDC.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "P. Sireesha"
          },
          "datePublished": "2026-08-05",
          "reviewBody": "As a research manager in the Parawada Pharma SEZ, I faced aggressive collection tactics from an NBFC following a salary cut. SettleLoans responded to a Section 25 PSSA notice before the Vizag Metropolitan Magistrate Court, preventing coercive warrants. The matter was resolved smoothly through the DLSA Lok Adalat with a 52% overall reduction.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rajesh Varma"
          },
          "datePublished": "2026-06-29",
          "reviewBody": "After facing equity market losses, servicing ₹11 Lakhs across three credit cards in Madhurawada became impossible. SettleLoans consolidated my files, protected my salary account from unilateral banker liens, and structured a comprehensive settlement via the Visakhapatnam District Court Lok Adalat at a 62% haircut.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "M. Koteswara Rao"
          },
          "datePublished": "2026-08-14",
          "reviewBody": "My engineering fabrication unit in Gajuwaka suffered severe cash flow stagnation due to delayed client payments. A private bank issued an arbitration notice in Chennai. The SettleLoans legal team challenged territorial jurisdiction and negotiated directly with the bank's Zonal Stressed Assets desk in Vizag, securing a clean one-time settlement.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
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
                Unsecured debt default in Andhra Pradesh is strictly a civil matter. Through RBI Fair Practices enforcement, timely Section 25/138 replies in Vizag District Court, and SARB negotiations in Dwaraka Nagar, borrowers achieve 40%–65% OTS debt waivers.
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
                  <span><strong>Civil Nature of Debt:</strong> Under AP High Court rulings, loan default is purely a civil contractual dispute. Police have zero authority to intervene, summon debtors, or threaten arrest.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Port &amp; PSU Employee Defense:</strong> Salaried staff across Vizag Port Authority, RINL, HPCL, and Pharma City receive advocate protection against workplace recovery visits and salary liens.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Vizag District Court Notice Defense:</strong> Formal advocate replies to Section 138 / Section 25 notices prevent criminal summons and redirect cases to compromise settlement.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>SARB Haircut Slabs (40%–65%):</strong> Direct negotiations with bank Stressed Asset branches in Dwaraka Nagar secure 40% to 65% principal waivers and 100% penal fee write-offs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Binding DLSA Lok Adalat Award:</strong> Settlements formalized before the Visakhapatnam DLSA operate as final, non-appealable civil court decrees.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Visakhapatnam Retail & Industrial Debt Landscape */}
            <section id="vizag-debt-landscape" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Visakhapatnam Retail &amp; Industrial Debt Landscape</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Debt Landscape &amp; Borrowers</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Visakhapatnam drives Andhra Pradesh&apos;s industrial economy through maritime shipping, steel manufacturing, petroleum refining, and IT. Key employment corridors include the Visakhapatnam Port Authority, Gangavaram Port, RINL (Vizag Steel Plant), HPCL, NTPC, Eastern Naval Command civilian personnel, Parawada Pharma City, and Rushikonda IT SEZ.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Macroeconomic shocks—such as industrial supply chain slowdowns, contractor payment delays, IT layoffs, and medical emergencies—have caused severe debt distress for salaried executives and SME owners across Dwaraka Nagar, Siripuram, and Gajuwaka, leading to bounced EMIs across multiple private lenders.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When defaults occur, third-party recovery agencies often deploy unlawful intimidation tactics. Under Indian civil law, loan default is strictly a breach of contract, and structured legal remedies exist to halt harassment and secure binding debt closure.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Fundamental Legal Reality:</strong> Involuntary financial default is strictly a civil breach under the Indian Contract Act, 1872. It is not a criminal offense. Neither collection agencies nor banks can summon you to police stations or threaten arrest in Visakhapatnam.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">NPA Aging Architecture</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Securing an effective One-Time Settlement (OTS) requires navigating the RBI&apos;s IRACP prudential norms. Banks offer substantial compromise haircuts only as delinquent loans advance through statutory classification stages on their balance sheets.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Overdue loans transition from Special Mention Accounts (SMA-0 to SMA-2) during the first 90 days into Non-Performing Assets (NPAs). Beyond 90 days, mandatory provisioning (15% to 100%) incentivizes lenders to accept discounted cash settlements.
              </p>

              {/* 4-Sided Bordered Delinquency Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Delinquency Stage</th>
                      <th>Overdue Duration</th>
                      <th>Bank Provisioning Burden</th>
                      <th>Recovery Strategy &amp; Haircut Viability</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-0 &amp; SMA-1</td>
                      <td>1 – 60 Days Overdue</td>
                      <td>Standard Capital Provision</td>
                      <td>Automated payment reminders, tele-calling pressure, NACH bounce penalties. Haircut settlements unavailable.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-2</td>
                      <td>61 – 90 Days Overdue</td>
                      <td>Watchlist Provision</td>
                      <td>Pre-NPA demand notices issued, external collection escalation. Loan restructuring or tenure extension possible.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA</td>
                      <td>91 – 365 Days Overdue</td>
                      <td>15% – 25% Regulatory Provision</td>
                      <td>File transferred to Zonal SARB desks in Dwaraka Nagar. 35%–50% principal haircut becomes commercially feasible.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful (D1 / D2)</td>
                      <td>1 – 3 Years Overdue</td>
                      <td>40% – 100% Capital Provision</td>
                      <td>Lenders prioritize liquidity over prolonged litigation. Deep 50%–65% principal haircuts achievable.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loss Asset</td>
                      <td>3+ Years Overdue</td>
                      <td>100% Written-off Balance</td>
                      <td>Fully written off on bank balance sheet. Maximum compromise settlements (up to 70% haircut) or Lok Adalat disposal.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                The Hon&apos;ble High Court of Andhra Pradesh at Amaravati has consistently ruled that lenders cannot deploy extra-judicial force or musclemen to recover unsecured debts. All recoveries must adhere to statutory due process, and financial institutions remain vicariously liable for any unlawful conduct by third-party recovery agencies.
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
                When NACH mandates or cheques bounce, lenders issue statutory notices under <strong>Section 25 PSSA</strong> or <strong>Section 138 NI Act</strong>, threatening proceedings before Visakhapatnam Metropolitan Magistrate Courts at Jagadamba / Old Jail Road.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers have a <strong>15-day statutory window</strong> to serve an advocate-drafted reply. A timely legal response refutes fraudulent intent, documents involuntary hardship, challenges illegal compounding charges, and proposes an amicable compromise.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                This prompt response redirects the dispute from criminal litigation to the Zonal Stressed Assets desk or District Lok Adalat for an expedited settlement.
              </p>
            </section>

            {/* Section 4: Banker's General Lien (Section 171) & Port/PSU Salary Shielding */}
            <section id="bankers-lien-port-psu-account-shielding" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>4. Section 171 Lien &amp; Port/PSU Salary Shielding</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Banker&apos;s General Lien (Section 171)</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under Section 171 of the Indian Contract Act, 1872, banks possess the right of general lien to set off balances from accounts within the same institution under the same PAN. For port, PSU, or IT staff in Visakhapatnam defaulting on a loan held where their salary account is maintained, automated debits can disrupt essential living expenses.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                However, lenders cannot touch funds in independent third-party banks without a court decree. Borrowers facing default must immediately ring-fence their subsistence by opening an operational salary account with an independent lender where no dues exist.
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
                The visual roadmap below illustrates the end-to-end debt resolution lifecycle in Visakhapatnam—from initial delinquency and court notice defense to SARB negotiations in Dwaraka Nagar and final ₹0 No Dues Certificate delivery.
              </p>

              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg my-8 bg-slate-900">
                <img
                  src="/images/infographics/personal-loan-settlement-visakhapatnam.jpg"
                  alt="Personal Loan Settlement Process in Visakhapatnam Legal Defense Roadmap"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-slate-900/90 border-t border-slate-800 text-center">
                  <p className="text-xs text-slate-300 font-medium">
                    Figure 1.0: End-to-End Visakhapatnam Personal Loan Settlement Framework, District Court Notice Defense &amp; SARB Resolution Roadmap.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">OTS Haircut Mechanics &amp; NPV Benchmarks</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI compromise directives, bank Credit Committees in Dwaraka Nagar and Siripuram evaluate OTS offers against a mathematical <strong>Net Present Value (NPV) Benchmark</strong>. Because civil recovery suits take 4 to 7 years with high legal fees, immediate cash recovery holds higher financial value.
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
                  Where C_t represents estimated recoveries, r is the discount rate, and deductions account for 3–5 years of court friction and capital locked in NPA provisions.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                An advocate-led OTS eliminates legal costs and releases locked NPA provisions, routinely enabling <strong>40% to 65% principal haircuts</strong> with 100% penal fee waivers.
              </p>
            </section>

            {/* Section 7: Anti-Harassment Protections & Vizag Police Jurisdiction */}
            <section id="anti-harassment-vizag-police-protections" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>7. Anti-Harassment Laws &amp; Vizag Police Jurisdiction</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Enforcing RBI Fair Practices</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers in Visakhapatnam are protected under the <strong>RBI Master Directions on Recovery Agents (2022)</strong>. Agents cannot call before 08:00 AM or after 07:00 PM, use abusive language, or visit workplaces and homes without authorization.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The <strong>Visakhapatnam City Police Commissionerate</strong> and local stations across Dwaraka, MVP Colony, and Gajuwaka have zero jurisdiction to intervene in civil loan defaults.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                Our advocates issue formal cease-and-desist notices to bank Nodal Officers and escalate violations to the <strong>RBI Integrated Ombudsman Portal (CMS)</strong>, compelling lenders to stop unauthorized collection actions.
              </p>
            </section>

            {/* Section 8: DLSA Lok Adalat & Arbitration Defense in Vizag */}
            <section id="dlsa-lok-adalat-arbitration-defense" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>8. DLSA Lok Adalat &amp; Arbitration Defense in Vizag</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">DLSA Lok Adalat Conciliation</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The <strong>Visakhapatnam District Legal Services Authority (DLSA)</strong> at Nyayaseva Sadan conducts regular Lok Adalats. Legal representation secures 40% to 65% haircuts formalized as binding Section 21 civil decrees with full court fee refunds.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                If lenders initiate unilateral arbitration in distant cities like Chennai or Mumbai, our advocates challenge jurisdiction under Section 12 of the Arbitration Act and Supreme Court precedents (*Perkins Eastman*), returning disputes to local conciliation in Visakhapatnam.
              </p>
            </section>

            {/* Section 9: Sanction Letter Forensics, Mandatory ₹0 NDC & CIBIL Recovery */}
            <section id="sanction-letter-forensics-cibil-recovery" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>9. Sanction Letter Audit &amp; CIBIL Recovery</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Sanction Letter Audit &amp; ₹0 NDC Mandate</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Never pay based on verbal assurances. We audit the bank&apos;s official <strong>OTS Sanction Letter</strong> to verify official letterhead authenticity, exact account numbers, compromised settlement amounts, payment schedules, and debt extinguishment terms.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under <strong>RBI Circular RBI/2023-24/60</strong>, lenders must issue the <strong>No Dues Certificate (NDC)</strong> within <strong>30 calendar days</strong> of settlement or pay statutory compensation of <strong>₹5,000 per day of delay</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                Post-settlement, accounts show &apos;Settled&apos; with a ₹0 balance. This stops delinquency compounding, enabling borrowers to rebuild their CIBIL score back to 750+ over 18 to 24 months using secured credit tools.
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
                Evaluating debt resolution avenues in Visakhapatnam helps borrowers choose the optimal approach:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Resolution Pathway</th>
                      <th>Principal Haircut Range</th>
                      <th>Legal Binding Finality</th>
                      <th>CIBIL Bureau Status</th>
                      <th>Resolution Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Direct SARB Settlement (Dwaraka Nagar / Siripuram)</td>
                      <td>40% – 65% Principal Haircut</td>
                      <td>Complete (Bank NDC Issued)</td>
                      <td>&apos;Settled&apos; / ₹0 Dues</td>
                      <td>3 to 6 Weeks</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Visakhapatnam DLSA Lok Adalat (Nyayaseva Sadan)</td>
                      <td>45% – 65% Principal Haircut</td>
                      <td>Absolute (Civil Court Decree)</td>
                      <td>&apos;Settled&apos; / ₹0 Dues</td>
                      <td>Quarterly Lok Adalat Cycles</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Bank Loan Restructuring</td>
                      <td>0% Haircut (Tenure Extension)</td>
                      <td>Conditional on Monthly EMI</td>
                      <td>&apos;Restructured&apos; / Active Debt</td>
                      <td>2 to 4 Weeks</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Litigation (Vizag District Court / HC)</td>
                      <td>Uncertain (Judicial Discretion)</td>
                      <td>Subject to Multi-Year Appeal</td>
                      <td>&apos;Suit Filed&apos; / Compounding</td>
                      <td>4 to 7 Years</td>
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
                SettleLoans provides advocate-led legal defense and institutional negotiation across Visakhapatnam to stop recovery harassment, defend court notices, protect salary accounts, and secure maximum debt relief under RBI guidelines.
              </p>
              <CompanySection />
            </section>

            {/* Section 12: Comprehensive FAQ Accordion */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>12. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">FAQs: Visakhapatnam</h2>

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
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in RBI compromise settlement frameworks, NPA provisioning forensics, and banking dispute litigation with over a decade of debt advisory experience.
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
                Halt illegal collection harassment, defend against Visakhapatnam District Court notices, and negotiate 40%–65% debt waivers directly with bank SARB zonal committees.
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
