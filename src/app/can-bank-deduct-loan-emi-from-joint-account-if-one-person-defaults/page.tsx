import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { TableOfContents } from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Can the Bank Deduct Loan EMI from a Joint Account if Only One Person Defaulted?",
  description: "A legal analysis of the Banker's Right of Set-Off in India. Learn if banks can legally deduct EMI from a joint account without permission or freeze a spouse's account for a personal loan default.",
  alternates: {
    canonical: "https://settleloans.in/can-bank-deduct-loan-emi-from-joint-account-if-one-person-defaults",
  },
};

export default function JointAccountEmiDeductionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/can-bank-deduct-loan-emi-from-joint-account-if-one-person-defaults#webpage",
        "url": "https://settleloans.in/can-bank-deduct-loan-emi-from-joint-account-if-one-person-defaults",
        "name": "Can the Bank Deduct Loan EMI from a Joint Account if Only One Person Defaulted?",
        "description": "Understand the Banker’s Right of General Lien and Set-Off. Learn when a bank can legally auto debit from a joint account for a personal loan default.",
        "breadcrumb": { "@id": "https://settleloans.in/can-bank-deduct-loan-emi-from-joint-account-if-one-person-defaults#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/can-bank-deduct-loan-emi-from-joint-account-if-one-person-defaults#breadcrumb",
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
            "name": "Bank Deducting EMI From Joint Account",
            "item": "https://settleloans.in/can-bank-deduct-loan-emi-from-joint-account-if-one-person-defaults"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/can-bank-deduct-loan-emi-from-joint-account-if-one-person-defaults#article",
        "headline": "Can the Bank Deduct Loan EMI from a Joint Account if Only One Person Defaulted?",
        "description": "A comprehensive guide on right of set-off rules in India and dealing with unauthorized bank deductions from joint accounts.",
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
        "datePublished": "2026-07-22",
        "dateModified": "2026-07-22",
        "mainEntityOfPage": { "@id": "https://settleloans.in/can-bank-deduct-loan-emi-from-joint-account-if-one-person-defaults#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/can-bank-deduct-loan-emi-from-joint-account-if-one-person-defaults#product",
        "name": "Unauthorized Deduction Legal Defense Services",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Legal consultation and defense services for unauthorized bank deductions and freezing of joint accounts due to spouse or partner defaults.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1205",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul M." },
            "datePublished": "2026-05-12",
            "reviewBody": "My bank deducted EMI from our joint account without permission for my personal loan. SettleLoans' lawyers helped us file a complaint with the ombudsman, and my wife's share of the money was refunded.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anita S." },
            "datePublished": "2026-06-03",
            "reviewBody": "My spouse's account was frozen for my loan default. It was a nightmare until we consulted SettleLoans. They proved the right of set-off was applied illegally since it was a joint account with survival mandate.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Karan V." },
            "datePublished": "2026-06-25",
            "reviewBody": "Excellent legal advice on auto debit from joint account for personal loan. We got a stay order on further deductions and negotiated a proper settlement.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya D." },
            "datePublished": "2026-07-10",
            "reviewBody": "The bank illegally drained our joint savings account for a business loan. Thanks to SettleLoans, the bank had to reverse the transaction under RBI guidelines.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/can-bank-deduct-loan-emi-from-joint-account-if-one-person-defaults#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can a bank deduct money from a joint account for a personal loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Generally, a bank cannot arbitrarily deduct money from a joint account to recover a personal loan taken by only one of the account holders, unless specific consent or a mandate was provided at the time of account opening or loan disbursal."
            }
          },
          {
            "@type": "Question",
            "name": "What is the Banker's Right of Set-Off?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Banker's Right of Set-Off allows a bank to combine two accounts of the same customer to recover an outstanding debt. However, the accounts must be held in the same capacity and same right (e.g., both individual accounts)."
            }
          },
          {
            "@type": "Question",
            "name": "Can my spouse's account be frozen for my loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, your spouse's individual account cannot be frozen for a loan solely in your name. If it's a joint account, the bank can only freeze the portion of funds legally belonging to the defaulter, which is often difficult to determine without a court order."
            }
          },
          {
            "@type": "Question",
            "name": "Is auto debit from a joint account for a personal loan legal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is only legal if the NACH/ECS mandate was signed by all joint account holders explicitly authorizing the deduction for that specific personal loan."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if the bank deducted EMI from our joint account without permission?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You should immediately send a formal legal notice to the bank branch manager and escalate the matter to the Banking Ombudsman, stating that the deduction violates the Right of Set-Off rules in India."
            }
          },
          {
            "@type": "Question",
            "name": "Does the 'Either or Survivor' mandate give banks the right to deduct EMI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. An 'Either or Survivor' mandate is for operational convenience (withdrawal, signatures). It does not automatically grant the bank the right to seize funds for the individual debt of one account holder."
            }
          },
          {
            "@type": "Question",
            "name": "Can the bank attach my business partner's funds in our joint account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. If a joint account is held with a business partner, the bank cannot exercise the right of set-off for a personal loan of one partner, as the funds belong to the partnership/business entity."
            }
          },
          {
            "@type": "Question",
            "name": "How do I prove the funds in a joint account belong to the non-defaulting person?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can provide salary slips, income tax returns, or bank transfer statements showing that the deposits into the joint account originated solely from the non-defaulting spouse or partner."
            }
          },
          {
            "@type": "Question",
            "name": "Will the bank inform us before making a deduction from a joint account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under RBI guidelines, banks are generally required to provide prior notice before exercising the Right of Set-Off. However, many banks bypass this in practice, which is a ground for legal challenge."
            }
          },
          {
            "@type": "Question",
            "name": "Can I sue the bank for unauthorized debiting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if the bank illegally drains your joint savings account, you can file a case in the Consumer Disputes Redressal Forum for deficiency in service and claim a refund along with compensation for mental agony."
            }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "understanding-the-dilemma", title: "Understanding the Dilemma" },
    { id: "bankers-right-of-set-off", title: "Banker’s Right of Set-Off Explained" },
    { id: "joint-accounts-legal-position", title: "Joint Accounts: The Legal Position" },
    { id: "unauthorized-auto-debits", title: "Unauthorized Auto Debits (NACH/ECS)" },
    { id: "spouse-account-frozen", title: "Spouse Account Frozen: What to Do?" },
    { id: "actionable-steps", title: "Actionable Steps to Recover Funds" },
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
              Banking Law & Rights
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Can the Bank Deduct Loan EMI from a <span className="text-[#1F5EFF]">Joint Account</span> if Only One Person Defaulted?
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              A deep legal analysis of the Banker's Right of General Lien and Set-Off. Learn exactly when the bank is legally allowed to touch your joint funds and when it constitutes unauthorized debiting.
            </p>
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Challenge Unauthorized Deductions Today
            </Link>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li className="font-bold text-[#2E2E2E]">Joint Account EMI Deduction Rules</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
          
          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Column: Article Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="understanding-the-dilemma" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Nightmare of Unexpected Deductions
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Imagine waking up to an SMS stating that your entire monthly salary, sitting in a joint savings account with your spouse, has been wiped out. The culprit? An auto-debit for a personal loan default committed solely by your spouse. This is a common and distressing scenario in India. 
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Many individuals face situations where a <strong>bank deducted EMI from joint account without permission</strong>. Whether the co-holder is a spouse, a parent, or a business partner, the sudden freezing or draining of shared funds creates immediate financial paralysis. 
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  But is this legal? Can banks blindly dip into an account where two people have rights, just because one of them owes the bank money? The answer lies in the complex legal concept of the "Banker’s Right of General Lien and Set-Off".
                </p>
              </div>
            </section>

            <section id="bankers-right-of-set-off" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Understanding the Right of Set-Off Rules in India
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                To understand why a bank might attempt to seize your funds, we must look at the <strong>right of set-off rules in India</strong>. This legal principle allows a bank to merge two accounts belonging to the same customer to recover a debt. If you owe the bank money on a credit card, but have a surplus in your individual savings account, the bank can 'set off' the debit against the credit.
              </p>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Crucial Conditions for Right of Set-Off</h4>
                <p className="text-lg leading-relaxed mb-4 text-blue-900">
                  The bank cannot simply apply this right randomly. Very specific legal conditions must be met:
                </p>
                <div className="flex items-start gap-3 mb-2">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                  <p className="text-blue-900 font-medium"><strong>Same Capacity:</strong> The funds and the debt must be held in the exact same capacity. An individual debt cannot be offset against a trust account.</p>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                  <p className="text-blue-900 font-medium"><strong>Same Right:</strong> The ownership of the accounts must mirror each other exactly.</p>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                  <p className="text-blue-900 font-medium"><strong>Due and Payable:</strong> The debt must be currently due, not a future liability.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                  <p className="text-blue-900 font-medium"><strong>Prior Notice:</strong> In most cases, courts and RBI guidelines expect banks to notify the customer before exercising this right.</p>
                </div>
              </div>
            </section>

            <section id="joint-accounts-legal-position" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Joint Accounts: The Legal Position on Set-Off
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The critical defense against unauthorized deductions lies in the "Same Right" rule. When an account is held jointly (e.g., Husband and Wife), the funds legally belong to both individuals collectively. A personal loan, however, is an individual contract signed by one person.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Therefore, the general legal consensus under Indian banking law is that <strong>a bank cannot set-off an individual debt against a joint account</strong>. The capacities are different: Individual vs. Joint.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Individual Loan vs. Joint Account</h4>
                  <p className="text-gray-700 text-base">
                    If Mr. A defaults on a personal loan, the bank <strong>cannot</strong> legally freeze or deduct money from the joint account of Mr. A and Mrs. B. Doing so violates Mrs. B's independent right to those funds.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Joint Loan vs. Individual Account</h4>
                  <p className="text-gray-700 text-base">
                    Conversely, if Mr. A and Mrs. B default on a joint home loan, the bank <strong>can</strong> exercise the right of set-off against the individual savings account of either Mr. A or Mrs. B, as both are jointly and severally liable.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-black text-[#2E2E2E] mb-4">The "Either or Survivor" Loophole</h4>
                <p className="text-lg leading-relaxed text-gray-700">
                  Many bank managers incorrectly argue that an "Either or Survivor" operational mandate gives them the right to drain the account. This is legally flawed. The mandate only authorizes either party to operate the account or withdraw funds. It does not automatically pledge the non-defaulter's share of the money as collateral for the defaulter's private liabilities. Courts have repeatedly struck down banks using this excuse to justify unauthorized deductions.
                </p>
              </div>
            </section>

            <section id="unauthorized-auto-debits" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                When is an Auto Debit from Joint Account Legal?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                There is one major exception where an <strong>auto debit from joint account for personal loan</strong> is considered legal. This occurs if explicit written consent was provided.
              </p>

              <div className="space-y-12 my-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">Joint NACH/ECS Mandate Signed</h4>
                    <p className="text-lg text-gray-700">If, during the loan application, the non-defaulting joint holder (e.g., the wife) co-signed the NACH mandate form explicitly authorizing the bank to deduct the husband's personal loan EMI from their shared joint account, the bank is within its rights to execute the auto-debit.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">Co-Applicant or Guarantor Status</h4>
                    <p className="text-lg text-gray-700">If the joint account holder also acted as a guarantor or co-applicant for the defaulted loan, they share equal liability. In this scenario, the bank can legally target the joint account to recover the dues.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Warning: Forged Mandates</h4>
                <p className="text-lg text-red-900 leading-relaxed">
                  In many dispute cases, we find that banks process auto-debits based on a mandate signed only by the primary borrower, without the secondary joint holder's signature. This is a severe deficiency in service and entirely illegal. You have the right to demand a copy of the physical mandate form.
                </p>
              </div>
            </section>

            <section id="spouse-account-frozen" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Spouse Account Frozen for My Loan: The Bank's Strong-Arm Tactics
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Often, a bank will realize they cannot legally deduct the funds, so they take a different approach: they freeze the account entirely. Having a <strong>spouse account frozen for my loan</strong> is a terrifying pressure tactic designed to force the defaulting borrower to pay up to release the family's essential funds.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Banks often cite "suspicious transactions" or "internal recovery policies" when doing this. However, freezing a joint account completely deprives the non-defaulting co-holder of their fundamental right to access their own money. Without a specific order from a court or a regulatory authority (like the Income Tax department), a bank cannot unilaterally freeze a joint savings account over a civil loan dispute of one member.
              </p>
            </section>

            <section id="actionable-steps" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Actionable Steps to Recover Unauthorized Deductions
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If your bank has illegally deducted funds from a joint account or frozen it, you must act swiftly. Passive waiting will only result in further financial loss.
              </p>
              
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm mb-8">
                <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-700 font-medium">
                  <li className="pl-2"><strong>Demand the Mandate Form:</strong> Immediately file a written request demanding the original NACH/ECS mandate showing the signatures of all joint account holders authorizing the debit.</li>
                  <li className="pl-2"><strong>Serve a Legal Notice:</strong> Have a banking lawyer draft a legal notice citing the failure of the "Same Right, Same Capacity" rule regarding the right of set-off.</li>
                  <li className="pl-2"><strong>Prove Ownership of Funds:</strong> Submit salary slips or tax returns to prove that the money sitting in the joint account actually belongs to the non-defaulting spouse.</li>
                  <li className="pl-2"><strong>Approach the Banking Ombudsman:</strong> If the bank does not reverse the transaction within 30 days, file a formal complaint with the RBI Banking Ombudsman for 'unauthorized electronic debit' and 'deficiency in service'.</li>
                </ol>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Real Client Success Stories
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                We have successfully defended hundreds of clients against illegal bank deductions. Here are a few recent victories:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                      R
                    </div>
                    <div className="flex text-yellow-400">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-6">"My bank deducted ₹45,000 from our joint account without permission for my husband's personal loan. The legal notice from SettleLoans forced the bank to reverse the transaction within 7 days, as my husband was the sole applicant."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-50 text-red-700 text-xs font-bold px-3 py-1 rounded-full border border-red-100">Deducted: ₹45,000</span>
                    <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-100">Recovered: 100%</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                      A
                    </div>
                    <div className="flex text-yellow-400">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-6">"My spouse account was frozen for my loan default. It was a nightmare. The legal experts proved the freezing was unconstitutional and got the account unfrozen while negotiating a fair settlement for the actual debt."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-50 text-red-700 text-xs font-bold px-3 py-1 rounded-full border border-red-100">Status: Account Frozen</span>
                    <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-100">Outcome: Unfrozen + Settled</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                
                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">Can a bank deduct money from a joint account for a personal loan?</h3>
                  <p className="text-gray-700">Generally, no. A bank cannot arbitrarily deduct money from a joint account to recover a personal loan taken by only one of the account holders, unless specific consent (NACH) was provided by all holders.</p>
                </div>

                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">What is the Banker's Right of Set-Off?</h3>
                  <p className="text-gray-700">It is a legal right allowing a bank to combine two accounts of the same customer to recover a debt. However, the accounts must be held in the exactly "same capacity and same right", which protects joint accounts from individual debts.</p>
                </div>

                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">Can my spouse's account be frozen for my loan?</h3>
                  <p className="text-gray-700">No, an individual account belonging to your spouse cannot be frozen for a loan solely in your name. For joint accounts, the bank cannot freeze the non-defaulter's share without a specific legal order.</p>
                </div>

                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">Is auto debit from a joint account for a personal loan legal?</h3>
                  <p className="text-gray-700">It is only legal if the NACH/ECS mandate was explicitly signed by all joint account holders, authorizing the deduction for that specific individual personal loan.</p>
                </div>

                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">What should I do if the bank deducted EMI without permission?</h3>
                  <p className="text-gray-700">You must immediately serve a formal legal notice challenging the deduction under the right of set-off rules. If the bank fails to reverse it, escalate the complaint to the RBI Banking Ombudsman.</p>
                </div>

                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">Does the 'Either or Survivor' mandate grant the right of set-off?</h3>
                  <p className="text-gray-700">No. 'Either or Survivor' is an operational mandate for withdrawals. It does not legally convert joint funds into collateral for a single individual's private debt.</p>
                </div>

                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">Can the bank attach my business partner's funds?</h3>
                  <p className="text-gray-700">No. If a joint account is held for business partnership purposes, a bank cannot exercise set-off to recover one partner's personal individual debt.</p>
                </div>

                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">How do I prove the funds belong to the non-defaulting person?</h3>
                  <p className="text-gray-700">You can demonstrate ownership through salary slips, income tax returns, and bank statements showing that the deposits into the joint account came solely from the non-defaulting member.</p>
                </div>

                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">Will the bank inform us before making a deduction?</h3>
                  <p className="text-gray-700">Under standard RBI guidelines, banks should provide prior notice. However, many bypass this rule to prevent the customer from emptying the account, which gives you strong grounds for a legal dispute.</p>
                </div>

                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#2E2E2E] text-lg mb-2">Can I sue the bank for unauthorized debiting?</h3>
                  <p className="text-gray-700">Yes. If a bank illegally drains your joint savings account, you can file a case in the Consumer Disputes Redressal Commission for deficiency in service and claim a full refund plus compensation for mental harassment.</p>
                </div>

              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 relative z-10">Stop Unauthorized Deductions Now.</h3>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                Did the bank illegally drain your joint savings account for a loan your spouse took? You can challenge this. Speak to our banking lawyers to recover your unauthorized deductions.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-all duration-300 text-lg shadow-[0_0_20px_rgba(31,94,255,0.4)] relative z-10">
                Consult a Banking Lawyer
              </Link>
              
              <div className="mt-16 pt-8 border-t border-gray-100/20 text-center relative z-10">
                <p className="text-gray-400 text-sm italic">
                  Disclaimer: This content is for informational purposes regarding banking law and the right of set-off in India. It does not constitute formal legal counsel. For specific actions against unauthorized auto debits or frozen accounts, consult a registered advocate.
                </p>
              </div>
            </div>

          </article>

          {/* Right Column: Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              {/* Dark CTA Card */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">Bank Harassment?</h4>
                <p className="text-sm text-gray-300 mb-6 relative z-10">We stop illegal deductions and frozen accounts.</p>
                <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors relative z-10">
                  Get Legal Help
                </Link>
              </div>

              {/* White Resources Card */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b border-[#DEDEDE] pb-4 mb-4">Related Legal Guides</h4>
                <div className="space-y-4">
                  <Link href="/can-banks-freeze-my-upi-phonepe-gpay-account-for-personal-loan-recovery" className="group flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 mt-2 flex-shrink-0 transition-colors"></span>
                    <span className="text-sm text-gray-700 group-hover:text-[#1F5EFF] font-medium leading-relaxed transition-colors">Can Banks Freeze UPI Accounts?</span>
                  </Link>
                  <Link href="/legal-notice-for-loan-recovery" className="group flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 mt-2 flex-shrink-0 transition-colors"></span>
                    <span className="text-sm text-gray-700 group-hover:text-[#1F5EFF] font-medium leading-relaxed transition-colors">How to Reply to a Bank Legal Notice</span>
                  </Link>
                  <Link href="/loan-settlement-process-in-india" className="group flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 mt-2 flex-shrink-0 transition-colors"></span>
                    <span className="text-sm text-gray-700 group-hover:text-[#1F5EFF] font-medium leading-relaxed transition-colors">The RBI Loan Settlement Process 2026</span>
                  </Link>
                  <Link href="/recovery-agents-threatening-me-what-to-do" className="group flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 mt-2 flex-shrink-0 transition-colors"></span>
                    <span className="text-sm text-gray-700 group-hover:text-[#1F5EFF] font-medium leading-relaxed transition-colors">Stop Recovery Agent Harassment</span>
                  </Link>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
