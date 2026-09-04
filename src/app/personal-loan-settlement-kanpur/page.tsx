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
    'Learn how to settle personal loans legally in Kanpur. Stop recovery harassment and negotiate up to 60% bank OTS waiver via SettleLoans.',
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
            "text": "Many leather units and shops in Jajmau, Panki, Dada Nagar, and Nayaganj face cash flow drops. Banks then hire private recovery agents and send court notices. Our Kanpur debt advocates enforce RBI rules to stop harassment. They defend you in court. They also negotiate 40% to 70% OTS waivers directly with bank zonal desks on Mall Road and Civil Lines."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank freeze my business or personal savings account under Section 171 Banker's Lien in Kanpur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 171 of the Indian Contract Act, 1872, a bank holds a general lien only over accounts in its own branch network. A lender cannot touch funds in a different bank without a civil court order. Also, Section 60(1) CPC protects your wages and basic living funds from attachment."
          }
        },
        {
          "@type": "Question",
          "name": "Can the Kanpur Police Commissionerate arrest or summon me for defaulting on an unsecured personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Loan default is a civil dispute, not a crime. Police stations in Kotwali, Civil Lines, Kalyanpur, or Jajmau cannot issue notices or arrest you for unpaid debt. The Supreme Court confirmed this rule in the Arnesh Kumar and Lalita Kumari cases."
          }
        },
        {
          "@type": "Question",
          "name": "How should I handle Section 138 NI Act or Section 25 PSSA summons from Kanpur Nagar District Court?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You get a 15-day legal window to reply to court notices in Kanpur Nagar District Court. Our advocates file a Vakalatnama on your behalf. We submit a formal hardship reply. Then, we move your case to the National Lok Adalat for a binding OTS compromise decree."
          }
        },
        {
          "@type": "Question",
          "name": "How does the District Legal Services Authority (DLSA) Kanpur Nagar Lok Adalat resolve loan defaults?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DLSA Kanpur Nagar holds regular National Lok Adalats to resolve loan disputes quickly. Under Section 21 of the Legal Services Authorities Act, 1987, a Lok Adalat award acts as a final civil court decree. No party can appeal it. This gives you complete legal closure."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver can Kanpur borrowers achieve through bank OTS policies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Waivers depend on default age (90 to 180+ days) and proven hardship. Our Kanpur advocates secure 40% to 70% principal waivers for genuine cases. We also get banks to waive 100% of penal interest and late fees."
          }
        },
        {
          "@type": "Question",
          "name": "How do advocates protect Kanpur factory owners and shopkeepers from recovery agent visits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We send Cease-and-Desist notices under RBI Master Directions to bank Principal Nodal Officers on Mall Road. This stops agents from visiting your Jajmau factory, Panki workshop, Naveen Market shop, or home. We report any violation to the Police Commissionerate and the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "Can the entire debt settlement process in Kanpur be managed digitally and legally?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. SettleLoans provides a full digital debt defense service. We review your loans, draft replies. And talk to bank SARB teams online. If court hearings occur, our empanelled Kanpur advocates represent you under a formal Vakalatnama."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory timeline for banks to provide a No Dues Certificate (NDC) post-settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, lenders must give you a zero-balance No Dues Certificate within 30 days. They must also update credit bureau records. If they delay, the bank must pay you ₹5,000 for each day of delay."
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
          "reviewBody": "I run a leather unit in Jajmau. Cancelled export orders hurt my cash flow on a ₹22 Lakh loan. SettleLoans sent legal notices to the bank on Mall Road and represented me in Kanpur Nagar District Court. They secured a 65% OTS waiver with an authentic No Dues Certificate.",
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
          "reviewBody": "My fabric business in General Ganj faced severe cash flow issues on three loans totaling ₹14 Lakhs. SettleLoans stopped all recovery harassment. They settled my debt through the DLSA Kanpur Nagar Lok Adalat with a 58% waiver.",
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
          "reviewBody": "I work in Panki Industrial Area. Medical bills forced me to default on an ₹8.5 Lakh personal loan. SettleLoans protected my salary account under Section 171 rules. They negotiated a 50% waiver directly with the bank's Stressed Assets branch.",
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
          "reviewBody": "An NBFC sent me a Section 25 PSSA notice in Civil Lines. SettleLoans drafted a strong legal hardship reply. We reached a 60% settlement. I paid via RTGS. And the bank issued my zero-balance closure letter in 20 days.",
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

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Personal Loan Settlement in Kanpur: Legal OTS Guide</h1>

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
                  Loan default in Kanpur is a civil matter under the Indian Contract Act, 1872. You have strong rights under RBI Fair Practices rules. By replying to Section 138/25 notices in Kanpur Nagar District Court, you stay protected. Our advocates deal directly with Zonal SARB desks on Mall Road and Civil Lines to stop agent harassment and win 40%–70% OTS debt waivers.
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
                    <span><strong>Civil Nature of Default:</strong> Loan default is purely a civil contractual matter. The Kanpur Police cannot file FIRs or arrest you for unpaid commercial debts.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Account Protection:</strong> Under Section 60(1) CPC and Section 171 Contract Act rules, banks cannot touch your accounts in other banks without a court order.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Kanpur Nagar Court Defense:</strong> Early advocate replies to Section 138 NI Act and Section 25 PSSA notices stop criminal escalation. They push lenders to settle in Lok Adalat.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>SARB Haircut Slabs (40%–70%):</strong> Talking directly to Zonal SARB desks on Mall Road unlocks 40% to 70% principal waivers. It also waives all penal fees.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Mandatory ₹0 NDC within 30 Days:</strong> Under RBI Circular RBI/2023-24/60, banks must deliver a zero-balance NDC within 30 days. Delays cost them ₹5,000 per day.</span>
                  </li>
                </ul>
              </div>

              {/* Section 1: Kanpur Industrial & Trade Realities */}
              <section id="kanpur-industrial-debt-landscape" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>1. Kanpur Industrial &amp; Trade Realities</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Debt Landscape &amp; Borrowers in Kanpur</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Kanpur is the main industrial city of Central Uttar Pradesh. It hosts leather tanning and export units in Jajmau, factories in Panki and Dada Nagar. And defense units. It also has major trade markets in Nayaganj, General Ganj, Birhana Road, and Naveen Market. Dense shopping hubs thrive in Gumti No. 5 and Govind Nagar. Many professionals also work at IIT Kanpur and GSVM Medical College.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  In recent years, PSU banks like SBI, PNB, and Bank of Baroda gave out large personal loans. Private lenders like HDFC, ICICI, Axis, and Bajaj Finance did the same. But export tariff changes hit leather exports hard. Factory costs rose and local trade slowed down. Many business owners and salaried staff now struggle to pay monthly EMIs.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Banks often pass overdue accounts to private recovery agencies in Civil Lines and Swaroop Nagar. These agents visit tanneries in Jajmau, factory gates in Panki. And homes in Kakadeo, Kidwai Nagar, and Barra. This harassment violates RBI rules. You have legal ways to stop agent visits and settle your loans for less through a One-Time Settlement (OTS).
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                      <strong>Statutory Protection in Kanpur:</strong> Involuntary loan default is a civil breach of contract under the Indian Contract Act, 1872. It is not a crime. Recovery agents and bank staff cannot summon you to police stations or threaten you with jail.
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">NPA Delinquency Aging in Kanpur</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Under RBI Prudential Norms (IRACP), overdue accounts move through Special Mention Account stages (SMA-0 to SMA-2) in the first 90 days. After 90 days of missed payments, the bank marks the account as a Non-Performing Asset (NPA). The bank must then set aside capital reserves between 15% and 100% for the unpaid loan.
                </p>

                {/* 4-Sided Bordered Delinquency Table */}
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr>
                        <th>default Stage.</th>
                        <th>Aging Threshold.</th>
                        <th>Mandatory Provisioning.</th>
                        <th>Institutional Strategy &amp. OTS Scope.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-semibold text-slate-900">SMA-0 &amp. SMA-1.</td>
                        <td>1 – 60 Days Overdue.</td>
                        <td>Standard Capital Buffer.</td>
                        <td>Automated reminder calls and late fees. major debt waivers are not offered yet.</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">SMA-2.</td>
                        <td>61 – 90 Days Overdue.</td>
                        <td>Pre-NPA Watchlist.</td>
                        <td>Banks send pre-NPA demand notices. You can ask for loan restructuring or tenure extension.</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Substandard NPA.</td>
                        <td>91 – 365 Days Overdue.</td>
                        <td>15% – 25% Profit Provision.</td>
                        <td>Account moves to the Zonal SARB on Mall Road. You can negotiate 35% to 50% principal waivers.</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Doubtful (D1 / D2).</td>
                        <td>1 – 3 Years Overdue.</td>
                        <td>40% – 100% Capital Lock.</td>
                        <td>Banks want to clean their balance sheets. You can secure 50% to 65% principal waivers.</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Loss Asset.</td>
                        <td>3+ Years Overdue.</td>
                        <td>100% Written-off Balance.</td>
                        <td>The bank writes off the debt in its books. You can get deep OTS waivers up to 70% in Lok Adalat.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  The Hon&apos;ble Allahabad High Court has ruled that banks cannot use force or extra-judicial tactics to recover debt. Lenders remain liable for any harassment by recovery agents. All debt recovery must follow due legal process.
                </p>
              </section>

              {/* Section 3: Statutory Legal Notice Defense in Kanpur Nagar District Court */}
              <section id="kanpur-nagar-court-notice-defense" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Gavel className="w-4 h-4" />
                  <span>3. Kanpur Nagar Court &amp; Section 138/25 Defense</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Defending Legal Notices in Kanpur Nagar Courts</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  When a cheque or NACH bounce happens, banks send legal notices. They issue notices under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> or <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong>. They threaten cases in the Chief Judicial Magistrate (CJM) Courts at Civil Lines.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  You have 15 days to reply after receiving a statutory notice. Do not ignore these notices. Ignoring them allows the bank to file a court complaint. Our experienced advocates draft a solid reply. We show your genuine financial hardship from business drops or medical bills. We dispute illegal fees and propose an amicable OTS compromise.
                </p>
                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  Court trials in Kanpur Nagar take years and cost banks heavy legal fees. A well-drafted legal reply makes bank managers transfer your file to Zonal SARB desks or the National Lok Adalat for a quick settlement.
                </p>
              </section>

              {/* Section 4: Banker's Right of General Lien & Kanpur Account Shielding */}
              <section id="bankers-lien-section-171-salary-protection" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span>4. Section 171 Lien &amp; Account Shielding</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Banker&apos;s Right of General Lien in Kanpur</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Under Section 171 of the Indian Contract Act, 1872, a bank has a lien over accounts in its own branches. If you miss loan dues, that bank can take funds from your linked savings or current accounts.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  However, the bank cannot take money from your accounts in other banks without a court order. Also, <strong>Section 60(1) of the Code of Civil Procedure (CPC), 1908</strong> strictly exempts subsistence wages and essential working funds from attachment. If you face loan stress, shift your salary or business funds to a new bank and stop electronic NACH mandates.
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
                  The chart below shows how debt settlement works step-by-step in Kanpur. It covers notice defense in Kanpur Nagar courts, RBI anti-harassment shield, Zonal SARB talks. And your final ₹0 No Dues Certificate.
                </p>

                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg my-8 bg-slate-900">
                  <img
                    src="/images/infographics/personal-loan-settlement-kanpur.jpg"
                    alt="Debt Settlement Process in Kanpur and Uttar Pradesh Resolution Roadmap"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-slate-900/90 border-t border-slate-800 text-center">
                    <p className="text-xs text-slate-300 font-medium">
                      Figure 1.0: End-to-End Kanpur Debt Settlement Framework, Court Notice Defense &amp. Zonal SARB Resolution Protocol.
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">OTS Haircut Mechanics &amp; NPV in Kanpur</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Bank Settlement Committees on Mall Road and Civil Lines use a Net Present Value (NPV) formula to assess settlement offers. Fighting cases in civil courts or DRT costs banks high legal fees, staff time. And locked capital.
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
                    Where C_t is expected recovery, r is the discount rate. And deductions cover years of court costs and locked NPA funds.
                  </p>
                </div>

                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  A quick lump-sum payment frees up the bank&apos;s locked funds and ends legal costs. Because of this, bank credit committees approve <strong>40% to 70% principal waivers</strong> and waive 100% of penal charges.
                </p>
              </section>

              {/* Section 7: Anti-Harassment Protections & Enforcing RBI Guidelines in Kanpur */}
              <section id="rbi-anti-harassment-kanpur-police-limits" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>7. RBI Anti-Harassment &amp; Police Limits</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Enforcing RBI Fair Practices &amp; Police Interference in Kanpur</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  The <strong>RBI Master Directions on Recovery Agents (2022)</strong> strictly forbid collection calls before 8:00 AM and after 7:00 PM. Agents cannot use abusive words or visit your workplace, factory, or family members. Agents must carry bank ID and respect your privacy.
                </p>
                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  The Supreme Court ruled in the <em>Arnesh Kumar</em> and <em>Lalita Kumari</em> cases that police cannot step into civil loan disputes. The Kanpur Police cannot call you to police stations for unpaid debts. If agents harass you, our legal notices and complaints to the <strong>RBI Integrated Ombudsman (CMS Portal)</strong> stop them fast.
                </p>
              </section>

              {/* Section 8: 5-Step SARB Settlement Protocol in Kanpur */}
              <section id="kanpur-advocate-settlement-protocol" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Layers className="w-4 h-4" />
                  <span>8. 5-Step Zonal SARB Settlement Protocol</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">5-Step Settlement Protocol in Kanpur</h2>
                <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                  Settling your bank debt in Kanpur follows a clear, advocate-led five-step legal process:
                </p>

                <div className="space-y-4 my-6">
                  <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">Financial Hardship Dossier Compilation</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We check all your loans and gather hardship proof. This includes lost orders, GST returns, business accounts, or medical bills that show why you cannot pay regular EMIs.
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
                        We send formal legal notices under RBI rules to the bank&apos;s Principal Nodal Officer. This protects your Panki factory, Naveen Market shop. And home from agent visits.
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
                        Our advocates draft clear legal replies to Section 138 NI Act and Section 25 PSSA notices within 15 days. This protects you in Civil Lines magistrate courts.
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
                        We skip third-party agents and speak directly with bank Zonal Stressed Assets Recovery Branches on Mall Road. We negotiate 40% to 70% debt waivers.
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
                        We check the official bank sanction letter before you pay via RTGS. After payment, we ensure the bank delivers your zero-balance No Dues Certificate on time.
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Sanction Letter Audit &amp; NDC in Kanpur</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Never pay money based on phone calls or WhatsApp messages. A valid <strong>OTS Sanction Letter</strong> must come on official bank letterhead. It must show bank seals, officer codes, the exact agreed amount, a full loan closure clause. And a promise to issue your NDC.
                </p>
                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  Under <strong>RBI Circular RBI/2023-24/60</strong>, the bank must give you the <strong>No Dues Certificate (NDC)</strong> within <strong>30 calendar days</strong> of settlement. If they delay, the bank must pay you <strong>₹5,000 per day</strong>. Once paid, credit bureaus update your status to &apos;Settled&apos. with ₹0 dues. You can rebuild your CIBIL score back to 750+ within 18 to 24 months with steady financial habits.
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
                  Compare the main debt resolution paths in Kanpur to find the best fit for your budget, debt size. And goals:
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
                        <td className="font-semibold text-slate-900">Direct Zonal SARB Settlement (Kanpur).</td>
                        <td>40% – 70% Principal Haircut.</td>
                        <td>Complete (Bank NDC Issued).</td>
                        <td>&apos;Settled&apos. / ₹0 Dues.</td>
                        <td>3 to 6 Weeks.</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">DLSA Lok Adalat (Kanpur Nagar Courts).</td>
                        <td>45% – 70% Principal Haircut.</td>
                        <td>Absolute (Civil Court Decree).</td>
                        <td>&apos;Settled&apos. / ₹0 Dues.</td>
                        <td>Quarterly Cycles.</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Bank Loan Restructuring.</td>
                        <td>0% Haircut (Tenure Extension).</td>
                        <td>Conditional on Monthly EMI.</td>
                        <td>&apos;Restructured&apos. / Active Debt.</td>
                        <td>2 to 4 Weeks.</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Civil Court Litigation (Civil Lines / HC).</td>
                        <td>Uncertain (Judicial Discretion).</td>
                        <td>Subject to Multi-Year Appeal.</td>
                        <td>&apos;Suit Filed&apos. / Compounding.</td>
                        <td>4 to 7 Years.</td>
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
                  Handling debt stress in Kanpur requires strong legal help. You need to stop agent visits, answer court notices. And negotiate directly with bank credit committees. SettleLoans gives you full legal support so you can resolve your debts and regain peace of mind.
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
                    <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Ashish specializes in RBI settlement rules, NPA laws. And banking disputes. He brings over a decade of debt resolution experience.
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
                <div className="font-bold text-base text-white mb-2">Facing Recovery Pressure in Kanpur?</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Stop recovery agent visits, answer Kanpur Nagar court notices, protect your bank accounts. And secure 40%–70% debt waivers directly with bank zonal teams.
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
    </>
  );
}
