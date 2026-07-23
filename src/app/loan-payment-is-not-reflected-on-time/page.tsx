import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "EMI Deducted But Not Updated? Loan Payment Is Not Reflected on Time",
  description: "Money deducted from your account but the bank says 'EMI bounced'? Learn how to resolve when your loan payment is not reflected on time and avoid penal interest for bank delays.",
  alternates: {
    canonical: "https://settleloans.in/loan-payment-is-not-reflected-on-time",
  },
};

export default function LoanPaymentNotReflectedPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/loan-payment-is-not-reflected-on-time#webpage",
        "url": "https://settleloans.in/loan-payment-is-not-reflected-on-time",
        "name": "EMI Deducted But Not Updated? Loan Payment Is Not Reflected on Time",
        "description": "Learn how to resolve when your loan payment is not reflected on time and avoid penal interest for bank delays.",
        "breadcrumb": { "@id": "https://settleloans.in/loan-payment-is-not-reflected-on-time#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/loan-payment-is-not-reflected-on-time#breadcrumb",
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
            "name": "Loan Payment Not Reflected",
            "item": "https://settleloans.in/loan-payment-is-not-reflected-on-time"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/loan-payment-is-not-reflected-on-time#article",
        "headline": "EMI Deducted But Not Updated? Loan Payment Is Not Reflected on Time",
        "description": "Don't pay late fees when money is deducted from your account but the bank says EMI bounced. File a complaint immediately.",
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
        "mainEntityOfPage": { "@id": "https://settleloans.in/loan-payment-is-not-reflected-on-time#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/loan-payment-is-not-reflected-on-time#product",
        "name": "Financial Dispute Legal Notice",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert legal assistance to resolve technical disputes where loan payment is not reflected and to reverse unjust penal interest for bank delays.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikas S." },
            "datePublished": "2024-01-10",
            "reviewBody": "My EMI was deducted on the 5th, but the bank charged a late fee on the 10th saying it bounced. The legal team helped me file an RBI complaint and got the fees reversed.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anjali M." },
            "datePublished": "2024-02-05",
            "reviewBody": "I suffered from a CIBIL score drop because the bank updated my payment 15 days late. SettleLoans assisted in restoring my credit score and waiving the unjust penal interest.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul T." },
            "datePublished": "2024-03-12",
            "reviewBody": "The bank's app was glitching and my payment was in limbo. One legal notice from SettleLoans made them trace the UTR number and clear the default status immediately.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya R." },
            "datePublished": "2024-05-20",
            "reviewBody": "They were threatening me with recovery agents even though the money had left my account. The legal intervention stopped the calls and resolved the technical error.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Deepak K." },
            "datePublished": "2024-06-15",
            "reviewBody": "Excellent guidance on how to use the NPCI portal and the RBI Ombudsman. Reversing the late fees was surprisingly fast with their help.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/loan-payment-is-not-reflected-on-time#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is my EMI deducted but not updated in my loan account?",
            "acceptedAnswer": { "@type": "Answer", "text": "This usually happens due to a technical glitch between the remitting bank (your bank) and the beneficiary bank (the loan provider), or during National Automated Clearing House (NACH) processing delays." }
          },
          {
            "@type": "Question",
            "name": "Can the bank charge a late fee if the delay was technical?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. According to RBI guidelines, if the funds were deducted from your account on or before the due date, the bank cannot charge penal interest or late payment fees for a delay on their end." }
          },
          {
            "@type": "Question",
            "name": "How long does it usually take to resolve a missing payment?",
            "acceptedAnswer": { "@type": "Answer", "text": "In most cases, technical payment failures are automatically reconciled and refunded or credited within T+5 (transaction plus five) working days. If it takes longer, a formal complaint is required." }
          },
          {
            "@type": "Question",
            "name": "What proof do I need to show the bank?",
            "acceptedAnswer": { "@type": "Answer", "text": "You will need your bank statement showing the debit entry and the Unique Transaction Reference (UTR) number or the NACH mandate reference number." }
          },
          {
            "@type": "Question",
            "name": "Will this delay affect my CIBIL score?",
            "acceptedAnswer": { "@type": "Answer", "text": "If the bank incorrectly reports the payment as 'delayed' or 'bounced', your CIBIL score could temporarily drop. You must insist the bank corrects the bureau reporting once the payment is traced." }
          },
          {
            "@type": "Question",
            "name": "What is the penalty if the bank doesn't resolve the technical failure?",
            "acceptedAnswer": { "@type": "Answer", "text": "Under RBI’s Turn Around Time (TAT) framework for failed transactions, banks must pay ₹100 per day as compensation to the customer if the dispute is not resolved within the specified timeline (usually 5 days)." }
          },
          {
            "@type": "Question",
            "name": "Can recovery agents call me if the payment is technically stuck?",
            "acceptedAnswer": { "@type": "Answer", "text": "Once you provide proof of deduction (UTR number/statement), the bank must pause collection activities. Continuing to harass you through agents is a violation of fair practices." }
          },
          {
            "@type": "Question",
            "name": "Should I pay the EMI again if the bank asks me to?",
            "acceptedAnswer": { "@type": "Answer", "text": "Generally, it is advised not to pay twice unless you have excess liquidity, as the first payment will eventually be traced or refunded. Paying twice might complicate the refund process." }
          },
          {
            "@type": "Question",
            "name": "How do I escalate this if my bank branch is unhelpful?",
            "acceptedAnswer": { "@type": "Answer", "text": "First, write to the bank’s Nodal/Grievance Officer. If there is no satisfactory response within 30 days, you can file a complaint with the RBI Banking Ombudsman online." }
          },
          {
            "@type": "Question",
            "name": "Can a legal notice help in this situation?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, a legal notice compels the legal and compliance departments of the bank to act, bypassing uncooperative customer service agents and stopping unfair penal charges." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "missing-emi-nightmare", title: "The Missing EMI Nightmare" },
    { id: "why-payments-get-stuck", title: "Why Does It Happen?" },
    { id: "unfair-penalties", title: "The Unjust Penal Interest" },
    { id: "cibil-implications", title: "Protecting Your CIBIL Score" },
    { id: "rbi-compensation", title: "The RBI ₹100/Day Compensation" },
    { id: "actionable-steps", title: "Action Plan: Step-by-Step" },
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
              EMI Dispute Resolution
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Money Deducted But <span className="text-[#1F5EFF]">EMI Bounced?</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Money deducted from your account but the bank says 'EMI bounced'? Don't pay late fees. File a complaint immediately and avoid unjust penal interest for bank delays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                File a Complaint Today
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
                <li className="font-bold text-[#2E2E2E]">Loan Payment Not Reflected</li>
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

            <section id="missing-emi-nightmare" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Missing EMI Nightmare
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  You’ve diligently maintained a sufficient balance in your savings account for the upcoming EMI. The auto-debit triggers on the due date, and you receive an SMS confirming the deduction. You think you're safe.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  However, a few days later, you get a barrage of messages from your loan provider stating that your EMI has bounced. Soon after, recovery agents start calling, and you notice late fees and bounce charges added to your loan statement. 
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  When a <strong>loan payment is not reflected</strong> on time despite being deducted, it is almost entirely a banking infrastructure issue. Yet, banks unfairly pass the burden, the penal interest, and the credit score damage onto the consumer.
                </p>
              </div>
            </section>

            <section id="why-payments-get-stuck" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Why Does It Happen? Technical Delays
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                When you see your <strong>EMI deducted but not updated</strong>, the money is usually stuck in the digital banking pipeline between the remitting and beneficiary banks.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">NACH Server Glitches</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Most auto-debit EMIs use the National Automated Clearing House (NACH). If the NPCI server faces downtime, the money might be deducted from your bank but delayed in reaching the lender.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">UPI & Payment Gateway Errors</h4>
                  <p className="text-gray-700 leading-relaxed">
                    If you paid your loan manually via a payment app (GPay, PhonePe, Paytm), network timeouts can result in a successful debit but a failed update on the lender's dashboard.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>The Auto-Reversal Rule:</strong> By default, if a transaction is successful at the customer end but fails at the merchant/lender end, the banking system is programmed to reconcile and reverse the amount within T+5 (Transaction Date + 5) working days.
                </p>
              </div>
            </section>

            <section id="unfair-penalties" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Unjust Penal Interest for Bank Delay
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Lenders heavily rely on automated systems. When their system doesn't detect a credited payment, it automatically flags the account as "overdue."
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">RBI Protection Against Unfair Fees</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  The Reserve Bank of India has strict guidelines regarding unjust enrichment by banks through technical failures.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">If the deduction happened on or before the due date, the bank <strong>cannot charge penal interest</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">Any bounce charges levied must be fully reversed once the payment is traced or refunded.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">The date of debit from the customer's account is considered the effective date of payment.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="cibil-implications" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Protecting Your CIBIL Score
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The most dangerous consequence of a technical delay is the potential damage to your credit score. If the bank reports the EMI as unpaid for a specific month due to their internal reconciliation delays, your CIBIL score could take a massive hit.
              </p>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Beware of Default Reporting</h4>
                <p className="text-red-900 leading-relaxed">
                  You must forcefully demand that the lender does not report the payment as a "Delay" or "Default" to credit bureaus like CIBIL, Experian, or Equifax. If they already have, they are legally obligated to submit a correction report once they verify the original transaction date.
                </p>
              </div>
            </section>

            <section id="rbi-compensation" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The RBI ₹100/Day Compensation Scheme
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                To hold banks accountable for digital transaction failures, the RBI introduced a Turn Around Time (TAT) and compensation framework for failed transactions.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  If your account is debited but the beneficiary (loan account) is not credited, and the transaction is not reversed within the specified timeline (typically 5 days), the bank is liable to pay a penalty of <strong>₹100 per day</strong> to you for every day of delay.
                </p>
              </div>
            </section>

            <section id="actionable-steps" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Action Plan: What to Do Immediately
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Do not simply wait and hope the bank fixes it. Take these steps to protect yourself from late fees and harassment.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Extract the UTR Number</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Download your bank statement and locate the specific debit transaction. Note down the Unique Transaction Reference (UTR) number or the NACH mandate reference. This is your ultimate proof of payment.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Raise a Formal Dispute</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Send a written email to the customer care and grievance officer of the lending bank. Attach the statement showing the debit and explicitly state that the payment was made on time, demanding a waiver of any auto-generated bounce charges.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Send a Legal Notice</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If the bank refuses to trace the payment, continues to charge penal interest, or sends recovery agents to harass you, have a lawyer send a formal legal notice citing RBI guidelines and threatening to escalate to the Banking Ombudsman.
                    </p>
                  </div>
                </div>
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
                      VS
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Vikas S.</h4>
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
                    "My EMI was deducted on the 5th, but the bank charged a late fee on the 10th saying it bounced. The legal team helped me file an RBI complaint and got the fees reversed."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100 font-medium">Issue: Unjust Penal Fees</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100 font-medium">Result: Fees Reversed</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      AM
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Anjali M.</h4>
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
                    "I suffered from a CIBIL score drop because the bank updated my payment 15 days late. SettleLoans assisted in restoring my credit score and waiving the unjust penal interest."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100 font-medium">Issue: Credit Score Hit</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100 font-medium">Result: CIBIL Repaired</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {jsonLd["@graph"].find(item => item["@type"] === "FAQPage")?.mainEntity?.map((faq: any, index: number) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">{faq.name}</h4>
                    <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <h3 className="text-3xl font-black mb-6 relative z-10">Stop the Penalty Charges Now</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Money deducted from your account but the bank says "EMI bounced"? Don't pay late fees. Let our legal team handle the dispute and reverse unfair charges.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Get Legal Assistance
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
                <h4 className="text-xl font-black mb-4 relative z-10">Unfair Late Fees?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  If the money was deducted on time, the bank must waive all late fees and correct your CIBIL score.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] w-full py-3 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors relative z-10">
                  Speak to an Expert
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Legal Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/how-to-file-complaint-against-recovery-agents" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Stop Recovery Agents
                    </Link>
                  </li>
                  <li>
                    <Link href="/rbi-guidelines-on-loan-recovery-agents" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Improve CIBIL Score
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
