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
  Factory,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement in Trichy | SettleLoans',
  description: 'Learn how to settle personal loans in Trichy legally. Halt recovery agent harassment and resolve bank debt with expert OTS via SettleLoans.',
  keywords: [
    'debt settlement services in trichy tiruchirappalli',
    'personal loan settlement trichy',
    'loan settlement lawyers trichy',
    'bhel ancillary debt settlement',
    'thanjavur debt relief services',
    'rbi loan settlement guidelines trichy',
    'bank recovery harassment advocate trichy',
    'one time settlement ots tiruchirappalli',
    'credit card settlement trichy',
    'unsecured business loan settlement central tamil nadu',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-trichy',
  },
  openGraph: {
    title: 'Debt Settlement Services in Trichy Tiruchirappalli | SettleLoans',
    description: 'Advocate-led debt settlement for BHEL ancillary fabricators, engineering contractors, and salaried employees in Trichy and Thanjavur managing delinquent bank loans.',
    url: 'https://www.settleloans.in/personal-loan-settlement-trichy',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-trichy.jpg',
        width: 1200,
        height: 675,
        alt: 'Personal Loan and Debt Settlement in Trichy and Central Tamil Nadu',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt Settlement Services in Trichy Tiruchirappalli | SettleLoans',
    description: 'Comprehensive debt relief and OTS negotiations for engineering fabricators and salaried professionals across Tiruchirappalli under RBI guidelines.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-trichy.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-trichy#webpage",
      "url": "https://www.settleloans.in/personal-loan-settlement-trichy",
      "name": "Debt Settlement Services in Trichy Tiruchirappalli | SettleLoans",
      "description": "Stressed by bank loans in Trichy or Thanjavur? SettleLoans provides advocate-led debt settlement, bank OTS negotiation, and legal protection under RBI rules.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-loan-settlement-trichy#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-trichy#breadcrumb",
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
          "name": "Personal Loan Settlement Trichy",
          "item": "https://www.settleloans.in/personal-loan-settlement-trichy"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settlement-trichy#article",
      "headline": "Personal Loan Settlement in Trichy: Legal Debt Relief & OTS Guide",
      "description": "Comprehensive legal and financial manual for fabricators, engineering contractors, and salaried professionals in Trichy and Thanjavur to settle bank debt under RBI guidelines.",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-trichy.jpg",
      "datePublished": "2026-09-05T10:00:00+05:30",
      "dateModified": "2026-09-05T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-loan-settlement-trichy#webpage"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-trichy#service",
      "name": "SettleLoans - Debt Settlement Services in Trichy Tiruchirappalli",
      "description": "Advocate-led debt settlement and loan compromise advisory in Trichy and Thanjavur, specializing in BHEL ancillary fabricator loans, personal overdrafts, and credit card debt resolution.",
      "url": "https://www.settleloans.in/personal-loan-settlement-trichy",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-trichy.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Collector Office Road, Cantonment",
        "addressLocality": "Tiruchirappalli",
        "addressRegion": "Tamil Nadu",
        "postalCode": "620001",
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
        "reviewCount": "740",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "S. Balasubramanian, Thuvakudi Industrial Estate"
          },
          "datePublished": "2026-04-14",
          "reviewBody": "Our fabrication workshop in Thuvakudi faced acute distress when public sector project payments got delayed. We accumulated ₹38 Lakhs in unsecured business and personal credit lines. SettleLoans assigned senior banking advocates who issued formal notices to bank nodal officers. They halted recovery calls and negotiated a 54% OTS waiver directly with the zonal committee. We received our stamped No Dues Certificate in 28 days.",
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
            "name": "M. Ramanathan, Thiruverumbur Engineering Cluster"
          },
          "datePublished": "2026-05-29",
          "reviewBody": "Sharp steel price increases and cancelled purchase orders left our boiler component ancillary unit unable to service multiple bank overdrafts. SettleLoans represented us in pre-litigation talks before the Trichy District Legal Services Authority. They removed inflated penal charges and secured a 50% principal waiver with complete legal safety under RBI guidelines.",
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
            "name": "K. Vasanth, Navalpattu ELCOT IT Park"
          },
          "datePublished": "2026-06-18",
          "reviewBody": "Emergency hospital bills forced me into high-interest personal loans and credit cards totaling ₹16 Lakhs. When recovery agents began threatening visits to my office campus, SettleLoans stepped in immediately. Their advocates issued legal cease-and-desist notices that ended the harassment within 24 hours. They negotiated an affordable 58% overall waiver with full documentation.",
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
            "name": "P. Sundaram, Thanjavur Transport & Agro Operator"
          },
          "datePublished": "2026-07-22",
          "reviewBody": "A private bank sent legal notices under Section 138 regarding bounced security cheques for our commercial equipment loan. SettleLoans filed formal replies in the Trichy court and redirected the matter into Lok Adalat. We settled the debt at a 52% discount without any court penalties or business disruption.",
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-trichy#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do debt settlement services in Trichy protect engineering fabricators?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Debt settlement services provide advocate representation under RBI compromise rules. Legal counsel compiles verified business hardship documentation, halts collection calls, defends court summons, and negotiates 40% to 60% principal waivers directly with bank credit committees."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents visit BHEL ancillary workshops in Thuvakudi or Thiruverumbur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under the Reserve Bank of India Fair Practices Code, recovery agents are strictly prohibited from entering commercial workshops, factories, or offices without prior written consent. SettleLoans issues formal legal notices to bank nodal officers to halt unauthorized visits immediately."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of loan waiver can borrowers in Trichy expect through an OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers with delinquent unsecured loans past 90 days can typically secure a 40% to 60% waiver on principal debt. Banks also waive 100% of accumulated penal interest and late fees under the RBI Compromise Settlement Framework."
          }
        },
        {
          "@type": "Question",
          "name": "How does SettleLoans defend Section 138 cheque bounce notices in Trichy courts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our legal team files detailed replies before the Chief Judicial Magistrate Court in Trichy. We establish genuine financial hardship, contest arbitrary interest additions, and guide the dispute into National Lok Adalats to achieve binding compoundable settlements."
          }
        },
        {
          "@type": "Question",
          "name": "Are unsecured business loans and overdrafts eligible for compromise settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Clean business loans, personal overdrafts, and fintech loans qualify under the RBI Master Direction on Compromise Settlements (2023). Borrowers can settle overdue liabilities without risking industrial equipment or commercial property."
          }
        },
        {
          "@type": "Question",
          "name": "Why do banks in Tamil Nadu agree to write off substantial unsecured debt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Ind AS 109 accounting rules, banks must set aside heavy cash provisions for non-performing loans. Civil recovery suits take 3 to 6 years in local courts. An upfront cash compromise delivers higher Net Present Value than prolonged litigation."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are required to initiate an advocate-led loan settlement in Trichy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers must furnish recent loan account statements, income tax returns or audited balance sheets, proof of delayed client receivables or medical hardship, copies of bank legal notices, and signed legal vakalatnama or authorization forms."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory timeline for banks to issue the No Dues Certificate in Tamil Nadu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, lenders must deliver the official No Dues Certificate and return security cheques within 30 days of settlement payment. Unjustified delays obligate the lender to pay compensation of ₹5,000 per day."
          }
        },
        {
          "@type": "Question",
          "name": "How can a borrower rebuild credit scores after settling a personal loan in Trichy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Following settlement, the loan balance updates to ₹0 across CIBIL and Experian. Borrowers can restore their credit score above 750 within 18 to 24 months by using a secured fixed-deposit credit card and maintaining disciplined on-time payments."
          }
        }
      ]
    }
  ]
};

export default function TrichyLoanSettlementPage() {
  const tocItems = [
    { id: 'trichy-debt-landscape', title: '1. Industrial Debt Dynamics in Central TN' },
    { id: 'unsecured-vs-secured-protections', title: '2. Unsecured vs Secured Debt Protections' },
    { id: 'anti-harassment-tamil-nadu-laws', title: '3. Anti-Harassment & Workplace Defense' },
    { id: 'legal-defense-cheque-bounce-arbitration', title: '4. Section 138 & Judicial Summons Defense' },
    { id: 'infographic-trichy-settlement-blueprint', title: '5. Trichy Debt Resolution Infographic' },
    { id: 'npv-recovery-math-for-banks', title: '6. Bank Accounting & NPV Recovery Math' },
    { id: 'step-by-step-trichy-ots-roadmap', title: '7. Step-by-Step OTS Negotiation Process' },
    { id: 'sanction-letter-audit-ndc-mandate', title: '8. Sanction Letter Audit & ₹0 NDC Mandate' },
    { id: 'cibil-rehabilitation-central-tn', title: '9. CIBIL Score & Financial Recovery' },
    { id: 'comparative-resolution-matrix', title: '10. Legal Avenues Comparative Matrix' },
    { id: 'company-resolution-section', title: '11. SettleLoans Central TN Advocacy' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "How do debt settlement services in Trichy protect engineering fabricators?",
      answer: "Debt settlement services provide advocate representation under RBI compromise rules. Legal counsel compiles verified business hardship documentation, halts collection calls, defends court summons, and negotiates 40% to 60% principal waivers directly with bank credit committees."
    },
    {
      question: "Can recovery agents visit BHEL ancillary workshops in Thuvakudi or Thiruverumbur?",
      answer: "No. Under the Reserve Bank of India Fair Practices Code, recovery agents are strictly prohibited from entering commercial workshops, factories, or offices without prior written consent. SettleLoans issues formal legal notices to bank nodal officers to halt unauthorized visits immediately."
    },
    {
      question: "What percentage of loan waiver can borrowers in Trichy expect through an OTS?",
      answer: "Borrowers with delinquent unsecured loans past 90 days can typically secure a 40% to 60% waiver on principal debt. Banks also waive 100% of accumulated penal interest and late fees under the RBI Compromise Settlement Framework."
    },
    {
      question: "How does SettleLoans defend Section 138 cheque bounce notices in Trichy courts?",
      answer: "Our legal team files detailed replies before the Chief Judicial Magistrate Court in Trichy. We establish genuine financial hardship, contest arbitrary interest additions, and guide the dispute into National Lok Adalats to achieve binding compoundable settlements."
    },
    {
      question: "Are unsecured business loans and overdrafts eligible for compromise settlement?",
      answer: "Yes. Clean business loans, personal overdrafts, and fintech loans qualify under the RBI Master Direction on Compromise Settlements (2023). Borrowers can settle overdue liabilities without risking industrial equipment or commercial property."
    },
    {
      question: "Why do banks in Tamil Nadu agree to write off substantial unsecured debt?",
      answer: "Under Ind AS 109 accounting rules, banks must set aside heavy cash provisions for non-performing loans. Civil recovery suits take 3 to 6 years in local courts. An upfront cash compromise delivers higher Net Present Value than prolonged litigation."
    },
    {
      question: "What documents are required to initiate an advocate-led loan settlement in Trichy?",
      answer: "Borrowers must furnish recent loan account statements, income tax returns or audited balance sheets, proof of delayed client receivables or medical hardship, copies of bank legal notices, and signed legal vakalatnama or authorization forms."
    },
    {
      question: "What is the mandatory timeline for banks to issue the No Dues Certificate in Tamil Nadu?",
      answer: "Under RBI Circular RBI/2023-24/60, lenders must deliver the official No Dues Certificate and return security cheques within 30 days of settlement payment. Unjustified delays obligate the lender to pay compensation of ₹5,000 per day."
    },
    {
      question: "How can a borrower rebuild credit scores after settling a personal loan in Trichy?",
      answer: "Following settlement, the loan balance updates to ₹0 across CIBIL and Experian. Borrowers can restore their credit score above 750 within 18 to 24 months by using a secured fixed-deposit credit card and maintaining disciplined on-time payments."
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
            <span>Tiruchirappalli &amp; Central Tamil Nadu Debt Relief • Engineering &amp; Salaried Overdues</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Personal Loan Settlement in Trichy: Legal Debt Relief
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
                <span>Trichy Debt Case Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Unsecured personal and MSME loans hold no statutory lien over factory equipment, workshops, or homes in Tiruchirappalli or Thanjavur. Distressed BHEL ancillaries, engineering contractors, and salaried borrowers can halt collection harassment, defend court summons, and negotiate 40% to 60% OTS waivers under RBI rules.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Debt Settlement Services in Trichy Tiruchirappalli</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Machine Attachment:</strong> Unsecured loans create no statutory lien on factory equipment or residential properties under Section 60(1)(c) CPC.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Workplace Harassment Shield:</strong> RBI rules strictly prohibit recovery visits to BHEL ancillary workshops, offices, or Navalpattu IT Park campuses.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Judicial Summons Defense:</strong> Strategic advocate replies transform Section 138 NI Act and Section 25 PSSA summons into structured Lok Adalat settlements.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>40% to 60% Principal Haircuts:</strong> Bank credit committees and SARB branches approve substantial debt haircuts based on verifiable commercial hardship.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Regulatory Closure:</strong> RBI circulars require lenders to issue stamped No Dues Certificates and clear credit bureau entries within 30 days.</span>
                </li>
              </ul>
            </div>
            
            {/* Section 1: Industrial Debt Realities in Central TN */}
            <section id="trichy-debt-landscape" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Factory className="w-4 h-4" />
                <span>1. Industrial Debt Dynamics in Central Tamil Nadu</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Debt Realities in Trichy: Engineering &amp; Salaried Stress
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Tiruchirappalli is Central Tamil Nadu&apos;s industrial fabrication capital, driven by BHEL and Golden Rock Railway Workshop. Surrounding these anchors operates an extensive network of boiler component fabricators, machining units, and engineering contractors in Thuvakudi, Thiruverumbur, and Ariyamangalam. While driving manufacturing, enterprises face acute cash flow volatility. Staggered payments on public sector contracts, delayed receivables, and steel price spikes disrupt working capital. To sustain operations, proprietors often take unsecured credit lines and personal loans, which compound rapidly when contract cash flows stall.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Beyond manufacturing, debt distress affects transport operators and traders across the Trichy-Thanjavur delta belt. Simultaneously, salaried professionals in the Navalpattu ELCOT IT Park and educational hubs face debt stress from emergency expenses and instant loans. When accounts turn overdue past 90 days, lenders deploy aggressive recovery agencies in Cantonment and Thillai Nagar. Engaging professional debt settlement services in Trichy Tiruchirappalli enables borrowers to invoke RBI compromise policies, stop harassment, and secure binding debt reductions.
              </p>
            </section>

            {/* Section 2: Unsecured vs Secured Debt Protections */}
            <section id="unsecured-vs-secured-protections" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>2. Statutory Legal Classifications</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Unsecured vs Secured Debt Protections in Central TN
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers in Tiruchirappalli must distinguish between secured credit and unsecured debt. Secured loans, such as industrial mortgages, fall under the SARFAESI Act, 2002. Secured lenders can issue Section 13(2) notices and assume physical property possession without court sanction. Conversely, unsecured personal loans, credit cards, and clean business credit carry no pledged assets. Creditors have no summary seizure powers and must rely on standard civil suits under the Indian Contract Act, 1872.
              </p>

              {/* Distinction Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Debt Category.</th>
                      <th>Underlying Security.</th>
                      <th>Governing Statutory Law.</th>
                      <th>Lender Legal Enforcement.</th>
                      <th>Target Settlement Haircut.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Personal Loans.</td>
                      <td>None (No asset pledged).</td>
                      <td>Indian Contract Act, 1872 &amp; CPC, 1908.</td>
                      <td>Civil suit only (No seizure).</td>
                      <td><strong className="text-emerald-700">40% to 60% Principal Waiver</strong></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Credit Card Debt.</td>
                      <td>None (Unsecured revolving limit).</td>
                      <td>Indian Contract Act, 1872 &amp; RBI rules.</td>
                      <td>Civil suit only (No attachment).</td>
                      <td><strong className="text-emerald-700">50% to 70% Total Waiver</strong></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">MSME Business Loans.</td>
                      <td>None (Clean business line).</td>
                      <td>RBI Compromise Framework &amp; MSME Act.</td>
                      <td>Commercial suit (No seal).</td>
                      <td><strong className="text-emerald-700">40% to 55% Principal Waiver</strong></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Secured LAP / Loans.</td>
                      <td>Factory sheds, plots or homes.</td>
                      <td>SARFAESI Act, 2002 (Sec 13(2), Sec 13(4)).</td>
                      <td>Direct physical asset auction.</td>
                      <td>15% to 25% (Requires asset sale).</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                For fabricators in Thuvakudi and Thiruverumbur, Section 60(1)(c) of the Civil Procedure Code protects artisan tools, livelihood machinery, and basic personal necessities from court attachment. Because unsecured lenders cannot seize workshop machinery, banks prefer negotiated cash settlements over futile civil trials.
              </p>
            </section>

            {/* Section 3: Anti-Harassment & Workplace Defense */}
            <section id="anti-harassment-tamil-nadu-laws" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>3. Anti-Harassment Legal Shield</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Halting Recovery Agent Harassment in Tiruchirappalli
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Aggressive recovery agent conduct creates severe hardship for distressed borrowers across Trichy and Thanjavur. Unregulated collection agents make unauthorized visits to fabrication units in Thuvakudi or homes in KK Nagar, contact relatives, and use abusive tactics. These actions violate explicit directives issued by the Reserve Bank of India and binding rulings from the Supreme Court and Madras High Court:
              </p>
              <ul className="space-y-3 text-slate-700 my-4 text-sm md:text-base">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Workplace Visits Barred:</strong> Recovery agents cannot enter commercial workshops, factories, or corporate offices without prior written consent.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Third-Party Secrecy:</strong> Contacting family members, neighbors, or workplace associates violates constitutional privacy rights.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Restricted Calling Hours:</strong> Collection calls are legally permissible only between 08:00 AM and 07:00 PM.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Verification:</strong> Agents must display bank identity badges and hold IIBF debt recovery certification.</span>
                </li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When lenders breach these rules, SettleLoans serves formal cease-and-desist notices to bank Nodal Officers. These notices demand all communications proceed exclusively through legal counsel, stopping harassment under threat of RBI Ombudsman complaints.
              </p>
            </section>

            {/* Section 4: Legal Defense Against Cheque Bounce & Arbitration */}
            <section id="legal-defense-cheque-bounce-arbitration" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>4. Judicial Summons &amp; Arbitration Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Defending Section 138 &amp; Arbitration in Trichy Courts
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When defaults persist, lenders issue legal notices under Section 138 of the Negotiable Instruments Act, 1881, for bounced cheques, or Section 25 of the Payment and Settlement Systems Act, 2007, for dishonored e-NACH auto-debits. While these notices carry quasi-criminal implications, they do not lead to immediate arrest. Lenders must prove in court that the instrument was drawn against an active legally enforceable liability rather than retained as undated security.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Legal advocates file formal defense replies before the Chief Judicial Magistrate Court in Trichy. Our counsel demonstrates genuine commercial hardship, challenges unverified penal interest, and contests unilateral arbitration initiated in distant cities under Section 12(5) of the Arbitration Act, 1996. Citing Supreme Court precedents like Perkins Eastman, we force lenders to transfer disputes to local Trichy jurisdiction.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Once court appearances are filed, advocates redirect disputes into the District Legal Services Authority (DLSA) at the Trichy District Court complex. In National Lok Adalats, judicial officers facilitate structured compromise settlements, permanently extinguishing pending Section 138 complaints with total legal immunity.
              </p>
            </section>

            {/* Section 5: High-Impact Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-trichy-settlement-blueprint" className="scroll-mt-24 mb-12">
              <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-6 text-slate-800">
                <div className="bg-[#0A2540] text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-[#1F5EFF]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] flex items-center justify-center text-white text-xs shadow-sm">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block">
                        Tiruchirappalli &amp; Central TN Debt Resolution Blueprint
                      </span>
                      <h3 className="text-sm md:text-base font-black text-white leading-tight">
                        5-Step Loan Settlement &amp; Debt Compromise Framework
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/personal-loan-settlement-trichy.jpg"
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
                      src="/images/infographics/personal-loan-settlement-trichy.jpg"
                      alt="Personal Loan and Debt Settlement Blueprint in Trichy and Central Tamil Nadu"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Protocol:</strong> Shield equipment. Stop workplace harassment. Defend court summons. Secure 40% to 60% OTS waivers under RBI rules.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Consult Trichy Debt Advocate &rarr;
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                NPV Valuation &amp; Bank Math in Central Tamil Nadu
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Lenders approve substantial debt write-offs due to financial accounting rules under the RBI Compromise Settlement Framework. Under Ind AS 109 and IRAC prudential norms, an unsecured credit facility overdue for ninety days enters NPA classification. Banks must make mandatory cash provisions from balance sheet profits, escalating from 25% up to a 100% write-off over subsequent reporting quarters.
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

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under Net Present Value (NPV) modeling, civil litigation in Trichy courts is uneconomical for lenders. Contested lawsuits require heavy court fees and take 3 to 6 years without guarantee of finding attachable assets. In contrast, an advocate-negotiated cash settlement of 40% to 55% provides immediate capital recovery, releases blocked NPA reserves, and eliminates legal overhead. Bank credit committees routinely approve compromise settlements that maximize net recovery.
              </p>
            </section>

            {/* Section 7: Step-by-Step OTS Negotiation Process */}
            <section id="step-by-step-trichy-ots-roadmap" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>6. Step-by-Step OTS Negotiation Process</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Step-by-Step OTS Protocol in Tiruchirappalli
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Resolving delinquent personal and business loans through an advocate-led One-Time Settlement involves five strategic phases designed to protect borrower rights and optimize savings:
              </p>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">1</span>
                    Hardship Dossier Compilation
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Our legal team compiles balance sheets, GST records, and client delay notices to document genuine financial hardship.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">2</span>
                    Revocation of Mandates &amp; Legal Shield
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Revoking e-NACH mandates through banks stops bounce fees, while formal legal notices direct all communications to our advocates.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">3</span>
                    Stressed Asset Desk Submissions
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Bypassing field tele-callers to submit formal settlement petitions directly to bank Zonal Stressed Assets Recovery Branches (SARB).
                  </p>
                </div>

                {/* Step 4 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">4</span>
                    Principal Haircut Negotiation
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Enforcing complete waivers on penal interest and late fees under RBI fair practices codes, while securing 40% to 60% principal write-offs.
                  </p>
                </div>

                {/* Step 5 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">5</span>
                    Forensic Sanction Audit &amp; NDC Delivery
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Forensic audit of the stamped bank sanction letter prior to payment, followed by securing the official No Dues Certificate within 30 days.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Sanction Letter Audit &amp; NDC in Tiruchirappalli
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Forensic verification of the bank sanction letter is critical to ensure permanent debt relief. Rogue collection agents often promise verbal settlements or issue forged letters to divert payments into unauthorized accounts. SettleLoans audits every settlement letter, verifying official bank letterheads, authorized officer signatures, loan account numbers, exact compromise amounts, and explicit clauses confirming full debt extinguishment.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                After settlement funds are deposited directly into the borrower loan account, RBI Circular RBI/2023-24/60 requires lenders to issue the official No Dues Certificate (NDC) and return all security cheques within thirty calendar days. Failure to deliver the NDC within this statutory window entitles the borrower to mandatory compensation of ₹5,000 for each day of delay.
              </p>
            </section>

            {/* Section 9: CIBIL Rehabilitation & Commercial Credit Recovery */}
            <section id="cibil-rehabilitation-central-tn" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>8. Credit Score Rehabilitation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                CIBIL Score Rehabilitation in Central Tamil Nadu
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Following an OTS settlement, the lender updates credit rating bureaus, including CIBIL, Experian, and Equifax. The loan status transitions from delinquent default to &apos;Settled&apos;, with outstanding dues recorded as ₹0. While a settled status causes an initial drop in credit score, it halts monthly default reporting, eliminates penal fee growth, and ends all civil litigation threats.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers in Trichy can rebuild their credit profile to 750+ within 18 to 24 months. By securing a small fixed-deposit-backed credit card, keeping credit usage below thirty percent, and making timely utility and card payments, positive credit history accumulates steadily, restoring eligibility for institutional loans.
              </p>
            </section>

            {/* Section 10: Legal Avenues Comparative Matrix Table */}
            <section id="comparative-resolution-matrix" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>9. Resolution Strategy Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Debt Resolution Matrix in Central Tamil Nadu
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Compare debt resolution avenues available to borrowers across Trichy, Thanjavur, and Pudukkottai:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Resolution Pathway.</th>
                      <th>Legal Forum.</th>
                      <th>Waiver Range.</th>
                      <th>Borrower Risk.</th>
                      <th>Statutory Outcome.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Advocate Bank OTS.</td>
                      <td>Bank Stressed Asset Committee.</td>
                      <td><strong className="text-emerald-700">40% to 60% Principal Waiver</strong></td>
                      <td><strong>Zero</strong> (Advocate managed).</td>
                      <td>Binding settlement with ₹0 NDC.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">National Lok Adalat.</td>
                      <td>Trichy DLSA Judicial Committee.</td>
                      <td><strong className="text-emerald-700">45% to 60% Debt Haircut</strong></td>
                      <td>Minimal (Single hearing).</td>
                      <td><strong>Civil Court Decree</strong> (Final order).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Contested Court Trial.</td>
                      <td>Magistrate or Civil Court.</td>
                      <td>0% (Full claim + legal fees).</td>
                      <td>High (Warrants &amp; decrees).</td>
                      <td>Lengthy litigation lasting 3 to 6 years.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Loan Restructuring.</td>
                      <td>Bank tenure extension.</td>
                      <td>0% (No reduction).</td>
                      <td>Moderate (Higher total interest).</td>
                      <td>Lengthens debt burden without reduction.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Representation */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>10. Specialized Central TN Debt Advocacy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Central TN Borrowers Rely on SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                SettleLoans delivers advocate-led debt resolution for fabricators, engineering contractors, and salaried employees across Tiruchirappalli and Thanjavur. Our banking advocates neutralize recovery harassment under RBI regulations, defend court summons, safeguard essential workshop machinery under CPC Section 60(1)(c), and secure 40% to 60% debt haircuts through formal One-Time Settlements backed by stamped No Dues Certificates.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                FAQs: Debt Settlement in Tiruchirappalli
              </h2>

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
                    <strong>RBI Master Circular:</strong> Fair Practices Code for Lenders, Recovery Agent Conduct &amp; Penal Charge Caps
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
                    <strong>Madras High Court:</strong> Judicial Directives on Fair Debt Recovery, Prohibition of Third-Party Harassment &amp; Due Process
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme:</strong> Grievance Redressal Mechanism for Unlawful Recovery Harassment &amp; NDC Delays
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
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987, Pre-Litigation Lok Adalat Compromise Framework
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
                    Lead Banking Legal &amp; Debt Settlement Strategist
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
                <span>Trichy Debt Advisory</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing Loan Default in Trichy or Thanjavur?
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
                <span>Why Central TN Borrowers Trust Us</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Commercial Privacy:</strong> Signed nondisclosure agreements protect business confidentiality across Central Tamil Nadu.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Workplace Harassment:</strong> We send legal notices to stop collection visits to factory units and offices under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Access:</strong> We bypass recovery agents and negotiate directly with bank SARB desks and credit committees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Sanction Verification:</strong> Every settlement is legally audited on official bank letterhead before fund remittance.
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
