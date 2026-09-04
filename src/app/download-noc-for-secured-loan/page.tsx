import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Download NOC for Secured Loans Online | Home & Car Loan Guide',
  description: "Closed your home or car loan but don't have the time to visit the branch? Learn the step-by-step process to legally track and download your official NOC online.",
  alternates: {
    canonical: 'https://settleloan.in/download-noc-for-secured-loan',
  },
};

const tocItems = [
  { id: 'introduction', title: 'Why You Need an NOC' },
  { id: 'differences-digital-physical', title: 'Digital vs. Physical NOC' },
  { id: 'legal-implications', title: 'Legal Risks of Missing NOC' },
  { id: 'step-by-step', title: 'How to Download NOC Online' },
  { id: 'common-delays', title: 'Handling Bank Delays' },
  { id: 'duplicate-noc', title: 'Applying for a Duplicate NOC' },
  { id: 'track-status', title: 'Tracking NOC Status' },
  { id: 'success-stories', title: 'Success Stories' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function DownloadNOCPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloan.in/download-noc-for-secured-loan",
        "name": "Download NOC for Secured Loans Online",
        "description": "Closed your home or car loan but don't have the time to visit the branch? Learn the step-by-step process to legally track and download your official NOC online."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloan.in" },
          { "@type": "ListItem", "position": 2, "name": "Download NOC for Secured Loans", "item": "https://settleloan.in/download-noc-for-secured-loan" }
        ]
      },
      {
        "@type": "Article",
        "headline": "Download NOC for Secured Loans",
        "author": { "@type": "Organization", "name": "SettleLoan" },
        "publisher": { "@type": "Organization", "name": "SettleLoan", "logo": { "@type": "ImageObject", "url": "https://settleloan.in/logo.png" } }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Can I download my home loan NOC online?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, most major banks allow you to download your home loan NOC online through their net banking portals or dedicated loan management apps." } },
          { "@type": "Question", "name": "How to get a vehicle loan NOC online?", "acceptedAnswer": { "@type": "Answer", "text": "You can get a vehicle loan NOC online by logging into your bank's portal, selecting your closed vehicle loan account, and requesting the NOC certificate which usually arrives via email." } },
          { "@type": "Question", "name": "What should I do if there is a delay in NOC from the bank?", "acceptedAnswer": { "@type": "Answer", "text": "If there is a delay in NOC from the bank, you should file a formal complaint with the bank's grievance redressal officer and escalate to the RBI Ombudsman if not resolved within 30 days." } },
          { "@type": "Question", "name": "How can I track my loan closure NOC?", "acceptedAnswer": { "@type": "Answer", "text": "You can track your loan closure NOC status through the bank's customer service portal, using the service request number provided when you applied for the NOC." } },
          { "@type": "Question", "name": "Is a physical NOC mandatory?", "acceptedAnswer": { "@type": "Answer", "text": "While a digital NOC is valid, having a physical, stamped NOC is highly recommended for property and vehicle loans to present to the RTO or property registrar." } },
          { "@type": "Question", "name": "Are there charges for downloading an NOC?", "acceptedAnswer": { "@type": "Answer", "text": "Generally, the first issuance of an NOC is free of charge. However, duplicate copies might incur a nominal fee." } },
          { "@type": "Question", "name": "How long does it take to get an NOC after loan closure?", "acceptedAnswer": { "@type": "Answer", "text": "It typically takes 7 to 15 working days for the bank to process and dispatch the NOC after the final EMI clears." } },
          { "@type": "Question", "name": "Can the bank refuse an NOC?", "acceptedAnswer": { "@type": "Answer", "text": "A bank can only refuse an NOC if there are pending dues, unpaid bounce charges, or active co-borrower defaults linked to your account." } },
          { "@type": "Question", "name": "Do I need NOC for Form 35 (RTO)?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, to remove hypothecation from your vehicle's RC, you must submit the bank NOC along with Form 35 to your local RTO." } },
          { "@type": "Question", "name": "What happens if I lose my NOC?", "acceptedAnswer": { "@type": "Answer", "text": "If you lose your NOC, you must file an FIR and submit a written application to your bank along with an indemnity bond to get a duplicate NOC." } }
        ]
      },
      {
        "@type": "Product",
        "name": "NOC Download Guidance",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "104" },
        "review": [
          { "@type": "Review", "author": { "@type": "Person", "name": "Rahul M." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Finally got my home loan NOC online without visiting the branch." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Priya K." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Tracking my vehicle loan NOC was so easy thanks to these tips." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Amit V." }, "reviewRating": { "@type": "Rating", "ratingValue": "4" }, "reviewBody": "Helped me deal with a 2-month delay from my bank effectively." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Neha S." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Clear steps on how to escalate NOC delays to the RBI." }
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
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section (Dark & Centered) */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Secure Loan Closure
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Download <span className="text-[#1F5EFF]">NOC for Secured Loans</span> Online
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Closed your home or car loan but don't have the time to visit the branch? Learn the step-by-step process to legally track and download your official NOC online.
            </p>
            <Link href="#step-by-step" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Your NOC Today
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/loan-closure" className="hover:text-[#1F5EFF] transition-colors">Loan Closure</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Download NOC Online</span>
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
          
          {/* Left (TOC) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle (Article) */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Boxed Intro */}
            <div id="introduction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">Why You Need an NOC for Your Secured Loan</h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Getting an <strong className="text-[#2E2E2E]">online NOC download for a home loan</strong> or vehicle loan isn't just a formality—it is the ultimate legal proof that your debt is fully cleared. 
                  Without this document, the bank still technically holds rights over your asset. For a car loan, it means the hypothecation remains active at the RTO. For a home loan, you won't get your original property documents back.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Fortunately, navigating the <strong className="text-[#2E2E2E]">vehicle loan NOC online</strong> process has never been easier. We will guide you on how to bypass branch visits and handle the paperwork digitally.
                </p>
              </div>
            </div>

            {/* Digital vs Physical NOC */}
            <div id="differences-digital-physical" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Digital vs. Physical NOC: Which is Better?</h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  In today's digital-first banking environment, many borrowers wonder if a soft copy (PDF) of their NOC is sufficient, or if they need to procure a hard copy with a wet signature. The reality is that both have their specific use cases. 
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-black text-[#1F5EFF] text-xl mb-3">Digital NOC</h3>
                    <p className="text-gray-700 mb-4">A digital NOC is usually generated instantly and sent to your registered email address. It features a digital signature that can be verified electronically.</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full"></span><span className="text-gray-700">Valid for personal records.</span></li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full"></span><span className="text-gray-700">Can be submitted to credit bureaus.</span></li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full"></span><span className="text-gray-700">Accepted by some RTOs online.</span></li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h4 className="font-black text-[#1F5EFF] text-xl mb-3">Physical NOC</h4>
                    <p className="text-gray-700 mb-4">A physical NOC is dispatched via courier to your mailing address. It contains the official bank seal and the branch manager's wet signature.</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full"></span><span className="text-gray-700">Mandatory for property registrars.</span></li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full"></span><span className="text-gray-700">Required by traditional RTOs for Form 35.</span></li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full"></span><span className="text-gray-700">Vital for selling a financed asset.</span></li>
                    </ul>
                  </div>
                </div>
                <p className="text-lg leading-relaxed mt-6 text-gray-700">
                  <strong className="text-[#2E2E2E]">Pro Tip:</strong> Always secure a physical copy if your loan was secured against an immovable asset like a house or commercial property. 
                </p>
              </div>
            </div>

            {/* Legal Risks of Missing NOC */}
            <div id="legal-implications" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Legal Risks of Missing NOC</h2>
              <div className="bg-red-50 p-8 rounded-2xl mb-8 border border-red-100">
                <h3 className="text-xl font-black text-red-700 mb-4">Why You Cannot Ignore This Step</h3>
                <p className="text-lg leading-relaxed mb-6 text-red-900">
                  Many borrowers make the critical mistake of assuming that once the final EMI is deducted, their relationship with the bank automatically ends. Without formally obtaining the NOC, you remain exposed to severe legal and financial risks.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 w-6 h-6 rounded-full bg-red-200 text-red-700 flex items-center justify-center font-bold text-sm shrink-0">!</div>
                    <p className="text-red-900"><strong>Asset Unsalable:</strong> You cannot legally sell a car or a house if the hypothecation or lien is not lifted. A buyer's bank will reject the loan application immediately upon seeing the active lien.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 w-6 h-6 rounded-full bg-red-200 text-red-700 flex items-center justify-center font-bold text-sm shrink-0">!</div>
                    <p className="text-red-900"><strong>Insurance Complications:</strong> In the event of a total loss (like an accident or fire), the insurance payout will be directed to the financier (the bank) rather than you, because their name remains on the records.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 w-6 h-6 rounded-full bg-red-200 text-red-700 flex items-center justify-center font-bold text-sm shrink-0">!</div>
                    <p className="text-red-900"><strong>Zombie Charges:</strong> Unnotified bounce charges or maintenance fees might continue to accrue in the background. Years later, you could be hit with a massive bill when applying for a new loan.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Blue Important Box */}
            <div id="step-by-step" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How to Download NOC Online</h2>
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h3 className="text-xl font-black text-[#1F5EFF] mb-4">Prerequisites for Digital Download</h3>
                <p className="text-lg leading-relaxed mb-6 text-gray-800">Before you initiate the request, ensure you have these ready:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">Your Loan Account Number (LAN).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">Registered mobile number for OTP verification.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">Clearance of all pending dues, including bounce charges.</span>
                  </li>
                </ul>
              </div>

              {/* Numbered Steps */}
              <div className="space-y-12 mt-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-black text-[#2E2E2E] mb-3">Log into the Portal</h3>
                    <p className="text-lg leading-relaxed text-gray-700">Access your bank's net banking portal or official mobile application and navigate to the 'Loans' or 'Service Requests' section.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-black text-[#2E2E2E] mb-3">Initiate Closure Request</h3>
                    <p className="text-lg leading-relaxed text-gray-700">Select 'Download NOC' or 'Request Closure Certificate'. Make sure to verify your email address before submitting, as the PDF will be sent there.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-black text-[#2E2E2E] mb-3">Download and Verify</h3>
                    <p className="text-lg leading-relaxed text-gray-700">Once generated, download the NOC. Check for the bank manager's digital signature, date of issue, and correct property/vehicle details.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Red Warning Box */}
            <div id="common-delays" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Handling Delay in NOC from Bank</h2>
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h3 className="text-xl font-black text-red-700 mb-4">Warning: Do Not Ignore Delays</h3>
                <p className="text-lg leading-relaxed mb-0 text-red-900">
                  A <strong className="text-red-900">delay in NOC from bank</strong> could indicate a systemic error or hidden outstanding charges. According to RBI rules, banks must release original property documents and issue the NOC within 30 days of full repayment. If they fail, they are liable to pay you a penalty of ₹5,000 per day of delay.
                </p>
              </div>
            </div>

            {/* Duplicate NOC */}
            <div id="duplicate-noc" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Applying for a Duplicate NOC</h2>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Losing your original NOC can be stressful, especially if you need it urgently for an asset transfer. Banks have a strict protocol for issuing a duplicate NOC to prevent fraudulent claims.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 bg-[#1F5EFF]/10 text-[#1F5EFF] rounded-lg flex items-center justify-center font-bold mb-3">1</div>
                    <h3 className="font-bold text-[#2E2E2E] mb-2">File an FIR</h3>
                    <p className="text-sm text-gray-600">Register a police complaint reporting the loss of the original document. Get a stamped copy of the FIR.</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 bg-[#1F5EFF]/10 text-[#1F5EFF] rounded-lg flex items-center justify-center font-bold mb-3">2</div>
                    <h4 className="font-bold text-[#2E2E2E] mb-2">Execute an Indemnity Bond</h4>
                    <p className="text-sm text-gray-600">Draft a legally binding indemnity bond on stamp paper, protecting the bank against misuse of the duplicate.</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 bg-[#1F5EFF]/10 text-[#1F5EFF] rounded-lg flex items-center justify-center font-bold mb-3">3</div>
                    <h4 className="font-bold text-[#2E2E2E] mb-2">Submit Request</h4>
                    <p className="text-sm text-gray-600">Visit your home branch with the FIR, indemnity bond, identity proof, and pay the duplicate issuance fee (usually ₹500 - ₹1000).</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  Once submitted, the bank undergoes a verification process. The duplicate NOC will typically be issued within 10 to 14 working days. It will explicitly carry a "Duplicate" watermark.
                </p>
              </div>
            </div>

            {/* Gray Insight Box */}
            <div id="track-status" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How to Track Loan Closure NOC</h2>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  If you applied manually or the digital copy hasn't arrived, you must <strong className="text-[#2E2E2E]">track loan closure NOC</strong> status proactively. Use the Service Request (SR) Number provided during application on the bank's 'Track Status' page.
                </p>
                
                {/* 4-Grid Info Boxes inside Insight */}
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Status: Processing</h3>
                    <p className="text-gray-700">The bank is auditing your account for zero balance.</p>
                  </div>
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Status: Dispatched</h4>
                    <p className="text-gray-700">Courier tracking number should be active. Usually takes 3-5 days.</p>
                  </div>
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Status: On Hold</h4>
                    <p className="text-gray-700">Unpaid penalties detected. Clear them to release the NOC.</p>
                  </div>
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Status: Delivered</h4>
                    <p className="text-gray-700">NOC sent to registered address or email.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review / Success Stories */}
            <div id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Borrower Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Review Card 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      VK
                    </div>
                    <div>
                      <div className="font-black text-lg text-[#2E2E2E]">Vikram K.</div>
                      <div className="flex text-yellow-400">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-6">"Got my home loan NOC entirely online. Escaped the long branch queues!"</p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">Loan: ₹45L</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Closed in 7 Days</span>
                  </div>
                </div>

                {/* Review Card 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      SR
                    </div>
                    <div>
                      <div className="font-black text-lg text-[#2E2E2E]">Sanya R.</div>
                      <div className="flex text-yellow-400">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-6">"Tracking the NOC online saved me so much hassle. I knew exactly when it was dispatched."</p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">Loan: ₹8L</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Car Loan Cleared</span>
                  </div>
                </div>

              </div>
            </div>

            {/* FAQs */}
            <div id="faq" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-black text-xl text-[#2E2E2E] outline-none flex justify-between items-center">
                    Can I download my home loan NOC online?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700">Yes, most major banks allow you to download your home loan NOC online through their net banking portals or dedicated loan management apps.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-black text-xl text-[#2E2E2E] outline-none flex justify-between items-center">
                    How to get a vehicle loan NOC online?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700">You can get a vehicle loan NOC online by logging into your bank's portal, selecting your closed vehicle loan account, and requesting the NOC certificate which usually arrives via email.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-black text-xl text-[#2E2E2E] outline-none flex justify-between items-center">
                    What should I do if there is a delay in NOC from the bank?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700">If there is a delay in NOC from the bank, you should file a formal complaint with the bank's grievance redressal officer and escalate to the RBI Ombudsman if not resolved within 30 days.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-black text-xl text-[#2E2E2E] outline-none flex justify-between items-center">
                    How can I track my loan closure NOC?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700">You can track your loan closure NOC status through the bank's customer service portal, using the service request number provided when you applied for the NOC.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-black text-xl text-[#2E2E2E] outline-none flex justify-between items-center">
                    Is a physical NOC mandatory?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700">While a digital NOC is valid, having a physical, stamped NOC is highly recommended for property and vehicle loans to present to the RTO or property registrar.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-black text-xl text-[#2E2E2E] outline-none flex justify-between items-center">
                    Are there charges for downloading an NOC?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700">Generally, the first issuance of an NOC is free of charge. However, duplicate copies might incur a nominal fee.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-black text-xl text-[#2E2E2E] outline-none flex justify-between items-center">
                    How long does it take to get an NOC after loan closure?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700">It typically takes 7 to 15 working days for the bank to process and dispatch the NOC after the final EMI clears.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-black text-xl text-[#2E2E2E] outline-none flex justify-between items-center">
                    Can the bank refuse an NOC?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700">A bank can only refuse an NOC if there are pending dues, unpaid bounce charges, or active co-borrower defaults linked to your account.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-black text-xl text-[#2E2E2E] outline-none flex justify-between items-center">
                    Do I need NOC for Form 35 (RTO)?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700">Yes, to remove hypothecation from your vehicle's RC, you must submit the bank NOC along with Form 35 to your local RTO.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-black text-xl text-[#2E2E2E] outline-none flex justify-between items-center">
                    What happens if I lose my NOC?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700">If you lose your NOC, you must file an FIR and submit a written application to your bank along with an indemnity bond to get a duplicate NOC.</p>
                </details>
              </div>
            </div>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6">Struggling with Bank Delays?</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  If your bank is withholding your NOC or property documents beyond 30 days, we can help you file a grievance and claim your RBI penalty.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform text-lg shadow-xl">
                  Get Expert Legal Help Now
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The steps outlined in this guide are for informational purposes. The exact portal layout and timeline may vary slightly depending on your bank's internal policies.
              </p>
            </div>
          </article>

          {/* Right (Sidebar) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              {/* Card 1 (Dark CTA) */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10">
                  <div className="text-2xl font-black mb-4">Bank Refusing NOC?</div>
                  <p className="text-gray-300 mb-6">Let our legal experts send a strong legal notice to release your documents instantly.</p>
                  <Link href="/services/legal-notice" className="inline-block bg-[#1F5EFF] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors w-full">
                    Consult an Expert
                  </Link>
                </div>
              </div>

              {/* Card 2 (White Resources) */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <div className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Helpful Resources
                </div>
                <ul className="space-y-4">
                  <li>
                    <Link href="/rbi-guidelines-loan-closure" className="flex items-center text-gray-700 hover:text-[#1F5EFF] transition-colors group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI Loan Closure Rules
                    </Link>
                  </li>
                  <li>
                    <Link href="/rto-form-35-guide" className="flex items-center text-gray-700 hover:text-[#1F5EFF] transition-colors group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RTO Form 35 Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/duplicate-noc-application" className="flex items-center text-gray-700 hover:text-[#1F5EFF] transition-colors group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Duplicate NOC Application
                    </Link>
                  </li>
                  <li>
                    <Link href="/rbi-ombudsman-complaint" className="flex items-center text-gray-700 hover:text-[#1F5EFF] transition-colors group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI Ombudsman Complaint
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
