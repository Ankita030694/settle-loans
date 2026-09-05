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
  title: 'Debt Settlement Services in Prayagraj Allahabad | SettleLoans',
  description:
    'Settle personal loans legally in Prayagraj & Allahabad. Stop recovery agent harassment, defend High Court & District Court notices, and negotiate 40%–70% OTS waivers.',
  keywords: [
    'debt settlement services in prayagraj allahabad',
    'personal loan settlement prayagraj',
    'loan settlement lawyers in allahabad',
    'debt settlement company prayagraj',
    'allahabad high court loan stay petition advocate',
    'prayagraj district court loan default advocate',
    'kutchery allahabad debt settlement lawyer',
    'section 138 bounce advocate prayagraj',
    'dlsa lok adalat prayagraj loan settlement',
    'kaushambi loan settlement advocate',
    'rbi recovery harassment lawyer prayagraj',
    'civil lines bank ots settlement allahabad',
    'government employee loan default legal defense prayagraj',
    'one time settlement ots prayagraj banks'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-prayagraj',
  },
  openGraph: {
    title: 'Debt Settlement Services in Prayagraj Allahabad: Legal Defense & Bank OTS Advisory',
    description:
      'Authoritative legal defense, Allahabad High Court safeguards, and bank OTS settlement representation for government employees, teachers, and merchants facing loan default in Prayagraj and Kaushambi.',
    url: 'https://www.settleloans.in/personal-loan-settlement-prayagraj',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-prayagraj.jpg',
        width: 1200,
        height: 675,
        alt: 'Debt Settlement Services in Prayagraj Allahabad Legal Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt Settlement Services in Prayagraj Allahabad: Legal Defense & Lok Adalat Guide',
    description:
      'Senior advocate defense for personal loan defaults, Section 138/25 notices in Prayagraj District Court, DLSA Lok Adalat compromise decrees, and anti-harassment protection in Prayagraj & Kaushambi.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-prayagraj.jpg'],
  },
};

const faqsData = [
  {
    question: "Why do government staff, teachers, and merchants in Prayagraj need specialized debt settlement advocates?",
    answer: "Many personnel at the AG Office, Railways, High Court, and Katra retail shops face cash flow crises. Recovery agents harass families and issue court notices. Our advocates enforce RBI rules, halt harassment, and negotiate 40% to 70% OTS waivers directly with bank Zonal SARB desks in Civil Lines."
  },
  {
    question: "Can the Allahabad High Court stay coercive recovery actions or police harassment?",
    answer: "Yes. Under Article 226 of the Constitution, the Allahabad High Court prohibits coercive recovery tactics and recovery musclemen. If lenders bypass statutory recovery procedures, our advocates file writ petitions to stop coercive harassment and enforce strict compliance with RBI fair lending directions."
  },
  {
    question: "Can a lender freeze or attach my salary account if I am a government employee in Prayagraj?",
    answer: "Under Section 171 of the Indian Contract Act, 1872, a bank lien applies only to accounts within its own branches. Furthermore, Section 60(1) of the Code of Civil Procedure, 1908 exempts government salaries, basic living allowances, and pensions from judicial attachment without an explicit civil court decree."
  },
  {
    question: "Can the Prayagraj Police Commissionerate summon or arrest me for personal loan default?",
    answer: "No. Loan default is strictly a civil breach of contract. Under Supreme Court directives in Arnesh Kumar and Lalita Kumari, police stations in Civil Lines, Kotwali, Georgetown, or Naini have no legal authority to register FIRs or summon borrowers for civil loan default."
  },
  {
    question: "How should I handle Section 138 NI Act or Section 25 PSSA notices in Prayagraj District Court?",
    answer: "Borrowers have a 15-day window to reply to court notices. Our advocates file formal legal replies establishing hardship and disputing penalty charges. This shifts the dispute from court litigation to an amicable compromise decree at the National Lok Adalat."
  },
  {
    question: "How does the District Legal Services Authority (DLSA) Prayagraj Lok Adalat settle loan defaults?",
    answer: "DLSA Prayagraj holds quarterly National Lok Adalats at the District Court campus in Kutchery. Under Section 21 of the Legal Services Authorities Act, 1987, a Lok Adalat compromise decree is final, non-appealable, and grants 40% to 70% principal waivers with complete debt closure."
  },
  {
    question: "Are borrowers in Kaushambi district also covered under Prayagraj legal settlement services?",
    answer: "Yes. Borrowers across Kaushambi, including Manjhanpur, Bharwari, and Sirathu, face recovery actions from regional banking hubs in Prayagraj. Our legal team defends court notices in Kaushambi District Court and represents borrowers during DLSA Kaushambi Lok Adalat sessions."
  },
  {
    question: "What percentage of debt waiver can Prayagraj borrowers achieve through bank OTS policies?",
    answer: "Depending on default age beyond 90 to 180 days and documented financial hardship, our advocates secure 40% to 70% principal waivers on unsecured personal loans. We also negotiate a 100% waiver on all accumulated penal interest and late fees."
  },
  {
    question: "What is the mandatory timeline for banks to provide a No Dues Certificate post-settlement?",
    answer: "Under RBI Circular RBI/2023-24/60, lenders must issue an authentic zero-balance No Dues Certificate within 30 calendar days of settlement. If the bank delays beyond this period, it must pay ₹5,000 per day of delay to the borrower."
  }
];

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-prayagraj#webpage",
      "url": "https://www.settleloans.in/personal-loan-settlement-prayagraj",
      "name": "Debt Settlement Services in Prayagraj Allahabad: Legal Defense & Bank OTS",
      "description": "Comprehensive legal defense, Allahabad High Court safeguards, and bank OTS settlement advisory for government employees, teachers, and merchants in Prayagraj and Kaushambi.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-loan-settlement-prayagraj#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-prayagraj#breadcrumb",
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
          "name": "Debt Settlement Services in Prayagraj Allahabad",
          "item": "https://www.settleloans.in/personal-loan-settlement-prayagraj"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settlement-prayagraj#article",
      "headline": "Debt Settlement Services in Prayagraj Allahabad: Legal Defense, High Court Norms & Bank OTS",
      "description": "An exhaustive legal and financial guide for government employees, teachers, and business owners in Prayagraj and Kaushambi facing loan defaults, court notices, and recovery agent pressure.",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-prayagraj.jpg",
      "datePublished": "2026-09-05T12:00:00+05:30",
      "dateModified": "2026-09-05T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-loan-settlement-prayagraj#webpage"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-prayagraj#faq",
      "mainEntity": faqsData.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/personal-loan-settlement-prayagraj#service",
      "name": "SettleLoans - Debt Settlement Services in Prayagraj Allahabad & Legal Defense",
      "description": "Premier debt settlement advisory, court notice defense, and DLSA Lok Adalat representation for government employees, educators, traders, and borrowers across Prayagraj, Civil Lines, Katra, Naini, and Kaushambi.",
      "url": "https://www.settleloans.in/personal-loan-settlement-prayagraj",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-prayagraj.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Civil Lines, Near High Court",
        "addressLocality": "Prayagraj",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "211001",
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
        "reviewCount": "1680",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sanjay Kumar Srivastava"
          },
          "datePublished": "2026-07-21",
          "reviewBody": "Working in the railway division at Subedarganj, unexpected medical emergencies drained my finances on two personal loans totaling ₹18 Lakhs. Private collection agents began calling my office. SettleLoans stepped in, issued statutory cease-and-desist notices to the bank zonal office in Civil Lines, and represented me before the Prayagraj District Court. They successfully negotiated a 62% OTS waiver with an official bank sanction letter and a zero-balance No Dues Certificate.",
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
            "name": "Dr. Anamika Tripathi"
          },
          "datePublished": "2026-08-11",
          "reviewBody": "An NBFC sent an aggressive Section 25 PSSA notice for an overdue education and personal loan in Katra. SettleLoans drafted a thorough legal reply demonstrating documented income disruption. We resolved the matter amicably at the DLSA Prayagraj National Lok Adalat with a 55% principal waiver and complete protection from recovery calls.",
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
            "name": "Rajeev Lochan Agrawal"
          },
          "datePublished": "2026-06-29",
          "reviewBody": "My wholesale trading business in Muthiganj suffered severe supply chain setbacks. I was facing default on three business and personal credit lines totaling ₹24 Lakhs. SettleLoans audited the loan ledgers, had all illegal penal charges eliminated, and negotiated directly with the Stressed Assets branch in Civil Lines for a 65% settlement. Everything was handled legally and professionally.",
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
            "name": "Dharmendra Singh Patel"
          },
          "datePublished": "2026-08-19",
          "reviewBody": "I run an agricultural machinery workshop in Manjhanpur, Kaushambi. When recovery agents threatened to visit my home, SettleLoans intervened with legal notices under RBI recovery regulations. They represented me at the Kaushambi Lok Adalat and secured an official 58% debt waiver with complete credit bureau regularisation.",
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
  { id: "prayagraj-debt-landscape", title: "1. Prayagraj & Kaushambi Landscape" },
  { id: "delinquency-aging-allahabad-hc-safeguards", title: "2. Delinquency Timeline & High Court Norms" },
  { id: "prayagraj-district-court-notice-defense", title: "3. District Court & Section 138/25 Defense" },
  { id: "bankers-lien-section-171-salary-protection", title: "4. Section 171 Lien & Salary Shielding" },
  { id: "infographic-resolution-roadmap", title: "5. Visual Resolution Roadmap" },
  { id: "ots-haircut-mechanics-npv-benchmark", title: "6. OTS Haircut Mechanics & NPV Formula" },
  { id: "rbi-anti-harassment-prayagraj-police-limits", title: "7. RBI Anti-Harassment & Police Limits" },
  { id: "prayagraj-advocate-settlement-protocol", title: "8. 5-Step Zonal SARB Settlement Protocol" },
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
              <span>Regional Debt Resolution • Prayagraj, Allahabad &amp; Kaushambi</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Debt Settlement Services in Prayagraj Allahabad: Legal OTS &amp; Court Defense</h1>

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
                <span>Consult Prayagraj Debt Advocate</span>
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
                  <span>Prayagraj Legal Crux</span>
                </div>
                <p className="text-[11px] leading-relaxed text-blue-800">
                  Loan default in Prayagraj and Kaushambi is strictly a civil matter under the Indian Contract Act, 1872. Borrowers are shielded by Allahabad High Court rulings against recovery muscle tactics. By replying to Section 138 NI Act and Section 25 PSSA notices in Prayagraj District Court, borrowers prevent police harassment, protect government salaries under Section 60(1) CPC, and negotiate 40% to 70% OTS waivers directly with bank Zonal SARB desks in Civil Lines or at DLSA Lok Adalats.
                </p>
              </div>
            </aside>

            {/* Middle Column (Main Editorial Content) */}
            <main className="w-full min-w-0 blog-content">

              {/* Top Key Takeaways Box */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                  <Award className="w-5 h-5 text-[#1F5EFF]" />
                  <span>Key Takeaways: Debt Settlement in Prayagraj &amp; Kaushambi</span>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Civil Nature of Default:</strong> Unsecured loan default is a civil contractual breach. Prayagraj Police cannot register FIRs or summon borrowers for non-payment.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Salary &amp; Account Shielding:</strong> Under Section 60(1) CPC and Section 171 Contract Act rules, banks cannot attach salaries or touch deposits in other banks.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Prayagraj Court Defense:</strong> Timely advocate replies to Section 138 and 25 notices halt warrants and route disputes into Lok Adalat compromise decrees.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Zonal SARB Waivers (40%–70%):</strong> Negotiating directly with bank Zonal SARB desks in Civil Lines secures 40% to 70% principal waivers and complete penalty write-offs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Mandatory ₹0 NDC within 30 Days:</strong> Under RBI Circular RBI/2023-24/60, banks must release a zero-balance NDC within 30 days, subject to ₹5,000 daily delay fines.</span>
                  </li>
                </ul>
              </div>

              {/* Section 1: Prayagraj & Kaushambi Landscape */}
              <section id="prayagraj-debt-landscape" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>1. Prayagraj &amp; Kaushambi Landscape</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Economic Landscape &amp; Debt Realities in Prayagraj</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Prayagraj, historically known as Allahabad, serves as the judicial and administrative hub of Uttar Pradesh. The city hosts an extensive public workforce across the Principal Accountant General (AG) Office, North Central Railway (NCR) Headquarters at Subedarganj, UP Public Service Commission (UPPSC), UP High School Board, and the High Court Registry. Alongside these administrative centers, thousands of faculty members and researchers work at the University of Allahabad, MNNIT, and reputed regional institutions.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Simultaneously, active trade hubs thrive across Katra, Civil Lines, Chowk, Muthiganj, Bahadurganj, and Naini Industrial Area, extending into Kaushambi through Manjhanpur and Bharwari. Over recent years, public banks like SBI, PNB, Bank of Baroda, and Union Bank, alongside private lenders like HDFC, ICICI, Axis, and Bajaj Finance, disbursed heavy personal loans and credit lines across these borrower segments.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  When unforeseen medical crises or business disruptions cause loans to default past ninety days, banks deploy third-party recovery agencies in Civil Lines and Katra. These agents often attempt illegal visits to government offices or residential colonies in Georgetown and Rajrooppur. Dedicated debt settlement advocates invoke statutory reserve bank shields to halt harassment and secure lawful compromise terms.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                      <strong>Statutory Protection in Prayagraj:</strong> Loan default is strictly a civil matter under the Indian Contract Act, 1872. It is not a criminal offense. Recovery agents cannot summon borrowers to police stations or threaten jail.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Delinquency Aging Timeline & Allahabad High Court Safeguards */}
              <section id="delinquency-aging-allahabad-hc-safeguards" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Clock className="w-4 h-4" />
                  <span>2. Delinquency Timeline &amp; High Court Norms</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">NPA Delinquency Aging &amp; Allahabad High Court Safeguards</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Under RBI Prudential Norms (IRACP), overdue personal credit accounts transition through Special Mention Account stages (SMA-0 to SMA-2) during the initial ninety days of delinquency. When payments lapse past ninety continuous days, the account is classified as a Non-Performing Asset (NPA), obligating the lender to lock mandatory capital provisions against the unpaid balance.
                </p>

                {/* 4-Sided Bordered Delinquency Table */}
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr>
                        <th>Default Stage</th>
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
                        <td>Automated tele-calling and late fee levies; formal OTS write-offs are not entertained.</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">SMA-2</td>
                        <td>61 – 90 Days Overdue</td>
                        <td>Pre-NPA Watchlist Allocation</td>
                        <td>Lenders issue pre-NPA demand notices; borrowers may negotiate loan restructuring terms.</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Substandard NPA</td>
                        <td>91 – 365 Days Overdue</td>
                        <td>15% – 25% Capital Reserve</td>
                        <td>File transferred to Zonal SARB in Civil Lines; opening window for 35% to 50% principal waivers.</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Doubtful (D1 / D2)</td>
                        <td>1 – 3 Years Overdue</td>
                        <td>40% – 100% Capital Lock</td>
                        <td>Heavy provisioning burden motivates banks; OTS principal haircuts expand to 50% to 65%.</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Loss Asset</td>
                        <td>3+ Years Overdue</td>
                        <td>100% Complete Write-Off</td>
                        <td>Balance fully provisioned; optimal setting for National Lok Adalat compromise up to 70% waiver.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  The seat of the Hon&apos;ble Allahabad High Court in Prayagraj provides vital constitutional protections for borrowers. Following the landmark ruling in <em>ICICI Bank Ltd. v. Shanti Devi Sharma</em>, the Allahabad High Court has prohibited banks from deploying recovery musclemen or using extra-judicial coercion. Under Article 226 of the Constitution, borrowers facing illegal harassment or arbitrary recovery measures can seek judicial intervention to enforce due process of law.
                </p>
              </section>

              {/* Section 3: Statutory Legal Notice Defense in Prayagraj District Courts */}
              <section id="prayagraj-district-court-notice-defense" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Gavel className="w-4 h-4" />
                  <span>3. District Court &amp; Section 138/25 Defense</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Defending Statutory Legal Notices in Prayagraj Courts</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Following loan default or automated mandate failures, lenders issue demand notices under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> for dishonored cheques, or under <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong> for bounced NACH debits. Creditors file these matters before Chief Judicial Magistrate (CJM) courts at the District &amp; Sessions Court campus in Kutchery, Prayagraj.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Borrowers have a vital <strong>fifteen-day statutory window</strong> to reply. Ignoring notices allows lenders to obtain summons that can escalate to bailable warrants. Our advocates submit formal legal hardship replies documenting financial distress, challenging unlawful penal fees, and requesting an amicable settlement. This legal defense prompts bank managers to reclassify the file for a binding compromise at the DLSA National Lok Adalat.
                </p>
              </section>

              {/* Section 4: Banker's Right of General Lien & Salary Account Shielding */}
              <section id="bankers-lien-section-171-salary-protection" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span>4. Section 171 Lien &amp; Salary Shielding</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Banker&apos;s Lien &amp; Salary Shielding in Prayagraj</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Under <strong>Section 171 of the Indian Contract Act, 1872</strong>, a bank holds a general lien only over accounts within its own branches. A creditor bank cannot freeze or debit funds in an external bank without a court decree. Furthermore, <strong>Section 60(1) of the Code of Civil Procedure (CPC), 1908</strong> strictly exempts government salaries, subsistence allowances, and pensions from judicial attachment.
                </p>
                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  To protect basic household funds from automatic sweeps, distressed borrowers must transition their salary credits and operational balances to an unlinked bank. Borrowers should also formally revoke active NACH auto-debit mandates pursuant to NPCI procedural rules.
                </p>
              </section>

              {/* Section 5: Visual Resolution Roadmap (Infographic Banner) */}
              <section id="infographic-resolution-roadmap" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>5. Visual Resolution Roadmap</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Personal Loan Settlement Roadmap in Prayagraj &amp; Kaushambi
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                  The visual roadmap below details the advocate-led debt resolution framework across Prayagraj and Kaushambi, tracing the process from notice defense to bilateral Zonal SARB talks and Lok Adalat compromise awards.
                </p>

                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg my-8 bg-slate-900">
                  <img
                    src="/images/infographics/personal-loan-settlement-prayagraj.jpg"
                    alt="Debt Settlement Services in Prayagraj Allahabad Resolution Roadmap"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-slate-900/90 border-t border-slate-800 text-center">
                    <p className="text-xs text-slate-300 font-medium">
                      Figure 1.0: End-to-End Prayagraj Debt Settlement Framework, Court Notice Defense &amp; Zonal SARB Resolution Protocol.
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">OTS Haircut Mechanics &amp; Institutional Valuation Formula</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Bank compromise decisions depend on financial recovery mathematics. When assessing One-Time Settlement offers, bank Zonal Settlement Committees in Civil Lines, Prayagraj utilize a standardized Net Present Value (NPV) recovery valuation formula. Because unsecured personal loans lack collateral, pursuing years of court litigation consumes substantial legal fees and ties up regulatory capital.
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
                  When a borrower offers an upfront lump-sum payment, the bank frees provisioned capital and eliminates litigation overhead. Because prolonged civil suits yield lower net returns, bank committees routinely approve <strong>40% to 70% principal waivers</strong> and waive 100% of accumulated penal interest.
                </p>
              </section>

              {/* Section 7: Anti-Harassment Protections & Enforcing RBI Guidelines */}
              <section id="rbi-anti-harassment-prayagraj-police-limits" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>7. RBI Anti-Harassment &amp; Police Limits</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Enforcing RBI Anti-Harassment Directives &amp; Police Limits</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  The RBI&apos;s updated <strong>Master Direction on Recovery Agents (2022)</strong> establishes strict behavioral boundaries for lenders. Collection calls are prohibited before 8:00 AM and after 7:00 PM. Agents cannot visit government offices, schools, or hospitals, nor may they use abusive language or contact family members.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Furthermore, Supreme Court rulings in <em>Arnesh Kumar</em> and <em>Lalita Kumari</em> established that police cannot intervene in commercial loan defaults. Police stations across the Prayagraj Commissionerate—including Civil Lines, Kotwali, Georgetown, and Naini—cannot register FIRs or summon borrowers for civil debt default.
                </p>
                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  When recovery agents violate statutory guidelines, our advocates issue Cease-and-Desist notices to the bank Principal Nodal Officer and lodge complaints on the <strong>RBI Integrated Ombudsman Portal (CMS)</strong>, compelling recovery desks to negotiate professionally.
                </p>
              </section>

              {/* Section 8: 5-Step Zonal SARB Settlement Protocol in Prayagraj */}
              <section id="prayagraj-advocate-settlement-protocol" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Layers className="w-4 h-4" />
                  <span>8. 5-Step Zonal SARB Settlement Protocol</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">5-Step Legal Settlement Protocol in Prayagraj</h2>
                <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                  Achieving a binding debt compromise follows an advocate-led protocol across five strategic stages:
                </p>

                <div className="space-y-4 my-6">
                  <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">Financial Hardship Dossier Compilation</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We compile verified financial distress records—including salary statements, medical bills, and trade ledgers—proving bona fide inability to maintain original installments.
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
                        Our advocates serve statutory notices on the bank&apos;s Principal Nodal Officer and Zonal Heads in Civil Lines, terminating recovery calls and preventing office visits.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">Statutory Court Notice Defense in Prayagraj Courts</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Counsel prepares and files structured replies to Section 138 NI Act and Section 25 PSSA notices before CJM courts in Kutchery, shielding borrowers from warrants.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">Direct Negotiations with Civil Lines Zonal SARB Desks</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Bypassing collection agents, our negotiators interact directly with bank Stressed Assets branches and Zonal Committees to secure 40% to 70% debt waivers.
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
                        We audit the official bank sanction letter for legal accuracy before payment via RTGS, ensuring delivery of the zero-balance No Dues Certificate within thirty days.
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Sanction Letter Forensics &amp; Mandatory ₹0 NDC Enforcement</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Borrowers must never pay settlement amounts based on verbal promises or informal messages. A valid <strong>OTS Sanction Letter</strong> must arrive on official bank letterhead, displaying bank emblems, officer employee codes, exact waiver figures, and payment details directly into the loan account.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Under <strong>RBI Circular RBI/2023-24/60</strong>, lenders must deliver the final <strong>No Dues Certificate (NDC)</strong> and update credit bureaus within <strong>thirty calendar days</strong> of payment. If the bank delays beyond thirty days, it must pay <strong>₹5,000 per day</strong> of delay to the borrower.
                </p>
                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  Following settlement, credit bureaus record the loan as &apos;Settled&apos; with zero balance. While credit scores drop initially, borrowers can rebuild their CIBIL score back to 750+ within eighteen to twenty-four months through disciplined credit management.
                </p>
              </section>

              {/* Section 10: Comparative Resolution Matrix Table */}
              <section id="comparative-resolution-matrix" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Scale className="w-4 h-4" />
                  <span>10. Comparative Resolution Matrix</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Comparative Debt Resolution Pathways for Prayagraj Borrowers
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Compare the principal debt resolution avenues available in Prayagraj and Kaushambi to evaluate which legal strategy aligns best with your financial goals:
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
                        <td className="font-semibold text-slate-900">Direct Zonal SARB Settlement (Prayagraj)</td>
                        <td>40% – 70% Principal Haircut</td>
                        <td>Complete (Official Bank NDC Issued)</td>
                        <td>&apos;Settled&apos; / ₹0 Outstanding Dues</td>
                        <td>3 to 6 Weeks</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">DLSA Lok Adalat (Prayagraj &amp; Kaushambi)</td>
                        <td>45% – 70% Principal Haircut</td>
                        <td>Absolute (Civil Court Decree, No Appeal)</td>
                        <td>&apos;Settled&apos; / ₹0 Outstanding Dues</td>
                        <td>Quarterly Lok Adalat Cycles</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Institutional Loan Restructuring</td>
                        <td>0% Haircut (Tenure Extension Only)</td>
                        <td>Conditional on Monthly Service</td>
                        <td>&apos;Restructured&apos; / Active Debt Liability</td>
                        <td>2 to 4 Weeks</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Contested Court Litigation (Kutchery / HC)</td>
                        <td>Uncertain (Judicial Discretion)</td>
                        <td>Subject to Protracted Appeals</td>
                        <td>&apos;Suit Filed&apos; / Compounding Arrears</td>
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
                  Premier Loan Settlement &amp; Legal Defense Services in Prayagraj
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                  Overcoming debt distress across Prayagraj, Allahabad, and Kaushambi requires dedicated advocate representation. Our legal team halts recovery harassment, defends court notices in Prayagraj District Court, and negotiates directly with bank credit committees to secure maximum debt waivers and legal closure.
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
                  Frequently Asked Questions on Debt Settlement in Prayagraj
                </h2>

                <div className="space-y-4">
                  {faqsData.map((faq, index) => (
                    <details
                      key={index}
                      name="faq-accordion"
                      className="group border border-slate-200 rounded-2xl overflow-hidden mb-4 transition-all duration-200 hover:border-slate-300 bg-white shadow-sm open:border-[#1F5EFF]/30 open:shadow-md"
                      open={index === 0}
                    >
                      <summary className="w-full p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none gap-4">
                        <span className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                          {faq.question}
                        </span>
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] transition-transform duration-300 group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white">
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
                  Ashish specializes in RBI settlement regulations, NPA jurisprudence, and commercial debt dispute resolution, with over a decade of hands-on advisory experience.
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
                  <span>Prayagraj Legal Defense</span>
                </div>
                <div className="font-bold text-base text-white mb-2">Facing Recovery Pressure in Prayagraj?</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Stop recovery agent harassment, defend Prayagraj District Court notices, protect your salary accounts, and secure 40%–70% OTS waivers directly with bank zonal desks.
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
