import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Gold Loan Auction Process After Default: Claim Surplus Funds",
  description: "Learn about the gold loan auction notice period, how to stop a gold loan auction, and your legal rights to claim surplus money after a gold auction in India.",
  alternates: {
    canonical: "https://www.settleloan.in/gold-loan-auction-process-after-default",
  },
};

const tocItems = [
  { id: 'introduction', title: 'The Gold Loan Auction Reality' },
  { id: 'notice-period', title: 'Gold Loan Auction Notice Period' },
  { id: 'stop-auction', title: 'How to Stop a Gold Loan Auction' },
  { id: 'surplus-money', title: 'Claiming Surplus Money After Auction' },
  { id: 'legal-options', title: 'Legal Actions Against Unfair Auctions' },
  { id: 'reviews', title: 'Success Stories' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

const faqs = [
  {
    question: "What is the standard gold loan auction notice period?",
    answer: "Banks and NBFCs are legally required to give a 14-day formal notice before auctioning your gold. If this notice is not served properly, the auction can be challenged in court."
  },
  {
    question: "Can I stop a gold loan auction after receiving the notice?",
    answer: "Yes, you can stop a gold loan auction by paying the overdue amount or negotiating a settlement before the auction date. You can also seek legal intervention if the bank violated RBI guidelines."
  },
  {
    question: "What happens to the surplus money after a gold auction?",
    answer: "If your gold is sold for more than your outstanding loan amount, the bank must return the surplus money to you. Failure to do so is a legal violation."
  },
  {
    question: "Do banks inform borrowers about the surplus amount?",
    answer: "Legally, they must. However, many borrowers are kept in the dark. It is highly recommended to demand a formal statement of the auction proceedings to claim your rightful surplus funds."
  },
  {
    question: "Can the bank sell my gold for a cheap price?",
    answer: "Banks must auction gold at a fair market value. If they auction it significantly below the market rate, causing you a financial loss, you can file a case against them."
  },
  {
    question: "Will a gold loan default affect my CIBIL score?",
    answer: "Yes, failing to repay a gold loan will negatively impact your CIBIL score, which can make it difficult to secure loans in the future."
  },
  {
    question: "What if the auction amount doesn't cover my loan?",
    answer: "If the gold is sold for less than what you owe, the bank may ask you to pay the remaining balance. If you don't, they can initiate legal recovery proceedings."
  },
  {
    question: "Is it legal for the bank to auction gold without notice?",
    answer: "No. Selling gold without providing adequate notice as per the loan agreement and RBI guidelines is illegal and actionable."
  },
  {
    question: "How long does it take to get the surplus money back?",
    answer: "The surplus money should ideally be credited to your account within a few weeks after the auction. If delayed, you can send a legal notice to the bank."
  },
  {
    question: "Can I buy back my own gold at the auction?",
    answer: "Generally, the borrower cannot participate in the auction of their own pledged gold. You must clear the dues before the auction to get your gold back."
  }
];

export default function GoldLoanAuctionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.settleloan.in/gold-loan-auction-process-after-default",
        "url": "https://www.settleloan.in/gold-loan-auction-process-after-default",
        "name": "Gold Loan Auction Process After Default: Claim Surplus Funds",
        "description": "Learn about the gold loan auction notice period, how to stop a gold loan auction, and your legal rights to claim surplus money after a gold auction in India."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.settleloan.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Gold Loan Auction Process After Default",
            "item": "https://www.settleloan.in/gold-loan-auction-process-after-default"
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "Gold Loan Auction Process After Default: Notice Period & Surplus Claims",
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
        "datePublished": "2024-05-15T08:00:00+08:00",
        "dateModified": "2024-05-15T08:00:00+08:00"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "Product",
        "name": "Gold Loan Auction Legal Assistance",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "218"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh Kumar" },
            "datePublished": "2024-04-10",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "My bank auctioned my family gold without proper notice. SettleLoan helped me send a legal notice and we recovered the surplus money easily."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sunita Verma" },
            "datePublished": "2024-03-22",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "I thought my gold was lost forever. We managed to stop the gold loan auction just two days before by negotiating with the bank through SettleLoan."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit Desai" },
            "datePublished": "2024-02-15",
            "reviewRating": { "@type": "Rating", "ratingValue": "4" },
            "reviewBody": "Great legal guidance. They forced the NBFC to return my surplus money after they undervalued my gold at the auction."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Pooja Reddy" },
            "datePublished": "2024-01-30",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Highly recommend them if you're facing a gold loan default. They know exactly how the gold loan auction notice period works legally."
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
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section (Dark & Centered) */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Legal Guide & Protection
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Gold Loan Auction Process: Claim Your <span className="text-[#1F5EFF]">Surplus Money</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Did the bank auction your family gold for a cheap price? You might be entitled to the &apos;surplus&apos; funds. Find out how to stop the auction or claim your money back legally.
            </p>
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Legal Help Now
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/services" className="hover:text-[#1F5EFF] transition-colors">Services</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Gold Loan Auction Process</span>
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
          
          {/* Left (TOC) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle (Article) */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Reality of the Gold Loan Auction Process
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Gold loans are a quick fix for financial emergencies, but defaulting on them carries heavy emotional and financial consequences. Because gold is an emotionally charged asset for many Indian families, losing it in a bank auction can be devastating.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  When you default on your payments, the bank or NBFC has the right to recover their dues by auctioning your pledged gold. However, they must follow strict RBI guidelines. Most borrowers are completely unaware of their rights—especially regarding the <strong className="text-[#2E2E2E]">surplus money after a gold auction</strong> or how they can legally <strong className="text-[#2E2E2E]">stop a gold loan auction</strong> before it's too late.
                </p>
              </div>
            </section>

            <section id="notice-period" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Gold Loan Auction Notice Period & Your Rights
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Banks cannot simply wake up one day and sell your gold. The law mandates a strict protocol that financial institutions must adhere to. The <strong className="text-[#1F5EFF]">gold loan auction notice period</strong> is critical.
              </p>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Mandatory Notice Requirements</h4>
                <div className="flex items-start gap-3 mb-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                  <p className="text-gray-800 text-lg">A formal notice of minimum 14 days must be sent to the borrower via Registered Post or Courier.</p>
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                  <p className="text-gray-800 text-lg">The auction details (date, time, venue) must be published in at least two local newspapers (one vernacular and one national).</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                  <p className="text-gray-800 text-lg">You must be informed of the exact reserve price of your pledged gold.</p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-2">Legal Warning</h4>
                <p className="text-red-900 text-lg">
                  If the bank auctions your gold without fulfilling these notice requirements, the auction is considered illegal, and you have strong grounds to sue them for damages.
                </p>
              </div>
            </section>

            <section id="stop-auction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Can You Stop a Gold Loan Auction?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Receiving an auction notice is frightening, but it is not the end of the road. You can legally <strong className="text-[#1F5EFF]">stop a gold loan auction</strong> by acting swiftly. Here is what you can do:
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h4 className="text-2xl font-black text-[#2E2E2E] mb-3">Pay the Overdue Amount</h4>
                    <p className="text-lg text-gray-700">The most straightforward way is to clear your overdue interest and penal charges before the auction date to regularize your account.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h4 className="text-2xl font-black text-[#2E2E2E] mb-3">Negotiate a Settlement</h4>
                    <p className="text-lg text-gray-700">Approach the bank to restructure your loan or propose a one-time settlement (OTS). Lenders often prefer recovery over the hassle of an auction.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h4 className="text-2xl font-black text-[#2E2E2E] mb-3">File an Injunction</h4>
                    <p className="text-lg text-gray-700">If the bank has breached RBI guidelines or charged exorbitant hidden fees, you can hire a legal expert to obtain a stay order (injunction) from the court to halt the auction.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="surplus-money" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Claiming Surplus Money After Gold Auction
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Perhaps the most hidden secret in the banking industry is what happens to the <strong className="text-[#1F5EFF]">surplus money after a gold auction</strong>. Banks will not openly tell you this, but you are entitled to the extra cash.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed text-gray-800">
                  Because gold loan amounts (LTV - Loan to Value) are typically capped at 75% of the gold's actual market value, when the bank auctions your gold, it usually sells for much more than your outstanding loan balance. 
                </p>
                <p className="text-lg leading-relaxed mt-4 text-gray-800 font-bold">
                  Example: If your loan outstanding was ₹1,00,000 and the gold was auctioned for ₹1,30,000, the bank MUST return the ₹30,000 surplus to you.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Demand Auction Details</h4>
                  <p className="text-gray-700 text-base">Send a legal notice requesting the exact sale price, auction date, and buyer details.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Recover Your Funds</h4>
                  <p className="text-gray-700 text-base">If the bank refuses to refund the surplus, file a complaint with the Banking Ombudsman or civil court.</p>
                </div>
              </div>
            </section>

            <section id="legal-options" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Legal Actions Against Unfair Auctions
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Did the bank auction your family gold for a cheap price? Many NBFCs and banks have been caught undervaluing gold during auctions or selling it to their own sister companies at heavily discounted rates.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                If you suspect foul play—such as lack of notice, undervalued sale, or withheld surplus funds—you can take the following legal actions:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                  <p className="text-lg text-gray-800">File a complaint with the <strong className="text-[#2E2E2E]">RBI Banking Ombudsman</strong>.</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                  <p className="text-lg text-gray-800">Send a <strong className="text-[#2E2E2E]">Legal Demand Notice</strong> through an advocate.</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                  <p className="text-lg text-gray-800">Approach the <strong className="text-[#2E2E2E]">Consumer Disputes Redressal Commission</strong> for deficiency in service.</p>
                </div>
              </div>
            </section>

            <section id="reviews" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Client Success Stories
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                We have helped countless borrowers fight illegal auctions and recover their rightful surplus funds.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Review Card 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RK
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E] text-lg">Rajesh Kumar</h4>
                      <div className="flex gap-1 text-yellow-400">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"My bank auctioned my family gold without proper notice. SettleLoan helped me send a legal notice and we recovered the surplus money easily."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">Loan: ₹1.2L</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Surplus Refunded: ₹45K</span>
                  </div>
                </div>

                {/* Review Card 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      SV
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E] text-lg">Sunita Verma</h4>
                      <div className="flex gap-1 text-yellow-400">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"I thought my gold was lost forever. We managed to stop the gold loan auction just two days before by negotiating with the bank through SettleLoan."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">Loan: ₹3.5L</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Auction Stopped</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                    <summary className="font-bold text-xl text-[#2E2E2E] pr-8 relative list-none outline-none">
                      {faq.question}
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1F5EFF] text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                    </summary>
                    <div className="mt-4 text-gray-700 text-lg leading-relaxed pt-4 border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-6">
                  Did the bank auction your family gold for a cheap price?
                </h3>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  You might be entitled to the <strong className="text-white">surplus funds</strong>. Find out how to claim your money back or stop a pending auction today.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-black py-4 px-12 rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_10px_30px_rgba(31,94,255,0.4)] text-lg">
                  Consult a Legal Expert Now
                </Link>
                <div className="mt-16 pt-8 border-t border-white/10 text-center">
                  <p className="text-gray-400 text-sm italic">
                    *Disclaimer: Claiming surplus money depends on the auction sale price and outstanding dues. Fast legal action ensures the highest chances of recovery.
                  </p>
                </div>
              </div>
            </div>

          </article>

          {/* Right (Sidebar) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-black mb-4">Auction Notice Received?</h4>
                  <p className="text-sm text-gray-300 mb-6">Do not wait until your gold is sold. We can help you file a stay order immediately.</p>
                  <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 px-4 rounded-xl hover:bg-white hover:text-[#1F5EFF] transition-colors text-sm">
                    Stop Auction Now
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Legal Resources
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="flex items-center text-gray-700 hover:text-[#1F5EFF] text-sm group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors flex-shrink-0"></span>
                      How to Reply to Bank Notices
                    </Link>
                  </li>
                  <li>
                    <Link href="/bank-recovery-harassment-complaint" className="flex items-center text-gray-700 hover:text-[#1F5EFF] text-sm group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors flex-shrink-0"></span>
                      File Complaint Against Recovery Agents
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-settle-loan-with-bank" className="flex items-center text-gray-700 hover:text-[#1F5EFF] text-sm group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors flex-shrink-0"></span>
                      One-Time Settlement Guide
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
