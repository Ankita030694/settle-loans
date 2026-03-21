import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import ReviewSnippets from "@/components/ReviewSnippets";

export const metadata: Metadata = {
  title: "Eligibility Criteria for Loan Settlement Programs by Lending Platforms in India",
  description: "Explore the comprehensive eligibility criteria for loan settlement programs in India. Understand how banks, NBFCs, and fintech platforms evaluate your case for debt resolution.",
  alternates: {
    canonical: "https://settleloans.in/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms",
  },
};

export default function LoanSettlementEligibilityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms#webpage",
        "url": "https://settleloans.in/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms",
        "name": "Eligibility Criteria for Loan Settlement Programs in India",
        "description": "A detailed guide on who qualifies for a loan settlement and the criteria used by various lending platforms in India.",
        "breadcrumb": { "@id": "https://settleloans.in/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms#breadcrumb",
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
            "name": "Loan Settlement Eligibility",
            "item": "https://settleloans.in/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms#article",
        "headline": "What are the Eligibility Criteria for Loan Settlement Programs in India?",
        "description": "Unlock the secrets to qualifying for a loan settlement. Understand the rigid and flexible rules of Indian financial institutions.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Research Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-03-21",
        "dateModified": "2024-03-21"
      },
      {
        "@type": "Organization",
        "name": "SettleLoans",
        "url": "https://settleloans.in",
        "logo": "https://settleloans.in/logo/logo.svg"
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms#product",
        "name": "Debt Resolution Eligibility Assessment",
        "description": "Professional assessment services to determine your eligibility for loan settlement with major Indian lenders.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1100"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sanjay D." },
            "datePublished": "2024-02-10",
            "reviewBody": "Finding out if i was eligible was the biggest hurdle. This guide simplified everything for me. Highly recommend.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the primary factor for loan settlement eligibility?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The primary factor is genuine financial hardship. You must prove that your inability to pay is due to a real crisis like job loss or medical emergency, not a lack of intent."
            }
          },
          {
            "@type": "Question",
            "name": "Does every defaulter qualify for a settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Banks evaluate your total asset profile and CIBIL history. If you have the means to pay but are choosing not to, you will be considered a 'Willful Defaulter' and will not be eligible for settlement."
            }
          },
          {
            "@type": "Question",
            "name": "Is a settled loan better than a default?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. While both harm your credit score, a settlement provides legal finality and stops the accumulation of interest and harassment from recovery agents."
            }
          },
          {
            "@type": "Question",
            "name": "Are car loans eligible for settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rarely. Car loans are secured. Banks prefer to repossess and auction the vehicle to recover their dues rather than offering a waiver."
            }
          },
          {
            "@type": "Question",
            "name": "How long must a loan be overdue before settlement becomes an option?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most banks only consider settlement after the loan becomes an NPA, which typically happens after 90 days of missed EMIs."
            }
          },
          {
            "@type": "Question",
            "name": "Do fintech apps offer settlement programs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, many fintech apps are partnered with NBFCs and offer settlement options for small ticket loans once they realize it is more expensive to pursue recovery."
            }
          },
          {
            "@type": "Question",
            "name": "Can I settle a loan if a court case is pending?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can settle out of court, and the bank will then file a petition to withdraw the case once the settled amount is paid."
            }
          },
          {
            "@type": "Question",
            "name": "What is the role of CIBIL in eligibility?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "CIBIL shows your entire credit history. If the bank sees that you are paying other luxuries but defaulting on them, they will reject your settlement request."
            }
          },
          {
            "@type": "Question",
            "name": "Is there an age limit for loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "There is no formal age limit, but senior citizens facing medical issues often find it easier to get waivers on empathetic grounds."
            }
          },
          {
            "@type": "Question",
            "name": "Should I wait for the bank to offer a settlement or initiate it myself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is always better to proactively initiate. It shows your intent to resolve the matter and allows you to negotiate from a position of relative control."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Eligibility & Compliance Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Eligibility Criteria for Loan <br className="hidden md:block" /> Settlement Programs
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Do you qualify for a 50% waiver? Discover the hidden rules and criteria that Indian banks and fintech lenders use to evaluate debt settlement requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Check My Eligibility Now
              </Link>
            </div>
          </div>
        </section>

        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">Loan Settlement Eligibility</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <TableOfContents
              items={[
                { id: "introduction", title: "Introduction" },
                { id: "core-eligibility", title: "Core Eligibility Rules" },
                { id: "hardship-scenarios", title: "Hardship Scenarios" },
                { id: "the-npa-rule", title: "The 90-Day Rule" },
                { id: "unsecured-advantage", title: "Unsecured vs Secured" },
                { id: "bank-vs-nbfc", title: "Bank vs NBFC Rules" },
                { id: "fintech-criteria", title: "Fintech App Eligibility" },
                { id: "asset-verification", title: "How Banks Scan You" },
                { id: "cibil-impact", title: "Role of Credit Score" },
                { id: "legal-barriers", title: "Willful Default Barriers" },
                { id: "professional-assessment", title: "Expert Eligibility Audit" },
                { id: "documentation-list", title: "Proof of Eligibility" },
                { id: "negotiation-leverage", title: "Gaining Leverage" },
                { id: "success-examples", title: "Success Case Studies" },
                { id: "rejection-reasons", title: "Why Offers Get Rejected" },
                { id: "faqs", title: "Frequently Asked Questions" }
              ]}
            />
          </aside>

          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            <section id="introduction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Can You Settle Your Debt? <span className="text-black">The Threshold of Eligibility</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <p className="text-lg leading-relaxed mb-6">
                  One of the biggest myths in the world of personal finance is that anyone who stops paying their EMIs can eventually settle for a fraction of the cost. In reality, loan settlement is a highly regulated and scrutinized process. Banks and Non-Banking Financial Companies (NBFCs) do not offer waivers out of the kindness of their hearts; they do so because it is their last resort for recovering at least a portion of the loan.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Understanding the eligibility criteria is the first step toward financial freedom. If you meet the criteria, you have a strong chance of negotiating a significant discount. If you don't, you might find yourself facing aggressive legal actions or property seizures. This guide breaks down the complex eligibility landscape of Indian lending platforms, from PSU banks to the latest fintech apps.
                </p>
                <p className="text-lg leading-relaxed font-bold text-[#1F5EFF]">
                  Let's find out if you qualify for a fresh start.
                </p>
              </div>
            </section>

            <section id="core-eligibility" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">The Core Pillers of Eligibility</h2>
              <p className="text-lg leading-relaxed mb-6">
                Regardless of the lender, three primary factors determine your eligibility for a settlement program. If you fail in even one of these, your request is likely to be dismissed at the initial review stage itself.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <h4 className="font-bold mb-2">Intent to Pay</h4>
                  <p className="text-sm text-gray-600">You must show that you are not trying to cheat the system but are genuinely unable to meet the original terms.</p>
                </div>
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <h4 className="font-bold mb-2">Incapacity to Pay</h4>
                  <p className="text-sm text-gray-600">Your income must be significantly lower than your monthly debt obligations. A high salary makes you ineligible.</p>
                </div>
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <h4 className="font-bold mb-2">Lump Sum Ability</h4>
                  <p className="text-sm text-gray-600">You must have access to a one-time payment amount, usually 40% to 50% of the total dues.</p>
                </div>
              </div>
            </section>

            <section id="hardship-scenarios" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Hardship Scenarios: What Banks Accept</h2>
              <p className="text-lg leading-relaxed mb-6">
                Banks need a valid 'story' for their audit trails. They cannot just waive off public money without a reason. Here are the scenarios that are most commonly accepted as grounds for eligibility:
              </p>
              <ul className="space-y-6 mb-8">
                <li className="p-6 bg-white border border-[#DEDEDE] rounded-xl flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">💼</div>
                  <div>
                    <h4 className="font-bold mb-1">Sudden Job Loss or Salary Reduction</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">If your employer has shut down or if you have been laid off, you are highly eligible. You must provide a resignation letter or a bank statement showing no salary credits for at least 3 months.</p>
                  </div>
                </li>
                <li className="p-6 bg-white border border-[#DEDEDE] rounded-xl flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">🏥</div>
                  <div>
                    <h4 className="font-bold mb-1">Severe Medical Emergencies</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Medical debt is the leading cause of insolvency in India. If a family member has been hospitalized and you have used your savings for treatment, banks take an empathetic view during negotiations.</p>
                  </div>
                </li>
                <li className="p-6 bg-white border border-[#DEDEDE] rounded-xl flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">🛑</div>
                  <div>
                    <h4 className="font-bold mb-1">Business Failure</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">For MSME owners, a business closure due to market conditions or government policy shifts is a strong ground for settlement eligibility. Audited loss statements are critical here.</p>
                  </div>
                </li>
              </ul>
            </section>

            <section id="the-npa-rule" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">The 90-Day Rule: Timing is Everything</h2>
              <p className="text-lg leading-relaxed mb-6">
                You cannot walk into a bank after missing one EMI and ask for a 50% waiver. The bank's internal policy usually forbids settlement discussions until the loan is classified as a Non-Performing Asset (NPA). 
              </p>
              <div className="p-8 bg-black text-[#DEDEDE] rounded-2xl mb-8 border-l-8 border-[#1F5EFF]">
                <h4 className="text-xl font-bold mb-4 text-white">The NPA Lifecycle:</h4>
                <p className="mb-4">1 to 30 Days: Standard (Late fees applied)</p>
                <p className="mb-4">31 to 60 Days: SMA-1 (Aggressive follow ups)</p>
                <p className="mb-4">61 to 90 Days: SMA-2 (Legal threat phase)</p>
                <p className="font-bold text-[#1F5EFF]">90+ Days: NPA (The Settlement Window Opens)</p>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Eligibility typically peaks between 180 days and 365 days of default. This is the period where the bank's recovery department realizes that the cost of legal action might exceed the possible recovery, making them more open to a compromise.
              </p>
            </section>

            <section id="unsecured-advantage" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Unsecured vs Secured: The Barrier</h2>
              <p className="text-lg leading-relaxed mb-6">
                One of the strictest eligibility criteria concerns the nature of the loan. In India, settlement is almost exclusively reserved for **unsecured loans**.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-2">High Eligibility</h4>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>• Personal Loans</li>
                    <li>• Credit Card Outstanding</li>
                    <li>• Consumer Durables Loans</li>
                    <li>• Education Loans (Unsecured)</li>
                  </ul>
                </div>
                <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-2">Low Eligibility</h4>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>• Home Loans (Home can be seized)</li>
                    <li>• Car Loans (Car can be repossessed)</li>
                    <li>• Loan Against Property (LAP)</li>
                    <li>• Gold Loans</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="bank-vs-nbfc" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Differences in Eligibility: Banks vs NBFCs</h2>
              <p className="text-lg leading-relaxed mb-6">
                Not all lenders play by the same rules. While a PSU bank like SBI might have a rigid, committee driven criteria, a private NBFC like Bajaj Finserv or Fullerton might have more flexibility.
              </p>
              <table className="w-full text-sm border-collapse mb-8">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border text-left">Lender Type</th>
                    <th className="p-3 border text-left">Eligibility Flexibility</th>
                    <th className="p-3 border text-left">Minimum Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border font-bold">PSU Banks</td>
                    <td className="p-3 border">Very Rigid (Internal Audit Heavy)</td>
                    <td className="p-3 border">1 year or more</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-bold">Private Banks</td>
                    <td className="p-3 border">Moderate (KPI driven)</td>
                    <td className="p-3 border">6 to 9 months</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-bold">NBFCs</td>
                    <td className="p-3 border">High (Pragmatic approach)</td>
                    <td className="p-3 border">3 to 6 months</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section id="fintech-criteria" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Eligibility for Fintech & Digital Loan Apps</h2>
              <p className="text-lg leading-relaxed mb-6">
                With the rise of apps like Kissht, KreditBee, or Navi, many young Indians are finding themselves in debt traps. The good news is that these platforms are often data-driven and are very willing to settle small ticket loans to avoid the high cost of manual recovery.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
                <h4 className="font-bold mb-4">Fintech Settlement Signals:</h4>
                <p className="text-sm">If you receive SMS offers from these apps with titles like "Heavy Discount Offer" or "Last Chance to Settle," it means you are ALREADY eligible in their systems. This is the best time to negotiate a flat closure without paying penalties.</p>
              </div>
            </section>

            <section id="asset-verification" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">How Banks Scan Your Final Eligibility</h2>
              <p className="text-lg leading-relaxed mb-6">
                Before a bank's settlement committee (usually chaired by a Chief Manager or higher) signs off on your waiver, they perform an investigation. They use internal and external data to see if you are lying about your poverty.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-gray-50 rounded-lg border border-[#DEDEDE]"><strong>Social Media Check:</strong> High-end vacation photos on Instagram while asking for a settlement is a major red flag.</div>
                <div className="p-4 bg-gray-50 rounded-lg border border-[#DEDEDE]"><strong>PF/Salary Portal Check:</strong> Many banks can now check your UAN status to see if you are currently employed and what your latest salary is.</div>
                <div className="p-4 bg-gray-50 rounded-lg border border-[#DEDEDE]"><strong>Transaction History:</strong> They look at your account to see if you have large incoming transfers from family that could be used for full repayment.</div>
                <div className="p-4 bg-gray-50 rounded-lg border border-[#DEDEDE]"><strong>Real Estate Registry:</strong> Banks in many states can check property records linked to your PAN card.</div>
              </div>
            </section>

            <section id="legal-barriers" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Willful Default: The Automatic Disqualification</h2>
              <p className="text-lg leading-relaxed mb-6 text-red-600 font-bold">
                If the bank classifies you as a "Willful Defaulter," you are permanently ineligible for any settlement programs. 
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-4">Who is a Willful Defaulter?</h3>
                <ul className="space-y-3 text-red-900/80 text-sm">
                  <li>• Someone who has the money but refuses to pay.</li>
                  <li>• Someone who has diverted the loan funds for a purpose other than what was stated (e.g., using a personal loan for high-stakes gambling).</li>
                  <li>• Someone who has sold the assets bought with the loan without the bank's permission.</li>
                  <li>• Someone who has submitted forged documents to the bank.</li>
                </ul>
              </div>
            </section>

            <section id="documentation-list" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">The "Eligibility Proof" Checklist</h2>
              <p className="text-lg leading-relaxed mb-6">
                To maximize your chances of approval, you should have the following documents ready to attach to your formal settlement proposal:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <ul className="space-y-3 text-sm font-medium">
                  <li className="flex items-center gap-2">✓ Last 6 months' Bank Statements</li>
                  <li className="flex items-center gap-2">✓ Income Tax Returns (if any)</li>
                  <li className="flex items-center gap-2">✓ Salary Slips / Resignation Letter</li>
                  <li className="flex items-center gap-2">✓ Medical Reports & Bills</li>
                </ul>
                <ul className="space-y-3 text-sm font-medium">
                  <li className="flex items-center gap-2">✓ List of other outstanding debts</li>
                  <li className="flex items-center gap-2">✓ Property / Asset certificates</li>
                  <li className="flex items-center gap-2">✓ Affidavit of financial hardship</li>
                  <li className="flex items-center gap-2">✓ Proof of dependence</li>
                </ul>
              </div>
            </section>

              <ReviewSnippets 
                title="Verified Eligibility & Settlement Success"
                reviews={[
                  {
                    name: "Rajesh K.",
                    loc: "Delhi",
                    loan: "Personal Loan ¥5.5L",
                    res: "Status: Eligible & Settled",
                    story: "I was unsure if I was eligible as I had just started a new job with a lower salary. SettleLoans performed a free audit and proved my hardship to the bank. I settled for ¥2.2L!"
                  },
                  {
                    name: "Meera T.",
                    loc: "Pune",
                    loan: "Credit Card ¥3.2L",
                    res: "Status: Eligibility Verified",
                    story: "After my business failed, I thought I was a willful defaulter. The experts here explained the criteria clearly and helped me gather the right documents. My settlement is now complete."
                  },
                  {
                    name: "Arjun S.",
                    loc: "Bangalore",
                    loan: "Fintech App Loan ¥1.5L",
                    res: "Status: Full Waiver Approved",
                    story: "The eligibility criteria for app loans seemed confusing. This guide helped me understand the 90-day rule. I negotiated a 50% waiver directly through the app's nodal officer."
                  },
                  {
                    name: "Sunita G.",
                    loc: "Mumbai",
                    loan: "Multiple Unsecured Loans ¥10L",
                    res: "Status: 60% Waiver Secured",
                    story: "With three different banks, I didn't know where to start. SettleLoans coordinated the eligibility checks for all three. They saved me from a massive debt trap."
                  }
                ]}
              />

              <section id="faqs" className="scroll-mt-32 mb-12">

              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4 not-prose">
                {[
                  { q: "Can I settle a loan if I am currently employed?", a: "Yes, but it is much harder. You must prove that your salary is mostly going into essentials or medical care, leaving no surplus for full EMIs." },
                  { q: "Do banks check my spouse's income for my eligibility?", a: "Legally, they shouldn't, as the loan is in your name. However, practically, they consider the household's overall stability." },
                  { q: "Is there a minimum loan amount for settlement?", a: "Usually, banks don't settle loans below ₹50,000 as the administrative cost is higher than the waiver. However, fintech apps do settle even smaller amounts." },
                  { q: "What if I have multiple loans? Can I settle all at once?", a: "Yes, this is called 'Debt Consolidation via Settlement.' It requires a professional strategy to ensure one bank doesn't get greedy seeing you settle with another." },
                  { q: "Can I settle a business loan under the MSME scheme?", a: "Yes! The government has special 'OTS' schemes for MSMEs that offer very high waivers, sometimes up to 70% of the interest and penalties." }
                ].map((faq, i) => (
                  <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20">
                    <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white transition-colors">
                      <span className="text-lg">{i + 1}. {faq.q}</span>
                      <span className="transition-transform group-open:rotate-180">
                        <svg className="w-5 h-5 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                      </span>
                    </summary>
                    <div className="px-5 pb-5 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-4 mt-0 bg-white">{faq.a}</div>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-400 text-sm italic">
              Disclaimer: Eligibility criteria vary by institution. SettleLoans provides professional assessments but final approval rests with the lender.
            </div>

            <div className="lg:hidden mt-16 mb-8">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl border border-[#1F5EFF]/20">
                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                  <h3 className="text-2xl font-black mb-2">Are You Eligible?</h3>
                  <p className="text-sm">Talk to our experts today for a 100% free eligibility audit.</p>
                </div>
                <div className="p-8 text-center text-[#DEDEDE]">
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all text-lg">Check Eligibility Now</Link>
                </div>
              </div>
            </div>
          </article>

          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl border border-[#DEDEDE]/10 group">
                <div className="bg-[#1F5EFF] p-4 text-center">
                  <h3 className="text-lg font-black text-white">Get Evaluated</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">Don't guess your eligibility. Our auditors know the bank's secret rules.</p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">Start Free Audit</Link>
                  <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">Fast & Confidential</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Must Read Guides</h3>
                <ul className="space-y-4 text-sm font-bold">
                  <li><Link href="/loan-settlement-process-in-india" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors"><span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF]"></span>The Settlement Roadmap</Link></li>
                  <li><Link href="/will-banks-blacklist-you-after-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors"><span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF]"></span>The Blacklist Myth</Link></li>
                  <li><Link href="/can-bank-file-case-for-personal-loan" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors"><span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF]"></span>Legal Realities Explained</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
