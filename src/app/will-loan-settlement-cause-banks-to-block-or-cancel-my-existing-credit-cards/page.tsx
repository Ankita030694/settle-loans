import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Will a Loan Settlement Cause Banks to Block or Cancel My Existing Credit Cards?",
  description: "Understand the impact of a personal loan settlement on your active credit cards. Learn how the Cross-Default Clause affects your credit limit and CIBIL score.",
  alternates: {
    canonical: "https://www.settleloan.in/will-loan-settlement-cause-banks-to-block-or-cancel-my-existing-credit-cards",
  },
};

export default function CreditCardBlockAfterSettlement() {
  const tocItems = [
    { id: "introduction", title: "The Hidden Risk to Your Credit Cards" },
    { id: "cross-default-clause", title: "What is the Cross-Default Clause?" },
    { id: "algorithmic-risk", title: "Algorithmic Risk Assessment by Banks" },
    { id: "credit-limit-reduction", title: "Why Your Credit Limit is Suddenly Reduced" },
    { id: "cancellation", title: "Abrupt Cancellation of Active Credit Cards" },
    { id: "cibil-impact", title: "Impact of Settlement on CIBIL Score" },
    { id: "success-stories", title: "Success Stories" },
    { id: "faq", title: "Frequently Asked Questions" }
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Will a Loan Settlement Cause Banks to Block or Cancel My Existing Credit Cards?",
      "description": "Understand the impact of a personal loan settlement on your active credit cards. Learn how the Cross-Default Clause affects your credit limit and CIBIL score.",
      "url": "https://www.settleloan.in/will-loan-settlement-cause-banks-to-block-or-cancel-my-existing-credit-cards"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.settleloan.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Will a Loan Settlement Cause Banks to Block or Cancel My Existing Credit Cards?",
          "item": "https://www.settleloan.in/will-loan-settlement-cause-banks-to-block-or-cancel-my-existing-credit-cards"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Will a Loan Settlement Cause Banks to Block or Cancel My Existing Credit Cards?",
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
      "datePublished": "2024-05-15T08:00:00+08:00",
      "dateModified": "2024-05-15T08:00:00+08:00"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Will a bank block my active credit card after I settle a loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, it is highly likely. Banks use a 'Cross-Default Clause' which triggers risk alerts across other institutions when you settle a loan, often leading to credit cards being blocked to prevent further defaults."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Cross-Default Clause in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Cross-Default Clause is a provision in loan agreements that states if you default or settle a loan with one financial institution, other banks can treat it as a default on their active credit products."
          }
        },
        {
          "@type": "Question",
          "name": "Can my credit card limit be reduced due to a CIBIL score drop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. A loan settlement drastically drops your CIBIL score. Banks constantly monitor this and will preemptively reduce your credit limits to limit their exposure."
          }
        },
        {
          "@type": "Question",
          "name": "How does a personal loan settlement impact my credit card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can lead to immediate limit reductions, card blocking, or complete cancellation of the card, even if you have never missed a payment on that specific credit card."
          }
        },
        {
          "@type": "Question",
          "name": "Will my perfectly maintained credit card be cancelled?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Due to algorithmic risk assessment, banks prioritize your overall risk profile over your payment history on a single card. If you show distress elsewhere, they may cancel the card."
          }
        },
        {
          "@type": "Question",
          "name": "Can I prevent my credit card from being blocked?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is difficult to prevent entirely once a settlement is reported. However, restructuring your debt with the help of financial advisors before defaulting can protect your credit lines."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a settlement stay on my CIBIL report?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 'Settled' status remains on your credit report for up to 7 years, significantly impacting your ability to get new credit cards or loans during that time."
          }
        },
        {
          "@type": "Question",
          "name": "Do all banks use algorithmic risk assessment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, major private and public sector banks in India employ automated systems to constantly monitor borrower profiles and trigger alerts based on CIBIL drops."
          }
        },
        {
          "@type": "Question",
          "name": "Is it better to pay in full or settle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paying in full always protects your CIBIL score. Settlement should be a last resort, as it damages your creditworthiness and triggers risk alerts across the banking system."
          }
        },
        {
          "@type": "Question",
          "name": "Can SettleLoan help protect my credit cards?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our financial advisors can help you strategize your debt restructuring to minimize the impact on your active credit lines and guide you through the process."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Debt Restructuring Advisory",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Rahul Sharma"
          },
          "reviewBody": "They helped me settle my personal loan and strategized so my primary credit card wasn't blocked. Highly recommended!"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Priya Verma"
          },
          "reviewBody": "I was terrified of losing my credit lines. SettleLoan guided me through the algorithmic risk triggers and saved my limits."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4"
          },
          "author": {
            "@type": "Person",
            "name": "Amit Patel"
          },
          "reviewBody": "Great advice on the cross-default clause. I didn't know settling with one bank would affect the other."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Neha Gupta"
          },
          "reviewBody": "Professional and deeply knowledgeable about how banks assess risk. A lifesaver."
        }
      ]
    }
  ];

  const faqs = [
    { q: "Will a bank block my active credit card after I settle a loan?", a: "Yes, it is highly likely. Banks use a 'Cross-Default Clause' which triggers risk alerts across other institutions when you settle a loan, often leading to credit cards being blocked to prevent further defaults." },
    { q: "What is the Cross-Default Clause in India?", a: "A Cross-Default Clause is a provision in loan agreements that states if you default or settle a loan with one financial institution, other banks can treat it as a default on their active credit products." },
    { q: "Can my credit card limit be reduced due to a CIBIL score drop?", a: "Absolutely. A loan settlement drastically drops your CIBIL score. Banks constantly monitor this and will preemptively reduce your credit limits to limit their exposure." },
    { q: "How does a personal loan settlement impact my credit card?", a: "It can lead to immediate limit reductions, card blocking, or complete cancellation of the card, even if you have never missed a payment on that specific credit card." },
    { q: "Will my perfectly maintained credit card be cancelled?", a: "Yes. Due to algorithmic risk assessment, banks prioritize your overall risk profile over your payment history on a single card. If you show distress elsewhere, they may cancel the card." },
    { q: "Can I prevent my credit card from being blocked?", a: "It is difficult to prevent entirely once a settlement is reported. However, restructuring your debt with the help of financial advisors before defaulting can protect your credit lines." },
    { q: "How long does a settlement stay on my CIBIL report?", a: "A 'Settled' status remains on your credit report for up to 7 years, significantly impacting your ability to get new credit cards or loans during that time." },
    { q: "Do all banks use algorithmic risk assessment?", a: "Yes, major private and public sector banks in India employ automated systems to constantly monitor borrower profiles and trigger alerts based on CIBIL drops." },
    { q: "Is it better to pay in full or settle?", a: "Paying in full always protects your CIBIL score. Settlement should be a last resort, as it damages your creditworthiness and triggers risk alerts across the banking system." },
    { q: "Can SettleLoan help protect my credit cards?", a: "Our financial advisors can help you strategize your debt restructuring to minimize the impact on your active credit lines and guide you through the process." }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
          
          {/* Hero Section */}
          <section className="w-full bg-[#2E2E2E] pt-16 pb-8 md:pt-24 md:pb-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto text-center relative z-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                Credit Impact Analysis
              </span>
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                Will a Loan Settlement Cause Banks to <span className="text-[#1F5EFF]">Block or Cancel</span> My Active Credit Cards?
              </h1>
              <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
                Discover the hidden dangers of the &quot;Cross-Default Clause&quot; and how algorithmic risk assessment by banks can lead to abrupt credit card cancellations after a personal loan settlement.
              </p>
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Protect Your Credit Lines Today
              </Link>
            </div>
          </section>

          {/* Breadcrumbs */}
          <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4">
              <nav className="flex items-center gap-2 text-xs md:text-sm text-[#747474]">
                <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
                <span className="text-gray-300">/</span>
                <Link href="/resources" className="hover:text-[#1F5EFF] transition-colors">Resources</Link>
                <span className="text-gray-300">/</span>
                <span className="font-bold text-[#2E2E2E]">Credit Card Block After Settlement</span>
              </nav>
            </div>
          </div>

          {/* 3-Column Layout */}
          <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
            
            {/* Left Sidebar (TOC) */}
            <aside className="hidden lg:block w-1/5 min-w-[240px]">
              <div className="sticky top-24">
                <TableOfContents items={tocItems} />
              </div>
            </aside>

            {/* Middle Column (Article) */}
            <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
              
              {/* Boxed Intro */}
              <section id="introduction" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">The Hidden Risk to Your Credit Cards</h2>
                <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                  <p className="text-lg leading-relaxed mb-6 text-[#2E2E2E]">
                    When you find yourself struggling with a personal loan, entering a settlement agreement might seem like the perfect escape route. However, many borrowers are shocked to discover that within weeks of settling a loan with Bank A, their perfectly maintained credit cards with Bank B are suddenly blocked or have their limits drastically reduced. 
                  </p>
                  <p className="text-lg leading-relaxed mb-0 text-[#2E2E2E]">
                    This domino effect is not a coincidence. It is the direct result of automated financial safety nets built into the modern banking system, designed to protect institutions from impending defaults. Understanding this mechanism is crucial before you finalize any settlement.
                  </p>
                </div>
              </section>

              {/* Blue Important Box */}
              <section id="cross-default-clause" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">What is the Cross-Default Clause?</h2>
                <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                  <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The Secret Weapon of Banks</h4>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>Cross-Default Clause India</strong> is a powerful legal provision buried in the fine print of almost every loan and credit card agreement. In simple terms, it states that if you default on an obligation with <em>any</em> financial institution, it can be treated as a default by your current lender, even if you have never missed a payment with them.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                      <span className="text-lg text-gray-700">It allows banks to take preemptive action before you default on their specific product.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                      <span className="text-lg text-gray-700">A settlement is legally considered a partial default, triggering this clause instantly.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Numbered Steps */}
              <section id="algorithmic-risk" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Algorithmic Risk Assessment by Banks</h2>
                <p className="text-lg leading-relaxed mb-8">
                  Gone are the days when a human banker manually reviewed your file. Today, the <strong>impact of personal loan settlement on credit card</strong> accounts is managed by ruthless algorithms. Here is how the automated domino effect works:
                </p>
                
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">The Trigger Event</h3>
                      <p className="text-lg leading-relaxed text-gray-600">You settle a personal loan. The lending bank reports this transaction to credit bureaus (like CIBIL, Experian) with the status &quot;Settled.&quot;</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">The Algorithmic Sweep</h3>
                      <p className="text-lg leading-relaxed text-gray-600">Your other banks perform monthly or quarterly automated sweeps of their customers&apos; credit profiles. The algorithm immediately flags the &quot;Settled&quot; status on your report.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Risk Re-evaluation</h3>
                      <p className="text-lg leading-relaxed text-gray-600">The system re-evaluates your risk profile. Because a settlement indicates severe financial distress, your risk score skyrockets internally.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4-Grid Info Boxes */}
              <section id="credit-limit-reduction" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Why Your Credit Limit is Suddenly Reduced</h2>
                <p className="text-lg leading-relaxed mb-6">
                  One of the first signs of trouble is a <strong>CIBIL score drop credit card limit reduced</strong> scenario. Banks use credit limits as a lever to manage their exposure to risky borrowers.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Exposure Mitigation</h3>
                    <p className="text-gray-700">Banks want to ensure you cannot max out your card and default. Lowering the limit reduces their potential loss.</p>
                  </div>
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Behavioral Modeling</h3>
                    <p className="text-gray-700">Algorithms predict that borrowers who settle one loan are 70% more likely to max out available credit elsewhere.</p>
                  </div>
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Automated Execution</h3>
                    <p className="text-gray-700">Limit reductions happen automatically, often via an SMS notification, without human intervention or prior warning.</p>
                  </div>
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Impact on Utilization</h3>
                    <p className="text-gray-700">A reduced limit spikes your credit utilization ratio, further tanking your credit score in a vicious cycle.</p>
                  </div>
                </div>
              </section>

              {/* Red Warning Box */}
              <section id="cancellation" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Abrupt Cancellation of Active Credit Cards</h2>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                  <h3 className="text-xl font-black text-red-700 mb-4">Warning: Complete Card Revocation</h3>
                  <p className="text-lg leading-relaxed text-red-900 mb-0">
                    If your algorithmic risk score crosses a critical threshold, banks won&apos;t just lower your limit—they will cancel the card entirely. You might be asking, <em>&quot;Will bank block active credit card after settlement even if I pay on time?&quot;</em> The answer is a resounding yes. Banks care about your overall financial stability, not just your loyalty to one card.
                  </p>
                </div>
              </section>

              {/* Gray Insight Box */}
              <section id="cibil-impact" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Impact of Settlement on CIBIL Score</h2>
                <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                  <p className="text-lg leading-relaxed mb-6 text-gray-800">
                    The core driver behind these automated actions is the massive drop in your CIBIL score. A settlement typically causes a drop of 75 to 100 points instantly. 
                  </p>
                  <p className="text-lg leading-relaxed mb-0 text-gray-800">
                    Because credit card issuers monitor this score continuously, the sudden plunge acts as an emergency flare, signaling to all lenders that you are unable to handle your current debt load.
                  </p>
                </div>
              </section>

              {/* Review / Success Stories */}
              <section id="success-stories" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Success Stories</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  
                  {/* Card 1 */}
                  <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-shadow">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                        RS
                      </div>
                      <div>
                        <h4 className="font-bold text-[#2E2E2E]">Rahul Sharma</h4>
                        <div className="flex text-yellow-400">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mb-4">
                      <span className="text-xs font-bold px-2 py-1 bg-red-100 text-red-700 rounded-full">Loan: ₹12 Lakhs</span>
                      <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">Settled: ₹4.5 Lakhs</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">&quot;They helped me settle my personal loan and strategized so my primary credit card wasn&apos;t blocked. Highly recommended!&quot;</p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-shadow">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                        PV
                      </div>
                      <div>
                        <h4 className="font-bold text-[#2E2E2E]">Priya Verma</h4>
                        <div className="flex text-yellow-400">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mb-4">
                      <span className="text-xs font-bold px-2 py-1 bg-red-100 text-red-700 rounded-full">Loan: ₹8 Lakhs</span>
                      <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">Settled: ₹3 Lakhs</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">&quot;I was terrified of losing my credit lines. SettleLoan guided me through the algorithmic risk triggers and saved my limits.&quot;</p>
                  </div>

                </div>
              </section>

              {/* FAQs */}
              <section id="faq" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-bold text-[#2E2E2E] mb-2">{faq.q}</h4>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Lead Gen Hook */}
              <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <h3 className="text-3xl md:text-4xl font-black mb-6 relative z-10">Worried about losing your active credit cards?</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                  Worried your active credit cards will be blocked if you settle a personal loan? Let our financial advisors help you restructure your debt while protecting your active credit lines.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg relative z-10">
                  Get Expert Consultation
                </Link>
                
                <div className="mt-16 pt-8 border-t border-gray-100/20 text-center relative z-10">
                  <p className="text-gray-400 text-sm italic">
                    Disclaimer: Debt settlement impacts your CIBIL score. Our experts provide advisory services to minimize impact, but results may vary based on bank policies and individual credit profiles.
                  </p>
                </div>
              </div>

            </article>

            {/* Right Sidebar */}
            <aside className="hidden lg:block w-1/5 min-w-[240px]">
              <div className="sticky top-24 space-y-8">
                
                {/* Dark CTA Card */}
                <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                  <h3 className="text-2xl font-black mb-4 relative z-10">Protect Your Credit Limit</h3>
                  <p className="text-sm text-gray-300 mb-6 relative z-10">
                    Don&apos;t let a single settlement ruin your credit history across all banks. Speak to an expert before it&apos;s too late.
                  </p>
                  <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors relative z-10">
                    Talk to an Expert
                  </Link>
                </div>

                {/* White Resources Card */}
                <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                  <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-6">Related Guides</h4>
                  <div className="space-y-4">
                    <Link href="/what-is-personal-loan-settlement" className="flex items-center group text-gray-700 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      <span className="text-sm font-medium">What is Personal Loan Settlement?</span>
                    </Link>
                    <Link href="/how-does-settlement-affect-cibil" className="flex items-center group text-gray-700 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      <span className="text-sm font-medium">How Settlement Affects CIBIL</span>
                    </Link>
                    <Link href="/can-banks-sue-for-unpaid-loans" className="flex items-center group text-gray-700 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      <span className="text-sm font-medium">Can Banks Sue for Unpaid Loans?</span>
                    </Link>
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </main>
      </div>
    </>
  );
}
