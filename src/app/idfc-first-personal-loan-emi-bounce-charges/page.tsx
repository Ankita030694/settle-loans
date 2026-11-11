import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import LoanSettlementAssessmentFunnel from "@/components/LoanSettlementAssessmentFunnel";

export const metadata: Metadata = {
  title: "IDFC FIRST Personal Loan Bounce Charges | SettleLoans",
  description: "Check official IDFC FIRST Bank personal loan EMI bounce charges (7.5% to 12%, Rs. 400 to Rs. 1,000 + GST), 1% monthly penal rules, and settlement.",
  alternates: {
    canonical: "https://www.settleloans.in/idfc-first-personal-loan-emi-bounce-charges",
  },
  openGraph: {
    title: "IDFC FIRST Personal Loan Bounce Charges | SettleLoans",
    description: "Check official IDFC FIRST Bank personal loan EMI bounce charges (7.5% to 12%, Rs. 400 to Rs. 1,000 + GST), 1% monthly penal rules, and settlement.",
    url: "https://www.settleloans.in/idfc-first-personal-loan-emi-bounce-charges",
    type: "article",
    images: [
      {
        url: "https://www.settleloans.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IDFC FIRST Bank Personal Loan EMI Bounce Charges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IDFC FIRST Personal Loan Bounce Charges | SettleLoans",
    description: "Check official IDFC FIRST Bank personal loan EMI bounce charges (7.5% to 12%, Rs. 400 to Rs. 1,000 + GST), 1% monthly penal rules, and settlement.",
    images: ["https://www.settleloans.in/og-image.jpg"],
  },
};

const tocItems = [
  { id: "idfc-official-tariff", title: "Official IDFC FIRST Tariff" },
  { id: "percentage-bounce-formula", title: "7.5% to 12% Bounce Cap Math" },
  { id: "one-percent-penal-revision", title: "Revised 1% Monthly Penal Rule" },
  { id: "firstmoney-vs-term-pl", title: "FIRSTmoney vs Term PL Bounces" },
  { id: "salary-vs-external-nach", title: "IDFC Salary SI vs External NACH" },
  { id: "six-month-idfc-projection", title: "6-Month Overdue Cost Table" },
  { id: "idfc-mobile-app-clearance", title: "Clearing Overdue on IDFC App" },
  { id: "soa-audit-mandate-reject", title: "SOA Audit & Mandate Rejects" },
  { id: "cibil-fortnightly-reporting", title: "15-Day CIBIL & Nodal Dispute" },
  { id: "idfc-salaried-settlement", title: "Salaried IDFC Settlement Path" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
  {
    q: "What is the IDFC FIRST Bank personal loan EMI bounce charge?",
    a: "Under IDFC FIRST Bank's revised Bounce and Penal Charges schedule for retail personal loans, the EMI bounce or NACH/ECS/Standing Instruction dishonour charge is 7.5% to 12% of the bounced EMI amount, subject to a minimum of Rs. 400 and a maximum of Rs. 1,000 per bounce instance, plus 18% GST (Rs. 472 minimum to Rs. 1,180 maximum inclusive of GST).",
  },
  {
    q: "Why did IDFC FIRST Bank charge Rs. 1,180 when my EMI bounced?",
    a: "Because IDFC FIRST Bank calculates bounce fees as a percentage (7.5% to 12%) capped at Rs. 1,000 before tax, any personal loan EMI above Rs. 8,334 (on a 12% KFS slab) or above Rs. 13,334 (on a 7.5% KFS slab) hits the Rs. 1,000 base cap. Adding 18% GST (Rs. 180) produces an exact charge of Rs. 1,180 per failed presentation.",
  },
  {
    q: "What is IDFC FIRST Bank's revised penal charge on overdue personal loan EMIs?",
    a: "Following IDFC FIRST Bank's November 2025 revision aligned with RBI Fair Lending Practice guidelines, the overdue penal charge (Late Payment Charge) on personal loans was reduced from 2% per month to 1% per month of the unpaid EMI amount or Rs. 300 (whichever is higher) plus 18% GST. This penal charge is non-capitalized and never compounds future loan interest.",
  },
  {
    q: "Why did I lose up to Rs. 1,770 from a single failed IDFC FIRST personal loan EMI?",
    a: "When your IDFC FIRST personal loan debits an external salary account (such as HDFC Bank, ICICI Bank, Axis Bank, or Kotak) via e-NACH and funds fall short, IDFC FIRST bills up to Rs. 1,000 + GST (Rs. 1,180) on your loan statement while your external salary bank separately deducts Rs. 295 to Rs. 590 as an inward NACH return fee, creating a combined hit of Rs. 1,475 to Rs. 1,770 on one bounce.",
  },
  {
    q: "Does IDFC FIRST Bank charge a fee if my e-Mandate or NACH registration stays rejected?",
    a: "Yes. Under IDFC FIRST Bank's revised tariff, if a repayment mandate is rejected or unregistered and remains unrectified continuously, a Mandate Rejection Charge applies from the 3rd consecutive month until a valid active NACH or Standing Instruction mandate is registered.",
  },
  {
    q: "How do bounce charges work on IDFC FIRST Bank's FIRSTmoney smart personal loan?",
    a: "FIRSTmoney is IDFC FIRST Bank's digital on-demand personal loan facility where borrowers can take multiple drawdowns inside an approved credit limit with zero foreclosure charges. However, if multiple FIRSTmoney drawdowns have separate active EMI schedules on the 2nd or 5th of the month, a low bank balance can trigger separate bounce charges across each active drawdown LAN.",
  },
  {
    q: "What happens if my IDFC FIRST Corporate Salary Account misses a personal loan EMI?",
    a: "When both your salary or savings account and your personal loan sit inside IDFC FIRST Bank, a missed Standing Instruction posts the bounce charge (up to Rs. 1,180) and places an automated lien or hold on your account so any fresh salary deposit or UPI credit is swept immediately toward the overdue EMI and fee.",
  },
  {
    q: "How can I pay a bounced IDFC FIRST EMI manually to prevent repeat NACH debits?",
    a: "Open the IDFC FIRST Bank Mobile App or NetBanking portal, open Loans -> Personal Loan -> Pay Overdue EMI, or use IDFC FIRST Bank's official Quick Pay / BBPS loan repayment channel using your Loan Account Number at least 48 to 72 hours ahead of mid-month NACH retry batches.",
  },
  {
    q: "Can I get a first-time IDFC FIRST EMI bounce charge waived?",
    a: "If your corporate salary arrived a few hours after an early-morning clearing sweep on the due date, or if an NPCI technical error dishonoured your debit despite sufficient clear balance, clear the overdue EMI first and raise a service ticket via the IDFC FIRST app or Customer Care attaching your timestamped bank statement.",
  },
  {
    q: "Does IDFC FIRST Bank waive Rs. 1,180 bounce fees during personal loan settlement?",
    a: "When an unsecured IDFC FIRST personal loan or FIRSTmoney facility crosses 90 days past due into Non-Performing Asset (NPA) status due to genuine salaried hardship such as job loss, pay cuts, or medical emergencies, formal negotiated settlements typically waive 100% of accumulated bounce fees and 1% monthly penal charges while settling principal at an agreed haircut.",
  },
  {
    q: "When can SettleLoans assist me with IDFC FIRST personal loan settlement?",
    a: "SettleLoans represents salaried borrowers when combined unsecured debt across IDFC FIRST personal loans, credit cards, private banks, and NBFC loans is Rs. 3,00,000 or higher.",
  },
];

export default function IdfcFirstPersonalLoanEmiBounceChargesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.settleloans.in/idfc-first-personal-loan-emi-bounce-charges#breadcrumb",
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
            "name": "IDFC FIRST Personal Loan Bounce Charges",
            "item": "https://www.settleloans.in/idfc-first-personal-loan-emi-bounce-charges"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.settleloans.in/idfc-first-personal-loan-emi-bounce-charges#article",
        "headline": "IDFC FIRST Bank Personal Loan EMI & NACH Bounce Charges (Verified Schedule)",
        "description": "Verified guide to IDFC FIRST Bank personal loan EMI bounce fees (7.5% to 12%, Rs. 400 to Rs. 1,000 + GST), revised 1% monthly penal charges, FIRSTmoney rules, and settlement.",
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
          "@id": "https://www.settleloans.in/idfc-first-personal-loan-emi-bounce-charges"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.settleloans.in/idfc-first-personal-loan-emi-bounce-charges#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the IDFC FIRST Bank personal loan EMI bounce charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under IDFC FIRST Bank's revised Bounce and Penal Charges schedule for retail personal loans, the EMI bounce or NACH/ECS/Standing Instruction dishonour charge is 7.5% to 12% of the bounced EMI amount, subject to a minimum of Rs. 400 and a maximum of Rs. 1,000 per bounce instance, plus 18% GST (Rs. 472 minimum to Rs. 1,180 maximum inclusive of GST)."
            }
          },
          {
            "@type": "Question",
            "name": "Why did IDFC FIRST Bank charge Rs. 1,180 when my EMI bounced?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because IDFC FIRST Bank calculates bounce fees as a percentage (7.5% to 12%) capped at Rs. 1,000 before tax, any personal loan EMI above Rs. 8,334 (on a 12% KFS slab) or above Rs. 13,334 (on a 7.5% KFS slab) hits the Rs. 1,000 base cap. Adding 18% GST (Rs. 180) produces an exact charge of Rs. 1,180 per failed presentation."
            }
          },
          {
            "@type": "Question",
            "name": "What is IDFC FIRST Bank's revised penal charge on overdue personal loan EMIs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Following IDFC FIRST Bank's November 2025 revision aligned with RBI Fair Lending Practice guidelines, the overdue penal charge (Late Payment Charge) on personal loans was reduced from 2% per month to 1% per month of the unpaid EMI amount or Rs. 300 (whichever is higher) plus 18% GST. This penal charge is non-capitalized and never compounds future loan interest."
            }
          },
          {
            "@type": "Question",
            "name": "Why did I lose up to Rs. 1,770 from a single failed IDFC FIRST personal loan EMI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When your IDFC FIRST personal loan debits an external salary account (such as HDFC Bank, ICICI Bank, Axis Bank, or Kotak) via e-NACH and funds fall short, IDFC FIRST bills up to Rs. 1,000 + GST (Rs. 1,180) on your loan statement while your external salary bank separately deducts Rs. 295 to Rs. 590 as an inward NACH return fee, creating a combined hit of Rs. 1,475 to Rs. 1,770 on one bounce."
            }
          },
          {
            "@type": "Question",
            "name": "Does IDFC FIRST Bank charge a fee if my e-Mandate or NACH registration stays rejected?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Under IDFC FIRST Bank's revised tariff, if a repayment mandate is rejected or unregistered and remains unrectified continuously, a Mandate Rejection Charge applies from the 3rd consecutive month until a valid active NACH or Standing Instruction mandate is registered."
            }
          },
          {
            "@type": "Question",
            "name": "How do bounce charges work on IDFC FIRST Bank's FIRSTmoney smart personal loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FIRSTmoney is IDFC FIRST Bank's digital on-demand personal loan facility where borrowers can take multiple drawdowns inside an approved credit limit with zero foreclosure charges. However, if multiple FIRSTmoney drawdowns have separate active EMI schedules on the 2nd or 5th of the month, a low bank balance can trigger separate bounce charges across each active drawdown LAN."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if my IDFC FIRST Corporate Salary Account misses a personal loan EMI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When both your salary or savings account and your personal loan sit inside IDFC FIRST Bank, a missed Standing Instruction posts the bounce charge (up to Rs. 1,180) and places an automated lien or hold on your account so any fresh salary deposit or UPI credit is swept immediately toward the overdue EMI and fee."
            }
          },
          {
            "@type": "Question",
            "name": "How can I pay a bounced IDFC FIRST EMI manually to prevent repeat NACH debits?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Open the IDFC FIRST Bank Mobile App or NetBanking portal, open Loans -> Personal Loan -> Pay Overdue EMI, or use IDFC FIRST Bank's official Quick Pay / BBPS loan repayment channel using your Loan Account Number at least 48 to 72 hours ahead of mid-month NACH retry batches."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get a first-time IDFC FIRST EMI bounce charge waived?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If your corporate salary arrived a few hours after an early-morning clearing sweep on the due date, or if an NPCI technical error dishonoured your debit despite sufficient clear balance, clear the overdue EMI first and raise a service ticket via the IDFC FIRST app or Customer Care attaching your timestamped bank statement."
            }
          },
          {
            "@type": "Question",
            "name": "Does IDFC FIRST Bank waive Rs. 1,180 bounce fees during personal loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When an unsecured IDFC FIRST personal loan or FIRSTmoney facility crosses 90 days past due into Non-Performing Asset (NPA) status due to genuine salaried hardship such as job loss, pay cuts, or medical emergencies, formal negotiated settlements typically waive 100% of accumulated bounce fees and 1% monthly penal charges while settling principal at an agreed haircut."
            }
          },
          {
            "@type": "Question",
            "name": "When can SettleLoans assist me with IDFC FIRST personal loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SettleLoans represents salaried borrowers when combined unsecured debt across IDFC FIRST personal loans, credit cards, private banks, and NBFC loans is Rs. 3,00,000 or higher."
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
              Verified Revised Tariff • Checked 11 Nov 2026
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#DEDEDE] mb-6 leading-[1.12] tracking-tight">
              IDFC FIRST Bank Personal Loan EMI &amp; NACH Bounce Charges
            </h1>
            <p className="text-base md:text-xl text-[#DEDEDE]/85 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
              Complete salaried borrower breakdown of IDFC FIRST Bank&apos;s percentage-based EMI bounce charge (7.5% to 12%, Rs. 400 to Rs. 1,000 + GST), revised 1% monthly penal rule, FIRSTmoney multi-drawdown traps, and structured settlement relief.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#settlement-assessment"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-8 rounded-[10px] hover:scale-105 transition-all duration-300 text-base md:text-lg shadow-lg"
              >
                Check Salaried Settlement Fit
              </a>
              <Link
                href="https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 text-white border border-white/20 font-bold py-4 px-8 rounded-[10px] hover:bg-white/20 transition-all duration-300 text-base md:text-lg"
              >
                Calculate IDFC Bounce Drain
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
                  IDFC FIRST Personal Loan Bounce Charges
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
            {/* Section 1: Official IDFC FIRST Tariff */}
            <section id="idfc-official-tariff" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                IDFC FIRST Bank Personal Loan Schedule of Bounce &amp; Penal Charges
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Since the merger of Capital First with IDFC Bank, <strong>IDFC FIRST Bank</strong> has become one of India&apos;s largest digital personal loan lenders for salaried professionals, distributing both standard fixed-tenure Personal Loans and app-based <strong>FIRSTmoney</strong> smart credit lines. Unlike HDFC Bank, ICICI Bank, or Axis Bank (which charge a flat Rs. 400 to Rs. 550 bounce fee), IDFC FIRST Bank uses a <strong>percentage-based EMI bounce slab capped at Rs. 1,000 plus GST</strong> alongside a recently reduced <strong>1% per month overdue penal charge</strong>.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-6">
                All tariff rules below were verified directly against IDFC FIRST Bank&apos;s official <em>Bounce and Penal Charges Revision circular</em> and Personal Loan Schedule of Charges on 11 November 2026:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-5">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#2E2E2E] text-white">
                      <th className="p-4 font-bold">IDFC FIRST Personal Loan Fee Head</th>
                      <th className="p-4 font-bold">Published Official Rule</th>
                      <th className="p-4 font-bold">Effective Outflow With 18% GST</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">EMI Bounce / NACH / ECS / SI Dishonour</td>
                      <td className="p-4 text-slate-700">7.5% to 12% of EMI (Min Rs. 400, Max Rs. 1,000) + GST</td>
                      <td className="p-4 font-semibold text-red-700">Rs. 472 min to Rs. 1,180 max per bounce</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Penal Charge (Late Payment / Overdue EMI)</td>
                      <td className="p-4 text-slate-700">1% per month of unpaid EMI or Rs. 300 (higher) + GST</td>
                      <td className="p-4 font-semibold text-red-700">Min Rs. 354 or 1.18% monthly (non-capitalized)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Continuous Mandate Rejection Charge</td>
                      <td className="p-4 text-slate-700">Applicable from 3rd consecutive unrectified month</td>
                      <td className="p-4 font-semibold text-slate-800">Per KFS until valid mandate is registered</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Mandate / Repayment Swap Fee</td>
                      <td className="p-4 text-slate-700">Rs. 500 per swap + 18% GST</td>
                      <td className="p-4 font-semibold text-slate-800">Rs. 590 per bank mandate change</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Foreclosure / Full Pre-closure Charge</td>
                      <td className="p-4 text-slate-700">5% + GST on standard PL (0% on FIRSTmoney)</td>
                      <td className="p-4 font-semibold text-slate-800">5.90% on standard PL principal</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs md:text-sm text-slate-600">
                <strong>Official Source Verification:</strong> Verified against{" "}
                <a
                  href="https://www.idfcfirst.bank.in/content/dam/idfcfirstbank/pdf/Bounce-and-Penal-Charges-Revision-Nov-25.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  IDFC FIRST Bank Bounce &amp; Penal Charges Revision Circular (PDF)
                </a>{" "}
                on <strong>11 November 2026</strong>. Check your loan&apos;s Key Fact Statement (KFS) inside the IDFC FIRST mobile app to confirm whether your cohort sits on the 7.5%, 10%, or 12% bounce slab.
              </div>
            </section>

            {/* Funnel Near Hero */}
            <div className="mb-14">
              <div className="p-5 rounded-t-3xl bg-blue-50 border border-b-0 border-blue-200 text-sm text-slate-800">
                <strong>Salaried Debt Assessment:</strong> Losing Rs. 1,180 per bounce on IDFC FIRST Personal Loans or FIRSTmoney alongside credit cards or NBFC loans? SettleLoans assists salaried borrowers when <strong>combined unsecured debt across all lenders is ₹3,00,000 or higher</strong>.
              </div>
              <LoanSettlementAssessmentFunnel className="!mt-0 !rounded-t-none" />
            </div>

            {/* Section 2: Percentage Bounce Cap Math */}
            <section id="percentage-bounce-formula" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                How IDFC FIRST&apos;s 7.5% to 12% Bounce Formula Hits Rs. 1,180 Fast
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Borrowers moving to IDFC FIRST Bank from traditional banks are often stunned to see <strong>Rs. 1,180</strong> posted for a single failed EMI presentation instead of Rs. 531 or Rs. 590. That happens because IDFC FIRST calculates bounce charges as a percentage of your monthly installment (between <strong>7.5% and 12%</strong> depending on product cohort and sanction date), bounded by a Rs. 400 floor and a Rs. 1,000 ceiling before 18% GST:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Small EMI (Rs. 4,500)
                  </div>
                  <div className="text-xl font-black text-[#2E2E2E] mb-2">
                    Rs. 472 to Rs. 637
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    At 7.5% (Rs. 337.50), the Rs. 400 minimum floor kicks in (+ 18% GST = <strong>Rs. 472</strong>). At 12%, Rs. 540 + GST = <strong>Rs. 637</strong>.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Mid EMI (Rs. 10,000)
                  </div>
                  <div className="text-xl font-black text-[#2E2E2E] mb-2">
                    Rs. 885 to Rs. 1,180
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    At 7.5%, Rs. 750 + GST = <strong>Rs. 885</strong>. At 10% or 12%, the fee hits the Rs. 1,000 base cap + GST = <strong>Rs. 1,180</strong>.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-red-50/70 border border-red-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-red-700 mb-1">
                    Salaried EMI (Rs. 14,000+)
                  </div>
                  <div className="text-xl font-black text-red-700 mb-2">
                    Rs. 1,180 Every Bounce
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Any EMI of Rs. 13,334 or higher hits the <strong>Rs. 1,000 ceiling</strong> even on the lowest 7.5% slab, costing <strong>Rs. 1,180</strong> per failed presentation!
                  </p>
                </div>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Because most salaried personal loans for Rs. 4,00,000 to Rs. 15,00,000 carry monthly EMIs between Rs. 12,500 and Rs. 36,000, virtually every mid-career corporate borrower ends up paying the maximum <strong>Rs. 1,180 per bounce</strong> on IDFC FIRST Bank!
              </p>
            </section>

            {/* Section 3: Revised 1% Monthly Penal Charge */}
            <section id="one-percent-penal-revision" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                IDFC FIRST&apos;s Revised 1% Monthly Overdue Penal Charge Explained
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Here is an important piece of borrower-friendly news that outdated blogs miss completely: in its November 2025 schedule revision, IDFC FIRST Bank cut its retail personal loan Late Payment / Penal Charge in half, reducing it from 2% per month (24% p.a.) down to <strong>1% per month (12% p.a.) of the unpaid EMI amount or Rs. 300, whichever is higher, plus 18% GST</strong>.
              </p>
              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 mb-6">
                <h3 className="text-lg font-black text-[#1F5EFF] mb-2">
                  Real Rupee Example of the Rs. 300 Floor vs 1% Rule
                </h3>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  Suppose your Rs. 18,000 IDFC FIRST EMI bounces on the 2nd of the month and stays unpaid for a full month. One percent of Rs. 18,000 is Rs. 180, which sits below the <strong>Rs. 300 minimum floor</strong>; therefore IDFC FIRST charges Rs. 300 + 18% GST = <strong>Rs. 354</strong> for that overdue installment. On a larger Rs. 35,000 EMI, 1% equals Rs. 350 + 18% GST = <strong>Rs. 413</strong>. Under RBI&apos;s Fair Lending Practice norms, this penal charge is strictly <strong>non-capitalized</strong> and never compounds contractual interest.
                </p>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Notice the strategic takeaway for salaried borrowers: on IDFC FIRST Bank, the real financial haemorrhage comes from <strong>repeated Rs. 1,180 NACH presentations plus Rs. 590 salary-bank return fees</strong>, rather than runaway monthly penal interest! Stopping futile multi-bounce cycles is therefore priority number one.
              </p>
            </section>

            {/* Section 4: FIRSTmoney vs Standard Term PL */}
            <section id="firstmoney-vs-term-pl" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                FIRSTmoney Smart Personal Loan vs Standard Term PL Bounces
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                IDFC FIRST Bank offers two distinct unsecured loan structures inside its mobile app, and confusing them leads to costly miscalculations when cash gets tight:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    1. FIRSTmoney Multi-Drawdown Trap
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    FIRSTmoney gives approved borrowers an on-demand credit limit (say Rs. 5,00,000) with <strong>zero foreclosure charges</strong>. However, borrowers who took three separate drawdowns (Rs. 1.5L in March, Rs. 1L in June, Rs. 80k in August) often create three separate active sub-loan EMI schedules hitting on the <strong>2nd or 5th</strong>. One low-balance payday morning triggers three separate bounce charges plus three bank return fees!
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    2. Standard Salaried Term Personal Loan
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Traditional IDFC FIRST salaried personal loans carry a single consolidated EMI on the 2nd, 5th, or 8th, but impose a heavy <strong>5% + 18% GST (5.90%) foreclosure fee</strong> on outstanding principal, locking stressed borrowers in when they explore refinancing.
                  </p>
                </div>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                If you hold small residual FIRSTmoney tranches of Rs. 15,000 or Rs. 25,000 alongside a large Rs. 4,00,000 tranche and still have moderate cash reserves, closing the tiny tranches at <strong>0% foreclosure fee</strong> immediately eliminates extra NACH debits from hitting your bank account.
              </p>
            </section>

            {/* Section 5: Salary SI vs External Bank NACH */}
            <section id="salary-vs-external-nach" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                IDFC FIRST Salary Account SI vs External Bank e-NACH Double Hit
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                How your IDFC FIRST personal loan collects its monthly EMI determines whether a missed due date freezes your incoming salary or silently drains two banks at once:
              </p>
              <ul className="space-y-4 text-base text-slate-700 mb-6">
                <li className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <strong className="text-[#2E2E2E]">Internal IDFC FIRST Corporate Salary or Savings Account (Standing Instruction):</strong> Because IDFC FIRST promotes zero-fee savings and monthly-interest salary accounts aggressively, many borrowers link their loan internally. When the 2nd or 5th due date fails, IDFC FIRST posts up to Rs. 1,180 in bounce charges and places an automated <strong>lien / hold</strong> on your account balance. The instant your employer credits delayed salary or a family member sends Rs. 10,000 via UPI for rent, the bank&apos;s system sweeps that inflow against the held overdue EMI and charge. Read our guide on{" "}
                  <Link
                    href="https://www.settleloans.in/bank-freeze-salary-account-loan-default"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    salary account liens and holds during loan default
                  </Link>
                  .
                </li>
                <li className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <strong className="text-[#2E2E2E]">External Salary Bank e-NACH (HDFC, ICICI, SBI, Axis, Kotak):</strong> When IDFC FIRST presents an e-NACH debit to an external bank and your balance is short, IDFC FIRST cannot freeze your external salary account. However, you suffer a brutal <strong>double deduction</strong>: up to <strong>Rs. 1,180</strong> added to your IDFC FIRST overdue ledger plus <strong>Rs. 295 to Rs. 590</strong> immediately debited by your external salary bank as an inward NACH return charge, totaling <strong>Rs. 1,475 to Rs. 1,770 per failed presentation</strong>!
                </li>
              </ul>
            </section>

            {/* Section 6: 6-Month Overdue Cost Projection */}
            <section id="six-month-idfc-projection" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                6-Month Overdue Cost Projection on an IDFC FIRST Loan
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Consider a salaried product designer carrying a Rs. 6,00,000 IDFC FIRST Personal Loan (remaining principal Rs. 4,80,000, monthly EMI <strong>Rs. 16,500</strong>, hitting the Rs. 1,000 + GST = Rs. 1,180 bounce cap) linked via e-NACH to a private salary bank charging Rs. 500 + GST per inward return, assuming 2 NACH presentations per unpaid month:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Delinquency Horizon</th>
                      <th className="p-3.5 font-bold">IDFC Bounce Fees (+GST)</th>
                      <th className="p-3.5 font-bold">Salary Bank Returns (+GST)</th>
                      <th className="p-3.5 font-bold">Revised 1% Penal (+GST)</th>
                      <th className="p-3.5 font-bold">Total Penalty Drain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 1 (2 bounces, 30 DPD)</td>
                      <td className="p-3.5">Rs. 2,360</td>
                      <td className="p-3.5">Rs. 1,180</td>
                      <td className="p-3.5">Rs. 354</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 3,894</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 3 (6 bounces, 90 DPD NPA)</td>
                      <td className="p-3.5">Rs. 7,080</td>
                      <td className="p-3.5">Rs. 3,540</td>
                      <td className="p-3.5">Rs. 1,534</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 12,154</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 6 (12 bounces, 180 DPD)</td>
                      <td className="p-3.5">Rs. 14,160</td>
                      <td className="p-3.5">Rs. 7,080</td>
                      <td className="p-3.5">Rs. 4,868</td>
                      <td className="p-3.5 font-black text-red-800">Rs. 26,108</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Over six months of unpaid delinquency, <strong>Rs. 21,240 out of the Rs. 26,108 penalty drain</strong> comes purely from IDFC FIRST bounce charges and external salary-bank NACH return deductions! Model your exact loan EMI and multi-lender dues inside our{" "}
                <Link
                  href="https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  Personal Loan EMI Bounce Charges Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 7: Clearing Overdue on IDFC App */}
            <section id="idfc-mobile-app-clearance" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Clearing an Overdue IDFC FIRST EMI &amp; Stopping Repeat Retries
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                If your combined unsecured debt is under Rs. 3,00,000 and the missed debit resulted from a one-time payroll delay, act immediately so a mid-month re-presentation does not cost you another Rs. 1,770:
              </p>
              <ol className="space-y-4 list-decimal pl-5 text-base text-slate-700 mb-6">
                <li>
                  <strong>Pay Inside the IDFC FIRST Mobile App or Quick Pay Portal:</strong> Open your active Loan Account, tap &quot;Pay Now -&gt; Overdue EMI,&quot; and complete payment via UPI or NetBanking. Clearing both the overdue installment and the posted bounce fee ensures residual charge balances do not sit open on your statement.
                </li>
                <li>
                  <strong>Clear 48 to 72 Hours Ahead of Retry Runs:</strong> IDFC FIRST&apos;s automated collections engine frequently dispatches follow-up NACH debit files around the 7th, 10th, and 15th after a 2nd-of-the-month dishonour. Paying within 24 to 48 hours updates your loan ledger before the next NPCI batch locks.
                </li>
                <li>
                  <strong>Use Official Channels Only:</strong> Never transfer money to an individual agent&apos;s personal UPI ID or unverified WhatsApp link promising &quot;instant bounce waiver.&quot; Pay strictly through the IDFC FIRST app or official Bharat BillPay (BBPS) loan biller flow.
                </li>
              </ol>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Review our step-by-step checklists on{" "}
                <Link
                  href="https://www.settleloans.in/loan-overdue-nach-bounce-immediate-steps"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  immediate actions right after a NACH bounce
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.settleloans.in/stop-emi-bounce-cycle-for-good"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  breaking the monthly EMI bounce cycle permanently
                </Link>
                .
              </p>
            </section>

            {/* Section 8: SOA Audit & Mandate Rejects */}
            <section id="soa-audit-mandate-reject" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Auditing Your IDFC FIRST Statement &amp; Mandate Reject Rules
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                IDFC FIRST Bank&apos;s mobile app lets borrowers download an itemized <strong>Statement of Account (SOA)</strong> free of charge in seconds. Whenever an installment has bounced, verify three critical details on that PDF ledger:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Exact Bounce Cap Verification:</strong> Confirm that no single EMI bounce entry exceeds Rs. 1,000 base charge plus Rs. 180 GST (Rs. 1,180) and that every billed bounce matches an actual NACH presentation date visible on your savings bank statement.
                </li>
                <li>
                  <strong>3rd-Month Continuous Mandate Rejection Charge:</strong> If you changed employers and closed your previous salary bank account without paying the Rs. 500 + GST swap fee to register your new bank&apos;s e-NACH mandate, IDFC FIRST&apos;s revised tariff triggers a continuous Mandate Rejection Charge starting from the <strong>3rd consecutive unrectified month</strong>.
                </li>
                <li>
                  <strong>NPCI Clearing Return Codes:</strong> Distinguish <em>R01 Insufficient Funds</em> from <em>R20 Technical / Sponsor Bank Clearing Timeout</em>. Any R20 technical failure where your bank account held clear balance on the evening before due date qualifies for 100% reversal of the Rs. 1,180 bounce fee and CIBIL DPD correction.
                </li>
              </ul>
            </section>

            {/* Section 9: 15-Day CIBIL & Nodal Escalation */}
            <section id="cibil-fortnightly-reporting" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                15-Day CIBIL Reporting &amp; IDFC FIRST Nodal Escalation Ladder
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Under RBI&apos;s fortnightly credit bureau reporting mandate, IDFC FIRST Bank uploads borrower Days Past Due (DPD) data to CIBIL, Experian, Equifax, and CRIF High Mark as of the <strong>15th and last day of every month</strong>. A 2nd-date or 5th-date bounce left unpaid past the 15th records an immediate SMA-0 delinquency mark (10 to 13 DPD) in that very month&apos;s credit report!
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                If you need to dispute a technical bounce, duplicate same-cycle debit after manual payment, or aggressive recovery behaviour outside RBI&apos;s 8:00 AM to 7:00 PM contact window, file a Level-1 ticket inside the IDFC FIRST app&apos;s Help Centre attaching bank statement proof. Unresolved responses can be escalated to IDFC FIRST Bank&apos;s <strong>Grievance Redressal Officer / Principal Nodal Officer (PNO)</strong>, and after 30 days to the Reserve Bank Integrated Ombudsman portal. Also read{" "}
                <Link
                  href="https://www.settleloans.in/reminder-calls-after-emi-bounce"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  your legal rights during recovery reminder calls
                </Link>
                .
              </p>
            </section>

            {/* Section 10: Salaried IDFC FIRST Settlement Path */}
            <section id="idfc-salaried-settlement" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Salaried IDFC FIRST Settlement Path (Combined Debt ≥ ₹3 Lakhs)
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Because IDFC FIRST charges up to Rs. 1,180 per bounce and 5.90% foreclosure fees on standard personal loans, salaried employees hit by tech layoffs, salary cuts, business closures, or medical emergencies quickly find themselves trapped when juggling multiple FIRSTmoney drawdowns, credit cards, and bank loans. Sending isolated partial payments during 60+ or 90+ DPD simply gets absorbed by accumulated Rs. 1,180 bounce charges and overdue interest without closing the debt.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                When your <strong>total combined unsecured debt across IDFC FIRST loans, credit cards, and other banks or NBFCs is ₹3,00,000 or higher</strong>, SettleLoans builds a structured legal resolution:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Protecting Household Payroll &amp; Halting Bank Return Bleed:</strong> Advising you on routing active salary credits into a clean non-lender bank account and managing mandate exposure legally so Rs. 1,770 double-bounces stop eroding rent and grocery cash. See{" "}
                  <Link
                    href="https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    salary account ECS and NACH mandate rules
                  </Link>
                  .
                </li>
                <li>
                  <strong>100% Waiver of Bounce &amp; Penal Buckets at NPA Stage:</strong> Presenting documented hardship proof (termination letters, pay-cut notices, medical records, bank statements) once accounts cross 90+ DPD to strip out accumulated Rs. 1,180 bounce fees and penal charges alongside a realistic principal haircut (commonly 42% to 60% of principal depending on product cohort and hardship; never guaranteed).
                </li>
                <li>
                  <strong>Verified IDFC FIRST Bank Settlement Letter:</strong> Ensuring every settlement rupee is paid strictly against an authenticated IDFC FIRST Bank letterhead sanction covering each specific LAN (including all FIRSTmoney sub-loans), followed by formal No Dues Certificates. Explore our{" "}
                  <Link
                    href="https://www.settleloans.in/loan-settlement/idfc-first-bank"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    IDFC FIRST Bank loan settlement hub
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

            {/* Section 11: FAQs */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                IDFC FIRST Personal Loan Bounce Charges FAQs
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
                Stop Losing ₹1,180 Per IDFC FIRST Bounce Presentation
              </div>
              <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-6">
                Juggling ₹3,00,000 or more across IDFC FIRST Personal Loans, FIRSTmoney, credit cards, or NBFC loans? Get a confidential salaried settlement assessment.
              </p>
              <a
                href="#settlement-assessment"
                className="inline-block bg-[#1F5EFF] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Evaluate My Settlement Plan
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
              <strong>Disclaimer:</strong> SettleLoans is an independent debt resolution and legal advisory platform and is not affiliated with IDFC FIRST Bank Limited. All tariff figures reflect IDFC FIRST Bank&apos;s published Bounce and Penal Charges Revision schedule checked on 11 November 2026 and remain subject to bank updates and your Key Fact Statement (KFS).
            </div>
          </article>

          {/* Right Column: Sticky Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-6 text-white border border-white/10 shadow-xl">
                <div className="text-lg font-black mb-2">
                  IDFC Bounce Calculator
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-5">
                  Calculate IDFC FIRST&apos;s 7.5% to 12% bounce cap (+ GST), bank return fees, and revised 1% monthly penal charges instantly.
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
                      href="https://www.settleloans.in/loan-settlement/idfc-first-bank"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • IDFC FIRST Loan Settlement Hub
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/bajaj-finance-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Bajaj Finance EMI Bounce Charges
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
                      href="https://www.settleloans.in/indusind-personal-loan-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • IndusInd Bank PL Bounce Charges
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
