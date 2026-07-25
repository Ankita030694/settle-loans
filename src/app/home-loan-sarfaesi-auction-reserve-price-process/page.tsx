import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Home Loan SARFAESI Auction: Reserve Price Process",
  description: "Is the bank trying to auction your house for pennies? Learn how to legally challenge a low 'Reserve Price' and protect your property's true value.",
  alternates: {
    canonical: "https://www.settleloan.in/home-loan-sarfaesi-auction-reserve-price-process",
  },
};

const tocItems = [
  { id: 'understanding-reserve-price', title: 'What is a Reserve Price?' },
  { id: 'property-valuation-metrics', title: 'Types of Property Valuation' },
  { id: 'undervaluation-sarfaesi', title: 'Why Banks Undervalue Properties' },
  { id: 'dangers-of-undervaluation', title: 'The Danger of Residual Debt' },
  { id: 'challenging-auction-price', title: 'How to Challenge Auction Price' },
  { id: 'legal-remedies', title: 'Legal Remedies & DRT Appeals' },
  { id: 'landmark-precedents', title: 'Landmark Supreme Court Rulings' },
  { id: 'success-stories', title: 'Client Success Stories' },
  { id: 'faqs', title: 'Frequently Asked Questions' }
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.settleloan.in/home-loan-sarfaesi-auction-reserve-price-process/#webpage",
        "url": "https://www.settleloan.in/home-loan-sarfaesi-auction-reserve-price-process",
        "name": "Home Loan SARFAESI Auction: Reserve Price Process",
        "description": "Is the bank trying to auction your house for pennies? Learn how to legally challenge a low 'Reserve Price' and protect your property's true value.",
        "inLanguage": "en-IN"
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
            "name": "SARFAESI Guide",
            "item": "https://www.settleloan.in/sarfaesi-act-guide"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Auction Reserve Price Process",
            "item": "https://www.settleloan.in/home-loan-sarfaesi-auction-reserve-price-process"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.settleloan.in/home-loan-sarfaesi-auction-reserve-price-process/#article",
        "headline": "Home Loan SARFAESI Auction: Reserve Price Process",
        "description": "How to legally challenge a low 'Reserve Price' and protect your property's true value during a SARFAESI auction.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoan",
          "url": "https://www.settleloan.in/"
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
          "@id": "https://www.settleloan.in/home-loan-sarfaesi-auction-reserve-price-process/#webpage"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the reserve price in a bank auction?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The reserve price is the minimum amount at which a property can be sold in an auction. It is fixed by the bank based on a valuation report."
            }
          },
          {
            "@type": "Question",
            "name": "Can the bank fix a reserve price lower than the market value?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banks often rely on 'distress sale value' which is lower than the market value. However, they cannot drastically undervalue the property arbitrarily."
            }
          },
          {
            "@type": "Question",
            "name": "How can I challenge the undervaluation of my property under SARFAESI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can challenge the undervaluation by obtaining an independent valuation report from a certified valuer and filing an appeal before the DRT."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if there are no bidders at the reserve price?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If no bids are received, the auction fails. The bank may then reduce the reserve price and conduct a fresh auction after issuing a new notice."
            }
          },
          {
            "@type": "Question",
            "name": "Can I bring a buyer who is willing to pay more than the reserve price?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can facilitate a private treaty sale or bring a buyer to participate in the auction to ensure the property fetches a higher price."
            }
          },
          {
            "@type": "Question",
            "name": "Is it mandatory for the bank to serve a valuation notice before auction?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, under Rule 8(5) of the Security Interest (Enforcement) Rules, the authorized officer must obtain a valuation and consult the borrower before fixing the reserve price."
            }
          },
          {
            "@type": "Question",
            "name": "What is the timeline to challenge the auction notice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You should ideally challenge the auction notice before the auction date by approaching the DRT under Section 17 of the SARFAESI Act."
            }
          },
          {
            "@type": "Question",
            "name": "Can the DRT stay the auction if the reserve price is challenged?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if the DRT finds prima facie evidence of gross undervaluation or procedural irregularities, it can grant a stay on the auction."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a lawyer to challenge the reserve price?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While not strictly mandatory, challenging SARFAESI proceedings in the DRT involves complex legal procedures, so hiring an experienced lawyer is highly recommended."
            }
          },
          {
            "@type": "Question",
            "name": "What happens to the excess money if the property sells for more than my loan due?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The bank can only retain the amount equal to your total outstanding dues plus recovery costs. Any surplus amount must be refunded to you."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "name": "SARFAESI Legal Defense Service",
        "description": "Expert legal assistance to challenge bank auction reserve price rules and property undervaluation.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "184"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh M." },
            "datePublished": "2023-11-12",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "They helped me stop the auction of my house. The bank had severely undervalued it, and we got a stay from the DRT."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Ananya P." },
            "datePublished": "2023-09-28",
            "reviewRating": { "@type": "Rating", "ratingValue": "4" },
            "reviewBody": "Very knowledgeable about SARFAESI rules. We challenged the reserve price and the bank was forced to re-evaluate."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Suresh K." },
            "datePublished": "2024-01-15",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "When the bank tried to sell my property for pennies, SettleLoan stepped in. We filed an objection and saved our home."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram S." },
            "datePublished": "2024-03-02",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Professional and fast. They understand the intricacies of bank auction reserve price rules perfectly."
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              SARFAESI Auction Defense
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Home Loan SARFAESI Auction: <span className="text-[#1F5EFF]">Reserve Price Process</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Is the bank trying to auction your house for pennies? Learn how to legally challenge a low 'Reserve Price' and protect your property's true value.
            </p>
            <Link href="/contact-us" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Challenge Auction Value
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/sarfaesi-act-guide" className="hover:text-[#1F5EFF] transition-colors">SARFAESI Guide</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Auction Reserve Price</span>
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

          {/* Middle Article Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Boxed Intro */}
            <section id="understanding-reserve-price" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  What is a Reserve Price?
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-[#4A4A4A]">
                  When a borrower defaults on a home loan and the account is classified as a Non-Performing Asset (NPA), the bank initiates recovery proceedings under the SARFAESI Act, 2002. Before selling the secured asset (your property) through a public auction or private treaty, the bank is legally obligated to determine a base minimum price below which the property cannot be sold. This baseline figure is known as the <strong>Reserve Price</strong>.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-[#4A4A4A]">
                  The reserve price acts as a safety net—theoretically ensuring that the property is not sold for a ridiculously low sum. It is determined based on a formal valuation report prepared by an approved valuer. However, the reality of the Indian banking system often tells a different story.
                </p>
              </div>
            </section>

            <section id="property-valuation-metrics" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Types of Property Valuation
              </h2>
              <div className="grid md:grid-cols-3 gap-4 my-8">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <h5 className="font-bold text-[#1F5EFF] mb-2">Market Value</h5>
                    <p className="text-sm text-gray-600">The price the property would fetch in an open, competitive market between a willing buyer and seller under normal conditions.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <h5 className="font-bold text-[#1F5EFF] mb-2">Guideline / Circle Rate</h5>
                    <p className="text-sm text-gray-600">The minimum value of the property fixed by the state government for the purpose of paying stamp duty and registration charges.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <h5 className="font-bold text-[#1F5EFF] mb-2">Distress / Forced Sale Value</h5>
                    <p className="text-sm text-gray-600">The discounted price expected when a property must be sold rapidly (like in an auction). Banks almost always base the reserve price on this.</p>
                  </div>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  Unfortunately, many borrowers find that the bank sets the reserve price significantly lower than the actual market value—and sometimes even below the government circle rate. This gross undervaluation can severely harm the borrower, leaving them with massive residual debt even after losing their home.
                </p>
            </section>

            {/* Undervaluation Section */}
            <section id="undervaluation-sarfaesi" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Undervaluation of Property under SARFAESI
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Under Rule 8(5) of the Security Interest (Enforcement) Rules, 2002, banks are explicitly required to obtain a valuation report from an approved valuer and consult the borrower before fixing the reserve price. However, the procedure is frequently reduced to a mere formality, heavily skewed in favor of achieving a rapid sale.
              </p>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Why Banks Continuously Undervalue Properties</h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-[#1E3A8A]"><strong>Heavy Reliance on Distress Sale Value:</strong> Bank valuers often calculate the 'forced sale value' as their primary metric. This is inherently 15% to 30% lower than the fair market value, instantly eroding your equity.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-[#1E3A8A]"><strong>Focus on Quick Debt Recovery:</strong> The bank's primary objective is not to maximize your profit, but to recover their specific outstanding loan amount (plus NPA penalty interest) as quickly as possible.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-[#1E3A8A]"><strong>Attracting Auction Bidders:</strong> A heavily discounted reserve price is more likely to attract property speculators, local investors, and auction mafias looking for a lucrative flip, ensuring a guaranteed sale for the bank.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-[#1E3A8A]"><strong>Ignoring Property Improvements:</strong> Valuers frequently fail to account for expensive interior renovations, modern fittings, or recent infrastructural developments in the neighborhood that boost market value.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="dangers-of-undervaluation" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Danger of Residual Debt
              </h2>
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-lg font-bold text-red-700 mb-2">Warning: The Devastating Danger of Undervaluation</h4>
                <p className="text-red-900 mb-4">
                  Many borrowers mistakenly believe that once the bank seizes and auctions the house, the loan is fully settled. This is completely false.
                </p>
                <p className="text-red-900 font-bold">
                  If your property is auctioned for ₹50 Lakhs but your total outstanding loan is ₹70 Lakhs, the bank will legally pursue you (and your guarantors) for the remaining ₹20 Lakhs deficit. You lose your home AND you remain buried in debt. Challenging the reserve price is a matter of financial survival.
                </p>
              </div>
            </section>

            {/* Challenging Auction Price */}
            <section id="challenging-auction-price" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Challenge Bank Auction Price
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The law provides safeguards against arbitrary undervaluation. Rule 8(5) mandates the authorized officer to consult the borrower before fixing the reserve price. The moment you receive the 30-day Sale Notice detailing the reserve price, you must act rapidly.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Demand the Official Valuation Report</h3>
                    <p className="text-gray-600">As the legal owner of the property, you have the absolute right to request a certified copy of the valuation report relied upon by the bank. Write a formal legal notice to the Authorized Officer demanding this document. Carefully review the valuation methodology, the date of inspection, and the comparable property sales the valuer used.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Commission an Independent Valuation</h3>
                    <p className="text-gray-600">Do not rely solely on your own estimates. Hire an independent, government-approved valuer (preferably one registered under the Wealth Tax Act) to conduct a thorough assessment of your property. Ensure they include recent high-value transactions in your area. This report is your strongest piece of legal evidence.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Submit a Formal Legal Objection</h3>
                    <p className="text-gray-600">Draft a comprehensive objection letter to the Authorized Officer. Point out the discrepancies between the bank's valuation and the market reality. Attach your independent valuation report, recent property sale deeds from your society, and local government circle rate notifications. Explicitly demand a revision of the reserve price.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Bring a Ready Buyer (Optional but Powerful)</h3>
                    <p className="text-gray-600">If you have a buyer willing to pay significantly more than the bank's reserve price, you can submit their offer in writing along with an earnest money deposit (EMD) demand draft. The bank is legally bound to accept the higher price or allow you to sell via private treaty, provided the loan dues are cleared.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Remedies */}
            <section id="legal-remedies" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Legal Remedies & DRT Appeals
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Banks often ignore borrower objections and rush to publish the auction notice in newspapers. When this happens, your only effective recourse is judicial intervention. The Debt Recovery Tribunal (DRT) is the primary forum for challenging SARFAESI actions.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE] hover:shadow-md transition-shadow">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Filing a Section 17 Appeal (SA)</h4>
                  <p className="text-gray-600">Under Section 17 of the SARFAESI Act, any person aggrieved by the bank's measures can approach the DRT. You must file a Securitization Application (SA) challenging the specific fixing of the reserve price and the failure of the bank to consult you under Rule 8(5).</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE] hover:shadow-md transition-shadow">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Obtaining an Interim Stay Order</h4>
                  <p className="text-gray-600">Filing an SA does not automatically stop the auction. Your lawyer must urgently press for an Interim Relief (Stay Order). If you present prima facie evidence of gross undervaluation (via your independent report), the DRT frequently stays the auction pending a final hearing.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE] hover:shadow-md transition-shadow">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Exposing Procedural Violations</h4>
                  <p className="text-gray-600">DRTs are strict about procedure. If the bank failed to serve the 30-day notice properly, failed to publish it in two leading newspapers (one in the local language), or failed to affix it to the property, the entire auction process can be quashed as illegal.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE] hover:shadow-md transition-shadow">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">High Court Writ Petitions</h4>
                  <p className="text-gray-600">While DRT is the standard route, in cases of severe malafide intent by bank officials, fraud, or blatant violation of fundamental rights, a writ petition under Article 226 of the Constitution can be filed directly in the High Court.</p>
                </div>
              </div>
            </section>

            <section id="landmark-precedents" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Landmark Supreme Court Rulings
              </h2>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">Key Legal Insights</h4>
                <p className="text-gray-700 mb-4">
                  The Supreme Court of India and various High Courts have consistently laid down that:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>The bank acts as a trustee of the secured asset on behalf of the borrower.</li>
                  <li>The bank has a fiduciary duty to fetch the maximum possible price for the property, not just clear its own dues.</li>
                  <li>Selling a property at a throwaway price without proper market valuation is a breach of this fiduciary duty and liable to be set aside.</li>
                </ul>
              </div>
            </section>

            {/* Success Stories */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Success Stories: Stopping Undervalued Auctions
              </h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                {/* Review Card 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      R
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Rajesh M.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"The bank set a reserve price of ₹45 Lakhs for my property worth ₹80 Lakhs. We filed an objection and got a DRT stay on the auction."</p>
                  <div className="flex gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Initial Price: ₹45L</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Revised: ₹75L</span>
                  </div>
                </div>

                {/* Review Card 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      S
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Suresh K.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"We challenged the bank's valuation report pointing out ignored property improvements. It forced the bank to cancel the unfair auction."</p>
                  <div className="flex gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Loan Due: ₹30L</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Property Saved</span>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] group-open:text-[#1F5EFF] list-none flex justify-between items-center">
                    What is the reserve price in a bank auction?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    The reserve price is the minimum amount at which a property can be sold in an auction. It is fixed by the bank based on a valuation report obtained from an approved valuer.
                  </div>
                </details>
                
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] group-open:text-[#1F5EFF] list-none flex justify-between items-center">
                    Can the bank fix a reserve price lower than the market value?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    Banks often rely on 'distress sale value' which is inherently lower than the fair market value. However, they cannot drastically undervalue the property arbitrarily without a proper basis.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] group-open:text-[#1F5EFF] list-none flex justify-between items-center">
                    How can I challenge the undervaluation of my property under SARFAESI?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    You can challenge the undervaluation by obtaining an independent valuation report from a certified valuer, raising formal objections with the bank, and filing an appeal before the DRT under Section 17.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] group-open:text-[#1F5EFF] list-none flex justify-between items-center">
                    What happens if there are no bidders at the reserve price?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    If no bids are received, the auction fails. The bank may then decide to reduce the reserve price and conduct a fresh auction after issuing a new statutory notice.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] group-open:text-[#1F5EFF] list-none flex justify-between items-center">
                    Can I bring a buyer who is willing to pay more than the reserve price?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    Yes, you can facilitate a private treaty sale with the bank's consent or bring a buyer to participate in the public auction to ensure the property fetches a higher price.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] group-open:text-[#1F5EFF] list-none flex justify-between items-center">
                    Is it mandatory for the bank to serve a valuation notice before auction?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    Yes, under Rule 8(5) of the Security Interest (Enforcement) Rules, the authorized officer must obtain a valuation from an approved valuer and consult the borrower before fixing the reserve price.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] group-open:text-[#1F5EFF] list-none flex justify-between items-center">
                    What is the timeline to challenge the auction notice?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    You should ideally challenge the auction notice as soon as it is published and before the auction date by approaching the DRT under Section 17 of the SARFAESI Act.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] group-open:text-[#1F5EFF] list-none flex justify-between items-center">
                    Can the DRT stay the auction if the reserve price is challenged?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    Yes, if the DRT finds prima facie evidence of gross undervaluation, procedural irregularities, or violation of principles of natural justice, it can grant a stay on the auction.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] group-open:text-[#1F5EFF] list-none flex justify-between items-center">
                    Do I need a lawyer to challenge the reserve price?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    While not strictly mandatory, challenging SARFAESI proceedings in the DRT involves complex legal procedures, drafting applications, and arguing before the tribunal. Hiring an experienced lawyer is highly recommended.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] group-open:text-[#1F5EFF] list-none flex justify-between items-center">
                    What happens to the excess money if the property sells for more than my loan due?
                    <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    The bank can only retain the amount equal to your total outstanding dues, interest, and legitimate recovery costs. Any surplus amount realized from the auction must be refunded to you.
                  </div>
                </details>
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6">Stop the Undervalued Auction Today</h3>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  Is the bank trying to auction your house for pennies? Learn how to legally challenge a low 'Reserve Price' and protect your property's true value. Get expert legal intervention now.
                </p>
                <Link href="/contact-us" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                  Consult a Legal Expert Now
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for general educational purposes and does not constitute formal legal advice. Please consult a qualified legal professional for your specific DRT or SARFAESI case.
              </p>
            </div>
            
          </article>

          {/* Right Sidebar Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              {/* Card 1 (Dark CTA) */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-black mb-4">Urgent Auction Notice?</h4>
                  <p className="text-sm text-gray-300 mb-6">Time is critical. Challenge the reserve price before it's too late.</p>
                  <Link href="/contact-us" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                    Get Immediate Help
                  </Link>
                </div>
              </div>

              {/* Card 2 (White Resources) */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Legal Resources
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/sarfaesi-act-guide" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Complete SARFAESI Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/drt-appeal-process" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      How to file DRT Appeal
                    </Link>
                  </li>
                  <li>
                    <Link href="/stop-bank-auction" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Ways to Stop Bank Auction
                    </Link>
                  </li>
                  <li>
                    <Link href="/symbolic-possession-rules" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Symbolic Possession Rules
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
