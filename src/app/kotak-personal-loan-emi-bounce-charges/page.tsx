import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import LoanSettlementAssessmentFunnel from "@/components/LoanSettlementAssessmentFunnel";

export const metadata: Metadata = {
  title: "Kotak Personal Loan EMI Bounce Charges | SettleLoans",
  description: "Check official Kotak Mahindra Bank personal loan EMI bounce charges (Rs. 750 incl. tax), 8% p.a. penal charges, mandate swaps, and settlement paths.",
  alternates: {
    canonical: "https://www.settleloans.in/kotak-personal-loan-emi-bounce-charges",
  },
  openGraph: {
    title: "Kotak Personal Loan EMI Bounce Charges | SettleLoans",
    description: "Check official Kotak Mahindra Bank personal loan EMI bounce charges (Rs. 750 incl. tax), 8% p.a. penal charges, mandate swaps, and settlement paths.",
    url: "https://www.settleloans.in/kotak-personal-loan-emi-bounce-charges",
    type: "article",
    images: [
      {
        url: "https://www.settleloans.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kotak Mahindra Bank Personal Loan EMI Bounce Charges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kotak Personal Loan EMI Bounce Charges | SettleLoans",
    description: "Check official Kotak Mahindra Bank personal loan EMI bounce charges (Rs. 750 incl. tax), 8% p.a. penal charges, mandate swaps, and settlement paths.",
    images: ["https://www.settleloans.in/og-image.jpg"],
  },
};

const tocItems = [
  { id: "kotak-mitc-schedule", title: "Official Kotak MITC Schedule" },
  { id: "rs-750-dishonour-rule", title: "Why Kotak Bills Rs. 750 Flat" },
  { id: "kotak-eight-percent-penal", title: "8% p.a. Overdue Penal Charge" },
  { id: "kotak-salary-vs-external", title: "Kotak Salary SI vs External NACH" },
  { id: "six-month-rupee-projection", title: "6-Month Overdue Cost Table" },
  { id: "manual-payment-kotak-app", title: "Clearing Overdue on Kotak App" },
  { id: "kotak-waiver-grievance", title: "Claiming a Bounce Reversal" },
  { id: "kotak-apac-statement-codes", title: "APAC Statement & Return Codes" },
  { id: "kotak-cibil-sma-timeline", title: "CIBIL DPD & SMA Timeline" },
  { id: "kotak-salaried-settlement", title: "Salaried Kotak Settlement Path" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
  {
    q: "What is the Kotak Mahindra Bank personal loan EMI bounce charge?",
    a: "According to Kotak Mahindra Bank's published Personal Loan Fees and Charges and Most Important Terms and Conditions (MITC), the EMI bounce or NACH/ECS/Standing Instruction/Cheque dishonour charge is Rs. 750 per failed instance, inclusive of applicable taxes.",
  },
  {
    q: "Is 18% GST added on top of Kotak's Rs. 750 EMI bounce fee?",
    a: "Kotak Mahindra Bank's retail personal loan schedule explicitly lists the Rs. 750 EMI bounce / dishonour fee as inclusive of applicable taxes (corresponding to roughly Rs. 635.59 base charge plus Rs. 114.41 GST). Always verify your specific Sanction Letter and Key Fact Statement for legacy variants.",
  },
  {
    q: "How much penal charge does Kotak Mahindra Bank apply on delayed EMIs?",
    a: "Kotak Mahindra Bank levies a penal charge of 8% per annum plus 18% GST on the overdue EMI amount calculated for the actual number of days delayed past the scheduled due date. In compliance with RBI guidelines, this penal charge is not capitalized into principal.",
  },
  {
    q: "Why did I lose over Rs. 1,300 from one bounced Kotak personal loan EMI?",
    a: "If your Kotak personal loan pulls funds via e-NACH from an external salary bank such as HDFC, ICICI, or Axis and your balance falls short, Kotak posts Rs. 750 to your loan overdue charges while your external bank separately deducts Rs. 531 to Rs. 590 as an inward NACH return charge, costing Rs. 1,281 to Rs. 1,340 on a single failed debit.",
  },
  {
    q: "What are Kotak Mahindra Bank's personal loan due dates and swap fees?",
    a: "Kotak retail personal loans commonly fall due on the 2nd or 5th of every month. Changing your repayment bank account, payment instrument, or mandate structure attracts a swap fee of Rs. 500 plus 18% GST (Rs. 590) per instance.",
  },
  {
    q: "What happens if my Kotak Everyday, Ace, or Platina Salary Account misses an EMI?",
    a: "When both your corporate salary account (or Kotak 811 account) and your personal loan sit inside Kotak Mahindra Bank, a failed Standing Instruction places an immediate system hold or lien for the unpaid EMI plus the Rs. 750 dishonour fee. Any fresh salary credit or UPI inflow is automatically swept toward that hold.",
  },
  {
    q: "How can I pay a bounced Kotak personal loan EMI manually before another debit runs?",
    a: "Open the Kotak811 / Kotak Mobile Banking App or Kotak NetBanking, select Loans -> Personal Loan -> Pay Overdue, or use Kotak's official online loan repayment portal with your CRN/Loan Account Number at least 48 hours ahead of the next NACH retry batch.",
  },
  {
    q: "Can I get a first-time Rs. 750 Kotak EMI bounce charge waived?",
    a: "If your corporate salary was credited later on the exact due date after an early-morning sweep, or if an NPCI clearing glitch returned your mandate despite sufficient balance, clear the overdue EMI immediately and submit a service request via Kotak Customer Service or Level-2 Grievance Redressal with PDF bank statement proof.",
  },
  {
    q: "Are Kotak's foreclosure charges high if I try to refinance after EMI bounces?",
    a: "Yes. Kotak Mahindra Bank charges 4% plus GST on principal outstanding if foreclosed within the first 3 years (reducing to 2% plus GST after 3 years), and multiple recent EMI bounces usually disqualify borrowers from low-rate balance transfers anyway.",
  },
  {
    q: "Does Kotak Mahindra Bank waive Rs. 750 bounce fees during personal loan settlement?",
    a: "When an unsecured Kotak personal loan crosses 90 days past due into Non-Performing Asset (NPA) status due to genuine salaried hardship such as job loss, pay cuts, or hospitalization, negotiated settlements typically waive 100% of accumulated Rs. 750 bounce fees and 8% p.a. penal charges while settling principal at an agreed haircut.",
  },
  {
    q: "When can SettleLoans represent me for Kotak personal loan settlement?",
    a: "SettleLoans assists salaried borrowers whose combined unsecured debt across Kotak personal loans, credit cards, private bank loans, and NBFC loans is Rs. 3,00,000 or higher.",
  },
];

export default function KotakPersonalLoanEmiBounceChargesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.settleloans.in/kotak-personal-loan-emi-bounce-charges#breadcrumb",
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
            "name": "Kotak Personal Loan EMI Bounce Charges",
            "item": "https://www.settleloans.in/kotak-personal-loan-emi-bounce-charges"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.settleloans.in/kotak-personal-loan-emi-bounce-charges#article",
        "headline": "Kotak Mahindra Bank Personal Loan EMI & NACH Bounce Charges (Verified MITC)",
        "description": "Detailed guide to Kotak Mahindra Bank personal loan EMI bounce fees (Rs. 750 inclusive of taxes), 8% p.a. penal charges, salary holds, and settlement.",
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
          "@id": "https://www.settleloans.in/kotak-personal-loan-emi-bounce-charges"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.settleloans.in/kotak-personal-loan-emi-bounce-charges#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the Kotak Mahindra Bank personal loan EMI bounce charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "According to Kotak Mahindra Bank's published Personal Loan Fees and Charges and Most Important Terms and Conditions (MITC), the EMI bounce or NACH/ECS/Standing Instruction/Cheque dishonour charge is Rs. 750 per failed instance, inclusive of applicable taxes."
            }
          },
          {
            "@type": "Question",
            "name": "Is 18% GST added on top of Kotak's Rs. 750 EMI bounce fee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kotak Mahindra Bank's retail personal loan schedule explicitly lists the Rs. 750 EMI bounce / dishonour fee as inclusive of applicable taxes (corresponding to roughly Rs. 635.59 base charge plus Rs. 114.41 GST). Always verify your specific Sanction Letter and Key Fact Statement for legacy variants."
            }
          },
          {
            "@type": "Question",
            "name": "How much penal charge does Kotak Mahindra Bank apply on delayed EMIs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kotak Mahindra Bank levies a penal charge of 8% per annum plus 18% GST on the overdue EMI amount calculated for the actual number of days delayed past the scheduled due date. In compliance with RBI guidelines, this penal charge is not capitalized into principal."
            }
          },
          {
            "@type": "Question",
            "name": "Why did I lose over Rs. 1,300 from one bounced Kotak personal loan EMI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If your Kotak personal loan pulls funds via e-NACH from an external salary bank such as HDFC, ICICI, or Axis and your balance falls short, Kotak posts Rs. 750 to your loan overdue charges while your external bank separately deducts Rs. 531 to Rs. 590 as an inward NACH return charge, costing Rs. 1,281 to Rs. 1,340 on a single failed debit."
            }
          },
          {
            "@type": "Question",
            "name": "What are Kotak Mahindra Bank's personal loan due dates and swap fees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kotak retail personal loans commonly fall due on the 2nd or 5th of every month. Changing your repayment bank account, payment instrument, or mandate structure attracts a swap fee of Rs. 500 plus 18% GST (Rs. 590) per instance."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if my Kotak Everyday, Ace, or Platina Salary Account misses an EMI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When both your corporate salary account (or Kotak 811 account) and your personal loan sit inside Kotak Mahindra Bank, a failed Standing Instruction places an immediate system hold or lien for the unpaid EMI plus the Rs. 750 dishonour fee. Any fresh salary credit or UPI inflow is automatically swept toward that hold."
            }
          },
          {
            "@type": "Question",
            "name": "How can I pay a bounced Kotak personal loan EMI manually before another debit runs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Open the Kotak811 / Kotak Mobile Banking App or Kotak NetBanking, select Loans -> Personal Loan -> Pay Overdue, or use Kotak's official online loan repayment portal with your CRN/Loan Account Number at least 48 hours ahead of the next NACH retry batch."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get a first-time Rs. 750 Kotak EMI bounce charge waived?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If your corporate salary was credited later on the exact due date after an early-morning sweep, or if an NPCI clearing glitch returned your mandate despite sufficient balance, clear the overdue EMI immediately and submit a service request via Kotak Customer Service or Level-2 Grievance Redressal with PDF bank statement proof."
            }
          },
          {
            "@type": "Question",
            "name": "Are Kotak's foreclosure charges high if I try to refinance after EMI bounces?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Kotak Mahindra Bank charges 4% plus GST on principal outstanding if foreclosed within the first 3 years (reducing to 2% plus GST after 3 years), and multiple recent EMI bounces usually disqualify borrowers from low-rate balance transfers anyway."
            }
          },
          {
            "@type": "Question",
            "name": "Does Kotak Mahindra Bank waive Rs. 750 bounce fees during personal loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When an unsecured Kotak personal loan crosses 90 days past due into Non-Performing Asset (NPA) status due to genuine salaried hardship such as job loss, pay cuts, or hospitalization, negotiated settlements typically waive 100% of accumulated Rs. 750 bounce fees and 8% p.a. penal charges while settling principal at an agreed haircut."
            }
          },
          {
            "@type": "Question",
            "name": "When can SettleLoans represent me for Kotak personal loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SettleLoans assists salaried borrowers whose combined unsecured debt across Kotak personal loans, credit cards, private bank loans, and NBFC loans is Rs. 3,00,000 or higher."
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
              Verified Lender MITC • Checked 11 Nov 2026
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#DEDEDE] mb-6 leading-[1.12] tracking-tight">
              Kotak Mahindra Bank Personal Loan EMI &amp; NACH Bounce Charges
            </h1>
            <p className="text-base md:text-xl text-[#DEDEDE]/85 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
              Complete salaried guide to Kotak Mahindra Bank&apos;s Rs. 750 (tax-inclusive) EMI dishonour fee, 8% p.a. overdue penal charges, 2nd-and-5th due date payroll collisions, and legal settlement options when debt turns unmanageable.
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
                Calculate Kotak Bounce Drain
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
                  Kotak Personal Loan Bounce Charges
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
            {/* Section 1: Kotak MITC Schedule */}
            <section id="kotak-mitc-schedule" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Kotak Mahindra Bank Personal Loan Schedule of Charges
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Kotak Mahindra Bank actively markets instant digital personal loans, corporate tie-up personal loans, and balance-transfer personal loans to salaried employees earning Rs. 25,000 and above across metro and Tier-2 Indian cities. While Kotak&apos;s interest rates for prime corporate profiles are competitive, its flat <strong>Rs. 750 per instance EMI bounce charge</strong> sits higher than HDFC Bank, ICICI Bank, Axis Bank, and SBI.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-6">
                Every fee figure below has been verified directly against Kotak Mahindra Bank&apos;s official Personal Loan Fees and Charges schedule and Most Important Terms and Conditions (MITC) on 11 November 2026:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-5">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#2E2E2E] text-white">
                      <th className="p-4 font-bold">Kotak Personal Loan Fee Head</th>
                      <th className="p-4 font-bold">Official Published Tariff</th>
                      <th className="p-4 font-bold">Effective Outflow With GST</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">EMI Bounce / NACH / ECS / SI Dishonour</td>
                      <td className="p-4 text-slate-700">Rs. 750 per instance (inclusive of taxes)</td>
                      <td className="p-4 font-semibold text-red-700">Rs. 750 per failed presentation</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Penal Charges on Overdue Installments</td>
                      <td className="p-4 text-slate-700">8% per annum + GST on overdue amount</td>
                      <td className="p-4 font-semibold text-slate-800">9.44% p.a. incl. GST (non-capitalized)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Mandate / Instrument / Mode Swap Fee</td>
                      <td className="p-4 text-slate-700">Rs. 500 + GST per instance</td>
                      <td className="p-4 font-semibold text-slate-800">Rs. 590</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Lock-In &amp; Foreclosure (Up to 3 Years)</td>
                      <td className="p-4 text-slate-700">4% + GST on principal outstanding</td>
                      <td className="p-4 font-semibold text-slate-800">4.72% of principal</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Foreclosure Charge (After 3 Years)</td>
                      <td className="p-4 text-slate-700">2% + GST on principal outstanding</td>
                      <td className="p-4 font-semibold text-slate-800">2.36% of principal</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs md:text-sm text-slate-600">
                <strong>Official Source Verification:</strong> Checked against{" "}
                <a
                  href="https://www.kotak.bank.in/en/personal-banking/loans/personal-loan/fees-and-charges.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  Kotak Mahindra Bank Personal Loan Fees &amp; Charges (MITC)
                </a>{" "}
                on <strong>11 November 2026</strong>. Always inspect your individual Key Fact Statement (KFS) for scheme-specific overrides.
              </div>
            </section>

            {/* Funnel Near Hero */}
            <div className="mb-14">
              <div className="p-5 rounded-t-3xl bg-blue-50 border border-b-0 border-blue-200 text-sm text-slate-800">
                <strong>Salaried Debt Relief Check:</strong> Losing Rs. 750+ per Kotak NACH presentation while juggling other personal loans or credit cards? If your <strong>combined unsecured debt across all lenders is ₹3,00,000 or more</strong>, evaluate your structured settlement options below.
              </div>
              <LoanSettlementAssessmentFunnel className="!mt-0 !rounded-t-none" />
            </div>

            {/* Section 2: Rs. 750 Dishonour Rule */}
            <section id="rs-750-dishonour-rule" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                How Kotak&apos;s Rs. 750 Tax-Inclusive Bounce Fee Works
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                One helpful clarity in Kotak Mahindra Bank&apos;s MITC compared with peers is that its <strong>Rs. 750 EMI bounce fee is published inclusive of applicable GST</strong> (representing Rs. 635.59 base dishonour fee plus Rs. 114.41 GST at 18%). Even so, Rs. 750 net per dishonoured presentation is roughly 27% steeper than ICICI or Axis Bank&apos;s Rs. 590 gross fee and more than 2.5 times SBI&apos;s Rs. 295 fee.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Why do salaried Kotak borrowers get hit with multiple Rs. 750 entries in rapid succession? Because Kotak personal loans commonly lock monthly EMI presentation dates on the <strong>2nd or 5th of the calendar month</strong>. For employees at startups, consulting firms, IT services companies, or manufacturing units where payroll lands between the 7th and 10th of the month, a 2nd-of-the-month NACH mandate collides head-on with an empty pre-payday bank balance!
              </p>
              <div className="p-6 rounded-2xl bg-red-50/70 border border-red-200 mb-6 text-sm md:text-base text-red-950 space-y-2">
                <p>
                  <strong>The 2nd-and-8th Double Collision Example:</strong> Suppose your Kotak EMI due date is the 2nd and your salary lands on the 9th at HDFC Bank.
                </p>
                <p>
                  1. On the 2nd, Kotak presents e-NACH -&gt; Bounces (Rs. 750 Kotak fee + Rs. 531/590 HDFC bank inward return fee).
                </p>
                <p>
                  2. On the 7th or 8th, Kotak&apos;s automated retry batch re-presents e-NACH one day before your salary arrives -&gt; Bounces again (another Rs. 750 Kotak fee + another Rs. 531/590 bank inward return fee).
                </p>
                <p>
                  <strong>Result:</strong> Before your paycheck even hits on the 9th, you have lost <strong>Rs. 2,562 to Rs. 2,680</strong> in combined bounce fees for being just seven days out of sync with your employer&apos;s pay cycle!
                </p>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Whenever your employer&apos;s pay date sits permanently after the 5th, either keep one month&apos;s EMI buffer untouched in a dedicated repayment bank account or formally request a mandate/date modification at Kotak (factoring in the Rs. 500 + GST swap fee) rather than bleeding Rs. 1,300+ every single month.
              </p>
            </section>

            {/* Section 3: Kotak 8% Penal Charge */}
            <section id="kotak-eight-percent-penal" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Kotak&apos;s 8% Per Annum Overdue Penal Charge &amp; RBI Norms
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Alongside the Rs. 750 per-bounce charge, Kotak Mahindra Bank levies an overdue penal charge of <strong>8% per annum plus 18% GST</strong> on any EMI balance remaining unpaid past its scheduled due date. Under RBI&apos;s Fair Lending Practice directions on Penal Charges in Loan Accounts, two strict accounting guardrails apply to your Kotak loan:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200">
                  <h3 className="text-lg font-black text-[#1F5EFF] mb-2">
                    Actual Days Delayed on Overdue EMI Only
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    The 8% annual rate (approximately 0.0219% per day, or 0.667% per month before GST) is computed strictly on the overdue installment amount for the exact number of calendar days between the due date and clearance, never on your entire unmatured principal.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200">
                  <h3 className="text-lg font-black text-[#1F5EFF] mb-2">
                    Zero Compounding Into Principal
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Kotak cannot capitalize unpaid Rs. 750 bounce charges or 8% penal charges into your loan principal. Uncollected penalties accumulate in a standalone receivable bucket, making them prime candidates for 100% waiver during NPA settlement negotiations.
                  </p>
                </div>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Notice how small the 8% penal charge is relative to the Rs. 750 bounce fee: on a Rs. 16,000 missed EMI delayed by 30 days, the 8% penal charge is just Rs. 107 + Rs. 19 GST = <strong>Rs. 126</strong>, whereas two failed NACH attempts in that same month cost <strong>Rs. 1,500</strong> at Kotak alone!
              </p>
            </section>

            {/* Section 4: Kotak Salary SI vs External NACH */}
            <section id="kotak-salary-vs-external" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Kotak Corporate Salary / 811 Sweeps vs External Bank NACH
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Your day-to-day experience after a Kotak EMI bounce depends on whether Kotak holds your primary banking relationship:
              </p>
              <ul className="space-y-4 mb-6 text-base text-slate-700">
                <li className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <strong className="text-[#2E2E2E]">Internal Kotak Everyday / Ace / Platina Salary Account or Kotak 811:</strong> When your loan is linked via internal Standing Instruction to a Kotak savings or salary account under the same Customer Relationship Number (CRN), an unpaid due date triggers a Rs. 750 bounce fee and an automated <strong>lien/hold</strong> on your account balance. Any incoming salary credit, freelance payout, or UPI transfer is immediately swept against the held overdue EMI and fee. Read our legal guide on{" "}
                  <Link
                    href="https://www.settleloans.in/bank-freeze-salary-account-loan-default"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    bank salary account freezes and hold liens during loan default
                  </Link>
                  .
                </li>
                <li className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <strong className="text-[#2E2E2E]">External Bank e-NACH Mandate:</strong> When Kotak debits an external HDFC, ICICI, SBI, or Axis salary account via NPCI e-NACH, Kotak cannot freeze your external account, preserving your immediate control over household rent and groceries. However, every failed NACH presentation adds Rs. 750 to your Kotak loan ledger while triggering an immediate Rs. 295 to Rs. 590 inward return deduction at your external salary bank.
                </li>
              </ul>
            </section>

            {/* Section 5: 6-Month Rupee Projection */}
            <section id="six-month-rupee-projection" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                6-Month Overdue Cost Projection on a Kotak Personal Loan
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Let us trace a salaried marketing manager carrying a Rs. 5,00,000 Kotak personal loan (remaining principal Rs. 3,90,000, monthly EMI <strong>Rs. 14,500</strong>) linked via e-NACH to an external private salary bank charging Rs. 500 + GST per inward return, assuming 2 NACH presentations per unpaid month:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Delinquency Milestone</th>
                      <th className="p-3.5 font-bold">Kotak Bounce Fees (Incl. Tax)</th>
                      <th className="p-3.5 font-bold">Salary Bank Returns (+GST)</th>
                      <th className="p-3.5 font-bold">8% p.a. Penal (+GST)</th>
                      <th className="p-3.5 font-bold">Total Penalty Drain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 1 (2 bounces, 30 DPD)</td>
                      <td className="p-3.5">Rs. 1,500</td>
                      <td className="p-3.5">Rs. 1,180</td>
                      <td className="p-3.5">Rs. 114</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 2,794</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 3 (6 bounces, 90 DPD NPA)</td>
                      <td className="p-3.5">Rs. 4,500</td>
                      <td className="p-3.5">Rs. 3,540</td>
                      <td className="p-3.5">Rs. 684</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 8,724</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 6 (12 bounces, 180 DPD)</td>
                      <td className="p-3.5">Rs. 9,000</td>
                      <td className="p-3.5">Rs. 7,080</td>
                      <td className="p-3.5">Rs. 2,395</td>
                      <td className="p-3.5 font-black text-red-800">Rs. 18,475</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Test your exact Kotak EMI, overdue months, and combined debt across other cards or loans inside our{" "}
                <Link
                  href="https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  Personal Loan EMI Bounce Charges Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 6: Manual Payment on Kotak App */}
            <section id="manual-payment-kotak-app" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                How to Clear an Overdue Kotak EMI &amp; Block Repeat Retries
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                If your income is intact and the bounce resulted from a short-term timing mismatch, act swiftly so you avoid losing another Rs. 1,340 on a mid-month retry:
              </p>
              <ol className="space-y-4 list-decimal pl-5 text-base text-slate-700 mb-6">
                <li>
                  <strong>Pay Immediately via Kotak Mobile Banking App or Web Loan Portal:</strong> Navigate to &quot;Loans -&gt; Personal Loan -&gt; Pay Overdue&quot; or use Kotak Mahindra Bank&apos;s official online retail loan payment page entering your Loan Account Number (APAC number) via UPI or NetBanking.
                </li>
                <li>
                  <strong>Beat the 48-Hour NACH Dispatch Cutoff:</strong> Clearing a 2nd-date bounce on the 3rd or 4th (or a 5th-date bounce on the 6th or 7th) typically updates your APAC ledger before Kotak&apos;s secondary NACH file is transmitted to NPCI.
                </li>
                <li>
                  <strong>Never Pay Cash Without a System Receipt:</strong> If a field recovery representative visits or calls after a bounce, insist on paying strictly through the Kotak app or official BBPS biller flow so your payment credits instantly to your APAC ledger.
                </li>
              </ol>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                See our detailed guides on{" "}
                <Link
                  href="https://www.settleloans.in/loan-overdue-nach-bounce-immediate-steps"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  immediate steps right after a NACH bounce
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.settleloans.in/stop-emi-bounce-cycle-for-good"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  breaking the monthly EMI bounce cycle
                </Link>
                .
              </p>
            </section>

            {/* Section 7: Claiming a Bounce Reversal */}
            <section id="kotak-waiver-grievance" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Requesting a Kotak Rs. 750 Bounce Fee Reversal
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                When can a salaried Kotak borrower legitimately demand reversal of one or more Rs. 750 dishonour charges? Focus on three documented scenarios: (1) an early-morning Kotak SI ran hours before your employer&apos;s corporate salary batch hit your Kotak account on the exact due date; (2) your external bank statement proves you held clear funds above the EMI on the presentation date and the NACH return occurred due to a technical clearing error; or (3) Kotak fired a duplicate NACH presentation days after you had already paid the overdue installment online.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Clear the overdue installment first so your DPD counter stops advancing. Then log a formal request through Kotak&apos;s online Customer Service inbox attaching your timestamped bank statement and payment receipt. If Level-1 support sends an automated refusal, escalate through Kotak&apos;s Level-2 Grievance Redressal Officer and Level-3 Nodal Officer referencing your Service Request number and RBI&apos;s Fair Lending Practice guidelines on reasonable penal charges.
              </p>
            </section>

            {/* Section 7B: Reading Kotak APAC Statement & Return Codes */}
            <section id="kotak-apac-statement-codes" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Reading Kotak APAC Loan Statement &amp; NACH Return Codes
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Every retail personal loan sanctioned by Kotak Mahindra Bank is tracked internally under an alphanumeric <strong>APAC Loan Account Number</strong> linked to your master Customer Relationship Number (CRN). Downloading your detailed APAC Statement of Account from Kotak NetBanking or the Kotak Mobile Banking App lets you audit every single rupee billed after a missed due date instead of relying on verbal estimates quoted during collection reminder calls.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    Key NPCI Return Codes on Your Ledger
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Check why your debit failed: <strong>Code R01 (Insufficient Funds)</strong> indicates clear balance fell short of the EMI at clearing cutoff; <strong>Code R08 (Payment Stopped by Drawer)</strong> means a mandate pause or stop instruction blocked presentation; and <strong>Code R20 / Technical Clearing Timeout</strong> indicates a sponsor-bank or NPCI network failure eligible for full Rs. 750 fee reversal.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    Dual-Loan &amp; Top-Up Multiplier Trap
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Salaried borrowers who accepted a pre-approved Kotak Personal Loan Top-Up alongside an existing base Kotak Personal Loan or Kotak Credit Card auto-debit often have two or three separate mandates scheduled on the 2nd or 5th. One delayed payroll day triggers Rs. 750 per bounced loan plus multiple bank return debits, draining Rs. 2,600 to Rs. 4,000 in a single morning.
                  </p>
                </div>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                When inspecting your APAC ledger, verify that every 8% per annum overdue penal charge entry sits in a separate uncapitalized charge column rather than inflating your principal balance, in strict accordance with Reserve Bank of India instructions on transparent penal charges.
              </p>
            </section>

            {/* Section 7C: CIBIL DPD & SMA Classification */}
            <section id="kotak-cibil-sma-timeline" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                CIBIL DPD &amp; SMA Classification After a Kotak EMI Bounce
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Under RBI&apos;s fortnightly (15-day) credit bureau reporting framework, Kotak Mahindra Bank transmits updated Days Past Due (DPD) files to TransUnion CIBIL, Experian, Equifax, and CRIF High Mark twice every month (as of the 15th and the last day of the month). Knowing how internal bank risk buckets progress helps salaried borrowers avoid panic-driven mistakes:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>SMA-0 (1 to 30 Days Past Due):</strong> Triggered immediately when your 2nd or 5th due-date EMI returns unpaid. Clearing the full EMI and Rs. 750 bounce charge before the 15th-of-month bureau snapshot limits prolonged credit score erosion and halts tele-calling.
                </li>
                <li>
                  <strong>SMA-1 (31 to 60 DPD) &amp; SMA-2 (61 to 90 DPD):</strong> Two to three consecutive unpaid Kotak EMIs push the APAC account into Special Mention Account buckets 1 and 2. At this stage, automated NACH re-presentations continue draining external bank return fees, and credit card issuers may cut unused credit limits across your profile.
                </li>
                <li>
                  <strong>Non-Performing Asset / NPA (Beyond 90 DPD):</strong> Once an unsecured Kotak personal loan crosses 90 days past due, routine branch support can no longer restructure it casually, and the account moves to specialized recovery and settlement resolution teams where formal hardship-backed principal settlements are evaluated.
                </li>
              </ul>
            </section>

            {/* Section 8: Salaried Kotak Settlement Path */}
            <section id="kotak-salaried-settlement" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Salaried Kotak Personal Loan Settlement Path (Debt ≥ ₹3 Lakhs)
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Note why refinancing out of a Kotak personal loan after multiple bounces rarely works: not only do recent DPD marks block prime bank balance transfers, Kotak&apos;s MITC also levies a steep <strong>4% + GST foreclosure charge</strong> within the first three years. Meanwhile, if layoffs, salary cuts, or medical emergencies have pushed your combined monthly EMIs beyond 60% of take-home pay, making ad-hoc partial payments only feeds Rs. 750 bounce fees and overdue interest first.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                When your <strong>total combined unsecured debt across Kotak personal loans, credit cards, and other banks or NBFCs is ₹3,00,000 or higher</strong>, SettleLoans builds a structured legal exit:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Isolating Household Payroll From CRN Holds:</strong> Guiding you on routing active salary credits to a clean non-lender bank account so internal Kotak liens do not wipe out rent and family essentials. Also review{" "}
                  <Link
                    href="https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    salary account mandate rules
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://www.settleloans.in/reminder-calls-after-emi-bounce"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    handling recovery reminder calls legally
                  </Link>
                  .
                </li>
                <li>
                  <strong>Hardship Representation at 90+ DPD (NPA Stage):</strong> Submitting verified job-loss, pay-reduction, or medical documentation to Kotak Mahindra Bank&apos;s authorized settlement desk to eliminate 100% of uncollected Rs. 750 bounce charges and 8% p.a. penal fees.
                </li>
                <li>
                  <strong>Verified APAC Settlement Sanction Letter:</strong> Negotiating a realistic lump-sum or short-tranche principal haircut (commonly 40% to 58% of principal depending on case merits; never guaranteed), paid strictly against an authenticated Kotak Mahindra Bank settlement letter followed by a formal No Dues Certificate. Visit our{" "}
                  <Link
                    href="https://www.settleloans.in/loan-settlement/kotak-bank"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    Kotak Mahindra Bank loan settlement hub
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://www.settleloans.in/loan-settlement-for-salaried-people"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    loan settlement guide for salaried borrowers
                  </Link>
                  .
                </li>
              </ul>
            </section>

            {/* Section 9: FAQs */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Kotak Personal Loan EMI Bounce Charges FAQs
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
                Stop Losing ₹750 Per Kotak Bounce Presentation
              </div>
              <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-6">
                Carrying ₹3,00,000 or more across Kotak personal loans, cards, and NBFC loans? Get a confidential salaried settlement assessment today.
              </p>
              <a
                href="#settlement-assessment"
                className="inline-block bg-[#1F5EFF] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Evaluate My Settlement Plan
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
              <strong>Disclaimer:</strong> SettleLoans is an independent debt resolution and legal advisory platform and is not affiliated with Kotak Mahindra Bank Limited. Fee figures reflect Kotak Mahindra Bank&apos;s published Personal Loan MITC and schedule of charges checked on 11 November 2026 and remain subject to bank revision and your Key Fact Statement (KFS).
            </div>
          </article>

          {/* Right Column: Sticky Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-6 text-white border border-white/10 shadow-xl">
                <div className="text-lg font-black mb-2">
                  Kotak Bounce Calculator
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-5">
                  Model Kotak&apos;s Rs. 750 bounce charge, bank NACH return fees, and 8% p.a. penal charges across 3 and 6 months.
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
                      href="https://www.settleloans.in/loan-settlement/kotak-bank"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Kotak Bank Loan Settlement Hub
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
                      href="https://www.settleloans.in/bajaj-finance-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Bajaj Finance EMI Bounce Charges
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
