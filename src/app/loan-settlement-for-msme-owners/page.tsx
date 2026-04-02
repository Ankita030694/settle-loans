import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Loan Settlement for MSME Owners in India | Debt Relief & Samadhaan Guide",
  description: "Are you an MSME owner struggling with bank debt or NPA? Learn the legal process of MSME loan settlement, RBI restructuring, and the MSME Samadhaan portal for debt relief.",
  alternates: {
    canonical: "https://settleloans.in/loan-settlement-for-msme-owners",
  },
};

export default function LoanSettlementMSMEOwnersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/loan-settlement-for-msme-owners#webpage",
        "url": "https://settleloans.in/loan-settlement-for-msme-owners",
        "name": "Loan Settlement for MSME Owners in India | Debt Relief & Samadhaan Guide",
        "description": "Comprehensive guide to loan settlement, RBI restructuring, and MSME Samadhaan for small business owners in India.",
        "breadcrumb": { "@id": "https://settleloans.in/loan-settlement-for-msme-owners#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/loan-settlement-for-msme-owners#breadcrumb",
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
            "name": "Loan Settlement for MSME Owners",
            "item": "https://settleloans.in/loan-settlement-for-msme-owners"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/loan-settlement-for-msme-owners#article",
        "headline": "Loan Settlement for MSME Owners: Rescuing the Backbone of Indian Industry",
        "description": "Learn how small business owners can resolve NPAs and leverage the MSMED Act 2006 to settle debts and recover delayed payments.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans MSME Desk"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-03-25",
        "dateModified": "2024-03-25",
        "mainEntityOfPage": { "@id": "https://settleloans.in/loan-settlement-for-msme-owners#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/loan-settlement-for-msme-owners#product",
        "name": "MSME Debt Settlement Services",
        "description": "Professional debt negotiation and legal support for MSME owners in India for loan settlement and Samadhaan cases.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1800"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram P." },
            "datePublished": "2024-01-25",
            "reviewBody": "Our manufacturing unit was on the verge of closure due to raw material price spikes. SettleLoans helped us restructure our bank debt and recover 2 crores from a large corporate buyer using MSME Samadhaan. Life-saver.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Ananya R." },
            "datePublished": "2024-02-28",
            "reviewBody": "Very professional handling of our NPA account. They navigated the SARFAESI notice and got us a clean settlement with the bank.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/loan-settlement-for-msme-owners#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the One-Time Settlement (OTS) for MSMEs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An OTS is a negotiated settlement where the bank agrees to accept a portion of the total dues as full and final payment, especially for MSME accounts classified as NPAs."
            }
          },
          {
            "@type": "Question",
            "name": "How does MSME Samadhaan help in loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "MSME Samadhaan helps you recover delayed payments from your buyers with 3x interest. This recovered capital can then be used to settle your own bank loans effectively."
            }
          },
          {
            "@type": "Question",
            "name": "What are the SMA categories for MSME accounts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SMA (Special Mention Account) has three stages: SMA-0 (1-30 days overdue), SMA-1 (31-60 days), and SMA-2 (61-90 days). Identifying stress at SMA-0 is the best time for restructuring."
            }
          },
          {
            "@type": "Question",
            "name": "Can a bank seize MSME machinery under the SARFAESI Act?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if the loan is secured by machinery and is above 1 lakh, the bank can technically seize it. However, under MSME rehabilitation laws, you can challenge this if the unit is viable."
            }
          },
          {
            "@type": "Question",
            "name": "What is the interest rate for delayed payments to MSMEs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under the MSMED Act 2006, buyers must pay 3 times the RBI bank rate, compounded monthly, for any delay beyond 45 days."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need Udyam Registration for loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Udyam Registration is mandatory to access MSME-specific benefits like Samadhaan, priority lending, and specialized settlement frameworks."
            }
          },
          {
            "@type": "Question",
            "name": "Can a private bank refuse to restructure an MSME loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While banks have their own policies, they must follow RBI's broader framework for the 'Revival and Rehabilitation of MSMEs'. They cannot arbitrarily refuse a viable restructuring plan."
            }
          },
          {
            "@type": "Question",
            "name": "What is the maximum loan limit for the RBI MSME revival framework?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The framework generally applies to MSME accounts with aggregate loan limits of up to ₹25 crore."
            }
          },
          {
            "@type": "Question",
            "name": "Is it better to restructure or settle as an MSME?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If your business has a future and can generate cash flow, restructuring is better as it saves your credit score. If the business model has failed, settlement is a cleaner exit."
            }
          },
          {
            "@type": "Question",
            "name": "Can SettleLoans represent me in the MSEFC for my Samadhaan case?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While we are not an arbitration body, we provide the legal and financial advisory needed to prepare your case for the Facilitation Council and manage the subsequent bank negotiations."
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

        {/* Hero Section - MSME Focus */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              The MSME Guardian
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Loan Settlement for <br className="hidden md:block" /> MSME Owners in India
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-4xl mx-auto leading-[1.2] font-normal">
              Is your business suffocating under bank debt or delayed client payments? Navigate the legal maze of NPA resolution, RBI revival frameworks, and the MSME Samadhaan portal with India's leading debt advisors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Protect Your Business Today
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb - Detection by Rich Results */}
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
                  Loan Settlement for MSME Owners
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* 3 Column Layout Full Width */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative max-w-full">

          {/* Left Column: TOC (Sticky) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <TableOfContents
              items={[
                { id: "msme-vision", title: "A Message to Industry Owners" },
                { id: "msme-debt-crisis-2026", title: "The MSME Debt Crisis" },
                { id: "rbi-revival-framework", title: "RBI Revival Framework" },
                { id: "understanding-sma", title: "Understanding SMA Stress" },
                { id: "ots-for-msme", title: "What is MSME Settlement?" },
                { id: "msme-samadhaan-power", title: "The Power of Samadhaan" },
                { id: "msmed-act-2006", title: "MSMED Act Protections" },
                { id: "step-by-step-msme", title: "Step-by-Step Guide" },
                { id: "udyam-importance", title: "Importance of Udyam" },
                { id: "section-15-16", title: "Section 15 & 16 Rights" },
                { id: "negotiating-haircuts", title: "Negotiating Bank Haircuts" },
                { id: "cibil-business-credit", title: "Business Credit Impacts" },
                { id: "sarfaesi-msme", title: "SARFAESI and MSMEs" },
                { id: "owner-wellbeing", title: "Managing Proprietor Stress" },
                { id: "msme-success-cases", title: "Success Stories" },
                { id: "why-settleloans-msme", title: "Why SettleLoans?" },
                { id: "rebuilding-sme-future", title: "Rebuilding Your Future" },
                { id: "conclusion-msme", title: "Final Words of Strength" },
                { id: "faqs", title: "Frequently Asked Questions" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content (>5000 words target) */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#2E2E2E]">

            <section id="msme-vision" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-8 leading-tight">
                To the Builders of Modern India: <span className="text-black underline decoration-[#1F5EFF]/20">Your Legacy is More Than Your Ledger</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                <p className="text-lg leading-relaxed text-[#2E2E2E] relative z-10 mb-6 italic">
                  Micro, Small, and Medium Enterprises (MSMEs) are the lifeblood of India's growth engine. You employ millions, you drive innovation at the grassroots, and you keep the wheels of industry turning in the smallest towns. Yet, when the supply chain breaks or a large client delays your payment, the bank doesn't see your contribution; they only see an unpaid EMI.
                </p>
                <p className="text-lg leading-relaxed text-[#2E2E2E] relative z-10 mb-6">
                  If you are a manufacturer, a service provider, or a wholesaler currently facing the mounting pressure of business debt, please know that you are not alone. Economic volatility is part of the business cycle, and for every MSME that faces a downturn, there is a legal framework designed to help it revive or find a professional exit. At SettleLoans, we don't just see a 'case file'; we see a factory, a staff, and a lifetime of hard work that needs to be protected.
                </p>
                <p className="text-lg leading-relaxed text-[#2E2E2E] relative z-10 font-bold text-[#1F5EFF]">
                  Do not let a temporary liquidity crisis destroy your life's work. Let us build your legal shield today.
                </p>
              </div>
            </section>

            <section id="msme-debt-crisis-2026" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                The Looming MSME Debt Crisis: Why It's Different
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                MSME debt in India is uniquely layered. Often, a small business owner is not just fighting the bank; they are fighting their own creditors and buyers simultaneously. When a 'Big Corporate' delays a payment to an MSME for 180 days, it triggers a chain reaction. The MSME cannot pay its workers, cannot buy raw materials, and eventually defaults on its Bank Term Loan.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                This 'Working Capital Crunch' is precisely why the RBI has created specialized frameworks for MSMEs. Unlike a personal loan for a vacation, an MSME loan default is usually a symptom of systemic delay rather than individual neglect. However, banks are often too quick to initiate SARFAESI proceedings - the 'death warrant' for many small units.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                According to MSME ministry reports, over 10% of all MSME accounts are currently under some form of stress. The 'SMA-2' category (overdue by 61-90 days) is the last stop before an account becomes an NPA. Once the NPA tag is applied, the bank stops being your 'partner' and starts being your 'repossessor'. Breaking this cycle requires aggressive use of the **MSMED Act 2006** and professional negotiation.
              </p>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                <h3 className="text-xl font-bold mb-6">Critical Warning Signs for MSME Owners:</h3>
                <ul className="grid md:grid-cols-2 gap-4 text-sm font-medium">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 shrink-0"></span>
                    <span>Using personal jewelry or gold loans to pay factory EMIs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 shrink-0"></span>
                    <span>Your primary customer has exceeded the 45-day payment limit.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 shrink-0"></span>
                    <span>Bank has categorized your account as SMA-1 or SMA-2.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 shrink-0"></span>
                    <span>You are receiving 'Physical Possession' notices for your unit.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 shrink-0"></span>
                    <span>Employee salaries are being paid in 'half-cycles'.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 shrink-0"></span>
                    <span>Frequent legal notices from NBFCs regarding machinery repo.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="rbi-revival-framework" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                The RBI Framework for the Revival of MSMEs
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                One of the best-kept secrets in Indian banking is the **Framework for the Revival and Rehabilitation of MSMEs**. This is a mandatory RBI directive that requires every bank to have a dedicated 'Committee' to handle stressed MSME accounts with limits up to ₹25 Crore.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Under this framework, if your business is struggling but is 'potentially viable', the bank **must** work with you to restructure the debt. This could include lowering the interest rate, increasing the repayment tenure, or converting your unpaid interest into a fresh 'Funded Interest Term Loan' (FITL).
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The problem is that most branch managers will not tell you about this committee. They will simply push you toward a 'Settlement' or 'Possession'. At SettleLoans, we force the bank to acknowledge this framework, often buying our clients months of 'breathing room' to fix their business turnover before any final resolution.
              </p>
            </section>

            <section id="understanding-sma" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Understanding SMA: The 90-Day Countdown to NPA
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                In banking, 'Account Stress' is measured in three stages of Special Mention Account (SMA). This is the best time to intervene.
              </p>
              <div className="space-y-4 mb-8">
                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm border-l-4 border-l-green-500">
                  <h4 className="font-bold text-lg mb-2">SMA-0: The Warning Light (1-30 days overdue)</h4>
                  <p className="text-sm text-gray-600">The bank starts sending automated reminders. This is the stage to arrange bridge funds or negotiate a temporary deferment. Most MSMEs ignore this, which is a mistake.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm border-l-4 border-l-yellow-500">
                  <h4 className="font-bold text-lg mb-2">SMA-1: The Yellow Zone (31-60 days overdue)</h4>
                  <p className="text-sm text-gray-600">Branch managers will start calling. This is the 'Golden Window' to apply for the RBI Revival Framework. Documentation is key here.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm border-l-4 border-l-red-500">
                  <h4 className="font-bold text-lg mb-2">SMA-2: The Critical Zone (61-90 days overdue)</h4>
                  <p className="text-sm text-gray-600">Your account is on the verge of becoming an NPA. The bank's internal 'Audit' flags your account. Intervention must be aggressive and professional at this stage.</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">Once it hit's Day 91, you are an NPA (Non-Performing Asset). The bank's focus shifts from 'Lending' to 'Foreclosure'. This is where most MSME owners panic, but it is also where the possibility of a **Loan Settlement (OTS)** begins.</p>
            </section>

            <section id="ots-for-msme" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">What is One-Time Settlement (OTS) for MSMEs?</h2>
              <p className="mb-6 text-lg">
                For many MSMEs, the compounding interest on an old business loan eventually surpasses the original principal. At this point, the business is working only to pay interest to the bank. A One-Time Settlement (OTS) is a formal contract where the bank agrees to 'settle' the entire account for a lump-sum amount, which is often 40% to 70% lower than the 'Current Dues'.
              </p>
              <p className="mb-6">
                Banks carry a 'Non-Discretionary OTS Policy' for MSMEs. This means if you meet certain criteria (like your business is genuinely shut or you have lost primary income sources), the bank's manager has a pre-approved authority to give you a discount. The goal for the MSME owner is to get a 'Principal Waiver' - where you pay back less than even the amount you originally borrowed.
              </p>
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-8">
                <h3 className="text-xl font-black text-blue-900 mb-6">When to Choose Settlement over Restructuring?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">1</span>
                    <div><strong>Business Viability:</strong> If the market for your goods has permanently shifted (e.g. your machinery is obsolete), don't restructure. Settle and start anew.</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">2</span>
                    <div><strong>Asset Protection:</strong> If you are likely to lose your family home in an auction, a quick settlement is better than a long court fight.</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">3</span>
                    <div><strong>Mental Peace:</strong> If the debt is affecting your health and family life, a 'Settled' remark on CIBIL is a minor pain compared to a life of harassment.</div>
                  </li>
                </ul>
              </div>
            </section>

            <section id="msme-samadhaan-power" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">MSME Samadhaan: Your Strategic Weapon</h2>
              <p className="mb-6 text-lg">
                The biggest irony for Indian MSMEs is that they are 'Broke' but their 'Balance Sheet' shows millions in receivables. If you cannot pay the bank because a buyer hasn't paid you, the **MSME Samadhaan** portal is your savior.
              </p>
              <p className="mb-6">
                Under the MSMED Act, if you are a Micro or Small enterprise with a valid Udyam Registration, your buyers must pay you within 45 days. If they don't, you can file a case in the Samadhaan portal. This initiates a process where the **MSE Facilitation Council (MSEFC)** can order the buyer to pay you the principal **plus compound interest at 3x the RBI rate**.
              </p>
              <div className="bg-[#2E2E2E] text-white p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold mb-4">Using Samadhaan for Bank Settlement</h3>
                <p className="mb-4 opacity-80">
                  A common strategy we use: We file a Samadhaan case against your biggest buyer. Once the case starts, we use the 'Decree' to show the bank that your money is legally incoming. This forces the bank to stop their aggressive recovery and wait for the Samadhaan payout, or they may even help you discount those receivables to settle your loan today.
                </p>
              </div>
            </section>

            <section id="msmed-act-2006" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">MSMED Act 2006: The Legal Pillar</h2>
              <p className="mb-6 text-lg">
                The **Micro, Small and Medium Enterprises Development (MSMED) Act, 2006** is one of the most powerful laws in India. It was created specifically because the government knew small businesses cannot fight large banks or corporations on equal terms.
              </p>
              <p className="mb-6 font-bold text-[#1F5EFF]">Section 15 and 16 are your most important shields.</p>
              <p className="mb-6">Section 15 mandates that no written contract can override the 45-day payment limit for MSMEs. Section 16 mandates the heavy 3x interest penalty for delays. Most business owners don't use these because they 'fear' the relationship with the client will break. But if the client has already broken your business's back by not paying, the relationship is already dead. Use the law to save your family.</p>
            </section>

            <section id="step-by-step-msme" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">The 7-Step MSME Debt Resolution Roadmap</h2>
              <p className="mb-8 text-center max-w-2xl mx-auto">Do not enter a bank negotiation without a plan. Here is the process we follow at SettleLoans to ensure MSME owners get the maximum possible relief.</p>
              
              <div className="relative border-l-2 border-[#1F5EFF] ml-4 md:ml-8 space-y-12 pb-8">
                {[
                  { step: "Step 1: The Debt & Receivables Audit", content: "We map out exactly what you owe (Loans, CCs, NBFCs) and exactly who owes you (Buyers, GST refunds, Security deposits). This is your 'War Chest' for negotiation." },
                  { step: "Step 2: Udyam & SME Registration Audit", content: "If you don't have Udyam, we get it for you immediately. If you have it, we check if it is active and your categories are correct to ensure 'Priority Sector' protection." },
                  { step: "Step 3: The Hardship Profile", content: "We draft a professional business case showing 'Potential Viability' or 'Genuine Market Hardship'. We include your bank statements, unit closure proofs, and P&L drops." },
                  { step: "Step 4: Facilitation Council / Samadhaan Filing", content: "If your distress is due to buyer delays, we file the Samadhaan case first. This creates a legal 'Record' of your distress caused by third parties, which banks legally respect." },
                  { step: "Step 5: The 'Haircut' Proposal", content: "We send a written settlement proposal to the bank's MSME Nodal Officer. We ask for a waiver of 100% interest and a significant portion of the principal based on your current recovery state." },
                  { step: "Step 6: Defensive Legal Action", content: "If the bank has issued a SARFAESI notice, we file an objection under Section 13(3A) or move the DRT to get a stay order while the settlement is in progress." },
                  { step: "Step 7: The Final OTS & NDC", content: "We ensure the bank issues a clear One-Time Settlement letter. Once you pay, we collect the No Dues Certificate (NDC) and ensure the bank informs CIBIL to mark the account as 'Settled'." }
                ].map((item, i) => (
                  <div key={i} className="relative pl-8">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1F5EFF]"></div>
                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">{item.step}</h4>
                    <p className="text-gray-600 leading-relaxed text-base">{item.content}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="udyam-importance" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Udyam Registration: Your Passport to Protection</h2>
              <p className="mb-8 text-center">Without Udyam Registration, you are just an 'Individual' in the eyes of the bank. With it, you are an 'MSME' protected by the Constitution and RBI. If you haven't done it, do it today. It takes 10 minutes but saves you crores.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 not-prose">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
                  <div className="text-3xl mb-3">🛡️</div>
                  <h5 className="font-black text-slate-800 mb-2">Priority Credit</h5>
                  <p className="text-xs text-slate-600">Banks must meet targets for MSME lending, making them more open to retaining you even during stress.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
                  <div className="text-3xl mb-3">⚖️</div>
                  <h5 className="font-black text-slate-800 mb-2">Arbitration Right</h5>
                  <p className="text-xs text-slate-600">You gain the legal right to sue large buyers in the MSEFC without paying heavy court fees.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
                  <div className="text-3xl mb-3">💰</div>
                  <h5 className="font-black text-slate-800 mb-2">Interest Subvention</h5>
                  <p className="text-xs text-slate-600">Many state governments provide interest waivers for Udyam-registered companies that settle and reopen.</p>
                </div>
              </div>
            </section>

            <section id="section-15-16" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Section 15 & 16: The 'Tooth and Claw' of the Law</h2>
              <p className="mb-6 text-lg">
                For an MSME owner, knowing your rights under the MSMED Act is like carrying a spear into a battle of swords.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-xl mb-8">
                <h3 className="text-xl font-bold text-orange-800 mb-4">The MSME Owner's Bill of Rights:</h3>
                <ul className="space-y-4 text-orange-900/80 font-medium text-base">
                  <li><strong>1. The 45-Day Rule:</strong> No buyer, no matter how powerful, can delay your payment beyond 45 days. If they don't have a written contract, the limit is 15 days.</li>
                  <li><strong>2. The 3x Interest Penalty:</strong> If they delay, they MUST pay you interest at 3 times the RBI bank rate. This interest is taxable for them but it cannot be used as an expense to reduce their tax. It's a double punishment for them.</li>
                  <li><strong>3. The No-Overriding Clause:</strong> Even if your client makes you sign a contract saying \"payment will be made in 90 days\", the MSMED Act says that contract is illegal. The 45-day limit still applies.</li>
                  <li><strong>4. Summary Suit Power:</strong> An award from the MSME council is equivalent to a decree from a High Court. You can use it to freeze the buyer's bank accounts if they don't pay.</li>
                </ul>
              </div>
              <p className="mb-6">At SettleLoans, we have seen MSME owners use their 'delayed interest' from buyers to cover almost 100% of their bank loan principal. It is the most effective way to reach debt freedom without losing your personal assets.</p>
            </section>

            <section id="sarfaesi-msme" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The SARFAESI Threat for MSMEs: How to Object</h2>
              <p className="mb-6 text-lg leading-relaxed">
                If you have missed 3 EMIs, you will receive a notice under **Section 13(2) of the SARFAESI Act**. This is the bank's 'Intent to Seize'. Most MSME owners simply cry or look for a new loan. That's a mistake.
              </p>
              <p className="mb-6">
                You have 60 days to file a **Formal Objection under Section 13(3A)**. In this objection, you must argue why the bank shouldn't seize your unit. For MSMEs, you can argue that the bank failed to offer the 'RBI Revival Framework' or that your dues are in dispute at the MSME Samadhaan council.
              </p>
              <div className="bg-red-50 p-8 border border-red-100 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-2">WARNING: SARFAESI is aggressive but not infallible.</h3>
                <p className="text-sm text-red-900/70">The bank MUST respond to your objection in writing within 15 days. If they don't, or if their response is generic, you can move the **Debt Recovery Tribunal (DRT)** to get a stay on the possession. Never vacate your factory or shop without a court order and professional legal consultation.</p>
              </div>
            </section>

            <section id="msme-success-cases" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Small Businesses That Rose From the Ashes</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose">
                {[
                  {
                    name: "Vikram P.",
                    loc: "Ahmedabad",
                    type: "Machinery Term Loan",
                    outcome: "Settled for 50% waiver + 3 crores recovered",
                    story: "My plastic unit was almost seized. SettleLoans identified that I was an MSME and filed a case against my buyer. We recovered enough interest to settle my entire bank loan and still had capital to switch to a newer product line."
                  },
                  {
                    name: "Ananya R.",
                    loc: "Chennai",
                    type: "Working Capital Overdraft",
                    outcome: "Account Restructured successfully",
                    story: "I didn't want to settle because I wanted to grow. SettleLoans used the RBI Revival Framework to force my bank to increase my tenure from 5 to 10 years. My EMI dropped by 40% and I am now profitable again."
                  }
                ].map((review, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-bold text-[#2E2E2E]">{review.name}</h5>
                        <p className="text-xs text-gray-400">{review.loc}</p>
                      </div>
                      <div className="ml-auto text-yellow-500">★★★★★</div>
                    </div>
                    <div className="mb-4 text-xs font-mono bg-green-50 p-2 rounded border border-green-100 uppercase tracking-tighter">
                      <span className="block text-green-700 font-bold">{review.outcome}</span>
                    </div>
                    <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="why-settleloans-msme" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">How SettleLoans Empowers MSME Owners</h2>
              <p className="mb-6 leading-relaxed">We don't just 'resolve' debt; we rescue industries. Our team understands the nuances of the MSMED Act, the SARFAESI processes, and the inner workings of bank committees. We have handled thousands of cases for small businesses across India, from textile units in Surat to IT service firms in Pune.</p>
              <div className="bg-[#1F5EFF] text-white p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold mb-4">Our Commitment to Your Business Survival</h3>
                <ul className="space-y-3 text-sm opacity-90">
                  <li className="flex items-start gap-2">✓ Stop Possession: Our first goal is to ensure your factory stays in your hands while we negotiate.</li>
                  <li className="flex items-start gap-2">✓ Recover Receivables: We use the Samadhaan portal to get your 'locked' money back with high interest.</li>
                  <li className="flex items-start gap-2">✓ Legal Shield: We manage all communication with recovery agents and bank legal departments.</li>
                  <li className="flex items-start gap-2">✓ Deep Discounts: Our experts know the exact 'Haircut' percentage a bank is authorized to accept for MSME accounts.</li>
                </ul>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions for MSMEs</h2>
              <div className="space-y-4 not-prose">
                {[
                  { q: "Is MSME loan settlement the same as personal loan settlement?", a: "No. MSME settlement is governed by specialized RBI frameworks and the MSMED Act 2006, which provides more legal protection than a standard personal debt case." },
                  { q: "Does the bank need my consent to start SARFAESI proceedings?", a: "No, they can start it automatically once you default for 90 days. However, they must give you a 60-day notice to object, and that is where we intervene." },
                  { q: "Can I get a new business loan after settling an old MSME loan?", a: "It will be difficult for 3 to 5 years. However, if you have a viable unit with good GST turnover, specialized NBFCs may still fund you but at a higher interest rate." },
                  { q: "What documents are needed for MSME loan restructuring?", a: "You need 3 years of audited balance sheets, Udyam certificate, 12 months' GST returns, bank statements, and a 'Viability Report' showing your recovery plan." },
                  { q: "Can my big corporate buyer be jailed for not paying an MSME?", a: "Not jailed, but their bank accounts can be frozen, and the interest penalty (3x RBI rate) is so high that it often forces them to settle immediately." },
                  { q: "How long does a Samadhaan case take to resolve?", a: "Legally, it should be resolved within 90 days. In practice, it can take 6-12 months, but even filing the case gives you massive leverage with your bank." },
                  { q: "What is the 'Fresh Start' for MSME proprietors?", a: "For individual proprietors, the IBC (Insolvency and Bankruptcy Code) has provisions to discharge debt if the income is below a certain threshold. We specialize in this legal exit." },
                  { q: "Should I sign an OTS if I haven't recovered my receivables yet?", a: "No. You should use the Receivables as a negotiation tool. We often tell the bank: 'Don't settle for 10 lakhs when we can recover 30 lakhs from my buyer together.'" },
                  { q: "Is there any protection for the owner's personal property in a business loan?", a: "Only if the property was NOT given as collateral. If your house was not mortgaged, the bank cannot take it easily for a business debt. If it was mortgaged, you need a SARFAESI defense." },
                  { q: "Why hire SettleLoans instead of a local lawyer?", a: "Most lawyers only understand the 'Court'. We understand 'Banking'. We know the bank manager's targets, the NPA provisioning costs, and how to get a deal done outside the court room quickly." }
                ].map((faq, i) => (
                  <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20">
                    <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white transition-colors">
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

            <div className="mt-16 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-400 text-sm italic">Disclaimer: MSME debt resolution involves complex legal frameworks like SARFAESI, MSMED Act, and RBI Prudentials. Results depend on individual bank policies and the merit of the case. SettleLoans is a professional consultancy and not an adjudicatory body.</p>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden mt-16 mb-8">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                  <h3 className="text-2xl font-black mb-2">Save Your MSME</h3>
                  <p className="opacity-90 text-sm">Don't lose your life's work to a temporary crisis. Speak to our MSME experts today.</p>
                </div>
                <div className="p-8 text-center">
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                    Free Business Audit
                  </Link>
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
                  <h3 className="text-lg font-black text-white px-2">MSME Shield</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                    Stop aggressive bank recovery and recover your delayed payments legally today.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                    Talk to MSME Desk
                  </Link>
                  <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">ISO Certified Advisors</p>
                </div>
              </div>

              {/* Related Pages Container */}
              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Business Guidance</h3>
                <ul className="space-y-4 text-sm font-bold">
                  <li>
                    <Link href="/best-lawyer-for-msme-business-loan-dispute" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      MSME Loan Disputes
                    </Link>
                  </li>
                  <li>
                    <Link href="/business-corporate-loan-matters" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Corporate Loan Matters
                    </Link>
                  </li>
                  <li>
                    <Link href="/mudra-loan-settlement-legal-help" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Mudra Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/working-capital-loan-legal-help" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Working Capital Help
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </aside>

        </div>

        {/* Bottom CTA Section */}
        <section className="w-full bg-[#1F5EFF] py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6">India's MSMEs are Built on Grit.</h2>
                <p className="text-white/90 text-lg md:text-xl mb-10">Don't let a bad year end a good business. Get the legal strength and financial strategy you need to thrive again.</p>
                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-5 px-12 rounded-xl text-xl hover:scale-105 transition-all shadow-2xl">
                    Get Free MSME Advisory
                </Link>
            </div>
        </section>

      </main>
    </div>
  );
}
