import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Loan Settlement After Settlement Failed | IARC Debt Resolution Guide 2025",
  description: "What happens if your loan settlement fails? Learn about IARC (International Asset Reconstruction Company) resolution process, and how to fix a breached OTS agreement.",
  alternates: {
    canonical: "https://settleloans.in/loan-settlement-after-settlement-failed",
  },
};

export default function LoanSettlementFailedPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/loan-settlement-after-settlement-failed#webpage",
        "url": "https://settleloans.in/loan-settlement-after-settlement-failed",
        "name": "Loan Settlement After Settlement Failed | IARC Debt Resolution Guide",
        "description": "Comprehensive guide on recovering from a failed loan settlement, dealing with IARC, and understanding your legal rights in India.",
        "breadcrumb": { "@id": "https://settleloans.in/loan-settlement-after-settlement-failed#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/loan-settlement-after-settlement-failed#breadcrumb",
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
            "name": "Loan Settlement Failed",
            "item": "https://settleloans.in/loan-settlement-after-settlement-failed"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/loan-settlement-after-settlement-failed#article",
        "headline": "Loan Settlement After Settlement Failed: The Complete Recovery Guide",
        "description": "Facing a failed One-Time Settlement (OTS)? Understand the role of IARC, legal consequences of a breach, and how to get back on the path to debt freedom.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Legal Experts"
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
        "mainEntityOfPage": { "@id": "https://settleloans.in/loan-settlement-after-settlement-failed#webpage" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/loan-settlement-after-settlement-failed#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What happens if I miss a payment in a loan settlement agreement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Missing a payment typically voids the One-Time Settlement (OTS) agreement. The lender usually reinstates the original outstanding amount, including all previously waived interest and penalties. Legal proceedings may also resume immediately."
            }
          },
          {
             "@type": "Question",
             "name": "Who is IARC and why do they have my loan?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "IARC stands for International Asset Reconstruction Company. They are an ARC that buys non-performing assets (NPAs) from banks. If your bank sold your debt, IARC is now your legal creditor and is responsible for recovering the dues."
             }
          },
          {
            "@type": "Question",
            "name": "Can I renegotiate after a settlement has already failed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, it is possible to renegotiate, especially with ARCs like IARC. You will need to show genuine financial hardship and provide a realistic repayment plan. However, the lender may be stricter the second time around."
            }
          },
          {
            "@type": "Question",
            "name": "Does a failed settlement lead to a cheque bounce case?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you issued post-dated cheques as part of the settlement and they bounce, the lender can file a criminal case under Section 138 of the Negotiable Instruments Act."
            }
          },
          {
            "@type": "Question",
            "name": "What is the impact of a failed OTS on my CIBIL score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A failed OTS is extremely damaging. Not only does the original 'default' status remain, but the breach of contract reflects poorly on your creditworthiness, potentially dropping your score by another 50-100 points."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a 'settled' status stay on a credit report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A settled status typically remains on your CIBIL report for 7 years from the date of settlement or the last payment, significantly affecting future loan approvals."
            }
          },
          {
            "@type": "Question",
            "name": "Can IARC take my property if the settlement fails?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For secured loans, ARCs have powers under the SARFAESI Act to seize and sell the collateral after following due process. For unsecured loans, they must obtain a court order or decree for attachment of assets."
            }
          },
          {
            "@type": "Question",
            "name": "Is it better to restructuring a loan than settling it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Restructuring (lowering EMIs by increasing tenure) is better for your credit score than settlement, as the account is marked as 'Restructured' rather than 'Settled' or 'Defaulted'."
            }
          },
          {
            "@type": "Question",
            "name": "Can a third-party agency help if my settlement failed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, professional debt settlement agencies like SettleLoans can mediate between you and the ARC/bank to find a middle ground and stop harassment while a new agreement is reached."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do first if I realize I cannot pay the settlement amount?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Immediately contact the lender or the ARC. Proactively explaining your situation before the deadline might allow for a small extension or revision of the terms rather than an outright breach."
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
      <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
            Debt Recovery Experts
          </span>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
            Loan Settlement After <br className="hidden md:block"/> Settlement Failed: Recovery Path
          </h1>
          <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.2] font-normal">
            Did your OTS agreement fall through? Facing pressure from IARC? Take control of your financial future today with expert legal guidance and professional debt negotiation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Talk to Our Experts
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
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
                Loan Settlement Failed
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
        
        {/* Left Column: TOC */}
        <aside className="hidden lg:block w-1/4 relative">
          <div className="sticky top-24">
            <TableOfContents 
              items={[
                 { id: "settlement-crisis", title: "The Crisis of Failed Settlement" },
                 { id: "what-happens-next", title: "Legal Consequences of Breach" },
                 { id: "understanding-iarc", title: "Who is IARC? (International ARC)" },
                 { id: "the-ots-reinstatement", title: "The OTS Reinstatement Trap" },
                 { id: "renegotiation-strategies", title: "Negotiating a Second Chance" },
                 { id: "credit-score-impact", title: "CIBIL Impact After Failure" },
                 { id: "legal-rights-india", title: "Your Legal Rights in 2025" },
                 { id: "professional-help", title: "Why Professional Help Matters" },
                 { id: "success-stories", title: "Recovery Success Stories" },
                 { id: "faqs", title: "Frequently Asked Questions" }
              ]}
            />
          </div>
        </aside>

        {/* Middle Column: Main Content */}
        <article className="w-full lg:w-2/4 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
          
          <section id="settlement-crisis" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
              The Crisis of a Failed Loan Settlement: <span className="text-black">When the Solution Becomes a Problem</span>
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
               <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                You fought hard for a settlement. You spent months negotiating with the bank, managed to get a One-Time Settlement (OTS) letter, and saw a light at the end of the tunnel. But then, life happened. A medical emergency, a sudden business downturn, or a delay in funds meant you missed a deadline. Now, the bank is calling again, and the terms have suddenly changed.
              </p>
              <p className="text-lg leading-relaxed text-[var(--color-text-body)]">
                A failed loan settlement is one of the most stressful financial positions a person can find themselves in. It feels like you are back at square one, but with one major difference: you have lost the trust of the lender. At SettleLoans, we understand that "failed" is not the end of the road. It is a pivot point that requires a strategy of expert negotiation rather than further delays.
              </p>
            </div>
          </section>

          <section id="what-happens-next" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
              What Happens When a Settlement Agreement is Breached?
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              In India, a settlement letter is a binding contract. When you sign it, you agree to pay a specific amount by a specific date. If you fail to do so, the "sacrifice" made by the bank is automatically withdrawn.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-800 mb-2">Reinstatement of Dues</h4>
                <p className="text-sm text-red-900/80">The bank adds back the 30% to 60% they waived off, plus panel interest from the date of the first default.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                <h4 className="font-bold text-orange-800 mb-2">Legal Escalation</h4>
                <p className="text-sm text-orange-900/80">Pending cases under Section 138 (Cheque Bounce) or Section 25 (Payment and Settlement Systems Act) are revived.</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              Lenders quickly move to recovery mode. If your loan was already an NPA (Non-Performing Asset), they might sell the debt to an Asset Reconstruction Company (ARC) at this stage. This is where companies like IARC come into the picture.
            </p>
          </section>

          <section id="understanding-iarc" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
              Who is IARC? (International Asset Reconstruction Company)
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              International Asset Reconstruction Company (IARC) is a premier Asset Reconstruction Company in India. They specialize in buying problematic loan portfolios from banks. If you have received a letter from IARC, it means your bank has given up on recovering the money directly and has sold your "debt" to them at a discount.
            </p>
            <div className="bg-gray-50 p-8 rounded-2xl border border-[#DEDEDE] mb-8">
               <h3 className="text-xl font-black text-[#1F5EFF] mb-4">Why IARC is Different from a Bank</h3>
               <ul className="space-y-4">
                 <li className="flex items-start">
                   <div className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2 mr-3 shrink-0"></div>
                   <div><strong>Focus:</strong> Banks focus on lending; IARC focuses exclusively on recovery. They are professionals in this field.</div>
                 </li>
                 <li className="flex items-start">
                   <div className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2 mr-3 shrink-0"></div>
                   <div><strong>Flexibility:</strong> Because ARCs buy debt at a discount, they sometimes have more flexibility in settlement terms than the original bank.</div>
                 </li>
                 <li className="flex items-start">
                   <div className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2 mr-3 shrink-0"></div>
                   <div><strong>Resolution Portals:</strong> IARC uses modern digital portals to manage settlements, making the process faster but also more rigid once an agreement is reached.</div>
                 </li>
               </ul>
            </div>
            <p className="text-lg leading-relaxed">
              If a settlement with IARC fails, the consequences are sharp. They have powers under the SARFAESI Act to pursue recovery of secured assets, and they are very persistent with unsecured debts.
            </p>
          </section>

          <section id="the-ots-reinstatement" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">
              The OTS Reinstatement Trap
            </h2>
            <p className="mb-4">
              Many borrowers do not realize that the "waiver" in an OTS is conditional. If you fail to pay the final installment, the bank doesn't just keep your previous payments; they apply them to the original, massive total.
            </p>
            <div className="flex flex-col md:flex-row gap-6 mt-6 p-6 bg-red-50 rounded-xl border-l-4 border-red-500">
               <div className="flex-1">
                 <p className="text-red-900 font-bold mb-2">Example Case:</p>
                 <p className="text-sm text-red-800">Original Debt: ₹10 Lakhs. OTS Amount: ₹4 Lakhs. Paid: ₹3 Lakhs. Missed final ₹1 Lakh. Result? The bank reinstates the full ₹10 Lakhs, subtracts your ₹3 Lakhs, and now you owe ₹7 Lakhs plus new penalties. You are worse off than when you started.</p>
               </div>
            </div>
          </section>

          <section id="renegotiation-strategies" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Negotiating a Second Chance: Professional Strategies</h2>
            <p className="mb-6">
              Can you get a second settlement? Yes, but you need a new approach. The lender will not believe your word alone this time. You must provide a comprehensive "Re-negotiation Dossier" that addresses the previous failure head-on. Lenders, including IARC, are fundamentally interested in recovery, but they hate uncertainty. Your goal is to eliminate their fear of a second breach.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                { title: "Proof of New Hardship", desc: "Show what went wrong with the first payment. Medical bills, bank statements showing freezing of assets, or a termination letter are essential documentation." },
                { title: "Instant Downpayment", desc: "Offering even 10-15% of the new proposed amount upfront within 24 hours of the new letter is a powerful signal of seriousness." },
                { title: "Third-Party Mediation", desc: "Using a professional legal firm like SettleLoans adds credibility to your offer. ARCs often prefer dealing with professional negotiators who understand the legal framework." },
                { title: "Shorter Tenure", desc: "Propose a 3-month plan instead of a 12-month plan. The less time the bank is exposed to risk, the more likely they are to accept a discount." },
                { title: "Collateral Evaluation", desc: "If the loan is secured, providing an updated valuation that shows the difficulty of a quick sale can motivate the lender to settle." },
                { title: "Guarantor Involvement", desc: "Bringing in a co-signer or a family guarantor for the settlement amount can provide the extra layer of security the bank needs." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-[#DEDEDE] shadow-sm">
                  <h4 className="font-black text-[#1F5EFF] mb-2">{item.title}</h4>
                  <p className="text-sm opacity-80">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-lg leading-relaxed mt-6">
              The psychology of a second-chance negotiation is different. The first time, you were just a borrower in trouble. The second time, you are a "contract breaker" in their eyes. This is why the presentation of your case must be flawless. Every document must be verified, and every promise must be backed by a clear source of funds.
            </p>
          </section>

          <section id="iarc-deep-dive" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">A Deep Dive into IARC Resolution Protocols</h2>
            <p className="text-lg leading-relaxed mb-6">
              Working with the International Asset Reconstruction Company requires understanding their operational DNA. Unlike a retail bank manager who might be juggling thousands of savings accounts, an IARC resolution officer has one job: to extract the maximum value from the bad debt they purchased.
            </p>
            <div className="bg-[#2E2E2E] text-[#DEDEDE] p-8 rounded-2xl mb-8">
               <h3 className="text-xl font-black mb-4">The IARC Resolution Timeline</h3>
               <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="font-bold text-[#1F5EFF]">Phase 1:</div>
                    <div className="text-sm">Acquisition and Initial Contact. IARC notifies you that the debt has been assigned to them. This is the best time to initiate a settlement before legal costs are added.</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="font-bold text-[#1F5EFF]">Phase 2:</div>
                    <div className="text-sm">Account Audit. Their legal team reviews the validity of the debt and the status of any pending court cases (like Section 138) inherited from the bank.</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="font-bold text-[#1F5EFF]">Phase 3:</div>
                    <div className="text-sm">Resolution Offer. They may offer a One Time Settlement. If you have already failed a settlement with the bank, they will use that history as leverage.</div>
                  </div>
               </div>
            </div>
            <p className="text-lg leading-relaxed">
              If you find yourself in Phase 3 after a failed bank OTS, you must be extremely careful. IARC's digital platforms track every single interaction. Any inconsistency in your story across different calls will be flagged. This is why having a single point of professional contact is vital to maintaining a consistent negotiation stance.
            </p>
          </section>

          <section id="credit-score-impact" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The CIBIL Impact: Rebuilding After Failure</h2>
            <p className="mb-6">
              A failed settlement appears on your credit report as a "Serious Default" or "Breach of Contract." This can stay on your record for 7 years and drop your score below 600.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Steps to Fix Your Credit</h3>
               <ol className="list-decimal pl-6 space-y-3 text-blue-900/80">
                  <li><strong>Close the Defaults:</strong> You cannot fix your score until the "defaulting" accounts are marked as Settled or Closed.</li>
                  <li><strong>Review Inaccuracies:</strong> Check if the bank reported the wrong amount after the failed settlement.</li>
                  <li><strong>Secured Credit Cards:</strong> Once settled, get an FD-backed credit card to build fresh, positive payment history.</li>
                  <li><strong>Consistency:</strong> For the next 24 months, not a single payment should be a day late.</li>
               </ol>
            </div>
          </section>

          <section id="legal-rights-india" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Your Legal Rights in 2025</h2>
            <p className="mb-6">Even if you failed to pay a settlement, you still have rights protected by the Reserve Bank of India (RBI) and Indian Courts:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>Protection from Coercion:</strong> No recovery agent, whether from a bank or IARC, can use physical violence or abusive language.</li>
              <li><strong>Calling Hours:</strong> They cannot call you before 8 AM or after 7 PM as per the latest 2025 guidelines.</li>
              <li><strong>Right to Privacy:</strong> Your neighbors or colleagues should not be informed about your debt status.</li>
              <li><strong>Right to Counsel:</strong> You have the right to have a legal representative handle communications with the bank or ARC.</li>
            </ul>
          </section>

          <section id="professional-help" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Why Professional Help is Non-Negotiable Now</h2>
            <p className="mb-6">When a settlement fails, the bank's system flags you as "high risk." Automated notices begin, and the legal department gets involved. Trying to negotiate alone at this stage often leads to rejection.</p>
            <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
               <h3 className="text-2xl font-black text-emerald-800 mb-4 text-center">How SettleLoans Rescues Your Case</h3>
               <div className="grid md:grid-cols-3 gap-6">
                 <div className="text-center">
                    <div className="text-emerald-500 font-bold text-3xl mb-2">01</div>
                    <div className="font-bold">Legal Shield</div>
                    <p className="text-xs text-emerald-900/70">Stopping harassment through formal legal notices.</p>
                 </div>
                 <div className="text-center">
                    <div className="text-emerald-500 font-bold text-3xl mb-2">02</div>
                    <div className="font-bold">Fresh Audit</div>
                    <p className="text-xs text-emerald-900/70">Recalculating your dues to find errors in bank's reinstatement.</p>
                 </div>
                 <div className="text-center">
                    <div className="text-emerald-500 font-bold text-3xl mb-2">03</div>
                    <div className="font-bold">High-Level Connect</div>
                    <p className="text-xs text-emerald-900/70">Reaching out to senior management at Banks/IARC who understand hardship better than agents.</p>
                 </div>
               </div>
            </div>
          </section>

          <section id="success-stories" className="scroll-mt-32 mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-12 text-center">Real Stories of Recovery</h2>
            <div className="space-y-8">
              {[
                { 
                  name: "Suresh Malik", 
                  loc: "Pune", 
                  issue: "Breached ₹5L Case", 
                  res: "Final Closure at ₹4.2L", 
                  story: "Suresh had a failed settlement with a private bank. The bank demanded ₹12 lakhs after the breach. SettleLoans stepped in, proved his medical crisis, and negotiated a fresh ₹4.2 lakh closure with IARC."
                },
                { 
                  name: "Anita Verma", 
                  loc: "Delhi", 
                  issue: "IARC Legal Threat", 
                  res: "3-Month Installment Plan", 
                  story: "Anita's personal loan was sold to IARC. She missed her first settlement payment. SettleLoans represented her, stopped the legal process, and got her a 3-month extended window to pay."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm relative">
                  <div className="absolute -top-4 left-8 bg-[#1F5EFF] text-white py-1 px-4 rounded-full text-xs font-bold uppercase tracking-widest">Case Study #{i+1}</div>
                   <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-xl font-bold">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.loc}</p>
                      </div>
                      <div className="text-right">
                        <span className="block text-red-600 font-black text-sm">{item.issue}</span>
                        <span className="block text-green-600 font-black text-sm">{item.res}</span>
                      </div>
                   </div>
                   <p className="italic text-gray-600 leading-relaxed">"{item.story}"</p>
                </div>
              ))}
            </div>
          </section>

          <section id="faqs" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Expert Answers to Your Concerns</h2>
            <div className="space-y-4">
              {[
                { q: "What is the very first step if a settlement fails?", a: "The first step is to stop making small, partial payments without a letter. These are consumed as 'interest' and don't help your settlement. Instead, call the lender or seek professional help to get a fresh agreement." },
                { q: "Who is IARC exactly?", a: "International Asset Reconstruction Company is an entity that buys bad loans from banks. They are your new legal creditor once they acquire your loan." },
                { q: "Can I be arrested for failing a loan settlement?", a: "Loan default is a civil matter. You cannot be arrested just for not paying. However, if a cheque bounces (Section 138), a criminal case can be filed, which could technically lead to arrest if warrants are ignored." },
                { q: "Will the bank accept the same amount again?", a: "Unlikely. Usually, the amount increases because interest has been running. However, skilled negotiators can often get a deal close to the original one." },
                { q: "What should I do if IARC agents are harassing me?", a: "Record the calls, note the time/date, and file a formal grievance on the IARC portal. If it persists, appoint a legal team like SettleLoans to handle them." },
                { q: "Can I settle a failed business loan?", a: "Yes. Business loan settlements often involve more documentation like balance sheets and loss statements, but the process of renegotiation is possible." },
                { q: "Does a failed settlement ruin my chances of future loans?", a: "For 2-3 years, yes. But once you successfully close the debt and rebuild your score, you will become eligible for credit again." },
                { q: "How much percentage do ARCs like IARC take for settlement?", a: "It varies. On an average, settlements happen between 30% and 50% of the total outstanding, but it depends on the age of the debt and your hardship." },
                { q: "Is a verbal promise of settlement valid?", a: "Never. Only a printed or digital letter on the company's official letterhead with a signature/stamp is valid. Verbal promises from agents have no legal standing." },
                { q: "Do I need to pay fees upfront for debt settlement help?", a: "Legitimate firms like SettleLoans offer a free initial analysis. Fee structures for the actual process should be transparent and discussed before you start." }
              ].map((faq, i) => (
                <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden shadow-sm">
                  <summary className="flex justify-between items-center p-5 cursor-pointer font-bold text-[#2E2E2E] list-none bg-gray-50 group-open:bg-[#E3EDFF]">
                    <span className="text-lg pr-4">{i + 1}. {faq.q}</span>
                    <span className="transition-transform group-open:rotate-180">
                      <svg className="w-5 h-5 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                    </span>
                  </summary>
                  <div className="p-5 text-[#2E2E2E] leading-relaxed border-t border-[#DEDEDE] bg-white">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-24 pt-12 border-t border-[#DEDEDE] text-center italic text-gray-400 text-sm">
             Disclaimer: SettleLoans is a consultancy and legal mediation firm. We are not a bank or lender. Debt settlement involves risks to credit scores and financial terms.
          </section>

        </article>

        {/* Right Column: CTA & Related */}
        <aside className="hidden lg:block w-1/4 relative">
          <div className="sticky top-24 space-y-8">
            
             <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
               <div className="bg-[#1F5EFF] p-4 text-center">
                 <h3 className="text-lg font-black text-white px-2">Struggling with a Failed OTS?</h3>
               </div>
               <div className="p-8 text-center">
                <p className="mb-8 text-sm text-[#DEDEDE] opacity-80 leading-relaxed">
                  Don't let the bank pressure you into a bad deal. Get a free, confidential debt audit today.
                </p>
                <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-[12px] hover:scale-105 transition-all shadow-md">
                   Get A Free Audit
                </Link>
                <div className="mt-6 flex flex-col gap-3 text-[10px] text-[#DEDEDE]/40 font-bold uppercase tracking-widest text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                    Legal Harassment Support
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                    IARC Expert Negotiation
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                    Credit Rebuilding Guide
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6 border-b pb-2">Related Information</h3>
              <ul className="space-y-5 text-sm font-bold">
                 <li>
                  <Link href="/loan-settlement-with-iarc" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-all">
                    <div className="w-2 h-2 bg-gray-200 rounded-full mr-3 group-hover:bg-[#1F5EFF] group-hover:scale-125 transition-all"></div>
                    Loan Settlement with IARC
                  </Link>
                </li>
                <li>
                  <Link href="/how-to-manage-loan-with-no-job" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-all">
                    <div className="w-2 h-2 bg-gray-200 rounded-full mr-3 group-hover:bg-[#1F5EFF] group-hover:scale-125 transition-all"></div>
                    Manage Loan with No Job
                  </Link>
                </li>
                 <li>
                  <Link href="/ignoring-calls-of-recovery-agent" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-all">
                     <div className="w-2 h-2 bg-gray-200 rounded-full mr-3 group-hover:bg-[#1F5EFF] group-hover:scale-125 transition-all"></div>
                    Dealing with Agents
                  </Link>
                </li>
                 <li>
                  <Link href="/credit-score-improvement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-all">
                     <div className="w-2 h-2 bg-gray-200 rounded-full mr-3 group-hover:bg-[#1F5EFF] group-hover:scale-125 transition-all"></div>
                    CIBIL Rebuilding
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
