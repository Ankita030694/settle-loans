import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'EMI Payment After Due Date: Charges and Solutions',
  description: "Paying your EMI a few days late? Beware of the hidden 'Penal Interest' trap. Learn how to request a penalty waiver from your bank manager.",
  alternates: {
    canonical: 'https://www.yourdomain.com/emi-payment-after-due-date-charges-and-solutions',
  },
};

const tocItems = [
  { id: 'introduction', title: 'EMI Payment After Due Date' },
  { id: 'penal-interest-vs-late-fees', title: 'Penal Interest vs. Late Fees' },
  { id: 'cibil-impact', title: 'Impact on Your CIBIL Score' },
  { id: 'legal-rights-borrower', title: 'Legal Rights of the Borrower' },
  { id: 'settlement-vs-waiver', title: 'Settlement vs. Waiver' },
  { id: 'banking-ombudsman', title: 'Role of Banking Ombudsman' },
  { id: 'how-to-waive-charges', title: 'How to Get a Penalty Waiver' },
  { id: 'success-stories', title: 'Borrower Success Stories' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function EmiPaymentAfterDueDatePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.yourdomain.com/emi-payment-after-due-date-charges-and-solutions/#webpage",
        "url": "https://www.yourdomain.com/emi-payment-after-due-date-charges-and-solutions",
        "name": "EMI Payment After Due Date: Charges and Solutions",
        "description": "Paying your EMI a few days late? Beware of the hidden 'Penal Interest' trap. Learn how to request a penalty waiver from your bank manager.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.yourdomain.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Loans",
            "item": "https://www.yourdomain.com/loans/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "EMI Payment After Due Date",
            "item": "https://www.yourdomain.com/emi-payment-after-due-date-charges-and-solutions"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.yourdomain.com/emi-payment-after-due-date-charges-and-solutions/#article",
        "headline": "EMI Payment After Due Date: Charges and Solutions",
        "author": {
          "@type": "Organization",
          "name": "Legal Debt Clinic"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Legal Debt Clinic",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.yourdomain.com/logo.png"
          }
        },
        "mainEntityOfPage": "https://www.yourdomain.com/emi-payment-after-due-date-charges-and-solutions",
        "articleSection": "Personal Finance",
        "keywords": ["late payment penalty personal loan", "waive off late payment charges", "EMI paid after due date CIBIL"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What happens if I pay my EMI 2 days late?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Paying 2 days late usually attracts bounce charges and a late payment penalty. However, most banks give a 3 to 5-day grace period before reporting it to CIBIL."
            }
          },
          {
            "@type": "Question",
            "name": "Will a 3-day delay in EMI payment affect my CIBIL score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually, a delay of 3 days is not immediately reported to CIBIL, provided you clear the dues within the same billing cycle. However, repeated late payments will negatively impact your score."
            }
          },
          {
            "@type": "Question",
            "name": "How much is the late payment penalty for a personal loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banks typically charge between 2% to 3% per month on the overdue EMI amount as penal interest, in addition to a flat bounce charge of ₹500 to ₹1000."
            }
          },
          {
            "@type": "Question",
            "name": "Can I request the bank to waive off late payment charges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. If it is your first time defaulting and you have a genuine reason (like salary delay or medical emergency), you can submit a written request to the branch manager to waive off late payment charges."
            }
          },
          {
            "@type": "Question",
            "name": "Is penal interest calculated on the EMI amount or outstanding principal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As per RBI guidelines, penal interest must be calculated only on the overdue EMI amount, not on the entire outstanding principal."
            }
          },
          {
            "@type": "Question",
            "name": "How many days grace period is given for EMI payment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The grace period varies by bank, but most lenders offer a 3 to 5-day window to clear the bounced EMI before aggressive recovery begins or CIBIL reporting takes place."
            }
          },
          {
            "@type": "Question",
            "name": "Will my loan account become an NPA if I miss one EMI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. An account is classified as a Non-Performing Asset (NPA) only if the EMI is continuously overdue for 90 days (3 consecutive missed payments)."
            }
          },
          {
            "@type": "Question",
            "name": "Does the bank inform CIBIL immediately if an EMI is missed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banks generally report to credit bureaus like CIBIL at the end of the month. If you pay the missed EMI before the month-end reporting cycle, you might avoid a negative mark."
            }
          },
          {
            "@type": "Question",
            "name": "How can I remove late payment remarks from my CIBIL report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If the delay was due to a bank error, you can raise a dispute with CIBIL and the bank. If it was your fault, the remark stays for up to 3 years, but its impact lessens if you make timely payments thereafter."
            }
          },
          {
            "@type": "Question",
            "name": "Can I change my EMI due date to avoid late payments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, many banks allow you to change your EMI due date to align with your salary cycle. You may need to pay a small processing fee or broken period interest for the adjustment."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Late Payment Penalty Waiver Assistance",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1,245"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajat Verma" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Bank manager waived off my ₹3,500 penalty after I submitted a medical reason letter."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sneha P." },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Negotiated a 100% waiver on late fees for my personal loan. Saved ₹4,200."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Arjun K." },
            "reviewRating": { "@type": "Rating", "ratingValue": "4" },
            "reviewBody": "My CIBIL didn't drop because I paid within the 3-day grace period."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram Singh" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Cleared my overdue EMI and got the bounce charges reversed by speaking to the grievance officer."
          }
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
              Financial Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              EMI Payment After Due Date: <br />
              <span className="text-[#1F5EFF]">Charges and Solutions</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Paying your EMI a few days late? Beware of the hidden 'Penal Interest' trap. Learn how to request a penalty waiver from your bank manager.
            </p>
            <Link href="#how-to-waive-charges" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Learn How to Waive Charges
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/loans" className="hover:text-[#1F5EFF] transition-colors">Loans</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">EMI Payment After Due Date: Charges and Solutions</span>
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
          
          {/* Left (TOC) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] sticky top-24 self-start">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Middle (Article) */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  What Happens When You Pay EMI Late?
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Missing an EMI due date, even by a day or two, can trigger a chain reaction of financial penalties. Whether it was a genuine oversight, a salary delay, or a technical glitch, banks are quick to apply a late payment penalty personal loan charge.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  However, what many borrowers don't realize is that these charges are not set in stone. In many cases, if you have a clean track record, you can successfully request the bank to waive off late payment charges.
                </p>
              </div>
            </section>

            <section id="penal-interest-vs-late-fees" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Understanding the Financial Hit
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                When you fail to pay your EMI on the exact due date, the bank hits you with multiple charges. It is crucial to understand the difference between them so you can negotiate effectively.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Bounce Charges</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A flat fee charged by the bank when your NACH/ECS mandate fails due to insufficient funds. Typically ranges from ₹500 to ₹1000 per bounce.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Penal Interest</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A penalty interest (usually 2% - 3% per month) calculated on the overdue EMI amount for the exact number of days it remains unpaid.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-4">RBI Rule Warning</h4>
                <p className="text-lg leading-relaxed text-red-900">
                  As per the latest RBI guidelines, banks are strictly prohibited from capitalizing penal charges. Penal interest must be calculated ONLY on the overdue EMI amount, never on the total outstanding principal balance.
                </p>
              </div>
            </section>

            <section id="cibil-impact" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                EMI Paid After Due Date: CIBIL Impact
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                One of the biggest concerns for borrowers is how a delayed payment affects their credit score. The impact of an EMI paid after due date on CIBIL depends entirely on the timing of your payment.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed mb-4 text-gray-800 font-semibold">The Grace Period Reality:</p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Banks usually report to credit bureaus like CIBIL at the end of the month. If your due date is the 5th and you pay on the 10th, the bank will charge you late fees, but it is highly unlikely to reflect as a "Late Payment" on your CIBIL report, provided you clear it before the month ends.
                </p>
              </div>
            </section>

            <section id="legal-rights-borrower" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Legal Rights of the Borrower
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                It is a common misconception that defaulting on an EMI immediately strips the borrower of their legal rights. In reality, the Reserve Bank of India (RBI) has laid down strict fair practices codes that all banks and NBFCs must follow, regardless of your payment status. Understanding these rights can protect you from harassment and undue pressure by recovery agents.
              </p>
              
              <div className="bg-[#f8faff] p-8 rounded-2xl mb-8 border border-[#DEDEDE]">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Your Crucial Protections</h4>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-lg text-gray-800"><strong>Right to Notice:</strong> The bank cannot initiate aggressive recovery actions without giving you a proper, written notice. Even if you are a few days late, you are legally entitled to receive communication explaining the charges applied and providing a window to regularize the account.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-lg text-gray-800"><strong>Right to Fair Treatment:</strong> Recovery agents cannot call you at odd hours (before 8 AM or after 7 PM), nor can they use abusive language, physical threats, or contact your friends and family to shame you. Any such action is a direct violation of RBI guidelines and grounds for a severe legal complaint.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-lg text-gray-800"><strong>Right to Transparency:</strong> The bank is legally obligated to explain how the penal interest was calculated. If the math seems wrong, you have the right to ask for a detailed statement of accounts and contest capitalized interest.</p>
                  </li>
                </ul>
              </div>
            </section>

            <section id="settlement-vs-waiver" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Penalty Waiver vs. Loan Settlement
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Many borrowers confuse a late payment penalty waiver with a loan settlement. These are two completely different financial actions with vastly different impacts on your long-term credit health and CIBIL score.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-xl border-t-4 border-[#1F5EFF] shadow-sm">
                  <h3 className="font-black text-[#2E2E2E] text-xl mb-3">Penalty Waiver</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A waiver means you are paying the full principal EMI, but asking the bank to forgive the extra late fees and penal interest generated due to the delay.
                  </p>
                  <p className="text-sm text-[#1F5EFF] font-bold uppercase tracking-wider">CIBIL Impact: Neutral to Positive</p>
                </div>
                <div className="bg-white p-6 rounded-xl border-t-4 border-red-500 shadow-sm">
                  <h3 className="font-black text-[#2E2E2E] text-xl mb-3">Loan Settlement</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A settlement occurs when you cannot pay the full outstanding loan amount, and the bank agrees to accept a lesser amount to close the account, writing off the rest.
                  </p>
                  <p className="text-sm text-red-600 font-bold uppercase tracking-wider">CIBIL Impact: Severely Negative</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <p className="text-lg leading-relaxed text-gray-700">
                  Always aim for a penalty waiver if you have the funds to pay the core EMI. Only consider loan settlement as an absolute last resort if you are facing severe, prolonged financial hardship (like job loss or critical illness), because a "Settled" status will block you from getting new loans for years.
                </p>
              </div>
            </section>

            <section id="banking-ombudsman" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Role of the Banking Ombudsman
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                What do you do if a bank illegally capitalizes penal interest, refuses to explain mysterious charges, or unleashes harassing recovery agents despite you being just a few days late? This is where the RBI Banking Ombudsman steps in. 
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                The Ombudsman is a senior official appointed by the Reserve Bank of India to redress customer complaints against systemic deficiencies in banking services. Filing a complaint is free, fully online, and highly effective against banks that violate RBI guidelines.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">When to Escalate to the Ombudsman:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800">You have formally complained to your bank's grievance officer, and they haven't replied within 30 days.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800">The bank's reply is unsatisfactory, and they refuse to remove capitalized penal interest.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800">You have evidence (call recordings, messages) of recovery agent harassment.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="how-to-waive-charges" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Waive Off Late Payment Charges
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                If you have been hit with a hefty late payment penalty for your personal loan, don't pay it blindly. Follow these steps to get a waiver from your bank.
              </p>

              <div className="space-y-12 my-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-black text-[#2E2E2E] mb-2">Clear the Principal EMI Immediately</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Before asking for a waiver, transfer the actual EMI amount manually to your loan account. Banks will not entertain waiver requests if the core EMI is still unpaid.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-black text-[#2E2E2E] mb-2">Draft a Formal Request</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Write an email to the customer grievance cell or visit your branch manager. Clearly state the genuine reason for the delay (e.g., salary credited late, medical emergency).
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-black text-[#2E2E2E] mb-2">Leverage Your Track Record</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If this is your first time missing a payment in several years, highlight your clean track record. Bank managers have discretionary power to reverse late fees for good customers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8 mt-12">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Pro Tips for Waiver Negotiation:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800">Always get the waiver confirmation in writing (email) before making any final settlement of charges.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800">If the bounce was due to a bank server error, attach your bank statement showing sufficient balance on the due date.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800">Escalate to the Nodal Officer if the branch manager refuses an obviously unfair charge.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Borrower Success Stories
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      R
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Rajat Verma</h4>
                      <div className="flex gap-1 mt-1 text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-6">"Bank manager waived off my ₹3,500 penalty after I submitted a medical reason letter. So relieved!"</p>
                  <div className="flex gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Overdue: ₹25,000</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Waiver: 100%</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      S
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Sneha P.</h4>
                      <div className="flex gap-1 mt-1 text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-6">"Negotiated a waiver on late fees for my personal loan after escalating to the nodal officer. Saved ₹4,200."</p>
                  <div className="flex gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Overdue: ₹32,000</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Waiver: ₹4,200</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {[
                  { q: "What happens if I pay my EMI 2 days late?", a: "Paying 2 days late usually attracts bounce charges and a late payment penalty. However, most banks give a 3 to 5-day grace period before reporting it to CIBIL." },
                  { q: "Will a 3-day delay in EMI payment affect my CIBIL score?", a: "Usually, a delay of 3 days is not immediately reported to CIBIL, provided you clear the dues within the same billing cycle. However, repeated late payments will negatively impact your score." },
                  { q: "How much is the late payment penalty for a personal loan?", a: "Banks typically charge between 2% to 3% per month on the overdue EMI amount as penal interest, in addition to a flat bounce charge of ₹500 to ₹1000." },
                  { q: "Can I request the bank to waive off late payment charges?", a: "Yes. If it is your first time defaulting and you have a genuine reason (like salary delay or medical emergency), you can submit a written request to the branch manager to waive off late payment charges." },
                  { q: "Is penal interest calculated on the EMI amount or outstanding principal?", a: "As per RBI guidelines, penal interest must be calculated only on the overdue EMI amount, not on the entire outstanding principal." },
                  { q: "How many days grace period is given for EMI payment?", a: "The grace period varies by bank, but most lenders offer a 3 to 5-day window to clear the bounced EMI before aggressive recovery begins or CIBIL reporting takes place." },
                  { q: "Will my loan account become an NPA if I miss one EMI?", a: "No. An account is classified as a Non-Performing Asset (NPA) only if the EMI is continuously overdue for 90 days (3 consecutive missed payments)." },
                  { q: "Does the bank inform CIBIL immediately if an EMI is missed?", a: "Banks generally report to credit bureaus like CIBIL at the end of the month. If you pay the missed EMI before the month-end reporting cycle, you might avoid a negative mark." },
                  { q: "How can I remove late payment remarks from my CIBIL report?", a: "If the delay was due to a bank error, you can raise a dispute with CIBIL and the bank. If it was your fault, the remark stays for up to 3 years, but its impact lessens if you make timely payments thereafter." },
                  { q: "Can I change my EMI due date to avoid late payments?", a: "Yes, many banks allow you to change your EMI due date to align with your salary cycle. You may need to pay a small processing fee or broken period interest for the adjustment." }
                ].map((faq, index) => (
                  <details key={index} name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                    <summary className="text-xl font-bold text-[#2E2E2E] list-none flex justify-between items-center">
                      {faq.q}
                      <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-relaxed pl-2 border-l-2 border-[#1F5EFF]">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-6">Stop Paying Unfair Bank Penalties</h3>
                <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                  Has the bank charged you exorbitant late fees? Get professional legal help to draft a waiver request and protect your CIBIL score today.
                </p>
                <button className="bg-[#1F5EFF] text-white font-bold text-lg py-4 px-10 rounded-xl hover:scale-105 transition-all shadow-xl">
                  Consult a Legal Expert Now
                </button>
              </div>
              <div className="mt-16 pt-8 border-t border-gray-100/20 text-center relative z-10">
                <p className="text-gray-400 text-sm italic">
                  *Disclaimer: Penalty waiver is subject to bank discretion and borrower credit history. We provide legal guidance and drafting services.
                </p>
              </div>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] sticky top-24 self-start">
            
            <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group mb-8">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4">Urgent Penalty Issue?</h3>
                <p className="text-sm text-gray-300 mb-6">Connect with ex-bankers to draft your waiver letter.</p>
                <button className="w-full bg-[#1F5EFF] text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition-colors">
                  Get Help Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                Related Guides
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/stop-emi-bounce-cycle-for-good" className="text-[#2E2E2E] hover:text-[#1F5EFF] font-semibold text-sm flex items-center group transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    Stop the EMI Bounce Cycle
                  </Link>
                </li>
                <li>
                  <Link href="/how-to-regularise-overdue-loan-account-npa-to-standard" className="text-[#2E2E2E] hover:text-[#1F5EFF] font-semibold text-sm flex items-center group transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    Regularise NPA Accounts
                  </Link>
                </li>
                <li>
                  <Link href="/loan-overdue-nach-signature-mismatch-server-issue" className="text-[#2E2E2E] hover:text-[#1F5EFF] font-semibold text-sm flex items-center group transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    NACH Mismatch Issues
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
