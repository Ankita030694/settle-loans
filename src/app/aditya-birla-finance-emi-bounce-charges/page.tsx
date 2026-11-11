import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import LoanSettlementAssessmentFunnel from "@/components/LoanSettlementAssessmentFunnel";

export const metadata: Metadata = {
  title: "Aditya Birla Finance Bounce Charges | SettleLoans",
  description: "Check official Aditya Birla Finance (ABFL / ABCD) personal loan EMI bounce charges (Rs. 750 to Rs. 1,000 + GST), up to 3% monthly penal, and relief.",
  alternates: {
    canonical: "https://www.settleloans.in/aditya-birla-finance-emi-bounce-charges",
  },
  openGraph: {
    title: "Aditya Birla Finance Bounce Charges | SettleLoans",
    description: "Check official Aditya Birla Finance (ABFL / ABCD) personal loan EMI bounce charges (Rs. 750 to Rs. 1,000 + GST), up to 3% monthly penal, and relief.",
    url: "https://www.settleloans.in/aditya-birla-finance-emi-bounce-charges",
    type: "article",
    images: [
      {
        url: "https://www.settleloans.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aditya Birla Finance Personal Loan EMI Bounce Charges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Birla Finance Bounce Charges | SettleLoans",
    description: "Check official Aditya Birla Finance (ABFL / ABCD) personal loan EMI bounce charges (Rs. 750 to Rs. 1,000 + GST), up to 3% monthly penal, and relief.",
    images: ["https://www.settleloans.in/og-image.jpg"],
  },
};

const tocItems = [
  { id: "abfl-official-schedule", title: "Official ABFL Schedule Table" },
  { id: "rs-750-to-1000-dishonour", title: "Rs. 750 to Rs. 1,000 + GST Math" },
  { id: "three-percent-penal-rule", title: "Up to 3% Monthly Penal Rule" },
  { id: "abcd-fintech-colending", title: "ABCD & Fintech Partner Mandates" },
  { id: "rescheduling-foreclosure-fees", title: "Rs. 5k Reschedule & Foreclosure" },
  { id: "six-month-abfl-projection", title: "6-Month Overdue Cost Table" },
  { id: "abcd-portal-clearance", title: "Paying Overdue on ABCD / ABCL" },
  { id: "abfl-soa-return-codes", title: "Auditing Your ABFL Statement" },
  { id: "cibil-nodal-escalation", title: "15-Day CIBIL & GRO Escalation" },
  { id: "abfl-salaried-settlement", title: "Salaried ABFL Settlement Path" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
  {
    q: "What is the Aditya Birla Finance personal loan EMI bounce charge?",
    a: "According to Aditya Birla Capital / Aditya Birla Finance Limited's published Retail Schedule of Charges, the cheque, ECS, Standing Instruction, or NACH return / bounce charge on personal loans is Rs. 750 to Rs. 1,000 per dishonour instance plus 18% GST, resulting in Rs. 885 to Rs. 1,180 per failed presentation.",
  },
  {
    q: "How much penal charge does Aditya Birla Finance apply on delayed EMIs?",
    a: "Aditya Birla Finance levies an overdue penal charge (Late Payment Charge) of up to 3% per month (36% per annum) plus 18% GST calculated on the overdue EMI amount for the actual period of delay. Under RBI's Fair Lending Practice norms on Penal Charges, this fee is strictly non-capitalized and never compounds into loan principal.",
  },
  {
    q: "Why did one missed Aditya Birla personal loan EMI cost me up to Rs. 1,770?",
    a: "Because Aditya Birla Capital / ABFL pulls monthly EMIs via e-NACH from your external salary bank (HDFC, ICICI, SBI, Axis, or Kotak), a failed debit bills Rs. 885 to Rs. 1,180 on your ABFL loan statement while your salary bank simultaneously deducts Rs. 295 to Rs. 590 as an inward NACH return charge, totaling Rs. 1,180 to Rs. 1,770 per failed presentation.",
  },
  {
    q: "Why do I see Aditya Birla Finance NACH debits for a loan I took on Paytm or a fintech app?",
    a: "Aditya Birla Finance Limited (unified under Aditya Birla Capital Limited and the ABCD app) serves as the regulated lending partner behind several popular consumer payment and fintech personal loan apps. Even if you applied inside a partner app, the legal Loan Account Number, e-NACH mandate, CIBIL reporting, and Rs. 750 to Rs. 1,000 + GST bounce tariff belong to Aditya Birla.",
  },
  {
    q: "What are Aditya Birla Finance's mandate swap and loan rescheduling charges?",
    a: "Swapping your NACH mandate or repayment bank account costs Rs. 500 to Rs. 750 plus 18% GST (Rs. 590 to Rs. 885). Formal loan rescheduling or tenure modification (where approved) carries a steep administrative fee of Rs. 5,000 to Rs. 7,500 plus 18% GST.",
  },
  {
    q: "How can I pay a bounced Aditya Birla personal loan EMI manually to block repeat retries?",
    a: "Log into the Aditya Birla Capital Customer Portal or the ABCD Mobile App using your registered mobile number and Loan Account Number (LAN), select Pay Overdue EMI, and complete payment via UPI or NetBanking within 24 to 48 hours of the missed due date so mid-month NACH retry batches are suppressed.",
  },
  {
    q: "What happens if I have multiple small fintech drawdowns backed by Aditya Birla Finance?",
    a: "Borrowers who took two or three instant digital credit drawdowns via partner apps often have multiple active ABFL mandates hitting their bank account on the 5th of every month. A single delayed payday triggers Rs. 885 to Rs. 1,180 plus bank return fees on each separate LAN simultaneously!",
  },
  {
    q: "Can I get a technical Aditya Birla Finance NACH bounce charge reversed?",
    a: "Yes. If your salary bank account held sufficient clear balance on the evening before your due date and the debit returned due to an NPCI or sponsor-bank clearing timeout (Return Code R20), file a service request on the Aditya Birla Capital portal attaching your stamped bank statement for full fee reversal.",
  },
  {
    q: "How fast does Aditya Birla Finance report a missed EMI to CIBIL?",
    a: "Under RBI's fortnightly credit bureau reporting framework, Aditya Birla submits borrower Days Past Due (DPD) files to CIBIL, Experian, Equifax, and CRIF High Mark as of the 15th and last day of every month. Leaving a 5th-date bounce unpaid past the 15th records a 10-DPD (SMA-0) mark that very month.",
  },
  {
    q: "Does Aditya Birla Finance waive bounce and 36% p.a. penal fees during loan settlement?",
    a: "When an unsecured Aditya Birla personal loan crosses 90 days past due into Non-Performing Asset (NPA) status due to genuine salaried hardship such as job loss, pay cuts, or medical emergencies, formal negotiated settlements typically waive 100% of accumulated bounce fees and 3% monthly penal charges while settling principal at an agreed haircut.",
  },
  {
    q: "When can SettleLoans assist me with Aditya Birla Finance personal loan settlement?",
    a: "SettleLoans assists salaried borrowers whose combined unsecured debt across Aditya Birla loans, bank personal loans, credit cards, and other NBFCs is Rs. 3,00,000 or higher.",
  },
];

export default function AdityaBirlaFinanceEmiBounceChargesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.settleloans.in/aditya-birla-finance-emi-bounce-charges#breadcrumb",
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
            "name": "Aditya Birla Finance Bounce Charges",
            "item": "https://www.settleloans.in/aditya-birla-finance-emi-bounce-charges"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.settleloans.in/aditya-birla-finance-emi-bounce-charges#article",
        "headline": "Aditya Birla Finance Personal Loan EMI & NACH Bounce Charges (Verified Schedule)",
        "description": "Verified guide to Aditya Birla Finance (ABFL / Aditya Birla Capital) personal loan EMI bounce fees (Rs. 750 to Rs. 1,000 + GST), up to 3% monthly penal charges, and settlement.",
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
          "@id": "https://www.settleloans.in/aditya-birla-finance-emi-bounce-charges"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.settleloans.in/aditya-birla-finance-emi-bounce-charges#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the Aditya Birla Finance personal loan EMI bounce charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "According to Aditya Birla Capital / Aditya Birla Finance Limited's published Retail Schedule of Charges, the cheque, ECS, Standing Instruction, or NACH return / bounce charge on personal loans is Rs. 750 to Rs. 1,000 per dishonour instance plus 18% GST, resulting in Rs. 885 to Rs. 1,180 per failed presentation."
            }
          },
          {
            "@type": "Question",
            "name": "How much penal charge does Aditya Birla Finance apply on delayed EMIs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aditya Birla Finance levies an overdue penal charge (Late Payment Charge) of up to 3% per month (36% per annum) plus 18% GST calculated on the overdue EMI amount for the actual period of delay. Under RBI's Fair Lending Practice norms on Penal Charges, this fee is strictly non-capitalized and never compounds into loan principal."
            }
          },
          {
            "@type": "Question",
            "name": "Why did one missed Aditya Birla personal loan EMI cost me up to Rs. 1,770?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because Aditya Birla Capital / ABFL pulls monthly EMIs via e-NACH from your external salary bank (HDFC, ICICI, SBI, Axis, or Kotak), a failed debit bills Rs. 885 to Rs. 1,180 on your ABFL loan statement while your salary bank simultaneously deducts Rs. 295 to Rs. 590 as an inward NACH return charge, totaling Rs. 1,180 to Rs. 1,770 per failed presentation."
            }
          },
          {
            "@type": "Question",
            "name": "Why do I see Aditya Birla Finance NACH debits for a loan I took on Paytm or a fintech app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aditya Birla Finance Limited (unified under Aditya Birla Capital Limited and the ABCD app) serves as the regulated lending partner behind several popular consumer payment and fintech personal loan apps. Even if you applied inside a partner app, the legal Loan Account Number, e-NACH mandate, CIBIL reporting, and Rs. 750 to Rs. 1,000 + GST bounce tariff belong to Aditya Birla."
            }
          },
          {
            "@type": "Question",
            "name": "What are Aditya Birla Finance's mandate swap and loan rescheduling charges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Swapping your NACH mandate or repayment bank account costs Rs. 500 to Rs. 750 plus 18% GST (Rs. 590 to Rs. 885). Formal loan rescheduling or tenure modification (where approved) carries a steep administrative fee of Rs. 5,000 to Rs. 7,500 plus 18% GST."
            }
          },
          {
            "@type": "Question",
            "name": "How can I pay a bounced Aditya Birla personal loan EMI manually to block repeat retries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Log into the Aditya Birla Capital Customer Portal or the ABCD Mobile App using your registered mobile number and Loan Account Number (LAN), select Pay Overdue EMI, and complete payment via UPI or NetBanking within 24 to 48 hours of the missed due date so mid-month NACH retry batches are suppressed."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I have multiple small fintech drawdowns backed by Aditya Birla Finance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Borrowers who took two or three instant digital credit drawdowns via partner apps often have multiple active ABFL mandates hitting their bank account on the 5th of every month. A single delayed payday triggers Rs. 885 to Rs. 1,180 plus bank return fees on each separate LAN simultaneously!"
            }
          },
          {
            "@type": "Question",
            "name": "Can I get a technical Aditya Birla Finance NACH bounce charge reversed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. If your salary bank account held sufficient clear balance on the evening before your due date and the debit returned due to an NPCI or sponsor-bank clearing timeout (Return Code R20), file a service request on the Aditya Birla Capital portal attaching your stamped bank statement for full fee reversal."
            }
          },
          {
            "@type": "Question",
            "name": "How fast does Aditya Birla Finance report a missed EMI to CIBIL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under RBI's fortnightly credit bureau reporting framework, Aditya Birla submits borrower Days Past Due (DPD) files to CIBIL, Experian, Equifax, and CRIF High Mark as of the 15th and last day of every month. Leaving a 5th-date bounce unpaid past the 15th records a 10-DPD (SMA-0) mark that very month."
            }
          },
          {
            "@type": "Question",
            "name": "Does Aditya Birla Finance waive bounce and 36% p.a. penal fees during loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When an unsecured Aditya Birla personal loan crosses 90 days past due into Non-Performing Asset (NPA) status due to genuine salaried hardship such as job loss, pay cuts, or medical emergencies, formal negotiated settlements typically waive 100% of accumulated bounce fees and 3% monthly penal charges while settling principal at an agreed haircut."
            }
          },
          {
            "@type": "Question",
            "name": "When can SettleLoans assist me with Aditya Birla Finance personal loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SettleLoans assists salaried borrowers whose combined unsecured debt across Aditya Birla loans, bank personal loans, credit cards, and other NBFCs is Rs. 3,00,000 or higher."
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
              Verified ABCL Retail Schedule • Checked 11 Nov 2026
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#DEDEDE] mb-6 leading-[1.12] tracking-tight">
              Aditya Birla Finance Personal Loan EMI &amp; NACH Bounce Charges
            </h1>
            <p className="text-base md:text-xl text-[#DEDEDE]/85 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
              Complete salaried borrower guide to Aditya Birla Finance (ABFL / Aditya Birla Capital / ABCD) Rs. 750 to Rs. 1,000 + GST bounce fees, up to 3% monthly penal charges, fintech co-lending mandates, and structured debt settlement.
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
                Calculate Aditya Birla Bounce Drain
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
                  Aditya Birla Finance Bounce Charges
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
            {/* Section 1: Official ABFL Schedule */}
            <section id="abfl-official-schedule" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Aditya Birla Finance Personal Loan Schedule of Charges
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                <strong>Aditya Birla Finance Limited (ABFL)</strong>, now consolidated into its parent NBFC entity <strong>Aditya Birla Capital Limited (ABCL)</strong> and distributed widely through both corporate DSA channels, the <strong>ABCD digital app</strong>, and major fintech co-lending apps, ranks among India&apos;s highest-penalty unsecured lenders when an installment bounces. With an official dishonour charge of <strong>Rs. 750 to Rs. 1,000 plus 18% GST per presentation</strong> and overdue penal charges reaching <strong>up to 3% per month (36% per annum) plus GST</strong>, even a two-month cash crunch rapidly snowballs into five-figure penalty arrears.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-6">
                Every fee figure below was verified directly against Aditya Birla Capital / ABFL&apos;s published Retail &amp; Consumer Schedule of Charges on 11 November 2026:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-5">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#2E2E2E] text-white">
                      <th className="p-4 font-bold">Aditya Birla Personal Loan Fee Head</th>
                      <th className="p-4 font-bold">Official Published Tariff</th>
                      <th className="p-4 font-bold">Effective Outflow With 18% GST</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Cheque / ECS / SI / NACH Return Charge</td>
                      <td className="p-4 text-slate-700">Rs. 750 to Rs. 1,000 per instance + 18% GST</td>
                      <td className="p-4 font-semibold text-red-700">Rs. 885 to Rs. 1,180 per failed presentation</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Penal Charge (Delayed / Overdue EMI)</td>
                      <td className="p-4 text-slate-700">Up to 3% per month (36% p.a.) on overdue EMI + GST</td>
                      <td className="p-4 font-semibold text-red-700">Up to 3.54% monthly on overdue EMI (non-capitalized)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Repayment Mode / Mandate Swap Charge</td>
                      <td className="p-4 text-slate-700">Rs. 500 to Rs. 750 per swap + 18% GST</td>
                      <td className="p-4 font-semibold text-slate-800">Rs. 590 to Rs. 885 per mandate swap</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Loan Rescheduling / Tenure Modification</td>
                      <td className="p-4 text-slate-700">Rs. 5,000 to Rs. 7,500 + 18% GST (where approved)</td>
                      <td className="p-4 font-semibold text-slate-800">Rs. 5,900 to Rs. 8,850 upfront fee</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Foreclosure / Full Prepayment Charge</td>
                      <td className="p-4 text-slate-700">Up to 4% + 18% GST after lock-in (per KFS)</td>
                      <td className="p-4 font-semibold text-slate-800">Up to 4.72% of principal outstanding</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs md:text-sm text-slate-600">
                <strong>Official Source Verification:</strong> Verified against{" "}
                <a
                  href="https://www.adityabirlacapital.com/-/media/ABCL/pdf/Aditya-Birla-Finance-Limited/ABCL_RCMB--Physical-April25.ashx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  Aditya Birla Finance Limited Official Retail Schedule of Charges (PDF)
                </a>{" "}
                on <strong>11 November 2026</strong>. Check your Sanction Letter and Key Fact Statement (KFS) inside the ABCD app or ABCL portal to confirm whether your loan sits on the Rs. 750 + GST (Rs. 885) or Rs. 1,000 + GST (Rs. 1,180) bounce slab.
              </div>
            </section>

            {/* Funnel Near Hero */}
            <div className="mb-14">
              <div className="p-5 rounded-t-3xl bg-blue-50 border border-b-0 border-blue-200 text-sm text-slate-800">
                <strong>Salaried Debt Assessment:</strong> Struggling with Aditya Birla personal loan or fintech partner EMI bounces alongside credit cards or bank loans? SettleLoans assists salaried borrowers when <strong>combined unsecured debt across all lenders is ₹3,00,000 or higher</strong>.
              </div>
              <LoanSettlementAssessmentFunnel className="!mt-0 !rounded-t-none" />
            </div>

            {/* Section 2: Rs. 750 to Rs. 1,000 + GST Dishonour Math */}
            <section id="rs-750-to-1000-dishonour" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Why One Aditya Birla Bounce Costs Up to Rs. 1,770 in Real Cash
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Compare Aditya Birla&apos;s dishonour schedule against major private banks: while HDFC, ICICI, and Axis charge Rs. 450 to Rs. 500 + GST, Aditya Birla starts at <strong>Rs. 750 + 18% GST (Rs. 885)</strong> and goes up to <strong>Rs. 1,000 + 18% GST (Rs. 1,180)</strong> per failed presentation. Because ABFL / ABCL is an NBFC pulling funds via NPCI e-NACH from your external salary account, every failed debit hits twice:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    ABFL Overdue Ledger Charge
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    <strong>Rs. 885 to Rs. 1,180</strong> (inclusive of 18% GST) added to your Aditya Birla loan&apos;s unpaid charges bucket on every rejected NACH, ECS, or cheque presentation.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-red-50/70 border border-red-200">
                  <h3 className="text-lg font-black text-red-700 mb-2">
                    Your Salary Bank&apos;s Return Deduction
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    <strong>Rs. 295 to Rs. 590</strong> immediately debited by your own salary bank (SBI, HDFC, ICICI, Axis, or Kotak) as an inward NACH return charge, pushing your true single-bounce loss to <strong>Rs. 1,180 to Rs. 1,770</strong>!
                  </p>
                </div>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                When an unpaid 5th-of-the-month mandate is re-presented once more mid-month, a salaried borrower loses between <strong>Rs. 2,360 and Rs. 3,540 in pure bounce fees inside 15 days</strong> before counting a single rupee of overdue penal charges!
              </p>
            </section>

            {/* Section 3: Up to 3% Monthly Penal Rule */}
            <section id="three-percent-penal-rule" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Up to 3% Per Month (36% p.a.) Overdue Penal Charge Explained
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Alongside high dishonour fees, Aditya Birla Finance&apos;s retail schedule prescribes an overdue penal charge of <strong>up to 3% per month (36% per annum) plus 18% GST</strong> on the unpaid EMI installment from the due date until actual clearance (plus up to 2% p.a. for material covenant non-compliance where specified in commercial/professional KFS sheets).
              </p>
              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 mb-6">
                <h3 className="text-lg font-black text-amber-950 mb-2">
                  How 36% p.a. Penal Charges Stack Over 90 Days
                </h3>
                <p className="text-sm md:text-base text-amber-950 leading-relaxed">
                  On a <strong>Rs. 19,000 monthly EMI</strong>, 3% per month equals Rs. 570 + 18% GST = <strong>Rs. 672.60 per overdue EMI-month</strong> (roughly Rs. 22.42 per day). If three consecutive monthly installments go unpaid through Day 90 (NPA classification), Month 1 accrues 3 months, Month 2 accrues 2 months, and Month 3 accrues 1 month, totaling 6 EMI-months × Rs. 672.60 = <strong>Rs. 4,036</strong> in penal charges alone! Under RBI&apos;s Fair Lending Practice directions, ABFL must keep this penal bucket separate and <strong>non-capitalized</strong> rather than compounding it into principal.
                </p>
              </div>
            </section>

            {/* Section 4: ABCD & Fintech Partner Co-Lending Mandates */}
            <section id="abcd-fintech-colending" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                ABCD App &amp; Fintech Partner Personal Loan Bounce Surprises
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                A huge percentage of young salaried borrowers searching for Aditya Birla Finance bounce charges never walked into an Aditya Birla branch at all! Instead, they tapped &quot;Instant Personal Loan&quot; or &quot;Postpaid / Merchant / Consumer Credit&quot; inside a third-party super-app (such as Paytm or digital lending marketplaces) or inside the <strong>ABCD (Aditya Birla Capital Digital)</strong> app, where Aditya Birla serves as the regulated balance-sheet lender on the Key Fact Statement.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Two dangerous traps hit fintech-originated ABFL borrowers: first, borrowers who took two or three small Rs. 40,000 to Rs. 80,000 instant drawdowns across six months inadvertently register <strong>two or three separate NACH mandates</strong> hitting their bank account on the exact same 5th due date. One delayed salary credit triggers multiple Rs. 885 to Rs. 1,180 ABFL bounce fees plus multiple Rs. 590 salary-bank return fees in a single morning! Second, uninstalling the front-end partner app does nothing to pause NACH presentations or CIBIL DPD reporting under Aditya Birla&apos;s LAN.
              </p>
            </section>

            {/* Section 5: Rs. 5,000 Rescheduling & Foreclosure Trap */}
            <section id="rescheduling-foreclosure-fees" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Why Rs. 5,000+ Rescheduling &amp; 4% Foreclosure Fees Lock You In
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Borrowers experiencing salary cuts often call Customer Care asking to extend their loan tenure or reduce monthly EMIs. Check Aditya Birla&apos;s published Retail Schedule of Charges before banking on a casual modification: formal <strong>loan rescheduling / re-schedulement carries an upfront fee of Rs. 5,000 to Rs. 7,500 plus 18% GST (Rs. 5,900 to Rs. 8,850)</strong> where approved, and lenders rarely approve tenure extensions once an account already has active NACH bounces.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Similarly, foreclosing a salaried Term or Flexi Personal Loan early attracts <strong>up to 4% + 18% GST (4.72%)</strong> after the initial lock-in period, making debt-consolidation buyouts expensive even before CIBIL DPD drops shut the door on new bank loans.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Salaried borrowers holding Aditya Birla&apos;s <strong>Flexi / Line-of-Credit Personal Loan</strong> face an additional liquidity squeeze when an installment bounces: any unpaid monthly interest presentation immediately blocks fresh drawdowns from your sanctioned Flexi limit inside the ABCD portal, while 3% monthly penal charges begin accruing daily on the unpaid installment. Likewise, if your corporate employer credits salary on the 7th or 10th of the month while your Aditya Birla e-NACH presentation runs on the 5th, paying manually three days late every single month still bleeds Rs. 1,180 to Rs. 1,770 per month in combined ABFL and salary-bank return charges unless you reserve one full EMI ahead of the 4th!
              </p>
            </section>

            {/* Section 6: 6-Month Overdue Cost Table */}
            <section id="six-month-abfl-projection" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                6-Month Overdue Cost Projection on an Aditya Birla Loan
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Let us model a salaried software QA lead carrying a Rs. 6,00,000 Aditya Birla Personal Loan (remaining principal Rs. 4,75,000, monthly EMI <strong>Rs. 17,200</strong>, Rs. 850 average base / Rs. 750 + GST = Rs. 885 bounce KFS slab) linked via e-NACH to a private salary bank charging Rs. 500 + GST per inward return, assuming 2 NACH presentations per unpaid month and 3% monthly penal charges (+ GST):
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Delinquency Stage</th>
                      <th className="p-3.5 font-bold">ABFL Bounce Fees (+GST)</th>
                      <th className="p-3.5 font-bold">Salary Bank Returns (+GST)</th>
                      <th className="p-3.5 font-bold">3% Monthly Penal (+GST)</th>
                      <th className="p-3.5 font-bold">Total Penalty Drain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 1 (2 bounces, 30 DPD)</td>
                      <td className="p-3.5">Rs. 1,770</td>
                      <td className="p-3.5">Rs. 1,180</td>
                      <td className="p-3.5">Rs. 609</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 3,559</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 3 (6 bounces, 90 DPD NPA)</td>
                      <td className="p-3.5">Rs. 5,310</td>
                      <td className="p-3.5">Rs. 3,540</td>
                      <td className="p-3.5">Rs. 3,653</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 12,503</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 6 (12 bounces, 180 DPD)</td>
                      <td className="p-3.5">Rs. 10,620</td>
                      <td className="p-3.5">Rs. 7,080</td>
                      <td className="p-3.5">Rs. 12,786</td>
                      <td className="p-3.5 font-black text-red-800">Rs. 30,486</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                On the Rs. 1,000 + GST bounce tier, that 6-month penalty bleed climbs to <strong>Rs. 34,026</strong>! Test your exact Aditya Birla EMI and multi-lender dues inside our{" "}
                <Link
                  href="https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  Personal Loan EMI Bounce Charges Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 7: Paying Overdue on ABCD / ABCL Portal */}
            <section id="abcd-portal-clearance" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Clearing Overdue EMIs on ABCD App &amp; Stopping Repeat Retries
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                If your combined unsecured debt is below Rs. 3,00,000 and your bounce happened due to a short-term salary delay, act immediately to halt a second Rs. 1,770 double deduction:
              </p>
              <ol className="space-y-4 list-decimal pl-5 text-base text-slate-700 mb-6">
                <li>
                  <strong>Pay Inside the ABCD App or Aditya Birla Capital Portal:</strong> Log in using your registered mobile number, locate your active Loan Account Number (LAN), and clear the overdue installment via UPI or NetBanking within 24 to 48 hours of the missed due date.
                </li>
                <li>
                  <strong>Use Official BBPS if Partner App Fails:</strong> If your loan originated through a third-party fintech app whose repayment screen lags, you can also pay directly against your ABFL / Aditya Birla Capital LAN via official Bharat BillPay (BBPS) Loan Repayment inside major banking apps, saving the BBPS transaction reference ID.
                </li>
                <li>
                  <strong>Swap Mandates Properly After Changing Employers:</strong> Pay the Rs. 500 to Rs. 750 + GST swap fee to move your e-Mandate to your new corporate salary account before emptying your previous bank account.
                </li>
              </ol>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Also review our checklists on{" "}
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

            {/* Section 8: Auditing Your ABFL Statement */}
            <section id="abfl-soa-return-codes" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Auditing Your Aditya Birla Statement &amp; Section 25 Notices
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Before entering any repayment arrangement or disputing excess charges, download your complete Statement of Account (SOA) digitally via the Aditya Birla Capital portal (physical branch copies can attract administrative document fees) and verify:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>KFS Bounce &amp; Penal Verification:</strong> Confirm that every Rs. 885 or Rs. 1,180 bounce entry matches an actual bank NACH presentation date and that 3% monthly penal charges remain strictly uncapitalized.
                </li>
                <li>
                  <strong>NPCI Technical Return Disputes (Code R20):</strong> If your bank statement proves sufficient clear balance on the evening before due date and the mandate returned due to a technical clearing error, demand a 100% reversal of the ABFL bounce fee and CIBIL DPD correction.
                </li>
                <li>
                  <strong>Handling Section 25 &amp; Arbitration Notices Calmly:</strong> Consecutive e-NACH dishonours at ABFL often generate automated legal notices under Section 25 of the Payment and Settlement Systems Act, 2007 or institutional arbitration intimations. Never ignore written notices; submit a factual written hardship reply or engage experienced legal debt-settlement counsel. Read{" "}
                  <Link
                    href="https://www.settleloans.in/ecs-nach-bounce-legal-notice-section-25-payment-settlement-act-guide"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    our Section 25 NACH bounce notice defense guide
                  </Link>
                  .
                </li>
              </ul>
            </section>

            {/* Section 9: 15-Day CIBIL & GRO Escalation */}
            <section id="cibil-nodal-escalation" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                15-Day CIBIL Reporting &amp; Aditya Birla Grievance Escalation
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Under RBI&apos;s fortnightly bureau reporting mandate, Aditya Birla transmits borrower Days Past Due (DPD) files to CIBIL, Experian, Equifax, and CRIF High Mark as of the <strong>15th and last day of every month</strong>. A 5th-date bounce left unpaid past the 15th records an immediate SMA-0 delinquency mark across every bureau, advancing through SMA-1 (31 to 60 DPD), SMA-2 (61 to 90 DPD), and NPA classification beyond 90 DPD.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-4">
                To dispute unreversed technical bounces or third-party recovery harassment outside RBI&apos;s 8:00 AM to 7:00 PM calling hours, log a written complaint on the Aditya Birla Capital Customer Service portal (Level 1), escalate unresolved tickets to the <strong>Grievance Redressal Officer (GRO) / Principal Nodal Officer</strong>, and past 30 days to the Reserve Bank Integrated Ombudsman portal. See{" "}
                <Link
                  href="https://www.settleloans.in/reminder-calls-after-emi-bounce"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  your legal rights during recovery reminder calls
                </Link>
                .
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Always retain your service request numbers, stamped savings bank statements, and KFS fee disclosures in a single digital folder so any discrepancy in bounce fees or bureau DPD reporting can be proven quickly before Aditya Birla&apos;s Nodal Officer or the RBI Ombudsman.
              </p>
            </section>

            {/* Section 10: Salaried ABFL Settlement Path */}
            <section id="abfl-salaried-settlement" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Salaried Aditya Birla Loan Settlement Path (Debt ≥ ₹3 Lakhs)
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Because Aditya Birla levies Rs. 885 to Rs. 1,180 per bounce and up to 36% p.a. overdue penal charges, salaried professionals hit by job loss, pay cuts, business closures, or medical emergencies lose tens of thousands of rupees when making uncoordinated partial payments during 60+ or 90+ DPD. Standard NBFC appropriation wipes out bounce and penal buckets first while principal barely budges.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                When your <strong>total combined unsecured debt across Aditya Birla loans (including fintech partner LANs), credit cards, and bank loans is ₹3,00,000 or higher</strong>, SettleLoans structures a formal legal resolution:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Consolidating Direct &amp; Fintech Partner LANs:</strong> Mapping every active ABFL / ABCL Loan Account Number on your CIBIL report and stopping multi-mandate bank return bleed while you build settlement funds safely.
                </li>
                <li>
                  <strong>100% Waiver of Bounce &amp; 36% Penal Charges at NPA Stage:</strong> Presenting documented hardship proof post 90+ DPD to Aditya Birla&apos;s authorized settlement team to eliminate accumulated bounce fees and 3% monthly penal buckets alongside a realistic principal haircut (indicatively 42% to 60% of principal depending on case merits; never guaranteed).
                </li>
                <li>
                  <strong>Authenticated Aditya Birla Settlement Sanction Letter:</strong> Verifying an official letterhead settlement letter detailing each exact LAN, full-and-final closure amount, payment schedule, withdrawal of pending legal/arbitration notices, and No Dues Certificate timeline before you pay. Visit our{" "}
                  <Link
                    href="https://www.settleloans.in/aditya-birla-finance-loan-settlement"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    Aditya Birla Finance loan settlement guide
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
                Aditya Birla Finance EMI Bounce Charges FAQs
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
                Stop Losing ₹3,500+ Monthly to Aditya Birla Bounce &amp; Penal Fees
              </div>
              <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-6">
                Carrying ₹3,00,000 or more across Aditya Birla / ABCD loans, credit cards, and bank personal loans? Check your confidential salaried settlement plan today.
              </p>
              <a
                href="#settlement-assessment"
                className="inline-block bg-[#1F5EFF] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Evaluate My Settlement Plan
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
              <strong>Disclaimer:</strong> SettleLoans is an independent debt resolution and legal advisory platform and is not affiliated with Aditya Birla Capital Limited or Aditya Birla Finance Limited. All tariff figures reflect Aditya Birla&apos;s published Retail Schedule of Charges checked on 11 November 2026 and remain subject to company updates and your Key Fact Statement (KFS).
            </div>
          </article>

          {/* Right Column: Sticky Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-6 text-white border border-white/10 shadow-xl">
                <div className="text-lg font-black mb-2">
                  Aditya Birla Calculator
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-5">
                  Model ABFL&apos;s Rs. 750 to Rs. 1,000 + GST bounce fee, bank return deductions, and 3% monthly penal charges instantly.
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
                      href="https://www.settleloans.in/aditya-birla-finance-loan-settlement"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Aditya Birla Loan Settlement Guide
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
                      href="https://www.settleloans.in/tata-capital-personal-loan-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Tata Capital PL Bounce Charges
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/smfg-india-credit-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • SMFG India Credit Bounce Charges
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
