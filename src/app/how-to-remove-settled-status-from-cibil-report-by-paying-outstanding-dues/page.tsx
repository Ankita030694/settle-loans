import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "How to Remove 'Settled' Status from CIBIL Report",
  description: "Learn how to convert 'Settled' to 'Closed' in your CIBIL report. Understand the technical process of paying outstanding dues, getting an NOC, and restoring your credit score.",
  alternates: {
    canonical: "https://settleloans.in/how-to-remove-settled-status-from-cibil-report-by-paying-outstanding-dues",
  },
};

export default function RemoveSettledStatusPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/how-to-remove-settled-status-from-cibil-report-by-paying-outstanding-dues#webpage",
        "url": "https://settleloans.in/how-to-remove-settled-status-from-cibil-report-by-paying-outstanding-dues",
        "name": "How to Remove 'Settled' Status from CIBIL Report",
        "description": "A technical financial guide for borrowers who previously settled a loan and are now facing loan rejections due to the 'Settled' remark on their CIBIL report. Explains the exact process of clearing dues and getting a Closed status.",
        "breadcrumb": { "@id": "https://settleloans.in/how-to-remove-settled-status-from-cibil-report-by-paying-outstanding-dues#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/how-to-remove-settled-status-from-cibil-report-by-paying-outstanding-dues#breadcrumb",
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
            "name": "Remove Settled Status from CIBIL",
            "item": "https://settleloans.in/how-to-remove-settled-status-from-cibil-report-by-paying-outstanding-dues"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/how-to-remove-settled-status-from-cibil-report-by-paying-outstanding-dues#article",
        "headline": "How to Remove 'Settled' Status from CIBIL Report by Paying Outstanding Dues",
        "description": "Learn the exact process of approaching the bank, calculating the waived-off amount + interest, paying it back, and getting the bank to report a 'Closed' status to CIBIL bureaus.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Financial Experts"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-05-15",
        "dateModified": "2024-05-15",
        "mainEntityOfPage": { "@id": "https://settleloans.in/how-to-remove-settled-status-from-cibil-report-by-paying-outstanding-dues#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/how-to-remove-settled-status-from-cibil-report-by-paying-outstanding-dues#product",
        "name": "CIBIL Dispute & Resolution Services",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert financial and legal help to negotiate with your old bank, clear outstanding dues, and convert a 'Settled' CIBIL status to 'Closed'.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "845",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit K." },
            "datePublished": "2024-01-15",
            "reviewBody": "My home loan was rejected because of a settled credit card from 4 years ago. The experts calculated the remaining balance and helped me get an NOC and a Closed status. I finally got my home loan approved!",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya S." },
            "datePublished": "2024-02-10",
            "reviewBody": "I didn't know how to approach my old bank to pay the waived-off amount. They guided me through the entire negotiation and ensured the bank updated my CIBIL to remove the settled remark.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul M." },
            "datePublished": "2024-03-22",
            "reviewBody": "The bank was asking for unreasonable interest on my old settled loan. The team here negotiated a fair amount to clear the dues completely.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Neha V." },
            "datePublished": "2024-04-05",
            "reviewBody": "Highly professional service. They know exactly how bank nodal officers work and how to convert settled to closed in CIBIL.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
             "@type": "Review",
             "author": { "@type": "Person", "name": "Siddharth B." },
             "datePublished": "2024-05-02",
             "reviewBody": "Paying the remaining balance to clear CIBIL seemed impossible because the bank's branch was closed. They tracked down the right department and got my NOC.",
             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/how-to-remove-settled-status-from-cibil-report-by-paying-outstanding-dues#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does a 'Settled' status stay on my CIBIL report?",
            "acceptedAnswer": { "@type": "Answer", "text": "A 'Settled' status remains on your CIBIL report for 7 years from the date of settlement. During this time, it significantly hurts your credit score and chances of getting new loans." }
          },
          {
            "@type": "Question",
            "name": "Can I change 'Settled' to 'Closed' in my CIBIL report?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can convert a 'Settled' status to 'Closed' by approaching the lender, paying the previously waived-off amount along with any applicable interest, and obtaining a No Objection Certificate (NOC)." }
          },
          {
            "@type": "Question",
            "name": "Why do banks reject loans if I have a 'Settled' status?",
            "acceptedAnswer": { "@type": "Answer", "text": "Banks view a 'Settled' status as a sign of past financial instability. It indicates that you did not repay your loan in full as originally agreed, making you a high-risk borrower." }
          },
          {
            "@type": "Question",
            "name": "How much do I have to pay to remove the 'Settled' status?",
            "acceptedAnswer": { "@type": "Answer", "text": "You must pay the exact amount that was waived off during the settlement, plus any interest or penalties the bank may charge from the settlement date to the present date. This is highly negotiable." }
          },
          {
            "@type": "Question",
            "name": "What is the difference between 'Settled' and 'Closed' in CIBIL?",
            "acceptedAnswer": { "@type": "Answer", "text": "A 'Closed' status means you paid all dues in full as per the original agreement. A 'Settled' status means you reached a compromise with the bank and paid less than the total outstanding amount." }
          },
          {
            "@type": "Question",
            "name": "How long does it take for CIBIL to update after paying the dues?",
            "acceptedAnswer": { "@type": "Answer", "text": "Once you pay the dues and the bank issues an NOC, it typically takes 30 to 45 days for the bank to report the updated 'Closed' status to CIBIL and for it to reflect on your report." }
          },
          {
            "@type": "Question",
            "name": "Can I get an NOC after paying the loan settlement balance?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, absolutely. Once you pay the remaining balance, the bank is legally obligated to issue a No Dues Certificate (NDC) or No Objection Certificate (NOC) stating that there is zero outstanding balance." }
          },
          {
            "@type": "Question",
            "name": "Will paying the outstanding dues instantly increase my CIBIL score?",
            "acceptedAnswer": { "@type": "Answer", "text": "While it won't cause an overnight spike, replacing 'Settled' with 'Closed' removes the negative remark. Over the next few months, as you maintain good credit habits, your score will steadily improve." }
          },
          {
            "@type": "Question",
            "name": "What if the bank refuses to accept the remaining payment?",
            "acceptedAnswer": { "@type": "Answer", "text": "If a branch official refuses, you must escalate the matter to the bank's Nodal Officer or Grievance Redressal Officer. In rare cases, involving the RBI Ombudsman or a legal expert is necessary." }
          },
          {
            "@type": "Question",
            "name": "Do I need to hire a professional to convert my settled status?",
            "acceptedAnswer": { "@type": "Answer", "text": "While you can do it yourself, a financial expert or lawyer can help you locate old accounts, negotiate the interest on the waived-off amount, and ensure the bank properly updates CIBIL without delays." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "the-settled-stigma", title: "The Stigma of a 'Settled' Status" },
    { id: "settled-vs-closed", title: "Settled vs. Closed in CIBIL" },
    { id: "step-1-approach-bank", title: "Step 1: Approaching the Bank" },
    { id: "step-2-calculating-dues", title: "Step 2: Calculating Waived Amount" },
    { id: "step-3-negotiation", title: "Step 3: Negotiating Interest" },
    { id: "step-4-getting-noc", title: "Step 4: Obtaining the NOC" },
    { id: "cibil-update-process", title: "Ensuring CIBIL is Updated" },
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
              Credit Score Repair
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              How to Remove 'Settled' Status from CIBIL Report by <span className="text-[#1F5EFF]">Paying Outstanding Dues</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              A technical financial guide for borrowers who previously settled a loan and are now facing loan rejections. Learn how to clear dues and get a 'Closed' status.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Consult a Credit Expert
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
                <li className="font-bold text-[#2E2E2E]">Remove Settled Status from CIBIL</li>
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

            <section id="the-settled-stigma" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Stigma of a 'Settled' Status
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  When you settle a loan or credit card debt with a bank, you receive a temporary sense of relief. However, this relief comes at a massive long-term cost. The bank reports the account to credit bureaus (like CIBIL, Experian) with a <strong>'Settled'</strong> remark. This single word acts as a red flag for future lenders.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  For the next 7 years, whenever you apply for a home loan, car loan, or even a basic credit card, the automated underwriting systems of banks will likely reject your application outright. The logic is simple: a 'Settled' status proves that in the past, you did not honor your financial commitment in full and caused a loss to the lender.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The only way to completely clear this negative remark and restore your financial credibility is to legally <strong>convert settled to closed in CIBIL</strong> by paying the remaining balance.
                </p>
              </div>
            </section>

            <section id="settled-vs-closed" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Settled vs. Closed in CIBIL: The Critical Difference
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                To understand why you need to remove the settled status, you must understand how banks view the difference between these two account statuses.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Status: Settled (Negative)</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Indicates that you reached a compromise with the bank and paid an amount lower than the total outstanding dues (principal + interest + penalties). The bank wrote off the remaining balance as a loss. This severely damages your CIBIL score.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Status: Closed (Positive)</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Indicates that you have successfully paid 100% of your outstanding dues as per the loan agreement. There is zero balance remaining. This is the standard, healthy status that proves your creditworthiness.
                  </p>
                </div>
              </div>
            </section>

            <section id="step-1-approach-bank" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Step 1: Approaching the Correct Bank Department
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The biggest hurdle borrowers face when trying to <strong>pay remaining balance to clear CIBIL</strong> is finding the right person to talk to. If you walk into a regular bank branch and say you want to pay an old settled loan, the tellers will likely not find your account on their active screens.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Navigating the Bank's Hierarchy</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  Once an account is settled, it is moved to a dormant or archive ledger. Here is who you need to contact:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>The Recovery / Collections Department:</strong> They maintain records of written-off and settled accounts.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>The Nodal Officer:</strong> If branch managers are unhelpful, formally email the bank's Nodal Officer citing your old loan account number and your intent to repay the waived amount.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Provide Details:</strong> Always keep your original Settlement Letter and the final payment receipt handy to help them trace your account.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="step-2-calculating-dues" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Step 2: Calculating the Waived-Off Amount + Interest
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Banks will not simply ask you to pay the difference between your total outstanding and your settlement amount. They will apply retroactive interest on that unpaid balance from the date of settlement to the present day. This calculation can be complex and intimidating.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">The Base Waived Amount</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If your total outstanding was ₹5,00,000 and you settled for ₹3,00,000, the base waived-off amount (also known as the written-off amount) is ₹2,00,000.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">The Retroactive Interest</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The bank will argue that this ₹2,00,000 was technically still owed to them. If 4 years have passed, they will calculate compound interest or penal interest on this ₹2,00,000 for 48 months. This can drastically inflate the final figure they demand.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="step-3-negotiation" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Step 3: The Negotiation Phase
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                This is where most borrowers fail without professional help. When the bank presents an inflated interest bill, you must negotiate. 
              </p>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>Insider Insight:</strong> Banks have already written off your account as a loss. Any money you pay now to <strong>remove settled status CIBIL report</strong> goes straight to their profit margin (as recovery from a written-off asset). Therefore, the bank is usually highly motivated to negotiate the retroactive interest component. Often, you can convince them to waive off 50% to 100% of the newly added interest if you offer to pay the original waived principal upfront.
                </p>
              </div>
            </section>

            <section id="step-4-getting-noc" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Step 4: Making the Payment and Getting the NOC
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Once an amount is agreed upon, it is crucial to follow the correct legal steps to ensure you actually get the 'Closed' status.
              </p>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Warning: Do Not Pay Blindly</h4>
                <p className="text-red-900 leading-relaxed">
                  Never transfer the money just based on a phone conversation. Demand a written letter or official email from the bank stating that upon payment of ₹[Agreed Amount], the account will be completely closed, and the CIBIL status will be updated from 'Settled' to 'Closed'. 
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                After the payment is cleared, the bank is legally obligated to issue a <strong>No Dues Certificate (NDC)</strong> or <strong>No Objection Certificate (NOC) after paying loan settlement balance</strong>. This document is your ultimate proof that the debt no longer exists. Ensure the NOC clearly states that the account is "Closed" with zero outstanding balance.
              </p>
            </section>

            <section id="cibil-update-process" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Ensuring the Bank Updates CIBIL
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Obtaining the NOC is not the final step. The bank must push this data to the credit bureaus.
              </p>
              <ul className="text-lg space-y-4 text-[var(--color-text-body)] mb-6 list-disc list-inside">
                <li>Banks typically update CIBIL data in batches every 30 to 45 days.</li>
                <li>Wait 45 days after receiving your NOC and then pull a fresh CIBIL report.</li>
                <li>Verify that the account status has changed from 'Settled' to 'Closed' and the outstanding balance is ₹0.</li>
                <li>If the bank fails to update the status, you can initiate a dispute directly on the CIBIL website using your new NOC as evidence, or file a complaint with the RBI Banking Ombudsman for deficiency in service.</li>
              </ul>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Client Success Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      AK
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Amit K.</h4>
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
                    "My home loan was rejected because of a settled credit card from 4 years ago. The experts calculated the remaining balance and helped me get an NOC and a Closed status. I finally got my home loan approved!"
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">CIBIL Before: Settled</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">CIBIL After: Closed</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      PS
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Priya S.</h4>
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
                    "I didn't know how to approach my old bank to pay the waived-off amount. They guided me through the entire negotiation and ensured the bank updated my CIBIL to remove the settled remark."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Score Before: 620</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Score After: 745</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {(jsonLd["@graph"][4] as any)?.mainEntity?.map((faq: any, idx: number) => (
                  <div key={idx} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-[#2E2E2E] text-lg mb-2">{faq.name}</h4>
                    <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <h3 className="text-3xl font-black mb-6 relative z-10">Clear Your Settled Status Today</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Is the 'Settled' tag on your CIBIL report ruining your chances for a home loan? Our financial experts can negotiate with your old bank to clear the dues and remove the negative status.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Get Expert Help Now
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The financial information provided is for educational purposes and should not be construed as formal financial advice. Always consult with a certified financial advisor regarding your credit score and loan settlements.
              </p>
            </div>

          </article>

          {/* Right Column: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">Urgent Home Loan Rejection?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  Don't let a past settlement ruin your dream home. Clear your settled status now.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] w-full py-3 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors relative z-10">
                  Consult an Expert
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Financial Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/how-to-read-cibil-report-for-loans" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      How to Read Your CIBIL Report
                    </Link>
                  </li>
                  <li>
                    <Link href="/impact-of-loan-settlement-on-credit-score" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Impact of Settlement on Credit
                    </Link>
                  </li>
                  <li>
                    <Link href="/difference-between-settled-and-written-off-cibil" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Settled vs Written-Off
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
