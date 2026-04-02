import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Recovery Agent Calling Family Members? RBI Rules & Legal Rights in India",
  description: "Are recovery agents calling your family members? Learn about the strict RBI rules that prohibit third-party contact, your legal rights against harassment, and how to file a complaint for immediate relief.",
  alternates: {
    canonical: "https://settleloans.in/recovery-agents-calling-family-members",
  },
};

export default function RecoveryAgentsCallingFamilyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/recovery-agents-calling-family-members#webpage",
        "url": "https://settleloans.in/recovery-agents-calling-family-members",
        "name": "Recovery Agent Calling Family Members? RBI Rules & Legal Rights in India",
        "description": "Comprehensive guide on RBI rules and legal rights when recovery agents contact family members in India.",
        "breadcrumb": { "@id": "https://settleloans.in/recovery-agents-calling-family-members#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/recovery-agents-calling-family-members#breadcrumb",
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
            "name": "Recovery Agent Calling Family Members",
            "item": "https://settleloans.in/recovery-agents-calling-family-members"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/recovery-agents-calling-family-members#article",
        "headline": "Is a Recovery Agent Calling Your Family Members? Know Your Rights and RBI Rules",
        "description": "Understand the legal framework and RBI guidelines that protect you and your family from recovery agent harassment in India.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Content Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-03-27",
        "dateModified": "2024-03-27",
        "mainEntityOfPage": { "@id": "https://settleloans.in/recovery-agents-calling-family-members#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/recovery-agents-calling-family-members#product",
        "name": "Legal Protection Against Recovery Harassment",
        "description": "Expert guidance and legal support to stop recovery agent harassment and settle debts fairly.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit Sharma" },
            "datePublished": "2024-02-15",
            "reviewBody": "SettleLoans helped me when recovery agents were calling my father every day. They stopped the calls within 24 hours.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sneha Gupta" },
            "datePublished": "2024-03-01",
            "reviewBody": "A very professional team. They know the RBI rules inside out and saved my family from a lot of stress.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh V." },
            "datePublished": "2024-03-10",
            "reviewBody": "I didn't know it was illegal for them to call my neighbors. SettleLoans explained my rights and handled the bank.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/recovery-agents-calling-family-members#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is it legal for recovery agents to call my family members?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, it is strictly illegal under RBI guidelines. Recovery agents are only permitted to contact the borrower or the guarantor. Contacting third parties like family, friends, or colleagues to discuss your debt or pressure you is a violation of the Fair Practices Code."
            }
          },
          {
            "@type": "Question",
            "name": "What are the RBI rules for recovery agents in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RBI rules mandate that agents must respect privacy, use polite language, call only between 8 AM and 7 PM, and never use threats or physical force. They must also carry ID cards and authorization letters from the bank."
            }
          },
          {
            "@type": "Question",
            "name": "Can I file a police complaint against a recovery agent for calling my mother?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can file an FIR for criminal intimidation, harassment, or defamation under relevant sections of the Indian Penal Code if an agent targets your family members."
            }
          },
          {
            "@type": "Question",
            "name": "How do recovery agents get the numbers of my relatives?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Agents often use illegal methods like phone book hacking, social media scraping, or contact harvesting from loan apps. This is a serious privacy breach and can be reported to the authorities."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if an agent threatens my family on WhatsApp?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Take screenshots of the messages, block the number, and file a complaint with the bank's Nodal Officer and the Cyber Cell of the police. Also, report the matter to the RBI Ombudsman."
            }
          },
          {
            "@type": "Question",
            "name": "Can a recovery agent come to my sister's house?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, visiting a third-party's house is a violation of RBI rules. They are only authorized to visit your registered residence or workplace."
            }
          },
          {
            "@type": "Question",
            "name": "Does SettleLoans help in stopping calls to family members?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide legal and representative services where we take over communication with the bank and ensuring that all illegal recovery tactics, including calling family, are stopped immediately."
            }
          },
          {
            "@type": "Question",
            "name": "What is the penalty for banks if their agents harass family members?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RBI can impose heavy financial penalties on banks and may even suspend their recovery operations in specific regions if systemic harassment is proven."
            }
          },
          {
            "@type": "Question",
            "name": "How do I report a recovery agent to the RBI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You must first file a complaint with the bank. If they don't resolve it within 30 days, you can lodge a complaint online at the RBI CMS portal (cms.rbi.org.in)."
            }
          },
          {
            "@type": "Question",
            "name": "Can I sue the bank for mental agony caused by recovery calls to my parents?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can approach the Consumer Forum or Civil Court to claim damages for mental harassment and breach of privacy if the bank fails to control its agents."
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
              Protect Your Family's Peace
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Recovery Agent Calling <br className="hidden md:block" /> Your Family Members?
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              It is strictly illegal for recovery agents to contact your parents, siblings, or friends. Learn the RBI rules and legal steps to stop the harassment now.
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
                <li>
                  <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
                </li>
                <li>
                  <span className="text-gray-300">/</span>
                </li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">
                  Recovery Agent Calling Family Members
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

          {/* Left Column: ToC (Sticky) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <TableOfContents
              items={[
                { id: "empathetic-opening", title: "Stop the Harassment" },
                { id: "rbi-rules-third-party", title: "RBI Rules Explained" },
                { id: "why-agents-call-family", title: "Why They Call Family" },
                { id: "unregulated-loan-apps", title: "Unregulated Loan Apps" },
                { id: "workplace-harassment", title: "Workplace & Colleagues" },
                { id: "legal-rights-india", title: "Your Legal Rights" },
                { id: "co-borrower-rights", title: "Co-Borrower Rights" },
                { id: "privacy-violations", title: "Privacy & Data Breach" },
                { id: "social-media-shaming", title: "Social Media Harassment" },
                { id: "rights-women-seniors", title: "Rights of Women & Seniors" },
                { id: "ipc-sections", title: "Criminal Liability" },
                { id: "defamation-deep-dive", title: "Defamation & Libel" },
                { id: "action-plan", title: "7 Steps to Take" },
                { id: "document-checklist", title: "Complaint Checklist" },
                { id: "banking-ombudsman", title: "The RBI Ombudsman" },
                { id: "mental-health-impact", title: "Protecting Mental Health" },
                { id: "glossary-terms", title: "Glossary of Terms" },
                { id: "settleloans-support", title: "How We Can Help" },
                { id: "success-stories", title: "Real Life Stories" },
                { id: "faqs", title: "Common Questions" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

            <section id="empathetic-opening" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Stop the Harassment: <span className="text-[#1F5EFF]">Protect Your Family Today</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-medium">
                  If the phone of your elderly mother or your younger sibling is ringing with aggressive calls from recovery agents, we know exactly how you feel. The sense of shame, the burning frustration, and the deep anxiety for your loved ones can be overwhelming. But here is the most important thing you need to know right now. What they are doing is not just unethical; it is a clear violation of the law in India.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                  You might feel like you have failed because you missed a few EMIs, but your financial struggles do not give anyone the right to harass your family. Your family members did not sign the loan agreement. They did not agree to be part of your financial transactions. The banks and their agents know this, yet they use these 'shame tactics' because they are effective. They want to make your life so miserable that you find money where there is none.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 font-bold text-[#1F5EFF]">
                  It's time to stand up. We are here to tell you that the Reserve Bank of India (RBI) is on your side. There are strict guidelines that protect you and your relatives. This page will guide you through every single rule, every legal section, and every step you can take to put a permanent end to this harassment.
                </p>
              </div>
            </section>

            <section id="rbi-rules-third-party" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                RBI Rules on Third-Party Contact: The Law is Clear
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The Reserve Bank of India (RBI) has issued several Master Circulars and guidelines that govern the behavior of recovery agents. The most significant among these is the Fair Practices Code. According to these guidelines, any regulated entity (Bank or NBFC) is responsible for the conduct of its outsourced agents. If an agent behaves badly, the bank is held accountable.
              </p>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                <h3 className="text-xl font-bold mb-6">Key RBI Guidelines You Must Know</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold mt-1">1</div>
                    <div>
                      <strong className="block text-[#2E2E2E] mb-1 text-lg">No Third-Party Disclosure</strong>
                      <p className="text-gray-600">Agents are strictly prohibited from disclosing the borrower's debt status to family members, friends, or neighbors. Your debt is a private contract between you and the bank.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold mt-1">2</div>
                    <div>
                      <strong className="block text-[#2E2E2E] mb-1 text-lg">Prohibition of Harassment</strong>
                      <p className="text-gray-600">The use of abusive language, shouting, or any form of verbal intimidation against family members is a severe violation. RBI treats this as lender misconduct.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold mt-1">3</div>
                    <div>
                      <strong className="block text-[#2E2E2E] mb-1 text-lg">Restricted Calling Hours</strong>
                      <p className="text-gray-600">Even if they were allowed to call (which they aren't for third parties), no calls should be made before 8:00 AM or after 7:00 PM. Local holidays and religious sentiments must also be respected.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold mt-1">4</div>
                    <div>
                      <strong className="block text-[#2E2E2E] mb-1 text-lg">Accountability of the Bank</strong>
                      <p className="text-gray-600">The RBI circular of August 2022 explicitly stated that banks will be held responsible for any harassment caused by their recovery agents. The bank cannot simply say 'it was the agent's mistake'.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                When an agent calls your relative, they almost always use a sense of urgency. They might say that you are 'absconding' or that a 'police case' is about to be filed. This is purely a tactic to cause panic. By understanding that these actions are prohibited by the regulator, you can react with confidence rather than fear.
              </p>
            </section>

            <section id="why-agents-call-family" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Why Recovery Agents Target Your Family: The Psychology of Shaming
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                You might wonder why a professional agent would risk their job by breaking RBI rules. The answer is simple: psychological leverage. In the Indian cultural context, family honor and 'Log Kya Kahenge' (What will people say) are extremely powerful motivators.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                  <h4 className="font-bold text-[#2E2E2E] mb-3 text-xl">The Pressure Point</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    By informing your parents or siblings, the agent creates a situation where you are forced to answer to your loved ones. This external pressure is often more intense than anything the bank could do legally.
                  </p>
                </div>
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                  <h4 className="font-bold text-[#2E2E2E] mb-3 text-xl">The Social Siege</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Agents aim to isolate the borrower. When your family starts questioning you or showing distress, you feel like you have no support system left, making you more likely to agree to high interest settlements.
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                It is important to remember that the agent is often paid on a commission basis. They are desperate to close the case to earn their percentage. This desperation leads them to ignore the rules. However, when you use the right legal language and show that you are aware of your rights, the agent often backs off because they realize you are 'high risk' for an RBI complaint.
              </p>
            </section>

            <section id="unregulated-loan-apps" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                The Menace of Unregulated Loan Apps: Digital Predators
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                In recent years, the Indian financial landscape has been flooded with hundreds of 'Instant Loan' apps. While some are legitimate, many are unregulated entities operating without an RBI license. These apps are the primary culprits behind extreme family harassment.
              </p>
              <div className="bg-red-50 p-8 rounded-3xl border border-red-200 mb-8">
                <h4 className="text-xl font-bold text-red-900 mb-4">How to Spot a Predatory App</h4>
                <ul className="space-y-3 text-red-800">
                  <li className="flex gap-2"><strong>• 7-Day Loans:</strong> Legitimate personal loans rarely have a tenure of just 7 or 15 days.</li>
                  <li className="flex gap-2"><strong>• Upfront Charges:</strong> They deduct 30% to 40% of the loan amount as 'processing fees' upfront.</li>
                  <li className="flex gap-2"><strong>• Permission Overload:</strong> They demand access to your gallery, location, and microphone just to show you an offer.</li>
                  <li className="flex gap-2"><strong>• Threatening Language:</strong> They start calling your relatives even before the due date as a 'reminder'.</li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Because these apps often operate from outside the country or through shell companies, reporting them to the bank doesn't work. The only way to stop them is a formal complaint with the Cyber Cell and the RBI's Sachet portal (sachet.rbi.org.in). If you have been targeted by such an app, do not pay more than the principal amount you received. Paying 'extension fees' or 'late fees' to these entities only fuels more harassment.
              </p>
            </section>

            <section id="workplace-harassment" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Workplace Harassment: Protecting Your Career and Reputation
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Perhaps the most damaging tactic used by recovery agents is calling the borrower's workplace or contacting their colleagues. This is a direct attempt to jeopardize your employment and cause extreme social embarrassment. The logic is simple but cruel: if you feel your job is at risk, you will do anything to pay the debt.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-xl">
                <h4 className="font-bold text-orange-900 mb-2">The 'Reference' Fallacy</h4>
                <p className="text-orange-800 text-sm italic">
                  Agents often lie and say that a colleague or manager was listed as a 'reference' on your loan application. Even if they were (which is rare for unsecured loans), being a reference does not make them a guarantor. The bank has no legal right to discuss your personal financial status with them.
                </p>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                When an agent calls your office landline or seeks out your HR manager, they are violating the principle of professional conduct. The RBI has stated that recovery efforts should not interfere with the borrower's ability to work. Harassing colleagues can be treated as 'Criminal Intimidation' and 'Defamation' because it creates a false impression of your character in a professional setting.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                If this happens, you should immediately inform your HR department that you are being targeted by cyber-harassment and that the calls are unauthorized. Provide them with the RBI guidelines that prohibit such calls. This proactive step prevents the agent from using your career as a bargaining chip.
              </p>
            </section>

            <section id="legal-rights-india" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Your Fundamental Rights: Privacy and Dignity Under Indian Law
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Beyond RBI guidelines, you are protected by the Constitution of India and various statutes. The Right to Privacy has been declared a Fundamental Right by the Supreme Court of India in the landmark Justice K.S. Puttaswamy (Retd.) case. 
              </p>
              <p className="text-lg leading-relaxed mb-6">
                When a recovery agent calls your relative, they are committing a 'Breach of Confidentiality'. Your relationship with the bank is an entrustment of data. The bank has no authority to share that information with anyone else. Even your spouse is a third party in the eyes of the law if they are not a co-borrower or a guarantor.
              </p>
              <div className="bg-[#1F5EFF]/5 p-8 rounded-2xl border border-[#1F5EFF]/20 mb-8">
                <h3 className="text-2xl font-black text-[#2E2E2E] mb-4">The 'Doorstep' Rule</h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  Recovery agents are permitted to visit your registered home address, but they must maintain decorum. They cannot shout in the hallway, they cannot prevent you from going to work, and they absolutely cannot refuse to leave when asked. If an agent enters your home without permission or refuses to leave, it is considered 'Criminal Trespass'.
                </p>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Many agents will try to 'shame' you by speaking loudly in front of neighbors. This is a clear case of Defamation under Section 499 of the Indian Penal Code. You have the right to a dignified life, regardless of your debt status. Defaulting on a loan is a civil matter; it is not a crime. You cannot be treated like a criminal for being unable to pay an EMI.
              </p>
            </section>

            <section id="co-borrower-rights" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Co-Borrower vs. Family: Understanding the Legal Distinction
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                There is a significant legal difference between a co-borrower and a family member who is merely a relative. A co-borrower has signed the loan agreement and is equally responsible for repayment. The bank has the legal right to contact a co-borrower for recovery.
              </p>
              <div className="bg-gray-100 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-700 leading-relaxed mb-4 font-bold">However, even for a co-borrower, the rules of conduct remain the same:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>No calling during restricted hours (8 AM to 7 PM only).</li>
                  <li>No use of abusive language or shouting.</li>
                  <li>No threats of physical harm or legal consequences not supported by law.</li>
                  <li>No sharing of the debt status with the co-borrower's workplace or friends.</li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                If your relative is NOT a co-borrower or a guarantor, the bank has zero legal standing to even inform them about the loan. Any such disclosure is a breach of the 'Banker's Duty of Confidentiality', a principle that has been upheld by Indian courts for decades. Even if they are your spouse, if they have not signed the documents, they are a third party in the eyes of the law.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Recovery agents often deliberately confuse these terms to make family members feel legally obligated to pay. They might say, "You are his wife, you have to pay," or "Your son lives in your house, so you are responsible." These are lies. In India, debt is individual unless specifically co-signed. Standing your ground on this legal fact is the first step to stopping the harassment.
              </p>
            </section>

            <section id="privacy-violations" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Data Privacy and Illegal Contact Harvesting</h2>
              <p className="mb-6 text-lg">
                One of the most common questions we hear is: "How did the agent get my mother's number? I never gave it to the bank!" The answer is often disturbing and involves illegal digital practices.
              </p>
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm hover:border-[#1F5EFF]/50 transition-colors">
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">1. Contact List Harvesting</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Many fintech and digital lending apps require 'permissions' to access your contacts when you install the app. Once you grant this, they upload your entire phonebook to their servers. When you default, their 'bots' immediately start calling every number in your list, starting with those labeled 'Mom', 'Dad', or 'Home'.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm hover:border-[#1F5EFF]/50 transition-colors">
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">2. Social Media Scraping</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Agents are trained to search for you on Facebook, Instagram, and LinkedIn. They look at your 'Friends' list and find relatives with the same surname or those you are tagged with in photos. They then use third-party databases (like Truecaller or other leaked data) to find their phone numbers.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm hover:border-[#1F5EFF]/50 transition-colors">
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">3. Credit Bureau Leaks</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Sometimes, relatives share an address or have been co-applicants on a previous totally unrelated loan. Agents use this link to retrieve their contact details from internal bank records or from credit reports.
                  </p>
                </div>
              </div>
              <p className="mt-8 text-lg font-medium text-red-600">
                Warning: These practices are a massive violation of the IT Act and the newly enacted Digital Personal Data Protection Act. Using your private data for harassment is a punishable offense.
              </p>
            </section>

            <section id="social-media-shaming" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Social Media Harassment: The New Frontier of Shaming</h2>
              <p className="mb-6 text-lg leading-relaxed">
                As physical recovery becomes harder due to stricter regulations, many rogue agencies have turned to social media shaming. This involves agents creating fake profiles or using official-looking accounts to post comments on your public photos or, worse, on the profiles of your family members.
              </p>
              <div className="bg-red-50 p-8 rounded-2xl border border-red-100 mb-8">
                <h3 className="text-xl font-bold text-red-900 mb-4 italic">Types of Digital Harassment</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0"></span>
                    <p className="text-red-800"><strong>Public Comments:</strong> Posting messages like "Pay your debt" or "Stop hiding from the bank" on your public posts or your relatives' profile pictures.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0"></span>
                    <p className="text-red-800"><strong>WhatsApp Groups:</strong> Creating a group with your family members and neighbors, title it "Loan Defaulter Group", and adding you to it. This is a severe privacy breach.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0"></span>
                    <p className="text-red-800"><strong>Fake Legal Notices:</strong> Sending PDF documents on WhatsApp that look like court summons or police warrants to your parents to scare them.</p>
                  </li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                All these actions are strictly illegal under the Information Technology Act, 2000. Specifically, Section 66E (Violation of Privacy) and Section 67 (Publishing Obscene Information) can be invoked depending on the nature of the messages. The Cyber Cell of the police is the correct authority to handle these cases. Do not delete these messages; they are your primary evidence.
              </p>
            </section>

            <section id="rights-women-seniors" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Specific Rights for Women and Senior Citizens</h2>
              <p className="mb-6 text-lg leading-relaxed">
                The Indian legal system and the RBI provide additional layers of protection for vulnerable groups like women and senior citizens. If a recovery agent targets your elderly parents or uses inappropriate language with female family members, the legal consequences for the bank are significantly higher.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8 text-lg">
                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                  <h4 className="font-black text-blue-900 mb-3">Protection for Women</h4>
                  <p className="text-blue-800/80 leading-relaxed text-sm">
                    Female family members cannot be harassed or threatened. If a male agent visits the house and a woman is alone, she has the right to refuse entry. Any use of indecent or suggestive language falls under Section 509 of the IPC (Insulting the Modesty of a Woman).
                  </p>
                </div>
                <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100">
                  <h4 className="font-black text-amber-900 mb-3">Senior Citizen Protection</h4>
                  <p className="text-amber-800/80 leading-relaxed text-sm">
                    Harassing senior citizens for a child's debt can be reported under the Maintenance and Welfare of Parents and Senior Citizens Act. The RBI considers the mental health and physical well-being of elderly dependents as a top priority in fair practice audits.
                  </p>
                </div>
              </div>
            </section>

            <section id="ipc-sections" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Criminal Liability: Sections of the IPC</h2>
              <p className="mb-6 text-lg">
                While debt is civil, harassment is criminal. If a recovery agent crosses the line, they can be prosecuted under several sections of the Indian Penal Code (IPC). Knowing these sections will help you when filing a police complaint.
              </p>
              <div className="overflow-x-auto mb-8 border border-[#DEDEDE] rounded-2xl">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-[#DEDEDE]">
                    <tr>
                      <th className="p-4 font-bold text-[#2E2E2E]">IPC Section</th>
                      <th className="p-4 font-bold text-[#2E2E2E]">Application</th>
                      <th className="p-4 font-bold text-[#2E2E2E]">What it Covers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DEDEDE]">
                    <tr>
                      <td className="p-4 font-mono text-sm text-[#1F5EFF]">503 & 506</td>
                      <td className="p-4">Criminal Intimidation</td>
                      <td className="p-4 text-sm text-gray-600">Threatening to harm you or your family's reputation or property.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-sm text-[#1F5EFF]">441 & 447</td>
                      <td className="p-4">Criminal Trespass</td>
                      <td className="p-4 text-sm text-gray-600">Entering your house without permission or refusing to leave.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-sm text-[#1F5EFF]">499 & 500</td>
                      <td className="p-4">Defamation</td>
                      <td className="p-4 text-sm text-gray-600">Shaming you in front of family, friends, or the public.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-sm text-[#1F5EFF]">509</td>
                      <td className="p-4">Insulting Modesty</td>
                      <td className="p-4 text-sm text-gray-600">Using inappropriate language or behavior towards women in the family.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-sm text-[#1F5EFF]">383 & 384</td>
                      <td className="p-4">Extortion</td>
                      <td className="p-4 text-sm text-gray-600">Using fear to force you to sign documents or pay money illegally.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                When you tell a recovery agent, "Your actions fall under Section 506 of the IPC for criminal intimidation," their attitude often changes. They are used to dealing with people who are scared; they are not used to dealing with people who are legally armed.
              </p>
            </section>

            <section id="defamation-deep-dive" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Deep Dive: Defamation and Your Social Reputation</h2>
              <p className="mb-6 text-lg leading-relaxed text-[var(--color-text-body)]">
                Defamation is the act of making a false statement about someone that causes harm to their reputation. In the context of recovery, telling your neighbors or relatives that you are a 'fraud' or a 'criminal' because of an unpaid loan is a classic case of Defamation.
              </p>
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 shadow-sm mb-8">
                <h4 className="text-xl font-bold mb-4">Establishing a Case for Defamation</h4>
                <p className="mb-4 text-gray-600">For a statement to be defamatory in India, three conditions must be met:</p>
                <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                  <li><strong>The Statement must be Defamatory:</strong> It must lower your estimation in the eyes of right-thinking members of society.</li>
                  <li><strong>It must Refer to You:</strong> The statement must clearly be about you.</li>
                  <li><strong>It must be Published:</strong> It must be communicated to a third party (your family, friends, or coworkers).</li>
                </ol>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                When an agent shouts your debt amount in the common area of your apartment complex, they have 'published' defamatory information. You can seek both civil damages and criminal prosecution. While civil suits take time, the threat of a criminal defamation case is often enough to make the bank settle the matter and discipline the agent.
              </p>
            </section>

            <section id="action-plan" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">5-Step Action Plan to Stop the Calls</h2>
              <p className="mb-10 text-lg">
                If the calls to your family have started, do not panic. Follow this systematic approach to stop them. Consistency is key here.
              </p>
              <div className="space-y-12">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#2E2E2E] text-white flex items-center justify-center font-bold">1</div>
                  <h4 className="text-2xl font-bold text-[#2E2E2E] mb-4">Record and Document Everything</h4>
                  <p className="text-gray-600 mb-4">
                    Install a call recorder and take screenshots of every WhatsApp message. If the agent calls your mother, ask her to record the call too. Note down the time, the phone number, and the agent's name. This evidence is your most powerful tool in an RBI or police complaint.
                  </p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#2E2E2E] text-white flex items-center justify-center font-bold">2</div>
                  <h4 className="text-2xl font-bold text-[#2E2E2E] mb-4">Identify the Source</h4>
                  <p className="text-gray-600 mb-4">
                    Before you hang up, politely ask: "Which bank or NBFC are you representing?" and "What is the name of your agency?". If they refuse to provide this, they are likely an unauthorized agent. In that case, you can tell them they have no legal standing to talk to you.
                  </p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#2E2E2E] text-white flex items-center justify-center font-bold">3</div>
                  <h4 className="text-2xl font-bold text-[#2E2E2E] mb-4">Formal Legal Notice</h4>
                  <p className="text-gray-600 mb-4">
                    Send an email and a registered post to the bank's Nodal Officer or Principal Nodal Officer. State clearly that their agents are harassing third parties who are not borrowers or guarantors. Inform them that this is a violation of the RBI Fair Practice Code and that you will hold the bank liable for any mental agony caused.
                  </p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#2E2E2E] text-white flex items-center justify-center font-bold">4</div>
                  <h4 className="text-2xl font-bold text-[#2E2E2E] mb-4">The 'Silence' Strategy</h4>
                  <p className="text-gray-600 mb-4">
                    Inform your family members to simply say: "The borrower is aware of the situation. I am not a party to this loan. Please do not call this number again or I will report you for illegal harassment." Then, have them block the number. Do not engage in long arguments; that is what the agent wants.
                  </p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#2E2E2E] text-white flex items-center justify-center font-bold">5</div>
                  <h4 className="text-2xl font-bold text-[#2E2E2E] mb-4">Involve Professionals</h4>
                  <p className="text-gray-600 mb-4">
                    If the harassment continues, involve a debt consultancy like SettleLoans. We act as your official representative. Once we step in, we inform the bank that all communication must be through us. This legal shield usually stops the calls to family members instantly.
                  </p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#2E2E2E] text-white flex items-center justify-center font-bold">6</div>
                  <h4 className="text-2xl font-bold text-[#2E2E2E] mb-4">The Civil Court Route</h4>
                  <p className="text-gray-600 mb-4">
                    In cases of extreme harassment leading to mental health issues or loss of job, you can approach the civil court for an 'Injunction' to stop agents from entering a specific radius of your home or office. This is a powerful legal order.
                  </p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#2E2E2E] text-white flex items-center justify-center font-bold">7</div>
                  <h4 className="text-2xl font-bold text-[#2E2E2E] mb-4">Public Disclosure via Ombudsman</h4>
                  <p className="text-gray-600 mb-4">
                    Make it public. Banks are terrified of bad PR. Once your Ombudsman complaint is registered, the bank's internal score drops. This pressure forces them to come to the negotiation table for a fair settlement.
                  </p>
                </div>
              </div>
            </section>

            <section id="document-checklist" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The Complaint Document Checklist</h2>
              <p className="mb-6 text-lg leading-relaxed">
                To win a case against a bank for agent harassment, your paperwork must be flawless. Do not rely on verbal complaints. Use this checklist to organize your case.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8 text-[var(--color-text-body)]">
                <div className="p-4 border border-[#DEDEDE] rounded-xl flex items-center gap-3">
                  <span className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold">1</span>
                  <span>Call logs with timestamps</span>
                </div>
                <div className="p-4 border border-[#DEDEDE] rounded-xl flex items-center gap-3">
                  <span className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold">2</span>
                  <span>Recordings of abusive calls</span>
                </div>
                <div className="p-4 border border-[#DEDEDE] rounded-xl flex items-center gap-3">
                  <span className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold">3</span>
                  <span>Screenshots of WhatsApp threats</span>
                </div>
                <div className="p-4 border border-[#DEDEDE] rounded-xl flex items-center gap-3">
                  <span className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold">4</span>
                  <span>Copy of your email to the Nodal Officer</span>
                </div>
                <div className="p-4 border border-[#DEDEDE] rounded-xl flex items-center gap-3">
                  <span className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold">5</span>
                  <span>Copy of ADR (Acknowledgment Receipt)</span>
                </div>
                <div className="p-4 border border-[#DEDEDE] rounded-xl flex items-center gap-3">
                  <span className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold">6</span>
                  <span>Witness statements from family/friends</span>
                </div>
              </div>
            </section>

            <section id="banking-ombudsman" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Escalating to the RBI Ombudsman</h2>
              <p className="mb-6 text-lg">
                If the bank fails to resolve your complaint within 30 days, or if their response is unsatisfactory, you have the right to approach the RBI Banking Ombudsman (also known as the Integrated Ombudsman Scheme). This is a free service provided by the regulator.
              </p>
              <div className="bg-white border-2 border-[#1F5EFF] p-8 rounded-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-[#1F5EFF]">How to File an RBI Complaint</h3>
                  <p className="mb-6 text-gray-700">The process is now fully digital and very efficient. The RBI takes a very dim view of lenders who target third parties.</p>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-6 text-sm font-bold">
                    <li className="p-3 bg-gray-50 rounded-lg">Visit cms.rbi.org.in</li>
                    <li className="p-3 bg-gray-50 rounded-lg">Upload your call recordings</li>
                    <li className="p-3 bg-gray-50 rounded-lg">Show your letter to the Nodal Officer</li>
                    <li className="p-3 bg-gray-50 rounded-lg">Demand a 'Cease and Desist'</li>
                  </ul>
                  <p className="text-sm text-gray-600 italic">Pro Tip: Always mention that the harassment is causing 'unbearable mental agony' to senior citizens or dependent family members if that is the case. This increases the severity of the complaint in the eyes of the Ombudsman.</p>
                </div>
              </div>
            </section>

            <section id="mental-health-impact" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Protecting the Mental Health of Your Loved Ones</h2>
              <p className="mb-8 text-lg">
                The financial damage of debt can be repaired, but the emotional scars of harassment take longer to heal. It is vital to communicate with your family during this time.
              </p>
              <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-emerald-900 mb-4">Breaking the Shame</h3>
                  <p className="text-emerald-800/80 leading-relaxed mb-4">
                    Sit down with your family and explain the situation. Tell them that you are handling the problem and that the agent's calls are a desperate, illegal tactic. When they understand the 'why' behind the calls, they stop feeling personally targeted.
                  </p>
                  <p className="text-emerald-800/80 leading-relaxed font-bold">
                    Remind them: "The bank's mistake does not define our family's worth. We will get through this together."
                  </p>
                </div>
                <div className="w-24 h-24 bg-emerald-200 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-12 h-12 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
                </div>
              </div>
            </section>

            <section id="glossary-terms" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Glossary of Debt Recovery Terms</h2>
              <p className="mb-8 text-lg leading-relaxed">
                To fight the system, you must know their language. Here are common terms used by banks and recovery agents.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 bg-white border border-gray-100 rounded-xl">
                  <h5 className="font-black text-[#1F5EFF] mb-2">DRA (Debt Recovery Agent)</h5>
                  <p className="text-xs text-gray-500">A person trained to recover debt. Legally required to pass an IIBF certification and follow RBI rules.</p>
                </div>
                <div className="p-5 bg-white border border-gray-100 rounded-xl">
                  <h5 className="font-black text-[#1F5EFF] mb-2">Fair Practice Code</h5>
                  <p className="text-xs text-gray-500">The set of guidelines issued by RBI that dictates how a lender should interact with customers.</p>
                </div>
                <div className="p-5 bg-white border border-gray-100 rounded-xl">
                  <h5 className="font-black text-[#1F5EFF] mb-2">NPA (Non-Performing Asset)</h5>
                  <p className="text-xs text-gray-500">A loan where interest or principal has not been paid for more than 90 days.</p>
                </div>
                <div className="p-5 bg-white border border-gray-100 rounded-xl">
                  <h5 className="font-black text-[#1F5EFF] mb-2">OTS (One-Time Settlement)</h5>
                  <p className="text-xs text-gray-500">An agreement where the bank allows the borrower to pay a reduced amount to close the loan permanently.</p>
                </div>
                <div className="p-5 bg-white border border-gray-100 rounded-xl">
                  <h5 className="font-black text-[#1F5EFF] mb-2">Write-Off</h5>
                  <p className="text-xs text-gray-500">An accounting procedure where the bank removes the loan from its active books, though the right to recover remains.</p>
                </div>
                <div className="p-5 bg-white border border-gray-100 rounded-xl">
                  <h5 className="font-black text-[#1F5EFF] mb-2">Drt (Debt Recovery Tribunal)</h5>
                  <p className="text-xs text-gray-500">A special court in India established for fast-track recovery of debts due to banks and financial institutions.</p>
                </div>
              </div>
            </section>

            <section id="settleloans-support" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">How SettleLoans Can Shield Your Family</h2>
              <p className="mb-6 text-lg">
                At SettleLoans, we don't just negotiate numbers; we protect people. We understand that the most urgent need for many of our clients isn't just the settlement amount, but the cessation of calls to their family members.
              </p>
              <div className="bg-[#2E2E2E] text-white p-10 rounded-3xl mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F5EFF]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <h3 className="text-3xl font-black mb-8 relative z-10">Our 'Protection First' Approach</h3>
                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-4">
                    <h4 className="text-[#1F5EFF] font-bold">Immediate Transition</h4>
                    <p className="text-sm opacity-80 leading-relaxed">Once you sign up, we send a formal notice to the bank stating that you are officially being represented by us. This legally shifts the communication channel.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[#1F5EFF] font-bold">Legal Counter-Attacks</h4>
                    <p className="text-sm opacity-80 leading-relaxed">If calls persist after our notice, we escalate directly to the Principal Nodal Officer with proof of harassment, which usually results in the agent's agency being blacklisted by the bank.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[#1F5EFF] font-bold">Representative Calls</h4>
                    <p className="text-sm opacity-80 leading-relaxed">We handle all incoming calls from recovery agents. We talk their language, we know the codes, and we make it clear that their tactics won't work on us.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[#1F5EFF] font-bold">Debt Settlement Success</h4>
                    <p className="text-sm opacity-80 leading-relaxed">Our ultimate goal is to settle your debt for 40-70% less, closing the account permanently and ensuring your family never hears from them again.</p>
                  </div>
                </div>
              </div>
              <p className="font-bold text-center text-xl mt-10">
                You don't have to face the storm alone. Let us be your shield.
              </p>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Real Stories of Restored Peace</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose">
                {[
                  {
                    name: "Vikram R.",
                    loc: "Mumbai",
                    story: "The agents were calling my sister's office. She was terrified for her job. SettleLoans stepped in, sent a notice, and the calls stopped by that afternoon. I can't thank them enough for saving her reputation."
                  },
                  {
                    name: "Anjali S.",
                    loc: "Delhi",
                    story: "They called my mother and told her I was in police custody. She almost had a panic attack. SettleLoans handled the bank very aggressively and got me a settlement that cleared my name."
                  },
                  {
                    name: "Suresh P.",
                    loc: "Bangalore",
                    story: "I didn't know the rules. I thought I had to take the abuse. SettleLoans empowered me. They stopped the harassment and settled my three credit cards for 50% of the principal."
                  },
                  {
                    name: "Manish K.",
                    loc: "Pune",
                    story: "My neighbor was told about my debt. It was so humiliating. SettleLoans filed a formal defamation complaint with the bank and the calls stopped instantly. They are true professionals."
                  }
                ].map((testimonial, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-lg transition-all border-l-4 border-l-[#1F5EFF]">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 flex items-center justify-center font-bold text-[#1F5EFF] mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-bold text-[#2E2E2E] text-lg">{testimonial.name}</h5>
                        <p className="text-sm text-gray-400">{testimonial.loc}</p>
                      </div>
                      <div className="ml-auto text-yellow-400">★★★★★</div>
                    </div>
                    <p className="text-gray-600 italic leading-relaxed">"{testimonial.story}"</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="future-protection" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">How to Protect Your Contacts in the Future</h2>
              <p className="mb-6 text-lg">
                Prevention is better than cure. Even as you resolve your current debt, take these steps to ensure your digital footprint is secure.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold shrink-0 mt-1">✓</span>
                  <p><strong>Revoke App Permissions:</strong> Go to your phone settings and check which apps have access to your 'Contacts'. If it's a loan app you are no longer using, revoke it immediately.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold shrink-0 mt-1">✓</span>
                  <p><strong>Privacy Settings:</strong> Make your social media profiles (Facebook, Instagram) private. Hide your friend list so agents cannot scrape contacts.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold shrink-0 mt-1">✓</span>
                  <p><strong>Use Truecaller Wisely:</strong> Avoid giving Truecaller permission to upload your contacts. This data is often sold or leaked to third-party recovery agencies.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold shrink-0 mt-1">✓</span>
                  <p><strong>Avoid Illegal Apps:</strong> Never download 'Instant Loan' apps that are not registered with the RBI. These are the main culprits in contact-harvesting harassment.</p>
                </li>
              </ul>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4 not-prose">
                {[
                  { q: "Is it legal for recovery agents to contact my relatives?", a: "No, it is strictly prohibited. RBI's Master Circular on Fair Practices Code specifically bans contacting third parties like family or friends to recover debt." },
                  { q: "Can a bank take action against me if I report their agent?", a: "No. Filing a legitimate complaint about harassment is your right. Banks are legally required to address these complaints through their grievance redressal mechanism." },
                  { q: "What should my family members say to the agents?", a: "They should say: 'I am not a borrower or a guarantor for this loan. This is my private number. Stop calling me or I will file a police complaint for harassment.' They should then block the number." },
                  { q: "Can agents call my workplace?", a: "They can visit your workplace to discuss the debt with YOU only. They cannot inform your boss or HR about the debt or cause a scene at your office." },
                  { q: "How long does it take for a complaint to work?", a: "An internal bank complaint takes up to 30 days. However, professional notices from consultancies like SettleLoans often stop the calls within 24-48 hours." },
                  { q: "What if the agent uses a fake number?", a: "Even if the number is fake, they will mention the name of the bank or the loan app. File the complaint against that entity. They are responsible for their agents' use of fake IDs." },
                  { q: "Do I have to pay the debt to stop the harassment?", a: "No. You have to pay the debt to close the account, but the harassment must stop immediately because it is illegal, regardless of whether you have paid or not." },
                  { q: "Can SettleLoans stop physical home visits as well?", a: "Yes. We provide clear legal instructions to the bank that all visits must be coordinated and all communication must be through us, which stops unauthorized or aggressive home visits." },
                  { q: "Are RBI rules applicable to NBFCs and Apps too?", a: "Yes, all RBI-registered NBFCs and legitimate lending apps are bound by the same Fair Practice Code as traditional banks." },
                  { q: "Can I get compensation for the harassment?", a: "Yes, you can approach Consumer Courts to seek compensation for mental suffering and breach of privacy if the harassment is proven." },
                  { q: "What is an 'Authorization Letter' and why should I ask for it?", a: "It is a document issued by the bank authorizing a specific agency to recover debt from you. If an agent doesn't have it, they are legally unauthorized to speak with you." },
                  { q: "Can a recovery agent threaten to block my PAN card?", a: "No. Recovery agents have no power over your government IDs. They can only impact your credit score via the bank's reporting to bureaus." },
                  { q: "Do agents have the right to follow me to a social event?", a: "Absolutely not. This is considered stalking and is a criminal offense under the IPC. You should call the police immediately if this occurs." },
                  { q: "What should I do if they use my photo on a 'Wanted' poster?", a: "This is severe defamation and a violation of privacy. Take a photo of the poster and file a direct FIR against the agency and the bank." },
                  { q: "Can a recovery agent force me to sell my furniture?", a: "No. Only a court officer, following a specific legal process, can seize assets. Recovery agents have no such power." },
                  { q: "Is it okay to record the agent without their permission?", a: "In India, recording a conversation you are a part of is generally legal for evidence purposes in cases of harassment or crime." },
                  { q: "Does reporting them to RBI affect my debt?", a: "Reporting harassment doesn't cancel the debt, but it gives you leverage in negotiations and can lead to interest waivers or better settlement terms." },
                  { q: "How can I find the contact of a bank's Nodal Officer?", a: "Every bank is required to list this on their website under the 'Grievance Redressal' section. It's usually a senior official who handles escalated complaints." },
                  { q: "Can agents enter my bedroom or kitchen during a visit?", a: "No. While they can visit your home, they should remain in the living area. Entering private chambers like bedrooms without invitation is a breach of decorum and privacy." },
                  { q: "What if the agent claims to be a 'Police Officer'?", a: "This is 'Impersonation of a Public Servant', a serious crime under the IPC. Ask for their badge number and office address. If they hesitate, they are lying. Record this as it is a major leverage point." }
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

            {/* Bottom Disclaimer */}
            <div className="mt-16 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans is a professional debt consultancy. While we provide legal guidance and representative services, we are not a law firm. This information is based on RBI guidelines and current Indian laws. Always consult with a qualified legal professional for specific criminal matters. Our goal is to empower borrowers with knowledge and provide a platform for fair debt resolution.</p>
              <div className="mt-8 p-10 bg-gray-50 rounded-3xl text-left border border-gray-100">
                <h3 className="text-2xl font-black mb-4">Final Word: Your Future is Not Your Debt</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We want to leave you with one final thought. The stress of debt can make you feel like your life is over, but it is just a temporary phase. Thousands of people in India face financial difficulties every single day. The difference between those who recover and those who don't is knowledge and support.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  By reading this guide, you have already taken the first step toward reclaiming your life. You now know that you are not a criminal, that your family is protected by law, and that there are professional organizations ready to help you. Do not let the threats of a recovery agent define your self-worth.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Stay strong, stay informed, and remember that there is always a way out. Whether it's through a structured settlement, a legal counter-complaint, or simply by asserting your rights, you can and will achieve a debt-free future. SettleLoans is here to walk that path with you.
                </p>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden mt-16 mb-8">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                  <h3 className="text-2xl font-black mb-2">Stop the Calls Today</h3>
                  <p className="opacity-90 text-sm">Join thousands of Indians who have reclaimed their privacy with SettleLoans.</p>
                </div>
                <div className="p-8 text-center text-[#DEDEDE]">
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                    Speak to an Expert
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Right Column: CTA & Related (Sticky) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8">

              {/* CTA Container */}
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                <div className="bg-[#1F5EFF] p-4 text-center">
                  <h3 className="text-lg font-black text-white">Protect Your Family</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                    Don't let them harass your loved ones. Get expert legal help to stop recovery calls today.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                    Talk to Us for Free
                  </Link>
                  <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">100% Confidential</p>
                </div>
              </div>

              {/* Related Pages Container */}
              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Related Resources</h3>
                <ul className="space-y-4 text-sm font-bold">
                  <li>
                    <Link href="/rbi-rules-for-recovery-agents" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      RBI Recovery Rules
                    </Link>
                  </li>
                  <li>
                    <Link href="/recovery-agent-home-visit-rules" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Home Visit Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link href="/recovery-agent-harassment-complaint" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      How to File Complaint
                    </Link>
                  </li>
                  <li>
                    <Link href="/ignoring-calls-of-recovery-agent" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Ignoring Agent Calls?
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement-lawyers" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Legal Rights of Borrowers
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Bottom CTA Container */}
              <div className="bg-[#1F5EFF]/5 p-6 rounded-2xl border border-[#1F5EFF]/20">
                <h4 className="text-[#1F5EFF] font-black text-sm mb-3">Professional Shield</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-4 font-medium">We act as your representative, stopping all direct contact between agents and your family members permanently.</p>
                <Link href="/contact" className="text-xs font-black text-[#1F5EFF] hover:underline">Start Your Protection →</Link>
              </div>

            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
