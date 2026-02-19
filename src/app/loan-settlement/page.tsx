import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Loan Settlement Services in India | Legal Debt Negotiation - SettleLoans",
  description: "Don't let debt take over your life. SettleLoans provides professional loan settlement and anti-harassment services across India. Settle credit cards & personal loans for 40-70% less.",
  alternates: {
    canonical: "https://settleloans.in/loan-settlement",
  },
};

export default function LoanSettlementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/loan-settlement#webpage",
        "url": "https://settleloans.in/loan-settlement",
        "name": "Loan Settlement Services in India | Legal Debt Negotiation - SettleLoans",
        "description": "Don't let debt take over your life. SettleLoans provides professional loan settlement and anti-harassment services across India. Settle credit cards & personal loans for 40-70% less.",
        "breadcrumb": { "@id": "https://settleloans.in/loan-settlement#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/loan-settlement#breadcrumb",
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
            "name": "Loan Settlement",
            "item": "https://settleloans.in/loan-settlement"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/loan-settlement#service",
        "name": "Loan Settlement Services",
        "description": "Expert legal and financial negotiation services for settling unsecured loans and credit card debts.",
        "provider": {
          "@type": "Organization",
          "name": "SettleLoans",
          "url": "https://settleloans.in"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1250"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Arjun Deshmukh" },
            "datePublished": "2023-11-15",
            "reviewBody": "Settled my credit card debt of ₹8.5 Lakhs for just ₹3.2 Lakhs. SettleLoans legal team stopped the harassment immediately.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Meera Krishnan" },
            "datePublished": "2023-12-02",
            "reviewBody": "Professional and empathetic. They helped me close my personal loan during a medical emergency. Highly recommended.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/loan-settlement#article",
        "headline": "Complete Guide to Loan Settlement in India",
        "description": "A comprehensive guide on how loan settlement works in India, its benefits, risks, and how SettleLoans can help you get out of debt.",
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
        "datePublished": "2024-01-24",
        "dateModified": "2024-01-30",
        "mainEntityOfPage": { "@id": "https://settleloans.in/loan-settlement#webpage" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/loan-settlement#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the step-by-step process for loan settlement with a bank?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The process generally involves 5 steps: 1) Assess your finances to see how much lump sum you can offer. 2) Inform the bank about your genuine financial hardship (job loss, medical emergency). 3) Negotiate for a waiver on interest and a portion of the principal. 4) Get a formal 'Settlement Letter' from the bank stating terms. 5) Make the payment and collect the 'No Dues Certificate' (NDC)."
            }
          },
          {
            "@type": "Question",
            "name": "Can I negotiate a settlement even if my loan is not yet in default?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can negotiate a settlement even before missing any EMIs. However, banks or NBFCs usually consider settlement only after long delays, missed payments (usually 90 days), or serious hardship that is proven with documentation."
            }
          },
          {
            "@type": "Question",
            "name": "How much percentage can be waived in a loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Waivers depend on the severity of your hardship and the bank's policies. Typically, borrowers can get waivers ranging from 30% to 50% of the total outstanding amount. In rare cases with very old defaults, waivers can go higher, but it requires skilled negotiation."
            }
          },
          {
            "@type": "Question",
            "name": "What is the exact impact of loan settlement on my CIBIL score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Loan settlement is considered negative behavior. It drops your CIBIL score by 75-100+ points depending on your credit history. The account status will change to 'Settled' instead of 'Closed', which remains on your report for 7 years and warns future lenders of past default."
            }
          },
          {
            "@type": "Question",
            "name": "Does a settlement affect my co-borrower or guarantor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. The settled status appears in their credit reports as well and can significantly impact their ability to access loans in the future. It typically remains on their report for up to 7 years, just like yours."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get a loan after settlement in the future?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Immediately after settlement, getting a new unsecured loan is very difficult. However, it is not impossible forever. You can rebuild your credit score over 12-24 months by using secured credit cards (FD-backed) or small secured loans. Once your score crosses 750 again, you may become eligible for fresh loans."
            }
          },
          {
            "@type": "Question",
            "name": "Is loan settlement better than loan closure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, 'Loan Closure' (paying the full amount) is always better than 'Settlement'. Closure keeps your credit score healthy. Settlement is a damage-control measure used only when you absolutely cannot pay the full amount to avoid legal action and end harassment."
            }
          },
          {
            "@type": "Question",
            "name": "How do I stop recovery agents from harassing me during settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can appoint a third-party settlement agency like SettleLoans to handle communication. We direct all calls to our legal team. Additionally, RBI guidelines prohibit agents from calling before 7 AM or after 7 PM and using abusive language. You can file a complaint if these rules are violated."
            }
          },
          {
            "@type": "Question",
            "name": "Is loan settlement legal in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, it is 100% legal. It is a contractual agreement between you and the lender. The RBI allows banks to compromise on bad debts (NPAs) through One-Time Settlements (OTS) to clean up their balance sheets."
            }
          },
          {
            "@type": "Question",
            "name": "Can I settle a credit card debt myself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can, but it is challenging. Banks often employ aggressive tactics with individuals. Professional settlement firms have collective bargaining power, relationships with bank managers, and legal expertise to ensure you get the best deal and are protected from harassment."
            }
          },
          {
            "@type": "Question",
            "name": "Does settlement stop banks or NBFCs from taking legal action?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, once you sign and complete a valid settlement agreement, legal action usually ends. The bank withdraws any pending cases (like Section 138 cheque bounce cases) upon full payment of the settlement amount."
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

      {/* Hero Section - Professional & Clean */}
      <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
            Debt Relief Solutions
          </span>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
            Expert Loan Settlement <br className="hidden md:block"/> Services in India
          </h1>
          <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
            Regain your financial freedom. We help you negotiate with banks to settle your personal loans and credit card debts legally and ethically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Start Your Journey
            </Link>
              <Link href="/#services" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#2E2E2E] font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg border border-[#DEDEDE]">
              Learn More
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
              <li className="font-bold text-[#2E2E2E]" aria-current="page">
                Loan Settlement
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
               { id: "understanding-debt", title: "Understanding The Weight/Trap" },
               { id: "what-is-settlement", title: "What is Loan Settlement?" },
               { id: "why-banks-agree", title: "Why Banks Agree" },
               { id: "closing-vs-settling", title: "Closing vs Settling" },
               { id: "when-to-consider", title: "When to Consider It" },
               { id: "process", title: "The Settlement Process" },
               { id: "credit-score-impact", title: "Impact on Credit Score" },
               { id: "write-off-vs-waive-off", title: "Write-off vs Waive-off" },
               { id: "alternatives", title: "Better Alternatives" },
               { id: "benefits-risks", title: "Benefits vs Risks" },
               { id: "documents-required", title: "Documents Required" },
               { id: "rbi-guidelines", title: "RBI Guidelines" },
               { id: "reviews", title: "Success Stories" },
               { id: "faqs", title: "FAQs" }
            ]}
          />
        </aside>

        {/* Middle Column: Main Content */}
        <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
          
          {/* Section 1: Emotional Hook (Original) */}
          <section id="understanding-debt" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
              The Weight of Debt: <span className="text-black">A Reality We Understand</span>
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
               <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                The phone rings, and your heart stops. You check the screen - it's an unknown number again. Is it another recovery agent? Is it the bank manager? Or just another automated threat? If this feeling is familiar to you, know that <span className="font-semibold text-[var(--color-text-hero)]">you are not alone.</span>
              </p>
              <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10">
                Thousands of Indians wake up every day with this exact knot in their stomach. The weight of debt is not just financial; it is physical, emotional, and deeply personal. At SettleLoans, we see the stories behind the numbers - the medical emergencies, the job losses, the unfair turns of life.
              </p>
            </div>
          </section>

          {/* Section 2: What is Settlement (New - Generalized) */}
          <section id="what-is-settlement" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
              What is Loan Settlement?
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Loan settlement is a mutual decision between a borrower and a lender (Banks or NBFCs), where the lender agrees to accept less than the total outstanding amount to close the loan account. After payment, the loan is marked as "settled" instead of "closed." 
            </p>
            <p className="text-lg leading-relaxed mb-6">
              This option typically becomes available when you have defaulted on repayment due to genuine financial hardship such as job loss, salary cuts, medical emergencies, or business failure. For example, if you owe a lender ₹1,50,000 but offer only ₹80,000 as a lump sum, and the lender accepts this to clear the debt, you have "settled" the loan. While it offers immediate relief, it is important to understand the long-term impact on your credit history.
            </p>
          </section>

          {/* Section 3: Why Banks Agree (New) */}
          <section id="why-banks-agree" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">
              Why Do Banks Agree to Settle?
            </h2>
            <p className="mb-4">
              It might seem counterintuitive for a bank to accept less money. However, banks and NBFCs agree to settle only when they believe the borrower cannot repay the full amount. They prefer to recover a portion of the outstanding amount (Principal) rather than lose it entirely. Common reasons include:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center font-bold mr-3 mt-1">1</span>
                <div>
                  <strong>Genuine Financial Hardship:</strong> If you can prove valid distress (medical docs, termination letter), lenders are more amenable.
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center font-bold mr-3 mt-1">2</span>
                <div>
                  <strong>Cost of Recovery:</strong> Litigation and prolonged recovery efforts are time-consuming and expensive for banks.
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center font-bold mr-3 mt-1">3</span>
                <div>
                  <strong>NPA Management:</strong> Banks want to clean up their balance sheets by resolving Non-Performing Assets (NPAs) quickly.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 4: The Minimum Due Trap (Original) */}
          <section className="mb-16">
            <h3 className="text-2xl font-black text-[#2E2E2E] mb-6 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm font-black">⚠</span>
              The "Minimum Due" Trap
            </h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl">
              <p className="mb-4 font-medium text-red-900">
                One of the most common ways people fall into a debt trap is through credit cards. It starts innocently. You pay the "Minimum Amount Due" (5%), thinking you are safe.
              </p>
              <div className="flex flex-col md:flex-row gap-6 mt-6">
                <div className="flex-1 bg-white p-4 rounded-lg shadow-sm border border-red-100">
                  <div className="text-sm text-gray-500 uppercase font-semibold tracking-wider mb-1">Interest Rate</div>
                  <div className="text-3xl font-bold text-red-600">36-48%</div>
                  <div className="text-xs text-gray-400">Annual Interest on unpaid balance</div>
                </div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow-sm border border-red-100">
                  <div className="text-sm text-gray-500 uppercase font-semibold tracking-wider mb-1">Result</div>
                  <div className="text-lg font-bold text-gray-800">Debt Spiral</div>
                  <div className="text-xs text-gray-400">Principal barely moves while interest grows</div>
                </div>
              </div>
              <p className="mt-6 text-red-800 text-sm">
                Before you know it, you are paying thousands every month just to service the interest, while the debt mountain remains as high as ever.
              </p>
            </div>
          </section>

          {/* Section 5: Closing vs Settling (New Table) */}
          <section id="closing-vs-settling" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">
              Difference Between Closing and Settling a Loan
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-[#DEDEDE]">
                    <th className="py-4 px-6 text-left font-black text-[#2E2E2E]">Aspect</th>
                    <th className="py-4 px-6 text-left font-black text-[#2E2E2E]">Loan Settlement</th>
                    <th className="py-4 px-6 text-left font-black text-[#2E2E2E]">Loan Closure</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Meaning</td>
                    <td className="py-4 px-6 text-gray-600">Part payment accepted as final settlement.</td>
                    <td className="py-4 px-6 text-gray-600">Full payment of principal and interest.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Credit Report</td>
                    <td className="py-4 px-6 text-gray-600">Marked as "Settled". Hurts score.</td>
                    <td className="py-4 px-6 text-gray-600">Marked as "Closed". Healthy score.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Future Loans</td>
                    <td className="py-4 px-6 text-gray-600">Very difficult to get unsecured loans.</td>
                    <td className="py-4 px-6 text-gray-600">Easy to get new credit.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">End Result</td>
                    <td className="py-4 px-6 text-gray-600">Debt free, but credit damaged.</td>
                    <td className="py-4 px-6 text-gray-600">Debt free and credit healthy.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6: When to Consider (Merged) */}
          <section id="when-to-consider" className="scroll-mt-32 mb-12">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">When is Settlement Your Only Option?</h2>
            <p className="mb-6">
              Settlement is a drastic step, akin to financial surgery. It should not be your first choice. However, if you are borrowing money just to pay EMIs, you are digging a deeper hole. You should consider loan settlement if:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-8 not-prose">
              {[
                { title: "Total Insolvency", desc: "Your monthly EMIs exceed 50-60% of your take-home income, leaving nothing for living expenses." },
                { title: "Job Loss / Pay Cut", desc: "You have lost your primary source of income and cannot find a replacement for 3-6 months." },
                { title: "Medical Emergency", desc: "A health crisis has wiped out your savings and added new medical debts." },
                { title: "Business Failure", desc: "Your business has collapsed, leaving you with no cash flow to service debts." },
                { title: "Asset Depletion", desc: "You have no assets (gold, investments) left to liquidate." },
                { title: "Harassment Escalation", desc: "Recovery agents are crossing lines, threatening your family, or showing up at your workplace." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-black text-[#1F5EFF] mb-2">{item.title}</h4>
                  <p className="text-sm text-[var(--color-text-body)] opacity-80">{item.desc}</p>
                </div>
              ))}
            </div>
             <p>
              Remember, banks will never offer you a settlement if you keep paying. Why would they? Settlement happens only when the loan turns into a Non-Performing Asset (NPA), forcing the bank to salvage what they can.
            </p>
          </section>

          {/* Section 7: Recovery Agents (Original) */}
          <section className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The Reality of Recovery Agents</h2>
            <p>
              If you have defaulted, you likely know the dark side of Indian lending - the <strong>Recovery Agents</strong>. These are third-party agencies hired by banks to collect dues. While they are supposed to follow the law, the reality on the ground is often different.
            </p>
            <ul className="list-disc pl-6 mb-6 mt-4">
              <li><strong>Relentless Calling:</strong> Users report receiving 50-100 calls a day.</li>
              <li><strong>Abusive Language:</strong> Agents often use foul language or shout.</li>
              <li><strong>Social Shaming:</strong> Calling relatives, neighbors, or HR departments.</li>
            </ul>
             <blockquote className="border-l-4 border-[var(--color-primary)] pl-4 italic bg-gray-50 p-4 rounded-r-lg">
              "At SettleLoans, a major part of our service is <strong>Anti-Harassment</strong>. We route calls to our legal team. If an agent crosses the line, we file formal grievances."
            </blockquote>
          </section>

          {/* Section 8: The Process (Merged) */}
          <section id="process" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The Settlement Process</h2>
            
            <div className="mb-12">
               <h3 className="text-xl font-black text-[#2E2E2E] mb-6">Step-by-Step Overview</h3>
               <div className="relative pl-8 border-l-2 border-[#1F5EFF]/20 space-y-8">
                <div className="relative">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1F5EFF]"></span>
                  <h4 className="font-black text-lg">1. Analysis & Budgeting</h4>
                  <p className="text-sm text-gray-600">Assess total debt and determine a realistic settlement offer.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1F5EFF]"></span>
                  <h4 className="font-black text-lg">2. Delinquency Phase</h4>
                  <p className="text-sm text-gray-600">Loans usually become eligible for settlement after 90 days (NPA status).</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1F5EFF]"></span>
                  <h4 className="font-black text-lg">3. Negotiation</h4>
                  <p className="text-sm text-gray-600">Discuss with the bank to waive interest and part of the principal.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1F5EFF]"></span>
                  <h4 className="font-black text-lg">4. Settlement Letter</h4>
                  <p className="text-sm text-gray-600">Receive formal written confirmation of the settlement terms.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1F5EFF]"></span>
                  <h4 className="font-black text-lg">5. Closure</h4>
                  <p className="text-sm text-gray-600">Pay the agreed amount and obtain the No Dues Certificate.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-[#DEDEDE]">
               <h3 className="text-xl font-black text-[#1F5EFF] mb-4">How SettleLoans Helps You</h3>
               <p className="mb-4">
                 Our role is to be your shield and your negotiator.
               </p>
               <ul className="space-y-3">
                 <li><strong>Handling Harassment:</strong> We take over communication so you can focus on your work.</li>
                 <li><strong>Legal Notices:</strong> We reply to demand notices and arbitration notices on your behalf.</li>
                 <li><strong>Expert Negotiation:</strong> We know the "bottom price" each bank accepts, ensuring you save the maximum possible.</li>
               </ul>
            </div>
          </section>

          {/* Section 9: Credit Score Impact (Merged) */}
          <section id="credit-score-impact" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">What Does Settlement Do to Your Credit Score?</h2>
             <p className="mb-6">
              We believe in total transparency. Loan settlement <strong>will damage your credit score</strong>. The "Settled" remark serves as a warning to other lenders.
            </p>
             <div className="space-y-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[var(--color-text-hero)] mb-2">1. Immediate Drop</h3>
                <p className="text-gray-600">
                  When your loan is tagged as "settled," lenders see it as a partial default. This can reduce your credit score by 75-100 points depending on your history.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[var(--color-text-hero)] mb-2">2. 7-Year Record</h3>
                <p className="text-gray-600">
                  The "settled" tag stays on your CIBIL report for up to 7 years. New loan approvals become difficult during this period.
                </p>
              </div>
            </div>

            <p>
              <strong>The Good News:</strong> A credit score is not a permanent tattoo. It is a dynamic number.
              <br />
              <strong>Rebuilding path:</strong>
            </p>
            <ol className="list-decimal pl-6 mt-4 space-y-2">
              <li>Wait for 6 months after settlement.</li>
              <li>Open a <strong>Secured Credit Card</strong> (backed by a Fixed Deposit).</li>
              <li>Use only 30% of the limit and pay the full bill on day 1.</li>
              <li>Take a small Consumer Durable loan (for a phone or fridge) and pay EMIs perfectly.</li>
              <li>Within 18-24 months, your score will climb back into the 700s.</li>
            </ol>
            <p className="mt-4 font-medium">
              Freedom from harassment today is worth the temporary dip in a score that you can fix tomorrow.
            </p>
          </section>

          {/* Section 10: Write-off vs Waive-off (New) */}
          <section id="write-off-vs-waive-off" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">
              Loan Write-off vs Loan Waive-off
            </h2>
            <div className="flex flex-col gap-6">
               <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <h3 className="text-lg font-bold text-red-800 mb-2">Loan Write-off (Bad)</h3>
                  <p className="text-red-900/80 mb-2">
                    This is an accounting entry. The bank considers the loan a loss for tax purposes. However, <strong>you still owe the money</strong>. Legal action can continue.
                  </p>
               </div>
               <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500">
                  <h3 className="text-lg font-bold text-emerald-800 mb-2">Loan Waive-off (Good)</h3>
                  <p className="text-emerald-900/80 mb-2">
                    This means the lender completely forgives the debt. You are no longer liable. This is extremely rare for personal loans and usually happens only in government schemes.
                  </p>
               </div>
            </div>
          </section>

          {/* Section 11: Alternatives (New) */}
          <section id="alternatives" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">
              Alternatives Before Settling
            </h2>
            <p className="mb-6">Try these before opting for settlement:</p>
            <ul className="grid sm:grid-cols-2 gap-4">
               <li className="p-4 border border-gray-200 rounded-lg"><strong>EMI Restructuring:</strong> Ask for a longer tenure to reduce monthly EMIs.</li>
               <li className="p-4 border border-gray-200 rounded-lg"><strong>Balance Transfer:</strong> Move loan to a bank with lower interest rates.</li>
               <li className="p-4 border border-gray-200 rounded-lg"><strong>Liquidate Assets:</strong> Use gold or investments to pay off the debt fully.</li>
               <li className="p-4 border border-gray-200 rounded-lg"><strong>Family Loan:</strong> Borrow interest-free from family to close the bank loan.</li>
            </ul>
          </section>

          {/* Section 12: Benefits vs Risks (Original) */}
          <section id="benefits-risks" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Benefits vs Risks</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
              <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                <h3 className="text-xl font-bold text-emerald-800 mb-4">Benefits</h3>
                <ul className="space-y-3 text-emerald-900/80 text-sm">
                  <li>• <strong>Instant Relief:</strong> Stops harassment immediately.</li>
                  <li>• <strong>Massive Savings:</strong> Save up to 50% on principal.</li>
                  <li>• <strong>Legal Closure:</strong> Ends fear of court cases.</li>
                  <li>• <strong>Mental Peace:</strong> Regain control of life.</li>
                </ul>
              </div>
              <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-100">
                <h3 className="text-xl font-bold text-rose-800 mb-4">Risks</h3>
                <ul className="space-y-3 text-rose-900/80 text-sm">
                  <li>• <strong>CIBIL Damage:</strong> Score drops significantly.</li>
                  <li>• <strong>Blacklist:</strong> Hard to get new loans for 2-3 years.</li>
                  <li>• <strong>No Credit Cards:</strong> Credit lines will be closed.</li>
                </ul>
              </div>
            </div>
          </section>

           {/* Section 13: Documents (New) */}
           <section id="documents-required" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">
              Documents Required
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
               <p className="mb-4">To successfully negotiate, you need proof:</p>
               <ul className="grid sm:grid-cols-2 gap-2 text-sm font-medium">
                  <li>✓ Termination Letter (if job loss)</li>
                  <li>✓ Medical Reports/Bills</li>
                  <li>✓ Bank Statements (last 6 months)</li>
                  <li>✓ Income Tax Returns (ITR)</li>
                  <li>✓ Salary Slips (showing pay cut)</li>
                  <li>✓ Closure letters of other debts</li>
               </ul>
            </div>
          </section>

          {/* Section 14: RBI Guidelines (Merged) */}
          <section id="rbi-guidelines" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">RBI Guidelines: Know Your Rights</h2>
             <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
               <ul className="list-disc pl-6 space-y-2 text-blue-900/80">
                  <li><strong>Time Restrictions:</strong> Agents cannot call before 08:00 AM or after 07:00 PM.</li>
                  <li><strong>Privacy:</strong> Agents cannot discuss your debt with neighbors or relatives.</li>
                  <li><strong>Civil Behavior:</strong> Abusive language and physical intimidation are strictly prohibited.</li>
                  <li><strong>Due Process:</strong> Assets cannot be seized without a court order (rare for unsecured loans).</li>
               </ul>
            </div>
          </section>

          {/* Section 15: Reviews (Original) */}
          <section id="reviews" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Stories of Hope</h2>
             <div className="grid md:grid-cols-2 gap-6 not-prose">
              {[
                { 
                  name: "Arjun Deshmukh", 
                  loc: "Mumbai", 
                  loan: "Credit Card Debt: ₹8.5 Lakhs", 
                  res: "Settled for: ₹3.2 Lakhs",
                  story: "I lost my hospitality job during the pandemic. My 3 credit cards maxed out. SettleLoans took over. It took 8 months, but they closed everything for just 3 lakhs."
                },
                { 
                  name: "Meera Krishnan", 
                  loc: "Bangalore", 
                  loan: "Personal Loan: ₹12 Lakhs", 
                  res: "Settled for: ₹5.5 Lakhs",
                  story: "I had a medical emergency that wiped my savings. SettleLoans fought for me. Their legal team stopped the harassment. Professional, empathetic, and effective."
                },
                { 
                  name: "Vikram Singh", 
                  loc: "Delhi", 
                  loan: "Multiple Loans: ₹22 Lakhs", 
                  res: "Settled for: ₹9 Lakhs",
                  story: "I was in a debt trap. SettleLoans consolidated the communication. Today I am debt free and rebuilding my life."
                },
                { 
                  name: "Anjali Pifara", 
                  loc: "Pune", 
                  loan: "Credit Card: ₹4 Lakhs", 
                  res: "Settled for: ₹1.8 Lakhs",
                  story: "The interest was higher than my salary. The team held my hand through the worst months. Thank you for giving me a second chance."
                }
              ].map((review, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-section-light)] flex items-center justify-center font-bold text-[var(--color-primary)] mr-3">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-bold text-[var(--color-text-hero)]">{review.name}</h5>
                      <p className="text-xs text-[var(--color-text-muted)]">{review.loc}</p>
                    </div>
                    <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                  </div>
                  <div className="mb-4 text-xs font-mono bg-gray-50 p-2 rounded border border-gray-100">
                    <span className="block text-red-600">⚠ {review.loan}</span>
                    <span className="block text-green-600 font-bold">✓ {review.res}</span>
                  </div>
                  <p className="text-sm text-[var(--color-text-body)] italic leading-relaxed">"{review.story}"</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 16: FAQs (Merged) */}
          <section id="faqs" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4 not-prose">
              {[
                { q: "Can I negotiate a settlement even if my loan is not yet in default?", a: "Yes, you can, but it is harder. Banks usually prefer settlement for accounts that are already NPAs (90+ days overdue). However, if you have strong proof of future inability to pay (like a layoff letter), some may consider it early." },
                { q: "What percentage of the loan can be waived?", a: "Typically, waivers range from 30% to 50% of the total outstanding. In rare cases of very old unsecured debt, it can go higher." },
                { q: "Does a settlement affect my co-borrower or guarantor?", a: "Yes. The 'Settled' status will appear on their credit report too, damaging their score." },
                { q: "Will collection calls stop immediately?", a: "They stop once the bank updates the status. Until then, our legal team handles the calls for you." },
                { q: "Can I verify if the settlement letter is genuine?", a: "Yes. Always cross-check the settlement letter with the official bank branch or customer care before making payment." },
                { q: "Can I settle a loan using EMIs?", a: "Settlement is usually a lump-sum payment. Some banks may allow 2-3 months instalments in special cases." },
                { q: "Is loan settlement legal?", a: "Yes, it is 100% legal and governed by contract law and RBI guidelines." },
                { q: "Do I need a lawyer?", a: "Not mandatory, but highly recommended if the bank is threatening legal action or if the debt amount is large." },
                { q: "Can I get a loan after settlement?", a: "Not immediately. You will need to rebuild your credit score for 12-24 months first." },
                { q: "Can I pay the waived amount later to clean my record?", a: "Yes, some banks allow you to pay the 'wavier' amount later to change the status from 'Settled' to 'Closed'. Check with your lender." }
              ].map((faq, i) => (
                <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all">
                  <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-[#E3EDFF]/50 group-open:bg-[#E3EDFF]">
                    <span className="text-lg">{i + 1}. {faq.q}</span>
                    <span className="transition-transform group-open:rotate-180">
                      <svg className="w-5 h-5 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-4 mt-0 bg-white">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

       

          <div className="mt-16 pt-8 border-t border-[var(--color-border)] text-center">
             <p className="text-[var(--color-text-muted)] text-sm italic">Disclaimer: SettleLoans is a debt settlement consultancy. We are not a lender. Settlement impact on credit score varies by case.</p>
          </div>

          {/* Mobile CTA (Visible only on mobile) */}
          <div className="lg:hidden mt-16 mb-8">
            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
              <div className="bg-[#1F5EFF] p-6 text-center text-white">
                <h3 className="text-2xl font-black mb-2">Struggling with Debt?</h3>
                <p className="opacity-90 text-sm">Get a comprehensive analysis of your loan portfolio today.</p>
              </div>
              <div className="p-8 text-center text-[#DEDEDE]">
                <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                  Get Debt Free Now
                </Link>
                <div className="mt-6 flex items-center justify-center gap-4 text-xs font-bold opacity-60 uppercase tracking-widest">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    Legal Shield
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    Free Analysis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Right Column: CTA & Related Pages (Sticky) */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <div className="sticky top-24 space-y-8">
            
            {/* CTA Container */}
             <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
               <div className="bg-[#1F5EFF] p-4 text-center">
                 <h3 className="text-lg font-black text-white">Struggling with Debt?</h3>
               </div>
               <div className="p-6 text-center">
                <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                  Get a comprehensive analysis of your loan portfolio today.
                </p>
                <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                  Get Debt Free Now
                </Link>
                <p className="mt-4 text-xs text-[#DEDEDE]/60"> Free confidential consultation</p>
              </div>
            </div>

            {/* Related Pages Container */}
            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Related Information</h3>
              <ul className="space-y-4 text-sm font-bold">
                 <li>
                  <Link href="/services/personal-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Personal Loan Settlement
                  </Link>
                </li>
                <li>
                  <Link href="/services/credit-card-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Credit Card Settlement
                  </Link>
                </li>
                 <li>
                  <Link href="/ignoring-calls-of-recovery-agent" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                     <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Stop Harassment
                  </Link>
                </li>
                 <li>
                  <Link href="/" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                     <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Read our Blog
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
