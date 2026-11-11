import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import LoanSettlementAssessmentFunnel from "@/components/LoanSettlementAssessmentFunnel";

export const metadata: Metadata = {
  title: "IndusInd Personal Loan Bounce Charges | SettleLoans",
  description: "Check official IndusInd Bank personal loan EMI bounce charges (Rs. 450 to Rs. 500 + GST), 2% monthly penal fees, salary holds, and settlement paths.",
  alternates: {
    canonical: "https://www.settleloans.in/indusind-personal-loan-emi-bounce-charges",
  },
  openGraph: {
    title: "IndusInd Personal Loan Bounce Charges | SettleLoans",
    description: "Check official IndusInd Bank personal loan EMI bounce charges (Rs. 450 to Rs. 500 + GST), 2% monthly penal fees, salary holds, and settlement paths.",
    url: "https://www.settleloans.in/indusind-personal-loan-emi-bounce-charges",
    type: "article",
    images: [
      {
        url: "https://www.settleloans.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IndusInd Bank Personal Loan EMI Bounce Charges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IndusInd Personal Loan Bounce Charges | SettleLoans",
    description: "Check official IndusInd Bank personal loan EMI bounce charges (Rs. 450 to Rs. 500 + GST), 2% monthly penal fees, salary holds, and settlement paths.",
    images: ["https://www.settleloans.in/og-image.jpg"],
  },
};

const tocItems = [
  { id: "indusind-official-soc", title: "Official IndusInd SOC Table" },
  { id: "rs-450-500-dishonour-math", title: "Rs. 450 to Rs. 500 + GST Math" },
  { id: "two-percent-penal-charge", title: "24% p.a. Overdue Penal Rule" },
  { id: "indus-salary-vs-external", title: "Indus Salary SI vs External NACH" },
  { id: "six-month-indusind-table", title: "6-Month Overdue Cost Table" },
  { id: "indusmobile-manual-payment", title: "Paying Overdue on IndusMobile" },
  { id: "indusind-soa-return-codes", title: "Auditing Your IndusInd SOA" },
  { id: "foreclosure-topup-traps", title: "4% to 5% Foreclosure & Top-Ups" },
  { id: "cibil-nodal-escalation", title: "CIBIL Reporting & Escalation" },
  { id: "indusind-salaried-settlement", title: "Salaried IndusInd Settlement" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
  {
    q: "What is the IndusInd Bank personal loan EMI bounce charge?",
    a: "According to IndusInd Bank's published Personal Loan Schedule of Charges (SOC), the EMI bounce or NACH/ECS/Standing Instruction/cheque payment dishonour charge is Rs. 450 to Rs. 500 per dishonour instance plus 18% GST, resulting in an effective charge of Rs. 531 to Rs. 590 per failed presentation depending on your loan cohort and Key Fact Statement.",
  },
  {
    q: "How much penal charge does IndusInd Bank levy on overdue personal loan EMIs?",
    a: "IndusInd Bank levies a Late Payment / Penal Charge of 24% per annum (2% per month) calculated on the overdue EMI amount for the actual period of delay, or a minimum of Rs. 100 (whichever is higher), plus 18% GST. Under RBI's Fair Lending Practice norms, this penal charge is non-capitalized and is never compounded into loan principal.",
  },
  {
    q: "Why did a single bounced IndusInd personal loan EMI cost me over Rs. 1,100?",
    a: "When your IndusInd Bank personal loan debits an external salary account (such as HDFC Bank, ICICI Bank, SBI, Axis Bank, or Kotak) via e-NACH and your balance falls short, IndusInd Bank adds Rs. 531 to Rs. 590 to your loan overdue ledger while your external salary bank separately deducts Rs. 295 to Rs. 590 as an inward NACH return charge, totaling Rs. 826 to Rs. 1,180 from one bounce.",
  },
  {
    q: "What happens if my Indus Comfort or Indus Select Salary Account misses a personal loan EMI?",
    a: "When both your corporate salary account and your personal loan sit inside IndusInd Bank, a failed Standing Instruction triggers the Rs. 450 to Rs. 500 + GST dishonour fee and places an automated hold or lien on your account balance. Any incoming salary credit, incentive, or UPI deposit is immediately swept toward the held overdue EMI and fee.",
  },
  {
    q: "What is IndusInd Bank's fee for swapping a personal loan repayment mandate?",
    a: "Changing your NACH mandate, Standing Instruction, or linked repayment bank account on an active IndusInd Bank personal loan attracts a swap / mandate replacement charge of Rs. 500 plus 18% GST (Rs. 590) per instance.",
  },
  {
    q: "How can I pay a bounced IndusInd personal loan EMI manually before a retry debit runs?",
    a: "Log into the IndusMobile app, IndusNet NetBanking, or IndusInd Bank's Quick Pay online loan repayment portal using your Loan Account Number and clear the overdue installment via UPI or NetBanking within 24 to 48 hours of the bounce so mid-month NACH retry files are suppressed.",
  },
  {
    q: "What are IndusInd Bank's personal loan foreclosure charges if I try to refinance?",
    a: "IndusInd Bank charges 4% plus 18% GST on outstanding principal after 12 EMIs have been paid (and up to 5% plus 18% GST for closures between 1 and 11 EMIs on select instant digital variants per KFS). Once recent EMI bounces lower your CIBIL score, low-rate refinancing rarely approves anyway.",
  },
  {
    q: "Can I request a waiver of a first-time IndusInd EMI bounce fee?",
    a: "If your corporate payroll arrived later on the exact due date after an early-morning sweep, or if an NPCI technical timeout returned your debit despite sufficient clear balance, clear the overdue EMI immediately and submit a service ticket through IndusInd Customer Care or Grievance Redressal attaching your PDF bank statement.",
  },
  {
    q: "How quickly does IndusInd Bank report an EMI bounce to CIBIL?",
    a: "Under RBI's fortnightly credit bureau reporting rules, IndusInd Bank submits updated Days Past Due (DPD) files to CIBIL, Experian, Equifax, and CRIF High Mark as of the 15th and last day of every month. Leaving a 4th-date or 5th-date bounce unpaid past the 15th records an SMA-0 delinquency mark that same month.",
  },
  {
    q: "Does IndusInd Bank waive EMI bounce and 24% p.a. penal charges during loan settlement?",
    a: "When an unsecured IndusInd Bank personal loan crosses 90 days past due into Non-Performing Asset (NPA) status due to genuine salaried hardship such as job loss, pay cuts, or medical emergencies, formal negotiated settlements typically waive 100% of accumulated bounce fees and 2% monthly penal charges while settling principal at an agreed haircut.",
  },
  {
    q: "When can SettleLoans represent me for IndusInd Bank personal loan settlement?",
    a: "SettleLoans assists salaried borrowers whose combined unsecured debt across IndusInd personal loans, IndusInd credit cards, and other bank or NBFC loans is Rs. 3,00,000 or higher.",
  },
];

export default function IndusIndPersonalLoanEmiBounceChargesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.settleloans.in/indusind-personal-loan-emi-bounce-charges#breadcrumb",
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
            "name": "IndusInd Personal Loan Bounce Charges",
            "item": "https://www.settleloans.in/indusind-personal-loan-emi-bounce-charges"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.settleloans.in/indusind-personal-loan-emi-bounce-charges#article",
        "headline": "IndusInd Bank Personal Loan EMI & NACH Bounce Charges (Verified SOC)",
        "description": "Verified guide to IndusInd Bank personal loan EMI bounce fees (Rs. 450 to Rs. 500 + GST), 24% p.a. penal charges, salary holds, and salaried settlement.",
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
          "@id": "https://www.settleloans.in/indusind-personal-loan-emi-bounce-charges"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.settleloans.in/indusind-personal-loan-emi-bounce-charges#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the IndusInd Bank personal loan EMI bounce charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "According to IndusInd Bank's published Personal Loan Schedule of Charges (SOC), the EMI bounce or NACH/ECS/Standing Instruction/cheque payment dishonour charge is Rs. 450 to Rs. 500 per dishonour instance plus 18% GST, resulting in an effective charge of Rs. 531 to Rs. 590 per failed presentation depending on your loan cohort and Key Fact Statement."
            }
          },
          {
            "@type": "Question",
            "name": "How much penal charge does IndusInd Bank levy on overdue personal loan EMIs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "IndusInd Bank levies a Late Payment / Penal Charge of 24% per annum (2% per month) calculated on the overdue EMI amount for the actual period of delay, or a minimum of Rs. 100 (whichever is higher), plus 18% GST. Under RBI's Fair Lending Practice norms, this penal charge is non-capitalized and is never compounded into loan principal."
            }
          },
          {
            "@type": "Question",
            "name": "Why did a single bounced IndusInd personal loan EMI cost me over Rs. 1,100?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When your IndusInd Bank personal loan debits an external salary account (such as HDFC Bank, ICICI Bank, SBI, Axis Bank, or Kotak) via e-NACH and your balance falls short, IndusInd Bank adds Rs. 531 to Rs. 590 to your loan overdue ledger while your external salary bank separately deducts Rs. 295 to Rs. 590 as an inward NACH return charge, totaling Rs. 826 to Rs. 1,180 from one bounce."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if my Indus Comfort or Indus Select Salary Account misses a personal loan EMI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When both your corporate salary account and your personal loan sit inside IndusInd Bank, a failed Standing Instruction triggers the Rs. 450 to Rs. 500 + GST dishonour fee and places an automated hold or lien on your account balance. Any incoming salary credit, incentive, or UPI deposit is immediately swept toward the held overdue EMI and fee."
            }
          },
          {
            "@type": "Question",
            "name": "What is IndusInd Bank's fee for swapping a personal loan repayment mandate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Changing your NACH mandate, Standing Instruction, or linked repayment bank account on an active IndusInd Bank personal loan attracts a swap / mandate replacement charge of Rs. 500 plus 18% GST (Rs. 590) per instance."
            }
          },
          {
            "@type": "Question",
            "name": "How can I pay a bounced IndusInd personal loan EMI manually before a retry debit runs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Log into the IndusMobile app, IndusNet NetBanking, or IndusInd Bank's Quick Pay online loan repayment portal using your Loan Account Number and clear the overdue installment via UPI or NetBanking within 24 to 48 hours of the bounce so mid-month NACH retry files are suppressed."
            }
          },
          {
            "@type": "Question",
            "name": "What are IndusInd Bank's personal loan foreclosure charges if I try to refinance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "IndusInd Bank charges 4% plus 18% GST on outstanding principal after 12 EMIs have been paid (and up to 5% plus 18% GST for closures between 1 and 11 EMIs on select instant digital variants per KFS). Once recent EMI bounces lower your CIBIL score, low-rate refinancing rarely approves anyway."
            }
          },
          {
            "@type": "Question",
            "name": "Can I request a waiver of a first-time IndusInd EMI bounce fee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If your corporate payroll arrived later on the exact due date after an early-morning sweep, or if an NPCI technical timeout returned your debit despite sufficient clear balance, clear the overdue EMI immediately and submit a service ticket through IndusInd Customer Care or Grievance Redressal attaching your PDF bank statement."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly does IndusInd Bank report an EMI bounce to CIBIL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under RBI's fortnightly credit bureau reporting rules, IndusInd Bank submits updated Days Past Due (DPD) files to CIBIL, Experian, Equifax, and CRIF High Mark as of the 15th and last day of every month. Leaving a 4th-date or 5th-date bounce unpaid past the 15th records an SMA-0 delinquency mark that same month."
            }
          },
          {
            "@type": "Question",
            "name": "Does IndusInd Bank waive EMI bounce and 24% p.a. penal charges during loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When an unsecured IndusInd Bank personal loan crosses 90 days past due into Non-Performing Asset (NPA) status due to genuine salaried hardship such as job loss, pay cuts, or medical emergencies, formal negotiated settlements typically waive 100% of accumulated bounce fees and 2% monthly penal charges while settling principal at an agreed haircut."
            }
          },
          {
            "@type": "Question",
            "name": "When can SettleLoans represent me for IndusInd Bank personal loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SettleLoans assists salaried borrowers whose combined unsecured debt across IndusInd personal loans, IndusInd credit cards, and other bank or NBFC loans is Rs. 3,00,000 or higher."
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
              Verified Lender SOC • Checked 11 Nov 2026
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#DEDEDE] mb-6 leading-[1.12] tracking-tight">
              IndusInd Bank Personal Loan EMI &amp; NACH Bounce Charges
            </h1>
            <p className="text-base md:text-xl text-[#DEDEDE]/85 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
              Complete salaried borrower guide to IndusInd Bank&apos;s Rs. 450 to Rs. 500 (+ 18% GST) EMI dishonour fee, 24% p.a. overdue penal charges, Indus salary account holds vs external NACH double deductions, and structured debt settlement.
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
                Calculate IndusInd Bounce Drain
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
                  IndusInd Personal Loan Bounce Charges
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
            {/* Section 1: Official IndusInd SOC */}
            <section id="indusind-official-soc" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                IndusInd Bank Personal Loan Schedule of Charges (Verified SOC)
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                IndusInd Bank has aggressively expanded instant paperless personal loans, balance-transfer personal loans, and pre-approved loans against corporate payroll across metro IT corridors and mid-sized enterprises. While IndusInd&apos;s base EMI dishonour charge of <strong>Rs. 450 to Rs. 500 plus 18% GST</strong> looks moderate on paper, combining it with <strong>24% per annum (2% per month) overdue penal charges</strong> and external salary-bank NACH return deductions drains over Rs. 3,100 in a single missed month.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-6">
                Every fee head in the table below was verified directly against IndusInd Bank&apos;s published Personal Loan Schedule of Charges (SOC) PDF on 11 November 2026:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-5">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#2E2E2E] text-white">
                      <th className="p-4 font-bold">IndusInd Personal Loan Fee Head</th>
                      <th className="p-4 font-bold">Published Official SOC Rate</th>
                      <th className="p-4 font-bold">Effective Outflow With 18% GST</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">EMI Bounce / Payment Dishonour Charge</td>
                      <td className="p-4 text-slate-700">Rs. 450 to Rs. 500 per instance + 18% GST</td>
                      <td className="p-4 font-semibold text-red-700">Rs. 531 to Rs. 590 per failed presentation</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Late Payment / Overdue Penal Charge</td>
                      <td className="p-4 text-slate-700">24% p.a. (2% per month) on overdue EMI (Min Rs. 100) + GST</td>
                      <td className="p-4 font-semibold text-red-700">2.36% per month (Min Rs. 118; non-capitalized)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Repayment Mode / Mandate Swap Fee</td>
                      <td className="p-4 text-slate-700">Rs. 500 per swap + 18% GST</td>
                      <td className="p-4 font-semibold text-slate-800">Rs. 590 per mandate replacement</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Foreclosure / Pre-closure Charge</td>
                      <td className="p-4 text-slate-700">4% after 12 EMIs (5% for 1 to 11 EMIs on digital KFS) + GST</td>
                      <td className="p-4 font-semibold text-slate-800">4.72% to 5.90% of principal outstanding</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Physical Duplicate Statement / Amortisation</td>
                      <td className="p-4 text-slate-700">Rs. 250 to Rs. 500 at branch (Free via IndusMobile/Net)</td>
                      <td className="p-4 font-semibold text-slate-800">Rs. 0 digitally via IndusMobile</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs md:text-sm text-slate-600">
                <strong>Official Source Verification:</strong> Verified against{" "}
                <a
                  href="https://www.indusind.bank.in/content/dam/indusind-corporate/schedule-of-charges/others/Personal-Loan-SOC.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  IndusInd Bank Official Personal Loan Schedule of Charges (PDF)
                </a>{" "}
                on <strong>11 November 2026</strong>. Check your loan&apos;s Key Fact Statement (KFS) to verify whether your sanction sits on the Rs. 450 + GST (Rs. 531) standard retail cohort or Rs. 500 + GST (Rs. 590) instant digital cohort.
              </div>
            </section>

            {/* Funnel Near Hero */}
            <div className="mb-14">
              <div className="p-5 rounded-t-3xl bg-blue-50 border border-b-0 border-blue-200 text-sm text-slate-800">
                <strong>Salaried Debt Assessment:</strong> Facing IndusInd personal loan EMI bounces alongside IndusInd credit cards, private bank loans, or NBFC debt? SettleLoans assists salaried borrowers when <strong>combined unsecured debt across all lenders is ₹3,00,000 or higher</strong>.
              </div>
              <LoanSettlementAssessmentFunnel className="!mt-0 !rounded-t-none" />
            </div>

            {/* Section 2: Rs. 450 to Rs. 500 + GST Dishonour Math */}
            <section id="rs-450-500-dishonour-math" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                How IndusInd&apos;s Rs. 450 to Rs. 500 Dishonour Fee Multiplies
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                IndusInd Bank&apos;s Schedule of Charges defines payment dishonour broadly across every electronic and physical collection instrument: e-NACH, physical NACH, ECS, internal Standing Instructions, and post-dated security cheques. Each time IndusInd Bank dispatches a debit instruction on your scheduled due date (commonly the <strong>4th, 5th, or 7th of the month</strong>) and the presentation returns unpaid, Rs. 450 + 18% GST (<strong>Rs. 531</strong>) or Rs. 500 + 18% GST (<strong>Rs. 590</strong>) posts to your overdue charges ledger.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Why do salaried borrowers routinely report losing Rs. 1,600 to Rs. 2,360 inside a single calendar month? Because an unpaid 4th-of-the-month or 5th-of-the-month presentation rarely stops at one attempt! Automated collection workflows frequently fire a mid-month NACH re-presentation around the 10th to 15th if no manual payment has cleared on your Loan Account Number. Every failed retry triggers both a second IndusInd dishonour fee and a second inward NACH return charge at your salary bank.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Pay special attention if you applied through <strong>Indus EasyCredit</strong> (IndusInd Bank&apos;s paperless video-KYC personal loan platform): digital disbursements automatically lock your e-Mandate onto a fixed monthly cycle date (typically the 4th or 5th). When a corporate employer shifts monthly payroll from the last working day of the month to the 7th or 10th, borrowers who pay manually on the 8th still lose Rs. 826 to Rs. 1,180 every single month on the 4th/5th failed NACH run unless they maintain a one-EMI liquidity buffer ahead of the 3rd!
              </p>
            </section>

            {/* Section 3: 24% p.a. Overdue Penal Charge */}
            <section id="two-percent-penal-charge" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                IndusInd&apos;s 24% p.a. (2% Monthly) Overdue Penal Charge Math
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Compare IndusInd Bank&apos;s overdue penal charge against peers: whereas Kotak Mahindra Bank charges 8% p.a. and IDFC FIRST Bank revised its rate down to 12% p.a. (1% monthly), IndusInd Bank levies a steeper <strong>24% per annum (2% per month) on the overdue EMI amount, subject to a minimum of Rs. 100, plus 18% GST</strong>.
              </p>
              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 mb-6">
                <h3 className="text-lg font-black text-amber-950 mb-2">
                  Worked Daily &amp; Monthly Penal Calculation
                </h3>
                <p className="text-sm md:text-base text-amber-950 leading-relaxed">
                  Suppose your IndusInd personal loan EMI is <strong>Rs. 18,500</strong> due on the 5th. If you clear it 10 days late on the 15th, 24% p.a. for 10 days equals roughly Rs. 121.64 + 18% GST = <strong>Rs. 144</strong>. However, if three consecutive EMIs remain unpaid by Day 90, Month 1&apos;s installment has accrued 3 months of 2% monthly penal fees, Month 2&apos;s has accrued 2 months, and Month 3&apos;s has accrued 1 month, totaling 6 EMI-months × Rs. 370 = Rs. 2,220 + 18% GST = <strong>Rs. 2,620</strong> in pure overdue penal charges on top of bounce fees!
                </p>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                In compliance with RBI&apos;s Fair Lending Practice directions on Penal Charges, IndusInd Bank records this 24% p.a. levy as a separate <strong>non-capitalized penal charge</strong> rather than compounding it into your interest-bearing principal.
              </p>
            </section>

            {/* Section 4: Indus Salary SI vs External Bank NACH */}
            <section id="indus-salary-vs-external" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Indus Comfort Salary Account Hold vs External Bank NACH Drain
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Salaried borrowers encounter two very different operational risks depending on where their monthly salary lands:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    Internal IndusInd Salary / Savings Account
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    If your corporate payroll credits an <strong>Indus Comfort, Indus Select, or Indus Maxima Salary Account</strong> linked via internal Standing Instruction, a missed due date posts Rs. 531 to Rs. 590 and places an immediate <strong>system hold / lien</strong>. Any delayed salary credit, reimbursement, or UPI inflow is automatically swept toward the held EMI and fee. Read more on{" "}
                    <Link
                      href="https://www.settleloans.in/bank-freeze-salary-account-loan-default"
                      className="text-[#1F5EFF] font-semibold underline"
                    >
                      salary account freezes and liens during loan default
                    </Link>
                    .
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    External Bank e-NACH Double Deduction
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    When IndusInd pulls EMIs via e-NACH from an external HDFC, ICICI, SBI, Axis, or Kotak salary account, IndusInd cannot freeze your external account. Instead, every failed debit adds <strong>Rs. 531 to Rs. 590</strong> to your IndusInd loan ledger while your external bank deducts <strong>Rs. 295 to Rs. 590</strong> immediately, costing <strong>Rs. 826 to Rs. 1,180 per bounce</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: 6-Month Overdue Cost Projection */}
            <section id="six-month-indusind-table" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                6-Month Overdue Cost Projection on an IndusInd Personal Loan
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Let us trace a salaried operations manager carrying a Rs. 5,50,000 IndusInd Bank Personal Loan (remaining principal Rs. 4,35,000, monthly EMI <strong>Rs. 16,200</strong>, Rs. 500 + GST digital KFS bounce slab) linked via e-NACH to a private salary bank charging Rs. 500 + GST per inward return, assuming 2 NACH presentations per unpaid month:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Delinquency Stage</th>
                      <th className="p-3.5 font-bold">IndusInd Bounces (+GST)</th>
                      <th className="p-3.5 font-bold">Salary Bank Returns (+GST)</th>
                      <th className="p-3.5 font-bold">24% p.a. Penal (+GST)</th>
                      <th className="p-3.5 font-bold">Total Penalty Drain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 1 (2 bounces, 30 DPD)</td>
                      <td className="p-3.5">Rs. 1,180</td>
                      <td className="p-3.5">Rs. 1,180</td>
                      <td className="p-3.5">Rs. 382</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 2,742</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 3 (6 bounces, 90 DPD NPA)</td>
                      <td className="p-3.5">Rs. 3,540</td>
                      <td className="p-3.5">Rs. 3,540</td>
                      <td className="p-3.5">Rs. 2,294</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 9,374</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 6 (12 bounces, 180 DPD)</td>
                      <td className="p-3.5">Rs. 7,080</td>
                      <td className="p-3.5">Rs. 7,080</td>
                      <td className="p-3.5">Rs. 8,029</td>
                      <td className="p-3.5 font-black text-red-800">Rs. 22,189</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                By Month 6, deadweight bounce charges, salary-bank return fees, and 24% p.a. overdue penal charges consume <strong>Rs. 22,189</strong> without reducing principal by a single rupee! Run your exact IndusInd EMI and multi-lender balances inside our{" "}
                <Link
                  href="https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  Personal Loan EMI Bounce Charges Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 6: Paying Overdue on IndusMobile */}
            <section id="indusmobile-manual-payment" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Clearing Overdue IndusInd EMIs on IndusMobile &amp; Quick Pay
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                If your missed debit was caused by a temporary salary-date delay and your overall debt remains manageable under Rs. 3,00,000, clear the overdue installment immediately so mid-month retry runs do not cost you another Rs. 1,180:
              </p>
              <ol className="space-y-4 list-decimal pl-5 text-base text-slate-700 mb-6">
                <li>
                  <strong>Use IndusMobile, IndusNet, or IndusInd Online Loan Quick Pay:</strong> Enter your Personal Loan Account Number, select overdue EMI + accrued dishonour charges, and complete payment via UPI or NetBanking within 24 to 48 hours of the missed due date.
                </li>
                <li>
                  <strong>Download Digital Receipts &amp; Statements Free:</strong> Remember that requesting physical duplicate statements at an IndusInd branch can cost Rs. 250 to Rs. 500 + GST, whereas downloading your PDF receipt and loan statement inside IndusMobile or IndusNet is free.
                </li>
                <li>
                  <strong>Register a Formal Swap When Changing Salary Banks:</strong> If your new employer credits salary into a different bank, file a formal Rs. 500 + GST mandate swap before emptying your old account so you do not rack up monthly bounce fees and CIBIL late marks.
                </li>
              </ol>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Also consult our checklists on{" "}
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

            {/* Section 7: Auditing Your IndusInd SOA */}
            <section id="indusind-soa-return-codes" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Auditing Your IndusInd Loan Statement &amp; NPCI Return Codes
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Before entering any repayment discussion or disputing charges, pull your itemized IndusInd Personal Loan Statement of Account (SOA) and inspect three core entries:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Verify Slab Accuracy (Rs. 450 vs Rs. 500 + GST):</strong> Cross-check your KFS sanction sheet to verify that billed dishonour charges match your contracted slab and match actual NACH presentation dates on your bank statement.
                </li>
                <li>
                  <strong>Check NPCI Return Codes (R01 vs R20):</strong> If your savings bank held clear funds above the EMI on the evening prior to presentation and the mandate still failed with a technical clearing error (R20), submit your bank statement to IndusInd Customer Care for a 100% reversal of the Rs. 531 to Rs. 590 bounce fee.
                </li>
                <li>
                  <strong>Shared IndusInd Credit Card Exposure:</strong> Many IndusInd personal loan borrowers also carry an IndusInd Legend, Pinnacle, Tiger, or Platinum Aura Credit Card. Be aware that when a personal loan slips past 60 to 90 DPD, banks commonly freeze or slash credit limits on linked IndusInd credit cards under internal cross-product risk rules.
                </li>
              </ul>
            </section>

            {/* Section 8: 4% to 5% Foreclosure & Top-Up Traps */}
            <section id="foreclosure-topup-traps" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Why 4% to 5% Foreclosure Fees &amp; Top-Ups Trap Borrowers
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Two structural traps frequently turn a manageable IndusInd personal loan into acute salaried debt distress:
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                First, IndusInd&apos;s pre-closure tariff levies <strong>4% + 18% GST (4.72%)</strong> after 12 EMIs and up to <strong>5% + 18% GST (5.90%)</strong> within the first 11 EMIs on instant digital personal loans. On a Rs. 6,00,000 balance, pre-closing costs Rs. 28,320 to Rs. 35,400 upfront, wiping out most interest savings from any balance transfer, and once two NACH bounces hit CIBIL, prime banks reject balance-transfer applications altogether. Second, borrowers who accept a parallel IndusInd Top-Up Personal Loan without merging LANs end up facing <strong>two separate NACH debits</strong> on the 4th or 5th of every month, doubling their Rs. 1,180 bounce-and-bank-return loss whenever a single paycheck is delayed!
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Also understand what happens if you receive an automated advocate email citing <strong>Section 25 of the Payment and Settlement Systems Act, 2007</strong> after consecutive IndusInd e-NACH dishonours: while electronic fund transfer dishonour carries statutory notice remedies analogous to cheque dishonour, lenders primarily issue demand notices to compel overdue regularization or formal settlement dialogue. Never ignore a written legal notice; respond factually in writing documenting your salaried income disruption or engage qualified debt-resolution counsel to steer the account toward a documented settlement. Read our guide on{" "}
                <Link
                  href="https://www.settleloans.in/ecs-nach-bounce-legal-notice-section-25-payment-settlement-act-guide"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  responding to ECS and NACH bounce Section 25 legal notices
                </Link>
                .
              </p>
            </section>

            {/* Section 9: CIBIL Reporting & Escalation */}
            <section id="cibil-nodal-escalation" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                15-Day CIBIL Reporting &amp; IndusInd Nodal Officer Escalation
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                IndusInd Bank transmits borrower repayment status to CIBIL, Experian, Equifax, and CRIF High Mark every 15 days (as of the 15th and month-end). An unpaid 4th-date or 5th-date bounce crosses the 15th-of-month bureau cutoff within 10 to 11 days, recording an immediate <strong>SMA-0 delinquency</strong> mark, followed by <strong>SMA-1 (31 to 60 DPD)</strong>, <strong>SMA-2 (61 to 90 DPD)</strong>, and <strong>NPA classification past 90 DPD</strong>.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                If you face unreversed technical bounce fees, duplicate same-week NACH retries after manual clearance, or collection calls violating RBI&apos;s Fair Practices Code (such as calls outside 8:00 AM to 7:00 PM or unauthorized third-party disclosure), escalate in writing from IndusInd Customer Care (Level 1) to IndusInd Bank&apos;s Regional Nodal Officer (Level 2) and Principal Nodal Officer (Level 3), and after 30 days to the RBI Integrated Ombudsman portal. Read{" "}
                <Link
                  href="https://www.settleloans.in/reminder-calls-after-emi-bounce"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  how to handle recovery reminder calls legally
                </Link>
                .
              </p>
            </section>

            {/* Section 10: Salaried IndusInd Settlement Path */}
            <section id="indusind-salaried-settlement" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Salaried IndusInd Personal Loan Settlement Path (Debt ≥ ₹3 Lakhs)
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                When job loss, salary cuts, business wind-downs, or family medical crises leave your household unable to sustain EMIs across IndusInd personal loans, credit cards, and NBFC loans, sending small ad-hoc transfers during 60+ or 90+ DPD simply feeds the Rs. 531 to Rs. 590 bounce bucket and 24% p.a. penal charges while principal remains untouched.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                For salaried borrowers carrying <strong>₹3,00,000 or more in combined unsecured debt across all lenders</strong>, SettleLoans executes a structured legal settlement strategy:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Isolating Household Payroll From Liens &amp; Double Debits:</strong> Guiding you on keeping active salary inflows in a clean non-lender bank account and managing mandate exposure legally so essential rent, school fees, and groceries stay protected. Also review{" "}
                  <Link
                    href="https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    salary account mandate cancellation rules
                  </Link>
                  .
                </li>
                <li>
                  <strong>100% Waiver of Bounce &amp; 24% Penal Buckets at NPA Stage:</strong> Submitting documented hardship proof post 90+ DPD to IndusInd Bank&apos;s authorized settlement desk to waive accumulated bounce charges and 2% monthly penal charges completely alongside a realistic principal haircut (indicatively 40% to 58% of principal depending on case merits; never guaranteed).
                </li>
                <li>
                  <strong>Verified IndusInd Bank Settlement Sanction Letter:</strong> Auditing the official IndusInd Bank letterhead OTS / settlement sanction letter (covering exact Loan Account Number, full-and-final payment schedule, and No Dues Certificate issuance) before you pay a single rupee. Visit our{" "}
                  <Link
                    href="https://www.settleloans.in/loan-settlement/indusind-bank"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    IndusInd Bank loan settlement hub
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

            {/* Section 11: FAQs */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                IndusInd Personal Loan EMI Bounce Charges FAQs
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
                Stop Bleeding Bounce &amp; 24% Penal Charges on IndusInd Loans
              </div>
              <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-6">
                Carrying ₹3,00,000 or more across IndusInd personal loans, credit cards, and other banks or NBFCs? Check your confidential salaried settlement plan today.
              </p>
              <a
                href="#settlement-assessment"
                className="inline-block bg-[#1F5EFF] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Evaluate My Settlement Plan
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
              <strong>Disclaimer:</strong> SettleLoans is an independent debt resolution and legal advisory platform and is not affiliated with IndusInd Bank Limited. Fee figures reflect IndusInd Bank&apos;s published Personal Loan Schedule of Charges checked on 11 November 2026 and remain subject to bank updates and your Key Fact Statement (KFS).
            </div>
          </article>

          {/* Right Column: Sticky Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-6 text-white border border-white/10 shadow-xl">
                <div className="text-lg font-black mb-2">
                  IndusInd Bounce Calculator
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-5">
                  Model IndusInd&apos;s Rs. 450 to Rs. 500 + GST bounce fee, bank return deductions, and 24% p.a. penal charges in seconds.
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
                      href="https://www.settleloans.in/loan-settlement/indusind-bank"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • IndusInd Bank Loan Settlement Hub
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
                      href="https://www.settleloans.in/kotak-personal-loan-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Kotak Bank PL Bounce Charges
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
