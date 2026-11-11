import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import LoanSettlementAssessmentFunnel from "@/components/LoanSettlementAssessmentFunnel";

export const metadata: Metadata = {
  title: "SMFG India Credit EMI Bounce Charges | SettleLoans",
  description: "Check official SMFG India Credit (Fullerton) personal loan EMI bounce charges (Rs. 500 + GST), 2% monthly penal charges, NACH rules, and settlement.",
  alternates: {
    canonical: "https://www.settleloans.in/smfg-india-credit-emi-bounce-charges",
  },
  openGraph: {
    title: "SMFG India Credit EMI Bounce Charges | SettleLoans",
    description: "Check official SMFG India Credit (Fullerton) personal loan EMI bounce charges (Rs. 500 + GST), 2% monthly penal charges, NACH rules, and settlement.",
    url: "https://www.settleloans.in/smfg-india-credit-emi-bounce-charges",
    type: "article",
    images: [
      {
        url: "https://www.settleloans.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SMFG India Credit Personal Loan EMI Bounce Charges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMFG India Credit EMI Bounce Charges | SettleLoans",
    description: "Check official SMFG India Credit (Fullerton) personal loan EMI bounce charges (Rs. 500 + GST), 2% monthly penal charges, NACH rules, and settlement.",
    images: ["https://www.settleloans.in/og-image.jpg"],
  },
};

const tocItems = [
  { id: "smfg-official-schedule", title: "Official SMFG Schedule Table" },
  { id: "rs-500-dishonour-double-hit", title: "Rs. 500 + GST & Bank Return" },
  { id: "two-percent-daily-penal", title: "2% Monthly Day-to-Day Penal" },
  { id: "fullerton-rebrand-mconnect", title: "Fullerton Legacy & mConnect App" },
  { id: "no-part-prepayment-lockin", title: "Up to 7% Foreclosure & Lock-In" },
  { id: "six-month-smfg-projection", title: "6-Month Overdue Cost Table" },
  { id: "mconnect-portal-clearance", title: "Paying Overdue on mConnect" },
  { id: "smfg-soa-return-codes", title: "Auditing Your SMFG Statement" },
  { id: "cibil-nodal-escalation", title: "15-Day CIBIL & GRO Escalation" },
  { id: "smfg-salaried-settlement", title: "Salaried SMFG Settlement Path" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
  {
    q: "What is the SMFG India Credit personal loan EMI bounce charge?",
    a: "According to SMFG India Credit Co. Ltd.'s (formerly Fullerton India Credit Co. Ltd.) published Loan Charges schedule, the repayment instrument, NACH, ECS, or cheque dishonour charge on personal loans is Rs. 500 per dishonour presentation plus 18% GST, totaling Rs. 590 per failed debit.",
  },
  {
    q: "How much penal charge does SMFG India Credit levy on overdue EMIs?",
    a: "SMFG India Credit levies a Late Payment / Penal Charge of 2% per month (24% per annum) calculated on a day-to-day basis on the overdue EMI amount from the scheduled due date until actual payment, plus 18% GST. Under RBI Fair Lending Practice norms, this penal charge is non-capitalized and never compounds into loan principal.",
  },
  {
    q: "Why did one bounced SMFG India Credit EMI cost me up to Rs. 1,180?",
    a: "Because SMFG India Credit is an NBFC collecting EMIs via e-NACH from your external salary bank (HDFC, ICICI, SBI, Axis, or Kotak), a failed debit adds Rs. 500 + GST (Rs. 590) to your SMFG loan ledger while your salary bank separately deducts Rs. 295 to Rs. 590 as an inward NACH return fee, totaling Rs. 885 to Rs. 1,180 per bounce.",
  },
  {
    q: "Are Fullerton India personal loans now governed by SMFG India Credit charges?",
    a: "Yes. Following Sumitomo Mitsui Financial Group's acquisition of Fullerton India Credit Company Limited, the lender rebranded to SMFG India Credit Co. Ltd. Both legacy Fullerton India loans and new SMFG Instaloan / mConnect personal loans follow SMFG India Credit's published schedule and your loan's Key Fact Statement.",
  },
  {
    q: "What is SMFG India Credit's fee for swapping a NACH mandate or bank account?",
    a: "Changing your NACH mandate, post-dated cheque set, or repayment bank account on an active SMFG India Credit personal loan attracts a swap charge of Rs. 500 plus 18% GST (Rs. 590) per swap instance.",
  },
  {
    q: "Can I make part-prepayments on an SMFG India Credit personal loan to lower my EMI?",
    a: "Unlike many private banks, SMFG India Credit's standard personal loan policy generally does not permit partial prepayments, and full foreclosure attracts a steep 2% to 7% plus 18% GST depending on elapsed tenure (reducing to nil only after 36 EMIs on eligible retail variants).",
  },
  {
    q: "How can I pay a bounced SMFG India Credit EMI manually before another debit runs?",
    a: "Log into the SMFG India Credit mConnect Mobile App or online Service Portal using your Loan Account Number (LAN) or registered mobile number, select Pay Overdue EMI, and complete payment via UPI, Debit Card, or NetBanking within 24 to 48 hours of the missed due date to suppress mid-month NACH retries.",
  },
  {
    q: "Can I get an SMFG India Credit Rs. 590 bounce fee waived if my bank had balance?",
    a: "Yes. If your salary bank account held clear funds exceeding the EMI on the evening prior to your due date and the e-NACH presentation returned under a technical clearing error (NPCI Return Code R20), raise a service request via mConnect or namaste@smfgindia.com attaching your stamped bank statement for full fee reversal.",
  },
  {
    q: "How fast does SMFG India Credit report a missed EMI to CIBIL?",
    a: "Under RBI's fortnightly credit bureau reporting mandate, SMFG India Credit uploads borrower Days Past Due (DPD) files to CIBIL, Experian, Equifax, and CRIF High Mark as of the 15th and last day of every month. Leaving an early-month bounce unpaid past the 15th records an immediate SMA-0 delinquency mark.",
  },
  {
    q: "Does SMFG India Credit waive Rs. 590 bounce and 24% p.a. penal fees in settlement?",
    a: "When an unsecured SMFG India Credit personal loan crosses 90 days past due into Non-Performing Asset (NPA) status due to genuine salaried hardship such as job loss, pay cuts, or medical emergencies, formal negotiated settlements typically waive 100% of accumulated bounce fees and 2% monthly penal charges while settling principal at an agreed haircut.",
  },
  {
    q: "When can SettleLoans represent me for SMFG India Credit personal loan settlement?",
    a: "SettleLoans assists salaried borrowers whose combined unsecured debt across SMFG India Credit (Fullerton), bank personal loans, credit cards, and other NBFCs is Rs. 3,00,000 or higher.",
  },
];

export default function SmfgIndiaCreditEmiBounceChargesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.settleloans.in/smfg-india-credit-emi-bounce-charges#breadcrumb",
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
            "name": "SMFG India Credit EMI Bounce Charges",
            "item": "https://www.settleloans.in/smfg-india-credit-emi-bounce-charges"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.settleloans.in/smfg-india-credit-emi-bounce-charges#article",
        "headline": "SMFG India Credit Personal Loan EMI & NACH Bounce Charges (Verified Schedule)",
        "description": "Verified guide to SMFG India Credit (formerly Fullerton India) personal loan EMI bounce fees (Rs. 500 + GST), 2% monthly day-to-day penal charges, and settlement.",
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
          "@id": "https://www.settleloans.in/smfg-india-credit-emi-bounce-charges"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.settleloans.in/smfg-india-credit-emi-bounce-charges#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the SMFG India Credit personal loan EMI bounce charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "According to SMFG India Credit Co. Ltd.'s (formerly Fullerton India Credit Co. Ltd.) published Loan Charges schedule, the repayment instrument, NACH, ECS, or cheque dishonour charge on personal loans is Rs. 500 per dishonour presentation plus 18% GST, totaling Rs. 590 per failed debit."
            }
          },
          {
            "@type": "Question",
            "name": "How much penal charge does SMFG India Credit levy on overdue EMIs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SMFG India Credit levies a Late Payment / Penal Charge of 2% per month (24% per annum) calculated on a day-to-day basis on the overdue EMI amount from the scheduled due date until actual payment, plus 18% GST. Under RBI Fair Lending Practice norms, this penal charge is non-capitalized and never compounds into loan principal."
            }
          },
          {
            "@type": "Question",
            "name": "Why did one bounced SMFG India Credit EMI cost me up to Rs. 1,180?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because SMFG India Credit is an NBFC collecting EMIs via e-NACH from your external salary bank (HDFC, ICICI, SBI, Axis, or Kotak), a failed debit adds Rs. 500 + GST (Rs. 590) to your SMFG loan ledger while your salary bank separately deducts Rs. 295 to Rs. 590 as an inward NACH return fee, totaling Rs. 885 to Rs. 1,180 per bounce."
            }
          },
          {
            "@type": "Question",
            "name": "Are Fullerton India personal loans now governed by SMFG India Credit charges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Following Sumitomo Mitsui Financial Group's acquisition of Fullerton India Credit Company Limited, the lender rebranded to SMFG India Credit Co. Ltd. Both legacy Fullerton India loans and new SMFG Instaloan / mConnect personal loans follow SMFG India Credit's published schedule and your loan's Key Fact Statement."
            }
          },
          {
            "@type": "Question",
            "name": "What is SMFG India Credit's fee for swapping a NACH mandate or bank account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Changing your NACH mandate, post-dated cheque set, or repayment bank account on an active SMFG India Credit personal loan attracts a swap charge of Rs. 500 plus 18% GST (Rs. 590) per swap instance."
            }
          },
          {
            "@type": "Question",
            "name": "Can I make part-prepayments on an SMFG India Credit personal loan to lower my EMI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike many private banks, SMFG India Credit's standard personal loan policy generally does not permit partial prepayments, and full foreclosure attracts a steep 2% to 7% plus 18% GST depending on elapsed tenure (reducing to nil only after 36 EMIs on eligible retail variants)."
            }
          },
          {
            "@type": "Question",
            "name": "How can I pay a bounced SMFG India Credit EMI manually before another debit runs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Log into the SMFG India Credit mConnect Mobile App or online Service Portal using your Loan Account Number (LAN) or registered mobile number, select Pay Overdue EMI, and complete payment via UPI, Debit Card, or NetBanking within 24 to 48 hours of the missed due date to suppress mid-month NACH retries."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get an SMFG India Credit Rs. 590 bounce fee waived if my bank had balance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. If your salary bank account held clear funds exceeding the EMI on the evening prior to your due date and the e-NACH presentation returned under a technical clearing error (NPCI Return Code R20), raise a service request via mConnect or namaste@smfgindia.com attaching your stamped bank statement for full fee reversal."
            }
          },
          {
            "@type": "Question",
            "name": "How fast does SMFG India Credit report a missed EMI to CIBIL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under RBI's fortnightly credit bureau reporting mandate, SMFG India Credit uploads borrower Days Past Due (DPD) files to CIBIL, Experian, Equifax, and CRIF High Mark as of the 15th and last day of every month. Leaving an early-month bounce unpaid past the 15th records an immediate SMA-0 delinquency mark."
            }
          },
          {
            "@type": "Question",
            "name": "Does SMFG India Credit waive Rs. 590 bounce and 24% p.a. penal fees in settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When an unsecured SMFG India Credit personal loan crosses 90 days past due into Non-Performing Asset (NPA) status due to genuine salaried hardship such as job loss, pay cuts, or medical emergencies, formal negotiated settlements typically waive 100% of accumulated bounce fees and 2% monthly penal charges while settling principal at an agreed haircut."
            }
          },
          {
            "@type": "Question",
            "name": "When can SettleLoans represent me for SMFG India Credit personal loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SettleLoans assists salaried borrowers whose combined unsecured debt across SMFG India Credit (Fullerton), bank personal loans, credit cards, and other NBFCs is Rs. 3,00,000 or higher."
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
              Verified Pricing Policy • Checked 11 Nov 2026
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#DEDEDE] mb-6 leading-[1.12] tracking-tight">
              SMFG India Credit Personal Loan EMI &amp; NACH Bounce Charges
            </h1>
            <p className="text-base md:text-xl text-[#DEDEDE]/85 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
              Complete salaried borrower guide to SMFG India Credit (formerly Fullerton India) Rs. 500 + 18% GST EMI dishonour fees, 2% monthly day-to-day penal charges, strict lock-in rules, and structured settlement options.
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
                Calculate SMFG Bounce Drain
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
                  SMFG India Credit Bounce Charges
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
            {/* Section 1: Official SMFG Schedule */}
            <section id="smfg-official-schedule" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                SMFG India Credit Personal Loan Schedule of Charges
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                <strong>SMFG India Credit Co. Ltd.</strong> (formerly known across India as <strong>Fullerton India Credit Co. Ltd.</strong> prior to its acquisition by Japan&apos;s Sumitomo Mitsui Financial Group) is one of India&apos;s widest-reaching retail personal loan NBFCs, serving salaried employees across metro IT hubs, Tier-2 industrial centres, and Tier-3 towns through branch channels and the <em>SMFG Instaloan / mConnect</em> digital ecosystem. When a monthly NACH or ECS debit fails, SMFG India Credit levies a flat <strong>Rs. 500 plus 18% GST per dishonour presentation</strong> alongside a <strong>2% per month (24% per annum) day-to-day overdue penal charge</strong>.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-6">
                All tariff rules in the table below were verified directly against SMFG India Credit&apos;s official Pricing Policy and Loan Charges schedule on 11 November 2026:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-5">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#2E2E2E] text-white">
                      <th className="p-4 font-bold">SMFG India Credit Fee Head</th>
                      <th className="p-4 font-bold">Official Published Tariff</th>
                      <th className="p-4 font-bold">Effective Outflow With 18% GST</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Cheque / NACH / ECS Dishonour Charge</td>
                      <td className="p-4 text-slate-700">Rs. 500 per presentation + 18% GST</td>
                      <td className="p-4 font-semibold text-red-700">Rs. 590 per failed presentation</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Penal Charge (Overdue / Late EMI)</td>
                      <td className="p-4 text-slate-700">2% per month (24% p.a.) day-to-day on overdue EMI + GST</td>
                      <td className="p-4 font-semibold text-red-700">2.36% monthly pro-rated daily (non-capitalized)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Repayment Mode / Mandate Swap Fee</td>
                      <td className="p-4 text-slate-700">Rs. 500 per swap instance + 18% GST</td>
                      <td className="p-4 font-semibold text-slate-800">Rs. 590 per bank mandate swap</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Foreclosure / Pre-closure Charge</td>
                      <td className="p-4 text-slate-700">2% to 7% + 18% GST by tenure (0% after 36 EMIs)</td>
                      <td className="p-4 font-semibold text-slate-800">Up to 8.26% in early loan tenure</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Part-Prepayment Facility</td>
                      <td className="p-4 text-slate-700">Generally not permitted on standard retail PL</td>
                      <td className="p-4 font-semibold text-slate-800">No partial EMI-reduction paydown</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs md:text-sm text-slate-600">
                <strong>Official Source Verification:</strong> Verified against{" "}
                <a
                  href="https://www.smfgindiacredit.com/pricing-policy/loan-charges.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  SMFG India Credit Official Pricing Policy &amp; Loan Charges
                </a>{" "}
                on <strong>11 November 2026</strong>. Always cross-verify your signed Key Fact Statement (KFS) inside the mConnect app for variant-specific foreclosure lock-in slabs.
              </div>
            </section>

            {/* Funnel Near Hero */}
            <div className="mb-14">
              <div className="p-5 rounded-t-3xl bg-blue-50 border border-b-0 border-blue-200 text-sm text-slate-800">
                <strong>Salaried Debt Assessment:</strong> Facing SMFG India Credit (Fullerton) EMI bounces alongside credit cards, bank personal loans, or app loans? SettleLoans assists salaried borrowers when <strong>combined unsecured debt across all lenders is ₹3,00,000 or higher</strong>.
              </div>
              <LoanSettlementAssessmentFunnel className="!mt-0 !rounded-t-none" />
            </div>

            {/* Section 2: Rs. 500 + GST & Bank Return Double Hit */}
            <section id="rs-500-dishonour-double-hit" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Why Every SMFG Bounce Costs Rs. 885 to Rs. 1,180 in Real Terms
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Notice the exact wording in SMFG India Credit&apos;s published tariff: Rs. 500 + 18% GST (<strong>Rs. 590</strong>) is billed <em>per dishonour presentation</em>, not once per calendar month! Because SMFG India Credit operates as an NBFC pulling monthly EMIs via NPCI e-NACH from your external corporate salary account (typically on the <strong>4th, 5th, or 7th of every month</strong>), two separate financial hits fire on every failed presentation:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    1. SMFG Loan Overdue Bucket (Rs. 590)
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Rs. 500 base dishonour fee plus Rs. 90 GST is added immediately to your SMFG India Credit Loan Account Number (LAN) overdue charges ledger.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-red-50/70 border border-red-200">
                  <h3 className="text-lg font-black text-red-700 mb-2">
                    2. Salary Bank NACH Return (Rs. 295 to Rs. 590)
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Your own salary bank (SBI at Rs. 295, or HDFC, ICICI, Axis, Kotak at Rs. 531 to Rs. 590) deducts an inward NACH return charge directly from your remaining savings balance, bringing each failed presentation to <strong>Rs. 885 to Rs. 1,180</strong>!
                  </p>
                </div>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                When an unpaid 5th-date installment triggers two automated NACH presentations inside the same month (say on the 5th and the 12th), a salaried borrower loses <strong>Rs. 1,770 to Rs. 2,360</strong> in pure presentation fees before counting daily overdue penal charges!
              </p>
            </section>

            {/* Section 3: 2% Monthly Day-to-Day Penal Rule */}
            <section id="two-percent-daily-penal" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                How SMFG&apos;s 2% Monthly Day-to-Day Penal Charge Accrues
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                SMFG India Credit&apos;s pricing policy specifies a Late Payment / Penal Charge of <strong>2% per month (24% per annum) calculated day-to-day on the overdue EMI amount</strong> from the scheduled due date until the actual date of payment, plus 18% GST.
              </p>
              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 mb-6">
                <h3 className="text-lg font-black text-[#1F5EFF] mb-2">
                  Day-to-Day Calculation on a Rs. 16,000 EMI
                </h3>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  Suppose your Rs. 16,000 SMFG EMI bounces on the 5th. Two percent per month equals Rs. 320 + 18% GST = <strong>Rs. 377.60 for a full 30-day month</strong>, or roughly <strong>Rs. 12.59 per day</strong> inclusive of tax. If you pay manually 6 days late on the 11th after delayed corporate payroll arrives, your pro-rated penal charge is only ~Rs. 76. However, if three consecutive EMIs remain unpaid through Day 90 (NPA stage), cumulative overdue EMI-months generate 6 × Rs. 377.60 = <strong>Rs. 2,266</strong> in non-capitalized penal charges on top of bounce fees.
                </p>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Under Reserve Bank of India Fair Lending Practice rules on Penal Charges, SMFG India Credit is prohibited from capitalizing these day-to-day penal charges into your loan principal, so contractual loan interest never compounds on unpaid penalties.
              </p>
            </section>

            {/* Section 4: Fullerton Legacy & mConnect App */}
            <section id="fullerton-rebrand-mconnect" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Fullerton India Rebrand &amp; mConnect App Mandate Nuances
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Salaried borrowers holding older 36-month to 60-month personal loans taken under the <strong>Fullerton India</strong> brand often get startled when their bank statement SMS alerts suddenly mention <em>&quot;ACH Debit Return - Fullerton India&quot;</em> on one line and collection emails arrive from <em>@smfgindia.com</em> on another. Both refer to the exact same legal lender (<strong>SMFG India Credit Co. Ltd.</strong>).
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Be extra cautious if you accepted a top-up personal loan via the <strong>SMFG mConnect or Instaloan app</strong> without closing your older Fullerton LAN: unless the old LAN was explicitly foreclosed out of the top-up proceeds, two separate NACH mandates can remain active on your bank account, doubling your Rs. 1,180 bounce-and-bank-return loss whenever a single paycheck is delayed!
              </p>
            </section>

            {/* Section 5: Up to 7% Foreclosure & No Part-Prepayment */}
            <section id="no-part-prepayment-lockin" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Why 2% to 7% Foreclosure &amp; Zero Part-Pay Rules Trap Salaried Staff
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Two structural clauses inside SMFG India Credit&apos;s personal loan schedule make escaping high-interest debt far harder than at public-sector or prime private banks:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Part-Prepayment Generally Not Permitted:</strong> If you receive an annual performance bonus of Rs. 80,000 hoping to pay down principal and shrink your monthly SMFG EMI, standard retail personal loan terms generally bar partial prepayments altogether!
                </li>
                <li>
                  <strong>Steep Early Foreclosure Slabs (Up to 7% + GST):</strong> Closing an SMFG personal loan early within initial tenure buckets can attract up to <strong>7% + 18% GST (8.26%)</strong> on principal outstanding (tapering down through 5%, 3%, and 2% in later years, reaching 0% only after 36 EMIs on eligible schemes). Combined with CIBIL score drops after even one or two EMI bounces, balance-transfer refinancing becomes completely unviable.
                </li>
              </ul>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Consider what that means mathematically on a Rs. 6,00,000 SMFG India Credit personal loan in Year 1: attempting to exit via a bank balance transfer demands up to <strong>Rs. 49,560 upfront in foreclosure and GST charges alone</strong>! Salaried employees whose company shifts monthly payroll from the 1st to the 7th or 10th also suffer severe cash-flow friction when SMFG&apos;s e-NACH mandate presents on the 4th or 5th of every month.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Even if you religiously clear the installment manually on the 8th via the mConnect app every month after salary arrives, letting the 4th/5th e-NACH bounce twelve times a year drains <strong>Rs. 10,620 to Rs. 14,160 annually</strong> in combined SMFG dishonour fees and salary-bank inward return charges while recording twelve consecutive late-payment flags on your credit bureau report. Maintaining a one-EMI liquidity buffer in your repayment account ahead of the 3rd is the only way to keep an active SMFG loan penalty-free.
              </p>
            </section>

            {/* Section 6: 6-Month Overdue Cost Table */}
            <section id="six-month-smfg-projection" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                6-Month Overdue Cost Projection on an SMFG Personal Loan
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Consider a salaried BPO team leader carrying a Rs. 4,80,000 SMFG India Credit Personal Loan (remaining principal Rs. 3,85,000, monthly EMI <strong>Rs. 15,200</strong>) linked via e-NACH to a private salary bank charging Rs. 500 + GST per inward return, assuming 2 NACH presentations per unpaid month:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Delinquency Horizon</th>
                      <th className="p-3.5 font-bold">SMFG Bounce Fees (+GST)</th>
                      <th className="p-3.5 font-bold">Salary Bank Returns (+GST)</th>
                      <th className="p-3.5 font-bold">2% Monthly Penal (+GST)</th>
                      <th className="p-3.5 font-bold">Total Penalty Drain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 1 (2 bounces, 30 DPD)</td>
                      <td className="p-3.5">Rs. 1,180</td>
                      <td className="p-3.5">Rs. 1,180</td>
                      <td className="p-3.5">Rs. 359</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 2,719</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 3 (6 bounces, 90 DPD NPA)</td>
                      <td className="p-3.5">Rs. 3,540</td>
                      <td className="p-3.5">Rs. 3,540</td>
                      <td className="p-3.5">Rs. 2,152</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 9,232</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 6 (12 bounces, 180 DPD)</td>
                      <td className="p-3.5">Rs. 7,080</td>
                      <td className="p-3.5">Rs. 7,080</td>
                      <td className="p-3.5">Rs. 7,533</td>
                      <td className="p-3.5 font-black text-red-800">Rs. 21,693</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Look how fast Rs. 590 bounce fees, Rs. 590 bank returns, and 24% p.a. penal charges erode <strong>Rs. 21,693</strong> across six unpaid cycles! Model your exact SMFG EMI and multi-lender balances inside our{" "}
                <Link
                  href="https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  Personal Loan EMI Bounce Charges Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 7: Paying Overdue on mConnect */}
            <section id="mconnect-portal-clearance" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Clearing Overdue SMFG EMIs on mConnect &amp; Stopping Retries
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                If your combined unsecured debt sits under Rs. 3,00,000 and the missed debit was a one-time payroll timing delay, clear the overdue installment swiftly to halt repeat NACH presentations:
              </p>
              <ol className="space-y-4 list-decimal pl-5 text-base text-slate-700 mb-6">
                <li>
                  <strong>Pay Inside the SMFG mConnect App or Online Payment Portal:</strong> Enter your Loan Account Number (LAN), select Overdue EMI + Charges, and pay via UPI or NetBanking within 24 to 48 hours of the missed due date so day-to-day 2% monthly penal charges stop immediately.
                </li>
                <li>
                  <strong>Insist on Official LAN Receipts Over Field Cash Collection:</strong> SMFG India Credit operates an extensive field collection network in Tier-1 and Tier-2 cities. Never hand over unaccounted cash without an instant digital system receipt or pay into any agent&apos;s personal UPI account; pay directly on mConnect or official BBPS Loan Repayment.
                </li>
                <li>
                  <strong>Complete a Rs. 500 + GST Mandate Swap When Changing Salary Banks:</strong> Register your new salary bank&apos;s e-Mandate proactively after switching jobs so your old zero-balance account does not rack up monthly Rs. 590 bounce charges.
                </li>
              </ol>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Review our step-by-step guides on{" "}
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
                  stopping the monthly EMI bounce cycle
                </Link>
                .
              </p>
            </section>

            {/* Section 8: Auditing Your SMFG Statement */}
            <section id="smfg-soa-return-codes" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Auditing Your SMFG Statement of Account &amp; Legal Notices
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Download your itemized Statement of Account (SOA) digitally through the SMFG mConnect app (requesting physical copies at branches may attract document fees under the schedule of charges) and audit three critical areas:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Presentation-to-Statement Match:</strong> Verify that every Rs. 590 dishonour fee matches an actual NACH presentation date on your bank statement and that day-to-day 2% monthly penal entries remain strictly uncapitalized.
                </li>
                <li>
                  <strong>NPCI Technical Return Reversals (Code R20):</strong> If your bank account held clear funds above the EMI on the evening before due date and the mandate returned under an NPCI clearing timeout, email your bank statement via mConnect support to reverse both the Rs. 590 bounce charge and any CIBIL DPD entry.
                </li>
                <li>
                  <strong>Section 25 PSS Act &amp; Conciliation Notices:</strong> Consecutive e-NACH returns at SMFG India Credit frequently trigger legal demand notices under Section 25 of the Payment and Settlement Systems Act, 2007 or Lok Adalat / conciliation invitations. Never panic or ignore written notices; Lok Adalat and conciliation forums can actually serve as structured, legally binding venues to close NPA personal loans when guided properly! Read{" "}
                  <Link
                    href="https://www.settleloans.in/ecs-nach-bounce-legal-notice-section-25-payment-settlement-act-guide"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    our Section 25 NACH bounce legal notice guide
                  </Link>
                  .
                </li>
              </ul>
            </section>

            {/* Section 9: 15-Day CIBIL & GRO Escalation */}
            <section id="cibil-nodal-escalation" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                15-Day CIBIL Reporting &amp; SMFG Grievance Redressal Ladder
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Under RBI&apos;s fortnightly bureau reporting rules, SMFG India Credit transmits borrower Days Past Due (DPD) files to CIBIL, Experian, Equifax, and CRIF High Mark as of the <strong>15th and last day of every month</strong>. A 4th-date or 5th-date bounce left unpaid past the 15th records an immediate SMA-0 delinquency mark, advancing through SMA-1 (31 to 60 DPD), SMA-2 (61 to 90 DPD), and Non-Performing Asset (NPA) status past 90 DPD.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-4">
                If you encounter unreversed technical bounce fees or field/tele-collection conduct violating RBI&apos;s Fair Practices Code (such as calls outside 8:00 AM to 7:00 PM or workplace/neighbour disclosure), submit a written complaint to SMFG India Credit Customer Care (Level 1), escalate unresolved tickets to SMFG&apos;s <strong>Grievance Redressal Officer (GRO) / Principal Nodal Officer</strong>, and past 30 days to the Reserve Bank Integrated Ombudsman portal. Also read{" "}
                <Link
                  href="https://www.settleloans.in/reminder-calls-after-emi-bounce"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  borrower rights during recovery reminder calls
                </Link>
                .
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Keeping a documented email trail with ticket reference numbers, bank statement snapshots, and official hardship proofs protects you against informal pressure from third-party recovery agencies while establishing transparent good-faith conduct if your account later enters formal NPA settlement review.
              </p>
            </section>

            {/* Section 10: Salaried SMFG Settlement Path */}
            <section id="smfg-salaried-settlement" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Salaried SMFG India Credit Settlement Path (Debt ≥ ₹3 Lakhs)
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Because SMFG India Credit bars partial prepayments and charges up to 7% + GST on early foreclosure, salaried employees hit by layoffs, salary cuts, business closures, or medical emergencies often get trapped paying high-rate EMIs and Rs. 1,180 double-bounces until household cash collapses completely. Sending random partial amounts at 60+ or 90+ DPD merely clears accumulated Rs. 590 bounce fees and 24% p.a. penal buckets without denting principal.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                When your <strong>total combined unsecured debt across SMFG India Credit (Fullerton), bank personal loans, credit cards, and other NBFCs is ₹3,00,000 or higher</strong>, SettleLoans builds a structured legal resolution:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Halting Multi-Bounce Drain &amp; Field Escalations:</strong> Structuring formal hardship communication and protecting essential household cash flow while you accumulate settlement funds safely.
                </li>
                <li>
                  <strong>100% Waiver of Bounce &amp; 24% Penal Buckets at NPA Stage:</strong> Presenting verified job-loss, pay-cut, or medical evidence post 90+ DPD to SMFG India Credit&apos;s authorized settlement desk to waive accumulated bounce fees and day-to-day penal charges completely alongside a realistic principal haircut (indicatively 40% to 58% of principal depending on case merits; never guaranteed).
                </li>
                <li>
                  <strong>Authenticated SMFG India Credit Settlement Letter:</strong> Verifying an official SMFG India Credit Co. Ltd. letterhead settlement sanction confirming your exact LAN, full-and-final closure figure, payment dates, and No Dues Certificate issuance before a single rupee is paid. Visit our{" "}
                  <Link
                    href="https://www.settleloans.in/smfg-india-credit-loan-settlement"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    SMFG India Credit loan settlement guide
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
                SMFG India Credit EMI Bounce Charges FAQs
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
                Stop Losing ₹2,700+ Monthly to SMFG Bounce &amp; Penal Fees
              </div>
              <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-6">
                Carrying ₹3,00,000 or more across SMFG India Credit (Fullerton), credit cards, and bank personal loans? Check your confidential salaried settlement plan today.
              </p>
              <a
                href="#settlement-assessment"
                className="inline-block bg-[#1F5EFF] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Evaluate My Settlement Plan
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
              <strong>Disclaimer:</strong> SettleLoans is an independent debt resolution and legal advisory platform and is not affiliated with SMFG India Credit Co. Ltd. (formerly Fullerton India Credit Co. Ltd.). All tariff figures reflect SMFG India Credit&apos;s published Loan Charges schedule checked on 11 November 2026 and remain subject to company updates and your Key Fact Statement (KFS).
            </div>
          </article>

          {/* Right Column: Sticky Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-6 text-white border border-white/10 shadow-xl">
                <div className="text-lg font-black mb-2">
                  SMFG Bounce Calculator
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-5">
                  Model SMFG&apos;s Rs. 500 + GST bounce fee, bank return deductions, and 2% monthly day-to-day penal charges instantly.
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
                      href="https://www.settleloans.in/smfg-india-credit-loan-settlement"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • SMFG India Credit Settlement Guide
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/aditya-birla-finance-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Aditya Birla PL Bounce Charges
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/poonawalla-fincorp-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Poonawalla Fincorp Bounce Charges
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/hero-fincorp-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Hero FinCorp PL Bounce Charges
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
