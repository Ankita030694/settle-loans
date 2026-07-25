import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Loan Auction Notice: Stop, Postpone, or Cancel Options",
  description: "Auction date announced? You still have options. Discover the 3 legal methods to postpone, cancel, or indefinitely delay a bank auction under SARFAESI.",
  alternates: {
    canonical: "https://www.settleloan.in/loan-auction-notice-stop-postpone-cancel-options",
  },
};

const tocItems = [
  { id: 'urgent-received-auction-notice', title: 'Urgent: Received an Auction Notice?' },
  { id: 'legal-steps-to-stop', title: 'Immediate Steps to Stop Bank Auction' },
  { id: 'challenging-sarfaesi-action', title: 'Challenging Action in DRT' },
  { id: 'negotiating-ots', title: 'Negotiating an OTS' },
  { id: 'role-of-high-court', title: 'The Role of High Court in SARFAESI' },
  { id: 'protect-guarantors', title: 'Protecting Guarantors & Co-Borrowers' },
  { id: 'common-mistakes', title: 'Crucial Mistakes to Avoid' },
  { id: 'success-stories', title: 'Success Stories & Reviews' },
  { id: 'faqs', title: 'Frequently Asked Questions' },
];

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Loan Auction Notice: Stop, Postpone, or Cancel Options",
      "description": "Discover the 3 legal methods to postpone, cancel, or indefinitely delay a bank auction under SARFAESI.",
      "url": "https://www.settleloan.in/loan-auction-notice-stop-postpone-cancel-options"
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
          "name": "Loan Relief",
          "item": "https://www.settleloan.in/loan-relief"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Loan Auction Notice",
          "item": "https://www.settleloan.in/loan-auction-notice-stop-postpone-cancel-options"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Loan Auction Notice: Stop, Postpone, or Cancel Options",
      "description": "Auction date announced? You still have options. Discover the 3 legal methods to postpone, cancel, or indefinitely delay a bank auction.",
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
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I stop a bank auction under SARFAESI after the date is announced?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can legally stop or postpone an auction even after the date is announced by filing an application in the Debt Recovery Tribunal (DRT) challenging the bank's procedure, or by negotiating an OTS."
          }
        },
        {
          "@type": "Question",
          "name": "What is the fastest way to cancel a SARFAESI auction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The fastest way to cancel an auction is to secure an interim stay order from the DRT by highlighting illegalities in the notice or by paying a portion of the overdue amount to the bank."
          }
        },
        {
          "@type": "Question",
          "name": "Does an OTS proposal automatically stop the auction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, merely submitting an OTS proposal does not automatically stop the auction. The bank must accept the proposal and issue a formal letter stating the auction is on hold."
          }
        },
        {
          "@type": "Question",
          "name": "Can the bank sell my property below the reserve price?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally, banks cannot sell the property below the reserve price without the borrower's consent. If they attempt to do so, it is a strong ground for a DRT stay."
          }
        },
        {
          "@type": "Question",
          "name": "How many days' notice must the bank give before an auction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the SARFAESI Act, the bank must give a 30-day notice for the first auction attempt. For subsequent attempts, a 15-day notice is required."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if there are no bidders in the auction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If no bidders participate, the auction fails. The bank will then have to issue a fresh notice and conduct another auction at a later date, giving you more time."
          }
        },
        {
          "@type": "Question",
          "name": "Can I buy back my own property in the auction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As a defaulter, you generally cannot directly participate in the auction. However, a friend or relative might bid, though banks scrutinize such transactions closely."
          }
        },
        {
          "@type": "Question",
          "name": "What if the bank did not publish the notice in two newspapers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The SARFAESI rules strictly require the auction notice to be published in two leading newspapers (one in the local language). Failure to do so is a direct violation, and the DRT will likely cancel the auction."
          }
        },
        {
          "@type": "Question",
          "name": "Can I delay property auction legal steps by filing a writ in the High Court?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "High Courts generally redirect SARFAESI matters to the DRT. Writ petitions are only entertained in exceptional cases where fundamental rights are violated or the DRT is non-functional."
          }
        },
        {
          "@type": "Question",
          "name": "Will paying the overdue EMI stop the bank auction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Once an account is NPA and SARFAESI is initiated, paying just the EMI might not stop the auction. You usually need to pay the entire overdue arrears or negotiate a settlement to halt the proceedings."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Legal Auction Defense Services",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128"
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
            "name": "Rajat V."
          },
          "reviewBody": "They helped me stop the bank auction of my home just 3 days before the date by securing a stay from DRT. Highly recommend!"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Meera S."
          },
          "reviewBody": "Expert guidance on how to cancel SARFAESI auction. We negotiated an OTS and saved our commercial property."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4"
          },
          "author": {
            "@type": "Person",
            "name": "Vikram K."
          },
          "reviewBody": "The strategy to delay property auction legal steps worked perfectly. It gave us the 6 months we needed to arrange funds."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Anita P."
          },
          "reviewBody": "I thought I lost my house, but their lawyers found a flaw in the bank's notice and got the auction canceled immediately."
        }
      ]
    }
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
              Urgent Legal Defense
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Loan Auction Notice: <span className="text-[#1F5EFF]">Stop, Postpone, or Cancel</span> Options
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Auction date announced? You still have options. Discover the 3 legal methods to postpone, cancel, or indefinitely delay a bank auction.
            </p>
            <Link href="#consultation" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Immediate Legal Help
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/loan-relief" className="hover:text-[#1F5EFF] transition-colors">Loan Relief</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Auction Notice Options</span>
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
            
            {/* Boxed Intro */}
            <section id="urgent-received-auction-notice" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">Urgent: Received a Bank Auction Notice?</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Receiving an auction notice from a bank under the SARFAESI Act is incredibly stressful, but it is not the end of the road. Even if the bank has announced a specific date to auction your residential or commercial property, the law provides borrowers with powerful tools to <strong>stop bank auction DRT</strong> proceedings, negotiate terms, and protect their assets. 
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Banks often make procedural errors or act in haste. By leveraging these legal loopholes, you can secure an immediate stay order, effectively cancelling or delaying the auction until a fair resolution is reached.
                </p>
              </div>
            </section>

            <section id="legal-steps-to-stop" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Immediate Steps to Stop Bank Auction</h2>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Critical Defense Strategies</h4>
                <p className="text-lg leading-relaxed mb-6 text-blue-900">
                  If the auction date is approaching within weeks or days, you need to execute rapid, legally sound strategies to halt the process.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-blue-900">File a Securitisation Application (SA) in the DRT under Section 17.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-blue-900">Submit a formal OTS (One Time Settlement) proposal with upfront deposit.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-blue-900">Identify procedural violations in the bank's 30-day or 15-day notice.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Scrutinize the Auction Notice</h3>
                    <p className="text-lg leading-relaxed text-gray-700">The bank must strictly follow Rule 8 and Rule 9 of the Security Interest (Enforcement) Rules. They must provide a clear 30-day notice, publish it in two leading newspapers, and affix it to the property. Any failure here is grounds to cancel the auction.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Challenge the Reserve Price</h3>
                    <p className="text-lg leading-relaxed text-gray-700">Banks frequently undervalue properties to sell them quickly. You can obtain an independent valuation report from an approved valuer and challenge the bank's reserve price in DRT, forcing a postponement.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Seek an Interim Stay from DRT</h3>
                    <p className="text-lg leading-relaxed text-gray-700">By filing an SA before the auction date, your legal counsel can request the DRT for an interim stay. The DRT may require you to deposit a percentage of the due amount to demonstrate bona fide intent.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="challenging-sarfaesi-action" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Challenging SARFAESI Action in DRT</h2>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed text-gray-700 mb-0">
                  The Debt Recovery Tribunal (DRT) is your primary battleground to <strong>cancel SARFAESI auction</strong> attempts. Under Section 17 of the Act, any person aggrieved by the measures taken by the secured creditor (bank) can file an application. If the DRT finds that the bank did not follow the provisions of the Act, it can restore possession of the property to you.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Notice 13(2) Errors</h4>
                  <p className="text-gray-700">If the initial 60-day demand notice had calculation errors or was not properly served to all co-borrowers and guarantors, the entire SARFAESI action can be quashed.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Notice 13(4) Flaws</h4>
                  <p className="text-gray-700">Taking symbolic or physical possession requires panchnama and proper inventory. Lack of witness signatures or improper procedure nullifies this step.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Wrongful NPA Classification</h4>
                  <p className="text-gray-700">If your account was classified as NPA contrary to RBI guidelines (e.g., ignoring moratorium periods), the foundation of the auction collapses.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Valuation Disputes</h4>
                  <p className="text-gray-700">Banks must consult the borrower regarding property valuation. Bypassing this step to set an artificially low reserve price is illegal.</p>
                </div>
              </div>
            </section>

            <section id="negotiating-ots" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Negotiating an OTS (One Time Settlement)</h2>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-4">Warning: Do Not Rely on Verbal Promises</h4>
                <p className="text-lg leading-relaxed text-red-900 mb-0">
                  Many bank managers will verbally assure you that the auction is cancelled because you are discussing an OTS. Do not believe this. Unless you have a written letter from the bank explicitly stating the auction is deferred, the bank's recovery agents will proceed with the sale.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                To <strong>delay property auction legal steps</strong> effectively while arranging funds, submit a formal One Time Settlement proposal. The key to making an OTS work at this late stage is to show immediate financial commitment. 
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Accompany your proposal with an upfront token payment (e.g., 5-10% of the offer amount) via Demand Draft. Once the bank accepts the DD, they are legally bound to consider the proposal, making it extremely difficult for them to proceed with the auction on the scheduled date without facing DRT reprimands.
              </p>
            </section>

            <section id="role-of-high-court" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Role of the High Court in SARFAESI Matters</h2>
              <p className="text-lg leading-relaxed mb-6">
                Many borrowers wonder if they can bypass the Debt Recovery Tribunal (DRT) and directly file a writ petition in the High Court under Article 226 of the Constitution to stop a bank auction. As a general rule established by the Supreme Court of India, High Courts are highly reluctant to entertain SARFAESI matters because the SARFAESI Act already provides a dedicated alternative statutory remedy (the DRT). 
              </p>
              <p className="text-lg leading-relaxed mb-6">
                However, there are rare and specific exceptions where filing a writ petition might effectively delay property auction legal steps. If the actions of the bank are entirely without jurisdiction, or if there is a blatant violation of fundamental rights and principles of natural justice (for example, proceeding with an auction without serving any notice whatsoever), the High Court may intervene. Additionally, if the local DRT is non-functional or lacks a presiding officer, making it impossible to seek an urgent stay, the High Court can step in to provide immediate relief. 
              </p>
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">When to Consider the High Court</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-blue-900">Total failure of the bank to issue mandatory 13(2) or 13(4) notices.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-blue-900">The DRT bench in your jurisdiction is vacant and you need an emergency stay.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-blue-900">Blatant fraud committed by bank officials acting entirely outside the SARFAESI framework.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="protect-guarantors" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Protecting Guarantors and Co-Borrowers</h2>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed text-gray-700 mb-0">
                  When a property is listed for a bank auction, the repercussions are not limited strictly to the primary borrower. Co-borrowers and guarantors who pledged their own properties or signed personal guarantee documents are equally vulnerable to aggressive recovery actions under the SARFAESI Act.
                </p>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Legally, a bank has the right to proceed against the guarantor’s assets simultaneously with the primary borrower's assets. Therefore, any strategy designed to cancel a SARFAESI auction must comprehensively include protections for guarantors. If a notice under Section 13(2) is not properly served to the guarantor at their registered address, the guarantor themselves can file a strong independent application in the DRT.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Guarantors must proactively communicate with the bank and, if necessary, the DRT to establish that they were kept in the dark regarding the account's deterioration or that their liability should be limited. In many successful cases, separating the guarantor's defense from the main borrower's defense complicates the bank's litigation, forcing them to postpone the auction to reassess their legal standing.
              </p>
            </section>

            <section id="common-mistakes" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Crucial Mistakes to Avoid After Receiving Notice</h2>
              <p className="text-lg leading-relaxed mb-6">
                Panic often leads borrowers to make critical errors that severely weaken their legal position. When fighting to save your property, avoiding these common pitfalls is just as important as executing the right legal maneuvers.
              </p>
              
              <div className="space-y-12 mt-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Ignoring Bank Communications</h3>
                    <p className="text-lg leading-relaxed text-gray-700">Refusing to accept delivery of the auction notice or ignoring bank letters does not stop the process. The law considers properly dispatched notices as "deemed served." Always accept the notice, note the date of receipt, and immediately consult a legal professional.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Attempting to Transfer the Property</h3>
                    <p className="text-lg leading-relaxed text-gray-700">Once an account becomes an NPA and the Section 13(2) notice is issued, any attempt to sell, gift, or transfer the mortgaged property without the bank's written consent is strictly illegal under Section 13(13) of the SARFAESI Act. Such transfers are void and can lead to criminal charges.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Paying Fraudulent "Settlement Agents"</h3>
                    <p className="text-lg leading-relaxed text-gray-700">Desperate borrowers often fall prey to unauthorized agents promising guaranteed auction cancellations for a huge upfront cash fee. Only deal directly with the bank for OTS proposals or use certified, practicing DRT advocates for tribunal representation.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Success Stories: Auctions Stopped</h2>
              <div className="grid md:grid-cols-2 gap-6">
                
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RV
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Rajat V.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 line-clamp-3">"They helped me stop the bank auction of my home just 3 days before the date by securing a stay from DRT. Found errors in the newspaper publication!"</p>
                  <div className="flex gap-2 text-xs font-bold mt-auto">
                    <span className="bg-red-100 text-red-700 py-1 px-3 rounded-full">Loan: ₹1.2 Cr</span>
                    <span className="bg-green-100 text-green-700 py-1 px-3 rounded-full">Auction Halted</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      MS
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Meera S.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 line-clamp-3">"Expert guidance. The strategy to delay property auction legal steps worked perfectly. We filed an OTS and saved our commercial property."</p>
                  <div className="flex gap-2 text-xs font-bold mt-auto">
                    <span className="bg-red-100 text-red-700 py-1 px-3 rounded-full">Loan: ₹85 L</span>
                    <span className="bg-green-100 text-green-700 py-1 px-3 rounded-full">OTS Accepted</span>
                  </div>
                </div>

              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    Can I stop a bank auction under SARFAESI after the date is announced?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
                    Yes, you can legally stop or postpone an auction even after the date is announced by filing an application in the Debt Recovery Tribunal (DRT) challenging the bank's procedure, or by negotiating an OTS with a token deposit.
                  </div>
                </details>
                
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    What is the fastest way to cancel a SARFAESI auction?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
                    The fastest way to cancel an auction is to secure an interim stay order from the DRT by highlighting illegalities in the notice, or by paying a portion of the overdue amount to demonstrate bona fide intent.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    Does an OTS proposal automatically stop the auction?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
                    No, merely submitting an OTS proposal does not automatically stop the auction. The bank must accept the proposal and issue a formal letter stating the auction is on hold. Never rely purely on verbal assurances.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    Can the bank sell my property below the reserve price?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
                    Generally, banks cannot sell the property below the reserve price without the borrower's written consent. If they attempt to do so, it is a strong ground for obtaining a DRT stay.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    How many days' notice must the bank give before an auction?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
                    Under the SARFAESI Act, the bank must give a 30-day notice for the first auction attempt. For any subsequent attempts, a minimum 15-day notice is required.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    What happens if there are no bidders in the auction?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
                    If no bidders participate, the auction fails. The bank will then have to issue a fresh notice and conduct another auction at a later date, giving you more crucial time to arrange funds or negotiate.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    Can I buy back my own property in the auction?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
                    As a defaulter, you generally cannot directly participate in the auction. However, a friend or relative might bid, though banks scrutinize such transactions closely.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    What if the bank did not publish the notice in two newspapers?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
                    The SARFAESI rules strictly require the auction notice to be published in two leading newspapers (one in the local language). Failure to do so is a direct violation, and the DRT will likely cancel the auction.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    Can I delay property auction legal steps by filing a writ in the High Court?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
                    High Courts generally redirect SARFAESI matters to the DRT. Writ petitions are only entertained in exceptional cases where fundamental rights are violated or the DRT is non-functional.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    Will paying the overdue EMI stop the bank auction?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed">
                    Once an account is classified as NPA and SARFAESI is initiated, paying just the EMI might not stop the auction. You usually need to pay the entire overdue arrears or negotiate a settlement to halt the proceedings.
                  </div>
                </details>
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div id="consultation" className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black mb-6">Auction Date Approaching Fast?</h3>
                <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
                  Don't lose your property without a fight. Our expert SARFAESI lawyers can analyze your notice for fatal errors and move DRT immediately for a stay order.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold text-xl py-5 px-12 rounded-xl hover:scale-105 transition-transform shadow-2xl">
                  Consult a DRT Expert Now
                </Link>
                <p className="mt-6 text-sm text-gray-400">Strictly Confidential • Free Initial Notice Assessment</p>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational purposes regarding SARFAESI laws and DRT proceedings and does not constitute formal legal counsel. Always consult a qualified advocate for your specific auction case.
              </p>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-4 leading-tight">Stop Your Property Auction</h4>
                  <p className="text-sm text-gray-300 mb-6">
                    Our legal experts can find loopholes in the bank's SARFAESI notice to secure a DRT stay.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
                    Get Legal Help
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Legal Resources
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/sarfaesi-act-rules" className="text-gray-700 hover:text-[#1F5EFF] font-medium flex items-center group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      SARFAESI Act Rule 8 & 9
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-file-sa-in-drt" className="text-gray-700 hover:text-[#1F5EFF] font-medium flex items-center group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      How to File SA in DRT
                    </Link>
                  </li>
                  <li>
                    <Link href="/bank-ots-settlement-process" className="text-gray-700 hover:text-[#1F5EFF] font-medium flex items-center group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Bank OTS Settlement Process
                    </Link>
                  </li>
                  <li>
                    <Link href="/illegal-possession-by-bank" className="text-gray-700 hover:text-[#1F5EFF] font-medium flex items-center group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Illegal Possession by Banks
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
