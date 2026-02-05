import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Ignoring Calls of Recovery Agent? Legal Consequences & Solutions | SettleLoans",
  description: "What happens if you ignore recovery agent calls in India? Understand the legal consequences, RBI guidelines against harassment, and how loan settlement can help you.",
  alternates: {
    canonical: "https://settleloans.in/ignoring-calls-of-recovery-agent",
  },
};

export default function IgnoringCallsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/ignoring-calls-of-recovery-agent#webpage",
        "url": "https://settleloans.in/ignoring-calls-of-recovery-agent",
        "name": "Ignoring Calls of Recovery Agent? Legal Consequences & Solutions",
        "description": "Comprehensive guide on the risks of ignoring loan recovery calls and legal remedies available in India.",
        "breadcrumb": { "@id": "https://settleloans.in/ignoring-calls-of-recovery-agent#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/ignoring-calls-of-recovery-agent#breadcrumb",
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
            "name": "Ignoring Calls of Recovery Agent",
            "item": "https://settleloans.in/ignoring-calls-of-recovery-agent"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/ignoring-calls-of-recovery-agent#article",
        "headline": "What Happens If You Ignore Calls of Recovery Agents in India?",
        "description": "A detailed analysis of the legal and financial repercussions of ignoring debt recovery calls and how to handle them legally.",
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
        "datePublished": "2024-02-05",
        "dateModified": "2024-02-05",
        "mainEntityOfPage": { "@id": "https://settleloans.in/ignoring-calls-of-recovery-agent#webpage" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/ignoring-calls-of-recovery-agent#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I be arrested for ignoring recovery agent calls?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, you cannot be arrested simply for ignoring calls or for defaulting on a personal loan or credit card. These are civil matters. However, ignoring court summons or cheque bounce notices (Section 138) can lead to legal complications including arrest warrants."
            }
          },
          {
            "@type": "Question",
            "name": "Do recovery agents have the right to call my relatives?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under RBI guidelines, recovery agents are strictly prohibited from contacting your friends, family, or employers to discuss your debt. This is a violation of your privacy and you can file a complaint against such harassment."
            }
          },
          {
            "@type": "Question",
            "name": "What are the allowed timings for recovery calls?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Recovery agents can only contact you between 7:00 AM and 7:00 PM. Calls outside these hours are illegal and can be reported as harassment to the bank and the RBI Ombudsman."
            }
          },
          {
            "@type": "Question",
            "name": "Does ignoring calls stop the recovery process?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, it does not. In fact, it often accelerates escalation. The bank may mark your account as a Non Performing Asset (NPA) sooner, initiate legal notices, and even send agents to your physical address if digital communication fails."
            }
          },
          {
            "@type": "Question",
            "name": "Can recovery agents verbally abuse me?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely not. The RBI has a zero tolerance policy for abusive language, threats, or physical intimidation. If an agent uses foul language, record the call and file a formal grievance immediately."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if agents threaten to seize my property?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For unsecured loans like personal loans and credit cards, agents cannot seize property without a specific court order, which is rare. For secured loans, they must follow the SARFAESI Act 60 day notice rule. Do not panic; seek legal advice."
            }
          },
          {
            "@type": "Question",
            "name": "How does ignoring calls affect my CIBIL score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While the act of ignoring a call doesn't directly hit your score, the underlying non payment does. Continuous default will tank your CIBIL score, potentially dropping it by 100 plus points, making future borrowing impossible."
            }
          },
          {
            "@type": "Question",
            "name": "Can I request communication only through email?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can formally request the lender to communicate via email for record keeping. While they may still call, having a written request helps if you need to prove harassment later."
            }
          },
          {
            "@type": "Question",
            "name": "Is loan settlement a solution to stop calls?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. When you appoint a settlement agency, they take over the communication. Once a settlement is agreed upon and paid, the account is closed, and all recovery actions, including calls, cease permanently."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I complain about harassment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You should first complain to the bank's nodal officer. If unresolved after thirty days, you can escalate to the RBI Banking Ombudsman online at the CMS portal. For criminal intimidation, you can also file a police complaint."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Section 138 and Section 25?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Section 138 of the NI Act deals with physical cheque bounce. Section 25 of the PSS Act deals with electronic transfer failures like NACH or ECS. Both carry identical penalties including up to two years of jail or a fine twice the amount."
            }
          },
          {
            "@type": "Question",
            "name": "Can an agent visit my office without permission?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under RBI guidelines, agents should ideally visit your home. Office visits are generally considered harassment unless you are unreachable at home. You have the right to ask them to leave if it causes professional distress."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a grace period for CIBIL reporting in 2025?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, as per recent RBI directives, banks are encouraged to provide a thirty day grace period from the due date before categorizing a payment as a default in credit bureau reports."
            }
          },
          {
            "@type": "Question",
            "name": "What is the 2025 RBI Mandate on compensation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If a bank fails to resolve a harassment grievance within thirty days and the Ombudsman finds the bank at fault, they can be directed to pay compensation of up to one lakh rupees for mental anguish."
            }
          },
          {
            "@type": "Question",
            "name": "Can I record a recovery agent's visit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you have every legal right to record audio or video of the interaction for your safety and as evidence. Informing them that they are being recorded often stops abusive behavior immediately."
            }
          },
          {
            "@type": "Question",
            "name": "How do I identify a genuine recovery agent?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A genuine agent must carry an ID card and an authorization letter from the bank for your specific account. If they cannot provide these, you are not obligated to speak with them."
            }
          },
          {
            "@type": "Question",
            "name": "What is the SARFAESI Act 60 day notice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For secured loans, after an account becomes an NPA, the bank issues a notice under Section 13(2) of the SARFAESI Act, giving you sixty days to clear the dues before they take possession of the asset."
            }
          },
          {
            "@type": "Question",
            "name": "Does the RBI Ombudsman charge any fee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, the RBI Integrated Ombudsman Scheme is a completely free service. You can lodge your complaint online at the CMS portal without any legal or administrative costs."
            }
          },
          {
            "@type": "Question",
            "name": "Can agents contact my emergency contacts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "They can only call for address verification if they cannot reach you. They are strictly prohibited from discussing your debt amount or default status with your contacts."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I receive a Non Bailable Warrant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "This usually happens if you ignore court summons in a Section 138 case. You must immediately approach the court through a lawyer to get the warrant stayed and apply for bail."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/ignoring-calls-of-recovery-agent#product",
        "name": "Recovery Agent Anti-Harassment & Legal Shield",
        "description": "Professional legal protection and negotiation services to stop recovery agent harassment and settle debts.",
        "provider": {
          "@type": "Organization",
          "name": "SettleLoans",
          "url": "https://settleloans.in"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "2450"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh Menon" },
            "datePublished": "2024-11-15",
            "reviewBody": "SettleLoans stopped the abusive calls within forty eight hours. Their legal team is excellent at handling aggressive agents.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sneha Gupta" },
            "datePublished": "2024-12-05",
            "reviewBody": "The harassment was unbearable until I joined SettleLoans. They took over all communication and even helped with a legal notice response.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
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
            Legal Insights & Borrower Rights
          </span>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
            Ignoring Calls of <br className="hidden md:block"/> Recovery Agent?
          </h1>
          <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
            Understand the serious legal consequences, your rights against harassment, and why silence is never the solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Stop The Calls Now
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
              <li><span className="text-gray-300">/</span></li>
              <li className="font-bold text-[#2E2E2E]" aria-current="page">Ignoring Calls of Recovery Agent</li>
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
                { id: "immediate-impact", title: "Immediate Consequences" },
                { id: "psychological-toll", title: "The Psychological Toll" },
                { id: "legal-escalation", title: "Legal Escalation: NI Act vs PSS Act" },
                { id: "npa-classification", title: "NPA Classification Realities" },
                { id: "rbi-guidelines", title: "RBI Guidelines: Your Bill of Rights" },
                { id: "field-visit-protocol", title: "The Field Visit Protocol" },
                { id: "ombudsman-process", title: "RBI Ombudsman: Step-by-Step" },
                { id: "regulatory-updates-2025", title: "2025 Regulatory Updates" },
                { id: "recovery-tactics", title: "Common Recovery Tactics" },
                { id: "what-not-to-do", title: "What NOT To Do" },
                { id: "right-way-to-handle", title: "The Right Way to Handle" },
                { id: "loan-settlement-role", title: "Role of Loan Settlement" },
                { id: "credit-score-reality", title: "Credit Score Reality" },
                { id: "reviews", title: "Success Stories" },
                { id: "faqs", title: "Frequently Asked Questions" }
            ]}
          />
        </aside>

        {/* Middle Column: Main Content */}
        <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
          
          <section id="immediate-impact" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
              The Immediate Impact of Silence: Why Avoiding Calls Backfires
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              When the phone rings and you see that familiar unknown number, or a series of digits that you have come to recognize as the bank's collection department, the instinct to ignore it is powerful. It is a natural human defense mechanism against chronic stress and confrontation. You might think, "I do not have the money right now, so what is the point of talking?" or "I will just pick up when I have the funds." However, in the world of high stakes finance and professional debt recovery, silence is not golden it is a massive red flag.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              <strong>Ignoring calls of recovery agent</strong> does not make the debt disappear; it serves as an accelerant. To a lender, a borrower who stops communicating is far more dangerous than one who is struggling but honest. When you answer, you are a person with a problem. When you ignore, you are a "risk category" that needs aggressive handling.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              In banking terminology, this switch in behavior often triggers a shift from "Soft Collections" to "Hard Collections." Soft collections involve polite reminders and internal bank staff trying to help you find a way to pay. Hard collections involve third party agencies whose agents are incentivized by commissions on the amount they recover. By staying silent, you are effectively choosing the more aggressive path for your own recovery process.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-red-800 mb-2">The Classification Trap</h3>
              <p className="text-red-900/80">
                If you have missed two or more EMIs and are actively avoiding all forms of digital and telephonic communication, the bank's automated systems will likely mark you as a "Potential Willful Defaulter." This does not mean you have the money and are not paying, but it means the bank *perceives* you that way because you have refused to explain your situation. Once this label is attached, your chances of getting a moratorium, a restructuring deal, or a polite settlement drop significantly.
              </p>
            </div>
          </section>

          <section id="psychological-toll" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">The Psychological Toll of Avoidance: Living in a Digital Fortress</h2>
             <p className="text-lg leading-relaxed mb-6">
               The mental health impact of debt is one of the most underreported crises in urban India today. Living in constant fear of your phone is physically and mentally exhausting. The constant anxiety spikes every time your device rings, vibrates, or even just lights up with a notification, which can lead to severe issues like chronic stress, clinical insomnia, and deep depression.
             </p>
             <p className="text-lg leading-relaxed mb-6">
               Borrowers often report a sense of "digital paralysis." They are too scared to pick up the phone, but too anxious to put it down because they fear what might happen if they are truly unreachable. This avoidance creates a vicious cycle. Because you do not answer, you do not know the current legal status of your loan. You do not know if a formal legal notice has been dispatched to your permanent address or if a field agent is scheduled to visit your workplace.
             </p>
             <p className="text-lg leading-relaxed mb-6">
               This "information vacuum" allows your mind to imagine the absolute worst case scenarios, which are often far more terrifying than the actual legal reality. You might imagine police at your door for a credit card debt (which does not happen in civil cases), or your neighbors being told of your financial status. Breaking this silence is not just about the money; it is the first critical step to regaining your mental peace and taking the power back from the recovery agencies.
             </p>
             <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-start gap-4 mb-8">
                <div className="text-blue-500 text-2xl font-bold">💡</div>
                <p className="text-blue-900 text-sm leading-relaxed">
                  <strong>Pro Tip:</strong> Even if you cannot pay, answering the call once a week and stating "I am experiencing financial hardship and I am working on a resolution" is legally and strategically superior to ignoring ten calls a day.
                </p>
             </div>
          </section>

          <section id="legal-escalation" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">Legal Escalation: Detailed Breakdown of NI Act vs PSS Act</h2>
            <p className="text-lg leading-relaxed mb-6">
              One of the biggest misconceptions in the Indian debt landscape is that "nothing happens" if you simply ignore direct communication from the bank or its agents. While it is true that the police will not show up at your door for a missed payment (which is a civil matter), the legal machinery is designed to move slow but relentlessly. When communication breaks down, the lender stops trying to talk and starts trying to litigate.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              In modern India, the two most powerful tools in a lender's arsenal are Section 138 of the Negotiable Instruments Act and Section 25 of the Payment and Settlement Systems Act. Understanding the difference is critical for your survival.
            </p>
            <ul className="space-y-6 mb-10">
              <li className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <strong className="block text-xl text-[#1F5EFF] mb-2">1. Section 138 NI Act (The Cheque Bounce Case)</strong>
                <p className="text-gray-700 leading-relaxed">
                  This section deals specifically with physical paper instruments. If you issued post dated cheques (PDCs) or security cheques at the time of your loan sanction, the bank will present them for payment. If they bounce due to "insufficient funds," it constitutes a criminal offense. You will receive a formal demand notice giving you fifteen days to pay. If you do not pay, a criminal case is filed. Punishment includes imprisonment for up to two years, a fine of twice the cheque amount, or both.
                </p>
              </li>
               <li className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <strong className="block text-xl text-[#1F5EFF] mb-2">2. Section 25 PSS Act (The Electronic Mandate Failure)</strong>
                <p className="text-gray-700 leading-relaxed">
                  With the rise of digital banking, most EMIs are now collected via NACH or ECS mandates. If these electronic transfers fail, Section 25 of the Payment and Settlement Systems Act kicks in. Legally, the consequences are identical to a cheque bounce. Lenders use this to file criminal complaints against borrowers who have moved to a digital only payment structure. The procedure for demand notices and subsequent litigation follows the same strict timeline as Section 138.
                </p>
              </li>
               <li className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <strong className="block text-xl text-[#1F5EFF] mb-2">3. Arbitration and Summons</strong>
                <p className="text-gray-700 leading-relaxed">
                  Many loan agreements have a clause that allows the bank to appoint a private arbitrator. If you ignore the arbitration notices, an "Ex Parte" order is passed against you. This order is legally equivalent to a court decree and can be used to attach your property or salary. Ignoring court summons in a Section 138 or Section 25 case is even more dangerous, as it can lead to the issuance of Non Bailable Warrants (NBW), which means the police can arrest you to produce you before the Magistrate.
                </p>
              </li>
            </ul>
          </section>

          <section id="npa-classification" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">NPA Classification Realities: The Point of No Return</h2>
            <p className="text-lg leading-relaxed mb-6">
              In the Indian banking system, the ninety day mark is the "Rubicon." If you fail to pay any amount for ninety consecutive days, your loan account is classified as a Non Performing Asset (NPA). This is not just a bookkeeping entry; it fundamentally changes your relationship with the bank.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
               <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                 <h4 className="font-bold text-orange-900 mb-2 underline decoration-orange-300">Phase 1: SMA (Special Mention Account)</h4>
                 <p className="text-sm text-orange-800 leading-relaxed">
                   Before ninety days, you are in the SMA 0, SMA 1, or SMA 2 category. During this phase, you are still a "Standard Asset." The bank's goal is to keep you as a customer. You have the maximum leverage to negotiate for a moratorium or a restructuring of your loan terms.
                 </p>
               </div>
               <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                 <h4 className="font-bold text-red-900 mb-2 underline decoration-red-300">Phase 2: NPA (Non Performing Asset)</h4>
                 <p className="text-sm text-red-800 leading-relaxed">
                   Once you hit the ninety one day mark, you are an NPA. The bank's risk department takes over. For secured loans, the SARFAESI Act is triggered. For unsecured loans, the bank writes off the debt and moves it to the legal recovery cell. Standard customer service will no longer talk to you; you must now deal with recovery lawyers.
                 </p>
               </div>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              Ignoring calls during the SMA phase is a missed opportunity. Once the account is an NPA, the bank is often no longer interested in small partial payments they want a total closure via settlement or full payment.
            </p>
          </section>

          <section id="rbi-guidelines" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">RBI Guidelines: Your Bill of Rights as a Borrower</h2>
             <p className="text-lg leading-relaxed mb-6">
               The Reserve Bank of India has clear, strict guidelines to protect borrowers from unethical recovery practices. Even if you have defaulted on multiple loans, you do not lose your fundamental rights as a citizen, nor do you lose your right to dignity. Ignorance of these rights often empowers rogue agents to cross the line. Here is a detailed breakdown of what agents are strictly prohibited from doing under the RBI Fair Practices Code:
             </p>
             <div className="space-y-4 mb-10">
               {[
                 { title: "Time Restrictions", desc: "Agents cannot call you or visit you before 07:00 AM or after 07:00 PM. Calls at midnight or early morning are illegal." },
                 { title: "Privacy Violation", desc: "They are strictly prohibited from informing your neighbors, relatives, colleagues, or friends about your debt status." },
                 { title: "Abusive Language", desc: "The use of profane, threatening, or uncivil language is a zero tolerance offense for which banks can see heavy fines." },
                 { title: "Physical Intimidation", desc: "Using muscle power, physical blocking, or threatening physical harm is a criminal act and should be reported to the police." },
                 { title: "False Personation", desc: "Agents cannot pretend to be police officers, court officials, or lawyers to threaten you with immediate arrest." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-start p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#1F5EFF] transition-colors">
                    <div className="min-w-[48px] h-[48px] rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold shrink-0">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-[#2E2E2E] mb-1">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
             </div>
             <p className="mt-6 text-sm bg-blue-50 p-6 rounded-xl text-blue-800 border-l-4 border-blue-500 font-medium">
               <strong>Note:</strong> Banks are ultimately responsible for the behavior of the recovery agents they hire. If a third party agent harasses you, the bank is legally liable. In 2024 and 2025, the RBI has become even more stringent, often imposing multi crore penalties on major banks for recovery agent misconduct.
             </p>
          </section>

          <section id="field-visit-protocol" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">The Field Visit Protocol: What to Do If Agents Visit Your Home</h2>
             <p className="text-lg leading-relaxed mb-6">
               A visit from a recovery agent can be intimidating, especially if it happens in front of your family or neighbors. However, you must remember that you are on your own property and you have the upper hand. Here is the step by step action plan for a field visit:
             </p>
             <div className="bg-[#2E2E2E] text-[#DEDEDE] p-8 rounded-3xl mb-8">
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] flex items-center justify-center font-bold shrink-0">1</span>
                    <div>
                      <strong className="block text-white mb-1">Verify Identification and Authorization</strong>
                      <p className="text-sm opacity-80 leading-relaxed">Immediately ask for their Employee ID Card and the written Authorization Letter from the bank specifically mentioning your loan account. If they cannot produce these, you have the legal right to ask them to leave your premises immediately.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] flex items-center justify-center font-bold shrink-0">2</span>
                    <div>
                      <strong className="block text-white mb-1">Stay Outside the Home</strong>
                      <p className="text-sm opacity-80 leading-relaxed">You are NOT required to let them inside your house. Conduct the conversation at the gate or the door. If they try to push their way in, inform them that you will call the police for trespassing.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] flex items-center justify-center font-bold shrink-0">3</span>
                    <div>
                      <strong className="block text-white mb-1">Record the Interaction</strong>
                      <p className="text-sm opacity-80 leading-relaxed">Hold your phone up and record the entire conversation. Tell the agent, "I am recording this interaction for my safety and for legal evidence." Most agents will immediately become professional and polite the moment a camera is on them.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] flex items-center justify-center font-bold shrink-0">4</span>
                    <div>
                      <strong className="block text-white mb-1">Do Not Sign Anything</strong>
                      <p className="text-sm opacity-80 leading-relaxed">Agents often carry blank papers or "acknowledgment forms" and pressure you to sign. Never sign a document given by a recovery agent. Tell them you will only sign documents sent to you via official email or at the bank branch.</p>
                    </div>
                  </li>
                </ol>
             </div>
             <p className="text-lg leading-relaxed mb-6">
               Office visits are even more sensitive. RBI guidelines state that agents should ideally avoid contacting you at your workplace unless you are completely unreachable at home. If they visit your office and cause a scene, this is a major violation of privacy for which you can seek substantial damages.
             </p>
          </section>

          <section id="ombudsman-process" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">RBI Ombudsman: Moving from Complaint to Resolution</h2>
             <p className="text-lg leading-relaxed mb-6">
               If you have filed a grievance with the bank and they have not resolved it within thirty days, or if their response is unsatisfactory, you can approach the Reserve Bank Integrated Ombudsman Scheme (RB IOS). This is a fast, free, and incredibly effective platform.
             </p>
             <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                   <div className="w-12 h-12 bg-blue-50 text-[#1F5EFF] rounded-full flex items-center justify-center mx-auto mb-4 font-black">1</div>
                   <h5 className="font-bold mb-2">Lodge on CMS Portal</h5>
                   <p className="text-xs text-gray-500">Visit cms.rbi.org.in and fill out the online form with your loan details and evidence of harassment.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                   <div className="w-12 h-12 bg-blue-50 text-[#1F5EFF] rounded-full flex items-center justify-center mx-auto mb-4 font-black">2</div>
                   <h5 className="font-bold mb-2">Submit Evidence</h5>
                   <p className="text-xs text-gray-500">Upload call recordings, screenshots of messages, and the initial complaint you sent to the bank.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                   <div className="w-12 h-12 bg-blue-50 text-[#1F5EFF] rounded-full flex items-center justify-center mx-auto mb-4 font-black">3</div>
                   <h5 className="font-bold mb-2">Wait for Award</h5>
                   <p className="text-xs text-gray-500">The Ombudsman will investigate and can direct the bank to stop harassment and even pay you compensation.</p>
                </div>
             </div>
             <p className="text-lg leading-relaxed italic text-[#747474]">
               The "Award" given by an Ombudsman is binding on the bank. If they find that the recovery agent crossed the line, they can force the bank to stop all recovery actions for a certain period or waive off penalty interest as part of the compensation.
             </p>
          </section>

          <section id="regulatory-updates-2025" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">2025 Regulatory Updates: Stricter Rules for Lenders</h2>
             <p className="text-lg leading-relaxed mb-6">
               As we move into 2025, the regulatory environment in India has shifted significantly in favor of the borrower's right to privacy and peace. The RBI has issued several internal circulars that mandate technological and procedural changes for all REs (Regulated Entities).
             </p>
             <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100 mb-8">
                <h4 className="font-bold text-amber-900 mb-4 text-xl">What is New in 2025?</h4>
                <ul className="space-y-4 text-amber-900/80">
                   <li className="flex gap-3">
                      <span className="text-amber-500 font-bold">▶</span>
                      <span><strong>Digital Monitoring:</strong> All recovery calls must now be digitally recorded and stored for at least six months. Lenders must provide these recordings upon request by the Ombudsman to verify any claims of verbal abuse or harassment.</span>
                   </li>
                   <li className="flex gap-3">
                      <span className="text-amber-500 font-bold">▶</span>
                      <span><strong>CIBIL Grace Period:</strong> A mandatory thirty day grace period is encouraged before a missed payment is reported to the credit bureaus. This allows borrowers a small window to resolve temporary liquidity issues without permanent damage to their credit scores.</span>
                   </li>
                   <li className="flex gap-3">
                      <span className="text-amber-500 font-bold">▶</span>
                      <span><strong>Agent Whitelisting:</strong> Banks must now provide the specific name and ID of the recovery agent assigned to your case via SMS or email *before* the agent makes first contact. Any call from an unannounced agent is a violation and can be reported as unauthorized collection.</span>
                   </li>
                   <li className="flex gap-3">
                      <span className="text-amber-500 font-bold">▶</span>
                      <span><strong>Harassment Penalty:</strong> If a bank is found guilty of "Systemic Harassment" (repeated violations across multiple customers), the RBI can now impose "Prompt Corrective Action" restricting the bank's lending powers until they re-train their collection team.</span>
                   </li>
                </ul>
             </div>
          </section>

          <section id="recovery-tactics" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">Common Recovery Tactics (And Truths)</h2>
             <p className="text-lg leading-relaxed mb-6">
               Agents use psychological scripts designed to panic you into making irrational financial decisions. By knowing the truth behind these scripts, you neutralize their power.
             </p>
             <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm mb-8">
               <table className="min-w-full divide-y divide-gray-200">
                 <thead className="bg-gray-50">
                   <tr>
                     <th className="px-6 py-4 text-left text-xs font-black text-gray-500 uppercase tracking-wider">Agent's Script (The Panic)</th>
                     <th className="px-6 py-4 text-left text-xs font-black text-gray-500 uppercase tracking-wider">The Legal Reality (The Truth)</th>
                   </tr>
                 </thead>
                 <tbody className="bg-white divide-y divide-gray-200">
                   <tr>
                     <td className="px-6 py-4 text-sm font-bold text-red-600">"Police are on the way to arrest you at your home."</td>
                     <td className="px-6 py-4 text-sm text-gray-700 leading-relaxed">Absolute Falsehood. Police do not get involved in civil debt defaults. Arrest only happens if a Magistrate issues a warrant after you ignore multiple court summons.</td>
                   </tr>
                   <tr>
                     <td className="px-6 py-4 text-sm font-bold text-red-600">"We will seize your furniture and appliances today."</td>
                     <td className="px-6 py-4 text-sm text-gray-700 leading-relaxed">False. For unsecured loans, no property can be seized without a specific court order for attachment of assets, which takes years.</td>
                   </tr>
                   <tr>
                     <td className="px-6 py-4 text-sm font-bold text-red-600">"We have informed your HR department of the theft."</td>
                     <td className="px-6 py-4 text-sm text-gray-700 leading-relaxed">A major violation of privacy. Debt is not theft. Informing your employer is illegal and grounds for a massive RBI complaint.</td>
                   </tr>
                    <tr>
                     <td className="px-6 py-4 text-sm font-bold text-red-600">"You will never get a job or passport again."</td>
                     <td className="px-6 py-4 text-sm text-gray-700 leading-relaxed">Blatant lie. While CIBIL affects loans, it has zero impact on your right to travel (passport) or your ability to be employed in most sectors.</td>
                   </tr>
                   <tr>
                     <td className="px-6 py-4 text-sm font-bold text-red-600">"Give us cash now and we will close the loop."</td>
                     <td className="px-6 py-4 text-sm text-gray-700 leading-relaxed">Extremely Dangerous. Never pay cash to agents. It rarely reaches the bank. Always pay through official bank channels (App, NetBanking, or Branch).</td>
                   </tr>
                 </tbody>
               </table>
             </div>
          </section>

          <section id="what-not-to-do" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">What NOT To Do: Avoiding Common Pitfalls</h2>
             <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700 leading-relaxed">
               <li><strong>Do NOT switch off your phone permanently:</strong> This marks you as "Untraceable" (UTP) in the system. When digital communication fails, the bank is legally allowed to ramp up physical field visits to find you.</li>
               <li><strong>Do NOT promise what you cannot deliver:</strong> Do not tell an agent "I will pay five thousand on Monday" just to end the call. When you miss that promise, the system marks you as a "deceptive borrower," which triggers more aggressive tactics.</li>
               <li><strong>Do NOT use foul language:</strong> If you abuse the agent, they will record it and use it as evidence that *you* are the harasser. This can weaken your case if you later file a complaint with the Ombudsman.</li>
               <li><strong>Do NOT let them in your kitchen or bedroom:</strong> If an agent visits, keep them at the gate or in the drawing room. Allowing them into private spaces gives them psychological dominance over you and your family.</li>
               <li><strong>Do NOT take another high interest loan to pay an old one:</strong> This "Debt Trap" is common. Borrowing from local money lenders or predatory apps to pay a bank EMI will ruin your life. Settlement is a better alternative.</li>
             </ul>
          </section>

          <section id="right-way-to-handle" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">The Right Way to Handle Recovery Calls</h2>
             <div className="bg-green-50/50 p-10 rounded-3xl border border-green-100 shadow-sm">
                <p className="text-lg font-bold text-green-900 mb-6 italic underline decoration-green-200">The "Professional Borrower" Protocol:</p>
                <ol className="list-decimal pl-5 space-y-6 font-medium text-gray-800">
                  <li>
                    <strong>Identify the Caller:</strong> Ask for their full name and the name of the agency they represent. Write it down. This immediately changes the power dynamic.
                  </li>
                  <li>
                     <strong>State Your Reality:</strong> Do not be ashamed. "I have lost my income due to a layoff. I am currently unable to pay. I intend to resolve this as soon as my situation stabilizes."
                  </li>
                  <li>
                     <strong>Establish Boundaries:</strong> "I am happy to talk once a week to update you. Calling me ten times a day is harassment and I will report it."
                  </li>
                  <li>
                     <strong>Document Everything:</strong> Keep a "Harassment Log" with dates, times, and summaries of what was said. This log is your biggest weapon when dealing with the RBI Ombudsman.
                  </li>
                  <li>
                     <strong>Refuse Verbal Deals:</strong> Over the phone, agents might say "Just pay ten thousand and we will waive the rest." NEVER believe this. Any waiver or settlement MUST come on a formal bank letterhead via email.
                  </li>
                </ol>
             </div>
          </section>

          <section id="loan-settlement-role" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">How Loan Settlement Stops the Chaos Permanently</h2>
             <p className="text-lg leading-relaxed mb-6">
               If your financial hardship is genuine and long term (e.g., permanent job loss, medical disability, or business failure), continuing to answer calls is just a "Band Aid" on a deep wound. The interest and penalties will grow until they are larger than the original loan. The only sustainable exit strategy for unsecured debt is <strong>Professional Loan Settlement</strong>.
             </p>
             <p className="text-lg leading-relaxed mb-6">
               When you engage a firm like SettleLoans, we move you from a "Victim" to a "Client with Representation." 
             </p>
             <div className="grid sm:grid-cols-2 gap-6 mb-8">
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all border-b-4 border-b-[#1F5EFF]">
                 <h4 className="font-black text-2xl text-[#2E2E2E] mb-3">Legal Shield</h4>
                 <p className="text-sm text-gray-600 leading-relaxed">We issue a formal legal notice to the bank stating that we are your authorized representatives. Legally, the agents are now obligated to talk to us, not you.</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all border-b-4 border-b-[#1F5EFF]">
                 <h4 className="font-black text-2xl text-[#2E2E2E] mb-3">Interest Freeze</h4>
                 <p className="text-sm text-gray-600 leading-relaxed">We negotiate with the bank to stop the accumulation of penalty interest and late fees, which often make up thirty to forty percent of the total outstanding amount.</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all border-b-4 border-b-[#1F5EFF]">
                 <h4 className="font-black text-2xl text-[#2E2E2E] mb-3">Strategic Negotiation</h4>
                 <p className="text-sm text-gray-600 leading-relaxed">We use our database of thousands of successful settlements to know the "bottom line" for every bank. We negotiate a One Time Settlement (OTS) for fifty percent or less.</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all border-b-4 border-b-[#1F5EFF]">
                 <h4 className="font-black text-2xl text-[#2E2E2E] mb-3">NOC Verification</h4>
                 <p className="text-sm text-gray-600 leading-relaxed">We do not just get a deal; we ensure the No Dues Certificate is legally valid and that your credit report is updated to reflect the account as "Settled" or "Closed."</p>
               </div>
             </div>
          </section>

          <section id="mental-health-support" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">Mental Health and Family Support: Navigating the Crisis Together</h2>
             <p className="text-lg leading-relaxed mb-6">
               When you are <strong>ignoring calls of recovery agent</strong>, the stress does not stay contained within your phone. It spills over into your marriage, your relationship with your children, and your overall health. Debt is a heavy burden, but carrying it in secret makes it twice as heavy.
             </p>
             <p className="text-lg leading-relaxed mb-6">
               According to various psychologists working with financial distress in India, "Debt Shame" is the primary reason why people choose to ignore calls. They feel they have failed their families. However, the first step to resolution is breaking the silence at home. Your family needs to know that you are not being "irresponsible," but that you are facing a temporary financial crisis.
             </p>
             <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100 mb-8">
                <h4 className="font-bold text-purple-900 mb-4 text-xl">Protecting Your Family from Agent Harassment</h4>
                <ul className="space-y-4 text-purple-800">
                   <li><strong>Truth is a Shield:</strong> Inform your spouse and adult family members about the situation. If an agent calls them or visits, they should know exactly what to say: "Please talk to the borrower directly. Do not harass us."</li>
                   <li><strong>Digital Hygiene:</strong> Help your elderly parents block unknown numbers on their phones if they are getting spam calls from recovery agencies. Show them how to report these numbers as "Spam" on Truecaller.</li>
                   <li><strong>Legal Boundaries:</strong> Remind your family that an agent has NO right to enter your home or talk to anyone other than the borrower. If they attempt to intimidate a family member, it is a criminal offense.</li>
                </ul>
             </div>
             <p className="text-lg leading-relaxed mb-6">
               Beyond family, your physical health matters. Chronic high levels of cortisol (the stress hormone) caused by debt anxiety can lead to heart issues and a weakened immune system. Professional help, whether it is a financial counselor or a therapist, is not a sign of weakness. It is a strategic move to ensure you are healthy enough to fight back and rebuild your life.
             </p>
          </section>

          <section id="credit-score-reality" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">The Truth About Credit Score and the Default Cycle</h2>
             <p className="text-lg leading-relaxed mb-6">
               The most common fear that keeps borrowers trapped in the "Ignoring Calls" cycle is the fear of ruining their credit score. This is ironic because by ignoring the problem, you are causing the maximum possible damage. Once your account is marked as a "Willful Defaulter" or "Suit Filed," your financial identity is effectively frozen for years.
             </p>
             <p className="text-lg leading-relaxed mb-6">
               Here is the reality of the Indian credit scoring system (CIBIL/Experian):
             </p>
             <ul className="space-y-4 mb-8">
               <li className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold shrink-0 mt-1">!</div>
                 <p className="text-gray-700"><strong>The 30-60-90 Day Rule:</strong> Every thirty days you remain in default, your score drops. By the time you hit ninety days, your score has likely fallen from seven hundred fifty to below six hundred.</p>
               </li>
               <li className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold shrink-0 mt-1">!</div>
                 <p className="text-gray-700"><strong>The Settlement Status:</strong> A settlement is reported to CIBIL as "Settled." While this is not as good as "Closed" (fully paid), it is significantly better than "Written Off" or "Suit Filed." A settled account tells future lenders that you eventually cleared your dues, making you a "Medium Risk" rather than a "No Go."</p>
               </li>
               <li className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold shrink-0 mt-1">!</div>
                 <p className="text-gray-700"><strong>The Rebuilding Phase:</strong> Once you have your No Dues Certificate (NOC), you can immediately start the rebuilding process. Strategies like taking a small FD backed credit card and making on time payments can boost your score by fifty points every six months. In two years, you can be back in the "Good" category.</p>
               </li>
             </ul>
             <p className="text-lg leading-relaxed mb-8">
               Avoiding calls and letting the debt "rot" will keep your score in the graveyard for a decade. A settlement is the fastest legal bridge to a fresh financial start.
             </p>
          </section>

           <section id="reviews" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mt-24 mb-12 text-center">Real Stories: From Harassment to Freedom</h2>
             <div className="grid md:grid-cols-2 gap-8 not-prose mb-12">
               {[
                 { 
                   name: "Rajesh Menon", 
                   loc: "Hyderabad", 
                   loan: "Personal Loan: ₹5 Lakhs", 
                   res: "Settled for: ₹2.1 Lakhs",
                   story: "I stopped picking up calls because of the abuse. Agents were threatening to visit my daughter's school. SettleLoans stepped in, issued a legal warning, and handled everything. My peace is back."
                 },
                 { 
                   name: "Sneha Gupta", 
                   loc: "Delhi", 
                   loan: "Credit Card: ₹3.5 Lakhs", 
                   res: "Settled for: ₹1.2 Lakhs",
                   story: "My anxiety was so bad I almost quit my job to avoid the phone. The SettleLoans legal team directed all calls to themselves. I paid my settlement amount and now I'm debt free."
                 },
                 { 
                   name: "Amit Patel", 
                   loc: "Ahmedabad", 
                   loan: "Multiple Loans: ₹9 Lakhs", 
                   res: "Settled for: ₹4 Lakhs",
                   story: "Ignoring calls led to a Section 138 notice. SettleLoans replied to the notice and negotiated a settlement before it hit the court. Don't wait for a warrant, get help now."
                 },
                 { 
                   name: "David F.", 
                   loc: "Chennai", 
                   loan: "Personal Loan: ₹7 Lakhs", 
                   res: "Settled for: ₹3.2 Lakhs",
                   story: "Recovery agents were calling my HR manager. One letter from SettleLoans citing RBI privacy guidelines stopped that within twenty four hours. Professional and effective."
                 },
                 { 
                   name: "Priya Sharma", 
                   loc: "Pune", 
                   loan: "E-Commerce Loan: ₹2 Lakhs", 
                   res: "Settled for: ₹85,000",
                   story: "Predatory apps were threatening to leak my contact list. SettleLoans handled the digital harassment and got the account closed legally. Highly recommended for app harassment cases."
                 },
                 { 
                   name: "Vikram Shah", 
                   loc: "Mumbai", 
                   loan: "Business Loan: ₹15 Lakhs", 
                   res: "Settled for: ₹6.5 Lakhs",
                   story: "Business failed during the pandemic. I was paralyzed by the calls. SettleLoans negotiated with three different banks on my behalf. I am starting my new business with a clean slate."
                 },
                 { 
                   name: "Anjali G.", 
                   loc: "Bangalore", 
                   loan: "Credit Cards: ₹4 Lakhs", 
                   res: "Settled for: ₹1.5 Lakhs",
                   story: "The interest was higher than my salary. I was ignoring calls for six months. SettleLoans stopped the interest pile up and got me a deal I could actually afford to pay."
                 },
                 { 
                   name: "Karan Johar", 
                   loc: "Kolkata", 
                   loan: "Personal Loan: ₹6 Lakhs", 
                   res: "Settled for: ₹2.8 Lakhs",
                   story: "Agents were visiting my elderly parents' house. SettleLoans enforced the RBI home visit protocol and ensured all future communication happened only with me via email."
                 }
               ].map((review, i) => (
                 <div key={i} className="bg-white p-8 rounded-3xl border border-[#DEDEDE] shadow-sm hover:shadow-2xl transition-all duration-300 group">
                   <div className="flex items-center mb-6">
                     <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center font-bold text-[#1F5EFF] text-xl mr-4 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                       {review.name.charAt(0)}
                     </div>
                     <div>
                       <h5 className="font-extrabold text-lg text-[#2E2E2E]">{review.name}</h5>
                       <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{review.loc}</p>
                     </div>
                     <div className="ml-auto text-yellow-400 text-lg">★★★★★</div>
                   </div>
                   <div className="mb-6 flex flex-wrap gap-2">
                     <span className="text-[10px] font-bold bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100 uppercase tracking-tighter">⚠ {review.loan}</span>
                     <span className="text-[10px] font-bold bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100 uppercase tracking-tighter">✓ {review.res}</span>
                   </div>
                   <p className="text-base text-gray-600 italic leading-relaxed font-medium">"{review.story}"</p>
                 </div>
               ))}
             </div>
             <div className="bg-[#1F5EFF] rounded-[32px] p-12 text-center text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
               <h3 className="text-3xl md:text-4xl font-black mb-6 relative z-10">Stop Being a Victim of Harassment</h3>
               <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-medium relative z-10">
                 You have legal rights and we are here to enforce them. Join thousands of Indians who have reclaimed their peace.
               </p>
               <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#1F5EFF] font-black py-5 px-12 rounded-xl hover:scale-105 transition-all text-xl shadow-2xl relative z-10">
                 Speak with a Legal Expert
               </Link>
             </div>
           </section>

          {/* FAQs */}
          <section id="faqs" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4 not-prose">
              {jsonLd["@graph"][3]?.mainEntity?.map((faq: any, i: number) => (
                <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all">
                  <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-[#E3EDFF]/50 group-open:bg-[#E3EDFF]">
                    <span className="text-lg">{faq.name}</span>
                    <span className="transition-transform group-open:rotate-180">
                      <svg className="w-5 h-5 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-4 mt-0 bg-white">
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </section>

          <div className="mt-16 pt-8 border-t border-[var(--color-border)] text-center">
             <p className="text-[var(--color-text-muted)] text-sm italic">
               Disclaimer: This article is for informational purposes only and does not constitute legal advice. If you are facing harassment or legal action, please consult with a qualified professional.
             </p>
          </div>

        </article>

        {/* Right Column: CTA & Related Pages */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <div className="sticky top-24 space-y-8">
            
            {/* CTA Container */}
             <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
               <div className="bg-[#1F5EFF] p-4 text-center">
                 <h3 className="text-lg font-black text-white">Stop The Harassment</h3>
               </div>
               <div className="p-6 text-center">
                <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                  Let us handle the calls while you regain your peace of mind.
                </p>
                <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                  Get Help Now
                </Link>
                <p className="mt-4 text-xs text-[#DEDEDE]/60"> Confidential & Legal</p>
              </div>
            </div>

            {/* Related Pages Container */}
            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Related Resources</h3>
              <ul className="space-y-4 text-sm font-bold">
                 <li>
                  <Link href="/services/anti-harassment" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Anti Harassment Services
                  </Link>
                </li>
                <li>
                  <Link href="/loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Loan Settlement Guide
                  </Link>
                </li>
                 <li>
                  <Link href="/cheque-bounce" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                     <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Cheque Bounce Laws
                  </Link>
                </li>
                 <li>
                  <Link href="/credit-score-improvement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                     <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Fix Your Credit Score
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
