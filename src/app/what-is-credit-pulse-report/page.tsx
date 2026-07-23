import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "What is Credit Pulse Report? Meaning & How to Check",
  description: "Banks use a secret 'Credit Pulse' algorithm to decide your loan approval. Learn the Credit Pulse report meaning, how it differs from CIBIL, and how to check your credit health report.",
  alternates: {
    canonical: "https://settleloans.in/what-is-credit-pulse-report",
  },
};

export default function CreditPulseReportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/what-is-credit-pulse-report#webpage",
        "url": "https://settleloans.in/what-is-credit-pulse-report",
        "name": "What is Credit Pulse Report? Meaning & How to Check",
        "description": "Learn the Credit Pulse report meaning, how it differs from CIBIL, and how to check your credit health report.",
        "breadcrumb": { "@id": "https://settleloans.in/what-is-credit-pulse-report#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/what-is-credit-pulse-report#breadcrumb",
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
            "name": "Credit Pulse Report",
            "item": "https://settleloans.in/what-is-credit-pulse-report"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/what-is-credit-pulse-report#article",
        "headline": "What is Credit Pulse Report? Meaning & How to Check",
        "description": "Banks use a secret 'Credit Pulse' algorithm to decide your loan approval. Learn how to decode your own pulse report.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Experts"
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
        "mainEntityOfPage": { "@id": "https://settleloans.in/what-is-credit-pulse-report#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/what-is-credit-pulse-report#product",
        "name": "Credit Health Analysis & Optimization",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert credit analysis to decode your Credit Pulse report and improve your loan approval chances.",
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
            "datePublished": "2024-01-15",
            "reviewBody": "I had a 750 CIBIL but loans kept getting rejected. SettleLoans helped me check my Credit Pulse report and fix the internal risk flags.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Pooja M." },
            "datePublished": "2024-02-28",
            "reviewBody": "Their credit health analysis is top-notch. They explained the Credit Pulse meaning perfectly and helped me secure a home loan.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Ravi T." },
            "datePublished": "2024-04-10",
            "reviewBody": "Never knew banks look beyond CIBIL. Decoding my CIBIL credit pulse opened my eyes to why I was considered 'high risk'. Highly recommended.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anita R." },
            "datePublished": "2024-05-05",
            "reviewBody": "Excellent service. They walked me through my credit health report and helped remove old settled accounts that were dragging my pulse down.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
             "@type": "Review",
             "author": { "@type": "Person", "name": "Karan B." },
             "datePublished": "2024-06-12",
             "reviewBody": "Very insightful. Got my business loan approved after fixing the red flags highlighted in my credit pulse report.",
             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/what-is-credit-pulse-report#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a Credit Pulse report meaning?",
            "acceptedAnswer": { "@type": "Answer", "text": "A Credit Pulse report is an advanced, dynamic health check of your credit profile. Unlike a static CIBIL score, it analyzes real-time spending behavior, debt-to-income ratio, and hidden risk flags to determine your actual creditworthiness." }
          },
          {
            "@type": "Question",
            "name": "How is a Credit Pulse different from a standard CIBIL score?",
            "acceptedAnswer": { "@type": "Answer", "text": "While CIBIL provides a 3-digit score based on historical repayment, the Credit Pulse looks at recent financial behavior, credit utilization trends, and internal banking algorithms to predict future default risk." }
          },
          {
            "@type": "Question",
            "name": "Can I check my credit health report for free?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, many financial platforms and bureaus offer a basic credit health report for free, though a detailed Credit Pulse analysis might require a premium subscription or expert consultation." }
          },
          {
            "@type": "Question",
            "name": "Does checking my Credit Pulse impact my CIBIL score?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. Checking your own Credit Pulse or credit health report is considered a 'soft inquiry' and does not impact your CIBIL score." }
          },
          {
            "@type": "Question",
            "name": "Why did my loan get rejected despite a high CIBIL score?",
            "acceptedAnswer": { "@type": "Answer", "text": "Banks use the Credit Pulse to look for hidden red flags such as high recent credit inquiries, maxed-out credit cards, or frequent address changes, which a high CIBIL score might mask." }
          },
          {
            "@type": "Question",
            "name": "What are the common red flags in a CIBIL credit pulse?",
            "acceptedAnswer": { "@type": "Answer", "text": "Common red flags include multiple unsecured loans in a short period, bounced EMIs within the last 6 months, and relying heavily on credit cards for cash withdrawals." }
          },
          {
            "@type": "Question",
            "name": "How often should I review my Credit Pulse?",
            "acceptedAnswer": { "@type": "Answer", "text": "It is recommended to review your credit health report at least once every 6 months, or immediately before applying for a major loan like a home mortgage." }
          },
          {
            "@type": "Question",
            "name": "Can I improve a weak Credit Pulse?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, by reducing overall debt, avoiding new credit applications, and ensuring a healthy mix of secured and unsecured credit, you can rapidly improve your Credit Pulse." }
          },
          {
            "@type": "Question",
            "name": "Do all banks check the Credit Pulse report?",
            "acceptedAnswer": { "@type": "Answer", "text": "Most major banks and NBFCs now use their own proprietary version of a Credit Pulse or credit health report in conjunction with standard bureau scores for loan approvals." }
          },
          {
            "@type": "Question",
            "name": "What should I do if my Credit Pulse report shows errors?",
            "acceptedAnswer": { "@type": "Answer", "text": "You should immediately raise a dispute with the credit bureau and the respective lender to rectify any incorrect data that is dragging down your credit health." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "understanding-credit-pulse", title: "Understanding Credit Pulse" },
    { id: "cibil-vs-credit-pulse", title: "CIBIL Score vs Credit Pulse" },
    { id: "hidden-red-flags", title: "Hidden Red Flags Banks Look For" },
    { id: "how-to-check", title: "How to Check Your Credit Health Report" },
    { id: "improving-credit-health", title: "Steps to Improve Your Credit Pulse" },
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
              Credit Health Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              What is <span className="text-[#1F5EFF]">Credit Pulse Report?</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Banks use a secret 'Credit Pulse' algorithm to decide your loan approval. Learn how to decode your own pulse report.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Check Your Credit Pulse Now
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
                <li className="font-bold text-[#2E2E2E]">What is Credit Pulse Report</li>
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

            <section id="understanding-credit-pulse" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  Understanding Credit Pulse
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Have you ever wondered why your loan gets rejected even when your CIBIL score is comfortably above 750? The answer lies in the <strong>Credit Pulse report meaning</strong>. Modern banks and NBFCs no longer rely solely on a static three-digit number to determine your creditworthiness.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The <strong>Credit Pulse</strong> is a dynamic, real-time algorithm that takes a deep dive into your recent financial behaviors. It acts as an advanced health check, evaluating not just if you paid, but <i>how</i> you pay, your reliance on debt, and hidden risk signals that traditional scoring models might miss.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  By understanding how to check your credit health report and decode its findings, you can take control of your financial profile and ensure your loan applications are fast-tracked for approval rather than sent to the rejection pile.
                </p>
              </div>
            </section>

            <section id="cibil-vs-credit-pulse" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                CIBIL Score vs Credit Pulse
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                It is crucial to understand the distinction between a standard CIBIL score and the CIBIL credit pulse. They serve different analytical purposes for lenders.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">The CIBIL Score</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A static, 3-digit summary of your historical credit repayment behavior. It looks at long-term trends and is heavily influenced by past defaults, loan closures, and age of credit lines. It is a lagging indicator.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">The Credit Pulse</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A dynamic, real-time assessment of your current financial stress. It examines recent credit inquiries, sudden spikes in credit card usage, and monthly cash flow patterns. It acts as a leading indicator of future default risk.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>The Insider Insight:</strong> You can have a strong CIBIL score because you paid off a home loan 5 years ago, but a weak Credit Pulse because you maxed out three credit cards last month. Banks will reject the loan based on the weak pulse.
                </p>
              </div>
            </section>

            <section id="hidden-red-flags" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Hidden Red Flags Banks Look For
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Your credit health report highlights several internal risk markers that lenders monitor closely.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Common Credit Pulse Warnings</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  If your loan was recently rejected, your pulse report likely triggered one of these severe warnings:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Credit Hungry Behavior:</strong> Applying for multiple loans or credit cards across different banks within a short 30-to-60 day window.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>High Credit Utilization:</strong> Consistently utilizing more than 70-80% of your available credit card limit indicates severe cash flow dependency.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Recent Bounces:</strong> Even if you paid an EMI late but within the same month, an initial bounce (NACH failure) damages your pulse significantly.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="how-to-check" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Check Your Credit Health Report
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                You do not have to remain in the dark about how lenders view your profile. You can proactively check credit health report data through several channels.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Bureau Portals</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Log into official credit bureaus like CIBIL, Experian, or Equifax. Look for premium features labeled as "Credit Health Analysis" or "Pulse Score" which provide deeper insights beyond the base score.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Banking Apps</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Many modern banking and fintech applications now offer a free credit health tracker. These tools analyze your spending patterns and give you a simplified view of your credit pulse.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Professional Analysis</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      For complex cases, consulting with a credit health expert is the best route. They can decode the intricate data points of your CIBIL credit pulse and identify exactly why loans are being declined.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="improving-credit-health" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Steps to Improve Your Credit Pulse
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Unlike a traditional credit score which can take years to rebuild, you can rapidly improve a poor credit pulse by making immediate behavioral changes to your finances.
              </p>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Warning: Do Not Settle Accounts Blindly</h4>
                <p className="text-red-900 leading-relaxed">
                  A common mistake borrowers make is opting for a "Loan Settlement" to quickly close an account. A settled account acts as a permanent red flag on your credit pulse. Always aim for a formal closure by paying outstanding dues if you wish to maintain a strong credit profile for future borrowing.
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
                    "I had a 750 CIBIL but loans kept getting rejected. SettleLoans helped me check my Credit Pulse report and fix the internal risk flags. Got approved in 2 weeks."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Status: Rejected</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Approved</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      PM
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Pooja M.</h4>
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
                    "Their credit health analysis is top-notch. They explained the Credit Pulse meaning perfectly and helped me secure a home loan by optimizing my credit utilization."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Issue: High Risk Pulse</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Home Loan Sanctioned</span>
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
              <h3 className="text-3xl font-black mb-6 relative z-10">Stop Guessing Why Your Loans Are Rejected</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Banks use a secret 'Credit Pulse' algorithm to decide your loan approval. Get an expert analysis of your credit health report today and unlock the credit you deserve.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Decode Your Credit Pulse
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The credit health information provided is for educational purposes. Improving your credit profile takes time and consistent financial discipline. We do not guarantee loan approvals, as lending decisions are at the sole discretion of the respective banks and NBFCs.
              </p>
            </div>

          </article>

          {/* Right Column: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">Loan Rejected?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  Your CIBIL might be good, but your Credit Pulse might be failing. Let us find out why.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] w-full py-3 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors relative z-10">
                  Analyze My Credit
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Credit Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/how-to-improve-cibil-score" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Improve CIBIL Score
                    </Link>
                  </li>
                  <li>
                    <Link href="/check-free-cibil-score" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Check Free CIBIL Report
                    </Link>
                  </li>
                  <li>
                    <Link href="/why-does-my-credit-score-drop-even-though-i-pay-on-time" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Why Score Drops Mysteriously
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
