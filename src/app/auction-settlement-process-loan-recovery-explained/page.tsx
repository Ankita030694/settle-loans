import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Property Auction Settlement Process & Loan Recovery Rules Explained",
  description: "Is the bank threatening to auction your property? Learn the strict legal DRT auction settlement process and discover how to stop bank auction loan recovery.",
  alternates: {
    canonical: "https://settleloans.in/auction-settlement-process-loan-recovery-explained",
  },
};

export default function AuctionSettlementProcessPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/auction-settlement-process-loan-recovery-explained#webpage",
        "url": "https://settleloans.in/auction-settlement-process-loan-recovery-explained",
        "name": "Property Auction Settlement Process & Loan Recovery Rules Explained",
        "description": "Understand the strict legal auction process and how you can stop bank auction loan recovery under DRT rules.",
        "breadcrumb": { "@id": "https://settleloans.in/auction-settlement-process-loan-recovery-explained#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/auction-settlement-process-loan-recovery-explained#breadcrumb",
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
            "name": "Auction Settlement Process",
            "item": "https://settleloans.in/auction-settlement-process-loan-recovery-explained"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/auction-settlement-process-loan-recovery-explained#article",
        "headline": "Property Auction Settlement Process & Loan Recovery Rules Explained",
        "description": "Is the bank threatening to auction your property? Understand the strict legal auction process and how you can stop it.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Legal Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-07-23",
        "dateModified": "2024-07-23",
        "mainEntityOfPage": { "@id": "https://settleloans.in/auction-settlement-process-loan-recovery-explained#webpage" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/auction-settlement-process-loan-recovery-explained#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the property auction settlement process under SARFAESI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The SARFAESI Act allows banks to auction properties of defaulting borrowers without court intervention, provided they issue mandatory 60-day and 30-day notices. Borrowers can initiate a settlement process any time before the final sale is concluded."
            }
          },
          {
            "@type": "Question",
            "name": "Can I stop a bank auction if I have received an auction notice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can stop a bank auction by paying the outstanding dues, reaching a One-Time Settlement (OTS) with the bank, or obtaining a stay order from the Debt Recovery Tribunal (DRT) if there are procedural lapses by the bank."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if my property is auctioned for less than the loan amount?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If the auction amount does not cover your entire loan balance, the bank retains the right to file a recovery suit in the DRT for the remaining deficit amount."
            }
          },
          {
            "@type": "Question",
            "name": "How much time does the bank give before auctioning property?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The bank must issue a 60-day demand notice under Section 13(2). If unpaid, they take symbolic possession and issue a 30-day sale notice before conducting the actual auction."
            }
          },
          {
            "@type": "Question",
            "name": "Can the DRT stop the bank from auctioning my home?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if you file a Securitization Application (SA) under Section 17 of the SARFAESI Act and prove the bank violated mandatory procedures or undervalued the property, the DRT can grant a stay."
            }
          },
          {
            "@type": "Question",
            "name": "Is a settlement possible after an auction notice is published?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, courts have ruled that borrowers have the right to redeem the property by paying the dues or agreeing to a settlement right up until the sale certificate is issued to a successful bidder."
            }
          },
          {
            "@type": "Question",
            "name": "What is a symbolic possession vs. physical possession?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Symbolic possession means the bank has legal control on paper but you still live in the house. Physical possession means the bank physically evicts you with the help of a District Magistrate to sell the property."
            }
          },
          {
            "@type": "Question",
            "name": "Do I have the right to challenge a property undervaluation by the bank?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, banks are legally required to obtain a fair valuation from an approved valuer. If the reserve price is set too low, you can challenge it in the DRT."
            }
          },
          {
            "@type": "Question",
            "name": "Can I buy my own property back in the auction?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Directly participating in the auction as a defaulting borrower is generally not permitted, but you have the superior Right of Redemption to pay the dues and cancel the auction."
            }
          },
          {
            "@type": "Question",
            "name": "What role does the Debt Recovery Tribunal play in auctions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The DRT acts as the appellate authority where borrowers can file grievances against illegal actions, procedural flaws, or unfair practices by banks during the loan recovery and auction process."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/auction-settlement-process-loan-recovery-explained#product",
        "name": "Anti-Auction & DRT Legal Intervention",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert legal services to halt bank auctions, secure DRT stay orders, and negotiate favorable settlements to save your property.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1045",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh M." },
            "datePublished": "2024-01-12",
            "reviewBody": "My house was listed for auction with a 30-day notice. SettleLoans stepped in, found procedural flaws, and got a stay from the DRT. It gave me time to arrange funds and save my home.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Meera S." },
            "datePublished": "2024-02-05",
            "reviewBody": "The bank grossly undervalued my property to sell it to their contacts. The legal team challenged the valuation and forced the bank to the settlement table.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anil K." },
            "datePublished": "2024-03-22",
            "reviewBody": "I thought I lost everything when the symbolic possession happened. Thanks to their rapid legal intervention, we negotiated an OTS and the auction was cancelled.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram D." },
            "datePublished": "2024-04-18",
            "reviewBody": "Professional and fast. They know the SARFAESI rules inside out and used them to protect my rights when the recovery agents were harassing us.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
             "@type": "Review",
             "author": { "@type": "Person", "name": "Sunita P." },
             "datePublished": "2024-05-30",
             "reviewBody": "They explained the entire DRT process clearly and handled everything. We settled for a reasonable amount and the bank withdrew the auction notice.",
             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: 'intro', title: 'The Threat of Property Auction' },
    { id: 'sarfaesi-process', title: 'The Legal Auction Process Explained' },
    { id: 'stop-auction', title: 'How to Stop a Bank Auction' },
    { id: 'drt-role', title: 'The Role of the DRT' },
    { id: 'settlement', title: 'Negotiating a Settlement' },
    { id: 'success-stories', title: 'Success Stories: Homes Saved' },
    { id: 'faqs', title: 'Frequently Asked Questions' }
  ];

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
              SARFAESI & DRT Legal Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Property Auction Settlement Process & <span className="text-[#1F5EFF]">Loan Recovery</span> Explained
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Is the bank threatening to auction your property? Understand the strict legal auction process and how you can stop it.
            </p>
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Consult a DRT Expert Now
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Auction Settlement Process</span>
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
          
          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Column: Article */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="intro" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Threat of Property Auction
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-800">
                  Receiving an auction notice from your bank can be one of the most stressful experiences a homeowner can face. The fear of losing a home you have invested your life savings into is paralyzing. However, a bank cannot simply show up and take your house overnight. 
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-800">
                  The property auction settlement process is governed by strict laws, primarily the <strong>SARFAESI Act</strong>. Banks must follow a rigid procedural timeline. Any deviation from these rules by the bank provides a legal loophole that borrowers can exploit to stop the auction, secure a stay order from the DRT, and negotiate a favorable settlement.
                </p>
              </div>
            </section>

            <section id="sarfaesi-process" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Legal Auction Process Explained
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Under the SARFAESI Act, banks have the authority to recover bad loans by auctioning the mortgaged property without dragging the matter through civil courts. However, they must follow a specific sequence of actions.
              </p>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">NPA Classification</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Your loan account is classified as a Non-Performing Asset (NPA) if you fail to pay your EMI for 90 consecutive days. This triggers the beginning of the legal recovery process.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">60-Day Demand Notice (Section 13(2))</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      The bank issues a legal demand notice under Section 13(2) of the SARFAESI Act, giving you 60 days to clear the outstanding dues. You have the right to file an objection to this notice within 15 days, which the bank must officially reply to.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Symbolic Possession (Section 13(4))</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      If the dues are not paid after 60 days, the bank issues a possession notice under Section 13(4). This is usually "symbolic possession," meaning they legally control the property, but you still physically reside there. They will publish this notice in two leading newspapers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">30-Day Sale Notice</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Before auctioning the property, the bank must provide a mandatory 30-day (or 15-day in some subsequent auctions) sale notice. This notice details the reserve price, earnest money deposit, and the date of the auction.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="stop-auction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Stop a Bank Auction
              </h2>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Your Legal Right of Redemption</h4>
                <p className="text-lg leading-relaxed text-blue-900 mb-4">
                  Indian law provides a "Right of Redemption" which means a borrower can save their property by paying the dues or negotiating a settlement right up to the moment the bank issues the final sale certificate to a buyer.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-blue-800">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0 mr-3"></div>
                    <span>You can propose a One-Time Settlement (OTS) even after receiving a sale notice.</span>
                  </li>
                  <li className="flex items-start text-blue-800">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0 mr-3"></div>
                    <span>You can challenge the reserve price if the bank is undervaluing your property.</span>
                  </li>
                  <li className="flex items-start text-blue-800">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0 mr-3"></div>
                    <span>You can file a Securitization Application in the DRT to obtain a stay order.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">Common Procedural Flaws by Banks</h3>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Banks often rush the process and make procedural errors. If your legal counsel identifies these, you can get the auction stayed in the DRT:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                  <li>Failure to properly deliver the 60-day demand notice.</li>
                  <li>Not replying to the borrower's objection within 15 days.</li>
                  <li>Failing to publish possession or sale notices in required local newspapers.</li>
                  <li>Gross undervaluation of the property below market rates without proper independent valuation.</li>
                  <li>Errors in calculating the outstanding debt amount.</li>
                </ul>
              </div>
            </section>

            <section id="drt-role" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Role of the DRT
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The Debt Recovery Tribunal (DRT) is a specialized quasi-judicial body created to handle debt recovery cases. If a bank violates SARFAESI guidelines, civil courts generally cannot intervene. The DRT is your legal battleground.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Securitization Application (SA)</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Under Section 17 of SARFAESI, you can file an SA in the DRT challenging the bank's actions. This is your primary weapon to halt an illegal auction.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Obtaining a Stay Order</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    If the DRT finds prima facie evidence that the bank erred in its procedure, it will issue a stay order, immediately freezing the auction process.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Condition of Pre-Deposit</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    To show bona fide intent, the DRT may ask the borrower to deposit a percentage of the dues (often 10% to 25%) to grant the stay order.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Challenging Valuation</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The DRT can order a fresh valuation if it is proven that the bank intentionally suppressed the property's market value to sell it cheaply.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-bold text-red-700 mb-3">Time is Critical (45 Days)</h4>
                <p className="text-lg leading-relaxed text-red-900">
                  You only have exactly 45 days from the date the bank takes action (such as issuing a possession notice) to file your Securitization Application in the DRT. Do not wait for the auction date to approach before consulting a lawyer.
                </p>
              </div>
            </section>

            <section id="settlement" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Negotiating a Settlement
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Banks generally prefer settlements over auctions because auctions are tedious, legally risky, and often fail to find buyers. An auction notice is frequently used as a pressure tactic to force borrowers to the table.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Once you secure a stay from the DRT, the power dynamic shifts. The bank realizes they are facing a protracted legal battle. This is the optimal time to negotiate a One-Time Settlement (OTS). With the right legal representation, you can often settle for a significantly reduced amount and have your loan closed and property released.
              </p>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Success Stories: Homes Saved
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Story 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-lg transition-colors">
                      RM
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Rajesh M.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "My house was listed for auction with a 30-day notice. The legal team stepped in, found procedural flaws, and got a stay from the DRT. It gave me time to arrange funds."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Dues: ₹65 Lakhs</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Settled: ₹40 Lakhs</span>
                  </div>
                </div>

                {/* Story 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-lg transition-colors">
                      MS
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Meera S.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "The bank grossly undervalued my property to sell it to their contacts. We challenged the valuation in the DRT and forced the bank to cancel the sale."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Dues: ₹1.2 Cr</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Status: Auction Stayed</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {jsonLd["@graph"].find(item => item["@type"] === "FAQPage")?.mainEntity?.map((faq: any, index: number) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">{faq.name}</h4>
                    <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <h3 className="text-3xl font-black mb-6 relative z-10">Stop the Auction Before It's Too Late</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Is the bank threatening to auction your property? Understand the strict legal auction process and how you can stop it with expert DRT intervention.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Talk to an Expert Today
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The legal information provided is for educational purposes and should not be construed as formal legal advice. Always consult with a practicing advocate regarding specific facts of your case.
              </p>
            </div>

          </article>

          {/* Right Column: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">Received an Auction Notice?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  You only have 45 days to file an appeal in the DRT. Act immediately to save your property.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] w-full py-3 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors relative z-10">
                  Get Legal Help
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Legal Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/understanding-sarfaesi-act-rules" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      SARFAESI Act Explained
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-file-case-in-drt" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      How to Approach the DRT
                    </Link>
                  </li>
                  <li>
                    <Link href="/one-time-settlement-process-for-loans" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      One Time Settlement (OTS)
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
