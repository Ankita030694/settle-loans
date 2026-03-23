import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Top Rated Loan Settlement Consultants for Small Business Loans India",
  description: "Comprehensive guide to the best loan settlement consultants for small business loans in India. Compare AMA Legal Solutions, CredSettle, and SettleLoans. Expert MSME debt relief advice.",
  alternates: {
    canonical: "https://settleloans.in/top-rated-loan-settlement-consultants-for-small-business-loans",
  },
};

export default function BusinessLoanSettlementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/top-rated-loan-settlement-consultants-for-small-business-loans#webpage",
        "url": "https://settleloans.in/top-rated-loan-settlement-consultants-for-small-business-loans",
        "name": "Top Rated Loan Settlement Consultants for Small Business Loans India",
        "description": "Find top-rated consultants for MSME and business loan settlement in India. Expert legal and financial guidance for debt relief.",
        "breadcrumb": { "@id": "https://settleloans.in/top-rated-loan-settlement-consultants-for-small-business-loans#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/top-rated-loan-settlement-consultants-for-small-business-loans#breadcrumb",
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
            "name": "Business Loan Settlement Consultants",
            "item": "https://settleloans.in/top-rated-loan-settlement-consultants-for-small-business-loans"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/top-rated-loan-settlement-consultants-for-small-business-loans#article",
        "headline": "Top Rated Loan Settlement Consultants for Small Business Loans in India: 2025 Expert Review",
        "description": "Discover the top-rated consultants for small business loan settlement in India. Detailed reviews of AMA Legal Solutions, CredSettle, and SettleLoans.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Business Strategy Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-03-19",
        "dateModified": "2024-03-19",
        "mainEntityOfPage": { "@id": "https://settleloans.in/top-rated-loan-settlement-consultants-for-small-business-loans#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/top-rated-loan-settlement-consultants-for-small-business-loans#product",
        "name": "Business Loan Settlement Consultation",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert negotiation and legal support for MSME and small business loan settlement in India.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul Sharma" },
            "datePublished": "2024-02-15",
            "reviewBody": "SettleLoans helped my manufacturing unit settle a 50 lakh loan when we were on the verge of closure. Their team is professional and highly effective.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anjali Mehta" },
            "datePublished": "2024-03-01",
            "reviewBody": "AMA Legal Solutions provided great legal protection against recovery agents. Highly recommend their service for business owners.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/top-rated-loan-settlement-consultants-for-small-business-loans#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is business loan settlement in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Business loan settlement is a legal negotiation where a lender agrees to accept a lump-sum payment that is less than the total outstanding amount to close a delinquent business loan account."
            }
          },
          {
            "@type": "Question",
            "name": "Can MSMEs settle their loans under RBI guidelines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, MSMEs can settle loans through One-Time Settlement (OTS) schemes offered by banks, often as part of RBI-mandated resolution frameworks for stressed assets."
            }
          },
          {
            "@type": "Question",
            "name": "Who are the top rated settlement consultants in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The top-rated consultants are AMA Legal Solutions, CredSettle, and SettleLoans, known for their expertise in business debt negotiation and legal advocacy."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a settlement consultant charge for business loans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fees typically include a small processing/retainer fee and a performance-based fee ranging from 10% to 25% of the total amount saved during negotiation."
            }
          },
          {
            "@type": "Question",
            "name": "Will settling a business loan affect my personal credit score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you are a sole proprietor or a personal guarantor for your business loan, a settlement will significantly impact your personal CIBIL score."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between settlement and restructuring for businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Restructuring modifies loan terms to make payments easier without a write-off, while settlement involves a lump-sum payment and a partial write-off by the bank."
            }
          },
          {
            "@type": "Question",
            "name": "What documents are needed for MSME loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Key documents include business financial statements, tax filings, proof of financial hardship, bank notices, and legal documentation of the business status."
            }
          },
          {
            "@type": "Question",
            "name": "Are there any legal risks in hiring a settlement agency?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hiring a reputable agency is low risk, but you must avoid scammers who ask for large upfront fees or promise unrealistic results without bank approval."
            }
          },
          {
            "@type": "Question",
            "name": "How long does the business loan settlement process take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The process typically takes between 3 to 12 months, depending on the bank's internal policies and the complexity of the loan structure."
            }
          },
          {
            "@type": "Question",
            "name": "Can I settle a secured business loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Secured loans are harder to settle because banks have collateral. However, settlement is possible if the collateral value is less than the debt or if legal complexities exist."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Business Debt Relief Expert Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Top Rated Loan Settlement <br className="hidden md:block" /> Consultants for Business
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Managing MSME debt is a professional challenge, not a personal failure. Connect with India's best consultants to settle your small business loans legally and maintain your operational dignity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Protect My Business Now
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li>
                  <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
                </li>
                <li>
                  <span className="text-gray-300">/</span>
                </li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">
                  Business Loan Settlement Consultants
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* content Section */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

          {/* Left Column: Table of Contents (Sticky) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <TableOfContents
              items={[
                { id: "intro-business-debt", title: "Business Debt Message" },
                { id: "msme-landscape", title: "MSME Debt Landscape" },
                { id: "what-is-settlement", title: "What is Settlement?" },
                { id: "legal-rbi-rules", title: "RBI & Legal Framework" },
                { id: "settlement-vs-restructuring", title: "Settlement vs Restructuring" },
                { id: "process-steps", title: "Step-by-Step Process" },
                { id: "top-consultants", title: "Top Consultant Reviews" },
                { id: "fees-success", title: "Fees and Success Rates" },
                { id: "business-case-studies", title: "Real Business Stories" },
                { id: "red-flags-scams", title: "Avoiding Scams" },
                { id: "rebuilding-credit", title: "Rebuilding Business Credit" },
                { id: "success-stories", title: "Real Stories of Freedom" },
                { id: "faqs", title: "Frequently Asked Questions" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

            <section id="intro-business-debt" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                A Message of Hope for Every Small Business Owner: <span className="text-black">Recovery is Possible</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                  If you are currently reading this because your business dream is under fire from aggressive recovery agents, or because you cannot sleep at night wondering how you will pay the next working capital EMI, please take a deep breath. You need to know that you are not alone. Entrepreneurship in India is a path of immense courage, but it is also a path where market shifts, raw material fluctuations, and delayed payments can derail even the most solid business plans.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                  The debt you carry today is a business obligation, not a moral indictment of your character. At SettleLoans, we have stood with thousands of MSME owners who felt they were at the end of the road. We have seen manufacturing units revived, retail chains restructured, and service companies saved from the brink of collapse. The Indian economy thrives on the resilience of people like you, and our mission is to ensure that a temporary financial crisis does not become a permanent end to your entrepreneurial journey.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 font-bold text-[#1F5EFF]">
                  Do not lose hope. There are legal, professional, and ethical ways to resolve your business debt. We are here to guide you through every negotiation and Every legal challenge. Let us work together to find a solution that protects both your business and your mental peace.
                </p>
              </div>
            </section>

            <section id="msme-landscape" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                The Growing MSME Debt Landscape in India
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Micro, Small, and Medium Enterprises (MSMEs) are the backbone of the Indian economy, contributing significantly to the GDP and employment. However, this sector has faced unprecedented challenges over the last few years. From the ripple effects of global supply chain disruptions to the local challenges of credit access and delayed receivables, small business owners in India are often operating on thin margins with high stakes.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Many businesses find themselves in a 'Debt Trap' not because of mismanagement, but because of systemic delays. When a major client delays a payment for 90 days, but your bank requires an EMI every 30 days, a crisis is born. This liquidity mismatch is the primary driver of NPA status for most MSMEs. Once the account enters the Non-Performing Asset category, the traditional banking relationship often sours, and the recovery process begins. It is at this critical junction that professional loan settlement consultants become indispensable.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                According to recent credit reports, the demand for business debt relief has spiked. Owners are increasingly looking for ways to settle their dues without losing their core assets or their ability to restart in the future. The rise of digital lending platforms has also added a layer of complexity, with high-interest short-term loans often being used to 'bridge' gaps, only to become a bigger burden later. Understanding the options available under RBI norms is the first step toward reclaiming your business.
              </p>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                <h3 className="text-xl font-bold mb-6">Common Triggers for Business Debt Crises</h3>
                <ul className="grid md:grid-cols-2 gap-4 text-sm font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                    Delayed Payments from Corporate Clients
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                    Sudden Increases in Raw Material Costs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                    Loss of a Major Export Order
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                    Impact of Aggressive Global Inflation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                    Short-term Liquidity Mismatches
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                    Technological Obsolescence
                  </li>
                </ul>
              </div>
            </section>

            <section id="what-is-settlement" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                What Exactly is Business Loan Settlement?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Business loan settlement, often referred to as a One-Time Settlement (OTS), is a legal agreement between a business borrower and a financial institution (Bank or NBFC). In this process, the lender agrees to accept a reduced amount as a 'full and final' payment to close the loan account. This typically happens when the borrower is in genuine financial distress and cannot repay the full outstanding amount, including accumulated interest and penalties.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                While a settlement provides immediate relief and stops legal actions, it is important to understand that it involves a 'write-off' of the remaining debt by the bank. This has a significant impact on the credit history of the business and, in the case of sole proprietorships or personal guarantees, the credit score of the individual owner. Settlement is generally considered a last-resort option, utilized when restructuring or other repayment strategies are no longer viable.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Reputable consultants help you navigate this complex process by ensuring that the 'Haircut' (the discount offered by the bank) is fair and that the final settlement terms are legally binding and protected. They represent your business in front of the bank's settlement committee, arguing your case based on financial audits and genuine hardship proofs. The goal is to reach a number that you can actually pay, while the bank effectively recovers as much as possible without a multi-year court battle.
              </p>
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-200 mb-8">
                <h3 className="text-xl font-bold mb-4 text-blue-900">The Mathematics of Settlement</h3>
                <p className="text-sm text-blue-800 leading-relaxed mb-4">
                  For a bank, a loan that is not being repaid is an NPA. Maintaining an NPA on the balance sheet requires the bank to set aside 'provisioning' funds, which blocks their capital. This is why banks are often willing to settle. If you owe 50 lakhs and have not paid for a year, the bank might agree to settle for 25 lakhs. For them, receiving 25 lakhs today and clearing their books is often more profitable than spending 5 years in court to maybe recover 50 lakhs.
                </p>
              </div>
            </section>

            <section id="legal-rbi-rules" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Legal Protections and RBI Rules for Business Borrowers
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                In India, the legal framework for debt recovery and settlement is robust, balanced by the rights of borrowers. The Reserve Bank of India (RBI) has issued several guidelines to ensure that MSMEs are treated fairly during the recovery process. Knowledge of these rules is the most powerful tool a business owner can have when facing aggressive lenders.
              </p>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-[#1F5EFF] mb-4">The RBI Fair Practice Code</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    The RBI mandates that all banks and NBFCs follow a Fair Practice Code. This includes the prohibition of physical force, verbal abuse, or harassment during recovery. Recovery agents must identify themselves and can only contact you during specific hours (usually 8 AM to 7 PM). Any violation of this code is a serious offense that can be reported to the Banking Ombudsman.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-[#1F5EFF] mb-4">The MSMED Act, 2006</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    The Micro, Small and Medium Enterprises Development Act provides special protections, including a mandatory grievance redressal mechanism for delayed payments from buyers. This can be used as leverage in settlement discussions, showing the bank that your inability to pay is due to unpaid receivables protected under law.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-[#1F5EFF] mb-4">SARFAESI Act Guidelines</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    For secured business loans, banks often use the SARFAESI Act to seize assets. However, the law provides strict notice periods (60-day notice and 30-day notice) and allows borrowers the right to represent their case in the Debt Recovery Tribunal (DRT). Professional consultants can help you use these periods to negotiate a settlement before the actual seizure happens.
                  </p>
                </div>
              </div>
            </section>

            <section id="settlement-vs-restructuring" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Business Loan Settlement vs. Restructuring: The Crucial Choice
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                One of the most common questions from MSME owners is whether they should settle their loan or ask for a restructuring. Both are tools for debt relief, but they have very different outcomes for your business's future financial health. Understanding this distinction is vital for long-term planning.
              </p>
              <table className="w-full border-collapse mb-8 text-sm md:text-base">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-4 text-left font-bold">Feature</th>
                    <th className="border p-4 text-left font-bold">Loan Settlement (OTS)</th>
                    <th className="border p-4 text-left font-bold">Loan Restructuring</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-4 font-bold">Primary Action</td>
                    <td className="border p-4 text-red-600 font-bold italic">Partial Write-off of Debt</td>
                    <td className="border p-4 text-green-600 font-bold italic">Modification of Terms</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-bold">CIBIL Impact</td>
                    <td className="border p-4">Severe negative remark ("Settled")</td>
                    <td className="border p-4">Minimal ("Restructured", but accounts stay active)</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-bold">Total Payment</td>
                    <td className="border p-4">Less than total outstanding</td>
                    <td className="border p-4">Full principal plus modified interest</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-bold">Suitability</td>
                    <td className="border p-4 font-bold">For businesses that cannot survive as is</td>
                    <td className="border p-4 font-bold">For businesses with temporary cash-flow gaps</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-lg leading-relaxed mb-6">
                In simple terms, restructuring is like 're-scheduling' a flight, while settlement is like 'canceling' the ticket for a partial refund. If you expect your business to bounce back in 6-12 months, restructuring (extending the tenure or reducing EMI) is your best bet to protect your credit reputation. However, if the business model is no longer sustainable or the debt burden is so high that it prevents any profit, a settlement is the surgical move needed to clear the path for a fresh start.
              </p>
            </section>

            <section id="process-steps" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Step-by-Step Professional Business Loan Settlement Process
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                A successful business loan settlement is not a single phone call; it is a meticulous process that requires financial expertise and legal precision. Reputable consultants follow a structured path to ensure that the outcome is legally sound and financially beneficial for the client.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="bg-[#1F5EFF] text-white w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Detailed Financial Audit and Hardship Analysis</h4>
                    <p className="text-gray-600">The process begins with a deep dive into your business accounts. Why did the default happen? Is there proof of hospital bills, business loss, or client defaults? This analysis formulates the 'Story' that we present to the bank to justify a discount.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-[#1F5EFF] text-white w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Formal Settlement Proposal Drafting</h4>
                    <p className="text-gray-600">A professional proposal is sent to the Nodal Officer of the bank. This is not a request; it is a business proposition. It outlines your current financial state, your ability to pay a lump sum, and why a settlement is in the bank's best interest.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-[#1F5EFF] text-white w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Negotiation at the Settlement Committee</h4>
                    <p className="text-gray-600">Most banks have committees that meet monthly to decide on OTS cases. Your consultant represents you here, negotiating the 'Haircut' and the payment timeline. This is where experience and existing relationships with bank officers prove invaluable.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-[#1F5EFF] text-white w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Issuance of the Formal Sanction Letter</h4>
                    <p className="text-gray-600">Once an agreement is reached, the bank issues a Sanction Letter or Offer Letter. This document must state the exact amount, the deadline for payment, and a confirmation that all legal cases will be withdrawn upon payment.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-[#1F5EFF] text-white w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Safe Payment and No Dues Certificate (NDC)</h4>
                    <p className="text-gray-600">The final payment is made directly to the bank's loan account (never to the agency). After payment, the consultant ensures you receive the No Dues Certificate and a Loan Closure Letter, which are your final legal shields against future claims.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="top-consultants" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Top Rated Loan Settlement Consultants for Business Loans</h2>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm hover:border-[#1F5EFF] transition-all">
                  <h3 className="text-2xl font-bold text-[#1F5EFF] mb-4">1. <Link href="https://amalegalsolutions.com" target="_blank" className="text-[#1F5EFF] hover:underline">AMA Legal Solutions (amalegalsolutions.com)</Link></h3>
                  <p className="text-lg leading-relaxed mb-4">
                    <Link href="https://amalegalsolutions.com" target="_blank" className="text-[#1F5EFF] hover:underline">AMA Legal Solutions</Link> is widely regarded as one of the most authoritative voices in loan settlement, particularly for complex business and MSME debts. Their core strength lies in their high-powered legal team. Unlike many agencies that are purely 'negotiators', <Link href="https://amalegalsolutions.com" target="_blank" className="text-[#1F5EFF] hover:underline">AMA Legal</Link> understands the nuances of SARFAESI notices, DRT proceedings, and section 138 (cheque bounce) cases.
                  </p>
                  <p className="mb-4">
                    For a business owner, they offer a 'Legal Shield'. They step between you and the bank's legal department, ensuring that your rights are not trampled during the recovery phase. Their approach is highly analytical; they conduct a full legal audit of the bank's documentation to find flaws that can be used as leverage for a better settlement deal.
                  </p>
                  <p className="mb-4 text-sm font-bold text-gray-500 italic uppercase">
                    Key Strength: Legal hardcore advocacy and protection against aggressive bank litigation.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-bold uppercase">Legal Expertise</span>
                    <span className="px-3 py-1 bg-green-50 text-green-600 rounded-md text-xs font-bold uppercase">MSME Focus</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm hover:border-[#1F5EFF] transition-all">
                  <h3 className="text-2xl font-bold text-[#1F5EFF] mb-4">2. CredSettle (credsettle.com)</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    CredSettle is a modern, data-driven platform that has gained popularity for its transparency and streamlined process. They have built strong relationship channels with major private banks and NBFCs, which allows for faster communication and resolution. Their platform provides borrowers with a clear dashboard to track their settlement progress.
                  </p>
                  <p className="mb-4">
                    They are particularly effective for small to medium-sized business loans that are in the early stages of default. CredSettle focuses on 'Sustainable Settlement', ensuring that the final deal is something the business owner can realistically pay without further strain. Their team is empathetic and communicative, providing much-needed mental relief during the stressful negotiation period.
                  </p>
                  <p className="mb-4 text-sm font-bold text-gray-500 italic uppercase">
                    Key Strength: Technology-driven transparency and strong relationships with private lenders.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-bold uppercase">Digital First</span>
                    <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-md text-xs font-bold uppercase">Rapid Response</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm hover:border-[#1F5EFF] transition-all">
                  <h3 className="text-2xl font-bold text-[#1F5EFF] mb-4">3. SettleLoans (settleloans.in)</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    At SettleLoans, we pride ourselves on being the local partners of choice for business owners across India. Our approach is deeply empathetic, recognizing that every debt story is unique. We specialize in 'Stressed Asset Management' for MSMEs, providing a combination of financial restructuring advice and hardcore settlement negotiation.
                  </p>
                  <p className="mb-4">
                    We don't just negotiate; we educate. We work with you to understand your cash-flow dynamics and help you present a proposal that is impossible for the bank to ignore. Our team consists of former banking officers who know exactly how settlement decisions are made inside the bank. We act as your professional shield, handling the aggressive calls and the legal notices so you can focus on rebuilding your revenue.
                  </p>
                  <p className="mb-4 text-sm font-bold text-gray-500 italic uppercase">
                    Key Strength: Deep empathy, banking insider knowledge, and a commitment to borrower dignity.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-bold uppercase">Compassionate Advocacy</span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-md text-xs font-bold uppercase">Insider Insight</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="fees-success" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center uppercase tracking-widest bg-gray-50 py-10 rounded-3xl">Fee Structures and Success Rates: What to Expect</h2>
              <p className="mb-6 text-lg font-bold">
                Transparency in fees is the hallmark of a reputable settlement consultant. Most professional firms operate on a three-tier fee structure designed to align their interests with yours. You should never work with an agency that demands 100% of their fee upfront before any work is done.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm text-center">
                  <h4 className="font-bold text-[#1F5EFF] mb-2 uppercase text-xs tracking-widest">Retainer / Processing</h4>
                  <p className="text-3xl font-black text-[#2E2E2E] mb-2">₹5K - ₹15K</p>
                  <p className="text-xs text-gray-500">Covers legal audits, drafting proposals, and initial bank communication.</p>
                </div>
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm text-center">
                  <h4 className="font-bold text-[#1F5EFF] mb-2 uppercase text-xs tracking-widest">Success Fee (Savings)</h4>
                  <p className="text-3xl font-black text-[#2E2E2E] mb-2">15% - 25%</p>
                  <p className="text-xs text-gray-500">Percentage of the ONLY the amount saved. Paid AFTER the OTS letter is received.</p>
                </div>
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm text-center">
                  <h4 className="font-bold text-[#1F5EFF] mb-2 uppercase text-xs tracking-widest">Success Rate</h4>
                  <p className="text-3xl font-black text-[#2E2E2E] mb-2">85%+</p>
                  <p className="text-xs text-gray-500">For genuine cases with documented hardship and realistic settlement funds.</p>
                </div>
              </div>
              <p className="mb-6 font-bold text-gray-600">
                It is important to note that the success rate depends heavily on the 'Age of Default' and the 'Type of Bank'. Nationalized banks (SBI, BoB) often have fixed OTS schemes, leading to very high success rates but less flexibility in numbers. Private banks and NBFCs are more flexible on the numbers but require a more aggressive negotiation approach. A good consultant will give you a realistic estimate of your expected 'Haircut' before you even sign a contract.
              </p>
            </section>

            <section id="business-case-studies" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center uppercase tracking-[0.2em] underline decoration-[#1F5EFF] decoration-4 underline-offset-8">Real Business Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                {[
                  {
                    name: "Rajesh V.",
                    loc: "Ludhiana",
                    business: "Textile Manufacturing",
                    debt: "₹1.2 Crores",
                    saved: "₹65 Lakhs Saved",
                    story: "Our export orders were cancelled during the global shift in 2023. We were paying 6 lakhs a month in EMI. SettleLoans stepped in, stopped the recovery pressure, and settled the whole account for 55 lakhs. We are now debt-free and operating at a small scale again."
                  },
                  {
                    name: "Anand K.",
                    loc: "Coimbatore",
                    business: "Precision Engineering",
                    debt: "₹75 Lakhs",
                    saved: "₹40 Lakhs Saved",
                    story: "The bank sent me a SARFAESI notice for my factory. <Link href=\"https://amalegalsolutions.com\" target=\"_blank\" className=\"text-[#1F5EFF] hover:underline\">AMA Legal Solutions</Link> found a technical error in the notice and used it to negotiate a brilliant settlement. They saved my property and my livelihood."
                  },
                  {
                    name: "Sneha G.",
                    loc: "Bangalore",
                    business: "Retail Chain",
                    debt: "₹35 Lakhs",
                    saved: "₹22 Lakhs Saved",
                    story: "I had taken high-interest personal loans for business expansion. CredSettle consolidated everything and negotiated with 4 different lenders to get a collective settlement. My EMI is gone, and I can finally breathe."
                  },
                  {
                    name: "Amit P.",
                    loc: "Ahmedabad",
                    business: "Chemical Trading",
                    debt: "₹90 Lakhs",
                    saved: "₹45 Lakhs Saved",
                    story: "Delayed payments from a major client pushed us into NPA. SettleLoans used the MSMED Act to show why we were in distress. The bank committee agreed to a 50% waiver. A complete life-saver."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-[#DEDEDE] shadow-sm hover:translate-y-[-5px] transition-all duration-300 group">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 mr-4 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-bold text-[#2E2E2E] text-lg">{item.name}</h5>
                        <p className="text-xs text-gray-400 font-black uppercase tracking-widest">{item.loc} | {item.business}</p>
                      </div>
                    </div>
                    <div className="mb-4 text-xs font-mono bg-green-50 p-2 rounded border border-green-100 uppercase tracking-tighter text-center">
                      <span className="block text-green-700 font-bold">{item.saved}</span>
                    </div>
                    <p className="text-sm text-gray-600 italic leading-relaxed font-medium">"{item.story}"</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="red-flags-scams" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center text-red-600 uppercase">Alert: Avoiding Business Debt Scams</h2>
              <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-2xl mb-8 shadow-sm">
                <h3 className="text-xl font-bold text-red-800 mb-6">Signs of a Fraudulent Agency</h3>
                <ul className="space-y-4 text-red-900/80 font-bold">
                  <li className="flex gap-3">
                    <span className="text-red-600">✘</span>
                    <strong>Demanding Heavy Upfront Fees:</strong> If an agency asks for 50k or 1L before they even send a letter to the bank, walk away.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600">✘</span>
                    <strong>Guaranteed % Waivers:</strong> No one can 'guarantee' an 80% waiver. Settlements are always at the discretion of the bank committee.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600">✘</span>
                    <strong>Asking for OTP or Bank Login:</strong> Never share your confidential banking details. All settlement work is done via formal correspondence.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600">✘</span>
                    <strong>Personal UPI Payments:</strong> Real companies have corporate bank accounts and GST registration. Avoid anyone asking for UPI to a personal mobile number.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600">✘</span>
                    <strong>Claims of Being "RBI Registered":</strong> The RBI does not 'register' or 'approve' debt settlement firms. These are legal and financial consultancies.
                  </li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed font-black text-center text-gray-700 p-6 bg-gray-50 rounded-xl">
                Always check the physical office existence of the agency. A firm handling your crores of debt should have a verifiable address and a track record of successful cases.
              </p>
            </section>

            <section id="rebuilding-credit" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 uppercase tracking-tighter">Rebuilding Your Business Credit After Settlement</h2>
              <p className="mb-6 text-xl font-bold">
                A settlement clears your path, but it leaves a scar on your credit report. In India, the 'Settled' tag remains for 7 years. Does this mean your business can never grow again? Absolutely not. It simply means you must follow a 'Credit Repair' blueprint.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 my-10">
                <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-[#1F5EFF] uppercase tracking-widest text-sm">1. Secured Lending</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-bold">
                    Start by taking a loan against a Fixed Deposit. This is 'risk-free' for the bank. Paying this back on time will gradually tell the credit bureaus that you are now a disciplined borrower.
                  </p>
                </div>
                <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-[#1F5EFF] uppercase tracking-widest text-sm">2. Supplier Credit</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-bold">
                    Focus on building terms with your local suppliers. A history of timely payments to suppliers often carries more weight in some business circles than a CIBIL score.
                  </p>
                </div>
                <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-[#1F5EFF] uppercase tracking-widest text-sm">3. Financial Audit Hygiene</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-bold">
                    Ensure your taxes are filed and your audits are clean. When you eventually apply for fresh credit after 3-5 years, a solid balance sheet can overcome a past settlement remark.
                  </p>
                </div>
                <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-[#1F5EFF] uppercase tracking-widest text-sm">4. Transition to Closure</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-bold">
                    If your business becomes highly profitable in 2 years, you can choose to pay the 'saved' amount back to the bank and convert the 'Settled' status to 'Closed'. This is the ultimate credit fix.
                  </p>
                </div>
              </div>
              <p className="text-center text-lg font-black p-10 bg-[#2E2E2E] text-white rounded-[40px] shadow-2xl relative overflow-hidden">
                The sunset of debt is the sunrise of wealth. It takes time, it takes discipline, but your business can and will reach 10x its current size. We are with you on that journey.
              </p>
            </section>
            <section id="success-stories" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Real Stories of Freedom</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose">
                {[
                  {
                    name: "Rajesh M.",
                    loc: "Ahmedabad",
                    type: "MSME Working Capital Loan - 80L",
                    outcome: "OTS Accepted - 40 Lakh Waiver",
                    story: "My textile business failed during COVID. SettleLoans presented a professional business viability report to the bank. The OTS was accepted with a 40 lakh waiver. My family's future is now secure."
                  },
                  {
                    name: "Preethi N.",
                    loc: "Coimbatore",
                    type: "Manufacturing Business Loan - 50L",
                    outcome: "Debt Restructured - Business Survived",
                    story: "I did not want a settlement tag destroying my business reputation. SettleLoans negotiated a MSME restructuring plan instead. My factory is running again and the debt is being serviced peacefully."
                  },
                  {
                    name: "Suresh V.",
                    loc: "Bengaluru",
                    type: "Startup Working Capital",
                    outcome: "55% Settled via IBC Fresh Start",
                    story: "My startup failed and I had personal guarantees on business loans. SettleLoans' legal team used the IBC Fresh Start process creatively. The final settlement was only 45% of the total outstanding."
                  },
                  {
                    name: "Anand T.",
                    loc: "Hyderabad",
                    type: "GST Registered Business Loan",
                    outcome: "Bank Harassment Stopped - GST Cleared",
                    story: "The bank was threatening SARFAESI action on my business assets. SettleLoans stopped the process with a legal notice and negotiated a settlement through the Bank's OTS committee. Professional and effective."
                  }
                ].map((review, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-bold text-[#2E2E2E]">{review.name}</h5>
                        <p className="text-xs text-gray-400">{review.loc}</p>
                      </div>
                      <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                    </div>
                    <div className="mb-4 text-xs font-mono bg-green-50 p-2 rounded border border-green-100 uppercase tracking-tighter">
                      <span className="block text-green-700 font-bold">{review.outcome}</span>
                    </div>
                    <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 uppercase tracking-widest bg-blue-600 text-white p-6 rounded-2xl text-center">Business Debt FAQ</h2>
              <div className="space-y-4 not-prose">
                {(jsonLd["@graph"] as any)[4]?.mainEntity?.map((faq: any, i: number) => (
                  <details key={i} className="group bg-white border border-[#DEDEDE] rounded-2xl overflow-hidden hover:shadow-xl transition-all border-b-8 border-b-[#1F5EFF]/20">
                    <summary className="flex justify-between items-center p-6 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50/50 group-open:bg-white transition-colors">
                      <span className="text-xl leading-tight">{i + 1}. {faq.name}</span>
                      <span className="transition-transform duration-500 group-open:rotate-180 p-2 bg-[#1F5EFF] text-white rounded-full flex items-center justify-center">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7 7"></path></svg>
                      </span>
                    </summary>
                    <div className="px-8 pb-8 text-[#2E2E2E] font-bold opacity-90 leading-relaxed border-t border-[#DEDEDE]/50 pt-6 mt-0 bg-white">
                      {faq.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-16 pt-8 border-t-4 border-double border-gray-200 text-center">
              <p className="text-gray-400 text-sm font-black italic uppercase tracking-widest">SettleLoans Business Advisory | Professional Debt Management India | 2025 Edition</p>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden mt-16 mb-8">
              <div className="bg-[#2E2E2E] rounded-[40px] shadow-2xl overflow-hidden border border-[#DEDEDE]/10 group p-10 text-center">
                <h3 className="text-3xl font-black text-white mb-4">Protect Your MSME Today</h3>
                <p className="text-[#DEDEDE] opacity-80 mb-8 font-bold italic">Join 5000+ businesses that have secured a second chance with us. Professional, Legal, Confidential.</p>
                <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-5 px-6 rounded-2xl hover:scale-105 transition-all shadow-lg text-xl border-b-4 border-white/20">
                  Talk to a Business Expert
                </Link>
              </div>
            </div>
          </article>


          {/* Right Column: CTA & Related Pages (Sticky) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8">

              {/* CTA Container */}
              <div className="bg-[#2E2E2E] rounded-3xl shadow-2xl overflow-hidden border border-[#DEDEDE]/10 group">
                <div className="bg-[#1F5EFF] p-6 text-center">
                  <h3 className="text-xl font-black text-white uppercase tracking-widest">Business First</h3>
                </div>
                <div className="p-8 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-black uppercase italic">
                    Do not let a bank notice stop your production. Let our legal team defend your business.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-4 rounded-xl hover:scale-110 transition-all shadow-[0_10px_30px_rgba(31,94,255,0.4)] border-b-2 border-white/20">
                    Defend My Assets
                  </Link>
                  <p className="mt-6 text-xs text-[#DEDEDE]/60 uppercase tracking-[0.3em] font-black underline decoration-[#1F5EFF]">MSME Trusted</p>
                </div>
              </div>

              {/* Related Pages Container */}
              <div className="bg-white p-8 rounded-3xl border-2 border-[#DEDEDE] shadow-sm">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#747474] mb-6 border-b-4 border-[#1F5EFF] pb-2 inline-block">Business Mastery</h3>
                <ul className="space-y-6 text-sm font-black">
                  <li>
                    <Link href="/business-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] group-hover:scale-150 transition-all"></span>
                      Standard OTS Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/best-lawyer-for-msme-business-loan-dispute" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] group-hover:scale-150 transition-all"></span>
                      Legal MSME Defense
                    </Link>
                  </li>
                  <li>
                    <Link href="/mudra-loan-settlement-legal-help" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] group-hover:scale-150 transition-all"></span>
                      Mudra Loan Relief
                    </Link>
                  </li>
                  <li>
                    <Link href="/startup-loan-legal-advisory" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] group-hover:scale-150 transition-all"></span>
                      Startup Advisory
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
