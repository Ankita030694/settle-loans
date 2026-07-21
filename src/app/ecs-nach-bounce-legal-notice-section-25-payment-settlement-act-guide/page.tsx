import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'ECS/NACH Bounce Legal Notice: Section 25 Payment & Settlement Act',
  description: 'Understand the legal implications of an ECS or NACH bounce under Section 25 of the Payment and Settlement Systems Act, and how to defend against criminal charges for auto debit bounce in India.',
  alternates: {
    canonical: 'https://www.settleloan.in/ecs-nach-bounce-legal-notice-section-25-payment-settlement-act-guide',
  }
};

export default function Section25NoticePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.settleloan.in/ecs-nach-bounce-legal-notice-section-25-payment-settlement-act-guide",
        "url": "https://www.settleloan.in/ecs-nach-bounce-legal-notice-section-25-payment-settlement-act-guide",
        "name": "ECS/NACH Bounce Legal Notice: Section 25 Payment & Settlement Act",
        "description": "Understand the legal implications of an ECS bounce, Section 25 of the Payment and Settlement Act, and NACH mandate bounce punishments in India."
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
            "name": "Legal Notices",
            "item": "https://www.settleloan.in/legal-notices"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Section 25 NACH Bounce Guide",
            "item": "https://www.settleloan.in/ecs-nach-bounce-legal-notice-section-25-payment-settlement-act-guide"
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "ECS/NACH Bounce Legal Notice: Understanding Section 25 of the Payment and Settlement Systems Act",
        "description": "A comprehensive guide on defending against criminal charges stemming from a bounced digital mandate under Section 25.",
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
          "@id": "https://www.settleloan.in/ecs-nach-bounce-legal-notice-section-25-payment-settlement-act-guide"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Section 25 of the Payment and Settlement Systems Act?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Section 25 criminalizes the dishonour of an electronic funds transfer (like ECS or NACH) due to insufficient funds, similar to how Section 138 of the Negotiable Instruments Act penalizes cheque bounces."
            }
          },
          {
            "@type": "Question",
            "name": "Can I go to jail for an auto debit bounce in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, under Section 25, an auto debit bounce is a criminal offense punishable by imprisonment of up to two years, a fine up to twice the mandate amount, or both, if proven in court."
            }
          },
          {
            "@type": "Question",
            "name": "What happens when an ECS mandate bounces?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your bank will charge a bounce fee, and the lender may issue a statutory demand notice within 30 days. You then have 15 days to clear the amount to avoid criminal charges."
            }
          },
          {
            "@type": "Question",
            "name": "How is Section 25 different from Section 138?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Section 138 applies exclusively to physical paper cheques, whereas Section 25 of the PSS Act applies to electronic fund transfers like ECS, NACH, and e-Mandates used in modern digital loans."
            }
          },
          {
            "@type": "Question",
            "name": "What is the timeline for a Section 25 legal notice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The lender must issue the notice within 30 days of receiving information from the bank about the return of the electronic transfer. You must then pay the amount within 15 days of receiving the notice."
            }
          },
          {
            "@type": "Question",
            "name": "How can I defend against an ECS bounce legal notice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can defend by proving technical errors, showing that the mandate was cancelled before the presentation date, or demonstrating that the debt was already settled or invalid."
            }
          },
          {
            "@type": "Question",
            "name": "Is an ECS bounce a civil or criminal case?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While loan default is generally a civil issue, an ECS bounce itself falls under Section 25, making it a quasi-criminal offense if you fail to respond to the statutory notice."
            }
          },
          {
            "@type": "Question",
            "name": "Can a digital lender file a case anywhere in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Jurisdiction is generally determined by where the mandate was presented or where the lender's registered office is, which can lead to notices from different states."
            }
          },
          {
            "@type": "Question",
            "name": "Should I reply to a Section 25 legal notice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Ignoring it can lead to a criminal complaint being filed against you in a magistrate court. A strong legal reply drafted by an advocate is essential."
            }
          },
          {
            "@type": "Question",
            "name": "Can I cancel a NACH mandate to stop the bounce?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You have the right to cancel a mandate with your bank. If the lender presents a cancelled mandate, it may bounce, but it weakens their case for a Section 25 offense if properly documented."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Section 25 NACH Legal Notice Reply Services",
        "description": "Professional legal drafting and defense strategies for ECS and NACH bounce cases under the Payment and Settlement Systems Act.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "890"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Amit K."
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody": "Got a Section 25 notice for a bounced EMI from a digital lender. The legal team helped me draft a solid reply, and we settled the loan civilly instead of facing court."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya S."
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody": "I didn't know an auto-debit bounce could lead to criminal charges. SettleLoan's advocates explained the process and protected me from legal action."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Suresh N."
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4"
            },
            "reviewBody": "They drafted an excellent response to the bank's ECS bounce notice. Very professional service that gave me peace of mind."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Meera T."
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody": "Highly recommend their advocates if you are facing harassment or Section 25 threats from NBFCs."
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'understanding-section-25', label: 'Understanding Section 25' },
    { id: 'statutory-timeline', label: 'The Legal Timeline' },
    { id: 'criminal-implications', label: 'Criminal Implications (Jail Time)' },
    { id: 'section-138-vs-25', label: 'Section 138 vs. Section 25' },
    { id: 'how-to-defend', label: 'How to Defend Yourself' },
    { id: 'success-stories', label: 'Success Stories' },
    { id: 'faqs', label: 'Frequently Asked Questions' }
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
              Legal Defense Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              ECS & NACH Bounce Legal Notices: Under <span className="text-[#1F5EFF]">Section 25</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              A comprehensive guide to understanding the Payment and Settlement Systems Act, and how to defend against criminal charges for bounced auto-debits.
            </p>
            <Link href="#contact-advocates" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Draft Your Legal Reply Now
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-3">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/legal-notices" className="hover:text-[#1F5EFF] transition-colors">Legal Notices</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Section 25 PSS Act</span>
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
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">The Rise of Digital Mandate Bounces</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  In the era of modern digital loans, paper cheques are obsolete. Instead, lenders require you to sign a NACH (National Automated Clearing House) or e-Mandate for auto-debiting EMIs. If this auto-debit fails due to insufficient funds, you receive an <strong className="text-[#2E2E2E]">ECS bounce legal notice</strong>.
                </p>
                <p className="text-lg leading-relaxed mb-0 text-gray-700">
                  Many borrowers ignore these notices, assuming they are just generic bank warnings. However, under Section 25 of the Payment and Settlement Systems Act, a bounced electronic mandate holds the exact same criminal weight as a bounced physical cheque.
                </p>
              </div>
            </section>

            <section id="understanding-section-25" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Understanding Section 25 of the PSS Act</h2>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed text-gray-700 mb-0">
                  <strong className="text-black block mb-2 text-xl">The Law Explained</strong>
                  <strong className="text-black">Section 25 Payment and Settlement Act</strong> was enacted to bring electronic funds transfers under a legal framework similar to the Negotiable Instruments Act. It explicitly states that if an electronic mandate is dishonored by a bank due to insufficient funds (or if it exceeds the arranged amount), it constitutes a criminal offense.
                </p>
              </div>
            </section>

            <section id="statutory-timeline" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Legal Timeline: When Can They Sue?</h2>
              <p className="text-lg leading-relaxed mb-8">For a lender to successfully prosecute you under Section 25, they must strictly adhere to a statutory timeline. If they miss these deadlines, their legal case becomes invalid.</p>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h4 className="text-xl font-black text-[#2E2E2E] mb-2">The Bounce Event</h4>
                    <p className="text-gray-700 text-lg">The bank returns the ECS/NACH mandate unpaid and informs the lender.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h4 className="text-xl font-black text-[#2E2E2E] mb-2">30-Day Window for Notice</h4>
                    <p className="text-gray-700 text-lg">The lender must send a formal legal notice demanding payment within 30 days of receiving information about the bounce from the bank.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h4 className="text-xl font-black text-[#2E2E2E] mb-2">15-Day Cure Period</h4>
                    <p className="text-gray-700 text-lg">After you receive the notice, you have exactly 15 days to pay the demanded amount or send a formal legal reply.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h4 className="text-xl font-black text-[#2E2E2E] mb-2">Filing of Criminal Complaint</h4>
                    <p className="text-gray-700 text-lg">If you fail to pay within those 15 days, the lender has 30 days to file a criminal complaint in a magistrate court.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="criminal-implications" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Criminal Implications & Punishments</h2>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-4">Can You Go to Jail?</h4>
                <p className="text-lg leading-relaxed mb-4 text-red-900">
                  Many borrowers search for "<strong className="text-red-950">jail for auto debit bounce India</strong>". The harsh reality is yes. If convicted under Section 25, the <strong className="text-red-950">NACH mandate bounce punishment</strong> can include:
                </p>
                <ul className="list-disc pl-6 text-red-900 space-y-2 text-lg">
                  <li>Imprisonment for a term which may extend to two years.</li>
                  <li>A fine that may extend to twice the amount of the electronic funds transfer.</li>
                  <li>Both imprisonment and a fine.</li>
                </ul>
                <p className="text-lg leading-relaxed mt-4 text-red-900 font-bold">
                  This is why responding to a Section 25 notice with a strong legal defense is absolutely critical.
                </p>
              </div>
            </section>

            <section id="section-138-vs-25" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Section 138 vs. Section 25</h2>
              <p className="text-lg leading-relaxed mb-6">While they deal with similar concepts, they apply to different financial instruments.</p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Section 138 (NI Act)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Applies to physical paper cheques</li>
                    <li>• Older law, highly established case precedents</li>
                    <li>• Requires physical signature verification</li>
                    <li>• Bouncing a cheque intentionally is a crime</li>
                  </ul>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Section 25 (PSS Act)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Applies to ECS, NACH, and e-Mandates</li>
                    <li>• Modern law used by fintechs and digital lenders</li>
                    <li>• Uses Aadhaar/Netbanking for authorization</li>
                    <li>• Failed auto-debit triggers the same penalties</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="how-to-defend" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How to Defend Yourself</h2>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Drafting a Strong Legal Reply</h4>
                <p className="text-lg leading-relaxed mb-4 text-gray-800">
                  Ignoring the notice is the worst thing you can do. You must send a legal reply drafted by an advocate within the 15-day period. Potential defenses include:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-800"><strong>Mandate Cancellation:</strong> Proving you legally revoked the NACH mandate before the presentation date.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-800"><strong>Disputed Debt Amount:</strong> Showing the amount demanded on the notice exceeds the actual legally enforceable debt.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-800"><strong>Procedural Errors:</strong> Identifying flaws in the timeline—such as the lender sending the notice after the 30-day window.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-800"><strong>Technical Glitch:</strong> Providing bank statements proving sufficient funds existed, but a technical error caused the bounce.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Client Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Story Card 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                      A
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Amit K.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"Received a Section 25 notice for a bounced EMI from a digital lender. The legal team found a procedural error in their timeline and drafted a solid reply. We settled the loan civilly instead of facing court."</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">Loan: ₹4,00,000</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Case Dropped</span>
                  </div>
                </div>

                {/* Story Card 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                      P
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Priya S.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"I didn't know an auto-debit bounce could lead to criminal charges. SettleLoan's advocates explained the process and drafted an excellent response to the bank, protecting me from legal action."</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">Loan: ₹2,50,000</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Settled: ₹85,000</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What is Section 25 of the Payment and Settlement Systems Act?", a: "Section 25 criminalizes the dishonour of an electronic funds transfer (like ECS or NACH) due to insufficient funds, similar to Section 138 for cheque bounces." },
                  { q: "Can I go to jail for an auto debit bounce in India?", a: "Yes, under Section 25, an auto debit bounce is a criminal offense punishable by imprisonment up to two years or a fine if proven in court." },
                  { q: "What happens when an ECS mandate bounces?", a: "The lender may issue a statutory demand notice within 30 days. You then have 15 days to clear the amount to avoid criminal charges." },
                  { q: "How is Section 25 different from Section 138?", a: "Section 138 applies exclusively to physical paper cheques, whereas Section 25 applies to electronic fund transfers like ECS and NACH mandates." },
                  { q: "What is the timeline for a Section 25 legal notice?", a: "The lender must issue the notice within 30 days of the bounce. You must pay or reply within 15 days of receiving the notice." },
                  { q: "How can I defend against an ECS bounce legal notice?", a: "You can defend by proving technical errors, showing the mandate was cancelled prior, or demonstrating the debt was disputed or invalid." },
                  { q: "Is an ECS bounce a civil or criminal case?", a: "While loan default is civil, an ECS bounce itself falls under Section 25, making it a quasi-criminal offense if you fail to respond to the notice." },
                  { q: "Can a digital lender file a case anywhere in India?", a: "Jurisdiction is generally determined by where the mandate was presented or the lender's registered office, leading to notices from different states." },
                  { q: "Should I reply to a Section 25 legal notice?", a: "Yes. Ignoring it can lead to a criminal complaint in a magistrate court. A strong legal reply drafted by an advocate is essential." },
                  { q: "Can I cancel a NACH mandate to stop the bounce?", a: "You can cancel a mandate with your bank. If the lender presents a cancelled mandate, it weakens their case for a Section 25 offense if properly documented." }
                ].map((faq, index) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg text-[#2E2E2E] mb-2">{faq.q}</h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div id="contact-advocates" className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4">Received a legal notice under Section 25 for an ECS or NACH bounce?</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Our advocates can draft a strong legal reply to protect you from criminal proceedings and help you settle the loan.
                </p>
                <button className="bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-lg text-lg">
                  Get Legal Help Now
                </button>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The content on this page is for informational purposes only and does not constitute formal legal advice. Always consult with a qualified advocate for your specific situation.
              </p>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">Facing Criminal Charges?</h4>
                <p className="text-gray-300 text-sm mb-6 relative z-10">A proper legal reply is your first line of defense against Section 25 notices.</p>
                <button className="w-full bg-[#1F5EFF] text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors relative z-10">
                  Speak to an Advocate
                </button>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">Legal Resources</h4>
                <ul className="space-y-4">
                  {[
                    "Defending Section 138",
                    "How to Cancel NACH",
                    "Understanding Arbitration",
                    "Your Rights as a Borrower"
                  ].map((item, idx) => (
                    <li key={idx} className="group flex items-center text-gray-700 hover:text-[#1F5EFF] cursor-pointer text-sm font-medium transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
