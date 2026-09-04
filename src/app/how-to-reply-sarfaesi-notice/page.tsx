import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'How to Reply to a SARFAESI 13(2) Notice | Stall Bank Auction',
  description: 'Received a 60-day SARFAESI demand notice? Ignoring it will cost you your home. Learn how to reply, raise objections, and stall bank actions with a DRT lawyer.',
  alternates: {
    canonical: 'https://www.yourdomain.com/how-to-reply-sarfaesi-notice',
  },
};

const tocItems = [
  { id: 'intro', title: 'Received a 60-Day Notice?' },
  { id: 'understanding-13-2', title: 'What is a 13(2) Notice?' },
  { id: 'how-to-reply', title: 'How to Reply to SARFAESI 13(2)' },
  { id: 'drt-lawyer', title: 'Why You Need a DRT Lawyer' },
  { id: 'stall-auction', title: 'How to Stall Bank Auction' },
  { id: 'mistakes', title: 'Critical Mistakes to Avoid' },
  { id: 'success-stories', title: 'Client Success Stories' },
  { id: 'faqs', title: 'Frequently Asked Questions' },
];

export default function SarfaesiReplyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yourdomain.com/how-to-reply-sarfaesi-notice/#webpage",
        "url": "https://www.yourdomain.com/how-to-reply-sarfaesi-notice",
        "name": "How to Reply to a SARFAESI Notice",
        "description": "Expert guide on how to reply to a SARFAESI 13(2) demand notice, raise objections under 13(3A), and stall bank auctions.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.yourdomain.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Legal Guides",
            "item": "https://www.yourdomain.com/legal-guides/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "How to Reply to SARFAESI Notice",
            "item": "https://www.yourdomain.com/how-to-reply-sarfaesi-notice"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.yourdomain.com/how-to-reply-sarfaesi-notice/#article",
        "headline": "How to Reply to a SARFAESI 13(2) Notice and Stall Bank Actions",
        "description": "Expert legal strategies to reply to SARFAESI notices, raise valid objections, and halt illegal bank auctions.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoan Legal Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoan",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.yourdomain.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.yourdomain.com/how-to-reply-sarfaesi-notice/#webpage"
        }
      },
      {
        "@type": "Product",
        "name": "SARFAESI Legal Defense & DRT Lawyer Consultation",
        "description": "Expert legal consultation and drafting services to reply to SARFAESI 13(2) notices and stall bank auctions.",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoan"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "142",
          "bestRating": "5"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a SARFAESI 13(2) notice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A 13(2) notice is a 60-day demand notice sent by the bank after your loan account is classified as a Non-Performing Asset (NPA). It demands full repayment of the outstanding dues."
            }
          },
          {
            "@type": "Question",
            "name": "How many days do I have to reply to a 13(2) notice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You should ideally reply within the 60-day period granted by the notice to raise legal objections under Section 13(3A) of the SARFAESI Act."
            }
          },
          {
            "@type": "Question",
            "name": "Can I stop a bank auction under SARFAESI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. A bank auction can be stalled by raising valid legal objections, highlighting procedural flaws by the bank, or by obtaining a stay order from the Debt Recovery Tribunal (DRT)."
            }
          },
          {
            "@type": "Question",
            "name": "Is it mandatory for the bank to reply to my objections?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, under Section 13(3A) of the SARFAESI Act, the bank must consider your objections and provide a reasoned reply within 15 days."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a DRT lawyer for SARFAESI notices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. A specialized DRT lawyer understands the technicalities of the SARFAESI Act and can identify procedural flaws in the bank's notice to help you get a stay order."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I ignore a 13(2) notice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ignoring the notice allows the bank to issue a 13(4) notice to take physical possession of your property and proceed with the auction without any legal resistance."
            }
          },
          {
            "@type": "Question",
            "name": "What is a 13(4) symbolic possession notice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If the 60-day period under 13(2) expires without resolution, the bank issues a 13(4) notice taking symbolic possession of the property before moving for physical possession."
            }
          },
          {
            "@type": "Question",
            "name": "Can I approach the High Court against a SARFAESI notice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Generally, High Courts do not interfere directly since the DRT is the designated authority. However, writ petitions may be entertained in cases of gross violation of natural justice."
            }
          },
          {
            "@type": "Question",
            "name": "Can the bank attach my agricultural land under SARFAESI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Agricultural land is explicitly exempt from the provisions of the SARFAESI Act under Section 31(i)."
            }
          },
          {
            "@type": "Question",
            "name": "Is it possible to settle the loan after receiving a SARFAESI notice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can negotiate an OTS (One Time Settlement) or restructure the loan with the bank even after a SARFAESI notice has been issued."
            }
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

      <main 
        className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" 
        style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
      >
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              SARFAESI Defense Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              How to <span className="text-[#1F5EFF]">Reply to SARFAESI</span> 13(2) Notice
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Received a 60-day SARFAESI demand notice? Ignoring it will cost you your home. Get our expert legal draft to reply, raise objections, and stall the auction.
            </p>
            <Link href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Expert Legal Help Now
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/legal" className="hover:text-[#1F5EFF] transition-colors">Legal Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">How to Reply to SARFAESI Notice</span>
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
            
            {/* Boxed Intro */}
            <section id="intro" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  Received a 60-Day SARFAESI Demand Notice?
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Getting a legal notice under the SARFAESI Act is one of the most stressful moments for any borrower. The moment a <strong>SARFAESI 13(2) notice</strong> lands at your door, the clock starts ticking. You have exactly 60 days before the bank can initiate physical possession of your property.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  But this is not the end of the road. Most banks make procedural errors when drafting these notices, violating RBI guidelines and giving you a golden opportunity to strike back. Learning exactly <strong>how to reply to a SARFAESI 13(2) notice</strong> is your first line of defense to <span className="font-bold text-[#1F5EFF]">stop SARFAESI action</span>.
                </p>
              </div>
            </section>

            {/* Understanding Section */}
            <section id="understanding-13-2" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                What is a SARFAESI 13(2) Notice?
              </h2>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed mb-6 text-gray-800">
                  A Section 13(2) notice under the SARFAESI Act, 2002, is an official demand notice sent by a secured creditor (bank or NBFC) once your loan account becomes a Non-Performing Asset (NPA) (typically after 90 days of default). It gives the borrower 60 days to repay the entire outstanding liability in full.
                </p>
              </div>
            </section>

            {/* How to Reply (Numbered Steps) */}
            <section id="how-to-reply" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Reply to a SARFAESI Notice (Section 13(3A))
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Under Section 13(3A) of the Act, you have the statutory right to raise objections to the 13(2) notice. The bank is legally mandated to respond to your objections within 15 days. Here is how you do it effectively:
              </p>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Identify Procedural Flaws</h3>
                    <p className="text-lg text-gray-600">Check if the NPA classification dates are correct according to RBI IRACP norms. Did they provide a proper statement of accounts? An incorrect demand amount renders the notice legally defective.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Draft the 13(3A) Objection</h3>
                    <p className="text-lg text-gray-600">Draft a legally watertight reply quoting the exact grounds of objection. This is not an emotional plea for time; it is a legal rebuttal that challenges the bank's right to invoke SARFAESI.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Send via Registered Post</h3>
                    <p className="text-lg text-gray-600">Always send your reply via Registered Post with Acknowledgment Due (RPAD) before the 60 days expire. Keep the postal receipt—this is crucial evidence for the DRT later.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* DRT Lawyer (Blue Box) */}
            <section id="drt-lawyer" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Why You Need a DRT Lawyer for SARFAESI
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                SARFAESI is a draconian law favoring banks. General civil lawyers often struggle against well-funded bank panels.
              </p>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h3 className="text-xl font-black text-[#1F5EFF] mb-4">
                  A Specialized DRT Lawyer Will:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">Identify technical loopholes in the bank's NPA classification.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">Draft the mandatory 13(3A) reply to trap the bank legally if they fail to respond within 15 days.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">File a Securitisation Application (SA) under Section 17 before the DRT to obtain a stay order.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Stall Auction (4 Grid Boxes) */}
            <section id="stall-auction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Stall Bank Auction
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If the 60-day period expires and the bank issues a 13(4) notice or an e-auction notice, you still have powerful legal remedies to <strong>how to stall bank auction</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">File an SA in DRT</h3>
                  <p className="text-gray-700">File a Securitisation Application under Sec 17 in the DRT within 45 days of the 13(4) symbolic possession notice.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Challenge Valuation</h3>
                  <p className="text-gray-700">Banks frequently undervalue properties for quick sales. Challenging the reserve price can halt the auction process.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Propose One-Time Settlement</h3>
                  <p className="text-gray-700">Submit a formal OTS (One Time Settlement) proposal. If the bank refuses a reasonable OTS, the DRT often intervenes.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">High Court Writ</h3>
                  <p className="text-gray-700">If DRT courts are empty or non-functional, file a writ petition under Article 226 in the High Court for interim relief.</p>
                </div>
              </div>
            </section>

            {/* Mistakes to Avoid (Red Box) */}
            <section id="mistakes" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Critical Mistakes to Avoid
              </h2>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h3 className="text-xl font-black text-red-700 mb-4">
                  Do Not Make These Errors
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="font-black text-red-700">✗</span>
                    <span className="text-lg text-red-900"><strong>Ignoring the Notice:</strong> Doing nothing guarantees you will lose possession of your property.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-black text-red-700">✗</span>
                    <span className="text-lg text-red-900"><strong>Paying Partial Amounts Unconditionally:</strong> If you pay a small amount without a written 'without prejudice' clause, it resets limitation but doesn't stop the auction.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-black text-red-700">✗</span>
                    <span className="text-lg text-red-900"><strong>Relying on Verbal Assurances:</strong> Never trust a bank manager who says "Don't worry about the notice, just pay when you can." The legal process will continue regardless.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Success Stories */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Client Success Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                {/* Card 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      V
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2E2E2E]">Vikram S.</h3>
                      <div className="flex gap-1 text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"The bank sent an e-auction notice for my factory. SettleLoan's DRT lawyer found a flaw in their 13(2) reply and got a stay order from the tribunal in just 3 days."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase">Loan: ₹1.2 Cr</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">Auction Stalled</span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      A
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Anjali R.</h4>
                      <div className="flex gap-1 text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"I received a 13(2) notice and was terrified of losing my home. The drafted reply forced the bank to the negotiating table, resulting in an affordable OTS."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase">Loan: ₹45 Lakhs</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">Settled OTS</span>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] outline-none">What is a SARFAESI 13(2) notice?</summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">A 13(2) notice is a 60-day demand notice sent by the bank after your loan account is classified as an NPA. It demands full repayment of the outstanding dues.</p>
                </details>
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] outline-none">How many days do I have to reply?</summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">You must reply within the 60-day period granted by the notice to raise legal objections under Section 13(3A) of the SARFAESI Act.</p>
                </details>
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] outline-none">Can I stop a bank auction under SARFAESI?</summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">Yes. A bank auction can be stalled by raising valid legal objections, highlighting procedural flaws, or obtaining a stay order from the DRT.</p>
                </details>
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] outline-none">Is it mandatory for the bank to reply to my objections?</summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">Yes, under Section 13(3A) of the SARFAESI Act, the bank must consider your objections and provide a reasoned reply within 15 days.</p>
                </details>
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] outline-none">Do I need a DRT lawyer?</summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">Yes. A specialized DRT lawyer understands the technicalities of the SARFAESI Act and can identify procedural flaws in the bank's notice to help you get a stay order.</p>
                </details>
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] outline-none">What happens if I ignore a 13(2) notice?</summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">Ignoring the notice allows the bank to issue a 13(4) notice to take physical possession of your property and proceed with the auction without any legal resistance.</p>
                </details>
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] outline-none">What is a 13(4) symbolic possession notice?</summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">If the 60-day period expires without resolution, the bank issues a 13(4) notice taking symbolic possession of the property before moving for physical possession.</p>
                </details>
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] outline-none">Can I approach the High Court?</summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">Generally, High Courts do not interfere directly since the DRT is the designated authority. However, writ petitions may be entertained in cases of gross violation of natural justice.</p>
                </details>
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] outline-none">Can agricultural land be attached?</summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">No. Agricultural land is explicitly exempt from the provisions of the SARFAESI Act under Section 31(i).</p>
                </details>
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] outline-none">Is an OTS possible after a SARFAESI notice?</summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">Yes, you can still negotiate an OTS (One Time Settlement) or restructure the loan with the bank even after a SARFAESI notice has been issued.</p>
                </details>
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black mb-6">Don't Lose Your Property to Bank Auctions.</h3>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                  Our specialized DRT lawyers can draft your 13(3A) reply, raise legal objections, and get a stay order to protect your assets.
                </p>
                <button className="bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                  Speak to a DRT Lawyer
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational purposes and does not constitute formal legal advice. Always consult with a qualified DRT lawyer regarding your specific SARFAESI matter.
              </p>
            </div>

          </article>

          {/* Right Sidebar (Context Cards) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] sticky top-24 h-fit">
            
            {/* Card 1 (Dark CTA) */}
            <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group mb-8">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
              <div className="relative z-10">
                <div className="font-black text-2xl mb-4">60 Days Left?</div>
                <p className="text-gray-300 text-sm mb-6">
                  Delaying your 13(3A) reply hands the bank an easy win. Draft a watertight objection today.
                </p>
                <button className="w-full bg-[#1F5EFF] text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-600 transition-colors shadow-lg">
                  Draft Reply Now
                </button>
              </div>
            </div>

            {/* Card 2 (White Resources) */}
            <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
              <div className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                SARFAESI Resources
              </div>
              <ul className="space-y-4">
                <li>
                  <Link href="/npa-classification" className="group flex items-center text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    RBI IRACP NPA Norms
                  </Link>
                </li>
                <li>
                  <Link href="/drt-stay-order" className="group flex items-center text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    How to Get DRT Stay Order
                  </Link>
                </li>
                <li>
                  <Link href="/loan-settlement" className="group flex items-center text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    Negotiate Loan Settlement
                  </Link>
                </li>
                <li>
                  <Link href="/property-auction" className="group flex items-center text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    Stop E-Auction Legally
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
