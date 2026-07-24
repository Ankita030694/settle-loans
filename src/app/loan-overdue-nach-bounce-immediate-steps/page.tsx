import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Loan Overdue NACH Bounce: Immediate Steps to Take",
  description: "Did your auto-debit NACH mandate just bounce? Take these 3 immediate steps to stop the bank from charging you heavy penalty fees like NACH bounce charges.",
  alternates: { canonical: "https://www.settleloan.in/loan-overdue-nach-bounce-immediate-steps" }
};

const pageItems = [
  { id: 'intro', title: 'What is a NACH Bounce?' },
  { id: 'immediate-steps', title: '3 Immediate Steps to Take' },
  { id: 'bounce-charges', title: 'Understanding NACH Bounce Charges' },
  { id: 'ecs-return', title: 'ECS Return on Personal Loans' },
  { id: 'stop-penalty', title: 'How to Stop NACH Bounce Penalty' },
  { id: 'success-stories', title: 'Success Stories' },
  { id: 'faq', title: 'Frequently Asked Questions' }
];

export default function NachBouncePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Loan Overdue NACH Bounce: Immediate Steps to Take",
      "description": "Did your auto-debit NACH mandate just bounce? Take these 3 immediate steps to stop the bank from charging you heavy penalty fees.",
      "url": "https://www.settleloan.in/loan-overdue-nach-bounce-immediate-steps"
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
          "name": "Loan Overdue NACH Bounce",
          "item": "https://www.settleloan.in/loan-overdue-nach-bounce-immediate-steps"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Loan Overdue NACH Bounce: Immediate Steps to Take",
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
      "datePublished": new Date().toISOString()
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a NACH bounce?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A NACH bounce happens when an auto-debit mandate fails due to insufficient funds in your bank account, resulting in penalty charges."
          }
        },
        {
          "@type": "Question",
          "name": "How much are NACH bounce charges?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NACH bounce charges typically range from ₹250 to ₹750 per bounce, depending on your bank and the lender's policies."
          }
        },
        {
          "@type": "Question",
          "name": "Can I stop a NACH mandate if I don't have funds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can request your bank to pause or cancel the NACH mandate to prevent recurring bounce charges, although the lender may still charge a late fee."
          }
        },
        {
          "@type": "Question",
          "name": "Does a NACH bounce affect my CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if the NACH bounce leads to a delayed EMI payment beyond the grace period, the lender will report it to credit bureaus, hurting your CIBIL score."
          }
        },
        {
          "@type": "Question",
          "name": "What happens in an ECS return on a personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An ECS return means your EMI wasn't deducted. Your lender will charge a return fee, your bank will charge a bounce fee, and your credit score may be impacted."
          }
        },
        {
          "@type": "Question",
          "name": "Is it legal for lenders to present NACH multiple times?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lenders often present the NACH mandate multiple times in a month, leading to multiple bounce charges. It's crucial to pause the mandate to avoid this."
          }
        },
        {
          "@type": "Question",
          "name": "How do I communicate with the bank after a bounce?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Send a formal email to your bank and lender explaining your financial hardship and requesting them to halt the auto-presentation of the mandate."
          }
        },
        {
          "@type": "Question",
          "name": "What is Section 25 of the Payment and Settlement Systems Act?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 25 deals with the dishonour of electronic funds transfer, including NACH bounces, and can theoretically be used for legal action, much like a cheque bounce."
          }
        },
        {
          "@type": "Question",
          "name": "Can I negotiate bounce charges with the lender?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if you prove genuine financial hardship, many lenders are willing to waive off accumulated bounce charges during loan settlement or restructuring."
          }
        },
        {
          "@type": "Question",
          "name": "Should I settle the loan if I can't pay the EMI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you are facing permanent financial hardship, opting for a legal loan settlement might be a better option than accumulating infinite bounce and late payment charges."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Anti-Harassment & Loan Settlement Services",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1840"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Rahul Verma" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "My account was hitting minus balance due to daily NACH bounces. SettleLoan helped me stop the mandate and settle my ₹6L loan."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Priya Sharma" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "I was unaware of how to stop ECS return penalties. Their legal team drafted the perfect notice to my bank."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Amit Desai" },
          "reviewRating": { "@type": "Rating", "ratingValue": "4" },
          "reviewBody": "Stopped harassment and endless bounce fees. Highly recommend their services for personal loan defaults."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Neha K." },
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "Saved me from paying over ₹20,000 just in bounce charges from multiple banks."
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
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Debt Relief Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Loan Overdue <span className="text-[#1F5EFF]">NACH Bounce</span>: Immediate Steps
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Did your auto-debit NACH mandate just bounce? Take these 3 immediate steps to stop the bank from charging you heavy penalty fees.
            </p>
            <Link href="#immediate-steps" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Read the Immediate Steps
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <div className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/blog" className="hover:text-[#1F5EFF] transition-colors">Resources</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Loan Overdue NACH Bounce</span>
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
          
          {/* Left Sidebar: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={pageItems} />
            </div>
          </aside>

          {/* Main Article Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="intro" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">What is a NACH Bounce?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A NACH (National Automated Clearing House) bounce occurs when your bank fails to execute an automated EMI deduction due to insufficient balance in your account. While it may seem like a simple missed payment, the immediate repercussions involve a cascade of financial penalties from both your bank and the lending institution.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  When you default on an unsecured personal loan, lenders often rely on auto-debit mandates to recover their dues. However, continuous presentation of these mandates on an empty account results in recurring <strong className="text-black font-bold">NACH bounce charges</strong>, plunging borrowers deeper into a debt trap.
                </p>
              </div>
            </section>

            <section id="immediate-steps" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">3 Immediate Steps to Take</h2>
              <p className="text-lg leading-relaxed mb-6">
                If your mandate has just bounced, every single day counts. Lenders may re-present the mandate within 48 hours, resulting in double penalties. Here are the immediate steps you must take to protect your finances.
              </p>

              <div className="space-y-12 my-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Revoke or Stop the NACH Mandate</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Your first line of defense is to log into your internet banking portal or visit your home branch to formally revoke or pause the NACH mandate. Under RBI guidelines, a customer has the right to withdraw a mandate to stop auto-debits, even though the lender might still consider the EMI unpaid.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Communicate in Writing</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Send a formal email to your lender stating your financial hardship. Clearly explicitly mention that you do not have sufficient funds and request them <strong className="font-bold text-black">not to re-present the NACH mandate</strong>. This creates a paper trail proving that any subsequent bounce charges were levied despite your prior intimation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Transfer Remaining Balances</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If you have minimal funds in your account meant for survival or basic expenses, transfer them to a different account. Banks often automatically debit these funds to recover pending bounce fees, leaving you with absolutely zero liquidity.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="bounce-charges" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Understanding NACH Bounce Charges</h2>
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The Dual-Penalty System</h4>
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  A common misconception is that you only pay a single fee for a bounced EMI. In reality, a NACH bounce triggers a dual-penalty system:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0 mr-3"></div>
                    <span className="text-lg text-gray-800"><strong>Bank Bounce Fee:</strong> Your holding bank charges you (usually ₹250 to ₹750) for failing to maintain a sufficient balance.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0 mr-3"></div>
                    <span className="text-lg text-gray-800"><strong>Lender Late Fee:</strong> Your lender charges an EMI bounce penalty, plus subsequent late payment fees calculated daily.</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Re-Presentation Cycle</h4>
                  <p className="text-base text-gray-700">Lenders may present the mandate 3-4 times a month. Each failure results in a fresh set of bounce charges from your bank, quickly putting your account in a negative balance.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Negative Balances</h4>
                  <p className="text-base text-gray-700">If your account balance goes into the negative due to penalty fees, any future deposit (like your salary) will immediately be swallowed to clear the negative balance first.</p>
                </div>
              </div>
            </section>

            <section id="ecs-return" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">ECS Return on Personal Loans</h2>
              <p className="text-lg leading-relaxed mb-6">
                An <strong className="font-bold">ECS return personal loan</strong> scenario is virtually identical to a NACH bounce. When the Electronic Clearing Service fails, the legal implications escalate. If you fail to repay an unsecured personal loan, lenders use the ECS mandate failure as grounds to initiate legal notices.
              </p>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Section 25 of the PSS Act</h4>
                <p className="text-lg text-red-900 leading-relaxed">
                  Similar to a cheque bounce under Section 138 of the Negotiable Instruments Act, the dishonour of an electronic funds transfer can attract legal action under Section 25 of the Payment and Settlement Systems Act. Lenders use this to send threatening legal notices demanding immediate payment.
                </p>
              </div>
            </section>

            <section id="stop-penalty" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How to Stop NACH Bounce Penalty</h2>
              <p className="text-lg leading-relaxed mb-6">
                To definitively <strong className="font-bold">stop NACH bounce penalty</strong> charges, you need a proactive strategy. If you genuinely cannot pay the EMI, avoiding the issue will only compound your debt.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-black text-[#2E2E2E] mb-4">Effective Negotiation Strategies</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-gray-400 flex-shrink-0 mr-3"></div>
                    <span className="text-lg text-gray-700">Submit a formal mandate cancellation form to your bank. Keep the acknowledgment receipt safely.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-gray-400 flex-shrink-0 mr-3"></div>
                    <span className="text-lg text-gray-700">Write to the lender's grievance redressal officer citing RBI guidelines against repeated presentation of mandates when funds are known to be absent.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-gray-400 flex-shrink-0 mr-3"></div>
                    <span className="text-lg text-gray-700">If your debt is unmanageable, opt for a formal Loan Settlement process to close the account legally at a fraction of the outstanding amount.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Success Stories</h2>
              <p className="text-lg leading-relaxed mb-8">
                See how borrowers successfully stopped endless NACH bounces and legally settled their personal loans through expert intervention.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                
                {/* Story 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                      R
                    </div>
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">Rahul V.</h4>
                  <p className="text-gray-600 mb-6 text-sm">Facing ₹15,000 in negative balance due to daily NACH re-presentations.</p>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-sm text-gray-500">Loan Amount</span>
                      <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 text-xs font-bold">₹8,00,000</span>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="text-sm text-gray-500 font-medium">Settled For</span>
                      <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-600 text-xs font-bold">₹2,80,000 (35%)</span>
                    </div>
                  </div>
                </div>

                {/* Story 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                      N
                    </div>
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">Neha K.</h4>
                  <p className="text-gray-600 mb-6 text-sm">Threatened with Section 25 PSS Act notices for continuous ECS mandate returns.</p>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-sm text-gray-500">Loan Amount</span>
                      <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 text-xs font-bold">₹5,50,000</span>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="text-sm text-gray-500 font-medium">Settled For</span>
                      <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-600 text-xs font-bold">₹1,92,500 (35%)</span>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            <section id="faq" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What is a NACH bounce?", a: "A NACH bounce happens when an auto-debit mandate fails due to insufficient funds in your bank account, resulting in penalty charges." },
                  { q: "How much are NACH bounce charges?", a: "NACH bounce charges typically range from ₹250 to ₹750 per bounce, depending on your bank and the lender's policies." },
                  { q: "Can I stop a NACH mandate if I don't have funds?", a: "Yes, you can request your bank to pause or cancel the NACH mandate to prevent recurring bounce charges, although the lender may still charge a late fee." },
                  { q: "Does a NACH bounce affect my CIBIL score?", a: "Yes, if the NACH bounce leads to a delayed EMI payment beyond the grace period, the lender will report it to credit bureaus, hurting your CIBIL score." },
                  { q: "What happens in an ECS return on a personal loan?", a: "An ECS return means your EMI wasn't deducted. Your lender will charge a return fee, your bank will charge a bounce fee, and your credit score may be impacted." },
                  { q: "Is it legal for lenders to present NACH multiple times?", a: "Lenders often present the NACH mandate multiple times in a month, leading to multiple bounce charges. It's crucial to pause the mandate to avoid this." },
                  { q: "How do I communicate with the bank after a bounce?", a: "Send a formal email to your bank and lender explaining your financial hardship and requesting them to halt the auto-presentation of the mandate." },
                  { q: "What is Section 25 of the Payment and Settlement Systems Act?", a: "Section 25 deals with the dishonour of electronic funds transfer, including NACH bounces, and can theoretically be used for legal action, much like a cheque bounce." },
                  { q: "Can I negotiate bounce charges with the lender?", a: "Yes, if you prove genuine financial hardship, many lenders are willing to waive off accumulated bounce charges during loan settlement or restructuring." },
                  { q: "Should I settle the loan if I can't pay the EMI?", a: "If you are facing permanent financial hardship, opting for a legal loan settlement might be a better option than accumulating infinite bounce and late payment charges." }
                ].map((faq, index) => (
                  <details key={index} name="faq-accordion" className="group bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <summary className="text-lg font-bold text-[#2E2E2E] flex justify-between items-center list-none outline-none">
                      <span>{faq.q}</span>
                      <span className="transition-transform group-open:rotate-180 text-[#1F5EFF]">▼</span>
                    </summary>
                    <div className="pt-4 text-gray-600 text-lg leading-relaxed">
                      <p>{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  Stop the Endless Cycle of NACH Bounce Penalties Today
                </h3>
                <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
                  Did your auto-debit NACH mandate just bounce? Take these 3 immediate steps to stop the bank from charging you heavy penalty fees.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-5 px-12 rounded-xl hover:scale-105 transition-all duration-300 text-xl shadow-[0_0_40px_rgba(31,94,255,0.3)]">
                  Consult a Legal Expert Now
                </Link>
                <p className="mt-6 text-gray-400 font-medium">Free Confidential Consultation • Stop Harassment Immediately</p>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page regarding NACH bounces, ECS returns, and Section 25 of the PSS Act is for educational purposes only and does not constitute formal legal or financial advice. Please consult with a qualified professional for guidance specific to your personal loan default situation.
              </p>
            </div>

          </article>

          {/* Right Sidebar: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-4 leading-tight">Stop Penalty Fees Instantly</h4>
                  <p className="text-gray-300 mb-6 text-sm">Don't let your account go into negative balance. We help you legally stop ECS mandates.</p>
                  <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 rounded-lg hover:bg-white hover:text-[#1F5EFF] transition-colors text-sm">
                    Get Legal Help
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Related Guides
                </h4>
                <ul className="space-y-4">
                  {[
                    { title: "Stop Recovery Agents Harassment", href: "/stop-recovery-agents" },
                    { title: "Personal Loan Settlement Guide", href: "/personal-loan-settlement" },
                    { title: "RBI Guidelines on Loan Default", href: "/rbi-guidelines-loan-default" },
                    { title: "How Section 138 Works", href: "/section-138-cheque-bounce" }
                  ].map((link, i) => (
                    <li key={i}>
                      <Link href={link.href} className="group flex items-center text-sm font-bold text-gray-700 hover:text-[#1F5EFF] transition-colors">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                        {link.title}
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
  );
}
