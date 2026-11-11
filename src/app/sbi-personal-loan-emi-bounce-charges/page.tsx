import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import LoanSettlementAssessmentFunnel from "@/components/LoanSettlementAssessmentFunnel";

export const metadata: Metadata = {
  title: "SBI Personal Loan EMI Bounce Charges | SettleLoans",
  description: "Check official SBI Xpress Credit personal loan SI and NACH bounce charges (Rs. 250 + GST), tiered penal charges, and salaried settlement solutions.",
  alternates: {
    canonical: "https://www.settleloans.in/sbi-personal-loan-emi-bounce-charges",
  },
  openGraph: {
    title: "SBI Personal Loan EMI Bounce Charges | SettleLoans",
    description: "Check official SBI Xpress Credit personal loan SI and NACH bounce charges (Rs. 250 + GST), tiered penal charges, and salaried settlement solutions.",
    url: "https://www.settleloans.in/sbi-personal-loan-emi-bounce-charges",
    type: "article",
    images: [
      {
        url: "https://www.settleloans.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SBI Personal Loan EMI Bounce Charges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SBI Personal Loan EMI Bounce Charges | SettleLoans",
    description: "Check official SBI Xpress Credit personal loan SI and NACH bounce charges (Rs. 250 + GST), tiered penal charges, and salaried settlement solutions.",
    images: ["https://www.settleloans.in/og-image.jpg"],
  },
};

const tocItems = [
  { id: "sbi-official-fee-table", title: "SBI Xpress Credit Fee Schedule" },
  { id: "si-and-nach-return-fee", title: "Rs. 250 SI & NACH Return Rules" },
  { id: "sbi-tiered-penal-charges", title: "2.40% vs 5% Penal Charge Tiers" },
  { id: "salary-package-hold-lien", title: "SBI Salary Package Hold & Lien" },
  { id: "job-switch-external-nach", title: "Job Switch & Non-SBI Salary Traps" },
  { id: "worked-sbi-cost-example", title: "6-Month Overdue Rupee Math" },
  { id: "yono-manual-clearance", title: "Paying Overdue via SBI YONO" },
  { id: "sbi-salaried-settlement", title: "Salaried SBI Settlement Roadmap" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
  {
    q: "How much is the SBI personal loan or Xpress Credit EMI bounce charge?",
    a: "Under State Bank of India's service charge schedule for retail personal loans including SBI Xpress Credit and Real-Time Xpress Credit (RTXC), a failed Standing Instruction (SI), NACH mandate, or ECS presentation due to insufficient funds attracts Rs. 250 per instance plus 18% GST, totaling Rs. 295.",
  },
  {
    q: "What penal charge does SBI levy when a personal loan EMI stays unpaid?",
    a: "SBI applies tiered penal charges strictly on the irregular or overdue installment portion: typically around 2.40% per annum for delays up to 60 days, scaling up to around 5.00% per annum when the irregularity extends beyond 60 days, plus applicable GST. Per RBI directives, penal charges are never capitalized into principal.",
  },
  {
    q: "Why did SBI put a hold amount on my Corporate or Government Salary Package account?",
    a: "Most SBI Xpress Credit loans are linked directly to an SBI Salary Package account (CSP, CGSP, SGSP, DSP, or RSP) via an internal Standing Instruction. When an EMI fails on the due date, SBI's Core Banking System places an automated hold or lien for the unpaid installment plus Rs. 295 SI failure fee, sweeping incoming salary or Dearness Allowance credits automatically.",
  },
  {
    q: "What happens to my SBI Xpress Credit EMI if I switch jobs to a private company with an HDFC or ICICI salary account?",
    a: "If you leave your previous employer and stop funding your old SBI salary account without registering an external NACH mandate or funding SBI manually before the due date, the internal SI fails every month (logging Rs. 295 per failure) and your loan quickly slips into SMA-1, SMA-2, and 90+ DPD NPA status.",
  },
  {
    q: "Are SBI personal loan bounce charges lower than private bank and NBFC bounce charges?",
    a: "Yes. SBI's Rs. 250 + GST (Rs. 295) SI/NACH return charge and 2.40% to 5.00% p.a. overdue penal tiers are among the lowest in Indian retail lending, compared to Rs. 450 to Rs. 750 at major private banks and Rs. 600 to Rs. 1,500 (plus 24% to 36% p.a. penal charges) at NBFCs.",
  },
  {
    q: "How can I clear a bounced SBI personal loan EMI manually using YONO?",
    a: "Log into the SBI YONO mobile app or OnlineSBI portal, view your 11-digit Xpress Credit loan account under Loans, and initiate a direct Funds Transfer from your savings account (or via NEFT/IMPS from any external bank using your SBI home branch IFSC and 11-digit loan account number) to clear the irregular amount immediately.",
  },
  {
    q: "Will my external salary bank also charge me if SBI pulls my EMI via NACH?",
    a: "Yes. Where an SBI personal loan is serviced through an external NACH mandate on a private or PSU bank account and bounces for insufficient balance, SBI adds Rs. 295 to your loan charges while your external savings bank separately deducts its own inward NACH return fee (typically Rs. 295 to Rs. 590).",
  },
  {
    q: "Can an SBI branch manager waive a first-time Rs. 295 SI failure charge?",
    a: "If your salary credit from your department, school, PSU, or corporate employer was delayed by a few days due to treasury or payroll processing and you have an otherwise clean repayment history, submitting a written request with salary credit proof at your SBI home branch or via the SBI CRC portal can secure a goodwill reversal.",
  },
  {
    q: "Does SBI settle unsecured Xpress Credit personal loans for salaried borrowers in hardship?",
    a: "When a borrower suffers genuine, verifiable hardship such as private-sector job loss, prolonged medical emergency, disability, or severe multi-loan distress and the unsecured loan enters NPA status (90+ DPD), SBI evaluates compromise settlements through branch/SARB sanctioning authorities, waiving uncollected penal and return charges alongside negotiated principal relief.",
  },
  {
    q: "Should government or PSU employees settle an SBI Xpress Credit loan?",
    a: "Active government, defence, and PSU employees with stable ongoing salaries and SBI salary accounts rarely qualify for deep principal haircuts because SBI has visibility into ongoing payroll credits; restructuring or salary-aligned repayment is usually appropriate. Settlement is primarily viable when employment has ended, pay is severely disrupted, or total multi-lender unsecured debt exceeds Rs. 3,00,000.",
  },
  {
    q: "What is the minimum combined debt required for SettleLoans to assist with SBI personal loan debt?",
    a: "SettleLoans represents salaried borrowers whose total combined unsecured debt across SBI personal loans, private bank loans, credit cards, and NBFC loans is Rs. 3,00,000 or higher.",
  },
];

export default function SbiPersonalLoanEmiBounceChargesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.settleloans.in/sbi-personal-loan-emi-bounce-charges#breadcrumb",
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
            "name": "SBI Personal Loan EMI Bounce Charges",
            "item": "https://www.settleloans.in/sbi-personal-loan-emi-bounce-charges"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.settleloans.in/sbi-personal-loan-emi-bounce-charges#article",
        "headline": "SBI Personal Loan & Xpress Credit EMI Bounce Charges (Verified Schedule)",
        "description": "Complete salaried guide to State Bank of India (SBI) Xpress Credit personal loan SI/NACH bounce fees (Rs. 250 + GST), tiered penal charges, salary holds, and settlement.",
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
          "@id": "https://www.settleloans.in/sbi-personal-loan-emi-bounce-charges"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.settleloans.in/sbi-personal-loan-emi-bounce-charges#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much is the SBI personal loan or Xpress Credit EMI bounce charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under State Bank of India's service charge schedule for retail personal loans including SBI Xpress Credit and Real-Time Xpress Credit (RTXC), a failed Standing Instruction (SI), NACH mandate, or ECS presentation due to insufficient funds attracts Rs. 250 per instance plus 18% GST, totaling Rs. 295."
            }
          },
          {
            "@type": "Question",
            "name": "What penal charge does SBI levy when a personal loan EMI stays unpaid?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SBI applies tiered penal charges strictly on the irregular or overdue installment portion: typically around 2.40% per annum for delays up to 60 days, scaling up to around 5.00% per annum when the irregularity extends beyond 60 days, plus applicable GST. Per RBI directives, penal charges are never capitalized into principal."
            }
          },
          {
            "@type": "Question",
            "name": "Why did SBI put a hold amount on my Corporate or Government Salary Package account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most SBI Xpress Credit loans are linked directly to an SBI Salary Package account (CSP, CGSP, SGSP, DSP, or RSP) via an internal Standing Instruction. When an EMI fails on the due date, SBI's Core Banking System places an automated hold or lien for the unpaid installment plus Rs. 295 SI failure fee, sweeping incoming salary or Dearness Allowance credits automatically."
            }
          },
          {
            "@type": "Question",
            "name": "What happens to my SBI Xpress Credit EMI if I switch jobs to a private company with an HDFC or ICICI salary account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you leave your previous employer and stop funding your old SBI salary account without registering an external NACH mandate or funding SBI manually before the due date, the internal SI fails every month (logging Rs. 295 per failure) and your loan quickly slips into SMA-1, SMA-2, and 90+ DPD NPA status."
            }
          },
          {
            "@type": "Question",
            "name": "Are SBI personal loan bounce charges lower than private bank and NBFC bounce charges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. SBI's Rs. 250 + GST (Rs. 295) SI/NACH return charge and 2.40% to 5.00% p.a. overdue penal tiers are among the lowest in Indian retail lending, compared to Rs. 450 to Rs. 750 at major private banks and Rs. 600 to Rs. 1,500 (plus 24% to 36% p.a. penal charges) at NBFCs."
            }
          },
          {
            "@type": "Question",
            "name": "How can I clear a bounced SBI personal loan EMI manually using YONO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Log into the SBI YONO mobile app or OnlineSBI portal, view your 11-digit Xpress Credit loan account under Loans, and initiate a direct Funds Transfer from your savings account (or via NEFT/IMPS from any external bank using your SBI home branch IFSC and 11-digit loan account number) to clear the irregular amount immediately."
            }
          },
          {
            "@type": "Question",
            "name": "Will my external salary bank also charge me if SBI pulls my EMI via NACH?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Where an SBI personal loan is serviced through an external NACH mandate on a private or PSU bank account and bounces for insufficient balance, SBI adds Rs. 295 to your loan charges while your external savings bank separately deducts its own inward NACH return fee (typically Rs. 295 to Rs. 590)."
            }
          },
          {
            "@type": "Question",
            "name": "Can an SBI branch manager waive a first-time Rs. 295 SI failure charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If your salary credit from your department, school, PSU, or corporate employer was delayed by a few days due to treasury or payroll processing and you have an otherwise clean repayment history, submitting a written request with salary credit proof at your SBI home branch or via the SBI CRC portal can secure a goodwill reversal."
            }
          },
          {
            "@type": "Question",
            "name": "Does SBI settle unsecured Xpress Credit personal loans for salaried borrowers in hardship?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When a borrower suffers genuine, verifiable hardship such as private-sector job loss, prolonged medical emergency, disability, or severe multi-loan distress and the unsecured loan enters NPA status (90+ DPD), SBI evaluates compromise settlements through branch/SARB sanctioning authorities, waiving uncollected penal and return charges alongside negotiated principal relief."
            }
          },
          {
            "@type": "Question",
            "name": "Should government or PSU employees settle an SBI Xpress Credit loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Active government, defence, and PSU employees with stable ongoing salaries and SBI salary accounts rarely qualify for deep principal haircuts because SBI has visibility into ongoing payroll credits; restructuring or salary-aligned repayment is usually appropriate. Settlement is primarily viable when employment has ended, pay is severely disrupted, or total multi-lender unsecured debt exceeds Rs. 3,00,000."
            }
          },
          {
            "@type": "Question",
            "name": "What is the minimum combined debt required for SettleLoans to assist with SBI personal loan debt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SettleLoans represents salaried borrowers whose total combined unsecured debt across SBI personal loans, private bank loans, credit cards, and NBFC loans is Rs. 3,00,000 or higher."
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
              SBI Personal Loan &amp; Xpress Credit EMI Bounce Charges
            </h1>
            <p className="text-base md:text-xl text-[#DEDEDE]/85 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
              Understand State Bank of India&apos;s Rs. 250 (+ 18% GST) Standing Instruction and NACH failure fee, 2.40% to 5.00% p.a. overdue penal tiers, SBI Salary Package account hold sweeps, and legal debt resolution options.
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
                Open SBI Bounce Calculator
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
                  SBI EMI Bounce Charges
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
            {/* Section 1: Official SBI Schedule */}
            <section id="sbi-official-fee-table" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                SBI Personal Loan &amp; Xpress Credit Bounce Fee Schedule
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                State Bank of India&apos;s flagship salaried loan portfolio, led by <strong>SBI Xpress Credit</strong>, <strong>Real-Time Xpress Credit (RTXC) on YONO</strong>, and <strong>SBI Quick Personal Loan</strong> (for borrowers whose salary is credited at another bank), serves corporate employees, IT professionals, teachers, public sector staff, and central/state government employees across India.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-6">
                While SBI charges meaningfully lower service and bounce fees than private banks or NBFCs, missing a scheduled Standing Instruction (SI) or NACH debit triggers immediate Core Banking System holds and irregular-account penal charges. Below is SBI&apos;s verified retail personal loan default schedule checked on 11 November 2026:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-5">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#2E2E2E] text-white">
                      <th className="p-4 font-bold">SBI Retail Personal Loan Charge Head</th>
                      <th className="p-4 font-bold">Published Charge (Excl. GST)</th>
                      <th className="p-4 font-bold">Effective Cost With 18% GST</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Standing Instruction (SI) / NACH / ECS Return</td>
                      <td className="p-4 text-slate-700">Rs. 250 per failed instance</td>
                      <td className="p-4 font-semibold text-red-700">Rs. 295 per failed debit</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Penal Charge (Irregularity up to 60 Days)</td>
                      <td className="p-4 text-slate-700">2.40% per annum on overdue EMI</td>
                      <td className="p-4 font-semibold text-slate-800">2.83% p.a. incl. GST (non-capitalized)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Penal Charge (Irregularity Beyond 60 Days)</td>
                      <td className="p-4 text-slate-700">5.00% per annum on overdue/irregular portion</td>
                      <td className="p-4 font-semibold text-slate-800">5.90% p.a. incl. GST (non-capitalized)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">YONO / OnlineSBI Loan Statement Download</td>
                      <td className="p-4 text-slate-700">Rs. 0 digital access</td>
                      <td className="p-4 font-semibold text-slate-800">Free</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs md:text-sm text-slate-600">
                <strong>Official Source Verification:</strong> Verified against{" "}
                <a
                  href="https://sbi.bank.in/web/interest-rates/interest-rates/loan-schemes-interest-rates/personal-loans-schemes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  State Bank of India Personal Loan Schemes &amp; Service Charge Guidelines
                </a>{" "}
                on <strong>11 November 2026</strong>. Note that this page covers unsecured SBI personal loans issued by State Bank of India, not credit cards issued separately by SBI Card (SBICPSL).
              </div>
            </section>

            {/* Funnel Near Hero */}
            <div className="mb-14">
              <div className="p-5 rounded-t-3xl bg-blue-50 border border-b-0 border-blue-200 text-sm text-slate-800">
                <strong>Salaried Debt Assessment:</strong> Facing SBI Xpress Credit hold deductions alongside private bank personal loans or credit cards? If your <strong>combined unsecured debt across all lenders is ₹3,00,000 or higher</strong>, evaluate your legal settlement eligibility below.
              </div>
              <LoanSettlementAssessmentFunnel className="!mt-0 !rounded-t-none" />
            </div>

            {/* Section 2: Rs. 250 SI & NACH Return Rules */}
            <section id="si-and-nach-return-fee" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                How SBI&apos;s Rs. 250 (+ GST) SI &amp; NACH Return Fee Applies
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Compared with private banks charging Rs. 450 to Rs. 750 and NBFCs charging up to Rs. 1,500 per bounce, SBI&apos;s standard <strong>Rs. 250 plus 18% GST (Rs. 295)</strong> failure fee looks modest on paper. Yet salaried borrowers still run into costly surprises when they overlook how SBI distinguishes between internal Standing Instructions and external NACH mandates:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    Xpress Credit Internal Standing Instruction (SI)
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    When your salary is credited into an SBI account, SBI sets up an internal Standing Instruction synchronized to your employer&apos;s typical salary date (for instance, the 1st, 5th, or last working day of the month). If clear balance is insufficient when the SI executes, SBI logs the Rs. 295 failed-SI charge and marks the unpaid EMI as an active hold on your savings account.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    SBI Quick Personal Loan External NACH Mandate
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Under SBI Quick Personal Loan (sanctioned to salaried employees holding salary accounts with HDFC, ICICI, Axis, or other banks), repayment runs via NPCI NACH. A bounced presentation incurs Rs. 295 on the SBI loan ledger <strong>plus</strong> Rs. 531 to Rs. 590 deducted by your private salary bank for inward NACH return processing.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Tiered Penal Charges */}
            <section id="sbi-tiered-penal-charges" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                SBI&apos;s Tiered Penal Charges: 2.40% p.a. vs 5.00% p.a.
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                SBI structures late payment penalties on retail personal loans to reward quick regularization within the first two billing cycles while stepping up the penalty once an account approaches Non-Performing Asset (NPA) territory past 60 days overdue:
              </p>
              <ul className="space-y-4 mb-6 text-base text-slate-700">
                <li className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200">
                  <strong className="text-[#1F5EFF]">Days 1 to 60 Overdue (SMA-0 &amp; SMA-1 Window):</strong> Penal charges accrue at approximately <strong>2.40% per annum (0.20% per month) plus 18% GST</strong> strictly on the irregular/overdue installment amount. On a Rs. 20,000 missed EMI, 30 days of penal charge is roughly Rs. 40 + GST (Rs. 47).
                </li>
                <li className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <strong className="text-amber-950">Beyond 60 Days Overdue (SMA-2 &amp; 90+ DPD NPA Window):</strong> When irregularity exceeds 60 days, the penal charge scales to approximately <strong>5.00% per annum plus 18% GST</strong> on the overdue portion for the duration of default.
                </li>
              </ul>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                In full compliance with Reserve Bank of India Fair Lending Practice rules on Penal Charges, SBI computes these levies strictly as non-capitalized penal charges. They are not added to your principal to compound normal MCLR-linked interest, though normal daily-reducing loan interest continues running on the unpaid principal component of your missed EMIs until paid or settled.
              </p>
            </section>

            {/* Section 4: SBI Salary Package Hold & Lien */}
            <section id="salary-package-hold-lien" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                How SBI Salary Package Holds &amp; Right of Set-Off Operate
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                If you hold an SBI Corporate Salary Package (CSP), Central/State Government Salary Package (CGSP/SGSP), or Defence Salary Package (DSP) account, SBI&apos;s Core Banking System (CBS) gives the bank instantaneous visibility and recovery reach over your primary income stream.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                When an Xpress Credit EMI bounces on the 5th because an emergency medical bill or family transfer reduced your balance on the 3rd, SBI&apos;s CBS places a <strong>Hold Value</strong> equal to the overdue EMI plus Rs. 295. Inside YONO or OnlineSBI, you will see:
              </p>
              <ul className="space-y-3 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Ledger Balance vs Clear Balance Gap:</strong> Even if someone transfers Rs. 8,000 to your SBI UPI ID to help with household groceries, your Clear/Available Balance stays at Rs. 0 until the entire held Rs. 16,800 EMI + Rs. 295 fee is satisfied.
                </li>
                <li>
                  <strong>Double-EMI Month Shock:</strong> If Month 1&apos;s EMI remains on hold until your next salary lands on the 1st of Month 2, SBI sweeps Month 1&apos;s held EMI the second your salary arrives, and then deducts Month 2&apos;s scheduled EMI four days later on the 5th, wiping out two full EMIs from a single month&apos;s paycheck!
                </li>
                <li>
                  <strong>Cross-Branch SBI Set-Off:</strong> Because all SBI branches share a unified CIF (Customer Information File) on CBS, opening a second savings account at a different SBI branch will still expose deposits under the same CIF to right-of-set-off holds once a loan turns irregular or NPA. Read our legal explainer on{" "}
                  <Link
                    href="https://www.settleloans.in/bank-freeze-salary-account-loan-default"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    salary account freezes and holds during personal loan default
                  </Link>
                  .
                </li>
              </ul>
            </section>

            {/* Section 5: Job Switch & Non-SBI Salary Traps */}
            <section id="job-switch-external-nach" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                The Job-Switch Trap for Corporate SBI Xpress Credit Borrowers
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                One of the most frequent triggers of accidental SBI Xpress Credit defaults occurs when a private-sector IT, banking, manufacturing, or telecom employee resigns from a company that banked with SBI and joins a new employer whose mandatory corporate payroll tie-up is with HDFC Bank, ICICI Bank, or Axis Bank.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                During the 60-to-90-day notice period and full-and-final (F&amp;F) settlement gap, salaries are often held back by the outgoing employer for 45 days. Meanwhile, the old SBI salary account sits at zero balance, silently logging Rs. 295 SI failure fees and crossing 30 and 60 DPD. Even after the new job starts paying into HDFC or ICICI, borrowers who forget to set up a recurring standing NEFT transfer to their 11-digit SBI loan account (or register an external NACH mandate at their SBI home branch) suffer unnecessary CIBIL damage despite having resumed full employment!
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                 Note also that after 3 consecutive months without salary credits, SBI can reclassify an un-serviced Corporate Salary Package account into a normal savings account, exposing it to minimum-balance or regular savings rules alongside loan overdue holds. Whenever you resign from an employer with an SBI payroll tie-up, set up an automated monthly NEFT transfer from your new salary bank to your 11-digit SBI Xpress Credit account at least three days prior to your EMI date, or visit your SBI home branch with cancelled cheques of your new salary bank to register an updated NACH mandate. Read our detailed legal overview of{" "}
                <Link
                  href="https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  salary account ECS and NACH mandate transition rules
                </Link>
                .
              </p>
            </section>

            {/* Section 6: 6-Month Rupee Math */}
            <section id="worked-sbi-cost-example" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Worked Rupee Cost: 1, 3 &amp; 6 Months of SBI EMI Bounces
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Suppose a salaried corporate borrower services a Rs. 7,50,000 SBI personal loan (remaining principal Rs. 5,40,000, monthly EMI <strong>Rs. 16,800</strong>) via external NACH on a private salary account (Rs. 500 + GST inward return fee), with 2 presentations per unpaid month:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Delinquency Window</th>
                      <th className="p-3.5 font-bold">SBI Return Fees (+GST)</th>
                      <th className="p-3.5 font-bold">External Bank Returns (+GST)</th>
                      <th className="p-3.5 font-bold">Tiered Penal (+GST)</th>
                      <th className="p-3.5 font-bold">Total Penalty Drain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 1 (2 bounces, 2.4% p.a. tier)</td>
                      <td className="p-3.5">Rs. 590</td>
                      <td className="p-3.5">Rs. 1,180</td>
                      <td className="p-3.5">Rs. 40</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 1,810</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 3 (6 bounces, 5.0% p.a. NPA)</td>
                      <td className="p-3.5">Rs. 1,770</td>
                      <td className="p-3.5">Rs. 3,540</td>
                      <td className="p-3.5">Rs. 496</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 5,806</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 6 (12 bounces, 180 DPD)</td>
                      <td className="p-3.5">Rs. 3,540</td>
                      <td className="p-3.5">Rs. 7,080</td>
                      <td className="p-3.5">Rs. 1,735</td>
                      <td className="p-3.5 font-black text-red-800">Rs. 12,355</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Compare SBI side-by-side against any private bank or NBFC you also owe inside our{" "}
                <Link
                  href="https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  Personal Loan EMI Bounce Charges Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 7: Manual Clearance via YONO */}
            <section id="yono-manual-clearance" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Clearing Irregular SBI Xpress Credit Dues via YONO &amp; NEFT
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Unlike several NBFCs that lock direct loan account transfers and force borrowers through opaque collection links, State Bank of India makes manual regularization transparent because every Xpress Credit facility has its own standard <strong>11-digit SBI Loan Account Number</strong>:
              </p>
              <ol className="space-y-4 list-decimal pl-5 text-base text-slate-700 mb-6">
                <li>
                  <strong>Direct NEFT / IMPS to the 11-Digit Loan Account:</strong> If your SBI savings account has a complicated multi-hold or you hold funds in HDFC/ICICI, add your 11-digit SBI Personal Loan account number as a beneficiary using your SBI home branch IFSC code (`SBIN00XXXXX`) and transfer the exact irregular installment directly into the loan account!
                </li>
                <li>
                  <strong>Inside SBI YONO (&quot;Loans -&gt; Xpress Credit -&gt; Pay Now&quot;):</strong> Check the &quot;Irregular Amount / Arrear&quot; figure shown on the loan detail screen and transfer immediately so your account returns to &quot;Regular / Standard&quot; status before month-end bureau reporting.
                </li>
                <li>
                  <strong>Requesting Hold Removal After Direct Loan Payment:</strong> Occasionally, if you pay directly into the 11-digit loan account via external NEFT while an old SI hold still sits on your SBI savings account, contact customer care or your home branch with the payment reference to release any residual duplicate hold.
                </li>
              </ol>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                What if the Rs. 295 Standing Instruction failure charge occurred solely because your state treasury, municipal corporation, school board, PSU, or corporate payroll vendor released monthly salaries four days behind schedule? Salaried SBI borrowers with a clean prior repayment record can submit a short written waiver request at their SBI home branch or raise a ticket on the <strong>SBI Customer Request and Complaint (CRC)</strong> portal (`crcf.sbi.co.in` / OnlineSBI Grievance menu), attaching their salary account passbook showing the delayed employer payroll credit and immediate regularization of the Xpress Credit installment. Branch officials have delegated authority to reverse genuine technical or treasury-delay SI return charges so long as the loan account itself is regular.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Additionally, make a habit of downloading your detailed Xpress Credit Interest Certificate and Transaction Statement inside YONO every quarter. Reviewing those entries confirms that every manual NEFT transfer reduced your principal balance properly and that no stale Standing Instruction hold remains queued against upcoming festival bonuses or leave encashment credits.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Also review our practical guides on{" "}
                <Link
                  href="https://www.settleloans.in/loan-overdue-nach-bounce-immediate-steps"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  immediate steps after an EMI/NACH bounce
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.settleloans.in/stop-emi-bounce-cycle-for-good"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  ending the recurring EMI bounce cycle
                </Link>
                .
              </p>
            </section>

            {/* Section 8: Salaried SBI Settlement Roadmap */}
            <section id="sbi-salaried-settlement" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Salaried SBI Personal Loan Settlement Path (Debt ≥ ₹3 Lakhs)
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Can an unsecured SBI Xpress Credit or Quick Personal Loan be settled? Yes, under specific, genuine hardship conditions, although salaried borrowers must understand how public-sector bank settlement committees evaluate files differently from private NBFCs:
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                First, distinguish between active government/PSU employees whose salaries continue arriving inside SBI every month versus private-sector, contract, or former corporate employees experiencing real income loss or multi-lender over-leverage. When an active government employee&apos;s salary still lands in the same SBI CIF every month, the bank&apos;s Core Banking System can recover installments directly via internal hold sweeps, making tenure restructuring or top-up consolidation more realistic than a deep principal waiver. Conversely, when a corporate employee has suffered job loss, severe pay cuts, business closure, or hospitalization while carrying multiple personal loans and credit cards, SBI&apos;s Stressed Assets Recovery Branch (SARB) or regional/branch sanctioning committee actively evaluates structured compromise settlements post-NPA.
              </p>
              <ul className="space-y-4 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Private-Sector Job Loss, Pay Cut, or Multi-Loan Insolvency:</strong> When a corporate or private-sector salaried borrower loses employment, suffers severe medical expenses, or is trapped under ₹3,00,000+ of combined personal loans and cards across multiple banks and NBFCs, and the SBI account turns NPA after 90+ DPD, SBI&apos;s Stressed Assets or branch compromise committees review documented hardship proposals backed by bank statements, relieving letters, and income tax/Form 16 records.
                </li>
                <li>
                  <strong>Protecting Ongoing Household Survival Income:</strong> Where active private-sector payroll has moved to a non-SBI bank, keeping survival cash separated from old CIF holds allows your family to cover rent, children&apos;s education, and medical essentials while accumulating lump-sum funds for a formal compromise offer. Also see how to manage{" "}
                  <Link
                    href="https://www.settleloans.in/reminder-calls-after-emi-bounce"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    bank reminder calls after an EMI bounce
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://www.settleloans.in/multiple-personal-loan-settlement"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    multiple personal loan settlement prioritization
                  </Link>
                  .
                </li>
                <li>
                  <strong>Full Waiver of Uncollected Penal &amp; Return Fees + Sanction Letter:</strong> Approved SBI settlements routinely waive 100% of uncollected Rs. 295 SI/NACH return fees and 2.40% to 5.00% penal charges alongside a structured haircut on remaining dues (indicatively 45% to 65% of principal depending on age of NPA and hardship verification; never guaranteed). Never make informal part-payments without a written SBI compromise sanction letter signed by the competent branch or regional authority specifying full-and-final closure terms and No Dues Certificate issuance. Explore our{" "}
                  <Link
                    href="https://www.settleloans.in/loan-settlement/sbi"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    SBI personal loan settlement hub
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://www.settleloans.in/loan-settlement-for-salaried-people"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    salaried loan settlement guide
                  </Link>
                  .
                </li>
              </ul>
            </section>

            {/* Section 9: FAQs */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                SBI Personal Loan &amp; Xpress Credit Bounce FAQs
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
                Facing SBI Salary Holds &amp; Multi-Lender EMI Stress?
              </div>
              <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-6">
                If your combined unsecured debt across SBI, private banks, NBFCs, or credit cards is ₹3,00,000 or above, check your structured settlement roadmap today.
              </p>
              <a
                href="#settlement-assessment"
                className="inline-block bg-[#1F5EFF] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Start Free Debt Assessment
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
              <strong>Disclaimer:</strong> SettleLoans is an independent debt resolution and legal advisory platform and is not affiliated with State Bank of India (SBI). Charge figures reflect SBI&apos;s published retail personal loan service schedules checked on 11 November 2026 and remain subject to bank revisions and individual sanction terms.
            </div>
          </article>

          {/* Right Column: Sticky Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-6 text-white border border-white/10 shadow-xl">
                <div className="text-lg font-black mb-2">
                  SBI Bounce Calculator
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-5">
                  Model SBI&apos;s Rs. 250 + GST SI/NACH return fees and 2.40% / 5.00% p.a. overdue penal charges alongside other loans.
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
                      href="https://www.settleloans.in/loan-settlement/sbi"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • SBI Loan Settlement Hub
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
                      href="https://www.settleloans.in/icici-personal-loan-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • ICICI Bank PL Bounce Charges
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
                      href="https://www.settleloans.in/bank-freeze-salary-account-loan-default"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Salary Account Freeze Rules
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/loan-settlement-for-salaried-people"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Loan Settlement for Salaried Staff
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
