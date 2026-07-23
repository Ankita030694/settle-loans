import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Bank Delaying Loan Closure Confirmation? Get NOC Under RBI Rules",
  description: "Paid your final EMI but the bank is delaying your loan closure confirmation or NOC? Learn how to use RBI rules to force them to issue it and claim compensation.",
  alternates: {
    canonical: "https://settleloans.in/loan-account-closure-confirmation",
  },
};

export default function LoanAccountClosureConfirmationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/loan-account-closure-confirmation#webpage",
        "url": "https://settleloans.in/loan-account-closure-confirmation",
        "name": "Bank Delaying Loan Closure Confirmation? Get NOC Under RBI Rules",
        "description": "A legal guide for borrowers who have paid their final EMI, but the bank is not giving closure confirmation or NOC for loan closure.",
        "breadcrumb": { "@id": "https://settleloans.in/loan-account-closure-confirmation#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/loan-account-closure-confirmation#breadcrumb",
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
            "name": "Loan Closure Confirmation",
            "item": "https://settleloans.in/loan-account-closure-confirmation"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/loan-account-closure-confirmation#article",
        "headline": "Bank Delaying Loan Closure Confirmation? Get NOC Under RBI Rules",
        "description": "Learn the legal steps to force your bank to issue your NOC for loan closure, standard loan closure letter format, and how to deal with bank not giving closure confirmation.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Legal Team"
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
        "mainEntityOfPage": { "@id": "https://settleloans.in/loan-account-closure-confirmation#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/loan-account-closure-confirmation#product",
        "name": "Loan Closure NOC Legal Notice",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert legal services to compel banks to issue the NOC for loan closure and provide the proper loan closure letter format.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "620",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikas S." },
            "datePublished": "2024-02-12",
            "reviewBody": "I paid off my personal loan, but the bank kept delaying the NOC. SettleLoans sent a legal notice, and I received my loan closure confirmation in 5 days.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya R." },
            "datePublished": "2024-03-05",
            "reviewBody": "The bank branch was unresponsive and not giving closure confirmation for 2 months. One legal notice from SettleLoans forced them to issue the NOC and update my CIBIL.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh T." },
            "datePublished": "2024-04-10",
            "reviewBody": "I didn't know the exact loan closure letter format to ask for. The team guided me perfectly, ensuring the bank provided a valid NOC and updated the bureau.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anita K." },
            "datePublished": "2024-05-20",
            "reviewBody": "Bank kept making excuses for not providing the NOC, linking it to another credit card. The legal intervention cleared the mess instantly.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
             "@type": "Review",
             "author": { "@type": "Person", "name": "Suresh P." },
             "datePublished": "2024-06-15",
             "reviewBody": "Excellent service. Got my NOC for loan closure without having to visit the branch ten times.",
             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/loan-account-closure-confirmation#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a loan closure confirmation or NOC?",
            "acceptedAnswer": { "@type": "Answer", "text": "A No Objection Certificate (NOC) or loan closure confirmation is a legal document issued by the bank stating that you have paid all dues and there is no outstanding balance on the loan account." }
          },
          {
            "@type": "Question",
            "name": "Why is the bank not giving closure confirmation?",
            "acceptedAnswer": { "@type": "Answer", "text": "Banks often delay NOCs due to administrative delays, pending final audits, or sometimes deliberately to cross-sell other products or link it to an unrelated unsecured loan." }
          },
          {
            "@type": "Question",
            "name": "How long does the bank have to issue the NOC for loan closure?",
            "acceptedAnswer": { "@type": "Answer", "text": "According to RBI guidelines, banks must provide the loan closure letter format (NOC) and return any associated original documents within 30 days of the full settlement or repayment." }
          },
          {
            "@type": "Question",
            "name": "What is the standard loan closure letter format?",
            "acceptedAnswer": { "@type": "Answer", "text": "A valid loan closure letter format must include the borrower's name, loan account number, date of closure, a clear statement that the loan is fully paid, and an authorized bank signature or stamp." }
          },
          {
            "@type": "Question",
            "name": "Is there a penalty if the bank is not giving closure confirmation on time?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, if the bank fails to release original property documents and the associated closure confirmation within 30 days, they are liable to pay a penalty of ₹5,000 for each day of delay under RBI rules." }
          },
          {
            "@type": "Question",
            "name": "Can I get a loan closure confirmation online?",
            "acceptedAnswer": { "@type": "Answer", "text": "Most modern banks allow you to download the digital NOC or loan closure confirmation directly from their net banking portal or mobile app once the loan status changes to 'Closed'." }
          },
          {
            "@type": "Question",
            "name": "What happens if I don't collect my NOC after paying the final EMI?",
            "acceptedAnswer": { "@type": "Answer", "text": "Without the NOC, you have no legal proof that the loan is closed. The bank could later claim there are pending fees or interest, which can severely damage your credit score." }
          },
          {
            "@type": "Question",
            "name": "Does the bank update CIBIL automatically after loan closure?",
            "acceptedAnswer": { "@type": "Answer", "text": "While banks are mandated to update credit bureaus within 30 days, administrative errors happen. Having the NOC is crucial to manually raise a dispute with CIBIL if the bank fails to update your status." }
          },
          {
            "@type": "Question",
            "name": "What to do if the bank refuses to give the NOC due to other pending loans?",
            "acceptedAnswer": { "@type": "Answer", "text": "Unless the loans were formally cross-collateralized, a bank cannot legally withhold the NOC for a closed loan to force payment on a separate unsecured loan like a credit card." }
          },
          {
            "@type": "Question",
            "name": "Can I force the bank to send the loan closure letter to my address?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can formally request the bank to mail the NOC to your registered address, although many borrowers prefer to collect it in person to ensure there are no postal delays." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "the-delay-tactic", title: "The Delay Tactic" },
    { id: "rbi-guidelines", title: "RBI Guidelines for NOC" },
    { id: "loan-closure-letter-format", title: "Loan Closure Letter Format" },
    { id: "the-penalty", title: "Claiming the RBI Penalty" },
    { id: "actionable-steps", title: "Steps to Force Closure" },
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
              Consumer Rights Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Bank Delaying <span className="text-[#1F5EFF]">Loan Closure Confirmation?</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Paid your final EMI but the bank is delaying your closure confirmation? Use this RBI rule to force them to issue your NOC and claim compensation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Send Legal Notice for NOC
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
                <li className="font-bold text-[#2E2E2E]">Loan Closure Confirmation</li>
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

            <section id="the-delay-tactic" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Delay Tactic: Bank Not Giving Closure Confirmation
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  You have successfully paid your final EMI or arranged the funds for a negotiated One Time Settlement (OTS). You expect the bank to immediately hand over your <strong>NOC for loan closure</strong>. Instead, you are met with a wall of excuses.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Thousands of borrowers report the exact same scenario: the bank is deliberately delaying the <strong>loan closure confirmation</strong>. Branch managers might claim the letter is pending central hub approval, that there's a system error, or they might try to hold the NOC hostage to force you to clear a separate, unrelated credit card due.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Without a formal closure letter, your loan account remains "Active" on your CIBIL report. This blocks you from getting new credit and puts you at risk of the bank suddenly conjuring up mysterious "pending charges" months later. Fortunately, the Reserve Bank of India has strict guidelines to prevent this harassment.
                </p>
              </div>
            </section>

            <section id="rbi-guidelines" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                RBI Guidelines for NOC and Loan Closure
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The RBI has made it unequivocally clear that banks cannot endlessly delay issuing the NOC or returning property documents after a loan is closed or settled.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The 30-Day Mandate</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  According to RBI directives, Regulated Entities must finalize the closure process promptly:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">Banks must issue the <strong>loan closure confirmation</strong> and return all original property documents within <strong>30 days</strong> of full repayment or settlement.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">They must also update the borrower's status with all major Credit Information Companies (like CIBIL) within 30 days.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">The borrower has the right to collect the NOC and documents from any branch of their choosing.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="loan-closure-letter-format" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                What is the Standard Loan Closure Letter Format?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Not all pieces of paper handed to you by the bank are legally binding. When demanding your NOC, you must ensure it follows the correct <strong>loan closure letter format</strong> to protect yourself from future liabilities.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Essential Elements</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A valid NOC must explicitly contain the words "No Objection Certificate" or "No Dues Certificate". It should list your full name, the exact Loan Account Number, and the date of final closure.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Zero Balance Confirmation</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The format must include a clear, unambiguous sentence stating: "There is no outstanding balance against the aforementioned loan account, and the account stands closed."
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>Watch Out:</strong> If the bank gives you a simple "Statement of Account" showing a zero balance, do not accept it as the final NOC. A statement is a snapshot in time; an NOC is a legal waiver of future claims.
                </p>
              </div>
            </section>

            <section id="the-penalty" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Claiming the ₹5,000/Day Penalty
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The RBI knows that merely telling banks to issue the NOC is not enough. They introduced a severe financial penalty to force compliance, specifically for secured loans.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">The Penalty Rule</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If the bank delays returning your original property documents (and the associated NOC) beyond the 30-day window, they must pay you <strong>₹5,000 for every single day of delay</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Unsecured Loans</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      While the ₹5,000 penalty specifically targets property documents, delaying the NOC for an unsecured personal loan still constitutes a "deficiency of service" under the Consumer Protection Act, allowing you to sue for damages.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="actionable-steps" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Steps to Force the Bank to Issue the NOC
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If your bank is <strong>not giving closure confirmation</strong>, stop arguing verbally. It is time to create a legal paper trail.
              </p>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Warning: Do Not Wait</h4>
                <p className="text-red-900 leading-relaxed">
                  Delaying action can ruin your credit score. If the bank fails to mark the account as closed, automated systems may generate phantom "late fees," plunging your account into default status even after you've paid the final EMI.
                </p>
              </div>

              <div className="bg-white p-8 border border-[#DEDEDE] rounded-2xl shadow-sm mb-8">
                <h4 className="text-xl font-bold mb-4 text-[#2E2E2E] underline">The Escalation Matrix</h4>
                <ul className="text-sm space-y-3 font-medium list-none text-gray-700">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>1. Send a Legal Notice:</strong> Have an advocate draft a legal notice citing RBI guidelines, demanding the immediate issuance of the NOC in the proper loan closure letter format.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>2. Demand Penalty:</strong> If property documents are involved, explicitly demand the calculation and payment of the ₹5,000/day penalty.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>3. RBI Ombudsman:</strong> File a formal complaint on the RBI CMS portal for deficiency of service, attaching your payment proofs and the legal notice.</li>
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
                    "I paid off my personal loan, but the bank kept delaying the NOC. SettleLoans sent a legal notice, and I received my loan closure confirmation in 5 days."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Delay: 45 Days</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: NOC Issued Immediately</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      PR
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Priya R.</h4>
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
                    "The bank branch was unresponsive and not giving closure confirmation for 2 months. One legal notice from SettleLoans forced them to issue the NOC and update my CIBIL."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Issue: CIBIL Not Updated</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Bureau Updated & NOC Given</span>
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
              <h3 className="text-3xl font-black mb-6 relative z-10">Force the Bank to Issue Your NOC</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Paid your final EMI but the bank is delaying your closure confirmation? Use legal pressure to force them to issue the correct loan closure letter format and update your CIBIL immediately.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Send Legal Notice to Bank
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The legal information provided is for educational purposes and should not be construed as formal legal advice. Always consult with a practicing advocate regarding specific facts of your case.
              </p>
            </div>

          </article>

          {/* Right Column: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">Bank Delaying NOC?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  Don't let them ruin your CIBIL score. A legal notice forces compliance within days.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] w-full py-3 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors relative z-10">
                  Consult a Lawyer
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Legal Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/bank-delaying-original-property-documents-after-home-loan-settlement-rbi-rules" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Property Documents Delay
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Improve CIBIL Score
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal-notice-for-loan-recovery" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Legal Notice Guide
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
