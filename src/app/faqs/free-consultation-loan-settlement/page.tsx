import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Free Loan Settlement Consultation | Expert Debt Relief Advice",
  description: "Book a free consultation for loan settlement to understand your rights and options. Speak to our legal and financial experts to stop harassment and plan your debt freedom journey.",
  alternates: {
    canonical: "https://settleloans.in/free-consultation-loan-settlement",
  },
};

export default function FreeConsultationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/faqs/free-consultation-loan-settlement#webpage",
        "url": "https://settleloans.in/faqs/free-consultation-loan-settlement",
        "name": "Free Loan Settlement Consultation | Expert Debt Relief Advice",
        "description": "Book a free consultation for loan settlement to understand your rights and options. Speak to our legal and financial experts to stop harassment and plan your debt freedom journey.",
        "breadcrumb": { "@id": "https://settleloans.in/faqs/free-consultation-loan-settlement#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/faqs/free-consultation-loan-settlement#breadcrumb",
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
            "name": "FAQs",
            "item": "https://settleloans.in/faqs"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Free Consultation",
            "item": "https://settleloans.in/faqs/free-consultation-loan-settlement"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/faqs/free-consultation-loan-settlement#service",
        "name": "Free Loan Settlement Consultation",
        "description": "Expert consultation service to help borrowers understand loan settlement options and manage debt.",
        "provider": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "serviceType": "Financial Consultancy",
        "areaServed": "India",
        "isSimilarTo": "https://settleloans.in/faqs/eligibility-checker-for-loan-settlement"
      }
    ]
  };

  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen font-sans selection:bg-[var(--color-primary)] selection:text-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="w-full bg-[var(--color-section-light)] pt-40 pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-semibold mb-6 tracking-wide uppercase">
            No Fees • No Obligation • 100% Confidential
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[var(--color-text-hero)] mb-6 leading-[1.1] tracking-tight">
            Free Consultation for <br className="hidden md:block"/> Loan Settlement
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-body)]/80 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Drowning in debt? Stop guessing and start solving. Our specialized legal & financial experts are ready to analyze your case and provide a roadmap to becoming debt-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-primary)] text-white font-semibold py-4 px-10 rounded-full hover:bg-[var(--color-primary-hover)] transition-all duration-300 text-lg shadow-[0_4px_14px_0_rgba(8,73,75,0.39)] hover:shadow-[0_6px_20px_rgba(8,73,75,0.23)] hover:-translate-y-0.5">
              Book Appointment
            </Link>
             <Link href="#why-consult" className="inline-flex items-center justify-center bg-white text-[var(--color-text-body)] font-semibold py-4 px-10 rounded-full border border-[var(--color-border)] hover:bg-gray-50 transition-all duration-300 text-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="w-full bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-[var(--color-text-muted)]">
              <li>
                <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
              </li>
              <li>
                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </li>
              <li>
                <Link href="/services" className="hover:text-[var(--color-primary)] transition-colors">Services</Link>
              </li>
              <li>
                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </li>
              <li className="font-semibold text-[var(--color-text-body)]" aria-current="page">
                Free Consultation
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
        
        {/* Left Column: Table of Contents (Sticky) */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <TableOfContents 
            items={[
               { id: "why-consult", title: "Why You Need an Expert" },
               { id: "what-we-cover", title: "What We Cover" },
               { id: "diy-vs-expert", title: "DIY vs Expert Help" },
               { id: "who-is-it-for", title: "Who Should Book?" },
               { id: "who-is-it-not-for", title: "Who Is It NOT For?" },
               { id: "preparation", title: "How to Prepare" },
               { id: "questions-to-ask", title: "Questions to Ask" },
               { id: "red-flags", title: "Warning Signs" },
               { id: "confidentiality", title: "Privacy & Confidentiality" },
               { id: "process", title: "Consultation Process" },
               { id: "success-stories", title: "Success Stories" },
               { id: "faqs", title: "Common Questions" }
            ]}
          />
        </aside>

        {/* Middle Column: Main Content */}
        <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
          
          {/* Section 1: Introduction */}
          <section id="why-consult" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-8 leading-tight">
              Why Expert Advice Matters in Loan Settlement
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
               <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                <strong>Knowledge is Power.</strong> Banks have entire legal and recovery teams working to maximize their collections. As a borrower, you are often unaware of your rights, RBI guidelines, and negotiation leverage. A fair fight requires equal knowledge.
              </p>
              <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                A simple mistake in communication - like accepting a "fake" settlement letter or admitting you have funds when you don't - can ruin your chances of a favorable settlement. Our free consultation bridges this knowledge gap, ensuring you make informed decisions that protect your future.
              </p>
               <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10">
                Are you worried about legal notices? Do you fear the knock on your door? We provide clarity where there is confusion. We strip away the fear tactics used by agents and give you the legal facts.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100 relative z-10">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Our Promise</p>
                  <blockquote className="text-xl font-medium text-[var(--color-primary)] italic">
                      "We provide honest, actionable advice. If settlement isn't right for you, we will tell you upfront."
                  </blockquote>
              </div>
            </div>
          </section>

          {/* Section 2: What We Cover */}
          <section id="what-we-cover" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
              What Happens in a Consultation?
            </h2>
            <p className="mb-6">
              Our consultation is not a sales pitch. It is a diagnostic session for your financial health. Here is what we analyze during the call:
            </p>
             <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">1</div>
                <h3 className="text-xl font-bold text-[var(--color-text-hero)] mb-3">Debt Profile Analysis</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We categorize your loans into Secured vs Unsecured, check interest rates, and identify which lenders are most aggressive vs which are open to settlement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">2</div>
                <h3 className="text-xl font-bold text-[var(--color-text-hero)] mb-3">Harassment Assessment</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Are agents visiting your home? Threatening calls? We assess the severity of harassment and advise on immediate legal steps to stop illegal recovery tactics.
                </p>
              </div>
               <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">3</div>
                <h3 className="text-xl font-bold text-[var(--color-text-hero)] mb-3">Eligibility Check</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We check if your "Hardship" (Job loss, medical issue) is strong enough to convince the bank's credit committee for a good waiver.
                </p>
              </div>
               <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">4</div>
                <h3 className="text-xl font-bold text-[var(--color-text-hero)] mb-3">Savings Strategy</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We help you calculate a realistic budget. How much can you save monthly? How long will it take to accumulate the settlement fund?
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-teal-100 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">5</div>
                <h3 className="text-xl font-bold text-[var(--color-text-hero)] mb-3">Legal & Risk Review</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We review any legal notices you have received (138 NI Act, Arbitration) and tell you which ones are genuine and which are fake intimidation tactics.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-rose-100 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors">6</div>
                <h3 className="text-xl font-bold text-[var(--color-text-hero)] mb-3">Credit Rebuilding Road</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Analysis is not just about today. We explain how settlement impacts your score and sketch a brief plan on how you can rebuild it over the next 24 months.
                </p>
              </div>
            </div>
          </section>

          {/* New Section: DIY vs Expert */}
          <section id="diy-vs-expert" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
              Can I Settle My Loans Myself? (DIY vs Expert)
            </h2>
            <p className="mb-6">
              Yes, you can settle your loans yourself. However, it is important to understand the difference between handling it alone versus having a professional team.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="py-4 px-6 text-left font-semibold text-gray-700">Feature</th>
                    <th className="py-4 px-6 text-left font-semibold text-gray-700">Do It Yourself (DIY)</th>
                    <th className="py-4 px-6 text-left font-semibold text-gray-700">With SettleLoans</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Harassment Calls</td>
                    <td className="py-4 px-6 text-gray-600">You handle 100% of calls providing immense stress.</td>
                    <td className="py-4 px-6 text-gray-600">Calls are routed to our legal team. You focus on life/work.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Negotiation Power</td>
                    <td className="py-4 px-6 text-gray-600">Individual power. Banks may not take you seriously.</td>
                    <td className="py-4 px-6 text-gray-600">Group power. We handle thousands of cases and know the managers.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Savings (Waiver)</td>
                    <td className="py-4 px-6 text-gray-600">Average 20-30% waiver.</td>
                    <td className="py-4 px-6 text-gray-600">Average 40-50% waiver (up to 70% in rare cases).</td>
                  </tr>
                   <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Legal Protection</td>
                    <td className="py-4 px-6 text-gray-600">None. You must hire a lawyer separately if sued.</td>
                    <td className="py-4 px-6 text-gray-600">Included. We reply to legal notices on your behalf.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Scam Protection</td>
                    <td className="py-4 px-6 text-gray-600">High risk of "fake settlement letter" frauds.</td>
                    <td className="py-4 px-6 text-gray-600">100% Secure. We verify every document before you pay.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Who Should Book */}
          <section id="who-is-it-for" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
              Who Should Book This Consultation?
            </h2>
             <p className="text-lg mb-6">
                Loan settlement counselling is not for everyone. It is specifically designed for borrowers who are in genuine distress.
             </p>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
              <h4 className="font-bold text-gray-900 mb-2">Ideal Candidates</h4>
              <ul className="grid md:grid-cols-2 gap-4 mt-4">
                  <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">✓</span>
                      <span className="text-sm text-gray-700">Missed 3+ EMIs on Personal Loans</span>
                  </li>
                  <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">✓</span>
                      <span className="text-sm text-gray-700">Facing severe salary cuts or job loss</span>
                  </li>
                  <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">✓</span>
                      <span className="text-sm text-gray-700">Credit card debt spiraling out of control</span>
                  </li>
                  <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">✓</span>
                      <span className="text-sm text-gray-700">Receiving legal notices causing anxiety</span>
                  </li>
                   <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">✓</span>
                      <span className="text-sm text-gray-700">Borrowing from A to pay B (Debt Trap)</span>
                  </li>
                  <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">✓</span>
                      <span className="text-sm text-gray-700">Mental health affecting daily life due to calls</span>
                  </li>
              </ul>
            </div>
          </section>

          {/* New Section: Who is it NOT for */}
          <section id="who-is-it-not-for" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
              Who Should NOT Book?
            </h2>
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <p className="mb-4 text-red-900">
                To respect our experts' time and help those in real need, please <strong>do not</strong> book if:
              </p>
              <ul className="space-y-3">
                 <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-red-200 text-red-800 flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">✕</span>
                      <span className="text-sm text-red-900/80">You can comfortably pay your EMIs but just want a discount. (Lenders will reject this).</span>
                  </li>
                  <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-red-200 text-red-800 flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">✕</span>
                      <span className="text-sm text-red-900/80">You want to settle a Secured Loan (Home or Car Loan). (These cannot be settled easily without losing the asset).</span>
                  </li>
                  <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-red-200 text-red-800 flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">✕</span>
                      <span className="text-sm text-red-900/80">You are looking for a new loan immediately. (Settlement stops you from getting new loans).</span>
                  </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Preparation */}
          <section id="preparation" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
               How to Prepare for the Call
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-blue-800 mb-4 flex items-center">
                       <span className="w-6 h-6 rounded-full bg-blue-200 mr-2 flex items-center justify-center text-xs">ℹ</span>
                       What to Have Ready
                    </h3>
                    <ul className="space-y-3 text-blue-900/80 font-medium text-sm">
                        <li className="flex items-start"><span className="mr-2">•</span> <strong>List of Creditors:</strong> Names of all banks and apps you owe money to.</li>
                        <li className="flex items-start"><span className="mr-2">•</span> <strong>Outstanding Amounts:</strong> Approximate total due for each loan.</li>
                        <li className="flex items-start"><span className="mr-2">•</span> <strong>Current Status:</strong> How many days/months overdue? (Standard, SMA, or NPA).</li>
                        <li className="flex items-start"><span className="mr-2">•</span> <strong>Notices:</strong> Any legal notice or arbitration letter received recently.</li>
                    </ul>
                </div>
                 <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                    <h3 className="font-bold text-amber-800 mb-4 flex items-center">
                       <span className="w-6 h-6 rounded-full bg-amber-200 mr-2 flex items-center justify-center text-xs">?</span>
                       What We Will Ask
                    </h3>
                    <ul className="space-y-3 text-amber-900/80 font-medium text-sm">
                        <li className="flex items-start"><span className="mr-2">•</span> "What caused your financial difficulty? (Job loss, medical, etc)"</li>
                        <li className="flex items-start"><span className="mr-2">•</span> "How much disposable income do you have monthly for savings?"</li>
                        <li className="flex items-start"><span className="mr-2">•</span> "Are you receiving threads from recovery agents?"</li>
                        <li className="flex items-start"><span className="mr-2">•</span> "Do you have any assets to liquidate to avoid settlement?"</li>
                    </ul>
                </div>
            </div>
          </section>
          
          {/* New Section: Questions to Ask */}
          <section id="questions-to-ask" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
               Hard Questions You Must Ask
            </h2>
            <p className="mb-6">
              Whether you choose SettleLoans or any other agency, you must protect yourself. Always ask these questions during your consultation:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="border border-gray-200 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">1. "Are you a law firm or a call center?"</h4>
                  <p className="text-sm text-gray-600">Many agencies are just call centers with no legal backing. Ensure there are real lawyers involved to handle notices.</p>
               </div>
               <div className="border border-gray-200 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">2. "How do you charge fees?"</h4>
                  <p className="text-sm text-gray-600">Avoid companies charging huge upfront fees before doing any work. Look for success-fee based or reasonable monthly subscription models.</p>
               </div>
               <div className="border border-gray-200 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">3. "Will you stop the calls?"</h4>
                  <p className="text-sm text-gray-600">No one can legally "block" calls, but a good agency will route calls to themselves and file grievances against harassment.</p>
               </div>
               <div className="border border-gray-200 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">4. "Is settlement guaranteed?"</h4>
                  <p className="text-sm text-gray-600">If anyone says "Yes, 100%", run. Settlement depends on the bank. Honest agencies give probabilities, not false guarantees.</p>
               </div>
            </div>
          </section>
          
           {/* New Section: Warning Signs */}
           <section id="red-flags" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
               Warning Signs: Spotting Scams
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="font-bold text-red-900 mb-4">Be careful if an agent:</p>
               <ul className="space-y-3 text-red-900/80">
                  <li className="flex items-start"><span className="mr-2">⚠</span> Tells you to change your phone number (This makes you a 'wilful defaulter').</li>
                  <li className="flex items-start"><span className="mr-2">⚠</span> Promises to "delete" the loan from your CIBIL report (Impossible).</li>
                  <li className="flex items-start"><span className="mr-2">⚠</span> Asks you to transfer the settlement amount to the agency's personal account instead of the bank.</li>
                  <li className="flex items-start"><span className="mr-2">⚠</span> Claims to be a government official or RBI employee.</li>
               </ul>
            </div>
          </section>

          {/* Section 5: Confidentiality */}
          <section id="confidentiality" className="scroll-mt-32 mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-8">Privacy & Confidentiality</h2>
             <p className="mb-6">
               We understand that debt is a sensitive personal matter. Your privacy is our top priority.
             </p>
             
             <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-6 md:p-8">
                   <div className="flex items-start mb-6">
                      <div className="flex-shrink-0 mr-4">
                         <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                         </div>
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2">100% Confidential</h3>
                         <p className="text-gray-600 text-sm leading-relaxed">
                            Your details are never shared with third-party agencies or banks without your explicit written consent. We use your information solely to assess your case and communicate strategies with you.
                         </p>
                      </div>
                   </div>
                   <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                         <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                         </div>
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2">No Judgment Policy</h3>
                         <p className="text-gray-600 text-sm leading-relaxed">
                            We are not here to judge your financial past. We are here to secure your financial future. Our team is trained to be empathetic, professional, and solution-oriented.
                         </p>
                      </div>
                   </div>
                </div>
                <div className="bg-[var(--color-primary)]/5 p-6 text-center border-t border-[var(--color-primary)]/10">
                   <p className="font-bold text-[var(--color-primary)] mb-2">Safe & Secure Consultation</p>
                   <Link href="/contact" className="inline-block bg-[var(--color-primary)] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[var(--color-primary-hover)] transition-colors">
                     Schedule Now
                   </Link>
                </div>
             </div>
          </section>

          {/* Section 6: Process Overview */}
          <section id="process" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
              How the Process Works
            </h2>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
               <div className="space-y-8">
                   <div className="flex">
                       <div className="flex-shrink-0 mr-4">
                           <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)] text-white font-bold text-sm">1</span>
                       </div>
                       <div>
                           <h4 className="text-lg font-bold text-gray-900">Step 1: Book Your Slot</h4>
                           <p className="text-sm text-gray-600 mt-1">Fill out the form on our contact page. Provide basic details about your total debt and current situation.</p>
                       </div>
                   </div>
                   <div className="flex">
                       <div className="flex-shrink-0 mr-4">
                           <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)] text-white font-bold text-sm">2</span>
                       </div>
                       <div>
                           <h4 className="text-lg font-bold text-gray-900">Step 2: Verification Call</h4>
                           <p className="text-sm text-gray-600 mt-1">Our intake team will give you a quick call to verify your details and schedule an in-depth session with a senior expert.</p>
                       </div>
                   </div>
                   <div className="flex">
                       <div className="flex-shrink-0 mr-4">
                           <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)] text-white font-bold text-sm">3</span>
                       </div>
                       <div>
                           <h4 className="text-lg font-bold text-gray-900">Step 3: Strategy Session</h4>
                           <p className="text-sm text-gray-600 mt-1">Talk to the expert. Discuss your case. Get a customized "Assessment Report" outlining your eligibility and estimated settlement amount.</p>
                       </div>
                   </div>
                    <div className="flex">
                       <div className="flex-shrink-0 mr-4">
                           <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)] text-white font-bold text-sm">4</span>
                       </div>
                       <div>
                           <h4 className="text-lg font-bold text-gray-900">Step 4: Decision</h4>
                           <p className="text-sm text-gray-600 mt-1">You decide if you want to hire us to handle the bank negotiations for you. There is no obligation to proceed after the consultation.</p>
                       </div>
                   </div>
               </div>
            </div>
          </section>
          
          {/* New Section: Success Stories */}
          <section id="success-stories" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-8 text-center">Real Stories: The Turning Point</h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              {[
                { 
                  name: "Vikram S.", 
                  loc: "Pune", 
                  role: "Software Engineer",
                  quote: "I was scared to call. I thought they would just judge me. But the consultation was the first time I slept peacefully in months. They explained that my job loss made me eligible for settlement, and I wasn't a criminal.",
                  highlight: "Saved ₹4.5 Lakhs"
                },
                { 
                  name: "Priya M.", 
                  loc: "Chennai", 
                  role: "Single Mother",
                  quote: "My credit card dues had tripled due to interest. The expert on the call showed me the math - I was paying interest on interest. They handled the harassment calls and settled my debt for 40% of the value.",
                  highlight: "Harassment Stopped in 48 Hours"
                }
              ].map((review, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-md transition-all relative">
                   <div className="absolute -top-3 -right-3 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full border border-green-200">
                     {review.highlight}
                   </div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-section-light)] flex items-center justify-center font-bold text-[var(--color-primary)] mr-3">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-bold text-[var(--color-text-hero)]">{review.name}</h5>
                      <p className="text-xs text-[var(--color-text-muted)]">{review.loc} • {review.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--color-text-body)] italic leading-relaxed">"{review.quote}"</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: FAQs (Expanded) */}
          <section id="faqs" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mt-16 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4 not-prose">
              {[
                { 
                  q: "Is the consultation really 100% free?", 
                  a: "Yes. The initial assessment and strategy call is completely free. We charge a fee only if you choose to hire us for the ongoing legal representation and negotiation execution." 
                },
                { 
                  q: "Will you talk to my bank during the consultation?", 
                  a: "No. The consultation is between you and our experts. We do not contact your bank at this stage. We only contact the bank once you officially hire us and authorize us to represent you." 
                },
                { 
                  q: "Do I need to visit your office?", 
                  a: "Not necessarily. We handle cases Pan-India. The entire process - consultation, documentation, and enrollment - can be done digitally via phone, video call, and email." 
                },
                { 
                  q: "What if I am not eligible for settlement?", 
                  a: "If our assessment shows you are not eligible (e.g., you have a secured loan or high repayment capacity), we will honestly tell you. We may suggest other options like EMI restructuring or debt consolidation." 
                },
                { 
                  q: "Can I speak to a lawyer specifically?", 
                  a: "Yes. Our team consists of financial experts and legal professionals. If your case involves complex legal notices (Section 138, Arbitration), we can arrange for a legal opinion." 
                },
                {
                   q: "How long does the consultation take?",
                   a: "A typical assessment call lasts 15 to 20 minutes. This is usually enough to understand your debt portfolio and provide a preliminary strategy."
                },
                {
                  q: "Will my consultation details be reported to CIBIL?",
                  a: "Absolutely not. This is a private consultation. We are not a bank, and we do not report your inquiry to any credit bureau." 
                },
                {
                  q: "Can you help if I have already paid some money to the bank?",
                  a: "Yes. We can analyze if you paid correctly or if the bank is just adjusting it against interest/charges. We can step in to negotiate the remaining balance."
                },
                {
                   q: "Do you guarantee a specific settlement amount?",
                   a: "No honest company can guarantee a fixed amount as it depends on the bank's policy and your delinquency status. However, we historically achieve 40%-50% waivers for our clients."
                },
                {
                   q: "Is late fee and penalty waivable?",
                   a: "Yes, in almost all settlements, 100% of the late fees, panels, and legal charges are waived off. Negotiation mainly happens on the principal + core interest."
                },
                {
                   q: "What if the bank files a case during the consultation process?",
                   a: "Step 1 is to not panic. Step 2 is to show us the notice. Most notices are automated computer-generated threats. If it's a real court summons, our legal team will guide you on the next steps immediately."
                },
                {
                   q: "Will I get a refund if settlement fails?",
                   a: "Our service agreement has clear clauses. We work on a success-fee model for the settlement amount saved. If we cannot settle (very rare), you do not pay the success fee."
                }
              ].map((faq, i) => (
                <details key={i} className="group bg-white border border-[var(--color-border)] rounded-xl overflow-hidden hover:shadow-md transition-all">
                  <summary className="flex justify-between items-center p-5 cursor-pointer font-bold text-[var(--color-text-hero)] list-none">
                    <span className="text-lg">{i + 1}. {faq.q}</span>
                    <span className="transition-transform group-open:rotate-180">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-[var(--color-text-body)] opacity-90 leading-relaxed border-t border-gray-100 pt-4 mt-0 bg-gray-50/50">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          <div className="mt-16 pt-8 border-t border-[var(--color-border)] text-[var(--color-text-muted)] text-sm italic">
             <p>Disclaimer: The consultation provides general guidance based on the information you provide. It does not constitute binding legal advice. Results may vary based on bank policies and individual circumstances.</p>
          </div>
        </article>

        {/* Right Column: CTA & Related Pages (Sticky) */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <div className="sticky top-24 space-y-8">
            
            {/* CTA Container */}
             <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden border border-[var(--color-border)] group">
               <div className="bg-[var(--color-primary)] p-4 text-center">
                 <h3 className="text-lg font-bold text-white">Get Help Now</h3>
               </div>
               <div className="p-6 text-center">
                <p className="mb-6 text-sm text-[var(--color-text-body)] opacity-80 leading-relaxed">
                  Harassment calls? Legal notices? Don't face them alone.
                </p>
                <Link href="/contact" className="inline-block w-full bg-[var(--color-primary)] text-white font-semibold py-3 px-4 rounded-xl hover:bg-[var(--color-primary-hover)] transition-all shadow-md group-hover:shadow-lg">
                  Book Free Call
                </Link>
                <p className="mt-4 text-xs text-[var(--color-text-muted)]"> Limited Slots Daily</p>
              </div>
            </div>

            {/* Related Pages Container */}
            <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-4 border-b border-gray-100 pb-2">Resources</h3>
              <ul className="space-y-4 text-sm font-medium">
                 <li>
                  <Link href="/faqs/eligibility-checker-for-loan-settlement" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                     Check Eligibility
                  </Link>
                </li>
                <li>
                  <Link href="/loan-settlement" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                    Settlement Guide
                  </Link>
                </li>
                 <li>
                  <Link href="/faqs/can-i-get-loan-after-settlement" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                     <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                    Post-Settlement Loans
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </aside>

      </div>
    </main>
  );
}
