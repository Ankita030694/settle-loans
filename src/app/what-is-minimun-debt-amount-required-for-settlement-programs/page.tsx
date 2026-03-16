import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Minimum Debt Amount for Settlement | What Is Required in India?",
  description: "Learn about the minimum debt amount required for debt settlement programs in India. Discover thresholds for banks, NBFCs, and MSME settlement schemes.",
  alternates: {
    canonical: "https://settleloans.in/what-is-minimun-debt-amount-required-for-settlement-programs",
  },
};

export default function MinimumDebtPage() {
  const faqs = [
    {
      q: "What is the absolute minimum debt required for a settlement program in India?",
      a: "There is no law stating a fixed minimum, but most professional settlement companies prefer at least ₹2,00,000 in total unsecured debt to make the negotiation viable. However, individual bank OTS schemes can apply to much smaller amounts, sometimes as low as ₹25,000 for credit cards."
    },
    {
      q: "Do NBFCs have different minimum requirements than banks?",
      a: "Yes, NBFCs often follow the SARFAESI threshold of ₹20 lakh for structured recovery, but for 'compromise settlements,' they may consider any amount where the cost of legal recovery exceeds the potential recovery amount."
    },
    {
      q: "Can I settle a debt of ₹50,000?",
      a: "Yes, you can settle smaller debts like ₹50,000, particularly on credit cards. Banks often offer One-Time Settlement (OTS) for such amounts during their quarterly settlement camps, though professional services may not take on such small individual cases."
    },
    {
      q: "Why do settlement companies have a minimum debt requirement?",
      a: "Debt settlement involves significant legal work, documentation, and negotiation. For very small amounts, the professional service fees might outweigh the savings for the client, making it financially illogical."
    },
    {
      q: "What is the SARFAESI threshold for debt recovery?",
      a: "Currently, NBFCs with an asset size of ₹100 crore and above can only initiate legal recovery under the SARFAESI Act for loan amounts of ₹20 lakh and above. This threshold does not limit your ability to request a settlement for lower amounts."
    },
    {
      q: "Is there a maximum limit for debt settlement?",
      a: "No, there is no upper limit. Debt settlement can be used for multi-crore business loans or small personal debts alike, provided the lender agrees to the terms."
    },
    {
      q: "Does the minimum amount vary by loan type?",
      a: "Yes. Unsecured debts like credit cards and personal loans are more likely to be settled at lower amounts. Secured debts like home loans usually require much higher amounts and more complex reasons for the bank to consider a settlement."
    },
    {
      q: "Can I combine multiple small debts to meet a minimum requirement?",
      a: "Most professional services allow you to aggregate multiple loans and credit cards. If your total combined debt across 3-4 lenders exceeds ₹2 lakh, you would typically qualify for a structured settlement program."
    },
    {
      q: "Are there special settlement schemes for small MSME loans?",
      a: "Yes, the RBI mandates that banks have board-approved OTS policies specifically for small-value accounts in the MSME sector, which often have lower entry barriers and simplified processes."
    },
    {
      q: "What happens if my debt is below the minimum required for a professional service?",
      a: "You can pursue a DIY (Do-It-Yourself) settlement. You can wait for the bank's 'Lok Adalat' invitation or contact the bank's Nodal Officer directly to propose a settlement during their cleanup months (March and September)."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/what-is-minimun-debt-amount-required-for-settlement-programs#webpage",
        "url": "https://settleloans.in/what-is-minimun-debt-amount-required-for-settlement-programs",
        "name": "Minimum Debt Amount for Settlement Programs",
        "description": "Comprehensive guide on the debt thresholds for settlement programs in India.",
        "breadcrumb": { "@id": "https://settleloans.in/what-is-minimun-debt-amount-required-for-settlement-programs#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/what-is-minimun-debt-amount-required-for-settlement-programs#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
          { "@type": "ListItem", "position": 2, "name": "Minimum Debt for Settlement", "item": "https://settleloans.in/what-is-minimun-debt-amount-required-for-settlement-programs" }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/what-is-minimun-debt-amount-required-for-settlement-programs#article",
        "headline": "Minimum Debt Amount for Settlement: Decoding the Requirements in India",
        "description": "How much debt do you need to qualify for a settlement program? We analyze bank policies, NBFC thresholds, and MSME schemes.",
        "author": { "@type": "Organization", "name": "SettleLoans Content Team" },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo/logo.svg" }
        },
        "datePublished": "2024-03-16",
        "dateModified": "2024-03-16",
        "mainEntityOfPage": { "@id": "https://settleloans.in/what-is-minimun-debt-amount-required-for-settlement-programs#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/what-is-minimun-debt-amount-required-for-settlement-programs#product",
        "name": "Debt Amount Analysis Service",
        "description": "Professional evaluation of debt eligibility for settlement programs.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "1850"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram S." },
            "datePublished": "2024-02-10",
            "reviewBody": "Verified that even with ₹1.5L debt, settlement is possible. This guide cleared all my doubts.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/what-is-minimun-debt-amount-required-for-settlement-programs#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Financial Eligibility Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Minimum Debt for <br className="hidden md:block" /> Settlement Programs
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Is your debt too small for a settlement? Or large enough for a deep waiver? Explore the exact thresholds required by Indian banks and NBFCs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Check Your Eligibility
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">Minimum Debt Amount Guide</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24">
              <TableOfContents
                items={[
                  { id: "defining-thresholds", title: "Defining the Thresholds" },
                  { id: "professional-vs-diy", title: "Professional Service vs DIY" },
                  { id: "bank-internal-policies", title: "Bank Internal Policies" },
                  { id: "nbfc-sarfaesi-limits", title: "NBFC and SARFAESI Limits" },
                  { id: "msme-ots-schemes", title: "MSME OTS Schemes" },
                  { id: "why-size-matters", title: "Why Loan Size Matters" },
                  { id: "unsecured-thresholds", title: "Unsecured Debt Minimums" },
                  { id: "credit-card-realities", title: "Credit Card Realities" },
                  { id: "personal-loan-breakdown", title: "Personal Loan Breakdown" },
                  { id: "cost-of-recovery", title: "The Cost of Recovery Equation" },
                  { id: "legal-action-triggers", title: "Legal Action Triggers" },
                  { id: "micro-debt-resolution", title: "Micro-Debt Resolution" },
                  { id: "consolidating-to-qualify", title: "Consolidating to Qualify" },
                  { id: "strategic-default-risks", title: "Strategic Default Risks" },
                  { id: "long-term-implications", title: "Long-Term Implications" },
                  { id: "success-stories", title: "Success Stories" },
                  { id: "faqs", title: "Frequently Asked Questions" }
                ]}
              />
            </div>
          </aside>

          {/* Middle Column: Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            <section id="defining-thresholds" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Defining the Thresholds: <span className="text-black">The "Goldilocks" Zone of Debt</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                When people ask about the "minimum debt amount required for settlement programs," they are often looking for a hard number. In the Indian banking ecosystem, that number is fluid. To understand it, you have to look at the process from the lender's perspective. A bank doesn't just want to collect money; they want to optimize their return on investment (ROI). If a debt is too small, the legal fees, manpower, and overhead of recovery might actually exceed the total amount owed. Conversely, if a debt is very large, the bank will fight tooth and nail to recover every paisa.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                In this guide, we will explore the different "tiers" of debt. We will see how a ₹50,000 credit card bill is treated differently from a ₹5,00,000 personal loan or a ₹50,00,000 business debt. While there is no constitutional or legislative minimum, there are practical industry standards that dictate whether a settlement is a viable option for you.
              </p>
            </section>

            <section id="professional-vs-diy" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Professional Settlement vs. DIY: The Entry Barriers
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The term "settlement program" usually refers to a structured, professional service provided by firms like <strong>SettleLoans</strong>. These firms have their own internal minimums.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Professional Service Tier</h3>
                  <p className="text-sm text-gray-600 mb-4">Most reputable firms in India require a total aggregate debt of at least ₹2,00,000. This is because the legal and administrative infrastructure needed to protect you (managing collection calls, legal notices, and negotiations) has fixed costs.</p>
                  <ul className="text-xs text-blue-600 space-y-2 font-bold">
                    <li>Minimum: ₹2,00,000 (Aggregate)</li>
                    <li>Benefit: Full legal protection and deep waivers.</li>
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">DIY / OTS Tier</h3>
                  <p className="text-sm text-gray-600 mb-4">For debts below ₹2 lakh, you are usually looking at 'Self-Settlement' or responding to bank-initiated One-Time Settlement (OTS) offers. These typically appear during bank 'Adalats' or year-end cleanup drives.</p>
                  <ul className="text-xs text-green-600 space-y-2 font-bold">
                    <li>Minimum: None (depends on the bank)</li>
                    <li>Benefit: Low entry barrier, but no legal representation.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="bank-internal-policies" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Bank Internal Policies: The 90-Day Rule
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Regardless of the amount, banks rarely discuss settlement until a loan has been classified as a Non-Performing Asset (NPA). This happens after 90 days of continuous non-payment. Once an account hits NPA status, the bank's internal recovery mechanism changes. They shift from trying to "save the customer" to "recovering the capital."
              </p>
              <p className="text-lg leading-relaxed mb-6">
                For public sector banks (PSBs) like SBI or PNB, the board-approved policies are quite rigid. They have specific bands for settlements. A loan of ₹1 lakh might have a different approval authority than a loan of ₹10 lakh. Understanding these bands is crucial to knowing if your amount is "settle-able."
              </p>
            </section>

            <section id="nbfc-sarfaesi-limits" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                NBFC and SARFAESI Limits: The 20 Lakh Threshold
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Non-Banking Financial Companies (NBFCs) have different legal teeth than banks. One of the most important metrics for NBFCs is the SARFAESI (Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest) Act threshold.
              </p>
              <div className="p-6 bg-[#2B2B2B] text-[#DEDEDE] rounded-2xl mb-8 border-l-4 border-[#1F5EFF]">
                <h4 className="font-bold text-xl mb-3 uppercase tracking-widest text-[#1F5EFF]">Legal Fact Check</h4>
                <p className="leading-[1.4]">
                  As of 2021, NBFCs with an asset size of ₹100 crore or more can only initiate SARFAESI recovery (which includes seizing assets without court intervention) for loan amounts of <strong>₹20 lakh or more</strong>. 
                </p>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                If your debt is below ₹20 lakh with an NBFC, they cannot use the SARFAESI hammer. They must go through the civil courts or use traditional recovery agents. This makes them significantly more willing to settle for lower amounts (₹2L - ₹10L) because the alternative (a civil suit) is slow and expensive.
              </p>
            </section>

            <section id="msme-ots-schemes" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                MSME OTS Schemes: Settlements for Small Business
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The Micro, Small, and Medium Enterprises (MSME) sector has special protections in India. The RBI mandates that all banks have a board-approved One-Time Settlement (OTS) policy for MSMEs. These schemes often target loans between ₹5 lakh and ₹25 lakh. Because MSMEs are vital to the economy, banks are encouraged by the government to "clean up" these small-to-medium NPA accounts rather than letting them linger indefinitely in DRT (Debt Recovery Tribunals).
              </p>
            </section>

            <section id="why-size-matters" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                 Why Loan Size Matters: The Negotiation Leverage
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                In debt settlement, size is a double-edged sword.
              </p>
              <ul className="space-y-6 mb-8">
                <li className="flex gap-4 p-4 border rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="text-2xl">📉</div>
                  <div>
                    <h4 className="font-bold">Small Debts (Below ₹1 Lakh)</h4>
                    <p className="text-sm text-gray-500">Lenders might ignore them for a long time. However, when they do settle, the percentage waiver might be smaller because the bank doesn't "lose" much by writing it off.</p>
                  </div>
                </li>
                <li className="flex gap-4 p-4 border rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="text-2xl">⚖️</div>
                  <div>
                    <h4 className="font-bold">Medium Debts (₹2 Lakh - ₹15 Lakh)</h4>
                    <p className="text-sm text-gray-500">This is the "sweet spot." Lenders are motivated to settle because the amount is significant enough to hurt their balance sheet, but small enough that a full-scale legal battle isn't worth it.</p>
                  </div>
                </li>
                <li className="flex gap-4 p-4 border rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="text-2xl">📈</div>
                  <div>
                    <h4 className="font-bold">Large Debts (Above ₹25 Lakh)</h4>
                    <p className="text-sm text-gray-500">Lenders will be very aggressive. They will likely file suits in DRT or initiate SARFAESI. Professional legal representation is mandatory here.</p>
                  </div>
                </li>
              </ul>
            </section>

            <section id="unsecured-thresholds" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Unsecured Debt Minimums: Where Settlements Often Start
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Unsecured debt is the primary candidate for settlement. Because there is no collateral (like a house or car) for the bank to take, they are at the mercy of the borrower's ability to pay. For unsecured personal loans and credit cards, the practical minimum for a bank to even open a settlement file is usually around ₹25,000 to ₹35,000 of the principal amount.
              </p>
            </section>

            <section id="credit-card-realities" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Credit Card Realities: Small Amounts, Big Headaches
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Credit cards are unique because the balance grows exponentially due to compounding interest (often 40-45% per year). A ₹10,000 debt can become ₹30,000 in two years. Banks are very open to settling credit card debt because they have already made significant profits from you through interest and fees. Most credit card departments of major banks (HDFC, ICICI, SBI Card) will entertain settlement offers for outstanding balances as low as ₹50,000.
              </p>
            </section>

            <section id="personal-loan-breakdown" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Personal Loan Breakdown: The "Default" Timeline
                  </h2>
              <p className="text-lg leading-relaxed mb-6">
                Personal loans are usually more structured. Banks typically wait through 3 to 6 months of defaults before they categorise the loan into their 'Settlement Bucket'. If your personal loan principal is at least ₹2 lakh, you have strong ground to negotiate for a settlement that could save you 50% or more.
              </p>
            </section>

            <section id="cost-of-recovery" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Cost of Recovery Equation: The Bank's Math
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Every bank has a 'Recovery Officer' whose job is to minimize losses. They use simple math:
              </p>
              <div className="bg-blue-900 text-white p-8 rounded-2xl mb-8">
                <p className="text-2xl font-mono text-center">
                   (Expected Recovery) - (Legal Costs + Time Value of Money) = Net Recovery
                </p>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                If you owe ₹1,00,000 and the legal process costs ₹40,000 and takes 3 years, the bank is much better off taking a lumpsum of ₹50,000 today. This is why even smaller amounts can be settled if you can prove that you have zero assets and limited income.
              </p>
            </section>

            <section id="legal-action-triggers" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Legal Action Triggers: When the Amount Becomes Dangerous
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                While small amounts can be settled, exceeding certain limits triggers automatic legal responses.
              </p>
              <ul className="list-disc pl-6 space-y-4 mb-8 text-lg">
                <li><strong>Section 138 (Cheque Bounce):</strong> Triggered regardless of amount if a cheque is used.</li>
                <li><strong>Section 25 (Payment and Settlement Systems Act):</strong> Similar to cheque bounce but for NACH/Auto-debit failures.</li>
                <li><strong>Civil Suit:</strong> Usually triggered for amounts above ₹5 lakh.</li>
                <li><strong>SARFAESI:</strong> Strictly for amounts above ₹20 lakh (for NBFCs).</li>
              </ul>
            </section>

            <section id="micro-debt-resolution" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Micro-Debt Resolution: Loans Below 35,000
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                In 2019, discussions regarding 'Fresh Start' programs under the IBC suggested that individuals with annual income below ₹60k and debt below ₹35k could have their debts discharged. While the implementation of this remains limited, it shows that the government acknowledges 'Micro-Debt' as a different category that requires relief rather than aggressive recovery.
              </p>
            </section>

            <section id="consolidating-to-qualify" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Consolidating to Qualify: Building a Stronger Case
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If you have five credit cards each with a ₹30,000 limit, you might feel like each one is "too small" for a settlement program. However, your *total* debt is ₹1,50,000. Professional services like <strong>SettleLoans</strong> look at your aggregate profile. By grouping your debts, you create a portfolio that is large enough to manage professionally, giving you the leverage of a multi-creditor negotiation strategy.
              </p>
            </section>

            <section id="strategic-default-risks" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                  Strategic Default Risks: Don't Do It for Small Amounts
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                We strongly advise against defaulting on small debts (below ₹50,000) just to get a settlement. The damage to your CIBIL score is the same whether you settle ₹5,000 or ₹50,00,000. For small amounts, it is almost always better to find a way to pay in full, perhaps through a family loan or selling a small asset, to protect your future creditworthiness.
              </p>
            </section>

            <section id="long-term-implications" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Long-Term Implications: Beyond the Settlement
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Once you settle, the amount you save is secondary to the peace you regain. However, remember that any amount settled will be reported to the credit bureaus. Whether you settled a ₹10 lakh debt for ₹3 lakh or a ₹50,000 debt for ₹20,000, your credit report will say "Settled." This is why settlement is a strategy for those in genuine financial distress, not a shortcut for those who can afford to pay.
              </p>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center uppercase tracking-wider">Real Stories of Freedom</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose">
                {[
                  {
                    name: "Vikram S.",
                    loc: "Ahmedabad",
                    type: "Personal Loan",
                    outcome: "Settled for 55% less",
                    story: "I had four personal loans and the interest was more than my salary. I thought it was the end for me. SettleLoans treated me with so much kindness. They didn't just fix my finances; they gave me back my sleep."
                  },
                  {
                    name: "Priya M.",
                    loc: "Chennai",
                    type: "Credit Card Debt",
                    outcome: "Full Negotiation Success",
                    story: "The recovery agents were calling my office. I was terrified. The team at SettleLoans stepped in and stopped the calls the very same day. They are like family to me now."
                  },
                  {
                    name: "Raj राजेश K.",
                    loc: "Delhi",
                    type: "Multiple NBFC Loans",
                    outcome: "Debt Free in 12 Months",
                    story: "I was in a deep depression. Finding SettleLoans was a miracle. They consolidated everything and handled the banks professionally. I am finally debt free."
                  },
                  {
                    name: "Sunita D.",
                    loc: "Pune",
                    type: "Emergency Medical Debt",
                    outcome: "Reduced to 40%",
                    story: "I had to take loans for my husband's treatment. We couldn't pay back. SettleLoans understood our pain. They negotiated a deal that we could actually afford. Thank you."
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
                      <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                    </div>
                    <div className="mb-4 text-xs font-mono bg-green-50 p-2 rounded border border-green-100 uppercase tracking-tighter">
                      <span className="block text-green-700 font-bold">{review.outcome}</span>
                    </div>
                    <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 uppercase tracking-wider">Frequently Asked Questions</h2>
              <div className="space-y-4 not-prose">
                {faqs.map((faq, i) => (
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

            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
              <p>© 2024 SettleLoans. Ensuring clarity for debt thresholds in India.</p>
              <div className="flex gap-4">
                <Link href="/privacy-policy" className="hover:text-blue-500 hover:underline transition-colors">Privacy Policy</Link>
                <Link href="/terms-and-conditions" className="hover:text-blue-500 hover:underline transition-colors">Terms of Service</Link>
              </div>
            </div>
          </article>

          {/* Right Column: Sticky Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8">
              {/* CTA Container */}
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                <div className="bg-[#1F5EFF] p-4 text-center">
                  <h3 className="text-lg font-black text-white">Eligibility Check</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                    Not sure if your debt qualifies? Get a free professional evaluation today.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                    Check Now
                  </Link>
                </div>
              </div>

              {/* Related Pages Container */}
              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 text-[10px]">Resource Hub</h3>
                <ul className="space-y-4 text-sm font-bold">
                  <li><Link href="/is-loan-settlement-a-good-option-for-borrowers" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors"><span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF]"></span>Is Settlement Good?</Link></li>
                  <li><Link href="/what-percentage-do-banks-accept-in-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors"><span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF]"></span>Settlement % Calculator</Link></li>
                  <li><Link href="/legal-action-for-credit-card-default" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors"><span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF]"></span>Legal Consequences</Link></li>
                  <li><Link href="/debt-settlement-company-in-india" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors"><span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF]"></span>Top Agencies</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
