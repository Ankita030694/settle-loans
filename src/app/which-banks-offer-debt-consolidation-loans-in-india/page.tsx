import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Which Banks Offer Debt Consolidation Loans in India? (2026 Guide)",
  description: "Explore the top banks and NBFCs in India offering debt consolidation loans in 2026. Compare HDFC, ICICI, SBI, and Axis Bank interest rates, eligibility, and benefits.",
  alternates: {
    canonical: "https://settleloans.in/which-banks-offer-debt-consolidation-loans-in-india",
  },
};

export default function DebtConsolidationBanksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/which-banks-offer-debt-consolidation-loans-in-india#webpage",
        "url": "https://settleloans.in/which-banks-offer-debt-consolidation-loans-in-india",
        "name": "Which Banks Offer Debt Consolidation Loans in India? 2026 Comparison",
        "description": "The ultimate list of Indian banks offering debt consolidation solutions to help you manage multiple EMIs.",
        "breadcrumb": { "@id": "https://settleloans.in/which-banks-offer-debt-consolidation-loans-in-india#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/which-banks-offer-debt-consolidation-loans-in-india#breadcrumb",
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
            "name": "Debt Consolidation Banks",
            "item": "https://settleloans.in/which-banks-offer-debt-consolidation-loans-in-india"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/which-banks-offer-debt-consolidation-loans-in-india#article",
        "headline": "Which Banks Offer Debt Consolidation Loans in India? Top Picks for 2026",
        "description": "A comprehensive analysis of Indian banking institutions that provide debt consolidation loans, including interest rates and eligibility criteria.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Financial Advisory"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2026-02-19",
        "dateModified": "2026-02-19",
        "mainEntityOfPage": { "@id": "https://settleloans.in/which-banks-offer-debt-consolidation-loans-in-india#webpage" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which bank is best for debt consolidation in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SBI, HDFC Bank, and ICICI Bank are top choices due to competitive interest rates and reliable processing. The best bank for you depends on your existing credit score and relationship with the bank."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get a debt consolidation loan with a low CIBIL score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is difficult but possible through gold loans or loans against property. For unsecured consolidation loans, most banks require a CIBIL score of 750 or above."
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

      {/* Hero Section */}
      <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
            Market Report 2026
          </span>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
            Which Banks Offer Debt <br className="hidden md:block"/> Consolidation in India?
          </h1>
          <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-4xl mx-auto leading-[1.3] font-normal text-balance">
            Stop juggling multiple EMIs and high interest rates. Discover the most reliable Indian banks and NBFCs that can help you consolidate your debt into one manageable monthly payment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Compare Your Options
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
                Which Banks Offer Debt Consolidation?
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
                 { id: "top-banks", title: "Top Indian Banks" },
                 { id: "nbfc-options", title: "Top NBFC Options" },
                 { id: "eligibility", title: "Eligibility Criteria" },
                 { id: "benefits", title: "Key Benefits" },
                 { id: "how-it-works", title: "How the Process Works" },
                 { id: "secured-consolidation", title: "Secured Consolidation" },
                 { id: "settlement-alt", title: "Consolidation vs Settlement" },
                 { id: "success-stories", title: "Client Stories" },
                 { id: "faqs", title: "Market FAQs" }
              ]}
            />
          </div>
        </aside>

        {/* Middle Column: Main Content */}
        <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
          
          <section id="intro" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-8 leading-tight">
              Navigating the Debt Consolidation <br/><span className="text-[#1F5EFF]">Landscape in India</span>
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
               <p className="text-xl leading-relaxed text-[#2E2E2E] mb-6">
                Debt consolidation is often the first step toward financial sanity for thousands of Indian borrowers. When you find yourself managing multiple credit cards, two personal loans, and perhaps a consumer durable EMI for that latest smartphone, the interest rates can kill your monthly budget. Debt consolidation involves taking one large loan at a lower interest rate to pay off all your smaller, high-interest debts. 
              </p>
              <p className="text-xl leading-relaxed text-[#2E2E2E]">
                In 2026, the Indian banking sector has become more sophisticated, offering specialized products specifically designed for this purpose. However, not every bank uses the phrase "Debt Consolidation Loan." Many offer it under the umbrella of "Personal Loan for Debt Relief" or "Balance Transfer Facility." This guide details exactly where you should look to find the best deals.
              </p>
            </div>
          </section>

          <section id="top-banks" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 uppercase tracking-tight">The Big Four: Top Indian Banks</h2>
            <div className="space-y-12">
              <div className="bg-white border-l-4 border-[#1F5EFF] p-8 rounded-r-2xl shadow-sm border border-[#DEDEDE]">
                 <h3 className="text-2xl font-black mb-4">1. HDFC Bank: The Market Leader</h3>
                 <p className="mb-4 text-lg">HDFC Bank remains the top choice for debt consolidation in 2026. They offer a specialized "Personal Loan for Debt Consolidation" that allows you to combine up to five different loans or credit card balances into one. Their digital process is incredibly fast for existing customers.</p>
                 <ul className="grid sm:grid-cols-2 gap-2 text-sm font-bold text-[#747474]">
                    <li>• Interest Rate: 10.50% to 14.00%</li>
                    <li>• Processing Fee: Up to 1.5%</li>
                    <li>• Maximum Tenure: 72 Months</li>
                    <li>• Loan Amount: Up to ₹50 Lakhs</li>
                 </ul>
              </div>

              <div className="bg-white border-l-4 border-[#1F5EFF] p-8 rounded-r-2xl shadow-sm border border-[#DEDEDE]">
                 <h3 className="text-2xl font-black mb-4">2. State Bank of India (SBI): The Lowest Cost</h3>
                 <p className="mb-4 text-lg">SBI's "Xpress Credit" is often the most cost-effective way to consolidate debt, especially for government employees or those with salary accounts at SBI. While the documentation is slightly more rigorous, the savings on interest are significant over the long run.</p>
                 <ul className="grid sm:grid-cols-2 gap-2 text-sm font-bold text-[#747474]">
                    <li>• Interest Rate: 9.80% to 11.50%</li>
                    <li>• Processing Fee: Flat ₹1000 to ₹5000</li>
                    <li>• Maximum Tenure: 84 Months</li>
                    <li>• Loan Amount: Up to ₹30 Lakhs</li>
                 </ul>
              </div>

              <div className="bg-white border-l-4 border-[#1F5EFF] p-8 rounded-r-2xl shadow-sm border border-[#DEDEDE]">
                 <h3 className="text-2xl font-black mb-4">3. ICICI Bank: Flexible Repayment</h3>
                 <p className="mb-4 text-lg">ICICI Bank excels in providing flexible repayment options. Their consolidation loans often come with the feature to pay higher EMIs when you have surplus cash (pre-payment) with zero or minimal charges, helping you become debt-free faster.</p>
                 <ul className="grid sm:grid-cols-2 gap-2 text-sm font-bold text-[#747474]">
                    <li>• Interest Rate: 10.75% to 15.00%</li>
                    <li>• Processing Fee: 1% to 2%</li>
                    <li>• Maximum Tenure: 60 Months</li>
                    <li>• Loan Amount: Up to ₹40 Lakhs</li>
                 </ul>
              </div>

               <div className="bg-white border-l-4 border-[#1F5EFF] p-8 rounded-r-2xl shadow-sm border border-[#DEDEDE]">
                 <h3 className="text-2xl font-black mb-4">4. Axis Bank: Quick Digital Disbursement</h3>
                 <p className="mb-4 text-lg">If you need money in your account within 24 hours to pay off aggressive collectors, Axis Bank’s "Instant Personal Loan" for consolidation is a strong contender. Their paperless process is optimized for the urban professional.</p>
                 <ul className="grid sm:grid-cols-2 gap-2 text-sm font-bold text-[#747474]">
                    <li>• Interest Rate: 10.25% to 13.50%</li>
                    <li>• Processing Fee: Flat 1.25%</li>
                    <li>• Maximum Tenure: 84 Months</li>
                    <li>• Loan Amount: Up to ₹40 Lakhs</li>
                 </ul>
              </div>
            </div>
          </section>

          <section id="nbfc-options" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">NBFCs: For Faster and More Relaxed Approvals</h2>
             <p className="text-lg leading-relaxed mb-8 text-[#2E2E2E]/80">
                Non-Banking Financial Companies (NBFCs) often have more relaxed eligibility criteria than traditional banks. If your CIBIL score is between 700 and 740, you might find HDFC or SBI hesitant, but these institutions will likely welcome you.
             </p>
             <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 bg-gray-50 rounded-2xl border border-[#DEDEDE]">
                   <h4 className="font-black text-xl mb-3">Bajaj Finserv</h4>
                   <p className="text-sm mb-4">Known for their "Flexi Loan" facility, which allows you to borrow as you need and pay interest only on the utilized amount. Excellent for consolidating multiple small app-based loans.</p>
                   <div className="text-xs font-bold text-[#1F5EFF]">Rates: 11% to 16%</div>
                </div>
                <div className="p-8 bg-gray-50 rounded-2xl border border-[#DEDEDE]">
                   <h4 className="font-black text-xl mb-3">Tata Capital</h4>
                   <p className="text-sm mb-4">Offers very high loan amounts for debt consolidation and provides personalized financial planning tools to help you stay on track after the consolidation.</p>
                   <div className="text-xs font-bold text-[#1F5EFF]">Rates: 10.99% to 15.50%</div>
                </div>
             </div>
          </section>

          <section id="eligibility" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Eligibility: What do you need?</h2>
            <p className="text-lg leading-relaxed mb-6">
               To get a consolidation loan at the lowest possible rate, you need to meet several criteria. The banks are taking a risk by paying off your other debts, so they want to ensure you are a responsible borrower.
            </p>
            <div className="bg-white border border-[#DEDEDE] rounded-2xl p-8 shadow-inner overflow-x-auto text-sm">
               <table className="w-full text-left">
                  <thead>
                     <tr className="border-b-2 border-gray-100">
                        <th className="py-4 font-black">Parameter</th>
                        <th className="py-4 font-black">Ideal Requirement</th>
                        <th className="py-4 font-black">Minimum Requirement</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr className="border-b border-gray-100">
                        <td className="py-4 font-medium italic">CIBIL Score</td>
                        <td className="py-4">750+</td>
                        <td className="py-4">700 (with higher rates)</td>
                     </tr>
                     <tr className="border-b border-gray-100">
                        <td className="py-4 font-medium italic">Monthly Income</td>
                        <td className="py-4">₹50,000+</td>
                        <td className="py-4">₹25,000</td>
                     </tr>
                     <tr className="border-b border-gray-100">
                        <td className="py-4 font-medium italic">Job Stability</td>
                        <td className="py-4">2+ Years in current role</td>
                        <td className="py-4">1 Year</td>
                     </tr>
                     <tr>
                        <td className="py-4 font-medium italic">FOIR Ratio</td>
                        <td className="py-4">Under 40%</td>
                        <td className="py-4">50%</td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <p className="mt-8 text-lg font-medium italic text-[#1F5EFF]">
               *FOIR stands for Fixed Obligation to Income Ratio. It is the percentage of your income that goes toward paying debts. Banks rarely lend if your FOIR is already above 50% without a consolidation plan.
            </p>
          </section>

          <section id="benefits" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 tracking-tight">Key Benefits of Consolidation</h2>
            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                { title: "Lower Interest", desc: "Pay off credit card debt (36% to 42% APR) with a personal loan (12% to 15% APR)." },
                { title: "Single EMI", desc: "No more tracking 5 different due dates. Just one payment to one bank once a month." },
                { title: "Zero Late Fees", desc: "With a simplified schedule, the chances of missing a payment due to oversight are minimized." },
                { title: "CIBIL Boost", desc: "As you close multiple accounts and replace them with one stable loan, your score eventually rises." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1">
                  <h4 className="font-black text-[#1F5EFF] mb-2">{item.title}</h4>
                  <p className="text-sm opacity-80 leading-relaxed font-bold">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="how-it-works" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How the Process Works</h2>
            <p className="text-lg leading-relaxed mb-6">
               Many people are confused about how the bank "closes" the other debts. In most debt consolidation cases, the process is streamlined:
            </p>
            <div className="relative pl-10 border-l-2 border-[#1F5EFF]/30 space-y-12 my-12">
               <div className="relative">
                  <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black">1</div>
                  <h4 className="font-black text-xl mb-2">Portfolio Assessment</h4>
                  <p className="text-gray-600">List all your outstanding amounts: Credit Cards, Personal Loans, BNPL debts. Get the exact "Foreclosure" amount for each from the respective lenders.</p>
               </div>
               <div className="relative">
                  <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black">2</div>
                  <h4 className="font-black text-xl mb-2">The Application</h4>
                  <p className="text-gray-600">Apply to a bank like SBI or HDFC. Tell them explicitly that the purpose is "Debt Consolidation." Provide the account numbers and amounts of the debts you want to close.</p>
               </div>
               <div className="relative">
                  <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black">3</div>
                  <h4 className="font-black text-xl mb-2">Direct Payment</h4>
                  <p className="text-gray-600">Many banks will not give you the cash. Instead, they will issue Bankers' Cheques or make NEFT/RTGS transfers directly to your other lenders to ensure the money is used correctly.</p>
               </div>
               <div className="relative">
                  <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black">4</div>
                  <h4 className="font-black text-xl mb-2">Closing Confirmation</h4>
                  <p className="text-gray-600">Collect the NOC (No Objection Certificate) or Closure Letter from each of the old lenders. Keep these safe; you will need them if CIBIL doesn't update correctly.</p>
               </div>
            </div>
          </section>

          <section id="secured-consolidation" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 tracking-tight">Secured Consolidation: If your Score is Low</h2>
            <p className="text-lg leading-relaxed mb-6">
               If your CIBIL score has already dropped below 680 due to late payments, you likely won't get an unsecured consolidation loan. This is where secured loans come in. 
            </p>
            <div className="bg-[#2E2E2E] rounded-3xl p-10 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-48 h-48 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-110 transition-transform"></div>
               <h3 className="text-2xl font-black mb-6 relative z-10 text-[#DEDEDE]">The "Property Strategy"</h3>
               <p className="mb-8 opacity-80 relative z-10 leading-relaxed text-lg font-bold">
                  A Loan Against Property (LAP) is the ultimate debt consolidation tool. Because the bank has the security of your house or commercial space, they will lend at interest rates as low as 8.5% to 9.5%. You can use this money to pay off unsecured debts costing you 15% to 40%.
               </p>
               <div className="inline-block px-6 py-3 bg-[#1F5EFF] rounded-xl font-black text-sm tracking-widest relative z-10">LOWEST INTEREST OPTION</div>
            </div>
          </section>

          <section id="settlement-alt" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Consolidation vs. Settlement: The Choice</h2>
            <p className="text-lg leading-relaxed mb-6">
               At SettleLoans, we often deal with people who are on the fence between consolidation and settlement. Both are tools for debt relief, but they serve different purposes.
            </p>
            <div className="flex flex-col md:flex-row gap-6 my-8">
               <div className="flex-1 p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                  <h4 className="font-black text-blue-800 mb-4">Debt Consolidation</h4>
                  <ul className="text-sm space-y-2 font-bold text-blue-900/70">
                     <li>• You pay the FULL principal.</li>
                     <li>• Credit score goes UP eventually.</li>
                     <li>• Requires high current income.</li>
                     <li>• Best for: "Stressed but solvent" borrowers.</li>
                  </ul>
               </div>
               <div className="flex-1 p-6 bg-emerald-50 border border-emerald-100 rounded-2xl">
                  <h4 className="font-black text-emerald-800 mb-4">Debt Settlement</h4>
                  <ul className="text-sm space-y-2 font-bold text-emerald-900/70">
                     <li>• You pay 30% to 50% of the total.</li>
                     <li>• Credit score goes DOWN temporarily.</li>
                     <li>• Best for: "Insolvent and struggling" borrowers.</li>
                     <li>• Provides deeper financial relief.</li>
                  </ul>
               </div>
            </div>
          </section>

          <section id="success-stories" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-12 text-center">
              Winning Against <span className="text-[#1F5EFF]">Interest</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {[
                { 
                  name: "Vikram Malhotra", 
                  loc: "Mumbai", 
                  status: "Settled ₹12 Lakhs", 
                  savings: "₹18,000 monthly EMI reduction",
                  story: "I had 4 credit cards and 2 personal loans. My total monthly EMI was ₹62,000. HDFC Bank approved a consolidation loan for ₹12 Lakhs at 11% interest. My new EMI is ₹24,000. I am finally breathing again."
                },
                { 
                  name: "Pooja Reddy", 
                  loc: "Hyderabad", 
                  status: "Settled ₹8 Lakhs", 
                  savings: "₹4 Lakhs saved in total interest",
                  story: "I had multiple app-based loans with interest rates above 30%. SettleLoans helped me prepare my documentation and I secured a consolidation loan from SBI. The interest savings are enough to fund my daughter's education."
                }
              ].map((review, i) => (
                <div key={i} className="bg-white p-8 rounded-[40px] border border-[#DEDEDE] shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 flex items-center justify-center font-black text-[#1F5EFF] text-xl mr-4">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-black text-[#2E2E2E]">{review.name}</h5>
                      <p className="text-xs text-[#747474] font-bold uppercase tracking-wider">{review.loc}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="text-sm font-black text-emerald-600 bg-emerald-50 px-4 py-2 rounded-lg inline-block border border-emerald-100">
                      {review.status}
                    </div>
                    <p className="mt-2 text-xs font-bold text-[#1F5EFF]">{review.savings}</p>
                  </div>
                  <p className="text-[#2E2E2E] italic leading-relaxed text-sm opacity-80 leading-loose">"{review.story}"</p>
                </div>
              ))}
            </div>
          </section>

          <section id="faqs" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 text-center uppercase tracking-tighter">Market FAQs 2026</h2>
            <div className="grid gap-4">
              {[
                { q: "Is debt consolidation better than a personal loan?", a: "Debt consolidation is a type of personal loan. The only difference is the purpose. Consolidation loans often have slightly better rates because the bank knows exactly where the money is going: to close existing risks." },
                { q: "Will the bank close my credit cards automatically?", a: "Yes, in many cases, the consolidation agreement requires that the paid-off accounts be closed. This is to prevent you from running up debt again while you are paying off the consolidation loan." },
                { q: "Can I consolidate my home loan too?", a: "Usually, consolidation targets unsecured, high-interest debt like credit cards and personal loans. Home loans are already at low rates, so it usually doesn't make sense to consolidate them into a higher-interest personal loan." },
                { q: "What is a 'Balance Transfer'?", a: "A balance transfer is a specific type of consolidation for credit cards. You move your outstanding balance from a card with 40% interest to a new bank offering 12% to 15% interest for the first few months." },
                { q: "Does SettleLoans help with consolidation?", a: "Yes, we provide financial mapping to identify the best banks for your profile and help gather the necessary documentation for a high-probability approval." },
                { q: "Can I get a consolidation loan if I'm unemployed?", a: "No. Banks require a stable source of income to guarantee the new EMI payments. If you are unemployed, debt settlement is often the only remaining option." },
                { q: "How much does my credit score drop after taking a consolidation loan?", a: "Initially, it might drop by 5 to 10 points due to a fresh 'Hard Inquiry.' However, as you close multiple small accounts, your score will usually recover and surpass its original level within 6 months." },
                { q: "Can NRIs get debt consolidation in India?", a: "Yes, most major banks like ICICI and HDFC have specialized desk for NRIs. The criteria involve demonstrating Indian income or assets that can be used for repayment." },
                { q: "What is the maximum tenure for these loans?", a: "Typically, unsecured consolidation loans go up to 60 or 72 months. Secured options like Loan Against Property can go up to 15 or 20 years." },
                { q: "Is there any hidden cost?", a: "Always watch out for processing fees, documentation charges, and insurance premiums that banks might bundle. Always ask for the 'Internal Rate of Return' (IRR) to know the true cost." }
              ].map((faq, i) => (
                 <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] hover:border-[#1F5EFF]/30 transition-colors shadow-sm">
                    <h4 className="font-black text-[#2E2E2E] text-lg mb-3">{i+1}. {faq.q}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                 </div>
              ))}
            </div>
          </section>

          <section className="scroll-mt-32 mb-16">
             <div className="bg-[#1F5EFF] p-12 rounded-[50px] text-center text-white relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <h3 className="text-2xl md:text-5xl font-black mb-8">Ready to Simplify <br/>Your Financial Life?</h3>
                <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of Indians who have successfully escaped the debt trap through strategic consolidation. Get your free debt map today.
                </p>
                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-5 px-12 rounded-2xl hover:scale-105 transition-all text-xl shadow-xl">
                  Talk to a Debt Expert
                </Link>
             </div>
          </section>

        </article>

        {/* Right Column: CTA & Context */}
        <aside className="hidden lg:block w-1/5 min-w-[240px]">
          <div className="sticky top-24 space-y-8">
             <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl overflow-hidden relative">
                <div className="text-3xl font-black mb-4 text-[#1F5EFF]">40%</div>
                <h3 className="text-lg font-black mb-4 relative z-10 leading-tight">Average Savings on Monthly EMIs</h3>
                <p className="text-white/60 text-xs mb-8 relative z-10 font-bold uppercase tracking-widest leading-loose">Based on 2026 consolidating results</p>
                <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-black py-4 rounded-xl hover:bg-[#1F5EFF]/90 transition-colors shadow-lg">Start Saving</Link>
             </div>

             <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-widest text-[#747474] mb-6 border-b pb-4">Consolidation Guides</h3>
                <ul className="space-y-6">
                   <li>
                      <Link href="/mastering-loan-settlement" className="group flex flex-col items-start text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                        <span className="text-xs text-[#747474] mb-1 font-black">Strategy #1</span>
                        <span className="font-bold">Debt Negotiation Tips</span>
                      </Link>
                   </li>
                    <li>
                      <Link href="/what-is-personal-loan-settlement" className="group flex flex-col items-start text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                        <span className="text-xs text-[#747474] mb-1 font-black">Strategy #2</span>
                        <span className="font-bold">Personal Loan Guide</span>
                      </Link>
                   </li>
                    <li>
                      <Link href="/loan-settlement" className="group flex flex-col items-start text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                         <span className="text-xs text-[#747474] mb-1 font-black">General</span>
                        <span className="font-bold">Loan Settlement Hub</span>
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
