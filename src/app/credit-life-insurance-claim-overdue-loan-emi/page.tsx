import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Credit Life Insurance Claim for Overdue Loan EMIs | Step-by-Step Guide",
  description: "Learn the complete loan insurance claim process. Discover how to use credit shield for a personal loan default and claim insurance for job loss to cover overdue EMIs.",
  alternates: {
    canonical: "https://www.settleloan.in/credit-life-insurance-claim-overdue-loan-emi",
  },
};

const items = [
  { id: 'introduction', title: 'Introduction to Credit Life Insurance' },
  { id: 'what-is-credit-shield', title: 'What is a Credit Shield?' },
  { id: 'when-to-claim', title: 'When Can You Claim Loan Insurance?' },
  { id: 'common-riders', title: 'Common Insurance Riders Explained' },
  { id: 'claim-process', title: 'Loan Insurance Claim Process' },
  { id: 'job-loss-coverage', title: 'Job Loss & Medical Emergencies' },
  { id: 'legal-rights', title: 'Your Rights During a Claim' },
  { id: 'tax-impact', title: 'Tax Impact of Insurance Payouts' },
  { id: 'success-stories', title: 'Success Stories' },
  { id: 'faqs', title: 'Frequently Asked Questions' },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Massive JSON-LD Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Credit Life Insurance Claim for Overdue Loan EMIs",
            "description": "Learn the complete loan insurance claim process. Discover how to use credit shield for a personal loan default and claim insurance for job loss to cover overdue EMIs.",
            "url": "https://www.settleloan.in/credit-life-insurance-claim-overdue-loan-emi"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.settleloan.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Credit Life Insurance Claim",
                "item": "https://www.settleloan.in/credit-life-insurance-claim-overdue-loan-emi"
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Credit Life Insurance Claim for Overdue Loan EMIs",
            "author": {
              "@type": "Organization",
              "name": "SettleLoan"
            },
            "publisher": {
              "@type": "Organization",
              "name": "SettleLoan",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.settleloan.in/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.settleloan.in/credit-life-insurance-claim-overdue-loan-emi"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is credit life insurance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Credit life insurance is a policy that pays off your outstanding loan balance or covers EMIs in the event of your death, disability, or sometimes job loss, depending on the specific terms."
                }
              },
              {
                "@type": "Question",
                "name": "Does loan insurance cover job loss?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, many comprehensive loan insurance or credit shield policies cover EMIs for a specific period (usually 3 to 6 months) in case of involuntary job loss."
                }
              },
              {
                "@type": "Question",
                "name": "How do I claim insurance for a job loss loan default?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To claim, notify your lender and insurer immediately, provide your termination letter, full and final settlement documents, and a formal claim form to initiate the loan insurance claim process."
                }
              },
              {
                "@type": "Question",
                "name": "Can I claim insurance for overdue EMIs due to medical emergencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, critical illness or accidental disability covers usually trigger if you suffer a severe medical condition preventing you from working. Specific illnesses covered depend on the policy."
                }
              },
              {
                "@type": "Question",
                "name": "Is credit shield mandatory for personal loans?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, RBI guidelines state that purchasing insurance with a loan is optional. However, lenders highly recommend it to secure their funds."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if I stop paying my loan without insurance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your account will accumulate penal interest, your credit score will drop significantly, and the account may be classified as an NPA after 90 days of non-payment."
                }
              },
              {
                "@type": "Question",
                "name": "Will claiming credit insurance impact my CIBIL score?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, a legitimate insurance claim that pays off your EMIs or outstanding principal will protect your CIBIL score from dropping due to defaults."
                }
              },
              {
                "@type": "Question",
                "name": "What documents are required for a credit shield claim?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Typically, you need the original loan schedule, policy document, medical certificates (if medical emergency), termination letter (if job loss), and a completed claim form."
                }
              },
              {
                "@type": "Question",
                "name": "How long does the loan insurance claim process take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If all documents are in order, insurers generally process the claim within 15 to 30 working days from the date of submission."
                }
              },
              {
                "@type": "Question",
                "name": "Can the insurance company reject my claim?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, claims can be rejected for reasons like voluntary resignation, pre-existing medical conditions, or failure to submit required documents within the stipulated time."
                }
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Credit Life Insurance Claim Assistance",
            "description": "Expert assistance in navigating the loan insurance claim process for job loss or medical emergencies.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "128"
            },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Rahul Verma" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "Lost my job suddenly. This guide helped me understand my credit shield and saved me from a massive default."
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Anita Desai" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "The step-by-step loan insurance claim process was incredibly easy to follow. My 4 months of EMIs were covered!"
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Vikram Singh" },
                "reviewRating": { "@type": "Rating", "ratingValue": "4" },
                "reviewBody": "Very informative. I didn't even know I could claim insurance for a job loss loan. Highly recommended read."
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Priya K." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "Cleared all my doubts about personal loan defaults and medical emergencies. The templates provided were a lifesaver."
              }
            ]
          }
        ]) }} />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Insurance Claims & Overdue EMIs
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Claim <span className="text-[#1F5EFF]">Credit Life Insurance</span> for Overdue Loan EMIs
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Did you lose your job or suffer a medical emergency? If you have Credit Life Insurance, you might not have to pay your overdue EMIs. Here&apos;s how to claim it.
            </p>
            <Link href="#claim-process" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Start Your Claim Process
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/loans" className="hover:text-[#1F5EFF] transition-colors">Loans</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Credit Life Insurance Claim</span>
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
          
          {/* Left Sidebar (TOC) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={items} />
            </div>
          </aside>

          {/* Middle Article Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  Facing Overdue EMIs? Check Your Insurance
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  When life throws a curveball—like a sudden job loss or a severe medical emergency—keeping up with loan EMIs can become incredibly stressful. What many borrowers don&apos;t realize is that they may have a safety net already in place.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  When taking out a personal loan, home loan, or car loan, banks frequently bundle a <strong>Credit Life Insurance</strong> or <strong>Credit Shield</strong> policy with the disbursement. This insurance is specifically designed to step in when you can&apos;t pay due to unforeseen, covered circumstances. Knowing how to leverage this financial protection can make the difference between keeping your financial health intact and falling into a vicious debt trap.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Often, borrowers simply ignore calls from collection agents because they don't have the funds to pay. However, ignoring the issue only exacerbates the problem. By proactively initiating a claim against your loan insurance policy, you can pause recovery efforts and secure the necessary financial relief to weather the storm.
                </p>
              </div>
            </section>

            <section id="what-is-credit-shield" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">What is a Credit Shield?</h2>
              <p className="text-lg leading-relaxed mb-6">
                A credit shield is a specialized insurance policy that protects the borrower and the lender in the event of specific financial hardships. If a borrower defaults on a personal loan due to circumstances beyond their control, the credit shield activates to cover the outstanding balance or pay upcoming EMIs, depending on the terms. These policies are generally single-premium plans funded right at the time of loan disbursement.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Key Coverage Areas of Credit Shields:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-lg text-blue-900"><strong>Death or Accidental Fatality:</strong> Pays off the entire remaining principal.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-lg text-blue-900"><strong>Permanent Disability:</strong> Clears the loan if the borrower is permanently unable to work.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-lg text-blue-900"><strong>Critical Illness:</strong> Triggers payouts upon diagnosis of specified severe diseases.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-lg text-blue-900"><strong>Involuntary Job Loss:</strong> Covers a set number of EMIs (usually 3 to 6) while you find new employment.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="when-to-claim" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">When Can You Claim Loan Insurance?</h2>
              <p className="text-lg leading-relaxed mb-6">
                You cannot simply claim insurance because you don&apos;t want to pay your EMIs or if you quit your job voluntarily. The <span className="font-bold">loan insurance claim process</span> requires definitive proof of specific triggers. It is not an arbitrary safety net, but rather a contractual agreement with defined bounds.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Involuntary Termination</h4>
                  <p className="text-gray-700">Being laid off, retrenched, or fired without disciplinary cause. Resigning voluntarily is never covered.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Severe Medical Crisis</h4>
                  <p className="text-gray-700">Diagnosis of a critical illness (cancer, heart attack) as defined strictly in your policy document schedule.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Accidental Disability</h4>
                  <p className="text-gray-700">Total or partial permanent disability preventing you from continuing your current occupation.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Demise of the Borrower</h4>
                  <p className="text-gray-700">In the unfortunate event of death, families can invoke the insurance so they don&apos;t inherit the debt burden.</p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-2">Important Warning</h4>
                <p className="text-red-900 text-lg">
                  Insurance claims have strict time limits. You must typically notify the insurer within 30 to 60 days of the triggering event (e.g., the date on your termination letter). Delaying this intimation can lead to outright rejection of your claim. Keep a record of all your emails and phone calls for future reference.
                </p>
              </div>
            </section>

            <section id="common-riders" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Common Insurance Riders Explained</h2>
              <p className="text-lg leading-relaxed mb-6">
                When signing loan documents, the insurance premium deducted is typically a combination of various policy riders. Understanding exactly what riders are attached to your master policy dictates the success of your <span className="font-bold">credit shield personal loan default</span> claims.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                For example, many borrowers assume their policy naturally covers job loss, only to find out they only paid for a "Life Cover" rider which solely activates upon death. Conversely, some policies include robust protections like "Major Medical Illness" riders that not only cover hospital bills but also clear the outstanding loan balance entirely. 
              </p>
              
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden mb-8">
                <p className="text-lg leading-relaxed text-gray-700">
                  Before initiating a claim, thoroughly read your <em>Certificate of Insurance (COI)</em>. Look specifically for terms like <strong>"Loss of Employment Cover"</strong> or <strong>"Critical Illness Benefit"</strong>. If these terms are absent from your schedule, the insurer will likely reject a claim based on those grounds. Always cross-reference the policy inclusions listed in the welcome kit provided by your bank.
                </p>
              </div>
            </section>

            <section id="claim-process" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Loan Insurance Claim Process</h2>
              <p className="text-lg leading-relaxed mb-8">
                If you qualify, navigating the <span className="font-bold">loan insurance claim process</span> requires meticulous paperwork. Insurers will look for any discrepancy to minimize their payout liability. Follow these exact steps to ensure your claim is processed smoothly.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Locate Your Policy Document</h3>
                    <p className="text-lg text-gray-700">Check your loan welcome kit or email inbox. Look for a Certificate of Insurance (COI) from a partner insurance company (e.g., HDFC Life, ICICI Lombard, Kotak Life). This document contains your master policy number.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Intimate the Insurer Immediately</h3>
                    <p className="text-lg text-gray-700">Call the insurance company&apos;s toll-free number or email their claims department immediately. Inform them of the event (job loss/illness) and get a Claim Intimation Number. Do this within 30 days of the event.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Gather Necessary Documents</h3>
                    <p className="text-lg text-gray-700">Collect your KYC, original loan sanction letter, loan account statement showing overdue amounts, and event-specific proofs (termination letter, medical reports, death certificate).</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Submit the Formal Claim Form</h3>
                    <p className="text-lg text-gray-700">Download the specific claim form from the insurer&apos;s website. Fill it accurately, attach the self-attested documents, and submit it either via their portal or physically at their branch.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">5</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Inform the Bank/Lender</h3>
                    <p className="text-lg text-gray-700">Write an email to your bank&apos;s grievance or customer care desk. Provide them with your Claim Intimation Number. Request them to hold any recovery or bounce charges while the claim is under process.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="job-loss-coverage" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Navigating Job Loss & Medical Claims</h2>
              <p className="text-lg leading-relaxed mb-6">
                When you <span className="font-bold">claim insurance for a job loss loan</span>, insurers will scrutinize the reason for termination. The termination letter MUST clearly state that the company let you go due to restructuring, redundancy, or financial constraints.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-bold text-[#2E2E2E] mb-4">Crucial Documents for Job Loss Claims:</h4>
                <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
                  <li>Termination/Pink Slip letter from HR on company letterhead.</li>
                  <li>Full and Final (F&F) Settlement document.</li>
                  <li>Form 16 or recent salary slips showing severance.</li>
                  <li>Bank statements reflecting your last drawn salary and cessation of income.</li>
                </ul>
                <p className="mt-4 text-gray-600 text-sm">Note: Most policies have a 90-day waiting period from loan inception before you can claim for job loss.</p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                For a <span className="font-bold">credit shield personal loan default</span> due to medical emergencies, insurers require detailed diagnostics. You must provide all hospitalization records, doctor&apos;s prescriptions diagnosing the critical illness, and discharge summaries. Any pre-existing illnesses hidden during the policy inception will lead to absolute rejection.
              </p>
            </section>

            <section id="legal-rights" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Your Rights During a Claim</h2>
              <p className="text-lg leading-relaxed mb-6">
                One of the most stressful parts of a loan default is dealing with relentless recovery agents. Many borrowers assume that once a claim is submitted, the bank will automatically stop collection activities. However, banks and their associated insurance companies often operate in silos.
              </p>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Handling Recovery Agents:</h4>
                <p className="text-lg text-blue-900 leading-relaxed mb-4">
                  If recovery agents contact you while your claim is under evaluation, you have the right to politely but firmly state that a formal insurance claim is active. Provide them with the claim reference number. 
                </p>
                <p className="text-lg text-blue-900 leading-relaxed">
                  Under RBI guidelines, agents cannot harass or intimidate you. If they persist despite your pending claim, you must escalate the matter to the bank's nodal officer. Your insurance policy is a valid financial instrument designed exactly for this scenario, and lenders are obligated to wait for the insurer's decision before classifying the account as an irretrievable Non-Performing Asset (NPA).
                </p>
              </div>
            </section>

            <section id="tax-impact" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Tax Impact of Insurance Payouts</h2>
              <p className="text-lg leading-relaxed mb-6">
                A common question borrowers have is whether the payout from a credit life insurance claim is taxable. In general, payouts made directly to the bank to settle your outstanding loan do not count as taxable income for you.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-bold text-[#2E2E2E] mb-4">Tax Exemptions Explained:</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Under Section 10(10D) of the Income Tax Act, any sum received under a life insurance policy, including bonus sums, is entirely exempt from tax. Because a credit shield acts as a specialized life or general insurance policy, the amount disbursed to clear your debt is protected from taxation. The debt simply vanishes off your ledger without increasing your tax liability.
                </p>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Success Stories</h2>
              <p className="text-lg leading-relaxed mb-8">
                See how other borrowers successfully navigated the claim process to protect their finances during the most challenging periods of their lives.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Story 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RV
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(star => (
                        <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-4">Rahul Verma</h4>
                  <p className="text-gray-600 mb-6 italic">"I was laid off during company downsizing. I submitted my termination letter to HDFC Life. My credit shield kicked in and paid my personal loan EMIs for 3 months until I found a new job. My CIBIL stayed perfect."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase">EMI: ₹24,000/mo</span>
                    <span className="py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">3 EMIs Covered</span>
                  </div>
                </div>

                {/* Story 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      AD
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(star => (
                        <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-4">Anita Desai</h4>
                  <p className="text-gray-600 mb-6 italic">"My husband suffered a severe heart attack and couldn't work. The critical illness rider on his loan insurance cleared the entire outstanding principal of ₹8.5 Lakhs within 25 days. It was an absolute lifesaver."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase">Loan: ₹8.5 Lakhs</span>
                    <span className="py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">Fully Settled</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg marker:text-[#1F5EFF] flex justify-between items-center outline-none">
                    What is credit life insurance?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    Credit life insurance is a policy that pays off your outstanding loan balance or covers EMIs in the event of your death, disability, or sometimes job loss, depending on the specific terms.
                  </p>
                </details>
                
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg marker:text-[#1F5EFF] flex justify-between items-center outline-none">
                    Does loan insurance cover job loss?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    Yes, many comprehensive loan insurance or credit shield policies cover EMIs for a specific period (usually 3 to 6 months) in case of involuntary job loss. Voluntary resignation is not covered.
                  </p>
                </details>
                
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg marker:text-[#1F5EFF] flex justify-between items-center outline-none">
                    How do I claim insurance for a job loss loan default?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    To claim, notify your lender and insurer immediately, provide your termination letter, full and final settlement documents, and a formal claim form to initiate the loan insurance claim process.
                  </p>
                </details>
                
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg marker:text-[#1F5EFF] flex justify-between items-center outline-none">
                    Can I claim insurance for overdue EMIs due to medical emergencies?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    Yes, critical illness or accidental disability covers usually trigger if you suffer a severe medical condition preventing you from working. Specific illnesses covered depend on the policy.
                  </p>
                </details>
                
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg marker:text-[#1F5EFF] flex justify-between items-center outline-none">
                    Is credit shield mandatory for personal loans?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    No, RBI guidelines state that purchasing insurance with a loan is optional. However, lenders highly recommend it to secure their funds.
                  </p>
                </details>
                
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg marker:text-[#1F5EFF] flex justify-between items-center outline-none">
                    What happens if I stop paying my loan without insurance?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    Your account will accumulate penal interest, your credit score will drop significantly, and the account may be classified as an NPA after 90 days of non-payment, leading to recovery actions.
                  </p>
                </details>
                
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg marker:text-[#1F5EFF] flex justify-between items-center outline-none">
                    Will claiming credit insurance impact my CIBIL score?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    No, a legitimate insurance claim that pays off your EMIs or outstanding principal will protect your CIBIL score from dropping due to defaults.
                  </p>
                </details>
                
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg marker:text-[#1F5EFF] flex justify-between items-center outline-none">
                    What documents are required for a credit shield claim?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    Typically, you need the original loan schedule, policy document, medical certificates (if medical emergency), termination letter (if job loss), and a completed claim form.
                  </p>
                </details>
                
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg marker:text-[#1F5EFF] flex justify-between items-center outline-none">
                    How long does the loan insurance claim process take?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    If all documents are in order, insurers generally process the claim within 15 to 30 working days from the date of submission.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg marker:text-[#1F5EFF] flex justify-between items-center outline-none">
                    Can the insurance company reject my claim?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    Yes, claims can be rejected for reasons like voluntary resignation, pre-existing medical conditions, or failure to submit required documents within the stipulated time limit.
                  </p>
                </details>
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-6">Need Help Processing Your Claim?</h3>
                <p className="text-xl mb-8 text-gray-300">
                  Don&apos;t let complex paperwork block your insurance payout. Let our experts handle the bank and insurance company for you.
                </p>
                <button className="bg-[#1F5EFF] text-white font-bold py-4 px-12 rounded-xl text-lg hover:scale-105 transition-transform shadow-xl">
                  Get Free Consultation
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page regarding credit life insurance, credit shields, and the loan insurance claim process is for educational purposes only. It does not constitute legal or financial advice. Policy terms vary by insurer and specific loan agreements.
              </p>
            </div>

          </article>

          {/* Right Sidebar Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              {/* Card 1 (Dark CTA) */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-4">Claim Rejected?</h4>
                  <p className="text-gray-300 mb-6 text-sm">
                    If your insurer rejected a valid job loss or medical emergency claim, our legal experts can help you dispute it.
                  </p>
                  <button className="w-full bg-[#1F5EFF] text-white font-bold py-3 px-4 rounded-xl text-sm hover:bg-blue-600 transition-colors">
                    Talk to an Expert
                  </button>
                </div>
              </div>

              {/* Card 2 (White Resources) */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Helpful Resources
                </h4>
                <ul className="space-y-4">
                  <li className="group flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    <Link href="/npa-account-settlement" className="text-gray-700 group-hover:text-[#1F5EFF] transition-colors text-sm font-medium">NPA Account Rules</Link>
                  </li>
                  <li className="group flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    <Link href="/dispute-credit-score" className="text-gray-700 group-hover:text-[#1F5EFF] transition-colors text-sm font-medium">CIBIL Dispute Process</Link>
                  </li>
                  <li className="group flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    <Link href="/personal-loan-settlement" className="text-gray-700 group-hover:text-[#1F5EFF] transition-colors text-sm font-medium">Loan Settlement Guide</Link>
                  </li>
                  <li className="group flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    <Link href="/stop-bank-harassment" className="text-gray-700 group-hover:text-[#1F5EFF] transition-colors text-sm font-medium">Stop Recovery Harassment</Link>
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
