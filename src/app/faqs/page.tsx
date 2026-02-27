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
              "position": 19,
              "name": "Top Loan Settlement Companies",
              "url": "https://settleloans.in/faqs/which-companies-offer-loan-settlement-services-in-india"
            },
            {
              "@type": "ListItem",
              "position": 20,
              "name": "Professional Debt Settlement Companies",
              "url": "https://settleloans.in/faqs/which-companies-offer-professional-debt-settlement-services-for-personal-loans"
            },
            {
              "@type": "ListItem",
              "position": 21,
              "name": "Online Platforms for Home Loan Settlement",
              "url": "https://settleloans.in/faqs/can-i-use-online-platforms-to-settle-my-home-loan"
            },
            {
              "@type": "ListItem",
              "position": 22,
              "name": "Debt Settlement with Effective Negotiation",
              "url": "https://settleloans.in/faqs/find-debt-settlement-services-known-for-effective-negotiation"
            },
            {
              "@type": "ListItem",
              "position": 23,
              "name": "How to Choose a Trustworthy Debt Settlement Company",
              "url": "https://settleloans.in/faqs/how-to-choose-trustworthy-debt-settlement-company-to-assist-me"
            },
            {
              "@type": "ListItem",
              "position": 24,
              "name": "P2P Lending & Loan Settlements",
              "url": "https://settleloans.in/faqs/how-do-peer-to-peer-lending-platforms-handle-loan-settlements"
            },
            {
              "@type": "ListItem",
              "position": 25,
              "name": "Loan Write-off vs. Settlement",
              "url": "https://settleloans.in/faqs/difference-between-loan-write-off-and-loan-settlements"
            },
            {
              "@type": "ListItem",
              "position": 26,
              "name": "Joint Loan Settlement Implications",
              "url": "https://settleloans.in/faqs/is-it-possible-to-settle-a-joint-loan-and-what-are-the-implications-for-co-borrowers"
            },
            {
              "@type": "ListItem",
              "position": 27,
              "name": "Alternatives to Loan Settlement",
              "url": "https://settleloans.in/faqs/what-alternatives-exist-to-loan-settlement-services-for-debt-relief-online"
            },
            {
              "@type": "ListItem",
              "position": 28,
              "name": "Recovery Agent Harassment Guide",
              "url": "https://settleloans.in/how-do-loan-recovery-agents-get-my-details-when-my-friend-defaults-to-pay-and-call-me-asking-for-his-information"
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
            <Link href="/faqs/can-i-get-loan-after-settlement" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Can I Get a Loan After Settlement?</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Understand the impact of settlement on your future borrowing capacity and how to rebuild your credit score.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Read Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/faqs/loan-settlement-fees" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Loan Settlement Fees</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Detailed breakdown of our 15% service fee, the 35% bank cost, and why professional settlement saves you money.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Read Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/faqs/eligibility-checker-for-loan-settlement" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Eligibility Checker</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Find out if you qualify for loan settlement. Check criteria regarding loan type, delinquency status, and hardship.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Check Now <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/faqs/free-consultation-loan-settlement" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Free Settlement Consultation</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Book a no-obligation call with our experts. Get a free analysis of your debt portfolio and settlement options.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
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
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Master Document <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 6 */}
            <Link href="/faqs/ots-full-form" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">OTS Full Form & Meaning</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Everything about One Time Settlement: Full form, banking process, RBI guidelines, and how to apply for OTS in 2024-25.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Learn More <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 7 */}
            <Link href="/faqs/how-to-settle-debt-for-less" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Settle Debt for Less</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Advanced negotiation strategies to settle credit card and personal loan debts for 30-50% of the total value.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                View Tactics <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 8 */}
            <Link href="/faqs/how-to-negotiate-personal-loan-settlement" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m16-10V7a4 4 0 00-8 0v4M5 21h14"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Negotiate Personal Loan Settlement</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                The ultimate 5000-word roadmap to negotiating with banks, understanding RBI rules, and securing a deeper discount.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Expert Roadmap <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 9 */}
            <Link href="/faqs/typical-process-personal-loan-settlement-india" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Typical Settlement Process in India</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                A definitive guide on the legal procedural steps, NPA timelines, and the RBI legal framework for loan settlement.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Definitive Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 10 */}
            <Link href="/faqs/how-does-settling-a-loan-impact-my-cibil-credit-score" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">How Settlement Impacts CIBIL Score</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Deep-dive into the 7-year CIBIL impact of loan settlement and professional roadmap for score rebuilding.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                CIBIL Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 11 */}
            <Link href="/faqs/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Comprehensive Settlement Steps</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Master the professional 5-phase process to apply for a loan settlement through an expert service provider.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Process Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 12 */}
            <Link href="/faqs/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Settlement Document Checklist</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                The ultimate toolkit for hardship documentation. Learn which papers force banks to accept your waiver proposal.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Doc Checklist <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 13 */}
            <Link href="/faqs/benefits-and-drawbacks-of-loan-settlement" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Benefits & Drawbacks Guide</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Weight the pros and cons of settlement. Master the trade-offs between debt relief and long-term credit impact.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Pros & Cons <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 14 */}
            <Link href="/faqs/income-tax-implications-of-loan-settlement-india" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Income Tax Implications</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Is your loan waiver taxable? Master Sections 28(iv), 41(1), and 194R to avoid legal surprises after settlement.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Tax Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 15 */}
            <Link href="/faqs/settling-secured-vs-unsecured-loans-india" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Secured vs Unsecured</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Can you settle a home loan? Compare individual settlement strategies for secured and unsecured debt portfolios.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Compare Types <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 16 */}
            <Link href="/faqs/legal-risks-defaulting-loan-without-settlement" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Legal Risks of Default</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Comprehensive 5000-word analysis of civil and criminal risks (SARFAESI, Sec 138) of loan default in India.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Legal Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 17 */}
            <Link href="/faqs/settle-credit-card-dues-third-party-loan-companies" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Card Dues & Third Parties</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Should you use third-party companies for card settlement? Legality, benefits, and risk mitigation strategies.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Settlement Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 18 */}
            <Link href="/faqs/alternatives-to-loan-settlement-managing-debt" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Alternatives to Settlement</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Don't ruin your credit. Explore consolidation, DMPs, and refinancing as better paths to financial freedom.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Refinance Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 19 */}
            <Link href="/faqs/specialized-programs-student-loan-defaults-india" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Student Loan Programs</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Specialized guides on Vidya Lakshmi, PM-Vidyalaxmi, and NCGTC guarantees for education loan settlement.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Student Loan Settlement Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 20 */}
            <Link href="/faqs/which-companies-offer-loan-settlement-services-in-india" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Top Loan Settlement Companies</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Discover which companies offer loan settlement services in India, their typical processes, and ranking for 2024-25.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                View Companies <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 21: Professional Debt Settlement Services (Page 1) */}
            <Link href="/faqs/which-companies-offer-professional-debt-settlement-services-for-personal-loans" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Professional Debt Settlement Companies</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                A master guide to the top professional debt settlement services in India, specializing in personal loans and NBFC debt.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Learn More <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 22: Online Platforms for Home Loan (Page 2) */}
            <Link href="/faqs/can-i-use-online-platforms-to-settle-my-home-loan" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Home Loan Settlement Platforms</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Expert analysis on using digital platforms to settle secured home loans and navigating SARFAESI challenges.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Explore Platforms <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 23: Effective Negotiation Services (Page 3) */}
            <Link href="/faqs/find-debt-settlement-services-known-for-effective-negotiation" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Effective Negotiation Services</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                How to identify debt relief agencies with proven track records of high-waiver bank negotiations and legal defense.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Find Negotiators <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 24: How to Choose Trustworthy Company (Page 4) */}
            <Link href="/faqs/how-to-choose-trustworthy-debt-settlement-company-to-assist-me" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Choosing a Trustworthy Partner</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                The ultimate vetting guide to choosing a legitimate debt settlement partner and protecting yourself from industry scams.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Vetting Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 25: Contact Details for Top-Rated Debt Resolution Companies */}
            <Link href="/faqs/contact-details-top-rated-debt-resolution-companies-india" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Company Contact Directory</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Verified phone numbers, addresses, and email contacts for India's top-rated debt resolution and legal advisor firms.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                View Contacts <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 26: Government-Approved Loan Settlement Services */}
            <Link href="/faqs/government-approved-loan-settlement-services-online" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Government-Approved Path</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Learn about the RBI guidelines, Lok Adalat sessions, and legal frameworks that govern loan settlement in India.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Learn Regulations <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 27: User Reviews for Popular Settlement Platforms */}
            <Link href="/faqs/user-reviews-popular-loan-settlement-platforms" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Platform User Reviews</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Honest feedback and ratings from real borrowers who successfully used online platforms to resolve their debt.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Read Reviews <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 28: Best Deal on Vehicle Loan Settlement */}
            <Link href="/faqs/best-settlement-deal-vehicle-loan-online-services" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Vehicle Loan Settlement</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Strategies to secure the best waiver deals for car and bike loans while preventing asset repossession.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Save My Vehicle <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 29: P2P Lending (New) */}
            <Link href="/faqs/how-do-peer-to-peer-lending-platforms-handle-loan-settlements" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 01-2 2h-1a2 2 0 01-2-2m-9 0a2 2 0 01-2 2H2a2 2 0 01-2-2"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">P2P Lending & Settlements</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                How peer-to-peer lending platforms handle defaults, recovery, and the legal mechanics of P2P loan settlements.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                P2P Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 30: Write-off vs Settlement (New) */}
            <Link href="/faqs/difference-between-loan-write-off-and-loan-settlements" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Write-off vs. Settlement</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Master the technical distinction between bank write-offs and borrower settlements and their impact on credit.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Technical Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 31: Joint Loans (New) */}
            <Link href="/faqs/is-it-possible-to-settle-a-joint-loan-and-what-are-the-implications-for-co-borrowers" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Joint Loan Settlements</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Examine the complex legal and credit implications of settling a joint loan for both co-borrowers and guarantors.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Co-borrower Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 32: Alternatives (New) */}
            <Link href="/faqs/what-alternatives-exist-to-loan-settlement-services-for-debt-relief-online" className="group flex flex-col h-full bg-white rounded-2xl border border-[#DEDEDE] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] transition-colors">Debt Relief Alternatives</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Explore debt consolidation, RBI restructuring, and strategic repayment plans as powerful alternatives to settlement.
              </p>
              <div className="mt-auto text-[#1F5EFF] font-black text-sm flex items-center">
                Relief Guide <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>

            {/* Card 33: Recovery Agent Harassment (New) */}
            <Link href="/how-do-loan-recovery-agents-get-my-details-when-my-friend-defaults-to-pay-and-call-me-asking-for-his-information" className="group flex flex-col h-full bg-[#1F5EFF] rounded-2xl border border-[#DEDEDE] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-white text-[#1F5EFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-white mb-3">Recovery Agent Harassment?</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4 font-normal">
                How do they get your number when a friend defaults? Learn the legal steps to stop the calls and protect your privacy.
              </p>
              <div className="mt-auto text-white font-black text-sm flex items-center">
                Stop Calls Now <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
