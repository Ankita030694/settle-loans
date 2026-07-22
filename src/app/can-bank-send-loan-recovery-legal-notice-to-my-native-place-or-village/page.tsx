import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Can the Bank Send a Legal Notice to My Native Place or Village?",
  description: "Learn how to stop banks from sending loan recovery notices or agents to your native village or parents' address, and how to redirect all communication legally.",
  alternates: {
    canonical: "https://settleloans.in/can-bank-send-loan-recovery-legal-notice-to-my-native-place-or-village",
  },
};


const tocItems = [
  { id: "stigma", title: "The Stigma of Native Place Notices" },
  { id: "is-it-legal", title: "Is It Legal for Banks to Send Them?" },
  { id: "types-of-notices", title: "Types of Notices Sent to Villages" },
  { id: "how-to-redirect", title: "How to Redirect Bank Communication" },
  { id: "recovery-agents", title: "Recovery Agents Visiting Your Village" },
  { id: "escalation", title: "When Legal Action Escalates" },
  { id: "success-stories", title: "Real Success Stories" },
  { id: "faqs", title: "Frequently Asked Questions" }
];

export default function NativePlaceNoticePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/can-bank-send-loan-recovery-legal-notice-to-my-native-place-or-village#webpage",
        "url": "https://settleloans.in/can-bank-send-loan-recovery-legal-notice-to-my-native-place-or-village",
        "name": "Can the Bank Send a Legal Notice to My Native Place or Village?",
        "description": "Learn how to stop banks from sending loan recovery notices or agents to your native village or parents' address, and how to redirect all communication legally.",
        "breadcrumb": { "@id": "https://settleloans.in/can-bank-send-loan-recovery-legal-notice-to-my-native-place-or-village#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/can-bank-send-loan-recovery-legal-notice-to-my-native-place-or-village#breadcrumb",
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
            "name": "Bank Notices",
            "item": "https://settleloans.in/legal-notice-for-loan-recovery"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Notice to Native Place",
            "item": "https://settleloans.in/can-bank-send-loan-recovery-legal-notice-to-my-native-place-or-village"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/can-bank-send-loan-recovery-legal-notice-to-my-native-place-or-village#article",
        "headline": "How to Stop Bank Recovery Notices and Agents at Your Native Village",
        "description": "A comprehensive guide on stopping banks from harassing your parents at your permanent address and redirecting legal communication.",
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
        "datePublished": "2024-05-12",
        "dateModified": "2024-05-12",
        "mainEntityOfPage": { "@id": "https://settleloans.in/can-bank-send-loan-recovery-legal-notice-to-my-native-place-or-village#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/can-bank-send-loan-recovery-legal-notice-to-my-native-place-or-village#product",
        "name": "Legal Notice Defense & Communication Redirection Services",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Professional legal services to officially redirect bank communication to a lawyer's office, stopping harassment at your permanent address or native village.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "845",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul M." },
            "datePublished": "2024-02-15",
            "reviewBody": "The bank sent notice to my permanent address in Bihar, causing huge stress for my elderly parents. SettleLoans stepped in and redirected all communication to their law firm. My parents haven't received a letter since.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram S." },
            "datePublished": "2024-03-02",
            "reviewBody": "Recovery agents visiting my native place almost ruined my family's reputation. Once SettleLoans issued a strict legal reply, the agents stopped going to my village.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anjali P." },
            "datePublished": "2024-04-10",
            "reviewBody": "I needed to stop a bank notice to my parents' village immediately. The legal team handled the change of address formally and took over the settlement negotiations.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Suresh T." },
            "datePublished": "2024-04-25",
            "reviewBody": "A highly effective service for anyone facing legal notice for personal loan default in a different state. They shielded my family completely from the recovery tactics.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/can-bank-send-loan-recovery-legal-notice-to-my-native-place-or-village#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can the bank legally send a recovery notice to my native place?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if your native place is listed as your permanent address in your loan application or KYC documents, the bank is legally permitted to send correspondence there."
            }
          },
          {
            "@type": "Question",
            "name": "How can I stop bank notices from going to my parents' village?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You must formally request a change of correspondence address with the bank in writing, providing proof of your current address, or hire a lawyer to redirect all communication to their law firm."
            }
          },
          {
            "@type": "Question",
            "name": "Are recovery agents visiting my native place legal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Agents can visit the address on file if they cannot reach you, but they cannot harass your parents, discuss your debt with neighbors, or cause a public nuisance under RBI guidelines."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I ignore the notice sent to my permanent address?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ignoring a legal notice, regardless of where it is sent, can lead to the bank initiating a civil suit or arbitration proceedings ex-parte (in your absence)."
            }
          },
          {
            "@type": "Question",
            "name": "Can I sue the bank if recovery agents shame my family in our village?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. If agents use abusive language or disclose your debt to third parties (like neighbors in the village), you can file a complaint with the police for harassment and defamation, and approach the RBI Ombudsman."
            }
          },
          {
            "@type": "Question",
            "name": "Will the bank inform the local village police about my loan default?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Loan default is a civil matter. The bank cannot file a standard police FIR against you in your village just for non-payment, unless there is proven fraud or forgery."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can a lawyer stop notices to my native address?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A lawyer can immediately draft and send a formal 'Cease and Desist' and 'Redirection of Communication' notice to the bank, which legally obligates them to route future letters to the lawyer's office."
            }
          },
          {
            "@type": "Question",
            "name": "Does updating my address on Aadhaar automatically update the bank?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, you must submit a specific address change request to your bank along with the updated Aadhaar to ensure notices are sent to the new location."
            }
          },
          {
            "@type": "Question",
            "name": "Can the bank attach my parents' property in the village for my personal loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely not. For an unsecured personal loan, the bank can only target assets in your name. They cannot touch your parents' property or ancestral village home unless you jointly own it."
            }
          },
          {
            "@type": "Question",
            "name": "If the loan is settled, will the bank send a confirmation to my village?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you have not updated your address or redirected communication, the No Dues Certificate (NDC) will be sent to the permanent address on file."
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
              Stop Family Harassment
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Can the Bank Send a Legal Notice to <span className="text-[#1F5EFF]">My Native Place?</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Protect your family's reputation. Learn the legal boundaries of bank correspondence and how to officially redirect recovery notices away from your ancestral village.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Redirect Bank Notices Today
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
                <li><Link href="/legal-notice-for-loan-recovery" className="hover:text-[#1F5EFF] transition-colors">Bank Notices</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li className="font-bold text-[#2E2E2E]">Notice to Native Place</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
          
          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 relative shrink-0">
            <div className="sticky top-24">
              <TableOfContents 
                items={[
                  { id: "stigma", title: "The Stigma of Native Place Notices" },
                  { id: "is-it-legal", title: "Is It Legal for Banks to Send Them?" },
                  { id: "types-of-notices", title: "Types of Notices Sent to Villages" },
                  { id: "how-to-redirect", title: "How to Redirect Bank Communication" },
                  { id: "recovery-agents", title: "Recovery Agents Visiting Your Village" },
                  { id: "escalation", title: "When Legal Action Escalates" },
                  { id: "success-stories", title: "Real Success Stories" },
                  { id: "faqs", title: "Frequently Asked Questions" }
                ]} 
              />
            </div>
          </aside>

          {/* Middle Column: Content */}
          <article className="w-full lg:w-2/4 flex-1 max-w-none">
            
            <section id="stigma" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Social Stigma of Native Place Notices
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  When a borrower moves to a metropolitan city for work, their KYC documents (like Aadhaar or Voter ID) often remain tied to their ancestral village or permanent address where their parents reside. If a loan default occurs, the bank relies on this documented address to establish contact.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Having a bank sent notice to a permanent address creates immense social anxiety. In close-knit villages or small towns, a postman arriving with a formal legal document, or worse, recovery agents visiting the native place, can severely damage a family's reputation. The resulting stress often forces borrowers into making panicked, unsustainable payments just to save face.
                </p>
              </div>
            </section>

            <section id="is-it-legal" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Is It Legal for Banks to Send Notices to My Parents' Home?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Legally speaking, the bank is entirely within its rights to send correspondence to any address you provided during the loan application process. If your native place is listed as your permanent address, they view it as the primary point of contact if you cannot be reached at your current residence.
              </p>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The Boundary Between Contact and Harassment</h4>
                <p className="text-lg leading-relaxed mb-4 text-blue-900">
                  While sending a notice is legal, the way the bank or its agents act at that address is strictly regulated by the RBI:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900 font-medium">Agents cannot disclose the details of your debt to your parents, relatives, or village neighbors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900 font-medium">They cannot use abusive language or threaten elderly parents.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900 font-medium">They cannot demand payment from family members who are not co-signers or guarantors.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="types-of-notices" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Types of Notices Sent to Villages
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Banks use an escalating series of communications when a borrower defaults. Knowing what might arrive at your native place helps you prepare a defense.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">1. Default Reminder Letters</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Standard letters generated by the bank's system reminding you of missed EMIs. These look like normal banking mail and usually arrive within the first 60 days of default.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">2. Loan Recall Notice</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A serious document declaring the loan account as a Non-Performing Asset (NPA) and demanding the entire outstanding amount at once. This is often sent via Registered Post.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">3. Section 138 (Cheque Bounce) Notice</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    If an EMI cheque bounces, the bank's lawyers will send a statutory legal notice under the Negotiable Instruments Act. This has severe legal implications and strict timelines.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">4. Arbitration / Court Summons</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Formal court documents requiring your presence in a legal dispute. If sent to your native place and received by parents, it is considered legally served.
                  </p>
                </div>
              </div>
            </section>

            <section id="how-to-redirect" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Officially Redirect Bank Communication
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                You do not have to accept notices being sent to your ancestral village. You can take immediate, legal steps to stop a bank notice to a parents' village and force the bank to communicate with you elsewhere.
              </p>

              <div className="space-y-12 my-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h4 className="text-2xl font-black text-[#2E2E2E] mb-3">Submit a Change of Address Form</h4>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Write a formal letter or email to the bank's grievance officer requesting a change of communication address. Attach a valid proof (like a rent agreement or utility bill) for your current city residence. Keep the acknowledgment receipt safely.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h4 className="text-2xl font-black text-[#2E2E2E] mb-3">Appoint a Legal Representative</h4>
                    <p className="text-lg leading-relaxed text-gray-700">
                      The most effective way to shield your family is to hire a lawyer to represent you. The lawyer will send a formal "Vakalatnama" (Power of Attorney) and a communication redirect notice to the bank.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h4 className="text-2xl font-black text-[#2E2E2E] mb-3">Mandate "Care Of" (C/O) Routing</h4>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Once legally represented, you can instruct the bank that all future physical mail, summons, or recovery notices must be sent **C/O your lawyer's office address**. If the bank fails to comply and continues sending mail to your village, it can be contested as harassment.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="recovery-agents" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Handling Recovery Agents Visiting Your Native Place
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                When agents show up unannounced in a village setting, their primary weapon is public humiliation. It is crucial to inform your family on how to handle these situations calmly.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-black text-[#2E2E2E] mb-4">Instructions for Your Parents:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1F5EFF] shrink-0">1.</span>
                    <span className="text-gray-800 font-medium">Do not entertain the agents inside the house. Speak to them outside or through a gate.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1F5EFF] shrink-0">2.</span>
                    <span className="text-gray-800 font-medium">Do not make any promises of payment, and never hand over cash or cheques to agents visiting the village.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1F5EFF] shrink-0">3.</span>
                    <span className="text-gray-800 font-medium">Inform the agents firmly: "My son/daughter does not live here. They live in [City Name]. Please contact them directly or speak to their lawyer."</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#1F5EFF] shrink-0">4.</span>
                    <span className="text-gray-800 font-medium">If the agents refuse to leave or create a scene, immediately call the local police station and report a trespassing and nuisance complaint.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="escalation" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                When Legal Action Escalates
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Ignoring a legal notice for personal loan default simply because you are not living at the address is a dangerous strategy. 
              </p>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-4">Warning: Ex-Parte Orders</h4>
                <p className="text-red-900 leading-relaxed font-medium">
                  If a court summons is delivered to your native place and received by an adult family member, the court considers you legally "served." If you fail to appear in court because you were in another city, the judge may pass an "ex-parte" order against you, severely limiting your future defense options.
                </p>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                This is why redirecting communication through a lawyer is not just about avoiding embarrassment; it is a critical step in preserving your legal rights to contest the debt or negotiate a fair settlement.
              </p>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Real Success Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                      RM
                    </div>
                    <div>
                      <h4 className="font-black text-[#2E2E2E]">Rahul M.</h4>
                      <div className="flex gap-1 text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                    "The bank sent notice to my permanent address in Bihar, causing huge stress for my elderly parents. SettleLoans stepped in and redirected all communication to their law firm. My parents haven't received a letter since."
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-bold border border-red-100">Loan: ₹6,50,000</span>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-100">Settled: ₹1,80,000</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                      VS
                    </div>
                    <div>
                      <h4 className="font-black text-[#2E2E2E]">Vikram S.</h4>
                      <div className="flex gap-1 text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                    "Recovery agents visiting my native place almost ruined my family's reputation. Once the lawyers issued a strict legal reply, the agents completely stopped going to my village."
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-bold border border-red-100">Loan: ₹12,00,000</span>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-100">Settled: ₹3,90,000</span>
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
                  { q: "Can the bank legally send a recovery notice to my native place?", a: "Yes, if your native place is listed as your permanent address in your loan application or KYC documents, the bank is legally permitted to send correspondence there." },
                  { q: "How can I stop bank notices from going to my parents' village?", a: "You must formally request a change of correspondence address with the bank in writing, providing proof of your current address, or hire a lawyer to redirect all communication to their law firm." },
                  { q: "Are recovery agents visiting my native place legal?", a: "Agents can visit the address on file if they cannot reach you, but they cannot harass your parents, discuss your debt with neighbors, or cause a public nuisance under RBI guidelines." },
                  { q: "What happens if I ignore the notice sent to my permanent address?", a: "Ignoring a legal notice, regardless of where it is sent, can lead to the bank initiating a civil suit or arbitration proceedings ex-parte (in your absence)." },
                  { q: "Can I sue the bank if recovery agents shame my family in our village?", a: "Yes. If agents use abusive language or disclose your debt to third parties, you can file a complaint with the police for harassment and defamation, and approach the RBI Ombudsman." },
                  { q: "Will the bank inform the local village police about my loan default?", a: "No. Loan default is a civil matter. The bank cannot file a standard police FIR against you in your village just for non-payment." },
                  { q: "How quickly can a lawyer stop notices to my native address?", a: "A lawyer can immediately draft and send a formal 'Cease and Desist' and 'Redirection of Communication' notice to the bank, which legally obligates them to route future letters to the lawyer's office." },
                  { q: "Does updating my address on Aadhaar automatically update the bank?", a: "No, you must submit a specific address change request to your bank along with the updated Aadhaar to ensure notices are sent to the new location." },
                  { q: "Can the bank attach my parents' property in the village for my personal loan?", a: "Absolutely not. For an unsecured personal loan, the bank can only target assets in your name. They cannot touch your parents' property." },
                  { q: "If the loan is settled, will the bank send a confirmation to my village?", a: "If you have not updated your address or redirected communication, the No Dues Certificate (NDC) will be sent to the permanent address on file." }
                ].map((faq, index) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-black text-[#2E2E2E] mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                  Is the Bank Threatening to Ruin Your Family's Reputation?
                </h3>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let our lawyers take over all bank communication so your family stays out of it. We officially redirect notices away from your native village.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl">
                  Consult a Lawyer Now
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational purposes and does not constitute formal legal advice. Always consult with a qualified advocate regarding your specific debt situation.
              </p>
            </div>

          </article>

          {/* Right Column: Sidebar (Sticky) */}
          <aside className="hidden lg:block w-1/5 relative shrink-0">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-[#2E2E2E] rounded-[2rem] p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-4 leading-tight">Stop Harassment Instantly</h4>
                  <p className="text-sm text-gray-300 mb-8 leading-relaxed">
                    Legally block agents from visiting your parents and redirect all notices to our law firm.
                  </p>
                  <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3.5 px-4 rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30">
                    Get Legal Help
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-[2rem] p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#747474] border-b border-[#DEDEDE] pb-4 mb-6">
                  RELATED GUIDES
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/legal-notice-for-loan-recovery" className="group flex items-center text-sm font-medium text-gray-600 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-4 transition-colors"></span>
                      Legal Notice Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/recovery-agent-home-visit-rules" className="group flex items-center text-sm font-medium text-gray-600 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-4 transition-colors"></span>
                      Home Visit Rules
                    </Link>
                  </li>
                  <li>
                    <Link href="/bank-recovery-harassment-complaint" className="group flex items-center text-sm font-medium text-gray-600 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-4 transition-colors"></span>
                      File a Harassment Complaint
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
