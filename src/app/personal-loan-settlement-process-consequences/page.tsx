import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "The Hidden Consequences of the Personal Loan Settlement Process",
  description: "Learn the crucial difference between closing and settling a personal loan. Understand the severe long-term consequences of a 'Settled' CIBIL status.",
  alternates: {
    canonical: "https://settleloans.in/personal-loan-settlement-process-consequences",
  },
};

export default function PersonalLoanSettlementConsequencesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/personal-loan-settlement-process-consequences#webpage",
        "url": "https://settleloans.in/personal-loan-settlement-process-consequences",
        "name": "The Hidden Consequences of the Personal Loan Settlement Process",
        "description": "A comprehensive guide explaining the crucial difference between closing a loan (paying in full) and settling it (paying a negotiated, lower amount), and the impact on your CIBIL score.",
        "breadcrumb": { "@id": "https://settleloans.in/personal-loan-settlement-process-consequences#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/personal-loan-settlement-process-consequences#breadcrumb",
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
            "name": "Personal Loan Settlement Consequences",
            "item": "https://settleloans.in/personal-loan-settlement-process-consequences"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/personal-loan-settlement-process-consequences#article",
        "headline": "The Hidden Consequences of the Personal Loan Settlement Process",
        "description": "Details the severe long-term consequences of a Settled status on a CIBIL report and explains the step-by-step process of how settlement works.",
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
        "datePublished": "2024-07-24",
        "dateModified": "2024-07-24",
        "mainEntityOfPage": { "@id": "https://settleloans.in/personal-loan-settlement-process-consequences#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/personal-loan-settlement-process-consequences#product",
        "name": "Loan Settlement Advisory Services",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert guidance on personal loan settlement consequences, helping borrowers make informed decisions and minimize credit score damage.",
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
            "reviewBody": "SettleLoans helped me understand that settling my loan would destroy my CIBIL. They instead helped me negotiate a restructuring plan. Best decision ever.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya R." },
            "datePublished": "2024-02-22",
            "reviewBody": "I was about to accept a 'discounted' settlement from the bank, not knowing it would block me from home loans for 7 years. The legal team saved my future.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit K." },
            "datePublished": "2024-03-10",
            "reviewBody": "Very professional. They explained the exact consequences of loan settlement and helped me clean up my 'Settled' CIBIL status by paying the remaining dues.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Neha T." },
            "datePublished": "2024-04-05",
            "reviewBody": "The bank recovery agents told me settling wouldn't hurt my CIBIL score. SettleLoans showed me the real RBI guidelines and helped me avoid a huge mistake.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh M." },
            "datePublished": "2024-05-18",
            "reviewBody": "Their step-by-step guidance on how the settlement process works gave me clarity. I was able to make an informed decision without bank harassment.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/personal-loan-settlement-process-consequences#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between loan closure and loan settlement?",
            "acceptedAnswer": { "@type": "Answer", "text": "Loan closure means paying the full outstanding amount (principal + interest) which results in a 'Closed' status on your CIBIL report. Loan settlement means negotiating to pay a lesser amount, resulting in a 'Settled' status, which negatively impacts your credit score." }
          },
          {
            "@type": "Question",
            "name": "How does a 'Settled' status affect my CIBIL score?",
            "acceptedAnswer": { "@type": "Answer", "text": "A 'Settled' status acts as a red flag for future lenders. It typically causes a massive drop in your CIBIL score (often 70-100 points or more) and indicates that you were unable to repay your debt in full." }
          },
          {
            "@type": "Question",
            "name": "How long does a 'Settled' status stay on my CIBIL report?",
            "acceptedAnswer": { "@type": "Answer", "text": "A 'Settled' status remains on your CIBIL credit report for up to 7 years. During this period, it will be extremely difficult to secure new credit, such as home loans, car loans, or credit cards." }
          },
          {
            "@type": "Question",
            "name": "Can I convert a 'Settled' loan to a 'Closed' loan later?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can often contact the bank later, pay the waived-off amount (the difference between the total dues and the settled amount), and request them to update the status to 'Closed'." }
          },
          {
            "@type": "Question",
            "name": "Do banks easily agree to a personal loan settlement?",
            "acceptedAnswer": { "@type": "Answer", "text": "Banks usually only agree to a settlement when the loan has been unpaid for several months (typically over 90 days) and they believe recovering the full amount is unlikely." }
          },
          {
            "@type": "Question",
            "name": "Will I get a No Dues Certificate (NDC) after settling?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, once you pay the agreed settlement amount, the bank will issue a No Dues Certificate (NDC). However, this certificate will specify that the account was 'Settled', not closed through full repayment." }
          },
          {
            "@type": "Question",
            "name": "Can recovery agents harass me after a settlement?",
            "acceptedAnswer": { "@type": "Answer", "text": "Once a loan is officially settled and you have the NDC, recovery agents cannot legally contact or harass you for that specific loan account." }
          },
          {
            "@type": "Question",
            "name": "Does loan settlement impact my chances of getting a job?",
            "acceptedAnswer": { "@type": "Answer", "text": "It can. Many financial institutions, MNCs, and government sectors now perform background credit checks. A 'Settled' status or poor CIBIL score can negatively impact your background verification." }
          },
          {
            "@type": "Question",
            "name": "Is it better to take another loan to close an existing one instead of settling?",
            "acceptedAnswer": { "@type": "Answer", "text": "Taking a debt consolidation loan to fully close your existing loans is generally better for your CIBIL score than settling, provided you can afford the new EMI." }
          },
          {
            "@type": "Question",
            "name": "What is a One Time Settlement (OTS)?",
            "acceptedAnswer": { "@type": "Answer", "text": "OTS is a formal agreement where the borrower offers a lump sum amount to settle the debt at a discount. If the bank accepts, the loan is marked as 'Settled' once the payment is made." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "settlement-vs-closure", title: "Settlement vs. Closure" },
    { id: "impact-cibil-score", title: "Impact on CIBIL Score" },
    { id: "long-term-consequences", title: "Long-Term Consequences" },
    { id: "step-by-step-process", title: "Step-by-Step Settlement Process" },
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
              Financial Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              The Hidden Consequences of the <span className="text-[#1F5EFF]">Personal Loan Settlement</span> Process
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              A comprehensive guide explaining the crucial difference between closing a loan and settling it, and the devastating long-term consequences of a "Settled" status on your CIBIL report.
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
                <li className="font-bold text-[#2E2E2E]">Personal Loan Settlement Consequences</li>
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

            <section id="settlement-vs-closure" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  Settlement vs. Closure: The Crucial Difference
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  When you are unable to pay your personal loan EMIs, the bank might offer you a seemingly attractive way out: a "One Time Settlement" (OTS). They might say, "Just pay 50% of the outstanding amount, and we will close your account." This sounds like a great deal, but there is a massive catch.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  <strong>Loan Closure</strong> happens when you repay the entire borrowed principal along with the agreed interest. The bank reports to credit bureaus (like CIBIL) that the loan is "Closed", which is a positive indicator of your financial health.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  <strong>Loan Settlement</strong> occurs when the bank agrees to accept a lesser amount than what you owe and writes off the remaining balance. In this case, the bank reports your account status as "Settled". This single word acts as a massive red flag on your credit report.
                </p>
              </div>
            </section>

            <section id="impact-cibil-score" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Immediate Impact on Your CIBIL Score
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The moment a loan is reported as "Settled" to CIBIL or other credit bureaus, the consequences are immediate and severe.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">How "Settled" Status Destroys Your Score</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  A settlement is viewed by the financial system as a failure to honor your debt obligations. Here is what happens:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">Your CIBIL score can plummet instantly, often by <strong>70 to 100 points</strong> or more.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">Banks view you as a "high-risk" borrower who previously caused a loss to a lending institution.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">It overrides previous good repayment history. Even if you paid EMIs on time for years, a settlement defines your current creditworthiness.</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>The Truth Behind the "Discount":</strong> The bank's offer to waive off a portion of your debt isn't charity. They are minimizing their losses, but in return, they are effectively locking you out of the organized credit market for years to come.
                </p>
              </div>
            </section>

            <section id="long-term-consequences" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Long-Term Consequences of a Settled Status
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The impact of a settlement extends far beyond the immediate drop in your CIBIL score. It creates long-lasting roadblocks in your financial life.
              </p>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">The 7-Year Curse</h4>
                <p className="text-red-900 leading-relaxed">
                  A "Settled" status typically remains on your CIBIL report for <strong>up to 7 years</strong>. During this entire period, it will be exceptionally difficult to secure any form of new credit, regardless of how much your income increases.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Rejection of Secured Loans</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Even for secured loans like home loans or car loans, where the asset acts as collateral, top banks will outright reject your application due to a past settlement.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Higher Interest Rates</h4>
                  <p className="text-gray-700 leading-relaxed">
                    If you manage to find a lender willing to give you a loan (usually an NBFC), you will be charged exorbitant interest rates to compensate for your high-risk profile.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Credit Card Denials</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Premium credit cards and high-limit cards will be completely out of reach. You might even struggle to get basic, entry-level credit cards.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Employment Verification</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Many top-tier companies, especially in finance and IT, conduct background credit checks. A poor credit history can cost you job opportunities.
                  </p>
                </div>
              </div>
            </section>

            <section id="step-by-step-process" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Step-by-Step Settlement Process
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Understanding how the bank operates during a settlement can help you navigate the process if you have absolutely no other option.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">The Default & NPA Classification</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Banks rarely offer settlement immediately. Your account usually must be overdue for 90 days or more, officially classifying it as a Non-Performing Asset (NPA). During this time, you will face intense pressure from recovery agents.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">The Offer & Negotiation</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Once the bank believes full recovery is unlikely, they or their recovery agency will propose a settlement. They might offer to waive off penalties, interest, and sometimes a portion of the principal. This amount is heavily negotiable.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">The Settlement Letter</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Before making any payment, you must insist on a formal, written settlement letter on the bank's letterhead. It must clearly state the agreed settlement amount, payment deadlines, and a commitment to issue a No Dues Certificate.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Payment & Reporting</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      After you pay the lump sum, the bank issues the NDC. Within 30 to 45 days, they report this to CIBIL, changing your account status to "Settled". The nightmare for your credit score officially begins.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Client Experiences
              </h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      VK
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
                    "SettleLoans helped me understand that settling my loan would destroy my CIBIL. They instead helped me negotiate a restructuring plan. Best decision ever."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Loan Amount: ₹10 Lakhs</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Restructured, No Score Drop</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      PR
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Priya R.</h4>
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
                    "I was about to accept a 'discounted' settlement from the bank, not knowing it would block me from home loans for 7 years. The legal team saved my future."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Loan Amount: ₹5 Lakhs</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Closed Successfully</span>
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
              <h3 className="text-3xl font-black mb-6 relative z-10">Don't Sign Away Your Financial Future</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Did the bank offer you an easy 'settlement' but hide the devastating consequences? Learn the brutal truth and explore safer alternatives before you ruin your CIBIL score for the next 7 years.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Consult a Loan Expert Today
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The legal information provided is for educational purposes and should not be construed as formal legal advice. Always consult with a practicing advocate or financial advisor regarding your specific situation.
              </p>
            </div>

          </article>

          {/* Right Column: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">Need a Way Out?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  Before you agree to a settlement, talk to our experts. We help negotiate terms that protect your CIBIL score.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] w-full py-3 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors relative z-10">
                  Get Free Consultation
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Essential Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/how-to-remove-settled-status-from-cibil-report-by-paying-outstanding-dues" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Remove "Settled" Status
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement-vs-loan-restructuring-which-is-better" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Settlement vs Restructuring
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-happens-if-loan-emi-not-paid" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      What Happens if EMI is Unpaid?
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
