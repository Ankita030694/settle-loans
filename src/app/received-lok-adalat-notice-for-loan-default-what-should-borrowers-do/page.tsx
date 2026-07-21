import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Received a Lok Adalat Notice for Loan Default? Here is What You Must Do",
  description: "Demystifying the intimidating Lok Adalat Summons for loan defaults. Learn how to respond, why ignoring it is a mistake, and how to negotiate a massive discount.",
  alternates: {
    canonical: "https://www.settleloan.in/received-lok-adalat-notice-for-loan-default-what-should-borrowers-do",
  }
};

export default function LokAdalatNoticePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Received a Lok Adalat Notice for Loan Default? Here is What You Must Do",
      "description": "Demystifying the intimidating Lok Adalat Summons for loan defaults. Learn how to respond, why ignoring it is a mistake, and how to negotiate a massive discount.",
      "url": "https://www.settleloan.in/received-lok-adalat-notice-for-loan-default-what-should-borrowers-do"
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
          "name": "Received a Lok Adalat Notice for Loan Default? Here is What You Must Do",
          "item": "https://www.settleloan.in/received-lok-adalat-notice-for-loan-default-what-should-borrowers-do"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Received a Lok Adalat Notice for Loan Default? Here is What You Must Do",
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
        "@id": "https://www.settleloan.in/received-lok-adalat-notice-for-loan-default-what-should-borrowers-do"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is a Lok Adalat mandatory for loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, it is a forum for mutual settlement. If you don't reach an agreement, the case returns to the regular court or the bank decides its next steps."
          }
        },
        {
          "@type": "Question",
          "name": "Can I ignore a Lok Adalat notice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While you won't be arrested for simply not showing up, ignoring the notice allows the bank to take stronger legal action, including filing a recovery suit or moving to DRT."
          }
        },
        {
          "@type": "Question",
          "name": "Will going to Lok Adalat mean I admit guilt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, appearing in a Lok Adalat is meant for discussion and amicable settlement, not an admission of a criminal offense."
          }
        },
        {
          "@type": "Question",
          "name": "Can Lok Adalat send me to jail?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely not. Lok Adalat is a civil forum designed to settle disputes through negotiation, not a criminal court that can hand out jail sentences."
          }
        },
        {
          "@type": "Question",
          "name": "What is a pre-litigation Lok Adalat settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It means the bank has approached the Lok Adalat to settle the dispute before filing a formal lawsuit in a regular court."
          }
        },
        {
          "@type": "Question",
          "name": "How much discount can I get in a Lok Adalat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers have reported getting waivers of up to 50% to 70% on the outstanding amount, depending on their financial hardship and the bank's policies."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a lawyer for Lok Adalat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While not strictly required, having a legal expert or a debt settlement consultant can help you negotiate the best possible waiver."
          }
        },
        {
          "@type": "Question",
          "name": "What if I cannot pay the settlement amount immediately?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can request the bank for structured EMIs to pay the settled amount, though banks usually prefer a lump-sum payment."
          }
        },
        {
          "@type": "Question",
          "name": "Does a Lok Adalat settlement affect my CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, settling a loan will reflect as 'Settled' on your credit report, which negatively impacts your CIBIL score, but it stops further legal action."
          }
        },
        {
          "@type": "Question",
          "name": "Can I challenge a Lok Adalat award?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, a Lok Adalat award is final and binding on both parties and no appeal lies against it in any court, unless there is a clear case of fraud."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Lok Adalat Debt Settlement Service",
      "image": "https://www.settleloan.in/logo.png",
      "description": "Expert negotiation and representation for borrowers receiving Lok Adalat summons for personal and business loans.",
      "brand": {
        "@type": "Brand",
        "name": "SettleLoan"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "104"
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
            "name": "Ravi S."
          },
          "reviewBody": "Got a notice and panicked. SettleLoan helped me understand it was just an invite for settlement. They negotiated a 60% waiver for me!"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Priya M."
          },
          "reviewBody": "I thought I'd go to jail, but their experts explained Lok Adalat isn't a criminal court. Settled my personal loan quickly."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4"
          },
          "author": {
            "@type": "Person",
            "name": "Anil K."
          },
          "reviewBody": "Very professional. Represented me well and saved me from immense harassment by recovery agents."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Sneha T."
          },
          "reviewBody": "Best decision I made. They managed to close my Rs. 8 Lakh loan for just Rs. 3 Lakhs during the Lok Adalat."
        }
      ]
    }
  ];

  const tocItems = [
    { id: "understanding-lok-adalat", title: "Understanding Lok Adalat Notices" },
    { id: "criminal-or-civil", title: "Can You Go to Jail?" },
    { id: "what-happens-if-ignored", title: "What Happens if You Ignore It?" },
    { id: "negotiation-strategy", title: "Negotiating the Maximum Waiver" },
    { id: "success-stories", title: "Success Stories" },
    { id: "faqs", title: "Frequently Asked Questions" }
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
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Legal Guidance
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Received a Lok Adalat Notice for Loan Default? <span className="text-[#1F5EFF]">Here is What You Must Do</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Banks heavily utilize the Lok Adalat system to clear bad debts. This guide demystifies the intimidating "Lok Adalat Summons."
            </p>
            <Link href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Expert Negotiation Help
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/loan-settlement" className="hover:text-[#1F5EFF] transition-colors">Loan Settlement</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Lok Adalat Notice Guide</span>
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative max-w-[1600px]">
          
          {/* Left Sidebar (TOC) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Article Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="understanding-lok-adalat" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  Understanding Lok Adalat Notices
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Getting a legal notice can be terrifying, especially when it is labeled as a "summons." A <strong>Lok Adalat summons for personal loan</strong> default is often sent by banks as a strategy to recover bad debts quickly. However, it's essential to understand that Lok Adalats are established for the amicable settlement of disputes, not to penalize borrowers. 
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  A <strong>pre-litigation Lok Adalat settlement</strong> notice simply means your bank wants to negotiate terms and close the loan account before taking the matter to a formal court. It provides an excellent opportunity to negotiate a massive discount on your outstanding principal amount.
                </p>
              </div>
            </section>

            <section id="criminal-or-civil" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Are Lok Adalats Criminal Courts? Can You Go to Jail?
              </h2>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The Truth About Lok Adalats</h4>
                <p className="text-lg leading-relaxed text-blue-900 mb-4">
                  Recovery agents often use the threat of Lok Adalat to scare borrowers, warning them of jail sentences if they do not comply. This is a complete myth.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-blue-900">Lok Adalats do not have the power to hand out jail sentences.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-blue-900">They handle civil disputes, primarily focusing on mutual compromise.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-blue-900"><strong>Is Lok Adalat mandatory for loan</strong> settlement? No, participation is voluntary.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="what-happens-if-ignored" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                What Happens if You Ignore a Lok Adalat Notice?
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-800">
                Many borrowers wonder if they can simply <strong>ignore Lok Adalat notice</strong> communications. While the police will not arrest you for failing to attend, completely ignoring the notice is usually not the best strategy.
              </p>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-4">Warning: Risks of Ignoring the Summons</h4>
                <p className="text-lg leading-relaxed text-red-900 mb-0">
                  If you do not appear, the Lok Adalat cannot pass a one-sided order against you. However, the bank will record your absence. This gives them the legal ground to file a recovery suit in a regular civil court or approach the Debt Recovery Tribunal (DRT). It shows the court that you are not willing to cooperate.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed text-gray-800 mb-0">
                  <strong>Insight:</strong> Going to the Lok Adalat puts you in a position of power. It shows intent to pay and allows you to negotiate terms based on your current financial hardship.
                </p>
              </div>
            </section>

            <section id="negotiation-strategy" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Negotiate the Maximum Waiver
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-800">
                Banks use Lok Adalats to clear their non-performing assets (NPAs). They are highly motivated to settle. Follow these steps to maximize your waiver:
              </p>

              <div className="space-y-12 my-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Prepare Your Financial Hardship Proof</h3>
                    <p className="text-lg text-gray-700">Gather medical bills, termination letters, or business loss statements. The presiding officer needs valid reasons to authorize a massive discount on the principal amount.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Start with a Low Offer</h3>
                    <p className="text-lg text-gray-700">Banks will often start with a minor waiver on penalties. Counter with a very low lump-sum offer (e.g., 25% of the principal) and negotiate your way to a reasonable middle ground.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Demand a 'No Dues Certificate'</h3>
                    <p className="text-lg text-gray-700">Once an amount is agreed upon, ensure the Lok Adalat award clearly states that upon payment, the bank will issue a No Dues Certificate (NDC) and close the account.</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-2">Can I Pay in EMIs?</h4>
                  <p className="text-gray-700">Yes, but banks heavily prefer lump-sum settlements. If you need EMIs, the waiver percentage might be lower.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-2">What About Penalties?</h4>
                  <p className="text-gray-700">In almost all Lok Adalat settlements, 100% of the late payment penalties and penal interest are waived off completely.</p>
                </div>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Recent Lok Adalat Success Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      R
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Ravi S.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"Got a notice and panicked. SettleLoan helped me understand it was just an invite for settlement. They negotiated a 60% waiver for me!"</p>
                  <div className="flex gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Loan: ₹12.5L</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Settled: ₹5L</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      P
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Priya M.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"I thought I'd go to jail, but their experts explained Lok Adalat isn't a criminal court. Settled my personal loan quickly."</p>
                  <div className="flex gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Loan: ₹8L</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Settled: ₹3L</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  { q: "Is a Lok Adalat mandatory for loan settlement?", a: "No, it is a forum for mutual settlement. If you don't reach an agreement, the case returns to the regular court or the bank decides its next steps." },
                  { q: "Can I ignore a Lok Adalat notice?", a: "While you won't be arrested for simply not showing up, ignoring the notice allows the bank to take stronger legal action, including filing a recovery suit or moving to DRT." },
                  { q: "Will going to Lok Adalat mean I admit guilt?", a: "No, appearing in a Lok Adalat is meant for discussion and amicable settlement, not an admission of a criminal offense." },
                  { q: "Can Lok Adalat send me to jail?", a: "Absolutely not. Lok Adalat is a civil forum designed to settle disputes through negotiation, not a criminal court that can hand out jail sentences." },
                  { q: "What is a pre-litigation Lok Adalat settlement?", a: "It means the bank has approached the Lok Adalat to settle the dispute before filing a formal lawsuit in a regular court." },
                  { q: "How much discount can I get in a Lok Adalat?", a: "Borrowers have reported getting waivers of up to 50% to 70% on the outstanding amount, depending on their financial hardship and the bank's policies." },
                  { q: "Do I need a lawyer for Lok Adalat?", a: "While not strictly required, having a legal expert or a debt settlement consultant can help you negotiate the best possible waiver." },
                  { q: "What if I cannot pay the settlement amount immediately?", a: "You can request the bank for structured EMIs to pay the settled amount, though banks usually prefer a lump-sum payment." },
                  { q: "Does a Lok Adalat settlement affect my CIBIL score?", a: "Yes, settling a loan will reflect as 'Settled' on your credit report, which negatively impacts your CIBIL score, but it stops further legal action." },
                  { q: "Can I challenge a Lok Adalat award?", a: "No, a Lok Adalat award is final and binding on both parties and no appeal lies against it in any court, unless there is a clear case of fraud." }
                ].map((faq, index) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg text-[#2E2E2E] mb-2">{faq.q}</h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-6">Received a Lok Adalat Summons?</h3>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Got a Lok Adalat summons and don't know what to do? Our debt settlement experts can represent you and negotiate the maximum waiver on your loan.
                </p>
                <Link href="#contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform shadow-lg text-lg">
                  Consult an Expert Today
                </Link>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational purposes only and does not constitute formal legal advice. Always consult with a qualified legal professional for your specific situation.
              </p>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h4 className="font-black text-2xl mb-4">Need Help Urgently?</h4>
                  <p className="text-gray-300 mb-6 text-sm">Don't face the Lok Adalat alone. Let our experts negotiate for you.</p>
                  <Link href="#contact" className="block w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl transition-colors">
                    Get Free Consultation
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">Related Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/loan-settlement-process-in-india" className="text-[#2E2E2E] hover:text-[#1F5EFF] font-semibold flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Loan Settlement Process in India
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-stop-loan-recovery-harassment" className="text-[#2E2E2E] hover:text-[#1F5EFF] font-semibold flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Stop Recovery Harassment
                    </Link>
                  </li>
                  <li>
                    <Link href="/can-i-go-to-jail-for-loan-default-in-india" className="text-[#2E2E2E] hover:text-[#1F5EFF] font-semibold flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Can You Go to Jail for Loan Default?
                    </Link>
                  </li>
                  <li>
                    <Link href="/rbi-rules-for-recovery-agents" className="text-[#2E2E2E] hover:text-[#1F5EFF] font-semibold flex items-center group">
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
