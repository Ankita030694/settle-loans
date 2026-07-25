import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Professional Loan Foreclosure Charges: Doctor & CA Closure Fees",
  description: "Are you a Doctor or CA trying to foreclose your professional loan? Banks often hide massive penalties in the fine print. Learn how to negotiate them.",
  alternates: {
    canonical: "https://example.com/professional-loan-foreclosure-charges",
  },
};

const tocItems = [
  { id: 'introduction', title: 'The Hidden Reality of Professional Loans' },
  { id: 'foreclosure-charges', title: 'Understanding Foreclosure Penalties' },
  { id: 'impact-on-practice', title: 'How Foreclosure Affects Your Practice' },
  { id: 'negotiation-process', title: 'How to Negotiate Closure Fees' },
  { id: 'balance-transfer', title: 'The Balance Transfer Strategy' },
  { id: 'legal-recourse', title: 'Legal Recourse Against Unfair Fees' },
  { id: 'success-stories', title: 'Client Success Stories' },
  { id: 'faqs', title: 'Frequently Asked Questions' },
];

export default function ProfessionalLoanForeclosurePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://example.com/professional-loan-foreclosure-charges/#webpage",
        "url": "https://example.com/professional-loan-foreclosure-charges",
        "name": "Professional Loan Foreclosure Charges: Doctor & CA Closure Fees",
        "description": "Are you a Doctor or CA trying to foreclose your professional loan? Banks often hide massive penalties in the fine print. Learn how to negotiate them."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/" },
          { "@type": "ListItem", "position": 2, "name": "Loan Guides", "item": "https://example.com/guides" },
          { "@type": "ListItem", "position": 3, "name": "Professional Loan Foreclosure", "item": "https://example.com/professional-loan-foreclosure-charges" }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://example.com/professional-loan-foreclosure-charges/#article",
        "headline": "Professional Loan Foreclosure Charges: Doctor & CA Closure Fees",
        "description": "Banks often hide massive penalties in the fine print. Learn how to negotiate and reduce closure fees.",
        "author": { "@type": "Organization", "name": "SettleLoan" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What are typical doctor loan foreclosure charges?", "acceptedAnswer": { "@type": "Answer", "text": "Typically, doctor loan foreclosure charges range from 2% to 5% of the outstanding principal amount, depending on the bank and whether it is a fixed or floating rate loan." } },
          { "@type": "Question", "name": "Do CAs have to pay a pre-closure penalty?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Chartered Accountants (CAs) with professional loans often face pre-closure penalties unless their loan is on a floating interest rate or they have a specific waiver clause." } },
          { "@type": "Question", "name": "Can I negotiate professional loan closure fees?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Banks are often willing to negotiate or waive professional loan closure fees, especially if you have a strong repayment history or use legal channels to dispute unfair clauses." } },
          { "@type": "Question", "name": "When is the best time to foreclose a professional loan?", "acceptedAnswer": { "@type": "Answer", "text": "The best time to foreclose is usually after the initial lock-in period (typically 6-12 months) and when you have sufficient surplus funds to clear the principal without straining your practice." } },
          { "@type": "Question", "name": "Will foreclosing my loan affect my credit score?", "acceptedAnswer": { "@type": "Answer", "text": "Foreclosing your loan normally will not harm your credit score; in fact, paying off debt generally improves your credit profile. However, a 'settlement' will negatively impact your score." } },
          { "@type": "Question", "name": "Are foreclosure charges taxable?", "acceptedAnswer": { "@type": "Answer", "text": "Foreclosure charges themselves are an expense, but they are generally not considered tax-deductible for individuals. For professional practices, consult your CA to see if they can be written off as a business expense." } },
          { "@type": "Question", "name": "What happens if I can't afford the foreclosure fees?", "acceptedAnswer": { "@type": "Answer", "text": "If you cannot afford the fees, you can continue with regular EMIs, request a partial waiver from the bank manager, or seek legal intervention to dispute exorbitant charges." } },
          { "@type": "Question", "name": "How do banks calculate the foreclosure amount?", "acceptedAnswer": { "@type": "Answer", "text": "The foreclosure amount equals the outstanding principal plus interest until the date of closure, plus the pre-closure penalty percentage on the outstanding principal, plus applicable GST." } },
          { "@type": "Question", "name": "Is there a lock-in period for professional loans?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, most professional loans have a lock-in period of 6 to 12 months. Foreclosing during this period usually incurs much higher penalties or is strictly prohibited." } },
          { "@type": "Question", "name": "Do I need legal help to close my professional loan?", "acceptedAnswer": { "@type": "Answer", "text": "While not strictly required, legal help is highly recommended if the bank is demanding unreasonable fees, refusing a waiver, or delaying the issuance of your No Objection Certificate (NOC)." } }
        ]
      },
      {
        "@type": "Product",
        "name": "Professional Loan Settlement Consultation",
        "description": "Expert legal help for Doctors and CAs to reduce professional loan foreclosure charges and penalties.",
        "brand": { "@type": "Brand", "name": "SettleLoan" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "218"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "author": { "@type": "Person", "name": "Dr. Ananya S." },
            "reviewBody": "Saved me ₹2 Lakhs in hidden foreclosure charges on my clinic expansion loan."
          },
          {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "author": { "@type": "Person", "name": "CA Rajesh M." },
            "reviewBody": "Excellent negotiation skills. They got my CA loan closure penalty completely waived off."
          },
          {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "author": { "@type": "Person", "name": "Dr. Vikram K." },
            "reviewBody": "Very professional service. The bank was delaying my NOC, but they resolved it in days."
          },
          {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": "4" },
            "author": { "@type": "Person", "name": "Dr. Priya T." },
            "reviewBody": "Highly recommended for medical professionals dealing with aggressive bank policies."
          },
          {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "author": { "@type": "Person", "name": "CA Sunil V." },
            "reviewBody": "They know exactly how to push back against private banks. Flawless execution."
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
              Professional Loans Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Professional Loan <span className="text-[#1F5EFF]">Foreclosure Charges</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Are you a Doctor or CA trying to foreclose your professional loan? Banks often hide massive penalties in the fine print. Learn how to negotiate them.
            </p>
            <Link href="#lead-gen" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Expert Help Now
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF]">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/loans" className="hover:text-[#1F5EFF]">Loans</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Professional Loan Foreclosure Charges</span>
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
          
          {/* Left Sidebar: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] sticky top-24 h-fit">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Middle Column: Main Article */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Boxed Intro */}
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">The Hidden Reality of Professional Loans</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Doctors, Chartered Accountants (CAs), and Architects are often offered lucrative "Professional Loans" with seemingly attractive interest rates. However, when it comes time to close the loan early, the reality of hidden <strong>doctor loan foreclosure charges</strong> and <strong>CA loan pre-closure penalties</strong> quickly becomes apparent.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Banks rely on the fact that busy professionals will simply pay these exorbitant fees rather than dispute them. In this guide, we break down exactly how these fees work and how you can fight back.
                </p>
              </div>
            </section>

            {/* Blue Important Box */}
            <section id="foreclosure-charges" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Understanding Foreclosure Penalties</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                A foreclosure penalty is essentially a bank's way of recovering the interest they lose when you pay off your principal balance ahead of schedule.
              </p>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Why Penalties Exist for Professionals</h4>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">Banks structure professional loans differently than standard personal loans. Here is why you are seeing these charges:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-700">Fixed Rate Clauses: Many professional loans are booked under fixed rates where RBI guidelines on zero-foreclosure charges do not apply.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-700">Lock-in Periods: Your agreement likely has a strict 6-12 month lock-in period prohibiting early closure entirely.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-700">Business Usage Classification: If your loan was taken for "clinic setup" or "office expansion," it is treated as a business loan, allowing banks to charge up to 5% as a penalty.</span>
                  </li>
                </ul>
              </div>

              {/* 4-Grid Info Boxes */}
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Foreclosure Charges</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">Typically calculated as 2% to 5% of your outstanding principal balance, applied when closing the loan completely.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Part-Payment Penalties</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">Fees charged when you pay a lump sum that doesn't completely close the loan. Usually capped at 2%.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Interest Recovery</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">Banks may calculate interest up to the exact date of closure or till the end of the current billing cycle.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">GST Application</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">Remember, an 18% Goods and Services Tax (GST) will be added on top of whatever penalty amount the bank charges.</p>
                </div>
              </div>
            </section>

            {/* New Section: Impact on Practice */}
            <section id="impact-on-practice" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How Foreclosure Affects Your Practice</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Many professionals hesitate to foreclose their loans because they are intimidated by the sudden outflow of cash and the daunting penalty fees. However, keeping a high-interest professional loan active can silently drain your clinic or firm's profitability over time. 
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                When you successfully foreclose a loan, especially after negotiating down the closure charges, you immediately free up a significant portion of your monthly cash flow. For a doctor, this freed-up EMI capital can be redirected into upgrading medical equipment, expanding the clinic space, or hiring specialized staff. For a CA or an Architect, it means the ability to invest in better software, marketing, or opening a new branch office without the looming stress of monthly debt obligations.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Furthermore, being debt-free improves your professional balance sheet. Should you ever need to secure funding for a massive expansion down the line, banks will look favorably upon your track record of clearing debt ahead of schedule. Your credit score receives a substantial boost, categorizing you as a prime borrower. While the initial sting of paying the principal (and navigating the penalty) might seem high, the long-term compounding benefits for your practice's growth are unparalleled. This is why aggressive negotiation to waive the penalty is so crucial—it maximizes your immediate ROI on the foreclosure.
              </p>
            </section>

            {/* Numbered Steps */}
            <section id="negotiation-process" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How to Negotiate Closure Fees</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                You do not have to accept the first number the bank gives you. Follow this proven framework to reduce or eliminate your professional loan closure fees.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Check Your Master Agreement</h3>
                    <p className="text-lg leading-relaxed text-gray-700">Review the exact terms you signed. Look specifically for the "Pre-payment" and "Foreclosure" clauses. If you were verbally promised zero foreclosure charges, find written proof.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Draft a Formal Waiver Request</h3>
                    <p className="text-lg leading-relaxed text-gray-700">Submit a formal application to your branch manager requesting a waiver. Cite your excellent repayment history and your professional standing as leverage.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Escalate to the Grievance Officer</h3>
                    <p className="text-lg leading-relaxed text-gray-700">If the branch denies your request, escalate the matter to the Principal Nodal Officer of the bank. Professional accounts are high-value, and senior management is often willing to authorize waivers to keep a good relationship.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* New Section: Balance Transfer Strategy */}
            <section id="balance-transfer" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Balance Transfer Strategy</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                If your current bank flatly refuses to waive the foreclosure charges, your most powerful counter-move is the Balance Transfer (BT) strategy. This involves moving your outstanding loan balance to a competing bank or NBFC that is hungry for your business.
              </p>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-black text-[#2E2E2E] mb-4">How It Works</h4>
                <p className="text-lg leading-relaxed text-gray-700">
                  Because doctors and CAs are considered low-risk, high-value clients, competing banks will bend over backward to acquire your loan portfolio. When you apply for a BT, the new bank will issue a cheque or demand draft directly to your old bank to clear the principal. But what about the 4% penalty your old bank is demanding?
                </p>
                <p className="text-lg leading-relaxed mt-4 text-gray-700">
                  You can negotiate with the <em>new</em> bank to absorb this cost. Many top-tier banks have internal policies allowing them to offer you a "cashback" or an equivalent reduction in processing fees to offset the penalty you are paying to leave your old bank. Additionally, if you move your loan from a Private Bank (which often has rigid penalty structures) to a Public Sector Undertaking (PSU) bank, you usually transition to a floating rate regime. Under RBI rules, floating rate loans have zero foreclosure charges, protecting you from future penalties if you decide to pay off the new loan early.
                </p>
              </div>
            </section>

            {/* New Section: Legal Recourse */}
            <section id="legal-recourse" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Legal Recourse Against Unfair Fees</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Unfortunately, some financial institutions rely on the fact that professionals are too busy to fight back. They may arbitrarily convert your floating rate loan to a fixed rate just to slap you with a penalty, or they might refuse to issue your No Objection Certificate (NOC) until you pay exorbitant, unjustified fees.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                In such scenarios, verbal negotiations will fail. You must pivot to formal legal recourse. Your first step is to issue a strongly worded legal notice drafted by an expert banking lawyer. This notice should explicitly cite the relevant RBI master circulars regarding fair practice codes and prepayment penalty exemptions. 
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                If the bank's legal department ignores the notice (which is rare when RBI guidelines are clearly violated), the next step is escalating the grievance to the Banking Ombudsman. The Ombudsman is an RBI-appointed authority tasked with resolving customer complaints against banks. Because the Ombudsman has the power to penalize the bank, branch managers will typically rush to settle the dispute and waive the illegal charges before the Ombudsman initiates a formal hearing. For professionals, maintaining a paper trail of all emails and refusal letters is critical to winning this legal battle quickly.
              </p>
            </section>

            {/* Gray Insight Box */}
            <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
              <h4 className="text-xl font-black text-[#2E2E2E] mb-4">Expert Insight</h4>
              <p className="text-lg leading-relaxed text-gray-700">If you are moving your loan to another bank (Balance Transfer), the new bank will often absorb the foreclosure charges of your old loan, or negotiate heavily on your behalf to win your business.</p>
            </div>

            {/* Red Warning Box */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
              <h4 className="text-xl font-black text-red-700 mb-4">Warning: Don't Stop EMIs Prematurely</h4>
              <p className="text-lg leading-relaxed text-red-900">Never stop your regular EMI payments while negotiating a foreclosure. A bounced EMI during this period will damage your CIBIL score and give the bank a reason to deny your penalty waiver request.</p>
            </div>

            {/* Review / Success Stories */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Client Success Stories</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">See how we have helped other professionals like you save on their loan closure fees.</p>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      DR
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Dr. Sharma, Orthopedic</h4>
                      <div className="flex gap-1 text-yellow-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg mb-6">"The bank demanded a massive 4% penalty to close my clinic expansion loan. The legal team intervened, cited RBI floating rate rules, and got it completely waived."</p>
                  <div className="flex gap-4">
                    <span className="py-1 px-3 rounded-full bg-red-100 text-red-700 text-sm font-bold">Penalty Asked: ₹2.4L</span>
                    <span className="py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-bold">Paid: ₹0</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      CA
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">CA Rajesh M.</h4>
                      <div className="flex gap-1 text-yellow-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg mb-6">"My office loan had a deceptive clause burying pre-closure charges. SettleLoan stepped in and forced a settlement, saving me thousands of rupees in an instant."</p>
                  <div className="flex gap-4">
                    <span className="py-1 px-3 rounded-full bg-red-100 text-red-700 text-sm font-bold">Penalty Asked: ₹1.8L</span>
                    <span className="py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-bold">Paid: ₹30k</span>
                  </div>
                </div>

              </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4 my-8">
                
                {[
                  { q: "What are typical doctor loan foreclosure charges?", a: "Typically, doctor loan foreclosure charges range from 2% to 5% of the outstanding principal amount, depending on the bank and whether it is a fixed or floating rate loan." },
                  { q: "Do CAs have to pay a pre-closure penalty?", a: "Yes, Chartered Accountants (CAs) with professional loans often face pre-closure penalties unless their loan is on a floating interest rate or they have a specific waiver clause." },
                  { q: "Can I negotiate professional loan closure fees?", a: "Absolutely. Banks are often willing to negotiate or waive professional loan closure fees, especially if you have a strong repayment history or use legal channels to dispute unfair clauses." },
                  { q: "When is the best time to foreclose a professional loan?", a: "The best time to foreclose is usually after the initial lock-in period (typically 6-12 months) and when you have sufficient surplus funds to clear the principal without straining your practice." },
                  { q: "Will foreclosing my loan affect my credit score?", a: "Foreclosing your loan normally will not harm your credit score; in fact, paying off debt generally improves your credit profile. However, a 'settlement' will negatively impact your score." },
                  { q: "Are foreclosure charges taxable?", a: "Foreclosure charges themselves are an expense, but they are generally not considered tax-deductible for individuals. For professional practices, consult your CA to see if they can be written off as a business expense." },
                  { q: "What happens if I can't afford the foreclosure fees?", a: "If you cannot afford the fees, you can continue with regular EMIs, request a partial waiver from the bank manager, or seek legal intervention to dispute exorbitant charges." },
                  { q: "How do banks calculate the foreclosure amount?", a: "The foreclosure amount equals the outstanding principal plus interest until the date of closure, plus the pre-closure penalty percentage on the outstanding principal, plus applicable GST." },
                  { q: "Is there a lock-in period for professional loans?", a: "Yes, most professional loans have a lock-in period of 6 to 12 months. Foreclosing during this period usually incurs much higher penalties or is strictly prohibited." },
                  { q: "Do I need legal help to close my professional loan?", a: "While not strictly required, legal help is highly recommended if the bank is demanding unreasonable fees, refusing a waiver, or delaying the issuance of your No Objection Certificate (NOC)." }
                ].map((faq, index) => (
                  <details key={index} name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                    <summary className="font-bold text-xl text-[#2E2E2E] marker:content-none flex justify-between items-center">
                      {faq.q}
                      <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                    </summary>
                    <div className="pt-4 text-lg text-gray-700 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div id="lead-gen" className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6">Ready to Negotiate Your Foreclosure Charges?</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Don't let banks bully you into paying massive penalties. Our legal experts specialize in reducing professional loan closure fees.</p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform shadow-lg text-lg">
                  Get Free Legal Consultation
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">Disclaimer: This information is for educational purposes and does not constitute legal or financial advice.</p>
            </div>

          </article>

          {/* Right Sidebar: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] sticky top-24 h-fit">
            
            {/* Card 1 (Dark CTA) */}
            <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group mb-8">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-4">Facing High Penalties?</h4>
                <p className="text-gray-300 mb-6 text-sm">Talk to our experts before paying the foreclosure amount.</p>
                <Link href="/consultation" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 rounded-xl hover:bg-white hover:text-[#1F5EFF] transition-colors">
                  Speak to an Expert
                </Link>
              </div>
            </div>

            {/* Card 2 (White Resources) */}
            <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
              <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">Related Guides</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li>
                  <Link href="/guides/personal-loan-closure" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    Personal Loan Closure
                  </Link>
                </li>
                <li>
                  <Link href="/guides/business-loan-foreclosure" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    Business Loan Penalties
                  </Link>
                </li>
                <li>
                  <Link href="/guides/how-to-get-noc" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    Getting Your NOC
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
