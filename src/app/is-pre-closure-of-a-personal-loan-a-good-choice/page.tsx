import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Is Pre-Closure of a Personal Loan a Good Choice",
  description: "Have extra cash and wondering if you should pre-close your personal loan? Read this financial analysis first to compare pre-closing vs investing.",
  alternates: {
    canonical: "https://settleloans.in/is-pre-closure-of-a-personal-loan-a-good-choice",
  },
};

export default function PreClosurePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/is-pre-closure-of-a-personal-loan-a-good-choice#webpage",
        "url": "https://settleloans.in/is-pre-closure-of-a-personal-loan-a-good-choice",
        "name": "Is Pre-Closure of a Personal Loan a Good Choice",
        "description": "Have extra cash and wondering if you should pre-close your personal loan? Read this financial analysis first.",
        "breadcrumb": { "@id": "https://settleloans.in/is-pre-closure-of-a-personal-loan-a-good-choice#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/is-pre-closure-of-a-personal-loan-a-good-choice#breadcrumb",
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
            "name": "Is Pre-Closure of a Personal Loan a Good Choice",
            "item": "https://settleloans.in/is-pre-closure-of-a-personal-loan-a-good-choice"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/is-pre-closure-of-a-personal-loan-a-good-choice#article",
        "headline": "Is Pre-Closure of a Personal Loan a Good Choice",
        "description": "Financial analysis of personal loan pre-closure, comparing it to investing, and determining the best time to foreclose.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Financial Team"
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
        "mainEntityOfPage": { "@id": "https://settleloans.in/is-pre-closure-of-a-personal-loan-a-good-choice#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/is-pre-closure-of-a-personal-loan-a-good-choice#product",
        "name": "Loan Pre-Closure Analysis",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert financial analysis for personal loan pre-closure, comparing it to investing, and determining the best time to foreclose.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "128",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul Sharma" },
            "datePublished": "2024-01-20",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "This analysis perfectly guided my decision to pre-close my personal loan. Saved me lakhs in interest!"
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya Singh" },
            "datePublished": "2024-02-14",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "I was confused between investing and pre-closing. The comparison helped me choose wisely."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit Patel" },
            "datePublished": "2024-03-30",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "Clear and detailed overview of foreclosure charges and benefits."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Neha Verma" },
            "datePublished": "2024-05-22",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "Very insightful. Timing the foreclosure was a game-changer for my finances."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/is-pre-closure-of-a-personal-loan-a-good-choice#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the benefits of personal loan pre closure?",
            "acceptedAnswer": { "@type": "Answer", "text": "The primary benefit is saving on the total interest paid. It also reduces your monthly financial burden (EMI) and improves your debt-to-income ratio, making it easier to secure future credit." }
          },
          {
            "@type": "Question",
            "name": "Is pre closing loan vs investing a better option?",
            "acceptedAnswer": { "@type": "Answer", "text": "It depends on the interest rates. If the after-tax return on your investments is higher than the interest rate of your personal loan, investing is better. Otherwise, pre-closing the loan is the financially sound choice." }
          },
          {
            "@type": "Question",
            "name": "When to foreclose loan for maximum benefit?",
            "acceptedAnswer": { "@type": "Answer", "text": "The best time to foreclose is early in the loan tenure, typically within the first year or two. This is when the interest component of your EMI is at its highest, maximizing your savings." }
          },
          {
            "@type": "Question",
            "name": "Are there charges for pre-closing a personal loan?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, most banks and NBFCs charge a foreclosure or pre-closure penalty, which usually ranges from 2% to 5% of the outstanding principal amount, plus applicable GST." }
          },
          {
            "@type": "Question",
            "name": "How does pre-closure affect my CIBIL score?",
            "acceptedAnswer": { "@type": "Answer", "text": "Pre-closing a personal loan can positively impact your CIBIL score over time because it reduces your overall debt burden, although you may see a temporary minor dip." }
          },
          {
            "@type": "Question",
            "name": "Can I part-prepay instead of full pre-closure?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, many lenders allow part-prepayment. You can pay a lump sum towards the principal amount, which reduces either your future EMI amount or the remaining loan tenure." }
          },
          {
            "@type": "Question",
            "name": "What is the lock-in period for a personal loan?",
            "acceptedAnswer": { "@type": "Answer", "text": "Most personal loans have a lock-in period of 6 to 12 months, during which the lender does not allow pre-closure or part-prepayment." }
          },
          {
            "@type": "Question",
            "name": "What documents do I need after pre-closing a loan?",
            "acceptedAnswer": { "@type": "Answer", "text": "After pre-closing, ensure you collect the No Objection Certificate (NOC) or No Dues Certificate (NDC) from the bank. Also, ensure the bank updates your loan status as 'Closed' with CIBIL." }
          },
          {
            "@type": "Question",
            "name": "Will the bank update my CIBIL report after pre-closure?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, the bank is mandated to report the closure of the loan to credit bureaus within 30 days, which reflects as a closed account in your CIBIL report." }
          },
          {
            "@type": "Question",
            "name": "Can I pre-close a loan taken from an instant loan app?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can. However, review their terms and conditions carefully, as some instant loan apps may have different foreclosure policies or higher penalties." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "introduction", title: "The Dilemma: Pre-close or Continue?" },
    { id: "benefits", title: "Benefits of Personal Loan Pre Closure" },
    { id: "pre-closing-vs-investing", title: "Pre Closing Loan vs Investing" },
    { id: "when-to-foreclose", title: "When to Foreclose Loan" },
    { id: "part-prepayment", title: "Part-Prepayment Alternative" },
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
              Financial Analysis
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Is Pre-Closure of a <span className="text-[#1F5EFF]">Personal Loan</span> a Good Choice?
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Have extra cash and wondering if you should pre-close your personal loan? Read this financial analysis first to make the best decision for your money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Get Expert Advice
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
                <li className="font-bold text-[#2E2E2E]">Is Pre-Closure of a Personal Loan a Good Choice</li>
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

            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Dilemma: Pre-close or Continue?
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  You've received a year-end bonus, sold an asset, or simply saved up a significant amount of money. The immediate thought for many is to use this lump sum to clear their personal loan and become debt-free. But is this always the smartest financial move?
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Personal loans typically carry high interest rates ranging from 10.5% to over 24%. While clearing such an expensive debt sounds appealing, there are foreclosure charges, tax implications, and the opportunity cost of not investing that money to consider.
                </p>
              </div>
            </section>

            <section id="benefits" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Benefits of Personal Loan Pre Closure
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Let's start by understanding why so many people rush to close their personal loans when they get the chance. The <strong>benefits of personal loan pre closure</strong> are substantial, both financially and psychologically.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Massive Interest Savings</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Personal loans calculate interest on reducing balance. By pre-closing, you avoid paying interest for the remaining tenure, which can translate into lakhs of rupees saved.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Increased Monthly Cash Flow</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Eliminating that hefty EMI frees up a significant portion of your monthly salary. You can redirect this newfound cash flow towards savings, investments, or improving your lifestyle.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Lower Debt-to-Income Ratio</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Closing the loan lowers your debt-to-income (DTI) ratio. A lower DTI makes you a much more attractive candidate to lenders if you need to apply for a crucial home loan in the future.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Psychological Relief</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Never underestimate the peace of mind that comes with being debt-free. The psychological burden of owing money, especially high-interest unsecured debt, is lifted.
                  </p>
                </div>
              </div>
            </section>

            <section id="pre-closing-vs-investing" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Pre Closing Loan vs Investing: The Math
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The core debate of <strong>pre closing loan vs investing</strong> comes down to a simple mathematical comparison: <em>Does your investment yield a higher post-tax return than the interest rate of your loan?</em>
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The Comparison Framework</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  To make the right choice, compare these two numbers:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Effective Loan Cost:</strong> Your loan interest rate (e.g., 14%) + Foreclosure Penalty (e.g., 4%).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Post-Tax Investment Return:</strong> The expected return from mutual funds, FDs, or stocks, after deducting capital gains tax (e.g., 10-12% post-tax).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>The Rule:</strong> If the effective loan cost is higher than the post-tax investment return, pre-close the loan. If you can confidently generate a higher return investing, keep the loan and invest the cash.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>Risk Assessment:</strong> Remember that loan interest savings are guaranteed, risk-free returns. Investment returns, especially in equity markets, carry risk and volatility. For most individuals with personal loans at 14%+, the guaranteed saving of pre-closure outweighs the risky potential of investing.
                </p>
              </div>
            </section>

            <section id="when-to-foreclose" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                When to Foreclose Loan: Timing is Everything
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Even if you have the funds, knowing exactly <strong>when to foreclose loan</strong> is critical to maximizing your financial benefit. Because of how EMIs are structured, the timing of your foreclosure dictates how much you actually save.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Early in the Tenure (Recommended)</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      In the first half of your loan tenure, a massive portion of your EMI goes toward paying interest, not the principal. Foreclosing during this period (e.g., year 1 or 2 of a 5-year loan) yields the maximum interest savings.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Check the Lock-in Period</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Most banks have a lock-in period of 6 to 12 months. You cannot foreclose the loan during this time. Wait until exactly the month the lock-in period expires to initiate the closure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Late in the Tenure (Not Recommended)</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If you are in the last year of a 5-year loan, your EMI consists mostly of principal repayment. The interest has already been paid to the bank. Foreclosing now offers negligible interest savings while still triggering a penalty on the principal. It is often better to just let the loan run its course.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="part-prepayment" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Alternative: Part-Prepayment
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If you don't have enough to clear the entire loan, or if you want to keep some cash liquid for emergencies, part-prepayment is an excellent middle ground.
              </p>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Beware of Penalties</h4>
                <p className="text-red-900 leading-relaxed">
                  Whether you do full pre-closure or part-prepayment, banks will levy charges. A foreclosure penalty usually costs 2% to 5% of the outstanding principal amount + 18% GST. Always calculate if your interest savings minus this penalty results in a net positive figure before paying.
                </p>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Real Scenarios
              </h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RS
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Rahul Sharma</h4>
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
                    "This analysis perfectly guided my decision to pre-close my personal loan exactly at the 13th month. Saved me lakhs in interest!"
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Loan Amount: ₹10L</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Interest Saved: ₹1.2L</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      PS
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Priya Singh</h4>
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
                    "I was confused between investing and pre-closing. Realizing I was in the 4th year, I chose to invest instead and let the loan run."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Loan Amount: ₹5L</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Better ROI via Investing</span>
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
              <h3 className="text-3xl font-black mb-6 relative z-10">Have extra cash and wondering if you should pre-close?</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Stop guessing. Connect with our financial experts to analyze your loan statement and find out exactly if you should pre-close, part-prepay, or invest your money.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Get Your Loan Analyzed
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: This financial analysis is for educational purposes. Personal loan terms vary by lender, and investing carries market risk. Consult a certified financial planner for advice tailored to your specific situation.
              </p>
            </div>

          </article>

          {/* Right Column: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">Not Sure About The Math?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  Let us calculate your exact savings from pre-closing your personal loan based on your statement.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] w-full py-3 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors relative z-10">
                  Calculate Savings
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Financial Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/loan-settlement-vs-repayment" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Settlement vs Repayment
                    </Link>
                  </li>
                  <li>
                    <Link href="/smart-ways-to-manage-emi-payments" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Smart EMI Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Improving CIBIL Score
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
