import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Does Settlement Erase the Debt Completely? | The Unspoken Truth - SettleLoans",
  description: "Wondering if loan settlement clears your debt completely? Discover the impact on CIBIL, the difference between 'Settled' & 'Closed', and how to rebuild your credit after settlement.",
  alternates: {
    canonical: "https://settleloans.in/does-settlement-erase-the-debt-completely",
  },
};

export default function DebtSettlementTruthPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/does-settlement-erase-the-debt-completely#webpage",
        "url": "https://settleloans.in/does-settlement-erase-the-debt-completely",
        "name": "Does Settlement Erase the Debt Completely? | The Unspoken Truth",
        "description": "A comprehensive guide on whether loan settlement erases debt completely and its long-term impact on credit history in India.",
        "breadcrumb": { "@id": "https://settleloans.in/does-settlement-erase-the-debt-completely#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/does-settlement-erase-the-debt-completely#breadcrumb",
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
            "name": "Does Settlement Erase Debt Completely?",
            "item": "https://settleloans.in/does-settlement-erase-the-debt-completely"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/does-settlement-erase-the-debt-completely#article",
        "headline": "Does Settlement Erase the Debt Completely? Everything You Need to Know",
        "description": "Learn the reality of loan settlement in India. We explain why it isn't a complete debt erasure and how it affects your financial future for 7 years.",
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
        "datePublished": "2024-04-18",
        "dateModified": "2024-04-18",
        "mainEntityOfPage": { "@id": "https://settleloans.in/does-settlement-erase-the-debt-completely#webpage" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/does-settlement-erase-the-debt-completely#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does a settlement letter mean my debt is gone forever?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, once you receive a valid 'Full and Final Settlement' letter and pay the agreed amount, the specific debt is legally resolved. The bank cannot demand more money for that specific account. However, the record of 'Settled' remains on your credit report, which affects your future borrowing ability."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between 'Settled' and 'Closed' status?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "'Closed' means you paid the full principal and interest. it is a positive indicator. 'Settled' means you paid a reduced amount because of financial hardship. it is a negative indicator that drops your credit score."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a settled remark stay on my CIBIL report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A 'Settled' remark typically stays on your CIBIL report for 7 years. During this period, most banks will be hesitant to offer you fresh unsecured loans or credit cards."
            }
          },
          {
            "@type": "Question",
            "name": "Can I convert a 'Settled' status to 'Closed' later?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You can pay the remaining balance (the waived off portion) to the bank later. Once paid, the bank will issue a No Dues Certificate, and you can request them to update your status to 'Closed' on the credit bureaus."
            }
          },
          {
            "@type": "Question",
            "name": "Does settlement stop recovery agent harassment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, a completed settlement legally ends the recovery process. The bank withdraws the case from recovery agencies. At SettleLoans, we ensure all harassment stops the moment we initiate the legal negotiation process."
            }
          },
          {
            "@type": "Question",
            "name": "Will a settlement affect my job prospects?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For regular jobs, it usually doesn't. however, for roles in banking, finance, or higher security clearances, some employers conduct background credit checks. A poor credit history might be viewed unfavorably in such specific sectors."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get a home loan after settling a personal loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Getting a home loan immediately after settlement is very difficult. however, if you rebuild your credit score over 24 months and show stable income, some lenders may consider your application, though they may charge higher interest."
            }
          },
          {
            "@type": "Question",
            "name": "Why do banks agree to settlements?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banks agree when they realize the borrower is in genuine distress and recovery of the full amount is unlikely. They prefer to recover a portion of the principal rather than writing off the entire amount as a loss."
            }
          },
          {
            "@type": "Question",
            "name": "Is it possible to settle a secured loan like a home loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is much harder to settle secured loans because the bank can seize the asset. Settlement is usually an option for unsecured debts like personal loans and credit cards where there is no collateral."
            }
          },
          {
            "@type": "Question",
            "name": "Should I use a professional agency for settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Using a professional agency like SettleLoans provides you with legal protection, expert negotiation power, and ensures that you get a genuine settlement letter, protecting you from future legal disputes."
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
            The Truth About Debt Relief
          </span>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
            Does Settlement Erase <br className="hidden md:block"/> the Debt Completely?
          </h1>
          <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
            Understand the myths, the reality, and the long-term impact of loan settlement on your financial future. Knowledge is your first step to freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Professional Advice
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
                Does Settlement Erase Debt Completely?
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
        
        {/* Left Column: TOC */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <TableOfContents 
            items={[
               { id: "myth-vs-reality", title: "The Myth vs. Reality" },
               { id: "understanding-settled", title: "Understanding 'Settled' Status" },
               { id: "cibil-impact", title: "Impact on CIBIL Score" },
               { id: "why-settle", title: "Why Choose Settlement?" },
               { id: "the-7-year-rule", title: "The 7-Year Credit Shadow" },
               { id: "legal-implications", title: "Legal Implications" },
               { id: "settlement-process", title: "The Settlement Guide" },
               { id: "rebuilding-credit", title: "Rebuilding After Settlement" },
               { id: "rbi-rights", title: "Know Your RBI Rights" },
               { id: "checklist", title: "The Final Checklist" },
               { id: "faqs", title: "FAQs" }
            ]}
          />
        </aside>

        {/* Middle Column: Content */}
        <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
          
          <section id="myth-vs-reality" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
              The Great Financial Myth: <span className="text-black">Is Debt Truly Gone?</span>
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
               <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                When you are drowning in debt, the word "settlement" sounds like a life jacket. But does it truly erase the debt completely? The answer is both yes and no. In legal terms, yes, the specific liability towards that bank ends. In financial terms, however, the record of that event remains as a permanent scar on your credit history for years to come.
              </p>
              <p className="text-lg leading-relaxed text-[var(--color-text-body)]">
                Most people believe that once they pay the settlement amount, they can start fresh the next day. This misunderstanding often leads to frustration when they apply for a car loan or a holiday package later. Understanding the nuance between a debt being "paid off" and being "settled" is critical for anyone looking to navigate the treacherous waters of Indian credit markets.
              </p>
            </div>
          </section>

          <section id="understanding-settled" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">
              Understanding the 'Settled' Status
            </h2>
            <p className="mb-6">
              In the world of banking, there is a massive difference between a loan that is 'Closed' and a loan that is 'Settled'. 
            </p>
            <ul className="space-y-4 mb-6">
              <li className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                <strong className="text-blue-900 block mb-1 font-black uppercase text-xs">Closed Status (Full Payment)</strong>
                <p className="text-blue-800">This occurs when you pay back every single rupee you borrowed, along with the agreed interest. The bank reports this as a positive closure. Your reputation as a borrower remains intact, and future loans are easier to obtain.</p>
              </li>
              <li className="p-5 bg-orange-50 rounded-xl border border-orange-100">
                <strong className="text-orange-900 block mb-1 font-black uppercase text-xs">Settled Status (Partial Payment)</strong>
                <p className="text-orange-800">This happens when you negotiate with the bank to pay a portion of the total outstanding (usually 40 to 60 percent) because of genuine financial hardship. The debt is technically resolved, but the bank marks it as 'Settled' in their records and on your credit report.</p>
              </li>
            </ul>
            <p className="italic text-gray-500 text-sm">
              Note: A 'Settled' status tells every future lender that you did not fulfill your original promise. You paid what you could, but you didn't pay what you owed.
            </p>
          </section>

          <section id="cibil-impact" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Impact on Your CIBIL Score</h2>
            <p className="mb-6">
              Your CIBIL score is more than just a number; it is a reflection of your financial character. When a loan is settled, the credit bureau (CIBIL, Experian, or Equifax) receives a report from the lender. 
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl mb-8">
              <h3 className="text-xl font-bold text-red-900 mb-4">The Mathematical Damage</h3>
              <p className="text-red-800 mb-6">
                A settlement can cause your credit score to drop by as much as 100 points or more in a single reporting cycle. If you had a healthy score of 750, a settlement could instantly plummet it to 650, making you 'un-lendable' by most standard banking criteria.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Immediate Effect</span>
                  <p className="text-2xl font-black text-red-600">-75 to -150 Points</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Future Status</span>
                  <p className="text-xl font-black text-gray-800 uppercase">High Risk</p>
                </div>
              </div>
            </div>
            <p>
              Why is the damage so severe? Because credit score models are designed to predict the likelihood of a borrower defaulting. A settlement is proof of a past default. To a bank, a settled borrower is someone who might ask for a waiver again in the future.
            </p>
          </section>

          <section id="why-settle" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">If It's So Bad, Why Choose Settlement?</h2>
            <p className="mb-8 leading-relaxed">
              We describe settlement as a 'financial surgery'. No one wants surgery, but sometimes it is necessary to save the patient. If you are stuck in a spiral where you are borrowing from one app to pay another bank, or if you are facing aggressive recovery agent harassment, settlement is the only way to stop the bleeding.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                <h4 className="font-black text-[#1F5EFF] mb-2 uppercase text-xs tracking-tighter">Immediate Relief</h4>
                <p className="text-sm">Stops those hundreds of daily recovery calls that destroy your peace of mind.</p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                <h4 className="font-black text-[#1F5EFF] mb-2 uppercase text-xs tracking-tighter">Legal Protection</h4>
                <p className="text-sm">A formal settlement letter protects you from the bank filing future court cases or FIRs.</p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                <h4 className="font-black text-[#1F5EFF] mb-2 uppercase text-xs tracking-tighter">Budget Control</h4>
                <p className="text-sm">Allows you to close multiple debts for a manageable lump sum, ending the interest trap.</p>
              </div>
            </div>
            <p className="font-medium">
              At SettleLoans, we recommend settlement only when your total debt is more than what you can realistically pay in 12 months. It is a tool for survival, not a shortcut for convenience.
            </p>
          </section>

          <section id="the-7-year-rule" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">The 7-Year Credit Shadow</h2>
            <p className="mb-6">
              One of the most critical things to understand is the longevity of a settlement record. In the Indian credit reporting system, data is not erased every year. 
            </p>
            <div className="relative p-8 bg-black text-white rounded-3xl overflow-hidden mb-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F5EFF]/20 blur-[80px] rounded-full"></div>
              <h3 className="text-2xl font-black mb-4 relative z-10">Persistence of Records</h3>
              <p className="relative z-10 text-gray-400 mb-6 font-light leading-loose">
                A settled account remains on your CIBIL report for exactly <span className="text-white font-bold">seven years</span> from the date of the settlement payment. During this window, anytime you apply for a fresh loan, the bank's automated systems or credit managers will see that entry. 
              </p>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#1F5EFF] rounded-full"></div>
                  <span className="text-sm">Cars, Homes, and Business loans become difficult.</span>
                </li>
                 <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#1F5EFF] rounded-full"></div>
                  <span className="text-sm">You might be asked for much higher interest rates.</span>
                </li>
                 <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#1F5EFF] rounded-full"></div>
                  <span className="text-sm">You might be asked for 100% collateral.</span>
                </li>
              </ul>
            </div>
            <p>
              However, this doesn't mean your life is over for seven years. It simply means you must work harder to prove your worth again. By being financially disciplined after a settlement, you can gradually reduce the 'risk weight' attached to your profile.
            </p>
          </section>

          <section id="legal-implications" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Legal Implications: Breach vs. Crime</h2>
            <p className="mb-6">
              A common tactic used by local recovery agents is to tell borrowers that defaulting or settling a loan is a criminal offense and will lead to jail time. We want to be very clear about this:
            </p>
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 mb-8">
              <h3 className="text-xl font-bold text-emerald-900 mb-2">The Legal Reality</h3>
              <p className="text-emerald-800 leading-relaxed font-medium">
                Defaulting on a personal loan or credit card is a civil matter (breach of contract). It is not a criminal offense. Settlement is a legally recognized method to resolve a civil dispute. As long as you have not provided fake documents to get the loan (fraud), you cannot be arrested for a default or a settlement.
              </p>
            </div>
            <p>
              However, the legal protection only comes if you execute the settlement correctly. paying money to a random recovery agent without a formal letter from the bank branch on their letterhead is a recipe for disaster. The bank might claim they never received the money, and your debt will remain active.
            </p>
          </section>

          <section id="settlement-process" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">The Professional Settlement Guide</h2>
             <p className="mb-10">If you have decided that settlement is your only path forward, follow these steps with extreme caution. Professional agencies like SettleLoans handle this entire process for you, but it is important for you to know the stages.</p>
             
             <div className="space-y-12">
                <div className="flex gap-6">
                   <div className="flex-shrink-0 w-12 h-12 bg-[#1F5EFF] text-white flex items-center justify-center rounded-full font-black text-xl">1</div>
                   <div>
                      <h4 className="text-xl font-bold mb-2">Portfolio Analysis</h4>
                      <p className="text-gray-600">You must calculate exactly how much you can afford to pay. Don't make promises to the bank that you can't keep. A broken settlement is worse than no settlement.</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="flex-shrink-0 w-12 h-12 bg-[#1F5EFF] text-white flex items-center justify-center rounded-full font-black text-xl">2</div>
                   <div>
                      <h4 className="text-xl font-bold mb-2">Stopping the Interest Clock</h4>
                      <p className="text-gray-600">Most banks will only negotiate when an account has turned into an NPA (90 days principal plus interest overdue). This requires mental strength as the calls will increase during this period.</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="flex-shrink-0 w-12 h-12 bg-[#1F5EFF] text-white flex items-center justify-center rounded-full font-black text-xl">3</div>
                   <div>
                      <h4 className="text-xl font-bold mb-2">Hardship Proof</h4>
                      <p className="text-gray-600">You need to provide documents showing why you cannot pay. This could be a termination letter, medical bills, or business bankruptcy filings. Banks need a 'reason' to give you a waiver for their internal audits.</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="flex-shrink-0 w-12 h-12 bg-[#1F5EFF] text-white flex items-center justify-center rounded-full font-black text-xl">4</div>
                   <div>
                      <h4 className="text-xl font-bold mb-2">Negotiation</h4>
                      <p className="text-gray-600">The first offer from the bank is never the best. Skilled negotiators (like our legal team) can often bring the amount down to 30-40 percent of the total outstanding.</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="flex-shrink-0 w-12 h-12 bg-[#1F5EFF] text-white flex items-center justify-center rounded-full font-black text-xl">5</div>
                   <div>
                      <h4 className="text-xl font-bold mb-2">Verification of Letter</h4>
                      <p className="text-gray-600">NEVER pay without a formal letter. The letter should mention your name, account number, the settlement amount, and a clear statement that no further dues remain.</p>
                   </div>
                </div>
             </div>
          </section>

          <section id="rebuilding-credit" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Rebuilding your Credit Empire</h2>
            <p className="mb-6">Settlement is not the end of the road. It is a U-turn. Here is a 24-month roadmap to getting your score back into the 700s after you have settled your debts.</p>
            
            <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
               <div className="p-8 border-b border-gray-100">
                  <h4 className="font-bold text-lg mb-2 text-[#1F5EFF]">Phase 1: Zero Debt (Months 1-6)</h4>
                  <p className="text-sm text-gray-500">Do not apply for anything. Focus on building an emergency fund. Ensure all your settlement accounts are reported correctly with the 'Settled' remark.</p>
               </div>
               <div className="p-8 border-b border-gray-100">
                  <h4 className="font-bold text-lg mb-2 text-[#1F5EFF]">Phase 2: The Secured Entry (Months 7-12)</h4>
                  <p className="text-sm text-gray-500">Apply for a Secured Credit Card (FD-backed). Use it for small purchases (grocery, fuel) and pay the full bill on the first day. This starts reporting 'On-Time Payment' to CIBIL.</p>
               </div>
               <div className="p-8">
                  <h4 className="font-bold text-lg mb-2 text-[#1F5EFF]">Phase 3: Small Unsecured Loans (Months 13-24)</h4>
                  <p className="text-sm text-gray-500">Apply for a small consumer durable loan (like a phone). Since it is a low-value loan, you might get approval. Pay every EMI perfectly. By month 24, your score will show a steady upward trend.</p>
               </div>
            </div>
          </section>

           <section id="rbi-rights" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Know Your RBI Rights</h2>
             <p className="mb-6">The Reserve Bank of India (RBI) has very strict guidelines for recovery agents. If you are being harassed, you have the right to file a complaint even if you owe money.</p>
             <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50">
                   <h5 className="font-black text-[#2E2E2E] mb-3">Timing Rights</h5>
                   <p className="text-sm leading-relaxed">Agents can only call or visit between 8:00 AM and 7:00 PM. Calls after 7:00 PM are a violation of privacy guidelines.</p>
                </div>
                <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50">
                   <h5 className="font-black text-[#2E2E2E] mb-3">Privacy Rights</h5>
                   <p className="text-sm leading-relaxed">Agents cannot discuss your debt with your neighbors, relatives, or boss. Social shaming is strictly prohibited.</p>
                </div>
                <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50">
                   <h5 className="font-black text-[#2E2E2E] mb-3">Civil Conduct</h5>
                   <p className="text-sm leading-relaxed">Use of foul language, shouting, or physical intimidation is a criminal act. You can record these calls as evidence.</p>
                </div>
                <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50">
                   <h5 className="font-black text-[#2E2E2E] mb-3">Legal Process</h5>
                   <p className="text-sm leading-relaxed">Debt is a civil matter. Arrest without a proper court trial after multiple notices is impossible in unsecured debt cases.</p>
                </div>
             </div>
          </section>

          <section id="bank-policies" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Bank-Wise Settlement Tendencies</h2>
            <p className="mb-6">Each bank in India has its own internal 'settlement matrix'. While policies change, here is what we have observed over thousands of cases at SettleLoans.</p>
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-200">
                    <h4 className="font-bold text-lg mb-3">Public Sector Banks (SBI, PNB, BOB)</h4>
                    <p className="text-sm text-gray-600 mb-4">PSUs are generally slower but more predictable. They often have 'OTS' (One Time Settlement) schemes during specific months (usually December and March). If you have a legitimate medical or employment issue, they are often willing to waive off a significant portion of the interest.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-200">
                    <h4 className="font-bold text-lg mb-3">Large Private Banks (HDFC, ICICI, Axis)</h4>
                    <p className="text-sm text-gray-600 mb-4">These banks have very efficient recovery systems. They might be aggressive in the first 90 days, but once the account hits the NPA stage, they are often practical negotiators. They look at the borrower's total asset profile before agreeing to a percentage.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-200">
                    <h4 className="font-bold text-lg mb-3">New-Age NBFCs and Apps</h4>
                    <p className="text-sm text-gray-600 mb-4">Digital lenders often have high interest rates and aggressive recovery tactics. However, because they have lower overheads than physical banks, they are sometimes willing to settle for a lower amount just to get the principal back and close the digital file.</p>
                </div>
            </div>
          </section>

          <section id="psychology-of-debt" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">The Psychology of Debt: Reclaiming Your Mind</h2>
            <p className="mb-6">Financial debt is rarely just about money; it's about the mental space it occupies. The constant fear of the next phone call or the next notice can lead to severe anxiety and depression.</p>
            <div className="bg-blue-600 text-white p-10 rounded-3xl shadow-2xl">
                <p className="text-xl italic leading-relaxed mb-6">"At SettleLoans, we often say that our first job is to be therapists, and our second job is to be negotiators."</p>
                <p className="text-lg opacity-80 mb-8">When you settle your debt, you are not just clearing a balance; you are clearing a mental block. You are allowing yourself to dream again, to plan for your children's future, and to sleep through the night without a pounding heart.</p>
                <h4 className="font-bold mb-4 uppercase tracking-widest text-sm">Steps to Mental Recovery:</h4>
                <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Accept that you've made a mistake and move on.</li>
                    <li className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Realize that you are worth more than your CIBIL score.</li>
                    <li className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Stop comparing your life to others' social media feeds.</li>
                    <li className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Build a small, realistic budget and stick to it.</li>
                </ul>
            </div>
          </section>

          <section id="detailed-case-studies" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 text-center text-black">Case Studies: The Settlement Reality</h2>
            <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 font-black text-gray-100 text-6xl select-none">01</div>
                    <h4 className="text-xl font-bold mb-4 text-[#1F5EFF]">The IT Professional from Pune</h4>
                    <p className="text-gray-600 mb-4">Rajesh had personal loans worth 15 lakhs for a family medical crisis. After a company layoff, his EMIs of 50k became impossible. He tried paying via other loans, falling into a trap. SettleLoans stepped in, stopped the harassment calls immediately, and after 6 months of negotiation, settled everything for one lump sum of 6.5 lakhs. Today, Rajesh is debt-free and has started a new job with peace of mind.</p>
                    <div className="flex gap-4 mt-6">
                        <span className="text-xs bg-red-50 text-red-600 px-3 py-1 rounded-full font-bold">Initial Debt: 15L</span>
                        <span className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full font-bold">Settled At: 6.5L</span>
                        <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-bold">Timeframe: 6 Months</span>
                    </div>
                </div>
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 font-black text-gray-100 text-6xl select-none">02</div>
                    <h4 className="text-xl font-bold mb-4 text-[#1F5EFF]">The Small Business Owner from Delhi</h4>
                    <p className="text-gray-600 mb-4">Sunita ran a small boutique that struggled during the supply chain crisis. She owed 8 lakhs across 3 credit cards. She was being harassed at her shop by agents. SettleLoans' legal team replied to all notices, filed a police complaint against one rogue agent who crossed the line, and settled the cards for 3.2 lakhs altogether. sunita's CIBIL dropped, but she is now using an FD-backed card to rebuild it slowly.</p>
                    <div className="flex gap-4 mt-6">
                        <span className="text-xs bg-red-50 text-red-600 px-3 py-1 rounded-full font-bold">Initial Debt: 8L</span>
                        <span className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full font-bold">Settled At: 3.2L</span>
                        <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-bold">Timeframe: 4 Months</span>
                    </div>
                </div>
            </div>
          </section>

          <section id="the-social-impact" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">The Social Impact: Handling Relationships</h2>
            <p className="mb-6">Debt is a social disease. It affects how you talk to your spouse, how you play with your children, and how you look at your parents. One of the unspoken consequences of a settlement is the social 'shame' that often comes with it.</p>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 mb-8">
                <h4 className="font-bold mb-4">How to handle family during debt:</h4>
                <ul className="space-y-4">
                    <li><strong className="text-black">Honesty is key:</strong> Tell your spouse the truth. Hiding debt is often more destructive to a marriage than the debt itself.</li>
                    <li><strong className="text-black">Unified Front:</strong> When recovery agents call, ensure your family knows what to say. We provide our clients with a specific script to use.</li>
                    <li><strong className="text-black">No Shame:</strong> Remind yourself and your loved ones that thousands of people face this. It's a phase of life, not the end of life.</li>
                </ul>
            </div>
            <p>Our program at SettleLoans includes counseling for families. We help families understand that while the credit score is damaged, the family unit's future can actually be saved by taking the step to settle and move on from high-interest traps.</p>
          </section>

          <section id="global-context" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Global Context: How India Compares</h2>
            <p className="mb-6">Debt settlement is not unique to India. In countries like the US and UK, 'Debt Settlement' or 'Individual Voluntary Arrangements' (IVAs) are common. However, the legal protections there are much stronger.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white border border-gray-200 rounded-2xl">
                    <h5 className="font-bold mb-2">United States (FDCPA)</h5>
                    <p className="text-sm text-gray-500 italic">In the US, the Fair Debt Collection Practices Act (FDCPA) prevents agents from calling you at work or using abusive language. Settlement is seen as a legitimate path to avoid personal bankruptcy (Chapter 7).</p>
                </div>
                <div className="p-6 bg-white border border-gray-200 rounded-2xl">
                    <h5 className="font-bold mb-2">India (RBI Guidelines)</h5>
                    <p className="text-sm text-gray-500 italic">In India, while we have RBI guidelines, enforcement is often manual and requires constant follow-up by the borrower. This is why having a legal team like SettleLoans is crucial in the Indian market.</p>
                </div>
            </div>
            <p className="mt-8">Understanding that the world over, the economy relies on a borrower's ability to 'reset' is important. If everyone who defaulted was blacklisted for life, the economy would stop moving. Settlement is the bridge to that reset.</p>
          </section>

          <section id="credit-bureau-math" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Deep Dive into Credit Bureau Math</h2>
            <p className="mb-6">Many people ask: 'Why does my score drop so much if I've paid the bank what they asked for?' The answer lies in the algorithm of bureaus like CIBIL.</p>
            <div className="bg-orange-50 p-8 rounded-3xl border border-orange-200 mb-8">
                <h4 className="font-bold mb-4 text-orange-900">The 3 Key Factors:</h4>
                <div className="space-y-4">
                    <p><strong>1. Payment History (35% Weight):</strong> The algorithm looks at whether you've fulfilled the *original* contract. By settling, you've technically 'failed' the original contract, which triggers the maximum penalty in this category.</p>
                    <p><strong>2. Credit Mix:</strong> If you settle your only credit card, you lose your only 'active' unsecured credit line, which can further lower your score because the 'mix' of credit becomes skewed.</p>
                    <p><strong>3. Length of Credit History:</strong> If you settle a 5-year-old loan, that history of 'good' behavior is often overshadowed by the final 'settlement' remark, effectively resetting your 'trust clock' to zero.</p>
                </div>
            </div>
          </section>

          <section id="handling-specific-loans" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Settling Different Loan Types</h2>
             <div className="space-y-8">
                <div>
                   <h4 className="text-xl font-bold mb-3 text-[#1F5EFF]">Credit Card Settlements</h4>
                   <p className="text-gray-600">Credit cards have the highest interest rates (36-48%). Banks are often the most aggressive here but also the most willing to settle for 20-30% of the total amount if the card has been inactive for a long time. This is because the interest component is so high that even a 30% settlement covers the original principal.</p>
                </div>
                <div>
                   <h4 className="text-xl font-bold mb-3 text-[#1F5EFF]">Personal Loan Settlements</h4>
                   <p className="text-gray-600">These are harder to settle for very low amounts because banks have already paid out the cash. They usually aim for at least 50-70% of the principal amount. Negotiation here requires proving genuine extreme hardship (like a permanent disability or closure of a business).</p>
                </div>
                <div>
                   <h4 className="text-xl font-bold mb-3 text-[#1F5EFF]">Education Loan Settlements</h4>
                   <p className="text-gray-600">Settling education loans is rare and complex. Since these loans are often subsidised or have a guarantor (usually parents), the bank will first target the guarantor. It's often better to look at loan restructuring rather than settlement for student loans.</p>
                </div>
                <div>
                   <h4 className="text-xl font-bold mb-3 text-[#1F5EFF]">Gold Loan Settlements</h4>
                   <p className="text-gray-600">You cannot 'settle' a gold loan in the traditional sense because the bank already holds the gold. If you don't pay, they will auction the gold. Settlement is only possible if the auction proceeds don't cover the full debt, leaving a residual balance.</p>
                </div>
             </div>
          </section>

          <section id="the-day-after" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">The Day After Settlement: Your New Life</h2>
            <p className="mb-6">Once you have the settlement letter and the payment is done, the silence will be strange. Your phone won't ring with threats, and your inbox will be empty of demand notices. What do you do next?</p>
            <div className="bg-white border-2 border-[#1F5EFF] p-8 rounded-3xl">
                <h4 className="font-black mb-4">The 48-Hour Checklist:</h4>
                <ol className="list-decimal pl-6 space-y-4">
                    <li><strong>Digital Cleanup:</strong> Block any remaining automated payment messages. Inform your references/family that the matter is legally closed and provide them with a copy of the settlement letter if they are still getting rogue calls.</li>
                    <li><strong>Physical Filing:</strong> Print three copies of your settlement letter. Keep one at home, one in your office, and scan one to your cloud storage (Google Drive/Dropbox). You might need this letter 5 years from now when you apply for a home loan.</li>
                    <li><strong>Bank Update:</strong> Visit the bank branch after 45 days and ask for a 'No Dues Certificate' (NDC) if it wasn't already provided. This is your ultimate insurance policy.</li>
                    <li><strong>Credit Watch:</strong> Set a calendar reminder for 60 days. On that day, download your CIBIL report. Ensure the account status has changed to 'Settled'. If it still shows 'Default', file a dispute immediately using your settlement letter as proof.</li>
                </ol>
            </div>
          </section>

          <section id="recovery-agent-survival" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Recovery Agent Survival Guide (Deep Dive)</h2>
            <p className="mb-6">During the months leading up to a settlement, you will face intense pressure. Here is how to survive it without losing your mental health.</p>
            <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-2xl">
                    <h5 className="font-bold mb-2">The 'One-Call-A-Day' Rule</h5>
                    <p className="text-sm text-gray-600">You are not required to pick up 50 calls. Pick up one call, identify the bank, and state clearly: 'I am in financial distress and am working with my legal counsel for a resolution. Do not call my family.' Record the call. If they call again, you have evidence of harassment.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl">
                    <h5 className="font-bold mb-2">Handling the 'FIR' Threat</h5>
                    <p className="text-sm text-gray-600">Agents often carry fake 'FIR' or 'Court Summon' copies on WhatsApp. These are almost always fake. A real summons comes via post or a court bailiff, not WhatsApp. If you get one, send it to SettleLoans; our lawyers will verify it and reply appropriately.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl">
                    <h5 className="font-bold mb-2">The 'Home Visit' Protocol</h5>
                    <p className="text-sm text-gray-600">If an agent visits your home, do not let them inside. Talk to them at the gate. Request their ID card and the bank's authorization letter. Most agents don't carry these. Without these, they are trespassing. Record the interaction on your phone camera.</p>
                </div>
            </div>
          </section>

          <section id="checklist" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Final Checklist Before You Settle</h2>
            <div className="p-8 bg-[#2E2E2E] text-white rounded-3xl">
               <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                     <div className="w-6 h-6 bg-green-500 flex items-center justify-center rounded-full mt-1 shrink-0">✓</div>
                     <p className="font-medium text-lg leading-snug">Did you get the letter on the bank's official letterhead? (E-mails are okay if they are from the official domain, not a gmail address).</p>
                  </li>
                  <li className="flex items-start gap-4">
                     <div className="w-6 h-6 bg-green-500 flex items-center justify-center rounded-full mt-1 shrink-0">✓</div>
                     <p className="font-medium text-lg leading-snug">Does the letter mention your exact account number and the total outstanding correctly?</p>
                  </li>
                  <li className="flex items-start gap-4">
                     <div className="w-6 h-6 bg-green-500 flex items-center justify-center rounded-full mt-1 shrink-0">✓</div>
                     <p className="font-medium text-lg leading-snug">Is the payment link on the official bank portal? (NEVER pay into a recovery agent's personal account or via a UPI link they send manually).</p>
                  </li>
                   <li className="flex items-start gap-4">
                     <div className="w-6 h-6 bg-green-500 flex items-center justify-center rounded-full mt-1 shrink-0">✓</div>
                     <p className="font-medium text-lg leading-snug">Did you keep a screenshot and the transaction ID of your payment? (Essential for future disputes).</p>
                  </li>
                  <li className="flex items-start gap-4">
                     <div className="w-6 h-6 bg-green-500 flex items-center justify-center rounded-full mt-1 shrink-0">✓</div>
                     <p className="font-medium text-lg leading-snug">Did you verify that the 'Settlement' letter actually says 'Full and Final'? Some agencies send 'interim partial payment' letters which are not settlements.</p>
                  </li>
                  <li className="flex items-start gap-4">
                     <div className="w-6 h-6 bg-green-500 flex items-center justify-center rounded-full mt-1 shrink-0">✓</div>
                     <p className="font-medium text-lg leading-snug">Check the validity date on the letter. Settlement offers are usually valid for 3-7 days. If you pay after the date, the bank might consider it as a regular payment and not a settlement.</p>
                  </li>
               </ul>
            </div>
          </section>

          <section id="faqs" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4 not-prose">
              {[
                { q: "Does a settlement letter mean my debt is gone forever?", a: "Yes, once you receive a valid 'Full and Final Settlement' letter and pay the agreed amount, the specific debt is legally resolved. The bank cannot demand more money for that specific account. However, the record of 'Settled' remains on your credit report, which affects your future borrowing ability." },
                { q: "What is the difference between 'Settled' and 'Closed' status?", a: "'Closed' means you paid the full principal and interest. it is a positive indicator. 'Settled' means you paid a reduced amount because of financial hardship. it is a negative indicator that drops your credit score." },
                { q: "How long does a settled remark stay on my CIBIL report?", a: "A 'Settled' remark typically stays on your CIBIL report for 7 years. During this period, most banks will be hesitant to offer you fresh unsecured loans or credit cards." },
                { q: "Can I convert a 'Settled' status to 'Closed' later?", a: "Yes. You can pay the remaining balance (the waived off portion) to the bank later. Once paid, the bank will issue a No Dues Certificate, and you can request them to update your status to 'Closed' on the credit bureaus." },
                { q: "Does settlement stop recovery agent harassment?", a: "Yes, a completed settlement legally ends the recovery process. The bank withdraws the case from recovery agencies. At SettleLoans, we ensure all harassment stops the moment we initiate the legal negotiation process." },
                { q: "Will a settlement affect my job prospects?", a: "For regular jobs, it usually doesn't. however, for roles in banking, finance, or higher security clearances, some employers conduct background credit checks. A poor credit history might be viewed unfavorably in such specific sectors." },
                { q: "Can I get a home loan after settling a personal loan?", a: "Getting a home loan immediately after settlement is very difficult. however, if you rebuild your credit score over 24 months and show stable income, some lenders may consider your application, though they may charge higher interest." },
                { q: "Why do banks agree to settlements?", a: "Banks agree when they realize the borrower is in genuine distress and recovery of the full amount is unlikely. They prefer to recover a portion of the principal rather than writing off the entire amount as a loss." },
                { q: "Is it possible to settle a secured loan like a home loan?", a: "It is much harder to settle secured loans because the bank can seize the asset. Settlement is usually an option for unsecured debts like personal loans and credit cards where there is no collateral." },
                { q: "Should I use a professional agency for settlement?", a: "Using a professional agency like SettleLoans provides you with legal protection, expert negotiation power, and ensures that you get a genuine settlement letter, protecting you from future legal disputes." }
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
             <p className="text-[var(--color-text-muted)] text-sm italic">Disclaimer: SettleLoans is a legal debt consultancy. We are not a lender. The information provided is based on prevailing market practices and legal interpretations in India. Actual results may vary based on bank policies and individual credit profiles.</p>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 p-1 bg-gradient-to-r from-[#1F5EFF] to-teal-400 rounded-3xl">
             <div className="bg-[#2E2E2E] rounded-[22px] p-8 md:p-12 text-center text-white">
                <h3 className="text-3xl md:text-4xl font-black mb-6">Take Control of Your Story Today</h3>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">Don't let the shadow of debt follow you for a lifetime. Our experts help you negotiate the best terms while protecting your legal rights.</p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-black py-4 px-12 rounded-xl text-lg hover:scale-105 transition-all shadow-xl">
                   Get a Free Debt Audit
                </Link>
             </div>
          </div>

        </article>

        {/* Right Column: CTA & Related */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <div className="sticky top-24 space-y-8">
            
            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
               <div className="bg-[#1F5EFF] p-4 text-center">
                 <h3 className="text-lg font-black text-white">Need Urgent Help?</h3>
               </div>
               <div className="p-6 text-center">
                 <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                   Our legal team can help you stop harassment in 24 hours.
                 </p>
                 <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                   Stop Harassment
                 </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Related Reading</h3>
              <ul className="space-y-4 text-sm font-bold">
                 <li>
                  <Link href="/what-is-personal-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Personal Loan Guide
                  </Link>
                </li>
                <li>
                  <Link href="/can-i-go-to-jail-for-loan-default-in-india" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Default vs Jail Law
                  </Link>
                </li>
                 <li>
                  <Link href="/rbi-rules-for-recovery-agents" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                     <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    RBI Harassment Rules
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
