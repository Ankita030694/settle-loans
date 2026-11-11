import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import LoanSettlementAssessmentFunnel from "@/components/LoanSettlementAssessmentFunnel";

export const metadata: Metadata = {
  title: "ICICI Personal Loan EMI Bounce Charges | SettleLoans",
  description: "Check official ICICI Bank personal loan EMI and NACH bounce charges (Rs. 500 + GST), 5% p.a. penal charges, mandate swap fees, and settlement steps.",
  alternates: {
    canonical: "https://www.settleloans.in/icici-personal-loan-emi-bounce-charges",
  },
  openGraph: {
    title: "ICICI Personal Loan EMI Bounce Charges | SettleLoans",
    description: "Check official ICICI Bank personal loan EMI and NACH bounce charges (Rs. 500 + GST), 5% p.a. penal charges, mandate swap fees, and settlement steps.",
    url: "https://www.settleloans.in/icici-personal-loan-emi-bounce-charges",
    type: "article",
    images: [
      {
        url: "https://www.settleloans.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ICICI Bank Personal Loan EMI Bounce Charges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ICICI Personal Loan EMI Bounce Charges | SettleLoans",
    description: "Check official ICICI Bank personal loan EMI and NACH bounce charges (Rs. 500 + GST), 5% p.a. penal charges, mandate swap fees, and settlement steps.",
    images: ["https://www.settleloans.in/og-image.jpg"],
  },
};

const tocItems = [
  { id: "icici-service-charge-table", title: "ICICI Official Charge Table" },
  { id: "bounce-vs-nmmp-charge", title: "Rs. 500 Bounce & Rs. 800 NMMP" },
  { id: "five-percent-penal-rule", title: "ICICI 5% p.a. Penal Charge Rule" },
  { id: "imobile-salary-sweeps", title: "ICICI Salary Sweeps vs e-NACH" },
  { id: "six-month-cost-table", title: "6-Month Overdue Cost Math" },
  { id: "manual-payment-imobile", title: "Clearing Overdue via iMobile Pay" },
  { id: "disputing-multiple-bounces", title: "Service Request & Waiver Steps" },
  { id: "icici-salaried-settlement", title: "ICICI Salaried Settlement Path" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
  {
    q: "How much is the ICICI Bank personal loan EMI bounce charge?",
    a: "According to ICICI Bank's official Personal Loan Service Charges schedule, the Cheque / NACH / ECS / Auto-Debit bounce charge is Rs. 500 per failed instance plus 18% GST, totaling Rs. 590 per dishonoured presentation.",
  },
  {
    q: "What is ICICI Bank's Rs. 800 Non-Maintenance of Mode of Payment (NMMP) charge?",
    a: "In addition to per-bounce charges, ICICI Bank's personal loan schedule includes an Rs. 800 plus 18% GST (Rs. 944) Non-Maintenance of Mode of Payment (NMMP) fee when a borrower cancels, freezes, or disrupts the registered auto-debit mandate without registering a valid replacement repayment mode.",
  },
  {
    q: "What late payment penal charge does ICICI Bank apply on missed personal loan EMIs?",
    a: "Under ICICI Bank's RBI-compliant Penal Charges schedule for retail personal loans, overdue EMIs attract a late payment penal charge of 5% per annum plus 18% GST calculated strictly on the overdue installment amount for the delayed days. This charge is non-capitalized and never added to principal.",
  },
  {
    q: "Why did my external savings bank also charge me when my ICICI personal loan bounced?",
    a: "If your ICICI personal loan pulls monthly installments via e-NACH from an HDFC, SBI, Axis, or Kotak salary account and your balance is short, ICICI logs Rs. 500 + GST on your loan account while your destination bank independently deducts its inward NACH return charge (commonly Rs. 295 to Rs. 590) from your savings balance.",
  },
  {
    q: "How much does ICICI Bank charge to swap my personal loan NACH bank account?",
    a: "ICICI Bank charges a Repayment Mode Swap fee of Rs. 500 per transaction plus 18% GST (Rs. 590) when you shift your active personal loan auto-debit instruction from one bank account to another.",
  },
  {
    q: "How can I pay a bounced ICICI personal loan EMI manually before another debit hits?",
    a: "Open the iMobile Pay app or ICICI Bank Internet Banking, go to Loans -> Personal Loan -> Pay Overdue EMI, or use ICICI Bank's official Click-to-Pay / NEFT loan payment channel at least 48 hours before the next NACH presentation window so automated retries are suppressed.",
  },
  {
    q: "What happens if both my salary account and my personal loan are with ICICI Bank?",
    a: "When an internal auto-debit instruction fails on an ICICI Bank salary account, the core banking system places an automated lien or hold for the overdue EMI plus Rs. 590 bounce fee. Subsequent UPI credits, expense reimbursements, or next month's salary credit are automatically appropriated against that lien.",
  },
  {
    q: "Can I get a first-time ICICI personal loan bounce charge reversed?",
    a: "If you have maintained a clean repayment track record and your EMI bounced due to a same-day corporate payroll delay or technical clearing failure, clear the overdue EMI via iMobile Pay immediately and raise a Service Request (SR) attaching your bank statement to request a one-time goodwill waiver of the Rs. 590 charge.",
  },
  {
    q: "Does ICICI Bank waive bounce charges and penal charges during personal loan settlement?",
    a: "Yes. When an unsecured ICICI personal loan enters Non-Performing Asset (NPA) status after 90+ days past due because of verified salaried hardship such as job loss or pay cuts, negotiated settlements typically waive 100% of accumulated Rs. 500 bounce charges, NMMP fees, and penal charges while settling principal at an agreed haircut.",
  },
  {
    q: "When should a salaried ICICI borrower choose settlement instead of loan restructuring?",
    a: "Choose restructuring or manual regularization if your income disruption is temporary or your total unsecured debt is under Rs. 3,00,000. Consider formal personal loan settlement only when combined unsecured liabilities across ICICI personal loans, credit cards, and other lenders exceed Rs. 3,00,000 and monthly EMIs are permanently unsustainable.",
  },
  {
    q: "Are physical loan statements charged extra at ICICI Bank branches?",
    a: "Yes. Requesting physical statement or amortization schedule printouts at an ICICI Bank branch typically attracts around Rs. 200 plus 18% GST per instance, whereas downloading your statement and overdue fee breakup via iMobile Pay or ICICI Internet Banking is completely free.",
  },
];

export default function IciciPersonalLoanEmiBounceChargesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.settleloans.in/icici-personal-loan-emi-bounce-charges#breadcrumb",
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
            "name": "ICICI Personal Loan EMI Bounce Charges",
            "item": "https://www.settleloans.in/icici-personal-loan-emi-bounce-charges"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.settleloans.in/icici-personal-loan-emi-bounce-charges#article",
        "headline": "ICICI Bank Personal Loan EMI & Auto-Debit Bounce Charges (Official Schedule)",
        "description": "Complete guide to ICICI Bank personal loan EMI bounce fees (Rs. 500 + GST), Rs. 800 NMMP mandate fees, 5% p.a. penal charges, iMobile sweeps, and salaried settlement.",
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
          "@id": "https://www.settleloans.in/icici-personal-loan-emi-bounce-charges"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.settleloans.in/icici-personal-loan-emi-bounce-charges#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much is the ICICI Bank personal loan EMI bounce charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "According to ICICI Bank's official Personal Loan Service Charges schedule, the Cheque / NACH / ECS / Auto-Debit bounce charge is Rs. 500 per failed instance plus 18% GST, totaling Rs. 590 per dishonoured presentation."
            }
          },
          {
            "@type": "Question",
            "name": "What is ICICI Bank's Rs. 800 Non-Maintenance of Mode of Payment (NMMP) charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In addition to per-bounce charges, ICICI Bank's personal loan schedule includes an Rs. 800 plus 18% GST (Rs. 944) Non-Maintenance of Mode of Payment (NMMP) fee when a borrower cancels, freezes, or disrupts the registered auto-debit mandate without registering a valid replacement repayment mode."
            }
          },
          {
            "@type": "Question",
            "name": "What late payment penal charge does ICICI Bank apply on missed personal loan EMIs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under ICICI Bank's RBI-compliant Penal Charges schedule for retail personal loans, overdue EMIs attract a late payment penal charge of 5% per annum plus 18% GST calculated strictly on the overdue installment amount for the delayed days. This charge is non-capitalized and never added to principal."
            }
          },
          {
            "@type": "Question",
            "name": "Why did my external savings bank also charge me when my ICICI personal loan bounced?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If your ICICI personal loan pulls monthly installments via e-NACH from an HDFC, SBI, Axis, or Kotak salary account and your balance is short, ICICI logs Rs. 500 + GST on your loan account while your destination bank independently deducts its inward NACH return charge (commonly Rs. 295 to Rs. 590) from your savings balance."
            }
          },
          {
            "@type": "Question",
            "name": "How much does ICICI Bank charge to swap my personal loan NACH bank account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ICICI Bank charges a Repayment Mode Swap fee of Rs. 500 per transaction plus 18% GST (Rs. 590) when you shift your active personal loan auto-debit instruction from one bank account to another."
            }
          },
          {
            "@type": "Question",
            "name": "How can I pay a bounced ICICI personal loan EMI manually before another debit hits?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Open the iMobile Pay app or ICICI Bank Internet Banking, go to Loans -> Personal Loan -> Pay Overdue EMI, or use ICICI Bank's official Click-to-Pay / NEFT loan payment channel at least 48 hours before the next NACH presentation window so automated retries are suppressed."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if both my salary account and my personal loan are with ICICI Bank?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When an internal auto-debit instruction fails on an ICICI Bank salary account, the core banking system places an automated lien or hold for the overdue EMI plus Rs. 590 bounce fee. Subsequent UPI credits, expense reimbursements, or next month's salary credit are automatically appropriated against that lien."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get a first-time ICICI personal loan bounce charge reversed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you have maintained a clean repayment track record and your EMI bounced due to a same-day corporate payroll delay or technical clearing failure, clear the overdue EMI via iMobile Pay immediately and raise a Service Request (SR) attaching your bank statement to request a one-time goodwill waiver of the Rs. 590 charge."
            }
          },
          {
            "@type": "Question",
            "name": "Does ICICI Bank waive bounce charges and penal charges during personal loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. When an unsecured ICICI personal loan enters Non-Performing Asset (NPA) status after 90+ days past due because of verified salaried hardship such as job loss or pay cuts, negotiated settlements typically waive 100% of accumulated Rs. 500 bounce charges, NMMP fees, and penal charges while settling principal at an agreed haircut."
            }
          },
          {
            "@type": "Question",
            "name": "When should a salaried ICICI borrower choose settlement instead of loan restructuring?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Choose restructuring or manual regularization if your income disruption is temporary or your total unsecured debt is under Rs. 3,00,000. Consider formal personal loan settlement only when combined unsecured liabilities across ICICI personal loans, credit cards, and other lenders exceed Rs. 3,00,000 and monthly EMIs are permanently unsustainable."
            }
          },
          {
            "@type": "Question",
            "name": "Are physical loan statements charged extra at ICICI Bank branches?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Requesting physical statement or amortization schedule printouts at an ICICI Bank branch typically attracts around Rs. 200 plus 18% GST per instance, whereas downloading your statement and overdue fee breakup via iMobile Pay or ICICI Internet Banking is completely free."
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
              Verified Lender Schedule • Checked 11 Nov 2026
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#DEDEDE] mb-6 leading-[1.12] tracking-tight">
              ICICI Bank Personal Loan EMI &amp; Auto-Debit Bounce Charges
            </h1>
            <p className="text-base md:text-xl text-[#DEDEDE]/85 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
              Detailed guide to ICICI Bank&apos;s Rs. 500 (+ 18% GST) EMI dishonour fee, Rs. 800 Non-Maintenance of Mode of Payment charge, 5% p.a. overdue penal rule, iMobile Pay lien sweeps, and salaried settlement options.
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
                Calculate ICICI Bounce Cost
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
                  ICICI Bank EMI Bounce Charges
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
            {/* Section 1: Official ICICI Table */}
            <section id="icici-service-charge-table" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                ICICI Bank Personal Loan Service &amp; Bounce Charge Schedule
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                ICICI Bank disburses a large volume of pre-approved Insta Personal Loans and corporate salary-linked personal loans through iMobile Pay and Internet Banking. While disbursement takes minutes, salaried borrowers who experience a job transition, variable-pay cut, or delayed salary credit quickly encounter ICICI Bank&apos;s automated NACH and direct-debit fee framework.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-6">
                Below is the verified ICICI Bank Personal Loan Schedule of Service Charges checked directly against ICICI Bank&apos;s official tariff publication on 11 November 2026:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-5">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#2E2E2E] text-white">
                      <th className="p-4 font-bold">ICICI Personal Loan Charge Category</th>
                      <th className="p-4 font-bold">Official Tariff (Excl. GST)</th>
                      <th className="p-4 font-bold">Total With 18% GST</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Cheque / ECS / NACH / Auto-Debit Bounce</td>
                      <td className="p-4 text-slate-700">Rs. 500 per instance</td>
                      <td className="p-4 font-semibold text-red-700">Rs. 590 per failed debit</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Late Payment Penal Charges</td>
                      <td className="p-4 text-slate-700">5% per annum on overdue EMI amount</td>
                      <td className="p-4 font-semibold text-slate-800">5.90% p.a. incl. GST (non-capitalized)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Non-Maintenance of Mode of Payment (NMMP)</td>
                      <td className="p-4 text-slate-700">Rs. 800 when mandate is disrupted</td>
                      <td className="p-4 font-semibold text-red-700">Rs. 944</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Repayment Mode Swap Charges</td>
                      <td className="p-4 text-slate-700">Rs. 500 per swap transaction</td>
                      <td className="p-4 font-semibold text-slate-800">Rs. 590</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Physical Statement / Amortization Schedule</td>
                      <td className="p-4 text-slate-700">Rs. 200 at branch (Rs. 0 on iMobile Pay)</td>
                      <td className="p-4 font-semibold text-slate-800">Rs. 236 branch / Free digital</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs md:text-sm text-slate-600">
                <strong>Official Source Verification:</strong> Verified against{" "}
                <a
                  href="https://www.icici.bank.in/personal-banking/loans/personal-loan/service-charges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  ICICI Bank Personal Loan Service Charges Page
                </a>{" "}
                on <strong>11 November 2026</strong>. Always cross-check the Key Fact Statement (KFS) generated when your loan was sanctioned for scheme-specific conditions.
              </div>
            </section>

            {/* Funnel Near Hero */}
            <div className="mb-14">
              <div className="p-5 rounded-t-3xl bg-blue-50 border border-b-0 border-blue-200 text-sm text-slate-800">
                <strong>Salaried Debt Relief Check:</strong> Juggling an ICICI personal loan alongside top-up loans, credit cards, or NBFC EMIs? SettleLoans handles consolidated debt negotiation when your <strong>total combined unsecured debt is ₹3,00,000 or higher</strong>. Complete the quick eligibility check below.
              </div>
              <LoanSettlementAssessmentFunnel className="!mt-0 !rounded-t-none" />
            </div>

            {/* Section 2: Bounce Fee vs Rs. 800 NMMP Charge */}
            <section id="bounce-vs-nmmp-charge" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Why ICICI Charges Both Rs. 500 Bounce &amp; Rs. 800 NMMP Fees
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                One quirk in ICICI Bank&apos;s Personal Loan Schedule of Charges catches thousands of salaried borrowers off guard every year: the <strong>Rs. 800 (+ 18% GST = Rs. 944) Non-Maintenance of Mode of Payment (NMMP)</strong> charge. Understanding the difference between a standard Rs. 590 bounce fee and the Rs. 944 NMMP fee prevents an expensive unforced error.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                When borrowers read online forum advice telling them to &quot;log into NPCI ONMAGS or netbanking and cancel your e-NACH mandate so you stop paying bounce charges,&quot; they trigger the exact clauseNMMP was built for:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    Standard Rs. 500 (+ GST) Bounce Fee
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Applies when your registered repayment mandate (ICICI auto-debit, NACH, ECS, or post-dated cheque) remains active, ICICI presents the monthly EMI on the due date, and the debit fails due to insufficient clear balance or account blocks.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-red-50/60 border border-red-200">
                  <h3 className="text-lg font-black text-red-950 mb-2">
                    Rs. 800 (+ GST) NMMP Mandate Fee
                  </h3>
                  <p className="text-sm md:text-base text-red-950 leading-relaxed">
                    Applies when you close the linked bank account, unilaterally revoke your e-NACH mandate, or place a stop-payment instruction without simultaneously completing a Rs. 500 (+ GST) Repayment Mode Swap to an active bank account.
                  </p>
                </div>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Before attempting unilateral mandate cancellation on an active salary account, read our legal compliance breakdown on{" "}
                <Link
                  href="https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  salary account ECS and NACH mandate cancellation rules
                </Link>
                .
              </p>
            </section>

            {/* Section 3: ICICI 5% p.a. Penal Charge Rule */}
            <section id="five-percent-penal-rule" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                ICICI Bank&apos;s 5% Per Annum Penal Charge Explained
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Compare ICICI Bank&apos;s late payment penal rate against NBFC competitors and you will notice an important difference: whereas several NBFCs charge 24% to 36% per annum on overdue installments, ICICI Bank&apos;s published personal loan penal charge is <strong>5% per annum plus 18% GST</strong> on the overdue EMI amount for the actual duration of delay.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                What does 5% per annum mean in rupees on a typical salaried EMI? Suppose your monthly ICICI personal loan EMI is <strong>Rs. 20,000</strong> and remains unpaid for 30 days:
              </p>
              <ul className="space-y-3 bg-blue-50/70 border border-blue-200 rounded-2xl p-6 mb-6 text-sm md:text-base text-slate-800">
                <li>
                  • <strong>30-Day Penal Charge:</strong> Rs. 20,000 × (5% ÷ 12) = Rs. 83.33 + 18% GST = <strong>Rs. 98</strong>.
                </li>
                <li>
                  • <strong>ICICI Auto-Debit Bounce Fee (if presented twice in 30 days):</strong> 2 × Rs. 590 = <strong>Rs. 1,180</strong>.
                </li>
                <li>
                  • <strong>External Salary Bank NACH Return Fee (if linked to another private bank):</strong> 2 × Rs. 590 = <strong>Rs. 1,180</strong>.
                </li>
              </ul>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Notice the insight hidden in those numbers: for an ICICI Bank borrower, <strong>over 95% of your monthly penalty bleed comes from repeated Rs. 590 bounce events and destination-bank return fees</strong>, not from the 5% p.a. overdue penal rate! Stopping repeat NACH presentations (either by clearing the overdue EMI via iMobile Pay promptly when cash flow recovers, or by entering a structured multi-loan resolution when debt exceeds Rs. 3,00,000) saves far more money than worrying about the 5% penal line item alone.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Also note how RBI&apos;s Fair Lending Practice framework protects you on ICICI personal loans: ICICI Bank must account for the 5% per annum overdue penalty strictly as a standalone penal charge rather than compounding it into your principal balance. That means your base loan interest rate does not permanently step up after a missed installment, and uncollected penal charges remain clearly segregated on your loan statement when you download your account summary from ICICI Internet Banking.
              </p>
            </section>

            {/* Section 4: ICICI Salary Account Sweeps vs External e-NACH */}
            <section id="imobile-salary-sweeps" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                ICICI Salary Account Hold Sweeps vs External Bank Mandates
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                How ICICI Bank attempts to collect a bounced installment depends directly on where your employer deposits your monthly paycheck, and whether you hold a single Insta Personal Loan or a layered personal loan plus top-up loan combination:
              </p>
              <div className="space-y-5 mb-6">
                <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    Internal ICICI Wealth / Corporate Salary Account Auto-Debit
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3">
                    Most ICICI Insta Personal Loans are disbursed directly into an ICICI salary account with repayment scheduled on the 5th or 10th of every month. If your account lacks sufficient clear balance on the morning of the due date, ICICI posts the Rs. 590 bounce fee and places an automated <strong>lien or hold</strong> on your savings account. Inside iMobile Pay, you will notice your &quot;Effective Available Balance&quot; reduced by the unpaid EMI plus charges, even if your ledger balance shows positive rupees.
                  </p>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Any incoming IMPS transfer, expense reimbursement from your employer, tax refund, or next month&apos;s salary credit is swept immediately against that hold. Worse still, if you hold both a primary ICICI personal loan and a pre-approved ICICI top-up personal loan scheduled on the same due date, two separate auto-debits fail simultaneously, generating <strong>Rs. 1,180 in single-day bounce charges</strong> and locking both installments on hold. Read our detailed breakdown of{" "}
                    <Link
                      href="https://www.settleloans.in/bank-freeze-salary-account-loan-default"
                      className="text-[#1F5EFF] font-semibold underline"
                    >
                      salary account liens and holds during loan default
                    </Link>
                    .
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    External Bank e-NACH Mandate (Salary in HDFC, SBI, Axis, or Kotak)
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3">
                    When you switched jobs and opened a new corporate salary account at another bank, or registered an external e-Mandate at disbursement, ICICI submits NACH debit files through NPCI clearing. On your external bank passbook, failed presentations typically appear under narrations such as <code>NACH-RTN-ICICIBANK</code> or <code>ACH DR RETURN CHARGES</code>.
                  </p>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    While ICICI Bank cannot freeze or mark an internal lien inside your external bank account, every failed NACH presentation triggers dual deductions: Rs. 590 added to your ICICI loan overdue statement plus Rs. 295 to Rs. 590 deducted immediately from your destination savings account, accompanied by automated IVR calls and Click-to-Pay SMS reminders.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: 6-Month Cost Table */}
            <section id="six-month-cost-table" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                6-Month Cost Projection on a Bounced ICICI Personal Loan
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Let us trace a salaried manager servicing an ICICI personal loan of Rs. 5,50,000 (remaining principal Rs. 4,10,000, monthly EMI <strong>Rs. 13,400</strong>) linked via e-NACH to an external private salary account, assuming 2 NACH presentations per unpaid month:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Overdue Stage</th>
                      <th className="p-3.5 font-bold">ICICI Bounce Fees (+GST)</th>
                      <th className="p-3.5 font-bold">Salary Bank Returns (+GST)</th>
                      <th className="p-3.5 font-bold">5% p.a. Penal (+GST)</th>
                      <th className="p-3.5 font-bold">Total Penalty Leakage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 1 (2 bounces, 30 DPD)</td>
                      <td className="p-3.5">Rs. 1,180</td>
                      <td className="p-3.5">Rs. 1,180</td>
                      <td className="p-3.5">Rs. 66</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 2,426</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 3 (6 bounces, 90 DPD NPA)</td>
                      <td className="p-3.5">Rs. 3,540</td>
                      <td className="p-3.5">Rs. 3,540</td>
                      <td className="p-3.5">Rs. 395</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 7,475</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 6 (12 bounces, 180 DPD)</td>
                      <td className="p-3.5">Rs. 7,080</td>
                      <td className="p-3.5">Rs. 7,080</td>
                      <td className="p-3.5">Rs. 1,384</td>
                      <td className="p-3.5 font-black text-red-800">Rs. 15,544</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Run your exact EMI, principal, and other card/PL balances inside our{" "}
                <Link
                  href="https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  Personal Loan EMI Bounce Charges Calculator
                </Link>{" "}
                to see your personalized 3-month and 6-month trajectory.
              </p>
            </section>

            {/* Section 6: Manual Payment via iMobile Pay */}
            <section id="manual-payment-imobile" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                How to Clear an Overdue ICICI EMI &amp; Suppress NACH Retries
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                If your salary simply arrived three days late and you have the funds to regularize your ICICI personal loan, take these steps immediately rather than waiting for an automated retry:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Pay Inside iMobile Pay Under &quot;Loans -&gt; Pay Overdue&quot;:</strong> Direct overdue clearance updates your 12-character alphanumeric/numeric ICICI loan account ledger in near real-time and prevents your account from rolling past 30 DPD into SMA-1 bureau reporting.
                </li>
                <li>
                  <strong>Avoid Unverified WhatsApp Personal UPI IDs:</strong> Only pay through iMobile Pay, logged-in ICICI Internet Banking, or verified `@icici` official loan biller flows that display your exact loan account number and borrower name.
                </li>
                <li>
                  <strong>Swap Your Mandate Properly When Changing Salary Banks:</strong> If your new employer pays into HDFC or SBI while your old ICICI salary account now sits empty, pay the one-time Rs. 500 + GST Repayment Mode Swap fee rather than letting the old ICICI account bounce every month.
                </li>
              </ul>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                When making an urgent manual payment from an external bank account because you do not hold an ICICI savings account, you can also transfer the exact overdue installment via NEFT or IMPS directly to your 16-character ICICI Personal Loan account identifier using ICICI Bank&apos;s designated retail loan collection IFSC code shown on your sanction statement, or use Bharat Bill Payment System (BBPS) under the &quot;Loan Repayment&quot; category by selecting ICICI Bank Loans. Always save a screenshot of the Bharat BillPay reference ID or UTR number so you can present instant proof if an outsourced tele-collection agency calls before the ledger batch refreshes overnight.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Additionally, if you are comparing the cost of keeping your ICICI personal loan running versus closing it early from a family loan or annual bonus after two or three painful bounces, check your loan&apos;s seasoning window: ICICI Bank&apos;s service schedule levies a 3% + GST foreclosure fee on principal outstanding during the initial lock-in period, whereas many corporate salaried variants reduce prepayment penalties to nil after 12 to 24 successfully paid EMIs as specified in your Key Fact Statement.
              </p>
            </section>

            {/* Section 7: Service Request & Waiver Steps */}
            <section id="disputing-multiple-bounces" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Raising an ICICI Service Request for Unfair Bounce Fees
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Whenever ICICI Bank levies multiple Rs. 590 bounce fees within a single week despite you notifying customer care of a technical error, or when an early-morning sweep bounced hours before your corporate payroll batch credited on the exact due date, follow ICICI&apos;s three-tier escalation channel:
              </p>
              <ol className="space-y-4 list-decimal pl-5 text-base text-slate-700 mb-6">
                <li>
                  <strong>Level 1 (Customer Care / iMobile Service Request):</strong> Clear the overdue EMI first so your CIBIL Days Past Due (DPD) stops climbing. Generate a Service Request (SR) number inside iMobile Pay or ICICI Internet Banking requesting a goodwill or technical reversal of the Rs. 590 bounce charge, attaching PDF bank statements proving same-day salary credit or clearing timeout.
                </li>
                <li>
                  <strong>Level 2 (Head of Service Quality / Grievance Redressal):</strong> If Level 1 closes your SR with a generic rejection despite clear documentary evidence, escalate using your SR reference through ICICI Bank&apos;s official Grievance Redressal web form citing RBI Fair Lending Practice norms on transparent, non-punitive penal charges and your history of timely EMI payments.
                </li>
                <li>
                  <strong>Level 3 (Principal Nodal Officer &amp; RBI CMS):</strong> Unresolved disputes involving duplicate NACH presentations executed after manual payment clearance, or un-disclosed charges outside your Key Fact Statement, can be escalated to ICICI Bank&apos;s Principal Nodal Officer and, if unresolved after 30 days, to the Reserve Bank Integrated Ombudsman Scheme (RB-IOS) portal.
                </li>
              </ol>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Keep in mind how CIBIL reporting interacts with ICICI&apos;s monthly billing snapshot: an EMI that bounces on the 5th and is cleared via iMobile Pay on the 7th may reflect 2 Days Past Due for that month, which has a minor, short-lived score effect compared to crossing 30 DPD (Special Mention Account 1), 60 DPD (SMA-2), or 90 DPD (Non-Performing Asset). Read our tactical guide on{" "}
                <Link
                  href="https://www.settleloans.in/stop-emi-bounce-cycle-for-good"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  how to break out of a recurring EMI bounce cycle
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.settleloans.in/reminder-calls-after-emi-bounce"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  managing bank reminder calls after an EMI bounce
                </Link>
                .
              </p>
            </section>

            {/* Section 8: Salaried Settlement Path */}
            <section id="icici-salaried-settlement" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                ICICI Personal Loan Settlement Path for Salaried Borrowers
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Many corporate employees hold not just one ICICI personal loan, but also an ICICI pre-approved top-up loan, an ICICI credit card, and one or two NBFC loans taken to bridge previous EMIs. Once total monthly obligations cross 60% to 80% of net take-home pay, or after a layoff, startup shutdown, or medical emergency, continuing to feed partial EMIs only pays Rs. 590 bounce fees and interest without shrinking principal.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Remember how ICICI Bank&apos;s loan appropriation sequence works under standard retail loan terms: when an account is 60 or 90 days overdue and a recovery caller convinces you to pay &quot;just one EMI of Rs. 13,400 today to hold your file,&quot; that payment is applied toward accumulated bounce charges, penal charges, and overdue interest first, leaving your account still overdue the very next week with zero written closure commitment.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                When your <strong>combined unsecured debt across all personal loans, credit cards, and app loans is ₹3,00,000 or higher</strong>, SettleLoans structures a disciplined salaried resolution plan:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Safeguarding Household Cash Flow:</strong> Routing active salary inflows to a non-lender savings account prevents automated internal liens from wiping out rent and family essentials while negotiations proceed.
                </li>
                <li>
                  <strong>Consolidating Hardship Representation:</strong> Presenting verified income-drop, job-loss, or medical records to ICICI Bank&apos;s authorized recovery and settlement officers once the account enters the 90+ DPD NPA resolution window.
                </li>
                <li>
                  <strong>Negotiating Full Penalty Waiver &amp; Principal Haircut:</strong> Securing 100% waiver of uncollected bounce, NMMP, and 5% penal charges alongside a realistic one-time or short-installment settlement offer (typically 42% to 60% of principal depending on case merits; never guaranteed), backed by a formal ICICI Bank settlement sanction letter. Explore our{" "}
                  <Link
                    href="https://www.settleloans.in/loan-settlement/icici-bank"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    ICICI Bank loan settlement hub
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
                ICICI Personal Loan EMI Bounce Charges FAQs
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
                Stop Losing ₹1,180+ Every Month to ICICI Bounce Cycles
              </div>
              <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-6">
                Carry ₹3,00,000 or more across ICICI personal loans, cards, or NBFC loans? Check your structured settlement options confidentially.
              </p>
              <a
                href="#settlement-assessment"
                className="inline-block bg-[#1F5EFF] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Evaluate My Settlement Options
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
              <strong>Disclaimer:</strong> SettleLoans is an independent debt resolution and legal advisory platform and is not affiliated with ICICI Bank Limited. Service charges cited above reflect ICICI Bank&apos;s published Personal Loan Service Charges schedule checked on 11 November 2026 and remain subject to bank revision and your loan&apos;s Key Fact Statement (KFS).
            </div>
          </article>

          {/* Right Column: Sticky Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-6 text-white border border-white/10 shadow-xl">
                <div className="text-lg font-black mb-2">
                  ICICI Bounce Calculator
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-5">
                  Compute exact Rs. 500 + GST ICICI bounce fees, bank NACH return deductions, and 5% p.a. penal charges in 10 seconds.
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
                      href="https://www.settleloans.in/loan-settlement/icici-bank"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • ICICI Bank Loan Settlement Hub
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/hdfc-personal-loan-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • HDFC Bank PL Bounce Charges
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/axis-bank-personal-loan-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Axis Bank PL Bounce Charges
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/sbi-personal-loan-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • SBI Xpress Credit Bounce Fees
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
