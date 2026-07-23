import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "How to Improve CIBIL Score Fast | Rebuild Credit After Default",
  description: "Did a past loan default ruin your credit? Follow these exact steps to rebuild your CIBIL score back to 750+ and regain your financial freedom.",
  alternates: {
    canonical: "https://settleloan.in/how-to-improve-cibil-score",
  },
};

export default function ImproveCibilScorePage() {
  const tocItems = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'understanding-cibil', title: 'Understanding the 500 CIBIL Drop' },
    { id: 'immediate-actions', title: 'Immediate Steps to Improve CIBIL' },
    { id: 'rebuilding-credit', title: 'How to Rebuild Credit After Default' },
    { id: 'timeline', title: 'Timeline to Reach 750+' },
    { id: 'success-stories', title: 'Success Stories' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "How to Improve CIBIL Score Fast | Rebuild Credit After Default",
      "description": "Did a past loan default ruin your credit? Follow these exact steps to rebuild your CIBIL score back to 750+ and regain your financial freedom.",
      "url": "https://settleloan.in/how-to-improve-cibil-score"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://settleloan.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "How to Improve CIBIL Score",
          "item": "https://settleloan.in/how-to-improve-cibil-score"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Improve CIBIL Score Fast After Default",
      "author": {
        "@type": "Organization",
        "name": "SettleLoan"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SettleLoan",
        "logo": {
          "@type": "ImageObject",
          "url": "https://settleloan.in/logo.png"
        }
      },
      "datePublished": "2024-05-15T08:00:00+08:00",
      "dateModified": "2024-05-15T09:20:00+08:00"
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "SettleLoan Credit Rebuilding Program",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1254"
      },
      "review": [
        {
          "@type": "Review",
          "author": "Rahul S.",
          "datePublished": "2024-04-10",
          "reviewBody": "My CIBIL was 520 after a default. With their guidance, I'm back to 765 in a year.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": "Priya M.",
          "datePublished": "2024-03-22",
          "reviewBody": "They explained exactly how to remove the written-off status. Great service.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": "Vikram D.",
          "datePublished": "2024-02-15",
          "reviewBody": "I thought my financial life was over after the loan settlement. I was wrong.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4"
          }
        },
        {
          "@type": "Review",
          "author": "Sneha K.",
          "datePublished": "2024-01-05",
          "reviewBody": "The timeline they provided was spot on. Highly recommended for rebuilding credit.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to increase CIBIL from 500 to 750?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It typically takes 12 to 24 months of consistent good credit behavior, such as timely payments on a secured credit card, to rebuild a score from 500 to 750+."
          }
        },
        {
          "@type": "Question",
          "name": "Can a settled loan be removed from my CIBIL report?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 'Settled' status cannot be removed unless you pay the remaining waived amount to the bank to change the status to 'Closed'."
          }
        },
        {
          "@type": "Question",
          "name": "Will a loan default ruin my CIBIL score forever?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. While a default significantly drops your score, the impact lessens over time, and you can rebuild it by establishing positive new credit history."
          }
        },
        {
          "@type": "Question",
          "name": "What is the fastest way to improve my CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The fastest way is to check your report for errors and dispute them, pay off any small outstanding debts, and get a secured credit card to start building a positive payment history immediately."
          }
        },
        {
          "@type": "Question",
          "name": "Does checking my own CIBIL score lower it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, checking your own CIBIL score is considered a 'soft inquiry' and does not negatively impact your credit score."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a loan with a 500 CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is very difficult to get an unsecured loan with a 500 score. You may only qualify for secured loans like a gold loan or loan against FD."
          }
        },
        {
          "@type": "Question",
          "name": "How does a secured credit card help?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A secured credit card is backed by a fixed deposit. It guarantees approval despite a low CIBIL, and using it responsibly builds a fresh, positive repayment history."
          }
        },
        {
          "@type": "Question",
          "name": "What is credit utilization ratio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is the percentage of your total available credit that you are currently using. Keeping this below 30% is crucial for a healthy CIBIL score."
          }
        },
        {
          "@type": "Question",
          "name": "Does clearing a defaulted loan immediately increase my score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While it stops further damage, the score won't jump overnight. The default remains on your history, but paying it off is the first necessary step to rebuilding."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a default stay on my CIBIL report?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A default typically remains on your CIBIL report for up to 7 years, but its impact on your score decreases significantly as it ages."
          }
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Credit Score Recovery
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              How to <span className="text-[#1F5EFF]">Improve CIBIL Score</span> Fast After a Default
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Did a past loan default ruin your credit? Follow these exact steps to rebuild your CIBIL score back to 750+ and regain your financial freedom.
            </p>
            <Link href="#rebuilding-credit" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Start Rebuilding Your Credit
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center space-x-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/blog" className="hover:text-[#1F5EFF] transition-colors">Resources</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">How to Improve CIBIL Score</span>
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative max-w-screen-2xl">
          
          {/* Left Sidebar (TOC) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Article Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  Bouncing Back from a Default
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-[#2E2E2E]/80">
                  Seeing your CIBIL score plummet to the 500s after a loan default or settlement can feel like a financial death sentence. Banks reject your applications, and securing credit becomes nearly impossible. 
                </p>
                <p className="text-lg leading-relaxed mb-6 text-[#2E2E2E]/80">
                  However, a low credit score is not permanent. Whether you faced a job loss, medical emergency, or simply made financial mistakes, there is a proven, systematic path to <strong>increase your CIBIL from 500 to 750</strong>. This guide breaks down exactly how to rebuild your credit profile and reclaim your borrowing power.
                </p>
              </div>
            </section>

            <section id="understanding-cibil" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Understanding the Drop to 500
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Before fixing your CIBIL score, you must understand what caused the damage. A score in the 500 range usually indicates severe negative markers on your credit report.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">Loan Defaults</h3>
                  <p className="text-[#2E2E2E]/80 text-base">Missing multiple EMIs for 90+ days leads to an NPA (Non-Performing Asset) classification, devastating your score.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">Loan Settlements</h3>
                  <p className="text-[#2E2E2E]/80 text-base">Paying less than the total outstanding to close a loan marks it as "Settled", heavily penalizing your CIBIL score.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">Written Off Accounts</h3>
                  <p className="text-[#2E2E2E]/80 text-base">When the bank completely gives up on recovering the debt, it is marked as "Written Off", showing massive risk to future lenders.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">High Credit Utilization</h3>
                  <p className="text-[#2E2E2E]/80 text-base">Maxing out remaining credit cards signals financial distress and drags down your score further.</p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-2">Warning: The "Quick Fix" Myth</h4>
                <p className="text-red-900 text-base">
                  Do not fall for scammers promising to "erase" your default or magically increase your score overnight for a fee. Your CIBIL report is a legal document maintained by the credit bureau based on bank data. The only way to fix it is through legitimate, sustained good financial behavior.
                </p>
              </div>
            </section>

            <section id="immediate-actions" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Immediate Steps to Stop the Bleeding
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                To improve your CIBIL score fast, you must first stop any further negative reporting. Take these immediate actions to stabilize your profile.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Critical First Moves</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0 mr-3"></div>
                    <p className="text-[#2E2E2E]/80"><strong>Check for Errors:</strong> Download your free CIBIL report. Look for loans you didn't take or payments marked as late that you paid on time. Dispute any errors directly with CIBIL.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0 mr-3"></div>
                    <p className="text-[#2E2E2E]/80"><strong>Clear Small Dues:</strong> If you have minor outstanding amounts on active cards, clear them immediately. A low utilization ratio provides a quick score boost.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0 mr-3"></div>
                    <p className="text-[#2E2E2E]/80"><strong>Stop Applying for Credit:</strong> Every time a bank rejects you, it generates a "hard inquiry," pushing your score even lower. Freeze all new credit applications for the next 6 months.</p>
                  </li>
                </ul>
              </div>
            </section>

            <section id="rebuilding-credit" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Rebuild Credit After Default: Step-by-Step
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Once the bleeding has stopped, it's time to actively build a positive track record. Since no bank will give you an unsecured loan right now, you need to use secured credit instruments.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Get a Secured Credit Card</h3>
                    <p className="text-lg text-[#2E2E2E]/80 leading-relaxed">
                      This is the single most effective tool for rebuilding credit. Approach a bank and open a Fixed Deposit (e.g., ₹20,000 to ₹50,000). The bank will issue a credit card against this FD with a limit usually at 80-90% of the deposit amount. Because the card is backed by your money, approval is guaranteed regardless of your CIBIL score.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Keep Utilization Below 30%</h3>
                    <p className="text-lg text-[#2E2E2E]/80 leading-relaxed">
                      Do not max out your new secured card. If your limit is ₹40,000, try not to spend more than ₹12,000 per billing cycle. High credit utilization tells the bureau you are credit-hungry, which suppresses your score recovery.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Pay in Full, On Time, Every Time</h3>
                    <p className="text-lg text-[#2E2E2E]/80 leading-relaxed">
                      Set up an auto-debit for the entire statement balance. Never pay just the "Minimum Amount Due." Consistent, full payments month after month will flood your credit report with positive green ticks, slowly diluting the impact of your past default.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Consider a Gold Loan or Consumer Durable Loan</h3>
                    <p className="text-lg text-[#2E2E2E]/80 leading-relaxed">
                      After 6 months of good behavior on your secured card, try taking a small consumer durable loan (like a smartphone on zero-cost EMI) or a short-term gold loan. Successfully completing different types of credit (credit mix) further accelerates your score improvement.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="timeline" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Timeline to Reach 750+
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Rebuilding a CIBIL score from 500 to 750 is a marathon, not a sprint. The negative impact of a default diminishes over time as new positive data overwrites the old.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <ul className="space-y-6">
                  <li>
                    <h4 className="font-bold text-[#2E2E2E] text-xl mb-1">Months 1-3: Stabilization</h4>
                    <p className="text-[#2E2E2E]/80">Securing your FD-backed card and establishing the first few months of flawless payment history. Score might jump slightly or stabilize.</p>
                  </li>
                  <li className="border-t border-gray-200 pt-6">
                    <h4 className="font-bold text-[#2E2E2E] text-xl mb-1">Months 6-9: Steady Growth</h4>
                    <p className="text-[#2E2E2E]/80">With consistent 30% utilization and full payments, you should see your score move consistently upwards, often crossing into the 600s.</p>
                  </li>
                  <li className="border-t border-gray-200 pt-6">
                    <h4 className="font-bold text-[#2E2E2E] text-xl mb-1">Months 12-18: The Recovery</h4>
                    <p className="text-[#2E2E2E]/80">As the default ages past the one-year mark, its weight on your score algorithm drops significantly. If you've managed your new credit well, hitting the 700-720 mark is highly probable.</p>
                  </li>
                  <li className="border-t border-gray-200 pt-6">
                    <h4 className="font-bold text-[#2E2E2E] text-xl mb-1">Months 24+: Crossing 750</h4>
                    <p className="text-[#2E2E2E]/80">After two years of unblemished repayment history post-default, you can push past the 750 threshold, reopening doors to prime lending rates and unsecured loans.</p>
                  </li>
                </ul>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Success Stories: From Defaulter to Prime Borrower
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                It is absolutely possible to rebuild your credit. Here are individuals who followed this framework to recover their financial standing.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      R
                    </div>
                    <div>
                      <h4 className="font-black text-[#2E2E2E] text-lg">Rahul S.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#2E2E2E]/80 mb-6 leading-relaxed italic">"My CIBIL was 520 after a default. I got a secured card, kept usage low, and paid fully every month. With their guidance, I'm back to 765 in 18 months."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">Initial Score: 520</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">Current Score: 765</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      P
                    </div>
                    <div>
                      <h4 className="font-black text-[#2E2E2E] text-lg">Priya M.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#2E2E2E]/80 mb-6 leading-relaxed italic">"Settled a personal loan in 2021, and score dropped to 580. Followed the framework, got an FD card, and today I have a 780 score and an approved home loan."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">Initial Score: 580</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">Current Score: 780</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "How long does it take to increase CIBIL from 500 to 750?",
                    a: "It typically takes 12 to 24 months of consistent good credit behavior, such as timely payments on a secured credit card, to rebuild a score from 500 to 750+."
                  },
                  {
                    q: "Can a settled loan be removed from my CIBIL report?",
                    a: "A 'Settled' status cannot be removed unless you pay the remaining waived amount to the bank to change the status to 'Closed'."
                  },
                  {
                    q: "Will a loan default ruin my CIBIL score forever?",
                    a: "No. While a default significantly drops your score, the impact lessens over time, and you can rebuild it by establishing positive new credit history."
                  },
                  {
                    q: "What is the fastest way to improve my CIBIL score?",
                    a: "The fastest way is to check your report for errors and dispute them, pay off any small outstanding debts, and get a secured credit card to start building a positive payment history immediately."
                  },
                  {
                    q: "Does checking my own CIBIL score lower it?",
                    a: "No, checking your own CIBIL score is considered a 'soft inquiry' and does not negatively impact your credit score."
                  },
                  {
                    q: "Can I get a loan with a 500 CIBIL score?",
                    a: "It is very difficult to get an unsecured loan with a 500 score. You may only qualify for secured loans like a gold loan or loan against FD."
                  },
                  {
                    q: "How does a secured credit card help?",
                    a: "A secured credit card is backed by a fixed deposit. It guarantees approval despite a low CIBIL, and using it responsibly builds a fresh, positive repayment history."
                  },
                  {
                    q: "What is credit utilization ratio?",
                    a: "It is the percentage of your total available credit that you are currently using. Keeping this below 30% is crucial for a healthy CIBIL score."
                  },
                  {
                    q: "Does clearing a defaulted loan immediately increase my score?",
                    a: "While it stops further damage, the score won't jump overnight. The default remains on your history, but paying it off is the first necessary step to rebuilding."
                  },
                  {
                    q: "How long does a default stay on my CIBIL report?",
                    a: "A default typically remains on your CIBIL report for up to 7 years, but its impact on your score decreases significantly as it ages."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">{faq.q}</h3>
                    <p className="text-[#2E2E2E]/80 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-6">Need Expert Help Rebuilding Credit?</h3>
                <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Don't let a past mistake dictate your financial future. Speak to our credit repair experts to strategize your path back to 750+.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                  Get a Free Consultation
                </Link>
                <div className="mt-16 pt-8 border-t border-gray-100 text-center">
                  <p className="text-gray-400 text-sm italic">
                    Disclaimer: SettleLoan provides legal and strategic advisory. We do not guarantee a specific credit score increase, as it depends on individual credit behavior and bank reporting.
                  </p>
                </div>
              </div>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-8">
              
              {/* Dark CTA Card */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10">Struggling with Loan Defaults?</h3>
                <p className="text-white/80 mb-6 text-sm relative z-10">Get professional legal assistance to manage defaults and stop harassment.</p>
                <Link href="/contact" className="block w-full bg-[#1F5EFF] hover:bg-[#1F5EFF]/90 text-white font-bold py-3 px-4 rounded-xl transition-colors relative z-10">
                  Talk to an Expert
                </Link>
              </div>

              {/* White Resources Card */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-6">Related Guides</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/how-to-remove-settled-status-from-cibil-report-by-paying-outstanding-dues" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors text-sm font-semibold">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Remove Settled Status
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement-rules-india" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors text-sm font-semibold">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Loan Settlement Rules
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-stop-loan-recovery-harassment" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors text-sm font-semibold">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Stop Recovery Harassment
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-check-active-loan-on-your-name-in-india-stepbystep-guide" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors text-sm font-semibold">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Check Active Loans
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
