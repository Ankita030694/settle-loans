import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Vehicle Seizure Rules: Overdue Loans & Repo Agents",
  description: "Did goons seize your car from the middle of the road? This is completely illegal. Know the strict RBI rules that repo agents must follow and how to stop car repossession.",
  alternates: {
    canonical: "https://www.settleloan.in/vehicle-seizure-overdue-loan-documents-repo-agent-rules",
  },
};

const tocItems = [
  { id: 'intro', title: 'The Truth About Vehicle Seizures' },
  { id: 'rbi-guidelines', title: 'Strict RBI Guidelines for Repo Agents' },
  { id: 'what-is-illegal', title: 'What is Considered Illegal Seizure?' },
  { id: 'role-of-police', title: 'The Role of Police in Repossession' },
  { id: 'surrendering-vehicle', title: 'Voluntary Surrender vs. Forced Seizure' },
  { id: 'impact-on-cibil', title: 'Impact on Your CIBIL Score' },
  { id: 'stop-repossession', title: 'How to Stop Car Repossession' },
  { id: 'success-stories', title: 'Success Stories' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Vehicle Seizure Rules: Overdue Loans & Repo Agents",
      "description": "Know the strict RBI rules that repo agents must follow regarding car repossession.",
      "url": "https://www.settleloan.in/vehicle-seizure-overdue-loan-documents-repo-agent-rules"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.settleloan.in/" },
        { "@type": "ListItem", "position": 2, "name": "Vehicle Seizure Rules", "item": "https://www.settleloan.in/vehicle-seizure-overdue-loan-documents-repo-agent-rules" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Stop Illegal Vehicle Seizure by Repo Agents",
      "author": { "@type": "Organization", "name": "SettleLoan" },
      "publisher": { "@type": "Organization", "name": "SettleLoan", "logo": { "@type": "ImageObject", "url": "https://www.settleloan.in/logo.png" } },
      "datePublished": "2024-05-15T08:00:00+08:00",
      "dateModified": "2024-05-15T08:00:00+08:00"
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Legal Assistance for Vehicle Seizure",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "218"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Can a repo agent seize my car from the middle of the road?", "acceptedAnswer": { "@type": "Answer", "text": "No. According to RBI guidelines, seizing a vehicle forcibly from the road with the help of goons is completely illegal and a criminal offense." } },
        { "@type": "Question", "name": "Do banks have to give notice before car repossession?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, banks must provide a final legal notice giving you sufficient time to clear the dues or present your case before initiating the vehicle seizure." } },
        { "@type": "Question", "name": "What should I do if a recovery agent threatens me?", "acceptedAnswer": { "@type": "Answer", "text": "You can file a police complaint against the recovery agent and complain to the bank's grievance redressal officer, as well as the RBI Ombudsman." } },
        { "@type": "Question", "name": "Can repo agents visit my home at any time?", "acceptedAnswer": { "@type": "Answer", "text": "No. The RBI restricts recovery agents from visiting your premises or calling you before 7 AM or after 7 PM." } },
        { "@type": "Question", "name": "Can the bank sell my car immediately after seizure?", "acceptedAnswer": { "@type": "Answer", "text": "No. The bank has to provide a pre-sale notice, giving you a final chance to settle the dues within a stipulated time frame (usually 7 to 14 days) before selling the vehicle." } },
        { "@type": "Question", "name": "Is it possible to stop a car repossession once started?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, by negotiating a settlement, paying the overdue amount, or seeking legal intervention if the seizure process violates RBI norms." } },
        { "@type": "Question", "name": "Are musclemen allowed for loan recovery in India?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely not. The Supreme Court of India and the RBI have strictly banned the use of musclemen, goons, or any physical force for loan recovery." } },
        { "@type": "Question", "name": "What documents should the repo agent show before seizing the car?", "acceptedAnswer": { "@type": "Answer", "text": "They must show a valid authorization letter from the bank, a copy of the final notice issued to you, and their valid identity card." } },
        { "@type": "Question", "name": "Can I claim compensation for illegal seizure?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, if the repossession was illegal, involved force, or humiliated you publicly, you can file a case in the consumer court or civil court claiming damages." } },
        { "@type": "Question", "name": "How can SettleLoan help if my car is seized?", "acceptedAnswer": { "@type": "Answer", "text": "SettleLoan provides legal guidance to challenge illegal vehicle seizures, negotiates with the bank on your behalf, and helps secure the release of your vehicle." } }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* SEO JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Know Your Rights
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Stop Illegal <span className="text-[#1F5EFF]">Vehicle Seizure</span> by Repo Agents
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Did goons seize your car from the middle of the road? This is completely illegal. Know the strict RBI rules that repo agents must follow.
            </p>
            <Link href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              GET LEGAL HELP NOW
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Vehicle Seizure Rules</span>
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
            
            {/* Intro Section */}
            <section id="intro" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">The Truth About Vehicle Seizures</h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Falling behind on car loan payments is stressful enough without the added fear of losing your vehicle suddenly. Many borrowers in India report shocking incidents where recovery agents intercept them on the road, forcibly take the keys, and drive away with their car, leaving them stranded. 
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The truth is, this "strong-arm" tactic is a flagrant violation of the rules. The Reserve Bank of India (RBI) and the Supreme Court have clearly outlined that banks and NBFCs cannot resort to hooliganism, force, or any illegal vehicle seizure RBI norms strictly prohibit.
                </p>
                <p className="text-lg leading-relaxed mb-0 text-gray-700">
                  Understanding car repo agent rules India is your first line of defense. When you know your rights, you can stop car repossession efforts that are unconstitutional and take immediate action against unlawful agents.
                </p>
              </div>
            </section>

            {/* RBI Guidelines */}
            <section id="rbi-guidelines" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Strict RBI Guidelines for Repo Agents</h2>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Mandatory Repossession Protocol</h4>
                <p className="text-lg leading-relaxed mb-4 text-blue-900">
                  Banks cannot wake up one day and decide to seize your vehicle. They must follow a strict legal trajectory designed to protect the borrower's dignity and rights.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">Notice Period: Banks must serve a written 7-day to 15-day notice before repossessing the vehicle.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">Valid ID: Recovery agents must possess and display valid authorization and an ID card.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">No Force Permitted: The use of physical force, abuse, or intimidation is strictly forbidden.</span>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Here are the step-by-step procedures that an authorized agency or bank must adhere to:
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Issuance of Loan Recall Notice</h3>
                    <p className="text-lg text-gray-700">Before any action is taken, the bank will declare the account as an NPA (Non-Performing Asset) and issue a loan recall notice asking for complete payment.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Pre-Seizure Intimation</h3>
                    <p className="text-lg text-gray-700">The bank must notify the local police station about the intended repossession and serve a final notice to the borrower giving them a final window to clear the dues.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Peaceful Repossession</h3>
                    <p className="text-lg text-gray-700">The physical possession must be done peacefully, typically from the borrower's residence, in a civilized manner, without creating a public scene.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Inventory and Pre-Sale Notice</h3>
                    <p className="text-lg text-gray-700">After seizure, an inventory of items left in the car must be made. The bank will then issue a pre-sale notice giving 7-14 days for the borrower to settle before auctioning the car.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* What is Illegal? */}
            <section id="what-is-illegal" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">What is Considered Illegal Seizure?</h2>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-4">Warning: Identify Illegal Actions</h4>
                <p className="text-lg leading-relaxed text-red-900 m-0">
                  If repo agents act like goons and violate the dignity and safety of a borrower, their actions cross the line into criminality. In such scenarios, the borrower can hold the bank directly liable for damages.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Public Interception</h4>
                  <p className="text-gray-700">Stopping you forcefully on the highway, blocking your path, or dragging you out of the vehicle in public view.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">No Advance Notice</h4>
                  <p className="text-gray-700">Seizing the vehicle without having sent any prior written communication or legal notice.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Use of Musclemen</h4>
                  <p className="text-gray-700">Hiring thugs or unregistered recovery agents to intimidate, threaten, or abuse you or your family members.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Odd Hours Harassment</h4>
                  <p className="text-gray-700">Attempting to seize the vehicle or showing up at your residence before 7 AM or after 7 PM.</p>
                </div>
              </div>
            </section>

            {/* Role of Police */}
            <section id="role-of-police" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Role of Police in Repossession</h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden mb-8">
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  One of the most common misconceptions among borrowers is the extent of police authority during a vehicle seizure. Often, recovery agents will threaten borrowers by claiming they will bring the police to arrest them or forcibly take the vehicle. It is crucial to understand that a loan default is a civil dispute, not a criminal offense.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The police cannot arrest you for defaulting on your car loan, nor can they actively assist recovery agents in seizing your vehicle without a specific court order. The primary role of the police is simply to maintain law and order. If recovery agents approach the local police station before a seizure, it is only to inform them to avoid a breach of peace, not to use them as their personal enforcement squad.
                </p>
                <p className="text-lg leading-relaxed mb-0 text-gray-700">
                  If a police officer accompanies the recovery agents and pressures you to hand over the keys without a court directive, they are overstepping their legal bounds. In such instances, you have the full right to respectfully demand to see the court order authorizing the police to seize the asset. Without it, you are not legally obligated to surrender the vehicle to them.
                </p>
              </div>
            </section>

            {/* Surrendering Vehicle */}
            <section id="surrendering-vehicle" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Voluntary Surrender vs. Forced Seizure</h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-8 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-xl mb-4">Voluntary Surrender</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    If you realize you can no longer afford the EMIs, voluntarily surrendering the vehicle might be an option. This process allows you to peacefully hand over the car to the bank, avoiding the stress and public humiliation of a forced repossession. 
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    However, keep in mind that surrendering the vehicle does not wipe away your debt. The bank will still auction the car, and if the sale value is less than your outstanding loan balance, you will be legally responsible for paying the "deficiency balance."
                  </p>
                </div>
                <div className="bg-red-50 p-8 rounded-xl border border-red-100">
                  <h4 className="font-black text-red-700 text-xl mb-4">Forced Repossession</h4>
                  <p className="text-gray-900 text-lg leading-relaxed mb-4">
                    Waiting for the bank to forcibly seize your car adds tremendous trauma. Furthermore, forced repossession adds significant recovery fees, towing charges, and legal expenses to your overall loan balance, sinking you further into debt.
                  </p>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Unlike a voluntary surrender, a forced seizure puts you on the defensive. It drastically damages your credit report, making future borrowing near impossible, and often involves dealing with aggressive, unyielding third-party recovery agencies.
                  </p>
                </div>
              </div>
            </section>

            {/* Impact on CIBIL */}
            <section id="impact-on-cibil" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Impact on Your CIBIL Score</h2>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed mb-6">
                  A vehicle seizure, whether forced or voluntary, is a massive blow to your credit health. When a car is repossessed, the lender marks your credit report with a "Repossession" or "Written-off" status. This derogatory mark will stay on your CIBIL report for up to seven years.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="font-black text-gray-500 mt-1">01.</span>
                    <span className="text-lg text-gray-700"><strong>Plummeting Score:</strong> A single repossession can drop your credit score by 100 to 150 points instantly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-black text-gray-500 mt-1">02.</span>
                    <span className="text-lg text-gray-700"><strong>Future Loan Denials:</strong> Most major banks and NBFCs will outright reject loan or credit card applications if they see a recent vehicle seizure on your file.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-black text-gray-500 mt-1">03.</span>
                    <span className="text-lg text-gray-700"><strong>Higher Interest Rates:</strong> If you do manage to secure credit in the future from subprime lenders, you will be charged astronomically high interest rates due to your high-risk profile.</span>
                  </li>
                </ul>
                <p className="text-lg leading-relaxed mt-6">
                  This is why proactive legal intervention and loan settlement negotiations are vastly superior to letting the car get seized. Settling the loan legally may still impact your score, but it avoids the catastrophic damage of a repossession and prevents the bank from pursuing you for a deficiency balance.
                </p>
              </div>
            </section>

            {/* How to Stop Repossession */}
            <section id="stop-repossession" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How to Stop Car Repossession</h2>
              <p className="text-lg leading-relaxed mb-6">
                If you are facing threats of vehicle seizure, do not panic. The law provides you with legal remedies to defend yourself against predatory recovery tactics. 
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Immediate Steps You Should Take</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="font-black text-gray-500 mt-1">01.</span>
                    <span className="text-lg text-gray-700"><strong>Call the Police:</strong> If agents try to seize your vehicle on the road forcefully, immediately dial 100/112 and report robbery/extortion.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-black text-gray-500 mt-1">02.</span>
                    <span className="text-lg text-gray-700"><strong>Ask for Documentation:</strong> Demand to see their ID, bank authorization letter, and the copy of the pre-seizure notice.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-black text-gray-500 mt-1">03.</span>
                    <span className="text-lg text-gray-700"><strong>File an RBI Complaint:</strong> Lodge a complaint on the RBI CMS (Complaint Management System) portal against the bank for using unparliamentary tactics.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-black text-gray-500 mt-1">04.</span>
                    <span className="text-lg text-gray-700"><strong>Seek Legal Injunction:</strong> Approach a civil court with your lawyer to get a stay order on the repossession, especially if you have genuine intent to pay.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Success Stories */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Story 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RK
                    </div>
                    <div className="flex gap-1 text-yellow-400">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"Goons stopped my car in traffic and threatened my family. The legal experts intervened, filed a police complaint, and forced the bank to back down and restructure my loan."</p>
                  <div className="flex gap-3 text-sm font-bold">
                    <span className="py-1 px-3 rounded-full bg-red-100 text-red-700">Loan: ₹12L</span>
                    <span className="py-1 px-3 rounded-full bg-green-100 text-green-700">Saved Vehicle</span>
                  </div>
                </div>

                {/* Story 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      SM
                    </div>
                    <div className="flex gap-1 text-yellow-400">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"They took my car from the parking lot without any notice. With legal help, we dragged the bank to consumer court. They had to return the car and pay compensation."</p>
                  <div className="flex gap-3 text-sm font-bold">
                    <span className="py-1 px-3 rounded-full bg-red-100 text-red-700">Loan: ₹8.5L</span>
                    <span className="py-1 px-3 rounded-full bg-green-100 text-green-700">Returned + Comp</span>
                  </div>
                </div>

              </div>
            </section>

            {/* FAQs */}
            <section id="faq" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    Can a repo agent seize my car from the middle of the road?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    No. According to RBI guidelines, seizing a vehicle forcibly from the road with the help of goons is completely illegal and a criminal offense.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    Do banks have to give notice before car repossession?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    Yes, banks must provide a final legal notice giving you sufficient time to clear the dues or present your case before initiating the vehicle seizure.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    What should I do if a recovery agent threatens me?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    You can file a police complaint against the recovery agent and complain to the bank's grievance redressal officer, as well as the RBI Ombudsman.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    Can repo agents visit my home at any time?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    No. The RBI restricts recovery agents from visiting your premises or calling you before 7 AM or after 7 PM.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    Can the bank sell my car immediately after seizure?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    No. The bank has to provide a pre-sale notice, giving you a final chance to settle the dues within a stipulated time frame (usually 7 to 14 days) before selling the vehicle.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    Is it possible to stop a car repossession once started?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    Yes, by negotiating a settlement, paying the overdue amount, or seeking legal intervention if the seizure process violates RBI norms.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    Are musclemen allowed for loan recovery in India?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    Absolutely not. The Supreme Court of India and the RBI have strictly banned the use of musclemen, goons, or any physical force for loan recovery.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    What documents should the repo agent show before seizing the car?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    They must show a valid authorization letter from the bank, a copy of the final notice issued to you, and their valid identity card.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    Can I claim compensation for illegal seizure?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    Yes, if the repossession was illegal, involved force, or humiliated you publicly, you can file a case in the consumer court or civil court claiming damages.
                  </div>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="font-bold text-lg text-[#2E2E2E] flex justify-between items-center outline-none">
                    How can SettleLoan help if my car is seized?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    SettleLoan provides legal guidance to challenge illegal vehicle seizures, negotiates with the bank on your behalf, and helps secure the release of your vehicle.
                  </div>
                </details>

              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6">Stop Harassment Now</h3>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  Our legal experts can help you stop illegal vehicle seizures, file injunctions against abusive banks, and protect your dignity. Book a free consultation today.
                </p>
                <Link href="#contact" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform text-lg shadow-xl">
                  Talk to a Legal Expert
                </Link>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                *The information provided on this page is for educational purposes only and does not constitute legal advice. Please consult with our legal experts for personalized guidance regarding your specific situation.
              </p>
            </div>

          </article>

          {/* Right (Sidebar) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              {/* Card 1 (Dark CTA) */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-4">Facing Car Seizure?</h4>
                  <p className="text-gray-300 text-sm mb-6">Don't let them take your vehicle illegally. Take action today.</p>
                  <Link href="#contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-600 transition-colors text-sm">
                    Get Help Now
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
                    <Link href="/rbi-guidelines-loan-recovery" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group text-sm font-medium transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI Loan Recovery Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-stop-recovery-agents" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group text-sm font-medium transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Stop Recovery Agent Harassment
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-file-rbi-ombudsman-complaint" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group text-sm font-medium transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Filing an RBI Complaint
                    </Link>
                  </li>
                  <li>
                    <Link href="/consumer-court-bank-harassment" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group text-sm font-medium transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Consumer Court vs Banks
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
