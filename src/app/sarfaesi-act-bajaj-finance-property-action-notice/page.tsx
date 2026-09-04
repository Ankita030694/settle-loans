import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'SARFAESI Act: NBFC Property Action Notice Guide',
  description: 'Has an NBFC initiated property action under the SARFAESI Act? Learn about NBFC home loan defaults, symbolic possession, and how to secure a stay order.',
  alternates: {
    canonical: 'https://www.settleloans.in/sarfaesi-act-bajaj-finance-property-action-notice',
  },
};

const tocItems = [
  { id: 'introduction', title: 'Understanding the Notice' },
  { id: 'nbfc-vs-banks', title: 'Why NBFCs Act Faster' },
  { id: 'sarfaesi-timeline', title: 'The SARFAESI Timeline' },
  { id: 'symbolic-possession', title: 'Symbolic vs Physical Possession' },
  { id: 'legal-remedies', title: 'How to Secure a Stay Order' },
  { id: 'success-stories', title: 'Success Stories' },
  { id: 'faqs', title: 'Frequently Asked Questions' },
];

const faqs = [
  {
    question: "Can an NBFC take my property under the SARFAESI Act?",
    answer: "Yes, as a registered Non-Banking Financial Company (NBFC), they are authorized to invoke the SARFAESI Act to recover dues on secured loans without court intervention, provided the account has been classified as a Non-Performing Asset (NPA)."
  },
  {
    question: "What is a Section 13(2) Demand Notice?",
    answer: "Under Section 13(2) of the SARFAESI Act, the lender issues a demand notice giving the borrower 60 days to repay the outstanding dues in full. Failure to do so allows the lender to take further action."
  },
  {
    question: "What does symbolic possession by an NBFC mean?",
    answer: "Symbolic possession means the lender has assumed legal control of the property on paper under Section 13(4). You may still physically reside in the property, but you cannot sell or transfer it."
  },
  {
    question: "How long after symbolic possession can they take physical possession?",
    answer: "After taking symbolic possession, the lender must give a 30-day notice before proceeding to take physical possession by filing an application before the Chief Metropolitan Magistrate (CMM) or District Magistrate (DM)."
  },
  {
    question: "Can I stop the auction of my property by an NBFC?",
    answer: "Yes, you can challenge the SARFAESI proceedings by filing an application before the Debt Recovery Tribunal (DRT) under Section 17 of the Act. The DRT can grant a stay order if there are procedural irregularities."
  },
  {
    question: "How do NBFC home loan defaults differ from bank defaults?",
    answer: "While the legal framework (SARFAESI) is the same, NBFCs often have more aggressive recovery policies and faster internal processing times for issuing notices and initiating auction proceedings compared to traditional PSU banks."
  },
  {
    question: "What is a pre-auction notice?",
    answer: "A pre-auction or sale notice is issued granting the borrower a final 30 days to clear the dues before the property is publicly auctioned. This is published in at least two leading newspapers."
  },
  {
    question: "Can I settle my loan after the 13(2) notice is issued?",
    answer: "Yes. You can negotiate a One Time Settlement (OTS) or restructuring plan with the lender even after the notice is issued, provided the lender agrees to the terms before the auction is finalized."
  },
  {
    question: "What happens if the auctioned property sells for less than my loan amount?",
    answer: "If the sale proceeds do not cover your outstanding loan balance, the lender retains the right to file a separate legal claim against you to recover the remaining deficit amount."
  },
  {
    question: "Do I need a lawyer to reply to a SARFAESI notice?",
    answer: "Yes, it is highly recommended. The SARFAESI Act involves strict timelines and complex legal procedures. Drafting a reply under Section 13(3A) or approaching the DRT requires specialized legal expertise."
  }
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/sarfaesi-act-bajaj-finance-property-action-notice",
        "url": "https://www.settleloans.in/sarfaesi-act-bajaj-finance-property-action-notice",
        "name": "SARFAESI Act: NBFC Property Action Notice",
        "description": "Has an NBFC initiated property action under the SARFAESI Act? Learn about NBFC home loan defaults, symbolic possession, and how to secure a stay order."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.settleloans.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "SARFAESI Act: NBFC Notice",
            "item": "https://www.settleloans.in/sarfaesi-act-bajaj-finance-property-action-notice"
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "SARFAESI Act: NBFC Property Action Notice",
        "description": "Has an NBFC initiated property action under the SARFAESI Act? NBFCs act faster than banks. Learn how to secure a stay order today.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.settleloans.in/logo.png"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "Product",
        "name": "Legal Consultation for SARFAESI Notice",
        "description": "Expert legal assistance to counter SARFAESI notices issued by NBFCs and secure stay orders.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "124"
        },
        "review": [
          {
            "@type": "Review",
            "author": "Rajesh K.",
            "datePublished": "2023-11-15",
            "reviewBody": "Received a 13(2) notice from an NBFC. The legal team helped me secure a stay order from the DRT within weeks. Highly recommended.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": "Sunita M.",
            "datePublished": "2024-02-10",
            "reviewBody": "I was facing symbolic possession, but their experts negotiated an OTS that I could afford.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": "Amit P.",
            "datePublished": "2024-04-22",
            "reviewBody": "Very professional approach. They explained the SARFAESI timeline clearly and stopped the auction.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4.5" }
          },
          {
            "@type": "Review",
            "author": "Vikram S.",
            "datePublished": "2024-06-05",
            "reviewBody": "NBFCs are ruthless, but SettleLoans provided the precise legal shield we needed to save our family home.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Hero Section (Dark & Centered) */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Property Action Alert
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              NBFC <span className="text-[#1F5EFF]">SARFAESI Notice</span> Guide
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Has your NBFC initiated property action under the SARFAESI Act? NBFCs act faster than banks. Learn how to secure a stay order today.
            </p>
            <Link href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
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
              <Link href="/services" className="hover:text-[#1F5EFF] transition-colors">Legal Services</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">SARFAESI Act NBFC Notice</span>
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
          
          {/* Left Sidebar (TOC) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] sticky top-24 h-fit">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Middle Article Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  Understanding the SARFAESI Notice
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Receiving a property action notice from an NBFC can be a highly stressful experience. The <strong>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002</strong> empowers banks and registered NBFCs to auction residential or commercial properties to recover defaulted loan amounts without requiring court intervention.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  If you have defaulted on your home loan or loan against property (LAP), you may have received a Section 13(2) Demand Notice. Ignoring this notice is the biggest mistake a borrower can make, as it directly paves the way for the lender to seize your property.
                </p>
              </div>
            </section>

            <section id="nbfc-vs-banks" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Why NBFCs Act Faster Than Traditional Banks
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Many borrowers assume they have months or years to resolve a defaulted loan based on stories of traditional PSU bank timelines. However, a <strong>home loan default NBFC</strong> situation is entirely different.
              </p>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">
                  Key Differences in NBFC Recovery
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800"><strong>Aggressive Timelines:</strong> NBFCs initiate action exactly on the 91st day of default when the account turns NPA.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800"><strong>Streamlined Legal Teams:</strong> Unlike public banks with bureaucratic delays, NBFCs have dedicated, fast-acting legal panels.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800"><strong>Higher Stake in Liquidity:</strong> NBFCs rely heavily on steady cash flows and move swiftly to liquidate assets to maintain their capital adequacy.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="sarfaesi-timeline" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The SARFAESI Action Timeline
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Understanding the legal timeline is crucial for planning your defense. Once an account is classified as a Non-Performing Asset (NPA), the clock starts ticking rapidly.
              </p>

              <div className="space-y-12 my-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Section 13(2) Demand Notice</h3>
                    <p className="text-lg text-gray-700">The lender issues a demand notice giving you exactly 60 days to repay the entire outstanding principal and interest. <strong>You must file an objection under Section 13(3A) within this period.</strong></p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Section 13(4) Possession Notice</h3>
                    <p className="text-lg text-gray-700">If the 60 days pass without full payment or an accepted settlement, the NBFC will issue a possession notice, marking the beginning of <strong>symbolic possession</strong> proceedings.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Physical Possession via DM/CMM</h3>
                    <p className="text-lg text-gray-700">The lender applies to the District Magistrate (DM) or Chief Metropolitan Magistrate (CMM) under Section 14 to take physical control of the property using police assistance.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="symbolic-possession" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Symbolic vs. Physical Possession
              </h2>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  A common point of confusion is the difference between symbolic and physical possession. 
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  <strong>Symbolic Possession:</strong> Legal ownership rights are temporarily transferred to the NBFC. A notice is affixed to your property, and a publication is made in two newspapers. You can still live in the house, but you cannot sell or rent it out.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Critical Warning</h4>
                <p className="text-lg text-red-900">
                  Do not wait for physical possession proceedings to begin before taking legal action. Once the CMM/DM order is passed under Section 14, obtaining a stay order becomes significantly more difficult and expensive.
                </p>
              </div>
            </section>

            <section id="legal-remedies" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Secure a Stay Order
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The SARFAESI Act provides specific legal remedies for borrowers to protect their properties from unlawful or hasty auctions by NBFCs.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Filing SA under Section 17</h4>
                  <p className="text-gray-700">
                    You can file a Securitisation Application (SA) before the Debt Recovery Tribunal (DRT) challenging the actions taken by the NBFC under Section 13(4).
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Procedural Irregularities</h4>
                  <p className="text-gray-700">
                    The DRT often grants stay orders if the NBFC failed to follow strict procedures, such as improper NPA classification or flawed valuation reports.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">One Time Settlement (OTS)</h4>
                  <p className="text-gray-700">
                    Concurrently negotiating an OTS can halt legal proceedings. Courts view proactive settlement efforts favorably when considering stay applications.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">High Court Writ Petitions</h4>
                  <p className="text-gray-700">
                    In exceptional cases involving severe rights violations or lack of alternate remedies, a Writ Petition under Article 226 may be filed in the High Court.
                  </p>
                </div>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Recent Success Stories
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                See how we've helped borrowers successfully navigate aggressive SARFAESI proceedings initiated by NBFCs.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RK
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"Received a 13(2) notice from an NBFC. The legal team helped me secure a stay order from the DRT within weeks. Highly recommended."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase">Loan Amount: ₹65L</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">DRT Stay Granted</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      SM
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"I was facing symbolic possession by an NBFC, but their experts negotiated an OTS that I could afford before the auction."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase">Loan Amount: ₹1.2Cr</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">Settled: ₹72L</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                    <summary className="text-lg font-bold text-[#2E2E2E] list-none flex justify-between items-center">
                      {faq.question}
                      <span className="text-[#1F5EFF] text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-relaxed pt-4 border-t border-gray-100">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-6">Protect Your Property from Auction</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Has your NBFC initiated property action under the SARFAESI Act? NBFCs act faster than banks. Learn how to secure a stay order today.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input 
                    type="text" 
                    placeholder="Enter Phone Number" 
                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#1F5EFF]"
                  />
                  <button type="submit" className="bg-[#1F5EFF] hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-colors whitespace-nowrap">
                    Get Free Consultation
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational purposes only and does not constitute formal legal advice. Please consult with a qualified advocate for advice tailored to your specific situation regarding SARFAESI proceedings.
              </p>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] sticky top-24 h-fit space-y-8">
            
            <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-4">Received a 13(2) Notice?</h4>
                <p className="text-gray-300 mb-6 text-sm">You only have 60 days to respond. Don't risk symbolic possession.</p>
                <Link href="#contact" className="inline-block w-full bg-[#1F5EFF] hover:bg-white hover:text-[#1F5EFF] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-sm">
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
                  <Link href="/npa-account-regularisation" className="flex items-center text-gray-700 hover:text-[#1F5EFF] text-sm font-medium group transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    NPA Account Regularisation
                  </Link>
                </li>
                <li>
                  <Link href="/drt-stay-order-process" className="flex items-center text-gray-700 hover:text-[#1F5EFF] text-sm font-medium group transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    DRT Stay Order Process
                  </Link>
                </li>
                <li>
                  <Link href="/home-loan-one-time-settlement" className="flex items-center text-gray-700 hover:text-[#1F5EFF] text-sm font-medium group transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    Home Loan OTS Guide
                  </Link>
                </li>
                <li>
                  <Link href="/symbolic-vs-physical-possession" className="flex items-center text-gray-700 hover:text-[#1F5EFF] text-sm font-medium group transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    Symbolic vs Physical Possession
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
