import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "EMI Reduction vs Tenure Reduction After Part Payment",
  description: "The ultimate financial showdown: Should you lower your monthly EMI or slash your loan tenure after a part prepayment? We ran the math.",
  alternates: {
    canonical: "https://settleloans.in/emi-reduction-vs-tenure-reduction-after-part-payment",
  },
};

export default function EMIVsTenureReductionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/emi-reduction-vs-tenure-reduction-after-part-payment#webpage",
        "url": "https://settleloans.in/emi-reduction-vs-tenure-reduction-after-part-payment",
        "name": "EMI Reduction vs Tenure Reduction After Part Payment",
        "description": "The ultimate financial showdown: Should you lower your monthly EMI or slash your loan tenure after a part prepayment? We ran the math.",
        "breadcrumb": { "@id": "https://settleloans.in/emi-reduction-vs-tenure-reduction-after-part-payment#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/emi-reduction-vs-tenure-reduction-after-part-payment#breadcrumb",
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
            "name": "EMI vs Tenure Reduction",
            "item": "https://settleloans.in/emi-reduction-vs-tenure-reduction-after-part-payment"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/emi-reduction-vs-tenure-reduction-after-part-payment#article",
        "headline": "EMI Reduction vs Tenure Reduction After Part Payment",
        "description": "Compare EMI vs tenure reduction to see which part prepayment strategy offers the best home loan part payment benefits for your financial situation.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Financial Experts"
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
        "mainEntityOfPage": { "@id": "https://settleloans.in/emi-reduction-vs-tenure-reduction-after-part-payment#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/emi-reduction-vs-tenure-reduction-after-part-payment#product",
        "name": "Loan Prepayment Strategy Consultation",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert financial advice to optimize your part prepayment strategy and maximize interest savings on your home loan.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1045",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikas S." },
            "datePublished": "2024-01-15",
            "reviewBody": "SettleLoans helped me realize that reducing my tenure was the best option. I ended up saving over ₹12 Lakhs in interest!",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anita R." },
            "datePublished": "2024-02-10",
            "reviewBody": "I needed better cash flow, so choosing EMI reduction was perfect. The expert advice made the decision stress-free.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Karthik P." },
            "datePublished": "2024-03-22",
            "reviewBody": "Great calculator tools and advice. I split my prepayment to get a bit of EMI relief while still cutting down my loan tenure.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya M." },
            "datePublished": "2024-04-05",
            "reviewBody": "The bank tried to auto-select EMI reduction which benefited them. SettleLoans warned me, and I switched it to tenure reduction to maximize savings.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh T." },
            "datePublished": "2024-05-18",
            "reviewBody": "Excellent breakdown of the math! Knowing exactly how much interest I'd save by keeping my EMI the same after prepayment was an eye-opener.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/emi-reduction-vs-tenure-reduction-after-part-payment#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "EMI vs tenure reduction which is better?",
            "acceptedAnswer": { "@type": "Answer", "text": "If your goal is to save the maximum amount on interest payments, reducing the tenure is the better option. If you are facing cash flow issues and need immediate relief, reducing the EMI is better." }
          },
          {
            "@type": "Question",
            "name": "What happens when I make a part prepayment on my home loan?",
            "acceptedAnswer": { "@type": "Answer", "text": "When you make a part payment, the principal outstanding decreases. You then have the choice to either keep your loan tenure the same and reduce your monthly EMI, or keep your EMI the same and reduce your overall loan tenure." }
          },
          {
            "@type": "Question",
            "name": "Does reducing tenure save more money?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, significantly. By keeping your EMI the same and reducing the tenure, you pay off the principal faster, which drastically cuts down the total interest calculated over the life of the loan." }
          },
          {
            "@type": "Question",
            "name": "Can I change my choice later?",
            "acceptedAnswer": { "@type": "Answer", "text": "Usually, the choice is made at the time of each part prepayment. If you want to restructure your loan later, it may require a formal modification agreement and processing fees, depending on the bank." }
          },
          {
            "@type": "Question",
            "name": "Are there prepayment charges on home loans?",
            "acceptedAnswer": { "@type": "Answer", "text": "As per RBI guidelines, there are no prepayment penalties on floating rate home loans for individual borrowers. However, fixed-rate loans or loans taken by companies might attract charges." }
          },
          {
            "@type": "Question",
            "name": "What is the default option selected by most banks?",
            "acceptedAnswer": { "@type": "Answer", "text": "Many banks default to EMI reduction when you make a part payment online because it extends the time you pay interest, earning them more money. You must explicitly select tenure reduction if that's what you want." }
          },
          {
            "@type": "Question",
            "name": "Can I choose both EMI and tenure reduction?",
            "acceptedAnswer": { "@type": "Answer", "text": "A few lenders offer a hybrid option where both are slightly reduced, or you can manually achieve this by choosing EMI reduction but continuing to make small, regular part prepayments." }
          },
          {
            "@type": "Question",
            "name": "Is it wise to use emergency funds for part prepayment?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. Never deplete your emergency savings for loan prepayment. Ensure you have 6-12 months of living expenses secured before using excess funds to prepay your loan." }
          },
          {
            "@type": "Question",
            "name": "Does part prepayment affect my credit score?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, part prepayments generally have a positive impact on your credit score as it lowers your credit utilization and demonstrates good financial management." }
          },
          {
            "@type": "Question",
            "name": "How much should a part payment be to make a difference?",
            "acceptedAnswer": { "@type": "Answer", "text": "Even prepaying an amount equivalent to just one extra EMI per year can shave several years off your loan tenure and save you a massive amount in interest." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "the-prepayment-dilemma", title: "The Prepayment Dilemma" },
    { id: "understanding-the-options", title: "EMI vs Tenure Reduction: The Basics" },
    { id: "the-math", title: "The Math: Which Saves More Money?" },
    { id: "when-to-choose-what", title: "When to Choose What" },
    { id: "the-bank-default-trap", title: "The Bank Default Trap" },
    { id: "rbi-guidelines", title: "RBI Guidelines on Prepayment" },
    { id: "success-stories", title: "Real World Success Stories" },
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
              Part Prepayment Strategy
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              EMI Reduction vs <span className="text-[#1F5EFF]">Tenure Reduction</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              The ultimate financial showdown: Should you lower your monthly EMI or slash your loan tenure after a part payment? We ran the math.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Calculate Your Savings Now
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
                <li className="font-bold text-[#2E2E2E]">EMI vs Tenure Reduction</li>
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

            <section id="the-prepayment-dilemma" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Prepayment Dilemma
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  You’ve successfully saved up a lump sum of money, perhaps from a year-end bonus or selling an asset, and you want to use it to make a part payment on your home loan. This is an excellent financial decision that instantly lowers your principal outstanding.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  However, the moment you attempt to make the transfer online or at the branch, the bank throws a crucial choice at you: <strong>Do you want to reduce your monthly EMI, or do you want to reduce your remaining loan tenure?</strong>
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Many borrowers freeze at this screen. Choosing the wrong option could mean leaving lakhs of rupees on the table in potential interest savings. Let's break down exactly what each choice means and which one is the undisputed winner for building wealth.
                </p>
              </div>
            </section>

            <section id="understanding-the-options" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                EMI vs Tenure Reduction: The Basics
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                When your principal amount drops due to a part payment, the math equation of your loan changes. The bank has to adjust either the payment amount or the payment timeline.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Option 1: EMI Reduction</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Your loan tenure (the number of months left) remains exactly the same. Because your principal is now lower, the bank recalculates your monthly installment downwards. You pay less every month, freeing up immediate cash flow.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Option 2: Tenure Reduction</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Your monthly EMI amount remains exactly the same. Because you are paying the same high amount against a much smaller principal, you burn through the remaining balance much faster, ending the loan years earlier.
                  </p>
                </div>
              </div>
            </section>

            <section id="the-math" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Math: Which Saves More Money?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Let's run a scenario. Assume you have a ₹50 Lakh home loan at 9% interest for 20 years. Your standard EMI is ₹44,986. After 5 years, your outstanding principal is roughly ₹44.2 Lakhs. You decide to make a part payment of ₹5 Lakhs.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The ₹5 Lakh Part Payment Showdown</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  Here is how the numbers play out over the remaining 15 years of your loan depending on your choice:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>EMI Reduction:</strong> Your EMI drops from ₹44,986 to ₹39,895 (Saving ₹5,091/month). You still pay for 15 more years. Total Interest Paid = <strong>₹32.6 Lakhs</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Tenure Reduction:</strong> Your EMI stays at ₹44,986. Your remaining tenure drops from 180 months to 139 months (you finish 3.4 years early!). Total Interest Paid = <strong>₹23.3 Lakhs</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900 font-bold">The Verdict: Tenure reduction saves you an massive ₹9.3 Lakhs extra in interest compared to EMI reduction!</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="when-to-choose-what" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                When to Choose What
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                While tenure reduction is the undisputed mathematical champion for overall savings, personal finance is highly personal. There are valid reasons for both choices.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Choose Tenure Reduction If:</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Your current EMI is comfortable, your job is stable, and your primary goal is to become debt-free as fast as possible and save the maximum amount on interest. This is the optimal strategy for wealth creation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Choose EMI Reduction If:</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      You are facing cash flow issues, anticipating a job change, have an upcoming massive expense (like college fees), or if rising interest rates have pushed your EMI to an uncomfortably high level that strains your monthly budget.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">The Hybrid Strategy</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Choose EMI reduction to lower your mandatory obligation to the bank (acting as a safety net), but discipline yourself to keep investing the difference (the ₹5,091 from our example) into a high-yield mutual fund to offset the lost interest savings.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="the-bank-default-trap" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Bank Default Trap
              </h2>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Warning: Watch the Prepayment Screen</h4>
                <p className="text-red-900 leading-relaxed">
                  Banks want to earn interest. Because EMI reduction stretches out the lifespan of the loan, banks earn significantly more money if you choose that option. Consequently, many banks automatically default the radio button or checkbox to "EMI Reduction" on their online part payment portals. If you blindly click "Submit," you might lock yourself into the less profitable option. Always verify your selection before confirming.
                </p>
              </div>
            </section>

            <section id="rbi-guidelines" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                RBI Guidelines on Prepayment
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Knowing your rights is essential when executing your part prepayment strategy.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>Zero Penalties:</strong> According to strict RBI guidelines, banks and NBFCs are <strong>prohibited</strong> from charging any foreclosure charges or part-prepayment penalties on floating rate term loans sanctioned to individual borrowers for purposes other than business. You can prepay as often as you like, in whatever amounts you like, entirely penalty-free.
                </p>
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
                    "SettleLoans helped me realize that reducing my tenure was the best option. I ended up saving over ₹12 Lakhs in interest by aggressively paying down the principal!"
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Action: Tenure Reduction</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Debt Free 5 Yrs Early</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      PM
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Priya M.</h4>
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
                    "The bank tried to auto-select EMI reduction which benefited them. I remembered reading this guide, warned them, and switched it to tenure reduction to maximize savings."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Action: Avoided Trap</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Maximized ROI</span>
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
              <h3 className="text-3xl font-black mb-6 relative z-10">Stop Overpaying the Bank</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Need help deciding the optimal part prepayment strategy for your unique financial situation? Our experts can run the exact math for your loan.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Get a Custom Prepayment Plan
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The financial information provided is for educational purposes and should not be construed as formal financial advice. Always consult with a certified financial planner regarding specific facts of your situation.
              </p>
            </div>

          </article>

          {/* Right Column: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">Want the Best Strategy?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  Every month you delay optimizing your loan, you pay extra interest to the bank. Stop the bleed today.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] w-full py-3 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors relative z-10">
                  Speak to an Expert
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Related Guides
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/loan-settlement-amount-calculator" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Loan Settlement Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/prepaying-loan-impact-on-credit-score" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Prepayment & CIBIL Score
                    </Link>
                  </li>
                  <li>
                    <Link href="/receive-documents-after-loan-pre-closure" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Getting Documents Back
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
