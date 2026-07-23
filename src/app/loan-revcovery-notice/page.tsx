import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Loan Recovery Notice Reply: Spot Fakes & Know When to Ignore",
  description: "Received a terrifying loan recovery notice? Learn how to verify if it's a fake recovery notice, when you can ignore a bank legal notice, and how to reply legally.",
  alternates: {
    canonical: "https://settleloans.in/loan-revcovery-notice",
  },
};

export default function LoanRecoveryNoticePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/loan-revcovery-notice#webpage",
        "url": "https://settleloans.in/loan-revcovery-notice",
        "name": "Loan Recovery Notice Reply: Spot Fakes & Know When to Ignore",
        "description": "Received a terrifying loan recovery notice via WhatsApp or Post? Don't panic. Learn how to verify if it's real and how to reply legally.",
        "breadcrumb": { "@id": "https://settleloans.in/loan-revcovery-notice#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/loan-revcovery-notice#breadcrumb",
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
            "name": "Loan Recovery Notice Guide",
            "item": "https://settleloans.in/loan-revcovery-notice"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/loan-revcovery-notice#article",
        "headline": "Loan Recovery Notice Reply: Spot Fakes & Know When to Ignore",
        "description": "Step-by-step legal guide on drafting a loan recovery notice reply, identifying fake recovery notices, and handling illegal bank legal notices.",
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
        "mainEntityOfPage": { "@id": "https://settleloans.in/loan-revcovery-notice#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/loan-revcovery-notice#product",
        "name": "Legal Notice Reply & Defense Services",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert legal services to analyze, verify, and reply to loan recovery notices from banks, NBFCs, or fake loan apps.",
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
            "datePublished": "2024-03-12",
            "reviewBody": "Received a WhatsApp notice with a police logo threatening arrest. The legal team instantly verified it was a fake recovery notice and helped me block the scammers.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anita R." },
            "datePublished": "2024-04-05",
            "reviewBody": "My bank sent a harsh legal notice after 3 missed EMIs. SettleLoans drafted a professional loan recovery notice reply that completely stopped the daily harassment calls.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajiv M." },
            "datePublished": "2024-05-22",
            "reviewBody": "Got a notice saying my property would be seized for a personal loan default. The lawyer advised me to ignore this illegal bank legal notice as it had no legal standing. Huge relief!",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya D." },
            "datePublished": "2024-06-18",
            "reviewBody": "I was panicking over an arbitation notice for my credit card. The team replied legally, forcing the bank to offer a 60% settlement instead of dragging me to court.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
             "@type": "Review",
             "author": { "@type": "Person", "name": "Karan K." },
             "datePublished": "2024-07-30",
             "reviewBody": "Excellent service. They identified the arbitration notice as a pressure tactic. We sent a strong reply and the bank backed down immediately.",
             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/loan-revcovery-notice#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a loan recovery notice?",
            "acceptedAnswer": { "@type": "Answer", "text": "It is a formal communication, usually drafted by an advocate on behalf of a bank or NBFC, demanding repayment of outstanding dues before initiating civil legal action." }
          },
          {
            "@type": "Question",
            "name": "How can I identify a fake recovery notice sent via WhatsApp?",
            "acceptedAnswer": { "@type": "Answer", "text": "Fake notices often use generic WhatsApp numbers, contain threatening language like 'Arrest Warrant' or 'Police FIR', have spelling mistakes, and demand payment to personal UPI IDs or unauthorized links." }
          },
          {
            "@type": "Question",
            "name": "Can I legally ignore a bank legal notice?",
            "acceptedAnswer": { "@type": "Answer", "text": "You should never ignore a genuine legal notice from a registered advocate. However, you can ignore fake recovery notices from unregistered loan apps or notices making illegal threats (like attaching property for a personal loan)." }
          },
          {
            "@type": "Question",
            "name": "What happens if I don't reply to a genuine loan recovery notice?",
            "acceptedAnswer": { "@type": "Answer", "text": "Failing to reply may lead the bank to assume you accept the debt and its terms. It gives them a stronger case to proceed with arbitration or file a civil recovery suit in court." }
          },
          {
            "@type": "Question",
            "name": "How much time do I have to send a loan recovery notice reply?",
            "acceptedAnswer": { "@type": "Answer", "text": "Most legal notices stipulate a 7 to 14-day window for a reply. It's crucial to consult a lawyer and send a drafted reply within this timeframe." }
          },
          {
            "@type": "Question",
            "name": "Is a notice sent by email or WhatsApp legally valid?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, Indian courts recognize notices sent via email and WhatsApp (with blue ticks) as legally valid delivery, provided they are sent by authorized representatives." }
          },
          {
            "@type": "Question",
            "name": "What should a loan recovery notice reply contain?",
            "acceptedAnswer": { "@type": "Answer", "text": "A strong reply should deny baseless allegations, cite your financial hardship, request restructuring or settlement, and warn the bank against using illegal recovery harassment tactics." }
          },
          {
            "@type": "Question",
            "name": "Can a fake recovery agent actually arrest me?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolutely not. Loan default is a civil dispute, not a criminal offense. Recovery agents have no police powers, and the police cannot arrest you for not paying an EMI." }
          },
          {
            "@type": "Question",
            "name": "Should I hire a lawyer to draft a reply?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. A reply drafted on an advocate's letterhead carries significant legal weight, signals to the bank that you know your rights, and often forces them to negotiate rather than litigate." }
          },
          {
            "@type": "Question",
            "name": "What to do if the notice threatens criminal action (Section 420) for a personal loan?",
            "acceptedAnswer": { "@type": "Answer", "text": "This is a common intimidation tactic. Unless you submitted forged documents to get the loan, failing to pay due to job loss or business failure does not constitute cheating (Section 420). A lawyer can easily shut down this threat in the reply." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "intro", title: "The Reality of Loan Recovery Notices" },
    { id: "spot-fake", title: "How to Spot a Fake Recovery Notice" },
    { id: "when-to-ignore", title: "Can You Ignore a Bank Legal Notice?" },
    { id: "how-to-reply", title: "Drafting a Loan Recovery Notice Reply" },
    { id: "criminal-threats", title: "Dealing with Empty Criminal Threats" },
    { id: "actionable-steps", title: "Immediate Steps to Take" },
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
              Legal Defense Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Received a Legal Notice? <span className="text-[#1F5EFF]">Don't Panic.</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Received a terrifying loan recovery notice via WhatsApp or Post? Learn how to verify if it's real, when to ignore it, and how to reply legally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Get Your Notice Reviewed Now
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
                <li className="font-bold text-[#2E2E2E]">Loan Recovery Notice</li>
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

            <section id="intro" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Reality of Loan Recovery Notices
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Finding a legal notice in your mailbox or receiving a PDF via WhatsApp with a red "URGENT" stamp can cause immense anxiety. Lenders and third-party recovery agencies design these notices specifically to instill fear and force immediate payment.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  However, not every piece of paper with the word "Legal" on it holds actual power in a court of law. The landscape of debt collection in India is filled with a mix of genuine legal summons and outright <strong>fake recovery notices</strong> created by scammers or aggressive collection agencies acting illegally.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Your first step is to stop panicking. A loan default is a civil dispute, not a crime. By understanding how to verify the authenticity of a notice and drafting a strong <strong>loan recovery notice reply</strong>, you can turn the tables and protect your rights.
                </p>
              </div>
            </section>

            <section id="spot-fake" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Spot a Fake Recovery Notice
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                With the rise of instant digital loan apps, there has been a massive surge in fraudulent legal notices. Scammers use these to extort money from unsuspecting borrowers. Here is how you can easily identify them.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Fake Police / Court Logos</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A genuine bank legal notice is sent on an advocate's letterhead. If the notice features logos of the CBI, State Police, Supreme Court, or RBI, it is 100% fake. The police do not send loan recovery notices.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Demand for UPI Payments</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Real notices demand payment to your official loan account. If the notice asks you to transfer money to a specific mobile number via GPay/PhonePe or to a personal bank account, it is a scam.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Absurd Criminal Threats</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Notices that threaten immediate arrest within 2 hours, use words like "Arrest Warrant Issued," or claim your family will be jailed for a personal loan default are entirely fabricated to cause panic.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Unregistered WhatsApp Numbers</h4>
                  <p className="text-gray-700 leading-relaxed">
                    While banks do send notices via WhatsApp, they use official business accounts. If a notice comes from an unknown, unverified number with a generic profile picture, treat it with extreme suspicion.
                  </p>
                </div>
              </div>
            </section>

            <section id="when-to-ignore" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Can You Ignore a Bank Legal Notice?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The general rule of thumb in law is that you should never ignore a genuine legal notice. However, there are specific scenarios where ignoring or pushing back against a bank legal notice is the right move.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">When a Notice is Invalid</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  A notice may be on official letterhead but still carry zero legal weight if it makes illegal threats. For example:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Threatening Property Attachment for Unsecured Loans:</strong> Banks cannot seize your house or car for defaulting on a personal loan or credit card without a long, complex court trial resulting in a decree. Notices threatening immediate seizure for unsecured debt are intimidation tactics.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Time-Barred Debts:</strong> If you haven't made a payment or acknowledged the debt in over 3 years, the debt is considered "time-barred" under the Limitation Act. The bank has lost its right to recover via courts, making their legal notice toothless.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>Why you shouldn't ignore a genuine notice:</strong> If you ignore a valid demand notice, the bank will use your silence as proof that you accept the debt amount and have no defense. This makes it incredibly easy for them to win an ex-parte order in Arbitration or a civil court.
                </p>
              </div>
            </section>

            <section id="how-to-reply" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Drafting a Strong Loan Recovery Notice Reply
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                A well-drafted <strong>loan recovery notice reply</strong> is your strongest shield. It shifts the dynamic from the bank bullying you, to the bank realizing you know your rights and are prepared to defend yourself.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Engage a Legal Professional</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      While you can reply yourself, a reply sent on an Advocate's letterhead is taken far more seriously. It immediately stops lower-level recovery agents from harassing you, as they know legal counsel is involved.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Deny Baseless Allegations</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The reply must systematically deny any exaggerated claims, inflated interest calculations, or false accusations of fraud made by the bank's lawyer in their notice.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">State Your Genuine Hardship</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Clearly document the genuine reasons for default—such as job loss, medical emergencies, or business failure. This proves there is no "wilful default" or malintent.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Propose a Solution</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      End the reply by proposing a constructive path forward, such as requesting a loan restructuring, an EMI moratorium, or initiating a One Time Settlement (OTS) discussion on your terms.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="criminal-threats" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Dealing with Empty Criminal Threats
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The most terrifying part of a legal notice is when it references sections of the Indian Penal Code (IPC), specifically Section 420 (Cheating) or Section 406 (Criminal Breach of Trust).
              </p>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Why You Will Not Go To Jail</h4>
                <p className="text-red-900 leading-relaxed">
                  The Supreme Court of India has firmly established that a simple failure to repay a loan is a breach of contract (a civil dispute). Unless the bank can prove you took the loan using forged documents (like fake salary slips) from day one, there is no criminal offense. A strong legal reply will remind the bank's advocate that filing a false FIR amounts to malicious prosecution, for which you will hold them liable.
                </p>
              </div>
            </section>

            <section id="actionable-steps" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Immediate Steps to Take
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If you have just received a notice, follow this checklist to secure your position.
              </p>
              
              <div className="bg-white p-8 border border-[#DEDEDE] rounded-2xl shadow-sm mb-8">
                <h4 className="text-xl font-bold mb-4 text-[#2E2E2E] underline">Your Defense Checklist</h4>
                <ul className="text-sm space-y-3 font-medium list-none text-gray-700">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>1. Note the Timeline:</strong> Check the date of receipt. You typically have 7 to 15 days to reply. Do not delay.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>2. Verify Authenticity:</strong> Check for the advocate's enrollment number and real bank letterheads. Look out for UPI demands or absurd threats.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>3. Do NOT Make Partial Payments:</strong> Avoid paying small token amounts out of panic without a formal settlement agreement, as this restarts the limitation period.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>4. Consult a Lawyer:</strong> Get the notice reviewed by a debt defense expert to draft a robust, customized reply.</li>
                </ul>
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
                    "Received a WhatsApp notice with a police logo threatening arrest. The legal team instantly verified it was a fake recovery notice and helped me block the scammers."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Issue: Fake Notice</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Scammers Blocked</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      AR
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Anita R.</h4>
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
                    "My bank sent a harsh legal notice after 3 missed EMIs. SettleLoans drafted a professional loan recovery notice reply that completely stopped the daily harassment calls."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Notice Type: Bank Demand</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Harassment Paused</span>
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
              <h3 className="text-3xl font-black mb-6 relative z-10">Don't Let Them Intimidate You Legally</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Not sure if your notice is real? Need a strong legal reply to protect your rights and stop harassment? Let our expert advocates handle it for you.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Consult a Defense Lawyer
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The legal information provided is for educational purposes and should not be construed as formal legal advice. Always consult with a practicing advocate regarding specific facts of your case before replying to a legal notice.
              </p>
            </div>

          </article>

          {/* Right Column: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">Notice Deadline Expiring?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  Delaying your reply can cost you your defense. Have an expert draft your reply within 24 hours.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] w-full py-3 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors relative z-10">
                  Draft My Reply
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Legal Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/how-to-identify-fake-recovery-agents" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Identify Fake Agents
                    </Link>
                  </li>
                  <li>
                    <Link href="/bank-arbitration-notice-loan" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Arbitration Notice Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/can-i-go-to-jail-for-loan-default-in-india" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Jail for Loan Default?
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
