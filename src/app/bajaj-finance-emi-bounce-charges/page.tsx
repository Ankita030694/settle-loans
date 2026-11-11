import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import LoanSettlementAssessmentFunnel from "@/components/LoanSettlementAssessmentFunnel";

export const metadata: Metadata = {
  title: "Bajaj Finance EMI Bounce Charges Guide | SettleLoans",
  description: "Check official Bajaj Finance personal loan EMI bounce charges (Rs. 700 to Rs. 1,200), per day and per month penal math, bounce SMS rules, and relief.",
  alternates: {
    canonical: "https://www.settleloans.in/bajaj-finance-emi-bounce-charges",
  },
  openGraph: {
    title: "Bajaj Finance EMI Bounce Charges Guide | SettleLoans",
    description: "Check official Bajaj Finance personal loan EMI bounce charges (Rs. 700 to Rs. 1,200), per day and per month penal math, bounce SMS rules, and relief.",
    url: "https://www.settleloans.in/bajaj-finance-emi-bounce-charges",
    type: "article",
    images: [
      {
        url: "https://www.settleloans.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bajaj Finance Personal Loan EMI Bounce Charges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bajaj Finance EMI Bounce Charges Guide | SettleLoans",
    description: "Check official Bajaj Finance personal loan EMI bounce charges (Rs. 700 to Rs. 1,200), per day and per month penal math, bounce SMS rules, and relief.",
    images: ["https://www.settleloans.in/og-image.jpg"],
  },
};

const tocItems = [
  { id: "bajaj-official-fee-table", title: "Official Bajaj Fee Schedule" },
  { id: "per-bounce-per-day-per-month", title: "Per Bounce vs Per Day vs Month" },
  { id: "bajaj-bounce-message-decoded", title: "Decoding Bajaj Bounce SMS" },
  { id: "second-of-month-payroll-trap", title: "2nd-Date NACH vs Salary Date" },
  { id: "flexi-vs-term-loan-bounce", title: "Flexi Loan vs Term PL Bounce" },
  { id: "six-month-bajaj-cost-table", title: "6-Month Overdue Cost Math" },
  { id: "experia-manual-clearance", title: "Clearing Overdue on Experia" },
  { id: "bajaj-mandate-reject-audit", title: "Experia SOA & Multi-LAN Trap" },
  { id: "bajaj-cibil-dpd-escalation", title: "CIBIL Reporting & Escalation" },
  { id: "bajaj-salaried-settlement", title: "Salaried Bajaj Settlement Path" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
  {
    q: "How much are Bajaj Finance personal loan EMI bounce charges per bounce?",
    a: "According to Bajaj Finance Limited's (Bajaj Finserv) published Fees and Charges schedule for Personal Loans, EMI bounce charges typically range from Rs. 700 to Rs. 1,200 per bounce instance (inclusive of applicable taxes), depending on your loan variant and the Key Fact Statement signed at disbursement.",
  },
  {
    q: "Are Bajaj Finance EMI bounce charges levied per day or per bounce?",
    a: "The EMI bounce charge itself (Rs. 700 to Rs. 1,200) is levied per failed NACH, ECS, or cheque presentation, not per day. What accrues on a daily basis is Bajaj Finance's Penal Charge (Late Payment Charge) of up to 36% per annum (roughly 0.0986% per day or 3% per month) calculated on the unpaid overdue installment until cleared.",
  },
  {
    q: "How much can Bajaj Finance bounce and penal charges cost per month?",
    a: "In a single missed month on a Rs. 20,000 EMI where Bajaj presents NACH twice and your private salary bank also deducts inward NACH return fees, you can face Rs. 1,400 to Rs. 2,400 in Bajaj bounce fees, Rs. 1,062 to Rs. 1,180 in bank return fees, plus roughly Rs. 600 (+ tax) in 30-day penal charges, exceeding Rs. 3,100 to Rs. 4,200 in one month.",
  },
  {
    q: "What does a Bajaj Finance EMI bounce message mean and is the payment link safe?",
    a: "Before and right after the 2nd-of-the-month due date, Bajaj Finserv sends automated SMS and WhatsApp alerts noting mandate dishonour and penal accrual. Instead of clicking unverified links forwarded by third-party numbers, always log directly into the official Bajaj Finserv app or MyAccount (Experia) portal to verify and pay overdue installments.",
  },
  {
    q: "Why did my savings bank also deduct Rs. 295 or Rs. 590 when my Bajaj EMI bounced?",
    a: "Because Bajaj Finance is an NBFC, it pulls monthly EMIs from your HDFC, ICICI, SBI, Axis, or Kotak salary account via NPCI e-NACH. Every failed presentation causes Bajaj to bill Rs. 700 to Rs. 1,200 on your loan ledger AND causes your savings bank to deduct its own inward NACH return fee immediately.",
  },
  {
    q: "Why does Bajaj Finance present personal loan EMIs on the 2nd of the month?",
    a: "Bajaj Finance standardizes most retail personal loan and Flexi loan NACH presentations on the 2nd of every month. Salaried borrowers whose companies credit payroll on the 5th, 7th, or 10th must leave the EMI sum untouched from the previous month's paycheck to prevent recurring 2nd-date bounces.",
  },
  {
    q: "How do bounce charges work on a Bajaj Finance Flexi Hybrid or Flexi Term Loan?",
    a: "On Bajaj Flexi Hybrid and Flexi Term loans, your monthly NACH debit covers either interest-only on utilized principal (during initial tenure) or principal plus interest. Missing that scheduled monthly NACH debit triggers the exact same Rs. 700 to Rs. 1,200 bounce charge plus daily penal charges up to 36% p.a., and Bajaj can freeze further drawdown limits immediately.",
  },
  {
    q: "Can Bajaj Finance capitalize penal charges onto my principal balance?",
    a: "No. Under Reserve Bank of India Fair Lending Practice norms on Penal Charges applicable to NBFCs, Bajaj Finance cannot capitalize unpaid bounce fees or overdue penal charges into principal to charge compounding loan interest on top of penalties.",
  },
  {
    q: "How do I stop Bajaj Finance from re-presenting NACH after I had a bounce?",
    a: "Pay the overdue installment manually inside the official Bajaj Finserv MyAccount (Experia) app or web portal at least 48 hours before the next retry cycle and save the payment receipt. Never cancel your e-Mandate unilaterally without resolving the overdue balance, as mandate revocation triggers covenant default.",
  },
  {
    q: "Does Bajaj Finance waive bounce and penal charges during personal loan settlement?",
    a: "When an unsecured Bajaj Finance Term or Flexi personal loan crosses 90+ days past due into NPA territory due to genuine salaried hardship like job loss, pay cuts, or medical crisis, negotiated one-time settlements routinely waive 100% of accumulated bounce fees and 36% p.a. penal charges while settling principal at an agreed haircut.",
  },
  {
    q: "What combined debt minimum is needed for SettleLoans to assist with Bajaj Finance loans?",
    a: "SettleLoans represents salaried borrowers carrying Rs. 3,00,000 or more in combined unsecured debt across Bajaj Finance personal/Flexi loans, bank personal loans, credit cards, and app loans.",
  },
];

export default function BajajFinanceEmiBounceChargesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.settleloans.in/bajaj-finance-emi-bounce-charges#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.settleloans.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Personal Loan EMI Bounce Charges",
            "item": "https://www.settleloans.in/personal-loan-emi-bounce-charges"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Bajaj Finance EMI Bounce Charges",
            "item": "https://www.settleloans.in/bajaj-finance-emi-bounce-charges"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.settleloans.in/bajaj-finance-emi-bounce-charges#article",
        "headline": "Bajaj Finance Personal Loan EMI & NACH Bounce Charges: Per Bounce, Per Day & Per Month Math",
        "description": "Verified guide to Bajaj Finance (Bajaj Finserv) personal loan EMI bounce fees (Rs. 700 to Rs. 1,200), up to 36% p.a. daily penal charges, bounce SMS alerts, and settlement.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Salaried Debt Advisory"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2026-11-11",
        "dateModified": "2026-11-11",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.settleloans.in/bajaj-finance-emi-bounce-charges"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.settleloans.in/bajaj-finance-emi-bounce-charges#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much are Bajaj Finance personal loan EMI bounce charges per bounce?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "According to Bajaj Finance Limited's (Bajaj Finserv) published Fees and Charges schedule for Personal Loans, EMI bounce charges typically range from Rs. 700 to Rs. 1,200 per bounce instance (inclusive of applicable taxes), depending on your loan variant and the Key Fact Statement signed at disbursement."
            }
          },
          {
            "@type": "Question",
            "name": "Are Bajaj Finance EMI bounce charges levied per day or per bounce?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The EMI bounce charge itself (Rs. 700 to Rs. 1,200) is levied per failed NACH, ECS, or cheque presentation, not per day. What accrues on a daily basis is Bajaj Finance's Penal Charge (Late Payment Charge) of up to 36% per annum (roughly 0.0986% per day or 3% per month) calculated on the unpaid overdue installment until cleared."
            }
          },
          {
            "@type": "Question",
            "name": "How much can Bajaj Finance bounce and penal charges cost per month?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In a single missed month on a Rs. 20,000 EMI where Bajaj presents NACH twice and your private salary bank also deducts inward NACH return fees, you can face Rs. 1,400 to Rs. 2,400 in Bajaj bounce fees, Rs. 1,062 to Rs. 1,180 in bank return fees, plus roughly Rs. 600 (+ tax) in 30-day penal charges, exceeding Rs. 3,100 to Rs. 4,200 in one month."
            }
          },
          {
            "@type": "Question",
            "name": "What does a Bajaj Finance EMI bounce message mean and is the payment link safe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Before and right after the 2nd-of-the-month due date, Bajaj Finserv sends automated SMS and WhatsApp alerts noting mandate dishonour and penal accrual. Instead of clicking unverified links forwarded by third-party numbers, always log directly into the official Bajaj Finserv app or MyAccount (Experia) portal to verify and pay overdue installments."
            }
          },
          {
            "@type": "Question",
            "name": "Why did my savings bank also deduct Rs. 295 or Rs. 590 when my Bajaj EMI bounced?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because Bajaj Finance is an NBFC, it pulls monthly EMIs from your HDFC, ICICI, SBI, Axis, or Kotak salary account via NPCI e-NACH. Every failed presentation causes Bajaj to bill Rs. 700 to Rs. 1,200 on your loan ledger AND causes your savings bank to deduct its own inward NACH return fee immediately."
            }
          },
          {
            "@type": "Question",
            "name": "Why does Bajaj Finance present personal loan EMIs on the 2nd of the month?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bajaj Finance standardizes most retail personal loan and Flexi loan NACH presentations on the 2nd of every month. Salaried borrowers whose companies credit payroll on the 5th, 7th, or 10th must leave the EMI sum untouched from the previous month's paycheck to prevent recurring 2nd-date bounces."
            }
          },
          {
            "@type": "Question",
            "name": "How do bounce charges work on a Bajaj Finance Flexi Hybrid or Flexi Term Loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "On Bajaj Flexi Hybrid and Flexi Term loans, your monthly NACH debit covers either interest-only on utilized principal (during initial tenure) or principal plus interest. Missing that scheduled monthly NACH debit triggers the exact same Rs. 700 to Rs. 1,200 bounce charge plus daily penal charges up to 36% p.a., and Bajaj can freeze further drawdown limits immediately."
            }
          },
          {
            "@type": "Question",
            "name": "Can Bajaj Finance capitalize penal charges onto my principal balance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Reserve Bank of India Fair Lending Practice norms on Penal Charges applicable to NBFCs, Bajaj Finance cannot capitalize unpaid bounce fees or overdue penal charges into principal to charge compounding loan interest on top of penalties."
            }
          },
          {
            "@type": "Question",
            "name": "How do I stop Bajaj Finance from re-presenting NACH after I had a bounce?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pay the overdue installment manually inside the official Bajaj Finserv MyAccount (Experia) app or web portal at least 48 hours before the next retry cycle and save the payment receipt. Never cancel your e-Mandate unilaterally without resolving the overdue balance, as mandate revocation triggers covenant default."
            }
          },
          {
            "@type": "Question",
            "name": "Does Bajaj Finance waive bounce and penal charges during personal loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When an unsecured Bajaj Finance Term or Flexi personal loan crosses 90+ days past due into NPA territory due to genuine salaried hardship like job loss, pay cuts, or medical crisis, negotiated one-time settlements routinely waive 100% of accumulated bounce fees and 36% p.a. penal charges while settling principal at an agreed haircut."
            }
          },
          {
            "@type": "Question",
            "name": "What combined debt minimum is needed for SettleLoans to assist with Bajaj Finance loans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SettleLoans represents salaried borrowers carrying Rs. 3,00,000 or more in combined unsecured debt across Bajaj Finance personal/Flexi loans, bank personal loans, credit cards, and app loans."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main
        className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white"
        style={{ fontFamily: "var(--font-satoshi), Satoshi, sans-serif" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-36 md:pb-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/15 text-[#1F5EFF] text-xs md:text-sm font-bold mb-5 tracking-wider uppercase">
              Verified NBFC Schedule • Checked 11 Nov 2026
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#DEDEDE] mb-6 leading-[1.12] tracking-tight">
              Bajaj Finance Personal Loan EMI &amp; NACH Bounce Charges
            </h1>
            <p className="text-base md:text-xl text-[#DEDEDE]/85 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
              Clear answers on Bajaj Finance&apos;s Rs. 700 to Rs. 1,200 per-bounce fee, daily vs monthly penal charges (up to 36% p.a.), 2nd-of-the-month NACH bounce messages, Flexi loan overdue freezes, and salaried settlement options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#settlement-assessment"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-8 rounded-[10px] hover:scale-105 transition-all duration-300 text-base md:text-lg shadow-lg"
              >
                Assess Combined Debt Options
              </a>
              <Link
                href="https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 text-white border border-white/20 font-bold py-4 px-8 rounded-[10px] hover:bg-white/20 transition-all duration-300 text-base md:text-lg"
              >
                Open Bajaj Bounce Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li>
                  <Link href="https://www.settleloans.in/" className="hover:text-[#1F5EFF] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="text-gray-300">/</span>
                </li>
                <li>
                  <Link
                    href="https://www.settleloans.in/personal-loan-emi-bounce-charges"
                    className="hover:text-[#1F5EFF] transition-colors"
                  >
                    Personal Loan EMI Bounce Charges
                  </Link>
                </li>
                <li>
                  <span className="text-gray-300">/</span>
                </li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">
                  Bajaj Finance EMI Bounce Charges
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16 flex flex-col lg:flex-row gap-10 relative">
          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[230px] relative">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Column: Main Guide */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#2E2E2E]">
            {/* Section 1: Official Bajaj Fee Schedule */}
            <section id="bajaj-official-fee-table" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Official Bajaj Finance Personal Loan Bounce &amp; Penal Tariff
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Bajaj Finance Limited (widely known via the <strong>Bajaj Finserv</strong> brand) is India&apos;s largest non-banking financial company (NBFC) for salaried unsecured credit, offering Term Personal Loans, Flexi Term Loans, and Flexi Hybrid Loans. Because NBFCs carry higher unsecured funding costs than commercial banks, Bajaj Finance enforces one of the steepest bounce and overdue penalty schedules in the salaried lending market.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-6">
                Below is the verified Bajaj Finance Personal Loan default fee structure checked against Bajaj Finserv&apos;s official Fees and Charges publication on 11 November 2026:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-5">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#2E2E2E] text-white">
                      <th className="p-4 font-bold">Bajaj Finance Personal Loan Fee Head</th>
                      <th className="p-4 font-bold">Published Charge / Rate</th>
                      <th className="p-4 font-bold">How It Hits Your Ledger</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">EMI / NACH / ECS / Cheque Bounce Charge</td>
                      <td className="p-4 text-slate-700">Rs. 700 to Rs. 1,200 per bounce (incl. taxes)</td>
                      <td className="p-4 font-semibold text-red-700">Per failed presentation per KFS</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Penal Charge (Late Payment Charge / LPC)</td>
                      <td className="p-4 text-slate-700">Up to 36% p.a. (3% per month)</td>
                      <td className="p-4 font-semibold text-red-700">Calculated daily on overdue EMI (non-capitalized)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Mandate Rejection Charge</td>
                      <td className="p-4 text-slate-700">Rs. 450 per month from due month if unrectified</td>
                      <td className="p-4 font-semibold text-slate-800">Applies if new mandate isn&apos;t registered after rejection</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Foreclosure / Full Prepayment Fee</td>
                      <td className="p-4 text-slate-700">Up to 4.72% (incl. taxes) on principal / drawdown</td>
                      <td className="p-4 font-semibold text-slate-800">Varies between Term Loan &amp; Flexi variants</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs md:text-sm text-slate-600">
                <strong>Official Source Verification:</strong> Verified against{" "}
                <a
                  href="https://www.bajajfinserv.in/all-fees-and-charges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  Bajaj Finserv All Fees and Charges Schedule
                </a>{" "}
                on <strong>11 November 2026</strong>. Exact per-bounce amounts (e.g., Rs. 700, Rs. 900, Rs. 1,000, or Rs. 1,200) are locked in the Key Fact Statement (KFS) inside your MyAccount (Experia) loan document kit.
              </div>
            </section>

            {/* Funnel Near Hero */}
            <div className="mb-14">
              <div className="p-5 rounded-t-3xl bg-blue-50 border border-b-0 border-blue-200 text-sm text-slate-800">
                <strong>Salaried Debt Assessment:</strong> Facing Bajaj Finance Term or Flexi loan bounce fees alongside bank personal loans or credit cards? SettleLoans assists salaried borrowers when <strong>combined unsecured debt across all lenders is ₹3,00,000 or higher</strong>. Check your settlement plan below.
              </div>
              <LoanSettlementAssessmentFunnel className="!mt-0 !rounded-t-none" />
            </div>

            {/* Section 2: Per Bounce vs Per Day vs Per Month */}
            <section id="per-bounce-per-day-per-month" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Bajaj Bounce Charges: Per Bounce vs Per Day vs Per Month
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Thousands of stressed borrowers search Google every month for <em>&quot;Bajaj Finance EMI bounce charges per day&quot;</em> or <em>&quot;Bajaj Finance bounce charges per month&quot;</em> because tele-collection callers sometimes blur flat dishonour fees and daily overdue penalties together during urgent reminder calls. Separating the three time units removes panic and lets you audit your loan statement accurately:
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    1. Per Bounce (Rs. 700 to Rs. 1,200 Per Failed Presentation)
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Bajaj Finance does <strong>not</strong> charge Rs. 700 or Rs. 1,200 every single calendar day! The bounce fee is triggered strictly when Bajaj submits an electronic NACH/ECS debit or cheque to your bank and your bank dishonours it. Plus, your own savings bank (HDFC, ICICI, SBI, Axis, Kotak) deducts Rs. 295 to Rs. 590 per failed inward NACH debit.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200">
                  <h3 className="text-lg font-black text-[#1F5EFF] mb-2">
                    2. Per Day (Up to 0.0986% Daily Penal Charge on Overdue EMI)
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    What <em>does</em> run every single day from the 3rd of the month until you pay is the <strong>Penal Charge (Late Payment Charge)</strong> of up to 36% per annum. On a Rs. 20,000 overdue EMI, 36% p.a. equals roughly <strong>Rs. 19.73 per day</strong> (plus applicable tax). Over 10 days of delay, daily penal charges add ~Rs. 197 (+ tax), not Rs. 10,000!
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <h3 className="text-lg font-black text-amber-950 mb-2">
                    3. Per Month (Combined Monthly Bleed When Unpaid)
                  </h3>
                  <p className="text-sm md:text-base text-amber-950 leading-relaxed">
                    Add both components over a full 30-day missed cycle on a Rs. 20,000 EMI (assuming 2 NACH presentations at Rs. 950 each + 2 private bank returns at Rs. 590 each + 30 days of 3% monthly penal charge + GST): Rs. 1,900 + Rs. 1,180 + Rs. 708 = <strong>Rs. 3,788 per month</strong> in combined penalty drain.
                  </p>
                </div>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Crucially, under RBI&apos;s Fair Lending Practice directions on Penal Charges, Bajaj Finance is barred from capitalizing unpaid bounce fees or daily penal charges into your loan principal. They sit in a separate overdue charges bucket rather than compounding future contractual interest.
              </p>
            </section>

            {/* Section 3: Decoding Bajaj Bounce SMS & WhatsApp Messages */}
            <section id="bajaj-bounce-message-decoded" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Decoding Bajaj Finance EMI Bounce SMS &amp; Payment Alerts
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                When your 2nd-of-the-month NACH debit fails, you will typically receive multiple automated SMS, WhatsApp, and IVR messages within 24 hours. Knowing how to read a <em>Bajaj Finance EMI bounce message</em> protects you from both duplicate debits and third-party payment scams:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Pre-Bounce Balance Alert (29th to 1st):</strong> Reminds you to maintain clear funds in your linked bank account at least 1 to 2 days ahead of the 2nd due date.
                </li>
                <li>
                  <strong>Dishonour Notification SMS (2nd or 3rd):</strong> Confirms that your NACH/e-Mandate returned unpaid due to insufficient funds or technical reasons, notes that bounce and daily penal charges apply, and prompts immediate online clearance to protect your CIBIL score.
                </li>
                <li>
                  <strong>Verify Official Payment Channels Only:</strong> Never transfer overdue EMIs to a personal mobile number, personal Google Pay/PhonePe QR code, or unverified link sent from a personal WhatsApp number claiming &quot;pay EMI without bounce charge today.&quot; Always open the official <strong>Bajaj Finserv App</strong> or log into <strong>MyAccount (Experia)</strong> directly to pay against your 14-character Loan Account Number (LAN) so you receive an instant system receipt.
                </li>
              </ul>
            </section>

            {/* Section 4: 2nd-of-Month Payroll Collision */}
            <section id="second-of-month-payroll-trap" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Why Bajaj&apos;s 2nd-of-the-Month Due Date Traps Salaried Staff
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Most private banks allow salaried borrowers to pick a 5th or 10th EMI presentation date during disbursement. Bajaj Finance, by contrast, anchors the overwhelming majority of its personal and Flexi loan NACH mandates on the <strong>2nd of every month</strong>.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                If your company credits salary on the 5th, 7th, or 10th, your bank account is almost always at its lowest balance on the 2nd! Even if you faithfully pay your Bajaj EMI manually on the 7th every single month after payday, letting the 2nd-of-the-month NACH fail twelve times a year bleeds <strong>Rs. 15,000 to Rs. 21,000 annually</strong> in combined Bajaj bounce charges and destination-bank NACH return fees, while stamping twelve consecutive late-DPD entries on your credit bureau report. The only cure for an active loan is holding back one full EMI from your previous month&apos;s salary in a dedicated repayment bank account on the 30th/31st so the 2nd-date debit clears cleanly.
              </p>
            </section>

            {/* Section 5: Flexi Loan vs Term PL Bounce */}
            <section id="flexi-vs-term-loan-bounce" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Bajaj Flexi Hybrid &amp; Flexi Term Overdue Nuances
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Many salaried borrowers hold a <strong>Bajaj Finance Flexi Hybrid Loan</strong> (where early-tenure monthly debits cover only interest on the drawn-down limit) rather than a standard amortizing Term Personal Loan. Two special consequences hit when a Flexi monthly debit bounces:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    Immediate Freeze on Flexi Drawdown
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                     Borrowers who planned to part-pay Rs. 50,000 and immediately re-withdraw Rs. 45,000 to recycle liquidity discover that an active EMI bounce or high DPD flag locks the Flexi withdrawal facility inside Experia.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    Zero Principal Reduction Trap
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    During the interest-only Flexi phase, paying Rs. 14,000 interest + Rs. 1,500 bounce/bank fees every month leaves 100% of your Rs. 8,00,000 principal intact. Read our specialized guide on{" "}
                    <Link
                      href="https://www.settleloans.in/bajaj-finance-flexi-loan-overdue"
                      className="text-[#1F5EFF] font-semibold underline"
                    >
                      resolving Bajaj Finance Flexi loan overdue traps
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: 6-Month Bajaj Cost Math */}
            <section id="six-month-bajaj-cost-table" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                6-Month Overdue Cost Projection on a Bajaj Personal Loan
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Consider a salaried IT consultant carrying a Rs. 6,50,000 Bajaj Finance Personal Loan (remaining principal Rs. 5,10,000, monthly EMI <strong>Rs. 17,600</strong>) with a Rs. 950 per-bounce KFS fee, linked via e-NACH to a private salary bank (Rs. 500 + GST inward return), assuming 2 NACH presentations per unpaid month and 3% per month penal charges (+ GST):
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Delinquency Stage</th>
                      <th className="p-3.5 font-bold">Bajaj Bounce Fees</th>
                      <th className="p-3.5 font-bold">Salary Bank Returns (+GST)</th>
                      <th className="p-3.5 font-bold">36% p.a. Penal (+GST)</th>
                      <th className="p-3.5 font-bold">Total Penalty Drain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 1 (2 bounces, 30 DPD)</td>
                      <td className="p-3.5">Rs. 1,900</td>
                      <td className="p-3.5">Rs. 1,180</td>
                      <td className="p-3.5">Rs. 623</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 3,703</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 3 (6 bounces, 90 DPD NPA)</td>
                      <td className="p-3.5">Rs. 5,700</td>
                      <td className="p-3.5">Rs. 3,540</td>
                      <td className="p-3.5">Rs. 3,738</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 12,978</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 6 (12 bounces, 180 DPD)</td>
                      <td className="p-3.5">Rs. 11,400</td>
                      <td className="p-3.5">Rs. 7,080</td>
                      <td className="p-3.5">Rs. 13,084</td>
                      <td className="p-3.5 font-black text-red-800">Rs. 31,564</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Look at that 6-month total: <strong>Rs. 31,564</strong> in deadweight bounce fees and 36% p.a. overdue penal charges! Run your own loan figures inside our{" "}
                <Link
                  href="https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  Personal Loan EMI Bounce Charges Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 7: Clearing Overdue on Experia */}
            <section id="experia-manual-clearance" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Clearing Overdue Bajaj EMIs on MyAccount (Experia) Safely
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                If your combined debt is under Rs. 3,00,000 or your cash crunch was just a one-off salary delay, clear the overdue EMI immediately through Bajaj Finserv&apos;s self-service portal:
              </p>
              <ol className="space-y-4 list-decimal pl-5 text-base text-slate-700 mb-6">
                <li>
                  <strong>Log Into Bajaj Finserv App / Experia Web:</strong> Select your active Loan Account Number, tap &quot;Pay Now -&gt; Overdue EMI,&quot; and review whether you are clearing the principal/interest EMI alone or clearing accrued bounce/penal charges alongside it so they do not linger on your statement.
                </li>
                <li>
                  <strong>Pay 48+ Hours Ahead of Retry Runs:</strong> Clearing on the 3rd or 4th right after a 2nd-date bounce stops daily 36% p.a. penal charges after just 1 to 2 days and suppresses mid-month NACH re-presentations.
                </li>
                <li>
                  <strong>Dispute Technical Returns via Grievance Redressal:</strong> If your bank had clear balance on the 1st and 2nd and the debit failed due to an NPCI technical error, raise a service request inside MyAccount attaching your stamped bank statement to reverse both the Rs. 700 to Rs. 1,200 bounce fee and any CIBIL DPD mark.
                </li>
              </ol>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Also review{" "}
                <Link
                  href="https://www.settleloans.in/loan-overdue-nach-bounce-immediate-steps"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  immediate steps after a NACH bounce
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.settleloans.in/reminder-calls-after-emi-bounce"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  borrower rights during recovery reminder calls
                </Link>
                .
              </p>
            </section>

            {/* Section 7B: Auditing Experia SOA & Multi-LAN Trap */}
            <section id="bajaj-mandate-reject-audit" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Auditing Your Experia SOA: Rs. 450 Mandate Reject &amp; Multi-LAN Risk
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Before negotiating or paying overdue arrears on a Bajaj Finance loan, download your complete <strong>Statement of Account (SOA)</strong> from the Document Centre inside the Bajaj Finserv App or MyAccount (Experia). Salaried borrowers frequently uncover two overlooked fee drains hidden alongside standard EMI dishonour lines:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    Rs. 450 Monthly Mandate Rejection Fee
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    If your e-Mandate or NACH registration was rejected during onboarding, or if you closed an old salary bank account after switching jobs without registering a fresh mandate, Bajaj Finance levies a separate <strong>Rs. 450 per month Mandate Rejection Charge</strong> starting from the due month until a valid replacement mandate is registered.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    The Multi-LAN Simultaneous Bounce Shock
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Many salaried households hold two or three active Bajaj LANs simultaneously: a Personal Loan, an Insta EMI Network Card consumer durable loan (laptop, phone, AC), and a Flexi Top-Up. Because all three mandates hit your salary bank on the <strong>2nd of the month</strong>, a single low-balance morning triggers three separate Bajaj bounce fees plus three bank return debits, wiping out Rs. 3,800 to Rs. 5,200 in hours!
                  </p>
                </div>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Always prioritize clearing tiny zero-cost consumer durable installments that have only one or two EMIs left so you immediately eliminate extra NACH mandates from hitting your bank account every 2nd of the month.
              </p>
            </section>

            {/* Section 7C: CIBIL 15-Day Reporting & Nodal Escalation */}
            <section id="bajaj-cibil-dpd-escalation" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                CIBIL 15-Day Bureau Reporting &amp; Nodal Escalation Rules
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Under Reserve Bank of India credit reporting norms, Bajaj Finance submits borrower repayment snapshots to CIBIL, Experian, Equifax, and CRIF High Mark every 15 days (mid-month on the 15th and month-end). Because Bajaj due dates sit on the 2nd of the month, leaving a bounced installment unpaid past the 15th guarantees that your 13-day overdue status is captured in that very same month&apos;s mid-month bureau file!
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Clearing Before the 15th Snapshot:</strong> When a bounce is purely accidental (such as a corporate payroll delay from the 1st to the 7th), paying both the overdue EMI and accrued Late Payment Charge via Experia well before the 14th restores your current status ahead of the mid-month bureau upload.
                </li>
                <li>
                  <strong>3-Tier Bajaj Grievance &amp; Principal Nodal Escalation:</strong> If you experience unauthorized third-party contact, pre-8:00 AM or post-7:00 PM recovery calls, or refusal to reverse a technical clearing bounce where your bank held sufficient clear funds, file a written ticket through MyAccount -&gt; Raise a Request, escalate unresolved replies to Bajaj Finance&apos;s Grievance Redressal Officer, and past 30 days to the RBI Integrated Ombudsman portal (cms.rbi.org.in).
                </li>
              </ul>
            </section>

            {/* Section 8: Salaried Bajaj Settlement Path */}
            <section id="bajaj-salaried-settlement" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Salaried Bajaj Personal Loan Settlement Path (Debt ≥ ₹3 Lakhs)
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Because Bajaj Finance levies up to 36% p.a. overdue penal charges and intensive early-stage collection follow-ups, salaried borrowers hit by layoffs, salary cuts, or medical emergencies often make the costly mistake of borrowing from high-cost apps or paying single EMIs without a settlement plan. Those partial payments get absorbed by Rs. 950 bounce fees and 3% monthly penal buckets while the principal barely moves.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                When your <strong>total combined unsecured debt across Bajaj Finance Term/Flexi loans, bank personal loans, and credit cards is ₹3,00,000 or higher</strong>, SettleLoans executes a structured legal resolution:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Stopping External Bank NACH Bleed &amp; Escalations:</strong> Helping you manage communications formally and protect household survival cash while preparing documented hardship proof (relieving letters, salary-cut slips, medical bills, bank statements).
                </li>
                <li>
                  <strong>100% Waiver of Bounce &amp; 36% Penal Bucket:</strong> Post 90+ DPD (NPA stage), negotiating full removal of accumulated Rs. 700 to Rs. 1,200 bounce fees and uncollected Late Payment Charges first, followed by a realistic principal haircut (indicatively 42% to 62% of principal depending on Term vs Flexi vintage and hardship; never guaranteed).
                </li>
                <li>
                  <strong>Authenticated Bajaj Finance Settlement Letter:</strong> Verifying an official Bajaj Finance Limited letterhead sanction letter detailing your exact LAN, full-and-final settlement figure, payment schedule, and No Dues Certificate issuance before a single rupee is paid. Visit our{" "}
                  <Link
                    href="https://www.settleloans.in/loan-settlement/bajaj-finance"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    Bajaj Finance loan settlement hub
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://www.settleloans.in/loan-settlement-for-salaried-people"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    salaried personal loan settlement guide
                  </Link>
                  .
                </li>
              </ul>
            </section>

            {/* Section 9: FAQs */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Bajaj Finance EMI Bounce Charges FAQs
              </h2>
              <div className="space-y-4">
                {faqs.map((item, idx) => (
                  <details
                    key={idx}
                    name="faq-accordion"
                    className="bg-white border border-[#DEDEDE] rounded-2xl p-6 hover:shadow-md group cursor-pointer transition-shadow"
                  >
                    <summary className="text-base md:text-lg font-bold text-[#2E2E2E] list-none relative pr-8">
                      {item.q}
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 group-open:rotate-180 text-[#1F5EFF]">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-sm md:text-base text-slate-700 leading-relaxed">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <div className="bg-[#2E2E2E] text-white p-8 sm:p-10 rounded-[32px] text-center mb-10">
              <div className="text-2xl md:text-3xl font-black mb-3">
                Trapped in Bajaj 2nd-of-the-Month Bounce &amp; Penal Cycles?
              </div>
              <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-6">
                If your combined unsecured debt across Bajaj Finance, banks, and credit cards is ₹3,00,000 or more, let our salaried debt specialists map your legal exit.
              </p>
              <a
                href="#settlement-assessment"
                className="inline-block bg-[#1F5EFF] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Start Salaried Debt Assessment
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
              <strong>Disclaimer:</strong> SettleLoans is an independent debt resolution and legal advisory platform and is not affiliated with Bajaj Finance Limited or Bajaj Finserv. Fee ranges and penal rates reflect Bajaj Finserv&apos;s published schedules checked on 11 November 2026 and remain subject to company updates and your specific Key Fact Statement (KFS).
            </div>
          </article>

          {/* Right Column: Sticky Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-6 text-white border border-white/10 shadow-xl">
                <div className="text-lg font-black mb-2">
                  Bajaj Bounce Calculator
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-5">
                  Compute Bajaj Finance&apos;s per-bounce fees, bank NACH return deductions, and 36% p.a. daily penal accrual instantly.
                </p>
                <Link
                  href="https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator"
                  className="block w-full text-center bg-[#1F5EFF] text-white font-bold py-3 px-4 rounded-xl text-sm hover:bg-blue-700 transition-colors"
                >
                  Open Bounce Calculator
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-[#DEDEDE] shadow-sm">
                <div className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-3 mb-4">
                  Related Salaried Guides
                </div>
                <ul className="space-y-3 text-xs font-semibold">
                  <li>
                    <Link
                      href="https://www.settleloans.in/loan-settlement/bajaj-finance"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Bajaj Finance Loan Settlement Hub
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/bajaj-finance-flexi-loan-overdue"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Bajaj Flexi Loan Overdue Guide
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/tata-capital-personal-loan-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Tata Capital PL Bounce Charges
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/kotak-personal-loan-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Kotak Bank PL Bounce Charges
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/stop-emi-bounce-cycle-for-good"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Stop the EMI Bounce Cycle
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/multiple-personal-loan-settlement"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Multiple Personal Loan Settlement
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
