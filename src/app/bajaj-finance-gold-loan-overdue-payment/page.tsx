import type { Metadata } from 'next';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Bajaj Finance Gold Loan Overdue Payment Rules: Stop Auction',
  description: 'Overdue on your Bajaj Gold Loan? The clock is ticking before your pledged gold is auctioned. Learn your rights to stop the auction and understand NBFC gold auction rules.',
  alternates: {
    canonical: 'https://settleloans.in/bajaj-finance-gold-loan-overdue-payment',
  },
};

export default function BajajFinanceGoldLoanOverduePaymentPage() {
  const tocItems = [
    { title: 'The Reality of Gold Loan Defaults', id: 'reality-of-defaults' },
    { title: 'NBFC Gold Auction Rules', id: 'nbfc-auction-rules' },
    { title: 'Overdue Interest and Penalties', id: 'overdue-interest' },
    { title: 'Legal Rights of Borrowers', id: 'legal-rights-of-borrowers' },
    { title: 'Impact on Your CIBIL Score', id: 'impact-on-credit-score' },
    { title: 'Alternatives to Auction', id: 'alternatives-to-auction' },
    { title: 'How to Stop the Auction Process', id: 'stop-the-auction' },
    { title: 'Client Success Stories', id: 'client-success-stories' },
    { title: 'Frequently Asked Questions', id: 'faq' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Bajaj Finance Gold Loan Overdue Payment Rules",
                "description": "Overdue on your Bajaj Gold Loan? The clock is ticking before your pledged gold is auctioned. Learn your rights to stop the auction.",
                "url": "https://settleloans.in/bajaj-finance-gold-loan-overdue-payment"
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
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
                    "name": "Bajaj Finance Gold Loan Overdue Payment Rules",
                    "item": "https://settleloans.in/bajaj-finance-gold-loan-overdue-payment"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Bajaj Finance Gold Loan Overdue Payment Rules",
                "description": "Learn what happens when you default on a Bajaj Finance gold loan, NBFC auction rules, and how to protect your pledged gold.",
                "author": {
                  "@type": "Organization",
                  "name": "SettleLoan"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "SettleLoan",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://settleloans.in/logo.png"
                  }
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://settleloans.in/bajaj-finance-gold-loan-overdue-payment"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is the penalty for overdue gold loan interest with Bajaj Finance?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Bajaj Finance typically charges a penal interest on the overdue amount. The exact rate varies based on your loan agreement, but it's important to pay it quickly to avoid compounding charges."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How soon after default does an NBFC auction the pledged gold?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Typically, NBFCs wait 60 to 90 days after default. However, you will receive multiple notices before the actual auction process begins."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I stop a gold loan auction once a notice is issued?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. You can stop the auction by paying the overdue interest and any penal charges before the auction date specified in the notice."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are the RBI rules for gold loan auctions by NBFCs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "RBI mandates that NBFCs must give adequate notice to the borrower, conduct the auction transparently, and refund any surplus amount generated from the auction after settling the dues."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Will a gold loan default affect my CIBIL score?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, defaulting on a gold loan can negatively impact your credit score, just like any other loan default. It is recorded by credit bureaus."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What happens if the auctioned gold sells for less than my loan amount?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "If there is a shortfall, you may still be legally liable to pay the remaining balance. Bajaj Finance can pursue legal options to recover the deficit."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I get the extra money if the gold is auctioned for more than my dues?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. As per RBI guidelines, if the auction proceeds exceed your total outstanding (principal + interest + charges), the excess amount must be refunded to you."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does Bajaj Finance notify customers about gold loan default?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "They typically send notifications via SMS, email, and registered post. They will also make calls before issuing a formal legal auction notice."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I request more time to pay my overdue gold loan?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can reach out to the customer service or branch manager to explain your financial hardship. They may offer a brief extension, but it is entirely at the lender's discretion."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is part payment allowed to avoid gold auction?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, paying the overdue interest and penalties (making the account regular) can often pause the auction process even if you don't close the entire loan."
                    }
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Bajaj Finance Gold Loan Overdue Consultation",
                "description": "Expert advice on managing Bajaj Finance gold loan defaults, stopping auctions, and negotiating overdue settlements.",
                "brand": {
                  "@type": "Brand",
                  "name": "SettleLoan"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "bestRating": "5",
                  "worstRating": "1",
                  "ratingCount": "184"
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
                      "name": "Ramesh P."
                    },
                    "reviewBody": "They helped me understand the notices I was getting for my gold loan default. I managed to pay the interest and save my family's gold."
                  },
                  {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4"
                    },
                    "author": {
                      "@type": "Person",
                      "name": "Sneha K."
                    },
                    "reviewBody": "Clear and precise information on NBFC auction rules. Very helpful during a stressful time."
                  },
                  {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5"
                    },
                    "author": {
                      "@type": "Person",
                      "name": "Vikram S."
                    },
                    "reviewBody": "I thought I lost my pledged gold, but learning about my rights gave me the time to arrange funds."
                  },
                  {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5"
                    },
                    "author": {
                      "@type": "Person",
                      "name": "Anjali T."
                    },
                    "reviewBody": "The consultation clarified exactly what overdue interest meant and how to stop the auction legally."
                  }
                ]
              }
            ])
          }}
        />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Gold Loan Solutions
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Bajaj Finance Gold Loan <span className="text-[#1F5EFF]">Overdue Payment</span> Rules
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Overdue on your Bajaj Gold Loan? The clock is ticking before your pledged gold is auctioned. Learn your rights to stop the auction.
            </p>
            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg"
            >
              Get Help Saving Your Gold
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
              <span className="font-bold text-[#2E2E2E]">Bajaj Finance Gold Loan Overdue</span>
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
            
            <section id="reality-of-defaults" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Reality of Gold Loan Defaults
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  When facing financial hardship, missing a payment on your Bajaj Finance gold loan can happen. However, because gold loans are secured loans backed by a physical asset with high liquidity, the consequences of a <strong className="font-semibold text-black">gold loan default Bajaj Finance</strong> escalate rapidly. Your pledged gold ornaments are at risk of being auctioned if timely action is not taken.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Understanding the exact rules, notices, and timelines is your strongest defense. You have rights as a borrower, and the auction process is strictly regulated by the RBI. Knowing how these rules work can help you buy time or stop the auction entirely.
                </p>
              </div>
            </section>

            <section id="nbfc-auction-rules" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Understanding NBFC Gold Auction Rules
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The Reserve Bank of India (RBI) has laid down specific <strong className="font-semibold text-black">gold auction rules NBFC</strong> institutions must follow. They cannot simply sell your gold the day after you miss a payment.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Notice Requirements</h3>
                  <p className="text-gray-700">Lenders must provide adequate prior notice before auctioning the pledged gold. Typically, a 14-day formal notice is given after earlier reminders.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Transparency in Auction</h3>
                  <p className="text-gray-700">The auction must be conducted transparently, and the borrower must be informed of the date, time, and venue.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Fair Value Realization</h3>
                  <p className="text-gray-700">The gold cannot be sold at a throwaway price. The auction must attempt to fetch the fair market value of the gold.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Refunding the Surplus</h3>
                  <p className="text-gray-700">If the gold is auctioned for a price higher than the outstanding loan amount and penalties, the excess money must be refunded to the borrower.</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Crucial Fact About NBFC Auctions</h4>
                <p className="text-lg leading-relaxed mb-4 text-blue-900">
                  An auction notice is a legal warning, not the end of the road. It means the lender has initiated the final recovery step, but it is not irreversible. You still have the opportunity to intervene before the auction actually happens.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-blue-900">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span>You can pause the auction by clearing overdue interest.</span>
                  </li>
                  <li className="flex items-start gap-3 text-blue-900">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span>Auction dates can sometimes be postponed through formal request.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="overdue-interest" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Overdue Interest and Penalties
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                When you miss your payment date, standard interest is no longer the only charge applied. You will be hit with <strong className="font-semibold text-black">overdue gold loan interest</strong> and penal charges.
              </p>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-4">The Danger of Compounding Penalties</h4>
                <p className="text-lg leading-relaxed mb-0 text-red-900">
                  Penal interest on gold loans can be exceptionally high, sometimes up to 3-5% extra per month on the overdue amount. If ignored, these penalties compound quickly, eating into the equity of your pledged gold and increasing the likelihood of a shortfall during an auction.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                It's essential to review your loan agreement to understand the exact penal interest rate applied by Bajaj Finance. Clearing the interest component alone can sometimes regularize the account, even if you cannot repay the principal amount immediately.
              </p>
            </section>

            <section id="legal-rights-of-borrowers" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Legal Rights of Borrowers Before Auction
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Many borrowers assume that once they miss a few payments, the NBFC has total control over their gold and can do whatever they please. This is a misconception. The <strong className="font-semibold text-black">Reserve Bank of India (RBI)</strong> has established a strict regulatory framework that gives you specific legal rights as a borrower. Understanding these rights is your best defense against arbitrary actions by lenders.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-black text-[#2E2E2E] mb-4">The Right to Adequate Notice</h4>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Bajaj Finance or any other NBFC cannot seize and sell your gold without giving you proper prior notice. The law mandates that the lender must issue a formal communication clearly stating the default amount, the penal interest applied, and a final deadline before which the dues must be cleared. If this notice is not served appropriately, the auction process can be deemed legally invalid.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-0">
                  Furthermore, the auction must be advertised in at least two newspapers (one in a vernacular language and one in a national daily) to ensure transparency and fetch a fair market price.
                </p>
              </div>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Your Right to Redeem</h4>
                <p className="text-lg leading-relaxed mb-4 text-blue-900">
                  Until the hammer falls at the auction, you generally retain the right to "redeem" your pledged gold. This means if you arrange the funds at the eleventh hour, you can still stop the sale.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-blue-900">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span>You can clear the total outstanding amount (principal + interest + penal charges).</span>
                  </li>
                  <li className="flex items-start gap-3 text-blue-900">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span>In some cases, paying just the overdue component and regularizing the account is sufficient to pause proceedings.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="impact-on-credit-score" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Impact of Gold Loan Default on Your CIBIL Score
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                A common myth surrounding gold loans is that because they are backed by an asset, a default won't affect your credit rating. This is entirely false. Like any other credit facility, your repayment behavior on a gold loan is actively reported to credit bureaus like CIBIL, Experian, and Equifax.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Missed EMI Reporting</h3>
                  <p className="text-gray-700">The moment your payment becomes 30 days overdue, it is reported as a missed payment, causing an immediate drop in your CIBIL score.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">NPA Classification</h3>
                  <p className="text-gray-700">If dues remain unpaid for 90 days, the account is classified as a Non-Performing Asset (NPA), severely damaging your creditworthiness.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Auction Record</h3>
                  <p className="text-gray-700">If the gold is auctioned off, the account will be marked as "Settled" or "Written-off" depending on the deficit, making future borrowing extremely difficult.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Long-Term Impact</h3>
                  <p className="text-gray-700">These derogatory marks remain on your credit report for up to 7 years, impacting your ability to secure home loans, car loans, or credit cards in the future.</p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-4">Warning: Shortfall Recovery</h4>
                <p className="text-lg leading-relaxed mb-0 text-red-900">
                  If the auction value of your gold is lower than your outstanding loan amount (which can happen due to fluctuating gold prices or accumulated penal interest), you are still legally obligated to pay the difference. If you fail to pay this shortfall, the lender can initiate separate legal proceedings against you for recovery, further tarnishing your financial record.
                </p>
              </div>
            </section>

            <section id="alternatives-to-auction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Alternatives to Losing Your Gold
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Before resigning yourself to the reality of a gold auction, it is crucial to explore viable alternatives. Your pledged gold often holds immense emotional and traditional value, far beyond its market price.
              </p>

              <div className="space-y-12 mb-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">A</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Gold Loan Balance Transfer</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">If your current lender's penal interest rates are suffocating, you might qualify for a balance transfer to another bank or NBFC offering better terms. The new lender pays off Bajaj Finance, releases your gold, and pledges it with themselves. However, this is highly time-sensitive and must be initiated well before the final auction date.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">B</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Unsecured Personal Loans</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">If your credit score is still intact, taking a small unsecured personal loan from friends, family, or a digital lender can help you quickly clear the overdue interest and pause the auction. It buys you the necessary breathing room to restructure your finances without losing a physical asset.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">C</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Negotiating a Settlement</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">In extreme hardship cases, if the loan amount far exceeds the gold's value, you might negotiate a one-time settlement on the penal interest. While NBFCs rarely discount the principal on a secured loan, they may waive off a portion of the compounded penalties if you can provide a lump-sum payment immediately.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="stop-the-auction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Stop the Auction Process
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If you have received an auction notice, act immediately. Time is critical. Here are the steps you can take to stop or delay the auction of your pledged assets.
              </p>

              <div className="space-y-12 mb-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Pay the Overdue Interest</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">The fastest way to stop an auction is to pay the pending interest and penal charges. Lenders prefer regularized accounts over auctions.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Negotiate for Time</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">Visit the branch and speak with the manager. Explain your situation and request a short extension in writing. While not guaranteed, they may offer a grace period if they believe you have a genuine intent to pay.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Part-Payment</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">If you cannot clear the entire overdue amount, make a significant part-payment to show good faith. This often causes the lender to halt auction proceedings temporarily.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-black text-[#2E2E2E] mb-4">A Note on Loan Takeovers</h4>
                <p className="text-lg leading-relaxed text-gray-700 mb-0">
                  If your gold value is much higher than your loan amount, you can consider a balance transfer to another lender. However, this is difficult to execute once the auction process has formally begun, so it requires fast action.
                </p>
              </div>
            </section>

            <section id="client-success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Client Success Stories
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                See how we've helped others navigate gold loan defaults and protect their valuable assets.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RP
                    </div>
                    <div>
                      <div className="font-bold text-[#2E2E2E]">Ramesh P.</div>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"They helped me understand the notices I was getting for my gold loan default. I managed to pay the interest and save my family's gold just days before the auction."</p>
                  <div className="flex gap-2 text-sm font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Loan: ₹3.5L</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Gold Saved</span>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      SK
                    </div>
                    <div>
                      <div className="font-bold text-[#2E2E2E]">Sneha K.</div>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"Clear and precise information on NBFC auction rules. Very helpful during a stressful time when I thought I had no options left."</p>
                  <div className="flex gap-2 text-sm font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Loan: ₹1.2L</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Auction Stopped</span>
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
                  { q: "What is the penalty for overdue gold loan interest with Bajaj Finance?", a: "Bajaj Finance typically charges a penal interest on the overdue amount. The exact rate varies based on your loan agreement, but it's important to pay it quickly to avoid compounding charges." },
                  { q: "How soon after default does an NBFC auction the pledged gold?", a: "Typically, NBFCs wait 60 to 90 days after default. However, you will receive multiple notices before the actual auction process begins." },
                  { q: "Can I stop a gold loan auction once a notice is issued?", a: "Yes. You can stop the auction by paying the overdue interest and any penal charges before the auction date specified in the notice." },
                  { q: "What are the RBI rules for gold loan auctions by NBFCs?", a: "RBI mandates that NBFCs must give adequate notice to the borrower, conduct the auction transparently, and refund any surplus amount generated from the auction after settling the dues." },
                  { q: "Will a gold loan default affect my CIBIL score?", a: "Yes, defaulting on a gold loan can negatively impact your credit score, just like any other loan default. It is recorded by credit bureaus." },
                  { q: "What happens if the auctioned gold sells for less than my loan amount?", a: "If there is a shortfall, you may still be legally liable to pay the remaining balance. Bajaj Finance can pursue legal options to recover the deficit." },
                  { q: "Do I get the extra money if the gold is auctioned for more than my dues?", a: "Yes. As per RBI guidelines, if the auction proceeds exceed your total outstanding (principal + interest + charges), the excess amount must be refunded to you." },
                  { q: "How does Bajaj Finance notify customers about gold loan default?", a: "They typically send notifications via SMS, email, and registered post. They will also make calls before issuing a formal legal auction notice." },
                  { q: "Can I request more time to pay my overdue gold loan?", a: "You can reach out to the customer service or branch manager to explain your financial hardship. They may offer a brief extension, but it is entirely at the lender's discretion." },
                  { q: "Is part payment allowed to avoid gold auction?", a: "Yes, paying the overdue interest and penalties (making the account regular) can often pause the auction process even if you don't close the entire loan." }
                ].map((faq, index) => (
                  <details key={index} name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                    <summary className="font-bold text-lg text-[#2E2E2E] list-none relative pr-8">
                      {faq.q}
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1F5EFF] transition-transform duration-300 group-open:rotate-45">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </span>
                    </summary>
                    <div className="mt-4 text-gray-700 leading-relaxed pl-2 border-l-2 border-[#1F5EFF]/20">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-6">Stop the Auction Before It's Too Late</h3>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  Don't lose your family gold. Talk to our experts today to understand your legal rights and explore ways to halt the Bajaj Finance auction process immediately.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#1F5EFF]/30"
                >
                  Get Urgent Help Now
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided is for educational purposes only. Loan settlement and auction processes depend on specific terms and conditions of your lender. Please consult a professional advisor for your specific situation.
              </p>
            </div>

          </article>

          {/* Right (Sidebar) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4">Urgent Gold Loan Issue?</h3>
                  <p className="text-gray-300 text-sm mb-6">
                    Received an auction notice? Don't panic. Learn how to legally stop the process.
                  </p>
                  <Link 
                    href="/contact"
                    className="block w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl transition-colors text-sm"
                  >
                    Speak to an Expert
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Related Resources
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/personal-loan-settlement" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Personal Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/credit-card-settlement" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Credit Card Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/harassment-by-recovery-agents" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Stop Recovery Agent Harassment
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-overdue-nach-signature-mismatch-server-issue" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      NACH Mismatch Issues
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
