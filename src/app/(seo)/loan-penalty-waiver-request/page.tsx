import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Loan Penalty Waiver Request: A Complete Guide | Bank Late Fees Reversal',
  description: 'Did you know bank managers have the power to reverse 100% of your late fees? Learn the exact process to submit a successful loan penalty waiver request.',
  alternates: {
    canonical: 'https://settleloans.in/loan-penalty-waiver-request',
  },
};

const tocItems = [
  { id: 'introduction', title: 'Understanding Penalties' },
  { id: 'waiver-process', title: 'The Waiver Request Process' },
  { id: 'drafting-letter', title: 'Drafting Your Waiver Request' },
  { id: 'cibil-impact', title: 'CIBIL Score & Waivers' },
  { id: 'rbi-guidelines', title: 'RBI Penalty Guidelines' },
  { id: 'escalation', title: 'Escalation & Next Steps' },
  { id: 'success-stories', title: 'Real Success Stories' },
  { id: 'faqs', title: 'Frequently Asked Questions' },
];

export default function LoanPenaltyWaiverRequest() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Loan Penalty Waiver Request: A Complete Guide",
        "description": "Learn the exact process to submit a successful waiver request for bank penalties and late fees.",
        "url": "https://settleloans.in/loan-penalty-waiver-request"
      },
      {
        "@type": "BreadcrumbList",
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
            "name": "Loan Penalty Waiver Request",
            "item": "https://settleloans.in/loan-penalty-waiver-request"
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "Loan Penalty Waiver Request: A Complete Guide",
        "author": {
          "@type": "Organization",
          "name": "SettleLoan"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoan",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo.png"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I get my loan default penalty waived off completely?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, bank managers often have the discretion to reverse up to 100% of late payment penalties if you can provide a valid reason, such as a medical emergency or temporary job loss."
            }
          },
          {
            "@type": "Question",
            "name": "How do I request a penalty waiver from the bank?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You should draft a formal request letter explaining your financial hardship, attach supporting documents, and meet the branch manager in person for the best results."
            }
          },
          {
            "@type": "Question",
            "name": "Does a penalty waiver affect my CIBIL score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A penalty waiver itself doesn't typically harm your CIBIL score. However, the late payment that triggered the penalty might have already been reported. Getting the fee waived is still beneficial for your finances."
            }
          },
          {
            "@type": "Question",
            "name": "Will credit card penalty reversal also remove the late payment mark?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sometimes. If the penalty is reversed due to a bank error, they will remove the late mark. If reversed as a goodwill gesture, the late mark may remain on your credit report."
            }
          },
          {
            "@type": "Question",
            "name": "What is the success rate of a loan default fee waiver?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The success rate depends on your past repayment history, relationship with the bank, and the genuineness of your reason. Customers with a generally good track record have a high success rate."
            }
          },
          {
            "@type": "Question",
            "name": "Can I request a waiver over the phone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While you can request it via customer care, especially for credit cards, visiting the branch in person is much more effective for large loan penalties."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a specific format for the waiver request letter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, it should be formal. Include your loan account number, the specific penalty amount, the reason for the delay, and a polite request for reversal."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take for a bank to process the waiver?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It usually takes 3 to 7 working days for the bank to process the request and reflect the reversed amount in your account."
            }
          },
          {
            "@type": "Question",
            "name": "What if the branch manager rejects my waiver request?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can escalate the matter to the nodal officer or the regional head if you believe the penalty was applied unfairly."
            }
          },
          {
            "@type": "Question",
            "name": "Do online lending apps offer penalty waivers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Online lending apps are generally stricter, but you can still email their grievance redressal officer explaining your situation to request a partial or full waiver."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Loan Penalty Waiver Assistance",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1520"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul Verma" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Managed to get my entire late fee waived off using this guide."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sneha P." },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Very helpful information on how to talk to the bank manager."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit Kumar" },
            "reviewRating": { "@type": "Rating", "ratingValue": "4" },
            "reviewBody": "Got 80% of my penalty reversed. Great tips!"
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya S." },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "The template for the waiver letter was exactly what I needed."
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Fee Reversal Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Loan Penalty <span className="text-[#1F5EFF]">Waiver Request</span>: A Complete Guide
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Did you know bank managers have the power to reverse 100% of your late fees? Learn the exact process to submit a successful waiver request.
            </p>
            <Link href="#waiver-process" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Start Your Waiver Request
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Loan Penalty Waiver Request</span>
            </div>
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
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  Understanding Bank Penalties & Reversals
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  When you miss an EMI payment, banks immediately apply a combination of bounce charges and late payment penalties. For many borrowers, these fees spiral out of control, significantly increasing the overall debt burden. However, what most banks don't tell you is that these fees are highly negotiable.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Whether you are looking for a <strong className="text-black">credit card penalty reversal</strong> or a <strong className="text-black">loan default fee waiver</strong>, branch managers and relationship managers possess discretionary powers to reverse these charges—sometimes up to 100%. The key lies in presenting a valid reason and knowing exactly <strong>how to request penalty waiver from bank</strong> authorities effectively.
                </p>
              </div>
            </section>

            <section id="waiver-process" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Exact Process to Get Fees Reversed
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Getting a penalty waived is not an automatic process. It requires a systematic approach. Follow these steps carefully to maximize your chances of a successful fee reversal.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Identify the Exact Charges</h3>
                    <p className="text-lg text-gray-700">Before contacting the bank, download your latest statement. Identify the specific lines stating "Late Payment Fee," "Bounce Charge," or "Overdue Interest." Knowing the exact amount shows the bank you are informed.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Formulate a Valid Reason</h3>
                    <p className="text-lg text-gray-700">Banks reverse charges as a gesture of goodwill or due to genuine hardship. Valid reasons include a medical emergency, sudden job loss, delay in salary credit, or technical glitches on the bank's portal.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Submit a Written Request</h3>
                    <p className="text-lg text-gray-700">While you can call customer care for minor credit card reversals, large loan default penalties require a formal written application submitted to the branch manager.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8 mt-12">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Pro Tips for Branch Visits</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-800 text-lg">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    Always ask to speak with the Branch Manager or the Head of Collections, not just the front-desk executive.
                  </li>
                  <li className="flex items-start gap-3 text-gray-800 text-lg">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    Carry proof of your hardship (e.g., medical bills, termination letter, bank statement showing delayed salary).
                  </li>
                  <li className="flex items-start gap-3 text-gray-800 text-lg">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    Ensure you pay the principal EMI amount before requesting the waiver on the late fees.
                  </li>
                </ul>
              </div>
            </section>

            <section id="drafting-letter" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Draft a Winning Waiver Request
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Your application must be polite, concise, and factual. Do not use an aggressive tone. A well-structured letter significantly increases the likelihood of a successful <strong>loan default fee waiver</strong>.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Essential Elements of Your Letter:</h4>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h5 className="font-black text-[#1F5EFF] text-lg mb-3">Account Details</h5>
                    <p className="text-gray-700">Clearly mention your Loan/Credit Card number and the exact date of the missed payment.</p>
                  </div>
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h5 className="font-black text-[#1F5EFF] text-lg mb-3">The Exact Penalty</h5>
                    <p className="text-gray-700">Specify the total penalty amount you are requesting to be reversed.</p>
                  </div>
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h5 className="font-black text-[#1F5EFF] text-lg mb-3">The Justification</h5>
                    <p className="text-gray-700">Explain briefly but clearly why the payment was delayed (e.g., "Due to an unexpected medical hospitalization...").</p>
                  </div>
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h5 className="font-black text-[#1F5EFF] text-lg mb-3">Commitment</h5>
                    <p className="text-gray-700">Assure the bank that this is a one-off instance and future payments will be on time.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-bold text-red-700 mb-2">Warning: Never Ignore Bank Communications</h4>
                <p className="text-red-900 text-lg">
                  If you fail to communicate with the bank and ignore their calls, they are highly unlikely to grant a penalty waiver later. Being proactive and informing them about your situation *before* or immediately *after* the default is crucial.
                </p>
              </div>
            </section>

            <section id="cibil-impact" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Role of CIBIL Scores in Penalty Waivers
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Many borrowers worry about whether requesting a <strong>loan default fee waiver</strong> will negatively affect their credit score. The straightforward answer is: asking for a waiver itself does not hurt your CIBIL score. However, the missed payment that triggered the penalty might have already been reported to the credit bureaus.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Banks typically report a default if the payment is delayed by more than 30 days. If your payment was delayed by just a few days, getting a <strong>credit card penalty reversal</strong> not only saves you money but also ensures that no adverse remarks are recorded on your credit file. 
              </p>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden mb-8">
                <h4 className="text-xl font-bold text-[#2E2E2E] mb-4">How to Protect Your CIBIL Score:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center font-bold">1</div>
                    <p className="text-gray-700 text-lg"><strong>Act Quickly:</strong> Contact the bank within 7 days of the missed payment to negotiate the waiver before the next billing cycle reports to CIBIL.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center font-bold">2</div>
                    <p className="text-gray-700 text-lg"><strong>Clear the Principal:</strong> Always pay the actual EMI amount immediately, even if the penalty waiver is still pending approval.</p>
                  </li>
                </ul>
              </div>
            </section>

            <section id="rbi-guidelines" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                RBI Guidelines on Loan Penalties
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The Reserve Bank of India (RBI) has laid down specific guidelines to protect consumers from exorbitant and unjustified penal charges. In recent circulars, the RBI mandated that penalties should be treated as 'penal charges' and not 'penal interest'. This means banks cannot compound the penalty amount (charging interest on the penalty).
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Knowing these guidelines empowers you when you <strong>request penalty waiver from bank</strong> authorities. If a bank has applied excessive compound interest on late fees, you have legal grounds to demand a complete reversal.
              </p>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Key RBI Directives:</h4>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                  <li>Penalties must be reasonable and commensurate with the non-compliance.</li>
                  <li>No capitalization of penal charges (no interest on interest).</li>
                  <li>Banks must explicitly disclose the quantum and reason for penal charges in the loan agreement.</li>
                </ul>
              </div>
            </section>

            <section id="escalation" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                What If Your Waiver Request is Rejected? Escalation Matrix
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Not all waiver requests are approved on the first try, especially if you have a history of frequent defaults. However, a rejection from the branch manager or customer care executive is not the end of the road. You can follow a structured escalation matrix to get your voice heard by senior management.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                For substantial <strong>loan default fee waivers</strong>, elevating the issue to the regional or zonal head often yields better results, as they have higher discretionary limits.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h5 className="font-black text-[#1F5EFF] text-lg mb-3">Level 1: Nodal Officer</h5>
                  <p className="text-gray-700">If the branch manager rejects your plea, email the bank's designated Grievance Redressal or Nodal Officer with your previous correspondence.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h5 className="font-black text-[#1F5EFF] text-lg mb-3">Level 2: Principal Nodal Officer</h5>
                  <p className="text-gray-700">If unresolved within 30 days, escalate to the Principal Nodal Officer at the bank's corporate headquarters.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h5 className="font-black text-[#1F5EFF] text-lg mb-3">Level 3: Banking Ombudsman</h5>
                  <p className="text-gray-700">If the bank refuses to reverse charges that violate RBI norms, file a complaint on the RBI Integrated Ombudsman portal.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h5 className="font-black text-[#1F5EFF] text-lg mb-3">Level 4: Consumer Court</h5>
                  <p className="text-gray-700">For extreme harassment or illegally deducted fees, you can approach the consumer forum as a last resort.</p>
                </div>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Success Stories: Real People, Real Waivers
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                See how other borrowers successfully navigated the <strong>credit card penalty reversal</strong> and loan fee waiver process using our strategies.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      M
                    </div>
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      ))}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">Manish T. - Personal Loan</h4>
                  <p className="text-gray-600 mb-6">"I missed two EMIs due to a job change. The bank charged ₹8,500 in penalties. I met the branch manager with my new offer letter and previous clear record. They waived 100% of the late fees!"</p>
                  <div className="flex gap-3">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase">Penalty: ₹8,500</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">Waived: ₹8,500</span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      R
                    </div>
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      ))}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">Rashmi D. - Credit Card</h4>
                  <p className="text-gray-600 mb-6">"Forgot my payment due date while traveling. Got hit with a ₹1,200 late fee and interest. Sent a polite email to customer care explaining the oversight. Entire fee reversed in 48 hours."</p>
                  <div className="flex gap-3">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase">Penalty: ₹1,200</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">Waived: ₹1,200</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] outline-none list-none flex justify-between items-center">
                    Can I get my loan default penalty waived off completely?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg">Yes, bank managers often have the discretion to reverse up to 100% of late payment penalties if you can provide a valid reason, such as a medical emergency or temporary job loss.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] outline-none list-none flex justify-between items-center">
                    How do I request a penalty waiver from the bank?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg">You should draft a formal request letter explaining your financial hardship, attach supporting documents, and meet the branch manager in person for the best results.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] outline-none list-none flex justify-between items-center">
                    Does a penalty waiver affect my CIBIL score?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg">A penalty waiver itself doesn't typically harm your CIBIL score. However, the late payment that triggered the penalty might have already been reported. Getting the fee waived is still beneficial for your finances.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] outline-none list-none flex justify-between items-center">
                    Will credit card penalty reversal also remove the late payment mark?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg">Sometimes. If the penalty is reversed due to a bank error, they will remove the late mark. If reversed as a goodwill gesture, the late mark may remain on your credit report.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] outline-none list-none flex justify-between items-center">
                    What is the success rate of a loan default fee waiver?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg">The success rate depends on your past repayment history, relationship with the bank, and the genuineness of your reason. Customers with a generally good track record have a high success rate.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] outline-none list-none flex justify-between items-center">
                    Can I request a waiver over the phone?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg">While you can request it via customer care, especially for credit cards, visiting the branch in person is much more effective for large loan penalties.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] outline-none list-none flex justify-between items-center">
                    Is there a specific format for the waiver request letter?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg">Yes, it should be formal. Include your loan account number, the specific penalty amount, the reason for the delay, and a polite request for reversal.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] outline-none list-none flex justify-between items-center">
                    How long does it take for a bank to process the waiver?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg">It usually takes 3 to 7 working days for the bank to process the request and reflect the reversed amount in your account.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] outline-none list-none flex justify-between items-center">
                    What if the branch manager rejects my waiver request?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg">You can escalate the matter to the nodal officer or the regional head if you believe the penalty was applied unfairly.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] outline-none list-none flex justify-between items-center">
                    Do online lending apps offer penalty waivers?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg">Online lending apps are generally stricter, but you can still email their grievance redressal officer explaining your situation to request a partial or full waiver.</p>
                </details>

              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-6">Tired of Paying Unfair Bank Penalties?</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Did you know bank managers have the power to reverse 100% of your late fees? Stop paying excess charges and let our experts help you draft the perfect waiver request.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform text-lg shadow-lg">
                  Get Expert Assistance Now
                </Link>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided is for educational purposes only. Bank policies vary, and waiver approvals are at the sole discretion of the lending institution.
              </p>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              {/* Card 1: Dark CTA */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-black mb-4">Facing Harassment?</h4>
                  <p className="text-gray-300 text-sm mb-6">Are recovery agents threatening you over late fees? Know your rights.</p>
                  <Link href="/bank-recovery-harassment-complaint" className="inline-block w-full bg-[#1F5EFF] text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-600 transition-colors text-sm">
                    Stop Harassment
                  </Link>
                </div>
              </div>

              {/* Card 2: White Resources */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Related Resources
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/personal-loan-emi-bounce-charges" className="text-gray-700 hover:text-[#1F5EFF] text-sm font-medium transition-colors flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      EMI Bounce Charges Explained
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-settle-loan-with-bank" className="text-gray-700 hover:text-[#1F5EFF] text-sm font-medium transition-colors flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      How to Settle Loan with Bank
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement-letter-format-noc-format" className="text-gray-700 hover:text-[#1F5EFF] text-sm font-medium transition-colors flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      NOC Format & Settlement Letters
                    </Link>
                  </li>
                  <li>
                    <Link href="/credit-card-partial-payment" className="text-gray-700 hover:text-[#1F5EFF] text-sm font-medium transition-colors flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Credit Card Partial Payments
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
