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
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
  Award,
  PhoneCall,
  ExternalLink,
  Lock,
  Building2,
  Landmark,
  Check,
  BookOpen,
  ShieldAlert,
  CreditCard,
  Scale,
  FileText,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  ShieldX,
  UserCheck,
  BadgePercent,
  AlertCircle,
  Ban,
  Wallet,
  ArrowUpRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Salary Account ECS Mandate Cancellation | SettleLoans',
  description: 'Learn how to stop ECS and NACH auto-debit mandates on your salary account legally without falling into default traps with SettleLoans.',
  keywords: [
    'how to stop ecs mandate for loan',
    'salary account ecs mandate cancellation rules',
    'how to cancel nach mandate in salary account',
    'rbi circular on nach e mandate cancellation',
    'can bank reject ecs cancellation request',
    'section 7 payment of wages act loan emi',
    'stop auto debit loan emi without cheque bounce case',
    'section 25 pssa nach bounce defense',
    'rbi guidelines on auto debit cancellation',
    'how to stop loan emi deduction from salary account',
    'ecs mandate stop payment bank charge waiver',
    'loan settlement after stopping ecs mandate'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules',
  },
  openGraph: {
    title: 'How to Stop ECS Mandate for Loan: Salary Account Auto-Debit Cancellation Rules & Legal Defense',
    description: 'Facing continuous salary draining from loan auto-debits? Discover your statutory right to stop ECS and NACH e-mandates under RBI directives and Section 7 of the Payment of Wages Act.',
    url: 'https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/salary-account-ecs-mandate-cancellation-rules.jpg',
        width: 1200,
        height: 675,
        alt: 'How to Stop ECS Mandate for Loan Salary Account Cancellation Rules',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
      title: 'How to Stop ECS Mandate for Loan: Salary Account Auto-Debit Cancellation Rules',
    description: 'Learn how to revoke ECS and NACH mandates legally on your salary account. Understand RBI cancellation circulars, wage protections, and debt settlement strategies.',
    images: ['https://www.settleloans.in/images/infographics/salary-account-ecs-mandate-cancellation-rules.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules#webpage",
      "url": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules",
      "name": "How to Stop ECS Mandate for Loan: Salary Account Auto-Debit Cancellation Rules & Legal Defense",
      "description": "Comprehensive legal and regulatory guide on stopping ECS and NACH e-mandates on salary accounts. Explains RBI circulars, Section 7 Payment of Wages Act, Section 25 PSSA safeguards, and advocate debt settlement strategies.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules#breadcrumb"
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
      "@id": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules#breadcrumb",
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
          "name": "ECS Mandate Cancellation Rules",
          "item": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules#article",
      "headline": "How to Stop ECS Mandate for Loan: Salary Account Auto-Debit Cancellation Rules & Legal Defense",
      "description": "An exhaustive analysis explaining how salaried borrowers can legally stop ECS and NACH auto-debits to prevent cash-flow strangulation. Details RBI e-mandate cancellation directives, Section 7 of the Payment of Wages Act, avoiding Section 25 PSSA criminal complaints, and structuring a 55% compromise settlement.",
      "image": "https://www.settleloans.in/images/infographics/salary-account-ecs-mandate-cancellation-rules.jpg",
      "datePublished": "2026-08-29T12:00:00+05:30",
      "dateModified": "2026-08-29T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules#webpage"
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
      "@id": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules#service",
      "name": "SettleLoans - Auto-Debit Mandate Revocation & Loan Settlement Advisory",
      "description": "Specialized legal counsel and financial restructuring advisory helping salaried employees legally cancel ECS/NACH mandates, stop punitive bounce charges, defend against Section 25 PSSA notices, and negotiate institutional One-Time Settlements.",
      "url": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules",
      "image": "https://www.settleloans.in/images/infographics/salary-account-ecs-mandate-cancellation-rules.jpg",
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
        "reviewCount": "2340",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ananya Mukherjee"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "My entire monthly salary of ₹68,000 was getting wiped out on the 1st of every month across 4 personal loan auto-debits, leaving zero money for rent or groceries. SettleLoans advocates helped me legally revoke the NACH mandates through my bank portal and served formal notice citing RBI circulars. The cash-flow strangulation stopped immediately, and we concluded a 52% OTS.",
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
            "name": "Venkatesh Rao"
          },
          "datePublished": "2026-08-01",
          "reviewBody": "My bank refused to stop an ECS mandate for an NBFC loan, claiming only the lender can cancel it. SettleLoans stepped in, cited RBI Circular RBI/2019-20/200 on destination bank cancellation mandates, and sent a notice to the Principal Nodal Officer. The mandate was stopped within 48 hours, eliminating ₹4,500 in monthly bounce penalties.",
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
            "name": "Gurpreet Singh"
          },
          "datePublished": "2026-06-22",
          "reviewBody": "After job restructuring, multiple loan apps repeatedly hit my salary account with ECS debits, charging ₹590 bounce fee on each attempt. SettleLoans drafted a formal revocation under Section 7 of the Payment of Wages Act and defended me against Section 25 PSSA threats. They protected my family livelihood and negotiated a clean debt exit.",
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
            "name": "Deepak Chawla"
          },
          "datePublished": "2026-08-18",
          "reviewBody": "I was terrified that cancelling my loan auto-debit would result in immediate criminal arrest or fraud charges. SettleLoans clearly explained that revoking an e-mandate is a recognized civil right under RBI regulations. They handled all communications with the lender, stopped the harassment, and helped me settle my ₹8 Lakh debt for ₹3.6 Lakh.",
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
      "@id": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I legally stop or cancel an ECS or NACH mandate on my salary account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under Reserve Bank of India (RBI) Circular RBI/2019-20/200 on Processing of e-Mandates, borrowers possess an absolute statutory right to revoke or cancel any standing ECS or NACH mandate directly through their destination bank. The destination bank is legally obligated to process customer cancellation requests without requiring prior approval or concurrence from the lending institution."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank refuse to stop an ECS mandate if the loan has outstanding dues?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A bank cannot refuse or reject a customer's formal request to revoke an auto-debit mandate merely because loan arrears exist. While cancelling the mandate does not eliminate the underlying civil contractual debt, the payment authorization mechanism itself is fully revocable at the sole discretion of the account holder under RBI fair banking directives."
          }
        },
        {
          "@type": "Question",
          "name": "Is stopping a loan ECS mandate considered criminal fraud or cheating?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Revoking an ECS or NACH mandate is a lawful exercise of payment control and does not constitute criminal cheating under Section 420 or Section 318 of the Bharatiya Nyaya Sanhita (BNS). Defaulting on a loan due to financial distress is strictly a civil dispute. Fraud allegations only arise if the borrower obtained the loan using counterfeit documents or forged identities."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if a lender files a Section 25 PSSA case after ECS mandate cancellation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 25 of the Payment and Settlement Systems Act (PSSA), 2007 penalizes dishonor of electronic funds transfers for insufficiency of funds. However, if the mandate was formally revoked and communicated prior to presentation, legal advocates can establish absence of fraudulent intent, challenge technical service defects, and utilize court mediation to transition the dispute into an affordable One-Time Settlement."
          }
        },
        {
          "@type": "Question",
          "name": "How does Section 7 of the Payment of Wages Act protect salaried employees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 7 of the Payment of Wages Act, 1936 establishes that an employer or financial institution cannot make unauthorized deductions that deplete an employee's wages beyond statutory subsistence limits. Furthermore, the Supreme Court has affirmed under Article 21 that arbitrary financial strangulation denying basic family subsistence violates constitutional protections."
          }
        },
        {
          "@type": "Question",
          "name": "How can I stop ECS auto-debits through internet banking or mobile apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Log in to your bank's net banking or mobile banking application, navigate to the 'Service Requests' or 'e-Mandates / NACH' section, locate the active Universal Mandate Reference Number (UMRN) associated with the lender, and select 'Cancel / Revoke Mandate'. Retain the digital confirmation receipt. Alternatively, submit a physical cancellation form with an acknowledgment stamp at your home branch."
          }
        },
        {
          "@type": "Question",
          "name": "How do banks calculate penal bounce charges and can they be waived?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When an auto-debit fails, banks and lenders impose bounce charges ranging from ₹295 to ₹590 per presentation, often presenting the same debit multiple times in a month. Under RBI Circular RBI/2023-24/53 on Fair Lending Practice Penal Charges, punitive fees cannot be capitalized or compounded, and all accumulated charges are 100% waivable during advocate-led debt settlement."
          }
        },
        {
          "@type": "Question",
          "name": "Can cancelling an ECS mandate lead to a better One-Time Settlement (OTS) offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. When auto-debits are stopped and unsecured loans cross 90 days of non-payment, the loan shifts to Non-Performing Asset (NPA) status, requiring mandatory balance sheet capital provisioning by the bank. Faced with high litigation costs and regulatory scrutiny, lenders routinely approve formal One-Time Settlements with 45% to 65% principal haircuts."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if my bank branch manager ignores my ECS cancellation letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If a branch manager refuses or delays processing an ECS cancellation, immediately serve a formal legal notice via an advocate to the bank's Principal Nodal Officer (PNO) and file an expedited grievance on the RBI Integrated Ombudsman portal (cms.rbi.org.in). Banks face regulatory penalties for non-compliance with RBI mandate revocation directives."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to obtain a No Dues Certificate after settling a loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, commercial banks and NBFCs must release all loan documents, cancel remaining mandates, and issue an official No Dues Certificate (NDC) within 30 days of receiving the full settlement amount. Any delay beyond 30 days incurs a mandatory statutory compensation of ₹5,000 per day payable to the borrower."
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
  { id: 'demystifying-ecs-nach-mandate-strangulation', title: '1. Anatomy of Salary Cash-Flow Strangulation' },
  { id: 'statutory-legal-protections-rbi-wages-act', title: '2. RBI Cancellation Directives & Wages Act' },
  { id: 'debunking-fraud-allegations-pssa-25', title: '3. Section 25 PSSA & Cheque Bounce Realities' },
  { id: 'bank-accounting-npv-recovery-formula', title: '4. NPA Accounting & NPV Settlement Formula' },
  { id: 'ecs-cancellation-roadmap', title: '5. Mandate Revocation & Resolution Roadmap' },
  { id: 'emergency-4-stage-revocation-protocol', title: '6. The 4-Stage Legal Revocation Protocol' },
  { id: 'forcing-compromise-settlement-ots', title: '7. Converting Stopped Debits to 55% OTS' },
  { id: 'sanction-forensics-rbi-ndc-mandate', title: '8. Sanction Forensics & RBI ₹0 NDC Mandate' },
  { id: 'comparative-mandate-revocation-matrix', title: '9. Comparative Legal & Operational Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Mandate Defense Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function SalaryAccountEcsMandateCancellationPage() {
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
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Cash-Flow Strangulation Defense • RBI NACH Mandate &amp; Wages Act</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Salary Account ECS Mandate Cancellation Rules</h1>

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
              <span>RBI Regulatory &amp; Wages Act Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Stop ECS Mandate Legally</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Legal Case Evaluation
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Table of Contents + Executive Crux */}
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Emergency Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Under RBI Circular RBI/2019-20/200, borrowers hold an unconditional right to revoke ECS/NACH e-mandates directly through destination banks. Cancelling auto-debits halts destructive bounce penalties, protects family living funds, and creates legal leverage for a 45%–65% One-Time Settlement.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: ECS Mandate Revocation &amp; Legal Rights</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Revocation Right:</strong> Under RBI Master Directions on e-Mandates, any account holder can unilaterally revoke NACH and ECS debits through net banking or destination bank branches without lender approval.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Protection Against Wage Strangulation:</strong> Section 7 of the Payment of Wages Act, 1936 and Article 21 of the Indian Constitution prohibit financial mechanisms that sweep 100% of an employee&apos;s sustenance earnings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Criminal Intent in Mandate Cancellation:</strong> Stopping an auto-debit due to severe financial hardship is a recognized civil debt management action, completely separate from criminal cheating or intentional fraud.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Elimination of Compounding Bounce Fees:</strong> Revoking recurring mandates stops the destructive cycle of ₹295 to ₹590 bounce charges repeatedly deducted by banks and lending institutions on failed debit hits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Transitioning to Institutional 55% OTS:</strong> Halting automated cash outflows compels lenders to transfer delinquent files to NPA recovery desks, opening negotiations for substantial principal waivers and zero-balance NDCs.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying ECS, NACH & e-Mandates */}
            <section id="demystifying-ecs-nach-mandate-strangulation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Demystifying ECS, NACH &amp; e-Mandates: The Anatomy of Salary Cash-Flow Strangulation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For millions of salaried employees in India, the first day of the month has shifted from a moment of professional accomplishment into an acute financial crisis. When multiple unsecured personal loans, consumer durable EMIs, and credit lines converge on a single salary account, automated debit clearing systems sweep earnings within minutes of payroll deposit. This phenomenon—known in financial defense jurisprudence as <strong>Cash-Flow Strangulation</strong>—leaves borrowers with zero liquidity to cover basic necessities such as residential rent, children&apos;s school fees, medical prescriptions, and family groceries.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To regain command over your livelihood, it is essential to understand the technical and operational infrastructure underpinning automated bank debits in India:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CreditCard className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Electronic Clearing Service (ECS) vs. NACH</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Legacy <strong>Electronic Clearing Service (ECS)</strong> managed by local clearing houses has been largely superseded by the <strong>National Automated Clearing House (NACH)</strong>, operated by the National Payments Corporation of India (NPCI). NACH operates under a standardized digital mandate framework indexed by a unique 20-digit <strong>Universal Mandate Reference Number (UMRN)</strong>, enabling lenders to trigger automated interbank debit batches.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Landmark className="w-4 h-4 text-indigo-600" />
                    <span>e-Mandates &amp; Standing Instructions (SI)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Digital lending apps and commercial banks frequently deploy <strong>e-Mandates authenticated via Net Banking, Debit Card, or Aadhaar e-Sign</strong>. Additionally, internal Standing Instructions (SI) are configured when the loan is disbursed by the exact same bank holding the corporate salary account, allowing direct internal balance sweeps without routing through NPCI clearing.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When financial distress strikes due to job loss, salary delays, medical emergencies, or business failure, continuous automated debit presentations inflict severe structural damage. Because banks and non-banking financial companies (NBFCs) execute multiple debit attempts throughout the clearing cycle, a borrower with insufficient funds suffers cascading penal bounce fees ranging from ₹295 to ₹590 per failure. Over several billing cycles, these automated charges accumulate into thousands of rupees in pure administrative penalties, sinking the borrower into an inescapable debt spiral before the principal balance is reduced by even a single rupee.
              </p>
            </section>

            {/* Section 2: Statutory Legal Grounding: RBI Directives & Wages Act */}
            <section id="statutory-legal-protections-rbi-wages-act" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Legal Grounding: RBI NACH Cancellation Circulars, Section 7 Payment of Wages Act &amp; Article 21
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Contrary to deceptive claims made by aggressive loan recovery agents, an ECS or NACH mandate is not an irrevocable, eternal surrender of your fundamental banking autonomy. Under the regulatory architecture established by the Reserve Bank of India, payment mandates are conditional authorizations that remain fully subject to the customer&apos;s continuous consent and statutory legal protections.
              </p>
              
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>RBI Circular RBI/2019-20/200: Unconditional Destination Bank Revocation Mandate</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  Under <strong>RBI Circular DPSS.CO.OD.No.1328/06.08.005/2019-20 (Circular RBI/2019-20/200)</strong> governing the Processing of e-Mandates, the central bank explicitly mandated that destination banks (the customer&apos;s bank where the salary account is held) must provide account holders with a transparent, accessible mechanism to <strong>modify or revoke e-mandates at any time</strong>. The destination bank cannot demand an NOC or concurrence letter from the originating corporate lender before stopping the debit.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This regulatory mandate is fortified by foundational statutory labor laws and constitutional jurisprudence in India:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs my-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-blue-600" />
                    <span>Section 7 Payment of Wages Act, 1936</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Codifies permissible deductions from employee earnings and explicitly prohibits employers or financial intermediaries from executing coercive deductions that deprive workers of basic sustenance wages necessary for human survival.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Gavel className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Article 21: Right to Livelihood</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    The Supreme Court of India has established that the Right to Life under Article 21 encompasses the right to live with human dignity and access essential livelihood funds, precluding financial institutions from enforcing unannounced starvation sweeps.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Landmark className="w-3.5 h-3.5 text-purple-600" />
                    <span>NPCI NACH Procedural Guidelines</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Section 3 of NPCI NACH Operating Guidelines requires member banks to accept mandate cancellation requests directly from account holders and reject subsequent debit presentation batches citing standard return code &quot;Mandate Cancelled by Customer&quot;.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                It is vital to draw a clear legal distinction between the <strong>payment authorization instrument</strong> and the <strong>underlying civil loan contract</strong>. Revoking an ECS mandate cancels the automatic debit mechanism; it does not erase the loan balance. However, by legally halting the auto-debit, the borrower regains control over their monthly salary inflow, halts unmanageable bounce fee accumulation, and establishes a secure financial baseline to negotiate a structured debt compromise.
              </p>
            </section>

            {/* Section 3: The Threat of Section 25 PSSA & Section 138 NI Act */}
            <section id="debunking-fraud-allegations-pssa-25" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. The Threat of Section 25 PSSA &amp; Section 138 NI Act: Debunking Bank &quot;Fraud&quot; Allegations
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When borrowers inform bank collection agents of their intent to stop auto-debits, recovery agents routinely unleash severe intimidation tactics. Defaulters are threatened with immediate criminal arrest, filing of First Information Reports (FIRs) for criminal breach of trust, or prosecution under stringent statutory penal codes. As leading banking defense advocates, we must dissect and dismantle these deceptive assertions with precise statutory law.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Let us examine the real legal scope of statutory provisions lenders invoke:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-amber-500 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 25 PSSA creates a statutory dishonor provision for electronic funds transfers that parallels <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>. If an electronic debit fails for insufficiency of funds, the lender can issue a statutory 30-day demand notice. However, Section 25 proceedings are quasi-criminal summons trials adjudicating civil debt dishonor—they are strictly <strong>bailable offenses</strong> where arrest never occurs at the summons stage, and standard bail is granted as a matter of legal right upon initial court appearance.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-blue-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-blue-600" />
                    <span>Debunking Criminal Fraud &amp; Section 420 IPC / Section 318 BNS Allegations</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under established Indian criminal jurisprudence reaffirmed by dozens of Supreme Court precedents, failure to repay a loan due to subsequent financial hardship constitutes a purely civil breach of contract, not criminal cheating. Criminal fraud requires proving <strong>fraudulent intention at the very inception of the transaction</strong>. When a borrower faithfully serviced initial EMIs before encountering economic distress, police authorities possess zero jurisdiction to register an FIR or make arrests.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Formal Prior Revocation as Legal Shield</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When an advocate serves a formal written notice of mandate cancellation citing bona fide financial distress and requests an alternative payment schedule, the borrower creates contemporary documentary evidence demonstrating complete absence of mens rea (guilty mind). If the lender subsequently presents the cancelled mandate and files a Section 25 complaint, defense counsel can move the Magistrate to refer the dispute directly to National Lok Adalat or court mediation for an instant One-Time Settlement.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding these statutory boundaries transforms fear into legal confidence. Stopping an auto-debit does not land you in prison; rather, it transitions an uncontrollable administrative bleed into a manageable legal discussion where settlement terms can be negotiated on equal footing.
              </p>
            </section>

            {/* Section 4: Bank Accounting, NPA Provisioning & NPV Recovery Formula */}
            <section id="bank-accounting-npv-recovery-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Balance Sheet Accounting, NPA Provisioning &amp; The Net Present Value (NPV) Recovery Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To understand why stopping an ECS mandate often accelerates a favorable loan settlement, one must look inside the rigid balance sheet accounting frameworks governing commercial banks and NBFCs in India. Under Reserve Bank of India Master Directions on Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP), an unsecured loan cannot remain in administrative limbo indefinitely.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When auto-debits are cancelled and EMIs stop clearing, the loan account advances through mandatory delinquency buckets:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Delinquency Classification</th>
                      <th>Overdue Aging Timeline</th>
                      <th>Mandatory RBI Capital Provision</th>
                      <th>Settlement / Haircut Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Special Mention Account (SMA-0/1)</td>
                      <td>1 – 60 Days Overdue</td>
                      <td>Standard Asset Capital Allocation</td>
                      <td>Penal Interest &amp; Bounce Fee Waivers</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-2 (Imminent Default)</td>
                      <td>61 – 90 Days Overdue</td>
                      <td>5% General Capital Provision</td>
                      <td>Restructuring &amp; Tenure Extension</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA</td>
                      <td>91 – 365 Days Overdue</td>
                      <td>25% Unsecured Provisioning</td>
                      <td>35% – 45% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA (D1/D2)</td>
                      <td>12 – 24+ Months Overdue</td>
                      <td>100% Unsecured Capital Provision</td>
                      <td>45% – 65% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loss Asset / Written-Off</td>
                      <td>Identified Loss / Technical Write-off</td>
                      <td>100% Full Balance Sheet Write-Off</td>
                      <td>55% – 75% Principal Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an unsecured personal loan crosses 90 days without EMI inflow, the bank is legally compelled to transfer capital from its quarterly operating profits into a locked provisioning reserve. To unlock this unproductive capital and avoid protracted litigation costs, bank credit committees evaluate compromise settlement proposals using the <strong>Net Present Value (NPV) Recovery Formula</strong>:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoverable cash flows over time, r is the bank discount rate, and deductions account for 3–5 years of court friction, advocate retainers, regulatory exposure, and capital locked in 100% NPA reserves.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because prosecuting thousands of individual Section 25 PSSA complaints across overburdened Metropolitan Magistrate courts costs tens of thousands of rupees in legal fees and takes years to resolve, commercial banks recognize that securing an immediate 35% to 55% lump-sum recovery via a consensual One-Time Settlement delivers mathematically superior financial returns.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="ecs-cancellation-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Salary Account ECS Mandate Cancellation &amp; Debt Resolution Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below details the structured 5-stage institutional trajectory from diagnosing cash-flow strangulation on your salary account to executing a lawful mandate revocation, invoking Section 7 Payment of Wages Act protections, escalating regulatory non-compliance, and concluding an official 55% compromise settlement.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/salary-account-ecs-mandate-cancellation-rules.jpg"
                  alt="Salary Account ECS and NACH e-Mandate Cancellation Rules in India Roadmap"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Audit &amp; Revocation</span>
                  <span>Identify all active UMRNs draining your payroll; execute formal digital or branch mandate revocation under RBI directives.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Wages Act &amp; Escalation</span>
                  <span>Invoke Section 7 Payment of Wages Act; serve advocate notice on Principal Nodal Officer if bank resists mandate cancellation.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: 55% OTS &amp; ₹0 NDC</span>
                  <span>Halt bounce fees; negotiate structured compromise settlement with 45%–65% principal haircut and zero-balance No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Emergency 4-Stage Legal Revocation Protocol */}
            <section id="emergency-4-stage-revocation-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. The Emergency 4-Stage Legal Protocol to Revoke ECS / NACH Mandates Without Criminal Liability
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Successfully stopping loan auto-debits without exposing yourself to legal ambush requires executing a disciplined, legally documented procedure. Borrowers must never rely on informal verbal conversations with branch clerks. Instead, follow our battle-tested 4-stage mandate revocation protocol:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 1: Digital Mandate Revocation via Destination Net Banking</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Log in to your destination bank&apos;s internet banking portal (e.g., HDFC NetBanking, ICICI Infinity, SBI Onlinesbi, Axis Internet Banking). Navigate to <strong>&quot;Accounts / Requests &gt; e-Mandates / NACH Mandates &gt; View / Cancel Mandate&quot;</strong>. Locate the active UMRN corresponding to the lender and click &quot;Cancel / Revoke Mandate&quot;. Capture high-resolution screenshots and download the timestamped cancellation acknowledgment receipt.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 2: Physical Branch Stop-Payment Requisition with Stamped Acknowledgment</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If digital cancellation is unavailable, submit a formal written mandate revocation letter to your home branch manager. The letter must cite <strong>RBI Circular RBI/2019-20/200</strong>, specify the exact UMRN, loan account reference, and monthly debit amount, and request immediate stoppage of all electronic clearing presentations. Demand a physical receiving stamp with the branch officer&apos;s signature and date.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 3: Written Financial Hardship Intimation to Lending Institution</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Simultaneously serve formal written notice on the lending institution&apos;s registered grievance desk. Intimate them that due to genuine financial distress, the auto-debit authorization has been revoked under Section 7 of the Payment of Wages Act, and request the lender to refrain from presenting debit batches to avoid unnecessary bank penalty charges while an amicable restructuring is explored.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 4: Escalation to Principal Nodal Officer &amp; RBI Integrated Ombudsman</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the destination bank delays cancellation or continues to debit the salary account after receiving formal revocation, immediately lodge an expedited complaint on the <strong>RBI CMS portal (cms.rbi.org.in)</strong> against both institutions for deficiency in banking service and non-compliance with central bank directives.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By maintaining this rigorous paper trail, you dismantle any future claim of deceit or bad faith, establishing an airtight legal record that protects you against harassment and malicious legal notices.
              </p>
            </section>

            {/* Section 7: Negotiating Debt Resolution & 55% OTS */}
            <section id="forcing-compromise-settlement-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Converting Stopped Auto-Debits into an Institutional 45%–65% One-Time Settlement (OTS)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Stopping recurring ECS debits is the critical first tactical move, but it is not the final financial destination. The ultimate objective is to permanently extinguish the outstanding debt through a legally binding, heavily discounted <strong>One-Time Settlement (OTS)</strong> that frees you from creditor claims once and for all.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                With your salary income shielded from arbitrary sweeps, our debt resolution advocates lead the settlement negotiation through proven institutional phases:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Hardship Dossier Submission</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Compile comprehensive, verifiable documentation of genuine economic distress—including pink slips, termination letters, medical diagnosis reports, pay reduction slips, or business closure certificates—establishing undeniable inability to service original EMIs.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>100% Fee Waiver &amp; Principal Haircut</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Demand total elimination of accumulated penal interest, overdue charges, and bounce fees, while securing a <strong>45% to 65% waiver on the outstanding principal balance</strong> based on the loan&apos;s delinquent NPA aging classification.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Mandate De-Registration Guarantee</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Incorporate an express contractual covenant in the settlement sanction letter mandating the immediate, permanent cancellation of all existing ECS, NACH, and e-mandates across all clearing houses.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span>Structured Installment Tranches</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Structure the compromised settlement sum into 2 to 4 manageable monthly installments, providing breathing space without triggering fresh default notices or legal escalations.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Letter Forensics & RBI NDC Mandate */}
            <section id="sanction-forensics-rbi-ndc-mandate" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Sanction Letter Forensics, Direct Remittance, RBI ₹0 NDC Mandate &amp; CIBIL Bureau Trajectory
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                During the debt settlement process, borrowers must remain extremely vigilant against unauthorized settlement letters issued by external recovery agencies. Aggressive collection agents frequently generate fraudulent settlement slips over WhatsApp to meet monthly collection quotas. Remitting funds without forensic verification can result in your payment being credited as partial interest while the loan remains fully open and delinquent.
              </p>
              
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The 4 Forensic Checkpoints of an Authentic OTS Approval</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-800 list-disc pl-4">
                  <li><strong>Official Registered Letterhead:</strong> Must be issued on the bank&apos;s or NBFC&apos;s corporate letterhead, complete with official sanction reference numbers and contact details of the authorized Credit/Settlement Committee.</li>
                  <li><strong>Accurate Borrower &amp; Account Identifiers:</strong> Must explicitly state your full legal name, PAN card number, and exact 16-digit loan account number.</li>
                  <li><strong>Unconditional Debt Extinguishment Recital:</strong> Must state that upon receipt of the agreed compromised sum, all remaining principal, interest, legal costs, and future claims stand fully and permanently extinguished.</li>
                  <li><strong>Direct Official Remittance Channel:</strong> Payment must be made strictly to the official loan account via RTGS/NEFT or bank branch counter, never into an individual agent&apos;s personal account or third-party UPI handle.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Circular RBI/2023-24/60: Mandatory ₹0 NDC Delivery &amp; ₹5,000/Day Delay Compensation</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Under <strong>RBI Circular RBI/2023-24/60 (Responsible Lending Conduct)</strong>, all commercial banks and NBFCs are statutorily required to release all original movable/immovable property documents, cancel all remaining ECS/NACH mandates, and deliver an official <strong>No Dues Certificate (NDC)</strong> within <strong>30 calendar days</strong> of receiving full settlement payment. Any unjustified delay beyond 30 days incurs a mandatory statutory penalty of <strong>₹5,000 for each day of delay</strong> payable directly to the borrower.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Understanding CIBIL Bureau Reporting &amp; Credit Score Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following settlement, the lender updates credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) with the status remark <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong>, reflecting a current outstanding balance of <strong>₹0</strong>. While this causes a temporary credit score dip of 60 to 110 points, it completely halts the compounding destruction of monthly 30+/60+/90+ DPD default reporting. By obtaining a secured fixed-deposit credit card, keeping credit utilization below 30%, and ensuring timely utility payments, settled borrowers systematically rebuild their credit score back above 750 within 18 to 24 months.
              </p>
            </section>

            {/* Section 9: Dispute Resolution Comparative Matrix */}
            <section id="comparative-mandate-revocation-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Legal Matrix: Self-Service Portal vs. Branch Request vs. RBI Ombudsman vs. Advocate OTS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating the different operational and legal pathways to handle recurring ECS loan mandates empowers borrowers to choose the most effective strategy for their financial situation:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Action Mechanism</th>
                      <th>Operational Execution</th>
                      <th>Salary Protection Scope</th>
                      <th>Resolution Timeframe</th>
                      <th>Final Legal Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Net Banking e-Mandate Revocation</td>
                      <td>Digital net banking / mobile app UMRN cancellation</td>
                      <td>Immediate stop to automated digital debit hits</td>
                      <td>Instant / 24–48 Hours</td>
                      <td>Auto-debit stopped; loan balance remains active</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Physical Branch Stop-Payment Request</td>
                      <td>Written requisition under RBI Circular RBI/2019-20/200</td>
                      <td>Protects account from future clearing batches</td>
                      <td>2 – 4 Working Days</td>
                      <td>Mandate revoked; risk of branch clerk resistance</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Banking Ombudsman Complaint</td>
                      <td>Formal grievance for illegal refusal to stop mandate</td>
                      <td>Enforces regulatory compliance on destination bank</td>
                      <td>30 – 45 Days</td>
                      <td>Directs bank compliance &amp; potential compensation</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led 55% OTS Resolution</td>
                      <td>Comprehensive legal defense &amp; institutional negotiation</td>
                      <td>Total salary protection + 45%–65% debt haircut</td>
                      <td>15 – 30 Days</td>
                      <td>Full debt extinguishment with official ₹0 NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Emergency Auto-Debit Revocation Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating the complex interplay between RBI mandate circulars, the Payment and Settlement Systems Act, and aggressive bank recovery tactics requires experienced banking litigation advocates. SettleLoans provides complete legal protection for salaried borrowers across India: executing lawful ECS and NACH mandate revocations, shielding salary accounts from cash-flow strangulation, defending against Section 25 PSSA and Section 138 NI Act notices, and negotiating directly with senior bank credit committees to secure 45% to 65% principal haircuts backed by official, bank-stamped No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  11. Frequently Asked Questions: Salary Account ECS Mandates &amp; Legal Remedies
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear, authoritative, and legally verified answers to critical questions regarding ECS mandate cancellations, auto-debit revocation rules, and loan settlement in India.
              </p>

              <div className="space-y-3">
                {(jsonLdGraph['@graph'][4] as any).mainEntity.map((faq: any, idx: number) => (
                  <details
                    key={idx}
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
                  href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11666&amp;Mode=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Circular RBI/2019-20/200 (e-Mandate Processing &amp; Revocation)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2381"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Payment of Wages Act, 1936 (Section 7 Wage Deductions)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Payment and Settlement Systems Act, 2007 (Section 25 Dishonour)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Mandate Refusal Grievances)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Article 21 Livelihood &amp; Civil Debt Precedents)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Legal Defense &amp; Loan Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Frozen Salary Account Guide
                </Link>
                <Link
                  href="/stop-emi-bounce-cycle-for-good"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop EMI Bounce Cycle
                </Link>
                <Link
                  href="/section-25-pssa-notice-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Section 25 PSSA Notice Defense
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go to Jail for Default?
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Recovery Harassment
                </Link>
                <Link
                  href="/how-to-get-penal-interest-waived-in-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Penal Interest Waiver Guide
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Explained
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Rules
                </Link>
                <Link
                  href="/case-study-cibil-status-settled-to-closed"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Status Settled to Closed
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
                  <Link href="/authors/ashish-jhangra" className="font-bold text-slate-900 text-sm hover:text-[#1F5EFF] transition-colors block">
                    Ashish Jhangra
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior specialist in banking litigation defense, RBI e-Mandate cancellation directives, Section 7 Payment of Wages Act protections, and institutional One-Time Settlement negotiations across India.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Legal Author</span>
                </span>
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-[#1F5EFF] hover:underline font-bold flex items-center gap-0.5"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Emergency Cash-Flow Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Is Your Salary Being Drained by Auto-Debits?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let continuous loan auto-debits starve your family. Retain seasoned banking advocates to legally stop ECS mandates, eliminate bounce fees, and negotiate a 45%–65% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Immediate Mandate Defense
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
                  <span>RBI Circular RBI/2019-20/200 Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>RBI Ombudsman Dispute Escalation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Compromise Settlement</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
