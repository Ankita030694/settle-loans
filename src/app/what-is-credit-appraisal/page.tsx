import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "What is Credit Appraisal Process in Banks? Complete Guide",
  description: "Ever wonder how banks secretly grade you before rejecting your loan? Step inside the rigid credit appraisal process and learn how banks approve loans in India.",
  alternates: {
    canonical: "https://settleloans.in/what-is-credit-appraisal",
  },
};

export default function CreditAppraisalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/what-is-credit-appraisal#webpage",
        "url": "https://settleloans.in/what-is-credit-appraisal",
        "name": "What is Credit Appraisal Process in Banks? Complete Guide",
        "description": "Ever wonder how banks secretly grade you before rejecting your loan? Step inside the rigid 'Credit Appraisal' process.",
        "breadcrumb": { "@id": "https://settleloans.in/what-is-credit-appraisal#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/what-is-credit-appraisal#breadcrumb",
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
            "name": "Credit Appraisal",
            "item": "https://settleloans.in/what-is-credit-appraisal"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/what-is-credit-appraisal#article",
        "headline": "What is Credit Appraisal Process in Banks? Complete Guide",
        "description": "Learn exactly how banks evaluate your profile during the credit appraisal process, including the 5 C's of credit and how to improve your approval chances.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Financial Team"
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
        "mainEntityOfPage": { "@id": "https://settleloans.in/what-is-credit-appraisal#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/what-is-credit-appraisal#product",
        "name": "Credit Profile Assessment Service",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert credit profile assessment to help you understand your loan eligibility and fix issues causing loan rejections.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "412",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh M." },
            "datePublished": "2024-01-15",
            "reviewBody": "My business loan was rejected twice due to poor credit appraisal by the bank. The team helped me fix my balance sheet presentation, and my next application was approved smoothly.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram S." },
            "datePublished": "2024-02-22",
            "reviewBody": "I had no idea how banks evaluated my personal loan application. Understanding the 5 C's helped me improve my credit score and secure a better interest rate.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya K." },
            "datePublished": "2024-03-10",
            "reviewBody": "Excellent guidance on how loan underwriting works in India. Their insights helped me organize my financial documents perfectly before applying for a home loan.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit D." },
            "datePublished": "2024-04-05",
            "reviewBody": "Very detailed and eye-opening. I realized my high FOIR (Fixed Obligation to Income Ratio) was the reason for my car loan rejection. Took their advice and it worked out.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
             "@type": "Review",
             "author": { "@type": "Person", "name": "Neha P." },
             "datePublished": "2024-05-18",
             "reviewBody": "SettleLoans gave me the exact breakdown of the bank credit appraisal process. Highly recommend their consultation if you are struggling to get a loan approved.",
             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/what-is-credit-appraisal#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the meaning of credit appraisal?",
            "acceptedAnswer": { "@type": "Answer", "text": "Credit appraisal is the process by which a bank or financial institution evaluates the creditworthiness of a borrower before approving a loan. It involves checking financial history, income, repayment capacity, and collateral." }
          },
          {
            "@type": "Question",
            "name": "What are the 5 C's of credit appraisal?",
            "acceptedAnswer": { "@type": "Answer", "text": "The 5 C's of credit appraisal are Character (credit history), Capacity (ability to repay), Capital (borrower's own investment), Collateral (security offered), and Conditions (purpose of loan and economic conditions)." }
          },
          {
            "@type": "Question",
            "name": "How long does the bank credit appraisal process take?",
            "acceptedAnswer": { "@type": "Answer", "text": "The time varies by loan type. Personal loans can take 24-48 hours, while complex business or home loans may take 1 to 4 weeks depending on the documentation and verification required." }
          },
          {
            "@type": "Question",
            "name": "What is the difference between loan underwriting and credit appraisal?",
            "acceptedAnswer": { "@type": "Answer", "text": "They are often used interchangeably. Credit appraisal focuses on evaluating the borrower's profile, while loan underwriting is the broader process of assessing the risk, deciding the terms, and formally approving or denying the loan." }
          },
          {
            "@type": "Question",
            "name": "Does a low CIBIL score mean guaranteed rejection during appraisal?",
            "acceptedAnswer": { "@type": "Answer", "text": "Not always. While a low CIBIL score is a red flag, banks may still approve loans if you can show strong income stability, offer high-value collateral, or bring in a co-applicant with a strong credit score." }
          },
          {
            "@type": "Question",
            "name": "What documents are checked during the credit appraisal process in India?",
            "acceptedAnswer": { "@type": "Answer", "text": "Banks check KYC documents (PAN, Aadhaar), income proofs (salary slips, ITRs, bank statements), employment history, property documents (if secured), and the CIBIL report." }
          },
          {
            "@type": "Question",
            "name": "What is FOIR in credit appraisal?",
            "acceptedAnswer": { "@type": "Answer", "text": "FOIR stands for Fixed Obligation to Income Ratio. It is a key metric used by banks to determine what portion of your monthly income is already going towards existing loan EMIs. Banks prefer a FOIR below 40-50%." }
          },
          {
            "@type": "Question",
            "name": "Can I challenge a negative credit appraisal decision?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, if your loan is rejected, you can ask the bank for the exact reason. If the rejection was due to an error in your CIBIL report or missing documents, you can rectify it and re-apply." }
          },
          {
            "@type": "Question",
            "name": "How do banks appraise business loans differently than personal loans?",
            "acceptedAnswer": { "@type": "Answer", "text": "For business loans, banks look heavily at balance sheets, cash flow projections, profit and loss statements, industry trends, and the business owner's experience, rather than just monthly salary." }
          },
          {
            "@type": "Question",
            "name": "Does frequent job hopping affect my credit appraisal?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Banks look for stability. Frequent job changes (e.g., multiple changes within a year) can signal financial instability, making lenders hesitant to approve large or long-term loans." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "intro", title: "The Hidden Scoring System" },
    { id: "what-is-credit-appraisal", title: "What Exactly is Credit Appraisal?" },
    { id: "5-cs-of-credit", title: "The 5 C's of Credit" },
    { id: "the-process", title: "The Step-by-Step Process" },
    { id: "common-reasons", title: "Common Reasons for Rejection" },
    { id: "improve-chances", title: "How to Improve Your Chances" },
    { id: "success-stories", title: "Client Success Stories" },
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
              Loan Approval Secrets
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              What is <span className="text-[#1F5EFF]">Credit Appraisal</span>? How Banks Approve Loans
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Ever wonder how banks secretly grade you before rejecting your loan? Step inside the rigid "Credit Appraisal" process and decode loan underwriting in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Check My Loan Eligibility
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
                <li className="font-bold text-[#2E2E2E]">Credit Appraisal</li>
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

            <section id="intro" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Hidden Scoring System
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  You submit your loan application with all the required documents and hope for the best. A few days later, you receive a standard rejection message: <em>"Unfortunately, we cannot proceed with your application at this time."</em> What exactly happened behind closed doors?
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The answer lies in a rigid, systematic procedure known as the <strong>bank credit appraisal process</strong>. This is where banks run a financial "X-ray" on your life, looking for weaknesses, inconsistencies, or past mistakes that make you a risky borrower.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Whether you are applying for a personal loan, home loan, or business loan, understanding loan underwriting in India is your best defense against an unexpected rejection.
                </p>
              </div>
            </section>

            <section id="what-is-credit-appraisal" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                What Exactly is Credit Appraisal?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Simply put, credit appraisal is the process by which a bank or Non-Banking Financial Company (NBFC) determines whether you are capable of—and willing to—repay a loan. It is the core of their risk management strategy.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Risk Assessment</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The bank calculates the likelihood of you defaulting on the loan by analyzing your past financial behavior and current obligations.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Term Definition</h4>
                  <p className="text-gray-700 leading-relaxed">
                    It helps the bank decide not just if they should lend to you, but exactly how much they can lend safely, and at what interest rate.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>The Underlying Truth:</strong> Banks are not in the business of rejecting loans; they make money by lending. However, they are legally and operationally required to protect their depositors' money. Credit appraisal is their filter.
                </p>
              </div>
            </section>

            <section id="5-cs-of-credit" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The 5 C's of Credit: How Banks Evaluate You
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Globally and in India, loan underwriting revolves around a fundamental framework known as the "5 C's of Credit". If you fail in any of these categories, your loan is likely to be rejected.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The Assessment Criteria</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-blue-900 text-lg"><strong>Character:</strong> Your credit history. Do you have a track record of paying bills on time? Your CIBIL score is the primary metric here.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-blue-900 text-lg"><strong>Capacity:</strong> Your ability to repay the loan out of your current income. Banks check your salary slips, ITRs, and calculate your FOIR.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-blue-900 text-lg"><strong>Capital:</strong> How much of your own money are you putting in? E.g., the down payment for a home loan. Higher capital means lower risk for the bank.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-blue-900 text-lg"><strong>Collateral:</strong> Assets you pledge as security (like property or gold) that the bank can seize if you default.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-blue-900 text-lg"><strong>Conditions:</strong> External factors like the purpose of the loan, current economic trends, and industry stability (crucial for business loans).</p>
                  </li>
                </ul>
              </div>
            </section>

            <section id="the-process" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Step-by-Step Credit Appraisal Process
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Once you hit "Submit" on your application, a very specific sequence of events kicks off. Here is how banks approve loans behind the scenes:
              </p>

              <div className="space-y-12 mt-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Application & Document Verification</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The bank collects your KYC details, bank statements, and income proofs. They use automated systems to check for discrepancies, fake documents, or blacklisted addresses.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Credit Bureau Fetch (CIBIL)</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Your PAN card is used to fetch a hard inquiry from credit bureaus (like CIBIL, Experian). The bank looks at your overall score, payment history, recent inquiries, and any "Settled" or "Written Off" flags.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Financial & FOIR Calculation</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The underwriter calculates your Fixed Obligation to Income Ratio (FOIR). If you earn ₹1,000,000 a month and already pay ₹50,000 in EMIs, your FOIR is 50%. Banks rarely approve new loans if FOIR exceeds 50-60%.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Field Investigation (FI)</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      An agent may physically visit your residence and office to verify your living standard and employment status. They check if you actually work where you claim.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">5</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Final Sanction & Disbursement</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If the underwriting team is satisfied, a formal sanction letter is generated outlining the approved amount, interest rate, and tenure. Once signed, the funds are disbursed.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="common-reasons" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Common Reasons for Loan Rejection
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Many borrowers are stunned by loan rejections because they believe a high salary guarantees approval. However, the bank credit appraisal process uncovers deeper issues.
              </p>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Red Flags for Underwriters</h4>
                <ul className="text-red-900 leading-relaxed space-y-3 list-disc pl-5">
                  <li><strong>High FOIR:</strong> You have too many existing loans or credit card EMIs.</li>
                  <li><strong>Poor Repayment History:</strong> Late payments, defaults, or a "Settled" status on past loans severely damages your character assessment.</li>
                  <li><strong>Job Instability:</strong> Working at an unlisted company or changing jobs every 6 months.</li>
                  <li><strong>Credit Hungry Behavior:</strong> Applying for multiple loans/credit cards in a short span (resulting in multiple hard inquiries).</li>
                  <li><strong>Employer Profiling:</strong> Working for a company that has been blacklisted or categorized as high-risk by the bank.</li>
                </ul>
              </div>
            </section>

            <section id="improve-chances" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Improve Your Approval Chances
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                You can actively prepare for the credit appraisal process to ensure your loan application sails through without hurdles.
              </p>
              
              <div className="bg-white p-8 border border-[#DEDEDE] rounded-2xl shadow-sm mb-8">
                <h4 className="text-xl font-bold mb-4 text-[#2E2E2E] underline">Pre-Approval Checklist</h4>
                <ul className="text-sm space-y-3 font-medium list-none text-gray-700">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>1. Check Your CIBIL Report First:</strong> Pull your own credit report months before applying. Dispute any incorrect entries or close small, forgotten debts.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>2. Lower Your FOIR:</strong> Pre-pay or close existing smaller loans (like BNPL accounts or appliance EMIs) to free up your monthly income ratio.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>3. Maintain Bank Account Discipline:</strong> Ensure your salary account does not show cheque bounces or auto-debit (ECS) failures, even for utility bills.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>4. Stable Employment:</strong> Try not to switch jobs immediately before or during a loan application process.</li>
                </ul>
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
                      RM
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Rajesh M.</h4>
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
                    "My business loan was rejected twice due to poor credit appraisal by the bank. The team helped me fix my balance sheet presentation, and my next application was approved smoothly."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Loan Amount: ₹25L</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Status: Approved</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      VS
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Vikram S.</h4>
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
                    "I had no idea how banks evaluated my personal loan application. Understanding the FOIR component helped me close smaller debts and secure a much better interest rate."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Loan Amount: ₹10L</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Status: Approved</span>
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
              <h3 className="text-3xl font-black mb-6 relative z-10">Stop Getting Rejected by Banks</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Is your loan application stuck or recently rejected? Don't apply again blindly. Let our financial experts analyze your credit profile and fix the issues blocking your approval.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Get a Free Profile Assessment
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided regarding the credit appraisal process is for educational purposes only. Banks and financial institutions update their internal underwriting policies frequently, and approval decisions are ultimately at their sole discretion.
              </p>
            </div>

          </article>

          {/* Right Column: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">Facing Loan Rejection?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  Multiple inquiries can damage your CIBIL. Consult an expert before reapplying.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] w-full py-3 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors relative z-10">
                  Consult Now
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Financial Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/how-to-improve-cibil-score" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      How to Improve CIBIL
                    </Link>
                  </li>
                  <li>
                    <Link href="/check-free-cibil-score" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Check Free Credit Score
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement-amount-calculator" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Debt Settlement Calculator
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
