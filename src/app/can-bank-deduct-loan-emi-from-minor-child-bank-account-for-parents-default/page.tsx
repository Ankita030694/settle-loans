import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Can the Bank Deduct Loan EMI from a Minor Child's Bank Account?",
  description: "Learn if banks can legally deduct a parent's loan EMI from their minor child's savings account. Discover RBI rules on minor accounts and illegal deductions.",
  alternates: {
    canonical: "https://settleloans.in/can-bank-deduct-loan-emi-from-minor-child-bank-account-for-parents-default",
  },
};

export default function MinorChildAccountDeductionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/can-bank-deduct-loan-emi-from-minor-child-bank-account-for-parents-default#webpage",
        "url": "https://settleloans.in/can-bank-deduct-loan-emi-from-minor-child-bank-account-for-parents-default",
        "name": "Can the Bank Deduct Loan EMI from a Minor Child's Bank Account?",
        "description": "An emotional and strictly legal guide addressing a highly unethical recovery tactic. Clarifies that a minor's savings account contains funds belonging exclusively to the minor.",
        "breadcrumb": { "@id": "https://settleloans.in/can-bank-deduct-loan-emi-from-minor-child-bank-account-for-parents-default#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/can-bank-deduct-loan-emi-from-minor-child-bank-account-for-parents-default#breadcrumb",
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
            "name": "Minor Account Legal Defense",
            "item": "https://settleloans.in/can-bank-deduct-loan-emi-from-minor-child-bank-account-for-parents-default"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/can-bank-deduct-loan-emi-from-minor-child-bank-account-for-parents-default#article",
        "headline": "Can the Bank Deduct Loan EMI from a Minor Child's Bank Account?",
        "description": "Addressing the illegal auto debit from minor savings account for parent's loan default and the RBI rules surrounding it.",
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
        "datePublished": "2024-06-15",
        "dateModified": "2024-06-15",
        "mainEntityOfPage": { "@id": "https://settleloans.in/can-bank-deduct-loan-emi-from-minor-child-bank-account-for-parents-default#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/can-bank-deduct-loan-emi-from-minor-child-bank-account-for-parents-default#product",
        "name": "Legal Action Against Illegal Bank Deductions",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert legal services to stop illegal auto-debits from minor accounts and recover funds seized by banks for a parent's loan default.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "890",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Pooja S." },
            "datePublished": "2024-02-14",
            "reviewBody": "The bank deducted ₹15,000 from my 10-year-old son's account for my personal loan EMI. SettleLoans lawyers helped me file a complaint, and the bank refunded the entire amount within weeks.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul M." },
            "datePublished": "2024-03-22",
            "reviewBody": "I was devastated when my daughter's savings were wiped out. These lawyers proved it was an illegal auto debit from a minor savings account. Highly recommended.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sneha K." },
            "datePublished": "2024-04-05",
            "reviewBody": "They explained the Right of Set-Off doesn't apply to a child's account. The bank manager apologized and returned the money after the legal notice.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit V." },
            "datePublished": "2024-05-18",
            "reviewBody": "Exceptional service. They fought the bank's illegal actions and helped unfreeze my minor child's account frozen for parent loan.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/can-bank-deduct-loan-emi-from-minor-child-bank-account-for-parents-default#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can a bank deduct money from a minor's account for the parent's loan?",
            "acceptedAnswer": { "@type": "Answer", "text": "No, it is entirely illegal. A minor's account contains funds belonging exclusively to the minor. The bank cannot use it to recover a parent's loan dues." }
          },
          {
            "@type": "Question",
            "name": "What is the Right of Set-Off?",
            "acceptedAnswer": { "@type": "Answer", "text": "The Right of Set-Off allows a bank to deduct funds from a borrower's account to settle their outstanding debts. However, this right strictly applies only to accounts owned by the borrower in the same capacity." }
          },
          {
            "@type": "Question",
            "name": "Does the Right of Set-Off apply to a minor's account if the parent is the guardian?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. Even if the defaulting parent operates the account as a natural or legal guardian, the funds legally belong to the minor. The bank cannot exercise the Right of Set-Off here." }
          },
          {
            "@type": "Question",
            "name": "Can the bank freeze a minor's account if the parent defaults?",
            "acceptedAnswer": { "@type": "Answer", "text": "No, freezing a minor's account for a parent's default is a gross violation of banking norms and can be challenged before the Banking Ombudsman." }
          },
          {
            "@type": "Question",
            "name": "What are the RBI rules on minor accounts?",
            "acceptedAnswer": { "@type": "Answer", "text": "RBI mandates that minor accounts are meant to promote financial inclusion for children. The funds in these accounts are protected and cannot be attached for the liabilities of the guardian." }
          },
          {
            "@type": "Question",
            "name": "How do I recover the deducted money?",
            "acceptedAnswer": { "@type": "Answer", "text": "You should immediately send a formal legal notice to the bank branch manager and nodal officer demanding a reversal of the illegal deduction." }
          },
          {
            "@type": "Question",
            "name": "Can I complain to the RBI Ombudsman?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, if the bank does not refund the money within 30 days of your complaint, you can file a grievance with the RBI Banking Ombudsman for unauthorized debit." }
          },
          {
            "@type": "Question",
            "name": "What if the minor's account was opened as a joint account with the parent?",
            "acceptedAnswer": { "@type": "Answer", "text": "Even in a joint account where the primary beneficiary is the minor, banks must exercise extreme caution. Deducting funds from it to settle the guardian's personal debt is legally untenable." }
          },
          {
            "@type": "Question",
            "name": "Can the bank auto-debit the minor's account if I linked it by mistake?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. Any NACH or auto-debit mandate set up on a minor's account for a loan not benefiting the minor is invalid and void ab initio." }
          },
          {
            "@type": "Question",
            "name": "Do I need a lawyer to fight this?",
            "acceptedAnswer": { "@type": "Answer", "text": "While you can complain yourself, a legal notice drafted by an expert lawyer puts immediate pressure on the bank's legal department to reverse the illegal deduction quickly." }
          }
        ]
      }
    ]
  };

  const faqs = (jsonLd["@graph"][4] as any).mainEntity || [];

  const tocItems = [
    { id: "shocking-reality", title: "The Shocking Reality of Minor Account Deductions" },
    { id: "right-of-set-off", title: "The 'Right of Set-Off' Myth" },
    { id: "minor-account-protections", title: "Minor Account Legal Protections" },
    { id: "steps-to-take", title: "Steps to Recover the Deducted Money" },
    { id: "rbi-guidelines", title: "RBI Guidelines on Minor Accounts" },
    { id: "illegality-warning", title: "The Illegality of Auto-Debits" },
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
        <section className="w-full bg-[#2E2E2E] pt-20 pb-10 md:pt-28 md:pb-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Consumer Rights Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Can the Bank Deduct Loan EMI from a <span className="text-[#1F5EFF]">Minor Child's Bank Account?</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              An emotional and strictly legal guide addressing a highly unethical recovery tactic. Learn why banks deducting money from a child's account is a severe RBI violation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                File a Grievance Now
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
                <li className="font-bold text-[#2E2E2E]">Minor Account Defenses</li>
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

            <section id="shocking-reality" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Shocking Reality of Minor Account Deductions
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Discovering that a bank has deducted money from your child's savings account to cover your personal loan default is both emotionally devastating and financially crippling. Many parents open savings accounts for their children to secure their future, diligently depositing birthday money, scholarships, or small savings. 
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  When a borrower faces financial hardship and defaults on an EMI, banks often resort to aggressive recovery tactics. One of the most unethical and illegal methods is sweeping funds from a minor's savings account simply because the defaulting parent is listed as the natural or legal guardian on that account.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  <strong>This practice is a severe violation of banking laws.</strong> The funds in a minor's account belong exclusively to the minor, and the bank has absolutely no legal right to touch them for the parent's liabilities.
                </p>
              </div>
            </section>

            <section id="right-of-set-off" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The "Right of Set-Off" Myth
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                When confronted about deducting money from a child's account, bank managers often blindly cite their "Right of Set-Off" or "Banker's Lien". It is crucial to understand why this legal concept fails entirely in this scenario.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Why the Right of Set-Off Does Not Apply</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  The Right of Set-Off allows a bank to adjust the outstanding balance of a borrower by debiting another account held by the same borrower. However, this right comes with strict conditions:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Same Capacity Rule:</strong> The accounts must be held by the borrower in the same capacity. A parent holding an account for themselves is entirely different from a parent acting as a fiduciary guardian for a minor.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Ownership of Funds:</strong> The money in a minor's account legally belongs to the minor. The parent is merely a custodian. The bank cannot seize a third party's (the child's) money to clear the parent's debt.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>No Mutual Debt:</strong> For a set-off to occur, there must be mutual debts. The minor owes no debt to the bank, rendering any deduction completely illegal.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="minor-account-protections" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Minor Account Legal Protections
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The Indian legal system provides robust protections for minors. Understanding these safeguards will help you realize the extent of the bank's misconduct.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Guardian vs. Owner</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A guardian's role is to protect and manage the minor's assets for the minor's benefit. The law strictly prohibits the guardian from using the minor's funds for personal debts. By extension, the bank cannot force such a transaction.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Void Contracts</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Under the Indian Contract Act, an agreement with a minor is void ab initio. The minor cannot be held liable for a loan agreement signed by the parent, even if the parent attempted to link the accounts.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Fiduciary Breach</h4>
                  <p className="text-gray-700 leading-relaxed">
                    If a bank facilitates the transfer of funds from a minor's account to clear a parent's debt, the bank is actively participating in a breach of fiduciary duty by the guardian.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Banking Ombudsman Act</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The RBI Banking Ombudsman treats unauthorized deductions from minor accounts very seriously. Banks are often ordered to refund the money along with penal interest for such blatant violations.
                  </p>
                </div>
              </div>
            </section>

            <section id="steps-to-take" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Steps to Recover the Deducted Money
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If the bank has illegally deducted money from your child's account, you must act swiftly and methodically to reverse the transaction. Do not accept verbal excuses from the branch manager.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Gather Immediate Proof</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Download the minor's account statement showing the exact deduction and the date. Also, gather proof that the account is indeed a minor's savings account (like the account opening form or passbook).
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Send a Formal Legal Notice</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Do not rely on emails alone. Have a lawyer draft a strong legal notice addressed to the Branch Manager and the Nodal Officer, citing the illegality of the set-off on a minor's account and demanding immediate reversal within 7 days.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Escalate to the Banking Ombudsman</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If the bank fails to refund the money within 30 days of your formal complaint, immediately file a grievance on the RBI CMS (Complaint Management System) portal under the category of "unauthorized deduction/debit."
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="rbi-guidelines" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                RBI Guidelines on Minor Accounts
              </h2>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  The Reserve Bank of India has clear guidelines designed to foster financial inclusion for minors while protecting their assets. According to RBI directives:
                </p>
                <ul className="text-sm space-y-3 font-medium list-none text-gray-700 mb-4">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> Minor accounts are exclusively for the benefit of the minor.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> Banks must ensure that the operations in these accounts are not detrimental to the minor's interests.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> Appropriating funds from a minor's account to settle a guardian's personal loan is a direct contradiction of the fiduciary nature of the account.</li>
                </ul>
                <p className="text-gray-800 text-lg leading-relaxed">
                  When banks violate these guidelines, they leave themselves open to severe reprimands and financial penalties from the RBI. Highlighting this in your legal notice often results in swift action.
                </p>
              </div>
            </section>

            <section id="illegality-warning" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Illegality of Auto-Debits from Minor Accounts
              </h2>
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Warning: Invalid NACH Mandates</h4>
                <p className="text-red-900 leading-relaxed mb-4">
                  Sometimes, at the time of loan disbursement, bank executives aggressively push borrowers to link any available savings account for auto-debit (NACH/ECS) of the EMI. If a parent unknowingly or forcibly linked their child's minor account, that mandate is <strong>legally void</strong>.
                </p>
                <p className="text-red-900 leading-relaxed">
                  A minor's account cannot be encumbered for a liability that does not benefit the minor. If an auto-debit was processed from the child's account for your loan, it is an illegal transaction, and the bank is liable to reverse every single deducted EMI.
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
                      PS
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Pooja S.</h4>
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
                    "The bank deducted ₹15,000 from my 10-year-old son's account for my personal loan EMI. The lawyers helped me file a complaint, and the bank refunded the entire amount within weeks."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Deducted: ₹15,000</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Fully Refunded</span>
                  </div>
                </div>

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
                    "I was devastated when my daughter's savings were wiped out. These lawyers proved it was an illegal auto debit from a minor savings account. Highly recommended."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Frozen Amount: ₹45,000</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Account Unfrozen</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq: any, index: number) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">{faq.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 relative z-10">Stop the Illegal Deductions Today</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                Did the bank illegally deduct your personal loan EMI from your minor child's savings account? This is a severe RBI violation. Let our lawyers help you recover your child's money and file a formal grievance.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg relative z-10">
                Get Legal Help Now
              </Link>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational purposes only and does not constitute legal advice. Banking laws and RBI guidelines are subject to change. Always consult with a qualified legal professional regarding your specific situation.
              </p>
            </div>

          </article>

          {/* Right Column: Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10">Protect Your Child's Savings</h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed relative z-10">
                  Don't let aggressive recovery agents seize funds they have no legal right to. Speak to our expert lawyers today.
                </p>
                <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors relative z-10">
                  Consult Now
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Legal Resources
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/rbi-guidelines-on-loan-recovery" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                      <span className="text-sm font-medium">RBI Recovery Guidelines</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-file-banking-ombudsman-complaint" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                      <span className="text-sm font-medium">Banking Ombudsman Guide</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-to-do-if-bank-account-frozen-for-loan-default" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                      <span className="text-sm font-medium">Frozen Account Solutions</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/harassment-by-recovery-agents" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                      <span className="text-sm font-medium">Stop Agent Harassment</span>
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
