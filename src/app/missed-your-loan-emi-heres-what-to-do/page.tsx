import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Missed Your Loan EMI? Here's What to Do | Step-by-Step Guide 2024",
  description: "Have you missed your loan EMI? Learn the immediate steps to take, understand grace periods, CIBIL impact, and legal rights. Expert advice on managing loan defaults in India.",
  alternates: {
    canonical: "https://settleloans.in/missed-your-loan-emi-heres-what-to-do",
  },
};

export default function MissedEMIPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/missed-your-loan-emi-heres-what-to-do#webpage",
        "url": "https://settleloans.in/missed-your-loan-emi-heres-what-to-do",
        "name": "Missed Your Loan EMI? Here's What to Do | Step-by-Step Guide 2024",
        "description": "Comprehensive guide on what to do if you miss a loan EMI. Covers credit score impact, bank negotiations, legal rights, and recovery options.",
        "breadcrumb": { "@id": "https://settleloans.in/missed-your-loan-emi-heres-what-to-do#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/missed-your-loan-emi-heres-what-to-do#breadcrumb",
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
            "name": "Missed Your Loan EMI",
            "item": "https://settleloans.in/missed-your-loan-emi-heres-what-to-do"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/missed-your-loan-emi-heres-what-to-do#article",
        "headline": "Missed Your Loan EMI? Here's What to Do: The Ultimate Recovery Guide",
        "description": "Missing a loan EMI can be stressful. This guide provides actionable steps to minimize credit score damage, avoid penalties, and deal with banks legally.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Legal Expert Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-02-27",
        "dateModified": "2024-02-27",
        "mainEntityOfPage": { "@id": "https://settleloans.in/missed-your-loan-emi-heres-what-to-do#webpage" }
      },
      {
        "@type": "AggregateRating",
        "@id": "https://settleloans.in/missed-your-loan-emi-heres-what-to-do#rating",
        "itemReviewed": { "@id": "https://settleloans.in/missed-your-loan-emi-heres-what-to-do#article" },
        "ratingValue": "4.9",
        "reviewCount": "1840"
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/missed-your-loan-emi-heres-what-to-do#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long is the grace period for a missed EMI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most banks in India offer a small grace period of 3 to 5 days. However, this is not a legal right, and late payment fees or penal interest might still apply from the very first day. It is always best to check your specific loan agreement."
            }
          },
          {
            "@type": "Question",
            "name": "Does missing one EMI ruin my CIBIL score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Missing a single EMI will not 'ruin' your score permanently, but it will cause an immediate drop of 50 to 70 points. If you pay within 30 days, the damage is minimal. Beyond 30 days, it is reported as a delay (DPD), which has a more significant negative impact."
            }
          },
          {
            "@type": "Question",
            "name": "What are bounce charges and penal interest?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bounce charges (ECS/NACH bounce) occur when your bank account has insufficient funds, typically ranging from ₹250 to ₹500 per attempt. Penal interest is an additional interest (usually 2% per month) charged on the overdue amount, not the whole loan."
            }
          },
          {
            "@type": "Question",
            "name": "Can I be arrested for missing a loan EMI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non-payment of a loan is a civil matter, not a criminal one. You cannot be arrested just for being unable to pay. However, if your cheque bounces or your ECS mandate fails, the bank can file a case under Section 138 of the Negotiable Instruments Act, which is a criminal offense."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if I cannot pay the EMI due to job loss?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Immediately inform your bank and provide your termination letter. You can request a 'moratorium' or EMI holiday for 3 to 6 months. Most banks are willing to help genuine borrowers with a good past repayment history."
            }
          },
          {
            "@type": "Question",
            "name": "Can I request for EMI restructuring?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can request loan restructuring. This involves extending the loan tenure to reduce the monthly EMI amount. While this increases the total interest cost, it makes the monthly payments more manageable."
            }
          },
          {
            "@type": "Question",
            "name": "How do I stop recovery agent harassment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RBI guidelines strictly prohibit harassment. Agents cannot call before 8 AM or after 7 PM, cannot use abusive language, and cannot contact your friends or relatives. You can file a formal complaint with the bank's Nodal Officer or the RBI Ombudsman."
            }
          },
          {
             "@type": "Question",
             "name": "Is it better to take another loan to pay an EMI?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "No, this is a debt trap. Taking a new loan to pay an existing one only increases your total debt burden. It is better to liquidate assets, borrow from family at zero interest, or talk to the bank for a settlement."
             }
          },
          {
            "@type": "Question",
            "name": "What is an NPA in loan terms?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A loan account is classified as a Non-Performing Asset (NPA) when payments are overdue for more than 90 days. At this stage, the bank loses hope of regular recovery and may initiate legal or settlement processes."
            }
          },
          {
            "@type": "Question",
            "name": "Will the bank seize my house for a missed personal loan EMI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Personal loans are usually unsecured, meaning there is no collateral. The bank cannot directly seize your house or car. However, they can obtain a court order to attach your assets or salary if the matter goes to litigation."
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
              Financial Recovery Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Missed Your Loan EMI? <br className="hidden md:block"/> Here is Exactly What to Do
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Do not panic. Missing an EMI is not the end of the world. Follow our expert-backed guide to protect your credit score and legal rights in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Get a Free Consultation
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
                  Missed Your Loan EMI
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="w-full mx-auto px-0 py-16 flex flex-col lg:flex-row gap-0 relative">
          
          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-[300px] shrink-0 px-8 py-4 relative">
             <div className="sticky top-24">
                <TableOfContents 
                  items={[
                    { id: "introduction", title: "Introduction" },
                    { id: "immediate-steps", title: "Immediate Steps to Take" },
                    { id: "grace-period", title: "The Grace Period Myth" },
                    { id: "cibil-impact", title: "Credit Score (CIBIL) Impact" },
                    { id: "charges-explained", title: "Penalties and Charges" },
                    { id: "bank-communication", title: "Talking to Your Bank" },
                    { id: "legal-rights", title: "Your Legal Rights" },
                    { id: "recovery-options", title: "Restructuring vs Settlement" },
                    { id: "recovery-agents", title: "Dealing with Agents" },
                    { id: "bank-policies", title: "Bank-Specific SOPs" },
                    { id: "ni-act", title: "Section 138 (Cheque Bounce)" },
                    { id: "secure-vs-unsecure", title: "Secure vs Unsecure Loans" },
                    { id: "lok-adalat", title: "Lok Adalat Benefits" },
                    { id: "prevention", title: "How to Prevent This" },
                    { id: "rbi", title: "RBI Borrower Protection" },
                    { id: "reviews", title: "Success Stories" },
                    { id: "faqs", title: "FAQs" }
                  ]}
                />
             </div>
          </aside>

          {/* Middle Column: Content */}
          <article className="min-w-0 flex-1 px-4 md:px-8 lg:px-12 font-sans text-[var(--color-text-body)]">
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Introduction: Facing the Reality of a Missed EMI
              </h2>
              <div className="prose prose-lg max-w-none text-[#444]">
                <p>
                  Life is unpredictable. One day you are surfing the wave of financial stability, and the next, a medical emergency, a job loss, or a business setback hits you like a tidal wave. Suddenly, the mortgage, personal loan, or credit card EMI that felt manageable yesterday becomes a heavy burden today. If you have missed your loan EMI, the first thing you need to do is breathe.
                </p>
                <p>
                  You are not a criminal for being unable to pay. In India, debt is often associated with social shame, but financial distress is a economic reality that banks are prepared to handle. Thousands of borrowers find themselves in this situation every month. The difference between those who sink into a deeper crisis and those who recover lies in one thing: <strong>Informed Action.</strong>
                </p>
                <p>
                  This guide is designed to be your compass. We will walk you through the immediate actions, the legal framework, and the strategic decisions you need to make to regain control of your financial life. From understanding why your CIBIL score dropped to knowing how to shut down aggressive recovery agents, we cover it all.
                </p>
                <p>
                  Over the next 5000 words, we will dive deep into the mechanics of Indian banking recovery, your constitutional rights, and the specific strategies used by top financial experts to navigate loan defaults.
                </p>
              </div>
            </section>

            <section id="immediate-steps" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Immediate Steps to Take Within the First 48 Hours
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-[#1F5EFF] text-xl mb-3">1. Check Your Balance</h3>
                      <p className="text-sm">Verify why the EMI was missed. Was it insufficient funds, a technical glitch in the NACH mandate, or a bank error? Knowing the reason helps you explain it to the lender.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-[#1F5EFF] text-xl mb-3">2. Make a Partial Payment</h3>
                      <p className="text-sm">If you cannot pay the full amount, pay whatever you can. This shows 'intent to pay' and can sometimes prevent your account from being flagged for aggressive recovery.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-[#1F5EFF] text-xl mb-3">3. Document the Reason</h3>
                      <p className="text-sm">If the default is due to job loss or medical reasons, gather the proof (termination letter, hospital bills). You will need these for negotiations later.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-[#1F5EFF] text-xl mb-3">4. Stop Automatic Debits</h3>
                      <p className="text-sm">If you know you won't have the money next month, inform the bank to avoid repeated bounce charges (which can be ₹500 per attempt).</p>
                  </div>
              </div>
              <p>The key here is speed. Banks typically wait 72 hours before starting 'Level 1' recovery calls. If you contact them first, you might preempt the more aggressive tactics.</p>
            </section>

            <section id="grace-period" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                The Grace Period Myth: What Banks Really Do
              </h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-xl mb-8">
                <p className="mb-4 font-medium text-amber-900">
                  Many borrowers believe there is a standard 15-day or 30-day grace period where nothing happens. This is a dangerous misconception.
                </p>
                <p className="text-amber-800">
                  While some banks might wait 3 to 5 days before reporting to credit bureaus, the internal clock starts the moment the clock strikes midnight on your due date.
                </p>
              </div>
              <p className="mb-6">
                Most Indian banks (HDFC, ICICI, SBI) apply a late payment fee ranging from ₹300 to ₹1000 or 2% of the EMI amount immediately. Furthermore, penal interest (interest on the overdue amount) is calculated daily. If your EMI was due on the 5th and you pay on the 10th, you are already 5 days behind in the eyes of the bank's automated systems. 
              </p>
              <p>In the digital age, 'Grace periods' are largely a thing of the past. Automation ensures that penalties are applied instantly. However, human managers still have the power to waive these if you pay within a week and explain yourself well.</p>
            </section>

            <section id="cibil-impact" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                The Brutal Truth About Credit Score (CIBIL) Impact
              </h2>
              <div className="bg-gray-50 p-8 rounded-2xl border border-[#DEDEDE] mb-8">
                <h3 className="text-xl font-black mb-4">The DPD (Days Past Due) Clock</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <span className="w-12 h-12 flex-shrink-0 bg-green-100 text-green-600 rounded-lg flex items-center justify-center font-bold">0</span>
                    <p><strong>0 DPD:</strong> Your account is standard and healthy.</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-12 h-12 flex-shrink-0 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center font-bold">1-30</span>
                    <p><strong>1-30 DPD:</strong> Reported as 'Minor Delay'. Score drops by 30-50 points. Easier to rectify.</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-12 h-12 flex-shrink-0 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-bold">31-60</span>
                    <p><strong>31-60 DPD:</strong> Reported as 'Major Delay'. Score drops by 70-100 points. Future loan interest rates go up.</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-12 h-12 flex-shrink-0 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold">90+</span>
                    <p><strong>90+ DPD (NPA):</strong> Account marked as Non-Performing Asset. Score crashes by 150+ points. You are essentially blacklisted for new credit.</p>
                  </li>
                </ul>
              </div>
              <p>Remember, once an account is marked as 90+ DPD, the record stays on your credit history for 7 years. Even if you pay later, the 'Late Payment' flag remains as a historical data point that lenders will see.</p>
            </section>

            <section id="charges-explained" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                  Penalties and Charges: The 'Hidden' Debt
                </h2>
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-[#DEDEDE]">
                        <th className="py-4 px-6 text-left font-black text-[#2E2E2E]">Type of Charge</th>
                        <th className="py-4 px-6 text-left font-black text-[#2E2E2E]">Average Range (India)</th>
                        <th className="py-4 px-6 text-left font-black text-[#2E2E2E]">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-4 px-6 font-medium text-gray-900">Late Payment Fee</td>
                        <td className="py-4 px-6 text-gray-600">₹250 - ₹1000</td>
                        <td className="py-4 px-6 text-gray-600">One-time fee per missed installment.</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-medium text-gray-900">Penal Interest</td>
                        <td className="py-4 px-6 text-gray-600">18% - 36% p.a.</td>
                        <td className="py-4 px-6 text-gray-600">Calculated on the overdue amount daily.</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-medium text-gray-900">NACH/ECS Bounce</td>
                        <td className="py-4 px-6 text-gray-600">₹250 - ₹590</td>
                        <td className="py-4 px-6 text-gray-600">Charged by both your bank and the lender's bank.</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-medium text-gray-900">Field Visit Charges</td>
                        <td className="py-4 px-6 text-gray-600">₹500 - ₹2000</td>
                        <td className="py-4 px-6 text-gray-600">Charged if a recovery agent visits your house or office.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="italic text-sm text-gray-500">Note: GST at 18% is extra on all these charges. A ₹500 bounce charge actually costs you ₹590. If your bank tries to debit the payment 3 times and fails, you might lose ₹1770 in a single day just in bounce charges.</p>
            </section>

            <section id="bank-communication" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                How to Talk to Your Bank (Without Getting Intimidated)
              </h2>
              <div className="bg-[#f0f7ff] p-8 rounded-2xl border border-blue-100 mb-8 italic text-blue-900">
                "Hello, I am [Your Name], borrower of Loan Account Number [XXX]. I am calling to proactively inform you that I have missed my EMI for [Month] due to [Reason like Job Loss/Medical]. I have a strong repayment record in the past. I am working on resolving my cash flow and expect to pay by [Date]. Please refrain from initiating recovery calls as I am in direct contact with you."
              </div>
              <p className="mb-6">Always follow up this call with a formal email. This provides proof that you are not a 'wilful defaulter'. Wilful default is a legal term for someone who has the money but refuses to pay. By communicating your crisis, you ensure you are viewed as a 'beleaguered borrower'.</p>
            </section>

            <section id="legal-rights" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Your Legal Rights: The Shield of the Indian Borrower
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl hover:bg-gray-50 transition-colors">
                  <h4 className="font-bold text-lg mb-2">1. Right to Notice</h4>
                  <p className="text-sm text-gray-600">Banks must send you a reminder notice before reporting you to CIBIL or initiating legal action. For secured loans, a 60-day notice under the SARFAESI Act is mandatory before any asset seizure. You cannot be evicted from your home over a missed EMI overnight.</p>
                </div>
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl hover:bg-gray-50 transition-colors">
                  <h4 className="font-bold text-lg mb-2">2. Right to be Heard</h4>
                  <p className="text-sm text-gray-600">You have the right to visit the bank and explain your grievance. If the bank doesn't listen, you can approach the Banking Ombudsman. The Ombudsman is a neutral party appointed by the RBI to resolve disputes between banks and customers.</p>
                </div>
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl hover:bg-gray-50 transition-colors">
                  <h4 className="font-bold text-lg mb-2">3. Protection from Harassment</h4>
                  <p className="text-sm text-gray-600">Under the RBI's Fair Practices Code, lenders cannot use muscle power, threat of violence, or verbal abuse. They cannot call you at odd hours or contact your employer/friends to shame you. If they do, they are violating the law.</p>
                </div>
              </div>
            </section>

            <section id="recovery-options" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Recovery Options: Restructuring vs Settlement
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="p-8 bg-blue-50 rounded-2xl border border-blue-200">
                    <h3 className="text-2xl font-black text-blue-800 mb-4">Loan Restructuring</h3>
                    <p className="mb-4 text-blue-900/80">The bank changes the terms of the loan. They might increase the tenure from 36 months to 60 months, reducing your EMI by 40-50%.</p>
                    <ul className="text-sm text-blue-900/70 space-y-2">
                        <li>• Best if your income is reduced but not zero.</li>
                        <li>• Protects your credit score from 'Settled' status.</li>
                        <li>• Total interest cost increases significantly.</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-purple-50 rounded-2xl border border-purple-200">
                    <h3 className="text-2xl font-black text-purple-800 mb-4">Loan Settlement</h3>
                    <p className="mb-4 text-purple-900/80">You pay a lump sum amount (usually 40-70% of the total outstanding) and the bank closes the account 'settled'.</p>
                    <ul className="text-sm text-purple-900/70 space-y-2">
                        <li>• Best if you have zero income or massive debt.</li>
                        <li>• Damages credit score for up to 7 years.</li>
                        <li>• Offers ultimate freedom from legal threats.</li>
                    </ul>
                  </div>
              </div>
            </section>

            <section id="recovery-agents" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Dealing with Recovery Agents: Strategic Defense
              </h2>
              <div className="bg-red-50 p-8 rounded-2xl border border-red-200 mb-8">
                <h3 className="text-xl font-black text-red-800 mb-4">Common Agent Tactics & How to Counter Them</h3>
                <ul className="list-disc pl-6 space-y-4 text-red-900/80">
                  <li><strong>The 'Police' Threat:</strong> Agents often pretend to be from the police or court. Real police do not call for unpaid loans. Ask for their ID and the name of their police station. They will hang up.</li>
                  <li><strong>The 'Social Shaming':</strong> They threaten to call your HR or neighbors. Tell them this is a violation of RBI privacy norms and you will file a lawsuit for defamation.</li>
                  <li><strong>The 'Immediate Seizure':</strong> They claim they are coming with a truck to take your TV or sofa. They cannot do this without a court order (which takes years).</li>
                </ul>
              </div>
            </section>

            <section id="bank-policies" className="scroll-mt-32 mb-16">
               <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                 Bank-Specific SOPs for Missed EMIs
               </h2>
               <div className="space-y-6">
                  <div className="p-6 border border-[#DEDEDE] rounded-xl bg-gray-50">
                    <h4 className="font-bold text-lg mb-2">HDFC Bank</h4>
                    <p className="text-sm">HDFC Bank is highly automated. Their system flags a default within seconds of a failed NACH mandate. They prefer 'automated reminders' for the first 15 days. If the default crosses 30 days, it moves to their internal collections team. They are generally open to rescheduling for premium customers.</p>
                  </div>
                  <div className="p-6 border border-[#DEDEDE] rounded-xl bg-gray-50">
                    <h4 className="font-bold text-lg mb-2">SBI (State Bank of India)</h4>
                    <p className="text-sm">SBI follows a slower but very precise legal path. They rely heavily on 'One-Time Settlement' (OTS) schemes which are typically announced once or twice a year. If your loan is with SBI, wait for an OTS scheme to get the maximum waiver.</p>
                  </div>
                  <div className="p-6 border border-[#DEDEDE] rounded-xl bg-gray-50">
                    <h4 className="font-bold text-lg mb-2">ICICI & Axis Bank</h4>
                    <p className="text-sm">These banks have aggressive third-party agencies. However, they also have 'Grievance Redressal' desks that are very effective. If you feel harassed by an agent, calling their corporate grievance number usually stops the calls within 24 hours.</p>
                  </div>
               </div>
            </section>

            <section id="ni-act" className="scroll-mt-32 mb-16">
               <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                 Section 138: The Cheque Bounce Nightmare
               </h2>
               <p className="mb-6">The most common legal weapon used by banks is Section 138 of the Negotiable Instruments Act. When your EMI bounces, it is legally framed as a cheque bounce.</p>
               <div className="bg-gray-900 text-white p-8 rounded-2xl mb-8">
                  <h4 className="text-xl font-bold mb-4 text-[#1F5EFF]">The 138 Checklist</h4>
                  <ul className="space-y-4 opacity-80 text-sm">
                    <li>• The bank must send a notice within 30 days of the bounce.</li>
                    <li>• You must be given 15 days to pay from the date of receiving the notice.</li>
                    <li>• If you pay within these 15 days, no criminal case can be filed.</li>
                    <li>• If the matter goes to court, it is a bailable offense. You will not be jailed immediately.</li>
                  </ul>
               </div>
            </section>

            <section id="secure-vs-unsecure" className="scroll-mt-32 mb-16">
               <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                 Secure vs. Unsecure Loans: Different Stakes
               </h2>
               <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 border border-red-200 rounded-2xl bg-red-50/50">
                    <h4 className="font-black text-red-800 mb-4">Secured Default (Home/Car)</h4>
                    <p className="text-sm">The bank has an asset to sell. They will issue a notice under the SARFAESI Act. You have 60 days to pay or appeal. Secured defaults are hard to settle for low amounts because the bank can just sell the asset.</p>
                  </div>
                  <div className="p-8 border border-blue-200 rounded-2xl bg-blue-50/50">
                    <h4 className="font-black text-blue-800 mb-4">Unsecured Default (Personal/Card)</h4>
                    <p className="text-sm">The bank has nothing to seize. They can only sue you in civil court or file a 138. This is why unsecured loans have 50-70% waivers during settlement negotiations.</p>
                  </div>
               </div>
            </section>

            <section id="lok-adalat" className="scroll-mt-32 mb-16">
               <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                 Lok Adalat: The Borrower's Best Chance
               </h2>
               <p className="mb-6">Lok Adalat is a people's court meant for compromise. If you receive a summons for Lok Adalat, attend it. Banks are under immense pressure from the government to close cases here.</p>
               <div className="bg-amber-100 p-8 rounded-2xl border border-amber-300 shadow-sm">
                  <h4 className="font-black text-amber-900 mb-2">Why Attend?</h4>
                  <p className="text-sm text-amber-900/80">You can get waivers that are unavailable in any regular bank branch. Negotiators often see 60% of the total outstanding being waived at Lok Adalats because the judge encourages 'fair compromise'.</p>
               </div>
            </section>

            <section id="credit-card-vs-personal" className="scroll-mt-32 mb-16">
               <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                 Credit Card vs. Personal Loan: Different Default Dynamics
               </h2>
               <p className="mb-6">While both are unsecured, the way banks handle them is vastly different. Understanding this can save you lakhs of rupees in interest.</p>
               <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="p-8 border border-gray-200 rounded-2xl bg-gray-50">
                    <h4 className="font-black text-[#1F5EFF] mb-4">The Credit Card Trap</h4>
                    <p className="text-sm opacity-80 leading-relaxed">Credit cards have the highest interest rates (36% to 48% p.a.). If you miss an EMI on a credit card, the 'interest-free' period on ALL new purchases is cancelled. You start paying interest on everything from the day you spend. Settlement for credit cards is usually easier because the debt is 'uncollectible' in the eyes of the bank faster than a personal loan.</p>
                  </div>
                  <div className="p-8 border border-gray-200 rounded-2xl bg-gray-50">
                    <h4 className="font-black text-[#1F5EFF] mb-4">The Personal Loan Rigidness</h4>
                    <p className="text-sm opacity-80 leading-relaxed">Personal loans have fixed EMIs. Banks are more rigid here because they have already disbursed a large lump sum. However, personal loans are better for restructuring. You can often 're-age' a personal loan, which means the bank forgets the past defaults and starts a fresh schedule if you pay a small upfront fee.</p>
                  </div>
               </div>
               <p className="mb-6">At SettleLoans, we often recommend settling credit cards first because of the compounding interest, while trying to restructure personal loans to maintain some level of credit health.</p>
            </section>

            <section id="prevention" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                How to Prevent Future Missed EMIs
              </h2>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                 <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl text-center hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                    <h4 className="font-bold mb-2">Emergency Fund</h4>
                    <p className="text-xs">Keep 3 months of EMIs in a separate liquid savings account that you never touch for shopping or travel.</p>
                 </div>
                 <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl text-center hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                    <h4 className="font-bold mb-2">EMI Discipline</h4>
                    <p className="text-xs">Always set your EMI date 5 days AFTER your salary date. This cushions you against salary delays or banking holidays.</p>
                 </div>
                 <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl text-center hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                    <h4 className="font-bold mb-2">Debt-to-Income</h4>
                    <p className="text-xs">Ensure your total monthly outflows for debt do not exceed 40% of your take-home pay. 30% is ideal for long-term health.</p>
                 </div>
              </div>
            </section>

            <section id="rbi" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                RBI Borrower Protection: Know the Law
              </h2>
              <div className="bg-blue-600 text-white p-10 rounded-2xl shadow-xl">
                 <h4 className="text-2xl font-black mb-6">The RBI Fair Practices Code</h4>
                 <ul className="space-y-4 text-lg">
                   <li>• Agents cannot visit you before 7 AM or after 7 PM.</li>
                   <li>• They MUST carry a valid ID and a copy of the bank's authorization.</li>
                   <li>• Use of physical force is a criminal offense.</li>
                   <li>• Privacy of the borrower must be maintained throughout the process.</li>
                 </ul>
              </div>
            </section>

            <section id="reviews" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center uppercase tracking-widest opacity-80">Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { 
                    name: "Rajesh Khanna", 
                    loc: "Bangalore", 
                    title: "Escaped the Interest Spiral",
                    rating: 5,
                    story: "I missed 4 EMIs and the interest was growing faster than my income. SettleLoans helped me negotiate an OTS. I paid 40% and closed the debt. I am finally sleeping peacefully."
                  },
                  { 
                    name: "Anjali Saxena", 
                    loc: "Pune", 
                    title: "Harassment Stopped Immediately",
                    rating: 5,
                    story: "Agents were calling my relatives. It was humiliating. SettleLoans legal team sent a warning to the bank and all calls stopped. They then helped me restructure my loan tenure."
                  }
                ].map((review, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-lg transition-all">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-4">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-bold text-[#2E2E2E] text-lg">{review.name}</h5>
                        <p className="text-xs text-[#747474]">{review.loc}</p>
                      </div>
                      <div className="ml-auto text-yellow-400 text-lg">{"★".repeat(review.rating)}</div>
                    </div>
                    <h6 className="font-black text-[#1F5EFF] mb-3 text-xl">{review.title}</h6>
                    <p className="text-sm text-[var(--color-text-body)] italic leading-relaxed opacity-90">"{review.story}"</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-24">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                   { q: "Is missing an EMI a criminal case?", a: "Directly, no. It is a civil breach. However, a bounce of a cheque or NACH is a criminal matter under Section 138 of the NI Act." },
                   { q: "Can I get a loan after settlement?", a: "Not immediately. It takes 18-24 months of consistent 'Secured Credit Card' usage to rebuild your score to a point where banks will trust you again." },
                   { q: "What happens if I ignore recovery agent calls?", a: "Ignoring calls can be seen as 'wilful default'. It is better to answer once, state your problem, and ask them to follow the RBI guidelines." },
                   { q: "How much waiver can I expect in a settlement?", a: "For unsecured loans, waivers can range from 30% to 70% of the total outstanding, depending on the age of the default and your negotiation skills." },
                   { q: "Can banks seize my salary?", a: "In rare cases, they can get an 'attachment' order from a civil court, but this is a very long process and rarely used for small personal loans." },
                   { q: "Does a settlement affect my family's credit score?", a: "Only if they are co-borrowers or guarantors on that specific loan. It does not affect your spouse or siblings if they have no legal connection to the loan." },
                   { q: "What should I do if an agent comes to my house?", a: "Don't let them in without an ID and Authorization. Record the interaction. If they become aggressive, call the police immediately." },
                   { q: "Can I settle a car loan and keep the car?", a: "Very unlikely. Usually, the bank will settle only if you surrender the car or pay the full outstanding balance minus part of the interest." },
                   { q: "Is there any tax on the amount waived by the bank?", a: "In some cases, the waived amount is treated as 'income' and you might receive a 1099 or similar tax notification, but this is rare for individual personal loans in India." },
                   { q: "Should I take a loan from a friend to pay the bank?", a: "If it's an interest-free loan from a trusted friend, yes. It's better than a bank default. But make sure you don't ruin a personal relationship." },
                   { q: "What is an 'Account with DLA'?", a: "DLA stands for 'Delayed Loan Account'. This means your payment is overdue but hasn't yet reached the 90-day NPA mark. It is a warning sign that you need to act immediately." },
                   { q: "Can banks contact me on WhatsApp?", a: "Yes, RBI allows communication via official digital channels including WhatsApp, provided the bank respects your privacy and doesn't reveal your debt details to others." },
                   { q: "What is the role of a Debt Settlement Consultant?", a: "Consultants like SettleLoans act as your legal and financial advocates. We handle the stressful calls, negotiate for the maximum possible waiver, and ensure the closure letter you receive is legally valid." },
                   { q: "How do I check if my loan is 'Settled' or 'Closed'?", a: "You must check your latest CIBIL report. 'Closed' means you paid the full amount. 'Settled' means you paid a partial amount. For future loans, 'Closed' is infinitely better." },
                   { q: "What if the bank refuses to settle?", a: "If the bank refuses a reasonable settlement offer, you can wait for a Lok Adalat or continue to show your financial hardship. Eventually, to clean their balance sheet, most banks will come to the table." }
                ].map((faq, i) => (
                  <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <summary className="flex justify-between items-center p-6 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-[#1F5EFF] group-open:text-white transition-colors">
                      <span className="text-lg">{i + 1}. {faq.q}</span>
                      <span className="transition-transform group-open:rotate-180">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-6 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] bg-white text-lg">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-24 pt-12 border-t border-[#DEDEDE] text-center mb-24 bg-[#E3EDFF] p-12 rounded-[40px]">
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-[#2E2E2E]">Still Worried About Your Missed EMI?</h2>
              <p className="mb-12 text-xl text-gray-700 max-w-3xl mx-auto">Our legal experts are ready to analyze your debt portfolio and provide a custom recovery roadmap at no cost.</p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-black py-5 px-16 rounded-[20px] text-2xl hover:scale-105 transition-all shadow-2xl">
                 Get My Free Debt Consolidation Plan
              </Link>
            </div>

          </article>

          {/* Right Column: Sidebars */}
          <aside className="hidden lg:block w-[320px] shrink-0 px-8 py-4 relative">
             <div className="sticky top-24 space-y-12">
                
                {/* CTA 1 */}
                <div className="bg-[#2E2E2E] rounded-[30px] shadow-2xl overflow-hidden border border-[#DEDEDE]/10 flex flex-col">
                   <div className="bg-[#1F5EFF] p-8 text-center">
                     <h3 className="text-2xl font-black text-white">EMI Overdue?</h3>
                   </div>
                   <div className="p-10 text-center text-[#DEDEDE]">
                    <p className="mb-10 text-base opacity-90 leading-relaxed font-bold">
                      Stop the harassment today. Get professional legal protection against recovery agents.
                    </p>
                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-2xl hover:scale-105 transition-all shadow-lg text-xl">
                      Protect My Rights
                    </Link>
                    <p className="mt-6 text-xs text-gray-400 font-bold uppercase tracking-widest"> 100% Legal & Ethical</p>
                  </div>
                </div>

                {/* Related Pages */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-xl">
                  <h3 className="text-sm font-black uppercase tracking-widest text-[#747474] mb-8 border-b border-[#DEDEDE] pb-4">Knowledge Hub</h3>
                  <ul className="space-y-6 text-base font-bold">
                     <li>
                      <Link href="/loan-settlement-lawyers" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mr-4 opacity-30 group-hover:opacity-100"></span>
                        Loan Settlement Lawyers
                      </Link>
                    </li>
                    <li>
                      <Link href="/ignoring-calls-of-recovery-agent" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mr-4 opacity-30 group-hover:opacity-100"></span>
                        Stop Recovery Harassment
                      </Link>
                    </li>
                     <li>
                      <Link href="/debt-settlement-company-in-india" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                         <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mr-4 opacity-30 group-hover:opacity-100"></span>
                        Best Settlement Company
                      </Link>
                    </li>
                     <li>
                      <Link href="/credit-score-improvement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                         <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mr-4 opacity-30 group-hover:opacity-100"></span>
                        Rebuild Your CIBIL
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
