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
  FileLock2,
  RefreshCw,
  Ban
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Permanently Close Settled Loan | SettleLoans',
  description: 'Learn the 5-step banking protocol to permanently close settled loan accounts, get the No Dues Certificate, and update CIBIL via SettleLoans.',
  keywords: [
    'steps to permanently close loan account after settlement',
    'how to close loan account permanently after settlement',
    'loan closure after one time settlement',
    'no dues certificate after loan settlement',
    'cancel nach mandate after loan settlement',
    'cibil zero balance update after ots',
    'rbi circular on no dues certificate',
    'revoke e-mandate npci loan settlement',
    'bank ledger zero balance verification',
    'stop ecs auto debit after settlement',
    'post settlement zombie debt recovery',
    'loan settlement to closed status cibil'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/how-to-close-loan-account-permanently-after-settlement',
  },
  openGraph: {
    title: 'How to Permanently Close Loan Account After Settlement: Complete 5-Step Protocol & Legal Clearance Guide',
    description: 'Master the mandatory 5-step banking protocol to permanently close your loan account after settlement: ledger zeroing, physical branch NDC with official seal, NPCI NACH cancellation, ECS revocation, and CIBIL zero-balance update.',
    url: 'https://www.settleloans.in/how-to-close-loan-account-permanently-after-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/how-to-close-loan-account-permanently-after-settlement.jpg',
        width: 1200,
        height: 675,
        alt: '5-Step Protocol to Permanently Close Loan Account After Settlement India',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steps to Permanently Close Loan Account After Settlement: 5-Step Protocol',
    description: 'Paying your OTS amount is not enough. Discover the 5 essential legal and banking steps to permanently terminate your loan account, cancel NACH mandates, and obtain a clean CIBIL report.',
    images: ['https://www.settleloans.in/images/infographics/how-to-close-loan-account-permanently-after-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/how-to-close-loan-account-permanently-after-settlement#webpage",
      "url": "https://www.settleloans.in/how-to-close-loan-account-permanently-after-settlement",
      "name": "Steps to Permanently Close Loan Account After Settlement: 5-Step Protocol, Bank Ledger Zeroing & CIBIL Clearance Guide",
      "description": "Exhaustive legal and banking manual on the mandatory 5-step protocol required to achieve permanent loan account closure after One-Time Settlement (OTS), including Core Banking Solution reconciliation, branch NDC acquisition, NPCI NACH mandate revocation, ECS cancellation, and credit bureau dispute resolution.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/how-to-close-loan-account-permanently-after-settlement#breadcrumb"
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
      "@id": "https://www.settleloans.in/how-to-close-loan-account-permanently-after-settlement#breadcrumb",
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
          "name": "Permanent Loan Account Closure Protocol",
          "item": "https://www.settleloans.in/how-to-close-loan-account-permanently-after-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/how-to-close-loan-account-permanently-after-settlement#article",
      "headline": "Steps to Permanently Close Loan Account After Settlement: 5-Step Protocol, Bank Ledger Zeroing & CIBIL Clearance Guide",
      "description": "An in-depth regulatory and legal guide detailing the critical post-settlement steps every Indian borrower must execute. Covers Core Banking System zeroing, physical branch No Dues Certificate issuance under RBI Circular RBI/2023-24/60, NPCI NACH mandate cancellation, salary account ECS revocation, and credit bureau remediation under CICRA 2005.",
      "image": "https://www.settleloans.in/images/infographics/how-to-close-loan-account-permanently-after-settlement.jpg",
      "datePublished": "2026-08-28T10:00:00+05:30",
      "dateModified": "2026-08-28T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/how-to-close-loan-account-permanently-after-settlement#webpage"
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
      "@id": "https://www.settleloans.in/how-to-close-loan-account-permanently-after-settlement#service",
      "name": "SettleLoans - Post-Settlement Loan Closure & Banking Dispute Advisory",
      "description": "Expert legal representation and banking conciliation services to secure permanent loan account closure, physical branch No Dues Certificates (NDC), NPCI e-Mandate revocations, and credit bureau record rectifications across Indian banks and NBFCs.",
      "url": "https://www.settleloans.in/how-to-close-loan-account-permanently-after-settlement",
      "image": "https://www.settleloans.in/images/infographics/how-to-close-loan-account-permanently-after-settlement.jpg",
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
            "name": "Siddharth Nambiar"
          },
          "datePublished": "2026-07-22",
          "reviewBody": "I settled an HDFC personal loan of ₹8.5 Lakhs in 2025. But the bank kept running auto-debits that caused ₹14,000 in bounce charges. SettleLoans sent a legal notice under the Payment and Settlement Systems Act. They forced the bank to refund all bounce fees, cancel the NACH mandate. And issue my physical No Dues Certificate with a round seal in two weeks.",
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
            "name": "Ananya Mukherjee"
          },
          "datePublished": "2026-06-15",
          "reviewBody": "After settling my ICICI credit card, the account stayed active as an overdue write-off in the bank system. Six months later, an ARC sent me a recovery notice. SettleLoans advocates stepped in. They made the bank zero out the balance and update CIBIL to ₹0.",
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
            "name": "Gurpreet Singh Bhasin"
          },
          "datePublished": "2026-05-30",
          "reviewBody": "Bajaj Finance delayed my loan closure NOC for 60 days after I paid the settlement. SettleLoans cited RBI Circular RBI/2023-24/60 and claimed ₹5,000 per day delay payout. The lender handed over the stamped No Dues Certificate, closed the loan. And cleared my credit record.",
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
            "name": "Venkatesh Ramanathan"
          },
          "datePublished": "2026-08-11",
          "reviewBody": "Kotak Mahindra Bank kept showing an overdue of ₹72,000 on CIBIL after my settlement. SettleLoans filed a dispute under the Credit Information Companies Act and approached the RBI Ombudsman. In 25 days, CIBIL updated the balance to ₹0 with no negative flags.",
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
      "@id": "https://www.settleloans.in/how-to-close-loan-account-permanently-after-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does paying the One-Time Settlement (OTS) amount automatically close my loan account in the bank database?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Paying the settlement amount is just the payment step. The loan stays open in the bank system until staff enter a write-off voucher to clear the balance. You must verify that the status changes to Settled and Closed."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between an email settlement confirmation and an authentic branch No Dues Certificate (NDC)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An email confirmation only shows money was received. A real No Dues Certificate must be on official bank letterhead. It must state a ₹0 balance, show the loan number. And carry the branch manager's signature and round seal."
          }
        },
        {
          "@type": "Question",
          "name": "What are the legal time limits for a bank to issue a No Dues Certificate under RBI rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, banks and NBFCs must release property papers and issue a No Dues Certificate within 30 days of settlement. If they delay without cause, they must pay you ₹5,000 per day."
          }
        },
        {
          "@type": "Question",
          "name": "Why do banks continue presenting NACH and ECS auto-debits after a loan is settled?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NACH and e-Mandates run on automated clearing schedules via NPCI, separate from branch desks. Unless the bank cancels the mandate in the NPCI portal, auto-debits continue and cause heavy bounce fees."
          }
        },
        {
          "@type": "Question",
          "name": "How do I permanently cancel an active NACH or e-Mandate after loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Submit a written Mandate cancel Request to your loan bank and your savings bank. Attach your settlement letter and payment receipt. Under RBI rules, banks must process mandate cancellations within 48 to 72 hours."
          }
        },
        {
          "@type": "Question",
          "name": "Can an Asset Reconstruction Company (ARC) revive a loan after it has been settled with the original bank?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An ARC cannot collect settled debt if you have a valid settlement letter, payment proofs. And an authentic No Dues Certificate. Giving copies of your stamped NDC immediately stops any ARC claim."
          }
        },
        {
          "@type": "Question",
          "name": "How is a settled loan reported in CIBIL, and can the outstanding balance remain above ₹0?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The loan status changes to 'Settled' or 'Post-Write-Off Settled'. Most importantly, the Current Balance and Amount Overdue must show exactly ₹0. If it shows an overdue balance, file an immediate CIBIL dispute."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if my bank refuses to issue a No Dues Certificate after receiving settlement funds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Submit a complaint to the bank Principal Nodal Officer. If unresolved within 30 days, file an online complaint with the RBI Banking Ombudsman for an immediate NDC and ₹5,000 per day delay penalty."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take for a credit score to recover after permanent loan account closure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Once your loan shows a ₹0 balance, monthly negative reporting stops. By paying existing cards on time or using a fixed deposit credit card, you can rebuild your score back to 750+ within 18 to 24 months."
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
  { id: 'illusion-of-settlement-unclosed-accounts', title: '1. The Illusion of Settlement & Ghost Debt' },
  { id: 'step-1-bank-ledger-zeroing-cbs-audit', title: '2. Step 1: Bank Ledger Zeroing & CBS Audit' },
  { id: 'step-2-physical-branch-ndc-seal', title: '3. Step 2: Physical Branch NDC & Form 35' },
  { id: 'step-3-npci-nach-emandate-cancellation', title: '4. Step 3: NPCI NACH & e-Mandate Revocation' },
  { id: 'end-to-end-closure-infographic', title: '5. 5-Step End-to-End Closure Protocol Roadmap' },
  { id: 'step-4-ecs-standing-instructions-revocation', title: '6. Step 4: Canceling Salary Account ECS & SI' },
  { id: 'step-5-cibil-credit-bureau-clearance', title: '7. Step 5: CIBIL & Credit Bureau Rectification' },
  { id: 'zombie-debt-arc-legal-protections', title: '8. Defending Against Zombie Debt & ARCs' },
  { id: 'npv-accounting-npa-derecognition', title: '9. NPA Accounting & Balance Sheet De-Recognition' },
  { id: 'comparative-closure-matrix', title: '10. Incomplete Settlement vs Permanent Closure' },
  { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense & Closure Advisory' },
  { id: 'faqs', title: '12. Frequently Asked Questions' },
];

export default function PermanentLoanAccountClosurePage() {
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
        className="w-full border-b border-slate-700/80 pt-[92px] pb-7 md:pt-[98px] md:pb-8 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <FileLock2 className="w-3.5 h-3.5" />
            <span>Post-Settlement Banking Protocol • RBI Compliance &amp; CIBIL Clearance</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">How to Close Loan Accounts After Settlement</h1>

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
              <span>RBI Circular RBI/2023-24/60 Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Audit My Loan Closure Status</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Settlement Legal Audit
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
                <span>Executive Closure Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Paying a One-Time Settlement (OTS) does not close your loan automatically. Complete legal closure requires 5 steps. These include CBS ledger zeroing, a physical stamped NDC, NACH cancel, ECS revocation. And a ₹0 balance update on CIBIL.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Permanent Loan Closure Protocol After Settlement</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>The Settlement Trap:</strong> The agreed OTS payment is only the first step. The loan stays active until bank staff zero out the master ledger.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Physical Branch NDC:</strong> Email receipts have weak legal weight in court. You must get a physical No Dues Certificate with a branch stamp and officer code.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>NPCI NACH Mandate cancel:</strong> Auto-debits continue on monthly cycles until you cancel them through both banks under RBI rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Credit Bureau ₹0 Balance Mandate:</strong> The loan status must show &apos;Settled&apos. or &apos;Closed&apos;. Both &apos;Current Balance&apos. and &apos;Amount Overdue&apos. must show exactly ₹0 on CIBIL.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Immunity from Zombie Debt &amp. ARCs:</strong> Doing all five closure steps stops banks from selling your settled debt to recovery firms.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Reality of Loan Settlement — Why Paying OTS Does Not Automatically Close Your Account */}
            <section id="illusion-of-settlement-unclosed-accounts" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Illusion of Settlement</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many borrowers believe paying the settlement closes their loan right away. But in banking practice, payment is only the first step. When you transfer funds via RTGS or NEFT, the loan contract remains open until manual processing ends.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In major banks like SBI, HDFC, ICICI, and Axis Bank, loans run on Core Banking Solutions like Finacle or BaNCS. When a loan defaults past 90 days, it turns into an NPA and moves to recovery suspense ledgers.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Your payment often sits in a branch suspense account first. Branch staff must manually enter write-off vouchers to clear the balance. If staff forget this step, the system keeps adding interest and penal fees. You may face fresh collection calls months later.
              </p>
            </section>

            {/* Section 2: Step 1 — Bank Ledger Zeroing & Core Banking Solution (CBS) System Reconciliation */}
            <section id="step-1-bank-ledger-zeroing-cbs-audit" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Step 1: Bank Ledger Zeroing</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The first step is checking that your master ledger inside the Core Banking Solution shows ₹0. A loan account has separate ledgers for principal, interest, penal fees. And legal costs. In an OTS, the bank waives balance fees and a share of principal.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To close the account, the bank credits your payment and debits its bad-debt reserves. Ask for a Statement of Account from your home branch. Check that every sub-ledger shows a balance of exactly ₹0.00.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Check that the account status flag changes from &quot;NPA&quot. to &quot;Settled &amp. Closed&quot;. If the statement shows any balance, report it to the bank Nodal Officer immediately.
              </p>
            </section>

            {/* Section 3: Step 2 — Securing the Physical Branch No Dues Certificate (NDC) with Official Bank Seal */}
            <section id="step-2-physical-branch-ndc-seal" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Step 2: Securing the Physical Branch No Dues Certificate</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers often rely on an email or digital receipt as proof of loan closure. But in Indian courts, an email only proves you made a payment. It does not prove the bank gave up its right to claim the rest under the Indian Contract Act, 1872.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                You must get an original physical No Dues Certificate on bank letterhead. It must show your loan number, PAN, borrower name. And a ₹0 balance statement. It must also carry the branch manager&apos;s signature, employee code. And official round stamp.
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>RBI Circular RBI/2023-24/60: Mandatory 30-Day NDC Timeline &amp; ₹5,000/Day Penalty</span>
                </div>
                <p className="leading-relaxed text-amber-900">
                  Under RBI Circular RBI/2023-24/60, lenders must release property papers and give the final No Dues Certificate within 30 days of settlement. If a lender delays without valid cause, they must pay you ₹5,000 per day of delay.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For car loans or property loans, the lender must provide Form 35 for the RTO or sign a Deed of Reconveyance to release property liens.
              </p>
            </section>

            {/* Section 4: Step 3 — NPCI NACH & e-Mandate Revocation to Eliminate Unauthorized Auto-Debits */}
            <section id="step-3-npci-nach-emandate-cancellation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Step 3: NPCI NACH</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A frequent problem after settlement is recurring auto-debits on your salary account. When you took the loan, you set up a NACH mandate or e-Mandate through the NPCI clearing network.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The NPCI network operates separately from branch settlement desks. Automated debit attempts continue on your EMI dates unless bank staff cancel the mandate in the NPCI portal. Each failed debit triggers bounce fees of ₹450 to ₹590 across both banks.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Repeated bounces can lead to wrongful notices under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA). Under RBI circular DPSS.CO.CHD.No./2019-20, you have the right to cancel mandates. Submit a written cancel form to your loan bank and savings bank with your OTS letter.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="end-to-end-closure-infographic" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. 5-Step End-to-End Loan Account Closure Protocol</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Getting full legal protection after loan settlement requires completing all 5 steps of the banking closure protocol:
              </p>

              <div className="my-6 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/how-to-close-loan-account-permanently-after-settlement.jpg"
                  alt="5-Step Protocol to Permanently Close Loan Account After Settlement in India"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <span>Complete Legal Guide: From Core Ledger Zeroing to Credit Bureau Clearance</span>
                  <span className="text-blue-400 font-semibold">SettleLoans Protocol</span>
                </div>
              </div>
            </section>

            {/* Section 6: Step 4 — Canceling Electronic Clearing Service (ECS) & Standing Instructions (SI) */}
            <section id="step-4-ecs-standing-instructions-revocation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Step 4: Canceling Electronic Clearing Service (ECS)</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Older loans and internal accounts often use legacy ECS debits or internal Standing Instructions (SI). If your salary account is in the same bank, the bank may have automated recovery sweep rules on file.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI Master Directions on Customer Service, you have the right to cancel standing instructions at any time. Submit a stamped Standing Instruction Revocation form to your branch. Get a Service Request (SR) number confirming that auto-debits are stopped.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Leaving an active Standing Instruction is risky. If salary or business funds enter your account, internal systems may sweep the money to cover old waived amounts. Written cancel prevents this issue.
              </p>
            </section>

            {/* Section 7: Step 5 — Credit Information Company (CIBIL/Experian/Equifax/CRIF) Zero Balance Update */}
            <section id="step-5-cibil-credit-bureau-clearance" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Step 5: Credit Bureau Rectification (CIBIL, Experian,</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The final proof of loan closure happens in credit bureau records: CIBIL, Experian, Equifax, and CRIF High Mark. Under Section 19 of the CICRA Act 2005, banks must send accurate monthly updates within 30 days.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After a settlement, the bureau status changes to <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-Off Settled&quot;</strong>. Most importantly, the <strong>&quot;Current Balance&quot;</strong> and <strong>&quot;Amount Overdue&quot;</strong> must show exactly <strong>₹0</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Download your credit report 30 to 45 days after receiving your NDC. If it shows an overdue balance, raise an online dispute on the CIBIL portal with your OTS letter and NDC. Under RBI rules, lenders must resolve reporting errors within 30 days.
              </p>
            </section>

            {/* Section 8: Legal Protections Against Zombie Debt Revival, ARC Assignments & Criminal Notices */}
            <section id="zombie-debt-arc-legal-protections" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Defending Against Zombie Debt Revival, ARC Assignments</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers who skip proper closure face the risk of <strong>zombie debt</strong>. Banks often bundle old unpaid loans and sell them to Asset Reconstruction Companies (ARCs) under Section 5 of the SARFAESI Act, 2002. Settled accounts sometimes get included in these bulk sales by mistake.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Years later, an ARC may send legal notices demanding the old balance with added interest. Without a stamped No Dues Certificate, proving your settlement becomes very hard.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                With your 5-step paperwork in hand, advocates can send a strong legal reply. We cite the Indian Contract Act, Section 308 of the Bharatiya Nyaya Sanhita (BNS). And the Consumer Protection Act, 2019. Faced with proof, ARCs must drop all recovery claims.
              </p>
            </section>

            {/* Section 9: Institutional NPA Accounting, NPV Calculations & Provisioning Reversals */}
            <section id="npv-accounting-npa-derecognition" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. NPA Accounting, Net Present Value (NPV)</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks agree to settlements because of RBI rules on Non-Performing Assets. When a loan turns into a loss asset, the bank must set aside 100% bad-debt provisions from its profits. This locks up capital and hurts bank returns.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you offer a settlement, the bank compares the cash offer with the Net Present Value (NPV) of a slow court case:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Compromise Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-xs sm:text-sm md:text-base text-blue-200 border border-slate-700">
                  NPV_Settlement = [ Immediate Cash Realized ] - [ 100% Provisioning Relief Reversal ] &gt; ∑ [ E(Recovery_t) / (1 + r)^t ] - Court Costs
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where E(Recovery_t) is expected cash recovery over 3 to 5 years, r is the discount rate. And deductions include lawyer fees and court stamp costs.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A settlement lets the bank release locked loss reserves back into profits. It removes bad loans from bank books. Permanent closure helps both your financial peace and the bank balance sheet.
              </p>
            </section>

            {/* Section 10: Comparative Matrix Table — Incomplete Settlement vs Flawless 5-Step Closure */}
            <section id="comparative-closure-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. Settlement vs Permanent Closure Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Reviewing structural differences shows why retail borrowers must enforce the complete 5-step post-settlement closure protocol:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Closure Dimension.</th>
                      <th>Informal / Incomplete Settlement.</th>
                      <th>Flawless 5-Step Permanent Closure.</th>
                      <th>Legal Impact &amp. Consequence.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Core Banking Ledger Status.</td>
                      <td>Active in shadow NPA suspense ledger.</td>
                      <td>Formally zeroed out via P&amp;L write-off voucher.</td>
                      <td>Stops phantom interest and fees.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">No Dues Certificate (NDC).</td>
                      <td>Email or digital receipt only.</td>
                      <td>Physical letter with branch seal and officer code.</td>
                      <td>Valid legal proof in court.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">NPCI NACH &amp. e-Mandates.</td>
                      <td>Active on automated clearing system.</td>
                      <td>Cancelled via sponsor and destination banks.</td>
                      <td>Stops bounce fees and Sec 25 PSSA notices.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Credit Bureau Record.</td>
                      <td>Shows active overdue balance / open write-off.</td>
                      <td>Reported as &apos;Settled&apos. with exactly ₹0 balance.</td>
                      <td>Stops negative marks. allows score to rebuild.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Zombie ARC Risk.</td>
                      <td>High risk of loan sale and fresh demands.</td>
                      <td>100% legal protection with complete papers.</td>
                      <td>Final closure with no residual dues.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Closure Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. SettleLoans Permanent Closure Legal Support</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Dealing with bank paperwork requires experienced legal guidance. SettleLoans provides complete legal support. We audit Core Banking ledgers. We secure physical branch No Dues Certificates within the 30-day RBI limit. We cancel NACH mandates and fix credit bureau records to close your loan permanently.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 12: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">12. FAQs: Permanent Loan Account Closure Protocol</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct legal answers to common questions on bank ledger reconciliation, branch No Dues Certificates, NPCI mandate cancellations. And credit bureau updates.
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
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Circular RBI/2023-24/60 (Mandatory 30-Day NDC &amp; Property Release)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.npci.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">NPCI NACH Procedural Guidelines &amp; e-Mandate Revocation Rules</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Grievance Redressal for Unissued NDCs)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Payment &amp; Settlement Systems Act, 2007 (Section 25 Protections)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.transunioncibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">TransUnion CIBIL Online Dispute Resolution Portal (CICRA 2005 Dispute Guidelines)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Legal Defense &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/salary-account-ecs-mandate-cancellation-rules"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Salary Account ECS Revocation
                </Link>
                <Link
                  href="/case-study-cibil-status-settled-to-closed"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Settled to Closed Case Study
                </Link>
                <Link
                  href="/cibil-score-kaise-sudhare-settlement-ke-baad"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Rebuilding Post-Settlement
                </Link>
                <Link
                  href="/bank-sold-loan-to-arc-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  ARC Loan Settlement Process
                </Link>
                <Link
                  href="/how-to-verify-authentic-bank-settlement-letter"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Verify Authentic Settlement Letter
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  HDFC Bank Loan Settlement
                </Link>
                <Link
                  href="/icici-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  ICICI Bank Loan Settlement
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Default &amp; Borrower Rights
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="block flex-shrink-0">
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
                Specialist in banking dispute resolution, loan closure forensics, RBI compliance, and CIBIL credit repair with over ten years of legal experience.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="text-[#1F5EFF] font-semibold hover:underline flex items-center gap-1">
                  <span>View Profile</span>
                  <span>→</span>
                </Link>
                <div className="flex items-center gap-1 text-emerald-600 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Legal Author</span>
                </div>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Immediate Legal Assistance</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Settled Loan Still Showing Overdue or ECS Bouncing?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let banks maintain phantom dues or hurt your CIBIL score. Hire expert advocates to complete all 5 closure steps and get your official No Dues Certificate.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Loan Closure Audit
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
                  <span>RBI Circular RBI/2023-24/60 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Physical Branch NDC with Official Stamp</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Banking Conciliation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
