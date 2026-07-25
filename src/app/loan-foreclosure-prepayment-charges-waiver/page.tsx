import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Loan Foreclosure and Prepayment Charges Waiver Guide",
  description: "Don't pay the 4% foreclosure penalty! Discover the negotiation tactics you can use to get the branch manager to waive your pre-closure charges.",
  alternates: {
    canonical: "https://example.com/loan-foreclosure-prepayment-charges-waiver",
  },
};

const tocItems = [
  { id: 'introduction', title: 'Why Banks Charge Prepayment Penalties' },
  { id: 'rbi-guidelines', title: 'RBI Waiver on Prepayment' },
  { id: 'calculating-savings', title: 'Calculating True Foreclosure Savings' },
  { id: 'document-checklist', title: 'Document Checklist for a Waiver' },
  { id: 'negotiation-tactics', title: 'How to Negotiate a Waiver' },
  { id: 'escalation-matrix', title: 'Banking Ombudsman Escalation Matrix' },
  { id: 'success-stories', title: 'Successful Waiver Stories' },
  { id: 'faqs', title: 'Frequently Asked Questions' },
];

export default function LoanForeclosureWaiverPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://example.com/loan-foreclosure-prepayment-charges-waiver/#webpage",
        "url": "https://example.com/loan-foreclosure-prepayment-charges-waiver",
        "name": "Loan Foreclosure and Prepayment Charges Waiver",
        "description": "Don't pay the 4% foreclosure penalty! Discover the negotiation tactics you can use to get the branch manager to waive your pre-closure charges."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/" },
          { "@type": "ListItem", "position": 2, "name": "Loan Guides", "item": "https://example.com/guides" },
          { "@type": "ListItem", "position": 3, "name": "Loan Foreclosure Waiver", "item": "https://example.com/loan-foreclosure-prepayment-charges-waiver" }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://example.com/loan-foreclosure-prepayment-charges-waiver/#article",
        "headline": "Loan Foreclosure and Prepayment Charges Waiver: Negotiation Guide",
        "description": "Learn how to waive foreclosure charges and negotiate your loan pre-closure penalty using RBI guidelines and proven tactics.",
        "author": { "@type": "Organization", "name": "SettleLoan" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How to waive foreclosure charges on a personal loan?", "acceptedAnswer": { "@type": "Answer", "text": "To waive foreclosure charges on a personal loan, check if your loan is on a floating interest rate (which RBI exempts from penalties) or negotiate directly with your branch manager citing your excellent repayment history." } },
          { "@type": "Question", "name": "What is the RBI waiver on prepayment?", "acceptedAnswer": { "@type": "Answer", "text": "The RBI has mandated that banks and NBFCs cannot charge foreclosure or pre-payment penalties on any floating rate term loans sanctioned to individual borrowers." } },
          { "@type": "Question", "name": "How can I negotiate a loan pre-closure penalty for a fixed rate loan?", "acceptedAnswer": { "@type": "Answer", "text": "For fixed-rate loans, you can negotiate by offering a partial payment first, leveraging a balance transfer offer from a competitor, or appealing to the grievance redressal officer for a one-time waiver." } },
          { "@type": "Question", "name": "Are there foreclosure charges on home loans?", "acceptedAnswer": { "@type": "Answer", "text": "No, per RBI guidelines, individual borrowers with floating rate home loans are entirely exempt from prepayment and foreclosure charges." } },
          { "@type": "Question", "name": "Can NBFCs charge pre-closure penalties?", "acceptedAnswer": { "@type": "Answer", "text": "NBFCs cannot charge pre-closure penalties on floating-rate loans for individuals. However, they can levy these charges on fixed-rate loans or loans given to businesses." } },
          { "@type": "Question", "name": "What is the typical foreclosure penalty percentage?", "acceptedAnswer": { "@type": "Answer", "text": "If applicable (such as on fixed-rate or business loans), foreclosure penalties typically range between 2% to 5% of the outstanding principal amount, plus 18% GST." } },
          { "@type": "Question", "name": "Does a balance transfer help waive foreclosure charges?", "acceptedAnswer": { "@type": "Answer", "text": "A balance transfer doesn't legally 'waive' the old bank's charges, but the new bank taking over your loan might offer cashback or absorb the penalty cost to win your business." } },
          { "@type": "Question", "name": "Can I get a waiver if I pay off my loan from my own savings?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Banks are much more likely to waive charges if they know the foreclosure is funded from your own savings rather than by borrowing from a competitor." } },
          { "@type": "Question", "name": "How long does a bank take to process a foreclosure request?", "acceptedAnswer": { "@type": "Answer", "text": "A foreclosure request typically takes 7 to 15 working days to process, after which you should receive your No Objection Certificate (NOC) and any original collateral documents." } },
          { "@type": "Question", "name": "What should I do if the bank refuses to waive illegal foreclosure charges?", "acceptedAnswer": { "@type": "Answer", "text": "If a bank applies charges against RBI guidelines (e.g., on a floating rate individual loan), escalate the matter to the Banking Ombudsman or hire legal help to send a formal notice." } }
        ]
      },
      {
        "@type": "Product",
        "name": "Loan Foreclosure Negotiation Services",
        "description": "Expert assistance to help you waive foreclosure charges and negotiate loan pre-closure penalties.",
        "brand": { "@type": "Brand", "name": "SettleLoan" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "194"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "author": { "@type": "Person", "name": "Amit K." },
            "reviewBody": "They helped me waive the 4% penalty on my business loan. Fantastic service!"
          },
          {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "author": { "@type": "Person", "name": "Sneha R." },
            "reviewBody": "My bank was illegally charging me on a floating rate loan. One legal notice from SettleLoan and the charges vanished."
          },
          {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": "4" },
            "author": { "@type": "Person", "name": "Rahul M." },
            "reviewBody": "Saved thousands on my personal loan pre-closure penalty. Highly recommend their negotiation tactics."
          },
          {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "author": { "@type": "Person", "name": "Neha P." },
            "reviewBody": "The branch manager refused to listen to me, but the lawyers got the penalty reduced to zero within a week."
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main 
        className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" 
        style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
      >
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Prepayment Secrets
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Loan Foreclosure & <span className="text-[#1F5EFF]">Waiver Guide</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Don't pay the 4% foreclosure penalty! Discover the negotiation tactics you can use to get the branch manager to waive your pre-closure charges.
            </p>
            <Link href="#lead-gen" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Your Waiver Now
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF]">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/loans" className="hover:text-[#1F5EFF]">Loans</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Foreclosure Charges Waiver</span>
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
          
          {/* Left Sidebar: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] sticky top-24 h-fit">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Middle Column: Main Article */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Boxed Intro */}
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">Why Banks Charge Prepayment Penalties</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  When you take a loan, the bank expects to earn a specific amount of interest over the tenure of the loan. If you decide to pay off the loan early—a process known as foreclosure—the bank loses out on that anticipated interest income.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  To compensate for this loss, banks slap on a <strong>pre-closure penalty</strong>, typically ranging from 2% to 5% of the outstanding principal. But here is the secret they don't want you to know: you don't always have to pay it. Knowing exactly <strong>how to waive foreclosure charges</strong> can save you lakhs of rupees.
                </p>
              </div>
            </section>

            {/* Blue Important Box */}
            <section id="rbi-guidelines" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">RBI Waiver on Prepayment</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                The most powerful tool in your arsenal is the Reserve Bank of India (RBI). Over the past few years, the RBI has heavily regulated how and when banks can charge you for paying off your own debt.
              </p>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The Golden Rule of RBI Prepayment</h4>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">According to RBI circulars, banks and NBFCs are strictly prohibited from charging foreclosure penalties under the following conditions:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Floating Rate Loans:</strong> Any loan sanctioned to an individual borrower on a floating interest rate carries zero foreclosure charges.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Individual Borrowers:</strong> The loan must be in the name of an individual, not a business entity (like a Pvt Ltd company or a partnership firm).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Home Loans:</strong> Regardless of whether it's fixed or floating, if the foreclosure is paid from your own sources (not borrowed from another bank), penalties are often waived.</span>
                  </li>
                </ul>
              </div>

              {/* 4-Grid Info Boxes */}
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Check Your Loan Type</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">Is your loan fixed or floating? The rules differ wildly depending on this single factor in your sanction letter.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Review the Lock-in Period</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">Even if fees are waived, a 6 to 12-month lock-in period may completely block you from foreclosing.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Source of Funds</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">Are you paying from savings or taking a new loan? Banks hate losing you to competitors and will charge accordingly.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">The GST Trap</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">If you do pay a penalty, expect an 18% GST on top of that fee. Always negotiate the base penalty first.</p>
                </div>
              </div>
            </section>

            {/* New Section: Calculating Savings */}
            <section id="calculating-savings" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Calculating Your True Foreclosure Savings</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Before you go to war with your branch manager over a waiver, it is critical to mathematically verify that foreclosing the loan is actually in your best financial interest. Many borrowers blindly push for foreclosure without realizing that if they are in the final stages of their loan tenure, they might not save much at all.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Because of how EMIs are structured (front-loaded with interest), by the time you reach the last few years of a 5-year or 10-year loan, your monthly payments are almost entirely going toward the principal. If you foreclose at this late stage, the interest you save might be minimal. If the bank refuses to waive a 4% penalty, the penalty amount might actually exceed the total remaining interest you would have paid by just continuing the EMIs! 
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                To calculate your true savings, you must request an updated amortization schedule from your bank. Subtract your outstanding principal from the total sum of your remaining EMIs. This number is your "Gross Interest Savings." Then, calculate the bank's demanded penalty (e.g., 4% of the principal + 18% GST). If your Gross Interest Savings is substantially larger than the penalty, foreclosure makes sense. If it's smaller, you are losing money by foreclosing. This mathematical reality is exactly why negotiating a complete waiver is so crucial—it ensures your foreclosure always results in a net positive return.
              </p>
            </section>

            {/* New Section: Document Checklist */}
            <section id="document-checklist" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Document Checklist for a Waiver Request</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Walking into a bank branch and verbally demanding a waiver rarely works. Bank managers are bound by internal audit rules, and they need a solid paper trail to justify waiving a penalty that their system has automatically generated. You need to build a compelling documentary case.
              </p>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-black text-[#2E2E2E] mb-4">The Essentials to Carry</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>The Original Sanction Letter:</strong> Highlight the clauses detailing prepayment terms. If the agent promised zero charges, look for any annexure supporting this.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Proof of Own Funds:</strong> Banks are more likely to waive charges if you aren't refinancing. Bring 6 months of bank statements showing the accumulation of savings that you intend to use for the foreclosure.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>RBI Master Circular Printout:</strong> If you are on a floating rate loan, print out the latest RBI circular explicitly stating that floating rate loans to individuals attract zero foreclosure charges. Presenting this physically shuts down false arguments from bank staff immediately.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>A Formal Written Request:</strong> Do not rely on verbal requests. Submit a formally drafted letter requesting the waiver, citing your flawless repayment history, and demand a stamped acknowledgment copy from the branch.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Numbered Steps */}
            <section id="negotiation-tactics" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How to Negotiate a Waiver</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                If you have a fixed-rate loan or a business loan, the RBI waiver might not automatically apply to you. However, you can still <strong>negotiate your loan pre-closure penalty</strong> using these steps.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Use the "Own Savings" Approach</h3>
                    <p className="text-lg leading-relaxed text-gray-700">Branch managers have discretionary power to waive fees. Provide bank statements showing you are paying off the loan from your own savings. Banks are far more accommodating when they know you aren't leaving them for a competitor.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Leverage a Balance Transfer (BT)</h3>
                    <p className="text-lg leading-relaxed text-gray-700">If you are moving to a new bank, tell your current manager you will stay if they drop the interest rate and waive future fees. If they refuse, negotiate with the <em>new</em> bank to give you cashback to cover the old bank's foreclosure charges.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Escalate to Grievance Redressal</h3>
                    <p className="text-lg leading-relaxed text-gray-700">If the branch manager denies your written request, escalate it to the Nodal Officer. Cite a long-standing relationship with the bank and a flawless repayment history as your primary reasons for a waiver.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* New Section: Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Banking Ombudsman Escalation Matrix</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                When internal negotiations fail, and the branch manager refuses to budge despite clear RBI guidelines, you must use the escalation matrix. The RBI has designed this matrix specifically to protect consumers from arbitrary banking charges.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                <strong>Step 1: The Nodal Officer.</strong> Every bank has a designated Nodal Officer for grievance redressal. You must first escalate your rejected waiver request to them via email. They have 30 days to resolve the issue. If they reject your request, or fail to reply within 30 days, you unlock the right to proceed to the next step.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                <strong>Step 2: The Banking Ombudsman.</strong> File a complaint on the RBI's Integrated Ombudsman Scheme (CMS) portal. Attach your original loan agreement, your written waiver request, the branch's refusal, and the lack of resolution from the Nodal Officer. The Ombudsman acts as a fast-track consumer court for banking disputes.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Because banks face intense regulatory scrutiny and potential fines when cases reach the Ombudsman, their central legal teams often intercept these complaints. In many cases, you will receive a call from the bank's head office offering to "make an exception" and waive your pre-closure penalty entirely, just to get you to withdraw the Ombudsman complaint. It is a highly effective, free legal remedy for borrowers.
              </p>
            </section>

            {/* Gray Insight Box */}
            <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
              <h4 className="text-xl font-black text-[#2E2E2E] mb-4">Legal Insight</h4>
              <p className="text-lg leading-relaxed text-gray-700">If your bank charges a penalty on a floating rate individual loan in direct violation of RBI guidelines, you don't need to beg for a waiver. You can file a direct complaint with the Banking Ombudsman for illegal fee extraction.</p>
            </div>

            {/* Red Warning Box */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
              <h4 className="text-xl font-black text-red-700 mb-4">Warning: Get Everything in Writing</h4>
              <p className="text-lg leading-relaxed text-red-900">Never accept a verbal promise from a sales agent that "foreclosure charges will be waived after 6 months." If it is not explicitly written in your Sanction Letter, the bank will charge you.</p>
            </div>

            {/* Review / Success Stories */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Successful Waiver Stories</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">Here is how we helped borrowers beat the banks at their own game and secure massive fee waivers.</p>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      AM
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Amit K., Business Owner</h4>
                      <div className="flex gap-1 text-yellow-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg mb-6">"The bank refused to waive the 4% penalty on my business loan. After SettleLoan sent a legally drafted escalation to the regional head, the entire penalty was dropped."</p>
                  <div className="flex gap-4">
                    <span className="py-1 px-3 rounded-full bg-red-100 text-red-700 text-sm font-bold">Penalty Asked: ₹1.2L</span>
                    <span className="py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-bold">Paid: ₹0</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      SR
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Sneha R., IT Professional</h4>
                      <div className="flex gap-1 text-yellow-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg mb-6">"My NBFC tried to charge me a 3% pre-closure fee on a floating personal loan. SettleLoan pointed out the RBI circular violation, and the NBFC backed down immediately."</p>
                  <div className="flex gap-4">
                    <span className="py-1 px-3 rounded-full bg-red-100 text-red-700 text-sm font-bold">Penalty Asked: ₹45k</span>
                    <span className="py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-bold">Paid: ₹0</span>
                  </div>
                </div>

              </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4 my-8">
                
                {[
                  { q: "How to waive foreclosure charges on a personal loan?", a: "To waive foreclosure charges on a personal loan, check if your loan is on a floating interest rate (which RBI exempts from penalties) or negotiate directly with your branch manager citing your excellent repayment history." },
                  { q: "What is the RBI waiver on prepayment?", a: "The RBI has mandated that banks and NBFCs cannot charge foreclosure or pre-payment penalties on any floating rate term loans sanctioned to individual borrowers." },
                  { q: "How can I negotiate a loan pre-closure penalty for a fixed rate loan?", a: "For fixed-rate loans, you can negotiate by offering a partial payment first, leveraging a balance transfer offer from a competitor, or appealing to the grievance redressal officer for a one-time waiver." },
                  { q: "Are there foreclosure charges on home loans?", a: "No, per RBI guidelines, individual borrowers with floating rate home loans are entirely exempt from prepayment and foreclosure charges." },
                  { q: "Can NBFCs charge pre-closure penalties?", a: "NBFCs cannot charge pre-closure penalties on floating-rate loans for individuals. However, they can levy these charges on fixed-rate loans or loans given to businesses." },
                  { q: "What is the typical foreclosure penalty percentage?", a: "If applicable (such as on fixed-rate or business loans), foreclosure penalties typically range between 2% to 5% of the outstanding principal amount, plus 18% GST." },
                  { q: "Does a balance transfer help waive foreclosure charges?", a: "A balance transfer doesn't legally 'waive' the old bank's charges, but the new bank taking over your loan might offer cashback or absorb the penalty cost to win your business." },
                  { q: "Can I get a waiver if I pay off my loan from my own savings?", a: "Yes! Banks are much more likely to waive charges if they know the foreclosure is funded from your own savings rather than by borrowing from a competitor." },
                  { q: "How long does a bank take to process a foreclosure request?", a: "A foreclosure request typically takes 7 to 15 working days to process, after which you should receive your No Objection Certificate (NOC) and any original collateral documents." },
                  { q: "What should I do if the bank refuses to waive illegal foreclosure charges?", a: "If a bank applies charges against RBI guidelines (e.g., on a floating rate individual loan), escalate the matter to the Banking Ombudsman or hire legal help to send a formal notice." }
                ].map((faq, index) => (
                  <details key={index} name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                    <summary className="font-bold text-xl text-[#2E2E2E] marker:content-none flex justify-between items-center">
                      {faq.q}
                      <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                    </summary>
                    <div className="pt-4 text-lg text-gray-700 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div id="lead-gen" className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6">Stop Paying Hidden Penalties</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Don't let the branch manager bully you into paying a 4% foreclosure penalty. Let our experts negotiate a complete waiver for you today.</p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform shadow-lg text-lg">
                  Get Free Legal Advice
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">Disclaimer: This information is for educational purposes and does not constitute legal or financial advice.</p>
            </div>

          </article>

          {/* Right Sidebar: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] sticky top-24 h-fit">
            
            {/* Card 1 (Dark CTA) */}
            <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group mb-8">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-4">Are They Charging You Illegally?</h4>
                <p className="text-gray-300 mb-6 text-sm">Find out if your loan is exempt from prepayment penalties under RBI rules.</p>
                <Link href="/consultation" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 rounded-xl hover:bg-white hover:text-[#1F5EFF] transition-colors">
                  Speak to an Expert
                </Link>
              </div>
            </div>

            {/* Card 2 (White Resources) */}
            <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
              <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">Related Guides</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li>
                  <Link href="/guides/personal-loan-closure" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    Closing a Personal Loan
                  </Link>
                </li>
                <li>
                  <Link href="/guides/business-loan-foreclosure" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    Business Loan Penalties
                  </Link>
                </li>
                <li>
                  <Link href="/guides/how-to-get-noc" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    Getting Your NOC Faster
                  </Link>
                </li>
              </ul>
            </div>

          </aside>
          
        </div>
      </main>
    </div>
  );
}
