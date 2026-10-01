import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import LoanSettlementAssessmentFunnel from "@/components/LoanSettlementAssessmentFunnel";

export const metadata: Metadata = {
  title: "Car Loan Settlement Process in India | SettleLoans",
  description: "Unable to pay your car loan EMI? Settle car loans legally with banks, stop recovery threats, clear NPA dues, and obtain RTO NOC with SettleLoans.",
  alternates: {
    canonical: "https://www.settleloans.in/car-loan-settlement",
  },
  openGraph: {
    title: "Car Loan Settlement Process in India | SettleLoans",
    description: "Unable to pay your car loan EMI? Settle car loans legally with banks, stop recovery threats, clear NPA dues, and obtain RTO NOC with SettleLoans.",
    url: "https://www.settleloans.in/car-loan-settlement",
    type: "article",
    images: [
      {
        url: "https://www.settleloans.in/images/car-loan-settlement.jpg",
        width: 1200,
        height: 630,
        alt: "Car Loan Settlement India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Loan Settlement Process in India | SettleLoans",
    description: "Unable to pay your car loan EMI? Settle car loans legally with banks, stop recovery threats, clear NPA dues, and obtain RTO NOC with SettleLoans.",
    images: ["https://www.settleloans.in/images/car-loan-settlement.jpg"],
  },
};

export default function CarLoanSettlementPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.settleloans.in/car-loan-settlement#article",
        "headline": "Car Loan Settlement Process and Borrower Legal Defense in India",
        "description": "Comprehensive legal and financial guide on car loan settlement in India. Learn about settlement percentages, bank negotiations, and NPA rules.",
        "author": { "@type": "Organization", "name": "SettleLoans" },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": { "@type": "ImageObject", "url": "https://www.settleloans.in/logo.png" }
        },
        "datePublished": "2026-09-30",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.settleloans.in/car-loan-settlement" }
      },
      {
        "@type": "Product",
        "@id": "https://www.settleloans.in/car-loan-settlement#product",
        "name": "Car Loan Settlement Legal Services",
        "description": "Professional debt negotiation and legal defense for borrowers with defaulted car loans from HDFC, SBI, ICICI, Kotak, and major Indian financiers.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1920"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.settleloans.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.settleloans.in/#services" },
          { "@type": "ListItem", "position": 3, "name": "Car Loan Settlement", "item": "https://www.settleloans.in/car-loan-settlement" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can car loans be settled through a one-time settlement (OTS)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, car loans can be settled under a formal One-Time Settlement (OTS). When borrowers face severe financial distress, banks agree to waive accumulated late fees, penal interest, and a portion of principal to achieve full closure."
            }
          },
          {
            "@type": "Question",
            "name": "What percentage do banks accept in car loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Car loan settlements typically close between 40% and 65% of the total outstanding dues. The exact percentage depends on the depreciated market value of the car, default duration, and proven financial hardship."
            }
          },
          {
            "@type": "Question",
            "name": "Car loan settlement kaise kare?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Car loan settlement karne ke liye bank se statement of account lein, recovery calls ke khilaf legal representation appoint karein, financial hardship ke documents submit karein, OTS letter negotiate karein aur payment ke baad RTO NOC lein."
            }
          },
          {
            "@type": "Question",
            "name": "What legal action can banks take against car loan defaulters?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banks can issue demand notices under Section 138 of the Negotiable Instruments Act for cheque bounces, Section 25 of the PSSA Act for NACH/ECS mandate failures, initiate loan arbitration, or file civil recovery suits under Order 37 CPC."
            }
          },
          {
            "@type": "Question",
            "name": "How to settle HDFC Bank car loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To settle an HDFC car loan, approach the regional retail recovery and legal desk with verified income reduction proof, negotiate an OTS waiver on penal charges, and obtain an official bank compromise sanction letter before payment."
            }
          },
          {
            "@type": "Question",
            "name": "What are the car loan NPA rules in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under RBI guidelines, if EMIs remain unpaid for 30 days it is SMA-0, 31-60 days is SMA-1, 61-90 days is SMA-2, and upon reaching 91 days of continuous default, the car loan is officially classified as a Non-Performing Asset (NPA)."
            }
          },
          {
            "@type": "Question",
            "name": "Can I keep my car after settling the car loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. In an OTS settlement where you pay the negotiated lump sum, the bank issues a complete No Dues Certificate (NDC) and RTO Form 35, allowing you to remove the hypothecation from your RC and retain full ownership."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get a used car loan if I am a CIBIL defaulter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While traditional tier-1 banks reject applicants with settled or defaulted status, specialized NBFCs and fintech lenders offer used car loans against higher down payments (30%-40%) or co-borrower guarantees."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if a bank repossesses my car and sells it at a loss?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When auction proceeds do not cover the entire debt, the bank issues a shortfall notice for the balance deficit. You can negotiate a final shortfall settlement to eliminate the remaining liability permanently."
            }
          },
          {
            "@type": "Question",
            "name": "Car loan settlement kitne percent hota hai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aam taur par car loan settlement kul baki rashi ke 40% se 60% ke beech hota hai. Yeh gadi ki age, market value aur borrower ki aarthik sthiti par nirbhar karta hai."
            }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "car-loan-settlement-overview", title: "Car Loan Default Overview" },
    { id: "how-settlement-works", title: "How Settlement Works" },
    { id: "settlement-percentage-matrix", title: "Settlement Percentage Matrix" },
    { id: "bank-npa-classification", title: "NPA Classification Rules" },
    { id: "legal-actions-defenses", title: "Legal Actions & Defenses" },
    { id: "top-lenders-negotiation", title: "Top Bank Negotiations" },
    { id: "rto-noc-hypothecation", title: "RTO NOC & Hypothecation" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const faqs = [
    {
      q: "Can car loans be settled through a one-time settlement (OTS)?",
      a: "Yes, car loans can be settled under a formal One-Time Settlement (OTS). When borrowers face severe financial distress, banks agree to waive accumulated late fees, penal interest, and a portion of principal to achieve full closure."
    },
    {
      q: "What percentage do banks accept in car loan settlement?",
      a: "Car loan settlements typically close between 40% and 65% of the total outstanding dues. The exact percentage depends on the depreciated market value of the car, default duration, and proven financial hardship."
    },
    {
      q: "Car loan settlement kaise kare?",
      a: "Car loan settlement karne ke liye bank se statement of account lein, recovery calls ke khilaf legal representation appoint karein, financial hardship ke documents submit karein, OTS letter negotiate karein aur payment ke baad RTO NOC lein."
    },
    {
      q: "What legal action can banks take against car loan defaulters?",
      a: "Banks can issue demand notices under Section 138 of the Negotiable Instruments Act for cheque bounces, Section 25 of the PSSA Act for NACH/ECS mandate failures, initiate loan arbitration, or file civil recovery suits under Order 37 CPC."
    },
    {
      q: "How to settle HDFC Bank car loan?",
      a: "To settle an HDFC car loan, approach the regional retail recovery and legal desk with verified income reduction proof, negotiate an OTS waiver on penal charges, and obtain an official bank compromise sanction letter before payment."
    },
    {
      q: "What are the car loan NPA rules in India?",
      a: "Under RBI guidelines, if EMIs remain unpaid for 30 days it is SMA-0, 31-60 days is SMA-1, 61-90 days is SMA-2, and upon reaching 91 days of continuous default, the car loan is officially classified as a Non-Performing Asset (NPA)."
    },
    {
      q: "Can I keep my car after settling the car loan?",
      a: "Yes. In an OTS settlement where you pay the negotiated lump sum, the bank issues a complete No Dues Certificate (NDC) and RTO Form 35, allowing you to remove the hypothecation from your RC and retain full ownership."
    },
    {
      q: "Can I get a used car loan if I am a CIBIL defaulter?",
      a: "While traditional tier-1 banks reject applicants with settled or defaulted status, specialized NBFCs and fintech lenders offer used car loans against higher down payments (30%-40%) or co-borrower guarantees."
    },
    {
      q: "What happens if a bank repossesses my car and sells it at a loss?",
      a: "When auction proceeds do not cover the entire debt, the bank issues a shortfall notice for the balance deficit. You can negotiate a final shortfall settlement to eliminate the remaining liability permanently."
    },
    {
      q: "Car loan settlement kitne percent hota hai?",
      a: "Aam taur par car loan settlement kul baki rashi ke 40% se 60% ke beech hota hai. Yeh gadi ki age, market value aur borrower ki aarthik sthiti par nirbhar karta hai."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden text-center">
          <div className="max-w-5xl mx-auto relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Car Debt Resolution
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Car Loan <span className="text-[#1F5EFF]">Settlement Process</span> in India
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Struggling with missed car loan EMIs or aggressive bank recovery? Protect your vehicle, halt legal proceedings, and negotiate a formal One-Time Settlement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Settle Car Loan
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li><Link href="/#services" className="hover:text-[#1F5EFF] transition-colors">Services</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">Car Loan Settlement</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Middle Column: Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

            <section id="car-loan-settlement-overview" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Navigating Car Loan Default in India
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6 font-bold">
                  Financing a passenger car is among the largest financial commitments for Indian families and professionals. When sudden life events like medical emergencies, layoffs, or business losses interrupt EMI cash flows, borrowers face rapid escalation from collection teams.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Car loans are secured by a hypothecation endorsement on the vehicle&apos;s Registration Certificate (RC). Because an identifiable physical asset is attached to the loan, banks act faster than they do with unsecured credit cards. Borrowers often experience intense telecalling, home collection visits, and threatening notices citing court receivership or criminal breach of trust.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  It is essential to understand that non-payment of a car loan EMI is a civil contract dispute, not a criminal act. Indian banking laws and RBI Master Directions provide structured avenues for borrowers facing hardship to resolve the loan through an official One-Time Settlement (OTS).
                </p>
              </div>
            </section>

            <LoanSettlementAssessmentFunnel />

            <section id="how-settlement-works" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                How Car Loan Settlement Works
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  A car loan settlement is a formal compromise between the borrower and the lending institution. When it becomes evident that the borrower cannot sustain the original monthly EMI schedule, the bank agrees to accept a discounted lump sum to close the account permanently.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">What Gets Waived?</h3>
                    <p className="text-sm text-slate-600">Accumulated penal interest, cheque bounce fees, overdue interest surcharges, and a negotiable percentage of the principal balance.</p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                    <h3 className="text-xl font-bold text-[#1F5EFF] mb-2">What Does Borrower Pay?</h3>
                    <p className="text-sm text-slate-700">A mutually negotiated one-time amount (or short installment schedule) that satisfies the bank&apos;s recovery benchmark and terminates the debt.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="settlement-percentage-matrix" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Car Loan Settlement Percentage & Waiver Matrix
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Borrowers commonly ask: <em>&ldquo;Car loan settlement kitne percent hota hai?&rdquo;</em> The accepted percentage depends on vehicle market value, vehicle age, and verified borrower distress:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-slate-300 bg-slate-50">
                        <th className="py-3 px-4 font-bold text-[#2E2E2E]">Vehicle Status & Age</th>
                        <th className="py-3 px-4 font-bold text-[#2E2E2E]">Default Timeline</th>
                        <th className="py-3 px-4 font-bold text-[#2E2E2E]">Waiver Expectation</th>
                        <th className="py-3 px-4 font-bold text-[#2E2E2E]">Average Settlement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="py-3 px-4">New Car (&lt; 2 Years Old)</td>
                        <td className="py-3 px-4">90 - 180 Days</td>
                        <td className="py-3 px-4 font-bold text-blue-600">30% - 40% Waiver</td>
                        <td className="py-3 px-4">60% - 70% of Dues</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Mid-Age Car (2 - 5 Years)</td>
                        <td className="py-3 px-4">180 - 365 Days</td>
                        <td className="py-3 px-4 font-bold text-blue-600">40% - 55% Waiver</td>
                        <td className="py-3 px-4">45% - 60% of Dues</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Older Car (&gt; 5 Years Old)</td>
                        <td className="py-3 px-4">Over 1 Year (Deep NPA)</td>
                        <td className="py-3 px-4 font-bold text-emerald-600">50% - 65% Waiver</td>
                        <td className="py-3 px-4">35% - 50% of Dues</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="bank-npa-classification" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Car Loan NPA Classification Rules (30, 60 & 90 Days)
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Under RBI&apos;s Prudential Framework for Stressed Assets, defaulted car loans progress through four distinct stages:
                </p>
                <div className="space-y-4 text-base text-[var(--color-text-body)]">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <strong className="text-[#1F5EFF]">SMA-0 (1 to 30 Days):</strong> First EMI bounce. The bank charges bounce fees (₹400–₹600) and penal interest. Collection calls are automated reminders.
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <strong className="text-[#1F5EFF]">SMA-1 (31 to 60 Days):</strong> Second consecutive bounce. Account is transferred to field recovery personnel. Written reminder letters are dispatched.
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <strong className="text-[#1F5EFF]">SMA-2 (61 to 90 Days):</strong> Critical risk category. Lenders issue formal legal warning notices threatening repossession and loan acceleration.
                  </div>
                  <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                    <strong className="text-red-900">NPA Classification (91+ Days):</strong> The bank writes off interest accruals and classifies the loan as a Non-Performing Asset. This opens the window for formal OTS compromise.
                  </div>
                </div>
              </div>
            </section>

            <section id="legal-actions-defenses" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Legal Actions by Lenders & Borrower Defenses
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Financiers utilize specific statutory tools against defaulting car loan borrowers:
                </p>
                <ul className="space-y-4 mb-6 text-base text-[var(--color-text-body)]">
                  <li className="flex items-start">
                    <span className="w-2.5 h-2.5 bg-[#1F5EFF] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Section 138 NI Act:</strong> If post-dated security cheques bounce, lenders file criminal complaint notices with a 15-day statutory cure period.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2.5 h-2.5 bg-[#1F5EFF] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Section 25 PSSA Act:</strong> If NACH/e-mandate auto-debits bounce repeatedly, financiers initiate quasi-criminal proceedings under the Payment and Settlement Systems Act.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2.5 h-2.5 bg-[#1F5EFF] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Arbitration Proceedings:</strong> Banks frequently invoke the arbitration clause in your auto loan agreement to seek interim vehicle possession orders.</span>
                  </li>
                </ul>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)]">
                  SettleLoans legal advocates file formal legal replies countering inflated claims, representing you in arbitration hearings, and facilitating mediation toward an amicable compromise.
                </p>
              </div>
            </section>

            <section id="top-lenders-negotiation" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Settling with Top Indian Car Financiers
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-slate-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">HDFC Bank Car Loans</h3>
                    <p className="text-sm text-slate-600">Leading private car financier. We negotiate directly with the regional retail asset recovery cell to resolve Section 138 notices and secure structured OTS waivers.</p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">State Bank of India (SBI)</h3>
                    <p className="text-sm text-slate-600">Handling SBI car loan settlements through the Stressed Assets Recovery Branch (SARB) and National Lok Adalat compromise portals.</p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">ICICI & Axis Bank</h3>
                    <p className="text-sm text-slate-600">Resolving persistent agency follow-ups and arbitration petitions with formal debt compromise sanction letters.</p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Kotak Mahindra & Tata Capital</h3>
                    <p className="text-sm text-slate-600">Specializing in commercial and luxury vehicle debt restructuring, halting yard storage auction notices and releasing hypothecations.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="rto-noc-hypothecation" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                RTO Hypothecation Removal & No Dues Certificate
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Your car loan settlement is complete only when your Registration Certificate reflects you as the sole, unencumbered owner of the vehicle.
                </p>
                <div className="space-y-4 text-base text-[var(--color-text-body)]">
                  <p>
                    <strong>No Dues Certificate (NDC):</strong> The bank issues an authenticated letter certifying that all liabilities under the auto loan have been fully settled and zero balance remains.
                  </p>
                  <p>
                    <strong>Form 35 Submission:</strong> Two signed copies of RTO Form 35 are provided by the lender. You can submit these online on the Parivahan portal or at your local RTO to cancel the hypothecation lien.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    name="faq-accordion"
                    className="group border border-[#DEDEDE] rounded-2xl bg-white overflow-hidden transition-all duration-200"
                  >
                    <summary className="flex justify-between items-center p-6 cursor-pointer text-lg font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span>{faq.q}</span>
                      <span className="ml-4 transform group-open:rotate-180 transition-transform text-[#1F5EFF]">
                        ▼
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-4 font-medium text-base">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Bottom CTA Box */}
            <div className="mt-16 p-8 bg-[#1F5EFF] rounded-3xl text-white text-center">
              <h3 className="text-3xl font-black mb-4">Settle Your Car Loan with SettleLoans</h3>
              <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
                Stop living in fear of car repossession and recovery harassment. Contact our legal settlement experts to negotiate a safe, structured One-Time Settlement.
              </p>
              <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-4 px-10 rounded-xl hover:scale-105 transition-all text-lg shadow-2xl">
                Get Free Car Loan Assessment
              </Link>
            </div>

          </article>

          {/* Right Column: Sticky Widgets */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8">

              {/* CTA Box */}
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                <div className="bg-[#1F5EFF] p-4 text-center">
                  <div className="text-lg font-black text-white px-2">Car Debt Relief</div>
                </div>
                <div className="p-8 text-center">
                  <p className="mb-8 text-sm text-[#DEDEDE] opacity-90 leading-relaxed font-bold">
                    Facing car loan recovery calls, arbitration notices, or NPA default? Get expert legal settlement representation.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-4 rounded-[12px] hover:scale-105 transition-all shadow-md group-hover:shadow-2xl">
                    Settle My Car Loan
                  </Link>
                  <p className="mt-6 text-[10px] text-[#DEDEDE]/60 uppercase tracking-[0.3em] font-black">Authorized Debt Advisors</p>
                </div>
              </div>

              {/* Related Guides */}
              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                <div className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 text-center">Related Vehicle Guides</div>
                <ul className="space-y-4 text-sm font-extrabold px-2">
                  <li>
                    <Link href="/two-wheeler-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                      <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                      Two-Wheeler Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/car-loan-repossession-and-shortfall-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                      <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                      Shortfall Balance Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/vehicle-repossession-laws-india" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                      <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                      Vehicle Repossession Laws
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
