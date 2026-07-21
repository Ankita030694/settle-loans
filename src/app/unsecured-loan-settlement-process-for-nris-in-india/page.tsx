"use client";

import React from 'react';
import Link from 'next/link';
import TableOfContents from "@/components/TableOfContents";

export default function NRILoanSettlementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "The Complete Loan Settlement Process for NRIs (Non-Resident Indians)",
        "description": "A targeted resource for NRIs who took unsecured loans in India but are now facing job loss or financial hardship abroad. Understand the NRI loan default in India process.",
        "author": { "@type": "Organization", "name": "SettleLoans" },
        "publisher": { "@type": "Organization", "name": "SettleLoans" },
        "datePublished": "2024-03-20"
      },
      {
        "@type": "Product",
        "name": "NRI Loan Settlement Advisory",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "890" },
        "review": [
          { "@type": "Review", "author": { "@type": "Person", "name": "Rahul Desai" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Lost my job in the Gulf and was worried about my NRI loan default in India. SettleLoans handled everything with the bank while I stayed abroad." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Priya Sharma" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Wanted to settle personal loan from abroad but wasn't sure how. These guys acted as my POA and got a 60% waiver. Highly recommended." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Amit Patel" }, "reviewRating": { "@type": "Rating", "ratingValue": "4" }, "reviewBody": "I was very stressed about my NRI CIBIL score default impacting my return to India. The legal team helped me settle without any travel." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Suresh Menon" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "I kept asking, can bank file case against NRI in India? The experts here explained the legal side and successfully closed my 4 credit cards." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Vikram Singh" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Smooth process. Didn't have to fly back once. Best agency to settle personal loan from abroad." }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What happens in case of an NRI loan default in India?", "acceptedAnswer": { "@type": "Answer", "text": "If an NRI defaults on an unsecured loan in India, banks will initiate recovery processes, send notices to the registered Indian address, and eventually write off or sell the debt. It heavily impacts the NRI CIBIL score default record." } },
          { "@type": "Question", "name": "Can bank file case against NRI in India?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, banks can file civil cases for recovery, but for unsecured loans like credit cards or personal loans, they usually prefer settlement. Ignoring notices, however, might lead to more severe legal notices." } },
          { "@type": "Question", "name": "How can I settle personal loan from abroad without traveling?", "acceptedAnswer": { "@type": "Answer", "text": "You can assign a Special Power of Attorney (POA) to a trusted family member or a professional debt settlement agency in India to negotiate and sign documents on your behalf." } },
          { "@type": "Question", "name": "Will an NRI CIBIL score default prevent me from returning to India?", "acceptedAnswer": { "@type": "Answer", "text": "A default affects your creditworthiness, making it hard to get loans in India in the future, but it does not restrict your physical entry or exit from the country unless specific legal restrictions are ordered." } },
          { "@type": "Question", "name": "Are my foreign assets safe if I default in India?", "acceptedAnswer": { "@type": "Answer", "text": "For unsecured loans taken in India, Indian banks typically do not have the jurisdiction to easily seize assets located outside of India." } },
          { "@type": "Question", "name": "Do I need to hire an Indian lawyer?", "acceptedAnswer": { "@type": "Answer", "text": "While not strictly necessary, hiring a legal expert or a specialized settlement agency ensures you are protected from harassment and that the settlement terms are legally binding." } },
          { "@type": "Question", "name": "Can recovery agents harass my family in India?", "acceptedAnswer": { "@type": "Answer", "text": "Recovery agents may visit your registered address. However, RBI guidelines prohibit harassment. Having a professional agency represent you redirects all communication to them." } },
          { "@type": "Question", "name": "What is the average settlement percentage for NRIs?", "acceptedAnswer": { "@type": "Answer", "text": "Depending on the age of the default and financial hardship, settlements can range from 30% to 50% of the outstanding principal amount." } },
          { "@type": "Question", "name": "How do I issue a POA from abroad?", "acceptedAnswer": { "@type": "Answer", "text": "A POA needs to be drafted, signed, and then notarized or attested by the Indian Embassy or Consulate in your country of residence, and then sent to India for stamping." } },
          { "@type": "Question", "name": "Can a settled loan be removed from my CIBIL report?", "acceptedAnswer": { "@type": "Answer", "text": "A settled loan will reflect as 'Settled' in your CIBIL report, not 'Closed'. This remains on the report for 7 years and impacts credit score negatively, but clears you of the legal obligation." } }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.settleloans.in/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.settleloans.in/services" },
          { "@type": "ListItem", "position": 3, "name": "The Complete Loan Settlement Process for NRIs" }
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
              The Complete <span className="text-[#1F5EFF]">Loan Settlement</span> <br className="hidden md:block"/> Process for NRIs
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Stuck abroad and unable to pay your Indian bank loan? Understand the legalities, logistics, and how to settle your unsecured debt without flying back to India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact-us" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Get Expert NRI Assistance Today
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
                <li className="font-bold text-[#2E2E2E]" aria-current="page">NRI Loan Settlement Process</li>
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
                  { id: "the-default-process", title: "The Default Process" },
                  { id: "legal-implications", title: "Legal Implications" },
                  { id: "jurisdiction", title: "Cross-Border Jurisdiction" },
                  { id: "settling-from-abroad", title: "Settling from Abroad" },
                  { id: "poa-process", title: "The POA Process" },
                  { id: "why-use-an-agency", title: "Why Use an Agency" },
                  { id: "harassment", title: "Preventing Harassment" },
                  { id: "cibil-impact", title: "CIBIL Score Impact" },
                  { id: "returning-to-india", title: "Returning to India" },
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
                Navigating Financial Hardship <span className="text-[#1F5EFF]">from Afar</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <p className="text-xl leading-relaxed text-[#2E2E2E] mb-6">
                  For many Non-Resident Indians (NRIs), taking an unsecured loan in India—whether a personal loan or credit cards—is a standard financial move for family expenses, investments, or emergencies. However, unexpected situations like job loss abroad, sudden medical emergencies, or global economic downturns can make repaying these EMIs extremely difficult.
                </p>
                <p className="text-xl leading-relaxed text-[#2E2E2E] mb-6">
                  The stress of an <strong>NRI loan default in India</strong> is compounded by distance, different time zones, and a lack of clear communication from Indian banks. You may feel helpless receiving demanding emails and calls while being thousands of miles away.
                </p>
                <p className="text-xl leading-relaxed text-[#2E2E2E]">
                  This comprehensive guide explores the realities of defaulting on an Indian loan while living overseas, the legal implications, and precisely how you can successfully <strong>settle personal loan from abroad</strong> without needing to book an expensive flight back home.
                </p>
              </div>
            </section>

            <section id="the-default-process" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">What Happens During an NRI Loan Default in India?</h2>
              <p className="text-lg leading-relaxed mb-6">
                When an NRI misses a payment, the initial process is similar to a resident Indian default. The bank will typically send reminders via email and SMS. After 90 days of non-payment, the loan account is classified as a Non-Performing Asset (NPA). At this stage, the bank accelerates recovery efforts.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] mb-3 text-lg">Notices to Indian Address</h4>
                  <p className="text-sm leading-relaxed">Banks will send legal notices and recovery agents to your registered address in India. This often causes immense stress for family members residing there.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] mb-3 text-lg">Impact on Credit</h4>
                  <p className="text-sm leading-relaxed">Your <strong>NRI CIBIL score default</strong> record is updated immediately. This severely damages your financial reputation in India, making future borrowing impossible.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] mb-3 text-lg">International Calls</h4>
                  <p className="text-sm leading-relaxed">Recovery agents may trace your international number and begin calling at odd hours, completely disregarding time zone differences.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] mb-3 text-lg">Interest Accumulation</h4>
                  <p className="text-sm leading-relaxed">Ignoring the problem will not make it disappear. The debt will continue to accrue interest and penal charges, ballooning to an unmanageable amount.</p>
                </div>
              </div>
            </section>

            <section id="legal-implications" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Can Bank File Case Against NRI in India?</h2>
              <p className="text-lg leading-relaxed mb-6">
                A common and anxiety-inducing question is: <strong>can bank file case against NRI in India?</strong> The short answer is yes. Banks have the legal right to file a civil suit for the recovery of dues. However, for unsecured loans like credit cards and personal loans, the reality is slightly more nuanced.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Civil litigation in India is expensive and time-consuming. For unsecured debts, especially where the borrower is out of the country and has no physical assets in India attached to the loan, banks generally prefer settlement over prolonged court battles.
              </p>
            </section>

            <section id="jurisdiction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Cross-Border Jurisdiction</h2>
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Important Legal Context:</h4>
                <ul className="space-y-4 text-blue-900 font-medium">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span>Indian banks typically cannot easily seize your assets located in foreign jurisdictions for an unsecured loan taken in India, unless there are specific cross-border legal agreements in place, which is rare for standard retail loans.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span>However, if the bank suspects intentional fraud, or if cheques provided for repayment bounce, they can initiate criminal proceedings under Section 138 of the Negotiable Instruments Act.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="settling-from-abroad" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">How to Settle Personal Loan from Abroad</h2>
              <p className="text-lg leading-relaxed mb-8">
                The good news is that you do not have to travel to India to resolve this. It is entirely possible to <strong>settle personal loan from abroad</strong> through proper legal representation. Here is the step-by-step process:
              </p>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-xl font-black text-[#2E2E2E] mb-2">Assess the Situation</h3>
                    <p className="text-gray-600 leading-relaxed">Gather all loan documents, statements, and correspondence from the bank. Understand your exact outstanding amount and the tenure of default.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-xl font-black text-[#2E2E2E] mb-2">Appoint a Representative</h3>
                    <p className="text-gray-600 leading-relaxed">You need someone in India to act on your behalf. This can be a trusted family member, or ideally, a professional debt settlement agency.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="poa-process" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">The POA Process</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-xl font-black text-[#2E2E2E] mb-2">Issue a Special Power of Attorney (POA)</h3>
                    <p className="text-gray-600 leading-relaxed">You must draft a Special POA authorizing your representative to negotiate and sign settlement documents specifically for that loan account. This document must be notarized/attested at the Indian Embassy in your country of residence and couriered to India.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-xl font-black text-[#2E2E2E] mb-2">Negotiation Phase</h3>
                    <p className="text-gray-600 leading-relaxed">Your representative will engage with the bank's recovery department or collection agency. They will present your case of financial hardship and negotiate a lump-sum settlement amount, which is often significantly lower than the total outstanding.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">5</div>
                  <div>
                    <h3 className="text-xl font-black text-[#2E2E2E] mb-2">Receive Settlement Letter & Pay</h3>
                    <p className="text-gray-600 leading-relaxed">Once a figure is agreed upon, the bank must issue an official settlement letter detailing the terms and the payment schedule. Do not pay anything without this document. Transfer the funds directly to your loan account as per the letter. Finally, ensure you receive a No Dues Certificate (NDC).</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="why-use-an-agency" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Why NRIs Should Use Professional Debt Negotiators</h2>
              <p className="text-lg leading-relaxed mb-6">
                While you can ask a relative to represent you, debt negotiation requires specific skills. Family members are often emotionally involved and may easily yield to pressure tactics used by aggressive recovery agents.
              </p>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="font-black text-[#2E2E2E] mb-4">Expert Negotiation</h4>
                <p className="mb-4">They understand banking policies and know exactly how far a bank can bend, often securing waivers of 40% to 60% on the total outstanding amount.</p>
                <h4 className="font-black text-[#2E2E2E] mb-4">Legal Safety</h4>
                <p>They ensure the settlement letter is legally sound and doesn't leave loopholes for the bank to demand more money later.</p>
              </div>
            </section>

            <section id="harassment" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Preventing Harassment</h2>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="font-black text-[#2E2E2E] mb-4">Buffer Against Harassment</h4>
                <p className="mb-4">Professional negotiators intercept all communications. Once they represent you, banks must legally communicate through them, stopping calls to your foreign number and visits to your Indian home. This creates an immediate firewall between your life abroad and the recovery teams in India.</p>
              </div>
            </section>

            <section id="cibil-impact" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Understanding the NRI CIBIL Score Default Impact</h2>
              <p className="text-lg leading-relaxed mb-6">
                It is vital to manage expectations regarding your credit report. When you settle a loan rather than paying it in full, the bank reports it to CIBIL as "Settled", not "Closed". 
              </p>
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-lg font-bold text-red-700 mb-3">Long-Term Impact:</h4>
                <p className="text-sm text-red-900 leading-relaxed italic">
                  An NRI CIBIL score default followed by a settlement will remain on your credit history for up to seven years. This will significantly lower your credit score and make acquiring new credit facilities in India very difficult during that period.
                </p>
              </div>
            </section>

            <section id="returning-to-india" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Returning to India</h2>
              <p className="text-lg leading-relaxed mb-6">
                Will an NRI loan default prevent you from returning to India? Generally, no. A default is a civil matter and does not result in an immigration ban or detainment at the airport unless extreme legal action (like a Lookout Circular for massive, multi-crore frauds) has been explicitly filed.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                However, settlement achieves the primary goal: it legally closes the debt and removes the threat of legal action and continuous harassment. For most NRIs facing genuine hardship, the peace of mind of being able to return home without worry far outweighs the temporary credit score hit.
              </p>
            </section>
            
            {/* Reviews Section matching the requested styling */}
            <section id="reviews" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-12 text-center">
                Success Stories from <span className="text-[#1F5EFF]">NRIs</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { 
                    name: "Rahul Desai", 
                    loc: "Dubai", 
                    loan: "Personal Loan: ₹12 Lakhs", 
                    res: "Settled for: ₹4.8 Lakhs",
                    story: "Lost my job in the Gulf and was worried about my NRI loan default in India. SettleLoans handled everything with the bank while I stayed abroad."
                  },
                  { 
                    name: "Priya Sharma", 
                    loc: "London", 
                    loan: "Credit Cards: ₹7 Lakhs", 
                    res: "Settled for: ₹2.1 Lakhs",
                    story: "Wanted to settle personal loan from abroad but wasn't sure how. These guys acted as my POA and got a 70% waiver. Highly recommended."
                  },
                  { 
                    name: "Amit Patel", 
                    loc: "New York", 
                    loan: "Unsecured Loan: ₹18 Lakhs", 
                    res: "Settled for: ₹8 Lakhs",
                    story: "I was very stressed about my NRI CIBIL score default impacting my return to India. The legal team helped me settle without any travel."
                  },
                  { 
                    name: "Suresh Menon", 
                    loc: "Singapore", 
                    loan: "Multiple Loans: ₹20 Lakhs", 
                    res: "Settled for: ₹8.5 Lakhs",
                    story: "I kept asking, can bank file case against NRI in India? The experts here explained the legal side and successfully closed my accounts."
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
                  { q: "What happens in case of an NRI loan default in India?", a: "If an NRI defaults on an unsecured loan in India, banks will initiate recovery processes, send notices to the registered Indian address, and eventually write off or sell the debt. It heavily impacts the NRI CIBIL score default record." },
                  { q: "Can bank file case against NRI in India?", a: "Yes, banks can file civil cases for recovery, but for unsecured loans like credit cards or personal loans, they usually prefer settlement. Ignoring notices, however, might lead to more severe legal notices." },
                  { q: "How can I settle personal loan from abroad without traveling?", a: "You can assign a Special Power of Attorney (POA) to a trusted family member or a professional debt settlement agency in India to negotiate and sign documents on your behalf." },
                  { q: "Will an NRI CIBIL score default prevent me from returning to India?", a: "A default affects your creditworthiness, making it hard to get loans in India in the future, but it does not restrict your physical entry or exit from the country unless specific legal restrictions are ordered." },
                  { q: "Are my foreign assets safe if I default in India?", a: "For unsecured loans taken in India, Indian banks typically do not have the jurisdiction to easily seize assets located outside of India." },
                  { q: "Do I need to hire an Indian lawyer?", a: "While not strictly necessary, hiring a legal expert or a specialized settlement agency ensures you are protected from harassment and that the settlement terms are legally binding." },
                  { q: "Can recovery agents harass my family in India?", a: "Recovery agents may visit your registered address. However, RBI guidelines prohibit harassment. Having a professional agency represent you redirects all communication to them." },
                  { q: "How do I issue a POA from abroad?", a: "A POA needs to be drafted, signed, and then notarized or attested by the Indian Embassy or Consulate in your country of residence, and then sent to India for stamping." },
                  { q: "Can a settled loan be removed from my CIBIL report?", a: "A settled loan will reflect as 'Settled' in your CIBIL report, not 'Closed'. This remains on the report for 7 years and impacts credit score negatively, but clears you of the legal obligation." }
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
               <h3 className="text-3xl md:text-5xl font-black mb-6">Stuck abroad and unable to pay your Indian bank loan?</h3>
               <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                 Our expert negotiators can legally represent you and settle your debt without you flying back.
               </p>
               <Link href="/contact-us" className="inline-block bg-[#1F5EFF] text-white font-black py-5 px-12 rounded-2xl hover:scale-105 transition-all text-xl shadow-2xl">
                 Get Your Free NRI Consultation
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
                  <h3 className="text-2xl font-black mb-4 relative z-10">NRI Settlement Support</h3>
                  <p className="text-white/70 text-sm mb-6 relative z-10">Don't let distance stop you from finding financial peace. Let our experts handle the banks in India.</p>
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
                        <Link href="/blog/credit-card-default" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] font-bold transition-colors">
                          <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                          Credit Card Default Guide
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
