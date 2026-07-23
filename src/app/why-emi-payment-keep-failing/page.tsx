import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Why EMI Payment Keep Failing | NACH & Auto Debit Bounce Reasons",
  description: "Are your EMI auto-debits constantly failing despite having balance? Learn the top NACH mandate failure reasons and how to stop illegal ECS bounce charges.",
  alternates: {
    canonical: "https://www.settleloans.in/why-emi-payment-keep-failing",
  },
};

const tocItems = [
  { id: 'introduction', title: 'Why Are Your EMIs Failing?' },
  { id: 'nach-mandate-failure', title: 'Top NACH Mandate Failure Reasons' },
  { id: 'ecs-bounce-charges', title: 'Illegal ECS Bounce Charges' },
  { id: 'how-to-fix', title: 'How to Fix Auto Debit EMI Failing' },
  { id: 'success-stories', title: 'Success Stories' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function WhyEmiFailsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Why EMI Payment Keep Failing | NACH & Auto Debit Bounce Reasons",
      "description": "Are your EMI auto-debits constantly failing despite having balance? Learn the top NACH mandate failure reasons and how to stop illegal ECS bounce charges.",
      "url": "https://www.settleloans.in/why-emi-payment-keep-failing"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.settleloans.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Why EMI Payment Keep Failing",
          "item": "https://www.settleloans.in/why-emi-payment-keep-failing"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Why EMI Payment Keep Failing | NACH & Auto Debit Bounce Reasons",
      "description": "Are your EMI auto-debits constantly failing despite having balance? Learn the top NACH mandate failure reasons and how to stop illegal ECS bounce charges.",
      "author": {
        "@type": "Organization",
        "name": "SettleLoans",
        "url": "https://www.settleloans.in"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SettleLoans",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.settleloans.in/logo.png"
        }
      },
      "mainEntityOfPage": "https://www.settleloans.in/why-emi-payment-keep-failing"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why did my EMI auto-debit fail when I had enough balance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This usually happens due to a technical glitch at the bank's end, an expired NACH mandate, a mismatched signature, or a blocked account. You can dispute any bounce charges levied."
          }
        },
        {
          "@type": "Question",
          "name": "What are common NACH mandate failure reasons?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common reasons include insufficient funds, signature mismatch, invalid bank account details, mandate expiry, or a frozen bank account."
          }
        },
        {
          "@type": "Question",
          "name": "Can banks charge ECS bounce fees if the failure wasn't my fault?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. If the failure is due to a technical error on the bank's side or incorrect presentation, you are entitled to an ECS bounce charges refund."
          }
        },
        {
          "@type": "Question",
          "name": "How do I claim a refund for illegal bounce charges?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Write a formal email to your bank's grievance officer explaining the failure was due to a technical glitch despite having sufficient balance, and demand an immediate reversal."
          }
        },
        {
          "@type": "Question",
          "name": "Will an auto debit EMI failure affect my CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if the EMI remains unpaid. However, if the failure was a technical issue and you pay immediately, you can request the bank not to report it as a default."
          }
        },
        {
          "@type": "Question",
          "name": "How to fix a cancelled NACH mandate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You will need to register a new e-mandate through net banking or submit a physical NACH form to your lender."
          }
        },
        {
          "@type": "Question",
          "name": "Can I stop an auto-debit if I am negotiating a settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can instruct your bank to stop the NACH mandate or close the specific account to prevent further unauthorized debits while negotiating."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if a presentation fails multiple times?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Multiple failed presentations will result in compounding bounce charges and late fees, significantly inflating your outstanding debt."
          }
        },
        {
          "@type": "Question",
          "name": "Is a physical signature required for NACH?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not always. e-NACH mandates use Aadhaar OTP or Net Banking authentication, avoiding signature mismatch issues."
          }
        },
        {
          "@type": "Question",
          "name": "Can a lender present an ECS mandate after a loan is closed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, it is illegal. If a lender deducts money after loan closure, you can file a complaint with the Banking Ombudsman and claim a refund with compensation."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Legal Support for EMI Failures and Bounce Charges",
      "description": "Expert legal assistance to stop illegal ECS bounce charges and fix auto debit EMI failing issues.",
      "brand": {
        "@type": "Brand",
        "name": "SettleLoans"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Vikram Singh" },
          "datePublished": "2024-03-12",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "My bank charged me ₹1500 in bounce fees because their system failed. SettleLoans helped me get a full refund!"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Sneha R." },
          "datePublished": "2024-02-28",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "My NACH mandate was failing for no reason. I reached out to SettleLoans and they helped me navigate the grievance process perfectly."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Rahul M." },
          "datePublished": "2024-01-15",
          "reviewRating": { "@type": "Rating", "ratingValue": "4" },
          "reviewBody": "Got my CIBIL score fixed after the bank incorrectly reported a default due to an auto debit EMI failing glitch."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Amit Patel" },
          "datePublished": "2023-12-05",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "Highly recommend them if you're dealing with unfair ECS bounce charges. They know exactly how to deal with bank managers."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Financial & Legal Guidance
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Why Does My <span className="text-[#1F5EFF]">EMI Payment Keep Failing</span> Despite Having Balance?
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Are your EMI auto-debits constantly failing despite having enough funds? Stop the bank from illegally charging you bounce fees and fix NACH mandate issues today.
            </p>
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Stop Illegal Bounce Charges Now
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide px-4 md:px-12 py-3">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs md:text-sm text-[#747474]">
            <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/all-queries" className="hover:text-[#1F5EFF] transition-colors">Resources</Link>
            <span className="text-gray-300">/</span>
            <span className="font-bold text-[#2E2E2E]">Why EMI Payment Keep Failing</span>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative max-w-[1600px]">
          
          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Column: Article */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Boxed Intro */}
            <div id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Nightmare of Auto Debit EMI Failing
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-[#4A4A4A]">
                  It is incredibly frustrating to maintain sufficient balance in your account, only to find out that your EMI auto-debit failed. To make matters worse, banks instantly slap you with an ECS bounce charge and a late fee.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-[#4A4A4A]">
                  If your <strong>auto debit EMI failing</strong> is not your fault, you should not be penalized. This guide will uncover the most common <strong>NACH mandate failure reasons</strong> and show you how to claim an <strong>ECS bounce charges refund</strong>.
                </p>
              </div>
            </div>

            {/* Blue Important Box */}
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
              <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Did You Know?</h4>
              <p className="text-lg text-blue-900 mb-4">
                According to banking ombudsman guidelines, if an EMI fails due to a technical glitch on the bank's server and you had adequate balance on the due date, the bank is legally obligated to reverse the bounce charges and late fees.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                  <span className="text-blue-800">You must file a dispute within 30 days.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                  <span className="text-blue-800">CIBIL reporting should be immediately corrected.</span>
                </li>
              </ul>
            </div>

            {/* 4-Grid Info Boxes */}
            <div id="nach-mandate-failure" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Top NACH Mandate Failure Reasons
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                A National Automated Clearing House (NACH) mandate is what allows lenders to pull money directly from your account. When it fails, it's categorized by specific return codes. Here are the most common reasons:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">1. Signature Mismatch</h3>
                  <p className="text-gray-700">The most common reason for physical NACH forms. If your signature on the mandate doesn't perfectly match the bank's records, it gets rejected.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">2. Mandate Expired</h3>
                  <p className="text-gray-700">NACH mandates have validity dates. If your loan tenure gets extended (e.g., due to floating interest rates), the mandate might expire before the loan is closed.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">3. Account Frozen / Dormant</h3>
                  <p className="text-gray-700">If you haven't transacted in your bank account for a long time, it may become dormant, automatically rejecting any incoming debit requests.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">4. Technical Server Glitches</h3>
                  <p className="text-gray-700">Sometimes NPCI or the bank's core banking system experiences downtime, causing valid presentations to bounce despite sufficient funds.</p>
                </div>
              </div>
            </div>

            {/* Red Warning Box */}
            <div id="ecs-bounce-charges" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Beware of Illegal ECS Bounce Charges
              </h2>
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-4">Warning: Compounding Fees</h4>
                <p className="text-lg text-red-900 mb-4">
                  If an auto-debit fails, your bank charges an ECS bounce fee (typically ₹250 to ₹600). Simultaneously, the lending NBFC or bank will also charge a bounce fee (another ₹500). If they attempt to present it multiple times a month, you could be billed thousands in just fees!
                </p>
                <p className="text-lg text-red-900 font-bold">
                  You are legally entitled to an ECS bounce charges refund if the failure was a technical error or if the lender repeatedly presents a mandate they know will fail.
                </p>
              </div>
            </div>

            {/* Numbered Steps */}
            <div id="how-to-fix" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Fix Auto Debit EMI Failing
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                If your EMI payments keep failing, you must take immediate action to prevent credit score damage and financial penalties. Follow these steps:
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-black text-[#2E2E2E] mb-3">Identify the Return Code</h3>
                    <p className="text-lg text-gray-700">Request your bank statement and look for the specific return reason. Is it "Insufficient Funds", "Mandate Cancelled", or something else? This dictates your next step.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-black text-[#2E2E2E] mb-3">Demand a Refund (If Not Your Fault)</h3>
                    <p className="text-lg text-gray-700">Write an email to the Nodal Officer of your bank attaching proof of balance on the EMI date. Demand a complete <strong>ECS bounce charges refund</strong> within 7 days.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-black text-[#2E2E2E] mb-3">Register an e-NACH Mandate</h3>
                    <p className="text-lg text-gray-700">Instead of physical forms, log into your lender's portal and setup an e-NACH using your debit card or net banking to bypass signature mismatch issues entirely.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gray Insight Box */}
            <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
              <h4 className="text-xl font-black text-[#2E2E2E] mb-4">Pro Tip: Pay Manually While Waiting</h4>
              <p className="text-lg text-gray-700">
                While you are fixing the NACH mandate issue, pay your EMI manually via the lender's app, website, or UPI. Do not let the EMI go unpaid, as late reporting to CIBIL can severely damage your credit score.
              </p>
            </div>

            {/* Success Stories / Reviews */}
            <div id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Success Stories: Stopping Unfair Charges
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                      VS
                    </div>
                    <div>
                      <h4 className="font-black text-[#2E2E2E]">Vikram Singh</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-6">"My bank charged me ₹1500 in bounce fees over two months because their system failed. SettleLoans helped me draft a legal notice and I got a full refund!"</p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-100 text-red-700 py-1 px-3 rounded-full">Bounce Fees: ₹1,500</span>
                    <span className="bg-green-100 text-green-700 py-1 px-3 rounded-full">Refunded: ₹1,500</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                      SR
                    </div>
                    <div>
                      <h4 className="font-black text-[#2E2E2E]">Sneha R.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-6">"My NACH mandate was failing for no reason and ruining my CIBIL score. I reached out to SettleLoans and they helped me get the reporting reversed."</p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-100 text-red-700 py-1 px-3 rounded-full">Issue: CIBIL Drop</span>
                    <span className="bg-green-100 text-green-700 py-1 px-3 rounded-full">Status: Resolved</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div id="faq" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">Why did my EMI auto-debit fail when I had enough balance?</h3>
                  <p className="text-gray-600">This usually happens due to a technical glitch at the bank's end, an expired NACH mandate, a mismatched signature, or a blocked account. You can dispute any bounce charges levied.</p>
                </div>
                
                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">What are common NACH mandate failure reasons?</h3>
                  <p className="text-gray-600">Common reasons include insufficient funds, signature mismatch, invalid bank account details, mandate expiry, or a frozen bank account.</p>
                </div>

                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">Can banks charge ECS bounce fees if the failure wasn't my fault?</h3>
                  <p className="text-gray-600">No. If the failure is due to a technical error on the bank's side or incorrect presentation, you are entitled to an ECS bounce charges refund.</p>
                </div>

                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">How do I claim a refund for illegal bounce charges?</h3>
                  <p className="text-gray-600">Write a formal email to your bank's grievance officer explaining the failure was due to a technical glitch despite having sufficient balance, and demand an immediate reversal.</p>
                </div>

                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">Will an auto debit EMI failure affect my CIBIL score?</h3>
                  <p className="text-gray-600">Yes, if the EMI remains unpaid. However, if the failure was a technical issue and you pay immediately, you can request the bank not to report it as a default.</p>
                </div>

                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">How to fix a cancelled NACH mandate?</h3>
                  <p className="text-gray-600">You will need to register a new e-mandate through net banking or submit a physical NACH form to your lender.</p>
                </div>

                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">Can I stop an auto-debit if I am negotiating a settlement?</h3>
                  <p className="text-gray-600">Yes, you can instruct your bank to stop the NACH mandate or close the specific account to prevent further unauthorized debits while negotiating.</p>
                </div>

                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">What happens if a presentation fails multiple times?</h3>
                  <p className="text-gray-600">Multiple failed presentations will result in compounding bounce charges and late fees, significantly inflating your outstanding debt.</p>
                </div>

                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">Is a physical signature required for NACH?</h3>
                  <p className="text-gray-600">Not always. e-NACH mandates use Aadhaar OTP or Net Banking authentication, avoiding signature mismatch issues.</p>
                </div>

                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">Can a lender present an ECS mandate after a loan is closed?</h3>
                  <p className="text-gray-600">No, it is illegal. If a lender deducts money after loan closure, you can file a complaint with the Banking Ombudsman and claim a refund with compensation.</p>
                </div>
              </div>
            </div>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Stop Paying Illegal Bounce Fees</h2>
              <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto relative z-10">
                Are your EMI auto-debits constantly failing despite having balance? Stop the bank from illegally charging you bounce fees. Speak with our experts to resolve your NACH issues immediately.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold text-lg py-5 px-12 rounded-2xl hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(31,94,255,0.3)] relative z-10">
                Get Expert Help Now
              </Link>
              
              <div className="mt-16 pt-8 border-t border-gray-100/10 text-center relative z-10">
                <p className="text-gray-400 text-sm italic">
                  Disclaimer: We help you navigate banking grievances and dispute unfair charges. We do not provide loans.
                </p>
              </div>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-8">
              
              {/* Card 1: Dark CTA */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10">Stop Bank Harassment</h3>
                <p className="text-sm text-gray-300 mb-6 relative z-10">Get professional help to stop illegal bounce charges and recovery agent abuse.</p>
                <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-600 transition-colors relative z-10">
                  Consult Now
                </Link>
              </div>

              {/* Card 2: White Resources */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-6">Related Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/bank-loan-settlement-guidelines" className="flex items-center text-gray-600 hover:text-[#1F5EFF] transition-colors group text-sm font-bold">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                      RBI Settlement Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link href="/recovery-agent-harassment-complaint" className="flex items-center text-gray-600 hover:text-[#1F5EFF] transition-colors group text-sm font-bold">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                      Stop Recovery Agents
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-happens-if-loan-emi-not-paid" className="flex items-center text-gray-600 hover:text-[#1F5EFF] transition-colors group text-sm font-bold">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                      What if EMI is Unpaid?
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="flex items-center text-gray-600 hover:text-[#1F5EFF] transition-colors group text-sm font-bold">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                      Improve CIBIL Score
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
