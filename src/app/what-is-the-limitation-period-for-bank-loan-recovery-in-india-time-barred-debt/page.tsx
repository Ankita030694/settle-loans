import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Time-Barred Debts: What is the Limitation Period for Loan Recovery in India?",
  description: "Learn about the Limitation Act 1963 and the limitation period for personal loan recovery in India. Can a bank recover a 5-year-old loan? Find out here.",
  alternates: {
    canonical: 'https://www.settleloan.in/what-is-the-limitation-period-for-bank-loan-recovery-in-india-time-barred-debt',
  },
};

export default function TimeBarredDebtPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Time-Barred Debts: What is the Limitation Period for Loan Recovery in India?",
      "description": "A comprehensive guide on the Limitation Act of 1963 and time-barred debts for bank loans in India.",
      "url": "https://www.settleloan.in/what-is-the-limitation-period-for-bank-loan-recovery-in-india-time-barred-debt"
    },
    {
      "@context": "https://schema.org",
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
          "name": "What is the Limitation Period for Bank Loan Recovery in India?",
          "item": "https://www.settleloan.in/what-is-the-limitation-period-for-bank-loan-recovery-in-india-time-barred-debt"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Time-Barred Debts: What is the Limitation Period for Loan Recovery in India?",
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
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a time-barred debt in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In India, under the Limitation Act of 1963, a time-barred debt is a debt that is beyond the legal limitation period for recovery through the courts. For unsecured loans, this period is generally 3 years from the date of the last payment or written acknowledgment."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank recover a 5-year-old personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If there has been no payment and no written acknowledgment of the debt for over 3 years, the debt may become time-barred. This means the bank loses its legal right to file a civil suit for recovery, although they may still attempt to ask for the money."
          }
        },
        {
          "@type": "Question",
          "name": "Does a partial payment reset the limitation period?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, under Section 19 of the Limitation Act, a part payment made before the expiration of the limitation period resets the 3-year clock from the date of the payment."
          }
        },
        {
          "@type": "Question",
          "name": "What is the limitation period for personal loan recovery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The limitation period for recovering a personal loan is 3 years from the date of the cause of action (usually the date of default or last payment)."
          }
        },
        {
          "@type": "Question",
          "name": "Does an email acknowledging the debt reset the clock?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, a written acknowledgment of liability, including an email, signed (or authenticated) by the borrower before the limitation period expires, will start a fresh period of limitation of 3 years under Section 18 of the Limitation Act."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents harass me for a time-barred debt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. RBI guidelines strictly prohibit harassment and intimidation by recovery agents for any debt, let alone a time-barred one. You can file a complaint with the bank and the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank file an FIR for a time-barred debt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A simple default on a personal loan is a civil matter, not a criminal one. Unless there is proven fraud or cheating at the time of taking the loan, an FIR cannot be filed merely for non-payment, regardless of the limitation period."
          }
        },
        {
          "@type": "Question",
          "name": "Should I pay a token amount of ₹100 if the agent asks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Paying even a small amount like ₹100 resets the limitation period clock for another 3 years, reviving the bank's right to take legal action against you."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if I get a legal notice for a 5-year-old loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Do not ignore it, but do not acknowledge the debt without legal counsel. Have a lawyer draft a suitable reply citing that the debt is time-barred under the Limitation Act."
          }
        },
        {
          "@type": "Question",
          "name": "Does the limitation period apply to secured loans like home loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For secured loans backed by a mortgage of immovable property, the limitation period to enforce payment of money charged upon the property is typically 12 years under the Limitation Act."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Legal Consultation for Time-Barred Debt Defense",
      "description": "Expert legal assistance to stop harassment and defend against illegal recovery of time-barred loans in India.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Rahul S."
          },
          "reviewBody": "My personal loan was 4 years old, and agents were threatening a lawsuit. SettleLoan helped me prove it was a time-barred debt, and the harassment stopped completely!"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Neha K."
          },
          "reviewBody": "I almost paid ₹500 to a recovery agent just to get rid of them. Thank god I consulted with the legal team here first. They explained how that would have reset my 3-year clock."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.8"
          },
          "author": {
            "@type": "Person",
            "name": "Vikas M."
          },
          "reviewBody": "Excellent guidance on the Limitation Act. The advocates were extremely knowledgeable and handled the bank's fake legal notices flawlessly."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Priya D."
          },
          "reviewBody": "Highly recommend them if you have old debts. I was living in fear for years until they showed me my legal rights against time-barred recoveries."
        }
      ]
    }
  ];

  const tocItems = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'what-is-time-barred-debt', title: 'What is a Time-Barred Debt?' },
    { id: 'the-3-year-rule', title: 'The 3-Year Rule' },
    { id: 'limitation-act-1963', title: 'The Limitation Act of 1963' },
    { id: 'unsecured-vs-secured', title: 'Unsecured vs Secured Loans' },
    { id: 'can-bank-recover-5-year-old-loan', title: 'Can Banks Recover 5-Year-Old Loans?' },
    { id: 'fake-legal-notices', title: 'The Fake Legal Notices Trap' },
    { id: 'how-the-clock-resets', title: 'How Borrowers Reset the Clock' },
    { id: 'token-payments', title: '1. Making a Token Payment' },
    { id: 'written-acknowledgment', title: '2. Written Acknowledgment' },
    { id: 'success-stories', title: 'Success Stories' },
    { id: 'faqs', title: 'FAQs' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Legal Debt Defense
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              What is the <span className="text-[#1F5EFF]">Limitation Period</span> for Bank Loan Recovery in India?
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              A complete guide to Time-Barred Debts under the Limitation Act of 1963. Find out if your old, unpaid loan is legally unenforceable in court.
            </p>
            <Link href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Check if Your Debt is Time-Barred
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide px-4 md:px-8 lg:px-12 py-4">
          <div className="max-w-7xl mx-auto text-xs md:text-sm text-[#747474] flex items-center gap-2">
            <Link href="/" className="hover:text-[#1F5EFF]">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/blog" className="hover:text-[#1F5EFF]">Legal Guides</Link>
            <span className="text-gray-300">/</span>
            <span className="font-bold text-[#2E2E2E]">Limitation Period for Loan Recovery</span>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative max-w-[1600px]">
          
          {/* Left Sidebar (TOC) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Article */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Intro Section */}
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  Understanding Time-Barred Debt in India
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Are recovery agents calling you relentlessly for a personal loan or credit card bill from 4, 5, or even 10 years ago? They often threaten police action or civil lawsuits. However, what most borrowers don't know is that the law limits the timeframe banks have to sue you.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  In India, civil litigation for debt recovery is strictly governed by the <strong>Limitation Act, 1963</strong>. Once a specific period passes, your unrecovered debt transforms into a <strong>Time-Barred Debt</strong>—meaning the bank loses its legal right to drag you to court to recover the money.
                </p>
              </div>
            </section>

            {/* What is a Time Barred Debt */}
            <section id="what-is-time-barred-debt" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                What Does "Time-Barred Debt" Actually Mean?
              </h2>
              <div id="the-3-year-rule" className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8 scroll-mt-32">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">
                  The 3-Year Rule
                </h4>
                <p className="text-lg leading-relaxed mb-6 text-blue-900">
                  A time-barred debt is simply a loan or credit card outstanding that has crossed the statutory limitation period for legal recovery. For unsecured personal loans and credit cards, this period is <strong>3 years</strong>.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">The 3-year clock starts from the date of the last EMI payment or default.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">Once 3 years have passed with zero payments and zero acknowledgments, the debt is "time-barred".</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">A time-barred debt is NOT extinguished; you technically still owe it. However, the bank cannot file a civil suit in court to force you to pay it.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* The Limitation Act */}
            <section id="limitation-act-1963" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Limitation Act of 1963 & Bank Loans
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The Limitation Act exists to ensure that disputes are settled within a reasonable timeframe. The courts don't want to deal with stale claims where evidence and memories have faded. Here is how it applies to different types of loans:
              </p>

              <div id="unsecured-vs-secured" className="grid md:grid-cols-2 gap-6 my-8 scroll-mt-32">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Unsecured Loans</h3>
                  <p className="text-gray-700">Personal loans, credit card debts, and student loans have a strict limitation period of <strong>3 years</strong> from the date of default.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Secured Loans</h3>
                  <p className="text-gray-700">For home loans or loans against property (mortgages), the limitation period to enforce payment is typically <strong>12 years</strong>.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Promissory Notes</h3>
                  <p className="text-gray-700">If a loan is backed by a simple promissory note payable on demand, the period is <strong>3 years</strong> from the date of the note.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Cheque Bounce (138 NI Act)</h3>
                  <p className="text-gray-700">If you gave a security cheque that bounced, the bank has <strong>30 days</strong> to issue a legal notice, and then 15 days to file a criminal complaint.</p>
                </div>
              </div>
            </section>

            {/* Can a Bank Recover a 5 Year Old Loan */}
            <section id="can-bank-recover-5-year-old-loan" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Can a Bank Recover a 5-Year-Old Loan?
              </h2>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed mb-6 text-gray-800">
                  If you have not made a single payment and have not signed any document acknowledging the debt for over 5 years, the debt is heavily time-barred. 
                  The bank's legal options are practically zero. They cannot take you to a civil court and win a recovery decree against you.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                  However, "cannot file a civil suit" is not the same as "cannot ask for the money." Banks often sell these stale portfolios to third-party collection agencies (ARCs) for pennies on the rupee. These agents will use psychological tactics to trick you into paying.
                </p>
              </div>

              <div id="fake-legal-notices" className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8 scroll-mt-32">
                <h4 className="text-xl font-black text-red-700 mb-4">
                  ⚠️ The Trap: Sending Fake Legal Notices
                </h4>
                <p className="text-lg leading-relaxed text-red-900">
                  Agents often send WhatsApp messages containing fake "court notices" or "FIR warrants" for 5 to 10-year-old personal loans. This is completely illegal. An FIR cannot be filed for a simple loan default, and a court will throw out a civil suit for a time-barred debt immediately.
                </p>
              </div>
            </section>

            {/* How to Reset the Clock */}
            <section id="how-the-clock-resets" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How Borrowers Accidentally Reset the 3-Year Clock
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                The biggest mistake borrowers make is unknowingly resetting the limitation period. Under Sections 18 and 19 of the Limitation Act, the 3-year clock resets from zero if you do any of the following before the original 3 years expire (and sometimes even after, depending on the wording):
              </p>

              <div className="space-y-12">
                <div id="token-payments" className="flex gap-6 scroll-mt-32">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Making a Token Payment</h3>
                    <p className="text-lg text-gray-700">
                      Agents will beg you: <em>"Sir, just pay ₹500 today to show intent, and we will stop the calls."</em> If you pay even ₹1 on a 2.5-year-old default, the limitation period resets for another 3 years starting from the date of that ₹1 payment.
                    </p>
                  </div>
                </div>

                <div id="written-acknowledgment" className="flex gap-6 scroll-mt-32">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Written Acknowledgment</h3>
                    <p className="text-lg text-gray-700">
                      If you reply to the bank's email saying, <em>"I know I owe you ₹2 Lakhs, but I have no money right now. Please give me time,"</em> you have legally acknowledged the debt. The 3-year clock resets from the date of that email.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Signing a Restructuring Offer</h3>
                    <p className="text-lg text-gray-700">
                      If you sign a new settlement letter or restructuring agreement and fail to honor it, the terms of the new contract apply, and the limitation period resets.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Success Stories */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Success Stories: Stopping Harassment on Time-Barred Debts
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RS
                    </div>
                    <div className="flex text-yellow-400">
                      ★★★★★
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"A bank was harassing me for a 4.5-year-old personal loan. SettleLoan advocates sent a legal notice proving the debt was time-barred. The agents vanished overnight!"</p>
                  <div className="flex gap-2">
                    <span className="text-xs font-bold px-3 py-1 bg-red-100 text-red-700 rounded-full">Old Debt: ₹4.5L</span>
                    <span className="text-xs font-bold px-3 py-1 bg-green-100 text-green-700 rounded-full">Result: Harassment Stopped</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      NK
                    </div>
                    <div className="flex text-yellow-400">
                      ★★★★★
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"I was about to pay ₹500 to a recovery agent to buy some time. SettleLoan warned me that it would reset the 3-year clock. Their legal advice saved me from a massive trap."</p>
                  <div className="flex gap-2">
                    <span className="text-xs font-bold px-3 py-1 bg-red-100 text-red-700 rounded-full">Old Debt: ₹8L</span>
                    <span className="text-xs font-bold px-3 py-1 bg-green-100 text-green-700 rounded-full">Result: Clock Never Reset</span>
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
                {[
                  { q: "What is a time-barred debt in India?", a: "Under the Limitation Act of 1963, a time-barred debt is a debt that is beyond the legal limitation period for recovery through the courts. For unsecured loans, this period is generally 3 years from the date of the last payment or written acknowledgment." },
                  { q: "Can a bank recover a 5-year-old personal loan?", a: "If there has been no payment and no written acknowledgment of the debt for over 3 years, the debt becomes time-barred. The bank loses its legal right to file a civil suit for recovery." },
                  { q: "Does a partial payment reset the limitation period?", a: "Yes, under Section 19 of the Limitation Act, a part payment made before the expiration of the limitation period resets the 3-year clock from the date of the payment." },
                  { q: "What is the limitation period for personal loan recovery?", a: "The limitation period for recovering a personal loan is exactly 3 years from the date of the cause of action (usually the date of default)." },
                  { q: "Does an email acknowledging the debt reset the clock?", a: "Yes, a written acknowledgment of liability, including an email, resets the period of limitation of 3 years under Section 18 of the Limitation Act." },
                  { q: "Can recovery agents harass me for a time-barred debt?", a: "No. RBI guidelines strictly prohibit harassment and intimidation by recovery agents for any debt, including time-barred ones." },
                  { q: "Can a bank file an FIR for a time-barred debt?", a: "A default on a personal loan is a civil matter. An FIR cannot be filed merely for non-payment, regardless of the limitation period, unless active fraud is proven." },
                  { q: "Should I pay a token amount of ₹100 if the agent asks?", a: "No. Paying even a small amount like ₹100 resets the limitation period clock for another 3 years, reviving the bank's right to take legal action." },
                  { q: "What should I do if I get a legal notice for a 5-year-old loan?", a: "Do not ignore it, but do not acknowledge the debt without legal counsel. Have a lawyer draft a suitable reply citing that the debt is time-barred." },
                  { q: "Does the limitation period apply to secured loans like home loans?", a: "For secured loans backed by a mortgage of immovable property, the limitation period to enforce payment is 12 years under the Limitation Act." }
                ].map((faq, i) => (
                  <div key={i} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-[#2E2E2E] text-lg mb-2">{faq.q}</h4>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 relative z-10">Is a Bank Harassing You for an Old Loan?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                Is a bank harassing you for a loan that is over 3 years old? Contact our advocates to see if your debt is legally 'Time-Barred' and unenforceable in court.
              </p>
              <Link href="#contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-12 rounded-xl text-lg hover:scale-105 transition-transform shadow-xl relative z-10">
                Speak to a Legal Expert Now
              </Link>
              
              <div className="mt-16 pt-8 border-t border-gray-100/20 text-center relative z-10">
                <p className="text-gray-400 text-sm italic">
                  Disclaimer: This information is for educational purposes only and does not constitute formal legal advice. Please consult an advocate for advice specific to your situation.
                </p>
              </div>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-8">
              
              {/* Dark CTA Card */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <h4 className="text-2xl font-black mb-4 relative z-10">Stop the Harassment</h4>
                <p className="text-gray-300 mb-6 text-sm relative z-10">
                  Find out if your loan is time-barred and legally unenforceable.
                </p>
                <Link href="#contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors relative z-10">
                  Get Help Now
                </Link>
              </div>

              {/* White Resources Card */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Legal Resources
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/blog/rbi-guidelines-for-recovery-agents" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI Guidelines for Agents
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/what-is-loan-settlement" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      How Loan Settlement Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/fake-legal-notice-format" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Spotting Fake Legal Notices
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/138-ni-act-cheque-bounce" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Section 138 NI Act
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
