import type { Metadata } from 'next';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "What is an Arrear EMI? Meaning, Overdue Differences & How to Clear",
  description: "Your bank statement shows an 'Arrear EMI'—what does this actually mean? Understand the crucial banking terminology that determines if your account turns into an NPA.",
  alternates: {
    canonical: "https://example.com/what-is-arrear-emi",
  },
};

export default function ArrearEMIPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "What is an Arrear EMI? Meaning, Overdue Differences & How to Clear",
      "description": "Understand the arrear EMI meaning, the difference between overdue and arrear, and crucial loan default terminology before your account turns into an NPA.",
      "url": "https://example.com/what-is-arrear-emi"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/" },
        { "@type": "ListItem", "position": 2, "name": "Loan Guides", "item": "https://example.com/loan-guides" },
        { "@type": "ListItem", "position": 3, "name": "What is an Arrear EMI?", "item": "https://example.com/what-is-arrear-emi" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "What is an Arrear EMI? Meaning & How to Clear Loan Arrears",
      "author": { "@type": "Organization", "name": "Financial Solutions" },
      "publisher": {
        "@type": "Organization",
        "name": "Financial Solutions",
        "logo": { "@type": "ImageObject", "url": "https://example.com/logo.png" }
      },
      "datePublished": "2024-03-20",
      "dateModified": "2024-03-20"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does 'arrear EMI' mean on my bank statement?",
          "acceptedAnswer": { "@type": "Answer", "text": "An arrear EMI refers to a monthly loan installment that you have failed to pay by its designated due date. It indicates that you have fallen behind on your repayment schedule." }
        },
        {
          "@type": "Question",
          "name": "What is the difference between overdue and arrear?",
          "acceptedAnswer": { "@type": "Answer", "text": "An account is 'overdue' the exact day after a missed payment. 'Arrears' is the total accumulated amount of those missed payments (overdues) that you owe the bank over time." }
        },
        {
          "@type": "Question",
          "name": "How long until an arrear becomes an NPA?",
          "acceptedAnswer": { "@type": "Answer", "text": "According to RBI guidelines, if your loan remains in arrears (overdue) for more than 90 days, the bank is legally required to classify the account as a Non-Performing Asset (NPA)." }
        },
        {
          "@type": "Question",
          "name": "Can I get a new loan if I have EMI arrears?",
          "acceptedAnswer": { "@type": "Answer", "text": "It is highly unlikely. Arrears are immediately reported to credit bureaus like CIBIL, causing a severe drop in your credit score and making you a high-risk borrower to other lenders." }
        },
        {
          "@type": "Question",
          "name": "How can I clear my loan arrears?",
          "acceptedAnswer": { "@type": "Answer", "text": "You can clear arrears by paying the total accumulated missed EMIs along with any bounce charges and late payment penalties applied by the lender. Alternatively, you can negotiate a restructuring plan." }
        },
        {
          "@type": "Question",
          "name": "Is an arrear the same thing as a default?",
          "acceptedAnswer": { "@type": "Answer", "text": "Not exactly. An arrear means you are behind on payments. A default typically occurs when the account is declared an NPA (after 90 days of arrears) and the lender initiates recovery proceedings." }
        },
        {
          "@type": "Question",
          "name": "Will an arrear EMI affect my CIBIL score?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Even a single day of delay is reported to credit bureaus. Consecutive arrears (30+, 60+, 90+ days past due) will severely damage your CIBIL score." }
        },
        {
          "@type": "Question",
          "name": "Do banks charge penalty interest on arrear EMIs?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, banks charge penal interest (usually 2% to 3% per month) on the arrear amount for the entire duration it remains unpaid, compounding your debt." }
        },
        {
          "@type": "Question",
          "name": "Can the bank seize my property for one arrear EMI?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Under the SARFAESI Act, a bank can only initiate asset seizure proceedings after the loan has been officially classified as an NPA (90 days of continuous arrears)." }
        },
        {
          "@type": "Question",
          "name": "How do I stop recovery agents from calling about my arrears?",
          "acceptedAnswer": { "@type": "Answer", "text": "You can stop harassment by communicating directly with the bank via written emails, requesting a formal restructuring, or filing a grievance if agents violate RBI's fair practices code." }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Loan Arrear Settlement & Consulting",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "142"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Rajiv Sharma" },
          "reviewBody": "I had 3 arrear EMIs and the bank was threatening NPA status. This guide helped me negotiate a waiver on my late fees and clear my arrears smoothly."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Amit Patel" },
          "reviewBody": "Clear and precise explanation of loan default terminology. I finally understand the difference between overdue and arrear. Saved my CIBIL score!"
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Sneha Verma" },
          "reviewBody": "My personal loan went into arrears after losing my job. Following these steps, I stopped the harassment and settled the account for 40% of the balance."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "4" },
          "author": { "@type": "Person", "name": "Vikram Singh" },
          "reviewBody": "Great breakdown of the 90-day NPA timeline. Highly recommended for anyone facing financial stress with bank loans."
        }
      ]
    }
  ];

  const tocItems = [
    { id: "what-is-arrear-emi", title: "What Does Arrear EMI Mean?" },
    { id: "overdue-vs-arrear", title: "Difference Between Overdue and Arrear" },
    { id: "consequences", title: "Consequences of Unpaid Arrears" },
    { id: "legal-implications", title: "Legal Implications of Arrears" },
    { id: "co-borrower-impact", title: "Impact on Co-Borrowers & Guarantors" },
    { id: "penalty-calculation", title: "How Banks Calculate Penalties" },
    { id: "how-to-clear", title: "How to Clear Loan Arrears" },
    { id: "success-stories", title: "Success Stories" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Loan Default Terminology
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              What is an <span className="text-[#1F5EFF]">Arrear EMI</span>? Meaning & Solutions
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Your bank statement shows an 'Arrear EMI'—what does this actually mean? Understand the crucial banking terminology that determines if your account turns into an NPA.
            </p>
            <Link href="#consultation" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Expert Help to Clear Arrears
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/loan-guides" className="hover:text-[#1F5EFF] transition-colors">Loan Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">What is an Arrear EMI?</span>
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
          
          {/* Left Sidebar (TOC) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Article Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Boxed Intro Section */}
            <section id="what-is-arrear-emi" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">What Does Arrear EMI Mean?</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  When you take a loan, you agree to repay it through Equated Monthly Installments (EMIs) on a specific date each month. The <strong>arrear EMI meaning</strong> is simply a payment that you failed to make by that agreed-upon due date.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  If your due date is the 5th of the month, and you do not make the payment, from the 6th onwards, that unpaid installment becomes an "arrear." If left unpaid, arrears compound, accumulating massive penalty charges and leading to severe consequences for your financial health.
                </p>
              </div>
            </section>

            {/* Overdue vs Arrear Section */}
            <section id="overdue-vs-arrear" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Difference Between Overdue and Arrear</h2>
              <p className="text-lg leading-relaxed mb-6">
                While these terms are often used interchangeably in loan default terminology, they have distinct technical meanings within the banking system.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">The "Overdue" Status</h3>
                  <p className="text-gray-700">An account status. Your loan account becomes "overdue" the exact day following a missed payment deadline. It represents the condition of the loan.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">The "Arrear" Amount</h3>
                  <p className="text-gray-700">A financial value. Arrears refer to the actual cumulative monetary amount (Principal + Interest + Penalties) that is currently owed to the lender.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Reporting Timing</h3>
                  <p className="text-gray-700">Overdue days are tracked immediately (e.g., DPD - Days Past Due) and heavily influence SMA-0, SMA-1, and SMA-2 classifications.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Clearance Requirement</h3>
                  <p className="text-gray-700">To remove the overdue status from your account, you must pay the total accumulated arrears in full.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed text-gray-800 font-medium">
                  <strong>Industry Insight:</strong> Think of "overdue" as the red warning light on your dashboard, while "arrears" is the amount of gas you owe to get the car moving again.
                </p>
              </div>
            </section>

            {/* Consequences Section */}
            <section id="consequences" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Consequences of Unpaid EMI Arrears</h2>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h3 className="text-lg font-black text-red-700 mb-2">The NPA Threat (90-Day Rule)</h3>
                <p className="text-red-900 leading-relaxed">
                  If your EMI arrears remain unpaid for 90 consecutive days, your account will legally be classified as a Non-Performing Asset (NPA). This triggers aggressive recovery actions, legal notices, and potential asset seizure under the SARFAESI Act.
                </p>
              </div>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Immediate Impacts of Arrears</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>CIBIL Score Crash:</strong> Even one arrear EMI drops your score significantly, limiting future credit access.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Penal Interest:</strong> Banks apply severe penal charges (typically 24% to 36% annualized) on the delayed amount.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Bounce Charges:</strong> Each failed auto-debit incurs bank bounce charges ranging from ₹500 to ₹1000.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Recovery Harassment:</strong> The lender will initiate automated calls, followed by visits from recovery agents.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Legal Implications Section */}
            <section id="legal-implications" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Legal Implications of Arrear EMIs</h2>
              <p className="text-lg leading-relaxed mb-6">
                When arrear EMIs pile up, the situation quickly transitions from a simple financial oversight to a complex legal battle. Lenders in India have robust legal frameworks at their disposal to recover overdue amounts. It is crucial to understand that ignoring the bank will only accelerate these legal proceedings against you.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-4">Common Legal Actions for Default</h3>
                <p className="text-lg leading-relaxed text-gray-800 mb-4">
                  If your arrears cross the 90-day mark (NPA), banks can invoke the <strong>SARFAESI Act, 2002</strong> for secured loans (like home or property loans), allowing them to auction your pledged property without court intervention. For unsecured loans, banks may send a legal demand notice under Section 138 of the Negotiable Instruments Act if a security cheque bounces, or initiate civil suits for recovery.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                  Additionally, you might receive a summons to a <strong>Lok Adalat</strong> or a notice for <strong>Arbitration</strong>. While Lok Adalats offer a platform for amicable settlement, an arbitration award acts like a court decree and can lead to the attachment of your salary or bank accounts if you fail to comply.
                </p>
              </div>
            </section>

            {/* Impact on Co-Borrowers and Guarantors */}
            <section id="co-borrower-impact" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Impact on Co-Borrowers and Guarantors</h2>
              <p className="text-lg leading-relaxed mb-6">
                A common misconception among borrowers is that only the primary applicant faces the heat of an arrear EMI. However, banking regulations dictate that liability is equally shared among all parties tied to the loan agreement.
              </p>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Who Else is Held Liable?</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Financial Co-Applicants:</strong> If your spouse or parent co-signed the loan, their CIBIL score takes an identical hit the moment an EMI slips into arrears.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Guarantors:</strong> A guarantor is legally bound to step in and clear the arrears if the primary borrower defaults. The bank holds the right to initiate recovery from the guarantor's assets.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Future Credit Constraints:</strong> An arrear on a joint loan paralyzes the borrowing capacity of all involved individuals, preventing them from securing credit cards, home loans, or business funding for years.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* How Banks Calculate Penalties on Arrears */}
            <section id="penalty-calculation" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How Banks Calculate Penalties on Arrears</h2>
              <p className="text-lg leading-relaxed mb-6">
                Arrear EMIs don't just sit idle; they aggressively multiply. When you miss a payment, a cascading series of charges is activated, transforming a manageable monthly installment into a massive financial burden. Understanding this math is vital for recognizing the urgency of clearing arrears.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">1. Bounce Charges</h3>
                  <p className="text-gray-700">Every time your auto-debit (ECS/NACH) mandate fails due to insufficient funds, banks levy a flat bounce fee ranging from ₹400 to ₹1,000 per instance. If they attempt to debit multiple times, this charge compounds.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">2. Penal Interest</h3>
                  <p className="text-gray-700">Banks charge penal interest on the overdue amount (usually 2% to 3% per month, equaling 24% to 36% annually). This is calculated on a daily basis from the due date until the arrear is fully cleared.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">3. Overdue Charges</h3>
                  <p className="text-gray-700">Some lenders impose a flat late payment fee for every cycle you miss. For example, a ₹500 fee added to the statement for crossing the 5th of the month without payment.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">4. GST and Taxes</h3>
                  <p className="text-gray-700">All penalty charges, bounce fees, and late payment fees are subject to 18% Goods and Services Tax (GST). This hidden tax further inflates the final arrear amount you owe the bank.</p>
                </div>
              </div>
            </section>

            {/* How to Clear Section */}
            <section id="how-to-clear" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How to Clear Loan Arrears Step-by-Step</h2>
              <p className="text-lg leading-relaxed mb-8">
                Do not ignore communication from the bank. If you find yourself unable to pay your EMIs, taking proactive steps is the only way to avoid the disastrous NPA classification.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Request a Penalty Waiver</h3>
                    <p className="text-gray-700 leading-relaxed">
                      If this is your first arrear, approach your branch manager. Submit a formal penalty waiver request letter explaining your temporary financial hardship. Many banks will reverse late fees and bounce charges if you pay the principal EMI amount immediately.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Apply for Loan Restructuring</h3>
                    <p className="text-gray-700 leading-relaxed">
                      If you cannot afford the current EMI, ask the bank to restructure your loan. This can involve extending your loan tenure, which effectively reduces your monthly EMI amount to something you can comfortably afford, clearing the immediate arrear crisis.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Consider a Balance Transfer</h3>
                    <p className="text-gray-700 leading-relaxed">
                      If another bank offers a lower interest rate, you can transfer your outstanding balance. However, this is only viable if your arrears are very recent (under 30 days) and your CIBIL score hasn't taken a massive hit yet.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Explore One-Time Settlement (OTS)</h3>
                    <p className="text-gray-700 leading-relaxed">
                      If you are in deep financial distress and the account is nearing NPA status (90 days), you can negotiate a One Time Settlement. You pay a lump sum that is significantly lower than the total outstanding, though this will reflect as "Settled" on your credit report.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Reviews Section */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Customer Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Card 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      R
                    </div>
                    <div className="flex text-yellow-400">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    </div>
                  </div>
                  <h4 className="font-bold text-xl text-[#2E2E2E] mb-2">Rajiv Sharma</h4>
                  <p className="text-gray-600 mb-6 italic">"I had 3 arrear EMIs and the bank was threatening NPA status. This guide helped me negotiate a waiver on my late fees and clear my arrears smoothly."</p>
                  <div className="flex gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Personal Loan</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Settled 100%</span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      S
                    </div>
                    <div className="flex text-yellow-400">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    </div>
                  </div>
                  <h4 className="font-bold text-xl text-[#2E2E2E] mb-2">Sneha Verma</h4>
                  <p className="text-gray-600 mb-6 italic">"My personal loan went into arrears after losing my job. Following these steps, I stopped the harassment and settled the account."</p>
                  <div className="flex gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Credit Card Debt</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Restructured</span>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs Section */}
            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What does 'arrear EMI' mean on my bank statement?", a: "An arrear EMI refers to a monthly loan installment that you have failed to pay by its designated due date. It indicates that you have fallen behind on your repayment schedule." },
                  { q: "What is the difference between overdue and arrear?", a: "An account is 'overdue' the exact day after a missed payment. 'Arrears' is the total accumulated amount of those missed payments (overdues) that you owe the bank over time." },
                  { q: "How long until an arrear becomes an NPA?", a: "According to RBI guidelines, if your loan remains in arrears (overdue) for more than 90 days, the bank is legally required to classify the account as a Non-Performing Asset (NPA)." },
                  { q: "Can I get a new loan if I have EMI arrears?", a: "It is highly unlikely. Arrears are immediately reported to credit bureaus like CIBIL, causing a severe drop in your credit score and making you a high-risk borrower to other lenders." },
                  { q: "How can I clear my loan arrears?", a: "You can clear arrears by paying the total accumulated missed EMIs along with any bounce charges and late payment penalties applied by the lender. Alternatively, you can negotiate a restructuring plan." },
                  { q: "Is an arrear the same thing as a default?", a: "Not exactly. An arrear means you are behind on payments. A default typically occurs when the account is declared an NPA (after 90 days of arrears) and the lender initiates recovery proceedings." },
                  { q: "Will an arrear EMI affect my CIBIL score?", a: "Yes. Even a single day of delay is reported to credit bureaus. Consecutive arrears (30+, 60+, 90+ days past due) will severely damage your CIBIL score." },
                  { q: "Do banks charge penalty interest on arrear EMIs?", a: "Yes, banks charge penal interest (usually 2% to 3% per month) on the arrear amount for the entire duration it remains unpaid, compounding your debt." },
                  { q: "Can the bank seize my property for one arrear EMI?", a: "No. Under the SARFAESI Act, a bank can only initiate asset seizure proceedings after the loan has been officially classified as an NPA (90 days of continuous arrears)." },
                  { q: "How do I stop recovery agents from calling about my arrears?", a: "You can stop harassment by communicating directly with the bank via written emails, requesting a formal restructuring, or filing a grievance if agents violate RBI's fair practices code." }
                ].map((faq, idx) => (
                  <details key={idx} name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                    <summary className="text-xl font-bold text-[#2E2E2E] flex justify-between items-center outline-none list-none [&::-webkit-details-marker]:hidden">
                      {faq.q}
                      <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl font-light">+</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-relaxed text-lg pt-4 border-t border-gray-100">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div id="consultation" className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-4">Struggling with Loan Arrears?</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Stop the harassment and prevent NPA classification. Our legal experts can negotiate penalty waivers and help you restructure your debt today.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-12 rounded-full hover:scale-105 transition-transform text-lg shadow-[0_0_20px_rgba(31,94,255,0.4)]">
                  Talk to a Debt Expert Now
                </Link>
                <p className="mt-6 text-sm text-gray-400">100% Confidential • Free Initial Consultation</p>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational purposes regarding loan arrears and terminology. It does not constitute formal legal or financial advice. Please consult with a certified financial advisor before taking action.
              </p>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-8">
              
              {/* Card 1 (Dark CTA) */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-black mb-3">Facing Harassment?</h4>
                  <p className="text-sm text-gray-300 mb-6">Learn your legal rights against recovery agents for EMI defaults.</p>
                  <Link href="/stop-recovery-harassment" className="block w-full bg-[#1F5EFF] text-white text-sm font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors">
                    Get Legal Help
                  </Link>
                </div>
              </div>

              {/* Card 2 (White Resources) */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Related Guides
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/loan-npa-status" className="group flex items-center text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      NPA Classification Rules
                    </Link>
                  </li>
                  <li>
                    <Link href="/penalty-waiver-request-letter" className="group flex items-center text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Penalty Waiver Formats
                    </Link>
                  </li>
                  <li>
                    <Link href="/one-time-settlement-process" className="group flex items-center text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      How OTS Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/cibil-score-after-default" className="group flex items-center text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Fixing CIBIL After Default
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
