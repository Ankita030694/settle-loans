import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement Process Consequences & Impact',
  description: 'Did the bank offer you a settlement but hide the devastating consequences? Learn the truth about the impact of loan settlement vs closure before you sign.',
  alternates: {
    canonical: 'https://settleloans.in/personal-loan-settlement-process-consequences',
  },
};

export default function PersonalLoanSettlementConsequencesPage() {
  const tocItems = [
    { id: 'introduction', title: 'Introduction: The Truth About Settlements' },
    { id: 'what-is-settlement', title: 'What is a Loan Settlement?' },
    { id: 'consequences', title: 'The Hidden Consequences of Settlement' },
    { id: 'settlement-vs-closure', title: 'Settlement vs. Closure' },
    { id: 'process', title: 'The Settlement Process' },
    { id: 'impact-on-credit', title: 'Impact on Your Credit Score' },
    { id: 'success-stories', title: 'Success Stories' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Personal Loan Settlement Process Consequences & Impact",
      "description": "Learn the hidden consequences of personal loan settlement and how it impacts your financial future compared to loan closure.",
      "url": "https://settleloans.in/personal-loan-settlement-process-consequences"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
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
          "name": "Personal Loan Settlement Process Consequences",
          "item": "https://settleloans.in/personal-loan-settlement-process-consequences"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Personal Loan Settlement Process Consequences & Impact",
      "description": "Did the bank offer you a 'settlement' but hide the devastating consequences? Learn the truth before you sign.",
      "author": {
        "@type": "Organization",
        "name": "SettleLoans"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SettleLoans",
        "logo": {
          "@type": "ImageObject",
          "url": "https://settleloans.in/logo.png"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the main personal loan settlement consequences?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The primary consequence is a significant drop in your CIBIL score. Your credit report will reflect the status as 'Settled', which makes it difficult to secure new loans or credit cards for several years."
          }
        },
        {
          "@type": "Question",
          "name": "How does the impact of loan settlement differ from loan closure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Loan closure means you have paid the full outstanding amount, resulting in a 'Closed' status on your credit report, which is positive. Loan settlement means you paid less than owed, resulting in a 'Settled' status, which negatively impacts your creditworthiness."
          }
        },
        {
          "@type": "Question",
          "name": "Is settlement vs closure always a tough choice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your financial situation. If you cannot afford the full payment, settlement provides relief from debt and harassment, but at the cost of your credit score. Closure is always the preferred option if financially feasible."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a 'Settled' status stay on my CIBIL report?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 'Settled' status typically remains on your CIBIL report for up to 7 years, impacting your ability to get credit during that time."
          }
        },
        {
          "@type": "Question",
          "name": "Can I remove the 'Settled' status from my credit report?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can change a 'Settled' status to 'Closed' by paying the waived-off amount (the difference between the total due and the settled amount) to the bank later."
          }
        },
        {
          "@type": "Question",
          "name": "Will loan settlement stop recovery agent harassment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, once you officially settle the loan and receive a No Objection Certificate (NOC) or No Dues Certificate (NDC), all recovery efforts and harassment must legally stop."
          }
        },
        {
          "@type": "Question",
          "name": "Do banks always accept a loan settlement offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, banks evaluate settlement requests based on the borrower's genuine financial hardship. If they believe you have the capacity to pay, they may reject the settlement."
          }
        },
        {
          "@type": "Question",
          "name": "What is the typical waiver percentage in a loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Waivers usually range from 30% to 70% of the outstanding amount, depending on the age of the default and the borrower's financial condition."
          }
        },
        {
          "@type": "Question",
          "name": "Is it safe to settle a loan without professional help?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While possible, navigating the settlement process can be tricky. Professional debt settlement agencies ensure you get the best terms and that the paperwork, like the NOC, is legally binding."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are required for a loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You generally need to provide a hardship letter, proof of reduced income, medical bills (if applicable), and bank statements to prove your inability to pay the full amount."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Debt Settlement Legal Advisory",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "124"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Rahul M." },
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "SettleLoans helped me understand the personal loan settlement consequences before I made a decision. Their guidance was invaluable in protecting my future."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Ananya S." },
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "I was confused about settlement vs closure. The team explained the impact of loan settlement perfectly and helped me negotiate a fair deal without legal risks."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Vikram K." },
          "reviewRating": { "@type": "Rating", "ratingValue": "4" },
          "reviewBody": "Highly professional service. They handled my bank settlement smoothly and ensured all recovery calls stopped immediately."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Neha P." },
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "I managed to settle my high-interest personal loan with a 60% waiver. The process was transparent and they clearly explained the CIBIL impact."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Schema Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Debt Resolution Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Personal Loan <span className="text-[#1F5EFF]">Settlement</span> Process & Consequences
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Did the bank offer you a 'settlement' but hide the devastating consequences? Learn the truth before you sign.
            </p>
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Expert Legal Help Now
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/services" className="hover:text-[#1F5EFF] transition-colors">Services</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Personal Loan Settlement Consequences</span>
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative max-w-screen-2xl">
          
          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Column: Article */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Boxed Intro */}
            <section id="introduction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">Introduction: The Truth About Settlements</h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  When you fall behind on personal loan payments, banks or recovery agents might present a <strong>loan settlement</strong> as a lifeline. They might offer to waive a significant portion of your debt, allowing you to close the account for much less than what you owe. While this sounds incredibly appealing, it's critical to understand the long-term <strong>personal loan settlement consequences</strong>.
                </p>
                <p className="text-lg leading-relaxed mb-0 text-gray-700">
                  Banks rarely highlight the severe <strong>impact of loan settlement</strong> on your financial future. This guide uncovers the reality of settling a debt, explores the critical differences between <strong>settlement vs closure</strong>, and outlines what you must know before accepting any offer.
                </p>
              </div>
            </section>

            {/* Blue Important Box */}
            <section id="what-is-settlement" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">What is a Loan Settlement?</h2>
              <p className="text-lg leading-relaxed mb-6">
                A loan settlement is a mutual agreement between you and the lender. When you are unable to repay the full outstanding amount due to genuine financial hardship (like job loss, medical emergencies, or business failure), the bank may agree to accept a lump sum payment that is less than the total amount owed. In return, they forgive the remaining balance.
              </p>
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Key Aspects of Settlement</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">It is not a legal right; the bank must agree to it.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">It typically only happens after the loan is classified as a Non-Performing Asset (NPA).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">The waived amount is considered a loss by the bank and is reported to credit bureaus.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Red Warning Box & Insight Box */}
            <section id="consequences" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Hidden Consequences of Settlement</h2>
              <p className="text-lg leading-relaxed mb-6">
                While a settlement provides immediate relief from debt and stops recovery agents from calling, the long-term <strong>personal loan settlement consequences</strong> can be severe.
              </p>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">The "Settled" Status Stigma</h4>
                <p className="text-lg text-red-900 mb-0">
                  When you settle a loan, your credit report will not show the account as "Closed." Instead, it will be marked as <strong>"Settled."</strong> This single word acts as a massive red flag to future lenders, indicating that you previously failed to honor a financial commitment in full.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-black text-gray-800 mb-4">Major Impacts of a Settled Status</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
                  <li><strong>Drastic CIBIL Score Drop:</strong> Your score can plummet by 50 to 100 points or more.</li>
                  <li><strong>Loan Rejections:</strong> Most major banks will automatically reject new loan or credit card applications for several years.</li>
                  <li><strong>Higher Interest Rates:</strong> If you do manage to get credit (usually from NBFCs), it will likely come with significantly higher interest rates.</li>
                  <li><strong>Long-Term Record:</strong> This status stays on your credit report for up to 7 years.</li>
                </ul>
              </div>
            </section>

            {/* 4-Grid Info Boxes */}
            <section id="settlement-vs-closure" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Settlement vs. Closure: Understanding the Difference</h2>
              <p className="text-lg leading-relaxed mb-6">
                The debate of <strong>settlement vs closure</strong> is one of the most critical decisions a borrower faces. Understanding the distinction is vital for your financial health.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Loan Closure</h4>
                  <p className="text-gray-700">You pay the entire outstanding principal, interest, and any penalties in full. The bank issues a "No Dues Certificate" (NDC).</p>
                  <div className="mt-4 pt-4 border-t border-blue-100">
                    <strong className="text-sm text-green-600 block mb-1">CIBIL Impact:</strong>
                    <span className="text-sm text-gray-600">Positive. Shows as "Closed." Improves credit score.</span>
                  </div>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Loan Settlement</h4>
                  <p className="text-gray-700">You pay a negotiated lesser amount. The bank writes off the rest as a loss and issues a "No Objection Certificate" (NOC) for the settled amount.</p>
                  <div className="mt-4 pt-4 border-t border-blue-100">
                    <strong className="text-sm text-red-600 block mb-1">CIBIL Impact:</strong>
                    <span className="text-sm text-gray-600">Negative. Shows as "Settled." Damages credit score.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Numbered Steps */}
            <section id="process" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Settlement Process</h2>
              <p className="text-lg leading-relaxed mb-8">
                If settlement is your only option, it's crucial to follow the correct process to ensure it is legally binding and recognized by the bank.
              </p>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Assess and Communicate</h3>
                    <p className="text-lg text-gray-600">Write a formal hardship letter to the bank explaining your situation (job loss, medical emergency). Provide supporting documents like bank statements or medical records.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Negotiate the Terms</h3>
                    <p className="text-lg text-gray-600">The bank may initially reject or counter-offer. Negotiations determine the final settlement amount, which is often paid as a lump sum (One Time Settlement - OTS).</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Get It In Writing</h3>
                    <p className="text-lg text-gray-600">Never pay any settlement amount based on a verbal promise. Always demand a formal settlement letter on the bank's letterhead stating the exact amount and terms.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Obtain the NOC</h3>
                    <p className="text-lg text-gray-600">After making the payment, ensure you collect the No Objection Certificate (NOC) confirming the settlement is complete and no further dues remain.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Insight Box */}
            <section id="impact-on-credit" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Impact on Your Credit Score & Recovery</h2>
              <p className="text-lg leading-relaxed mb-6">
                The <strong>impact of loan settlement</strong> on your credit profile is severe, but it is not permanent. If you later find yourself in a better financial position, you can take steps to recover your creditworthiness.
              </p>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  You have the option to approach the bank years after a settlement, pay the previously waived-off amount, and request them to upgrade your status from "Settled" to "Closed." Once the bank updates this with CIBIL, your score will gradually begin to improve.
                </p>
                <p className="text-lg leading-relaxed mb-0 text-gray-700">
                  In the meantime, building healthy financial habits, such as getting a secured credit card against a Fixed Deposit and paying it diligently, can help rebuild trust.
                </p>
              </div>
            </section>

            {/* Review/Success Stories */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      R
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Rahul M.</h4>
                      <div className="flex gap-1 text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 line-clamp-3">"SettleLoans helped me understand the personal loan settlement consequences before I made a decision. Their guidance was invaluable in protecting my future."</p>
                  <div className="flex gap-2 text-sm font-bold">
                    <span className="bg-red-50 text-red-600 py-1 px-3 rounded-full">Loan: ₹8L</span>
                    <span className="bg-green-50 text-green-600 py-1 px-3 rounded-full">Settled: ₹3.5L</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      A
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Ananya S.</h4>
                      <div className="flex gap-1 text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 line-clamp-3">"I was confused about settlement vs closure. The team explained the impact of loan settlement perfectly and helped me negotiate a fair deal without legal risks."</p>
                  <div className="flex gap-2 text-sm font-bold">
                    <span className="bg-red-50 text-red-600 py-1 px-3 rounded-full">Loan: ₹12L</span>
                    <span className="bg-green-50 text-green-600 py-1 px-3 rounded-full">Settled: ₹4.8L</span>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section id="faq" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What are the main personal loan settlement consequences?", a: "The primary consequence is a significant drop in your CIBIL score. Your credit report will reflect the status as 'Settled', which makes it difficult to secure new loans or credit cards for several years." },
                  { q: "How does the impact of loan settlement differ from loan closure?", a: "Loan closure means you have paid the full outstanding amount, resulting in a 'Closed' status on your credit report, which is positive. Loan settlement means you paid less than owed, resulting in a 'Settled' status, which negatively impacts your creditworthiness." },
                  { q: "Is settlement vs closure always a tough choice?", a: "It depends on your financial situation. If you cannot afford the full payment, settlement provides relief from debt and harassment, but at the cost of your credit score. Closure is always the preferred option if financially feasible." },
                  { q: "How long does a 'Settled' status stay on my CIBIL report?", a: "A 'Settled' status typically remains on your CIBIL report for up to 7 years, impacting your ability to get credit during that time." },
                  { q: "Can I remove the 'Settled' status from my credit report?", a: "You can change a 'Settled' status to 'Closed' by paying the waived-off amount (the difference between the total due and the settled amount) to the bank later." },
                  { q: "Will loan settlement stop recovery agent harassment?", a: "Yes, once you officially settle the loan and receive a No Objection Certificate (NOC) or No Dues Certificate (NDC), all recovery efforts and harassment must legally stop." },
                  { q: "Do banks always accept a loan settlement offer?", a: "No, banks evaluate settlement requests based on the borrower's genuine financial hardship. If they believe you have the capacity to pay, they may reject the settlement." },
                  { q: "What is the typical waiver percentage in a loan settlement?", a: "Waivers usually range from 30% to 70% of the outstanding amount, depending on the age of the default and the borrower's financial condition." },
                  { q: "Is it safe to settle a loan without professional help?", a: "While possible, navigating the settlement process can be tricky. Professional debt settlement agencies ensure you get the best terms and that the paperwork, like the NOC, is legally binding." },
                  { q: "What documents are required for a loan settlement?", a: "You generally need to provide a hardship letter, proof of reduced income, medical bills (if applicable), and bank statements to prove your inability to pay the full amount." }
                ].map((faq, i) => (
                  <div key={i} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black mb-6">Stop Debt Harassment Today</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Did the bank offer you a 'settlement' but hide the devastating consequences? Learn the truth before you sign. Speak to our legal experts now.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-transform text-lg shadow-lg">
                  Get a Free Consultation
                </Link>
              </div>
            </div>

            {/* Disclaimer Footer */}
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational purposes only and does not constitute formal legal or financial advice. Always consult with a qualified professional regarding your specific situation.
              </p>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              {/* Card 1 (Dark CTA) */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-4">Facing Harassment?</h4>
                  <p className="text-gray-300 mb-6 text-sm">Don't agree to a settlement blindly. Let our experts analyze your case and protect your rights.</p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
                    Talk to a Lawyer
                  </Link>
                </div>
              </div>

              {/* Card 2 (White Resources) */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-6">Related Guides</h4>
                <ul className="space-y-4">
                  {[
                    { text: "RBI Rules for Recovery Agents", link: "/rbi-rules-for-recovery-agents" },
                    { text: "What happens if loan EMI not paid?", link: "/what-happens-if-loan-emi-not-paid" },
                    { text: "Unsecured Personal Loan Definition", link: "/unsecured-personal-loan-definition" },
                    { text: "Mastering Loan Settlement", link: "/mastering-loan-settlement" }
                  ].map((item, i) => (
                    <li key={i}>
                      <Link href={item.link} className="group flex items-center text-gray-600 hover:text-[#1F5EFF] transition-colors text-sm font-medium">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors flex-shrink-0"></span>
                        {item.text}
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
