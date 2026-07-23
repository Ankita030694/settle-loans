import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Missed Car Loan EMI More Than 90 Days? RBI Rules on Vehicle Seizure",
  description: "Have you missed your car loan EMI for more than 90 days? Learn about RBI vehicle seizure rules, auto loan default consequences, and how to stop illegal towing.",
  alternates: {
    canonical: "https://example.com/missed-car-loan-emi-more-than-90-days",
  },
};

export default function MissedCarLoanEmiPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://example.com/missed-car-loan-emi-more-than-90-days/#webpage",
        "url": "https://example.com/missed-car-loan-emi-more-than-90-days",
        "name": "Missed Car Loan EMI More Than 90 Days? Stop Illegal Vehicle Seizure",
        "description": "Have you missed your car loan EMI for more than 90 days? Learn about RBI vehicle seizure rules, auto loan default consequences, and how to stop illegal towing.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://example.com/missed-car-loan-emi-more-than-90-days/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://example.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Auto Loan Settlement",
            "item": "https://example.com/auto-loan-settlement"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Missed Car Loan EMI > 90 Days",
            "item": "https://example.com/missed-car-loan-emi-more-than-90-days"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://example.com/missed-car-loan-emi-more-than-90-days/#article",
        "headline": "Missed Car Loan EMI More Than 90 Days? Stop Illegal Vehicle Seizure",
        "description": "Comprehensive guide on what happens when you miss 3 months of car loan EMIs, RBI guidelines on repossession, and how to stop unlawful recovery agents.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoan Legal Team",
          "url": "https://example.com"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://example.com/missed-car-loan-emi-more-than-90-days/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What happens if I miss my car loan EMI for 90 days?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "After 90 days of non-payment, your car loan account is classified as a Non-Performing Asset (NPA). The bank can legally initiate repossession proceedings under the SARFAESI Act, but they must follow strict RBI guidelines and issue proper notices."
            }
          },
          {
            "@type": "Question",
            "name": "Can recovery agents seize my car from the road?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. RBI rules strictly prohibit the use of muscle power or public humiliation to recover vehicles. Recovery agents cannot forcibly stop you on the road or seize the vehicle without prior legal notice."
            }
          },
          {
            "@type": "Question",
            "name": "How many notices must the bank send before seizing my car?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The bank must send a default notice, followed by a final recall notice giving you 7 to 15 days to clear the dues. They cannot repossess the car without giving you a final opportunity to pay."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get my seized car back?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Even after repossession, you have the right to reclaim your car before it is auctioned by paying the outstanding dues along with the bank's repossession charges."
            }
          },
          {
            "@type": "Question",
            "name": "What if the bank auctions my car for less than the loan amount?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If the auction amount doesn't cover your outstanding dues, you are still legally liable to pay the shortfall. The bank can pursue legal action to recover the remaining balance."
            }
          },
          {
            "@type": "Question",
            "name": "How does a 90-day default affect my CIBIL score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A 90-day default will severely impact your CIBIL score, dropping it significantly. The NPA classification will remain on your credit report, making it very difficult to secure future loans."
            }
          },
          {
            "@type": "Question",
            "name": "Can I restructure my auto loan after 90 days?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banks are generally hesitant to restructure an NPA, but you can approach them for a one-time settlement or refinancing option if you can prove genuine financial hardship."
            }
          },
          {
            "@type": "Question",
            "name": "Is it legal to hide my car from the bank?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hiding the car is not a permanent solution and can lead to criminal charges such as breach of trust or fraud. It's better to negotiate legally with the bank."
            }
          },
          {
            "@type": "Question",
            "name": "Can I surrender my car voluntarily?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, voluntary surrender is an option. It saves you from repossession charges and harassment, but the bank will still auction the car and demand the shortfall amount from you."
            }
          },
          {
            "@type": "Question",
            "name": "Should I file a police complaint against abusive recovery agents?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. If recovery agents resort to physical threats, abuse, or attempt to forcibly take your car without notice, you must file an FIR and report the incident to the banking ombudsman."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://example.com/missed-car-loan-emi-more-than-90-days/#service",
        "name": "Auto Loan Default Legal Protection Service",
        "description": "Expert legal consultation and protection against illegal vehicle repossession by banks and recovery agents.",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoan"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "142"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul Verma" },
            "datePublished": "2024-03-12",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Recovery agents were threatening to tow my car from my office. SettleLoan helped me send a legal notice and stopped the harassment immediately."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram Singh" },
            "datePublished": "2024-02-28",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "I was 4 months behind on my car EMI due to a job loss. The lawyers helped me negotiate a settlement and I kept my car."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Neha Gupta" },
            "datePublished": "2024-01-15",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Bank seized my car illegally without any notice. SettleLoan filed a complaint and got my car released within a week."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Arjun Patel" },
            "datePublished": "2023-11-20",
            "reviewRating": { "@type": "Rating", "ratingValue": "4" },
            "reviewBody": "Very professional service. They explained the RBI vehicle seizure rules clearly and handled the bank's recovery agency perfectly."
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: 'introduction', title: 'What Happens After 90 Days?' },
    { id: 'rbi-rules', title: 'RBI Vehicle Seizure Rules' },
    { id: 'consequences', title: 'Consequences of Default' },
    { id: 'stop-towing', title: 'How to Stop Illegal Towing' },
    { id: 'negotiation', title: 'Negotiating with the Bank' },
    { id: 'success-stories', title: 'Real Success Stories' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section (Dark & Centered) */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Auto Loan Crisis Management
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Missed Car Loan EMI <span className="text-[#1F5EFF]">More Than 90 Days?</span> Know Your Rights
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Missed your car loan EMI for 3 months? The bank might seize your vehicle tomorrow. Learn how to stop illegal towing and protect your asset.
            </p>
            <Link href="/consultation" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Immediate Legal Protection
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/auto-loan" className="hover:text-[#1F5EFF] transition-colors">Auto Loan Setup</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Missed Car Loan EMI &gt; 90 Days</span>
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative max-w-[1600px]">
          
          {/* Left Sidebar: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Column: Article */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Boxed Intro */}
            <section id="introduction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                What Happens When You Miss EMIs for 90 Days?
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <p className="text-lg leading-relaxed mb-6 text-[#4A4A4A]">
                  When you have a <strong className="text-[#2E2E2E]">missed car loan emi 90 days</strong> streak, your loan account automatically gets classified as a <strong>Non-Performing Asset (NPA)</strong>. This changes the dynamics entirely. The bank moves from simple payment reminders to aggressive recovery tactics.
                </p>
                <p className="text-lg leading-relaxed mb-0 text-[#4A4A4A]">
                  However, crossing the 90-day mark does <em>not</em> give the bank or its recovery agents the right to break the law, humiliate you, or snatch your car forcibly from a public road. You still have powerful legal rights protecting you from illegal repossession.
                </p>
              </div>
            </section>

            <section id="rbi-rules" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                RBI Vehicle Seizure Rules You Must Know
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The Reserve Bank of India has strict guidelines regarding asset repossession. If a bank violates these <strong>vehicle seizure rules RBI</strong> has laid out, you can take legal action against them and get your vehicle released.
              </p>
              
              {/* Blue Important Box */}
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Crucial RBI Guidelines on Repossession</h4>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-lg text-blue-900 m-0"><strong>Mandatory Notice:</strong> Banks must issue a formal final recall notice before seizing the vehicle, giving you time to clear dues.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-lg text-blue-900 m-0"><strong>No Muscle Power:</strong> The use of goons, physical force, or intimidation by recovery agents is strictly prohibited.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-lg text-blue-900 m-0"><strong>Post-Seizure Rights:</strong> Even after seizure, you must be given a final chance to pay before the bank auctions the car.</p>
                  </div>
                </div>
              </div>

              {/* Red Warning Box */}
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-2">Warning: Illegal Towing Practices</h4>
                <p className="text-lg text-red-900 m-0">
                  If agents stop your family on the highway, force you out of the car, or tow it away at midnight without prior legal intimation, this is considered theft and extortion under the law. You must immediately dial 112 and register an FIR.
                </p>
              </div>
            </section>

            <section id="consequences" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Auto Loan Default Consequences
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Ignoring an NPA account will lead to severe <strong>auto loan default consequences</strong> that can affect your financial future for years to come.
              </p>

              {/* 4-Grid Info Boxes */}
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">1. CIBIL Score Crash</h4>
                  <p className="text-[#4A4A4A] m-0">An NPA classification drops your CIBIL score drastically, blocking you from future home, personal, or car loans.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">2. Vehicle Auction</h4>
                  <p className="text-[#4A4A4A] m-0">The bank will sell your car at a distressed price to recover funds, often far below the actual market value.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">3. Shortfall Recovery</h4>
                  <p className="text-[#4A4A4A] m-0">If the auction doesn't cover your outstanding balance, the bank will still legally pursue you for the remaining debt.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">4. Arbitration Legal Action</h4>
                  <p className="text-[#4A4A4A] m-0">Banks may invoke the arbitration clause in your loan agreement, dragging you into legal disputes and potential salary attachment.</p>
                </div>
              </div>
            </section>

            <section id="stop-towing" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Stop Illegal Towing and Harassment
              </h2>
              
              {/* Numbered Steps */}
              <div className="space-y-12 mt-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h4 className="text-xl font-black text-[#2E2E2E] mb-2">Demand Identification</h4>
                    <p className="text-lg text-[#4A4A4A]">If agents approach you, do not panic. Ask for their ID cards and the RBI-mandated recovery agent certification. If they fail to produce it, they are acting illegally.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h4 className="text-xl font-black text-[#2E2E2E] mb-2">Ask for the Repossession Order</h4>
                    <p className="text-lg text-[#4A4A4A]">Ask to see the written authorization and repossession notice from the bank. Verbal threats mean nothing in the eyes of the law.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h4 className="text-xl font-black text-[#2E2E2E] mb-2">Send a Legal Notice</h4>
                    <p className="text-lg text-[#4A4A4A]">Send a strongly worded legal notice through an advocate citing harassment. This often forces the bank to pull back the aggressive third-party agents and negotiate directly.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="negotiation" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Negotiating with the Bank After 90 Days
              </h2>
              
              {/* Gray Insight Box */}
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-black text-[#2E2E2E] mb-4">The Restructuring Option</h4>
                <p className="text-lg leading-relaxed text-[#4A4A4A] mb-0">
                  Once your account is an NPA, you can request the bank manager for restructuring or a one-time settlement (OTS). Show proof of job loss, medical emergencies, or business failure. If you negotiate properly, banks prefer settling over dealing with the hassle and legal costs of auctioning a depreciating asset like a car.
                </p>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Success Stories: Stopping Vehicle Seizure
              </h2>
              
              {/* Review Grid */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {/* Card 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                      M
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-lg text-[#4A4A4A] italic mb-6">"Recovery agents tried to tow my Creta from my office parking. SettleLoan stepped in, sent a notice, and stopped them. We later settled the dues amicably."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">Loan: ₹12 Lakhs</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Car Saved</span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                      P
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-lg text-[#4A4A4A] italic mb-6">"I had a missed car loan emi for 4 months. The bank seized it without notice. The lawyers fought the case, proved illegal seizure, and got it released."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">NPA Overdue</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Released in 10 Days</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {/* FAQ 1 */}
                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">What happens if I miss my car loan EMI for 90 days?</h4>
                  <p className="text-[#4A4A4A] m-0">After 90 days, your account becomes an NPA. The bank can legally initiate repossession proceedings under the SARFAESI Act, but only after sending proper notices.</p>
                </div>
                {/* FAQ 2 */}
                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">Can recovery agents seize my car from the road?</h4>
                  <p className="text-[#4A4A4A] m-0">No. RBI strictly prohibits the use of muscle power or stopping a running vehicle on the road. Repossession must be done peacefully with prior intimation.</p>
                </div>
                {/* FAQ 3 */}
                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">How many notices must the bank send before seizing my car?</h4>
                  <p className="text-[#4A4A4A] m-0">They must send a default notice and a final recall notice giving you a specific window (usually 7 to 15 days) to clear the overdue amount.</p>
                </div>
                {/* FAQ 4 */}
                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">Can I get my seized car back?</h4>
                  <p className="text-[#4A4A4A] m-0">Yes. You can reclaim your car before it gets auctioned by clearing the outstanding arrears along with repossession charges levied by the bank.</p>
                </div>
                {/* FAQ 5 */}
                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">What if the bank auctions my car for less than the loan amount?</h4>
                  <p className="text-[#4A4A4A] m-0">If there is a shortfall between the auction price and your total dues, you are still legally obligated to pay the difference. The bank can file a suit against you.</p>
                </div>
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black mb-6">Bank Threatening to Seize Your Car?</h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Stop illegal towing immediately. Our expert legal team will send a strict notice to the bank and force them to the negotiation table.
                </p>
                <Link href="/consultation" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-12 rounded-xl hover:scale-105 transition-transform text-lg shadow-[0_0_20px_rgba(31,94,255,0.4)]">
                  Get Legal Protection Now
                </Link>
                <div className="mt-16 pt-8 border-t border-gray-100/20 text-center">
                  <p className="text-gray-400 text-sm italic">
                    Disclaimer: This article provides general legal information and does not constitute formal legal advice. Always consult an advocate for specific disputes.
                  </p>
                </div>
              </div>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              {/* Card 1: Dark CTA */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-4">Stop Vehicle Seizure</h4>
                  <p className="text-sm opacity-80 mb-6">Talk to an expert lawyer in 10 minutes and secure your asset.</p>
                  <Link href="/contact" className="block w-full bg-white text-[#2E2E2E] font-bold py-3 rounded-lg hover:bg-[#1F5EFF] hover:text-white transition-colors">
                    Consult Lawyer
                  </Link>
                </div>
              </div>

              {/* Card 2: White Resources */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">Related Legal Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/auto-loan-settlement" className="flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] font-bold group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Auto Loan Settlement Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/sarfaesi-act-rules" className="flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] font-bold group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      SARFAESI Act Rules Explained
                    </Link>
                  </li>
                  <li>
                    <Link href="/rbi-recovery-agent-guidelines" className="flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] font-bold group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI Rules for Recovery Agents
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
