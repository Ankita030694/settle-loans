import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "How to Regularise an Overdue Loan Account (NPA to Standard)",
  description: "Has your loan been classified as a Non-Performing Asset (NPA)? Discover the exact mathematical formula to regularise your account back to 'Standard'.",
  alternates: {
    canonical: "https://www.settleloan.in/how-to-regularise-overdue-loan-account-npa-to-standard"
  }
};

const tocItems = [
  { id: "introduction", title: "Understanding NPA and Loan Regularisation" },
  { id: "the-mathematical-formula", title: "The Mathematical Formula to Regularise" },
  { id: "rbi-guidelines", title: "RBI Guidelines on NPA to Standard" },
  { id: "step-by-step-guide", title: "Step-by-Step Guide to Pay Arrears" },
  { id: "consequences-of-npa", title: "Consequences of Remaining in NPA" },
  { id: "success-stories", title: "Recent Success Stories" },
  { id: "faq", title: "Frequently Asked Questions" }
];

export default function RegulariseLoanAccountPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.settleloan.in/how-to-regularise-overdue-loan-account-npa-to-standard",
        "url": "https://www.settleloan.in/how-to-regularise-overdue-loan-account-npa-to-standard",
        "name": "How to Regularise an Overdue Loan Account (NPA to Standard)",
        "description": "Has your loan been classified as a Non-Performing Asset (NPA)? Discover the exact mathematical formula to regularise your account back to 'Standard'."
      },
      {
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
            "name": "Loan Queries",
            "item": "https://www.settleloan.in/all-queries"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Regularise Overdue Loan Account (NPA to Standard)",
            "item": "https://www.settleloan.in/how-to-regularise-overdue-loan-account-npa-to-standard"
          }
        ]
      },
      {
        "@type": "Article",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.settleloan.in/how-to-regularise-overdue-loan-account-npa-to-standard"
        },
        "headline": "How to Regularise an Overdue Loan Account (NPA to Standard)",
        "description": "Has your loan been classified as a Non-Performing Asset (NPA)? Discover the exact mathematical formula to regularise your account back to 'Standard'.",
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
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does it mean to regularise a loan account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To regularise a loan account means to bring an overdue or Non-Performing Asset (NPA) account back to 'Standard' status by paying off all accumulated missed EMIs, overdue interest, and penal charges."
            }
          },
          {
            "@type": "Question",
            "name": "How can I convert my NPA account back to standard?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can convert an NPA back to a standard account by paying the total arrears in full. Partial payments will not upgrade the account status under RBI guidelines."
            }
          },
          {
            "@type": "Question",
            "name": "How much do I need to pay to remove the NPA tag?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You must pay the sum of all overdue principal EMIs, accumulated interest, delayed payment charges, and any legal/bounce fees applied to your account."
            }
          },
          {
            "@type": "Question",
            "name": "Can I regularise my account by paying just one EMI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Paying a single EMI when multiple are due will reduce your outstanding balance, but it will not remove the NPA tag. The entire arrears amount must be cleared."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I don't pay the arrears on an NPA account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you fail to pay the arrears, the bank can initiate legal recovery actions, such as sending a SARFAESI notice for secured loans or filing a civil suit for unsecured loans."
            }
          },
          {
            "@type": "Question",
            "name": "Will my CIBIL score improve immediately after regularising the loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your account status will change to 'Standard', which halts further damage. However, the history of late payments (e.g., 90 days past due) will remain on your report, meaning your score will recover gradually over time."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a penalty for regularising an overdue account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you will have to pay the overdue interest and penal charges (such as cheque bounce fees) that have accrued during the default period. However, you can often negotiate with the bank to waive some of these charges."
            }
          },
          {
            "@type": "Question",
            "name": "Can the bank auction my property if the account is NPA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if the loan is secured by property and classified as an NPA, the bank can issue a 60-day notice under the SARFAESI Act to take possession and auction the property."
            }
          },
          {
            "@type": "Question",
            "name": "How long does the bank take to update the account status after payment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As per RBI rules, once the full arrears are paid, the bank must upgrade the account from NPA to Standard immediately on the same day."
            }
          },
          {
            "@type": "Question",
            "name": "Are there any RBI guidelines on regularising NPA accounts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, the RBI strictly mandates that an NPA account can only be upgraded to standard if the entire arrears of interest and principal are paid by the borrower. No partial upgrades are permitted."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "name": "NPA Regularisation Legal & Financial Consultation",
        "description": "Expert assistance to help you negotiate penal charges and safely regularise your NPA account back to standard.",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoan"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1350"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rahul K."
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Saved my home from auction! They guided me on the exact arrears to pay and helped waive the bounce charges. Account was regularised instantly."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sanjay M."
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "My personal loan became an NPA and recovery agents were calling daily. Found out I just needed to pay the arrears correctly. Problem solved in a week."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya D."
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4",
              "bestRating": "5"
            },
            "reviewBody": "Very knowledgeable about RBI guidelines for NPA accounts. Prevented me from making a partial payment that wouldn't have helped."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Vikram S."
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Excellent service. Helped me understand the mathematical formula to clear my arrears and get the NPA tag removed from my car loan."
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
              Loan Regularisation Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              How to <span className="text-[#1F5EFF]">Regularise an Overdue Loan</span> Account (NPA to Standard)
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Has your loan been classified as a Non-Performing Asset (NPA)? Discover the exact mathematical formula to regularise your account back to 'Standard'.
            </p>
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Expert Help Now
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/all-queries" className="hover:text-[#1F5EFF] transition-colors">Loan Queries</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Regularise Overdue Loan Account</span>
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

          {/* Middle Article */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  Understanding NPA and Loan Regularisation
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  When you miss multiple Equated Monthly Installments (EMIs), usually for a continuous period of 90 days, banks and Non-Banking Financial Companies (NBFCs) classify your loan account as a Non-Performing Asset (NPA). Once this happens, the recovery process intensifies, and your CIBIL score takes a massive hit.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  However, an NPA classification is not the end of the road. You can <strong className="text-[#1F5EFF]">convert an NPA to a standard account</strong> by choosing to regularise your loan account. Regularisation essentially means bringing your overdue account back up to date by clearing all pending dues.
                </p>
              </div>
            </section>

            <section id="the-mathematical-formula" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Exact Mathematical Formula to Regularise
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Many borrowers mistakenly believe that paying just one EMI will remove the NPA tag. Under current RBI regulations, that is strictly incorrect. To <strong className="text-[#2E2E2E]">regularise your loan account</strong>, you must satisfy a specific mathematical formula to clear all arrears.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Total Arrears Required for Regularisation</h4>
                <p className="text-lg text-blue-900 mb-4">To effectively pay arrears to remove the NPA tag, your payment must equal:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-lg text-blue-900">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span>All principal EMIs currently overdue.</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg text-blue-900">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span>All accumulated overdue interest and delayed payment charges.</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg text-blue-900">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span>Any bounce charges (ECS/NACH bounce fees) applied to the account.</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg text-blue-900">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span>Legal notice charges or recovery fees added to your ledger.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="rbi-guidelines" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                RBI Guidelines on Upgrading NPA Accounts
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The Reserve Bank of India (RBI) has issued strict guidelines regarding the upgradation of loan accounts classified as NPAs. Understanding these rules is critical if you want to successfully convert an NPA to a standard account.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">No Partial Upgrades</h3>
                  <p className="text-gray-700">Paying partial arrears will not upgrade your account. The RBI mandates that the entire arrears of interest and principal must be paid for the account to be upgraded to 'Standard'.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Immediate Status Update</h3>
                  <p className="text-gray-700">Once the full arrears are cleared, banks are required to immediately upgrade the account status from NPA to Standard without any cooling period.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Impact on CIBIL</h3>
                  <p className="text-gray-700">After regularisation, your account will reflect as 'Standard' in your CIBIL report, though the historical delayed payment string (e.g., 90+ days late) will remain on record.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Stoppage of Recovery</h3>
                  <p className="text-gray-700">Regularising the account legally obligates the lender to immediately halt all SARFAESI Act proceedings and intense recovery actions.</p>
                </div>
              </div>
            </section>

            <section id="step-by-step-guide" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Step-by-Step Guide to Pay Arrears
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Follow this proven approach to accurately pay your arrears to remove the NPA tag and secure your asset.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Request a Foreclosure or Outstanding Letter</h3>
                    <p className="text-lg text-gray-700">Do not rely solely on your banking app or a verbal quote from a recovery agent. Visit the bank branch and formally request an updated statement showing the exact total overdue amount, including all penal charges, up to the current date.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Negotiate Penal Charges</h3>
                    <p className="text-lg text-gray-700">While you must pay the principal and standard interest, you can often negotiate the waiver of bounce charges and penal interest. Submit a written request to the branch manager citing financial hardship.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Make the Payment in a Single Tranche</h3>
                    <p className="text-lg text-gray-700">To trigger the automatic RBI upgradation rule, it is highly recommended to pay the entire negotiated arrears amount in a single, clear transaction (RTGS/NEFT/Demand Draft).</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Obtain the Regularisation Confirmation</h3>
                    <p className="text-lg text-gray-700">After the funds clear, immediately demand a written letter or email from the bank confirming that the arrears have been paid and the account has been upgraded from NPA to Standard.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="consequences-of-npa" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Consequences of Remaining in NPA
              </h2>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h3 className="text-xl font-black text-red-700 mb-3">What happens if you ignore the NPA status?</h3>
                <p className="text-lg text-red-900 mb-4">Failing to regularise your loan account can lead to severe legal and financial repercussions:</p>
                <ul className="list-disc pl-5 space-y-2 text-lg text-red-900">
                  <li><strong>SARFAESI Act Initiation:</strong> For secured loans, banks will issue a Section 13(2) notice giving you 60 days to pay the entire outstanding loan amount (not just arrears).</li>
                  <li><strong>Asset Auction:</strong> The bank can take physical possession of your property or vehicle and auction it to recover dues.</li>
                  <li><strong>Arbitration & Legal Suits:</strong> For unsecured loans, banks may initiate arbitration proceedings or file a civil suit for recovery.</li>
                  <li><strong>Permanent Credit Damage:</strong> Your CIBIL score will plummet, making it virtually impossible to secure credit in the future.</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">Pro Insight</h3>
                <p className="text-lg text-gray-700">
                  If you are entirely unable to gather the funds to regularise your loan account, you should proactively approach the bank for loan restructuring or explore a formal loan settlement. Ignoring the problem will only accelerate legal actions.
                </p>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Recent Success Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RK
                    </div>
                    <div className="flex text-yellow-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"My home loan became an NPA after 3 missed EMIs. The bank sent a possession notice. The experts guided me to negotiate the penal charges. I paid the exact arrears amount, and my account was regularised the next day, saving my home."</p>
                  <div className="flex gap-3">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase">Loan Amount: ₹45L</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">Settled Amount: ₹1.8L</span>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      SM
                    </div>
                    <div className="flex text-yellow-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"My personal loan became an NPA and recovery agents were calling daily. I thought paying one EMI would fix it. The advisors explained the correct RBI formula. I paid the full arrears, and the harassment stopped instantly."</p>
                  <div className="flex gap-3">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase">Loan Amount: ₹8L</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">Settled Amount: ₹75K</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  { q: "What does it mean to regularise a loan account?", a: "To regularise a loan account means to bring an overdue or Non-Performing Asset (NPA) account back to 'Standard' status by paying off all accumulated missed EMIs, overdue interest, and penal charges." },
                  { q: "How can I convert my NPA account back to standard?", a: "You can convert an NPA back to a standard account by paying the total arrears in full. Partial payments will not upgrade the account status under RBI guidelines." },
                  { q: "How much do I need to pay to remove the NPA tag?", a: "You must pay the sum of all overdue principal EMIs, accumulated interest, delayed payment charges, and any legal/bounce fees applied to your account." },
                  { q: "Can I regularise my account by paying just one EMI?", a: "No. Paying a single EMI when multiple are due will reduce your outstanding balance, but it will not remove the NPA tag. The entire arrears amount must be cleared." },
                  { q: "What happens if I don't pay the arrears on an NPA account?", a: "If you fail to pay the arrears, the bank can initiate legal recovery actions, such as sending a SARFAESI notice for secured loans or filing a civil suit for unsecured loans." },
                  { q: "Will my CIBIL score improve immediately after regularising the loan?", a: "Your account status will change to 'Standard', which halts further damage. However, the history of late payments (e.g., 90 days past due) will remain on your report, meaning your score will recover gradually over time." },
                  { q: "Is there a penalty for regularising an overdue account?", a: "Yes, you will have to pay the overdue interest and penal charges (such as cheque bounce fees) that have accrued during the default period. However, you can often negotiate with the bank to waive some of these charges." },
                  { q: "Can the bank auction my property if the account is NPA?", a: "Yes, if the loan is secured by property and classified as an NPA, the bank can issue a 60-day notice under the SARFAESI Act to take possession and auction the property." },
                  { q: "How long does the bank take to update the account status after payment?", a: "As per RBI rules, once the full arrears are paid, the bank must upgrade the account from NPA to Standard immediately on the same day." },
                  { q: "Are there any RBI guidelines on regularising NPA accounts?", a: "Yes, the RBI strictly mandates that an NPA account can only be upgraded to standard if the entire arrears of interest and principal are paid by the borrower. No partial upgrades are permitted." }
                ].map((faq, index) => (
                  <details key={index} name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                    <summary className="font-bold text-lg text-[#2E2E2E] list-none relative pr-8">
                      {faq.q}
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1F5EFF] text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                    </summary>
                    <div className="mt-4 text-gray-700 text-lg leading-relaxed pt-4 border-t border-gray-100">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black mb-6">Need Help Regularising Your NPA Account?</h3>
                <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
                  Don't let the bank auction your assets. Speak to our legal and financial experts to negotiate penalty waivers and safely convert your NPA to a standard account.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                  Book a Free Consultation
                </Link>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: This article provides general financial guidelines based on current RBI circulars regarding NPA regularisation. It does not constitute formal legal advice. For personalized assistance with loan accounts, please consult with a qualified financial advisor or legal professional.
              </p>
            </div>
          </article>

          {/* Right Sidebar (Context Cards) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-8">
              
              {/* Card 1 */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4">Stop Recovery Harassment</h3>
                  <p className="text-white/80 mb-6 text-sm">
                    Are recovery agents threatening you over an NPA account? Get immediate legal protection.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                    Get Expert Help
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Related Resources
                </h3>
                <div className="space-y-4">
                  <Link href="/loan-settlement-process-in-india" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    Loan Settlement Process
                  </Link>
                  <Link href="/how-to-stop-loan-recovery-harassment" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    Stop Recovery Agents
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    Reply to Legal Notice
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    RBI Recovery Rules
                  </Link>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
