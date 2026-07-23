import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Check Loan Settlement Status: How to Track & Get NOC Online",
  description: "Waiting for your settlement NOC? Learn how to legally check loan settlement status online, track your NOC, and force the bank to update your CIBIL.",
  alternates: {
    canonical: "https://settleloans.in/check-loan-settlement-status",
  },
};

export default function CheckLoanSettlementStatusPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/check-loan-settlement-status#webpage",
        "url": "https://settleloans.in/check-loan-settlement-status",
        "name": "Check Loan Settlement Status: How to Track & Get NOC Online",
        "description": "Learn how to track your loan settlement status, obtain your NOC, and force the bank to update your CIBIL after settlement.",
        "breadcrumb": { "@id": "https://settleloans.in/check-loan-settlement-status#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/check-loan-settlement-status#breadcrumb",
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
            "name": "Check Settlement Status",
            "item": "https://settleloans.in/check-loan-settlement-status"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/check-loan-settlement-status#article",
        "headline": "Check Loan Settlement Status online and Track NOC",
        "description": "Step by step guide to track your loan settlement status, and legal remedies if the bank delays your settlement NOC status.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Legal Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-07-23",
        "dateModified": "2024-07-23",
        "mainEntityOfPage": { "@id": "https://settleloans.in/check-loan-settlement-status#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/check-loan-settlement-status#product",
        "name": "NOC & Settlement Status Legal Assistance",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert legal services to compel banks to issue the NOC and update your settlement status on CIBIL.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1045",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikas S." },
            "datePublished": "2024-02-10",
            "reviewBody": "Bank kept saying 'system update pending' for 4 months. One legal notice from SettleLoans and my settlement status was updated online in 48 hours.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Meera T." },
            "datePublished": "2024-03-22",
            "reviewBody": "I paid the settlement amount but didn't receive the NOC. SettleLoans helped me track the status and force them to issue the hard copy.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajiv N." },
            "datePublished": "2024-04-15",
            "reviewBody": "My CIBIL wasn't updating even after getting the NOC. SettleLoans filed an RBI complaint and got it fixed quickly.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anjali K." },
            "datePublished": "2024-05-08",
            "reviewBody": "I was checking my loan settlement status online every day with no luck. The legal intervention made the bank finally issue the clearance letter.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
             "@type": "Review",
             "author": { "@type": "Person", "name": "Deepak M." },
             "datePublished": "2024-06-12",
             "reviewBody": "Great service! They escalated the delay to the nodal officer and got my settlement NOC status sorted out in a week.",
             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/check-loan-settlement-status#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How can I check loan settlement status online?",
            "acceptedAnswer": { "@type": "Answer", "text": "You can check your loan settlement status online by logging into your bank's net banking portal, using the bank's official app, or downloading your latest CIBIL report." }
          },
          {
            "@type": "Question",
            "name": "How long does it take for a settlement status to update?",
            "acceptedAnswer": { "@type": "Answer", "text": "Usually, banks take between 15 to 45 days after the final settlement payment to update the status in their system and issue the NOC." }
          },
          {
            "@type": "Question",
            "name": "Why is my settlement NOC status still pending?",
            "acceptedAnswer": { "@type": "Answer", "text": "Delays can occur due to administrative backlog, failure of the collection agency to notify the bank, or internal audit processes before closing the account." }
          },
          {
            "@type": "Question",
            "name": "How to track loan settlement progress if the bank is unresponsive?",
            "acceptedAnswer": { "@type": "Answer", "text": "If the branch is unresponsive, escalate the issue by emailing the bank's Grievance Redressal Officer or Nodal Officer with proof of settlement payment." }
          },
          {
            "@type": "Question",
            "name": "Will my CIBIL show 'Settled' immediately after payment?",
            "acceptedAnswer": { "@type": "Answer", "text": "No, banks report data to credit bureaus like CIBIL typically within 30-45 days. The status will update after the next reporting cycle." }
          },
          {
            "@type": "Question",
            "name": "What should I do if the bank refuses to issue the NOC?",
            "acceptedAnswer": { "@type": "Answer", "text": "You should send a legal demand notice to the bank demanding the NOC and threatening a complaint to the RBI Ombudsman for deficiency of service." }
          },
          {
            "@type": "Question",
            "name": "Is an email confirmation enough as a settlement status update?",
            "acceptedAnswer": { "@type": "Answer", "text": "While an email confirmation is good proof of payment, you must always insist on a formal No Dues Certificate (NOC) on the bank's letterhead." }
          },
          {
            "@type": "Question",
            "name": "Can recovery agents harass me while the settlement status is pending?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. Once a settlement is agreed upon and payments are made on time, banks must stop all recovery agent harassment immediately." }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Account Closed and Settled status?",
            "acceptedAnswer": { "@type": "Answer", "text": "Account Closed implies you paid the full outstanding dues. Settled status means you paid a mutually agreed, discounted amount." }
          },
          {
            "@type": "Question",
            "name": "Can I complain to the RBI for delayed NOC issuance?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, if the bank fails to issue the NOC within 30 days of completing the settlement terms, you can file a complaint on the RBI CMS portal." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "the-waiting-game", title: "The Waiting Game: Why Banks Delay" },
    { id: "how-to-track", title: "How to Track Your Status Online" },
    { id: "legal-rights", title: "Your Legal Rights for NOC & Updates" },
    { id: "steps-to-escalate", title: "Steps to Escalate Delay in Status" },
    { id: "fake-updates", title: "Beware of Fake Status Updates" },
    { id: "cibil-update", title: "The CIBIL Update Delay" },
    { id: "success-stories", title: "Client Success Stories" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

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
              Settlement Tracking Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              How to Check Your <span className="text-[#1F5EFF]">Loan Settlement Status</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Waiting months for your settlement NOC? Here is how to legally track and force the bank to update your status.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Force NOC Issuance Legally
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li className="font-bold text-[#2E2E2E]">Check Settlement Status</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">

          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Column: Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

            <section id="the-waiting-game" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Waiting Game: Why Banks Delay
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  You’ve finally arranged the funds, signed the settlement letter, and made the final payment. The stressful part should be over, right? Unfortunately, for many borrowers, this is where a new nightmare begins: the endless wait for the settlement NOC and an updated <strong>loan settlement status online</strong>.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Banks often delay updating your settlement NOC status due to internal bureaucratic bottlenecks. The collection agency might fail to notify the core banking team, or the settlement may be stuck in an "internal audit."
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Without an official No Dues Certificate (NOC) and an updated status, you remain vulnerable. Your CIBIL continues to show an active default, recovery agents might call again claiming ignorance, and you cannot apply for new credit or close the mental chapter of this debt.
                </p>
              </div>
            </section>

            <section id="how-to-track" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Track Your Status Online
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Wondering <strong>how to track loan settlement</strong> progress? Do not rely solely on the verbal assurances of a recovery agent or a branch employee. You need to verify it officially.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Net Banking Portal</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Log into your official net banking account. Check the 'Loans' or 'Cards' section. A successfully settled loan should eventually be marked as "Closed," "Settled," or removed from active accounts entirely.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Official Bank Email</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Check your registered email inbox for automated confirmations. Real settlement updates are always sent from the bank's official domain (e.g., @hdfcbank.com), never from Gmail or Yahoo addresses.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Customer Service Portals</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Use the bank's official CRM tracking system. If you logged a request or complaint regarding the settlement, track the ticket ID through their dedicated grievance portal.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">CIBIL Report Verification</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The ultimate proof of your <strong>settlement NOC status</strong> is your credit report. Download a fresh CIBIL report 45 days after payment to ensure the account status reflects "Post Write-off Settled."
                  </p>
                </div>
              </div>
            </section>

            <section id="legal-rights" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Your Legal Rights for NOC & Updates
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                You are not at the mercy of the bank once you have fulfilled your end of the settlement agreement.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The Bank's Obligation</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  Under banking codes and consumer protection laws, banks are obligated to issue a No Dues Certificate promptly upon receiving the final settlement payment.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Timely Issuance:</strong> Generally, the NOC should be dispatched within 15 to 30 days of the final payment realization.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Data Reporting:</strong> The bank must legally report accurate, updated data to credit bureaus (CIBIL, Experian) in the next reporting cycle.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Cease Harassment:</strong> Any continuation of recovery calls after a settlement is completed constitutes illegal harassment and deficiency in service.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="steps-to-escalate" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Steps to Escalate Delay in Settlement Status
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If you <strong>check loan settlement status online</strong> and it remains un-updated after 30 days, or if the bank refuses to issue your NOC, take immediate action to force compliance.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Escalate to Nodal Officer</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Bypass regular customer care. Draft a strong email to the Principal Nodal Officer of the bank. Attach the signed settlement letter and proof of payment transaction (UTR number).
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Send a Legal Demand Notice</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If the Nodal Officer ignores you, hire a lawyer to send a formal legal demand notice. This notice compels the bank to update the status and warns of impending legal action for deficiency of service.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">File an RBI Ombudsman Complaint</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If 30 days pass after your complaint to the bank without a satisfactory resolution, escalate the matter to the RBI Ombudsman through the CMS portal. This usually forces the bank into immediate compliance.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="fake-updates" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Beware of Fake Status Updates
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Scams are rampant in the debt settlement space. Borrowers are sometimes tricked by recovery agents who want to collect cash without actually processing a settlement in the system.
              </p>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Red Flags to Watch For</h4>
                <p className="text-red-900 leading-relaxed">
                  Never accept a "status update" or "NOC" sent via WhatsApp as final proof. If an agent promises that your status is updated but it doesn't reflect on the bank's official app or your CIBIL after 45 days, you may have been scammed. Always demand a hard copy or PDF of the NOC from an official bank email domain. If the agent asks for payment to a personal account promising an instant status update, it is a fraud.
                </p>
              </div>
            </section>
            
            <section id="cibil-update" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The CIBIL Update Delay
              </h2>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  A common source of panic is when a borrower receives the NOC, but their CIBIL score doesn't change immediately. It is crucial to understand that credit bureaus do not update in real-time.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Banks send batch data to CIBIL and other bureaus typically once every 30 to 45 days. Therefore, even if your <strong>settlement NOC status</strong> is cleared by the bank today, it might take until the next reporting cycle for the "Settled" tag to reflect on your credit report. If it still doesn't update after 60 days, you need to raise a dispute directly on the CIBIL website using your NOC as proof.
                </p>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Client Success Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      VS
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Vikas S.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "Bank kept saying 'system update pending' for 4 months. One legal notice from SettleLoans and my settlement status was updated online in 48 hours."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Loan: ₹4.5 Lakhs</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Status: NOC Received</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      MT
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Meera T.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "I paid the settlement amount but didn't receive the NOC. SettleLoans helped me track the status and force them to issue the hard copy."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Loan: ₹2.2 Lakhs</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Status: Updated on CIBIL</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {jsonLd["@graph"].find(item => item["@type"] === "FAQPage")?.mainEntity?.map((faq: any, index: number) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">{faq.name}</h4>
                    <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <h3 className="text-3xl font-black mb-6 relative z-10">Stop Waiting for Your NOC</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Is your bank intentionally delaying your NOC or failing to update your CIBIL? Our legal team can force them to close the account officially.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Get Legal Help Now
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The legal information provided is for educational purposes and should not be construed as formal legal advice. Always consult with a practicing advocate regarding specific facts of your case.
              </p>
            </div>

          </article>

          {/* Right Column: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">NOC Delayed?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  Banks cannot hold your settlement NOC indefinitely. Learn how to issue a legal notice to compel them.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] w-full py-3 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors relative z-10">
                  Talk to a Lawyer
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Legal Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/rbi-guidelines-on-loan-recovery-agents" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI Recovery Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement-letter-format-noc-format" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Standard NOC Format
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Improve CIBIL Score
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
