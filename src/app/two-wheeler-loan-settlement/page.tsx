import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import LoanSettlementAssessmentFunnel from "@/components/LoanSettlementAssessmentFunnel";

export const metadata: Metadata = {
  title: "Two-Wheeler & Bike Loan Settlement | SettleLoans",
  description: "Struggling with two-wheeler or bike loan EMI default? Stop recovery harassment, prevent illegal vehicle seizure, and settle dues with SettleLoans.",
  alternates: {
    canonical: "https://www.settleloans.in/two-wheeler-loan-settlement",
  },
  openGraph: {
    title: "Two-Wheeler & Bike Loan Settlement | SettleLoans",
    description: "Struggling with two-wheeler or bike loan EMI default? Stop recovery harassment, prevent illegal vehicle seizure, and settle dues with SettleLoans.",
    url: "https://www.settleloans.in/two-wheeler-loan-settlement",
    type: "article",
    images: [
      {
        url: "https://www.settleloans.in/images/two-wheeler-loan-settlement.jpg",
        width: 1200,
        height: 630,
        alt: "Two-Wheeler & Bike Loan Settlement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Two-Wheeler & Bike Loan Settlement | SettleLoans",
    description: "Struggling with two-wheeler or bike loan EMI default? Stop recovery harassment, prevent illegal vehicle seizure, and settle dues with SettleLoans.",
    images: ["https://www.settleloans.in/images/two-wheeler-loan-settlement.jpg"],
  },
};

export default function TwoWheelerLoanSettlementPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.settleloans.in/two-wheeler-loan-settlement#article",
        "headline": "Two-Wheeler and Bike Loan Settlement Guide in India",
        "description": "Comprehensive legal and financial guide on two-wheeler and bike loan settlement in India. Learn borrower rights against illegal seizure and OTS negotiation.",
        "author": { "@type": "Organization", "name": "SettleLoans" },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": { "@type": "ImageObject", "url": "https://www.settleloans.in/logo.png" }
        },
        "datePublished": "2026-09-30",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.settleloans.in/two-wheeler-loan-settlement" }
      },
      {
        "@type": "Product",
        "@id": "https://www.settleloans.in/two-wheeler-loan-settlement#product",
        "name": "Two-Wheeler & Bike Loan Settlement Advisory",
        "description": "Expert legal and financial advisory to negotiate one-time settlements for defaulted two-wheeler and motorcycle loans, stop field harassment, and clear hypothecation.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1420"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.settleloans.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.settleloans.in/#services" },
          { "@type": "ListItem", "position": 3, "name": "Two-Wheeler Loan Settlement", "item": "https://www.settleloans.in/two-wheeler-loan-settlement" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can bike loan be settled through one-time settlement (OTS)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, two-wheeler and bike loans can be settled under a formal One-Time Settlement (OTS) when the borrower faces genuine financial distress. NBFCs and banks agree to waive penal charges and accumulated interest against a negotiated lump sum."
            }
          },
          {
            "@type": "Question",
            "name": "Can recovery agents seize my bike on the road without prior notice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Supreme Court rulings (ICICI Bank v. Prakash Kaur) and RBI guidelines, forceful snatching of bikes on roads by third-party recovery agents is strictly illegal. Lenders must issue formal default notices and obtain authorization before any lawful repossession."
            }
          },
          {
            "@type": "Question",
            "name": "How to settle L&T Finance two-wheeler loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To settle an L&T Finance bike loan, request a statement of account, verify genuine principal versus penal interest, submit a formal hardship application, negotiate OTS terms, and obtain an official settlement letter before paying."
            }
          },
          {
            "@type": "Question",
            "name": "What percentage of loan amount is accepted in bike loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bike loan settlements generally close between 40% and 65% of the total outstanding dues, depending on vehicle age, depreciation, loan tenure elapsed, and proven borrower financial distress."
            }
          },
          {
            "@type": "Question",
            "name": "How do I remove hypothecation from RC after bike loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Upon full settlement payment, obtain a No Dues Certificate (NDC) and RTO Form 35 from the financier. Submit Form 35 with the original Registration Certificate (RC) to your local RTO or online via the Parivahan portal to cancel hypothecation."
            }
          },
          {
            "@type": "Question",
            "name": "Bike loan settlement kaise kare?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bike loan settlement karne ke liye pehle bank ya NBFC se loan statement lein. Recovery harassment ke khilaf legal shield lein, apni financial hardship prove karein, OTS offer negotiate karein aur official settlement letter milne ke baad hi payment karein."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I stop paying bike loan EMIs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non-payment leads to EMI bounce charges, field recovery visits, and negative CIBIL reporting. However, lenders cannot use physical coercion, and borrowers can legally resolve the default through loan restructuring or one-time settlement."
            }
          },
          {
            "@type": "Question",
            "name": "Can Bajaj Auto Finance recovery agents take away my motorcycle?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Agents cannot seize your vehicle without proper ID cards, lender authorization letter, and statutory notice. Any intimidation or force constitutes criminal trespass under Indian law."
            }
          },
          {
            "@type": "Question",
            "name": "Will bike loan settlement affect my CIBIL score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Settling a bike loan records the account as 'Settled' rather than 'Closed', which temporarily impacts your credit score. However, this stops legal proceedings, ends field harassment, and allows you to rebuild credit responsibly."
            }
          },
          {
            "@type": "Question",
            "name": "How to verify if a bike loan settlement letter is genuine?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Always ensure the letter is printed on official lender letterhead, mentions your exact loan account number, states the agreed settlement amount with due date, and explicitly confirms full and final closure upon receipt."
            }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "two-wheeler-settlement-overview", title: "Two-Wheeler Debt Reality" },
    { id: "can-bike-loans-be-settled", title: "Can Bike Loans Be Settled?" },
    { id: "borrower-rights-against-seizure", title: "Rights Against Bike Seizure" },
    { id: "major-bike-financiers", title: "Major Two-Wheeler Lenders" },
    { id: "step-by-step-process", title: "Step-by-Step Settlement" },
    { id: "settlement-calculator-waivers", title: "Expected Waiver Percentages" },
    { id: "rto-hypothecation-form-35", title: "Form 35 & RC Hypothecation" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const faqs = [
    {
      q: "Can bike loan be settled through one-time settlement (OTS)?",
      a: "Yes, two-wheeler and bike loans can be settled under a formal One-Time Settlement (OTS) when the borrower faces genuine financial distress. NBFCs and banks agree to waive penal charges and accumulated interest against a negotiated lump sum."
    },
    {
      q: "Can recovery agents seize my bike on the road without prior notice?",
      a: "No. Under Supreme Court rulings (ICICI Bank v. Prakash Kaur) and RBI guidelines, forceful snatching of bikes on roads by third-party recovery agents is strictly illegal. Lenders must issue formal default notices and obtain authorization before any lawful repossession."
    },
    {
      q: "How to settle L&T Finance two-wheeler loan?",
      a: "To settle an L&T Finance bike loan, request a statement of account, verify genuine principal versus penal interest, submit a formal hardship application, negotiate OTS terms, and obtain an official settlement letter before paying."
    },
    {
      q: "What percentage of loan amount is accepted in bike loan settlement?",
      a: "Bike loan settlements generally close between 40% and 65% of the total outstanding dues, depending on vehicle age, depreciation, loan tenure elapsed, and proven borrower financial distress."
    },
    {
      q: "How do I remove hypothecation from RC after bike loan settlement?",
      a: "Upon full settlement payment, obtain a No Dues Certificate (NDC) and RTO Form 35 from the financier. Submit Form 35 with the original Registration Certificate (RC) to your local RTO or online via the Parivahan portal to cancel hypothecation."
    },
    {
      q: "Bike loan settlement kaise kare?",
      a: "Bike loan settlement karne ke liye pehle bank ya NBFC se loan statement lein. Recovery harassment ke khilaf legal shield lein, apni financial hardship prove karein, OTS offer negotiate karein aur official settlement letter milne ke baad hi payment karein."
    },
    {
      q: "What happens if I stop paying bike loan EMIs?",
      a: "Non-payment leads to EMI bounce charges, field recovery visits, and negative CIBIL reporting. However, lenders cannot use physical coercion, and borrowers can legally resolve the default through loan restructuring or one-time settlement."
    },
    {
      q: "Can Bajaj Auto Finance recovery agents take away my motorcycle?",
      a: "Agents cannot seize your vehicle without proper ID cards, lender authorization letter, and statutory notice. Any intimidation or force constitutes criminal trespass under Indian law."
    },
    {
      q: "Will bike loan settlement affect my CIBIL score?",
      a: "Settling a bike loan records the account as 'Settled' rather than 'Closed', which temporarily impacts your credit score. However, this stops legal proceedings, ends field harassment, and allows you to rebuild credit responsibly."
    },
    {
      q: "How to verify if a bike loan settlement letter is genuine?",
      a: "Always ensure the letter is printed on official lender letterhead, mentions your exact loan account number, states the agreed settlement amount with due date, and explicitly confirms full and final closure upon receipt."
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
              Two-Wheeler Debt Relief
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Two-Wheeler & <span className="text-[#1F5EFF]">Bike Loan Settlement</span> Guide
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Facing aggressive recovery agents or unable to pay bike loan EMIs? Protect your legal rights, stop on-road seizure, and settle dues with SettleLoans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Resolve Bike Loan Dues
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
                <li className="font-bold text-[#2E2E2E]" aria-current="page">Two-Wheeler Loan Settlement</li>
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

            <section id="two-wheeler-settlement-overview" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Reality of Two-Wheeler Debt in India
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6 font-bold">
                  Two-wheeler and motorcycle loans represent the backbone of daily personal mobility and gig-economy livelihood across Indian towns and metropolitan cities. Yet, when economic emergencies strike, two-wheeler defaults trigger some of the most aggressive recovery tactics seen in retail financing.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Unlike corporate or large mortgage loans, two-wheeler financing ticket sizes typically range between ₹35,000 and ₹2,50,000. Because financiers know the vehicle is crucial for the borrower&apos;s daily routine or livelihood (such as food delivery, freelance sales, or daily office commute), field collection teams rely on intimidation, public humiliation, and threats of spot vehicle confiscation to compel immediate payment.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Borrowers facing financial distress frequently do not know that Indian law and Reserve Bank of India (RBI) regulations strictly forbid coercive recovery practices. You have the statutory right to request a One-Time Settlement (OTS) and secure a formal closure without losing your dignity or peace of mind.
                </p>
              </div>
            </section>

            <LoanSettlementAssessmentFunnel />

            <section id="can-bike-loans-be-settled" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Can Bike Loans Be Settled Legally?
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Many borrowers ask: <em>&ldquo;Kya bike loan settlement hota hai?&rdquo;</em> The answer is unequivocally <strong>yes</strong>. Both commercial banks and leading Non-Banking Financial Companies (NBFCs) have established internal OTS compromise frameworks for stressed two-wheeler loans.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  When an account defaults beyond 90 days, it is classified as a Non-Performing Asset (NPA). At this stage, maintaining legal suits, engaging recovery vendors, and keeping non-accrual bad debt on the balance sheet costs the lender more than accepting a reasonable settlement. A mutual compromise allows the financier to recover the base capital while granting the borrower complete relief from mounting interest penalties.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Regular Loan Closure</h3>
                    <p className="text-sm text-slate-600">Borrower pays 100% of remaining principal, regular interest, plus foreclosure charges. Results in a clean &lsquo;Closed&rsquo; CIBIL status.</p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                    <h3 className="text-xl font-bold text-[#1F5EFF] mb-2">One-Time Settlement (OTS)</h3>
                    <p className="text-sm text-slate-700">Lender waives 40% to 65% of total claims (penal interest, overdue fees). Account is marked as &lsquo;Settled&rsquo; with zero balance owed.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="borrower-rights-against-seizure" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Borrower Rights Against Illegal Bike Seizure
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Recovery agents often threaten to seize the bike directly from public roads, parking lots, or borrower workplaces. Every borrower should know their statutory protections:
                </p>
                <ul className="space-y-4 mb-6 text-base text-[var(--color-text-body)]">
                  <li className="flex items-start">
                    <span className="w-2.5 h-2.5 bg-[#1F5EFF] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Supreme Court Mandate (ICICI Bank v. Prakash Kaur):</strong> The Apex Court held that banks and financial institutions cannot employ musclemen or goons to forcibly take possession of hypothecated vehicles. Doing so amounts to criminal trespass and robbery.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2.5 h-2.5 bg-[#1F5EFF] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Mandatory 60-Day Notice:</strong> Financiers must serve formal written default notices affording reasonable cure periods before initiating repossession proceedings.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2.5 h-2.5 bg-[#1F5EFF] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Strict Visit Hours:</strong> Collection personnel may only contact or visit borrowers between 8:00 AM and 7:00 PM, maintaining professional decorum at all times.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2.5 h-2.5 bg-[#1F5EFF] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Valid Identification Required:</strong> Any agent approaching a borrower must carry official lender authorization letters and an active Bank Employee/DRA certificate.</span>
                  </li>
                </ul>
                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
                  <p className="text-sm font-semibold text-amber-900">
                    If recovery agents stop you on the road or attempt to forcibly seize your two-wheeler, dial 112 immediately to report illegal vehicle interception and criminal harassment.
                  </p>
                </div>
              </div>
            </section>

            <section id="major-bike-financiers" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Major Two-Wheeler Financiers We Settle With
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  SettleLoans provides specialized legal representation and compromise negotiations across all major Indian two-wheeler financiers:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-slate-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">L&T Finance Two-Wheeler</h3>
                    <p className="text-sm text-slate-600 mb-2">One of India&apos;s largest rural and semi-urban bike financiers. We help resolve persistent legal notices, telecalling pressure, and finalize official OTS letters.</p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Bajaj Auto Finance</h3>
                    <p className="text-sm text-slate-600 mb-2">Handling Pulsar, Avenger, and Chetak defaults. We neutralize field recovery visits and secure structured waivers on overdue interest balances.</p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">TVS Credit Two-Wheeler</h3>
                    <p className="text-sm text-slate-600 mb-2">Specializing in Jupiter, Apache, and Raider loan resolutions. We ensure genuine principal assessment and formal NDC certificate issuance.</p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Hero FinCorp & HDFC Bank</h3>
                    <p className="text-sm text-slate-600 mb-2">Resolving Splendor, HF Deluxe, and premium motorcycle financing with formal bank compromise committees to prevent arbitration suits.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="step-by-step-process" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Step-by-Step Two-Wheeler Settlement Process
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <ol className="space-y-6 text-base text-[var(--color-text-body)]">
                  <li className="flex items-start">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <h3 className="text-lg font-bold text-[#2E2E2E] mb-1">Financial & Account Audit</h3>
                      <p className="text-sm text-slate-600">We analyze your loan account statement to separate real principal borrowed from inflated late fees, bounce charges, and arbitrary penal interest.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <h3 className="text-lg font-bold text-[#2E2E2E] mb-1">Legal Shield & Communication Transfer</h3>
                      <p className="text-sm text-slate-600">A formal legal representation notice is issued to the lender, directing all collection communications to your legal advisors and halting agent home visits.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <h3 className="text-lg font-bold text-[#2E2E2E] mb-1">Hardship Proof & OTS Negotiation</h3>
                      <p className="text-sm text-slate-600">We present verified proof of financial hardship (such as medical records, salary cuts, or job loss) to negotiate maximum waiver concessions.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0 mt-0.5">4</span>
                    <div>
                      <h3 className="text-lg font-bold text-[#2E2E2E] mb-1">Settlement Letter Verification</h3>
                      <p className="text-sm text-slate-600">We verify the authentic settlement letter issued on the financier&apos;s official letterhead before any money is paid, ensuring complete security against fraudulent agent claims.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0 mt-0.5">5</span>
                    <div>
                      <h3 className="text-lg font-bold text-[#2E2E2E] mb-1">Account Closure & RTO Hypothecation Release</h3>
                      <p className="text-sm text-slate-600">Upon payment, the financier issues a No Dues Certificate (NDC) and RTO Form 35 to enable cancellation of the bank hypothecation on your Registration Certificate (RC).</p>
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            <section id="settlement-calculator-waivers" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Expected Bike Settlement Waiver Percentages
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Settlement figures are determined by vehicle market depreciation, loan default duration, and proven hardship. Typical waiver benchmarks include:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-slate-300 bg-slate-50">
                        <th className="py-3 px-4 font-bold text-[#2E2E2E]">Default Period</th>
                        <th className="py-3 px-4 font-bold text-[#2E2E2E]">Vehicle Age</th>
                        <th className="py-3 px-4 font-bold text-[#2E2E2E]">Typical Waiver Range</th>
                        <th className="py-3 px-4 font-bold text-[#2E2E2E]">Expected Settlement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="py-3 px-4">90 - 180 Days (Early NPA)</td>
                        <td className="py-3 px-4">Under 1 Year</td>
                        <td className="py-3 px-4 font-bold text-blue-600">35% - 45% Waiver</td>
                        <td className="py-3 px-4">55% - 65% of Outstanding</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">180 - 365 Days</td>
                        <td className="py-3 px-4">1 to 3 Years</td>
                        <td className="py-3 px-4 font-bold text-blue-600">45% - 55% Waiver</td>
                        <td className="py-3 px-4">45% - 55% of Outstanding</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Over 1 Year (Deep Default)</td>
                        <td className="py-3 px-4">3+ Years</td>
                        <td className="py-3 px-4 font-bold text-emerald-600">55% - 65% Waiver</td>
                        <td className="py-3 px-4">35% - 45% of Outstanding</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="rto-hypothecation-form-35" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Form 35 & RC Hypothecation Removal
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  A bike loan settlement is incomplete until the financier&apos;s hypothecation lien is legally removed from your Registration Certificate (RC) at the Regional Transport Office (RTO).
                </p>
                <div className="space-y-4 text-base text-[var(--color-text-body)]">
                  <p>
                    <strong>Form 35:</strong> This is the statutory RTO application for Notice of Termination of an Agreement of Hire-Purchase/Lease/Hypothecation under Rule 61(1) of the Central Motor Vehicles Rules.
                  </p>
                  <p>
                    <strong>Clearance Procedure:</strong> Once your settlement funds clear, the financier signs two duplicate copies of Form 35 and provides a No Objection Certificate (NOC). You can submit these online through the Parivahan Sewa portal or physically at your RTO along with the original RC and a nominal fee (usually ₹100 to ₹300) to receive an updated, clean RC.
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
              <h3 className="text-3xl font-black mb-4">Settle Your Two-Wheeler Loan Today</h3>
              <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
                Stop illegal bike seizure threats and constant collection calls. Let SettleLoans negotiate a fair, legal One-Time Settlement on your behalf.
              </p>
              <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-4 px-10 rounded-xl hover:scale-105 transition-all text-lg shadow-2xl">
                Get Free Settlement Consultation
              </Link>
            </div>

          </article>

          {/* Right Column: Sticky Widgets */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8">

              {/* CTA Box */}
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                <div className="bg-[#1F5EFF] p-4 text-center">
                  <div className="text-lg font-black text-white px-2">Bike Loan Legal Shield</div>
                </div>
                <div className="p-8 text-center">
                  <p className="mb-8 text-sm text-[#DEDEDE] opacity-90 leading-relaxed font-bold">
                    Facing bike recovery harassment or spot seizure threats? Get immediate legal defense and structured OTS negotiation.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-4 rounded-[12px] hover:scale-105 transition-all shadow-md group-hover:shadow-2xl">
                    Protect My Bike Now
                  </Link>
                  <p className="mt-6 text-[10px] text-[#DEDEDE]/60 uppercase tracking-[0.3em] font-black">RBI Compliant Legal Relief</p>
                </div>
              </div>

              {/* Related Guides */}
              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                <div className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 text-center">Related Vehicle Guides</div>
                <ul className="space-y-4 text-sm font-extrabold px-2">
                  <li>
                    <Link href="/recovery-agents-snatching-bike-on-road-illegal-repo" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                      <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                      Illegal Bike Snatching Rules
                    </Link>
                  </li>
                  <li>
                    <Link href="/car-loan-repossession-and-shortfall-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                      <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                      Car Loan Shortfall Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/vehicle-seizure-overdue-loan-documents-repo-agent-rules" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                      <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                      Repo Agent Verification Rules
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
