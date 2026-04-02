import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Loan Settlement for Self-Employed in India | Business Debt Relief Guide",
  description: "Are you self-employed and struggling with business debt? Learn the legal process of loan settlement for entrepreneurs. Get experts tips on business loan negotiation and debt relief.",
  alternates: {
    canonical: "https://settleloans.in/loan-settlement-for-self-employed",
  },
};

export default function LoanSettlementSelfEmployedPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/loan-settlement-for-self-employed#webpage",
        "url": "https://settleloans.in/loan-settlement-for-self-employed",
        "name": "Loan Settlement for Self-Employed in India | Business Debt Relief Guide",
        "description": "Comprehensive guide to loan settlement and debt resolution for self-employed individuals and business owners in India.",
        "breadcrumb": { "@id": "https://settleloans.in/loan-settlement-for-self-employed#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/loan-settlement-for-self-employed#breadcrumb",
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
            "name": "Loan Settlement for Self-Employed",
            "item": "https://settleloans.in/loan-settlement-for-self-employed"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/loan-settlement-for-self-employed#article",
        "headline": "Loan Settlement for Self-Employed in India: Reclaim Your Financial Future",
        "description": "Learn how business owners and entrepreneurs can settle their bank loans and credit card debts legally after business losses or financial crisis.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Experts"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-03-15",
        "dateModified": "2024-03-15",
        "mainEntityOfPage": { "@id": "https://settleloans.in/loan-settlement-for-self-employed#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/loan-settlement-for-self-employed#product",
        "name": "Business Debt Settlement Services",
        "description": "Professional debt negotiation and legal settlement for self-employed individuals in India.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit K." },
            "datePublished": "2024-01-15",
            "reviewBody": "As a shop owner, the pandemic ruined my business. SettleLoans helped me settle three business loans and saved me from constant harassment. Truly professional.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Deepika S." },
            "datePublished": "2024-02-10",
            "reviewBody": "Highly recommended for consultants and small business owners. They handled my credit card settlement with such transparency.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/loan-settlement-for-self-employed#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is it legal for self-employed people to settle bank loans in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, loan settlement is a legal and recognized process by the RBI for both salaried and self-employed individuals to resolve debt when there is a genuine financial crisis."
            }
          },
          {
            "@type": "Question",
            "name": "How does settlement affect a business's credit rating?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Settlement leads to a 'Settled' remark on your CIBIL report, which drops your score and makes future business loans difficult for a few years. It should be used as a last resort."
            }
          },
          {
            "@type": "Question",
            "name": "Can I settle a business loan without closing my company?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can settle your debt while keeping your business active. However, the bank will require proof that your business is currently facing severe losses and you have no other way to pay."
            }
          },
          {
            "@type": "Question",
            "name": "What documents do I need for self-employed loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You will need the last 2-3 years' ITR, 12 months' bank statements, GST filings (if any), proof of business loss, and any medical records if relevant."
            }
          },
          {
            "@type": "Question",
            "name": "Will recovery agents come to my business place?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Recovery agents may visit your business location, but they must follow strict RBI guidelines. They cannot use abuse, force, or harass your customers or employees."
            }
          },
          {
            "@type": "Question",
            "name": "How much reduction can I get on a business loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depending on the lender and your situation, you can expect a reduction of 40% to 70% of the total outstanding amount, including interest and penalties."
            }
          },
          {
            "@type": "Question",
            "name": "Does the MSME Samadhaan portal help with bank loans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "MSME Samadhaan is primarily for delayed payments from buyers. For bank loan disputes, you may need to use the MSME Act's provisions or professional debt consultants like SettleLoans."
            }
          },
          {
            "@type": "Question",
            "name": "Can I settle multiple credit cards and a business loan together?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can initiate settlement for all your debts simultaneously. This is often better as it gives a clear picture of your total debt to each creditor."
            }
          },
          {
            "@type": "Question",
            "name": "What is the impact on a business partner in a joint loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If it is a joint loan, both partners' CIBIL scores will be affected by a settlement. Both must agree to the terms for a successful resolution."
            }
          },
          {
            "@type": "Question",
            "name": "Should I wait for a legal notice before starting the settlement process?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, it is always better to pro-actively contact the bank once you realize you cannot pay. This shows your honesty and may prevent aggressive legal actions like SARFAESI or DRT cases."
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

        {/* Hero Section - Optimized and Powerful */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              The Entrepreneur's Shield
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Loan Settlement for <br className="hidden md:block" /> Self-Employed in India
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.2] font-normal">
              Are you an entrepreneur struggling with unmanageable business loans, personal debt, or credit card dues? Reclaim your business and your mental health with our comprehensive legal roadmap for debt freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Get Your Free Consultation
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
                  Loan Settlement for Self-Employed
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout - 3 Column Full Width */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative max-w-full">

          {/* Left Column: Table of Contents (Sticky) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <TableOfContents
              items={[
                { id: "business-debt-intro", title: "A Message to Entrepreneurs" },
                { id: "unique-challenges", title: "Business Debt Challenges" },
                { id: "settlement-definition", title: "What is Loan Settlement?" },
                { id: "loans-to-settle", title: "Types of Loans to Settle" },
                { id: "eligibility-criteria", title: "Key Eligibility Criteria" },
                { id: "cibil-impact", title: "The Truth About CIBIL" },
                { id: "step-by-step", title: "The 7-Step Process" },
                { id: "required-docs", title: "Documentation Needed" },
                { id: "legal-protections", title: "Your Legal Protections" },
                { id: "rbi-guidelines", title: "RBI & Recovery Agents" },
                { id: "negotiation-tactics", title: "Expert Negotiation Tactics" },
                { id: "secured-vs-unsecured", title: "Secured vs Unsecured Debt" },
                { id: "alternatives", title: "Better Alternatives" },
                { id: "psychological-impact", title: "Managing Business Stress" },
                { id: "msme-benefits", title: "Benefits for MSMEs" },
                { id: "case-studies", title: "Real Success Stories" },
                { id: "rebuilding-life", title: "Rebuilding After Debt" },
                { id: "why-settleloans", title: "How We Support You" },
                { id: "final-thoughts", title: "Your New Chapter" },
                { id: "faqs", title: "Frequently Asked Questions" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content (5000+ words target) */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#2E2E2E]">

            <section id="business-debt-intro" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-8 leading-tight">
                A Message to the Heart of India: <span className="text-black underline decoration-[#1F5EFF]/20">Your Business is Not Your Worth</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                <p className="text-lg leading-relaxed text-[#2E2E2E] relative z-10 mb-6">
                  Running a business in India is an act of extreme courage. Whether you are a small shop owner, a digital consultant, or a manufacturer, you are the backbone of this nation's economy. But as any entrepreneur knows, the path to success is rarely a straight line. Markets shift, supply chains break, and sometimes, despite your tireless work, the revenue simply does not match the rising pile of EMIs on your desk.
                </p>
                <p className="text-lg leading-relaxed text-[#2E2E2E] relative z-10 mb-6">
                  If you are reading this because you have reached a point where your bank's phone calls are more frequent than your customers' orders, please know this: You are not a failure. You have faced an economic storm that would have broken many others. At SettleLoans, we have seen the brilliance of Indian entrepreneurs and we understand the heavy weight of business debt. We are here to provide the shield you need to protect your family and your future.
                </p>
                <p className="text-lg leading-relaxed text-[#2E2E2E] relative z-10 font-bold text-[#1F5EFF]">
                  Do not let another day go by in fear. Contact us, and let us build a professional, legal bridge to your financial freedom.
                </p>
              </div>
            </section>

            <section id="unique-challenges" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                The Unique Challenges of Business Debt in India
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                In India, the line between personal and business finance is often blurred for the self-employed. In the early days of your journey, you might have taken a personal loan to buy inventory. You might have used your personal credit card to pay your office rent during a slow month. This is the reality for millions of Indian small business owners. However, this also means that when the business faces a downturn, your personal life and your family's security are directly in the line of fire.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Unlike a salaried individual who has a predictable monthly income, a business owner's cash flow is volatile. A delayed payment from a major client or a sudden change in government policy can wipe out your months of profit. When this happens, the fixed EMI cycles of traditional banks and NBFCs become your worst enemy. They do not account for the 'seasonal' nature of your business or the unexpected 'bad debt' you might be facing from your own buyers.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                According to recent MSME reports, over 30% of small businesses in India face some form of debt distress annually. Yet, many entrepreneurs continue to take 'top-up' loans or high-interest informal credit to pay off old bank dues. This 'revolving debt' cycle is a trap that eventually leads to a total collapse. Recognizing the symptoms of terminal debt early is the most important skill an entrepreneur can have.
              </p>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                <h3 className="text-xl font-bold mb-6">Are You in a Business Debt Trap? Check the Signs:</h3>
                <ul className="grid md:grid-cols-2 gap-4 text-sm font-medium">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 shrink-0"></span>
                    <span>Taking fresh loans to pay existing EMI interests only.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 shrink-0"></span>
                    <span>Your business turnover is 100% focused on servicing debt.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 shrink-0"></span>
                    <span>You are using personal savings intended for child education or health.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 shrink-0"></span>
                    <span>Frequent calls from recovery agents at your shop or office.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 shrink-0"></span>
                    <span>Legal notices from banks regarding property possession (SARFAESI).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 shrink-0"></span>
                    <span>Insomnia and severe anxiety affecting your business decisions.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="settlement-definition" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                What Exactly is Loan Settlement for the Self-Employed?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Loan settlement is a negotiated compromise between you (the borrower) and the financial institution (the lender). It is a process where the bank agrees to accept a portion of the total amount you owe - often just the principal amount or even less - and formally closes the account as 'Settled'. For a self-employed person, this acts as a 'Financial Reset button'.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Banks are commercial entities. When they realize that a borrower is in genuine financial distress and the chances of recovering the full amount are low, they prefer to take a 'One Time Settlement' (OTS). This is better for their balance sheets than a permanent 'Non-Performing Asset' (NPA). However, you must understand that the keyword here is 'Negotiation'. Banks will not offer a settlement easily; you have to prove your hardship and demonstrate that the settlement is the best possible outcome for them as well.
              </p>
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-200 mb-8">
                <h3 className="text-xl font-bold mb-4 text-blue-900 text-[var(--color-text-body)]">The Hard Truth: Closure vs. Settlement</h3>
                <p className="text-sm text-blue-800 leading-relaxed mb-4 text-[var(--color-text-body)]">
                  <strong>Loan Closure:</strong> You pay the principal + interest + penalties in full. Result: 'Closed' status on CIBIL. Highest credit rating.
                </p>
                <p className="text-sm text-blue-800 leading-relaxed text-[var(--color-text-body)]">
                  <strong>Loan Settlement:</strong> You pay a reduced amount. Result: 'Settled' status on CIBIL. This negatively impacts your score for 3-7 years but buys you immediate peace and saves you from a total financial wipeout. For many business owners, this temporary credit hit is a small price to pay to stop the harassment and high-interest bleeding.
                </p>
              </div>
            </section>

            <section id="loans-to-settle" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Types of Loans Entrepreneurs Commonly Settle
              </h2>
              <p className="mb-8">In our experience, self-employed individuals in India are often juggling multiple types of debt. Each has its own rules for negotiation.</p>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                  <h3 className="text-xl font-bold text-[#1F5EFF] mb-2">1. Unsecured Business Loans</h3>
                  <p className="text-sm text-gray-600 mb-4">These are often taken from NBFCs or private banks without collateral. Since there is no property for the bank to grab, these are the most 'settle-able' loans. Banks are highly motivated to reach a compromise after 6 months of non-payment.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                  <h3 className="text-xl font-bold text-[#1F5EFF] mb-2">2. Personal Loans used for Business</h3>
                  <p className="text-sm text-gray-600 mb-4">The bank treats these as personal debt, but the reality is business-driven. If you can show your ITRs and GST reports proving business failure, banks are often willing to settle these within the 40% to 60% range of the total dues.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                  <h3 className="text-xl font-bold text-[#1F5EFF] mb-2">3. Credit Card Dues</h3>
                  <p className="text-sm text-gray-600 mb-4">The interest rates here are astronomical (up to 48% annually). For a business owner using a CC for daily operations, this can snowball in months. Credit card companies have dedicated settlement departments that offer significant waivers on interest and late fees.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                  <h3 className="text-xl font-bold text-[#1F5EFF] mb-2">4. Loan Against Property (LAP) / MSME Loans</h3>
                  <p className="text-sm text-gray-600 mb-4">These are 'Secured' loans. The bank has your property papers. Settlement here is much tougher because the bank can invoke the SARFAESI Act to auction your property. However, we have successfully negotiated settlements here by showing that an auction would not yield the full value due to market conditions or legal hurdles.</p>
                </div>
              </div>
            </section>

            <section id="eligibility-criteria" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Are You Eligible for a Settlement?</h2>
              <p className="mb-6">Banks do not give discounts to everyone who asks. They have a strict 'Hardship' check. To be eligible, you must satisfy the following conditions:</p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50/50 p-6 rounded-xl border border-orange-100">
                  <h3 className="text-xl font-bold text-orange-800 mb-3">Genuine Financial Distress</h3>
                  <p className="text-sm text-orange-900/80 leading-relaxed">
                    You must prove that your business is in a state where repaying the full amount is impossible. This could be due to a significant loss of market share, disability of the business owner, or catastrophic external events (like fire, floods, etc.).
                  </p>
                </div>
                <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Non-Performing Asset (NPA) Status</h3>
                  <p className="text-sm text-blue-900/80 leading-relaxed">
                    Usually, banks only talk settlement once the loan has not been paid for 90 days (NPA). Before that, they will only demand regular EMIs. The 'sweet spot' for a good settlement is often 6 to 9 months of defaults.
                  </p>
                </div>
              </div>
              <p className="mb-6">
                It is also worth noting that if the bank suspects you have a 'Willful Defaulter' status (meaning you have money but are choosing not to pay), they will not settle. They will instead start criminal proceedings. This is where professional consultants like SettleLoans are vital: we help you present your true financial picture so the bank views you as a 'Distressed Borrower' rather than a 'Fraudulent' one.
              </p>
            </section>

            <section id="cibil-impact" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The Hard Truth About CIBIL: Navigating the 'Settled' Remark</h2>
              <p className="mb-6 text-lg">
                For a business owner, a good credit score is like oxygen. It allows you to get working capital, bank guarantees, and letters of credit. When you settle a loan, your CIBIL score will drop, and the account status will change to 'Settled'. This will remain on your report for up to 7 years.
              </p>
              <div className="bg-[#2E2E2E] text-white p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold mb-4">Why Settlement is Still Better Than Default</h3>
                <p className="mb-4 opacity-80">
                  While 'Settled' is not ideal, it is infinite times better than 'Active Default' or 'Suit Filed'. An active default means you are still in a fight with the bank. No new lender will even look at your profile. A 'Settled' status proves that you have resolved your past and taken responsibility.
                </p>
                <ul className="space-y-3 text-sm opacity-90">
                  <li className="flex items-start gap-2">✓ You stop the endless accumulation of interest and penal interest.</li>
                  <li className="flex items-start gap-2">✓ Legal notices and recovery agent harassment stop immediately upon payment.</li>
                  <li className="flex items-start gap-2">✓ You get a 'No Due Certificate' (NDC) which is a vital document for any future business.</li>
                  <li className="flex items-start gap-2">✓ You can start rebuilding your score after 12-24 months using secured credit cards or gold loans.</li>
                </ul>
              </div>
            </section>

            <section id="step-by-step" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">The 7-Step Professional Settlement Roadmap</h2>
              <p className="mb-8 text-center max-w-2xl mx-auto">Do not go into a bank and just 'ask' for a settlement. You need a strategy. Here is the process we follow at SettleLoans for our self-employed clients.</p>
              
              <div className="relative border-l-2 border-[#1F5EFF] ml-4 md:ml-8 space-y-12 pb-8">
                {[
                  { step: "Step 1: Total Debt Audit", content: "Collect all your loan statements, credit card bills, and notices. Calculate your total principal and total interest due." },
                  { step: "Step 2: Business Health Check", content: "Prepare a clear report on why your business failed or slowed down. Include your P&L, bank statements showing low turnover, and any relevant GST notices." },
                  { step: "Step 3: The 'Realistic Offer' Calculation", content: "Determine exactly how much lump-sum money you can arrange from family, friends, or asset sale. Usually, start your offer at 30% of the total dues." },
                  { step: "Step 4: Formal Proposal Drafting", content: "Send a written settlement request to the bank's Nodal Officer or the Settlement Department. Clearly state your hardship and cite relevant RBI guidelines." },
                  { step: "Step 5: Active Negotiation", content: "The bank will counter your offer. Expect multiple rounds of phone calls and meetings. Stay firm on your financial inability while being polite." },
                  { step: "Step 6: The Written Settlement Letter", content: "NEVER pay a single rupee based on a verbal promise or a WhatsApp message. Wait for a formal letter on the bank's letterhead with a specific deadline and amount." },
                  { step: "Step 7: Payment & No Due Certificate", content: "Make the payment via banking channels. Within 30 to 45 days, collect your No Due Certificate (NDC). Ensure the bank updates your CIBIL status." }
                ].map((item, i) => (
                  <div key={i} className="relative pl-8">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1F5EFF]"></div>
                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">{item.step}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="required-docs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Documentation: The Key to Your Freedom</h2>
              <p className="mb-6">For a self-employed person, 'Proof of Loss' is your biggest weapon. Without documentation, the bank will assume you are hiding money. You will need:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div><strong>Income Tax Returns (ITR):</strong> Last 3 years of ITRs. If the recent ITR shows a major drop in income compared to the loan application year, it's strong evidence.</div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div><strong>Bank Statements:</strong> Current account statements for the last 12 months. Low average balances and lack of business credits are vital proofs.</div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div><strong>GST Filings:</strong> Nil returns or significantly lower GST payments compared to previous years.</div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                  <div><strong>Notice of Closure:</strong> Documentation showing you have closed your shop, surrendered your warehouse, or terminated your office lease.</div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                  <div><strong>Medical Records:</strong> If the business owner suffered a major illness (Covid, Heart, etc.) that led to business neglect, these are highly respected by banks.</div>
                </li>
              </ul>
            </section>

            <section id="legal-protections" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Your Legal Protections: Knowledge is Power</h2>
              <p className="mb-6 text-lg">
                Even if you owe money, you still have human rights. In India, the law protects you from uncivilized recovery practices. Here are the keys you must know.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">The MSME Samadhaan & RTI</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    If you are a registered MSME, you have access to specialized grievance portals. While these are for buyer payments, you can use your MSME status to demand 'Lender Restructuring' as per the RBI's specialized frameworks for small industries.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Civil Court & Mediation</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Before a bank can arrest you (which is extremely rare for simple defaults) or seize your only house, they must follow lengthy court procedures. You always have the right to request 'Court Mediation' to reach a settlement.
                  </p>
                </div>
              </div>
            </section>

            <section id="rbi-guidelines" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-6 leading-tight">
                RBI Rules on Recovery Agents: Stand Your Ground
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Recovery agents are NOT the police. They have NO legal right to enter your home or office without your permission. They cannot use foul language, they cannot touch you, and they cannot talk about your debt to your neighbors or customers.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-4">Strict Forbidden Practices for Agents:</h3>
                <ul className="space-y-3 text-red-900/80 font-medium">
                  <li>• Calling you before 8:00 AM or after 7:00 PM.</li>
                  <li>• Harassing your family members or business employees.</li>
                  <li>• Calling your business's clients to shame you.</li>
                  <li>• Making threat calls or using fake 'Legal' names or titles.</li>
                  <li>• Creating professional or social shaming (like posting on WhatsApp groups).</li>
                </ul>
              </div>
              <p className="mb-6">
                If an agent violates any of these, you can file a complaint with the Banking Ombudsman and also a police FIR for harassment under Section 506 and 509 of the IPC. At SettleLoans, we provide you with a 'Legal Response Letter' that you can show to any agent who visits you. This usually stops the harassment immediately.
              </p>
            </section>

            <section id="negotiation-tactics" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Expert Negotiation Tactics: Get the Best Deal</h2>
              <p className="mb-6">Negotiating with a bank's recovery department is like any other business deal. You need to be firm but logical.</p>
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-8">
                <h3 className="text-xl font-black text-blue-900 mb-6">The 'Power of Silence' Strategy</h3>
                <p className="mb-6">Banks often use 'Fear' to get you to pay. We use 'Time'. The longer a loan stays in default, the higher the pressure on the bank's manager to clear the file. If you show that you simply do not have the money, and your only offer is the 30% you have arranged, the bank eventually accepts that something is better than nothing.</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-blue-100 text-center">
                    <span className="block text-2xl mb-1">🤝</span>
                    <strong>Be Sincere</strong>
                    <p className="text-xs text-gray-500">Admit the debt but explain the impossibility.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-blue-100 text-center">
                    <span className="block text-2xl mb-1">📄</span>
                    <strong>Write Everything</strong>
                    <p className="text-xs text-gray-500">Never rely on phone calls for settlement terms.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-blue-100 text-center">
                    <span className="block text-2xl mb-1">🏦</span>
                    <strong>Stay Level</strong>
                    <p className="text-xs text-gray-500">Managers respect professionals, not panic.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="case-studies" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Real Stories of Business Revival</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose">
                {[
                  {
                    name: "Rajesh V.",
                    loc: "Mumbai",
                    type: "MSME Business Loan",
                    outcome: "Settled for 50% waiver",
                    story: "My textile wholesale business crashed due to delayed payments. I owed 45 lakhs. SettleLoans showed the bank my unpaid buyer receipts and negotiated a settlement that allowed me to pay 22 lakhs and close everything. I am now rebuilding slowly."
                  },
                  {
                    name: "Sandeep M.",
                    loc: "Hyderabad",
                    type: "Personal Loans + CC",
                    outcome: "Debt Free in 6 Months",
                    story: "I had 12 credit cards maxed out for my startup. The interest was 2 lakhs a month. SettleLoans consolidated the case and got me a single settlement plan that saved me 60% of the total amount. I can finally breathe."
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

            <section id="why-settleloans" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">How SettleLoans Acts as Your Professional Buffer</h2>
              <p className="mb-6">At SettleLoans, we don't just 'talk' to banks. We speak their language. We know the technicalities of Banking Regulation and the internal processes that managers use to approve settlements. When you hire us, you are not just getting a consultant; you are getting a team that has handled thousands of cases for Indian entrepreneurs.</p>
              <div className="bg-[#2E2E2E] text-white p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold mb-4">Our Commitment to Self-Employed Clients</h3>
                <ul className="space-y-3 text-sm opacity-90">
                  <li className="flex items-start gap-2">✓ Stop Harassment: We take over the calls from banks and agents, giving you the peace to actually work.</li>
                  <li className="flex items-start gap-2">✓ Forensic Audit: We check if the bank has wrongly added penal interests or broken any RBI rules.</li>
                  <li className="flex items-start gap-2">✓ Expert Legal replies: We draft professional responses to every legal notice, showing the bank we know the law.</li>
                  <li className="flex items-start gap-2">✓ Maximum Waivers: Our team knows exactly how much a bank is 'authorized' to waive for your type of loan.</li>
                </ul>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4 not-prose">
                {[
                  { q: "Is business loan settlement legal in India?", a: "Yes, it is a perfectly legal and recognized financial procedure as per RBI guidelines to resolve distressed debt." },
                  { q: "How much can I save in a business loan settlement?", a: "Usually, you can save between 40% and 70% of the total amount due, depending on the age of the debt and the lender's policy." },
                  { q: "Will I go to jail if I don't pay my business loan?", a: "No, simple default on a bank loan is a civil matter, not a criminal one. Jail only happens in cases of fraud or falsifying documents." },
                  { q: "How does setting a loan affect my future business credit?", a: "It will make it difficult to get bank loans for 3-5 years. However, you can still get secured loans or use NBFCs that focus on current business cash flow." },
                  { q: "Can I settle a loan if the bank has already filed a case in DRT?", a: "Yes, you can settle at any stage. Banks often prefer a settlement over a long court case that might take years to resolve." },
                  { q: "Do I need a lawyer for loan settlement?", a: "While not legally mandatory, having professional debt consultants like SettleLoans ensures your rights are protected and you get the best possible discount." },
                  { q: "What is the difference between writing off and settling?", a: "A 'Write-off' is an internal bank accounting move. A 'Settlement' is a legal agreement between you and the bank that closes the account forever." },
                  { q: "Can my spouse's CIBIL be affected by my business loan settlement?", a: "Only if your spouse is a co-borrower or a personal guarantor for that specific loan." },
                  { q: "How does the bank verify my financial hardship?", a: "Through your bank statements, ITRs, business closure notices, and third-party verification visits by bank officials." },
                  { q: "Can I settle my loan in installments?", a: "Yes, many banks allow a 'Structured Settlement' where you pay the agreed amount in 3 to 6 monthly installments." }
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
              <p className="text-gray-400 text-sm italic">Disclaimer: Loan settlement has long-term impacts on your credit score. SettleLoans provides professional consultancy and does not guarantee specific results from every lender.</p>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden mt-16 mb-8">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                  <h3 className="text-2xl font-black mb-2">Save Your Business Today</h3>
                  <p className="opacity-90 text-sm">Speak to our experts and find the legal path to your freedom.</p>
                </div>
                <div className="p-8 text-center">
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                    Get Your Free Consultation
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
                  <h3 className="text-lg font-black text-white px-2">Protect Your Business</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                    Stop the harassment and save up to 70% on your total dues today.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                    Talk to an Expert
                  </Link>
                  <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">100% Legal & Safe</p>
                </div>
              </div>

              {/* Related Pages Container */}
              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Business Guides</h3>
                <ul className="space-y-4 text-sm font-bold">
                  <li>
                    <Link href="/business-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Business Loan Negotiation
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-happens-if-loan-emi-not-paid" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      EMI Default Rules
                    </Link>
                  </li>
                  <li>
                    <Link href="/cheque-bounce" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Section 138 Protection
                    </Link>
                  </li>
                  <li>
                    <Link href="/credit-score-improvement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Rebuilding Business Credit
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
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to Reclaim Your Peace?</h2>
                <p className="text-white/90 text-lg md:text-xl mb-10">Join thousands of Indian business owners who have successfully settled their loans and secured their family's future.</p>
                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-5 px-12 rounded-xl text-xl hover:scale-105 transition-all shadow-2xl">
                    Get Free Legal Advice Now
                </Link>
            </div>
        </section>

      </main>
    </div>
  );
}
