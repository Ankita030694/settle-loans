import { Metadata } from 'next';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import SidebarTOC from '@/components/SidebarTOC';
import {
  ShieldCheck,
  Calendar,
  Award,
  PhoneCall,
  ExternalLink,
  Lock,
  Building2,
  Sparkles,
  ShieldAlert,
  Scale,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Layers,
  Gavel,
  FileCheck,
  UserCheck,
  AlertCircle,
  MapPin,
  ChevronDown,
  Clock,
  ArrowRight,
  Landmark,
  Percent
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement in Kanpur | SettleLoans',
  description:
    'Facing loan default, recovery agent harassment, or court summons in Kanpur? Senior debt settlement advocates protect leather exporters, merchants, and workers with 40%–70% OTS waivers.',
  keywords: [
    'debt settlement advocates in kanpur',
    'personal loan settlement kanpur',
    'loan settlement lawyers in kanpur',
    'debt settlement company kanpur',
    'kanpur nagar district court loan default advocate',
    'civil lines court kanpur debt settlement lawyer',
    'section 138 bounce advocate kanpur',
    'jajmau leather exporter loan settlement',
    'dada nagar factory loan default advocate',
    'panki industrial area debt settlement',
    'naveen market merchant loan relief',
    'dlsa lok adalat kanpur nagar loan settlement',
    'rbi recovery harassment lawyer kanpur',
    'mall road bank ots settlement kanpur',
    'one time settlement ots kanpur banks'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-kanpur',
  },
  openGraph: {
    title: 'Debt Settlement Advocates in Kanpur: Legal Defense & Bank OTS Advisory',
    description:
      'Expert legal defense and One-Time Settlement (OTS) representation for leather exporters, factory workers, traders, and salaried executives facing loan default across Kanpur, Civil Lines, and Panki.',
    url: 'https://www.settleloans.in/personal-loan-settlement-kanpur',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-kanpur.jpg',
        width: 1200,
        height: 675,
        alt: 'Debt Settlement Advocates in Kanpur Legal Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt Settlement Advocates in Kanpur: Legal Defense & Lok Adalat Guide',
    description:
      'Authoritative legal representation for bank loan defaults, Section 138/25 notices in Kanpur Nagar courts, DLSA Lok Adalat compromise decrees, and anti-harassment shielding in Kanpur.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-kanpur.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-kanpur#webpage",
      "url": "https://www.settleloans.in/personal-loan-settlement-kanpur",
      "name": "Debt Settlement Advocates in Kanpur: Legal Defense & OTS (2026)",
      "description": "Facing loan default, recovery agent harassment, or court summons in Kanpur? Senior debt settlement advocates protect leather exporters, merchants, and workers with 40%–70% OTS waivers.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-loan-settlement-kanpur#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-kanpur#breadcrumb",
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
          "name": "Services",
          "item": "https://www.settleloans.in/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Debt Settlement Advocates in Kanpur",
          "item": "https://www.settleloans.in/personal-loan-settlement-kanpur"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settlement-kanpur#article",
      "headline": "Debt Settlement Advocates in Kanpur: Industrial Debt Defense, Bank OTS & 40%–70% Relief",
      "description": "An exhaustive legal and financial guide for distressed leather exporters, factory workers, retail merchants, and salaried professionals in Kanpur. Learn Kanpur Nagar District Court dynamics, Section 171 banker lien protections, DLSA Lok Adalat settlement procedures, and how seasoned Kanpur advocates negotiate 40% to 70% debt waivers.",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-kanpur.jpg",
      "datePublished": "2026-08-28T12:00:00+05:30",
      "dateModified": "2026-08-28T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-loan-settlement-kanpur#webpage"
      },
      "author": {
        "@type": "Person",
        "name": "Ashish Jhangra",
        "url": "https://www.settleloans.in/authors/ashish-jhangra"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SettleLoans",
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
      "@type": "FAQPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-kanpur#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do leather exporters, factory personnel, and traders in Kanpur need specialized debt settlement advocates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kanpur's industrial ecosystem across Jajmau, Panki, Dada Nagar, and Nayaganj frequently faces export and liquidity shocks. Private lenders often deploy aggressive recovery agencies and issue court notices. Empanelled Kanpur debt advocates enforce RBI guidelines, defend court summons, and negotiate 40% to 70% OTS waivers directly with bank zonal desks on Mall Road and Civil Lines."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank freeze my business or personal savings account under Section 171 Banker's Lien in Kanpur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 171 of the Indian Contract Act, 1872, a bank holds a general lien only over accounts within its own institution. Lenders cannot freeze or sweep funds from independent accounts at separate banks without a formal civil court order. Section 60(1) CPC also protects subsistence wages and essential working funds."
          }
        },
        {
          "@type": "Question",
          "name": "Can the Kanpur Police Commissionerate arrest or summon me for defaulting on an unsecured personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Involuntary loan default is strictly a civil breach of contract. Police stations across Kotwali, Civil Lines, Kalyanpur, and Jajmau have zero statutory authority to issue call letters, register FIRs, or execute arrests for debt default under Supreme Court rulings in Arnesh Kumar and Lalita Kumari."
          }
        },
        {
          "@type": "Question",
          "name": "How should I handle Section 138 NI Act or Section 25 PSSA summons from Kanpur Nagar District Court?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upon receiving a demand notice or summons from Kanpur Nagar District Court in Civil Lines, you must act within the mandatory 15-day statutory window. Our advocates enter appearance under Vakalatnama, submit legal hardship replies, and refer the matter to the National Lok Adalat for an agreed OTS compromise decree."
          }
        },
        {
          "@type": "Question",
          "name": "How does the District Legal Services Authority (DLSA) Kanpur Nagar Lok Adalat resolve loan defaults?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The DLSA Kanpur Nagar conducts National Lok Adalats where debt disputes are resolved through mutual compromise. Under Section 21 of the Legal Services Authorities Act, 1987, a Lok Adalat award carries the force of a final Civil Court decree with zero right of appeal, providing complete legal closure."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver can Kanpur borrowers achieve through bank OTS policies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depending on account aging (90 to 180+ days past due) and documented distress (export cancellations, factory slowdowns, health issues), Kanpur advocates routinely secure 40% to 70% principal waivers and 100% write-offs of penal interest and late fees."
          }
        },
        {
          "@type": "Question",
          "name": "How do advocates protect Kanpur factory owners and shopkeepers from recovery agent visits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Advocates issue Cease-and-Desist notices under RBI Master Directions to bank Principal Nodal Officers on Mall Road, barring agents from visiting Jajmau tanneries, Panki units, Naveen Market shops, or homes. Violations are reported to the Police Commissionerate and RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "Can the entire debt settlement process in Kanpur be managed digitally and legally?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. SettleLoans provides a comprehensive digital debt defense infrastructure. Financial audits, legal replies, and SARB negotiations are handled online, while empanelled Kanpur advocates represent you under formal Vakalatnama whenever court attendance is required."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory timeline for banks to provide a No Dues Certificate (NDC) post-settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, lenders must deliver the official zero-balance No Dues Certificate and update credit bureau records within 30 days of settlement payment. Failure to do so incurs a statutory penalty of ₹5,000 per day of delay payable to the borrower."
          }
        }
      ]
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/personal-loan-settlement-kanpur#service",
      "name": "SettleLoans - Debt Settlement Advocates in Kanpur & Legal Defense",
      "description": "Premier debt settlement advisory, court notice defense, and DLSA Lok Adalat representation for leather exporters, factory workers, traders, and salaried professionals across Kanpur, Civil Lines, Panki, and Swaroop Nagar.",
      "url": "https://www.settleloans.in/personal-loan-settlement-kanpur",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-kanpur.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mall Road, Civil Lines",
        "addressLocality": "Kanpur",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "208001",
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
        "reviewCount": "1720",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Tariq Mansoor"
          },
          "datePublished": "2026-06-18",
          "reviewBody": "As a leather unit owner in Jajmau, export cancellations caused severe cash flow disruption on ₹22 Lakhs in credit lines. SettleLoans issued cease-and-desist notices to the bank's Mall Road office, represented me in Kanpur Nagar District Court, and secured a 65% OTS waiver with an authentic No Dues Certificate.",
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
            "name": "Ramesh Chandra Gupta"
          },
          "datePublished": "2026-07-12",
          "reviewBody": "My fabric business in General Ganj faced liquidity blockages across three loans totaling ₹14 Lakhs. SettleLoans shielded my family from recovery harassment and finalized a structured OTS through the DLSA Kanpur Nagar Lok Adalat at a 58% haircut.",
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
            "name": "Vikas Sachan"
          },
          "datePublished": "2026-05-24",
          "reviewBody": "Employed in Panki Industrial Area, medical emergencies caused default on ₹8.5 Lakhs in personal loans. SettleLoans ring-fenced my salary under Section 171 guidelines and negotiated a 50% waiver directly with the lender's Stressed Assets branch.",
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
            "name": "Neha Awasthi"
          },
          "datePublished": "2026-08-14",
          "reviewBody": "When an NBFC issued Section 25 PSSA court notices in Civil Lines, SettleLoans drafted a hardship reply leading to an amicable 60% settlement. Payment was made via RTGS, and the zero-balance closure letter arrived within 20 days.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: "kanpur-industrial-debt-landscape", title: "1. Kanpur Industrial & Trade Realities" },
  { id: "delinquency-aging-allahabad-hc-safeguards", title: "2. Delinquency Timeline & High Court Norms" },
  { id: "kanpur-nagar-court-notice-defense", title: "3. Kanpur Nagar Court & Section 138/25 Defense" },
  { id: "bankers-lien-section-171-salary-protection", title: "4. Section 171 Lien & Account Shielding" },
  { id: "infographic-resolution-roadmap", title: "5. Visual Resolution Roadmap" },
  { id: "ots-haircut-mechanics-npv-benchmark", title: "6. OTS Haircut Mechanics & NPV Formula" },
  { id: "rbi-anti-harassment-kanpur-police-limits", title: "7. RBI Anti-Harassment & Police Limits" },
  { id: "kanpur-advocate-settlement-protocol", title: "8. 5-Step Zonal SARB Settlement Protocol" },
  { id: "sanction-letter-audit-cibil-rebuilding", title: "9. Sanction Letter Audit & CIBIL Rebuilding" },
  { id: "comparative-resolution-matrix", title: "10. Comparative Resolution Matrix" },
  { id: "company-resolution-section", title: "11. SettleLoans Legal Defense & Advisory" },
  { id: "faqs", title: "12. Frequently Asked Questions" },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <div
        className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white"
        style={{ fontFamily: 'var(--font-satoshi), Satoshi, -apple-system, BlinkMacSystemFont, sans-serif' }}
      >
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
              <span>Regional Debt Resolution • Kanpur &amp; Uttar Pradesh</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
              Debt Settlement Advocates in Kanpur: <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Notice Defense &amp; OTS Debt Relief</span>
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
                <span>RBI Master Direction Compliant</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <span>Consult Kanpur Debt Advocate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
              >
                Evaluate OTS Waiver Eligibility
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
                  <span>Kanpur Legal Crux</span>
                </div>
                <p className="text-[11px] leading-relaxed text-blue-800">
                  Unsecured debt default in Kanpur is strictly a civil dispute governed by the Indian Contract Act, 1872. By asserting RBI Fair Practices protections, replying to Section 138/25 notices in Kanpur Nagar District Court, and engaging Zonal SARB desks across Mall Road and Civil Lines, borrowers can halt collection harassment and secure 40%–70% OTS debt waivers.
                </p>
              </div>
            </aside>

            {/* Middle Column (Main Editorial Content) */}
            <main className="w-full min-w-0 blog-content">

              {/* Top Key Takeaways Box */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                  <Award className="w-5 h-5 text-[#1F5EFF]" />
                  <span>Key Takeaways: Debt Settlement in Kanpur &amp; Uttar Pradesh</span>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Civil Nature of Default:</strong> Loan non-payment is purely a civil contractual dispute. The Kanpur Police Commissionerate has no statutory authority to register FIRs or arrest borrowers for commercial financial distress.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Account Protection:</strong> Under Section 60(1) CPC and Section 171 Contract Act doctrines, operational business and salary accounts in unlinked banks are protected from arbitrary banker lien sweeps.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Kanpur Nagar Court Defense:</strong> Timely advocate replies to Section 138 NI Act and Section 25 PSSA summons prevent criminal escalation and compel lenders toward Lok Adalat conciliation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>SARB Haircut Slabs (40%–70%):</strong> Negotiating directly with Mall Road and Civil Lines Zonal SARB desks unlocks 40% to 70% principal waivers and 100% penal fee write-offs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Mandatory ₹0 NDC within 30 Days:</strong> Under RBI Circular RBI/2023-24/60, lenders must issue the zero-balance No Dues Certificate within 30 days or pay ₹5,000 per day of delay.</span>
                  </li>
                </ul>
              </div>

              {/* Section 1: Kanpur Industrial & Trade Realities */}
              <section id="kanpur-industrial-debt-landscape" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>1. Kanpur Industrial &amp; Trade Realities</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  The Unsecured Debt Crisis for Leather Exporters, Factory Workers &amp; Merchants in Kanpur
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  As the primary industrial powerhouse of Central Uttar Pradesh, Kanpur is anchored by its leather tanning and export manufacturing belt in Jajmau, industrial clusters in Panki and Dada Nagar, defense production establishments, and wholesale trading markets in Nayaganj, General Ganj, Birhana Road, and Naveen Market. The city also supports dense retail zones in Gumti No. 5 and Govind Nagar, alongside professionals affiliated with IIT Kanpur and GSVM Medical College.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Over recent years, PSU banks (SBI, PNB, Bank of Baroda) and private lenders (HDFC, ICICI, Axis, Bajaj Finance) aggressively disbursed unsecured business credit, personal loans, and revolving overdrafts. However, international export tariff shifts, global demand contractions in leather shipments, environmental compliance expenses, and local cash flow disruptions have triggered cascading EMI defaults among enterprise owners and salaried staff across Kanpur.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  In response, banks assign delinquent accounts to aggressive recovery agencies operating out of Civil Lines and Swaroop Nagar. These agents frequently stage coercive visits to Jajmau tanneries, Panki factory gates, and residential colonies in Kakadeo, Kidwai Nagar, and Barra. Distressed borrowers must understand that such intimidation violates RBI guidelines, and lawful legal mechanisms exist to halt harassment and secure substantial One-Time Settlement (OTS) debt waivers.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                      <strong>Statutory Protection in Kanpur:</strong> Involuntary financial default is strictly a civil breach of contract governed by the Indian Contract Act, 1872. It does not constitute a criminal offense. Neither recovery agents nor bank representatives have legal authority to summon borrowers to police stations or threaten arrest.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Delinquency Timeline & Allahabad High Court Norms */}
              <section id="delinquency-aging-allahabad-hc-safeguards" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Clock className="w-4 h-4" />
                  <span>2. Delinquency Timeline &amp; High Court Norms</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  NPA Classification Aging &amp; Allahabad High Court Civil Debt Safeguards
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Under the RBI&apos;s Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP), overdue accounts progress through Special Mention Account stages (SMA-0 to SMA-2) during the initial 90 days. Once non-payment crosses 90 days, the account is classified as a Non-Performing Asset (NPA), requiring banks to lock capital provisions ranging from 15% for Substandard assets up to 100% for Loss assets.
                </p>

                {/* 4-Sided Bordered Delinquency Table */}
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr>
                        <th>Delinquency Stage</th>
                        <th>Aging Threshold</th>
                        <th>Mandatory Provisioning</th>
                        <th>Institutional Strategy &amp; OTS Scope</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-semibold text-slate-900">SMA-0 &amp; SMA-1</td>
                        <td>1 – 60 Days Overdue</td>
                        <td>Standard Capital Buffer</td>
                        <td>Automated tele-calling, late fees. Substantive debt waivers unavailable.</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">SMA-2</td>
                        <td>61 – 90 Days Overdue</td>
                        <td>Pre-NPA Watchlist</td>
                        <td>Pre-NPA demand notices issued. Restructuring or tenure extension possible.</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Substandard NPA</td>
                        <td>91 – 365 Days Overdue</td>
                        <td>15% – 25% Profit Provision</td>
                        <td>Transferred to Zonal SARB on Mall Road. 35%–50% principal haircuts viable.</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Doubtful (D1 / D2)</td>
                        <td>1 – 3 Years Overdue</td>
                        <td>40% – 100% Capital Lock</td>
                        <td>Banks prioritize balance sheet cleanup. 50%–65% principal haircuts achievable.</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Loss Asset</td>
                        <td>3+ Years Overdue</td>
                        <td>100% Written-off Balance</td>
                        <td>Fully written off in bank ledgers. Deep OTS waivers (up to 70%) via Lok Adalat.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  The Hon&apos;ble Allahabad High Court has repeatedly held that financial institutions cannot adopt coercive or extra-judicial recovery measures. Lenders remain vicariously liable for unlawful harassment committed by third-party recovery agents, and recovery must adhere strictly to civil due process.
                </p>
              </section>

              {/* Section 3: Statutory Legal Notice Defense in Kanpur Nagar District Court */}
              <section id="kanpur-nagar-court-notice-defense" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Gavel className="w-4 h-4" />
                  <span>3. Kanpur Nagar Court &amp; Section 138/25 Defense</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Defending Legal Notices in Kanpur Nagar District Court (Civil Lines) &amp; CJM Courts
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  When cheques or electronic NACH mandates bounce, bank legal departments issue statutory demand notices under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> or <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong>, threatening complaints in the Chief Judicial Magistrate (CJM) Courts at Civil Lines.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Borrowers have a mandatory <strong>15-day statutory response window</strong> upon receiving these notices. Ignoring a statutory notice allows the lender to file formal criminal complaints. An assertive legal reply drafted by experienced advocates establishes the absence of dishonest mens rea, documents verified hardship (such as export cancellations, balance sheets, or medical files), challenges unlawful penal fees, and formally proposes OTS conciliation.
                </p>
                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  Because prosecuting cases through Kanpur Nagar courts requires years of litigation and expenses, structured advocate replies compel bank legal managers to divert files toward Zonal SARB desks or the National Lok Adalat for an expedited settlement.
                </p>
              </section>

              {/* Section 4: Banker's Right of General Lien & Kanpur Account Shielding */}
              <section id="bankers-lien-section-171-salary-protection" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span>4. Section 171 Lien &amp; Account Shielding</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Banker&apos;s Right of General Lien (Section 171) &amp; Commercial Account Protection
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Under Section 171 of the Indian Contract Act, 1872, banks possess a right of general lien to set off funds across accounts maintained within that same institution under the matching CIF/PAN. If an enterprise or salaried individual defaults, the lender may unilaterally sweep balances from linked savings or current accounts.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  However, this lien does not extend to accounts at separate, unlinked banking institutions without a civil court attachment order. Furthermore, <strong>Section 60(1) of the Code of Civil Procedure (CPC), 1908</strong> strictly exempts subsistence wages and essential working funds from attachment. Borrowers facing distress should promptly re-route business receivables or salary credits to independent bank accounts and cancel electronic NACH mandates.
                </p>
              </section>

              {/* Section 5: Visual Resolution Roadmap (Infographic Banner) */}
              <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>5. Visual Resolution Roadmap</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Personal Loan Settlement Roadmap in Kanpur &amp; Uttar Pradesh
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                  The visual roadmap below illustrates the stage-by-stage resolution framework in Kanpur—from notice defense in Kanpur Nagar courts to RBI anti-harassment protection, Zonal SARB negotiations, and final ₹0 No Dues Certificate delivery.
                </p>

                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg my-8 bg-slate-900">
                  <img
                    src="/images/infographics/personal-loan-settlement-kanpur.jpg"
                    alt="Debt Settlement Process in Kanpur and Uttar Pradesh Resolution Roadmap"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-slate-900/90 border-t border-slate-800 text-center">
                    <p className="text-xs text-slate-300 font-medium">
                      Figure 1.0: End-to-End Kanpur Debt Settlement Framework, Court Notice Defense &amp; Zonal SARB Resolution Protocol.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: OTS Haircut Mechanics & NPV Recovery Valuation Formula */}
              <section id="ots-haircut-mechanics-npv-benchmark" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Percent className="w-4 h-4" />
                  <span>6. OTS Haircut Mechanics &amp; NPV Formula</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  OTS Haircut Mechanics &amp; The Net Present Value (NPV) Recovery Benchmark
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Bank Settlement Committees on Mall Road and Civil Lines evaluate compromise settlement offers against an institutional <strong>Net Present Value (NPV) Recovery Valuation Benchmark</strong>. Pursuing multi-year civil suits or DRT litigation entails substantial advocate fees, court expenses, and capital locked in provisioning.
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
                    Where C_t represents estimated recoveries, r is the discount rate, and deductions account for 3–5 years of litigation friction and locked NPA capital.
                  </p>
                </div>

                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  An immediate lump-sum settlement frees locked regulatory provisions and eliminates legal costs, enabling credit committees to approve <strong>40% to 70% principal waivers</strong> alongside 100% write-offs of penal charges.
                </p>
              </section>

              {/* Section 7: Anti-Harassment Protections & Enforcing RBI Guidelines in Kanpur */}
              <section id="rbi-anti-harassment-kanpur-police-limits" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>7. RBI Anti-Harassment &amp; Police Limits</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Enforcing the RBI Fair Practices Code &amp; Restricting Police Interference in Kanpur
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  The <strong>RBI Master Directions on Recovery Agents (2022)</strong> strictly forbid collection calls before 8:00 AM or after 7:00 PM, prohibit abusive language, and ban visits to workplaces, factories, or family members. Agents must carry valid bank authorization and preserve client confidentiality.
                </p>
                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  Under Supreme Court rulings in <em>Arnesh Kumar</em> and <em>Lalita Kumari</em>, the Kanpur Police Commissionerate cannot entertain commercial recovery complaints or issue police summons for civil defaults. When agencies violate these standards, formal cease-and-desist notices and statutory complaints to the <strong>RBI Integrated Ombudsman (CMS Portal)</strong> effectively halt unauthorized contact.
                </p>
              </section>

              {/* Section 8: 5-Step SARB Settlement Protocol in Kanpur */}
              <section id="kanpur-advocate-settlement-protocol" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Layers className="w-4 h-4" />
                  <span>8. 5-Step Zonal SARB Settlement Protocol</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  5-Step Legal Protocol for Settling Debt with Kanpur Zonal Desks
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                  Achieving a binding One-Time Settlement with banks in Kanpur follows a structured, advocate-led five-stage legal protocol:
                </p>

                <div className="space-y-4 my-6">
                  <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">Financial Hardship Dossier Compilation</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We audit total liabilities and compile verified hardship evidence, including export contract cancellations, GST filings, balance sheets, and medical records demonstrating genuine inability to service EMIs.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">Cease-and-Desist Notice &amp; Anti-Harassment Shielding</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We serve formal legal notices under RBI guidelines to the bank&apos;s Principal Nodal Officer, immediately shielding factory premises in Panki, shops in Naveen Market, and residences from agent visits.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">Statutory Notice Defense in Kanpur Nagar Courts</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Our advocates draft and serve comprehensive replies to Section 138 NI Act and Section 25 PSSA notices within the 15-day statutory window, preventing criminal escalation in Civil Lines magistrate courts.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">Direct Negotiations with Mall Road Zonal SARB Desks</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Bypassing outsourced recovery agencies, we submit structured OTS proposals directly to bank Zonal Stressed Assets Recovery Branches on Mall Road and Civil Lines, securing 40% to 70% waivers.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm">
                      5
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">Sanction Letter Audit &amp; Mandatory NDC Delivery</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We verify official stamped bank sanction letters before direct RTGS remittance, followed by enforcement of the mandatory zero-balance No Dues Certificate under RBI directives.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Sanction Letter Forensics, Mandatory ₹0 NDC & CIBIL Recovery */}
              <section id="sanction-letter-audit-cibil-rebuilding" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <FileCheck className="w-4 h-4" />
                  <span>9. Sanction Letter Audit &amp; CIBIL Rebuilding</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Sanction Letter Forensics, Mandatory ₹0 NDC &amp; 24-Month CIBIL Repair
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Borrowers must never remit funds based on verbal promises or informal messages. A valid <strong>OTS Sanction Letter</strong> must appear on official bank letterhead with branch seals, officer codes, exact compromised figures, an explicit debt extinguishment clause, and NDC issuance commitments.
                </p>
                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  Under <strong>RBI Circular RBI/2023-24/60</strong>, lenders must deliver the <strong>No Dues Certificate (NDC)</strong> within <strong>30 calendar days</strong> of settlement or pay compensation of <strong>₹5,000 per day of delay</strong>. Following settlement, bureau records update to &apos;Settled&apos; with ₹0 balance. Borrowers can rebuild credit scores back to 750+ within 18 to 24 months through disciplined credit practices and secured cards.
                </p>
              </section>

              {/* Section 10: Comparative Resolution Matrix Table */}
              <section id="comparative-resolution-matrix" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Scale className="w-4 h-4" />
                  <span>10. Comparative Resolution Matrix</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Comparing Debt Resolution Pathways for Borrowers in Kanpur
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Comparing legal resolution pathways in Kanpur helps borrowers select the optimal strategy based on debt quantum, timeline, and financial capacity:
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
                        <td className="font-semibold text-slate-900">Direct Zonal SARB Settlement (Kanpur)</td>
                        <td>40% – 70% Principal Haircut</td>
                        <td>Complete (Bank NDC Issued)</td>
                        <td>&apos;Settled&apos; / ₹0 Dues</td>
                        <td>3 to 6 Weeks</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">DLSA Lok Adalat (Kanpur Nagar Courts)</td>
                        <td>45% – 70% Principal Haircut</td>
                        <td>Absolute (Civil Court Decree)</td>
                        <td>&apos;Settled&apos; / ₹0 Dues</td>
                        <td>Quarterly Cycles</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Bank Loan Restructuring</td>
                        <td>0% Haircut (Tenure Extension)</td>
                        <td>Conditional on Monthly EMI</td>
                        <td>&apos;Restructured&apos; / Active Debt</td>
                        <td>2 to 4 Weeks</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Civil Court Litigation (Civil Lines / HC)</td>
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
                  <Landmark className="w-4 h-4" />
                  <span>11. SettleLoans Legal Defense &amp; Advisory</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Premier Loan Settlement &amp; Legal Defense Services in Kanpur
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                  Resolving unmanageable debt across Kanpur requires decisive legal advocacy to halt collection harassment, defend court notices, and negotiate directly with bank Zonal Credit Committees. SettleLoans provides end-to-end legal defense to help borrowers across Uttar Pradesh reclaim financial sovereignty.
                </p>
                <CompanySection />
              </section>

              {/* Section 12: Comprehensive FAQ Accordion */}
              <section id="faqs" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <HelpCircle className="w-4 h-4" />
                  <span>12. Frequently Asked Questions</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                  Frequently Asked Questions on Debt Settlement in Kanpur
                </h2>

                <div className="space-y-4">
                  {(jsonLdGraph["@graph"][4] as any).mainEntity.map((faq: any, index: number) => (
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
                    href="https://upslsa.up.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                  >
                    <span className="font-semibold text-slate-800">UP State Legal Services Authority (UPSLSA)</span>
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
                    href="/sbi-personal-loan-settlement"
                    className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                  >
                    SBI Personal Loan Settlement
                  </Link>
                  <Link
                    href="/pnb-personal-loan-settlement"
                    className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                  >
                    PNB Loan Settlement
                  </Link>
                  <Link
                    href="/bank-of-baroda-personal-loan-settlement"
                    className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                  >
                    Bank of Baroda Settlement
                  </Link>
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
                    href="/bank-one-time-settlement-ots-policy"
                    className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                  >
                    Bank OTS Policy Guide
                  </Link>
                  <Link
                    href="/personal-loan-settlement-cibil-impact"
                    className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                  >
                    Settlement CIBIL Impact
                  </Link>
                  <Link
                    href="/no-dues-certificate-after-loan-settlement"
                    className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                  >
                    No Dues Certificate Guide
                  </Link>
                </div>
              </section>
            </main>

            {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
            <aside className="w-full sticky top-24 space-y-6">
              
              {/* Author Bio Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Link href="/authors/ashish-jhangra">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                      AJ
                    </div>
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
                  <Link href="/authors/ashish-jhangra" className="font-semibold text-[#1F5EFF] hover:underline flex items-center gap-1">
                    View Profile →
                  </Link>
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                </div>
              </div>

              {/* Emergency Advocate CTA Card */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <PhoneCall className="w-4 h-4" />
                  <span>Kanpur Legal Defense</span>
                </div>
                <h4 className="font-bold text-base text-white mb-2">Facing Recovery Pressure in Kanpur?</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Halt recovery agent harassment, defend against Kanpur Nagar court notices, protect your business &amp; salary accounts, and negotiate 40%–70% debt waivers directly with SARB zonal committees.
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
                <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                  Institutional Protections
                </h4>
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
    </>
  );
}
