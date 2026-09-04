import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Missed EMI? A Complete Guide to Regain Control',
  description: 'Missed your first EMI and feeling overwhelmed? Take a deep breath and follow our 5-step crisis management guide to regain control of your finances.',
  alternates: { canonical: 'https://settleloan.in/missed-emi-guide-to-regain-control' },
};

export default function MissedEmiGuidePage() {
  const tocItems = [
    { id: 'introduction', title: 'Understanding a Missed EMI' },
    { id: '5-step-plan', title: '5-Step Crisis Management Plan' },
    { id: 'financial-planning', title: 'Financial Planning After Default' },
    { id: 'regain-control', title: 'How to Regain Credit Control' },
    { id: 'success-stories', title: 'Client Success Stories' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const faqs = [
    { q: "What happens if I miss just one EMI?", a: "Missing one EMI typically results in a bounce charge and late payment penalty. Your credit score may dip slightly, but catching up within 30 days prevents major long-term damage." },
    { q: "Can the bank seize my property after one missed EMI?", a: "No. For secured loans, banks must follow the SARFAESI Act, which only allows them to issue a notice after an account becomes an NPA (usually 90 days of continuous non-payment)." },
    { q: "Will I go to jail for missing a personal loan EMI?", a: "No. Defaulting on a civil loan is not a criminal offense in India, and you cannot be jailed for it. However, if you issued a cheque that bounced, it may attract section 138 of the NI Act." },
    { q: "How much does my CIBIL score drop after one missed EMI?", a: "A single missed payment can drop your CIBIL score by 50-70 points, depending on your prior credit history and overall profile." },
    { q: "Can I stop recovery agents from calling my office?", a: "Yes. RBI guidelines strictly prohibit recovery agents from calling your workplace or relatives to humiliate you. You can file a formal complaint with the bank or RBI Ombudsman." },
    { q: "What is a loan restructuring?", a: "Restructuring involves modifying the terms of your loan—like extending the tenure or lowering the interest rate—to reduce the monthly EMI burden, making it affordable for you to repay." },
    { q: "How long does a missed payment stay on my credit report?", a: "Late payments can stay on your credit report for up to 7 years. However, its impact lessens significantly as you build a newer, positive payment history over time." },
    { q: "Can I negotiate bounce charges with my bank?", a: "Yes. If you have a good track record and the bounce was due to a genuine mistake, you can request the branch manager to reverse the bounce charges and penal interest as a goodwill gesture." },
    { q: "Is loan settlement a good option?", a: "Loan settlement should be a last resort. While it clears the debt, it severely damages your credit score (leaves a 'Settled' remark) making future borrowing very difficult." },
    { q: "What should I tell the bank if I can't pay?", a: "Be honest. Inform them about your job loss, medical emergency, or business downturn. Ask for an EMI moratorium or restructured repayment plan in writing." }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloan.in/missed-emi-guide-to-regain-control/#webpage",
        "url": "https://settleloan.in/missed-emi-guide-to-regain-control",
        "name": "Missed EMI? A Complete Guide to Regain Control",
        "description": "Missed your first EMI and feeling overwhelmed? Take a deep breath and follow our 5-step crisis management guide to regain control of your finances.",
        "inLanguage": "en-IN"
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
            "name": "Missed EMI Guide to Regain Control",
            "item": "https://settleloan.in/missed-emi-guide-to-regain-control"
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "Missed EMI? A Complete Guide to Regain Control",
        "description": "Missed your first EMI and feeling overwhelmed? Take a deep breath and follow our 5-step crisis management guide to regain control of your finances.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoan"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      },
      {
        "@type": "Product",
        "name": "Debt Management & Settlement Consultation",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Ramesh K." },
            "datePublished": "2024-03-12",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "I lost my job and missed three personal loan EMIs. The harassment was non-stop. The team helped me restructure the loan and eventually settle it for an amount I could afford."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sneha M." },
            "datePublished": "2024-05-18",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Credit card dues piled up after a medical emergency. I felt completely trapped. They provided legal protection from agents and negotiated a fantastic settlement."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikas S." },
            "datePublished": "2024-01-22",
            "reviewRating": { "@type": "Rating", "ratingValue": "4.5" },
            "reviewBody": "After missing my business loan EMI, the bank became aggressive. Expert counseling helped me regularize my account without falling into a debt trap."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya T." },
            "datePublished": "2024-06-05",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "I was overwhelmed with phone calls after missing 2 EMIs. Their intervention gave me the breathing room to gather funds and pay off the overdue amount."
          }
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
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Financial Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Missed EMI? A Complete Guide to <span className="text-[#1F5EFF]">Regain Control</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Missed your first EMI and feeling overwhelmed? Take a deep breath and follow our 5-step crisis management guide to regain control of your finances.
            </p>
            <Link href="#consultation" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Expert Financial Help
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Missed EMI Guide to Regain Control</span>
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

          {/* Middle Article */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Intro Section */}
            <section id="introduction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                Understanding a Missed EMI
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <p className="text-lg leading-relaxed mb-6 text-[#4B5563]">
                  Missing an EMI can happen to anyone, whether due to an unexpected medical emergency, job loss, or a temporary cash flow mismatch. <strong>What to do if you miss EMI?</strong> The key is not to panic. A single missed EMI will incur late fees and a minor dip in your credit score, but it does not mean your financial life is over. The faster you act and start your <em>financial planning after loan default</em>, the easier it is to course-correct.
                </p>
                <p className="text-lg leading-relaxed mb-0 text-[#4B5563]">
                  Ignoring the problem, however, allows interest to compound, penalties to accrue, and collection agents to become aggressive. In this guide, we will outline the crucial steps you must take to communicate with your lender and <strong>regain credit control</strong> effectively.
                </p>
              </div>
            </section>

            {/* 5-Step Plan Section */}
            <section id="5-step-plan" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                5-Step Crisis Management Plan
              </h2>
              <p className="text-lg leading-relaxed mb-8 text-[#4B5563]">
                When you face a missed EMI, a structured approach is essential. Follow these five actionable steps to mitigate the damage and negotiate favorable terms.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Assess the Damage & Review Agreements</h3>
                    <p className="text-lg leading-relaxed mb-0 text-[#4B5563]">Check your loan agreement for late payment penalties and grace periods. Understand exactly how much extra you owe and log into your banking portal to confirm the exact bounced date. Knowledge is your first line of defense.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Do Not Ignore Lender Communications</h3>
                    <p className="text-lg leading-relaxed mb-0 text-[#4B5563]">Lenders prefer communication over silence. Answer calls from the bank, explain your situation truthfully, and state when you realistically expect to make the payment. Hiding from recovery agents only escalates the situation to legal notices.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Request a Grace Period or EMI Holiday</h3>
                    <p className="text-lg leading-relaxed mb-0 text-[#4B5563]">If your default is due to temporary job loss or medical reasons, formally write to your branch manager requesting a short moratorium or EMI holiday. Banks have provisions to pause EMIs for genuine cases if notified early.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Explore Restructuring Options</h3>
                    <p className="text-lg leading-relaxed mb-0 text-[#4B5563]">If you anticipate long-term financial strain, ask the bank to restructure your loan. This can involve extending the loan tenure to reduce the monthly EMI amount, making it manageable without further defaults.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">5</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Seek Professional Debt Counseling</h3>
                    <p className="text-lg leading-relaxed mb-0 text-[#4B5563]">If multiple loans are defaulting, it is time for professional financial planning after loan default. Debt settlement or restructuring experts can negotiate with banks on your behalf, often securing waivers on penalties.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Financial Planning After Default */}
            <section id="financial-planning" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Financial Planning After Loan Default
              </h2>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h3 className="text-xl font-black text-[#1F5EFF] mb-4">Immediate Actions to Take</h3>
                <p className="text-lg leading-relaxed mb-4 text-[#1F2937]">Once a default occurs, restructuring your monthly budget is critical. Prioritize your expenses to free up cash for clearing the arrears.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-[#1F2937]">Liquidate low-yield investments like FDs to clear high-interest personal loan EMIs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-[#1F2937]">Consolidate debts into a single, lower-interest loan if possible.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-[#1F2937]">Halt all credit card spending immediately to avoid a debt trap.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">Understanding the RBI Guidelines on Recovery</h3>
                <p className="text-lg leading-relaxed mb-0 text-[#4B5563]">
                  Even if you miss an EMI, you have rights. Recovery agents cannot harass you, visit your home at odd hours (before 8 AM or after 7 PM), or contact your relatives and colleagues. If you face harassment, you can file a complaint with the banking ombudsman.
                </p>
              </div>
            </section>

            {/* Regain Credit Control */}
            <section id="regain-control" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Regain Credit Control
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-[#4B5563]">
                A missed payment drops your CIBIL score quickly. However, consistent and disciplined action can rebuild it.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Clear Overdue Immediately</h3>
                  <p className="text-base text-[#4B5563]">Paying the overdue amount along with the bounce charges within 30 days minimizes the long-term impact on your credit profile.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Automate Future Payments</h4>
                  <p className="text-base text-[#4B5563]">Set up a NACH mandate or auto-debit from an account where your salary is credited to eliminate human error or forgetfulness.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Monitor Credit Reports</h4>
                  <p className="text-base text-[#4B5563]">Regularly check your CIBIL report. Sometimes banks forget to update your status after you've paid the overdue amount. Dispute errors quickly.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Avoid New Credit</h4>
                  <p className="text-base text-[#4B5563]">Do not apply for new credit cards or loans for at least 6 months after a default. Hard inquiries on a damaged score hurt it further.</p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-bold text-red-700 mb-3">Warning: The Danger of Minimum Dues</h4>
                <p className="text-lg text-red-900 mb-0">
                  If the missed payment is on a credit card, paying only the "Minimum Amount Due" is a financial trap. It rolls over your principal balance at massive interest rates (36-42% annually). Always strive to clear the total outstanding amount or convert it into manageable EMIs.
                </p>
              </div>
            </section>

            {/* Success Stories */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Client Success Stories
              </h2>
              <p className="text-lg leading-relaxed mb-8 text-[#4B5563]">
                See how borrowers who missed multiple EMIs partnered with experts to regain control over their financial lives.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Review 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RK
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2E2E2E]">Ramesh K.</h3>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">Owed: ₹8.5L</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Settled: ₹3.2L</span>
                  </div>
                  <p className="text-[#4B5563] text-sm italic">
                    "I lost my job and missed three personal loan EMIs. The harassment was non-stop. The team helped me restructure the loan and eventually settle it for an amount I could afford."
                  </p>
                </div>

                {/* Review 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      SM
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Sneha M.</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">Owed: ₹4.2L</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Settled: ₹1.8L</span>
                  </div>
                  <p className="text-[#4B5563] text-sm italic">
                    "Credit card dues piled up after a medical emergency. I felt completely trapped. They provided legal protection from agents and negotiated a fantastic settlement."
                  </p>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section id="faq" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                    <summary className="text-xl font-bold text-[#2E2E2E] marker:text-transparent flex justify-between items-center list-none outline-none">
                      {faq.q}
                      <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform flex-shrink-0 ml-4">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="text-lg text-[#4B5563] mt-4 mb-0 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div id="consultation" className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-6">Regain Your Financial Peace of Mind</h3>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Missed your first EMI and feeling overwhelmed? Take a deep breath and follow our 5-step crisis management guide to regain control of your finances. Speak to our experts for a personalized defense strategy.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                  Book a Free Consultation Now
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational purposes only. For specific legal or financial advice regarding your loan agreements, please consult with a qualified professional.
              </p>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-8">
              
              {/* Card 1 */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10">
                  <div className="text-2xl font-black mb-4">Facing Recovery Agent Harassment?</div>
                  <p className="text-sm text-gray-300 mb-6">
                    You have rights. Stop illegal recovery tactics and secure a safe settlement.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
                    Get Legal Help
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <div className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Important Resources
                </div>
                <ul className="space-y-4">
                  {[
                    { label: "RBI Recovery Agent Rules", url: "/rbi-rules-for-recovery-agents" },
                    { label: "Loan Settlement vs Repayment", url: "/when-should-you-choose-loan-settlement-instead-of-repayment" },
                    { label: "Stop Agent Harassment", url: "/recovery-agent-harassment-complaint" },
                    { label: "Impact on Credit Score", url: "/why-does-my-credit-score-drop-even-though-i-pay-on-time" }
                  ].map((link, index) => (
                    <li key={index} className="group flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      <Link href={link.url} className="text-sm text-[#4B5563] group-hover:text-[#1F5EFF] font-medium transition-colors">
                        {link.label}
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
