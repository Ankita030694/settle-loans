import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Business Loan Foreclosure Letter Format | Request MSME Loan Closure',
  description: 'Download the legally vetted Business Loan Foreclosure Letter Format to request the foreclosure of your business or MSME loan and ensure the bank doesn\'t stall the process.',
  alternates: {
    canonical: 'https://settleloan.in/business-loan-foreclosure-letter',
  },
};

const tocItems = [
  { id: 'introduction', title: 'Why You Need a Formal Foreclosure Letter' },
  { id: 'when-to-use', title: 'When Should You Send This Letter?' },
  { id: 'letter-format', title: 'Business Loan Foreclosure Letter Format' },
  { id: 'step-by-step', title: 'Step-by-Step Foreclosure Process' },
  { id: 'bank-stalling', title: 'What to Do if the Bank Stalls' },
  { id: 'success-stories', title: 'Success Stories' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function BusinessLoanForeclosurePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloan.in/business-loan-foreclosure-letter",
        "url": "https://settleloan.in/business-loan-foreclosure-letter",
        "name": "Business Loan Foreclosure Letter Format",
        "description": "Legally vetted business loan foreclosure letter format to close your MSME loan quickly without unnecessary delays.",
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoan",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloan.in/logo.png"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://settleloan.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Business Loan Foreclosure Letter",
            "item": "https://settleloan.in/business-loan-foreclosure-letter"
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "Business Loan Foreclosure Letter Format",
        "description": "Use our legally vetted Foreclosure Letter Format to ensure the bank doesn't stall the closure of your business loan.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoan"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoan"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://settleloan.in/business-loan-foreclosure-letter"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a business loan foreclosure letter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is a formal written request submitted to your lender asking for the final payoff amount (foreclosure statement) to close your business loan ahead of schedule."
            }
          },
          {
            "@type": "Question",
            "name": "Can a bank refuse my request for foreclosure of a business loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, a bank cannot refuse to foreclose a loan if you are willing to pay the outstanding principal and applicable foreclosure charges."
            }
          },
          {
            "@type": "Question",
            "name": "Are there foreclosure charges on MSME loans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For individual borrowers with floating-rate MSME loans, foreclosure charges are generally waived by RBI guidelines. However, company/corporate loans may still attract foreclosure penalties."
            }
          },
          {
            "@type": "Question",
            "name": "How many days does it take to get a foreclosure letter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banks typically take 7 to 15 working days to issue a foreclosure letter after receiving your formal written request."
            }
          },
          {
            "@type": "Question",
            "name": "What details are required in the MSME loan closure letter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You must include your loan account number, borrower name, registered contact details, and a clear request for the foreclosure statement."
            }
          },
          {
            "@type": "Question",
            "name": "How should I submit the foreclosure request?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can submit it physically at the bank branch with an acknowledgment receipt or via email from your registered email ID."
            }
          },
          {
            "@type": "Question",
            "name": "What if the bank ignores my foreclosure email?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If the bank ignores your request for more than 15 days, you can escalate the matter to the bank's Nodal Officer and subsequently to the RBI Ombudsman."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a lawyer to draft the business loan closure letter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, you don't need a lawyer. You can use our standard, legally vetted business loan closure letter format to request foreclosure."
            }
          },
          {
            "@type": "Question",
            "name": "Is an NOC required after foreclosing the loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, always ensure you receive a No Objection Certificate (NOC) and No Dues Certificate (NDC) from the bank after making the final payment."
            }
          },
          {
            "@type": "Question",
            "name": "Does foreclosure impact my CIBIL score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Foreclosing a loan generally has a positive impact on your CIBIL score as it reduces your outstanding debt and shows repayment capability."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Business Loan Foreclosure Assistance",
        "description": "Expert assistance and letter formats for closing expensive business and MSME loans quickly.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1350"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul Verma" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "The format worked perfectly. The bank issued my foreclosure statement within 4 days of sending the email."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit Shah" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "I was struggling with high interest. Used their legally vetted format and finally closed my MSME loan without paying extra hidden fees."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sanjay Gupta" },
            "reviewRating": { "@type": "Rating", "ratingValue": "4" },
            "reviewBody": "Very helpful template. The bank tried to stall, but having a formal written letter made a huge difference."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya Desai" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Highly recommend using this exact format. It covers all legal grounds and forces the bank to act."
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Business Loan Closure
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Legally Vetted <span className="text-[#1F5EFF]">Foreclosure Letter</span> Format
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Ready to close your expensive business loan? Use our legally vetted Foreclosure Letter Format to ensure the bank doesn&apos;t stall the process.
            </p>
            <Link href="#letter-format" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Foreclosure Format
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 text-xs md:text-sm text-[#747474] flex items-center gap-2">
            <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/business-loan" className="hover:text-[#1F5EFF] transition-colors">Business Loan</Link>
            <span className="text-gray-300">/</span>
            <span className="font-bold text-[#2E2E2E]">Foreclosure Letter Format</span>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
          
          {/* Left Sidebar: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] sticky top-24 self-start">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Middle Content: Article */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Intro Section */}
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  Why You Need a Formal Foreclosure Letter
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Business loans often come with high interest rates, and prepaying or foreclosing them can save you lakhs in interest. However, banks and NBFCs make profits off your interest payments, which is why they often try to stall or delay your foreclosure request.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Sending a formal, legally drafted <strong className="text-gray-900">business loan foreclosure letter</strong> leaves a paper trail. It forces the lender to acknowledge your request and process your closure within the stipulated RBI timeframe, preventing unnecessary delays.
                </p>
              </div>
            </section>

            {/* When to Use Section */}
            <section id="when-to-use" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                When Should You Send This Letter?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Refinancing to Lower Rates</h3>
                  <p className="text-gray-700">If you have found another lender offering a significantly lower interest rate and want to transfer your balance to save on EMI.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Excess Business Capital</h3>
                  <p className="text-gray-700">When your business has surplus cash reserves and you want to reduce your debt burden to improve cash flow.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Selling Collateral</h3>
                  <p className="text-gray-700">If you have secured a loan against property (LAP) and plan to sell the asset, you must close the loan first to release the documents.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Closing Operations</h3>
                  <p className="text-gray-700">If you are winding down a particular business venture or partnership and need to clear all associated liabilities.</p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="font-black text-red-700 text-xl mb-4">Crucial Warning</h4>
                <p className="text-red-900 text-lg leading-relaxed">
                  Never pay the foreclosure amount without first receiving a formal written statement from the bank detailing the exact payoff amount, including principal, interest, and any applicable charges up to a specific validity date.
                </p>
              </div>
            </section>

            {/* Letter Format Section */}
            <section id="letter-format" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Business Loan Foreclosure Letter Format
              </h2>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed mb-6 text-gray-800">
                  You can copy and paste the format below, fill in your specific details, and send it via your registered email ID to the bank&apos;s customer service or submit a physical copy at the branch.
                </p>

                <div className="bg-white p-6 border border-gray-300 rounded-xl font-mono text-sm overflow-x-auto text-gray-800">
                  <p className="mb-2"><strong>To,</strong></p>
                  <p className="mb-2">The Branch Manager,</p>
                  <p className="mb-2">[Bank/NBFC Name],</p>
                  <p className="mb-6">[Branch Address].</p>
                  
                  <p className="mb-6"><strong>Date:</strong> [DD/MM/YYYY]</p>
                  
                  <p className="mb-6"><strong>Subject: Request for Foreclosure Statement for Business Loan Account Number [Your Loan Account Number]</strong></p>
                  
                  <p className="mb-2">Respected Sir/Madam,</p>
                  <p className="mb-4">
                    I/We, [Your Name / Company Name], hold a business loan with your esteemed institution bearing the Account Number [Your Loan Account Number], disbursed on [Date of Disbursement].
                  </p>
                  <p className="mb-4">
                    I/We wish to prepay and foreclose the aforementioned loan account in full. Therefore, I kindly request you to issue a formal foreclosure statement detailing the outstanding principal, pending interest, and any applicable foreclosure charges calculated up to [Target Date, e.g., next 7 days].
                  </p>
                  <p className="mb-4">
                    Please provide the statement at the earliest so we can arrange the funds and complete the closure formalities. Kindly share the statement via reply to my registered email ID [Your Email ID] or provide a hard copy.
                  </p>
                  <p className="mb-6">
                    Looking forward to your prompt response.
                  </p>
                  
                  <p className="mb-2">Sincerely,</p>
                  <p className="mb-2">[Your Signature (if submitting physical copy)]</p>
                  <p className="mb-2"><strong>[Your Name / Authorized Signatory Name]</strong></p>
                  <p className="mb-2">[Your Company Name]</p>
                  <p className="mb-2">Registered Mobile: [Your Phone Number]</p>
                  <p>Registered Email: [Your Email Address]</p>
                </div>
              </div>
            </section>

            {/* Step-by-Step Process */}
            <section id="step-by-step" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Step-by-Step Foreclosure Process
              </h2>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">Submit the Request Letter</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Use the MSME loan closure format provided above. If submitting physically, take two copies and get one stamped by the bank as an acknowledgment receipt.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">Receive the Foreclosure Statement</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      The bank will calculate the total payoff amount, including remaining principal, interest till date, and prepayment penalties (if applicable). This document will have a validity date.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">Make the Final Payment</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Pay the exact amount mentioned in the statement via RTGS, NEFT, or Demand Draft before the validity date expires. Ensure you get a transaction reference number or receipt.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">Collect NOC and Original Documents</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Within 15 to 30 days of payment, collect your No Objection Certificate (NOC) and any original collateral documents (like property papers) from the bank.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Bank Stalling Section */}
            <section id="bank-stalling" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                What to Do if the Bank Stalls Your Request
              </h2>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Take These Legal Actions</h4>
                <p className="text-gray-800 text-lg mb-4">Banks lose out on future interest when you close a loan early, so relationship managers often delay processing your letter. If they ignore your request for more than 15 days, do the following:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800"><strong>Escalate to Grievance Redressal:</strong> Email the Principal Nodal Officer of the bank, citing your original request and the delay.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800"><strong>File an RBI Ombudsman Complaint:</strong> If the bank doesn&apos;t resolve it within 30 days, file a complaint on the RBI CMS portal for &quot;delay in providing loan closure statement.&quot;</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800"><strong>Send a Legal Notice:</strong> Draft a formal legal notice through a lawyer demanding immediate issuance of the statement and NOC.</p>
                  </li>
                </ul>
              </div>
            </section>

            {/* Success Stories Section */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Success Stories: MSME Loan Closures
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      R
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <h4 className="font-bold text-xl text-[#2E2E2E] mb-4">HDFC Business Loan</h4>
                  <p className="text-gray-600 mb-6 italic">&quot;The branch kept telling me the system was down. I sent this exact letter format to the Nodal officer and got my statement the next day.&quot;</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Loan: ₹15L</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Closed in 4 Days</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      A
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <h4 className="font-bold text-xl text-[#2E2E2E] mb-4">Bajaj Finserv MSME</h4>
                  <p className="text-gray-600 mb-6 italic">&quot;Having a formal paper trail is crucial. Once I submitted the letter, the relationship manager stopped offering excuses and processed my NOC.&quot;</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Loan: ₹40L</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Waiver secured</span>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-lg font-bold text-[#2E2E2E] list-none relative pr-8">
                    What is a business loan foreclosure letter?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1F5EFF] group-open:rotate-180 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 text-lg">
                    It is a formal written request submitted to your lender asking for the final payoff amount (foreclosure statement) to close your business loan ahead of schedule.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-lg font-bold text-[#2E2E2E] list-none relative pr-8">
                    Can a bank refuse my request for foreclosure of a business loan?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1F5EFF] group-open:rotate-180 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 text-lg">
                    No, a bank cannot refuse to foreclose a loan if you are willing to pay the outstanding principal and applicable foreclosure charges. They are legally obligated to provide the statement.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-lg font-bold text-[#2E2E2E] list-none relative pr-8">
                    Are there foreclosure charges on MSME loans?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1F5EFF] group-open:rotate-180 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 text-lg">
                    For individual borrowers with floating-rate MSME loans, foreclosure charges are generally waived per RBI guidelines. However, company or corporate structure loans may still attract foreclosure penalties of 2% to 4%.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-lg font-bold text-[#2E2E2E] list-none relative pr-8">
                    How many days does it take to get a foreclosure letter?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1F5EFF] group-open:rotate-180 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 text-lg">
                    Banks typically take 7 to 15 working days to issue a foreclosure statement after receiving your formal written request.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-lg font-bold text-[#2E2E2E] list-none relative pr-8">
                    What details are required in the MSME loan closure letter?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1F5EFF] group-open:rotate-180 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 text-lg">
                    You must include your loan account number, borrower/company name, registered contact details, date of loan disbursement, and a clear request for the foreclosure statement.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-lg font-bold text-[#2E2E2E] list-none relative pr-8">
                    How should I submit the foreclosure request?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1F5EFF] group-open:rotate-180 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 text-lg">
                    Submit it physically at the bank branch (ensuring you get a stamped acknowledgment receipt) or email it from your registered email ID to the bank's official customer support ID.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-lg font-bold text-[#2E2E2E] list-none relative pr-8">
                    What if the bank ignores my foreclosure email?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1F5EFF] group-open:rotate-180 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 text-lg">
                    If the bank ignores your request for more than 15 days, you should escalate the matter to the bank's Principal Nodal Officer and subsequently to the RBI Ombudsman.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-lg font-bold text-[#2E2E2E] list-none relative pr-8">
                    Do I need a lawyer to draft the business loan closure letter?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1F5EFF] group-open:rotate-180 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 text-lg">
                    No, a lawyer is not necessary. You can use standard, legally vetted business loan closure letter formats like the one provided on this page.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-lg font-bold text-[#2E2E2E] list-none relative pr-8">
                    Is an NOC required after foreclosing the loan?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1F5EFF] group-open:rotate-180 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 text-lg">
                    Yes, absolutely. Always ensure you receive a No Objection Certificate (NOC) and No Dues Certificate (NDC) from the bank after making the final payment to prove the loan is closed.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-lg font-bold text-[#2E2E2E] list-none relative pr-8">
                    Does foreclosure impact my CIBIL score?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1F5EFF] group-open:rotate-180 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 text-lg">
                    Foreclosing a loan generally has a positive impact on your CIBIL score, as it reduces your outstanding credit utilization and demonstrates your repayment capability.
                  </div>
                </details>
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6">Bank Delaying Your Foreclosure?</h3>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  Don't let banks extract more interest from your business. Get expert legal support to enforce your foreclosure request and secure your NOC immediately.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-all duration-300 text-lg shadow-xl hover:shadow-[#1F5EFF]/20">
                  Get Foreclosure Support Now
                </Link>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The letter format provided is for informational purposes only. It does not constitute formal legal advice. Please consult with a legal professional for specific guidance regarding your business loan agreements.
              </p>
            </div>

          </article>

          {/* Right Sidebar: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] sticky top-24 self-start">
            <div className="space-y-6">
              {/* Card 1: Dark CTA */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-black mb-4">Urgent Closure?</h4>
                  <p className="text-sm text-gray-300 mb-6">Force the bank to issue your foreclosure statement legally.</p>
                  <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-600 transition-colors text-sm">
                    Talk to Experts
                  </Link>
                </div>
              </div>

              {/* Card 2: White Resources */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Legal Resources
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/npa-account-settlement" className="flex items-center text-sm font-bold text-gray-700 hover:text-[#1F5EFF] transition-colors group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      NPA Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/rbi-new-recovery-guidelines-july-2026" className="flex items-center text-sm font-bold text-gray-700 hover:text-[#1F5EFF] transition-colors group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI Recovery Rules
                    </Link>
                  </li>
                  <li>
                    <Link href="/stop-bank-harassment" className="flex items-center text-sm font-bold text-gray-700 hover:text-[#1F5EFF] transition-colors group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Stop Recovery Agents
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
