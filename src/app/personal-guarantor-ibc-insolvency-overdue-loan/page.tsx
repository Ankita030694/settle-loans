import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Personal Guarantor IBC Insolvency for Overdue Loans",
  description: "Did you stand as a personal guarantor for a failed corporate loan? The bank can now drag you into personal insolvency. Understand your risks under the IBC.",
  alternates: {
    canonical: "https://settleloan.in/personal-guarantor-ibc-insolvency-overdue-loan"
  }
};

const tocItems = [
  { id: 'introduction', title: 'The Silent Risk of Guarantees' },
  { id: 'section-95', title: 'Section 95 IBC Explained' },
  { id: 'interim-moratorium-details', title: 'Power of the Interim Moratorium' },
  { id: 'insolvency-process', title: 'The Guarantor Insolvency Process' },
  { id: 'difference-from-corporate-insolvency', title: 'Personal vs. Corporate Insolvency' },
  { id: 'negotiating-repayment-plans', title: 'Drafting a Winning Repayment Plan' },
  { id: 'risks-and-impact', title: 'Severe Consequences for Guarantors' },
  { id: 'how-to-protect', title: 'Defense Strategies & Next Steps' },
  { id: 'success-stories', title: 'Guarantor Success Stories' },
  { id: 'faqs', title: 'Frequently Asked Questions' }
];

export default function PersonalGuarantorIBCPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloan.in/personal-guarantor-ibc-insolvency-overdue-loan",
        "url": "https://settleloan.in/personal-guarantor-ibc-insolvency-overdue-loan",
        "name": "Personal Guarantor IBC Insolvency for Overdue Loans",
        "description": "Did you stand as a personal guarantor for a failed corporate loan? The bank can now drag you into personal insolvency. Understand your risks under the IBC."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloan.in/" },
          { "@type": "ListItem", "position": 2, "name": "Personal Guarantor IBC Insolvency", "item": "https://settleloan.in/personal-guarantor-ibc-insolvency-overdue-loan" }
        ]
      },
      {
        "@type": "Article",
        "headline": "Personal Guarantor IBC Insolvency for Overdue Loans",
        "description": "Understand the legal implications and process of personal guarantor insolvency under Section 95 of the IBC for overdue corporate loans.",
        "author": { "@type": "Organization", "name": "SettleLoan" }
      },
      {
        "@type": "Product",
        "name": "Personal Guarantor Insolvency Defense Consultation",
        "description": "Legal consultation and defense strategy for individuals facing insolvency under Section 95 of the IBC as personal guarantors for corporate loans.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "128"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram S." },
            "datePublished": "2024-03-12",
            "reviewBody": "SettleLoan helped me navigate a Section 95 IBC notice when my brother's company defaulted. Their legal team is exceptional.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anjali P." },
            "datePublished": "2024-01-20",
            "reviewBody": "I didn't realize the severity of signing as a guarantor until the bank invoked insolvency. Their advice saved my personal assets.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh K." },
            "datePublished": "2023-11-05",
            "reviewBody": "Highly recommend their services for anyone dragged into corporate loan defaults. Professional and highly knowledgeable about IBC.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Meera D." },
            "datePublished": "2023-09-18",
            "reviewBody": "Got immediate relief from harassing bank calls after they took over my guarantor dispute case. Excellent service.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Section 95 of the IBC?",
            "acceptedAnswer": { "@type": "Answer", "text": "Section 95 of the Insolvency and Bankruptcy Code (IBC) allows a creditor to initiate an insolvency resolution process against a personal guarantor of a corporate debtor." }
          },
          {
            "@type": "Question",
            "name": "Can a bank file for my insolvency if I am just a guarantor?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, under the IBC, a bank can initiate personal insolvency proceedings against you even if you were only a guarantor and not the primary borrower." }
          },
          {
            "@type": "Question",
            "name": "Will my personal assets be sold if insolvency is initiated?",
            "acceptedAnswer": { "@type": "Answer", "text": "If the insolvency resolution process fails and you are declared bankrupt, your non-exempt personal assets can be sold to repay the creditors." }
          },
          {
            "@type": "Question",
            "name": "Is there an interim moratorium when an application is filed?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, an interim moratorium automatically kicks in under Section 96 when an application is filed under Section 95, halting all pending legal actions against your debt." }
          },
          {
            "@type": "Question",
            "name": "Does the bank have to proceed against the company first?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. The Supreme Court has clarified that a creditor can proceed simultaneously or independently against the corporate debtor and the personal guarantor." }
          },
          {
            "@type": "Question",
            "name": "How long does the insolvency resolution process take?",
            "acceptedAnswer": { "@type": "Answer", "text": "The IBC mandates a strict timeline, generally aiming to complete the resolution process within 180 days, though extensions are sometimes granted." }
          },
          {
            "@type": "Question",
            "name": "Can I negotiate a settlement during the IBC process?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, a repayment plan can be proposed and negotiated with the creditors during the insolvency resolution process." }
          },
          {
            "@type": "Question",
            "name": "What happens if the repayment plan is rejected?",
            "acceptedAnswer": { "@type": "Answer", "text": "If the creditors reject the repayment plan, the bankruptcy process can be initiated against the personal guarantor." }
          },
          {
            "@type": "Question",
            "name": "Will my credit score be impacted?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, facing insolvency proceedings will severely and negatively impact your credit score, making it difficult to obtain future credit." }
          },
          {
            "@type": "Question",
            "name": "Do I need a lawyer for IBC proceedings?",
            "acceptedAnswer": { "@type": "Answer", "text": "Given the complex legal nature of IBC and the severe risks to your personal assets, having expert legal representation is highly recommended." }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              IBC Insolvency Alert
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Defend Against <span className="text-[#1F5EFF]">personal guarantor insolvency IBC</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Did you stand as a personal guarantor for a failed corporate loan? The bank can now drag you into personal insolvency. Understand your risks under the IBC.
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
              <Link href="/">Home</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Personal Guarantor IBC Insolvency</span>
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
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">The Silent Danger of Corporate Guarantees</h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden mb-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  Many business directors, promoters, and family members sign as personal guarantors for corporate loans without fully grasping the legal ramifications. Under recent Supreme Court rulings regarding the Insolvency and Bankruptcy Code (IBC), a <strong className="text-[#2E2E2E]">corporate loan guarantor bankruptcy</strong> is now a harsh reality. Banks no longer need to wait for the company to be liquidated before coming after your personal assets.
                </p>
              </div>
            </section>

            <section id="section-95" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">What is Section 95 of the IBC?</h2>
              <p className="text-lg leading-relaxed mb-6">
                The <strong className="text-black">section 95 IBC guarantor</strong> provision empowers creditors to file an application to initiate the insolvency resolution process against personal guarantors to corporate debtors. Once this application is filed, an automatic interim moratorium triggers under Section 96, freezing all pending legal proceedings against the guarantor's debt.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h3 className="text-xl font-black text-[#1F5EFF] mb-4">Key Aspects of Section 95 IBC:</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800">Can be initiated by a creditor directly or through a resolution professional.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800">Triggers an immediate interim moratorium under Section 96.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800">Requires the appointment of a Resolution Professional (RP) to evaluate the guarantor&apos;s assets.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="interim-moratorium-details" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Power and Perils of the Interim Moratorium</h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden mb-6">
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  The most crucial aspect of filing an application under Section 95 is the immediate, automatic trigger of the interim moratorium under Section 96 of the IBC. The moment the creditor (or the debtor themselves) files the insolvency application, this moratorium comes into effect. This is a double-edged sword for the personal guarantor.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  On the positive side, the interim moratorium halts all pending legal actions related to the debt. If you are facing recovery proceedings in a civil court, the Debt Recovery Tribunal (DRT), or under the SARFAESI Act, these actions are immediately stayed. This provides temporary breathing room from aggressive recovery measures and prevents piecemeal dismantling of your assets by different creditors.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  However, the peril lies in the strict restrictions placed on your financial autonomy. During this period, you are legally prohibited from transferring, encumbering, alienating, or disposing of any of your legal rights or beneficial interests in any of your personal assets. This means you cannot sell your house, transfer shares, or even make significant financial gifts. Attempting to hide or move assets during this period can lead to severe legal penalties and criminal prosecution under the IBC. It essentially freezes your financial life until the resolution process concludes.
                </p>
              </div>
            </section>

            <section id="insolvency-process" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Guarantor Insolvency Process</h2>
              <p className="text-lg leading-relaxed mb-6">
                When a bank invokes the IBC against you as a guarantor, the process moves swiftly. Understanding these stages is critical to mounting a proper defense.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Notice of Demand</h3>
                    <p className="text-lg text-gray-700">The creditor must issue a 14-day notice demanding payment of the defaulted amount before filing the Section 95 application.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Application Filing & Moratorium</h3>
                    <p className="text-lg text-gray-700">Once filed at the NCLT (or DRT), an interim moratorium immediately halts all other recovery actions against you.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">RP Appointment & Repayment Plan</h3>
                    <p className="text-lg text-gray-700">A Resolution Professional assesses your finances. You must propose a viable repayment plan to the creditors.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="difference-from-corporate-insolvency" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Personal vs. Corporate Insolvency: Key Differences</h2>
              <p className="text-lg leading-relaxed mb-6">
                Many guarantors confuse the Corporate Insolvency Resolution Process (CIRP) with personal insolvency proceedings. While both exist under the broader umbrella of the Insolvency and Bankruptcy Code, their objectives and mechanisms are starkly different.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The primary objective of corporate insolvency (CIRP) is to revive the struggling company. The focus is on finding a new buyer or resolution applicant who can take over the business as a going concern, thereby protecting jobs and maximizing value for all stakeholders. Liquidation is viewed as a last resort only if revival fails.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In contrast, personal guarantor insolvency leans heavily towards realization and repayment. The resolution professional's primary duty is to assess your net worth, evaluate your assets, and ensure maximum recovery for the creditors. There is no "business to revive." If a mutually agreeable repayment plan cannot be negotiated with the creditors, the process rapidly devolves into personal bankruptcy, leading to the forced sale of your private assets, such as your home, investments, and personal savings, to settle the corporate dues you guaranteed.
                </p>
              </div>
            </section>

            <section id="negotiating-repayment-plans" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Drafting a Winning Repayment Plan</h2>
              <p className="text-lg leading-relaxed mb-6">
                Under Section 105 of the IBC, the personal guarantor is required to submit a repayment plan to the Resolution Professional (RP). This plan is your best and sometimes only chance to avoid outright bankruptcy and the forced liquidation of your assets.
              </p>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h3 className="text-xl font-black text-[#1F5EFF] mb-4">Essential Components of a Repayment Plan:</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800"><strong className="text-[#2E2E2E]">Justification for Haircuts:</strong> Banks will rarely accept a plan unless it provides better realization than immediate bankruptcy. Your plan must clearly articulate why the proposed settlement amount (often involving a 'haircut' for the bank) is the maximum recoverable value.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800"><strong className="text-[#2E2E2E]">Clear Funding Source:</strong> The plan must transparently outline where the funds will come from. This could be from unencumbered savings, liquidating specific non-core assets voluntarily, or securing funds from friends and family.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800"><strong className="text-[#2E2E2E]">Feasible Timeline:</strong> Repayment cannot stretch indefinitely. The proposal must include a realistic, strictly bound timeline for paying off the agreed amount.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800"><strong className="text-[#2E2E2E]">Creditor Approval (Section 111):</strong> The RP submits your plan to the committee of creditors. It must be approved by a majority of creditors (representing at least three-fourths of the debt value). This requires intense negotiation and a strategically sound initial proposal.</p>
                  </div>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Failing to get the repayment plan approved leads directly to Chapter IV—the bankruptcy process. This is why involving experienced financial and legal advisors early in the drafting stage is critical to ensure the plan is both credible and acceptable to hostile creditors.
              </p>
            </section>

            <section id="risks-and-impact" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Severe Consequences for Guarantors</h2>
              <p className="text-lg leading-relaxed mb-6">
                Being dragged into insolvency is not just a legal headache; it poses an existential threat to your personal financial standing and lifestyle.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Asset Seizure</h3>
                  <p className="text-gray-700">Your personal properties, savings, and investments can be liquidated to satisfy the corporate debt.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Credit Ruin</h4>
                  <p className="text-gray-700">An insolvency proceeding permanently damages your CIBIL score, making future borrowing nearly impossible.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Travel Restrictions</h4>
                  <p className="text-gray-700">During the bankruptcy process, you may face severe restrictions on traveling abroad.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Social Stigma</h4>
                  <p className="text-gray-700">Being declared bankrupt carries significant professional and social stigma in business circles.</p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-4">Warning: Simultaneous Action</h4>
                <p className="text-red-900 text-lg">
                  The law allows banks to pursue the company (Corporate Debtor) and you (Personal Guarantor) simultaneously. Do not assume you are safe just because the company is undergoing resolution.
                </p>
              </div>
            </section>

            <section id="how-to-protect" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Defense Strategies & Next Steps</h2>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How to Protect Your Assets:</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The moment you receive a demand notice under Section 95, you must act. An experienced legal team can help challenge the validity of the guarantee, dispute the quantum of the claim, or negotiate a viable settlement plan before the bankruptcy stage is reached. Time is of the essence to protect your unencumbered personal assets.
                </p>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Guarantor Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">V</div>
                    <div>
                      <h3 className="font-bold text-gray-900">Vikram S.</h3>
                      <div className="flex text-yellow-400">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"SettleLoan helped me navigate a Section 95 IBC notice when my brother's company defaulted. Their legal team is exceptional."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Guarantee Demand: ₹2.5 Cr</span>
                    <span className="py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Protected Assets: 100%</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">A</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Anjali P.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"I didn't realize the severity of signing as a guarantor until the bank invoked insolvency. Their advice saved my personal assets."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Guarantee Demand: ₹80 L</span>
                    <span className="py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Case Dismissed</span>
                  </div>
                </div>

              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-xl text-gray-900 group-open:text-[#1F5EFF] flex justify-between items-center outline-none">
                    What is Section 95 of the IBC?
                    <span className="text-2xl font-light group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="pt-4 text-gray-700 text-lg leading-relaxed">
                    Section 95 of the Insolvency and Bankruptcy Code (IBC) allows a creditor to initiate an insolvency resolution process against a personal guarantor of a corporate debtor.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-xl text-gray-900 group-open:text-[#1F5EFF] flex justify-between items-center outline-none">
                    Can a bank file for my insolvency if I am just a guarantor?
                    <span className="text-2xl font-light group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="pt-4 text-gray-700 text-lg leading-relaxed">
                    Yes, under the IBC, a bank can initiate personal insolvency proceedings against you even if you were only a guarantor and not the primary borrower.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-xl text-gray-900 group-open:text-[#1F5EFF] flex justify-between items-center outline-none">
                    Will my personal assets be sold if insolvency is initiated?
                    <span className="text-2xl font-light group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="pt-4 text-gray-700 text-lg leading-relaxed">
                    If the insolvency resolution process fails and you are declared bankrupt, your non-exempt personal assets can be sold to repay the creditors.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-xl text-gray-900 group-open:text-[#1F5EFF] flex justify-between items-center outline-none">
                    Is there an interim moratorium when an application is filed?
                    <span className="text-2xl font-light group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="pt-4 text-gray-700 text-lg leading-relaxed">
                    Yes, an interim moratorium automatically kicks in under Section 96 when an application is filed under Section 95, halting all pending legal actions against your debt.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-xl text-gray-900 group-open:text-[#1F5EFF] flex justify-between items-center outline-none">
                    Does the bank have to proceed against the company first?
                    <span className="text-2xl font-light group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="pt-4 text-gray-700 text-lg leading-relaxed">
                    No. The Supreme Court has clarified that a creditor can proceed simultaneously or independently against the corporate debtor and the personal guarantor.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-xl text-gray-900 group-open:text-[#1F5EFF] flex justify-between items-center outline-none">
                    How long does the insolvency resolution process take?
                    <span className="text-2xl font-light group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="pt-4 text-gray-700 text-lg leading-relaxed">
                    The IBC mandates a strict timeline, generally aiming to complete the resolution process within 180 days, though extensions are sometimes granted.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-xl text-gray-900 group-open:text-[#1F5EFF] flex justify-between items-center outline-none">
                    Can I negotiate a settlement during the IBC process?
                    <span className="text-2xl font-light group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="pt-4 text-gray-700 text-lg leading-relaxed">
                    Yes, a repayment plan can be proposed and negotiated with the creditors during the insolvency resolution process.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-xl text-gray-900 group-open:text-[#1F5EFF] flex justify-between items-center outline-none">
                    What happens if the repayment plan is rejected?
                    <span className="text-2xl font-light group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="pt-4 text-gray-700 text-lg leading-relaxed">
                    If the creditors reject the repayment plan, the bankruptcy process can be initiated against the personal guarantor.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-xl text-gray-900 group-open:text-[#1F5EFF] flex justify-between items-center outline-none">
                    Will my credit score be impacted?
                    <span className="text-2xl font-light group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="pt-4 text-gray-700 text-lg leading-relaxed">
                    Yes, facing insolvency proceedings will severely and negatively impact your credit score, making it difficult to obtain future credit.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-xl text-gray-900 group-open:text-[#1F5EFF] flex justify-between items-center outline-none">
                    Do I need a lawyer for IBC proceedings?
                    <span className="text-2xl font-light group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="pt-4 text-gray-700 text-lg leading-relaxed">
                    Given the complex legal nature of IBC and the severe risks to your personal assets, having expert legal representation is highly recommended.
                  </div>
                </details>

              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6">Received a Section 95 IBC Notice?</h3>
                <p className="text-xl mb-8 text-gray-300">
                  Don't let a corporate default wipe out your personal assets. Contact our legal experts today for an immediate defense strategy.
                </p>
                <Link href="#contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl">
                  Consult IBC Experts Now
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational purposes only and does not constitute formal legal advice. Please consult with a qualified advocate for advice pertaining to your specific situation under the Insolvency and Bankruptcy Code.
              </p>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] sticky top-24 h-fit">
            
            <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group mb-6">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
              <div className="relative z-10">
                <div className="text-2xl font-black mb-4">Protect Your Assets</div>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  Fast legal intervention can halt IBC proceedings. Book a consultation before the moratorium expires.
                </p>
                <Link href="#contact" className="block w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl transition-colors">
                  Get Legal Help
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
              <div className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                Related Resources
              </div>
              <ul className="space-y-4">
                <li>
                  <Link href="/business-loan-settlement" className="text-gray-700 hover:text-[#1F5EFF] font-semibold flex items-center group transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    Business Loan Settlement
                  </Link>
                </li>
                <li>
                  <Link href="/loan-guarantor-legal-liability-when-primary-borrower-defaults-in-india" className="text-gray-700 hover:text-[#1F5EFF] font-semibold flex items-center group transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    Guarantor Legal Liability
                  </Link>
                </li>
                <li>
                  <Link href="/drt-case-defence-for-borrowers" className="text-gray-700 hover:text-[#1F5EFF] font-semibold flex items-center group transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    DRT Case Defence
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
