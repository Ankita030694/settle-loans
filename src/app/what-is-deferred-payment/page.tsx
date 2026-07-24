import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What is Deferred Payment? Meaning, Moratorium & BNPL Vs Deferred Payment',
  description: 'Understand the deferred payment loan meaning, how a moratorium on loan works, and the key differences between BNPL vs deferred payment to avoid defaulting during a financial crisis.',
  alternates: {
    canonical: 'https://settleloans.in/what-is-deferred-payment',
  },
};

export default function WhatIsDeferredPayment() {
  const tocItems = [
    { id: 'introduction', title: 'What is a Deferred Payment?' },
    { id: 'how-it-works', title: 'How Does a Moratorium on Loan Work?' },
    { id: 'bnpl-vs-deferred', title: 'BNPL vs Deferred Payment' },
    { id: 'benefits', title: 'Benefits During a Financial Crisis' },
    { id: 'risks-warnings', title: 'Risks & Warnings to Consider' },
    { id: 'success-stories', title: 'Success Stories' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "What is Deferred Payment?",
      "description": "Understand the deferred payment loan meaning, how a moratorium on loan works, and the key differences between BNPL vs deferred payment.",
      "url": "https://settleloans.in/what-is-deferred-payment"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://settleloans.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "What is Deferred Payment",
          "item": "https://settleloans.in/what-is-deferred-payment"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "What is Deferred Payment?",
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
      },
      "datePublished": "2023-10-01T08:00:00+08:00",
      "dateModified": "2023-10-01T09:20:00+08:00"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the meaning of a deferred payment loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A deferred payment loan allows you to pause or delay your EMI payments for a specific period, usually offered during financial hardship."
          }
        },
        {
          "@type": "Question",
          "name": "Is a moratorium the same as a deferred payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, a moratorium on a loan is a form of deferred payment where the lender officially grants a grace period for repayments."
          }
        },
        {
          "@type": "Question",
          "name": "Does deferred payment affect my CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the deferred payment is officially approved by the lender as a moratorium, it typically does not negatively impact your CIBIL score."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between BNPL and deferred payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BNPL (Buy Now, Pay Later) is a short-term credit facility for purchases, while a deferred payment usually refers to pausing existing loan EMIs."
          }
        },
        {
          "@type": "Question",
          "name": "Does interest keep accruing during a deferment period?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, in most cases, interest continues to accrue on the outstanding principal during the deferment period."
          }
        },
        {
          "@type": "Question",
          "name": "How can I apply for a loan moratorium?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can apply by contacting your bank, usually through their customer service portal or by submitting a formal written request citing financial hardship."
          }
        },
        {
          "@type": "Question",
          "name": "Can all types of loans be deferred?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most personal, home, and education loans can be deferred, but it entirely depends on the lender's policies and regulatory guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "What happens when the deferment period ends?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Once it ends, you must resume your regular EMI payments, and your loan tenure may be extended to adjust for the accrued interest."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any hidden charges for deferred payments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some lenders may charge a processing fee, and the accrued interest itself acts as an additional cost over the life of the loan."
          }
        },
        {
          "@type": "Question",
          "name": "Can a deferred payment save me from loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, securing a deferred payment officially pauses your obligations legally, preventing a default status and protecting you from recovery agents."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Loan Deferred Payment Consultation",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "142"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Rajesh Kumar" },
          "reviewBody": "SettleLoans helped me secure a 6-month moratorium during my job loss. I avoided default entirely."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Sneha Patel" },
          "reviewBody": "I was confused between BNPL and deferred payments. Their experts explained everything and paused my EMIs."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "4" },
          "author": { "@type": "Person", "name": "Amit Singh" },
          "reviewBody": "Great service. They guided me on how to talk to my bank for a payment deferment."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Priya Sharma" },
          "reviewBody": "Highly recommend them if you're facing a financial crisis and need a breather on your loan EMIs."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Financial Relief Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              What is <span className="text-[#1F5EFF]">Deferred Payment</span> and How Can It Stop Defaults?
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              What exactly is a 'Deferred Payment' and how can it save you from defaulting during a financial crisis? Learn the true meaning, how a moratorium works, and BNPL vs Deferred Payment.
            </p>
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Professional Help Now
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center gap-2">
            <Link href="/" className="text-xs md:text-sm text-[#747474] hover:text-[#1F5EFF] transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/all-queries" className="text-xs md:text-sm text-[#747474] hover:text-[#1F5EFF] transition-colors">Loan Advice</Link>
            <span className="text-gray-300">/</span>
            <span className="text-xs md:text-sm font-bold text-[#2E2E2E]">What is Deferred Payment</span>
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

          {/* Middle Column (Article) */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">What is a Deferred Payment?</h2>
                <p className="text-lg leading-relaxed mb-6 text-[#4A4A4A]">
                  When facing a sudden job loss, medical emergency, or unexpected financial crunch, paying your monthly Equated Monthly Installments (EMIs) can become an impossible burden. This is where understanding the <strong className="text-[#1F5EFF]">deferred payment loan meaning</strong> becomes crucial. 
                </p>
                <p className="text-lg leading-relaxed mb-6 text-[#4A4A4A]">
                  A deferred payment is an agreement with your lender that allows you to temporarily pause or reduce your loan repayments. It acts as a financial breather, ensuring that a temporary lack of funds doesn't immediately push your account into default status or trigger aggressive recovery actions.
                </p>
              </div>
            </section>

            <section id="how-it-works" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How Does a Moratorium on Loan Work?</h2>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The Mechanics of a Moratorium</h4>
                <p className="text-lg leading-relaxed mb-4 text-[#2E2E2E]">
                  A <strong>moratorium on loan</strong> is the formal term used by banks and the RBI for a deferred payment period. Here is how it functions:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-[#2E2E2E]"><strong>Official Pause:</strong> The bank officially grants you a grace period (e.g., 3 to 6 months) where you do not have to pay EMIs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-[#2E2E2E]"><strong>Interest Accrual:</strong> Importantly, your loan does not become interest-free. Interest continues to accrue on the outstanding principal balance.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-[#2E2E2E]"><strong>Tenure Extension:</strong> The accrued interest is usually added to your principal, and your loan tenure is extended to adjust for the paused months.</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">Short-Term Relief</h3>
                  <p className="text-[#4A4A4A]">Instantly stops the cash outflow, preserving your liquidity for essential survival needs like rent, food, and medical bills.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">Credit Protection</h3>
                  <p className="text-[#4A4A4A]">Because it is mutually agreed upon, a moratorium prevents your account from being flagged as an NPA, protecting your CIBIL score.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">Long-Term Cost</h3>
                  <p className="text-[#4A4A4A]">The accrued interest compounds. Over a 10-20 year home loan, a 6-month moratorium can significantly increase the total interest paid.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">Requires Approval</h3>
                  <p className="text-[#4A4A4A]">You cannot just stop paying. You must apply, prove hardship, and receive official documentation approving the deferment.</p>
                </div>
              </div>
            </section>

            <section id="bnpl-vs-deferred" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">BNPL vs Deferred Payment</h2>
              <p className="text-lg leading-relaxed mb-6">
                Consumers often confuse modern financing tools. Understanding <strong>BNPL vs deferred payment</strong> is essential for managing your personal finances correctly.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Buy Now, Pay Later (BNPL)</h3>
                    <p className="text-lg text-[#4A4A4A]">
                      BNPL is a short-term credit facility offered at the point of sale (e.g., online shopping). It allows you to split a purchase into interest-free installments over a few weeks or months. It is a <em>new credit line</em> created specifically to fund consumption.
                    </p>
                  </div>
                  <div className="w-full h-px bg-[#DEDEDE]"></div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Deferred Payment (Moratorium)</h3>
                    <p className="text-lg text-[#4A4A4A]">
                      A deferred payment applies to an <em>existing loan</em> (like a personal loan, car loan, or home loan). It is a modification of your existing repayment contract triggered by financial distress, not a tool for new purchases.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="benefits" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Benefits During a Financial Crisis</h2>
              <p className="text-lg leading-relaxed mb-8">
                How can this save you from defaulting? When you secure a deferment, you trigger several powerful legal and financial protections.
              </p>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Stops Recovery Agent Harassment</h3>
                    <p className="text-lg text-[#4A4A4A]">Once a moratorium is granted, your account is considered in 'good standing' during that period. Banks cannot legally send recovery agents or make harassment calls to collect EMIs.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Prevents NPA Classification</h3>
                    <p className="text-lg text-[#4A4A4A]">Normally, missing 3 EMIs turns your loan into a Non-Performing Asset (NPA), triggering legal notices like Sarfaesi. A deferment pauses this 90-day countdown entirely.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Gives You Time to Restructure</h3>
                    <p className="text-lg text-[#4A4A4A]">A 3 to 6-month window allows you to find a new job, sell an asset, or consult with a loan settlement agency to figure out a permanent exit strategy without a gun to your head.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="risks-warnings" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Risks & Warnings to Consider</h2>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-4">Warning: It Is Not a Waiver!</h4>
                <p className="text-lg leading-relaxed text-red-900 mb-4">
                  The biggest mistake borrowers make is assuming a deferred payment means the bank has forgiven the EMIs for those months. <strong>They have not.</strong>
                </p>
                <ul className="list-disc pl-5 space-y-2 text-red-900 text-lg">
                  <li>Interest charges will accumulate heavily on the principal.</li>
                  <li>Your overall debt burden will be <em>higher</em> when the deferment ends.</li>
                  <li>If you do not resume payments after the moratorium, you will immediately face default proceedings.</li>
                </ul>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Success Stories</h2>
              <p className="text-lg leading-relaxed mb-8">
                See how understanding the deferred payment loan meaning helped others navigate their financial crisis.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RK
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E] text-lg">Rajesh K.</h4>
                      <div className="flex gap-1 text-yellow-400">
                        ★★★★★
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 mb-6">
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">Loan: ₹12 Lakhs</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">6 Mo Moratorium</span>
                  </div>
                  <p className="text-[#4A4A4A] text-lg leading-relaxed italic">
                    "I lost my IT job and panicked about my personal loan. SettleLoans helped me draft a hardship letter. The bank granted a 6-month deferment, giving me time to secure a new job without defaulting."
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      SP
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E] text-lg">Sneha Patel</h4>
                      <div className="flex gap-1 text-yellow-400">
                        ★★★★★
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 mb-6">
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">Loan: ₹45 Lakhs</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Settled: ₹18 Lakhs</span>
                  </div>
                  <p className="text-[#4A4A4A] text-lg leading-relaxed italic">
                    "After my moratorium ended, I still couldn't pay. SettleLoans stepped in and helped negotiate a final loan settlement instead. Their guidance through the BNPL vs deferred payment confusion was eye-opening."
                  </p>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What is the meaning of a deferred payment loan?", a: "A deferred payment loan allows you to pause or delay your EMI payments for a specific period, usually offered during financial hardship." },
                  { q: "Is a moratorium the same as a deferred payment?", a: "Yes, a moratorium on a loan is a form of deferred payment where the lender officially grants a grace period for repayments." },
                  { q: "Does deferred payment affect my CIBIL score?", a: "If officially approved by the lender as a moratorium, it typically does not negatively impact your CIBIL score, as the bank pauses reporting defaults." },
                  { q: "What is the difference between BNPL and deferred payment?", a: "BNPL (Buy Now, Pay Later) is a credit facility for new purchases. A deferred payment refers to pausing EMIs on an existing loan." },
                  { q: "Does interest keep accruing during a deferment period?", a: "Yes. In almost all cases, standard interest continues to accrue on the outstanding principal balance." },
                  { q: "How can I apply for a loan moratorium?", a: "You must contact your bank and submit a formal hardship request (often requiring proof like a termination letter or medical bills) asking for deferment." },
                  { q: "Can all types of loans be deferred?", a: "Most retail loans (personal, home, car) can be, but it is strictly at the lender's discretion unless a government/RBI mandate (like during COVID-19) forces it." },
                  { q: "What happens when the deferment period ends?", a: "You are required to resume standard EMI payments. Often, the EMI amount or the loan tenure is increased to account for the accrued interest." },
                  { q: "Are there any hidden charges for deferred payments?", a: "While there might not be 'hidden' charges, the sheer power of compound interest during the pause acts as a significant extra cost over the loan's lifetime." },
                  { q: "Can a deferred payment save me from loan default?", a: "Yes, it is the best legal way to pause a loan without triggering a default, saving you from recovery agents, legal notices, and asset seizure." }
                ].map((faq, i) => (
                  <div key={i} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">{faq.q}</h3>
                    <p className="text-lg text-[#4A4A4A]">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  Struggling to Secure a <span className="text-[#1F5EFF]">Deferred Payment</span>?
                </h3>
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                  Don't wait for your account to turn into an NPA. Let our legal experts negotiate a moratorium or a highly discounted one-time settlement on your behalf.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-5 px-12 rounded-xl hover:scale-105 transition-all duration-300 text-xl shadow-[0_0_40px_rgba(31,94,255,0.4)]">
                  Get Free Legal Consultation
                </Link>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided regarding deferred payments, moratoriums, and BNPL is for educational purposes. Approval of deferments is at the sole discretion of the lending institution.
              </p>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-8">
              
              {/* Card 1: Dark CTA */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4">Bank Refusing a Moratorium?</h3>
                  <p className="text-white/80 mb-6 text-sm leading-relaxed">
                    If your bank rejects your deferment request, our advocates can intervene legally to stop harassment and negotiate a settlement.
                  </p>
                  <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 rounded-lg hover:bg-white hover:text-[#1F5EFF] transition-colors">
                    Talk to a Lawyer
                  </Link>
                </div>
              </div>

              {/* Card 2: White Resources */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">Related Guides</h4>
                <ul className="space-y-4">
                  {[
                    { text: "What Happens if EMI Not Paid", link: "/what-happens-if-loan-emi-not-paid" },
                    { text: "Loan Settlement Process", link: "/loan-settlement-process-in-india" },
                    { text: "Stop Recovery Harassment", link: "/how-to-stop-loan-recovery-harassment" },
                    { text: "RBI Rules for Agents", link: "/rbi-rules-for-recovery-agents" },
                  ].map((item, i) => (
                    <li key={i}>
                      <Link href={item.link} className="flex items-center text-[#4A4A4A] hover:text-[#1F5EFF] group transition-colors text-sm font-medium">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
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
