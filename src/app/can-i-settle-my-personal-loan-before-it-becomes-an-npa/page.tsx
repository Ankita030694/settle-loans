import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Pre-NPA Settlement: Can You Settle a Loan Before Default? 2026",
  description: "Understand the 90 days loan default rule in India. Learn if you can negotiate a loan settlement or restructuring before your account becomes an NPA.",
  alternates: {
    canonical: "https://settleloans.in/can-i-settle-my-personal-loan-before-it-becomes-an-npa",
  },
};

export default function PreNPASettlementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/can-i-settle-my-personal-loan-before-it-becomes-an-npa#webpage",
        "url": "https://settleloans.in/can-i-settle-my-personal-loan-before-it-becomes-an-npa",
        "name": "Pre-NPA Settlement: Can You Settle a Loan Before Default?",
        "description": "A strategic financial guide on negotiating loan settlement and restructuring before the 90-day NPA mark.",
        "breadcrumb": { "@id": "https://settleloans.in/can-i-settle-my-personal-loan-before-it-becomes-an-npa#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/can-i-settle-my-personal-loan-before-it-becomes-an-npa#breadcrumb",
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
            "name": "Pre-NPA Settlement",
            "item": "https://settleloans.in/can-i-settle-my-personal-loan-before-it-becomes-an-npa"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/can-i-settle-my-personal-loan-before-it-becomes-an-npa#article",
        "headline": "Pre-NPA Settlement: Can You Settle a Loan Before Default?",
        "description": "Learn the realities of SMA-1, SMA-2, and how to protect your CIBIL score through pre-default loan restructuring.",
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
        "datePublished": "2026-07-21",
        "dateModified": "2026-07-21",
        "mainEntityOfPage": { "@id": "https://settleloans.in/can-i-settle-my-personal-loan-before-it-becomes-an-npa#webpage" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/can-i-settle-my-personal-loan-before-it-becomes-an-npa#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I settle my personal loan before it becomes an NPA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Technically, yes, but banks are highly reluctant to offer 'discounted settlements' on standard or SMA accounts. They usually prefer restructuring or EMI holidays rather than taking a haircut before 90 days."
            }
          },
          {
            "@type": "Question",
            "name": "What is the 90 days loan default rule in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "According to RBI guidelines, if a borrower fails to pay their EMI or principal for 90 consecutive days, the loan account is officially classified as a Non-Performing Asset (NPA)."
            }
          },
          {
            "@type": "Question",
            "name": "What are SMA 1 and SMA 2 in banking?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Special Mention Accounts (SMA) classify early stress. SMA-0 is overdue up to 30 days. SMA-1 is overdue between 31-60 days. SMA-2 is overdue between 61-90 days."
            }
          },
          {
            "@type": "Question",
            "name": "Will a pre-NPA settlement hurt my CIBIL score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Any 'settlement' (where you pay less than the full amount owed) will severely damage your CIBIL score, whether it happens pre-NPA or post-NPA."
            }
          },
          {
            "@type": "Question",
            "name": "How do banks view early settlement requests?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banks view early settlement requests with suspicion. If a borrower has money to settle, the bank assumes they have money to pay the EMI."
            }
          },
          {
            "@type": "Question",
            "name": "Is pre-default loan restructuring a better option?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if you want to protect your credit score. Restructuring involves extending the loan tenure to reduce the monthly EMI burden."
            }
          },
          {
            "@type": "Question",
            "name": "Can I negotiate a waiver on penal charges during SMA-1 or SMA-2?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Banks are often willing to waive late payment fees and penal interest if you clear the primary overdue EMI amount."
            }
          },
          {
            "@type": "Question",
            "name": "What happens immediately after an account becomes an NPA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The bank initiates aggressive recovery processes, your CIBIL score drops drastically, and they may initiate legal proceedings."
            }
          },
          {
            "@type": "Question",
            "name": "Should I stop paying EMIs just to get a settlement offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Strategically defaulting to force a settlement is highly risky and ruins your credit score."
            }
          },
          {
            "@type": "Question",
            "name": "How can financial consultants help with a pre-NPA crisis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Consultants can negotiate directly with bank management for restructuring, temporary EMI moratoriums, or interest rate reductions."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Pre-NPA Settlement Consultation",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "2450"
        },
        "review": [
          {
            "@type": "Review",
            "@id": "https://settleloans.in/can-i-settle-my-personal-loan-before-it-becomes-an-npa#review1",
            "author": { "@type": "Person", "name": "Arun P." },
            "reviewBody": "My business was struggling and I was at SMA-1. The team helped me negotiate a tenure extension that lowered my EMI by 40%.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "datePublished": "2026-03-10"
          },
          {
            "@type": "Review",
            "@id": "https://settleloans.in/can-i-settle-my-personal-loan-before-it-becomes-an-npa#review2",
            "author": { "@type": "Person", "name": "Meera J." },
            "reviewBody": "They explained the CIBIL impact clearly. We opted for restructuring instead of settlement and saved my credit score.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "datePublished": "2026-04-12"
          },
          {
            "@type": "Review",
            "@id": "https://settleloans.in/can-i-settle-my-personal-loan-before-it-becomes-an-npa#review3",
            "author": { "@type": "Person", "name": "Karthik R." },
            "reviewBody": "I couldn't pay for 2 months (SMA-2). They intervened and got all my penal charges waived so I could clear the overdue.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "datePublished": "2026-05-05"
          },
          {
            "@type": "Review",
            "@id": "https://settleloans.in/can-i-settle-my-personal-loan-before-it-becomes-an-npa#review4",
            "author": { "@type": "Person", "name": "Neha S." },
            "reviewBody": "Excellent strategic advice. Prevented my account from becoming an NPA just in time.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "datePublished": "2026-06-20"
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

      {/* Hero Section */}
      <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
            Master Guide 2026
          </span>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
            Can You Settle a Loan <br className="hidden md:block"/> Before Default?
          </h1>
          <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
            Understand the realities of SMA-1, SMA-2, and how to protect your CIBIL score through pre-default loan restructuring and early negotiation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Check Your Eligibility
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
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
                Pre-NPA Settlement
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Layout with 3 Columns */}
      <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
        
        {/* Left Column: Table of Contents */}
        <aside className="hidden lg:block w-1/5 min-w-[240px]">
          <div className="sticky top-24">
            <TableOfContents 
              items={[
                 { id: "intro", title: "Introduction" },
                 { id: "definition", title: "Defining Pre-NPA" },
                 { id: "why-settle", title: "Why Banks Reject Early Offers" },
                 { id: "the-process", title: "The Pre-NPA Timeline" },
                 { id: "legal-framework", title: "Legal & RBI Guidelines" },
                 { id: "negotiation-scripts", title: "Negotiation Strategies" },
                 { id: "bank-policies", title: "Bank vs NBFC Policies" },
                 { id: "lok-adalat", title: "Moratoriums & Relief" },
                 { id: "cibil-impact", title: "Impact on CIBIL Score" },
                 { id: "recovery-agents", title: "Dealing with Agents" },
                 { id: "rebuilding-credit", title: "Rebuilding Your Credit" },
                 { id: "alternatives", title: "Alternatives to Consider" },
                 { id: "psychology", title: "Psychology of Debt" },
                 { id: "arc-settlements", title: "Balance Transfers" },
                 { id: "guarantors-impact", title: "Guarantors & Co-borrowers" },
                 { id: "reviews", title: "Client Stories" },
                 { id: "faqs", title: "Common FAQs" }
              ]}
            />
          </div>
        </aside>

        {/* Middle Column: Main Content */}
        <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
          
          {/* Section 1: intro */}
          <section id="intro" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-8 leading-tight">
              The Reality of Early Distress: <span className="text-[#1F5EFF]">A Path to Freedom</span>
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
               <p className="text-xl leading-relaxed text-[#2E2E2E] mb-6">
                When a financial crisis hits, many proactive borrowers realize they won't be able to sustain their current EMI schedules. They wonder: "Can I settle my loan right now for a lesser amount before I completely ruin my credit score?" In the modern economic landscape, where financial stability can be disrupted easily, understanding this mechanism is vital for survival.
              </p>
              <p className="text-xl leading-relaxed text-[#2E2E2E] mb-6">
                At SettleLoans, we believe that debt should not be a life sentence. Thousands of hard working Indians find themselves trapped in a cycle of interest and penalties that they can never realistically repay. Attempting to settle a loan before it hits the 90-day NPA (Non-Performing Asset) mark requires deep strategic knowledge.
              </p>
              <p className="text-xl leading-relaxed text-[#2E2E2E]">
                The Indian banking system often makes it very easy to take a loan but extremely difficult to resolve one early. Whether it is an unsecured personal loan from a major private bank or a quick cash loan from a fintech app, the principles of pre-NPA action remain a critical lifeline for those facing insolvency.
              </p>
            </div>
          </section>

          {/* Section 2: definition */}
          <section id="definition" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Understanding Pre-NPA Settlement</h2>
            <p className="text-lg leading-relaxed mb-6">
              Pre-NPA settlement theoretically involves negotiating with the lender to accept a reduced payment as full satisfaction of the debt before 90 days of default. This is often pursued when you are struggling to make your monthly payments due to sudden hardships. However, achieving this is highly unusual in the Indian banking system.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              From a banking perspective, a settlement is a last-resort compromise. The bank acknowledges that recovering the full amount is unlikely only after a loan crosses the NPA threshold. Before 90 days, their systems classify the loan as a "Standard Asset" or "Special Mention Account", where waivers are generally restricted to late fees, not principal.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              It is important to distinguish between a loan closure, loan restructuring, and loan settlement. A closure happens when the entire amount is paid. Restructuring modifies the terms to help you pay. A settlement leaves a residual amount unpaid, which is then waived. During the pre-NPA phase, restructuring is the primary tool available.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              A personal loan is typically unsecured. This lack of collateral gives the bank less leverage for immediate seizure but makes them more aggressive in their recovery tactics through collection agencies early in the default cycle. They will try everything to recover the EMI before day 90.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              In technical terms, the bank moves the loan to a "Loss" category on their balance sheet only after it has been an NPA. By offering a settlement early, the bank would have to take a premature loss, which conflicts with RBI provisioning norms. This is the structural reason early settlements are rejected.
            </p>
          </section>

          {/* Section 3: why-settle */}
          <section id="why-settle" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Why Banks Reject Early Settlements</h2>
            <p className="text-lg leading-relaxed mb-6">
              Banks and Non Banking Financial Companies (NBFCs) operate on rigid software systems. They do not agree to settlements early because of strict internal compliance. Here are the primary reasons why a lender rejects a pre-NPA settlement:
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                <h4 className="font-black text-[#1F5EFF] mb-3 text-lg">System Constraints</h4>
                <p className="text-sm leading-relaxed">Standard core banking systems do not have a button for "Write-Off/Settlement" for standard or SMA accounts. The RBI requires provisioning (setting aside capital) which is tied to the 90-day NPA cycle.</p>
              </div>
              <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                <h4 className="font-black text-[#1F5EFF] mb-3 text-lg">Suspicion of Wealth</h4>
                <p className="text-sm leading-relaxed">If you approach a bank on day 40 offering ₹2 Lakhs to settle a ₹4 Lakh loan, the bank assumes: "If they have ₹2 Lakhs lying around, why aren't they paying the ₹15,000 EMI?"</p>
              </div>
              <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                <h4 className="font-black text-[#1F5EFF] mb-3 text-lg">Full Recovery Focus</h4>
                <p className="text-sm leading-relaxed">Until an account hits 90 days, the bank believes they can recover 100% of the principal, interest, and late fees through pressure. A settlement is only viewed as a last resort.</p>
              </div>
              <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                <h4 className="font-black text-[#1F5EFF] mb-3 text-lg">Compliance Hurdles</h4>
                <p className="text-sm leading-relaxed">Branch managers lack the authority to approve a principal waiver on an active standard loan. Sending it to the regional office usually results in automatic rejection.</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              Lenders instead push for full recovery during the critical 0-90 day window. During this time, they employ their most persistent telecallers and field agents to ensure the account does not slip into the NPA bucket.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Furthermore, if a bank started offering discounts to everyone who simply stopped paying for a month, it would create a massive moral hazard in the lending ecosystem.
            </p>
          </section>

          {/* Section 4: the-process */}
          <section id="the-process" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">The Pre-NPA Timeline (SMA-0 to NPA)</h2>
            <p className="text-lg leading-relaxed mb-8">
              Navigating a potential default requires a disciplined approach. You must understand how the bank categorizes your loan day by day:
            </p>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                <div>
                  <h3 className="text-xl font-black text-[#2E2E2E] mb-2">SMA-0 (0-30 Days Overdue)</h3>
                  <p className="text-gray-600 leading-relaxed">The account is showing initial signs of stress. Late fees apply, and a minor CIBIL hit occurs. The bank will send reminder SMS and automated calls.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                <div>
                  <h3 className="text-xl font-black text-[#2E2E2E] mb-2">SMA-1 (31-60 Days Overdue)</h3>
                  <p className="text-gray-600 leading-relaxed">Intense follow-ups begin. Your CIBIL score takes a noticeable drop. The bank may assign a third-party telecalling agency to demand payment.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                <div>
                  <h3 className="text-xl font-black text-[#2E2E2E] mb-2">SMA-2 (61-90 Days Overdue)</h3>
                  <p className="text-gray-600 leading-relaxed">Pre-NPA stage. Recovery agents may visit your home or office. Legal notices might be prepared as the bank issues a final warning.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                <div>
                  <h3 className="text-xl font-black text-[#2E2E2E] mb-2">NPA (90+ Days Overdue)</h3>
                  <p className="text-gray-600 leading-relaxed">The account officially defaults. Massive hit to credit score. The bank moves to aggressive recovery or eventually, settlement mode.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">5</div>
                <div>
                  <h3 className="text-xl font-black text-[#2E2E2E] mb-2">Post-NPA Phase</h3>
                  <p className="text-gray-600 leading-relaxed">This is when real settlement negotiations can finally begin, but it comes at the cost of a ruined credit history for the next seven years.</p>
                </div>
              </div>
            </div>
            <p className="text-lg leading-relaxed mt-12 mb-6">
              Skipping any of these steps in your planning can lead to disaster. It is crucial to intervene during the SMA-1 or SMA-2 phase to request restructuring.
            </p>
            <p className="text-lg leading-relaxed mb-6">
               It is also vital to ensure that any penalties levied during the SMA phases are negotiated and waived when you make a partial payment.
            </p>
          </section>

          {/* Section 5: legal-framework */}
          <section id="legal-framework" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Legal & RBI Guidelines</h2>
            <p className="text-lg leading-relaxed mb-6">
              The Reserve Bank of India (RBI) has laid down a clear Fair Practice Code for lenders. While the bank has the right to recover its money, it does not have the right to violate your basic human dignity during the SMA phases.
            </p>
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
              <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Key RBI Protections for Borrowers:</h4>
              <ul className="space-y-4 text-blue-900 font-medium">
                <li className="flex items-start gap-3">
                   <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                   <span><strong>Time Limits:</strong> Recovery agents can only call or visit between 8:00 AM and 7:00 PM. Calls at midnight are a violation of law.</span>
                </li>
                <li className="flex items-start gap-3">
                   <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                   <span><strong>Privacy:</strong> Lenders cannot discuss your debt with your neighbors, relatives, or office colleagues. They cannot "shame" you into paying.</span>
                </li>
                <li className="flex items-start gap-3">
                   <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                   <span><strong>Communication:</strong> Abusive language, threats, and intimidation are strictly prohibited and can lead to heavy fines and license cancellation for recovery agencies.</span>
                </li>
                <li className="flex items-start gap-3">
                   <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                   <span><span><strong>Transparency:</strong> Banks must clearly communicate the status of your account and any penal charges applied.</span></span>
                </li>
              </ul>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              Legally, an unsecured personal loan is a civil matter. While banks can file a civil suit for recovery, they cannot easily trigger criminal proceedings unless there is evidence of fraud or a cheque bounce (Section 138 of the Negotiable Instruments Act).
            </p>
            <p className="text-lg leading-relaxed mb-6">
               In 2023, the RBI released further guidelines encouraging banks to offer restructuring frameworks for stressed borrowers, provided they meet certain eligibility criteria.
            </p>
            <p className="text-lg leading-relaxed mb-6">
               Wait, you might have heard of the SARFAESI Act. This powerful law allows banks to take over properties without court intervention. But here is the catch: SARFAESI applies ONLY to secured loans. For your unsecured personal loan or credit card, the bank MUST go to a civil court.
            </p>
          </section>

          {/* Section 6: negotiation-scripts */}
          <section id="negotiation-scripts" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Mastering Negotiation Strategies</h2>
            <p className="text-lg leading-relaxed mb-6">
               Negotiation is an art. When you enter a bank, you are a customer who has faced an unfortunate turn of events. You are not a criminal. Here are some strategies for pre-NPA talks:
            </p>
            <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
               <h4 className="font-black text-[#2E2E2E] mb-4">The "Hardship" Strategy</h4>
               <p className="mb-4">Always emphasize that your current situation is temporary but severe. Provide documents like a termination letter or medical bills to prove you genuinely cannot pay the current EMI.</p>
               <h4 className="font-black text-[#2E2E2E] mb-4">The "Restructuring Request" Clause</h4>
               <p className="mb-4">Instead of asking for a settlement, ask for a tenure extension. Lowering the EMI by extending the loan from 3 years to 5 years is something branch managers can actually approve.</p>
               <h4 className="font-black text-[#2E2E2E] mb-4">The Documentation Shield</h4>
               <p>Provide evidence for every claim. In the face of cold hard facts, bank managers find it easier to justify an EMI holiday or penalty waiver to their superiors.</p>
            </div>
            <p className="text-lg leading-relaxed mb-6">
               Remember, the bank manager has a "discretionary limit." They can waive penalty fees without asking anyone. But they cannot waive principal on an active loan. Target what they can actually give you.
            </p>
          </section>

          {/* Section 7: bank-policies */}
          <section id="bank-policies" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Bank vs NBFC Policies</h2>
            <p className="text-lg leading-relaxed mb-6">
              Different lenders have different "appetites" for pre-NPA relief. Major private banks have structured systems but are often tougher to crack.
            </p>
            <div className="overflow-x-auto my-8">
              <table className="w-full text-left border-collapse border border-[#DEDEDE]">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 border border-[#DEDEDE] font-black">Lender Type</th>
                    <th className="p-4 border border-[#DEDEDE] font-black">Negotiation Style</th>
                    <th className="p-4 border border-[#DEDEDE] font-black">Typical Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border border-[#DEDEDE] font-bold">Top Private Banks</td>
                    <td className="p-4 border border-[#DEDEDE]">Very strict, require heavy documentation for restructuring.</td>
                    <td className="p-4 border border-[#DEDEDE]">Tenure Extension</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-[#DEDEDE] font-bold">PSU Banks (SBI etc)</td>
                    <td className="p-4 border border-[#DEDEDE]">More lenient if you have a long standing relationship.</td>
                    <td className="p-4 border border-[#DEDEDE]">EMI Holidays</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-[#DEDEDE] font-bold">Fintech Apps (NBFCs)</td>
                    <td className="p-4 border border-[#DEDEDE]">Aggressive immediate recovery, rarely offer restructuring.</td>
                    <td className="p-4 border border-[#DEDEDE]">Penalty Waivers</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              NBFCs often have higher interest rates. Their recovery tactics can be more intrusive, often reaching out aggressively during SMA-1. We specialize in handling these digital lenders.
            </p>
            <p className="text-lg leading-relaxed mb-6">
               In recent years, the rise of "Buy Now Pay Later" (BNPL) apps has added a new layer. These apps almost never restructure and push for immediate collection.
            </p>
          </section>

          {/* Section 8: lok-adalat (mapped to Moratoriums) */}
          <section id="lok-adalat" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Moratoriums & Relief</h2>
            <p className="text-lg leading-relaxed mb-6">
               A loan moratorium is a temporary pause on EMI payments. This is the holy grail of pre-NPA relief, allowing you breathing room to find a new job or recover from an illness.
            </p>
            <p className="text-lg leading-relaxed mb-6">
               If you can secure a 3-month moratorium, your account will not progress from SMA-0 to NPA. However, be aware that interest continues to accrue on the outstanding principal during this period.
            </p>
            <p className="text-lg leading-relaxed mb-6">
               Securing this requires escalating your request to the grievance redressal officer of the bank, as branch-level employees typically cannot authorize an EMI holiday.
            </p>
          </section>

          {/* Section 9: cibil-impact */}
          <section id="cibil-impact" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Impact on Credit Score (CIBIL)</h2>
            <p className="text-lg leading-relaxed mb-6">
              This is the most significant aspect of pre-NPA negotiations. If you restructure your loan, the lender reports the status as "Restructured" to the credit bureaus.
            </p>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
               <h4 className="text-lg font-bold text-red-700 mb-3">What "Restructured" Means to Future Lenders:</h4>
               <p className="text-sm text-red-900 leading-relaxed italic">
                 "This borrower faced financial stress and needed their loan terms modified. While they didn't default, lending to them in the near future is slightly risky."
               </p>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              Your credit score will take a minor hit, but it is vastly superior to a "Settled" or "Written-Off" status. You preserve your creditworthiness for future emergencies.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              However, comparing a restructured status to a continuous default, restructuring is always better. A default is like an open wound that keeps bleeding your score every month.
            </p>
            <p className="text-lg leading-relaxed mb-6">
               Is there a way to avoid any negative tag? Only if you clear the overdue amounts during the SMA phases and return the account to a standard paying status.
            </p>
          </section>

          {/* Section 10: recovery-agents */}
          <section id="recovery-agents" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Dealing with Recovery Agents</h2>
            <p className="text-lg leading-relaxed mb-6">
              The mere mention of recovery agents causes stress for most borrowers. These agents are third party contractors who work on a commission basis. Their goal is to get you to pay as much as possible as quickly as possible.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The first rule of dealing with agents is: <strong>Do not panic.</strong> You have legal rights. Most agents operate on a script of fear.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-8">
               <div className="bg-white p-5 rounded-lg border border-[#DEDEDE] shadow-sm">
                  <h5 className="font-black text-[#2E2E2E] mb-2">Record Everything</h5>
                  <p className="text-sm">Always record your calls with agents. If they use abusive language, this recording is your evidence for an RBI complaint. Most modern smartphones have this feature; use it.</p>
               </div>
               <div className="bg-white p-5 rounded-lg border border-[#DEDEDE] shadow-sm">
                  <h5 className="font-black text-[#2E2E2E] mb-2">Verification</h5>
                  <p className="text-sm">Never give money to an agent. Only pay through the bank's official app or branch. Insist on seeing their ID card and the bank's authorization letter.</p>
               </div>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              If an agent visits your house, you have the right to ask them to leave if it is outside the 8 AM to 7 PM window. If they create a scene, call the local police.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              At SettleLoans, we provide an anti-harassment shield. We direct all calls to our legal desk, ensuring that you can live your life and focus on your work.
            </p>
          </section>

          {/* Section 11: rebuilding-credit */}
          <section id="rebuilding-credit" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Rebuilding Your Credit Score</h2>
            <p className="text-lg leading-relaxed mb-6">
              If you went through a restructuring or early settlement, you can rebuild your credit score from scratch. It takes patience and discipline.
            </p>
            <ol className="space-y-6">
               <li className="flex gap-4">
                  <span className="font-black text-[#1F5EFF] text-2xl">01</span>
                  <span><strong>Secured Credit Cards:</strong> This is the gold standard for credit repair. Deposit ten to twenty thousand rupees in a Fixed Deposit (FD) and get a credit card against it.</span>
               </li>
               <li className="flex gap-4">
                  <span className="font-black text-[#1F5EFF] text-2xl">02</span>
                  <span><strong>Gold Loans:</strong> If you need credit, take a gold loan. These are reported to CIBIL and since you are providing collateral, interest rates are lower.</span>
               </li>
               <li className="flex gap-4">
                  <span className="font-black text-[#1F5EFF] text-2xl">03</span>
                  <span><strong>The "Add-on" Strategy:</strong> If a family member has a great credit history, you can become an add-on cardholder to manage expenses.</span>
               </li>
               <li className="flex gap-4">
                  <span className="font-black text-[#1F5EFF] text-2xl">04</span>
                  <span><strong>Reviewing Your Report:</strong> Every six months, download your CIBIL report. Ensure that the accounts are correctly marked.</span>
               </li>
            </ol>
            <p className="text-lg leading-relaxed mt-8 mb-6">
              Within eighteen to twenty-four months of consistent, perfect payment on a secured product, your CIBIL score will begin to climb back toward the 700+ range.
            </p>
            <p className="text-lg leading-relaxed">
               Think of your credit score as a garden. You have pulled out the weeds through restructuring. Now you are planting new seeds and watering them.
            </p>
          </section>

          {/* Section 12: alternatives */}
          <section id="alternatives" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Alternatives to Consider</h2>
            <p className="text-lg leading-relaxed mb-6">
              Before allowing an account to slip into NPA status, explore these options:
            </p>
            <ul className="list-disc pl-6 space-y-4 mb-8">
               <li><strong>Loan Restructuring:</strong> Ask the bank to increase the tenure of the loan. This will reduce your monthly EMI, making it more manageable.</li>
               <li><strong>Balance Transfer:</strong> If your credit score is still decent, move your loan to another bank that offers lower interest rates.</li>
               <li><strong>Debt Consolidation:</strong> Take one larger, lower interest loan (perhaps a gold loan) to pay off multiple high interest personal loans.</li>
               <li><strong>Liquidating Investments:</strong> Using your PF, insurance policies, or Mutual Funds to close a loan is often better than defaulting.</li>
            </ul>
            <p className="text-lg leading-relaxed mb-6">
               Taking proactive action during the SMA-1 phase gives you the highest chance of securing one of these alternatives successfully.
            </p>
          </section>

          {/* Section 13: psychology */}
          <section id="psychology" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Psychology of Debt: Staying Strong</h2>
             <p className="text-lg leading-relaxed mb-6">
                The constant ringing of the phone can create a state of perpetual flight or fight. This affects your performance at work and your relationships at home. By hiring a professional firm like SettleLoans, you are taking back control.
             </p>
             <p className="text-lg leading-relaxed mb-6">
                Focus on what you can control. You cannot control the bank's policy, but you can control your expenses and your new income streams. Your health is worth more than any bank balance.
             </p>
          </section>

          {/* Section 14: arc-settlements */}
          <section id="arc-settlements" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Balance Transfers Pre-Default</h2>
            <p className="text-lg leading-relaxed mb-6">
               If your loan is in the early days of stress (SMA-0), you might still qualify for a balance transfer to another institution offering lower rates.
            </p>
            <p className="text-lg leading-relaxed mb-6">
               Many borrowers consolidate their high-interest unsecured loans into a single secured loan against property before their CIBIL score drops.
            </p>
            <p className="text-lg leading-relaxed mb-6">
               This strategy requires acting fast, before the late payments are reported to the credit bureaus and lock you out of new credit.
            </p>
          </section>

          {/* Section 15: guarantors-impact */}
          <section id="guarantors-impact" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Impact on Co-borrowers and Guarantors</h2>
            <p className="text-lg leading-relaxed mb-6">
               When you take a personal loan, you might have a co-applicant or a guarantor. It is a common misconception that a default only affects the primary borrower.
            </p>
            <p className="text-lg leading-relaxed mb-6">
               If you enter SMA stages, your guarantor's credit score will also drop. They will also receive recovery calls.
            </p>
            <p className="text-lg leading-relaxed mb-6">
               Before taking any drastic action or halting payments, it is vital to communicate with your co-borrowers and guarantors to protect their financial standing.
            </p>
          </section>

          {/* Section 16: more-case-studies */}
          <section id="more-case-studies" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-12">More Stories of Financial Recovery</h2>
             <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-xl">
                   <h4 className="font-black text-lg mb-4">Suresh, Hyderabad</h4>
                   <p className="text-gray-600 mb-6 italic leading-relaxed">
                     "I was in SMA-2 and panicking. SettleLoans consolidated the negotiation. They secured a tenure extension, dropping my EMI from 45k to 22k."
                   </p>
                   <div className="text-xs font-bold text-[#1F5EFF]">Outcome: Restructured successfully</div>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-xl">
                   <h4 className="font-black text-lg mb-4">Anjali, Pune</h4>
                   <p className="text-gray-600 mb-6 italic leading-relaxed">
                     "I lost my job and missed 2 EMIs. The bank was very aggressive. SettleLoans spoke to the regional manager and got a 3-month moratorium."
                   </p>
                   <div className="text-xs font-bold text-[#1F5EFF]">Outcome: 3-Month EMI Holiday</div>
                </div>
             </div>
          </section>

          {/* Section 17: reviews */}
          <section id="reviews" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-12 text-center">
              Stories of <span className="text-[#1F5EFF]">Hope</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  name: "Arun P.", 
                  loc: "New Delhi", 
                  loan: "Personal Loan: ₹10 Lakhs", 
                  res: "Outcome: Restructured",
                  story: "SettleLoans helped me avoid NPA status completely. The pressure from recovery agents stopped immediately. Their legal team was very professional."
                },
                { 
                  name: "Suman Gupta", 
                  loc: "Mumbai", 
                  loan: "Multiple App Loans: ₹6 Lakhs", 
                  res: "Outcome: Penalties Waived",
                  story: "I was trapped in a cycle of high-interest app loans. They handled all my legal notices and got me a great deal to clear the overdue."
                },
                { 
                  name: "Karan Verma", 
                  loc: "Bangalore", 
                  loan: "Unsecured Loan: ₹15 Lakhs", 
                  res: "Outcome: EMI Reduced by 40%",
                  story: "The negotiation process took about a month. I saved my CIBIL score from being destroyed. Highly recommend their services."
                },
                { 
                  name: "Priyanka Das", 
                  loc: "Kolkata", 
                  loan: "Credit Card & Loan: ₹8 Lakhs", 
                  res: "Outcome: 2-Month Holiday",
                  story: "After my medical emergency, I couldn't pay EMIs. SettleLoans stepped in and secured a moratorium so I could recover financially."
                }
              ].map((review, i) => (
                <div key={i} className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 flex items-center justify-center font-black text-[#1F5EFF] text-xl mr-4 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-black text-[#2E2E2E]">{review.name}</h5>
                      <p className="text-xs text-[#747474] font-bold uppercase tracking-wider">{review.loc}</p>
                    </div>
                    <div className="ml-auto flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6 flex flex-col gap-2">
                    <div className="px-4 py-2 bg-red-50 text-red-700 rounded-lg text-xs font-black border border-red-100 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                       {review.loan}
                    </div>
                    <div className="px-4 py-2 bg-green-50 text-green-700 rounded-lg text-xs font-black border border-green-100 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                       {review.res}
                    </div>
                  </div>
                  <p className="text-[#2E2E2E] italic leading-relaxed text-sm opacity-80 group-hover:opacity-100 transition-opacity">"{review.story}"</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 18: faqs */}
          <section id="faqs" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Can I settle my personal loan before it becomes an NPA?", a: "Technically yes, but practically banks rarely accept a discounted 'haircut' settlement before the 90-day mark. They prefer restructuring." },
                { q: "What is the 90 days loan default rule in India?", a: "If you fail to pay your dues for 90 consecutive days, the RBI mandates that the bank classify your account as a Non-Performing Asset (NPA)." },
                { q: "What are SMA 1 and SMA 2 in banking?", a: "Special Mention Accounts indicating early stress. SMA-1 is for defaults between 31-60 days, and SMA-2 is for 61-90 days." },
                { q: "Will a pre-NPA settlement hurt my CIBIL score?", a: "Yes. Any settlement where you pay less than the total outstanding will reflect as 'Settled' on your CIBIL, heavily damaging your score." },
                { q: "How do banks view early settlement requests?", a: "With suspicion. Banks assume if you have lump-sum cash to settle, you have the money to continue paying your EMIs." },
                { q: "Is pre-default loan restructuring a better option?", a: "Yes, if credit preservation is your goal. It lowers your EMI and keeps the account active and standard, preserving your CIBIL score." },
                { q: "Can I negotiate a waiver on penal charges during SMA-1 or SMA-2?", a: "Absolutely. Banks frequently waive late payment and bounce charges if you commit to clearing the primary EMI amount before it turns NPA." },
                { q: "What happens immediately after an account becomes an NPA?", a: "The bank accelerates recovery efforts, hands the file to third-party agencies, and may initiate legal action like Section 138 if cheques were involved." },
                { q: "Should I stop paying EMIs just to get a settlement offer?", a: "No. This 'strategic default' ruins your credit for years and exposes you to immense stress and potential legal battles." },
                { q: "How can financial consultants help with a pre-NPA crisis?", a: "They can mediate with the bank for a tenure extension, moratorium, or penalty waivers, often achieving terms a borrower cannot secure alone." },
                { q: "Can a settlement be reversed by the bank later?", a: "Only if you failed to follow the terms of the settlement letter (like missing payment dates). If you fulfilled your end, the bank cannot reopen the case legally." },
                { q: "Does debt settlement apply to credit cards too?", a: "Absolutely. In fact, credit card debt is often easier to settle for deep waivers because the interest rates are so high that banks have a lot of room to offer discounts." },
                { q: "What happens if I cannot pay the full settlement amount in one go?", a: "Most settlements are lump sum. However, some banks may allow two or three instalments over sixty to ninety days. This must be clearly mentioned in your settlement letter." },
                { q: "Will my employer find out about my loan settlement?", a: "Legally, the bank cannot contact your employer. However, if you provided your office email or mobile as a contact, they might reach out there. Our anti-harassment shield helps prevent this." },
                { q: "How do I verify the authenticity of a settlement letter?", a: "Always check the letter for a valid reference number and call the bank's official customer care or visit the branch manager to confirm the offer before making any payment." }
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h4 className="font-black text-[#2E2E2E] text-lg mb-3">{i+1}. {faq.q}</h4>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
             <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <h3 className="text-3xl md:text-5xl font-black mb-6">Ready to Take Control?</h3>
             <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">
               Stop the cycle of debt today. Talk to our legal experts and get a free analysis of your loan portfolio. We have helped thousands of families regain their peace.
             </p>
             <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-black py-5 px-12 rounded-2xl hover:scale-105 transition-all text-xl shadow-2xl">
               Start Your Journey to Freedom
             </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 text-center">
             <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans is a professional consultancy specializing in debt negotiation and legal support. We are not a lender or a financial institution. Impact on credit score varies by individual history and bank policies.</p>
          </div>

        </article>

        {/* Right Column: CTA & Context */}
        <aside className="hidden lg:block w-1/5 min-w-[240px]">
          <div className="sticky top-24 space-y-8">
             <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10">Struggling with EMI?</h3>
                <p className="text-white/70 text-sm mb-6 relative z-10">Our experts have settled over 500 Crore Plus in debt for thousands of clients across India.</p>
                <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-black py-4 rounded-xl hover:bg-[#1F5EFF]/90 transition-colors shadow-lg">Get Free Advice</Link>
             </div>

             <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6 border-b pb-4">Related Resources</h3>
                <ul className="space-y-5">
                   <li>
                      <Link href="/loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] font-bold transition-colors">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                        Loan Settlement Service
                      </Link>
                   </li>
                    <li>
                      <Link href="/services/credit-card-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] font-bold transition-colors">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                        Credit Card Settlement
                      </Link>
                   </li>
                    <li>
                      <Link href="/ignoring-calls-of-recovery-agent" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] font-bold transition-colors">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                        Stop Harassment
                      </Link>
                   </li>
                   <li>
                      <Link href="/blog/negotiate-late-payment-fees" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] font-bold transition-colors">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                        Negotiate Penal Charges
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
