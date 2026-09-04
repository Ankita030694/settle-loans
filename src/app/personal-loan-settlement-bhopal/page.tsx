import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import SidebarTOC from '@/components/SidebarTOC';
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
  Award,
  PhoneCall,
  ExternalLink,
  Building2,
  Scale,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  ShieldAlert,
  UserCheck,
  AlertCircle,
  Landmark,
  Layers,
  Check,
  BookOpen,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement in Bhopal | SettleLoans',
  description: 'Learn how to settle personal loans legally in Bhopal. Stop bank recovery harassment and resolve debt with up to 60% OTS waiver via SettleLoans.',
  keywords: [
    'personal loan settlement advocates in bhopal',
    'loan settlement lawyer bhopal',
    'debt settlement advocate in bhopal',
    'bank loan settlement in bhopal',
    'lok adalat loan settlement bhopal',
    'section 138 lawyer bhopal',
    'nbfc recovery agent harassment bhopal',
    'business loan settlement bhopal',
    'cibil recovery after settlement bhopal',
    'ots scheme bhopal madhya pradesh',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-bhopal',
  },
  openGraph: {
    title: 'Personal Loan Settlement Advocates in Bhopal: Settle Debt (2026)',
    description: 'Comprehensive legal and financial guide for resolving delinquent personal loans, credit card balances, and MSME credit lines in Bhopal and Madhya Pradesh under RBI compromise settlement frameworks.',
    url: 'https://www.settleloans.in/personal-loan-settlement-bhopal',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-bhopal.jpg',
        width: 1200,
        height: 675,
        alt: 'Personal Loan Settlement Advocates in Bhopal - Legal Debt Defense & OTS Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Loan Settlement Advocates in Bhopal: Settle Debt',
    description: 'Strategic legal defense against aggressive recovery agents, Section 138 NI Act notices, and Lok Adalat compromise settlements for Bhopal and MP borrowers.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-bhopal.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-bhopal#webpage",
      "url": "https://www.settleloans.in/personal-loan-settlement-bhopal",
      "name": "Personal Loan Settlement Advocates in Bhopal: Settle Debt (2026)",
      "description": "Facing loan default in Bhopal? Consult expert personal loan settlement advocates in Bhopal to stop recovery harassment, defend Section 138/25 PSSA summons at Arera Hills District Court, represent at DLSA Lok Adalat, and secure 45%–65% RBI OTS debt waivers.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-loan-settlement-bhopal#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-bhopal#breadcrumb",
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
          "name": "Personal Loan Settlement Bhopal",
          "item": "https://www.settleloans.in/personal-loan-settlement-bhopal"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settlement-bhopal#article",
      "headline": "Personal Loan Settlement Advocates in Bhopal: Legal Protection, Lok Adalat Representation & RBI OTS Debt Relief",
      "description": "A comprehensive regulatory, civil, and financial roadmap for government employees, educators, commercial traders, and MSME business owners navigating unsecured debt settlement in Bhopal and Madhya Pradesh. Covers RBI compromise settlement circulars, Arera Hills District Court JMFC defenses, DLSA Lok Adalat awards, and 45%–65% principal haircuts.",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-bhopal.jpg",
      "datePublished": "2026-08-28T12:00:00+05:30",
      "dateModified": "2026-08-28T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-loan-settlement-bhopal#webpage"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-bhopal#service",
      "name": "SettleLoans - Personal Loan Settlement Advocates in Bhopal",
      "description": "Specialized legal representation and debt settlement advisory for state and central government employees, academic professionals, retail traders, and MSME industrial borrowers dealing with personal loan, credit card, and business credit default in Bhopal and Madhya Pradesh.",
      "url": "https://www.settleloans.in/personal-loan-settlement-bhopal",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-bhopal.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Commercial Complex, Zone-II, Maharana Pratap Nagar",
        "addressLocality": "Bhopal",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "462011",
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
        "reviewCount": "1890",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Dharmendra Saxena"
          },
          "datePublished": "2026-06-19",
          "reviewBody": "I work near Vallabh Bhawan in Bhopal. Medical bills caused ₹18.5 Lakhs in loan dues across ICICI and SBI. Recovery agents called my office landline. SettleLoans sent legal notices under the RBI Fair Practices Code. They stopped all office calls in 48 hours. They got an OTS sanction letter for ₹7.8 Lakhs with full No Dues Certificates.",
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
            "name": "Sunil Agrawal"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "I run a garment shop in New Market, Bhopal. Business slowdown caused defaults on ₹22 Lakhs in credit lines. SettleLoans took over our case. They defended us at Arera Hills District Court. They won a 58% principal cut through a structured settlement decree.",
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
            "name": "Prof. Archana Verma"
          },
          "datePublished": "2026-05-22",
          "reviewBody": "Salary delays caused NACH bounces on my ₹11 Lakh personal loan. The NBFC filed a Section 25 PSSA case in JMFC court. SettleLoans represented me at DLSA Lok Adalat. They settled the debt for ₹4.9 Lakhs and ensured ₹0 balance reporting across credit bureaus.",
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
            "name": "Harishankar Malviya"
          },
          "datePublished": "2026-08-09",
          "reviewBody": "Our workshop in Govindpura Industrial Area faced cash losses on ₹15 Lakhs in unsecured debt. SettleLoans negotiated directly with the bank's Zonal Stressed Asset Committee. They won a 54% debt waiver with official stamped sanction letters.",
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-bhopal#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do borrowers in Bhopal need specialized loan settlement advocates instead of dealing with recovery agents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Collection agents work on commission. They cannot grant loan waivers. A settlement advocate uses RBI Master Directions to defend your rights. We stop agent visits. We defend Section 138 NI Act or Section 25 PSSA cases in Arera Hills District Court. We negotiate directly with bank credit committees for 45% to 65% debt waivers."
          }
        },
        {
          "@type": "Question",
          "name": "Can bank recovery agents visit government offices in Mantralaya, Satpura Bhawan, or BHEL Bhopal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. RBI rules strictly ban recovery visits to government offices, colleges, or workplaces. Agents cannot contact co-workers or supervisors. If agents violate rules, our advocates send legal notices and file complaints with the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of loan waiver can salaried employees and business owners in Bhopal expect in an OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For unsecured loans and credit cards overdue past 90 days (NPA status), banks in Bhopal approve 45% to 65% principal cuts. Banks also waive 100% of late fees, penal interest, and NACH bounce charges."
          }
        },
        {
          "@type": "Question",
          "name": "How does the District Legal Services Authority (DLSA) National Lok Adalat in Bhopal resolve loan disputes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bhopal DLSA holds quarterly Lok Adalats at the Arera Hills District Court Complex. Judicial benches help borrowers and bank officers reach compromise settlements. The final agreement becomes a Lok Adalat Award. Under the Legal Services Authorities Act 1987, this award acts as a final civil court decree."
          }
        },
        {
          "@type": "Question",
          "name": "Can a borrower in Bhopal be arrested by police for defaulting on a personal loan or credit card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Unsecured loan default is a civil contract dispute under the Indian Contract Act, 1872. Police in Bhopal cannot register FIRs or arrest you for loan defaults. False police threats by agents count as criminal intimidation under the BNS."
          }
        },
        {
          "@type": "Question",
          "name": "How should a borrower in Bhopal respond to a Section 138 NI Act or Section 25 PSSA summons from JMFC Arera Hills?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When cheques or NACH auto-debits bounce, lenders file cases under Section 138 NI Act or Section 25 PSSA at Arera Hills court. You should hire an advocate to appear on your behalf. We secure bail. We prove financial hardship and refer the case to Lok Adalat for an agreed OTS."
          }
        },
        {
          "@type": "Question",
          "name": "How do you stop recurring electronic NACH mandate bounce charges across Bhopal bank branches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under NPCI rules, you can instruct your home bank in Bhopal to cancel or freeze the e-NACH mandate. During settlement talks, our advocates also get a 100% waiver of all accumulated bounce charges."
          }
        },
        {
          "@type": "Question",
          "name": "How does personal loan settlement affect CIBIL scores in Bhopal, and how can credit be rebuilt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The bank reports your loan as 'Settled' with ₹0 dues to credit bureaus. This stops penal fees and default marks. You can rebuild your credit score to 750+ in 18 to 24 months with a secured credit card and timely payments."
          }
        },
        {
          "@type": "Question",
          "name": "What essential forensic checks must be conducted on a bank OTS sanction letter in Bhopal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Before you pay, our advocates verify the letter. It must be on official bank letterhead with CIN. It must state your full name and loan account number. It must list the agreed amount and payment dates. It must confirm withdrawal of all court cases. And it must guarantee a ₹0 No Dues Certificate within 30 days under RBI Circular RBI/2023-24/60."
          }
        },
        {
          "@type": "Question",
          "name": "What compensation is a bank in Madhya Pradesh liable to pay if it delays the No Dues Certificate beyond 30 days?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, lenders must issue your No Dues Certificate within 30 days of full settlement. If delayed, the bank must pay compensation of ₹5,000 per day directly to the borrower."
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

export default function PersonalLoanSettlementBhopalPage() {
  const tocItems = [
    { id: 'bhopal-administrative-hub-debt', title: '1. Bhopal Administrative Hub & Debt Stress' },
    { id: 'delinquency-timeline-npa-bhopal', title: '2. Delinquency Timeline & Ind AS 109 NPA' },
    { id: 'anti-harassment-nach-protection', title: '3. Halting Harassment & Stopping NACH Sweeps' },
    { id: 'rbi-ots-npv-valuation', title: '4. RBI OTS Rules & NPV Recovery Math' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'local-court-defense-bhopal', title: '6. Arera Hills District Court & JMFC Defense' },
    { id: 'lok-adalat-representation-bhopal', title: '7. DLSA Bhopal Lok Adalat Conciliation' },
    { id: 'step-by-step-settlement-roadmap', title: '8. Step-by-Step Settlement Roadmap' },
    { id: 'sanction-letter-audit-ndc', title: '9. Sanction Letter Forensics & ₹0 NDC' },
    { id: 'cibil-score-rehabilitation', title: '10. CIBIL Score Trajectory & Recovery' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense in Bhopal' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "Why do borrowers in Bhopal need specialized loan settlement advocates instead of dealing with recovery agents?",
      answer: "Collection agents work on commission. They cannot grant loan waivers. A settlement advocate uses RBI Master Directions to defend your rights. We stop agent visits. We defend Section 138 NI Act or Section 25 PSSA cases in Arera Hills District Court. We negotiate directly with bank credit committees for 45% to 65% debt waivers."
    },
    {
      question: "Can bank recovery agents visit government offices in Mantralaya, Satpura Bhawan, or BHEL Bhopal?",
      answer: "No. RBI rules strictly ban recovery visits to government offices, colleges, or workplaces. Agents cannot contact co-workers or supervisors. If agents violate rules, our advocates send legal notices and file complaints with the RBI Ombudsman."
    },
    {
      question: "What percentage of loan waiver can salaried employees and business owners in Bhopal expect in an OTS?",
      answer: "For unsecured loans and credit cards overdue past 90 days (NPA status), banks in Bhopal approve 45% to 65% principal cuts. Banks also waive 100% of late fees, penal interest, and NACH bounce charges."
    },
    {
      question: "How does the District Legal Services Authority (DLSA) National Lok Adalat in Bhopal resolve loan disputes?",
      answer: "Bhopal DLSA holds quarterly Lok Adalats at the Arera Hills District Court Complex. Judicial benches help borrowers and bank officers reach compromise settlements. The final agreement becomes a Lok Adalat Award. Under the Legal Services Authorities Act 1987, this award acts as a final civil court decree."
    },
    {
      question: "Can a borrower in Bhopal be arrested by police for defaulting on a personal loan or credit card?",
      answer: "No. Unsecured loan default is a civil contract dispute under the Indian Contract Act, 1872. Police in Bhopal cannot register FIRs or arrest you for loan defaults. False police threats by agents count as criminal intimidation under the BNS."
    },
    {
      question: "How should a borrower in Bhopal respond to a Section 138 NI Act or Section 25 PSSA summons from JMFC Arera Hills?",
      answer: "When cheques or NACH auto-debits bounce, lenders file cases under Section 138 NI Act or Section 25 PSSA at Arera Hills court. You should hire an advocate to appear on your behalf. We secure bail. We prove financial hardship and refer the case to Lok Adalat for an agreed OTS."
    },
    {
      question: "How do you stop recurring electronic NACH mandate bounce charges across Bhopal bank branches?",
      answer: "Under NPCI rules, you can instruct your home bank in Bhopal to cancel or freeze the e-NACH mandate. During settlement talks, our advocates also get a 100% waiver of all accumulated bounce charges."
    },
    {
      question: "How does personal loan settlement affect CIBIL scores in Bhopal, and how can credit be rebuilt?",
      answer: "The bank reports your loan as 'Settled' with ₹0 dues to credit bureaus. This stops penal fees and default marks. You can rebuild your credit score to 750+ in 18 to 24 months with a secured credit card and timely payments."
    },
    {
      question: "What essential forensic checks must be conducted on a bank OTS sanction letter in Bhopal?",
      answer: "Before you pay, our advocates verify the letter. It must be on official bank letterhead with CIN. It must state your full name and loan account number. It must list the agreed amount and payment dates. It must confirm withdrawal of all court cases. And it must guarantee a ₹0 No Dues Certificate within 30 days under RBI Circular RBI/2023-24/60."
    },
    {
      question: "What compensation is a bank in Madhya Pradesh liable to pay if it delays the No Dues Certificate beyond 30 days?",
      answer: "Under RBI Circular RBI/2023-24/60, lenders must issue your No Dues Certificate within 30 days of full settlement. If delayed, the bank must pay compensation of ₹5,000 per day directly to the borrower."
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
        className="w-full border-b border-slate-700/80 pt-28 pb-8 md:pt-36 md:pb-10 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-blue-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Landmark className="w-3.5 h-3.5" />
            <span>Regional Banking Legal Defense • Bhopal &amp; Madhya Pradesh Administrative Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Personal Loan Settlement in Bhopal: Legal OTS Guide</h1>

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
              <span>Consult Bhopal Settlement Advocate</span>
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
                <span>Bhopal Case Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                State employees in Mantralaya, BHEL staff, teachers, and traders in New Market face tight budgets. Borrowers have clear legal rights under RBI rules. Our advocates stop agent harassment. We defend Section 138 NI Act and Section 25 PSSA summons at Arera Hills. We also secure 45% to 65% OTS debt waivers.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Personal Loan Settlement in Bhopal</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Civil Contract Nature.</strong> Unsecured loan default is a civil dispute under the Indian Contract Act, 1872. Police in Bhopal cannot arrest you for debt defaults.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Workplace Anti-Harassment.</strong> RBI rules strictly ban recovery visits to Mantralaya, Satpura Bhawan, schools, or shops. Agents cannot call third parties.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>45% to 65% Debt Waivers.</strong> When loans become NPAs after 90 to 180 days, banks set aside funds and approve deep OTS cuts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Arera Hills Court Defense.</strong> Our advocates handle Section 138 NI Act and Section 25 PSSA summons. We secure binding settlements at DLSA Lok Adalat.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Official No Dues Certificate.</strong> Under RBI Circular RBI/2023-24/60, banks must issue your No Dues Certificate in 30 days. Delays cost ₹5,000 per day.</span>
                </li>
              </ul>
            </div>
            
            {/* Section 1: Economic Landscape & Debt Distress in Bhopal */}
            <section id="bhopal-administrative-hub-debt" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Administrative Capital Hub &amp; Debt Stress</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">The Economic Reality of Debt Distress in Bhopal</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Bhopal is the capital hub of Madhya Pradesh. Many people work in Vallabh Bhawan (Mantralaya) and Satpura Bhawan. Others work at BHEL Bhopal, AIIMS, and local colleges. Busy markets run in MP Nagar, New Market, and Govindpura.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Banks gave many personal loans across Bhopal. When health crises or pay delays happen, EMIs bounce. Banks then add heavy penal charges. Recovery agents start calling homes and workplaces.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Loan default is a civil dispute under the Indian Contract Act, 1872. It is not a crime. Under RBI rules, borrowers facing hardship can stop harassment. You can negotiate a legal One-Time Settlement (OTS).
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Core Legal Principle.</strong> RBI rules protect borrowers facing real financial stress. Lenders cannot treat honest borrowers as wilful defaulters. Banks are encouraged to approve compromise settlements.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Timeline & Ind AS 109 NPA Mechanics */}
            <section id="delinquency-timeline-npa-bhopal" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; NPA Classification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">NPA Delinquency Lifecycle in Bhopal</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI IRACP and Ind AS 109 rules, banks track overdue loans by days. Early overdue stages are SMA-0 and SMA-1. After 90 days, the loan becomes an NPA. The bank freezes interest and locks capital reserves. This creates strong motivation for banks to settle.
              </p>

              {/* Comprehensive Stage Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Delinquency Stage</th>
                      <th>Overdue Days (DPD)</th>
                      <th>Lender Recovery Strategy in Bhopal</th>
                      <th>Legal Exposure &amp; Court Notices</th>
                      <th>Settlement Haircut Potential</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-0 (Early Overdue)</td>
                      <td>1 – 30 Days</td>
                      <td>SMS alerts and automated calls.</td>
                      <td>Zero court action; credit score drops.</td>
                      <td>No cuts. Banks demand full EMI.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-1 (Mid Delinquency)</td>
                      <td>31 – 60 Days</td>
                      <td>Frequent agent calls and loan recall notices.</td>
                      <td>Warning letters sent to borrower.</td>
                      <td>Low cuts. Banks offer loan tenure extension.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-2 (Pre-NPA Escalation)</td>
                      <td>61 – 90 Days</td>
                      <td>Agent visits to home or office.</td>
                      <td>15-day notices under Section 138 NI Act or Section 25 PSSA.</td>
                      <td>Moderate cuts. Penal fees can be waived.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">NPA (Substandard Asset)</td>
                      <td>91 – 180 Days</td>
                      <td>Account sent to Zonal Stressed Assets desk.</td>
                      <td>Court summons from JMFC court; Lok Adalat notices.</td>
                      <td><span className="text-emerald-700 font-bold">High cuts (35% to 50% principal waiver).</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-red-700">Doubtful / Written-Off Asset</td>
                      <td>181 – 365+ Days</td>
                      <td>Bank writes off the bad debt.</td>
                      <td>Civil suits under Order 37 CPC and Lok Adalat decrees.</td>
                      <td><span className="text-emerald-700 font-bold">Maximum cuts (50% to 65% principal waiver).</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Once a loan is written off, the bank has booked the loss. An immediate cash OTS gives the bank fresh funds. This makes Zonal Credit Committees approve large principal cuts.
              </p>
            </section>

            {/* Section 3: Stopping Recovery Aggression & Halting Unlawful NACH Sweeps */}
            <section id="anti-harassment-nach-protection" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>3. Halting Harassment &amp; Stopping NACH Charges</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Defending Against Harassment in Bhopal</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers across Arera Colony, Shahpura, MP Nagar, and Kolar Road face aggressive collection agents. Agents often threaten office visits or shop disruptions. The RBI Fair Practices Code sets strict rules:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-700 text-base md:text-lg">
                <li><strong>Allowed Hours.</strong> Agents may only call or visit between 8 AM and 7 PM.</li>
                <li><strong>No Third-Party Calls.</strong> Calling office bosses, colleagues, or relatives is illegal.</li>
                <li><strong>Zero Abuse.</strong> Abusive language and public shaming violate RBI rules.</li>
                <li><strong>Mandatory ID.</strong> Agents must show ID cards and bank authorization letters.</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Repeated NACH auto-debit presentations create heavy bounce fees. Under NPCI rules, you can instruct your bank to cancel the e-NACH mandate. Our advocates also get 100% of bounce fees waived during OTS talks.
              </p>
            </section>

            {/* Section 4: RBI OTS Compromise Framework & NPV Recovery Formula */}
            <section id="rbi-ots-npv-valuation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>4. RBI Compromise Guidelines &amp; NPV Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">RBI Compromise Rules &amp; NPV in Bhopal</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI Master Direction DOR.STR.REC.20/21.04.048/2023-24, banks maintain compromise policies. Personal loans have no collateral to seize under SARFAESI. Banks use Net Present Value (NPV) math to evaluate settlement offers:
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
                  Where C_t is expected recovery and r is discount rate. Deductions cover 3 to 5 years of legal costs and locked NPA funds.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Our advocates prove that long court trials cost banks money. A fast cash settlement gives banks higher net value. This helps win large principal waivers.
              </p>

              {/* Settlement Haircut Slabs Table */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">Realistic Loan Settlement Haircut Slabs for Bhopal &amp; MP Borrowers</h3>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Debt Category</th>
                      <th>Delinquency Bucket</th>
                      <th>Penal &amp; Bounce Waiver</th>
                      <th>Principal Haircut Range</th>
                      <th>Optimal Settlement Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Unsecured Personal Loan</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% Complete Waiver</td>
                      <td>35% – 50% Principal Waiver</td>
                      <td>Pay 45%–55% of Core Principal</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Unsecured Personal Loan</td>
                      <td>180 – 365+ Days (Written Off)</td>
                      <td>100% Complete Waiver</td>
                      <td>50% – 65% Principal Waiver</td>
                      <td>Pay 35%–45% of Core Principal</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Credit Card Outstanding</td>
                      <td>90 – 180+ Days (NPA)</td>
                      <td>100% Interest &amp; Late Fees</td>
                      <td>55% – 70% Total Waiver</td>
                      <td>Pay 30%–40% of Total Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">MSME Unsecured Business Loan</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% All Penal Charges</td>
                      <td>35% – 50% Principal Waiver</td>
                      <td>Pay 45%–55% of Disbursed Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Fintech Instant Loan App</td>
                      <td>60 – 180+ Days (Default)</td>
                      <td>100% Compound Fees</td>
                      <td>50% – 65% Principal Waiver</td>
                      <td>Pay 35%–45% of Net Principal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: High-Impact Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-12">
              <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-6 text-slate-800">
                <div className="bg-[#0A2540] text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-[#1F5EFF]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] flex items-center justify-center text-white text-xs shadow-sm">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block">
                        Legal Defense &amp; Action Blueprint
                      </span>
                      <h3 className="text-sm md:text-base font-black text-white leading-tight">
                        Bhopal Personal Loan Settlement &amp; Lok Adalat Legal Defense Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/personal-loan-settlement-bhopal.jpg"
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
                      src="/images/infographics/personal-loan-settlement-bhopal.jpg"
                      alt="Personal Loan Settlement Advocates in Bhopal Legal Defense and Lok Adalat Blueprint"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Strategy:</strong> Stop recovery harassment fast. Defend summons at Arera Hills District Court. Negotiate directly with credit committees for 45% to 65% debt waivers.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Local Court Defense: Section 138, Section 25 PSSA & JMFC Bhopal */}
            <section id="local-court-defense-bhopal" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>6. Arera Hills District Court &amp; JMFC Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Sec 138 NI Act &amp; Sec 25 Defense in Bhopal Courts</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Lenders may file cases before the JMFC at Arera Hills District Court. These include Section 138 cheque bounce cases. They also file Section 25 PSSA cases for NACH bounce.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A court summons is not an arrest warrant. Under CrPC and BNSS rules, these are bailable offenses. They are compoundable in nature. Our advocate represents you in court. Counsel secures bail quickly. We show proof of genuine financial hardship. Then, we seek referral to the Lok Adalat for settlement.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Some lenders start unilateral arbitration in distant cities. Under Supreme Court rulings in <em>Perkins Eastman</em> and <em>TRF Ltd.</em>, such actions are illegal. Unilateral arbitrator appointments have no legal standing. Your advocate challenges jurisdiction under Section 12 and Section 14 of the Arbitration Act. This halts biased arbitration.
              </p>
            </section>

            {/* Section 7: National Lok Adalat Representation at DLSA Bhopal */}
            <section id="lok-adalat-representation-bhopal" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Landmark className="w-4 h-4" />
                <span>7. DLSA Bhopal Lok Adalat Conciliation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Resolving Defaults via Bhopal DLSA Lok Adalat</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                DLSA Bhopal holds National Lok Adalats every quarter at Arera Hills. They provide a trusted forum to settle unpaid debts. Bank officers attend with special settlement authority. They can grant 45% to 65% debt waivers.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A Lok Adalat settlement offers key legal benefits:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-700 text-base md:text-lg">
                <li><strong>Civil Court Decree Status.</strong> Under Section 21 of the Legal Services Authorities Act, 1987, a Lok Adalat Award has the force of a civil decree.</li>
                <li><strong>Final and Binding.</strong> Once signed, the award cannot be challenged or appealed.</li>
                <li><strong>Case Dismissal.</strong> All Section 138, Section 25 PSSA, and recovery cases close permanently.</li>
                <li><strong>Court Fee Refund.</strong> Banks get court fees refunded. This encourages them to offer larger debt waivers.</li>
              </ul>
            </section>

            {/* Section 8: Step-by-Step Settlement Roadmap */}
            <section id="step-by-step-settlement-roadmap" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>8. Step-by-Step Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Step-by-Step Settlement Roadmap in Bhopal</h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Our structured six-phase roadmap helps you secure the best settlement terms:
              </p>

              <div className="space-y-6">
                {/* Phase 1 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">1</span>
                    Hardship Dossier &amp; Forensic Financial Audit
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Collect proof of income loss, medical expenses, or business slowdown. This proves genuine hardship under RBI compromise rules.
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">2</span>
                    NACH Mandate Cancellation &amp; Representation Notice
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Stop e-NACH auto-debits to avoid recurring bounce penalties. Send a formal legal notice directing lenders to communicate only with your lawyer.
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">3</span>
                    Submitting Compromise Petition to Stressed Assets Desk
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    File a formal compromise proposal with the bank zonal stressed assets desk in Bhopal or Indore. Start offers at 25% to 35% of principal dues.
                  </p>
                </div>

                {/* Phase 4 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">4</span>
                    Strategic Negotiation &amp; Credit Committee Approval
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Our advocates counter bank demands using loan recovery norms. We negotiate to win 45% to 65% debt waivers from credit committees.
                  </p>
                </div>

                {/* Phase 5 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">5</span>
                    Forensic Audit of the OTS Sanction Letter
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Check the settlement letter on official bank letterhead. Ensure all account numbers, waiver sums, and case withdrawal terms are accurate.
                  </p>
                </div>

                {/* Phase 6 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">6</span>
                    Remittance &amp; 30-Day ₹0 NDC Delivery Enforcement
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Pay the agreed settlement sum directly into the bank loan account. Enforce delivery of the No Dues Certificate within 30 days under RBI circular RBI/2023-24/60.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Sanction Letter Forensics & ₹0 NDC Mandate */}
            <section id="sanction-letter-audit-ndc" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>9. Sanction Letter Forensics &amp; NDC Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Sanction Letter Audit &amp; NDC in Bhopal</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Recovery agents may send fake or unauthorized settlement letters. To protect your money, our legal team verifies every document:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-700 text-base md:text-lg">
                <li><strong>Bank Letterhead.</strong> The letter must appear on official corporate letterhead with proper bank details and CIN.</li>
                <li><strong>Accurate Details.</strong> The notice must state your name, PAN, loan account number, and total outstanding balance.</li>
                <li><strong>Clear Payment Terms.</strong> It must state the exact settlement amount, due dates, and official bank payment modes.</li>
                <li><strong>Full Liability Release.</strong> It must confirm full loan closure and withdrawal of all pending court cases.</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI Circular RBI/2023-24/60, lenders must issue a No Dues Certificate (NDC) within 30 days of full payment. They must update bureau records. If a lender delays beyond 30 days, they must pay ₹5,000 per day in compensation.
              </p>
            </section>

            {/* Section 10: CIBIL Score Trajectory & Rehabilitation */}
            <section id="cibil-score-rehabilitation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>10. Credit Rehabilitation &amp; Score Recovery</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Post-Settlement CIBIL Recovery in Bhopal</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                After settlement, credit bureaus (CIBIL, Experian, Equifax, CRIF) mark the loan as <strong>&apos;Settled&apos;</strong> with a <strong>₹0 balance</strong>. Your score may drop 75 to 150 points at first. But this ends overdue interest charges and stops legal action.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Bhopal borrowers can rebuild their credit score to 750+ in 18 to 24 months with simple steps:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-700 text-base md:text-lg">
                <li><strong>Secured Credit Card.</strong> Open a fixed deposit of ₹25,000 to ₹50,000 to get a secured credit card.</li>
                <li><strong>Low Card Usage.</strong> Keep your credit usage below 25% of the total limit.</li>
                <li><strong>Timely Payments.</strong> Pay your full credit card bill on time every month.</li>
                <li><strong>Credit Audits.</strong> Check credit reports to ensure the settled account shows a ₹0 balance.</li>
              </ul>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Representation in Bhopal */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>11. Legal Representation &amp; Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed Borrowers in Bhopal Choose SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Handling loan recovery pressure requires experienced legal support. SettleLoans helps civil servants, teachers, traders, and MSME owners across Bhopal, Sehore, Raisen, Vidisha, and Hoshangabad. We stop harassment. We defend court notices at Arera Hills. We represent clients at DLSA Lok Adalat sessions to secure maximum debt waivers.
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
                <span>12. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">FAQs: Personal Loan Settlement in Bhopal</h2>

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
                Official Regulatory References &amp; Statutory Circulars
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
                    <strong>RBI Master Circular:</strong> Fair Practices Code for Non-Banking Financial Companies (NBFCs) &amp; Commercial Banks
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Online Portal for Complaints on Recovery Harassment &amp; Excessive NACH Charges
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
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987 — National Lok Adalat Conciliation Framework
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://mphc.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>High Court of Madhya Pradesh:</strong> Principal Seat at Jabalpur Case Law Precedents on Debt Recovery, Order 37 CPC &amp; Section 138 NI Act
                  </a>
                </li>
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
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/personal-loan-settlement-lawyer"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Lawyer
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice for Personal Loan
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
                <Link
                  href="/section-25-pssa-notice-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 25 PSSA Notice Defense
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Percentage
                </Link>
                <Link
                  href="/unsecured-business-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Unsecured Business Loan Settlement
                </Link>
                <Link
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Recovery Agent Workplace Visit Rules
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement CIBIL Impact
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
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md hover:opacity-90 transition-opacity"
                >
                  AJ
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
                Ashish has led over 1,200+ debt settlement cases across HDFC Bank, ICICI Bank, Axis Bank, State Bank of India, Bajaj Finance, and Aditya Birla Capital. He handles court defense under Section 138 and Section 25 PSSA. He guides borrowers under RBI Master Directions.
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-[#1F5EFF] hover:underline"
                >
                  View Profile &rarr;
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
                <span>Bhopal Debt Resolution</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing Loan Default in Bhopal or MP?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop recovery agent calls and workplace visits in government offices today. Halt unwanted NACH debits. Our banking advocates defend your court summons at Arera Hills. We represent you at DLSA Lok Adalat and negotiate 45% to 65% debt waivers under RBI rules.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to a Settlement Advocate
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Talks.</strong> We bypass third-party agents. We talk directly to Bank and NBFC stressed asset teams.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Harassment Shield.</strong> We issue legal notices to stop home and workplace visits under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Letter Verification.</strong> We verify every settlement letter on official bank letterhead before you pay.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed NDC.</strong> We track your case until you receive your No Dues Certificate and clean bureau records.
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
