import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import ReviewSnippets from "@/components/ReviewSnippets";

export const metadata: Metadata = {
  title: "How to Officially Submit a Loan Settlement Offer to Your Lender in India",
  description: "A step-by-step guide on officially submitting a loan settlement offer to banks or NBFCs in India. Learn about assessment, documentation, negotiation, and templates.",
  alternates: {
    canonical: "https://settleloans.in/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender",
  },
};

export default function SubmitLoanSettlementOfferPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender#webpage",
        "url": "https://settleloans.in/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender",
        "name": "How to Officially Submit a Loan Settlement Offer to Your Lender",
        "description": "Comprehensive guide on the formal process of proposing a loan settlement to financial institutions in India.",
        "breadcrumb": { "@id": "https://settleloans.in/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender#breadcrumb",
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
            "name": "How to Submit Settlement Offer",
            "item": "https://settleloans.in/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender#article",
        "headline": "How to Officially Submit a Loan Settlement Offer to Your Lender: A Step-by-Step Guide",
        "description": "Master the art of bank negotiation and learn the exact steps to submit a professional loan settlement proposal in India.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Editorial Team"
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
        "@id": "https://settleloans.in/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender#product",
        "name": "Loan Settlement Consultation",
        "description": "Expert assistance in drafting and submitting professional loan settlement offers to Indian banks and NBFCs.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh M." },
            "datePublished": "2024-01-15",
            "reviewBody": "The template provided here worked perfectly. My bank finally took my request seriously when I submitted the formal letter.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When is the best time to submit a settlement offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best time is usually after 90 to 180 days of default, once the loan is classified as an NPA. Banks are more receptive to settlements when they realize regular recovery is unlikely."
            }
          },
          {
            "@type": "Question",
            "name": "Can I submit a settlement offer via email?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can initiate the process via email to the bank's nodal officer or recovery department, but it is always recommended to also send a physical copy via Speed Post with acknowledgement due for legal records."
            }
          },
          {
            "@type": "Question",
            "name": "What documents should I attach with the settlement offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Attach proof of financial hardship such as a job resignation letter, medical reports, bank statements showing low balance, or business closure certificates."
            }
          },
          {
            "@type": "Question",
            "name": "Should I pay the settlement amount before getting the letter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NEVER pay anything before receiving a formal settlement letter on the bank's official letterhead that clearly states the waiver and the finality of the closure."
            }
          },
          {
            "@type": "Question",
            "name": "How much of a discount can I ask for in a settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically, you can start by offering 25% to 30% of the total outstanding. Most settlements conclude between 40% and 60% of the total dues, depending on the loan type and bank policy."
            }
          },
          {
            "@type": "Question",
            "name": "What is a 'No Dues Certificate' (NDC)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An NDC is an official document issued by the bank after full payment of the settled amount, confirming that you no longer owe any money to the institution."
            }
          },
          {
            "@type": "Question",
            "name": "Will the bank accept a settlement for a home loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banks rarely settle home loans because they have the property as collateral. They prefer auctioning the property. Settlement is mostly for unsecured loans like personal loans and credit cards."
            }
          },
          {
            "@type": "Question",
            "name": "Can a settlement offer be rejected?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, banks can reject an offer if they believe you have the capacity to pay or if the offer is too low. In such cases, you need to revise your offer and provide stronger proof of hardship."
            }
          },
          {
            "@type": "Question",
            "name": "Does a settlement affect my future loan eligibility?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, it will be marked as 'Settled' on your CIBIL report, which negative impacts your score. Rebuilding your credit takes 1 to 2 years of disciplined financial behavior thereafter."
            }
          },
          {
            "@type": "Question",
            "name": "Should I hire a lawyer for a settlement offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While not mandatory, having a professional service or lawyer helps in drafting a legally sound proposal and protecting you from aggressive recovery tactics."
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
              Official Bank Negotiation Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              How to Officially Submit a <br className="hidden md:block" /> Loan Settlement Offer
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Take control of your debt journey. Learn the professional way to draft, submit, and negotiate a settlement offer that banks cannot ignore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Get Expert Drafting Help
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
                <li className="font-bold text-[#2E2E2E]" aria-current="page">How to Submit Settlement Offer</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <TableOfContents
              items={[
                { id: "introduction", title: "Introduction" },
                { id: "pre-submission-assessment", title: "The Financial Audit" },
                { id: "documentation-prep", title: "Building Your Evidence" },
                { id: "finding-the-right-channel", title: "The Communication Path" },
                { id: "drafting-the-letter", title: "The Perfect Proposal" },
                { id: "negotiation-strategies", title: "Negotiation Mastery" },
                { id: "the-settlement-letter", title: "Verifying the Offer" },
                { id: "payment-and-closure", title: "Finalizing the Deal" },
                { id: "post-settlement-steps", title: "Life After Settlement" },
                { id: "legal-rights", title: "Your Legal Shield" },
                { id: "fintech-vs-bank", title: "Different Lender Rules" },
                { id: "common-mistakes", title: "Mistakes to Avoid" },
                { id: "expert-tips", title: "Pro Negotiation Tips" },
                { id: "success-stories", title: "Real Life Results" },
                { id: "future-credit", title: "Rebuilding Your Score" },
                { id: "faqs", title: "Common Questions" }
              ]}
            />
          </aside>

          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            <section id="introduction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Power of a Formal Offer: <span className="text-black">Professionalism is Your Best Asset</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <p className="text-lg leading-relaxed mb-6">
                  Falling into debt is a stressful experience, but the silence from the borrower is what often triggers aggressive recovery actions from banks. When you decide to settle, you are making a conscious choice to resolve your obligations within your capacity. However, simply telling a recovery agent that you want a settlement is not enough. You must submit an official, written offer that the bank's internal committees can review.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  A formal settlement offer shifts the dynamic from "defaulter vs collector" to "negotiator vs creditor." It shows that you are serious, informed, and acting in good faith. In this guide, we will walk you through the precise steps required to officially submit a loan settlement offer in India, ensuring your rights are protected and your voice is heard.
                </p>
                <p className="text-lg leading-relaxed font-bold text-[#1F5EFF]">
                  Remember, a well-drafted offer is often the difference between a rejection and a 50% waiver.
                </p>
              </div>
            </section>

            <section id="pre-submission-assessment" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Step 1: The Deep Financial Audit</h2>
              <p className="text-lg leading-relaxed mb-6">
                Before you even pick up a pen or open your laptop to draft a letter, you must perform a brutal audit of your finances. Banks will ask for proof of your situation, and more importantly, they will test your offer. If you offer a lump sum that is obviously beyond your current means, the bank might suspect you have hidden assets.
              </p>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                <h3 className="text-xl font-bold mb-4">What to Calculate:</h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>Total Outstanding (Principal + Interest)</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>Liquid Cash Available</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>Family/Friend Loans Potential</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>Monthly Living Expenses</li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Your settlement offer should ideally be a One Time Settlement (OTS). While some banks allow 2-3 installments, the best discounts are reserved for those who can pay in one go. If you can only afford 30% of the total dues, that is your starting point. Do not promise 50% to "win" a settlement only to default on the settlement itself - this will make you ineligible for any future waivers.
              </p>
            </section>

            <section id="documentation-prep" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Step 2: Building Your Hardship Evidence File</h2>
              <p className="text-lg leading-relaxed mb-6">
                Indian banks operate on paper and evidence. "I don't have money" is a statement; "Here is my job termination letter and empty bank statement" is evidence. To get a high waiver, you must prove that your default is due to genuine circumstances beyond your control, not due to a lack of intent.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm text-center">
                  <h4 className="font-bold mb-2">Medical Files</h4>
                  <p className="text-sm text-gray-500">Hospital bills, discharge summaries, or chronic illness reports.</p>
                </div>
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm text-center">
                  <h4 className="font-bold mb-2">Income Loss</h4>
                  <p className="text-sm text-gray-500">Pink slips, salary slips showing cuts, or business loss audits.</p>
                </div>
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm text-center">
                  <h4 className="font-bold mb-2">Asset Status</h4>
                  <p className="text-sm text-gray-500">Proof that you do not own other houses or luxury assets the bank can seize.</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Collate all these into a digital and physical folder. When you submit your offer letter, you will attach copies of these documents. This forces the bank's recovery manager to move your file from the "Active Recovery" pile to the "Settlement Consideration" pile.
              </p>
            </section>

            <section id="finding-the-right-channel" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Step 3: Finding the Right Communication Channel</h2>
              <p className="text-lg leading-relaxed mb-6">
                Where you send your letter is as important as what you write. Sending it to a random customer care email will likely result in a generic auto-reply. To get your offer noticed, you must target the departments that have the power to say "Yes."
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <strong className="text-[#1F5EFF]">1. The Home Branch:</strong> Always start with the branch where your loan was sanctioned. Meet the Branch Manager or the Credit Officer.
                </li>
                <li className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <strong className="text-[#1F5EFF]">2. The Nodal Officer:</strong> Every bank has a Principal Nodal Officer for grievances. They can intervene if lower level staff refuse to accept your letter.
                </li>
                <li className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <strong className="text-[#1F5EFF]">3. ARC Managers:</strong> If your loan was sold to an Asset Reconstruction Company (like Phoenix or IARC), you must deal with their specific settlement desk.
                </li>
              </ul>
              <p className="text-lg leading-relaxed mb-6">
                Always send formal communications via **Register Post AD or Speed Post**. This gives you a legal proof of receipt. If the bank later claims they never received your offer, your tracking receipt will hold up in court or before the Ombudsman.
              </p>
            </section>

            <section id="drafting-the-letter" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Step 4: Drafting the Perfect Settlement Proposal</h2>
              <p className="text-lg leading-relaxed mb-6">
                Your letter should be humble but firm. Avoid emotional venting; stick to the facts of your hardship and your clear intent to resolve the debt. Below is a professional template designed for Indian banks.
              </p>
              <div className="bg-[#2E2E2E] text-white p-8 rounded-2xl mb-8 font-mono text-sm border-l-8 border-[#1F5EFF]">
                <p>[Your Name]<br/>[Your Address]<br/>[Date]</p>
                <p className="my-4">To,<br/>The Branch Manager / Recovery Head<br/>[Bank Name]<br/>[Branch Address]</p>
                <p className="font-bold my-4">Subject: Request for One Time Settlement (OTS) - Loan A/c: [Account Number]</p>
                <p>Dear Sir/Madam,</p>
                <p className="my-4">I am writing regarding the above mentioned loan account. Due to [Specific Hardship - e.g. job loss with company closure], I have been unable to service my EMIs since [Month/Year].</p>
                <p className="my-4">I genuinely wish to close this liability. I have arranged a sum of ₹[Amount] as a full and final settlement. I request you to waive the remaining dues, including penalties and accrued interest, as I have no other means of payment.</p>
                <p className="my-4">Attached are my [Hardship Documents]. I look forward to your formal acceptance letter on the bank's letterhead.</p>
                <p>Sincerely,<br/>[Your Signature]</p>
              </div>
            </section>

            <section id="negotiation-strategies" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Step 5: Master the Art of Bank Negotiation</h2>
              <p className="text-lg leading-relaxed mb-6">
                Once the bank receives your offer, they will likely counter it. If you offered 30%, they might ask for 80%. This is normal. Negotiation is a process of finding a middle ground where the bank gets more than what they would get in a court battle, and you get a discount you can afford.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <h4 className="font-bold mb-2">The "Capacity To Pay" Test</h4>
                  <p className="text-sm text-gray-600">The bank's recovery officer will check your CIBIL to see if you are paying other loans. If you are paying a car loan but not the personal loan, your settlement will be rejected. You must show total financial distress.</p>
                </div>
                <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <h4 className="font-bold mb-2">The "Lump Sum" Advantage</h4>
                  <p className="text-sm text-gray-600">Always emphasize that the money is coming from a relative or a one-time source. Tell them that if they don't accept it now, the money might be used for other emergencies and won't be available later.</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Be patient. The bank's committee only meets once or twice a month. Do not rush the process, or you will signal that you are desperate to close, which will lead them to demand a higher amount.
              </p>
            </section>

            <section id="the-settlement-letter" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Step 6: Never Pay Without the Settlement Letter</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-4">The Most Important Rule:</h3>
                <p className="text-red-900 leading-relaxed mb-4">
                  Recovery agents often promise you a settlement on a phone call. They might say, "Just pay ₹20,000 today and consider it settled." **This is a trap.** Without a formal letter from the bank, that payment will be treated as part-payment of the total debt, and you will still owe the rest.
                </p>
                <p className="text-red-900 font-bold underline">
                  Wait for the formal letter on the Bank's Official Letterhead.
                </p>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                A valid settlement letter must include: Your Loan Account Number, The exact settlement amount, The deadline for payment, and a clause stating that no further dues remain after this payment. If any of these are missing, ask the bank to rewrite the letter.
              </p>
            </section>

            <section id="payment-and-closure" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Step 7: Finalizing Payment and Closure</h2>
              <p className="text-lg leading-relaxed mb-6">
                Once you have the letter, make the payment through a traceable method: **NEFT, RTGS, or Demand Draft**. Avoid paying in cash at the counter unless you get a specific receipt that mentions the Settlement Letter reference.
              </p>
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-8 flex flex-col items-center text-center">
                <h4 className="font-bold mb-4">The "No Dues Certificate" (NDC)</h4>
                <p className="text-sm mb-6">Within 15 to 30 days of your payment, the bank is legally obligated to issue an NDC. This is your "freedom paper." Store multiple copies of this document digitally, you will need it for the next 7 years.</p>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-2">✓</div>
              </div>
            </section>

            <section id="legal-rights" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Your Legal Protections in the Settlement Process</h2>
              <p className="text-lg leading-relaxed mb-6">
                The Reserve Bank of India (RBI) has laid out clear guidelines for how banks must handle settlements and defaults. You are protected by the law even if you owe money.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div><strong>Right to Communication:</strong> Banks cannot send agents to your house without prior notice, and they certainly cannot call you at odd hours (before 8 AM or after 7 PM).</div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div><strong>Right to Appeal:</strong> If a bank refuses to even look at your settlement offer despite valid hardship, you can approach the Banking Ombudsman.</div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div><strong>Fair Practice Code:</strong> Lenders must maintain human dignity during recovery. Verbal abuse or public shaming is a criminal offense under the IPC.</div>
                </li>
              </ul>
            </section>

            <ReviewSnippets 
              title="Verified Settlement Submission Success"
              reviews={[
                {
                  name: "Anil K.",
                  loc: "Pune",
                  loan: "Credit Card ¥3.5L",
                  res: "Status: Settled for ¥1.2L",
                  story: "I sent three letters and they didn't reply. Finally, I went to the nodal officer with my medical bills. They issued the letter in 10 days. SettleLoans' drafting advice was key."
                },
                {
                  name: "Saritha V.",
                  loc: "Kochi",
                  loan: "Personal Loan ¥6L",
                  res: "Status: Settled for ¥2.8L",
                  story: "The bank wanted ¥5L. I stood firm and showed them my business loss statements. Negotiation took 3 months but it was worth it. I am finally debt free."
                },
                {
                  name: "Rajiv M.",
                  loc: "Ahmedabad",
                  loan: "Kotak Personal Loan ¥4L",
                  res: "Status: 55% Waiver Secured",
                  story: "I didn't know I had to send a physical letter via Speed Post. Once I followed the guide here, the bank manager actually called me back. Settlement was closed in 45 days!"
                },
                {
                  name: "Deepa R.",
                  loc: "Hyderabad",
                  loan: "Axis Credit Card ¥2.5L",
                  res: "Status: Officially Closed",
                  story: "I was paying recovery agents small amounts based on phone calls. This guide saved me from that trap. I waited for the formal letter and then paid. Forever grateful!"
                }
              ]}
            />

            <section id="faqs" className="scroll-mt-32 mb-12">

              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4 not-prose">
                {[
                  { q: "How long does the entire offer to payment process take?", a: "Generally, it takes 30 to 90 days. This includes the submission, the negotiation period, and the committee's approval cycle." },
                  { q: "Can I use my EPF money to pay for a settlement?", a: "Yes, you can withdraw your EPF for certain hardships or after a period of unemployment. Using EPF to settle expensive debt is often a good financial trade-off." },
                  { q: "What if I lost the bank settlement letter after paying?", a: "Contact your branch immediately and request a duplicate or an NDC based on your bank statement. This is why digital backups are vital." },
                  { q: "Will the bank call my relatives if I submit an offer?", a: "No, once an official negotiation is underway, harassment usually stops as the bank realizes you are willing to cooperate." },
                  { q: "Can I settle a loan that is currently in Lok Adalat?", a: "Yes! Lok Adalat is actually one of the best places to finalize a settlement as it has the stamp of a court-supervised process." }
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
              Disclaimer: SettleLoans is a consultancy. We provide guidance on bank negotiations. The final decision on any settlement lies with the respective lender.
            </div>

            <div className="lg:hidden mt-16 mb-8">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl border border-[#1F5EFF]/20">
                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                  <h3 className="text-2xl font-black mb-2">Need a Professional Offer?</h3>
                  <p className="text-sm">Let our legal experts draft your settlement proposal today.</p>
                </div>
                <div className="p-8 text-center text-[#DEDEDE]">
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all text-lg">Talk to an Expert</Link>
                </div>
              </div>
            </div>
          </article>

          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl border border-[#DEDEDE]/10 group">
                <div className="bg-[#1F5EFF] p-4 text-center">
                  <h3 className="text-lg font-black text-white">Draft Your Offer</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">Don't let a poorly written letter lead to a rejection. Get professional help.</p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">Fix My Debt Today</Link>
                  <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">100% Confidential</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Must Read Guides</h3>
                <ul className="space-y-4 text-sm font-bold">
                  <li><Link href="/loan-settlement-process-in-india" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors"><span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF]"></span>The 2024 Process Guide</Link></li>
                  <li><Link href="/what-documents-are-required-for-loan-settlement-with-a-professional-service" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors"><span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF]"></span>Document Checklist</Link></li>
                  <li><Link href="/is-loan-settlement-a-good-option-for-borrowers" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors"><span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF]"></span>Is Settlement Right?</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
