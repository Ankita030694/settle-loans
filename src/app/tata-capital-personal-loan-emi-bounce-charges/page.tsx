import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import LoanSettlementAssessmentFunnel from "@/components/LoanSettlementAssessmentFunnel";

export const metadata: Metadata = {
  title: "Tata Capital Personal Loan Bounce Fees | SettleLoans",
  description: "Check official Tata Capital personal loan EMI bounce charges (Rs. 600 + GST), Rs. 450 mandate reject fees, 3% monthly penal rules, and settlement.",
  alternates: {
    canonical: "https://www.settleloans.in/tata-capital-personal-loan-emi-bounce-charges",
  },
  openGraph: {
    title: "Tata Capital Personal Loan Bounce Fees | SettleLoans",
    description: "Check official Tata Capital personal loan EMI bounce charges (Rs. 600 + GST), Rs. 450 mandate reject fees, 3% monthly penal rules, and settlement.",
    url: "https://www.settleloans.in/tata-capital-personal-loan-emi-bounce-charges",
    type: "article",
    images: [
      {
        url: "https://www.settleloans.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tata Capital Personal Loan EMI Bounce Charges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tata Capital Personal Loan Bounce Fees | SettleLoans",
    description: "Check official Tata Capital personal loan EMI bounce charges (Rs. 600 + GST), Rs. 450 mandate reject fees, 3% monthly penal rules, and settlement.",
    images: ["https://www.settleloans.in/og-image.jpg"],
  },
};

const tocItems = [
  { id: "tata-official-tariff", title: "Official Tata Capital Schedule" },
  { id: "bounce-vs-mandate-reject", title: "Rs. 600 Bounce vs Rs. 450 Reject" },
  { id: "three-percent-penal-math", title: "3% Monthly Overdue Penal Rule" },
  { id: "external-salary-nach-drain", title: "Salary Bank Double-Debit Math" },
  { id: "six-month-tata-projection", title: "6-Month Overdue Cost Table" },
  { id: "moneyfy-portal-clearance", title: "Paying Overdue on Tata Portal" },
  { id: "tata-waiver-grievance", title: "Disputing Unfair Bounce Fees" },
  { id: "tata-hybrid-overdraft-trap", title: "Hybrid Overdraft vs Term PL" },
  { id: "tata-soa-return-codes", title: "Auditing Your Tata Capital SOA" },
  { id: "tata-cibil-sma-impact", title: "CIBIL Reporting & SMA Stages" },
  { id: "tata-salaried-settlement", title: "Salaried Tata Settlement Path" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
  {
    q: "What is the Tata Capital personal loan EMI bounce charge?",
    a: "According to Tata Capital Limited's published Personal Loan Interest Rates and Charges schedule, the cheque bounce or NACH/ECS payment failure charge is Rs. 600 per instrument/instance plus 18% GST, totaling Rs. 708 per failed debit presentation.",
  },
  {
    q: "What is Tata Capital's Rs. 450 Mandate Rejection Service Charge?",
    a: "Separate from the Rs. 600 + GST EMI bounce charge, Tata Capital levies a Mandate Rejection Service Charge of Rs. 450 plus 18% GST (Rs. 531) if a borrower's NACH/e-Mandate registration is rejected by their bank and a valid replacement mandate is not registered within 30 days.",
  },
  {
    q: "How much late payment penal charge does Tata Capital charge on overdue EMIs?",
    a: "Tata Capital levies a late payment penal charge of 3% per month (equivalent to 36% per annum) plus 18% GST calculated on the defaulted or overdue installment amount for the period of delay. Per RBI Fair Practices rules, penal charges are non-capitalized and never added to principal.",
  },
  {
    q: "Why did my salary bank also charge me when my Tata Capital EMI bounced?",
    a: "Because Tata Capital pulls monthly installments from your external HDFC, ICICI, SBI, Axis, or Kotak salary account via NPCI e-NACH, every failed presentation triggers Rs. 708 on your Tata Capital loan ledger plus Rs. 295 to Rs. 590 deducted immediately by your destination salary bank for inward NACH return handling.",
  },
  {
    q: "How much does Tata Capital charge to swap my e-Mandate or PDC bank account?",
    a: "Changing your active repayment mode or swapping your registered e-Mandate / Post-Dated Cheques to a new salary account at Tata Capital attracts a swap charge of Rs. 500 to Rs. 550 plus 18% GST per transaction.",
  },
  {
    q: "How does a bounce affect a Tata Capital Overdraft / Hybrid Personal Loan?",
    a: "On Tata Capital's hybrid/overdraft personal loan variants for salaried borrowers, missing the monthly interest or EMI auto-debit triggers the Rs. 600 + GST bounce fee, accrues 3% monthly penal charges on the unpaid due, and freezes further drawdown access on the credit line until regularized.",
  },
  {
    q: "How can I pay an overdue Tata Capital EMI manually to prevent repeat NACH retries?",
    a: "Log into the Tata Capital Retail Customer Portal or Tata Capital / Moneyfy mobile app, select your Personal Loan Account, and pay the overdue installment via UPI, NetBanking, or Debit Card at least 48 hours ahead of mid-month retry batches so secondary NACH files are suppressed.",
  },
  {
    q: "Can I get a first-time Tata Capital Rs. 708 bounce charge waived?",
    a: "If your employer delayed payroll by a couple of days or an NPCI clearing timeout caused a return despite adequate clear balance in your bank account, clear the overdue EMI first and submit a written waiver request through Tata Capital's Customer Care / Grievance Redressal portal attaching your bank statement.",
  },
  {
    q: "Does Tata Capital waive Rs. 708 bounce fees and 36% penal charges during settlement?",
    a: "When an unsecured Tata Capital personal loan enters Non-Performing Asset (NPA) status after 90+ days past due because of verified salaried hardship such as job loss, pay cuts, or hospitalization, negotiated settlements typically waive 100% of accumulated bounce fees and 3% monthly penal charges alongside an agreed principal haircut.",
  },
  {
    q: "What minimum combined debt is required for SettleLoans to assist with Tata Capital debt?",
    a: "SettleLoans represents salaried borrowers carrying Rs. 3,00,000 or more in combined unsecured debt across Tata Capital personal loans, bank personal loans, credit cards, and other NBFC or app loans.",
  },
  {
    q: "Will stopping my Tata Capital e-NACH mandate stop penal charges?",
    a: "No. Revoking or stopping your e-NACH mandate without lender consent triggers mandate-rejection fees, breaches loan covenants, and leaves the 3% per month overdue penal charge running daily on unpaid installments.",
  },
];

export default function TataCapitalPersonalLoanEmiBounceChargesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.settleloans.in/tata-capital-personal-loan-emi-bounce-charges#breadcrumb",
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
            "name": "Tata Capital EMI Bounce Charges",
            "item": "https://www.settleloans.in/tata-capital-personal-loan-emi-bounce-charges"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.settleloans.in/tata-capital-personal-loan-emi-bounce-charges#article",
        "headline": "Tata Capital Personal Loan EMI & NACH Bounce Charges (Verified Schedule)",
        "description": "Complete salaried breakdown of Tata Capital personal loan EMI bounce fees (Rs. 600 + GST), Rs. 450 mandate rejection charges, 3% monthly penal rules, and settlement.",
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
          "@id": "https://www.settleloans.in/tata-capital-personal-loan-emi-bounce-charges"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.settleloans.in/tata-capital-personal-loan-emi-bounce-charges#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the Tata Capital personal loan EMI bounce charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "According to Tata Capital Limited's published Personal Loan Interest Rates and Charges schedule, the cheque bounce or NACH/ECS payment failure charge is Rs. 600 per instrument/instance plus 18% GST, totaling Rs. 708 per failed debit presentation."
            }
          },
          {
            "@type": "Question",
            "name": "What is Tata Capital's Rs. 450 Mandate Rejection Service Charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Separate from the Rs. 600 + GST EMI bounce charge, Tata Capital levies a Mandate Rejection Service Charge of Rs. 450 plus 18% GST (Rs. 531) if a borrower's NACH/e-Mandate registration is rejected by their bank and a valid replacement mandate is not registered within 30 days."
            }
          },
          {
            "@type": "Question",
            "name": "How much late payment penal charge does Tata Capital charge on overdue EMIs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tata Capital levies a late payment penal charge of 3% per month (equivalent to 36% per annum) plus 18% GST calculated on the defaulted or overdue installment amount for the period of delay. Per RBI Fair Practices rules, penal charges are non-capitalized and never added to principal."
            }
          },
          {
            "@type": "Question",
            "name": "Why did my salary bank also charge me when my Tata Capital EMI bounced?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because Tata Capital pulls monthly installments from your external HDFC, ICICI, SBI, Axis, or Kotak salary account via NPCI e-NACH, every failed presentation triggers Rs. 708 on your Tata Capital loan ledger plus Rs. 295 to Rs. 590 deducted immediately by your destination salary bank for inward NACH return handling."
            }
          },
          {
            "@type": "Question",
            "name": "How much does Tata Capital charge to swap my e-Mandate or PDC bank account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Changing your active repayment mode or swapping your registered e-Mandate / Post-Dated Cheques to a new salary account at Tata Capital attracts a swap charge of Rs. 500 to Rs. 550 plus 18% GST per transaction."
            }
          },
          {
            "@type": "Question",
            "name": "How does a bounce affect a Tata Capital Overdraft / Hybrid Personal Loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "On Tata Capital's hybrid/overdraft personal loan variants for salaried borrowers, missing the monthly interest or EMI auto-debit triggers the Rs. 600 + GST bounce fee, accrues 3% monthly penal charges on the unpaid due, and freezes further drawdown access on the credit line until regularized."
            }
          },
          {
            "@type": "Question",
            "name": "How can I pay an overdue Tata Capital EMI manually to prevent repeat NACH retries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Log into the Tata Capital Retail Customer Portal or Tata Capital / Moneyfy mobile app, select your Personal Loan Account, and pay the overdue installment via UPI, NetBanking, or Debit Card at least 48 hours ahead of mid-month retry batches so secondary NACH files are suppressed."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get a first-time Tata Capital Rs. 708 bounce charge waived?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If your employer delayed payroll by a couple of days or an NPCI clearing timeout caused a return despite adequate clear balance in your bank account, clear the overdue EMI first and submit a written waiver request through Tata Capital's Customer Care / Grievance Redressal portal attaching your bank statement."
            }
          },
          {
            "@type": "Question",
            "name": "Does Tata Capital waive Rs. 708 bounce fees and 36% penal charges during settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When an unsecured Tata Capital personal loan enters Non-Performing Asset (NPA) status after 90+ days past due because of verified salaried hardship such as job loss, pay cuts, or hospitalization, negotiated settlements typically waive 100% of accumulated bounce fees and 3% monthly penal charges alongside an agreed principal haircut."
            }
          },
          {
            "@type": "Question",
            "name": "What minimum combined debt is required for SettleLoans to assist with Tata Capital debt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SettleLoans represents salaried borrowers carrying Rs. 3,00,000 or more in combined unsecured debt across Tata Capital personal loans, bank personal loans, credit cards, and other NBFC or app loans."
            }
          },
          {
            "@type": "Question",
            "name": "Will stopping my Tata Capital e-NACH mandate stop penal charges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Revoking or stopping your e-NACH mandate without lender consent triggers mandate-rejection fees, breaches loan covenants, and leaves the 3% per month overdue penal charge running daily on unpaid installments."
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
              Tata Capital Personal Loan EMI &amp; NACH Bounce Charges
            </h1>
            <p className="text-base md:text-xl text-[#DEDEDE]/85 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
              Detailed salaried guide to Tata Capital&apos;s Rs. 600 (+ 18% GST) EMI dishonour fee, Rs. 450 mandate rejection charge, 3% per month (36% p.a.) overdue penal rules, and structured settlement paths for multi-loan borrowers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#settlement-assessment"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-8 rounded-[10px] hover:scale-105 transition-all duration-300 text-base md:text-lg shadow-lg"
              >
                Evaluate Combined Debt Options
              </a>
              <Link
                href="https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 text-white border border-white/20 font-bold py-4 px-8 rounded-[10px] hover:bg-white/20 transition-all duration-300 text-base md:text-lg"
              >
                Open Tata Capital Calculator
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
                  Tata Capital EMI Bounce Charges
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
            {/* Section 1: Official Tata Capital Schedule */}
            <section id="tata-official-tariff" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Official Tata Capital Personal Loan Bounce &amp; Penal Schedule
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Tata Capital Limited (following the merger of Tata Capital Financial Services Limited into the parent upper-layer NBFC) is a major lender for salaried corporate employees, offering standard Term Personal Loans, Overdraft/Hybrid Personal Loans, and debt-consolidation personal loans. Because Tata Capital collects monthly installments exclusively from external bank accounts via e-NACH or ECS mandates, missing a due date triggers both NBFC dishonour fees and high-rate monthly overdue penalties.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-6">
                Below is Tata Capital&apos;s verified Personal Loan Schedule of Charges checked directly against Tata Capital&apos;s official rates and charges page on 11 November 2026:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-5">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#2E2E2E] text-white">
                      <th className="p-4 font-bold">Tata Capital Personal Loan Fee Head</th>
                      <th className="p-4 font-bold">Official Charge (Excl. GST)</th>
                      <th className="p-4 font-bold">Effective Cost With 18% GST</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Cheque / ECS / NACH Bounce (Payment Failure)</td>
                      <td className="p-4 text-slate-700">Rs. 600 per instance / instrument</td>
                      <td className="p-4 font-semibold text-red-700">Rs. 708 per failed debit</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Late Payment / Overdue Penal Charges</td>
                      <td className="p-4 text-slate-700">3% per month (36% p.a.) on overdue amount</td>
                      <td className="p-4 font-semibold text-red-700">3.54% per month incl. GST (non-capitalized)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Mandate Rejection Service Charge</td>
                      <td className="p-4 text-slate-700">Rs. 450 (if unrectified past 30 days)</td>
                      <td className="p-4 font-semibold text-slate-800">Rs. 531</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">PDC / e-Mandate Swap Charges</td>
                      <td className="p-4 text-slate-700">Rs. 500 to Rs. 550 per swap</td>
                      <td className="p-4 font-semibold text-slate-800">Rs. 590 to Rs. 649</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs md:text-sm text-slate-600">
                <strong>Official Source Verification:</strong> Checked against{" "}
                <a
                  href="https://www.tatacapital.com/personal-loan/rates-and-charges.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  Tata Capital Personal Loan Interest Rates &amp; Charges Schedule
                </a>{" "}
                on <strong>11 November 2026</strong>. Legacy loan variants may reflect Rs. 400 to Rs. 600 + GST as printed in your individual Most Important Terms and Conditions (MITC) and Key Fact Statement (KFS).
              </div>
            </section>

            {/* Funnel Near Hero */}
            <div className="mb-14">
              <div className="p-5 rounded-t-3xl bg-blue-50 border border-b-0 border-blue-200 text-sm text-slate-800">
                <strong>Salaried Debt Assessment:</strong> Facing Rs. 708 Tata Capital bounce fees and 3% monthly penalties alongside bank loans or credit cards? If your <strong>combined unsecured debt across all lenders is ₹3,00,000 or higher</strong>, check your consolidated settlement eligibility below.
              </div>
              <LoanSettlementAssessmentFunnel className="!mt-0 !rounded-t-none" />
            </div>

            {/* Section 2: Rs. 600 Bounce vs Rs. 450 Mandate Reject */}
            <section id="bounce-vs-mandate-reject" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Rs. 600 Bounce Fee vs Rs. 450 Mandate Rejection Charge
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                When inspecting a Tata Capital personal loan statement of account (SOA), salaried borrowers frequently confuse two separate mandate-related fee lines. Knowing how each one triggers helps you avoid unnecessary Rs. 531 to Rs. 708 charges:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    Rs. 600 + 18% GST (Rs. 708) Bounce Charge
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Levied every time an active, registered NACH, e-Mandate, ECS, or cheque presentation fails on or after your scheduled EMI due date (commonly the 5th of the month) due to insufficient balance, account freeze, or stop-payment instructions.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <h3 className="text-lg font-black text-amber-950 mb-2">
                    Rs. 450 + 18% GST (Rs. 531) Mandate Rejection Fee
                  </h3>
                  <p className="text-sm md:text-base text-amber-950 leading-relaxed">
                    Levied when your destination bank rejects the NACH/e-Mandate registration itself (for example, due to signature mismatch, closed salary account after a job change, or netbanking authentication error) and you fail to register a fresh mandate within 30 days.
                  </p>
                </div>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                That means closing an old salary account or revoking your e-Mandate in hopes of escaping Rs. 708 bounce fees backfires directly: Tata Capital can bill the Rs. 531 mandate rejection service charge while continuing to accrue 3% per month penal charges on every unpaid EMI! Read our legal rules on{" "}
                <Link
                  href="https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  salary account ECS and NACH mandate cancellation
                </Link>
                .
              </p>
            </section>

            {/* Section 3: 3% Monthly Overdue Penal Rule */}
            <section id="three-percent-penal-math" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                How Tata Capital&apos;s 3% Per Month (36% p.a.) Penal Charge Works
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                While large private banks such as ICICI Bank (5% p.a.) and Axis/Kotak (8% p.a.) keep overdue penal rates relatively low, Tata Capital applies an NBFC-tier overdue penal charge of <strong>3% per month (36% per annum) plus 18% GST</strong> on the defaulted EMI amount.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Look at how fast 3% per month + GST grows across consecutive missed months on a <strong>Rs. 16,000</strong> monthly personal loan EMI:
              </p>
              <ul className="space-y-3 bg-blue-50/70 border border-blue-200 rounded-2xl p-6 mb-6 text-sm md:text-base text-slate-800">
                <li>
                  • <strong>Month 1 (Rs. 16,000 overdue for 30 days):</strong> 3% of Rs. 16,000 = Rs. 480 + Rs. 86.40 GST = <strong>Rs. 566</strong> in penal charges alone.
                </li>
                <li>
                  • <strong>Month 2 (Rs. 32,000 combined overdue EMIs):</strong> 3% of Rs. 32,000 = Rs. 960 + Rs. 172.80 GST = <strong>Rs. 1,133</strong> for Month 2 (cumulative penal: Rs. 1,699).
                </li>
                <li>
                  • <strong>Month 3 (Rs. 48,000 combined overdue EMIs at 90 DPD NPA):</strong> 3% of Rs. 48,000 = Rs. 1,440 + Rs. 259.20 GST = <strong>Rs. 1,699</strong> for Month 3 (cumulative penal: <strong>Rs. 3,398</strong>).
                </li>
              </ul>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                One vital regulatory protection applies under RBI&apos;s Fair Lending Practice directions on Penal Charges: Tata Capital must record this 3% monthly levy as a <strong>non-capitalized penal charge</strong>. It cannot fold unpaid penal charges or Rs. 708 bounce fees back into your principal balance to compound loan interest on top of penalties.
              </p>
            </section>

            {/* Section 4: Salary Bank Double-Debit Math */}
            <section id="external-salary-nach-drain" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Why Every Tata Capital Bounce Deducts Money Twice
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Because Tata Capital is a non-deposit-taking NBFC rather than a commercial bank, 100% of salaried Tata Capital borrowers service their loans from an external savings or corporate salary account (typically at HDFC Bank, ICICI Bank, SBI, Axis Bank, or Kotak Mahindra Bank).
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                On one hand, this structure means Tata Capital <strong>cannot place a unilateral internal bank freeze or hold lien</strong> on your HDFC or SBI salary account when your paycheck lands, giving you breathing room to buy groceries and pay rent during an emergency. On the other hand, every failed NACH presentation triggers a painful double deduction: Tata Capital posts <strong>Rs. 708 (Rs. 600 + GST)</strong> to your loan account while your salary bank immediately deducts <strong>Rs. 295 (SBI) to Rs. 590 (ICICI/Axis/HDFC)</strong> for inward NACH return handling. Two NACH attempts in one bad month easily cost <strong>Rs. 2,596</strong> in flat bounce fees before counting the 3% monthly penal charge!
              </p>
            </section>

            {/* Section 5: 6-Month Tata Projection */}
            <section id="six-month-tata-projection" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                6-Month Overdue Cost Table on a Tata Capital Personal Loan
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Suppose a salaried project lead services a Rs. 5,50,000 Tata Capital personal loan (remaining principal Rs. 4,25,000, monthly EMI <strong>Rs. 15,800</strong>) via e-NACH on a private salary account (Rs. 500 + GST inward return), assuming 2 NACH presentations per unpaid month:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Overdue Horizon</th>
                      <th className="p-3.5 font-bold">Tata Bounce Fees (+GST)</th>
                      <th className="p-3.5 font-bold">Salary Bank Returns (+GST)</th>
                      <th className="p-3.5 font-bold">3% Monthly Penal (+GST)</th>
                      <th className="p-3.5 font-bold">Total Penalty Drain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 1 (2 bounces, 30 DPD)</td>
                      <td className="p-3.5">Rs. 1,416</td>
                      <td className="p-3.5">Rs. 1,180</td>
                      <td className="p-3.5">Rs. 559</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 3,155</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 3 (6 bounces, 90 DPD NPA)</td>
                      <td className="p-3.5">Rs. 4,248</td>
                      <td className="p-3.5">Rs. 3,540</td>
                      <td className="p-3.5">Rs. 3,356</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 11,144</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 6 (12 bounces, 180 DPD)</td>
                      <td className="p-3.5">Rs. 8,496</td>
                      <td className="p-3.5">Rs. 7,080</td>
                      <td className="p-3.5">Rs. 11,746</td>
                      <td className="p-3.5 font-black text-red-800">Rs. 27,322</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Plug your own Tata Capital EMI, overdue months, and any other personal loan or credit card balances into our{" "}
                <Link
                  href="https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  Tata Capital &amp; Multi-Lender EMI Bounce Calculator
                </Link>{" "}
                to see your personalized numbers.
              </p>
            </section>

            {/* Section 6: Paying Overdue on Tata Portal */}
            <section id="moneyfy-portal-clearance" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Clearing Overdue Tata Capital EMIs &amp; Halting Retries
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                If your bounce happened due to a short-term salary delay and your overall debt load is manageable, follow these steps immediately after receiving the first bounce alert:
              </p>
              <ol className="space-y-4 list-decimal pl-5 text-base text-slate-700 mb-6">
                <li>
                  <strong>Pay Through the Tata Capital Customer Portal or Mobile App:</strong> Log in using your registered mobile number or Loan Account Number, select &quot;Quick Pay / Overdue EMI,&quot; and complete payment via UPI or NetBanking at least 48 hours ahead of mid-month NACH retry batches.
                </li>
                <li>
                  <strong>Keep Your Payment Receipt Handy:</strong> Save the PDF receipt and transaction reference so if an automated NACH batch was already queued with NPCI, you can claim an immediate reversal of any duplicate Rs. 708 charge.
                </li>
                <li>
                  <strong>Swap Your Mandate Properly After Switching Jobs:</strong> When moving payroll from one bank to another, register a new e-Mandate inside the Tata Capital portal (Rs. 500 to Rs. 550 + GST swap fee) before emptying your old salary account.
                </li>
              </ol>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Review our step-by-step guides on{" "}
                <Link
                  href="https://www.settleloans.in/loan-overdue-nach-bounce-immediate-steps"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  immediate steps after a NACH bounce
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.settleloans.in/stop-emi-bounce-cycle-for-good"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  stopping the EMI bounce cycle permanently
                </Link>
                .
              </p>
            </section>

            {/* Section 7: Disputing Unfair Bounce Fees */}
            <section id="tata-waiver-grievance" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                How to Dispute Technical or Duplicate Tata Capital Bounce Fees
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Tata Capital maintains a structured multi-level grievance redressal desk for retail borrowers. If you were billed Rs. 708 despite maintaining clear sufficient balance on the evening before your due date (due to an NPCI or sponsor-bank clearing timeout), or if multiple presentations ran within days after you had already paid online, raise a ticket at <strong>Level 1 (Tata Capital Customer Care portal)</strong> attaching your bank account statement and payment confirmation.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                If Level 1 does not resolve a documented technical error within 10 working days, escalate to <strong>Tata Capital&apos;s Grievance Redressal Officer (GRO) / Nodal Officer</strong> citing RBI Fair Practices norms on non-punitive penal charges, and past 30 days to the Reserve Bank Integrated Ombudsman portal.
              </p>
            </section>

            {/* Section 7B: Tata Capital Overdraft / Hybrid Flexi vs Term PL */}
            <section id="tata-hybrid-overdraft-trap" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Tata Capital Hybrid Overdraft vs Standard Term Loan Bounces
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Alongside traditional fixed-EMI personal loans, Tata Capital actively markets <strong>Hybrid / Overdraft Personal Loans</strong> to salaried corporate employees, allowing an initial interest-only tenure on utilized limits followed by a drop-line repayment schedule. Understanding how bounce rules behave differently across these two variants prevents nasty surprises when cash runs tight:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    Withdrawal Freeze Upon First NACH Dishonour
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Borrowers who treat a Tata Capital Hybrid Overdraft like a revolving emergency buffer often deposit their salary or bonus expecting to redraw funds days later. An active NACH bounce or overdue DPD flag immediately suspends fresh drawdowns on the limit until all overdue interest, Rs. 708 bounce charges, and 3% monthly penal charges are cleared.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    Interest-Only Payments Leave 100% Principal Intact
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    During the initial Hybrid tenure, monthly NACH debits cover utilized interest alone. If you suffer a job loss or pay cut and borrow from friends or apps just to clear bounced interest debits plus Rs. 1,298 combined bounce fees every month, your underlying Rs. 6,00,000 or Rs. 10,00,000 principal never drops by a single rupee.
                  </p>
                </div>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Also note Tata Capital&apos;s foreclosure structure: closing a standard personal loan early attracts roughly <strong>4.5% plus 18% GST</strong> on principal outstanding after the lock-in period (though partial prepayment up to 25% of principal per year from own funds may carry zero fee on eligible schemes). Once recent EMI bounces pull down your CIBIL score, low-rate balance transfers become unavailable, making early cash-flow triage essential.
              </p>
            </section>

            {/* Section 7C: Auditing Your Tata Capital SOA */}
            <section id="tata-soa-return-codes" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Auditing Your Tata Capital Statement of Account (SOA)
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Whenever two or more monthly installments have bounced, download your itemized <strong>Statement of Account (SOA)</strong> from the Tata Capital Customer Portal or Moneyfy app (note: paper duplicate statement requests at branches can attract administrative document fees, whereas digital downloads inside self-service portals are the fastest way to verify balances). Check four specific columns on your ledger:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Instrument Dishonour / Bounce Line Items (Rs. 600 + 18% GST):</strong> Confirm that every Rs. 708 entry corresponds to an actual NACH presentation recorded on your bank account statement rather than an unpresented internal retry.
                </li>
                <li>
                  <strong>Mandate Rejection Service Charge (Rs. 450 + 18% GST):</strong> Verify whether an unrectified e-Mandate rejection triggered a Rs. 531 service fee after you switched corporate salary accounts without filing a formal mandate swap.
                </li>
                <li>
                  <strong>Uncapitalized 3% Monthly Penal Bucket:</strong> Under RBI&apos;s penal charge framework, verify that daily pro-rated overdue penal charges (36% per annum plus GST on the unpaid installment) sit in a separate non-compounding fee bucket and have not been added into your interest-bearing principal.
                </li>
                <li>
                  <strong>NPCI Return Reason Codes (R01 vs R20):</strong> Match your bank statement narration against NPCI return codes so any technical clearing timeout (R20) is disputed immediately with proof of clear end-of-day balance prior to presentation.
                </li>
              </ul>
            </section>

            {/* Section 7D: CIBIL Reporting & SMA Stages */}
            <section id="tata-cibil-sma-impact" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                How Tata Capital Reports EMI Bounces to CIBIL &amp; Experian
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Like all RBI-regulated Upper and Middle Layer NBFCs, Tata Capital Limited submits fortnightly repayment files (as of the 15th and month-end) to all four Indian credit bureaus. A single 5th-of-the-month NACH bounce that stays unpaid past the 15th is reported as <strong>10 Days Past Due (SMA-0)</strong> within the very same calendar month, often knocking 35 to 65 points off an otherwise clean salaried CIBIL score.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-4">
                Across consecutive missed cycles, the account transitions from <strong>SMA-0 (1 to 30 DPD)</strong> to <strong>SMA-1 (31 to 60 DPD)</strong>, <strong>SMA-2 (61 to 90 DPD)</strong>, and finally <strong>Non-Performing Asset (NPA) at 90+ DPD</strong>. Salaried borrowers facing genuine multi-month insolvency should remember that sending ad-hoc partial transfers of Rs. 5,000 or one isolated EMI at 75 DPD neither restores a clean CIBIL track record nor stops NPA classification unless the entire overdue arrears bucket is cleared or a formal written settlement sanction is executed.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Furthermore, if you hold both a Tata Capital Personal Loan and a Tata Capital Two-Wheeler, Used Car, or Consumer Durable loan under the same customer profile, check whether cross-default clauses or shared NACH presentation dates apply before allowing multiple mandates to bounce simultaneously on your primary salary bank account.
              </p>
            </section>

            {/* Section 8: Salaried Tata Settlement Path */}
            <section id="tata-salaried-settlement" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Salaried Tata Capital Settlement Roadmap (Debt ≥ ₹3 Lakhs)
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                When job loss, pay cuts, startup closures, or medical emergencies leave you unable to pay Tata Capital alongside private bank loans or credit cards, making occasional single-EMI transfers during 60+ or 90+ DPD rarely helps: standard NBFC appropriation rules apply incoming money toward Rs. 708 bounce fees, 3% monthly penal charges, and overdue interest before reducing principal.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                For salaried individuals carrying <strong>₹3,00,000 or more in combined unsecured debt</strong> across all personal loans, credit cards, and app loans, SettleLoans structures a formal legal exit:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Stopping Unplanned Bank Return Leakage:</strong> Structuring your cash-flow defenses and formal hardship communications while you accumulate settlement funds safely. Also read{" "}
                  <Link
                    href="https://www.settleloans.in/reminder-calls-after-emi-bounce"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    managing recovery reminder calls after an EMI bounce
                  </Link>
                  .
                </li>
                <li>
                  <strong>Full Waiver of Rs. 708 Bounce &amp; 36% Penal Charges:</strong> Post 90+ DPD (NPA classification), presenting verified job-loss, salary-cut, or medical evidence to Tata Capital&apos;s settlement desk to strip out 100% of accumulated bounce and penal buckets alongside a realistic principal haircut (commonly 42% to 60% of principal depending on case merits; never guaranteed).
                </li>
                <li>
                  <strong>Verified Tata Capital Settlement Sanction Letter:</strong> Ensuring all payments are made strictly into your official Tata Capital loan account against a verified letterhead settlement sanction specifying full-and-final closure and No Dues Certificate timelines. Visit our{" "}
                  <Link
                    href="https://www.settleloans.in/tata-capital-personal-loan-settlement"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    Tata Capital personal loan settlement guide
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://www.settleloans.in/loan-settlement-for-salaried-people"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    loan settlement guide for salaried employees
                  </Link>
                  .
                </li>
              </ul>
            </section>

            {/* Section 9: FAQs */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Tata Capital Personal Loan Bounce Charges FAQs
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
                Stop Losing ₹3,000+ Monthly to Tata Capital Bounce &amp; Penal Fees
              </div>
              <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-6">
                Carry ₹3,00,000 or more across Tata Capital, bank personal loans, or credit cards? Evaluate your consolidated settlement options confidentially.
              </p>
              <a
                href="#settlement-assessment"
                className="inline-block bg-[#1F5EFF] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Check My Settlement Eligibility
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
              <strong>Disclaimer:</strong> SettleLoans is an independent debt resolution and legal advisory platform and is not affiliated with Tata Capital Limited. All fee figures reflect Tata Capital&apos;s published Personal Loan schedule of charges checked on 11 November 2026 and remain subject to company updates and your specific Key Fact Statement (KFS).
            </div>
          </article>

          {/* Right Column: Sticky Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-6 text-white border border-white/10 shadow-xl">
                <div className="text-lg font-black mb-2">
                  Tata Capital Calculator
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-5">
                  Model Tata Capital&apos;s Rs. 600 + GST bounce fee, bank return deductions, and 3% monthly penal charges in seconds.
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
                      href="https://www.settleloans.in/tata-capital-personal-loan-settlement"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Tata Capital Loan Settlement Guide
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
                      href="https://www.settleloans.in/idfc-first-personal-loan-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • IDFC FIRST PL Bounce Charges
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/loan-overdue-nach-bounce-immediate-steps"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Immediate Steps After NACH Bounce
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
