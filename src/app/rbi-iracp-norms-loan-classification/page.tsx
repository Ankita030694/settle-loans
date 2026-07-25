import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "RBI IRACP Norms & Loan Classification | SMA & NPA Meaning",
  description: "Decode the RBI's complex IRACP norms. Learn what SMA-0, SMA-1, SMA-2, and NPA mean, and understand exactly how banks classify your financial stress level.",
  alternates: { canonical: "https://yourdomain.com/rbi-iracp-norms-loan-classification" }
};

const tocItems = [
  { id: 'introduction', title: 'What are IRACP Norms?' },
  { id: 'sma-classification', title: 'Understanding SMA-0, SMA-1, and SMA-2' },
  { id: 'npa-meaning', title: 'What Does NPA Mean?' },
  { id: 'consequences', title: 'Consequences of Classification' },
  { id: 'faqs', title: 'Frequently Asked Questions' }
];

export default function RbiIracpNormsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "RBI IRACP Norms & Loan Classification",
        "url": "https://yourdomain.com/rbi-iracp-norms-loan-classification"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com" },
          { "@type": "ListItem", "position": 2, "name": "RBI IRACP Norms & Loan Classification", "item": "https://yourdomain.com/rbi-iracp-norms-loan-classification" }
        ]
      },
      {
        "@type": "Article",
        "headline": "RBI IRACP Norms & Loan Classification",
        "author": { "@type": "Organization", "name": "Your Brand" }
      },
      {
        "@type": "Product",
        "name": "Loan Settlement Services",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "154"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is SMA-0?", "acceptedAnswer": { "@type": "Answer", "text": "SMA-0 signifies that principal or interest payment is overdue between 1-30 days." } },
          { "@type": "Question", "name": "What is SMA-1?", "acceptedAnswer": { "@type": "Answer", "text": "SMA-1 signifies overdue between 31-60 days." } },
          { "@type": "Question", "name": "What is SMA-2?", "acceptedAnswer": { "@type": "Answer", "text": "SMA-2 signifies overdue between 61-90 days." } },
          { "@type": "Question", "name": "When does a loan become NPA?", "acceptedAnswer": { "@type": "Answer", "text": "A loan becomes a Non-Performing Asset (NPA) when it remains overdue for more than 90 days." } },
          { "@type": "Question", "name": "What is the full form of IRACP?", "acceptedAnswer": { "@type": "Answer", "text": "Income Recognition and Asset Classification and Provisioning." } },
          { "@type": "Question", "name": "Does SMA classification affect CIBIL?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, any delay in payment is reported to credit bureaus and negatively impacts your CIBIL score." } },
          { "@type": "Question", "name": "Can SMA-2 be upgraded to standard?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, by paying the entirely overdue amount, the account can be upgraded back to standard." } },
          { "@type": "Question", "name": "Is SMA-2 an NPA?", "acceptedAnswer": { "@type": "Answer", "text": "No, SMA-2 is a warning stage before the loan is classified as an NPA at 91 days." } },
          { "@type": "Question", "name": "What happens after NPA?", "acceptedAnswer": { "@type": "Answer", "text": "The bank may start recovery proceedings under SARFAESI (for secured loans) or file civil suits (for unsecured loans)." } },
          { "@type": "Question", "name": "How to prevent NPA classification?", "acceptedAnswer": { "@type": "Answer", "text": "Clear the overdue dues within 90 days or negotiate a restructuring/settlement with the bank." } }
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
              Banking Knowledge
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Decoding RBI&apos;s <span className="text-[#1F5EFF]">IRACP Norms</span> &amp; Loan Classification
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              SMA-0, SMA-1, NPA? Decode the RBI&apos;s complex IRACP norms to understand exactly how the bank classifies your financial stress level.
            </p>
            <Link href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Expert Advice
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">RBI IRACP Norms</span>
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
          {/* Left Sidebar - TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Content - Article */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Boxed Intro */}
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">What are IRACP Norms?</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  IRACP stands for Income Recognition and Asset Classification and Provisioning. These are strict guidelines established by the Reserve Bank of India (RBI) that dictate how banks and financial institutions must recognize their income and categorize the loans they have disbursed based on the borrower's repayment behavior.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  When you default on an EMI, the bank doesn&apos;t arbitrarily decide your punishment. They strictly follow the IRACP framework, moving your account through specific stress categories (SMA) before ultimately declaring it a Non-Performing Asset (NPA).
                </p>
              </div>
            </section>

            {/* Blue Important Box */}
            <section id="sma-classification" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Understanding SMA Classification</h2>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Special Mention Accounts (SMA)</h4>
                <p className="text-lg leading-relaxed mb-6 text-gray-800">
                  Before a loan becomes an NPA, the RBI requires banks to identify incipient stress by categorizing overdue accounts into three SMA sub-categories:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-800"><strong>SMA-0:</strong> Principal or interest payment is overdue between 1 to 30 days.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-800"><strong>SMA-1:</strong> Principal or interest payment is overdue between 31 to 60 days.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-gray-800"><strong>SMA-2:</strong> Principal or interest payment is overdue between 61 to 90 days.</span>
                  </li>
                </ul>
              </div>

              {/* 4-Grid Info Boxes */}
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Early Warning Signal</h3>
                  <p className="text-gray-700">SMA classification acts as an early warning signal for banks to initiate corrective action and recover the dues before it turns into a bad loan.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Credit Score Impact</h3>
                  <p className="text-gray-700">Your credit score starts taking a hit the moment you slip into SMA-0. Banks aggressively report these days-past-due (DPD) to bureaus like CIBIL.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Constant Follow-ups</h3>
                  <p className="text-gray-700">During the SMA phase, expect continuous reminder calls, emails, and SMS from the bank's internal collections team.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Reversibility</h3>
                  <p className="text-gray-700">You can reverse the SMA classification instantly by paying the total overdue amount, returning your account to the 'Standard' category.</p>
                </div>
              </div>
            </section>

            <section id="npa-meaning" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">What Does NPA Mean?</h2>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed mb-6 text-gray-800">
                  A Non-Performing Asset (NPA) is a loan or advance for which the principal or interest payment remains overdue for a period of <strong>more than 90 days</strong>. Once an account is classified as an NPA, the bank stops recognizing the interest on that loan as income.
                </p>
                <p className="text-lg leading-relaxed mb-0 text-gray-800">
                  NPAs are further classified based on the period for which they have remained non-performing:
                  Sub-standard Assets (NPA for less than or equal to 12 months), Doubtful Assets (NPA for more than 12 months), and Loss Assets (uncollectible).
                </p>
              </div>

              {/* Red Warning Box */}
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h3 className="text-xl font-black text-red-700 mb-3">Crucial NPA Consequence</h3>
                <p className="text-red-900 text-lg">
                  Once your account crosses the 90-day mark and becomes an NPA, banks may initiate aggressive legal action. For secured loans, they can invoke the SARFAESI Act to auction your property. For unsecured loans, they may file civil suits or arbitration cases.
                </p>
              </div>
            </section>

            <section id="consequences" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Path of Financial Stress</h2>
              
              {/* Numbered Steps */}
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-xl font-black text-[#2E2E2E] mb-2">SMA-0 (1-30 Days Overdue)</h3>
                    <p className="text-lg text-gray-700">Initial missed payment. Minor penalty charges apply. Bank sends polite reminders via SMS and automated calls.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-xl font-black text-[#2E2E2E] mb-2">SMA-1 (31-60 Days Overdue)</h3>
                    <p className="text-lg text-gray-700">Increased pressure from bank recovery teams. Severe CIBIL score damage begins. Legal notices demanding payment may be dispatched.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-xl font-black text-[#2E2E2E] mb-2">SMA-2 (61-90 Days Overdue)</h3>
                    <p className="text-lg text-gray-700">Critical stage. Bank may send recovery agents to your home/office. Final opportunity to avoid NPA classification and severe legal repercussions.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-xl font-black text-[#2E2E2E] mb-2">NPA (90+ Days Overdue)</h3>
                    <p className="text-lg text-gray-700">Loan is officially "bad". Bank can now legally seize collateral, file court cases, or sell the debt to an Asset Reconstruction Company (ARC).</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Review Cards */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Client Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">A</div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">&quot;My business loan reached SMA-2 and I was terrified of it becoming an NPA. The experts negotiated a restructuring plan right before the 90-day mark!&quot;</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-sm font-bold">Loan Amount: ₹25L</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-bold">Restructured Successfully</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">R</div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">&quot;I didn&apos;t know about the 90-day NPA rule until my personal loan defaulted. They helped me settle the debt for just 40% after it turned NPA.&quot;</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-sm font-bold">Loan Amount: ₹10L</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-bold">Settled Amount: ₹4L</span>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] list-none flex justify-between items-center">
                    What is SMA-0?
                    <span className="text-[#1F5EFF] text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-600 mt-4 pt-4 border-t border-gray-100">SMA-0 signifies that principal or interest payment is overdue between 1-30 days.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] list-none flex justify-between items-center">
                    What is SMA-1?
                    <span className="text-[#1F5EFF] text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-600 mt-4 pt-4 border-t border-gray-100">SMA-1 signifies overdue between 31-60 days.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] list-none flex justify-between items-center">
                    What is SMA-2?
                    <span className="text-[#1F5EFF] text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-600 mt-4 pt-4 border-t border-gray-100">SMA-2 signifies overdue between 61-90 days. It is the final warning stage before an account is classified as an NPA.</p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] list-none flex justify-between items-center">
                    When does a loan become NPA?
                    <span className="text-[#1F5EFF] text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-600 mt-4 pt-4 border-t border-gray-100">A loan becomes a Non-Performing Asset (NPA) when it remains overdue for more than 90 days continuously.</p>
                </details>
                
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] list-none flex justify-between items-center">
                    Does SMA classification affect CIBIL?
                    <span className="text-[#1F5EFF] text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-600 mt-4 pt-4 border-t border-gray-100">Yes, banks report Days Past Due (DPD) every month. As soon as you hit SMA-0, your credit score will drop, making it difficult to get future loans.</p>
                </details>
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4">Stuck in SMA or Facing an NPA?</h3>
                <p className="text-xl mb-8 text-white/80">Don&apos;t wait for aggressive recovery or property auction. Our legal and financial experts can help negotiate settlements and restructures.</p>
                <Link href="#consultation" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-lg text-lg">
                  Request Free Case Evaluation
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page regarding RBI IRACP norms, SMA, and NPA classifications is for educational purposes only and does not constitute formal legal or financial advice. We recommend consulting with certified legal professionals for specific case strategies.
              </p>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-black mb-4">Stop Recovery Harassment Today</h3>
                  <p className="text-sm text-white/70 mb-6">If your loan is in SMA-1 or SMA-2, recovery agents might be crossing the line. Know your rights.</p>
                  <Link href="#contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors">
                    Get Help Now
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">Related Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/stop-emi-bounce-cycle-for-good" className="group flex items-center text-sm font-medium text-gray-700 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Stop EMI Bounce Cycle
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-deal-with-recovery-agents" className="group flex items-center text-sm font-medium text-gray-700 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Handling Recovery Agents
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement-process-in-india" className="group flex items-center text-sm font-medium text-gray-700 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Loan Settlement Process
                    </Link>
                  </li>
                  <li>
                    <Link href="/rbi-new-recovery-guidelines-july-2026" className="group flex items-center text-sm font-medium text-gray-700 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      New RBI Guidelines
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
