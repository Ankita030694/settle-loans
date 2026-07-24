import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Foreclosure and Part-Prepayment Charges on Personal Loans: RBI Rules',
  description: 'A detailed financial and legal breakdown of the RBI rules governing foreclosure (pre-closure) and part-prepayment charges on personal loans. Learn how to challenge illegal bank fees.',
  alternates: { canonical: 'https://www.settleloan.in/foreclosure-and-part-prepayment-charges-on-personal-loan' }
};

const tocItems = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'rbi-rules-on-foreclosure-charges', title: 'RBI Rules on Foreclosure Charges' },
  { id: 'fixed-vs-floating-rates', title: 'Fixed vs. Floating Rate Loans' },
  { id: 'illegal-bank-charges', title: 'Illegal Bank Charges' },
  { id: 'calculate-true-cost', title: 'Calculate True Cost' },
  { id: 'file-ombudsman-complaint', title: 'File an Ombudsman Complaint' },
  { id: 'success-stories', title: 'Success Stories' },
  { id: 'faqs', title: 'Frequently Asked Questions' },
];

export default function ForeclosureChargesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Foreclosure and Part-Prepayment Charges on Personal Loans: RBI Rules",
      "description": "A detailed financial and legal breakdown of the RBI rules governing foreclosure (pre-closure) and part-prepayment charges on personal loans.",
      "url": "https://www.settleloan.in/foreclosure-and-part-prepayment-charges-on-personal-loan"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.settleloan.in" },
        { "@type": "ListItem", "position": 2, "name": "Personal Loan Foreclosure Charges", "item": "https://www.settleloan.in/foreclosure-and-part-prepayment-charges-on-personal-loan" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Foreclosure and Part-Prepayment Charges on Personal Loans: RBI Rules",
      "author": { "@type": "Organization", "name": "SettleLoan" },
      "publisher": { "@type": "Organization", "name": "SettleLoan", "logo": { "@type": "ImageObject", "url": "https://www.settleloan.in/logo.png" } },
      "datePublished": "2024-05-15T08:00:00+08:00",
      "dateModified": "2024-05-15T08:00:00+08:00"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What are foreclosure charges on a personal loan?", "acceptedAnswer": { "@type": "Answer", "text": "Foreclosure charges are fees levied by a bank or NBFC when you pay off your loan entirely before the end of the loan tenure." } },
        { "@type": "Question", "name": "Can banks charge foreclosure penalties on floating rate loans?", "acceptedAnswer": { "@type": "Answer", "text": "No, as per RBI guidelines, banks and NBFCs cannot charge foreclosure or pre-payment penalties on floating rate term loans sanctioned to individual borrowers." } },
        { "@type": "Question", "name": "What is the difference between fixed and floating rate loans regarding foreclosure?", "acceptedAnswer": { "@type": "Answer", "text": "For fixed-rate loans, lenders can legally charge a foreclosure fee (usually 2-5%). For floating-rate loans taken by individuals, RBI prohibits any foreclosure or part-payment charges." } },
        { "@type": "Question", "name": "What are part-payment fees?", "acceptedAnswer": { "@type": "Answer", "text": "Part-payment fees are charges applied when you pay a lump sum amount towards your loan principal without closing the loan entirely. Like foreclosure, these are banned on individual floating rate loans." } },
        { "@type": "Question", "name": "How do banks illegally charge penalties on floating rate loans?", "acceptedAnswer": { "@type": "Answer", "text": "Some lenders might disguise these fees under different names like 'processing fees for closure' or apply them by claiming the loan is for business purposes rather than personal." } },
        { "@type": "Question", "name": "How can I calculate the true cost of foreclosure?", "acceptedAnswer": { "@type": "Answer", "text": "Calculate the remaining principal, add the foreclosure fee percentage (if applicable legally, like on fixed loans), and add 18% GST on the fee to find the total closure amount." } },
        { "@type": "Question", "name": "What is the RBI Ombudsman?", "acceptedAnswer": { "@type": "Answer", "text": "The RBI Ombudsman is a senior official appointed by the Reserve Bank of India to redress customer complaints against deficiency in certain banking services, including illegal fee charges." } },
        { "@type": "Question", "name": "How do I file a complaint if overcharged?", "acceptedAnswer": { "@type": "Answer", "text": "First, complain to the bank's grievance redressal officer. If not resolved within 30 days, you can file a complaint online on the RBI's Complaint Management System (CMS) portal." } },
        { "@type": "Question", "name": "Does pre-closing a personal loan affect my CIBIL score?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, pre-closing a loan positively impacts your CIBIL score in the long run as it reduces your overall debt burden, although there might be a temporary minor drop initially." } },
        { "@type": "Question", "name": "Should I foreclose my personal loan early?", "acceptedAnswer": { "@type": "Answer", "text": "If you have surplus funds and are on a high-interest loan, foreclosing can save you significant interest costs. However, check for legal penalties on fixed-rate loans and do a cost-benefit analysis first." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Legal Consultation for Illegal Foreclosure Charges",
      "description": "Expert legal assistance to challenge illegal pre-closure and part-payment penalties levied by banks on personal loans.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "184"
      },
      "review": [
        { "@type": "Review", "author": { "@type": "Person", "name": "Vikram S." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "They helped me waive the 4% foreclosure charge my bank illegally applied on my floating rate loan." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Neha R." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Fantastic service! We successfully filed an RBI Ombudsman complaint with their guidance." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Amit K." }, "reviewRating": { "@type": "Rating", "ratingValue": "4" }, "reviewBody": "Very knowledgeable about RBI guidelines. Saved me over Rs. 25,000 in illegal fees." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Pooja M." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Quick and professional. They knew exactly how to handle the bank's delaying tactics." }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Financial Rights & Guidelines
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Foreclosure & Part-Prepayment Charges on Personal Loans: <span className="text-[#1F5EFF]">RBI Rules</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              A detailed financial and legal breakdown of the RBI rules governing pre-closure and part-payment charges. Learn how banks illegally charge penalties and how to challenge them.
            </p>
            <Link href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Challenge Illegal Fees Now
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center gap-2 text-xs md:text-sm text-[#747474]">
            <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/personal-loans" className="hover:text-[#1F5EFF] transition-colors">Personal Loans</Link>
            <span className="text-gray-300">/</span>
            <span className="font-bold text-[#2E2E2E]">Foreclosure Charges RBI Rules</span>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative max-w-[1600px]">
          
          {/* Left Sidebar (TOC) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  Introduction: The Hidden Cost of Paying Early
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Paying off a personal loan ahead of schedule should be a moment of financial liberation. However, many borrowers are met with an unpleasant surprise: massive <strong>foreclosure charges</strong> and <strong>part-payment penalties</strong> levied by their banks or NBFCs.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  While lenders claim these fees compensate for lost interest, the Reserve Bank of India (RBI) has strict guidelines protecting consumers, particularly regarding floating rate loans. This comprehensive guide breaks down the legalities, helps you identify illegal bank charges, and outlines the exact steps to calculate true costs and file a complaint if you've been overcharged.
                </p>
              </div>
            </section>
            
            <section id="rbi-rules-on-foreclosure-charges" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                RBI Rules on Foreclosure Charges Explained
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                The RBI has consistently intervened to ensure fair practices in the lending sector. The rules surrounding pre-closure (foreclosure) penalties are designed to prevent banks from unfairly penalizing borrowers who wish to clear their debt early.
              </p>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Crucial RBI Mandate on Floating Rates</h4>
                <p className="text-lg text-blue-900 mb-4">
                  According to circulars issued by the RBI (such as DBR.Dir.BC.No.08/13.03.00/2019-20), banks and NBFCs are strictly <strong>prohibited</strong> from charging any foreclosure charges or pre-payment penalties on any <strong>floating rate term loan</strong> sanctioned to individual borrowers for purposes other than business.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900 font-medium">Applies to all individual borrowers (not corporate entities).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900 font-medium">Covers both full foreclosure and partial prepayments.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900 font-medium">Valid across all commercial banks, co-operative banks, and registered NBFCs.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="fixed-vs-floating-rates" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Fixed vs. Floating Rate Loans: The Big Difference
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                The legality of your bank's foreclosure charges entirely depends on the type of interest rate your loan carries. Understanding this is step one in protecting your rights.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Floating Rate Loans</h3>
                  <p className="text-gray-700 mb-4">
                    The interest rate fluctuates with market conditions (usually tied to the Repo Rate).
                  </p>
                  <div className="bg-green-100 text-green-800 px-3 py-2 rounded-md font-bold text-sm inline-block">
                    Penalty: ILLEGAL (0% Charges)
                  </div>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Fixed Rate Loans</h3>
                  <p className="text-gray-700 mb-4">
                    The interest rate remains constant throughout the entire tenure of the personal loan.
                  </p>
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-md font-bold text-sm inline-block">
                    Penalty: LEGAL (Usually 2% to 5%)
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg text-gray-700 italic">
                  <strong>Insight:</strong> Personal loans are predominantly offered at fixed rates in India. However, if your loan agreement specifies a floating rate, and you are an individual (not borrowing for business), you are absolutely exempt from foreclosure and part-payment charges. Always double-check your loan sanction letter to confirm your rate type.
                </p>
              </div>
            </section>

            <section id="illegal-bank-charges" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How Banks Illegally Charge Penalties
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Despite clear RBI guidelines prohibiting fees on floating rate loans, some financial institutions employ loopholes and deceptive practices to extract money from borrowers closing their loans early.
              </p>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-4">Common Deceptive Tactics by Banks</h4>
                <ul className="space-y-4 text-red-900">
                  <li className="flex gap-3">
                    <span className="font-bold">•</span>
                    <span><strong>Renaming the Fee:</strong> Charging it as a "Processing Fee for Closure," "Administrative Charge," or "Documentation Fee" instead of calling it a foreclosure penalty.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">•</span>
                    <span><strong>Misclassifying the Loan:</strong> Unfairly classifying a standard individual personal loan as a "business loan" to bypass the individual borrower exemption.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">•</span>
                    <span><strong>Lock-in Period Violations:</strong> Refusing to accept pre-payment or closure during a mandatory "lock-in period," which is also restricted by RBI for floating rate retail loans.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="calculate-true-cost" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Calculate the True Cost of Foreclosure
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                If you have a fixed-rate personal loan where foreclosure charges are legally applicable, it's essential to understand how the final payout amount is calculated so you aren't overcharged by the lender.
              </p>

              <div className="space-y-12 my-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Identify Outstanding Principal</h3>
                    <p className="text-gray-700">Check your latest loan statement to find the exact principal amount remaining before your next EMI is due.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Apply the Foreclosure Percentage</h3>
                    <p className="text-gray-700">Multiply the outstanding principal by the foreclosure rate mentioned in your agreement (e.g., 4%). For a ₹5,00,000 outstanding balance, the fee is ₹20,000.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Add 18% GST</h3>
                    <p className="text-gray-700">GST is applicable on the fee, not the principal. 18% of ₹20,000 is ₹3,600. Total fee: ₹23,600. Total payout: ₹5,23,600 plus any accrued interest for the current month.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="file-ombudsman-complaint" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Challenging Illegal Fees: Filing an RBI Ombudsman Complaint
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                If your bank insists on charging illegal pre-closure penalties or part payment fees on a floating rate loan, do not succumb. You have legal recourse through the Reserve Bank of India's grievance redressal mechanisms.
              </p>

              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden mb-8">
                <h3 className="text-2xl font-bold text-[#2E2E2E] mb-6">Step-by-Step Escalation Process</h3>
                
                <div className="space-y-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-[#1F5EFF] mb-2">Step 1: Formal Written Complaint to the Bank</h4>
                    <p className="text-gray-700">Email the bank's Nodal Officer citing the specific RBI circular banning floating rate foreclosure charges. Demand an immediate waiver of the fees.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-[#1F5EFF] mb-2">Step 2: Wait 30 Days</h4>
                    <p className="text-gray-700">The bank is legally mandated to resolve your grievance within 30 days. If they reject your claim or fail to reply satisfactorily, proceed to the next step.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-[#1F5EFF] mb-2">Step 3: RBI Complaint Management System (CMS)</h4>
                    <p className="text-gray-700">Visit the official RBI CMS portal. File a complaint against the regulated entity under "Deficiency in Service" and attach your loan agreement and the bank's rejection email.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Success Stories: Fighting Back Against Illegal Fees
              </h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      V
                    </div>
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"My bank tried to charge me Rs. 35,000 for foreclosing my floating rate personal loan, calling it a 'Documentation Fee.' After filing the RBI Ombudsman complaint, they not only waived the fee but also issued a formal apology."</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Loan Amount: ₹10 Lakhs</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Saved: ₹35,000</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      N
                    </div>
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"I was trying to make a part-payment and they demanded 2%. Using the RBI guidelines cited by the experts, I escalated it to the Nodal officer and the illegal fees were removed instantly."</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Part-Payment: ₹3 Lakhs</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Saved: ₹6,000</span>
                  </div>
                </div>

              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  { q: "What are foreclosure charges on a personal loan?", a: "Foreclosure charges are fees levied by a bank or NBFC when you pay off your loan entirely before the end of the loan tenure." },
                  { q: "Can banks charge foreclosure penalties on floating rate loans?", a: "No, as per RBI guidelines, banks and NBFCs cannot charge foreclosure or pre-payment penalties on floating rate term loans sanctioned to individual borrowers." },
                  { q: "What is the difference between fixed and floating rate loans regarding foreclosure?", a: "For fixed-rate loans, lenders can charge a foreclosure fee (usually 2-5%). For floating-rate loans taken by individuals, RBI prohibits any foreclosure or part-payment charges." },
                  { q: "What are part-payment fees?", a: "Part-payment fees are charges applied when you pay a lump sum amount towards your loan principal without closing the loan entirely. Like foreclosure, these are banned on individual floating rate loans." },
                  { q: "How do banks illegally charge penalties on floating rate loans?", a: "Some lenders might disguise these fees under different names like 'processing fees for closure' or apply them by claiming the loan is for business purposes rather than personal." },
                  { q: "How can I calculate the true cost of foreclosure?", a: "Calculate the remaining principal, add the foreclosure fee percentage (if applicable legally, like on fixed loans), and add 18% GST on the fee to find the total closure amount." },
                  { q: "What is the RBI Ombudsman?", a: "The RBI Ombudsman is a senior official appointed by the Reserve Bank of India to redress customer complaints against deficiency in certain banking services, including illegal fee charges." },
                  { q: "How do I file a complaint if overcharged?", a: "First, complain to the bank's grievance redressal officer. If not resolved within 30 days, you can file a complaint online on the RBI's Complaint Management System (CMS) portal." },
                  { q: "Does pre-closing a personal loan affect my CIBIL score?", a: "Yes, pre-closing a loan positively impacts your CIBIL score in the long run as it reduces your overall debt burden, although there might be a temporary minor drop." },
                  { q: "Should I foreclose my personal loan early?", a: "If you have surplus funds and are on a high-interest loan (especially fixed rate), foreclosing can save you significant interest costs. However, check for penalties and do a cost-benefit analysis first." }
                ].map((faq, index) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-[#2E2E2E] mb-3">{faq.q}</h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-6">
                  Is your bank illegally charging you massive 'foreclosure penalties' to close your personal loan early?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Know the exact RBI rules and let our experts help you challenge their fees today. Don't pay a single rupee more than you legally owe.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-xl hover:shadow-[#1F5EFF]/30">
                  Challenge Bank Charges Now
                </Link>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided is for educational purposes based on RBI guidelines and does not constitute formal legal advice. Always review your specific loan agreement.
              </p>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4">Stop Paying Illegal Fees</h3>
                  <p className="text-gray-300 text-sm mb-6">Let our experts review your loan agreement and help you file an RBI complaint if you are being overcharged.</p>
                  <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 rounded-lg hover:bg-[#1F5EFF]/80 transition-colors text-sm">
                    Get Expert Help
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">Related Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/personal-loan-settlement" className="group flex items-center text-sm text-gray-700 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Personal Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/cibil-score-after-settlement" className="group flex items-center text-sm text-gray-700 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      CIBIL Score Impacts
                    </Link>
                  </li>
                  <li>
                    <Link href="/credit-card-settlement" className="group flex items-center text-sm text-gray-700 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Credit Card Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/harassment-by-recovery-agents" className="group flex items-center text-sm text-gray-700 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Stop Recovery Agents
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
