import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Can Banks & Lenders Contact Your Guarantor for Recovery?',
  description: 'Are recovery agents harassing the friend or family member who stood as your loan guarantor? Understand their exact legal liability under RBI rules.',
  alternates: {
    canonical: 'https://settleloan.in/can-banks-contact-guarantor-for-recovery',
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://settleloan.in/can-banks-contact-guarantor-for-recovery",
      "url": "https://settleloan.in/can-banks-contact-guarantor-for-recovery",
      "name": "Can Banks & Lenders Contact Your Guarantor for Recovery?",
      "description": "Are recovery agents harassing the friend or family member who stood as your loan guarantor? Understand their exact legal liability under RBI rules."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://settleloan.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Can Banks & Lenders Contact Your Guarantor for Recovery?",
          "item": "https://settleloan.in/can-banks-contact-guarantor-for-recovery"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Can Banks & Lenders Contact Your Guarantor for Recovery?",
      "description": "Are recovery agents harassing the friend or family member who stood as your loan guarantor? Understand their exact legal liability under RBI rules.",
      "author": {
        "@type": "Organization",
        "name": "SettleLoan"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can banks legally contact my guarantor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if you default on your personal loan, the bank or their recovery agents can legally contact your guarantor to remind them of their liability, but they cannot harass or threaten them."
          }
        },
        {
          "@type": "Question",
          "name": "What is the legal liability of a loan guarantor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the Indian Contract Act, the liability of a guarantor is co-extensive with that of the principal debtor. This means the guarantor is equally responsible for repaying the loan if you default."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents harass the guarantor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. RBI guidelines strictly prohibit recovery agents from using abusive language, physical threats, or harassing the borrower, their family, or their guarantor."
          }
        },
        {
          "@type": "Question",
          "name": "Can a guarantor back out of a loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually, a guarantor cannot back out once the loan is disbursed unless the lender agrees to remove them or the borrower provides an alternate guarantor or collateral."
          }
        },
        {
          "@type": "Question",
          "name": "Will a loan default affect the guarantor's CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If the principal borrower defaults, it negatively impacts both the borrower's and the guarantor's CIBIL score, reducing the guarantor's future borrowing capacity."
          }
        },
        {
          "@type": "Question",
          "name": "Can lenders seize the guarantor's property?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the loan is unsecured, the lender cannot seize property without a court order. If it is a secured loan and the guarantor pledged collateral, that collateral can be seized."
          }
        },
        {
          "@type": "Question",
          "name": "How can I stop recovery agents from calling my guarantor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best way is to communicate with the lender, restructure your loan, or file a formal complaint with the RBI Ombudsman if the recovery agents are violating guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a specific time recovery agents can call?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, per RBI rules, recovery agents can only contact borrowers or guarantors between 8:00 AM and 7:00 PM."
          }
        },
        {
          "@type": "Question",
          "name": "Can the guarantor sue the primary borrower?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If the guarantor ends up paying the loan amount, they have the legal right to recover that money from the principal borrower under the Right of Subrogation."
          }
        },
        {
          "@type": "Question",
          "name": "What should the guarantor do if contacted?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The guarantor should ask for official communication in writing, avoid making cash payments to unofficial agents, and coordinate with the primary borrower to resolve the issue."
          }
        }
      ]
    },
    {
      "@type": "Product",
      "name": "SettleLoan Debt Resolution Services",
      "description": "Expert debt settlement and harassment protection services in India.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1250"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Ravi K."
          },
          "reviewBody": "My guarantor was being harassed daily by recovery agents. SettleLoan helped stop the calls immediately and settled the loan for 40% less!"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Anjali S."
          },
          "reviewBody": "I was a guarantor for a friend who defaulted. The bank was threatening me. SettleLoan stepped in and resolved the legal mess."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4"
          },
          "author": {
            "@type": "Person",
            "name": "Mohit V."
          },
          "reviewBody": "Very professional team. They educated me on my rights as a guarantor and helped close the account legally."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Sneha P."
          },
          "reviewBody": "Saved my family from constant harassment by recovery agents. Highly recommend their legal protection services."
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'introduction', title: 'Guarantor Liability Explained' },
  { id: 'co-applicant-vs-guarantor', title: 'Co-Applicant vs. Guarantor' },
  { id: 'rbi-guidelines', title: 'RBI Rules on Recovery Calls' },
  { id: 'guarantor-rights', title: 'Legal Rights of a Guarantor' },
  { id: 'legal-notices', title: 'Handling Legal Notices' },
  { id: 'removing-guarantor', title: 'Can a Guarantor Be Removed?' },
  { id: 'impact-on-cibil', title: 'Impact on Guarantor\'s CIBIL' },
  { id: 'how-to-stop-harassment', title: 'How to Stop Agent Harassment' },
  { id: 'success-stories', title: 'Success Stories' },
  { id: 'faqs', title: 'Frequently Asked Questions' }
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Legal Rights & Liability
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Can <span className="text-[#1F5EFF]">Banks & Lenders</span> Contact Your Guarantor for Recovery?
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Are recovery agents harassing the friend or family member who stood as your loan guarantor? Understand their exact legal liability under RBI rules.
            </p>
            <Link href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Legal Protection Now
            </Link>
          </div>
        </section>

        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/personal-loans">Personal Loans</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Guarantor Liability</span>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
          <aside className="hidden lg:block w-1/5 min-w-[240px] sticky top-24 h-fit">
            <TableOfContents items={tocItems} />
          </aside>
          
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">Understanding Guarantor Liability</h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden mb-6">
                <p className="text-lg leading-relaxed mb-0 text-gray-700">
                  When someone signs as a guarantor for your personal loan, they are taking on equal financial responsibility. Under the Indian Contract Act, 1872, the liability of the guarantor is co-extensive with that of the principal debtor. This means if you default on your EMIs, the lender has the legal right to ask your guarantor to repay the outstanding dues.
                </p>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                However, having the legal right to ask for repayment is very different from having the right to harass, intimidate, or publicly shame the guarantor. Many borrowers find themselves in stressful situations when aggressive recovery agents start calling their friends, colleagues, or family members who stood as guarantors.
              </p>
            </section>
            
            <section id="co-applicant-vs-guarantor" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Co-Applicant vs. Guarantor: Knowing the Difference</h2>
              <p className="text-lg leading-relaxed mb-6">
                Many people confuse the role of a guarantor with that of a co-applicant or co-borrower. While both roles involve taking on liability for a loan, the nature of that liability and how it is treated by banks differ significantly. Understanding these distinctions is crucial if you are approached to support someone's loan application.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm">
                  <h3 className="font-black text-[#1F5EFF] text-xl mb-3">The Co-Applicant</h3>
                  <p className="text-gray-700 m-0">
                    A co-applicant is a primary borrower alongside the main applicant. They share equal ownership of the asset (if any) and equal immediate responsibility for the EMIs. Their income is usually clubbed with the primary applicant to increase loan eligibility. If an EMI bounces, the bank considers both parties equally at fault from day one.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm">
                  <h3 className="font-black text-[#1F5EFF] text-xl mb-3">The Guarantor</h3>
                  <p className="text-gray-700 m-0">
                    A guarantor, on the other hand, acts as a secondary safety net for the bank. They do not own the asset, nor do they directly benefit from the loan amount. Their income is not used to calculate the primary borrower's eligibility. The guarantor's liability only crystallizes when the primary borrower defaults on their payments. However, once that default occurs, the guarantor's legal obligation to pay is absolute.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-6 rounded-r-2xl mb-8">
                <p className="text-gray-800 m-0 font-medium">
                  <strong>Key Takeaway:</strong> Never become a guarantor assuming it is just a formality or a character reference. It is a legally binding financial commitment that can severely restrict your own future borrowing capacity.
                </p>
              </div>
            </section>
            
            <section id="rbi-guidelines" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">RBI Rules on Recovery Calls to Guarantors</h2>
              <p className="text-lg leading-relaxed mb-6">
                The Reserve Bank of India (RBI) has laid down strict Fair Practices Codes that all banks and NBFCs must follow. These rules protect both the primary borrower and the guarantor from unfair recovery practices.
              </p>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Crucial RBI Guidelines on Recovery</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-800">Calls can only be made between 8:00 AM and 7:00 PM.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-800">Agents cannot use abusive, threatening, or vulgar language.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-800">Agents cannot discuss the debt with neighbors or unauthorized third parties.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-800">Physical threats or intimidation tactics are strictly illegal.</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-lg font-black text-red-700 mb-2">Warning!</h4>
                <p className="text-red-900 m-0">If a recovery agent threatens a guarantor with immediate arrest or police action without a court warrant, they are violating the law. Civil defaults do not lead to automatic police arrests in India.</p>
              </div>
            </section>

            <section id="guarantor-rights" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Legal Rights of a Guarantor</h2>
              <p className="text-lg leading-relaxed mb-6">
                Guarantors are not helpless. While they have a liability, they also have specific legal rights that they can exercise if the principal borrower defaults.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Right of Subrogation</h3>
                  <p className="text-gray-700 text-sm m-0">If the guarantor pays off the debt to the bank, they step into the shoes of the creditor. They can then legally recover the paid amount from the primary borrower.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Right to Information</h3>
                  <p className="text-gray-700 text-sm m-0">The guarantor has the right to ask the bank for exact details of the outstanding balance, the statements of the loan account, and any settlement offers.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Right Against Unfair Terms</h3>
                  <p className="text-gray-700 text-sm m-0">If the bank makes changes to the loan agreement (like increasing tenure or interest) without the guarantor's consent, the guarantor's liability might be discharged.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Right to Be Sued Later</h3>
                  <p className="text-gray-700 text-sm m-0">Though banks usually pursue both parties simultaneously, the guarantor can insist that the bank exhausts its remedies against the principal debtor first, depending on the contract terms.</p>
                </div>
              </div>
            </section>

            <section id="legal-notices" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">What to Do If You Receive a Legal Notice</h2>
              <p className="text-lg leading-relaxed mb-6">
                If the primary borrower defaults continuously and ignores reminders, banks will eventually initiate legal proceedings. As a guarantor, you will be named as a co-defendant or co-respondent in these legal notices. Ignoring these notices is one of the biggest mistakes a guarantor can make.
              </p>
              <div className="space-y-6 my-8">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Section 138 (Cheque Bounce) Notices</h3>
                  <p className="text-gray-700 mb-0">
                    If the primary borrower provided post-dated cheques or NACH mandates that bounced, the lender might file a criminal case under Section 138 of the Negotiable Instruments Act. Usually, this case is filed against the person who signed the cheque/mandate (the primary borrower). However, civil recovery suits for the outstanding amount will still include the guarantor.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Arbitration Notices</h3>
                  <p className="text-gray-700 mb-0">
                    Most unsecured personal loans include an arbitration clause. The bank will appoint an arbitrator to pass an award (similar to a court decree) for the recovery of dues. Guarantors must attend these proceedings or send a legal representative to ensure an ex-parte (one-sided) order is not passed against them, which could lead to attachment of the guarantor's salary or bank accounts.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">SARFAESI Act (For Secured Loans)</h3>
                  <p className="text-gray-700 mb-0">
                    If you stood as a guarantor for a secured loan (like a home or property loan) and pledged your own property as collateral, the bank can invoke the SARFAESI Act, 2002. This powerful law allows the bank to auction the guarantor's pledged property to recover the dues without needing a court's intervention.
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-8">
                If you receive a legal notice, immediately contact a debt resolution expert or a lawyer. They can help you draft a proper legal reply, invoke your rights as a guarantor, and potentially force the bank to exhaust its remedies against the primary borrower first.
              </p>
            </section>

            <section id="removing-guarantor" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Can a Guarantor Be Removed from a Loan?</h2>
              <p className="text-lg leading-relaxed mb-6">
                A common question is whether a guarantor can simply "opt out" or withdraw their guarantee once the loan is disbursed. Unfortunately, the answer is usually no. Because the bank approved the loan specifically relying on the combined financial strength of the borrower and the guarantor, you cannot unilaterally withdraw your guarantee.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                However, there are a few specific scenarios where a guarantor can be successfully removed or replaced:
              </p>
              
              <div className="bg-white rounded-2xl border border-[#DEDEDE] overflow-hidden mb-8 shadow-sm">
                <div className="p-6 border-b border-[#DEDEDE] flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h4 className="text-lg font-bold text-[#2E2E2E] mb-2">Providing a Substitute Guarantor</h4>
                    <p className="text-gray-700 m-0">If the primary borrower can find another individual with a strong CIBIL score and sufficient income who is willing to take your place, the bank may agree to a substitution. This requires fresh paperwork and the bank's explicit written approval.</p>
                  </div>
                </div>
                <div className="p-6 border-b border-[#DEDEDE] flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h4 className="text-lg font-bold text-[#2E2E2E] mb-2">Offering Alternate Collateral</h4>
                    <p className="text-gray-700 m-0">The borrower can offer fixed deposits, property, or mutual funds to the bank as collateral equal to the loan amount. If the bank feels this new security is adequate, they might release the guarantor from their obligations.</p>
                  </div>
                </div>
                <div className="p-6 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h4 className="text-lg font-bold text-[#2E2E2E] mb-2">Partial Prepayment</h4>
                    <p className="text-gray-700 m-0">If the borrower pays down a significant portion of the principal amount, drastically reducing the bank's risk, the borrower can formally request the bank to release the guarantor for the remaining smaller balance.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="impact-on-cibil" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Impact on Guarantor's CIBIL Score</h2>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed text-gray-800 m-0">
                  One of the most critical aspects of being a guarantor is the impact on your credit history. Since a guarantor is equally liable, any missed EMI, late payment, or default by the primary borrower is directly reported to the CIBIL profile of the guarantor as well. This can severely restrict the guarantor's ability to get their own loans or credit cards in the future. Furthermore, the guaranteed amount is considered a contingent liability and reduces the guarantor's overall borrowing capacity.
                </p>
              </div>
            </section>

            <section id="how-to-stop-harassment" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How to Stop Agent Harassment</h2>
              <p className="text-lg leading-relaxed mb-6">
                If you or your guarantor are facing undue harassment from recovery agents, follow these exact steps to protect yourselves:
              </p>

              <div className="space-y-12 my-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">Demand Official ID and Notice</h4>
                    <p className="text-gray-700">Never entertain recovery agents who refuse to show their official ID card or an authorization letter from the bank. Always demand communication in writing.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">Record the Conversations</h4>
                    <p className="text-gray-700">If agents are using abusive language or calling at odd hours, record the calls. Keep evidence of WhatsApp messages or threatening SMS texts.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">File a Police Complaint</h4>
                    <p className="text-gray-700">If there is a physical threat to the guarantor's safety or severe mental harassment, immediately file an FIR at your local police station against the specific agents.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">Escalate to RBI Ombudsman</h4>
                    <p className="text-gray-700">If the lender fails to resolve the harassment complaint within 30 days, file a formal complaint with the RBI Integrated Ombudsman Scheme online.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Real Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                {/* Story 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      R
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 m-0">Rahul Sharma</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"My guarantor was being harassed daily by recovery agents for my personal loan. Legal intervention stopped the calls instantly and we negotiated a proper settlement."</p>
                  <div className="flex gap-3 mt-auto">
                    <span className="text-xs font-bold px-3 py-1 bg-red-100 text-red-700 rounded-full">Loan Amount: ₹4,50,000</span>
                    <span className="text-xs font-bold px-3 py-1 bg-green-100 text-green-700 rounded-full">Settled Amount: ₹1,80,000</span>
                  </div>
                </div>

                {/* Story 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      M
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 m-0">Meera V.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"I stood as a guarantor for a friend and ended up getting threatening calls from recovery agents. SettleLoan helped clear my name from the loan officially."</p>
                  <div className="flex gap-3 mt-auto">
                    <span className="text-xs font-bold px-3 py-1 bg-red-100 text-red-700 rounded-full">Loan Amount: ₹8,00,000</span>
                    <span className="text-xs font-bold px-3 py-1 bg-green-100 text-green-700 rounded-full">Guarantor Freed</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-gray-900 group-open:text-[#1F5EFF] group-open:mb-4">Can banks legally contact my guarantor?</summary>
                  <p className="text-gray-700 mt-2">Yes, if you default on your personal loan, the bank or their recovery agents can legally contact your guarantor to remind them of their liability, but they cannot harass or threaten them.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-gray-900 group-open:text-[#1F5EFF] group-open:mb-4">What is the legal liability of a loan guarantor?</summary>
                  <p className="text-gray-700 mt-2">Under the Indian Contract Act, the liability of a guarantor is co-extensive with that of the principal debtor. This means the guarantor is equally responsible for repaying the loan if you default.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-gray-900 group-open:text-[#1F5EFF] group-open:mb-4">Can recovery agents harass the guarantor?</summary>
                  <p className="text-gray-700 mt-2">No. RBI guidelines strictly prohibit recovery agents from using abusive language, physical threats, or harassing the borrower, their family, or their guarantor.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-gray-900 group-open:text-[#1F5EFF] group-open:mb-4">Can a guarantor back out of a loan?</summary>
                  <p className="text-gray-700 mt-2">Usually, a guarantor cannot back out once the loan is disbursed unless the lender agrees to remove them or the borrower provides an alternate guarantor or collateral.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-gray-900 group-open:text-[#1F5EFF] group-open:mb-4">Will a loan default affect the guarantor's CIBIL score?</summary>
                  <p className="text-gray-700 mt-2">Yes. If the principal borrower defaults, it negatively impacts both the borrower's and the guarantor's CIBIL score, reducing the guarantor's future borrowing capacity.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-gray-900 group-open:text-[#1F5EFF] group-open:mb-4">Can lenders seize the guarantor's property?</summary>
                  <p className="text-gray-700 mt-2">If the loan is unsecured, the lender cannot seize property without a court order. If it is a secured loan and the guarantor pledged collateral, that collateral can be seized.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-gray-900 group-open:text-[#1F5EFF] group-open:mb-4">How can I stop recovery agents from calling my guarantor?</summary>
                  <p className="text-gray-700 mt-2">The best way is to communicate with the lender, restructure your loan, or file a formal complaint with the RBI Ombudsman if the recovery agents are violating guidelines.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-gray-900 group-open:text-[#1F5EFF] group-open:mb-4">Is there a specific time recovery agents can call?</summary>
                  <p className="text-gray-700 mt-2">Yes, per RBI rules, recovery agents can only contact borrowers or guarantors between 8:00 AM and 7:00 PM.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-gray-900 group-open:text-[#1F5EFF] group-open:mb-4">Can the guarantor sue the primary borrower?</summary>
                  <p className="text-gray-700 mt-2">Yes. If the guarantor ends up paying the loan amount, they have the legal right to recover that money from the principal borrower under the Right of Subrogation.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-gray-900 group-open:text-[#1F5EFF] group-open:mb-4">What should the guarantor do if contacted?</summary>
                  <p className="text-gray-700 mt-2">The guarantor should ask for official communication in writing, avoid making cash payments to unofficial agents, and coordinate with the primary borrower to resolve the issue.</p>
                </details>
              </div>
            </section>

            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black mb-6">Stop Guarantor Harassment Today</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Are recovery agents continuously calling your guarantor? Don't let your friends and family suffer for a financial setback. Our legal experts can stop the harassment immediately and help settle your loan legally.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold text-xl py-5 px-12 rounded-xl hover:scale-105 transition-transform shadow-2xl">
                  Get Free Legal Consultation
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational purposes only and does not constitute legal advice. While we strive to keep the information accurate and up-to-date, RBI guidelines and banking policies are subject to change.
              </p>
            </div>
            
          </article>

          <aside className="hidden lg:block w-1/5 min-w-[240px] sticky top-24 h-fit space-y-8">
            <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4">Facing Recovery Harassment?</h3>
                <p className="text-gray-300 mb-6 text-sm">Our lawyers can issue a Cease and Desist notice to stop illegal recovery agent calls to you and your guarantor.</p>
                <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors">
                  Talk to an Expert
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
              <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                Related Resources
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/how-to-deal-with-recovery-agents" className="group flex items-center text-gray-600 hover:text-[#1F5EFF] text-sm font-medium transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    How to Deal with Agents
                  </Link>
                </li>
                <li>
                  <Link href="/personal-loan-settlement-process" className="group flex items-center text-gray-600 hover:text-[#1F5EFF] text-sm font-medium transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    Loan Settlement Process
                  </Link>
                </li>
                <li>
                  <Link href="/rbi-guidelines-for-loan-recovery" className="group flex items-center text-gray-600 hover:text-[#1F5EFF] text-sm font-medium transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    RBI Recovery Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/can-i-go-to-jail-for-not-paying-personal-loan" className="group flex items-center text-gray-600 hover:text-[#1F5EFF] text-sm font-medium transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    Can I go to Jail?
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
          
        </div>
      </main>
    </div>
  );
}
