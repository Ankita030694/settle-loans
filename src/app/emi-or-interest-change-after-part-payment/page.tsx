import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Reduce EMI or Tenure After Part Payment? Make the Right Choice",
  description: "Find out how part payment effects on loan work. Learn whether you should lower EMI vs lower tenure to save the most on interest and clear your debt faster.",
  alternates: {
    canonical: "https://settleloans.in/emi-or-interest-change-after-part-payment",
  },
};

export default function EMIVsTenurePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/emi-or-interest-change-after-part-payment#webpage",
        "url": "https://settleloans.in/emi-or-interest-change-after-part-payment",
        "name": "Reduce EMI or Tenure After Part Payment? Make the Right Choice",
        "description": "Find out how part payment effects on loan work. Learn whether you should lower EMI vs lower tenure to save the most on interest and clear your debt faster.",
        "breadcrumb": { "@id": "https://settleloans.in/emi-or-interest-change-after-part-payment#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/emi-or-interest-change-after-part-payment#breadcrumb",
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
            "name": "EMI vs Tenure After Part Payment",
            "item": "https://settleloans.in/emi-or-interest-change-after-part-payment"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/emi-or-interest-change-after-part-payment#article",
        "headline": "Reduce EMI or Tenure After Part Payment? Make the Right Choice",
        "description": "Understand part payment effects on loan and the critical financial differences between lowering your EMI vs lowering your tenure.",
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
        "datePublished": "2024-07-24",
        "dateModified": "2024-07-24",
        "mainEntityOfPage": { "@id": "https://settleloans.in/emi-or-interest-change-after-part-payment#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/emi-or-interest-change-after-part-payment#product",
        "name": "Loan Prepayment & Restructuring Advisory",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert financial advisory services to help you decide whether to reduce EMI or tenure after part payment and optimize your loan closure strategy.",
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
            "author": { "@type": "Person", "name": "Vikas M." },
            "datePublished": "2024-02-15",
            "reviewBody": "I made a ₹5 Lakh part payment on my home loan. The bank pushed me to reduce the EMI. Thanks to SettleLoans advice, I chose to reduce tenure and saved almost ₹12 Lakhs in total interest over the remaining years!",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya S." },
            "datePublished": "2024-03-22",
            "reviewBody": "I was totally confused about part payment effects on loan. The consultation cleared it up, and I successfully navigated my options without falling for the bank's trick to keep me paying interest longer.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anil K." },
            "datePublished": "2024-04-10",
            "reviewBody": "Excellent guidance on lower EMI vs lower tenure. Because of a sudden job change, reducing my EMI gave me the breathing room I desperately needed to avoid a default.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Deepa R." },
            "datePublished": "2024-05-05",
            "reviewBody": "The calculation breakdown was an eye-opener. I opted to keep my EMI same and reduced my tenure. The bank tried to change it without my consent, but I held my ground.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
             "@type": "Review",
             "author": { "@type": "Person", "name": "Rohan J." },
             "datePublished": "2024-06-12",
             "reviewBody": "A highly recommended read before you make any part payments. Making the wrong choice really can cost you heavily. SettleLoans helped me negotiate the restructuring perfectly.",
             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/emi-or-interest-change-after-part-payment#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the primary part payment effects on a loan?",
            "acceptedAnswer": { "@type": "Answer", "text": "When you make a part payment, the entire amount is deducted from your outstanding principal. This reduces the base on which future interest is calculated, resulting in either a lower EMI or a shorter loan tenure." }
          },
          {
            "@type": "Question",
            "name": "Is it better to reduce EMI or tenure after part payment?",
            "acceptedAnswer": { "@type": "Answer", "text": "Financially, reducing the tenure while keeping the EMI the same is always better because you save significantly more on overall interest and become debt-free faster. Reducing EMI is only advisable if you are facing a monthly cash crunch." }
          },
          {
            "@type": "Question",
            "name": "Why do banks prefer that I reduce my EMI instead of my tenure?",
            "acceptedAnswer": { "@type": "Answer", "text": "Banks earn their profits from the interest you pay over time. If you keep a longer tenure (by reducing EMI), you end up paying interest for a longer period, which maximizes the bank's profit compared to you closing the loan early." }
          },
          {
            "@type": "Question",
            "name": "Can a bank force me to reduce the EMI after a part payment?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. By default, many banks will reduce the EMI because their systems are programmed that way. However, you have the right to submit a written request instructing them to keep the EMI constant and reduce the tenure." }
          },
          {
            "@type": "Question",
            "name": "Are there any charges for making a part payment on a loan?",
            "acceptedAnswer": { "@type": "Answer", "text": "As per RBI guidelines, banks cannot charge any pre-payment or part-payment penalty on floating-rate home loans and personal loans taken by individual borrowers. Fixed-rate loans or loans taken by companies may still attract charges." }
          },
          {
            "@type": "Question",
            "name": "How soon does the part payment reflect in my loan account?",
            "acceptedAnswer": { "@type": "Answer", "text": "Usually, a part payment reflects within 1 to 3 working days. Your next generated statement will show the reduced principal and the updated EMI or tenure." }
          },
          {
            "@type": "Question",
            "name": "Can I choose to reduce both EMI and tenure slightly?",
            "acceptedAnswer": { "@type": "Answer", "text": "Most standard bank systems don't allow a hybrid choice directly. You typically have to choose one parameter to adjust. However, you can achieve a similar effect by reducing the EMI and then voluntarily increasing it later through a mandate revision." }
          },
          {
            "@type": "Question",
            "name": "What happens if I make part payments regularly?",
            "acceptedAnswer": { "@type": "Answer", "text": "Regular part payments have a compounding effect on interest savings. If you continually reduce the principal, you will dramatically shorten the lifespan of your loan." }
          },
          {
            "@type": "Question",
            "name": "Does reducing EMI after part payment affect my credit score?",
            "acceptedAnswer": { "@type": "Answer", "text": "No, it does not negatively affect your credit score. In fact, making part payments shows good repayment behavior and reduces your credit utilization ratio, which is positive for your CIBIL score." }
          },
          {
            "@type": "Question",
            "name": "What if I have an emergency after making a large part payment?",
            "acceptedAnswer": { "@type": "Answer", "text": "This is a key risk. If you use all your liquid savings for a part payment, you might face a liquidity crisis later. Some banks offer 'overdraft' style home loans (like SBI MaxGain) where you can park excess funds and withdraw them if needed." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "the-bankers-dilemma", title: "The Banker's Dilemma" },
    { id: "how-part-payment-works", title: "How Part Payment Actually Works" },
    { id: "reduce-tenure", title: "Option 1: Reduce Tenure (The Wealth Builder)" },
    { id: "reduce-emi", title: "Option 2: Reduce EMI (The Cashflow Saver)" },
    { id: "lower-emi-vs-lower-tenure", title: "Lower EMI vs Lower Tenure: The Verdict" },
    { id: "the-banks-default-trick", title: "The Bank's Default Trick" },
    { id: "success-stories", title: "Success Stories & Real Impact" },
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
              Financial Strategy Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Reduce EMI or Tenure After Part Payment? <span className="text-[#1F5EFF]">Choose Wisely</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              After a part-payment, the bank asks: Reduce your EMI or reduce your Tenure? Making the wrong choice will cost you heavily.
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
                <li className="font-bold text-[#2E2E2E]">EMI or Interest Change After Part Payment</li>
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

            <section id="the-bankers-dilemma" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Banker's Dilemma
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  You've finally managed to save a lump sum amount and decided to make a part payment on your home loan or personal loan. It's a great financial move! But almost immediately, your bank throws a curveball at you.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  They offer you a choice that sounds deceptively simple: <strong>"Do you want to reduce your monthly EMI, or do you want to keep the EMI the same and reduce your loan tenure?"</strong>
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Most borrowers are tempted by the immediate relief of a smaller monthly deduction. However, understanding the true part payment effects on loan interest over the long term is critical. One option builds your wealth, while the other continues to line the bank's pockets.
                </p>
              </div>
            </section>

            <section id="how-part-payment-works" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How Part Payment Actually Works
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Before deciding whether to reduce EMI or tenure after part payment, you must understand the underlying math. Your loan consists of the Principal (the money you borrowed) and the Interest (the bank's fee).
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">100% Principal Reduction</h4>
                  <p className="text-gray-700 leading-relaxed">
                    When you make a part payment, the entire amount goes directly toward reducing your outstanding principal. None of it goes toward interest.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">The Recalculation</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Because your principal is now lower, the bank must recalculate your loan. They can either stretch the new, smaller balance over your original remaining time (lowering EMI) or keep your payments high to kill the balance faster (lowering tenure).
                  </p>
                </div>
              </div>
            </section>

            <section id="reduce-tenure" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Option 1: Reduce Tenure (The Wealth Builder)
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If you choose to keep your EMI constant and reduce your tenure, you are making an aggressive move to become debt-free faster. This is almost always the mathematically superior choice.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Why Reducing Tenure Wins</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  By continuing to pay the same high EMI against a reduced principal, a much larger portion of your monthly payment goes toward the principal rather than interest.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Massive Interest Savings:</strong> You save lakhs of rupees in interest that would have otherwise accrued over the years.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Faster Debt Freedom:</strong> Your loan will close years ahead of schedule.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Forced Savings:</strong> Since your monthly cash outflow remains the same, you aren't tempted to spend the "saved" EMI money on lifestyle inflation.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="reduce-emi" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Option 2: Reduce EMI (The Cashflow Saver)
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If you choose to reduce your EMI and keep the loan tenure the same, the bank stretches your smaller outstanding principal over the remaining months. 
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  <strong>The Catch:</strong> While your monthly burden decreases, you are allowing the bank to charge you interest over a longer period. Your total interest savings are drastically lower compared to the tenure-reduction option.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed font-bold">
                  When should you choose this?
                </p>
                <ul className="list-disc pl-6 text-gray-800 mt-2 space-y-2">
                  <li>You have suffered a job loss or pay cut and desperately need to increase your monthly disposable income.</li>
                  <li>You are planning to take another loan (like a car loan) and need a lower EMI to qualify based on your debt-to-income ratio.</li>
                  <li>You are a disciplined investor who will take the monthly EMI savings and invest them in an instrument that yields a significantly higher return than your loan's interest rate (e.g., equity mutual funds).</li>
                </ul>
              </div>
            </section>

            <section id="lower-emi-vs-lower-tenure" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Lower EMI vs Lower Tenure: The Verdict
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Let's look at a hypothetical example. Suppose you have an outstanding loan of ₹50 Lakhs at 9% interest with 15 years remaining. You make a part payment of ₹5 Lakhs.
              </p>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Scenario A: Reduce Tenure</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Your EMI remains ₹50,713. Your tenure drops from 180 months to approximately 148 months. You save nearly ₹11.5 Lakhs in total interest.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Scenario B: Reduce EMI</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Your tenure remains 180 months. Your EMI drops to ₹45,642. Over the remaining 15 years, you save only about ₹4.1 Lakhs in interest compared to your original schedule.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="the-banks-default-trick" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Bank's "Default" Trick
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Be highly vigilant when making an online part payment through your banking app or net banking. 
              </p>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Watch Out for Auto-Selection</h4>
                <p className="text-red-900 leading-relaxed">
                  Many banking systems are hardcoded to default to "Reduce EMI" when a part payment is made. This is because banks want to maximize their interest income over the long term. If you want to reduce your tenure, you must actively select that option, check a specific box, or submit a written instruction to the branch manager. Never assume the bank will automatically choose the option that saves you the most money.
                </p>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Success Stories & Real Impact
              </h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      VM
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Vikas M.</h4>
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
                    "I made a ₹5 Lakh part payment on my home loan. The bank pushed me to reduce the EMI. Thanks to SettleLoans advice, I chose to reduce tenure and saved almost ₹12 Lakhs in total interest over the remaining years!"
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Choice: Reduced Tenure</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Saved: ₹12 Lakhs</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      PS
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Priya S.</h4>
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
                    "I was totally confused about part payment effects on loan. The consultation cleared it up, and I successfully navigated my options without falling for the bank's trick to keep me paying interest longer."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Choice: Kept EMI Same</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Debt Free Faster</span>
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
              <h3 className="text-3xl font-black mb-6 relative z-10">Don't Let the Bank Decide for You</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Are you confused about how to structure your loan part payment to maximize savings? Get expert advice and avoid costly mistakes.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Consult a Financial Expert Today
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The financial calculations and strategies discussed are for illustrative and educational purposes. Actual numbers will vary based on your specific loan agreement and bank policies. Always verify with your lender before making part payments.
              </p>
            </div>

          </article>

          {/* Right Column: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">Save Lakhs in Interest</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  Making a part payment is great, but choosing how it's applied makes all the difference. Get it right.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] w-full py-3 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors relative z-10">
                  Calculate Savings
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Loan Management Guides
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/loan-settlement-amount-calculator" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Settlement Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      CIBIL Improvement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement-vs-repayment" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Settlement vs Repayment
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
