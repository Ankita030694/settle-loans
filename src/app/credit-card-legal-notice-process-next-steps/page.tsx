import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Credit Card Legal Notice Process & Next Steps",
  description: "Received a legal notice for credit card default? Learn how to reply to a credit card legal notice, handle summons, and protect yourself from legal action.",
  alternates: {
    canonical: "https://settleloans.in/credit-card-legal-notice-process-next-steps",
  },
};

export default function CreditCardLegalNoticePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/credit-card-legal-notice-process-next-steps#webpage",
        "url": "https://settleloans.in/credit-card-legal-notice-process-next-steps",
        "name": "Credit Card Legal Notice Process & Next Steps",
        "description": "Just received a heavy legal notice from your credit card company? Don't ignore it. Follow these next steps to protect yourself.",
        "breadcrumb": { "@id": "https://settleloans.in/credit-card-legal-notice-process-next-steps#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/credit-card-legal-notice-process-next-steps#breadcrumb",
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
            "name": "Credit Card Legal Notice Process",
            "item": "https://settleloans.in/credit-card-legal-notice-process-next-steps"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/credit-card-legal-notice-process-next-steps#article",
        "headline": "Credit Card Legal Notice Process & Next Steps",
        "description": "Understand the legal action for credit card default and the exact steps to reply to a credit card legal notice or summons.",
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
        "datePublished": "2024-07-24",
        "dateModified": "2024-07-24",
        "mainEntityOfPage": { "@id": "https://settleloans.in/credit-card-legal-notice-process-next-steps#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/credit-card-legal-notice-process-next-steps#product",
        "name": "Credit Card Notice Defense & Settlement",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert legal help to reply to credit card legal notices, defend against summons, and negotiate a favorable settlement.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1045",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikas S." },
            "datePublished": "2024-02-10",
            "reviewBody": "I panicked when I received summons for credit card default. SettleLoans stepped in, replied legally, and settled my 5 Lakh debt for just 1.5 Lakhs out of court.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Ananya P." },
            "datePublished": "2024-03-05",
            "reviewBody": "The bank's lawyers were threatening me with arrest. The legal team at SettleLoans explained it was a civil matter, sent a strong reply, and stopped the harassment.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rohan M." },
            "datePublished": "2024-04-12",
            "reviewBody": "A fake arbitration notice had me completely terrified. They identified it as a fake pressure tactic and helped me complain to the RBI.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Kavita R." },
            "datePublished": "2024-05-20",
            "reviewBody": "Excellent drafting of the reply to my credit card legal notice. It bought me 6 months of time to arrange funds without going to court.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
             "@type": "Review",
             "author": { "@type": "Person", "name": "Amit T." },
             "datePublished": "2024-06-15",
             "reviewBody": "I had 3 different cards defaulting. SettleLoans handled all legal notices simultaneously and brought all banks to the negotiation table.",
             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/credit-card-legal-notice-process-next-steps#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I go to jail for a credit card default in India?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. A credit card default is a civil dispute, not a criminal offense. You cannot be arrested simply for not being able to pay your credit card bill." }
          },
          {
            "@type": "Question",
            "name": "How to reply to a credit card legal notice?",
            "acceptedAnswer": { "@type": "Answer", "text": "You should hire a lawyer to draft a formal response addressing the claims, challenging inflated penal interest, and expressing a willingness to settle amicably." }
          },
          {
            "@type": "Question",
            "name": "What happens if I ignore the legal notice?",
            "acceptedAnswer": { "@type": "Answer", "text": "Ignoring a legitimate notice allows the bank to file a civil recovery suit (Section 37 of CPC) or initiate arbitration proceedings entirely in your absence (ex-parte)." }
          },
          {
            "@type": "Question",
            "name": "What should I do if I received summons for a credit card?",
            "acceptedAnswer": { "@type": "Answer", "text": "If you receive court summons, you or your lawyer must appear before the court on the specified date. Failing to appear can lead to an ex-parte decree against you." }
          },
          {
            "@type": "Question",
            "name": "Is legal action for credit card default common?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, for larger default amounts (typically above ₹1-2 Lakhs), banks frequently initiate arbitration or file civil recovery suits to obtain a legal decree." }
          },
          {
            "@type": "Question",
            "name": "Are WhatsApp legal notices valid?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, under the IT Act, legal notices and summons delivered via WhatsApp or Email are considered legally valid forms of service in India." }
          },
          {
            "@type": "Question",
            "name": "What is an arbitration notice for a credit card?",
            "acceptedAnswer": { "@type": "Answer", "text": "It is a private dispute resolution mechanism mentioned in your card terms. An arbitrator is appointed to pass an award, which acts like a court decree." }
          },
          {
            "@type": "Question",
            "name": "Can recovery agents come to my house with police?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. Recovery agents have no police authority. Police do not get involved in civil debt recovery unless there is a clear case of fraud (Section 420)." }
          },
          {
            "@type": "Question",
            "name": "Can I negotiate a settlement after receiving a legal notice?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Receiving a legal notice is often the best time to negotiate a One-Time Settlement (OTS), as banks prefer avoiding lengthy court battles." }
          },
          {
            "@type": "Question",
            "name": "How can I verify if a legal notice is fake?",
            "acceptedAnswer": { "@type": "Answer", "text": "Check for a valid advocate's enrollment number, physical office address, court stamp, and avoid notices that threaten immediate police arrest, which are usually fake." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "the-initial-shock", title: "The Initial Shock: Receiving a Legal Notice" },
    { id: "understanding-the-notice", title: "Understanding the Notice: Real or Fake?" },
    { id: "legal-action-default", title: "Legal Action for Credit Card Default: What Can Happen?" },
    { id: "step-by-step-reply", title: "Step-by-Step: How to Reply to Credit Card Legal Notice" },
    { id: "received-summons", title: "Received Summons for Credit Card: Court Procedures" },
    { id: "negotiating-settlement", title: "Negotiating a Settlement" },
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
              Credit Card Defense Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Credit Card Legal Notice Process & <span className="text-[#1F5EFF]">Next Steps</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Just received a heavy legal notice from your credit card company? Don't ignore it. Follow these exact steps to reply, handle summons, and protect yourself from aggressive legal action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Get Legal Help Now
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
                <li className="font-bold text-[#2E2E2E]">Credit Card Legal Notice Process</li>
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

            <section id="the-initial-shock" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Initial Shock: Receiving a Legal Notice
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Falling into a credit card debt trap is overwhelmingly common. What starts as a missed minimum payment quickly snowballs due to exorbitant interest rates (upwards of 36-42% annually) and relentless late fees.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  When you stop paying entirely, the bank's collection machinery activates. The phone calls begin, followed by emails, and eventually—a formal legal notice lands at your doorstep or in your WhatsApp inbox.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  <strong>The most crucial advice: Do not panic, but do not ignore it either.</strong> A legal notice is a formal communication, but it is not a police arrest warrant. It is the beginning of a civil legal process that you can manage and negotiate your way out of.
                </p>
              </div>
            </section>

            <section id="understanding-the-notice" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Understanding the Notice: Real or Fake?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Banks and their recovery agencies frequently use "scare tactics" by sending fake legal notices designed to look like official court documents. You need to distinguish between a real lawyer's notice and a fake agency threat.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Signs of a Fake Notice</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Threatens immediate police arrest, lacks an advocate's Bar Council enrollment number, has grammatical errors, or mentions fabricated sections of the IPC (Indian Penal Code) like Section 420 for simple default.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Signs of a Real Notice</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Sent on the official letterhead of an advocate/law firm, references the exact credit card agreement, clearly states a civil dispute, and gives a standard 7, 14, or 30 days to reply or clear the dues.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>Important:</strong> Whether sent via physical Speed Post, Email, or WhatsApp, a genuine legal notice is considered legally served under the IT Act. Deleting the message does not make it disappear legally.
                </p>
              </div>
            </section>
            
            <section id="legal-action-default" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Legal Action for Credit Card Default: What Can Happen?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If the notice is genuine and ignored, the bank will escalate the matter. Understanding the actual legal action for credit card default takes away the fear of the unknown.
              </p>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Civil Suit (Order 37 of CPC)</h4>
                <p className="text-red-900 leading-relaxed mb-4">
                  The bank may file a civil suit for recovery of money. Order 37 is a summary suit where the court fast-tracks the process. If you don't file a "leave to defend" (permission to fight the case) within 10 days of receiving summons, the court may automatically pass a decree against you.
                </p>
                <h4 className="text-xl font-black text-red-700 mb-3">Arbitration Proceedings</h4>
                <p className="text-red-900 leading-relaxed">
                  Most credit card agreements contain an arbitration clause. The bank will appoint a private arbitrator who acts like a judge. Ignoring arbitration notices leads to an ex-parte (one-sided) award against you, which can later be enforced to attach your assets.
                </p>
              </div>
            </section>

            <section id="step-by-step-reply" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Step-by-Step: How to Reply to Credit Card Legal Notice
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Knowing how to reply to a credit card legal notice is your strongest defense. A solid reply puts the brakes on aggressive legal action and signals to the bank that you are not an easy target.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Hire an Advocate</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Do not reply yourself via email. A legal notice must be countered with a legal reply sent by an advocate on their official letterhead. It shows the bank you are legally represented.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Dispute Inflated Charges</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Your lawyer will challenge the "principal amount" vs. "penal interest." Banks often inflate a ₹1 Lakh default to ₹3 Lakhs with compound interest. Your reply should demand a clear statement of accounts separating the actual spend from the late fees.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">State Hardship & Offer Settlement</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If you lost your job or faced a medical emergency, the reply should formally state this hardship. It should express a willingness to resolve the matter amicably through a One-Time Settlement (OTS) rather than protracted litigation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="received-summons" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Received Summons for Credit Card: Court Procedures
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If the bank has already bypassed the notice stage or you ignored the notice, you might receive a formal court summons. <strong>If you have received summons for credit card default, the situation is legally critical.</strong>
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Mandatory Appearance</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  A summons is a direct order from a judge or arbitrator. You cannot ignore it.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Do not hide:</strong> If you fail to appear, the court will pass an <em>ex-parte</em> order in favor of the bank.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Lawyer representation:</strong> You do not necessarily have to go personally on the first date; your advocate can appear on your behalf (file a Vakalatnama) and seek time to file a written statement.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Mediation:</strong> Judges often refer credit card disputes to Lok Adalat or Mediation centers, which is the perfect environment to negotiate a massive discount on your debt.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="negotiating-settlement" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Negotiating a Settlement
              </h2>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  The ultimate goal of a legal notice for the bank is not to fight a 5-year court battle; it is to force you to pay. Banks know that unsecured debt recovery through courts is tedious and expensive.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  By replying legally and showing you will fight back, you shift the power dynamic. A strong legal defense often forces the bank to offer a One-Time Settlement (OTS), sometimes waiving up to 70% of the total outstanding amount. A legal expert can help you negotiate the principal down and completely write off the penal interest.
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
                      VS
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Vikas S.</h4>
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
                    "I panicked when I received summons for credit card default. SettleLoans stepped in, replied legally, and settled my 5 Lakh debt for just 1.5 Lakhs out of court."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Debt: 5 Lakhs</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Settled: 1.5 Lakhs</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      AP
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Ananya P.</h4>
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
                    "The bank's lawyers were threatening me with arrest. The legal team at SettleLoans explained it was a civil matter, sent a strong reply, and stopped the harassment."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Action: Legal Defense</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Harassment Stopped</span>
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
              <h3 className="text-3xl font-black mb-6 relative z-10">Stop the Harassment Now</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Just received a heavy legal notice from your credit card company? Don't ignore it. Follow these next steps to protect yourself. Our expert lawyers can draft a powerful reply and negotiate a massive discount on your debt.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Talk to a Lawyer Today
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The legal information provided is for educational purposes and should not be construed as formal legal advice. Always consult with a practicing advocate regarding specific facts of your case.
              </p>
            </div>

          </article>

          {/* Right Column: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">Legal Notice Ignored?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  Delaying your reply can lead to an ex-parte court decree against you. Reply professionally today.
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
                    <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Notice for Loan Default
                    </Link>
                  </li>
                  <li>
                    <Link href="/received-lok-adalat-notice-for-loan-default-what-should-borrowers-do" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Lok Adalat Notice Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/can-i-go-to-jail-for-loan-default-in-india" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Can You Go to Jail?
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
