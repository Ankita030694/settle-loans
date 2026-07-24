import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Loan Overdue Due to NACH Signature Mismatch or Server Issue | Fight Bounce Charges',
  description: "Did your EMI bounce because of the bank's server issue or a signature mismatch? You are NOT liable for the bounce charges. Learn how to fight it.",
  alternates: {
    canonical: 'https://www.settleloan.in/loan-overdue-nach-signature-mismatch-server-issue',
  },
};

export default function NachBounceGuidePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Loan Overdue Due to NACH Signature Mismatch or Server Issue",
      "description": "Did your EMI bounce because of the bank's server issue or a signature mismatch? You are NOT liable for the bounce charges. Learn how to fight it.",
      "url": "https://www.settleloan.in/loan-overdue-nach-signature-mismatch-server-issue"
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
          "name": "Loan Overdue Due to NACH Signature Mismatch or Server Issue",
          "item": "https://www.settleloan.in/loan-overdue-nach-signature-mismatch-server-issue"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Loan Overdue Due to NACH Signature Mismatch or Server Issue",
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
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloan.in/loan-overdue-nach-signature-mismatch-server-issue"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who pays the penalty for a technical bounce?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the bounce is due to a technical error like a bank server issue, you are not liable for the bounce charges. The bank must waive them off upon a formal request."
          }
        },
        {
          "@type": "Question",
          "name": "What is a NACH signature mismatch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It happens when the signature on your NACH mandate form does not exactly match the signature stored in the bank's database, causing the EMI deduction to fail."
          }
        },
        {
          "@type": "Question",
          "name": "Will a signature mismatch impact my CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the EMI is not paid within the grace period, the delay might be reported to CIBIL, impacting your score. However, you can dispute it if it was purely a bank error."
          }
        },
        {
          "@type": "Question",
          "name": "How do I fix a NACH signature mismatch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You need to submit a new NACH mandate form with your correct signature or update your signature in your bank branch."
          }
        },
        {
          "@type": "Question",
          "name": "Can my bank charge me for their own server issue?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, RBI guidelines stipulate that customers should not be penalized for system downtimes or technical errors on the bank's end."
          }
        },
        {
          "@type": "Question",
          "name": "How do I prove the bounce was due to a server issue?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can request the exact reason code for the NACH bounce from your bank. Technical bounces have specific failure codes."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my NACH mandate is rejected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your auto-debit will not work, and you must pay your EMIs manually until a new mandate is successfully registered."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to register a new NACH mandate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It usually takes 7 to 15 working days for a new physical NACH mandate to be registered. E-NACH can be done instantly."
          }
        },
        {
          "@type": "Question",
          "name": "Can I request a waiver for the late payment fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if the delay was due to a technical NACH failure or signature mismatch that wasn't your fault, you can formally request a waiver of all late fees and bounce charges."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I complain if the bank refuses to waive charges?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the bank refuses your request, you can escalate the matter to the Banking Ombudsman through the RBI's CMS portal."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Technical Bounce Resolution Consultation",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Rajiv M." },
          "reviewBody": "My EMI bounced due to a server issue and HDFC charged me ₹590. SettleLoan helped me draft the right email and the charges were reversed in 48 hours."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Priya S." },
          "reviewBody": "Faced a NACH signature mismatch despite signing correctly. They guided me on how to register E-NACH and get the penalty waived."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Amit K." },
          "reviewBody": "Highly recommend their service! I was being harassed by recovery agents for a technical bounce. SettleLoan stepped in and stopped it."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "4" },
          "author": { "@type": "Person", "name": "Neha V." },
          "reviewBody": "Great advice on dealing with bank server issue EMI bounces. Saved me a lot of stress."
        }
      ]
    }
  ];

  const tocItems = [
    { id: 'introduction', label: 'Understanding Technical Bounces' },
    { id: 'liability', label: 'Who Pays the Penalty?' },
    { id: 'signature-mismatch', label: 'NACH Signature Mismatch Explained' },
    { id: 'server-issues', label: 'Bank Server Issue EMI Bounces' },
    { id: 'action-steps', label: 'Steps to Fight Bounce Charges' },
    { id: 'success-stories', label: 'Success Stories' },
    { id: 'faqs', label: 'Frequently Asked Questions' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col min-h-screen">
        <main
          className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white"
          style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
        >
          {/* Hero Section */}
          <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
            <div className="max-w-5xl mx-auto text-center relative z-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                Fight Bounce Charges
              </span>
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                Loan Overdue Due to <span className="text-[#1F5EFF]">NACH Signature Mismatch</span> or Server Issue
              </h1>
              <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
                Did your EMI bounce because of the bank's server issue or a signature mismatch? You are NOT liable for the bounce charges. Learn how to fight it.
              </p>
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg"
              >
                Get Expert Help Now
              </Link>
            </div>
          </section>

          {/* Breadcrumbs */}
          <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">
                Home
              </Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Technical Bounce Guide</span>
            </div>
          </div>

          {/* 3-Column Layout */}
          <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
            {/* Left Sidebar (TOC) */}
            <aside className="hidden lg:block w-1/5 min-w-[240px]">
              <div className="sticky top-24">
                <TableOfContents items={tocItems} />
              </div>
            </aside>

            {/* Middle Content (Article) */}
            <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
              {/* Introduction */}
              <section id="introduction" className="scroll-mt-32 mb-16">
                <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                  <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                    Understanding Technical Bounces
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Finding out your loan EMI has bounced can be incredibly stressful, especially when it wasn't your fault. A <strong>technical bounce</strong> occurs when an automated EMI payment (via NACH/ECS) fails due to technical or administrative reasons outside the customer's control.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The two most common culprits are a <strong>NACH bounce signature mismatch</strong> and a <strong>bank server issue EMI bounce</strong>. In both scenarios, the failure happens in the banking system, yet many borrowers incorrectly face hefty penalty charges and a negative impact on their credit scores.
                  </p>
                </div>
              </section>

              {/* Who Pays Penalty */}
              <section id="liability" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                  Who Pays the Penalty for a Technical Bounce?
                </h2>
                <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                  <h4 className="text-xl font-black text-[#1F5EFF] mb-4">
                    You Are Not Liable
                  </h4>
                  <p className="text-lg leading-relaxed mb-6 text-blue-900">
                    If the EMI failure was caused by a technical glitch on the bank's side or an administrative error like a signature mismatch during mandate registration, <strong>you should not pay the penalty</strong>.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                      <p className="text-blue-900"><strong>RBI Guidelines:</strong> Banks cannot penalize customers for system downtimes or internal processing errors.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                      <p className="text-blue-900"><strong>Bounce Charges:</strong> You are entitled to a full reversal of NACH bounce charges and late payment fees.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                      <p className="text-blue-900"><strong>CIBIL Protection:</strong> The lender must correct any negative remarks reported to credit bureaus due to their technical failures.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Signature Mismatch */}
              <section id="signature-mismatch" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                  NACH Signature Mismatch Explained
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  When you set up an auto-debit for your loan, you sign a NACH (National Automated Clearing House) mandate form. This form is sent to your bank (the destination bank) for verification. A <strong>NACH signature mismatch</strong> happens when the signature on the physical form doesn't perfectly match the specimen signature the bank has on file.
                </p>
                <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                  <p className="text-lg leading-relaxed text-gray-800 mb-0">
                    <strong>Why it happens:</strong> Signatures can change slightly over time, or the bank's scanning process might be flawed. Sometimes, the signature on file is decades old. Even a slight variation can lead to an automated rejection, causing your EMI to bounce.
                  </p>
                </div>
              </section>

              {/* Server Issues */}
              <section id="server-issues" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                  Bank Server Issue EMI Bounces
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  A <strong>bank server issue EMI bounce</strong> occurs when the core banking system of either your bank (where funds are deducted) or the lender's bank is down or experiencing timeouts during the batch processing of NACH debits.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Timeout Errors</h3>
                    <p className="text-gray-700">The request to debit your account takes too long and times out, resulting in a failed transaction despite you having sufficient balance.</p>
                  </div>
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Maintenance Downtime</h3>
                    <p className="text-gray-700">Scheduled or unscheduled server maintenance precisely when the NACH clearing batch is run.</p>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                  <h4 className="text-xl font-black text-red-700 mb-4">Warning: Don't Pay the Penalty Blindly</h4>
                  <p className="text-lg leading-relaxed text-red-900 mb-0">
                    Banks often automatically levy bounce charges regardless of the reason code. It is up to you to identify that it was a technical bounce and demand a reversal. Do not simply pay the extra ₹500-₹1000 without protesting.
                  </p>
                </div>
              </section>

              {/* Action Steps */}
              <section id="action-steps" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                  Steps to Fight Bounce Charges
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  If you are facing a technical bounce, follow these steps immediately to protect your money and your credit score:
                </p>

                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Get the Exact Reason Code</h3>
                      <p className="text-lg text-gray-700">Contact your bank's customer support or check your net banking statement to find the exact reason code for the bounce. Look for codes indicating "Technical Issue", "Server Timeout", or "Signature Mismatch".</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Pay the EMI Manually</h3>
                      <p className="text-lg text-gray-700">Do not wait for the bank to figure it out. Immediately pay the principal EMI amount directly to the lender via NEFT, RTGS, or their payment portal to prevent further delays.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                      3
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Email a Formal Dispute</h3>
                      <p className="text-lg text-gray-700">Write to both your bank and the lending institution. State clearly that the bounce was due to a technical error/signature mismatch (attach proof if available) and demand an immediate reversal of any bounce charges or late fees.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                      4
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Set Up E-NACH</h3>
                      <p className="text-lg text-gray-700">If dealing with a signature mismatch, abandon physical forms. Request an E-NACH setup link which uses NetBanking or Debit Card authentication, completely eliminating signature issues.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Success Stories */}
              <section id="success-stories" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                  Success Stories
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  {/* Card 1 */}
                  <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                        RM
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 italic">"My EMI bounced due to a server issue and the bank charged me ₹590. SettleLoan helped me draft the right email and the charges were reversed in 48 hours."</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Penalty Levied</span>
                      <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">100% Waived</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                        PS
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 italic">"Faced a NACH signature mismatch despite signing correctly. They guided me on how to register E-NACH instantly and get the penalty waived off completely."</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Harassment Started</span>
                      <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Issue Resolved</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {[
                    { q: "Who pays the penalty for a technical bounce?", a: "If the bounce is due to a technical error like a bank server issue, you are not liable for the bounce charges. The bank must waive them off upon a formal request." },
                    { q: "What is a NACH signature mismatch?", a: "It happens when the signature on your NACH mandate form does not exactly match the signature stored in the bank's database, causing the EMI deduction to fail." },
                    { q: "Will a signature mismatch impact my CIBIL score?", a: "If the EMI is not paid within the grace period, the delay might be reported to CIBIL, impacting your score. However, you can dispute it if it was purely a bank error." },
                    { q: "How do I fix a NACH signature mismatch?", a: "You need to submit a new NACH mandate form with your correct signature or update your signature in your bank branch." },
                    { q: "Can my bank charge me for their own server issue?", a: "No, RBI guidelines stipulate that customers should not be penalized for system downtimes or technical errors on the bank's end." },
                    { q: "How do I prove the bounce was due to a server issue?", a: "You can request the exact reason code for the NACH bounce from your bank. Technical bounces have specific failure codes." },
                    { q: "What happens if my NACH mandate is rejected?", a: "Your auto-debit will not work, and you must pay your EMIs manually until a new mandate is successfully registered." },
                    { q: "How long does it take to register a new NACH mandate?", a: "It usually takes 7 to 15 working days for a new physical NACH mandate to be registered. E-NACH can be done instantly." },
                    { q: "Can I request a waiver for the late payment fee?", a: "Yes, if the delay was due to a technical NACH failure or signature mismatch that wasn't your fault, you can formally request a waiver of all late fees and bounce charges." },
                    { q: "Where can I complain if the bank refuses to waive charges?", a: "If the bank refuses your request, you can escalate the matter to the Banking Ombudsman through the RBI's CMS portal." }
                  ].map((faq, i) => (
                    <details key={i} name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                      <summary className="font-bold text-lg text-[#2E2E2E] list-none flex justify-between items-center">
                        {faq.q}
                        <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Lead Gen Hook */}
              <div id="contact" className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-black mb-6">
                    Stop Paying for Bank Errors!
                  </h3>
                  <p className="text-xl mb-8 text-gray-300">
                    Did your EMI bounce because of the bank's server issue or a signature mismatch? You are NOT liable for the bounce charges. Learn how to fight it.
                  </p>
                  <button className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-[10px] text-lg transition-all duration-300 shadow-lg hover:scale-105">
                    Get Free Consultation
                  </button>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-gray-100 text-center">
                <p className="text-gray-400 text-sm italic">
                  Disclaimer: The information provided on this page is for educational purposes only and does not constitute legal or financial advice. Please consult with a qualified professional for advice specific to your situation.
                </p>
              </div>

            </article>

            {/* Right Sidebar */}
            <aside className="hidden lg:block w-1/5 min-w-[240px]">
              <div className="sticky top-24 space-y-8">
                {/* Card 1 (Dark CTA) */}
                <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black mb-4">Need Help with Bounce Charges?</h3>
                    <p className="text-sm text-gray-300 mb-6">Our experts can help you dispute unfair technical bounce fees.</p>
                    <button className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-sm">
                      Talk to an Expert
                    </button>
                  </div>
                </div>

                {/* Card 2 (White Resources) */}
                <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                  <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                    Related Resources
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Stop Harassment Instantly",
                      "Cheque Bounce Legal Notice",
                      "Credit Score Repair Guide",
                      "Debt Settlement Process"
                    ].map((item, i) => (
                      <li key={i}>
                        <Link href="#" className="flex items-center text-gray-600 hover:text-[#1F5EFF] group transition-colors text-sm font-medium">
                          <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
