import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Recovery Agent Calling References | RBI Rules & Harassment Protection",
  description: "Learn your legal rights when recovery agents call your references, friends, or family. RBI guidelines strictly prohibit third-party contact. Get expert help to stop harassment and settle loans legally.",
  alternates: {
    canonical: "https://settleloans.in/recovery-agent-calling-references",
  },
};

export default function RecoveryAgentCallingReferencesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/recovery-agent-calling-references#webpage",
        "url": "https://settleloans.in/recovery-agent-calling-references",
        "name": "Recovery Agent Calling References | RBI Rules & Harassment Protection",
        "description": "Comprehensive guide on borrower rights against illegal third-party contact by recovery agents in India.",
        "breadcrumb": { "@id": "https://settleloans.in/recovery-agent-calling-references#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/recovery-agent-calling-references#breadcrumb",
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
            "name": "Recovery Agent Calling References",
            "item": "https://settleloans.in/recovery-agent-calling-references"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/recovery-agent-calling-references#article",
        "headline": "Recovery Agent Calling References: RBI Rules and How to Stop Harassment",
        "description": "A deep dive into the legal protections for borrowers when recovery agents illegally contact references and third parties.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Legal Content Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-03-20",
        "dateModified": "2024-03-20",
        "mainEntityOfPage": { "@id": "https://settleloans.in/recovery-agent-calling-references#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/recovery-agent-calling-references#product",
        "name": "Loan Recovery Protection Services",
        "description": "Legal assistance and negotiation services to protect borrowers from recovery agent harassment.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "840"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh M." },
            "datePublished": "2024-01-15",
            "reviewBody": "SettleLoans stopped the calls to my references in just 24 hours. Their legal team is truly amazing.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anita S." },
            "datePublished": "2024-02-10",
            "reviewBody": "I was terrified when they called my boss. SettleLoans handled everything professionally and saved my reputation.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/recovery-agent-calling-references#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can a recovery agent call the references I provided during the loan application?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Strictly no. According to RBI guidelines updated in 2022 and 2026, recovery agents are prohibited from contacting any third party, including friends, family, and references, to discuss a debt or put pressure on the borrower. They can only contact the borrower or the guarantor."
            }
          },
          {
            "@type": "Question",
            "name": "Is calling references considered harassment under RBI rules?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, contacting references to discuss a borrower's default is a clear violation of privacy and a form of harassment. RBI's Fair Practice Code explicitly forbids shaming or intimidating borrowers through third parties."
            }
          },
          {
            "@type": "Question",
            "name": "What should my references say if they receive a call from a recovery agent?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your references should state that they are not party to the loan agreement and that contacting them is a violation of RBI norms. They should record the call, note the agent's name and organization, and refuse to provide any information about you."
            }
          },
          {
            "@type": "Question",
            "name": "Can I file a police complaint if recovery agents call my references?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. If the calls involve abuse, threats, or defamation, you can file an FIR for criminal intimidation and harassment. You should also file a formal complaint with the bank's Nodal Officer and the RBI Ombudsman."
            }
          },
          {
            "@type": "Question",
            "name": "How do recovery agents get the numbers of my references?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Agents typically get these numbers from the loan application form you signed. In some cases, digital lending apps illegally scrape your contact list from your phone, which is a severe violation of data privacy laws."
            }
          },
          {
            "@type": "Question",
            "name": "What are the permissible timings for recovery calls?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Recovery agents can only call or visit between 8:00 AM and 7:00 PM. Any contact outside these hours, even to the borrower directly, is considered harassment."
            }
          },
          {
            "@type": "Question",
            "name": "Can a recovery agent visit my reference's house?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Visiting a reference's house is an illegal act of trespass and privacy violation. Agents have no legal right to approach anyone other than the borrower or guarantor at their registered addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Does SettleLoans help stop calls to references?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our first priority is to stop harassment. We send formal legal notices to the bank and recovery agencies, reminding them of RBI's strict prohibitions on third-party contact. This usually stops illegal calls immediately."
            }
          },
          {
            "@type": "Question",
            "name": "Will settling my loan stop future calls to references?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Once a settlement is reached and the NOC is issued, the recovery process ends entirely. The bank is legally required to update your record and stop all collection activities."
            }
          },
          {
            "@type": "Question",
            "name": "Is contacting an employer the same as calling a reference?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, and it is even more serious. Calling your workplace or boss is a form of defamation and intent to cause professional harm. This is strictly illegal and can lead to severe penalties for the bank."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Know Your Legal Rights
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Recovery Agent <br className="hidden md:block" /> Calling References
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Is your debt becoming a source of shame for your friends and family? Understand why contacting your references is illegal and how we can stop it today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Stop Harassment Now
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li>
                  <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
                </li>
                <li>
                  <span className="text-gray-300">/</span>
                </li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">
                  Recovery Agent Calling References
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

          {/* Left Column: Table of Contents */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <TableOfContents
              items={[
                { id: "legal-introduction", title: "Introduction" },
                { id: "rbi-strict-rules", title: "RBI Guidelines Explained" },
                { id: "contacting-references", title: "Why It Is Illegal" },
                { id: "employer-harassment", title: "Harassment at Work" },
                { id: "defamation-laws", title: "Defamation Concerns" },
                { id: "evidence-collection", title: "Documenting Abuse" },
                { id: "grievance-steps", title: "Steps to File Complaint" },
                { id: "legal-notices", title: "The Power of Legal Notice" },
                { id: "psychological-impact", title: "Mental Health Guidance" },
                { id: "settleloans-shield", title: "Our Settlement Shield" },
                { id: "success-case-studies", title: "Real Victim Stories" },
                { id: "rebuilding-trust", title: "Rebuilding Reputation" },
                { id: "financial-freedom", title: "Path to Debt Freedom" },
                { id: "expert-tips", title: "Daily Protection Tips" },
                { id: "closing-thoughts", title: "Concluding Advice" },
                { id: "faqs", title: "Common Questions" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

            <section id="legal-introduction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                A Message of Solidarity: <span className="text-black">Your Privacy is Sacred</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-bold">
                  If you are reading this, you are likely feeling a sense of deep embarrassment or fear. Perhaps a friend just called to tell you that a stranger questioned them about your loan. Perhaps your boss mentioned that "someone from a bank" called the office. Please listen carefully: these actions are not just rude; they are illegal violations of your human rights.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                  Debt is a private financial agreement between you and a bank. It is not a communal burden, and it is certainly not something that gives a lender the right to shame you in front of your social circle. The law in India is very clear on this matter. A borrower's default does not strip them of their dignity. We have seen the incredible stress this causes, and we want you to know that you are not alone.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 font-bold text-[#1F5EFF]">
                  Take a breath. The calls to your references can be stopped, and your reputation can be protected. At SettleLoans, we deal with thousands of such cases, and we are here to fight for your peace of mind.
                </p>
              </div>
            </section>

            <section id="rbi-strict-rules" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                RBI Guidelines: The Shield of the Borrower
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The Reserve Bank of India, as the supreme regulatory authority for banks and NBFCs, has established a comprehensive framework known as the Fair Practice Code. This code is not a suggestion; it is a mandatory set of rules that every financial institution in India must follow. In recent years, specifically in the August 2022 and February 2026 circulars, the RBI has doubled down on its stance against aggressive and illegal recovery practices.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The core principle of these guidelines is that recovery efforts must be directed solely toward the borrower or the guarantor. The logic is simple: only the individuals who signed the loan agreement are responsible for its repayment. Your references, who might have been listed during the application process, are not parties to the contract. They are merely points of contact, and using them to exert pressure on you is a blatant breach of the duty of confidentiality.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Furthermore, the RBI has explicitly stated that banks and NBFCs are legally responsible for the behavior of the third-party recovery agencies they hire. A bank cannot hide behind the excuse that "it was the agency’s fault." If an agent calls a reference, the bank itself is liable for a penalty. This hierarchical responsibility is what gives you the power to fight back through the Banking Ombudsman.
              </p>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                <h3 className="text-xl font-bold mb-6">Critical RBI Clause: Prohibition on Third-Party Contact</h3>
                <p className="mb-4 text-sm text-gray-600 leading-relaxed">
                  "Lenders and their agents shall not resort to intimidation or harassment of any kind, either verbal or physical, against any person in their debt collection efforts, including acts intended to humiliate publicly or intrude upon the privacy of the debtors' family members, referees and friends, making threatening or anonymous calls or inappropriately communicating with the target of their collection efforts."
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-sm font-medium mt-6">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                    Zero contact with non-borrowers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                    No calls before 8 AM or after 7 PM
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                    No use of abusive language
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                    Mandatory identification of agents
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                    Protection of reference privacy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                    Prohibition of workplace shaming
                  </li>
                </ul>
              </div>
            </section>

            <section id="contacting-references" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Why Contacting References Is Absolutely Illegal
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                When you apply for a loan, you might provide two or three names as "References." In the eyes of the law, these references are provided so the bank can verify your background or contact you in an emergency if you are truly unreachable. However, "unreachable" does not mean "ignoring a call today." It means a genuine situation where you have disappeared.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Calling a reference to inform them of your debt default is a violation of the "Right to Privacy," which is a fundamental right under the Constitution of India. It is also a violation of the Consumer Protection Act. The recovery agent’s intent in calling a reference is almost always to create social pressure. They know that you will feel humiliated and might borrow from somewhere else to pay the bank just to stop the shaming. This is a form of psychological extortion.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Agents often lie to references, saying things like, "Since you are a reference, you are responsible for the loan." This is a complete falsehood. A reference is not a guarantor. A guarantor signs a legal document and is legally bound to the debt; a reference merely provides a phone number. If an agent makes such a claim, they are committing a crime of misrepresentation and fraud.
              </p>
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-200 mb-8">
                <h3 className="text-xl font-bold mb-4 text-blue-900">The Illegal Scenarios to Watch For</h3>
                <p className="text-sm text-blue-800 leading-relaxed mb-4">
                  1. The agent calls your friend and asks them to "tell your friend to pay the money or we will file a police case."
                </p>
                <p className="text-sm text-blue-800 leading-relaxed mb-4 text-bold underline">
                  Illegal: This is criminal intimidation via a third party.
                </p>
                <p className="text-sm text-blue-800 leading-relaxed mb-4">
                  2. The agent calls your cousin and says, "We know you gave him money last month, use that for the loan."
                </p>
                <p className="text-sm text-blue-800 leading-relaxed text-bold underline">
                  Illegal: This is a massive breach of financial privacy and stalking.
                </p>
              </div>
            </section>

            <section id="employer-harassment" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Harassment at the Workplace: A Threat to Your Livelihood
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Perhaps the most malicious tactic used by recovery agents is calling a borrower’s employer or workplace. This is done with the specific intent of putting your job at risk. By calling your office phone line or your HR department, the agent is attempting to damage your professional standing. This is not just a breach of RBI rules; it is an act of criminal defamation.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                If an agent calls your boss, you must act fast. Inform your employer that you are dealing with a financial dispute and that the caller is an unauthorized agent acting in violation of RBI guidelines. Most employers, when informed of the legal reality, will support their employees against such third-party harassment. Do not let the agent succeed in making you feel like a criminal at work.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The law protects your right to work. If a recovery agent’s actions lead to your termination or loss of bonuses, you have the right to sue the bank for civil damages. The bank can be held liable for your lost wages and for the emotional distress caused by their illegal recovery tactics. This is a very strong legal leverage that SettleLoans uses during negotiations.
              </p>
            </section>

            <section id="defamation-laws" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Defamation and Shaming: The Legal Recourse</h2>
              <p className="mb-6">
                In India, defamation (man-hani) is both a civil and a criminal offense. When a recovery agent calls your social references and speaks ill of your character, they are committing defamation. They are intentionally spreading false or private information to lower your reputation in the eyes of society.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50/50 p-6 rounded-xl border border-orange-100">
                  <h3 className="text-xl font-bold text-orange-800 mb-3">Civil Defamation</h3>
                  <p className="text-sm text-orange-900/80 leading-relaxed">
                    You can file a lawsuit in a civil court demanding compensation for the damage done to your reputation. The amount of compensation depends on the severity of the shaming and the impact on your social or professional life.
                  </p>
                </div>
                <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Criminal Defamation (IPC)</h3>
                  <p className="text-sm text-blue-900/80 leading-relaxed">
                    Under sections 499 and 500 of the Indian Penal Code, an individual can be sentenced to up to two years in prison for defamation. Filing a criminal complaint against an agent is often the fastest way to make the bank take notice.
                  </p>
                </div>
              </div>
              <p className="mb-6">
                Another rising concern is "WhatsApp Shaming." Many illegal loan apps create groups titled "Loan Defaulter" and add all the contacts in your phone to that group. This is a massive cybercrime. If this happens, you should immediately report the incident to the National Cyber Crime Reporting Portal (cybercrime.gov.in) and file a complaint with the IT cell of your local police.
              </p>
            </section>

            <section id="evidence-collection" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">How to Collect Evidence of Reference Calling</h2>
              <p className="mb-6">
                In the world of law, an accusation without proof is just a story. To take effective action against a bank, you must have solid evidence. This is where your references become your greatest allies. Ask them to help you by documenting every call they receive.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <strong>Call Recordings:</strong> This is the gold standard of evidence. Ask your references to enable automatic call recording. The recording should ideally capture the agent’s name, the bank they claim to represent, and the specific shaming or threatening language used.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <strong>Screenshots of Call Logs:</strong> Take screenshots of the incoming call screen and the call history. This proves the frequency and timing of the calls. If the calls are coming from multiple different numbers, document all of them.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <strong>WhatsApp Messages:</strong> If the agent sends messages to your references, keep those chats intact. Do not delete them. Take screenshots and export the chat as a text file for backup.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                  <div>
                    <strong>Truecaller Identification:</strong> If Truecaller identifies the caller as a "Spam" or "Loan Agent," take a screenshot. While not absolute proof, it builds a pattern of behavior that the RBI Ombudsman will consider.
                  </div>
                </li>
              </ul>
            </section>

            <section id="grievance-steps" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The 4-Step Process to Stop the Harassment</h2>
              <p className="mb-6">
                If your references are being called, you cannot wait for the bank to "feel sorry" for you. You must take a systematic approach to escalate the issue. Here is the path that works:
              </p>
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-8 shadow-sm">
                <div className="bg-[#1F5EFF] p-6 text-white font-bold text-xl">Escalation Matrix for Borrowers</div>
                <div className="p-8 space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2">Step 1: The Nodal Officer (Internal)</h4>
                    <p className="text-gray-600">Send an email to the Principal Nodal Officer of the bank. Attach the evidence collected from your references. Explicitly state that you are filing this complaint under the RBI Fair Practice Code. The bank has 30 days to resolve this.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Step 2: The RBI Ombudsman (External)</h4>
                    <p className="text-gray-600">If the bank doesn't reply or gives a vague answer after 30 days, go to the RBI CMS portal (cms.rbi.org.in). File a complaint against the bank for a violation of the Fair Practice Code regarding third-party harassment.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Step 3: Police Complaint (Legal)</h4>
                    <p className="text-gray-600">If there is any threat of violence or severe defamation, visit your local police station. Even a simple "Police Information Report" can be sent to the bank as a warning. It shows you are serious about protecting your rights.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Step 4: Professional Shield (Strategic)</h4>
                    <p className="text-gray-600 font-bold">Contact SettleLoans. We will review your case and can appoint a dedicated person to handle future calls on your behalf, redirecting the agents to our legal desk and out of your personal life.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="legal-notices" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The Power of a Formal Legal Notice</h2>
              <p className="mb-6">
                A common recovery tactic is to send you "fake" legal notices designed to look like they come from a court. However, a "real" legal notice sent by a reputable law firm on your behalf is a different matter entirely. When SettleLoans drafts a legal notice to a bank, it contains precise references to the RBI circulars and the sections of the IPC that are being violated.
              </p>
              <p className="mb-6">
                When the bank’s legal department receives a well-drafted notice, they realize that they are dealing with an informed borrower who has professional representation. They know that if the harassment continues, the bank itself could face a multi-crore lawsuit or a massive fine from the RBI. This almost always leads to an immediate halt in calls to your references and makes the bank more open to a reasonable settlement.
              </p>
              <blockquote className="border-l-4 border-[#1F5EFF] pl-4 italic bg-gray-50 p-6 rounded-r-lg my-8">
                "A legal notice is not a declaration of war; it is a declaration of rights. It tells the lender that you will not be bullied and that you demand to be treated with the decency required by the law."
              </blockquote>
            </section>

            <section id="psychological-impact" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Protecting Your Mental Health and Relationships</h2>
              <p className="mb-6 text-lg">
                The hardest part of having your references called is the strain it puts on your relationships. You might feel like you can no longer look your friends in the eye. This isolation is what debt collection thrives on. But we have a different perspective.
              </p>
              <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 mb-8">
                <h3 className="text-xl font-bold text-emerald-800 mb-4">Healing the Social Fracture</h3>
                <p className="mb-4 text-emerald-900/80">
                  The people you listed as references are likely people who care about you. If they receive a call, tell them the truth. Say: "I am facing some financial difficulties, and the bank is illegally harrassing you to get to me. I am already taking legal steps to stop this. Please do not worry, and please block their numbers."
                </p>
                <p className="text-emerald-900/80">
                  Genuine friends will understand. Most of them will actually be angry at the bank, not at you. By being open, you take away the agent's power to use shame as a weapon. Remember, poverty and debt are not crimes. They are circumstances. Do not let a temporary financial situation destroy your permanent friendships.
                </p>
              </div>
            </section>

            <section id="settleloans-shield" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">How SettleLoans Acts as Your Shield</h2>
              <p className="mb-6">
                At SettleLoans, we provide a holistic approach to debt management. We don't just negotiate numbers; we protect people. Our "Shield" service is designed specifically to stop illegal recovery practices. When you join our program, we provide you with the tools and the legal backing to tell every recovery agent: "Talk to my authorized consultants."
              </p>
              <div className="bg-[#2E2E2E] text-white p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold mb-4">Our Protection Protocol</h3>
                <p className="mb-4 opacity-80">
                  We follow a three-tier protection system for every client:
                </p>
                <ul className="space-y-4 text-sm opacity-90">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#1F5EFF] rounded-full flex items-center justify-center flex-shrink-0 text-[10px]">01</span>
                    <span><strong>Immediate Documentation:</strong> We help you organize all your loan details and evidence of harassment into a professional complaint file.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#1F5EFF] rounded-full flex items-center justify-center flex-shrink-0 text-[10px]">02</span>
                    <span><strong>Formal Cease & Desist:</strong> We issue a formal notification to your lenders demanding they stop all third-party contact immediately or face legal escalation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#1F5EFF] rounded-full flex items-center justify-center flex-shrink-0 text-[10px]">03</span>
                    <span><strong>Expert Negotiation:</strong> Once the harassment stops, we move into the negotiation phase to settle your debt for an amount that you can actually afford, often saving up to 70% of the total dues.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="success-case-studies" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Real Stories of Restored Dignity</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose">
                {[
                  {
                    name: "Rahul P.",
                    loc: "Bangalore",
                    type: "Personal Loan",
                    outcome: "Harassment Stopped in 48 Hours",
                    story: "The agents called my father-in-law. I was on the verge of a divorce. SettleLoans stepped in, sent a notice to the bank's VP, and the calls stopped the next day. They eventually helped me settle the loan for 40% of the value."
                  },
                  {
                    name: "Meera G.",
                    loc: "Mumbai",
                    type: "Credit Card Debt",
                    outcome: "Workplace Privacy Protected",
                    story: "They were calling my office reception. It was terrifying. SettleLoans assigned a consultant who talked to the bank's legal team. Not only did the calls stop, but I also got a formal apology from the bank's collection manager."
                  },
                  {
                    name: "Anand K.",
                    loc: "Delhi",
                    type: "App-Based Loan",
                    outcome: "Cyber-Harassment Ended",
                    story: "The app scraped my contacts and called my old school teachers. SettleLoans helped me file an RBI and Cyber-Cell complaint. We fought back, and the debt was eventually closed after the bank realized their agency had committed a crime."
                  },
                  {
                    name: "Deepa R.",
                    loc: "Hyderabad",
                    type: "Unsecured Loan",
                    outcome: "Reputation Restored",
                    story: "My neighbors were called. SettleLoans provided me with a message to send to everyone explaining the legal situation. It gave me the courage to face them. I am now debt-free and my relationships are back to normal."
                  }
                ].map((review, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-bold text-[#2E2E2E]">{review.name}</h5>
                        <p className="text-xs text-gray-400">{review.loc}</p>
                      </div>
                      <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                    </div>
                    <div className="mb-4 text-xs font-mono bg-green-50 p-2 rounded border border-green-100 uppercase tracking-tighter">
                      <span className="block text-green-700 font-bold">{review.outcome}</span>
                    </div>
                    <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="rebuilding-trust" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Beyond the Harassment: Rebuilding Your Financial Life</h2>
              <p className="mb-6 text-lg">
                Stopping the calls is the first victory, but the ultimate goal is financial health. Once you are no longer living in fear of the next phone call, you can begin to make rational, long-term decisions.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 my-10">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#1F5EFF]">1. Settlement Over Silence</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Ignoring debt doesn't make it go away. A legal settlement is an honorable way to close a chapter. It allows you to pay what you can and move on without the threat of future legal action hanging over your head.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#1F5EFF]">2. CIBIL Rebuilding</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    A settled loan will impact your score, but a perpetual default is much worse. We guide you on how to slowly rebuild your credit after a settlement, using secured credit cards and timely payments of utilities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#1F5EFF]">3. Privacy Restoration</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    In the future, be extremely careful about the permissions you give to lending apps. Never allow an app to access your contacts or galleries unless it is a reputable major bank. Protect your digital footprint as fiercely as your bank account.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#1F5EFF]">4. Emergency Planning</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Most people default because they have no liquidity. We help you build a budget that prioritizes an emergency fund of at least 1,000 rupees a month, providing a tiny buffer that can grow into a real safety net.
                  </p>
                </div>
              </div>
              <p className="text-center text-lg font-bold p-6 bg-blue-50 rounded-xl border border-blue-100">
                At SettleLoans, we believe every Indian deserves a life free from the shackle of debt-related shame. Your future is not determined by your past defaults.
              </p>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4 not-prose">
                {[
                  { q: "Is calling a reference legal if the borrower is not picking up the phone?", a: "Even if the borrower is unreachable, the agent cannot discuss the loan OR the default with the reference. They can only briefly ask for the borrower's location or updated contact info. Discussing the debt itself is a violation of privacy law." },
                  { q: "Can my employer fire me if a recovery agent calls my office?", a: "Most employment contracts require 'just cause' for termination. A single debt-related call is usually not grounds for firing. However, to be safe, you should proactively inform your HR that a lender is violating RBI rules by contacting them." },
                  { q: "What is the penalty for a bank if they call my references?", a: "The RBI can impose heavy monetary penalties on banks. Additionally, the Banking Ombudsman can award compensation to the borrower for mental agony and damage to reputation." },
                  { q: "How do I know if the caller is a real agent or a scammer?", a: "A real agent must disclose their name, their agency name, and have a valid ID. If they hide their identity or use a personal WhatsApp number with a 'Police' logo as their DP, they are likely a scammer or a very low-quality rogue agent." },
                  { q: "Do I have to pay my debt if the bank harassed my family?", a: "Harassment does not legally waive the debt, but it gives you significant leverage. You can use the proof of harassment to negotiate a very low settlement amount in exchange for not filing a formal complaint against the bank." },
                  { q: "Can a reference sue the recovery agent?", a: "Yes. A reference who is harassed can file a separate case for invasion of privacy and mental harassment, as they have no contractual relationship with the bank." },
                  { q: "Will the calls stop immediately after I hire SettleLoans?", a: "In most cases, yes. As soon as we issue a formal notice and our legal desk takes over the communication, 95% of agents stop calling because they know they are being watched by legal professionals." },
                  { q: "Can agents contact me on social media like Facebook or Instagram?", a: "Absolutely not. This is a severe violation of RBI guidelines and can be classified as cyber-stalking under the IT Act." },
                  { q: "How long should I keep the call recordings from my references?", a: "You should keep them until your loan is fully settled and you have the NOC in hand. These are your most valuable assets in any legal dispute." },
                  { q: "What if the bank denies that the agent called my reference?", a: "This is where call recordings and screenshots are vital. With proof of the phone number and the agent's voice claiming to be from the bank, the bank cannot deny responsibility for the actions of their authorized collection agency." }
                ].map((faq, i) => (
                  <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20">
                    <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white transition-colors">
                      <span className="text-lg">{i + 1}. {faq.q}</span>
                      <span className="transition-transform group-open:rotate-180">
                        <svg className="w-5 h-5 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                      </span>
                    </summary>
                    <div className="px-5 pb-5 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-4 mt-0 bg-white">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-16 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans is a professional debt consultancy. While we provide legal guidance, this content does not constitute formal legal advice. For specific cases, please consult with our legal experts directly.</p>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden mt-16 mb-8">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                  <h3 className="text-2xl font-black mb-2">Refuse to be Shamed</h3>
                  <p className="opacity-90 text-sm">Join thousands of Indians who have reclaimed their dignity with SettleLoans.</p>
                </div>
                <div className="p-8 text-center text-[#DEDEDE]">
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                    Get Your Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Right Column: CTA & Related Pages */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8">

              {/* CTA Container */}
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                <div className="bg-[#1F5EFF] p-4 text-center">
                  <h3 className="text-lg font-black text-white">Protect Your Reputation</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                    Do not let illegal calls destroy your relationships. Let us handle the banks for you.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                    Speak to an Expert
                  </Link>
                  <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">100% Secure & Private</p>
                </div>
              </div>

              {/* Related Pages Container */}
              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Related Resources</h3>
                <ul className="space-y-4 text-sm font-bold">
                  <li>
                    <Link href="/rbi-rules-for-recovery-agents" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      RBI Recovery Rules 2026
                    </Link>
                  </li>
                  <li>
                    <Link href="/recovery-agents-calling-family-members" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Calling Family Members
                    </Link>
                  </li>
                  <li>
                    <Link href="/recovery-agent-harassment-complaint" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      How to File a Complaint
                    </Link>
                  </li>
                  <li>
                    <Link href="/recovery-agent-home-visit-rules" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Home Visit Regulations
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </aside>

        </div>

        {/* Bottom CTA Section */}
        <section className="w-full bg-[#1F5EFF] py-16 px-4 md:px-8 lg:px-16 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
              Enough is Enough. <br /> Stop the Reference Harassment Today.
            </h2>
            <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Our legal experts have helped over 10,000 Indians just like you. We will stop the calls, protect your privacy, and settle your debt legally.
            </p>
            <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-5 px-12 rounded-xl text-xl hover:scale-105 transition-all shadow-2xl">
              Get Your Free Consultation Now
            </Link>
            <p className="mt-8 text-sm opacity-70 underline">100% Privacy Guaranteed • Trusted by Thousands Across India</p>
          </div>
        </section>
      </main>
    </div>
  );
}
