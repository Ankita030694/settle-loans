import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'What is a Line of Credit? Better than a Personal Loan?',
  description: 'Understand what a line of credit is in India, how this revolving credit facility works, and how it compares against a personal loan to save you thousands in interest.',
  alternates: {
    canonical: 'https://settleloans.in/what-is-line-of-credit',
  },
};

export default function WhatIsLineOfCredit() {
  const tableOfContents = [
    { id: 'introduction', title: 'What is a Line of Credit?' },
    { id: 'how-it-works', title: 'How Revolving Credit Works' },
    { id: 'personal-loan-vs-line-of-credit', title: 'Line of Credit vs. Personal Loan' },
    { id: 'benefits', title: 'Key Benefits of a Line of Credit' },
    { id: 'things-to-keep-in-mind', title: 'Things to Keep in Mind' },
    { id: 'success-stories', title: 'Success Stories' },
    { id: 'faq', title: 'Frequently Asked Questions (FAQ)' },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "What is a Line of Credit? Better than a Personal Loan?",
      "description": "Understand what a line of credit is in India, how this revolving credit facility works, and how it compares against a personal loan to save you thousands in interest.",
      "url": "https://settleloans.in/what-is-line-of-credit"
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
          "name": "What is Line of Credit",
          "item": "https://settleloans.in/what-is-line-of-credit"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "What is a Line of Credit? Better than a Personal Loan?",
      "description": "Understand what a line of credit is in India, how this revolving credit facility works, and how it compares against a personal loan.",
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
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://settleloans.in/what-is-line-of-credit"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the meaning of a line of credit in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A line of credit is a flexible borrowing facility where a lender approves a specific credit limit. You can withdraw funds up to this limit as needed and only pay interest on the amount borrowed, not the entire approved limit."
          }
        },
        {
          "@type": "Question",
          "name": "Is a line of credit better than a personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your needs. A line of credit is better for ongoing or unpredictable expenses because you only pay interest on what you use. A personal loan is better for a one-time, lump-sum requirement."
          }
        },
        {
          "@type": "Question",
          "name": "What is a revolving credit facility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A revolving credit facility, like a line of credit, allows you to borrow, repay, and borrow again up to your approved limit without needing to reapply for a loan."
          }
        },
        {
          "@type": "Question",
          "name": "How is interest calculated on a line of credit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Interest is calculated daily based on the actual amount you have withdrawn and the number of days you hold the funds, not on the total approved limit."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a line of credit for business purposes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, many lenders offer both personal and business lines of credit to help manage working capital or unexpected expenses."
          }
        },
        {
          "@type": "Question",
          "name": "Does a line of credit affect my CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, like any other credit facility, timely repayments will improve your CIBIL score, while defaults or high credit utilization can negatively impact it."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any hidden charges in a line of credit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You should check for processing fees, annual maintenance fees, and prepayment penalties. Most lines of credit offer zero prepayment charges."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I don't use the approved limit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you don't withdraw any money from your line of credit, you typically won't pay any interest. However, an annual maintenance fee might apply depending on the lender."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can I access funds from a line of credit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Once approved, you can instantly transfer funds to your bank account 24/7 through the lender's app or portal."
          }
        },
        {
          "@type": "Question",
          "name": "Is it easy to get a line of credit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Approval depends on your credit score, income, and repayment history. With a good credit profile, getting a line of credit is straightforward."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Credit Solutions & Advice",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "124"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Rahul Verma" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "Understanding revolving credit helped me save significantly on interest compared to my old personal loan."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Priya Sharma" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "The line of credit gives me peace of mind. I only use it when necessary."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Amit Patel" },
          "reviewRating": { "@type": "Rating", "ratingValue": "4" },
          "reviewBody": "Great explanation of how interest is calculated on the utilized amount."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Sneha Reddy" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "Highly recommend reading this before opting for any loan. The flexibility is unmatched."
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
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
            Credit Guide
          </span>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
            What is a <span className="text-[#1F5EFF]">Line of Credit</span>?
          </h1>
          <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
            Is a 'Line of Credit' better than a Personal Loan? Understand how this revolving credit facility can give you financial flexibility and save you thousands in interest.
          </p>
          <div className="text-center">
             <Link href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Explore Your Options
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide px-4 md:px-8 lg:px-12 py-4">
          <div className="text-xs md:text-sm text-[#747474] flex gap-2 items-center">
            <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/blog" className="hover:text-[#1F5EFF] transition-colors">Blog</Link>
            <span className="text-gray-300">/</span>
            <span className="font-bold text-[#2E2E2E]">What is Line of Credit</span>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
          
          {/* Left Sidebar (TOC) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tableOfContents} />
            </div>
          </aside>

          {/* Middle Article Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  What is the Meaning of a Line of Credit in India?
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  A line of credit (LOC) is a flexible borrowing option where a financial institution approves a specific credit limit for you. You don't receive a lump sum all at once. Instead, you can withdraw funds up to your limit whenever you need them. The biggest advantage? You only pay interest on the amount you actually borrow, not the entire approved limit.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Often referred to as a <span className="font-bold text-[#1F5EFF]">revolving credit facility</span>, it functions much like a credit card but usually offers a higher limit, lower interest rates for cash withdrawals, and direct transfers to your bank account.
                </p>
              </div>
            </section>

            <section id="how-it-works" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How Does This Revolving Credit Facility Work?
              </h2>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The Mechanics of an LOC</h4>
                <p className="text-lg leading-relaxed mb-4 text-blue-900">
                  Understanding how it works is key to maximizing its benefits. Here is the step-by-step process:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-blue-900"><strong>Approval:</strong> You are approved for a limit (e.g., ₹5 Lakhs) based on your credit profile.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-blue-900"><strong>Withdrawal:</strong> You face an emergency and need ₹1 Lakh. You withdraw exactly that amount.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-blue-900"><strong>Interest:</strong> You are charged interest only on the ₹1 Lakh, not the remaining ₹4 Lakhs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-blue-900"><strong>Replenishment:</strong> As you repay the ₹1 Lakh, your available limit goes back up to ₹5 Lakhs.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="personal-loan-vs-line-of-credit" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Personal Loan vs Line of Credit: Which is Better?
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                People often get confused between a personal loan and a line of credit. Let's break down the core differences so you can make an informed decision.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Line of Credit</h3>
                  <p className="text-base text-gray-700">Flexible withdrawals up to an approved limit. Best for ongoing, unpredictable expenses or emergencies.</p>
                  <p className="text-base text-gray-700 mt-2 font-bold">Interest charged only on used amount.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Personal Loan</h3>
                  <p className="text-base text-gray-700">A fixed lump sum disbursed at once. Ideal for a single, large, planned expense like a wedding or renovation.</p>
                  <p className="text-base text-gray-700 mt-2 font-bold">Interest charged on the entire loan amount.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Key Benefits of a Line of Credit
              </h2>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Cost-Effective Borrowing</h3>
                    <p className="text-lg text-gray-700">Because you only pay interest on what you use, an LOC can be vastly cheaper than a traditional loan if you don't need all the funds at once.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Readily Available Funds</h3>
                    <p className="text-lg text-gray-700">It acts as a financial safety net. Once approved, the funds are sitting there, ready to be transferred to your account instantly with zero paperwork.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Flexible Repayment</h3>
                    <p className="text-lg text-gray-700">Unlike fixed EMIs of personal loans, an LOC usually requires you to pay a minimum amount each month (mostly interest), giving you breathing room when cash is tight.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="things-to-keep-in-mind" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Things to Keep in Mind
              </h2>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed text-gray-800">
                  While a line of credit is powerful, it requires financial discipline. Because you only have to pay a minimum amount each month, it is easy to fall into a debt trap if you keep carrying a balance.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-4">Warning: Hidden Fees</h4>
                <p className="text-lg leading-relaxed text-red-900 mb-2">
                  Always check the fine print for:
                </p>
                <ul className="list-disc pl-5 text-red-900 space-y-2 text-lg">
                  <li>Processing fees or setup fees.</li>
                  <li>Annual maintenance charges (AMC) applied even if you don't use it.</li>
                  <li>Higher interest rates compared to secured loans.</li>
                </ul>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                User Experiences
              </h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                {/* Review 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      R
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Rahul V.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4">"I used a line of credit for my home renovation. Instead of taking a ₹5 Lakh loan all at once, I only withdrew what I needed to pay the contractors in phases. Saved a lot of interest!"</p>
                  <div className="flex gap-2 text-sm">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-semibold">Approved: ₹5,00,000</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">Used: ₹3,00,000</span>
                  </div>
                </div>

                {/* Review 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      P
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Priya S.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4">"Having an active line of credit means I don't panic during medical emergencies. The money is there just in case, and I don't pay anything if I don't use it."</p>
                  <div className="flex gap-2 text-sm">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-semibold">Approved: ₹2,00,000</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">Peace of Mind</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {jsonLd.find(schema => schema['@type'] === 'FAQPage')?.mainEntity.map((faq: any, index: number) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-[#2E2E2E] mb-2">{faq.name}</h3>
                    <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <h3 className="text-3xl font-black mb-4 relative z-10">Stuck with high-interest loans?</h3>
              <p className="text-xl mb-8 relative z-10 max-w-2xl mx-auto">
                Is a 'Line of Credit' better than a Personal Loan? Understand how revolving credit can save you thousands in interest.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-transform text-lg shadow-xl relative z-10">
                Get Expert Financial Advice
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: Financial products are subject to lender approval, terms, and conditions. A line of credit requires responsible repayment to maintain a good credit score.
              </p>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              {/* Card 1 (Dark CTA) */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10">Need Funds?</h3>
                <p className="text-gray-300 mb-6 relative z-10 text-sm">
                  Don't opt for a personal loan before exploring revolving credit.
                </p>
                <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-600 transition-colors relative z-10 text-sm">
                  Check Eligibility
                </Link>
              </div>

              {/* Card 2 (White Resources) */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">Related Topics</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/personal-loan-vs-line-of-credit" className="group flex items-center text-sm font-semibold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      LOC vs Personal Loan
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-improve-cibil-score" className="group flex items-center text-sm font-semibold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Improve Credit Score
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement" className="group flex items-center text-sm font-semibold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Loan Settlement Guide
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
