"use client";

import React from 'react';
import Link from 'next/link';
import TableOfContents from "@/components/TableOfContents";

export default function LoanGuarantorLiabilityPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Loan Guarantor Legal Liability: What Happens When the Primary Borrower Defaults?",
        "description": "A critical guide for individuals who signed as a guarantor for a friend or relative's loan in India, covering co-extensive liability and CIBIL impact.",
        "author": { "@type": "Organization", "name": "SettleLoans" },
        "publisher": { "@type": "Organization", "name": "SettleLoans" },
        "datePublished": "2024-03-20"
      },
      {
        "@type": "Product",
        "name": "Guarantor Legal Protection & Settlement Negotiation",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "134" },
        "review": [
          { "@type": "Review", "author": { "@type": "Person", "name": "Rahul S." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "My friend defaulted and the bank came after me. SettleLoans helped detach my liability legally." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Anjali K." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Excellent service. Stopped the harassment calls immediately." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Vikram M." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Highly professional legal team. Saved my CIBIL score from being completely ruined." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Priya D." }, "reviewRating": { "@type": "Rating", "ratingValue": "4" }, "reviewBody": "Very knowledgeable about guarantor rights in India. Helped me navigate a tough situation." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Amit R." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Got my guarantor name removed through a negotiated settlement. Couldn't have done it without them." }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Can a bank recover a loan from a guarantor in India?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Under the Indian Contract Act, a guarantor's liability is co-extensive with the principal borrower. The bank has the right to recover the full amount from the guarantor." } },
          { "@type": "Question", "name": "What happens to my CIBIL score if the primary borrower defaults?", "acceptedAnswer": { "@type": "Answer", "text": "If the primary borrower defaults, it is recorded on the guarantor's credit report as well, drastically dropping your CIBIL score and ruining your future borrowing capacity." } },
          { "@type": "Question", "name": "Can I remove my name as a loan guarantor?", "acceptedAnswer": { "@type": "Answer", "text": "You can only remove your name if the bank agrees, which usually requires a replacement guarantor or a partial settlement to detach your liability." } },
          { "@type": "Question", "name": "What is co-extensive liability?", "acceptedAnswer": { "@type": "Answer", "text": "Co-extensive liability means the guarantor is just as responsible for the debt as the primary borrower from the moment a default occurs." } },
          { "@type": "Question", "name": "Will recovery agents harass the guarantor?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, recovery agents often target guarantors because they may have better financial standing and are easier to pressure." } },
          { "@type": "Question", "name": "Can a guarantor file a case against the principal borrower?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, under the right of subrogation, if a guarantor pays the debt, they step into the shoes of the creditor and can legally recover the amount from the principal borrower." } },
          { "@type": "Question", "name": "Is the guarantor liable for interest and penalties?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, unless stated otherwise in the guarantee contract, the guarantor is liable for the principal amount, accrued interest, penal charges, and legal fees." } },
          { "@type": "Question", "name": "How can legal help protect a guarantor?", "acceptedAnswer": { "@type": "Answer", "text": "Legal experts can negotiate a settlement with the bank, stop illegal recovery harassment, and explore legal loopholes in the guarantee agreement to minimize your liability." } }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.settleloans.in/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.settleloans.in/services" },
          { "@type": "ListItem", "position": 3, "name": "Loan Guarantor Legal Liability" }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Financial Education
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Loan Guarantor <span className="text-[#1F5EFF]">Legal Liability</span> <br className="hidden md:block"/> in India
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Did a friend or family member default on a loan you guaranteed? Understand the harsh reality of co-extensive liability, CIBIL impact, and how to legally detach yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact-us" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Get Expert Legal Help Today
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb Section */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li><Link href="/services" className="hover:text-[#1F5EFF] transition-colors">Services</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">Loan Guarantor Liability</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout with 3 Columns */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
          
          {/* Left Column: Table of Contents */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents 
                items={[
                  { id: "introduction", title: "Introduction" },
                  { id: "co-extensive-liability", title: "Co-Extensive Liability" },
                  { id: "the-default-process", title: "The Default Process" },
                  { id: "bank-recovery-rights", title: "Direct Recovery Rights" },
                  { id: "cibil-impact", title: "CIBIL Score Impact" },
                  { id: "steps-to-take", title: "Steps to Take" },
                  { id: "detaching-liability", title: "Detaching Liability" },
                  { id: "preventing-harassment", title: "Preventing Harassment" },
                  { id: "reviews", title: "Success Stories" },
                  { id: "faqs", title: "Common FAQs" }
                ]}
              />
            </div>
          </aside>

          {/* Middle Column: Main Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Harsh Reality of <span className="text-[#1F5EFF]">Being a Guarantor</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <p className="text-xl leading-relaxed text-[#2E2E2E] mb-6">
                  Signing as a loan guarantor for a friend, colleague, or family member often feels like a simple act of goodwill. However, many individuals are completely unaware of the severe legal and financial implications attached to this commitment in India.
                </p>
                <p className="text-xl leading-relaxed text-[#2E2E2E] mb-6">
                  When a friend defaults on a loan you guaranteed, you don't just get a courtesy call. The stress is compounded by the fact that the bank views you as equally responsible, targeting you just as aggressively as the primary borrower.
                </p>
                <p className="text-xl leading-relaxed text-[#2E2E2E]">
                  This comprehensive guide explores the realities of <strong>loan guarantor liability in India</strong>, the legal implications under the Contract Act, and precisely how you can negotiate to detach your liability when the principal borrower defaults.
                </p>
              </div>
            </section>

            <section id="co-extensive-liability" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Co-Extensive Liability under Indian Law</h2>
              <p className="text-lg leading-relaxed mb-6">
                Section 128 of the Indian Contract Act, 1872, governs the liability of a surety (guarantor). The law explicitly states that the liability of the guarantor is <strong>"co-extensive with that of the principal debtor, unless it is otherwise provided by the contract."</strong>
              </p>
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Important Legal Context:</h4>
                <ul className="space-y-4 text-blue-900 font-medium">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span>This means the moment the principal debtor defaults, the bank's right to pursue the guarantor is immediately activated. They can demand full payment from you on day one of the default.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span>The bank is not legally required to exhaust all its remedies against the principal borrower before turning its attention to the guarantor. They can bypass the borrower entirely.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="the-default-process" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">What Happens During a Default?</h2>
              <p className="text-lg leading-relaxed mb-6">
                When the primary borrower misses a payment, a cascade of severe consequences begins. The bank will typically send reminders, and after 90 days, classify the loan as a Non-Performing Asset (NPA). At this stage, recovery efforts accelerate drastically.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] mb-3 text-lg">Demand Notices</h4>
                  <p className="text-sm leading-relaxed">You will start receiving official demand notices from the bank's legal department, urging you to clear the entire outstanding balance immediately.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] mb-3 text-lg">Harassment by Agents</h4>
                  <p className="text-sm leading-relaxed">Banks often target guarantors aggressively, deploying recovery agents to your home and workplace, knowing you likely have a better reputation at stake.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] mb-3 text-lg">Account Freezes</h4>
                  <p className="text-sm leading-relaxed">If you hold accounts with the same bank, they can exercise a "general lien" and freeze your accounts or automatically debit funds to offset the arrears.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] mb-3 text-lg">Interest Accumulation</h4>
                  <p className="text-sm leading-relaxed">The debt will continue to accrue interest and penal charges, and as a guarantor, you are legally liable for the inflated sum including these penalties.</p>
                </div>
              </div>
            </section>

            <section id="bank-recovery-rights" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Can the Bank Recover From the Guarantor Directly?</h2>
              <p className="text-lg leading-relaxed mb-6">
                Absolutely. Indian courts have consistently ruled that a creditor can proceed directly against the guarantor without first suing the principal debtor. The Supreme Court of India has reaffirmed that a guarantee is an independent contract.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                If the principal borrower is untraceable or bankrupt, the bank will shift 100% of its recovery efforts onto you. They can legally initiate civil suits or debt recovery tribunal (DRT) proceedings against you to seize your assets, or use SARFAESI Act for secured loans.
              </p>
            </section>

            <section id="cibil-impact" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Understanding the Guarantor CIBIL Score Impact</h2>
              <p className="text-lg leading-relaxed mb-6">
                One of the most immediate damages of being a guarantor happens to your credit score. The loan reflects on your CIBIL report under the "Guarantor" section, directly tying your creditworthiness to the primary borrower's actions.
              </p>
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-lg font-bold text-red-700 mb-3">Long-Term Impact:</h4>
                <p className="text-sm text-red-900 leading-relaxed italic">
                  If the primary borrower defaults, it is recorded on your CIBIL report as a default. This will drastically lower your credit score, making it nearly impossible for you to secure a home loan, car loan, or even a basic credit card until the guaranteed loan is resolved.
                </p>
              </div>
            </section>

            <section id="steps-to-take" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Steps to Take if Your Friend Defaulted</h2>
              <p className="text-lg leading-relaxed mb-8">
                If you receive a notice that the primary borrower has defaulted, you must act immediately to protect your own financial standing. Here is the step-by-step process:
              </p>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-xl font-black text-[#2E2E2E] mb-2">Demand Resolution from the Borrower</h3>
                    <p className="text-gray-600 leading-relaxed">Contact the primary borrower immediately. Understand their financial situation and whether it's a temporary hiccup or a permanent default. Push them to clear the dues.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-xl font-black text-[#2E2E2E] mb-2">Respond to Bank Notices</h3>
                    <p className="text-gray-600 leading-relaxed">Do not ignore legal notices, as this will result in ex-parte orders against you. Respond formally, ideally through a legal professional, to buy time and assert any defenses.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-xl font-black text-[#2E2E2E] mb-2">Exercise Right of Subrogation</h3>
                    <p className="text-gray-600 leading-relaxed">If you are forced to pay the bank, you step into the shoes of the creditor (Section 140). You have the explicit legal right to file a civil recovery suit against the primary borrower to get your money back.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="detaching-liability" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Detaching Liability Through Legal Negotiation</h2>
              <p className="text-lg leading-relaxed mb-6">
                If the borrower is incapable of paying, you need a strategy to protect yourself. Engaging specialized debt settlement lawyers can help you negotiate directly with the bank to detach your name from the liability.
              </p>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="font-black text-[#2E2E2E] mb-4">Fractional Settlement</h4>
                <p className="mb-4">Lawyers can negotiate a fractional settlement to explicitly release your name from the guarantee deed for a lower amount, while the bank continues to pursue the primary borrower for the rest.</p>
                <h4 className="font-black text-[#2E2E2E] mb-4">Legal Defenses</h4>
                <p>Lawyers review the guarantee deed for loopholes. For example, if the bank altered the loan terms without your consent (Section 133), you may be legally discharged from the liability entirely.</p>
              </div>
            </section>

            <section id="preventing-harassment" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Preventing Harassment</h2>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="font-black text-[#2E2E2E] mb-4">Buffer Against Harassment</h4>
                <p className="mb-4">Professional negotiators intercept all communications. Once they represent you, banks must legally communicate through them, stopping calls to you and visits to your workplace. This creates an immediate firewall protecting your reputation.</p>
              </div>
            </section>

            {/* Reviews Section matching the requested styling */}
            <section id="reviews" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-12 text-center">
                Success Stories from <span className="text-[#1F5EFF]">Guarantors</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { 
                    name: "Rahul S.", 
                    loc: "Mumbai", 
                    loan: "Guaranteed Loan: ₹15 Lakhs", 
                    res: "Detached Liability",
                    story: "My friend defaulted and the bank came after me. SettleLoans helped negotiate a fractional settlement and detached my liability legally."
                  },
                  { 
                    name: "Anjali K.", 
                    loc: "Delhi", 
                    loan: "Guaranteed Loan: ₹8 Lakhs", 
                    res: "Harassment Stopped",
                    story: "Recovery agents were visiting my office. The legal team stopped the harassment calls immediately and helped me navigate the situation."
                  },
                  { 
                    name: "Vikram M.", 
                    loc: "Bangalore", 
                    loan: "Guaranteed Loan: ₹20 Lakhs", 
                    res: "CIBIL Protected",
                    story: "Highly professional legal team. Saved my CIBIL score from being completely ruined when my relative refused to pay."
                  },
                  { 
                    name: "Amit R.", 
                    loc: "Pune", 
                    loan: "Guaranteed Loan: ₹12 Lakhs", 
                    res: "Name Removed",
                    story: "Got my guarantor name removed through a negotiated settlement without paying the full amount. Couldn't have done it without them."
                  }
                ].map((review, i) => (
                  <div key={i} className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 flex items-center justify-center font-black text-[#1F5EFF] text-xl mr-4 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-black text-[#2E2E2E]">{review.name}</h5>
                        <p className="text-xs text-[#747474] font-bold uppercase tracking-wider">{review.loc}</p>
                      </div>
                      <div className="ml-auto flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                        ))}
                      </div>
                    </div>
                    <div className="mb-6 flex flex-col gap-2">
                      <div className="px-4 py-2 bg-red-50 text-red-700 rounded-lg text-xs font-black border border-red-100 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                        {review.loan}
                      </div>
                      <div className="px-4 py-2 bg-green-50 text-green-700 rounded-lg text-xs font-black border border-green-100 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        {review.res}
                      </div>
                    </div>
                    <p className="text-[#2E2E2E] italic leading-relaxed text-sm opacity-80 group-hover:opacity-100 transition-opacity">"{review.story}"</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs Section matching requested styling */}
            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "Can a bank recover a loan from a guarantor in India?", a: "Yes. Under the Indian Contract Act, a guarantor's liability is co-extensive with the principal borrower. The bank has the right to recover the full amount from the guarantor." },
                  { q: "What happens to my CIBIL score if the primary borrower defaults?", a: "If the primary borrower defaults, it is recorded on the guarantor's credit report as well, drastically dropping your CIBIL score and ruining your future borrowing capacity." },
                  { q: "Can I remove my name as a loan guarantor?", a: "You can only remove your name if the bank agrees, which usually requires a replacement guarantor or a partial settlement to detach your liability." },
                  { q: "What is co-extensive liability?", a: "Co-extensive liability means the guarantor is just as responsible for the debt as the primary borrower from the moment a default occurs." },
                  { q: "Will recovery agents harass the guarantor?", a: "Yes, recovery agents often target guarantors because they may have better financial standing and are easier to pressure." },
                  { q: "Can a guarantor file a case against the principal borrower?", a: "Yes, under the right of subrogation, if a guarantor pays the debt, they step into the shoes of the creditor and can legally recover the amount from the principal borrower." },
                  { q: "Is the guarantor liable for interest and penalties?", a: "Yes, unless stated otherwise in the guarantee contract, the guarantor is liable for the principal amount, accrued interest, penal charges, and legal fees." },
                  { q: "How can legal help protect a guarantor?", a: "Legal experts can negotiate a settlement with the bank, stop illegal recovery harassment, and explore legal loopholes in the guarantee agreement to minimize your liability." }
                ].map((faq, i) => (
                  <div key={i} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="font-black text-[#2E2E2E] text-lg mb-3">{i+1}. {faq.q}</h4>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
               <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
               <h3 className="text-3xl md:text-5xl font-black mb-6">Being harassed by banks because a friend defaulted?</h3>
               <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                 Get legal help to negotiate a settlement and detach your liability today. Protect your financial future before the bank seizes your assets.
               </p>
               <Link href="/contact-us" className="inline-block bg-[#1F5EFF] text-white font-black py-5 px-12 rounded-2xl hover:scale-105 transition-all text-xl shadow-2xl">
                 Get Your Free Consultation
               </Link>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
               <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans is a professional consultancy specializing in debt negotiation and legal support. We are not a lender or a financial institution. Impact on credit score varies by individual history and bank policies.</p>
            </div>

          </article>

          {/* Right Column: CTA & Context */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-8">
               <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                  <h3 className="text-2xl font-black mb-4 relative z-10">Guarantor Legal Protection</h3>
                  <p className="text-white/70 text-sm mb-6 relative z-10">Don't let someone else's default ruin your life. Get expert legal intervention to release your guarantee.</p>
                  <Link href="/contact-us" className="block w-full bg-[#1F5EFF] text-white font-black py-4 rounded-xl hover:bg-[#1F5EFF]/90 transition-colors shadow-lg">Consult Now</Link>
               </div>

               <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                  <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6 border-b pb-4">Helpful Resources</h3>
                  <ul className="space-y-5">
                     <li>
                        <Link href="/loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] font-bold transition-colors">
                          <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                          Loan Settlement Service
                        </Link>
                     </li>
                      <li>
                        <Link href="/services/cibil-repair" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] font-bold transition-colors">
                          <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                          CIBIL Repair Services
                        </Link>
                     </li>
                      <li>
                        <Link href="/stop-bank-harassment" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] font-bold transition-colors">
                          <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                          Stop Harassment Guide
                        </Link>
                     </li>
                     <li>
                        <Link href="/faq" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] font-bold transition-colors">
                          <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                          General FAQs
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
