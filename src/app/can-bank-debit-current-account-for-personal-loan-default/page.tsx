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
  ArrowUpRight,
  Briefcase,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Can Bank Debit Current Account for Loan? | SettleLoans',
  description: 'Can banks debit your current account for personal loan default? Understand banker lien rights and legal protections with SettleLoans.',
  keywords: [
    'can bank freeze current account for personal loan default',
    'can bank debit business account for personal loan default',
    'bank freeze current account right of set off',
    'proprietorship current account freeze personal loan',
    'partnership current account personal debt bank lien',
    'pvt ltd company bank account freeze director personal loan',
    'doctrine of mutuality bank account freeze india',
    'section 171 contract act current account set off',
    'high court stay on business bank account freeze',
    'rbi ombudsman complaint current account freeze',
    'how to unfreeze current account after loan default',
    'one time settlement to unfreeze business bank account'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/can-bank-debit-current-account-for-personal-loan-default',
  },
  openGraph: {
    title: 'Can Bank Freeze Current Account for Personal Loan Default? Legal Entity Protection & Unfreeze Guide',
    description: 'Learn how Indian corporate jurisprudence and the Doctrine of Mutuality protect business current accounts from unauthorized bank debits and freezes stemming from individual personal loan defaults.',
    url: 'https://www.settleloans.in/can-bank-debit-current-account-for-personal-loan-default',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/can-bank-debit-current-account-for-personal-loan-default.jpg',
        width: 1200,
        height: 675,
        alt: 'Can Bank Freeze Current Account for Personal Loan Default Legal Remedies Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can Bank Freeze Current Account for Personal Loan Default? Legal Entity Protection & Unfreeze Guide',
    description: 'Facing a sudden freeze on your business current account due to an individual personal loan default? Discover your legal rights under Indian banking law, High Court precedents, and RBI guidelines.',
    images: ['https://www.settleloans.in/images/infographics/can-bank-debit-current-account-for-personal-loan-default.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/can-bank-debit-current-account-for-personal-loan-default#webpage",
      "url": "https://www.settleloans.in/can-bank-debit-current-account-for-personal-loan-default",
      "name": "Can Bank Freeze Current Account for Personal Loan Default? Legal Entity Protection & Unfreeze Guide",
      "description": "Can a bank debit or freeze your business current account for a personal loan default? Understand legal entity separation (Proprietorship vs Partnership vs Pvt Ltd), Doctrine of Mutuality, High Court stays, and advocate unfreezing protocols.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/can-bank-debit-current-account-for-personal-loan-default#breadcrumb"
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
      "@id": "https://www.settleloans.in/can-bank-debit-current-account-for-personal-loan-default#breadcrumb",
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
          "name": "Current Account Freeze & Legal Entity Defense",
          "item": "https://www.settleloans.in/can-bank-debit-current-account-for-personal-loan-default"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/can-bank-debit-current-account-for-personal-loan-default#article",
      "headline": "Can Bank Freeze Current Account for Personal Loan Default? Legal Entity Protection, Right of Set-Off Limits & High Court Precedents",
      "description": "A comprehensive legal analysis exploring whether lending banks can freeze or debit commercial current accounts to recover personal loan defaults. Details the Doctrine of Mutuality, legal entity separation across Proprietorships, Partnerships, LLPs, and Private Limited Companies, High Court protections on business working capital, RBI Fair Practices Code, and emergency unfreezing protocols.",
      "image": "https://www.settleloans.in/images/infographics/can-bank-debit-current-account-for-personal-loan-default.jpg",
      "datePublished": "2026-09-03T12:00:00+05:30",
      "dateModified": "2026-09-03T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/can-bank-debit-current-account-for-personal-loan-default#webpage"
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
      "@id": "https://www.settleloans.in/can-bank-debit-current-account-for-personal-loan-default#service",
      "name": "SettleLoans - Business Account Defense & Debt Resolution Advisory",
      "description": "Specialized corporate and retail debt defense legal advisory assisting enterprise founders, partners, and sole proprietors in lifting illegal current account freezes, preventing unauthorized set-off debits, and structuring heavily discounted One-Time Settlements (OTS).",
      "url": "https://www.settleloans.in/can-bank-debit-current-account-for-personal-loan-default",
      "image": "https://www.settleloans.in/images/infographics/can-bank-debit-current-account-for-personal-loan-default.jpg",
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
            "name": "Manish Aggarwal"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "HDFC Bank froze our company current account for my personal loan default. SettleLoans sent a legal notice using the Salomon corporate separation rule. The bank removed the hold in 36 hours. We then settled the personal loan at a 55% waiver.",
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
            "name": "Vikramaditya Rao"
          },
          "datePublished": "2026-08-03",
          "reviewBody": "ICICI Bank debited ₹4.2 Lakhs from our partnership account for a partner's card dues. SettleLoans argued lack of mutuality under Section 171 Contract Act before the RBI Ombudsman. The bank refunded the money and approved an OTS.",
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
            "name": "Sunita Kulkarni"
          },
          "datePublished": "2026-06-22",
          "reviewBody": "Axis Bank blocked my proprietorship current account over personal loan dues. This stopped my vendor payments and GST filings. SettleLoans proved violations of the RBI Fair Practices Code. The bank unblocked my account quickly.",
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
            "name": "Harpreet Singh Bhasin"
          },
          "datePublished": "2026-08-19",
          "reviewBody": "Kotak Mahindra Bank put a debit hold on our LLP account for a personal debt. SettleLoans drafted a legal demand under the LLP Act. The bank lifted the hold immediately. We then closed the loan with a 50% discount.",
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
      "@id": "https://www.settleloans.in/can-bank-debit-current-account-for-personal-loan-default#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a bank legally debit or freeze a Private Limited Company current account for a director's personal loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under the Companies Act 2013 and the Salomon rule, a company is a separate legal person. A bank cannot freeze or debit corporate accounts for a director's personal loan. Doing so is unlawful and violates banking service rules."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank freeze a Partnership firm current account if one partner defaults on an individual personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under the Indian Partnership Act 1932, partnership funds belong to all partners jointly. Under the Doctrine of Mutuality, a bank cannot use firm funds to clear an individual partner's personal loan."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if the business is a Sole Proprietorship? Can the bank freeze the current account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A sole proprietorship shares the owner's legal identity. However, banks cannot place sudden total debit freezes without prior written notice. High Courts rule that banks must not halt active business operations, GST taxes, or employee salaries without due process."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Doctrine of Mutuality under Indian banking law?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Doctrine of Mutuality requires that debts and credit balances exist between the same parties in the same legal role. A personal loan of an individual cannot be set off against a company or partnership account."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank freeze a current account maintained at an entirely different banking institution?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A lending bank cannot freeze an account held at another bank on its own. It requires a formal court decree under Order 21 CPC, a DRT order, or a legal tax authority order."
          }
        },
        {
          "@type": "Question",
          "name": "What should a business owner do immediately if their current account is frozen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Take these quick steps: First, divert incoming client payments and POS machines to an alternate bank account. Second, submit a written objection to the Branch Manager. Third, send a legal notice to the Principal Nodal Officer through legal counsel. Fourth, file an online complaint on the RBI CMS portal."
          }
        },
        {
          "@type": "Question",
          "name": "What liabilities does a bank face for wrongfully dishonoring business cheques after an illegal freeze?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 31 of the Negotiable Instruments Act 1881, a bank must clear cheques if funds exist. If an unlawful freeze causes cheques to bounce, the bank is liable for commercial damages and business losses."
          }
        },
        {
          "@type": "Question",
          "name": "Can an unlawful business current account freeze be converted into a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. When legal counsel proves regulatory violations and lack of mutuality, banks often lift the hold. They agree to a One-Time Settlement (OTS) with a 45% to 65% principal waiver and a No Dues Certificate."
          }
        },
        {
          "@type": "Question",
          "name": "How does an individual personal loan default impact a business company's Commercial CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For Private Limited companies and LLPs, commercial CIBIL runs on the company PAN and stays safe. For sole proprietorships, personal and business debts share one PAN. Settling the loan marks it as Settled with ₹0 balance, protecting future credit."
          }
        },
        {
          "@type": "Question",
          "name": "What are the RBI rules regarding the release of No Dues Certificates after settling a loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, lenders must issue a No Dues Certificate within 30 days of full settlement. Delays require the bank to pay ₹5,000 per day in payout to the borrower."
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
  { id: 'banker-set-off-vs-lien-current-accounts', title: '1. Banker Set-Off vs. General Lien on Current Accounts' },
  { id: 'doctrine-of-mutuality-legal-entity-separation', title: '2. Doctrine of Mutuality & Legal Separation of Entity' },
  { id: 'high-court-rulings-operational-cash-flow', title: '3. High Court Precedents & Cash Flow Protections' },
  { id: 'bank-accounting-npa-npv-recovery-formula', title: '4. Bank NPA Accounting & NPV Recovery Equation' },
  { id: 'visual-roadmap-business-account-unfreeze', title: '5. Current Account Unfreezing & Resolution Roadmap' },
  { id: 'emergency-advocate-4-stage-unfreeze-protocol', title: '6. Emergency Advocate 4-Stage Unfreeze Protocol' },
  { id: 'converting-freeze-into-compromise-ots', title: '7. Converting Account Holds into a 45%–65% OTS' },
  { id: 'sanction-letter-forensics-rbi-ndc-mandate', title: '8. Sanction Forensics & Commercial CIBIL Trajectory' },
  { id: 'comparative-legal-matrix-setoff-vs-injunction', title: '9. Comparative Legal Matrix: Set-Off vs. Injunction' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function CanBankDebitCurrentAccountPage() {
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
            <Briefcase className="w-3.5 h-3.5" />
            <span>Business Cash Flow Protection • Corporate Jurisprudence &amp; Banking Law</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Can Banks Debit Current Accounts for Loan Default?</h1>

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
              <span>RBI Regulatory &amp; Corporate Law Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Unfreeze Current Account Now</span>
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
                <span>Executive Legal Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Banks cannot freeze company current accounts for a personal loan default. The Doctrine of Mutuality protects corporate and partnership funds from personal loan recovery.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Current Account Freezes &amp; Legal Entity Rights</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Corporate Separation.</strong> Under the Companies Act 2013 and the Salomon rule, banks cannot freeze company accounts for personal debts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Doctrine of Mutuality.</strong> A bank can only set off funds between the same parties in the same legal role. Cross-account debit holds are void.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Partnership Asset Safety.</strong> Partnership funds belong to all partners jointly. They cannot be used to pay one partner&apos;s personal loan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>High Court Protections.</strong> Even for sole proprietors, banks cannot freeze working capital or halt GST and salary payouts without due notice.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Advocate Relief &amp. OTS.</strong> A formal legal notice forces banks to remove holds. Borrowers can then settle debts at a 45% to 65% discount.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying Banker's Right of Set-Off vs. General Lien */}
            <section id="banker-set-off-vs-lien-current-accounts" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Demystifying Banker&apos;s Right of Set-Off vs. Right of</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on a personal loan or credit card, some lenders freeze their business current accounts. If your business account is in the same bank, such as HDFC Bank, ICICI Bank, Axis Bank, SBI, or Kotak Mahindra Bank, this action creates huge trouble. It stops vendor payouts, GST tax deposits. And staff salary payments instantly.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To check if such account freezes are legal, we must understand two key banking rules under Indian law:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Banker&apos;s Right of General Lien (Section 171)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under <strong>Section 171 of the Indian Contract Act 1872</strong>, a bank holds a lien on physical goods and securities in its custody. However, the Supreme Court has ruled that bank account deposits are not bailed goods. They form a simple debtor-creditor link. Therefore, Section 171 cannot be used to freeze liquid cash in a business current account.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Landmark className="w-4 h-4 text-indigo-600" />
                    <span>Banker&apos;s Right of Set-Off (Equitable Remedy)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Right of Set-Off lets a bank combine accounts to settle a due debt. But it has strict conditions. Both accounts must belong to the exact same person in the exact same legal role. The bank must also give prior written notice before taking any funds.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When branch managers freeze a business account without fulfilling these legal conditions, they act outside the law. Banks often claim that loan forms have standard clauses allowing cross-account debits. However, court rulings confirm that standard contract terms cannot override legal company laws or constitutional rights to run a business under Article 19(1)(g).
              </p>
            </section>

            {/* Section 2: The Doctrine of Mutuality & Legal Separation of Entity */}
            <section id="doctrine-of-mutuality-legal-entity-separation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. The Doctrine of Mutuality</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The core principle governing cross-account recovery is the <strong>Doctrine of Mutuality</strong>. Under this rule, a bank can only set off funds when the debt and the account share the same legal identity. If the legal entity or ownership role is different, the bank cannot touch the funds.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Whether a business current account is safe depends on how the business is set up:
              </p>

              <div className="space-y-4 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    <span>Private Limited &amp; Public Limited Companies (Complete Legal Immunity)</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the <strong>Companies Act 2013</strong> and the <em>Salomon v. Salomon &amp. Co Ltd</em> rule, a company is a separate legal person. This was upheld by the Supreme Court in <em>Tata Engineering &amp. Locomotive Co Ltd v. State of Bihar</em>. When a director defaults on a personal loan, it is an individual debt. Corporate bank funds belong to the company, shareholders. And suppliers. Freezing a company account for a director&apos;s personal debt is illegal and violates banking laws.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-indigo-600" />
                    <span>Partnership Firms &amp; Limited Liability Partnerships (LLPs)</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the <strong>Indian Partnership Act 1932</strong> and the <strong>LLP Act 2008</strong>, firm funds belong to all partners together. A personal loan taken by one partner is not a firm debt. There is no mutuality between the partner&apos;s loan and the firm&apos;s account. A bank cannot debit or freeze a partnership account for one partner&apos;s personal loan.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-amber-600" />
                    <span>Sole Proprietorships: The Dual Status &amp; Working Capital Nuance</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A sole proprietorship shares the owner&apos;s legal identity. Even so, High Courts have set clear limits. Banks cannot freeze an active business account without prior warning. Freezing working capital halts GST tax payments, employee salaries. And vendor dues. This violates the RBI Fair Practices Code for Lenders.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because company structures differ, banks cannot treat business accounts as personal savings reserves. When banks break these legal rules, borrowers can seek quick court orders and claim damages.
              </p>
            </section>

            {/* Section 3: High Court Rulings, Statutory Protections & Cash Flow Protections */}
            <section id="high-court-rulings-operational-cash-flow" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. High Court Precedents, Article 19(1)(g)</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Indian High Courts and the Supreme Court have ruled on bank account freezes many times. The courts hold that banks cannot act as judge and jury. Lenders cannot freeze running business accounts to force unsecured loan recovery.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Key legal protections for business current accounts include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs my-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Gavel className="w-3.5 h-3.5 text-blue-600" />
                    <span>Article 19(1)(g) Freedom of Trade.</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    The Indian Constitution protects the right to carry on trade and business. Freezing company cash without legal orders hurts business survival and violates this fundamental right.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Section 31 Negotiable Instruments Act.</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Under Section 31 of the NI Act 1881, a bank must pay cheques if funds exist. Wrongful cheque bounce due to an unlawful freeze makes the bank liable to pay damages.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Landmark className="w-3.5 h-3.5 text-purple-600" />
                    <span>High Court Restraints on Working Capital.</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    The Delhi, Madras, and Bombay High Courts have ruled against freezing active business accounts. Courts direct banks to use civil court recovery routes instead.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Statutory Attachment Requirement under Order 38 &amp; Order 21 CPC</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  Under the <strong>Code of Civil Procedure 1908 (CPC)</strong>, attaching a bank account needs a formal court hearing under Order 38 Rule 5 or Order 21 CPC. A private bank cannot bypass the judicial system by freezing accounts on its own.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If an account freeze causes business cheques to bounce, suppliers may file cases under Section 138 of the Negotiable Instruments Act. Because the bounce happened due to the bank&apos;s wrongful hold, business owners have a strong legal defense. They can also sue the bank for commercial damages.
              </p>
            </section>

            {/* Section 4: Bank Balance Sheet Accounting & NPV Recovery Formula */}
            <section id="bank-accounting-npa-npv-recovery-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank NPA Accounting &amp; Current Account Freezes</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks use current account freezes when loans turn into defaulted Assets (NPAs). Under RBI rules, an unsecured personal loan becomes an NPA after 90 days of non-payment.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As overdue loans age, banks must set aside capital reserves to cover bad debt provisions:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>default status.</th>
                      <th>Aging Timeline.</th>
                      <th>Mandatory RBI Capital Provision.</th>
                      <th>Settlement / Haircut Scope.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-1 / SMA-2.</td>
                      <td>31 – 90 Days Overdue.</td>
                      <td>5% General Capital Provision.</td>
                      <td>Penal Interest &amp. Overdue Fee Waivers.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA.</td>
                      <td>91 – 365 Days Overdue.</td>
                      <td>25% Unsecured Capital Provision.</td>
                      <td>35% – 45% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 1 (D1).</td>
                      <td>12 – 24 Months Default.</td>
                      <td>100% Full Capital reserves.</td>
                      <td>45% – 55% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 2 / Loss Asset.</td>
                      <td>24+ Months / Written-Off.</td>
                      <td>100% Full Balance Sheet Write-Off.</td>
                      <td>55% – 65% Principal Haircut.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a loan reaches Doubtful status, the bank writes off 100% of the capital. Freezing unrelated accounts is a fast attempt by branch teams to recover funds. When legal counsel challenges the freeze, bank committees evaluate the <strong>Net Present Value (NPV) of Recovery</strong> to choose between court fights and settlements:
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
                  C_t shows expected recovery cash flow. r is the discount rate. Deductions cover court costs, lawyer fees. And regulatory fines.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Fighting an illegal account freeze in court costs banks time and money. Lenders prefer taking 35% to 55% quick cash recovery through a One-Time Settlement rather than facing regulatory fines.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="visual-roadmap-business-account-unfreeze" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Business Current Account Unfreezing</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This 5-stage roadmap shows how to unfreeze a business current account. It guides you from checking illegal bank holds to serving legal notices and securing a debt settlement:
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/can-bank-debit-current-account-for-personal-loan-default.jpg"
                  alt="Can Bank Freeze Current Account for Personal Loan Default Legal Remedies and Unfreezing Roadmap"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Discovery &amp; Mutuality Shield.</span>
                  <span>Identify unlawful holds. Prove entity separation and lack of mutuality under Section 171 Contract Act.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Advocate Notice &amp; Ombudsman.</span>
                  <span>Serve a statutory legal notice. Escalate banking violations to the RBI Integrated Ombudsman portal.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Unfreeze &amp; 55% OTS Closure.</span>
                  <span>Get the hold removed. Negotiate an OTS and obtain an official zero-balance No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Emergency Advocate 4-Stage Protocol */}
            <section id="emergency-advocate-4-stage-unfreeze-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. The Emergency 4-Stage Advocate Protocol to Unfreeze</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a business account is frozen, standard complaints to branch desks rarely work. Branch managers cannot remove risk system holds without legal clearance. Legal counsel follows this 4-stage unfreezing protocol:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 1: Immediate Cash Flow Ring-Fencing &amp; Alternate Banking</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Within 24 hours, move customer wire transfers, card swipe machines, and UPI QR codes to an account at another bank. This keeps fresh sales revenue safe from wrongful freezes.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 2: Serving Advocate Statutory Demand Notice</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your lawyer serves a legal notice on the bank&apos;s Zonal Head and Principal Nodal Officer. The notice proves lack of mutuality under company law, cites Section 31 NI Act. And warns of claims for damages.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 3: Escalation to RBI Integrated Ombudsman Scheme</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank does not unfreeze the account within 48 hours, file a complaint on the RBI CMS portal (cms.rbi.org.in). The RBI Ombudsman acts strictly against illegal account freezes.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 4: Emergency High Court Writ (Article 226) or Commercial Court Injunction</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For PSU banks, file a Writ Petition under Article 226 in the High Court. For private banks, file an injunction application under Order 39 CPC in commercial court to unfreeze funds immediately.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This legal approach removes the bank&apos;s recovery advantage. Bank authorities quickly lift account freezes and open discussions for a discounted settlement.
              </p>
            </section>

            {/* Section 7: Converting Unlawful Account Freezes into a 45%–65% OTS */}
            <section id="converting-freeze-into-compromise-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Converting an Unlawful Account Freeze into an Affordable</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An illegal account freeze shows that the bank wants a quick recovery. By exposing regulatory breaches, lawyers can turn this situation into leverage. Borrowers can then negotiate a formal <strong>One-Time Settlement (OTS)</strong> on the overdue personal loan.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Rather than paying extra fines, the settlement is structured through these key steps:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Hardship Dossier &amp; Income Proof</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Prepare a clear file showing true cash flow drops. Document lower sales, unpaid invoices, or medical costs to prove why EMIs stopped.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>Principal Haircut Benchmarking</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Seek a complete waiver of penal charges and late fees. Aim for a <strong>45% to 65% reduction on principal</strong> based on the loan NPA status.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Mandatory Lien Release Covenant</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Include an explicit term in the agreement. The bank must lift all debit freezes and internal liens on all accounts before receiving settlement funds.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span>Multi-Tranche Payment Flexibility</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Split the settlement payment into 2 to 4 monthly installments. This helps business cash flow remain smooth without creating new financial stress.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Forensic Sanction Verification & ₹0 NDC Mandate */}
            <section id="sanction-letter-forensics-ndc-compliance" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Sanction Letter Forensics &amp; RBI ₹0 NDC</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When settling a loan that triggered an account freeze, checking paperwork is critical. Never rely on verbal promises from recovery agents. Without written approval, banks may keep debit flags active.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Check your settlement documents against these four verification standards:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Corporate Letterhead &amp; Proposal Ref</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The settlement letter must come from the bank official email or stationery. It must be signed by an authorized Zonal Credit Manager.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Explicit Account Identification &amp; Waiver Breakdown</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must show the loan number, borrower PAN, original balance, waiver amount. And final agreed settlement figure.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Express Covenant on Complete Lien Removal</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must confirm that all account freezes, liens. And internal debit holds across all business accounts are removed permanently.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Withdrawal of All Legal Proceedings</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank must agree to withdraw all Section 138 NI Act complaints, Section 25 PSSA notices. And recovery suits once payment is complete.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>The Mandatory 30-Day RBI No Dues Certificate Directive</span>
                </div>
                <p className="leading-relaxed text-amber-800">
                  Under <strong>RBI Circular RBI/2023-24/60</strong>, banks must issue a <strong>No Dues Certificate (NDC)</strong> and update credit bureaus (CIBIL, Experian, Equifax, CRIF) to ₹0 balance within <strong>30 calendar days</strong>. If the bank delays beyond 30 days, it must pay a fine of <strong>₹5,000 per day</strong> directly to the borrower.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Understanding Commercial CIBIL (CCR) vs. Individual CIBIL Score Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For Private Limited companies and LLPs, the Company Credit Report (CCR) runs under the company PAN. It remains completely safe from a director&apos;s personal debt settlement. For sole proprietors, the loan marks as <strong>&quot;Settled&quot;</strong> with a <strong>₹0 balance</strong>. This stops collection calls, clears bank holds. And lets you rebuild your score to 750+ within 18 months.
              </p>
            </section>

            {/* Section 9: Comparative Legal Matrix */}
            <section id="comparative-legal-matrix-setoff-vs-injunction" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Current Account Debt Defense Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Compare the legal options available when a bank freezes a business current account:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Mechanism.</th>
                      <th>Governing Legal Basis.</th>
                      <th>Business Entity Protection.</th>
                      <th>Typical Timeline.</th>
                      <th>Final Legal Effect.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">one-sided Banker Set-Off.</td>
                      <td>Section 171 Contract Act.</td>
                      <td>Zero Protection. Unlawful hold on company cash flow.</td>
                      <td>Instant / Unannounced.</td>
                      <td>High risk of regulatory fines via RBI Ombudsman.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Attachment.</td>
                      <td>Order 38 Rule 5 and Order 21 CPC.</td>
                      <td>Full Judicial Review. Company separation is upheld.</td>
                      <td>2 – 4 Years.</td>
                      <td>Court decree applies only to individual personal assets.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">High Court / Ombudsman Order.</td>
                      <td>Article 226 or RBI Ombudsman Scheme 2021.</td>
                      <td>Direct Protection. Orders unfreezing of business funds.</td>
                      <td>30 – 45 Days.</td>
                      <td>Enforceable order unblocking account operations.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led 55% OTS.</td>
                      <td>Consensual Compromise Agreement.</td>
                      <td>100% Protection. Accounts unblocked and debt closed.</td>
                      <td>15 – 30 Days.</td>
                      <td>Full debt waiver, formal ₹0 NDC. And clean exit.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Account Unfreezing Legal Relief</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Protecting your business against an unlawful account freeze requires expert banking advocates. SettleLoans helps business founders, partners. And proprietors across India. We serve legal notices, halt recovery pressure, file RBI Ombudsman cases. And secure 45% to 65% principal waivers with official No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Current Account Freezes &amp; Legal Remedies</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Find clear answers to key questions about business current account freezes, company laws. And loan settlements in India.
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
                  href="https://www.indiacode.nic.in/handle/123456789/2187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Indian Contract Act, 1872 (Section 171 Banker&apos;s General Lien)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.mca.gov.in/content/mca/global/en/acts-rules/companies-act/companies-act-2013.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Companies Act, 2013 (Separate Juristic Personality of Companies)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Account Freeze Complaints)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Fair Practices Code for Lenders</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Corporate Personality &amp; Article 19(1)(g) Precedents)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Business Debt Defense &amp; Loan Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Salary Account Freeze Guide
                </Link>
                <Link
                  href="/application-to-unblock-bank-account-for-loan-emi"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Application to Unblock Account for EMI
                </Link>
                <Link
                  href="/SME-loan-dispute-resolution"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SME Loan Dispute Resolution
                </Link>
                <Link
                  href="/bank-overdraft-facility-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Overdraft Facility Settlement
                </Link>
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Defense
                </Link>
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply Guide
                </Link>
                <Link
                  href="/case-study-axis-bank-business-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Business Loan Settlement Case Study
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Arbitration Notice Defense
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Bank Seize Business Property?
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
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
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Ashish advises on business debt disputes, RBI Ombudsman cases. And bank account unfreezing. He helps borrowers resolve loans through structured One-Time Settlements.
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
                <span>Emergency Business Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Has Your Business Current Account Been Frozen?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let an illegal hold stop your business payroll and operations. Let our banking advocates challenge the bank hold and negotiate a 45% to 65% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Immediate Unfreeze Consultation
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Corporate Entity Separation Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Advocate Privilege</span>
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
