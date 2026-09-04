import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import SidebarTOC from '@/components/SidebarTOC';
import {
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Calendar,
  Award,
  PhoneCall,
  ExternalLink,
  Lock,
  Building2,
  Scale,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  ShieldAlert,
  UserCheck,
  BadgePercent,
  Clock,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: '3-Year Limitation Act Loan Recovery | SettleLoans',
  description: 'Understand the 3-year Limitation Act for bank loan recovery in India. Learn legal defenses against time-barred debts with SettleLoans.',
  keywords: [
    'limitation act 3 years for bank loan recovery in india',
    'time barred debt bank loan recovery india',
    'section 3 limitation act loan default defense',
    'article 19 article 55 limitation act 1963',
    'can bank recover loan after 3 years india',
    'bank legal notice 3 years default limitation',
    'section 18 limitation act acknowledgement of debt',
    'section 25 3 indian contract act time barred debt',
    'order 37 cpc summary suit limitation defense',
    'recovery agent harassment 4 year old loan',
    'cibil score time barred loan settlement no dues certificate'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/limitation-act-3-years-time-barred-loan-recovery',
  },
  openGraph: {
    title: 'Limitation Act 3 Years for Bank Loan Recovery in India | Time-Barred Debt Defense',
    description: 'Comprehensive legal analysis of the 3-year statutory limitation period for bank loan recovery in India. Discover why civil courts must dismiss time-barred debt suits under Section 3 and how to handle aggressive collection calls without resetting liability.',
    url: 'https://www.settleloans.in/limitation-act-3-years-time-barred-loan-recovery',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/limitation-act-3-years-time-barred-loan-recovery.jpg',
        width: 1200,
        height: 675,
        alt: 'Limitation Act 3 Years for Bank Loan Recovery in India Infographic Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Limitation Act 3 Years for Bank Loan Recovery in India | Time-Barred Debt Defense',
    description: 'Can a bank sue you after 3 years of loan default? Master the statutory limitation defense under Articles 19 and 55 of the Limitation Act, 1963, and protect against unlawful debt revival traps.',
    images: ['https://www.settleloans.in/images/infographics/limitation-act-3-years-time-barred-loan-recovery.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/limitation-act-3-years-time-barred-loan-recovery#webpage",
      "url": "https://www.settleloans.in/limitation-act-3-years-time-barred-loan-recovery",
      "name": "Limitation Act 3 Years for Bank Loan Recovery in India | Time-Barred Debt Defense",
      "description": "Under Article 19 and 55 of the Limitation Act 1963, banks have a strict 3-year window from loan default to file a civil recovery suit. Learn how time-barred debt shields borrowers, Section 18 acknowledgment traps, and how to stop recovery agent harassment on 4-5 year old loans.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/limitation-act-3-years-time-barred-loan-recovery#breadcrumb"
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
      "@id": "https://www.settleloans.in/limitation-act-3-years-time-barred-loan-recovery#breadcrumb",
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
          "name": "Limitation Act 3 Years Bank Loan Recovery",
          "item": "https://www.settleloans.in/limitation-act-3-years-time-barred-loan-recovery"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/limitation-act-3-years-time-barred-loan-recovery#article",
      "headline": "Limitation Act 3 Years for Bank Loan Recovery in India: Complete Legal Defense & Time-Barred Debt Guide",
      "description": "A comprehensive legal, statutory, and practical guide explaining the 3-year limitation bar on bank loan recovery under the Limitation Act 1963. Details Articles 19 and 55, Section 3 mandatory dismissal of belated suits, debt revival traps under Section 18 and Section 19, Order 37 CPC summary suit defense, and advocate-led resolution protocols for 4-5 year old debts.",
      "image": "https://www.settleloans.in/images/infographics/limitation-act-3-years-time-barred-loan-recovery.jpg",
      "datePublished": "2026-09-03T10:00:00+05:30",
      "dateModified": "2026-09-03T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/limitation-act-3-years-time-barred-loan-recovery#webpage"
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
      "@id": "https://www.settleloans.in/limitation-act-3-years-time-barred-loan-recovery#service",
      "name": "SettleLoans - Time-Barred Debt Defense & Stressed Asset Legal Advisory",
      "description": "Specialized legal representation and debt resolution advisory for borrowers facing collection harassment, civil court summons, or recovery notices on defaulted loans past the 3-year statutory limitation period across India.",
      "url": "https://www.settleloans.in/limitation-act-3-years-time-barred-loan-recovery",
      "image": "https://www.settleloans.in/images/infographics/limitation-act-3-years-time-barred-loan-recovery.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Barakhamba Road, Connaught Place",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110001",
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
        "reviewCount": "2180",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Vikramaditya Sen"
          },
          "datePublished": "2026-05-18",
          "reviewBody": "My personal loan with ICICI Bank defaulted four years ago after my business shut down. An agency called my family with fake police threats and fake warrants. SettleLoans advocates sent a notice under Section 3 of the Limitation Act 1963. They stopped the harassment at once. They then negotiated an 82% waiver One-Time Settlement with the bank and got my No Dues Certificate.",
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
            "name": "Meenakshi Sundaram"
          },
          "datePublished": "2026-06-29",
          "reviewBody": "I had an unpaid credit card bill from 2021 with HDFC Bank. In 2026, agents asked me to sign a balance sheet and pay ₹1,000 on UPI. SettleLoans warned me that this resets the 3-year clock under Sections 18 and 19. They took over my case, protected my rights under RBI rules. And settled the ₹8.5 Lakh balance for ₹1.2 Lakh.",
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
            "name": "Rajesh Kulkarni"
          },
          "datePublished": "2026-07-22",
          "reviewBody": "Axis Bank threatened an Order 37 CPC suit for an unpaid overdraft inactive for 42 months. SettleLoans lawyers checked my statements and filed a Leave to Defend under Article 55 of the Limitation Act. The bank saw that Section 3 barred the suit. They agreed to a Lok Adalat settlement with a 78% waiver.",
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
            "name": "Ananya Chatterjee"
          },
          "datePublished": "2026-08-14",
          "reviewBody": "A 5-year-old NBFC personal loan from Bajaj Finance led to nonstop calls to my office and family. SettleLoans stepped in and proved the loan was time-barred. They prevented debt revival under Section 25(3) of the Indian Contract Act. They negotiated an easy closure and updated my CIBIL to ₹0 balance in 45 days.",
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
      "@id": "https://www.settleloans.in/limitation-act-3-years-time-barred-loan-recovery#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the 3-year limitation period for bank loan recovery in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Articles 19 and 55 of the Limitation Act 1963, lenders have 3 years from default to file a civil recovery suit. Under Section 3, courts must dismiss late suits even if the borrower does not bring it up."
          }
        },
        {
          "@type": "Question",
          "name": "Does the Limitation Act extinguish the debt itself or merely bar the legal remedy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Limitation stops court recovery actions. But it does not erase the debt. Lenders lose the right to sue or attach assets in court. But they can still report defaults to credit bureaus and hold funds in accounts within their own bank."
          }
        },
        {
          "@type": "Question",
          "name": "What is Section 18 of the Limitation Act and why is it a dangerous trap for borrowers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 18 states that signing a written debt acknowledgment within 3 years restarts a fresh 3-year period. This gives the bank another 36 months to file a lawsuit."
          }
        },
        {
          "@type": "Question",
          "name": "How does a token payment under Section 19 revive a dying loan liability?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 19, any part payment of principal or interest resets the 3-year clock. Even a ₹500 UPI transfer restarts the full 36-month legal timeline from the payment date."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if a borrower promises to pay a debt that is already time-barred?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 25(3) of the Indian Contract Act 1872, a new written promise to pay an expired debt creates a fresh, binding contract. Borrowers should never sign repayment forms for 4-to-5-year-old loans."
          }
        },
        {
          "@type": "Question",
          "name": "Does the 3-year limitation rule apply to Debts Recovery Tribunals (DRTs) and SARFAESI proceedings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Section 24 of the RDB Act 1993 applies limitation rules to DRTs. Also, Section 36 of the SARFAESI Act 2002 forbids property actions if the claim is older than 3 years."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank file a Section 138 cheque bounce criminal case on a time-barred debt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Section 138 of the Negotiable Instruments Act requires a legally valid debt. Courts hold that bouncing a cheque for an expired debt cannot lead to a criminal conviction unless revived under Section 25(3)."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank freeze accounts or exercise banker's lien for a time-barred loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 171 of the Indian Contract Act, banks can hold funds in your other accounts in the same bank. However, they have no power over accounts you hold in other banks."
          }
        },
        {
          "@type": "Question",
          "name": "Why do collection agencies aggressively harass borrowers on 4–5 year old loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Third-party agencies earn 20% to 40% fees on written-off debts. Because they cannot sue in court, they rely on phone pressure, fake legal threats. And home visits."
          }
        },
        {
          "@type": "Question",
          "name": "How can a borrower achieve permanent legal closure and clean up their CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can resolve it through a lawyer-led One-Time Settlement (OTS). Since banks have no court leverage, they accept 80% to 90% waivers. Once paid, the bank issues a No Dues Certificate and updates CIBIL to ₹0 balance."
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

const tocItems = [
  { id: 'statutory-foundation-limitation-act-1963', title: '1. The 3-Year Statutory Bar: Limitation Act, 1963 in Bank Loan Recovery' },
  { id: 'articles-19-55-and-cpc-civil-court-jurisdiction', title: '2. Articles 19, 55 & CPC Recovery: When Banks Lose the Right to Sue' },
  { id: 'debt-revival-traps-section-18-and-section-19', title: '3. Debt Revival Traps: Written Acknowledgment (Sec 18) & Token Payments (Sec 19)' },
  { id: 'bank-npa-accounting-write-offs-and-npv-economics', title: '4. Bank NPA Accounting, AUCA Write-Offs & The NPV Recovery Equation' },
  { id: 'limitation-act-visual-roadmap', title: '5. Statutory Limitation & Time-Barred Debt Visual Roadmap' },
  { id: 'handling-recovery-calls-on-old-defaulted-loans', title: '6. Handling Harassment & Calls on 4–5 Year Old Time-Barred Loans' },
  { id: 'forensic-audit-of-legal-notices-and-summary-suits', title: '7. Responding to Belated Notices, Lok Adalat & Order 37 CPC Summons' },
  { id: 'debt-extinguishment-ndc-and-cibil-rehabilitation', title: '8. Banker\'s Lien, Official No Dues Certificate & CIBIL Restoration' },
  { id: 'active-debt-vs-time-barred-debt-comparative-matrix', title: '9. Active Debt vs. Time-Barred Debt Comparative Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Time-Barred Debt Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function LimitationActThreeYearsLoanRecoveryPage() {
  return (
    <div
      className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white"
      style={{ fontFamily: 'var(--font-satoshi), Satoshi, -apple-system, BlinkMacSystemFont, sans-serif' }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
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
      `}} />

      {/* 1. Charcoal Navy Hero Section */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <Scale className="w-3.5 h-3.5" />
            <span>Statutory Limitation Defense • 3-Year Time-Barred Debt Jurisprudence</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Limitation Act: 3-Year Time-Barred Loan Recovery in India</h1>

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
              <span>Limitation Act 1963 &amp; RBI Fair Practices Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Consult a Debt Defense Advocate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Assess Your Time-Barred Debt
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Sticky Table of Contents + Executive Crux */}
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Statutory Limitation Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Under Articles 19 and 55 of the Limitation Act 1963, lenders have 36 months from default to file civil recovery suits. Once that period ends, Section 3 requires courts to dismiss the suit. Do not sign acknowledgment forms or make token payments on 4-to-5-year-old debts.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: 3-Year Limitation Defense for Bank Loans</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Strict 3-Year Window:</strong> Banks must file recovery suits within 36 months of default under Articles 19 and 55 of the Limitation Act, 1963.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Dismissal:</strong> Under Section 3, civil courts must dismiss late recovery suits even if the borrower does not bring it up.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Revival Traps:</strong> Signing balance letters under Section 18 or paying token sums under Section 19 restarts the 3-year clock.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Remedy vs. Right:</strong> Court recovery powers expire. But credit bureau records remain until cleared through an OTS.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Statutory Foundation */}
            <section id="statutory-foundation-limitation-act-1963" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The 3-Year Statutory Bar</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Indian civil law protects those who act on time. When a borrower defaults on an unsecured loan, credit card, or credit line, the bank cannot wait forever to sue. The Limitation Act, 1963 sets a strict time limit for filing recovery claims in court.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Section 3 of the Limitation Act requires courts to dismiss any suit filed after this period. This rule applies even if the borrower does not raise it as a defense. If a lender sues after 36 months, the judge must reject the case.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                However, limitation stops the court remedy without erasing the debt. The lender cannot get a court order or attach assets. Yet the bank can still hold internal funds and report the default to credit bureaus until resolved via settlement.
              </p>
            </section>

            {/* Section 2: Articles 19, 55, and CPC Framework */}
            <section id="articles-19-55-and-cpc-civil-court-jurisdiction" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Articles 19, 55 &amp; CPC Recovery</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Limitation Act, 1963, bank defaults fall under Article 19 (loans disbursed) and Article 55 (breach of contract). Once an EMI default happens, the 3-year countdown begins right away.
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Debt Category &amp. Legal Forum.</th>
                      <th>Statutory Governing Provision.</th>
                      <th>Prescribed Limitation Window.</th>
                      <th>Statutory Legal Consequence of Belated Filing.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Unsecured Personal Loans &amp. Credit Cards.</td>
                      <td>Limitation Act 1963, Articles 19 &amp. 55.</td>
                      <td>3 Years from first default.</td>
                      <td>Plaint rejected under Order 7 Rule 11(d) CPC. recovery suit dismissed.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Summary Suits under Order 37 CPC.</td>
                      <td>Order 37 CPC with Article 55.</td>
                      <td>3 Years from recall notice.</td>
                      <td>Unconditional Leave to Defend granted. no summary decree.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Debts Recovery Tribunal (DRT Claims &gt. ₹20L).</td>
                      <td>RDB Act 1993, Section 24 with Limitation Act.</td>
                      <td>3 Years from default / NPA date.</td>
                      <td>Original Application (OA) barred. DRT cannot issue recovery certificate.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SARFAESI Act Secured Asset Enforcement.</td>
                      <td>SARFAESI Act 2002, Section 36.</td>
                      <td>3 Years from default date.</td>
                      <td>Section 13(4) possession notices declared void by DRT.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 138 NI Act Cheque Dishonor.</td>
                      <td>NI Act Section 138 with Limitation Act.</td>
                      <td>Cheque must cover legal debt.</td>
                      <td>Quashing of criminal complaint under Section 482 CrPC / 528 BNSS.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This time limit applies across all debt recovery forums. Under Section 24 of the RDB Act, DRTs cannot hear cases filed after 3 years. Under Section 36 of the SARFAESI Act, banks cannot take asset actions if the debt is time-barred. Creditors lose their legal power to sue after 36 months.
              </p>
            </section>

            {/* Section 3: The Traps - Section 18 and Section 19 */}
            <section id="debt-revival-traps-section-18-and-section-19" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. The Critical Debt Revival Traps</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lenders and collection agencies use simple tricks to reset the legal clock. Borrowers must watch out for three common debt traps.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 18 of the Limitation Act, signing a written balance confirmation within 3 years restarts the whole 3-year clock. Agents often ask borrowers to sign balance forms or restructure papers. Signing gives the bank a fresh 36 months to sue.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 19, making any part payment on principal or interest resets the clock. Telecallers often urge borrowers to pay just ₹500 via UPI. That small payment gives the bank legal proof to restart the 3-year limit.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For debts older than 3 years, Section 25(3) of the Indian Contract Act creates a risk. If you sign a new promise to pay an expired loan, it becomes a valid new contract. Never sign payment letters for old debts.
              </p>
            </section>

            {/* Section 4: Bank Accounting and NPV Formula */}
            <section id="bank-npa-accounting-write-offs-and-npv-economics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank NPA Accounting, AUCA Technical Write-Offs</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI IRAC rules, unpaid loans turn into NPAs and doubtful assets. After 3 to 4 years of default, banks must set aside 100% loss provisions against unsecured bad loans.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks then move these loans to an Advances Under Collection Account (AUCA) or write them off. Filing court cases requires 5% to 10% in court fees and takes 5 to 8 years. Suing on old debts leads to a negative net return for the bank.
              </p>

              {/* JSX Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Unsecured Debt Recovery NPV Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Civil_Recovery = ∑ [ C_t / (1 + r)^t ] - Ad_Valorem_Court_Fees - Legal_Friction - AUCA_Write_Off_Loss
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t is the expected recovery yield over 4 to 7 years. Deductions include court fees, legal costs. And lost interest on tied-up capital.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because lawsuits are slow and costly, lenders prefer to settle. They accept deep 80% to 90% waivers through a One-Time Settlement rather than fighting in court.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="limitation-act-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Statutory Limitation &amp; Time-Barred Debt Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual guide below shows the full timeline from first default and the active suit window to limitation protection, traps, and OTS closure.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/limitation-act-3-years-time-barred-loan-recovery.jpg"
                  alt="Limitation Act 1963 3-Year Bank Loan Recovery Rule in India Visual Roadmap Infographic"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Default &amp; Active Suit Window</span>
                  <span>Default starts the 3-year timer under Articles 19 and 55. Creditors can file civil suits, Order 37 summary claims, or DRT cases.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Time-Barred Threshold &amp; Traps</span>
                  <span>After 36 months, Section 3 requires courts to dismiss new suits. Borrowers must avoid signing balance forms or making token payments.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Advocate Defense &amp; 80%+ OTS Closure</span>
                  <span>Lawyers send legal notices, stop recovery calls, and negotiate deep-waiver settlements with official ₹0 No Dues Certificates.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Handling Harassment & Calls on 4-5 Year Old Loans */}
            <section id="handling-recovery-calls-on-old-defaulted-loans" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Handling Harassment</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Collection agencies chase 4-to-5-year-old debts because they earn 20% to 40% commissions on recoveries. Since they cannot sue in court, they use phone calls, home visits. And fake legal notices to scare borrowers.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In <em>ICICI Bank v. Prakash Kaur</em> and <em>Shanti Devi Sharma v. State</em>, the Supreme Court held that loan defaults are civil matters. It banned the use of musclemen, threats. And abuse. The RBI Fair Practices Code also bans calls before 8 AM or after 7 PM, workplace harassment. And contacting relatives.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If you get harsh calls, ask for the caller&apos;s DRA certificate. Refuse to sign balance sheets or send token money. Hire an advocate to send a formal cease-and-desist notice under the Limitation Act.
              </p>
            </section>

            {/* Section 7: Responding to Belated Notices, Lok Adalat & Summary Summons */}
            <section id="forensic-audit-of-legal-notices-and-summary-suits" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Responding to Belated Legal Notices, Lok Adalat</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you get a legal notice for an old loan, check the default date. Many notices skip dates to trick you into a written reply that revives the debt under Section 25(3). An advocate reply must assert that the claim is time-barred and deny liability.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lok Adalat notices for old loans are for voluntary settlement, not court trials. A Lok Adalat cannot pass orders against you without your consent. You can use Lok Adalat to seal an 80% to 90% waiver settlement into a binding court order.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If a bank files an Order 37 CPC summary suit, you must appear within 10 days and file for Leave to Defend. Citing limitation under Section 3 gives you a solid defense to dismiss the case under Order 7 Rule 11.
              </p>
            </section>

            {/* Section 8: Banker's Lien, NDC and CIBIL */}
            <section id="debt-extinguishment-ndc-and-cibil-rehabilitation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Banker&apos;s Lien, Official No Dues Certificate</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Even though the Limitation Act stops court suits, unresolved loans carry two problems: banker&apos;s lien and bad credit records.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 171 of the Indian Contract Act, banks can take money from your other accounts in the same bank. But they have no power over your accounts in other banks.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unpaid loans also stay marked as &quot;Written-Off&quot. on CIBIL. The best way forward is an advocate-led OTS. Banks accept 10% to 20% payments on old debts, issue a No Dues Certificate. And update CIBIL to &quot;Settled&quot. with a ₹0 balance.
              </p>
            </section>

            {/* Section 9: Comparative Strategy Matrix Table */}
            <section id="active-debt-vs-time-barred-debt-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Active Debt vs. Time-Barred Debt Comparative Strategy</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Here is how active defaults compare to time-barred debts in legal power and settlement leverage:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Legal &amp. Strategic Dimension.</th>
                      <th>Active Debt (Within 36 Months).</th>
                      <th>Time-Barred Debt (Beyond 36 Months).</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Money Recovery Suits.</td>
                      <td>Enforceable. bank can obtain a money decree.</td>
                      <td>Barred by law. mandatory dismissal under Section 3 Limitation Act.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Summary Suits under Order 37 CPC.</td>
                      <td>Bank can seek quick summary judgment.</td>
                      <td>Plaint rejected. unconditional leave to defend under Order 7 Rule 11.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">DRT Original Applications (&gt. ₹20 Lakhs).</td>
                      <td>Valid under Section 19 of RDB Act, 1993.</td>
                      <td>Barred by Section 24 RDB Act. DRT cannot issue recovery orders.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 138 NI Act Cheque Bounce Validity.</td>
                      <td>Valid criminal prosecution for active debt.</td>
                      <td>Unenforceable debt. criminal case can be quashed by High Court.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Banker&apos;s Right of Set-Off (Same Bank).</td>
                      <td>Active on any deposits within the same bank.</td>
                      <td>Active in same bank. But no access to other banks.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Borrower Negotiation Leverage.</td>
                      <td>Moderate. bank can still file a lawsuit.</td>
                      <td>Very high. bank has no legal power to enforce recovery in court.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Target OTS Haircut Potential.</td>
                      <td>40% to 60% principal waiver.</td>
                      <td>80% to 90% total balance waiver.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Revival Vulnerability Risk.</td>
                      <td>Normal loan terms apply.</td>
                      <td>High risk. signed letters (Sec 18) or token UPI payments (Sec 19) restart the clock.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Time-Barred Debt Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Resolving old defaulted loans requires experienced legal help. SettleLoans checks default dates and sends legal notices to stop recovery calls under RBI rules. We file Leave to Defend forms in court and negotiate deep-waiver settlements with official No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Limitation Act 3 Years for Bank Loan Recovery</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct answers to essential questions on statutory limitation, court dismissal rules, debt revival traps. And borrower rights in India.
              </p>

              <div className="space-y-3">
                {(jsonLdGraph['@graph'][4] as any).mainEntity.map((faq: any, idx: number) => (
                  <details
                    key={idx}
                    name="faq-accordion"
                    className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                  >
                    <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                      <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.name}
                      </span>
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </summary>
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                      <p>{faq.acceptedAnswer.text}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* 5 Official Regulatory Links */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Official Statutory &amp; Regulatory References
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/1566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Limitation Act, 1963 (Section 3, Articles 19 &amp; 55 – Bar of Limitation on Money Claims)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Code of Civil Procedure, 1908 (Order 37 &amp; Order 7 Rule 11 – Rejection of Plaint)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/1982"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Recovery of Debts &amp; Bankruptcy Act, 1993 (Section 24 – Application of Limitation Act)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">SARFAESI Act, 2002 (Section 36 – Limitation on Secured Creditor Enforcement)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Reserve Bank of India – Master Direction on Fair Practices Code for Lenders</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Distressed Asset &amp; Loan Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Defense Guide
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/drt-loan-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  DRT Loan Settlement Process
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Unsecured Loan Property Rights
                </Link>
                <Link
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Salary Account Freezing Rules
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/case-study-cibil-status-settled-to-closed"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Settled to Closed Recovery
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Recovery Harassment
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Lok Adalat Loan Settlement
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                    AJ
                  </div>
                </Link>
                <div>
                  <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                    <div className="font-bold text-slate-900 text-sm">Ashish Jhangra</div>
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Expert in Limitation Act rules, time-barred debt defense. And bank loan settlements. Over ten years of experience in banking dispute advisory.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="text-xs text-[#1F5EFF] hover:underline flex items-center gap-1 font-semibold">
                  <span>View Profile</span>
                  <span>→</span>
                </Link>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Author</span>
                </div>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Stressed Asset Legal Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Facing Harassment on a 4–5 Year Old Loan?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let collection agencies pressure you into signing balance forms or paying token sums. Hire experienced advocates to protect your rights and get an 80% to 90% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Free Debt Legal Evaluation
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
                  <span>Limitation Act 1963 Sec 3 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Legal Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank-Stamped OTS Sanctions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Direct Negotiation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
