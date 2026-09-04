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
  Banknote,
  BookOpen,
  Check,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement in Raipur | SettleLoans',
  description: 'Learn how to settle personal loans legally in Raipur. Stop bank recovery harassment and resolve debt with up to 60% OTS waiver via SettleLoans.',
  keywords: [
    'debt settlement services in raipur chhattisgarh',
    'personal loan settlement raipur',
    'loan settlement lawyer in raipur',
    'debt settlement advocate raipur',
    'bank loan settlement in raipur',
    'lok adalat loan settlement raipur',
    'section 138 lawyer raipur',
    'nbfc recovery agent harassment raipur',
    'business loan settlement bhilai durg',
    'cibil recovery after settlement chhattisgarh',
    'ots scheme raipur chhattisgarh',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-raipur',
  },
  openGraph: {
    title: 'Debt Settlement Services in Raipur Chhattisgarh: Settle Personal & Business Loans (2026)',
    description: 'Comprehensive legal and financial guide for resolving delinquent personal loans, credit card balances, and business credit lines in Raipur, Bhilai, and Bilaspur under RBI compromise settlement frameworks.',
    url: 'https://www.settleloans.in/personal-loan-settlement-raipur',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-raipur.jpg',
        width: 1200,
        height: 675,
        alt: 'Debt Settlement Services in Raipur Chhattisgarh - Legal Debt Defense & OTS Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt Settlement Services in Raipur Chhattisgarh: Legal Loan Settlement Guide',
    description: 'Strategic legal defense against aggressive recovery agents, Section 138 NI Act notices, and Lok Adalat compromise settlements for Raipur, Bhilai, and Bilaspur borrowers.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-raipur.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-raipur#webpage",
      "url": "https://www.settleloans.in/personal-loan-settlement-raipur",
      "name": "Debt Settlement Services in Raipur Chhattisgarh: Settle Personal & Business Loans (2026)",
      "description": "Overdue loans in Raipur, Bhilai or Bilaspur? Consult top debt settlement services in Raipur Chhattisgarh to halt recovery harassment, defend Section 138/25 PSSA notices in District Court, represent at DLSA Lok Adalat, and negotiate 45%–65% RBI OTS debt waivers.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-loan-settlement-raipur#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-raipur#breadcrumb",
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
          "name": "Debt Settlement Services Raipur",
          "item": "https://www.settleloans.in/personal-loan-settlement-raipur"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settlement-raipur#article",
      "headline": "Debt Settlement Services in Raipur Chhattisgarh: Legal Protection, Lok Adalat Representation & RBI OTS Debt Relief",
      "description": "A comprehensive regulatory, civil, and financial roadmap for salaried professionals, wholesale merchants, and MSME industrial manufacturers navigating unsecured debt settlement in Raipur, Bhilai, and Chhattisgarh. Covers RBI compromise settlement circulars, District Court JMFC defenses, DLSA Lok Adalat awards, and 45%–65% principal haircuts.",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-raipur.jpg",
      "datePublished": "2026-09-01T10:00:00+05:30",
      "dateModified": "2026-09-01T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-loan-settlement-raipur#webpage"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-raipur#service",
      "name": "SettleLoans - Debt Settlement Services in Raipur Chhattisgarh",
      "description": "Specialized legal debt defense and financial settlement advisory for salaried executives, wholesale traders, MSME manufacturing unit owners, and retail borrowers dealing with personal loan, credit card, and business credit default in Raipur, Bhilai, and Bilaspur.",
      "url": "https://www.settleloans.in/personal-loan-settlement-raipur",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-raipur.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pandri Commercial Complex, Main Road",
        "addressLocality": "Raipur",
        "addressRegion": "Chhattisgarh",
        "postalCode": "492004",
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
        "reviewCount": "1780",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Mahendra Agrawal"
          },
          "datePublished": "2026-06-18",
          "reviewBody": "Rolling mill payment delays left me with ₹32 Lakhs in debt in Urla Industrial Area. SettleLoans advocates sent legal notices under the RBI Fair Practices Code. They stopped factory visits. They negotiated a ₹13.8 Lakhs settlement with bank sanction letters and a zero-balance NDC.",
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
            "name": "Priya Sahu"
          },
          "datePublished": "2026-07-22",
          "reviewBody": "Medical bills led to ₹11.5 Lakhs in credit card and personal loan dues. SettleLoans stepped in when recovery agents called my office. They halted NACH bounce fees. They secured a 54% principal waiver directly with the bank zonal committee.",
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
            "name": "Rajesh Dewangan"
          },
          "datePublished": "2026-05-12",
          "reviewBody": "Our Bhilai workshop faced a Section 25 PSSA summons over a ₹19 Lakhs business loan. SettleLoans represented us at Raipur District Court. They referred the matter to DLSA Lok Adalat and secured a binding settlement for ₹8.2 Lakhs.",
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
            "name": "Dr. Amit Tiwari"
          },
          "datePublished": "2026-08-08",
          "reviewBody": "Clinic expansion in Devendra Nagar led to ₹14 Lakhs in unpaid loans during a slowdown. SettleLoans audited my accounts. They showed proof of financial hardship and ended collection calls. They closed my loans at ₹6.1 Lakhs.",
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-raipur#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do borrowers in Raipur need specialized debt settlement services rather than dealing with recovery agents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Third-party collection agents work on commission. They have no legal authority to reduce your debt. A debt settlement lawyer in Raipur knows RBI compromise rules. We protect your legal rights. We defend Section 138 and Section 25 notices in Raipur courts. We deal directly with bank zonal desks to win 45% to 65% OTS waivers."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents visit my shop in Gol Bazar, Pandri, or residence in Shankar Nagar without notice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under the RBI Fair Practices Code, recovery agents cannot visit your shop or home without prior written notice. They can only call between 8:00 AM and 7:00 PM. They cannot use abusive words or harass staff and neighbors. We serve cease-and-desist notices and file complaints with the RBI Ombudsman if agents break these rules."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver can salaried employees and business owners in Raipur negotiate under an RBI OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unsecured loans past 90 days of default qualify for RBI compromise terms. Banks in Chhattisgarh routinely approve 45% to 65% principal waivers. They also write off 100% of late fees, penal interest, and NACH bounce charges. The final waiver depends on loan aging and financial hardship."
          }
        },
        {
          "@type": "Question",
          "name": "How does the Raipur District Legal Services Authority (DLSA) National Lok Adalat facilitate loan settlements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Raipur DLSA holds quarterly National Lok Adalats at the District Court Complex near Kalibadi. Judges and conciliators help borrowers and lenders reach an agreed settlement. The resulting Lok Adalat Award acts as a final civil court decree under Section 21 of the Legal Services Authorities Act, 1987. It ends the debt permanently."
          }
        },
        {
          "@type": "Question",
          "name": "Can a borrower in Chhattisgarh face police arrest or an FIR for defaulting on an unsecured personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Loan default is a civil dispute under the Indian Contract Act, 1872. Police stations in Raipur, Bhilai, or Bilaspur cannot arrest you or file an FIR for unpaid loans. If recovery agents threaten police action, your lawyer can issue notices for criminal intimidation under the Bharatiya Nyaya Sanhita (BNS)."
          }
        },
        {
          "@type": "Question",
          "name": "What legal steps should I take if I receive a Section 138 NI Act or Section 25 PSSA court summons from JMFC Raipur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lenders often file cases under Section 138 of the NI Act or Section 25 of the PSSA in JMFC court in Raipur. You must hire a lawyer to enter an appearance and secure bail if needed. We establish your financial hardship, dispute unfair fees. And guide the case into an OTS settlement."
          }
        },
        {
          "@type": "Question",
          "name": "How can borrowers in Raipur stop recurring bank charges from bounced e-NACH mandates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under NPCI rules and RBI directives, you have the right to cancel e-NACH mandates at your bank branch in Raipur. This stops repeated bounce charges on your account. During loan settlement talks, our lawyers demand a 100% waiver of all accumulated bounce fees."
          }
        },
        {
          "@type": "Question",
          "name": "How does an unsecured personal loan settlement impact my CIBIL score in Chhattisgarh, and how can it be repaired?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After settlement, the lender marks your account as 'Settled' with ₹0 balance across CIBIL and other bureaus. Your score drops initially by 75 to 150 points. However, monthly default marks stop immediately. You can rebuild your CIBIL score to 750+ within 18 to 24 months with a secured credit card."
          }
        },
        {
          "@type": "Question",
          "name": "What forensic checks are necessary to verify an authentic bank OTS settlement letter in Raipur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Before paying, your lawyer verifies key details in the OTS sanction letter. It must be on official bank letterhead with correct loan numbers and names. It must state the exact payment amount and due dates. It must confirm the withdrawal of court cases and promise a zero-balance NDC within 30 days under RBI rules."
          }
        },
        {
          "@type": "Question",
          "name": "What statutory recourse is available if a bank in Raipur fails to deliver the No Dues Certificate within 30 days?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, lenders must issue your No Dues Certificate within 30 days of payment. They must also update credit bureaus. If the lender delays without a valid reason, it must pay you payout of ₹5,000 per day."
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

export default function PersonalLoanSettlementRaipurPage() {
  const tocItems = [
    { id: 'raipur-debt-landscape', title: '1. Raipur Commercial Hub & Debt Distress' },
    { id: 'delinquency-timeline-npa-raipur', title: '2. Delinquency Timeline & Ind AS 109 NPA' },
    { id: 'anti-harassment-nach-protection', title: '3. Stopping Harassment & NACH Sweeps' },
    { id: 'rbi-ots-npv-valuation', title: '4. RBI OTS Rules & NPV Recovery Math' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'local-court-defense-raipur', title: '6. Raipur District Court & JMFC Defense' },
    { id: 'lok-adalat-representation-raipur', title: '7. DLSA Raipur Lok Adalat Representation' },
    { id: 'step-by-step-settlement-roadmap', title: '8. Step-by-Step Settlement Roadmap' },
    { id: 'sanction-letter-audit-ndc', title: '9. Sanction Letter Forensics & ₹0 NDC' },
    { id: 'cibil-score-rehabilitation', title: '10. CIBIL Score Trajectory & Recovery' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense in CG' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "Why do borrowers in Raipur need specialized debt settlement services rather than dealing with recovery agents?",
      answer: "Third-party collection agents work on commission. They have no legal authority to reduce your debt. A debt settlement lawyer in Raipur knows RBI compromise rules. We protect your legal rights. We defend Section 138 and Section 25 notices in Raipur courts. We deal directly with bank zonal desks to win 45% to 65% OTS waivers."
    },
    {
      question: "Can recovery agents visit my shop in Gol Bazar, Pandri, or residence in Shankar Nagar without notice?",
      answer: "No. Under the RBI Fair Practices Code, recovery agents cannot visit your shop or home without prior written notice. They can only call between 8:00 AM and 7:00 PM. They cannot use abusive words or harass staff and neighbors. We serve cease-and-desist notices and file complaints with the RBI Ombudsman if agents break these rules."
    },
    {
      question: "What percentage of debt waiver can salaried employees and business owners in Raipur negotiate under an RBI OTS?",
      answer: "Unsecured loans past 90 days of default qualify for RBI compromise terms. Banks in Chhattisgarh routinely approve 45% to 65% principal waivers. They also write off 100% of late fees, penal interest, and NACH bounce charges. The final waiver depends on loan aging and financial hardship."
    },
    {
      question: "How does the Raipur District Legal Services Authority (DLSA) National Lok Adalat facilitate loan settlements?",
      answer: "The Raipur DLSA holds quarterly National Lok Adalats at the District Court Complex near Kalibadi. Judges and conciliators help borrowers and lenders reach an agreed settlement. The resulting Lok Adalat Award acts as a final civil court decree under Section 21 of the Legal Services Authorities Act, 1987. It ends the debt permanently."
    },
    {
      question: "Can a borrower in Chhattisgarh face police arrest or an FIR for defaulting on an unsecured personal loan?",
      answer: "No. Loan default is a civil dispute under the Indian Contract Act, 1872. Police stations in Raipur, Bhilai, or Bilaspur cannot arrest you or file an FIR for unpaid loans. If recovery agents threaten police action, your lawyer can issue notices for criminal intimidation under the Bharatiya Nyaya Sanhita (BNS)."
    },
    {
      question: "What legal steps should I take if I receive a Section 138 NI Act or Section 25 PSSA court summons from JMFC Raipur?",
      answer: "Lenders often file cases under Section 138 of the NI Act or Section 25 of the PSSA in JMFC court in Raipur. You must hire a lawyer to enter an appearance and secure bail if needed. We establish your financial hardship, dispute unfair fees, and guide the case into an OTS settlement."
    },
    {
      question: "How can borrowers in Raipur stop recurring bank charges from bounced e-NACH mandates?",
      answer: "Under NPCI rules and RBI directives, you have the right to cancel e-NACH mandates at your bank branch in Raipur. This stops repeated bounce charges on your account. During loan settlement talks, our lawyers demand a 100% waiver of all accumulated bounce fees."
    },
    {
      question: "How does an unsecured personal loan settlement impact my CIBIL score in Chhattisgarh, and how can it be repaired?",
      answer: "After settlement, the lender marks your account as 'Settled' with ₹0 balance across CIBIL and other bureaus. Your score drops initially by 75 to 150 points. However, monthly default marks stop immediately. You can rebuild your CIBIL score to 750+ within 18 to 24 months with a secured credit card."
    },
    {
      question: "What forensic checks are necessary to verify an authentic bank OTS settlement letter in Raipur?",
      answer: "Before paying, your lawyer verifies key details in the OTS sanction letter. It must be on official bank letterhead with correct loan numbers and names. It must state the exact payment amount and due dates. It must confirm the withdrawal of court cases and promise a zero-balance NDC within 30 days under RBI rules."
    },
    {
      question: "What statutory recourse is available if a bank in Raipur fails to deliver the No Dues Certificate within 30 days?",
      answer: "Under RBI Circular RBI/2023-24/60, lenders must issue your No Dues Certificate within 30 days of payment. They must also update credit bureaus. If the lender delays without a valid reason, it must pay you compensation of ₹5,000 per day."
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
            <span>Regional Banking Legal Defense • Raipur &amp; Chhattisgarh Industrial Belt</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Personal Loan Settlement in Raipur: Legal OTS Guide</h1>

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
              <span>Consult Raipur Settlement Lawyer</span>
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
                <span>Raipur Case Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Borrowers in Raipur have clear rights under RBI rules. Legal debt defense stops agent harassment. It answers court notices and secures 45% to 65% OTS debt waivers.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Debt Settlement Services in Raipur Chhattisgarh</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Legal Compromise Rights:</strong> Loan default is a civil matter under the Indian Contract Act, 1872. Borrowers can seek an RBI One-Time Settlement (OTS).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Harassment Shield:</strong> Aggressive collection tactics violate the RBI Fair Practices Code. We stop them with legal cease-and-desist notices.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>45%–65% Debt Waivers:</strong> After 90 days of default, banks must set aside cash reserves. Lenders offer 45% to 65% principal waivers to settle bad loans.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Raipur Court Defense:</strong> Our advocates handle Section 138 NI Act and Section 25 PSSA notices in JMFC Raipur. We secure binding Lok Adalat decrees.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Guaranteed ₹0 NDC:</strong> Under RBI Circular RBI/2023-24/60, banks must deliver your No Dues Certificate in 30 days or pay ₹5,000 daily fines.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Economic Landscape & Debt Distress in Raipur */}
            <section id="raipur-debt-landscape" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Raipur Commercial Hub &amp; Debt Distress</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Debt Default Dynamics in Raipur &amp; Bhilai</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Raipur is the business center of Chhattisgarh. It connects with Bhilai-Durg and Bilaspur. The area has steel mills in Urla and Siltara. It also has cloth markets in Pandri and Gol Bazar. Many residents in Shankar Nagar and Devendra Nagar use personal loans and credit cards.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Shifts in business cycles can cause cash shortages. When earnings fall, borrowers struggle to pay EMIs. Late fees and NACH bounce charges add up quickly. Defaulting due to financial loss is purely a civil matter. Borrowers can use RBI compromise settlements to resolve debts legally.
              </p>
            </section>

            {/* Section 2: Delinquency Timeline & Ind AS 109 NPA Accounting */}
            <section id="delinquency-timeline-npa-raipur" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; NPA Accounting</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Delinquency Timeline &amp; NPA Rules in Raipur</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Overdue loans follow strict RBI (IRACP) rules and Ind AS 109. Lenders track loans in Special Mention Account tiers. These tiers are SMA-0 (1–30 days), SMA-1 (31–60 days), and SMA-2 (61–90 days). After 90 days, the loan turns into a Non-Performing Asset (NPA).
              </p>

              {/* 4-Sided Bordered Table: Delinquency Matrix */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>default Stage.</th>
                      <th>Overdue Duration.</th>
                      <th>Regulatory Accounting Status.</th>
                      <th>Typical Institutional Actions.</th>
                      <th>Settlement Leverage.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-0.</td>
                      <td>1 – 30 Days.</td>
                      <td>Standard Asset. internal risk flag.</td>
                      <td>Automated SMS, phone calls, payment reminders.</td>
                      <td><span className="text-amber-600 font-bold">Low</span> (Restructuring or tenure extensions).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-1.</td>
                      <td>31 – 60 Days.</td>
                      <td>Early Warning. heightened credit risk.</td>
                      <td>Frequent calls, repeated NACH mandate presentations.</td>
                      <td><span className="text-amber-700 font-bold">Moderate</span> (Waiver of penal interest and late fees).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-2.</td>
                      <td>61 – 90 Days.</td>
                      <td>Imminent Default. balance sheet stress.</td>
                      <td>Demand notices, field agent visits.</td>
                      <td><span className="text-blue-600 font-bold">Increasing</span> (Initial compromise settlement proposals).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Gross NPA.</td>
                      <td>91 – 180 Days.</td>
                      <td>Sub-Standard Asset. 15% reserve required.</td>
                      <td>Section 138 NI Act and Section 25 PSSA notices.</td>
                      <td><span className="text-emerald-600 font-bold">High (35%–50% Principal Haircut).</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Doubtful / Loss.</td>
                      <td>181 – 365+ Days.</td>
                      <td>High-Provisioning. technical write-off.</td>
                      <td>Civil recovery suits (Order 37 CPC), Lok Adalat.</td>
                      <td><span className="text-emerald-700 font-bold">Maximum (50%–65% Principal Waiver).</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Statutory Borrower Protections & Stopping Harassment */}
            <section id="borrower-protections-anti-harassment" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>3. Halting Harassment &amp; Stopping NACH Charges</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Defending Against Recovery Harassment in Raipur</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Recovery agents in Raipur often use harsh tactics. Borrowers face unannounced visits and false threats. Under RBI rules on recovery agents, collectors must follow strict rules:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-700 text-base md:text-lg">
                <li><strong>Strict Permissible Hours:</strong> Agents can only call or visit between 8:00 AM and 7:00 PM.</li>
                <li><strong>No Third-Party Contact:</strong> Contacting bosses, coworkers, neighbors, or relatives violates RBI privacy rules.</li>
                <li><strong>No Threats or Force:</strong> Abusive language and false police threats are illegal under the Bharatiya Nyaya Sanhita (BNS).</li>
                <li><strong>Mandatory Identification:</strong> Agents must carry valid bank ID cards and formal authorization letters.</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Lenders also present NACH mandates repeatedly against empty accounts. This causes heavy bounce fees. Under NPCI rules, you can ask your bank in Raipur to cancel the e-NACH mandate. In settlement talks, our lawyers demand a 100% waiver of all bounce fees.
              </p>
            </section>

            {/* Section 4: RBI OTS Compromise Framework & NPV Recovery Formula */}
            <section id="rbi-ots-npv-valuation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>4. RBI Compromise Guidelines &amp; NPV Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">RBI Compromise Rules &amp; NPV in Raipur</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI Master Direction DOR.STR.REC.20/21.04.048/2023-24, banks set compromise policies. Unsecured loans have no collateral under SARFAESI. Banks compare settlement offers to the Net Present Value (NPV) of court recovery.
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
                  Where C_t is estimated recovery, r is discount rate. And deductions cover legal costs and locked capital.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Court cases in Raipur take years to resolve. They cost banks high legal fees and lock up capital in bad loan reserves. An immediate 45% to 65% settlement gives banks better net value than long court battles.
              </p>

              {/* Settlement Haircut Slabs Table */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">Realistic Loan Settlement Haircut Slabs for Raipur &amp; Chhattisgarh Borrowers</h3>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Debt Category.</th>
                      <th>default Bucket.</th>
                      <th>Penal &amp. Bounce Waiver.</th>
                      <th>Principal Haircut Range.</th>
                      <th>Optimal Settlement Target.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Unsecured Personal Loan.</td>
                      <td>90 – 180 Days (NPA).</td>
                      <td>100% Complete Waiver.</td>
                      <td>35% – 50% Principal Waiver.</td>
                      <td>Pay 45%–55% of Core Principal.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Unsecured Personal Loan.</td>
                      <td>180 – 365+ Days (Written Off).</td>
                      <td>100% Complete Waiver.</td>
                      <td>50% – 65% Principal Waiver.</td>
                      <td>Pay 35%–45% of Core Principal.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Credit Card Outstanding.</td>
                      <td>90 – 180+ Days (NPA).</td>
                      <td>100% Interest &amp. Late Fees.</td>
                      <td>55% – 70% Total Waiver.</td>
                      <td>Pay 30%–40% of Total Dues.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">MSME Business Credit Line.</td>
                      <td>90 – 180 Days (NPA).</td>
                      <td>100% All Penal Charges.</td>
                      <td>35% – 50% Principal Waiver.</td>
                      <td>Pay 45%–55% of Disbursed Dues.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Fintech Instant Loan App.</td>
                      <td>60 – 180+ Days (Default).</td>
                      <td>100% Compound Fees.</td>
                      <td>50% – 65% Principal Waiver.</td>
                      <td>Pay 35%–45% of Net Principal.</td>
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
                        Raipur Personal Loan Settlement &amp; Lok Adalat Legal Defense Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/personal-loan-settlement-raipur.jpg"
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
                      src="/images/infographics/personal-loan-settlement-raipur.jpg"
                      alt="Debt Settlement Services in Raipur Chhattisgarh Legal Defense and Lok Adalat Blueprint"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Strategy:</strong> Stop recovery harassment, defend Raipur court notices, and negotiate directly with bank committees for 45%–65% debt waivers.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Local Court Defense: Section 138, Section 25 PSSA & JMFC Raipur */}
            <section id="local-court-defense-raipur" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>6. Raipur District Court &amp; JMFC Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Sec 138 NI Act &amp; Sec 25 Defense in Raipur Courts</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                During long defaults, lenders file cases in the District Court Complex near Kalibadi. These go before the Judicial Magistrate First Class (JMFC) in Raipur. Lenders file under Section 138 of the NI Act for cheques. They file under Section 25 of the PSSA for failed NACH debits.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A court summons is not an arrest warrant. Under the CrPC and Bharatiya Nagarik Suraksha Sanhita (BNSS), these are bailable matters. Our advocates represent you in court. We secure bail without jail risk. We challenge wrongful charges and seek formal settlement.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under Section 147 of the NI Act, courts can record mutual settlements. The High Court of Chhattisgarh at Bilaspur supports civil settlement for loan disputes.
              </p>
            </section>

            {/* Section 7: DLSA Raipur National Lok Adalat Representation */}
            <section id="lok-adalat-representation-raipur" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>7. DLSA Raipur Lok Adalat Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Settling via National Lok Adalat</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The DLSA Raipur holds National Lok Adalats each quarter at the District Court. Under the Legal Services Authorities Act, 1987, Lok Adalat offers a legal platform to compromise.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Our lawyers present proof of your financial hardship. The bench helps negotiate fair debt waivers. Once signed, the panel issues a Lok Adalat Award. This award has the force of a Civil Court Decree under Section 21 of the Act. It closes the loan permanently.
              </p>
            </section>

            {/* Section 8: Step-by-Step Settlement Roadmap for Chhattisgarh Borrowers */}
            <section id="step-by-step-settlement-roadmap" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>8. Step-by-Step Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">6-Phase Debt Settlement Protocol in Raipur</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                SettleLoans executes a disciplined 6-phase resolution strategy tailored to Chhattisgarh&apos;s legal and commercial landscape:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">1</span>
                    Financial Forensic Audit
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    We audit your loan agreements and statements. We separate the true principal from unfair penal charges and illegal fees.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">2</span>
                    Anti-Harassment Legal Shield
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    We issue formal legal notices under the RBI Fair Practices Code. This redirects all collection calls to your appointed lawyer.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">3</span>
                    Halting NACH Auto-Debits
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    We help you cancel e-NACH mandates at your bank under NPCI rules. This stops ongoing bounce fees and protects your funds.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">4</span>
                    Zonal Committee Negotiations
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    We bypass recovery agents and negotiate directly with bank Zonal Committees using documented hardship files under RBI rules.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">5</span>
                    Sanction Letter Verification
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Our banking lawyers audit the OTS sanction letter. We check official letterheads, correct loan details. And legal case withdrawal clauses.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">6</span>
                    Direct Remittance &amp; ₹0 NDC Enforcement
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    You pay the settlement sum directly to your loan account via RTGS/NEFT. We secure your zero-balance No Dues Certificate within 30 days.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Sanction Letter Audit &amp; NDC in Raipur</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers must avoid fake settlement letters from recovery agents. Your lawyer verifies key terms before you pay:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-700 text-base md:text-lg">
                <li><strong>Official Bank Letterhead:</strong> The letter must display the bank CIN, official address. And authorized seal.</li>
                <li><strong>Clear Account Details:</strong> It must state the borrower PAN, loan account numbers. And total dues.</li>
                <li><strong>Exact Settlement Terms:</strong> It must show the agreed payment amount, payment modes. And strict deadlines.</li>
                <li><strong>Legal Case Withdrawal Clause:</strong> The letter must confirm the withdrawal of all court cases upon payment.</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI Circular RBI/2023-24/60, banks must issue your NDC within 30 days. Any delay brings a penalty of ₹5,000 per day payable to you.
              </p>
            </section>

            {/* Section 10: CIBIL Score Trajectory & Rehabilitation */}
            <section id="cibil-score-rehabilitation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>10. Credit Rehabilitation &amp; Score Recovery</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Post-Settlement CIBIL Recovery in Raipur</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Settling a loan updates your credit bureaus to <strong>&apos;Settled&apos;</strong> with a <strong>₹0</strong> balance. This causes an initial drop of 75 to 150 points. However, monthly default marks and legal risks stop immediately.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                You can rebuild your CIBIL score above 750 in 18 to 24 months with good habits:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-700 text-base md:text-lg">
                <li><strong>Secured Credit Card:</strong> Get a card backed by a small fixed deposit.</li>
                <li><strong>Low Credit Usage:</strong> Keep your monthly card usage between 15% and 25% of the credit limit.</li>
                <li><strong>Timely Payments:</strong> Pay 100% of your card bill on time every month.</li>
                <li><strong>Check Credit Reports:</strong> Review your credit profile to verify that your old loan balance shows zero.</li>
              </ul>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Representation in Chhattisgarh */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>11. Legal Representation &amp; Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Borrowers in Raipur &amp; Chhattisgarh Choose SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Disputes and court notices need skilled legal support. SettleLoans helps workers and business owners across Raipur, Bhilai, Durg, and Bilaspur. We stop harassment. We defend court notices in JMFC court. We also attend DLSA Lok Adalat to secure maximum loan waivers.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">FAQs: Personal Loan Settlement in Raipur</h2>

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
                    <strong>RBI Master Circular:</strong> Fair Practices Code for Non-Banking Financial Companies (NBFCs) &amp. Commercial Banks
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Online Portal for Complaints on Recovery Harassment &amp. Excessive NACH Charges
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
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987. National Lok Adalat Conciliation Framework
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://highcourt.cg.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>High Court of Chhattisgarh (Bilaspur):</strong> Case Law Precedents on Debt Recovery, Order 37 CPC &amp. Section 138 NI Act
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
                    Lead Banking Legal &amp. Debt Settlement Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has led over 1,200+ debt compromise talks. He works across HDFC Bank, ICICI Bank, Axis Bank, Bajaj Finance, and Tata Capital. He specializes in local debt defense. He handles Section 138 NI Act and Section 25 PSSA cases in District Courts. He also protects borrowers under RBI Master Directions.
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
                <span>Raipur Debt Resolution</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing Loan Default in Raipur, Bhilai, or Bilaspur?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop aggressive recovery calls now. Stop store visits in Gol Bazar and Pandri. Block illegal NACH debits quickly. Our legal team defends court summonses. We represent you at the DLSA Lok Adalat. We negotiate 45% to 65% RBI OTS debt waivers.
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
                    <strong>Direct Bank Talks:</strong> We bypass agents. We negotiate straight with Bank and NBFC Zonal Stressed Assets Committees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Defense:</strong> We send legal cease-and-desist notices. This halts workplace and home visits under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Letters:</strong> Every settlement letter is verified on bank letterhead before you pay any money.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed Zero-Balance NDC:</strong> We track your case until you receive your No Dues Certificate and CIBIL updates.
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
