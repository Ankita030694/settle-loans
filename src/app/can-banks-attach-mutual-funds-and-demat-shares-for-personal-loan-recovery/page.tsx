import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Can Banks Attach Mutual Funds & Demat Shares for Loan Recovery?",
  description: "Learn if banks can freeze your Demat account or attach mutual funds for an unsecured loan default. Understand the legal procedures, court orders, and how to protect investments.",
  alternates: {
    canonical: "https://example.com/can-banks-attach-mutual-funds-and-demat-shares-for-personal-loan-recovery"
  }
};

const tocItems = [
  { id: 'introduction', title: 'The Fear of Losing Your Investments' },
  { id: 'can-banks-seize', title: 'Can Banks Freeze Demat Accounts for Loan Default?' },
  { id: 'legal-procedure', title: 'The Legal Procedure for Asset Attachment' },
  { id: 'court-order-necessity', title: 'Why a Court Order is Mandatory' },
  { id: 'how-to-protect', title: 'How to Protect Investments from Bank Recovery' },
  { id: 'success-stories', title: 'Client Success Stories' },
  { id: 'faqs', title: 'Frequently Asked Questions' }
];

export default function AssetAttachmentPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Can Banks Attach Mutual Funds & Demat Shares for Loan Recovery?",
      "description": "Learn if banks can freeze your Demat account or attach mutual funds for an unsecured loan default. Understand the legal procedures, court orders, and how to protect investments."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com" },
        { "@type": "ListItem", "position": 2, "name": "Debt Settlement", "item": "https://example.com/debt-settlement" },
        { "@type": "ListItem", "position": 3, "name": "Asset Attachment", "item": "https://example.com/can-banks-attach-mutual-funds-and-demat-shares-for-personal-loan-recovery" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Asset Attachment: Can Banks Seize Mutual Funds and Demat Shares for Loan Recovery?",
      "author": { "@type": "Organization", "name": "Legal Defense Team" },
      "publisher": { "@type": "Organization", "name": "Legal Defense Team", "logo": { "@type": "ImageObject", "url": "https://example.com/logo.png" } },
      "datePublished": "2024-06-21T08:00:00+08:00",
      "dateModified": "2024-06-21T08:00:00+08:00"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a bank freeze my Demat account for a loan default?",
          "acceptedAnswer": { "@type": "Answer", "text": "A bank cannot directly freeze your Demat account for an unsecured loan default without a specific court decree or an order from the DRT (Debt Recovery Tribunal)." }
        },
        {
          "@type": "Question",
          "name": "Can banks attach mutual funds for an unsecured loan?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, but only after following due legal process. They must file a civil suit, obtain a decree, and then file an execution petition to attach your mutual funds." }
        },
        {
          "@type": "Question",
          "name": "Do banks need a court order to seize shares?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Shares are your personal assets held in a third-party depository. Without a valid court order or DRT decree, a bank has no authority to seize them." }
        },
        {
          "@type": "Question",
          "name": "How can I protect my investments from bank recovery?",
          "acceptedAnswer": { "@type": "Answer", "text": "You can protect your investments by responding to legal notices on time, challenging the bank's claims in court, or negotiating a formal loan settlement." }
        },
        {
          "@type": "Question",
          "name": "Will my LIC policies be attached by the bank?",
          "acceptedAnswer": { "@type": "Answer", "text": "Like mutual funds and shares, LIC policies cannot be summarily attached without an explicit court execution order." }
        },
        {
          "@type": "Question",
          "name": "What happens if I ignore the bank's legal notice?",
          "acceptedAnswer": { "@type": "Answer", "text": "Ignoring legal notices can lead to an ex-parte decree, making it much easier for the bank to obtain an order to attach your assets." }
        },
        {
          "@type": "Question",
          "name": "Can the bank freeze my salary account?",
          "acceptedAnswer": { "@type": "Answer", "text": "If your salary account is with the same bank where you defaulted, they might use the 'right of set-off'. If it's a different bank, they need a court order." }
        },
        {
          "@type": "Question",
          "name": "Is it possible to settle the loan instead of losing my assets?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, banks often prefer one-time settlements over lengthy legal battles to attach assets. Professional negotiators can help you secure a favorable settlement." }
        },
        {
          "@type": "Question",
          "name": "Can my spouse's Demat account be frozen for my loan?",
          "acceptedAnswer": { "@type": "Answer", "text": "No, your spouse's individual assets cannot be attached for a personal unsecured loan taken solely in your name." }
        },
        {
          "@type": "Question",
          "name": "How long does the court process take before asset attachment?",
          "acceptedAnswer": { "@type": "Answer", "text": "The civil court process in India is lengthy and can take several years, giving you ample time to build a defense or negotiate a settlement." }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Legal Defense for Asset Protection",
      "description": "Expert legal representation to protect your mutual funds, shares, and other assets from unlawful bank attachment.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "142"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Rahul M." },
          "reviewBody": "They successfully prevented the bank from freezing my Demat account after a severe business loss."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Sneha K." },
          "reviewBody": "I was terrified of losing my mutual funds to an unsecured loan default, but their legal team stepped in and stopped the bank."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "4.8" },
          "author": { "@type": "Person", "name": "Amit V." },
          "reviewBody": "Excellent service. We negotiated a settlement before it even went to the DRT for asset attachment."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Priya S." },
          "reviewBody": "Highly professional. Kept my investments safe from bank recovery agents who were making false threats."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Asset Protection Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Can Banks <span className="text-[#1F5EFF]">Seize Mutual Funds</span> and Demat Shares?
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              A high-level guide for borrowers on the legal realities of asset attachment. Discover if a bank can legally freeze your Demat account for an unsecured loan default.
            </p>
            <Link href="#consultation" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Protect Your Assets Today
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto py-3 px-4 md:px-8 lg:px-16 text-xs md:text-sm text-[#747474] flex items-center space-x-2">
            <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/legal-guides" className="hover:text-[#1F5EFF] transition-colors">Legal Guides</Link>
            <span className="text-gray-300">/</span>
            <span className="font-bold text-[#2E2E2E]">Asset Attachment: Mutual Funds & Demat</span>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
          
          {/* Left Sidebar (TOC) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Content (Article) */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Boxed Intro */}
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">The Fear of Losing Your Investments</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  When you default on an unsecured personal loan, collection agents often use aggressive tactics to intimidate you. One of their most common threats is claiming they will instantly seize your mutual funds, freeze your Demat account, or confiscate your LIC policies. But what is the actual legal reality in India? Can they arbitrarily take your hard-earned investments?
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  This guide is for affluent and middle-class borrowers who have market investments but are struggling with loan repayments. We break down the legal procedures required to <strong>attach mutual funds for an unsecured loan</strong> and explain why empty threats from recovery agents hold no legal weight without the court's intervention.
                </p>
              </div>
            </section>

            {/* Blue Important Box Section */}
            <section id="can-banks-seize" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Can Banks Freeze Demat Accounts for Loan Default?</h2>
              <p className="text-lg leading-relaxed mb-6">
                The short answer is: <strong>No, not immediately, and not without a formal court decree.</strong> A bank cannot unilaterally log into NSDL or CDSL and request a freeze on your Demat account just because you missed a few EMIs on a personal credit card or unsecured loan.
              </p>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The Reality of the "Bank Freeze Demat Account Loan Default" Threat</h4>
                <p className="text-lg leading-relaxed mb-6 text-[#1E3A8A]">
                  Recovery agents use this phrase to create panic. In reality, your shares and mutual funds are held by third-party depositories and Asset Management Companies (AMCs). To touch these assets, the bank must:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-lg text-[#1E3A8A]">File a civil recovery suit in a competent court or the Debt Recovery Tribunal (DRT).</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-lg text-[#1E3A8A]">Win the case and obtain a formal legal decree against you.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-lg text-[#1E3A8A]">File a subsequent "Execution Petition" specifically targeting your Demat account.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4-Grid Info Boxes Section */}
            <section id="legal-procedure" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Legal Procedure for Asset Attachment</h2>
              <p className="text-lg leading-relaxed mb-6">
                Attaching third-party assets is a rigorous legal process. The law protects borrowers from summary confiscation of property for unsecured debts. Here is how the process actually works in the Indian legal system.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-4">1. Issuance of Legal Notices</h3>
                  <p className="text-lg leading-relaxed text-gray-700">The bank must first issue standard recall notices and legal demand notices under various civil laws, giving you an opportunity to respond.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-4">2. Filing a Civil Suit or DRT</h3>
                  <p className="text-lg leading-relaxed text-gray-700">If unresolved, the bank files a recovery suit. For amounts exceeding ₹20 Lakhs, they may approach the Debt Recovery Tribunal (DRT).</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-4">3. Obtaining the Decree</h3>
                  <p className="text-lg leading-relaxed text-gray-700">The court examines the evidence. If the bank proves the debt, the court passes a decree. This extensive process can take years.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-4">4. Execution Petition</h3>
                  <p className="text-lg leading-relaxed text-gray-700">Only after winning the decree can the bank file an execution petition to explicitly attach specific assets like Mutual Funds or Demat shares.</p>
                </div>
              </div>
            </section>

            {/* Red Warning Box Section */}
            <section id="court-order-necessity" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Why a Court Order is Mandatory to Seize Shares</h2>
              <p className="text-lg leading-relaxed mb-6">
                There is a fundamental difference between a secured loan (like a home loan) and an unsecured loan (like a personal loan or credit card). 
              </p>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-4">Beware of Collection Agent Lies</h4>
                <p className="text-lg leading-relaxed text-red-900">
                  Agents often claim they will "seize your shares tomorrow." This is legally impossible for unsecured loans. They need a <strong>court order to seize shares</strong> because these assets were never pledged as collateral. It is a severe violation of the SARFAESI Act to bypass civil court procedures for unsecured debt recovery.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-2xl font-black text-[#2E2E2E] mb-4">The Exception: Banker's Right of Set-Off</h4>
                <p className="text-lg leading-relaxed text-gray-700">
                  If you hold a fixed deposit or savings account in the <strong>exact same bank</strong> where you defaulted, the bank might invoke their "Right of Lien and Set-Off" to debit funds without a court order. However, this does not apply to third-party assets like Demat shares (NSDL/CDSL) or Mutual Funds managed by external AMCs.
                </p>
              </div>
            </section>

            {/* Numbered Steps Section */}
            <section id="how-to-protect" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How to Protect Investments from Bank Recovery</h2>
              <p className="text-lg leading-relaxed mb-8">
                If you are facing financial hardship but want to safeguard your investment portfolio, taking proactive legal steps is crucial. Here is how you can legally <strong>protect investments from bank recovery</strong>.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">Respond to Legal Notices Promptly</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Never ignore a legal notice. If you fail to appear in court, the judge may pass an ex-parte decree (an order in your absence), which fast-tracks the bank's ability to attach your assets. Always reply through a competent lawyer.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">Challenge the Bank's Claims</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Banks often inflate outstanding amounts with exorbitant penal interest and hidden charges. By contesting the exact amount owed in court, you can significantly delay the decree process, buying you time to stabilize your finances.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">Negotiate a One-Time Settlement (OTS)</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Litigation is expensive for banks too. Before they obtain an execution petition to freeze your Demat account, engage expert negotiators to propose a One-Time Settlement. You can often settle the loan for a fraction of the outstanding amount, completely protecting your portfolio.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Review/Success Stories Grid */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Client Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Story 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RM
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-6">"The bank sent a notice saying they would liquidate my Mutual Funds within 48 hours for a credit card default. The legal team stopped their harassment and settled my debt at 35% without a single mutual fund being touched."</p>
                  <div className="flex gap-3 text-xs font-bold">
                    <span className="py-1 px-3 rounded-full bg-red-100 text-red-700">Loan: ₹15L</span>
                    <span className="py-1 px-3 rounded-full bg-green-100 text-green-700">Settled: ₹5.2L</span>
                  </div>
                </div>

                {/* Story 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      SK
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-6">"I was terrified of losing my Demat shares built over a decade because of a failed business loan. Engaging proper defense lawyers proved the bank's threats were illegal. My portfolio is completely safe."</p>
                  <div className="flex gap-3 text-xs font-bold">
                    <span className="py-1 px-3 rounded-full bg-red-100 text-red-700">Loan: ₹42L</span>
                    <span className="py-1 px-3 rounded-full bg-green-100 text-green-700">Settled: ₹16L</span>
                  </div>
                </div>

              </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Can a bank freeze my Demat account for a loan default?", a: "A bank cannot directly freeze your Demat account for an unsecured loan default without a specific court decree or an order from the DRT (Debt Recovery Tribunal)." },
                  { q: "Can banks attach mutual funds for an unsecured loan?", a: "Yes, but only after following due legal process. They must file a civil suit, obtain a decree, and then file an execution petition to attach your mutual funds." },
                  { q: "Do banks need a court order to seize shares?", a: "Absolutely. Shares are your personal assets held in a third-party depository. Without a valid court order or DRT decree, a bank has no authority to seize them." },
                  { q: "How can I protect my investments from bank recovery?", a: "You can protect your investments by responding to legal notices on time, challenging the bank's claims in court, or negotiating a formal loan settlement." },
                  { q: "Will my LIC policies be attached by the bank?", a: "Like mutual funds and shares, LIC policies cannot be summarily attached without an explicit court execution order." },
                  { q: "What happens if I ignore the bank's legal notice?", a: "Ignoring legal notices can lead to an ex-parte decree, making it much easier for the bank to obtain an order to attach your assets." },
                  { q: "Can the bank freeze my salary account?", a: "If your salary account is with the same bank where you defaulted, they might use the 'right of set-off'. If it's a different bank, they need a court order." },
                  { q: "Is it possible to settle the loan instead of losing my assets?", a: "Yes, banks often prefer one-time settlements over lengthy legal battles to attach assets. Professional negotiators can help you secure a favorable settlement." },
                  { q: "Can my spouse's Demat account be frozen for my loan?", a: "No, your spouse's individual assets cannot be attached for a personal unsecured loan taken solely in your name." },
                  { q: "How long does the court process take before asset attachment?", a: "The civil court process in India is lengthy and can take several years, giving you ample time to build a defense or negotiate a settlement." }
                ].map((faq, index) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">{faq.q}</h4>
                    <p className="text-lg leading-relaxed text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div id="consultation" className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black mb-6">Secure Your Portfolio.</h3>
                <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Worried the bank will confiscate your hard-earned Mutual Funds or Shares to recover a personal loan? Get specialized legal defense to protect your financial portfolio.
                </p>
                <form className="max-w-md mx-auto space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1F5EFF]" required />
                  <input type="tel" placeholder="Phone Number" className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1F5EFF]" required />
                  <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1F5EFF]" required />
                  <button type="submit" className="w-full bg-[#1F5EFF] text-white font-bold text-xl py-4 rounded-xl hover:bg-blue-600 transition-colors shadow-lg">
                    Request Free Consultation
                  </button>
                </form>
              </div>
              
              <div className="mt-16 pt-8 border-t border-gray-100/20 text-center relative z-10">
                <p className="text-gray-400 text-sm italic">
                  Disclaimer: This page is for informational purposes only and does not constitute formal legal advice. Please consult with our legal experts for guidance on your specific situation.
                </p>
              </div>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              {/* Card 1 (Dark CTA) */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-4">Stop Bank Harassment</h4>
                  <p className="text-gray-300 mb-6 text-sm">Don't let empty threats dictate your financial future. Speak to our defense lawyers now.</p>
                  <Link href="#consultation" className="inline-block w-full bg-[#1F5EFF] py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors">
                    Get Help Now
                  </Link>
                </div>
              </div>

              {/* Card 2 (White Resources) */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">Related Guides</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/sarfaesi-act-guidelines" className="group flex items-center text-gray-700 hover:text-[#1F5EFF] transition-colors text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      SARFAESI Act Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-settle-personal-loan" className="group flex items-center text-gray-700 hover:text-[#1F5EFF] transition-colors text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      How to Settle a Personal Loan
                    </Link>
                  </li>
                  <li>
                    <Link href="/dealing-with-recovery-agents" className="group flex items-center text-gray-700 hover:text-[#1F5EFF] transition-colors text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Dealing with Recovery Agents
                    </Link>
                  </li>
                  <li>
                    <Link href="/credit-card-default-legal-action" className="group flex items-center text-gray-700 hover:text-[#1F5EFF] transition-colors text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Credit Card Default Legal Action
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
