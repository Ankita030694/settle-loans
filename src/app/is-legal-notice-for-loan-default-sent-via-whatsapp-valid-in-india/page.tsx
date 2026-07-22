import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Is a Legal Notice Sent via WhatsApp Valid for Loan Defaults?",
  description: "Received a fake FIR copy on WhatsApp from a recovery agent? Understand the validity of a digital legal notice and WhatsApp summons for loan default in India.",
  alternates: {
    canonical: "https://settleloans.in/is-legal-notice-for-loan-default-sent-via-whatsapp-valid-in-india",
  },
};

export default function WhatsAppLegalNoticePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/is-legal-notice-for-loan-default-sent-via-whatsapp-valid-in-india#webpage",
        "url": "https://settleloans.in/is-legal-notice-for-loan-default-sent-via-whatsapp-valid-in-india",
        "name": "Is a Legal Notice Sent via WhatsApp Valid for Loan Defaults in India?",
        "description": "Learn when a bank sent legal notice on WhatsApp is valid versus when it is a fake FIR copy or fake WhatsApp summons used by recovery agents for extortion.",
        "breadcrumb": { "@id": "https://settleloans.in/is-legal-notice-for-loan-default-sent-via-whatsapp-valid-in-india#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/is-legal-notice-for-loan-default-sent-via-whatsapp-valid-in-india#breadcrumb",
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
            "name": "WhatsApp Legal Notice Validity",
            "item": "https://settleloans.in/is-legal-notice-for-loan-default-sent-via-whatsapp-valid-in-india"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/is-legal-notice-for-loan-default-sent-via-whatsapp-valid-in-india#article",
        "headline": "Is a Legal Notice Sent via WhatsApp Valid for Loan Defaults in India?",
        "description": "Addresses the rampant tactic where recovery agents send fake police complaints or aggressive 'legal notices' via WhatsApp to intimidate borrowers.",
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
        "mainEntityOfPage": { "@id": "https://settleloans.in/is-legal-notice-for-loan-default-sent-via-whatsapp-valid-in-india#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/is-legal-notice-for-loan-default-sent-via-whatsapp-valid-in-india#product",
        "name": "Legal Action Against Fake WhatsApp Notices",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Stop harassment from recovery agents sending fake FIRs and illegal summons on WhatsApp. Expert legal help to protect you.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "2100",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul P." },
            "datePublished": "2024-01-10",
            "reviewBody": "A recovery agent sent a fake FIR copy on WhatsApp. The SettleLoans team immediately took action and stopped the harassment.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sneha K." },
            "datePublished": "2024-02-22",
            "reviewBody": "I got a WhatsApp summons for a loan default. I was terrified until they showed me it was forged. Incredible support!",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit V." },
            "datePublished": "2024-03-15",
            "reviewBody": "The lawyers helped me understand the validity of a digital legal notice and took the recovery agents to task for forgery.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram D." },
            "datePublished": "2024-04-05",
            "reviewBody": "Bank sent a legal notice on WhatsApp, followed by threats. This team filed a counter-complaint and settled the issue peacefully.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Neha R." },
            "datePublished": "2024-05-18",
            "reviewBody": "I received an 'arrest warrant' on WhatsApp. Their legal team acted swiftly. 99% of these are fake, and they proved it.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/is-legal-notice-for-loan-default-sent-via-whatsapp-valid-in-india#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is a bank sent legal notice on WhatsApp legally valid in India?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, under the IT Act, a digital legal notice sent via WhatsApp can be valid if the blue tick shows it was read. However, it must be sent by an authorized court, lawyer, or bank official, not an aggressive recovery agent." }
          },
          {
            "@type": "Question",
            "name": "I received a fake FIR copy on WhatsApp from a recovery agent. What should I do?",
            "acceptedAnswer": { "@type": "Answer", "text": "Do not panic. 99% of these are forged documents used for intimidation. You should immediately report the number to the police for forgery and criminal intimidation." }
          },
          {
            "@type": "Question",
            "name": "Can police send an arrest warrant on WhatsApp for a loan default?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. A loan default is a civil dispute. The police do not send arrest warrants on WhatsApp. Any such document is a blatant forgery." }
          },
          {
            "@type": "Question",
            "name": "What is the validity of a digital legal notice under the IT Act?",
            "acceptedAnswer": { "@type": "Answer", "text": "Section 4 of the Information Technology Act recognizes electronic records. If a notice is sent via WhatsApp with a clear intent to serve and is delivered (blue tick), it is considered validly served, provided it originates from a legitimate legal authority." }
          },
          {
            "@type": "Question",
            "name": "Are WhatsApp summons for loan default real?",
            "acceptedAnswer": { "@type": "Answer", "text": "Courts in India have allowed summons via WhatsApp in specific urgent cases, but these are sent by the court registry or an authorized lawyer. A recovery agent cannot issue a legal summons." }
          },
          {
            "@type": "Question",
            "name": "How can I verify if a legal notice sent on WhatsApp is genuine?",
            "acceptedAnswer": { "@type": "Answer", "text": "Check for the lawyer's enrollment number, the official seal, and contact the lawyer's office directly to verify. Do not pay any money to the account mentioned in a suspicious notice." }
          },
          {
            "@type": "Question",
            "name": "Can a recovery agent be arrested for sending a fake FIR?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Sending a forged FIR or court summons is a serious criminal offense under the Indian Penal Code (forgery and extortion). The agent and the agency can be prosecuted." }
          },
          {
            "@type": "Question",
            "name": "Should I reply to a WhatsApp legal notice?",
            "acceptedAnswer": { "@type": "Answer", "text": "If it is a genuine legal notice from an advocate, you must reply within the stipulated time (usually 15 days). If it is a fake notice from a recovery agent, consult a lawyer to file a harassment complaint." }
          },
          {
            "@type": "Question",
            "name": "Does the RBI allow sending legal notices on WhatsApp?",
            "acceptedAnswer": { "@type": "Answer", "text": "The RBI mandates fair practices. While digital communication is allowed, using WhatsApp to send fake legal documents or harass borrowers is a severe violation of RBI guidelines." }
          },
          {
            "@type": "Question",
            "name": "What should I do if recovery agents share a fake legal notice with my contacts?",
            "acceptedAnswer": { "@type": "Answer", "text": "This is a grave breach of privacy and cyber harassment. You must file a cybercrime complaint immediately, as loan apps and recovery agents are not legally permitted to access or contact your phonebook." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "the-whatsapp-threat", title: "The WhatsApp Threat" },
    { id: "validity-of-digital-notice", title: "Validity of a Digital Notice" },
    { id: "fake-fir-copy", title: "Spotting a Fake FIR Copy" },
    { id: "whatsapp-summons", title: "WhatsApp Summons for Default" },
    { id: "rbi-guidelines", title: "RBI Guidelines on Digital Harassment" },
    { id: "how-to-verify", title: "How to Verify a Genuine Notice" },
    { id: "legal-action", title: "Taking Action Against Forgery" },
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
              Legal Rights & Protection
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Is a Legal Notice Sent via WhatsApp Valid for <span className="text-[#1F5EFF]">Loan Defaults?</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Addresses the rampant tactic where recovery agents send fake police complaints or aggressive "legal notices" via WhatsApp to intimidate borrowers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Verify Your WhatsApp Notice
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
                <li className="font-bold text-[#2E2E2E]">WhatsApp Legal Notice Validity</li>
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

            <section id="the-whatsapp-threat" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The WhatsApp Harassment Tactic
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  In today's digital age, communication is instantaneous. However, some loan recovery agents have twisted this convenience into a tool for intimidation. A common tactic involves sending a <strong>bank sent legal notice on WhatsApp</strong>, often accompanied by threats of immediate arrest or police action.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Borrowers facing financial difficulties are frequently bombarded with these digital documents. It is crucial to differentiate between a legitimate legal notice and a blatant extortion attempt masquerading as legal action.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Many of these messages contain forged documents, such as a <strong>fake FIR copy on WhatsApp from a recovery agent</strong> or a fake arrest warrant, designed solely to induce panic. Knowing your legal rights is your strongest defense against this harassment.
                </p>
              </div>
            </section>

            <section id="validity-of-digital-notice" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Validity of a Digital Legal Notice
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Under the Information Technology (IT) Act of 2000, digital communications hold legal weight. But does that mean every WhatsApp message is a binding legal document?
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">When It Is Valid</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A digital notice is valid if it originates from a verifiable source—such as a registered advocate representing the bank—and clearly states the legal grounds (e.g., Section 138 of the NI Act). The "blue tick" can serve as proof of delivery (service of notice) in a court of law.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">When It Is Invalid</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A notice is entirely invalid if it is sent by a recovery agent without legal authority, lacks a lawyer's enrollment number, or threatens non-existent criminal actions (like immediate arrest for an unsecured personal loan).
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>The Bottom Line:</strong> The medium (WhatsApp) can be legally valid for serving a notice, but the <em>content and the sender</em> determine if the notice itself has any actual legal standing.
                </p>
              </div>
            </section>

            <section id="fake-fir-copy" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Spotting a Fake FIR Copy on WhatsApp
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Receiving an FIR copy on WhatsApp is terrifying, but it is one of the most common bluffs used by recovery agents. Here is why you shouldn't panic:
              </p>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Loan Default is a Civil Issue</h4>
                <p className="text-red-900 leading-relaxed">
                  Defaulting on a loan (personal loan, credit card) is a civil breach of contract, not a criminal offense. The police cannot register an FIR against you simply for failing to pay an EMI. Therefore, any FIR claiming you are wanted for loan default is mathematically a forgery.
                </p>
              </div>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Check the Seals and Stamps</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Fake FIRs often use pixelated, copy-pasted government logos. Genuine FIRs have specific formats, station house officer (SHO) signatures, and official seals that are clearly legible.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Absurd Criminal Charges</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Recovery agents often list sections like 420 (Cheating) on the fake FIR. Mere inability to pay does not constitute cheating unless you took the loan with a pre-planned intent to defraud, which requires a complex trial to prove.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="whatsapp-summons" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                WhatsApp Summons for Loan Default
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                During the COVID-19 pandemic, the Supreme Court allowed the service of summons and notices through email and instant messaging apps like WhatsApp. However, recovery agents have severely misused this ruling.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">How Real Summons Work</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">A genuine summons is issued by a court of law, not a bank's call center.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">It will bear a specific Case Number (e.g., CC/123/2023) that you can verify online on the eCourts portal.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">It directs you to appear before a Magistrate on a specific date; it does NOT ask you to pay money to a specific UPI ID to "cancel the warrant."</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="rbi-guidelines" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                RBI Guidelines on Digital Harassment
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The Reserve Bank of India has strict Fair Practices Codes regarding debt recovery. Using WhatsApp to send forged documents, fake legal notices, or threatening messages is a severe violation of these guidelines.
              </p>
              <div className="bg-white p-8 border border-[#DEDEDE] rounded-2xl shadow-sm mb-8">
                <h4 className="text-xl font-bold mb-4 text-[#2E2E2E] underline">Prohibited Recovery Tactics</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Banks and NBFCs are strictly prohibited from resorting to intimidation or harassment. Sending a fake FIR copy on WhatsApp from a recovery agent falls squarely under illegal harassment.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers have the right to file complaints with the RBI Ombudsman against banks or NBFCs whose agents engage in such digital extortion tactics.
                </p>
              </div>
            </section>

            <section id="how-to-verify" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Verify a Genuine Notice
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Before you panic, take these steps to verify the validity of a digital legal notice:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">1. Check the Lawyer's Credentials</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A real notice will have the lawyer's name and Bar Council Enrollment Number. You can verify this number online or by calling the respective state Bar Council.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">2. Call the Advocate's Office</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Search for the lawyer's office on Google and call their listed landline number. Ask them to confirm if they dispatched the notice bearing your name.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">3. Verify Court Case Numbers</h4>
                  <p className="text-gray-700 leading-relaxed">
                    If the message claims to be a summons, ask for the case number and court details. Check the official eCourts Services app to see if a case actually exists against you.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">4. Look for Language Errors</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Fake notices sent by recovery agents are often riddled with grammatical errors, unprofessional language, and exaggerated threats.
                  </p>
                </div>
              </div>
            </section>

            <section id="legal-action" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Taking Legal Action Against Forgery
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Sending a fake FIR or a forged court summons is a serious crime under the Indian Penal Code (IPC).
              </p>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <ul className="text-sm space-y-3 font-medium list-none text-gray-700">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>Forgery (Section 468 & 471 IPC):</strong> Using a forged document as genuine is punishable by imprisonment.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>Extortion (Section 383 IPC):</strong> Putting a person in fear of injury (or false criminal charges) to extract money is extortion.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>What You Should Do:</strong> Preserve the WhatsApp chats, take screenshots, and file a formal complaint with the Cyber Crime cell or local police station against the phone number and the bank.</li>
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
                      RP
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Rahul P.</h4>
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
                    "A recovery agent sent a fake FIR copy on WhatsApp. The legal team immediately verified it was forged and sent a strong legal notice. The calls stopped the next day."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Loan Amount: ₹3,50,000</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Settled For: ₹90,000</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      SK
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Sneha K.</h4>
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
                    "I got a WhatsApp summons for a loan default. I was terrified until SettleLoans lawyers showed me it was fake. They handled the bank directly."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Loan Amount: ₹5,00,000</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Settled For: ₹1,50,000</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {(jsonLd["@graph"][4] as any)?.mainEntity?.map((faq: any, index: number) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-[#2E2E2E] mb-2">{faq.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-6">Received a Suspicious WhatsApp Notice?</h3>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  Did a recovery agent just WhatsApp you an "Arrest Warrant" or a "Police FIR" for your loan default? 99% of these are fake and illegal. Let our legal team analyze the document and take action against the harassment.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform text-lg shadow-lg">
                  Verify the Notice Now
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational purposes only and does not constitute legal advice. Always consult a qualified advocate for your specific case.
              </p>
            </div>

          </article>

          {/* Right Column: Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              {/* Card 1: Dark CTA */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-2xl font-black mb-4 relative z-10">Stop the Harassment</h4>
                <p className="text-gray-300 text-sm mb-6 relative z-10">
                  Don't fall for fake WhatsApp notices. Get expert legal protection today.
                </p>
                <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-600 transition-colors relative z-10">
                  Get Legal Help
                </Link>
              </div>

              {/* Card 2: White Resources */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Related Topics
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/how-to-stop-loan-recovery-harassment" className="text-gray-700 hover:text-[#1F5EFF] flex items-center group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Stop Recovery Harassment
                    </Link>
                  </li>
                  <li>
                    <Link href="/police-case-for-credit-card-debt" className="text-gray-700 hover:text-[#1F5EFF] flex items-center group transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Credit Card Debt Police Case
                    </Link>
                  </li>
                  <li>
                    <Link href="/can-i-go-to-jail-for-loan-default-in-india" className="text-gray-700 hover:text-[#1F5EFF] flex items-center group transition-colors">
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
