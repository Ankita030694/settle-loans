import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "How to Check Loan Status Using PAN Card | Fraud Check",
  description: "Are there fake loans running on your PAN card without your knowledge? Learn how to instantly check every active loan tied to your name.",
  alternates: {
    canonical: "https://settleloans.in/how-to-check-loan-status-using-pan-card",
  },
};

export default function CheckLoanStatusPANPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/how-to-check-loan-status-using-pan-card#webpage",
        "url": "https://settleloans.in/how-to-check-loan-status-using-pan-card",
        "name": "How to Check Loan Status Using PAN Card",
        "description": "Are there fake loans running on your PAN card without your knowledge? Learn how to instantly check every active loan tied to your name.",
        "breadcrumb": { "@id": "https://settleloans.in/how-to-check-loan-status-using-pan-card#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/how-to-check-loan-status-using-pan-card#breadcrumb",
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
            "name": "Check Loan Status PAN Card",
            "item": "https://settleloans.in/how-to-check-loan-status-using-pan-card"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/how-to-check-loan-status-using-pan-card#article",
        "headline": "How to Check Loan Status Using PAN Card",
        "description": "A comprehensive guide on how to find all loans on your PAN card and check for active loan frauds using your PAN number.",
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
        "datePublished": "2024-08-15",
        "dateModified": "2024-08-15",
        "mainEntityOfPage": { "@id": "https://settleloans.in/how-to-check-loan-status-using-pan-card#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/how-to-check-loan-status-using-pan-card#product",
        "name": "PAN Card Fraud Resolution Service",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Legal resolution and guidance for removing fraudulent and fake loans from your PAN card.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul M." },
            "datePublished": "2024-01-10",
            "reviewBody": "Someone took a ₹2 Lakh personal loan using my PAN card. SettleLoans' legal team helped me file an FIR and got the loan completely wiped from my CIBIL.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Simran P." },
            "datePublished": "2024-02-05",
            "reviewBody": "Found 3 fake loan apps attached to my PAN number causing my credit score to crash. SettleLoans handled all the legal notices. Extremely helpful.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikas S." },
            "datePublished": "2024-03-22",
            "reviewBody": "I had no idea how to check active loans on my PAN number until I found this guide. Ended up finding a fake phone loan and they helped me remove it.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya D." },
            "datePublished": "2024-04-12",
            "reviewBody": "My bank denied my home loan because of a fake two-wheeler loan on my PAN card. The legal intervention cleared the fraud in 45 days.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
             "@type": "Review",
             "author": { "@type": "Person", "name": "Amit K." },
             "datePublished": "2024-05-18",
             "reviewBody": "Excellent service. The legal notices sent to the digital lending platforms forced them to rectify my credit report immediately.",
             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/how-to-check-loan-status-using-pan-card#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How can I check active loans on my PAN card for free?",
            "acceptedAnswer": { "@type": "Answer", "text": "You can check active loans on your PAN card for free by downloading your credit report from official bureaus like CIBIL, Experian, Equifax, or CRIF High Mark. Everyone is entitled to one free detailed report per year." }
          },
          {
            "@type": "Question",
            "name": "Can someone take a loan using only my PAN card number?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, unfortunately, some unregulated digital loan apps disburse small loans based solely on a stolen PAN card number and forged KYC documents without proper physical verification." }
          },
          {
            "@type": "Question",
            "name": "What should I do if I find a fake loan on my PAN card?",
            "acceptedAnswer": { "@type": "Answer", "text": "Immediately file a dispute with the credit bureau, contact the lender's nodal officer to report identity theft, and file a cybercrime complaint or FIR at your local police station." }
          },
          {
            "@type": "Question",
            "name": "Will a fake loan on my PAN affect my CIBIL score?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, if the fraudsters default on the fake loan, it will reflect as a default on your PAN card, severely crashing your CIBIL score and blocking you from getting legitimate loans." }
          },
          {
            "@type": "Question",
            "name": "How long does it take to remove a fraudulent loan from a PAN card?",
            "acceptedAnswer": { "@type": "Answer", "text": "Once you submit an FIR and raise a dispute, it typically takes 30 to 45 days for the credit bureau and the lender to investigate and wipe the fraudulent entry from your PAN record." }
          },
          {
            "@type": "Question",
            "name": "Can I lock my PAN card to prevent future loan frauds?",
            "acceptedAnswer": { "@type": "Answer", "text": "There is no direct 'lock' for a PAN card, but you can lock your biometric data on the Aadhaar portal, which often stops fraudsters from completing e-KYC for new loans in your name." }
          },
          {
            "@type": "Question",
            "name": "Am I legally liable to pay the EMIs for a fake loan on my PAN?",
            "acceptedAnswer": { "@type": "Answer", "text": "No, you are not legally liable to pay for a loan you did not authorize. However, the burden of proving that it is a case of identity theft falls on you through official police complaints." }
          },
          {
            "@type": "Question",
            "name": "How often should I do a PAN card loan fraud check?",
            "acceptedAnswer": { "@type": "Answer", "text": "It is highly recommended to check your credit report using your PAN card at least once every 3 to 6 months to detect any unauthorized inquiries or fake loans early." }
          },
          {
            "@type": "Question",
            "name": "Is checking my own loan status using PAN going to lower my score?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. When you check your own credit report to find loans on your PAN card, it is considered a 'soft inquiry' and does not impact your credit score at all." }
          },
          {
            "@type": "Question",
            "name": "What if the lender refuses to remove the fake loan from my PAN?",
            "acceptedAnswer": { "@type": "Answer", "text": "If the lender ignores your identity theft claim for over 30 days, you should file a formal complaint with the RBI Ombudsman against the bank or NBFC along with your police FIR copy." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "the-threat-of-pan-loan-fraud", title: "The Threat of PAN Card Loan Fraud" },
    { id: "role-of-credit-bureaus", title: "Role of Credit Bureaus" },
    { id: "common-fraud-tricks", title: "Common Tricks Used by Fraudsters" },
    { id: "how-to-check-active-loans", title: "How to Check Active Loans" },
    { id: "identifying-fake-loans", title: "Identifying Fake Loans" },
    { id: "legal-rights-of-victim", title: "Legal Rights of the Victim" },
    { id: "what-to-do-if-you-find-fraud", title: "What to Do If You Find Fraud" },
    { id: "preventive-measures", title: "Preventive Measures" },
    { id: "success-stories", title: "Success Stories" },
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
              Identity Theft Protection
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              How to Check Loan Status Using <span className="text-[#1F5EFF]">PAN Card</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Are there fake loans running on your PAN card without your knowledge? Learn how to instantly check every active loan tied to your name.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Report Fraudulent Loans Now
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
                <li className="font-bold text-[#2E2E2E]">Check Loan Status PAN Card</li>
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

            <section id="the-threat-of-pan-loan-fraud" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Threat of PAN Card Loan Fraud
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  With the rise of instant digital lending apps and paperless KYC, identity theft has skyrocketed in India. Fraudsters only need your PAN card number and some basic forged details to take out small loans in your name.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Often, victims are completely unaware of these fraudulent activities until they apply for a legitimate home or car loan and get instantly rejected due to a ruined CIBIL score. Or worse, abusive recovery agents start calling them for loans they never took.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  It is more critical than ever to proactively <strong>find all loans on your PAN card</strong> and conduct a thorough <strong>PAN card loan fraud check</strong> to safeguard your financial identity.
                </p>
              </div>
            </section>

            <section id="role-of-credit-bureaus" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Role of Credit Bureaus in Tracking PAN Data
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                In India, your Permanent Account Number (PAN) acts as the primary financial identifier across all banking institutions. Whenever a bank or Non-Banking Financial Company (NBFC) issues a loan, they are legally required to report it to the four major credit bureaus recognized by the Reserve Bank of India: TransUnion CIBIL, Experian, Equifax, and CRIF High Mark.
              </p>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>Data Centralization:</strong> Because all financial institutions report back to these centralized databases using your PAN, the credit report generated by these bureaus serves as an absolute master list of your active financial liabilities. If a loan is running on your name, it will undoubtedly appear here.
                </p>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Understanding this ecosystem is crucial. Fraudsters don't actually hack the credit bureaus; instead, they exploit vulnerabilities in the digital lending process. They convince an NBFC to issue a loan against your PAN, and the NBFC dutifully reports it to the bureau, unknowingly creating a legitimate-looking but fraudulent record on your profile.
              </p>
            </section>

            <section id="common-fraud-tricks" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Common Tricks Used by Fraudsters
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                How do criminals manage to secure a loan just by having your PAN number? Over the past few years, the methods have evolved into highly sophisticated synthetic identity operations. By understanding these tactics, you can better protect yourself during a PAN card loan fraud check.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Synthetic Identity Fraud</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Criminals combine real information (your PAN card number) with fake information (a burner phone number and a forged address). The automated system checks the PAN, sees a good CIBIL score, and approves the loan, sending the money to the fraudster.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Unregulated Payday Apps</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The dark web is flooded with unregulated, instant loan apps that perform zero physical KYC. These apps disburse small amounts (₹5,000 to ₹15,000) merely by uploading a manipulated photo of a PAN card, completely bypassing OTP verification.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Data Breaches</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Have you ever submitted a photocopy of your PAN card to a local real estate agent, a hotel desk, or a mobile sim retailer? These physical copies are frequently stolen, scanned, and sold in bulk to criminal syndicates.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Phishing Scams</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Fraudsters send fake SMS messages or emails pretending to be from the Income Tax Department or your bank, asking you to "update your PAN details." Clicking the link hands over complete control of your financial identity.
                  </p>
                </div>
              </div>
            </section>

            <section id="how-to-check-active-loans" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Check Active Loans Using PAN Number
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The only foolproof way to <strong>check active loans via PAN number</strong> is by pulling a detailed credit report. Every single loan attached to your PAN is legally required to be reported to credit bureaus like CIBIL, Experian, or Equifax.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Visit an Official Credit Bureau</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Go to the official website of CIBIL or Experian. Alternatively, you can use trusted financial apps that offer free credit score checks using your PAN details.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Enter Your PAN and Details</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Input your name exactly as it appears on your PAN card, your PAN number, date of birth, and registered mobile number. Complete the OTP verification.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Download Your Detailed Report</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Do not just look at the score. Download the full PDF report and navigate to the "Account Information" or "Active Loans" section. This will show every loan tied to your PAN card.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl my-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>Important:</strong> Checking your own credit report is considered a 'soft inquiry' and will never lower your credit score, no matter how many times you check it.
                </p>
              </div>
            </section>

            <section id="identifying-fake-loans" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Identifying Fake Loans on Your Report
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Once you have your report open, you need to conduct a forensic review of the account section. Look for the following red flags that indicate identity theft.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Unknown NBFCs</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Fraudsters rarely use major banks. Look for strange NBFC names or obscure digital lending partners that you have never done business with.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Small Ticket Loans</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Fake loans are often small amounts ranging from ₹2,000 to ₹10,000. These are typical of instant payday loan apps that bypass strict KYC.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Unrecognized Enquiries</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Check the "Enquiries" section at the bottom. Multiple hard inquiries from lenders you didn't apply to means someone is actively shopping for loans using your PAN.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Mismatched Addresses</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Review the personal information section. If there are addresses or phone numbers listed that you do not recognize, it's a major sign of identity theft.
                  </p>
                </div>
              </div>
            </section>

            <section id="legal-rights-of-victim" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Legal Rights of the Victim
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If you discover an active loan on your PAN card that you never applied for, it is natural to feel overwhelmed. However, the Reserve Bank of India and Indian consumer laws provide robust protections for victims of identity theft. You are not at the mercy of the lender or the recovery agents.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Your Key Legal Protections</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  Under the RBI's Fair Practices Code and Digital Lending Guidelines, you have specific rights when dealing with fraudulent loans:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Zero Liability Principle:</strong> As a victim of identity theft, you hold zero financial liability for the principal, interest, or any late fees associated with the fraudulent loan. The lender must write it off.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Mandatory Bureau Correction:</strong> Once an FIR is submitted and the fraud is proven, the lender is legally obligated to instruct the credit bureaus to completely erase the loan entry from your report.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Protection Against Harassment:</strong> RBI rules strictly prohibit recovery agents from harassing you for a disputed loan. If a bank continues to send agents after you submit proof of fraud, they can be penalized heavily.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>The Right to Escalate:</strong> If the NBFC or bank fails to resolve your identity theft claim within 30 days, you have the absolute right to escalate the matter to the RBI Integrated Ombudsman.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="what-to-do-if-you-find-fraud" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                What to Do If You Find a Fake Loan
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If your PAN card loan fraud check reveals an unauthorized loan, do not panic, but act immediately. You are not liable to pay it, but the burden of proof is on you.
              </p>

              <div className="bg-white p-8 border border-[#DEDEDE] rounded-2xl shadow-sm mb-8">
                <h4 className="text-xl font-bold mb-4 text-[#2E2E2E] underline">Immediate Action Plan</h4>
                <ul className="text-sm space-y-3 font-medium list-none text-gray-700">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>1. File an FIR / Cyber Complaint:</strong> Go to the cybercrime portal or local police station. An FIR is critical to legally prove identity theft.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>2. Dispute with Bureau:</strong> Log into CIBIL/Experian and raise an official dispute against the fraudulent account number.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>3. Notify the Lender:</strong> Send a formal legal notice to the Grievance Nodal Officer of the NBFC listed, attaching your FIR and demanding the loan be wiped from your PAN.</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Warning: Do Not Ignore It</h4>
                <p className="text-red-900 leading-relaxed">
                  Ignoring a fake loan will lead to the fraudsters defaulting on it. This will crash your CIBIL score below 500, invite harassment from recovery agents to your phone, and completely block you from getting home, education, or business loans in the future.
                </p>
              </div>
            </section>
            
            <section id="preventive-measures" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Preventing Future PAN Card Misuse
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                While you cannot change your PAN number, you can take multiple proactive steps to minimize the risk of it being misused again. Because PAN is so widely used in India, safeguarding physical and digital copies of the document is extremely important.
              </p>
              
              <div className="space-y-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-2">1. Mask Your Copies</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Never share photocopies of your PAN card with unverified entities. If you must submit a copy for official purposes, clearly write the date and specific purpose across the photocopy (e.g., "Submitted to XYZ Bank for KYC only on 15/08"). This makes the physical copy extremely hard to reuse.
                  </p>
                </div>
                
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-2">2. Lock Biometrics via Aadhaar</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Fraudsters often use a stolen PAN card in combination with a compromised Aadhaar e-KYC process. By logging into the UIDAI portal and locking your Aadhaar biometrics, you add an impenetrable secondary layer of security against instant loan apps.
                  </p>
                </div>
                
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-2">3. Set Up Credit Alerts</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Subscribe to premium services offered by credit bureaus or trusted fintech apps that send you real-time SMS or email alerts whenever a new hard inquiry is made on your PAN card or when a new loan account is opened. Early detection is your strongest defense against undetected fraud.
                  </p>
                </div>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Fraud Resolution Success Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RM
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Rahul M.</h4>
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
                    "Someone took a ₹2 Lakh personal loan using my PAN card. SettleLoans' legal team helped me file an FIR and got the loan completely wiped from my CIBIL."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Fraud Amount: ₹2,00,000</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Status: Fraud Cleared</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      SP
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Simran P.</h4>
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
                    "Found 3 fake loan apps attached to my PAN number causing my credit score to crash. SettleLoans handled all the legal notices. Extremely helpful."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Fraud Amount: ₹15,000</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Status: Records Cleared</span>
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
              <h3 className="text-3xl font-black mb-6 relative z-10">Stop Fake Loans on Your PAN Today</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Are there fake loans running on your PAN card without your knowledge? Learn how to instantly check every active loan tied to your name. Let our legal team help you clear your credit report of fraudulent entries.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Get Legal Help to Remove Fraud
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The legal information provided is for educational purposes and should not be construed as formal legal advice. Always consult with a practicing advocate regarding specific facts of your identity theft or fraud case.
              </p>
            </div>

          </article>

          {/* Right Column: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">Found Fake Loans?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  Don't let fraudsters ruin your credit score. We help you take immediate legal action and wipe fraud entries.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] w-full py-3 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors relative z-10">
                  Consult a Lawyer
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Legal Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/how-to-improve-cibil-score" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Improve Your CIBIL Score
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-file-complaint-against-recovery-agents" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Stop Recovery Agents
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-is-credit-pulse-report" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Understand Credit Reports
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
