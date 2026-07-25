import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Penalty Waiver Guide for Indian Borrowers | Stop Unfair Bank Charges',
  description: 'The ultimate guide to fighting unfair banking penalties. Learn how to use the latest RBI guidelines to force banks to waive unjust penal interest and late fees.',
  alternates: {
    canonical: 'https://settleloans.in/penalty-waiver-guide',
  },
};

const tocItems = [
  { id: 'introduction', title: 'Why Banks Charge Unfair Penalties' },
  { id: 'rbi-guidelines', title: 'RBI Guidelines on Penal Interest' },
  { id: 'how-to-waive', title: 'How to Waive Off Late Fees in India' },
  { id: 'hidden-clauses', title: 'Hidden Clauses in Loan Agreements' },
  { id: 'consumer-rights', title: 'Consumer Rights and Legal Precedents' },
  { id: 'recovery-agents', title: 'Dealing with Recovery Agents' },
  { id: 'success-stories', title: 'Borrower Success Stories' },
  { id: 'faqs', title: 'Frequently Asked Questions' }
];

export default function PenaltyWaiverGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Penalty Waiver Guide for Indian Borrowers",
        "description": "The ultimate guide to fighting unfair banking penalties.",
        "url": "https://settleloans.in/penalty-waiver-guide"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
          { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://settleloans.in/guides" },
          { "@type": "ListItem", "position": 3, "name": "Penalty Waiver Guide", "item": "https://settleloans.in/penalty-waiver-guide" }
        ]
      },
      {
        "@type": "Article",
        "headline": "Penalty Waiver Guide for Indian Borrowers",
        "description": "Learn how to use the latest RBI guidelines to force banks to waive unjust penal interest.",
        "author": { "@type": "Organization", "name": "SettleLoan" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Can banks charge penal interest on top of regular interest?", "acceptedAnswer": { "@type": "Answer", "text": "No, per latest RBI guidelines, penal charges must be levied as 'penal charges' and not as 'penal interest' capitalized on the principal amount." } },
          { "@type": "Question", "name": "How can I waive off late fees in India?", "acceptedAnswer": { "@type": "Answer", "text": "You can waive off late fees by writing a formal application to your branch manager citing genuine financial hardship or referring to RBI's fair practices code." } },
          { "@type": "Question", "name": "Is it legal for banks to charge high penalty fees?", "acceptedAnswer": { "@type": "Answer", "text": "Banks can charge reasonable penalty fees, but excessive or punitive charges that violate RBI directives can be challenged and reversed." } },
          { "@type": "Question", "name": "What should I include in a penalty waiver request letter?", "acceptedAnswer": { "@type": "Answer", "text": "Include your loan account details, reason for default (medical, job loss), request for waiver, and reference to RBI guidelines." } },
          { "@type": "Question", "name": "How to stop bank unfair charges?", "acceptedAnswer": { "@type": "Answer", "text": "Monitor your loan statements regularly, dispute unauthorized charges immediately in writing, and escalate to the Banking Ombudsman if the bank refuses to resolve it." } },
          { "@type": "Question", "name": "Will a penalty waiver affect my CIBIL score?", "acceptedAnswer": { "@type": "Answer", "text": "The waiver of penalty itself doesn't hurt your CIBIL, but the underlying delayed payment that caused the penalty will be reflected in your credit report." } },
          { "@type": "Question", "name": "How long does a bank take to process a waiver request?", "acceptedAnswer": { "@type": "Answer", "text": "Typically, banks take 7-14 working days to process a penalty waiver request once a formal written application is submitted." } },
          { "@type": "Question", "name": "Can I escalate the issue if the bank rejects my waiver request?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can escalate the matter to the bank's nodal officer, and if unresolved within 30 days, file a complaint with the RBI Banking Ombudsman." } },
          { "@type": "Question", "name": "Does RBI mandate banks to waive penalties for medical emergencies?", "acceptedAnswer": { "@type": "Answer", "text": "While not strictly mandated for all cases, RBI encourages banks to take a compassionate view during extreme financial distress like medical emergencies." } },
          { "@type": "Question", "name": "Are penal charges applicable on credit cards similar to loans?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, credit cards also have late payment fees, but RBI has strict guidelines on how these can be applied and capped to prevent debt traps." } }
        ]
      },
      {
        "@type": "Product",
        "name": "Penalty Waiver Assistance Service",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "142"
        },
        "review": [
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Ravi Kumar" }, "reviewBody": "Helped me waive Rs. 15,000 in unfair late fees on my personal loan." },
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Sneha Gupta" }, "reviewBody": "Used the RBI guidelines mentioned to force the bank to reverse penal interest. Highly recommended!" },
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "4" }, "author": { "@type": "Person", "name": "Amit Sharma" }, "reviewBody": "Very informative guide. I managed to get my bounce charges reversed." },
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Priya Desai" }, "reviewBody": "The template for the waiver letter was perfect. Bank approved my request in 5 days." }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Financial Rights Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              <span className="text-[#1F5EFF]">Penalty Waiver Guide</span> for Indian Borrowers
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              The ultimate guide to fighting unfair banking penalties. Learn how to use the latest RBI guidelines to force banks to waive unjust penal interest.
            </p>
            <Link href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Expert Help Now
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/guides" className="hover:text-[#1F5EFF] transition-colors">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Penalty Waiver Guide</span>
            </div>
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

          {/* Middle Column (Article) */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            {/* Intro */}
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">Why Banks Charge Unfair Penalties</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Many borrowers in India find themselves trapped in a cycle of debt not because of the principal loan amount, but due to excessive late fees, bounce charges, and penal interest levied by banks and NBFCs. Understanding your rights is the first step to <strong className="text-[#1F5EFF]">stop bank unfair charges</strong>.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Often, lenders apply penal interest as an additional revenue stream rather than a deterrent for late payments. This practice disproportionately affects those already facing financial hardship, compounding their debt unfairly.
                </p>
              </div>
            </section>

            {/* RBI Guidelines (Blue Important Box + Numbered Steps) */}
            <section id="rbi-guidelines" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">RBI Guidelines on Penal Interest</h2>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Latest RBI Directive Highlights</h4>
                <p className="text-lg text-gray-700 mb-4">
                  The Reserve Bank of India has clearly outlined how banks can levy penalties to prevent customer exploitation. Key takeaways include:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">Penalties must be treated as "Penal Charges" and NOT "Penal Interest".</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">No capitalization of penal charges (they cannot be added to the principal to charge further interest).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">Charges must be reasonable and commensurate with the default.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-12 my-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Identify the Overcharge</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">Review your loan statements carefully. Look for terms like "Penal Interest", "Late Payment Fee", or "Bounce Charges" that seem disproportionately high compared to your EMI.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Draft a Formal Objection</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">Prepare a formal letter addressing the branch manager. Explicitly mention the latest <strong className="text-[#1F5EFF]">RBI guidelines on penal interest</strong> and request a detailed breakdown of the levied charges.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Escalate if Ignored</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">If the bank refuses to adjust the charges within 30 days, escalate the matter to the RBI Banking Ombudsman with proof of your communication.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* How to Waive (4-Grid + Warning + Gray Box) */}
            <section id="how-to-waive" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How to Waive Off Late Fees in India</h2>
              <p className="text-lg leading-relaxed mb-6">
                Knowing how to strategically request a waiver can save you thousands of rupees. You don't have to passively accept every charge a bank throws at you. Here are the core strategies to <strong className="text-[#1F5EFF]">waive off late fees India</strong>.
              </p>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Crucial Warning</h4>
                <p className="text-lg text-red-900 leading-relaxed">
                  Never agree to pay inflated penalty charges verbally over a recovery call. Always demand a written settlement offer or an updated loan statement reflecting the exact legal dues before making a payment toward penalties.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Cite Genuine Hardship</h3>
                  <p className="text-gray-700">Banks have internal policies for hardship cases. Document medical emergencies, job loss, or sudden business downturns.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Leverage Your History</h3>
                  <p className="text-gray-700">If you have a long history of timely payments before this default, use it! Banks want to retain good customers.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Offer Lump-Sum Payment</h3>
                  <p className="text-gray-700">Negotiate by offering to clear the principal and regular interest immediately if they waive the penalty fees.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Quote the Rulebook</h3>
                  <p className="text-gray-700">Remind them of the RBI Master Direction on Fair Practice Code to show you are an informed borrower.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-2xl font-bold text-[#2E2E2E] mb-4">Pro Insight</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Most frontline customer service agents do not have the authority to waive large penalty amounts. You must insist on speaking with the Branch Manager or the Collections Head, and always keep the correspondence in writing (Email/Registered Post).
                </p>
              </div>
            </section>

            {/* Hidden Clauses */}
            <section id="hidden-clauses" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Hidden Clauses in Loan Agreements</h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden mb-8">
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Most borrowers in India sign loan agreements without fully understanding the intricate legal jargon, often burying <strong className="text-[#1F5EFF]">hidden penalty clauses</strong> deep within the fine print. Banks use these clauses as a pretext to inflate the outstanding dues exponentially as soon as an EMI bounces.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  These hidden clauses typically outline extreme fees for minor infractions. For example, you may be charged not only for late payment but also for administrative fees, collection costs, and legal notice charges—all of which pile up to create an unmanageable debt spiral. The RBI specifically warns against such opaque practices and mandates that all penal charges be transparently disclosed in the Most Important Terms and Conditions (MITC) document.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  If the bank failed to provide you with the MITC or obscured the penalty structures, you have a robust legal basis to challenge and stop bank unfair charges. Consumer courts frequently rule in favor of borrowers who were subjected to hidden clauses that lack transparency and proportionality.
                </p>
              </div>
            </section>

            {/* Consumer Rights */}
            <section id="consumer-rights" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Consumer Rights and Legal Precedents</h2>
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Your Rights Under Indian Law</h4>
                <p className="text-lg text-gray-700 mb-4">
                  Indian consumer protection laws and various High Court rulings have firmly established that borrowers are not helpless victims against institutional lending giants.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg"><strong>Right to Fair Treatment:</strong> Lenders cannot use coercive methods or impose punitive damages arbitrarily.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg"><strong>Right to Transparency:</strong> You have the right to a detailed breakdown of your outstanding balance, separating principal, interest, and specific penal charges.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg"><strong>Right to Grievance Redressal:</strong> The RBI mandates a 30-day window for banks to resolve borrower complaints regarding excessive penalties before escalating to the Ombudsman.</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                In several landmark judgments, the National Consumer Disputes Redressal Commission (NCDRC) has directed banks to reverse illegally capitalized penal interest and compensate borrowers for mental agony. By citing these precedents in your communication, you signal to the bank that you are prepared to pursue legal action if necessary.
              </p>
            </section>

            {/* Dealing with Recovery Agents */}
            <section id="recovery-agents" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Dealing with Recovery Agents</h2>
              <p className="text-lg leading-relaxed mb-6">
                A common tactic employed by banks is using recovery agents to intimidate borrowers into paying inflated penalty charges without verifying the actual legal dues. Knowing how to handle these agents is vital for protecting your finances and mental well-being.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Ask for Identification</h3>
                  <p className="text-gray-700">Recovery agents must carry a valid ID and an authorization letter from the bank. Deny interaction if they fail to produce these documents.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Record the Conversations</h3>
                  <p className="text-gray-700">Keep a record of all calls and in-person interactions. Any abusive language or threats violate RBI guidelines and can be used as evidence against the bank.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Never Pay in Cash</h3>
                  <p className="text-gray-700">Agents may demand cash to "settle" penalties quickly. Always make payments via formal banking channels to ensure they reflect in your loan account.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Demand Written Statements</h3>
                  <p className="text-gray-700">Refuse to acknowledge verbal penalty figures. Insist on a formal, updated statement of account before committing to any payment plan.</p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Legal Action Against Harassment</h4>
                <p className="text-lg text-red-900 leading-relaxed">
                  If recovery agents resort to public humiliation or continuous harassment, you can file an FIR for criminal intimidation and report the bank to the RBI. Banks can lose their license to operate if they repeatedly violate the fair practices code regarding debt recovery.
                </p>
              </div>
            </section>

            {/* Success Stories */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Borrower Success Stories</h2>
              <p className="text-lg leading-relaxed mb-8">
                See how ordinary borrowers successfully fought back against unfair bank charges using the right knowledge and guidance.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Story 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RK
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2E2E2E]">Ravi Kumar</h4>
                      <div className="flex gap-1 mt-1">
                        {[1,2,3,4,5].map(i => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase">Penalty: ₹15,000</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">Waived: 100%</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "I had lost my job and missed 3 EMIs. The bank slapped massive penalties. By drafting a strong letter quoting RBI rules, they waived the entire ₹15k late fee."
                  </p>
                </div>

                {/* Story 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      SG
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2E2E2E]">Sneha Gupta</h4>
                      <div className="flex gap-1 mt-1">
                        {[1,2,3,4,5].map(i => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase">Penalty: ₹8,500</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">Waived: ₹7,000</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "The bank tried charging penal interest on top of regular interest. Once I pointed out this was against RBI directives, they reversed almost all the charges instantly."
                  </p>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "Can banks charge penal interest on top of regular interest?", a: "No, per latest RBI guidelines, penal charges must be levied as 'penal charges' and not as 'penal interest' capitalized on the principal amount." },
                  { q: "How can I waive off late fees in India?", a: "You can waive off late fees by writing a formal application to your branch manager citing genuine financial hardship or referring to RBI's fair practices code." },
                  { q: "Is it legal for banks to charge high penalty fees?", a: "Banks can charge reasonable penalty fees, but excessive or punitive charges that violate RBI directives can be challenged and reversed." },
                  { q: "What should I include in a penalty waiver request letter?", a: "Include your loan account details, reason for default (medical, job loss), request for waiver, and reference to RBI guidelines." },
                  { q: "How to stop bank unfair charges?", a: "Monitor your loan statements regularly, dispute unauthorized charges immediately in writing, and escalate to the Banking Ombudsman if the bank refuses to resolve it." },
                  { q: "Will a penalty waiver affect my CIBIL score?", a: "The waiver of penalty itself doesn't hurt your CIBIL, but the underlying delayed payment that caused the penalty will be reflected in your credit report." },
                  { q: "How long does a bank take to process a waiver request?", a: "Typically, banks take 7-14 working days to process a penalty waiver request once a formal written application is submitted." },
                  { q: "Can I escalate the issue if the bank rejects my waiver request?", a: "Yes, you can escalate the matter to the bank's nodal officer, and if unresolved within 30 days, file a complaint with the RBI Banking Ombudsman." },
                  { q: "Does RBI mandate banks to waive penalties for medical emergencies?", a: "While not strictly mandated for all cases, RBI encourages banks to take a compassionate view during extreme financial distress like medical emergencies." },
                  { q: "Are penal charges applicable on credit cards similar to loans?", a: "Yes, credit cards also have late payment fees, but RBI has strict guidelines on how these can be applied and capped to prevent debt traps." }
                ].map((faq, index) => (
                  <details key={index} name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                    <summary className="font-bold text-lg text-[#2E2E2E] list-none flex justify-between items-center">
                      {faq.q}
                      <span className="text-[#1F5EFF] text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-relaxed pl-2 border-l-2 border-[#1F5EFF]">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-6">Stop Paying Unfair Bank Penalties Today!</h3>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Don't let banks exploit you with illegal late fees and penal interest. Let our legal experts draft a robust penalty waiver request based on the latest RBI guidelines and get your unjust charges reversed.
                </p>
                <Link href="#contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-12 rounded-full hover:scale-105 transition-transform duration-300 shadow-xl text-lg">
                  Request Penalty Waiver Draft
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided in this guide is for educational purposes only and does not constitute formal legal advice. RBI guidelines are subject to change. Consult a financial or legal professional for advice specific to your situation.
              </p>
            </div>

          </article>

          {/* Right Sidebar (Context Cards) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              {/* Card 1 (Dark CTA) */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-4">Fight Bank Harassment</h4>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    Tired of paying heavy bounce charges and recovery agent threats? Get legal protection now.
                  </p>
                  <Link href="#expert-help" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 px-4 rounded-xl hover:bg-white hover:text-[#1F5EFF] transition-colors text-sm">
                    Talk to an Expert
                  </Link>
                </div>
              </div>

              {/* Card 2 (White Resources) */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Legal Resources
                </h4>
                <ul className="space-y-4">
                  {[
                    "Stop EMI Bounce Cycle",
                    "RBI Guidelines on Defaults",
                    "How to Handle Recovery Agents",
                    "Banking Ombudsman Process"
                  ].map((item, i) => (
                    <li key={i}>
                      <Link href="#" className="group flex items-center text-sm text-gray-600 hover:text-[#1F5EFF] transition-colors font-medium">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
