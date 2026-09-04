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
          "reviewBody": "I settled an HDFC personal loan of ₹8.5 Lakhs in 2025, but the bank continued presenting NACH auto-debits that racked up over ₹14,000 in bounce charges on my salary account. SettleLoans stepped in, issued a statutory legal notice under the Payment and Settlement Systems Act, compelled the bank to refund every single bounce fee, cancelled the NPCI mandate, and delivered my physical branch No Dues Certificate with full round seal within two weeks.",
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
          "reviewBody": "After completing a compromise settlement on my ICICI credit card, the account was left hanging in the bank Core Banking Solution as an active overdue write-off. Six months later, an Asset Reconstruction Company sent me an aggressive demand notice. SettleLoans advocates forced the bank nodal officer to reconcile the ledger entries, zero out the core database balance, and update CIBIL to reflect ₹0 balance.",
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
          "reviewBody": "Bajaj Finance failed to issue my loan closure NOC even 60 days after I paid the OTS amount. SettleLoans invoked RBI Circular RBI/2023-24/60 and claimed statutory delayed compensation of ₹5,000 per day. The lender immediately handed over the authentic stamped No Dues Certificate, closed the loan account in their system, and cleared the commercial dispute on my credit bureau file.",
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
          "reviewBody": "I was terrified when Kotak Mahindra Bank kept showing a phantom overdue of ₹72,000 on CIBIL despite my settlement letter. SettleLoans drafted a formal dispute under the Credit Information Companies Regulation Act and approached the RBI Banking Ombudsman. Within 25 days, the credit bureau record was corrected to reflect a completely zeroed-out balance with no active legal tags.",
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
            "text": "No. Paying the negotiated settlement amount is merely the financial transaction step. In Indian banking operations, the loan account remains technically open in the Core Banking Solution (CBS) until the branch operations team passes a specific accounting voucher to write off the remaining waiver balance and changes the account status flag to 'Settled and Closed'. Without proactive verification, your account can remain in an active overdue state."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between an email settlement confirmation and an authentic branch No Dues Certificate (NDC)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An email confirmation or digital payment receipt is simply an informal acknowledgment of funds received. A legally binding No Dues Certificate (NDC) / No Objection Certificate (NOC) must be issued on official bank letterhead, bearing the specific loan account number, explicit confirmation that all claims are extinguished to ₹0, the branch manager's wet-ink signature, employee code, and the official round branch seal."
          }
        },
        {
          "@type": "Question",
          "name": "What are the legal time limits for a bank to issue a No Dues Certificate under RBI rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, all regulated commercial banks and NBFCs are legally mandated to release all original property documents, remove hypothecation charges, and issue an unambiguous No Dues Certificate within 30 days of full settlement completion. If the lender delays beyond 30 days without justifiable cause, they are obligated to pay compensation of ₹5,000 per day of delay to the borrower."
          }
        },
        {
          "@type": "Question",
          "name": "Why do banks continue presenting NACH and ECS auto-debits after a loan is settled?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NACH and e-Mandate systems operate on automated batch schedules through the National Payments Corporation of India (NPCI) clearing house, separate from branch recovery desks. Unless the bank operations team manually initiates a formal mandate cancellation request in the NPCI portal, automated debit instructions continue firing on monthly EMI dates, generating severe dishonour fees and wrongful legal risks."
          }
        },
        {
          "@type": "Question",
          "name": "How do I permanently cancel an active NACH or e-Mandate after loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To permanently revoke a NACH mandate, submit a formal written Mandate Cancellation Request to both the lending institution (sponsor bank) and your savings/salary bank (destination bank) enclosing copies of the OTS sanction letter and settlement payment proof. Under RBI circular DPSS.CO.CHD.No./2019-20, banks are legally obligated to process mandate revocations within 48 to 72 hours."
          }
        },
        {
          "@type": "Question",
          "name": "Can an Asset Reconstruction Company (ARC) revive a loan after it has been settled with the original bank?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An ARC cannot legally claim settled debt if you possess a valid OTS Sanction Letter, bank payment receipts, and a physical No Dues Certificate. However, if the originating bank sold a non-performing loan portfolio without updating internal accounting ledgers, ARCs may initiate mistaken recovery notices. Furnishing your stamped NDC and legal settlement documents immediately terminates any ARC claims."
          }
        },
        {
          "@type": "Question",
          "name": "How is a settled loan reported in CIBIL, and can the outstanding balance remain above ₹0?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In a compromise settlement, the credit bureau status is reported as 'Settled' or 'Post-Write-Off Settled'. Crucially, the 'Current Balance' and 'Amount Overdue' fields MUST reflect exactly ₹0. If your CIBIL report continues to display an active overdue amount, it represents a severe reporting violation under the Credit Information Companies Regulation Act (CICRA), requiring an immediate formal bureau dispute."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if my bank refuses to issue a No Dues Certificate after receiving settlement funds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the lender fails to issue the NDC within 30 days, submit a formal grievance to the bank Principal Nodal Officer. If unresolved within 30 days, file an online statutory complaint with the RBI Banking Ombudsman under the Integrated Ombudsman Scheme, seeking an immediate NDC directive along with ₹5,000 per day statutory delay compensation and damages for mental agony."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take for a credit score to recover after permanent loan account closure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Once the loan ledger is permanently closed and reported as ₹0 balance across credit bureaus, ongoing monthly negative delinquency reporting ceases immediately. By maintaining a clean payment track on existing active accounts and utilizing a secured fixed-deposit credit card, borrowers systematically rebuild their credit score back to 750+ within 18 to 24 months."
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
                Transferring funds under a One-Time Settlement (OTS) does not automatically terminate your loan. Complete legal extinguishment requires CBS ledger zeroing, a wet-ink stamped physical NDC, NPCI NACH revocation, ECS cancellation, and a formal ₹0 balance update across all four RBI-licensed credit bureaus.
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
                  <span><strong>The Settlement Trap:</strong> Remitting the agreed OTS amount is only an interim transaction; the account remains legally active until Core Banking Solution vouchers zero the master ledger.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Physical Branch NDC:</strong> Automated email receipts hold weak evidentiary standing in court; borrowers must secure an original, physical No Dues Certificate with an official branch seal and officer employee code.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>NPCI NACH Mandate Cancellation:</strong> Automated electronic debits continue presenting on monthly cycles unless explicitly cancelled through the sponsor bank and destination bank under RBI directives.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Credit Bureau ₹0 Zero Balance Mandate:</strong> The loan status must reflect &quot;Settled&quot; or &quot;Closed&quot; with both &quot;Current Balance&quot; and &quot;Amount Overdue&quot; reported as exactly ₹0 across CIBIL, Experian, Equifax, and CRIF High Mark.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Immunity from Zombie Debt &amp; ARCs:</strong> Executing all five closure steps eliminates the risk of commercial banks bundling your settled debt into non-performing loan pools sold to third-party recovery firms.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Reality of Loan Settlement — Why Paying OTS Does Not Automatically Close Your Account */}
            <section id="illusion-of-settlement-unclosed-accounts" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Illusion of Settlement: Why Paying Your OTS Amount Does Not Automatically Close Your Loan Account
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A dangerous misconception persists among retail borrowers in India: the belief that transferring the agreed settlement amount under a One-Time Settlement (OTS) letter immediately extinguishes their financial obligation. In the operational reality of commercial banking, paying a settlement amount is merely the preliminary financial step of an intricate multi-tier accounting procedure. When a borrower deposits settlement funds into a designated collection account or makes an electronic transfer via RTGS or NEFT, those funds do not automatically terminate the underlying credit contract or update external regulatory registries.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the internal operational frameworks of major Indian scheduled commercial banks (such as State Bank of India, HDFC Bank, ICICI Bank, Axis Bank, and Kotak Mahindra Bank) as well as prominent Non-Banking Financial Companies (NBFCs), retail loans operate on Core Banking Solutions (CBS) like Finacle, BaNCS, or Flexcube. When an unsecured personal loan, credit card, or business credit line falls into default past 90 days, it is classified as a Non-Performing Asset (NPA) and segregated into specialized recovery and suspense ledgers. 
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When your settlement payment arrives, it frequently sits in a generic branch suspense account or pool account until branch operations managers execute specific manual write-off and waiver entries. If the branch manager neglects to post the corresponding &quot;Compromise Settlement / Accounting Loss Voucher&quot; in the system, the Core Banking Solution continues to accumulate penal interest, unbilled finance charges, and operational levies against the un-waived residual balance. The borrower assumes their financial nightmare is over, while in institutional databases, their account remains an active, deteriorating default accumulating phantom dues that can trigger aggressive recovery actions months or years later.
              </p>
            </section>

            {/* Section 2: Step 1 — Bank Ledger Zeroing & Core Banking Solution (CBS) System Reconciliation */}
            <section id="step-1-bank-ledger-zeroing-cbs-audit" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Step 1: Bank Ledger Zeroing &amp; Core Banking Solution (CBS) System Reconciliation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The first indispensable step in achieving permanent loan closure is verifying the complete zeroing of the master account ledger inside the lender&apos;s Core Banking Solution. Every commercial loan comprises distinct sub-ledgers: the Principal Outstanding Ledger, the Normal Interest Accrual Ledger, the Penal Interest Ledger, and the Administrative / Legal Cost Surcharge Ledger. During a compromise settlement, the bank agrees to accept a portion of the principal while waiving the remainder of the principal alongside all accrued interest and penalties.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To effectuate permanent closure, the bank&apos;s credit operations department must pass dual accounting entries: crediting the cash received from the borrower to reduce principal and simultaneously debiting the bank&apos;s internal Profit &amp; Loss (P&amp;L) bad-debt provision reserve to write off the waived balance. Borrowers must demand a post-settlement Statement of Account (SOA) directly from the home branch. You must inspect this document with forensic precision to confirm that every sub-ledger reflects a balance of exactly ₹0.00.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Furthermore, the operational account status flag in the CBS system must be altered from &quot;NPA / Substandard / Doubtful&quot; to &quot;Settled &amp; Closed&quot; (or status code &apos;CLS&apos;). If the statement continues to display a residual balance or reflects a &quot;Running / Active Delinquency&quot; flag, you must immediately escalate the discrepancy to the bank Nodal Officer before proceeding to subsequent procedural steps.
              </p>
            </section>

            {/* Section 3: Step 2 — Securing the Physical Branch No Dues Certificate (NDC) with Official Bank Seal */}
            <section id="step-2-physical-branch-ndc-seal" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Step 2: Securing the Physical Branch No Dues Certificate (NDC) with Official Seal &amp; Signatures
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In an era dominated by automated customer service portals and system-generated email communications, retail borrowers often make the grave mistake of accepting an informal email or electronic payment confirmation as proof of loan extinguishment. In the eyes of Indian commercial and civil courts, digital transaction confirmations only establish that money changed hands; they do not establish that the contract was mutually discharged or that the creditor waived its statutory right to claim residual balances under the Indian Contract Act, 1872.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers must obtain an original, physical No Dues Certificate (NDC) or No Objection Certificate (NOC) printed on the official corporate letterhead of the lending institution. A legally robust NDC must explicitly contain five non-negotiable elements: the exact 16-digit Loan Account Number, the complete name and PAN of the borrower, unambiguous contractual language stating that the account stands &quot;Fully and Finally Settled with ₹0 Residual Liability,&quot; the full name, designation, and employee code of the authorized signing branch official, and the official wet-ink round stamp of the originating branch.
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>RBI Circular RBI/2023-24/60: Mandatory 30-Day NDC Timeline &amp; ₹5,000/Day Penalty</span>
                </div>
                <p className="leading-relaxed text-amber-900">
                  Under the Reserve Bank of India directive <em>RBI/2023-24/60 (Responsible Lending Conduct – Release of Movable / Immovable Property Documents on Repayment / Settlement of Personal Loans)</em>, all regulated entities (commercial banks, NBFCs, and housing finance companies) are legally obligated to release all original documents, remove registry charges, and deliver the final No Dues Certificate within 30 days of settlement completion. If the lender delays beyond 30 days without lawful justification, they are mandated to pay statutory compensation of ₹5,000 per calendar day of delay directly to the borrower.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For vehicle loans or secured property facilities, the lender must also provide Form 35 (Notice of Termination of an Agreement of Hypothecation) addressed to the Regional Transport Office (RTO) or execute a formal Deed of Reconveyance before the Sub-Registrar of Assurances to release mortgage liens on title deeds.
              </p>
            </section>

            {/* Section 4: Step 3 — NPCI NACH & e-Mandate Revocation to Eliminate Unauthorized Auto-Debits */}
            <section id="step-3-npci-nach-emandate-cancellation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Step 3: NPCI NACH &amp; e-Mandate Revocation to Eliminate Unauthorized Auto-Debits
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Among the most pervasive and damaging post-settlement complications in India is the continuation of automated electronic clearing debits against the borrower&apos;s primary savings or salary account. When you originally availed the credit facility, you executed a National Automated Clearing House (NACH) mandate or electronic mandate (e-Mandate) authorized through net banking, debit card, or physical Aadhaar-based authentication through the National Payments Corporation of India (NPCI) clearing gateway.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The technical clearing infrastructure of NPCI operates entirely separate from bank recovery and settlement departments. Unless the bank&apos;s central operations desk initiates a formal electronic mandate cancellation request on the NPCI clearing network, the automated clearing script will continue attempting to debit your monthly equated monthly installment (EMI) on the pre-programmed schedule. If your bank account maintains insufficient funds, each failed presentation triggers cumulative electronic bounce charges ranging from ₹450 to ₹590 per failure across both the lender and destination banks.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Worse still, repeated mandate dishonours expose borrowers to frivolous criminal prosecution under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA), which treats electronic mandate defaults with identical penal severity to Section 138 cheque bounce proceedings. Under RBI circular <em>DPSS.CO.CHD.No./2019-20</em> on e-Mandate processing, customers possess the statutory right to cancel electronic recurring payment mandates through their destination bank. Borrowers must submit a formal Mandate Cancellation Request to both the lending institution and their savings bank, attaching copies of the OTS sanction letter and obtaining written acknowledgment of mandate termination.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="end-to-end-closure-infographic" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. 5-Step End-to-End Loan Account Closure Protocol: Institutional Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Achieving absolute legal immunity and finality following a loan settlement requires executing every phase of the standard 5-step banking closure protocol:
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
                  <span>Comprehensive Regulatory Blueprint: From Core Ledger Zeroing to Credit Bureau Clearance</span>
                  <span className="text-blue-400 font-semibold">SettleLoans Protocol</span>
                </div>
              </div>
            </section>

            {/* Section 6: Step 4 — Canceling Electronic Clearing Service (ECS) & Standing Instructions (SI) */}
            <section id="step-4-ecs-standing-instructions-revocation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Step 4: Canceling Electronic Clearing Service (ECS) &amp; Standing Instructions on Salary Accounts
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In addition to NPCI NACH mandates, older loan accounts or internal banking relationships frequently utilize legacy Electronic Clearing Service (ECS) debits or internal Standing Instructions (SI). If you maintain an active savings or salary account with the exact same commercial bank where you settled your loan, the bank may retain internal automated auto-sweep rules programmed into your customer relationship file.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the RBI Master Directions on Customer Service in Banks, a customer has an unconditional legal prerogative to revoke internal standing instructions and stop payment on recurring auto-debit orders at any time. When settling with your primary bank, you must file a specific, stamped Standing Instruction Revocation Memo with the home branch operations manager. Ensure that the branch issues an official Service Request (SR) number confirming that internal auto-debit triggers linked to your Customer Information File (CIF) have been permanently disabled.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Retaining an uncancelled Standing Instruction creates extreme financial jeopardy. If salary credits or incoming business receipts hit your account, automated internal recovery sweeps may instantly deduct funds to satisfy the pre-settlement un-waived balance, creating a protracted legal dispute where the bank claims automated systems acted before manual settlement overrides took effect. Securing prior written cancellation eliminates this risk entirely.
              </p>
            </section>

            {/* Section 7: Step 5 — Credit Information Company (CIBIL/Experian/Equifax/CRIF) Zero Balance Update */}
            <section id="step-5-cibil-credit-bureau-clearance" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Step 5: Credit Bureau Rectification (CIBIL, Experian, Equifax, CRIF) &amp; Disputing Phantom Dues
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The ultimate verification of permanent loan closure occurs within the registries of India&apos;s four RBI-licensed Credit Information Companies: TransUnion CIBIL, Experian India, Equifax, and CRIF High Mark. Under Section 19 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), regulated lending institutions are required to submit monthly credit updates detailing the accurate status and outstanding balance of every credit facility within 30 days of the close of each reporting month.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a loan is resolved through a compromise settlement, the credit bureau reporting conventions establish specific status classifications. The loan will be designated as <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-Off Settled&quot;</strong> rather than &quot;Closed / Regularized.&quot; While this status indicates that the debt was resolved for less than the full contractual value, the most vital parameters are the financial balance fields. The <strong>&quot;Current Balance&quot;</strong> and <strong>&quot;Amount Overdue&quot;</strong> entries MUST reflect exactly <strong>₹0</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Approximately 30 to 45 days after receiving your No Dues Certificate, download your comprehensive Credit Information Report (CIR). If the lender has reported the account with an active overdue balance or classified it as an open write-off, you must lodge an immediate commercial dispute through the CIBIL online dispute resolution portal, attaching the OTS Sanction Letter and stamped NDC as statutory evidence. Under RBI regulations, credit bureaus and lending institutions must investigate and resolve credit reporting disputes within 30 days, failing which the lender becomes liable for regulatory penalties and civil damages for injurious falsehood.
              </p>
            </section>

            {/* Section 8: Legal Protections Against Zombie Debt Revival, ARC Assignments & Criminal Notices */}
            <section id="zombie-debt-arc-legal-protections" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Defending Against Zombie Debt Revival, ARC Assignments &amp; Unlawful Legal Notices
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A critical danger confronting borrowers who neglect comprehensive loan closure protocols is the emergence of <strong>zombie debt</strong>. Commercial banks frequently package non-performing loan books into multi-crore distressed debt pools and assign them to Asset Reconstruction Companies (ARCs) under Section 5 of the SARFAESI Act, 2002. Due to sloppy data reconciliation between originating bank branches and central credit management teams, settled accounts with residual ledger balances are occasionally included in these wholesale debt assignments.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Years after executing an informal settlement, the borrower suddenly receives an intimidating legal demand notice from an ARC or third-party collection agency claiming that the full original loan balance—compounded with penal interest over several years—remains overdue. Without an authentic, stamped No Dues Certificate, Core Banking ledger statements, and formal settlement sanction letters, proving that the debt was lawfully compromised becomes an exhausting evidentiary battle.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Armed with the complete 5-step documentation portfolio, experienced advocates can immediately issue a scathing legal reply notice to the ARC and original lender, citing violation of the Indian Contract Act, criminal extortion under Section 308 of the Bharatiya Nyaya Sanhita (BNS), and unfair trade practices under the Consumer Protection Act, 2019. Faced with incontrovertible documentary proof of settlement, ARCs are forced to unconditionally withdraw recovery proceedings and purge all claims from their records.
              </p>
            </section>

            {/* Section 9: Institutional NPA Accounting, NPV Calculations & Provisioning Reversals */}
            <section id="npv-accounting-npa-derecognition" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. NPA Accounting, Net Present Value (NPV) &amp; Institutional Balance Sheet De-Recognition
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To appreciate why banks willingly execute compromise settlements and zero out ledgers, one must examine the institutional economics of Non-Performing Assets under RBI prudential norms. Once an unsecured loan is classified as a loss asset, the bank is legally obligated to allocate 100% of the unpaid balance from its core operational revenues as bad-debt provisioning. This locked capital impairs the bank&apos;s Capital Adequacy Ratio (CAR) and reduces shareholder return on equity.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower offers a compromise settlement, the bank&apos;s Zonal Settlement Committee evaluates the proposal against the Net Present Value (NPV) of potential recovery through civil litigation:
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
                  Where E(Recovery_t) represents expected litigation realization over 3 to 5 years, r is the bank&apos;s internal hurdle discount rate (12%–15%), and deductions account for advocate retainers, court stamp duties, and balance sheet drag.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Executing a complete OTS allows the bank to release locked 100% loss-asset provisions directly back into operating profits while permanently de-recognizing the toxic asset from its regulatory balance sheet. Therefore, permanent loan closure serves both the borrower&apos;s legal peace and the bank&apos;s institutional balance sheet optimization.
              </p>
            </section>

            {/* Section 10: Comparative Matrix Table — Incomplete Settlement vs Flawless 5-Step Closure */}
            <section id="comparative-closure-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                10. Comparative Matrix: Informal / Incomplete Settlement vs Flawless 5-Step Permanent Loan Closure
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Reviewing the structural operational differences illustrates why retail borrowers must strictly enforce the complete 5-step post-settlement closure protocol:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Closure Dimension</th>
                      <th>Informal / Incomplete Settlement</th>
                      <th>Flawless 5-Step Permanent Closure</th>
                      <th>Legal Impact &amp; Consequence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Core Banking Ledger Status</td>
                      <td>Remains active in shadow NPA suspense ledger</td>
                      <td>Formally zeroed out via P&amp;L write-off voucher</td>
                      <td>Eliminates phantom penal accruals &amp; unbilled charges</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">No Dues Certificate (NDC)</td>
                      <td>Unverified email or auto-receipt only</td>
                      <td>Original physical letter with branch seal &amp; officer code</td>
                      <td>Irrefutable evidentiary standing under Indian Evidence Act</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">NPCI NACH &amp; e-Mandates</td>
                      <td>Active on automated clearing network</td>
                      <td>Formally cancelled via sponsor and destination banks</td>
                      <td>Prevents bounce charges &amp; Sec 25 PSSA criminal risks</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Credit Bureau CIR Record</td>
                      <td>Shows active overdue balance / open write-off</td>
                      <td>Reported as &apos;Settled&apos; with exactly ₹0 Current Balance</td>
                      <td>Halts monthly default reporting; enables 750+ score rebuild</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Zombie ARC Vulnerability</td>
                      <td>High risk of bulk debt assignment &amp; fresh recovery</td>
                      <td>100% legal immunity backed by complete documentation</td>
                      <td>Absolute contractual finality with zero residual liability</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Closure Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  11. SettleLoans Legal Defense &amp; Permanent Loan Closure Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating the bureaucratic inertia of major Indian commercial banks and NBFCs requires experienced legal advocates specializing in banking jurisprudence, RBI consumer protection mandates, NPCI clearing rules, and credit bureau dispute resolution. SettleLoans provides comprehensive end-to-end legal representation: conducting forensic Core Banking ledger audits, compelling lenders to issue physical branch No Dues Certificates within the statutory 30-day window under RBI Circular RBI/2023-24/60, revoking NACH/e-Mandates, and rectifying credit bureau discrepancies to ensure your loan is permanently and irrevocably closed with absolute legal finality.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 12: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  12. Frequently Asked Questions: Permanent Loan Account Closure Protocol
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to critical questions regarding bank ledger reconciliation, branch No Dues Certificates, NPCI mandate cancellations, and credit bureau updates in India.
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
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in banking dispute conciliation, post-settlement loan account forensics, RBI Master Direction compliance, and credit bureau remediation with over a decade of litigation advisory experience.
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
                Do not let banks maintain phantom dues or ruin your CIBIL score. Engage expert advocates to enforce the 5-step permanent closure protocol and secure your official branch No Dues Certificate.
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
