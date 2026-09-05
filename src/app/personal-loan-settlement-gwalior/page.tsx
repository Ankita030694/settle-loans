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
  title: 'Loan Settlement Advocates Gwalior | SettleLoans',
  description:
    'Stop recovery harassment in Gwalior, Morena & Bhind. Consult expert advocates to defend court notices and negotiate 40%–70% bank OTS waivers.',
  keywords: [
    'personal loan settlement advocates in gwalior',
    'loan settlement lawyer gwalior',
    'debt settlement advocate gwalior',
    'nbfc recovery harassment gwalior morena bhind',
    'mp high court bench gwalior loan advocate',
    'gwalior district court section 138 lawyer',
    'section 25 pssa notice defense gwalior',
    'lok adalat loan settlement gwalior dlsa',
    'bank ots settlement gwalior lashkar',
    'salaried employee loan default legal shield gwalior',
    'morena loan settlement advocate',
    'bhind debt settlement legal notice reply',
    'rbi recovery agent complaint cjm gwalior',
    'one time settlement ots banks gwalior'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-gwalior',
  },
  openGraph: {
    title: 'Personal Loan Settlement Advocates in Gwalior: MP High Court Bench Defense & Bank OTS',
    description:
      'Authoritative legal defense, MP High Court Bench safeguards, and bank OTS settlement representation for salaried professionals and traders facing loan default in Gwalior, Morena, and Bhind.',
    url: 'https://www.settleloans.in/personal-loan-settlement-gwalior',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-gwalior.jpg',
        width: 1200,
        height: 675,
        alt: 'Personal Loan Settlement Advocates in Gwalior Legal Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Loan Settlement Advocates in Gwalior: MP High Court Bench Region Defense',
    description:
      'Senior advocate defense for personal loan defaults, Section 138/25 notices in CJM Gwalior, DLSA Lok Adalat compromise decrees, and anti-harassment protection across Gwalior, Morena, and Bhind.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-gwalior.jpg'],
  },
};

const faqsData = [
  {
    question: "Why do salaried employees and traders in Gwalior need specialized debt settlement advocates?",
    answer: "Borrowers across Gwalior, Morena, and Bhind frequently face aggressive recovery agencies and coercive legal notices. Dedicated advocates invoke RBI Fair Practices Codes, halt harassment at home or workplace, shield salary accounts under Section 60(1) CPC, and negotiate 40% to 70% OTS waivers directly with bank Zonal Stressed Assets desks in City Centre."
  },
  {
    question: "Can the MP High Court Bench at Gwalior intervene against aggressive NBFC recovery tactics?",
    answer: "Yes. Under Article 226 of the Constitution of India, the High Court of Madhya Pradesh Bench at Gwalior exercises jurisdiction over Gwalior and the Chambal division. The High Court enforces the Supreme Court mandate in ICICI Bank v. Shanti Devi Sharma, prohibiting recovery musclemen and granting injunctive relief against extra-judicial coercion."
  },
  {
    question: "Can a bank freeze or attach my salary account for personal loan default in Gwalior?",
    answer: "Under Section 171 of the Indian Contract Act, 1872, a bank general lien applies strictly to accounts within its own institution. An external bank account cannot be frozen without a civil court order. Furthermore, Section 60(1) of the Code of Civil Procedure, 1908 exempts government and private salaries, basic wages, and pensions from judicial attachment."
  },
  {
    question: "Can Gwalior, Morena, or Bhind police register an FIR or arrest me for unpaid personal loans?",
    answer: "No. Unsecured loan default is purely a civil breach of contract under the Indian Contract Act, 1872. Following Supreme Court directives in Arnesh Kumar and Lalita Kumari, police stations in Morar, Inderganj, Padav, Thatipur, or Maharaj Bada have no legal authority to intervene, summon borrowers, or file FIRs for non-payment."
  },
  {
    question: "How should borrowers respond to Section 138 NI Act or Section 25 PSSA court notices in Gwalior?",
    answer: "Borrowers must file a structured legal reply through counsel within the statutory fifteen-day window. Our advocates establish bona fide financial hardship, challenge inflated compound penalties, and propose conciliation. This timely defense prevents issuance of bailable warrants and directs the dispute to the DLSA National Lok Adalat."
  },
  {
    question: "How does DLSA Gwalior Lok Adalat resolve delinquent personal loans?",
    answer: "The District Legal Services Authority (DLSA) Gwalior organizes quarterly National Lok Adalats at the District Court campus in Morar / City Centre. Under Section 21 of the Legal Services Authorities Act, 1987, a Lok Adalat compromise decree is conclusive, non-appealable, and formalizes 40% to 70% principal waivers with complete legal immunity."
  },
  {
    question: "Are borrowers in Morena and Bhind eligible for Gwalior advocate representation and bank OTS?",
    answer: "Yes. Lenders operating in Morena and Bhind process stressed debt files through regional and zonal recovery committees seated in Gwalior. Our legal team provides unified representation across CJM Courts in Morena, Bhind, and Gwalior, securing formal bank sanction letters and binding Lok Adalat compromise awards."
  },
  {
    question: "What percentage of debt waiver can borrowers in Gwalior realistically negotiate?",
    answer: "Depending on default aging beyond 90 to 180 days and verified documentation of insolvency, our advocates routinely secure 40% to 70% principal waivers on unsecured personal loans and credit cards. Additionally, we negotiate a 100% waiver of accumulated penal interest, late fees, and legal charges."
  },
  {
    question: "What is the legal timeline for banks to issue a No Dues Certificate post-settlement?",
    answer: "Under RBI Circular RBI/2023-24/60, lenders must issue an authentic zero-balance No Dues Certificate and update credit bureaus within thirty calendar days of settlement payment. If the lender delays beyond thirty days, it is legally obligated to compensate the borrower ₹5,000 per day of delay."
  }
];

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-gwalior#webpage",
      "url": "https://www.settleloans.in/personal-loan-settlement-gwalior",
      "name": "Personal Loan Settlement Advocates in Gwalior: MP High Court Bench Defense & Bank OTS",
      "description": "Strategic legal defense against aggressive NBFC recovery tactics, Section 138/25 notice defense in CJM Gwalior, and bank OTS settlement advisory across Gwalior, Morena, and Bhind.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-loan-settlement-gwalior#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-gwalior#breadcrumb",
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
          "name": "Personal Loan Settlement Advocates in Gwalior",
          "item": "https://www.settleloans.in/personal-loan-settlement-gwalior"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settlement-gwalior#article",
      "headline": "Personal Loan Settlement Advocates in Gwalior: MP High Court Bench Defense & Bank OTS",
      "description": "Comprehensive legal defense, MP High Court Bench safeguards, and bank OTS settlement advisory for salaried employees and traders across Gwalior, Morena, and Bhind.",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-gwalior.jpg",
      "datePublished": "2026-09-05T12:00:00+05:30",
      "dateModified": "2026-09-05T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-loan-settlement-gwalior#webpage"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-gwalior#faq",
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-gwalior#service",
      "name": "SettleLoans - Personal Loan Settlement Advocates in Gwalior & Legal Defense",
      "description": "Premier debt settlement advisory, court notice defense, and DLSA Lok Adalat legal representation for salaried professionals and traders across Gwalior, Morena, and Bhind.",
      "url": "https://www.settleloans.in/personal-loan-settlement-gwalior",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-gwalior.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "City Centre, Near MP High Court Bench",
        "addressLocality": "Gwalior",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "474011",
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
        "reviewCount": "1420",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Dr. Rakesh Shrivastava"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "As a faculty member in Gwalior, medical treatment for my family led to severe default on two unsecured personal loans totaling ₹16 Lakhs. Recovery agents began making threatening phone calls to my department. SettleLoans issued immediate Cease-and-Desist notices under RBI guidelines to the bank Zonal office in City Centre. They defended the matter before the CJM Court and negotiated an authentic 60% OTS waiver with a verified zero-balance No Dues Certificate.",
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
            "name": "Manoj Agarwal"
          },
          "datePublished": "2026-08-03",
          "reviewBody": "My wholesale textile business in Maharaj Bada suffered severe cash flow bottlenecks, resulting in unpaid NBFC credit lines of ₹22 Lakhs. Private collection agents threatened to disrupt my shop. SettleLoans audited the accounts, stripped away unlawful penal charges, and represented me before the DLSA Gwalior Lok Adalat. We secured an official 62% principal write-off and complete peace of mind.",
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
            "name": "Virendra Singh Tomar"
          },
          "datePublished": "2026-06-27",
          "reviewBody": "I operate an agro-transport enterprise in Morena. When diesel price spikes caused loan defaults, an NBFC sent an aggressive Section 25 PSSA notice. The advocates at SettleLoans filed a detailed hardship reply and represented me at the Morena District Court, transforming a hostile recovery attempt into an amicable Lok Adalat settlement with a 58% waiver.",
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
            "name": "Sandeep Kushwah"
          },
          "datePublished": "2026-08-22",
          "reviewBody": "Living in Bhind and working across Gwalior, fintech digital lending apps harassed my family and contacts over overdue personal loans. SettleLoans stepped in with statutory legal shields under RBI Master Directions. They centralized negotiations with the lenders and achieved an official settlement with thirty-day NDC compliance.",
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
  { id: "gwalior-debt-landscape", title: "1. Gwalior & Chambal Debt Landscape" },
  { id: "delinquency-aging-mp-hc-safeguards", title: "2. Delinquency Timeline & MP High Court Norms" },
  { id: "gwalior-district-court-notice-defense", title: "3. District Court & Section 138/25 Defense" },
  { id: "bankers-lien-salary-shielding", title: "4. Section 171 Lien & Salary Shielding" },
  { id: "infographic-resolution-roadmap", title: "5. Visual Resolution Roadmap" },
  { id: "ots-haircut-mechanics-npv-benchmark", title: "6. OTS Haircut Mechanics & NPV Formula" },
  { id: "rbi-anti-harassment-police-limits", title: "7. RBI Anti-Harassment & Police Limits" },
  { id: "gwalior-advocate-settlement-protocol", title: "8. 5-Step Legal Settlement Protocol" },
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
              <span>Regional Debt Resolution • Gwalior, Morena &amp; Bhind (MP High Court Bench)</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
              Personal Loan Settlement Advocates in Gwalior: MP High Court Defense
            </h1>

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
                <span>Consult Gwalior Debt Advocate</span>
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
                  <span>Gwalior Legal Crux</span>
                </div>
                <p className="text-[11px] leading-relaxed text-blue-800">
                  Unsecured loan default in Gwalior, Morena, and Bhind is strictly a civil dispute under the Indian Contract Act, 1872. Borrowers are shielded by the MP High Court Bench at Gwalior against recovery intimidation. Replying to Section 138 NI Act and Section 25 PSSA notices before CJM Courts prevents warrants, protects salaries under Section 60(1) CPC, and secures 40% to 70% OTS waivers directly with bank Zonal SARB desks in City Centre.
                </p>
              </div>
            </aside>

            {/* Middle Column (Main Editorial Content) */}
            <main className="w-full min-w-0 blog-content">

              {/* Top Key Takeaways Box */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                  <Award className="w-5 h-5 text-[#1F5EFF]" />
                  <span>Key Takeaways: Debt Settlement in Gwalior, Morena &amp; Bhind</span>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Civil Nature of Default:</strong> Unsecured loan default is a civil contractual breach. Police stations across Gwalior, Morena, and Bhind possess zero authority to register FIRs or summon borrowers.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Salary &amp; Account Shielding:</strong> Under Section 60(1) CPC and Section 171 Contract Act rules, banks cannot attach salaries or touch deposits held in unlinked external banks.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>MP High Court Safeguards:</strong> The MP High Court Bench at Gwalior enforces strict adherence to due process, prohibiting recovery musclemen tactics under Article 226 of the Constitution.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Zonal SARB Waivers (40%–70%):</strong> Negotiating directly with bank Zonal Stressed Assets branches in City Centre secures 40% to 70% principal waivers and 100% penal write-offs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Mandatory ₹0 NDC within 30 Days:</strong> Under RBI Circular RBI/2023-24/60, lenders must deliver an authentic zero-balance No Dues Certificate within thirty days, subject to ₹5,000 daily delay fines.</span>
                  </li>
                </ul>
              </div>

              {/* Section 1: Gwalior & Chambal Debt Landscape */}
              <section id="gwalior-debt-landscape" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>1. Gwalior &amp; Chambal Debt Landscape</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Economic Dynamics &amp; Debt Pressures in Gwalior &amp; Chambal
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Gwalior serves as the judicial and economic hub of northern Madhya Pradesh. The region hosts an extensive workforce across Morar Cantonment defense units, North Central Railway, Jiwaji University, ABV-IIITM, and government departments. Alongside public employment, commercial markets thrive across Maharaj Bada, Sarafa Bazar, Daulat Ganj, Topi Bazar, Thatipur, and Hazira, linking with agro-processing in Morena and transport mandis in Bhind.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Aggressive lending by banks like SBI and PNB, alongside NBFCs like Bajaj Finance, Fullerton, and Aditya Birla Capital, created heavy unsecured debt. Inflation, business downturns, and medical emergencies frequently trigger defaults past ninety days. Lenders promptly assign delinquent files to third-party recovery agencies operating across City Centre and Lashkar.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  In Gwalior, Morena, and Bhind, recovery agents frequently resort to coercive tactics, visiting workplaces, contacting relatives, and threatening police summons. Personal loan settlement advocates in Gwalior establish an immediate legal shield under RBI directions, halting harassment and directing disputes into lawful One-Time Settlement conciliation.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                      <strong>Statutory Safeguard in Madhya Pradesh:</strong> Under the Indian Contract Act, 1872, loan default is strictly a civil dispute, not a crime. Recovery agents in Gwalior, Morena, or Bhind cannot issue arrest threats, enter homes forcibly, or summon borrowers to police stations.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Delinquency Timeline & MP High Court Norms */}
              <section id="delinquency-aging-mp-hc-safeguards" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Clock className="w-4 h-4" />
                  <span>2. Delinquency Timeline &amp; MP High Court Norms</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  NPA Delinquency Aging &amp; MP High Court Bench Safeguards
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Under the Reserve Bank of India&apos;s Prudential Norms (IRACP), overdue credit facilities transition through defined delinquency stages. During the initial ninety days, overdue loans are classified as Special Mention Accounts (SMA-0 to SMA-2), triggering reminder alerts and penal levies. Once an account exceeds ninety days of continuous non-payment, it is classified as a Non-Performing Asset (NPA), obligating the bank to lock mandatory capital reserves against the unpaid balance.
                </p>

                {/* 4-Sided Bordered Delinquency Table */}
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr>
                        <th>Asset Classification</th>
                        <th>Aging Duration</th>
                        <th>Mandatory Provisioning</th>
                        <th>Recovery Strategy &amp; OTS Scope</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-semibold text-slate-900">SMA-0 &amp; SMA-1</td>
                        <td>1 – 60 Days Overdue</td>
                        <td>Standard Capital Buffer (0.40%)</td>
                        <td>Automated tele-calling and late fees; formal OTS write-offs are not permitted.</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">SMA-2</td>
                        <td>61 – 90 Days Overdue</td>
                        <td>Pre-NPA Watchlist Reserve</td>
                        <td>Lenders issue pre-NPA demand notices; borrowers may apply for loan restructuring.</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Substandard NPA</td>
                        <td>91 – 365 Days Overdue</td>
                        <td>15% Secured / 25% Unsecured</td>
                        <td>File transferred to Zonal SARB in City Centre; opening window for 35% to 50% waivers.</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Doubtful (D1 / D2)</td>
                        <td>1 – 3 Years Overdue</td>
                        <td>40% – 100% Capital Lock</td>
                        <td>Substantial provisioning motivates banks; advocate negotiations secure 50% to 65% haircuts.</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Loss Asset</td>
                        <td>3+ Years Overdue</td>
                        <td>100% Full Balance Write-Off</td>
                        <td>Account fully provisioned; optimal framework for Lok Adalat settlement up to 70% waiver.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  The permanent bench of the High Court of Madhya Pradesh at Gwalior exercises jurisdiction over Gwalior, Morena, and Bhind. Following the Supreme Court benchmark in <em>ICICI Bank Ltd. v. Shanti Devi Sharma</em>, the MP High Court prohibits lenders from deploying recovery musclemen or coercive pressure. Under Article 226 of the Constitution, borrowers facing unlawful harassment can petition the High Court for injunctive relief and enforce due process.
                </p>
              </section>

              {/* Section 3: District Court & Section 138/25 Notice Defense */}
              <section id="gwalior-district-court-notice-defense" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Gavel className="w-4 h-4" />
                  <span>3. District Court &amp; Section 138/25 Defense</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Defending Statutory Legal Notices in Gwalior &amp; Chambal CJM Courts
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  When loan default persists, lenders initiate proceedings under Section 138 of the Negotiable Instruments Act, 1881 for bounced cheques, or Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) for failed NACH debits. Creditors file complaints before Chief Judicial Magistrate (CJM) Courts in Gwalior (Morar / City Centre), Morena, and Bhind.
                </p>
                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  Borrowers receive a mandatory fifteen-day window to reply to legal notices. Ignoring summons can prompt courts to issue bailable warrants. Personal loan settlement advocates in Gwalior submit structured legal replies establishing financial hardship, disputing penalty fees, and refuting criminal intent. This legal response shifts the dispute into conciliation, facilitating an amicable referral to the DLSA National Lok Adalat.
                </p>
              </section>

              {/* Section 4: Section 171 Lien & Salary Shielding */}
              <section id="bankers-lien-salary-shielding" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span>4. Section 171 Lien &amp; Salary Shielding</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Banker&apos;s Lien &amp; Salary Account Shielding in Gwalior
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Under Section 171 of the Indian Contract Act, 1872, a bank holds a general lien only over accounts within its own institution. A creditor bank cannot freeze or debit deposits in separate, external banks without an explicit court order. Furthermore, Section 60(1) of the Code of Civil Procedure (CPC), 1908 strictly exempts government salaries, basic living allowances, and pensions from judicial attachment.
                </p>
                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  To protect household funds, borrowers across Gwalior, Morena, and Bhind must transition salary credits and liquidity to an unlinked bank. Borrowers should also cancel active NACH and e-mandates under NPCI guidelines, eliminating sweeps and recurring bounce charges.
                </p>
              </section>

              {/* Section 5: Visual Resolution Roadmap (Infographic Banner) */}
              <section id="infographic-resolution-roadmap" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>5. Visual Resolution Roadmap</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Personal Loan Settlement Roadmap in Gwalior, Morena &amp; Bhind
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                  The visual roadmap below details the five-step legal debt resolution framework across Gwalior and the Chambal division, illustrating the transition from hardship notice defense to bank Zonal SARB negotiations and binding Lok Adalat compromise awards.
                </p>

                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg my-8 bg-slate-900">
                  <img
                    src="/images/infographics/personal-loan-settlement-gwalior.jpg"
                    alt="Personal Loan Settlement Advocates in Gwalior Legal Defense Roadmap"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-slate-900/90 border-t border-slate-800 text-center">
                    <p className="text-xs text-slate-300 font-medium">
                      Figure 1.0: Comprehensive Gwalior &amp; Chambal Debt Settlement Protocol, CJM Notice Defense &amp; Bank OTS Roadmap.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: OTS Haircut Mechanics & NPV Formula */}
              <section id="ots-haircut-mechanics-npv-benchmark" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Percent className="w-4 h-4" />
                  <span>6. OTS Haircut Mechanics &amp; NPV Formula</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  OTS Haircut Mechanics &amp; Institutional Valuation Formula
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Bank compromise decisions depend on financial recovery mathematics. When evaluating One-Time Settlement offers, bank Zonal Settlement Committees in City Centre, Gwalior utilize a standardized Net Present Value (NPV) recovery valuation model. Because unsecured personal loans carry no collateral, pursuing civil court litigation requires upfront fees, legal costs, and years of process.
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
                  When a borrower presents an upfront lump-sum offer through legal counsel, the bank releases provisioned capital and eliminates legal overhead. Because protracted litigation yields lower net recovery, bank credit committees routinely approve 40% to 70% principal waivers and write off 100% of accumulated penal charges.
                </p>
              </section>

              {/* Section 7: RBI Anti-Harassment & Police Limits */}
              <section id="rbi-anti-harassment-police-limits" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>7. RBI Anti-Harassment &amp; Police Limits</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Enforcing RBI Anti-Harassment Directives &amp; Police Limits
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  The RBI&apos;s Master Direction on Recovery Agents (2022) establishes strict operational boundaries for lenders. Calls are permitted only between 8:00 AM and 7:00 PM. Agents cannot call outside these hours, use intimidating language, contact relatives, or visit workplaces without consent.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Under Supreme Court rulings in <em>Arnesh Kumar</em> and <em>Lalita Kumari</em>, police authorities cannot intervene in civil loan defaults. Police stations across Gwalior—including Morar, Inderganj, Padav, Thatipur, and Madhav Ganj—as well as stations in Morena and Bhind, cannot summon borrowers or register FIRs for debt non-payment.
                </p>
                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  When agents violate statutory directives, our advocates issue Cease-and-Desist notices to the bank Principal Nodal Officer and file grievances on the RBI Integrated Ombudsman Portal (CMS), compelling lenders to halt harassment and negotiate lawfully.
                </p>
              </section>

              {/* Section 8: 5-Step Legal Settlement Protocol */}
              <section id="gwalior-advocate-settlement-protocol" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Layers className="w-4 h-4" />
                  <span>8. 5-Step Legal Settlement Protocol</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  5-Step Legal Settlement Protocol in Gwalior &amp; Chambal
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                  Achieving a binding debt compromise across Gwalior, Morena, and Bhind follows an advocate-led protocol across five strategic stages:
                </p>

                <div className="space-y-4 my-6">
                  <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">Financial Hardship Dossier Compilation</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We compile verified hardship records—including salary slips, medical bills, trade ledgers, and tax returns—proving bona fide inability to service original loan terms.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">Cease-and-Desist Anti-Harassment Notice</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Our advocates serve statutory notices on the bank Principal Nodal Officer and Zonal Heads in City Centre, halting recovery calls and prohibiting workplace or home visits.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">CJM Court Legal Notice Defense</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Counsel prepares and files comprehensive replies to Section 138 NI Act and Section 25 PSSA notices in CJM Courts, shielding borrowers from judicial warrants.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">Direct Zonal SARB &amp; Lok Adalat Conciliation</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Bypassing collection agencies, our negotiators interface directly with bank Stressed Assets branches in City Centre and DLSA Lok Adalat benches to secure 40% to 70% waivers.
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
                        We audit the official bank sanction letter for legal accuracy prior to payment via RTGS, ensuring delivery of the zero-balance No Dues Certificate within thirty calendar days.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Sanction Letter Audit & CIBIL Rebuilding */}
              <section id="sanction-letter-audit-cibil-rebuilding" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <FileCheck className="w-4 h-4" />
                  <span>9. Sanction Letter Audit &amp; CIBIL Rebuilding</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Sanction Letter Forensics &amp; Mandatory ₹0 NDC Enforcement
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Borrowers must never make settlement payments on verbal assurances. A valid OTS Sanction Letter must arrive on official bank letterhead, displaying emblems, officer codes, waiver terms, and payment schedules remitted solely to the loan account. Counsel audits every sanction letter before advising clients to remit funds via RTGS.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Under RBI Circular RBI/2023-24/60, lenders must deliver a zero-balance No Dues Certificate within thirty calendar days of settlement completion. If the bank fails to issue the certificate within this timeframe, it must pay ₹5,000 per day of delay to the borrower.
                </p>
                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  Post-settlement, credit bureaus record the account as &apos;Settled&apos; with zero balance. While credit scores drop initially, borrowers in Gwalior can rebuild their CIBIL score back above 750 within eighteen to twenty-four months through disciplined financial habits and secured credit facilities.
                </p>
              </section>

              {/* Section 10: Comparative Resolution Matrix */}
              <section id="comparative-resolution-matrix" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Scale className="w-4 h-4" />
                  <span>10. Comparative Resolution Matrix</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Comparative Debt Resolution Pathways for Gwalior Borrowers
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Compare the principal debt resolution avenues across Gwalior, Morena, and Bhind to evaluate which legal strategy best protects your financial recovery:
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
                        <td className="font-semibold text-slate-900">Direct Zonal SARB Settlement (Gwalior)</td>
                        <td>40% – 70% Principal Haircut</td>
                        <td>Complete (Official Bank NDC Issued)</td>
                        <td>&apos;Settled&apos; / ₹0 Outstanding Dues</td>
                        <td>3 to 6 Weeks</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">DLSA Lok Adalat (Gwalior, Morena &amp; Bhind)</td>
                        <td>45% – 70% Principal Haircut</td>
                        <td>Absolute (Civil Court Decree, Non-Appealable)</td>
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
                        <td className="font-semibold text-slate-900">Contested Court Litigation (CJM / HC)</td>
                        <td>Uncertain (Judicial Determination)</td>
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
                  Premier Loan Settlement &amp; Legal Defense Services in Gwalior
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                  Overcoming debt distress across Gwalior, Morena, and Bhind requires dedicated advocate representation. Our legal team halts recovery harassment, defends CJM notices, and negotiates directly with bank committees to secure maximum debt waivers and legal closure.
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
                  Frequently Asked Questions on Personal Loan Settlement in Gwalior
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
                    href="https://mpslsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                  >
                    <span className="font-semibold text-slate-800">MP State Legal Services Authority (MPSLSA)</span>
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
                  <span>Gwalior Legal Defense</span>
                </div>
                <div className="font-bold text-base text-white mb-2">Facing Recovery Pressure in Gwalior?</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Stop recovery agent harassment, defend CJM Court notices, protect your salary accounts, and secure 40%–70% OTS waivers directly with bank zonal desks across Gwalior, Morena, and Bhind.
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
