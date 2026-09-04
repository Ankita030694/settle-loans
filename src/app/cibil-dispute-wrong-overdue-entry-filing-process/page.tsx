import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'CIBIL Dispute: Wrong Overdue Entry Filing Process | Ultimate Guide',
  description: 'Did a bank update wrong CIBIL data? Learn how to file a CIBIL dispute online and permanently remove a false overdue from your CIBIL report.',
  alternates: {
    canonical: 'https://www.settleloan.in/cibil-dispute-wrong-overdue-entry-filing-process',
  },
};

export default function CibilDisputePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.settleloan.in/cibil-dispute-wrong-overdue-entry-filing-process/#webpage",
        "url": "https://www.settleloan.in/cibil-dispute-wrong-overdue-entry-filing-process",
        "name": "CIBIL Dispute: Wrong Overdue Entry Filing Process",
        "description": "Step-by-step guide to filing a CIBIL dispute online to remove a false overdue entry and fix wrong bank reporting on your credit score.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.settleloan.in/cibil-dispute-wrong-overdue-entry-filing-process/#breadcrumb",
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
            "name": "CIBIL Dispute: Wrong Overdue Entry",
            "item": "https://www.settleloan.in/cibil-dispute-wrong-overdue-entry-filing-process"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.settleloan.in/cibil-dispute-wrong-overdue-entry-filing-process/#article",
        "isPartOf": { "@id": "https://www.settleloan.in/cibil-dispute-wrong-overdue-entry-filing-process/#webpage" },
        "headline": "CIBIL Dispute: Wrong Overdue Entry Filing Process",
        "datePublished": "2024-05-20T08:00:00+05:30",
        "dateModified": "2024-05-20T08:00:00+05:30",
        "mainEntityOfPage": { "@id": "https://www.settleloan.in/cibil-dispute-wrong-overdue-entry-filing-process/#webpage" },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoan",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.settleloan.in/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "SettleLoan Expert Team"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does it take to resolve a CIBIL dispute?",
            "acceptedAnswer": { "@type": "Answer", "text": "Typically, a CIBIL dispute takes about 30 days to resolve once you file it online and CIBIL notifies the concerned bank." }
          },
          {
            "@type": "Question",
            "name": "Is it free to file a CIBIL dispute online?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, filing a dispute directly on the official CIBIL website is completely free of charge for consumers." }
          },
          {
            "@type": "Question",
            "name": "Can I remove a false overdue from CIBIL if the bank refuses?",
            "acceptedAnswer": { "@type": "Answer", "text": "If the bank rejects your dispute despite proof, you can escalate the matter to the RBI Ombudsman with your evidence to force a correction." }
          },
          {
            "@type": "Question",
            "name": "What documents do I need to dispute an overdue entry?",
            "acceptedAnswer": { "@type": "Answer", "text": "You will need bank account statements showing the payment was made, NOCs (No Objection Certificates), and loan closure letters." }
          },
          {
            "@type": "Question",
            "name": "Why did the bank update wrong CIBIL data?",
            "acceptedAnswer": { "@type": "Answer", "text": "Banks often update wrong CIBIL data due to system glitches, manual data entry errors, or a delay in updating their reporting software." }
          },
          {
            "@type": "Question",
            "name": "Will a settled loan show as overdue?",
            "acceptedAnswer": { "@type": "Answer", "text": "No, a settled loan should show a 'Settled' status with a zero balance, not an overdue status. If it shows overdue, it is a reporting error." }
          },
          {
            "@type": "Question",
            "name": "Can I file multiple disputes at the same time?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can select and dispute multiple inaccurate fields or entries in a single dispute application." }
          },
          {
            "@type": "Question",
            "name": "How much will my CIBIL score increase after removing the false overdue?",
            "acceptedAnswer": { "@type": "Answer", "text": "Depending on the severity of the overdue, score improvements can range from 20 to 100+ points immediately after the correction." }
          },
          {
            "@type": "Question",
            "name": "How do I check the status of my CIBIL dispute?",
            "acceptedAnswer": { "@type": "Answer", "text": "You can track the status by logging into your account on the CIBIL website and navigating to the Dispute Status section." }
          },
          {
            "@type": "Question",
            "name": "What is a Control Number in a CIBIL report?",
            "acceptedAnswer": { "@type": "Answer", "text": "A Control Number (CN) is a 9-digit unique number generated when a CIBIL report is pulled. You need it to file a dispute." }
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Credit Correction & Dispute Resolution Services",
        "description": "Expert assistance to remove false overdue entries and fix wrong CIBIL data reported by banks.",
        "brand": { "@type": "Brand", "name": "SettleLoan" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1845"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul Verma" },
            "datePublished": "2024-04-12",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Bank falsely reported an active overdue on my closed loan. Followed this process and got it removed in 28 days. Score jumped 60 points!"
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya Singh" },
            "datePublished": "2024-03-05",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Excellent guidance. The RBI escalation template worked perfectly when the bank initially ignored my CIBIL dispute."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit Patel" },
            "datePublished": "2024-02-18",
            "reviewRating": { "@type": "Rating", "ratingValue": "4" },
            "reviewBody": "Very detailed breakdown of how to identify wrong CIBIL data. Managed to clear two erroneous entries."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Neha Sharma" },
            "datePublished": "2024-01-22",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "The step-by-step numbered guide made the online dispute filing process a breeze. Thanks for the help."
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: 'introduction', title: 'The Nightmare of False Overdues' },
    { id: 'impact-on-loans', title: 'Impact on Your Loan Approvals' },
    { id: 'why-it-happens', title: 'Why Banks Update Wrong CIBIL Data' },
    { id: 'bureau-process', title: 'How the CIBIL Investigation Works' },
    { id: 'common-mistakes', title: 'Mistakes to Avoid When Disputing' },
    { id: 'step-by-step', title: 'How to File CIBIL Dispute Online' },
    { id: 'dispute-timeline', title: 'Dispute Timeline & Expectations' },
    { id: 'escalation', title: 'Escalating to the RBI' },
    { id: 'success-stories', title: 'Dispute Success Stories' },
    { id: 'faqs', title: 'Frequently Asked Questions' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Credit Score Rescue
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              CIBIL Dispute: How to Remove a <span className="text-[#1F5EFF]">False Overdue</span> Entry
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Did the bank falsely report an overdue payment on your CIBIL, ruining your score? Follow our step-by-step guide to file a formal dispute online and force a correction.
            </p>
            <Link href="#dispute-guide" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Start Your Dispute Process
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/credit-repair" className="hover:text-[#1F5EFF] transition-colors">Credit Repair</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">CIBIL Dispute False Overdue</span>
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
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Nightmare of False Overdues
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Imagine applying for a home loan, fully confident in your financial history, only to face immediate rejection. The reason? Your bank has updated <strong>wrong CIBIL data</strong>, falsely marking a closed loan as "Overdue". 
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  A false overdue is one of the most destructive errors on a credit report. Just a single erroneous late payment can instantly tank your score by 50 to 100 points. Fortunately, the law empowers you to <strong>file a CIBIL dispute online</strong> and force the bank to rectify the mistake.
                </p>
              </div>
            </section>

            {/* Impact on Loans */}
            <section id="impact-on-loans" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Impact on Your Loan Approvals
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                A single false entry showing delayed payment affects every aspect of your financial life. Banks use strict algorithmic screening before human review even begins. Let us look at what happens when a wrongful overdue remains uncorrected:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center flex-shrink-0 font-bold">✓</div>
                  <p className="text-lg text-gray-700"><strong>Home Loan Rejection:</strong> Mortgage lenders want near-perfect histories. An ongoing overdue on a 5-year-old personal loan will completely stall the home loan process.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center flex-shrink-0 font-bold">✓</div>
                  <p className="text-lg text-gray-700"><strong>Auto Loan Penalties:</strong> You might still get approved for a car loan, but you will pay drastically higher interest rates compared to a prime borrower.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center flex-shrink-0 font-bold">✓</div>
                  <p className="text-lg text-gray-700"><strong>Credit Card Blockades:</strong> If you are applying for premium cards (like travel or rewards cards), any DPD (Days Past Due) above 0 will trigger an automatic rejection from the card issuer's automated systems.</p>
                </li>
              </ul>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                It's essential not just to accept these penalties as a fact of life but actively fight to clear the data. Never assume that the error will "expire" quickly. Standard negative remarks can stay on your record for up to 7 years.
              </p>
            </section>

            {/* Gray Insight Box */}
            <section id="why-it-happens" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Why Do Banks Update Wrong CIBIL Data?
              </h2>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed mb-6 text-gray-800">
                  You paid on time, so why is the system showing a default? These errors are incredibly common and usually stem from administrative blunders rather than malicious intent.
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h3 className="font-black text-[#1F5EFF] text-lg mb-3">System Lags</h3>
                    <p className="text-base text-gray-600">Banks update credit bureaus every 30-45 days. If you paid on the 31st and the report ran on the 30th, you will incorrectly appear overdue.</p>
                  </div>
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Human Error</h4>
                    <p className="text-base text-gray-600">Manual data entry mistakes. An employee accidentally links someone else's default to your PAN card details.</p>
                  </div>
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Settlement Glitches</h4>
                    <p className="text-base text-gray-600">You legally settled a loan and received an NOC, but the bank's backend failed to switch the status from 'Written-Off' to 'Settled'.</p>
                  </div>
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Identity Theft</h4>
                    <p className="text-base text-gray-600">Fraudsters take out loans using your credentials, and you only find out when the overdue notification hits your CIBIL.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Bureau Process */}
            <section id="bureau-process" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How the CIBIL Investigation Works
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                A common misconception is that CIBIL has the power to just edit your score if you show them an NOC or payment receipt. This is legally false. Credit Bureaus act purely as data custodians, not data creators.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                When you initiate a dispute, CIBIL does not review your evidence. Instead, they mark the item as "Under Dispute" and send a specialized digital request directly to the concerned bank's nodal reporting desk. The bank then has an obligation to check its own internal ledger. If the bank acknowledges their error, they send a correction file back to CIBIL. CIBIL then applies the fix to your profile.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                This back-and-forth mechanism is exactly why the timeline takes up to 30 days. It involves multiple corporate departments coordinating to alter a legally binding financial history. Therefore, providing clear comments and reference numbers during the dispute form is paramount—you are ultimately writing a message for the bank employee, not CIBIL.
              </p>
            </section>

            {/* Common Mistakes */}
            <section id="common-mistakes" className="scroll-mt-32 mb-16">
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h3 className="text-2xl font-black text-red-700 mb-3">Mistakes to Avoid When Disputing</h3>
                <p className="text-lg text-red-900 leading-relaxed mb-4">
                  Do not compromise your own dispute. People often get their legitimate disputes rejected because of procedural errors:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start text-red-900">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-red-700 flex-shrink-0"></div>
                    <span><strong>Disputing the Wrong Field:</strong> If the problem is the "Days Past Due" showing as 90 instead of 0, do not dispute the "Account Status" field. Select the precise incorrect data point.</span>
                  </li>
                  <li className="flex gap-3 items-start text-red-900">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-red-700 flex-shrink-0"></div>
                    <span><strong>Lacking Documentation Offline:</strong> Even though you don't upload the NOC on the CIBIL portal directly, you must have it ready. If the bank denies the CIBIL request, your NOC is your only weapon for the RBI escalation.</span>
                  </li>
                  <li className="flex gap-3 items-start text-red-900">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-red-700 flex-shrink-0"></div>
                    <span><strong>Applying for Credit Simultaneously:</strong> Do not apply for new loans while the dispute is active. Banks will pull your report, see the negative data, reject you, and add a hard inquiry, worsening your score further.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Blue Important Box */}
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
              <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Crucial First Step: Gather Your Evidence</h4>
              <p className="text-lg leading-relaxed mb-4 text-blue-900">
                Before you initiate the dispute, you must compile ironclad proof that the overdue entry is false. CIBIL is just a reporting agency; they will ask the bank to verify your claim.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start text-blue-800">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                  <span><strong>Bank Statements:</strong> Highlighting the debited EMI amounts on or before the due dates.</span>
                </li>
                <li className="flex gap-3 items-start text-blue-800">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                  <span><strong>No Objection Certificate (NOC):</strong> The official letter stating the loan is fully closed.</span>
                </li>
                <li className="flex gap-3 items-start text-blue-800">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                  <span><strong>Communication Logs:</strong> Emails with bank officials acknowledging your payment.</span>
                </li>
              </ul>
            </div>

            {/* Numbered Steps */}
            <section id="step-by-step" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Step-by-Step: File CIBIL Dispute Online
              </h2>
              <p className="text-lg leading-relaxed mb-10 text-gray-700">
                Ready to <strong>remove a false overdue from CIBIL</strong>? Follow these precise steps on the official consumer portal.
              </p>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Log in to myCIBIL</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Go to the official CIBIL website and log into your myCIBIL portal. If you do not have an account, you will need to register and pull your latest credit report.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Navigate to the Dispute Center</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Click on the "Dispute Center" tab from the dashboard menu, then select "Dispute an Item".
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Select the Inaccurate Entry</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Scroll to the 'Account Information' section. Locate the specific loan or credit card that is showing the false overdue. Click on the 'Dispute' checkbox next to it.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Specify the Error</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      A dropdown will appear. Select the exact nature of the error—such as "Days Past Due (DPD) Incorrect" or "Asset Classification Incorrect". Add a clear, concise comment explaining that you have paid the dues and possess the NOC.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    5
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Submit and Save the Dispute ID</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Once submitted, the system will generate a unique Dispute ID. Save this ID safely; you will need it to track your resolution status.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Red Warning Box */}
            <section id="dispute-timeline" className="scroll-mt-32 mb-16">
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h3 className="text-2xl font-black text-red-700 mb-3">WARNING: Do Not Pay "Credit Repair" Scammers</h3>
                <p className="text-lg text-red-900 leading-relaxed mb-4">
                  Many fraudulent agencies claim they can "hack" CIBIL to erase overdues for a massive fee. This is impossible. CIBIL cannot alter data without the explicit authorization of the lending bank. Your only legal route is the official dispute process.
                </p>
              </div>
            </section>

            {/* Escalation Process */}
            <section id="escalation" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                What if the Bank Rejects the Dispute?
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Sometimes, a bank's automated systems will automatically reject your dispute, stubbornly upholding the <strong>wrong CIBIL data</strong>. Do not panic. You have higher authorities to appeal to.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                If 30 days have passed, or the dispute is closed without resolution, immediately file a complaint with the bank's Nodal Officer via email. Attach your NOC and bank statements. If the Nodal Officer fails to respond within 30 days, file a complaint on the <strong>RBI Ombudsman portal</strong> under the "Deficiency in Service" category. The RBI imposes heavy fines on banks for inaccurate credit reporting.
              </p>
            </section>

            {/* Review Cards Grid */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Dispute Success Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RV
                    </div>
                    <div className="flex gap-1 text-yellow-400">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <h3 className="font-bold text-[#2E2E2E] text-xl mb-3">Score Jumped 60 Points!</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    "The bank falsely reported an active overdue on my closed auto loan. Followed this process and got it removed in 28 days. Life saver!"
                  </p>
                  <div className="flex gap-3">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wide">
                      False DPD: 90 Days
                    </span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wide">
                      Status: Corrected
                    </span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      PS
                    </div>
                    <div className="flex gap-1 text-yellow-400">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <h4 className="font-bold text-[#2E2E2E] text-xl mb-3">RBI Escalation Worked</h4>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    "My bank ignored my initial CIBIL dispute. Taking it to the RBI Ombudsman using this guide forced them to rectify the wrong data instantly."
                  </p>
                  <div className="flex gap-3">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wide">
                      Error: Written-Off
                    </span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wide">
                      Status: Settled
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] list-none flex justify-between items-center">
                    How long does it take to resolve a CIBIL dispute?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                    Once you file a dispute online, CIBIL forwards it to the concerned bank. By law, the bank must investigate and respond. The entire process typically takes about 30 days to reflect correctly on your report.
                  </p>
                </details>
                
                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] list-none flex justify-between items-center">
                    Is it free to file a CIBIL dispute online?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                    Yes. Filing a dispute directly through the official CIBIL consumer portal is completely free. Do not pay third-party agencies claiming to charge a fee to file a dispute for you.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] list-none flex justify-between items-center">
                    What if the bank rejects my dispute despite proof?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                    If the bank rejects your dispute, you must escalate the matter. File a formal complaint with the bank's Nodal Officer. If unresolved after 30 days, file a grievance on the RBI Ombudsman portal.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] list-none flex justify-between items-center">
                    Do I need a Control Number to file a dispute?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                    Yes. A Control Number (CN) is a 9-digit number found at the top right of your CIBIL report. It is required to initiate any dispute online as it identifies the exact report in question.
                  </p>
                </details>

                <details name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                  <summary className="text-xl font-bold text-[#2E2E2E] list-none flex justify-between items-center">
                    Will my score increase immediately after the correction?
                    <span className="text-[#1F5EFF] group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                    Yes. As soon as the false overdue is removed and the 'Days Past Due' reflects correctly as '000', the CIBIL algorithm automatically recalculates your score, usually resulting in a substantial immediate increase.
                  </p>
                </details>
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black mb-6">Bank Refusing to Fix Your CIBIL?</h3>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  If you have filed a CIBIL dispute and the bank keeps rejecting it, you need legal escalation. Let our experts handle the RBI Ombudsman filing to force a correction.
                </p>
                <button className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                  Get Free Legal Assessment
                </button>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational purposes regarding the CIBIL dispute process. It does not constitute formal legal advice. We recommend consulting with financial experts for complex credit issues.
              </p>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              {/* Card 1 (Dark CTA) */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10">
                  <div className="text-2xl font-black mb-4">Fix Your Score Faster</div>
                  <p className="text-sm text-gray-300 mb-6">
                    Don't let bank errors stop your loan approval. Get professional help drafting your dispute response.
                  </p>
                  <button className="w-full bg-[#1F5EFF] text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors">
                    Talk to an Expert
                  </button>
                </div>
              </div>

              {/* Card 2 (White Resources) */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <div className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Essential Resources
                </div>
                <ul className="space-y-4">
                  <li>
                    <Link href="/check-free-cibil" className="flex items-center text-gray-700 hover:text-[#1F5EFF] transition-colors group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Check Free CIBIL Score
                    </Link>
                  </li>
                  <li>
                    <Link href="/rbi-ombudsman-complaint-guide" className="flex items-center text-gray-700 hover:text-[#1F5EFF] transition-colors group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI Complaint Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement-process" className="flex items-center text-gray-700 hover:text-[#1F5EFF] transition-colors group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Loan Settlement Process
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal-notice-format" className="flex items-center text-gray-700 hover:text-[#1F5EFF] transition-colors group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Download Legal Formats
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
