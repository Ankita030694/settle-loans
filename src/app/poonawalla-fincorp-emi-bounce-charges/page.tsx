import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import LoanSettlementAssessmentFunnel from "@/components/LoanSettlementAssessmentFunnel";

export const metadata: Metadata = {
  title: "Poonawalla Fincorp EMI Bounce Charges | SettleLoans",
  description: "Check official Poonawalla Fincorp personal loan EMI bounce charges (Rs. 500 to Rs. 1,500 + GST), 24% p.a. penal rules, NACH retries, and settlement.",
  alternates: {
    canonical: "https://www.settleloans.in/poonawalla-fincorp-emi-bounce-charges",
  },
  openGraph: {
    title: "Poonawalla Fincorp EMI Bounce Charges | SettleLoans",
    description: "Check official Poonawalla Fincorp personal loan EMI bounce charges (Rs. 500 to Rs. 1,500 + GST), 24% p.a. penal rules, NACH retries, and settlement.",
    url: "https://www.settleloans.in/poonawalla-fincorp-emi-bounce-charges",
    type: "article",
    images: [
      {
        url: "https://www.settleloans.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Poonawalla Fincorp Personal Loan EMI Bounce Charges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poonawalla Fincorp EMI Bounce Charges | SettleLoans",
    description: "Check official Poonawalla Fincorp personal loan EMI bounce charges (Rs. 500 to Rs. 1,500 + GST), 24% p.a. penal rules, NACH retries, and settlement.",
    images: ["https://www.settleloans.in/og-image.jpg"],
  },
};

const tocItems = [
  { id: "poonawalla-official-tariff", title: "Official Poonawalla Schedule" },
  { id: "rs-500-to-1500-kfs-slabs", title: "Rs. 500 to Rs. 1,500 KFS Slabs" },
  { id: "twenty-four-percent-penal", title: "24% p.a. Overdue Penal Rule" },
  { id: "external-salary-nach-drain", title: "Salary Bank Double-Debit Math" },
  { id: "zero-vs-four-foreclosure", title: "0% Own-Source vs 4% BT Trap" },
  { id: "six-month-poonawalla-table", title: "6-Month Overdue Cost Table" },
  { id: "customer-portal-clearance", title: "Paying Overdue on PFL App" },
  { id: "soa-audit-magma-legacy", title: "Auditing PFL SOA & Return Codes" },
  { id: "cibil-fortnightly-nodal", title: "CIBIL 15-Day & GRO Escalation" },
  { id: "poonawalla-salaried-settlement", title: "Salaried PFL Settlement Path" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
  {
    q: "What is the Poonawalla Fincorp personal loan EMI bounce charge?",
    a: "According to Poonawalla Fincorp Limited's published Personal Loan Interest Rates and Charges schedule, the EMI bounce or NACH/ECS/cheque dishonour charge ranges from Rs. 500 to Rs. 1,500 per bounce instance plus 18% GST (Rs. 590 to Rs. 1,770 inclusive of GST), depending on your personal loan scheme and Key Fact Statement (KFS).",
  },
  {
    q: "Why does Poonawalla Fincorp list a Rs. 500 to Rs. 1,500 range for bounce charges?",
    a: "Poonawalla Fincorp distributes small-ticket Instant Personal Loans via digital apps alongside higher-ticket Prime Salaried and Professional Personal Loans. Smaller instant variants commonly carry Rs. 500 + GST (Rs. 590) per bounce, whereas larger prime or hybrid personal loan sanctions can specify Rs. 750, Rs. 1,000, or up to Rs. 1,500 + GST (Rs. 1,770) in the signed Key Fact Statement.",
  },
  {
    q: "How much penal charge does Poonawalla Fincorp levy on delayed EMIs?",
    a: "Poonawalla Fincorp levies a Penal Charge of 24% per annum (2% per month) plus 18% GST on the defaulted or overdue EMI installment calculated for the actual days of delay. In line with RBI Fair Lending Practice guidelines, this penal charge is non-capitalized and is never compounded into loan principal.",
  },
  {
    q: "Why did one missed Poonawalla Fincorp EMI cost me between Rs. 1,180 and Rs. 2,360?",
    a: "Because Poonawalla Fincorp is an NBFC, it collects monthly EMIs via e-NACH from your external salary bank (HDFC, ICICI, SBI, Axis, or Kotak). When an EMI bounces, Poonawalla Fincorp bills Rs. 590 to Rs. 1,770 on your loan ledger while your salary bank separately deducts Rs. 295 to Rs. 590 as an inward NACH return charge.",
  },
  {
    q: "What is Poonawalla Fincorp's mandate swap fee if I change salary banks?",
    a: "Swapping your NACH mandate or repayment bank account on an active Poonawalla Fincorp personal loan attracts a Mandate / Instrument Swap Charge of Rs. 500 plus 18% GST (Rs. 590) per swap request.",
  },
  {
    q: "Is foreclosure really zero on Poonawalla Fincorp personal loans after EMI bounces?",
    a: "Poonawalla Fincorp advertises zero foreclosure charges on eligible Prime Personal Loans only when closed strictly out of your own verified savings sources, whereas closing via balance transfer or borrowed funds attracts 4% plus 18% GST on principal outstanding. Moreover, once recent EMI bounces hurt your CIBIL score, external balance-transfer offers disappear.",
  },
  {
    q: "How can I pay an overdue Poonawalla Fincorp EMI manually before another debit runs?",
    a: "Log into the Poonawalla Fincorp Mobile App or online Customer Portal using your registered mobile number and Loan Account Number (LAN), select Quick Pay / Overdue EMI, and pay via UPI or NetBanking within 24 to 48 hours of the missed due date so automated NACH retries are halted.",
  },
  {
    q: "Why does my bank statement show Magma or PFL on NACH narrations?",
    a: "Poonawalla Fincorp Limited was formerly known as Magma Fincorp Limited prior to its acquisition and rebranding by the Cyrus Poonawalla Group. Older mandates or clearing utility codes may occasionally display PFL or legacy Magma identifiers, while newer mandates display Poonawalla Fincorp Limited.",
  },
  {
    q: "Can I dispute a Poonawalla Fincorp bounce fee caused by a technical clearing failure?",
    a: "Yes. If your bank account held sufficient clear balance on the evening before your scheduled due date and the e-NACH debit failed due to an NPCI or sponsor-bank timeout (Return Code R20), raise a ticket via Poonawalla Fincorp Customer Care attaching your stamped bank statement for full fee reversal and CIBIL correction.",
  },
  {
    q: "Does Poonawalla Fincorp waive bounce and 24% p.a. penal charges in loan settlement?",
    a: "When an unsecured Poonawalla Fincorp personal loan crosses 90 days past due into Non-Performing Asset (NPA) status due to genuine salaried hardship such as layoffs, pay cuts, or medical emergencies, formal negotiated settlements typically waive 100% of accumulated bounce fees and 2% monthly penal charges while settling principal at an agreed haircut.",
  },
  {
    q: "When can SettleLoans represent me for Poonawalla Fincorp loan settlement?",
    a: "SettleLoans assists salaried borrowers whose combined unsecured debt across Poonawalla Fincorp loans, bank personal loans, credit cards, and other NBFCs is Rs. 3,00,000 or higher.",
  },
];

export default function PoonawallaFincorpEmiBounceChargesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.settleloans.in/poonawalla-fincorp-emi-bounce-charges#breadcrumb",
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
            "name": "Poonawalla Fincorp EMI Bounce Charges",
            "item": "https://www.settleloans.in/poonawalla-fincorp-emi-bounce-charges"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.settleloans.in/poonawalla-fincorp-emi-bounce-charges#article",
        "headline": "Poonawalla Fincorp Personal Loan EMI & NACH Bounce Charges (Verified Schedule)",
        "description": "Complete salaried guide to Poonawalla Fincorp personal loan EMI bounce fees (Rs. 500 to Rs. 1,500 + GST), 24% p.a. penal charges, e-NACH retries, and settlement.",
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
          "@id": "https://www.settleloans.in/poonawalla-fincorp-emi-bounce-charges"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.settleloans.in/poonawalla-fincorp-emi-bounce-charges#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the Poonawalla Fincorp personal loan EMI bounce charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "According to Poonawalla Fincorp Limited's published Personal Loan Interest Rates and Charges schedule, the EMI bounce or NACH/ECS/cheque dishonour charge ranges from Rs. 500 to Rs. 1,500 per bounce instance plus 18% GST (Rs. 590 to Rs. 1,770 inclusive of GST), depending on your personal loan scheme and Key Fact Statement (KFS)."
            }
          },
          {
            "@type": "Question",
            "name": "Why does Poonawalla Fincorp list a Rs. 500 to Rs. 1,500 range for bounce charges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Poonawalla Fincorp distributes small-ticket Instant Personal Loans via digital apps alongside higher-ticket Prime Salaried and Professional Personal Loans. Smaller instant variants commonly carry Rs. 500 + GST (Rs. 590) per bounce, whereas larger prime or hybrid personal loan sanctions can specify Rs. 750, Rs. 1,000, or up to Rs. 1,500 + GST (Rs. 1,770) in the signed Key Fact Statement."
            }
          },
          {
            "@type": "Question",
            "name": "How much penal charge does Poonawalla Fincorp levy on delayed EMIs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Poonawalla Fincorp levies a Penal Charge of 24% per annum (2% per month) plus 18% GST on the defaulted or overdue EMI installment calculated for the actual days of delay. In line with RBI Fair Lending Practice guidelines, this penal charge is non-capitalized and is never compounded into loan principal."
            }
          },
          {
            "@type": "Question",
            "name": "Why did one missed Poonawalla Fincorp EMI cost me between Rs. 1,180 and Rs. 2,360?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because Poonawalla Fincorp is an NBFC, it collects monthly EMIs via e-NACH from your external salary bank (HDFC, ICICI, SBI, Axis, or Kotak). When an EMI bounces, Poonawalla Fincorp bills Rs. 590 to Rs. 1,770 on your loan ledger while your salary bank separately deducts Rs. 295 to Rs. 590 as an inward NACH return charge."
            }
          },
          {
            "@type": "Question",
            "name": "What is Poonawalla Fincorp's mandate swap fee if I change salary banks?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Swapping your NACH mandate or repayment bank account on an active Poonawalla Fincorp personal loan attracts a Mandate / Instrument Swap Charge of Rs. 500 plus 18% GST (Rs. 590) per swap request."
            }
          },
          {
            "@type": "Question",
            "name": "Is foreclosure really zero on Poonawalla Fincorp personal loans after EMI bounces?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Poonawalla Fincorp advertises zero foreclosure charges on eligible Prime Personal Loans only when closed strictly out of your own verified savings sources, whereas closing via balance transfer or borrowed funds attracts 4% plus 18% GST on principal outstanding. Moreover, once recent EMI bounces hurt your CIBIL score, external balance-transfer offers disappear."
            }
          },
          {
            "@type": "Question",
            "name": "How can I pay an overdue Poonawalla Fincorp EMI manually before another debit runs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Log into the Poonawalla Fincorp Mobile App or online Customer Portal using your registered mobile number and Loan Account Number (LAN), select Quick Pay / Overdue EMI, and pay via UPI or NetBanking within 24 to 48 hours of the missed due date so automated NACH retries are halted."
            }
          },
          {
            "@type": "Question",
            "name": "Why does my bank statement show Magma or PFL on NACH narrations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Poonawalla Fincorp Limited was formerly known as Magma Fincorp Limited prior to its acquisition and rebranding by the Cyrus Poonawalla Group. Older mandates or clearing utility codes may occasionally display PFL or legacy Magma identifiers, while newer mandates display Poonawalla Fincorp Limited."
            }
          },
          {
            "@type": "Question",
            "name": "Can I dispute a Poonawalla Fincorp bounce fee caused by a technical clearing failure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. If your bank account held sufficient clear balance on the evening before your scheduled due date and the e-NACH debit failed due to an NPCI or sponsor-bank timeout (Return Code R20), raise a ticket via Poonawalla Fincorp Customer Care attaching your stamped bank statement for full fee reversal and CIBIL correction."
            }
          },
          {
            "@type": "Question",
            "name": "Does Poonawalla Fincorp waive bounce and 24% p.a. penal charges in loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When an unsecured Poonawalla Fincorp personal loan crosses 90 days past due into Non-Performing Asset (NPA) status due to genuine salaried hardship such as layoffs, pay cuts, or medical emergencies, formal negotiated settlements typically waive 100% of accumulated bounce fees and 2% monthly penal charges while settling principal at an agreed haircut."
            }
          },
          {
            "@type": "Question",
            "name": "When can SettleLoans represent me for Poonawalla Fincorp loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SettleLoans assists salaried borrowers whose combined unsecured debt across Poonawalla Fincorp loans, bank personal loans, credit cards, and other NBFCs is Rs. 3,00,000 or higher."
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
              Verified NBFC Tariff • Checked 11 Nov 2026
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#DEDEDE] mb-6 leading-[1.12] tracking-tight">
              Poonawalla Fincorp Personal Loan EMI &amp; NACH Bounce Charges
            </h1>
            <p className="text-base md:text-xl text-[#DEDEDE]/85 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
              Complete salaried borrower guide to Poonawalla Fincorp&apos;s Rs. 500 to Rs. 1,500 (+ 18% GST) EMI dishonour slabs, 24% p.a. overdue penal charges, external salary-bank NACH double hits, and structured settlement relief.
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
                Calculate Poonawalla Bounce Drain
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
                  Poonawalla Fincorp Bounce Charges
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
            {/* Section 1: Official Poonawalla Schedule */}
            <section id="poonawalla-official-tariff" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Poonawalla Fincorp Personal Loan Schedule of Charges
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Backed by the Cyrus Poonawalla Group (following the acquisition and digital transformation of Magma Fincorp), <strong>Poonawalla Fincorp Limited (PFL)</strong> has rapidly scaled two distinct unsecured credit lines for salaried Indians: 100% digital <em>Instant Personal Loans</em> (small-to-mid ticket app disbursements) and high-value <em>Prime Personal Loans</em> up to Rs. 30,00,000 for corporate employees and professionals. Because these schemes serve very different ticket sizes, Poonawalla Fincorp publishes a tiered <strong>Rs. 500 to Rs. 1,500 plus 18% GST</strong> bounce charge band alongside a flat <strong>24% per annum (2% per month) overdue penal charge</strong>.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-6">
                All tariff parameters below were verified directly against Poonawalla Fincorp&apos;s official Personal Loan Interest Rates and Charges disclosure on 11 November 2026:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-5">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#2E2E2E] text-white">
                      <th className="p-4 font-bold">Poonawalla Fincorp Fee Head</th>
                      <th className="p-4 font-bold">Official Published Tariff</th>
                      <th className="p-4 font-bold">Effective Outflow With 18% GST</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">EMI Bounce / NACH / ECS / Cheque Dishonour</td>
                      <td className="p-4 text-slate-700">Rs. 500 to Rs. 1,500 per bounce + 18% GST (per KFS)</td>
                      <td className="p-4 font-semibold text-red-700">Rs. 590 to Rs. 1,770 per failed presentation</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Penal Charge (Defaulted / Overdue EMI)</td>
                      <td className="p-4 text-slate-700">24% p.a. (2% per month) on overdue EMI + 18% GST</td>
                      <td className="p-4 font-semibold text-red-700">2.36% per month on overdue EMI (non-capitalized)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Mandate / Repayment Swap Charge</td>
                      <td className="p-4 text-slate-700">Rs. 500 per swap instance + 18% GST</td>
                      <td className="p-4 font-semibold text-slate-800">Rs. 590 per bank mandate change</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Foreclosure (Own Verified Sources)</td>
                      <td className="p-4 text-slate-700">Nil (0%) on eligible Prime Salaried variants</td>
                      <td className="p-4 font-semibold text-emerald-700">Rs. 0 when closed from own savings</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Foreclosure (Balance Transfer / Borrowed Funds)</td>
                      <td className="p-4 text-slate-700">4% on principal outstanding + 18% GST</td>
                      <td className="p-4 font-semibold text-slate-800">4.72% of outstanding principal</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs md:text-sm text-slate-600">
                <strong>Official Source Verification:</strong> Verified against{" "}
                <a
                  href="https://poonawallafincorp.com/instant-personal-loan/interest-rates-and-charges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  Poonawalla Fincorp Official Personal Loan Interest Rates &amp; Charges
                </a>{" "}
                on <strong>11 November 2026</strong>. Open your Sanction Letter and Key Fact Statement (KFS) inside the Poonawalla Fincorp app to check your exact contracted bounce slab (Rs. 500, Rs. 750, Rs. 1,000, or Rs. 1,500 + GST).
              </div>
            </section>

            {/* Funnel Near Hero */}
            <div className="mb-14">
              <div className="p-5 rounded-t-3xl bg-blue-50 border border-b-0 border-blue-200 text-sm text-slate-800">
                <strong>Salaried Debt Assessment:</strong> Juggling Poonawalla Fincorp personal loan EMI bounces alongside credit cards, private bank loans, or other NBFC EMIs? SettleLoans assists salaried borrowers when <strong>combined unsecured debt across all lenders is ₹3,00,000 or higher</strong>.
              </div>
              <LoanSettlementAssessmentFunnel className="!mt-0 !rounded-t-none" />
            </div>

            {/* Section 2: Rs. 500 to Rs. 1,500 KFS Slabs */}
            <section id="rs-500-to-1500-kfs-slabs" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Decoding Poonawalla&apos;s Rs. 500 to Rs. 1,500 KFS Bounce Band
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Why does one borrower get charged <strong>Rs. 590</strong> on a bounced Poonawalla Fincorp EMI while a colleague in the same office sees <strong>Rs. 1,180 or Rs. 1,770</strong>? Because RBI&apos;s Key Fact Statement (KFS) regime allows NBFCs to anchor scheme-specific dishonour tariffs based on loan product, ticket size, and origination channel:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    Instant Digital Personal Loan (Small-to-Mid Ticket)
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Quick app-originated loans (typically Rs. 50,000 to Rs. 5,00,000, including partner-app originations where Poonawalla Fincorp is the regulated lender on the KFS) predominantly carry <strong>Rs. 500 + 18% GST (Rs. 590)</strong> or <strong>Rs. 750 + 18% GST (Rs. 885)</strong> per failed NACH presentation.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    Prime Salaried &amp; Professional Personal Loan
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Larger unsecured Term and Flexi/Dropline Personal Loans (Rs. 5,00,000 to Rs. 30,00,000) frequently stipulate <strong>Rs. 1,000 + 18% GST (Rs. 1,180)</strong> or up to <strong>Rs. 1,500 + 18% GST (Rs. 1,770)</strong> per dishonoured NACH or cheque presentation.
                  </p>
                </div>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Critically, Poonawalla Fincorp cannot arbitrarily pick the Rs. 1,500 ceiling if your signed KFS states Rs. 500! Always download your KFS PDF from the Poonawalla Fincorp app before accepting verbal bounce-fee totals quoted by third-party tele-callers.
              </p>
            </section>

            {/* Section 3: 24% p.a. Overdue Penal Charge */}
            <section id="twenty-four-percent-penal" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                How Poonawalla&apos;s 24% p.a. (2% Monthly) Penal Charge Runs Daily
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                On top of per-presentation bounce fees, Poonawalla Fincorp levies a <strong>24% per annum (2% per month) Penal Charge plus 18% GST</strong> calculated exclusively on the defaulted or overdue EMI installment for the exact number of days it remains unpaid past your scheduled due date (commonly the 5th of every month).
              </p>
              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 mb-6">
                <h3 className="text-lg font-black text-[#1F5EFF] mb-2">
                  Non-Capitalized Daily Pro-Rata Illustration
                </h3>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  On a <strong>Rs. 15,000 monthly EMI</strong> due on the 5th, 24% p.a. equals roughly <strong>Rs. 9.86 per day</strong> before GST (Rs. 11.64 per day with 18% GST). Paying 8 days late on the 13th adds just Rs. 93 in penal charges. Leaving three consecutive Rs. 15,000 EMIs unpaid through Day 90 accumulates 6 EMI-months × Rs. 300 = Rs. 1,800 + 18% GST = <strong>Rs. 2,124</strong> in uncapitalized overdue penal charges. Under RBI&apos;s penal charge guidelines, Poonawalla Fincorp cannot fold these charges into your loan principal.
                </p>
              </div>
            </section>

            {/* Section 4: External Salary Bank Double-Debit Math */}
            <section id="external-salary-nach-drain" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Why NBFC e-NACH Bounces Trigger a Two-Sided Salary Bank Drain
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Because Poonawalla Fincorp is a Non-Banking Financial Company (NBFC), it never holds your corporate salary bank account directly. On one hand, that protects your monthly household paycheck from instant internal bank freezes or automatic CRN salary holds. On the other hand, every failed e-NACH presentation hits you on two separate statements simultaneously:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Leg 1 (Poonawalla Loan Statement):</strong> Rs. 500 to Rs. 1,500 + 18% GST (<strong>Rs. 590 to Rs. 1,770</strong>) posted to your Poonawalla Fincorp overdue charges bucket.
                </li>
                <li>
                  <strong>Leg 2 (Your Salary Bank Account):</strong> Rs. 250 + GST (SBI) or Rs. 450 to Rs. 500 + GST (HDFC, ICICI, Axis, Kotak = <strong>Rs. 531 to Rs. 590</strong>) immediately deducted from your remaining savings balance as an inward NACH return charge.
                </li>
                <li>
                  <strong>Combined Per-Presentation Loss:</strong> Between <strong>Rs. 885 and Rs. 2,360 lost on a single failed presentation</strong>! If Poonawalla Fincorp re-presents the unpaid e-NACH mandate once more mid-month, a single missed EMI cycle wipes out Rs. 1,770 to Rs. 4,720 in deadweight fees.
                </li>
              </ul>
            </section>

            {/* Section 5: 0% Own-Source vs 4% Balance Transfer Trap */}
            <section id="zero-vs-four-foreclosure" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                The 0% Own-Source vs 4% Balance Transfer Foreclosure Catch
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Poonawalla Fincorp&apos;s marketing prominently highlights <em>&quot;Zero Prepayment / Foreclosure Charges,&quot;</em> leading many stressed borrowers to assume they can effortlessly transfer their loan to a cheaper bank if cash gets tight. Read the official schedule footnote carefully:
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Zero foreclosure applies <strong>strictly when you prepay out of your own verified funds</strong> (such as accumulated savings, fixed-deposit maturity, or annual bonus proved via bank statements). If you attempt to close a Poonawalla Fincorp loan using a <strong>balance transfer cheque or disbursement from another bank or NBFC</strong>, a <strong>4% + 18% GST (4.72%) foreclosure fee</strong> applies! Worse still, once two NACH bounces register on your CIBIL report, prime banks decline balance-transfer applications altogether.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Watch out as well if you hold Poonawalla Fincorp&apos;s <strong>Flexi / Dropline Overdraft Personal Loan</strong> variant rather than a standard fixed-EMI Term Loan: during the initial tenure when monthly debits cover utilized interest alone, missing a 5th-of-the-month NACH immediately freezes fresh withdrawals from your sanctioned credit line while adding Rs. 590 to Rs. 1,770 in bounce charges plus 24% p.a. overdue penal fees. Borrowers who deposit half a paycheck expecting to redraw emergency cash two days later often find their liquidity locked inside the frozen facility until every rupee of overdue interest and bounce charges is cleared!
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Similarly, salaried employees whose employer pays monthly salary on the 7th or 10th while Poonawalla Fincorp&apos;s e-NACH runs on the 5th face an avoidable payroll collision trap: paying manually on the 8th every month still triggers twelve failed NACH presentations a year, quietly draining Rs. 14,000 to Rs. 28,000 annually across NBFC and salary-bank return fees unless a one-EMI cash buffer is parked ahead of the 4th.
              </p>
            </section>

            {/* Section 6: 6-Month Overdue Cost Table */}
            <section id="six-month-poonawalla-table" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                6-Month Overdue Cost Projection on a Poonawalla Personal Loan
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Consider a salaried project lead carrying a Rs. 5,00,000 Poonawalla Fincorp Prime Personal Loan (remaining principal Rs. 4,10,000, monthly EMI <strong>Rs. 15,400</strong>, Rs. 750 + GST = Rs. 885 per-bounce KFS slab) linked via e-NACH to a private salary bank charging Rs. 500 + GST per inward return, assuming 2 NACH presentations per unpaid month:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Delinquency Milestone</th>
                      <th className="p-3.5 font-bold">Poonawalla Bounces (+GST)</th>
                      <th className="p-3.5 font-bold">Salary Bank Returns (+GST)</th>
                      <th className="p-3.5 font-bold">24% p.a. Penal (+GST)</th>
                      <th className="p-3.5 font-bold">Total Penalty Drain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 1 (2 bounces, 30 DPD)</td>
                      <td className="p-3.5">Rs. 1,770</td>
                      <td className="p-3.5">Rs. 1,180</td>
                      <td className="p-3.5">Rs. 363</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 3,313</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 3 (6 bounces, 90 DPD NPA)</td>
                      <td className="p-3.5">Rs. 5,310</td>
                      <td className="p-3.5">Rs. 3,540</td>
                      <td className="p-3.5">Rs. 2,181</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 11,031</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 6 (12 bounces, 180 DPD)</td>
                      <td className="p-3.5">Rs. 10,620</td>
                      <td className="p-3.5">Rs. 7,080</td>
                      <td className="p-3.5">Rs. 7,632</td>
                      <td className="p-3.5 font-black text-red-800">Rs. 25,332</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                On a higher Rs. 1,500 + GST Prime KFS slab, that 6-month penalty drain jumps past <strong>Rs. 35,900</strong>! Calculate your exact Poonawalla Fincorp and multi-lender numbers inside our{" "}
                <Link
                  href="https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  Personal Loan EMI Bounce Charges Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 7: Paying Overdue on PFL App */}
            <section id="customer-portal-clearance" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Clearing Overdue EMIs on the Poonawalla Fincorp App Safely
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                If your combined unsecured debt is under Rs. 3,00,000 and the bounce occurred due to a one-off payroll delay, regularize the overdue installment promptly so mid-month retry presentations are cancelled:
              </p>
              <ol className="space-y-4 list-decimal pl-5 text-base text-slate-700 mb-6">
                <li>
                  <strong>Pay Inside the Official Poonawalla Fincorp App or Web Portal:</strong> Log in with your registered mobile number, open your active Loan Account Number (LAN), and pay the overdue installment via UPI, Debit Card, or NetBanking within 24 to 48 hours of the 5th-of-the-month due date.
                </li>
                <li>
                  <strong>Never Pay Personal UPI IDs Sent Over WhatsApp:</strong> Collection agents from outsourced agencies sometimes message borrowers offering an &quot;instant bounce fee waiver&quot; if paid via a personal QR code. Pay strictly through Poonawalla Fincorp&apos;s official app or BBPS loan biller so you receive an automated LAN receipt.
                </li>
                <li>
                  <strong>File a Formal Mandate Swap After Job Moves:</strong> Moving corporate salary from one bank to another? Complete the Rs. 500 + GST e-Mandate swap inside the portal before closing or draining your previous salary account.
                </li>
              </ol>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Read our actionable guides on{" "}
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
                  stopping the monthly EMI bounce cycle
                </Link>
                .
              </p>
            </section>

            {/* Section 8: Auditing SOA & Legacy Magma / Fintech Narrations */}
            <section id="soa-audit-magma-legacy" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Auditing Your PFL Statement, Co-Lending &amp; Return Codes
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Salaried borrowers sometimes get confused when inspecting bank statement NACH narrations because Poonawalla Fincorp originates loans both directly and via digital co-lending / fintech apps (and older mandates may carry legacy <em>PFL / Magma</em> clearing identifiers). Download your official Statement of Account (SOA) from the Poonawalla Fincorp portal and verify:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>KFS Bounce Rate Match:</strong> Ensure every bounce entry matches the exact rupee figure disclosed in your signed Key Fact Statement (for example, Rs. 500 + GST on an instant app loan rather than Rs. 1,500 + GST).
                </li>
                <li>
                  <strong>NPCI Clearing Return Codes (R01 vs R20):</strong> Compare your bank statement against NPCI return codes. If clear funds exceeded your EMI on the evening before due date and the mandate returned under technical error code R20, demand full reversal of the dishonour charge.
                </li>
                <li>
                  <strong>Section 25 PSS Act Notices:</strong> Consecutive e-NACH failures on NBFC loans frequently trigger automated legal demand emails citing Section 25 of the Payment and Settlement Systems Act, 2007. Respond calmly in writing documenting salaried financial hardship rather than ignoring formal notices; see{" "}
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

            {/* Section 9: CIBIL 15-Day Reporting & GRO Escalation */}
            <section id="cibil-fortnightly-nodal" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                15-Day CIBIL Reporting &amp; Poonawalla Grievance Escalation
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                As an RBI-regulated NBFC, Poonawalla Fincorp uploads borrower repayment data to CIBIL, Experian, Equifax, and CRIF High Mark every 15 days (as of the 15th and month-end). Leaving a 5th-of-the-month bounce unpaid past the 15th stamps an immediate <strong>10-DPD (SMA-0)</strong> mark on your credit profile, progressing through <strong>SMA-1 (31 to 60 DPD)</strong>, <strong>SMA-2 (61 to 90 DPD)</strong>, and <strong>NPA classification past 90 DPD</strong>.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-4">
                If you face unreversed technical bounces or aggressive recovery calls violating RBI&apos;s 8:00 AM to 7:00 PM contact window, raise a written ticket with Poonawalla Fincorp Customer Service (Level 1), escalate unresolved complaints to Poonawalla Fincorp&apos;s <strong>Grievance Redressal Officer (GRO) / Principal Nodal Officer</strong>, and past 30 days to the Reserve Bank Integrated Ombudsman portal. Also read{" "}
                <Link
                  href="https://www.settleloans.in/reminder-calls-after-emi-bounce"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  borrower rights during EMI bounce recovery calls
                </Link>
                .
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Keep a timestamped log of every service ticket number, call screenshot, and bank statement PDF whenever disputing erroneous charges or documenting medical or employment distress. Written trails addressed to Poonawalla Fincorp&apos;s official grievance desk carry far greater regulatory weight than informal conversations with outsourced collection callers, and they also strengthen your position later if the account moves into formal settlement review.
              </p>
            </section>

            {/* Section 10: Salaried PFL Settlement Path */}
            <section id="poonawalla-salaried-settlement" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Salaried Poonawalla Fincorp Settlement Path (Debt ≥ ₹3 Lakhs)
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                When layoffs, salary cuts, startup closures, or family medical bills leave you unable to pay Poonawalla Fincorp alongside bank personal loans or credit cards, sending partial single-EMI transfers at 60+ or 90+ DPD simply gets absorbed by Rs. 590 to Rs. 1,770 bounce fees, 24% p.a. penal charges, and overdue interest without closing your loan.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                When your <strong>total combined unsecured debt across Poonawalla Fincorp, credit cards, and other banks or NBFCs is ₹3,00,000 or higher</strong>, SettleLoans builds a structured legal exit:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Stopping External Bank Return Leakage:</strong> Advising you on cash-flow protection and formal hardship disclosures while you accumulate lump-sum or short-tranche settlement reserves safely.
                </li>
                <li>
                  <strong>100% Waiver of Bounce &amp; 24% Penal Buckets at NPA Stage:</strong> Presenting verified job-loss, salary-reduction, or medical documentation post 90+ DPD to Poonawalla Fincorp&apos;s settlement desk to waive accumulated bounce charges and penal fees completely alongside a realistic principal haircut (indicatively 42% to 60% of principal depending on case merits; never guaranteed).
                </li>
                <li>
                  <strong>Verified Poonawalla Fincorp Settlement Sanction Letter:</strong> Auditing the official Poonawalla Fincorp Limited letterhead settlement sanction (confirming exact LAN, full-and-final closure amount, payment dates, and No Dues Certificate timeline) before any payment leaves your account. Visit our{" "}
                  <Link
                    href="https://www.settleloans.in/poonawalla-fincorp-loan-settlement"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    Poonawalla Fincorp loan settlement guide
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
                Poonawalla Fincorp EMI Bounce Charges FAQs
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
                Stop Losing Up to ₹2,360 Per Poonawalla Bounce Cycle
              </div>
              <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-6">
                Carrying ₹3,00,000 or more across Poonawalla Fincorp, credit cards, and bank personal loans? Check your confidential salaried settlement plan today.
              </p>
              <a
                href="#settlement-assessment"
                className="inline-block bg-[#1F5EFF] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Evaluate My Settlement Plan
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
              <strong>Disclaimer:</strong> SettleLoans is an independent debt resolution and legal advisory platform and is not affiliated with Poonawalla Fincorp Limited. All tariff figures reflect Poonawalla Fincorp&apos;s published Personal Loan Interest Rates and Charges schedule checked on 11 November 2026 and remain subject to company updates and your Key Fact Statement (KFS).
            </div>
          </article>

          {/* Right Column: Sticky Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-6 text-white border border-white/10 shadow-xl">
                <div className="text-lg font-black mb-2">
                  Poonawalla Calculator
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-5">
                  Model Poonawalla Fincorp&apos;s Rs. 500 to Rs. 1,500 + GST bounce fee, bank return deductions, and 24% p.a. penal charges instantly.
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
                      href="https://www.settleloans.in/poonawalla-fincorp-loan-settlement"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Poonawalla Fincorp Settlement Guide
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
                      href="https://www.settleloans.in/aditya-birla-finance-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Aditya Birla PL Bounce Charges
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
