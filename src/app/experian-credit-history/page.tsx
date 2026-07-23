import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Experian Credit History vs CIBIL | Check & Fix Errors Free',
  description: 'Your CIBIL is fine but your loan got rejected? Learn why banks check your Experian report, how to get your score for free, and fix Experian credit history errors.',
  alternates: {
    canonical: 'https://settleloan.in/experian-credit-history',
  },
};

export default function ExperianCreditHistoryPage() {
  const tocItems = [
    { id: 'introduction', title: 'Why Banks Check Experian' },
    { id: 'experian-vs-cibil', title: 'Experian vs CIBIL' },
    { id: 'check-score-free', title: 'Check Experian Score Free' },
    { id: 'fix-errors', title: 'Fix Experian History Errors' },
    { id: 'success-stories', title: 'Success Stories' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Experian Credit History vs CIBIL | Check & Fix Errors Free",
              "description": "Learn why banks check your Experian report, how to get your score for free, and fix Experian credit history errors.",
              "url": "https://settleloan.in/experian-credit-history"
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://settleloan.in/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Experian Credit History",
                  "item": "https://settleloan.in/experian-credit-history"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Experian Credit History vs CIBIL | Check & Fix Errors Free",
              "author": {
                "@type": "Organization",
                "name": "SettleLoan"
              },
              "datePublished": "2024-07-23",
              "dateModified": "2024-07-23",
              "publisher": {
                "@type": "Organization",
                "name": "SettleLoan",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://settleloan.in/logo.png"
                }
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is Experian score better than CIBIL?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Neither is universally 'better.' Both are credit bureaus licensed by the RBI. Some banks prefer CIBIL, while others heavily rely on Experian, especially for personal loans."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is my Experian score lower than CIBIL?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Different bureaus use different scoring models and may receive data at different times. If a bank reports a late payment to Experian but not CIBIL, your Experian score will be lower."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I check my Experian score for free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can check your Experian score for free once a year directly from their official website or via various financial aggregators."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I fix errors on my Experian report?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can raise a dispute on the Experian India portal. They have 30 days to verify the discrepancy with the lender and correct it."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will checking my Experian report lower my score?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, checking your own score is a 'soft inquiry' and does not impact your credit score at all."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take for Experian to update?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Typically, lenders update data every 30 to 45 days. Once updated by the lender, it reflects in your Experian report."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is a 750 Experian score good?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, any score above 750 on Experian is generally considered good and makes you eligible for most loans and credit cards."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the highest possible Experian score?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Experian credit score ranges from 300 to 900, with 900 being the highest possible score."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can a bad Experian score get my loan rejected even with a good CIBIL?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. If a lender specifically pulls your Experian report and sees defaults or low scores, they can reject your application regardless of your CIBIL score."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I improve my Experian score fast?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pay all dues on time, keep credit utilization below 30%, do not apply for multiple loans simultaneously, and regularly check for and dispute any errors."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Experian Credit Score Checking and Repair Guidance",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "89"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": "Rahul S.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "reviewBody": "My loan was rejected despite a 780 CIBIL because of an error on my Experian report. Their guide helped me fix it in 20 days."
                },
                {
                  "@type": "Review",
                  "author": "Priya M.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "reviewBody": "I didn't even know Experian existed until my personal loan got flagged. Very helpful resources."
                },
                {
                  "@type": "Review",
                  "author": "Vikas K.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4"
                  },
                  "reviewBody": "Great information on checking my score for free without falling for spammy sites."
                },
                {
                  "@type": "Review",
                  "author": "Anita D.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "reviewBody": "Raised a dispute using their steps and got a faulty late payment removed from my Experian history!"
                }
              ]
            }
          ])
        }}
      />

      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Credit Score Insights
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Understanding Your <span className="text-[#1F5EFF]">Experian</span> Credit History
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Your CIBIL is fine but your loan got rejected? The bank might be looking at your Experian report. Here's how to check it and fix errors.
            </p>
            <Link href="#check-score-free" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Check Experian Score Now
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-3 flex items-center gap-2">
            <Link href="/" className="text-xs md:text-sm text-[#747474] hover:text-[#1F5EFF] transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/credit-scores" className="text-xs md:text-sm text-[#747474] hover:text-[#1F5EFF] transition-colors">Credit Scores</Link>
            <span className="text-gray-300">/</span>
            <span className="text-xs md:text-sm font-bold text-[#2E2E2E]">Experian Credit History</span>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative max-w-[1600px]">
          
          {/* Left (TOC) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle (Article) */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Intro Section - Boxed */}
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  Why Do Banks Check Experian Instead of CIBIL?
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Many borrowers are surprised when their loan application is rejected despite having a stellar CIBIL score of 780+. What they don't realize is that banks and NBFCs in India do not solely rely on TransUnion CIBIL anymore. 
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  <strong>Experian</strong> is one of the four major credit information companies licensed by the Reserve Bank of India (RBI). In recent years, due to competitive pricing and detailed analytics, several prominent banks have shifted to using Experian credit reports as their primary metric for evaluating loan and credit card applications.
                </p>
              </div>
            </section>

            {/* Blue Important Box Section */}
            <section id="experian-vs-cibil" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Experian Credit Report vs CIBIL
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                While both bureaus serve the same fundamental purpose—tracking your borrowing and repayment history—there are subtle differences in how they calculate your score and process data from lenders.
              </p>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">
                  Key Differences You Should Know
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-lg text-blue-900"><strong>Algorithm Weightage:</strong> Experian places a very high emphasis on recent credit behavior. A late payment in the last 3 months will hurt your Experian score more drastically than CIBIL.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-lg text-blue-900"><strong>Data Refresh Rates:</strong> Lenders update data to bureaus in batches. Sometimes, a cleared loan reflects on CIBIL immediately but takes another 30 days to update on Experian, leading to temporary score disparities.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-lg text-blue-900"><strong>Score Range:</strong> Both use a 300-900 scale, but you will almost never have the exact same score on both platforms.</p>
                  </li>
                </ul>
              </div>
            </section>

            {/* 4-Grid Info Boxes */}
            <section id="check-score-free" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Check Experian Score Free
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                You are legally entitled to one free full credit report per year from every credit bureau in India, including Experian. Don't fall for aggregator sites that demand monthly subscriptions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">1. Official Experian Portal</h3>
                  <p className="text-gray-700">Visit the official Experian India website. They offer a direct "Free Credit Report" portal where you just need your PAN and mobile number.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">2. Bank Apps (Soft Pull)</h3>
                  <p className="text-gray-700">Many major banking apps (like HDFC, ICICI, or Kotak) have an inbuilt free credit score checker powered by Experian.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">3. WhatsApp Access</h3>
                  <p className="text-gray-700">Experian recently launched a WhatsApp bot. You can get your credit score by sending a simple "Hi" to their official verified business number.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">4. FinTech Platforms</h3>
                  <p className="text-gray-700">Apps like Cred, Paytm, or PolicyBazaar often provide free Experian updates, though they may use your data for cross-selling.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Insight: Soft vs Hard Inquiries</h4>
                <p className="text-gray-700">Checking your own Experian score through these free methods is considered a <strong>Soft Inquiry</strong>. It will absolutely NOT lower your credit score, no matter how many times you check it.</p>
              </div>
            </section>

            {/* Numbered Steps Section */}
            <section id="fix-errors" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Fix Experian Credit History Errors
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Found a default you never made? An active loan you already closed? Errors in Experian reports are surprisingly common. Here is the exact step-by-step process to dispute and fix them.
              </p>

              <div className="space-y-12 my-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Download the Full Report</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">Don't just look at the score. Download the full PDF report from Experian. You need to identify the exact <strong>Account Number</strong> and <strong>Lender Name</strong> associated with the error.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Raise an Online Dispute</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">Log into the Experian Consumer Services portal. Navigate to the Dispute section. Select the erroneous entry and submit a dispute ticket. You will receive a unique Dispute Reference Number.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">The Verification Period (30 Days)</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">Experian cannot alter data on its own. They will contact the bank/lender who reported the data. The lender has 30 days under RBI guidelines to verify and respond.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-2">Warning: Fraudulent "Credit Repair" Agencies</h4>
                <p className="text-lg text-red-900">Never pay an agency that promises to "erase" your defaults from Experian illegally. True credit repair involves raising legitimate disputes or settling outstanding debts legally. Fake agencies will just take your money.</p>
              </div>
            </section>

            {/* Review / Success Stories */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Success Stories: Recovering From Experian Errors
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                        RS
                      </div>
                      <div>
                        <h4 className="font-bold text-[#2E2E2E]">Rahul S.</h4>
                        <div className="flex text-yellow-400">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"My home loan was rejected despite a 780 CIBIL score. I checked my Experian report and found a stranger's ₹500 default linked to my PAN. Raised a dispute and it was cleared in 20 days!"</p>
                  <div className="flex gap-2">
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">Score Initially: 610</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Score Now: 795</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                        PM
                      </div>
                      <div>
                        <h4 className="font-bold text-[#2E2E2E]">Priya M.</h4>
                        <div className="flex text-yellow-400">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"A closed credit card was still showing as 'Outstanding' on my Experian report, dragging down my score. The step-by-step dispute process got it updated to 'Closed'."</p>
                  <div className="flex gap-2">
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">Issue: False Active Status</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Resolved</span>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs Section */}
            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  { q: "Is Experian score better than CIBIL?", a: "Neither is universally 'better.' Both are credit bureaus licensed by the RBI. Some banks prefer CIBIL, while others heavily rely on Experian, especially for personal loans." },
                  { q: "Why is my Experian score lower than CIBIL?", a: "Different bureaus use different scoring models and may receive data at different times. If a bank reports a late payment to Experian but not CIBIL, your Experian score will be lower." },
                  { q: "Can I check my Experian score for free?", a: "Yes, you can check your Experian score for free once a year directly from their official website or via various financial aggregators." },
                  { q: "How do I fix errors on my Experian report?", a: "You can raise a dispute on the Experian India portal. They have 30 days to verify the discrepancy with the lender and correct it." },
                  { q: "Will checking my Experian report lower my score?", a: "No, checking your own score is a 'soft inquiry' and does not impact your credit score at all." },
                  { q: "How long does it take for Experian to update?", a: "Typically, lenders update data every 30 to 45 days. Once updated by the lender, it reflects in your Experian report." },
                  { q: "Is a 750 Experian score good?", a: "Yes, any score above 750 on Experian is generally considered good and makes you eligible for most loans and credit cards." },
                  { q: "What is the highest possible Experian score?", a: "The Experian credit score ranges from 300 to 900, with 900 being the highest possible score." },
                  { q: "Can a bad Experian score get my loan rejected even with a good CIBIL?", a: "Absolutely. If a lender specifically pulls your Experian report and sees defaults or low scores, they can reject your application regardless of your CIBIL score." },
                  { q: "How can I improve my Experian score fast?", a: "Pay all dues on time, keep credit utilization below 30%, do not apply for multiple loans simultaneously, and regularly check for and dispute any errors." }
                ].map((faq, i) => (
                  <div key={i} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">{faq.q}</h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-4">Experian Score Too Low for a Loan?</h3>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  If unpaid loans or credit card defaults have ruined your Experian credit history, we can help you legally settle them and start fresh.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-transform text-lg shadow-lg">
                  Talk to a Settlement Expert
                </Link>
                <div className="mt-16 pt-8 border-t border-gray-100/20 text-center">
                  <p className="text-gray-400 text-sm italic">
                    Disclaimer: We do not magically erase legitimate credit history. We assist in legally settling overdue debt which is the first step to rebuilding your score.
                  </p>
                </div>
              </div>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              {/* Dark CTA Card */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-black mb-3">Drowning in Debt?</h4>
                  <p className="text-sm text-gray-300 mb-6">Stop harassment calls and settle your unsecured loans for up to 50% less.</p>
                  <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                    Get Free Consultation
                  </Link>
                </div>
              </div>

              {/* White Resources Card */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b border-gray-100 pb-4 mb-4">
                  Related Guides
                </h4>
                <ul className="space-y-4">
                  {[
                    { title: "Improve CIBIL Fast", link: "/how-to-improve-cibil-score" },
                    { title: "Check CIBIL Free", link: "/check-free-cibil-score" },
                    { title: "CIBIL Defaulter List", link: "/how-to-check-the-cibil-defaulter-list" },
                    { title: "Loan Pre-Closure", link: "/receive-documents-after-loan-pre-closure" }
                  ].map((item, i) => (
                    <li key={i}>
                      <Link href={item.link} className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors text-sm font-medium">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                        {item.title}
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
