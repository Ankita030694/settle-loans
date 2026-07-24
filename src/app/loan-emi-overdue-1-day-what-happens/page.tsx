import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Loan EMI Overdue by 1 Day: What Actually Happens?',
  description: 'Missed your loan EMI by 1 day? Find out if there is a grace period for personal loans, the exact impact on your CIBIL score, and how to avoid late payment charges.',
  alternates: {
    canonical: 'https://www.settleloan.in/loan-emi-overdue-1-day-what-happens',
  },
};

export default function LoanEMIOverdue1Day() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Loan EMI Overdue by 1 Day: What Actually Happens?",
      "description": "Missed your loan EMI by 1 day? Find out if there is a grace period for personal loans, the exact impact on your CIBIL score, and how to avoid late payment charges.",
      "url": "https://www.settleloan.in/loan-emi-overdue-1-day-what-happens"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.settleloan.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Loan EMI Overdue by 1 Day: What Actually Happens?",
          "item": "https://www.settleloan.in/loan-emi-overdue-1-day-what-happens"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Loan EMI Overdue by 1 Day: What Actually Happens?",
      "description": "Missed your loan EMI by 1 day? Find out if there is a grace period for personal loans, the exact impact on your CIBIL score, and how to avoid late payment charges.",
      "author": {
        "@type": "Organization",
        "name": "SettleLoan"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SettleLoan",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.settleloan.in/logo.png"
        }
      },
      "datePublished": "2024-05-15",
      "dateModified": "2024-05-15"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does a 1-day delay in EMI payment affect my CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically, a 1-day delay does not immediately impact your CIBIL score. Banks usually report defaults to credit bureaus after 30 days. However, paying it as soon as possible is recommended to avoid any issues."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a grace period for personal loans in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no official RBI-mandated grace period for personal loans. However, some banks may offer a 1 to 5-day window before imposing late fees, though interest may still accrue."
          }
        },
        {
          "@type": "Question",
          "name": "Will I be charged a late fee if my loan EMI is late by 1 day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most banks will charge a late payment fee or bounce charge if your account lacked funds on the EMI date, even if you pay the next day."
          }
        },
        {
          "@type": "Question",
          "name": "How much is the typical bounce charge for a missed EMI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bounce charges usually range from ₹400 to ₹600 plus GST, depending on the bank and the loan agreement."
          }
        },
        {
          "@type": "Question",
          "name": "What is penal interest and how is it calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Penal interest is an additional interest rate applied on the overdue amount. It typically ranges from 24% to 36% per annum, calculated on a daily basis for the days you are late."
          }
        },
        {
          "@type": "Question",
          "name": "Can a 1-day late EMI cause my loan to be classified as an NPA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A loan is only classified as a Non-Performing Asset (NPA) if the EMI remains unpaid for 90 consecutive days."
          }
        },
        {
          "@type": "Question",
          "name": "Should I inform the bank if I know my EMI will bounce?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, proactively communicating with your bank before the EMI date can help you negotiate terms, and some banks might offer a temporary solution if you have a valid reason."
          }
        },
        {
          "@type": "Question",
          "name": "If the EMI date is a bank holiday, when will it be deducted?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the due date falls on a Sunday or a public holiday, the EMI is usually deducted on the next working day without any late penalty."
          }
        },
        {
          "@type": "Question",
          "name": "How can I avoid missing my EMI by 1 day in the future?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Set up an auto-debit (NACH) mandate and maintain sufficient balance in your account at least one day before the EMI date."
          }
        },
        {
          "@type": "Question",
          "name": "Can I request the bank to waive the late fee for a 1-day delay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if it's your first time missing an EMI and you have a good track record, you can request customer care to waive the bounce charges or late fees."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Debt Settlement Services",
      "description": "Professional help to manage and settle overdue personal loans and avoid harassment.",
      "brand": {
        "@type": "Brand",
        "name": "SettleLoan"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "1245"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Rahul M."
          },
          "reviewBody": "They helped me settle my personal loan when I was struggling with EMIs. Highly recommended."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Anita S."
          },
          "reviewBody": "SettleLoan guided me through my late payment situation and saved me from penalty charges."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4"
          },
          "author": {
            "@type": "Person",
            "name": "Vikram P."
          },
          "reviewBody": "Good advice on handling bank recovery agents after my EMI bounced."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Neha K."
          },
          "reviewBody": "Very professional team. They stopped the harassment and settled my debt for less."
        }
      ]
    }
  ];

  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "grace-period", title: "Is There a Grace Period for Personal Loans?" },
    { id: "cibil-impact", title: "What Happens to Your CIBIL Score If You're 1 Day Late?" },
    { id: "penalty-charges", title: "Late Payment Charges & Penalty Interest" },
    { id: "bank-reaction", title: "How Banks React to a 1-Day Delay" },
    { id: "action-steps", title: "4 Steps to Take If You Missed the EMI Date" },
    { id: "success-stories", title: "Recent Settlements" },
    { id: "faq", title: "Frequently Asked Questions" }
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
              Financial Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Loan EMI Overdue by 1 Day: <span className="text-[#1F5EFF]">What Actually Happens?</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Missed your EMI by just 24 hours? Don't panic. Here is exactly what happens to your CIBIL score and how to avoid penalty charges.
            </p>
            <Link href="#action-steps" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              See How to Fix It
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/resources" className="hover:text-[#1F5EFF] transition-colors">Resources</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Loan EMI Overdue by 1 Day</span>
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
          
          {/* Left Column - TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Column - Article Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">Introduction</h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  You checked your bank account, and the realization hit you—your <strong className="text-[#1F5EFF]">loan EMI is late by 1 day</strong>. Whether due to a forgotten date, a delayed salary credit, or a minor calculation error, missing an EMI even by 24 hours can trigger anxiety.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Will recovery agents call? Will your CIBIL score crash immediately? The truth is, while a one-day delay does have consequences, it rarely results in worst-case scenarios if handled quickly and correctly.
                </p>
                <p className="text-lg leading-relaxed mb-0 text-gray-700">
                  In this comprehensive guide, we'll break down the exact implications of missing your EMI by a single day, clarifying bank procedures, penalty charges, and the real <strong className="text-[#1F5EFF]">CIBIL impact 1 day late</strong> payments can cause.
                </p>
              </div>
            </section>

            <section id="grace-period" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Is There a Grace Period for Personal Loans?</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                A common question borrowers ask is whether there is a standard <strong className="text-[#1F5EFF]">grace period for personal loan</strong> payments in India. The short answer is: legally, no, but practically, sometimes.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-4">The Reality of Grace Periods</h3>
                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  Unlike credit cards which often have explicit grace periods (or interest-free periods) built into their billing cycles, personal loans operate on strict fixed schedules. The Reserve Bank of India (RBI) does not mandate a universal grace period for EMIs.
                </p>
                <p className="text-lg leading-relaxed mb-0 text-gray-700">
                  However, some private lenders and NBFCs might informally offer a 1 to 3-day window before initiating aggressive collection processes or reporting to credit bureaus. Do not rely on this unwritten rule, as penalty charges (like bounce fees) are typically levied the moment the mandate fails.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Credit Card vs. Loan</h4>
                  <p className="text-gray-700">Credit cards often allow a 3-day grace period for payment reporting as per RBI guidelines. Personal loans do not have this explicit mandate.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Automated Penalties</h4>
                  <p className="text-gray-700">Banks use automated systems. The second your NACH mandate or auto-debit bounces due to insufficient funds, penalties are generated.</p>
                </div>
              </div>
            </section>

            <section id="cibil-impact" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">What Happens to Your CIBIL Score If You're 1 Day Late?</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                The biggest fear borrowers have is the immediate destruction of their credit score. Here is the reality regarding the <strong className="text-[#1F5EFF]">CIBIL impact 1 day late</strong> payments have.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The Credit Bureau Reporting Cycle</h4>
                <p className="text-lg leading-relaxed mb-4 text-blue-900">
                  Most banks and NBFCs batch their reporting to credit bureaus (CIBIL, Experian, Equifax) on a monthly basis, usually reporting the status of an account as of the month-end.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-blue-900 text-lg m-0">If you miss the EMI by 1 day but clear it before the bank sends its next report, it may not be marked as a "Late Payment" (often denoted as DPD - Days Past Due).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-blue-900 text-lg m-0">Typically, accounts under 30 days overdue are considered in the "SMA-0" (Special Mention Account 0) category internally by banks, but are rarely flagged disastrously on CIBIL unless the month closes without payment.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-blue-900 text-lg m-0">A one-time, 1-day delay will NOT ruin a strong 750+ credit score, provided it is paid immediately.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="penalty-charges" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Late Payment Charges & Penalty Interest</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                While your CIBIL score might survive a 24-hour delay, your wallet will likely take a hit. Financial institutions apply specific charges the moment an EMI mandate fails.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">1. Bounce Charges</h4>
                  <p className="text-gray-700">Also known as ECS/NACH return charges. If your bank account lacks funds when the EMI auto-debit is triggered, your bank will charge you a bounce fee (usually ₹300 to ₹600 + GST). Additionally, your lender may also charge a separate bounce fee.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">2. Penal Interest</h4>
                  <p className="text-gray-700">Lenders charge penal interest on the overdue amount. This is typically calculated at 2% to 3% per month (24% to 36% p.a.), applied strictly for the number of days the payment is delayed.</p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Important Warning on Penalties</h4>
                <p className="text-red-900 text-lg m-0">
                  Even if you transfer funds to your account the very next day, the automated bounce charge will have already been levied. Always ensure sufficient balance 24 hours <em>before</em> the due date.
                </p>
              </div>
            </section>

            <section id="bank-reaction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How Banks React to a 1-Day Delay</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Modern banking operations are highly automated. When your <strong className="text-[#1F5EFF]">loan emi is late by 1 day</strong>, it triggers a series of automated events in the lender's system.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#2E2E2E] flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 m-0"><strong>Automated SMS/Email:</strong> Within hours of the bounce, you will receive notifications alerting you of the failed payment.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#2E2E2E] flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 m-0"><strong>Robocalls:</strong> Many NBFCs and banks deploy automated calling systems to remind you to fund the account immediately.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#2E2E2E] flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 m-0"><strong>No Physical Recovery Agents:</strong> For a 1-day delay, banks do not send recovery agents to your home or office. Physical visits generally start much later, typically after 60-90 days of non-payment.</p>
                </li>
              </ul>
            </section>

            <section id="action-steps" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">4 Steps to Take If You Missed the EMI Date</h2>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-black text-[#2E2E2E] mb-3">Fund Your Account Immediately</h3>
                    <p className="text-lg text-gray-700">Banks often attempt to re-present the NACH mandate a few days after the initial bounce. Deposit the EMI amount plus an extra ₹1,000 (to cover bounce fees) immediately to ensure the next presentation clears.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-black text-[#2E2E2E] mb-3">Pay Manually Online</h3>
                    <p className="text-lg text-gray-700">Log into your loan portal or banking app and check for a "Pay Overdue EMI" option. Paying manually is often faster than waiting for the auto-debit to be re-tried. Be sure to confirm whether making a manual payment stops the automated re-presentation to avoid double deduction.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-black text-[#2E2E2E] mb-3">Inform Customer Support</h3>
                    <p className="text-lg text-gray-700">Call the bank's customer service or write an email explaining that the delay was an oversight and that payment has been made. Proactive communication builds trust and keeps your file clean.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-2xl font-black text-[#2E2E2E] mb-3">Request Fee Waiver (First-Time Offenders)</h3>
                    <p className="text-lg text-gray-700">If this is the first time you've missed an EMI, you can formally request a waiver of the bounce charges. Banks often grant this goodwill gesture to customers with otherwise flawless repayment histories.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Recent Debt Settlements</h2>
              <p className="text-lg leading-relaxed mb-8 text-gray-700">
                If your 1-day delay has turned into a 90-day delay, you might need professional help. Here are some users who settled their overdue loans successfully.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl transition-shadow group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                      RM
                    </div>
                    <div className="flex gap-1 text-yellow-400">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-medium">Loan Amount</span>
                      <span className="py-1 px-3 rounded-full bg-red-100 text-red-700 font-bold text-sm">₹8,50,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-medium">Settled Amount</span>
                      <span className="py-1 px-3 rounded-full bg-green-100 text-green-700 font-bold text-sm">₹3,40,000</span>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"I was struggling after a job loss. SettleLoan helped negotiate a massive reduction and stopped the constant calls."</p>
                </div>
                
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl transition-shadow group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                      AS
                    </div>
                    <div className="flex gap-1 text-yellow-400">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-medium">Loan Amount</span>
                      <span className="py-1 px-3 rounded-full bg-red-100 text-red-700 font-bold text-sm">₹5,00,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-medium">Settled Amount</span>
                      <span className="py-1 px-3 rounded-full bg-green-100 text-green-700 font-bold text-sm">₹2,10,000</span>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"Highly professional service. They handled the bank directly and closed my loan account legally."</p>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] list-none flex justify-between items-center">
                    Does a 1-day delay in EMI payment affect my CIBIL score?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform duration-300 text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    Typically, a 1-day delay does not immediately impact your CIBIL score. Banks usually report defaults to credit bureaus after 30 days. However, paying it as soon as possible is recommended to avoid any issues.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] list-none flex justify-between items-center">
                    Is there a grace period for personal loans in India?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform duration-300 text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    There is no official RBI-mandated grace period for personal loans. However, some banks may offer a 1 to 5-day window before imposing late fees, though interest may still accrue.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] list-none flex justify-between items-center">
                    Will I be charged a late fee if my loan EMI is late by 1 day?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform duration-300 text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    Most banks will charge a late payment fee or bounce charge if your account lacked funds on the EMI date, even if you pay the next day.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] list-none flex justify-between items-center">
                    How much is the typical bounce charge for a missed EMI?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform duration-300 text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    Bounce charges usually range from ₹400 to ₹600 plus GST, depending on the bank and the loan agreement.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] list-none flex justify-between items-center">
                    What is penal interest and how is it calculated?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform duration-300 text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    Penal interest is an additional interest rate applied on the overdue amount. It typically ranges from 24% to 36% per annum, calculated on a daily basis for the days you are late.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] list-none flex justify-between items-center">
                    Can a 1-day late EMI cause my loan to be classified as an NPA?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform duration-300 text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    No. A loan is only classified as a Non-Performing Asset (NPA) if the EMI remains unpaid for 90 consecutive days.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] list-none flex justify-between items-center">
                    Should I inform the bank if I know my EMI will bounce?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform duration-300 text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    Yes, proactively communicating with your bank before the EMI date can help you negotiate terms, and some banks might offer a temporary solution if you have a valid reason.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] list-none flex justify-between items-center">
                    If the EMI date is a bank holiday, when will it be deducted?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform duration-300 text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    If the due date falls on a Sunday or a public holiday, the EMI is usually deducted on the next working day without any late penalty.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] list-none flex justify-between items-center">
                    How can I avoid missing my EMI by 1 day in the future?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform duration-300 text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    Set up an auto-debit (NACH) mandate and maintain sufficient balance in your account at least one day before the EMI date.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] list-none flex justify-between items-center">
                    Can I request the bank to waive the late fee for a 1-day delay?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform duration-300 text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    Yes, if it's your first time missing an EMI and you have a good track record, you can request customer care to waive the bounce charges or late fees.
                  </p>
                </details>

              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6">Are Multiple EMIs Bouncing?</h3>
                <p className="text-xl mb-8 text-gray-300">
                  Missed your EMI by just 24 hours? Don't panic. But if delays have turned into months of default, you need an expert to protect your rights and stop recovery harassment.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-lg text-lg">
                  Get Expert Legal Help Now
                </Link>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided regarding EMI grace periods and late payments is for educational purposes. Exact penalty charges and reporting timelines depend on your specific lender's internal policies and your signed loan agreement. Always refer to your loan sanction letter for accurate details.
              </p>
            </div>

          </article>

          {/* Right Column - Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-black mb-4">Facing Harassment?</h3>
                  <p className="text-gray-300 mb-6 text-sm">
                    Is the bank threatening you over missed EMIs? Know your legal rights and stop the harassment immediately.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                    Stop Harassment
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-6">Related Resources</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/what-is-loan-settlement" className="flex items-center text-gray-700 hover:text-[#1F5EFF] transition-colors group text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      What is Loan Settlement?
                    </Link>
                  </li>
                  <li>
                    <Link href="/credit-card-settlement" className="flex items-center text-gray-700 hover:text-[#1F5EFF] transition-colors group text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Credit Card Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/rbi-guidelines-on-loan-recovery-agents" className="flex items-center text-gray-700 hover:text-[#1F5EFF] transition-colors group text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI Rules on Recovery Agents
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
