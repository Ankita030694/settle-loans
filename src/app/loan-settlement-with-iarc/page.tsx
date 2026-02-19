import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Loan Settlement with IARC | How to Manage Loan with No Job - SettleLoans",
  description: "Struggling with IARC loan settlement or can't pay EMI due to job loss? Learn the process of settling with International Asset Reconstruction Company and your legal rights.",
  alternates: {
    canonical: "https://settleloans.in/loan-settlement-with-iarc",
  },
};

export default function IARCPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/loan-settlement-with-iarc#webpage",
        "url": "https://settleloans.in/loan-settlement-with-iarc",
        "name": "Loan Settlement with IARC | How to Manage Loan with No Job",
        "description": "Comprehensive guide on settling loans with International Asset Reconstruction Company and managing debt during unemployment.",
        "breadcrumb": { "@id": "https://settleloans.in/loan-settlement-with-iarc#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/loan-settlement-with-iarc#breadcrumb",
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
            "name": "Loan Settlement with IARC",
            "item": "https://settleloans.in/loan-settlement-with-iarc"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/loan-settlement-with-iarc#article",
        "headline": "Loan Settlement with IARC: Complete Guide for Unemployed Borrowers",
        "description": "Detailed insights into the International Asset Reconstruction Company settlement process and financial survival strategies.",
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
        "datePublished": "2025-02-05",
        "dateModified": "2025-02-05",
        "mainEntityOfPage": { "@id": "https://settleloans.in/loan-settlement-with-iarc#webpage" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/loan-settlement-with-iarc#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is IARC and why does it have my loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "IARC stands for International Asset Reconstruction Company. It is an RBI registered entity that buys non performing assets or unpaid loans from banks to recover the money. Your bank likely sold your debt to them after you defaulted."
            }
          },
          {
            "@type": "Question",
            "name": "Can I settle my loan with IARC for a lower amount?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, IARC is often open to One Time Settlements specifically if you can prove genuine financial hardship like job loss or medical crisis. Most borrowers can save a significant portion of the total outstanding."
            }
          },
          {
            "@type": "Question",
            "name": "How to manage loan with no job in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Managing a loan without a job requires proactive communication with the lender. You should inform them of your status immediately, seek a moratorium, or explore restructuring. If the debt is unmanageable, a legal settlement is a viable exit strategy."
            }
          },
          {
            "@type": "Question",
            "name": "Will I be arrested if I cannot pay IARC EMIs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Loan default is a civil matter in India. You cannot be arrested for simple inability to pay. However, you must respond to legal notices and attend court if a case is filed under the Negotiable Instruments Act for bounced cheques."
            }
          },
          {
            "@type": "Question",
            "name": "What is the process of IARC settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The process involves contacting IARC, submitting hardship documents, negotiating the final amount, receiving a formal settlement letter, making the payment, and obtaining a No Dues Certificate."
            }
          },
          {
            "@type": "Question",
            "name": "Does IARC report to CIBIL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, IARC is required by the RBI to share borrower data with credit bureaus. A settlement will be marked as 'Settled' on your report, which impacts your score but stops the negative reporting of defaults."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get a new loan after settling with IARC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not immediately. You will need to rebuild your credit score over eighteen to twenty four months by using secured credit instruments before becoming eligible for fresh unsecured loans."
            }
          },
          {
            "@type": "Question",
            "name": "How much discount does IARC offer in settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Discounts vary based on the age of the debt and your hardship proof. In many cases, waivers range from forty percent to seventy percent of the total outstanding amount."
            }
          },
          {
            "@type": "Question",
            "name": "What is the IARC resolution portal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is an online platform where borrowers can view their account status, make payments, and request restructuring or settlements directly with the company."
            }
          },
          {
            "@type": "Question",
            "name": "Are there government schemes for unemployed loan borrowers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Schemes like PMRY and PMMY focus on self employment and small business support. While they don't directly pay off your private bank loans, they offer financial pathways for income generation."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/loan-settlement-with-iarc#product",
        "name": "IARC Loan Settlement & Resolution",
        "description": "Expert assistance in settling loans acquired by International Asset Reconstruction Company (IARC).",
        "provider": {
          "@type": "Organization",
          "name": "SettleLoans",
          "url": "https://settleloans.in"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1250"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit Saxena" },
            "datePublished": "2024-12-10",
            "reviewBody": "SettleLoans helped me close my IARC acquired debt for fifty percent less. Their legal team stopped the agent calls within a week.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
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
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              International Asset Reconstruction Company Help
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Mastering Loan Settlement <br className="hidden md:block"/> with IARC in India
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Facing debt from International Asset Reconstruction Company while being unemployed? Learn how to manage your loan with no job and negotiate a legal settlement.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-12 rounded-[12px] hover:scale-105 transition-all duration-300 text-lg shadow-xl">
                Get Debt Relief Now
              </Link>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1F5EFF]/5 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#1F5EFF]/5 to-transparent pointer-events-none"></div>
        </section>

        {/* Breadcrumb */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-3 text-xs md:text-sm text-[#747474]">
                <li>
                  <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
                </li>
                <li><span className="text-gray-300">/</span></li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">Loan Settlement with IARC</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-8 relative max-w-[1920px]">
          
          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/4 max-w-[300px] relative">
            <div className="sticky top-28">
              <TableOfContents 
                items={[
                  { id: "what-is-iarc", title: "What is IARC?" },
                  { id: "arc-role", title: "Role of ARCs" },
                  { id: "settlement-guide", title: "Settlement Guide" },
                  { id: "no-job-strategy", title: "Strategies for Unemployed" },
                  { id: "legal-rights", title: "Your Legal Rights" },
                  { id: "gov-schemes", title: "Government Schemes" },
                  { id: "professional-help", title: "Why Professional Help" },
                  { id: "credit-repair", title: "Rebuilding Credit" },
                  { id: "success-stories", title: "Success Stories" },
                  { id: "faqs", title: "Important FAQs" }
                ]}
              />
            </div>
          </aside>

          {/* Middle Column: Content */}
          <article className="w-full lg:w-2/4 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="what-is-iarc" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Understanding IARC: The <span className="text-[#1F5EFF]">International Asset Reconstruction Company</span>
              </h2>
              <p className="text-xl leading-relaxed mb-8 text-gray-700">
                International Asset Reconstruction Company or IARC is a prominent player in the Indian distressed debt market. Registered with the Reserve Bank of India as an Asset Reconstruction Company, IARC specializes in acquiring Non Performing Assets from banks and other financial institutions. When a bank finds it difficult to recover a loan after multiple defaults, they often sell the debt to an ARC like IARC at a discounted rate. This is a common practice in modern banking designed to keep the financial system stable and fluid.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                From that point onward, IARC becomes the legal owner of your loan. You no longer owe the money to your original bank; you owe it to IARC. This shift can be intimidating for many borrowers, especially those who are already struggling with financial instability or job loss. However, understanding how IARC works is the first step toward finding a resolution. They are not a collection agency in the traditional sense; they are a specialized financial entity with the power to resolve your debt permanently.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The history of IARC in India is rooted in the SARFAESI Act of 2002, which allowed for the creation of companies that could buy bad loans and work on their recovery. IARC has built a reputation for professional management of these assets. They have institutional backing from major banks and financial entities, which means they operate within a strict regulatory framework. This is actually good news for you because it means they are bound by laws and rules that you can use to your advantage.
              </p>
              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 shadow-sm mb-12">
                <p className="text-lg text-blue-900 leading-relaxed font-medium">
                  IARC operates with the goal of resolving these bad debts through restructuring or settlements. Their approach is often more flexible than traditional banks because they have purchased the debt at a lower cost, giving them more room to negotiate with borrowers who show genuine hardship. While a bank might have strict internal policies that prevent them from dropping below a certain percentage, an ARC has a different internal math that often allows for deeper discounts.
                </p>
              </div>
            </section>

            <section id="arc-role" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">The Role of ARCs in India's Financial Ecosystem</h2>
              <p className="text-lg leading-relaxed mb-8">
                Asset Reconstruction Companies play a vital role in cleaning up the balance sheets of Indian banks. By offloading bad loans to ARCs, banks can focus on their core business of lending to productive sectors. IARC, backed by strong institutional investors, brings professional debt management practices to the table. This systemic cleanup is essential for the health of the Indian economy, as it prevents banks from becoming stagnant with unrecoverable debt.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold text-[#1F5EFF] mb-4">Debt Acquisition</h3>
                  <p className="text-gray-600">IARC buys pools of loans from banks that have been unpaid for more than ninety days, taking over the entire recovery process. They use sophisticated algorithms and historical data to determine which loans are worth purchasing.</p>
                </div>
                <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold text-[#1F5EFF] mb-4">Account Resolution</h3>
                  <p className="text-gray-600">Unlike collection agencies that only chase payments, ARCs like IARC have the legal authority to settle or restructure the entire loan amount. They are empowered by the RBI to make decisions that best resolve the asset.</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                 If your loan has been transferred to IARC, it typically means your account had reached a critical stage of default with your original lender. While this feels like an escalation, it also opens a new window for negotiation that might not have existed with a rigid bank structure. Many borrowers find that once their debt moves to IARC, the agents they deal with are more informed about settlement possibilities than the ground level recovery staff at a retail bank.
              </p>
              <p className="text-lg leading-relaxed">
                The RBI regulates ARCs under a separate set of guidelines than commercial banks. This means they have different reporting requirements and different incentives. For a bank, a bad loan is a mark of failure in their underwriting. For IARC, a bad loan is their raw material. They are experts in resolving these situations, and they are motivated to close files quickly to maintain their own portfolio health. This creates a perfect opportunity for a borrower who is ready to settle and close the chapter on their debt.
              </p>
            </section>

            <section id="settlement-guide" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">Detailed Guide to IARC Loan Settlement Process</h2>
              <p className="text-lg leading-relaxed mb-8">
                Settling with IARC requires a methodical approach. Because they are a specialized firm, their internal processes for settlement are well defined. It is not just about paying less money; it is about following a legal protocol that ensures your debt is wiped clean from the system. Here is the step by step breakdown of how to navigate this journey:
              </p>
              <div className="space-y-10">
                <div className="relative pl-10 border-l-2 border-[#1F5EFF]/20">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#1F5EFF] border-4 border-white"></div>
                  <h4 className="text-2xl font-black mb-2">1. Verification and Access</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">The first step is always verification. You must ensure that IARC is the actual owner of your debt. This is done by checking the notice of assignment sent by your bank. You can also log into the IARC Resolution Portal. This portal is a central hub where you can see your current outstanding amount, including any interest or penalties that have been added.</p>
                  <p className="text-gray-600 leading-relaxed">Checking your status on the portal gives you the numbers you need for negotiation. Do not rely on what an agent tells you over the phone; always verify the numbers on the official dashboard first.</p>
                </div>
                <div className="relative pl-10 border-l-2 border-[#1F5EFF]/20">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#1F5EFF] border-4 border-white"></div>
                  <h4 className="text-2xl font-black mb-2">2. Documentation of Financial Hardship</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">IARC will not grant a settlement just because you asked. They need proof. This is where you prepare your Hardship File. If you have no job, you need your termination letter or salary slips showing a ninety percent pay cut. If you have medical bills or other crisis documentation, include it.</p>
                  <p className="text-gray-600 leading-relaxed">The goal is to prove that you are insolvent, meaning your liabilities far exceed your assets. When IARC sees that you have no property, no high income, and no luxury assets, they realize that a settlement is the only way they will ever recover any money at all.</p>
                </div>
                <div className="relative pl-10 border-l-2 border-[#1F5EFF]/20">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#1F5EFF] border-4 border-white"></div>
                  <h4 className="text-2xl font-black mb-2">3. The Strategic Negotiation</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">This is where most people fail. Negotiation is a psychological game. You should start with an offer that is lower than what you can actually afford, usually around thirty percent of the principal amount. IARC will counter with seventy percent. The middle ground is usually where the deal happens.</p>
                  <p className="text-gray-600 leading-relaxed">During this phase, keep all communication professional. Do not get emotional or angry. State the facts: you have a limited lump sum available, and you want to close the case today. Professional negotiators like SettleLoans handle this daily and know the exact pressure points that make IARC agree to a lower amount.</p>
                </div>
                <div className="relative pl-10 border-l-2 border-[#1F5EFF]/20">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#1F5EFF] border-4 border-white"></div>
                  <h4 className="text-2xl font-black mb-2">4. Obtaining the Settlement Letter</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">Once an agreement is reached, DO NOT PAY yet. You must receive a formal Settlement Letter on IARC letterhead. This letter is your legal contract. It must state clearly: the total outstanding amount, the agreed settlement amount, the payment schedule, and a clause stating that all legal cases will be withdrawn upon payment.</p>
                  <p className="text-gray-600 leading-relaxed">Always cross verify the letter by calling IARC customer support or visiting their office. There are many fake settlement letters circulated by unscrupulous agencies, so verification is critical.</p>
                </div>
              </div>
            </section>

            <section id="no-job-strategy" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">How to Manage Loan with No Job: Survival Strategies</h2>
              <p className="text-lg leading-relaxed mb-8">
                Losing your job is a major life transition, and having a pending loan with IARC adds immense pressure. However, panic is your worst enemy. Use these strategies to manage the situation:
              </p>
              <div className="bg-gray-50 p-8 rounded-3xl mb-12 border border-gray-200">
                <h4 className="text-xl font-bold mb-6">Practical Financial Survival Steps:</h4>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</span>
                    <p className="text-gray-700 font-medium">Prioritize essential expenses like food and rent over unsecured debt payments if your funds are extremely limited.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</span>
                    <p className="text-gray-700 font-medium">Inform IARC immediately about your unemployment. Silence leads to legal escalation, while communication leads to options.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</span>
                    <p className="text-gray-700 font-medium">Look for a temporary moratorium. While ARCs primarily focus on recovery, they may grant a short grace period if you can prove you are actively seeking new employment.</p>
                  </li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed">
                Many borrowers in India find themselves in this trap. The key is to avoid taking fresh loans to pay old ones. That path leads to a debt spiral that is much harder to escape. Focus on managing your existing debt through legal settlement or restructuring.
              </p>
            </section>

            <section id="legal-rights" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">Your Legal Rights Against Harassment</h2>
              <p className="text-lg leading-relaxed mb-8">
                Regardless of how much you owe, you have fundamental legal rights protected by the Reserve Bank of India. IARC and its agents are bound by a Fair Practice Code.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-red-50 border border-red-100 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-red-600 mb-4">No Abusive Behavior</h3>
                  <p className="text-gray-700">Agents cannot use foul language, shout, or threaten you physically. Any such behavior is a violation of RBI guidelines.</p>
                </div>
                <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">Privacy Protection</h3>
                  <p className="text-gray-700">They cannot talk to your neighbors, relatives, or friends about your loan without your explicit consent.</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed italic">
                "If you feel that an agent is crossing the line, you can file a formal complaint with the IARC Grievance Officer or escalate the matter to the RBI Ombudsman."
              </p>
            </section>

            <section id="gov-schemes" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">Government Schemes for Debt Relief and Employment</h2>
              <p className="text-lg leading-relaxed mb-8">
                While the Indian government does not typically pay off private loan debts for individuals, there are schemes designed to help you regain financial footing:
              </p>
              <div className="space-y-6 mb-10">
                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <h4 className="font-bold text-emerald-900 mb-2 text-xl">Prime Minister Rozgar Yojana (PMRY)</h4>
                  <p className="text-gray-700">Aimed at providing self employment opportunities to educated unemployed youth. This can be a path to generate income to settle your existing debts.</p>
                </div>
                <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                  <h4 className="font-bold text-amber-900 mb-2 text-xl">Pradhan Mantri Mudra Yojana (PMMY)</h4>
                  <p className="text-gray-700">Offers small business loans up to ten lakh rupees for income generating activities. This is useful if you are moving from a job to a small enterprise.</p>
                </div>
              </div>
            </section>

            <section id="professional-help" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">Why Professional Debt Settlement Help is Essential</h2>
              <p className="text-lg leading-relaxed mb-6">
                Negotiating with International Asset Reconstruction Company requires knowledge of banking laws and negotiation tactics. Most individuals are already under high stress and may not be able to present their case effectively. When you are dealing with a professional entity like IARC, having a professional on your side balances the scales.
              </p>
              <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden mb-12 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-4 font-bold border-b text-gray-700">Feature</th>
                      <th className="p-4 font-bold border-b text-gray-700">Bank Settlement</th>
                      <th className="p-4 font-bold border-b text-[#1F5EFF]">IARC Settlement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border-b font-medium">Flexibility</td>
                      <td className="p-4 border-b">Low (Strict Policies)</td>
                      <td className="p-4 border-b text-[#1F5EFF] font-bold">High (Objective Based)</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b font-medium">Discount Range</td>
                      <td className="p-4 border-b">Twenty to Forty Percent</td>
                      <td className="p-4 border-b text-[#1F5EFF] font-bold">Forty to Seventy Percent</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b font-medium">Speed</td>
                      <td className="p-4 border-b">Medium</td>
                      <td className="p-4 border-b text-[#1F5EFF] font-bold">Fast (Lump sum focused)</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b font-medium">Documentation</td>
                      <td className="p-4 border-b">Standard RBI List</td>
                      <td className="p-4 border-b text-[#1F5EFF] font-bold">High Hardship Focused</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <span className="text-[#1F5EFF] mt-1 font-bold">✓</span>
                  <span><strong>Communication Shield:</strong> We take over all calls from IARC agents, giving you the mental space to breathe. No more waking up to recovery calls.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1F5EFF] mt-1 font-bold">✓</span>
                  <span><strong>Optimal Waivers:</strong> We know the bottom line for settlement amounts and ensure you get the maximum possible discount. We have negotiated hundreds of cases with IARC.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1F5EFF] mt-1 font-bold">✓</span>
                  <span><strong>Legal Compliance:</strong> We ensure that your settlement letter is 100% valid and that your credit report is updated correctly. We check every word in the contract.</span>
                </li>
              </ul>
            </section>

            <section id="mental-health" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">Debt and Mental Health: Staying Strong During the Process</h2>
              <p className="text-lg leading-relaxed mb-6">
                Being unemployed and in debt is not just a financial crisis; it is a mental health challenge. The constant fear of legal action or the shame of not being able to provide for your family can take a heavy toll. It is important to remember that debt is a commercial failure, not a moral one.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Most people in India who default on loans are honest individuals who fell on hard times. Whether it was the pandemic, an industry shift, or a medical emergency, these events are often out of your control. By choosing to settle with IARC, you are taking a proactive step toward recovery. You are not running away from your responsibilities; you are resolving them in a way that is sustainable for your current life.
              </p>
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 flex items-start gap-4">
                <div className="text-amber-500 text-2xl">💡</div>
                <p className="text-amber-900 leading-relaxed italic">
                  "Take it one day at a time. The settlement process with IARC typically takes three to six weeks. Once it is done, the weight that lifts off your shoulders will be worth every bit of the effort."
                </p>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-12 text-center">IARC Settlement Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8 not-prose mb-12">
                <div className="bg-white p-8 rounded-[24px] border border-[#DEDEDE] shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center font-bold text-[#1F5EFF] mr-4">R</div>
                    <div>
                      <h5 className="font-extrabold text-[#2E2E2E]">Rohan Mehta</h5>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Chennai</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium italic">"My bank sold my debt to IARC after I lost my IT job. I was terrified. SettleLoans stepped in and negotiated a forty five percent settlement. I am now debt free and starting a new job without stress."</p>
                </div>
                <div className="bg-white p-8 rounded-[24px] border border-[#DEDEDE] shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center font-bold text-[#1F5EFF] mr-4">S</div>
                    <div>
                      <h5 className="font-extrabold text-[#2E2E2E]">Sneha Gupta</h5>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Kolkata</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium italic">"IARC agents were calling ten times a day. Once I hired the professional team, they handled everything. I paid exactly what we agreed in the settlement letter. Highly professional service."</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-center text-gray-600 max-w-3xl mx-auto">
                These stories are common among our clients. The transition from a bank to IARC often feels like the end of the world, but with the right legal guidance, it becomes the beginning of your financial freedom.
              </p>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-12">Important FAQs on IARC Loan Settlement</h2>
              <div className="space-y-4 not-prose">
                {jsonLd["@graph"][3]?.mainEntity?.map((faq, i) => (
                  <details key={i} className="group bg-white border border-[#DEDEDE] rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300">
                    <summary className="flex justify-between items-center p-6 cursor-pointer font-black text-[#2E2E2E] list-none bg-white group-open:bg-[#1F5EFF]/5">
                      <span className="text-lg pr-4">{faq.name}</span>
                      <span className="transition-transform duration-300 group-open:rotate-180 text-[#1F5EFF]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 bg-white font-medium">
                      {faq.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-20 pt-10 border-t border-[#DEDEDE] text-center max-w-2xl mx-auto">
              <p className="text-gray-400 text-xs italic leading-relaxed">
                Disclaimer: SettleLoans is a debt settlement consultancy. Impact on CIBIL scores varies by individual history. We focus on ethical debt resolution and anti harassment support.
              </p>
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 p-10 bg-[#2E2E2E] rounded-[32px] text-center text-white relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-4">Ready to Settle with IARC?</h3>
                  <p className="text-[#DEDEDE]/80 mb-8 max-w-lg mx-auto">Let our legal experts handle the International Asset Reconstruction Company for you. Get a free consultation today.</p>
                  <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-black py-4 px-10 rounded-[12px] hover:scale-105 transition-all shadow-xl">
                    Get My Free Analysis
                  </Link>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F5EFF]/10 rounded-full -mr-32 -mt-32"></div>
            </div>

          </article>

          {/* Right Column */}
          <aside className="hidden lg:block w-1/4 max-w-[340px] relative">
            <div className="sticky top-28 space-y-8">
              
              <div className="bg-[#2E2E2E] rounded-[24px] shadow-2xl overflow-hidden border border-white/5 group">
                <div className="bg-[#1F5EFF] p-5 text-center">
                  <h3 className="text-xl font-black text-white">Need IARC Help?</h3>
                </div>
                <div className="p-8 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE]/70 font-bold leading-relaxed">
                    Stop the stress and negotiate professionally. We are here to help you get debt free.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-[12px] hover:scale-105 transition-all shadow-lg text-lg">
                    Contact Us Now
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[24px] border border-[#DEDEDE] shadow-sm">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#747474] mb-6 border-b border-[#DEDEDE] pb-3">Related Content</h3>
                <ul className="space-y-5">
                  {[
                    { title: "Loan Settlement Guide", href: "/loan-settlement" },
                    { title: "Manage Loan with No Job", href: "/how-to-manage-loan-with-no-job" },
                    { title: "Personal Loan Relief", href: "/services/personal-loan-settlement" },
                    { title: "Stop Bank Harassment", href: "/ignoring-calls-of-recovery-agent" },
                    { title: "Fix CIBIL Score", href: "/credit-score-improvement" }
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.href} className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-all duration-200">
                        <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-4 group-hover:bg-[#1F5EFF] transition-all"></span>
                        <span className="text-sm font-bold">{item.title}</span>
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
