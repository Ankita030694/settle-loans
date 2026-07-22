import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Can Banks Recover Loan Default from an FD or Bank Account Nominee?",
  description: "Learn the legal difference between a nominee and a legal heir. Find out if a bank can attach or freeze a nominee's FD or savings account for a deceased borrower's loan default under RBI rules.",
  alternates: {
    canonical: "https://settleloans.in/can-bank-recover-loan-default-amount-from-nominee-of-bank-account-or-fd",
  },
};

export default function NomineeLiabilityDefensePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/can-bank-recover-loan-default-amount-from-nominee-of-bank-account-or-fd#webpage",
        "url": "https://settleloans.in/can-bank-recover-loan-default-amount-from-nominee-of-bank-account-or-fd",
        "name": "Can Banks Recover Loan Default from an FD or Bank Account Nominee?",
        "description": "Explains the legal distinction between a nominee and a legal heir, clarifying that banks cannot arbitrarily seize funds from a nominee's personal accounts for a deceased borrower's debt.",
        "breadcrumb": { "@id": "https://settleloans.in/can-bank-recover-loan-default-amount-from-nominee-of-bank-account-or-fd#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/can-bank-recover-loan-default-amount-from-nominee-of-bank-account-or-fd#breadcrumb",
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
            "name": "Nominee Liability for Loan Default",
            "item": "https://settleloans.in/can-bank-recover-loan-default-amount-from-nominee-of-bank-account-or-fd"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/can-bank-recover-loan-default-amount-from-nominee-of-bank-account-or-fd#article",
        "headline": "Can Banks Recover Loan Dues from a Bank Account or FD Nominee?",
        "description": "Understand your legal rights as a nominee when a bank tries to freeze your account or attach an FD to recover a deceased relative's loan default.",
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
        "datePublished": "2024-03-25",
        "dateModified": "2024-03-25",
        "mainEntityOfPage": { "@id": "https://settleloans.in/can-bank-recover-loan-default-amount-from-nominee-of-bank-account-or-fd#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/can-bank-recover-loan-default-amount-from-nominee-of-bank-account-or-fd#product",
        "name": "Expert Banking Legal Services for Nominee Defense",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Protect your funds from illegal bank seizures when you are the nominee on a deceased relative's account.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "845",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Meera K." },
            "datePublished": "2023-11-14",
            "reviewBody": "The bank froze my personal account because I was the nominee for my late father's loan account. SettleLoans lawyers proved they had no right to do so. Got my money back!",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rohan J." },
            "datePublished": "2024-01-20",
            "reviewBody": "They tried to attach the FD where I was the nominee to settle an unsecured personal loan of my deceased uncle. The legal team stopped the illegal seizure immediately.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit V." },
            "datePublished": "2024-02-28",
            "reviewBody": "Outstanding knowledge of RBI rules on nominee vs legal heir. The bank had to release the funds and issue an apology.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sneha P." },
            "datePublished": "2024-03-15",
            "reviewBody": "I was harassed by recovery agents claiming as a nominee I have to pay my husband's debt. The legal notice sent by SettleLoans stopped them in their tracks.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/can-bank-recover-loan-default-amount-from-nominee-of-bank-account-or-fd#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can a bank freeze a nominee's account for a deceased borrower's loan?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. A bank cannot arbitrarily freeze the personal account of a nominee to recover a deceased borrower's unsecured loan without due legal process." }
          },
          {
            "@type": "Question",
            "name": "What is the legal difference between a nominee and a legal heir?",
            "acceptedAnswer": { "@type": "Answer", "text": "A nominee is merely a trustee or custodian of the funds until they are claimed by the rightful legal heirs. A legal heir inherits the estate and, proportionally, its liabilities." }
          },
          {
            "@type": "Question",
            "name": "Can a bank attach an FD if I am the nominee and the primary holder defaulted?",
            "acceptedAnswer": { "@type": "Answer", "text": "If the loan was not secured against that specific FD, the bank cannot automatically attach it just because the primary holder defaulted. They must follow proper legal recovery channels against the deceased's estate." }
          },
          {
            "@type": "Question",
            "name": "Does a nominee have to pay the deceased person's personal loan?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. Unsecured loans like personal loans or credit cards do not automatically transfer to the nominee. They must be settled from the deceased person's estate, if any exists." }
          },
          {
            "@type": "Question",
            "name": "What are the RBI rules on nominee vs legal heir?",
            "acceptedAnswer": { "@type": "Answer", "text": "RBI guidelines mandate that banks must hand over the balance in a deceased person's account to the registered nominee. The nominee then holds it in trust for the legal heirs." }
          },
          {
            "@type": "Question",
            "name": "Can the bank use the 'Right of Set-Off' on a nominee's funds?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. The banker's right of set-off only applies when the debtor and the account holder are the same entity in the same capacity. It cannot be used against a nominee's personal funds." }
          },
          {
            "@type": "Question",
            "name": "What should I do if a bank illegally seizes my funds as a nominee?",
            "acceptedAnswer": { "@type": "Answer", "text": "You should immediately send a legal notice to the bank citing RBI regulations and Supreme Court precedents. If unresolved, you can approach the Banking Ombudsman or civil courts." }
          },
          {
            "@type": "Question",
            "name": "If I am both the nominee and the legal heir, can the bank take the money?",
            "acceptedAnswer": { "@type": "Answer", "text": "If you are the legal heir, your liability is limited only up to the value of the estate you inherit. The bank can claim from the inherited estate, but cannot touch your previously existing personal assets." }
          },
          {
            "@type": "Question",
            "name": "Can recovery agents harass a nominee for loan repayment?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolutely not. Harassing a nominee for loan recovery is illegal and a violation of RBI's Fair Practices Code. You can file a police complaint for criminal intimidation." }
          },
          {
            "@type": "Question",
            "name": "Do I need a lawyer if the bank freezes my nominee account?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, it is highly recommended. Banks often rely on the ignorance of the nominee. An expert banking lawyer can force the bank to release the funds by asserting your legal rights." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "nominee-vs-legal-heir", title: "Nominee vs. Legal Heir" },
    { id: "can-bank-attach-nominee-fd", title: "Can Bank Attach Nominee FD?" },
    { id: "rbi-rules-nominee", title: "RBI Rules on Nominees" },
    { id: "right-of-set-off", title: "The Banker's Right of Set-Off" },
    { id: "unsecured-loans", title: "Fate of Unsecured Loans" },
    { id: "bank-freezing-nominee-account", title: "Bank Freezing Nominee Account" },
    { id: "strategic-defense", title: "How to Protect Your Funds" },
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
              Banking Legal Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Can the Bank Recover Dues from an <span className="text-[#1F5EFF]">Account Nominee?</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Learn the strict legal distinction between a "nominee" and a "legal heir". Stop banks from illegally freezing your personal accounts or FDs for a deceased relative's loan default.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Stop Illegal Bank Seizures
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li className="font-bold text-[#2E2E2E]">Nominee Liability for Loan Default</li>
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

          {/* Middle Column: Article */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

            <section id="nominee-vs-legal-heir" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Critical Difference: Nominee vs. Legal Heir
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-[#2E2E2E]">
                  When a borrower passes away leaving behind an unpaid loan, banks aggressively pursue recovery. Often, their first target is the registered nominee on the deceased’s bank accounts or Fixed Deposits (FDs). 
                </p>
                <p className="text-lg leading-relaxed mb-6 text-[#2E2E2E]">
                  However, the law makes a very strict, uncompromising distinction between a <strong>"Nominee"</strong> and a <strong>"Legal Heir"</strong>. A nominee is merely a trustee. Their only legal role is to receive the funds from the bank upon the account holder's death and hold them in trust for the rightful legal heirs. 
                </p>
                <p className="text-lg leading-relaxed mb-6 text-[#2E2E2E]">
                  A nominee does not automatically inherit the money, nor do they inherit the liabilities (loans) of the deceased. Because they do not own the money, the bank cannot arbitrarily seize these funds to satisfy the deceased borrower's unsecured debt without following due legal process regarding the deceased's estate.
                </p>
              </div>
            </section>

            <section id="can-bank-attach-nominee-fd" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Can Bank Attach Nominee FD for a Loan Default?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Banks frequently attempt to illegally attach or liquidate a Fixed Deposit where the deceased borrower was the primary holder and you were the nominee, claiming they are recovering loan dues. Here is the legal reality:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">FDs Pledged as Collateral</h4>
                  <p className="text-gray-700 leading-relaxed">
                    If the specific FD was officially pledged or marked with a lien as collateral for that specific loan (like an overdraft against FD), the bank has the first right to liquidate it to recover dues, regardless of who the nominee is.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Unpledged Independent FDs</h4>
                  <p className="text-gray-700 leading-relaxed">
                    If the FD was independent and not linked to the defaulted personal loan or credit card, the bank <strong>cannot automatically attach it</strong>. They must hand the funds over to the nominee, who holds it for the legal heirs. The bank must file a civil claim against the estate to recover the money.
                  </p>
                </div>
              </div>
            </section>

            <section id="rbi-rules-nominee" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                RBI Rules on Nominee vs Legal Heir
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The Reserve Bank of India (RBI) has issued clear Master Circulars to prevent banks from harassing nominees and heirs during traumatic times.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Key RBI Mandates for Banks</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  Banks are bound by strict protocols regarding deceased depositors' accounts:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Immediate Handover:</strong> Banks must make payment of the balance in the account to the survivor(s)/nominee without insisting on a succession certificate or probate, provided there is no court order halting it.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Discharge of Liability:</strong> Payment made to the nominee constitutes a valid discharge of the bank's liability. The bank’s role ends there.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>No Self-Adjudication:</strong> Banks cannot act as judges, deciding to siphon off the nominee's trust funds to cover another department's unsecured loan losses.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="right-of-set-off" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Banker's Right of Set-Off Explained
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Banks often justify seizing funds by quoting the <em>"Banker's Right of Set-Off"</em>. This is a common law right allowing a bank to combine two accounts of a customer—taking money from a credit balance to pay off a debit balance.
              </p>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Why Set-Off Fails Against Nominees</h4>
                <p className="text-red-900 leading-relaxed">
                  The Right of Set-Off requires <strong>Mutuality</strong>. This means the funds and the debt must belong to the exact same person, in the exact same capacity. Once a borrower dies, their capacity changes. A nominee holds funds in a fiduciary capacity (as a trustee). The bank cannot set off a deceased man's personal debt against funds held in trust by a nominee. Doing so is an illegal misappropriation of funds.
                </p>
              </div>
            </section>

            <section id="unsecured-loans" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                What Happens to Unsecured Loans After Death?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Personal loans, credit card debts, and app-based loans are generally unsecured. When the borrower dies, the liability does not magically jump to the nominee or even the legal heirs personally.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Claim Against the Estate</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The bank can only recover the outstanding amount from the "estate" (property, assets, bank balances) left behind by the deceased.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Limited Heir Liability</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If you are a legal heir, you are only liable to pay the bank up to the extent of the value of the assets you inherited from the deceased. If the deceased left no assets, you do not have to pay a single rupee from your own pocket.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Write-Offs and Insurance</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Many personal loans have built-in insurance cover that pays off the debt upon the borrower's death. If no insurance and no estate exists, the bank must write off the loan. They cannot harass the nominee.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="bank-freezing-nominee-account" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Bank Freezing Nominee Account for Dead Borrower
              </h2>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed mb-6 text-gray-800">
                  A highly aggressive, illegal tactic used by banks is to freeze the <em>personal savings account</em> of the nominee just because they share the same bank branch as the deceased borrower. This is entirely unlawful.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                  If the bank freezes your personal account—money you earned and deposited—to force you to pay for a deceased relative's loan, it constitutes severe deficiency in service, illegal restraint, and harassment. You can claim heavy compensation for this tortious act.
                </p>
              </div>
            </section>

            <section id="strategic-defense" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Protect Your Funds
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Do not succumb to emotional blackmail or illegal threats by recovery agents. Take immediate legal steps to protect your funds.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">1. Send a Strong Legal Notice</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Have an expert banking lawyer send a cease-and-desist notice citing RBI Master Circulars on Customer Service, proving the bank's actions are ultra vires (beyond their legal power).
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">2. Banking Ombudsman Complaint</h4>
                  <p className="text-gray-700 leading-relaxed">
                    If the bank branch refuses to unfreeze your account or release the FD funds to you as a nominee, file a grievance with the RBI Banking Ombudsman for deficiency of service.
                  </p>
                </div>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Success Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      MK
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Meera K.</h4>
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
                    "The bank froze my personal account because I was the nominee for my late father's loan account. SettleLoans lawyers proved they had no right to do so. Got my money back!"
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Loan Amount: ₹6,00,000</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Settled Amount: Account Unfrozen</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RJ
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Rohan J.</h4>
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
                    "They tried to attach the FD where I was the nominee to settle an unsecured personal loan of my deceased uncle. The legal team stopped the illegal seizure immediately."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Loan Amount: ₹9,50,000</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Settled Amount: FD Released</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {(jsonLd["@graph"][4] as any).mainEntity?.map((faq: any, index: number) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">{faq.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  Is the Bank Illegally Seizing Your Money?
                </h3>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Is the bank trying to illegally seize your money just because you were the nominee on a deceased relative's account? Protect your funds with our expert banking lawyers.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold text-lg px-10 py-4 rounded-xl hover:scale-105 transition-transform duration-300 shadow-xl">
                  Consult a Banking Lawyer Now
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational purposes only and does not constitute formal legal advice. Please consult with a qualified banking lawyer regarding your specific situation and nominee rights.
              </p>
            </div>

          </article>

          {/* Right Column: Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4">Stop Bank Harassment</h3>
                  <p className="text-gray-300 mb-6 text-sm">
                    Protect your hard-earned money from illegal bank seizures. Get expert legal intervention.
                  </p>
                  <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-600 transition-colors">
                    Get Legal Help
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Related Resources
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/legal-heir-liability-for-personal-loan-default" className="text-gray-700 hover:text-[#1F5EFF] flex items-center group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Legal Heir Loan Liability
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-deal-with-recovery-agent-harassment" className="text-gray-700 hover:text-[#1F5EFF] flex items-center group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Stop Recovery Agents
                    </Link>
                  </li>
                  <li>
                    <Link href="/rbi-guidelines-on-loan-recovery" className="text-gray-700 hover:text-[#1F5EFF] flex items-center group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI Recovery Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link href="/blank-security-cheque-bounce-vs-post-dated-cheque-pdc-bounce-section-138-defense" className="text-gray-700 hover:text-[#1F5EFF] flex items-center group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Security Cheque Defense
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
