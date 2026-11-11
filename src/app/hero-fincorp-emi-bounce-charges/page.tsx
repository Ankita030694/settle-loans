import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import LoanSettlementAssessmentFunnel from "@/components/LoanSettlementAssessmentFunnel";

export const metadata: Metadata = {
  title: "Hero FinCorp Loan EMI Bounce Charges | SettleLoans",
  description: "Check official Hero FinCorp & SimplyCash personal loan EMI bounce charges (Rs. 350 incl. tax), 3% monthly penal rules, NACH retries, and relief.",
  alternates: {
    canonical: "https://www.settleloans.in/hero-fincorp-emi-bounce-charges",
  },
  openGraph: {
    title: "Hero FinCorp Loan EMI Bounce Charges | SettleLoans",
    description: "Check official Hero FinCorp & SimplyCash personal loan EMI bounce charges (Rs. 350 incl. tax), 3% monthly penal rules, NACH retries, and relief.",
    url: "https://www.settleloans.in/hero-fincorp-emi-bounce-charges",
    type: "article",
    images: [
      {
        url: "https://www.settleloans.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hero FinCorp Personal Loan EMI Bounce Charges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hero FinCorp Loan EMI Bounce Charges | SettleLoans",
    description: "Check official Hero FinCorp & SimplyCash personal loan EMI bounce charges (Rs. 350 incl. tax), 3% monthly penal rules, NACH retries, and relief.",
    images: ["https://www.settleloans.in/og-image.jpg"],
  },
};

const tocItems = [
  { id: "hero-official-tariff", title: "Official Hero FinCorp Tariff" },
  { id: "rs-350-paradox-bank-fee", title: "Why Rs. 350 Still Costs Rs. 940" },
  { id: "three-percent-penal-rule", title: "3% Monthly Pro-Rated Penal" },
  { id: "simplycash-app-retries", title: "Hero Instant & SimplyCash App" },
  { id: "five-percent-foreclosure-trap", title: "5% Foreclosure & Dual Loans" },
  { id: "six-month-hero-projection", title: "6-Month Overdue Cost Table" },
  { id: "hero-app-manual-clearance", title: "Clearing Overdue on Hero App" },
  { id: "hero-soa-return-codes", title: "Auditing Your Hero FinCorp SOA" },
  { id: "cibil-nodal-escalation", title: "15-Day CIBIL & GRO Escalation" },
  { id: "hero-salaried-settlement", title: "Salaried Hero Settlement Path" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
  {
    q: "What is the Hero FinCorp personal loan EMI bounce charge?",
    a: "According to Hero FinCorp Limited's published Personal Loan Fees and Charges schedule, the NACH, ECS, or cheque bounce charge on personal loans is Rs. 350 per bounce instance, inclusive of applicable taxes.",
  },
  {
    q: "If Hero FinCorp charges Rs. 350 per bounce, why did I lose Rs. 880 to Rs. 940?",
    a: "Because Hero FinCorp is an NBFC pulling EMIs via e-NACH from your external salary bank, every failed debit triggers Rs. 350 on your Hero FinCorp loan statement PLUS an immediate Rs. 295 (SBI) to Rs. 590 (HDFC, ICICI, Axis, Kotak) inward NACH return charge deducted by your own salary bank, meaning your own bank actually charges you more than Hero FinCorp on every bounce!",
  },
  {
    q: "How much penal charge does Hero FinCorp levy on overdue personal loan EMIs?",
    a: "Hero FinCorp levies a Late Payment / Penal Charge of 3% per month (36% per annum) pro-rated daily on the overdue EMI amount until paid (with select prime retail KFS schemes carrying 1% to 2% per month plus GST). Under RBI's Fair Lending Practice directions, these penal charges are non-capitalized and never compound into loan principal.",
  },
  {
    q: "Do SimplyCash app personal loans follow Hero FinCorp's bounce and penal rules?",
    a: "Yes. SimplyCash (Hero FinCorp Instant Personal Loan App) is Hero FinCorp Limited's direct digital personal loan platform offering Rs. 50,000 to Rs. 5,00,000 salaried and self-employed loans. All e-NACH mandates, Rs. 350 bounce charges, daily pro-rated penal charges, and CIBIL reporting run directly under Hero FinCorp Limited.",
  },
  {
    q: "What are Hero FinCorp's personal loan due dates and foreclosure charges?",
    a: "Hero FinCorp personal loans commonly present e-NACH mandates around the 3rd, 5th, or 7th of every month. Full foreclosure / pre-closure attracts a steep 5% plus 18% GST (5.90%) on outstanding principal after the lock-in period.",
  },
  {
    q: "Why did Hero FinCorp attempt multiple NACH debits in the same month?",
    a: "When an initial due-date e-NACH presentation bounces unpaid, automated digital collection engines frequently dispatch 1 to 2 follow-up NACH re-presentations later in the month unless the borrower clears the overdue installment manually through the Hero FinCorp app.",
  },
  {
    q: "How can I pay a bounced Hero FinCorp EMI manually to stop repeat bank return fees?",
    a: "Open the Hero FinCorp Customer App, SimplyCash App, or Hero FinCorp's official Quick Pay online portal, enter your Loan Account Number (LAN), and pay the overdue EMI via UPI, Debit Card, or NetBanking within 24 to 48 hours of the missed due date so subsequent NACH retries are suppressed.",
  },
  {
    q: "Can I dispute a Rs. 350 Hero FinCorp bounce fee if my bank account had clear funds?",
    a: "Yes. If your salary bank held sufficient clear balance on the evening before your due date and the e-NACH presentation failed due to an NPCI or sponsor-bank technical error (Return Code R20), submit a ticket to customer.care@herofincorp.com attaching your stamped bank statement for full fee reversal and CIBIL correction.",
  },
  {
    q: "How quickly does Hero FinCorp report an EMI bounce to CIBIL?",
    a: "Under RBI's fortnightly credit bureau reporting mandate, Hero FinCorp uploads borrower Days Past Due (DPD) snapshots to CIBIL, Experian, Equifax, and CRIF High Mark as of the 15th and last day of every month. Leaving an early-month bounce unpaid past the 15th records an immediate SMA-0 delinquency mark.",
  },
  {
    q: "Does Hero FinCorp waive bounce and 36% p.a. penal charges during loan settlement?",
    a: "When an unsecured Hero FinCorp or SimplyCash personal loan crosses 90 days past due into Non-Performing Asset (NPA) status due to genuine salaried hardship such as job loss, pay cuts, or medical emergencies, formal negotiated settlements typically waive 100% of accumulated bounce fees and 3% monthly penal charges while settling principal at an agreed haircut.",
  },
  {
    q: "When can SettleLoans assist me with Hero FinCorp personal loan settlement?",
    a: "SettleLoans represents salaried borrowers whose combined unsecured debt across Hero FinCorp / SimplyCash loans, credit cards, private bank loans, and other NBFCs is Rs. 3,00,000 or higher.",
  },
];

export default function HeroFincorpEmiBounceChargesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.settleloans.in/hero-fincorp-emi-bounce-charges#breadcrumb",
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
            "name": "Hero FinCorp Loan EMI Bounce Charges",
            "item": "https://www.settleloans.in/hero-fincorp-emi-bounce-charges"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.settleloans.in/hero-fincorp-emi-bounce-charges#article",
        "headline": "Hero FinCorp Personal Loan EMI & NACH Bounce Charges (Verified Schedule)",
        "description": "Verified guide to Hero FinCorp and SimplyCash personal loan EMI bounce fees (Rs. 350 incl. taxes), 3% monthly penal charges, NACH retries, and settlement.",
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
          "@id": "https://www.settleloans.in/hero-fincorp-emi-bounce-charges"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.settleloans.in/hero-fincorp-emi-bounce-charges#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the Hero FinCorp personal loan EMI bounce charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "According to Hero FinCorp Limited's published Personal Loan Fees and Charges schedule, the NACH, ECS, or cheque bounce charge on personal loans is Rs. 350 per bounce instance, inclusive of applicable taxes."
            }
          },
          {
            "@type": "Question",
            "name": "If Hero FinCorp charges Rs. 350 per bounce, why did I lose Rs. 880 to Rs. 940?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because Hero FinCorp is an NBFC pulling EMIs via e-NACH from your external salary bank, every failed debit triggers Rs. 350 on your Hero FinCorp loan statement PLUS an immediate Rs. 295 (SBI) to Rs. 590 (HDFC, ICICI, Axis, Kotak) inward NACH return charge deducted by your own salary bank, meaning your own bank actually charges you more than Hero FinCorp on every bounce!"
            }
          },
          {
            "@type": "Question",
            "name": "How much penal charge does Hero FinCorp levy on overdue personal loan EMIs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hero FinCorp levies a Late Payment / Penal Charge of 3% per month (36% per annum) pro-rated daily on the overdue EMI amount until paid (with select prime retail KFS schemes carrying 1% to 2% per month plus GST). Under RBI's Fair Lending Practice directions, these penal charges are non-capitalized and never compound into loan principal."
            }
          },
          {
            "@type": "Question",
            "name": "Do SimplyCash app personal loans follow Hero FinCorp's bounce and penal rules?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. SimplyCash (Hero FinCorp Instant Personal Loan App) is Hero FinCorp Limited's direct digital personal loan platform offering Rs. 50,000 to Rs. 5,00,000 salaried and self-employed loans. All e-NACH mandates, Rs. 350 bounce charges, daily pro-rated penal charges, and CIBIL reporting run directly under Hero FinCorp Limited."
            }
          },
          {
            "@type": "Question",
            "name": "What are Hero FinCorp's personal loan due dates and foreclosure charges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hero FinCorp personal loans commonly present e-NACH mandates around the 3rd, 5th, or 7th of every month. Full foreclosure / pre-closure attracts a steep 5% plus 18% GST (5.90%) on outstanding principal after the lock-in period."
            }
          },
          {
            "@type": "Question",
            "name": "Why did Hero FinCorp attempt multiple NACH debits in the same month?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When an initial due-date e-NACH presentation bounces unpaid, automated digital collection engines frequently dispatch 1 to 2 follow-up NACH re-presentations later in the month unless the borrower clears the overdue installment manually through the Hero FinCorp app."
            }
          },
          {
            "@type": "Question",
            "name": "How can I pay a bounced Hero FinCorp EMI manually to stop repeat bank return fees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Open the Hero FinCorp Customer App, SimplyCash App, or Hero FinCorp's official Quick Pay online portal, enter your Loan Account Number (LAN), and pay the overdue EMI via UPI, Debit Card, or NetBanking within 24 to 48 hours of the missed due date so subsequent NACH retries are suppressed."
            }
          },
          {
            "@type": "Question",
            "name": "Can I dispute a Rs. 350 Hero FinCorp bounce fee if my bank account had clear funds?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. If your salary bank held sufficient clear balance on the evening before your due date and the e-NACH presentation failed due to an NPCI or sponsor-bank technical error (Return Code R20), submit a ticket to customer.care@herofincorp.com attaching your stamped bank statement for full fee reversal and CIBIL correction."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly does Hero FinCorp report an EMI bounce to CIBIL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under RBI's fortnightly credit bureau reporting mandate, Hero FinCorp uploads borrower Days Past Due (DPD) snapshots to CIBIL, Experian, Equifax, and CRIF High Mark as of the 15th and last day of every month. Leaving an early-month bounce unpaid past the 15th records an immediate SMA-0 delinquency mark."
            }
          },
          {
            "@type": "Question",
            "name": "Does Hero FinCorp waive bounce and 36% p.a. penal charges during loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When an unsecured Hero FinCorp or SimplyCash personal loan crosses 90 days past due into Non-Performing Asset (NPA) status due to genuine salaried hardship such as job loss, pay cuts, or medical emergencies, formal negotiated settlements typically waive 100% of accumulated bounce fees and 3% monthly penal charges while settling principal at an agreed haircut."
            }
          },
          {
            "@type": "Question",
            "name": "When can SettleLoans assist me with Hero FinCorp personal loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SettleLoans represents salaried borrowers whose combined unsecured debt across Hero FinCorp / SimplyCash loans, credit cards, private bank loans, and other NBFCs is Rs. 3,00,000 or higher."
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
              Hero FinCorp Personal Loan EMI &amp; NACH Bounce Charges
            </h1>
            <p className="text-base md:text-xl text-[#DEDEDE]/85 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
              Complete salaried borrower guide to Hero FinCorp and SimplyCash personal loan Rs. 350 (tax-inclusive) bounce charges, why salary-bank NACH return fees double your actual loss, 3% monthly penal rules, and structured settlement relief.
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
                Calculate Hero FinCorp Bounce Drain
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
                  Hero FinCorp Bounce Charges
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
            {/* Section 1: Official Hero FinCorp Tariff */}
            <section id="hero-official-tariff" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Hero FinCorp Personal Loan Schedule of Bounce &amp; Penal Charges
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                <strong>Hero FinCorp Limited</strong> (the financial services arm of the Hero Group, powering both branch-led Salaried Personal Loans and the widely downloaded <strong>Hero FinCorp Instant Personal Loan / SimplyCash</strong> mobile app) presents an intriguing pricing paradox. On one hand, its published EMI bounce charge of <strong>Rs. 350 per bounce (inclusive of applicable taxes)</strong> is the lowest among major Indian NBFCs. On the other hand, Hero FinCorp pairs that low flat bounce fee with a steep <strong>3% per month (36% per annum) daily pro-rated overdue penal charge</strong> and automated NACH re-presentations that trigger expensive return fees at your salary bank!
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-6">
                All fee figures below were verified directly against Hero FinCorp&apos;s published Personal Loan Fees and Charges schedule on 11 November 2026:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-5">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#2E2E2E] text-white">
                      <th className="p-4 font-bold">Hero FinCorp Personal Loan Fee Head</th>
                      <th className="p-4 font-bold">Official Published Tariff</th>
                      <th className="p-4 font-bold">Effective Borrower Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">NACH / ECS / Cheque Bounce Charge</td>
                      <td className="p-4 text-slate-700">Rs. 350 per bounce (inclusive of applicable taxes)</td>
                      <td className="p-4 font-semibold text-red-700">Rs. 350 per failed presentation</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Penal Charge (Overdue / Delayed EMI)</td>
                      <td className="p-4 text-slate-700">3% per month (36% p.a.) pro-rated daily (1% to 2% select KFS)</td>
                      <td className="p-4 font-semibold text-red-700">Up to 3% monthly + GST (non-capitalized)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Mandate / Repayment Swap Charge</td>
                      <td className="p-4 text-slate-700">Rs. 500 + 18% GST (per KFS / service tariff)</td>
                      <td className="p-4 font-semibold text-slate-800">Rs. 590 per bank mandate swap</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Foreclosure / Full Prepayment Charge</td>
                      <td className="p-4 text-slate-700">5% on principal outstanding + 18% GST</td>
                      <td className="p-4 font-semibold text-slate-800">5.90% of principal after lock-in</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#2E2E2E]">Part-Prepayment Charge</td>
                      <td className="p-4 text-slate-700">Nil on eligible standard variants (subject to KFS terms)</td>
                      <td className="p-4 font-semibold text-emerald-700">Check KFS lock-in &amp; minimum cap</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs md:text-sm text-slate-600">
                <strong>Official Source Verification:</strong> Verified against{" "}
                <a
                  href="https://www.herofincorp.com/personal-loan-fees-and-charges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  Hero FinCorp Official Personal Loan Fees &amp; Charges
                </a>{" "}
                on <strong>11 November 2026</strong>. Always inspect your signed Key Fact Statement (KFS) inside the Hero FinCorp / SimplyCash app to confirm whether your variant carries the standard 3% monthly penal rate or a 1% to 2% retail KFS slab.
              </div>
            </section>

            {/* Funnel Near Hero */}
            <div className="mb-14">
              <div className="p-5 rounded-t-3xl bg-blue-50 border border-b-0 border-blue-200 text-sm text-slate-800">
                <strong>Salaried Debt Assessment:</strong> Juggling Hero FinCorp or SimplyCash app loan bounces alongside credit cards, bank personal loans, or other NBFC EMIs? SettleLoans assists salaried borrowers when <strong>combined unsecured debt across all lenders is ₹3,00,000 or higher</strong>.
              </div>
              <LoanSettlementAssessmentFunnel className="!mt-0 !rounded-t-none" />
            </div>

            {/* Section 2: Why Rs. 350 Still Costs Rs. 940 */}
            <section id="rs-350-paradox-bank-fee" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                The Rs. 350 Bounce Paradox: Why Your Salary Bank Charges More!
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Borrowers reading Hero FinCorp&apos;s Rs. 350 bounce fee often breathe a sigh of relief thinking a missed due date will barely sting. Then they open their salary bank statement and discover they actually lost <strong>Rs. 881 to Rs. 940 on a single failed presentation</strong>! Here is why:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-lg font-black text-[#2E2E2E] mb-2">
                    Hero FinCorp Loan Ledger (Rs. 350)
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Hero FinCorp posts Rs. 350 (inclusive of tax) to your overdue charges bucket on the 3rd, 5th, or 7th due date when your e-NACH returns unpaid.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-red-50/70 border border-red-200">
                  <h3 className="text-lg font-black text-red-700 mb-2">
                    Salary Bank Inward Return (Rs. 531 to Rs. 590)
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Your private salary bank (HDFC, ICICI, Axis, Kotak, or IDFC FIRST) immediately deducts Rs. 450 to Rs. 500 + 18% GST (<strong>Rs. 531 to Rs. 590</strong>) directly from your savings balance (Rs. 295 at SBI)!
                  </p>
                </div>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                In other words, <strong>your own salary bank charges 68% more than Hero FinCorp</strong> on every failed presentation! If Hero FinCorp&apos;s digital collection system fires three NACH presentations in an unpaid month (say on the 5th, 10th, and 16th), you lose Rs. 1,050 on Hero FinCorp&apos;s ledger plus Rs. 1,770 in bank return deductions, wiping out <strong>Rs. 2,820 in a single month</strong>!
              </p>
            </section>

            {/* Section 3: 3% Monthly Pro-Rated Penal */}
            <section id="three-percent-penal-rule" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Hero FinCorp&apos;s 3% Monthly (36% p.a.) Daily Penal Charge Math
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Where Hero FinCorp makes up for its modest Rs. 350 dishonour fee is its steep Late Payment / Penal Charge of <strong>3% per month (36% per annum) pro-rated daily on the overdue EMI amount</strong> from the due date until actual payment (with select lower-risk retail personal loan KFS cohorts carrying 1% to 2% per month).
              </p>
              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 mb-6">
                <h3 className="text-lg font-black text-amber-950 mb-2">
                  Daily Pro-Rata &amp; 90-Day Accumulation Example
                </h3>
                <p className="text-sm md:text-base text-amber-950 leading-relaxed">
                  On a <strong>Rs. 12,000 monthly Hero FinCorp EMI</strong>, 3% per month equals Rs. 360 (+ GST where applicable per KFS, ~Rs. 425 per overdue EMI-month, or ~Rs. 14.16 per day). Clearing a bounced installment 5 days late adds just ~Rs. 71 in penal charges. Leaving three consecutive Rs. 12,000 EMIs unpaid through Day 90 (NPA stage) stacks 6 overdue EMI-months × Rs. 425 = <strong>Rs. 2,550</strong> in penal charges alone. In accordance with RBI&apos;s Fair Lending Practice norms, these penal charges remain <strong>non-capitalized</strong> and never compound contractual loan interest.
                </p>
              </div>
            </section>

            {/* Section 4: Hero Instant & SimplyCash App */}
            <section id="simplycash-app-retries" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                SimplyCash &amp; Hero FinCorp Instant App Loan Realities
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Millions of salaried employees earning Rs. 18,000 to Rs. 60,000 per month use <strong>SimplyCash / Hero FinCorp Instant Personal Loan App</strong> for quick Rs. 50,000 to Rs. 5,00,000 paperless disbursements. Salaried borrowers often treat app loans casually compared to traditional bank loans, overlooking three hard realities:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Direct NBFC Bureau Reporting:</strong> SimplyCash is not an unregulated payday app; every single Loan Account Number is reported fortnightly to CIBIL, Experian, Equifax, and CRIF High Mark directly under <strong>Hero FinCorp Limited</strong>.
                </li>
                <li>
                  <strong>Aggressive Automated e-NACH Retries:</strong> App-originated mandates are wired into automated NPCI presentation queues. Leaving Rs. 2,000 sitting in your salary account for groceries while a Rs. 9,500 SimplyCash EMI is overdue guarantees repeated Rs. 590 bank return deductions until your savings balance is drained to zero!
                </li>
                <li>
                  <strong>Cross-Sell Two-Wheeler Loan Overlap:</strong> Borrowers who originally financed a Hero MotoCorp two-wheeler through Hero FinCorp and later accepted a pre-approved Personal Loan top-up must keep secured vehicle EMIs current even when facing unsecured personal loan distress, because defaulting on a hypothecated vehicle loan carries repossession risk distinct from unsecured personal loans.
                </li>
              </ul>
            </section>

            {/* Section 5: 5% Foreclosure & Dual Loans */}
            <section id="five-percent-foreclosure-trap" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Why Hero FinCorp&apos;s 5% + GST Foreclosure Fee Blocks Refinancing
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Hero FinCorp&apos;s published personal loan schedule levies a <strong>5% + 18% GST (5.90%) foreclosure / full prepayment charge</strong> on outstanding principal after the initial lock-in period, making it one of the steepest pre-closure tariffs in the salaried personal loan market.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                On a Rs. 4,00,000 outstanding balance, closing via a balance transfer costs <strong>Rs. 23,600 upfront</strong> in foreclosure fees alone! And once even two e-NACH bounces appear on your CIBIL report, prime banks reject consolidation loans altogether, leaving stressed borrowers trapped if their combined debt across multiple apps, NBFCs, and credit cards exceeds monthly income.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Salaried employees also get caught by payroll date misalignment on Hero FinCorp and SimplyCash mandates: because automated presentations commonly run on the <strong>3rd, 5th, or 7th of every month</strong>, employees whose salary arrives on the 8th or 10th lose Rs. 881 to Rs. 940 every single month in combined Hero FinCorp bounce charges and salary-bank inward return fees even when they pay manually two days later! Likewise, borrowers holding two active SimplyCash tranches simultaneously suffer double bank return deductions on the exact same morning whenever their savings balance runs low, eroding Rs. 1,760 to Rs. 1,880 before payday even lands.
              </p>
            </section>

            {/* Section 6: 6-Month Overdue Cost Table */}
            <section id="six-month-hero-projection" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                6-Month Overdue Cost Projection on a Hero FinCorp Loan
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Let us trace a salaried sales executive carrying a Rs. 3,80,000 Hero FinCorp Personal Loan (remaining principal Rs. 3,10,000, monthly EMI <strong>Rs. 13,200</strong>) linked via e-NACH to a private salary bank charging Rs. 500 + GST per inward return, assuming 2 NACH presentations per unpaid month and 3% monthly penal charges (+ GST):
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Delinquency Stage</th>
                      <th className="p-3.5 font-bold">Hero Bounce Fees (Incl. Tax)</th>
                      <th className="p-3.5 font-bold">Salary Bank Returns (+GST)</th>
                      <th className="p-3.5 font-bold">3% Monthly Penal (+GST)</th>
                      <th className="p-3.5 font-bold">Total Penalty Drain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 1 (2 bounces, 30 DPD)</td>
                      <td className="p-3.5">Rs. 700</td>
                      <td className="p-3.5">Rs. 1,180</td>
                      <td className="p-3.5">Rs. 467</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 2,347</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 3 (6 bounces, 90 DPD NPA)</td>
                      <td className="p-3.5">Rs. 2,100</td>
                      <td className="p-3.5">Rs. 3,540</td>
                      <td className="p-3.5">Rs. 2,804</td>
                      <td className="p-3.5 font-black text-red-700">Rs. 8,444</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-[#2E2E2E]">Month 6 (12 bounces, 180 DPD)</td>
                      <td className="p-3.5">Rs. 4,200</td>
                      <td className="p-3.5">Rs. 7,080</td>
                      <td className="p-3.5">Rs. 9,813</td>
                      <td className="p-3.5 font-black text-red-800">Rs. 21,093</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Even with a Rs. 350 lender bounce fee, six unpaid months still destroy <strong>Rs. 21,093</strong> through external salary-bank return fees (Rs. 7,080) and 36% p.a. overdue penal charges (Rs. 9,813)! Model your exact Hero FinCorp EMI alongside all other loans inside our{" "}
                <Link
                  href="https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  Personal Loan EMI Bounce Charges Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 7: Clearing Overdue on Hero App */}
            <section id="hero-app-manual-clearance" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Clearing Overdue Hero FinCorp EMIs &amp; Stopping Repeat Retries
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                If your combined unsecured debt is under Rs. 3,00,000 and your bounce resulted from a temporary salary delay, act immediately to halt mid-month NACH re-presentations:
              </p>
              <ol className="space-y-4 list-decimal pl-5 text-base text-slate-700 mb-6">
                <li>
                  <strong>Pay Directly via Hero FinCorp App, SimplyCash, or Official Quick Pay:</strong> Enter your Loan Account Number (LAN), select Overdue EMI + Charges, and complete payment via UPI or NetBanking within 24 to 48 hours of the missed due date so daily 3% monthly penal charges stop right away.
                </li>
                <li>
                  <strong>Never Pay Unverified WhatsApp Payment Links:</strong> Third-party tele-callers sometimes send personal UPI QR codes promising to waive the Rs. 350 bounce fee. Pay strictly inside Hero FinCorp&apos;s official app or verified Bharat BillPay (BBPS) loan biller flow so you receive an instant LAN receipt.
                </li>
                <li>
                  <strong>Register a Mandate Swap After Switching Salary Banks:</strong> Moving payroll to a new bank? Register your new e-Mandate proactively so your old account does not rack up monthly return fees and CIBIL late marks.
                </li>
              </ol>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Also read our step-by-step guides on{" "}
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
                  breaking the monthly EMI bounce cycle permanently
                </Link>
                .
              </p>
            </section>

            {/* Section 8: Auditing Your Hero FinCorp SOA */}
            <section id="hero-soa-return-codes" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Auditing Your Hero FinCorp Statement &amp; Section 25 Notices
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Whenever two or more monthly installments have bounced, download your itemized Statement of Account (SOA) from the Hero FinCorp / SimplyCash app and inspect three critical items:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Rs. 350 Tax-Inclusive Bounce Check:</strong> Verify that each bounce entry equals Rs. 350 (without duplicate tax add-ons) and matches an actual NACH presentation date on your bank statement.
                </li>
                <li>
                  <strong>NPCI Technical Return Disputes (Code R20):</strong> If your bank statement shows sufficient clear funds on the evening before due date and the e-NACH failed due to a technical clearing error, email customer.care@herofincorp.com with your PDF bank statement to reverse the Rs. 350 fee and scrub any CIBIL DPD mark.
                </li>
                <li>
                  <strong>Responding to Section 25 PSS Act &amp; Arbitration Notices:</strong> Consecutive e-NACH returns on Hero FinCorp loans commonly trigger automated advocate demand notices under Section 25 of the Payment and Settlement Systems Act, 2007 or online conciliation notices. Respond calmly in writing documenting salaried financial hardship rather than ignoring legal emails; see{" "}
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
                15-Day CIBIL Reporting &amp; Hero FinCorp Grievance Escalation
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Under RBI&apos;s fortnightly bureau reporting mandate, Hero FinCorp uploads borrower Days Past Due (DPD) data to CIBIL, Experian, Equifax, and CRIF High Mark as of the <strong>15th and last day of every month</strong>. A 3rd-date or 5th-date bounce left unpaid past the 15th stamps an immediate SMA-0 delinquency mark on your credit profile, progressing through SMA-1 (31 to 60 DPD), SMA-2 (61 to 90 DPD), and Non-Performing Asset (NPA) classification beyond 90 DPD.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-4">
                To escalate unreversed technical bounces or aggressive recovery calls violating RBI&apos;s Digital Lending and Fair Practices Code (such as calls outside 8:00 AM to 7:00 PM or contact-list / workplace harassment), submit a written ticket to Hero FinCorp Customer Care (Level 1), escalate unresolved replies to Hero FinCorp&apos;s <strong>Grievance Redressal Officer (GRO) / Nodal Officer</strong>, and past 30 days to the Reserve Bank Integrated Ombudsman portal. Read{" "}
                <Link
                  href="https://www.settleloans.in/reminder-calls-after-emi-bounce"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  borrower rights during recovery reminder calls
                </Link>
                .
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Maintaining a clean digital folder containing your SimplyCash or Hero FinCorp Key Fact Statement, monthly bank account statements, service request ticket IDs, and documented proof of job loss or medical expenses ensures that every dispute or hardship submission is evaluated on verifiable facts rather than verbal claims from outsourced tele-collection agencies. Furthermore, keeping all correspondence in writing creates a clear regulatory audit trail if you ever need to escalate billing errors or bureau reporting mistakes to Hero FinCorp&apos;s Nodal Officer or the Reserve Bank Integrated Ombudsman desk for binding resolution.
              </p>
            </section>

            {/* Section 10: Salaried Hero FinCorp Settlement Path */}
            <section id="hero-salaried-settlement" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-5 leading-tight">
                Salaried Hero FinCorp Loan Settlement Path (Debt ≥ ₹3 Lakhs)
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Many salaried borrowers holding a Rs. 1,50,000 or Rs. 3,00,000 Hero FinCorp / SimplyCash loan also carry two credit cards and one or two bank or NBFC personal loans, pushing their total unsecured debt well above ₹4,00,000 to ₹12,00,000. When layoffs, pay cuts, or medical emergencies strike, making isolated partial payments at 60+ or 90+ DPD simply gets swallowed by 3% monthly penal buckets and overdue interest without closing the debt.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                When your <strong>total combined unsecured debt across Hero FinCorp / SimplyCash, credit cards, and bank or NBFC loans is ₹3,00,000 or higher</strong>, SettleLoans builds a consolidated legal exit:
              </p>
              <ul className="space-y-3.5 text-base text-slate-700 list-disc pl-5 mb-6">
                <li>
                  <strong>Stopping Salary-Bank Return Drain Across Multiple Apps:</strong> Protecting household rent and survival cash flow while handling formal creditor communications across all your unsecured lenders simultaneously.
                </li>
                <li>
                  <strong>100% Waiver of Bounce &amp; 36% Penal Buckets at NPA Stage:</strong> Presenting verified job-loss, salary-reduction, or medical documentation post 90+ DPD to Hero FinCorp&apos;s settlement desk to strip out accumulated Rs. 350 bounce fees and 3% monthly penal charges completely alongside a realistic principal haircut (indicatively 42% to 60% of principal depending on case merits; never guaranteed).
                </li>
                <li>
                  <strong>Verified Hero FinCorp Settlement Sanction Letter:</strong> Auditing the official Hero FinCorp Limited letterhead settlement sanction confirming your exact LAN, full-and-final closure amount, payment schedule, and No Dues Certificate timeline before any funds are transferred. Visit our{" "}
                  <Link
                    href="https://www.settleloans.in/hero-fincorp-personal-loan-settlement"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    Hero FinCorp personal loan settlement guide
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
                Hero FinCorp Personal Loan Bounce Charges FAQs
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
                Stop Losing Bank Return &amp; 36% Penal Fees on Hero FinCorp Loans
              </div>
              <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-6">
                Carrying ₹3,00,000 or more across Hero FinCorp / SimplyCash, credit cards, and bank personal loans? Check your confidential salaried settlement plan today.
              </p>
              <a
                href="#settlement-assessment"
                className="inline-block bg-[#1F5EFF] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Evaluate My Settlement Plan
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
              <strong>Disclaimer:</strong> SettleLoans is an independent debt resolution and legal advisory platform and is not affiliated with Hero FinCorp Limited. All tariff figures reflect Hero FinCorp&apos;s published Personal Loan Fees and Charges schedule checked on 11 November 2026 and remain subject to company updates and your Key Fact Statement (KFS).
            </div>
          </article>

          {/* Right Column: Sticky Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-6 text-white border border-white/10 shadow-xl">
                <div className="text-lg font-black mb-2">
                  Hero FinCorp Calculator
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-5">
                  Model Hero FinCorp&apos;s Rs. 350 bounce fee, Rs. 590 salary-bank return fees, and 3% monthly penal charges instantly.
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
                      href="https://www.settleloans.in/hero-fincorp-personal-loan-settlement"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Hero FinCorp Loan Settlement Guide
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
                      href="https://www.settleloans.in/poonawalla-fincorp-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Poonawalla Fincorp Bounce Charges
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
