import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Receive Documents After Loan Pre-Closure | RBI Rules",
  description: "Pre-closed your home loan but the bank is holding your original property documents hostage? Claim ₹5000/day penalty under new RBI rules.",
  alternates: {
    canonical: "https://settleloans.in/receive-documents-after-loan-pre-closure",
  },
};

export default function ReceiveDocumentsPreClosurePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/receive-documents-after-loan-pre-closure#webpage",
        "url": "https://settleloans.in/receive-documents-after-loan-pre-closure",
        "name": "Receive Documents After Loan Pre-Closure | RBI Rules",
        "description": "Pre-closed your home loan but the bank is holding your original property documents hostage? Claim ₹5000/day penalty under new RBI rules.",
        "breadcrumb": { "@id": "https://settleloans.in/receive-documents-after-loan-pre-closure#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/receive-documents-after-loan-pre-closure#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://settleloans.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Receive Documents After Pre-Closure",
            "item": "https://settleloans.in/receive-documents-after-loan-pre-closure"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/receive-documents-after-loan-pre-closure#article",
        "headline": "Receive Documents After Loan Pre-Closure | RBI Rules",
        "description": "Learn the legal steps to force your bank to return your property documents and claim the ₹5,000 per day RBI penalty after home loan pre-closure.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Legal Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-07-23",
        "dateModified": "2024-07-23",
        "mainEntityOfPage": { "@id": "https://settleloans.in/receive-documents-after-loan-pre-closure#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/receive-documents-after-loan-pre-closure#product",
        "name": "Property Document Recovery Legal Notice",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert legal services to compel banks to return original property documents after loan pre-closure and claim RBI-mandated compensation.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1024",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh M." },
            "datePublished": "2024-01-15",
            "reviewBody": "I pre-closed my loan but the bank kept delaying giving back my papers. One legal notice from SettleLoans citing RBI property documents return time, and I got them in a week.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anita S." },
            "datePublished": "2024-02-10",
            "reviewBody": "The bank claimed my original papers after pre closure were missing. SettleLoans stepped in, got duplicate papers arranged by the bank, and got me the penalty.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram T." },
            "datePublished": "2024-03-05",
            "reviewBody": "I didn't know about the ₹5000/day penalty until I read about it here. The legal notice worked like magic.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Deepa K." },
            "datePublished": "2024-04-20",
            "reviewBody": "Excellent service. My bank lost property documents, and I was terrified. The SettleLoans team handled it entirely.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Suresh B." },
            "datePublished": "2024-05-12",
            "reviewBody": "They took away my stress completely. Professional lawyers who know exactly how to deal with bank delays.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/receive-documents-after-loan-pre-closure#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the RBI property documents return time after pre-closure?",
            "acceptedAnswer": { "@type": "Answer", "text": "As per RBI guidelines, banks must return your original property documents within 30 days of the full repayment or pre-closure of your loan account." }
          },
          {
            "@type": "Question",
            "name": "How do I get my original papers after pre closure?",
            "acceptedAnswer": { "@type": "Answer", "text": "Once you pay the pre-closure amount, the bank is legally obligated to release the documents within 30 days. If they fail, you can send a legal notice." }
          },
          {
            "@type": "Question",
            "name": "What happens if the bank lost property documents?",
            "acceptedAnswer": { "@type": "Answer", "text": "If the bank loses your documents, they must bear all costs to recreate them and are liable to pay a ₹5,000/day penalty after an additional 30-day grace period." }
          },
          {
            "@type": "Question",
            "name": "Can I claim a penalty for delayed property documents return?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, if the delay exceeds 30 days from pre-closure, the bank must pay a penalty of ₹5,000 for every single day of delay." }
          },
          {
            "@type": "Question",
            "name": "Do I have to visit the original loan branch to collect the papers?",
            "acceptedAnswer": { "@type": "Answer", "text": "No, you can ask the bank to make the documents available at any branch that is convenient for you." }
          },
          {
            "@type": "Question",
            "name": "What if the bank refuses to pay the penalty?",
            "acceptedAnswer": { "@type": "Answer", "text": "You can escalate the matter to the RBI Ombudsman or file a complaint in consumer court for deficiency of service, along with the legal notice." }
          },
          {
            "@type": "Question",
            "name": "Does the 30-day rule apply to all banks?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, the 30-day mandate applies to all commercial banks, co-operative banks, NBFCs, and HFCs operating in India." }
          },
          {
            "@type": "Question",
            "name": "Can the bank hold my papers if I have a pending credit card due?",
            "acceptedAnswer": { "@type": "Answer", "text": "No, unless there is a specific legal cross-collateralization agreement, a bank cannot hold the documents of a closed secured loan for an unsecured loan." }
          },
          {
            "@type": "Question",
            "name": "What should I write in the legal notice to the bank?",
            "acceptedAnswer": { "@type": "Answer", "text": "Your legal notice should cite the specific RBI circular regarding property document release and explicitly demand the return of papers and calculation of the daily penalty." }
          },
          {
            "@type": "Question",
            "name": "Is there a specific format for the No Dues Certificate (NDC)?",
            "acceptedAnswer": { "@type": "Answer", "text": "While there isn't a strict universal format, the NDC must clearly state that the loan is fully repaid and there are no outstanding dues against that specific loan account." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "intro-pre-closure-hurdles", title: "Pre-Closure Hurdles" },
    { id: "rbi-return-time", title: "RBI Property Documents Return Time" },
    { id: "penalty-claim", title: "Claiming the ₹5,000/Day Penalty" },
    { id: "bank-lost-documents", title: "When the Bank Lost Property Documents" },
    { id: "myth-of-general-lien", title: "The General Lien Myth" },
    { id: "how-to-recover", title: "Steps to Recover Original Papers" },
    { id: "success-stories", title: "Success Stories" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Property Rights Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Pre-Closed Your Loan? <span className="text-[#1F5EFF]">Claim ₹5,000/Day</span> For Delayed Papers
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Pre-closed your home loan but the bank is holding your original property documents hostage? Claim ₹5000/day penalty under new RBI rules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Send Legal Notice for Documents
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li className="font-bold text-[#2E2E2E]">Receive Documents After Pre-Closure</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">

          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Column: Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

            <section id="intro-pre-closure-hurdles" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Hurdle of Retrieving Papers After Pre-Closure
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Pre-closing a home loan takes massive financial effort. You clear the entire outstanding balance ahead of time, get the No Dues Certificate, and rightfully expect to receive your <strong>original papers after pre closure</strong>.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  However, banks often create unnecessary hurdles. You might hear excuses like "the central hub is processing it," or they might try to force you into clearing an unrelated credit card debt. Meanwhile, your property remains unsellable and unmortgageable without the title deed.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The Reserve Bank of India (RBI) has noted these rampant delays and put forth an iron-clad directive to ensure a strict <strong>property documents return time</strong>.
                </p>
              </div>
            </section>

            <section id="rbi-return-time" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                RBI Property Documents Return Time
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The RBI is crystal clear on the maximum time a bank can take to release your documents. 
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">The 30-Day Limit</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Banks, HFCs, and NBFCs must hand over the original property documents within <strong>30 days</strong> of the full loan repayment or pre-closure.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Choice of Branch</h4>
                  <p className="text-gray-700 leading-relaxed">
                    You have the right to collect your original papers at any branch that is convenient for you, not just the branch that originally disbursed the loan.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>Not Optional:</strong> This is a mandatory regulation, not a request. Any deviation from the 30-day timeline exposes the bank to heavy penalties.
                </p>
              </div>
            </section>

            <section id="penalty-claim" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Claiming the ₹5,000/Day Penalty
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If the bank fails to adhere to the property documents return time, the RBI has mandated a strict financial penalty that they must pay directly to the borrower.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">How the Penalty Works</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  Banks are obligated to automatically compensate the borrower without the need for a court order.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">The compensation is exactly <strong>₹5,000 for each day of delay</strong> beyond the initial 30 days.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">This applies to all regulated entities, whether it's a private bank, public bank, or housing finance company.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">The clock starts ticking from the 31st day after your pre-closure payment was credited.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="bank-lost-documents" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                What Happens if the Bank Lost Property Documents?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Sometimes the delay is because the <strong>bank lost property documents</strong> entirely. This is a severe lapse in their service, and the RBI has specific rules for this scenario.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Grace Period for Re-creation</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The bank gets an additional 30 days (60 days total from pre-closure) to resolve the issue before the ₹5,000/day penalty begins.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Full Assistance Required</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The bank cannot simply tell you to go to the registrar. They must actively assist in obtaining duplicate or certified copies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Financial Liability</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The bank must bear all costs associated with recreating the documents, including newspaper notices and legal fees, alongside paying the daily penalty.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="myth-of-general-lien" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The "General Lien" Myth
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Banks often try to use the property papers of a closed home loan as leverage to force you to pay off a separate unsecured loan, citing the "Right of General Lien".
              </p>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Why This is Illegal</h4>
                <p className="text-red-900 leading-relaxed">
                  The courts have established that a bank cannot arbitrarily retain title deeds given specifically as security for a housing loan to cover an unrelated, unsecured loan like a credit card, unless there is a specific cross-collateralization agreement in place.
                </p>
              </div>
            </section>

            <section id="how-to-recover" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Steps to Recover Original Papers After Pre Closure
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Don't waste time arguing with customer service. Follow a strict legal escalation path to get your documents and claim your compensation.
              </p>
              
              <div className="bg-white p-8 border border-[#DEDEDE] rounded-2xl shadow-sm mb-8">
                <h4 className="text-xl font-bold mb-4 text-[#2E2E2E] underline">Action Plan</h4>
                <ul className="text-sm space-y-3 font-medium list-none text-gray-700">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>1. Send a Legal Notice:</strong> Hire a lawyer to send a formal demand notice to the Grievance Redressal Officer citing the RBI penalty guidelines.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>2. RBI Ombudsman:</strong> If 30 days pass with no resolution, file a complaint on the RBI CMS portal attaching the legal notice and proof of pre-closure.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>3. Consumer Court:</strong> File for deficiency in service, claiming damages for the delay and any resulting financial loss.</li>
                </ul>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Success Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RM
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Rajesh M.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "I pre-closed my loan but the bank kept delaying giving back my papers. One legal notice from SettleLoans citing RBI property documents return time, and I got them in a week."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Loan Amount: ₹50,00,000</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Settled Amount: ₹25,00,000</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      AS
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Anita S.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "The bank claimed my original papers after pre closure were missing. SettleLoans stepped in, got duplicate papers arranged by the bank, and got me the penalty."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Loan Amount: ₹80,00,000</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Settled Amount: ₹45,00,000</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {jsonLd["@graph"].find((item: any) => item["@type"] === "FAQPage")?.mainEntity?.map((faq: any, index: number) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">{faq.name}</h4>
                    <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <h3 className="text-3xl font-black mb-6 relative z-10">Don't Let Them Hold Your Property Hostage</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Pre-closed your home loan but the bank is holding your original property documents hostage? Use the latest RBI guidelines to force them to return your papers and claim ₹5,000 per day in compensation.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Send Legal Notice to Bank
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The legal information provided is for educational purposes and should not be construed as formal legal advice. Always consult with a practicing advocate regarding specific facts of your case.
              </p>
            </div>

          </article>

          {/* Right Column: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">Papers Still Pending?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  Every day over 30 days is a ₹5,000 penalty for the bank. Claim your compensation today.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] w-full py-3 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors relative z-10">
                  Consult a Lawyer
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Legal Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/rbi-guidelines-on-loan-recovery-agents" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI Guidelines on Recovery
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-file-complaint-against-recovery-agents" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Filing Police Complaints
                    </Link>
                  </li>
                  <li>
                    <Link href="/difference-between-civil-and-criminal-liability-in-loans" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Civil vs Criminal Liability
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
