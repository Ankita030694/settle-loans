import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Bank Delaying Original Property Documents After Home Loan Settlement: RBI Rules",
  description: "Bank not returning your original property papers after home loan settlement? Learn about the RBI rule mandating a ₹5,000/day penalty for delays over 30 days.",
  alternates: {
    canonical: "https://settleloans.in/bank-delaying-original-property-documents-after-home-loan-settlement-rbi-rules",
  },
};

export default function DelayedPropertyDocumentsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/bank-delaying-original-property-documents-after-home-loan-settlement-rbi-rules#webpage",
        "url": "https://settleloans.in/bank-delaying-original-property-documents-after-home-loan-settlement-rbi-rules",
        "name": "Bank Delaying Original Property Documents After Home Loan Settlement: RBI Rules",
        "description": "A post-settlement legal guide for borrowers who paid their negotiated home loan settlement, but the bank is refusing to release the original Sale Deed or Title papers.",
        "breadcrumb": { "@id": "https://settleloans.in/bank-delaying-original-property-documents-after-home-loan-settlement-rbi-rules#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/bank-delaying-original-property-documents-after-home-loan-settlement-rbi-rules#breadcrumb",
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
            "name": "Delayed Property Documents",
            "item": "https://settleloans.in/bank-delaying-original-property-documents-after-home-loan-settlement-rbi-rules"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/bank-delaying-original-property-documents-after-home-loan-settlement-rbi-rules#article",
        "headline": "Bank Delaying Original Property Documents After Home Loan Settlement: RBI Rules",
        "description": "Learn the legal steps to force your bank to return your property documents and claim the ₹5,000 per day RBI penalty.",
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
        "datePublished": "2024-07-10",
        "dateModified": "2024-07-10",
        "mainEntityOfPage": { "@id": "https://settleloans.in/bank-delaying-original-property-documents-after-home-loan-settlement-rbi-rules#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/bank-delaying-original-property-documents-after-home-loan-settlement-rbi-rules#product",
        "name": "Property Document Recovery Legal Notice",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert legal services to compel banks to return original property documents and claim RBI-mandated compensation.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "890",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Manoj K." },
            "datePublished": "2024-01-20",
            "reviewBody": "My bank made me run around for 3 months after closing my loan. SettleLoans sent a legal notice citing the RBI rule, and I got my papers in 7 days plus compensation.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sunita D." },
            "datePublished": "2024-02-14",
            "reviewBody": "They lost my original sale deed and tried to hide it. The legal team helped me file a complaint, forcing them to recreate it and pay the ₹5,000/day penalty.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Arvind R." },
            "datePublished": "2024-03-30",
            "reviewBody": "I settled my loan, but the branch manager kept saying the documents were at the central hub. One legal notice changed their tune immediately.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Geeta P." },
            "datePublished": "2024-04-18",
            "reviewBody": "I didn't know about the ₹5,000 per day RBI rule. SettleLoans not only got my papers back but helped me claim a significant penalty amount.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
             "@type": "Review",
             "author": { "@type": "Person", "name": "Rahul V." },
             "datePublished": "2024-05-22",
             "reviewBody": "Very effective service. The bank was holding my papers hostage to force me to buy their insurance product. The legal intervention shut that down.",
             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/bank-delaying-original-property-documents-after-home-loan-settlement-rbi-rules#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does a bank have to return property documents after loan closure?",
            "acceptedAnswer": { "@type": "Answer", "text": "According to the latest RBI directives, banks and NBFCs must release all original movable/immovable property documents within 30 days of full repayment or settlement of the loan account." }
          },
          {
            "@type": "Question",
            "name": "What is the penalty if the bank delays returning my property papers?",
            "acceptedAnswer": { "@type": "Answer", "text": "If the delay exceeds 30 days, the lender must compensate the borrower at the rate of ₹5,000 for each day of delay." }
          },
          {
            "@type": "Question",
            "name": "Does the RBI penalty rule apply if I settled the loan instead of full repayment?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Whether the account is closed through regular full repayment or a negotiated One Time Settlement (OTS), the bank must return the documents within 30 days of account closure." }
          },
          {
            "@type": "Question",
            "name": "What should I do if the bank claims they have lost my original property documents?",
            "acceptedAnswer": { "@type": "Answer", "text": "If the bank loses the papers, they must assist you in obtaining duplicate or certified copies, bear all associated costs, and pay the ₹5,000/day penalty for the delayed period." }
          },
          {
            "@type": "Question",
            "name": "Do I have to collect the documents from the branch where I took the loan?",
            "acceptedAnswer": { "@type": "Answer", "text": "The RBI gives you the option to collect the documents either from the banking outlet where the loan account was serviced or any other office of the lender as per your preference." }
          },
          {
            "@type": "Question",
            "name": "How do I claim the ₹5,000 per day penalty?",
            "acceptedAnswer": { "@type": "Answer", "text": "You must send a formal legal demand notice to the bank's grievance redressal officer citing the RBI circular. If they refuse, you can escalate it to the RBI Ombudsman." }
          },
          {
            "@type": "Question",
            "name": "Can the bank refuse to return my documents because I have another unsecured loan with them?",
            "acceptedAnswer": { "@type": "Answer", "text": "Unless the bank has legally exercised their 'Right of General Lien' and the property was formally cross-collateralized for the other loan, they cannot legally hold documents of a closed secured loan for an unrelated unsecured default." }
          },
          {
            "@type": "Question",
            "name": "What if the primary borrower is deceased?",
            "acceptedAnswer": { "@type": "Answer", "text": "In the case of the demise of the sole borrower or joint borrowers, lenders must have a clear procedure for returning original property documents to the legal heirs." }
          },
          {
            "@type": "Question",
            "name": "Does this rule apply to NBFCs and Housing Finance Companies (HFCs)?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, the RBI circular regarding the release of property documents and the associated penalty applies to all Commercial Banks, Co-operative Banks, NBFCs, and HFCs." }
          },
          {
            "@type": "Question",
            "name": "Why do banks delay returning original documents?",
            "acceptedAnswer": { "@type": "Answer", "text": "Common reasons include administrative inefficiency, documents being misplaced in central storage hubs, or unethical branch managers using them as leverage to cross-sell other products." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "the-post-settlement-trap", title: "The Post-Settlement Trap" },
    { id: "rbi-30-day-mandate", title: "The RBI 30-Day Mandate" },
    { id: "the-penalty", title: "Claiming the ₹5,000/Day Penalty" },
    { id: "lost-documents", title: "What if the Bank Lost Your Papers?" },
    { id: "general-lien-myth", title: "The 'General Lien' Myth" },
    { id: "actionable-steps", title: "Steps to Recover Your Documents" },
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
        <section className="w-full bg-[#2E2E2E] pt-16 pb-10 md:pt-28 md:pb-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Property Rights Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Bank Delaying Original Property Documents? <span className="text-[#1F5EFF]">Know RBI Rules</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              A complete guide for borrowers whose home loan is closed or settled, but the bank refuses to release the original property papers. Learn how to claim the RBI penalty.
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
                <li className="font-bold text-[#2E2E2E]">Delayed Property Documents</li>
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

            <section id="the-post-settlement-trap" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Post-Settlement Trap
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Negotiating a One Time Settlement (OTS) for a home loan or Loan Against Property (LAP) is incredibly stressful. You finally arrange the funds, pay the settlement amount, and receive the No Dues Certificate (NDC). You expect to walk into the bank and walk out with your original Sale Deed.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  However, thousands of borrowers face a sudden wall of excuses. Branch managers claim the documents are "stuck in the central hub," "pending final audit," or simply missing. Sometimes, they hold the papers hostage, trying to force you to clear a separate, unrelated unsecured loan like a credit card debt.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Without the original title documents, your property is effectively paralyzed. You cannot sell it, transfer it, or mortgage it again. Recognizing this widespread harassment, the Reserve Bank of India (RBI) introduced strict, heavily punitive guidelines to protect borrowers.
                </p>
              </div>
            </section>

            <section id="rbi-30-day-mandate" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The RBI 30-Day Mandate for Document Release
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The RBI issued a watershed circular regarding the <strong>"Release of Movable/Immovable Property Documents on Repayment/Settlement of Personal Loans"</strong>. This directive leaves no room for ambiguity.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">The Core Rule</h4>
                  <p className="text-gray-700 leading-relaxed">
                    All Regulated Entities (Banks, NBFCs, and HFCs) are mandated to release all original movable or immovable property documents within <strong>30 days</strong> of full repayment or settlement of the loan account.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Borrower's Choice of Location</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The borrower gets to choose where to collect the papers. You can collect them from the branch where you serviced the loan, or request the bank to send them to another branch closer to you.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>The Settlement Applicability:</strong> A common lie told by banks is that this rule only applies to "full repayment" and not "settlements." This is false. The RBI circular explicitly states the rule applies upon <strong>Repayment / Settlement</strong> of the loan.
                </p>
              </div>
            </section>

            <section id="the-penalty" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The ₹5,000 Per Day RBI Penalty
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                To give the mandate teeth, the RBI introduced a severe financial penalty for banks that act carelessly with borrower documents. 
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Mandatory Compensation</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  If there is a delay in releasing the original property documents beyond the 30-day window, the bank is legally obligated to compensate the borrower.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">The compensation amount is fixed at <strong>₹5,000 for each day of delay</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">This penalty must be paid by the bank without the borrower having to run to consumer courts; it is a regulatory requirement.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">The 30 days are counted from the date the final settlement or repayment amount was credited to the bank.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="lost-documents" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                What if the Bank Lost Your Property Papers?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                One of the most terrifying scenarios for a property owner is the bank admitting they have lost the original title deed. If the bank has lost your documents, their liability increases significantly under the RBI rules.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Extended Timeline</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      In case of loss or damage, the bank gets an additional 30 days (total 60 days) to resolve the issue before the ₹5,000/day penalty kicks in.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Bank's Liability for Re-creation</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The bank cannot just apologize. They are legally mandated to assist you in obtaining duplicate or certified copies of the lost property documents from the registrar's office.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Bank Bears All Costs</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The bank must bear all associated costs for recreating these documents, including legal fees, publication of public notices in newspapers, and stamp duty.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="general-lien-myth" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The "General Lien" Myth: Holding Papers for Unsecured Loans
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                A frequent, aggressive tactic used by banks is refusing to release property papers of a settled home loan because the borrower has an outstanding credit card or personal loan with the same bank. They claim the "Right of General Lien" under Section 171 of the Indian Contract Act.
              </p>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Why This is Often Illegal</h4>
                <p className="text-red-900 leading-relaxed">
                  Courts have repeatedly ruled that a bank cannot arbitrarily retain title deeds given specifically as security for a housing loan to cover an unrelated, unsecured loan. Unless there is a specific, signed "Letter of Continuity" or cross-collateralization agreement explicitly linking the property to the credit card, the bank's retention of documents is illegal and amounts to a deficiency in service.
                </p>
              </div>
            </section>

            <section id="actionable-steps" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Legal Steps to Recover Your Documents
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Verbal arguments with the branch manager will rarely solve this. You must establish a legal paper trail to enforce the RBI penalty.
              </p>
              
              <div className="bg-white p-8 border border-[#DEDEDE] rounded-2xl shadow-sm mb-8">
                <h4 className="text-xl font-bold mb-4 text-[#2E2E2E] underline">The Escalation Matrix</h4>
                <ul className="text-sm space-y-3 font-medium list-none text-gray-700">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>1. Formal Legal Notice:</strong> Have an advocate send a legal notice to the bank's Nodal Officer referencing the exact RBI Circular (RBI/2023-24/60) and demanding immediate document release and calculation of the ₹5,000/day penalty.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>2. RBI Ombudsman:</strong> If the bank does not comply within 30 days of your notice, file a complaint on the RBI CMS portal attaching the legal notice and proof of loan closure.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>3. Consumer Court:</strong> You can file a deficiency of service case in the Consumer Forum seeking massive damages for mental agony and loss of opportunity (e.g., if you couldn't sell the house).</li>
                </ul>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Client Success Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      MK
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Manoj K.</h4>
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
                    "My bank made me run around for 3 months after closing my loan. SettleLoans sent a legal notice citing the RBI rule, and I got my papers in 7 days plus compensation."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Delay: 90 Days</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Papers + Penalty Recovered</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      SD
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Sunita D.</h4>
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
                    "They lost my original sale deed and tried to hide it. The legal team helped me file a complaint, forcing them to recreate it and pay the ₹5,000/day penalty."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Issue: Lost Documents</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Bank Recreated & Paid</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {jsonLd["@graph"].find(item => item["@type"] === "FAQPage")?.mainEntity.map((faq: any, index: number) => (
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
                Did you settle your home loan but the bank is holding your original property documents hostage? Use the latest RBI guidelines to force them to return your papers and claim ₹5,000 per day in compensation.
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
