import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Check Loan Settlement Eligibility | Am I Eligible? - SettleLoans",
  description: "Unsure if you qualify for loan settlement? Use our detailed eligibility checker guide. Understand the 4 core criteria, NPA status rules, and documentation required to settle your debt.",
  alternates: {
    canonical: "https://settleloans.in/eligibility-checker-for-loan-settlement",
  },
};

export default function EligibilityCheckerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/faqs/eligibility-checker-for-loan-settlement#webpage",
        "url": "https://settleloans.in/faqs/eligibility-checker-for-loan-settlement",
        "name": "Check Loan Settlement Eligibility | Am I Eligible? - SettleLoans",
        "description": "Unsure if you qualify for loan settlement? Use our detailed eligibility checker guide. Understand the 4 core criteria, NPA status rules, and documentation required to settle your debt.",
        "breadcrumb": { "@id": "https://settleloans.in/faqs/eligibility-checker-for-loan-settlement#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/faqs/eligibility-checker-for-loan-settlement#breadcrumb",
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
            "name": "Eligibility Checker",
            "item": "https://settleloans.in/faqs/eligibility-checker-for-loan-settlement"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/faqs/eligibility-checker-for-loan-settlement#article",
        "headline": "Loan Settlement Eligibility Checker: Do You Qualify?",
        "description": "A comprehensive guide and checklist to determine if you are eligible for a one-time loan settlement with banks in India.",
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
        "datePublished": "2024-01-20",
        "dateModified": "2024-01-30",
        "mainEntityOfPage": { "@id": "https://settleloans.in/faqs/eligibility-checker-for-loan-settlement#webpage" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/faqs/eligibility-checker-for-loan-settlement#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "My loan is only 60 days overdue. Can I apply?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Technically, no. Banks usually wait for the 90 day NPA mark. However, we can start the pre litigation discussions and notify the bank of your intent to settle due to hardship."
            }
          },
          {
            "@type": "Question",
            "name": "I have a salary, but it is low. Am I eligible?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. If your current salary cannot cover the EMIs and your living expenses, you are eligible. We prove this with a cash flow statement."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/faqs/eligibility-checker-for-loan-settlement#service",
        "name": "Loan Settlement Eligibility Assessment",
        "description": "Detailed assessment tool to check qualification for bank loan settlement.",
        "provider": {
          "@type": "Organization",
          "name": "SettleLoans",
          "url": "https://settleloans.in"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1120",
          "itemReviewed": {
            "@id": "https://settleloans.in/faqs/eligibility-checker-for-loan-settlement#service"
          }
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Suresh Raina" },
            "datePublished": "2024-01-05",
            "reviewBody": "Clear and concise eligibility criteria. Helped me realize I was a perfect candidate for settlement due to my job loss.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "itemReviewed": {
              "@id": "https://settleloans.in/faqs/eligibility-checker-for-loan-settlement#service"
            }
          }
        ]
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
       <section className="w-full bg-[var(--color-section-light)] pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-semibold mb-6 tracking-wide uppercase">
            Free Assessment Tool
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[var(--color-text-hero)] mb-6 leading-[1.1] tracking-tight">
            Am I Eligible for <br className="hidden md:block"/> Loan Settlement?
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-body)]/80 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Settlement is not an open option for everyone. It is a specific legal remedy for those in genuine financial distress. Use this detailed guide to check your eligibility status instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-primary)] text-white font-semibold py-4 px-10 rounded-full hover:bg-[var(--color-primary-hover)] transition-all duration-300 text-lg shadow-[0_4px_14px_0_rgba(8,73,75,0.39)] hover:shadow-[0_6px_20px_rgba(8,73,75,0.23)] hover:-translate-y-0.5">
              Check with Expert
            </Link>
             <Link href="#checklist" className="inline-flex items-center justify-center bg-white text-[var(--color-text-body)] font-semibold py-4 px-10 rounded-full border border-[var(--color-border)] hover:bg-gray-50 transition-all duration-300 text-lg">
              Start Assessment
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
                Eligibility Checker
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
               { id: "how-it-works", title: "How Eligibility Works" },
               { id: "checklist", title: "The 4 Core Criteria" },
               { id: "npa-status", title: "Detailed NPA Timeline" },
               { id: "settlement-vs-restructuring", title: "Settlement vs Restructuring" },
               { id: "loan-types", title: "Eligible Loan Types" },
               { id: "self-assessment", title: "Self-Assessment Quiz" },
               { id: "documents", title: "Proof You Need" },
               { id: "disqualifications", title: "Who is Disqualified?" },
               { id: "process-overview", title: "The Process" },
               { id: "faqs", title: "Common Questions" }
            ]}
          />
        </aside>

        {/* Middle Column: Main Content */}
        <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
          
          {/* Section 1: Introduction */}
          <section id="how-it-works" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-8 leading-tight">
              Does Everyone Qualify for Loan Settlement?
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
               <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                <strong>No.</strong> This is the most important fact to understand. Banks are profit making institutions. They do not want to lose money. They will agree to a settlement only if they are convinced that receiving a small amount today is better than waiting for a full amount that may never come.
              </p>
              <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10">
                To be eligible, you must prove that your inability to pay is "Genuine" and "Involuntary". Simply not wanting to pay is not grounds for settlement. It is reserved for those who have hit a financial dead end and have no other way out.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100 relative z-10">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Key Principle</p>
                  <blockquote className="text-xl font-medium text-[var(--color-primary)] italic">
                      "Settlement is not a right; it is a negotiation based on proven inability to pay."
                  </blockquote>
              </div>
            </div>
          </section>

          {/* Section 2: The Core 4 Criteria */}
          <section id="checklist" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
              The 4 Core Eligibility Pillars
            </h2>
            <p className="mb-6">
              For a bank to consider your file for a One Time Settlement (OTS), you generally need to meet these four conditions. If you miss even one, your application is likely to be rejected.
            </p>
             <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">1</div>
                <h3 className="text-xl font-bold text-[var(--color-text-hero)] mb-3">Genuine Financial Hardship</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  You must prove a specific event caused your income loss. Examples include Job Loss, Medical Emergency, Business Collapse, or Death of an earning member. Vague reasons like "expenses increased" are not accepted.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">2</div>
                <h3 className="text-xl font-bold text-[var(--color-text-hero)] mb-3">Minimum Delinquency</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  You typically need to be unpaid for at least 90 days (3 months). This classifies your account as an NPA (Non Performing Asset). Banks rarely settle "Standard" accounts because they still hope you will pay.
                </p>
              </div>
               <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">3</div>
                <h3 className="text-xl font-bold text-[var(--color-text-hero)] mb-3">Unsecured Debt Type</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Settlement is primarily for Personal Loans, Credit Cards, and Consumer Loans. Secured loans (Home/Car/Gold) are usually ineligible because the bank prefers to seize and auction the asset instead.
                </p>
              </div>
               <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">4</div>
                <h3 className="text-xl font-bold text-[var(--color-text-hero)] mb-3">Repayment Capacity</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  You need to have *some* money. Settlement is a lump sum deal. You need typically 30% to 50% of the principal amount ready to offer the bank to close the deal instantly.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: NPA Status Rules */}
          <section id="npa-status" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
              The Critical Timeline: NPA & SMA Classifications
            </h2>
             <p className="text-lg mb-6">
                Many borrowers ask, "Can I settle after missing just one EMI?" The answer is generally no. Understanding the RBI mandated timeline is crucial to knowing when your "Settlement Window" opens.
             </p>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
              <h4 className="font-bold text-gray-900 mb-2">The Danger Zone</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                 Banks follow a strict timeline known as SMA (Special Mention Account) before tagging you as an NPA. Settlement usually becomes a viable discussion only after you cross the 90 day mark.
              </p>
            </div>
            
             <div className="relative pl-8 border-l-2 border-[var(--color-primary)]/20 space-y-10 my-8">
                {/* SMA 0 */}
                <div className="relative">
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></span>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                      <h4 className="font-bold text-lg text-gray-800 flex justify-between">
                          Days 1-30: SMA 0
                          <span className="text-xs font-normal text-white bg-green-500 px-2 py-1 rounded-full">Standard Asset</span>
                      </h4>
                      <p className="text-sm text-gray-500 mt-2">
                          <strong>Status:</strong> Just a late payment.
                          <br/>
                          <strong>Bank Action:</strong> Automated reminders, SMS, and polite calls.
                          <br/>
                          <strong>Settlement Eligibility:</strong> <span className="text-red-500 font-bold">Zero.</span>
                      </p>
                  </div>
                </div>

                {/* SMA 1 */}
                <div className="relative">
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-yellow-400 border-2 border-white"></span>
                   <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                      <h4 className="font-bold text-lg text-gray-800 flex justify-between">
                          Days 31-60: SMA 1
                          <span className="text-xs font-normal text-gray-800 bg-yellow-400 px-2 py-1 rounded-full">Stress Signs</span>
                      </h4>
                      <p className="text-sm text-gray-500 mt-2">
                          <strong>Status:</strong> Early delinquency.
                          <br/>
                          <strong>Bank Action:</strong> Collection agents start calling. Pressure builds.
                          <br/>
                          <strong>Settlement Eligibility:</strong> <span className="text-red-500 font-bold">Very Low.</span> (Unless exceptional medical crisis).
                      </p>
                  </div>
                </div>

                 {/* SMA 2 */}
                 <div className="relative">
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-orange-500 border-2 border-white"></span>
                   <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                      <h4 className="font-bold text-lg text-gray-800 flex justify-between">
                          Days 61-90: SMA 2
                          <span className="text-xs font-normal text-white bg-orange-500 px-2 py-1 rounded-full">Critical</span>
                      </h4>
                      <p className="text-sm text-gray-500 mt-2">
                          <strong>Status:</strong> Critical delinquency.
                          <br/>
                          <strong>Bank Action:</strong> Legal notices (Section 138) may be drafted. Field visits increase.
                          <br/>
                          <strong>Settlement Eligibility:</strong> <span className="text-yellow-600 font-bold">Possible</span> (Negotiations can begin).
                      </p>
                  </div>
                </div>

                 {/* NPA */}
                 <div className="relative">
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-red-600 border-2 border-white animate-pulse"></span>
                   <div className="bg-white p-4 rounded-lg border border-red-100 shadow-md">
                      <h4 className="font-bold text-lg text-red-700 flex justify-between">
                          Day 90+: NPA
                          <span className="text-xs font-normal text-white bg-red-600 px-2 py-1 rounded-full">Bad Debt</span>
                      </h4>
                      <p className="text-sm text-gray-500 mt-2">
                          <strong>Status:</strong> Non Performing Asset.
                          <br/>
                          <strong>Bank Action:</strong> Provisions for loss. Loan recalled. Full legal machinery activated.
                          <br/>
                          <strong>Settlement Eligibility:</strong> <span className="text-green-600 font-bold">High.</span> This is the prime window for One Time Settlement.
                      </p>
                  </div>
                </div>
             </div>
          </section>

          {/* Section 4: Settlement vs Restructuring */}
          <section id="settlement-vs-restructuring" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
              Am I Eligible for Settlement or Restructuring?
            </h2>
            <p className="mb-6">
                Many potential clients confuse the two. Understanding the difference is vital for your financial future.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Feature</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">Loan Settlement</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-blue-600 uppercase tracking-wider">Loan Restructuring</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">What is it?</td>
                            <td className="px-6 py-4 text-sm text-gray-500">Closing loan by paying less than due.</td>
                            <td className="px-6 py-4 text-sm text-gray-500">Changing tenure to reduce EMI.</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Eligibility</td>
                            <td className="px-6 py-4 text-sm text-gray-500">Only for defaulters (NPA).</td>
                            <td className="px-6 py-4 text-sm text-gray-500">Before default (Standard accounts).</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Credit Score</td>
                            <td className="px-6 py-4 text-sm text-red-500 font-bold">Severely Impacted (Drops 100+ pts).</td>
                            <td className="px-6 py-4 text-sm text-green-600 font-bold">Minimal Impact.</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Total Payment</td>
                            <td className="px-6 py-4 text-sm text-gray-500">Reduced (Waiver given).</td>
                            <td className="px-6 py-4 text-sm text-gray-500">High (Tenure increased = More interest).</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Conclusion</td>
                            <td className="px-6 py-4 text-sm text-gray-500"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Last Resort</span></td>
                            <td className="px-6 py-4 text-sm text-gray-500"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">First Choice</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </section>

          {/* Section 5: Eligible Loan Types */}
          <section id="loan-types" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
               Which Loans Categories Are Eligible?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="font-bold text-green-800 mb-4 flex items-center">
                       <span className="w-6 h-6 rounded-full bg-green-200 mr-2 flex items-center justify-center text-xs">✓</span>
                       Eligible (Unsecured)
                    </h3>
                    <ul className="space-y-3 text-green-900/80 font-medium text-sm">
                        <li className="flex items-start"><span className="mr-2">•</span> <strong>Personal Loans:</strong> Both from major banks (HDFC, ICICI, SBI) and NBFCs (Bajaj, Aditya Birla).</li>
                        <li className="flex items-start"><span className="mr-2">•</span> <strong>Credit Card Dues:</strong> One of the most common settled debts due to high interest rates.</li>
                        <li className="flex items-start"><span className="mr-2">•</span> <strong>Digital Lenders:</strong> App based loans (Slice, UNI, PostPe) can be settled.</li>
                        <li className="flex items-start"><span className="mr-2">•</span> <strong>Education Loans:</strong> Specifically those below ₹4 Lakhs without collateral.</li>
                        <li className="flex items-start"><span className="mr-2">•</span> <strong>Business Overdrafts:</strong> Unsecured OD facilities for small businesses.</li>
                    </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h3 className="font-bold text-red-800 mb-4 flex items-center">
                       <span className="w-6 h-6 rounded-full bg-red-200 mr-2 flex items-center justify-center text-xs">✕</span>
                       Ineligible (Secured)
                    </h3>
                     <ul className="space-y-3 text-red-900/80 font-medium text-sm">
                        <li className="flex items-start"><span className="mr-2">•</span> <strong>Home Loans:</strong> The bank will initiate SARFAESI proceedings to auction your home.</li>
                        <li className="flex items-start"><span className="mr-2">•</span> <strong>Car / Auto Loans:</strong> The lender will repossess the vehicle.</li>
                        <li className="flex items-start"><span className="mr-2">•</span> <strong>Gold Loans:</strong> The pledged gold will be auctioned immediately on default.</li>
                        <li className="flex items-start"><span className="mr-2">•</span> <strong>Loan Against Property (LAP):</strong> Treated same as home loans.</li>
                        <li className="flex items-start"><span className="mr-2">•</span> <strong>Kisan Credit Cards:</strong> Agriculture loans have different waiver schemes from the government.</li>
                    </ul>
                    <p className="mt-4 text-xs text-red-700 italic border-t border-red-200 pt-2">
                       *Note: Secured loans are ineligible because the collateral covers the risk for the bank.
                    </p>
                </div>
            </div>
          </section>

          {/* Section 6: Self Assessment Quiz */}
          <section id="self-assessment" className="scroll-mt-32 mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-8">Self-Assessment Checklist</h2>
             <p className="mb-6">
               Go through this list honestly. If you check more than 4 "Yes" boxes, you are a strong candidate for settlement.
             </p>
             
             <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="divide-y divide-gray-100">
                   {[
                     "Have you missed more than 3 consecutive EMIs?",
                     "Is your total unsecured debt more than ₹50,000?",
                     "Have you suffered job loss, pay cut, or medical crisis recently?",
                     "Is the harassment from recovery agents affecting your mental health?",
                     "Do you have zero assets (gold, land) to sell to pay full dues?",
                     "Can you arrange roughly 40% to 50% of the principal amount from friends/family?",
                     "Are you willing to accept a drop in your CIBIL score for future peace of mind?",
                     "Have you received a legal notice or Arbitration notice?"
                   ].map((question, i) => (
                     <div key={i} className="flex items-center p-5 hover:bg-gray-50 transition-colors">
                        <div className="mr-4 flex-shrink-0">
                           <div className="w-6 h-6 rounded border-2 border-gray-300"></div>
                        </div>
                        <span className="font-medium text-gray-800 text-lg">{question}</span>
                     </div>
                   ))}
                </div>
                <div className="bg-[var(--color-primary)]/5 p-6 text-center border-t border-[var(--color-primary)]/10">
                   <p className="font-bold text-[var(--color-primary)] mb-2">Did you answer "Yes" mostly?</p>
                   <p className="text-sm text-gray-600 mb-4">You likely qualify. It is time to stop the interest meter.</p>
                   <Link href="/contact" className="inline-block bg-[var(--color-primary)] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[var(--color-primary-hover)] transition-colors">
                     Start Negotiation
                   </Link>
                </div>
             </div>
          </section>

          {/* Section 7: Documents Required */}
          <section id="documents" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
              Documentation: The "Proof" of Eligibility
            </h2>
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
               <p className="mb-6 text-blue-900">
                 You cannot just tell the bank you are broke; you must prove it. We help you build a "Hardship File" (Dossier) to present to the bank's credit committee.
               </p>
               
               <div className="space-y-6">
                   {/* Category 1 */}
                   <div>
                       <h4 className="font-bold text-blue-800 border-b border-blue-200 pb-2 mb-3">1. Identity & Loan Proof</h4>
                       <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
                           <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>PAN Card & Aadhaar Card</li>
                           <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Original Loan Term Sheet</li>
                           <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Latest Loan Account Statement</li>
                           <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Notices received (if any)</li>
                       </ul>
                   </div>

                   {/* Category 2 */}
                   <div>
                       <h4 className="font-bold text-blue-800 border-b border-blue-200 pb-2 mb-3">2. Hardship Proof (Mandatory)</h4>
                       <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
                           <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span><strong>Job Loss:</strong> Termination/Resignation letter.</li>
                           <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span><strong>Pay Cut:</strong> Salary slips showing reduction.</li>
                           <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span><strong>Medical:</strong> Hospital discharge summary/bills.</li>
                           <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span><strong>Business:</strong> GST surrender or Loss Statement.</li>
                           <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span><strong>Insolvency:</strong> Bank statements of last 6 months showing low balance.</li>
                       </ul>
                   </div>

                    {/* Category 3 */}
                   <div>
                       <h4 className="font-bold text-blue-800 border-b border-blue-200 pb-2 mb-3">3. Documents We Get You (Post-Settlement)</h4>
                       <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
                           <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>Settlement Letter (on Bank Letterhead)</li>
                           <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>No Dues Certificate (NDC)</li>
                           <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>CIBIL Update acknowledgment</li>
                       </ul>
                   </div>
               </div>
            </div>
          </section>

          {/* Section 8: Disqualifications */}
          <section id="disqualifications" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
              Who is NOT Eligible? (Disqualification Factors)
            </h2>
            <p className="mb-6">
                Even if you are 90 days overdue, a bank may flatly refuse settlement if you fall into these categories. These are "Red Flags" for any credit manager.
            </p>
            <div className="space-y-4">
               <div className="bg-white p-5 rounded-lg border-l-4 border-red-500 shadow-sm">
                  <h4 className="font-bold text-gray-900">1. The Wilful Defaulter</h4>
                  <p className="text-sm text-gray-600 mt-1">
                     If the bank discovers you have the money (e.g., high bank balance, new expensive car purchase, frequent international travel) but choose not to pay, they will file a criminal case. Settlement is for the "Can't Pay", not the "Won't Pay".
                  </p>
               </div>
               <div className="bg-white p-5 rounded-lg border-l-4 border-red-500 shadow-sm">
                  <h4 className="font-bold text-gray-900">2. Asset Holders</h4>
                  <p className="text-sm text-gray-600 mt-1">
                     If you own multiple properties or liquid assets that the bank knows about, they will pressure you to liquidate those assets first. They check land records and other databases.
                  </p>
               </div>
               <div className="bg-white p-5 rounded-lg border-l-4 border-red-500 shadow-sm">
                  <h4 className="font-bold text-gray-900">3. Fraudulent Documents</h4>
                  <p className="text-sm text-gray-600 mt-1">
                     If your original loan application contained fake salary slips, forged IT returns, or fake address proof, settlement is off the table. You may face fraud charges under IPC sections.
                  </p>
               </div>
               <div className="bg-white p-5 rounded-lg border-l-4 border-red-500 shadow-sm">
                  <h4 className="font-bold text-gray-900">4. Guarantor Availability</h4>
                  <p className="text-sm text-gray-600 mt-1">
                     If you have a solvent guarantor for your loan, the bank will simply pursue them for the full amount instead of settling with you.
                  </p>
               </div>
            </div>
          </section>


           {/* Section 9: The Process */}
          <section id="process-overview" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mt-16 mb-8">The Eligibility to Closure Journey</h2>
            
            <div className="mb-12">
               <h3 className="text-xl font-bold text-[var(--color-text-hero)] mb-6">Step-by-Step Overview</h3>
               <div className="relative pl-8 border-l-2 border-[var(--color-primary)]/20 space-y-8">
                <div className="relative">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)]"></span>
                  <h4 className="font-bold text-lg">1. Free Assessment</h4>
                  <p className="text-sm text-gray-600">You check your eligibility using tools like this or by talking to our experts to verify if your case is strong.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)]"></span>
                  <h4 className="font-bold text-lg">2. Representation</h4>
                  <p className="text-sm text-gray-600">We send a "Representation Letter" to the bank, officially informing them of your hardship and intent to settle. This legally documents your situation.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)]"></span>
                  <h4 className="font-bold text-lg">3. Anti-Harassment Protocol</h4>
                  <p className="text-sm text-gray-600">While the loan ages to 90 days (NPA), our legal team handles recovery calls to ensure you are not harassed.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)]"></span>
                  <h4 className="font-bold text-lg">4. Negotiation Table</h4>
                  <p className="text-sm text-gray-600">Once NPA, we negotiate. We leverage your hardship proofs to bring the demand down from 100% to 30-50%.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)]"></span>
                  <h4 className="font-bold text-lg">5. Settlement Letter & Closure</h4>
                  <p className="text-sm text-gray-600">Bank issues an official letter. You pay the agreed amount. Account closed.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] text-center">
              <h3 className="text-2xl font-bold text-black mb-4">Ready to Check Your Status?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                Don't guess. Banks have complex internal scoring for settlements. Let our experts analyze your portfolio for free.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary-hover)] shadow-lg hover:-translate-y-1"
                >
                  Book Free Consultation
                </Link>
                <Link 
                  href="/loan-settlement"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[var(--color-primary)] transition-all duration-200 bg-white border-2 border-[var(--color-primary)] rounded-full hover:bg-teal-50"
                >
                  Read Requirements
                </Link>
              </div>
            </div>
          </section>

          {/* Section 10: FAQs */}
          <section id="faqs" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mt-16 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4 not-prose">
              {[
                { 
                  q: "My loan is only 60 days overdue. Can I apply?", 
                  a: "Technically, no. Banks usually wait for the 90 day NPA mark. However, we can start the pre litigation discussions and notify the bank of your intent to settle due to hardship, which often pauses aggressive collection." 
                },
                { 
                  q: "I have a salary, but it is low. Am I eligible?", 
                  a: "Yes. If your current salary cannot cover the EMIs and your living expenses (leading to a deficit), you are eligible. We need to prove this deficit with a cash flow statement to the bank." 
                },
                { 
                  q: "Do I qualify if I have property?", 
                  a: "It depends. If the property is pledged (home loan), no. If it is an unencumbered ancestral property, the bank may not know about it instantly, but if they find out during legal proceedings, they may demand you sell it. It is best to consult us for asset protection advice." 
                },
                { 
                  q: "Can I settle just one credit card and keep others active?", 
                  a: "Eligible? Yes. Recommended? No. When you settle one card, the 'Settled' status hits your CIBIL. Other banks will notice the high risk and may block or reduce limits on your active cards immediately. It is often better to settle all unsecured debts at once." 
                },
                { 
                  q: "Is there a minimum amount for settlement?", 
                  a: "There is no law, but banks have internal floors. Usually, they will not accept less than 30% of the principal + interest. Exceptionally, for very old debts (3+ years), settlements have happened at 15% to 20% of principal." 
                },
                {
                   q: "Can a government employee settle a loan?",
                   a: "Yes, eligibility rules are the same. However, be careful as some government service rules count 'wilful insolvency' as misconduct. Settlement due to genuine hardship is usually fine, but legal advice is mandatory here."
                },
                {
                   q: "Does the bank visit my home to verify eligibility?",
                   a: "Yes, field verifications are common. They send officers to verify if you really live there and to assess your standard of living. If they see luxury items (big TV, new car), they might reject your hardship claim."
                },
                {
                   q: "Do I need a lawyer to prove eligibility?",
                   a: "Not strictly mandatory, but highly advised. Banks have legal teams. If you go alone, they might intimidate you into paying full. A lawyer file represents you professionally and signals to the bank that you know your rights."
                },
                {
                   q: "Can I be eligible if I am unemployed?",
                   a: "Yes, being unemployed actually strengthens your 'Hardship' case. However, you still need someone (friend/family) to fund the settlement amount since you have no income."
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
             <p>Disclaimer: This tool is for informational purposes only. "Eligibility" here refers to the typical criteria banks use to consider settlement. Meeting these criteria does not legally guarantee that a bank must offer you a settlement. Final discretion lies with the lender.</p>
          </div>
        </article>

        {/* Right Column: CTA & Related Pages (Sticky) */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <div className="sticky top-24 space-y-8">
            
            {/* CTA Container */}
             <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden border border-[var(--color-border)] group">
               <div className="bg-[var(--color-primary)] p-4 text-center">
                 <h3 className="text-lg font-bold text-white">Check My Status</h3>
               </div>
               <div className="p-6 text-center">
                <p className="mb-6 text-sm text-[var(--color-text-body)] opacity-80 leading-relaxed">
                  Want a professional to review your portfolio for free?
                </p>
                <Link href="/contact" className="inline-block w-full bg-[var(--color-primary)] text-white font-semibold py-3 px-4 rounded-xl hover:bg-[var(--color-primary-hover)] transition-all shadow-md group-hover:shadow-lg">
                  Verify Eligibility
                </Link>
                <p className="mt-4 text-xs text-[var(--color-text-muted)]"> Confidential Review</p>
              </div>
            </div>

            {/* Related Pages Container */}
            <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-4 border-b border-gray-100 pb-2">Related Tools</h3>
              <ul className="space-y-4 text-sm font-medium">
                 <li>
                  <Link href="/loan-settlement" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                     Settlement Process
                  </Link>
                </li>
                <li>
                  <Link href="/faqs/can-i-get-loan-after-settlement" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                    Post-Settlement Loans
                  </Link>
                </li>
                 <li>
                  <Link href="/services/nbfc-loan-settlement" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                     <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                    NBFC Settlement List
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
