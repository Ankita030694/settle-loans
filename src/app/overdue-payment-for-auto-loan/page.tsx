import type { Metadata } from 'next';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Overdue Payment Consequences for Auto Loans | SettleLoan',
  description: 'Falling behind on your car loan payments? Understand the strict timeline before the bank sends recovery agents to seize your vehicle.',
  alternates: {
    canonical: 'https://www.example.com/overdue-payment-for-auto-loan',
  },
};

export default function Page() {
  const tocItems = [
    { title: 'The Reality of Auto Loan Overdue', id: 'introduction' },
    { title: 'Timeline of Car Loan Default Consequences', id: 'default-timeline' },
    { title: 'Dealing with Recovery Agents', id: 'recovery-process' },
    { title: 'Your Rights During Repossession', id: 'your-rights' },
    { title: 'How to Prevent Vehicle Seizure', id: 'prevention' },
    { title: 'Impact of Default on Credit Score', id: 'credit-impact' },
    { title: 'What Happens to the Guarantor?', id: 'guarantor-impact' },
    { title: 'Legal Actions Beyond Repossession', id: 'legal-actions' },
    { title: 'Success Stories', id: 'success-stories' },
    { title: 'Frequently Asked Questions', id: 'faqs' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Overdue Payment Consequences for Auto Loans",
              "description": "Falling behind on your car loan payments? Understand the strict timeline before the bank sends recovery agents to seize your vehicle.",
              "url": "https://www.example.com/overdue-payment-for-auto-loan"
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.example.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Auto Loans",
                  "item": "https://www.example.com/auto-loans"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Auto Loan Overdue Consequences",
                  "item": "https://www.example.com/overdue-payment-for-auto-loan"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Overdue Payment Consequences for Auto Loans",
              "description": "A comprehensive guide on the timeline, consequences, and recovery process of a vehicle loan late payment.",
              "author": {
                "@type": "Organization",
                "name": "SettleLoan"
              },
              "publisher": {
                "@type": "Organization",
                "name": "SettleLoan",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.example.com/logo.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.example.com/overdue-payment-for-auto-loan"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What happens if I miss my car loan payment by one day?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Missing a payment by one day will result in a late fee and penal interest. It generally won't be reported to CIBIL unless it crosses 30 days, but your bank will flag the account."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can recovery agents seize my car without notice?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, under the law, banks must send a formal written notice before attempting to repossess your vehicle."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the auto loan overdue recovery timeline?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Typically, late fees start immediately. Formal notices begin around 30-60 days. Pre-possession notices are sent around 60-90 days, and repossession happens after 90 days."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I hide my car to prevent repossession?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hiding your car violates the loan agreement and can lead to criminal charges of breach of trust or theft by the bank."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens if the auctioned car doesn't cover my loan balance?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You are still legally liable to pay the remaining deficit. The bank can pursue you for this balance through civil courts."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I get my car back after it has been repossessed?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, usually the bank gives a 7 to 15-day pre-sale notice period where you can pay the outstanding dues and repossession charges to get the car back."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do vehicle loan late payments ruin my credit score?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, every missed payment after 30 days severely damages your CIBIL score, making it hard to get loans in the future."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can the bank freeze my savings account for a car loan default?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If you have given a mandate or if the account is with the same bank, they can invoke the 'Right of Set-Off' and deduct money from your savings."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What should I do if agents use force to take my car?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Do not resist physically. Demand their ID and authorization letter. If they use force, call the police immediately, as forceful seizure is illegal."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is a one-time settlement possible for an auto loan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It's rare because the loan is secured by the car. However, if the car's value has severely depreciated, the bank might agree to a settlement to avoid auction costs."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Auto Loan Dispute & Restructuring Services",
              "description": "Expert consulting to help you manage auto loan overdue recovery and stop vehicle repossession.",
              "brand": {
                "@type": "Brand",
                "name": "SettleLoan"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "ratingCount": "184"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Rahul S." },
                  "datePublished": "2023-11-12",
                  "reviewBody": "I had a 3-month overdue car loan and recovery agents were threatening me. I used restructuring strategies and got my EMI reduced. Kept my car!",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Priya M." },
                  "datePublished": "2024-02-05",
                  "reviewBody": "My vehicle loan late payment led to a repossession notice. We negotiated a temporary moratorium due to my medical emergency and stopped the seizure.",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Amit K." },
                  "datePublished": "2024-05-22",
                  "reviewBody": "I couldn't afford my SUV anymore. I did a voluntary surrender and negotiated away all the crazy penal interest and parking charges.",
                  "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" }
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Neha D." },
                  "datePublished": "2024-07-10",
                  "reviewBody": "Agents tried to seize my car at 9 PM. I knew my rights, filed a formal complaint, and the bank backed off, offering a restructuring plan instead.",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                }
              ]
            }
          ])
        }}
      />

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
          
          {/* Hero Section */}
          <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
            <div className="max-w-5xl mx-auto text-center relative z-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                Auto Loan Default Guide
              </span>
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                The True Cost of <span className="text-[#1F5EFF]">Auto Loan Overdue</span>
              </h1>
              <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
                Falling behind on your car loan payments? Understand the strict timeline before the bank sends recovery agents to seize your vehicle.
              </p>
              <Link href="#prevention" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Stop Vehicle Seizure Now
              </Link>
            </div>
          </section>

          {/* Breadcrumbs */}
          <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
              <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
                <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
                <span className="text-gray-300">/</span>
                <Link href="/auto-loans" className="hover:text-[#1F5EFF] transition-colors">Auto Loans</Link>
                <span className="text-gray-300">/</span>
                <span className="font-bold text-[#2E2E2E]">Overdue Payment Consequences</span>
              </div>
            </div>
          </div>

          {/* 3-Column Layout */}
          <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
            
            {/* Left Sidebar (TOC) */}
            <aside className="hidden lg:block w-1/5 min-w-[240px] sticky top-24 h-fit">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Middle Column (Article) */}
            <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
              
              <section id="introduction" className="scroll-mt-32 mb-16">
                <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                  <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">The Reality of Auto Loan Overdue</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    When you take out a vehicle loan, the car serves as collateral. This means a <strong>vehicle loan late payment</strong> isn't just a hit to your credit score—it directly puts your asset at risk. If you are experiencing an auto loan overdue, the timeline for recovery is significantly shorter compared to unsecured personal loans.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Lenders don't wait months to act. The <strong>car loan default consequences</strong> escalate quickly, moving from gentle reminders to aggressive recovery tactics and, ultimately, vehicle repossession. Understanding this timeline is your first line of defense against losing your car.
                  </p>
                </div>
              </section>

              <section id="default-timeline" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Timeline of Car Loan Default Consequences</h2>
                <p className="text-lg leading-relaxed mb-6 text-[var(--color-text-body)]">
                  Unlike unsecured loans where banks take months to initiate legal action, an auto loan is secured. Here is the strict timeline of what happens when you miss payments:
                </p>
                
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">1-30 Days: The Warning Phase</h3>
                      <p className="text-lg text-[var(--color-text-body)] leading-relaxed">
                        Your first missed EMI triggers late fees and penal interest. The bank will start calling you and sending SMS reminders. At this stage, your CIBIL score takes its first hit, dropping by 50-80 points.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">31-60 Days: Auto Loan Overdue Recovery Begins</h3>
                      <p className="text-lg text-[var(--color-text-body)] leading-relaxed">
                        This is when the <strong>auto loan overdue recovery</strong> process intensifies. The bank may send field agents to your home or workplace. They will issue a formal legal notice demanding payment of the outstanding arrears.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">61-90 Days: Pre-Possession Notice</h3>
                      <p className="text-lg text-[var(--color-text-body)] leading-relaxed">
                        The bank classifies your loan as a Non-Performing Asset (NPA). You will receive a Section 13(2) notice under the SARFAESI Act (if applicable) or a standard pre-sale notice giving you 7 to 15 days to clear the dues before they seize the vehicle.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">90+ Days: Repossession and Auction</h3>
                      <p className="text-lg text-[var(--color-text-body)] leading-relaxed">
                        Recovery agents are authorized to seize your vehicle. Once repossessed, the bank will send a final pre-sale notice. If you still don't pay, the car is auctioned to recover the loan amount. If the auction amount is less than your outstanding balance, you still owe the difference.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="recovery-process" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Dealing with Recovery Agents</h2>
                
                <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    When facing a <strong>vehicle loan late payment</strong>, you will inevitably deal with recovery agents. However, the RBI has strict guidelines on how they must behave. They cannot use physical force, intimidation, or seize your vehicle without proper documentation.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Agents can only visit you between 7 AM and 7 PM. They must carry an authorization letter from the bank and a copy of the repossession order. If they violate these rules, you have the right to file a police complaint and raise the issue with the Banking Ombudsman.
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                  <h3 className="text-xl font-black text-red-700 mb-3">Important Warning</h3>
                  <p className="text-lg text-red-900 leading-relaxed">
                    Never surrender your car keys to anyone who cannot produce an official repossession order and an authorization letter from your bank. Unauthorized seizure is treated as theft under the law.
                  </p>
                </div>
              </section>

              <section id="your-rights" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Your Rights During Repossession</h2>
                <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                  <h4 className="text-xl font-black text-[#1F5EFF] mb-4">What the Bank Must Do Before Seizing Your Car</h4>
                  <p className="text-lg text-blue-900 leading-relaxed mb-4">
                    The repossession process cannot be arbitrary. You are legally entitled to:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'A formal written notice before the repossession takes place.',
                      'A detailed inventory of all items left inside the car at the time of seizure.',
                      'A post-repossession notice giving you a final chance to clear the dues.',
                      'A fair valuation of the car before it goes to auction.'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                        <span className="text-lg text-blue-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section id="prevention" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How to Prevent Vehicle Seizure</h2>
                <p className="text-lg leading-relaxed mb-6 text-[var(--color-text-body)]">
                  If you are unable to make payments, do not ignore the bank's calls. Proactive communication is the best way to handle <strong>car loan default consequences</strong>.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h3 className="font-black text-[#1F5EFF] text-lg mb-3">1. Ask for Restructuring</h3>
                    <p className="text-gray-700">Request the bank to increase your loan tenure. This will reduce your monthly EMI burden and make payments more manageable.</p>
                  </div>
                  
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h3 className="font-black text-[#1F5EFF] text-lg mb-3">2. EMI Moratorium</h3>
                    <p className="text-gray-700">If you are facing a temporary job loss or medical emergency, you can request a temporary EMI holiday or moratorium period.</p>
                  </div>

                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h3 className="font-black text-[#1F5EFF] text-lg mb-3">3. Voluntary Surrender</h3>
                    <p className="text-gray-700">If you cannot afford the car anymore, voluntarily surrendering it is better than forced repossession. You can often negotiate better terms for the outstanding balance.</p>
                  </div>

                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h3 className="font-black text-[#1F5EFF] text-lg mb-3">4. One-Time Settlement</h3>
                    <p className="text-gray-700">In some extreme cases, if the car's value is much lower than the loan, banks might agree to a settlement to close the account, though it severely impacts your CIBIL score.</p>
                  </div>
                </div>
              </section>

              <section id="credit-impact" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Impact of Default on Credit Score</h2>
                <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden mb-8">
                  <p className="text-lg leading-relaxed mb-6 text-[var(--color-text-body)]">
                    A <strong>vehicle loan late payment</strong> will have a devastating effect on your CIBIL score. Since auto loans are secured, a default signals to future lenders that you are a high-risk borrower even when collateral is involved.
                  </p>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                      <span><strong>30 Days Late:</strong> Your score drops by 50-80 points. Lenders view this as a temporary cash flow issue.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                      <span><strong>90 Days Late (NPA):</strong> Your account is marked as a Non-Performing Asset. The score plunges drastically, and borrowing becomes almost impossible.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                      <span><strong>Repossession Status:</strong> If the car is seized and auctioned, your credit report will show a "Settled" or "Written-off" status. This blackmark stays on your record for up to 7 years.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="guarantor-impact" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">What Happens to the Guarantor?</h2>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                  <h3 className="text-xl font-black text-red-700 mb-3">Guarantors Are Equally Liable</h3>
                  <p className="text-lg text-red-900 leading-relaxed mb-4">
                    If someone co-signed or stood as a guarantor for your auto loan, the <strong>car loan default consequences</strong> apply equally to them.
                  </p>
                  <p className="text-lg text-red-900 leading-relaxed">
                    The bank holds the legal right to pursue the guarantor for the outstanding amount. The guarantor's CIBIL score will also be negatively impacted, and recovery agents can visit their residence to demand payment.
                  </p>
                </div>
              </section>

              <section id="legal-actions" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Legal Actions Beyond Repossession</h2>
                <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Many borrowers assume that once the car is seized, the loan is closed. This is a dangerous misconception. If the auction value of the car is less than your outstanding loan balance, the bank will initiate legal proceedings to recover the deficit.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white p-6 rounded-xl border border-[#DEDEDE]">
                      <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Civil Suits</h3>
                      <p className="text-gray-700">The bank can file a civil suit for recovery under the Code of Civil Procedure (Order 37) to attach your other assets, such as a house or bank accounts.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-[#DEDEDE]">
                      <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Arbitration</h3>
                      <p className="text-gray-700">Most loan agreements contain an arbitration clause. The bank will appoint an arbitrator who will likely pass an award in favor of the bank, legally compelling you to pay.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="success-stories" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Success Stories</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { name: "Rahul S.", review: "I had a 3-month overdue car loan and recovery agents were threatening me. I used restructuring strategies and got my EMI reduced. Kept my car!", stars: 5, loan: "₹8,00,000", settled: "₹5,50,000" },
                    { name: "Priya M.", review: "My vehicle loan late payment led to a repossession notice. We negotiated a temporary moratorium due to my medical emergency and stopped the seizure.", stars: 5, loan: "₹12,00,000", settled: "Moratorium Granted" },
                    { name: "Amit K.", review: "I couldn't afford my SUV anymore. I did a voluntary surrender and negotiated away all the crazy penal interest and parking charges.", stars: 4, loan: "₹15,00,000", settled: "Clean Exit" },
                    { name: "Neha D.", review: "Agents tried to seize my car at 9 PM. I knew my rights, filed a formal complaint, and the bank backed off, offering a restructuring plan instead.", stars: 5, loan: "₹6,50,000", settled: "Restructured" }
                  ].map((story, i) => (
                    <div key={i} className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                          {story.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#2E2E2E]">{story.name}</h4>
                          <div className="flex gap-1 mt-1">
                            {[...Array(story.stars)].map((_, idx) => (
                              <svg key={idx} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 italic">"{story.review}"</p>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Loan: {story.loan}</span>
                        <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Outcome: {story.settled}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faqs" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    { q: "What happens if I miss my car loan payment by one day?", a: "Missing a payment by one day will result in a late fee and penal interest. It generally won't be reported to CIBIL unless it crosses 30 days, but your bank will flag the account." },
                    { q: "Can recovery agents seize my car without notice?", a: "No, under the law, banks must send a formal written notice before attempting to repossess your vehicle." },
                    { q: "What is the auto loan overdue recovery timeline?", a: "Typically, late fees start immediately. Formal notices begin around 30-60 days. Pre-possession notices are sent around 60-90 days, and repossession happens after 90 days." },
                    { q: "Can I hide my car to prevent repossession?", a: "Hiding your car violates the loan agreement and can lead to criminal charges of breach of trust or theft by the bank." },
                    { q: "What happens if the auctioned car doesn't cover my loan balance?", a: "You are still legally liable to pay the remaining deficit. The bank can pursue you for this balance through civil courts." },
                    { q: "Can I get my car back after it has been repossessed?", a: "Yes, usually the bank gives a 7 to 15-day pre-sale notice period where you can pay the outstanding dues and repossession charges to get the car back." },
                    { q: "Do vehicle loan late payments ruin my credit score?", a: "Yes, every missed payment after 30 days severely damages your CIBIL score, making it hard to get loans in the future." },
                    { q: "Can the bank freeze my savings account for a car loan default?", a: "If you have given a mandate or if the account is with the same bank, they can invoke the 'Right of Set-Off' and deduct money from your savings." },
                    { q: "What should I do if agents use force to take my car?", a: "Do not resist physically. Demand their ID and authorization letter. If they use force, call the police immediately, as forceful seizure is illegal." },
                    { q: "Is a one-time settlement possible for an auto loan?", a: "It's rare because the loan is secured by the car. However, if the car's value has severely depreciated, the bank might agree to a settlement to avoid auction costs." }
                  ].map((faq, i) => (
                    <details key={i} name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                      <summary className="font-bold text-lg text-[#2E2E2E] list-none relative pr-8">
                        {faq.q}
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-4 text-gray-600 leading-relaxed pt-4 border-t border-gray-100">
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
                  <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Stop Your Car from Being Seized</h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Falling behind on your car loan payments? Understand the strict timeline before the bank sends recovery agents to seize your vehicle. Talk to our legal experts today.
                  </p>
                  <Link href="/consultation" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform text-lg shadow-xl">
                    Get Expert Legal Help
                  </Link>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-gray-100 text-center">
                <p className="text-gray-400 text-sm italic">
                  Disclaimer: The information provided is for educational purposes only and does not constitute legal advice. Repossession timelines may vary based on your specific loan agreement and lender policies.
                </p>
              </div>

            </article>

            {/* Right Sidebar */}
            <aside className="hidden lg:block w-1/5 min-w-[240px] sticky top-24 h-fit space-y-8">
              
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-black mb-4">Stop Vehicle Seizure Now</h3>
                  <p className="text-sm text-gray-300 mb-6">Our experts can help negotiate your auto loan and prevent repossession.</p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-600 transition-colors">
                    Talk to an Expert
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">Related Resources</h3>
                <ul className="space-y-4">
                  {[
                    { text: 'Personal Loan Default', link: '/personal-loan-default' },
                    { text: 'Credit Card Settlement', link: '/credit-card-settlement' },
                    { text: 'Stop Recovery Agents', link: '/stop-recovery-agents' },
                    { text: 'Legal Rights of Defaulters', link: '/legal-rights-of-defaulters' }
                  ].map((item, i) => (
                    <li key={i}>
                      <Link href={item.link} className="flex items-center text-gray-600 hover:text-[#1F5EFF] group transition-colors text-sm font-medium">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </aside>

          </div>
        </main>
      </div>
    </>
  );
}
