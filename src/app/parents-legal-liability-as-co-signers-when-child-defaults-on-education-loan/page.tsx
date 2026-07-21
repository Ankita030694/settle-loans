import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Education Loan Defaults: Legal Liability of Parents as Co-Signers",
  description: "When a child defaults on an education loan due to joblessness, parents face severe legal liability. Learn how banks target retirement savings and how to settle the debt.",
  alternates: {
    canonical: "https://www.settleloan.in/parents-legal-liability-as-co-signers-when-child-defaults-on-education-loan"
  }
};

const tocItems = [
  { id: 'introduction', title: 'The Tragic Reality of Education Loan Defaults' },
  { id: 'legal-liability', title: 'Legal Liability of Parents as Co-Signers' },
  { id: 'bank-harassment', title: 'How Banks Target Retirement Savings' },
  { id: 'cibil-impact', title: 'Impact on Parents\' CIBIL Scores' },
  { id: 'recovery-tactics', title: 'Aggressive Education Loan Recovery Tactics' },
  { id: 'settlement-solution', title: 'How to Settle an Education Loan in India' },
  { id: 'success-stories', title: 'Success Stories: Education Loans Settled' },
  { id: 'faqs', title: 'Frequently Asked Questions' }
];

export default function ParentsLegalLiabilityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.settleloan.in/parents-legal-liability-as-co-signers-when-child-defaults-on-education-loan",
        "url": "https://www.settleloan.in/parents-legal-liability-as-co-signers-when-child-defaults-on-education-loan",
        "name": "Education Loan Defaults: Legal Liability of Parents as Co-Signers",
        "description": "Understand the legal liability of parents as co-signers when a child defaults on an education loan and how to protect your family from bank harassment."
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
            "name": "Education Loan Defaults: Legal Liability of Parents as Co-Signers",
            "item": "https://www.settleloan.in/parents-legal-liability-as-co-signers-when-child-defaults-on-education-loan"
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "Education Loan Defaults: Legal Liability of Parents as Co-Signers",
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
        "datePublished": "2024-10-15T08:00:00+08:00",
        "dateModified": "2024-10-15T08:00:00+08:00",
        "description": "When a child defaults on an education loan due to joblessness, parents face severe legal liability. Learn how banks target retirement savings and how to settle the debt.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.settleloan.in/parents-legal-liability-as-co-signers-when-child-defaults-on-education-loan"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Are parents legally liable if a child defaults on an education loan in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. In almost all education loans exceeding ₹4 Lakhs, parents are required to be co-borrowers or guarantors. This means they share equal legal responsibility to repay the entire debt."
            }
          },
          {
            "@type": "Question",
            "name": "Can the bank seize my parents' retirement savings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banks cannot directly freeze retirement accounts like EPF or PPF, but they can attach standard savings accounts or fixed deposits where retirement funds have been transferred, usually after obtaining a court order."
            }
          },
          {
            "@type": "Question",
            "name": "Does an education loan default affect the parents' CIBIL score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Since the parent is a co-signer, the default will plummet their CIBIL score identically to the student's score, making it impossible for the parents to get personal loans or credit cards."
            }
          },
          {
            "@type": "Question",
            "name": "Can the bank sell our family home to recover the education loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If the family home or property was pledged as collateral (common for loans above ₹7.5 Lakhs), the bank can initiate proceedings under the SARFAESI Act to auction the property."
            }
          },
          {
            "@type": "Question",
            "name": "Is it possible to settle an education loan in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, education loans can be settled through a One Time Settlement (OTS) if there is a genuine financial hardship, such as prolonged unemployment or a medical crisis."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if the student moves abroad and defaults?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The bank will entirely shift the recovery focus to the parents residing in India, initiating legal action and harassment against them since they are co-signers."
            }
          },
          {
            "@type": "Question",
            "name": "Can recovery agents harass parents for a student loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While recovery agents often resort to intimidation, RBI guidelines prohibit harassment, abusive language, or calling outside reasonable hours. You can file a complaint if harassed."
            }
          },
          {
            "@type": "Question",
            "name": "Will a loan settlement permanently ruin the student's career?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A settled status remains on the CIBIL report for up to 7 years, impacting future credit. However, it does not legally bar a student from getting a job, though some finance sector employers may do background checks."
            }
          },
          {
            "@type": "Question",
            "name": "What if the parent who co-signed passes away?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The liability falls completely on the primary borrower (the student) or the surviving legal heirs to the extent of the assets inherited from the deceased parent."
            }
          },
          {
            "@type": "Question",
            "name": "How much discount can be negotiated in an education loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depending on the vintage of the NPA and the borrower's proven inability to pay, settlements can range from 30% to 70% waivers on the total outstanding amount."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Education Loan Settlement Services",
        "description": "Expert legal and negotiation services to protect parents from harassment and settle education loan defaults at significant discounts.",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoan"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "184"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rajesh Sharma"
            },
            "datePublished": "2024-02-14",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody": "My son couldn't find a job, and the bank was threatening to attach my retirement FDs. SettleLoan helped negotiate a 60% discount and closed the education loan."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Anita Verma"
            },
            "datePublished": "2024-05-22",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody": "The recovery agents were calling me 20 times a day for my daughter's education loan. These experts stepped in, stopped the harassment, and settled the debt peacefully."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Prakash K."
            },
            "datePublished": "2024-07-10",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4"
            },
            "reviewBody": "Excellent service. We were drowning in ₹18 Lakhs of education loan debt with no income. They settled it for ₹7 Lakhs and saved our family home."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Meena Iyer"
            },
            "datePublished": "2024-08-05",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody": "Very professional team. They explained exactly what my liability as a co-signer was and handled the bank negotiations brilliantly. Highly recommended."
          }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
          
          {/* Hero Section */}
          <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto text-center relative z-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                Legal Guide & Settlement Strategies
              </span>
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                Education Loan Defaults: The Legal Liability of <span className="text-[#1F5EFF]">Parents as Co-Signers</span>
              </h1>
              <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
                When a student cannot find a job and defaults on an education loan, parents face the brutal reality of bank harassment, plummeting CIBIL scores, and threats to their retirement savings. Learn your legal rights.
              </p>
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Protect Your Parents Today
              </Link>
            </div>
          </section>

          {/* Breadcrumbs */}
          <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-3 flex items-center gap-2 text-xs md:text-sm text-[#747474]">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/resources" className="hover:text-[#1F5EFF] transition-colors">Resources</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Parents Legal Liability in Education Loan Defaults</span>
            </div>
          </div>

          {/* 3-Column Layout */}
          <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative max-w-screen-2xl">
            
            {/* Left Column: TOC */}
            <aside className="hidden lg:block w-1/5 min-w-[240px]">
              <div className="sticky top-24">
                <TableOfContents items={tocItems} />
              </div>
            </aside>

            {/* Middle Column: Article */}
            <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
              
              {/* Introduction */}
              <section id="introduction" className="scroll-mt-32 mb-16">
                <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                  <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                    The Tragic Reality of Education Loan Defaults
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    It is an increasingly common and tragic scenario in India: parents invest their life savings and take on massive education loans to fund their child’s higher studies, dreaming of a prosperous future. However, upon graduation, the student faces a bleak job market. Months turn into years, and without a steady income, the EMI payments stop.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    When an <strong>education loan default by a student</strong> occurs, the bank doesn't just write off the loss. Instead, their focus immediately shifts to the parents. Because parents are almost universally mandated to act as co-borrowers or guarantors, they find themselves caught in a terrifying web of legal liabilities, facing harassment and threats to the very assets they spent decades building.
                  </p>
                </div>
              </section>

              {/* Legal Liability */}
              <section id="legal-liability" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                  Legal Liability of Parents as Co-Signers
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Many families misunderstand the role of a co-signer. They assume it is merely a formality to help the student secure the loan. In reality, the legal definition of a co-borrower or guarantor means you share 100% of the liability for the debt.
                </p>

                <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                  <h4 className="text-xl font-black text-[#1F5EFF] mb-4">
                    The Harsh Legal Truth of Co-Borrowing
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                      <span className="text-[#1F5EFF] font-medium">Equal Liability: If the primary borrower (the student) fails to pay, the bank has the full legal right to demand the entire outstanding amount from the co-borrower (the parents).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                      <span className="text-[#1F5EFF] font-medium">No Mandatory Exhaustion: The bank does not have to exhaust all legal options against the student before targeting the parents. They can pursue whoever is easier to recover from.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                      <span className="text-[#1F5EFF] font-medium">Collateral Seizure: If the parents pledged their house or property as collateral (standard for loans above ₹7.5 Lakhs), the bank can auction it under the SARFAESI Act.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Bank Harassment */}
              <section id="bank-harassment" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                  How Banks Target Parents and Retirement Savings
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  When a student is unemployed, they have no assets to seize. The parents, however, usually have steady incomes, fixed deposits, or physical property. This makes them the primary target for <strong>education loan recovery</strong>. 
                </p>

                <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                  <p className="text-lg leading-relaxed text-gray-700 italic">
                    "My son lost his job during the layoffs. Within three months, the bank started calling me at my office, threatening to attach my retirement savings if I didn't pay his ₹15 Lakh EMI immediately."
                  </p>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  While banks cannot legally touch protected retirement funds like Provident Funds (EPF or PPF) directly, they aggressively target standard savings accounts and fixed deposits. If the parents have a salary account with the same bank, the bank may use the "Right of Set-Off" to automatically deduct EMIs from the parents' accounts without prior warning.
                </p>

                <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                  <h3 className="text-xl font-black text-red-700 mb-2">Warning: Bank Harassment is Illegal</h3>
                  <p className="text-red-900 text-lg">
                    Banks harassing parents for student loans is a common issue, but it violates RBI guidelines. Recovery agents cannot call your relatives, visit your workplace to humiliate you, or use abusive language.
                  </p>
                </div>
              </section>

              {/* CIBIL Impact */}
              <section id="cibil-impact" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                  The Devastating Impact on Parents' CIBIL Scores
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Because the parent is registered as a co-borrower on the loan agreement, the loan appears on both the student's and the parent's CIBIL reports. 
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h4 className="font-black text-[#1F5EFF] text-lg mb-3">For the Student</h4>
                    <p className="text-gray-700">The default ruins their credit score right at the beginning of their financial journey, making it difficult to get credit cards, auto loans, or even clear background checks for certain finance-sector jobs.</p>
                  </div>
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h4 className="font-black text-[#1F5EFF] text-lg mb-3">For the Parents</h4>
                    <p className="text-gray-700">The default immediately crashes the parent's CIBIL score. This means parents may be denied medical loans, personal loans, or credit extensions right when they need financial stability the most.</p>
                  </div>
                </div>
              </section>

              {/* Settlement Solution */}
              <section id="settlement-solution" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                  How to Settle an Education Loan in India
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  If the student is genuinely unable to find employment and the parents cannot afford to cover the massive EMIs, a One Time Settlement (OTS) is often the most practical solution. To <strong>settle education loan in India</strong>, you negotiate with the bank to close the account for a fraction of the outstanding amount.
                </p>

                <div className="space-y-12 my-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">Prove Financial Hardship</h4>
                      <p className="text-gray-700">You must formally demonstrate that the student has no income and the parents are financially distressed or nearing retirement. Bank statements and unemployment proofs are critical.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">Stop Harassment Officially</h4>
                      <p className="text-gray-700">Send legal notices to the bank asserting your rights under RBI guidelines, forcing them to route all communication through legal channels rather than harassing phone calls.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">Negotiate a Discount</h4>
                      <p className="text-gray-700">Banks prefer recovering something over nothing. Expert negotiators can often reduce an unsecured education loan burden by 40% to 70%, allowing you to close the matter peacefully.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Success Stories */}
              <section id="success-stories" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                  Success Stories: Education Loans Settled
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  {/* Review 1 */}
                  <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                          R
                        </div>
                        <div>
                          <h4 className="font-bold text-[#2E2E2E]">Rajesh S.</h4>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">Loan: ₹15L</span>
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Settled: ₹6L</span>
                    </div>
                    <p className="text-gray-600">"My son couldn't find a job, and the bank was threatening my retirement FDs. SettleLoan stepped in, stopped the calls to my office, and settled it for 40%."</p>
                  </div>

                  {/* Review 2 */}
                  <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                          A
                        </div>
                        <div>
                          <h4 className="font-bold text-[#2E2E2E]">Anita V.</h4>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">Loan: ₹8L</span>
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Settled: ₹3.5L</span>
                    </div>
                    <p className="text-gray-600">"Agents were harassing me daily for my daughter's loan. These experts protected us legally and got us a massive waiver. Truly a lifesaver."</p>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  
                  <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-[#2E2E2E] mb-2">Are parents legally liable if a child defaults on an education loan in India?</h4>
                    <p className="text-gray-700">Yes. In almost all education loans exceeding ₹4 Lakhs, parents are required to be co-borrowers or guarantors, meaning they share equal legal responsibility to repay.</p>
                  </div>

                  <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-[#2E2E2E] mb-2">Can the bank seize my parents' retirement savings?</h4>
                    <p className="text-gray-700">Banks cannot directly freeze accounts like EPF, but they can attach standard savings accounts or fixed deposits where retirement funds have been transferred.</p>
                  </div>

                  <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-[#2E2E2E] mb-2">Does an education loan default affect the parents' CIBIL score?</h4>
                    <p className="text-gray-700">Yes. Since the parent is a co-signer, the default will plummet their CIBIL score identically to the student's score, impacting their future borrowing capacity.</p>
                  </div>

                  <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-[#2E2E2E] mb-2">Can the bank sell our family home to recover the loan?</h4>
                    <p className="text-gray-700">If the family home was pledged as collateral (common for loans above ₹7.5 Lakhs), the bank can initiate proceedings under the SARFAESI Act to auction the property.</p>
                  </div>

                  <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-[#2E2E2E] mb-2">Is it possible to settle an education loan in India?</h4>
                    <p className="text-gray-700">Yes, education loans can be settled through a One Time Settlement (OTS) if there is genuine financial hardship, such as prolonged unemployment.</p>
                  </div>

                  <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-[#2E2E2E] mb-2">What happens if the student moves abroad and defaults?</h4>
                    <p className="text-gray-700">The bank will shift the recovery focus entirely to the parents residing in India, initiating legal action and harassment against them.</p>
                  </div>

                  <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-[#2E2E2E] mb-2">Can recovery agents harass parents for a student loan?</h4>
                    <p className="text-gray-700">While they often resort to intimidation, RBI guidelines strictly prohibit harassment, abusive language, or calling outside reasonable hours.</p>
                  </div>

                  <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-[#2E2E2E] mb-2">Will a loan settlement permanently ruin the student's career?</h4>
                    <p className="text-gray-700">A settled status remains on the CIBIL report for 7 years. It does not legally bar a student from getting a job, though some finance employers check credit histories.</p>
                  </div>

                  <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-[#2E2E2E] mb-2">What if the parent who co-signed passes away?</h4>
                    <p className="text-gray-700">The liability falls completely on the primary borrower (the student) or the surviving legal heirs to the extent of the assets inherited.</p>
                  </div>

                  <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-[#2E2E2E] mb-2">How much discount can be negotiated in a settlement?</h4>
                    <p className="text-gray-700">Depending on the vintage of the NPA and the borrower's proven inability to pay, settlements can range from 30% to 70% waivers.</p>
                  </div>

                </div>
              </section>

              {/* Lead Gen Hook */}
              <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <h3 className="text-3xl md:text-4xl font-black mb-6 relative z-10">
                  Is the bank threatening your parents' retirement savings because of an unpaid education loan?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                  Consult our settlement experts to stop the harassment and negotiate a heavily discounted closure.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold text-lg py-4 px-12 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                  Get a Free Settlement Evaluation
                </Link>
                
                <div className="mt-16 pt-8 border-t border-gray-100/20 text-center relative z-10">
                  <p className="text-gray-400 text-sm italic">
                    Disclaimer: Settlement terms depend on the bank's policies and individual financial hardship proof. We do not provide loans.
                  </p>
                </div>
              </div>

            </article>

            {/* Right Column: Sidebar Context Cards */}
            <aside className="hidden lg:block w-1/5 min-w-[240px]">
              <div className="sticky top-24 space-y-8">
                
                {/* Dark CTA Card */}
                <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                  <h4 className="text-2xl font-black mb-4 relative z-10">Protect Your Family</h4>
                  <p className="text-gray-300 text-sm mb-6 relative z-10">
                    Don't let aggressive recovery agents ruin your parents' peace of mind. We handle the bank for you.
                  </p>
                  <Link href="/contact" className="block w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors relative z-10">
                    Talk to an Expert
                  </Link>
                </div>

                {/* White Resources Card */}
                <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                  <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                    Related Legal Guides
                  </h4>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/harassment-by-recovery-agents-rights" className="group flex items-center text-gray-700 hover:text-[#1F5EFF] transition-colors text-sm font-medium">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                        Stop Recovery Agent Harassment
                      </Link>
                    </li>
                    <li>
                      <Link href="/settlement-impact-on-cibil-score" className="group flex items-center text-gray-700 hover:text-[#1F5EFF] transition-colors text-sm font-medium">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                        Impact of OTS on CIBIL
                      </Link>
                    </li>
                    <li>
                      <Link href="/sarfaesi-act-property-auction" className="group flex items-center text-gray-700 hover:text-[#1F5EFF] transition-colors text-sm font-medium">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                        SARFAESI Act Explained
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>
            </aside>

          </div>
        </main>
      </div>
    </>
  );
}
