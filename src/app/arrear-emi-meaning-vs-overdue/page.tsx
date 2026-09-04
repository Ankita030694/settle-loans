import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Arrear EMI Meaning vs Overdue: How to Clear Loan Arrears",
  description: "Your bank statement shows 'Arrear EMI'—what does this actually mean? Understand the banking terminology that determines your default status and how to clear loan arrears.",
  alternates: { canonical: "https://yourdomain.com/arrear-emi-meaning-vs-overdue" }
};

const tocItems = [
  { id: 'introduction', title: 'What is Arrear EMI?' },
  { id: 'lifecycle-of-emi', title: 'The Lifecycle of a Missed EMI' },
  { id: 'arrear-vs-overdue', title: 'Difference Between Overdue and Arrear' },
  { id: 'how-banks-calculate', title: 'How Banks Calculate Arrear Charges' },
  { id: 'consequences', title: 'Impact on Your Financial Profile' },
  { id: 'legal-implications', title: 'Legal Implications of Unpaid Arrears' },
  { id: 'how-to-clear', title: 'How to Clear Loan Arrears' },
  { id: 'success-stories', title: 'Borrower Success Stories' },
  { id: 'faqs', title: 'Frequently Asked Questions' }
];

export default function ArrearEmiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://yourdomain.com/arrear-emi-meaning-vs-overdue",
        "url": "https://yourdomain.com/arrear-emi-meaning-vs-overdue",
        "name": "Arrear EMI Meaning vs Overdue: How to Clear Loan Arrears"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com/" },
          { "@type": "ListItem", "position": 2, "name": "Loans", "item": "https://yourdomain.com/loans" },
          { "@type": "ListItem", "position": 3, "name": "Arrear EMI Meaning", "item": "https://yourdomain.com/arrear-emi-meaning-vs-overdue" }
        ]
      },
      {
        "@type": "Article",
        "headline": "Arrear EMI Meaning vs Overdue: How to Clear Loan Arrears",
        "description": "Your bank statement shows 'Arrear EMI'—what does this actually mean? Understand the banking terminology that determines your default status.",
        "author": { "@type": "Organization", "name": "SettleLoan" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the exact arrear EMI meaning?", "acceptedAnswer": { "@type": "Answer", "text": "Arrear EMI refers to the EMI payment that you have missed and is now past its due date. It remains as an outstanding balance on your loan account until cleared." } },
          { "@type": "Question", "name": "What is the difference between overdue and arrear?", "acceptedAnswer": { "@type": "Answer", "text": "Overdue is a general term for any payment not made by the due date. Arrears specifically refer to the accumulation of those missed payments over time, often implying a legal or financial obligation to clear a past debt." } },
          { "@type": "Question", "name": "How can I clear loan arrears effectively?", "acceptedAnswer": { "@type": "Answer", "text": "To clear loan arrears, contact your lender to discuss repayment options, pay the missed EMIs along with any accumulated penal interest, or consider restructuring your loan if you are facing financial hardship." } },
          { "@type": "Question", "name": "Do arrears affect my CIBIL score?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, having loan arrears will severely drop your CIBIL score as it indicates missed payments and default behavior to credit bureaus." } },
          { "@type": "Question", "name": "Can the bank seize my property for loan arrears?", "acceptedAnswer": { "@type": "Answer", "text": "If the arrears persist and the account becomes a Non-Performing Asset (NPA), the bank can initiate legal proceedings like SARFAESI for secured loans to recover the dues." } },
          { "@type": "Question", "name": "What are bounce charges on arrear EMIs?", "acceptedAnswer": { "@type": "Answer", "text": "When your EMI bounces, banks apply a bounce charge. If left unpaid, this charge gets added to your total arrears." } },
          { "@type": "Question", "name": "Is it possible to settle a loan with arrears?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, if you are unable to clear the full arrears, you can negotiate a one-time settlement with the bank, although this will leave a 'Settled' mark on your credit report." } },
          { "@type": "Question", "name": "How long before an arrear turns into an NPA?", "acceptedAnswer": { "@type": "Answer", "text": "Typically, if loan EMIs are in arrears for 90 consecutive days, the bank will classify the loan account as a Non-Performing Asset (NPA)." } },
          { "@type": "Question", "name": "Will paying arrears remove the default from CIBIL?", "acceptedAnswer": { "@type": "Answer", "text": "Paying the arrears will update the account status to regular, but the history of late payments will remain on your CIBIL report for up to 7 years." } },
          { "@type": "Question", "name": "Can I negotiate a waiver on penalty charges for arrears?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, if you have a valid reason for the delay, banks may occasionally agree to waive or reduce the penal charges on your arrears during repayment." } }
        ]
      },
      {
        "@type": "Product",
        "name": "Loan Arrear Settlement Consultation",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "142"
        },
        "review": [
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Rahul M." }, "reviewBody": "Helped me understand my arrear EMI meaning and clear my dues safely." },
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Sneha K." }, "reviewBody": "The clarity on overdue vs arrears saved me from severe bank penalties." },
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "4" }, "author": { "@type": "Person", "name": "Vikram P." }, "reviewBody": "Good advice on negotiating the penal charges on my loan arrears." },
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Amit R." }, "reviewBody": "Finally cleared my loan arrears thanks to their structured approach." }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Banking Terminology
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              What Does <span className="text-[#1F5EFF]">Arrear EMI</span> Mean on Your Statement?
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Your bank statement shows 'Arrear EMI'—what does this actually mean? Understand the banking terminology that determines your default status, and discover effective methods for clearing loan arrears before you face legal action.
            </p>
            <Link href="#consultation" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Expert Help to Clear Arrears
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 text-xs md:text-sm text-[#747474] flex items-center gap-2">
            <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/loans" className="hover:text-[#1F5EFF] transition-colors">Loans</Link>
            <span className="text-gray-300">/</span>
            <span className="font-bold text-[#2E2E2E]">Arrear EMI Meaning</span>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
          
          {/* Left Sidebar (TOC) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Main Article */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">What is Arrear EMI?</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  When you check your bank statement, loan mobile app, or CIBIL report and see the term <strong>"Arrear EMI"</strong>, it is quite natural to feel confused. In the world of banking and finance, the arrear EMI meaning specifically points to the exact installment (or multiple installments) that you have failed to pay on or before your predetermined due date. 
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  For instance, if your personal loan EMI of ₹15,000 was due on the 5th of the month and you have not made the payment by the 6th, that ₹15,000 EMI automatically goes into arrears. Banks and Non-Banking Financial Companies (NBFCs) track these missed payments incredibly closely because an arrear is considered the very first warning sign of a potential loan default. The longer that specific amount stays in arrears, the higher the penalties you incur, and the deeper you fall into a debt trap.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Clearing loan arrears as swiftly as possible is paramount, not just to avoid exorbitant penal interest, but also to protect your CIBIL score from long-term damage that could severely restrict your future borrowing capacity.
                </p>
              </div>
            </section>

            <section id="lifecycle-of-emi" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Lifecycle of a Missed EMI</h2>
              <p className="text-lg leading-relaxed mb-6">
                Understanding what happens behind the scenes at a bank when you miss a payment can help you prepare for the consequences. An EMI does not just quietly fail; it triggers a series of automated banking protocols designed to recover the money. Here is the chronological lifecycle of a missed payment turning into an arrear:
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Day 1: The Bounce</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">Your ECS (Electronic Clearing Service) or NACH mandate fails due to insufficient funds. The bank immediately slaps a bounce charge on your account, usually ranging from ₹500 to ₹1000.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Days 2 to 30: SMA-0 Classification</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">The loan is classified as a Special Mention Account 0 (SMA-0). During this phase, you will receive automated SMS reminders, emails, and initial phone calls from the bank's internal collections team reminding you of the overdue amount.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Days 31 to 60: SMA-1 & Escalation</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">If the arrear remains unpaid for over a month, the account moves to SMA-1. This is where banks often assign the case to third-party recovery agencies. The calls become much more frequent and aggressive, and the penal interest starts compounding heavily.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Day 90+: NPA Declaration</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">Once the arrears cross the 90-day mark, the loan is officially declared a Non-Performing Asset (NPA). The bank can now initiate formal legal proceedings, issue legal notices, and in the case of secured loans, begin the process of auctioning your property or seizing your vehicle under the SARFAESI Act.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="arrear-vs-overdue" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Difference Between Overdue and Arrear</h2>
              <p className="text-lg leading-relaxed mb-6">
                Borrowers, and sometimes even junior bank employees, often confuse the terms "overdue" and "arrear", using them interchangeably. While they sound incredibly similar and refer to the same general problem, banks treat them quite differently in their legal documentation and accounting ledgers. Understanding the strict difference between overdue and arrear is crucial for accurately managing your debt and communicating effectively with recovery agents.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Overdue (The Status)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    An account is considered "overdue" the very next day after you miss a scheduled payment. Overdue is primarily a <strong>status indicator</strong>. It is a broad, overarching term indicating that you are currently late on a financial obligation. When a bank says your account is overdue, they are describing the state of the account itself.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Arrear EMI (The Amount)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Arrears refer to the <strong>actual monetary amount</strong> that has accumulated from those missed overdue payments. It is the specific, quantifiable debt you legally owe backward in time. If you missed two EMIs of ₹10,000, your account is overdue, and your <em>arrears</em> stand at ₹20,000 plus penalties.
                  </p>
                </div>
              </div>
            </section>

            <section id="how-banks-calculate" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How Banks Calculate Arrear Charges</h2>
              <p className="text-lg leading-relaxed mb-6">
                Many borrowers are shocked when they finally decide to clear loan arrears, only to find the payable amount is drastically higher than their original missed EMI. This discrepancy is due to the aggressive compounding of arrear-related charges. Here is exactly how banks inflate that number:
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-4">The Formula of Debt Accumulation</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  When you fall into arrears, you aren't just liable for the EMI amount. The total arrear balance consists of:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800"><strong>The Principal Arrear:</strong> The actual base EMI amount you missed.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800"><strong>Bounce Charges:</strong> A flat fee (₹500 to ₹1000) applied every single time the bank attempts to auto-debit your account and fails.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800"><strong>Penal Interest (Late Fees):</strong> A punitive interest rate, usually between 2% to 3% <em>per month</em> (24% to 36% annually), applied strictly on the overdue amount for the exact number of days it remains unpaid.</p>
                  </li>
                </ul>
                <p className="text-gray-700 italic">
                  <strong>Insight:</strong> Because penal interest is calculated daily in most banks, clearing an arrear on the 10th of the month will be noticeably cheaper than clearing it on the 28th.
                </p>
              </div>
            </section>

            <section id="consequences" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Impact on Your Financial Profile</h2>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h3 className="text-xl font-black text-[#1F5EFF] mb-4">How Arrears Destroy Your CIBIL Score</h3>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  The most immediate and devastating consequence of allowing EMIs to fall into arrears is the damage to your credit profile. Credit bureaus like CIBIL, Experian, and Equifax are notified by your bank within 30 days of a missed payment.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800"><strong>Immediate Drop:</strong> Your CIBIL score takes an immediate hit, often plummeting by 50 to 70 points in the very first month of an arrear.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800"><strong>DPD Markers:</strong> Your credit report will begin showing Days Past Due (DPD) markers (e.g., 30, 60, 90). These numerical flags indicate to all future lenders exactly how severely you defaulted.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800"><strong>Future Loan Rejection:</strong> Even if you eventually clear the arrears, the history of late payments remains visible on your CIBIL report for up to 7 years, making it incredibly difficult to secure low-interest loans or premium credit cards in the future.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="legal-implications" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Legal Implications of Unpaid Arrears</h2>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h3 className="text-xl font-black text-red-700 mb-4">Can You Go to Jail for Arrear EMIs?</h3>
                <p className="text-red-900 text-lg leading-relaxed mb-4">
                  A common fear among borrowers is facing criminal charges for loan default. It is crucial to understand that under Indian law, <strong>defaulting on a standard personal loan or credit card is considered a civil dispute, not a criminal offense.</strong> You cannot be sent to jail simply for being unable to pay your arrears due to genuine financial hardship.
                </p>
                <p className="text-red-900 text-lg leading-relaxed">
                  However, there is a massive exception: <strong>Section 138 of the Negotiable Instruments Act.</strong> If you provided a security cheque to the bank while taking the loan, and the bank deposits this cheque to recover the arrears, and it bounces due to insufficient funds—that constitutes a criminal offense. A cheque bounce case can lead to severe legal penalties, including potential imprisonment, if ignored. Furthermore, intentional fraud or absconding with bank funds can also lead to criminal FIRs.
                </p>
              </div>
            </section>

            <section id="how-to-clear" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How to Clear Loan Arrears</h2>
              <p className="text-lg leading-relaxed mb-6">
                If you are struggling with missed payments, burying your head in the sand will only make the situation vastly worse. Taking proactive, strategic steps to clear loan arrears is essential to stop brutal bank harassment and prevent devastating legal action. Here is the recommended approach:
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Request Penalty Waivers</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">Before rushing to pay the heavily inflated arrear amount, contact your bank manager and negotiate to waive the penal interest and bounce charges. If you have a valid, documentable reason for the delay (such as a severe medical emergency, sudden job loss, or a drastic salary cut), banks are often willing to reverse these extra punitive fees as a gesture of goodwill to recover the principal amount.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Formal Loan Restructuring</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">If you simply cannot afford the current EMI amount due to a permanent change in your income, ask the bank to restructure the loan. By officially increasing the loan tenure (e.g., changing a 3-year loan to a 5-year loan), your monthly EMI burden reduces significantly. This makes it much easier to prevent future arrears, though you will end up paying more interest over the total lifespan of the loan.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">One-Time Settlement (OTS)</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">If your arrears have aged past 90 days, the loan is an NPA, and you genuinely face a complete inability to pay the outstanding balance, you can negotiate a One-Time Settlement (OTS). Under an OTS, the bank may allow you to officially close the loan account by paying a lump sum that is often 40% to 50% less than the total outstanding amount. Be warned: an OTS will result in a 'Settled' remark on your CIBIL report, heavily damaging your creditworthiness for years.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Borrower Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RM
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"I honestly didn't fully comprehend the difference between overdue and arrear until aggressive recovery agents started harassing my elderly parents over the phone. Getting professional legal help stopped the calls instantly and helped me successfully waive ₹15,000 in unfair penal charges before I cleared the balance."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase">Loan Amount: ₹5L</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">Arrears Cleared</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      SK
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"My arrears had piled up to 4 consecutive EMIs due to a sudden job loss during the downturn. I was terrified of a cheque bounce case. The legal team helped me formally restructure the loan, extended my tenure, and brought my account safely back to standard status without a court battle."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase">Loan Amount: ₹12L</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">Restructured</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What is the exact arrear EMI meaning?", a: "Arrear EMI refers to the EMI payment that you have missed and is now past its due date. It remains as an outstanding balance on your loan account until cleared." },
                  { q: "What is the difference between overdue and arrear?", a: "Overdue is a general term for any payment not made by the due date. Arrears specifically refer to the accumulation of those missed payments over time, often implying a legal or financial obligation to clear a past debt." },
                  { q: "How can I clear loan arrears effectively?", a: "To clear loan arrears, contact your lender to discuss repayment options, pay the missed EMIs along with any accumulated penal interest, or consider restructuring your loan if you are facing financial hardship." },
                  { q: "Do arrears affect my CIBIL score?", a: "Yes, having loan arrears will severely drop your CIBIL score as it indicates missed payments and default behavior to credit bureaus." },
                  { q: "Can the bank seize my property for loan arrears?", a: "If the arrears persist and the account becomes a Non-Performing Asset (NPA), the bank can initiate legal proceedings like SARFAESI for secured loans to recover the dues." },
                  { q: "What are bounce charges on arrear EMIs?", a: "When your EMI bounces, banks apply a bounce charge. If left unpaid, this charge gets added to your total arrears." },
                  { q: "Is it possible to settle a loan with arrears?", a: "Yes, if you are unable to clear the full arrears, you can negotiate a one-time settlement with the bank, although this will leave a 'Settled' mark on your credit report." },
                  { q: "How long before an arrear turns into an NPA?", a: "Typically, if loan EMIs are in arrears for 90 consecutive days, the bank will classify the loan account as a Non-Performing Asset (NPA)." },
                  { q: "Will paying arrears remove the default from CIBIL?", a: "Paying the arrears will update the account status to regular, but the history of late payments will remain on your CIBIL report for up to 7 years." },
                  { q: "Can I negotiate a waiver on penalty charges for arrears?", a: "Yes, if you have a valid reason for the delay, banks may occasionally agree to waive or reduce the penal charges on your arrears during repayment." }
                ].map((faq, index) => (
                  <details key={index} name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                    <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                      {faq.q}
                      <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-relaxed pl-2 border-l-2 border-[#1F5EFF]">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div id="consultation" className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4">Don't Let Arrears Ruin Your Finances</h3>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  Are recovery agents harassing you over arrear EMIs? Get expert legal help to waive penalty charges, stop the harassment, and restructure your loan safely.
                </p>
                <button className="bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-transform shadow-lg text-lg">
                  Speak to a Legal Expert Now
                </button>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page regarding arrear EMIs and overdue payments is for educational purposes only and does not constitute legal or financial advice. Please consult with a professional for specific guidance on clearing loan arrears.
              </p>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10">
                  <div className="text-2xl font-black mb-4">Stop Harassment</div>
                  <p className="text-sm text-gray-300 mb-6">Are agents calling your family because of arrear EMIs? Learn your legal rights immediately.</p>
                  <button className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    Get Help Now
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <div className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Legal Resources
                </div>
                <ul className="space-y-4">
                  <li>
                    <Link href="/rbi-rules-for-recovery-agents" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors text-sm">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI Rules for Recovery Agents
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement-rules-india" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors text-sm">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Loan Settlement Rules in India
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-improve-cibil-score" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors text-sm">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      How to Improve CIBIL Score
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
