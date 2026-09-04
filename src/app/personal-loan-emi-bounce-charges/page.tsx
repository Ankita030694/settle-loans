import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Personal Loan EMI Bounce Charges Explained | RBI Limits',
  description: 'Is your bank charging you ₹750 every time your EMI bounces? Know the RBI limits on bounce charges, bank penalties for missed EMIs, and how to claim a refund.',
  alternates: {
    canonical: 'https://example.com/personal-loan-emi-bounce-charges',
  },
};

const tocItems = [
  { id: 'understanding-bounce-charges', title: 'Understanding EMI Bounce Charges' },
  { id: 'bank-penalties', title: 'Bank Penalties for Missed EMIs' },
  { id: 'rbi-guidelines', title: 'Maximum Bounce Charge Limit by RBI' },
  { id: 'how-to-claim-refund', title: 'How to Claim a Refund' },
  { id: 'impact-on-co-borrowers', title: 'Impact on Co-Borrowers & Guarantors' },
  { id: 'legal-action-drt', title: 'Legal Action & DRT Proceedings' },
  { id: 'negotiating-waiver', title: 'Negotiating a Penalty Waiver' },
  { id: 'success-stories', title: 'Real Success Stories' },
  { id: 'faqs', title: 'Frequently Asked Questions' },
];

export default function PersonalLoanEmiBounceChargesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://example.com/personal-loan-emi-bounce-charges",
        "url": "https://example.com/personal-loan-emi-bounce-charges",
        "name": "Personal Loan EMI Bounce Charges Explained | RBI Limits",
        "description": "Know the RBI limits on bounce charges, bank penalties for missed EMIs, and how to claim a refund for overcharging.",
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://example.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Personal Loan EMI Bounce Charges",
            "item": "https://example.com/personal-loan-emi-bounce-charges"
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "Personal Loan EMI Bounce Charges Explained",
        "description": "Learn about bounce charges on personal loans, RBI limits, and how to handle them.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoan"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoan",
          "logo": {
            "@type": "ImageObject",
            "url": "https://example.com/logo.png"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are bounce charges on a personal loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bounce charges are penalties levied by the bank when your EMI payment fails due to insufficient funds in your bank account."
            }
          },
          {
            "@type": "Question",
            "name": "How much can a bank charge for a bounced EMI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banks typically charge between ₹250 to ₹750 for a bounced EMI, depending on their specific policies and the RBI guidelines."
            }
          },
          {
            "@type": "Question",
            "name": "Does an EMI bounce affect my CIBIL score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, an EMI bounce is reported to credit bureaus and can negatively impact your CIBIL score, making future borrowing difficult."
            }
          },
          {
            "@type": "Question",
            "name": "What is the maximum bounce charge limit set by RBI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RBI mandates that penal charges must be reasonable and commensurate with the non-compliance. They cannot be capitalized or charged arbitrarily."
            }
          },
          {
            "@type": "Question",
            "name": "Can I claim a refund for excessive bounce charges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if you believe the bank has charged you excessively or unfairly contrary to RBI guidelines, you can raise a grievance with the bank or the Banking Ombudsman to claim a refund."
            }
          },
          {
            "@type": "Question",
            "name": "Are NACH bounce charges different from cheque bounce charges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While the underlying concept is the same, the actual charges might vary slightly. NACH bounces often attract charges from both the lending bank and your own bank."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if my EMI bounces multiple times in a month?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If an EMI bounces multiple times, the bank may levy bounce charges for each failed attempt, significantly increasing your financial burden."
            }
          },
          {
            "@type": "Question",
            "name": "Can the bank initiate legal action for a bounced EMI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if an EMI bounces repeatedly, the bank can initiate legal action under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act."
            }
          },
          {
            "@type": "Question",
            "name": "How can I avoid EMI bounce charges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ensure you have sufficient balance in your account at least a day before the EMI due date to avoid any bounce charges."
            }
          },
          {
            "@type": "Question",
            "name": "Is GST applicable on EMI bounce charges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, standard GST (usually 18%) is applicable on the bounce charges levied by the bank."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Loan Settlement Services",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1450"
        },
        "review": [
          {
            "@type": "Review",
            "author": "Rahul S.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "They helped me stop the constant EMI bounce charges and restructure my personal loan. Highly recommended!"
          },
          {
            "@type": "Review",
            "author": "Priya M.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "I was paying ₹1500 every month just in bounce charges. Thanks to their guidance, I got a refund and settled my account."
          },
          {
            "@type": "Review",
            "author": "Amit K.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4" },
            "reviewBody": "Very professional service. They explained the RBI limits clearly and negotiated with my bank effectively."
          },
          {
            "@type": "Review",
            "author": "Sneha R.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "I didn't know I could claim a refund for overcharging. Their legal experts handled everything smoothly."
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Know Your Rights
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Personal Loan EMI <span className="text-[#1F5EFF]">Bounce Charges</span> Explained
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Is your bank charging you ₹750 every time your EMI bounces? Know the RBI limits on bounce charges and how to claim a refund for overcharging.
            </p>
            <Link href="#consultation" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Stop Unfair Charges Today
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/personal-loans" className="hover:text-[#1F5EFF] transition-colors">Personal Loans</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">EMI Bounce Charges</span>
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
          
          {/* Left (TOC) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle (Article) */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Intro Section */}
            <section id="understanding-bounce-charges" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                Understanding Bounce Charges on Personal Loans
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  When you take a personal loan, you agree to repay it through Equated Monthly Installments (EMIs). These are typically deducted automatically from your bank account via ECS, NACH, or standing instructions. However, if there aren't enough funds in your account on the due date, the EMI payment fails or "bounces."
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Every time this happens, banks levy a penalty known as an EMI bounce charge. While these charges are meant to deter defaults, many borrowers find themselves trapped in a cycle where they are paying thousands of rupees just in penalties, making it even harder to clear the actual loan.
                </p>
              </div>
            </section>

            {/* Bank Penalties Section */}
            <section id="bank-penalties" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Heavy Burden: Bank Penalty for Missed EMI
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                A single missed EMI doesn't just attract one charge; it often triggers a domino effect of fees that can quickly spiral out of control. It's crucial to understand what you're actually being charged for.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h3 className="text-xl font-black text-[#1F5EFF] mb-4">Common Charges for a Bounced EMI:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-800 text-lg"><strong>Lender's Bounce Fee:</strong> The bank or NBFC that gave you the loan will charge a fee, typically ranging from ₹250 to ₹750 per bounce.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-800 text-lg"><strong>Your Bank's NACH Charge:</strong> The bank where you hold your savings account will also charge a fee for the failed mandate (often ₹250 - ₹500).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-800 text-lg"><strong>Late Payment Penalty:</strong> This is a percentage of the overdue amount (usually 2% to 3% per month) charged until the payment is cleared.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-800 text-lg"><strong>GST:</strong> Remember, 18% GST is applicable on all the above charges.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-2">Warning: The Multiple Presentment Trap</h4>
                <p className="text-lg text-red-900">
                  Some banks re-present the NACH mandate multiple times in the same month if it fails. If they present it 3 times and it fails all 3 times, you might be hit with 3 separate bounce charges, wiping out whatever little balance you had!
                </p>
              </div>
            </section>

            {/* RBI Guidelines Section */}
            <section id="rbi-guidelines" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Maximum Bounce Charge Limit by RBI
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The Reserve Bank of India (RBI) has laid down specific guidelines to protect borrowers from predatory pricing and unfair penal charges. If your bank is treating bounce charges as a revenue stream, they are violating RBI norms.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Reasonableness of Charges</h3>
                  <p className="text-gray-700">RBI mandates that penal charges must be "reasonable" and commensurate with the non-compliance. They cannot be arbitrary or punitive.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">No Capitalization</h4>
                  <p className="text-gray-700">Penal charges cannot be capitalized. This means banks cannot add the unpaid bounce charges to your principal amount and charge interest on it.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Disclosure Requirements</h4>
                  <p className="text-gray-700">All bounce and penal charges must be explicitly mentioned in the loan agreement and the Key Fact Statement (KFS) provided to you.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Board Approved Policy</h4>
                  <p className="text-gray-700">Banks must have a clear, board-approved policy regarding penal charges, ensuring they are not used as a tool for revenue enhancement.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Recent RBI Circular Impact</h4>
                <p className="text-lg text-gray-700">
                  In a recent directive, the RBI replaced the term 'penal interest' with 'penal charges'. This shift means banks can no longer charge a higher interest rate for defaults; they can only levy a fixed charge, which brings transparency and prevents the loan burden from compounding uncontrollably.
                </p>
              </div>
            </section>

            {/* How to Claim Refund Section */}
            <section id="how-to-claim-refund" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Claim a Refund for Overcharging
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If you have been subjected to multiple bounce charges in a single month due to aggressive re-presentment, or if the charges seem disproportionate, you have the right to demand a waiver or refund.
              </p>

              <div className="space-y-12">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Analyze Your Statement</h3>
                    <p className="text-lg text-gray-700">Carefully review your bank statement. Count how many times the NACH was presented and how many bounce charges were applied in a single month.</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Write to the Nodal Officer</h3>
                    <p className="text-lg text-gray-700">Send a formal email to the bank's Nodal or Grievance Redressal Officer. Cite the specific dates of multiple presentments and request a reversal, referencing RBI's fair practices code.</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Escalate to RBI Ombudsman</h3>
                    <p className="text-lg text-gray-700">If the bank rejects your request or fails to respond within 30 days, file a complaint on the RBI CMS (Complaint Management System) portal regarding unfair penal charges.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Impact on Co-Borrowers Section */}
            <section id="impact-on-co-borrowers" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Hidden Impact on Co-Borrowers & Guarantors
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden mb-8">
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  When a personal loan is taken jointly with a co-borrower or backed by a guarantor, an EMI bounce does not just affect the primary applicant. The financial shockwaves are felt by everyone associated with the loan agreement. Banks hold co-borrowers and guarantors equally liable for the repayment of the loan, which means the consequences of a bounce are shared.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  First and foremost, the credit scores of all parties take a massive hit. If your EMI bounces and the penalty is not cleared immediately, the default is reported to credit bureaus like CIBIL, Experian, and Equifax against the PAN cards of the primary borrower, the co-borrower, and the guarantor. This can severely damage the guarantor's ability to secure loans for their own needs in the future, often leading to strained personal relationships. Furthermore, if the primary borrower is uncontactable, recovery agents will legally pivot their focus to the guarantor, initiating relentless collection calls and potentially legal notices.
                </p>
              </div>
            </section>

            {/* Legal Action Section */}
            <section id="legal-action-drt" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Legal Action & DRT Proceedings for Repeated Bounces
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                A single bounce might just attract a financial penalty, but repeated EMI bounces signal to the bank that your account is at high risk of becoming a Non-Performing Asset (NPA). Once an account is classified as an NPA (typically after 90 days of non-payment), the bank's strategy shifts from penalty collection to aggressive recovery.
              </p>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h3 className="text-xl font-black text-red-700 mb-2">Section 138 & Section 25 Notices</h3>
                <p className="text-lg text-red-900 mb-4">
                  If you submitted post-dated cheques (PDCs) that bounce, banks will issue a legal notice under Section 138 of the Negotiable Instruments Act. This is a criminal offense. If your loan was auto-debited via ECS or NACH, they will invoke Section 25 of the Payment and Settlement Systems Act, which carries similar criminal liabilities including potential imprisonment and heavy fines.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-bold text-gray-800 mb-3">The Role of the DRT (Debt Recovery Tribunal)</h4>
                <p className="text-lg text-gray-700">
                  For loan amounts exceeding ₹20 Lakhs, banks have the authority to approach the Debt Recovery Tribunal (DRT) for expedited recovery. The DRT was established specifically to fast-track the recovery of bad loans. Once a DRT summons is issued, you must respond with a strong legal defense. Ignoring DRT notices can lead to ex-parte orders where the tribunal rules in the bank's favor in your absence, allowing them to attach your bank accounts, garnish your salary, or seize other assets to recover the dues along with all accumulated bounce charges and legal fees.
                </p>
              </div>
            </section>

            {/* Negotiating Waiver Section */}
            <section id="negotiating-waiver" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Negotiating a Penalty Waiver Before It Escalates
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Before the situation escalates to legal notices and tribunal summons, there is a window of opportunity to negotiate with your bank. Banks are fully aware of RBI guidelines regarding penal charges, and they know that aggressive charging practices can be challenged in the Banking Ombudsman.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">The "Hardship" Application</h3>
                  <p className="text-gray-700">Draft a formal hardship letter explaining the exact reason for the bounce (e.g., job loss, medical emergency). Attach proof. If it's a genuine issue, managers have the discretionary power to waive 50% to 100% of the bounce charges for first-time offenders.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Leveraging the Ombudsman</h4>
                  <p className="text-gray-700">If the bank refuses a waiver despite multiple unreasonable presentments of the NACH mandate, inform them that you are preparing an RBI Ombudsman complaint for predatory charging. This often forces the grievance desk to reconsider the waiver request immediately.</p>
                </div>
              </div>
            </section>

            {/* Success Stories Section */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Borrowers Who Beat the Bounce Trap
              </h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      M
                    </div>
                    <div>
                      <h3 className="font-black text-lg text-[#2E2E2E]">Manish Verma</h3>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-6">"My bank presented the mandate 4 times in one week, resulting in ₹2400 in charges. I disputed it referencing RBI guidelines and got ₹1800 refunded instantly."</p>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">₹2,400 Charged</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">₹1,800 Refunded</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      S
                    </div>
                    <div>
                      <h4 className="font-black text-lg text-[#2E2E2E]">Sonia K.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-6">"They were adding penalties on top of penalties. Once I filed an Ombudsman complaint, the bank reversed ₹5,000 in illegal late fees and bounce charges."</p>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">₹5,000 Unfair Fees</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">Fully Waived</span>
                  </div>
                </div>

              </div>
            </section>

            {/* FAQs Section */}
            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] list-none relative pr-8">
                    What happens if my EMI bounces for the first time?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 group-open:rotate-180">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    If your EMI bounces for the first time, your bank will levy a bounce charge (usually ₹250-₹750). It will also negatively impact your CIBIL score. However, if you clear the due amount immediately along with the charges, the long-term impact on your credit can be minimized.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] list-none relative pr-8">
                    Can a bank present the NACH mandate multiple times?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 group-open:rotate-180">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Yes, banks can re-present the mandate. However, charging you for every single bounce within a span of a few days is considered unfair practice. You can dispute these multiple charges by referencing RBI guidelines.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] list-none relative pr-8">
                    Does a cheque bounce attract criminal charges?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 group-open:rotate-180">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Yes. Under Section 138 of the Negotiable Instruments Act, a bounced cheque is a criminal offense punishable by a fine or imprisonment. Similarly, an ECS/NACH bounce falls under Section 25 of the Payment and Settlement Systems Act.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] list-none relative pr-8">
                    How long do bounce charges stay on my credit report?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 group-open:rotate-180">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    The record of late payments and defaults typically stays on your credit report for up to 7 years, impacting your ability to secure loans or credit cards in the future.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] list-none relative pr-8">
                    Can I ask the bank to waive the bounce charges?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 group-open:rotate-180">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Yes. If you have a good track record and it's your first time missing a payment, or if the bounce was due to a technical error at the bank's end, you can request a waiver. Banks often reverse charges as a gesture of goodwill.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] list-none relative pr-8">
                    What is the difference between late fee and bounce charge?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 group-open:rotate-180">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    A bounce charge is a flat fee levied because a payment instrument (cheque/NACH) failed. A late payment fee is an additional penalty charged because the payment was not made by the due date. You can be charged both simultaneously.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] list-none relative pr-8">
                    Is GST applicable on penalty charges?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 group-open:rotate-180">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Yes, as per current tax laws, 18% GST is applicable on all bank charges, including EMI bounce charges, late payment fees, and mandate failure fees.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] list-none relative pr-8">
                    Can banks automatically deduct bounce charges from my next deposit?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 group-open:rotate-180">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Yes. When you deposit money into your account, banks generally deduct pending charges (like bounce fees) first before allocating the remaining funds toward your EMI.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] list-none relative pr-8">
                    What if I stop the NACH mandate to prevent bounce charges?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 group-open:rotate-180">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Canceling a NACH mandate without the lender's consent is considered a default action and can still attract legal notices and penalties for non-payment.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] list-none relative pr-8">
                    Can I settle my loan if bounce charges are too high?
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 group-open:rotate-180">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Yes. If your account becomes a Non-Performing Asset (NPA) and you are genuinely unable to pay, you can negotiate a one-time settlement (OTS) with the bank, where they often waive all accumulated bounce and penal charges.
                  </p>
                </details>

              </div>
            </section>

            {/* Lead Gen Hook */}
            <div id="consultation" className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black mb-6">Stop Unfair Bank Penalties Now</h3>
                <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                  Are bounce charges eating up your savings? Don't let banks overcharge you. Get expert legal help to dispute penalties, claim refunds, and restructure your loan.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold text-lg py-4 px-12 rounded-xl hover:scale-105 transition-transform shadow-xl">
                  Talk to a Debt Expert Today
                </Link>
                <p className="mt-6 text-sm text-gray-400">100% Confidential. Free Initial Consultation.</p>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational purposes only and does not constitute legal or financial advice. RBI guidelines and bank policies are subject to change. Please consult a qualified professional before making any financial decisions regarding loan disputes or settlements.
              </p>
            </div>

          </article>

          {/* Right (Sidebar) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="text-2xl font-black mb-4">Stuck in the Bounce Trap?</div>
                  <p className="text-gray-300 mb-6 text-sm">We can help you stop the harassment and negotiate a fair settlement with your bank.</p>
                  <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Legal Help
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <div className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">Related Resources</div>
                <ul className="space-y-4">
                  <li>
                    <Link href="/npa-account-settlement" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      NPA Account Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/harassment-by-recovery-agents" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Stop Recovery Harassment
                    </Link>
                  </li>
                  <li>
                    <Link href="/cibil-score-after-settlement" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      CIBIL Score Impact
                    </Link>
                  </li>
                  <li>
                    <Link href="/credit-card-debt-settlement" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Credit Card Debt Relief
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
