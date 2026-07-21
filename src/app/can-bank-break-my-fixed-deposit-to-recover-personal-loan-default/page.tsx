import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';

export const metadata = {
  title: 'Banker\'s Right of Set-Off: Can a Bank Break Your Fixed Deposit to Recover a Loan?',
  description: 'Understand the Banker\'s Right of General Lien and Set-Off. Learn if a bank can break your FD or freeze your savings account for a loan default in India.',
  alternates: {
    canonical: 'https://www.settleloans.in/can-bank-break-my-fixed-deposit-to-recover-personal-loan-default',
  },
};

export default function BankersRightOfSetOffPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Banker's Right of Set-Off: Can a Bank Break Your Fixed Deposit to Recover a Loan?",
      "description": "Understand the Banker's Right of General Lien and Set-Off. Learn if a bank can break your FD or freeze your savings account for a loan default in India.",
      "url": "https://www.settleloans.in/can-bank-break-my-fixed-deposit-to-recover-personal-loan-default"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.settleloans.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Can Bank Break My FD to Recover Loan?",
          "item": "https://www.settleloans.in/can-bank-break-my-fixed-deposit-to-recover-personal-loan-default"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Banker's Right of Set-Off: Can a Bank Break Your Fixed Deposit to Recover a Loan?",
      "description": "An eye-opening guide explaining the Banker's Right of General Lien and Set-Off, and how banks can liquidate FDs or freeze savings to recover loan defaults.",
      "author": {
        "@type": "Organization",
        "name": "SettleLoans"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SettleLoans",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.settleloans.in/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/can-bank-break-my-fixed-deposit-to-recover-personal-loan-default"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Banker's Right of Set-Off in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Banker's Right of Set-Off is a legal right allowing a bank to combine two or more accounts of a customer to recover an outstanding debt, without requiring a court order."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank deduct loan EMI from a fixed deposit without permission?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if the Fixed Deposit and the defaulted loan are in the same bank and under the same name, the bank can liquidate the FD to recover the dues."
          }
        },
        {
          "@type": "Question",
          "name": "Is it legal for a bank to break my FD for a credit card default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, credit card debt is considered a legally recoverable debt. A bank can use its right of general lien to adjust your FD against your unpaid credit card bills."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank freeze my savings account from another bank?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The right of set-off only applies to accounts held within the same banking institution. They cannot touch accounts in a different bank without a court order."
          }
        },
        {
          "@type": "Question",
          "name": "Does the right of set-off apply to joint accounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally, no. A bank cannot offset a personal debt of one individual against a joint account held with another person, unless both are co-borrowers."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank touch my spouse's account for my loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The accounts must be held in the exact same legal capacity. Your spouse's individual account cannot be touched for your personal loan default."
          }
        },
        {
          "@type": "Question",
          "name": "How can I protect my savings account from loan recovery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The simplest way to protect your savings is to maintain your primary savings, salary account, and investments in a completely different bank than the one where you took the loan."
          }
        },
        {
          "@type": "Question",
          "name": "Is notice required before a bank exercises the right of set-off?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While banks usually have a clause in their Terms & Conditions covering this, RBI guidelines suggest banks should give a reasonable notice before exercising this right, though they often act swiftly if they fear the funds will be withdrawn."
          }
        },
        {
          "@type": "Question",
          "name": "Can they deduct from my salary account for a personal loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If your salary account and your defaulted personal loan are with the same bank, the bank can auto-debit the overdue amount from your salary account as soon as your salary is credited."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if my bank broke my FD illegally?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the bank exercised the right improperly (e.g., against a trust account or joint account), you can file a grievance with the bank and escalate it to the Banking Ombudsman or take legal action."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Asset Protection & Legal Advisory Services",
      "description": "Expert legal help to protect your savings and negotiate settlements for personal loan defaults.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "210"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Vikram Singh"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "My bank threatened to break my FD for a loan default. SettleLoans guided me on how to protect my assets legally and helped me settle the loan properly."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Anjali R."
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "I didn't know about the banker's right of set off in India until my salary account was frozen. The legal team immediately intervened and helped me restructure."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rohan M."
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4"
          },
          "reviewBody": "Excellent advice. They clarified whether a bank can deduct loan from fixed deposit and saved my hard-earned savings from being completely wiped out."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Kavita S."
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "Highly professional. If you want to protect savings account from loan recovery, talk to them before it's too late!"
        }
      ]
    }
  ];

  const tocItems = [
    { id: "understanding-set-off", title: "Understanding the Banker's Right of Set-Off" },
    { id: "can-they-break-fd", title: "Can a Bank Break Your FD?" },
    { id: "how-it-works", title: "How the Right Works on Different Accounts" },
    { id: "exceptions", title: "Exceptions to the Rule" },
    { id: "protect-savings", title: "How to Protect Your Savings" },
    { id: "success-stories", title: "Success Stories" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
          
          {/* Hero Section */}
          <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
            <div className="max-w-5xl mx-auto text-center relative z-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                Asset Protection Guide
              </span>
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                Banker's Right of Set-Off: <span className="text-[#1F5EFF]">Can a Bank Break Your Fixed Deposit</span> to Recover a Loan?
              </h1>
              <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
                An eye-opening guide explaining the "Banker’s Right of General Lien and Set-Off" and how to protect your savings from automatic loan recovery.
              </p>
              <Link href="#consult" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Protect Your Assets Now
              </Link>
            </div>
          </section>

          {/* Breadcrumbs */}
          <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
              <nav className="flex text-xs md:text-sm text-[#747474] space-x-2">
                <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
                <span className="text-gray-300">/</span>
                <Link href="/blog" className="hover:text-[#1F5EFF] transition-colors">Resources</Link>
                <span className="text-gray-300">/</span>
                <span className="font-bold text-[#2E2E2E]">Banker's Right of Set-Off</span>
              </nav>
            </div>
          </div>

          {/* 3-Column Layout */}
          <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative max-w-[1600px]">
            
            {/* Left Column (TOC) */}
            <aside className="hidden lg:block w-1/5 min-w-[240px]">
              <div className="sticky top-24">
                <TableOfContents items={tocItems} />
              </div>
            </aside>

            {/* Middle Column (Article) */}
            <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
              
              <section id="understanding-set-off" className="scroll-mt-32 mb-16">
                <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden mb-12">
                  <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                    What is the Banker's Right of Set-Off?
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-[#747474]">
                    If you have missed EMI payments on a personal loan or credit card, you might wake up to a shocking reality: the money in your savings account has suddenly vanished, or your Fixed Deposit has been prematurely closed. This is not a mistake. It is a legal mechanism known as the <strong className="text-[#2E2E2E]">Banker’s Right of General Lien and Set-Off</strong>.
                  </p>
                  <p className="text-lg leading-relaxed text-[#747474]">
                    The right of set-off allows a bank to automatically combine the balances of multiple accounts held by the same customer. Essentially, if you owe the bank money (a defaulted loan) and the bank owes you money (funds in your savings or FD), they have the legal authority to use your deposits to settle your debts—often without asking for your prior permission.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                  <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Crucial Conditions for Set-Off</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                      <span className="text-[#2E2E2E]"><strong className="font-bold">Same Capacity:</strong> Both the debt and the deposit must be in the exact same name and capacity.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                      <span className="text-[#2E2E2E]"><strong className="font-bold">Same Bank:</strong> The accounts must be held within branches of the same banking entity.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                      <span className="text-[#2E2E2E]"><strong className="font-bold">Debt Must Be Due:</strong> The loan must be formally in default and the amount must be definitely ascertainable.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="can-they-break-fd" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                  Can a Bank Break Your Fixed Deposit to Recover a Loan?
                </h2>
                
                <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                  <h4 className="text-xl font-black text-red-700 mb-4">The Harsh Reality</h4>
                  <p className="text-red-900 leading-relaxed mb-4">
                    Yes. If your <strong className="font-bold">bank broke FD for loan default</strong>, they are generally within their legal rights. A Fixed Deposit represents money the bank owes to you. If you default on an unsecured personal loan or a credit card with the same bank, they can invoke their right of set-off to liquidate the FD prematurely and adjust the proceeds against your outstanding loan.
                  </p>
                  <p className="text-red-900 leading-relaxed">
                    Most borrowers are completely unaware of this because they did not explicitly pledge the FD as collateral. However, under the general lien clause signed during account opening, the bank retains this overarching authority.
                  </p>
                </div>
              </section>

              <section id="how-it-works" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                  How the Right Works on Different Accounts
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-[#747474]">
                  Many borrowers wonder exactly which accounts are vulnerable when they start defaulting. Here is a breakdown of how the bank views your different assets.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Salary Accounts</h3>
                    <p className="text-[#747474] text-sm">Highly vulnerable. If you have a personal loan with the same bank where your salary is credited, they will often auto-deduct the EMI or the entire overdue amount the moment your salary drops.</p>
                  </div>
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Recurring Deposits (RDs)</h3>
                    <p className="text-[#747474] text-sm">Just like FDs, the accumulated balance in your RD can be prematurely closed and adjusted against a defaulted loan or a maxed-out credit card.</p>
                  </div>
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Different Banks</h3>
                    <p className="text-[#747474] text-sm">Safe from set-off. Bank A cannot exercise a right of set-off on a savings account you hold in Bank B without a formal court order or attachment order.</p>
                  </div>
                  <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                    <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Credit Card Debts</h3>
                    <p className="text-[#747474] text-sm">A credit card from a bank is treated as an unsecured loan. Defaulting on it gives the bank full rights to freeze your savings accounts held in the same bank.</p>
                  </div>
                </div>
              </section>

              <section id="exceptions" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                  Exceptions: When Can't They Touch Your Money?
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-[#747474]">
                  The banker's right of set-off is not absolute. There are specific legal scenarios where the bank is explicitly forbidden from touching your funds to recover a loan.
                </p>

                <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-4">1. Different Legal Capacities</h4>
                  <p className="text-[#747474] mb-4">If the loan is in your individual name, but you hold a savings account as a trustee for an NGO or as a guardian for a minor child, the bank cannot touch those funds. The "capacity" of the account holder is different.</p>
                  
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-4">2. Joint Accounts</h4>
                  <p className="text-[#747474] mb-4">If you took a loan individually, the bank cannot set off a joint account (e.g., held with your spouse) to recover it, unless the joint account mandate explicitly allows it or the spouse is a co-borrower/guarantor.</p>
                  
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-4">3. Specific Purpose Deposits</h4>
                  <p className="text-[#747474]">If you deposited money for a very specific, communicated purpose (like a draft for a medical bill), those funds are held in trust and are immune from general set-off.</p>
                </div>
              </section>

              <section id="protect-savings" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                  How to Protect Your Savings Account from Loan Recovery
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-[#747474]">
                  If you are facing financial hardship and anticipate defaulting on a loan, taking proactive steps is crucial to <strong className="text-[#2E2E2E]">protect savings account from loan recovery</strong> and ensure you have money for basic survival.
                </p>

                <div className="space-y-12 my-10">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Change Your Salary/Income Bank</h3>
                      <p className="text-[#747474]">The most effective strategy is to open a new savings account in a completely different bank where you have no loans or credit cards, and route your salary or business income there.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Shift Your Fixed Deposits</h3>
                      <p className="text-[#747474]">If you have matured FDs in the bank where you hold the defaulted loan, withdraw them or transfer them to another institution before the bank classifies your loan as an NPA (Non-Performing Asset) and freezes the assets.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Negotiate a Formal Settlement</h3>
                      <p className="text-[#747474]">Instead of playing hide-and-seek with your money, engage a legal expert to negotiate a formal loan settlement or restructuring plan with the bank to resolve the debt legally.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="success-stories" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                  Client Success Stories
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                        M
                      </div>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-[#747474] mb-6 italic">"My bank threatened to liquidate my ₹5 Lakh FD to cover a credit card default. SettleLoans helped me restructure the debt and prevented the bank from touching my emergency savings."</p>
                    <div className="flex gap-3 mt-auto">
                      <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Debt: ₹4.2 Lakhs</span>
                      <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">FD Protected</span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                        R
                      </div>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-[#747474] mb-6 italic">"The bank froze my salary account without notice for a personal loan default. SettleLoans advised me on my legal rights and successfully negotiated an unfreezing of the account and a fair settlement plan."</p>
                    <div className="flex gap-3 mt-auto">
                      <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Loan: ₹12 Lakhs</span>
                      <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Settled: ₹4.5 Lakhs</span>
                    </div>
                  </div>
                </div>
              </section>

              <section id="faqs" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {[
                    { q: "What is the Banker's Right of Set-Off in India?", a: "The Banker's Right of Set-Off is a legal right allowing a bank to combine two or more accounts of a customer to recover an outstanding debt, without requiring a court order." },
                    { q: "Can a bank deduct loan EMI from a fixed deposit without permission?", a: "Yes, if the Fixed Deposit and the defaulted loan are in the same bank and under the same name, the bank can liquidate the FD to recover the dues." },
                    { q: "Is it legal for a bank to break my FD for a credit card default?", a: "Yes, credit card debt is considered a legally recoverable debt. A bank can use its right of general lien to adjust your FD against your unpaid credit card bills." },
                    { q: "Can a bank freeze my savings account from another bank?", a: "No. The right of set-off only applies to accounts held within the same banking institution. They cannot touch accounts in a different bank without a court order." },
                    { q: "Does the right of set-off apply to joint accounts?", a: "Generally, no. A bank cannot offset a personal debt of one individual against a joint account held with another person, unless both are co-borrowers." },
                    { q: "Can a bank touch my spouse's account for my loan default?", a: "No. The accounts must be held in the exact same legal capacity. Your spouse's individual account cannot be touched for your personal loan default." },
                    { q: "How can I protect my savings account from loan recovery?", a: "The simplest way to protect your savings is to maintain your primary savings, salary account, and investments in a completely different bank than the one where you took the loan." },
                    { q: "Is notice required before a bank exercises the right of set-off?", a: "While banks usually have a clause in their Terms & Conditions covering this, RBI guidelines suggest banks should give a reasonable notice before exercising this right, though they often act swiftly if they fear the funds will be withdrawn." },
                    { q: "Can they deduct from my salary account for a personal loan default?", a: "Yes. If your salary account and your defaulted personal loan are with the same bank, the bank can auto-debit the overdue amount from your salary account as soon as your salary is credited." },
                    { q: "What should I do if my bank broke my FD illegally?", a: "If the bank exercised the right improperly (e.g., against a trust account or joint account), you can file a grievance with the bank and escalate it to the Banking Ombudsman or take legal action." }
                  ].map((faq, i) => (
                    <div key={i} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">{faq.q}</h3>
                      <p className="text-[#747474]">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Lead Gen Hook */}
              <div id="consult" className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <h3 className="text-3xl md:text-4xl font-black mb-6 relative z-10">Protect Your Assets Today</h3>
                <p className="text-xl mb-8 relative z-10 opacity-90 max-w-2xl mx-auto">
                  Are you afraid your bank will freeze your savings or break your FD to recover a loan? Talk to our legal experts about protecting your assets immediately.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-transform text-lg shadow-xl relative z-10">
                  Talk to a Legal Expert
                </Link>
                
                <div className="mt-16 pt-8 border-t border-gray-100 text-center relative z-10">
                  <p className="text-gray-400 text-sm italic">
                    Disclaimer: This article is for informational purposes only and does not constitute formal legal advice. Always consult with a registered advocate for your specific case.
                  </p>
                </div>
              </div>
              
            </article>

            {/* Right Column (Sidebar) */}
            <aside className="hidden lg:block w-1/5 min-w-[240px]">
              <div className="sticky top-24 space-y-8">
                
                {/* Card 1 (Dark CTA) */}
                <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                  <h3 className="text-2xl font-black mb-4 relative z-10">Account Frozen?</h3>
                  <p className="text-sm opacity-80 mb-6 relative z-10">If your bank has already exercised their right of set-off, our advocates can help you negotiate a settlement.</p>
                  <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors relative z-10">
                    Get Legal Help
                  </Link>
                </div>

                {/* Card 2 (White Resources) */}
                <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                  <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">Related Legal Guides</h4>
                  <ul className="space-y-4">
                    {[
                      { text: "RBI Guidelines on Loan Recovery", link: "/rbi-guidelines-for-loan-recovery" },
                      { text: "What to Do If EMI is Missed", link: "/what-happens-if-loan-emi-not-paid" },
                      { text: "Can Police Arrest for Loan?", link: "/can-i-go-to-jail-for-loan-default-in-india" },
                      { text: "How to Stop Harassment", link: "/how-to-stop-loan-recovery-harassment" }
                    ].map((item, i) => (
                      <li key={i}>
                        <Link href={item.link} className="flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors group text-sm font-medium">
                          <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
            </aside>
            
          </div>
        </main>
      </div>
    </>
  );
}
