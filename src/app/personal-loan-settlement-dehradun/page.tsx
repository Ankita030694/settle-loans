import { Metadata } from 'next';
import Link from 'next/link';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import SidebarTOC from '@/components/SidebarTOC';
import {
  ShieldCheck,
  TrendingUp,
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
  Briefcase,
  GraduationCap,
  Mountain,
  Hotel,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement in Dehradun | SettleLoans',
  description: 'Learn how to settle personal loans legally in Dehradun. Stop recovery harassment and resolve bank debt with structured OTS via SettleLoans.',
  keywords: [
    'loan settlement services in dehradun uttarakhand',
    'personal loan settlement dehradun',
    'debt settlement lawyer dehradun',
    'loan settlement advocate haridwar rishikesh',
    'credit card debt settlement dehradun',
    'hotel tourism business loan settlement rishikesh',
    'government employee loan default dehradun',
    'education loan settlement dehradun',
    'rbi compromise settlement dehradun uttarakhand',
    'lok adalat dehradun loan settlement',
    'section 138 section 25 pssa defense dehradun',
    'drt dehradun loan dispute lawyer',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-dehradun',
  },
  openGraph: {
    title: 'Loan Settlement Services in Dehradun: Legal Debt Relief in Uttarakhand (2026)',
    description: 'Specialized banking advocate representation for personal loan settlement, credit card defaults, and commercial debt resolution across Dehradun, Haridwar, and Rishikesh under RBI compromise frameworks.',
    url: 'https://www.settleloans.in/personal-loan-settlement-dehradun',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-dehradun.jpg',
        width: 1200,
        height: 675,
        alt: 'Loan Settlement Services in Dehradun Uttarakhand Debt Resolution Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Services in Dehradun: Legal Debt Relief in Uttarakhand',
    description: 'Technical and legal manual for settling defaulted personal loans, multi-card debts, and business credit lines across Dehradun, Haridwar, and Rishikesh.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-dehradun.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-dehradun#webpage",
      "url": "https://www.settleloans.in/personal-loan-settlement-dehradun",
      "name": "Loan Settlement Services in Dehradun: Legal Debt Relief in Uttarakhand (2026)",
      "description": "Leading loan settlement services in Dehradun, Haridwar & Rishikesh. Advocate representation for government employees, hotel/tourism businesses & students facing bank recovery under RBI OTS rules.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-loan-settlement-dehradun#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-dehradun#breadcrumb",
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
          "name": "Loan Settlement Services in Dehradun",
          "item": "https://www.settleloans.in/personal-loan-settlement-dehradun"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settlement-dehradun#article",
      "headline": "Loan Settlement Services in Dehradun: Legal Debt Relief for Uttarakhand",
      "description": "An authoritative legal and financial roadmap for government employees, hotel and tourism entrepreneurs, and higher education students facing personal loan and credit card defaults in Dehradun, Haridwar, and Rishikesh. Master RBI OTS rules, court defense, and NPA recovery formulas.",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-dehradun.jpg",
      "datePublished": "2026-08-26T12:00:00+05:30",
      "dateModified": "2026-08-26T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-loan-settlement-dehradun#webpage"
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
          "availableLanguage": ["en", "hi"]
        }
      ]
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/personal-loan-settlement-dehradun#service",
      "name": "SettleLoans - Loan Settlement Services in Dehradun",
      "description": "Specialized advocate-led debt settlement, legal notice defense, and RBI OTS negotiation for personal loans, credit card balances, and unsecured business credit lines across Dehradun, Haridwar, and Rishikesh.",
      "url": "https://www.settleloans.in/personal-loan-settlement-dehradun",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-dehradun.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rajpur Road / Astley Hall",
        "addressLocality": "Dehradun",
        "addressRegion": "Uttarakhand",
        "postalCode": "248001",
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
        "reviewCount": "1290",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Manish Rawat"
          },
          "datePublished": "2026-06-19",
          "reviewBody": "I work in a state office in Dehradun. Recovery agents called me constantly over an ₹11.5 Lakhs loan. They threatened to visit my workplace. SettleLoans stepped in quickly. Their advocates cited Section 60 CPC protections. They negotiated a 52% OTS reduction. I received my official No Dues Certificate without delay.",
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
            "name": "Siddharth Nautiyal"
          },
          "datePublished": "2026-07-11",
          "reviewBody": "We run a yoga resort in Rishikesh. Monsoons hurt our seasonal cash flow. We had ₹22 Lakhs in credit card dues. SettleLoans handled our case. They showed our genuine loss to the bank. We got a 58% waiver without any court disputes.",
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
            "name": "Ananya Joshi"
          },
          "datePublished": "2026-05-28",
          "reviewBody": "Hiring delays left me unable to pay my ₹8.5 Lakhs education loan. My father was a co-signer. Bank agents harassed us daily. SettleLoans responded to Section 25 PSSA notices. They resolved the debt at Lok Adalat with a 45% discount.",
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
            "name": "Kavita Negi"
          },
          "datePublished": "2026-08-04",
          "reviewBody": "I received Section 138 NI Act notices from Haridwar courts for bounced cheques. SettleLoans advocates represented me at the Roshnabad complex. They proved my business hardship. The bank agreed to a 50% settlement.",
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-dehradun#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does loan settlement work in Dehradun and across Uttarakhand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Loan settlement follows RBI rules. When a loan passes 90 days of default, it becomes an NPA. Banking lawyers present your hardship case to the bank zonal desk. They get unfair late charges removed. You can secure a 40% to 65% debt waiver. The bank gives you a stamped OTS letter. You also receive a zero-balance No Dues Certificate."
          }
        },
        {
          "@type": "Question",
          "name": "Can banks attach the salary of government employees in Dehradun for personal loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Banks cannot attach your pay without a civil court order. Section 60(1) (i) CPC protects most of your salary. A loan default is a civil matter. It is not misconduct under state service rules."
          }
        },
        {
          "@type": "Question",
          "name": "How can hotel, resort, and tourism business owners in Rishikesh and Haridwar settle unsecured loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tourism businesses face seasonal income drops and rain disruptions. Lawyers show GST records and booking logs to prove distress. Banks follow net present value rules to settle. Owners can secure 45% to 60% debt waivers."
          }
        },
        {
          "@type": "Question",
          "name": "Which local courts handle personal loan default litigation in Dehradun, Haridwar, and Rishikesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dehradun Sadar courts handle Section 138 NI Act and Section 25 PSSA cases. Haridwar cases go to the Roshnabad courts. Rishikesh matters to local civil judges. Debts over ₹20 Lakhs go to DRT Dehradun on Haridwar Road."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver can borrowers in Dehradun realistically achieve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Debtors can get a 40% to 65% waiver on personal loans and cards. Legal lawyers also get late fees and penal interest waived. The final amount depends on your hardship and default age."
          }
        },
        {
          "@type": "Question",
          "name": "How do debt settlement advocates in Dehradun halt recovery agent harassment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lawyers send legal notices citing RBI rules. Lenders must route all calls through counsel. If agents call at odd hours, lawyers file complaints with DLSA, Cyber Police. or the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "What should borrowers do upon receiving a Section 138 or Section 25 PSSA court notice in Dehradun?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Never ignore court notices. Send a legal reply within the 15-day window. Lawyers appear in Dehradun or Haridwar courts to secure bail. They move the case to Lok Adalat for a final settlement."
          }
        },
        {
          "@type": "Question",
          "name": "Can higher education students in Dehradun settle education loans and co-borrower credit lines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Students facing job delays can settle study debts. Lawyers submit college records and proof of unemployment. This secures an affordable OTS. It shields parents from recovery calls."
          }
        },
        {
          "@type": "Question",
          "name": "How does settling a loan in Dehradun impact CIBIL scores and long-term creditworthiness?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The bank marks your loan as Settled with zero balance. Your credit score drops by 75 to 150 points at first. But active default remarks stop. You can rebuild your score past 750 in 18 to 24 months."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a bank take to issue the No Dues Certificate (NDC) following an OTS in Uttarakhand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI rules, banks must issue your No Dues Certificate in 30 days. They must also update credit bureaus. If the bank delays, it must pay ₹5,000 per day to the debtor."
          }
        }
      ]
    }
  ]
};

export default function PersonalLoanSettlementDehradunPage() {
  const tocItems = [
    { id: 'dehradun-debt-landscape', title: '1. Dehradun & Uttarakhand Debt Dynamics' },
    { id: 'uttarakhand-judicial-architecture', title: '2. Uttarakhand Judicial Architecture & Courts' },
    { id: 'bank-npa-accounting-npv-formula', title: '3. Bank NPA Accounting & NPV Mathematics' },
    { id: 'anti-harassment-legal-protections', title: '4. Anti-Harassment Protections & RBI Rules' },
    { id: 'infographic-resolution-blueprint', title: '5. Uttarakhand Debt Resolution Blueprint' },
    { id: 'tailored-resolution-strategies', title: '6. Strategies for Govt Staff, Tourism & Students' },
    { id: 'legal-defense-lok-adalat', title: '7. Section 138, Sec 25 PSSA & Lok Adalat' },
    { id: 'sanction-letter-forensics-ndc', title: '8. Sanction Letter Forensics & ₹0 NDC Mandate' },
    { id: 'cibil-score-rehabilitation-matrix', title: '9. CIBIL Trajectory & Credit Restoration' },
    { id: 'company-resolution-section', title: '10. Why Uttarakhand Trusts SettleLoans' },
    { id: 'faqs', title: '11. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "How does loan settlement work in Dehradun and across Uttarakhand?",
      answer: "Loan settlement follows RBI rules. When a loan passes 90 days of default, it becomes an NPA. Banking lawyers present your hardship case to the bank zonal desk. They get unfair late charges removed. You can secure a 40% to 65% debt waiver. The bank gives you a stamped OTS letter. You also receive a zero-balance No Dues Certificate."
    },
    {
      question: "Can banks attach the salary of government employees in Dehradun for personal loan default?",
      answer: "No. Banks cannot attach your pay without a civil court order. Section 60(1) (i) CPC protects most of your salary. A loan default is a civil matter. It is not misconduct under state service rules."
    },
    {
      question: "How can hotel, resort, and tourism business owners in Rishikesh and Haridwar settle unsecured loans?",
      answer: "Tourism businesses face seasonal income drops and rain disruptions. Lawyers show GST records and booking logs to prove distress. Banks follow net present value rules to settle. Owners can secure 45% to 60% debt waivers."
    },
    {
      question: "Which local courts handle personal loan default litigation in Dehradun, Haridwar, and Rishikesh?",
      answer: "Dehradun Sadar courts handle Section 138 NI Act and Section 25 PSSA cases. Haridwar cases go to the Roshnabad courts. Rishikesh matters to local civil judges. Debts over ₹20 Lakhs go to DRT Dehradun on Haridwar Road."
    },
    {
      question: "What percentage of debt waiver can borrowers in Dehradun realistically achieve?",
      answer: "Debtors can get a 40% to 65% waiver on personal loans and cards. Legal lawyers also get late fees and penal interest waived. The final amount depends on your hardship and default age."
    },
    {
      question: "How do debt settlement advocates in Dehradun halt recovery agent harassment?",
      answer: "Lawyers send legal notices citing RBI rules. Lenders must route all calls through counsel. If agents call at odd hours, lawyers file complaints with DLSA, Cyber Police. or the RBI Ombudsman."
    },
    {
      question: "What should borrowers do upon receiving a Section 138 or Section 25 PSSA court notice in Dehradun?",
      answer: "Never ignore court notices. Send a legal reply within the 15-day window. Lawyers appear in Dehradun or Haridwar courts to secure bail. They move the case to Lok Adalat for a final settlement."
    },
    {
      question: "Can higher education students in Dehradun settle education loans and co-borrower credit lines?",
      answer: "Yes. Students facing job delays can settle study debts. Lawyers submit college records and proof of unemployment. This secures an affordable OTS. It shields parents from recovery calls."
    },
    {
      question: "How does settling a loan in Dehradun impact CIBIL scores and long-term creditworthiness?",
      answer: "The bank marks your loan as Settled with zero balance. Your credit score drops by 75 to 150 points at first. But active default remarks stop. You can rebuild your score past 750 in 18 to 24 months."
    },
    {
      question: "How long does a bank take to issue the No Dues Certificate (NDC) following an OTS in Uttarakhand?",
      answer: "Under RBI rules, banks must issue your No Dues Certificate in 30 days. They must also update credit bureaus. If the bank delays, it must pay ₹5,000 per day to the debtor."
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
            <Landmark className="w-3.5 h-3.5" />
            <span>Dehradun, Haridwar &amp; Rishikesh. Regional Capital &amp; Tourism Debt Relief.</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Personal Loan Settlement in Dehradun: Legal OTS Guide</h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Written by <Link href="/authors/ashish-jhangra" className="font-bold underline hover:text-white transition-colors">Ashish Jhangra</Link>.</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: August 2026.</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI Master Direction Compliant.</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Dehradun Loan Settlement.</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Case Evaluation.
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
                <span>Uttarakhand Debt Crux.</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">Unsecured loans enter NPA past 90 days. Senior lawyers escalate your case to bank zonal desks. This stops abuse. It protects your rights under Section 60 CPC. You can secure a 40% to 65% debt waiver. You get an official zero-balance No Dues Certificate.</p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Dehradun &amp; Uttarakhand Debt Settlement.</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <span><strong>Senior Lawyer help:</strong> Debtors in Dehradun settle with bank zonal desks. This bypasses harsh recovery agents.</span></li>
                <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <span><strong>Government Employee Salary Protections:</strong> Public sector staff have protection under Section 60 CPC. Defaults cannot cause salary attachment.</span></li>
                <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <span><strong>Hospitality & Tourism Tailored Relief:</strong> Hotel and resort owners use cash flow records. They secure 45% to 60% principal waivers.</span></li>
                <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <span><strong>Uttarakhand Court & Lok Adalat Defense:</strong> Get legal defense for Section 138 NI Act and Section 25 PSSA. Settle through Lok Adalat orders.</span></li>
                <li className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <span><strong>Sure ₹0 NDC Giving:</strong> Every OTS follows RBI rules. Lenders must issue closure letters in 30 days.</span></li>
              </ul>
            </div>
            
            {/* Section 1: Dehradun & Uttarakhand Debt Dynamics */}
            <section id="dehradun-debt-landscape" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Mountain className="w-4 h-4" />
                <span>1. Capital, Tourism Corridor &amp; Higher Education Hub.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Managing Debt Default Dynamics in Dehradun</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Dehradun is Uttarakhand&apos. s capital. It connects with Haridwar and Rishikesh. The region hosts government staff, research institutes. And students. Banks have issued many unsecured loans here.</p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Money distress can occur after tourism drops or monsoon landslides. Debtors struggle with high card dues. Loan default is a civil case under the Indian Contract Act, 1872. It is not a crime.</p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Debt default causes heavy personal stress. Recovery agents often harass debtors. You need legal guidance. Lawyers stop abuse. They secure debt waivers under RBI rules.</p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Statutory Protection:</strong> RBI Master Directions mandate OTS frameworks. Banks cannot treat genuine financial distress as wilful default.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Uttarakhand Judicial Architecture & Courts */}
            <section id="uttarakhand-judicial-architecture" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>2. Uttarakhand Judicial Architecture &amp; Local Jurisdictions.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Uttarakhand Court System &amp; DRT Dehradun</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Debtors must understand local court hierarchy. In Dehradun, Order 37 CPC suits go to the Dehradun Sadar court. Cheque bounce cases under Section 138 NI Act are heard here too.</p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Haridwar matters go to Roshnabad District Courts. Rishikesh cases go to local civil courts. Claims above ₹20 Lakhs fall under DRT Dehradun. High Court petitions go to Nainital.</p>

              {/* Comprehensive Uttarakhand Court Matrix Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>authority.</th>
                      <th>Court Court.</th>
                      <th>Court Case Type.</th>
                      <th>Governing Statute.</th>
                      <th>Lawyer Defense Strategy.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Dehradun District.</td>
                      <td>Dehradun Sadar Court.</td>
                      <td>Sec 138 NI Act. Sec 25 PSSA. Order 37 CPC.</td>
                      <td>NI Act 1881. PSSA 2007. CPC 1908.</td>
                      <td>Reply in 15 days. Secure bail. Settle at Lok Adalat.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Haridwar District.</td>
                      <td>Roshnabad District Courts.</td>
                      <td>Cheque bounce. Summary recovery.</td>
                      <td>Indian Contract Act. NI Act 1881.</td>
                      <td>File hardship proof. Settle with bank zonal desk.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Rishikesh Tehsil.</td>
                      <td>Rishikesh Civil and Criminal Courts.</td>
                      <td>NACH bounce. Civil debt claims.</td>
                      <td>PSSA 2007. Specific Relief Act.</td>
                      <td>Stop forceful steps. Obtain a fair OTS settlement.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">DRT Dehradun.</td>
                      <td>Haridwar Road Court.</td>
                      <td>Debt claims above ₹20 Lakhs.</td>
                      <td>RDB Act 1993. SARFAESI Act 2002.</td>
                      <td>Challenge bank claims. Seek stay. Negotiate OTS.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">High Court of Uttarakhand.</td>
                      <td>Nainital Bench.</td>
                      <td>Writ petitions. Section 482 CrPC.</td>
                      <td>Constitution of India. CrPC 1973.</td>
                      <td>Protect against illegal abuse and police action.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Bank NPA Accounting & NPV Recovery Mathematics */}
            <section id="bank-npa-accounting-npv-formula" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>3. Bank Balance-Sheet Accounting &amp; Recovery Economics.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Bank NPA Accounting &amp; Debt Waivers in Dehradun</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Banks follow RBI rules on bad loans. Missing three EMIs moves an account past 90 days. The bank marks it as an NPA. This stops future interest income.</p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">As bad loans age, banks must make 100% loss reserves. This locks up bank funds. Bank committees evaluate settlement offers using a Net Present Value formula:</p>

              {/* Clean Turbopack-Safe Formula Container */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Recovery Valuation Benchmark.</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden.
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">Where C_t is estimated cash recovery. r is the discount rate. Deductions cover court delays and locked reserves.</p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Court cases take four to seven years. They cost money. A quick cash settlement benefits the bank. It frees locked capital. Bank committees can grant 40% to 65% debt waivers.</p>
            </section>

            {/* Section 4: Anti-Harassment Protections Under RBI Directives */}
            <section id="anti-harassment-legal-protections" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>4. Anti-Harassment Legal Protections.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Halting Harassment Under RBI Guidelines in Dehradun</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Debtors in Uttarakhand face harsh recovery calls. Some agents break banking rules. They call late at night. They contact friends and family.</p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">RBI rules set strict limits. Agents cannot call before 8:00 AM or after 7:00 PM. In <em>ICICI Bank Ltd. v. Prakash Kaur</em>, the Supreme Court banned forceful recovery methods.</p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">SettleLoans sends cease-and-desist notices to bank nodal officers. Lenders must route all calls through your lawyer. If abuse persists, we file complaints with DLSA, Cyber Police. And the RBI Ombudsman.</p>
            </section>

            {/* Section 5: Uttarakhand Debt Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-12">
              <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-sm bg-white">
                <div className="bg-gradient-to-r from-slate-900 to-blue-950 p-4 sm:p-5 flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-600/30 border border-blue-400/40 text-blue-300">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block">
                        Uttarakhand Legal Conciliation Blueprint.
                      </span>
                      <h3 className="text-sm md:text-base font-black text-white leading-tight">
                        Personal Loan Settlement &amp; Legal Resolution Process in Dehradun
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/personal-loan-settlement-dehradun.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1F5EFF] hover:text-blue-300 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span className="hidden sm:inline">Open Full Size.</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 16:9 Landscape Infographic Image */}
                <div className="p-3 md:p-4 bg-slate-50">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img
                      src="/images/infographics/personal-loan-settlement-dehradun.jpg"
                      alt="Loan Settlement Services in Dehradun Uttarakhand Debt Resolution Blueprint"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Strategy:</strong> Stop recovery harassment. Audit loan statements. Secure 40% to 65% debt waivers with zero-balance No Dues Certificates.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Tailored Resolution Strategies */}
            <section id="tailored-resolution-strategies" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Briefcase className="w-4 h-4" />
                <span>6. Sector-Specific Resolution Protocols.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Tailored Settlement Strategies in Dehradun</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Debtors in Dehradun have distinct money needs. SettleLoans applies targeted legal strategies for each group:</p>
              
              <div className="space-y-6 my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#1F5EFF]" />
                    <span>1. Government Servants, PSU Personnel &amp; Institute Staff.</span>
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">Dehradun hosts staff across the Secretariat, FRI. and ONGC. Recovery agents often threaten office inquiries. Legally, a loan default is a civil contract case. It is not departmental misconduct. Section 60(1) (i) CPC protects most salary from attachment. Our lawyers shield your privacy. We settle a confidential settlement.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Hotel className="w-5 h-5 text-[#1F5EFF]" />
                    <span>2. Hotel, Resort, Yoga Retreat &amp; Adventure Tourism Operators.</span>
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">Resorts and travel operators in Rishikesh face seasonal income swings. Monsoons can disrupt tourism for months. Many business owners use personal cards to manage cash flow. Our lawyers submit GST records and booking logs. This helps secure 45% to 60% principal waivers with easy payment terms.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#1F5EFF]" />
                    <span>3. Higher Education Students &amp; Co-Borrower Parents.</span>
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">Graduates from local colleges sometimes face hiring delays. When student loans default, banks pressurize parent co-signers. SettleLoans represents families directly before bank committees. We submit job search records and income proofs. This secures an affordable settlement. It stops all recovery pressure on parents.</p>
                </div>
              </div>
            </section>

            {/* Section 7: Legal Defense: Section 138, Sec 25 PSSA & Lok Adalat */}
            <section id="legal-defense-lok-adalat" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>7. Legal Defense &amp; Lok Adalat Conciliation.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Defending Sec 138 &amp; Sec 25 PSSA in Dehradun</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">When defaults pass 90 days, banks may file court cases. These include Section 138 NI Act cheque cases. They also include Section 25 PSSA cases. While heard in magistrate courts, these remain civil debt cases.</p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Sending a timely legal reply within 15 days is critical. It shows genuine money distress. Banks sometimes start private arbitration in distant cities. Our lawyers challenge authority under Sections 12 and 14 of the Arbitration Act.</p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">National Lok Adalat by UKSLSA is the best forum. A Lok Adalat order acts as a final civil court decree. The bank must withdraw all cases and close your loan account permanently.</p>
            </section>

            {/* Section 8: Sanction Letter Forensics & NDC */}
            <section id="sanction-letter-forensics-ndc" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>8. Sanction Letter Forensics &amp; NDC Verification.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Sanction Letter Forensics &amp; NDC in Dehradun</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Never pay money without a checked bank letter. Recovery agents sometimes issue fake receipts. SettleLoans checks every OTS sanction letter. We verify bank seals, signatory names. And clear debt waiver terms.</p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">You pay funds directly into your loan account via RTGS or NEFT. Under RBI rules, banks must issue an NDC in 30 days. They must also update credit bureaus. Delayed certificates carry a penalty of ₹5,000 per day.</p>
            </section>

            {/* Section 9: CIBIL Score Trajectory & Rehabilitation */}
            <section id="cibil-score-rehabilitation-matrix" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. Credit Score Trajectory &amp; Rehabilitation.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Post-Settlement CIBIL Trajectory in Dehradun</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">The bank marks your settled loan with zero balance. Your credit score may drop by 75 to 150 points initially. However, ongoing default remarks stop right away.</p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">You can rebuild your credit score past 750 within 18 to 24 months. Use a fixed-deposit credit card. Keep card use below 25% and pay all bills on time.</p>

              {/* Comparative Matrix Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Point.</th>
                      <th>Active Unresolved Default.</th>
                      <th>Lawyer-Led OTS Settlement.</th>
                      <th>Post-Settlement Credit recovery.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Credit Bureau Status.</td>
                      <td className="text-red-700 font-bold">Default. Written off. Suit filed.</td>
                      <td className="text-amber-700 font-bold">Settled. Zero balance.</td>
                      <td className="text-emerald-700 font-bold">Rebuilt prime credit score.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Total Money Liability.</td>
                      <td>Compounds monthly at high rates.</td>
                      <td>Resolved with 40%–65% debt waiver.</td>
                      <td>Zero remaining debt liability.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Legal & Court Exposure.</td>
                      <td>Active Sec 138 and Sec 25 summons.</td>
                      <td>Cases withdrawn via Lok Adalat.</td>
                      <td>Complete and final legal relief.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Workplace & Social Distress.</td>
                      <td>Frequent calls and office visits.</td>
                      <td>Halted via legal notices.</td>
                      <td>Zero recovery agent contact.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">CIBIL Score Path.</td>
                      <td>Low and falling below 550.</td>
                      <td>Stabilizes in 6 to 12 months.</td>
                      <td>Reaches 750+ in 18 to 24 months.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Representation */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>10. Legal Representation &amp; Advisory.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Why Uttarakhand Borrowers Choose SettleLoans</h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">Settling personal loans in Dehradun requires strong legal counsel. SettleLoans halts recovery abuse. We defend you in local courts. Our lawyers settle with bank zonal desks. We maximize debt waivers and deliver official No Dues Certificates.</p>

              {/* Placement of Reusable CompanySection */}
              <div className="my-8">
                <CompanySection />
              </div>
            </section>

            {/* Section 11: Frequently Asked Questions (FAQ Accordion) */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>11. Frequently Asked Questions.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">FAQs: Personal Loan Settlement in Dehradun</h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    name="faq-accordion"
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

            {/* Regulatory References & Official Sources Strip (5 Official Links) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                Official Regulatory References &amp; Statutory Portals
              </h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2"><ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors" > <strong>Reserve Bank of India (RBI):</strong> Master Direction on Settlement Settlements (DOR.STR.REC.20/21.04.048/2023-24). </a></li>
                <li className="flex items-start gap-2"><ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <a href="https://highcourtofuttarakhand.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors" > <strong>High Court of Uttarakhand at Nainital:</strong> Official Case Status and Judicial Directives. </a></li>
                <li className="flex items-start gap-2"><ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <a href="https://slsa.uk.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors" > <strong>Uttarakhand State Legal Services Authority (UKSLSA):</strong> National Lok Adalat settlement Framework. </a></li>
                <li className="flex items-start gap-2"><ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <a href="https://drt.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors" > <strong>Debts Recovery Tribunal (DRT Dehradun):</strong> Territorial authority and Case Filings. </a></li>
                <li className="flex items-start gap-2"><ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors" > <strong>Reserve Bank - Integrated Ombudsman Scheme (CMS):</strong> Online Portal for Banking Complaints. </a></li>
              </ul>
            </div>

            {/* Related Guides & Resources Strip (10 Topic Badges) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1F5EFF]" />
                Explore Related Banking &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank OTS Policy.
                </Link>
                <Link
                  href="/government-employee-loan-default-salary-attachment"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Govt Staff Default Rules.
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Settlement Letter Format.
                </Link>
                <Link
                  href="/unsecured-business-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Business Loan Settlement.
                </Link>
                <Link
                  href="/education-loan-settlement-india"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Education Loan Process.
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice.
                </Link>
                <Link
                  href="/personal-loan-legal-notice"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Legal Notice Defense.
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  CIBIL Score Impact.
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 138 Defense.
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate.
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column (Sidebar Cards) */}
          <aside className="w-full sticky top-24 space-y-6">
            {/* Card 1: Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Link
                  href="/authors/ashish-jhangra"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md hover:opacity-90 transition-opacity flex-shrink-0"
                >
                  AJ
                </Link>
                <div>
                  <div className="font-bold text-slate-900 text-base leading-tight">
                    <Link
                      href="/authors/ashish-jhangra"
                      className="hover:text-[#1F5EFF] transition-colors"
                    >
                      Ashish Jhangra.
                    </Link>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">Lead Banking Legal & Debt Settlement Strategist.</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">Ashish has resolved over 1,200 debt cases across North India. He specializes in bank talks. He enforces Section 60 CPC protections and debtor rights.</p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-[#1F5EFF] hover:underline"
                >
                  View Author Profile &rarr;
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
                <span>Uttarakhand Debt Dispute Resolution.</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing Loan Recovery in Dehradun or Haridwar?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">Stop recovery calls and bounce fees today. Our banking lawyers review your loan status. We reply to court notices. We secure an authentic stamped settlement letter.</p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to a Settlement Advocate.
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans.</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span> <strong>Direct Zonal help:</strong> We settle directly with bank zonal desks. We secure maximum debt waivers. </span></li>
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span> <strong>Workplace & Salary Shields:</strong> We issue prompt legal notices. We protect government employees and business owners. </span></li>
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span> <strong>100% Stamped Check:</strong> Every settlement letter is checked on bank letterhead before payment. </span></li>
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span> <strong>Sure ₹0 NDC Giving:</strong> We track your case until the bank issues your No Dues Certificate. </span></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
