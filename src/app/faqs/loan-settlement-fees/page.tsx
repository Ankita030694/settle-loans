import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Loan Settlement Fees & Charges | Transparent Pricing - SettleLoans",
  description: "Understanding loan settlement costs has never been easier. We charge a flat fee of 15% of the outstanding amount, while the bank typically settles for 35%. Total cost to you: 50% of your debt.",
  alternates: {
    canonical: "https://settleloans.in/loan-settlement-fees",
  },
};

export default function LoanSettlementFeesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/faqs/loan-settlement-fees#webpage",
        "url": "https://settleloans.in/faqs/loan-settlement-fees",
        "name": "Loan Settlement Fees & Charges | Transparent Pricing - SettleLoans",
        "description": "Understanding loan settlement costs has never been easier. We charge a flat fee of 15% of the outstanding amount, while the bank typically settles for 35%. Total cost to you: 50% of your debt.",
        "breadcrumb": { "@id": "https://settleloans.in/faqs/loan-settlement-fees#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/faqs/loan-settlement-fees#breadcrumb",
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
            "name": "FAQs",
            "item": "https://settleloans.in/faqs"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Fees & Charges",
            "item": "https://settleloans.in/faqs/loan-settlement-fees"
          }
        ]
      },
      {
        "@type": "PricingPlan",
        "@id": "https://settleloans.in/faqs/loan-settlement-fees#pricing",
        "name": "SettleLoans Service Fee",
        "description": "Our transparent pricing model for loan settlement services.",
        "price": "15%",
        "priceCurrency": "INR",
        "unitText": "of outstanding debt",
        "provider": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/faqs/loan-settlement-fees#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do I have to pay the 35% to the bank immediately?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not necessarily. Once we negotiate the amount, banks usually give 15-30 days to pay. In some cases, we can even negotiate a 3-month EMI plan."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/faqs/loan-settlement-fees#service",
        "name": "Loan Settlement Cost Guide",
        "description": "Comprehensive guide on the costs and savings associated with professional loan settlement.",
        "provider": {
          "@type": "Organization",
          "name": "SettleLoans",
          "url": "https://settleloans.in"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "980"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Karan Johar" },
            "datePublished": "2024-01-20",
            "reviewBody": "Transparent pricing. They saved me 50% on my debt exactly as promised. The 15% fee was worth every rupee for the peace of mind.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
       <section className="w-full bg-[var(--color-section-light)] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-semibold mb-6 tracking-wide uppercase">
            Transparent Pricing
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-[var(--color-text-hero)] mb-6 leading-[1.1] tracking-tight">
            Pay Only 50% <br className="hidden md:block"/> of Your Total Debt
          </h1>
          <p className="text-base md:text-xl text-[var(--color-text-body)]/80 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            No hidden charges. No complex calculations. We have standardized the settlement process to give you huge savings with zero surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[var(--color-primary)] text-white font-semibold py-4 px-10 rounded-full hover:bg-[var(--color-primary-hover)] transition-all duration-300 text-lg shadow-[0_4px_14px_0_rgba(8,73,75,0.39)] hover:shadow-[0_6px_20px_rgba(8,73,75,0.23)] hover:-translate-y-0.5">
              Request Call Back
            </Link>
             <Link href="#breakdown" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[var(--color-text-body)] font-semibold py-4 px-10 rounded-full border border-[var(--color-border)] hover:bg-gray-50 transition-all duration-300 text-lg">
              See Breakdown
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb - Responsive Scroll */}
      <div className="w-full bg-white border-b border-[var(--color-border)] overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-[var(--color-text-muted)]">
              <li>
                <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
              </li>
              <li>
                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </li>
              <li>
                <Link href="/services" className="hover:text-[var(--color-primary)] transition-colors">Services</Link>
              </li>
              <li>
                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </li>
              <li className="font-semibold text-[var(--color-text-body)]" aria-current="page">
                Fees & Charges
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
        
        {/* Left Column: Table of Contents (Sticky) */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <TableOfContents 
            items={[
               { id: "breakdown", title: "The 35/15 Rule" },
               { id: "calculation", title: "Calculation Example" },
               { id: "diy-economics", title: "DIY vs Professional" },
               { id: "why-fees", title: "Why Do We Charge?" },
               { id: "hidden-costs", title: "Hidden Costs Avoided" },
               { id: "market-comparison", title: "Market Comparison" },
               { id: "success-fee", title: "Success Fee Model" },
               { id: "payment-terms", title: "Payment Terms" },
               { id: "refund-policy", title: "Refund Policy" },
               { id: "faqs", title: "Pricing FAQs" }
            ]}
          />
        </aside>

        {/* Middle Column: Main Content */}
        <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
          
          {/* Section 1: The Breakdown */}
          <section id="breakdown" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-8 leading-tight">
              The 35/15 Cost Model
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
               <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-8">
                Most settlement agencies confuse you with complex "savings percentage" formulas. We prefer brutal simplicity. In most successful settlements, the total cost to you will be roughly <strong>50% of your current outstanding amount</strong>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 relative z-10">
                 <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
                    <div className="text-5xl font-bold text-blue-600 mb-2">35%</div>
                    <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide">Goes to the Bank</h3>
                    <div className="w-12 h-1 bg-blue-200 mx-auto my-3 rounded-full"></div>
                    <p className="text-sm text-gray-600">
                       This is the principal amount we negotiate the bank down to. You pay this directly to the bank to close the loan.
                    </p>
                 </div>
                 <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 text-center">
                    <div className="text-5xl font-bold text-purple-600 mb-2">15%</div>
                    <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide">Our Service Fees</h3>
                    <div className="w-12 h-1 bg-purple-200 mx-auto my-3 rounded-full"></div>
                    <p className="text-sm text-gray-600">
                       This is the fee for our legal team, negotiators, and anti-harassment services.
                    </p>
                 </div>
              </div>

               <div className="mt-8 bg-[var(--color-section-light)] p-4 rounded-xl text-center border border-[var(--color-border)]">
                  <p className="font-bold text-xl text-[var(--color-text-hero)]">
                     Total Savings: <span className="text-green-600">50% FLAT</span>
                  </p>
               </div>
            </div>
          </section>

          {/* Section 2: Calculation Example */}
          <section id="calculation" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
              Real World Calculation
            </h2>
            <p className="mb-6">
               Here is exactly how the numbers look for a typical loan of ₹5 Lakhs:
            </p>
             <div className="overflow-x-auto">
               <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                 <thead className="bg-gray-50 border-b border-gray-200">
                   <tr>
                     <th className="py-4 px-6 text-left font-semibold text-gray-700">Description</th>
                     <th className="py-4 px-6 text-right font-semibold text-gray-700">Amount</th>
                     <th className="py-4 px-6 text-left font-semibold text-gray-700">Notes</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-200">
                   <tr>
                     <td className="py-4 px-6 font-medium text-gray-900">Total Outstanding</td>
                     <td className="py-4 px-6 text-right font-bold">₹5,00,000</td>
                     <td className="py-4 px-6 text-sm text-gray-500">Principal + Accumulated Interest</td>
                   </tr>
                   <tr className="bg-blue-50/30">
                     <td className="py-4 px-6 font-medium text-blue-900">Bank Settlement Amount (35%)</td>
                     <td className="py-4 px-6 text-right font-bold text-blue-700">₹1,75,000</td>
                     <td className="py-4 px-6 text-sm text-blue-800/70">Paid directly to Bank via DD/Cheque</td>
                   </tr>
                   <tr className="bg-purple-50/30">
                     <td className="py-4 px-6 font-medium text-purple-900">SettleLoans Fee (15%)</td>
                     <td className="py-4 px-6 text-right font-bold text-purple-700">₹75,000</td>
                     <td className="py-4 px-6 text-sm text-purple-800/70">Paid to us for services</td>
                   </tr>
                   <tr className="bg-gray-800 text-white">
                     <td className="py-4 px-6 font-bold">Total You Pay</td>
                     <td className="py-4 px-6 text-right font-bold">₹2,50,000</td>
                     <td className="py-4 px-6 text-sm text-gray-300">You save ₹2,50,000 (50%)</td>
                   </tr>
                 </tbody>
               </table>
             </div>
             <p className="mt-4 text-xs text-gray-500 italic">
               *Note: The 35% figure is an average target. In some difficult cases, banks may demand 40-45%, while in older NPA cases, we have achieved 20-25% settlements. The 15% service fee remains constant on the total outstanding value.
             </p>
          </section>

          {/* Section 3: DIY vs Professional Economics (NEW) */}
           <section id="diy-economics" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
              Is "Doing It Yourself" Really Cheaper?
            </h2>
             <div className="bg-white border border-[var(--color-border)] rounded-2xl p-8 shadow-sm">
                <p className="mb-6 leading-relaxed">
                   A common misconception is that by handling the settlement yourself, you save the 15% service fee. However, statistical data and industry realities suggest otherwise. When you negotiate as an individual, you are often negotiating against a team of trained bank recovery officers who know exactly how to pressure you.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                      <h3 className="text-xl font-bold text-red-800 mb-4">The DIY Reality</h3>
                      <ul className="space-y-4">
                         <li className="flex items-start">
                            <span className="text-red-500 mr-2">✕</span>
                            <span className="text-sm text-gray-700">Banks know you are emotionally stressed and vulnerable.</span>
                         </li>
                         <li className="flex items-start">
                            <span className="text-red-500 mr-2">✕</span>
                            <span className="text-sm text-gray-700">Individual settlements typically close at <strong>60-70%</strong> of the outstanding amount.</span>
                         </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">✕</span>
                            <span className="text-sm text-gray-700">You face 100% of the harassment calls directly.</span>
                         </li>
                         <li className="flex items-start">
                            <span className="text-red-500 mr-2">✕</span>
                            <span className="text-sm text-gray-700">Risk of invalid or fake settlement letters.</span>
                         </li>
                      </ul>
                      <div className="mt-6 pt-6 border-t border-red-200">
                         <p className="font-bold text-red-900">Total Cost: ~65% of Debt + High Stress</p>
                      </div>
                   </div>

                   <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-800 mb-4">With SettleLoans</h3>
                      <ul className="space-y-4">
                         <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-sm text-gray-700">We use bulk-negotiation power and legal precedents.</span>
                         </li>
                         <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-sm text-gray-700">We target settlements at <strong>30-35%</strong> of the outstanding amount.</span>
                         </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-sm text-gray-700">All harassment calls are diverted to our legal team.</span>
                         </li>
                         <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-sm text-gray-700">Guaranteed authentic documentation and NOC.</span>
                         </li>
                      </ul>
                      <div className="mt-6 pt-6 border-t border-green-200">
                         <p className="font-bold text-green-900">Total Cost: ~50% of Debt + Zero Stress</p>
                      </div>
                   </div>
                </div>
                <p className="mt-6 text-sm text-gray-500 text-center italic">
                   Even after paying our 15% fee, you often end up paying significantly less in total than if you had negotiated alone.
                </p>
             </div>
           </section>

          {/* Section 4: Why Do We Charge */}
          <section id="why-fees" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
              What Does The 15% Fee Cover?
            </h2>
            <p className="mb-6">
               You might ask, "Can't I negotiate this myself and save the 15%?" You can, but banks are professional collectors. Without legal backing, you will likely pay 70-80%. Our fee covers a comprehensive suite of services designed to protect you:
            </p>
             <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-lg mb-2 text-gray-800">1. Anti-Harassment Shield</h4>
                <p className="text-sm text-gray-600">We redirect all collection calls to our legal team. You get immediate peace of mind. We take legal action against agents who violate RBI guidelines.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-lg mb-2 text-gray-800">2. Legal Notices & Drafting</h4>
                <p className="text-sm text-gray-600">Our lawyers draft and reply to legal notices, arbitration threats, and Section 138 demands. A single legal reply from a private lawyer can cost ₹5000+.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-lg mb-2 text-gray-800">3. Expert Negotiation</h4>
                <p className="text-sm text-gray-600">We know the "Floor Price" of every bank. We ensure you don't overpay by even a rupee. Our data-driven approach predicts the lowest acceptable offer.</p>
              </div>
               <div className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-lg mb-2 text-gray-800">4. Documentation Audit</h4>
                <p className="text-sm text-gray-600">We ensure the 'Settlement Letter' is genuine. We verify the specific clauses to ensure no future liability remains after payment.</p>
              </div>
               <div className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-lg mb-2 text-gray-800">5. Dispute Resolution</h4>
                <p className="text-sm text-gray-600">If the bank reneges on a promise or fails to issue a certificate, we handle the grievance escalation to the banking ombudsman.</p>
              </div>
               <div className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-lg mb-2 text-gray-800">6. Strategic Delinquency Mgmt</h4>
                <p className="text-sm text-gray-600">We advise on how to prioritize funds and manage multiple creditors simultaneously to prevent total financial collapse.</p>
              </div>
             </div>
          </section>

          {/* Section 5: Hidden Costs (NEW) */}
          <section id="hidden-costs" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
              Hidden Costs You Avoid With Us
            </h2>
            <div className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-lg">
               <p className="mb-4 text-gray-800">
                  When you attempt to settle without professional help, you often incur "invisible" costs that aren't apparent until it's too late:
               </p>
               <ul className="space-y-3">
                  <li className="flex items-start">
                     <span className="font-bold text-gray-700 mr-2">• Legal Fees:</span>
                     <span className="text-sm text-gray-600">Responding to a single legal notice through a private lawyer can cost between ₹3,000 to ₹7,000. With multiple loans, this can add up to ₹50,000+. We include this in our fee.</span>
                  </li>
                  <li className="flex items-start">
                     <span className="font-bold text-gray-700 mr-2">• Travel & Logistics:</span>
                     <span className="text-sm text-gray-600">Banks often force you to visit their branches repeatedly to "sign papers" or negotiate. We handle everything remotely or through our network.</span>
                  </li>
                  <li className="flex items-start">
                     <span className="font-bold text-gray-700 mr-2">• Accrued Interest:</span>
                     <span className="text-sm text-gray-600">Inefficient negotiation drags the process for months, allowing interest to pile up. Our rapid negotiation halts the interest accumulation faster.</span>
                  </li>
                  <li className="flex items-start">
                     <span className="font-bold text-gray-700 mr-2">• Health Costs:</span>
                     <span className="text-sm text-gray-600">The mental toll of dealing with harassment often leads to genuine health issues. The value of your peace of mind is immeasurable.</span>
                  </li>
               </ul>
            </div>
          </section>

          {/* Section 6: Market Comparison */}
          <section id="market-comparison" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
              Market Comparison
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
               <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 gap-6">
                  <div className="text-center">
                     <h4 className="font-bold text-gray-600 mb-2">Individual Effort</h4>
                     <p className="text-3xl font-bold text-red-500 mb-2">~80%</p>
                     <p className="text-xs text-gray-500 px-4">Cost when you negotiate alone. Banks know you are scared and vulnerable.</p>
                  </div>
                   <div className="text-center">
                     <h4 className="font-bold text-gray-600 mb-2">Other Agencies</h4>
                     <p className="text-3xl font-bold text-orange-500 mb-2">~65%</p>
                     <p className="text-xs text-gray-500 px-4">They often have hidden "Success Fees" or tiered pricing structures.</p>
                  </div>
                   <div className="text-center">
                     <h4 className="font-bold text-[var(--color-primary)] mb-2">SettleLoans</h4>
                     <p className="text-3xl font-bold text-green-600 mb-2">~50%</p>
                     <p className="text-xs text-gray-500 px-4">Standardized, bulk-negotiation power gets you the lowest possible rates.</p>
                  </div>
               </div>
            </div>
          </section>

          {/* Section 7: Success Fee Model (NEW) */}
          <section id="success-fee" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
              Our "Success Fee" Model
            </h2>
            <p className="mb-6">
               We operate on a principle of trust and performance. In the debt settlement industry, this is known as a performance-based models.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Why it empowers you</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                     Our revenue is directly tied to the service we deliver. The bulk of our fee (Safety Fund contribution aside) is only realized when we actually obtain a settlement letter for you. This aligns our incentives with yours. We <em>want</em> you to get a settlement as fast as possible.
                  </p>
               </div>
               <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Beware of Upfront Frauds</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                     Many fraudulent agencies ask for large upfront fees (e.g., ₹20,000) promising to "erase data from CIBIL" or "close loan without payment". These are scams. No one can erase CIBIL data legally. We charge a small enrollment fee for legal onboarding, but the service fee is strictly process-driven.
                  </p>
               </div>
            </div>
          </section>

          {/* Section 8: Payment Terms */}
          <section id="payment-terms" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
              Flexible Payment Terms
            </h2>
            <p className="mb-6">
                We understand you are in financial distress. We do not ask for the 15% fee upfront in one go.
            </p>
            <div className="space-y-4">
               <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold mr-4">1</span>
                  <div>
                     <h4 className="font-bold text-gray-900">Enrollment Fee</h4>
                     <p className="text-gray-600 text-sm">A small token amount to start the file and legal protection immediately.</p>
                  </div>
               </div>
               <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold mr-4">2</span>
                  <div>
                     <h4 className="font-bold text-gray-900">Build Your Fund</h4>
                     <p className="text-gray-600 text-sm">Every month, you deposit a small amount into a dedicated savings account (SPA) that YOU control. This builds up the settlement fund.</p>
                  </div>
               </div>
               <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold mr-4">3</span>
                  <div>
                     <h4 className="font-bold text-gray-900">Success Fee</h4>
                     <p className="text-gray-600 text-sm">The bulk of our fee is charged ONLY when we get you a settlement offer that you accept.</p>
                  </div>
               </div>
            </div>
          </section>

          {/* Section 9: Refund Policy */}
           <section id="refund-policy" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6">
              100% Refund Policy
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
               <p className="text-yellow-900 font-medium text-lg mb-2">
                 Our Promise: Performance or Nothing.
               </p>
               <p className="text-yellow-800/80 mb-0">
                 If we fail to save you money or if we cannot get a settlement offer from your bank, the entire service fee collected is <strong>refunded 100%</strong>. We earn only when you save. This guarantee is written into our client agreement.
               </p>
            </div>
          </section>

          {/* Section 10: FAQs */}
          <section id="faqs" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mt-16 mb-8">Pricing and Policy FAQs</h2>
            <div className="space-y-4 not-prose">
              {[
                { 
                  q: "Do I have to pay the 35% to the bank immediately?", 
                  a: "Not necessarily. Once we negotiate the amount, banks usually give 15-30 days to pay. In some cases, we can even negotiate a 3-month EMI plan for the settlement amount. This gives you breathing room to arrange funds." 
                },
                { 
                  q: "What if the bank refuses to settle at 35%?", 
                  a: "Negotiation is a process, not an event. If they refuse initially, we wait. As the debt ages, the bank's flexibility increases. Our team keeps engaging until we hit the target percentage. We have successfully settled cases even after legal notices were sent." 
                },
                { 
                  q: "Are there any other hidden charges?", 
                  a: "No. Our 15% fee is all-inclusive of legal support, call handling, and negotiation. GST is applicable as per government norms on the fee amount, but there are no other 'file charges' or 'lawyer fees' billed separately." 
                },
                { 
                  q: "Can I pay your fee after the settlement is done?", 
                  a: "We usually take a part of the fee (Enrollment) to start working on your file and stop harassment. The remaining 'Success Fee' is payable when we get the settlement letter. This ensures commitment from both sides." 
                },
                 { 
                  q: "Is the fee calculated on the original principal or the total outstanding?", 
                  a: "The fee is calculated on the 'Total Outstanding At Enrolment'. This is important because banks keep adding interest and penalties every month. We freeze your fee basis at the amount you owed when you joined us, protecting you from future inflation of the debt." 
                },
                { 
                  q: "Do I have to pay taxes on the settled amount?", 
                  a: "Generally, in India, the waived off amount in a personal loan settlement is considered a capital receipt and not taxable income for individuals. However, for business loans, it might be treated differently. We recommend consulting a CA for specific large amounts." 
                },
                { 
                  q: "What happens to the fee if I decide to withdraw from the program?", 
                  a: "If you withdraw before any settlement is achieved, the service fee you have built up in your savings account is yours to keep. The enrollment fee covers the initial legal work and is non-refundable after a cooling-off period." 
                },
                { 
                  q: "Does SettleLoans pay the bank on my behalf?", 
                  a: "No, never. You make the settlement payment DIRECTLY to the bank (via DD or Cheque) to ensure transparency. You only pay the service fee to SettleLoans. We do not handle your settlement funds to avoid any misappropriation risk." 
                }
              ].map((faq, i) => (
                <details key={i} className="group bg-white border border-[var(--color-border)] rounded-xl overflow-hidden hover:shadow-md transition-all">
                  <summary className="flex justify-between items-center p-5 cursor-pointer font-bold text-[var(--color-text-hero)] list-none">
                    <span className="text-lg">{i + 1}. {faq.q}</span>
                    <span className="transition-transform group-open:rotate-180">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-[var(--color-text-body)] opacity-90 leading-relaxed border-t border-gray-100 pt-4 mt-0 bg-gray-50/50">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          <div className="mt-16 pt-8 border-t border-[var(--color-border)] text-center text-[var(--color-text-muted)] text-sm italic">
             <p>Disclaimer: The 35% bank settlement figure is an estimated target based on historical data of unsecured loans (personal/credit card) that are 180+ days past due. Actual settlement offers vary bank to bank. SettleLoans does not guarantee a specific percentage. SettleLoans is a debt counseling and negotiation service, not a lender or a law firm.</p>
          </div>

          {/* Mobile CTA (Visible only on mobile) */}
          <div className="lg:hidden mt-16 mb-8">
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden border border-[var(--color-border)]">
              <div className="bg-[var(--color-primary)] p-6 text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Save 50% Today</h3>
                <p className="opacity-90 text-sm">Start your debt-free journey with clearly defined costs.</p>
              </div>
              <div className="p-8 text-center">
                <Link href="/contact" className="inline-block w-full bg-[var(--color-primary)] text-white font-semibold py-4 px-6 rounded-xl hover:bg-[var(--color-primary-hover)] transition-all shadow-md text-lg text-center">
                  Start Now
                </Link>
                <p className="mt-4 text-xs text-[var(--color-text-muted)] text-center"> Standard Pricing Plan</p>
              </div>
            </div>
          </div>
        </article>

        {/* Right Column: CTA & Related Pages (Sticky) */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <div className="sticky top-24 space-y-8">
            
            {/* CTA Container */}
             <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden border border-[var(--color-border)] group">
               <div className="bg-[var(--color-primary)] p-4 text-center">
                 <h3 className="text-lg font-bold text-white">Save 50% Today</h3>
               </div>
               <div className="p-6 text-center">
                <p className="mb-6 text-sm text-[var(--color-text-body)] opacity-80 leading-relaxed">
                  Start your debt-free journey with clearly defined costs.
                </p>
                <Link href="/contact" className="inline-block w-full bg-[var(--color-primary)] text-white font-semibold py-3 px-4 rounded-xl hover:bg-[var(--color-primary-hover)] transition-all shadow-md group-hover:shadow-lg">
                  Start Now
                </Link>
              </div>
            </div>

            {/* Related Pages Container */}
            <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-4 border-b border-gray-100 pb-2">Related Info</h3>
              <ul className="space-y-4 text-sm font-medium">
                 <li>
                  <Link href="/eligibility-checker-for-loan-settlement" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                    Check Eligibility
                  </Link>
                </li>
                <li>
                  <Link href="/loan-settlement" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                    Settlement Process
                  </Link>
                </li>
                 <li>
                  <Link href="/contact" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                     <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                    Contact Us
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
