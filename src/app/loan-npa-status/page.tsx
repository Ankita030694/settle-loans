import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "When Does Your Loan Become an NPA? | The 90-Day Default Timeline",
  description: "Understand the exact timeline of when your personal or business loan turns into a full-blown NPA. Learn about the 90-day default rules and what happens on Day 91.",
  alternates: {
    canonical: "https://www.settleloan.in/loan-npa-status",
  },
};

const tocItems = [
  { id: "introduction", title: "Understanding Loan NPA Status" },
  { id: "what-is-npa", title: "What Exactly is an NPA?" },
  { id: "the-90-day-timeline", title: "The 90-Day Default Timeline" },
  { id: "what-happens-on-day-91", title: "What Happens on Day 91?" },
  { id: "how-to-avoid-npa", title: "How to Avoid NPA Classification" },
  { id: "npa-rules-for-nbfcs", title: "NPA Rules for NBFCs and Banks" },
  { id: "success-stories", title: "Borrower Success Stories" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export default function LoanNPAStatusPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "When Does Your Loan Become an NPA? | The 90-Day Default Timeline",
        "description": "Understand the exact timeline of when your loan turns into a full-blown NPA. Learn about the 90-day default rules and what happens on Day 91.",
        "url": "https://www.settleloan.in/loan-npa-status",
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.settleloan.in/" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://www.settleloan.in/resources/" },
          { "@type": "ListItem", "position": 3, "name": "Loan NPA Status Explained", "item": "https://www.settleloan.in/loan-npa-status" }
        ]
      },
      {
        "@type": "Article",
        "headline": "When Does Your Loan Become an NPA?",
        "author": { "@type": "Organization", "name": "SettleLoan" },
        "publisher": { "@type": "Organization", "name": "SettleLoan", "logo": { "@type": "ImageObject", "url": "https://www.settleloan.in/logo.png" } },
        "datePublished": "2026-07-25",
        "dateModified": "2026-07-25",
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "When does a loan become an NPA?", "acceptedAnswer": { "@type": "Answer", "text": "A loan becomes a Non-Performing Asset (NPA) when the principal or interest payment remains overdue for a continuous period of 90 days." } },
          { "@type": "Question", "name": "What are the rules for a 90 days default?", "acceptedAnswer": { "@type": "Answer", "text": "Under RBI guidelines, if an EMI is unpaid for 90 days, the lender must classify the loan account as an NPA on the 91st day." } },
          { "@type": "Question", "name": "Can an NPA account become standard again?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, an NPA account can be upgraded to a standard asset if the borrower clears all the overdue EMIs, principal, and interest." } },
          { "@type": "Question", "name": "Does an NPA affect my CIBIL score?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, an NPA classification drastically reduces your CIBIL score, often dropping it by 100-150 points or more, making future borrowing very difficult." } },
          { "@type": "Question", "name": "Can banks forcefully recover an NPA loan?", "acceptedAnswer": { "@type": "Answer", "text": "Banks have the right to initiate legal recovery proceedings, such as filing under the SARFAESI Act for secured loans or initiating civil suits for personal loans." } },
          { "@type": "Question", "name": "Is a 90-day default the same for NBFCs and Banks?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the Reserve Bank of India (RBI) has harmonized the NPA classification norms, making the 90-day overdue rule applicable across all banks and NBFCs." } },
          { "@type": "Question", "name": "What is SMA-0, SMA-1, and SMA-2?", "acceptedAnswer": { "@type": "Answer", "text": "Special Mention Accounts (SMA) classify early stress. SMA-0 is overdue up to 30 days, SMA-1 is 31-60 days, and SMA-2 is 61-90 days overdue." } },
          { "@type": "Question", "name": "Can I settle my loan after it becomes an NPA?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, lenders are often open to a One-Time Settlement (OTS) once the account is classified as an NPA, though this involves negotiating the outstanding amount." } },
          { "@type": "Question", "name": "What happens if I ignore NPA notices?", "acceptedAnswer": { "@type": "Answer", "text": "Ignoring notices can lead to aggressive recovery tactics, legal action, lok adalat summons, or asset seizure in case of secured loans." } },
          { "@type": "Question", "name": "Do I have to pay bounce charges when my loan is an NPA?", "acceptedAnswer": { "@type": "Answer", "text": "Bounce charges and penal interest typically keep accumulating. However, during a loan settlement, these charges are usually waived." } }
        ]
      },
      {
        "@type": "Product",
        "name": "Loan Settlement Services",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1045"
        },
        "review": [
          { "@type": "Review", "author": "Rahul S.", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "SettleLoan helped me settle my personal loan right after it hit the 90-day NPA mark. Saved me a lot of stress!" },
          { "@type": "Review", "author": "Anita P.", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "I didn't know what to do on Day 91. The advisory team guided me through the NPA rules perfectly." },
          { "@type": "Review", "author": "Vikas M.", "reviewRating": { "@type": "Rating", "ratingValue": "4" }, "reviewBody": "Very professional. Helped negotiate my NPA account when the bank was threatening legal action." },
          { "@type": "Review", "author": "Sneha K.", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Excellent service. My loan was 4 months overdue and they managed to close it with a great settlement." }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main 
        className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" 
        style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
      >
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Debt Relief Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              When Does Your Loan Become an <span className="text-[#1F5EFF]">NPA</span>?
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              When exactly does your loan turn into a full-blown NPA? Understand the 90-day timeline and what happens on Day 91.
            </p>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg"
            >
              Get Expert Legal Help
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
              <span className="font-bold text-[#2E2E2E]">Loan NPA Status</span>
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

          {/* Middle Column (Article) */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  Understanding Loan NPA Status
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Falling behind on your loan payments can be a stressful experience, especially when you start receiving warnings about your account becoming an NPA (Non-Performing Asset). Many borrowers do not fully understand when their loan crosses the threshold into NPA territory or what the exact timeline looks like.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Whether you have a personal loan from a major NBFC or a business loan from a traditional bank, the rules defined by the Reserve Bank of India (RBI) are strict and standardized. Let's break down the 90-day timeline and understand what changes once your account hits Day 91.
                </p>
              </div>
            </section>

            <section id="what-is-npa" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                What Exactly is an NPA?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                A Non-Performing Asset (NPA) is a banking term used to classify loans or advances that are in default or are in arrears. Simply put, if a borrower fails to make interest or principal payments for a specified period, the lender considers the loan to be non-performing, meaning it is no longer generating income for them.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The Official RBI Definition</h4>
                <p className="text-lg leading-relaxed text-gray-800 mb-4">
                  According to the RBI, a loan becomes an NPA when the interest and/or installment of principal remain overdue for a period of more than 90 days in respect of a term loan.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800">It applies to both Banks and NBFCs.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800">It is a rigid, system-driven classification.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="the-90-day-timeline" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The 90-Day Default Timeline
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Your loan doesn't become an NPA overnight. Lenders are required to classify accounts experiencing stress into Special Mention Accounts (SMA) before officially labeling them as NPAs. Here is the step-by-step breakdown:
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">SMA-0 (Overdue up to 30 days)</h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      The principal or interest payment is overdue, but only for 1 to 30 days. You will start receiving reminder calls and SMS alerts from the lender.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">SMA-1 (Overdue 31 to 60 days)</h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      The payment has been overdue between 31 and 60 days. The frequency of recovery calls will increase significantly. Your CIBIL score will take a noticeable hit.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">SMA-2 (Overdue 61 to 90 days)</h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      The account is now 61 to 90 days overdue. The lender views this as a high-risk account. You may receive legal notices warning you of the impending NPA classification.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="what-happens-on-day-91" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                What Happens on Day 91?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                On the 91st day of continuous default, your loan account is officially tagged as an NPA. This classification triggers a series of severe consequences for you as a borrower.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Massive CIBIL Drop</h4>
                  <p className="text-gray-700">Your credit score will plunge drastically, often dropping below 600, barring you from getting future loans or credit cards.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Aggressive Recovery</h4>
                  <p className="text-gray-700">The case will likely be escalated to specialized external recovery agencies whose primary job is to extract the dues.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Legal Action Initiated</h4>
                  <p className="text-gray-700">Banks may initiate Section 138 (cheque bounce) or Section 25 (ECS bounce) cases in court.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">SARFAESI Act (Secured)</h4>
                  <p className="text-gray-700">If it’s a home or property loan, the bank can issue a 60-day notice to seize your asset without court intervention.</p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Warning: Avoid the Debt Trap</h4>
                <p className="text-red-900 text-lg leading-relaxed">
                  Once an account is classified as an NPA, the entire outstanding amount (not just the EMIs) is often demanded by the bank. Penal interest and bounce charges keep compounding, creating an impossible debt trap if left unaddressed.
                </p>
              </div>
            </section>

            <section id="how-to-avoid-npa" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Avoid NPA Classification
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If you are currently in the SMA-1 or SMA-2 phase, you still have time to prevent your loan from becoming an NPA. 
              </p>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-[#2E2E2E] flex-shrink-0"></div>
                    <p className="text-lg text-gray-700"><strong>Pay the Overdue Amount:</strong> Clearing the overdue EMIs before Day 90 will reset the counter and keep your account standard.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-[#2E2E2E] flex-shrink-0"></div>
                    <p className="text-lg text-gray-700"><strong>Request Restructuring:</strong> Approach your lender to extend your tenure and reduce your EMI burden before the account turns NPA.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-[#2E2E2E] flex-shrink-0"></div>
                    <p className="text-lg text-gray-700"><strong>Consider Loan Settlement:</strong> If you absolutely cannot pay, consult a debt settlement firm to negotiate a One-Time Settlement (OTS) with the bank.</p>
                  </li>
                </ul>
              </div>
            </section>

            <section id="npa-rules-for-nbfcs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                NPA Rules for NBFCs and Banks
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Historically, NBFCs had a more relaxed timeline (120 to 180 days) for classifying NPAs. However, the RBI has recently harmonized these regulations. Now, the <strong>90-day overdue norm applies strictly to all NBFCs</strong>, bringing them exactly on par with traditional banks.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Furthermore, the RBI mandates that upgrading an NPA account back to standard requires the borrower to pay the <em>entire</em> arrears of interest and principal. Just paying a partial amount will not upgrade the account status.
              </p>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Borrower Success Stories
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                If your loan has already become an NPA, don't panic. Many borrowers have successfully settled their NPA accounts and closed their loans legally.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Story 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RS
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Rahul S.</h4>
                      <div className="flex text-yellow-400 gap-1 mt-1">
                        {[1,2,3,4,5].map(i => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"My personal loan hit NPA on Day 91. Recovery agents were ruthless. SettleLoan stepped in and negotiated a 45% waiver on the outstanding balance."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Loan: ₹5,00,000</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Settled: ₹2,75,000</span>
                  </div>
                </div>

                {/* Story 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      AP
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Anita P.</h4>
                      <div className="flex text-yellow-400 gap-1 mt-1">
                        {[1,2,3,4,5].map(i => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"I didn't know the rules. After 4 months of default, the legal notices started. The team helped me arrange a One-Time Settlement (OTS) quickly."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Loan: ₹3,20,000</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Settled: ₹1,50,000</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  { q: "When does a loan become an NPA?", a: "A loan becomes a Non-Performing Asset (NPA) when the principal or interest payment remains overdue for a continuous period of 90 days." },
                  { q: "What are the rules for a 90 days default?", a: "Under RBI guidelines, if an EMI is unpaid for 90 days, the lender must classify the loan account as an NPA on the 91st day, initiating strict recovery measures." },
                  { q: "Can an NPA account become standard again?", a: "Yes, an NPA account can be upgraded to a standard asset if the borrower clears all the overdue EMIs, principal, and accrued interest." },
                  { q: "Does an NPA affect my CIBIL score?", a: "Absolutely. An NPA classification drastically reduces your CIBIL score, often dropping it by 100-150 points or more, making future borrowing nearly impossible." },
                  { q: "Can banks forcefully recover an NPA loan?", a: "Yes, banks have the right to initiate legal recovery proceedings, such as filing under the SARFAESI Act for secured loans or initiating civil suits for personal loans." },
                  { q: "Is a 90-day default the same for NBFCs and Banks?", a: "Yes, the Reserve Bank of India (RBI) has harmonized the NPA classification norms, making the 90-day overdue rule applicable across all banks and NBFCs." },
                  { q: "What is SMA-0, SMA-1, and SMA-2?", a: "Special Mention Accounts (SMA) classify early stress. SMA-0 is overdue up to 30 days, SMA-1 is 31-60 days, and SMA-2 is 61-90 days overdue." },
                  { q: "Can I settle my loan after it becomes an NPA?", a: "Yes, lenders are often open to a One-Time Settlement (OTS) once the account is classified as an NPA, allowing you to pay a reduced lump sum to close the loan." },
                  { q: "What happens if I ignore NPA notices?", a: "Ignoring notices can lead to aggressive recovery tactics, legal action like Section 138 cases, lok adalat summons, or asset seizure in case of secured loans." },
                  { q: "Do I have to pay bounce charges when my loan is an NPA?", a: "Bounce charges and penal interest typically keep accumulating. However, during a formal loan settlement process, these charges are usually waived entirely." }
                ].map((faq, index) => (
                  <details key={index} name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                    <summary className="font-bold text-lg text-[#2E2E2E] list-none flex justify-between items-center">
                      {faq.q}
                      <span className="text-[#1F5EFF] text-2xl group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-relaxed pl-2 border-l-2 border-[#1F5EFF]">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4">Is Your Loan Nearing NPA Status?</h3>
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                  Don't let aggressive recovery agents or legal notices ruin your peace of mind. Settle your debt legally and stop harassment today.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-all duration-300 text-lg shadow-xl"
                >
                  Consult Our Legal Experts Now
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational purposes only and does not constitute formal legal advice. Loan NPA rules and RBI guidelines may be subject to change. Always consult with a qualified legal or financial professional regarding your specific debt situation.
              </p>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-black mb-4">Stop Recovery Harassment</h3>
                  <p className="text-sm text-white/80 mb-6">Our lawyers can issue notices to stop illegal recovery tactics.</p>
                  <Link href="/contact" className="block w-full py-3 bg-[#1F5EFF] text-white rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors">
                    Get Help
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Related Guides
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/stop-emi-bounce-cycle-for-good" className="group flex items-center text-sm text-gray-700 hover:text-[#1F5EFF] transition-colors font-medium">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Stop EMI Bounce Cycle
                    </Link>
                  </li>
                  <li>
                    <Link href="/rbi-rules-for-recovery-agents" className="group flex items-center text-sm text-gray-700 hover:text-[#1F5EFF] transition-colors font-medium">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI Recovery Agent Rules
                    </Link>
                  </li>
                  <li>
                    <Link href="/vehicle-seizure-overdue-loan-documents-repo-agent-rules" className="group flex items-center text-sm text-gray-700 hover:text-[#1F5EFF] transition-colors font-medium">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Vehicle Seizure Laws
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
