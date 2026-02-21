import Link from "next/link";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Frequently Asked Questions | Loan Settlement | SettleLoans",
  description: "Browse our detailed guides and frequently asked questions about loan settlement, eligibility, fees, and more.",
  alternates: {
    canonical: "https://settleloans.in/faqs",
  },
};

export default function FAQsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/faqs#webpage",
        "url": "https://settleloans.in/faqs",
        "name": "Frequently Asked Questions | Loan Settlement Guides - SettleLoans",
        "description": "Browse our detailed guides and frequently asked questions about loan settlement, eligibility, fees, and more.",
        "breadcrumb": { "@id": "https://settleloans.in/faqs#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/faqs#breadcrumb",
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
            "name": "Services",
            "item": "https://settleloans.in/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "FAQs",
            "item": "https://settleloans.in/faqs"
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://settleloans.in/faqs#collection",
        "name": "SettleLoans FAQ Guides",
        "description": "Collection of detailed guides and FAQs regarding loan settlement.",
        "url": "https://settleloans.in/faqs",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Can I Get a Loan After Settlement?",
              "url": "https://settleloans.in/faqs/can-i-get-loan-after-settlement"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Loan Settlement Fees",
              "url": "https://settleloans.in/faqs/loan-settlement-fees"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Eligibility Checker",
              "url": "https://settleloans.in/faqs/eligibility-checker-for-loan-settlement"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Free Consultation",
              "url": "https://settleloans.in/faqs/free-consultation-loan-settlement"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "How to Settle Loan",
              "url": "https://settleloans.in/faqs/how-to-settle-loan"
            },
            {
              "@type": "ListItem",
              "position": 6,
              "name": "OTS Full Form",
              "url": "https://settleloans.in/faqs/ots-full-form"
            },
            {
              "@type": "ListItem",
              "position": 7,
              "name": "Settle Debt for Less",
              "url": "https://settleloans.in/faqs/how-to-settle-debt-for-less"
            },
            {
              "@type": "ListItem",
              "position": 8,
              "name": "Negotiate Personal Loan Settlement",
              "url": "https://settleloans.in/faqs/how-to-negotiate-personal-loan-settlement"
            },
            {
              "@type": "ListItem",
              "position": 9,
              "name": "CIBIL Impact of Settlement",
              "url": "https://settleloans.in/faqs/how-does-settling-a-loan-impact-my-cibil-credit-score"
            },
            {
              "@type": "ListItem",
              "position": 10,
              "name": "Professional Settlement Steps",
              "url": "https://settleloans.in/faqs/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider"
            },
            {
              "@type": "ListItem",
              "position": 12,
              "name": "Benefits and Drawbacks of Settlement",
              "url": "https://settleloans.in/faqs/benefits-and-drawbacks-of-loan-settlement"
            },
            {
              "@type": "ListItem",
              "position": 13,
              "name": "Income Tax on Settled Debt",
              "url": "https://settleloans.in/faqs/income-tax-implications-of-loan-settlement-india"
            },
            {
              "@type": "ListItem",
              "position": 14,
              "name": "Secured vs Unsecured Settlements",
              "url": "https://settleloans.in/faqs/settling-secured-vs-unsecured-loans-india"
            },
            {
              "@type": "ListItem",
              "position": 15,
              "name": "Legal Risks of Default",
              "url": "https://settleloans.in/faqs/legal-risks-defaulting-loan-without-settlement"
            },
            {
              "@type": "ListItem",
              "position": 16,
              "name": "Credit Card Settlement via Third Party",
              "url": "https://settleloans.in/faqs/settle-credit-card-dues-third-party-loan-companies"
            },
            {
              "@type": "ListItem",
              "position": 17,
              "name": "Alternatives to Settlement",
              "url": "https://settleloans.in/faqs/alternatives-to-loan-settlement-managing-debt"
            },
            {
              "@type": "ListItem",
              "position": 18,
              "name": "Student Loan Specialized Programs",
              "url": "https://settleloans.in/faqs/specialized-programs-student-loan-defaults-india"
            }
          ]
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden text-center">
          <div className="max-w-5xl mx-auto relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Knowledge Base
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Frequently Asked <br className="hidden md:block" /> Questions
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Explore our detailed guides to understand every aspect of loan settlement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Get Professional Help
              </Link>
              <Link href="#content" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#2E2E2E] font-bold py-4 px-10 rounded-[10px] border border-[#DEDEDE] hover:bg-gray-50 transition-all duration-300 text-lg">
                Browse All Guides
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb - Responsive Scroll */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li>
                  <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
                </li>
                <li>
                  <span className="text-gray-300">/</span>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#1F5EFF] transition-colors">Services</Link>
                </li>
                <li>
                  <span className="text-gray-300">/</span>
                </li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">
                  FAQs
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout */}
        <div id="content" className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 text-[var(--color-text-body)]">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/faqs/can-i-get-loan-after-settlement" className="group block bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Can I Get a Loan After Settlement?</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Understand the impact of settlement on your future borrowing capacity and how to rebuild your credit score.
              </p>
              <div className="text-[#1F5EFF] font-black text-sm flex items-center">
                Read Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/faqs/loan-settlement-fees" className="group block bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Loan Settlement Fees</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Detailed breakdown of our 15% service fee, the 35% bank cost, and why professional settlement saves you money.
              </p>
              <div className="text-[#1F5EFF] font-black text-sm flex items-center">
                Read Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/faqs/eligibility-checker-for-loan-settlement" className="group block bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Eligibility Checker</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Find out if you qualify for loan settlement. Check criteria regarding loan type, delinquency status, and hardship.
              </p>
              <div className="text-[#1F5EFF] font-black text-sm flex items-center">
                Check Now <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/faqs/free-consultation-loan-settlement" className="group block bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Free Settlement Consultation</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Book a no-obligation call with our experts. Get a free analysis of your debt portfolio and settlement options.
              </p>
              <div className="text-[#1F5EFF] font-black text-sm flex items-center">
                Book Now <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 5 */}
            <Link href="/faqs/how-to-settle-loan" className="group block bg-[#ffffff] rounded-2xl border border-[#DEDEDE] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-black mb-3 group-hover:text-[#1F5EFF] transition-colors">Ultimate How-to-Settle Guide</h3>
              <p className="text-[#000000]/80 text-sm leading-relaxed mb-4 font-normal">
                The most comprehensive guide on negotiating with banks, understanding legal rights, and breaking the debt cycle in 2024-25.
              </p>
              <div className="text-[#1F5EFF] font-black text-sm flex items-center">
                Master Document <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 6 */}
            <Link href="/faqs/ots-full-form" className="group block bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">OTS Full Form & Meaning</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Everything about One Time Settlement: Full form, banking process, RBI guidelines, and how to apply for OTS in 2024-25.
              </p>
              <div className="text-[#1F5EFF] font-black text-sm flex items-center">
                Learn More <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 7 */}
            <Link href="/faqs/how-to-settle-debt-for-less" className="group block bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Settle Debt for Less</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Advanced negotiation strategies to settle credit card and personal loan debts for 30-50% of the total value.
              </p>
              <div className="text-[#1F5EFF] font-black text-sm flex items-center">
                View Tactics <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 8 */}
            <Link href="/faqs/how-to-negotiate-personal-loan-settlement" className="group block bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m16-10V7a4 4 0 00-8 0v4M5 21h14"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Negotiate Personal Loan Settlement</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                The ultimate 5000-word roadmap to negotiating with banks, understanding RBI rules, and securing a deeper discount.
              </p>
              <div className="text-[#1F5EFF] font-black text-sm flex items-center">
                Expert Roadmap <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 9 */}
            <Link href="/faqs/typical-process-personal-loan-settlement-india" className="group block bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Typical Settlement Process in India</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                A definitive guide on the legal procedural steps, NPA timelines, and the RBI legal framework for loan settlement.
              </p>
              <div className="text-[#1F5EFF] font-black text-sm flex items-center">
                Definitive Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 10 */}
            <Link href="/faqs/how-does-settling-a-loan-impact-my-cibil-credit-score" className="group block bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">How Settlement Impacts CIBIL Score</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Deep-dive into the 7-year CIBIL impact of loan settlement and professional roadmap for score rebuilding.
              </p>
              <div className="text-[#1F5EFF] font-black text-sm flex items-center">
                CIBIL Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 11 */}
            <Link href="/faqs/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider" className="group block bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Comprehensive Settlement Steps</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Master the professional 5-phase process to apply for a loan settlement through an expert service provider.
              </p>
              <div className="text-[#1F5EFF] font-black text-sm flex items-center">
                Process Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 12 */}
            <Link href="/faqs/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal" className="group block bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Settlement Document Checklist</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                The ultimate toolkit for hardship documentation. Learn which papers force banks to accept your waiver proposal.
              </p>
              <div className="text-[#1F5EFF] font-black text-sm flex items-center">
                Doc Checklist <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 13 */}
            <Link href="/faqs/benefits-and-drawbacks-of-loan-settlement" className="group block bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Benefits & Drawbacks Guide</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Weight the pros and cons of settlement. Master the trade-offs between debt relief and long-term credit impact.
              </p>
              <div className="text-[#1F5EFF] font-black text-sm flex items-center">
                Pros & Cons <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 14 */}
            <Link href="/faqs/income-tax-implications-of-loan-settlement-india" className="group block bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Income Tax Implications</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Is your loan waiver taxable? Master Sections 28(iv), 41(1), and 194R to avoid legal surprises after settlement.
              </p>
              <div className="text-[#1F5EFF] font-black text-sm flex items-center">
                Tax Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 15 */}
            <Link href="/faqs/settling-secured-vs-unsecured-loans-india" className="group block bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Secured vs Unsecured</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Can you settle a home loan? Compare individual settlement strategies for secured and unsecured debt portfolios.
              </p>
              <div className="text-[#1F5EFF] font-black text-sm flex items-center">
                Compare Types <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 16 */}
            <Link href="/faqs/legal-risks-defaulting-loan-without-settlement" className="group block bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Legal Risks of Default</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Comprehensive 5000-word analysis of civil and criminal risks (SARFAESI, Sec 138) of loan default in India.
              </p>
              <div className="text-[#1F5EFF] font-black text-sm flex items-center">
                Legal Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 17 */}
            <Link href="/faqs/settle-credit-card-dues-third-party-loan-companies" className="group block bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Card Dues & Third Parties</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Should you use third-party companies for card settlement? Legality, benefits, and risk mitigation strategies.
              </p>
              <div className="text-[#1F5EFF] font-black text-sm flex items-center">
                Settlement Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 18 */}
            <Link href="/faqs/alternatives-to-loan-settlement-managing-debt" className="group block bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Alternatives to Settlement</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Don't ruin your credit. Explore consolidation, DMPs, and refinancing as better paths to financial freedom.
              </p>
              <div className="text-[#1F5EFF] font-black text-sm flex items-center">
                Refinance Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 19 */}
            <Link href="/faqs/specialized-programs-student-loan-defaults-india" className="group block bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Student Loan Programs</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Specialized guides on Vidya Lakshmi, PM-Vidyalaxmi, and NCGTC guarantees for education loan settlement.
              </p>
              <div className="text-[#1F5EFF] font-black text-sm flex items-center">
                Student Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
