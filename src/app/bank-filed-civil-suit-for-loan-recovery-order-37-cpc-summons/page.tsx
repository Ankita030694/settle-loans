import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Bank Filed Civil Suit for Loan Recovery: Order 37 CPC Summons Guide",
  description: "A technical legal breakdown for borrowers who have received a court summons under Order 37 of the CPC (Summary Suit). Learn how to reply to an Order 37 summons and seek leave to defend within 10 days.",
  alternates: {
    canonical: "https://settleloans.in/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons",
  },
};

export default function Order37SummonsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons#webpage",
        "url": "https://settleloans.in/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons",
        "name": "Bank Filed Civil Suit for Loan Recovery: Order 37 CPC Summons Guide",
        "description": "Technical legal breakdown for borrowers who received a court summons under Order 37 CPC (Summary Suit) for loan recovery. Learn how to respond.",
        "breadcrumb": { "@id": "https://settleloans.in/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons#breadcrumb",
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
            "name": "Order 37 CPC Bank Loan Guide",
            "item": "https://settleloans.in/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons#article",
        "headline": "What to do if a Bank Filed a Civil Suit Against Me under Order 37 CPC",
        "description": "Understand the timeline and legal procedures when dealing with a summary suit for loan recovery under Order 37 CPC.",
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
        "datePublished": "2024-05-15",
        "dateModified": "2024-05-15",
        "mainEntityOfPage": { "@id": "https://settleloans.in/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons#product",
        "name": "Order 37 CPC Legal Defense & Loan Settlement Services",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert DRT and civil lawyers helping borrowers file their appearance and seek leave to defend against Order 37 CPC bank loan recovery suits.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "245",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul M." },
            "datePublished": "2024-01-10",
            "reviewBody": "Received an Order 37 summons and was terrified. The team filed my appearance on the 8th day and drafted a strong leave to defend. Stopped the instant judgment.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram S." },
            "datePublished": "2024-02-15",
            "reviewBody": "The bank filed a civil suit against me for a personal loan default. SettleLoans connected me with a lawyer who filed the reply within the 10-day deadline.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anita P." },
            "datePublished": "2024-03-22",
            "reviewBody": "Excellent guidance on how to reply to order 37 summons. They moved quickly to prevent the decree from being passed. Eventually settled the loan for 40% less.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Deepak K." },
            "datePublished": "2024-04-05",
            "reviewBody": "Summary suit for loan recovery is scary. The lawyers drafted an exceptional leave to defend that highlighted discrepancies in the bank's account statements.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is an Order 37 CPC bank loan suit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An Order 37 suit is a 'Summary Suit' filed by a bank or NBFC under the Civil Procedure Code for rapid recovery of debt. Unlike normal civil suits, it does not allow the borrower to defend themselves as a matter of right."
            }
          },
          {
            "@type": "Question",
            "name": "How many days do I have to reply to an Order 37 summons?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You have strictly 10 days from the date of receiving the summons to file an 'appearance' in the court."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I ignore a summary suit for loan recovery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you fail to enter an appearance within 10 days, the allegations made by the bank are deemed admitted, and the court can instantly pass a decree (judgment) against you."
            }
          },
          {
            "@type": "Question",
            "name": "What is 'Leave to Defend' in an Order 37 CPC suit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Leave to defend is a formal application filed by the borrower asking the court for permission to contest the bank's claims. You must show a substantial defense or triable issues to get this permission."
            }
          },
          {
            "@type": "Question",
            "name": "Can I file an appearance without a lawyer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While legally possible, it is highly unadvisable. Order 37 procedures are strict on formats and timelines. A DRT or civil lawyer is essential."
            }
          },
          {
            "@type": "Question",
            "name": "Why did the bank file a civil suit against me instead of sending recovery agents?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banks file civil suits (especially summary suits) when the default amount is high, there is clear documentary evidence (like a signed agreement), and they want a fast, legally binding court order for attachment of assets."
            }
          },
          {
            "@type": "Question",
            "name": "How to reply to an Order 37 summons effectively?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You must first file a memorandum of appearance within 10 days. Later, when served with a 'summons for judgment', you must file an affidavit seeking leave to defend within 10 days, highlighting discrepancies in the bank's claims."
            }
          },
          {
            "@type": "Question",
            "name": "Can an Order 37 suit lead to an arrest warrant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Order 37 is a civil procedure, not criminal. It results in a money decree, not jail time. However, if you disobey court orders during the execution of the decree, civil imprisonment is a rare possibility."
            }
          },
          {
            "@type": "Question",
            "name": "Will an Order 37 decree result in my property being seized?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if the court passes a decree against you and you fail to pay the judgment amount, the bank can file an execution petition to attach and sell your assets."
            }
          },
          {
            "@type": "Question",
            "name": "Can I still settle the loan after receiving an Order 37 summons?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Filing an appearance buys you time. You can negotiate a One Time Settlement (OTS) with the bank out of court and then mutually withdraw the summary suit."
            }
          }
        ]
      }
    ]
  };

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
              Legal Defense Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Bank Filed Civil Suit for Loan Recovery: <br className="hidden md:block" /> <span className="text-[#1F5EFF]">Order 37 CPC</span> Summons Guide
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              A technical legal breakdown for borrowers facing a Summary Suit. Discover how a DRT lawyer can help halt the immediate judgment and protect your assets.
            </p>
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Immediate Legal Help
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
                <li className="font-bold text-[#2E2E2E]">Order 37 CPC Bank Loan Guide</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
          
          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24">
              <TableOfContents
                items={[
                  { id: "introduction", title: "The 10-Day Threat" },
                  { id: "what-is-order-37", title: "What is Order 37 CPC?" },
                  { id: "why-banks-use-it", title: "Why Banks Prefer Summary Suits" },
                  { id: "how-to-reply", title: "How to Reply to Summons" },
                  { id: "leave-to-defend", title: "Seeking Leave to Defend" },
                  { id: "consequences", title: "Consequences of Ignoring" },
                  { id: "success-stories", title: "Success Stories" },
                  { id: "faqs", title: "Frequently Asked Questions" }
                ]}
              />
            </div>
          </aside>

          {/* Middle Column: Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">The 10-Day Threat: Reacting to a Summary Suit</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Receiving a court summons is intimidating, but receiving a summons under <strong>Order 37 of the Civil Procedure Code (CPC)</strong> requires immediate emergency action. If a bank filed a civil suit against you for loan recovery under this specific order, you do not have the luxury of time.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Unlike a regular civil suit where proceedings can drag on for years, an Order 37 suit is designed for speed. <strong>You only have 10 days</strong> from the date of receiving the summons to file your "appearance" in court. Failure to do so means the bank automatically wins the case.
                </p>
              </div>
            </section>

            <section id="what-is-order-37" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">What is Order 37 CPC for a Bank Loan?</h2>
              <p className="text-lg leading-relaxed mb-6">
                Order 37 of the CPC provides for a summary procedure in suits based on negotiable instruments (like cheques) or where the plaintiff (the bank) seeks to recover a debt or liquidated demand in money arising out of a written contract. 
              </p>
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Key Difference from Regular Suits</h4>
                <p className="text-lg leading-relaxed mb-6 text-blue-900">
                  In a normal civil suit, the defendant (you) has the absolute right to present a defense, file a written statement, and contest the claims. In a <strong>summary suit for loan recovery</strong> under Order 37, you <em>do not have the right to defend yourself</em> unless you specifically ask for the court's permission, known as seeking "Leave to Defend."
                </p>
              </div>
            </section>

            <section id="why-banks-use-it" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Why Banks File Civil Suits Under Order 37</h2>
              <p className="text-lg leading-relaxed mb-6">
                If the bank filed civil suit against me, why did they choose Order 37? Banks and NBFCs prefer this route for several strategic reasons:
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-2">Speed of Judgment</h4>
                  <p className="text-gray-700">The entire legal process is fast-tracked. If the borrower misses the 10-day deadline, the bank gets a decree immediately without a trial.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-2">Written Agreements</h4>
                  <p className="text-gray-700">Since personal loans and credit cards involve signed agreements, banks meet the primary condition for filing a summary suit.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-2">Psychological Pressure</h4>
                  <p className="text-gray-700">The strict deadlines and the threat of an immediate decree put immense pressure on the borrower to settle on the bank's terms.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-2">Asset Attachment</h4>
                  <p className="text-gray-700">Once a decree is passed, it is much easier for the bank to file for execution and attach your bank accounts or property.</p>
                </div>
              </div>
            </section>

            <section id="how-to-reply" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How to Reply to Order 37 Summons: Step-by-Step</h2>
              <p className="text-lg leading-relaxed mb-6">
                When dealing with an Order 37 cpc bank loan summons, you must adhere strictly to the timelines. Here is the legal process you and your lawyer must follow:
              </p>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h4 className="text-2xl font-black text-[#2E2E2E] mb-2">Filing the Appearance (Within 10 Days)</h4>
                    <p className="text-lg leading-relaxed text-gray-700">The moment you receive the summons in Form No. 4, Appendix B, you have exactly 10 days to enter an appearance in court. This simply means your lawyer informs the court, "Yes, we have received the notice, and we are present."</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h4 className="text-2xl font-black text-[#2E2E2E] mb-2">The Summons for Judgment</h4>
                    <p className="text-lg leading-relaxed text-gray-700">After you file your appearance, the bank's lawyer will serve you with a "Summons for Judgment" supported by an affidavit verifying their claims.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h4 className="text-2xl font-black text-[#2E2E2E] mb-2">Seeking Leave to Defend (Within 10 Days)</h4>
                    <p className="text-lg leading-relaxed text-gray-700">Once you receive the Summons for Judgment, you have another strict 10-day window to apply for "Leave to Defend" by filing an affidavit disclosing facts that demonstrate you have a valid defense.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="leave-to-defend" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Drafting a Strong "Leave to Defend"</h2>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed mb-6 text-gray-800">
                  The court will not grant you leave to defend just because you asked. Your lawyer must present "triable issues." This means showing the court that there is a genuine dispute regarding the facts or the amount claimed by the bank. 
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div><span className="text-gray-800">Disputing the calculation of penal interest.</span></li>
                  <li className="flex items-center gap-3"><div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div><span className="text-gray-800">Highlighting uncredited payments in the account statement.</span></li>
                  <li className="flex items-center gap-3"><div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div><span className="text-gray-800">Proving coercion or blank documents signed at the time of the loan.</span></li>
                </ul>
              </div>
            </section>

            <section id="consequences" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">What Happens if You Ignore the Summons?</h2>
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-4">The Danger of Default</h4>
                <p className="text-lg leading-relaxed text-red-900">
                  Ignoring an Order 37 summons is catastrophic. If you do not enter an appearance within 10 days, the law presumes you have admitted to all the allegations in the bank's lawsuit. The judge will immediately pass a decree against you for the total amount claimed, plus interest and legal costs. Following this, the bank will initiate execution proceedings to freeze your bank accounts and attach your property.
                </p>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Real Client Outcomes</h2>
              <div className="grid md:grid-cols-2 gap-6">
                
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                      R
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-[#2E2E2E]">Rahul M.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full">Sued for: ₹18 Lakhs</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">Settled: ₹6.5 Lakhs</span>
                  </div>
                  <p className="text-gray-600 italic">"Received an Order 37 summons and was terrified. The team filed my appearance on the 8th day and drafted a strong leave to defend. Stopped the instant judgment and later settled out of court."</p>
                </div>
                
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                      V
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-[#2E2E2E]">Vikram S.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full">Sued for: ₹10 Lakhs</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">Defense Accepted</span>
                  </div>
                  <p className="text-gray-600 italic">"The bank filed a civil suit against me for a personal loan default. SettleLoans connected me with a lawyer who filed the reply within the 10-day deadline."</p>
                </div>

              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What is an Order 37 CPC bank loan suit?", a: "An Order 37 suit is a 'Summary Suit' filed by a bank or NBFC for rapid recovery of debt. Unlike normal civil suits, it does not allow the borrower to defend themselves as a matter of right." },
                  { q: "How many days do I have to reply to an Order 37 summons?", a: "You have strictly 10 days from the date of receiving the summons to file an 'appearance' in the court." },
                  { q: "What happens if I ignore a summary suit for loan recovery?", a: "If you fail to enter an appearance within 10 days, the allegations made by the bank are deemed admitted, and the court can instantly pass a decree (judgment) against you." },
                  { q: "What is 'Leave to Defend' in an Order 37 CPC suit?", a: "Leave to defend is a formal application filed by the borrower asking the court for permission to contest the bank's claims. You must show a substantial defense or triable issues to get this permission." },
                  { q: "Can I file an appearance without a lawyer?", a: "While legally possible, it is highly unadvisable. Order 37 procedures are strict on formats and timelines. A DRT or civil lawyer is essential." },
                  { q: "Why did the bank file a civil suit against me instead of sending recovery agents?", a: "Banks file civil suits when the default amount is high, there is clear documentary evidence, and they want a fast, legally binding court order for attachment of assets." },
                  { q: "How to reply to an Order 37 summons effectively?", a: "You must first file a memorandum of appearance within 10 days. Later, when served with a 'summons for judgment', you must file an affidavit seeking leave to defend within 10 days, highlighting discrepancies." },
                  { q: "Can an Order 37 suit lead to an arrest warrant?", a: "Order 37 is a civil procedure, not criminal. It results in a money decree, not jail time. However, civil imprisonment is a rare possibility during execution." },
                  { q: "Will an Order 37 decree result in my property being seized?", a: "Yes, if the court passes a decree and you fail to pay, the bank can file an execution petition to attach and sell your assets." },
                  { q: "Can I still settle the loan after receiving an Order 37 summons?", a: "Yes. Filing an appearance buys you time. You can negotiate a One Time Settlement (OTS) with the bank out of court and then mutually withdraw the summary suit." }
                ].map((faq, i) => (
                  <details key={i} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md cursor-pointer group">
                    <summary className="font-bold text-[#2E2E2E] list-none flex justify-between items-center">
                      <span>{faq.q}</span>
                      <span className="transition-transform group-open:rotate-180">
                        <svg className="w-5 h-5 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6">Received an Order 37 Court Summons?</h3>
                <p className="text-xl mb-8 text-gray-300">
                  You only have <strong>10 days</strong> to respond before the bank gets a direct judgment against you. Hire our litigation experts to file your defense immediately.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform shadow-lg text-lg">
                  Defend Your Case Now
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational purposes only and does not constitute legal advice. If you have received a court summons, consult with a qualified advocate immediately.
              </p>
            </div>

          </article>

          {/* Right Column: Sidebar (Sticky) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10">Don't Miss the Deadline</h3>
                <p className="mb-6 text-gray-300 relative z-10 text-sm">
                  Missing the 10-day window means losing your case automatically. Get expert legal intervention today.
                </p>
                <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-600 transition-colors relative z-10">
                  Consult a DRT Lawyer
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">Legal Resources</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/sarfaesi-act-notice" className="group flex items-center text-sm font-bold text-gray-700 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      SARFAESI Act Notice Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/drt-lawyer" className="group flex items-center text-sm font-bold text-gray-700 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Hire a DRT Lawyer
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-stop-recovery-agents" className="group flex items-center text-sm font-bold text-gray-700 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Stop Recovery Agents
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
