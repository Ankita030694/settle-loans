import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import ReviewSnippets from "@/components/ReviewSnippets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircleCheck, faShieldHalved, faScaleBalanced, faClock, faAddressCard, faHandHoldingDollar, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Why Does My Credit Score Drop Even Though I Pay on Time- India Guide",
  description: "Confused why your CIBIL score is dropping despite timely payments? Discover the hidden factors like utilization, credit mix, and report errors. Expert guide for 2026.",
  alternates: {
    canonical: "https://settleloans.in/why-does-my-credit-score-drop-even-though-i-pay-on-time",
  },
};

export default function CreditScoreDropPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/why-does-my-credit-score-drop-even-though-i-pay-on-time#webpage",
        "url": "https://settleloans.in/why-does-my-credit-score-drop-even-though-i-pay-on-time",
        "name": "Why Does My Credit Score Drop Even Though I Pay on Time? Comprehensive India Guide",
        "description": "An in-depth analysis of why Indian credit scores like CIBIL drop despite consistent on-time payments, covering technical factors and resolution strategies.",
        "breadcrumb": { "@id": "https://settleloans.in/why-does-my-credit-score-drop-even-though-i-pay-on-time#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/why-does-my-credit-score-drop-even-though-i-pay-on-time#breadcrumb",
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
            "name": "Why Does My Credit Score Drop Even Though I Pay on Time",
            "item": "https://settleloans.in/why-does-my-credit-score-drop-even-though-i-pay-on-time"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/why-does-my-credit-score-drop-even-though-i-pay-on-time#article",
        "headline": "Why Does My Credit Score Drop Even Though I Pay on Time? | Detailed Analysis",
        "description": "Understand the non-obvious reasons for credit score fluctuations in India, including utilization ratios, hard inquiries, and lender reporting errors.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Expert Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-03-28",
        "dateModified": "2024-03-28",
        "mainEntityOfPage": { "@id": "https://settleloans.in/why-does-my-credit-score-drop-even-though-i-pay-on-time#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/why-does-my-credit-score-drop-even-though-i-pay-on-time#product",
        "name": "Credit Score Correction Services",
        "description": "Professional guidance to identify and resolve credit score drops caused by reporting errors or structural issues.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Arjun R." },
            "datePublished": "2024-02-15",
            "reviewBody": "My CIBIL score dropped by 45 points despite me paying every bill. SettleLoans helped me find a wrong reporting error. Truly professional.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/why-does-my-credit-score-drop-even-though-i-pay-on-time#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why did my CIBIL score decrease when I paid everything on time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Payment history is only 35% of your score. Other factors like high credit utilization (using more than 30% of your limit), hard inquiries from new applications, or closing old accounts can pull your score down even with perfect payment records."
            }
          },
          {
            "@type": "Question",
            "name": "How does credit utilization affect my score if I pay the full amount?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Lenders report your balance on a specific 'snapshot' date, often before your bill is due. If you have a high balance on that date (even if you pay it all later), it appears as high utilization, which signals risk to the bureaus."
            }
          },
          {
              "@type": "Question",
              "name": "Does closing a credit card lower my score?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, it can. Closing a card reduces your total available credit limit (hiking utilization) and potentially shortens your average credit history length, both of which are negative factors."
              }
          },
          {
              "@type": "Question",
              "name": "What is a 'hard inquiry' and how many is too many?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A hard inquiry occurs when you apply for a loan or card. Having more than 2 or 3 such inquiries within a 6 month period can make you look credit hungry and lower your score."
              }
          },
          {
              "@type": "Question",
              "name": "Can a co-signed loan drop my score?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. If the primary borrower misses a payment on a loan you co-signed, it is reflected exactly the same on your report as if you missed it yourself."
              }
          },
          {
              "@type": "Question",
              "name": "How long does it take for the credit score to recover after a drop?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If the drop was due to utilization, it can recover within 1 to 2 months once the reported balance goes down. If it was due to a late payment or hard inquiry, it may take 6 to 12 months of disciplined behavior to see a full recovery."
              }
          },
          {
              "@type": "Question",
              "name": "Why is my CIBIL score different from my Experian score?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Each bureau (CIBIL, Experian, Equifax, CRIF) uses slightly different proprietary algorithms and logic. Also, not all lenders report to every bureau at the same time."
              }
          },
          {
              "@type": "Question",
              "name": "Can an error in my address or name cause a score drop?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While a minor typo might not drop the score, it can lead to multiple files being created for you (fragmented records), which prevents the bureau from seeing your full positive history."
              }
          },
          {
              "@type": "Question",
              "name": "Does checking my own score lower it?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Checking your own score is a 'soft inquiry' and has zero impact on your credit rating. You should monitor it regularly."
              }
          },
          {
              "@type": "Question",
              "name": "Can paying a loan off early lower my credit score?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Counterintuitively, yes. Closing a loan account changes your credit mix and can occasionally lead to a temporary small dip since that active positive reporting line is gone."
              }
          }
        ]
      }
    ]
  };

  const articleReviews = [
      {
          name: "Vikram Malhotra",
          loc: "Mumbai",
          loan: "Credit Card Over-utilization",
          res: "Score restored in 45 days",
          story: "I always paid my bills in full but my score kept dipping. SettleLoans explained the utilization snapshot concept. I shifted my payment date and my score jumped from 710 to 785."
      },
      {
          name: "Priya Sharma",
          loc: "Delhi",
          loan: "Wrong Dispute Reporting",
          res: "Error removed from report",
          story: "There was a loan I never took reflecting on my report. I was terrified. The team here helped me navigate the dispute process with CIBIL. It was a life saver."
      },
      {
          name: "Sandeep Gupta",
          loc: "Bangalore",
          loan: "Co-signer Default Impact",
          res: "Negotiated settlement plan",
          story: "I had co-signed for a friend and he skipped payments. My score crashed. SettleLoans helped me handle the banks and protect what was left of my credit reputation."
      },
      {
          name: "Anjali Verma",
          loc: "Pune",
          loan: "Multiple Hard Inquiries",
          res: "Strategic recovery path",
          story: "I applied for three credit cards at the airport in one day. My score dropped by 40 points. I didn't know why until I spoke to the consultants at SettleLoans. Their advice was gold."
      }
  ];

  const tocItems = [
      { id: "the-mystery-revealed", title: "The Credit Score Mystery" },
      { id: "cibil-logic-and-math", title: "The Math Behind your Score" },
      { id: "utilization-trap", title: "The Credit Utilization Trap" },
      { id: "the-snapshot-effect", title: "The Snapshot Date Effect" },
      { id: "credit-hunger-inquiries", title: "Hard Inquiries & Credit Hunger" },
      { id: "closing-old-accounts", title: "Closing Old Credit Lines" },
      { id: "credit-mix-imbalance", title: "Credit Mix & Balance" },
      { id: "reporting-errors-lenders", title: "The Silent Score Killers" },
      { id: "co-signing-risks", title: "The Hidden Risks of Co-signing" },
      { id: "settled-status-impact", title: "Impact of 'Settled' Status" },
      { id: "identity-theft-alerts", title: "Detecting Identity Theft" },
      { id: "ten-step-recovery", title: "Steps to Restore Your Score" },
      { id: "how-settleloans-helps", title: "Professional Credit Support" },
      { id: "success-case-studies", title: "Real World Success Stories" },
      { id: "faqs", title: "Your Questions Answered" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Financial Intelligence & Insights
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Why Does My Credit Score Drop <br className="hidden md:block" /> Even Though I Pay on Time?
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.2] font-normal">
              It is one of the most frustrating experiences in modern finance. You are disciplined, you never miss a deadline, yet your score is in the red. We uncover the hidden technicalities that are hurting your credit health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Check My Credit Health
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li>
                  <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
                </li>
                <li>
                  <span className="text-gray-300">/</span>
                </li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">
                  Why Does My Credit Score Drop Even Though I Pay on Time
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-0 md:px-0 lg:px-0 py-16 flex flex-col lg:flex-row gap-0 items-start relative">
          
          {/* Left Column: TOC (Sticky) */}
          <aside className="hidden lg:block w-1/4 sticky top-24 h-screen overflow-y-auto px-8 py-4 scrollbar-hide">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Middle Column: Main Content */}
          <article className="w-full lg:w-2/4 px-6 md:px-12 lg:px-16 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="the-mystery-revealed" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-8 leading-tight tracking-tighter">
                The Credit Score Mystery: <span className="text-[#1F5EFF]">Why Perfect Payments Are Not Enough</span>
              </h2>
              <p className="text-xl leading-relaxed text-[var(--color-text-body)] mb-8">
                Imagine walking into a bank, confident because you have never missed a single credit card payment in five years. You apply for a home loan, expecting a premium interest rate, only to be told that your CIBIL score has dropped by 60 points in the last three months. You are shocked. You reach for your phone, check your apps, and verify every transaction. Everything was paid on time. You look at your bank statements and your CIBIL report, and there is no record of a late payment. This is the moment when most people feel the system is rigged against them.
              </p>
              <p className="text-xl leading-relaxed text-[var(--color-text-body)] mb-8">
                This scenario is more common than you think. In India, the perception of credit health is often limited to 'paying on time'. While that is the foundation, it is only one piece of a complex algorithmic puzzle. The credit bureaus like CIBIL (Credit Information Bureau India Limited), Experian, and Equifax are not just looking at your honesty; they are looking at your risk profile through a lens of thousands of data points that are processed through proprietary machine learning models.
              </p>
              <p className="text-xl leading-relaxed text-[var(--color-text-body)] mb-8">
                The reality of modern finance is that you are no longer just a person with a history; you are a risk probability score. This score determines not just if you get a loan, but the interest rate you pay, the insurance premiums you are quoted, and even some job opportunities in the financial sector. Understanding why this score fluctuates is not just about vanity; it is about protecting your financial sovereignty. In this guide, we will peel back the layers of the credit scoring industry in India to reveal exactly what is happening in the shadows of the bureau engines.
              </p>
              <div className="bg-[#f8faff] p-10 rounded-[30px] border border-blue-100 mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/50 rounded-full -mr-20 -mt-20"></div>
                <h3 className="text-2xl font-bold mb-6 text-[#1F5EFF]">A Fundamental Truth to Remember</h3>
                <p className="text-lg relative z-10 leading-relaxed text-gray-700 italic">
                  &quot;Your credit score is a reflection of how you might behave in the future, not just a certificate of what you did in the past. If your data suggests even a slight increase in potential risk, the algorithm will react with professional coldness, regardless of your perfect payment history. The system is designed to be predictive, often reacting to trends before you even notice them yourself.&quot;
                </p>
              </div>
            </section>

            <section id="cibil-logic-and-math" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 tracking-tighter">
                Decoding the Math: How the Algorithm Actually Thinks
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                To understand why your score drops, you must first understand the weightage given to different factors by credit bureaus. While the exact formula is a closely guarded trade secret of TransUnion CIBIL, industry standards and historical analysis from thousands of reports allow us to build a very accurate model of how your score is constructed in the Indian financial ecosystem.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#1F5EFF] text-white rounded-xl flex items-center justify-center font-black flex-shrink-0">35%</div>
                  <div>
                    <h4 className="font-bold text-[#2E2E2E]">Payment Discipline (Onboarding & Regularity)</h4>
                    <p className="text-sm text-gray-500">The historical record of every single EMI and credit card bill. Even a one day delay can be fatal.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#2E2E2E] text-white rounded-xl flex items-center justify-center font-black flex-shrink-0">30%</div>
                  <div>
                    <h4 className="font-bold text-[#2E2E2E]">Credit Exposure (Utilization Ratios)</h4>
                    <p className="text-sm text-gray-500">The amount you currently owe relative to your limits. This is where most perfect payers fail.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gray-400 text-white rounded-xl flex items-center justify-center font-black flex-shrink-0">15%</div>
                  <div>
                    <h4 className="font-bold text-[#2E2E2E]">Credit Antiquity (History Length)</h4>
                    <p className="text-sm text-gray-500">How long you have successfully managed credit. Experience is highly valued by bureaus.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gray-300 text-white rounded-xl flex items-center justify-center font-black flex-shrink-0">20%</div>
                  <div>
                    <h4 className="font-bold text-[#2E2E2E]">Inquiry Velocity & Portfolio Mix</h4>
                    <p className="text-sm text-gray-500">The balance between secure and unsecure debt and the frequency of your applications.</p>
                  </div>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Notice the disparity here. Payment history, the part you are proud of, accounts for only 35%. This means that 65% of your score is determined by factors that have nothing to do with whether you paid your bill on time. If you are doing everything right in the 35% category but ignoring the structural health of the other 65%, your score will inevitably decline. It is like having a perfect engine in a car with four flat tires. You might be running at full power, but you aren't going anywhere.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                 In the Indian context, where the middle class is increasingly moving toward 'Credit First' living, these percentages are more critical than ever. Lenders like SBI, HDFC, and ICICI use automated 'knock-out' rules based on these percentages. If your utilization (30%) is too high, you might be rejected even if your payment history (35%) is flawless. This is the cold reality of algorithmic banking.
              </p>
            </section>

            <section id="utilization-trap" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 tracking-tighter">
                1. The Credit Utilization Trap: Why Zero Balance Is Better Than Full Payment
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                This is the most frequent reason for score drops among high earners who pay in full. Credit utilization refers to the percentage of your total available credit limit that you use on a monthly basis. For example, if you have a premium credit card with a limit of 5,00,000 rupees and you spend 4,00,000 rupees on it for a family holiday, your utilization is 80%.
              </p>
              <p className="text-lg leading-relaxed mb-6 font-bold text-[#1F5EFF] bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                The golden rule of credit health, especially in the 2026 financial landscape, is to keep your utilization below 30% on every card in your wallet.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Even if you pay that 4,00,000 rupees in full when the bill arrives, the bureau sees that you are heavily reliant on credit facilities. In the eyes of an algorithm, a person using 80% of their limit is 'stretched' and potentially one minor financial shock away from a total default. This is classified as 'high risk' behavior. Point deduction happens almost instantly the moment the bank reports this high balance.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Utilization is calculated both per card and across your entire credit profile. If you have three cards with 1 lakh limit each, and you max out one (100% utilization) while keeping the others at zero, your overall utilization might be 33%, but the 100% on the single card will still trigger a score drop. The algorithms are programmed to look for weakness in any single node of your financial network.
              </p>
              <div className="my-10 p-10 bg-[#1a1a1a] text-white rounded-[32px] border border-gray-800 shadow-2xl">
                <h4 className="text-2xl font-black mb-6 text-red-500">The Math of Risk:</h4>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between mb-2">
                             <span className="font-bold">Total Available Limit</span>
                             <span className="font-mono">₹10,00,000</span>
                        </div>
                        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-white w-full"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                             <span className="font-bold text-red-400">Current Reported Spending</span>
                             <span className="font-mono text-red-400">₹7,00,000</span>
                        </div>
                        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-red-600 w-[70%]"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800">
                    <p className="text-red-500 font-black text-xl mb-4 uppercase tracking-tighter">Status: Severe Risk Warning</p>
                    <p className="text-sm opacity-60 leading-relaxed">Even with perfect payments, this 70% utilization sends a signal of financial distress to CIBIL. The score will likely drop by 20 to 40 points in the next update cycle.</p>
                </div>
              </div>
            </section>

            <section id="the-snapshot-effect" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 tracking-tighter">
                2. The Snapshot Date: The Secret War Between Your Calendar and Your Bank
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Most people believe that as long as they pay before the 'Due Date', their record is clean. This is a dangerous half truth. To stop the drop, you must understand the 'Reporting Date' or 'Snapshot Date'.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Banks like Axis, Kotak, or SBI do not talk to CIBIL every second. Instead, they batch their data and send it once a month. This batching usually happens on your 'Statement Generation Date'. Let us say your statement is generated on the 15th of every month, and your payment is due on the 5th of the next month.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                If you spent 1 lakh on the 10th and your limit is 1.5 lakh, your utilization on the 15th (Snapshot Date) is nearly 70%. The bank sends this 70% figure to CIBIL. You pay the full 1 lakh on the 1st of the next month (before the due date). Great! You have zero interest to pay. But CIBIL already has the record of you using 70%. As far as CIBIL is concerned, for that entire month, you were a high risk borrower.
              </p>
              <div className="flex items-center gap-6 bg-[#fff9db] p-8 rounded-[24px] border border-[#ffec99] mb-12 shadow-sm">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-yellow-600 shadow-inner flex-shrink-0">
                    <FontAwesomeIcon icon={faExclamationTriangle} className="text-2xl" />
                </div>
                <div>
                    <h5 className="font-black text-yellow-900 mb-1">Strategic Power Play:</h5>
                    <p className="text-sm font-medium text-yellow-800 leading-relaxed text-left">
                        Identify your statement date for every card. Pay your balance down to below 10% exactly TWO DAYS BEFORE the statement is generated. This ensures the 'Snapshot' captures a low balance, skyrocketing your score while allowing you to use your credit freely for the rest of the month.
                    </p>
                </div>
              </div>
            </section>

            <section id="credit-hunger-inquiries" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 tracking-tighter">
                3. Credit Hunger: How New Applications Bleed Your Score
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                When you apply for a new financial product, the lender initiates a 'Hard Inquiry' or a 'Hard Pull' on your credit report. This is a formal request to see your history for the purpose of lending. Each of these inquiries has a measurable negative impact on your score.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                While one inquiry might only drop your score by 3 to 5 points, the problem is 'Velocity'. If you apply for multiple cards or loans within a short window (say, 3 months), the bureau sees a pattern of 'Credit Hunger'. To a mathematical model, a person suddenly asking for five different credit lines is likely facing an income crisis or is planning to spend recklessly.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                This is why many airport kiosks and mall stalls are credit score minefields. &quot;Apply for this Lifetime Free card and get a free trolley bag!&quot; might seem like a small win, but if that agent pulls your report, you are paying for that bag with your credit score. If three different agents pull your report in one day, your CIBIL score could be decimated by 15 to 20 points in a single afternoon.
              </p>
              <blockquote className="border-l-[10px] border-[#1F5EFF] pl-10 my-16 py-6 bg-gray-50 rounded-r-3xl">
                <p className="text-3xl font-black italic text-[#2E2E2E] leading-[1.3] text-left">
                  &quot;The modern lender is like a shy lover. If you pursue them too aggressively, they will run away. The more you act like you don't need money, the more they will want to give it to you.&quot;
                </p>
              </blockquote>
            </section>

            <section id="closing-old-accounts" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 tracking-tighter">
                4. Closing Old Accounts: The Price of Minimalism
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                In a quest to simplify life, many people close old, unused credit cards or pay off long term loans early. Paradoxically, this often leads to a score drop. This is because of two factors: Antiquity and Total Limit.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                <strong>Antiquity (Age):</strong> A credit account that has been open for 10 years is a powerful asset. It shows a long term, stable relationship with debt. If you close that 10 year old card because you now use a fancy metal card you got last month, the 'average age' of your credit accounts will plummet. A lower age means a lower score.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                <strong>The Limit Buffer:</strong> Your total credit limit across all cards acts as a safety cushion for your utilization ratio. If you have two cards with 2 lakh limit each and spend 50k, your utilization is 12.5%. If you close one card, your same 50k spending now represents a 25% utilization. You have literally doubled your risk profile by doing something you thought was responsible.
              </p>
            </section>
            
            <section id="bnpl-impact" className="scroll-mt-32 mb-16">
               <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 tracking-tighter">
                The Hidden Impact of BNPL Apps and 'Pay Later' Services
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Services like Amazon Pay Later, Flipkart Pay Later, and smaller BNPL apps (Paytm Postpaid, LazyPay) are marketed as convenience tools. However, behind every 'Buy Now Pay Later' service is a real loan from a real NBFC (Non-Banking Financial Company).
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Even if you use just 500 rupees to buy a book and pay it back in 15 days, a new loan entry is created on your CIBIL report. Having dozens of small, revolving loans from obscure NBFCs makes your credit profile look 'Low Quality'. Banks prefer to see one or two large, clean loans from established banks rather than a flurry of micro-debts from fintech apps. This 'clutter' on your report can drag your score down even if every single 500 rupee loan was paid on time.
              </p>
            </section>

            <section id="credit-mix-imbalance" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 tracking-tighter">
                5. Portfolio Imbalance: Why Secured Bonds Matter
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Not all debt is created equal in the eyes of the law or the bureaus. The system wants to see that you are capable of handling long term, asset-backed obligations.
              </p>
              <div className="grid md:grid-cols-2 gap-8 my-10">
                <div className="p-8 rounded-[24px] bg-green-50 border border-green-100 flex flex-col items-center text-center shadow-sm">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 mb-6 shadow-sm"><FontAwesomeIcon icon={faShieldHalved} className="text-2xl" /></div>
                    <h4 className="text-xl font-black text-green-900 mb-3">Secured Debt</h4>
                    <p className="text-sm text-green-800">Home Loans, Gold Loans, Car Loans. These are backed by collateral and are viewed as 'High Quality' debt. They stabilize your score.</p>
                </div>
                <div className="p-8 rounded-[24px] bg-red-50 border border-red-100 flex flex-col items-center text-center shadow-sm">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-red-600 mb-6 shadow-sm"><FontAwesomeIcon icon={faHandHoldingDollar} className="text-2xl" /></div>
                    <h4 className="text-xl font-black text-red-900 mb-3">Unsecured Debt</h4>
                    <p className="text-sm text-red-800">Personal Loans, Credit Cards, BNPL. Since there is no collateral, these are 'High Risk'. Having too many of these will suppress your score.</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                If your profile is 100% unsecured, the algorithm sees you as a 'volatile' borrower. If you pay off your only home loan, you might see a surprise drop in your score. Why? Because you have lost your 'anchor'. You have gone from being a stable homeowner with a loan to a person who only has 'limitless' unsecured credit lines. Balancing your mix is key to the 800+ club.
              </p>
            </section>

            <section id="reporting-errors-lenders" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 tracking-tighter">
                6. The Reporting Nightmare: Financial Fog and Data Decay
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Sometimes, you are a victim of a system too large to care. Indian banks handle billions of transactions, and the interface between a local bank branch and a central credit bureau is often manual or semi-automated. A data entry clerk in a small branch might forget to update your 'Full and Final' payment, or a software glitch might mark a holiday as a missed payment.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                One of the most common issues in the post-pandemic era is 'fragmented reports'. If you changed your address or got a new mobile number, CIBIL might create a second file for you instead of merging it with your old one. If this new file only has one new credit card and doesn't have your 10 year history, your score will appear significantly lower.
              </p>
              <div className="bg-[#2E2E2E] p-10 rounded-[30px] border border-gray-700 mb-12 shadow-2xl">
                 <h4 className="text-2xl font-black text-[#1F5EFF] mb-6 flex items-center gap-3">
                    <FontAwesomeIcon icon={faShieldHalved} /> Reporting Error Checklist:
                 </h4>
                 <div className="space-y-4">
                    {[
                        "Identity Matching: Check if another person's name appears on your report.",
                        "Ownership Verification: Ensure every loan listed actually belongs to you.",
                        "Status Audit: Ensure 'Settled' isn't written where 'Closed' should be.",
                        "DPD Check: Days Past Due (DPD) should be '000' or 'XXX' for every month.",
                        "Balance Mismatch: Ensure the 'Current Balance' isn't significantly higher than reality."
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-center text-gray-300">
                             <div className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full flex-shrink-0"></div>
                             <span className="text-sm md:text-base font-medium">{item}</span>
                        </div>
                    ))}
                 </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                If you find an error, the burden of proof is on you. You must use the CIBIL online dispute resolution portal. By law, they have 30 days to investigate with the bank and update the record. But often, the bank ignores the bureau, and you are left in a loop of frustration. This is where professional advocacy from a firm like SettleLoans becomes necessary.
              </p>
            </section>

            <section id="co-signing-risks" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 tracking-tighter">
                7. The Sins of the Other: Co-signing and Guarantors
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                In India, we are taught to help our brothers and friends. But the CIBIL algorithm has no concept of brotherhood. If you co-sign a loan for your cousin and they miss an EMI by just three days, that stain is reflected on your report exactly as if it were your own debt.
              </p>
              <p className="text-lg leading-relaxed mb-6 font-black text-red-600 uppercase italic">
                A co-signer is not a 'backup'; a co-signer is a borrower.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                You might be the most disciplined person in the country, but if the person you 'helped' is reckless, your score will bleed for it. We have seen cases where people lost their chance at a home loan because they co-signed a small 50,000 rupee bike loan for a friend five years ago and forgot about it.
              </p>
            </section>

            <section id="settled-status-impact" className="scroll-mt-32 mb-16">
               <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 tracking-tighter">
                8. The 'Settled' Trap: Why Negotiating Can Hurt
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If you ever went through a hard time and settled a loan for a lower amount than what was owed, the bank will mark that account as 'SETTLED'. This is the financial equivalent of a criminal record in the eyes of most prime lenders.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                While the account is 'Closed' in your mind, the bureau sees that the bank had to take a loss. This remark can stay for 7 to 10 years. Even if all your subsequent debts are paid on time, that one 'Settled' remark will act as a permanent ceiling on your score. It tells every future lender: &quot;This person might stop paying if they feel they can get a discount later.&quot;
              </p>
            </section>

            <section id="identity-theft-alerts" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 tracking-tighter">
                9. Identity Theft: The Invisible Score Killer
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                In the digital age, your PAN and Aadhaar numbers are your financial keys. If a hacker gets hold of them, they can take out 'Micro-loans' from unregulated apps. These loans are usually small—perhaps 5,000 or 10,000 rupees. They take the money, and since they have no intention of paying it back, the loan goes into default.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                You might not even know these loans exist because the address and phone number on the loan application were changed to the scammer's. You only realize there is a problem when you check your score and see it has plummeted through the floor. This is why regular monitoring is not a luxury; it is a defensive necessity.
              </p>
            </section>

            <section id="ten-step-recovery" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-12 tracking-tighter">
                The 10-Step Sovereign Plan to Restore Your Glory
              </h2>
              <div className="space-y-8">
                {[
                  { t: "Deep Audit of All Four Bureaus", d: "Don't just check CIBIL. Check Experian, Equifax, and CRIF. Often, an error exists on only one, but lenders check different ones for different products." },
                  { t: "Map Your Reporting Cycle", d: "Identify the exact day your bank sends data to the bureau. Plan your payments around this date, not just the due date." },
                  { t: "The 10% Utilization Target", d: "Ignore the 30% advice if you want a score of 800+. Aim for 10% reported utilization. This marks you as an elite, low risk borrower." },
                  { t: "Active Limit Expansion", d: "Call your banks and ask for limit increases. If they do it without a 'Hard Pull', it instantly lowers your utilization ratio and boosts your score." },
                  { t: "Freeze All New Applications", d: "If your score is dropping, stop digging the hole. No more 'Just Checking Eligibility' on random websites. Every check is a potential hit." },
                  { t: "Audit Your Co-signing Liability", d: "Get a list of every account where you are a guarantor. Contact those borrowers and ensure their payments are on track." },
                  { t: "Correct the 'Post-Settlement' Status", d: "If you have a 'Settled' remark, contact the bank and offer to pay the remaining principal amount in exchange for a 'Closed' or 'Post-Write Off' status update." },
                  { t: "Diversify Your Secured Anchor", d: "If you only have cards, consider a small, 6 month secured EMI purchase. This adds 'High Quality' debt to your profile." },
                  { t: "Vigilant Identity Protection", d: "Enable SMS and Email alerts for every credit inquiry on your PAN. Catch identity thieves in hours, not months." },
                  { t: "Professional Representation", d: "If the bank is being uncooperative with errors, don't waste months in customer care. Engage professionals who understand the Banking Ombudsman process." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 items-start p-10 rounded-[32px] border border-gray-100 hover:bg-blue-50/30 transition-all duration-300 hover:scale-[1.01] shadow-sm hover:shadow-md">
                    <span className="text-5xl font-black text-[#1F5EFF] tabular-nums opacity-20">{i + 1}</span>
                    <div>
                      <h4 className="text-2xl font-black text-[#2E2E2E] mb-3">{step.t}</h4>
                      <p className="text-lg text-gray-600 leading-relaxed font-medium">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="how-settleloans-helps" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mt-24 mb-10 tracking-tighter">Professional Credit Advocacy: Your Shield in the System</h2>
              <p className="text-xl mb-10 leading-relaxed font-medium">
                At SettleLoans, we believe that the financial system should work for you, not against you. We understand the deep frustration of being a 'perfect payer' and still being punished by an invisible algorithm. We have built our reputation on fighting for the rights of Indian borrowers who have been unfairly treated by credit reporting systems.
              </p>
              <div className="bg-[#1F5EFF] text-white p-12 md:p-16 rounded-[48px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 animate-pulse"></div>
                <h3 className="text-4xl md:text-5xl font-black mb-10 leading-tight">We Are Your Voice and Your Vengeance</h3>
                <p className="mb-10 text-xl md:text-2xl opacity-90 leading-relaxed">
                  We don't just 'suggest' fixes; we execute them. Our combined legal and financial team has decades of experience in navigating the internal compliance engines of major Indian banks. We know how to force a correction when the system wants to ignore you.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 mt-1"><FontAwesomeIcon icon={faCircleCheck} className="text-xl" /></div>
                    <div>
                        <h5 className="font-black text-xl mb-1">Algorithmic Auditing</h5>
                        <p className="text-sm opacity-70 font-medium">We break down every point of your score to find the exact hidden lever that is causing the drop.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 mt-1"><FontAwesomeIcon icon={faCircleCheck} className="text-xl" /></div>
                    <div>
                        <h5 className="font-black text-xl mb-1">Dispute Acceleration</h5>
                        <p className="text-sm opacity-70 font-medium">We handle the endless paperwork and follow-ups required to get errors removed from bureau files.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 mt-1"><FontAwesomeIcon icon={faCircleCheck} className="text-xl" /></div>
                    <div>
                        <h5 className="font-black text-xl mb-1">Lender Negotiations</h5>
                        <p className="text-sm opacity-70 font-medium">We represent you in discussions to change 'Settled' remarks into clean 'Closed' statuses.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 mt-1"><FontAwesomeIcon icon={faCircleCheck} className="text-xl" /></div>
                    <div>
                        <h5 className="font-black text-xl mb-1">Strategic Architecture</h5>
                        <p className="text-sm opacity-70 font-medium">We design a custom 12 month roadmap for you to hit 800+ and stay there indefinitely.</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                    <Link href="/contact" className="w-full sm:w-auto inline-block bg-white text-[#1F5EFF] font-black py-6 px-16 rounded-[24px] hover:scale-105 transition-all shadow-2xl text-2xl">
                        Talk to an Expert
                    </Link>
                    <p className="text-sm font-bold opacity-60">Zero upfront fees for initial audit.</p>
                </div>
              </div>
              <div className="mt-16 p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center gap-8 italic text-gray-400 font-medium">
                  <FontAwesomeIcon icon={faShieldHalved} className="text-4xl text-gray-200" />
                  <p className="text-sm md:text-base leading-relaxed">
                    The road to 800 is not a sprint; it is a meticulously planned marathon. In the digital age, your credit score is your most valuable asset. Treat it with the respect it deserves, and it will open doors that money alone cannot.
                  </p>
              </div>
            </section>


            <ReviewSnippets reviews={articleReviews} title="What Our Clients Say About Score Recovery" />

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-12 text-center tracking-tighter">Common Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "Can I delete a hard inquiry from my report?", a: "Generally, no. Hard inquiries stay for two years. However, if an inquiry was made without your consent (identity theft), you can dispute it and have it removed." },
                  { q: "How many credit cards are too many?", a: "The number of cards doesn't matter as much as the total utilization. Having five cards with 10% utilization each is often better than having one card with 80% utilization." },
                  { q: "Does a high bank balance help my credit score?", a: "No. Your savings account balance or your salary is not reported to credit bureaus and has zero direct impact on your score." },
                  { q: "How much does a single late payment drop the score?", a: "A single payment missed by more than 30 days can drop a high score (750+) by as much as 80 to 100 points instantly." },
                  { q: "Is a 750 CIBIL score good for a home loan?", a: "Yes, 750 is considered the benchmark for 'good' credit. However, to get the absolute lowest interest rates, many lenders now look for 780 or 800+." },
                  { q: "Can SettleLoans guarantee a score of 800?", a: "No ethical company can 'guarantee' a specific score because the final decision rests with the bureaus and lenders. We guarantee to identify every negative factor and use every legal means to rectify them." },
                  { q: "Does paying only the 'Minimum Due' hurt my score?", a: "Technically, no, it counts as a timely payment. However, it leads to high interest and high utilization, which will eventually drag your score down." },
                  { q: "Will my score drop if I don't use my credit card at all?", a: "Yes, eventually. After a long period of inactivity (usually 6 months), the bureau might stop receiving updates for that account, which can lower your score due to lack of recent data." },
                  { q: "How often should I check my credit report?", a: "We recommend checking once every 3 months. This is frequent enough to catch errors but not so frequent that it becomes an obsession." },
                  { q: "What is the fastest way to increase score by 50 points?", a: "The fastest way is usually to drastically reduce your credit utilization. Paying down a maxed out card can see a score jump within 30 to 45 days." }
                ].map((faq, i) => (
                  <details key={i} className="group bg-white border border-[#DEDEDE] rounded-3xl overflow-hidden hover:shadow-lg transition-all border-b-8 border-b-[#1F5EFF]/10">
                    <summary className="flex justify-between items-center p-8 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50/50 group-open:bg-white transition-colors">
                      <span className="text-xl">{i + 1}. {faq.q}</span>
                      <span className="transition-transform group-open:rotate-180 bg-[#1F5EFF]/10 p-2 rounded-full">
                        <svg className="w-5 h-5 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                      </span>
                    </summary>
                    <div className="px-8 pb-8 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-6 bg-white text-lg">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

             {/* Bottom CTA */}
            <div className="mt-20 mb-20 bg-[#2E2E2E] rounded-[40px] shadow-2xl overflow-hidden border border-[#1F5EFF]/20">
                <div className="bg-[#1F5EFF] p-12 text-center text-white">
                  <h3 className="text-4xl md:text-5xl font-black mb-6">Take Control of Your Credit Today</h3>
                  <p className="opacity-90 text-xl max-w-2xl mx-auto mb-8">Stop guessing why your score is dropping. Get a professional audit and a clear roadmap to financial excellence.</p>
                  <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-5 px-14 rounded-2xl hover:scale-105 transition-all shadow-2xl text-xl">
                    Get Started for Free
                  </Link>
                </div>
            </div>

          </article>

          {/* Right Column: CTA & Related Pages (Sticky) */}
          <aside className="hidden lg:flex w-1/4 flex-col gap-8 sticky top-24 px-8 py-4 h-screen overflow-y-auto scrollbar-hide">
            
            {/* CTA Sidebar Container */}
            <div className="bg-[#2E2E2E] rounded-[24px] p-8 text-white shadow-xl border border-white/5">
                <div className="w-16 h-16 bg-[#1F5EFF] rounded-2xl flex items-center justify-center mb-6">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-2xl" />
                </div>
                <h3 className="text-2xl font-black mb-4 leading-tight">Protect Your Financial Identity</h3>
                <p className="text-sm opacity-70 mb-8 leading-relaxed">Early detection of score drops can save you lakhs in future interest costs. Don't wait for a loan rejection to act.</p>
                <Link href="/contact" className="block w-full text-center bg-[#1F5EFF] text-white font-bold py-4 rounded-xl hover:bg-[#1f5eff]/90 transition-all flex items-center justify-center gap-2">
                    Book Free Call <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>

            {/* Related Pages Sidebar Container */}
            <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-black text-[#2E2E2E] mb-6 flex items-center gap-3 italic">
                    <span className="w-2 h-8 bg-[#1F5EFF] rounded-full"></span>
                    Related Guides
                </h3>
                <div className="flex flex-col gap-4">
                    {[
                        { title: "How to Check Active Loans", url: "/how-to-check-active-loan-on-your-name-in-india-stepbystep-guide" },
                        { title: "800 Credit Score Secrets", url: "/how-to-get-800-credit-score-in-india" },
                        { title: "Loan Settlement Impact", url: "/is-loan-settlement-a-good-option-for-borrowers" },
                        { title: "Loan Settlement Rules 2026", url: "/loan-settlement-rules-india" },
                        { title: "Debt Free After Settlement", url: "/settle-loans-plan-for-building-debt-free-future-after-settlement" }
                    ].map((item, i) => (
                        <Link key={i} href={item.url} className="group flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100">
                            <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-[#1F5EFF]/10 flex items-center justify-center text-gray-400 group-hover:text-[#1F5EFF] transition-colors">
                                <FontAwesomeIcon icon={faClock} size="sm" />
                            </div>
                            <span className="text-sm font-bold text-gray-600 group-hover:text-[#2E2E2E]">{item.title}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Credibility Badge */}
            <div className="bg-gray-50 p-6 rounded-2xl flex items-center gap-4 border border-gray-100 opacity-60">
                <FontAwesomeIcon icon={faScaleBalanced} className="text-gray-400 text-2xl" />
                <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">Trusted by 10k+ Indians</p>
            </div>

          </aside>

        </div>

        <div className="w-full bg-gray-50 py-12 px-6 text-center border-t border-gray-100">
           <p className="max-w-4xl mx-auto text-sm text-gray-400 italic">Disclaimer: SettleLoans provides financial consultancy. We are not a credit bureau. Credit score improvements are subject to individual behavior and bureau policies. Always consult a legal expert for specific cases.</p>
        </div>

      </main>
    </div>
  );
}
